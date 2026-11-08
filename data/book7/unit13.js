window.GAME_DATA = window.GAME_DATA || { units: [] };
(function () {
  // Helper: fills defaults so each question stays compact.
  function Q(o) {
    return {
      id: o.id, type: o.type, diff: o.diff, skill: o.skill,
      source: o.source || "book", lang: o.lang || "en",
      q: o.q, svg: o.svg || null, choices: o.choices || null,
      answer: o.answer, accept: o.accept || [], tol: o.tol || 0,
      unitLabel: o.unitLabel || "", hints: o.h, explain: o.e, why: o.why || null, howto: o.howto || null
    };
  }
  function V(o) { o.source = "vn"; o.lang = "vi"; return Q(o); }

  window.GAME_DATA.units.push({
    id: 13,
    title: "Probability",
    titleVi: "Xác suất",
    strand: "Statistics and probability",
    pages: [262, 277],
    realm: "Thung Lũng Xúc Xắc",
    emoji: "🎲",
    story: "Em đến Thung Lũng Xúc Xắc, nơi mọi cuộc đua đều phụ thuộc vào may rủi. Muốn không bị lừa bởi những trò chơi 'may mắn' và biết dự báo thời tiết nói gì, em phải học cách đo khả năng xảy ra của một sự kiện bằng con số từ 0 đến 1.",
    glossary: [
      { en: "outcome", vi: "kết quả", def: "Một kết quả có thể xảy ra của một phép thử, ví dụ gieo xúc xắc được mặt 4." },
      { en: "likelihood", vi: "khả năng xảy ra", def: "Mức độ dễ hay khó xảy ra của một sự kiện: chắc chắn, có thể, khó, không thể..." },
      { en: "equally likely", vi: "đồng khả năng", def: "Các kết quả có cơ hội xảy ra như nhau, ví dụ 6 mặt của xúc xắc cân đối." },
      { en: "mutually exclusive", vi: "xung khắc (loại trừ nhau)", def: "Hai kết quả không thể cùng xảy ra trong một lần thử." },
      { en: "theoretical probability", vi: "xác suất lý thuyết", def: "Số kết quả thuận lợi chia cho tổng số kết quả đồng khả năng." },
      { en: "experimental probability", vi: "xác suất thực nghiệm", def: "Ước lượng xác suất từ kết quả của thí nghiệm thật." },
      { en: "relative frequency", vi: "tần suất tương đối", def: "Số lần xảy ra chia cho tổng số lần thử." },
      { en: "trial", vi: "lần thử", def: "Một lần thực hiện thí nghiệm, ví dụ một lần tung đồng xu." }
    ],
    sections: [
      {
        id: "13.1",
        title: "The probability scale",
        titleVi: "Xác suất và ngôn ngữ mô tả khả năng",
        learn: [
          "Xác suất là con số từ 0 đến 1 đo khả năng xảy ra: 0 là không thể, 1 là chắc chắn, 0,5 là cơ hội ngang nhau.",
          "Có thể viết xác suất bằng phân số, số thập phân hoặc phần trăm: 4/5 = 0,8 = 80%.",
          "Để so sánh hai xác suất, hãy đổi cả hai về cùng dạng (thường là phần trăm).",
          "Xác suất không bao giờ nhỏ hơn 0 hay lớn hơn 1 (hay 100%).",
          "Các lần thử độc lập: đồng xu không 'nhớ' những lần tung trước, nên lần sau vẫn là 50%."
        ],
        example: {
          q: "Đội Hổ thắng trận tới với xác suất 45%, đội Sư Tử với xác suất 4/5. Đội nào dễ thắng hơn?",
          steps: ["Đổi 4/5 = 0,8 = 80%", "So sánh 80% > 45%", "Vậy đội Sư Tử dễ thắng hơn."],
          prompts: [
            "Hai xác suất đang ở hai dạng khác nhau (phần trăm và phân số); em đưa về cùng dạng nào để so sánh?",
            "Đổi 4/5 sang phần trăm rồi so với 45%: số nào lớn hơn?",
            "Xác suất lớn hơn nghĩa là đội nào dễ thắng hơn?"
          ],
          answer: { type: "text", value: "Sư Tử", accept: ["đội Sư Tử", "Đội Sư Tử"] },
          twist: { q: "Xác suất đội Hổ không thắng trận tới là bao nhiêu phần trăm?", answer: { type: "num", value: 55 } }
        },
        questions: [
          Q({ id: "13.1-01", type: "mc", diff: 1, skill: "prob-language",
            q: "Choose the best word to describe: 'The day after Monday will be Tuesday.'",
            choices: ["impossible", "unlikely", "even chance", "certain"], answer: 3,
            h: ["Có thể nào ngày sau thứ Hai không phải thứ Ba không?", "Sự kiện này luôn luôn xảy ra hay chỉ đôi khi?", "Xác suất của nó nằm ở đầu nào của thang 0 đến 1?"],
            e: "Ngày sau thứ Hai luôn là thứ Ba, nên sự kiện này chắc chắn xảy ra: xác suất bằng 1 (certain)." }),
          Q({ id: "13.1-02", type: "num", diff: 1, skill: "prob-convert",
            q: "Write 4/5 as a percentage.", answer: 80, unitLabel: "%",
            h: ["4/5 bằng bao nhiêu phần mười?", "Nhân cả tử và mẫu với 2 thì được phân số nào?", "8/10 là bao nhiêu phần trăm?"],
            e: "4/5 = 8/10 = 0,8 = 80%." }),
          Q({ id: "13.1-03", type: "num", diff: 1, skill: "prob-convert",
            q: "Write 30% as a fraction in its simplest form.", answer: "3/10",
            h: ["30% nghĩa là 30 phần của bao nhiêu phần?", "Viết 30/100, rồi tìm ước chung của 30 và 100.", "Chia cả tử và mẫu cho 10 được phân số nào?"],
            e: "30% = 30/100 = 3/10 sau khi chia cả tử và mẫu cho 10." }),
          Q({ id: "13.1-04", type: "mc", diff: 2, skill: "prob-compare",
            q: "Which of these is the greatest probability?",
            choices: ["3/5", "0.55", "58%", "0.5"], answer: 0,
            h: ["Nên đổi cả bốn số về cùng một dạng, dạng nào dễ nhất?", "3/5 bằng bao nhiêu phần trăm?", "Trong 60%, 55%, 58%, 50% số nào lớn nhất?"],
            e: "3/5 = 60%, 0,55 = 55%, 58%, 0,5 = 50%. Lớn nhất là 3/5. Lỗi thường gặp: thấy 58% có số 'to' hơn 3 hay 5 nên chọn bừa mà không đổi dạng." }),
          Q({ id: "13.1-05", type: "mc", diff: 3, skill: "independent-trials",
            q: "Sogand flips a fair coin five times and gets heads every time. What is the probability that the next flip is heads?",
            choices: ["More than 50%", "Less than 50%", "Exactly 50%", "It must be tails now"], answer: 2,
            h: ["Đồng xu có nhớ năm lần tung trước không?", "Mỗi lần tung đồng xu cân đối có mấy mặt, có đồng khả năng không?", "Vậy kết quả những lần trước ảnh hưởng thế nào tới lần tiếp theo?"],
            e: "Mỗi lần tung là độc lập, đồng xu cân đối luôn có xác suất mặt ngửa là 50%. Sai lầm 'đến lượt mặt sấp' gọi là ngộ nhận của người chơi bạc.",
            why: { q: "Vì sao câu trả lời là 50%?", choices: ["Vì đồng xu 'bù' lại cho đủ cân bằng", "Vì các lần tung độc lập với nhau", "Vì 5 lần chưa đủ nhiều"], answer: 1 } }),
          Q({ id: "13.1-06", type: "multi", diff: 3, skill: "prob-range",
            q: "Which of these numbers can NOT be a probability? Select all that apply.",
            choices: ["0.9", "1.2", "-0.3", "100%", "3/2"], answer: [1, 2, 4],
            h: ["Xác suất nằm trong khoảng nào trên thang đo?", "Hãy đổi mỗi số về số thập phân để so với 0 và 1.", "Số nào nhỏ hơn 0 hoặc lớn hơn 1?"],
            e: "Xác suất phải từ 0 đến 1. 1,2 và 3/2 = 1,5 lớn hơn 1; −0,3 nhỏ hơn 0. Còn 0,9 và 100% (= 1) hợp lệ." }),
          Q({ id: "13.1-07", type: "num", diff: 3, skill: "prob-meaning",
            q: "A forecast says the probability of rain is 80%. On 10 days with exactly this forecast, about how many days would you expect rain?",
            answer: 8, unitLabel: "days",
            h: ["80% nghĩa là bao nhiêu phần trong 100 phần?", "Rút gọn thành 'trong 10 ngày thì có bao nhiêu ngày'?", "Tính 80% của 10."],
            e: "80% của 10 = 0,8 × 10 = 8 ngày. Đây chỉ là số ngày 'kỳ vọng', thực tế có thể lệch đi một chút." })
        ]
      },
      {
        id: "13.2",
        title: "Mutually exclusive outcomes",
        titleVi: "Các kết quả xung khắc",
        learn: [
          "Hai kết quả xung khắc nếu chúng không thể cùng xảy ra: gieo một lần được 1 thì không thể đồng thời được 3.",
          "Khi các kết quả đồng khả năng: xác suất = (số kết quả thuận lợi) / (tổng số kết quả).",
          "Xác suất bằng 0 nghĩa là không thể xảy ra; bằng 1 nghĩa là chắc chắn.",
          "Nếu các kết quả xung khắc và bao phủ mọi khả năng thì tổng xác suất bằng 1; vì vậy P(không xảy ra) = 1 − P(xảy ra).",
          "Nếu hai biến cố có thể cùng xảy ra (như 'nhỏ hơn hoặc bằng 5' và 'lớn hơn hoặc bằng 5') thì không được cộng như xung khắc."
        ],
        example: {
          q: "10 thẻ: 2, 5, 8, 5, 9, 8, 5, 3, 8, 5. Rút một thẻ không nhìn. Tính xác suất rút được số 8.",
          steps: ["Có 10 thẻ đồng khả năng.", "Có 3 thẻ ghi số 8.", "P(8) = 3/10 = 30%."],
          prompts: [
            "Tổng số thẻ cho em biết điều gì về số kết quả có thể xảy ra?",
            "Hãy đếm xem có bao nhiêu thẻ ghi số 8.",
            "Xác suất bằng kết quả mong muốn chia cho kết quả có thể: viết thành phân số rồi phần trăm."
          ],
          answer: { type: "num", value: "3/10" },
          twist: { q: "Nếu thêm 2 thẻ ghi số 8 vào bộ thẻ thì xác suất rút được số 8 là bao nhiêu?", answer: { type: "num", value: "5/12" } }
        },
        questions: [
          Q({ id: "13.2-01", type: "num", diff: 1, skill: "theo-prob",
            q: "Ten cards show 2, 5, 8, 5, 9, 8, 5, 3, 8, 5. One card is chosen at random. Find the probability that it is 3.", answer: "1/10",
            h: ["Có tất cả bao nhiêu thẻ?", "Có mấy thẻ ghi số 3?", "Xác suất = số thẻ thuận lợi / tổng số thẻ."],
            e: "Chỉ có 1 thẻ số 3 trong 10 thẻ nên P = 1/10." }),
          Q({ id: "13.2-02", type: "num", diff: 1, skill: "theo-prob",
            q: "Using the same ten cards (2, 5, 8, 5, 9, 8, 5, 3, 8, 5), find the probability of choosing a 5.", answer: "2/5",
            h: ["Đếm xem có bao nhiêu thẻ số 5.", "Viết xác suất dưới dạng phân số với mẫu 10.", "Rút gọn phân số đó."],
            e: "Có 4 thẻ số 5 nên P = 4/10 = 2/5." }),
          Q({ id: "13.2-03", type: "num", diff: 1, skill: "theo-prob",
            q: "Using the same ten cards, find the probability of choosing a 1.", answer: 0,
            h: ["Có thẻ nào ghi số 1 không?", "Sự kiện như vậy gọi là gì: chắc chắn hay không thể?", "Xác suất của sự kiện không thể là bao nhiêu?"],
            e: "Không có thẻ nào ghi 1 nên sự kiện không thể xảy ra, P = 0." }),
          Q({ id: "13.2-04", type: "num", diff: 2, skill: "theo-prob",
            q: "Using the same ten cards, find the probability of choosing an odd number.", answer: "3/5",
            h: ["Số lẻ trong các thẻ là những số nào?", "Đếm số thẻ ghi 5, 9 và 3.", "Viết phân số rồi rút gọn."],
            e: "Số lẻ: bốn thẻ 5, một thẻ 9, một thẻ 3 = 6 thẻ. P = 6/10 = 3/5." }),
          Q({ id: "13.2-05", type: "num", diff: 2, skill: "complement",
            q: "Using the same ten cards, find the probability that the card is NOT an 8.", answer: "7/10",
            h: ["Có mấy thẻ ghi số 8?", "Có mấy thẻ không phải số 8?", "Hoặc: lấy 1 trừ xác suất rút được số 8."],
            e: "P(8) = 3/10 nên P(không phải 8) = 1 − 3/10 = 7/10." }),
          Q({ id: "13.2-06", type: "num", diff: 2, skill: "theo-prob",
            q: "A fair 20-faced dice is numbered 1 to 20. Find the probability of throwing a multiple of 3.", answer: "3/10",
            h: ["Liệt kê các bội của 3 từ 1 đến 20.", "Có bao nhiêu số trong danh sách?", "Chia cho tổng số mặt (20) rồi rút gọn."],
            e: "Bội của 3: 3, 6, 9, 12, 15, 18 (6 số). P = 6/20 = 3/10." }),
          Q({ id: "13.2-07", type: "num", diff: 2, skill: "theo-prob",
            q: "On the same 20-faced dice, find the probability of throwing a factor of 30.", answer: "7/20",
            h: ["Ước của 30 là những số nào chia hết 30?", "Chỉ giữ những ước nhỏ hơn hoặc bằng 20.", "Đếm rồi chia cho 20."],
            e: "Ước của 30 từ 1 đến 20: 1, 2, 3, 5, 6, 10, 15 (7 số). P = 7/20." }),
          Q({ id: "13.2-08", type: "mc", diff: 3, skill: "mutually-exclusive",
            q: "Eight cards: 2, 3, 5, 7, 11, 13, 17, 19. P(5 or less) = 3/8 and P(5 or more) = 6/8. Zara says these add to 1 because one of them must happen. Why is she wrong?",
            choices: ["The card 5 is in both groups, so the outcomes are not mutually exclusive", "Because 3/8 + 6/8 is not a proper fraction", "Because probabilities never add", "She is right"], answer: 0,
            h: ["Hai nhóm 'nhỏ hơn hoặc bằng 5' và 'lớn hơn hoặc bằng 5' có thẻ chung nào không?", "Tính 3/8 + 6/8, kết quả so với 1 thế nào?", "Một xác suất tổng có thể vượt quá 1 không? Điều đó cho biết điều gì về việc đếm trùng?"],
            e: "Thẻ số 5 được đếm hai lần. 3/8 + 6/8 = 9/8 > 1 nên các biến cố không xung khắc; chỉ cộng xác suất khi các kết quả không trùng nhau." }),
          Q({ id: "13.2-09", type: "num", diff: 3, skill: "two-digit-random",
            q: "A computer makes a random two-digit number from 00 to 99 (all 100 pairs equally likely). Find the probability that exactly one digit is 6.", answer: "9/50",
            h: ["Có bao nhiêu số có chữ số hàng chục là 6 và hàng đơn vị khác 6?", "Còn trường hợp chữ số hàng đơn vị là 6 và hàng chục khác 6?", "Cộng hai trường hợp rồi chia cho 100."],
            e: "Chục là 6, đơn vị khác 6: 9 số. Đơn vị là 6, chục khác 6: 9 số. Tổng 18 số, P = 18/100 = 9/50." }),
          Q({ id: "13.2-10", type: "num", diff: 3, skill: "two-digit-random",
            q: "For the same random number from 00 to 99, find the probability that neither digit is 6.", answer: "81/100",
            h: ["Mỗi chữ số có bao nhiêu lựa chọn khác 6?", "Có bao nhiêu cặp chữ số như vậy?", "Hoặc: xác suất 'ít nhất một chữ số 6' là bao nhiêu rồi lấy 1 trừ đi."],
            e: "Mỗi chữ số có 9 cách chọn khác 6, nên có 9 × 9 = 81 số. P = 81/100." })
        ]
      },
      {
        id: "13.3",
        title: "Experimental probabilities",
        titleVi: "Ước lượng xác suất bằng thí nghiệm",
        sims: [{ id: "spinner", at: 0 }],
        learn: [
          "Xác suất thực nghiệm = tần suất tương đối = số lần xảy ra / tổng số lần thử.",
          "Làm càng nhiều lần thử thì kết quả càng đáng tin; ít lần thử có thể lệch xa lý thuyết.",
          "Kết quả thực nghiệm thường không đúng bằng xác suất lý thuyết, đó là bình thường.",
          "P(không xảy ra) = 1 − P(xảy ra); các tần suất của mọi kết quả cộng lại bằng 1.",
          "Có thể dùng xác suất thực nghiệm để ước lượng số lần xảy ra trong tương lai hoặc thành phần chưa biết (số bi đỏ trong túi)."
        ],
        example: {
          q: "Thả 124 chiếc đinh ghim, có 48 chiếc rơi ngửa. Tìm xác suất thực nghiệm đinh rơi ngửa.",
          steps: ["Tần suất tương đối = 48/124", "≈ 0,39", "Xác suất thực nghiệm khoảng 39%."],
          prompts: [
            "Xác suất thực nghiệm bằng số lần xảy ra chia cho tổng số lần thử. Em điền số liệu vào phân số.",
            "Chia ra số thập phân, rồi làm tròn đến hàng phần trăm.",
            "Muốn viết thành phần trăm thì nhân kết quả với số nào?"
          ],
          answer: { type: "num", value: 0.39, tol: 0.005 },
          twist: { q: "Nếu thả tổng cộng 200 chiếc và có 80 chiếc rơi ngửa thì xác suất thực nghiệm là bao nhiêu?", answer: { type: "num", value: 0.4 } }
        },
        questions: [
          Q({ id: "13.3-01", type: "num", diff: 1, skill: "exp-prob",
            q: "A survey of 400 cars finds that 140 were travelling faster than 60 km/h. Find the experimental probability that the next car is travelling faster than 60 km/h.", answer: "7/20",
            h: ["Số lần xảy ra là bao nhiêu và tổng số lần thử là bao nhiêu?", "Viết 140/400.", "Rút gọn phân số bằng cách chia cho 20."],
            e: "P = 140/400 = 7/20 (= 35%)." }),
          Q({ id: "13.3-02", type: "num", diff: 1, skill: "exp-prob",
            q: "In the same survey, find the experimental probability that a car travels at 60 km/h or less.", answer: "13/20",
            h: ["Có bao nhiêu xe không chạy nhanh hơn 60 km/h?", "Hoặc dùng xác suất bù: 1 trừ xác suất ở câu trước.", "Viết kết quả dạng phân số tối giản."],
            e: "400 − 140 = 260 xe. P = 260/400 = 13/20, hay 1 − 7/20 = 13/20." }),
          Q({ id: "13.3-03", type: "num", diff: 2, skill: "exp-prob",
            q: "A survey of 240 students finds 232 have a mobile phone. Find the experimental probability that a student has a phone, as a percentage to the nearest whole number.",
            answer: 97, unitLabel: "%",
            h: ["Viết phân số 232/240.", "Chia tử cho mẫu bằng máy tính hoặc rút gọn.", "Nhân kết quả với 100 rồi làm tròn."],
            e: "232 ÷ 240 ≈ 0,9667 = 96,67% ≈ 97%." }),
          Q({ id: "13.3-04", type: "num", diff: 2, skill: "relative-freq",
            q: "Varun flips a coin 40 times: 24 heads and 16 tails. Find the relative frequency of heads.", answer: "3/5",
            h: ["Tần suất = số lần mặt ngửa / tổng số lần tung.", "Viết 24/40.", "Rút gọn bằng cách chia cho 8."],
            e: "24/40 = 3/5 = 0,6." }),
          Q({ id: "13.3-05", type: "mc", diff: 2, skill: "small-sample",
            q: "Toby says Varun's coin is unfair because 24 heads is not exactly half of 40. What is the best response?",
            choices: ["Toby is right because 24 is not 20", "Not necessarily: with only 40 flips, a gap like this can happen by chance with a fair coin", "The coin must be fair because 24 + 16 = 40", "Toby is right because experiments are never wrong"], answer: 1,
            h: ["Nếu tung đồng xu cân đối 40 lần, em có chắc chắn được đúng 20 mặt ngửa không?", "Số lần thử 40 là nhiều hay ít?", "Cần làm gì để kết luận chắc chắn hơn về độ cân đối?"],
            e: "Kết quả thực nghiệm dao động quanh xác suất lý thuyết. Muốn kết luận cần nhiều lần thử hơn. Lỗi: nghĩ rằng thực nghiệm phải khớp đúng lý thuyết." }),
          Q({ id: "13.3-06", type: "num", diff: 2, skill: "theo-prob",
            q: "A bag has 1 white, 1 black and 3 red balls. One ball is picked at random. Find the theoretical probability of red.", answer: "3/5",
            h: ["Trong túi có tất cả bao nhiêu quả bóng?", "Có mấy quả màu đỏ?", "Viết phân số thuận lợi / tất cả."],
            e: "Tổng 1 + 1 + 3 = 5 quả, đỏ có 3 quả nên P(đỏ) = 3/5." }),
          Q({ id: "13.3-07", type: "num", diff: 2, skill: "predict",
            q: "A drawing pin lands point up 40% of the time. If you drop 500 pins, how many would you expect to land point up?", answer: 200,
            h: ["40% bằng số thập phân nào?", "Số pin ngửa dự đoán = xác suất × số lần thử.", "Tính 0,4 × 500."],
            e: "0,4 × 500 = 200 chiếc." }),
          Q({ id: "13.3-08", howto: "Use Daniella's 50 results to decide how many red balls are most likely in the bag. Enter that number of red balls.", type: "num", diff: 3, skill: "estimate-unknown",
            q: "A bag has 1 white ball, 1 black ball and some red balls (an odd number). Daniella takes a ball and replaces it, 50 times: 6 white, 8 black, 36 red. What is the most likely number of red balls?",
            answer: 5,
            h: ["Xác suất thực nghiệm của bóng đỏ là bao nhiêu (36/50)?", "Nếu có r quả đỏ thì xác suất lý thuyết là r/(r+2). Thử r = 3, 5, 7.", "Số r nào cho r/(r+2) gần 0,72 nhất?"],
            e: "36/50 = 0,72. r=3 cho 0,6; r=5 cho 5/7 ≈ 0,714; r=7 cho 7/9 ≈ 0,78. Số lẻ gần nhất là 5." }),
          Q({ id: "13.3-09", type: "mc", diff: 3, skill: "overlap",
            q: "In a survey of 240 students, 92 want to be in a band and 68 are in a sports team. A student argues the probability of band OR sports is (92 + 68)/240 = 2/3. Why might this be wrong?",
            choices: ["Some students may be in both groups, so they are counted twice", "Because 92 + 68 is not 160", "Because you must divide by 100", "It is correct"], answer: 0,
            h: ["Một học sinh có thể vừa muốn vào ban nhạc vừa ở đội thể thao không?", "Nếu có, em đã đếm em đó mấy lần khi cộng 92 + 68?", "Vậy hai nhóm có xung khắc không?"],
            e: "Hai nhóm không xung khắc: học sinh thuộc cả hai bị đếm hai lần nên 2/3 có thể quá lớn. Chỉ cộng khi các nhóm không trùng nhau." }),
          Q({ id: "13.3-10", howto: "Use the results of the 120 draws to estimate how many of the 40 counters in the box are red. Enter that number of counters.", type: "num", diff: 3, skill: "estimate-unknown",
            q: "A box holds 40 counters. In 120 draws with replacement, 45 are red. Estimate how many red counters are in the box.", answer: 15,
            h: ["Tần suất thực nghiệm của màu đỏ là bao nhiêu?", "45/120 rút gọn thành phân số nào?", "Lấy tần suất đó nhân với 40."],
            e: "45/120 = 3/8. Ước lượng số đỏ = 3/8 × 40 = 15 chiếc." })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Gieo xúc xắc, rút thẻ, đếm bi: các bài toán xác suất kiểu kiểm tra và học sinh giỏi đang chờ em ở cuối thung lũng.",
      questions: [
        V({ id: "ch-01", type: "num", diff: 2, skill: "two-dice",
          q: "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để tổng hai mặt bằng 7.", answer: "1/6",
          h: ["Có tất cả bao nhiêu cặp kết quả (mặt thứ nhất, mặt thứ hai)?", "Liệt kê các cặp có tổng 7: (1,6), (2,5)...", "Chia số cặp thuận lợi cho 36 rồi rút gọn."],
          e: "Có 6 × 6 = 36 cặp. Tổng 7 có 6 cặp: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). P = 6/36 = 1/6." }),
        V({ id: "ch-02", type: "num", diff: 3, skill: "two-dice",
          q: "Gieo hai xúc xắc cân đối. Tính xác suất để tổng hai mặt chia hết cho 5.", answer: "7/36",
          h: ["Tổng của hai xúc xắc nằm trong khoảng nào, những tổng nào chia hết cho 5?", "Có bao nhiêu cặp cho tổng 5 và bao nhiêu cặp cho tổng 10?", "Cộng hai số cặp rồi chia cho 36."],
          e: "Tổng 5: (1,4),(2,3),(3,2),(4,1) = 4 cặp. Tổng 10: (4,6),(5,5),(6,4) = 3 cặp. Tất cả 7 cặp nên P = 7/36." }),
        V({ id: "ch-03", type: "num", diff: 3, skill: "two-dice",
          q: "Gieo hai xúc xắc cân đối. Tính xác suất để tích hai mặt là số lẻ.", answer: "1/4",
          h: ["Tích hai số là số lẻ khi nào?", "Mỗi xúc xắc có mấy mặt lẻ?", "Số cặp thuận lợi là 3 × 3 = ? rồi chia cho 36."],
          e: "Tích lẻ khi cả hai mặt đều lẻ: 3 × 3 = 9 cặp. P = 9/36 = 1/4." }),
        V({ id: "ch-04", type: "num", diff: 3, skill: "cards-divisible",
          q: "Có 30 tấm thẻ ghi các số từ 1 đến 30. Rút ngẫu nhiên một thẻ. Tính xác suất để số trên thẻ chia hết cho 3 hoặc chia hết cho 5.", answer: "7/15",
          h: ["Có bao nhiêu số từ 1 đến 30 chia hết cho 3? Chia hết cho 5?", "Có số nào vừa chia hết cho 3 vừa chia hết cho 5 và bị đếm hai lần không?", "Số thuận lợi = 10 + 6 − (số bị đếm trùng); chia cho 30."],
          e: "Chia hết cho 3: 10 số. Chia hết cho 5: 6 số. Chia hết cho 15: 2 số (15, 30) bị đếm trùng. Có 10 + 6 − 2 = 14 số; P = 14/30 = 7/15." }),
        V({ id: "ch-05", type: "num", diff: 3, skill: "cards-prime",
          q: "Có 50 tấm thẻ ghi các số từ 1 đến 50. Rút một thẻ ngẫu nhiên. Tính xác suất để thẻ ghi số nguyên tố.", answer: "3/10",
          h: ["Số 1 có phải số nguyên tố không?", "Liệt kê các số nguyên tố nhỏ hơn hoặc bằng 50 theo thứ tự.", "Đếm rồi chia cho 50 và rút gọn."],
          e: "Số nguyên tố ≤ 50: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47 (15 số). P = 15/50 = 3/10." }),
        V({ id: "ch-06", type: "num", diff: 2, skill: "complement",
          q: "Trong một ván cờ, xác suất An thắng là 0,35 và xác suất hòa là 0,25. Tính xác suất An thua.", answer: 0.4,
          h: ["Ba kết quả thắng, hòa, thua có xung khắc và đủ mọi khả năng không?", "Tổng ba xác suất bằng bao nhiêu?", "Lấy 1 trừ tổng hai xác suất đã biết."],
          e: "P(thua) = 1 − 0,35 − 0,25 = 0,4." }),
        V({ id: "ch-07", type: "num", diff: 3, skill: "estimate-unknown",
          q: "Trong hộp có 12 viên bi đỏ và một số viên bi xanh. Lấy ngẫu nhiên một viên, xác suất được bi đỏ là 2/5. Hỏi hộp có bao nhiêu viên bi xanh?", answer: 18,
          h: ["Nếu tổng số bi là n thì xác suất bi đỏ biểu diễn thế nào?", "12/n = 2/5, vậy n bằng bao nhiêu?", "Số bi xanh = tổng số bi − 12."],
          e: "12/n = 2/5 nên n = 30. Số bi xanh = 30 − 12 = 18." }),
        V({ id: "ch-08", type: "num", diff: 3, skill: "estimate-unknown",
          q: "Trong một túi có 3 bi đỏ và 5 bi xanh. Cần bỏ thêm ít nhất bao nhiêu bi đỏ để xác suất lấy được bi đỏ bằng 1/2?", answer: 2,
          h: ["Sau khi thêm k bi đỏ, tổng số bi và số bi đỏ là bao nhiêu?", "Lập phương trình (3 + k)/(8 + k) = 1/2.", "Giải phương trình để tìm k, rồi kiểm tra lại."],
          e: "(3+k)/(8+k) = 1/2 ⟹ 6 + 2k = 8 + k ⟹ k = 2. Khi đó 5 bi đỏ trên 10 bi, đúng 1/2." }),
        V({ id: "ch-09", type: "num", diff: 3, skill: "experimental",
          q: "Một cầu thủ sút phạt đền 80 lần, thành công 56 lần. Dựa vào kết quả này, ước lượng số lần thành công khi cầu thủ sút 150 lần.", answer: 105,
          h: ["Xác suất thực nghiệm thành công là bao nhiêu (56/80)?", "Rút gọn phân số 56/80.", "Nhân xác suất đó với 150."],
          e: "56/80 = 7/10. Ước lượng: 7/10 × 150 = 105 lần." }),
        V({ id: "ch-10", type: "mc", diff: 3, skill: "overlap",
          q: "Lớp 7A có 40 học sinh: 24 em thích bóng đá, 18 em thích cầu lông và 6 em thích cả hai. Chọn ngẫu nhiên một em. Xác suất em đó thích ít nhất một trong hai môn là bao nhiêu?",
          choices: ["42/40", "36/40 = 9/10", "30/40 = 3/4", "24/40 = 3/5"], answer: 1,
          h: ["Nếu chỉ cộng 24 + 18 thì những em thích cả hai bị đếm mấy lần?", "Số em thích ít nhất một môn = 24 + 18 trừ đi số đếm trùng.", "Chia số đó cho 40 và so với các đáp án."],
          e: "Số em thích ít nhất một môn: 24 + 18 − 6 = 36. P = 36/40 = 9/10. Đáp án 42/40 sai vì cộng trùng và vượt quá 1." })
      ]
    },
    project: null
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "13.1-02": "frac-to-pct", "13.1-03": "pct-to-frac" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 13; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
