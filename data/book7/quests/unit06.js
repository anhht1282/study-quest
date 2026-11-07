// 🚀 Extension quests — Math 7, unit 6 (Statistics: investigations and samples). Schema: MATH_QUESTS_GUIDE.md.
// Own wording, built only from each section's key ideas. Check functions receive NUMBERS parsed by the game;
// every answer is a count, a total or a position in a list.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const READ = 45; // minutes read by the learner in the made-up questionnaire problem
  // which option (1–4) a learner reading t minutes ticks: 0–a, a+1–b, b+1–c, more than c
  const option = function (f, t) { return t <= f.a ? 1 : t <= f.b ? 2 : t <= f.c ? 3 : 4; };

  window.GAME_QUESTS.push({
    unit: 6,
    sections: {
      "6.1": [
        {
          id: "6.1-x1", type: "many", arity: 3, ordered: true,
          labels: ["Chọn “0”", "Chọn “1”", "Chọn “2”"],
          ask: "Dự đoán: “Trong lớp, nhiều bạn có đúng 1 anh chị em nhất.” Hỏi 30 bạn với 4 lựa chọn: 0, 1, 2, 3 trở lên. Có 4 bạn chọn “3 trở lên”. Số bạn chọn 0, 1, 2 có thể là bao nhiêu để dự đoán đúng (lựa chọn “1” nhiều hơn hẳn mỗi lựa chọn khác)?",
          why: "Dữ liệu mới quyết định một dự đoán đúng hay sai — và em thấy nhiều bộ dữ liệu khác nhau cùng ủng hộ một dự đoán.",
          check: function (v) {
            return v.every(function (x) { return inRange(x, 0, 26); }) && v[0] + v[1] + v[2] === 26 &&
              v[1] > v[0] && v[1] > v[2] && v[1] > 4;
          },
          challenge: function (v) { return v[1] - Math.max(v[0], v[2], 4) === 1; },
          challengeText: "Dự đoán đúng “sát nút”: lựa chọn “1” chỉ hơn lựa chọn đứng thứ hai đúng 1 bạn.",
          kinds: [
            { id: "maj", text: "lựa chọn “1” chiếm quá nửa lớp", test: function (v) { return v[1] > 15; } },
            { id: "zero", text: "lựa chọn “0” nhiều hơn lựa chọn “2”", test: function (v) { return v[0] > v[2]; } },
            { id: "two", text: "lựa chọn “2” nhiều hơn hoặc bằng lựa chọn “0”", test: function () { return true; } }
          ],
          kindSamples: [["2", "20", "4"], ["10", "11", "5"], ["9", "12", "5"], ["5", "12", "9"], ["6", "12", "8"]],
          sample: { values: ["6", "12", "8"] }
        },
        {
          id: "6.1-x2", type: "make",
          ask: "Thiết kế các lựa chọn cho câu hỏi “Mỗi ngày em đọc sách bao nhiêu phút?”: 1) 0 đến a phút; 2) a + 1 đến b phút; 3) b + 1 đến c phút; 4) hơn c phút (a, b, c là số nguyên, 0 ≤ a < b < c ≤ 300). Đề hỏi: bạn Minh đọc 45 phút thì chọn lựa chọn thứ mấy?",
          why: "Lựa chọn không chồng lấn và đủ bao quát thì mỗi người chỉ có đúng một ô để đánh dấu — dữ liệu mới đáng tin.",
          template: "1) 0–a · 2) (a+1)–b · 3) (b+1)–c · 4) hơn c",
          fields: [{ id: "a", label: "Mốc a" }, { id: "b", label: "Mốc b" }, { id: "c", label: "Mốc c" }],
          valid: function (f) { return inRange(f.a, 0, 300) && inRange(f.b, 0, 300) && inRange(f.c, 0, 300) && f.a < f.b && f.b < f.c; },
          solve: function (f) { return option(f, READ); },
          render: function (f, lang) {
            return lang === "en"
              ? "“How many minutes do you read each day?” Options: 1) 0 to " + f.a + " minutes; 2) " + (f.a + 1) + " to " + f.b + " minutes; 3) " + (f.b + 1) + " to " + f.c + " minutes; 4) more than " + f.c + " minutes. Minh reads for " + READ + " minutes. Which option number does he choose?"
              : "“Mỗi ngày em đọc sách bao nhiêu phút?” Lựa chọn: 1) 0 đến " + f.a + " phút; 2) " + (f.a + 1) + " đến " + f.b + " phút; 3) " + (f.b + 1) + " đến " + f.c + " phút; 4) hơn " + f.c + " phút. Minh đọc " + READ + " phút. Minh chọn lựa chọn số mấy?";
          },
          criteria: [
            { id: "low", text: "Có lựa chọn riêng cho người gần như không đọc (a ≤ 10)", test: function (f) { return f.a <= 10; } },
            { id: "high", text: "Mốc c ít nhất 60 phút (đủ chỗ cho người đọc nhiều)", test: function (f) { return f.c >= 60; } },
            { id: "even", text: "Ba lựa chọn đầu rộng bằng nhau (cùng số phút)", test: function (f) { return f.a + 1 === f.b - f.a && f.b - f.a === f.c - f.b; } },
            { id: "mid", text: "45 phút rơi vào lựa chọn 2 hoặc 3 (không ở nhóm đầu hay nhóm cuối)", test: function (f) { const o = option(f, READ); return o === 2 || o === 3; } }
          ],
          sample: { fields: { a: "10", b: "30", c: "60" } }
        },
        {
          id: "6.1-x3", type: "whatif", base: 2,
          ask: "Dự đoán: “Hơn một nửa lớp thích bóng đá nhất.” Lớp 32 bạn, 15 bạn chọn bóng đá, nên cần thêm ít nhất 2 bạn chọn bóng đá thì dự đoán mới đúng. Nếu lớp có 36 bạn (vẫn 15 bạn chọn bóng đá) thì cần thêm ít nhất bao nhiêu bạn?",
          why: "Kiểm tra dự đoán bằng con số cụ thể buộc em hiểu chính xác “hơn một nửa” nghĩa là gì.",
          answer: function () { return 36 / 2 + 1 - 15; },
          reasons: [
            "Một nửa của 36 là 18; “hơn một nửa” là ít nhất 19 bạn, nên cần thêm 19 − 15 = 4 bạn.",
            "Cần thêm 3 bạn vì 15 + 3 = 18 là một nửa lớp.",
            "Vẫn cần thêm 2 bạn vì số bạn chọn bóng đá không đổi."
          ],
          reason: 0,
          sample: { guess: "4", reason: 0 }
        }
      ],
      "6.2": [
        {
          id: "6.2-x1", type: "pattern",
          ask: "Chọn mẫu 40 bạn từ danh sách 200 học sinh: chọn bạn số 3, rồi cứ cách 5 bạn chọn một (bạn số 3, 8, 13, …). Bạn được chọn thứ 10, thứ 20, thứ 40 có số thứ tự bao nhiêu? Tìm quy luật theo n.",
          why: "Chọn đều đặn từ danh sách giúp mẫu trải khắp tổng thể, không dồn vào một nhóm — và quy luật cho biết ngay ai được chọn.",
          seq: [3, 8, 13],
          term: function (n) { return 5 * n - 2; },
          askN: [10, 20, 40],
          sample: { terms: { 10: "48", 20: "98", 40: "198" }, rule: "5n-2" }
        },
        {
          id: "6.2-x2", type: "ways",
          ask: "Trường có 480 học sinh: 200 bạn khối 6, 160 bạn khối 7, 120 bạn khối 8. Mẫu 60 bạn được chia cho các khối theo đúng tỉ lệ số học sinh. Khối 7 cần chọn bao nhiêu bạn? Giải theo nhiều cách.",
          why: "Mẫu chia theo tỉ lệ thì mỗi nhóm có “tiếng nói” đúng với số người của nhóm — mẫu đại diện hơn.",
          strategies: [
            { id: "s1", name: "Mẫu là một phần mấy của cả trường", steps: [
              { ask: "60 là một phần mấy của 480? (nhập mẫu số của phân số 1/…)", answer: 8 }, { answer: 20 }] },
            { id: "s2", name: "Khối 7 là một phần mấy của cả trường", steps: [
              { ask: "160 là một phần mấy của 480? (nhập mẫu số của phân số 1/…)", answer: 3 }, { answer: 20 }] },
            { id: "s3", name: "Tính khối 6 và khối 8 trước, rồi lấy 60 trừ đi", steps: [
              { ask: "Khối 6 cần chọn bao nhiêu bạn?", answer: 25 }, { ask: "Khối 8 cần chọn bao nhiêu bạn?", answer: 15 }, { answer: 20 }] }
          ],
          sample: { strategy: "s2", steps: ["3", "20"] }
        },
        {
          id: "6.2-x3", type: "whatif", base: 10,
          ask: "Ví dụ: ném xúc xắc 60 lần; vì xác suất ra mặt 6 là 1/6, mặt 6 “nên” ra khoảng 10 lần (thực tế ra 14 lần). Nếu ném 600 lần thì con số hợp lý nhất để dự đoán số lần ra mặt 6 là bao nhiêu?",
          why: "Ném càng nhiều lần thì tần suất tương đối càng gần xác suất thật — vì vậy mẫu lớn đáng tin hơn mẫu nhỏ.",
          answer: function () { return 600 / 6; },
          reasons: [
            "Ném nhiều lần thì tần suất tiến gần 1/6, nên dự đoán 600 ÷ 6 = 100 lần.",
            "Lấy kết quả thực tế nhân 10: 14 × 10 = 140 lần.",
            "Ném càng nhiều thì càng may rủi, nên không thể dự đoán được."
          ],
          reason: 0,
          sample: { guess: "100", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.6.1-x1.labels": ["Chose “0”", "Chose “1”", "Chose “2”"],
        "q.6.1-x1.ask": "Prediction: “In our class, the most common number of brothers and sisters is exactly 1.” 30 learners are asked, with 4 options: 0, 1, 2, 3 or more. 4 learners choose “3 or more”. How many could choose 0, 1 and 2 so that the prediction is correct (option “1” is chosen by more learners than each other option)?",
        "q.6.1-x1.why": "New data decides whether a prediction is right or wrong — and you see that many different data sets can support the same prediction.",
        "q.6.1-x1.challengeText": "The prediction is only just correct: option “1” beats the second most popular option by exactly 1 learner.",
        "q.6.1-x1.kinds": ["option “1” is chosen by more than half the class", "option “0” is chosen more than option “2”", "option “2” is chosen at least as often as option “0”"],
        "q.6.1-x2.ask": "Design the options for the question “How many minutes do you read each day?”: 1) 0 to a minutes; 2) a + 1 to b minutes; 3) b + 1 to c minutes; 4) more than c minutes (a, b, c whole numbers, 0 ≤ a < b < c ≤ 300). The problem asks: Minh reads for 45 minutes — which option number does he choose?",
        "q.6.1-x2.why": "When options do not overlap and cover every case, each person has exactly one box to tick — so the data can be trusted.",
        "q.6.1-x2.template": "1) 0–a · 2) (a+1)–b · 3) (b+1)–c · 4) more than c",
        "q.6.1-x2.fields": ["Boundary a", "Boundary b", "Boundary c"],
        "q.6.1-x2.criteria": [
          "There is an option for people who hardly read (a ≤ 10)",
          "Boundary c is at least 60 minutes (room for people who read a lot)",
          "The first three options are equally wide (same number of minutes)",
          "45 minutes falls in option 2 or 3 (not the first or the last group)"
        ],
        "q.6.1-x3.ask": "Prediction: “More than half of the class like football best.” In a class of 32, 15 learners choose football, so at least 2 more must choose football for the prediction to be correct. If the class has 36 learners (still 15 choosing football), at least how many more are needed?",
        "q.6.1-x3.why": "Testing a prediction with actual numbers makes you understand exactly what “more than half” means.",
        "q.6.1-x3.reasons": [
          "Half of 36 is 18; “more than half” means at least 19 learners, so 19 − 15 = 4 more are needed.",
          "3 more are needed because 15 + 3 = 18 is half of the class.",
          "Still 2 more, because the number choosing football has not changed."
        ],
        "q.6.2-x1.ask": "Choose a sample of 40 learners from a list of 200: choose learner number 3, then every 5th learner after that (numbers 3, 8, 13, …). What is the list number of the 10th, 20th and 40th learner chosen? Find the rule in terms of n.",
        "q.6.2-x1.why": "Choosing regularly from a list spreads the sample across the whole population instead of one group — and the rule tells you at once who is chosen.",
        "q.6.2-x2.ask": "A school has 480 learners: 200 in Grade 6, 160 in Grade 7 and 120 in Grade 8. A sample of 60 is shared between the grades in the same proportion as the numbers of learners. How many Grade 7 learners should be chosen? Solve it in several ways.",
        "q.6.2-x2.why": "A sample shared in proportion gives each group a “voice” that matches its size — so the sample is more representative.",
        "q.6.2-x2.strategies": [
          "What fraction of the whole school is the sample?",
          "What fraction of the whole school is Grade 7?",
          "Work out Grade 6 and Grade 8 first, then subtract from 60"
        ],
        "q.6.2-x2.steps.s1": ["60 is what fraction of 480? (enter the denominator of 1/…)"],
        "q.6.2-x2.steps.s2": ["160 is what fraction of 480? (enter the denominator of 1/…)"],
        "q.6.2-x2.steps.s3": ["How many Grade 6 learners should be chosen?", "How many Grade 8 learners should be chosen?"],
        "q.6.2-x3.ask": "Example: a dice is thrown 60 times; the probability of a 6 is 1/6, so a 6 “should” come up about 10 times (it actually came up 14 times). If the dice is thrown 600 times, what is the most sensible prediction for the number of 6s?",
        "q.6.2-x3.why": "The more throws, the closer the relative frequency gets to the true probability — that is why a large sample is more reliable than a small one.",
        "q.6.2-x3.reasons": [
          "With many throws the relative frequency gets close to 1/6, so predict 600 ÷ 6 = 100 times.",
          "Multiply the actual result by 10: 14 × 10 = 140 times.",
          "More throws means more luck, so no prediction is possible."
        ]
      },
      vi: {}
    }
  });
})();
