// 🚀 Extension quests — Math 7, unit 14 (Position and transformation). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const EPS = 1e-9;
  const near = function (a, b) { return Math.abs(a - b) < EPS; };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const round6 = function (x) { return Math.round(x * 1e6) / 1e6; };
  // number for display: Unicode minus; decimal comma in Vietnamese
  const fmt = function (x, lang) {
    const s = String(round6(x)).replace("-", "−");
    return lang === "en" ? s : s.replace(".", ",");
  };
  const pt = function (x, y, lang) { return "(" + fmt(x, lang) + ", " + fmt(y, lang) + ")"; };

  window.GAME_QUESTS.push({
    unit: 14,
    sections: {
      "14.1": [
        {
          id: "14.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Số n trong tỉ lệ 1 : n", "Độ dài trên bản đồ (cm)"],
          ask: "Hai làng cách nhau 6 km ngoài thực tế. Chọn tỉ lệ bản đồ 1 : n và độ dài trên bản đồ (số nguyên cm, từ 1 đến 50) cho khớp với 6 km.",
          why: "Cùng một khoảng cách thật có thể vẽ dài hoặc ngắn tùy tỉ lệ — đó là lý do mỗi bản đồ đều phải ghi tỉ lệ.",
          check: function (v) { return isInt(v[0]) && v[0] > 0 && inRange(v[1], 1, 50) && v[0] * v[1] === 600000; },
          challenge: function (v) { return v[0] <= 25000; },
          challengeText: "Bản đồ chi tiết: số n không quá 25 000.",
          kinds: [
            { id: "detail", text: "bản đồ chi tiết (n không quá 25 000)", test: function (v) { return v[0] <= 25000; } },
            { id: "mid", text: "bản đồ vừa (n trên 25 000, đến 100 000)", test: function (v) { return v[0] <= 100000; } },
            { id: "wide", text: "bản đồ vùng rộng (n trên 100 000)", test: function () { return true; } }
          ],
          kindSamples: [["100000", "6"], ["50000", "12"], ["600000", "1"], ["200000", "3"], ["25000", "24"]],
          sample: { values: ["100000", "6"] }
        },
        {
          id: "14.1-x2", type: "whatif", base: 50000,
          ask: "Ví dụ: bản đồ tỉ lệ 1 : 50 000, hai ga cách nhau 8,5 cm (thật là 4,25 km). Một bản đồ khác vẽ hai ga đó cách nhau 17 cm. Bản đồ này có tỉ lệ 1 : n với n bằng bao nhiêu?",
          why: "Hiểu mối liên hệ giữa tỉ lệ và độ dài trên bản đồ giúp em chọn bản đồ phù hợp: đi bộ trong phố hay đi xa.",
          answer: function () { return 425000 / 17; },
          reasons: [
            "Khoảng cách thật không đổi (425 000 cm) mà độ dài trên bản đồ gấp đôi, nên 1 cm chỉ ứng với một nửa: 425 000 ÷ 17 = 25 000.",
            "Bản đồ vẽ to gấp đôi nên số n cũng gấp đôi: 100 000.",
            "Vẫn là hai ga đó nên tỉ lệ không đổi: 50 000."
          ],
          reason: 0,
          sample: { guess: "25000", reason: 0 }
        },
        {
          id: "14.1-x3", type: "ways",
          ask: "Bản đồ tỉ lệ 1 : 25 000. Một con đường dài 3,5 km ngoài thực tế. Trên bản đồ, con đường dài bao nhiêu cm? Giải theo nhiều cách.",
          why: "Đổi đơn vị ở bước nào cũng được, miễn là nhất quán — chọn cách có số dễ tính giúp em ít nhầm hơn.",
          strategies: [
            { id: "s1", name: "Đổi khoảng cách thật ra cm trước rồi chia", steps: [{ ask: "3,5 km bằng bao nhiêu cm?", answer: 350000 }, { answer: 14 }] },
            { id: "s2", name: "Tìm xem 1 cm trên bản đồ ứng với bao nhiêu mét", steps: [
              { ask: "1 cm trên bản đồ ứng với bao nhiêu m ngoài thực tế?", answer: 250 },
              { ask: "3,5 km bằng bao nhiêu m?", answer: 3500 }, { answer: 14 }] },
            { id: "s3", name: "Tìm xem 1 km thật dài bao nhiêu cm trên bản đồ", steps: [
              { ask: "1 km ngoài thực tế dài bao nhiêu cm trên bản đồ?", answer: 4 }, { answer: 14 }] }
          ],
          sample: { strategy: "s1", steps: ["350000", "14"] }
        }
      ],
      "14.2": [
        {
          id: "14.2-x1", type: "many", arity: 2, ordered: false,
          labels: ["Hoành độ đầu thứ nhất", "Hoành độ đầu thứ hai"],
          ask: "Một đoạn thẳng nằm ngang trên đường y = 2, dài đúng 7 đơn vị, và cắt trục y (hai đầu có hoành độ trái dấu). Nhập hoành độ hai đầu mút.",
          why: "Khi hai điểm ở hai phía gốc tọa độ, khoảng cách là tổng hai phần đếm qua gốc — đúng ý chính của bài này.",
          check: function (v) { return v[0] * v[1] < 0 && near(Math.abs(v[0] - v[1]), 7); },
          challenge: function (v) { return near(v[0] + v[1], 0); },
          challengeText: "Trung điểm của đoạn thẳng nằm ngay trên trục y.",
          kinds: [
            { id: "right", text: "phần bên phải trục y dài hơn", test: function (v) { return v[1] + v[0] > 1e-9; } },
            { id: "mid", text: "trung điểm nằm trên trục y", test: function (v) { return Math.abs(v[1] + v[0]) < 1e-9; } },
            { id: "left", text: "phần bên trái trục y dài hơn", test: function () { return true; } }
          ],
          kindSamples: [["-2", "5"], ["-1", "6"], ["-3.5", "3.5"], ["-5", "2"], ["-6", "1"]],
          sample: { values: ["-2", "5"] }
        },
        {
          id: "14.2-x2", type: "whatif", base: 3,
          ask: "Ví dụ: A(1, 2) và B(4, 2) cách nhau 3 đơn vị. Nếu đổi A thành A(−1, 2) thì khoảng cách AB là bao nhiêu?",
          why: "Đếm qua gốc tọa độ là chỗ dễ sai nhất khi tọa độ có số âm — em sẽ cần nó trong mọi bài về phép biến hình.",
          answer: function () { return 4 - (-1); },
          reasons: [
            "Đếm qua trục y: từ −1 đến 0 là 1 bước, từ 0 đến 4 là 4 bước, tất cả 5.",
            "Vẫn lấy 4 − 1 = 3, dấu âm không ảnh hưởng đến khoảng cách.",
            "A dịch sang trái nên khoảng cách nhỏ đi: 4 − 1 − 1 = 2."
          ],
          reason: 0,
          sample: { guess: "5", reason: 0 }
        },
        {
          id: "14.2-x3", type: "make",
          ask: "Tự ra đề: hai điểm A(a, b) và B(c, b) có cùng tung độ b (a, b, c nguyên từ −10 đến 10, a ≠ c). Đề sẽ hỏi khoảng cách AB.",
          why: "Tự chọn vị trí hai điểm giúp em thấy khi nào phải cộng (hai phía gốc) và khi nào phải trừ (cùng một phía).",
          template: "A(a, b) và B(c, b)",
          fields: [{ id: "a", label: "Hoành độ của A (a)" }, { id: "c", label: "Hoành độ của B (c)" }, { id: "b", label: "Tung độ chung (b)" }],
          valid: function (f) { return inRange(f.a, -10, 10) && inRange(f.c, -10, 10) && inRange(f.b, -10, 10) && f.a !== f.c; },
          solve: function (f) { return Math.abs(f.a - f.c); },
          render: function (f, lang) {
            return lang === "en"
              ? "Find the distance between A" + pt(f.a, f.b, lang) + " and B" + pt(f.c, f.b, lang) + "."
              : "Tìm khoảng cách giữa A" + pt(f.a, f.b, lang) + " và B" + pt(f.c, f.b, lang) + ".";
          },
          criteria: [
            { id: "cross", text: "A và B nằm ở hai phía của trục y", test: function (f) { return f.a * f.c < 0; } },
            { id: "left", text: "Cả hai hoành độ đều âm", test: function (f) { return f.a < 0 && f.c < 0; } },
            { id: "below", text: "Đoạn AB nằm dưới trục x", test: function (f) { return f.b < 0; } },
            { id: "long", text: "Khoảng cách AB lớn hơn 10", test: function (f) { return Math.abs(f.a - f.c) > 10; } },
            { id: "mid", text: "Trung điểm của AB nằm trên trục y", test: function (f) { return f.a + f.c === 0; } }
          ],
          sample: { fields: { a: "-4", c: "8", b: "-3" } }
        }
      ],
      "14.3": [
        {
          id: "14.3-x1", type: "many", arity: 2, ordered: true,
          labels: ["Bước theo x (phải là dương)", "Bước theo y (lên là dương)"],
          ask: "Tịnh tiến điểm A(−1, 4) thành A' sao cho hoành độ và tung độ của A' là hai số đối nhau. Tìm các phép tịnh tiến (bước theo x, bước theo y là số nguyên).",
          why: "Viết phép tịnh tiến bằng hai số (thay đổi x, thay đổi y) là cách gọn để mô tả và tính ảnh của mọi điểm.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && (-1 + v[0]) + (4 + v[1]) === 0; },
          kinds: [
            { id: "axis", text: "chỉ dịch theo một hướng (một bước bằng 0)", test: function (v) { return v[0] === 0 || v[1] === 0; } },
            { id: "lu", text: "sang trái và lên", test: function (v) { return v[0] < 0 && v[1] > 0; } },
            { id: "ld", text: "sang trái và xuống", test: function (v) { return v[0] < 0; } },
            { id: "rd", text: "sang phải và xuống", test: function () { return true; } }
          ],
          kindSamples: [["1", "-4"], ["0", "-3"], ["-5", "2"], ["-1", "-2"], ["2", "-5"]],
          sample: { values: ["1", "-4"] }
        },
        {
          id: "14.3-x2", type: "ways",
          ask: "Điểm B(2, 3) được tịnh tiến 4 sang trái và 1 lên trên, rồi tiếp tục 6 sang phải và 3 xuống dưới. Tìm hoành độ của ảnh cuối cùng. Giải theo nhiều cách.",
          why: "Hai phép tịnh tiến liên tiếp gộp được thành một — biết điều này giúp em tính nhanh và tự kiểm tra.",
          strategies: [
            { id: "s1", name: "Làm lần lượt từng phép tịnh tiến", steps: [{ ask: "Sau lần dịch thứ nhất, hoành độ của B' là bao nhiêu?", answer: -2 }, { answer: 4 }] },
            { id: "s2", name: "Gộp hai phép thành một", steps: [{ ask: "Cả hai lần gộp lại, theo x dịch bao nhiêu bước (sang phải là dương)?", answer: 2 }, { answer: 4 }] },
            { id: "s3", name: "Đổi thứ tự: dịch 6 sang phải trước", steps: [{ ask: "Dịch 6 sang phải trước thì hoành độ là bao nhiêu?", answer: 8 }, { answer: 4 }] }
          ],
          sample: { strategy: "s2", steps: ["2", "4"] }
        },
        {
          id: "14.3-x3", type: "pattern",
          ask: "Một điểm xuất phát tại (1, 2). Mỗi bước nó được tịnh tiến 3 sang phải và 2 xuống dưới. Tung độ sau bước 1, 2, 3 là 0, −2, −4, … Tìm tung độ sau bước 10, bước 25, bước 100 và quy luật theo n.",
          why: "Lặp lại một phép tịnh tiến tạo ra một dãy số — nối bài này với dãy số và số hạng tổng quát ở chương 9.",
          seq: [0, -2, -4],
          term: function (n) { return 2 - 2 * n; },
          askN: [10, 25, 100],
          sample: { terms: { 10: "-18", 25: "-48", 100: "-198" }, rule: "2-2n" }
        }
      ],
      "14.4": [
        {
          id: "14.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Đường gương x = a: a", "Hoành độ của A"],
          ask: "Phản xạ điểm A qua đường thẳng đứng x = a thì ảnh A' có hoành độ 6. Tìm các cặp a và hoành độ của A (A không nằm trên đường gương).",
          why: "Đường gương luôn nằm chính giữa điểm và ảnh của nó — dùng ý này để tìm đường gương khi biết điểm và ảnh.",
          check: function (v) { return near(2 * v[0] - v[1], 6) && !near(v[0], v[1]); },
          challenge: function (v) { return v[1] < 0; },
          challengeText: "A và A' nằm ở hai phía của trục y.",
          kinds: [
            { id: "yaxis", text: "gương là trục y (a = 0)", test: function (v) { return v[0] === 0; } },
            { id: "left", text: "A ở bên trái gương", test: function (v) { return v[1] < v[0]; } },
            { id: "right", text: "A ở bên phải gương", test: function () { return true; } }
          ],
          kindSamples: [["4", "2"], ["0", "-6"], ["5", "4"], ["7", "8"], ["10", "14"]],
          sample: { values: ["4", "2"] }
        },
        {
          id: "14.4-x2", type: "whatif", base: -3,
          ask: "Ví dụ: phản xạ (3, 2) qua trục y được (−3, 2). Nếu đường gương là x = 1 thay cho trục y thì hoành độ của ảnh là bao nhiêu?",
          why: "Không phải đường gương nào cũng là trục tọa độ — đếm khoảng cách tới đường gương mới là cách luôn đúng.",
          answer: function () { return 2 * 1 - 3; },
          reasons: [
            "(3, 2) cách đường x = 1 là 2 đơn vị, ảnh cách 2 đơn vị ở phía bên kia: 1 − 2 = −1.",
            "Phản xạ thì cứ đổi dấu hoành độ: −3.",
            "Đường gương dịch sang phải 1 nên ảnh cũng dịch sang phải 1: −3 + 1 = −2."
          ],
          reason: 0,
          sample: { guess: "-1", reason: 0 }
        },
        {
          id: "14.4-x3", type: "make",
          ask: "Tự ra đề: phản xạ điểm (x, y) qua đường thẳng đứng x = a (x, y, a nguyên từ −10 đến 10). Đề sẽ hỏi hoành độ của ảnh.",
          why: "Tự chọn điểm và đường gương giúp em thấy quy tắc “hoành độ mới = 2a − x” hoạt động trong mọi trường hợp.",
          template: "Phản xạ (x, y) qua đường x = a",
          fields: [{ id: "x", label: "Hoành độ của điểm (x)" }, { id: "y", label: "Tung độ của điểm (y)" }, { id: "a", label: "Đường gương x = a" }],
          valid: function (f) { return inRange(f.x, -10, 10) && inRange(f.y, -10, 10) && inRange(f.a, -10, 10); },
          solve: function (f) { return 2 * f.a - f.x; },
          render: function (f, lang) {
            return lang === "en"
              ? "Reflect the point " + pt(f.x, f.y, lang) + " in the line x = " + fmt(f.a, lang) + ". Find the x-coordinate of the image."
              : "Phản xạ điểm " + pt(f.x, f.y, lang) + " qua đường thẳng x = " + fmt(f.a, lang) + ". Tìm hoành độ của ảnh.";
          },
          criteria: [
            { id: "on", text: "Điểm nằm trên đường gương (ảnh trùng với điểm)", test: function (f) { return f.x === f.a; } },
            { id: "aneg", text: "Đường gương nằm bên trái trục y", test: function (f) { return f.a < 0; } },
            { id: "cross", text: "Điểm và ảnh nằm ở hai phía của trục y", test: function (f) { return f.x * (2 * f.a - f.x) < 0; } },
            { id: "far", text: "Điểm cách đường gương hơn 5 đơn vị", test: function (f) { return Math.abs(f.x - f.a) > 5; } },
            { id: "small", text: "Hoành độ của ảnh nhỏ hơn −10", test: function (f) { return 2 * f.a - f.x < -10; } }
          ],
          sample: { fields: { x: "3", y: "-2", a: "-2" } }
        }
      ],
      "14.5": [
        {
          id: "14.5-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hoành độ của P", "Tung độ của P"],
          ask: "Quay điểm P (tọa độ nguyên) góc 90° cùng chiều kim đồng hồ quanh gốc O, được ảnh P' có tổng hai tọa độ bằng 5. Tìm các điểm P.",
          why: "Biết quy tắc (x, y) → (y, −x) giúp em đi ngược từ ảnh về điểm ban đầu, không cần vẽ.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[1] + (-v[0]) === 5; },
          challenge: function (v) { return v[1] > 0 && -v[0] > 0; },
          challengeText: "Ảnh P' có cả hai tọa độ đều dương.",
          kinds: [
            { id: "q1", text: "ảnh P' có hai tọa độ dương", test: function (v) { return v[1] > 0 && v[0] < 0; } },
            { id: "axis", text: "ảnh P' nằm trên một trục tọa độ", test: function (v) { return v[0] === 0 || v[1] === 0; } },
            { id: "neg", text: "ảnh P' có một tọa độ âm", test: function () { return true; } }
          ],
          kindSamples: [["1", "6"], ["-1", "4"], ["-2", "3"], ["0", "5"], ["-5", "0"]],
          sample: { values: ["1", "6"] }
        },
        {
          id: "14.5-x2", type: "whatif", base: 3,
          ask: "Ví dụ: quay (3, 1) góc 90° ngược chiều kim đồng hồ quanh O được (−1, 3), tung độ là 3. Nếu quay tiếp thêm 90° ngược chiều kim đồng hồ nữa thì tung độ của ảnh là bao nhiêu?",
          why: "Hai lần quay 90° cùng chiều là một lần quay 180° — giúp em nhớ ít công thức hơn mà vẫn tính được.",
          answer: function () { return -1; },
          reasons: [
            "Quay hai lần 90° cùng chiều là quay 180°: (x, y) → (−x, −y), nên (3, 1) → (−3, −1).",
            "Quay 180° giống phản xạ qua trục y, nên tung độ vẫn là 1.",
            "Quay thêm 90° nữa thì điểm trở về chỗ cũ (3, 1), nên tung độ là 1."
          ],
          reason: 0,
          sample: { guess: "-1", reason: 0 }
        },
        {
          id: "14.5-x3", type: "ways",
          ask: "Quay điểm (7, 5) góc 180° quanh tâm (4, 3). Tìm hoành độ của ảnh. Giải theo nhiều cách.",
          why: "Tâm quay không phải lúc nào cũng là O — có nhiều cách đưa bài toán về điều em đã biết.",
          strategies: [
            { id: "s1", name: "Đếm từ tâm rồi đi ngược lại", steps: [
              { ask: "Từ tâm (4, 3) đến điểm (7, 5), theo x đi sang phải mấy bước?", answer: 3 }, { answer: 1 }] },
            { id: "s2", name: "Dịch cho tâm về O, quay, rồi dịch trở lại", steps: [
              { ask: "Dịch cả hình 4 sang trái, 3 xuống dưới: điểm mới có hoành độ bao nhiêu?", answer: 3 },
              { ask: "Quay 180° quanh O: hoành độ thành bao nhiêu?", answer: -3 }, { answer: 1 }] },
            { id: "s3", name: "Tâm là trung điểm của điểm và ảnh", steps: [
              { ask: "Hoành độ của điểm cộng hoành độ của ảnh bằng bao nhiêu?", answer: 8 }, { answer: 1 }] }
          ],
          sample: { strategy: "s3", steps: ["8", "1"] }
        }
      ],
      "14.6": [
        {
          id: "14.6-x1", type: "many", arity: 2, ordered: false,
          labels: ["Chiều dài ban đầu (cm)", "Chiều rộng ban đầu (cm)"],
          ask: "Một hình chữ nhật được phóng to với hệ số 3, ảnh có chu vi 60 cm. Hình chữ nhật ban đầu có thể có kích thước nào?",
          why: "Chu vi nhân k nhưng diện tích nhân k² — biết cả hai giúp em đi ngược từ ảnh về hình ban đầu.",
          check: function (v) { return v[0] > 0 && v[1] > 0 && near(v[0] + v[1], 10); },
          challenge: function (v) { return near(v[0] * v[1] * 9, 189); },
          challengeText: "Ảnh có diện tích đúng 189 cm².",
          kinds: [
            { id: "square", text: "hình vuông", test: function (v) { return Math.abs(v[0] - v[1]) < 1e-9; } },
            { id: "whole", text: "hai cạnh là số nguyên", test: function (v) { return isInt(v[0]) && isInt(v[1]); } },
            { id: "dec", text: "cạnh là số thập phân", test: function () { return true; } }
          ],
          kindSamples: [["4", "6"], ["5", "5"], ["3", "7"], ["2.5", "7.5"], ["0.5", "9.5"]],
          sample: { values: ["4", "6"] }
        },
        {
          id: "14.6-x2", type: "whatif", base: 12,
          ask: "Hình chữ nhật 3 cm × 4 cm có diện tích 12 cm². Phóng to với hệ số 2 thì diện tích ảnh là bao nhiêu cm²?",
          why: "Khi phóng to, diện tích tăng nhanh hơn độ dài — điều này quan trọng khi tính diện tích và thể tích ở chương 15.",
          answer: function () { return 6 * 8; },
          reasons: [
            "Cả chiều dài và chiều rộng đều nhân 2, nên diện tích nhân 2 × 2 = 4: 48 cm².",
            "Hệ số 2 nên diện tích gấp đôi: 24 cm².",
            "Mỗi cạnh dài thêm 2 cm: 5 × 6 = 30 cm²."
          ],
          reason: 0,
          sample: { guess: "48", reason: 0 }
        },
        {
          id: "14.6-x3", type: "make",
          ask: "Tự ra đề: hình chữ nhật a cm × b cm (a, b lớn hơn 0 và không quá 50) được phóng to với hệ số k (lớn hơn 1, không quá 10). Đề sẽ hỏi chu vi của ảnh.",
          why: "Thử nhiều hệ số (kể cả số thập phân) giúp em thấy mọi độ dài đều được nhân cùng một số.",
          template: "Hình chữ nhật a × b, hệ số k",
          fields: [{ id: "a", label: "Chiều dài a (cm)" }, { id: "b", label: "Chiều rộng b (cm)" }, { id: "k", label: "Hệ số k" }],
          valid: function (f) { return f.a > 0 && f.a <= 50 && f.b > 0 && f.b <= 50 && f.k > 1 && f.k <= 10; },
          solve: function (f) { return round6(2 * f.k * (f.a + f.b)); },
          render: function (f, lang) {
            return lang === "en"
              ? "A rectangle " + fmt(f.a, lang) + " cm by " + fmt(f.b, lang) + " cm is enlarged with scale factor " + fmt(f.k, lang) + ". Find the perimeter of the image in cm."
              : "Hình chữ nhật " + fmt(f.a, lang) + " cm × " + fmt(f.b, lang) + " cm được phóng to với hệ số " + fmt(f.k, lang) + ". Tính chu vi của ảnh (cm).";
          },
          criteria: [
            { id: "dec", text: "Hệ số k là số thập phân (như 1,5)", test: function (f) { return !isInt(f.k); } },
            { id: "p100", text: "Chu vi của ảnh lớn hơn 100 cm", test: function (f) { return 2 * f.k * (f.a + f.b) > 100; } },
            { id: "side12", text: "Ảnh có một cạnh dài đúng 12 cm", test: function (f) { return near(f.k * f.a, 12) || near(f.k * f.b, 12); } },
            { id: "area20", text: "Diện tích ảnh gấp hơn 20 lần diện tích ban đầu", test: function (f) { return f.k * f.k > 20; } },
            { id: "decside", text: "Hình ban đầu có cạnh là số thập phân", test: function (f) { return !isInt(f.a) || !isInt(f.b); } }
          ],
          sample: { fields: { a: "8", b: "5", k: "1.5" } }
        }
      ]
    },
    tr: {
      en: {
        "q.14.1-x1.labels": ["The number n in the scale 1 : n", "Length on the map (cm)"],
        "q.14.1-x1.ask": "Two villages are 6 km apart in real life. Choose a map scale 1 : n and a length on the map (a whole number of cm, from 1 to 50) that match 6 km.",
        "q.14.1-x1.why": "The same real distance can be drawn long or short depending on the scale — that is why every map must show its scale.",
        "q.14.1-x1.challengeText": "A detailed map: n is no more than 25 000.",
        "q.14.1-x1.kinds": ["a detailed map (n at most 25 000)", "a medium map (n above 25 000, up to 100 000)", "a map of a wide area (n above 100 000)"],
        "q.14.1-x2.ask": "Example: on a map with scale 1 : 50 000, two stations are 8.5 cm apart (4.25 km in real life). Another map shows the same stations 17 cm apart. This map has scale 1 : n. What is n?",
        "q.14.1-x2.why": "Understanding how the scale and the map length are linked helps you choose the right map: for walking in town or for a long journey.",
        "q.14.1-x2.reasons": [
          "The real distance stays the same (425 000 cm) but the map length doubles, so 1 cm stands for half as much: 425 000 ÷ 17 = 25 000.",
          "The map is drawn twice as big, so n doubles too: 100 000.",
          "They are the same stations, so the scale does not change: 50 000."
        ],
        "q.14.1-x3.ask": "A map has scale 1 : 25 000. A road is 3.5 km long in real life. How long is the road on the map, in cm? Solve it in several ways.",
        "q.14.1-x3.why": "You can change units at any step as long as you are consistent — choosing the step with easier numbers means fewer mistakes.",
        "q.14.1-x3.strategies": ["Change the real distance to cm first, then divide", "Find how many metres 1 cm on the map stands for", "Find how many cm on the map 1 real km is"],
        "q.14.1-x3.steps.s1": ["How many cm is 3.5 km?"],
        "q.14.1-x3.steps.s2": ["1 cm on the map stands for how many m in real life?", "How many m is 3.5 km?"],
        "q.14.1-x3.steps.s3": ["How many cm long on the map is 1 km in real life?"],
        "q.14.2-x1.labels": ["x-coordinate of the first end", "x-coordinate of the second end"],
        "q.14.2-x1.ask": "A horizontal line segment lies on the line y = 2, is exactly 7 units long and crosses the y-axis (its ends have x-coordinates with opposite signs). Enter the x-coordinates of its two ends.",
        "q.14.2-x1.why": "When two points are on opposite sides of the origin, the distance is the sum of the two parts counted through the origin — the key idea of this section.",
        "q.14.2-x1.challengeText": "The midpoint of the segment lies exactly on the y-axis.",
        "q.14.2-x1.kinds": ["the part to the right of the y-axis is longer", "the midpoint is on the y-axis", "the part to the left of the y-axis is longer"],
        "q.14.2-x2.ask": "Example: A(1, 2) and B(4, 2) are 3 units apart. If A changes to A(−1, 2), what is the distance AB?",
        "q.14.2-x2.why": "Counting through the origin is where mistakes happen most with negative coordinates — you will need it in every transformation question.",
        "q.14.2-x2.reasons": [
          "Count through the y-axis: from −1 to 0 is 1 step, from 0 to 4 is 4 steps, 5 altogether.",
          "Still 4 − 1 = 3; the negative sign does not affect the distance.",
          "A moved left, so the distance gets smaller: 4 − 1 − 1 = 2."
        ],
        "q.14.2-x3.ask": "Make a problem: two points A(a, b) and B(c, b) with the same y-coordinate b (a, b, c integers from −10 to 10, a ≠ c). The problem will ask for the distance AB.",
        "q.14.2-x3.why": "Choosing the two points yourself shows when you must add (opposite sides of the origin) and when you must subtract (the same side).",
        "q.14.2-x3.template": "A(a, b) and B(c, b)",
        "q.14.2-x3.fields": ["x-coordinate of A (a)", "x-coordinate of B (c)", "Shared y-coordinate (b)"],
        "q.14.2-x3.criteria": [
          "A and B are on opposite sides of the y-axis", "Both x-coordinates are negative",
          "AB lies below the x-axis", "The distance AB is greater than 10", "The midpoint of AB lies on the y-axis"
        ],
        "q.14.3-x1.labels": ["Step in x (right is positive)", "Step in y (up is positive)"],
        "q.14.3-x1.ask": "Translate the point A(−1, 4) to A' so that the x- and y-coordinates of A' are opposite numbers. Find such translations (the steps in x and in y are integers).",
        "q.14.3-x1.why": "Writing a translation as two numbers (change in x, change in y) is a neat way to describe it and to find the image of any point.",
        "q.14.3-x1.kinds": ["moves in one direction only (one step is 0)", "left and up", "left and down", "right and down"],
        "q.14.3-x2.ask": "The point B(2, 3) is translated 4 left and 1 up, then 6 right and 3 down. Find the x-coordinate of the final image. Solve it in several ways.",
        "q.14.3-x2.why": "Two translations in a row combine into one — knowing this lets you work faster and check yourself.",
        "q.14.3-x2.strategies": ["Do the translations one at a time", "Combine the two into one", "Change the order: move 6 right first"],
        "q.14.3-x2.steps.s1": ["After the first translation, what is the x-coordinate of B'?"],
        "q.14.3-x2.steps.s2": ["Combining both, how many steps in x is the move (right is positive)?"],
        "q.14.3-x2.steps.s3": ["Moving 6 right first, what is the x-coordinate?"],
        "q.14.3-x3.ask": "A point starts at (1, 2). Each step it is translated 3 right and 2 down. Its y-coordinates after steps 1, 2, 3 are 0, −2, −4, … Find the y-coordinate after step 10, step 25 and step 100, and the rule in terms of n.",
        "q.14.3-x3.why": "Repeating a translation makes a sequence — linking this section to sequences and the nth term in unit 9.",
        "q.14.4-x1.labels": ["Mirror line x = a: a", "x-coordinate of A"],
        "q.14.4-x1.ask": "Reflecting the point A in the vertical line x = a gives an image A' with x-coordinate 6. Find pairs of a and the x-coordinate of A (A is not on the mirror line).",
        "q.14.4-x1.why": "The mirror line is always exactly halfway between a point and its image — use this to find the mirror line from a point and its image.",
        "q.14.4-x1.challengeText": "A and A' are on opposite sides of the y-axis.",
        "q.14.4-x1.kinds": ["the mirror is the y-axis (a = 0)", "A is to the left of the mirror", "A is to the right of the mirror"],
        "q.14.4-x2.ask": "Example: reflecting (3, 2) in the y-axis gives (−3, 2). If the mirror line is x = 1 instead of the y-axis, what is the x-coordinate of the image?",
        "q.14.4-x2.why": "Not every mirror line is an axis — counting the distance to the mirror line is the method that always works.",
        "q.14.4-x2.reasons": [
          "(3, 2) is 2 units from the line x = 1, so the image is 2 units on the other side: 1 − 2 = −1.",
          "Reflecting always changes the sign of x: −3.",
          "The mirror line moved 1 to the right, so the image moves 1 to the right too: −3 + 1 = −2."
        ],
        "q.14.4-x3.ask": "Make a problem: reflect the point (x, y) in the vertical line x = a (x, y, a integers from −10 to 10). The problem will ask for the x-coordinate of the image.",
        "q.14.4-x3.why": "Choosing the point and the mirror line yourself shows that the rule “new x = 2a − x” works in every case.",
        "q.14.4-x3.template": "Reflect (x, y) in the line x = a",
        "q.14.4-x3.fields": ["x-coordinate of the point (x)", "y-coordinate of the point (y)", "Mirror line x = a"],
        "q.14.4-x3.criteria": [
          "The point is on the mirror line (the image is the same point)", "The mirror line is to the left of the y-axis",
          "The point and its image are on opposite sides of the y-axis", "The point is more than 5 units from the mirror line",
          "The x-coordinate of the image is less than −10"
        ],
        "q.14.5-x1.labels": ["x-coordinate of P", "y-coordinate of P"],
        "q.14.5-x1.ask": "Rotating a point P (integer coordinates) 90° clockwise about the origin O gives an image P' whose two coordinates add up to 5. Find such points P.",
        "q.14.5-x1.why": "Knowing the rule (x, y) → (y, −x) lets you work back from the image to the original point without drawing.",
        "q.14.5-x1.challengeText": "Both coordinates of the image P' are positive.",
        "q.14.5-x1.kinds": ["the image P' has both coordinates positive", "the image P' lies on an axis", "the image P' has a negative coordinate"],
        "q.14.5-x2.ask": "Example: rotating (3, 1) 90° anticlockwise about O gives (−1, 3), with y-coordinate 3. If it is rotated a further 90° anticlockwise, what is the y-coordinate of the image?",
        "q.14.5-x2.why": "Two 90° rotations in the same direction make one 180° rotation — fewer rules to remember, and you can still work it out.",
        "q.14.5-x2.reasons": [
          "Two 90° turns in the same direction make a 180° turn: (x, y) → (−x, −y), so (3, 1) → (−3, −1).",
          "A 180° rotation is the same as a reflection in the y-axis, so the y-coordinate is still 1.",
          "Turning another 90° brings the point back to where it started, (3, 1), so the y-coordinate is 1."
        ],
        "q.14.5-x3.ask": "Rotate the point (7, 5) through 180° about the centre (4, 3). Find the x-coordinate of the image. Solve it in several ways.",
        "q.14.5-x3.why": "The centre of rotation is not always O — there are several ways to turn the problem into one you already know.",
        "q.14.5-x3.strategies": ["Count from the centre, then go the opposite way", "Move the centre to O, rotate, then move back", "The centre is the midpoint of the point and its image"],
        "q.14.5-x3.steps.s1": ["From the centre (4, 3) to the point (7, 5), how many steps right in x?"],
        "q.14.5-x3.steps.s2": ["Move everything 4 left and 3 down: what is the new x-coordinate of the point?", "Rotate 180° about O: what does the x-coordinate become?"],
        "q.14.5-x3.steps.s3": ["The x-coordinate of the point plus the x-coordinate of the image equals what?"],
        "q.14.6-x1.labels": ["Original length (cm)", "Original width (cm)"],
        "q.14.6-x1.ask": "A rectangle is enlarged with scale factor 3 and the image has perimeter 60 cm. What could the measurements of the original rectangle be?",
        "q.14.6-x1.why": "The perimeter is multiplied by k but the area by k² — knowing both lets you work back from the image to the original shape.",
        "q.14.6-x1.challengeText": "The image has an area of exactly 189 cm².",
        "q.14.6-x1.kinds": ["a square", "both sides are whole numbers", "the sides are decimals"],
        "q.14.6-x2.ask": "A 3 cm by 4 cm rectangle has area 12 cm². It is enlarged with scale factor 2. What is the area of the image in cm²?",
        "q.14.6-x2.why": "In an enlargement, area grows faster than length — this matters when you work with area and volume in unit 15.",
        "q.14.6-x2.reasons": [
          "Both the length and the width are multiplied by 2, so the area is multiplied by 2 × 2 = 4: 48 cm².",
          "The scale factor is 2, so the area doubles: 24 cm².",
          "Each side gets 2 cm longer: 5 × 6 = 30 cm²."
        ],
        "q.14.6-x3.ask": "Make a problem: an a cm by b cm rectangle (a, b greater than 0 and at most 50) is enlarged with scale factor k (greater than 1, at most 10). The problem will ask for the perimeter of the image.",
        "q.14.6-x3.why": "Trying several scale factors (decimals too) shows that every length is multiplied by the same number.",
        "q.14.6-x3.template": "Rectangle a × b, scale factor k",
        "q.14.6-x3.fields": ["Length a (cm)", "Width b (cm)", "Scale factor k"],
        "q.14.6-x3.criteria": [
          "The scale factor k is a decimal (such as 1.5)", "The perimeter of the image is greater than 100 cm",
          "The image has a side exactly 12 cm long", "The area of the image is more than 20 times the original area",
          "The original rectangle has a decimal side"
        ]
      },
      vi: {}
    }
  });
})();
