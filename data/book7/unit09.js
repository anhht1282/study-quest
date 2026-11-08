(function () {
  // compact question builder (fills every schema field)
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
    id: 9,
    title: "Sequences and functions",
    titleVi: "Dãy số và hàm số",
    strand: "Algebra",
    pages: [190, 211],
    realm: "Thung Lũng Bậc Thang",
    emoji: "🪜",
    story: "Trên đường tới Thung Lũng Bậc Thang, em gặp những bậc đá được xếp theo một quy luật bí ẩn. Muốn biết bậc thứ 100 cao bao nhiêu mà không phải đếm từng bậc, em cần học cách tìm quy luật của dãy số và viết nó bằng đại số. Những chiếc máy biến đổi số thần kỳ ở cuối thung lũng cũng đang chờ em giải mã!",
    glossary: [
      { en: "sequence", vi: "dãy số", def: "Một danh sách các số được sắp xếp theo một quy luật." },
      { en: "term", vi: "số hạng", def: "Mỗi số trong một dãy số." },
      { en: "term-to-term rule", vi: "quy luật từ số hạng này sang số hạng sau", def: "Cách tính số hạng tiếp theo từ số hạng đứng ngay trước nó, ví dụ 'cộng 3'." },
      { en: "finite / infinite sequence", vi: "dãy hữu hạn / vô hạn", def: "Dãy hữu hạn có điểm dừng; dãy vô hạn có dấu ba chấm và tiếp tục mãi." },
      { en: "position number", vi: "số thứ tự (vị trí)", def: "Số cho biết số hạng đứng thứ mấy trong dãy: thứ nhất, thứ hai, ..." },
      { en: "nth term", vi: "số hạng tổng quát", def: "Công thức tính số hạng ở vị trí n, ví dụ 3n + 2." },
      { en: "function machine", vi: "máy hàm số", def: "Sơ đồ cho biết mỗi số đầu vào được biến đổi thế nào để ra số đầu ra." },
      { en: "inverse operation", vi: "phép toán ngược", def: "Phép toán làm ngược lại, ví dụ ngược của cộng là trừ." },
      { en: "mapping diagram", vi: "sơ đồ ánh xạ", def: "Hình vẽ nối mỗi số đầu vào với số đầu ra tương ứng của nó." }
    ],
    sections: [
      {
        id: "9.1",
        title: "Generating sequences (1)",
        titleVi: "Tạo dãy số (1)",
        learn: [
          "Dãy số là danh sách các số theo một quy luật. Mỗi số gọi là một số hạng.",
          "Quy luật từ số hạng này sang số hạng sau (term-to-term rule) cho biết cách biến số hạng trước thành số hạng sau, ví dụ 'cộng 4' hay 'nhân 2 rồi cộng 1'.",
          "Dấu ba chấm ở cuối nghĩa là dãy kéo dài mãi (vô hạn). Không có dấu ba chấm thì dãy dừng lại (hữu hạn).",
          "Một quy luật phải đúng cho MỌI cặp số hạng liên tiếp. Chỉ hai số hạng đầu thường chưa đủ để chắc chắn về quy luật."
        ],
        example: {
          q: "Số hạng đầu của dãy là 5. Quy luật: nhân 2 rồi cộng 1. Viết ba số hạng đầu.",
          steps: ["Số hạng thứ nhất: 5", "Số hạng thứ hai: 5 × 2 + 1 = 11", "Số hạng thứ ba: 11 × 2 + 1 = 23", "Ba số hạng đầu: 5, 11, 23"],
          prompts: [
            "Đề đã cho sẵn số hạng đầu: dãy này bắt đầu từ số nào?",
            "Áp dụng quy luật 'nhân 2 rồi cộng 1' cho số hạng đầu: em làm phép nào trước?",
            "Số hạng thứ hai trở thành đầu vào cho lần áp dụng tiếp theo. Tính tương tự.",
            "Ghép ba số lại thành dãy theo đúng thứ tự."
          ],
          answer: { type: "text", value: "5, 11, 23", accept: ["5,11,23", "5;11;23", "5; 11; 23"] },
          twist: { q: "Nếu số hạng đầu là 3 với cùng quy luật thì số hạng thứ ba là bao nhiêu?", answer: { type: "num", value: 15 } }
        },
        questions: [
          Q("9.1-01", "num", 1, "term-rule-add", "The sequence 7, 11, 15, 19, … has the term-to-term rule 'add 4'. What is the next term?", 23,
            ["Hai số hạng liên tiếp 7 và 11 hơn kém nhau bao nhiêu?", "Quy luật đó có đúng với 11 → 15 và 15 → 19 không?", "Áp dụng quy luật đó cho số hạng cuối là 19."],
            "Mỗi số hạng lớn hơn số trước 4 đơn vị. Số hạng tiếp theo là 19 + 4 = 23."),
          Q("9.1-02", "num", 1, "term-rule-subtract", "Here is a sequence: 40, 35, 30, 25, … What is the 6th term?", 15,
            ["Từ 40 xuống 35 là giảm đi bao nhiêu?", "Số hạng thứ 5 là số nào?", "Từ số hạng thứ 5, em làm tiếp một bước nữa."],
            "Quy luật là 'trừ 5'. Các số hạng: 40, 35, 30, 25, 20, 15. Số hạng thứ 6 là 15."),
          Q("9.1-03", "num", 1, "term-rule-multiply", "The first term of a sequence is 6 and the rule is 'multiply by 2'. What is the third term?", 24,
            ["Số hạng thứ hai bằng bao nhiêu khi nhân số hạng thứ nhất với 2?", "Số hạng thứ ba tính từ số hạng thứ hai như thế nào?", "Em nhân đôi hai lần liên tiếp bắt đầu từ 6."],
            "6 × 2 = 12 là số hạng thứ hai, rồi 12 × 2 = 24 là số hạng thứ ba."),
          Q("9.1-04", "num", 2, "term-rule-two-step", "The first term is 4. The rule is 'multiply by 2 then add 1'. What is the third term?", 19,
            ["Tính số hạng thứ hai trước: làm phép nhân rồi mới làm phép cộng.", "Số hạng thứ hai là 9. Áp dụng lại quy luật cho 9.", "9 × 2 = ? rồi cộng thêm 1."],
            "4 × 2 + 1 = 9, rồi 9 × 2 + 1 = 19. Số hạng thứ ba là 19."),
          Q("9.1-05", "num", 2, "term-rule-two-step", "The first term is 10. The rule is 'subtract 8 then multiply by 6'. What is the third term?", 24,
            ["Với 10, em phải trừ đi gì trước, rồi làm gì tiếp?", "Số hạng thứ hai là (10 − 8) × 6 = ? Em tính thử.", "Làm lại với số hạng thứ hai vừa tìm."],
            "Số hạng thứ hai: (10 − 8) × 6 = 12. Số hạng thứ ba: (12 − 8) × 6 = 24."),
          Q("9.1-06", "num", 2, "term-rule-two-step", "The first term is 24. The rule is 'divide by 2 then add 4'. What is the third term?", 12,
            ["Chia 24 cho 2 được bao nhiêu? Rồi cộng 4.", "Số hạng thứ hai là 16. Làm tiếp một lần nữa.", "16 ÷ 2 + 4 = ?"],
            "24 ÷ 2 + 4 = 16, rồi 16 ÷ 2 + 4 = 12. Số hạng thứ ba là 12."),
          Q("9.1-07", "mc", 1, "finite-infinite", "Which of these sequences is finite?", 1,
            ["Dãy vô hạn thường kết thúc bằng dấu gì?", "Hãy tìm dãy KHÔNG có dấu ba chấm ở cuối.", "Dãy nào có điểm dừng rõ ràng?"],
            "Dãy 85, 75, 65, 55, 45, 35 không có dấu ba chấm nên dừng ở 35: đây là dãy hữu hạn. Các dãy còn lại có '…' nên kéo dài mãi.",
            { choices: ["4, 6, 8, 10, …", "85, 75, 65, 55, 45, 35", "100, 97, 94, 91, …"] }),
          Q("9.1-08", "mc", 3, "rule-from-terms", "Sofia and Zara look at 4, 8, 20, 56, 164, … Sofia says 'add 4'. Zara says 'multiply by 2'. Which rule really works for ALL the terms?", 2,
            ["Thử 'cộng 4' với 8 → 20: có ra không?", "Thử 'nhân 2' với 20 → 56. Có đúng không?", "Thử 'nhân 3 rồi trừ 4' với từng cặp liên tiếp: 4 → 8, 8 → 20, 20 → 56, 56 → 164."],
            "'Cộng 4' chỉ đúng với 4 → 8; 'nhân 2' chỉ đúng với 4 → 8. Sai lầm là chỉ kiểm tra hai số hạng đầu. Quy luật đúng cho mọi cặp là 'nhân 3 rồi trừ 4': 4×3−4=8, 8×3−4=20, 20×3−4=56, 56×3−4=164.",
            { choices: ["Add 4", "Multiply by 2", "Multiply by 3 then subtract 4", "Multiply by 3 then add 4"] }),
          Q("9.1-09", "num", 3, "work-backwards", "The second term of a sequence is 13. The rule is 'multiply by 2 then subtract 3'. What is the first term?", 8,
            ["Để từ số hạng thứ nhất ra 13, em đã nhân 2 rồi trừ 3. Vậy muốn quay ngược lại, bước cuối là gì?", "Hoàn tác từng bước theo thứ tự ngược: 13 + 3 = ?", "Rồi chia kết quả cho 2. Kiểm tra lại bằng cách áp dụng quy luật."],
            "Làm ngược: 13 + 3 = 16, 16 ÷ 2 = 8. Kiểm tra: 8 × 2 − 3 = 13. Số hạng thứ nhất là 8."),
          Q("9.1-10", "multi", 3, "many-rules", "A sequence starts 3, 7, … Which of these rules give 7 from 3? (choose all)", [0, 1, 2],
            ["Thử từng quy luật: áp dụng cho số 3 xem có ra 7 không.", "3 × 2 − 1 bằng bao nhiêu? Có phải 7 không?", "Vì sao hai số hạng chưa đủ để xác định duy nhất quy luật?"],
            "Add 4: 3+4=7 đúng. Nhân 2 rồi cộng 1: 3×2+1=7 đúng. Nhân 3 rồi trừ 2: 3×3−2=7 đúng. Nhân 2 rồi trừ 1: 3×2−1=5, sai. Một dãy có thể có nhiều quy luật nếu ta biết quá ít số hạng.",
            { choices: ["Add 4", "Multiply by 2 then add 1", "Multiply by 3 then subtract 2", "Multiply by 2 then subtract 1"] })
        ]
      },
      {
        id: "9.2",
        title: "Generating sequences (2)",
        titleVi: "Tạo dãy số (2) - dãy hình",
        sims: [{ id: "matchsticks", at: 0 }],
        learn: [
          "Dãy hình (sequence of patterns) là các hình xếp bằng chấm, que diêm, hình vuông... Đếm số phần tử ở mỗi hình để được một dãy số.",
          "Nhìn xem từ hình này sang hình sau thêm bao nhiêu phần tử: đó chính là quy luật từ số hạng này sang số hạng sau.",
          "Lập bảng 'Số thứ tự hình – Số phần tử' giúp tìm hình thứ 10 hay hình thứ 20, nhưng chậm. Dùng quy luật 'mỗi lần thêm d' sẽ nhanh hơn: từ hình 1 đến hình n cần thêm (n − 1) lần.",
          "Nếu mỗi hình thêm 3 que thì số que luôn chia hết cho 3; dùng điều này để kiểm tra một số có thể là số que của hình nào đó hay không."
        ],
        example: {
          q: "Các hình tam giác xếp bằng que diêm có 3, 6, 9 que. Hình 4 có bao nhiêu que và quy luật là gì?",
          steps: ["Mỗi hình thêm một tam giác = thêm 3 que", "Quy luật: cộng 3", "Hình 4: 9 + 3 = 12 que"],
          prompts: [
            "Từ hình này sang hình kế tiếp, số que tăng bao nhiêu? Nhìn hình xem vì sao?",
            "Điều đó cho em quy luật gì? Hãy nói bằng một câu.",
            "Áp dụng quy luật cho hình 4, bắt đầu từ số que của hình 3."
          ],
          answer: { type: "num", value: 12 },
          twist: { q: "Hình nào có đúng 30 que?", answer: { type: "num", value: 10 } }
        },
        questions: [
          Q("9.2-01", "num", 1, "pattern-next", "Dot patterns have 3, 5, 7, … dots (one extra dot at each end each time). How many dots are in pattern 6?", 13,
            ["Mỗi hình thêm mấy chấm so với hình trước?", "Hình 4 và hình 5 có bao nhiêu chấm?", "Tiếp tục thêm cho đến hình 6."],
            "Thêm 2 chấm mỗi lần: 3, 5, 7, 9, 11, 13. Hình 6 có 13 chấm."),
          Q("9.2-02", "num", 1, "pattern-next", "Matchstick triangles in a row use 3, 6, 9 matchsticks for patterns 1, 2, 3. How many matchsticks does pattern 5 need?", 15,
            ["Mỗi tam giác mới cần thêm bao nhiêu que?", "Hình 4 có bao nhiêu que?", "Từ hình 4, thêm một lần nữa."],
            "Mỗi lần thêm 3 que: 3, 6, 9, 12, 15. Hình 5 có 15 que."),
          Q("9.2-03", "mc", 1, "pattern-rule", "Square patterns have 4, 7, 10 squares. What is the term-to-term rule?", 1,
            ["Hình 2 hơn hình 1 bao nhiêu ô?", "Hình 3 hơn hình 2 bao nhiêu ô? Có giống nhau không?", "Quy luật nào đúng cho cả hai cặp?"],
            "7 − 4 = 3 và 10 − 7 = 3, nên quy luật là 'cộng 3'. 'Nhân 3' sai vì 4 × 3 = 12, không phải 7.",
            { choices: ["Multiply by 3", "Add 3", "Add 4", "Add 7"] }),
          Q("9.2-04", "num", 2, "pattern-far", "Square patterns have 5, 8, 11 squares. How many squares are in pattern 8?", 26,
            ["Quy luật là cộng 3. Từ hình 1 đến hình 8 cần thêm bao nhiêu lần?", "Thêm 7 lần, mỗi lần 3 ô. Vậy tổng số ô thêm là?", "Cộng số ô thêm vào 5."],
            "Từ hình 1 đến hình 8 thêm 7 lần × 3 = 21 ô. 5 + 21 = 26 ô."),
          Q("9.2-05", "num", 2, "pattern-far", "Dot patterns have 4, 7, 10 dots. How many dots are in pattern 10?", 31,
            ["Mỗi hình thêm mấy chấm?", "Từ hình 1 đến hình 10 thêm bao nhiêu lần?", "9 × 3 = ? rồi cộng với 4."],
            "Thêm 3 chấm mỗi lần, 9 lần: 9 × 3 = 27. 4 + 27 = 31 chấm."),
          Q("9.2-06", "num", 3, "pattern-missing", "Jacob draws dot patterns. Pattern 2 has 5 dots and pattern 4 has 9 dots. The same number of dots is added each time. How many dots are in pattern 7?", 15,
            ["Từ hình 2 đến hình 4 có mấy lần thêm?", "9 − 5 = 4 chấm được thêm trong 2 lần. Mỗi lần thêm bao nhiêu?", "Mỗi lần thêm 2, vậy hình 7 hơn hình 4 mấy lần thêm?"],
            "Thêm 4 chấm trong 2 bước, nên mỗi bước thêm 2 chấm. Hình 5: 11, hình 6: 13, hình 7: 15."),
          Q("9.2-07", "mc", 3, "pattern-nth-check", "Square patterns have 5, 7, 9, 11 squares. Marcus says pattern 20 has 20 × 2 + 3 = 43 squares. Sofia says 20 + 2 = 22. Who is right?", 0,
            ["Kiểm tra cách của Marcus với hình 1: 1 × 2 + 3 bằng mấy? Với hình 2?", "Cách của Sofia: sao lại lấy số thứ tự cộng 2? Thử với hình 2.", "Quy luật 'thêm 2' cho biết gì về hình thứ 20: có phải chỉ cộng 2 một lần?"],
            "Công thức Marcus: số thứ tự × 2 + 3 đúng cho hình 1 (5), hình 2 (7), hình 3 (9), hình 4 (11), nên hình 20 có 43 ô. Sofia mắc lỗi: 'thêm 2 mỗi lần' không có nghĩa lấy số thứ tự cộng 2 một lần mà phải thêm 19 lần.",
            { choices: ["Marcus: 43 squares", "Sofia: 22 squares", "Both are right", "Neither can be known"] }),
          Q("9.2-08", "num", 3, "pattern-multiples", "Triangle patterns have 4, 8, 12, … triangles in patterns 1, 2, 3. Which pattern number has exactly 92 triangles?", 23,
            ["Số tam giác của mọi hình đều là bội của số nào?", "92 chia cho 4 được mấy?", "Thương đó chính là số thứ tự hình."],
            "Hình n có 4n tam giác. 4n = 92 nên n = 92 ÷ 4 = 23. Hình 23 có 92 tam giác.", { howto: "Find which pattern in the list has exactly 92 triangles. Enter its pattern number, not the number of triangles." }),
          Q("9.2-09", "mc", 3, "pattern-multiples", "In the pattern 4, 8, 12, … Frances says some pattern has 98 triangles. How can you tell without calculating the pattern?", 0,
            ["Các số 4, 8, 12 đều chia hết cho số nào?", "98 có chia hết cho 4 không? (98 = 96 + 2)", "Nếu 98 không chia hết cho 4, nó có thể nằm trong dãy này không?"],
            "Mọi số hạng đều là bội của 4. 98 chia 4 dư 2 nên 98 không thể là số tam giác của hình nào. Lỗi hay gặp: nghĩ rằng số chẵn nào cũng có mặt trong dãy.",
            { choices: ["98 is not a multiple of 4", "98 is too big", "98 is an even number", "98 is not in the 4 times table because it is odd"] }),
          Q("9.2-10", "num", 3, "pattern-nth", "Dot patterns have 3, 5, 7, 9, … dots (the 10th pattern has 21 dots). How many dots does pattern 25 have?", 51,
            ["Từ hình 10 đến hình 25 cần thêm bao nhiêu lần?", "Mỗi lần thêm 2 chấm; 15 lần thêm bao nhiêu chấm?", "Cộng số vừa tìm vào 21."],
            "Từ hình 10 đến 25: 15 lần thêm × 2 = 30 chấm. 21 + 30 = 51 chấm (cũng bằng 2 × 25 + 1).")
        ]
      },
      {
        id: "9.3",
        title: "Using the nth term",
        titleVi: "Dùng số hạng tổng quát",
        learn: [
          "Số thứ tự (position number) n cho biết số hạng đứng thứ mấy: n = 1 là số hạng đầu, n = 2 là số hạng thứ hai...",
          "Số hạng tổng quát (nth term) là công thức tính số hạng thứ n. Dãy 3, 6, 9, 12 … là bảng nhân 3, nên số hạng thứ n = 3n.",
          "Dãy 3, 4, 5, 6 … mỗi số hạng lớn hơn số thứ tự 2 đơn vị, nên số hạng thứ n = n + 2. Dãy −5, −4, −3 … có số hạng thứ n = n − 6.",
          "Muốn kiểm tra công thức, thử với n = 1, 2, 3. Muốn tìm số hạng thứ 20, thay n = 20 vào công thức.",
          "Muốn biết một số có thuộc dãy không, giải phương trình số hạng thứ n = số đó và xem n có nguyên dương không."
        ],
        example: {
          q: "Tìm số hạng tổng quát của dãy 12, 24, 36, 48, … rồi tính số hạng thứ 20.",
          steps: ["Lập bảng: n = 1,2,3,4 ứng với 12, 24, 36, 48", "Đây là bảng nhân 12 nên số hạng thứ n = 12n", "Số hạng thứ 20 = 12 × 20 = 240"],
          prompts: [
            "Lập bảng n và số hạng: 12, 24, 36 thuộc bảng nhân của số nào?",
            "Nếu số hạng thứ n bằng n lần một số cố định thì công thức viết thế nào?",
            "Thay n = 20 vào công thức em vừa tìm."
          ],
          answer: { type: "text", value: "12n, 240", accept: ["12n;240", "12n,240", "12n và 240", "12×n, 240", "12*n, 240"] },
          twist: { q: "Số hạng nào của dãy 12, 24, 36, 48, … bằng 600? (Cho biết đó là số hạng thứ mấy.)", answer: { type: "num", value: 50 } }
        },
        questions: [
          Q("9.3-01", "text", 1, "nth-multiply", "Write the nth term rule for the sequence 12, 24, 36, 48, 60, …", "12n",
            ["Dãy này thuộc bảng nhân của số nào?", "Số hạng thứ 1 bằng bao nhiêu lần số thứ tự 1?", "Viết: số hạng thứ n = (số) × n."],
            "Số hạng = 12 × số thứ tự, nên số hạng thứ n là 12n.", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').", accept: ["12*n", "n*12", "12 n", "n12"] }),
          Q("9.3-02", "num", 1, "nth-use", "The nth term of a sequence is 6n. What is the 15th term?", 90,
            ["Thay n bằng số nào?", "6n nghĩa là 6 × n.", "6 × 15 = ?"],
            "Thay n = 15: 6 × 15 = 90."),
          Q("9.3-03", "text", 1, "nth-add", "Write the nth term rule for 6, 7, 8, 9, 10, …", "n+5",
            ["Số hạng đầu 6 lớn hơn số thứ tự 1 bao nhiêu?", "Số hạng thứ hai 7 lớn hơn số thứ tự 2 bao nhiêu? Có đều nhau không?", "Viết: số hạng thứ n = n cộng với số đó."],
            "Mỗi số hạng lớn hơn số thứ tự 5 đơn vị (6 = 1 + 5, 7 = 2 + 5). Số hạng thứ n là n + 5.", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').", accept: ["5+n", "n + 5", "5 + n"] }),
          Q("9.3-04", "text", 2, "nth-subtract", "Write the nth term rule for −2, −1, 0, 1, 2, …", "n-3",
            ["Với n = 1, em phải làm gì để từ 1 được −2?", "Với n = 2, trừ 3 có ra −1 không?", "Quy luật nào đúng với tất cả?"],
            "−2 = 1 − 3, −1 = 2 − 3, 0 = 3 − 3. Số hạng thứ n là n − 3.", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').", accept: ["n−3", "n - 3", "-3+n", "−3+n"] }),
          Q("9.3-05", "text", 2, "nth-multiply", "Write the nth term rule for 8, 16, 24, 32, 40, …", "8n",
            ["Số hạng đầu bằng bao nhiêu lần số thứ tự đầu?", "Đây là bảng nhân mấy?", "Viết ngắn gọn theo n."],
            "Dãy là bảng nhân 8: số hạng thứ n = 8n.", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').", accept: ["8*n", "n*8", "8 n"] }),
          Q("9.3-06", "num", 2, "nth-use", "The nth term is n − 15. What is the 5th term?", -10,
            ["Thay n = 5 vào công thức.", "5 − 15 = ? (kết quả âm)", "Từ 5 đi lùi 15 đơn vị trên trục số."],
            "5 − 15 = −10."),
          Q("9.3-07", "mc", 2, "nth-misconception", "Which is the nth term rule for 5, 6, 7, 8, 9, …?", 2,
            ["Thử n = 1 với 5n: có ra 5 không? Thử n = 2.", "Dãy này tăng 1 mỗi bước, nên số hạng thứ n liên quan tới n chứ không phải bội của n.", "Thử n + 4 với n = 1, 2, 3."],
            "Dãy tăng đều 1 mỗi bước nên có dạng n + một số. 5 = 1 + 4 nên số hạng thứ n là n + 4. Lỗi hay gặp: viết 5n (chỉ đúng với số hạng đầu: 5 × 1 = 5, nhưng 5 × 2 = 10 ≠ 6).",
            { choices: ["5n", "n + 5", "n + 4", "4n"] }),
          Q("9.3-08", "mc", 3, "nth-check", "Zara looks at −5, −4, −3, −2, … and says the nth term is n − 6. Is she correct?", 0,
            ["Thay n = 1 vào n − 6: được số nào? Có bằng −5 không?", "Thử tiếp với n = 2, 3, 4.", "Công thức đúng phải đúng cho mọi n kiểm tra."],
            "n = 1: 1 − 6 = −5; n = 2: −4; n = 3: −3; n = 4: −2. Công thức đúng với mọi số hạng đã cho, nên Zara đúng.",
            { choices: ["Yes, she is correct", "No, it should be n + 6", "No, it should be n − 5", "No, a negative sequence has no rule"] }),
          Q("9.3-09", "num", 3, "nth-position", "The nth term of a sequence is 16n. Which position number n gives the term 400?", 25,
            ["Em cần giải 16 × n = 400.", "Dùng phép toán ngược của nhân.", "400 ÷ 16 = ?"],
            "16n = 400 nên n = 400 ÷ 16 = 25. Số 400 là số hạng thứ 25.", { howto: "Find where the term 400 is in the sequence. Enter its position number n, not the term itself." }),
          Q("9.3-10", "multi", 3, "nth-membership", "Which of these numbers are terms of the sequence with nth term 4n? (choose all)", [0, 2, 4],
            ["Số hạng của dãy 4n phải thỏa điều gì với 4?", "Số nào chia hết cho 4?", "Kiểm tra 20, 22, 36, 63, 100 từng số một."],
            "Số hạng của 4n là bội của 4. 20, 36, 100 chia hết cho 4 (n = 5, 9, 25). 22 và 63 không chia hết cho 4 nên không thuộc dãy.",
            { choices: ["20", "22", "36", "63", "100"] })
        ]
      },
      {
        id: "9.4",
        title: "Representing simple functions",
        titleVi: "Biểu diễn hàm số đơn giản",
        sims: [{ id: "machine", at: 0 }],
        learn: [
          "Hàm số là mối quan hệ giữa hai tập số. Máy hàm số nhận số đầu vào (input), biến đổi và cho số đầu ra (output).",
          "Máy một bước: ví dụ máy '+3' cộng 3 vào mỗi số vào. Ta nói 2 ánh xạ (maps) tới 5.",
          "Để tìm đầu vào khi biết đầu ra, dùng phép toán ngược: ngược của +3 là −3, ngược của ×2 là ÷2.",
          "Sơ đồ ánh xạ vẽ hai trục số, nối mỗi số vào với số ra tương ứng.",
          "Để đoán một máy chưa biết, cần thử hàm với tất cả các cặp đã cho. Một cặp vào-ra có thể khớp với nhiều hàm."
        ],
        example: {
          q: "Máy '×2'. Đầu vào 1 và 3 cho đầu ra tương ứng; còn một số chưa biết cho đầu ra 10. Số chưa biết đó là bao nhiêu?",
          steps: ["1 × 2 = 2 và 3 × 2 = 6", "Ngược lại: đầu vào = 10 ÷ 2 = 5", "Vậy 1 → 2, 3 → 6, 5 → 10"],
          prompts: [
            "Hãy cho máy 'ăn' thử số 1 và số 3: đầu ra là bao nhiêu?",
            "Biết đầu ra là 10, muốn tìm đầu vào em phải đi 'ngược' bằng phép toán nào?",
            "Tóm tắt lại thành ba cặp đầu vào → đầu ra."
          ],
          answer: { type: "num", value: 5 },
          twist: { q: "Nếu máy đổi thành '×2 rồi +1' thì đầu vào nào cho đầu ra 15?", answer: { type: "num", value: 7 } }
        },
        questions: [
          Q("9.4-01", "num", 1, "fm-output", "A function machine adds 5. If the input is 4, what is the output?", 9,
            ["Máy này làm phép gì với số vào?", "Thay số vào: 4 + 5.", "Kết quả là số ra."],
            "4 + 5 = 9."),
          Q("9.4-02", "num", 1, "fm-output", "A function machine multiplies by 6. The input is 5. What is the output?", 30,
            ["Máy nhân với mấy?", "5 × 6 = ?", "Đó là đầu ra."],
            "5 × 6 = 30."),
          Q("9.4-03", "num", 1, "fm-output", "A function machine divides by 4. The input is 40. What is the output?", 10,
            ["Máy chia cho bao nhiêu?", "40 ÷ 4 = ?", "Đó là đầu ra."],
            "40 ÷ 4 = 10."),
          Q("9.4-04", "num", 2, "fm-inverse", "A function machine adds 7. The output is 16. What was the input?", 9,
            ["Máy cộng 7. Phép toán ngược của cộng 7 là gì?", "Làm ngược từ đầu ra: 16 − 7.", "Kiểm tra: lấy kết quả cộng 7, có ra 16 không?"],
            "Phép ngược của '+7' là '−7'. 16 − 7 = 9. Kiểm tra: 9 + 7 = 16."),
          Q("9.4-05", "num", 2, "fm-inverse", "A function machine multiplies by 3. The output is 30. What was the input?", 10,
            ["Phép ngược của nhân 3 là gì?", "30 ÷ 3 = ?", "Kiểm tra: 10 × 3 = 30."],
            "Phép ngược của '×3' là '÷3'. 30 ÷ 3 = 10."),
          Q("9.4-06", "num", 2, "fm-inverse", "A function machine divides by 2. The output is 9. What was the input?", 18,
            ["Phép ngược của chia 2 là gì?", "9 × 2 = ?", "Kiểm tra: 18 ÷ 2 = 9."],
            "Phép ngược của '÷2' là '×2'. 9 × 2 = 18."),
          Q("9.4-07", "mc", 2, "fm-inverse-misconception", "A function machine subtracts 5. The output is 10. What was the input?", 1,
            ["Máy ĐÃ trừ 5 để ra 10. Số vào lớn hơn hay nhỏ hơn 10?", "Vậy phải làm phép nào để quay về số vào: cộng hay trừ 5?", "Kiểm tra bằng cách đi tiến: số vào − 5 có ra 10 không?"],
            "Lỗi hay gặp là lấy 10 − 5 = 5 (làm lại phép của máy thay vì phép ngược). Phép ngược của '−5' là '+5': 10 + 5 = 15. Kiểm tra: 15 − 5 = 10.",
            { choices: ["5", "15", "50", "2"] }),
          Q("9.4-08", "num", 3, "fm-find-function", "A mapping diagram shows 1 → 5, 3 → 7, 5 → 9. Using the same function, what is the output for input 20?", 24,
            ["Từ 1 sang 5, từ 3 sang 7, từ 5 sang 9: đầu ra hơn đầu vào bao nhiêu?", "Hàm là '+4'. Kiểm tra với cả ba cặp.", "Áp dụng cho 20."],
            "Mỗi đầu ra lớn hơn đầu vào 4 đơn vị: hàm '+4'. Với 20: 20 + 4 = 24.", { howto: "Each arrow joins an input to its output. Use the same rule for the input 20 and enter its output." }),
          Q("9.4-09", "multi", 3, "fm-many-functions", "A machine takes input 4 and gives output 12. Which functions could it be? (choose all)", [0, 1],
            ["4 + 8 bằng mấy? 4 × 3 bằng mấy?", "Thử 4 − 8 và 4 ÷ 3: có ra 12 không?", "Vì sao cần ít nhất hai cặp vào-ra để chắc chắn về hàm?"],
            "4 + 8 = 12 và 4 × 3 = 12 đều đúng. 4 − 8 = −4 và 4 ÷ 3 không bằng 12. Một cặp vào-ra có thể khớp với nhiều hàm, nên cần thêm cặp thứ hai để phân biệt.",
            { choices: ["+8", "×3", "−8", "÷3"] }),
          Q("9.4-10", "num", 3, "fm-two-step", "A two-step function machine does 'multiply by 3' then 'subtract 2'. The output is 19. What was the input?", 7,
            ["Có hai bước. Khi làm ngược, bước nào phải hoàn tác trước?", "Hoàn tác 'trừ 2' trước: 19 + 2 = ?", "Rồi hoàn tác 'nhân 3': chia cho 3."],
            "Làm ngược từng bước theo thứ tự đảo: 19 + 2 = 21, rồi 21 ÷ 3 = 7. Kiểm tra: 7 × 3 − 2 = 19.")
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Các bài toán dãy số quy luật và que diêm kiểu kiểm tra lớp 6–7 và học sinh giỏi đang chờ em ở cuối thung lũng!",
      questions: [
        Q("ch-01", "num", 2, "vn-term100", "Cho dãy số: 5; 8; 11; 14; … Số hạng thứ 100 của dãy là bao nhiêu?", 302,
          ["Hai số hạng liên tiếp hơn kém nhau bao nhiêu?", "Số hạng thứ n có dạng 3n cộng thêm một số. Số hạng đầu 5 = 3 × 1 + ?", "Công thức là 3n + 2. Thay n = 100."],
          "Công sai là 3, số hạng thứ n = 3n + 2 (kiểm tra: n=1 cho 5). Số hạng thứ 100 = 3 × 100 + 2 = 302.", V),
        Q("ch-02", "num", 3, "vn-count-terms", "Dãy 7; 10; 13; …; 301 gồm các số cách đều nhau 3 đơn vị. Dãy có bao nhiêu số hạng?", 99,
          ["Từ 7 lên 301 tăng tổng cộng bao nhiêu?", "Mỗi bước tăng 3, vậy có bao nhiêu bước? (301 − 7) ÷ 3.", "Số số hạng = số bước + 1."],
          "Số bước = (301 − 7) ÷ 3 = 98. Số số hạng = 98 + 1 = 99.", V),
        Q("ch-03", "num", 3, "vn-sum-arith", "Tính tổng A = 3 + 7 + 11 + … + 99 (hai số hạng liên tiếp hơn kém nhau 4).", 1275,
          ["Đếm xem dãy có bao nhiêu số hạng: (99 − 3) ÷ 4 + 1.", "Ghép cặp số đầu với số cuối: 3 + 99 = ?", "Tổng = (số đầu + số cuối) × số số hạng ÷ 2."],
          "Số số hạng: (99 − 3) ÷ 4 + 1 = 25. Mỗi cặp đầu–cuối có tổng 3 + 99 = 102. Tổng = 102 × 25 ÷ 2 = 1275.", V),
        Q("ch-04", "num", 2, "vn-matchstick", "Bạn Nam xếp các hình vuông liền nhau bằng que diêm: 1 hình vuông cần 4 que, 2 hình vuông liền kề cần 7 que, 3 hình cần 10 que, … Để xếp 50 hình vuông liền nhau cần bao nhiêu que?", 151,
          ["Mỗi lần thêm một hình vuông ta thêm mấy que (vì dùng chung một cạnh)?", "Số que là 4, 7, 10, ... có công thức 3n + 1. Kiểm tra n = 1, 2, 3.", "Thay n = 50."],
          "Mỗi hình vuông thêm vào cần 3 que, công thức: 3n + 1 (n=1: 4). Với n = 50: 3 × 50 + 1 = 151 que.", V),
        Q("ch-05", "num", 3, "vn-matchstick", "Các tam giác đều liền kề nhau xếp bằng que diêm cần 3, 5, 7, 9, … que cho 1, 2, 3, 4, … tam giác. Với đúng 101 que thì xếp được bao nhiêu tam giác?", 50,
          ["Mỗi tam giác thêm vào cần thêm mấy que?", "Công thức số que của n tam giác là 2n + 1. Kiểm tra n = 1, 2.", "Giải 2n + 1 = 101."],
          "Số que cho n tam giác là 2n + 1 (n=1: 3, n=2: 5). 2n + 1 = 101 nên n = 50 tam giác.", V),
        Q("ch-06", "text", 2, "vn-nth", "Viết số hạng tổng quát (theo n) của dãy 9; 14; 19; 24; …", "5n+4",
          ["Hai số hạng liên tiếp hơn kém nhau bao nhiêu?", "Hệ số của n bằng số đó. So 5 × 1 với 9: cần thêm bao nhiêu?", "Kiểm tra bằng n = 2: 5 × 2 + 4 có bằng 14 không?"],
          "Công sai 5 nên có dạng 5n + b. 9 = 5 × 1 + 4 nên b = 4. Số hạng thứ n là 5n + 4.", { howto: "Nhập biểu thức chứa n cho số hạng ở vị trí thứ n của dãy (không cần viết 'số hạng thứ n =').", source: "vn", lang: "vi", accept: ["4+5n", "5n + 4", "4 + 5n", "5*n+4", "n*5+4"] }),
        Q("ch-07", "mc", 3, "vn-membership", "Dãy 4; 7; 10; 13; … có số hạng thứ n là 3n + 1. Số 2025 có phải là số hạng của dãy không?", 1,
          ["Mỗi số hạng 3n + 1 chia 3 dư mấy?", "2025 chia hết cho 3 hay không? (2 + 0 + 2 + 5 = 9)", "Nếu 3n + 1 = 2025 thì n = 2024/3. n có nguyên không?"],
          "3n + 1 luôn chia 3 dư 1, còn 2025 chia hết cho 3. Giải 3n + 1 = 2025 được n = 2024/3 không nguyên, nên 2025 không thuộc dãy.",
          VC(["Có, n = 675", "Không, vì 2025 chia hết cho 3 còn mọi số hạng chia 3 dư 1", "Không, vì 2025 là số lẻ", "Có, vì 2025 lớn hơn 13"])),
        Q("ch-08", "num", 3, "vn-negative-term", "Dãy giảm dần: 100; 97; 94; 91; … Tìm số hạng thứ 50 của dãy.", -47,
          ["Mỗi bước giảm bao nhiêu?", "Từ số hạng thứ 1 đến số hạng thứ 50 có bao nhiêu bước giảm?", "100 − 3 × 49 = ? (kết quả âm)"],
          "Công thức: 103 − 3n (n=1: 100). Với n = 50: 103 − 150 = −47.", V),
        Q("ch-09", "num", 3, "vn-consecutive", "Ba số hạng liên tiếp của một dãy cách đều nhau có tổng bằng 66. Số hạng ở giữa là bao nhiêu?", 22,
          ["Gọi số giữa là a và công sai d. Hai số kia là gì theo a và d?", "Cộng lại: (a − d) + a + (a + d) bằng bao nhiêu?", "3a = 66, nên a = ?"],
          "Ba số: a − d, a, a + d có tổng 3a = 66, nên a = 22.", V),
        Q("ch-10", "num", 2, "vn-fibonacci", "Dãy Fibonacci: 1; 1; 2; 3; 5; 8; … trong đó mỗi số hạng từ số thứ ba bằng tổng hai số đứng ngay trước nó. Tìm số hạng thứ 10.", 55,
          ["Số hạng thứ 7 bằng 5 + 8 = ?", "Viết tiếp từng số hạng: 13, 21, ...", "Số hạng thứ 10 bằng tổng của số hạng thứ 8 và thứ 9."],
          "1, 1, 2, 3, 5, 8, 13, 21, 34, 55. Số hạng thứ 10 là 55.", V)
      ]
    },
    project: {
      title: "Mole and goose", titleVi: "Chuột chũi và ngỗng",
      pages: [212],
      goal: "Ngỗng đi trên trục số và đẻ trứng cách đều (ví dụ 2, 7, 12, 17, ...). Chuột chũi chui lên mặt đất cũng cách đều (ví dụ 1, 4, 7, 10, 13, ...). Em khám phá khi nào chuột tìm thấy trứng, và khi nào không bao giờ tìm thấy.",
      steps: [
        "Vẽ một trục số từ −5 đến 40. Đánh dấu các vị trí ngỗng đẻ trứng: 2, 7, 12, 17, ... và vị trí chuột chui lên: 1, 4, 7, 10, 13, ... Chuột gặp trứng ở những số nào?",
        "Nhìn các vị trí chung (7, 22, 37, ...). Chúng cách nhau bao nhiêu? Con số đó liên quan thế nào tới bước đi 5 của ngỗng và bước đi 3 của chuột?",
        "Tự chọn điểm bắt đầu và bước đi cho mỗi con vật. Thử ít nhất 5 cặp dãy khác nhau và ghi lại các vị trí chuột gặp trứng.",
        "Tìm một cặp dãy mà chuột không bao giờ tìm thấy trứng (gợi ý: thử bước đi chẵn và điểm bắt đầu khác tính chẵn lẻ).",
        "Rút ra quy tắc: các vị trí trùng nhau cách nhau bao nhiêu? Khi nào không có vị trí trùng?"
      ],
      extensions: [
        "Thêm con thứ ba (ví dụ thỏ nhảy cách đều). Khi nào cả ba con vật cùng gặp nhau tại một điểm?",
        "Cho ngỗng bước đi 6 và chuột bước đi 4: viết ra các điều kiện (chẵn/lẻ) để họ có thể gặp nhau.",
        "Viết số hạng tổng quát cho dãy của ngỗng và của chuột, rồi thử dùng đại số để tìm các điểm chung."
      ],
      reflect: [
        "Em nhận ra điều gì đặc biệt về khoảng cách giữa các vị trí chuột tìm thấy trứng?",
        "Khi nào thì chuột không bao giờ gặp trứng? Em giải thích bằng lời của mình.",
        "Em dùng được kiến thức dãy số cách đều ở đâu ngoài đời (ví dụ lịch, bậc cầu thang, nhịp trống)?"
      ]
    }
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "9.1-01": "seq-arith", "9.1-02": "seq-arith", "9.1-03": "seq-mult", "9.1-04": "seq-two-step", "9.1-05": "seq-two-step", "9.1-06": "seq-two-step", "9.1-09": "seq-backwards", "9.2-01": "pattern-far", "9.2-02": "pattern-far", "9.2-04": "pattern-far", "9.2-05": "pattern-far", "9.2-10": "pattern-far", "9.3-02": "nth-use", "9.3-06": "nth-use", "9.3-09": "nth-position", "9.4-01": "fm-output", "9.4-02": "fm-output", "9.4-03": "fm-output", "9.4-04": "fm-inverse", "9.4-05": "fm-inverse", "9.4-06": "fm-inverse", "9.4-07": "fm-inverse", "9.4-10": "fm-two-step" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 9; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
