(function () {
  var Q = function (id, type, diff, skill, q, answer, hints, explain, o) {
    o = o || {};
    return {
      id: id, type: type, diff: diff, skill: skill,
      source: o.source || "book", lang: o.lang || "en",
      q: q, svg: o.svg || null, choices: o.choices || null,
      answer: answer, accept: o.accept || [], tol: o.tol || 0,
      unitLabel: o.unitLabel || "", hints: hints, explain: explain, why: o.why || null, howto: o.howto || null
    };
  };
  var V = { source: "vn", lang: "vi" };
  var VC = function (c, extra) { return Object.assign({ source: "vn", lang: "vi", choices: c }, extra || {}); };

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 10,
    title: "Percentages",
    titleVi: "Phần trăm",
    strand: "Number",
    pages: [213, 224],
    realm: "Chợ Phiên Trăm Phần",
    emoji: "🏷️",
    story: "Chợ Phiên Trăm Phần đang có đợt giảm giá lớn: áo giảm 25%, giày giảm 40%, còn gian hàng đồ cũ lại tăng 150%! Để không bị 'hớ', em phải biết đổi qua lại giữa phân số, số thập phân và phần trăm, kể cả khi phần trăm nhỏ hơn 1 hay lớn hơn 100.",
    glossary: [
      { en: "percentage", vi: "phần trăm", def: "Số phần trên 100 phần bằng nhau, viết bằng ký hiệu %." },
      { en: "fraction", vi: "phân số", def: "Cách viết một phần của tổng thể dưới dạng tử số trên mẫu số." },
      { en: "decimal", vi: "số thập phân", def: "Cách viết số bằng dấu phẩy, ví dụ 0,35." },
      { en: "numerator / denominator", vi: "tử số / mẫu số", def: "Số ở trên / số ở dưới của phân số." },
      { en: "equivalent", vi: "tương đương", def: "Có cùng giá trị, ví dụ 32/100 = 8/25." },
      { en: "simplest form", vi: "dạng tối giản", def: "Phân số không thể rút gọn thêm vì tử và mẫu chỉ có ước chung là 1." },
      { en: "common factor", vi: "ước chung", def: "Số chia hết cả tử số và mẫu số." },
      { en: "mixed number", vi: "hỗn số", def: "Số gồm phần nguyên và phần phân số, ví dụ 2 1/2." }
    ],
    sections: [
      {
        id: "10.1",
        title: "Fractions, decimals and percentages",
        titleVi: "Phân số, số thập phân và phần trăm",
        sims: [{ id: "percentgrid", at: 0 }],
        learn: [
          "Phần trăm nghĩa là 'trên 100'. 32% = 32/100 = 0,32. Để đổi % sang số thập phân, chia cho 100 (dời dấu phẩy hai chữ số sang trái).",
          "Đổi % sang phân số: viết trên 100 rồi rút gọn bằng ước chung lớn nhất. 60% = 60/100 = 3/5; 32% = 8/25. 83/100 không rút gọn được vì 83 và 100 chỉ có ước chung là 1.",
          "Đổi phân số sang %: đưa về mẫu số 100 (nhân hoặc chia cả tử và mẫu) hoặc nhân với 100. Ví dụ 7/50 = 14/100 = 14%.",
          "Tìm một phần trăm của một lượng: 30% của 60 cm² = 3/10 × 60 = 18 cm², hay 0,3 × 60 = 18 cm²."
        ],
        example: {
          q: "Hình tròn chia 10 phần bằng nhau, 3 phần màu hồng. Hồng chiếm bao nhiêu (số thập phân, phân số, %)? Nếu diện tích hình tròn là 60 cm² thì phần hồng bao nhiêu?",
          steps: ["3 phần trong 10 phần: phân số 3/10, số thập phân 0,3", "3/10 = 30/100 nên 30%", "Diện tích hồng = 0,3 × 60 = 18 cm²"],
          prompts: [
            "Hình có 10 phần bằng nhau, 3 phần tô hồng: em viết thành phân số rồi số thập phân thế nào?",
            "Để đổi sang phần trăm, em đưa phân số về mẫu số bao nhiêu?",
            "Diện tích phần hồng bằng mấy phần của 60 cm²? Em tính thế nào?"
          ],
          answer: { type: "num", value: 18 },
          twist: { q: "Nếu phần hồng có diện tích 24 cm² và chiếm 30% hình tròn thì diện tích cả hình tròn là bao nhiêu cm²?", answer: { type: "num", value: 80 } }
        },
        questions: [
          Q("10.1-01", "num", 1, "pct-to-decimal", "Write 32% as a decimal.", 0.32,
            ["Phần trăm nghĩa là bao nhiêu trên 100?", "32% = 32/100. Chia 32 cho 100 được mấy?", "Dời dấu phẩy sang trái hai chữ số."],
            "32% = 32/100 = 0,32."),
          Q("10.1-02", "num", 1, "pct-to-fraction", "Write 60% as a fraction in its simplest form.", "3/5",
            ["Viết 60% dưới dạng phân số trên 100.", "Tìm ước chung lớn nhất của 60 và 100.", "Chia cả tử và mẫu cho 20."],
            "60% = 60/100. Chia cả hai cho 20: 3/5."),
          Q("10.1-03", "num", 1, "decimal-to-pct", "Write 0.04 as a percentage (give the number only).", 4,
            ["0,04 bằng bao nhiêu phần trăm? Hãy nhân với 100.", "0,04 × 100 = ?", "0,04 = 4/100."],
            "0,04 = 4/100 = 4%.", { unitLabel: "%" }),
          Q("10.1-04", "num", 2, "fraction-to-pct", "Write 7/50 as a percentage (give the number only).", 14,
            ["Cần mẫu số bằng 100. 50 nhân với mấy ra 100?", "Nhân cả tử và mẫu với số đó.", "Tử số mới là phần trăm cần tìm."],
            "7/50 = 14/100 = 14%.", { unitLabel: "%" }),
          Q("10.1-05", "num", 2, "fraction-to-pct", "Write 7/20 as a percentage (give the number only).", 35,
            ["20 nhân với mấy thì bằng 100?", "Nhân cả tử và mẫu cho số đó: 7 × 5 = ?", "Viết kết quả trên 100."],
            "7/20 = 35/100 = 35%.", { unitLabel: "%" }),
          Q("10.1-06", "num", 2, "pct-of-amount", "A circle has area 90 cm². The pink region is 30% of the circle. What is the area of the pink region?", 27,
            ["30% viết thành số thập phân là mấy?", "Nhân 0,3 với 90.", "Hoặc dùng phân số: 3/10 của 90."],
            "30% = 0,3. 0,3 × 90 = 27 cm².", { unitLabel: "cm²" }),
          Q("10.1-07", "mc", 2, "pct-misconception", "Joshua writes 0.3 = 3%. What is 3% as a decimal?", 1,
            ["3% là 3 phần trên bao nhiêu?", "3/100 viết thành số thập phân có mấy chữ số sau dấu phẩy?", "So với 0,3 = 30/100, 0,3 đúng bằng bao nhiêu %?"],
            "3% = 3/100 = 0,03. Josh nhầm vì 0,3 = 30/100 = 30%, không phải 3%. Lỗi hay gặp: dời dấu phẩy chỉ một chữ số thay vì hai.",
            { choices: ["0.3", "0.03", "0.003", "3.0"] }),
          Q("10.1-08", "num", 3, "pct-of-amount", "A 5 by 5 square grid has 25 equal cells. The 4 corner cells are blue. The whole grid has area 75 cm². What is the area of the blue cells?", 12,
            ["Blue chiếm bao nhiêu phần trong 25 ô? Viết phân số.", "Diện tích mỗi ô là 75 ÷ 25 = ?", "Hoặc: 4/25 × 75."],
            "Mỗi ô có diện tích 75 ÷ 25 = 3 cm². 4 ô xanh: 4 × 3 = 12 cm². (4/25 = 16%; 0,16 × 75 = 12).", { unitLabel: "cm²" }),
          Q("10.1-09", "multi", 3, "equivalent-forms", "Which of these are equal to 3/5? (choose all)", [0, 1, 4],
            ["3/5 = ?/10 = ?/100. Đưa về mẫu số 100.", "60/100 là bao nhiêu phần trăm và bao nhiêu số thập phân?", "Kiểm tra 30/50 bằng cách rút gọn."],
            "3/5 = 6/10 = 60/100 = 60% = 0,6. 30/50 = 3/5 cũng đúng. 0,06 là 6% và 6% = 6/100, không bằng 3/5.",
            { choices: ["60%", "0.6", "0.06", "6%", "30/50"] }),
          Q("10.1-10", "num", 2, "pct-to-fraction", "Write 64% as a fraction in its simplest form. What is its denominator?", 25,
            ["Viết 64/100 rồi tìm ước chung của 64 và 100.", "Chia cả hai cho 4.", "64/100 = 16/25. Mẫu số là bao nhiêu? Còn rút gọn được không?"],
            "64/100 = 16/25 (chia cho 4). 16 và 25 không có ước chung lớn hơn 1, nên mẫu số tối giản là 25.", { howto: "Write 64% as a fully simplified fraction, then enter only its denominator (the bottom number)." })
        ]
      },
      {
        id: "10.2",
        title: "Percentages large and small",
        titleVi: "Phần trăm lớn và nhỏ",
        learn: [
          "Phần trăm có thể nhỏ hơn 1 hoặc lớn hơn 100. 0,5% = 0,5/100 = 0,005. 150% = 1,5 (lớn hơn một nguyên).",
          "Đổi % thập phân sang phân số: nhân tử và mẫu với 10 (hay 100...) để có số nguyên, rồi rút gọn. 17,5% = 17,5/100 = 175/1000 = 7/40.",
          "Muốn đổi % sang số thập phân luôn chia cho 100: 17,5% = 0,175; 0,5% = 0,005; 250% = 2,5.",
          "Tìm phần trăm của một phần: cho 5 đô cho Marcus trong 20 đô là 5/20 = 1/4 = 25%. Tổng các phần trăm của cả lượng luôn là 100%.",
          "Từ 5% có thể suy ra 100%: nếu 5% là 3,2 thì 1% là 0,64 và 100% là 64."
        ],
        example: {
          q: "Viết 17,5% dưới dạng số thập phân và phân số tối giản.",
          steps: ["Số thập phân: 17,5 ÷ 100 = 0,175", "Phân số: 17,5/100 = 175/1000", "Rút gọn: ÷5 được 35/200, ÷5 lần nữa được 7/40"],
          prompts: [
            "'Phần trăm' nghĩa là 'trên 100'. Muốn thành số thập phân em chia cho số nào?",
            "Viết 17,5% thành phân số mẫu 100, rồi làm sao để tử số không còn dấu phẩy?",
            "Rút gọn dần: em chia cả tử và mẫu cho ước chung nào trước?"
          ],
          answer: { type: "text", value: "0,175; 7/40", accept: ["0,175;7/40", "0.175;7/40", "0,175 và 7/40", "0.175 và 7/40", "0,175, 7/40", "0.175, 7/40"] },
          twist: { q: "Nếu là 12,5% thì phân số tối giản tương ứng là gì?", answer: { type: "num", value: "1/8" } }
        },
        questions: [
          Q("10.2-01", "num", 1, "pct-decimal", "Write 17.5% as a decimal.", 0.175,
            ["Phần trăm nghĩa là chia cho bao nhiêu?", "17,5 ÷ 100 = ?", "Dời dấu phẩy sang trái hai chữ số."],
            "17,5% = 17,5 ÷ 100 = 0,175."),
          Q("10.2-03", "num", 2, "pct-under-1", "Write 0.5% as a decimal.", 0.005,
            ["0,5% = 0,5/100. Chia 0,5 cho 100.", "Dời dấu phẩy hai chữ số sang trái, thêm số 0 nếu cần.", "Có phải là 0,05 hay 0,005?"],
            "0,5 ÷ 100 = 0,005."),
          Q("10.2-04", "num", 2, "pct-decimal-fraction", "Write 7.5% as a fraction in its simplest form.", "3/40",
            ["Viết 7,5/100. Làm sao để tử số thành số nguyên?", "Nhân cả tử và mẫu với 10: 75/1000.", "Rút gọn: chia cho 25."],
            "7,5/100 = 75/1000 = 3/40 (chia cho 25)."),
          Q("10.2-05", "num", 2, "pct-decimal-fraction", "Write 0.8% as a fraction in its simplest form.", "1/125",
            ["Viết 0,8/100.", "Nhân cả hai với 10: 8/1000.", "Rút gọn bằng cách chia cho 8."],
            "0,8/100 = 8/1000 = 1/125."),
          Q("10.2-06", "num", 2, "pct-of-whole", "Arun has $20. He gives $13 to Sofia. What percentage of his money does Sofia get?", 65,
            ["Sofia nhận bao nhiêu phần trong 20 đô? Viết phân số.", "13/20 = ?/100.", "20 × 5 = 100, nên nhân tử cho 5."],
            "13/20 = 65/100 = 65%.", { unitLabel: "%" }),
          Q("10.2-07", "num", 2, "pct-of-amount-small", "What is 0.5% of $300?", 1.5,
            ["0,5% = 0,005.", "0,005 × 300 = ?", "Hoặc: 1% của 300 là 3, vậy 0,5% là một nửa."],
            "1% của 300 là 3; 0,5% là một nửa: 1,5. Đáp án: $1,5.", { tol: 0.01, unitLabel: "$" }),
          Q("10.2-08", "mc", 2, "pct-misconception", "Which is 0.5% written as a decimal?", 2,
            ["Nhớ: % nghĩa là chia cho 100.", "50% bằng 0,5. 0,5% có nhỏ hơn 50% không?", "0,5 ÷ 100 = ?"],
            "0,5% = 0,5/100 = 0,005. Lỗi hay gặp: viết 0,5 (lẫn với 50%) hoặc 0,05 (chỉ dời một chữ số).",
            { choices: ["0.5", "0.05", "0.005", "5"] }),
          Q("10.2-09", "num", 3, "find-whole", "5% of a sum of money is $3.20. What is the whole sum?", 64,
            ["Nếu 5% là 3,2 thì 1% là bao nhiêu?", "3,2 ÷ 5 = 0,64.", "100% = 100 × 1%."],
            "1% = 3,2 ÷ 5 = 0,64. 100% = 0,64 × 100 = 64. Tổng là $64.", { unitLabel: "$" }),
          Q("10.2-10", "num", 3, "pct-over-100", "A price rises from $40 to $100. The new price is what percentage of the old price?", 250,
            ["Mới lớn hơn cũ bao nhiêu lần?", "100 ÷ 40 = ?", "Nhân kết quả với 100."],
            "100/40 = 2,5 = 250/100 = 250%. Giá mới bằng 250% giá cũ (tăng thêm 150%).", { howto: "Compare the new price with the old price. Enter the new price as a percentage of the old price (not the percentage increase).", unitLabel: "%" }),
          Q("10.2-11", "mc", 3, "pct-over-100", "Lan says: 'Since 120% of 50 means taking away part of 50, the answer must be less than 50.' Is Lan correct?", 1,
            ["100% của 50 là bao nhiêu?", "Nếu 120% lớn hơn 100%, kết quả lớn hơn hay nhỏ hơn 50?", "Tính 1,2 × 50."],
            "120% = 1,2 > 1 nên 120% của 50 = 60 > 50. Phần trăm lớn hơn 100 cho kết quả lớn hơn lượng ban đầu.",
            { choices: ["Yes, percentages always give less", "No, 120% of 50 is 60, more than 50", "No, it equals exactly 50", "Yes, because 120% is not allowed"] })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Tăng giảm phần trăm liên tiếp, lãi suất và tỉ lệ học sinh: những bài toán kinh điển đang chờ em ở chợ phiên!",
      questions: [
        Q("ch-01", "num", 2, "vn-up-down", "Một chiếc xe đạp giá 500 nghìn đồng được tăng giá 20%, sau đó giảm giá 20% (tính trên giá mới). Giá cuối cùng là bao nhiêu nghìn đồng?", 480,
          ["Sau khi tăng 20%, giá bằng bao nhiêu % giá cũ? Tính ra tiền.", "Giá mới là 600 nghìn. Giảm 20% của 600 là bao nhiêu?", "Giá cuối = 600 − 120. Có bằng 500 không?"],
          "Tăng 20%: 500 × 1,2 = 600. Giảm 20% của 600: 600 × 0,8 = 480. Giá cuối là 480 nghìn đồng, thấp hơn giá ban đầu vì 20% lần sau tính trên số lớn hơn.", Object.assign({ unitLabel: "nghìn đồng" }, V)),
        Q("ch-02", "num", 2, "vn-down-down", "Một chiếc áo giá 2000 nghìn đồng được giảm giá 10%, sau đó giảm thêm 10% nữa trên giá đã giảm. Giá cuối cùng là bao nhiêu nghìn đồng?", 1620,
          ["Sau lần giảm thứ nhất giá còn bao nhiêu % giá cũ?", "Giá sau lần 1 là 1800 nghìn. Giảm 10% của 1800 là bao nhiêu?", "1800 − 180 = ?"],
          "Lần 1: 2000 × 0,9 = 1800. Lần 2: 1800 × 0,9 = 1620. Hai lần giảm 10% không bằng giảm 20% (giảm 20% còn 1600).", Object.assign({ unitLabel: "nghìn đồng" }, V)),
        Q("ch-03", "num", 3, "vn-simple-interest", "Bác Hòa gửi 50 triệu đồng với lãi suất đơn 6% một năm. Sau 3 năm, tiền lãi bác nhận được là bao nhiêu triệu đồng? (lãi đơn: mỗi năm lãi tính trên số vốn ban đầu)", 9,
          ["6% của 50 triệu là bao nhiêu triệu (lãi một năm)?", "Lãi một năm là 3 triệu. Lãi suất đơn nên mỗi năm lãi như nhau.", "Nhân với 3 năm."],
          "Lãi một năm: 50 × 0,06 = 3 triệu. Ba năm: 3 × 3 = 9 triệu đồng.", Object.assign({ unitLabel: "triệu đồng" }, V)),
        Q("ch-04", "num", 2, "vn-class-pct", "Lớp 7A có 40 học sinh. Học sinh giỏi chiếm 35%, học sinh khá chiếm 45%, còn lại là học sinh trung bình. Có bao nhiêu học sinh trung bình?", 8,
          ["Tổng tỉ lệ giỏi và khá là bao nhiêu phần trăm?", "Trung bình chiếm 100% trừ phần đó là mấy %?", "Tính phần trăm đó của 40."],
          "Giỏi + khá = 80%, nên trung bình chiếm 20%. 20% của 40 = 8 học sinh.", V),
        Q("ch-05", "num", 3, "vn-class-pct", "Trong một lớp có 45 học sinh, số học sinh nam bằng 80% số học sinh nữ. Hỏi lớp có bao nhiêu học sinh nữ?", 25,
          ["Nếu số nữ là 100% thì số nam là bao nhiêu %?", "Tổng cả lớp bằng bao nhiêu % số nữ (100% + 80%)?", "180% số nữ = 45. Tìm 1% rồi 100%."],
          "Nam = 80% nữ nên cả lớp = 180% số nữ = 45. Số nữ = 45 ÷ 1,8 = 25 (nam 20).", V),
        Q("ch-06", "num", 3, "vn-original-price", "Sau khi được giảm giá 20%, một đôi giày có giá 240 nghìn đồng. Giá ban đầu của đôi giày là bao nhiêu nghìn đồng?", 300,
          ["Giá sau giảm là bao nhiêu % giá ban đầu?", "80% giá gốc = 240. 1% giá gốc là bao nhiêu?", "Nhân 1% với 100."],
          "Còn lại 100% − 20% = 80% giá gốc, nên giá gốc = 240 ÷ 0,8 = 300 nghìn đồng. Lỗi hay gặp: lấy 240 + 20% của 240 = 288.", Object.assign({ unitLabel: "nghìn đồng" }, V)),
        Q("ch-07", "mc", 3, "vn-up-down", "Giá một món hàng được tăng 50% rồi sau đó giảm 50% (trên giá đã tăng). So với giá ban đầu, giá cuối cùng như thế nào?", 1,
          ["Giả sử giá ban đầu là 100. Sau khi tăng 50% giá là bao nhiêu?", "Giảm 50% của 150 là bao nhiêu?", "So sánh giá cuối (75) với 100."],
          "Giả sử giá gốc 100: tăng 50% được 150; giảm 50% của 150 là 75 nên còn 75. Giá giảm 25% so với ban đầu. Lỗi hay gặp: nghĩ +50% − 50% = 0.",
          VC(["Bằng giá ban đầu", "Giảm 25% so với giá ban đầu", "Giảm 50% so với giá ban đầu", "Tăng 25% so với giá ban đầu"])),
        Q("ch-08", "num", 3, "vn-undo-pct", "Giá một mặt hàng vừa được tăng 25%. Hỏi phải giảm giá mới bao nhiêu phần trăm để trở về đúng giá ban đầu?", 20,
          ["Giả sử giá ban đầu 100. Sau tăng 25% là mấy?", "Từ 125 về 100 là giảm đi bao nhiêu?", "Tỉ số 25/125 là bao nhiêu phần trăm?"],
          "Giá gốc 100 → 125. Về 100 cần giảm 25 trên 125 = 1/5 = 20%.", Object.assign({ unitLabel: "%" }, V)),
        Q("ch-09", "num", 3, "vn-interest-rate", "Chị Mai gửi 40 triệu đồng lãi suất đơn. Sau 2 năm chị nhận cả vốn lẫn lãi là 44,8 triệu đồng. Lãi suất mỗi năm là bao nhiêu phần trăm?", 6,
          ["Tiền lãi sau 2 năm là bao nhiêu triệu?", "Lãi một năm là bao nhiêu (lãi chia 2)?", "Lãi một năm chiếm bao nhiêu phần trăm của 40 triệu?"],
          "Lãi 2 năm: 44,8 − 40 = 4,8 triệu. Lãi một năm: 2,4 triệu. 2,4/40 = 0,06 = 6% mỗi năm.", Object.assign({ unitLabel: "%" }, V)),
        Q("ch-10", "mc", 2, "vn-compare", "Số nào lớn nhất trong các số sau: 3/8; 37%; 0,365; 0,4?", 3,
          ["Đổi tất cả về số thập phân: 3/8 = ? (3 ÷ 8)", "37% = 0,37. So sánh 0,375; 0,37; 0,365; 0,4.", "So từng chữ số sau dấu phẩy, bắt đầu từ chữ số hàng phần mười."],
          "3/8 = 0,375; 37% = 0,37; 0,365; 0,4. Số lớn nhất là 0,4 (hàng phần mười là 4 lớn hơn 3).",
          VC(["3/8", "37%", "0,365", "0,4"]))
      ]
    },
    project: null
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "10.1-01": "pct-to-dec", "10.2-01": "pct-to-dec", "10.2-03": "pct-to-dec", "10.1-07": "pct-to-dec", "10.2-08": "pct-to-dec", "10.1-03": "dec-to-pct", "10.1-04": "frac-to-pct", "10.1-05": "frac-to-pct", "10.1-02": "pct-to-frac", "10.2-07": "pct-of", "10.2-06": "pct-share", "10.2-09": "pct-whole", "10.2-10": "pct-ratio" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 10; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
