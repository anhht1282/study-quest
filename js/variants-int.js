// 🎲 Variant families: integers, multiples and factors, divisibility, powers and roots (Math 7 unit 1).
// Each family: (r, opts) → { answer, en: { q, hints[3], explain }, vi: { … } }. See js/variants.js.
(function () {
  const F = MQ.variants.families, U = MQ.variants.lib;
  const int = U.int, pick = U.pick, nz = U.nz, gcd = U.gcd, lcm = U.lcm, round10 = U.round10;
  const n = function (x) { return String(x).replace("-", "−"); };             // −5 with a real minus sign
  const p = function (x) { return x < 0 ? "(" + n(x) + ")" : n(x); };        // (−5) after an operator
  const factors = function (m) { const f = []; for (let i = 1; i <= m; i++) if (m % i === 0) f.push(i); return f; };
  const multiples = function (m, k) { const out = []; for (let i = 1; i <= k; i++) out.push(m * i); return out.join(", "); };
  const two = function (en, vi) { return { en: en, vi: vi }; };


  F["int-addsub"] = function (r) {
    const a = nz(r, -12, 12), b = nz(r, -12, 12), op = pick(r, ["+", "−"]);
    const bb = op === "+" ? b : -b, res = a + bb, expr = n(a) + " " + op + " " + p(b);
    const left = bb < 0, steps = Math.abs(bb);
    const dirVi = left ? "sang trái" : "sang phải", dirEn = left ? "left" : "right";
    const rewriteVi = op === "−" ? "Trừ một số = cộng số đối của nó: " + expr + " = " + n(a) + " + " + p(bb) + "." : "Cộng " + p(b) + " nghĩa là đi " + dirVi + " " + steps + " bước.";
    const rewriteEn = op === "−" ? "Subtracting a number = adding its inverse: " + expr + " = " + n(a) + " + " + p(bb) + "." : "Adding " + p(b) + " means moving " + steps + " steps to the " + dirEn + ".";
    return {
      answer: res,
      en: { q: "Work out " + expr + ".", hints: [op === "−" ? "What is the inverse of " + n(b) + "?" : "Adding a " + (b < 0 ? "negative" : "positive") + " number: move left or right?", rewriteEn, "Start at " + n(a) + " on the number line and move " + steps + " steps to the " + dirEn + "."],
        explain: (op === "−" ? expr + " = " + n(a) + " + " + p(bb) + ". " : "") + "From " + n(a) + " move " + steps + " steps " + dirEn + ": " + expr + " = " + n(res) + "." },
      vi: { q: "Tính " + expr + ".", hints: [op === "−" ? "Số đối của " + n(b) + " là số nào?" : "Cộng một số " + (b < 0 ? "âm" : "dương") + " thì đi sang trái hay sang phải?", rewriteVi, "Đứng ở " + n(a) + " trên trục số, đi " + dirVi + " " + steps + " bước thì tới số nào?"],
        explain: (op === "−" ? expr + " = " + n(a) + " + " + p(bb) + ". " : "") + "Từ " + n(a) + " đi " + dirVi + " " + steps + " bước: " + expr + " = " + n(res) + "." }
    };
  };

  F["int-add3"] = function (r) {
    const a = nz(r, -9, 9), b = nz(r, -9, -1), c = nz(r, -9, 9), ab = a + b, res = ab + c;
    const expr = n(a) + " + " + p(b) + " + " + p(c);
    return {
      answer: res,
      en: { q: "Work out " + expr + ".", hints: ["Add from left to right.", "First work out " + n(a) + " + " + p(b) + ".", "Now add " + p(c) + " to that result."],
        explain: n(a) + " + " + p(b) + " = " + n(ab) + ", then " + n(ab) + " + " + p(c) + " = " + n(res) + "." },
      vi: { q: "Tính " + expr + ".", hints: ["Cộng lần lượt từ trái sang phải.", "Trước hết tính " + n(a) + " + " + p(b) + ".", "Lấy kết quả đó cộng tiếp " + p(c) + "."],
        explain: n(a) + " + " + p(b) + " = " + n(ab) + ", rồi " + n(ab) + " + " + p(c) + " = " + n(res) + "." }
    };
  };

  F["int-other"] = function (r) {
    const s = nz(r, -15, -1), a = int(r, 2, 12), res = s - a;
    return {
      answer: res,
      en: { q: "Two integers add up to " + n(s) + ". One of the integers is " + a + ". Work out the other integer.", hints: [a + " + ? = " + n(s) + ". How do you undo adding " + a + "?", "The other integer = " + n(s) + " − " + a + ".", "Check your answer by adding it to " + a + "."],
        explain: "? = " + n(s) + " − " + a + " = " + n(res) + ". Check: " + a + " + " + p(res) + " = " + n(s) + "." },
      vi: { q: "Hai số nguyên có tổng bằng " + n(s) + ". Một số là " + a + ". Tìm số còn lại.", hints: [a + " + ? = " + n(s) + ". Muốn tìm số hạng chưa biết, em làm phép gì?", "Số còn lại = " + n(s) + " − " + a + ".", "Thử lại: cộng kết quả với " + a + " có ra " + n(s) + " không?"],
        explain: "? = " + n(s) + " − " + a + " = " + n(res) + ". Thử lại: " + a + " + " + p(res) + " = " + n(s) + "." }
    };
  };

  // two-digit numbers that do not end in 5, so "nearest 10" is never ambiguous
  const twoDigit = function (r) { let x = 5; while (x % 10 === 5 || x % 10 === 0) x = int(r, 11, 98); return x; };

  F["estimate-add"] = function (r) {
    const a = -twoDigit(r), b = twoDigit(r), ra = round10(a), rb = round10(b), res = ra + rb;
    const expr = n(a) + " + " + b;
    return {
      answer: res,
      en: { q: "Estimate " + expr + " by rounding each number to the nearest 10.", hints: ["Round " + n(a) + " to the nearest 10.", "Round " + b + " to the nearest 10.", "Add the two rounded numbers."],
        explain: n(a) + " ≈ " + n(ra) + " and " + b + " ≈ " + rb + ", so " + expr + " ≈ " + n(ra) + " + " + rb + " = " + n(res) + "." },
      vi: { q: "Ước lượng " + expr + " bằng cách làm tròn mỗi số đến hàng chục.", hints: ["Làm tròn " + n(a) + " đến hàng chục.", "Làm tròn " + b + " đến hàng chục.", "Cộng hai số đã làm tròn."],
        explain: n(a) + " ≈ " + n(ra) + " và " + b + " ≈ " + rb + ", nên " + expr + " ≈ " + n(ra) + " + " + rb + " = " + n(res) + "." }
    };
  };

  const signRule = two("Same signs give a positive answer; different signs give a negative answer.", "Hai số cùng dấu thì kết quả dương; khác dấu thì kết quả âm.");

  F["int-mul"] = function (r) {
    const a = nz(r, -12, 12), b = a > 0 ? nz(r, -12, -2) : nz(r, -12, 12), res = a * b, expr = n(a) + " × " + p(b);
    return {
      answer: res,
      en: { q: "Work out " + expr + ".", hints: ["First ignore the signs: " + Math.abs(a) + " × " + Math.abs(b) + " = ?", signRule.en, "So is the answer positive or negative?"], explain: Math.abs(a) + " × " + Math.abs(b) + " = " + Math.abs(res) + "; " + (res < 0 ? "different signs, so negative" : "same signs, so positive") + ": " + expr + " = " + n(res) + "." },
      vi: { q: "Tính " + expr + ".", hints: ["Tạm bỏ dấu: " + Math.abs(a) + " × " + Math.abs(b) + " = ?", signRule.vi, "Vậy kết quả mang dấu gì?"], explain: Math.abs(a) + " × " + Math.abs(b) + " = " + Math.abs(res) + "; " + (res < 0 ? "khác dấu nên âm" : "cùng dấu nên dương") + ": " + expr + " = " + n(res) + "." }
    };
  };

  F["int-div"] = function (r) {
    const b = nz(r, -9, 9), res = nz(r, -12, 12), a = b * res;
    if (a > 0 && b > 0) return F["int-div"](r);   // keep at least one negative
    const expr = n(a) + " ÷ " + p(b);
    return {
      answer: res,
      en: { q: "Work out " + expr + ".", hints: ["First ignore the signs: " + Math.abs(a) + " ÷ " + Math.abs(b) + " = ?", "Dividing follows the same sign rule as multiplying.", signRule.en], explain: Math.abs(a) + " ÷ " + Math.abs(b) + " = " + Math.abs(res) + "; " + (res < 0 ? "different signs, so negative" : "same signs, so positive") + ": " + expr + " = " + n(res) + "." },
      vi: { q: "Tính " + expr + ".", hints: ["Tạm bỏ dấu: " + Math.abs(a) + " ÷ " + Math.abs(b) + " = ?", "Phép chia dùng cùng quy tắc dấu như phép nhân.", signRule.vi], explain: Math.abs(a) + " ÷ " + Math.abs(b) + " = " + Math.abs(res) + "; " + (res < 0 ? "khác dấu nên âm" : "cùng dấu nên dương") + ": " + expr + " = " + n(res) + "." }
    };
  };

  F["int-missing"] = function (r) {
    const a = nz(r, -9, -2), res = nz(r, -9, 9), prod = a * res;
    return {
      answer: res,
      en: { q: "Find the missing number: " + n(a) + " × □ = " + n(prod) + ".", hints: ["□ = " + n(prod) + " ÷ " + p(a) + ".", "First ignore the signs: " + Math.abs(prod) + " ÷ " + Math.abs(a) + ".", signRule.en], explain: "□ = " + n(prod) + " ÷ " + p(a) + " = " + n(res) + ". Check: " + n(a) + " × " + p(res) + " = " + n(prod) + "." },
      vi: { q: "Tìm số còn thiếu: " + n(a) + " × □ = " + n(prod) + ".", hints: ["□ = " + n(prod) + " ÷ " + p(a) + ".", "Tạm bỏ dấu: " + Math.abs(prod) + " ÷ " + Math.abs(a) + ".", signRule.vi], explain: "□ = " + n(prod) + " ÷ " + p(a) + " = " + n(res) + ". Thử lại: " + n(a) + " × " + p(res) + " = " + n(prod) + "." }
    };
  };

  F["int-brackets"] = function (r) {
    const a = nz(r, -6, 6), b = nz(r, -9, 9), c = int(r, 1, 9), op = pick(r, ["+", "−"]);
    const inner = op === "+" ? b + c : b - c, res = a * inner, expr = n(a) + " × (" + n(b) + " " + op + " " + c + ")";
    return {
      answer: res,
      en: { q: "Work out " + expr + ".", hints: ["Work out the bracket first.", n(b) + " " + op + " " + c + " = ?", "Now multiply " + n(a) + " by that result. " + signRule.en], explain: n(b) + " " + op + " " + c + " = " + n(inner) + ", so " + expr + " = " + n(a) + " × " + p(inner) + " = " + n(res) + "." },
      vi: { q: "Tính " + expr + ".", hints: ["Tính trong ngoặc trước.", n(b) + " " + op + " " + c + " = ?", "Rồi nhân " + n(a) + " với kết quả đó. " + signRule.vi], explain: n(b) + " " + op + " " + c + " = " + n(inner) + ", nên " + expr + " = " + n(a) + " × " + p(inner) + " = " + n(res) + "." }
    };
  };

  F["estimate-mul"] = function (r) {
    const a = -twoDigit(r), b = twoDigit(r), ra = round10(a), rb = round10(b), res = ra * rb, expr = n(a) + " × " + b;
    return {
      answer: res,
      en: { q: "Estimate " + expr + " by rounding each number to the nearest 10.", hints: ["Round " + n(a) + " to the nearest 10.", "Round " + b + " to the nearest 10.", "Multiply the rounded numbers. " + signRule.en], explain: n(a) + " ≈ " + n(ra) + " and " + b + " ≈ " + rb + ", so " + expr + " ≈ " + n(ra) + " × " + rb + " = " + n(res) + "." },
      vi: { q: "Ước lượng " + expr + " bằng cách làm tròn mỗi số đến hàng chục.", hints: ["Làm tròn " + n(a) + " đến hàng chục.", "Làm tròn " + b + " đến hàng chục.", "Nhân hai số đã làm tròn. " + signRule.vi], explain: n(a) + " ≈ " + n(ra) + " và " + b + " ≈ " + rb + ", nên " + expr + " ≈ " + n(ra) + " × " + rb + " = " + n(res) + "." }
    };
  };

  F["lcm2"] = function (r) {
    let a = 0, b = 0;
    while (!a || a === b || b % a === 0 || lcm(a, b) > 120) { a = int(r, 2, 12); b = int(r, a + 1, 20); }
    const L = lcm(a, b);
    return {
      answer: L,
      en: { q: "Find the LCM of " + a + " and " + b + ".", hints: ["List some multiples of the larger number: " + multiples(b, 4) + ", …", "Which of them is also a multiple of " + a + "?", "The first one that works is the LCM."], explain: "Multiples of " + b + ": " + multiples(b, L / b) + ". The first that is also a multiple of " + a + " is " + L + ", so LCM = " + L + "." },
      vi: { q: "Tìm BCNN của " + a + " và " + b + ".", hints: ["Liệt kê vài bội của số lớn hơn: " + multiples(b, 4) + ", …", "Bội nào trong đó cũng chia hết cho " + a + "?", "Số đầu tiên thỏa mãn chính là BCNN."], explain: "Bội của " + b + ": " + multiples(b, L / b) + ". Số đầu tiên chia hết cho " + a + " là " + L + ", nên BCNN = " + L + "." }
    };
  };

  F["lcm3"] = function (r) {
    let a = 0, b = 0, c = 0, L = 0;
    while (!L || L > 120 || a === b || b === c || a === c) { a = int(r, 2, 9); b = int(r, 2, 12); c = int(r, 3, 18); L = lcm(lcm(a, b), c); }
    const big = Math.max(a, b, c);
    return {
      answer: L,
      en: { q: "Find the LCM of " + a + ", " + b + " and " + c + ".", hints: ["List multiples of the largest number, " + big + ".", "Check each one: is it divisible by all three numbers?", "Or: find the LCM of two numbers, then the LCM of that with the third."], explain: "LCM(" + a + ", " + b + ") = " + lcm(a, b) + ", then LCM(" + lcm(a, b) + ", " + c + ") = " + L + "." },
      vi: { q: "Tìm BCNN của " + a + ", " + b + " và " + c + ".", hints: ["Liệt kê các bội của số lớn nhất là " + big + ".", "Kiểm tra từng bội: có chia hết cho cả ba số không?", "Hoặc: tìm BCNN của hai số, rồi BCNN của kết quả với số thứ ba."], explain: "BCNN(" + a + ", " + b + ") = " + lcm(a, b) + ", rồi BCNN(" + lcm(a, b) + ", " + c + ") = " + L + "." }
    };
  };

  // two coprime multipliers ≥ 2
  const coprimePair = function (r) { let m = 1, k = 1; while (m === k || gcd(m, k) !== 1) { m = int(r, 2, 9); k = int(r, 2, 9); } return [Math.min(m, k), Math.max(m, k)]; };

  F["hcf2"] = function (r) {
    const g = int(r, 2, 15), mk = coprimePair(r), a = g * mk[0], b = g * mk[1];
    if (b > 150) return F["hcf2"](r);
    return {
      answer: g,
      en: { q: "Find the HCF of " + a + " and " + b + ".", hints: ["List the factors of the smaller number, " + a + ".", "Which of them are also factors of " + b + "?", "Choose the largest one."], explain: a + " = " + g + " × " + mk[0] + " and " + b + " = " + g + " × " + mk[1] + "; " + mk[0] + " and " + mk[1] + " have no common factor except 1, so HCF = " + g + "." },
      vi: { q: "Tìm ƯCLN của " + a + " và " + b + ".", hints: ["Liệt kê các ước của số nhỏ hơn là " + a + ".", "Ước nào trong đó cũng là ước của " + b + "?", "Chọn ước lớn nhất."], explain: a + " = " + g + " × " + mk[0] + " và " + b + " = " + g + " × " + mk[1] + "; " + mk[0] + " và " + mk[1] + " không có ước chung nào ngoài 1, nên ƯCLN = " + g + "." }
    };
  };

  F["hcf3"] = function (r) {
    let m = [1, 1, 1];
    while (m[0] === m[1] || m[1] === m[2] || m[0] === m[2] || gcd(gcd(m[0], m[1]), m[2]) !== 1) m = [int(r, 2, 7), int(r, 2, 7), int(r, 2, 7)].sort(function (x, y) { return x - y; });
    const g = int(r, 2, 18), v = m.map(function (x) { return g * x; });
    return {
      answer: g,
      en: { q: "Find the HCF of " + v.join(", ") + ".", hints: ["List the factors of the smallest number, " + v[0] + ".", "Which of them divide all three numbers?", "Choose the largest one."], explain: v.map(function (x, i) { return x + " = " + g + " × " + m[i]; }).join(", ") + "; " + m.join(", ") + " share no factor except 1, so HCF = " + g + "." },
      vi: { q: "Tìm ƯCLN của " + v.join(", ") + ".", hints: ["Liệt kê các ước của số nhỏ nhất là " + v[0] + ".", "Ước nào chia hết cả ba số?", "Chọn ước lớn nhất."], explain: v.map(function (x, i) { return x + " = " + g + " × " + m[i]; }).join(", ") + "; " + m.join(", ") + " không có ước chung nào ngoài 1, nên ƯCLN = " + g + "." }
    };
  };

  F["factor-count"] = function (r) {
    let m = 0;
    while (!m || factors(m).length < 6) m = int(r, 12, 100);
    const f = factors(m), pairs = [];
    for (let i = 0; i < Math.ceil(f.length / 2); i++) pairs.push(f[i] + " × " + f[f.length - 1 - i]);
    return {
      answer: f.length,
      en: { q: "How many factors does " + m + " have?", hints: ["Look for factor pairs: 1 × " + m + ", 2 × ?, …", "Stop when the pairs start to repeat.", "Count every different number in your pairs."], explain: m + " = " + pairs.join(" = ") + ". Factors: " + f.join(", ") + " — " + f.length + " factors." },
      vi: { q: m + " có bao nhiêu ước?", hints: ["Tìm các cặp ước: 1 × " + m + ", 2 × ?, …", "Dừng lại khi các cặp bắt đầu lặp lại.", "Đếm mọi số khác nhau trong các cặp."], explain: m + " = " + pairs.join(" = ") + ". Các ước: " + f.join(", ") + " — có " + f.length + " ước." }
    };
  };

  F["digit-sum"] = function (r) {
    const m = int(r, 10000, 99999), d = String(m).split("").map(Number), s = d.reduce(function (x, y) { return x + y; }, 0);
    const shown = String(m).replace(/(\d{2})(\d{3})$/, "$1 $2");
    return {
      answer: s,
      en: { q: "Find the sum of the digits of " + shown + ".", hints: ["Write out the digits one by one.", "Add them from left to right.", "Check by adding again in a different order."], explain: d.join(" + ") + " = " + s + "." },
      vi: { q: "Tính tổng các chữ số của " + shown + ".", hints: ["Viết từng chữ số ra.", "Cộng lần lượt từ trái sang phải.", "Cộng lại theo thứ tự khác để kiểm tra."], explain: d.join(" + ") + " = " + s + "." }
    };
  };

  F["next-multiple"] = function (r, o) {
    const d = (o && o.d) || pick(r, [3, 4, 6, 9, 11]), m = int(r, 1000, 9999), res = m + d - (m % d);
    return {
      answer: res,
      en: { q: "Find the smallest integer greater than " + m + " that is divisible by " + d + ".", hints: ["What is the remainder when " + m + " is divided by " + d + "?", "How much must you add to reach the next multiple of " + d + "?", "Check your answer with the test for " + d + "."], explain: m + " = " + d + " × " + Math.floor(m / d) + " + " + (m % d) + ", so the next multiple is " + d + " × " + (Math.floor(m / d) + 1) + " = " + res + "." },
      vi: { q: "Tìm số nguyên nhỏ nhất lớn hơn " + m + " và chia hết cho " + d + ".", hints: [m + " chia " + d + " dư bao nhiêu?", "Cần cộng thêm bao nhiêu để tới bội tiếp theo của " + d + "?", "Kiểm tra lại bằng dấu hiệu chia hết cho " + d + "."], explain: m + " = " + d + " × " + Math.floor(m / d) + " + " + (m % d) + ", nên bội tiếp theo là " + d + " × " + (Math.floor(m / d) + 1) + " = " + res + "." }
    };
  };

  F["square"] = function (r) {
    const a = int(r, 11, 20), res = a * a;
    return {
      answer: res,
      en: { q: "Work out " + a + "².", hints: [a + "² means " + a + " × " + a + ".", "Split it: " + a + " × 10 + " + a + " × " + (a - 10) + ".", "Add the two parts."], explain: a + "² = " + a + " × " + a + " = " + (a * 10) + " + " + (a * (a - 10)) + " = " + res + "." },
      vi: { q: "Tính " + a + "².", hints: [a + "² nghĩa là " + a + " × " + a + ".", "Tách ra: " + a + " × 10 + " + a + " × " + (a - 10) + ".", "Cộng hai phần lại."], explain: a + "² = " + a + " × " + a + " = " + (a * 10) + " + " + (a * (a - 10)) + " = " + res + "." }
    };
  };

  F["sqrt"] = function (r) {
    const a = int(r, 6, 20), sq = a * a;
    return {
      answer: a,
      en: { q: "Find √" + sq + ".", hints: ["Which number multiplied by itself gives " + sq + "?", "Try numbers near " + (Math.round(a / 5) * 5) + ".", "Check: square your answer."], explain: a + " × " + a + " = " + sq + ", so √" + sq + " = " + a + "." },
      vi: { q: "Tính √" + sq + ".", hints: ["Số nào nhân với chính nó được " + sq + "?", "Thử các số gần " + (Math.round(a / 5) * 5) + ".", "Kiểm tra: bình phương kết quả của em."], explain: a + " × " + a + " = " + sq + ", nên √" + sq + " = " + a + "." }
    };
  };

  F["cube"] = function (r) {
    const a = int(r, 2, 10), res = a * a * a;
    return {
      answer: res,
      en: { q: "Work out " + a + "³.", hints: [a + "³ means " + a + " × " + a + " × " + a + ".", a + " × " + a + " = " + (a * a) + ".", "Now multiply by " + a + " again."], explain: a + "³ = " + a + " × " + a + " × " + a + " = " + (a * a) + " × " + a + " = " + res + "." },
      vi: { q: "Tính " + a + "³.", hints: [a + "³ nghĩa là " + a + " × " + a + " × " + a + ".", a + " × " + a + " = " + (a * a) + ".", "Nhân tiếp với " + a + "."], explain: a + "³ = " + a + " × " + a + " × " + a + " = " + (a * a) + " × " + a + " = " + res + "." }
    };
  };

  F["roots-mixed"] = function (r) {
    const a = int(r, 6, 15), b = int(r, 2, 5), res = a - b;
    const expr = "√" + (a * a) + " − ∛" + (b * b * b);
    return {
      answer: res,
      en: { q: "Work out " + expr + ".", hints: ["Find √" + (a * a) + " first.", "Then find ∛" + (b * b * b) + ": which number cubed gives " + (b * b * b) + "?", "Subtract."], explain: "√" + (a * a) + " = " + a + " and ∛" + (b * b * b) + " = " + b + ", so " + expr + " = " + a + " − " + b + " = " + res + "." },
      vi: { q: "Tính " + expr + ".", hints: ["Tính √" + (a * a) + " trước.", "Rồi tính ∛" + (b * b * b) + ": số nào lập phương lên được " + (b * b * b) + "?", "Trừ hai kết quả."], explain: "√" + (a * a) + " = " + a + " và ∛" + (b * b * b) + " = " + b + ", nên " + expr + " = " + a + " − " + b + " = " + res + "." }
    };
  };

  // a non-square N between k² and (k+1)²
  const nonSquare = function (r, lo, hi) { let N = 0, k = 0; while (!N || k * k === N) { N = int(r, lo, hi); k = Math.floor(Math.sqrt(N)); } return { N: N, k: k }; };

  F["sqrt-closest"] = function (r) {
    const s = nonSquare(r, 20, 200), N = s.N, k = s.k, res = N - k * k <= (k + 1) * (k + 1) - N ? k : k + 1;
    return {
      answer: res,
      en: { q: "Which integer is closest to √" + N + "?", hints: ["Which square numbers are just below and just above " + N + "?", k + "² = " + (k * k) + " and " + (k + 1) + "² = " + ((k + 1) * (k + 1)) + ".", "Is " + N + " nearer to " + (k * k) + " or to " + ((k + 1) * (k + 1)) + "?"], explain: (k * k) + " < " + N + " < " + ((k + 1) * (k + 1)) + ", and " + N + " is nearer to " + (res * res) + ", so √" + N + " is closest to " + res + "." },
      vi: { q: "Số nguyên nào gần √" + N + " nhất?", hints: ["Số chính phương nào nằm ngay dưới và ngay trên " + N + "?", k + "² = " + (k * k) + " và " + (k + 1) + "² = " + ((k + 1) * (k + 1)) + ".", N + " gần " + (k * k) + " hay gần " + ((k + 1) * (k + 1)) + " hơn?"], explain: (k * k) + " < " + N + " < " + ((k + 1) * (k + 1)) + ", và " + N + " gần " + (res * res) + " hơn, nên √" + N + " gần " + res + " nhất." }
    };
  };

  F["sqrt-between"] = function (r) {
    const s = nonSquare(r, 50, 400), N = s.N, k = s.k;
    return {
      answer: k,
      en: { q: "√" + N + " is between two consecutive integers. What is the smaller of the two?", hints: ["Find the square numbers either side of " + N + ".", k + "² = " + (k * k) + " and " + (k + 1) + "² = " + ((k + 1) * (k + 1)) + ".", "So √" + N + " is between which two integers?"], explain: (k * k) + " < " + N + " < " + ((k + 1) * (k + 1)) + ", so " + k + " < √" + N + " < " + (k + 1) + ". The smaller is " + k + "." },
      vi: { q: "√" + N + " nằm giữa hai số nguyên liên tiếp. Số nhỏ hơn là số nào?", hints: ["Tìm hai số chính phương kẹp " + N + ".", k + "² = " + (k * k) + " và " + (k + 1) + "² = " + ((k + 1) * (k + 1)) + ".", "Vậy √" + N + " nằm giữa hai số nguyên nào?"], explain: (k * k) + " < " + N + " < " + ((k + 1) * (k + 1)) + ", nên " + k + " < √" + N + " < " + (k + 1) + ". Số nhỏ hơn là " + k + "." }
    };
  };

  F["cbrt-between"] = function (r) {
    let N = 0, k = 0;
    while (!N || k * k * k === N) { N = int(r, 10, 500); k = Math.floor(Math.cbrt(N) + 1e-9); }
    const lo = k * k * k, hi = (k + 1) * (k + 1) * (k + 1);
    return {
      answer: k,
      en: { q: "∛" + N + " is between two consecutive integers. What is the smaller of the two?", hints: ["Find the cube numbers either side of " + N + ".", k + "³ = " + lo + " and " + (k + 1) + "³ = " + hi + ".", "So ∛" + N + " is between which two integers?"], explain: lo + " < " + N + " < " + hi + ", so " + k + " < ∛" + N + " < " + (k + 1) + ". The smaller is " + k + "." },
      vi: { q: "∛" + N + " nằm giữa hai số nguyên liên tiếp. Số nhỏ hơn là số nào?", hints: ["Tìm hai số lập phương kẹp " + N + ".", k + "³ = " + lo + " và " + (k + 1) + "³ = " + hi + ".", "Vậy ∛" + N + " nằm giữa hai số nguyên nào?"], explain: lo + " < " + N + " < " + hi + ", nên " + k + " < ∛" + N + " < " + (k + 1) + ". Số nhỏ hơn là " + k + "." }
    };
  };
})();
