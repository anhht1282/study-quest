// 🚀 Extension quests — Math 7, unit 9 (Sequences and functions). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const neg = function (x) { return String(x).replace("-", "−"); };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  // first three terms of "start a, multiply by m then add c"
  const three = function (f) { const t2 = f.a * f.m + f.c; return [f.a, t2, t2 * f.m + f.c]; };

  window.GAME_QUESTS.push({
    unit: 9,
    sections: {
      "9.1": [
        {
          id: "9.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Số hạng đầu", "Cộng thêm mỗi lần"],
          ask: "Dãy “bắt đầu bằng a, mỗi lần cộng d” (a, d nguyên, d ≠ 0) có số hạng thứ 5 bằng 20. Tìm các cặp a, d.",
          why: "Có rất nhiều dãy đi qua cùng một số — vì vậy chỉ một vài số hạng chưa đủ để chắc chắn quy luật.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[1] !== 0 && v[0] + 4 * v[1] === 20; },
          challenge: function (v) { return v[1] < 0; },
          challengeText: "Dãy giảm dần (d âm).",
          kinds: [
            { id: "negstart", text: "bắt đầu bằng số âm", test: function (v) { return v[0] < 0; } },
            { id: "down", text: "dãy giảm (d âm)", test: function (v) { return v[1] < 0; } },
            { id: "up", text: "dãy tăng, bắt đầu từ số không âm", test: function () { return true; } }
          ],
          kindSamples: [["16", "1"], ["12", "2"], ["24", "-1"], ["28", "-2"], ["-4", "6"]],
          sample: { values: ["4", "4"] }
        },
        {
          id: "9.1-x2", type: "whatif", base: 23,
          ask: "Ví dụ: bắt đầu 5, quy luật “nhân 2 rồi cộng 1” cho 5, 11, 23. Nếu đổi thành “cộng 1 rồi nhân 2” thì số hạng thứ 3 là bao nhiêu?",
          why: "Thứ tự các bước trong quy luật làm thay đổi cả dãy — điều quan trọng khi đọc và viết quy luật.",
          answer: function () { return ((5 + 1) * 2 + 1) * 2; },
          reasons: [
            "Đổi thứ tự thì kết quả đổi: (5 + 1) × 2 = 12 lớn hơn 11, và khoảng cách cứ lớn dần.",
            "Phép nhân và phép cộng đổi chỗ cho nhau được nên dãy không đổi.",
            "Chỉ số hạng đầu thay đổi, các số hạng sau giữ nguyên."
          ],
          reason: 0,
          sample: { guess: "26", reason: 0 }
        },
        {
          id: "9.1-x3", type: "make",
          ask: "Tự tạo một dãy: số hạng đầu a và quy luật “nhân m rồi cộng c” (a, c từ −20 đến 20; m từ 2 đến 5). Đề sẽ hỏi số hạng thứ 3.",
          why: "Tự thiết kế quy luật giúp em thấy mỗi phần (số đầu, phép nhân, phép cộng) ảnh hưởng thế nào đến dãy.",
          template: "Bắt đầu a, nhân m rồi cộng c",
          fields: [{ id: "a", label: "Số hạng đầu a" }, { id: "m", label: "Nhân m" }, { id: "c", label: "Cộng c" }],
          valid: function (f) { return inRange(f.a, -20, 20) && inRange(f.m, 2, 5) && inRange(f.c, -20, 20); },
          solve: function (f) { return three(f)[2]; },
          render: function (f, lang) {
            return lang === "en"
              ? "A sequence starts at " + neg(f.a) + ". Term-to-term rule: multiply by " + f.m + " then add " + neg(f.c) + ". Find the 3rd term."
              : "Dãy bắt đầu bằng " + neg(f.a) + ", quy luật: nhân " + f.m + " rồi cộng " + neg(f.c) + ". Tìm số hạng thứ 3.";
          },
          criteria: [
            { id: "neg", text: "Có số âm trong ba số hạng đầu", test: function (f) { return three(f).some(function (x) { return x < 0; }); } },
            { id: "down", text: "Dãy giảm (số hạng thứ 2 nhỏ hơn số hạng đầu)", test: function (f) { const t = three(f); return t[1] < t[0]; } },
            { id: "big", text: "Số hạng thứ 3 lớn hơn 100", test: function (f) { return three(f)[2] > 100; } },
            { id: "cneg", text: "Số cộng thêm c là số âm", test: function (f) { return f.c < 0; } },
            { id: "odd", text: "Ba số hạng đầu đều là số lẻ", test: function (f) { return three(f).every(function (x) { return Math.abs(x) % 2 === 1; }); } }
          ],
          sample: { fields: { a: "-3", m: "3", c: "-2" } }
        }
      ],
      "9.2": [
        {
          id: "9.2-x1", type: "pattern", sim: "matchsticks",
          ask: "Dãy hình vuông xếp bằng que diêm có 4, 7, 10, … que. Tìm số que của hình 6, hình 15, hình 40 và quy luật tổng quát.",
          why: "Từ hình vẽ đến công thức là bước nhảy lớn nhất của chương này: không cần vẽ hình thứ 40 vẫn biết số que.",
          seq: [4, 7, 10],
          term: function (n) { return 3 * n + 1; },
          askN: [6, 15, 40],
          sample: { terms: { 6: "19", 15: "46", 40: "121" }, rule: "3n+1" }
        },
        {
          id: "9.2-x2", type: "ways",
          ask: "Dãy tam giác que diêm có 3, 5, 7, … que. Hình thứ 12 có bao nhiêu que? Giải theo nhiều cách.",
          why: "Mỗi cách nhìn (cộng dần, công thức, đếm theo phần) là một cách tự kiểm tra — và cách nhìn theo phần dẫn tới công thức.",
          strategies: [
            { id: "s1", name: "Cộng dần: mỗi hình thêm 2 que", steps: [{ ask: "Từ hình 1 đến hình 12 phải thêm mấy lần 2 que?", answer: 11 }, { answer: 25 }] },
            { id: "s2", name: "Dùng quy luật 2n + 1", steps: [{ ask: "2 × 12 = ?", answer: 24 }, { answer: 25 }] },
            { id: "s3", name: "Đếm theo phần: tam giác đầu 3 que, mỗi tam giác sau 2 que", steps: [
              { ask: "Có bao nhiêu tam giác “sau” tam giác đầu?", answer: 11 },
              { ask: "Các tam giác sau cần tất cả bao nhiêu que?", answer: 22 }, { answer: 25 }] }
          ],
          sample: { strategy: "s2", steps: ["24", "25"] }
        },
        {
          id: "9.2-x3", type: "many", arity: 1,
          labels: ["Số que"],
          ask: "Số nào lớn hơn 50 có thể là số que của một hình trong dãy hình vuông (4, 7, 10, …)? Tìm nhiều số nhất có thể.",
          why: "Biết kiểm tra một số có thuộc dãy không (số que − 1 chia hết cho 3) là kỹ năng chính của bài 9.3.",
          check: function (v) { return isInt(v[0]) && v[0] > 50 && (v[0] - 1) % 3 === 0; },
          kinds: [
            { id: "big", text: "số từ 100 trở lên", test: function (v) { return v[0] >= 100; } },
            { id: "odd", text: "số lẻ nhỏ hơn 100", test: function (v) { return v[0] % 2 === 1; } },
            { id: "even", text: "số chẵn nhỏ hơn 100", test: function () { return true; } }
          ],
          kindSamples: [["52"], ["58"], ["55"], ["61"], ["100"]],
          sample: { values: ["52"] }
        }
      ],
      "9.3": [
        {
          id: "9.3-x1", type: "many", arity: 2, ordered: true,
          labels: ["a (hệ số của n)", "b (số cộng thêm)"],
          ask: "Tìm dãy có số hạng tổng quát a·n + b (a, b nguyên, a ≠ 0) mà số hạng thứ 4 bằng 10. Nhập a và b.",
          why: "Một số hạng không xác định được dãy — cần thêm thông tin. Em sẽ dùng ý này khi tìm số hạng tổng quát từ hai số hạng.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && 4 * v[0] + v[1] === 10; },
          challenge: function (v) { return v[0] < 0; },
          challengeText: "Dãy giảm dần (a âm).",
          kinds: [
            { id: "down", text: "dãy giảm (a âm)", test: function (v) { return v[0] < 0; } },
            { id: "negb", text: "dãy tăng, b âm", test: function (v) { return v[1] < 0; } },
            { id: "posb", text: "dãy tăng, b không âm", test: function () { return true; } }
          ],
          kindSamples: [["1", "6"], ["2", "2"], ["3", "-2"], ["5", "-10"], ["-1", "14"]],
          sample: { values: ["2", "2"] }
        },
        {
          id: "9.3-x2", type: "pattern",
          ask: "Dãy −5, −2, 1, 4, … Tìm số hạng thứ 10, thứ 20, thứ 100 và số hạng tổng quát.",
          why: "Dãy bắt đầu bằng số âm vẫn theo cùng cách: “mỗi lần cộng 3” nên có 3n — rồi chỉnh số cộng thêm.",
          seq: [-5, -2, 1, 4],
          term: function (n) { return 3 * n - 8; },
          askN: [10, 20, 100],
          sample: { terms: { 10: "22", 20: "52", 100: "292" }, rule: "3n-8" }
        }
      ],
      "9.4": [
        {
          id: "9.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Nhân a", "Cộng b"],
          ask: "Máy hai bước “nhân a rồi cộng b” biến 2 thành 11 (a, b nguyên, a khác 0 và 1). Tìm các máy như vậy.",
          why: "Một cặp vào – ra khớp với nhiều máy khác nhau — vì vậy muốn đoán đúng máy phải thử với mọi cặp đã cho.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && v[0] !== 1 && 2 * v[0] + v[1] === 11; },
          challenge: function (v) { return v[1] < 0; },
          challengeText: "Máy đó biến 0 thành một số âm.",
          kinds: [
            { id: "nega", text: "nhân với số âm", test: function (v) { return v[0] < 0; } },
            { id: "negb", text: "cộng một số âm", test: function (v) { return v[1] < 0; } },
            { id: "pos", text: "a và b đều dương", test: function () { return true; } }
          ],
          kindSamples: [["2", "7"], ["3", "5"], ["6", "-1"], ["7", "-3"], ["-1", "13"]],
          sample: { values: ["3", "5"] }
        },
        {
          id: "9.4-x2", type: "whatif", base: 5,
          ask: "Máy “× 2” cần đầu vào 5 để ra 10. Nếu thêm bước “− 3” sau phép nhân, đầu vào nào cho đầu ra 10?",
          why: "Đi ngược qua máy nhiều bước (làm phép ngược theo thứ tự ngược) chính là cách giải phương trình ở chương sau.",
          answer: function () { return (10 + 3) / 2; },
          reasons: [
            "Làm ngược từ cuối: 10 + 3 = 13, rồi 13 ÷ 2 = 6,5.",
            "Lấy 10 − 3 = 7 rồi chia cho 2.",
            "Đầu vào không đổi vì vẫn là máy × 2."
          ],
          reason: 0,
          sample: { guess: "6,5", reason: 0 }
        },
        {
          id: "9.4-x3", type: "ways",
          ask: "Máy “nhân 3 rồi trừ 4” cho đầu ra 23. Tìm đầu vào theo nhiều cách.",
          why: "Phép toán ngược, thử – điều chỉnh và phương trình là ba cách nhìn của cùng một bài — em sẽ chọn cách hợp với từng đề.",
          strategies: [
            { id: "s1", name: "Dùng phép toán ngược (làm từ cuối lên)", steps: [{ ask: "23 + 4 = ?", answer: 27 }, { answer: 9 }] },
            { id: "s2", name: "Thử rồi điều chỉnh", steps: [{ ask: "Thử đầu vào 10: đầu ra là bao nhiêu?", answer: 26 }, { answer: 9 }] },
            { id: "s3", name: "Lập phương trình 3x − 4 = 23 rồi thử chia", steps: [
              { ask: "Đầu vào là số nguyên. Đầu ra 23 cộng 4 phải chia hết cho số nào?", answer: 3 }, { answer: 9 }] }
          ],
          sample: { strategy: "s1", steps: ["27", "9"] }
        }
      ]
    },
    tr: {
      en: {
        "q.9.1-x1.labels": ["First term", "Add each time"],
        "q.9.1-x1.ask": "The sequence “start at a, add d each time” (a, d integers, d ≠ 0) has 20 as its 5th term. Find pairs a, d.",
        "q.9.1-x1.why": "Many sequences pass through the same number — that is why a few terms are not enough to be sure of the rule.",
        "q.9.1-x1.challengeText": "The sequence is decreasing (d is negative).",
        "q.9.1-x1.kinds": ["starts with a negative number", "decreasing (d negative)", "increasing, starting from a non-negative number"],
        "q.9.1-x2.ask": "Example: start 5, rule “multiply by 2 then add 1” gives 5, 11, 23. If the rule becomes “add 1 then multiply by 2”, what is the 3rd term?",
        "q.9.1-x2.why": "The order of the steps in a rule changes the whole sequence — important when you read and write rules.",
        "q.9.1-x2.reasons": [
          "Changing the order changes the result: (5 + 1) × 2 = 12 is more than 11, and the gap keeps growing.",
          "Multiplying and adding can swap places, so the sequence stays the same.",
          "Only the first term changes; the later terms stay the same."
        ],
        "q.9.1-x3.ask": "Make a sequence: first term a and the rule “multiply by m then add c” (a, c from −20 to 20; m from 2 to 5). The problem will ask for the 3rd term.",
        "q.9.1-x3.why": "Designing a rule yourself shows how each part (first term, multiplying, adding) changes the sequence.",
        "q.9.1-x3.template": "Start a, multiply by m then add c",
        "q.9.1-x3.fields": ["First term a", "Multiply by m", "Add c"],
        "q.9.1-x3.criteria": [
          "A negative number among the first three terms", "Decreasing (the 2nd term is less than the 1st)",
          "The 3rd term is greater than 100", "The number added, c, is negative", "The first three terms are all odd"
        ],
        "q.9.2-x1.ask": "A pattern of squares made of matchsticks uses 4, 7, 10, … sticks. Find the number of sticks in pattern 6, pattern 15 and pattern 40, and the general rule.",
        "q.9.2-x1.why": "Going from a picture to a formula is the big leap of this unit: you know pattern 40 without drawing it.",
        "q.9.2-x2.ask": "A pattern of matchstick triangles uses 3, 5, 7, … sticks. How many sticks are in pattern 12? Solve it in several ways.",
        "q.9.2-x2.why": "Each way of seeing it (adding on, formula, counting in parts) checks the others — and counting in parts leads to the formula.",
        "q.9.2-x2.strategies": ["Adding on: each pattern adds 2 sticks", "Use the rule 2n + 1", "Count in parts: the first triangle has 3 sticks, each later one 2"],
        "q.9.2-x2.steps.s1": ["From pattern 1 to pattern 12, how many times are 2 sticks added?"],
        "q.9.2-x2.steps.s2": ["2 × 12 = ?"],
        "q.9.2-x2.steps.s3": ["How many triangles come after the first one?", "How many sticks do the later triangles need altogether?"],
        "q.9.2-x3.labels": ["Number of sticks"],
        "q.9.2-x3.kinds": ["100 or more", "an odd number below 100", "an even number below 100"],
        "q.9.2-x3.ask": "Which numbers greater than 50 could be the number of sticks in a pattern of the squares sequence (4, 7, 10, …)? Find as many as you can.",
        "q.9.2-x3.why": "Checking whether a number is in a sequence (sticks − 1 must be divisible by 3) is a key skill of section 9.3.",
        "q.9.3-x1.labels": ["a (coefficient of n)", "b (number added)"],
        "q.9.3-x1.ask": "Find a sequence with nth term a·n + b (a, b integers, a ≠ 0) whose 4th term is 10. Enter a and b.",
        "q.9.3-x1.why": "One term does not fix a sequence — you need more information. You will use this when finding the nth term from two terms.",
        "q.9.3-x1.challengeText": "The sequence is decreasing (a is negative).",
        "q.9.3-x1.kinds": ["decreasing (a negative)", "increasing, b negative", "increasing, b not negative"],
        "q.9.3-x2.ask": "The sequence −5, −2, 1, 4, … Find the 10th, 20th and 100th terms and the nth term.",
        "q.9.3-x2.why": "A sequence starting with a negative number works the same way: “add 3 each time” gives 3n — then adjust the number added.",
        "q.9.4-x1.labels": ["Multiply by a", "Add b"],
        "q.9.4-x1.ask": "A two-step machine “multiply by a then add b” maps 2 to 11 (a, b integers, a not 0 or 1). Find such machines.",
        "q.9.4-x1.why": "One input–output pair fits many different machines — so to guess a machine you must test every given pair.",
        "q.9.4-x1.challengeText": "The machine maps 0 to a negative number.",
        "q.9.4-x1.kinds": ["multiplies by a negative number", "adds a negative number", "a and b both positive"],
        "q.9.4-x2.ask": "The machine “× 2” needs input 5 to give 10. If a step “− 3” is added after multiplying, which input gives output 10?",
        "q.9.4-x2.why": "Going backwards through a multi-step machine (inverse operations in reverse order) is exactly how you will solve equations later.",
        "q.9.4-x2.reasons": [
          "Work backwards from the end: 10 + 3 = 13, then 13 ÷ 2 = 6.5.",
          "Take 10 − 3 = 7, then divide by 2.",
          "The input does not change because it is still the × 2 machine."
        ],
        "q.9.4-x3.ask": "The machine “multiply by 3 then subtract 4” gives output 23. Find the input in several ways.",
        "q.9.4-x3.why": "Inverse operations, trial and improvement, and equations are three views of the same problem — you will pick the one that suits each question.",
        "q.9.4-x3.strategies": ["Use inverse operations (work from the end)", "Try, then improve", "Write the equation 3x − 4 = 23, then test division"],
        "q.9.4-x3.steps.s1": ["23 + 4 = ?"],
        "q.9.4-x3.steps.s2": ["Try input 10: what is the output?"],
        "q.9.4-x3.steps.s3": ["The input is a whole number. 23 plus 4 must be divisible by which number?"]
      },
      vi: {}
    }
  });
})();
