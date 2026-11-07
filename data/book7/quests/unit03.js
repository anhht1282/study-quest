// 🚀 Extension quests — Math 7, unit 3 (Place value and rounding). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  // number of decimal places of x (up to 6), or -1 when it has more
  const places = function (x) {
    for (let k = 0; k <= 6; k++) { const s = x * Math.pow(10, k); if (Math.abs(s - Math.round(s)) < 1e-6) return k; }
    return -1;
  };
  const fmt = function (x, lang) {
    const s = String(Math.round(x * 1e9) / 1e9).replace("-", "−");
    return lang === "en" ? s : s.replace(".", ",");
  };
  // rounding x to d places, done exactly on whole numbers: X = x written as an integer of k places
  const parts = function (f) {
    const k = places(f.x), X = Math.round(f.x * Math.pow(10, k)), cut = Math.pow(10, k - f.d);
    const kept = Math.floor(X / cut);                   // digits kept before rounding
    const rounded = Math.floor((X + cut / 2) / cut);    // half rounds up
    let step = X;                                       // the wrong way: rounding one place at a time
    for (let j = k; j > f.d; j--) step = Math.floor((step + 5) / 10);
    return { kept: kept, rounded: rounded, chain: step };
  };

  window.GAME_QUESTS.push({
    unit: 3,
    sections: {
      "3.1": [
        {
          id: "3.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Số a", "Số mũ n"],
          ask: "Tìm số a và số mũ n (n nguyên từ 1 đến 6) sao cho a × 10ⁿ = 4 500.",
          why: "Mỗi lần số mũ tăng 1, dấu phẩy của a phải dời sang trái một hàng — em thấy rõ giá trị theo vị trí.",
          check: function (v) { return v[0] > 0 && inRange(v[1], 1, 6) && Math.abs(v[0] * Math.pow(10, v[1]) - 4500) < 1e-6; },
          challenge: function (v) { return v[0] < 0.01; },
          challengeText: "Số a nhỏ hơn 0,01.",
          kinds: [
            { id: "int", text: "a là số nguyên", test: function (v) { return isInt(v[0]); } },
            { id: "mid", text: "a là số thập phân lớn hơn 1", test: function (v) { return v[0] > 1; } },
            { id: "small", text: "a nhỏ hơn 1", test: function () { return true; } }
          ],
          kindSamples: [["450", "1"], ["45", "2"], ["4,5", "3"], ["0,45", "4"], ["0,045", "5"]],
          sample: { values: ["45", "2"] }
        },
        {
          id: "3.1-x2", type: "whatif", base: 23.5,
          ask: "Ví dụ: 23 500 ÷ 10³ = 23,5. Nếu chia 23 500 cho 10⁵ thì được bao nhiêu?",
          why: "Chia cho 10ⁿ là dời dấu phẩy chứ không phải “bỏ chữ số 0” — điều này rất quan trọng khi số không có đủ chữ số 0.",
          answer: function () { return 0.235; },
          reasons: [
            "Dời dấu phẩy 5 hàng sang trái: 23 500 thành 0,235.",
            "Bỏ năm chữ số 0, nhưng 23 500 chỉ có hai chữ số 0 nên được 235.",
            "Chia cho 10⁵ là chia cho 50 nên được 470."
          ],
          reason: 0,
          sample: { guess: "0,235", reason: 0 }
        },
        {
          id: "3.1-x3", type: "pattern",
          ask: "Xét các số 2,5 × 10¹ = 25; 2,5 × 10² = 250; 2,5 × 10³ = 2 500; … Số thứ n là 2,5 × 10ⁿ. Đếm số chữ số 0 ở cuối: 0, 1, 2, … Số thứ 5, thứ 12, thứ 40 có bao nhiêu chữ số 0 ở cuối? Viết quy luật.",
          why: "Nhân với 10ⁿ không phải lúc nào cũng thêm n chữ số 0: một hàng đầu tiên dùng để dời dấu phẩy của 2,5.",
          seq: [0, 1, 2],
          term: function (n) { return n - 1; },
          askN: [5, 12, 40],
          sample: { terms: { 5: "4", 12: "11", 40: "39" }, rule: "n-1" }
        }
      ],
      "3.2": [
        {
          id: "3.2-x1", type: "many", arity: 1,
          labels: ["Số có 3 chữ số thập phân"],
          ask: "Tìm số có đúng 3 chữ số thập phân (chữ số cuối khác 0) mà làm tròn đến 2 chữ số thập phân được 7,30.",
          why: "Đi ngược từ số đã làm tròn giúp em thấy mỗi số làm tròn đại diện cho cả một khoảng số.",
          check: function (v) {
            const r = Math.round(v[0] * 1000);
            return Math.abs(r - v[0] * 1000) < 1e-6 && r % 10 !== 0 && Math.floor((r + 5) / 10) === 730;
          },
          challenge: function (v) { return v[0] < 7.3; },
          challengeText: "Số đó nhỏ hơn 7,3 (phải làm tròn có nhớ).",
          kinds: [
            { id: "half", text: "chữ số cuối là 5 (trường hợp ranh giới, làm tròn lên)", test: function (v) { return Math.abs(v[0] - 7.295) < 1e-6; } },
            { id: "up", text: "nhỏ hơn 7,3 (làm tròn lên)", test: function (v) { return v[0] < 7.3; } },
            { id: "down", text: "lớn hơn 7,3 (làm tròn xuống)", test: function () { return true; } }
          ],
          kindSamples: [["7,295"], ["7,296"], ["7,297"], ["7,301"], ["7,302"]],
          sample: { values: ["7,302"] }
        },
        {
          id: "3.2-x2", type: "make",
          ask: "Tự ra đề làm tròn: chọn một số x (lớn hơn 0, nhỏ hơn 1000, tối đa 6 chữ số thập phân) và số chữ số thập phân d (1 đến 4) cần giữ lại; x phải có nhiều hơn d chữ số thập phân.",
          why: "Đề làm tròn hay là đề có “bẫy” (nhớ sang hàng trước, làm tròn nhiều lần) — người ra đề phải hiểu rõ quy tắc nhất.",
          template: "Làm tròn x đến d chữ số thập phân",
          fields: [{ id: "x", label: "Số x" }, { id: "d", label: "Số chữ số thập phân d" }],
          valid: function (f) { const k = places(f.x); return f.x > 0 && f.x < 1000 && inRange(f.d, 1, 4) && k > f.d; },
          solve: function (f) { return parts(f).rounded / Math.pow(10, f.d); },
          render: function (f, lang) {
            return lang === "en"
              ? "Round " + fmt(f.x, "en") + " to " + f.d + " decimal place" + (f.d > 1 ? "s" : "") + "."
              : "Làm tròn " + fmt(f.x, "vi") + " đến " + f.d + " chữ số thập phân.";
          },
          criteria: [
            { id: "up", text: "Phải làm tròn lên (chữ số ngay bên phải từ 5 trở lên)", test: function (f) { const p = parts(f); return p.rounded > p.kept; } },
            { id: "carry", text: "Làm tròn lên có nhớ sang hàng bên trái (như 2,96 → 3,0)", test: function (f) { const p = parts(f); return p.rounded > p.kept && p.kept % 10 === 9; } },
            { id: "trap", text: "Có bẫy: làm tròn nhiều lần từng hàng sẽ ra kết quả sai", test: function (f) { const p = parts(f); return p.chain !== p.rounded; } },
            { id: "zero", text: "Kết quả có chữ số 0 ở hàng cuối được giữ lại (như 5,30)", test: function (f) { return parts(f).rounded % 10 === 0; } },
            { id: "small", text: "Số x nhỏ hơn 1", test: function (f) { return f.x < 1; } }
          ],
          sample: { fields: { x: "2,9961", d: "2" } }
        },
        {
          id: "3.2-x3", type: "ways",
          ask: "Làm tròn 4,8573 đến 2 chữ số thập phân theo hai cách.",
          why: "Quy tắc “nhìn chữ số bên phải” và hình ảnh “điểm chính giữa” trên trục số là hai cách nhìn của cùng một việc — cách sau giải thích vì sao quy tắc đúng.",
          strategies: [
            { id: "s1", name: "Nhìn chữ số ngay bên phải hàng phần trăm", steps: [{ ask: "Chữ số hàng phần nghìn của 4,8573 là gì?", answer: 7 }, { answer: 4.86 }] },
            { id: "s2", name: "Dùng điểm chính giữa trên trục số", steps: [
              { ask: "4,8573 nằm giữa 4,85 và 4,86. Điểm chính giữa của hai số này là số nào?", answer: 4.855 }, { answer: 4.86 }] }
          ],
          sample: { strategy: "s1", steps: ["7", "4,86"] }
        }
      ]
    },
    tr: {
      en: {
        "q.3.1-x1.labels": ["Number a", "Power n"],
        "q.3.1-x1.ask": "Find a number a and a power n (n a whole number from 1 to 6) so that a × 10ⁿ = 4500.",
        "q.3.1-x1.why": "Each time the power goes up by 1, the decimal point of a must move one place left — place value in action.",
        "q.3.1-x1.challengeText": "The number a is less than 0.01.",
        "q.3.1-x1.kinds": ["a is a whole number", "a is a decimal greater than 1", "a is less than 1"],
        "q.3.1-x2.ask": "Example: 23 500 ÷ 10³ = 23.5. What do you get if you divide 23 500 by 10⁵?",
        "q.3.1-x2.why": "Dividing by 10ⁿ moves the decimal point — it is not “removing zeros”, which matters when there are not enough zeros.",
        "q.3.1-x2.reasons": [
          "Move the decimal point 5 places left: 23 500 becomes 0.235.",
          "Remove five zeros, but 23 500 has only two zeros, so the answer is 235.",
          "Dividing by 10⁵ means dividing by 50, so the answer is 470."
        ],
        "q.3.1-x3.ask": "Look at 2.5 × 10¹ = 25; 2.5 × 10² = 250; 2.5 × 10³ = 2500; … Number n is 2.5 × 10ⁿ. Count the zeros at the end: 0, 1, 2, … How many zeros are at the end of number 5, number 12 and number 40? Write the rule.",
        "q.3.1-x3.why": "Multiplying by 10ⁿ does not always add n zeros: the first place is used to move the decimal point of 2.5.",
        "q.3.2-x1.labels": ["Number with 3 decimal places"],
        "q.3.2-x1.ask": "Find numbers with exactly 3 decimal places (last digit not 0) that round to 7.30 to 2 decimal places.",
        "q.3.2-x1.why": "Working backwards from a rounded number shows that each rounded value stands for a whole interval of numbers.",
        "q.3.2-x1.challengeText": "The number is less than 7.3 (rounding up with a carry).",
        "q.3.2-x1.kinds": ["the last digit is 5 (the boundary case, rounds up)", "less than 7.3 (rounds up)", "greater than 7.3 (rounds down)"],
        "q.3.2-x2.ask": "Make a rounding problem: choose a number x (more than 0, less than 1000, at most 6 decimal places) and the number of decimal places d (1 to 4) to keep; x must have more than d decimal places.",
        "q.3.2-x2.why": "A good rounding question has a “trap” (a carry, or rounding in several steps) — the setter must understand the rule best.",
        "q.3.2-x2.template": "Round x to d decimal places",
        "q.3.2-x2.fields": ["Number x", "Decimal places d"],
        "q.3.2-x2.criteria": [
          "You must round up (the next digit is 5 or more)", "Rounding up carries into the place to the left (like 2.96 → 3.0)",
          "A trap: rounding one place at a time gives a wrong answer", "The answer keeps a 0 in its last place (like 5.30)",
          "The number x is less than 1"
        ],
        "q.3.2-x3.ask": "Round 4.8573 to 2 decimal places in two ways.",
        "q.3.2-x3.why": "The rule “look at the next digit” and the picture of the “halfway point” on a number line are two views of one idea — the second explains why the rule works.",
        "q.3.2-x3.strategies": ["Look at the digit just right of the hundredths", "Use the halfway point on a number line"],
        "q.3.2-x3.steps.s1": ["What is the thousandths digit of 4.8573?"],
        "q.3.2-x3.steps.s2": ["4.8573 lies between 4.85 and 4.86. What number is halfway between them?"]
      },
      vi: {}
    }
  });
})();
