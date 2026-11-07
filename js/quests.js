// 🚀 Extension quests: pure grading + data merge (no DOM; the screen is js/view-quest.js).
// Quest data lives in data/book<N>/quests/unitNN.js (window.GAME_QUESTS) as trusted, packaged code: its check/
// solve/test functions run on NUMBERS parsed from learner input — learner text itself is never evaluated.
// grade(quest, input, prevKeys) returns the quest's TOTAL score over every result found so far (prev + new);
// MQ.state.finishQuest then pays only the improvement. Keys: many "a:<tuple>" "c" · whatif "x" "e" "d" "r" ·
// make "p:<fields>" "m:<criterion>" · ways "w:<strategy>" · pattern "t:<n>" "g".
window.MQ = window.MQ || {};

MQ.quests = (function () {
  const S = function () { return MQ.spark; };
  const UNLOCK = 0.4;
  const has = function (keys, k) { return keys.indexOf(k) !== -1; };
  const tuple = function (k) { return k.slice(2).split("|").map(Number); };
  const numOk = function (answer, raw, tol) {
    return String(raw == null ? "" : raw).trim() !== "" && MQ.checker.check({ type: "num", answer: answer, tol: tol || 0 }, raw).ok;
  };
  const result = function (score, keys, feedback, extra) {
    return Object.assign({ score: score.points, why: score.why, keys: keys, feedback: feedback, problem: null }, extra || {});
  };

  // kind of an answer tuple = id of the first kinds[] entry whose test passes (kinds are tried in order)
  function kindOf(q) {
    if (!Array.isArray(q.kinds) || !q.kinds.length) return null;
    return function (v) { const k = q.kinds.find(function (x) { return x.test(v); }); return k ? k.id : null; };
  }
  function scoreManyKeys(q, keys) {
    const found = keys.filter(function (k) { return k.indexOf("a:") === 0; }).map(tuple);
    return S().scoreMany(found, has(keys, "c"), !!q.ordered, !!q.noScale, kindOf(q));
  }
  // kind ids already shown by the learner's answers (for the ✓ list on the screen)
  function kindsFound(q, keys) {
    const f = kindOf(q);
    if (!f) return [];
    const out = [];
    keys.filter(function (k) { return k.indexOf("a:") === 0; }).forEach(function (k) {
      const id = f(tuple(k));
      if (id && out.indexOf(id) === -1) out.push(id);
    });
    return out;
  }
  function gradeMany(q, input, prev) {
    const vals = (input && input.values) || [];
    if (vals.length !== (q.arity || 2) || !S().normKey(vals, !!q.ordered)) return result(scoreManyKeys(q, prev), prev, "quest.fb.invalid");
    const typed = vals.map(function (v) { return MQ.checker.parseNumber(String(v)); });
    if (!q.check(typed)) return result(scoreManyKeys(q, prev), prev, "quest.fb.invalid");
    // canon maps an accepted rounded answer to its exact value, so 9.36 and 9.357 are one answer
    const nums = q.canon ? q.canon(typed) : typed;
    const key = S().normKey(nums, !!q.ordered);
    if (has(prev, "a:" + key)) return result(scoreManyKeys(q, prev), prev, "quest.fb.dup");
    const keys = prev.concat(["a:" + key]);
    if (q.challenge && !has(keys, "c") && q.challenge(nums)) keys.push("c");
    const t = tuple("a:" + key);
    const scaled = !q.noScale && prev.some(function (k) {
      return k.indexOf("a:") === 0 && (S().isScaled(t, tuple(k)) || (!q.ordered && S().isScaled(t, tuple(k).reverse())));
    });
    const now = scoreManyKeys(q, keys);
    const shown = t.join("; ");   // the why line of this very answer says whether its kind was already used twice
    const same = !scaled && now.why.some(function (w) { return w.key === "spark.why.samekind" && w.vars.v === shown; });
    return result(now, keys, scaled ? "quest.fb.scaled" : same ? "quest.fb.samekind" : "quest.fb.new");
  }

  const isIndex = function (i) { return Number.isInteger(i) && i >= 0; };
  function scoreWhatifKeys(keys) {
    return S().scoreWhatif({ exact: has(keys, "e"), direction: has(keys, "d"), reason: has(keys, "r") });
  }
  function gradeWhatif(q, input, prev) {
    if (has(prev, "x")) return result(scoreWhatifKeys(prev), prev, "quest.fb.once", { reveal: q.answer() });
    const g = MQ.checker.parseNumber(String((input && input.guess) || ""));
    if (!Number.isFinite(g)) return result(scoreWhatifKeys(prev), prev, "quest.fb.invalid");
    // the prediction is one-shot, so it only counts once a reason has been picked too
    if (!(isIndex(input.reason) && input.reason < q.reasons.length)) return result(scoreWhatifKeys(prev), prev, "quest.fb.reason");
    const ans = q.answer();
    const keys = prev.concat(["x"]);
    if (numOk(ans, input.guess, q.tol)) keys.push("e");
    else if (Math.sign(g - q.base) === Math.sign(ans - q.base)) keys.push("d");
    if (input.reason === q.reason) keys.push("r");
    return result(scoreWhatifKeys(keys), keys, "quest.fb.ok", { reveal: ans });
  }

  function scoreMakeKeys(q, keys) {
    // why vars hold criterion ids; the ledger shows their text in the current language (js/view-spark.js)
    return S().scoreMake(keys.filter(function (k) { return k.indexOf("m:") === 0; }).map(function (k) { return k.slice(2); }));
  }
  function gradeMake(q, input, prev) {
    const raw = (input && input.fields) || {};
    const f = {}, vals = [];
    q.fields.forEach(function (fd) { f[fd.id] = MQ.checker.parseNumber(String(raw[fd.id] == null ? "" : raw[fd.id])); vals.push(f[fd.id]); });
    const answer = vals.every(Number.isFinite) && q.valid(f) ? q.solve(f) : NaN;
    if (!Number.isFinite(answer)) return result(scoreMakeKeys(q, prev), prev, "quest.fb.invalid");
    const key = "p:" + S().normKey(vals.map(String), true);
    if (has(prev, key)) return result(scoreMakeKeys(q, prev), prev, "quest.fb.dup");
    const keys = prev.concat([key]);
    const problem = { text: q.render(f, input.lang === "en" ? "en" : "vi"), answer: answer };
    const scaled = prev.some(function (k) { return k.indexOf("p:") === 0 && S().isScaled(vals, tuple(k)); });
    if (scaled) return result(scoreMakeKeys(q, keys), keys, "quest.fb.scaled", { problem: problem });
    q.criteria.forEach(function (c) { if (c.test(f) && !has(keys, "m:" + c.id)) keys.push("m:" + c.id); });
    return result(scoreMakeKeys(q, keys), keys, "quest.fb.new", { problem: problem });
  }

  function scoreWaysKeys(q, keys) {
    return S().scoreWays(keys.filter(function (k) { return k.indexOf("w:") === 0; }).map(function (k) { return k.slice(2); }));
  }
  const answersOf = function (st) { return st.steps.map(function (x) { return String(x.answer); }).join("|"); };
  function gradeWays(q, input, prev) {
    const st = q.strategies.find(function (s) { return input && s.id === input.strategy; });
    if (!st) return result(scoreWaysKeys(q, prev), prev, "quest.fb.invalid");
    const steps = input.steps || [];
    const ok = st.steps.every(function (s, i) { return numOk(s.answer, steps[i], s.tol); });
    if (!ok) return result(scoreWaysKeys(q, prev), prev, "quest.fb.wrong");
    if (has(prev, "w:" + st.id)) return result(scoreWaysKeys(q, prev), prev, "quest.fb.dup");
    // a "different" method that reaches the very same intermediate results is not a new way of thinking
    const same = q.strategies.some(function (o) { return o !== st && has(prev, "w:" + o.id) && answersOf(o) === answersOf(st); });
    if (same) return result(scoreWaysKeys(q, prev), prev, "quest.fb.sameway");
    const keys = prev.concat(["w:" + st.id]);
    return result(scoreWaysKeys(q, keys), keys, "quest.fb.new");
  }

  function scorePatternKeys(keys) {
    return S().scorePattern(keys.filter(function (k) { return k.indexOf("t:") === 0; }).length, has(keys, "g"));
  }
  function gradePattern(q, input, prev) {
    const terms = (input && input.terms) || {}, rule = String((input && input.rule) || "").trim();
    const keys = prev.slice();
    let wrong = false, tried = false;
    q.askN.forEach(function (n) {
      const raw = terms[n];
      if (raw == null || String(raw).trim() === "") return;
      tried = true;
      if (!numOk(q.term(n), raw)) wrong = true;
      else if (!has(keys, "t:" + n)) keys.push("t:" + n);
    });
    let ruleErr = null;
    if (rule) {
      tried = true;
      const m = MQ.expr.matches(rule, q.term);
      if (m.error) ruleErr = m.error;
      else if (!m.ok) wrong = true;
      else if (!has(keys, "g")) keys.push("g");
    }
    const fb = ruleErr || (keys.length > prev.length ? "quest.fb.new" : wrong ? "quest.fb.wrong" : tried ? "quest.fb.dup" : "quest.fb.invalid");
    return result(scorePatternKeys(keys), keys, fb);
  }

  // ── odd: "Which one doesn't belong?" A property singles out item i when only i has it, or only i lacks it.
  const ODD_TRIES = 3;
  function singles(q, prop, i) {
    const has = prop.has || [];
    const n = q.items.length;
    return (has.length === 1 && has[0] === i) || (has.length === n - 1 && has.indexOf(i) === -1);
  }
  function oddPairs(q) {
    const out = [];
    q.items.forEach(function (_, i) { q.props.forEach(function (p) { if (singles(q, p, i)) out.push([i, p.id]); }); });
    return out;
  }
  // only pairs that are valid in the CURRENT data count (stale or hand-edited saves cannot score)
  function scoreOddKeys(q, keys) {
    const valid = oddPairs(q).map(function (p) { return "o:" + p[0] + ":" + p[1]; });
    const pairs = keys.filter(function (k) { return valid.indexOf(k) !== -1; }).map(function (k) {
      const p = k.split(":"); return [Number(p[1]), p.slice(2).join(":")];
    });
    const all = q.items.every(function (_, i) { return pairs.some(function (p) { return p[0] === i; }); });
    return S().scoreOdd(pairs, all);
  }
  function gradeOdd(q, input, prev) {
    const i = input.item, prop = q.props.find(function (p) { return p.id === input.prop; });
    if (!(isIndex(i) && i < q.items.length && prop)) return result(scoreOddKeys(q, prev), prev, "quest.fb.invalid");
    const key = "o:" + i + ":" + prop.id, miss = "x:" + i + ":" + prop.id;
    if (has(prev, key)) return result(scoreOddKeys(q, prev), prev, "quest.fb.dup");
    const wrong = prev.filter(function (k) { return k.indexOf("x:" + i + ":") === 0; }).length;
    if (wrong >= ODD_TRIES) return result(scoreOddKeys(q, prev), prev, "quest.fb.locked");
    if (!singles(q, prop, i)) {
      const keys = has(prev, miss) ? prev : prev.concat([miss]);
      return result(scoreOddKeys(q, keys), keys, "quest.fb.notodd");
    }
    const keys = prev.concat([key]);
    return result(scoreOddKeys(q, keys), keys, "quest.fb.new");
  }

  // ── fair: design a fair test — change ONE factor, measure an outcome it affects, keep every other factor the same.
  function scoreFairKeys(q, keys) {
    const links = q.links.map(function (l) { return l.change + ">" + l.measure; });
    const ids = function (pre) {
      return keys.filter(function (k) { return k.indexOf(pre) === 0 && links.indexOf(k.slice(2)) !== -1; }).map(function (k) { return k.slice(2); });
    };
    return S().scoreFair(ids("d:"), ids("p:"));
  }
  const EFFECTS = ["up", "down", "same"];
  function gradeFair(q, input, prev) {
    const fid = function (id) { return q.factors.some(function (f) { return f.id === id; }); };
    const keep = Array.isArray(input.keep) ? input.keep : [];
    const okIds = fid(input.change) && q.outcomes.some(function (o) { return o.id === input.measure; }) && keep.every(fid);
    if (!okIds) return result(scoreFairKeys(q, prev), prev, "quest.fb.invalid");
    if (EFFECTS.indexOf(input.effect) === -1) return result(scoreFairKeys(q, prev), prev, "quest.fb.effect");
    const link = q.links.find(function (l) { return l.change === input.change && l.measure === input.measure; });
    if (!link) return result(scoreFairKeys(q, prev), prev, "quest.fb.nolink");
    const missing = q.factors.map(function (f) { return f.id; }).filter(function (id) { return id !== input.change && keep.indexOf(id) === -1; });
    if (missing.length || keep.indexOf(input.change) !== -1) {
      return result(scoreFairKeys(q, prev), prev, "quest.fb.unfair", { missing: missing });
    }
    const id = input.change + ">" + input.measure;
    if (has(prev, "d:" + id)) return result(scoreFairKeys(q, prev), prev, "quest.fb.dup");
    const keys = prev.concat(["d:" + id]);
    if (input.effect === link.effect) keys.push("p:" + id);
    return result(scoreFairKeys(q, keys), keys, "quest.fb.new", { effect: link.effect });
  }

  // ── predict: Predict → Observe → Explain with choices; one shot, like whatif.
  function gradePredict(q, input, prev) {
    if (has(prev, "x")) return result(scoreWhatifKeys(prev), prev, "quest.fb.once", { reveal: q.answer });
    if (!(isIndex(input.option) && input.option < q.options.length)) return result(scoreWhatifKeys(prev), prev, "quest.fb.invalid");
    if (!(isIndex(input.reason) && input.reason < q.reasons.length)) return result(scoreWhatifKeys(prev), prev, "quest.fb.reason");
    const keys = prev.concat(["x"]);
    if (input.option === q.answer) keys.push("e");
    if (input.reason === q.reason) keys.push("r");
    return result(scoreWhatifKeys(keys), keys, "quest.fb.ok", { reveal: q.answer });
  }

  const GRADERS = {
    many: gradeMany, whatif: gradeWhatif, make: gradeMake, ways: gradeWays, pattern: gradePattern,
    odd: gradeOdd, fair: gradeFair, predict: gradePredict
  };
  const SCORERS = {
    many: scoreManyKeys, make: scoreMakeKeys, ways: scoreWaysKeys, odd: scoreOddKeys,
    whatif: function (q, k) { return scoreWhatifKeys(k); }, pattern: function (q, k) { return scorePatternKeys(k); },
    predict: function (q, k) { return scoreWhatifKeys(k); }, fair: scoreFairKeys
  };

  // r.why lists only what is NEW in this run (the ledger explains this gain, not earlier ones).
  function grade(quest, input, prevKeys) {
    const prev = Array.isArray(prevKeys) ? prevKeys.slice() : [];
    const g = GRADERS[quest && quest.type];
    if (!g) return { score: 0, why: [], keys: prev, feedback: "quest.fb.invalid", problem: null };
    const r = g(quest, input || {}, prev);
    const before = SCORERS[quest.type](quest, prev).why.map(function (w) { return JSON.stringify(w); });
    r.why = r.why.filter(function (w) { return before.indexOf(JSON.stringify(w)) === -1; });
    return r;
  }

  // Fixed (never random) display order of a whatif's reasons, different per quest, so the right reason is not
  // always in the same place. Returns original indices in display order.
  function reasonOrder(q) {
    const n = (q.reasons || []).length;
    let h = 0;
    String(q.id).split("").forEach(function (ch) { h = (h * 31 + ch.charCodeAt(0)) % 9973; });
    return Array.from({ length: n }, function (_, i) { return (i + h) % n; });
  }

  function maxScore(q) {
    const M = S().MAX;
    if (q.type === "many") return M.many - (q.challenge ? 0 : 5);
    if (q.type === "whatif") return M.whatif;
    if (q.type === "make") return Math.min(M.make, 2 * q.criteria.length);
    if (q.type === "ways") return Math.min(3, q.strategies.length) * 4;
    if (q.type === "pattern") return Math.min(3, q.askN.length) * 3 + 8;
    if (q.type === "predict") return M.predict;
    if (q.type === "odd") return oddMax(q);
    if (q.type === "fair") return Math.min(S().FAIR.max, q.links.length) * S().FAIR.each;
    return 0;
  }
  function oddMax(q) {
    const pairs = oddPairs(q), O = S().ODD;
    const all = q.items.every(function (_, i) { return pairs.some(function (p) { return p[0] === i; }); });
    return Math.min(O.max, pairs.length) * O.each + (all ? O.all : 0);
  }

  // Appends quest overlay files to their sections (deduped by id) and merges their translations into GAME_TR.
  function mergeQuests(units, list, trList) {
    let added = 0;
    (list || []).forEach(function (pack) {
      const u = (units || []).find(function (x) { return x.id === Number(pack.unit); });
      if (!u || !pack.sections) return;
      Object.keys(pack.sections).forEach(function (secId) {
        const sec = u.sections.find(function (s) { return s.id === secId; });
        if (!sec) return;
        sec.quests = sec.quests || [];
        (pack.sections[secId] || []).forEach(function (q) {
          if (!q || !q.id || sec.quests.some(function (x) { return x.id === q.id; })) return;
          sec.quests.push(q);
          added += 1;
        });
      });
      if (pack.tr && trList) {
        let o = trList.find(function (t) { return t.unit === u.id; });
        if (!o) { o = { unit: u.id, en: {}, vi: {} }; trList.push(o); }
        ["en", "vi"].forEach(function (lang) { o[lang] = Object.assign({}, o[lang] || {}, pack.tr[lang] || {}); });
      }
    });
    return added;
  }

  function allQuests(units) {
    const out = [];
    (units || []).forEach(function (u) {
      u.sections.forEach(function (s) { (s.quests || []).forEach(function (q) { out.push({ unit: u, sec: s, quest: q }); }); });
    });
    return out;
  }

  // Answer of a learner-made problem as text the learner can type later: an integer, a short decimal (≤ 2 places),
  // a fraction "a/b" with a denominator up to 1000, otherwise a decimal rounded to 2 places.
  function answerText(x) {
    if (Number.isInteger(x)) return String(x);
    if (Math.abs(x * 100 - Math.round(x * 100)) < 1e-9) return String(Math.round(x * 100) / 100);
    for (let d = 3; d <= 1000; d++) {
      const n = Math.round(x * d);
      if (Math.abs(x * d - n) < 1e-9) return n + "/" + d;
    }
    return String(Math.round(x * 100) / 100);
  }

  function unlocked(unit, section) { return MQ.state.sectionMastery(unit, section) >= UNLOCK; }
  function keyOf(unit, quest) { return "u" + unit.id + ":" + quest.id; }

  return {
    grade: grade, maxScore: maxScore, mergeQuests: mergeQuests, allQuests: allQuests, unlocked: unlocked,
    keyOf: keyOf, reasonOrder: reasonOrder, answerText: answerText, oddPairs: oddPairs, kindsFound: kindsFound, TYPES: Object.keys(GRADERS)
  };
})();

if (typeof module !== "undefined") module.exports = MQ.quests;
