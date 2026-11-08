// 🎲 Variant families: angles, ratio and proportion, scale and enlargement, area and volume, statistics
// (Math 7 units 5, 12, 14, 15 and 16).
(function () {
  const F = MQ.variants.families, U = MQ.variants.lib, mk = U.mk, int = U.int, pick = U.pick, clean = U.clean;
  const E = U.L.en, V = U.L.vi;
  const TOL = 1e-6;

  // ---- angles (5.1–5.3) ----
  F["quad-fourth"] = function (r) {
    let a = 0, b = 0, c = 0, res = 0;
    while (res < 30 || res > 170) { a = int(r, 6, 17) * 5; b = int(r, 6, 17) * 5; c = int(r, 10, 30) * 5; res = 360 - a - b - c; }
    return mk(res,
      ["Three angles of a quadrilateral are " + a + "°, " + b + "° and " + c + "°. Work out the fourth angle.", "What do the angles of any quadrilateral add up to?", "They add up to 360°.", "Subtract the three known angles from 360°.", "360° − " + a + "° − " + b + "° − " + c + "° = " + res + "°."],
      ["Ba góc của một tứ giác là " + a + "°, " + b + "° và " + c + "°. Tính góc thứ tư.", "Tổng các góc của mọi tứ giác bằng bao nhiêu?", "Tổng bằng 360°.", "Lấy 360° trừ đi ba góc đã biết.", "360° − " + a + "° − " + b + "° − " + c + "° = " + res + "°."]);
  };

  F["angle-cross"] = function (r, o) {
    const a = int(r, 21, 159), opposite = o.kind ? o.kind === "opposite" : r() < 0.5;
    if (a === 90) return F["angle-cross"](r, o);
    const res = opposite ? a : 180 - a;
    return mk(res,
      [opposite ? "Two lines intersect and one angle is " + a + "°. What is the size of the angle opposite to it?" : "Two straight lines cross to make four angles. One of the angles is " + a + "°. Work out the angle next to it.", opposite ? "Vertically opposite angles are equal." : "Angles next to each other on a straight line add up to 180°.", opposite ? "The opposite angle has the same size." : "180° − " + a + "° = ?", "Check with a sketch.", opposite ? "Vertically opposite angles are equal, so the angle is " + a + "°." : "180° − " + a + "° = " + res + "°."],
      [opposite ? "Hai đường thẳng cắt nhau và một góc bằng " + a + "°. Góc đối đỉnh với nó bằng bao nhiêu?" : "Hai đường thẳng cắt nhau tạo thành bốn góc. Một góc bằng " + a + "°. Tính góc kề với nó.", opposite ? "Hai góc đối đỉnh thì bằng nhau." : "Hai góc kề bù có tổng bằng 180°.", opposite ? "Góc đối đỉnh có cùng số đo." : "180° − " + a + "° = ?", "Kiểm tra bằng hình vẽ phác.", opposite ? "Hai góc đối đỉnh bằng nhau nên góc đó bằng " + a + "°." : "180° − " + a + "° = " + res + "°."]);
  };

  // ---- ratio and proportion (12.2–12.3) ----
  F["share-ratio"] = function (r) {
    let a = 0, b = 0;
    while (!a || U.gcd(a, b) !== 1 || a === b) { a = int(r, 1, 7); b = int(r, 1, 7); }
    const part = int(r, 2, 15), total = (a + b) * part, askFirst = r() < 0.5, res = (askFirst ? a : b) * part;
    const P = pick(r, [["Dong", "Chul"], ["Lin", "Kuan"], ["Ethan", "Julie"]]), who = askFirst ? P[0] : P[1];
    return mk(res,
      ["Share $" + total + " between " + P[0] + " and " + P[1] + " in the ratio " + a + " : " + b + ". How much does " + who + " get?", "How many equal parts are there altogether?", a + " + " + b + " = " + (a + b) + " parts. One part = $" + total + " ÷ " + (a + b) + " = $" + part + ".", who + " gets " + (askFirst ? a : b) + " parts.", "1 part = $" + part + ", so " + who + " gets " + (askFirst ? a : b) + " × $" + part + " = $" + res + "."],
      ["Chia $" + total + " cho " + P[0] + " và " + P[1] + " theo tỉ lệ " + a + " : " + b + ". " + who + " nhận được bao nhiêu?", "Tổng cộng có bao nhiêu phần bằng nhau?", a + " + " + b + " = " + (a + b) + " phần. Một phần = $" + total + " : " + (a + b) + " = $" + part + ".", who + " nhận " + (askFirst ? a : b) + " phần.", "1 phần = $" + part + ", nên " + who + " nhận " + (askFirst ? a : b) + " × $" + part + " = $" + res + "."]);
  };

  F["share-ratio3"] = function (r) {
    const a = int(r, 1, 4), b = a + int(r, 1, 3), c = b + int(r, 1, 4), part = int(r, 2, 12), total = (a + b + c) * part, res = c * part;
    return mk(res,
      ["Three friends share $" + total + " in the ratio " + a + " : " + b + " : " + c + ". How much does the friend with the largest share get?", "Add the parts: " + a + " + " + b + " + " + c + ".", "One part = $" + total + " ÷ " + (a + b + c) + " = $" + part + ".", "The largest share is " + c + " parts.", (a + b + c) + " parts, 1 part = $" + part + ", largest = " + c + " × $" + part + " = $" + res + "."],
      ["Ba bạn chia $" + total + " theo tỉ lệ " + a + " : " + b + " : " + c + ". Bạn nhận phần nhiều nhất được bao nhiêu?", "Cộng các phần: " + a + " + " + b + " + " + c + ".", "Một phần = $" + total + " : " + (a + b + c) + " = $" + part + ".", "Phần lớn nhất gồm " + c + " phần.", (a + b + c) + " phần, 1 phần = $" + part + ", phần lớn nhất = " + c + " × $" + part + " = $" + res + "."]);
  };

  F["unitary"] = function (r) {
    const unitG = int(r, 15, 150), a = int(r, 2, 9), b = int(r, 2, 12), total = unitG * a, res = unitG * b;
    if (a === b) return F["unitary"](r);
    const thing = pick(r, [["bananas", "quả chuối", "g"], ["tickets", "vé", "$"], ["eggs", "quả trứng", "g"]]);
    const money = thing[2] === "$", fmt = function (x) { return money ? "$" + x : x + " g"; };
    const qEn = money ? a + " " + thing[0] + " cost " + fmt(total) + ". How much do " + b + " " + thing[0] + " cost?" : "The mass of " + a + " " + thing[0] + " is " + fmt(total) + ". What is the mass of " + b + " " + thing[0] + "?";
    const qVi = money ? a + " " + thing[1] + " giá " + fmt(total) + ". " + b + " " + thing[1] + " giá bao nhiêu?" : a + " " + thing[1] + " nặng " + fmt(total) + ". " + b + " " + thing[1] + " nặng bao nhiêu?";
    return mk(res,
      [qEn, "Find the value for 1 first.", fmt(total) + " ÷ " + a + " = " + fmt(unitG) + " for 1.", "Multiply by " + b + ".", "1 → " + fmt(unitG) + ", so " + b + " → " + b + " × " + unitG + " = " + fmt(res) + "."],
      [qVi, "Tìm giá trị của 1 trước.", fmt(total) + " : " + a + " = " + fmt(unitG) + " cho 1.", "Nhân với " + b + ".", "1 → " + fmt(unitG) + ", nên " + b + " → " + b + " × " + unitG + " = " + fmt(res) + "."], 0, money ? "$" : "g");
  };

  F["unitary-money"] = function (r) {
    const cents = int(r, 105, 1995), a = int(r, 2, 6), b = int(r, 3, 12), total = clean(cents * a / 100), res = clean(cents * b / 100), one = clean(cents / 100);
    if (a === b) return F["unitary-money"](r);
    return mk(res,
      ["Ivan buys " + a + " shirts for $" + E.n(total) + ". How much do " + b + " shirts cost?", "Find the cost of 1 shirt first.", "$" + E.n(total) + " ÷ " + a + " = $" + E.n(one) + ".", "Multiply by " + b + ".", "1 shirt = $" + E.n(one) + ", so " + b + " shirts = " + b + " × $" + E.n(one) + " = $" + E.n(res) + "."],
      ["Ivan mua " + a + " chiếc áo hết $" + V.n(total) + ". " + b + " chiếc áo giá bao nhiêu?", "Tìm giá 1 chiếc áo trước.", "$" + V.n(total) + " : " + a + " = $" + V.n(one) + ".", "Nhân với " + b + ".", "1 chiếc = $" + V.n(one) + ", nên " + b + " chiếc = " + b + " × $" + V.n(one) + " = $" + V.n(res) + "."], 0.001, "$");
  };

  // ---- scale and enlargement (14.1, 14.2, 14.6) ----
  F["map-cm"] = function (r) {
    const k = pick(r, [5, 10, 20, 25, 40, 50]), d = int(r, 2, 15) + pick(r, [0, 0.5]), res = clean(k * d);
    return mk(res,
      ["On a map, 1 cm represents " + k + " km. Two towns are " + E.n(d) + " cm apart on the map. How far apart are they in real life (km)?", "Each centimetre on the map is " + k + " km in real life.", "Multiply the map distance by " + k + ".", E.n(d) + " × " + k + " = ?", E.n(d) + " × " + k + " = " + E.n(res) + " km."],
      ["Trên bản đồ, 1 cm ứng với " + k + " km. Hai thị trấn cách nhau " + V.n(d) + " cm trên bản đồ. Thực tế chúng cách nhau bao nhiêu km?", "Mỗi xăng-ti-mét trên bản đồ ứng với " + k + " km thực tế.", "Nhân khoảng cách trên bản đồ với " + k + ".", V.n(d) + " × " + k + " = ?", V.n(d) + " × " + k + " = " + V.n(res) + " km."], TOL, "km");
  };

  F["map-ratio"] = function (r) {
    const S = pick(r, [20000, 25000, 50000, 100000, 200000]), d = int(r, 2, 20) + pick(r, [0, 0.5]), cm = clean(S * d), res = clean(cm / 100000);
    return mk(res,
      ["A map has scale 1 : " + E.n(S) + ". Two places are " + E.n(d) + " cm apart on the map. Find the real distance in km.", "1 cm on the map is " + E.n(S) + " cm in real life.", E.n(d) + " × " + E.n(S) + " = " + E.n(cm) + " cm.", "1 km = 100 000 cm, so divide by 100 000.", E.n(cm) + " cm ÷ 100 000 = " + E.n(res) + " km."],
      ["Một bản đồ có tỉ lệ 1 : " + V.n(S) + ". Hai địa điểm cách nhau " + V.n(d) + " cm trên bản đồ. Tính khoảng cách thực tế theo km.", "1 cm trên bản đồ ứng với " + V.n(S) + " cm thực tế.", V.n(d) + " × " + V.n(S) + " = " + V.n(cm) + " cm.", "1 km = 100 000 cm, nên chia cho 100 000.", V.n(cm) + " cm : 100 000 = " + V.n(res) + " km."], TOL, "km");
  };

  F["map-real-to-map"] = function (r) {
    const S = pick(r, [10000, 20000, 25000, 50000]), res = int(r, 4, 30), km = clean(res * S / 100000);
    return mk(res,
      ["A map has scale 1 : " + E.n(S) + ". A road is " + E.n(km) + " km long in real life. How long is it on the map, in cm?", "Change the real length to centimetres: 1 km = 100 000 cm.", E.n(km) + " km = " + E.n(km * 100000) + " cm.", "Divide by " + E.n(S) + ".", E.n(km * 100000) + " ÷ " + E.n(S) + " = " + res + " cm."],
      ["Một bản đồ có tỉ lệ 1 : " + V.n(S) + ". Một con đường dài " + V.n(km) + " km ngoài thực tế. Trên bản đồ nó dài bao nhiêu cm?", "Đổi độ dài thực tế sang xăng-ti-mét: 1 km = 100 000 cm.", V.n(km) + " km = " + V.n(km * 100000) + " cm.", "Chia cho " + V.n(S) + ".", V.n(km * 100000) + " : " + V.n(S) + " = " + res + " cm."], 0, "cm");
  };

  F["dist-axis"] = function (r) {
    const horiz = r() < 0.5, c = U.nz(r, -6, 6), a = int(r, -8, 4), res = int(r, 2, 10), b = a + res;
    const P = horiz ? [a, c] : [c, a], Q = horiz ? [b, c] : [c, b], pt = function (L, p) { return "(" + L.n(p[0]) + ", " + L.n(p[1]) + ")"; };
    const sep = function (L) { return L === V ? "; " : ", "; };
    const ptV = function (p) { return "(" + V.n(p[0]) + sep(V) + V.n(p[1]) + ")"; };
    return mk(res,
      ["Find the distance between P" + pt(E, P) + " and Q" + pt(E, Q) + ".", horiz ? "The y-coordinates are the same, so the line PQ is horizontal." : "The x-coordinates are the same, so the line PQ is vertical.", "Find the difference between the other coordinates.", "Careful with negative numbers: count the steps across 0.", E.n(b) + " − " + E.p(a) + " = " + res + "."],
      ["Tính khoảng cách giữa P" + ptV(P) + " và Q" + ptV(Q) + ".", horiz ? "Hai tung độ bằng nhau nên PQ nằm ngang." : "Hai hoành độ bằng nhau nên PQ thẳng đứng.", "Tính hiệu của hai tọa độ còn lại.", "Cẩn thận với số âm: đếm số bước qua 0.", V.n(b) + " − " + V.p(a) + " = " + res + "."]);
  };

  F["enlarge"] = function (r) {
    const w = int(r, 2, 9), h = int(r, 2, 9), k = int(r, 2, 5), form = pick(r, ["side", "perimeter", "factor"]);
    if (w === h) return F["enlarge"](r);
    if (form === "factor") {
      return mk(k,
        ["A " + w + " cm by " + h + " cm rectangle becomes a " + (w * k) + " cm by " + (h * k) + " cm rectangle after an enlargement. What is the scale factor?", "Compare matching sides.", (w * k) + " ÷ " + w + " = ?", "Check with the other side: " + (h * k) + " ÷ " + h + ".", (w * k) + " ÷ " + w + " = " + k + " and " + (h * k) + " ÷ " + h + " = " + k + ", so the scale factor is " + k + "."],
        ["Một hình chữ nhật " + w + " cm × " + h + " cm sau khi phóng to thành " + (w * k) + " cm × " + (h * k) + " cm. Tỉ số phóng to là bao nhiêu?", "So sánh các cạnh tương ứng.", (w * k) + " : " + w + " = ?", "Kiểm tra với cạnh kia: " + (h * k) + " : " + h + ".", (w * k) + " : " + w + " = " + k + " và " + (h * k) + " : " + h + " = " + k + ", nên tỉ số là " + k + "."], 0, "");
    }
    const long = Math.max(w, h), per = 2 * (w + h) * k, res = form === "side" ? long * k : per;
    return mk(res,
      [form === "side" ? "A rectangle is " + w + " cm by " + h + " cm. It is enlarged with scale factor " + k + ". How long is the longer side of the image?" : "A " + w + " cm by " + h + " cm rectangle is enlarged with scale factor " + k + ". Find the perimeter of the image.", "Every length is multiplied by the scale factor " + k + ".", "New sides: " + (w * k) + " cm and " + (h * k) + " cm.", form === "side" ? "Choose the longer one." : "Perimeter = add all four sides.", form === "side" ? long + " × " + k + " = " + res + " cm." : "2 × (" + (w * k) + " + " + (h * k) + ") = " + res + " cm."],
      [form === "side" ? "Một hình chữ nhật " + w + " cm × " + h + " cm được phóng to với tỉ số " + k + ". Cạnh dài hơn của hình mới dài bao nhiêu?" : "Một hình chữ nhật " + w + " cm × " + h + " cm được phóng to với tỉ số " + k + ". Tính chu vi hình mới.", "Mọi độ dài đều nhân với tỉ số " + k + ".", "Các cạnh mới: " + (w * k) + " cm và " + (h * k) + " cm.", form === "side" ? "Chọn cạnh dài hơn." : "Chu vi = tổng bốn cạnh.", form === "side" ? long + " × " + k + " = " + res + " cm." : "2 × (" + (w * k) + " + " + (h * k) + ") = " + res + " cm."], 0, "cm");
  };

  // ---- area and volume (15.1–15.5) ----
  const AREA = [["cm²", "mm²", 100], ["m²", "cm²", 10000], ["ha", "m²", 10000]];
  F["area-convert"] = function (r, o) {
    const u = o.u != null ? AREA[o.u] : pick(r, AREA), down = r() < 0.5, k = u[2];
    const x = down ? pick(r, [int(r, 2, 99), int(r, 11, 99) / 10]) : int(r, 1, 999) * pick(r, [k / 100, k / 10, k]);
    const res = clean(down ? x * k : x / k), from = down ? u[0] : u[1], to = down ? u[1] : u[0];
    return mk(res,
      ["Convert " + E.n(x) + " " + from + " to " + to + ".", "1 " + u[0] + " = " + E.n(k) + " " + u[1] + ".", down ? "Going to a smaller unit, the number gets bigger: multiply by " + E.n(k) + "." : "Going to a bigger unit, the number gets smaller: divide by " + E.n(k) + ".", "Move the digits " + (String(k).length - 1) + " places.", E.n(x) + " " + (down ? "× " : "÷ ") + E.n(k) + " = " + E.n(res) + " " + to + "."],
      ["Đổi " + V.n(x) + " " + from + " sang " + to + ".", "1 " + u[0] + " = " + V.n(k) + " " + u[1] + ".", down ? "Đổi sang đơn vị nhỏ hơn thì số lớn lên: nhân với " + V.n(k) + "." : "Đổi sang đơn vị lớn hơn thì số nhỏ đi: chia cho " + V.n(k) + ".", "Dịch các chữ số " + (String(k).length - 1) + " hàng.", V.n(x) + " " + (down ? "× " : ": ") + V.n(k) + " = " + V.n(res) + " " + to + "."], TOL, to);
  };

  F["rect-ha"] = function (r) {
    const a = int(r, 2, 15) * 50, b = int(r, 2, 20) * 100, m2 = a * b, res = clean(m2 / 10000);
    return mk(res,
      ["A rectangular field is " + a + " m by " + b + " m. Find its area in hectares.", "Area = length × width.", a + " × " + b + " = " + E.n(m2) + " m².", "1 ha = 10 000 m², so divide by 10 000.", E.n(m2) + " m² ÷ 10 000 = " + E.n(res) + " ha."],
      ["Một thửa ruộng hình chữ nhật dài " + a + " m, rộng " + b + " m. Tính diện tích theo héc-ta.", "Diện tích = chiều dài × chiều rộng.", a + " × " + b + " = " + V.n(m2) + " m².", "1 ha = 10 000 m², nên chia cho 10 000.", V.n(m2) + " m² : 10 000 = " + V.n(res) + " ha."], TOL, "ha");
  };

  F["triangle-area"] = function (r) {
    let b = 1, h = 1;
    while ((b * h) % 2) { b = int(r, 3, 20); h = int(r, 3, 20); }
    const res = b * h / 2;
    return mk(res,
      ["A triangle has base " + b + " cm and perpendicular height " + h + " cm. Work out its area.", "Area of a triangle = ½ × base × height.", b + " × " + h + " = " + (b * h) + ".", "Halve it.", "½ × " + b + " × " + h + " = " + res + " cm²."],
      ["Một tam giác có đáy " + b + " cm và chiều cao " + h + " cm. Tính diện tích.", "Diện tích tam giác = ½ × đáy × chiều cao.", b + " × " + h + " = " + (b * h) + ".", "Chia đôi.", "½ × " + b + " × " + h + " = " + res + " cm²."], 0, "cm²");
  };

  F["triangle-height"] = function (r) {
    const b = int(r, 3, 15), res = int(r, 2, 15), A = b * res / 2;
    if (A !== Math.round(A)) return F["triangle-height"](r);
    return mk(res,
      ["A triangle has area " + A + " cm² and base " + b + " cm. What is its perpendicular height?", "Area = ½ × base × height.", A + " = ½ × " + b + " × h, so " + (2 * A) + " = " + b + " × h.", "Divide " + (2 * A) + " by " + b + ".", "h = 2 × " + A + " ÷ " + b + " = " + res + " cm."],
      ["Một tam giác có diện tích " + A + " cm² và đáy " + b + " cm. Chiều cao của nó bằng bao nhiêu?", "Diện tích = ½ × đáy × chiều cao.", A + " = ½ × " + b + " × h, nên " + (2 * A) + " = " + b + " × h.", "Chia " + (2 * A) + " cho " + b + ".", "h = 2 × " + A + " : " + b + " = " + res + " cm."], 0, "cm");
  };

  F["cuboid-volume"] = function (r) {
    const cube = r() < 0.3, a = int(r, 2, 12), b = cube ? a : int(r, 2, 12), c = cube ? a : int(r, 2, 10), res = a * b * c;
    return mk(res,
      [cube ? "Find the volume of a cube with edge " + a + " cm." : "Find the volume of a cuboid " + a + " cm by " + b + " cm by " + c + " cm.", "Volume = length × width × height.", a + " × " + b + " = " + (a * b) + ".", "Multiply by " + c + ".", a + " × " + b + " × " + c + " = " + res + " cm³."],
      [cube ? "Tính thể tích hình lập phương cạnh " + a + " cm." : "Tính thể tích hình hộp chữ nhật " + a + " cm × " + b + " cm × " + c + " cm.", "Thể tích = dài × rộng × cao.", a + " × " + b + " = " + (a * b) + ".", "Nhân với " + c + ".", a + " × " + b + " × " + c + " = " + res + " cm³."], 0, "cm³");
  };

  F["cuboid-missing"] = function (r) {
    const l = int(r, 3, 15), w = int(r, 2, 10), res = int(r, 2, 12), Vv = l * w * res;
    return mk(res,
      ["A cuboid has volume " + Vv + " cm³, length " + l + " cm and width " + w + " cm. What is its height?", "Volume = length × width × height.", l + " × " + w + " = " + (l * w) + ", so " + (l * w) + " × h = " + Vv + ".", "Divide " + Vv + " by " + (l * w) + ".", "h = " + Vv + " ÷ " + (l * w) + " = " + res + " cm."],
      ["Một hình hộp chữ nhật có thể tích " + Vv + " cm³, chiều dài " + l + " cm và chiều rộng " + w + " cm. Chiều cao bằng bao nhiêu?", "Thể tích = dài × rộng × cao.", l + " × " + w + " = " + (l * w) + ", nên " + (l * w) + " × h = " + Vv + ".", "Chia " + Vv + " cho " + (l * w) + ".", "h = " + Vv + " : " + (l * w) + " = " + res + " cm."], 0, "cm");
  };

  F["surface-area"] = function (r) {
    const cube = r() < 0.4, a = int(r, 2, 12), b = cube ? a : int(r, 2, 10), c = cube ? a : int(r, 2, 9);
    const res = 2 * (a * b + a * c + b * c);
    return mk(res,
      [cube ? "Find the surface area of a cube with edge " + a + " cm." : "A cuboid measures " + a + " cm by " + b + " cm by " + c + " cm. Find its surface area.", cube ? "A cube has 6 identical square faces." : "A cuboid has 3 pairs of identical faces.", cube ? "One face: " + a + " × " + a + " = " + (a * a) + " cm²." : "Faces: " + a + "×" + b + " = " + (a * b) + ", " + a + "×" + c + " = " + (a * c) + ", " + b + "×" + c + " = " + (b * c) + ".", cube ? "Multiply by 6." : "Add them and double.", cube ? "6 × " + (a * a) + " = " + res + " cm²." : "2 × (" + (a * b) + " + " + (a * c) + " + " + (b * c) + ") = " + res + " cm²."],
      [cube ? "Tính diện tích toàn phần của hình lập phương cạnh " + a + " cm." : "Một hình hộp chữ nhật " + a + " cm × " + b + " cm × " + c + " cm. Tính diện tích toàn phần.", cube ? "Hình lập phương có 6 mặt là các hình vuông bằng nhau." : "Hình hộp chữ nhật có 3 cặp mặt bằng nhau.", cube ? "Một mặt: " + a + " × " + a + " = " + (a * a) + " cm²." : "Các mặt: " + a + "×" + b + " = " + (a * b) + ", " + a + "×" + c + " = " + (a * c) + ", " + b + "×" + c + " = " + (b * c) + ".", cube ? "Nhân với 6." : "Cộng lại rồi nhân đôi.", cube ? "6 × " + (a * a) + " = " + res + " cm²." : "2 × (" + (a * b) + " + " + (a * c) + " + " + (b * c) + ") = " + res + " cm²."], 0, "cm²");
  };

  F["cube-reverse"] = function (r) {
    const res = int(r, 2, 12), S = 6 * res * res;
    return mk(res,
      ["A cube has surface area " + S + " cm². How long is each edge?", "A cube has 6 equal square faces.", "One face = " + S + " ÷ 6 = " + (res * res) + " cm².", "Which number squared gives " + (res * res) + "?", S + " ÷ 6 = " + (res * res) + " and √" + (res * res) + " = " + res + ", so each edge is " + res + " cm."],
      ["Một hình lập phương có diện tích toàn phần " + S + " cm². Mỗi cạnh dài bao nhiêu?", "Hình lập phương có 6 mặt vuông bằng nhau.", "Một mặt = " + S + " : 6 = " + (res * res) + " cm².", "Số nào bình phương lên được " + (res * res) + "?", S + " : 6 = " + (res * res) + " và √" + (res * res) + " = " + res + ", nên mỗi cạnh dài " + res + " cm."], 0, "cm");
  };

  // ---- statistics (16.3, 16.5, 16.6) ----
  F["stats5"] = function (r, o) {
    const kind = o.kind || pick(r, ["mean", "median", "range"]);
    let xs = [];
    while (!xs.length || xs.reduce(function (s, x) { return s + x; }, 0) % 5) xs = [0, 0, 0, 0, 0].map(function () { return int(r, 5, 60); });
    const sorted = xs.slice().sort(function (a, b) { return a - b; }), sum = xs.reduce(function (s, x) { return s + x; }, 0);
    const res = kind === "mean" ? sum / 5 : kind === "median" ? sorted[2] : sorted[4] - sorted[0];
    const H = {
      mean: [["Add all five values.", "The total is " + sum + ".", "Divide the total by 5.", sum + " ÷ 5 = " + res + "."], ["Cộng cả năm giá trị.", "Tổng là " + sum + ".", "Chia tổng cho 5.", sum + " : 5 = " + res + "."], ["mean", "số trung bình cộng"]],
      median: [["Put the values in order.", sorted.join(", ") + ".", "The median is the middle value.", "In order: " + sorted.join(", ") + ". The middle value is " + res + "."], ["Sắp xếp các giá trị theo thứ tự.", sorted.join(", ") + ".", "Trung vị là giá trị ở giữa.", "Theo thứ tự: " + sorted.join(", ") + ". Giá trị ở giữa là " + res + "."], ["median", "trung vị"]],
      range: [["Find the largest and smallest values.", "Largest " + sorted[4] + ", smallest " + sorted[0] + ".", "Range = largest − smallest.", sorted[4] + " − " + sorted[0] + " = " + res + "."], ["Tìm giá trị lớn nhất và nhỏ nhất.", "Lớn nhất " + sorted[4] + ", nhỏ nhất " + sorted[0] + ".", "Khoảng biến thiên = lớn nhất − nhỏ nhất.", sorted[4] + " − " + sorted[0] + " = " + res + "."], ["range", "khoảng biến thiên"]]
    }[kind];
    return mk(res,
      ["Five values: " + xs.join(", ") + ". Work out the " + H[2][0] + "."].concat(H[0]),
      ["Năm giá trị: " + xs.join(", ") + ". Tính " + H[2][1] + "."].concat(H[1]), 0, "");
  };

  F["mean-missing"] = function (r) {
    const m = int(r, 5, 20), four = [0, 0, 0, 0].map(function () { return int(r, m - 4, m + 4); }), s4 = four.reduce(function (s, x) { return s + x; }, 0), res = 5 * m - s4;
    if (res < 0) return F["mean-missing"](r);
    return mk(res,
      ["The mean of five numbers is " + m + ". Four of them are " + four.join(", ") + ". What is the fifth number?", "Mean × how many = total.", "Total of all five = " + m + " × 5 = " + (5 * m) + ".", "Subtract the four you know.", (5 * m) + " − " + s4 + " = " + res + "."],
      ["Trung bình cộng của năm số là " + m + ". Bốn số là " + four.join(", ") + ". Số thứ năm là bao nhiêu?", "Trung bình cộng × số giá trị = tổng.", "Tổng cả năm số = " + m + " × 5 = " + (5 * m) + ".", "Trừ đi bốn số đã biết.", (5 * m) + " − " + s4 + " = " + res + "."], 0, "");
  };

  F["pie-angle"] = function (r) {
    const total = pick(r, [12, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90]), n = int(r, 1, total - 1), res = 360 * n / total;
    if (res !== Math.round(res)) return F["pie-angle"](r);
    return mk(res,
      [total + " students were asked a question. " + n + " gave the same answer. What angle is their sector in a pie chart?", "The whole pie is 360° for all " + total + " students.", "Each student gets 360° ÷ " + total + " = " + E.n(360 / total) + "°.", "Multiply by " + n + ".", n + "/" + total + " × 360° = " + res + "°."],
      ["Hỏi " + total + " học sinh một câu. Có " + n + " em trả lời giống nhau. Hình quạt của nhóm này trong biểu đồ tròn có góc bao nhiêu độ?", "Cả hình tròn là 360° cho tất cả " + total + " học sinh.", "Mỗi học sinh ứng với 360° : " + total + " = " + V.n(360 / total) + "°.", "Nhân với " + n + ".", n + "/" + total + " × 360° = " + res + "°."]);
  };

  F["pie-read"] = function (r) {
    const total = pick(r, [24, 36, 40, 60, 72, 90, 120, 180]), res = int(r, 1, total - 1), ang = 360 * res / total;
    if (ang !== Math.round(ang)) return F["pie-read"](r);
    return mk(res,
      ["A pie chart shows " + total + " students. One sector is " + ang + "°. How many students does it show?", "The whole pie (360°) is " + total + " students.", "The sector is " + ang + "/360 of the pie.", "Work out " + ang + "/360 of " + total + ".", ang + "/360 × " + total + " = " + res + " students."],
      ["Một biểu đồ tròn biểu diễn " + total + " học sinh. Một hình quạt có góc " + ang + "°. Hình quạt đó ứng với bao nhiêu học sinh?", "Cả hình tròn (360°) là " + total + " học sinh.", "Hình quạt chiếm " + ang + "/360 hình tròn.", "Tính " + ang + "/360 của " + total + ".", ang + "/360 × " + total + " = " + res + " học sinh."]);
  };

  F["venn-both"] = function (r) {
    const both = int(r, 2, 15), onlyA = int(r, 2, 20), onlyB = int(r, 2, 20), none = int(r, 0, 10);
    const A = onlyA + both, B = onlyB + both, total = onlyA + onlyB + both + none;
    return mk(both,
      [total + " people: " + A + " like tea, " + B + " like coffee, " + none + " like neither. How many like both?", "People who like at least one drink: " + total + " − " + none + " = " + (total - none) + ".", "Adding " + A + " + " + B + " counts the 'both' group twice.", "Both = " + A + " + " + B + " − " + (total - none) + ".", A + " + " + B + " − " + (total - none) + " = " + both + "."],
      [total + " người: " + A + " người thích trà, " + B + " người thích cà phê, " + none + " người không thích loại nào. Bao nhiêu người thích cả hai?", "Số người thích ít nhất một loại: " + total + " − " + none + " = " + (total - none) + ".", "Cộng " + A + " + " + B + " thì nhóm 'cả hai' bị đếm hai lần.", "Cả hai = " + A + " + " + B + " − " + (total - none) + ".", A + " + " + B + " − " + (total - none) + " = " + both + "."]);
  };
})();
