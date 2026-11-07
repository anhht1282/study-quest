// 🚀 Extension quests — Math 8, unit 2 (Expressions, formulae and equations). Schema: MATH_QUESTS_GUIDE.md.
// Own wording, built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const neg = function (x) { return String(x).replace("-", "−"); };
  const par = function (x) { return x < 0 ? "(" + neg(x) + ")" : String(x); };
  // "x + 3", "x − 4", "x"
  const xPlus = function (b) { return b === 0 ? "x" : b > 0 ? "x + " + b : "x − " + (-b); };
  // a·x + b written the usual way: "5x − 4", "−x + 2", "3", "x"
  const lin = function (a, b) {
    const ax = a === 0 ? "" : a === 1 ? "x" : a === -1 ? "−x" : neg(a) + "x";
    if (!ax) return neg(b);
    return b === 0 ? ax : b > 0 ? ax + " + " + b : ax + " − " + (-b);
  };
  // k(x + b) as the first term or as a following term
  const bracket = function (k, b, first) {
    const body = "(" + xPlus(b) + ")";
    const size = Math.abs(k) === 1 ? "" : String(Math.abs(k));
    if (first) return (k < 0 ? "−" : "") + size + body;
    return (k < 0 ? " − " : " + ") + size + body;
  };

  window.GAME_QUESTS.push({
    unit: 2,
    sections: {
      "2.1": [
        {
          id: "2.1-x1", type: "whatif", base: -12,
          ask: "Nghĩ số x, cộng 2 rồi nhân với 4 được biểu thức 4(x + 2); với x = −5 kết quả là −12. Nếu đổi thứ tự: nhân với 4 trước rồi mới cộng 2 (biểu thức 4x + 2) thì với x = −5 được bao nhiêu?",
          why: "Dấu ngoặc cho biết phép nào làm trước — viết đúng biểu thức từ lời văn là bước đầu của mọi bài lập phương trình.",
          answer: function () { return 4 * -5 + 2; },
          reasons: [
            "Nhân trước thì chỉ x được nhân với 4, số 2 cộng sau không bị nhân: −20 + 2 = −18.",
            "Đổi thứ tự không làm thay đổi kết quả, vẫn là −12.",
            "4x + 2 và 4(x + 2) chỉ khác nhau 2 đơn vị, nên được −10."
          ],
          reason: 0,
          sample: { guess: "-18", reason: 0 }
        },
        {
          id: "2.1-x2", type: "pattern",
          ask: "Hình chữ nhật thứ n có chiều rộng n cm, chiều dài hơn chiều rộng 1 cm. Diện tích các hình là 2, 6, 12, 20, … (cm²). Tìm diện tích hình thứ 6, thứ 10, thứ 15 và viết biểu thức cho diện tích hình thứ n.",
          why: "Biểu thức không chỉ là bậc nhất: viết n(n + 1) cho thấy cần dấu ngoặc để “cộng 1 trước rồi mới nhân”.",
          seq: [2, 6, 12, 20],
          term: function (n) { return n * (n + 1); },
          askN: [6, 10, 15],
          sample: { terms: { 6: "42", 10: "110", 15: "240" }, rule: "n(n+1)" }
        },
        {
          id: "2.1-x3", type: "make",
          ask: "Tự ra đề “Nghĩ một số x. Cộng b vào số đó, rồi chia kết quả cho a.” với x, b từ −100 đến 100, a từ −12 đến 12 (a khác 0 và 1), kết quả phải là số nguyên. Đáp án là giá trị của (x + b) ÷ a.",
          why: "Tự đặt số vào biểu thức (x + b)/a giúp em thấy vai trò của dấu ngoặc và của phép chia viết dưới dạng phân số.",
          template: "(x + b) ÷ a",
          fields: [{ id: "x", label: "Số nghĩ x" }, { id: "b", label: "Số cộng b" }, { id: "a", label: "Số chia a" }],
          valid: function (f) {
            return inRange(f.x, -100, 100) && inRange(f.b, -100, 100) && inRange(f.a, -12, 12) && f.a !== 0 && f.a !== 1 && (f.x + f.b) % f.a === 0;
          },
          solve: function (f) { return (f.x + f.b) / f.a; },
          render: function (f, lang) {
            return lang === "en"
              ? "Think of a number. Add " + par(f.b) + ", then divide the result by " + par(f.a) + ". If the number is " + neg(f.x) + ", what do you get?"
              : "Nghĩ một số. Cộng " + par(f.b) + " vào số đó, rồi chia kết quả cho " + par(f.a) + ". Nếu số nghĩ là " + neg(f.x) + " thì được số nào?";
          },
          criteria: [
            { id: "ansneg", text: "Kết quả là số âm", test: function (f) { return (f.x + f.b) / f.a < 0; } },
            { id: "divneg", text: "Chia cho một số âm", test: function (f) { return f.a < 0; } },
            { id: "trap", text: "Nếu quên ngoặc (tính x + b ÷ a) thì kết quả lệch ít nhất 10", test: function (f) { return Math.abs(f.x + f.b / f.a - (f.x + f.b) / f.a) >= 10; } },
            { id: "same", text: "Kết quả bằng đúng số đã nghĩ", test: function (f) { return (f.x + f.b) / f.a === f.x; } },
            { id: "bneg", text: "Số cộng vào là số âm", test: function (f) { return f.b < 0; } }
          ],
          sample: { fields: { x: "20", b: "-5", a: "3" } }
        }
      ],
      "2.2": [
        {
          id: "2.2-x1", type: "many", arity: 1,
          labels: ["x"],
          ask: "Tìm số nguyên x sao cho giá trị của biểu thức x² + 3x không lớn hơn 10.",
          why: "Thế cả số âm vào x² + 3x giúp em nhớ (−4)² = 16 chứ không phải −16 — chỗ hay sai nhất khi dùng công thức.",
          check: function (v) { return isInt(v[0]) && v[0] * v[0] + 3 * v[0] <= 10; },
          challenge: function (v) { return v[0] * v[0] + 3 * v[0] < 0; },
          challengeText: "Giá trị của x² + 3x là số âm.",
          kinds: [
            { id: "neg", text: "x² + 3x âm", test: function (v) { return v[0] * v[0] + 3 * v[0] < 0; } },
            { id: "zero", text: "x² + 3x bằng 0", test: function (v) { return v[0] * v[0] + 3 * v[0] === 0; } },
            { id: "pos", text: "x² + 3x dương", test: function () { return true; } }
          ],
          kindSamples: [["-1"], ["-2"], ["0"], ["-3"], ["1"]],
          sample: { values: ["2"] }
        },
        {
          id: "2.2-x2", type: "ways",
          ask: "Công thức quãng đường s = (u + v)t ÷ 2. Tìm v khi s = 60, u = 4 và t = 6 theo nhiều cách.",
          why: "Thế số trước, đổi chủ thể trước hay thử và điều chỉnh đều dẫn tới cùng đáp số — em chọn cách hợp với từng công thức.",
          strategies: [
            { id: "s1", name: "Thế số trước rồi giải phương trình", steps: [
              { ask: "60 = (4 + v) × 6 ÷ 2 = 3(4 + v). Vậy 4 + v = ?", answer: 20 }, { answer: 16 }] },
            { id: "s2", name: "Đổi chủ thể trước: v = 2s ÷ t − u", steps: [
              { ask: "2s = ?", answer: 120 }, { ask: "2s ÷ t = ?", answer: 20 }, { answer: 16 }] },
            { id: "s3", name: "Thử một giá trị rồi điều chỉnh", steps: [
              { ask: "Thử v = 10 thì s bằng bao nhiêu?", answer: 42 },
              { ask: "Mỗi khi v tăng 1 thì s tăng bao nhiêu?", answer: 3 }, { answer: 16 }] }
          ],
          sample: { strategy: "s1", steps: ["20", "16"] }
        },
        {
          id: "2.2-x3", type: "whatif", base: -54,
          ask: "Khi y = −3 thì 2y³ = 2 × (−27) = −54. Nếu đổi biểu thức thành (2y)³ thì với y = −3 được bao nhiêu?",
          why: "Lũy thừa chỉ tác động lên thứ đứng ngay trước nó, trừ khi có ngoặc — điều này quyết định kết quả khi thế số vào công thức.",
          answer: function () { return Math.pow(2 * -3, 3); },
          reasons: [
            "Có ngoặc nên tính 2y = −6 trước, rồi (−6)³ = −216.",
            "Ngoặc không làm thay đổi gì, vẫn là −54.",
            "Lập phương làm số âm thành dương, nên được 216."
          ],
          reason: 0,
          sample: { guess: "-216", reason: 0 }
        }
      ],
      "2.3": [
        {
          id: "2.3-x1", type: "many", arity: 2, ordered: true,
          labels: ["a", "b"],
          ask: "Tìm hai số nguyên a, b (từ −20 đến 20) sao cho khi mở ngoặc và rút gọn, 3(x + a) − 2(x + b) bằng x + 5.",
          why: "Mở ngoặc với số âm ở ngoài (−2 nhân cả x lẫn b) rồi gộp số hạng đồng dạng là kỹ năng chính của chặng này.",
          check: function (v) { return inRange(v[0], -20, 20) && inRange(v[1], -20, 20) && 3 * v[0] - 2 * v[1] === 5; },
          challenge: function (v) { return v[0] === v[1]; },
          challengeText: "a bằng b.",
          kinds: [
            { id: "pos", text: "a và b cùng dương", test: function (v) { return v[0] > 0 && v[1] > 0; } },
            { id: "neg", text: "a và b cùng âm", test: function (v) { return v[0] < 0 && v[1] < 0; } },
            { id: "mix", text: "a, b khác dấu", test: function () { return true; } }
          ],
          kindSamples: [["3", "2"], ["5", "5"], ["-1", "-4"], ["-3", "-7"], ["1", "-1"]],
          sample: { values: ["3", "2"] }
        },
        {
          id: "2.3-x2", type: "make",
          ask: "Tự ra đề mở ngoặc a(x + b) + c(x + d) với a, b, c, d là số nguyên khác 0 từ −12 đến 12. Đáp án của đề là số hạng không chứa x sau khi rút gọn.",
          why: "Chọn số để x triệt tiêu hay hằng số bằng 0 buộc em tính trước kết quả mở ngoặc — người ra đề phải hiểu sâu nhất.",
          template: "a(x + b) + c(x + d)",
          fields: [{ id: "a", label: "Số a" }, { id: "b", label: "Số b" }, { id: "c", label: "Số c" }, { id: "d", label: "Số d" }],
          valid: function (f) {
            return [f.a, f.b, f.c, f.d].every(function (x) { return inRange(x, -12, 12) && x !== 0; });
          },
          solve: function (f) { return f.a * f.b + f.c * f.d; },
          render: function (f, lang) {
            const e = bracket(f.a, f.b, true) + bracket(f.c, f.d, false);
            return lang === "en" ? "Expand and simplify " + e + ". Enter the term without x."
              : "Mở ngoặc và rút gọn " + e + ". Nhập số hạng không chứa x.";
          },
          criteria: [
            { id: "nox", text: "Số hạng chứa x triệt tiêu (a + c = 0)", test: function (f) { return f.a + f.c === 0; } },
            { id: "zero", text: "Số hạng không chứa x bằng 0", test: function (f) { return f.a * f.b + f.c * f.d === 0; } },
            { id: "negout", text: "Có ngoặc được nhân với số âm", test: function (f) { return f.a < 0 || f.c < 0; } },
            { id: "onex", text: "Sau khi rút gọn, hệ số của x bằng 1", test: function (f) { return f.a + f.c === 1; } },
            { id: "bothsub", text: "Trong cả hai ngoặc đều là phép trừ (b < 0 và d < 0)", test: function (f) { return f.b < 0 && f.d < 0; } }
          ],
          sample: { fields: { a: "4", b: "-3", c: "-3", d: "-5" } }
        },
        {
          id: "2.3-x3", type: "whatif", base: -21,
          ask: "−3(2x + 7) = −6x − 21. Nếu đổi thành −3(2x − 7) thì số hạng không chứa x là bao nhiêu?",
          why: "Số âm ngoài ngoặc nhân với MỌI số hạng, kể cả dấu của chúng — đây là lỗi mở ngoặc hay gặp nhất.",
          answer: function () { return -3 * -7; },
          reasons: [
            "−3 × (−7) = 21: nhân hai số âm được số dương.",
            "Vẫn là −21 vì dấu trừ trước ngoặc làm mọi số hạng đều âm.",
            "Chỉ nhân −3 với số hạng đầu, nên số hạng sau vẫn là −7."
          ],
          reason: 0,
          sample: { guess: "21", reason: 0 }
        }
      ],
      "2.4": [
        {
          id: "2.4-x1", type: "many", arity: 3, ordered: true,
          labels: ["k", "p", "q"],
          ask: "Viết 24x + 36 = k(px + q) với k, p, q là số nguyên (k khác 0). Không bắt buộc k là ƯCLN. Tìm càng nhiều bộ (k, p, q) càng tốt.",
          why: "Thấy mọi cách đặt thừa số chung ra ngoài giúp em hiểu vì sao phân tích hoàn toàn phải dùng ƯCLN.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && isInt(v[2]) && v[0] !== 0 && v[0] * v[1] === 24 && v[0] * v[2] === 36; },
          challenge: function (v) { return v[0] === -12; },
          challengeText: "k là số âm và đây là phân tích hoàn toàn (trong ngoặc không còn thừa số chung).",
          kinds: [
            { id: "hcf", text: "k = 12 hoặc −12 (ƯCLN, phân tích hết)", test: function (v) { return Math.abs(v[0]) === 12; } },
            { id: "pos", text: "k dương, trong ngoặc còn ước chung", test: function (v) { return v[0] > 0; } },
            { id: "neg", text: "k âm, trong ngoặc còn ước chung", test: function () { return true; } }
          ],
          kindSamples: [["12", "2", "3"], ["1", "24", "36"], ["2", "12", "18"], ["-3", "-8", "-12"], ["-4", "-6", "-9"]],
          sample: { values: ["6", "4", "6"] }
        },
        {
          id: "2.4-x2", type: "pattern",
          ask: "Dãy phép tính: 4 × 1 + 4 × 2, 5 × 2 + 5 × 3, 6 × 3 + 6 × 4, … có giá trị 12, 25, 42, … Đặt thừa số chung ra ngoài để tìm giá trị thứ 5, thứ 10, thứ 20 và quy luật của số hạng thứ n.",
          why: "Phép tính thứ n là (n + 3)n + (n + 3)(n + 1); đặt (n + 3) ra ngoài là phân tích thành nhân tử trong một bài toán quy luật.",
          seq: [12, 25, 42],
          term: function (n) { return (n + 3) * (2 * n + 1); },
          askN: [5, 10, 20],
          sample: { terms: { 5: "88", 10: "273", 20: "943" }, rule: "(n+3)(2n+1)" }
        }
      ],
      "2.5": [
        {
          id: "2.5-x1", type: "make",
          ask: "Tự ra phương trình ax + b = cx + d (các số nguyên từ −20 đến 20, a khác 0, a khác c) có nghiệm là số nguyên. Đáp án của đề là nghiệm x.",
          why: "Ra phương trình có ẩn ở hai vế buộc em nghĩ trước các bước chuyển vế — đúng kỹ năng giải phương trình của chặng.",
          template: "ax + b = cx + d",
          fields: [{ id: "a", label: "Số a" }, { id: "b", label: "Số b" }, { id: "c", label: "Số c" }, { id: "d", label: "Số d" }],
          valid: function (f) {
            return [f.a, f.b, f.c, f.d].every(function (x) { return inRange(x, -20, 20); }) && f.a !== 0 && f.a !== f.c && (f.d - f.b) % (f.a - f.c) === 0;
          },
          solve: function (f) { return (f.d - f.b) / (f.a - f.c); },
          render: function (f, lang) { return (lang === "en" ? "Solve " : "Giải phương trình ") + lin(f.a, f.b) + " = " + lin(f.c, f.d) + "."; },
          criteria: [
            { id: "both", text: "Có ẩn ở cả hai vế", test: function (f) { return f.c !== 0; } },
            { id: "solneg", text: "Nghiệm là số âm", test: function (f) { return (f.d - f.b) / (f.a - f.c) < 0; } },
            { id: "right", text: "Hệ số của x ở vế phải lớn hơn ở vế trái", test: function (f) { return f.c > f.a; } },
            { id: "neg", text: "Có hệ số hoặc hằng số âm", test: function (f) { return f.a < 0 || f.b < 0 || f.c < 0 || f.d < 0; } },
            { id: "big", text: "Nghiệm lớn hơn 10", test: function (f) { return (f.d - f.b) / (f.a - f.c) > 10; } }
          ],
          sample: { fields: { a: "5", b: "-4", c: "3", d: "8" } }
        },
        {
          id: "2.5-x2", type: "ways",
          ask: "Giải phương trình 4(x − 3) = 2x + 10 theo nhiều cách.",
          why: "Mở ngoặc trước, chia trước hay thử và điều chỉnh đều đúng — biết nhiều cách giúp em tự kiểm tra nghiệm.",
          strategies: [
            { id: "s1", name: "Mở ngoặc trước: 4x − 12 = 2x + 10", steps: [
              { ask: "Chuyển các số hạng về đúng vế: 2x = ?", answer: 22 }, { answer: 11 }] },
            { id: "s2", name: "Chia hai vế cho 2 trước", steps: [
              { ask: "Chia hai vế cho 2: 2(x − 3) = x + ?", answer: 5 }, { answer: 11 }] },
            { id: "s3", name: "Thử một giá trị rồi điều chỉnh", steps: [
              { ask: "Thử x = 10: vế trái trừ vế phải bằng bao nhiêu?", answer: -2 },
              { ask: "Mỗi khi x tăng 1 thì hiệu đó tăng bao nhiêu?", answer: 2 }, { answer: 11 }] }
          ],
          sample: { strategy: "s1", steps: ["22", "11"] }
        },
        {
          id: "2.5-x3", type: "many", arity: 2, ordered: true,
          labels: ["a", "b"],
          ask: "Tìm hai số nguyên a, b (a khác 0) sao cho phương trình a(x + b) = 24 có nghiệm x = 2.",
          why: "Đi ngược từ nghiệm về phương trình giúp em hiểu “nghiệm” nghĩa là gì: thay vào thì hai vế bằng nhau.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && v[0] * (2 + v[1]) === 24; },
          challenge: function (v) { return v[0] === v[1]; },
          challengeText: "a bằng b.",
          kinds: [
            { id: "f1", text: "cặp thừa số 1 và 24 (có dấu)", test: function (v) { return Math.min(Math.abs(v[0]), Math.abs(2 + v[1])) === 1; } },
            { id: "f2", text: "cặp thừa số 2 và 12 (có dấu)", test: function (v) { return Math.min(Math.abs(v[0]), Math.abs(2 + v[1])) === 2; } },
            { id: "f3", text: "cặp thừa số 3 và 8 (có dấu)", test: function (v) { return Math.min(Math.abs(v[0]), Math.abs(2 + v[1])) === 3; } },
            { id: "f4", text: "cặp thừa số 4 và 6 (có dấu)", test: function () { return true; } }
          ],
          kindSamples: [["1", "22"], ["24", "-1"], ["2", "10"], ["12", "0"], ["3", "6"]],
          sample: { values: ["4", "4"] }
        }
      ],
      "2.6": [
        {
          id: "2.6-x1", type: "many", arity: 2, ordered: true,
          labels: ["a", "b"],
          ask: "Tìm hai số nguyên a < b (từ −50 đến 50) sao cho bất đẳng thức a ≤ x < b có đúng 5 nghiệm nguyên.",
          why: "Đếm nghiệm buộc em để ý đầu mút nào được lấy (≤) và đầu mút nào không (<).",
          check: function (v) { return inRange(v[0], -50, 50) && inRange(v[1], -50, 50) && v[1] - v[0] === 5; },
          challenge: function (v) { return v[0] === -2; },
          challengeText: "Tổng các nghiệm nguyên bằng 0.",
          kinds: [
            { id: "pos", text: "các nghiệm đều dương", test: function (v) { return v[0] > 0; } },
            { id: "neg", text: "các nghiệm đều âm", test: function (v) { return v[1] <= 0; } },
            { id: "zero", text: "các nghiệm có cả số 0", test: function () { return true; } }
          ],
          kindSamples: [["1", "6"], ["10", "15"], ["-10", "-5"], ["-6", "-1"], ["-2", "3"]],
          sample: { values: ["1", "6"] }
        },
        {
          id: "2.6-x2", type: "whatif", base: 4,
          ask: "Có 4 số nguyên x thỏa 2 ≤ x < 6. Nếu đổi thành 2 < x ≤ 6 thì có bao nhiêu số nguyên x?",
          why: "Dấu ≤ và < quyết định đầu mút có được lấy hay không — một sự thay đổi nhỏ nhưng làm đổi tập nghiệm.",
          answer: function () { return 4; },
          reasons: [
            "Mất số 2 nhưng thêm số 6, nên vẫn có 4 số: 3, 4, 5, 6.",
            "Ít hơn vì bỏ mất số 2, chỉ còn 3 số.",
            "Nhiều hơn vì dấu ≤ thêm số 6, thành 5 số."
          ],
          reason: 0,
          sample: { guess: "4", reason: 0 }
        },
        {
          id: "2.6-x3", type: "pattern",
          ask: "Đếm số nguyên x thỏa −2n < x ≤ n²: với n = 1, 2, 3, 4 lần lượt có 3, 8, 15, 24 số. Tìm số lượng khi n = 5, 10, 20 và quy luật.",
          why: "Xác định đúng số nguyên nhỏ nhất và lớn nhất trong khoảng là cách đếm nghiệm nhanh mà không cần liệt kê.",
          seq: [3, 8, 15, 24],
          term: function (n) { return n * n + 2 * n; },
          askN: [5, 10, 20],
          sample: { terms: { 5: "35", 10: "120", 20: "440" }, rule: "n²+2n" }
        }
      ]
    },
    tr: {
      en: {
        "q.2.1-x1.ask": "Think of a number x, add 2, then multiply by 4: the expression is 4(x + 2); when x = −5 the result is −12. If the order changes — multiply by 4 first, then add 2 (the expression 4x + 2) — what do you get when x = −5?",
        "q.2.1-x1.why": "Brackets show which operation comes first — writing the correct expression from words is the first step of every equation problem.",
        "q.2.1-x1.reasons": [
          "Multiplying first means only x is multiplied by 4; the 2 added afterwards is not: −20 + 2 = −18.",
          "Changing the order does not change the result, so it is still −12.",
          "4x + 2 and 4(x + 2) only differ by 2, so it is −10."
        ],
        "q.2.1-x2.ask": "Rectangle n has width n cm and its length is 1 cm more than its width. The areas are 2, 6, 12, 20, … (cm²). Find the areas of rectangles 6, 10 and 15 and write an expression for the area of rectangle n.",
        "q.2.1-x2.why": "Expressions are not only linear: writing n(n + 1) shows that you need brackets to “add 1 first, then multiply”.",
        "q.2.1-x3.ask": "Make a problem “Think of a number x. Add b to it, then divide the result by a.” with x and b from −100 to 100 and a from −12 to 12 (a not 0 or 1); the result must be an integer. The answer is the value of (x + b) ÷ a.",
        "q.2.1-x3.why": "Putting your own numbers into (x + b)/a shows the job of the brackets and of division written as a fraction.",
        "q.2.1-x3.template": "(x + b) ÷ a",
        "q.2.1-x3.fields": ["Number thought of x", "Number added b", "Divisor a"],
        "q.2.1-x3.criteria": [
          "The result is negative",
          "You divide by a negative number",
          "Forgetting the brackets (working out x + b ÷ a) would be off by at least 10",
          "The result equals the number thought of",
          "The number added is negative"
        ],
        "q.2.2-x1.labels": ["x"],
        "q.2.2-x1.ask": "Find an integer x so that the value of the expression x² + 3x is not greater than 10.",
        "q.2.2-x1.why": "Substituting negative numbers into x² + 3x reminds you that (−4)² = 16, not −16 — the most common slip when using formulae.",
        "q.2.2-x1.challengeText": "The value of x² + 3x is negative.",
        "q.2.2-x1.kinds": ["x² + 3x is negative", "x² + 3x is 0", "x² + 3x is positive"],
        "q.2.2-x2.ask": "The distance formula is s = (u + v)t ÷ 2. Find v when s = 60, u = 4 and t = 6, in several ways.",
        "q.2.2-x2.why": "Substituting first, changing the subject first, or trial and improvement all lead to the same answer — you choose the way that suits each formula.",
        "q.2.2-x2.strategies": ["Substitute first, then solve the equation", "Change the subject first: v = 2s ÷ t − u", "Try a value, then adjust"],
        "q.2.2-x2.steps.s1": ["60 = (4 + v) × 6 ÷ 2 = 3(4 + v). So 4 + v = ?"],
        "q.2.2-x2.steps.s2": ["2s = ?", "2s ÷ t = ?"],
        "q.2.2-x2.steps.s3": ["Try v = 10: what is s?", "Each time v goes up by 1, how much does s go up?"],
        "q.2.2-x3.ask": "When y = −3, 2y³ = 2 × (−27) = −54. If the expression becomes (2y)³, what is its value when y = −3?",
        "q.2.2-x3.why": "A power only acts on what is just before it, unless there are brackets — this decides the result when you substitute into a formula.",
        "q.2.2-x3.reasons": [
          "There are brackets, so work out 2y = −6 first, then (−6)³ = −216.",
          "The brackets change nothing, so it is still −54.",
          "Cubing makes a negative number positive, so it is 216."
        ],
        "q.2.3-x1.labels": ["a", "b"],
        "q.2.3-x1.ask": "Find two integers a and b (from −20 to 20) so that, when you expand and simplify, 3(x + a) − 2(x + b) equals x + 5.",
        "q.2.3-x1.why": "Expanding with a negative number outside (−2 multiplies both x and b) and then collecting like terms is the key skill of this section.",
        "q.2.3-x1.challengeText": "a is equal to b.",
        "q.2.3-x1.kinds": ["a and b are both positive", "a and b are both negative", "a and b have different signs"],
        "q.2.3-x2.ask": "Make an expanding problem a(x + b) + c(x + d) where a, b, c and d are non-zero integers from −12 to 12. The answer to your problem is the term without x after simplifying.",
        "q.2.3-x2.why": "Choosing numbers so that x cancels or the constant is 0 makes you expand in your head first — the problem-setter understands most deeply.",
        "q.2.3-x2.template": "a(x + b) + c(x + d)",
        "q.2.3-x2.fields": ["Number a", "Number b", "Number c", "Number d"],
        "q.2.3-x2.criteria": [
          "The x terms cancel out (a + c = 0)",
          "The term without x is 0",
          "A bracket is multiplied by a negative number",
          "After simplifying, the coefficient of x is 1",
          "Both brackets contain a subtraction (b < 0 and d < 0)"
        ],
        "q.2.3-x3.ask": "−3(2x + 7) = −6x − 21. If it becomes −3(2x − 7), what is the term without x?",
        "q.2.3-x3.why": "A negative number outside the brackets multiplies EVERY term, signs included — the most common expanding mistake.",
        "q.2.3-x3.reasons": [
          "−3 × (−7) = 21: multiplying two negatives gives a positive.",
          "It is still −21, because the minus sign in front makes every term negative.",
          "You only multiply −3 by the first term, so the second term stays −7."
        ],
        "q.2.4-x1.labels": ["k", "p", "q"],
        "q.2.4-x1.ask": "Write 24x + 36 = k(px + q) where k, p and q are integers (k not 0). k does not have to be the HCF. Find as many sets (k, p, q) as you can.",
        "q.2.4-x1.why": "Seeing every way of taking a common factor outside shows why factorising fully needs the HCF.",
        "q.2.4-x1.challengeText": "k is negative and the expression is factorised fully (no common factor left inside the brackets).",
        "q.2.4-x1.kinds": ["k = 12 or −12 (the HCF, fully factorised)", "k positive, a common factor is left in the brackets", "k negative, a common factor is left in the brackets"],
        "q.2.4-x2.ask": "The calculations 4 × 1 + 4 × 2, 5 × 2 + 5 × 3, 6 × 3 + 6 × 4, … have values 12, 25, 42, … Take out the common factor to find the 5th, 10th and 20th values and the rule for the nth term.",
        "q.2.4-x2.why": "Calculation n is (n + 3)n + (n + 3)(n + 1); taking (n + 3) outside is factorising inside a sequence problem.",
        "q.2.5-x1.ask": "Make an equation ax + b = cx + d (integers from −20 to 20, a not 0, a different from c) whose solution is an integer. The answer to your problem is the solution x.",
        "q.2.5-x1.why": "Making an equation with x on both sides makes you plan the steps in advance — exactly the equation-solving skill of this section.",
        "q.2.5-x1.template": "ax + b = cx + d",
        "q.2.5-x1.fields": ["Number a", "Number b", "Number c", "Number d"],
        "q.2.5-x1.criteria": [
          "There is an x on both sides",
          "The solution is negative",
          "The coefficient of x on the right is greater than on the left",
          "A coefficient or constant is negative",
          "The solution is greater than 10"
        ],
        "q.2.5-x2.ask": "Solve the equation 4(x − 3) = 2x + 10 in several ways.",
        "q.2.5-x2.why": "Expanding first, dividing first, or trial and improvement are all correct — knowing several ways helps you check a solution.",
        "q.2.5-x2.strategies": ["Expand first: 4x − 12 = 2x + 10", "Divide both sides by 2 first", "Try a value, then adjust"],
        "q.2.5-x2.steps.s1": ["Move the terms to the correct sides: 2x = ?"],
        "q.2.5-x2.steps.s2": ["Divide both sides by 2: 2(x − 3) = x + ?"],
        "q.2.5-x2.steps.s3": ["Try x = 10: left side minus right side = ?", "Each time x goes up by 1, how much does that difference go up?"],
        "q.2.5-x3.labels": ["a", "b"],
        "q.2.5-x3.ask": "Find two integers a and b (a not 0) so that the equation a(x + b) = 24 has the solution x = 2.",
        "q.2.5-x3.why": "Working backwards from a solution to an equation shows what “solution” means: substitute it and both sides are equal.",
        "q.2.5-x3.challengeText": "a is equal to b.",
        "q.2.5-x3.kinds": ["the factor pair 1 and 24 (with signs)", "the factor pair 2 and 12 (with signs)", "the factor pair 3 and 8 (with signs)", "the factor pair 4 and 6 (with signs)"],
        "q.2.6-x1.labels": ["a", "b"],
        "q.2.6-x1.ask": "Find two integers a < b (from −50 to 50) so that the inequality a ≤ x < b has exactly 5 integer solutions.",
        "q.2.6-x1.why": "Counting solutions makes you notice which end is included (≤) and which is not (<).",
        "q.2.6-x1.challengeText": "The integer solutions add up to 0.",
        "q.2.6-x1.kinds": ["all the solutions are positive", "all the solutions are negative", "the solutions include 0"],
        "q.2.6-x2.ask": "There are 4 integers x with 2 ≤ x < 6. If it becomes 2 < x ≤ 6, how many integers x are there?",
        "q.2.6-x2.why": "The signs ≤ and < decide whether an end value is included — a small change that changes the set of solutions.",
        "q.2.6-x2.reasons": [
          "You lose 2 but gain 6, so there are still 4 integers: 3, 4, 5, 6.",
          "Fewer, because 2 is lost, so only 3 integers.",
          "More, because ≤ adds 6, so 5 integers."
        ],
        "q.2.6-x3.ask": "Count the integers x with −2n < x ≤ n²: for n = 1, 2, 3, 4 there are 3, 8, 15, 24 of them. Find how many there are when n = 5, 10 and 20, and the rule.",
        "q.2.6-x3.why": "Finding the smallest and largest integers in the range correctly is a quick way to count solutions without listing them."
      },
      vi: {}
    }
  });
})();
