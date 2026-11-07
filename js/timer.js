// Countdown scoring: full points within a time budget, then the maximum shrinks steadily to a floor.
// It never fails a question or reaches zero — slow, careful thinking still pays.
window.MQ = window.MQ || {};

MQ.timer = (function () {
  const BUDGET = { 1: 40, 2: 70, 3: 120 };   // seconds at full value, by difficulty
  const EXTRA_HARD = 30;                      // boss / advanced problems get extra time
  const FLOOR = 0.4;                          // never below 40% of the value
  const DECAY_SPAN = 2;                       // floor reached after budget × (1 + DECAY_SPAN)
  const READ_BONUS = 15;                      // extra seconds, once, for opening "What do I do?"

  function budget(q, boss) {
    return (BUDGET[q.diff] || BUDGET[2]) + (boss || q.source === "hsg" ? EXTRA_HARD : 0);
  }

  // multiplier 1 → FLOOR depending on elapsed seconds
  function factor(elapsed, b) {
    if (elapsed <= b) return 1;
    const over = (elapsed - b) / (b * DECAY_SPAN);
    return Math.max(FLOOR, 1 - (1 - FLOOR) * over);
  }

  // XP for a correct answer: 10 × difficulty, scaled by time, minus 3 per hint, never below 2.
  function points(diff, hints, f) {
    return Math.max(2, Math.round(10 * diff * (f == null ? 1 : f)) - 3 * hints);
  }

  // Elapsed-time clock that only runs while the page is visible.
  function clock() {
    let acc = 0, since = document.hidden ? null : performance.now();
    const onVis = function () {
      if (document.hidden && since != null) { acc += performance.now() - since; since = null; }
      else if (!document.hidden && since == null) since = performance.now();
    };
    document.addEventListener("visibilitychange", onVis);
    return {
      seconds: function () { return (acc + (since != null ? performance.now() - since : 0)) / 1000; },
      stop: function () { onVis(); document.removeEventListener("visibilitychange", onVis); since = null; }
    };
  }

  return { budget: budget, factor: factor, points: points, clock: clock, FLOOR: FLOOR, READ_BONUS: READ_BONUS };
})();
