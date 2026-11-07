// Scoring rules for the worked-example lab. Pure functions so they can be unit-tested.
// Philosophy: reward thinking effort and creativity a little, accuracy a bit more, never farmable:
// an example pays at most MAX_TOTAL, and replays only pay the improvement over the best earlier run.
window.MQ = window.MQ || {};

MQ.exampleScore = (function () {
  const IDEA_PER_STEP = 2, IDEA_CAP = 8, MIN_IDEA = 4;
  const PREDICT_EXACT = 5, PREDICT_CLOSE = 2;
  const TWIST_FIRST = 5, TWIST_RETRY = 3, OWN_METHOD = 5, SIMILAR = 5, CREATIVE_CAP = 8;
  const MIN_CREATIVE = 40;
  const MAX_TOTAL = IDEA_CAP + PREDICT_EXACT + CREATIVE_CAP;

  // ideas: strings typed before each step was revealed. Empty / tiny / copy-pasted repeats earn nothing.
  function ideaPoints(ideas) {
    const seen = {};
    let n = 0;
    (ideas || []).forEach(function (t) {
      const k = String(t || "").trim().toLowerCase();
      if (k.length >= MIN_IDEA && !seen[k]) { seen[k] = true; n += 1; }
    });
    return Math.min(IDEA_CAP, n * IDEA_PER_STEP);
  }

  // answer: { type, value, accept, tol }; guess: learner's raw prediction string.
  function predictResult(answer, guess) {
    if (!answer || guess == null || String(guess).trim() === "") return { kind: "none", points: 0 };
    const q = { type: answer.type === "text" ? "text" : "num", answer: answer.value, accept: answer.accept, tol: answer.tol };
    if (MQ.checker.check(q, guess).ok) return { kind: "exact", points: PREDICT_EXACT };
    if (q.type === "num") {
      const g = MQ.checker.parseNumber(guess);
      const k = typeof answer.value === "number" ? answer.value : MQ.checker.parseNumber(answer.value);
      if (!Number.isNaN(g) && !Number.isNaN(k) && Math.abs(g - k) <= Math.max(0.5, Math.abs(k) * 0.1)) {
        return { kind: "close", points: PREDICT_CLOSE };
      }
    }
    return { kind: "off", points: 0 };
  }

  // creative: { twist: "first"|"retry"|"open"|null, own: text, similar: bool }
  function creativePoints(c) {
    let p = 0;
    if (c.twist === "first" || c.twist === "open") p += TWIST_FIRST;
    else if (c.twist === "retry") p += TWIST_RETRY;
    if (String(c.own || "").trim().length >= MIN_CREATIVE) p += OWN_METHOD;
    if (c.similar) p += SIMILAR;
    return Math.min(CREATIVE_CAP, p);
  }

  function total(parts) {
    return Math.min(MAX_TOTAL, (parts.ideas || 0) + (parts.predict || 0) + (parts.creative || 0));
  }

  // XP actually paid now = improvement over the best score already rewarded for this example.
  function payable(bestBefore, now) { return Math.max(0, now - (bestBefore || 0)); }

  return {
    ideaPoints: ideaPoints, predictResult: predictResult, creativePoints: creativePoints,
    total: total, payable: payable, MAX_TOTAL: MAX_TOTAL, MIN_CREATIVE: MIN_CREATIVE, MIN_IDEA: MIN_IDEA
  };
})();
