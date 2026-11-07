// 🚀 Extension quests — Math 8, unit 10 (Percentages). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only
// from each section's key ideas. Check functions receive NUMBERS parsed by the game; percentages are tested
// in whole-number arithmetic so 3000 ÷ A never meets a floating-point slip.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const change = function (f) { return Math.abs(f.b - f.a); };
  // percentage change from the ORIGINAL value a, rounded to 1 decimal place like the book does
  const pct = function (f) { return Math.round((change(f) * 1000) / f.a) / 10; };

  window.GAME_QUESTS.push({
    unit: 10,
    sections: {
      "10.1": [
        {
          id: "10.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Giá trị cũ A", "Giá trị mới B"],
          ask: "Một lượng thay đổi từ giá trị cũ A sang giá trị mới B (A, B nguyên dương, A ≤ 200). Thay đổi tuyệt đối là đúng 30, và phần trăm tăng hoặc giảm là một số nguyên. Tìm các cặp A, B.",
          why: "Cùng một thay đổi 30 có thể là phần trăm rất lớn hay rất nhỏ — vì phần trăm thay đổi luôn chia cho giá trị CŨ.",
          check: function (v) { return inRange(v[0], 1, 200) && isInt(v[1]) && v[1] > 0 && Math.abs(v[1] - v[0]) === 30 && 3000 % v[0] === 0; },
          challenge: function (v) { return v[1] < v[0] && 3000 / v[0] > 50; },
          challengeText: "Là phần trăm giảm, và giảm hơn 50%.",
          kinds: [
            { id: "down", text: "phần trăm giảm", test: function (v) { return v[1] < v[0]; } },
            { id: "big", text: "tăng từ 100% trở lên (giá trị ít nhất gấp đôi)", test: function (v) { return v[0] <= 30; } },
            { id: "small", text: "tăng dưới 100%", test: function () { return true; } }
          ],
          kindSamples: [["60", "90"], ["100", "130"], ["10", "40"], ["20", "50"], ["60", "30"]],
          sample: { values: ["60", "90"] }
        },
        {
          id: "10.1-x2", type: "whatif", base: 250,
          ask: "Ví dụ: một chiếc áo giá 200 nghìn đồng tăng giá 25% thành 250 nghìn đồng. Nếu sau đó giá mới lại giảm 25% thì áo giá bao nhiêu nghìn đồng?",
          why: "Tăng rồi giảm cùng một phần trăm không đưa về giá cũ, vì lần giảm tính trên giá đã tăng — đây là chỗ người mua hay bị đánh lừa.",
          answer: function () { return 250 - 0.25 * 250; },
          reasons: [
            "25% của 250 là 62,5 nên giá còn 250 − 62,5 = 187,5 nghìn đồng.",
            "Tăng 25% rồi giảm 25% thì hai phần bù nhau, giá lại là 200 nghìn đồng.",
            "Giảm 25% nghĩa là bớt 25 nghìn đồng: còn 225 nghìn đồng."
          ],
          reason: 0,
          sample: { guess: "187,5", reason: 0 }
        },
        {
          id: "10.1-x3", type: "make",
          ask: "Tự tạo đề: một giá trị thay đổi từ A sang B (A, B nguyên từ 1 đến 10 000, A ≠ B). Đề hỏi phần trăm tăng hoặc giảm (làm tròn đến 1 chữ số thập phân). Hãy thử đạt nhiều tiêu chí trong cùng một đề.",
          why: "Tự chọn hai giá trị giúp em thấy phần trăm thay đổi phụ thuộc vào cả mức thay đổi lẫn giá trị ban đầu.",
          template: "Từ A thành B, tăng hay giảm bao nhiêu %?",
          fields: [{ id: "a", label: "Giá trị cũ A" }, { id: "b", label: "Giá trị mới B" }],
          valid: function (f) { return inRange(f.a, 1, 10000) && inRange(f.b, 1, 10000) && f.a !== f.b; },
          solve: function (f) { return pct(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "A value changes from " + f.a + " to " + f.b + ". Work out the percentage " + (f.b > f.a ? "increase" : "decrease") + " (to 1 decimal place)."
              : "Một giá trị thay đổi từ " + f.a + " thành " + f.b + ". Tính phần trăm " + (f.b > f.a ? "tăng" : "giảm") + " (làm tròn đến 1 chữ số thập phân).";
          },
          criteria: [
            { id: "dec", text: "Là phần trăm giảm", test: function (f) { return f.b < f.a; } },
            { id: "over", text: "Phần trăm tăng lớn hơn 100%", test: function (f) { return f.b > 2 * f.a; } },
            { id: "whole", text: "Phần trăm thay đổi là số nguyên (không cần làm tròn)", test: function (f) { return (100 * change(f)) % f.a === 0; } },
            { id: "odd", text: "Giá trị cũ A không phải số tròn chục", test: function (f) { return f.a % 10 !== 0; } },
            { id: "small", text: "Thay đổi tuyệt đối lớn hơn 100 nhưng phần trăm thay đổi nhỏ hơn 10%", test: function (f) { return change(f) > 100 && 10 * change(f) < f.a; } }
          ],
          sample: { fields: { a: "2025", b: "2187" } }
        }
      ],
      "10.2": [
        {
          id: "10.2-x1", type: "ways",
          ask: "Một chiếc xe đạp giá 800 nghìn đồng. Giá tăng 15%, sau đó giá mới giảm 20%. Giá cuối cùng là bao nhiêu nghìn đồng? Giải theo nhiều cách.",
          why: "Nhiều lần thay đổi liên tiếp thì nhân các hệ số lại — và vì phép nhân đổi chỗ được, thứ tự tăng, giảm không làm đổi giá cuối.",
          strategies: [
            { id: "s1", name: "Tính từng lần, tăng trước", steps: [{ ask: "Giá sau khi tăng 15% là bao nhiêu nghìn đồng?", answer: 920 }, { answer: 736 }] },
            { id: "s2", name: "Nhân hai hệ số thành một hệ số chung", steps: [{ ask: "Hệ số chung 1,15 × 0,8 = ?", answer: 0.92 }, { answer: 736 }] },
            { id: "s3", name: "Đổi thứ tự: giảm trước rồi mới tăng", steps: [{ ask: "800 nghìn giảm 20% còn bao nhiêu nghìn đồng?", answer: 640 }, { answer: 736 }] }
          ],
          sample: { strategy: "s2", steps: ["0,92", "736"] }
        },
        {
          id: "10.2-x2", type: "pattern",
          ask: "Hệ số nhân để giảm 4%, 8%, 12%, … lần lượt là 0,96; 0,92; 0,88. Tìm hệ số nhân để giảm 4n% với n = 5, n = 10, n = 25 và viết quy luật theo n.",
          why: "Giảm p% là nhân với (1 − p/100); hệ số về 0 khi giảm đúng 100% — vì thế phần trăm giảm không thể vượt quá 100%.",
          seq: [0.96, 0.92, 0.88],
          term: function (n) { return 1 - 0.04 * n; },
          askN: [5, 10, 25],
          sample: { terms: { 5: "0,8", 10: "0,6", 25: "0" }, rule: "1-0.04n" }
        },
        {
          id: "10.2-x3", type: "whatif", base: 35,
          ask: "Ví dụ: nhân một giá trị với hệ số 0,65 nghĩa là giảm 35%. Nếu hệ số nhân là 1,65 thì giá trị tăng hay giảm bao nhiêu phần trăm? (Chỉ nhập số phần trăm.)",
          why: "Hệ số lớn hơn 1 là tăng (phần vượt 100%), nhỏ hơn 1 là giảm (100% trừ phần còn lại) — đọc đúng hệ số là đọc đúng mức thay đổi.",
          answer: function () { return 65; },
          reasons: [
            "1,65 = 165% lớn hơn 100%, nên giá trị tăng 165% − 100% = 65%.",
            "1,65 = 165% nên giá trị tăng 165%.",
            "Phần thập phân vẫn là 0,65 nên vẫn là giảm 35%."
          ],
          reason: 0,
          sample: { guess: "65", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.10.1-x1.labels": ["Original value A", "New value B"],
        "q.10.1-x1.kinds": ["a percentage decrease", "an increase of 100% or more (the value at least doubles)", "an increase of less than 100%"],
        "q.10.1-x1.ask": "An amount changes from an original value A to a new value B (A, B positive whole numbers, A ≤ 200). The absolute change is exactly 30, and the percentage increase or decrease is a whole number. Find pairs A, B.",
        "q.10.1-x1.why": "The same change of 30 can be a very large or a very small percentage — because a percentage change always divides by the ORIGINAL value.",
        "q.10.1-x1.challengeText": "It is a percentage decrease, of more than 50%.",
        "q.10.1-x2.ask": "Example: a shirt costing 200 thousand dong has its price increased by 25% to 250 thousand dong. If the new price is then decreased by 25%, how many thousand dong does the shirt cost?",
        "q.10.1-x2.why": "Increasing and then decreasing by the same percentage does not return to the old price, because the decrease is worked out on the increased price — a common trap for shoppers.",
        "q.10.1-x2.reasons": [
          "25% of 250 is 62.5, so the price is 250 − 62.5 = 187.5 thousand dong.",
          "An increase of 25% and a decrease of 25% cancel out, so the price is 200 thousand dong again.",
          "A decrease of 25% means taking away 25 thousand dong: 225 thousand dong is left."
        ],
        "q.10.1-x3.ask": "Make your own question: a value changes from A to B (A, B whole numbers from 1 to 10 000, A ≠ B). The question asks for the percentage increase or decrease (to 1 decimal place). Try to meet several criteria in one question.",
        "q.10.1-x3.why": "Choosing the two values yourself shows that a percentage change depends on both the size of the change and the original value.",
        "q.10.1-x3.template": "From A to B, what is the percentage change?",
        "q.10.1-x3.fields": ["Original value A", "New value B"],
        "q.10.1-x3.criteria": [
          "It is a percentage decrease",
          "The percentage increase is greater than 100%",
          "The percentage change is a whole number (no rounding needed)",
          "The original value A is not a multiple of 10",
          "The absolute change is greater than 100 but the percentage change is less than 10%"
        ],
        "q.10.2-x1.ask": "A bicycle costs 800 thousand dong. The price increases by 15% and then the new price decreases by 20%. What is the final price in thousand dong? Solve it in several ways.",
        "q.10.2-x1.why": "For several changes in a row you multiply the multipliers — and because multiplication can be done in any order, the order of the increase and decrease does not change the final price.",
        "q.10.2-x1.strategies": ["One change at a time, increase first", "Multiply the two multipliers into one", "Change the order: decrease first, then increase"],
        "q.10.2-x1.steps.s1": ["What is the price in thousand dong after the 15% increase?"],
        "q.10.2-x1.steps.s2": ["The overall multiplier 1.15 × 0.8 = ?"],
        "q.10.2-x1.steps.s3": ["800 thousand decreased by 20% is how many thousand dong?"],
        "q.10.2-x2.ask": "The multipliers for decreases of 4%, 8%, 12%, … are 0.96, 0.92, 0.88. Find the multiplier for a decrease of 4n% when n = 5, n = 10 and n = 25, and write the rule in terms of n.",
        "q.10.2-x2.why": "A decrease of p% means multiplying by (1 − p/100); the multiplier reaches 0 at a decrease of exactly 100% — that is why a percentage decrease cannot be more than 100%.",
        "q.10.2-x3.ask": "Example: multiplying a value by 0.65 means a decrease of 35%. If the multiplier is 1.65, by what percentage does the value increase or decrease? (Enter the percentage number only.)",
        "q.10.2-x3.why": "A multiplier greater than 1 is an increase (the part above 100%), less than 1 is a decrease (100% minus what is left) — reading the multiplier correctly means reading the change correctly.",
        "q.10.2-x3.reasons": [
          "1.65 = 165%, more than 100%, so the value increases by 165% − 100% = 65%.",
          "1.65 = 165%, so the value increases by 165%.",
          "The decimal part is still 0.65, so it is still a decrease of 35%."
        ]
      },
      vi: {}
    }
  });
})();
