(function () {
  var Q = function (id, type, diff, skill, q, ans, hints, explain, o) {
    o = o || {};
    return { id: id, type: type, diff: diff, skill: skill, source: o.source || 'book', lang: o.lang || 'en', q: q, svg: o.svg || null, choices: o.choices || null, answer: ans, accept: o.accept || [], tol: o.tol || 0, unitLabel: o.unitLabel || '', hints: hints, explain: explain, why: o.why || null, howto: o.howto || null };
  };
  var V = function (id, type, diff, skill, q, ans, hints, explain, o) {
    o = o || {}; o.source = 'vn'; o.lang = 'vi';
    return Q(id, type, diff, skill, q, ans, hints, explain, o);
  };
  // ratio helper: accepts "a:b" written with spaces or "a/b"-free variants
  var R = function (a) { return { accept: [a.replace(/:/g, ' : '), a.replace(/:/g, ' :'), a.replace(/:/g, ': ')] }; };

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 12,
    title: "Ratio and proportion",
    titleVi: "Tỉ số và tỉ lệ",
    strand: "Number",
    pages: [246, 261],
    realm: "Xưởng Pha Chế Hoàng Kim",
    emoji: "⚖️",
    story: "Ở xưởng pha chế của nhà giả kim, mọi công thức đều là một tỉ số: một phần bột vàng, hai phần nước suối. Pha sai tỉ lệ là bình thuốc hỏng! Em hãy học rút gọn tỉ số, chia theo tỉ số và dùng phương pháp 'về đơn vị' để nhân công thức lên đúng.",
    glossary: [
      { en: "ratio", vi: "tỉ số", def: "Cách so sánh hai hay nhiều số lượng, viết bằng dấu hai chấm, ví dụ 2 : 3." },
      { en: "simplest form", vi: "dạng tối giản", def: "Tỉ số mà các số không còn ước chung lớn hơn 1 và không có số thập phân hay phân số." },
      { en: "highest common factor", vi: "ước chung lớn nhất (ƯCLN)", def: "Số lớn nhất chia hết cả hai số; dùng để rút gọn tỉ số." },
      { en: "proportion", vi: "tỉ lệ / tỉ lệ thức", def: "Phần mà một đại lượng chiếm trong toàn bộ; hoặc hai tỉ số bằng nhau." },
      { en: "share in a ratio", vi: "chia theo tỉ số", def: "Chia một tổng thành các phần theo tỉ số cho trước." },
      { en: "unitary method", vi: "phương pháp về đơn vị", def: "Tìm giá trị của 1 đơn vị trước rồi nhân lên." },
      { en: "direct proportion", vi: "tỉ lệ thuận", def: "Đại lượng này gấp lên bao nhiêu lần thì đại lượng kia cũng gấp lên bấy nhiêu lần." }
    ],
    sections: [
      {
        id: "12.1", title: "Simplifying ratios", titleVi: "Rút gọn tỉ số",
        sims: [{ id: "paintmix", at: 0 }],
        learn: [
          "Tỉ số so sánh hai số lượng: 2 hạt đỏ và 6 hạt vàng cho tỉ số đỏ : vàng = 2 : 6.",
          "Rút gọn tỉ số: chia cả hai số cho ƯCLN. 2 : 6 = 1 : 3.",
          "Thứ tự rất quan trọng: tỉ số 'A so với B' viết A đứng trước. 1 : 4 khác 4 : 1.",
          "Nếu hai đại lượng cùng đơn vị thì bỏ đơn vị khi viết tỉ số; khác đơn vị thì đổi về cùng đơn vị trước.",
          "So sánh tỉ lệ: đổi về phần của tổng (ví dụ 2 : 3 nghĩa là 3/5 là phần thứ hai) hoặc đưa về cùng mẫu."
        ],
        example: {
          q: "Một mô hình xe cao 6 cm, xe thật cao 160 cm. Viết tỉ số chiều cao mô hình : xe thật ở dạng tối giản.",
          steps: ["Viết đúng thứ tự: 6 : 160 (cùng đơn vị cm nên bỏ đơn vị).", "ƯCLN của 6 và 160 là 2.", "Chia cả hai cho 2: 3 : 80."],
          prompts: [
            "Tỉ số 'mô hình : xe thật' thì số nào đứng trước? Hai chiều cao đã cùng đơn vị chưa?",
            "Để tối giản tỉ số, em tìm ước chung lớn nhất của hai số nào?",
            "Chia cả hai vế cho ước đó rồi viết tỉ số."
          ],
          answer: { type: "text", value: "3:80", accept: ["3 : 80", "3/80"] },
          twist: { q: "Nếu mô hình cao 6 cm với tỉ lệ 1 : 40 thì xe thật cao bao nhiêu cm?", answer: { type: "num", value: 240 } }
        },
        questions: [
          Q("12.1-01", "text", 1, "simplify-ratio", "Write 6 : 12 in its simplest form.", "1:2",
            ["Số nào lớn nhất chia hết cả 6 và 12?", "Chia cả hai số cho số đó.", "6 ÷ 6 = ?, 12 ÷ 6 = ?"], "ƯCLN(6, 12) = 6 nên 6 : 12 = 1 : 2.", R("1:2")),
          Q("12.1-02", "text", 1, "simplify-ratio", "Write 20 : 4 in its simplest form.", "5:1",
            ["ƯCLN của 20 và 4 là bao nhiêu?", "Chia cả hai số cho số đó.", "Giữ nguyên thứ tự: số 20 vẫn đứng trước."], "ƯCLN(20, 4) = 4 nên 20 : 4 = 5 : 1.", R("5:1")),
          Q("12.1-03", "text", 2, "simplify-ratio", "A model of a car is 8 cm high. The real car is 200 cm high. Write the ratio of the height of the model to the real car in its simplest form.", "1:25",
            ["Hai chiều cao có cùng đơn vị chưa?", "Viết 8 : 200, rồi tìm ƯCLN.", "8 ÷ 8 = ?, 200 ÷ 8 = ?"], "8 : 200, ƯCLN = 8, nên tỉ số = 1 : 25.", R("1:25")),
          Q("12.1-04", "text", 2, "simplify-ratio", "A recipe uses 45 ml of vinegar and 120 ml of oil. Write the ratio of vinegar to oil in its simplest form.", "3:8",
            ["Tỉ số giấm : dầu là 45 : 120. Hai số cùng chia hết cho số nào lớn nhất?", "ƯCLN của 45 và 120 là 15. Hãy chia.", "45 ÷ 15 = ?, 120 ÷ 15 = ?"], "ƯCLN(45, 120) = 15 nên 45 : 120 = 3 : 8.", R("3:8")),
          Q("12.1-05", "text", 2, "simplify-ratio", "A pastry recipe uses 200 g flour, 50 g margarine and 50 g lard. Write the ratio flour : margarine : lard in its simplest form.", "4:1:1",
            ["Viết tỉ số đầy đủ 200 : 50 : 50.", "Tìm ước chung lớn nhất của cả ba số.", "Chia cả ba số cho 50."], "ƯCLN = 50, nên 200 : 50 : 50 = 4 : 1 : 1.", R("4:1:1")),
          Q("12.1-06", "mc", 2, "order-ratio", "Helena says: 'The ratio of margarine to flour is 4 : 1' for the recipe with 200 g flour and 50 g margarine. What is the correct ratio of margarine to flour?", 0,
            ["Chữ nào nhắc trước trong 'margarine to flour'?", "Số của chữ đó phải đứng đầu tỉ số. Margarine là bao nhiêu gam?", "50 : 200 rút gọn ra bao nhiêu?"],
            "Margarine : flour = 50 : 200 = 1 : 4. Helena đã viết ngược thứ tự (4 : 1 là flour : margarine).",
            { choices: ["1 : 4", "4 : 1", "50 : 200 là tối giản", "1 : 5"] }),
          Q("12.1-07", "text", 3, "algebraic-ratio", "Write the ratio 20x : 15x in its simplest form.", "4:3",
            ["Cả hai số hạng đều chứa x. Ta có thể 'rút gọn x' không?", "Khi x được bỏ đi, còn 20 : 15.", "ƯCLN của 20 và 15 là 5."], "20x và 15x cùng chia cho 5x: 20x : 15x = 4 : 3.", R("4:3")),
          Q("12.1-08", "mc", 3, "compare-ratios", "Bryn mixes white and blue paint in the ratio 1 : 2. Alun mixes white and blue paint in the ratio 2 : 3. Who has the darker (bluer) paint?", 0,
            ["Tính phần blue trong tổng: Bryn có 2 phần blue trong tổng 3 phần.", "Alun có 3 phần blue trong tổng bao nhiêu phần?", "So sánh 2/3 với 3/5 (đưa về mẫu 15)."],
            "Bryn: blue chiếm 2/3 = 10/15. Alun: 3/5 = 9/15. Bryn xanh đậm hơn. Lỗi hay gặp: thấy 2 : 3 có số lớn hơn nên cho là đậm hơn.",
            { choices: ["Bryn", "Alun", "Giống nhau"] }),
          Q("12.1-09", "mc", 3, "compare-ratios", "Borrowdale golf club has 15 women and 60 men. Avondale golf club has 12 women and 56 men. Which club has the greater proportion of men?", 1,
            ["Tìm phần của nam trong tổng số hội viên ở mỗi câu lạc bộ.", "Borrowdale: 60 trên 75. Rút gọn được không? Avondale: 56 trên 68.", "So sánh 4/5 với 14/17 (nhân chéo)."],
            "Borrowdale: 60/75 = 4/5 = 0,8. Avondale: 56/68 = 14/17 ≈ 0,824. Avondale có tỉ lệ nam cao hơn. Lỗi hay gặp: so sánh số lượng nam (60 > 56).",
            { choices: ["Borrowdale", "Avondale", "Bằng nhau"] }),
          Q("12.1-10", "mc", 2, "compare-ratios", "Melania mixes orange juice and water in the ratio 2 : 5. Boris mixes them in the ratio 1 : 3. Who has the drink with the higher proportion of orange juice?", 0,
            ["Melania: juice chiếm bao nhiêu phần trong tổng 2 + 5?", "Boris: juice chiếm bao nhiêu phần trong tổng 1 + 3?", "So sánh 2/7 với 1/4."],
            "Melania: 2/7 ≈ 0,286. Boris: 1/4 = 0,25. Melania có nhiều nước cam hơn. Lỗi hay gặp: so sánh 2 : 5 với 1 : 3 như hai phân số 2/5 và 1/3 (bỏ qua tổng).",
            { choices: ["Melania", "Boris", "Như nhau"] })
        ]
      },
      {
        id: "12.2", title: "Sharing in a ratio", titleVi: "Chia theo tỉ số",
        learn: [
          "Bước 1: cộng các số trong tỉ số để biết tổng số phần.",
          "Bước 2: chia tổng cho tổng số phần để tìm giá trị một phần.",
          "Bước 3: nhân giá trị một phần với số phần của từng người.",
          "Kiểm tra: tổng các phần chia ra phải bằng số ban đầu.",
          "Nếu cần, rút gọn tỉ số trước để phép tính dễ hơn (ví dụ 80 : 40 = 2 : 1)."
        ],
        example: {
          q: "Chia 45 đô la cho Ethan và Julie theo tỉ số 1 : 4.",
          steps: ["Tổng số phần: 1 + 4 = 5.", "Một phần: 45 ÷ 5 = 9 đô la.", "Ethan: 1 × 9 = 9; Julie: 4 × 9 = 36.", "Kiểm tra: 9 + 36 = 45."],
          prompts: [
            "Tỉ số 1 : 4 gồm tất cả mấy phần bằng nhau?",
            "Biết 45 đô la ứng với tổng số phần đó, một phần là bao nhiêu đô la?",
            "Mỗi người nhận bao nhiêu phần? Nhân với giá trị một phần.",
            "Cộng hai số tiền vừa tìm: có đủ 45 đô la không?"
          ],
          answer: { type: "text", value: "9, 36", accept: ["9;36", "9 và 36", "9,36"] },
          twist: { q: "Nếu chia 45 đô la theo tỉ số 2 : 3 thì Ethan (phần 2) nhận bao nhiêu đô la?", answer: { type: "num", value: 18 } }
        },
        questions: [
          Q("12.2-01", "num", 1, "share-ratio", "Share $45 between Ethan and Julie in the ratio 1 : 4. How much does Julie get?", 36,
            ["Có tất cả bao nhiêu phần? (1 + 4)", "Một phần bằng bao nhiêu đô la? Lấy 45 chia cho tổng số phần.", "Julie có 4 phần."], "5 phần, mỗi phần 9 đô la. Julie: 4 × 9 = 36 đô la.", { unitLabel: "$" }),
          Q("12.2-02", "num", 1, "share-ratio", "Share $24 between Dong and Chul in the ratio 1 : 2. How much does Chul get?", 16,
            ["Tổng số phần là bao nhiêu?", "24 ÷ 3 = ? (một phần)", "Chul có 2 phần."], "3 phần, mỗi phần 8 đô la. Chul: 2 × 8 = 16 đô la.", { unitLabel: "$" }),
          Q("12.2-03", "num", 2, "share-ratio", "Share $65 between Dong and Chul in the ratio 1 : 4. How much does Chul get?", 52,
            ["1 + 4 = ?", "65 ÷ 5 = ? (một phần)", "Chul có 4 phần."], "5 phần, mỗi phần 13 đô la. Chul: 4 × 13 = 52 đô la.", { unitLabel: "$" }),
          Q("12.2-04", "num", 2, "share-ratio", "Share $48 between Dong and Chul in the ratio 3 : 1. How much does Dong get?", 36,
            ["Tổng số phần là bao nhiêu?", "Một phần bằng 48 ÷ 4 = ?", "Dong có 3 phần (số đầu tiên trong tỉ số)."], "4 phần, mỗi phần 12 đô la. Dong: 3 × 12 = 36 đô la.", { unitLabel: "$" }),
          Q("12.2-05", "num", 2, "share-ratio", "Share $64 between Dong and Chul in the ratio 7 : 1. How much does Chul get?", 8,
            ["Tổng số phần là 7 + 1 = ?", "Một phần bằng bao nhiêu? 64 ÷ 8", "Chul có 1 phần."], "8 phần, mỗi phần 8 đô la. Chul: 1 × 8 = 8 đô la.", { unitLabel: "$" }),
          Q("12.2-06", "num", 2, "share-ratio", "Share $35 between Lin and Kuan-yin in the ratio 2 : 3. How much does Kuan-yin get?", 21,
            ["Cộng các số trong tỉ số.", "35 ÷ 5 = ? (một phần)", "Kuan-yin có 3 phần."], "5 phần, mỗi phần 7 đô la. Kuan-yin: 3 × 7 = 21 đô la.", { unitLabel: "$" }),
          Q("12.2-07", "num", 3, "share-ratio", "Brad paid $80 and Lola paid $40 for a painting. They sell it for $630 and share the money in the same ratio as they paid. How much does Brad get?", 420,
            ["Tỉ số Brad : Lola là 80 : 40. Rút gọn được không?", "Rút gọn thành 2 : 1; tổng số phần là bao nhiêu? 630 ÷ 3 = ?", "Brad có 2 phần."], "80 : 40 = 2 : 1, tổng 3 phần, mỗi phần 630 ÷ 3 = 210. Brad: 2 × 210 = 420 đô la. (Rút gọn trước giúp tính nhẩm được.)", { unitLabel: "$" }),
          Q("12.2-08", "mc", 2, "share-ratio", "Share 40 sweets between two children in the ratio 3 : 2. How many sweets does the child with 3 parts get?", 1,
            ["Có tất cả bao nhiêu phần?", "Một phần bằng bao nhiêu kẹo?", "Nhân số phần của bạn đó với giá trị một phần."],
            "Tổng 5 phần, mỗi phần 8 kẹo. Bạn có 3 phần: 24 kẹo. Lỗi hay gặp: chia đôi (20 kẹo) hoặc lấy 40 ÷ 3.",
            { choices: ["20", "24", "30", "13"] }),
          Q("12.2-09", "num", 3, "share-ratio", "Three friends share $120 in the ratio 2 : 3 : 7. How much does the friend with the largest share get?", 70,
            ["Tổng số phần là bao nhiêu?", "120 ÷ 12 = ?", "Người có phần lớn nhất ứng với số 7."], "2 + 3 + 7 = 12 phần; mỗi phần 10 đô la. Lớn nhất: 7 × 10 = 70 đô la. Kiểm tra: 20 + 30 + 70 = 120.", { unitLabel: "$" }),
          Q("12.2-10", "num", 3, "share-ratio", "Share $72 between two people in the ratio 5 : 3. How much more does the larger share have than the smaller share?", 18,
            ["Có mấy phần tất cả? Mỗi phần là bao nhiêu?", "Hai người có bao nhiêu đô la mỗi người?", "Hoặc: hiệu số phần là 5 − 3 = 2 phần."], "8 phần, mỗi phần 9 đô la. 45 và 27 nên hiệu là 18 (cũng bằng 2 phần × 9).", { unitLabel: "$" })
        ]
      },
      {
        id: "12.3", title: "Using direct proportion", titleVi: "Tỉ lệ thuận (phương pháp về đơn vị)",
        learn: [
          "Hai đại lượng tỉ lệ thuận: đại lượng này gấp lên bao nhiêu lần thì đại lượng kia gấp lên bấy nhiêu lần.",
          "Phương pháp về đơn vị: chia để tìm giá trị của 1, rồi nhân lên.",
          "3 cuốn sách giá 12 đô la → 1 cuốn giá 12 ÷ 3 = 4 đô la → 10 cuốn giá 40 đô la.",
          "Công thức nấu ăn: nếu số lượng cần làm gấp 3 lần thì mọi nguyên liệu nhân 3.",
          "Không cộng thêm kiểu 'thêm 2 cuốn thì thêm 2 đô la': tỉ lệ thuận là nhân hoặc chia."
        ],
        example: {
          q: "Một công thức dùng 2 quả trứng cho 12 bánh. Cần bao nhiêu trứng cho 36 bánh?",
          steps: ["36 ÷ 12 = 3: số bánh gấp 3 lần.", "Vậy số trứng cũng gấp 3 lần: 2 × 3 = 6 quả."],
          prompts: [
            "Số bánh mới gấp mấy lần số bánh ban đầu?",
            "Nguyên liệu phải thay đổi cùng tỉ lệ đó: số trứng cần tính thế nào?"
          ],
          answer: { type: "num", value: 6 },
          twist: { q: "Nếu chỉ có 5 quả trứng thì làm được bao nhiêu bánh?", answer: { type: "num", value: 30 } }
        },
        questions: [
          Q("12.3-01", "num", 1, "unitary", "The mass of 3 bananas is 375 g. What is the mass of 8 bananas?", 1000,
            ["Một quả chuối nặng bao nhiêu gam?", "375 ÷ 3 = ?", "Nhân với 8."], "1 quả: 375 ÷ 3 = 125 g. 8 quả: 8 × 125 = 1000 g.", { unitLabel: "g" }),
          Q("12.3-02", "num", 1, "unitary", "Tom buys 2 bags of chips for $2.40. How much do 5 bags cost?", 6,
            ["Một túi giá bao nhiêu?", "2,40 ÷ 2 = ?", "Nhân giá một túi với 5."], "1 túi: 2,40 ÷ 2 = 1,20 đô la. 5 túi: 5 × 1,2 = 6 đô la.", { tol: 0.01, unitLabel: "$" }),
          Q("12.3-03", "num", 2, "unitary", "Joy exchanges USD 100 for ZAR 1400. How many ZAR can she get for 6 USD?", 84,
            ["1 USD đổi được bao nhiêu ZAR?", "1400 ÷ 100 = ?", "Nhân với 6."], "1 USD = 14 ZAR. 6 USD = 84 ZAR.", { unitLabel: "ZAR" }),
          Q("12.3-04", "num", 2, "unitary", "Ivan buys 4 shirts for $37.80. How much do 9 shirts cost?", 85.05,
            ["Giá một chiếc áo là bao nhiêu?", "37,80 ÷ 4 = ?", "Nhân giá một chiếc với 9."], "1 áo: 37,8 ÷ 4 = 9,45 đô la. 9 áo: 9 × 9,45 = 85,05 đô la.", { tol: 0.01, unitLabel: "$" }),
          Q("12.3-05", "num", 2, "unitary", "Dakri buys 7 tickets to a show for $112. How much do 3 tickets cost?", 48,
            ["Giá một vé là bao nhiêu?", "112 ÷ 7 = ?", "Nhân giá một vé với 3."], "1 vé: 112 ÷ 7 = 16 đô la. 3 vé: 48 đô la.", { unitLabel: "$" }),
          Q("12.3-06", "num", 2, "unitary", "A recipe uses 360 g of flour for 4 people. How much flour is needed for 3 people?", 270,
            ["Mỗi người cần bao nhiêu gam bột?", "360 ÷ 4 = ?", "Nhân với 3."], "1 người: 90 g. 3 người: 270 g.", { unitLabel: "g" }),
          Q("12.3-07", "num", 1, "scale-recipe", "A recipe uses 2 eggs to make 12 cupcakes. How many eggs are needed to make 36 cupcakes?", 6,
            ["36 gấp mấy lần 12?", "36 ÷ 12 = ?", "Nhân số trứng với số lần đó."], "36 ÷ 12 = 3 nên cần 2 × 3 = 6 quả trứng.", { unitLabel: "quả" }),
          Q("12.3-08", "mc", 2, "direct-proportion", "Three books cost $12. Anna says: 'Five books cost $14, because 3 + 2 = 5 books and $12 + $2 = $14.' What is the real cost of five books?", 1,
            ["Một cuốn sách giá bao nhiêu?", "12 ÷ 3 = ?", "Nhân giá một cuốn với 5."],
            "1 cuốn giá 4 đô la, 5 cuốn giá 20 đô la. Anna sai vì cộng thay vì nhân: thêm 2 cuốn phải thêm 2 × 4 = 8 đô la, không phải 2 đô la.",
            { choices: ["$14", "$20", "$60", "$17"] }),
          Q("12.3-09", "mc", 3, "best-buy", "Shop A sells 6 cans for $4.50. Shop B sells 10 cans for $7.20. Which shop gives the cheaper price per can?", 1,
            ["Giá một lon ở shop A là bao nhiêu? 4,50 ÷ 6.", "Giá một lon ở shop B là bao nhiêu? 7,20 ÷ 10.", "So sánh hai giá một lon."],
            "Shop A: 4,50 ÷ 6 = 0,75 đô la. Shop B: 7,20 ÷ 10 = 0,72 đô la. Shop B rẻ hơn. Lỗi hay gặp: chọn shop có tổng tiền thấp hơn.",
            { choices: ["Shop A", "Shop B", "Bằng nhau"] }),
          Q("12.3-10", "num", 3, "unitary", "A pancake recipe uses 250 ml of milk for 8 pancakes. How many pancakes can be made with 1 litre of milk (assume enough of everything else)?", 32,
            ["1 lít bằng bao nhiêu ml?", "1000 gấp mấy lần 250?", "Số bánh cũng gấp lên cùng số lần đó."], "1 lít = 1000 ml; 1000 ÷ 250 = 4, nên làm được 8 × 4 = 32 cái bánh.", { unitLabel: "cái" })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Chia tỉ lệ, tỉ lệ nghịch, dãy tỉ số bằng nhau và bản đồ: những bài toán kinh điển của lớp 6–7!",
      questions: [
        V("ch-01", "num", 2, "equal-ratios", "Cho x/3 = y/5 và x + y = 48. Tính y.", 30,
          ["Đặt x/3 = y/5 = k. Khi đó x, y bằng bao nhiêu k?", "x + y = 3k + 5k = 8k = 48, tìm k.", "y = 5k."], "x = 3k, y = 5k nên 8k = 48, k = 6, y = 30."),
        V("ch-02", "num", 3, "equal-ratios", "Cho 2a = 3b = 5c và a + b + c = 62. Tính a.", 30,
          ["Chia cả ba vế cho BCNN(2, 3, 5) = 30: a/15 = b/10 = c/6.", "Đặt a = 15k, b = 10k, c = 6k; tổng bằng bao nhiêu k?", "31k = 62, tìm k rồi tính a = 15k."], "Từ 2a = 3b = 5c chia cho 30 được a/15 = b/10 = c/6. 31k = 62, k = 2, a = 30 (b = 20, c = 12)."),
        V("ch-03", "num", 2, "direct-division", "Ba bạn góp vốn kinh doanh theo tỉ lệ 2 : 3 : 5 và tổng lãi là 6 triệu đồng chia theo tỉ lệ vốn. Bạn góp nhiều vốn nhất được chia bao nhiêu triệu đồng?", 3,
          ["Tổng số phần là bao nhiêu?", "Một phần lãi bằng bao nhiêu triệu? 6 ÷ 10", "Bạn góp nhiều nhất ứng với số 5."], "Tổng 10 phần, mỗi phần 0,6 triệu. Bạn góp nhiều nhất: 5 × 0,6 = 3 triệu.", { tol: 0.01, unitLabel: "triệu đồng" }),
        V("ch-04", "num", 3, "equal-ratios", "Một hình chữ nhật có chu vi 70 m, chiều dài và chiều rộng tỉ lệ với 4 : 3. Tính diện tích (m²).", 300,
          ["Nửa chu vi (dài + rộng) bằng bao nhiêu?", "Chia nửa chu vi theo tỉ lệ 4 : 3 để tìm dài và rộng.", "Diện tích = dài × rộng."], "Nửa chu vi 35 m; 4 + 3 = 7 phần, mỗi phần 5 m: dài 20 m, rộng 15 m. Diện tích = 300 m².", { unitLabel: "m²" }),
        V("ch-05", "num", 2, "inverse-proportion", "6 người làm xong một công việc trong 10 ngày. Hỏi 15 người (cùng năng suất) làm xong trong bao nhiêu ngày?", 4,
          ["Tổng công việc tính bằng 'người × ngày' là bao nhiêu?", "6 × 10 = 60.", "Chia 60 cho 15."], "Công việc: 6 × 10 = 60 (người-ngày). 60 ÷ 15 = 4 ngày.", { unitLabel: "ngày" }),
        V("ch-06", "num", 3, "inverse-proportion", "Một đội 15 công nhân dự định xong công việc trong 24 ngày. Sau khi làm được 6 ngày, có 5 công nhân nghỉ việc. Hỏi để hoàn thành nốt công việc, 10 công nhân còn lại phải làm thêm bao nhiêu ngày?", 27,
          ["Tổng công việc (người × ngày) là bao nhiêu? Đã làm được bao nhiêu?", "Còn lại: 15 × 24 − 15 × 6 = ?", "Chia phần còn lại cho 10 người."], "Tổng 15 × 24 = 360; đã làm 15 × 6 = 90; còn 270. 270 ÷ 10 = 27 ngày.", { unitLabel: "ngày" }),
        V("ch-07", "num", 2, "scale-map", "Quãng đường thực tế dài 150 km. Trên bản đồ tỉ lệ 1 : 2 000 000, quãng đường đó dài bao nhiêu cm?", 7.5,
          ["Đổi 150 km ra cm: 1 km = 100 000 cm.", "150 km = 15 000 000 cm.", "Chia cho 2 000 000."], "150 km = 15 000 000 cm; 15 000 000 ÷ 2 000 000 = 7,5 cm.", { tol: 0.01, unitLabel: "cm" }),
        V("ch-08", "num", 3, "inverse-proportion", "Một ô tô đi từ A đến B với vận tốc 40 km/giờ thì mất 3 giờ. Nếu đi với vận tốc 48 km/giờ thì mất bao nhiêu giờ?", 2.5,
          ["Quãng đường AB dài bao nhiêu km?", "40 × 3 = 120 km.", "Thời gian = quãng đường ÷ vận tốc mới."], "AB = 40 × 3 = 120 km. Với 48 km/giờ: 120 ÷ 48 = 2,5 giờ.", { tol: 0.01, unitLabel: "giờ" }),
        V("ch-09", "num", 3, "difference-ratio", "Hiệu của hai số bằng 24 và tỉ số của chúng là 7 : 4. Tìm số lớn.", 56,
          ["Số lớn gồm 7 phần, số bé 4 phần; hiệu là mấy phần?", "3 phần ứng với 24, vậy một phần bằng bao nhiêu?", "Số lớn = 7 phần."], "Hiệu 7 − 4 = 3 phần = 24 nên một phần là 8. Số lớn: 7 × 8 = 56 (số bé 32).", {}),
        V("ch-10", "num", 3, "equal-ratios", "Cho x : y = 3 : 4 và y : z = 2 : 5. Nếu z = 40 thì x bằng bao nhiêu?", 12,
          ["Đưa x : y và y : z về cùng một giá trị của y: nhân x : y = 3 : 4 với 2.", "x : y = 6 : 8 và y : z = 8 : 20 (nhân 4). Vậy x : y : z = ?", "Với z = 20 phần tương ứng 40, một phần bằng bao nhiêu?"], "x : y : z = 6 : 8 : 20. z = 40 là 20 phần nên một phần là 2; x = 6 × 2 = 12.")
      ]
    },
    project: null
  });
})();
