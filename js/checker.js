// Answer checking: numbers (VN/EN decimals, fractions, mixed numbers), text, mc, multi.
window.MQ = window.MQ || {};

MQ.checker = (function () {
  function clean(s) {
    return String(s == null ? "" : s)
      .normalize("NFC")
      .replace(/[−–—]/g, "-")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Parses "−3", "3,5", "3.5", "3/4", "-2 1/3", "45%", "1 200" -> number or NaN
  function parseNumber(raw) {
    let s = clean(raw).replace(/%$/, "").trim();
    if (!s) return NaN;
    // thousands separators written with spaces: "1 200" (only when groups of 3)
    if (/^-?\d{1,3}( \d{3})+([.,]\d+)?$/.test(s)) s = s.replace(/ /g, "");
    // Vietnamese thousands dots, unambiguous only with 2+ dots or a decimal comma: "1.234.567", "1.234,5"
    if (/^-?\d{1,3}(\.\d{3}){2,}(,\d+)?$/.test(s) || /^-?\d{1,3}(\.\d{3})+,\d+$/.test(s)) {
      s = s.replace(/\./g, "");
    }
    // Vietnamese decimal comma (also inside fractions: "2,5/2")
    s = s.replace(/(\d),(\d)/g, "$1.$2");
    let m = s.match(/^(-?)(\d+) (\d+)\/(\d+)$/);
    if (m) {
      const v = Number(m[2]) + Number(m[3]) / Number(m[4]);
      return m[1] ? -v : v;
    }
    m = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (m) return Number(m[2]) === 0 ? NaN : Number(m[1]) / Number(m[2]);
    if (/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return Number(s);
    return NaN;
  }

  // Vietnamese typed without diacritics ("luc lap" for "lục lạp") still matches; symbols such as ² stay.
  function plain(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
  }

  function normText(s) {
    return plain(clean(s)).toLowerCase()
      .replace(/\s*;\s*|\s+(?:va|and)\s+/g, ",")     // list separators: "5; 11 và 23" -> "5,11,23" ("và" is "va" here)
      .replace(/(\d)\s+(?=-?\d)/g, "$1,")            // "5 11 23" -> "5,11,23"
      .replace(/\s+/g, "").replace(/\*/g, "×")
      .replace(/(\d)x(?=\d)/g, "$1×")          // "7x3" typed for "7×3" (digit x digit only, so "3x" stays algebra)
      .replace(/\^2/g, "²").replace(/\^3/g, "³");
  }

  function checkNum(q, input) {
    const v = parseNumber(input);
    if (Number.isNaN(v)) return { ok: false, invalid: true };
    const tol = q.tol || 1e-9;
    const keys = Array.isArray(q.answer) ? q.answer : [q.answer];
    const ok = keys.some(function (k) {
      const kv = typeof k === "number" ? k : parseNumber(k);
      return Math.abs(kv - v) <= tol + 1e-9;
    });
    return { ok: ok, value: v };
  }

  function checkText(q, input) {
    const given = normText(input);
    if (!given) return { ok: false, invalid: true };
    const keys = [q.answer].concat(q.accept || []).map(normText);
    if (keys.indexOf(given) !== -1) return { ok: true };
    // a word answer typed with an article ("an organ", "một cơ quan") counts; algebra keys are left alone
    const word = !/[\d+\-*/×÷()=^²³<>:]/.test(String(q.answer));
    const bare = normText(String(input).replace(/^\s*(?:a|an|the|một|mot|các|cac|những|nhung)\s+/i, ""));
    return { ok: word && keys.indexOf(bare) !== -1 };
  }

  function check(q, input) {
    switch (q.type) {
      case "mc":
        return { ok: Number(input) === Number(q.answer) };
      case "multi": {
        const a = (q.answer || []).slice().sort().join(",");
        const b = (input || []).slice().sort().join(",");
        return { ok: a === b, invalid: !input || input.length === 0 };
      }
      case "text":
        return checkText(q, input);
      default:
        return checkNum(q, input);
    }
  }

  // Classifies a wrong numeric answer so the tutor can ask a targeted question.
  function diagnose(q, input) {
    if (q.type !== "num") return null;
    const v = parseNumber(input);
    const k = Array.isArray(q.answer) ? q.answer[0] : q.answer;
    const kv = typeof k === "number" ? k : parseNumber(k);
    if (Number.isNaN(v) || Number.isNaN(kv) || kv === 0) return null;
    const near = function (a, b) { return Math.abs(a - b) < 1e-9 * Math.max(1, Math.abs(b)); };
    if (near(v, -kv)) return "sign";
    if (near(v, kv * 10) || near(v, kv / 10) || near(v, kv * 100) || near(v, kv / 100)) return "place";
    if (near(v, 1 / kv)) return "reciprocal";
    if (Math.abs(v - kv) <= Math.max(1, Math.abs(kv) * 0.05)) return "close";
    return null;
  }

  return { check: check, parseNumber: parseNumber, diagnose: diagnose };
})();
