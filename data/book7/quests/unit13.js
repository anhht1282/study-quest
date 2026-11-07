// 🚀 Extension quests — Math 7, unit 13 (Probability). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only
// from each section's key ideas. Nothing random here: probabilities are exact fractions, compared in integers.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  // bag of r red, x blue, y yellow marbles
  const total = function (f) { return f.r + f.x + f.y; };
  const allColours = function (f) { return f.r > 0 && f.x > 0 && f.y > 0; };

  window.GAME_QUESTS.push({
    unit: 13,
    sections: {
      "13.1": [
        {
          id: "13.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Tử số a", "Mẫu số b"],
          ask: "Đội Hổ thắng với xác suất 45%, đội Sư Tử với xác suất 4/5. Tìm phân số a/b (a, b nguyên dương, b ≤ 20) là xác suất lớn hơn 45% nhưng nhỏ hơn 4/5.",
          why: "Muốn đặt một xác suất vào đúng chỗ trên thang 0 – 1 phải so sánh được phân số với phần trăm — đổi về cùng một dạng là chìa khóa.",
          check: function (v) { return isInt(v[0]) && inRange(v[1], 1, 20) && v[0] > 0 && 100 * v[0] > 45 * v[1] && 5 * v[0] < 4 * v[1]; },
          challenge: function (v) { return 100 * v[0] > 78 * v[1]; },
          challengeText: "Phân số rất gần 4/5: lớn hơn 0,78.",
          kinds: [
            { id: "lt", text: "nhỏ hơn 1/2", test: function (v) { return 2 * v[0] < v[1]; } },
            { id: "eq", text: "bằng 1/2", test: function (v) { return 2 * v[0] === v[1]; } },
            { id: "gt", text: "lớn hơn 1/2", test: function () { return true; } }
          ],
          kindSamples: [["1", "2"], ["5", "11"], ["7", "15"], ["2", "3"], ["3", "4"]],
          sample: { values: ["1", "2"] }
        },
        {
          id: "13.1-x2", type: "whatif", base: 0.55,
          ask: "Ví dụ: đội Hổ thắng với xác suất 45%, nên xác suất đội Hổ không thắng là 0,55. Nếu xác suất đội Hổ thắng tăng gấp đôi thì xác suất đội Hổ không thắng là bao nhiêu (viết số thập phân)?",
          why: "“Xảy ra” và “không xảy ra” luôn cộng lại bằng 1, và xác suất không bao giờ vượt quá 1 — hai ý này giúp em tự phát hiện đáp số vô lý.",
          answer: function () { return (100 - 90) / 100; },
          reasons: [
            "Thắng là 0,9 nên không thắng là 1 − 0,9 = 0,1.",
            "Thắng gấp đôi thì không thắng cũng gấp đôi: 1,1.",
            "Không thắng là chuyện khác, không liên quan nên vẫn là 0,55."
          ],
          reason: 0,
          sample: { guess: "0,1", reason: 0 }
        },
        {
          id: "13.1-x3", type: "ways",
          ask: "Xác suất trời mưa ngày mai là 7/20. Viết xác suất này dưới dạng phần trăm (chỉ nhập số, không cần dấu %). Làm theo nhiều cách.",
          why: "Đổi nhanh giữa phân số, số thập phân và phần trăm giúp em so sánh mọi xác suất trên cùng một thang.",
          strategies: [
            { id: "s1", name: "Đưa về mẫu số 100", steps: [{ ask: "Nhân cả tử và mẫu với mấy để mẫu số thành 100?", answer: 5 }, { answer: 35 }] },
            { id: "s2", name: "Chia ra số thập phân trước", steps: [{ ask: "7 ÷ 20 = ?", answer: 0.35 }, { answer: 35 }] },
            { id: "s3", name: "Đi qua 7/10", steps: [{ ask: "7/10 bằng bao nhiêu phần trăm?", answer: 70 }, { answer: 35 }] }
          ],
          sample: { strategy: "s2", steps: ["0,35", "35"] }
        }
      ],
      "13.2": [
        {
          id: "13.2-x1", type: "make",
          ask: "Tự tạo một túi bi: r bi đỏ, x bi xanh, y bi vàng (mỗi số nguyên từ 0 đến 20, túi có ít nhất 1 viên). Đề hỏi xác suất lấy ngẫu nhiên được viên KHÔNG phải màu đỏ.",
          why: "Xác suất “không đỏ” bằng số bi xanh và vàng chia cho tổng số bi, cũng bằng 1 − P(đỏ) — tự tạo túi bi giúp em thấy cả xác suất 0 và 1.",
          template: "r đỏ, x xanh, y vàng",
          fields: [{ id: "r", label: "Bi đỏ r" }, { id: "x", label: "Bi xanh x" }, { id: "y", label: "Bi vàng y" }],
          valid: function (f) { return inRange(f.r, 0, 20) && inRange(f.x, 0, 20) && inRange(f.y, 0, 20) && total(f) > 0; },
          solve: function (f) { return (f.x + f.y) / total(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "A bag has " + f.r + " red, " + f.x + " blue and " + f.y + " yellow marbles. One marble is taken at random. Find the probability that it is NOT red."
              : "Túi có " + f.r + " bi đỏ, " + f.x + " bi xanh và " + f.y + " bi vàng. Lấy ngẫu nhiên một viên. Tính xác suất lấy được viên KHÔNG phải màu đỏ.";
          },
          criteria: [
            { id: "zero", text: "Biến cố không thể xảy ra (xác suất 0)", test: function (f) { return f.x + f.y === 0; } },
            { id: "one", text: "Biến cố chắc chắn xảy ra (xác suất 1)", test: function (f) { return f.r === 0; } },
            { id: "simp", text: "Xác suất là phân số còn rút gọn được (khác 0 và 1)", test: function (f) { const k = f.x + f.y; return k > 0 && f.r > 0 && gcd(k, total(f)) > 1; } },
            { id: "small", text: "Có đủ ba màu mà xác suất vẫn nhỏ hơn 1/4", test: function (f) { return allColours(f) && 4 * (f.x + f.y) < total(f); } },
            { id: "half", text: "Có đủ ba màu và xác suất đúng bằng 1/2", test: function (f) { return allColours(f) && 2 * (f.x + f.y) === total(f); } }
          ],
          sample: { fields: { r: "14", x: "1", y: "1" } }
        },
        {
          id: "13.2-x2", type: "many", arity: 2, ordered: true,
          labels: ["Số bi xanh", "Số bi vàng"],
          ask: "Một túi có 20 viên bi gồm đỏ, xanh và vàng (mỗi màu ít nhất 1 viên). Xác suất lấy được bi đỏ là 1/4. Tìm số bi xanh và số bi vàng.",
          why: "Biết một xác suất và tổng số kết quả là tìm được số kết quả thuận lợi — rồi các phần còn lại phải cộng đủ tổng.",
          check: function (v) { return inRange(v[0], 1, 20) && inRange(v[1], 1, 20) && v[0] + v[1] === 15; },
          challenge: function (v) { return 5 * (20 - v[1]) === 3 * 20; },
          challengeText: "Xác suất lấy được bi không phải màu vàng bằng 3/5.",
          kinds: [
            { id: "lt", text: "xác suất bi xanh nhỏ hơn bi đỏ", test: function (v) { return v[0] < 5; } },
            { id: "eq", text: "xác suất bi xanh bằng bi đỏ (1/4)", test: function (v) { return v[0] === 5; } },
            { id: "gt", text: "xác suất bi xanh lớn hơn bi đỏ", test: function () { return true; } }
          ],
          kindSamples: [["5", "10"], ["1", "14"], ["2", "13"], ["8", "7"], ["10", "5"]],
          sample: { values: ["5", "10"] }
        },
        {
          id: "13.2-x3", type: "whatif", base: 0.3,
          ask: "Ví dụ: 10 thẻ ghi 2, 5, 8, 5, 9, 8, 5, 3, 8, 5; xác suất rút được số 8 là 3/10. Nếu bỏ đi hai thẻ ghi số 5 thì xác suất rút được số 8 là bao nhiêu?",
          why: "Xác suất thay đổi khi tổng số kết quả thay đổi, dù số kết quả thuận lợi giữ nguyên — luôn đếm lại cả tử và mẫu.",
          answer: function () { return 3 / 8; },
          reasons: [
            "Vẫn có 3 thẻ số 8 nhưng chỉ còn 8 thẻ, nên xác suất là 3/8, lớn hơn 3/10.",
            "Thẻ số 5 không liên quan đến số 8 nên xác suất vẫn là 3/10.",
            "Bỏ 2 thẻ thì trừ 2 ở cả tử và mẫu: 1/8."
          ],
          reason: 0,
          sample: { guess: "3/8", reason: 0 }
        }
      ],
      "13.3": [
        {
          id: "13.3-x1", type: "pattern",
          ask: "Lan đã chơi 20 ván và thua 12 ván. Từ xác suất thực nghiệm thua 0,65, em dự đoán mỗi đợt chơi thêm 20 ván sẽ thua 13 ván. Tổng số ván thua dự kiến sau đợt 1, 2, 3 là 25, 38, 51. Sau đợt 4, đợt 10, đợt 30 là bao nhiêu? Viết quy luật theo n.",
          why: "Xác suất thực nghiệm dùng để ước lượng số lần xảy ra trong tương lai: số lần thử × xác suất.",
          seq: [25, 38, 51],
          term: function (n) { return 13 * n + 12; },
          askN: [4, 10, 30],
          sample: { terms: { 4: "64", 10: "142", 30: "402" }, rule: "13n+12" }
        },
        {
          id: "13.3-x2", type: "ways",
          ask: "Túi có 30 viên bi đỏ và xanh. Lấy một viên, ghi màu rồi trả lại, làm 50 lần thì có 20 lần ra bi đỏ. Ước lượng số bi đỏ trong túi theo nhiều cách.",
          why: "Từ tần suất tương đối em ước lượng được thành phần chưa biết của túi bi — đây là cách các nhà khoa học ước lượng khi không đếm được hết.",
          strategies: [
            { id: "s1", name: "Đổi ra số thập phân", steps: [{ ask: "Xác suất thực nghiệm 20/50 viết thành số thập phân?", answer: 0.4 }, { answer: 12 }] },
            { id: "s2", name: "Rút gọn phân số", steps: [{ ask: "20/50 rút gọn thành 2/? — mẫu số là bao nhiêu?", answer: 5 }, { answer: 12 }] },
            { id: "s3", name: "Dùng phần trăm", steps: [{ ask: "20/50 bằng bao nhiêu phần trăm?", answer: 40 }, { answer: 12 }] }
          ],
          sample: { strategy: "s2", steps: ["5", "12"] }
        },
        {
          id: "13.3-x3", type: "whatif", base: 0.39,
          ask: "Ví dụ: thả 124 chiếc đinh ghim, 48 chiếc rơi ngửa, xác suất thực nghiệm khoảng 0,39. Nếu thả thêm 76 chiếc và có thêm 32 chiếc rơi ngửa thì xác suất thực nghiệm tính trên tất cả các lần thả là bao nhiêu?",
          why: "Gộp mọi lần thử cho kết quả đáng tin hơn — càng nhiều lần thử, xác suất thực nghiệm càng ổn định.",
          answer: function () { return (48 + 32) / (124 + 76); },
          reasons: [
            "Cộng dồn cả hai lượt: (48 + 32) / (124 + 76) = 80/200 = 0,4.",
            "Chỉ cần tính lượt mới: 32/76.",
            "Xác suất thực nghiệm không thay đổi khi làm thêm, vẫn là 0,39."
          ],
          reason: 0,
          sample: { guess: "0,4", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.13.1-x1.labels": ["Numerator a", "Denominator b"],
        "q.13.1-x1.ask": "The Tigers win with probability 45% and the Lions with probability 4/5. Find a fraction a/b (a, b positive whole numbers, b ≤ 20) that is a probability greater than 45% but less than 4/5.",
        "q.13.1-x1.why": "To place a probability correctly on the 0 – 1 scale you must compare fractions with percentages — changing to the same form is the key.",
        "q.13.1-x1.challengeText": "The fraction is very close to 4/5: greater than 0.78.",
        "q.13.1-x1.kinds": ["less than 1/2", "equal to 1/2", "greater than 1/2"],
        "q.13.1-x2.ask": "Example: the Tigers win with probability 45%, so the probability that the Tigers do not win is 0.55. If the probability that the Tigers win doubles, what is the probability that they do not win (as a decimal)?",
        "q.13.1-x2.why": "“Happens” and “does not happen” always add up to 1, and a probability is never more than 1 — these two ideas help you spot impossible answers.",
        "q.13.1-x2.reasons": [
          "Winning is 0.9, so not winning is 1 − 0.9 = 0.1.",
          "Winning doubles, so not winning doubles too: 1.1.",
          "Not winning is a different thing, not connected, so it is still 0.55."
        ],
        "q.13.1-x3.ask": "The probability that it rains tomorrow is 7/20. Write this probability as a percentage (enter the number only, no % sign). Do it in several ways.",
        "q.13.1-x3.why": "Changing quickly between fractions, decimals and percentages lets you compare any probabilities on the same scale.",
        "q.13.1-x3.strategies": ["Make the denominator 100", "Divide to get a decimal first", "Go through 7/10"],
        "q.13.1-x3.steps.s1": ["Multiply the numerator and denominator by what to make the denominator 100?"],
        "q.13.1-x3.steps.s2": ["7 ÷ 20 = ?"],
        "q.13.1-x3.steps.s3": ["What percentage is 7/10?"],
        "q.13.2-x1.ask": "Make your own bag of marbles: r red, x blue and y yellow (each a whole number from 0 to 20, at least 1 marble in the bag). The question asks for the probability of taking a marble at random that is NOT red.",
        "q.13.2-x1.why": "The probability of “not red” is the number of blue and yellow marbles divided by the total, which is also 1 − P(red) — making your own bag shows probabilities of 0 and 1 too.",
        "q.13.2-x1.template": "r red, x blue, y yellow",
        "q.13.2-x1.fields": ["Red marbles r", "Blue marbles x", "Yellow marbles y"],
        "q.13.2-x1.criteria": [
          "The event is impossible (probability 0)", "The event is certain (probability 1)",
          "The probability is a fraction that can be simplified (not 0 or 1)",
          "All three colours are used and the probability is still less than 1/4",
          "All three colours are used and the probability is exactly 1/2"
        ],
        "q.13.2-x2.labels": ["Number of blue marbles", "Number of yellow marbles"],
        "q.13.2-x2.ask": "A bag has 20 marbles: red, blue and yellow (at least 1 of each colour). The probability of taking a red marble is 1/4. Find the number of blue marbles and the number of yellow marbles.",
        "q.13.2-x2.why": "Knowing a probability and the total number of outcomes gives the number of favourable outcomes — then the other parts must add up to the total.",
        "q.13.2-x2.challengeText": "The probability of taking a marble that is not yellow is 3/5.",
        "q.13.2-x2.kinds": ["the probability of blue is less than that of red", "the probability of blue equals that of red (1/4)", "the probability of blue is greater than that of red"],
        "q.13.2-x3.ask": "Example: 10 cards show 2, 5, 8, 5, 9, 8, 5, 3, 8, 5; the probability of choosing an 8 is 3/10. If two cards showing 5 are taken away, what is the probability of choosing an 8?",
        "q.13.2-x3.why": "A probability changes when the total number of outcomes changes, even if the favourable outcomes stay the same — always count the numerator and the denominator again.",
        "q.13.2-x3.reasons": [
          "There are still 3 cards showing 8 but only 8 cards, so the probability is 3/8, more than 3/10.",
          "Cards showing 5 have nothing to do with 8, so the probability is still 3/10.",
          "Taking away 2 cards means subtracting 2 from the numerator and the denominator: 1/8."
        ],
        "q.13.3-x1.ask": "Lan has played 20 games and lost 12. Using the experimental probability of losing, 0.65, you predict she will lose 13 games in each further set of 20 games. The expected total number of losses after sets 1, 2, 3 is 25, 38, 51. What is it after set 4, set 10 and set 30? Write the rule in terms of n.",
        "q.13.3-x1.why": "Experimental probability is used to estimate how many times something will happen in the future: number of trials × probability.",
        "q.13.3-x2.ask": "A bag has 30 red and blue marbles. A marble is taken, its colour recorded and it is put back; this is done 50 times and red comes up 20 times. Estimate the number of red marbles in the bag in several ways.",
        "q.13.3-x2.why": "From the relative frequency you can estimate what is unknown in the bag — this is how scientists estimate when they cannot count everything.",
        "q.13.3-x2.strategies": ["Change to a decimal", "Simplify the fraction", "Use a percentage"],
        "q.13.3-x2.steps.s1": ["Write the experimental probability 20/50 as a decimal."],
        "q.13.3-x2.steps.s2": ["20/50 simplifies to 2/? — what is the denominator?"],
        "q.13.3-x2.steps.s3": ["What percentage is 20/50?"],
        "q.13.3-x3.ask": "Example: 124 drawing pins are dropped and 48 land point up, so the experimental probability is about 0.39. If 76 more pins are dropped and 32 more land point up, what is the experimental probability using all the drops?",
        "q.13.3-x3.why": "Combining all the trials gives a more reliable result — the more trials, the steadier the experimental probability.",
        "q.13.3-x3.reasons": [
          "Add both rounds together: (48 + 32) / (124 + 76) = 80/200 = 0.4.",
          "Only use the new round: 32/76.",
          "The experimental probability does not change when you do more trials, so it is still 0.39."
        ]
      },
      vi: {}
    }
  });
})();
