// 💡 Spark points: scoring rules for extension quests. Pure functions so they can be unit-tested.
// Philosophy (same as example-score.js): a quest's score is computed from the SET of valid results found so far,
// so duplicates add nothing, every part has a cap, and a run only pays the improvement over the best score.
// Every scorer returns { points, why: [{ key, vars }] }; why lines are i18n keys so they survive a language switch.
window.MQ = window.MQ || {};

MQ.spark = (function () {
  const MANY_EACH = 3, MANY_SCALED = 1, MANY_MAX = 5, MANY_CHALLENGE = 5, MANY_PER_KIND = 2;
  const WHATIF_EXACT = 5, WHATIF_DIR = 2, WHATIF_REASON = 3;
  const MAKE_EACH = 2, MAKE_CAP = 10;
  const WAYS_EACH = 4, WAYS_MAX = 3;
  const TERM_EACH = 3, TERM_MAX = 3, RULE = 8;
  const ODD_EACH = 3, ODD_MAX = 5, ODD_ALL = 5;
  const FAIR_EACH = 3, FAIR_PREDICT = 1, FAIR_MAX = 3;
  const TITLE_STEP = 100, TITLE_LEVELS = 6;

  // Canonical text of a learner's answer tuple; null when any value is not a number.
  function normKey(values, ordered) {
    if (!Array.isArray(values) || !values.length) return null;
    const nums = values.map(function (v) { return MQ.checker.parseNumber(String(v == null ? "" : v)); });
    if (nums.some(function (n) { return !Number.isFinite(n); })) return null;
    const tidy = nums.map(function (n) { return Math.round(n * 1e9) / 1e9; });
    if (!ordered) tidy.sort(function (a, b) { return a - b; });
    return tidy.map(String).join("|");
  }

  // True when a = k·b for one k ∉ {0, 1, −1} (a trivial variant such as "multiply everything by 10").
  // Needs at least two numbers: single numbers are always multiples of each other; a sign swap is a real answer.
  function isScaled(a, b) {
    if (!a || !b || a.length !== b.length || a.length < 2) return false;
    let k = null;
    for (let i = 0; i < a.length; i++) {
      if (b[i] === 0) { if (a[i] !== 0) return false; continue; }
      const r = a[i] / b[i];
      if (k === null) k = r;
      else if (Math.abs(r - k) > 1e-9) return false;
    }
    return k !== null && Math.abs(k) > 1e-9 && Math.abs(Math.abs(k) - 1) > 1e-9;
  }

  const show = function (v) { return v.join("; "); };

  // found: valid answer tuples (numbers) in discovery order. Unordered tuples are sorted, so a copy scaled by a
  // negative k appears reversed: compare both orders.
  // kindOf (optional): answer → kind id. Flexibility rule: only the first MANY_PER_KIND answers of one kind earn
  // the full MANY_EACH; more of the same kind earn MANY_SCALED. The maximum is unchanged (needs ≥ 3 kinds).
  function scoreMany(found, challengeHit, ordered, noScale, kindOf) {
    let points = 0;
    const why = [], perKind = {};
    (found || []).slice(0, MANY_MAX).forEach(function (v, i, arr) {
      const twin = noScale ? null : arr.slice(0, i).find(function (prev) {
        return isScaled(v, prev) || (!ordered && isScaled(v, prev.slice().reverse()));
      });
      if (twin) { points += MANY_SCALED; why.push({ key: "spark.why.scaled", vars: { v: show(v), w: show(twin) } }); return; }
      const k = kindOf ? String(kindOf(v) || "_") : null;
      if (k !== null) perKind[k] = (perKind[k] || 0) + 1;
      if (k !== null && perKind[k] > MANY_PER_KIND) {
        points += MANY_SCALED; why.push({ key: "spark.why.samekind", vars: { v: show(v), k: k } });
      } else { points += MANY_EACH; why.push({ key: "spark.why.new", vars: { v: show(v) } }); }
    });
    if (challengeHit) { points += MANY_CHALLENGE; why.push({ key: "spark.why.challenge" }); }
    return { points: points, why: why };
  }

  function scoreWhatif(r) {
    let points = 0;
    const why = [];
    if (r.exact) { points += WHATIF_EXACT; why.push({ key: "spark.why.exact" }); }
    else if (r.direction) { points += WHATIF_DIR; why.push({ key: "spark.why.direction" }); }
    if (r.reason) { points += WHATIF_REASON; why.push({ key: "spark.why.reason" }); }
    return { points: points, why: why };
  }

  const distinct = function (ids) { return (ids || []).filter(function (x, i, a) { return a.indexOf(x) === i; }); };

  function scoreMake(criteriaMet) {
    const ids = distinct(criteriaMet);
    return {
      points: Math.min(MAKE_CAP, ids.length * MAKE_EACH),
      why: ids.map(function (id) { return { key: "spark.why.criterion", vars: { c: id } }; })
    };
  }

  function scoreWays(strategyIds) {
    const ids = distinct(strategyIds).slice(0, WAYS_MAX);
    return { points: ids.length * WAYS_EACH, why: ids.map(function (id) { return { key: "spark.why.way", vars: { s: id } }; }) };
  }

  function scorePattern(termsOk, ruleOk) {
    const n = Math.min(TERM_MAX, Math.max(0, termsOk || 0));
    const why = n ? [{ key: "spark.why.terms", vars: { n: n } }] : [];
    if (ruleOk) why.push({ key: "spark.why.rule" });
    return { points: n * TERM_EACH + (ruleOk ? RULE : 0), why: why };
  }

  // Which one doesn't belong? pairs: [item index, property id] found valid. Seeing that EVERY item can be the odd
  // one out (each for a different reason) is the flexible-thinking insight, worth a bonus.
  function scoreOdd(pairs, allItems) {
    const list = (pairs || []).slice(0, ODD_MAX);
    const why = list.map(function (p) { return { key: "spark.why.odd", vars: { i: p[0], p: p[1] } }; });
    if (allItems) why.push({ key: "spark.why.allodd" });
    return { points: list.length * ODD_EACH + (allItems ? ODD_ALL : 0), why: why };
  }

  // Fair tests: designs = distinct "change>measure" ids; predicted = designs whose first prediction was right.
  function scoreFair(designs, predicted) {
    const ds = distinct(designs).slice(0, FAIR_MAX);
    const ok = distinct(predicted).filter(function (d) { return ds.indexOf(d) !== -1; });
    const why = ds.map(function (d) { return { key: "spark.why.fair", vars: { d: d } }; })
      .concat(ok.map(function (d) { return { key: "spark.why.effect", vars: { d: d } }; }));
    return { points: ds.length * FAIR_EACH + ok.length * FAIR_PREDICT, why: why };
  }

  function payable(bestBefore, now) { return Math.max(0, now - (bestBefore || 0)); }

  // Subject wording (e.g. "Nhà khoa học trẻ") comes from the dictionary's "spark.title.4@sci" override.
  function titleFor(spark) {
    const level = Math.min(TITLE_LEVELS, Math.floor(Math.max(0, spark || 0) / TITLE_STEP));
    const key = level === 0 ? null : "spark.title." + level;
    return { level: level, key: key, from: level * TITLE_STEP, next: level < TITLE_LEVELS ? (level + 1) * TITLE_STEP : null };
  }

  return {
    normKey: normKey, isScaled: isScaled, scoreMany: scoreMany, scoreWhatif: scoreWhatif, scoreMake: scoreMake,
    scoreWays: scoreWays, scorePattern: scorePattern, scoreOdd: scoreOdd, scoreFair: scoreFair,
    payable: payable, titleFor: titleFor,
    MAX: { many: MANY_MAX * MANY_EACH + MANY_CHALLENGE, whatif: WHATIF_EXACT + WHATIF_REASON, make: MAKE_CAP,
      ways: WAYS_MAX * WAYS_EACH, pattern: TERM_MAX * TERM_EACH + RULE, predict: WHATIF_EXACT + WHATIF_REASON },
    ODD: { each: ODD_EACH, max: ODD_MAX, all: ODD_ALL }, FAIR: { each: FAIR_EACH + FAIR_PREDICT, max: FAIR_MAX }
  };
})();

if (typeof module !== "undefined") module.exports = MQ.spark;
