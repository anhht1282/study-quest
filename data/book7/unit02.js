(function () {
  // Helper: builds a Question object exactly as in DATA_SCHEMA.md.
  // For text answers, minus-sign variants (- and −) are added to `accept` automatically.
  function Q(id, type, diff, skill, source, q, answer, hints, explain, o) {
    o = o || {};
    var accept = o.accept || [];
    if (type === "text") {
      var all = accept.concat([answer]);
      accept = all.concat(all.map(function (s) { return s.replace(/-/g, "−"); }));
    }
    return {
      id: id, type: type, diff: diff, skill: skill, source: source,
      lang: source === "vn" ? "vi" : "en",
      q: q, svg: o.svg || null, choices: o.choices || null, answer: answer,
      accept: accept, tol: o.tol || 0, unitLabel: o.unitLabel || "",
      hints: hints, explain: explain, why: o.why || null, howto: o.howto || null
    };
  }
  var B = "book", V = "vn";

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 2,
    title: "Expressions, formulae and equations",
    titleVi: "Biểu thức, công thức và phương trình",
    strand: "Algebra",
    pages: [32, 61],
    realm: "Rừng Chữ Bí Ẩn",
    emoji: "🌲",
    story: "Giữa Rừng Chữ Bí Ẩn, mỗi cánh cổng đá khắc một chữ cái thay cho con số chưa biết. Người giữ rừng chỉ mở cổng cho ai biết viết biểu thức, rút gọn, mở ngoặc và giải phương trình. Đại số là bản đồ để em tìm lối ra!",
    glossary: [
      { en: "expression", vi: "biểu thức", def: "Gồm số và chữ nhưng không có dấu bằng, ví dụ 5n + 4." },
      { en: "equation", vi: "phương trình", def: "Có số, chữ và dấu bằng, ví dụ 5n + 4 = 19." },
      { en: "term", vi: "hạng tử", def: "Từng phần được cộng hoặc trừ trong biểu thức: 5n và 4 là hai hạng tử." },
      { en: "coefficient", vi: "hệ số", def: "Số nhân với biến: trong 5n, hệ số là 5." },
      { en: "variable / unknown", vi: "biến / ẩn số", def: "Chữ cái đại diện cho một số có thể thay đổi hoặc chưa biết." },
      { en: "formula", vi: "công thức", def: "Quy tắc diễn tả mối liên hệ giữa các đại lượng, ví dụ A = l × w." },
      { en: "substitute", vi: "thay số", def: "Thay chữ bằng giá trị số rồi tính." },
      { en: "like terms", vi: "các hạng tử đồng dạng", def: "Các hạng tử có cùng phần chữ, như 3x và 5x; chỉ những hạng tử này mới cộng trừ được với nhau." },
      { en: "expand", vi: "khai triển (mở ngoặc)", def: "Nhân số ngoài ngoặc với từng hạng tử bên trong ngoặc." },
      { en: "inequality", vi: "bất đẳng thức", def: "Dùng < hoặc > để chỉ một khoảng số, ví dụ x > 4." }
    ],
    sections: [
      {
        id: "2.1", title: "Constructing expressions", titleVi: "Lập biểu thức",
        learn: [
          "Chữ cái có thể thay cho một số chưa biết. Biểu thức có số và chữ nhưng không có dấu bằng; phương trình thì có dấu bằng.",
          "Trong 5n + 4 có hai hạng tử là 5n và 4. Số 5 là hệ số của n, còn 4 là hằng số.",
          "5n nghĩa là 5 × n. Luôn viết số trước chữ: viết 3x chứ không viết x3.",
          "\"Gấp đôi\" là × 2, \"một nửa\" là ÷ 2 và viết x ÷ 2 thành x/2.",
          "Hai biểu thức bằng nhau với mọi giá trị của chữ gọi là tương đương: 5n + 4 giống 4 + 5 × n."
        ],
        example: {
          q: "Mathew x tuổi. David hơn Mathew 4 tuổi, Adam kém Mathew 2 tuổi, Kathryn gấp 3 lần tuổi Mathew, Ella bằng một nửa tuổi Mathew. Viết biểu thức tuổi mỗi người.",
          steps: ["David: x + 4 (hơn 4 tuổi nên cộng 4).", "Adam: x − 2. Kathryn: 3x (viết số trước chữ).", "Ella: x/2 (một nửa là chia cho 2)."],
          prompts: [
            "'Hơn 4 tuổi' nghĩa là David lớn hơn hay nhỏ hơn Mathew? Em dùng phép tính nào với x?",
            "'Kém 2 tuổi' thì dùng phép nào? Còn 'gấp 3 lần' thì sao, và viết số với chữ thế nào cho gọn?",
            "'Một nửa' của một số tương đương với chia hay nhân cho mấy?"
          ],
          answer: { type: "text", value: "x+4, x−2, 3x, x/2", accept: ["x+4;x-2;3x;x/2", "x+4,x-2,3x,x/2", "x+4, x-2, 3x, 0,5x", "x+4;x-2;3x;0,5x", "x+4,x-2,3x,0,5x", "x+4,x-2,3x,1/2x"] },
          twist: { q: "Nếu Mathew 10 tuổi thì tổng tuổi cả năm người là bao nhiêu?", answer: { type: "num", value: 67 } }
        },
        questions: [
          Q("2.1-01", "text", 1, "write-expression", B, "Sofia has a bag with n counters. She puts in two more counters. Write an expression for the number of counters in the bag.", "n+2",
            ["Thêm vào thì số kẹo trong túi tăng hay giảm?", "Phép tính nào biểu diễn \"thêm 2\" vào n?", "Viết n và 2 nối với nhau bằng phép tính đó."],
            "Thêm 2 counters thì cộng 2: n + 2.", { accept: ["2+n"] }),
          Q("2.1-02", "text", 1, "write-expression", B, "Sofia has n counters. This time she takes out three counters. Write an expression for the number left.", "n-3",
            ["Lấy ra thì số counters tăng hay giảm?", "Phép tính nào diễn tả \"lấy bớt 3\"?", "Viết n và 3 nối bằng phép tính đó."],
            "Lấy ra 3 thì trừ 3: n − 3.", { accept: ["n−3"] }),
          Q("2.1-03", "text", 1, "write-expression", B, "The temperature on Tuesday was t °C. Write an expression for a temperature that is twice as warm.", "2t",
            ["\"Gấp đôi\" là phép tính nào với t?", "Viết 2 × t gọn lại theo quy tắc \"số trước, chữ sau\".", "Em được biểu thức gồm hai ký tự nào?"],
            "Gấp đôi là nhân 2, và 2 × t viết gọn là 2t.", { accept: ["t*2", "2*t", "t×2", "2×t"] }),
          Q("2.1-04", "text", 2, "write-expression", B, "The temperature on Tuesday was t °C. Write an expression for a temperature that is half as warm.", "t/2",
            ["\"Một nửa\" là phép chia cho số mấy?", "Viết t ÷ 2 dưới dạng phân số.", "Tử số là gì, mẫu số là gì?"],
            "Một nửa là chia 2: t ÷ 2 = t/2.", { accept: ["t÷2", "(1/2)t", "0.5t", "1/2t", "1/2 t"] }),
          Q("2.1-05", "text", 2, "i-think-of-a-number", B, "I think of a number x. I multiply it by 4, then subtract 9. Write an expression for the result.", "4x-9",
            ["Bước đầu tiên em làm với x là gì?", "Viết kết quả bước đầu gọn nhất.", "Rồi trừ 9 khỏi kết quả đó."],
            "Nhân 4: 4x. Trừ 9: 4x − 9.", { accept: ["4x−9", "4*x-9", "-9+4x"] }),
          Q("2.1-06", "text", 2, "i-think-of-a-number", B, "I think of a number x. I multiply it by 2, then subtract the result from 25. Write an expression.", "25-2x",
            ["Nhân x với 2 được biểu thức nào?", "\"Trừ kết quả từ 25\" nghĩa là lấy số nào trừ số nào?", "Số 25 đứng trước hay sau dấu trừ?"],
            "Kết quả sau khi nhân là 2x. Lấy 25 trừ đi 2x nên viết 25 − 2x (khác với 2x − 25).", { accept: ["25−2x"] }),
          Q("2.1-07", "mc", 2, "write-expression-misconception", B, "T-shirts cost $t each and shirts cost $s each. Which expression gives the total cost of four T-shirts and two shirts?", 0,
            ["Giá của 4 chiếc áo phông viết thế nào?", "Giá của 2 chiếc sơ mi viết thế nào?", "Muốn tổng thì nối hai kết quả bằng phép tính nào?"],
            "4 áo phông giá 4t, 2 sơ mi giá 2s, nên tổng là 4t + 2s. Đáp án 2t + 4s đổi chỗ số lượng, còn 6ts hay 4t × 2s là nhân thay vì cộng.",
            { choices: ["4t + 2s", "2t + 4s", "6ts", "4t × 2s"] }),
          Q("2.1-08", "mc", 3, "equivalent-expressions", B, "Which of these expressions is NOT equivalent to 2n + 3?", 2,
            ["Thử n = 2 vào biểu thức gốc 2n + 3.", "Thử n = 2 vào từng đáp án và so sánh.", "Đáp án nào cho kết quả khác?"],
            "Với n = 2: 2n + 3 = 7. 3 + 2 × n = 7; n × 2 + 3 = 7; 3 + n + n = 7; nhưng 2 + 3n = 8. Vậy 2 + 3n không tương đương. (Chú ý: với n = 1 cả hai đều bằng 5, nên một giá trị thử chưa đủ để kết luận.)",
            { choices: ["3 + 2 × n", "n × 2 + 3", "2 + 3n", "3 + n + n"] }),
          Q("2.1-09", "text", 3, "write-expression", B, "Mathew is x years old. Ella is half his age and David is 4 years older than Mathew. Write, as simply as you can, an expression for Ella's age plus David's age.", "3x/2+4",
            ["Tuổi Ella và tuổi David lần lượt là gì?", "Cộng hai biểu thức đó lại.", "x/2 + x gộp lại bằng mấy x? (x là 2/2 x)."],
            "Ella: x/2. David: x + 4. Tổng: x/2 + x + 4 = 3x/2 + 4 (hay 1,5x + 4).",
            { accept: ["x/2+x+4", "x/2+(x+4)", "1.5x+4", "(3x)/2+4", "x+4+x/2", "4+3x/2", "4+1.5x", "3/2x+4", "(3/2)x+4"] })
        ]
      },
      {
        id: "2.2", title: "Using expressions and formulae", titleVi: "Dùng biểu thức và công thức",
        learn: [
          "Công thức là quy tắc nối hai đại lượng. Ví dụ: số ngày = 7 × số tuần, viết là d = 7w.",
          "Thay số: thế chữ bằng số rồi tính. Với 2w − 3v khi w = 12, v = 5: 2 × 12 − 3 × 5 = 24 − 15 = 9.",
          "Nhớ thứ tự phép tính: nhân chia trước, cộng trừ sau.",
          "x/5 nghĩa là x ÷ 5.",
          "Có thể dùng phép ngược để tìm đại lượng chưa biết: nếu V = IR thì I = V ÷ R."
        ],
        example: {
          q: "Tính 2w − 3v khi w = 12 và v = 5.",
          steps: ["Thay số: 2 × 12 − 3 × 5.", "Nhân trước: 24 − 15.", "= 9."],
          prompts: [
            "Mỗi chữ cái phải được thay bằng số tương ứng; phép nhân giữa số và chữ viết lại thế nào?",
            "Theo thứ tự thực hiện phép tính, em làm nhân hay trừ trước?",
            "Còn lại một phép trừ giữa hai số: kết quả cuối cùng là bao nhiêu?"
          ],
          answer: { type: "num", value: 9 },
          twist: { q: "Nếu đổi chỗ giá trị, w = 5 và v = 12, thì 2w − 3v bằng bao nhiêu?", answer: { type: "num", value: -26 } }
        },
        questions: [
          Q("2.2-01", "num", 1, "substitute", B, "Work out x + 9 when x = 13.", 22,
            ["Thay x bằng số nào?", "Viết lại: 13 + 9.", "Tính tổng."], "13 + 9 = 22."),
          Q("2.2-02", "num", 1, "substitute", B, "Work out x/5 when x = 40.", 8,
            ["x/5 nghĩa là phép chia nào?", "Viết 40 ÷ 5.", "Tính kết quả."], "x/5 = 40 ÷ 5 = 8."),
          Q("2.2-03", "num", 2, "substitute-two", B, "Work out 2w − 3v when w = 12 and v = 5.", 9,
            ["Thay w = 12 và v = 5 vào: 2 × 12 − 3 × 5.", "Nhân trước hay trừ trước?", "Tính 24 − 15."], "2 × 12 = 24 và 3 × 5 = 15, nên 24 − 15 = 9."),
          Q("2.2-04", "num", 2, "substitute-two", B, "Work out ab − c when a = 9, b = 8 and c = 32.", 40,
            ["ab nghĩa là phép tính nào giữa a và b?", "Tính 9 × 8.", "Trừ 32."], "ab = 9 × 8 = 72; 72 − 32 = 40."),
          Q("2.2-05", "num", 2, "substitute-fraction", B, "Work out 30/c − 2 when c = 6.", 3,
            ["30/c nghĩa là 30 ÷ c.", "Tính 30 ÷ 6.", "Rồi trừ 2."], "30 ÷ 6 = 5, rồi 5 − 2 = 3."),
          Q("2.2-06", "num", 2, "substitute-fraction", B, "Work out (x + y)/2 when x = 19 and y = 11.", 15,
            ["Tính trên tử trước: x + y = ?", "Rồi chia kết quả cho 2.", "30 ÷ 2 = ?"], "x + y = 30, và 30 ÷ 2 = 15 (đây chính là trung bình cộng của x và y)."),
          Q("2.2-07", "num", 2, "formula", B, "Sanjay is paid $9 per hour and uses the formula T = 9h. Work out T when h = 30.", 270,
            ["Chữ h và T có thể là gì?", "Thay h = 30 vào 9h: 9 × 30.", "Tính tích."], "T = 9 × 30 = 270 (đô la).", { unitLabel: "$" }),
          Q("2.2-08", "num", 2, "inverse-formula", B, "In V = IR, work out R when V = 40 and I = 5.", 8,
            ["IR nghĩa là I × R. Vậy 40 = 5 × R.", "Phép ngược của nhân là phép nào?", "Tính 40 ÷ 5."], "40 = 5 × R nên R = 40 ÷ 5 = 8."),
          Q("2.2-09", "mc", 3, "formula-meaning", B, "Mateo cuts a small piece of wire off a large piece and uses W = p − q to find the wire left. Which meaning of p and q makes sense?", 0,
            ["Dây còn lại phải nhỏ hơn hay lớn hơn dây ban đầu?", "Khi đó p (số bị trừ) phải là dây dài hay dây ngắn?", "Phần cắt đi ứng với số nào trong phép trừ?"],
            "Dây còn lại = dây ban đầu − phần cắt đi, nên p là chiều dài cả dây, q là phần bị cắt. Nếu đảo ngược thì W âm, vô lý.",
            { choices: ["p = length of the large piece, q = length of the small piece cut off", "p = length of the small piece, q = length of the large piece", "p and q can mean either piece, it does not matter"] }),
          Q("2.2-10", "num", 3, "equal-expressions", B, "What value of k gives the same answer in all three expressions k + 10, 3k and 20 − k?", 5,
            ["Thử k = 1, 2, 3: ba biểu thức có bằng nhau không?", "Biểu thức 3k tăng nhanh, 20 − k giảm. Chúng có thể gặp nhau ở đâu?", "Kiểm tra k = 5 với cả ba biểu thức."],
            "Với k = 5: k + 10 = 15, 3k = 15, 20 − k = 15. Ba giá trị bằng nhau, vậy k = 5.")
        ]
      },
      {
        id: "2.3", title: "Collecting like terms", titleVi: "Rút gọn các hạng tử đồng dạng",
        learn: [
          "Hạng tử đồng dạng có cùng phần chữ: 2x và 3x đồng dạng, còn 2x và 3y thì không.",
          "Chỉ cộng trừ được các hạng tử đồng dạng: 2x + 3x = 5x, 7y − 2y = 5y.",
          "x nghĩa là 1x. Vậy 5x − x = 4x.",
          "xy và yx là một: thứ tự các chữ không quan trọng, nên 4xy + 3yx = 7xy.",
          "Cách viết gọn: a (không viết 1a), 2a (không viết a + a hay 2 × a), ab, a/b, a², a³."
        ],
        example: {
          q: "Rút gọn 4p + 3q + 2p − q.",
          steps: ["Gom p: 4p + 2p = 6p.", "Gom q: 3q − q = 2q.", "6p và 2q không đồng dạng nên dừng lại: 6p + 2q."],
          prompts: [
            "Trong biểu thức có những loại hạng tử nào? Hạng tử nào cùng loại với 4p?",
            "Làm tương tự với các hạng tử chứa q, chú ý −q thật ra có hệ số −1.",
            "Có thể gộp hạng tử chứa p với hạng tử chứa q được không? Vì sao?"
          ],
          answer: { type: "text", value: "6p+2q", accept: ["2q+6p"] },
          twist: { q: "Nếu đề là 4p + 3q + 2p − 3q thì kết quả rút gọn là gì?", answer: { type: "text", value: "6p" } }
        },
        questions: [
          Q("2.3-01", "text", 1, "collect-like-terms", B, "Simplify 2y + 4y.", "6y", ["2y và 4y có cùng phần chữ không?", "Cộng hai hệ số 2 và 4.", "Giữ nguyên chữ y."], "2 + 4 = 6 nên 2y + 4y = 6y."),
          Q("2.3-02", "text", 1, "collect-like-terms", B, "Simplify 8g + 5g + g.", "14g", ["g có hệ số bằng mấy?", "Cộng 8 + 5 + 1.", "Giữ chữ g."], "g = 1g, nên 8 + 5 + 1 = 14: 14g."),
          Q("2.3-03", "text", 1, "collect-like-terms", B, "Simplify 8n − n.", "7n", ["n có hệ số bằng mấy?", "Tính 8 − 1.", "Giữ chữ n."], "8n − 1n = 7n."),
          Q("2.3-04", "text", 2, "collect-like-terms", B, "Simplify 4p + 3q + 2p − q.", "6p+2q", ["Gom các hạng tử chứa p trước.", "Gom các hạng tử chứa q: 3q − q.", "Hai kết quả có đồng dạng không? Có gộp được nữa không?"], "4p + 2p = 6p và 3q − q = 2q. Vì 6p và 2q không đồng dạng nên kết quả là 6p + 2q.", { accept: ["2q+6p"] }),
          Q("2.3-05", "text", 2, "collect-like-terms", B, "Simplify 5t + 7 − 3t + 3.", "2t+10", ["Gom các hạng tử chứa t: 5t − 3t.", "Gom các hằng số: 7 + 3.", "Kết quả có gộp thêm được không?"], "5t − 3t = 2t và 7 + 3 = 10; 2t và 10 không đồng dạng. Kết quả 2t + 10.", { accept: ["10+2t"] }),
          Q("2.3-06", "text", 2, "collect-like-terms", B, "Simplify 7r + 2s + 3t − 2r + s + 2t.", "5r+3s+5t", ["Có mấy loại chữ khác nhau?", "Gom từng loại: r, s, t.", "Viết ba kết quả nối bằng dấu cộng."], "r: 7r − 2r = 5r. s: 2s + s = 3s. t: 3t + 2t = 5t. Kết quả 5r + 3s + 5t.", { accept: ["5r+5t+3s", "3s+5r+5t", "3s+5t+5r", "5t+5r+3s", "5t+3s+5r"] }),
          Q("2.3-07", "text", 2, "collect-like-terms", B, "Simplify 4xy + 3yx.", "7xy", ["xy và yx có phải là cùng một hạng tử không?", "Thứ tự nhân có thay đổi kết quả không (ví dụ 2 × 3 và 3 × 2)?", "Cộng hai hệ số 4 và 3."], "yx = xy vì phép nhân giao hoán, nên 4xy + 3xy = 7xy.", { accept: ["7yx"] }),
          Q("2.3-08", "mc", 2, "collect-misconception", B, "Which is the simplest form of 5a + 3b − 2a?", 0, ["Hạng tử nào chứa a? Hạng tử nào chứa b?", "Có cộng được 3b với số hạng chứa a không?", "Chỉ gom phần a: 5a − 2a bằng mấy?"], "5a − 2a = 3a; 3b không đồng dạng nên giữ nguyên: 3a + 3b. Các đáp án 6ab hay 3ab sai vì nhầm cộng hai chữ khác nhau thành tích.", { choices: ["3a + 3b", "6ab", "6b", "3ab"] }),
          Q("2.3-09", "text", 3, "collect-two-letter", B, "Dai simplified 3bc + 5bd − 2bc + 3db incorrectly. Write the correct simplest form.", "bc+8bd", ["Hạng tử nào có chữ bc? Hạng tử nào có chữ bd (hay db)?", "Gom bc: 3bc − 2bc.", "Gom bd: 5bd + 3db (nhớ db = bd)."], "3bc − 2bc = bc (hệ số 1, không viết số 1). 5bd + 3db = 8bd. Kết quả: bc + 8bd.", { howto: "Do not copy Dai's answer: simplify 3bc + 5bd − 2bc + 3db yourself and enter the correct simplest form.", accept: ["8bd+bc", "bc+8db", "8db+bc"] }),
          Q("2.3-10", "text", 3, "add-algebraic-fractions", B, "Simplify 3a/4 + 5a/12 as far as possible.", "7a/6", ["Hai mẫu 4 và 12: mẫu chung nhỏ nhất là gì?", "Đổi 3a/4 thành phân số có mẫu 12.", "Cộng tử, rồi rút gọn bằng cách chia cho ƯCLN."], "3a/4 = 9a/12. Cộng: 9a/12 + 5a/12 = 14a/12 = 7a/6 (chia tử và mẫu cho 2).", { accept: ["(7a)/6", "7a÷6", "7/6a", "(7/6)a", "7a/6"] })
        ]
      },
      {
        id: "2.4", title: "Expanding brackets", titleVi: "Mở ngoặc",
        learn: [
          "Mở ngoặc: nhân số bên ngoài với từng hạng tử bên trong. 4(n + 3) = 4n + 12.",
          "Gặp dấu trừ thì nhân cả dấu: 2(x − 5) = 2x − 10.",
          "Bên trong ngoặc có thể có nhiều hạng tử: 3(2g + h − 7) = 6g + 3h − 21.",
          "Có thể dùng bảng nhân hoặc cung nhân để khỏi quên hạng tử nào.",
          "Sau khi mở ngoặc, nhớ gom các hạng tử đồng dạng: 4(x + 7) − 1 = 4x + 28 − 1 = 4x + 27."
        ],
        example: {
          q: "Khai triển và rút gọn 5(2x + 4) − 12.",
          steps: ["5 × 2x = 10x và 5 × 4 = 20 nên được 10x + 20 − 12.", "Gom hằng số: 20 − 12 = 8.", "Kết quả: 10x + 8."],
          prompts: [
            "Số 5 đứng ngoài ngoặc phải nhân với những hạng tử nào bên trong?",
            "Sau khi bỏ ngoặc còn hai số hạng tự do (không chứa chữ), em xử lý chúng thế nào?",
            "Ghép phần chứa x và phần hằng số: biểu thức cuối cùng là gì?"
          ],
          answer: { type: "text", value: "10x+8", accept: ["8+10x"] },
          twist: { q: "Nếu đề là 5(2x + 4) + 12 thì kết quả rút gọn là gì?", answer: { type: "text", value: "10x+32", accept: ["32+10x"] } }
        },
        questions: [
          Q("2.4-01", "text", 1, "expand", B, "Expand 4(n + 3).", "4n+12", ["Số 4 phải nhân với những hạng tử nào trong ngoặc?", "4 × n bằng gì, 4 × 3 bằng gì?", "Nối hai kết quả bằng dấu cộng."], "4 × n = 4n và 4 × 3 = 12, vậy 4n + 12."),
          Q("2.4-02", "text", 1, "expand", B, "Expand 2(x − 5).", "2x-10", ["Có dấu gì trước số 5?", "2 × 5 bằng bao nhiêu?", "Kết quả phải trừ hay cộng số vừa tìm?"], "2 × x = 2x và 2 × 5 = 10; dấu trừ giữ nguyên: 2x − 10."),
          Q("2.4-03", "text", 2, "expand", B, "Expand 3(2g + h − 7).", "6g+3h-21", ["Trong ngoặc có mấy hạng tử?", "Nhân 3 lần lượt với 2g, h và 7.", "Giữ nguyên dấu trước mỗi hạng tử."], "3 × 2g = 6g, 3 × h = 3h, 3 × 7 = 21 (có dấu trừ): 6g + 3h − 21.", { accept: ["6g-21+3h", "3h+6g-21", "3h-21+6g", "-21+6g+3h", "-21+3h+6g"] }),
          Q("2.4-04", "text", 2, "expand", B, "Expand 7(6c − 7h).", "42c-49h", ["7 × 6c bằng bao nhiêu?", "7 × 7h bằng bao nhiêu?", "Giữ dấu trừ giữa hai kết quả."], "7 × 6c = 42c và 7 × 7h = 49h, vậy 42c − 49h.", { accept: ["-49h+42c"] }),
          Q("2.4-05", "text", 2, "expand-simplify", B, "Expand and simplify 4(x + 7) − 1.", "4x+27", ["Mở ngoặc trước: 4(x + 7) = ?", "Rồi trừ 1.", "Gom hằng số 28 và −1."], "4(x + 7) = 4x + 28; 4x + 28 − 1 = 4x + 27.", { accept: ["27+4x"] }),
          Q("2.4-06", "text", 2, "expand-simplify", B, "Expand and simplify 7(x + 3) + 5x.", "12x+21", ["Mở ngoặc 7(x + 3).", "Hạng tử nào đồng dạng với 5x?", "Cộng 7x và 5x."], "7(x + 3) = 7x + 21; 7x + 5x = 12x. Kết quả 12x + 21.", { accept: ["21+12x"] }),
          Q("2.4-07", "mc", 2, "expand-misconception", B, "Expand 3(2 − 5x). Which answer is correct?", 0, ["3 phải nhân với những hạng tử nào trong ngoặc?", "Hạng tử thứ hai của ngoặc là −5x hay +5x?", "3 × (−5x) có dấu gì?"], "3 × 2 = 6 và 3 × (−5x) = −15x, nên 6 − 15x. Bethan viết 6 + 15x vì bỏ quên dấu trừ.", { choices: ["6 − 15x", "6 + 15x", "6 − 5x", "5 − 5x"] }),
          Q("2.4-08", "mc", 3, "equivalent-expansion", B, "Arun expands four expressions: 2(12x + 15), 3(10 + 8x), 4(6x + 26) and 6(5 + 4x). Which one gives a different result from the other three?", 2, ["Mở từng ngoặc một.", "Ba biểu thức đầu và cuối cho kết quả có dạng nào?", "Biểu thức nào có hằng số khác 30?"], "2(12x + 15) = 24x + 30; 3(10 + 8x) = 30 + 24x; 6(5 + 4x) = 30 + 24x; nhưng 4(6x + 26) = 24x + 104. Arun nói sai.", { choices: ["2(12x + 15)", "3(10 + 8x)", "4(6x + 26)", "6(5 + 4x)"] }),
          Q("2.4-09", "text", 3, "expand-area", B, "A rectangle has width 8 cm and length (3y + 4) cm. Write its area in simplest form (in cm²).", "24y+32", ["Công thức diện tích hình chữ nhật là gì?", "Viết 8 × (3y + 4).", "Mở ngoặc."], "Diện tích = 8(3y + 4) = 24y + 32 (cm²).", { accept: ["32+24y"], unitLabel: "cm²" }),
          Q("2.4-10", "text", 3, "expand-angle", B, "In triangle ABC the angle at A is (4k − 7m)°. The angle at B is twice the angle at A. Write the angle at B in simplest form.", "8k-14m", ["\"Gấp đôi\" nghĩa là nhân với mấy?", "Viết 2(4k − 7m).", "Mở ngoặc."], "Góc B = 2(4k − 7m) = 8k − 14m (độ).", { accept: ["-14m+8k"], unitLabel: "°" })
        ]
      },
      {
        id: "2.5", title: "Constructing and solving equations", titleVi: "Lập và giải phương trình",
        sims: [{ id: "balance", at: 0 }],
        learn: [
          "Giải phương trình là tìm giá trị của chữ làm hai vế bằng nhau.",
          "Giữ cân bằng: làm cùng một phép tính với cả hai vế. x + 5 = 12 ⇒ trừ 5 hai vế ⇒ x = 7.",
          "Phép ngược: cộng ↔ trừ, nhân ↔ chia. 2y + 4 = 16 ⇒ 2y = 12 ⇒ y = 6.",
          "Chữ ở vế phải thì có thể đảo vế: 12 = y + 3 viết thành y + 3 = 12.",
          "Luôn kiểm tra: thay đáp số vào phương trình ban đầu.",
          "Bài toán lời văn: gọi chữ là số cần tìm, dịch từng câu thành phép tính, rồi giải."
        ],
        example: {
          q: "Giải 2y + 4 = 16 và kiểm tra.",
          steps: ["Trừ 4 hai vế: 2y = 12.", "Chia 2 hai vế: y = 6.", "Kiểm tra: 2 × 6 + 4 = 16 ✓."],
          prompts: [
            "Muốn đưa y về một mình, bước đầu nên khử số nào ở vế trái? Em làm gì với cả hai vế?",
            "Còn hệ số 2 đứng cạnh y: em làm gì với cả hai vế?",
            "Thay giá trị y vừa tìm vào phương trình ban đầu: hai vế có bằng nhau không?"
          ],
          answer: { type: "num", value: 6 },
          twist: { q: "Nếu phương trình đổi thành 2y − 4 = 16 thì y bằng bao nhiêu?", answer: { type: "num", value: 10 } }
        },
        questions: [
          Q("2.5-01", "num", 1, "solve-one-step", B, "Solve x − 4 = 9.", 13, ["Phép nào ngược với trừ 4?", "Làm phép đó ở cả hai vế.", "9 + 4 = ?"], "Cộng 4 hai vế: x = 9 + 4 = 13. Kiểm tra: 13 − 4 = 9."),
          Q("2.5-02", "num", 1, "solve-one-step", B, "Solve 15 = y + 3.", 12, ["Viết lại có y ở vế trái: y + 3 = 15.", "Trừ 3 hai vế.", "15 − 3 = ?"], "y + 3 = 15 ⇒ y = 15 − 3 = 12."),
          Q("2.5-03", "num", 2, "solve-two-step", B, "Solve 4a + 1 = 17.", 4, ["Trước hết trừ cả hai vế đi mấy?", "Sau đó 4a bằng mấy?", "Chia cho 4."], "4a = 16 ⇒ a = 4. Kiểm tra: 4 × 4 + 1 = 17."),
          Q("2.5-04", "num", 2, "solve-two-step", B, "Solve 3a − 2 = 13.", 5, ["Phép nào ngược với trừ 2?", "Cộng 2 hai vế: 3a = ?", "Chia cho 3."], "3a = 15 ⇒ a = 5. Kiểm tra: 15 − 2 = 13."),
          Q("2.5-05", "num", 2, "solve-two-step", B, "Solve 29 = 4c − 3.", 8, ["Viết lại 4c − 3 = 29.", "Cộng 3 hai vế.", "Chia cho 4."], "4c = 32 ⇒ c = 8. Kiểm tra: 4 × 8 − 3 = 29."),
          Q("2.5-06", "num", 2, "word-equation", B, "Paul has some DVDs. He sells three of them and has 26 left. How many DVDs did Paul have at the start?", 29, ["Gọi số DVD ban đầu là d. Sau khi bán thì còn lại biểu thức nào?", "Viết phương trình: d − 3 = 26.", "Giải bằng phép ngược."], "d − 3 = 26 ⇒ d = 29."),
          Q("2.5-07", "num", 2, "word-equation", B, "Jana's age is three more than twice the age of Jin. Jana is 35 years old. How old is Jin?", 16, ["Gọi tuổi Jin là j. Hai lần tuổi Jin là gì?", "Viết phương trình: 2j + 3 = 35.", "Trừ 3 rồi chia 2."], "2j + 3 = 35 ⇒ 2j = 32 ⇒ j = 16.", { unitLabel: "tuổi" }),
          Q("2.5-08", "mc", 2, "solve-misconception", B, "Solve x − 6 = −2.", 1, ["Muốn khử \"− 6\" ta cộng hay trừ 6 ở cả hai vế?", "−2 + 6 bằng bao nhiêu?", "Thay đáp án vào phương trình để kiểm tra."], "Cộng 6 hai vế: x = −2 + 6 = 4. Steffan sai vì lại trừ 6 và được −8 (kiểm tra: −8 − 6 = −14, không phải −2).", { choices: ["−8", "4", "−4", "8"] }),
          Q("2.5-09", "num", 3, "equation-geometry", B, "An isosceles triangle has two equal sides of length (4p − 5) cm and 37 cm, and its base is 20 cm. Find the perimeter of the triangle (in cm).", 94, ["Hai cạnh bên bằng nhau nên 4p − 5 = ?", "Giải để tìm p (không nhất thiết là số nguyên).", "Hai cạnh bên đều bằng 37; cộng cả đáy 20."], "Hai cạnh bên bằng nhau nên mỗi cạnh dài 37 cm (đúng với p = 10,5). Chu vi = 37 + 37 + 20 = 94 cm.", { howto: "Enter the perimeter of the whole triangle in cm. You do not need to enter the value of p.", unitLabel: "cm" }),
          Q("2.5-10", "num", 3, "equation-compare", B, "Kenji has three expression cards: 4m + 4, 2m − 6 and 6m + 2. He also has three number cards: 32, 44 and 20. He makes an equation by setting one expression card equal to one number card (for example 4m + 4 = 32). What is the largest solution for m that he can get?", 25, ["Các cách ghép: có 3 × 3 = 9 phương trình. Hãy giải thử vài phương trình.", "Để m lớn, vế trái cần tăng nhanh hay chậm khi m tăng? Số ở vế phải nên lớn hay nhỏ?", "Thử 2m − 6 = 44."], "Giải cả 9 phương trình: 4m+4: 7, 10, 4; 2m−6: 19, 25, 13; 6m+2: 5, 7, 3. Lớn nhất là 25 (2m − 6 = 44), nhỏ nhất là 3 (6m + 2 = 20).")
        ]
      },
      {
        id: "2.6", title: "Inequalities", titleVi: "Bất đẳng thức",
        learn: [
          "Dùng < (nhỏ hơn) và > (lớn hơn) để chỉ một khoảng số. x > 4 nghĩa là x là mọi số lớn hơn 4 và không bằng 4.",
          "Trên trục số, vẽ vòng tròn rỗng tại số đó (vì không lấy chính số ấy) và mũi tên về phía các giá trị thoả mãn.",
          "x > 4: mũi tên sang phải (đến +∞). y < 7: mũi tên sang trái (đến −∞).",
          "Với x > 7, số nguyên nhỏ nhất là 8 (không phải 7), danh sách: 8, 9, 10, …",
          "Với y < 2, số nguyên lớn nhất là 1, danh sách: 1, 0, −1, −2, …",
          "Với x > 4 không có số nguyên lớn nhất vì dãy tiếp tục mãi."
        ],
        example: {
          q: "Cho y < 2. Số nguyên lớn nhất của y là gì? (Sau đó liệt kê các số nguyên y có thể nhận.)",
          steps: ["y nhỏ hơn 2 và không bằng 2 nên số nguyên lớn nhất là 1.", "Danh sách: 1, 0, −1, −2, −3, …", "Dấu … cho biết dãy đi mãi về phía âm."],
          prompts: [
            "y có thể bằng 2 không? Vậy số nguyên ngay trước 2 là số nào?",
            "Từ số đó đi tiếp về phía nhỏ hơn, các số nguyên nối tiếp nhau như thế nào?",
            "Dãy này có điểm dừng không? Em ghi lại ý đó bằng ký hiệu nào?"
          ],
          answer: { type: "num", value: 1 },
          twist: { q: "Nếu đổi thành y ≤ 2 thì số nguyên lớn nhất của y là bao nhiêu?", answer: { type: "num", value: 2 } }
        },
        questions: [
          Q("2.6-01", "mc", 1, "inequality-meaning", B, "What does the inequality x > 4 mean?", 0, ["Dấu > đọc là gì?", "x có thể bằng chính số 4 không?", "Chọn câu chỉ các số lớn hơn 4."], "x > 4 nghĩa là x là mọi số lớn hơn 4 (4 không được tính). Còn \"4 trở lên\" sẽ cần dấu ≥.", { choices: ["x is any number greater than 4 (4 is not included)", "x can be 4 or any number bigger than 4", "x is any number less than 4"] }),
          Q("2.6-02", "text", 1, "write-inequality", B, "Write \"n is greater than −1\" as an inequality.", "n>-1", ["Dấu nào nghĩa là \"lớn hơn\"?", "Viết n, dấu đó, rồi −1.", "Kiểm tra: n = 0 có thỏa không?"], "\"Lớn hơn\" là >, nên n > −1.", { accept: ["-1<n"] }),
          Q("2.6-03", "text", 1, "write-inequality", B, "Write \"q is less than −2\" as an inequality.", "q<-2", ["Dấu nào nghĩa là \"nhỏ hơn\"?", "Viết q, dấu đó, rồi −2.", "Kiểm tra: q = −3 có thỏa không?"], "\"Nhỏ hơn\" là <, nên q < −2.", { accept: ["-2>q"] }),
          Q("2.6-04", "num", 1, "integer-bound", B, "For y > 4, what is the smallest integer that y could be?", 5, ["y có thể bằng 4 không?", "Số nguyên liền sau 4 là mấy?", "Số đó có thỏa y > 4 không?"], "y phải lớn hơn 4 (không bằng 4), nên số nguyên nhỏ nhất là 5."),
          Q("2.6-05", "num", 2, "integer-bound", B, "For n < 12, what is the largest integer that n could be?", 11, ["n có thể bằng 12 không?", "Số nguyên liền trước 12 là mấy?", "Số đó có thỏa n < 12 không?"], "n nhỏ hơn 12 nên số nguyên lớn nhất là 11."),
          Q("2.6-06", "num", 2, "integer-bound-decimal", B, "For y > 2.5, what is the smallest integer that y could be?", 3, ["2,5 nằm giữa hai số nguyên nào?", "Số nguyên nào lớn hơn 2,5?", "Chọn số nhỏ nhất trong chúng."], "2 < 2,5 nên không thỏa; 3 > 2,5 nên số nguyên nhỏ nhất là 3."),
          Q("2.6-07", "mc", 2, "integer-bound-misconception", B, "Katya says that if x > 7, the smallest integer x could be is 7. What is the correct smallest integer?", 1, ["x có thể bằng 7 không?", "Số nguyên đầu tiên thỏa x > 7 là số nào?", "Danh sách các số nguyên bắt đầu từ đâu?"], "x > 7 loại trừ 7 nên số nguyên nhỏ nhất là 8. Katya nhầm vì quên rằng vòng tròn rỗng không lấy số 7.", { choices: ["7", "8", "6", "There is no smallest integer"] }),
          Q("2.6-08", "num", 3, "integer-bound-negative", B, "For m < −3.5, what is the largest integer that m could be?", -4, ["−3,5 nằm giữa hai số nguyên âm nào?", "Số nào trong hai số đó nhỏ hơn −3,5?", "−3 có nhỏ hơn −3,5 không?"], "−3 > −3,5 nên không thỏa; −4 < −3,5 nên số nguyên lớn nhất là −4."),
          Q("2.6-09", "mc", 3, "inequality-reasoning", B, "For y > 4, why can you not write down the largest integer that y could be?", 0, ["Hãy liệt kê vài số thỏa y > 4: 5, 6, 7, …", "Luôn có thể tìm một số lớn hơn số em vừa nghĩ không?", "Mũi tên trên trục số chỉ hướng nào?"], "Với bất kỳ số nguyên nào thỏa y > 4, ta luôn tìm được số lớn hơn (cộng thêm 1). Các giá trị tiếp tục tới +∞ nên không có số lớn nhất.", { choices: ["The integers continue forever towards positive infinity", "Because 4 is not included", "Because y must be a negative number"] }),
          Q("2.6-10", "num", 3, "integer-range", B, "How many integers n satisfy both n > −3.5 and n < 2.5?", 6, ["Số nguyên nhỏ nhất thỏa n > −3,5 là gì?", "Số nguyên lớn nhất thỏa n < 2,5 là gì?", "Liệt kê từ số nhỏ nhất tới lớn nhất và đếm."], "n ∈ {−3, −2, −1, 0, 1, 2}. Có 6 số nguyên.")
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Rừng Chữ giấu lối ra sau những bài toán lập phương trình và rút gọn biểu thức kiểu Việt Nam. Mở ngoặc và giữ cân bằng nào!",
      questions: [
        Q("ch-01", "num", 3, "solve-brackets", V, "Tìm x biết 5(x − 2) = 3(x + 4).", 11, ["Mở ngoặc ở cả hai vế trước.", "Gom các hạng tử chứa x về một vế, số về vế còn lại.", "Chia cả hai vế cho hệ số của x."], "5x − 10 = 3x + 12 ⇒ 2x = 22 ⇒ x = 11. Kiểm tra: 5 × 9 = 45 và 3 × 15 = 45."),
        Q("ch-02", "num", 3, "age-problem", V, "Hiện nay tuổi mẹ gấp 3 lần tuổi con. Sau 12 năm nữa tuổi mẹ chỉ gấp 2 lần tuổi con. Hỏi hiện nay con bao nhiêu tuổi?", 12, ["Gọi tuổi con hiện nay là x. Tuổi mẹ hiện nay là gì?", "Sau 12 năm tuổi con, tuổi mẹ là gì?", "Lập phương trình: tuổi mẹ sau 12 năm = 2 × tuổi con sau 12 năm."], "Gọi x là tuổi con thì mẹ là 3x. Sau 12 năm: 3x + 12 = 2(x + 12) ⇒ 3x + 12 = 2x + 24 ⇒ x = 12. (Mẹ 36 tuổi.)", { unitLabel: "tuổi" }),
        Q("ch-03", "num", 3, "consecutive-numbers", V, "Tổng của ba số tự nhiên liên tiếp bằng 78. Tìm số lớn nhất trong ba số đó.", 27, ["Gọi số nhỏ nhất là n. Hai số còn lại là gì?", "Lập phương trình tổng bằng 78 và rút gọn.", "Số lớn nhất là n + 2."], "n + (n + 1) + (n + 2) = 3n + 3 = 78 ⇒ n = 25. Ba số là 25, 26, 27; số lớn nhất là 27."),
        Q("ch-04", "num", 3, "minimum-value", V, "Tìm giá trị nhỏ nhất của biểu thức (x − 3)² + 5 khi x chạy trên mọi số nguyên.", 5, ["Một bình phương luôn lớn hơn hoặc bằng số nào?", "Khi nào (x − 3)² nhỏ nhất?", "Khi đó biểu thức bằng bao nhiêu?"], "(x − 3)² ≥ 0 và bằng 0 khi x = 3. Vậy giá trị nhỏ nhất của biểu thức là 0 + 5 = 5."),
        Q("ch-05", "num", 3, "inequality-count", V, "Có bao nhiêu số tự nhiên x (kể cả số 0) thỏa mãn 3x + 2 < 20?", 6, ["Trừ 2 cả hai vế: 3x < ?", "Chia cho 3 để biết x nhỏ hơn số nào.", "Liệt kê các số tự nhiên nhỏ hơn số đó, bắt đầu từ 0."], "3x < 18 ⇒ x < 6. Các số tự nhiên: 0, 1, 2, 3, 4, 5, tổng cộng 6 số."),
        Q("ch-06", "num", 3, "expand-substitute", V, "Rút gọn A = 3(2x − 1) − 2(x + 4) rồi tính giá trị của A khi x = 5.", 9, ["Mở từng ngoặc, nhớ dấu trừ trước ngoặc thứ hai.", "Rút gọn thành dạng ax + b.", "Thay x = 5."], "A = 6x − 3 − 2x − 8 = 4x − 11. Với x = 5: 4 × 5 − 11 = 9."),
        Q("ch-07", "num", 3, "rectangle-word", V, "Một hình chữ nhật có chu vi 56 cm, chiều dài hơn chiều rộng 6 cm. Tính diện tích hình chữ nhật (cm²).", 187, ["Gọi chiều rộng là w. Chiều dài là gì?", "Nửa chu vi là bao nhiêu? Lập phương trình w + (w + 6) = nửa chu vi.", "Tìm w, chiều dài rồi nhân."], "Nửa chu vi 28: w + w + 6 = 28 ⇒ w = 11, dài 17. Diện tích 11 × 17 = 187 cm².", { unitLabel: "cm²" }),
        Q("ch-08", "mc", 3, "expand-simplify-misconception", V, "Rút gọn 2(x + 3) + 3(x − 2). Đáp án nào đúng?", 0, ["Mở ngoặc thứ nhất: 2(x + 3) = ?", "Mở ngoặc thứ hai: 3(x − 2) = ? (nhân 3 với cả x và 2).", "Gom hạng tử chứa x và hằng số."], "2x + 6 + 3x − 6 = 5x. Đáp án 5x − 2 hoặc 5x + 12 sai vì không nhân đủ 3 vào số −2 hay nhầm dấu.", { choices: ["5x", "5x + 12", "5x − 12", "6x"] }),
        Q("ch-09", "num", 3, "fraction-equation", V, "Bể có a lít nước. Người ta đổ thêm 5 lít, sau đó múc ra một nửa lượng nước trong bể thì còn lại 14 lít. Hỏi lúc đầu bể có bao nhiêu lít?", 23, ["Sau khi đổ thêm 5 lít, bể có bao nhiêu lít (viết theo a)?", "Còn một nửa thì bằng biểu thức nào? Lập phương trình bằng 14.", "Nhân hai vế với 2 rồi trừ 5."], "(a + 5)/2 = 14 ⇒ a + 5 = 28 ⇒ a = 23.", { unitLabel: "lít" }),
        Q("ch-10", "num", 3, "formula-pattern", V, "Xếp n hình vuông liền kề thành một hàng bằng que diêm thì cần 3n + 1 que. Có 100 que diêm, nhiều nhất xếp được bao nhiêu hình vuông?", 33, ["Cần 3n + 1 ≤ 100. Thử giải 3n + 1 = 100 trước.", "Trừ 1 rồi chia 3.", "Nếu n không nguyên thì phải làm tròn xuống; ở đây kết quả có nguyên không?"], "3n + 1 ≤ 100 ⇒ 3n ≤ 99 ⇒ n ≤ 33. Vậy xếp được tối đa 33 hình vuông (dùng đúng 100 que).", { unitLabel: "hình" })
      ]
    },
    project: null
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "2.2-01": "subst1", "2.2-02": "subst1", "2.2-03": "subst2", "2.2-04": "subst2", "2.2-05": "subst-frac", "2.2-06": "subst-frac", "2.2-07": "formula-rate", "2.2-08": "formula-inverse", "2.5-01": "solve1", "2.5-02": "solve1", "2.5-08": "solve1", "2.5-03": "solve2", "2.5-04": "solve2", "2.5-05": "solve2", "2.5-06": "word-sell", "2.5-07": "word-age", "2.6-04": "int-bound", "2.6-05": "int-bound", "2.6-06": "int-bound", "2.6-07": "int-bound", "2.6-08": "int-bound", "2.6-10": "int-range" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 2; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
