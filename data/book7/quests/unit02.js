// 🚀 Extension quests — Math 7, unit 2 (Expressions, formulae and equations). Schema: MATH_QUESTS_GUIDE.md.
// Own wording, built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const neg = function (x) { return String(x).replace("-", "−"); };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  // " + 7" / " − 7" for a signed constant written after another term
  const signed = function (b) { return b < 0 ? " − " + Math.abs(b) : " + " + b; };
  // one term c·v written the short way (x, −x, 3x); `first` decides whether a leading " + " is needed
  const term = function (c, v, first) {
    const body = (Math.abs(c) === 1 ? "" : String(Math.abs(c))) + v;
    if (first) return (c < 0 ? "−" : "") + body;
    return (c < 0 ? " − " : " + ") + body;
  };
  const four = function (f) { return term(f.a, "x", true) + term(f.b, "y") + term(f.c, "x") + term(f.d, "y"); };
  const coefs = function (f) { return [f.a, f.b, f.c, f.d]; };

  window.GAME_QUESTS.push({
    unit: 2,
    sections: {
      "2.1": [
        {
          id: "2.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hệ số a", "Hằng số b"],
          ask: "Biểu thức a·x + b (a, b nguyên; a khác 0 và khác 1) có giá trị bằng 4 khi x = 4, tức là “trả lại” đúng số đã nghĩ. Tìm các cặp hệ số a và hằng số b.",
          why: "Đổi hệ số thì phải đổi hằng số theo — em hiểu rõ vai trò của từng hạng tử trong biểu thức.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && v[0] !== 1 && 4 * v[0] + v[1] === 4; },
          challenge: function (v) { return v[1] > 0; },
          challengeText: "Hằng số b là số dương.",
          sample: { values: ["2", "-4"] }
        },
        {
          id: "2.1-x2", type: "whatif", base: 6,
          ask: "Ví dụ: Ella bằng một nửa tuổi Mathew, viết là x/2; khi x = 12 thì Ella 6 tuổi. Nếu ai đó viết nhầm thành 2x thì với x = 12 biểu thức có giá trị bao nhiêu?",
          why: "“Gấp đôi” và “một nửa” dễ bị viết lẫn — thử với một số cụ thể giúp em phát hiện biểu thức viết sai.",
          answer: function () { return 2 * 12; },
          reasons: [
            "2x là gấp đôi (2 × x), không phải một nửa: 2 × 12 = 24.",
            "2x và x/2 giống nhau vì đều có số 2 và chữ x.",
            "2x nghĩa là 2 + x nên được 14."
          ],
          reason: 0,
          sample: { guess: "24", reason: 0 }
        },
        {
          id: "2.1-x3", type: "make",
          ask: "Tự ra đề: “Nghĩ một số x, nhân với a rồi cộng b” (a từ 2 đến 12; b từ −30 đến 30, khác 0; x từ −20 đến 20). Người giải viết biểu thức rồi tính giá trị khi x bằng số em chọn.",
          why: "Dịch lời thành biểu thức rồi thay số là hai việc em sẽ làm liên tục ở bài công thức và phương trình.",
          template: "Nghĩ số x, nhân a rồi cộng b",
          fields: [{ id: "a", label: "Nhân với a" }, { id: "b", label: "Cộng b (âm là trừ)" }, { id: "x", label: "Giá trị của x" }],
          valid: function (f) { return inRange(f.a, 2, 12) && inRange(f.b, -30, 30) && f.b !== 0 && inRange(f.x, -20, 20); },
          solve: function (f) { return f.a * f.x + f.b; },
          render: function (f, lang) {
            const op = lang === "en" ? (f.b < 0 ? "subtract " + Math.abs(f.b) : "add " + f.b) : (f.b < 0 ? "trừ " + Math.abs(f.b) : "cộng " + f.b);
            return lang === "en"
              ? "Think of a number x, multiply it by " + f.a + " then " + op + ". Write an expression, then find its value when x = " + neg(f.x) + "."
              : "Nghĩ một số x, nhân với " + f.a + " rồi " + op + ". Viết biểu thức rồi tính giá trị của nó khi x = " + neg(f.x) + ".";
          },
          criteria: [
            { id: "sub", text: "Đề có phép trừ (b âm)", test: function (f) { return f.b < 0; } },
            { id: "xneg", text: "Giá trị của x là số âm", test: function (f) { return f.x < 0; } },
            { id: "zero", text: "Giá trị của biểu thức bằng 0", test: function (f) { return f.a * f.x + f.b === 0; } },
            { id: "neg", text: "Giá trị của biểu thức là số âm", test: function (f) { return f.a * f.x + f.b < 0; } },
            { id: "big", text: "Giá trị của biểu thức lớn hơn 100", test: function (f) { return f.a * f.x + f.b > 100; } }
          ],
          sample: { fields: { a: "5", b: "-7", x: "-3" } }
        }
      ],
      "2.2": [
        {
          id: "2.2-x1", type: "ways",
          ask: "Vé xem phim tính theo công thức T = 8a + 5c (đô la), với a người lớn và c trẻ em. Nhóm có 3 người lớn và 4 trẻ em trả bao nhiêu đô la? Giải theo nhiều cách.",
          why: "Thay số trực tiếp và nhóm khéo đều cho cùng đáp số — biết nhiều cách giúp em tự kiểm tra khi dùng công thức.",
          strategies: [
            { id: "s1", name: "Thay số vào công thức", steps: [{ ask: "8 × 3 = ?", answer: 24 }, { answer: 44 }] },
            { id: "s2", name: "Coi mọi người đều trả 5 đô la, rồi cộng phần người lớn trả thêm", steps: [
              { ask: "7 người, mỗi người 5 đô la: tất cả bao nhiêu?", answer: 35 },
              { ask: "Mỗi người lớn trả thêm 3 đô la: 3 người lớn trả thêm bao nhiêu?", answer: 9 }, { answer: 44 }] },
            { id: "s3", name: "Ghép mỗi người lớn với một trẻ em (13 đô la một cặp)", steps: [
              { ask: "3 cặp hết bao nhiêu đô la?", answer: 39 }, { answer: 44 }] }
          ],
          sample: { strategy: "s1", steps: ["24", "44"] }
        },
        {
          id: "2.2-x2", type: "many", arity: 2, ordered: true,
          labels: ["w", "v"],
          ask: "Khi w = 12 và v = 5 thì 2w − 3v = 9. Tìm những cặp số nguyên w, v khác cũng làm 2w − 3v bằng 9.",
          why: "Thay số và tính đúng thứ tự (nhân trước, trừ sau) nhiều lần là cách tập cho tay quen với công thức.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && 2 * v[0] - 3 * v[1] === 9; },
          challenge: function (v) { return v[0] < 0 && v[1] < 0; },
          challengeText: "Cả w và v đều là số âm.",
          kinds: [
            { id: "pos", text: "cả w và v đều dương", test: function (v) { return v[0] > 0 && v[1] > 0; } },
            { id: "mix", text: "w dương, v âm", test: function (v) { return v[0] > 0; } },
            { id: "neg", text: "w không dương (w ≤ 0)", test: function () { return true; } }
          ],
          kindSamples: [["6", "1"], ["9", "3"], ["3", "-1"], ["0", "-3"], ["-3", "-5"]],
          sample: { values: ["6", "1"] }
        },
        {
          id: "2.2-x3", type: "whatif", base: 3,
          ask: "Công thức V = I × R. Với V = 12 và R = 4 thì I = 3. Nếu R tăng gấp đôi thành 8 (V vẫn là 12) thì I bằng bao nhiêu?",
          why: "Đổi công thức bằng phép ngược (I = V ÷ R) giúp em dự đoán một đại lượng thay đổi thế nào khi đại lượng kia đổi.",
          answer: function () { return 12 / 8; },
          reasons: [
            "I = V ÷ R; chia cho số gấp đôi thì I chỉ còn một nửa: 12 ÷ 8 = 1,5.",
            "R gấp đôi nên I cũng gấp đôi.",
            "R tăng thêm 4 nên I giảm đi 4."
          ],
          reason: 0,
          sample: { guess: "1,5", reason: 0 }
        }
      ],
      "2.3": [
        {
          id: "2.3-x1", type: "many", arity: 2, ordered: false,
          labels: ["a", "b"],
          ask: "Biểu thức ax + 4y + bx − y rút gọn được thành 6x + 3y. Tìm các cặp số nguyên a, b (khác 0).",
          why: "Chỉ các hạng tử đồng dạng mới gộp được: a và b chỉ cần có tổng đúng, còn phần chứa y tự rút gọn riêng.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && v[1] !== 0 && v[0] + v[1] === 6; },
          challenge: function (v) { return v[0] < -10 || v[1] < -10; },
          challengeText: "Một trong hai hệ số nhỏ hơn −10.",
          kinds: [
            { id: "pos", text: "cả hai hệ số đều dương", test: function (v) { return v[0] > 0; } },
            { id: "one", text: "có một hệ số âm có 1 chữ số", test: function (v) { return v[0] > -10; } },
            { id: "big", text: "có một hệ số âm từ 2 chữ số trở lên", test: function () { return true; } }
          ],
          kindSamples: [["1", "5"], ["2", "4"], ["-1", "7"], ["-3", "9"], ["-20", "26"]],
          sample: { values: ["2", "4"] }
        },
        {
          id: "2.3-x2", type: "make",
          ask: "Tự ra đề rút gọn ax + by + cx + dy (a, b, c, d nguyên từ −20 đến 20, khác 0). Người giải rút gọn rồi tính giá trị khi x = 3 và y = −2.",
          why: "Rút gọn trước khi thay số giúp tính nhanh và ít nhầm — em sẽ dùng điều này khi mở ngoặc và giải phương trình.",
          template: "Rút gọn ax + by + cx + dy",
          fields: [{ id: "a", label: "a" }, { id: "b", label: "b" }, { id: "c", label: "c" }, { id: "d", label: "d" }],
          valid: function (f) { return coefs(f).every(function (c) { return inRange(c, -20, 20) && c !== 0; }); },
          solve: function (f) { return (f.a + f.c) * 3 + (f.b + f.d) * -2; },
          render: function (f, lang) {
            return lang === "en"
              ? "Simplify " + four(f) + ", then find its value when x = 3 and y = −2."
              : "Rút gọn " + four(f) + " rồi tính giá trị khi x = 3 và y = −2.";
          },
          criteria: [
            { id: "minus", text: "Đề có hạng tử bị trừ (hệ số âm)", test: function (f) { return coefs(f).some(function (c) { return c < 0; }); } },
            { id: "onex", text: "Rút gọn xong, hệ số của x bằng 1 (chỉ viết x)", test: function (f) { return f.a + f.c === 1; } },
            { id: "cancel", text: "Các hạng tử chứa y triệt tiêu nhau", test: function (f) { return f.b + f.d === 0; } },
            { id: "negafter", text: "Rút gọn xong, còn hệ số âm", test: function (f) { return f.a + f.c < 0 || f.b + f.d < 0; } },
            { id: "one", text: "Đề có hạng tử hệ số 1 hoặc −1 (viết x, −y…)", test: function (f) { return coefs(f).some(function (c) { return Math.abs(c) === 1; }); } }
          ],
          sample: { fields: { a: "3", b: "-4", c: "-2", d: "4" } }
        },
        {
          id: "2.3-x3", type: "whatif", base: 22,
          ask: "Ví dụ: 4p + 3q + 2p − q rút gọn thành 6p + 2q; khi p = 2, q = 5 giá trị là 22. Nếu đổi −q thành −3q thì khi p = 2, q = 5 giá trị là bao nhiêu?",
          why: "Nhìn ra các hạng tử triệt tiêu nhau giúp em rút gọn và tính nhanh hơn rất nhiều.",
          answer: function () { return 6 * 2; },
          reasons: [
            "3q − 3q = 0 nên q biến mất, chỉ còn 6p = 12.",
            "Bớt thêm 2q chỉ làm kết quả giảm 2, còn 20.",
            "Khi các hạng tử chứa q triệt tiêu thì cả biểu thức bằng 0."
          ],
          reason: 0,
          sample: { guess: "12", reason: 0 }
        }
      ],
      "2.4": [
        {
          id: "2.4-x1", type: "pattern",
          ask: "Dãy có số hạng thứ n là 3(n + 2): 9, 12, 15, … Tìm số hạng thứ 10, thứ 25, thứ 100 và viết số hạng tổng quát ở dạng không có ngoặc.",
          why: "Mở ngoặc 3(n + 2) = 3n + 6 cho thấy ngay dãy tăng 3 mỗi lần — nối với cách tìm số hạng tổng quát ở chương 9.",
          seq: [9, 12, 15],
          term: function (n) { return 3 * n + 6; },
          askN: [10, 25, 100],
          sample: { terms: { 10: "36", 25: "81", 100: "306" }, rule: "3n+6" }
        },
        {
          id: "2.4-x2", type: "ways",
          ask: "Tính giá trị của 5(2x + 4) − 12 khi x = 4 theo nhiều cách.",
          why: "Thay số trước hay mở ngoặc trước đều đúng — so sánh hai đường giúp em tin rằng phép mở ngoặc không làm đổi giá trị.",
          strategies: [
            { id: "s1", name: "Thay x = 4 vào trong ngoặc trước", steps: [
              { ask: "2 × 4 + 4 = ?", answer: 12 }, { ask: "5 × 12 = ?", answer: 60 }, { answer: 48 }] },
            { id: "s2", name: "Mở ngoặc và rút gọn hết, rồi mới thay số", steps: [
              { ask: "Rút gọn được dạng □x + ○. Hệ số của x là bao nhiêu?", answer: 10 },
              { ask: "Hằng số ○ là bao nhiêu?", answer: 8 }, { answer: 48 }] },
            { id: "s3", name: "Mở ngoặc thành 10x + 20 − 12 rồi thay số", steps: [
              { ask: "10x khi x = 4 bằng bao nhiêu?", answer: 40 }, { ask: "40 + 20 = ?", answer: 60 }, { answer: 48 }] }
          ],
          sample: { strategy: "s2", steps: ["10", "8", "48"] }
        },
        {
          id: "2.4-x3", type: "many", arity: 3, ordered: true,
          labels: ["a", "b", "c"],
          ask: "Tìm các số nguyên a, b, c sao cho mở ngoặc a(bx + c) được đúng 12x − 18.",
          why: "Đi ngược phép mở ngoặc là đặt nhân tử chung — kỹ năng em sẽ cần để rút gọn và giải phương trình.",
          check: function (v) { return v.every(isInt) && v[0] !== 0 && v[0] * v[1] === 12 && v[0] * v[2] === -18; },
          kinds: [
            { id: "a1", text: "đặt ra ngoài 1 hoặc −1", test: function (v) { return Math.abs(v[0]) === 1; } },
            { id: "a2", text: "đặt ra ngoài 2 hoặc −2", test: function (v) { return Math.abs(v[0]) === 2; } },
            { id: "a3", text: "đặt ra ngoài 3 hoặc −3", test: function (v) { return Math.abs(v[0]) === 3; } },
            { id: "a6", text: "đặt ra ngoài nhân tử chung lớn nhất 6 hoặc −6", test: function () { return true; } }
          ],
          kindSamples: [["1", "12", "-18"], ["-1", "-12", "18"], ["2", "6", "-9"], ["3", "4", "-6"], ["6", "2", "-3"]],
          sample: { values: ["2", "6", "-9"] }
        }
      ],
      "2.5": [
        {
          id: "2.5-x1", type: "make",
          ask: "Tự ra một phương trình ax + b = c: em chọn a (2 đến 12), b (−50 đến 50, khác 0) và nghiệm x (−20 đến 20); game tự tính vế phải c.",
          why: "Bắt đầu từ nghiệm để tạo phương trình là đi ngược đường giải — giúp em hiểu vì sao làm phép ngược ở cả hai vế lại đúng.",
          template: "Giải ax + b = c",
          fields: [{ id: "a", label: "Hệ số a" }, { id: "b", label: "Số b" }, { id: "x", label: "Nghiệm x" }],
          valid: function (f) { return inRange(f.a, 2, 12) && inRange(f.b, -50, 50) && f.b !== 0 && inRange(f.x, -20, 20); },
          solve: function (f) { return f.x; },
          render: function (f, lang) {
            return (lang === "en" ? "Solve " : "Giải phương trình ") + f.a + "x" + signed(f.b) + " = " + neg(f.a * f.x + f.b) + ".";
          },
          criteria: [
            { id: "xneg", text: "Nghiệm là số âm", test: function (f) { return f.x < 0; } },
            { id: "bneg", text: "Vế trái có phép trừ (b âm)", test: function (f) { return f.b < 0; } },
            { id: "cneg", text: "Vế phải là số âm", test: function (f) { return f.a * f.x + f.b < 0; } },
            { id: "abig", text: "Hệ số a từ 7 trở lên", test: function (f) { return f.a >= 7; } },
            { id: "czero", text: "Vế phải bằng 0", test: function (f) { return f.a * f.x + f.b === 0; } }
          ],
          sample: { fields: { a: "8", b: "-5", x: "-1" } }
        },
        {
          id: "2.5-x2", type: "ways",
          ask: "Giải phương trình 3(x + 4) = 27 theo nhiều cách.",
          why: "Chia trước, mở ngoặc trước hay thử dần đều dẫn tới cùng nghiệm — em chọn cách gọn nhất cho từng phương trình.",
          strategies: [
            { id: "s1", name: "Chia hai vế cho 3 trước", steps: [{ ask: "x + 4 = ?", answer: 9 }, { answer: 5 }] },
            { id: "s2", name: "Mở ngoặc trước: 3x + 12 = 27", steps: [{ ask: "3x = ?", answer: 15 }, { answer: 5 }] },
            { id: "s3", name: "Thử rồi điều chỉnh", steps: [
              { ask: "Thử x = 3: vế trái bằng bao nhiêu?", answer: 21 },
              { ask: "Mỗi khi x tăng 1, vế trái tăng bao nhiêu?", answer: 3 }, { answer: 5 }] }
          ],
          sample: { strategy: "s1", steps: ["9", "5"] }
        },
        {
          id: "2.5-x3", type: "many", arity: 2, ordered: true,
          labels: ["a", "b"],
          ask: "Tìm các số nguyên a, b (a ≠ 0) sao cho phương trình ax − 6 = b có nghiệm x = 4.",
          why: "Kiểm tra nghiệm bằng cách thay vào phương trình là bước em nên làm sau mỗi lần giải.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && 4 * v[0] - 6 === v[1]; },
          challenge: function (v) { return v[0] === v[1]; },
          challengeText: "a và b bằng nhau.",
          kinds: [
            { id: "pos", text: "a và b đều dương", test: function (v) { return v[0] > 0 && v[1] > 0; } },
            { id: "mix", text: "a dương, b âm", test: function (v) { return v[0] > 0; } },
            { id: "neg", text: "a và b đều âm", test: function () { return true; } }
          ],
          kindSamples: [["3", "6"], ["2", "2"], ["1", "-2"], ["-1", "-10"], ["-2", "-14"]],
          sample: { values: ["3", "6"] }
        }
      ],
      "2.6": [
        {
          id: "2.6-x1", type: "many", arity: 2, ordered: true,
          labels: ["a (x > a)", "b (x < b)"],
          ask: "Tìm hai số nguyên a và b sao cho có đúng 4 số nguyên x thoả mãn cả x > a và x < b.",
          why: "Dấu > và < không lấy chính số đó (vòng tròn rỗng) — đếm đúng các số nguyên là cách kiểm tra em hiểu điều này.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[1] - v[0] === 5; },
          challenge: function (v) { return v[1] <= 0; },
          challengeText: "Cả bốn số nguyên x đều là số âm.",
          kinds: [
            { id: "pos", text: "bốn số x đều dương", test: function (v) { return v[0] >= 0; } },
            { id: "neg", text: "bốn số x đều âm", test: function (v) { return v[1] <= 0; } },
            { id: "mix", text: "bốn số x có số 0 hoặc có cả âm lẫn dương", test: function () { return true; } }
          ],
          kindSamples: [["0", "5"], ["3", "8"], ["-5", "0"], ["-10", "-5"], ["-2", "3"]],
          sample: { values: ["0", "5"] }
        },
        {
          id: "2.6-x2", type: "whatif", base: 1,
          ask: "Ví dụ: với y < 2, số nguyên lớn nhất y có thể nhận là 1. Nếu đổi thành y < −2 thì số nguyên lớn nhất là bao nhiêu?",
          why: "Với số âm, “lớn nhất” là số gần 0 nhất — phải nghĩ trên trục số, không chỉ nhìn chữ số.",
          answer: function () { return -3; },
          reasons: [
            "Số nguyên ngay bên trái −2 trên trục số là −3, nên −3 lớn nhất.",
            "Làm như với 2 → 1: bớt 1 ở phần số nên −2 thành −1.",
            "Số lớn nhất chính là −2 vì đề cho −2."
          ],
          reason: 0,
          sample: { guess: "-3", reason: 0 }
        },
        {
          id: "2.6-x3", type: "pattern",
          ask: "Bất đẳng thức thứ n là x > 5n. Số nguyên nhỏ nhất thoả mãn lần lượt là 6, 11, 16, … Tìm số đó khi n = 8, n = 20, n = 50 và viết quy luật tổng quát.",
          why: "“Lớn hơn” không lấy chính số đó nên luôn phải cộng thêm 1 — một quy luật giúp em trả lời mọi bất đẳng thức trong dãy.",
          seq: [6, 11, 16],
          term: function (n) { return 5 * n + 1; },
          askN: [8, 20, 50],
          sample: { terms: { 8: "41", 20: "101", 50: "251" }, rule: "5n+1" }
        }
      ]
    },
    tr: {
      en: {
        "q.2.1-x1.labels": ["Coefficient a", "Constant b"],
        "q.2.1-x1.ask": "The expression a·x + b (a, b integers; a not 0 or 1) has value 4 when x = 4, so it “gives back” the number you thought of. Find pairs: coefficient a and constant b.",
        "q.2.1-x1.why": "Change the coefficient and the constant must change too — you see clearly what each term of an expression does.",
        "q.2.1-x1.challengeText": "The constant b is positive.",
        "q.2.1-x2.ask": "Example: Ella is half Mathew’s age, written x/2; when x = 12, Ella is 6. If someone wrongly writes 2x, what is its value when x = 12?",
        "q.2.1-x2.why": "“Twice” and “half” are easy to mix up — trying a number helps you spot a wrong expression.",
        "q.2.1-x2.reasons": [
          "2x means twice (2 × x), not half: 2 × 12 = 24.",
          "2x and x/2 are the same because both have a 2 and an x.",
          "2x means 2 + x, so it gives 14."
        ],
        "q.2.1-x3.ask": "Make a problem: “Think of a number x, multiply by a then add b” (a from 2 to 12; b from −30 to 30, not 0; x from −20 to 20). The solver writes an expression and finds its value for your x.",
        "q.2.1-x3.why": "Turning words into an expression and then substituting is what you will do again and again with formulae and equations.",
        "q.2.1-x3.template": "Think of x, multiply by a then add b",
        "q.2.1-x3.fields": ["Multiply by a", "Add b (negative means subtract)", "Value of x"],
        "q.2.1-x3.criteria": [
          "The problem has a subtraction (b is negative)", "The value of x is negative",
          "The expression has value 0", "The expression has a negative value", "The expression has a value greater than 100"
        ],
        "q.2.2-x1.ask": "Cinema tickets cost T = 8a + 5c dollars for a adults and c children. How much does a group of 3 adults and 4 children pay? Solve it in several ways.",
        "q.2.2-x1.why": "Substituting directly and grouping cleverly give the same answer — knowing several ways lets you check your work with formulae.",
        "q.2.2-x1.strategies": ["Substitute into the formula", "Pretend everyone pays 5 dollars, then add what the adults pay extra", "Pair each adult with a child (13 dollars a pair)"],
        "q.2.2-x1.steps.s1": ["8 × 3 = ?"],
        "q.2.2-x1.steps.s2": ["7 people at 5 dollars each: how much altogether?", "Each adult pays 3 dollars more: how much extra for 3 adults?"],
        "q.2.2-x1.steps.s3": ["How many dollars for 3 pairs?"],
        "q.2.2-x2.labels": ["w", "v"],
        "q.2.2-x2.ask": "When w = 12 and v = 5, 2w − 3v = 9. Find other pairs of integers w, v that also make 2w − 3v equal 9.",
        "q.2.2-x2.why": "Substituting many times in the right order (multiply first, then subtract) makes using formulae automatic.",
        "q.2.2-x2.challengeText": "Both w and v are negative.",
        "q.2.2-x2.kinds": ["both w and v are positive", "w is positive, v is negative", "w is not positive (w ≤ 0)"],
        "q.2.2-x3.ask": "The formula V = I × R. With V = 12 and R = 4, I = 3. If R is doubled to 8 (V is still 12), what is I?",
        "q.2.2-x3.why": "Rearranging a formula with an inverse (I = V ÷ R) lets you predict how one quantity changes when another changes.",
        "q.2.2-x3.reasons": [
          "I = V ÷ R; dividing by double the number halves I: 12 ÷ 8 = 1.5.",
          "R doubles, so I doubles too.",
          "R goes up by 4, so I goes down by 4."
        ],
        "q.2.3-x1.labels": ["a", "b"],
        "q.2.3-x1.ask": "The expression ax + 4y + bx − y simplifies to 6x + 3y. Find pairs of integers a, b (not 0).",
        "q.2.3-x1.why": "Only like terms can be collected: a and b just need the right total, and the y terms simplify on their own.",
        "q.2.3-x1.challengeText": "One of the two coefficients is less than −10.",
        "q.2.3-x1.kinds": ["both coefficients are positive", "one coefficient is negative with 1 digit", "one coefficient is negative with 2 or more digits"],
        "q.2.3-x2.ask": "Make a problem: simplify ax + by + cx + dy (a, b, c, d integers from −20 to 20, not 0). The solver simplifies, then finds the value when x = 3 and y = −2.",
        "q.2.3-x2.why": "Simplifying before substituting is quicker and safer — you will use this when expanding brackets and solving equations.",
        "q.2.3-x2.template": "Simplify ax + by + cx + dy",
        "q.2.3-x2.fields": ["a", "b", "c", "d"],
        "q.2.3-x2.criteria": [
          "A term is subtracted (negative coefficient)", "After simplifying, the coefficient of x is 1 (write just x)",
          "The y terms cancel out", "After simplifying, a coefficient is negative", "A term has coefficient 1 or −1 (written x, −y…)"
        ],
        "q.2.3-x3.ask": "Example: 4p + 3q + 2p − q simplifies to 6p + 2q; when p = 2, q = 5 its value is 22. If −q becomes −3q, what is the value when p = 2, q = 5?",
        "q.2.3-x3.why": "Spotting terms that cancel makes simplifying and evaluating much faster.",
        "q.2.3-x3.reasons": [
          "3q − 3q = 0, so q disappears and only 6p = 12 is left.",
          "Taking away 2q more only makes the answer 2 smaller, so 20.",
          "When the q terms cancel, the whole expression is 0."
        ],
        "q.2.4-x1.ask": "A sequence has nth term 3(n + 2): 9, 12, 15, … Find the 10th, 25th and 100th terms and write the nth term without brackets.",
        "q.2.4-x1.why": "Expanding 3(n + 2) = 3n + 6 shows at once that the sequence goes up by 3 — linking to finding the nth term in unit 9.",
        "q.2.4-x2.ask": "Find the value of 5(2x + 4) − 12 when x = 4 in several ways.",
        "q.2.4-x2.why": "Substituting first or expanding first are both correct — comparing them shows that expanding never changes the value.",
        "q.2.4-x2.strategies": ["Substitute x = 4 inside the bracket first", "Expand and simplify fully, then substitute", "Expand to 10x + 20 − 12, then substitute"],
        "q.2.4-x2.steps.s1": ["2 × 4 + 4 = ?", "5 × 12 = ?"],
        "q.2.4-x2.steps.s2": ["It simplifies to □x + ○. What is the coefficient of x?", "What is the constant ○?"],
        "q.2.4-x2.steps.s3": ["What is 10x when x = 4?", "40 + 20 = ?"],
        "q.2.4-x3.labels": ["a", "b", "c"],
        "q.2.4-x3.ask": "Find integers a, b, c so that expanding a(bx + c) gives exactly 12x − 18.",
        "q.2.4-x3.why": "Going backwards from expanding is taking out a common factor — a skill you will need to simplify and solve equations.",
        "q.2.4-x3.kinds": ["taking out 1 or −1", "taking out 2 or −2", "taking out 3 or −3", "taking out the highest common factor 6 or −6"],
        "q.2.5-x1.ask": "Make an equation ax + b = c: you choose a (2 to 12), b (−50 to 50, not 0) and the solution x (−20 to 20); the game works out the right-hand side c.",
        "q.2.5-x1.why": "Starting from the solution to build an equation is solving in reverse — it shows why doing the inverse to both sides works.",
        "q.2.5-x1.template": "Solve ax + b = c",
        "q.2.5-x1.fields": ["Coefficient a", "Number b", "Solution x"],
        "q.2.5-x1.criteria": [
          "The solution is negative", "The left-hand side has a subtraction (b is negative)",
          "The right-hand side is negative", "The coefficient a is 7 or more", "The right-hand side is 0"
        ],
        "q.2.5-x2.ask": "Solve the equation 3(x + 4) = 27 in several ways.",
        "q.2.5-x2.why": "Dividing first, expanding first or trying values all reach the same solution — you choose the neatest way for each equation.",
        "q.2.5-x2.strategies": ["Divide both sides by 3 first", "Expand first: 3x + 12 = 27", "Try, then improve"],
        "q.2.5-x2.steps.s1": ["x + 4 = ?"],
        "q.2.5-x2.steps.s2": ["3x = ?"],
        "q.2.5-x2.steps.s3": ["Try x = 3: what is the left-hand side?", "Each time x goes up by 1, how much does the left-hand side go up?"],
        "q.2.5-x3.labels": ["a", "b"],
        "q.2.5-x3.ask": "Find integers a, b (a ≠ 0) so that the equation ax − 6 = b has the solution x = 4.",
        "q.2.5-x3.why": "Checking a solution by substituting it into the equation is a step you should do after every solve.",
        "q.2.5-x3.challengeText": "a and b are equal.",
        "q.2.5-x3.kinds": ["a and b are both positive", "a is positive, b is negative", "a and b are both negative"],
        "q.2.6-x1.labels": ["a (x > a)", "b (x < b)"],
        "q.2.6-x1.ask": "Find two integers a and b so that exactly 4 integers x satisfy both x > a and x < b.",
        "q.2.6-x1.why": "The signs > and < do not include the number itself (open circle) — counting the integers correctly checks that you understand this.",
        "q.2.6-x1.challengeText": "All four integers x are negative.",
        "q.2.6-x1.kinds": ["all four integers x are positive", "all four integers x are negative", "the four integers x include 0 or both signs"],
        "q.2.6-x2.ask": "Example: for y < 2, the largest integer y can be is 1. If it becomes y < −2, what is the largest integer?",
        "q.2.6-x2.why": "With negative numbers, “largest” means closest to 0 — think on the number line, not just about the digits.",
        "q.2.6-x2.reasons": [
          "The integer just to the left of −2 on the number line is −3, so −3 is the largest.",
          "Do the same as 2 → 1: take 1 off the number part, so −2 becomes −1.",
          "The largest is −2 itself because the question says −2."
        ],
        "q.2.6-x3.ask": "The nth inequality is x > 5n. The smallest integers that satisfy them are 6, 11, 16, … Find that integer when n = 8, n = 20 and n = 50, and write the general rule.",
        "q.2.6-x3.why": "“Greater than” never includes the number itself, so you always add 1 — one rule answers every inequality in the sequence."
      },
      vi: {}
    }
  });
})();
