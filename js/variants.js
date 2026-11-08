// 🎲 Number variants for spaced review — core (pure functions, no DOM, no storage; unit-tested).
// Why: in review a learner who meets the same numbers again recalls the answer, not the method. A question
// tagged with `gen: "family"` (see the GEN map at the end of a unit data file) is re-asked with fresh numbers;
// the family recomputes the answer, the hints and the worked explanation in both languages.
// Only used in review: the first meeting with a question is always the book's own wording.
// Families live in js/variants-*.js and register with MQ.variants.add(name, fn).
window.MQ = window.MQ || {};

MQ.variants = (function () {
  const F = {};

  // ---- deterministic randomness (same seed → same variant, e.g. after a reload on the same day) ----
  function hash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    let a = hash(String(seed));
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ---- shared helpers for the family files ----
  const int = function (r, lo, hi) { return lo + Math.floor(r() * (hi - lo + 1)); };
  const pick = function (r, list) { return list[Math.floor(r() * list.length)]; };
  const nz = function (r, lo, hi) { let x = 0; while (x === 0) x = int(r, lo, hi); return x; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  const lcm = function (a, b) { return a / gcd(a, b) * b; };
  const round10 = function (x) { return Math.sign(x) * Math.round(Math.abs(x) / 10) * 10; };
  const clean = function (x) { return parseFloat(Number(x).toPrecision(12)); };          // 0.1 + 0.2 → 0.3, 8.2 × 10⁶ → 8200000

  // Number in a language: real minus sign, "." (en) or "," (vi) decimals, spaces in whole parts ≥ 10 000.
  function fmt(lang) {
    return function (x) {
      const s = String(clean(Math.abs(x))), parts = s.split(".");
      let whole = parts[0];
      if (whole.length >= 5) whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return (x < 0 ? "−" : "") + whole + (parts[1] ? (lang === "vi" ? "," : ".") + parts[1] : "");
    };
  }
  const L = {
    en: { n: fmt("en"), p: function (x) { return x < 0 ? "(" + fmt("en")(x) + ")" : fmt("en")(x); } },
    vi: { n: fmt("vi"), p: function (x) { return x < 0 ? "(" + fmt("vi")(x) + ")" : fmt("vi")(x); } }
  };

  // Fractions as answer strings: "3/8", "1 1/10" (mixed), whole numbers stay numbers.
  function frac(nu, de) {
    if (de < 0) { nu = -nu; de = -de; }
    const g = gcd(nu, de) || 1;
    return { n: nu / g, d: de / g };
  }
  function fracStr(nu, de) { const f = frac(nu, de); return f.d === 1 ? f.n : f.n + "/" + f.d; }
  function mixedStr(nu, de) {
    const f = frac(nu, de);
    if (f.d === 1) return f.n;
    const w = Math.floor(Math.abs(f.n) / f.d), rest = Math.abs(f.n) % f.d, sign = f.n < 0 ? "-" : "";
    return w ? sign + w + " " + rest + "/" + f.d : sign + rest + "/" + f.d;
  }
  // Display form of a fraction answer ("1 1/10" → "1 1/10", "-3/4" → "−3/4").
  const show = function (a) { return String(a).replace("-", "−"); };

  // Family result from [q, hint1, hint2, hint3, explain] in each language.
  // `unit` (optional) replaces the book's answer-box unit label when the family changes units.
  function mk(answer, en, vi, tol, unit) {
    const side = function (a) { return { q: a[0], hints: [a[1], a[2], a[3]], explain: a[4] }; };
    return { answer: answer, tol: tol || 0, unit: unit, en: side(en), vi: side(vi) };
  }

  const lib = {
    int: int, pick: pick, nz: nz, gcd: gcd, lcm: lcm, round10: round10, clean: clean, L: L,
    n: L.en.n, p: L.en.p, frac: frac, fracStr: fracStr, mixedStr: mixedStr, show: show, mk: mk
  };

  function add(name, fn) { F[name] = fn; }

  // gen is "family" or ["family", opts]
  function spec(q) {
    const g = q && q.gen;
    if (!g) return null;
    const name = Array.isArray(g) ? g[0] : g;
    return F[name] ? { name: name, opts: Array.isArray(g) ? g[1] : null } : null;
  }

  function has(q) { return !!spec(q); }

  // A new question object (the original is never changed) with fresh numbers, or null when q has no family.
  // It keeps q.id, so answers and review still count for the book question; `tr` carries both languages.
  function make(q, seed) {
    const s = spec(q);
    if (!s) return null;
    const v = F[s.name](rng(q.id + "|" + seed), s.opts || {});
    if (String(v.answer) === String(q.answer)) {   // avoid the book's own numbers: try another seed once
      const w = F[s.name](rng(q.id + "|" + seed + "|b"), s.opts || {});
      if (String(w.answer) !== String(q.answer)) return build(q, w);
    }
    return build(q, v);
  }

  function build(q, v) {
    return Object.assign({}, q, {
      type: "num", answer: v.answer, accept: [], tol: v.tol || 0, unitLabel: v.unit != null ? v.unit : (q.unitLabel || ""), choices: null, svg: null,
      howto: null, why: null, q: v.en.q, hints: v.vi.hints, explain: v.vi.explain, variant: true,
      tr: { en: v.en, vi: v.vi }
    });
  }

  return { families: F, add: add, has: has, make: make, rng: rng, lib: lib };
})();

if (typeof module !== "undefined") module.exports = MQ.variants;
