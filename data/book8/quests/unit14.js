// 🚀 Extension quests — Math 8, unit 14 (Position and transformation). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  // an answer rounded to 2+ decimal places is within half a hundredth of the exact value
  const ROUND2 = 0.005 + 1e-9;
  // 14.6-x1: the object P of P'(7, 13) under an enlargement from C(1, 1) with scale factor k
  const objX = function (k) { return 1 + 6 / k; };
  const objY = function (k) { return 1 + 12 / k; };
  const EPS = 1e-6;
  const near = function (a, b) { return Math.abs(a - b) < EPS; };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const round6 = function (x) { return Math.round(x * 1e6) / 1e6; };
  // number for display: Unicode minus; decimal comma in Vietnamese
  const fmt = function (x, lang) {
    const s = String(round6(x)).replace("-", "−");
    return lang === "en" ? s : s.replace(".", ",");
  };
  const pt = function (x, y, lang) { return "(" + fmt(x, lang) + ", " + fmt(y, lang) + ")"; };
  // three-figure bearing, e.g. 65 → "065°"
  const brg = function (d) { return ("00" + d).slice(-3) + "°"; };
  // angle ABC when B is on bearing p from A and C is on bearing q from B
  const angleABC = function (p, q) {
    const back = (p + 180) % 360;
    const d = Math.abs(q - back);
    return Math.min(d, 360 - d);
  };
  // quadrant 1–4, or 0 when the point is on an axis
  const quad = function (x, y) {
    if (x === 0 || y === 0) return 0;
    return x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3);
  };
  // reflection in y = m·x with m = 1 or −1
  const reflX = function (f) { return f.m === 1 ? f.y : -f.y; };
  const enlX = function (f) { return f.a + f.k * (f.x - f.a); };
  const enlY = function (f) { return f.b + f.k * (f.y - f.b); };

  window.GAME_QUESTS.push({
    unit: 14,
    sections: {
      "14.1": [
        {
          id: "14.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Góc phương vị của B từ A (°)", "Góc phương vị của C từ B (°)"],
          ask: "Một người đi từ A đến B rồi từ B đến C. Chọn hai góc phương vị (số nguyên độ, từ 0 đến 359) sao cho góc ABC bằng đúng 100°.",
          why: "Muốn tính góc giữa hai chặng đường, em phải quay lại hướng về A tại B (cộng hoặc trừ 180°) — đó là chỗ hai đường Bắc song song giúp em.",
          check: function (v) { return inRange(v[0], 0, 359) && inRange(v[1], 0, 359) && angleABC(v[0], v[1]) === 100; },
          challenge: function (v) { return v[0] <= 90 && v[1] <= 90; },
          challengeText: "Cả hai góc phương vị đều không quá 090°.",
          kinds: [
            { id: "wrap", text: "phải cộng hoặc trừ 360° (đi qua hướng Bắc)", test: function (v) { return Math.abs(v[1] - v[0]) !== 80; } },
            { id: "right", text: "rẽ phải 80°", test: function (v) { return v[1] - v[0] === 80; } },
            { id: "left", text: "rẽ trái 80°", test: function () { return true; } }
          ],
          kindSamples: [["300", "20"], ["20", "300"], ["65", "145"], ["10", "90"], ["145", "65"]],
          sample: { values: ["65", "145"] }
        },
        {
          id: "14.1-x2", type: "whatif", base: 307,
          ask: "Ví dụ: góc phương vị của B từ A là 127°, nên góc phương vị của A từ B là 307°. Nếu B nằm ở phía ngược lại, góc phương vị của B từ A là 307°, thì góc phương vị của A từ B là bao nhiêu độ?",
          why: "Hướng đi và hướng quay về luôn chênh nhau đúng 180° — và góc phương vị phải nằm trong khoảng từ 000° đến 360°.",
          answer: function () { return 307 - 180; },
          reasons: [
            "Góc phương vị lớn hơn 180° nên phải trừ 180°: 307° − 180° = 127°.",
            "Hướng quay về luôn là cộng 180°: 307° + 180° = 487°.",
            "Hướng quay về là phần còn lại của vòng tròn: 360° − 307° = 053°."
          ],
          reason: 0,
          sample: { guess: "127", reason: 0 }
        },
        {
          id: "14.1-x3", type: "make",
          ask: "Tự ra đề: thị trấn B nằm theo góc phương vị p từ A, thị trấn C nằm theo góc phương vị q từ B (p, q nguyên từ 0 đến 359; A, B, C không thẳng hàng). Đề sẽ hỏi góc ABC.",
          why: "Tự chọn hai hướng giúp em thấy lúc nào góc ABC nhọn, vuông hay tù — kỹ năng cần cho bài toán đường đi và hàng hải.",
          template: "B theo hướng p từ A; C theo hướng q từ B",
          fields: [{ id: "p", label: "Góc phương vị của B từ A (p)" }, { id: "q", label: "Góc phương vị của C từ B (q)" }],
          valid: function (f) {
            if (!inRange(f.p, 0, 359) || !inRange(f.q, 0, 359)) return false;
            const g = angleABC(f.p, f.q);
            return g > 0 && g < 180;
          },
          solve: function (f) { return angleABC(f.p, f.q); },
          render: function (f, lang) {
            return lang === "en"
              ? "Town B is on a bearing of " + brg(f.p) + " from town A. Town C is on a bearing of " + brg(f.q) + " from town B. Work out the size of angle ABC in degrees."
              : "Thị trấn B nằm theo góc phương vị " + brg(f.p) + " từ thị trấn A. Thị trấn C nằm theo góc phương vị " + brg(f.q) + " từ thị trấn B. Tính góc ABC (độ).";
          },
          criteria: [
            { id: "obtuse", text: "Góc ABC là góc tù", test: function (f) { return angleABC(f.p, f.q) > 90; } },
            { id: "right", text: "Góc ABC là góc vuông", test: function (f) { return angleABC(f.p, f.q) === 90; } },
            { id: "big", text: "Góc phương vị của B từ A lớn hơn 180°", test: function (f) { return f.p > 180; } },
            { id: "less", text: "Góc phương vị thứ hai nhỏ hơn góc phương vị thứ nhất", test: function (f) { return f.q < f.p; } },
            { id: "sharp", text: "Góc ABC nhỏ hơn 45° (gần như quay ngược lại)", test: function (f) { return angleABC(f.p, f.q) < 45; } }
          ],
          sample: { fields: { p: "200", q: "110" } }
        }
      ],
      "14.2": [
        {
          id: "14.2-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hoành độ của A", "Tung độ của A"],
          ask: "Đoạn thẳng AB có đầu mút B(5, 1). Trung điểm M của AB nằm trên đường thẳng y = x (hai tọa độ của M bằng nhau). Tìm các điểm A có thể.",
          why: "Trung điểm là trung bình của từng tọa độ — đặt điều kiện lên M giúp em đi ngược lại tìm đầu mút còn lại.",
          check: function (v) { return near((v[0] + 5) / 2, (v[1] + 1) / 2) && !(near(v[0], 5) && near(v[1], 1)); },
          challenge: function (v) { return (v[0] + 5) / 2 < 0 && (v[1] + 1) / 2 < 0; },
          challengeText: "Trung điểm M nằm trong góc phần tư thứ ba.",
          kinds: [
            { id: "frac", text: "tọa độ không nguyên", test: function (v) { return !isInt(v[0]) || !isInt(v[1]); } },
            { id: "left", text: "A bên trái trục y (hoành độ âm)", test: function (v) { return v[0] < 0; } },
            { id: "right", text: "A có hoành độ không âm", test: function () { return true; } }
          ],
          kindSamples: [["1", "5"], ["3", "7"], ["-2", "2"], ["-10", "-6"], ["0.5", "4.5"]],
          sample: { values: ["1", "5"] }
        },
        {
          id: "14.2-x2", type: "ways",
          ask: "Trung điểm của đoạn thẳng AB là M(3, −2), đầu mút A(−5, 4). Tìm hoành độ của đầu mút B. Giải theo nhiều cách.",
          why: "Biết trung điểm và một đầu mút là tìm được đầu kia — có nhiều cách nghĩ, chọn cách nào em cũng tự kiểm tra được bằng cách khác.",
          strategies: [
            { id: "s1", name: "Dùng công thức: hoành độ B = 2 × hoành độ M − hoành độ A", steps: [
              { ask: "2 × hoành độ của M bằng bao nhiêu?", answer: 6 }, { answer: 11 }] },
            { id: "s2", name: "Đi từ A đến M, rồi đi tiếp thêm một quãng y hệt", steps: [
              { ask: "Từ A đến M, hoành độ thay đổi bao nhiêu (tăng là dương)?", answer: 8 }, { answer: 11 }] },
            { id: "s3", name: "Dịch hình cho M về gốc O, dùng đối xứng qua O, rồi dịch trở lại", steps: [
              { ask: "Dịch để M về O: A trở thành điểm có hoành độ bao nhiêu?", answer: -8 },
              { ask: "Ảnh của B lúc đó đối xứng với A qua O: hoành độ là bao nhiêu?", answer: 8 }, { answer: 11 }] }
          ],
          sample: { strategy: "s1", steps: ["6", "11"] }
        },
        {
          id: "14.2-x3", type: "whatif", base: 2,
          ask: "Ví dụ: A(−1, 3) và B(5, 9) có trung điểm M(2, 6). Nếu B dịch sang phải 8 đơn vị thành B(13, 9) thì hoành độ của trung điểm mới là bao nhiêu?",
          why: "Trung điểm chỉ dịch bằng một nửa quãng dịch của một đầu mút — điều này giúp em ước lượng nhanh và phát hiện đáp số sai.",
          answer: function () { return (-1 + 13) / 2; },
          reasons: [
            "Trung điểm là trung bình hai hoành độ, nên nó chỉ dịch một nửa của 8: 2 + 4 = 6.",
            "B dịch 8 thì trung điểm cũng dịch 8: 2 + 8 = 10.",
            "A không đổi nên trung điểm cũng không đổi: vẫn là 2."
          ],
          reason: 0,
          sample: { guess: "6", reason: 0 }
        }
      ],
      "14.3": [
        {
          id: "14.3-x1", type: "many", arity: 2, ordered: true,
          labels: ["Số trên của vectơ (ngang)", "Số dưới của vectơ (đứng)"],
          ask: "Tam giác T có các đỉnh (1, 1), (3, 1) và (1, 3). Tìm vectơ cột (a, b) với a, b nguyên để ảnh của T nằm hoàn toàn trong góc phần tư thứ ba (mọi tọa độ của các đỉnh ảnh đều âm).",
          why: "Cộng vectơ vào từng đỉnh là cách tìm ảnh nhanh nhất — và chỉ cần kiểm tra đỉnh “xa nhất” là biết cả hình đã vào đúng chỗ chưa.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && 3 + v[0] < 0 && 3 + v[1] < 0; },
          challenge: function (v) {
            return (v[0] === -5 && v[1] === -5) || (v[0] === -7 && v[1] === -5) || (v[0] === -5 && v[1] === -7);
          },
          challengeText: "Một đỉnh của ảnh nằm đúng tại điểm (−4, −4).",
          kinds: [
            { id: "diag", text: "sang trái và xuống bằng nhau (a = b)", test: function (v) { return v[0] === v[1]; } },
            { id: "across", text: "sang trái nhiều hơn xuống", test: function (v) { return v[0] < v[1]; } },
            { id: "down", text: "xuống nhiều hơn sang trái", test: function () { return true; } }
          ],
          kindSamples: [["-4", "-4"], ["-6", "-4"], ["-7", "-5"], ["-4", "-6"], ["-5", "-7"]],
          sample: { values: ["-6", "-4"] }
        },
        {
          id: "14.3-x2", type: "whatif", base: 2,
          ask: "Ví dụ: tịnh tiến Q(−3, 4) theo vectơ (5, −2) được Q'(2, 2). Nếu tịnh tiến Q theo vectơ gấp đôi, (10, −4), thì tung độ của ảnh là bao nhiêu?",
          why: "Vectơ cho biết điểm dịch bao xa tính từ điểm ban đầu — nhầm điểm xuất phát là lỗi hay gặp khi làm nhiều phép tịnh tiến.",
          answer: function () { return 4 - 4; },
          reasons: [
            "Cộng số dưới của vectơ mới vào tung độ của Q: 4 + (−4) = 0.",
            "Vectơ gấp đôi nên tọa độ ảnh cũng gấp đôi: 2 × 2 = 4.",
            "Ảnh mới dịch thêm −4 tính từ Q': 2 − 4 = −2."
          ],
          reason: 0,
          sample: { guess: "0", reason: 0 }
        },
        {
          id: "14.3-x3", type: "pattern",
          ask: "Một điểm xuất phát tại gốc O(0, 0) và được tịnh tiến liên tiếp theo các vectơ (2, 1), (2, 3), (2, 5), (2, 7), … (số dưới là các số lẻ liên tiếp). Tung độ sau 1, 2, 3 lần là 1, 4, 9, … Tìm tung độ sau 5, 10, 12 lần và quy luật theo n.",
          why: "Nhiều phép tịnh tiến liên tiếp gộp thành một bằng cách cộng các vectơ — ở đây tổng các số lẻ tạo ra số chính phương.",
          seq: [1, 4, 9],
          term: function (n) { return n * n; },
          askN: [5, 10, 12],
          sample: { terms: { 5: "25", 10: "100", 12: "144" }, rule: "n^2" }
        }
      ],
      "14.4": [
        {
          id: "14.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hoành độ của P", "Tung độ của P"],
          ask: "Phản xạ điểm P qua đường thẳng y = x được ảnh P'. Đoạn PP' có hai đầu mút với hoành độ chênh nhau đúng 6. Tìm các điểm P có thể.",
          why: "Phản xạ qua y = x đổi chỗ hai tọa độ — biết quy tắc này em tính ngay được ảnh mà không cần vẽ.",
          check: function (v) { return near(Math.abs(v[0] - v[1]), 6); },
          challenge: function (v) { return v[1] < 0 && v[0] > 0; },
          challengeText: "Ảnh P' nằm trong góc phần tư thứ hai.",
          kinds: [
            { id: "frac", text: "tọa độ không nguyên", test: function (v) { return !isInt(v[0]) || !isInt(v[1]); } },
            { id: "below", text: "P nằm dưới đường y = x", test: function (v) { return v[0] > v[1]; } },
            { id: "above", text: "P nằm trên đường y = x", test: function () { return true; } }
          ],
          kindSamples: [["7", "1"], ["10", "4"], ["1", "7"], ["2", "8"], ["0.5", "6.5"]],
          sample: { values: ["7", "1"] }
        },
        {
          id: "14.4-x2", type: "ways",
          ask: "Phản xạ điểm (−3, 5) qua đường thẳng nằm ngang y = 1,5. Tìm tung độ của ảnh. Giải theo nhiều cách.",
          why: "Đường gương không phải lúc nào cũng là trục tọa độ hay số nguyên — có cách đếm, cách dùng công thức và cách đưa về trục x.",
          strategies: [
            { id: "s1", name: "Đếm khoảng cách tới đường gương", steps: [
              { ask: "Điểm nằm cao hơn đường gương bao nhiêu đơn vị?", answer: 3.5 }, { answer: -2 }] },
            { id: "s2", name: "Dùng công thức y' = 2b − y", steps: [
              { ask: "2 × 1,5 bằng bao nhiêu?", answer: 3 }, { answer: -2 }] },
            { id: "s3", name: "Dịch xuống cho đường gương trùng trục x, phản xạ, rồi dịch lên lại", steps: [
              { ask: "Dịch mọi thứ xuống 1,5: tung độ của điểm là bao nhiêu?", answer: 3.5 },
              { ask: "Phản xạ qua trục x: tung độ thành bao nhiêu?", answer: -3.5 }, { answer: -2 }] }
          ],
          sample: { strategy: "s2", steps: ["3", "-2"] }
        },
        {
          id: "14.4-x3", type: "make",
          ask: "Tự ra đề: phản xạ điểm (x, y) qua đường chéo y = m·x, với m = 1 (đường y = x) hoặc m = −1 (đường y = −x); x, y nguyên từ −10 đến 10. Đề sẽ hỏi hoành độ của ảnh.",
          why: "Tự chọn điểm và gương chéo giúp em nhớ chắc hai quy tắc (x, y) → (y, x) và (x, y) → (−y, −x).",
          template: "Phản xạ (x, y) qua y = m·x",
          fields: [{ id: "x", label: "Hoành độ của điểm (x)" }, { id: "y", label: "Tung độ của điểm (y)" }, { id: "m", label: "m (1 hoặc −1)" }],
          valid: function (f) { return inRange(f.x, -10, 10) && inRange(f.y, -10, 10) && (f.m === 1 || f.m === -1); },
          solve: function (f) { return reflX(f); },
          render: function (f, lang) {
            const line = f.m === 1 ? "y = x" : "y = −x";
            return lang === "en"
              ? "Reflect the point " + pt(f.x, f.y, lang) + " in the line " + line + ". Find the x-coordinate of the image."
              : "Phản xạ điểm " + pt(f.x, f.y, lang) + " qua đường thẳng " + line + ". Tìm hoành độ của ảnh.";
          },
          criteria: [
            { id: "on", text: "Điểm nằm trên đường gương (ảnh trùng với điểm)", test: function (f) { return f.m === 1 ? f.x === f.y : f.x === -f.y; } },
            { id: "neg", text: "Đường gương là y = −x", test: function (f) { return f.m === -1; } },
            { id: "cross", text: "Điểm và ảnh nằm ở hai phía của trục y", test: function (f) { return f.x * reflX(f) < 0; } },
            { id: "axis", text: "Điểm nằm trên một trục tọa độ (không phải gốc O)", test: function (f) { return (f.x === 0) !== (f.y === 0); } },
            { id: "far", text: "Hoành độ của điểm và của ảnh chênh nhau hơn 10", test: function (f) { return Math.abs(f.x - reflX(f)) > 10; } }
          ],
          sample: { fields: { x: "7", y: "4", m: "-1" } }
        }
      ],
      "14.5": [
        {
          id: "14.5-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hoành độ của tâm quay", "Tung độ của tâm quay"],
          ask: "Quay điểm P(4, 5) một góc 90° cùng chiều kim đồng hồ quanh tâm C (tọa độ nguyên) thì ảnh P' nằm trên trục x. Tìm các tâm quay C có thể.",
          why: "Quay quanh tâm bất kỳ = lấy vectơ từ tâm tới điểm, quay vectơ đó, rồi cộng lại vào tâm — đi ngược cách này để tìm tâm.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] + v[1] - 4 === 0; },
          challenge: function (v) { return v[0] + 5 - v[1] < 0; },
          challengeText: "Ảnh P' nằm bên trái trục y.",
          kinds: [
            { id: "axis", text: "tâm nằm trên trục tọa độ", test: function (v) { return v[0] === 0 || v[1] === 0; } },
            { id: "q2", text: "tâm trong góc phần tư thứ hai", test: function (v) { return v[0] < 0; } },
            { id: "q4", text: "tâm trong góc phần tư thứ tư", test: function (v) { return v[1] < 0; } },
            { id: "q1", text: "tâm trong góc phần tư thứ nhất", test: function () { return true; } }
          ],
          kindSamples: [["0", "4"], ["4", "0"], ["-1", "5"], ["-3", "7"], ["6", "-2"]],
          sample: { values: ["0", "4"] }
        },
        {
          id: "14.5-x2", type: "whatif", base: -4,
          ask: "Ví dụ: quay (3, −4) quanh O một góc 90° cùng chiều kim đồng hồ được (−4, −3), hoành độ là −4. Nếu thay bằng phép quay 270° ngược chiều kim đồng hồ quanh O thì hoành độ của ảnh là bao nhiêu?",
          why: "Biết hai phép quay nào cho cùng một kết quả giúp em chọn cách tính ngắn nhất và tự kiểm tra.",
          answer: function () { return -4; },
          reasons: [
            "Quay 270° ngược chiều kim đồng hồ đến cùng vị trí với quay 90° cùng chiều, nên ảnh vẫn là (−4, −3).",
            "Đổi chiều quay thì ảnh đổi sang (−y, x) = (4, 3), hoành độ là 4.",
            "270° = 180° + 90°, chỉ cần quay 180°: (−3, 4), hoành độ là −3."
          ],
          reason: 0,
          sample: { guess: "-4", reason: 0 }
        },
        {
          id: "14.5-x3", type: "ways",
          ask: "Quay điểm P(−1, 4) một góc 90° ngược chiều kim đồng hồ quanh tâm C(2, 1). Tìm tung độ của ảnh. Giải theo nhiều cách.",
          why: "Tâm quay khác gốc O là trường hợp hay gặp — dùng vectơ hoặc đếm ô quanh tâm đều đưa em đến cùng kết quả.",
          strategies: [
            { id: "s1", name: "Dùng vectơ từ tâm C đến P", steps: [
              { ask: "Vectơ CP = (p, q). Số trên p bằng bao nhiêu?", answer: -3 },
              { ask: "Số dưới q bằng bao nhiêu?", answer: 3 },
              { ask: "Quay 90° ngược chiều: (p, q) → (−q, p). Số dưới của vectơ mới là bao nhiêu?", answer: -3 }, { answer: -2 }] },
            { id: "s2", name: "Đếm ô quanh tâm C", steps: [
              { ask: "P nằm bên trái C mấy ô?", answer: 3 },
              { ask: "Sau khi quay 90° ngược chiều, hướng “sang trái” thành hướng “xuống dưới”. Ảnh nằm dưới C mấy ô?", answer: 3 }, { answer: -2 }] }
          ],
          sample: { strategy: "s2", steps: ["3", "3", "-2"] }
        }
      ],
      "14.6": [
        {
          id: "14.6-x1", type: "many", arity: 3, ordered: true,
          labels: ["Hệ số k", "Hoành độ của P", "Tung độ của P"],
          ask: "Phép phóng to tâm C(1, 1), hệ số k (k > 1) biến điểm P thành P'(7, 13). Tìm các bộ (k, hoành độ của P, tung độ của P). Tọa độ không chia hết thì làm tròn đến ít nhất 2 chữ số sau dấu phẩy.",
          why: "Vectơ từ tâm tới ảnh bằng k lần vectơ từ tâm tới vật — chia ngược cho k là tìm được vật.",
          check: function (v) { return v[0] > 1 && Math.abs(v[1] - objX(v[0])) <= ROUND2 && Math.abs(v[2] - objY(v[0])) <= ROUND2; },
          canon: function (v) { return [v[0], objX(v[0]), objY(v[0])]; },
          challenge: function (v) { return !isInt(v[0]) && isInt(v[1]) && isInt(v[2]); },
          challengeText: "Hệ số k không phải số nguyên nhưng P vẫn có tọa độ nguyên.",
          kinds: [
            { id: "fracK", text: "k không nguyên", test: function (v) { return !isInt(v[0]); } },
            { id: "intP", text: "k nguyên, P có tọa độ nguyên", test: function (v) { return isInt(v[1]) && isInt(v[2]); } },
            { id: "fracP", text: "k nguyên, P có tọa độ không nguyên", test: function () { return true; } }
          ],
          kindSamples: [["2", "4", "7"], ["3", "3", "5"], ["4", "2.5", "4"], ["5", "2.2", "3.4"], ["1.5", "5", "9"]],
          sample: { values: ["2", "4", "7"] }
        },
        {
          id: "14.6-x2", type: "whatif", base: 4,
          ask: "Ví dụ: phóng to một tam giác với tâm C(1, 1) và hệ số 3, đỉnh (2, 2) có ảnh (4, 4). Tam giác còn có đỉnh (1, 5) nằm thẳng phía trên tâm. Ảnh của đỉnh (1, 5) có hoành độ bao nhiêu?",
          why: "Điểm nằm trên đường thẳng đứng qua tâm thì ảnh vẫn nằm trên đường đó — nhân vectơ từ tâm, đừng nhân thẳng tọa độ.",
          answer: function () { return 1 + 3 * (1 - 1); },
          reasons: [
            "Vectơ từ C đến (1, 5) là (0, 4); nhân 3 được (0, 12), nên hoành độ vẫn là 1.",
            "Phóng to hệ số 3 thì nhân hoành độ với 3: 1 × 3 = 3.",
            "Hoành độ trừ hoành độ tâm được 0, nhân 3 vẫn là 0, nên hoành độ ảnh là 0."
          ],
          reason: 0,
          sample: { guess: "1", reason: 0 }
        },
        {
          id: "14.6-x3", type: "make",
          ask: "Tự ra đề: phóng to điểm P(x, y) với tâm C(a, b) và hệ số k (x, y, a, b nguyên từ −10 đến 10; P khác C; k lớn hơn 1, không quá 5). Đề sẽ hỏi hoành độ của ảnh.",
          why: "Tự chọn tâm, điểm và hệ số giúp em thấy công thức “tâm + k × (điểm − tâm)” đúng ở mọi vị trí.",
          template: "P(x, y), tâm C(a, b), hệ số k",
          fields: [
            { id: "x", label: "Hoành độ của P (x)" }, { id: "y", label: "Tung độ của P (y)" },
            { id: "a", label: "Hoành độ của tâm (a)" }, { id: "b", label: "Tung độ của tâm (b)" }, { id: "k", label: "Hệ số k" }
          ],
          valid: function (f) {
            return inRange(f.x, -10, 10) && inRange(f.y, -10, 10) && inRange(f.a, -10, 10) && inRange(f.b, -10, 10) &&
              f.k > 1 && f.k <= 5 && !(f.x === f.a && f.y === f.b);
          },
          solve: function (f) { return round6(enlX(f)); },
          render: function (f, lang) {
            return lang === "en"
              ? "The point P" + pt(f.x, f.y, lang) + " is enlarged with scale factor " + fmt(f.k, lang) + " and centre " + pt(f.a, f.b, lang) + ". Find the x-coordinate of the image P'."
              : "Phóng to điểm P" + pt(f.x, f.y, lang) + " với hệ số " + fmt(f.k, lang) + " và tâm " + pt(f.a, f.b, lang) + ". Tìm hoành độ của ảnh P'.";
          },
          criteria: [
            { id: "vert", text: "P nằm thẳng trên hoặc dưới tâm (hoành độ không đổi)", test: function (f) { return f.x === f.a; } },
            { id: "dec", text: "Hệ số k không phải số nguyên", test: function (f) { return !isInt(f.k); } },
            { id: "quad", text: "P và ảnh P' nằm ở hai góc phần tư khác nhau", test: function (f) {
              const q1 = quad(f.x, f.y), q2 = quad(round6(enlX(f)), round6(enlY(f)));
              return q1 !== 0 && q2 !== 0 && q1 !== q2;
            } },
            { id: "c3", text: "Tâm phóng to nằm trong góc phần tư thứ ba", test: function (f) { return f.a < 0 && f.b < 0; } },
            { id: "far", text: "Hoành độ của ảnh và của P chênh nhau hơn 20", test: function (f) { return Math.abs(enlX(f) - f.x) > 20; } }
          ],
          sample: { fields: { x: "1", y: "2", a: "-2", b: "-1", k: "2.5" } }
        }
      ]
    },
    tr: {
      en: {
        "q.14.1-x1.labels": ["Bearing of B from A (°)", "Bearing of C from B (°)"],
        "q.14.1-x1.kinds": ["you must add or subtract 360° (passing North)", "a right turn of 80°", "a left turn of 80°"],
        "q.14.1-x1.ask": "Someone walks from A to B and then from B to C. Choose the two bearings (whole numbers of degrees, from 0 to 359) so that angle ABC is exactly 100°.",
        "q.14.1-x1.why": "To find the angle between two legs of a journey you must turn back towards A at B (add or subtract 180°) — this is where the parallel north lines help you.",
        "q.14.1-x1.challengeText": "Both bearings are no more than 090°.",
        "q.14.1-x2.ask": "Example: the bearing of B from A is 127°, so the bearing of A from B is 307°. If B is on the opposite side instead, so that the bearing of B from A is 307°, what is the bearing of A from B in degrees?",
        "q.14.1-x2.why": "The way there and the way back always differ by exactly 180° — and a bearing must lie between 000° and 360°.",
        "q.14.1-x2.reasons": [
          "The bearing is greater than 180°, so subtract 180°: 307° − 180° = 127°.",
          "The way back is always add 180°: 307° + 180° = 487°.",
          "The way back is the rest of the full turn: 360° − 307° = 053°."
        ],
        "q.14.1-x3.ask": "Make a problem: town B is on a bearing p from A, and town C is on a bearing q from B (p, q integers from 0 to 359; A, B and C not in a straight line). The problem will ask for angle ABC.",
        "q.14.1-x3.why": "Choosing the two directions yourself shows when angle ABC is acute, right or obtuse — a skill you need for journey and navigation problems.",
        "q.14.1-x3.template": "B on bearing p from A; C on bearing q from B",
        "q.14.1-x3.fields": ["Bearing of B from A (p)", "Bearing of C from B (q)"],
        "q.14.1-x3.criteria": [
          "Angle ABC is obtuse", "Angle ABC is a right angle", "The bearing of B from A is greater than 180°",
          "The second bearing is smaller than the first", "Angle ABC is less than 45° (almost turning back)"
        ],
        "q.14.2-x1.labels": ["x-coordinate of A", "y-coordinate of A"],
        "q.14.2-x1.kinds": ["coordinates that are not whole numbers", "A left of the y-axis (negative x-coordinate)", "A with a non-negative x-coordinate"],
        "q.14.2-x1.ask": "The line segment AB has end point B(5, 1). The midpoint M of AB lies on the line y = x (the two coordinates of M are equal). Find possible points A.",
        "q.14.2-x1.why": "The midpoint is the mean of each coordinate — putting a condition on M lets you work back to the other end point.",
        "q.14.2-x1.challengeText": "The midpoint M is in the third quadrant.",
        "q.14.2-x2.ask": "The midpoint of the line segment AB is M(3, −2) and one end is A(−5, 4). Find the x-coordinate of the end B. Solve it in several ways.",
        "q.14.2-x2.why": "Knowing the midpoint and one end gives you the other end — there are several ways to think, and each one can check the others.",
        "q.14.2-x2.strategies": [
          "Use the rule: x of B = 2 × x of M − x of A",
          "Go from A to M, then the same distance again",
          "Move the shape so M is at the origin O, use the symmetry about O, then move back"
        ],
        "q.14.2-x2.steps.s1": ["What is 2 × the x-coordinate of M?"],
        "q.14.2-x2.steps.s2": ["From A to M, how much does the x-coordinate change (increase is positive)?"],
        "q.14.2-x2.steps.s3": ["Move so that M is at O: what is the new x-coordinate of A?", "The image of B is then symmetric to A about O: what is its x-coordinate?"],
        "q.14.2-x3.ask": "Example: A(−1, 3) and B(5, 9) have midpoint M(2, 6). If B moves 8 units to the right to B(13, 9), what is the x-coordinate of the new midpoint?",
        "q.14.2-x3.why": "The midpoint moves only half as far as one end point — this helps you estimate quickly and spot wrong answers.",
        "q.14.2-x3.reasons": [
          "The midpoint is the mean of the two x-coordinates, so it moves only half of 8: 2 + 4 = 6.",
          "B moves 8, so the midpoint moves 8 too: 2 + 8 = 10.",
          "A does not change, so the midpoint does not change: still 2."
        ],
        "q.14.3-x1.labels": ["Top number of the vector (across)", "Bottom number of the vector (up)"],
        "q.14.3-x1.kinds": ["as far left as down (a = b)", "further left than down", "further down than left"],
        "q.14.3-x1.ask": "Triangle T has vertices (1, 1), (3, 1) and (1, 3). Find column vectors (a, b), with a and b integers, so that the image of T lies completely in the third quadrant (every coordinate of every vertex of the image is negative).",
        "q.14.3-x1.why": "Adding the vector to each vertex is the quickest way to find the image — and you only need to check the “furthest” vertex to know the whole shape is in the right place.",
        "q.14.3-x1.challengeText": "One vertex of the image is exactly at the point (−4, −4).",
        "q.14.3-x2.ask": "Example: translating Q(−3, 4) by the vector (5, −2) gives Q'(2, 2). If Q is translated by the vector twice as big, (10, −4), what is the y-coordinate of the image?",
        "q.14.3-x2.why": "A vector tells you how far a point moves from where it started — mixing up the starting point is a common mistake with several translations.",
        "q.14.3-x2.reasons": [
          "Add the bottom number of the new vector to the y-coordinate of Q: 4 + (−4) = 0.",
          "The vector is doubled, so the coordinates of the image double too: 2 × 2 = 4.",
          "The new image moves a further −4 from Q': 2 − 4 = −2."
        ],
        "q.14.3-x3.ask": "A point starts at the origin O(0, 0) and is translated by the vectors (2, 1), (2, 3), (2, 5), (2, 7), … one after another (the bottom numbers are consecutive odd numbers). Its y-coordinates after 1, 2, 3 translations are 1, 4, 9, … Find the y-coordinate after 5, 10 and 12 translations, and the rule in terms of n.",
        "q.14.3-x3.why": "Several translations in a row combine into one by adding the vectors — here the sum of odd numbers makes the square numbers.",
        "q.14.4-x1.labels": ["x-coordinate of P", "y-coordinate of P"],
        "q.14.4-x1.kinds": ["coordinates that are not whole numbers", "P below the line y = x", "P above the line y = x"],
        "q.14.4-x1.ask": "Reflecting the point P in the line y = x gives the image P'. The x-coordinates of the ends of PP' differ by exactly 6. Find possible points P.",
        "q.14.4-x1.why": "Reflecting in y = x swaps the two coordinates — with this rule you can find the image at once without drawing.",
        "q.14.4-x1.challengeText": "The image P' is in the second quadrant.",
        "q.14.4-x2.ask": "Reflect the point (−3, 5) in the horizontal line y = 1.5. Find the y-coordinate of the image. Solve it in several ways.",
        "q.14.4-x2.why": "A mirror line is not always an axis or a whole number — you can count, use a rule, or move the problem onto the x-axis.",
        "q.14.4-x2.strategies": [
          "Count the distance to the mirror line",
          "Use the rule y' = 2b − y",
          "Move down so the mirror line is the x-axis, reflect, then move back up"
        ],
        "q.14.4-x2.steps.s1": ["How many units above the mirror line is the point?"],
        "q.14.4-x2.steps.s2": ["What is 2 × 1.5?"],
        "q.14.4-x2.steps.s3": ["Move everything down 1.5: what is the y-coordinate of the point?", "Reflect in the x-axis: what does the y-coordinate become?"],
        "q.14.4-x3.ask": "Make a problem: reflect the point (x, y) in the diagonal line y = m·x, where m = 1 (the line y = x) or m = −1 (the line y = −x); x and y are integers from −10 to 10. The problem will ask for the x-coordinate of the image.",
        "q.14.4-x3.why": "Choosing the point and the diagonal mirror yourself helps you remember the two rules (x, y) → (y, x) and (x, y) → (−y, −x).",
        "q.14.4-x3.template": "Reflect (x, y) in y = m·x",
        "q.14.4-x3.fields": ["x-coordinate of the point (x)", "y-coordinate of the point (y)", "m (1 or −1)"],
        "q.14.4-x3.criteria": [
          "The point is on the mirror line (the image is the same point)", "The mirror line is y = −x",
          "The point and its image are on opposite sides of the y-axis", "The point is on an axis (but not the origin O)",
          "The x-coordinates of the point and the image differ by more than 10"
        ],
        "q.14.5-x1.labels": ["x-coordinate of the centre", "y-coordinate of the centre"],
        "q.14.5-x1.kinds": ["centre on an axis", "centre in the second quadrant", "centre in the fourth quadrant", "centre in the first quadrant"],
        "q.14.5-x1.ask": "Rotating the point P(4, 5) through 90° clockwise about a centre C (integer coordinates) gives an image P' on the x-axis. Find possible centres of rotation C.",
        "q.14.5-x1.why": "Rotating about any centre = take the vector from the centre to the point, rotate it, then add it back to the centre — work this backwards to find the centre.",
        "q.14.5-x1.challengeText": "The image P' is to the left of the y-axis.",
        "q.14.5-x2.ask": "Example: rotating (3, −4) through 90° clockwise about O gives (−4, −3), with x-coordinate −4. If it is rotated through 270° anticlockwise about O instead, what is the x-coordinate of the image?",
        "q.14.5-x2.why": "Knowing which rotations give the same result lets you choose the shortest working and check yourself.",
        "q.14.5-x2.reasons": [
          "A 270° anticlockwise rotation ends in the same place as a 90° clockwise rotation, so the image is still (−4, −3).",
          "Changing the direction changes the image to (−y, x) = (4, 3), with x-coordinate 4.",
          "270° = 180° + 90°, so just rotate 180°: (−3, 4), with x-coordinate −3."
        ],
        "q.14.5-x3.ask": "Rotate the point P(−1, 4) through 90° anticlockwise about the centre C(2, 1). Find the y-coordinate of the image. Solve it in several ways.",
        "q.14.5-x3.why": "A centre of rotation that is not the origin is common — using a vector or counting squares around the centre both lead to the same result.",
        "q.14.5-x3.strategies": ["Use the vector from the centre C to P", "Count squares around the centre C"],
        "q.14.5-x3.steps.s1": [
          "The vector CP = (p, q). What is the top number p?",
          "What is the bottom number q?",
          "Rotate 90° anticlockwise: (p, q) → (−q, p). What is the bottom number of the new vector?"
        ],
        "q.14.5-x3.steps.s2": [
          "How many squares to the left of C is P?",
          "After a 90° anticlockwise rotation, “to the left” becomes “down”. How many squares below C is the image?"
        ],
        "q.14.6-x1.labels": ["Scale factor k", "x-coordinate of P", "y-coordinate of P"],
        "q.14.6-x1.kinds": ["k is not a whole number", "k whole, P with whole-number coordinates", "k whole, P with a coordinate that is not whole"],
        "q.14.6-x1.ask": "An enlargement with centre C(1, 1) and scale factor k (k > 1) maps the point P to P'(7, 13). Find sets of (k, x-coordinate of P, y-coordinate of P). Round coordinates that do not divide exactly to at least 2 decimal places.",
        "q.14.6-x1.why": "The vector from the centre to the image is k times the vector from the centre to the object — divide by k to work back to the object.",
        "q.14.6-x1.challengeText": "The scale factor k is not a whole number, but P still has integer coordinates.",
        "q.14.6-x2.ask": "Example: a triangle is enlarged with centre C(1, 1) and scale factor 3; its vertex (2, 2) has image (4, 4). The triangle also has the vertex (1, 5), directly above the centre. What is the x-coordinate of the image of (1, 5)?",
        "q.14.6-x2.why": "A point on the vertical line through the centre stays on that line — multiply the vector from the centre, not the coordinates themselves.",
        "q.14.6-x2.reasons": [
          "The vector from C to (1, 5) is (0, 4); times 3 it is (0, 12), so the x-coordinate stays 1.",
          "Scale factor 3, so multiply the x-coordinate by 3: 1 × 3 = 3.",
          "The x-coordinate minus the centre's x-coordinate is 0, and 0 times 3 is 0, so the image's x-coordinate is 0."
        ],
        "q.14.6-x3.ask": "Make a problem: enlarge the point P(x, y) with centre C(a, b) and scale factor k (x, y, a, b integers from −10 to 10; P is not C; k greater than 1 and at most 5). The problem will ask for the x-coordinate of the image.",
        "q.14.6-x3.why": "Choosing the centre, the point and the scale factor yourself shows that the rule “centre + k × (point − centre)” works in every position.",
        "q.14.6-x3.template": "P(x, y), centre C(a, b), scale factor k",
        "q.14.6-x3.fields": ["x-coordinate of P (x)", "y-coordinate of P (y)", "x-coordinate of the centre (a)", "y-coordinate of the centre (b)", "Scale factor k"],
        "q.14.6-x3.criteria": [
          "P is directly above or below the centre (the x-coordinate does not change)", "The scale factor k is not a whole number",
          "P and its image P' are in different quadrants", "The centre of enlargement is in the third quadrant",
          "The x-coordinates of the image and of P differ by more than 20"
        ]
      },
      vi: {}
    }
  });
})();
