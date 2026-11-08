// 🎲 Variant families: expressions, formulae, equations, inequalities, sequences, functions, graphs
// (Math 7 units 2, 9 and 11). Each family: (r, opts) → MQ.variants.lib.mk(answer, en[5], vi[5]). See js/variants.js.
(function () {
  const F = MQ.variants.families, U = MQ.variants.lib, mk = U.mk, int = U.int, pick = U.pick, nz = U.nz;
  const E = U.L.en, V = U.L.vi;
  const letter = function (r) { return pick(r, ["x", "y", "n", "a", "m"]); };

  // ---- substitution (2.2) ----
  F["subst1"] = function (r) {
    const x = letter(r), v = int(r, 4, 30), a = int(r, 2, 12), form = pick(r, ["+", "−", "×", "÷"]);
    const val = form === "÷" ? v * a : v;
    const expr = form === "+" ? x + " + " + a : form === "−" ? x + " − " + a : form === "×" ? a + x : x + "/" + a;
    const work = form === "+" ? val + " + " + a : form === "−" ? val + " − " + a : form === "×" ? a + " × " + val : val + " ÷ " + a;
    const res = form === "+" ? val + a : form === "−" ? val - a : form === "×" ? a * val : val / a;
    return mk(res,
      ["Work out " + expr + " when " + x + " = " + val + ".", "Replace " + x + " with " + val + ".", form === "×" ? a + x + " means " + a + " × " + x + "." : "Write the calculation: " + work + ".", "Work it out carefully.", expr + " = " + work + " = " + E.n(res) + "."],
      ["Tính " + expr + " khi " + x + " = " + val + ".", "Thay " + x + " bằng " + val + ".", form === "×" ? a + x + " nghĩa là " + a + " × " + x + "." : "Viết phép tính: " + work + ".", "Tính cẩn thận.", expr + " = " + work + " = " + V.n(res) + "."]);
  };

  F["subst2"] = function (r) {
    if (r() < 0.5) {
      const p = int(r, 2, 5), q = int(r, 2, 5), w = int(r, 5, 15), v = int(r, 2, 9), res = p * w - q * v;
      const expr = p + "w − " + q + "v", work = p + " × " + w + " − " + q + " × " + v;
      return mk(res,
        ["Work out " + expr + " when w = " + w + " and v = " + v + ".", "Replace w with " + w + " and v with " + v + ".", "Multiply first: " + p + " × " + w + " and " + q + " × " + v + ".", "Then subtract.", expr + " = " + work + " = " + (p * w) + " − " + (q * v) + " = " + E.n(res) + "."],
        ["Tính " + expr + " khi w = " + w + " và v = " + v + ".", "Thay w bằng " + w + " và v bằng " + v + ".", "Nhân trước: " + p + " × " + w + " và " + q + " × " + v + ".", "Rồi trừ.", expr + " = " + work + " = " + (p * w) + " − " + (q * v) + " = " + V.n(res) + "."]);
    }
    const a = int(r, 3, 12), b = int(r, 3, 12), c = int(r, 5, 40), res = a * b - c;
    return mk(res,
      ["Work out ab − c when a = " + a + ", b = " + b + " and c = " + c + ".", "ab means a × b.", a + " × " + b + " = ?", "Now subtract " + c + ".", "ab − c = " + a + " × " + b + " − " + c + " = " + (a * b) + " − " + c + " = " + E.n(res) + "."],
      ["Tính ab − c khi a = " + a + ", b = " + b + " và c = " + c + ".", "ab nghĩa là a × b.", a + " × " + b + " = ?", "Rồi trừ đi " + c + ".", "ab − c = " + a + " × " + b + " − " + c + " = " + (a * b) + " − " + c + " = " + V.n(res) + "."]);
  };

  F["subst-frac"] = function (r) {
    if (r() < 0.5) {
      const c = int(r, 2, 9), k = c * int(r, 3, 12), d = int(r, 1, 9), res = k / c - d;
      return mk(res,
        ["Work out " + k + "/c − " + d + " when c = " + c + ".", k + "/c means " + k + " ÷ c.", k + " ÷ " + c + " = ?", "Then subtract " + d + ".", k + "/c − " + d + " = " + k + " ÷ " + c + " − " + d + " = " + (k / c) + " − " + d + " = " + E.n(res) + "."],
        ["Tính " + k + "/c − " + d + " khi c = " + c + ".", k + "/c nghĩa là " + k + " ÷ c.", k + " ÷ " + c + " = ?", "Rồi trừ đi " + d + ".", k + "/c − " + d + " = " + k + " ÷ " + c + " − " + d + " = " + (k / c) + " − " + d + " = " + V.n(res) + "."]);
    }
    const x = int(r, 5, 30), y = int(r, 3, 30);
    const yy = (x + y) % 2 ? y + 1 : y, res = (x + yy) / 2;
    return mk(res,
      ["Work out (x + y)/2 when x = " + x + " and y = " + yy + ".", "Work out the top first: x + y.", x + " + " + yy + " = " + (x + yy) + ".", "Then divide by 2.", "(x + y)/2 = (" + x + " + " + yy + ") ÷ 2 = " + (x + yy) + " ÷ 2 = " + res + "."],
      ["Tính (x + y)/2 khi x = " + x + " và y = " + yy + ".", "Tính tử số trước: x + y.", x + " + " + yy + " = " + (x + yy) + ".", "Rồi chia cho 2.", "(x + y)/2 = (" + x + " + " + yy + ") ÷ 2 = " + (x + yy) + " ÷ 2 = " + res + "."]);
  };

  F["formula-rate"] = function (r) {
    const rate = int(r, 6, 25), h = int(r, 4, 40), res = rate * h, who = pick(r, ["Sanjay", "Mai", "Leo", "Hana"]);
    return mk(res,
      [who + " is paid $" + rate + " per hour and uses the formula T = " + rate + "h. Work out T when h = " + h + ".", "T is the total pay and h is the number of hours.", "Replace h with " + h + ".", rate + " × " + h + " = ?", "T = " + rate + " × " + h + " = " + E.n(res) + "."],
      [who + " được trả $" + rate + " mỗi giờ và dùng công thức T = " + rate + "h. Tính T khi h = " + h + ".", "T là tổng tiền công, h là số giờ.", "Thay h bằng " + h + ".", rate + " × " + h + " = ?", "T = " + rate + " × " + h + " = " + V.n(res) + "."]);
  };

  F["formula-inverse"] = function (r) {
    const I = int(r, 2, 12), R = int(r, 2, 15), Vv = I * R, findR = r() < 0.5;
    const res = findR ? R : I, known = findR ? "I = " + I : "R = " + R, other = findR ? I : R, name = findR ? "R" : "I";
    return mk(res,
      ["In V = IR, work out " + name + " when V = " + Vv + " and " + known + ".", "Put the numbers you know into V = IR.", Vv + " = " + (findR ? I + " × R" : "I × " + R) + ".", "Undo the multiplication: divide " + Vv + " by " + other + ".", name + " = " + Vv + " ÷ " + other + " = " + res + "."],
      ["Trong công thức V = IR, tính " + name + " khi V = " + Vv + " và " + known + ".", "Thay các số đã biết vào V = IR.", Vv + " = " + (findR ? I + " × R" : "I × " + R) + ".", "Làm ngược phép nhân: chia " + Vv + " cho " + other + ".", name + " = " + Vv + " ÷ " + other + " = " + res + "."]);
  };

  // ---- equations (2.5) ----
  F["solve1"] = function (r) {
    const x = letter(r), a = int(r, 2, 15), form = pick(r, ["minus", "plus", "flip"]);
    const res = form === "minus" ? int(r, -8, 25) : int(r, 1, 25);
    let eq, undoEn, undoVi, b;
    if (form === "minus") { b = res - a; eq = x + " − " + a + " = " + E.n(b); undoEn = "Add " + a + " to both sides."; undoVi = "Cộng " + a + " vào hai vế."; }
    else if (form === "plus") { b = res + a; eq = x + " + " + a + " = " + b; undoEn = "Subtract " + a + " from both sides."; undoVi = "Trừ hai vế cho " + a + "."; }
    else { b = res + a; eq = b + " = " + x + " + " + a; undoEn = "Subtract " + a + " from both sides."; undoVi = "Trừ hai vế cho " + a + "."; }
    const calc = form === "minus" ? E.n(b) + " + " + a : b + " − " + a;
    return mk(res,
      ["Solve " + eq + ".", "What is being done to " + x + "?", undoEn, x + " = " + calc + " = ?", x + " = " + calc + " = " + E.n(res) + ". Check by putting it back into the equation."],
      ["Giải phương trình " + eq + ".", "Đang có phép tính gì với " + x + "?", undoVi, x + " = " + calc + " = ?", x + " = " + calc + " = " + V.n(res) + ". Thử lại bằng cách thay vào phương trình."]);
  };

  F["solve2"] = function (r) {
    const x = letter(r), a = int(r, 2, 9), res = int(r, 2, 12), b = int(r, 1, 15), form = pick(r, ["plus", "minus", "flip"]);
    const c = form === "plus" ? a * res + b : a * res - b;
    if (c <= 0) return F["solve2"](r);
    const eq = form === "plus" ? a + x + " + " + b + " = " + c : form === "minus" ? a + x + " − " + b + " = " + c : c + " = " + a + x + " − " + b;
    const step1 = form === "plus" ? c + " − " + b : c + " + " + b, mid = a * res;
    return mk(res,
      ["Solve " + eq + ".", form === "plus" ? "First subtract " + b + " from both sides." : "First add " + b + " to both sides.", a + x + " = " + step1 + " = " + mid + ".", "Now divide both sides by " + a + ".", a + x + " = " + mid + ", so " + x + " = " + mid + " ÷ " + a + " = " + res + "."],
      ["Giải phương trình " + eq + ".", form === "plus" ? "Trước hết trừ hai vế cho " + b + "." : "Trước hết cộng " + b + " vào hai vế.", a + x + " = " + step1 + " = " + mid + ".", "Rồi chia hai vế cho " + a + ".", a + x + " = " + mid + ", nên " + x + " = " + mid + " ÷ " + a + " = " + res + "."]);
  };

  F["word-sell"] = function (r) {
    const who = pick(r, ["Paul", "Lan", "Omar", "Mia"]), thing = pick(r, [["DVDs", "đĩa DVD"], ["stickers", "nhãn dán"], ["books", "quyển sách"], ["marbles", "viên bi"]]);
    const sold = int(r, 3, 15), left = int(r, 10, 40), res = sold + left;
    return mk(res,
      [who + " has some " + thing[0] + ". " + who + " gives away " + sold + " of them and has " + left + " left. How many " + thing[0] + " did " + who + " have at the start?", "Call the starting number x.", "x − " + sold + " = " + left + ".", "Add " + sold + " to both sides.", "x − " + sold + " = " + left + ", so x = " + left + " + " + sold + " = " + res + "."],
      [who + " có một số " + thing[1] + ". " + who + " cho đi " + sold + " " + thing[1] + " và còn lại " + left + ". Lúc đầu " + who + " có bao nhiêu " + thing[1] + "?", "Gọi số lúc đầu là x.", "x − " + sold + " = " + left + ".", "Cộng " + sold + " vào hai vế.", "x − " + sold + " = " + left + ", nên x = " + left + " + " + sold + " = " + res + "."]);
  };

  F["word-age"] = function (r) {
    const k = int(r, 2, 4), b = int(r, 1, 9), res = int(r, 5, 16), c = k * res + b;
    const A = pick(r, ["Jana", "Linh", "Sara"]), B = pick(r, ["Jin", "Tuấn", "Ben"]);
    return mk(res,
      [A + "'s age is " + b + " more than " + k + " times the age of " + B + ". " + A + " is " + c + " years old. How old is " + B + "?", "Call " + B + "'s age x. Write " + A + "'s age using x.", k + "x + " + b + " = " + c + ".", "Subtract " + b + ", then divide by " + k + ".", k + "x + " + b + " = " + c + " → " + k + "x = " + (c - b) + " → x = " + res + ". " + B + " is " + res + "."],
      ["Tuổi của " + A + " hơn " + k + " lần tuổi của " + B + " là " + b + ". " + A + " " + c + " tuổi. " + B + " bao nhiêu tuổi?", "Gọi tuổi " + B + " là x. Viết tuổi " + A + " theo x.", k + "x + " + b + " = " + c + ".", "Trừ đi " + b + ", rồi chia cho " + k + ".", k + "x + " + b + " = " + c + " → " + k + "x = " + (c - b) + " → x = " + res + ". " + B + " " + res + " tuổi."]);
  };

  // ---- inequalities (2.6) ----
  F["int-bound"] = function (r) {
    const x = letter(r), gt = r() < 0.5, half = r() < 0.5, base = int(r, -9, 15);
    const a = half ? base + 0.5 : base;
    const res = gt ? (half ? Math.ceil(a) : a + 1) : (half ? Math.floor(a) : a - 1);
    const sym = gt ? " > " : " < ", wEn = gt ? "smallest" : "largest", wVi = gt ? "nhỏ nhất" : "lớn nhất";
    return mk(res,
      ["For " + x + sym + E.n(a) + ", what is the " + wEn + " integer that " + x + " could be?", gt ? x + " must be bigger than " + E.n(a) + " — it cannot equal " + E.n(a) + "." : x + " must be less than " + E.n(a) + " — it cannot equal " + E.n(a) + ".", "Picture " + E.n(a) + " on a number line.", "Move " + (gt ? "right" : "left") + " to the first integer that works.", "The " + wEn + " integer " + (gt ? "greater" : "less") + " than " + E.n(a) + " is " + E.n(res) + "."],
      ["Với " + x + sym + V.n(a) + ", số nguyên " + wVi + " mà " + x + " có thể nhận là bao nhiêu?", x + " phải " + (gt ? "lớn hơn " : "nhỏ hơn ") + V.n(a) + " — không được bằng " + V.n(a) + ".", "Hình dung " + V.n(a) + " trên trục số.", "Đi sang " + (gt ? "phải" : "trái") + " tới số nguyên đầu tiên thỏa mãn.", "Số nguyên " + wVi + " " + (gt ? "lớn hơn " : "nhỏ hơn ") + V.n(a) + " là " + V.n(res) + "."]);
  };

  F["int-range"] = function (r) {
    const a = int(r, 1, 8), b = int(r, 0, 8), lo = -(a + 0.5), hi = b + 0.5, res = a + b + 1;
    return mk(res,
      ["How many integers n satisfy both n > " + E.n(lo) + " and n < " + E.n(hi) + "?", "What is the smallest integer greater than " + E.n(lo) + "?", "What is the largest integer less than " + E.n(hi) + "?", "Count all the integers from " + E.n(-a) + " to " + b + ", including 0.", "The integers are " + E.n(-a) + ", …, " + b + ": that is " + res + " integers."],
      ["Có bao nhiêu số nguyên n thỏa mãn cả n > " + V.n(lo) + " và n < " + V.n(hi) + "?", "Số nguyên nhỏ nhất lớn hơn " + V.n(lo) + " là số nào?", "Số nguyên lớn nhất nhỏ hơn " + V.n(hi) + " là số nào?", "Đếm tất cả các số nguyên từ " + V.n(-a) + " đến " + b + ", kể cả số 0.", "Các số nguyên là " + V.n(-a) + ", …, " + b + ": có " + res + " số."]);
  };

  // ---- sequences (9.1–9.3) ----
  F["seq-arith"] = function (r) {
    const d = nz(r, -7, 9), a = d < 0 ? int(r, 30, 60) : int(r, 1, 20), terms = [a, a + d, a + 2 * d, a + 3 * d], k = int(r, 5, 8);
    const next = r() < 0.5, pos = next ? 5 : k, res = a + (pos - 1) * d;
    const rule = d > 0 ? ["add " + d, "cộng " + d] : ["subtract " + (-d), "trừ " + (-d)];
    const askEn = next ? "What is the next term?" : "What is the " + k + "th term?", askVi = next ? "Số hạng tiếp theo là bao nhiêu?" : "Số hạng thứ " + k + " là bao nhiêu?";
    return mk(res,
      ["Here is a sequence: " + terms.map(E.n).join(", ") + ", … " + askEn, "How much does it change from one term to the next?", "The term-to-term rule is '" + rule[0] + "'.", "Keep applying the rule until term " + pos + ".", "Rule '" + rule[0] + "': term " + pos + " = " + E.n(a) + " + " + (pos - 1) + " × " + E.p(d) + " = " + E.n(res) + "."],
      ["Cho dãy số: " + terms.map(V.n).join(", ") + ", … " + askVi, "Từ số hạng này sang số hạng sau thay đổi bao nhiêu?", "Quy tắc là '" + rule[1] + "'.", "Áp dụng quy tắc liên tiếp tới số hạng thứ " + pos + ".", "Quy tắc '" + rule[1] + "': số hạng thứ " + pos + " = " + V.n(a) + " + " + (pos - 1) + " × " + V.p(d) + " = " + V.n(res) + "."]);
  };

  F["seq-mult"] = function (r) {
    const a = int(r, 2, 9), m = int(r, 2, 4), t2 = a * m, res = t2 * m;
    return mk(res,
      ["The first term of a sequence is " + a + " and the rule is 'multiply by " + m + "'. What is the third term?", "Second term = " + a + " × " + m + ".", "Third term = second term × " + m + ".", "Work out each step.", a + " → " + t2 + " → " + res + ". The third term is " + res + "."],
      ["Số hạng đầu của một dãy là " + a + " và quy tắc là 'nhân với " + m + "'. Số hạng thứ ba là bao nhiêu?", "Số hạng thứ hai = " + a + " × " + m + ".", "Số hạng thứ ba = số hạng thứ hai × " + m + ".", "Tính từng bước.", a + " → " + t2 + " → " + res + ". Số hạng thứ ba là " + res + "."]);
  };

  F["seq-two-step"] = function (r) {
    const form = pick(r, ["mul-add", "sub-mul", "div-add"]);
    let a, m, c, t2, res, rEn, rVi;
    if (form === "mul-add") { a = int(r, 2, 9); m = int(r, 2, 3); c = int(r, 1, 6); t2 = a * m + c; res = t2 * m + c; rEn = "multiply by " + m + " then add " + c; rVi = "nhân với " + m + " rồi cộng " + c; }
    else if (form === "sub-mul") { c = int(r, 2, 8); a = c + int(r, 3, 9); m = int(r, 2, 4); t2 = (a - c) * m; if (t2 <= c) return F["seq-two-step"](r); res = (t2 - c) * m; rEn = "subtract " + c + " then multiply by " + m; rVi = "trừ " + c + " rồi nhân với " + m; }
    else { m = int(r, 2, 3); const x = int(r, 3, 12); c = m - (x % m) + m * int(r, 0, 2); if (c === 0) c = m; a = x * m; t2 = x + c; res = t2 / m + c; rEn = "divide by " + m + " then add " + c; rVi = "chia cho " + m + " rồi cộng " + c; }
    return mk(res,
      ["The first term is " + a + ". The rule is '" + rEn + "'. What is the third term?", "Apply both steps of the rule to " + a + " to get the second term.", "Second term = " + t2 + ".", "Apply the rule again to " + t2 + ".", a + " → " + t2 + " → " + res + ". The third term is " + res + "."],
      ["Số hạng đầu là " + a + ". Quy tắc là '" + rVi + "'. Số hạng thứ ba là bao nhiêu?", "Áp dụng cả hai bước của quy tắc cho " + a + " để được số hạng thứ hai.", "Số hạng thứ hai = " + t2 + ".", "Áp dụng quy tắc lần nữa cho " + t2 + ".", a + " → " + t2 + " → " + res + ". Số hạng thứ ba là " + res + "."]);
  };

  F["seq-backwards"] = function (r) {
    const res = int(r, 3, 15), m = int(r, 2, 4), c = int(r, 1, 6), s = res * m - c;
    return mk(res,
      ["The second term of a sequence is " + s + ". The rule is 'multiply by " + m + " then subtract " + c + "'. What is the first term?", "Work backwards: undo each step in reverse order.", "Undo 'subtract " + c + "': " + s + " + " + c + " = " + (s + c) + ".", "Undo 'multiply by " + m + "': divide by " + m + ".", "(" + s + " + " + c + ") ÷ " + m + " = " + res + ". Check: " + res + " × " + m + " − " + c + " = " + s + "."],
      ["Số hạng thứ hai của một dãy là " + s + ". Quy tắc là 'nhân với " + m + " rồi trừ " + c + "'. Số hạng đầu là bao nhiêu?", "Làm ngược lại: đảo từng bước theo thứ tự ngược.", "Đảo 'trừ " + c + "': " + s + " + " + c + " = " + (s + c) + ".", "Đảo 'nhân với " + m + "': chia cho " + m + ".", "(" + s + " + " + c + ") ÷ " + m + " = " + res + ". Thử lại: " + res + " × " + m + " − " + c + " = " + s + "."]);
  };

  F["pattern-far"] = function (r) {
    const a = int(r, 3, 8), d = int(r, 2, 5), k = int(r, 6, 25), res = a + (k - 1) * d;
    const thing = pick(r, [["squares", "hình vuông"], ["dots", "chấm"], ["matchsticks", "que diêm"]]);
    return mk(res,
      ["Patterns have " + a + ", " + (a + d) + ", " + (a + 2 * d) + ", … " + thing[0] + ". How many " + thing[0] + " are in pattern " + k + "?", "How many " + thing[0] + " are added each time?", "From pattern 1 to pattern " + k + " you add " + d + " a total of " + (k - 1) + " times.", a + " + " + (k - 1) + " × " + d + " = ?", "Pattern " + k + ": " + a + " + " + (k - 1) + " × " + d + " = " + res + " " + thing[0] + "."],
      ["Các hình có " + a + ", " + (a + d) + ", " + (a + 2 * d) + ", … " + thing[1] + ". Hình thứ " + k + " có bao nhiêu " + thing[1] + "?", "Mỗi lần thêm bao nhiêu " + thing[1] + "?", "Từ hình 1 đến hình " + k + " ta thêm " + d + " tất cả " + (k - 1) + " lần.", a + " + " + (k - 1) + " × " + d + " = ?", "Hình " + k + ": " + a + " + " + (k - 1) + " × " + d + " = " + res + " " + thing[1] + "."]);
  };

  F["nth-use"] = function (r) {
    const form = pick(r, ["kn", "n-c", "kn+c"]), k = int(r, 2, 12), c = int(r, 1, 20), n = int(r, 3, 25);
    const rule = form === "kn" ? k + "n" : form === "n-c" ? "n − " + c : k + "n + " + c;
    const res = form === "kn" ? k * n : form === "n-c" ? n - c : k * n + c;
    const work = form === "kn" ? k + " × " + n : form === "n-c" ? n + " − " + c : k + " × " + n + " + " + c;
    return mk(res,
      ["The nth term of a sequence is " + rule + ". What is the " + n + "th term?", "Replace n with " + n + ".", "Write the calculation: " + work + ".", "Work it out.", "n = " + n + ": " + work + " = " + E.n(res) + "."],
      ["Số hạng tổng quát của một dãy là " + rule + ". Số hạng thứ " + n + " là bao nhiêu?", "Thay n bằng " + n + ".", "Viết phép tính: " + work + ".", "Tính kết quả.", "n = " + n + ": " + work + " = " + V.n(res) + "."]);
  };

  F["nth-position"] = function (r) {
    const k = int(r, 3, 20), res = int(r, 5, 40), T = k * res;
    return mk(res,
      ["The nth term of a sequence is " + k + "n. Which position number n gives the term " + T + "?", k + "n = " + T + ".", "Undo multiplying by " + k + ".", T + " ÷ " + k + " = ?", k + "n = " + T + ", so n = " + T + " ÷ " + k + " = " + res + "."],
      ["Số hạng tổng quát của một dãy là " + k + "n. Số hạng " + T + " ở vị trí thứ mấy?", k + "n = " + T + ".", "Làm ngược phép nhân với " + k + ".", T + " ÷ " + k + " = ?", k + "n = " + T + ", nên n = " + T + " ÷ " + k + " = " + res + "."]);
  };

  // ---- function machines (9.4) ----
  const OPS = {
    "+": { en: "adds", vi: "cộng thêm", f: function (x, a) { return x + a; }, inv: function (y, a) { return y - a; }, invEn: "subtract", invVi: "trừ" },
    "−": { en: "subtracts", vi: "trừ đi", f: function (x, a) { return x - a; }, inv: function (y, a) { return y + a; }, invEn: "add", invVi: "cộng" },
    "×": { en: "multiplies by", vi: "nhân với", f: function (x, a) { return x * a; }, inv: function (y, a) { return y / a; }, invEn: "divide by", invVi: "chia cho" },
    "÷": { en: "divides by", vi: "chia cho", f: function (x, a) { return x / a; }, inv: function (y, a) { return y * a; }, invEn: "multiply by", invVi: "nhân với" }
  };

  F["fm-output"] = function (r) {
    const op = pick(r, ["+", "−", "×", "÷"]), a = int(r, 2, 9), x = op === "÷" ? a * int(r, 2, 12) : int(r, op === "−" ? a + 1 : 2, 30), o = OPS[op], res = o.f(x, a);
    return mk(res,
      ["A function machine " + o.en + " " + a + ". The input is " + x + ". What is the output?", "The machine does one thing to the input.", "Write it: " + x + " " + op + " " + a + ".", "Work it out.", x + " " + op + " " + a + " = " + res + "."],
      ["Một máy hàm số " + o.vi + " " + a + ". Đầu vào là " + x + ". Đầu ra là bao nhiêu?", "Máy thực hiện một phép tính với đầu vào.", "Viết ra: " + x + " " + op + " " + a + ".", "Tính kết quả.", x + " " + op + " " + a + " = " + res + "."]);
  };

  F["fm-inverse"] = function (r) {
    const op = pick(r, ["+", "−", "×", "÷"]), a = int(r, 2, 9), res = op === "÷" ? a * int(r, 2, 10) : int(r, op === "−" ? a + 1 : 2, 20), o = OPS[op], y = o.f(res, a);
    return mk(res,
      ["A function machine " + o.en + " " + a + ". The output is " + y + ". What was the input?", "Work backwards from the output.", "The inverse operation is '" + o.invEn + " " + a + "'.", "Apply it to " + y + ".", "Input = " + y + " → " + o.invEn + " " + a + " → " + res + ". Check: " + res + " " + op + " " + a + " = " + y + "."],
      ["Một máy hàm số " + o.vi + " " + a + ". Đầu ra là " + y + ". Đầu vào là bao nhiêu?", "Làm ngược từ đầu ra.", "Phép tính ngược là '" + o.invVi + " " + a + "'.", "Áp dụng cho " + y + ".", "Đầu vào = " + y + " → " + o.invVi + " " + a + " → " + res + ". Thử lại: " + res + " " + op + " " + a + " = " + y + "."]);
  };

  F["fm-two-step"] = function (r) {
    const m = int(r, 2, 5), c = int(r, 1, 9), res = int(r, 2, 12), y = res * m - c;
    if (y <= 0) return F["fm-two-step"](r);
    return mk(res,
      ["A two-step function machine does 'multiply by " + m + "' then 'subtract " + c + "'. The output is " + y + ". What was the input?", "Undo the steps in reverse order.", "Undo 'subtract " + c + "': " + y + " + " + c + " = " + (y + c) + ".", "Undo 'multiply by " + m + "': divide by " + m + ".", "(" + y + " + " + c + ") ÷ " + m + " = " + res + "."],
      ["Một máy hàm số hai bước thực hiện 'nhân với " + m + "' rồi 'trừ " + c + "'. Đầu ra là " + y + ". Đầu vào là bao nhiêu?", "Đảo các bước theo thứ tự ngược lại.", "Đảo 'trừ " + c + "': " + y + " + " + c + " = " + (y + c) + ".", "Đảo 'nhân với " + m + "': chia cho " + m + ".", "(" + y + " + " + c + ") ÷ " + m + " = " + res + "."]);
  };

  // ---- graphs (11.1–11.2) ----
  F["line-value"] = function (r) {
    if (r() < 0.5) {
      const c = nz(r, -9, 9), x = nz(r, -25, 25), res = x + c, eq = "y = x " + (c < 0 ? "− " + (-c) : "+ " + c);
      return mk(res,
        ["A point (" + E.n(x) + ", ?) lies on the line " + eq + ". What is the missing y-coordinate?", "The first number in the point is x.", "Replace x with " + E.n(x) + " in " + eq + ".", "Work out the value of y.", "y = " + E.n(x) + " " + (c < 0 ? "− " + (-c) : "+ " + c) + " = " + E.n(res) + "."],
        ["Điểm (" + V.n(x) + "; ?) nằm trên đường thẳng " + eq + ". Tung độ còn thiếu là bao nhiêu?", "Số thứ nhất của điểm là x.", "Thay x bằng " + V.n(x) + " vào " + eq + ".", "Tính giá trị của y.", "y = " + V.n(x) + " " + (c < 0 ? "− " + (-c) : "+ " + c) + " = " + V.n(res) + "."]);
    }
    const m = int(r, 2, 6), x = int(r, 1, 15) + 0.5, res = U.clean(m * x);
    return mk(res,
      ["A point (" + E.n(x) + ", ?) lies on the line y = " + m + "x. What is the missing y-coordinate?", "y = " + m + "x means y = " + m + " × x.", "Replace x with " + E.n(x) + ".", m + " × " + E.n(x) + " = ?", "y = " + m + " × " + E.n(x) + " = " + E.n(res) + "."],
      ["Điểm (" + V.n(x) + "; ?) nằm trên đường thẳng y = " + m + "x. Tung độ còn thiếu là bao nhiêu?", "y = " + m + "x nghĩa là y = " + m + " × x.", "Thay x bằng " + V.n(x) + ".", m + " × " + V.n(x) + " = ?", "y = " + m + " × " + V.n(x) + " = " + V.n(res) + "."], 0.001);
  };

  F["exchange"] = function (r) {
    if (r() < 0.5) {
      const k = pick(r, [20, 25, 40, 70, 80]), x = int(r, 3, 30), res = k * x;
      return mk(res,
        ["You can exchange x US dollars for y rupees using y = " + k + "x. How many rupees do you get for " + x + " US dollars?", "x is the number of dollars.", "Replace x with " + x + ".", k + " × " + x + " = ?", "y = " + k + " × " + x + " = " + E.n(res) + " rupees."],
        ["Em đổi x đô la Mỹ lấy y rupee theo công thức y = " + k + "x. Đổi " + x + " đô la Mỹ được bao nhiêu rupee?", "x là số đô la.", "Thay x bằng " + x + ".", k + " × " + x + " = ?", "y = " + k + " × " + x + " = " + V.n(res) + " rupee."], 0, "rupee");
    }
    const rate = int(r, 12, 30), base = pick(r, [5, 10]), x = base * int(r, 2, 9) + pick(r, [0, 1, 2]), got = rate * base, res = rate * x;
    return mk(res,
      ["You can exchange " + base + " euro for " + got + " pesos. How many pesos do you get for " + x + " euro?", "First find how many pesos you get for 1 euro.", got + " ÷ " + base + " = " + rate + " pesos for 1 euro.", "Multiply by " + x + ".", "1 euro = " + rate + " pesos, so " + x + " euro = " + rate + " × " + x + " = " + E.n(res) + " pesos."],
      ["Em đổi " + base + " euro được " + got + " peso. Đổi " + x + " euro được bao nhiêu peso?", "Trước hết tìm 1 euro đổi được bao nhiêu peso.", got + " ÷ " + base + " = " + rate + " peso cho 1 euro.", "Nhân với " + x + ".", "1 euro = " + rate + " peso, nên " + x + " euro = " + rate + " × " + x + " = " + V.n(res) + " peso."], 0, "peso");
  };
})();
