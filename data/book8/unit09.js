(function () {
  function Q(id, type, diff, skill, q, o) {
    return Object.assign({
      id: id, type: type, diff: diff, skill: skill, source: "book", lang: "en", q: q,
      svg: null, choices: null, answer: null, accept: [], tol: 0, unitLabel: "",
      hints: [], explain: "", why: null
    }, o);
  }
  function V(id, type, diff, skill, q, o) {
    return Q(id, type, diff, skill, q, Object.assign({ source: "vn", lang: "vi" }, o));
  }
  function sq(x, y, w) {
    return "<rect x='" + x + "' y='" + y + "' width='" + w + "' height='" + w + "'/>";
  }

  var s91 = [
    Q("9.1-01", "num", 1, "term-to-term", "The sequence 7, 10½, 14, 17½, … has the term-to-term rule 'add 3½'. What is the next term?", {
      answer: 21,
      hints: ["Số hạng cuối đã cho là gì?", "Cộng thêm 3½ vào số hạng cuối.", "17½ + 3½ = ?"],
      explain: "Quy luật cộng 3½: 17½ + 3½ = 21."
    }),
    Q("9.1-02", "num", 1, "term-to-term", "What is the term-to-term rule (a number to add) of 5, 5¼, 5½, 5¾, …? Give it as a decimal.", {
      answer: 0.25, tol: 0.001,
      hints: ["Lấy số hạng thứ hai trừ số hạng thứ nhất.", "5¼ − 5 = ?", "Viết ¼ dưới dạng số thập phân."],
      explain: "Mỗi số hạng tăng thêm ¼ = 0,25."
    }),
    Q("9.1-03", "num", 2, "term-to-term", "The first term is 4. The rule is 'multiply by 3 then add 2'. What is the third term?", {
      answer: 44,
      hints: ["Tìm số hạng thứ hai trước: 4 × 3 + 2.", "Số hạng thứ hai là 14.", "Áp dụng quy luật cho 14: 14 × 3 + 2."],
      explain: "Số hạng 2: 4 × 3 + 2 = 14. Số hạng 3: 14 × 3 + 2 = 44."
    }),
    Q("9.1-04", "num", 2, "term-to-term", "The first term is 8. The rule is 'multiply by 2 then subtract 5'. What is the fourth term?", {
      answer: 29,
      hints: ["Số hạng thứ hai: 8 × 2 − 5 = ?", "Số hạng thứ ba: 11 × 2 − 5 = ?", "Số hạng thứ ba là 17. Áp dụng một lần nữa."],
      explain: "8 → 11 → 17 → 17 × 2 − 5 = 29."
    }),
    Q("9.1-05", "num", 3, "term-to-term", "The first term is 9. The rule is 'subtract 6 then multiply by 2'. What is the first negative term?", { howto: "Keep applying the rule, starting from 9. Enter the first term of the sequence that is less than 0.",
      answer: -12,
      hints: ["Viết ra các số hạng lần lượt.", "9 → (9 − 6) × 2 = 6 → (6 − 6) × 2 = ?", "Số hạng thứ ba là 0; số hạng tiếp theo là bao nhiêu?"],
      explain: "9, 6, 0, rồi (0 − 6) × 2 = −12. Số hạng âm đầu tiên là −12."
    }),
    Q("9.1-06", "mc", 3, "term-to-term", "A sequence starts at 2 with the rule 'add 10 then divide by 2' (terms 2, 6, 8, 9, 9.5, …). Sofia says no term will ever be greater than 10. Is she right?", {
      choices: ["No, the terms keep growing beyond 10", "Yes, the terms get closer to 10 but never exceed it", "No, the terms eventually become negative", "Yes, because the terms stay the same"],
      answer: 1,
      hints: ["Viết thêm vài số hạng: 9,5 rồi?", "Số hạng mới là trung bình cộng của số hạng cũ và 10. Nó nằm giữa hai số nào?", "Một số nhỏ hơn 10, lấy trung bình với 10, có vượt 10 không?"],
      explain: "Mỗi số hạng mới là trung bình của số hạng trước và 10, nên luôn nằm giữa số trước và 10: tiến gần 10 nhưng không vượt 10."
    }),
    Q("9.1-07", "mc", 2, "term-to-term", "The first three terms of a sequence are 8, 10, 14. Which rule is correct?", {
      choices: ["Multiply by 3 then subtract 14", "Divide by 2 then add 6", "Subtract 3 then multiply by 2", "Add 2 each time"],
      answer: 2,
      hints: ["Thử mỗi quy luật với số 8. Quy luật nào cho ra 10?", "Rồi thử lại với 10 xem có ra 14 không.", "Quy luật 'cộng 2 mỗi lần' cho 8, 10, 12; có khớp không?"],
      explain: "(8 − 3) × 2 = 10 và (10 − 3) × 2 = 14. Các quy luật khác chỉ đúng một bước hoặc sai ngay bước đầu. 'Cộng 2' cho 12 chứ không phải 14."
    }),
    Q("9.1-08", "mc", 2, "term-to-term", "The 10th term is 50⅖ and the rule is 'add 4⅗'. Tania finds the 20th term by doubling the 10th term. Why is this wrong?", {
      choices: ["The sequence does not grow by multiplying, it grows by adding 4⅗ each time, so the 20th term is not double the 10th", "Doubling is right but she added incorrectly", "The 20th term must be smaller than the 10th", "She should have halved the 10th term"],
      answer: 0,
      hints: ["Từ số hạng thứ 10 đến thứ 20 có bao nhiêu bước cộng?", "Mỗi bước thêm 4⅗. Số hạng tăng gấp đôi hay tăng thêm một lượng cố định?", "Số hạng thứ 20 = số hạng thứ 10 + 10 lần 4⅗."],
      explain: "Dãy tăng đều (cộng cố định) chứ không nhân. Số hạng thứ 20 = số hạng thứ 10 + 10 × 4⅗, không phải 2 × số hạng thứ 10. Lỗi: nhầm quy luật cộng với tỉ lệ thuận."
    }),
    Q("9.1-09", "num", 3, "term-to-term", "The 10th term is 50.4 and the rule is 'add 4.6'. What is the 20th term?", {
      answer: 96.4, tol: 0.001,
      hints: ["Từ số hạng thứ 10 đến thứ 20 có mấy bước?", "Mỗi bước cộng 4,6. Vậy tổng cộng thêm bao nhiêu?", "50,4 + 10 × 4,6."],
      explain: "10 bước × 4,6 = 46. 50,4 + 46 = 96,4."
    }),
    Q("9.1-10", "num", 3, "term-to-term-reverse", "The 7th term of a sequence is 442. The rule is 'add 3 then multiply by 2'. What is the 4th term?", {
      answer: 50,
      hints: ["Muốn lùi một bước, làm phép ngược theo thứ tự ngược lại: chia 2 rồi trừ 3.", "Số hạng thứ 6: 442 ÷ 2 − 3 = 218.", "Lùi tiếp hai lần nữa: 218 → ? → ?"],
      explain: "Thứ 6: 442 ÷ 2 − 3 = 218. Thứ 5: 218 ÷ 2 − 3 = 106. Thứ 4: 106 ÷ 2 − 3 = 50. Kiểm tra: (50 + 3) × 2 = 106."
    })
  ];

  var s92 = [
    Q("9.2-01", "num", 1, "position-to-term", "A pattern of dots has 5, 7, 9, … dots in Patterns 1, 2, 3. The position-to-term rule is term = 2 × position + 3. How many dots are in Pattern 10?", {
      answer: 23,
      hints: ["Thay vị trí 10 vào quy luật.", "2 × 10 = ?", "Cộng thêm 3."],
      explain: "2 × 10 + 3 = 23 chấm."
    }),
    Q("9.2-02", "mc", 1, "position-to-term", "The sequence 5, 7, 9, 11, … rises by 2 each time. Which is its position-to-term rule?", {
      choices: ["term = 2 × position + 3", "term = 5 × position + 2", "term = position + 4", "term = 3 × position + 2"],
      answer: 0,
      hints: ["Số nhân của vị trí lấy từ đâu? (mỗi bước tăng bao nhiêu)", "Thử vị trí 1: 2 × 1 = 2; cần ra 5, phải cộng thêm bao nhiêu?", "Kiểm tra vị trí 2 phải ra 7."],
      explain: "Mỗi bước tăng 2 nên nhân vị trí với 2. 2 × 1 = 2, cần 5, cộng 3. Kiểm tra: 2 × 2 + 3 = 7."
    }),
    Q("9.2-03", "text", 2, "position-to-term", "Squares: Pattern 1 has 4, Pattern 2 has 7, Pattern 3 has 10, … Write the rule for the number of squares in Pattern n (in terms of n).", { howto: "Find a rule that gives the number of squares in Pattern n from n. Enter it as an expression in n.",
      answer: "3n+1", accept: ["3*n+1", "3×n+1", "1+3n", "n*3+1", "3n + 1"],
      hints: ["Mỗi mẫu tăng thêm mấy ô?", "Số nhân của n là 3. Thử 3 × 1 = 3; cần 4.", "Cộng thêm 1."],
      explain: "Mỗi bước thêm 3 ô nên có 3n; 3 × 1 = 3 còn thiếu 1 nên cộng 1: 3n + 1. Kiểm tra n = 3: 10."
    }),
    Q("9.2-04", "num", 2, "position-to-term", "A pattern of pink squares has 3, 5, 7, … squares in Patterns 1, 2, 3. How many squares are in Pattern 15?", {
      answer: 31,
      hints: ["Mỗi mẫu tăng thêm mấy ô?", "Quy luật: 2 × vị trí + 1.", "Thay vị trí 15."],
      explain: "term = 2n + 1. Với n = 15: 2 × 15 + 1 = 31."
    }),
    Q("9.2-05", "text", 2, "position-to-term", "A pattern of dots has 6, 10, 14, 18, … dots. Write the rule for Pattern n (in terms of n).", { howto: "Find a rule that gives the number of dots in Pattern n from n. Enter it as an expression in n.",
      answer: "4n+2", accept: ["4*n+2", "4×n+2", "2+4n", "4 n+2", "4n + 2"],
      hints: ["Mỗi lần tăng bao nhiêu?", "Thử 4 × 1 = 4; cần ra 6.", "Cần cộng thêm 2."],
      explain: "Tăng 4 mỗi lần nên 4n; 4 × 1 = 4 thiếu 2, vậy 4n + 2. Kiểm tra n = 3: 14."
    }),
    Q("9.2-06", "num", 2, "position-to-term", "Rectangles: Pattern 1 has 3, Pattern 2 has 8, Pattern 3 has 13, … How many rectangles are in Pattern 12?", {
      answer: 58,
      hints: ["Mỗi mẫu tăng bao nhiêu hình chữ nhật?", "Tăng 5, nên nhân vị trí với 5 rồi trừ một số.", "5 × 1 = 5, cần 3 nên trừ 2. Thay n = 12."],
      explain: "term = 5n − 2. Với n = 12: 5 × 12 − 2 = 58."
    }),
    Q("9.2-07", "mc", 2, "position-to-term", "Harsha is given triangles: Pattern 1 has 4, Pattern 2 has 6, Pattern 3 has 8. He writes term = 4 × position + 2 ('starts with 4, goes up by 2'). Which rule is actually correct?", {
      choices: ["term = 2 × position + 2", "term = 4 × position + 2", "term = 2 × position + 4", "term = position + 3"],
      answer: 0,
      hints: ["Thử quy luật của Harsha với vị trí 1: có ra 4 không?", "Số nhân của vị trí là mức tăng mỗi bước, không phải số hạng đầu.", "Mức tăng là 2; 2 × 1 = 2, cần 4 nên cộng 2."],
      explain: "4 × 1 + 2 = 6, không phải 4. Harsha nhầm số hạng đầu với số nhân. Mức tăng mỗi bước (2) mới là số nhân: 2n + 2."
    }),
    Q("9.2-08", "text", 2, "position-to-term", "Write the rule (in terms of n) for the sequence 10, 15, 20, 25, …", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').",
      answer: "5n+5", accept: ["5*n+5", "5×n+5", "5+5n", "5(n+1)", "5 n+5", "5n + 5"],
      hints: ["Mức tăng mỗi bước là bao nhiêu?", "5 × 1 = 5; cần 10.", "Cộng thêm 5."],
      explain: "Tăng 5 nên 5n; 5 × 1 = 5 thiếu 5 nên cộng 5: 5n + 5."
    }),
    Q("9.2-09", "num", 3, "position-to-term", "A sequence of patterns has 10, 30, 50, 70, … items. How many items are in Pattern 20?", {
      answer: 390,
      hints: ["Mức tăng mỗi bước là bao nhiêu?", "Tăng 20 nên 20n; 20 × 1 = 20, cần 10.", "Quy luật 20n − 10. Thay n = 20."],
      explain: "term = 20n − 10. Với n = 20: 400 − 10 = 390."
    }),
    Q("9.2-10", "mc", 3, "position-to-term", "A sequence is 5, 8, 11, 14, … Razi says the rule is term = 2 × position + 3. Is he correct, and why?", {
      choices: ["Yes: 2 × 1 + 3 = 5", "No: it works for Pattern 1 but gives 7 for Pattern 2, not 8; the correct rule is 3n + 2", "No: the correct rule is 3n + 5", "Yes: because the sequence starts at 5"],
      answer: 1,
      hints: ["Kiểm tra quy luật của Razi với vị trí 2 chứ không chỉ vị trí 1.", "2 × 2 + 3 = ? có bằng 8 không?", "Mức tăng thực sự là 3, vậy số nhân là 3."],
      explain: "Kiểm tra một vị trí chưa đủ. Với vị trí 2: 2 × 2 + 3 = 7 ≠ 8. Mức tăng là 3 nên quy luật đúng là 3n + 2 (3 × 1 + 2 = 5, 3 × 2 + 2 = 8)."
    })
  ];

  var s93 = [
    Q("9.3-01", "num", 1, "nth-term-use", "The nth term of a sequence is 2n − 1. What is the 10th term?", {
      answer: 19,
      hints: ["Thay n bằng 10.", "2 × 10 = ?", "Trừ 1."],
      explain: "2 × 10 − 1 = 19."
    }),
    Q("9.3-02", "num", 2, "nth-term-use", "The nth term of a sequence is ½n + 6. What is the 8th term?", {
      answer: 10,
      hints: ["Thay n = 8.", "½ × 8 = ?", "Cộng 6."],
      explain: "½ × 8 + 6 = 4 + 6 = 10."
    }),
    Q("9.3-03", "text", 2, "nth-term-find", "Write the nth term of the sequence 7, 10, 13, 16, …", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').",
      answer: "3n+4", accept: ["3*n+4", "3×n+4", "4+3n", "3 n+4", "3n + 4"],
      hints: ["Mức tăng mỗi bước là bao nhiêu? Đó là hệ số của n.", "3 × 1 = 3; cần 7.", "Cộng 4."],
      explain: "Tăng 3 nên 3n; 3 × 1 = 3 thiếu 4. Số hạng tổng quát: 3n + 4."
    }),
    Q("9.3-04", "text", 2, "nth-term-find", "Write the nth term of the sequence 6, 11, 16, 21, …", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').",
      answer: "5n+1", accept: ["5*n+1", "5×n+1", "1+5n", "5 n+1", "5n + 1"],
      hints: ["Hệ số của n là mức tăng.", "5 × 1 = 5; cần 6.", "Cộng 1."],
      explain: "Tăng 5 nên 5n; 5 × 1 = 5 thiếu 1 nên cộng 1: 5n + 1."
    }),
    Q("9.3-05", "text", 2, "nth-term-find", "Write the nth term of the sequence 3, 7, 11, 15, …", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').",
      answer: "4n-1", accept: ["4n−1", "4*n-1", "4×n-1", "-1+4n", "4n - 1", "4 n-1"],
      hints: ["Hệ số của n là 4. Thử 4 × 1.", "4 × 1 = 4; cần 3.", "Phải trừ 1."],
      explain: "Tăng 4 nên 4n; 4 × 1 = 4 mà số hạng đầu là 3 nên trừ 1: 4n − 1."
    }),
    Q("9.3-06", "text", 3, "nth-term-find", "Write the nth term of the decreasing sequence 24, 18, 12, 6, 0, …", { howto: "Find the rule that gives the term in any position n of this sequence. Enter it as an expression in n (no need to write 'nth term =').",
      answer: "30-6n", accept: ["30−6n", "-6n+30", "−6n+30", "30 - 6n", "30-6*n", "30-6×n", "-6n + 30"],
      hints: ["Dãy giảm 6 mỗi bước, vậy hệ số của n là gì?", "Hệ số là −6. −6 × 1 = −6; cần ra 24.", "Cộng 30."],
      explain: "Giảm 6 nên hệ số n là −6. −6 × 1 = −6, cần 24 nên cộng 30: 30 − 6n (hay −6n + 30). Kiểm tra n = 5: 0."
    }),
    Q("9.3-07", "mc", 2, "nth-term-use", "Which of these numbers is a term of the sequence with nth term 3n + 5?", {
      choices: ["48", "50", "52", "54"],
      answer: 1,
      hints: ["Lập phương trình 3n + 5 = số đã cho.", "Giải n; n phải là số nguyên dương.", "Với 50: 3n = 45. Với 48: 3n = 43 thì sao?"],
      explain: "3n + 5 = 50 cho n = 15 (nguyên). 48, 52, 54 cho n = 43/3, 47/3, 49/3 không nguyên. Lỗi: chỉ tìm n mà không kiểm tra n có nguyên không."
    }),
    Q("9.3-08", "num", 3, "nth-term-use", "Card A: the 12th term of the sequence with nth term 8n − 4. Card B: the 7th term of the sequence with nth term 11n + 16. Work out (value of B) − (value of A).", {
      answer: 1,
      hints: ["Tính A: thay n = 12 vào 8n − 4.", "A = 92. Tính B: thay n = 7 vào 11n + 16.", "B = 93. Lấy B − A."],
      explain: "A = 8 × 12 − 4 = 92; B = 11 × 7 + 16 = 93. B − A = 1 nên thẻ B lớn hơn."
    }),
    Q("9.3-09", "num", 2, "nth-term-use", "In the sequence with nth term 6n − 5, which position n gives the term 79?", { howto: "Find where the term 79 is in the sequence. Enter its position number n, not the term itself.",
      answer: 14,
      hints: ["Lập phương trình 6n − 5 = 79.", "Cộng 5 hai vế: 6n = 84.", "Chia cho 6."],
      explain: "6n − 5 = 79 → 6n = 84 → n = 14. Vậy 79 là số hạng thứ 14."
    }),
    Q("9.3-10", "mc", 3, "nth-term-reason", "Without calculating terms, why can the sequence 24, 18, 12, 6, 0, … NOT have nth term 2n + 22?", {
      choices: ["Because the sequence is decreasing but 2n + 22 increases as n grows", "Because 22 is bigger than 2", "Because the first term would be 22", "Because the sequence contains 0"],
      answer: 0,
      hints: ["Dãy đã cho đang tăng hay giảm?", "Hệ số của n trong 2n + 22 là dương hay âm? Vậy biểu thức tăng hay giảm?", "Dãy giảm thì hệ số n phải có dấu thế nào?"],
      explain: "Dãy giảm đều nên hệ số của n phải âm (−6). 2n + 22 có hệ số dương nên tăng: 24, 26, 28, … (số hạng đầu 24 vẫn khớp nhưng số hạng sau thì không).",
      why: null
    })
  ];

  var s94 = [
    Q("9.4-01", "num", 1, "function-machine", "A function machine adds 5 to the input. The input is 2½. What is the output?", {
      answer: 7.5, tol: 0.001,
      hints: ["Máy làm phép tính gì với số đầu vào?", "2½ + 5 = ?", "Viết dưới dạng số thập phân."],
      explain: "Output = 2,5 + 5 = 7,5."
    }),
    Q("9.4-02", "num", 1, "function-machine", "A two-step machine: × 2 then + 1. The input is 4.5. What is the output?", {
      answer: 10,
      hints: ["Làm phép đầu tiên: 4,5 × 2.", "Kết quả bước 1 là 9.", "Làm tiếp bước 2: 9 + 1."],
      explain: "4,5 × 2 = 9; 9 + 1 = 10."
    }),
    Q("9.4-03", "num", 2, "function-machine", "A two-step machine: ÷ 2 then − 3. The input is 19. What is the output?", {
      answer: 6.5, tol: 0.001,
      hints: ["19 ÷ 2 = ?", "Bước 1 cho 9,5.", "Trừ 3."],
      explain: "19 ÷ 2 = 9,5; 9,5 − 3 = 6,5."
    }),
    Q("9.4-04", "num", 2, "function-inverse", "A machine does × 3 then − 1. The output is 26. What was the input?", {
      answer: 9,
      hints: ["Muốn tìm đầu vào, đi ngược lại từng bước.", "Phép ngược của − 1 là + 1: 26 + 1 = 27.", "Phép ngược của × 3 là ÷ 3."],
      explain: "Đảo ngược: 26 + 1 = 27, rồi 27 ÷ 3 = 9. Kiểm tra: 9 × 3 − 1 = 26."
    }),
    Q("9.4-05", "num", 2, "function-inverse", "A machine does ÷ 2 then + 5. The output is 11.5. What was the input?", {
      answer: 13, tol: 0.001,
      hints: ["Đảo bước cuối trước: phép ngược của + 5 là gì?", "11,5 − 5 = 6,5.", "Phép ngược của ÷ 2 là × 2."],
      explain: "11,5 − 5 = 6,5; 6,5 × 2 = 13. Kiểm tra: 13 ÷ 2 + 5 = 11,5."
    }),
    Q("9.4-06", "text", 2, "function-equation", "Write the function 'multiply x by 2 then add 1' as an equation starting y = …", {
      answer: "y=2x+1", accept: ["y=2*x+1", "y=2×x+1", "y=1+2x", "y = 2x + 1", "y=x*2+1", "2x+1"],
      hints: ["x là đầu vào, y là đầu ra.", "Nhân x với 2 được gì?", "Rồi cộng 1."],
      explain: "x × 2 + 1 viết gọn là y = 2x + 1."
    }),
    Q("9.4-07", "text", 3, "function-equation", "Write the function 'subtract 3 from x, then multiply by 8' as an equation. (Remember the brackets!)", {
      answer: "y=8(x-3)", accept: ["y=8(x−3)", "y = 8(x - 3)", "y=(x-3)*8", "y=(x-3)×8", "8(x-3)", "y=8x-24", "y=8x−24", "y=(x-3)8"],
      hints: ["Phép nào làm trước: trừ hay nhân?", "Sau khi trừ 3 ta có (x − 3).", "Nhân cả biểu thức đó với 8, nhớ dấu ngoặc."],
      explain: "Trừ 3 trước: (x − 3), rồi nhân 8: y = 8(x − 3) = 8x − 24. Lỗi hay gặp: viết 8x − 3 (quên ngoặc)."
    }),
    Q("9.4-08", "mc", 2, "function-inverse", "The function is y = 2x + 4. Which is the inverse function (x in terms of y)?", {
      choices: ["x = (y − 4) ÷ 2", "x = y ÷ 2 − 4", "x = 2y − 4", "x = (y + 4) ÷ 2"],
      answer: 0,
      hints: ["Hàm làm: nhân 2 rồi cộng 4. Đảo ngược theo thứ tự ngược lại thế nào?", "Trước tiên trừ 4 khỏi y, sau đó chia 2.", "Dấu ngoặc: phép trừ 4 phải xảy ra trước phép chia."],
      explain: "Đảo từng bước ngược: trừ 4 rồi chia 2, tức x = (y − 4) ÷ 2. 'y ÷ 2 − 4' sai vì chia trước rồi trừ."
    }),
    Q("9.4-09", "mc", 3, "function-equation", "A function machine has inputs x = 4, 5.5, 7 and outputs y = 13, 19, 25. Sofia thinks y = 3x + 1; Arun thinks y = 4x − 3. Who is correct?", {
      choices: ["Only Sofia", "Only Arun", "Both", "Neither"],
      answer: 1,
      hints: ["Thử x = 4 trong cả hai biểu thức.", "Cả hai đều cho 13. Thử x = 5,5.", "3 × 5,5 + 1 = 17,5 còn 4 × 5,5 − 3 = ? Có bằng 19 không?"],
      explain: "Với x = 5,5: 3x + 1 = 17,5 ≠ 19 nên Sofia sai; 4x − 3 = 19 ✓, và x = 7: 25 ✓. Chỉ Arun đúng. Phải thử mọi cặp giá trị, không chỉ một cặp."
    }),
    Q("9.4-10", "num", 3, "function-equation", "Marcus's two-step function gives y = 11 when x = 4. When x goes up by 4, y goes up by 2. What is y when x = 20?", {
      answer: 19,
      hints: ["x tăng 4 thì y tăng 2: y thay đổi bao nhiêu khi x tăng 1?", "Hệ số của x là ½, nên y = ½x + b. Dùng x = 4, y = 11 để tìm b.", "b = 11 − 2 = 9. Tính ½ × 20 + 9."],
      explain: "Hệ số của x là 2 ÷ 4 = ½. 11 = ½ × 4 + b nên b = 9, y = ½x + 9. Với x = 20: 10 + 9 = 19."
    })
  ];

  var ch = [
    V("ch-01", "num", 2, "nth-term", "Cho dãy số 3, 7, 11, 15, … Tìm số hạng thứ 50 của dãy.", {
      answer: 199,
      hints: ["Hiệu hai số hạng liên tiếp là bao nhiêu?", "Số hạng tổng quát có dạng 4n − 1.", "Thay n = 50."],
      explain: "Số hạng thứ n là 4n − 1 (4 × 1 − 1 = 3). Số hạng thứ 50 = 4 × 50 − 1 = 199."
    }),
    V("ch-02", "num", 3, "nth-term", "Cho dãy 5, 8, 11, 14, … Số 302 là số hạng thứ mấy của dãy?", {
      answer: 100,
      hints: ["Tìm số hạng tổng quát của dãy.", "Số hạng thứ n là 3n + 2.", "Giải 3n + 2 = 302."],
      explain: "3n + 2 = 302 nên 3n = 300, n = 100. Số 302 là số hạng thứ 100."
    }),
    V("ch-03", "num", 3, "matchsticks", "Xếp các hình vuông liền nhau bằng que diêm: 1 hình vuông cần 4 que, 2 hình vuông cần 7 que, 3 hình vuông cần 10 que, … Hỏi xếp 25 hình vuông cần bao nhiêu que?", {
      answer: 76,
      hints: ["Mỗi lần thêm một hình vuông ta thêm bao nhiêu que?", "Số que cho n hình vuông là 3n + 1.", "Thay n = 25."],
      explain: "Hình vuông đầu cần 4 que, mỗi hình sau thêm 3 que nên số que = 3n + 1. n = 25: 3 × 25 + 1 = 76 que."
    }),
    V("ch-04", "num", 3, "matchsticks", "Với quy tắc xếp hình vuông bằng que diêm (n hình vuông cần 3n + 1 que), có 100 que diêm thì xếp được nhiều nhất bao nhiêu hình vuông?", { howto: "Nhập số hình vuông nhiều nhất có thể xếp được mà dùng không quá 100 que.",
      answer: 33,
      hints: ["Cần 3n + 1 ≤ 100.", "3n ≤ 99.", "Chia 99 cho 3."],
      explain: "3n + 1 ≤ 100 nên n ≤ 33. Với n = 33 cần đúng 100 que. Vậy xếp được 33 hình vuông."
    }),
    V("ch-05", "num", 3, "arithmetic-sum", "Tính tổng S = 5 + 10 + 15 + … + 100 (các số cách đều 5).", {
      answer: 1050,
      hints: ["Có bao nhiêu số hạng? (100 ÷ 5)", "Có 20 số hạng. Ghép cặp đầu với cuối: 5 + 100 = 105.", "Tổng = số số hạng × (đầu + cuối) ÷ 2."],
      explain: "Có 20 số hạng. S = 20 × (5 + 100) ÷ 2 = 20 × 105 ÷ 2 = 1050."
    }),
    V("ch-06", "num", 3, "arithmetic-sum", "Tính tổng 3 + 7 + 11 + … + 99 (mỗi số hơn số trước 4 đơn vị).", {
      answer: 1275,
      hints: ["Số hạng thứ n là 4n − 1. Số 99 là số hạng thứ mấy?", "4n − 1 = 99 nên n = 25.", "S = 25 × (3 + 99) ÷ 2."],
      explain: "99 = 4n − 1 nên n = 25. S = 25 × (3 + 99) ÷ 2 = 25 × 51 = 1275."
    }),
    V("ch-07", "num", 3, "nth-term", "Tìm số hạng thứ 20 của dãy 2, 5, 10, 17, 26, …", {
      answer: 401,
      hints: ["Hiệu các số liên tiếp: 3, 5, 7, 9, … Em nhận ra gì? Thử so với các bình phương 1, 4, 9, 16, 25.", "Mỗi số hạng bằng bình phương vị trí cộng 1.", "n² + 1 với n = 20."],
      explain: "2 = 1² + 1, 5 = 2² + 1, 10 = 3² + 1… nên số hạng thứ n là n² + 1. n = 20: 400 + 1 = 401."
    }),
    V("ch-08", "num", 3, "pattern-rule", "Cho dãy 1, 1, 2, 3, 5, 8, 13, … trong đó mỗi số hạng từ số thứ ba bằng tổng hai số hạng ngay trước nó. Tìm số hạng thứ 10.", {
      answer: 55,
      hints: ["Viết tiếp dãy sau 13.", "Số tiếp theo: 8 + 13 = 21, rồi 13 + 21 = 34.", "Số hạng thứ 10 là 21 + 34."],
      explain: "Dãy: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. Số hạng thứ 10 là 55."
    }),
    V("ch-09", "num", 3, "pattern-rule", "Tìm số hạng thứ 10 của dãy 2, 6, 12, 20, 30, … (gợi ý: phân tích mỗi số thành tích hai số tự nhiên liên tiếp).", {
      answer: 110,
      hints: ["2 = 1 × 2, 6 = 2 × 3, 12 = 3 × 4. Quy luật là gì?", "Số hạng thứ n là n × (n + 1).", "n = 10: 10 × 11."],
      explain: "Số hạng thứ n là n(n + 1). Số hạng thứ 10 = 10 × 11 = 110."
    }),
    V("ch-10", "num", 2, "function-equation", "Một hãng taxi tính giá cước theo công thức y = 10 000x + 12 000 (đồng), trong đó x là số km và 12 000 đồng là tiền mở cửa. Đi 7 km thì phải trả bao nhiêu đồng?", {
      answer: 82000, unitLabel: "đồng",
      hints: ["x là gì? Thay x bằng quãng đường.", "10 000 × 7 = ?", "Cộng thêm 12 000 tiền mở cửa."],
      explain: "y = 10 000 × 7 + 12 000 = 70 000 + 12 000 = 82 000 đồng."
    })
  ];

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 9,
    title: "Sequences and functions",
    titleVi: "Dãy số và hàm số",
    strand: "Algebra",
    pages: [198, 223],
    realm: "Hang Vỏ Ốc Xoắn",
    emoji: "🐚",
    story: "Em lạc vào hang động có những vỏ ốc xoắn khổng lồ. Mỗi vòng xoắn lớn hơn vòng trước theo một quy luật bí mật. Chỉ khi tìm ra công thức số hạng tổng quát và hiểu chiếc máy hàm số thần kỳ, em mới mở được cửa ra.",
    glossary: [
      { en: "sequence", vi: "dãy số", def: "Danh sách các số sắp xếp theo một quy luật." },
      { en: "term-to-term rule", vi: "quy luật từ số hạng này sang số hạng kế", def: "Cách tính số hạng tiếp theo từ số hạng ngay trước." },
      { en: "position-to-term rule", vi: "quy luật theo vị trí", def: "Cách tính số hạng khi biết vị trí của nó trong dãy." },
      { en: "nth term", vi: "số hạng tổng quát", def: "Biểu thức theo n cho số hạng ở vị trí n, ví dụ 3n + 4." },
      { en: "function", vi: "hàm số", def: "Quan hệ cho mỗi số đầu vào đúng một số đầu ra." },
      { en: "function machine", vi: "máy hàm số", def: "Sơ đồ các phép tính biến đầu vào x thành đầu ra y." },
      { en: "inverse function", vi: "hàm ngược", def: "Hàm đưa đầu ra y trở lại đầu vào x." },
      { en: "mapping diagram", vi: "sơ đồ ánh xạ", def: "Hình vẽ các mũi tên nối đầu vào với đầu ra." }
    ],
    sections: [
      {
        id: "9.1", title: "Generating sequences", titleVi: "Tạo dãy số",
        learn: [
          "Dãy số là danh sách các số theo một quy luật. Quy luật từ số hạng này sang số hạng kế cho biết cách tính số tiếp theo.",
          "Quy luật có thể là cộng, trừ một số (kể cả phân số, số thập phân) hoặc gồm hai bước như 'nhân 2 rồi cộng 5'.",
          "Biết số hạng đầu và quy luật, em tính từng số hạng một.",
          "Muốn đi ngược về số hạng trước, làm phép tính ngược theo thứ tự ngược lại.",
          "Dãy cộng đều không tăng theo kiểu 'gấp đôi': số hạng thứ 20 không bằng 2 lần số hạng thứ 10."
        ],
        example: {
          q: "Số hạng đầu là 4, quy luật 'nhân 3 rồi cộng 2'. Viết ba số hạng đầu.",
          steps: ["Số hạng 1 = 4.", "Số hạng 2 = 4 × 3 + 2 = 14.", "Số hạng 3 = 14 × 3 + 2 = 44."],
          prompts: ["Số hạng đầu đã cho. Quy luật nói gì về cách tạo số hạng kế tiếp từ số hạng trước?","Lấy 4 làm đầu vào cho quy luật: nhân 3 trước hay cộng 2 trước? Kết quả là bao nhiêu?","Lấy kết quả vừa có làm đầu vào mới. Em được số hạng nào?"],
          answer: {"type":"text","value":"4, 14, 44","accept":["4;14;44","4,14,44","4 14 44"]},
          twist: {"q":"Nếu số hạng đầu là 1 và vẫn dùng quy luật 'nhân 3 rồi cộng 2' thì số hạng thứ ba là bao nhiêu?","answer":{"type":"num","value":17}}
        },
        questions: s91
      },
      {
        id: "9.2", title: "Finding rules for sequences", titleVi: "Tìm quy luật của dãy số",
        learn: [
          "Dãy các hình mẫu cho dãy số: đếm số chấm, ô vuông ở mỗi mẫu.",
          "Quy luật theo vị trí cho phép tính ngay số hạng ở vị trí bất kỳ.",
          "Mức tăng mỗi bước là số nhân của vị trí: tăng 3 thì có 3 × vị trí.",
          "Lập bảng: vị trí, số hạng, bội số của mức tăng, rồi xem cần cộng hay trừ thêm bao nhiêu để khớp.",
          "Luôn kiểm tra quy luật với ít nhất hai vị trí."
        ],
        example: {
          q: "Các mẫu có 4, 7, 10, … ô vuông. Tìm quy luật theo vị trí.",
          steps: ["Mức tăng là 3, nên xét 3 × vị trí = 3, 6, 9, 12.", "So với dãy 4, 7, 10, 13: mỗi số hơn 1.", "Quy luật: term = 3 × vị trí + 1."],
          prompts: ["Mỗi lần sang mẫu tiếp theo, số ô tăng thêm bao nhiêu? Điều đó gợi ý nhân vị trí với số nào?","Hãy lập dãy 3, 6, 9, 12 rồi đặt cạnh dãy thật 4, 7, 10, 13. Chúng chênh nhau bao nhiêu, có đều không?","Ghép hai nhận xét thành công thức theo vị trí n."],
          answer: {"type":"text","value":"3n+1","accept":["3×n+1","3*n+1","n×3+1","1+3n","1+3×n","1+n×3"]},
          twist: {"q":"Nếu các mẫu có 5, 9, 13, … ô vuông thì quy luật theo vị trí n là gì?","answer":{"type":"text","value":"4n+1","accept":["4×n+1","4*n+1","n×4+1","1+4n","1+4×n"]}}
        },
        questions: s92
      },
      {
        id: "9.3", title: "Using the nth term", titleVi: "Dùng số hạng tổng quát",
        learn: [
          "Thay chữ 'vị trí' bằng n: term = 2 × vị trí + 3 viết thành số hạng tổng quát 2n + 3.",
          "Để tìm số hạng thứ k, thay n = k vào biểu thức.",
          "Để tìm số hạng tổng quát của dãy cộng đều: hệ số của n bằng mức tăng, rồi thêm hay bớt để khớp số hạng đầu.",
          "Để kiểm tra một số có thuộc dãy không: giải 'biểu thức = số đó'; n phải là số nguyên dương.",
          "Dãy giảm có hệ số của n âm, ví dụ 30 − 6n."
        ],
        example: {
          q: "Tìm số hạng tổng quát của dãy 7, 10, 13, 16, …",
          steps: ["Mức tăng là 3 nên hệ số của n là 3: bảng 3n = 3, 6, 9, 12.", "Mỗi số hạng của dãy hơn 3n là 4.", "Số hạng tổng quát: 3n + 4."],
          prompts: ["Các số hạng cách đều nhau bao nhiêu? Con số đó sẽ nhân với n trong công thức. Em lập bảng 3n thế nào?","So số hạng thật 7, 10, 13, 16 với bảng 3n: chênh lệch không đổi bằng bao nhiêu?","Kết hợp thành công thức số hạng thứ n. Thử n = 1 và n = 2 xem có ra 7 và 10 chưa."],
          answer: {"type":"text","value":"3n+4","accept":["3×n+4","3*n+4","n×3+4","4+3n","4+3×n","4+n×3"]},
          twist: {"q":"Với dãy 7, 10, 13, 16, … em dùng công thức để tìm số hạng thứ 50. Số hạng đó là bao nhiêu?","answer":{"type":"num","value":154}}
        },
        questions: s93
      },
      {
        id: "9.4", title: "Representing simple functions", titleVi: "Biểu diễn hàm số đơn giản",
        learn: [
          "Hàm số là quan hệ giữa hai tập số: đầu vào (input) x và đầu ra (output) y.",
          "Có thể vẽ máy hàm số một bước hoặc hai bước, sơ đồ ánh xạ, hoặc bảng giá trị x, y.",
          "Viết hàm số bằng phương trình bắt đầu bằng y = …, ví dụ 'nhân 2 rồi cộng 1' là y = 2x + 1.",
          "Hàm ngược đi từ y về x: đảo từng phép tính theo thứ tự ngược lại. Ví dụ y = 2x + 4 thì x = (y − 4) ÷ 2.",
          "Muốn tìm hàm từ bảng giá trị, xem y thay đổi bao nhiêu khi x thay đổi bao nhiêu."
        ],
        example: {
          q: "Máy hai bước: × 2 rồi + 1. Với x = 0, 2, 3, 4½ tìm y và viết phương trình.",
          steps: ["0 → 0 × 2 + 1 = 1; 2 → 5; 3 → 7; 4½ → 10.", "Phương trình: y = 2x + 1."],
          prompts: ["Với mỗi giá trị x, máy làm hai bước nào và theo thứ tự nào? Thử x = 0 và x = 2 trước.","Hãy nhìn các cặp (x, y) em vừa tính, rồi viết quy tắc của máy bằng một công thức nối y với x."],
          answer: {"type":"text","value":"y=2x+1","accept":["y=2×x+1","y=2*x+1","y=1+2x","y=x×2+1","y=1+2×x"]},
          twist: {"q":"Nếu máy đổi thứ tự thành '+ 1 rồi × 2' thì với x = 3 giá trị y là bao nhiêu?","answer":{"type":"num","value":8}}
        },
        questions: s94
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Các bài dãy số, que diêm và tính tổng kiểu thi lớp 7–8 đang chờ em trong hang!",
      questions: ch
    },
    project: null
  });
  // 🎲 number variants for spaced review (js/variants*.js)
  const GEN = {"9.1-01": "seq-arith", "9.1-03": "seq-two-step", "9.1-04": "seq-two-step", "9.1-09": "term-far", "9.1-10": "seq-backwards", "9.2-01": "pattern-far", "9.2-04": "pattern-far", "9.2-06": "pattern-far", "9.2-09": "pattern-far", "9.3-01": "nth-linear", "9.3-02": "nth-linear", "9.3-09": "nth-linear-pos", "9.4-01": "fm-output", "9.4-02": "fm-output", "9.4-03": "fm-output", "9.4-04": "fm-two-step", "9.4-05": "fm-two-step"};
  window.GAME_DATA.units.filter(function (u) { return u.id === 9; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
