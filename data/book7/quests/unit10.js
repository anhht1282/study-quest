// 🚀 Extension quests — Math 7, unit 10 (Percentages). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  // p% of q, computed from integers so 7% of 30 gives exactly 2.1
  const pctOf = function (f) { return (f.p * f.q) / 100; };

  window.GAME_QUESTS.push({
    unit: 10,
    sections: {
      "10.1": [
        {
          id: "10.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Phần trăm p (%)", "Lượng Q"],
          ask: "Tìm các cặp số nguyên dương p và Q (p từ 1 đến 100) sao cho p% của Q bằng đúng 12.",
          why: "Cùng một kết quả có thể đến từ phần trăm nhỏ của lượng lớn hay phần trăm lớn của lượng nhỏ — nhìn ra điều đó giúp em tính nhẩm phần trăm nhanh hơn.",
          check: function (v) { return inRange(v[0], 1, 100) && isInt(v[1]) && v[1] > 0 && v[0] * v[1] === 1200; },
          challenge: function (v) { return v[1] % 2 === 1; },
          challengeText: "Lượng Q là số lẻ.",
          kinds: [
            { id: "over", text: "p lớn hơn 50 (12 là hơn nửa Q)", test: function (v) { return v[0] > 50; } },
            { id: "half", text: "p = 50 (12 là nửa Q)", test: function (v) { return v[0] === 50; } },
            { id: "under", text: "p nhỏ hơn 50 (12 chưa tới nửa Q)", test: function () { return true; } }
          ],
          kindSamples: [["50", "24"], ["100", "12"], ["75", "16"], ["10", "120"], ["1", "1200"]],
          sample: { values: ["50", "24"] }
        },
        {
          id: "10.1-x2", type: "whatif", base: 18,
          ask: "Ví dụ: hình tròn 60 cm² chia 10 phần bằng nhau, tô hồng 3 phần, phần hồng là 18 cm². Nếu chia hình tròn thành 20 phần bằng nhau và vẫn tô hồng 3 phần thì phần hồng rộng bao nhiêu cm²?",
          why: "Phân số và phần trăm phụ thuộc vào cả số phần được chọn lẫn tổng số phần — đây là chỗ hay nhầm khi đổi phân số sang phần trăm.",
          answer: function () { return (3 * 60) / 20; },
          reasons: [
            "3/20 = 15%, chỉ bằng một nửa 30%, nên phần hồng còn 0,15 × 60 = 9 cm².",
            "Vẫn tô 3 phần nên diện tích phần hồng không đổi, vẫn 18 cm².",
            "Có nhiều phần hơn nên phần hồng lớn hơn, gấp đôi thành 36 cm²."
          ],
          reason: 0,
          sample: { guess: "9", reason: 0 }
        },
        {
          id: "10.1-x3", type: "make",
          ask: "Tự tạo một đề “Tìm p% của Q” (p nguyên từ 1 đến 100, Q nguyên từ 1 đến 10 000). Hãy thử đạt nhiều tiêu chí trong cùng một đề.",
          why: "Tự chọn số cho đề giúp em thấy khi nào đổi phần trăm sang phân số (như 25% = 1/4) thì tính nhanh hơn dùng số thập phân.",
          template: "Tìm p% của Q",
          fields: [{ id: "p", label: "Phần trăm p" }, { id: "q", label: "Lượng Q" }],
          valid: function (f) { return inRange(f.p, 1, 100) && inRange(f.q, 1, 10000); },
          solve: function (f) { return pctOf(f); },
          render: function (f, lang) {
            return lang === "en" ? "Find " + f.p + "% of " + f.q + "." : "Tìm " + f.p + "% của " + f.q + ".";
          },
          criteria: [
            { id: "whole", text: "Đáp số là số nguyên", test: function (f) { return (f.p * f.q) % 100 === 0; } },
            { id: "not10", text: "p không phải số tròn chục (ví dụ 35%)", test: function (f) { return f.p % 10 !== 0; } },
            { id: "big", text: "Đáp số lớn hơn 100", test: function (f) { return pctOf(f) > 100; } },
            { id: "simple", text: "p% rút gọn được thành phân số có mẫu số nhỏ hơn 10 (như 75% = 3/4)", test: function (f) { return 100 / gcd(f.p, 100) < 10; } },
            { id: "qodd", text: "Q không phải số tròn chục", test: function (f) { return f.q % 10 !== 0; } }
          ],
          sample: { fields: { p: "75", q: "160" } }
        }
      ],
      "10.2": [
        {
          id: "10.2-x1", type: "ways",
          ask: "15% số tiền tiết kiệm của Lan là 27 nghìn đồng. Lan tiết kiệm được tất cả bao nhiêu nghìn đồng? Giải theo nhiều cách.",
          why: "Đi từ một phần trăm về 100% là kỹ năng ngược của “tìm phần trăm của một lượng”, và mỗi cách là một cách kiểm tra lại cách kia.",
          strategies: [
            { id: "s1", name: "Tìm 1% trước", steps: [{ ask: "1% số tiền là bao nhiêu nghìn đồng? (27 ÷ 15)", answer: 1.8 }, { answer: 180 }] },
            { id: "s2", name: "Tìm 5% trước (15% = 3 lần 5%)", steps: [{ ask: "5% số tiền là bao nhiêu nghìn đồng?", answer: 9 }, { answer: 180 }] },
            { id: "s3", name: "Đổi 15% sang phân số tối giản", steps: [
              { ask: "15% viết thành phân số tối giản 3/? — mẫu số là bao nhiêu?", answer: 20 },
              { ask: "Một phần (1/20) số tiền là bao nhiêu nghìn đồng?", answer: 9 }, { answer: 180 }] }
          ],
          sample: { strategy: "s1", steps: ["1,8", "180"] }
        },
        {
          id: "10.2-x2", type: "pattern",
          ask: "Một cây non cao 40 cm. Mỗi tuần cây cao thêm 10 cm. Sau tuần 1, 2, 3 cây cao bằng 125%, 150%, 175% chiều cao ban đầu. Sau tuần 6, tuần 12, tuần 20 thì bằng bao nhiêu phần trăm? Viết quy luật theo n.",
          why: "Phần trăm lớn hơn 100 cho biết một lượng đã vượt quá lượng ban đầu bao nhiêu — em sẽ gặp lại khi tính tăng, giảm phần trăm.",
          seq: [125, 150, 175],
          term: function (n) { return 25 * n + 100; },
          askN: [6, 12, 20],
          sample: { terms: { 6: "250", 12: "400", 20: "600" }, rule: "25n+100" }
        },
        {
          id: "10.2-x3", type: "whatif", base: 0.175,
          ask: "Ví dụ: 17,5% viết thành số thập phân là 0,175. Nếu là 1,75% thì số thập phân là bao nhiêu?",
          why: "Phần trăm nhỏ hơn 1 hoặc có phần thập phân vẫn theo đúng một quy tắc “chia cho 100” — nắm chắc điều này để không nhầm vị trí dấu phẩy.",
          answer: function () { return 0.0175; },
          reasons: [
            "1,75% nhỏ hơn 17,5% mười lần, nên số thập phân cũng nhỏ hơn mười lần: 1,75 ÷ 100 = 0,0175.",
            "Các chữ số vẫn là 1, 7, 5 nên số thập phân vẫn là 0,175.",
            "Chỉ cần bỏ dấu %: 1,75% = 1,75."
          ],
          reason: 0,
          sample: { guess: "0,0175", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.10.1-x1.labels": ["Percentage p (%)", "Amount Q"],
        "q.10.1-x1.ask": "Find pairs of positive whole numbers p and Q (p from 1 to 100) so that p% of Q is exactly 12.",
        "q.10.1-x1.why": "The same result can come from a small percentage of a large amount or a large percentage of a small amount — seeing this helps you find percentages mentally.",
        "q.10.1-x1.challengeText": "The amount Q is an odd number.",
        "q.10.1-x1.kinds": ["p is more than 50 (12 is more than half of Q)", "p = 50 (12 is half of Q)", "p is less than 50 (12 is less than half of Q)"],
        "q.10.1-x2.ask": "Example: a 60 cm² circle is divided into 10 equal parts and 3 parts are shaded pink, so the pink area is 18 cm². If the circle is divided into 20 equal parts and still 3 parts are pink, what is the pink area in cm²?",
        "q.10.1-x2.why": "Fractions and percentages depend on both the parts chosen and the total number of parts — a common slip when changing fractions to percentages.",
        "q.10.1-x2.reasons": [
          "3/20 = 15%, only half of 30%, so the pink area is 0.15 × 60 = 9 cm².",
          "Still 3 parts are shaded, so the pink area stays 18 cm².",
          "There are more parts, so the pink area is bigger, doubling to 36 cm²."
        ],
        "q.10.1-x3.ask": "Make your own question “Find p% of Q” (p a whole number from 1 to 100, Q a whole number from 1 to 10 000). Try to meet several criteria in one question.",
        "q.10.1-x3.why": "Choosing the numbers yourself shows when changing a percentage to a fraction (such as 25% = 1/4) is quicker than using a decimal.",
        "q.10.1-x3.template": "Find p% of Q",
        "q.10.1-x3.fields": ["Percentage p", "Amount Q"],
        "q.10.1-x3.criteria": [
          "The answer is a whole number", "p is not a multiple of 10 (for example 35%)", "The answer is greater than 100",
          "p% simplifies to a fraction with a denominator less than 10 (like 75% = 3/4)", "Q is not a multiple of 10"
        ],
        "q.10.2-x1.ask": "15% of Lan's savings is 27 thousand dong. How many thousand dong has Lan saved altogether? Solve it in several ways.",
        "q.10.2-x1.why": "Going from a percentage back to 100% is the inverse of finding a percentage of an amount, and each method checks the others.",
        "q.10.2-x1.strategies": ["Find 1% first", "Find 5% first (15% = 3 lots of 5%)", "Write 15% as a fraction in its simplest form"],
        "q.10.2-x1.steps.s1": ["How many thousand dong is 1% of the savings? (27 ÷ 15)"],
        "q.10.2-x1.steps.s2": ["How many thousand dong is 5% of the savings?"],
        "q.10.2-x1.steps.s3": ["15% as a fraction in its simplest form is 3/? — what is the denominator?", "How many thousand dong is one part (1/20) of the savings?"],
        "q.10.2-x2.ask": "A young tree is 40 cm tall. It grows 10 cm every week. After weeks 1, 2, 3 its height is 125%, 150%, 175% of its starting height. What percentage is it after week 6, week 12 and week 20? Write the rule in terms of n.",
        "q.10.2-x2.why": "A percentage greater than 100 shows how far an amount has gone past the starting amount — you will meet this again with percentage increases and decreases.",
        "q.10.2-x3.ask": "Example: 17.5% as a decimal is 0.175. What is 1.75% as a decimal?",
        "q.10.2-x3.why": "Percentages less than 1 or with decimals follow the same rule “divide by 100” — knowing this stops you misplacing the decimal point.",
        "q.10.2-x3.reasons": [
          "1.75% is ten times smaller than 17.5%, so the decimal is ten times smaller too: 1.75 ÷ 100 = 0.0175.",
          "The digits are still 1, 7, 5, so the decimal is still 0.175.",
          "Just remove the % sign: 1.75% = 1.75."
        ]
      },
      vi: {}
    }
  });
})();
