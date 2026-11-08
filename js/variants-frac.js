// 🎲 Variant families: fractions and mixed numbers (Math 7 unit 7). Answers are strings such as "3/8" or
// "1 1/10"; the checker accepts any equal value, so an unsimplified but correct answer is still right.
(function () {
  const F = MQ.variants.families, U = MQ.variants.lib, mk = U.mk, int = U.int, pick = U.pick, gcd = U.gcd, lcm = U.lcm;
  const fs = U.fracStr, ms = U.mixedStr, show = U.show;
  // a proper fraction a/b in lowest terms, b between lo and hi
  const proper = function (r, lo, hi) { let a = 0, b = 1; while (!a || gcd(a, b) !== 1) { b = int(r, lo, hi); a = int(r, 1, b - 1); } return [a, b]; };
  const mixedOf = function (w, a, b) { return w + " " + a + "/" + b; };
  // " = 1 1/14" only when it adds something ("25/36 = 25/36" would not)
  const then = function (written, res) { return written === String(show(res)) ? "" : " = " + show(res); };

  F["equiv-frac"] = function (r) {
    const f = proper(r, 3, 9), k = int(r, 2, 8), D = f[1] * k, res = f[0] * k;
    return mk(res,
      ["Find the missing number: " + f[0] + "/" + f[1] + " = ?/" + D, "What do you multiply " + f[1] + " by to get " + D + "?", f[1] + " × " + k + " = " + D + ".", "Do the same to the numerator.", f[0] + "/" + f[1] + " = (" + f[0] + " × " + k + ")/(" + f[1] + " × " + k + ") = " + res + "/" + D + "."],
      ["Tìm số còn thiếu: " + f[0] + "/" + f[1] + " = ?/" + D, "Nhân " + f[1] + " với mấy thì được " + D + "?", f[1] + " × " + k + " = " + D + ".", "Làm tương tự với tử số.", f[0] + "/" + f[1] + " = (" + f[0] + " × " + k + ")/(" + f[1] + " × " + k + ") = " + res + "/" + D + "."]);
  };

  F["to-mixed"] = function (r) {
    const b = int(r, 2, 9), w = int(r, 1, 9), a = int(r, 1, b - 1), top = w * b + a, res = ms(top, b);
    return mk(res,
      ["Write " + top + "/" + b + " as a mixed number.", "How many whole times does " + b + " go into " + top + "?", top + " ÷ " + b + " = " + w + " remainder " + a + ".", "The remainder is the new numerator.", top + " ÷ " + b + " = " + w + " r " + a + ", so " + top + "/" + b + " = " + show(res) + "."],
      ["Viết " + top + "/" + b + " dưới dạng hỗn số.", top + " chia " + b + " được bao nhiêu lần tròn?", top + " : " + b + " = " + w + " dư " + a + ".", "Số dư là tử số mới.", top + " : " + b + " = " + w + " dư " + a + ", nên " + top + "/" + b + " = " + show(res) + "."]);
  };

  // a/b op c/d with explanation through the common denominator
  function addSub(r, op, mixed) {
    const f1 = proper(r, 2, 9), f2 = proper(r, 2, 9);
    if (f1[1] === f2[1] && !mixed) return addSub(r, op, mixed);
    const w1 = mixed ? int(r, 2, 8) : 0, w2 = mixed ? int(r, 1, w1 - 1 || 1) : 0;
    const L = lcm(f1[1], f2[1]), n1 = (w1 * f1[1] + f1[0]) * (L / f1[1]), n2 = (w2 * f2[1] + f2[0]) * (L / f2[1]);
    const top = op === "+" ? n1 + n2 : n1 - n2;
    if (top <= 0) return addSub(r, op, mixed);
    const res = ms(top, L), A = mixed ? mixedOf(w1, f1[0], f1[1]) : f1[0] + "/" + f1[1], B = mixed ? mixedOf(w2, f2[0], f2[1]) : f2[0] + "/" + f2[1];
    const expr = A + " " + op + " " + B, askEn = mixed || top > L ? " Give your answer as a mixed number." : "", askVi = mixed || top > L ? " Viết đáp số dưới dạng hỗn số." : "";
    const step = n1 + "/" + L + " " + op + " " + n2 + "/" + L;
    return mk(res,
      ["Work out " + expr + "." + askEn, mixed ? "Change both mixed numbers to improper fractions." : "Find a common denominator: the LCM of " + f1[1] + " and " + f2[1] + ".", "Use denominator " + L + ": " + step + ".", op === "+" ? "Add the numerators, then simplify." : "Subtract the numerators, then simplify.", expr + " = " + step + " = " + top + "/" + L + then(top + "/" + L, res) + "."],
      ["Tính " + expr + "." + askVi, mixed ? "Đổi cả hai hỗn số thành phân số." : "Tìm mẫu số chung: BCNN của " + f1[1] + " và " + f2[1] + ".", "Dùng mẫu số " + L + ": " + step + ".", op === "+" ? "Cộng các tử số rồi rút gọn." : "Trừ các tử số rồi rút gọn.", expr + " = " + step + " = " + top + "/" + L + then(top + "/" + L, res) + "."]);
  }
  F["frac-add"] = function (r) { return addSub(r, "+", false); };
  F["mixed-add"] = function (r) { return addSub(r, "+", true); };
  F["mixed-sub"] = function (r) { return addSub(r, "−", true); };

  F["frac-mul"] = function (r) {
    const f1 = proper(r, 2, 9), f2 = proper(r, 2, 9), top = f1[0] * f2[0], bot = f1[1] * f2[1], res = fs(top, bot);
    const expr = f1[0] + "/" + f1[1] + " × " + f2[0] + "/" + f2[1];
    return mk(res,
      ["Work out " + expr + ".", "Multiply the numerators together.", "Multiply the denominators together.", "Simplify (you can cancel common factors first).", expr + " = " + top + "/" + bot + then(top + "/" + bot, res) + "."],
      ["Tính " + expr + ".", "Nhân các tử số với nhau.", "Nhân các mẫu số với nhau.", "Rút gọn (có thể rút gọn chéo trước).", expr + " = " + top + "/" + bot + then(top + "/" + bot, res) + "."]);
  };

  F["frac-square"] = function (r) {
    const f = proper(r, 2, 9), res = fs(f[0] * f[0], f[1] * f[1]), e = "(" + f[0] + "/" + f[1] + ")²";
    return mk(res,
      ["Work out " + e + ".", e + " means " + f[0] + "/" + f[1] + " × " + f[0] + "/" + f[1] + ".", "Square the numerator and square the denominator.", f[0] + "² = " + (f[0] * f[0]) + " and " + f[1] + "² = " + (f[1] * f[1]) + ".", e + " = " + (f[0] * f[0]) + "/" + (f[1] * f[1]) + "."],
      ["Tính " + e + ".", e + " nghĩa là " + f[0] + "/" + f[1] + " × " + f[0] + "/" + f[1] + ".", "Bình phương tử số và bình phương mẫu số.", f[0] + "² = " + (f[0] * f[0]) + " và " + f[1] + "² = " + (f[1] * f[1]) + ".", e + " = " + (f[0] * f[0]) + "/" + (f[1] * f[1]) + "."]);
  };

  F["frac-div"] = function (r) {
    const f1 = proper(r, 2, 9), f2 = proper(r, 2, 10), top = f1[0] * f2[1], bot = f1[1] * f2[0], res = ms(top, bot);
    const expr = f1[0] + "/" + f1[1] + " ÷ " + f2[0] + "/" + f2[1], flip = f1[0] + "/" + f1[1] + " × " + f2[1] + "/" + f2[0];
    const askEn = top > bot && top % bot ? " Give your answer as a mixed number." : "", askVi = askEn ? " Viết đáp số dưới dạng hỗn số." : "";
    return mk(res,
      ["Work out " + expr + "." + askEn, "Dividing by a fraction is the same as multiplying by its reciprocal.", "The reciprocal of " + f2[0] + "/" + f2[1] + " is " + f2[1] + "/" + f2[0] + ".", "Work out " + flip + " and simplify.", expr + " = " + flip + " = " + top + "/" + bot + then(top + "/" + bot, res) + "."],
      ["Tính " + expr + "." + askVi, "Chia cho một phân số là nhân với phân số nghịch đảo của nó.", "Phân số nghịch đảo của " + f2[0] + "/" + f2[1] + " là " + f2[1] + "/" + f2[0] + ".", "Tính " + flip + " rồi rút gọn.", expr + " = " + flip + " = " + top + "/" + bot + then(top + "/" + bot, res) + "."]);
  };

  F["frac-of"] = function (r) {
    const f = proper(r, 2, 20), N = f[1] * int(r, 2, 60) * pick(r, [1, 5, 10]), part = N / f[1], res = part * f[0];
    return mk(res,
      ["Work out " + f[0] + "/" + f[1] + " × " + U.n(N) + ".", "First find 1/" + f[1] + " of " + U.n(N) + ".", U.n(N) + " ÷ " + f[1] + " = " + U.n(part) + ".", "Then multiply by " + f[0] + ".", U.n(N) + " ÷ " + f[1] + " × " + f[0] + " = " + U.n(part) + " × " + f[0] + " = " + U.n(res) + "."],
      ["Tính " + f[0] + "/" + f[1] + " × " + U.L.vi.n(N) + ".", "Trước hết tìm 1/" + f[1] + " của " + U.L.vi.n(N) + ".", U.L.vi.n(N) + " : " + f[1] + " = " + U.L.vi.n(part) + ".", "Rồi nhân với " + f[0] + ".", U.L.vi.n(N) + " : " + f[1] + " × " + f[0] + " = " + U.L.vi.n(part) + " × " + f[0] + " = " + U.L.vi.n(res) + "."]);
  };
})();
