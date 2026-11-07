// 🚀 Extension quests — Math 8, unit 9 (Sequences and functions). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const neg = function (x) { return String(x).replace("-", "−"); };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const near = function (a, b) { return Math.abs(a - b) < 1e-9; };
  // an answer rounded to 2+ decimal places is within half a hundredth of the exact value
  const ROUND2 = 0.005 + 1e-9;
  const only25 = function (b) { while (b % 2 === 0) b /= 2; while (b % 5 === 0) b /= 5; return b === 1; };
  const mod = function (a, m) { return ((a % m) + m) % m; };
  // "y = mx + c" written the way a textbook would (no 1x, no + 0, a real minus sign)
  const line = function (m, c) {
    const mx = m === 1 ? "x" : m === -1 ? "−x" : neg(m) + "x";
    return "y = " + mx + (c === 0 ? "" : c < 0 ? " − " + Math.abs(c) : " + " + c);
  };
  // pattern 50 when pattern 1 has a squares and each pattern adds d
  const fifty = function (f) { return f.a + 49 * f.d; };
  const inv = function (f) { return (f.t - f.c) / f.m; };

  window.GAME_QUESTS.push({
    unit: 9,
    sections: {
      "9.1": [
        {
          id: "9.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Cộng thêm d", "Vị trí k"],
          ask: "Một dãy bắt đầu bằng 2, mỗi lần cộng thêm d (d là số dương, có thể là phân số hoặc số thập phân). Số hạng thứ k của dãy bằng đúng 10. Tìm các cặp d, k (d không chia hết thì làm tròn đến ít nhất 2 chữ số sau dấu phẩy).",
          why: "Quy luật cộng có thể dùng phân số hay số thập phân; đếm đúng số bước cộng (k − 1 bước, không phải k) là chìa khóa để đi tới số hạng tổng quát.",
          check: function (v) { return v[0] > 0 && isInt(v[1]) && v[1] >= 2 && Math.abs(v[0] - 8 / (v[1] - 1)) <= ROUND2; },
          canon: function (v) { return [8 / (v[1] - 1), v[1]]; },
          challenge: function (v) { return near(v[0] * 100, Math.round(v[0] * 100)) && !near(v[0] * 10, Math.round(v[0] * 10)); },
          challengeText: "d là số thập phân có đúng hai chữ số sau dấu phẩy.",
          kinds: [
            { id: "int", text: "d là số nguyên", test: function (v) { return 8 % (v[1] - 1) === 0; } },
            { id: "fin", text: "d là số thập phân hữu hạn", test: function (v) { return only25(v[1] - 1); } },
            { id: "rec", text: "d là số thập phân vô hạn tuần hoàn", test: function () { return true; } }
          ],
          kindSamples: [["8", "2"], ["4", "3"], ["1.6", "6"], ["0.5", "17"], ["8/3", "4"]],
          sample: { values: ["4", "3"] }
        },
        {
          id: "9.1-x2", type: "whatif", base: 39,
          ask: "Ví dụ: dãy bắt đầu bằng 3 và mỗi lần cộng 4, nên số hạng thứ 10 là 39. Số hạng thứ 20 của dãy này là bao nhiêu?",
          why: "Dãy cộng đều tăng thêm một lượng không đổi chứ không tăng gấp đôi — hiểu điều này để không nhầm khi tìm số hạng ở vị trí xa.",
          answer: function () { return 3 + 19 * 4; },
          reasons: [
            "Từ số hạng thứ 10 đến thứ 20 còn 10 lần cộng 4 nữa: 39 + 40 = 79.",
            "Vị trí gấp đôi thì số hạng cũng gấp đôi: 2 × 39 = 78.",
            "Mỗi số hạng là 4 lần vị trí của nó: 20 × 4 = 80."
          ],
          reason: 0,
          sample: { guess: "79", reason: 0 }
        },
        {
          id: "9.1-x3", type: "ways",
          ask: "Một dãy có quy luật “chia 2 rồi cộng 10”. Số hạng thứ ba là 16. Tìm số hạng đầu tiên theo nhiều cách.",
          why: "Đi ngược một quy luật hai bước cần đảo từng phép tính theo thứ tự ngược lại — đúng như cách tìm hàm ngược ở chặng 9.4.",
          strategies: [
            { id: "s1", name: "Đi ngược từng bước (trừ 10 rồi nhân 2)", steps: [{ ask: "Số hạng thứ hai là bao nhiêu?", answer: 12 }, { answer: 4 }] },
            { id: "s2", name: "Viết số hạng thứ ba theo a", steps: [{ ask: "Số hạng thứ ba bằng a ÷ 4 + ? — điền số còn thiếu.", answer: 15 }, { answer: 4 }] },
            { id: "s3", name: "Thử rồi điều chỉnh", steps: [{ ask: "Thử số hạng đầu là 20: số hạng thứ ba là bao nhiêu?", answer: 20 }, { answer: 4 }] }
          ],
          sample: { strategy: "s1", steps: ["12", "4"] }
        }
      ],
      "9.2": [
        {
          id: "9.2-x1", type: "pattern",
          ask: "Ghép các bàn vuông thành một hàng dài, mỗi cạnh trống của bàn đặt một ghế: 1 bàn có 4 ghế, 2 bàn có 6 ghế, 3 bàn có 8 ghế. Hàng 8 bàn, 25 bàn, 60 bàn có bao nhiêu ghế? Viết quy luật theo n.",
          why: "Quy luật theo vị trí cho biết ngay số ghế của hàng 60 bàn mà không phải đếm từng bàn — đó là sức mạnh của số hạng tổng quát.",
          seq: [4, 6, 8],
          term: function (n) { return 2 * n + 2; },
          askN: [8, 25, 60],
          sample: { terms: { 8: "18", 25: "52", 60: "122" }, rule: "2n+2" }
        },
        {
          id: "9.2-x2", type: "make",
          ask: "Tự tạo một dãy hình mẫu: mẫu 1 có a ô vuông, mỗi mẫu sau có thêm d ô (a nguyên từ 1 đến 50, d nguyên từ 1 đến 20). Đề sẽ hỏi số ô của mẫu 50.",
          why: "Tự chọn số ô ban đầu và mức tăng giúp em thấy hệ số của vị trí và số cộng thêm trong quy luật đến từ đâu.",
          template: "Mẫu 1 có a ô, mỗi mẫu thêm d ô",
          fields: [{ id: "a", label: "Mẫu 1 có a ô" }, { id: "d", label: "Thêm d ô mỗi mẫu" }],
          valid: function (f) { return inRange(f.a, 1, 50) && inRange(f.d, 1, 20); },
          solve: function (f) { return fifty(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "Pattern 1 has " + f.a + " squares and each pattern has " + f.d + " more squares than the one before. How many squares are in Pattern 50?"
              : "Mẫu 1 có " + f.a + " ô vuông, mỗi mẫu sau nhiều hơn mẫu trước " + f.d + " ô. Mẫu 50 có bao nhiêu ô vuông?";
          },
          criteria: [
            { id: "minus", text: "Quy luật theo vị trí có dạng d × vị trí − một số (a nhỏ hơn d)", test: function (f) { return f.a < f.d; } },
            { id: "big", text: "Mẫu 50 có hơn 500 ô", test: function (f) { return fifty(f) > 500; } },
            { id: "mult", text: "Quy luật chỉ là d × vị trí, không cộng trừ gì thêm", test: function (f) { return f.a === f.d; } },
            { id: "hundred", text: "Số ô của mẫu 50 là số tròn trăm", test: function (f) { return fifty(f) % 100 === 0; } },
            { id: "odd", text: "Mẫu nào cũng có số ô lẻ", test: function (f) { return f.a % 2 === 1 && f.d % 2 === 0; } }
          ],
          sample: { fields: { a: "3", d: "12" } }
        },
        {
          id: "9.2-x3", type: "whatif", base: 31,
          ask: "Ví dụ: các mẫu có 4, 7, 10, … ô vuông theo quy luật 3 × vị trí + 1, nên mẫu 10 có 31 ô. Nếu mẫu 1 vẫn có 4 ô nhưng mỗi mẫu chỉ thêm 2 ô (4, 6, 8, …) thì mẫu 10 có bao nhiêu ô?",
          why: "Hệ số của vị trí và số cộng thêm phụ thuộc vào nhau — đổi mức tăng thì phải tính lại cả số cộng thêm, rồi kiểm tra với mẫu 1.",
          answer: function () { return 2 * 10 + 2; },
          reasons: [
            "Mức tăng 2 nên xét 2 × vị trí; mẫu 1 có 4 ô nên cộng thêm 2: 2 × 10 + 2 = 22.",
            "Chỉ cần đổi 3 thành 2 và giữ + 1: 2 × 10 + 1 = 21.",
            "Mỗi mẫu bớt 1 ô so với trước nên mẫu 10 bớt 1 ô: 31 − 1 = 30."
          ],
          reason: 0,
          sample: { guess: "22", reason: 0 }
        }
      ],
      "9.3": [
        {
          id: "9.3-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hệ số a", "Số b"],
          ask: "Tìm dãy tăng có số hạng tổng quát an + b (a, b nguyên, a > 0) mà cả 10 và 31 đều là số hạng của dãy. Nhập a và b.",
          why: "Muốn biết một số có thuộc dãy không, ta giải “biểu thức = số đó” và cần n nguyên dương — ở đây phải đúng cho cả hai số cùng lúc.",
          check: function (v) {
            const a = v[0], b = v[1];
            if (!isInt(a) || !isInt(b) || a <= 0) return false;
            return (10 - b) % a === 0 && (10 - b) / a >= 1 && (31 - b) % a === 0;
          },
          challenge: function (v) { return 10 * v[0] + v[1] === 31; },
          challengeText: "31 là đúng số hạng thứ 10 của dãy.",
          kinds: [
            { id: "a1", text: "a = 1 (ước của 21)", test: function (v) { return v[0] === 1; } },
            { id: "a3", text: "a = 3 (ước của 21)", test: function (v) { return v[0] === 3; } },
            { id: "a7", text: "a = 7 (ước của 21)", test: function (v) { return v[0] === 7; } },
            { id: "a21", text: "a = 21 (ước của 21)", test: function () { return true; } }
          ],
          kindSamples: [["1", "9"], ["1", "0"], ["3", "1"], ["3", "7"], ["7", "3"]],
          sample: { values: ["3", "1"] }
        },
        {
          id: "9.3-x2", type: "ways",
          ask: "Dãy 95, 88, 81, 74, … mỗi lần giảm 7. Số −24 là số hạng thứ mấy của dãy? Giải theo nhiều cách.",
          why: "Dãy giảm có hệ số của n âm; dùng số hạng tổng quát hay đếm số bước đều phải ra cùng một vị trí — một cách kiểm tra cách kia.",
          strategies: [
            { id: "s1", name: "Lập số hạng tổng quát ? − 7n rồi giải phương trình", steps: [{ ask: "Số hạng tổng quát có dạng ? − 7n. Số còn thiếu là bao nhiêu?", answer: 102 }, { answer: 18 }] },
            { id: "s2", name: "Đếm số bước giảm 7", steps: [
              { ask: "Từ 95 xuống −24 giảm tất cả bao nhiêu?", answer: 119 },
              { ask: "Đó là bao nhiêu bước giảm 7?", answer: 17 }, { answer: 18 }] },
            { id: "s3", name: "Nhảy tới số hạng thứ 10 trước", steps: [
              { ask: "Số hạng thứ 10 là bao nhiêu?", answer: 32 },
              { ask: "Từ số hạng thứ 10 cần thêm bao nhiêu bước nữa để tới −24?", answer: 8 }, { answer: 18 }] }
          ],
          sample: { strategy: "s1", steps: ["102", "18"] }
        },
        {
          id: "9.3-x3", type: "whatif", base: 10,
          ask: "Ví dụ: dãy có số hạng tổng quát ½n + 6 thì số hạng thứ 8 là 10. Nếu số hạng tổng quát là ½(n + 6) thì số hạng thứ 8 là bao nhiêu?",
          why: "Dấu ngoặc quyết định thứ tự phép tính trong số hạng tổng quát — hai biểu thức trông giống nhau có thể cho hai dãy khác hẳn.",
          answer: function () { return (8 + 6) / 2; },
          reasons: [
            "Phải cộng 6 trước rồi mới lấy một nửa: (8 + 6) ÷ 2 = 7.",
            "Vẫn là các số ½, n và 6 nên số hạng thứ 8 vẫn là 10.",
            "Chỉ lấy một nửa của 6: 8 + 3 = 11."
          ],
          reason: 0,
          sample: { guess: "7", reason: 0 }
        }
      ],
      "9.4": [
        {
          id: "9.4-x1", type: "make",
          ask: "Tự tạo đề về hàm ngược: hàm số y = mx + c (m nguyên từ −10 đến 10, m ≠ 0; c nguyên từ −20 đến 20). Đề cho đầu ra y = t (t nguyên từ −100 đến 100) và hỏi đầu vào x.",
          why: "Tìm đầu vào từ đầu ra chính là dùng hàm ngược: trừ c rồi chia cho m — em sẽ dùng lại khi giải phương trình và đọc đồ thị.",
          template: "y = mx + c, cho y = t, tìm x",
          fields: [{ id: "m", label: "Hệ số m" }, { id: "c", label: "Số c" }, { id: "t", label: "Đầu ra t" }],
          valid: function (f) { return inRange(f.m, -10, 10) && f.m !== 0 && inRange(f.c, -20, 20) && inRange(f.t, -100, 100); },
          solve: function (f) { return inv(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "The function is " + line(f.m, f.c) + ". The output is y = " + neg(f.t) + ". Find the input x."
              : "Cho hàm số " + line(f.m, f.c) + ". Đầu ra là y = " + neg(f.t) + ". Tìm đầu vào x.";
          },
          criteria: [
            { id: "int", text: "Đầu vào x là số nguyên", test: function (f) { return (f.t - f.c) % f.m === 0; } },
            { id: "negx", text: "Đầu vào x là số âm", test: function (f) { return inv(f) < 0; } },
            { id: "negm", text: "m âm (hàm ngược phải chia cho số âm)", test: function (f) { return f.m < 0; } },
            { id: "dec1", text: "x là số thập phân có đúng một chữ số sau dấu phẩy", test: function (f) { return (f.t - f.c) % f.m !== 0 && (10 * (f.t - f.c)) % f.m === 0; } },
            { id: "big", text: "Đầu ra lớn (|t| ≥ 50) nhưng đầu vào nhỏ (|x| ≤ 10)", test: function (f) { return Math.abs(f.t) >= 50 && Math.abs(inv(f)) <= 10; } }
          ],
          sample: { fields: { m: "-6", c: "4", t: "64" } }
        },
        {
          id: "9.4-x2", type: "pattern",
          ask: "Bảng giá trị của một hàm số: x = 1, 2, 3 cho y = 17, 14, 11. Tìm y khi x = 8, x = 15, x = 30 và viết quy tắc tính y (dùng n thay cho x).",
          why: "Từ bảng giá trị, xem y thay đổi bao nhiêu khi x tăng 1 là tìm được phương trình của hàm — kể cả khi y giảm và thành số âm.",
          seq: [17, 14, 11],
          term: function (n) { return 20 - 3 * n; },
          askN: [8, 15, 30],
          sample: { terms: { 8: "-4", 15: "-25", 30: "-70" }, rule: "20-3n" }
        },
        {
          id: "9.4-x3", type: "whatif", base: 5,
          ask: "Ví dụ: máy “× 4 rồi − 3” biến đầu vào 5 thành 17, nên hàm ngược phải biến 17 trở lại 5. Bạn Nam viết hàm ngược là “÷ 4 rồi + 3”. Đưa 17 vào máy của Nam thì được bao nhiêu?",
          why: "Hàm ngược phải đảo từng phép tính VÀ đảo cả thứ tự: + 3 trước rồi mới ÷ 4 — luôn thử lại bằng một cặp số đã biết.",
          answer: function () { return 17 / 4 + 3; },
          reasons: [
            "Nam đảo phép tính nhưng giữ nguyên thứ tự: 17 ÷ 4 = 4,25 rồi + 3 = 7,25, không về được 5.",
            "Máy ngược nào cũng đưa 17 về lại 5.",
            "17 ÷ 4 + 3 = 20 ÷ 4 = 5."
          ],
          reason: 0,
          sample: { guess: "7,25", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.9.1-x1.labels": ["Add d", "Position k"],
        "q.9.1-x1.ask": "A sequence starts at 2 and d is added each time (d is positive and can be a fraction or a decimal). The kth term of the sequence is exactly 10. Find pairs d, k (if d does not divide exactly, round it to at least 2 decimal places).",
        "q.9.1-x1.why": "A term-to-term rule can add fractions or decimals; counting the steps correctly (k − 1 additions, not k) is the key to the nth term.",
        "q.9.1-x1.challengeText": "d is a decimal with exactly two decimal places.",
        "q.9.1-x1.kinds": ["d is a whole number", "d is a terminating decimal", "d is a recurring decimal"],
        "q.9.1-x2.ask": "Example: a sequence starts at 3 and 4 is added each time, so the 10th term is 39. What is the 20th term of this sequence?",
        "q.9.1-x2.why": "A linear sequence grows by the same amount each time, it does not double — knowing this stops mistakes when you find terms far along.",
        "q.9.1-x2.reasons": [
          "From the 10th term to the 20th term there are 10 more additions of 4: 39 + 40 = 79.",
          "The position doubles, so the term doubles: 2 × 39 = 78.",
          "Each term is 4 times its position: 20 × 4 = 80."
        ],
        "q.9.1-x3.ask": "A sequence has the term-to-term rule “divide by 2 then add 10”. The third term is 16. Find the first term in several ways.",
        "q.9.1-x3.why": "Going backwards through a two-step rule means using the inverse operations in reverse order — exactly how you find an inverse function in section 9.4.",
        "q.9.1-x3.strategies": ["Work backwards one step at a time (subtract 10 then multiply by 2)", "Write the third term in terms of a", "Trial and improvement"],
        "q.9.1-x3.steps.s1": ["What is the second term?"],
        "q.9.1-x3.steps.s2": ["The third term is a ÷ 4 + ? — fill in the missing number."],
        "q.9.1-x3.steps.s3": ["Try a first term of 20: what is the third term?"],
        "q.9.2-x1.ask": "Square tables are pushed together in one long row, with one chair on each free side: 1 table has 4 chairs, 2 tables have 6 chairs, 3 tables have 8 chairs. How many chairs are there for a row of 8 tables, 25 tables and 60 tables? Write the rule in terms of n.",
        "q.9.2-x1.why": "A position-to-term rule tells you the chairs for 60 tables straight away without counting table by table — that is the power of the nth term.",
        "q.9.2-x2.ask": "Make your own pattern sequence: Pattern 1 has a squares and each pattern has d more squares (a a whole number from 1 to 50, d a whole number from 1 to 20). The problem will ask for the number of squares in Pattern 50.",
        "q.9.2-x2.why": "Choosing the first pattern and the increase yourself shows where the multiplier of the position and the number added in the rule come from.",
        "q.9.2-x2.template": "Pattern 1 has a squares, each pattern adds d squares",
        "q.9.2-x2.fields": ["Pattern 1 has a squares", "Add d squares each pattern"],
        "q.9.2-x2.criteria": [
          "The position-to-term rule is d × position − a number (a is less than d)",
          "Pattern 50 has more than 500 squares",
          "The rule is just d × position, with nothing added or subtracted",
          "The number of squares in Pattern 50 is a multiple of 100",
          "Every pattern has an odd number of squares"
        ],
        "q.9.2-x3.ask": "Example: patterns have 4, 7, 10, … squares with the rule 3 × position + 1, so Pattern 10 has 31 squares. If Pattern 1 still has 4 squares but each pattern adds only 2 squares (4, 6, 8, …), how many squares does Pattern 10 have?",
        "q.9.2-x3.why": "The multiplier of the position and the number added depend on each other — change the increase and you must work out the number added again, then check with Pattern 1.",
        "q.9.2-x3.reasons": [
          "The increase is 2, so use 2 × position; Pattern 1 has 4 squares, so add 2: 2 × 10 + 2 = 22.",
          "Just change 3 to 2 and keep + 1: 2 × 10 + 1 = 21.",
          "Each pattern has 1 square fewer than before, so Pattern 10 has 1 fewer: 31 − 1 = 30."
        ],
        "q.9.3-x1.labels": ["Coefficient a", "Number b"],
        "q.9.3-x1.ask": "Find an increasing sequence with nth term an + b (a, b integers, a > 0) that has both 10 and 31 as terms. Enter a and b.",
        "q.9.3-x1.why": "To test whether a number is in a sequence you solve “expression = number” and need a positive whole number n — here it must work for two numbers at once.",
        "q.9.3-x1.challengeText": "31 is exactly the 10th term of the sequence.",
        "q.9.3-x1.kinds": ["a = 1 (a factor of 21)", "a = 3 (a factor of 21)", "a = 7 (a factor of 21)", "a = 21 (a factor of 21)"],
        "q.9.3-x2.ask": "The sequence 95, 88, 81, 74, … decreases by 7 each time. Which term of the sequence is −24? Solve it in several ways.",
        "q.9.3-x2.why": "A decreasing sequence has a negative coefficient of n; using the nth term or counting steps must give the same position — one method checks the other.",
        "q.9.3-x2.strategies": ["Write the nth term ? − 7n and solve an equation", "Count the steps of 7 down", "Jump to the 10th term first"],
        "q.9.3-x2.steps.s1": ["The nth term is ? − 7n. What is the missing number?"],
        "q.9.3-x2.steps.s2": ["How much does it decrease altogether from 95 to −24?", "How many steps of 7 is that?"],
        "q.9.3-x2.steps.s3": ["What is the 10th term?", "From the 10th term, how many more steps are needed to reach −24?"],
        "q.9.3-x3.ask": "Example: a sequence with nth term ½n + 6 has 10 as its 8th term. If the nth term is ½(n + 6), what is the 8th term?",
        "q.9.3-x3.why": "Brackets decide the order of operations in an nth term — two expressions that look alike can give completely different sequences.",
        "q.9.3-x3.reasons": [
          "You must add 6 first and then halve: (8 + 6) ÷ 2 = 7.",
          "It still has ½, n and 6, so the 8th term is still 10.",
          "Only halve the 6: 8 + 3 = 11."
        ],
        "q.9.4-x1.ask": "Make your own inverse function question: the function y = mx + c (m an integer from −10 to 10, m ≠ 0; c an integer from −20 to 20). The question gives the output y = t (t an integer from −100 to 100) and asks for the input x.",
        "q.9.4-x1.why": "Finding the input from the output is using the inverse function: subtract c then divide by m — you will use it again to solve equations and read graphs.",
        "q.9.4-x1.template": "y = mx + c, given y = t, find x",
        "q.9.4-x1.fields": ["Coefficient m", "Number c", "Output t"],
        "q.9.4-x1.criteria": [
          "The input x is an integer",
          "The input x is negative",
          "m is negative (the inverse divides by a negative number)",
          "x is a decimal with exactly one decimal place",
          "A large output (|t| ≥ 50) but a small input (|x| ≤ 10)"
        ],
        "q.9.4-x2.ask": "A table of values for a function: x = 1, 2, 3 gives y = 17, 14, 11. Find y when x = 8, x = 15 and x = 30, and write the rule for y (use n instead of x).",
        "q.9.4-x2.why": "From a table of values, how much y changes when x increases by 1 gives the equation of the function — even when y decreases and becomes negative.",
        "q.9.4-x3.ask": "Example: the machine “× 4 then − 3” turns the input 5 into 17, so the inverse must turn 17 back into 5. Nam writes the inverse as “÷ 4 then + 3”. What comes out when 17 goes into Nam's machine?",
        "q.9.4-x3.why": "An inverse function must reverse each operation AND their order: + 3 first and then ÷ 4 — always check with a pair of numbers you know.",
        "q.9.4-x3.reasons": [
          "Nam reversed the operations but kept the same order: 17 ÷ 4 = 4.25, then + 3 = 7.25, which is not 5.",
          "Every inverse machine takes 17 back to 5.",
          "17 ÷ 4 + 3 = 20 ÷ 4 = 5."
        ]
      },
      vi: {}
    }
  });
})();
