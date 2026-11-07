// 🚀 Extension quests — Math 8, unit 3 (Place value and rounding). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game; decimals are
// compared with a small tolerance or through their exact decimal string, never with raw floating-point equality.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const clean = function (x) { return Number(Number(x).toPrecision(12)); };
  const show = function (x, lang) { const s = String(clean(x)).replace("-", "−"); return lang === "en" ? s : s.replace(".", ","); };
  // significant digits of a positive number, from its shortest decimal form: { digits: "7963", exp: -2 }
  const sig = function (x) {
    const parts = Math.abs(x).toExponential().split("e");
    return { digits: parts[0].replace(".", ""), exp: Number(parts[1]) };
  };
  // round a positive number to n significant figures (half up, on the decimal digits the learner typed)
  const roundInfo = function (x, n) {
    const s = sig(x);
    const keep = Number(s.digits.slice(0, n).padEnd(n, "0"));
    const up = Number(s.digits.charAt(n) || "0") >= 5;
    const val = keep + (up ? 1 : 0);
    return { value: clean(val * Math.pow(10, s.exp - n + 1)), keep: keep, up: up, val: val, exp: s.exp };
  };

  window.GAME_QUESTS.push({
    unit: 3,
    sections: {
      "3.1": [
        {
          id: "3.1-x1", type: "ways",
          ask: "Tính 6,4 ÷ 0,01 × 0,1 theo nhiều cách khác nhau.",
          why: "Đổi “chia cho 0,01” thành “nhân với 100” và gộp các bước giúp em tính nhẩm nhanh mà vẫn tự kiểm tra được.",
          strategies: [
            { id: "s1", name: "Tính lần lượt từ trái sang phải", steps: [{ ask: "6,4 ÷ 0,01 = ?", answer: 640 }, { answer: 64 }] },
            { id: "s2", name: "Nhân với 0,1 trước rồi mới chia cho 0,01", steps: [{ ask: "6,4 × 0,1 = ?", answer: 0.64 }, { answer: 64 }] },
            { id: "s3", name: "Gộp hai bước thành một phép nhân", steps: [
              { ask: "÷ 0,01 rồi × 0,1 giống như nhân với số nào?", answer: 10 }, { answer: 64 }] }
          ],
          sample: { strategy: "s3", steps: ["10", "64"] }
        },
        {
          id: "3.1-x2", type: "whatif", base: 0.42,
          ask: "Ví dụ: 4,2 × 0,1 = 0,42. Nếu đổi thành 4,2 ÷ 0,1 thì kết quả là bao nhiêu?",
          why: "Phân biệt “nhân với 0,1” và “chia cho 0,1” giúp em không bị lệch kết quả 100 lần.",
          answer: function () { return 42; },
          reasons: [
            "Chia cho 0,1 giống như nhân với 10, nên được 42.",
            "Chia cho 0,1 cũng giống chia cho 10, nên vẫn là 0,42.",
            "Phép chia luôn làm số nhỏ đi, nên được 0,042."
          ],
          reason: 0,
          sample: { guess: "42", reason: 0 }
        },
        {
          id: "3.1-x3", type: "pattern",
          ask: "Bắt đầu từ 500. Mỗi bước: nhân với 0,01 rồi chia cho 0,1. Sau bước 1, 2, 3 ta được 50; 5; 0,5; … Tìm kết quả sau bước 4, bước 6, bước 7 và quy luật cho kết quả sau bước n.",
          why: "Nhận ra “× 0,01 rồi ÷ 0,1” chỉ là “× 0,1” giúp em thấy giá trị hàng dịch đi một bậc sau mỗi bước.",
          seq: [50, 5, 0.5],
          term: function (n) { return clean(500 * Math.pow(10, -n)); },
          askN: [4, 6, 7],
          sample: { terms: { 4: "0.05", 6: "0.0005", 7: "0.00005" }, rule: "500×0.1^n" }
        }
      ],
      "3.2": [
        {
          id: "3.2-x1", type: "many", arity: 1,
          labels: ["Số"],
          ask: "Tìm số dương làm tròn đến 1 chữ số có nghĩa được 0,08 nhưng làm tròn đến 2 chữ số có nghĩa được 0,075.",
          why: "Làm tròn ngược buộc em hiểu mỗi kết quả làm tròn ứng với cả một khoảng số, không chỉ một số.",
          check: function (v) { return v[0] >= 0.075 && v[0] < 0.0755; },
          challenge: function (v) { return v[0] >= 0.07525 - 1e-12 && v[0] < 0.07535 - 1e-12; },
          challengeText: "Làm tròn đến 3 chữ số có nghĩa được 0,0753.",
          kinds: [
            { id: "s2", text: "2 chữ số có nghĩa (đúng 0,075)", test: function (v) { return sig(v[0]).digits.length === 2; } },
            { id: "s3", text: "3 chữ số có nghĩa", test: function (v) { return sig(v[0]).digits.length === 3; } },
            { id: "s4", text: "từ 4 chữ số có nghĩa trở lên", test: function () { return true; } }
          ],
          kindSamples: [["0.075"], ["0.0751"], ["0.0754"], ["0.07501"], ["0.07549"]],
          sample: { values: ["0.0752"] }
        },
        {
          id: "3.2-x2", type: "make",
          ask: "Tự chọn một số dương x (từ 0,000001 đến 999 999) và số chữ số có nghĩa n (1 đến 4); x phải có nhiều hơn n chữ số có nghĩa. Đề của em: làm tròn x đến n chữ số có nghĩa.",
          why: "Tự tìm số làm tròn “khó” (phải nhớ sang hàng trước, phải giữ số 0) giúp em tránh đúng những bẫy đó khi làm bài.",
          template: "Làm tròn x đến n chữ số có nghĩa",
          fields: [{ id: "x", label: "Số x" }, { id: "n", label: "Số chữ số có nghĩa n" }],
          valid: function (f) {
            return f.x >= 0.000001 && f.x < 1000000 && inRange(f.n, 1, 4) && sig(f.x).digits.length > f.n;
          },
          solve: function (f) { return roundInfo(f.x, f.n).value; },
          render: function (f, lang) {
            return lang === "en" ? "Round " + show(f.x, "en") + " to " + f.n + " significant figure" + (f.n > 1 ? "s" : "") + "."
              : "Làm tròn " + show(f.x, "vi") + " đến " + f.n + " chữ số có nghĩa.";
          },
          criteria: [
            { id: "small", text: "x nhỏ hơn 1 (có các số 0 đứng đầu)", test: function (f) { return f.x < 1; } },
            { id: "carry", text: "Làm tròn lên phải nhớ sang hàng trước (chữ số giữ lại là 9, như 0,0397 → 0,040)", test: function (f) { const r = roundInfo(f.x, f.n); return r.up && r.keep % 10 === 9; } },
            { id: "zero", text: "x < 1 và kết quả phải viết thêm số 0 ở cuối để đủ chữ số có nghĩa (như 0,80)", test: function (f) { return f.x < 1 && roundInfo(f.x, f.n).val % 10 === 0; } },
            { id: "big", text: "x ≥ 1000 nên phải thêm số 0 giữ chỗ", test: function (f) { const r = roundInfo(f.x, f.n); return f.x >= 1000 && r.exp - f.n + 1 > 0; } },
            { id: "three", text: "Làm tròn đến ít nhất 3 chữ số có nghĩa", test: function (f) { return f.n >= 3; } }
          ],
          sample: { fields: { x: "0.07963", n: "2" } }
        },
        {
          id: "3.2-x3", type: "whatif", base: 7000,
          ask: "6952 làm tròn đến 1 chữ số có nghĩa là 7000. Nếu làm tròn 6952 đến 2 chữ số có nghĩa thì được bao nhiêu?",
          why: "Có khi làm tròn lên khiến nhiều chữ số đổi cùng lúc — em cần nhìn đúng chữ số đứng ngay sau chữ số cuối được giữ.",
          answer: function () { return 7000; },
          reasons: [
            "Giữ 69, chữ số tiếp theo là 5 nên làm tròn lên 70, rồi thêm số 0 giữ chỗ: 7000.",
            "Chỉ giữ hai chữ số đầu và thay phần còn lại bằng số 0: 6900.",
            "Làm tròn chữ số cuối cùng: 6950."
          ],
          reason: 0,
          sample: { guess: "7000", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.3.1-x1.ask": "Work out 6.4 ÷ 0.01 × 0.1 in several different ways.",
        "q.3.1-x1.why": "Turning “divide by 0.01” into “multiply by 100” and combining steps lets you calculate mentally and still check yourself.",
        "q.3.1-x1.strategies": ["Work from left to right", "Multiply by 0.1 first, then divide by 0.01", "Combine the two steps into one multiplication"],
        "q.3.1-x1.steps.s1": ["6.4 ÷ 0.01 = ?"],
        "q.3.1-x1.steps.s2": ["6.4 × 0.1 = ?"],
        "q.3.1-x1.steps.s3": ["÷ 0.01 then × 0.1 is the same as multiplying by which number?"],
        "q.3.1-x2.ask": "Example: 4.2 × 0.1 = 0.42. If it becomes 4.2 ÷ 0.1, what is the result?",
        "q.3.1-x2.why": "Telling “multiply by 0.1” from “divide by 0.1” stops your answer being out by a factor of 100.",
        "q.3.1-x2.reasons": [
          "Dividing by 0.1 is the same as multiplying by 10, so it is 42.",
          "Dividing by 0.1 is the same as dividing by 10, so it is still 0.42.",
          "Division always makes a number smaller, so it is 0.042."
        ],
        "q.3.1-x3.ask": "Start with 500. Each step: multiply by 0.01, then divide by 0.1. After steps 1, 2, 3 you get 50, 5, 0.5, … Find the result after step 4, step 6 and step 7, and the rule for the result after step n.",
        "q.3.1-x3.why": "Seeing that “× 0.01 then ÷ 0.1” is just “× 0.1” shows the digits moving one place value at each step.",
        "q.3.2-x1.labels": ["Number"],
        "q.3.2-x1.ask": "Find a positive number that rounds to 0.08 to 1 significant figure but rounds to 0.075 to 2 significant figures.",
        "q.3.2-x1.why": "Rounding backwards shows that each rounded value stands for a whole interval of numbers, not just one number.",
        "q.3.2-x1.challengeText": "It rounds to 0.0753 to 3 significant figures.",
        "q.3.2-x1.kinds": ["2 significant figures (exactly 0.075)", "3 significant figures", "4 or more significant figures"],
        "q.3.2-x2.ask": "Choose a positive number x (from 0.000001 to 999 999) and a number of significant figures n (1 to 4); x must have more than n significant figures. Your problem: round x to n significant figures.",
        "q.3.2-x2.why": "Finding “tricky” numbers to round (carrying into the next place, keeping a 0) helps you avoid exactly those traps in tests.",
        "q.3.2-x2.template": "Round x to n significant figures",
        "q.3.2-x2.fields": ["Number x", "Significant figures n"],
        "q.3.2-x2.criteria": [
          "x is less than 1 (it has leading zeros)",
          "Rounding up carries into the place before (the last digit kept is 9, like 0.0397 → 0.040)",
          "x < 1 and the answer needs a 0 at the end to show the significant figures (like 0.80)",
          "x ≥ 1000, so you must add zeros as place holders",
          "Round to at least 3 significant figures"
        ],
        "q.3.2-x3.ask": "6952 rounded to 1 significant figure is 7000. If you round 6952 to 2 significant figures, what do you get?",
        "q.3.2-x3.why": "Sometimes rounding up changes several digits at once — you must look at the digit just after the last one you keep.",
        "q.3.2-x3.reasons": [
          "Keep 69; the next digit is 5, so round up to 70, then add place-holder zeros: 7000.",
          "Keep the first two digits and replace the rest with zeros: 6900.",
          "Round the last digit: 6950."
        ]
      },
      vi: {}
    }
  });
})();
