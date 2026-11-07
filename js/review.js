// 🔁 Spaced, interleaved review — pure functions (no DOM, no storage) so they can be unit-tested.
// Why: retrieval spread over growing gaps (spacing) and mixed across topics (interleaving) are among the
// best-supported ways to make learning last. Healthy-engagement rules: no streaks, no penalty for missed days
// (due questions simply wait), a small daily cap, and points only for questions that are actually due.
// A question enters the review once it has been solved; it is first due the day after it was last answered.
window.MQ = window.MQ || {};

MQ.review = (function () {
  const DAY = 864e5;
  const GAPS = [1, 3, 7, 14, 30, 60];     // days until the next review, by box after a right answer
  const MAX_BOX = GAPS.length - 1;
  const LONG_TERM_BOX = 3;                // box ≥ 3 → remembered over ≥ 2 weeks
  const DAILY = 8;
  const XP = 2;

  // Local calendar day number of a timestamp.
  function dayIndex(ts) {
    const offset = new Date(ts).getTimezoneOffset() * 60000;
    return Math.floor((ts - offset) / DAY);
  }

  function dueDay(answer, rec) {
    if (rec && Number.isFinite(rec.due)) return rec.due;
    return answer && Number.isFinite(answer.last) ? dayIndex(answer.last) + GAPS[0] : 0;
  }

  // Questions due on day `today`, interleaved: one per section in turn, the section with the oldest due item
  // first. Returns at most n items { key, unit, sec, q, due, box }. Deterministic (never random).
  function due(units, answers, review, today, n) {
    const groups = [];
    (units || []).forEach(function (u) {
      u.sections.forEach(function (s) {
        const items = [];
        s.questions.forEach(function (q) {
          const key = "u" + u.id + ":" + q.id, a = answers[key];
          if (!a || !a.correct) return;
          const rec = review[key], d = dueDay(a, rec);
          if (d <= today) items.push({ key: key, unit: u, sec: s, q: q, due: d, box: rec ? rec.box : 0 });
        });
        if (items.length) groups.push(items.sort(function (x, y) { return x.due - y.due; }));
      });
    });
    groups.sort(function (x, y) { return x[0].due - y[0].due; });   // stable: book order breaks ties
    const out = [];
    for (let round = 0; out.length < n; round++) {
      const before = out.length;
      groups.forEach(function (g) { if (g[round] && out.length < n) out.push(g[round]); });
      if (out.length === before) break;
    }
    return out;
  }

  // Next box and due day after a review answer. Right: one box up (gap grows); wrong: back to tomorrow.
  function schedule(rec, ok, today) {
    const box = ok ? Math.min(MAX_BOX, ((rec && rec.box) || 0) + 1) : 0;
    return { box: box, due: today + (ok ? GAPS[box] : GAPS[0]) };
  }

  function isDue(answers, review, key, today) {
    const a = answers[key];
    return !!(a && a.correct) && dueDay(a, review[key]) <= today;
  }

  function longTerm(review) {
    return Object.keys(review || {}).filter(function (k) { return review[k].box >= LONG_TERM_BOX; }).length;
  }

  return { dayIndex: dayIndex, due: due, schedule: schedule, isDue: isDue, longTerm: longTerm, DAILY: DAILY, XP: XP, MAX_BOX: MAX_BOX };
})();

if (typeof module !== "undefined") module.exports = MQ.review;
