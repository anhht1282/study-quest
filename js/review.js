// 🔁 Spaced, interleaved review — pure functions (no DOM, no storage) so they can be unit-tested.
// Why: retrieval spread over growing gaps (spacing) and mixed across topics (interleaving) are among the
// best-supported ways to make learning last. Healthy-engagement rules: no streaks, no penalty for missed days
// (due cards simply wait), a small daily cap, and points only for cards that are actually due.
//
// The unit of review is a SECTION card ("u1#1.2"), not a single question. Asking the very same question again
// trains recall of its answer ("it was 115"), not of the method. So each time a card comes due it asks the
// NEXT question the learner has already solved in that section (rotation counter `n`). A wrong answer keeps
// `n`, so the same question returns tomorrow.
//
// Per-question records ("u1:1.2-03" -> { box, due }) are still written on a first solve; they act as seeds
// (first due day of a section) and migrate old saves. A card record, once written, wins over its seeds.
window.MQ = window.MQ || {};

MQ.review = (function () {
  const DAY = 864e5;
  const GAPS = [1, 3, 7, 14, 30, 60];     // days until the next review, by box after a right answer
  const MAX_BOX = GAPS.length - 1;
  const LONG_TERM_BOX = 3;                // box ≥ 3 → remembered over ≥ 2 weeks
  const DAILY = 8;
  const XP = 2;
  const CARD_SEP = "#";

  // Local calendar day number of a timestamp.
  function dayIndex(ts) {
    const offset = new Date(ts).getTimezoneOffset() * 60000;
    return Math.floor((ts - offset) / DAY);
  }

  function cardKey(unitId, secId) { return "u" + unitId + CARD_SEP + secId; }
  function qKey(unitId, qid) { return "u" + unitId + ":" + qid; }

  function solvedIn(answers, unit, sec) {
    return sec.questions.filter(function (q) { const a = answers[qKey(unit.id, q.id)]; return !!(a && a.correct); });
  }

  // Card record of a section: the written card, else derived from its solved questions' seeds
  // (lowest box, earliest due — conservative for old saves). null when nothing in the section is solved.
  function cardRec(answers, review, unit, sec) {
    const solved = solvedIn(answers, unit, sec);
    if (!solved.length) return null;
    const own = review[cardKey(unit.id, sec.id)];
    if (own && Number.isFinite(own.due)) return { box: own.box || 0, due: own.due, n: own.n || 0 };
    let box = MAX_BOX, due = Infinity;
    solved.forEach(function (q) {
      const key = qKey(unit.id, q.id), seed = review[key], a = answers[key];
      if (seed && Number.isFinite(seed.due)) { box = Math.min(box, seed.box || 0); due = Math.min(due, seed.due); }
      else { box = 0; if (Number.isFinite(a.last)) due = Math.min(due, dayIndex(a.last) + GAPS[0]); }
    });
    return { box: box, due: Number.isFinite(due) ? due : 0, n: 0 };
  }

  // Cards due on day `today`, oldest first, interleaved round-robin across units.
  // Returns at most n items { key, unit, sec, q, due, box }. Deterministic (never random).
  function due(units, answers, review, today, n) {
    const byUnit = [];
    (units || []).forEach(function (u) {
      const items = [];
      u.sections.forEach(function (s) {
        const rec = cardRec(answers, review, u, s);
        if (!rec || rec.due > today) return;
        const solved = solvedIn(answers, u, s);
        items.push({ key: cardKey(u.id, s.id), unit: u, sec: s, q: solved[rec.n % solved.length], due: rec.due, box: rec.box });
      });
      if (items.length) byUnit.push(items.sort(function (x, y) { return x.due - y.due; }));
    });
    byUnit.sort(function (x, y) { return x[0].due - y[0].due; });   // stable: book order breaks ties
    const out = [];
    for (let round = 0; out.length < n; round++) {
      const before = out.length;
      byUnit.forEach(function (g) { if (g[round] && out.length < n) out.push(g[round]); });
      if (out.length === before) break;
    }
    return out;
  }

  // Next card record after a review answer. Right: one box up (gap grows), next question in rotation.
  // Wrong: back to box 0, due tomorrow, same question.
  function schedule(rec, ok, today) {
    const box = ok ? Math.min(MAX_BOX, ((rec && rec.box) || 0) + 1) : 0;
    const n = ((rec && rec.n) || 0) + (ok ? 1 : 0);
    return { box: box, due: today + (ok ? GAPS[box] : GAPS[0]), n: n };
  }

  function isCardDue(answers, review, unit, sec, today) {
    const rec = cardRec(answers, review, unit, sec);
    return !!rec && rec.due <= today;
  }

  function longTerm(review) {
    return Object.keys(review || {}).filter(function (k) {
      return k.indexOf(CARD_SEP) > 0 && review[k].box >= LONG_TERM_BOX;
    }).length;
  }

  return {
    dayIndex: dayIndex, cardKey: cardKey, cardRec: cardRec, due: due, schedule: schedule,
    isCardDue: isCardDue, longTerm: longTerm, DAILY: DAILY, XP: XP, MAX_BOX: MAX_BOX
  };
})();

if (typeof module !== "undefined") module.exports = MQ.review;
