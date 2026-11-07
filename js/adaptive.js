// Adaptive difficulty: keeps the learner near ~70-80% success by moving a target level
// up after confident answers and down after struggles, then picks the closest unsolved item.
window.MQ = window.MQ || {};

MQ.adaptive = (function () {
  const RUN_LENGTH = 6;

  function createRun(unit, questions, startLevel) {
    return {
      unit: unit,
      pool: questions.slice(),
      done: [],
      level: startLevel || 1.4,
      streakOk: 0,
      streakBad: 0,
      length: Math.min(RUN_LENGTH, questions.length)
    };
  }

  // Start level from what the learner already showed in this pool.
  function startLevelFor(unit, questions) {
    const solved = questions.filter(function (q) {
      const a = MQ.state.answerOf(unit.id, q.id);
      return a && a.correct;
    });
    if (!solved.length) return 1.3;
    const avg = solved.reduce(function (s, q) { return s + q.diff; }, 0) / solved.length;
    return Math.min(3, avg + 0.3);
  }

  function next(run) {
    if (run.done.length >= run.length) return null;
    const left = run.pool.filter(function (q) { return run.done.indexOf(q.id) === -1; });
    if (!left.length) return null;
    const score = function (q) {
      const a = MQ.state.answerOf(run.unit.id, q.id);
      const solvedPenalty = a && a.correct ? (a.firstTry ? 3 : 1.2) : 0;
      return Math.abs(q.diff - run.level) + solvedPenalty + Math.random() * 0.3;
    };
    left.sort(function (a, b) { return score(a) - score(b); });
    return left[0];
  }

  // ok: answered correctly; hints: number of hints used; tries: attempts on this item.
  function report(run, q, ok, hints, tries) {
    run.done.push(q.id);
    if (ok && hints === 0 && tries === 1) {
      run.streakOk += 1; run.streakBad = 0;
      run.level = Math.min(3, run.level + (run.streakOk >= 2 ? 0.6 : 0.35));
    } else if (ok) {
      run.streakOk = 0; run.streakBad = 0;
      run.level = Math.max(1, run.level - 0.1);
    } else {
      run.streakBad += 1; run.streakOk = 0;
      run.level = Math.max(1, run.level - (run.streakBad >= 2 ? 0.8 : 0.45));
    }
  }

  function levelLabel(level) {
    if (level < 1.7) return { key: "level.1", cls: "lv1" };
    if (level < 2.4) return { key: "level.2", cls: "lv2" };
    return { key: "level.3", cls: "lv3" };
  }

  return { createRun: createRun, startLevelFor: startLevelFor, next: next, report: report, levelLabel: levelLabel };
})();
