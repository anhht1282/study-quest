// 🎲 Variant families: powers of 10, rounding, decimals, percentages (Math 7 units 3, 4 and 10).
// Decimals are built from whole numbers (m / 10^dp) so no floating-point noise reaches the learner.
(function () {
  const F = MQ.variants.families, U = MQ.variants.lib, mk = U.mk, int = U.int, pick = U.pick, clean = U.clean;
  const E = U.L.en, V = U.L.vi;
  const TOL = 1e-6;
  const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const sup = function (k) { return String(k).split("").map(function (d) { return SUP[Number(d)]; }).join(""); };
  const pow = function (k) { return Math.pow(10, k); };
  // a decimal with exactly dp decimal places (last digit not 0) between lo and hi
  const dec = function (r, lo, hi, dp) { let m = 0; while (m % 10 === 0) m = int(r, lo * pow(dp), hi * pow(dp)); return m / pow(dp); };
  // round num/den (both whole, den > 0) half up — exact, no floats
  const roundDiv = function (num, den) { return Math.floor((2 * num + den) / (2 * den)); };
  const dpWord = function (k) { return k === 1 ? ["1 decimal place", "1 chữ số thập phân"] : [k + " decimal places", k + " chữ số thập phân"]; };

  // ---- powers of 10 (3.1) ----
  F["pow10"] = function (r) {
    const k = int(r, 3, 9), big = pow(k);
    if (r() < 0.5) {
      return mk(big,
        ["Write 10" + sup(k) + " as an ordinary number.", "10" + sup(k) + " means " + k + " tens multiplied together.", "Each 10 adds one zero after the 1.", "Write 1 followed by " + k + " zeros.", "10" + sup(k) + " = " + E.n(big) + " (1 followed by " + k + " zeros)."],
        ["Viết 10" + sup(k) + " dưới dạng số thông thường.", "10" + sup(k) + " là tích của " + k + " thừa số 10.", "Mỗi thừa số 10 thêm một chữ số 0 sau số 1.", "Viết số 1 rồi " + k + " chữ số 0.", "10" + sup(k) + " = " + V.n(big) + " (số 1 và " + k + " chữ số 0)."]);
    }
    return mk(k,
      [E.n(big) + " = 10ⁿ. What is n?", "Count the zeros after the 1.", "Each zero is one more factor of 10.", "n is the number of zeros.", E.n(big) + " has " + k + " zeros, so it is 10" + sup(k) + " and n = " + k + "."],
      [V.n(big) + " = 10ⁿ. Tìm n.", "Đếm số chữ số 0 sau số 1.", "Mỗi chữ số 0 là thêm một thừa số 10.", "n bằng số chữ số 0.", V.n(big) + " có " + k + " chữ số 0, nên bằng 10" + sup(k) + " và n = " + k + "."]);
  };

  F["mul-pow10"] = function (r) {
    const dp = int(r, 0, 2), a = dp ? dec(r, 0, 9, dp) : int(r, 12, 99), k = int(r, Math.max(2, dp), 6), res = clean(a * pow(k));
    return mk(res,
      ["Work out " + E.n(a) + " × 10" + sup(k) + ".", "10" + sup(k) + " = " + E.n(pow(k)) + ".", "Multiplying by 10" + sup(k) + " moves every digit " + k + " places to the left.", "Fill empty places with zeros.", E.n(a) + " × " + E.n(pow(k)) + " = " + E.n(res) + "."],
      ["Tính " + V.n(a) + " × 10" + sup(k) + ".", "10" + sup(k) + " = " + V.n(pow(k)) + ".", "Nhân với 10" + sup(k) + " thì mọi chữ số dịch sang trái " + k + " hàng.", "Điền chữ số 0 vào các hàng trống.", V.n(a) + " × " + V.n(pow(k)) + " = " + V.n(res) + "."], TOL);
  };

  F["div-pow10"] = function (r) {
    const k = int(r, 2, 6), lead = int(r, 12, 999), zeros = int(r, Math.max(0, k - 2), k + 1), big = lead * pow(zeros), res = clean(big / pow(k));
    return mk(res,
      ["Work out " + E.n(big) + " ÷ 10" + sup(k) + ".", "10" + sup(k) + " = " + E.n(pow(k)) + ".", "Dividing by 10" + sup(k) + " moves every digit " + k + " places to the right.", "Do not just cross off zeros — check where the decimal point goes.", E.n(big) + " ÷ " + E.n(pow(k)) + " = " + E.n(res) + "."],
      ["Tính " + V.n(big) + " ÷ 10" + sup(k) + ".", "10" + sup(k) + " = " + V.n(pow(k)) + ".", "Chia cho 10" + sup(k) + " thì mọi chữ số dịch sang phải " + k + " hàng.", "Đừng chỉ gạch bớt số 0 — xem dấu phẩy thập phân đặt ở đâu.", V.n(big) + " ÷ " + V.n(pow(k)) + " = " + V.n(res) + "."], TOL);
  };

  // ---- rounding (3.2) ----
  F["round-dp"] = function (r) {
    const k = int(r, 1, 3), dp = k + int(r, 1, 3), m = int(r, 1, 999) * pow(dp) + int(r, 1, pow(dp) - 1);
    const value = m / pow(dp), den = pow(dp - k), res = roundDiv(m, den) / pow(k);
    const next = Math.floor(m / pow(dp - k - 1)) % 10, w = dpWord(k);
    return mk(res,
      ["Round " + E.n(value) + " to " + w[0] + ".", "Find decimal place " + k + ", then look at the next digit.", "The next digit is " + next + ".", next >= 5 ? "It is 5 or more, so round up." : "It is less than 5, so keep the digit as it is.", "The digit after place " + k + " is " + next + ", so " + E.n(value) + " ≈ " + E.n(res) + "."],
      ["Làm tròn " + V.n(value) + " đến " + w[1] + ".", "Tìm chữ số thập phân thứ " + k + ", rồi nhìn chữ số ngay sau nó.", "Chữ số ngay sau là " + next + ".", next >= 5 ? "Nó lớn hơn hoặc bằng 5 nên làm tròn lên." : "Nó nhỏ hơn 5 nên giữ nguyên.", "Chữ số sau hàng thứ " + k + " là " + next + ", nên " + V.n(value) + " ≈ " + V.n(res) + "."], TOL);
  };

  // ---- decimal arithmetic (4.2–4.5) ----
  F["dec-addsub"] = function (r) {
    const op = pick(r, ["+", "−"]), a = dec(r, 2, 40, int(r, 1, 2)), b = dec(r, 1, 20, int(r, 1, 3));
    const big = op === "−" ? Math.max(a, b) : a, small = op === "−" ? Math.min(a, b) : b;
    if (op === "−" && big === small) return F["dec-addsub"](r);
    const res = clean(op === "+" ? big + small : big - small), expr = E.n(big) + " " + op + " " + E.n(small), exprV = V.n(big) + " " + op + " " + V.n(small);
    return mk(res,
      ["Work out " + expr + ".", "Line up the decimal points.", "Fill the gaps with zeros so both numbers have the same number of decimal places.", op === "+" ? "Add from the right, carrying when needed." : "Subtract from the right, exchanging when needed.", expr + " = " + E.n(res) + "."],
      ["Tính " + exprV + ".", "Đặt các dấu phẩy thẳng cột.", "Thêm chữ số 0 để hai số có cùng số chữ số thập phân.", op === "+" ? "Cộng từ phải sang trái, nhớ khi cần." : "Trừ từ phải sang trái, mượn khi cần.", exprV + " = " + V.n(res) + "."], TOL);
  };

  F["dec-from-whole"] = function (r) {
    const whole = pick(r, [1, 10, 100]), b = whole === 1 ? dec(r, 0, 0.99, 3) : dec(r, 1, whole - 1, 2), res = clean(whole - b);
    return mk(res,
      ["Work out " + whole + " − " + E.n(b) + ".", "Write " + whole + " with decimal places: " + E.n(whole) + (whole === 1 ? ".000" : ".00") + ".", "Line up the decimal points.", "Subtract, exchanging across the zeros.", whole + " − " + E.n(b) + " = " + E.n(res) + ". Check: " + E.n(res) + " + " + E.n(b) + " = " + whole + "."],
      ["Tính " + whole + " − " + V.n(b) + ".", "Viết " + whole + " có phần thập phân: " + whole + (whole === 1 ? ",000" : ",00") + ".", "Đặt các dấu phẩy thẳng cột.", "Trừ, mượn qua các chữ số 0.", whole + " − " + V.n(b) + " = " + V.n(res) + ". Thử lại: " + V.n(res) + " + " + V.n(b) + " = " + whole + "."], TOL);
  };

  F["dec-missing"] = function (r) {
    const b = dec(r, 1, 5, 2), res = dec(r, 2, 15, int(r, 1, 2)), s = clean(res + b);
    return mk(res,
      ["Find a if a + " + E.n(b) + " = " + E.n(s) + ".", "Undo adding " + E.n(b) + ".", "a = " + E.n(s) + " − " + E.n(b) + ".", "Line up the decimal points and subtract.", "a = " + E.n(s) + " − " + E.n(b) + " = " + E.n(res) + "."],
      ["Tìm a biết a + " + V.n(b) + " = " + V.n(s) + ".", "Làm ngược phép cộng " + V.n(b) + ".", "a = " + V.n(s) + " − " + V.n(b) + ".", "Đặt dấu phẩy thẳng cột rồi trừ.", "a = " + V.n(s) + " − " + V.n(b) + " = " + V.n(res) + "."], TOL);
  };

  F["dec-mul"] = function (r) {
    const dp = int(r, 1, 3), a = dec(r, 0, dp === 3 ? 0.9 : 9, dp), m = pick(r, [int(r, 2, 9), int(r, 2, 9) * 10, int(r, 11, 99)]);
    const whole = Math.round(a * pow(dp)), res = clean(whole * m / pow(dp));
    return mk(res,
      ["Work out " + E.n(m) + " × " + E.n(a) + ".", "Ignore the decimal point first: " + m + " × " + whole + ".", m + " × " + whole + " = " + (m * whole) + ".", E.n(a) + " has " + dp + " decimal place" + (dp > 1 ? "s" : "") + ", so the answer has " + dp + " too.", m + " × " + whole + " = " + (m * whole) + ", so " + E.n(m) + " × " + E.n(a) + " = " + E.n(res) + "."],
      ["Tính " + V.n(m) + " × " + V.n(a) + ".", "Tạm bỏ dấu phẩy: " + m + " × " + whole + ".", m + " × " + whole + " = " + (m * whole) + ".", V.n(a) + " có " + dp + " chữ số thập phân, nên kết quả cũng có " + dp + " chữ số thập phân.", m + " × " + whole + " = " + (m * whole) + ", nên " + V.n(m) + " × " + V.n(a) + " = " + V.n(res) + "."], TOL);
  };

  F["dec-div"] = function (r) {
    const d = int(r, 2, 9), dp = int(r, 1, 3), q = dec(r, 0, dp === 3 ? 3 : 15, dp), a = clean(q * d);
    return mk(q,
      ["Work out " + E.n(a) + " ÷ " + d + ".", "Use short division and keep the decimal point in line.", "Divide each digit by " + d + ", carrying remainders.", "Check: multiply your answer by " + d + ".", E.n(a) + " ÷ " + d + " = " + E.n(q) + ". Check: " + E.n(q) + " × " + d + " = " + E.n(a) + "."],
      ["Tính " + V.n(a) + " ÷ " + d + ".", "Đặt tính chia, giữ dấu phẩy thẳng hàng.", "Chia từng chữ số cho " + d + ", mang số dư sang hàng sau.", "Thử lại: nhân kết quả với " + d + ".", V.n(a) + " ÷ " + d + " = " + V.n(q) + ". Thử lại: " + V.n(q) + " × " + d + " = " + V.n(a) + "."], TOL);
  };

  F["dec-div-round"] = function (r) {
    const d = pick(r, [3, 6, 7, 9, 11, 13]), k = int(r, 1, 3), a100 = int(r, 101, 1999), a = a100 / 100;
    if (a100 % d === 0) return F["dec-div-round"](r);
    const res = roundDiv(a100 * pow(k), 100 * d) / pow(k), w = dpWord(k);
    return mk(res,
      ["Work out " + E.n(a) + " ÷ " + d + " to " + w[0] + ".", "Divide to one more decimal place than you need.", "Look at the extra digit to decide whether to round up.", "Write the answer with exactly " + k + " decimal place" + (k > 1 ? "s" : "") + ".", E.n(a) + " ÷ " + d + " = " + E.n(Math.floor(a100 * pow(k + 1) / (100 * d)) / pow(k + 1)) + "… ≈ " + E.n(res) + "."],
      ["Tính " + V.n(a) + " ÷ " + d + ", làm tròn đến " + w[1] + ".", "Chia đến nhiều hơn một chữ số thập phân so với yêu cầu.", "Nhìn chữ số thêm đó để quyết định có làm tròn lên không.", "Viết đáp số với đúng " + k + " chữ số thập phân.", V.n(a) + " ÷ " + d + " = " + V.n(Math.floor(a100 * pow(k + 1) / (100 * d)) / pow(k + 1)) + "… ≈ " + V.n(res) + "."], TOL);
  };

  F["times-near"] = function (r, o) {
    const nine = (o && o.n) || pick(r, [9, 99]), base = nine + 1, a = dec(r, 1, 15, 1), res = clean(a * nine), big = clean(a * base);
    return mk(res,
      ["Work out " + E.n(a) + " × " + nine + " by using " + E.n(a) + " × " + base + " − " + E.n(a) + ".", nine + " = " + base + " − 1.", E.n(a) + " × " + base + " = " + E.n(big) + ".", "Now subtract one lot of " + E.n(a) + ".", E.n(a) + " × " + nine + " = " + E.n(big) + " − " + E.n(a) + " = " + E.n(res) + "."],
      ["Tính " + V.n(a) + " × " + nine + " bằng cách dùng " + V.n(a) + " × " + base + " − " + V.n(a) + ".", nine + " = " + base + " − 1.", V.n(a) + " × " + base + " = " + V.n(big) + ".", "Rồi trừ đi một lần " + V.n(a) + ".", V.n(a) + " × " + nine + " = " + V.n(big) + " − " + V.n(a) + " = " + V.n(res) + "."], TOL);
  };

  F["round-compensate"] = function (r) {
    const a = dec(r, 2, 15, 1), w = int(r, 2, 8), b = clean(w + 0.9), up = w + 1, res = clean(a + b);
    return mk(res,
      ["Work out " + E.n(a) + " + " + E.n(b) + " by adding " + up + " and adjusting.", E.n(b) + " is 0.1 less than " + up + ".", E.n(a) + " + " + up + " = " + E.n(clean(a + up)) + ".", "You added 0.1 too much, so take it away.", E.n(a) + " + " + up + " − 0.1 = " + E.n(clean(a + up)) + " − 0.1 = " + E.n(res) + "."],
      ["Tính " + V.n(a) + " + " + V.n(b) + " bằng cách cộng " + up + " rồi điều chỉnh.", V.n(b) + " kém " + up + " là 0,1.", V.n(a) + " + " + up + " = " + V.n(clean(a + up)) + ".", "Em đã cộng thừa 0,1 nên trừ bớt đi.", V.n(a) + " + " + up + " − 0,1 = " + V.n(clean(a + up)) + " − 0,1 = " + V.n(res) + "."], TOL);
  };

  F["known-product"] = function (r) {
    const a = int(r, 120, 899), b = int(r, 12, 79), P = a * b, k = int(r, 1, 2), ad = a / pow(k), res = clean(P / pow(k));
    return mk(res,
      ["Given " + a + " × " + b + " = " + E.n(P) + ", work out " + E.n(ad) + " × " + b + ".", "How is " + E.n(ad) + " related to " + a + "?", E.n(ad) + " = " + a + " ÷ " + pow(k) + ".", "So the answer is " + E.n(P) + " ÷ " + pow(k) + ".", E.n(ad) + " × " + b + " = " + E.n(P) + " ÷ " + pow(k) + " = " + E.n(res) + "."],
      ["Biết " + a + " × " + b + " = " + V.n(P) + ", tính " + V.n(ad) + " × " + b + ".", V.n(ad) + " liên hệ với " + a + " thế nào?", V.n(ad) + " = " + a + " ÷ " + pow(k) + ".", "Vậy kết quả là " + V.n(P) + " ÷ " + pow(k) + ".", V.n(ad) + " × " + b + " = " + V.n(P) + " ÷ " + pow(k) + " = " + V.n(res) + "."], TOL);
  };

  F["tenth-of"] = function (r) {
    const k = int(r, 1, 9), N = int(r, 12, 99) * 10, res = N * k / 10, t = N / 10;
    return mk(res,
      ["Alek spends " + E.n(k / 10) + " of $" + E.n(N) + " on stones. How many dollars is that?", E.n(k / 10) + " means " + k + " tenths.", "One tenth of " + N + " is " + t + ".", "Multiply by " + k + ".", "0.1 of " + N + " = " + t + ", so " + E.n(k / 10) + " of " + N + " = " + k + " × " + t + " = " + E.n(res) + " dollars."],
      ["Alek dùng " + V.n(k / 10) + " của $" + V.n(N) + " để mua đá. Đó là bao nhiêu đô la?", V.n(k / 10) + " nghĩa là " + k + " phần mười.", "Một phần mười của " + N + " là " + t + ".", "Nhân với " + k + ".", "0,1 của " + N + " = " + t + ", nên " + V.n(k / 10) + " của " + N + " = " + k + " × " + t + " = " + V.n(res) + " đô la."]);
  };

  // ---- percentages (10.1–10.2) ----
  F["pct-to-dec"] = function (r) {
    const p = pick(r, [int(r, 1, 99), int(r, 1, 99) + 0.5, pick(r, [0.5, 0.2, 0.8])]), res = clean(p / 100);
    return mk(res,
      ["Write " + E.n(p) + "% as a decimal.", "Per cent means 'out of 100'.", "Divide " + E.n(p) + " by 100.", "Dividing by 100 moves every digit 2 places to the right.", E.n(p) + "% = " + E.n(p) + " ÷ 100 = " + E.n(res) + "."],
      ["Viết " + V.n(p) + "% dưới dạng số thập phân.", "Phần trăm nghĩa là 'trên 100'.", "Chia " + V.n(p) + " cho 100.", "Chia cho 100 thì mọi chữ số dịch sang phải 2 hàng.", V.n(p) + "% = " + V.n(p) + " ÷ 100 = " + V.n(res) + "."], TOL);
  };

  F["dec-to-pct"] = function (r) {
    const d = pick(r, [dec(r, 0, 0.09, 2), dec(r, 0.1, 0.99, 2), dec(r, 0, 0.9, 1)]), res = clean(d * 100);
    return mk(res,
      ["Write " + E.n(d) + " as a percentage (give the number only).", "A percentage is a number out of 100.", "Multiply " + E.n(d) + " by 100.", "Multiplying by 100 moves every digit 2 places to the left.", E.n(d) + " × 100 = " + E.n(res) + ", so " + E.n(d) + " = " + E.n(res) + "%."],
      ["Viết " + V.n(d) + " dưới dạng phần trăm (chỉ ghi số).", "Phần trăm là số trên 100.", "Nhân " + V.n(d) + " với 100.", "Nhân với 100 thì mọi chữ số dịch sang trái 2 hàng.", V.n(d) + " × 100 = " + V.n(res) + ", nên " + V.n(d) + " = " + V.n(res) + "%."], TOL);
  };

  F["frac-to-pct"] = function (r) {
    const de = pick(r, [2, 4, 5, 10, 20, 25, 50]), nu = int(r, 1, de - 1), k = 100 / de, res = nu * k;
    return mk(res,
      ["Write " + nu + "/" + de + " as a percentage (give the number only).", "Make an equivalent fraction with denominator 100.", "Multiply top and bottom by " + k + ".", nu + "/" + de + " = " + res + "/100.", nu + "/" + de + " = (" + nu + " × " + k + ")/100 = " + res + "/100 = " + res + "%."],
      ["Viết " + nu + "/" + de + " dưới dạng phần trăm (chỉ ghi số).", "Tạo phân số bằng nó có mẫu là 100.", "Nhân cả tử và mẫu với " + k + ".", nu + "/" + de + " = " + res + "/100.", nu + "/" + de + " = (" + nu + " × " + k + ")/100 = " + res + "/100 = " + res + "%."]);
  };

  F["pct-to-frac"] = function (r) {
    let p = 1;
    while (U.gcd(p, 100) === 1) p = int(r, 2, 98);   // a percentage that can be simplified
    const res = U.fracStr(p, 100), g = U.gcd(p, 100);
    return mk(res,
      ["Write " + p + "% as a fraction in its simplest form.", p + "% = " + p + "/100.", "Find the HCF of " + p + " and 100.", "Divide top and bottom by " + g + ".", p + "% = " + p + "/100 = " + res + " (dividing by " + g + ")."],
      ["Viết " + p + "% dưới dạng phân số tối giản.", p + "% = " + p + "/100.", "Tìm ƯCLN của " + p + " và 100.", "Chia cả tử và mẫu cho " + g + ".", p + "% = " + p + "/100 = " + res + " (chia cho " + g + ")."]);
  };

  F["pct-of"] = function (r) {
    const p = pick(r, [5, 10, 15, 20, 25, 30, 35, 40, 45, 60, 75, 0.5]), N = p === 0.5 ? int(r, 2, 9) * 100 : int(r, 2, 40) * 20, res = clean(N * p / 100);
    return mk(res,
      ["What is " + E.n(p) + "% of " + E.n(N) + "?", E.n(p) + "% = " + E.n(p) + "/100.", "Find 1% first: " + E.n(N) + " ÷ 100 = " + E.n(N / 100) + ".", "Then multiply by " + E.n(p) + ".", E.n(p) + "% of " + E.n(N) + " = " + E.n(N / 100) + " × " + E.n(p) + " = " + E.n(res) + "."],
      [V.n(p) + "% của " + V.n(N) + " là bao nhiêu?", V.n(p) + "% = " + V.n(p) + "/100.", "Tìm 1% trước: " + V.n(N) + " ÷ 100 = " + V.n(N / 100) + ".", "Rồi nhân với " + V.n(p) + ".", V.n(p) + "% của " + V.n(N) + " = " + V.n(N / 100) + " × " + V.n(p) + " = " + V.n(res) + "."], TOL, "");
  };

  F["pct-share"] = function (r) {
    const total = pick(r, [20, 25, 40, 50, 80, 200]), give = int(r, 1, total - 1), res = clean(give / total * 100);
    if (res !== Math.round(res)) return F["pct-share"](r);
    return mk(res,
      ["Arun has $" + total + ". He gives $" + give + " to Sofia. What percentage of his money does Sofia get?", "Write it as a fraction: " + give + "/" + total + ".", "Make the denominator 100.", "Multiply top and bottom by " + (100 / total) + ".", give + "/" + total + " = " + res + "/100 = " + res + "%."],
      ["Arun có $" + total + ". Bạn ấy cho Sofia $" + give + ". Sofia nhận được bao nhiêu phần trăm số tiền của Arun?", "Viết thành phân số: " + give + "/" + total + ".", "Đưa mẫu số về 100.", "Nhân cả tử và mẫu với " + V.n(100 / total) + ".", give + "/" + total + " = " + res + "/100 = " + res + "%."]);
  };

  F["pct-whole"] = function (r) {
    const p = pick(r, [5, 10, 20, 25, 50]), whole = int(r, 4, 60) * 4, part = clean(whole * p / 100);
    return mk(whole,
      [p + "% of a sum of money is $" + E.n(part) + ". What is the whole sum?", p + "% goes into 100% exactly " + (100 / p) + " times.", "So multiply $" + E.n(part) + " by " + (100 / p) + ".", "Check: " + p + "% of your answer should be $" + E.n(part) + ".", "100% = " + E.n(part) + " × " + (100 / p) + " = $" + E.n(whole) + "."],
      [p + "% của một số tiền là $" + V.n(part) + ". Cả số tiền là bao nhiêu?", p + "% nằm trong 100% đúng " + (100 / p) + " lần.", "Vậy nhân $" + V.n(part) + " với " + (100 / p) + ".", "Thử lại: " + p + "% của đáp số phải bằng $" + V.n(part) + ".", "100% = " + V.n(part) + " × " + (100 / p) + " = $" + V.n(whole) + "."], TOL, "$");
  };

  F["pct-ratio"] = function (r) {
    const old = pick(r, [20, 25, 40, 50]), res = pick(r, [120, 150, 175, 200, 250, 300]), nw = old * res / 100;
    if (nw !== Math.round(nw)) return F["pct-ratio"](r);
    return mk(res,
      ["A price rises from $" + old + " to $" + nw + ". The new price is what percentage of the old price?", "Compare new with old: " + nw + "/" + old + ".", "Turn the fraction into a percentage by multiplying by 100.", "The answer can be more than 100%.", nw + " ÷ " + old + " × 100 = " + res + "%."],
      ["Giá tăng từ $" + old + " lên $" + nw + ". Giá mới bằng bao nhiêu phần trăm giá cũ?", "So sánh giá mới với giá cũ: " + nw + "/" + old + ".", "Đổi phân số sang phần trăm bằng cách nhân với 100.", "Đáp số có thể lớn hơn 100%.", nw + " ÷ " + old + " × 100 = " + res + "%."]);
  };
})();
