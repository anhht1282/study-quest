// 🎲 Variant families for Math 8: angles, data, circles and solids, linear graphs, ratio, probability,
// distance, area and volume (Math 8 units 5, 6, 8, 11, 12, 13, 14, 15, 16).
(function () {
  const F = MQ.variants.families, U = MQ.variants.lib, mk = U.mk, int = U.int, pick = U.pick, gcd = U.gcd, clean = U.clean;
  const E = U.L.en, V = U.L.vi, fs = U.fracStr, TOL = 1e-6;
  const dec1 = function (r, lo, hi) { return clean(int(r, lo, hi) / 10); };
  const sgn = function (x) { return x < 0 ? " − " + Math.abs(x) : " + " + x; };
  const mx = function (m) { return m === 1 ? "x" : m === -1 ? "−x" : (m < 0 ? "−" + Math.abs(m) : m) + "x"; };

  // ---- angles in triangles (5.2–5.3) ----
  F["ext-angle"] = function (r) {
    const a = int(r, 25, 95), b = int(r, 20, 150 - a), res = a + b;
    return mk(res,
      ["In triangle ABC, angle A = " + a + "° and angle B = " + b + "°. Side BC is extended to X. Work out the exterior angle ACX.", "An exterior angle of a triangle equals the sum of the two opposite interior angles.", "The angles opposite ACX are A and B.", "Or: find angle C first, then use angles on a straight line.", a + "° + " + b + "° = " + res + "°."],
      ["Trong tam giác ABC, góc A = " + a + "° và góc B = " + b + "°. Kéo dài cạnh BC đến X. Tính góc ngoài ACX.", "Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó.", "Hai góc không kề với ACX là A và B.", "Hoặc: tính góc C trước rồi dùng hai góc kề bù.", a + "° + " + b + "° = " + res + "°."], 0, "°");
  };

  F["ext-third"] = function (r) {
    const i1 = int(r, 20, 100), i2 = int(r, 20, 150 - i1), i3 = 180 - i1 - i2, e1 = 180 - i1, e2 = 180 - i2, res = 180 - i3;
    return mk(res,
      ["Two exterior angles of a triangle are " + e1 + "° and " + e2 + "°. Work out the third exterior angle.", "The exterior angles of any polygon add up to 360°.", "360° − " + e1 + "° − " + e2 + "° = ?", "Check: each interior angle = 180° − its exterior angle.", "360° − " + e1 + "° − " + e2 + "° = " + res + "°."],
      ["Hai góc ngoài của một tam giác là " + e1 + "° và " + e2 + "°. Tính góc ngoài thứ ba.", "Tổng các góc ngoài của mọi đa giác bằng 360°.", "360° − " + e1 + "° − " + e2 + "° = ?", "Kiểm tra: mỗi góc trong = 180° − góc ngoài tương ứng.", "360° − " + e1 + "° − " + e2 + "° = " + res + "°."], 0, "°");
  };

  F["ext-iso"] = function (r) {
    const A = int(r, 10, 80) * 2, base = (180 - A) / 2, res = 180 - base;
    return mk(res,
      ["ABC is isosceles with AB = AC and angle A = " + A + "°. AB is extended beyond B to a point D. Work out the exterior angle CBD.", "The base angles B and C are equal.", "Angle B = (180° − " + A + "°) ÷ 2 = " + base + "°.", "Angles ABC and CBD lie on a straight line.", "Angle CBD = 180° − " + base + "° = " + res + "°."],
      ["Tam giác ABC cân tại A (AB = AC) và góc A = " + A + "°. Kéo dài AB về phía B đến điểm D. Tính góc ngoài CBD.", "Hai góc ở đáy B và C bằng nhau.", "Góc B = (180° − " + A + "°) : 2 = " + base + "°.", "Hai góc ABC và CBD kề bù.", "Góc CBD = 180° − " + base + "° = " + res + "°."], 0, "°");
  };

  F["tri-third"] = function (r) {
    const a = int(r, 20, 110), b = int(r, 15, 160 - a), res = 180 - a - b;
    return mk(res,
      ["You construct a triangle (ASA) with angles of " + a + "° and " + b + "° and the side between them. What is the size of the third angle?", "The angles of a triangle add up to 180°.", a + "° + " + b + "° = " + (a + b) + "°.", "Subtract from 180°.", "180° − " + (a + b) + "° = " + res + "°."],
      ["Em dựng một tam giác (g.c.g) có hai góc " + a + "° và " + b + "° cùng cạnh xen giữa. Góc thứ ba bằng bao nhiêu?", "Tổng ba góc của tam giác bằng 180°.", a + "° + " + b + "° = " + (a + b) + "°.", "Lấy 180° trừ đi.", "180° − " + (a + b) + "° = " + res + "°."], 0, "°");
  };

  // ---- data (6.1–6.2) ----
  F["freq-mean"] = function (r) {
    const N = pick(r, [10, 20, 25, 50]), f = [0, 0, 0, 0];
    let left = N;
    for (let i = 0; i < 3; i++) { f[i] = int(r, 1, Math.max(1, left - (3 - i))); left -= f[i]; }
    f[3] = left;
    if (f[3] < 1) return F["freq-mean"](r);
    const total = f[0] + 2 * f[1] + 3 * f[2] + 4 * f[3], res = clean(total / N);
    const listE = "1 person in " + f[0] + " cars, 2 people in " + f[1] + " cars, 3 people in " + f[2] + " cars and 4 people in " + f[3] + " cars";
    const listV = "1 người: " + f[0] + " xe, 2 người: " + f[1] + " xe, 3 người: " + f[2] + " xe và 4 người: " + f[3] + " xe";
    return mk(res,
      ["Sofia records the number of people in each car: " + listE + ". Find the mean number of people per car.", "Total people = Σ (people × number of cars).", "1 × " + f[0] + " + 2 × " + f[1] + " + 3 × " + f[2] + " + 4 × " + f[3] + " = " + total + ".", "Divide by the number of cars, " + N + ".", total + " ÷ " + N + " = " + E.n(res) + "."],
      ["Sofia ghi số người trên mỗi xe: " + listV + ". Tìm số người trung bình trên một xe.", "Tổng số người = tổng (số người × số xe).", "1 × " + f[0] + " + 2 × " + f[1] + " + 3 × " + f[2] + " + 4 × " + f[3] + " = " + total + ".", "Chia cho số xe là " + N + ".", total + " : " + N + " = " + V.n(res) + "."], TOL, "");
  };

  F["strat-sample"] = function (r) {
    const k = pick(r, [5, 10, 15, 20, 25]), g = [int(r, 3, 12), int(r, 3, 12), int(r, 3, 12)], ask = int(r, 0, 2), yrs = [7, 8, 9];
    const T = (g[0] + g[1] + g[2]) * k, S = g[0] + g[1] + g[2], res = g[ask];
    const parts = g.map(function (x) { return x * k; });
    return mk(res,
      ["A school has " + T + " learners: " + parts[0] + " in Year 7, " + parts[1] + " in Year 8 and " + parts[2] + " in Year 9. A sample of " + S + " learners is chosen in proportion to the number in each year. How many Year " + yrs[ask] + " learners are in the sample?", "Work out the fraction of the school in Year " + yrs[ask] + ".", parts[ask] + "/" + T + " of the learners are in Year " + yrs[ask] + ".", "Take the same fraction of the sample.", parts[ask] + " ÷ " + T + " × " + S + " = " + res + "."],
      ["Một trường có " + T + " học sinh: " + parts[0] + " học sinh lớp 7, " + parts[1] + " học sinh lớp 8 và " + parts[2] + " học sinh lớp 9. Chọn một mẫu " + S + " học sinh theo tỉ lệ số học sinh mỗi khối. Có bao nhiêu học sinh lớp " + yrs[ask] + " trong mẫu?", "Tính phân số học sinh lớp " + yrs[ask] + " trong cả trường.", parts[ask] + "/" + T + " số học sinh là lớp " + yrs[ask] + ".", "Lấy cùng phân số đó của mẫu.", parts[ask] + " : " + T + " × " + S + " = " + res + "."], 0, "");
  };

  // ---- symmetry, circles, solids (8.1–8.3) ----
  F["poly-rot-angle"] = function (r) {
    const n = pick(r, [3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36]), res = 360 / n;
    return mk(res,
      ["What is the smallest angle you can turn a regular polygon with " + n + " sides about its centre so that it fits exactly onto itself?", "A regular polygon with n sides has rotational symmetry of order n.", "A full turn is 360°.", "Share 360° equally between the " + n + " positions.", "360° ÷ " + n + " = " + res + "°."],
      ["Góc nhỏ nhất cần quay một đa giác đều " + n + " cạnh quanh tâm để nó trùng khít với chính nó là bao nhiêu?", "Đa giác đều n cạnh có đối xứng quay bậc n.", "Một vòng quay là 360°.", "Chia đều 360° cho " + n + " vị trí.", "360° : " + n + " = " + res + "°."], 0, "°");
  };

  F["circ"] = function (r) {
    const useR = r() < 0.5, x = pick(r, [int(r, 2, 30), dec1(r, 11, 99)]), d = useR ? clean(2 * x) : x, res = clean(3.14 * d);
    const given = useR ? ["radius", "bán kính"] : ["diameter", "đường kính"];
    return mk(res,
      ["Work out the circumference of a circle with " + given[0] + " " + E.n(x) + " cm. Use π ≈ 3.14.", "Circumference = π × diameter.", useR ? "The diameter is 2 × " + E.n(x) + " = " + E.n(d) + " cm." : "The diameter is " + E.n(d) + " cm.", "Multiply by 3.14.", "C = 3.14 × " + E.n(d) + " = " + E.n(res) + " cm."],
      ["Tính chu vi hình tròn có " + given[1] + " " + V.n(x) + " cm. Lấy π ≈ 3,14.", "Chu vi = π × đường kính.", useR ? "Đường kính là 2 × " + V.n(x) + " = " + V.n(d) + " cm." : "Đường kính là " + V.n(d) + " cm.", "Nhân với 3,14.", "C = 3,14 × " + V.n(d) + " = " + V.n(res) + " cm."], 0.05, "cm");
  };

  F["circ-inverse"] = function (r) {
    const C = pick(r, [int(r, 10, 99), dec1(r, 50, 999)]), wantR = r() < 0.5, d = C / Math.PI, exact = wantR ? d / 2 : d, dp = wantR ? 2 : 1;
    const res = Number(exact.toFixed(dp)), w = wantR ? ["radius", "bán kính"] : ["diameter", "đường kính"];
    return mk(res,
      ["The circumference of a circle is " + E.n(C) + " cm. Use the π button. Work out the " + w[0] + ", correct to " + dp + " decimal place" + (dp > 1 ? "s" : "") + ".", "C = π × d, so d = C ÷ π.", "d = " + E.n(C) + " ÷ π = " + E.n(Number(d.toFixed(4))) + "…", wantR ? "The radius is half the diameter." : "Round to " + dp + " decimal place.", (wantR ? "r = " + E.n(C) + " ÷ π ÷ 2 = " + E.n(Number(exact.toFixed(4))) + "… ≈ " : "d = " + E.n(Number(d.toFixed(4))) + "… ≈ ") + E.n(res) + " cm."],
      ["Chu vi một hình tròn là " + V.n(C) + " cm. Dùng nút π trên máy tính. Tính " + w[1] + ", làm tròn đến " + dp + " chữ số thập phân.", "C = π × d, nên d = C : π.", "d = " + V.n(C) + " : π = " + V.n(Number(d.toFixed(4))) + "…", wantR ? "Bán kính bằng nửa đường kính." : "Làm tròn đến " + dp + " chữ số thập phân.", (wantR ? "r = " + V.n(C) + " : π : 2 = " + V.n(Number(exact.toFixed(4))) + "… ≈ " : "d = " + V.n(Number(d.toFixed(4))) + "… ≈ ") + V.n(res) + " cm."], wantR ? 0.011 : 0.11, "cm");
  };

  const SOLID = { 3: ["triangular", "tam giác"], 4: ["square-based", "vuông"], 5: ["pentagonal", "ngũ giác"], 6: ["hexagonal", "lục giác"], 8: ["octagonal", "bát giác"] };
  F["solid-count"] = function (r) {
    const n = pick(r, [3, 4, 5, 6, 8]), prism = r() < 0.5, what = pick(r, ["faces", "vertices", "edges"]);
    const cnt = prism ? { faces: n + 2, vertices: 2 * n, edges: 3 * n } : { faces: n + 1, vertices: n + 1, edges: 2 * n }, res = cnt[what];
    const nameE = (n === 8 ? "an " : "a ") + SOLID[n][0] + (prism ? " prism" : " pyramid"), nameV = (prism ? "hình lăng trụ đáy " : "hình chóp đáy ") + SOLID[n][1];
    const wv = { faces: "mặt", vertices: "đỉnh", edges: "cạnh" }[what];
    const how = prism ? { faces: ["2 ends + " + n + " rectangles", "2 đáy + " + n + " mặt bên"], vertices: [n + " on each end, 2 ends", "mỗi đáy " + n + " đỉnh, có 2 đáy"], edges: [n + " on each end + " + n + " joining them", "mỗi đáy " + n + " cạnh + " + n + " cạnh bên"] }[what]
      : { faces: ["1 base + " + n + " triangles", "1 đáy + " + n + " mặt tam giác"], vertices: [n + " on the base + 1 at the top", n + " đỉnh ở đáy + 1 đỉnh trên cùng"], edges: [n + " round the base + " + n + " up to the top", n + " cạnh đáy + " + n + " cạnh bên"] }[what];
    return mk(res,
      ["How many " + what + " does " + nameE + " have?", "The base is a polygon with " + n + " sides.", "Count in parts: " + how[0] + ".", "Check with Euler's formula F + V − E = 2.", "Count: " + how[0] + " → " + res + " " + what + "."],
      [nameV.charAt(0).toUpperCase() + nameV.slice(1) + " có bao nhiêu " + wv + "?", "Đáy là đa giác " + n + " cạnh.", "Đếm từng phần: " + how[1] + ".", "Kiểm tra bằng công thức Euler: M + Đ − C = 2.", "Đếm: " + how[1] + " → " + res + " " + wv + "."], 0, "");
  };

  F["euler"] = function (r) {
    const n = int(r, 3, 12), prism = r() < 0.5, Fc = prism ? n + 2 : n + 1, Vc = prism ? 2 * n : n + 1, Ec = prism ? 3 * n : 2 * n, ask = pick(r, ["V", "F", "E"]);
    const res = { V: Vc, F: Fc, E: Ec }[ask];
    const known = { V: [Fc + " faces and " + Ec + " edges", Fc + " mặt và " + Ec + " cạnh", "vertices", "đỉnh", "V = E − F + 2 = " + Ec + " − " + Fc + " + 2"], F: [Vc + " vertices and " + Ec + " edges", Vc + " đỉnh và " + Ec + " cạnh", "faces", "mặt", "F = E − V + 2 = " + Ec + " − " + Vc + " + 2"], E: [Fc + " faces and " + Vc + " vertices", Fc + " mặt và " + Vc + " đỉnh", "edges", "cạnh", "E = F + V − 2 = " + Fc + " + " + Vc + " − 2"] }[ask];
    return mk(res,
      ["A solid with flat faces has " + known[0] + ". How many " + known[2] + " does it have?", "Use Euler's formula: F + V − E = 2.", "Rearrange it to find the missing number.", "Substitute the values you know.", known[4] + " = " + res + "."],
      ["Một khối đa diện có " + known[1] + ". Nó có bao nhiêu " + known[3] + "?", "Dùng công thức Euler: M + Đ − C = 2 (F + V − E = 2).", "Biến đổi để tìm số còn thiếu.", "Thay các giá trị đã biết.", known[4] + " = " + res + "."], 0, "");
  };

  F["plan-area"] = function (r) {
    const k = pick(r, [2, 4, 5, 10]), s1 = int(r, 2, 12), s2 = int(r, 2, 12), L = k * Math.max(s1, s2), W = k * Math.min(s1, s2), H = k * int(r, 1, 8), l = L / k, w = W / k, res = l * w;
    return mk(res,
      ["A cuboid is " + L + " cm long, " + W + " cm wide and " + H + " cm high. You draw its views at a scale of 1 : " + k + ". What is the area of the top view (plan) on your drawing?", "The plan shows the length and the width.", "Divide each real length by " + k + ": " + L + " ÷ " + k + " = " + l + " cm and " + W + " ÷ " + k + " = " + w + " cm.", "Multiply the drawing lengths (not the real ones).", l + " × " + w + " = " + res + " cm²."],
      ["Một hình hộp chữ nhật dài " + L + " cm, rộng " + W + " cm và cao " + H + " cm. Em vẽ các hình chiếu theo tỉ lệ 1 : " + k + ". Diện tích hình chiếu bằng (nhìn từ trên xuống) trên bản vẽ là bao nhiêu?", "Hình nhìn từ trên xuống cho thấy chiều dài và chiều rộng.", "Chia mỗi độ dài thật cho " + k + ": " + L + " : " + k + " = " + l + " cm và " + W + " : " + k + " = " + w + " cm.", "Nhân các độ dài trên bản vẽ (không phải độ dài thật).", l + " × " + w + " = " + res + " cm²."], 0, "cm²");
  };

  // ---- linear graphs (11.1–11.3) ----
  F["line-y"] = function (r) {
    const m = U.nz(r, -6, 8), c = U.nz(r, -15, 15), x = U.nz(r, -6, 20), res = m * x + c, f = "y = " + mx(m) + sgn(c);
    return mk(res,
      ["For the function " + f + ", find y when x = " + E.n(x) + ".", "Replace x with " + (x < 0 ? "(" + E.n(x) + ")" : x) + ".", (m === 1 ? "" : E.n(m) + " × ") + E.p(x) + " = " + E.n(m * x) + ".", c < 0 ? "Then subtract " + Math.abs(c) + "." : "Then add " + c + ".", "y = " + E.n(m * x) + sgn(c) + " = " + E.n(res) + "."],
      ["Với hàm số " + f + ", tìm y khi x = " + V.n(x) + ".", "Thay x bằng " + (x < 0 ? "(" + V.n(x) + ")" : x) + ".", (m === 1 ? "" : V.n(m) + " × ") + V.p(x) + " = " + V.n(m * x) + ".", c < 0 ? "Rồi trừ " + Math.abs(c) + "." : "Rồi cộng " + c + ".", "y = " + V.n(m * x) + sgn(c) + " = " + V.n(res) + "."], 0, "");
  };

  F["x-intercept"] = function (r) {
    const m = pick(r, [2, 3, 4, 5, 10, -2, -4, -5]), c = U.nz(r, -30, 30), res = clean(-c / m);
    if (Math.round(res * 100) / 100 !== res) return F["x-intercept"](r);
    const f = "y = " + mx(m) + sgn(c);
    return mk(res,
      ["The line " + f + " crosses the x-axis. Find the x-coordinate of this point.", "On the x-axis, y = 0.", "Solve 0 = " + mx(m) + sgn(c) + ".", mx(m) + " = " + E.n(-c) + ".", "x = " + E.n(-c) + " ÷ " + E.p(m) + " = " + E.n(res) + "."],
      ["Đường thẳng " + f + " cắt trục hoành. Tìm hoành độ của giao điểm.", "Trên trục hoành, y = 0.", "Giải 0 = " + mx(m) + sgn(c) + ".", mx(m) + " = " + V.n(-c) + ".", "x = " + V.n(-c) + " : " + V.p(m) + " = " + V.n(res) + "."], TOL, "");
  };

  F["empty-time"] = function (r) {
    const tank = r() < 0.5, b = int(r, 2, 9), t = int(r, 3, 15), a = b * t;
    const en = tank ? ["Water flows out of a tank: y = " + a + " − " + b + "x, where y is the number of litres in the tank after x minutes. After how many minutes is the tank empty?", "minutes"] : ["The fuel in a car's tank after t hours is r litres, where r = " + a + " − " + b + "t. After how many hours is the tank empty?", "hours"];
    const vi = tank ? ["Nước chảy ra khỏi một bể: y = " + a + " − " + b + "x, với y là số lít nước trong bể sau x phút. Sau bao nhiêu phút thì bể cạn?", "phút"] : ["Nhiên liệu trong bình xe sau t giờ là r lít, với r = " + a + " − " + b + "t. Sau bao nhiêu giờ thì bình hết nhiên liệu?", "giờ"];
    const v = tank ? "x" : "t";
    return mk(t,
      [en[0], "Empty means the amount is 0.", "Solve 0 = " + a + " − " + b + v + ".", b + v + " = " + a + ".", v + " = " + a + " ÷ " + b + " = " + t + " " + en[1] + "."],
      [vi[0], "Hết nghĩa là lượng còn lại bằng 0.", "Giải 0 = " + a + " − " + b + v + ".", b + v + " = " + a + ".", v + " = " + a + " : " + b + " = " + t + " " + vi[1] + "."], 0, "");
  };

  F["gradient-read"] = function (r) {
    const m = U.nz(r, -9, 9), c = U.nz(r, -12, 12), front = r() < 0.3 && m < 0 && c > 0, askM = r() < 0.5;
    if (Math.abs(m) === 1) return F["gradient-read"](r);
    const f = front ? "y = " + c + " − " + Math.abs(m) + "x" : "y = " + mx(m) + sgn(c), res = askM ? m : c;
    const fV = f;
    return mk(res,
      ["What is the " + (askM ? "gradient" : "y-intercept") + " of the line " + f + "?", "Compare with y = mx + c.", "m is the number multiplying x (with its sign); c is the number on its own.", front ? "Rewrite it as y = " + mx(m) + sgn(c) + "." : "Read off the number you need.", (askM ? "Gradient m = " : "y-intercept c = ") + E.n(res) + "."],
      [(askM ? "Hệ số góc" : "Tung độ gốc") + " của đường thẳng " + fV + " là bao nhiêu?", "So sánh với y = mx + c.", "m là số nhân với x (kể cả dấu); c là số hạng tự do.", front ? "Viết lại thành y = " + mx(m) + sgn(c) + "." : "Đọc số em cần.", (askM ? "Hệ số góc m = " : "Tung độ gốc c = ") + V.n(res) + "."], 0, "");
  };

  // ---- ratio (12.2–12.3) ----
  F["ratio-diff"] = function (r) {
    const a = int(r, 2, 9), b = int(r, 2, 9), c = int(r, 1, 9), k = int(r, 5, 30);
    if (a === b) return F["ratio-diff"](r);
    const T = (a + b + c) * k, big = Math.max(a, b), small = Math.min(a, b), res = (big - small) * k, moreW = b > a;
    return mk(res,
      ["A choir has men, women and children in the ratio " + a + " : " + b + " : " + c + ". There are " + T + " members altogether. How many more " + (moreW ? "women than men" : "men than women") + " are there?", "Total parts: " + a + " + " + b + " + " + c + " = " + (a + b + c) + ".", "One part = " + T + " ÷ " + (a + b + c) + " = " + k + ".", "The difference is " + big + " − " + small + " = " + (big - small) + " parts.", (big - small) + " × " + k + " = " + res + "."],
      ["Một dàn hợp xướng có nam, nữ và trẻ em theo tỉ lệ " + a + " : " + b + " : " + c + ". Có tất cả " + T + " thành viên. Số " + (moreW ? "nữ nhiều hơn số nam" : "nam nhiều hơn số nữ") + " bao nhiêu người?", "Tổng số phần: " + a + " + " + b + " + " + c + " = " + (a + b + c) + ".", "Một phần = " + T + " : " + (a + b + c) + " = " + k + ".", "Chênh lệch là " + big + " − " + small + " = " + (big - small) + " phần.", (big - small) + " × " + k + " = " + res + "."], 0, "");
  };

  F["ratio-angles"] = function (r) {
    const xs = [int(r, 1, 9), int(r, 1, 9), int(r, 1, 9)], s = xs[0] + xs[1] + xs[2], largest = r() < 0.6;
    if (180 % s || new Set(xs).size < 3) return F["ratio-angles"](r);
    const part = 180 / s, pick1 = largest ? Math.max.apply(null, xs) : Math.min.apply(null, xs), res = pick1 * part, w = largest ? ["largest", "lớn nhất"] : ["smallest", "nhỏ nhất"];
    return mk(res,
      ["The angles of a triangle are in the ratio " + xs.join(" : ") + ". Work out the size of the " + w[0] + " angle.", "The angles add up to 180°.", "Total parts: " + xs.join(" + ") + " = " + s + ", so one part = 180° ÷ " + s + " = " + part + "°.", "The " + w[0] + " angle has " + pick1 + " parts.", pick1 + " × " + part + "° = " + res + "°."],
      ["Ba góc của một tam giác tỉ lệ với " + xs.join(" : ") + ". Tính góc " + w[1] + ".", "Tổng ba góc bằng 180°.", "Tổng số phần: " + xs.join(" + ") + " = " + s + ", nên một phần = 180° : " + s + " = " + part + "°.", "Góc " + w[1] + " ứng với " + pick1 + " phần.", pick1 + " × " + part + "° = " + res + "°."], 0, "°");
  };

  const PAIRS = [["boys", "girls", "học sinh nam", "học sinh nữ", "học sinh"], ["cats", "dogs", "con mèo", "con chó", "con vật"], ["red counters", "blue counters", "viên bi đỏ", "viên bi xanh", "viên bi"], ["cashews", "peanuts", "hạt điều", "hạt lạc", "hạt"]];
  F["ratio-frac"] = function (r) {
    const P = pick(r, PAIRS), a = int(r, 1, 9), b = int(r, 1, 11), first = r() < 0.5;
    if (a === b || gcd(a, b) !== 1) return F["ratio-frac"](r);
    const res = fs(first ? a : b, a + b), who = first ? [P[0], P[2]] : [P[1], P[3]];
    return mk(res,
      ["The ratio of " + P[0] + " to " + P[1] + " is " + a + " : " + b + ". What fraction are " + who[0] + "? (Give a fraction in simplest form.)", "Total parts: " + a + " + " + b + " = " + (a + b) + ".", who[0] + " are " + (first ? a : b) + " of the " + (a + b) + " parts.", "Write it as a fraction and simplify.", (first ? a : b) + "/" + (a + b) + (String(res) === (first ? a : b) + "/" + (a + b) ? "" : " = " + res) + "."],
      ["Tỉ lệ " + P[2] + " và " + P[3] + " là " + a + " : " + b + ". Số " + who[1] + " chiếm bao nhiêu phần? (Viết phân số tối giản.)", "Tổng số phần: " + a + " + " + b + " = " + (a + b) + ".", "Số " + who[1] + " là " + (first ? a : b) + " trong " + (a + b) + " phần.", "Viết thành phân số rồi rút gọn.", (first ? a : b) + "/" + (a + b) + (String(res) === (first ? a : b) + "/" + (a + b) ? "" : " = " + res) + "."], 0, "");
  };

  F["ratio-part"] = function (r) {
    const P = pick(r, PAIRS), a = int(r, 1, 9), b = int(r, 1, 9), k = int(r, 2, 15), first = r() < 0.5;
    if (a === b || gcd(a, b) !== 1) return F["ratio-part"](r);
    const T = (a + b) * k, res = (first ? a : b) * k, who = first ? [P[0], P[2]] : [P[1], P[3]];
    return mk(res,
      ["The ratio of " + P[0] + " to " + P[1] + " is " + a + " : " + b + ". There are " + T + " altogether. How many " + who[0] + " are there?", "Total parts: " + a + " + " + b + " = " + (a + b) + ".", "One part = " + T + " ÷ " + (a + b) + " = " + k + ".", who[0] + " are " + (first ? a : b) + " parts.", (first ? a : b) + " × " + k + " = " + res + "."],
      ["Tỉ lệ " + P[2] + " và " + P[3] + " là " + a + " : " + b + ". Có tất cả " + T + " " + P[4] + ". Có bao nhiêu " + who[1] + "?", "Tổng số phần: " + a + " + " + b + " = " + (a + b) + ".", "Một phần = " + T + " : " + (a + b) + " = " + k + ".", "Số " + who[1] + " là " + (first ? a : b) + " phần.", (first ? a : b) + " × " + k + " = " + res + "."], 0, "");
  };

  // ---- probability (13.1–13.2) ----
  F["prob-rest"] = function (r) {
    const a = dec1(r, 1, 7), b = dec1(r, 1, 9 - Math.round(a * 10)), res = clean(1 - a - b);
    if (res <= 0) return F["prob-rest"](r);
    return mk(res,
      ["The probability that a football team wins a match is " + E.n(a) + " and the probability that it draws is " + E.n(b) + ". Work out the probability that the team loses.", "Win, draw and lose are the only outcomes, so their probabilities add up to 1.", E.n(a) + " + " + E.n(b) + " = " + E.n(clean(a + b)) + ".", "Subtract from 1.", "1 − " + E.n(clean(a + b)) + " = " + E.n(res) + "."],
      ["Xác suất một đội bóng thắng là " + V.n(a) + " và xác suất hòa là " + V.n(b) + ". Tính xác suất đội đó thua.", "Thắng, hòa, thua là tất cả các kết quả nên tổng xác suất bằng 1.", V.n(a) + " + " + V.n(b) + " = " + V.n(clean(a + b)) + ".", "Lấy 1 trừ đi.", "1 − " + V.n(clean(a + b)) + " = " + V.n(res) + "."], TOL, "");
  };

  F["dice-sum"] = function (r) {
    const kind = pick(r, ["eq", "ge", "le"]), k = kind === "eq" ? int(r, 3, 11) : kind === "ge" ? int(r, 7, 11) : int(r, 3, 7);
    let n = 0;
    for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) { const s = a + b; if (kind === "eq" ? s === k : kind === "ge" ? s >= k : s <= k) n++; }
    const res = fs(n, 36), cond = kind === "eq" ? ["is " + k, "bằng " + k] : kind === "ge" ? ["is " + k + " or more", "từ " + k + " trở lên"] : ["is " + k + " or less", "không quá " + k];
    return mk(res,
      ["Two fair 6-sided dice are thrown and the scores are added. Find the probability that the total " + cond[0] + ". (Give a fraction in simplest form.)", "Draw a 6 × 6 table of totals: there are 36 equally likely outcomes.", "Count the cells where the total " + cond[0] + ".", "There are " + n + " of them.", n + "/36" + (String(res) === n + "/36" ? "" : " = " + res) + "."],
      ["Gieo hai con xúc xắc 6 mặt cân đối rồi cộng số chấm. Tìm xác suất tổng " + cond[1] + ". (Viết phân số tối giản.)", "Lập bảng 6 × 6 các tổng: có 36 kết quả đồng khả năng.", "Đếm các ô có tổng " + cond[1] + ".", "Có " + n + " ô như vậy.", n + "/36" + (String(res) === n + "/36" ? "" : " = " + res) + "."], 0, "");
  };

  F["exp-prob"] = function (r) {
    const N = pick(r, [50, 80, 100, 120, 200, 250, 400, 500]), s = int(r, 1, 6), c = int(r, Math.round(N / 10), Math.round(N / 4)), res = fs(c, N);
    return mk(res,
      ["A dice is thrown " + N + " times. The score " + s + " comes up " + c + " times. Find the experimental probability of scoring " + s + ". (Fraction or decimal.)", "Experimental probability = number of times it happened ÷ number of trials.", c + " ÷ " + N + ".", "Simplify the fraction (or divide).", c + "/" + N + (String(res) === c + "/" + N ? "" : " = " + res) + " = " + E.n(clean(c / N)) + "."],
      ["Gieo một con xúc xắc " + N + " lần. Mặt " + s + " chấm xuất hiện " + c + " lần. Tìm xác suất thực nghiệm của mặt " + s + " chấm. (Phân số hoặc số thập phân.)", "Xác suất thực nghiệm = số lần xảy ra : số lần thử.", c + " : " + N + ".", "Rút gọn phân số (hoặc thực hiện phép chia).", c + "/" + N + (String(res) === c + "/" + N ? "" : " = " + res) + " = " + V.n(clean(c / N)) + "."], 0, "");
  };

  F["expected"] = function (r) {
    const p = dec1(r, 1, 9), n = pick(r, [50, 100, 200, 300, 400, 500, 600, 800, 1000]), res = clean(p * n), col = pick(r, [["red", "đỏ"], ["blue", "xanh"], ["white", "trắng"]]);
    return mk(res,
      ["A spinner has P(" + col[0] + ") = " + E.n(p) + ". It is spun " + n + " times. How many times would you expect it to land on " + col[0] + "?", "Expected number = probability × number of trials.", E.n(p) + " × " + n + ".", "This is an estimate: the real number can be a little different.", E.n(p) + " × " + n + " = " + E.n(res) + "."],
      ["Một vòng quay có P(" + col[1] + ") = " + V.n(p) + ". Quay " + n + " lần. Em dự đoán vòng quay dừng ở màu " + col[1] + " bao nhiêu lần?", "Số lần dự đoán = xác suất × số lần thử.", V.n(p) + " × " + n + ".", "Đây là ước lượng: số lần thật có thể chênh một chút.", V.n(p) + " × " + n + " = " + V.n(res) + "."], 0, "");
  };

  F["estimate-pop"] = function (r) {
    const n = pick(r, [20, 25, 40, 50]), k = int(r, 2, 6), red = int(r, 2, n - 2), N = n * k, res = red * k;
    return mk(res,
      ["Marcus takes a counter from a bag " + n + " times, replacing it each time, and gets red " + red + " times. The bag holds " + N + " counters. Use his results to estimate how many counters are red.", "Experimental probability of red = " + red + "/" + n + ".", "Use the same fraction of all " + N + " counters.", red + "/" + n + " × " + N + ".", red + " ÷ " + n + " × " + N + " = " + res + "."],
      ["Marcus lấy một viên bi từ túi " + n + " lần, mỗi lần đều trả lại, và được bi đỏ " + red + " lần. Túi có " + N + " viên bi. Dùng kết quả của bạn ấy để ước lượng số bi đỏ.", "Xác suất thực nghiệm của bi đỏ = " + red + "/" + n + ".", "Lấy cùng phân số đó của " + N + " viên bi.", red + "/" + n + " × " + N + ".", red + " : " + n + " × " + N + " = " + res + "."], 0, "");
  };

  // ---- distance, area and volume (15.1–15.4) ----
  F["km-miles"] = function (r) {
    const toMiles = r() < 0.5;
    if (toMiles) {
      const km = 8 * int(r, 2, 40), res = km / 8 * 5;
      return mk(res,
        ["Convert " + km + " km into miles. (Use 8 km ≈ 5 miles.)", "How many lots of 8 km are in " + km + " km?", km + " ÷ 8 = " + (km / 8) + ".", "Each 8 km is about 5 miles.", (km / 8) + " × 5 = " + res + " miles."],
        ["Đổi " + km + " km ra dặm. (Lấy 8 km ≈ 5 dặm.)", km + " km gồm bao nhiêu lần 8 km?", km + " : 8 = " + (km / 8) + ".", "Mỗi 8 km khoảng 5 dặm.", (km / 8) + " × 5 = " + res + " dặm."], 0, "");
    }
    const mi = pick(r, [5 * int(r, 2, 30), int(r, 11, 99)]), res = clean(mi * 1.6);
    return mk(res,
      ["Convert " + mi + " miles into kilometres. (1 mile ≈ 1.6 km.)", "Miles are longer than kilometres, so the number of km is bigger.", "Multiply by 1.6.", mi + " × 1.6 = " + mi + " + " + E.n(clean(mi * 0.6)) + ".", mi + " × 1.6 = " + E.n(res) + " km."],
      ["Đổi " + mi + " dặm ra ki-lô-mét. (1 dặm ≈ 1,6 km.)", "Dặm dài hơn ki-lô-mét nên số km lớn hơn.", "Nhân với 1,6.", mi + " × 1,6 = " + mi + " + " + V.n(clean(mi * 0.6)) + ".", mi + " × 1,6 = " + V.n(res) + " km."], TOL, "km");
  };

  F["para-area"] = function (r) {
    const b = pick(r, [int(r, 3, 20), dec1(r, 15, 99)]), h = pick(r, [int(r, 2, 15), dec1(r, 11, 99)]), res = clean(b * h);
    return mk(res,
      ["A parallelogram has base " + E.n(b) + " m and perpendicular height " + E.n(h) + " m. Find its area.", "Area of a parallelogram = base × perpendicular height.", "Do not use the sloping side.", E.n(b) + " × " + E.n(h) + ".", "A = " + E.n(b) + " × " + E.n(h) + " = " + E.n(res) + " m²."],
      ["Một hình bình hành có đáy " + V.n(b) + " m và chiều cao " + V.n(h) + " m. Tính diện tích.", "Diện tích hình bình hành = đáy × chiều cao.", "Không dùng cạnh xiên.", V.n(b) + " × " + V.n(h) + ".", "S = " + V.n(b) + " × " + V.n(h) + " = " + V.n(res) + " m²."], TOL, "m²");
  };

  F["trap-area"] = function (r) {
    const a = pick(r, [int(r, 2, 15), dec1(r, 11, 99)]), b = pick(r, [int(r, 2, 20), dec1(r, 11, 150)]), h = pick(r, [int(r, 2, 12), dec1(r, 11, 99)]);
    if (a === b) return F["trap-area"](r);
    const s = clean(a + b), res = clean(s / 2 * h);
    return mk(res,
      ["A trapezium has parallel sides " + E.n(a) + " cm and " + E.n(b) + " cm, and perpendicular height " + E.n(h) + " cm. Find its area.", "Area = (a + b) ÷ 2 × h.", E.n(a) + " + " + E.n(b) + " = " + E.n(s) + ".", "Halve it, then multiply by the height.", "A = " + E.n(s) + " ÷ 2 × " + E.n(h) + " = " + E.n(res) + " cm²."],
      ["Một hình thang có hai đáy " + V.n(a) + " cm và " + V.n(b) + " cm, chiều cao " + V.n(h) + " cm. Tính diện tích.", "S = (a + b) : 2 × h.", V.n(a) + " + " + V.n(b) + " = " + V.n(s) + ".", "Chia đôi rồi nhân với chiều cao.", "S = " + V.n(s) + " : 2 × " + V.n(h) + " = " + V.n(res) + " cm²."], TOL, "cm²");
  };

  F["prism-vol"] = function (r) {
    const b = int(r, 2, 15), h = int(r, 2, 15), l = int(r, 3, 40), A = clean(b * h / 2), res = clean(A * l);
    return mk(res,
      ["A triangular prism has a triangular cross-section with base " + b + " cm and perpendicular height " + h + " cm. The prism is " + l + " cm long. Find its volume.", "Volume = area of cross-section × length.", "Triangle area = ½ × " + b + " × " + h + " = " + E.n(A) + " cm².", "Multiply by the length.", E.n(A) + " × " + l + " = " + E.n(res) + " cm³."],
      ["Một lăng trụ tam giác có mặt cắt là tam giác với đáy " + b + " cm và chiều cao " + h + " cm. Lăng trụ dài " + l + " cm. Tính thể tích.", "Thể tích = diện tích mặt cắt × chiều dài.", "Diện tích tam giác = ½ × " + b + " × " + h + " = " + V.n(A) + " cm².", "Nhân với chiều dài.", V.n(A) + " × " + l + " = " + V.n(res) + " cm³."], TOL, "cm³");
  };

  F["prism-height"] = function (r) {
    const b = int(r, 2, 12), h = int(r, 2, 12), l = int(r, 2, 20), Vol = b * h * l / 2;
    if (Vol !== Math.round(Vol)) return F["prism-height"](r);
    return mk(h,
      ["A triangular prism has volume " + Vol + " cm³ and is " + l + " cm long. Its triangular cross-section has base " + b + " cm. Find the perpendicular height of the triangle.", "Volume = area of cross-section × length.", "Cross-section area = " + Vol + " ÷ " + l + " = " + E.n(clean(Vol / l)) + " cm².", "Triangle area = ½ × base × height, so height = 2 × area ÷ base.", "h = 2 × " + E.n(clean(Vol / l)) + " ÷ " + b + " = " + h + " cm."],
      ["Một lăng trụ tam giác có thể tích " + Vol + " cm³ và dài " + l + " cm. Mặt cắt tam giác có đáy " + b + " cm. Tính chiều cao của tam giác.", "Thể tích = diện tích mặt cắt × chiều dài.", "Diện tích mặt cắt = " + Vol + " : " + l + " = " + V.n(clean(Vol / l)) + " cm².", "Diện tích tam giác = ½ × đáy × cao, nên cao = 2 × diện tích : đáy.", "h = 2 × " + V.n(clean(Vol / l)) + " : " + b + " = " + h + " cm."], 0, "cm");
  };

  F["tetra-area"] = function (r) {
    const b = int(r, 3, 20), h = pick(r, [int(r, 3, 18), dec1(r, 25, 175)]), one = clean(b * h / 2), res = clean(4 * one);
    return mk(res,
      ["A triangular-based pyramid has four identical triangular faces. Each triangle has base " + b + " cm and perpendicular height " + E.n(h) + " cm. Find the total surface area.", "Area of one triangle = ½ × base × height.", "½ × " + b + " × " + E.n(h) + " = " + E.n(one) + " cm².", "There are 4 identical faces.", "4 × " + E.n(one) + " = " + E.n(res) + " cm²."],
      ["Một hình chóp tam giác có bốn mặt là các tam giác bằng nhau. Mỗi tam giác có đáy " + b + " cm và chiều cao " + V.n(h) + " cm. Tính diện tích toàn phần.", "Diện tích một tam giác = ½ × đáy × cao.", "½ × " + b + " × " + V.n(h) + " = " + V.n(one) + " cm².", "Có 4 mặt bằng nhau.", "4 × " + V.n(one) + " = " + V.n(res) + " cm²."], TOL, "cm²");
  };
})();
