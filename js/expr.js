// Safe expression parser for learner-typed rules such as "3n + 2", "2(n+1)", "n²" or "2^n − 1".
// Never uses eval/Function: input is tokenised against a whitelist and parsed by recursive descent into a small
// tree that only knows numbers, the variable n, + − × ÷ ^ ² and parentheses (implicit multiplication allowed).
window.MQ = window.MQ || {};

MQ.expr = (function () {
  const MAX_LEN = 60;
  const fail = function (error) { return { ok: false, error: error }; };

  function normalise(src) {
    return String(src).trim()
      .replace(/[−–]/g, "-").replace(/[×·]/g, "*").replace(/[÷:]/g, "/")
      .replace(/N/g, "n").replace(/(\d),(\d)/g, "$1.$2");
  }

  // → array of { k: "num"|"n"|"op"|"sq"|"lp"|"rp", v } or null when a character is not allowed
  function tokenize(s) {
    const out = [];
    let i = 0;
    while (i < s.length) {
      const c = s[i];
      const num = /^\d+(\.\d+)?/.exec(s.slice(i));
      if (c === " ") { i += 1; continue; }
      if (num) { out.push({ k: "num", v: Number(num[0]) }); i += num[0].length; continue; }
      if (c === "n") out.push({ k: "n" });
      else if ("+-*/^".indexOf(c) !== -1) out.push({ k: "op", v: c });
      else if (c === "²") out.push({ k: "sq" });
      else if (c === "(") out.push({ k: "lp" });
      else if (c === ")") out.push({ k: "rp" });
      else return null;
      i += 1;
    }
    return out;
  }

  // Recursive descent over tokens; throws a plain marker that parse() turns into "expr.err.syntax".
  function parser(toks) {
    let pos = 0;
    const peek = function () { return toks[pos]; };
    const isOp = function (t, ops) { return t && t.k === "op" && ops.indexOf(t.v) !== -1; };
    const bad = function () { throw new Error("syntax"); };
    function expr() {
      let left = term();
      while (isOp(peek(), "+-")) { const op = toks[pos++].v; left = { op: op, a: left, b: term() }; }
      return left;
    }
    function startsImplicit() {
      const t = peek(), prev = toks[pos - 1];
      if (!t) return false;
      if (t.k === "n" || t.k === "lp") return true;
      return t.k === "num" && prev && (prev.k === "rp" || prev.k === "n" || prev.k === "sq");
    }
    function term() {
      let left = unary();
      for (;;) {
        if (isOp(peek(), "*/")) { const op = toks[pos++].v; left = { op: op, a: left, b: unary() }; }
        else if (startsImplicit()) left = { op: "*", a: left, b: unary() };
        else return left;
      }
    }
    function unary() {
      if (isOp(peek(), "-")) { pos += 1; return { op: "neg", a: unary() }; }
      return power();
    }
    function power() {
      let base = atom();
      if (peek() && peek().k === "sq") { pos += 1; base = { op: "^", a: base, b: { num: 2 } }; }
      if (isOp(peek(), "^")) { pos += 1; return { op: "^", a: base, b: unary() }; }
      return base;
    }
    function atom() {
      const t = toks[pos++];
      if (!t) bad();
      if (t.k === "num") return { num: t.v };
      if (t.k === "n") return { n: true };
      if (t.k === "lp") {
        const inner = expr();
        if (!peek() || peek().k !== "rp") bad();
        pos += 1;
        return inner;
      }
      return bad();
    }
    return function () {
      const tree = expr();
      if (pos !== toks.length) bad();
      return tree;
    };
  }

  function parse(src) {
    if (src == null || String(src).trim() === "") return fail("expr.err.empty");
    const s = normalise(src);
    if (s.length > MAX_LEN) return fail("expr.err.long");
    const toks = tokenize(s);
    if (!toks) return fail("expr.err.char");
    try {
      return { ok: true, ast: parser(toks)() };
    } catch (e) {
      return fail("expr.err.syntax");
    }
  }

  function evaluate(node, n) {
    if ("num" in node) return node.num;
    if (node.n) return n;
    const a = evaluate(node.a, n);
    if (node.op === "neg") return -a;
    const b = evaluate(node.b, n);
    if (node.op === "+") return a + b;
    if (node.op === "-") return a - b;
    if (node.op === "*") return a * b;
    if (node.op === "/") return a / b;
    return Math.pow(a, b);
  }

  // Learner rule equals term(n) for n = 1..10.
  function matches(src, term) {
    const p = parse(src);
    if (!p.ok) return p;
    for (let n = 1; n <= 10; n++) {
      const got = evaluate(p.ast, n), want = term(n);
      // relative tolerance: a correct rule must not fail on floating-point rounding of large values
      if (!Number.isFinite(got) || Math.abs(got - want) > 1e-9 * Math.max(1, Math.abs(want))) return { ok: false };
    }
    return { ok: true };
  }

  return { parse: parse, evaluate: evaluate, matches: matches, MAX_LEN: MAX_LEN };
})();

if (typeof module !== "undefined") module.exports = MQ.expr;
