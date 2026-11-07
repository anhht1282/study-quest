// 🚀 Extension quests — Math 8, unit 13 (Probability). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only
// from each section's key ideas. Nothing random here: probabilities are exact fractions, compared in integers.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  // number of the 36 equally likely outcomes of two fair dice with total t
  const ways = function (t) { return t >= 2 && t <= 12 ? 6 - Math.abs(7 - t) : 0; };
  // outcomes with a total from a to b
  const count = function (f) { let k = 0; for (let t = f.a; t <= f.b; t += 1) k += ways(t); return k; };

  window.GAME_QUESTS.push({
    unit: 13,
    sections: {
      "13.1": [
        {
          id: "13.1-x1", type: "many", arity: 2, ordered: false,
          labels: ["Tổng s", "Tổng t"],
          ask: "Gieo hai xúc xắc cân đối rồi cộng số chấm. Tìm hai tổng khác nhau s và t sao cho xác suất để tổng bằng s hoặc bằng t là đúng 1/6.",
          why: "Bảng 6 × 6 cho biết mỗi tổng ứng với bao nhiêu trong 36 kết quả đồng khả năng — cần đủ 6 kết quả thuận lợi thì xác suất mới bằng 1/6.",
          check: function (v) { return inRange(v[0], 2, 12) && inRange(v[1], 2, 12) && v[0] !== v[1] && ways(v[0]) + ways(v[1]) === 6; },
          challenge: function (v) { return v[0] + v[1] === 14; },
          challengeText: "s + t = 14.",
          kinds: [
            { id: "w15", text: "6 = 1 + 5 kết quả", test: function (v) { return ways(v[0]) === 1 || ways(v[1]) === 1; } },
            { id: "w24", text: "6 = 2 + 4 kết quả", test: function (v) { return ways(v[0]) === 2 || ways(v[1]) === 2; } },
            { id: "w33", text: "6 = 3 + 3 kết quả", test: function () { return true; } }
          ],
          kindSamples: [["2", "6"], ["2", "8"], ["3", "5"], ["5", "11"], ["4", "10"]],
          sample: { values: ["2", "6"] }
        },
        {
          id: "13.1-x2", type: "whatif", base: 0.25,
          ask: "Ví dụ: tung hai đồng xu cân đối, xác suất được hai mặt ngửa là 1/4. Nếu tung ba đồng xu cân đối thì xác suất được cả ba mặt ngửa là bao nhiêu?",
          why: "Liệt kê có hệ thống bằng sơ đồ cây mới đếm đúng các kết quả đồng khả năng — “số mặt ngửa” (0, 1, 2, 3) không phải là các kết quả đồng khả năng.",
          answer: function () { return 1 / 8; },
          reasons: [
            "Sơ đồ cây có 2 × 2 × 2 = 8 kết quả đồng khả năng, chỉ có NNN là ba mặt ngửa: 1/8.",
            "Có 4 khả năng: 0, 1, 2 hoặc 3 mặt ngửa, nên xác suất là 1/4.",
            "Có ba đồng xu nên xác suất là 1/3."
          ],
          reason: 0,
          sample: { guess: "1/8", reason: 0 }
        },
        {
          id: "13.1-x3", type: "make",
          ask: "Tự tạo đề: gieo hai xúc xắc cân đối và cộng số chấm; đề hỏi xác suất để tổng nằm trong khoảng từ a đến b (a, b nguyên, 2 ≤ a ≤ b ≤ 12). Hãy thử đạt nhiều tiêu chí trong cùng một đề.",
          why: "Chọn khoảng tổng khéo léo cho thấy các tổng ở giữa (gần 7) có nhiều kết quả hơn hẳn các tổng ở hai đầu — và khi nào dùng biến cố đối thì nhanh hơn.",
          template: "Xác suất tổng từ a đến b",
          fields: [{ id: "a", label: "Tổng nhỏ nhất a" }, { id: "b", label: "Tổng lớn nhất b" }],
          valid: function (f) { return inRange(f.a, 2, 12) && inRange(f.b, 2, 12) && f.a <= f.b; },
          solve: function (f) { return count(f) / 36; },
          render: function (f, lang) {
            if (f.a === f.b) {
              return lang === "en"
                ? "Two fair dice are thrown and the scores are added. Find the probability that the total is " + f.a + "."
                : "Gieo hai xúc xắc cân đối và cộng số chấm. Tính xác suất để tổng bằng " + f.a + ".";
            }
            return lang === "en"
              ? "Two fair dice are thrown and the scores are added. Find the probability that the total is from " + f.a + " to " + f.b + "."
              : "Gieo hai xúc xắc cân đối và cộng số chấm. Tính xác suất để tổng nằm trong khoảng từ " + f.a + " đến " + f.b + ".";
          },
          criteria: [
            { id: "half", text: "Xác suất đúng bằng 1/2", test: function (f) { return count(f) === 18; } },
            { id: "rare", text: "Khoảng có ít nhất 3 tổng mà xác suất vẫn nhỏ hơn 1/4", test: function (f) { return f.b - f.a >= 2 && 4 * count(f) < 36; } },
            { id: "nosimp", text: "Phân số /36 không rút gọn được và tử số lớn hơn 1", test: function (f) { const k = count(f); return k > 1 && gcd(k, 36) === 1; } },
            { id: "comp", text: "Biến cố đối có xác suất khác 0 nhưng nhỏ hơn 1/10", test: function (f) { const k = 36 - count(f); return k > 0 && 10 * k < 36; } },
            { id: "no7", text: "Khoảng không chứa tổng 7 mà xác suất vẫn ít nhất 1/3", test: function (f) { return (f.a > 7 || f.b < 7) && 3 * count(f) >= 36; } }
          ],
          sample: { fields: { a: "2", b: "11" } }
        }
      ],
      "13.2": [
        {
          id: "13.2-x1", type: "ways",
          ask: "Một con quay có xác suất dừng ở màu đỏ là 0,35. Quay 640 lần thì số lần dừng ở màu đỏ kỳ vọng là bao nhiêu? Giải theo nhiều cách.",
          why: "Số lần kỳ vọng = xác suất × số lần thử; đổi xác suất sang phân số hay phần trăm có khi giúp tính nhẩm nhanh hơn.",
          strategies: [
            { id: "s1", name: "Kỳ vọng trong mỗi 100 lần quay", steps: [{ ask: "Cứ 100 lần quay thì kỳ vọng bao nhiêu lần màu đỏ?", answer: 35 }, { answer: 224 }] },
            { id: "s2", name: "Đổi 0,35 thành phân số tối giản", steps: [
              { ask: "0,35 = 7/? — mẫu số là bao nhiêu?", answer: 20 },
              { ask: "640 ÷ 20 = ?", answer: 32 }, { answer: 224 }] },
            { id: "s3", name: "Tách 35% = 10% + 10% + 10% + 5%", steps: [
              { ask: "10% của 640 lần là bao nhiêu lần?", answer: 64 },
              { ask: "5% của 640 lần là bao nhiêu lần?", answer: 32 }, { answer: 224 }] }
          ],
          sample: { strategy: "s1", steps: ["35", "224"] }
        },
        {
          id: "13.2-x2", type: "pattern",
          ask: "Tung cùng lúc n đồng xu cân đối, làm 1024 lần. Số lần kỳ vọng mà TẤT CẢ các đồng xu đều ngửa là 512 khi n = 1, 256 khi n = 2, 128 khi n = 3. Tìm số lần kỳ vọng khi n = 5, n = 7, n = 10 và viết quy luật theo n.",
          why: "Mỗi đồng xu thêm vào làm số kết quả đồng khả năng gấp đôi, nên xác suất và số lần kỳ vọng giảm một nửa.",
          seq: [512, 256, 128],
          term: function (n) { return 1024 / Math.pow(2, n); },
          askN: [5, 7, 10],
          sample: { terms: { 5: "32", 7: "8", 10: "1" }, rule: "1024/2^n" }
        },
        {
          id: "13.2-x3", type: "whatif", base: 100,
          ask: "Ví dụ: gieo một xúc xắc cân đối 600 lần thì kỳ vọng mặt 6 xuất hiện 100 lần. Lan gieo 600 lần đầu và chỉ được 92 lần mặt 6. Lan gieo tiếp 600 lần nữa: số lần kỳ vọng ra mặt 6 trong 600 lần mới là bao nhiêu?",
          why: "Xúc xắc cân đối không “nhớ” các lần gieo trước: xác suất lý thuyết vẫn là 1/6, và độ lệch nhỏ khi thử ít lần là chuyện bình thường.",
          answer: function () { return 600 / 6; },
          reasons: [
            "Xúc xắc không nhớ kết quả cũ, xác suất vẫn là 1/6: 600 × 1/6 = 100.",
            "Mặt 6 còn thiếu 8 lần nên lần này phải “bù” lại: 108.",
            "Dùng xác suất thực nghiệm 92/600 nên vẫn kỳ vọng 92."
          ],
          reason: 0,
          sample: { guess: "100", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.13.1-x1.labels": ["Total s", "Total t"],
        "q.13.1-x1.kinds": ["6 = 1 + 5 outcomes", "6 = 2 + 4 outcomes", "6 = 3 + 3 outcomes"],
        "q.13.1-x1.ask": "Two fair dice are thrown and the scores are added. Find two different totals s and t so that the probability of a total of s or t is exactly 1/6.",
        "q.13.1-x1.why": "The 6 × 6 table shows how many of the 36 equally likely outcomes give each total — you need exactly 6 favourable outcomes for a probability of 1/6.",
        "q.13.1-x1.challengeText": "s + t = 14.",
        "q.13.1-x2.ask": "Example: two fair coins are thrown and the probability of two heads is 1/4. If three fair coins are thrown, what is the probability of three heads?",
        "q.13.1-x2.why": "Listing outcomes systematically with a tree diagram counts the equally likely outcomes correctly — “number of heads” (0, 1, 2, 3) are not equally likely outcomes.",
        "q.13.1-x2.reasons": [
          "The tree diagram has 2 × 2 × 2 = 8 equally likely outcomes and only HHH is three heads: 1/8.",
          "There are 4 possibilities: 0, 1, 2 or 3 heads, so the probability is 1/4.",
          "There are three coins, so the probability is 1/3."
        ],
        "q.13.1-x3.ask": "Make your own question: two fair dice are thrown and the scores are added; the question asks for the probability that the total is from a to b (a, b whole numbers, 2 ≤ a ≤ b ≤ 12). Try to meet several criteria in one question.",
        "q.13.1-x3.why": "Choosing a range of totals carefully shows that totals in the middle (near 7) have far more outcomes than totals at the ends — and when using the complementary event is quicker.",
        "q.13.1-x3.template": "Probability that the total is from a to b",
        "q.13.1-x3.fields": ["Smallest total a", "Largest total b"],
        "q.13.1-x3.criteria": [
          "The probability is exactly 1/2",
          "The range has at least 3 totals but the probability is still less than 1/4",
          "The fraction out of 36 cannot be simplified and its numerator is greater than 1",
          "The complementary event has a probability that is not 0 but is less than 1/10",
          "The range does not include a total of 7 but the probability is still at least 1/3"
        ],
        "q.13.2-x1.ask": "A spinner has a probability of 0.35 of landing on red. It is spun 640 times. What is the expected number of times it lands on red? Solve it in several ways.",
        "q.13.2-x1.why": "Expected number = probability × number of trials; changing the probability to a fraction or a percentage can make the mental calculation quicker.",
        "q.13.2-x1.strategies": ["Expected number in every 100 spins", "Write 0.35 as a fraction in its simplest form", "Split 35% = 10% + 10% + 10% + 5%"],
        "q.13.2-x1.steps.s1": ["In every 100 spins, how many times would you expect red?"],
        "q.13.2-x1.steps.s2": ["0.35 = 7/? — what is the denominator?", "640 ÷ 20 = ?"],
        "q.13.2-x1.steps.s3": ["How many times is 10% of 640 times?", "How many times is 5% of 640 times?"],
        "q.13.2-x2.ask": "n fair coins are thrown together, 1024 times. The expected number of times that ALL the coins show heads is 512 when n = 1, 256 when n = 2 and 128 when n = 3. Find the expected number when n = 5, n = 7 and n = 10, and write the rule in terms of n.",
        "q.13.2-x2.why": "Each extra coin doubles the number of equally likely outcomes, so the probability and the expected number are halved.",
        "q.13.2-x3.ask": "Example: a fair dice thrown 600 times is expected to show a 6 100 times. Lan throws it 600 times and gets a 6 only 92 times. Lan throws it another 600 times: what is the expected number of 6s in the new 600 throws?",
        "q.13.2-x3.why": "A fair dice does not “remember” earlier throws: the theoretical probability is still 1/6, and a small difference over a few trials is normal.",
        "q.13.2-x3.reasons": [
          "The dice does not remember old results; the probability is still 1/6: 600 × 1/6 = 100.",
          "The 6 is 8 times short, so it must “catch up” this time: 108.",
          "Use the experimental probability 92/600, so expect 92 again."
        ]
      },
      vi: {}
    }
  });
})();
