// "What do I do?" helper: the "How to enter your answer" tips are generated from the question data
// (type, answer shape, tol, unitLabel, accept). Tips describe the FORMAT only and never carry the answer.
// Each tip is { key, vars } for MQ.t; the question's own "howto" text (the task) is shown by view-play.js.
window.MQ = window.MQ || {};

MQ.howto = (function () {
  const MINUS = /[−–—]/g;

  // decimals written in a numeric key (99 for exponent notation, i.e. "many")
  function places(k) {
    const s = String(k);
    if (/e/i.test(s)) return 99;
    const m = s.match(/\.(\d+)$/);
    return m ? m[1].length : 0;
  }

  function isFraction(k) {
    return typeof k === "string" && /\//.test(k);
  }

  function roundingTip(q) {
    const tol = Number(q.tol) || 0;
    if (tol <= 0 || isFraction(q.answer)) return null;
    if (tol >= 1) return { key: "howto.approx", vars: { tol: tol } };
    const key = Array.isArray(q.answer) ? q.answer[0] : q.answer;
    const p = places(key);
    const tolPlaces = Math.max(0, Math.ceil(-Math.log10(2 * tol) - 1e-9));
    if (p === 0) return tol >= 0.5 ? { key: "howto.roundInt" } : null;
    if (p < tolPlaces) return null;            // exact key: the tolerance is only float slack
    return tolPlaces === 0 ? { key: "howto.roundInt" } : { key: "howto.round", vars: { n: tolPlaces } };
  }

  function numTips(q) {
    const keys = [].concat(q.answer);
    const out = [keys.some(isFraction) ? { key: "howto.frac" } : { key: "howto.num" }];
    if (keys.length > 1) out.push({ key: "howto.anyOf" });
    const r = roundingTip(q);
    if (r) out.push(r);
    if (q.unitLabel) out.push({ key: "howto.unit", vars: { unit: q.unitLabel } });
    return out;
  }

  // shape of a text answer: coord | ratio | ineq | fracText | list | formula | word | factor | expr
  function textShape(q) {
    const a = String(q.answer == null ? "" : q.answer).replace(MINUS, "-").trim();
    if (/^\(\s*-?[\d.]+\s*[,;]\s*-?[\d.]+\s*\)$/.test(a)) return { shape: "coord", a: a };
    if (/^\d+(\.\d+)?(\s*:\s*\d+(\.\d+)?)+$/.test(a)) return { shape: "ratio", a: a };
    if (/[<>≤≥]/.test(a)) return { shape: "ineq", a: a };
    if (/^-?\d+\/\d+$/.test(a)) return { shape: "fracText", a: a };   // compared as text: simplest form
    if (/^-?\d+(\.\d+)?(\s*[,;]\s*-?\d+(\.\d+)?)+$/.test(a)) return { shape: "list", a: a };
    const lhs = a.match(/^([A-Za-z])\s*=/);
    if (lhs) return { shape: "formula", a: a, lhs: lhs[1] };
    if (!/[\d+\-*/×÷()=^²³]/.test(a)) return { shape: "word", a: a };   // a word such as "chẵn", "square"
    if (/[a-z]/i.test(a)) return { shape: /^-?(\d+[a-z]*|[a-z]+)\(.+\)$/i.test(a) ? "factor" : "expr", a: a };
    return { shape: "word", a: a };
  }

  function textTips(q) {
    const s = textShape(q);
    const forms = q.accept && q.accept.length ? [{ key: "howto.forms" }] : [];
    switch (s.shape) {
      case "formula": return [{ key: "howto.formula", vars: { lhs: s.lhs } }].concat(forms);
      case "factor": return [{ key: "howto.factor" }].concat(forms);
      case "expr": return [{ key: "howto.expr" }].concat(/[²³^]/.test(s.a) ? [{ key: "howto.power" }] : [], forms);
      default: return [{ key: "howto." + s.shape }];
    }
  }

  const LETTERS = "abcdefgh";
  const parts = function (a, sep) { return a.split(sep).filter(function (x) { return x.trim() !== ""; }); };
  const shapeOf = function (n, sep) { return LETTERS.slice(0, Math.min(n, LETTERS.length)).split("").join(sep); };

  // Placeholder for the answer box: the expected SHAPE in letters, never a value. null = keep the default.
  function placeholder(q) {
    if (q.type !== "text") return null;
    const s = textShape(q);
    switch (s.shape) {
      case "coord": return { key: "howto.ph.coord" };
      case "ratio": return { key: "howto.ph.ratio", vars: { shape: shapeOf(parts(s.a, ":").length, " : ") } };
      case "list": return { key: "howto.ph.list", vars: { shape: shapeOf(parts(s.a, /[,;]/).length, "; ") } };
      case "fracText": return { key: "howto.ph.frac" };
      case "formula": return { key: "howto.ph.formula", vars: { lhs: s.lhs } };
      case "ineq": return { key: "howto.ph.ineq" };
      default: return null;
    }
  }

  const gcd = function (x, y) { return y ? gcd(y, x % y) : Math.abs(x); };
  // "B'(5, -2)" -> "b'(0,0)": the spelling with every number replaced, to compare shapes
  const sig = function (x) {
    return String(x).replace(MINUS, "-").toLowerCase().replace(/\s+/g, "").replace(/-?\d+(\.\d+)?/g, "0");
  };

  // "4:6" -> "2:3"; null when a part is not a whole number
  function reduceParts(nums) {
    if (!nums.every(function (n) { return Number.isInteger(n) && n >= 0; })) return null;
    const g = nums.reduce(gcd, 0) || 1;
    return nums.map(function (n) { return n / g; }).join(":");
  }

  // Called only for an answer the checker marked wrong: says when the FORMAT is the problem, or when the
  // value is right but not simplified. Neither should cost a try. Returns { key, vars } or null.
  function inputIssue(q, raw) {
    const r = String(raw == null ? "" : raw).replace(MINUS, "-").trim();
    if (!r || q.type === "mc" || q.type === "multi") return null;
    if (q.type !== "text") {
      if (/^[-+]?[\d.,\s/]*\d[\d.,\s/]*%?$/.test(r)) return null;          // a number: wrong value, not wrong format
      return /^[-+]?\d[\d.,\s/]*\s*[^\d\s.,/]+$/.test(r) ? { key: "howto.chk.unit" } : { key: "howto.chk.num" };
    }
    const s = textShape(q);
    const forms = [s.a].concat(q.accept || []);
    // any accepted spelling has the same shape as the input: it is just a wrong value
    if (forms.some(function (f) { return sig(f) === sig(r); })) return simplifyIssue(s, r);
    // accepted words ("lớn hơn") mean the answer is not only symbols: don't judge the format
    if (forms.some(function (f) { return !/\d/.test(String(f)); })) return null;
    switch (s.shape) {
      case "coord": return /^\(.*[,;].*\)$/.test(r) ? null : { key: "howto.chk.coord" };
      case "ineq": return /[<>≤≥]/.test(r) ? null : { key: "howto.chk.ineq" };
      case "formula": return /=/.test(r) ? null : { key: "howto.chk.formula", vars: { lhs: s.lhs } };
      case "list": {
        const n = parts(s.a, /[,;]/).length;
        return parts(r, /[,;]|\s+(?:và|and)\s+|\s+/).length < n ? { key: "howto.chk.list", vars: { n: n } } : null;
      }
      case "ratio": return /:/.test(r) ? simplifyIssue(s, r) : { key: "howto.chk.ratio" };
      case "fracText": return /^-?\d+\s*\/\s*-?\d+$/.test(r) ? simplifyIssue(s, r) : { key: "howto.chk.frac" };
      default: return null;
    }
  }

  // same value as the key but not in simplest form ("4:6" for 2:3, "2/6" for 1/3)
  function simplifyIssue(s, r) {
    if (s.shape === "ratio") {
      const nums = r.split(":").map(Number);
      const given = reduceParts(nums);
      const simplest = given === nums.join(":");
      return given && !simplest && given === reduceParts(s.a.split(":").map(Number)) ? { key: "howto.chk.simplifyRatio" } : null;
    }
    if (s.shape === "fracText") {
      const m = r.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
      if (!m) return null;
      const n = Number(m[1]), d = Number(m[2]), k = s.a.split("/").map(Number);
      return d !== 0 && gcd(n, d) > 1 && n * k[1] === k[0] * d ? { key: "howto.chk.simplify" } : null;
    }
    return null;
  }

  function formatTips(q) {
    switch (q.type || "num") {
      case "mc": return [{ key: "howto.mc" }];
      case "multi": return [{ key: "howto.multi" }];
      case "text": return textTips(q);
      default: return numTips(q);
    }
  }

  return { formatTips: formatTips, placeholder: placeholder, inputIssue: inputIssue };
})();
