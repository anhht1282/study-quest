// 🚀 Extension quests — Math 8, unit 6 (Collecting data). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only
// from each section's key ideas (choosing a method, recording sheets, samples, bias). Check functions receive
// NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const total = function (f) { return f.a + f.b + f.c; };

  window.GAME_QUESTS.push({
    unit: 6,
    sections: {
      "6.1": [
        {
          id: "6.1-x1", type: "many", arity: 3, ordered: true,
          labels: ["Số xe chở 1 người", "Số xe chở 2 người", "Số xe chở 3 người"],
          ask: "Em đứng bên đường quan sát 20 xe ô tô và ghi số người trong mỗi xe vào phiếu. Mỗi xe chở 1, 2 hoặc 3 người, và tổng cộng có 36 người (trung bình 1,8 người mỗi xe). Phiếu của em có thể ghi bao nhiêu xe mỗi loại? Tìm nhiều bảng khác nhau.",
          why: "Nhiều bảng dữ liệu khác nhau có cùng một trung bình — vì vậy phiếu ghi đầy đủ từng loại cho em biết nhiều hơn một con số trung bình.",
          check: function (v) { return v.every(function (x) { return inRange(x, 0, 20); }) && v[0] + v[1] + v[2] === 20 && v[0] + 2 * v[1] + 3 * v[2] === 36; },
          challenge: function (v) { return v[0] === v[1]; },
          challengeText: "Số xe chở 1 người bằng số xe chở 2 người.",
          kinds: [
            { id: "two", text: "mốt là loại xe chở 2 người", test: function (v) { return v[1] > v[0]; } },
            { id: "one", text: "mốt là loại xe chở 1 người", test: function (v) { return v[0] > v[1]; } },
            { id: "tie", text: "xe chở 1 người và 2 người nhiều bằng nhau", test: function () { return true; } }
          ],
          kindSamples: [["4", "16", "0"], ["5", "14", "1"], ["8", "8", "4"], ["9", "6", "5"], ["10", "4", "6"]],
          sample: { values: ["6", "12", "2"] }
        },
        {
          id: "6.1-x2", type: "ways",
          ask: "Quan sát ở cổng trường từ 08:00 đến 08:15, em đếm được 45 xe đi qua. Trung bình cứ bao nhiêu giây thì có một xe đi qua? Giải theo nhiều cách.",
          why: "Dữ liệu đếm được khi quan sát chỉ có ý nghĩa khi em đổi nó ra cùng một đơn vị để so sánh với lúc khác hoặc chỗ khác.",
          strategies: [
            { id: "s1", name: "Đổi 15 phút ra giây rồi chia cho số xe", steps: [
              { ask: "15 phút = ? giây", answer: 900 }, { answer: 20 }] },
            { id: "s2", name: "Tìm số xe mỗi phút trước", steps: [
              { ask: "Mỗi phút có bao nhiêu xe?", answer: 3 }, { answer: 20 }] },
            { id: "s3", name: "Tìm số phút cho một xe, rồi đổi ra giây", steps: [
              { ask: "Một xe ứng với bao nhiêu phút? (viết dạng phân số)", answer: "1/3" }, { answer: 20 }] }
          ],
          sample: { strategy: "s2", steps: ["3", "20"] }
        },
        {
          id: "6.1-x3", type: "whatif", base: 1.8,
          ask: "Ví dụ: 20 xe chở tổng cộng 36 người, trung bình 1,8 người mỗi xe. Em quan sát thêm 5 xe nữa, mỗi xe chở 4 người. Trung bình số người mỗi xe của cả 25 xe là bao nhiêu?",
          why: "Trung bình phải tính lại từ tổng mới và số lượng mới — đây là lỗi hay gặp khi gộp dữ liệu thu thập ở hai lần.",
          answer: function () { return (36 + 5 * 4) / 25; },
          reasons: [
            "Tổng mới là 36 + 20 = 56 người trên 25 xe, nên trung bình tăng nhưng chỉ tăng một chút.",
            "Lấy trung bình của 1,8 và 4 là ra trung bình mới.",
            "Trung bình không đổi vì xe vẫn chạy trên cùng một con đường."
          ],
          reason: 0,
          sample: { guess: "2,24", reason: 0 }
        }
      ],
      "6.2": [
        {
          id: "6.2-x1", type: "pattern",
          ask: "Trường có 600 học sinh, trong đó 240 bạn nam. Mẫu thứ n có (5n + 5) học sinh và giữ đúng tỉ lệ nam, nữ của trường. Mẫu 1, 2, 3 có 4, 6, 8 bạn nam. Mẫu 5, 8, 10 có bao nhiêu bạn nam? Tìm quy luật theo n.",
          why: "Nam chiếm 2/5 cả trường nên cứ thêm 5 người vào mẫu thì có 2 bạn nam — chọn mẫu theo tỉ lệ chính là nhân với một phân số cố định.",
          seq: [4, 6, 8],
          term: function (n) { return (5 * n + 5) * 240 / 600; },
          askN: [5, 8, 10],
          sample: { terms: { 5: "12", 8: "18", 10: "22" }, rule: "2n+2" }
        },
        {
          id: "6.2-x2", type: "make",
          ask: "Tự ra đề chọn mẫu theo tỉ lệ: trường có a học sinh khối 7, b học sinh khối 8, c học sinh khối 9 (mỗi số từ 10 đến 1000). Chọn mẫu s học sinh chia theo tỉ lệ số học sinh mỗi khối. Đề hỏi: mẫu có bao nhiêu học sinh khối 8?",
          why: "Tự chọn số liệu giúp em thấy khi nào mẫu chia đều được cho các nhóm, và vì sao người ta hay chọn mẫu bằng 10% tổng thể.",
          template: "Khối 7: a, khối 8: b, khối 9: c học sinh; mẫu s học sinh. Khối 8 có bao nhiêu bạn trong mẫu?",
          fields: [{ id: "a", label: "Khối 7 (a)" }, { id: "b", label: "Khối 8 (b)" }, { id: "c", label: "Khối 9 (c)" }, { id: "s", label: "Cỡ mẫu (s)" }],
          valid: function (f) { return inRange(f.a, 10, 1000) && inRange(f.b, 10, 1000) && inRange(f.c, 10, 1000) && inRange(f.s, 3, total(f) - 1); },
          solve: function (f) { return f.b * f.s / total(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "A school has " + f.a + " learners in Year 7, " + f.b + " in Year 8 and " + f.c + " in Year 9. A sample of " + f.s + " learners is chosen in proportion to the number in each year. How many Year 8 learners are in the sample?"
              : "Trường có " + f.a + " học sinh khối 7, " + f.b + " học sinh khối 8 và " + f.c + " học sinh khối 9. Chọn mẫu " + f.s + " học sinh theo tỉ lệ số học sinh mỗi khối. Mẫu có bao nhiêu học sinh khối 8?";
          },
          criteria: [
            { id: "whole", text: "Số học sinh của cả ba khối trong mẫu đều là số nguyên", test: function (f) { const n = total(f); return (f.a * f.s) % n === 0 && (f.b * f.s) % n === 0 && (f.c * f.s) % n === 0; } },
            { id: "tenth", text: "Mẫu đúng bằng 10% số học sinh cả trường", test: function (f) { return f.s * 10 === total(f); } },
            { id: "big", text: "Mẫu có ít nhất 30 học sinh", test: function (f) { return f.s >= 30; } },
            { id: "diff", text: "Ba khối có số học sinh khác nhau", test: function (f) { return f.a !== f.b && f.b !== f.c && f.a !== f.c; } }
          ],
          sample: { fields: { a: "200", b: "150", c: "250", s: "24" } }
        },
        {
          id: "6.2-x3", type: "whatif", base: 75,
          ask: "Ví dụ: em hỏi 40 khách ở rạp chiếu phim tối thứ Bảy, 30 người trả lời “tuần nào tôi cũng đi xem phim” (75%). Em hỏi thêm 60 người chọn ngẫu nhiên ở chợ, chỉ 6 người trả lời như vậy. Với cả 100 người, tỉ lệ trả lời “tuần nào cũng đi” là bao nhiêu phần trăm?",
          why: "Mẫu chọn ở nơi người ta đang làm đúng việc được hỏi luôn thiên lệch — so sánh hai mẫu cho thấy rõ điều đó.",
          answer: function () { return (30 + 6) / 100 * 100; },
          reasons: [
            "Gộp số người: 36 trên 100 người là 36%; mẫu ở rạp phim đã thiên lệch nên làm tỉ lệ cao quá.",
            "Lấy trung bình hai tỉ lệ: (75% + 10%) : 2.",
            "Vẫn khoảng 75% vì mẫu đầu tiên đã đủ lớn."
          ],
          reason: 0,
          sample: { guess: "36", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.6.1-x1.labels": ["Cars with 1 person", "Cars with 2 people", "Cars with 3 people"],
        "q.6.1-x1.ask": "You stand by a road, observe 20 cars and record the number of people in each car on a data collection sheet. Each car has 1, 2 or 3 people, and there are 36 people altogether (a mean of 1.8 people per car). How many cars of each kind could your sheet show? Find many different tables.",
        "q.6.1-x1.why": "Many different data tables have the same mean — so a sheet that records each kind tells you more than the mean alone.",
        "q.6.1-x1.challengeText": "The number of cars with 1 person equals the number of cars with 2 people.",
        "q.6.1-x1.kinds": ["the mode is cars with 2 people", "the mode is cars with 1 person", "as many cars with 1 person as with 2 people"],
        "q.6.1-x2.ask": "Observing at the school gate from 08:00 to 08:15, you count 45 vehicles going past. On average, how many seconds are there between one vehicle and the next? Solve it in several ways.",
        "q.6.1-x2.why": "Data counted by observation only becomes useful when you change it into the same unit to compare with another time or place.",
        "q.6.1-x2.strategies": [
          "Change 15 minutes into seconds, then divide by the number of vehicles",
          "Find the number of vehicles per minute first",
          "Find the number of minutes for one vehicle, then change it into seconds"
        ],
        "q.6.1-x2.steps.s1": ["15 minutes = ? seconds"],
        "q.6.1-x2.steps.s2": ["How many vehicles go past each minute?"],
        "q.6.1-x2.steps.s3": ["How many minutes is that for one vehicle? (write it as a fraction)"],
        "q.6.1-x3.ask": "Example: 20 cars carry 36 people altogether, a mean of 1.8 people per car. You observe 5 more cars, each carrying 4 people. What is the mean number of people per car for all 25 cars?",
        "q.6.1-x3.why": "A mean must be worked out again from the new total and the new count — a common mistake when you combine data collected on two occasions.",
        "q.6.1-x3.reasons": [
          "The new total is 36 + 20 = 56 people in 25 cars, so the mean goes up, but only a little.",
          "The new mean is the mean of 1.8 and 4.",
          "The mean does not change because the cars are on the same road."
        ],
        "q.6.2-x1.ask": "A school has 600 learners, and 240 of them are boys. Sample n has (5n + 5) learners and keeps the same ratio of boys to girls as the school. Samples 1, 2, 3 have 4, 6, 8 boys. How many boys are in samples 5, 8 and 10? Find the rule in terms of n.",
        "q.6.2-x1.why": "Boys are 2/5 of the school, so every 5 extra learners in the sample include 2 boys — a proportional sample just multiplies by a fixed fraction.",
        "q.6.2-x2.ask": "Make a proportional sampling problem: a school has a learners in Year 7, b learners in Year 8 and c learners in Year 9 (each from 10 to 1000). A sample of s learners is shared in proportion to the number in each year. The problem asks: how many Year 8 learners are in the sample?",
        "q.6.2-x2.why": "Choosing your own numbers shows when a sample can be shared exactly between the groups, and why people often choose a sample of 10% of the population.",
        "q.6.2-x2.template": "Year 7: a, Year 8: b, Year 9: c learners; sample of s learners. How many Year 8 learners are in the sample?",
        "q.6.2-x2.fields": ["Year 7 (a)", "Year 8 (b)", "Year 9 (c)", "Sample size (s)"],
        "q.6.2-x2.criteria": [
          "The numbers of learners from all three years in the sample are whole numbers",
          "The sample is exactly 10% of the whole school",
          "The sample has at least 30 learners",
          "The three years have different numbers of learners"
        ],
        "q.6.2-x3.ask": "Example: you ask 40 customers at a cinema on a Saturday night, and 30 say “I go to the cinema every week” (75%). You then ask 60 people chosen at random at a market, and only 6 give that answer. For all 100 people, what percentage say they go every week?",
        "q.6.2-x3.why": "A sample taken where people are already doing the thing you ask about is always biased — comparing the two samples shows this clearly.",
        "q.6.2-x3.reasons": [
          "Combine the people: 36 out of 100 people is 36%; the cinema sample was biased and made the percentage too high.",
          "Take the mean of the two percentages: (75% + 10%) ÷ 2.",
          "It is still about 75% because the first sample was big enough."
        ]
      },
      vi: {}
    }
  });
})();
