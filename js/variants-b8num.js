// 🎲 Variant families for Math 8: primes and indices, negative numbers, algebra, significant figures,
// decimals, fractions, sequences and percentages (Math 8 units 1, 2, 3, 4, 7, 9, 10).
(function () {
  const F = MQ.variants.families, U = MQ.variants.lib, mk = U.mk, int = U.int, pick = U.pick, gcd = U.gcd, clean = U.clean;
  const E = U.L.en, V = U.L.vi, fs = U.fracStr, ms = U.mixedStr, show = U.show, TOL = 1e-6;
  const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const sup = function (n) { return String(n).split("").map(function (d) { return SUP[+d]; }).join(""); };
  const pw = function (b, k) { return k === 1 ? String(b) : b + sup(k); };
  const prod = function (xs) { return xs.reduce(function (a, b) { return a * b; }, 1); };
  const sgn = function (x) { return x < 0 ? " − " + Math.abs(x) : " + " + x; };     // "+ 5" / "− 5" inside an expression

  // ---- primes, HCF and LCM (1.1) ----
  F["pf-count"] = function (r) {
    let ps = [], N = 0;
    while (N < 30 || N > 999) { ps = []; const k = int(r, 3, 6); for (let i = 0; i < k; i++) ps.push(pick(r, [2, 2, 2, 3, 3, 5, 7])); ps.sort(function (a, b) { return a - b; }); N = prod(ps); }
    const res = ps.length, p = ps.join(" × ");
    return mk(res,
      ["Write " + N + " as a product of prime factors (write each factor separately, without indices). How many factors are there altogether?", "Divide by the smallest prime, 2, as many times as you can.", "Then try 3, 5, 7, …", "Count every prime in the product, including repeats.", N + " = " + p + ", so there are " + res + " prime factors."],
      ["Viết " + N + " thành tích các thừa số nguyên tố (mỗi thừa số viết riêng, không dùng số mũ). Có tất cả bao nhiêu thừa số?", "Chia cho số nguyên tố nhỏ nhất là 2 đến khi không chia hết nữa.", "Sau đó thử 3, 5, 7, …", "Đếm mọi thừa số trong tích, kể cả thừa số lặp lại.", N + " = " + p + ", nên có " + res + " thừa số nguyên tố."], 0, "");
  };

  F["pf-exp"] = function (r) {
    const pair = pick(r, [[2, 3], [2, 5], [3, 5], [2, 7]]), a = int(r, 1, 5), b = int(r, 1, 3), N = Math.pow(pair[0], a) * Math.pow(pair[1], b);
    if (N > 3000) return F["pf-exp"](r);
    const q = N + " = " + pair[0] + "ᵃ × " + pw(pair[1], b), rest = N / Math.pow(pair[1], b);
    return mk(a,
      [q + ". Find a.", "Divide " + N + " by " + pw(pair[1], b) + " = " + Math.pow(pair[1], b) + ".", N + " ÷ " + Math.pow(pair[1], b) + " = " + rest + ".", "How many " + pair[0] + "s multiply to make " + rest + "?", rest + " = " + pw(pair[0], a) + ", so a = " + a + "."],
      [q + ". Tìm a.", "Chia " + N + " cho " + pw(pair[1], b) + " = " + Math.pow(pair[1], b) + ".", N + " : " + Math.pow(pair[1], b) + " = " + rest + ".", "Cần nhân bao nhiêu số " + pair[0] + " để được " + rest + "?", rest + " = " + pw(pair[0], a) + ", nên a = " + a + "."], 0, "");
  };

  F["pf-value"] = function (r) {
    const ps = [2, 3, 5, 7].filter(function () { return r() < 0.75; });
    if (ps.length < 2) return F["pf-value"](r);
    const ks = ps.map(function () { return int(r, 1, 3); }), vals = ps.map(function (p, i) { return Math.pow(p, ks[i]); }), res = prod(vals);
    if (res > 30000 || res < 50) return F["pf-value"](r);
    const e = ps.map(function (p, i) { return pw(p, ks[i]); }).join(" × "), step = vals.join(" × ");
    return mk(res,
      ["Work out " + e + ".", "Work out each power first.", e + " = " + step + ".", "Multiply in any order (pair numbers that make 10 if you can).", e + " = " + step + " = " + E.n(res) + "."],
      ["Tính " + e + ".", "Tính từng lũy thừa trước.", e + " = " + step + ".", "Nhân theo thứ tự tùy ý (ghép các số có tích tròn chục nếu được).", e + " = " + step + " = " + V.n(res) + "."], 0, "");
  };

  F["hcf-lcm-n"] = function (r) {
    let p = 0, q = 0;
    while (!p || p === q || gcd(p, q) !== 1) { p = int(r, 2, 7); q = int(r, 2, 9); }
    const h = int(r, 2, 6), a = h * p, N = h * q, L = h * p * q;
    return mk(N,
      ["The HCF of " + a + " and N is " + h + ", and the LCM of " + a + " and N is " + L + ". Find N.", "For two numbers, HCF × LCM = the product of the numbers.", h + " × " + L + " = " + a + " × N.", "Divide " + (h * L) + " by " + a + ".", "N = " + h + " × " + L + " ÷ " + a + " = " + (h * L) + " ÷ " + a + " = " + N + "."],
      ["ƯCLN của " + a + " và N là " + h + ", BCNN của " + a + " và N là " + L + ". Tìm N.", "Với hai số, ƯCLN × BCNN = tích hai số.", h + " × " + L + " = " + a + " × N.", "Chia " + (h * L) + " cho " + a + ".", "N = " + h + " × " + L + " : " + a + " = " + (h * L) + " : " + a + " = " + N + "."], 0, "");
  };

  // ---- negative numbers, powers and roots (1.2–1.4) ----
  F["mul-pyramid"] = function (r) {
    const xs = [0, 0, 0].map(function () { return U.nz(r, -6, 5); });
    if (xs.every(function (x) { return x > 0; })) return F["mul-pyramid"](r);
    const m1 = xs[0] * xs[1], m2 = xs[1] * xs[2], res = m1 * m2, row = xs.map(E.n).join(", "), rowV = xs.map(V.n).join(", ");
    return mk(res,
      ["Multiplication pyramid: each brick is the product of the two bricks below it. The bottom row is " + row + ". What number is at the top?", "Work out the middle row first.", E.p(xs[0]) + " × " + E.p(xs[1]) + " = " + E.n(m1) + " and " + E.p(xs[1]) + " × " + E.p(xs[2]) + " = " + E.n(m2) + ".", "Multiply the two middle bricks. Watch the signs.", "Middle row " + E.n(m1) + ", " + E.n(m2) + "; top = " + E.p(m1) + " × " + E.p(m2) + " = " + E.n(res) + "."],
      ["Kim tự tháp nhân: mỗi ô bằng tích hai ô ngay dưới nó. Hàng đáy là " + rowV + ". Số ở đỉnh là bao nhiêu?", "Tính hàng giữa trước.", V.p(xs[0]) + " × " + V.p(xs[1]) + " = " + V.n(m1) + " và " + V.p(xs[1]) + " × " + V.p(xs[2]) + " = " + V.n(m2) + ".", "Nhân hai ô ở hàng giữa. Chú ý dấu.", "Hàng giữa " + V.n(m1) + ", " + V.n(m2) + "; đỉnh = " + V.p(m1) + " × " + V.p(m2) + " = " + V.n(res) + "."], 0, "");
  };

  F["neg-power"] = function (r) {
    const k = pick(r, [2, 3]), a = int(r, 2, k === 2 ? 15 : 10), res = Math.pow(-a, k), e = "(−" + a + ")" + sup(k);
    const why = k === 2 ? ["Two negatives multiplied give a positive.", "Hai số âm nhân nhau được số dương."] : ["Three negatives multiplied give a negative.", "Ba số âm nhân nhau được số âm."];
    return mk(res,
      ["Work out " + e + ".", e + " means " + Array(k).fill("(−" + a + ")").join(" × ") + ".", why[0], a + sup(k) + " = " + Math.pow(a, k) + ".", e + " = " + E.n(res) + "."],
      ["Tính " + e + ".", e + " nghĩa là " + Array(k).fill("(−" + a + ")").join(" × ") + ".", why[1], a + sup(k) + " = " + Math.pow(a, k) + ".", e + " = " + V.n(res) + "."], 0, "");
  };

  F["cbrt-neg"] = function (r) {
    const a = int(r, 2, 10), c = a * a * a, res = -a;
    return mk(res,
      ["Find ∛(−" + c + ").", "Which number multiplied by itself three times gives −" + c + "?", "The answer must be negative, because (−) × (−) × (−) is negative.", a + "³ = " + c + ".", "(−" + a + ")³ = −" + c + ", so ∛(−" + c + ") = −" + a + "."],
      ["Tìm ∛(−" + c + ").", "Số nào nhân với chính nó ba lần được −" + c + "?", "Đáp số phải âm, vì (−) × (−) × (−) là số âm.", a + "³ = " + c + ".", "(−" + a + ")³ = −" + c + ", nên ∛(−" + c + ") = −" + a + "."], 0, "");
  };

  F["cube-eq"] = function (r) {
    const a = int(r, 2, 10), c = a * a * a, plus = r() < 0.6, res = plus ? -a : a, eq = "x³ " + (plus ? "+ " : "− ") + c + " = 0";
    const iso = plus ? "x³ = −" + c : "x³ = " + c;
    return mk(res,
      ["Solve " + eq + ".", "Get x³ on its own.", iso + ".", "Take the cube root of both sides.", iso + ", so x = ∛(" + (plus ? "−" : "") + c + ") = " + E.n(res) + "."],
      ["Giải " + eq + ".", "Chuyển để x³ đứng một mình.", iso + ".", "Lấy căn bậc ba hai vế.", iso + ", nên x = ∛(" + (plus ? "−" : "") + c + ") = " + V.n(res) + "."], 0, "");
  };

  F["power-eval"] = function (r) {
    const b = int(r, 2, 9), maxK = Math.floor(Math.log(60000) / Math.log(b)), k = int(r, 3, Math.max(3, maxK)), res = Math.pow(b, k), e = pw(b, k);
    return mk(res,
      ["Work out " + e + ".", e + " means " + k + " lots of " + b + " multiplied together.", pw(b, k - 1) + " = " + E.n(Math.pow(b, k - 1)) + ".", "Multiply that by " + b + " once more.", e + " = " + E.n(Math.pow(b, k - 1)) + " × " + b + " = " + E.n(res) + "."],
      ["Tính " + e + ".", e + " là tích của " + k + " thừa số " + b + ".", pw(b, k - 1) + " = " + V.n(Math.pow(b, k - 1)) + ".", "Nhân kết quả đó với " + b + " thêm một lần.", e + " = " + V.n(Math.pow(b, k - 1)) + " × " + b + " = " + V.n(res) + "."], 0, "");
  };

  F["index-mul"] = function (r) {
    const b = int(r, 2, 12), m = int(r, 2, 9), n = int(r, 2, 9), askSum = r() < 0.5;
    const q = askSum ? pw(b, m) + " × " + pw(b, n) + " = " + b + "ⁿ. Find n." : pw(b, m) + " × " + b + "ᵐ = " + pw(b, m + n) + ". Find m.";
    const qv = askSum ? pw(b, m) + " × " + pw(b, n) + " = " + b + "ⁿ. Tìm n." : pw(b, m) + " × " + b + "ᵐ = " + pw(b, m + n) + ". Tìm m.";
    const res = askSum ? m + n : n;
    return mk(res,
      [q, "When you multiply powers of the same number, add the indices.", askSum ? "n = " + m + " + " + n + "." : m + " + m = " + (m + n) + ".", askSum ? "Add the two indices." : "Subtract to find m.", askSum ? m + " + " + n + " = " + res + ", so n = " + res + "." : "m = " + (m + n) + " − " + m + " = " + res + "."],
      [qv, "Nhân hai lũy thừa cùng cơ số thì cộng các số mũ.", askSum ? "n = " + m + " + " + n + "." : m + " + m = " + (m + n) + ".", askSum ? "Cộng hai số mũ." : "Trừ để tìm m.", askSum ? m + " + " + n + " = " + res + ", nên n = " + res + "." : "m = " + (m + n) + " − " + m + " = " + res + "."], 0, "");
  };

  F["index-div"] = function (r) {
    const b = int(r, 2, 12), n = int(r, 2, 8), m = n + int(r, 1, 8), res = m - n;
    return mk(res,
      [pw(b, m) + " ÷ " + pw(b, n) + " = " + b + "ⁿ. Find n.", "When you divide powers of the same number, subtract the indices.", "n = " + m + " − " + n + ".", "Check: " + pw(b, n) + " × " + b + "ⁿ must give " + pw(b, m) + ".", m + " − " + n + " = " + res + ", so n = " + res + "."],
      [pw(b, m) + " : " + pw(b, n) + " = " + b + "ⁿ. Tìm n.", "Chia hai lũy thừa cùng cơ số thì trừ các số mũ.", "n = " + m + " − " + n + ".", "Thử lại: " + pw(b, n) + " × " + b + "ⁿ phải bằng " + pw(b, m) + ".", m + " − " + n + " = " + res + ", nên n = " + res + "."], 0, "");
  };

  F["index-pow"] = function (r) {
    const b = int(r, 2, 9), m = int(r, 2, 6), n = int(r, 2, 5), res = m * n, e = "(" + pw(b, m) + ")" + sup(n);
    return mk(res,
      [e + " = " + b + "ⁿ. Find n.", "A power of a power: multiply the indices.", e + " = " + Array(n).fill(pw(b, m)).join(" × ") + ".", "That is " + n + " lots of " + m + " added together.", m + " × " + n + " = " + res + ", so n = " + res + "."],
      [e + " = " + b + "ⁿ. Tìm n.", "Lũy thừa của một lũy thừa: nhân các số mũ.", e + " = " + Array(n).fill(pw(b, m)).join(" × ") + ".", "Tức là cộng " + n + " lần số " + m + ".", m + " × " + n + " = " + res + ", nên n = " + res + "."], 0, "");
  };

  F["index-base"] = function (r) {
    const pr = pick(r, [[4, 2, 2], [8, 2, 3], [16, 2, 4], [9, 3, 2], [27, 3, 3], [25, 5, 2], [32, 2, 5]]), k = int(r, 2, 7), res = pr[2] * k;
    return mk(res,
      [pw(pr[0], k) + " can be written as " + pr[1] + "ⁿ. Find n.", "Write " + pr[0] + " as a power of " + pr[1] + ".", pr[0] + " = " + pw(pr[1], pr[2]) + ".", "So " + pw(pr[0], k) + " = (" + pw(pr[1], pr[2]) + ")" + sup(k) + ". Multiply the indices.", pw(pr[0], k) + " = (" + pw(pr[1], pr[2]) + ")" + sup(k) + " = " + pw(pr[1], res) + ", so n = " + res + "."],
      [pw(pr[0], k) + " viết được thành " + pr[1] + "ⁿ. Tìm n.", "Viết " + pr[0] + " thành lũy thừa của " + pr[1] + ".", pr[0] + " = " + pw(pr[1], pr[2]) + ".", "Vậy " + pw(pr[0], k) + " = (" + pw(pr[1], pr[2]) + ")" + sup(k) + ". Nhân các số mũ.", pw(pr[0], k) + " = (" + pw(pr[1], pr[2]) + ")" + sup(k) + " = " + pw(pr[1], res) + ", nên n = " + res + "."], 0, "");
  };

  // ---- algebra (2.2, 2.5, 2.6) ----
  const LET = ["a", "b", "c", "d", "k", "m", "n", "p", "t", "x", "y"];
  F["subst-neg"] = function (r) {
    const v = pick(r, LET), a = int(r, 2, 12), b = U.nz(r, -15, 15), x = -int(r, 1, 9), res = a * x + b;
    const e = a + v + sgn(b);
    return mk(res,
      ["Work out " + e + " when " + v + " = " + E.n(x) + ".", "Replace " + v + " with (" + E.n(x) + ").", a + " × (" + E.n(x) + ") = " + E.n(a * x) + ".", "Now " + (b < 0 ? "subtract " + Math.abs(b) : "add " + b) + ".", a + " × (" + E.n(x) + ")" + sgn(b) + " = " + E.n(a * x) + sgn(b) + " = " + E.n(res) + "."],
      ["Tính " + e + " khi " + v + " = " + V.n(x) + ".", "Thay " + v + " bằng (" + V.n(x) + ").", a + " × (" + V.n(x) + ") = " + V.n(a * x) + ".", "Rồi " + (b < 0 ? "trừ " + Math.abs(b) : "cộng " + b) + ".", a + " × (" + V.n(x) + ")" + sgn(b) + " = " + V.n(a * x) + sgn(b) + " = " + V.n(res) + "."], 0, "");
  };

  F["subst-pow"] = function (r) {
    const v = pick(r, LET), k = pick(r, [2, 3]), a = int(r, 2, 6), x = -int(r, 2, k === 2 ? 9 : 5), p = Math.pow(x, k), res = a * p;
    const e = a + v + sup(k);
    return mk(res,
      ["Work out " + e + " when " + v + " = " + E.n(x) + ".", "Only " + v + " is " + (k === 2 ? "squared" : "cubed") + ", not " + a + ".", "(" + E.n(x) + ")" + sup(k) + " = " + E.n(p) + ".", "Then multiply by " + a + ".", e + " = " + a + " × (" + E.n(x) + ")" + sup(k) + " = " + a + " × " + E.p(p) + " = " + E.n(res) + "."],
      ["Tính " + e + " khi " + v + " = " + V.n(x) + ".", "Chỉ " + v + " được " + (k === 2 ? "bình phương" : "lập phương") + ", không phải " + a + ".", "(" + V.n(x) + ")" + sup(k) + " = " + V.n(p) + ".", "Rồi nhân với " + a + ".", e + " = " + a + " × (" + V.n(x) + ")" + sup(k) + " = " + a + " × " + V.p(p) + " = " + V.n(res) + "."], 0, "");
  };

  F["change-subject"] = function (r) {
    const a = int(r, 2, 9), p = int(r, 2, 15), k = int(r, 1, 30), H = a * p - k, L = pick(r, [["H", "p", "k"], ["T", "n", "c"], ["y", "x", "b"], ["C", "h", "d"]]);
    if (H <= 0) return F["change-subject"](r);
    const f = L[0] + " = " + a + L[1] + " − " + L[2];
    return mk(p,
      ["In the formula " + f + ", find " + L[1] + " when " + L[0] + " = " + H + " and " + L[2] + " = " + k + ".", "Make " + L[1] + " the subject first.", L[0] + " + " + L[2] + " = " + a + L[1] + ", so " + L[1] + " = (" + L[0] + " + " + L[2] + ") ÷ " + a + ".", "Substitute the values.", L[1] + " = (" + H + " + " + k + ") ÷ " + a + " = " + (H + k) + " ÷ " + a + " = " + p + "."],
      ["Trong công thức " + f + ", tìm " + L[1] + " khi " + L[0] + " = " + H + " và " + L[2] + " = " + k + ".", "Đổi chủ thể của công thức thành " + L[1] + " trước.", L[0] + " + " + L[2] + " = " + a + L[1] + ", nên " + L[1] + " = (" + L[0] + " + " + L[2] + ") : " + a + ".", "Thay các giá trị vào.", L[1] + " = (" + H + " + " + k + ") : " + a + " = " + (H + k) + " : " + a + " = " + p + "."], 0, "");
  };

  F["solve-bracket"] = function (r) {
    const a = int(r, 2, 9), b = int(r, 1, 9), x = int(r, -5, 15), plus = r() < 0.5, c = a * (plus ? x + b : x - b);
    const eq = a + "(x " + (plus ? "+ " : "− ") + b + ") = " + E.n(c), eqV = a + "(x " + (plus ? "+ " : "− ") + b + ") = " + V.n(c), inner = c / a;
    return mk(x,
      ["Solve " + eq + ".", "Divide both sides by " + a + " (or expand the bracket first).", "x " + (plus ? "+ " : "− ") + b + " = " + E.n(inner) + ".", plus ? "Subtract " + b + " from both sides." : "Add " + b + " to both sides.", eq + " → x " + (plus ? "+ " : "− ") + b + " = " + E.n(inner) + " → x = " + E.n(x) + "."],
      ["Giải " + eqV + ".", "Chia cả hai vế cho " + a + " (hoặc phá ngoặc trước).", "x " + (plus ? "+ " : "− ") + b + " = " + V.n(inner) + ".", plus ? "Trừ " + b + " ở cả hai vế." : "Cộng " + b + " vào cả hai vế.", eqV + " → x " + (plus ? "+ " : "− ") + b + " = " + V.n(inner) + " → x = " + V.n(x) + "."], 0, "");
  };

  F["solve-both"] = function (r) {
    const v = pick(r, ["x", "y", "n", "m"]), c = int(r, 1, 8), a = c + int(r, 1, 6), x = int(r, -6, 15), b = U.nz(r, -20, 20), d = (a - c) * x + b;
    if (d === 0) return F["solve-both"](r);
    const eq = a + v + sgn(b) + " = " + (c === 1 ? "" : c) + v + sgn(d), dc = a - c;
    return mk(x,
      ["Solve " + eq + ".", "Collect the " + v + " terms on one side: subtract " + (c === 1 ? "" : c) + v + " from both sides.", (dc === 1 ? "" : dc) + v + sgn(b) + " = " + E.n(d) + ".", "Now get " + v + " on its own.", (dc === 1 ? "" : dc) + v + " = " + E.n(d - b) + ", so " + v + " = " + E.n(d - b) + " ÷ " + dc + " = " + E.n(x) + "."],
      ["Giải " + eq + ".", "Đưa các hạng tử chứa " + v + " về một vế: trừ " + (c === 1 ? "" : c) + v + " ở cả hai vế.", (dc === 1 ? "" : dc) + v + sgn(b) + " = " + V.n(d) + ".", "Tìm " + v + ".", (dc === 1 ? "" : dc) + v + " = " + V.n(d - b) + ", nên " + v + " = " + V.n(d - b) + " : " + dc + " = " + V.n(x) + "."], 0, "");
  };

  F["tri-angles-expr"] = function (r) {
    const a = int(r, 2, 7), b = int(r, 1, 4), c = int(r, 1, 30), e = int(r, 1, 20), sum = a + b + 1, n = (180 - c + e) / sum;
    if (n !== Math.floor(n) || n - e < 5 || n < 5) return F["tri-angles-expr"](r);
    const t = a + "n°, (" + (b === 1 ? "" : b) + "n + " + c + ")° and (n − " + e + ")°", tv = a + "n°, (" + (b === 1 ? "" : b) + "n + " + c + ")° và (n − " + e + ")°";
    return mk(n,
      ["The three angles of a triangle are " + t + ". Find n.", "The angles of a triangle add up to 180°.", a + "n + " + (b === 1 ? "" : b) + "n + " + c + " + n − " + e + " = 180.", "Collect like terms: " + sum + "n" + sgn(c - e) + " = 180.", sum + "n = " + (180 - c + e) + ", so n = " + (180 - c + e) + " ÷ " + sum + " = " + n + "."],
      ["Ba góc của một tam giác là " + tv + ". Tìm n.", "Tổng ba góc của tam giác bằng 180°.", a + "n + " + (b === 1 ? "" : b) + "n + " + c + " + n − " + e + " = 180.", "Thu gọn: " + sum + "n" + sgn(c - e) + " = 180.", sum + "n = " + (180 - c + e) + ", nên n = " + (180 - c + e) + " : " + sum + " = " + n + "."], 0, "");
  };

  F["int-sum-range"] = function (r) {
    const fr = [[1, 4], [1, 3], [1, 2], [2, 3], [3, 4]], w1 = int(r, -6, 8), w2 = w1 + int(r, 2, 5), f1 = pick(r, fr), f2 = pick(r, fr);
    const lo = w1 + 1, hi = w2, list = [];
    for (let m = lo; m <= hi; m++) list.push(m);
    const res = list.reduce(function (s, x) { return s + x; }, 0);
    const mix = function (L, w, f) { return w < 0 ? "−" + (Math.abs(w) - 1 === 0 ? "" : (Math.abs(w) - 1) + " ") + (f[1] - f[0]) + "/" + f[1] : (w === 0 ? "" : w + " ") + f[0] + "/" + f[1]; };
    // w + f/d with w < 0 written as a negative mixed number: −2 + 1/4 = −1 3/4
    const A = mix(E, w1, f1), B = mix(E, w2, f2), Ls = list.map(E.n).join(", "), LsV = list.map(V.n).join(", ");
    return mk(res,
      ["Work out the sum of all the integers m with " + A + " ≤ m < " + B + ".", "List the integers between the two numbers.", "The smallest is " + E.n(lo) + " and the largest is " + E.n(hi) + ".", "Add them (negatives and positives can cancel).", "m = " + Ls + "; the sum is " + E.n(res) + "."],
      ["Tính tổng tất cả các số nguyên m thỏa " + A + " ≤ m < " + B + ".", "Liệt kê các số nguyên nằm giữa hai số đó.", "Số nhỏ nhất là " + V.n(lo) + " và lớn nhất là " + V.n(hi) + ".", "Cộng lại (số âm và số dương có thể triệt tiêu nhau).", "m = " + LsV + "; tổng là " + V.n(res) + "."], 0, "");
  };

  F["fixed-plus"] = function (r) {
    const kind = pick(r, ["taxi", "plumber", "books"]);
    if (kind === "taxi") {
      const fee = int(r, 2, 9), rate = int(r, 1, 4), k = int(r, 5, 60), res = fee + rate * k;
      return mk(res,
        ["A taxi charges a fixed fee of $" + fee + " plus $" + rate + " per km. Work out the cost of a " + k + " km journey.", "Cost = fixed fee + cost per km × number of km.", "C = " + fee + " + " + rate + " × " + k + ".", "Multiply before you add.", "C = " + fee + " + " + (rate * k) + " = $" + res + "."],
        ["Một hãng taxi tính phí cố định " + fee + " đô la cộng " + rate + " đô la mỗi km. Tính cước cho quãng đường " + k + " km.", "Cước = phí cố định + giá mỗi km × số km.", "C = " + fee + " + " + rate + " × " + k + ".", "Nhân trước rồi cộng.", "C = " + fee + " + " + (rate * k) + " = " + res + " đô la."], 0, "$");
    }
    if (kind === "plumber") {
      const fee = int(r, 4, 12) * 5, rate = int(r, 4, 12) * 5, h = pick(r, [1.5, 2, 2.5, 3, 3.5, 4, 0.5]), res = clean(fee + rate * h);
      return mk(res,
        ["A plumber charges a fixed fee of $" + fee + " plus $" + rate + " per hour. Work out the cost of a job that lasts " + E.n(h) + " hours.", "Cost = fixed fee + hourly rate × hours.", "C = " + fee + " + " + rate + " × " + E.n(h) + ".", "Multiply before you add.", "C = " + fee + " + " + E.n(clean(rate * h)) + " = $" + E.n(res) + "."],
        ["Một thợ sửa ống nước tính phí cố định " + fee + " đô la cộng " + rate + " đô la mỗi giờ. Tính tiền công cho một việc kéo dài " + V.n(h) + " giờ.", "Tiền công = phí cố định + giá mỗi giờ × số giờ.", "C = " + fee + " + " + rate + " × " + V.n(h) + ".", "Nhân trước rồi cộng.", "C = " + fee + " + " + V.n(clean(rate * h)) + " = " + V.n(res) + " đô la."], TOL, "$");
    }
    const each = int(r, 3, 15), post = int(r, 2, 8), k = int(r, 3, 20), res = post + each * k;
    return mk(res,
      ["Postage costs $" + post + " per order and each book costs $" + each + ". Work out the total cost of " + k + " books in one order.", "Total = postage + price per book × number of books.", "T = " + post + " + " + each + " × " + k + ".", "Multiply before you add.", "T = " + post + " + " + (each * k) + " = $" + res + "."],
      ["Phí gửi hàng là " + post + " đô la mỗi đơn và mỗi cuốn sách giá " + each + " đô la. Tính tổng tiền cho " + k + " cuốn sách trong một đơn.", "Tổng = phí gửi + giá mỗi cuốn × số cuốn.", "T = " + post + " + " + each + " × " + k + ".", "Nhân trước rồi cộng.", "T = " + post + " + " + (each * k) + " = " + res + " đô la."], 0, "$");
  };

  F["fixed-plus-inv"] = function (r) {
    const rate = int(r, 2, 9), fee = int(r, 2, 15), n = int(r, 4, 40), total = fee + rate * n;
    return mk(n,
      ["Printing photos costs $" + rate + " per photo plus a fixed charge of $" + fee + ". Marcus pays $" + total + ". How many photos were printed?", "Take off the fixed charge first.", total + " − " + fee + " = " + (total - fee) + ".", "Divide by the cost of one photo.", "(" + total + " − " + fee + ") ÷ " + rate + " = " + (total - fee) + " ÷ " + rate + " = " + n + " photos."],
      ["In ảnh giá " + rate + " đô la mỗi ảnh cộng phí cố định " + fee + " đô la. Marcus trả " + total + " đô la. Đã in bao nhiêu ảnh?", "Trừ phí cố định trước.", total + " − " + fee + " = " + (total - fee) + ".", "Chia cho giá một ảnh.", "(" + total + " − " + fee + ") : " + rate + " = " + (total - fee) + " : " + rate + " = " + n + " ảnh."], 0, "");
  };

  // ---- multiplying and dividing by 0.1 and 0.01; significant figures (3.1–3.2) ----
  F["mul-01"] = function (r) {
    const k = pick(r, [0.1, 0.01]), mul = r() < 0.5, dp = int(r, 0, 2), a = dp ? clean(int(r, 11, 999) / Math.pow(10, dp)) : int(r, 2, 900);
    const res = clean(mul ? a * k : a / k), op = mul ? " × " : " ÷ ", places = k === 0.1 ? 1 : 2;
    const how = mul ? ["Multiplying by " + E.n(k) + " is the same as dividing by " + (k === 0.1 ? 10 : 100) + ".", "Nhân với " + V.n(k) + " cũng như chia cho " + (k === 0.1 ? 10 : 100) + "."] : ["Dividing by " + E.n(k) + " is the same as multiplying by " + (k === 0.1 ? 10 : 100) + ".", "Chia cho " + V.n(k) + " cũng như nhân với " + (k === 0.1 ? 10 : 100) + "."];
    return mk(res,
      ["Work out " + E.n(a) + op + E.n(k) + ".", how[0], "The digits move " + places + " place" + (places > 1 ? "s" : "") + " to the " + (mul ? "right" : "left") + " in the place-value table, i.e. the number gets " + (mul ? "smaller" : "bigger") + ".", "Check: is the answer " + (mul ? "smaller" : "bigger") + " than " + E.n(a) + "?", E.n(a) + op + E.n(k) + " = " + E.n(a) + (mul ? " ÷ " : " × ") + (k === 0.1 ? 10 : 100) + " = " + E.n(res) + "."],
      ["Tính " + V.n(a) + (mul ? " × " : " : ") + V.n(k) + ".", how[1], "Kết quả " + (mul ? "nhỏ hơn" : "lớn hơn") + " số ban đầu: các chữ số dịch " + places + " hàng.", "Thử lại: đáp số có " + (mul ? "nhỏ hơn" : "lớn hơn") + " " + V.n(a) + " không?", V.n(a) + (mul ? " × " : " : ") + V.n(k) + " = " + V.n(a) + (mul ? " : " : " × ") + (k === 0.1 ? 10 : 100) + " = " + V.n(res) + "."], TOL, "");
  };

  function roundSf(x, s) { return Number(x.toPrecision(s)); }
  F["round-sf"] = function (r) {
    const kind = pick(r, ["big", "small", "mid"]), s = int(r, 1, kind === "mid" ? 4 : 3);
    let x = 0;
    if (kind === "big") x = int(r, 1000, 99999) + (r() < 0.3 ? 0 : 0);
    else if (kind === "small") x = clean(int(r, 1001, 99999) / Math.pow(10, int(r, 6, 7)));
    else x = clean(int(r, 100001, 9999999) / 10000);
    const res = roundSf(x, s), d = String(x).replace(/^0\.0*/, "").replace(".", "")[s];
    if (d === "5" || d === undefined || res === x) return F["round-sf"](r);           // keep away from exact halves and no-change cases
    const sfEn = s + " significant figure" + (s > 1 ? "s" : ""), sfVi = s + " chữ số có nghĩa";
    return mk(res,
      ["Round " + E.n(x) + " to " + sfEn + ".", kind === "small" ? "Zeros at the start are not significant: start counting at the first non-zero digit." : "Count digits from the first non-zero digit.", "Look at the digit after the " + s + (s === 1 ? "st" : s === 2 ? "nd" : s === 3 ? "rd" : "th") + " significant figure: it is " + d + ".", +d >= 5 ? "It is 5 or more, so round up." : "It is less than 5, so round down.", E.n(x) + " = " + E.n(res) + " (" + s + " s.f.)."],
      ["Làm tròn " + V.n(x) + " đến " + sfVi + ".", kind === "small" ? "Các chữ số 0 ở đầu không phải chữ số có nghĩa: bắt đầu đếm từ chữ số khác 0 đầu tiên." : "Đếm từ chữ số khác 0 đầu tiên.", "Xem chữ số ngay sau chữ số có nghĩa thứ " + s + ": đó là " + d + ".", +d >= 5 ? "Chữ số đó từ 5 trở lên nên làm tròn lên." : "Chữ số đó nhỏ hơn 5 nên làm tròn xuống.", V.n(x) + " ≈ " + V.n(res) + " (" + s + " chữ số có nghĩa)."], TOL, "");
  };

  F["estimate-sf"] = function (r) {
    // a × b ÷ c with each rounded to 1 s.f. giving a whole answer
    const a1 = pick(r, [0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 2, 3, 4, 5, 6, 8]), b1 = pick(r, [20, 30, 40, 50, 60, 80, 200, 300, 400, 500, 600]), c1 = pick(r, [2, 3, 4, 5, 6, 8, 20, 30, 40]);
    const res = clean(a1 * b1 / c1);
    if (res !== Math.round(res) || res < 1) return F["estimate-sf"](r);
    const wiggle = function (x) { const lead = Math.pow(10, Math.floor(Math.log10(x))), d = x / lead; let y = 0; while (!y || roundSf(y, 1) !== x || y === x) y = clean((d + (int(r, -35, 44) / 100)) * lead); return Number(y.toPrecision(3)); };
    const a = wiggle(a1), b = wiggle(b1), c = wiggle(c1);
    if (roundSf(a, 1) !== a1 || roundSf(b, 1) !== b1 || roundSf(c, 1) !== c1) return F["estimate-sf"](r);
    return mk(res,
      ["Estimate the value of (" + E.n(a) + " × " + E.n(b) + ") ÷ " + E.n(c) + " by rounding each number to 1 significant figure.", "Round each number to 1 significant figure.", E.n(a) + " ≈ " + E.n(a1) + ", " + E.n(b) + " ≈ " + E.n(b1) + ", " + E.n(c) + " ≈ " + E.n(c1) + ".", "Work out the easier calculation.", "(" + E.n(a1) + " × " + E.n(b1) + ") ÷ " + E.n(c1) + " = " + E.n(clean(a1 * b1)) + " ÷ " + E.n(c1) + " = " + E.n(res) + "."],
      ["Ước lượng giá trị của (" + V.n(a) + " × " + V.n(b) + ") : " + V.n(c) + " bằng cách làm tròn mỗi số đến 1 chữ số có nghĩa.", "Làm tròn mỗi số đến 1 chữ số có nghĩa.", V.n(a) + " ≈ " + V.n(a1) + ", " + V.n(b) + " ≈ " + V.n(b1) + ", " + V.n(c) + " ≈ " + V.n(c1) + ".", "Tính phép tính dễ hơn.", "(" + V.n(a1) + " × " + V.n(b1) + ") : " + V.n(c1) + " = " + V.n(clean(a1 * b1)) + " : " + V.n(c1) + " = " + V.n(res) + "."], 0, "");
  };

  // ---- decimals (4.1–4.4) ----
  F["dec-count"] = function (r) {
    const dp = pick(r, [2, 3]), step = Math.pow(10, -dp), unit = Math.pow(10, dp);
    const loI = int(r, 100, 900) * (dp === 3 ? 10 : 1) + int(r, 0, dp === 3 ? 9 : 0), span = int(r, 3, 12), hiI = loI + span;
    const loIn = r() < 0.5, hiIn = r() < 0.5, lo = clean(loI / unit), hi = clean(hiI / unit);
    const res = span - 1 + (loIn ? 1 : 0) + (hiIn ? 1 : 0), word = dp === 2 ? ["two", "hai"] : ["three", "ba"];
    const s1 = loIn ? "≤" : "<", s2 = hiIn ? "≤" : "<";
    return mk(res,
      ["x has exactly " + word[0] + " decimal places and " + E.n(lo) + " " + s1 + " x " + s2 + " " + E.n(hi) + ". How many different values can x have?", "Count in steps of " + E.n(step) + ".", "From " + E.n(lo) + " to " + E.n(hi) + " there are " + span + " steps.", "Check the ends: " + E.n(lo) + (loIn ? " is" : " is not") + " allowed and " + E.n(hi) + (hiIn ? " is" : " is not") + " allowed.", span + " − 1" + (loIn ? " + 1" : "") + (hiIn ? " + 1" : "") + " = " + res + " values."],
      ["x có đúng " + word[1] + " chữ số thập phân và " + V.n(lo) + " " + s1 + " x " + s2 + " " + V.n(hi) + ". x có thể nhận bao nhiêu giá trị khác nhau?", "Đếm theo bước " + V.n(step) + ".", "Từ " + V.n(lo) + " đến " + V.n(hi) + " có " + span + " bước.", "Xét hai đầu: " + V.n(lo) + (loIn ? " được" : " không được") + " lấy và " + V.n(hi) + (hiIn ? " được" : " không được") + " lấy.", span + " − 1" + (loIn ? " + 1" : "") + (hiIn ? " + 1" : "") + " = " + res + " giá trị."], 0, "");
  };

  const dec1 = function (r, lo, hi) { return clean(int(r, lo, hi) / 10); };
  F["dec-mul8"] = function (r) {
    let a = pick(r, [dec1(r, 1, 9), dec1(r, 11, 99), int(r, 2, 12)]), b = pick(r, [dec1(r, 1, 9), clean(int(r, 1, 9) / 100)]);
    if (r() < 0.4) a = -a; else if (r() < 0.3) b = -b;
    const res = clean(a * b), dpA = (String(Math.abs(a)).split(".")[1] || "").length, dpB = (String(Math.abs(b)).split(".")[1] || "").length;
    const ia = Math.round(Math.abs(a) * Math.pow(10, dpA)), ib = Math.round(Math.abs(b) * Math.pow(10, dpB));
    return mk(res,
      ["Work out " + E.n(a) + " × " + E.p(b) + ".", "Ignore the decimal points and signs: " + ia + " × " + ib + " = " + (ia * ib) + ".", "Count the decimal places in the question: " + (dpA + dpB) + " altogether, so the answer has " + (dpA + dpB) + ".", (a < 0) !== (b < 0) ? "One number is negative, so the answer is negative." : "Check the size with an estimate.", E.n(a) + " × " + E.p(b) + " = " + E.n(res) + "."],
      ["Tính " + V.n(a) + " × " + V.p(b) + ".", "Bỏ dấu phẩy và dấu âm: " + ia + " × " + ib + " = " + (ia * ib) + ".", "Đếm số chữ số thập phân ở đề: tất cả " + (dpA + dpB) + ", nên đáp số có " + (dpA + dpB) + " chữ số thập phân.", (a < 0) !== (b < 0) ? "Có một số âm nên kết quả âm." : "Kiểm tra độ lớn bằng ước lượng.", V.n(a) + " × " + V.p(b) + " = " + V.n(res) + "."], TOL, "");
  };

  F["dec-div8"] = function (r) {
    const b = pick(r, [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.2, 1.5, 0.04, 0.05]), q = pick(r, [int(r, 2, 40), dec1(r, 11, 99)]), neg = r() < 0.25;
    const a = clean(b * q * (neg ? -1 : 1)), res = clean(a / b), k = b < 0.1 ? 100 : 10;
    return mk(res,
      ["Work out " + E.n(a) + " ÷ " + E.n(b) + ".", "Multiply both numbers by " + k + " so you divide by a whole number.", E.n(a) + " ÷ " + E.n(b) + " = " + E.n(clean(a * k)) + " ÷ " + E.n(clean(b * k)) + ".", "Now divide (keep the sign).", E.n(clean(a * k)) + " ÷ " + E.n(clean(b * k)) + " = " + E.n(res) + "."],
      ["Tính " + V.n(a) + " : " + V.n(b) + ".", "Nhân cả hai số với " + k + " để chia cho một số nguyên.", V.n(a) + " : " + V.n(b) + " = " + V.n(clean(a * k)) + " : " + V.n(clean(b * k)) + ".", "Thực hiện phép chia (giữ nguyên dấu).", V.n(clean(a * k)) + " : " + V.n(clean(b * k)) + " = " + V.n(res) + "."], TOL, "");
  };

  F["dec-bracket"] = function (r) {
    const x = dec1(r, 1, 9), y = dec1(r, 1, 9), c = dec1(r, 2, 9), plus = r() < 0.5;
    if (!plus && x <= y) return F["dec-bracket"](r);
    const inner = clean(plus ? x + y : x - y), res = clean(inner * c), op = plus ? " + " : " − ";
    return mk(res,
      ["Work out (" + E.n(x) + op + E.n(y) + ") × " + E.n(c) + ".", "Work out the bracket first.", E.n(x) + op + E.n(y) + " = " + E.n(inner) + ".", "Multiply: think of " + Math.round(inner * 10) + " × " + Math.round(c * 10) + " then put in 2 decimal places.", E.n(inner) + " × " + E.n(c) + " = " + E.n(res) + "."],
      ["Tính (" + V.n(x) + op + V.n(y) + ") × " + V.n(c) + ".", "Tính trong ngoặc trước.", V.n(x) + op + V.n(y) + " = " + V.n(inner) + ".", "Nhân: tính " + Math.round(inner * 10) + " × " + Math.round(c * 10) + " rồi đặt 2 chữ số thập phân.", V.n(inner) + " × " + V.n(c) + " = " + V.n(res) + "."], TOL, "");
  };

  F["times-point9"] = function (r) {
    const k = pick(r, [0.9, 0.99]), small = k === 0.9 ? 0.1 : 0.01, a = int(r, 12, 99) * pick(r, [1, 1, 10, 100]), part = clean(a * small), res = clean(a - part);
    return mk(res,
      ["Use the idea " + E.n(k) + " = 1 − " + E.n(small) + " to work out " + E.n(a) + " × " + E.n(k) + ".", E.n(a) + " × " + E.n(k) + " = " + E.n(a) + " × 1 − " + E.n(a) + " × " + E.n(small) + ".", E.n(a) + " × " + E.n(small) + " = " + E.n(part) + ".", "Subtract that from " + E.n(a) + ".", E.n(a) + " − " + E.n(part) + " = " + E.n(res) + "."],
      ["Dùng ý " + V.n(k) + " = 1 − " + V.n(small) + " để tính " + V.n(a) + " × " + V.n(k) + ".", V.n(a) + " × " + V.n(k) + " = " + V.n(a) + " × 1 − " + V.n(a) + " × " + V.n(small) + ".", V.n(a) + " × " + V.n(small) + " = " + V.n(part) + ".", "Lấy " + V.n(a) + " trừ đi số đó.", V.n(a) + " − " + V.n(part) + " = " + V.n(res) + "."], TOL, "");
  };

  // ---- fractions (7.1–7.6) ----
  F["frac-to-dec"] = function (r) {
    const d = pick(r, [4, 5, 8, 16, 20, 25, 40]);
    let n = 0;
    while (!n || gcd(n, d) !== 1) n = int(r, 1, d - 1);
    const res = clean(n / d);
    return mk(res,
      ["Use division to write " + n + "/" + d + " as a decimal.", n + "/" + d + " means " + n + " ÷ " + d + ".", "Write " + n + " as " + n + ".000 and divide by " + d + ".", "The division stops, so the decimal terminates.", n + " ÷ " + d + " = " + E.n(res) + "."],
      ["Dùng phép chia để viết " + n + "/" + d + " dưới dạng số thập phân.", n + "/" + d + " nghĩa là " + n + " : " + d + ".", "Viết " + n + " thành " + n + ",000 rồi chia cho " + d + ".", "Phép chia dừng lại nên đây là số thập phân hữu hạn.", n + " : " + d + " = " + V.n(res) + "."], TOL, "");
  };

  F["recur-digit"] = function (r) {
    const d = pick(r, [11, 7, 37, 27]);
    let n = 0;
    while (!n || gcd(n, d) !== 1) n = int(r, 1, d - 1);
    const digits = [];
    let rem = n;
    for (let i = 0; i < 60; i++) { rem *= 10; digits.push(Math.floor(rem / d)); rem %= d; }
    const cyc = d === 11 ? 2 : d === 7 ? 6 : 3, pos = int(r, cyc + 3, 50), res = digits[pos - 1], shown = digits.slice(0, cyc * 2).join("");
    const left = pos % cyc === 0 ? cyc : pos % cyc;
    return mk(res,
      [n + "/" + d + " = 0." + shown + "… What is digit number " + pos + " after the decimal point?", "The digits repeat in a block of " + cyc + ": " + digits.slice(0, cyc).join("") + ".", "Divide " + pos + " by " + cyc + " and look at the remainder.", pos + " = " + cyc + " × " + Math.floor((pos - 1) / cyc) + " + " + left + ", so it is digit " + left + " of the block.", "Digit " + left + " of " + digits.slice(0, cyc).join("") + " is " + res + "."],
      [n + "/" + d + " = 0," + shown + "… Chữ số thứ " + pos + " sau dấu phẩy là chữ số nào?", "Các chữ số lặp lại theo nhóm " + cyc + " chữ số: " + digits.slice(0, cyc).join("") + ".", "Chia " + pos + " cho " + cyc + " và xem số dư.", pos + " = " + cyc + " × " + Math.floor((pos - 1) / cyc) + " + " + left + ", nên đó là chữ số thứ " + left + " trong nhóm.", "Chữ số thứ " + left + " của " + digits.slice(0, cyc).join("") + " là " + res + "."], 0, "");
  };

  F["mixed-times-int"] = function (r) {
    const d = int(r, 2, 9), w = int(r, 1, 9), a = int(r, 1, d - 1), k = pick(r, [d * int(r, 1, 4), int(r, 3, 20)]);
    if (gcd(a, d) !== 1) return F["mixed-times-int"](r);
    const top = w * d + a, res = ms(top * k, d), e = w + " " + a + "/" + d + " × " + k, part = a * k;
    return mk(res,
      ["Work out " + e + "." + (typeof res === "string" ? " Give your answer as a mixed number." : ""), "Partition: " + w + " × " + k + " + " + a + "/" + d + " × " + k + ".", w + " × " + k + " = " + (w * k) + ".", a + "/" + d + " × " + k + " = " + part + "/" + d + " = " + show(ms(part, d)) + ".", e + " = " + (w * k) + " + " + show(ms(part, d)) + " = " + show(res) + "."],
      ["Tính " + e + "." + (typeof res === "string" ? " Viết đáp số dưới dạng hỗn số." : ""), "Tách: " + w + " × " + k + " + " + a + "/" + d + " × " + k + ".", w + " × " + k + " = " + (w * k) + ".", a + "/" + d + " × " + k + " = " + part + "/" + d + " = " + show(ms(part, d)) + ".", e + " = " + (w * k) + " + " + show(ms(part, d)) + " = " + show(res) + "."], 0, "");
  };

  F["int-div-frac"] = function (r) {
    const n = int(r, 2, 15), d = int(r, 2, 10);
    let a = 0;
    while (!a || gcd(a, d) !== 1) a = int(r, 1, d - 1);
    const res = ms(n * d, a), e = n + " ÷ " + a + "/" + d, fr = a === 1 ? String(n * d) : (n * d) + "/" + a, tail = String(show(res)) === fr ? "" : " = " + show(res);
    return mk(res,
      ["Work out " + e + "." + (typeof res === "string" ? " Give your answer as a mixed number." : ""), "Dividing by a fraction = multiplying by its reciprocal.", "The reciprocal of " + a + "/" + d + " is " + d + "/" + a + ".", n + " × " + d + "/" + a + " = " + fr + ".", e + " = " + n + " × " + d + "/" + a + " = " + fr + tail + "."],
      ["Tính " + n + " : " + a + "/" + d + "." + (typeof res === "string" ? " Viết đáp số dưới dạng hỗn số." : ""), "Chia cho một phân số = nhân với phân số nghịch đảo.", "Phân số nghịch đảo của " + a + "/" + d + " là " + d + "/" + a + ".", n + " × " + d + "/" + a + " = " + fr + ".", n + " : " + a + "/" + d + " = " + n + " × " + d + "/" + a + " = " + fr + tail + "."], 0, "");
  };

  F["frac-rest"] = function (r) {
    const ctx = pick(r, [["In a box of chocolates, ", " are white, ", " are milk and the rest are dark. What fraction are dark?", "Trong một hộp sô-cô-la, ", " là sô-cô-la trắng, ", " là sô-cô-la sữa, còn lại là sô-cô-la đen. Sô-cô-la đen chiếm bao nhiêu phần?"],
      ["In a hockey squad, ", " of the players are short, ", " are medium height and the rest are tall. What fraction are tall?", "Trong một đội khúc côn cầu, ", " số cầu thủ thấp, ", " cao trung bình, còn lại là cao. Cầu thủ cao chiếm bao nhiêu phần?"]]);
    const b1 = int(r, 2, 8), b2 = int(r, 2, 8), a1 = int(r, 1, b1 - 1), a2 = int(r, 1, b2 - 1);
    if (gcd(a1, b1) !== 1 || gcd(a2, b2) !== 1 || b1 === b2 || a1 * b2 + a2 * b1 >= b1 * b2) return F["frac-rest"](r);
    const L = U.lcm(b1, b2), n1 = a1 * L / b1, n2 = a2 * L / b2, rest = L - n1 - n2, res = fs(rest, L), f1 = a1 + "/" + b1, f2 = a2 + "/" + b2;
    return mk(res,
      [ctx[0] + f1 + ctx[1] + f2 + ctx[2], "All the parts together make 1 whole.", "Use the common denominator " + L + ": " + f1 + " = " + n1 + "/" + L + ", " + f2 + " = " + n2 + "/" + L + ".", "Subtract both from " + L + "/" + L + ".", "1 − " + n1 + "/" + L + " − " + n2 + "/" + L + " = " + rest + "/" + L + (String(res) === rest + "/" + L ? "" : " = " + res) + "."],
      [ctx[3] + f1 + ctx[4] + f2 + ctx[5], "Tất cả các phần cộng lại bằng 1.", "Quy đồng mẫu " + L + ": " + f1 + " = " + n1 + "/" + L + ", " + f2 + " = " + n2 + "/" + L + ".", "Lấy " + L + "/" + L + " trừ đi hai phần đó.", "1 − " + n1 + "/" + L + " − " + n2 + "/" + L + " = " + rest + "/" + L + (String(res) === rest + "/" + L ? "" : " = " + res) + "."], 0, "");
  };

  // ---- sequences (9.1–9.3) ----
  F["term-far"] = function (r) {
    const k = int(r, 5, 15), m = k + int(r, 5, 15), d = dec1(r, 11, 79), t = dec1(r, 100, 900), res = clean(t + (m - k) * d);
    return mk(res,
      ["Term number " + k + " of a sequence is " + E.n(t) + " and the term-to-term rule is 'add " + E.n(d) + "'. What is term number " + m + "?", "From term " + k + " to term " + m + " there are " + (m - k) + " steps.", "Each step adds " + E.n(d) + ": " + (m - k) + " × " + E.n(d) + " = " + E.n(clean((m - k) * d)) + ".", "Add that to term " + k + ". (Doubling term " + k + " would be wrong.)", E.n(t) + " + " + E.n(clean((m - k) * d)) + " = " + E.n(res) + "."],
      ["Số hạng thứ " + k + " của một dãy là " + V.n(t) + " và quy tắc là 'cộng " + V.n(d) + "'. Số hạng thứ " + m + " là bao nhiêu?", "Từ số hạng thứ " + k + " đến số hạng thứ " + m + " có " + (m - k) + " bước.", "Mỗi bước cộng " + V.n(d) + ": " + (m - k) + " × " + V.n(d) + " = " + V.n(clean((m - k) * d)) + ".", "Cộng kết quả vào số hạng thứ " + k + ". (Nhân đôi số hạng thứ " + k + " là sai.)", V.n(t) + " + " + V.n(clean((m - k) * d)) + " = " + V.n(res) + "."], TOL, "");
  };

  F["nth-linear"] = function (r) {
    const a = int(r, 2, 12), b = U.nz(r, -15, 20), n = int(r, 5, 40), res = a * n + b, f = a + "n" + sgn(b);
    return mk(res,
      ["The nth term of a sequence is " + f + ". What is term number " + n + "?", "Replace n with " + n + ".", a + " × " + n + " = " + (a * n) + ".", b < 0 ? "Then subtract " + Math.abs(b) + "." : "Then add " + b + ".", a + " × " + n + sgn(b) + " = " + (a * n) + sgn(b) + " = " + E.n(res) + "."],
      ["Số hạng tổng quát của một dãy là " + f + ". Số hạng thứ " + n + " là bao nhiêu?", "Thay n bằng " + n + ".", a + " × " + n + " = " + (a * n) + ".", b < 0 ? "Rồi trừ " + Math.abs(b) + "." : "Rồi cộng " + b + ".", a + " × " + n + sgn(b) + " = " + (a * n) + sgn(b) + " = " + V.n(res) + "."], 0, "");
  };

  F["nth-linear-pos"] = function (r) {
    const a = int(r, 2, 12), b = U.nz(r, -15, 20), n = int(r, 5, 40), T = a * n + b, f = a + "n" + sgn(b);
    if (T <= 0) return F["nth-linear-pos"](r);
    return mk(n,
      ["In the sequence with nth term " + f + ", which position n gives the term " + T + "?", "Solve " + f + " = " + T + ".", a + "n = " + T + (b < 0 ? " + " + Math.abs(b) : " − " + b) + " = " + (T - b) + ".", "Divide by " + a + ".", "n = " + (T - b) + " ÷ " + a + " = " + n + "."],
      ["Trong dãy có số hạng tổng quát " + f + ", số hạng " + T + " ở vị trí n bằng bao nhiêu?", "Giải " + f + " = " + T + ".", a + "n = " + T + (b < 0 ? " + " + Math.abs(b) : " − " + b) + " = " + (T - b) + ".", "Chia cho " + a + ".", "n = " + (T - b) + " : " + a + " = " + n + "."], 0, "");
  };

  // ---- percentages (10.1–10.2) ----
  const money = function (r) { return pick(r, [int(r, 2, 40) * 10, int(r, 1, 40) * 20, int(r, 2, 19) * 50]); };
  F["pct-increase"] = function (r) {
    const x = money(r), p = int(r, 1, 19) * 5, m = clean(1 + p / 100), res = clean(x * m);
    return mk(res,
      ["An item costs $" + E.n(x) + ". Its price is increased by " + p + "%. What is the new price?", "An increase of " + p + "% means multiplying by 100% + " + p + "% = " + (100 + p) + "%.", "The multiplier is " + E.n(m) + ".", "Multiply the price by the multiplier.", E.n(x) + " × " + E.n(m) + " = $" + E.n(res) + "."],
      ["Một món hàng giá " + V.n(x) + " đô la được tăng giá " + p + "%. Giá mới là bao nhiêu?", "Tăng " + p + "% nghĩa là nhân với 100% + " + p + "% = " + (100 + p) + "%.", "Hệ số nhân là " + V.n(m) + ".", "Nhân giá với hệ số nhân.", V.n(x) + " × " + V.n(m) + " = " + V.n(res) + " đô la."], TOL, "$");
  };

  F["pct-decrease"] = function (r) {
    const x = money(r) * 10, p = int(r, 1, 19) * 5, m = clean(1 - p / 100), res = clean(x * m);
    return mk(res,
      ["A town has " + E.n(x) + " people. The population decreases by " + p + "%. How many people are left?", "A decrease of " + p + "% leaves 100% − " + p + "% = " + (100 - p) + "%.", "The multiplier is " + E.n(m) + ".", "Multiply the population by the multiplier.", E.n(x) + " × " + E.n(m) + " = " + E.n(res) + "."],
      ["Một thị trấn có " + V.n(x) + " người. Dân số giảm " + p + "%. Còn lại bao nhiêu người?", "Giảm " + p + "% thì còn lại 100% − " + p + "% = " + (100 - p) + "%.", "Hệ số nhân là " + V.n(m) + ".", "Nhân dân số với hệ số nhân.", V.n(x) + " × " + V.n(m) + " = " + V.n(res) + "."], TOL, "");
  };

  F["pct-what"] = function (r) {
    const whole = int(r, 4, 99) * 10, p = pick(r, [int(r, 1, 19) * 5, int(r, 21, 60) * 5]), part = clean(whole * p / 100);
    if (part !== Math.round(part)) return F["pct-what"](r);
    return mk(p,
      ["What percentage of " + E.n(whole) + " is " + E.n(part) + "?", "Write it as a fraction: " + E.n(part) + "/" + E.n(whole) + ".", "Multiply by 100 to change it to a percentage.", p > 100 ? "The part is bigger than the whole, so the answer is more than 100%." : "Simplify before multiplying if it helps.", E.n(part) + " ÷ " + E.n(whole) + " × 100 = " + p + "%."],
      [V.n(part) + " là bao nhiêu phần trăm của " + V.n(whole) + "?", "Viết thành phân số: " + V.n(part) + "/" + V.n(whole) + ".", "Nhân với 100 để đổi ra phần trăm.", p > 100 ? "Phần lớn hơn tổng nên đáp số lớn hơn 100%." : "Rút gọn trước khi nhân nếu tiện.", V.n(part) + " : " + V.n(whole) + " × 100 = " + p + "%."], 0, "%");
  };

  F["pct-change"] = function (r) {
    const a = int(r, 2, 40) * 10, p = int(r, 1, 18) * 5, up = r() < 0.6, b = clean(a * (up ? 1 + p / 100 : 1 - p / 100));
    if (b !== Math.round(b)) return F["pct-change"](r);
    const ch = Math.abs(b - a), w = up ? ["rises", "increase", "tăng", "tăng"] : ["falls", "decrease", "giảm", "giảm"];
    return mk(p,
      ["A ticket price " + w[0] + " from $" + a + " to $" + b + ". Work out the percentage " + w[1] + ".", "Find the change first: " + (up ? b + " − " + a : a + " − " + b) + " = " + ch + ".", "Divide the change by the ORIGINAL price, " + a + ".", "Multiply by 100.", ch + " ÷ " + a + " × 100 = " + p + "%."],
      ["Giá vé " + w[2] + " từ " + a + " đô la " + (up ? "lên " : "xuống ") + b + " đô la. Tính phần trăm " + w[3] + ".", "Tính phần thay đổi trước: " + (up ? b + " − " + a : a + " − " + b) + " = " + ch + ".", "Chia phần thay đổi cho giá BAN ĐẦU là " + a + ".", "Nhân với 100.", ch + " : " + a + " × 100 = " + p + "%."], 0, "%");
  };

  F["pct-repeat"] = function (r) {
    const x = int(r, 2, 20) * 100, p1 = int(r, 1, 6) * 5, p2 = int(r, 1, 6) * 5, up2 = r() < 0.6;
    const m1 = clean(1 + p1 / 100), m2 = clean(up2 ? 1 + p2 / 100 : 1 - p2 / 100), mid = clean(x * m1), res = clean(mid * m2);
    const second = up2 ? ["increases the new price by a further " + p2 + "%", "tiếp tục tăng giá mới thêm " + p2 + "%"] : ["reduces the new price by " + p2 + "%", "giảm giá mới đi " + p2 + "%"];
    return mk(res,
      ["A television costs $" + E.n(x) + ". The shop increases the price by " + p1 + "%, then " + second[0] + ". Find the final price.", "Use one multiplier for each change: " + E.n(m1) + " and " + E.n(m2) + ".", "After the first change: " + E.n(x) + " × " + E.n(m1) + " = " + E.n(mid) + ".", "Apply the second change to the NEW price.", E.n(mid) + " × " + E.n(m2) + " = $" + E.n(res) + "."],
      ["Một chiếc ti vi giá " + V.n(x) + " đô la. Cửa hàng tăng giá " + p1 + "%, sau đó " + second[1] + ". Tìm giá cuối cùng.", "Dùng một hệ số nhân cho mỗi lần thay đổi: " + V.n(m1) + " và " + V.n(m2) + ".", "Sau lần đầu: " + V.n(x) + " × " + V.n(m1) + " = " + V.n(mid) + ".", "Áp dụng lần thay đổi thứ hai cho giá MỚI.", V.n(mid) + " × " + V.n(m2) + " = " + V.n(res) + " đô la."], TOL, "$");
  };

  F["multiplier"] = function (r) {
    const p = pick(r, [int(r, 1, 99), int(r, 1, 19) * 5]), up = r() < 0.5, res = clean(up ? 1 + p / 100 : 1 - p / 100);
    if (!up && p >= 100) return F["multiplier"](r);
    return mk(res,
      ["What multiplier would you use to " + (up ? "increase" : "decrease") + " a value by " + p + "%?", "Start from 100%.", up ? "100% + " + p + "% = " + (100 + p) + "%." : "100% − " + p + "% = " + (100 - p) + "%.", "Change the percentage to a decimal.", (up ? 100 + p : 100 - p) + "% = " + E.n(res) + "."],
      ["Em dùng hệ số nhân nào để " + (up ? "tăng" : "giảm") + " một giá trị " + p + "%?", "Bắt đầu từ 100%.", up ? "100% + " + p + "% = " + (100 + p) + "%." : "100% − " + p + "% = " + (100 - p) + "%.", "Đổi phần trăm thành số thập phân.", (up ? 100 + p : 100 - p) + "% = " + V.n(res) + "."], TOL, "");
  };

  F["mult-to-pct"] = function (r) {
    const p = int(r, 1, 95), up = r() < 0.4, m = clean(up ? 1 + p / 100 : 1 - p / 100);
    return mk(p,
      ["A value is multiplied by " + E.n(m) + ". What is the percentage " + (up ? "increase" : "decrease") + "?", "Change the multiplier to a percentage: " + E.n(m) + " = " + Math.round(m * 100) + "%.", "Compare with 100%.", up ? "It is more than 100%, so it is an increase." : "It is less than 100%, so it is a decrease.", (up ? Math.round(m * 100) + "% − 100%" : "100% − " + Math.round(m * 100) + "%") + " = " + p + "%."],
      ["Một giá trị được nhân với " + V.n(m) + ". Phần trăm " + (up ? "tăng" : "giảm") + " là bao nhiêu?", "Đổi hệ số nhân ra phần trăm: " + V.n(m) + " = " + Math.round(m * 100) + "%.", "So sánh với 100%.", up ? "Lớn hơn 100% nên đó là tăng." : "Nhỏ hơn 100% nên đó là giảm.", (up ? Math.round(m * 100) + "% − 100%" : "100% − " + Math.round(m * 100) + "%") + " = " + p + "%."], 0, "%");
  };

  F["pct-overall"] = function (r) {
    const a = int(r, 1, 8) * 5, b = int(r, 1, 8) * 5, ma = clean(1 - a / 100), mb = clean(1 - b / 100), m = clean(ma * mb), res = clean(100 - m * 100);
    return mk(res,
      ["A price is reduced by " + a + "%, then the new price is reduced by " + b + "%. What is the overall percentage decrease?", "Use multipliers: " + E.n(ma) + " and " + E.n(mb) + ".", "Overall multiplier: " + E.n(ma) + " × " + E.n(mb) + " = " + E.n(m) + ".", "It is not " + a + "% + " + b + "% = " + (a + b) + "%: the second cut is on a smaller price.", E.n(m) + " = " + E.n(clean(m * 100)) + "%, so the decrease is 100% − " + E.n(clean(m * 100)) + "% = " + E.n(res) + "%."],
      ["Một giá được giảm " + a + "%, sau đó giá mới lại giảm " + b + "%. Tổng cộng giá giảm bao nhiêu phần trăm?", "Dùng hệ số nhân: " + V.n(ma) + " và " + V.n(mb) + ".", "Hệ số nhân chung: " + V.n(ma) + " × " + V.n(mb) + " = " + V.n(m) + ".", "Không phải " + a + "% + " + b + "% = " + (a + b) + "%: lần giảm thứ hai tính trên giá đã nhỏ hơn.", V.n(m) + " = " + V.n(clean(m * 100)) + "%, nên giảm 100% − " + V.n(clean(m * 100)) + "% = " + V.n(res) + "%."], TOL, "%");
  };
})();
