// 🚀 Extension quests — Math 7, unit 7 (Fractions). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. Check functions receive NUMBERS parsed by the game ("3/4", "2 1/3", "0,75" all arrive
// as numbers). Where a fraction is entered as separate numerator/denominator, comparisons are exact on integers;
// otherwise a tiny tolerance absorbs floating-point error only.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const eq = function (x, y) { return Math.abs(x - y) < 1e-9; };
  const whole = function (x) { return eq(x, Math.round(x)); };
  const pos = function (x) { return Number.isFinite(x) && x > 0; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  const lcm = function (a, b) { return a / gcd(a, b) * b; };
  const fracPart = function (x) { return x - Math.floor(x + 1e-9); };

  window.GAME_QUESTS.push({
    unit: 7,
    sections: {
      "7.1": [
        {
          id: "7.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Tử số", "Mẫu số"],
          ask: "Tìm phân số tối giản nằm giữa 2/3 và 3/4 (lớn hơn 2/3 và nhỏ hơn 3/4). Nhập tử số và mẫu số. Tìm càng nhiều càng tốt!",
          why: "Giữa hai phân số luôn có vô số phân số khác — quy đồng mẫu là cách chắc chắn để so sánh chúng.",
          check: function (v) {
            const a = v[0], b = v[1];
            return inRange(a, 1, 10000) && inRange(b, 1, 10000) && gcd(a, b) === 1 && 3 * a > 2 * b && 4 * a < 3 * b;
          },
          challenge: function (v) { return v[1] <= 7; },
          challengeText: "Phân số có mẫu số nhỏ nhất có thể.",
          kinds: [
            { id: "mid", text: "đúng điểm giữa 17/24", test: function (v) { return 24 * v[0] === 17 * v[1]; } },
            { id: "low", text: "gần 2/3 hơn", test: function (v) { return 24 * v[0] < 17 * v[1]; } },
            { id: "high", text: "gần 3/4 hơn", test: function () { return true; } }
          ],
          kindSamples: [["17", "24"], ["7", "10"], ["11", "16"], ["5", "7"], ["13", "18"]],
          sample: { values: ["7", "10"] }
        },
        {
          id: "7.1-x2", type: "whatif", base: 0.75,
          ask: "Ví dụ: 3/4 = 0,75. Nếu cộng thêm 1 vào cả tử số và mẫu số, được 4/5. Giá trị của 4/5 viết dưới dạng số thập phân là bao nhiêu?",
          why: "Phân số bằng nhau khi NHÂN cả tử và mẫu với cùng một số — CỘNG cùng một số thì phân số thay đổi.",
          answer: function () { return 4 / 5; },
          reasons: [
            "Phân số nhỏ hơn 1 tiến gần 1 hơn khi cộng cùng một số vào tử và mẫu: 4/5 = 0,8 lớn hơn 0,75.",
            "Cộng cùng một số vào tử và mẫu thì phân số không đổi, giống như khi nhân.",
            "Mẫu số lớn hơn nên phân số nhỏ đi."
          ],
          reason: 0,
          sample: { guess: "0,8", reason: 0 }
        },
        {
          id: "7.1-x3", type: "pattern",
          ask: "Dãy phân số 1/2, 2/3, 3/4, 4/5, … mỗi số hạng lớn hơn số hạng trước. Tìm số hạng thứ 10, thứ 20, thứ 99 (viết dạng phân số) và số hạng tổng quát.",
          why: "Các số hạng tiến dần đến 1 mà không bao giờ bằng 1 — so sánh phần còn thiếu (1/2, 1/3, 1/4, …) là một cách khác để sắp thứ tự phân số.",
          term: function (n) { return n / (n + 1); },
          askN: [10, 20, 99],
          sample: { terms: { 10: "10/11", 20: "20/21", 99: "99/100" }, rule: "n/(n+1)" }
        }
      ],
      "7.2": [
        {
          id: "7.2-x1", type: "many", arity: 2, ordered: false,
          labels: ["Số thứ nhất", "Số thứ hai"],
          ask: "Tìm hai hỗn số (hoặc phân số) dương, không phải số nguyên, có tổng bằng 5 1/2. Ví dụ cách nhập: 2 1/3 hoặc 7/3.",
          why: "Tách một số thành tổng theo nhiều cách giúp em cộng hỗn số linh hoạt: phần nguyên với phần nguyên, phần phân số với phần phân số.",
          check: function (v) { return pos(v[0]) && pos(v[1]) && !whole(v[0]) && !whole(v[1]) && eq(v[0] + v[1], 5.5); },
          challenge: function (v) { return fracPart(v[0]) + fracPart(v[1]) > 1 + 1e-9; },
          challengeText: "Hai phần phân số cộng lại lớn hơn 1 (phải nhớ 1 sang phần nguyên).",
          kinds: [
            { id: "proper", text: "có một phân số nhỏ hơn 1", test: function (v) { return Math.min(v[0], v[1]) < 1; } },
            { id: "carry", text: "hai phần phân số cộng lại lớn hơn 1 (có nhớ)", test: function (v) { return fracPart(v[0]) + fracPart(v[1]) > 1 + 1e-9; } },
            { id: "plain", text: "hai phần phân số cộng lại bằng 1/2 (không nhớ)", test: function () { return true; } }
          ],
          kindSamples: [["2 1/4", "3 1/4"], ["1 1/3", "4 1/6"], ["2 3/4", "2 3/4"], ["1 2/3", "3 5/6"], ["1/4", "5 1/4"]],
          sample: { values: ["2 1/4", "3 1/4"] }
        },
        {
          id: "7.2-x2", type: "ways",
          ask: "Tính 3 3/4 + 2 5/6. Giải theo nhiều cách; đáp số nhập dạng phân số hoặc hỗn số.",
          why: "Mỗi cách cộng hỗn số có chỗ mạnh riêng; làm hai cách là tự kiểm tra kết quả.",
          strategies: [
            { id: "s1", name: "Cộng phần nguyên, cộng phần phân số", steps: [
              { ask: "3 + 2 = ?", answer: 5 }, { ask: "3/4 + 5/6 = ? (dạng phân số)", answer: "19/12" }, { answer: "79/12" }] },
            { id: "s2", name: "Đổi cả hai hỗn số ra phân số", steps: [
              { ask: "3 3/4 = ?/4", answer: 15 }, { ask: "2 5/6 = ?/6", answer: 17 }, { answer: "79/12" }] },
            { id: "s3", name: "Làm tròn lên số nguyên rồi trừ phần bù", steps: [
              { ask: "4 + 3 = ?", answer: 7 }, { ask: "Phần đã thêm vào: 1/4 + 1/6 = ?", answer: "5/12" }, { answer: "79/12" }] }
          ],
          sample: { strategy: "s1", steps: ["5", "19/12", "6 7/12"] }
        },
        {
          id: "7.2-x3", type: "make",
          ask: "Tự tạo phép cộng hai phân số a/b + c/d (a, c từ 1 đến 20; b, d từ 2 đến 20). Đề hỏi tổng.",
          why: "Tự chọn mẫu số giúp em thấy khi nào cần quy đồng, khi nào phải nhớ 1 sang phần nguyên.",
          template: "a/b + c/d = ?",
          fields: [{ id: "a", label: "Tử a" }, { id: "b", label: "Mẫu b" }, { id: "c", label: "Tử c" }, { id: "d", label: "Mẫu d" }],
          valid: function (f) { return inRange(f.a, 1, 20) && inRange(f.b, 2, 20) && inRange(f.c, 1, 20) && inRange(f.d, 2, 20); },
          solve: function (f) { return f.a / f.b + f.c / f.d; },
          render: function (f, lang) {
            return lang === "en"
              ? "Work out " + f.a + "/" + f.b + " + " + f.c + "/" + f.d + "."
              : "Tính " + f.a + "/" + f.b + " + " + f.c + "/" + f.d + ".";
          },
          criteria: [
            { id: "lcm", text: "Hai mẫu khác nhau và mẫu chung nhỏ nhất nhỏ hơn tích hai mẫu (như 1/4 + 1/6 dùng mẫu 12)", test: function (f) { return f.b !== f.d && lcm(f.b, f.d) < f.b * f.d; } },
            { id: "copr", text: "Hai mẫu khác nhau và không có ước chung lớn hơn 1 (mẫu chung là tích hai mẫu)", test: function (f) { return f.b !== f.d && gcd(f.b, f.d) === 1; } },
            { id: "carry", text: "Hai phân số đều nhỏ hơn 1 nhưng tổng lớn hơn 1", test: function (f) { return f.a < f.b && f.c < f.d && f.a * f.d + f.c * f.b > f.b * f.d; } },
            { id: "whole", text: "Hai mẫu khác nhau mà tổng là số nguyên", test: function (f) { return f.b !== f.d && (f.a * f.d + f.c * f.b) % (f.b * f.d) === 0; } }
          ],
          sample: { fields: { a: "3", b: "4", c: "5", d: "6" } }
        }
      ],
      "7.3": [
        {
          id: "7.3-x1", type: "many", arity: 2, ordered: false,
          labels: ["Phân số thứ nhất", "Phân số thứ hai"],
          ask: "Tìm hai phân số dương (không phải số nguyên) có tích bằng 2/5. Tìm nhiều cặp khác nhau.",
          why: "Đi ngược phép nhân (tử nhân tử, mẫu nhân mẫu) giúp em hiểu phép nhân phân số và chuẩn bị cho phép chia.",
          check: function (v) { return pos(v[0]) && pos(v[1]) && !whole(v[0]) && !whole(v[1]) && eq(v[0] * v[1], 0.4); },
          challenge: function (v) { return v[0] > 1 || v[1] > 1; },
          challengeText: "Một trong hai phân số lớn hơn 1.",
          sample: { values: ["2/3", "3/5"] }
        },
        {
          id: "7.3-x2", type: "whatif", base: 0.7,
          ask: "Ví dụ: 7/8 × 4/5 = 7/10. Nếu đổi thành 7/8 × 5/4 thì kết quả là bao nhiêu?",
          why: "Nhân với số nhỏ hơn 1 làm nhỏ đi, nhân với số lớn hơn 1 làm lớn lên — đoán trước giúp em bắt lỗi tính toán.",
          answer: function () { return (7 * 5) / (8 * 4); },
          reasons: [
            "5/4 lớn hơn 1 nên kết quả lớn hơn 7/8: 7/8 × 5/4 = 35/32.",
            "Kết quả vẫn là 7/10 vì chỉ đổi chỗ tử và mẫu của một phân số.",
            "Lật một phân số thì lật cả kết quả: 10/7."
          ],
          reason: 0,
          sample: { guess: "35/32", reason: 0 }
        },
        {
          id: "7.3-x3", type: "pattern",
          ask: "Số hạng thứ n là tích 1/2 × 2/3 × 3/4 × … (n thừa số, thừa số cuối là n/(n+1)). Số hạng thứ 1, 2, 3 là 1/2, 1/3, 1/4. Tìm số hạng thứ 9, 49, 99 và số hạng tổng quát.",
          why: "Rút gọn chéo trước khi nhân làm biến mất gần hết các thừa số — tính 99 phép nhân mà không cần nhân!",
          term: function (n) { return 1 / (n + 1); },
          askN: [9, 49, 99],
          sample: { terms: { 9: "1/10", 49: "1/50", 99: "1/100" }, rule: "1/(n+1)" }
        }
      ],
      "7.4": [
        {
          id: "7.4-x1", type: "ways",
          ask: "Tính 3/4 ÷ 3/8. Giải theo nhiều cách.",
          why: "“Lật rồi nhân”, quy đồng và số thập phân là ba cách nhìn cùng một phép chia — cách quy đồng giải thích vì sao quy tắc đúng.",
          strategies: [
            { id: "s1", name: "Nhân với số nghịch đảo", steps: [{ ask: "Số nghịch đảo của 3/8 là bao nhiêu?", answer: "8/3" }, { answer: 2 }] },
            { id: "s2", name: "Quy đồng mẫu rồi hỏi “chứa bao nhiêu phần”", steps: [{ ask: "3/4 = ?/8", answer: 6 }, { answer: 2 }] },
            { id: "s3", name: "Đổi ra số thập phân", steps: [{ ask: "3/8 = ? (số thập phân; 3/4 = 0,75)", answer: 0.375 }, { answer: 2 }] }
          ],
          sample: { strategy: "s2", steps: ["6", "2"] }
        },
        {
          id: "7.4-x2", type: "many", arity: 1,
          labels: ["Số chia x"],
          ask: "Tìm số x để 2/3 ÷ x lớn hơn 2/3 nhưng nhỏ hơn 2. Tìm nhiều số x khác nhau (có thể nhập phân số).",
          why: "Chia cho một số nhỏ hơn 1 làm kết quả lớn lên — biết điều này giúp em ước lượng trước mọi phép chia phân số.",
          check: function (v) { const x = v[0]; return pos(x) && 2 / 3 / x > 2 / 3 + 1e-9 && 2 / 3 / x < 2 - 1e-9; },
          challenge: function (v) { return whole(2 / 3 / v[0]); },
          challengeText: "Kết quả 2/3 ÷ x là một số nguyên.",
          kinds: [
            { id: "one", text: "x = 2/3 (kết quả bằng 1)", test: function (v) { return Math.abs(v[0] - 2 / 3) < 1e-6; } },
            { id: "big", text: "x lớn hơn 2/3 (kết quả nhỏ hơn 1)", test: function (v) { return v[0] > 2 / 3; } },
            { id: "small", text: "x nhỏ hơn 2/3 (kết quả lớn hơn 1)", test: function () { return true; } }
          ],
          kindSamples: [["2/3"], ["3/4"], ["4/5"], ["1/2"], ["3/5"]],
          sample: { values: ["1/2"] }
        },
        {
          id: "7.4-x3", type: "make",
          ask: "Tự tạo bài toán: có p/q kg bột, chia vào các túi, mỗi túi a/b kg. Hỏi được bao nhiêu túi? (p, a từ 1 đến 50; q, b từ 1 đến 20; mỗi túi không nặng hơn lượng bột.)",
          why: "Phép chia phân số trả lời câu hỏi “chứa bao nhiêu phần như vậy” — tự đặt bài giúp em thấy ý nghĩa đó.",
          template: "p/q kg bột, mỗi túi a/b kg → ? túi",
          fields: [{ id: "p", label: "p" }, { id: "q", label: "q" }, { id: "a", label: "a" }, { id: "b", label: "b" }],
          valid: function (f) {
            return inRange(f.p, 1, 50) && inRange(f.q, 1, 20) && inRange(f.a, 1, 50) && inRange(f.b, 1, 20) && f.a * f.q <= f.p * f.b;
          },
          solve: function (f) { return (f.p * f.b) / (f.q * f.a); },
          render: function (f, lang) {
            return lang === "en"
              ? "There is " + f.p + "/" + f.q + " kg of flour. Each bag holds " + f.a + "/" + f.b + " kg. How many bags can be filled? (Give the exact answer.)"
              : "Có " + f.p + "/" + f.q + " kg bột, mỗi túi đựng " + f.a + "/" + f.b + " kg. Được bao nhiêu túi? (Ghi đáp số chính xác.)";
          },
          criteria: [
            { id: "int", text: "Số túi là số nguyên", test: function (f) { return (f.p * f.b) % (f.q * f.a) === 0; } },
            { id: "part", text: "Số túi không phải số nguyên (có một túi chưa đầy)", test: function (f) { return (f.p * f.b) % (f.q * f.a) !== 0; } },
            { id: "big", text: "Lượng bột hơn 1 kg nhưng mỗi túi dưới 1 kg", test: function (f) { return f.p > f.q && f.a < f.b; } },
            { id: "den", text: "Hai mẫu số q và b khác nhau", test: function (f) { return f.q !== f.b; } },
            { id: "many", text: "Được hơn 10 túi", test: function (f) { return f.p * f.b > 10 * f.q * f.a; } }
          ],
          sample: { fields: { p: "5", q: "2", a: "1", b: "6" } }
        }
      ],
      "7.5": [
        {
          id: "7.5-x1", type: "whatif", base: 1,
          ask: "Ví dụ: 1/2 + 1/4 × 2 = 1 (nhân trước, cộng sau). Nếu thêm ngoặc: (1/2 + 1/4) × 2 thì kết quả là bao nhiêu?",
          why: "Thứ tự thực hiện phép tính vẫn đúng với phân số — một dấu ngoặc có thể thay đổi cả kết quả.",
          answer: function () { return (1 / 2 + 1 / 4) * 2; },
          reasons: [
            "Ngoặc làm phép cộng trước: 3/4 × 2 = 3/2.",
            "Kết quả không đổi vì vẫn là các số và phép tính cũ.",
            "Vẫn nhân trước: 1/4 × 2 = 1/2 rồi cộng 1/2 được 1."
          ],
          reason: 0,
          sample: { guess: "1 1/2", reason: 0 }
        },
        {
          id: "7.5-x2", type: "ways",
          ask: "Tính 7/25 × 600 theo nhiều cách cho dễ tính nhẩm.",
          why: "Chọn cách tính khéo (mẫu 100, chia trước rồi nhân, số thập phân) giúp em tính nhẩm nhanh và ít sai.",
          strategies: [
            { id: "s1", name: "Đổi sang mẫu 100", steps: [{ ask: "7/25 = ?/100", answer: 28 }, { answer: 168 }] },
            { id: "s2", name: "Chia trước, nhân sau", steps: [{ ask: "1/25 của 600 = ?", answer: 24 }, { answer: 168 }] },
            { id: "s3", name: "Đổi ra số thập phân", steps: [{ ask: "7/25 = ? (số thập phân)", answer: 0.28 }, { answer: 168 }] }
          ],
          sample: { strategy: "s2", steps: ["24", "168"] }
        },
        {
          id: "7.5-x3", type: "many", arity: 2, ordered: true,
          labels: ["Tử số", "Mẫu số"],
          ask: "Tìm phân số tối giản a/b nhỏ hơn 1 sao cho a/b của 840 là số nguyên. Nhập tử số và mẫu số.",
          why: "Biết mẫu số chia hết số đã cho thì tính nhẩm được ngay — mẹo chính để làm phép tính phân số dễ hơn.",
          check: function (v) {
            const a = v[0], b = v[1];
            return inRange(a, 1, 10000) && inRange(b, 2, 10000) && a < b && gcd(a, b) === 1 && (840 * a) % b === 0;
          },
          challenge: function (v) { return ((840 * v[0]) / v[1]) % 2 === 1; },
          challengeText: "Kết quả a/b của 840 là số lẻ.",
          kinds: [
            { id: "unit", text: "phân số đơn vị (tử số là 1)", test: function (v) { return v[0] === 1; } },
            { id: "big", text: "lớn hơn 1/2", test: function (v) { return 2 * v[0] > v[1]; } },
            { id: "small", text: "tử số lớn hơn 1, nhỏ hơn 1/2", test: function () { return true; } }
          ],
          kindSamples: [["1", "2"], ["1", "7"], ["3", "4"], ["5", "6"], ["2", "5"]],
          sample: { values: ["3", "4"] }
        }
      ]
    },
    tr: {
      en: {
        "q.7.1-x1.labels": ["Numerator", "Denominator"],
        "q.7.1-x1.ask": "Find fractions in their simplest form between 2/3 and 3/4 (greater than 2/3 and less than 3/4). Enter the numerator and the denominator. Find as many as you can!",
        "q.7.1-x1.why": "There are always infinitely many fractions between two fractions — a common denominator is the sure way to compare them.",
        "q.7.1-x1.challengeText": "The fraction has the smallest possible denominator.",
        "q.7.1-x1.kinds": ["exactly the midpoint 17/24", "closer to 2/3", "closer to 3/4"],
        "q.7.1-x2.ask": "Example: 3/4 = 0.75. If you add 1 to both the numerator and the denominator, you get 4/5. What is the value of 4/5 as a decimal?",
        "q.7.1-x2.why": "Fractions stay equal when you MULTIPLY the numerator and denominator by the same number — ADDING the same number changes the fraction.",
        "q.7.1-x2.reasons": [
          "A fraction less than 1 gets closer to 1 when the same number is added to the numerator and denominator: 4/5 = 0.8 is greater than 0.75.",
          "Adding the same number to the numerator and denominator does not change the fraction, just like multiplying.",
          "The denominator is bigger, so the fraction is smaller."
        ],
        "q.7.1-x3.ask": "In the sequence of fractions 1/2, 2/3, 3/4, 4/5, … each term is greater than the one before. Find the 10th, 20th and 99th terms (as fractions) and the nth term.",
        "q.7.1-x3.why": "The terms get closer and closer to 1 but never reach it — comparing the missing part (1/2, 1/3, 1/4, …) is another way to order fractions.",
        "q.7.2-x1.labels": ["First number", "Second number"],
        "q.7.2-x1.ask": "Find two positive mixed numbers (or fractions), not whole numbers, that add up to 5 1/2. Example of how to type: 2 1/3 or 7/3.",
        "q.7.2-x1.why": "Splitting a number into a sum in many ways helps you add mixed numbers flexibly: whole parts with whole parts, fraction parts with fraction parts.",
        "q.7.2-x1.challengeText": "The two fraction parts add up to more than 1 (you have to carry 1 to the whole part).",
        "q.7.2-x1.kinds": ["one of them is a fraction less than 1", "the fraction parts add up to more than 1 (carry)", "the fraction parts add up to 1/2 (no carry)"],
        "q.7.2-x2.ask": "Work out 3 3/4 + 2 5/6. Solve it in several ways; type the answer as a fraction or a mixed number.",
        "q.7.2-x2.why": "Each way of adding mixed numbers has its own strength; doing it two ways checks your answer.",
        "q.7.2-x2.strategies": [
          "Add the whole parts, add the fraction parts",
          "Change both mixed numbers to improper fractions",
          "Round up to whole numbers, then subtract what you added"
        ],
        "q.7.2-x2.steps.s1": ["3 + 2 = ?", "3/4 + 5/6 = ? (as a fraction)"],
        "q.7.2-x2.steps.s2": ["3 3/4 = ?/4", "2 5/6 = ?/6"],
        "q.7.2-x2.steps.s3": ["4 + 3 = ?", "The part you added: 1/4 + 1/6 = ?"],
        "q.7.2-x3.ask": "Make an addition of two fractions a/b + c/d (a, c from 1 to 20; b, d from 2 to 20). The problem asks for the sum.",
        "q.7.2-x3.why": "Choosing the denominators yourself shows when you need a common denominator and when you have to carry 1 to the whole part.",
        "q.7.2-x3.template": "a/b + c/d = ?",
        "q.7.2-x3.fields": ["Numerator a", "Denominator b", "Numerator c", "Denominator d"],
        "q.7.2-x3.criteria": [
          "Different denominators, and the lowest common denominator is less than their product (like 1/4 + 1/6 using 12)",
          "Different denominators with no common factor greater than 1 (the common denominator is their product)",
          "Both fractions are less than 1 but the sum is greater than 1",
          "Different denominators, but the sum is a whole number"
        ],
        "q.7.3-x1.labels": ["First fraction", "Second fraction"],
        "q.7.3-x1.ask": "Find two positive fractions (not whole numbers) whose product is 2/5. Find several different pairs.",
        "q.7.3-x1.why": "Working backwards from a product (numerator times numerator, denominator times denominator) helps you understand multiplying fractions and prepares you for dividing.",
        "q.7.3-x1.challengeText": "One of the two fractions is greater than 1.",
        "q.7.3-x2.ask": "Example: 7/8 × 4/5 = 7/10. If it changes to 7/8 × 5/4, what is the answer?",
        "q.7.3-x2.why": "Multiplying by a number less than 1 makes things smaller, by a number greater than 1 makes them bigger — predicting first helps you catch mistakes.",
        "q.7.3-x2.reasons": [
          "5/4 is greater than 1, so the answer is greater than 7/8: 7/8 × 5/4 = 35/32.",
          "The answer is still 7/10 because only the numerator and denominator of one fraction swapped places.",
          "Turning one fraction upside down turns the answer upside down too: 10/7."
        ],
        "q.7.3-x3.ask": "The nth term is the product 1/2 × 2/3 × 3/4 × … (n factors, the last factor is n/(n+1)). Terms 1, 2, 3 are 1/2, 1/3, 1/4. Find the 9th, 49th and 99th terms and the nth term.",
        "q.7.3-x3.why": "Cancelling before multiplying makes almost every factor disappear — 99 multiplications without multiplying!",
        "q.7.4-x1.ask": "Work out 3/4 ÷ 3/8. Solve it in several ways.",
        "q.7.4-x1.why": "“Flip and multiply”, a common denominator and decimals are three views of the same division — the common denominator explains why the rule works.",
        "q.7.4-x1.strategies": [
          "Multiply by the reciprocal",
          "Use a common denominator, then ask “how many parts fit?”",
          "Change to decimals"
        ],
        "q.7.4-x1.steps.s1": ["What is the reciprocal of 3/8?"],
        "q.7.4-x1.steps.s2": ["3/4 = ?/8"],
        "q.7.4-x1.steps.s3": ["3/8 = ? (as a decimal; 3/4 = 0.75)"],
        "q.7.4-x2.labels": ["Divisor x"],
        "q.7.4-x2.ask": "Find numbers x so that 2/3 ÷ x is greater than 2/3 but less than 2. Find many different values of x (you can type fractions).",
        "q.7.4-x2.why": "Dividing by a number less than 1 makes the answer bigger — knowing this helps you estimate before every fraction division.",
        "q.7.4-x2.challengeText": "The answer to 2/3 ÷ x is a whole number.",
        "q.7.4-x2.kinds": ["x = 2/3 (the answer is 1)", "x is greater than 2/3 (the answer is less than 1)", "x is less than 2/3 (the answer is greater than 1)"],
        "q.7.4-x3.ask": "Make a problem: there is p/q kg of flour, put into bags of a/b kg each. How many bags? (p, a from 1 to 50; q, b from 1 to 20; a bag is not heavier than the flour.)",
        "q.7.4-x3.why": "Dividing by a fraction answers “how many of these fit?” — making your own problem shows you that meaning.",
        "q.7.4-x3.template": "p/q kg of flour, a/b kg per bag → ? bags",
        "q.7.4-x3.fields": ["p", "q", "a", "b"],
        "q.7.4-x3.criteria": [
          "The number of bags is a whole number",
          "The number of bags is not a whole number (one bag is not full)",
          "More than 1 kg of flour, but each bag holds less than 1 kg",
          "The denominators q and b are different",
          "More than 10 bags"
        ],
        "q.7.5-x1.ask": "Example: 1/2 + 1/4 × 2 = 1 (multiply first, then add). If brackets are added: (1/2 + 1/4) × 2, what is the answer?",
        "q.7.5-x1.why": "The order of operations works for fractions too — one pair of brackets can change the whole answer.",
        "q.7.5-x1.reasons": [
          "The brackets make you add first: 3/4 × 2 = 3/2.",
          "The answer does not change because the numbers and operations are the same.",
          "Still multiply first: 1/4 × 2 = 1/2, then add 1/2 to get 1."
        ],
        "q.7.5-x2.ask": "Work out 7/25 × 600 in several ways that make mental calculation easy.",
        "q.7.5-x2.why": "Choosing a clever method (denominator 100, divide first then multiply, decimals) helps you calculate mentally, quickly and accurately.",
        "q.7.5-x2.strategies": ["Change to a denominator of 100", "Divide first, then multiply", "Change to a decimal"],
        "q.7.5-x2.steps.s1": ["7/25 = ?/100"],
        "q.7.5-x2.steps.s2": ["1/25 of 600 = ?"],
        "q.7.5-x2.steps.s3": ["7/25 = ? (as a decimal)"],
        "q.7.5-x3.labels": ["Numerator", "Denominator"],
        "q.7.5-x3.ask": "Find fractions a/b in their simplest form, less than 1, such that a/b of 840 is a whole number. Enter the numerator and the denominator.",
        "q.7.5-x3.why": "When the denominator divides the number exactly, you can work it out mentally at once — the key trick for making fraction calculations easier.",
        "q.7.5-x3.kinds": ["a unit fraction (numerator 1)", "greater than 1/2", "numerator greater than 1, less than 1/2"],
        "q.7.5-x3.challengeText": "a/b of 840 is an odd number."
      },
      vi: {}
    }
  });
})();
