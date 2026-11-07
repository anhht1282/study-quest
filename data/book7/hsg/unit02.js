window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 2,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-identity",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho a + b = 7 và ab = 10. Tính a² + b².",
    "svg": null,
    "choices": null,
    "answer": 29,
    "hints": [
      "Khai triển (a + b)² = (a + b)(a + b) thì được những hạng tử nào?",
      "Trong kết quả có chứa a² + b² và ab không? Viết a² + b² theo (a + b)² và ab.",
      "Thay a + b = 7 và ab = 10 vào."
    ],
    "explain": "(a + b)² = a² + 2ab + b², suy ra a² + b² = (a + b)² − 2ab = 7² − 2·10 = 49 − 20 = 29."
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-age-equation",
    "source": "hsg",
    "lang": "vi",
    "q": "Bố hơn con 28 tuổi. Bốn năm trước tuổi bố gấp 5 lần tuổi con. Hỏi hiện nay con bao nhiêu tuổi?",
    "svg": null,
    "choices": null,
    "answer": 11,
    "hints": [
      "Gọi tuổi con hiện nay là x. Tuổi bố hiện nay là gì?",
      "Bốn năm trước, tuổi con và tuổi bố lần lượt là bao nhiêu?",
      "Lập phương trình (tuổi bố) = 5 × (tuổi con) cho thời điểm bốn năm trước rồi giải."
    ],
    "explain": "Gọi x là tuổi con hiện nay thì tuổi bố là x + 28. Bốn năm trước: x + 28 − 4 = 5(x − 4), tức x + 24 = 5x − 20, suy ra 4x = 44, x = 11. Kiểm tra: bố 39 tuổi, bốn năm trước 35 và 7, mà 35 = 5 · 7."
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-sum-equation",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm x biết (x + 1) + (x + 2) + (x + 3) + … + (x + 10) = 155.",
    "svg": null,
    "choices": null,
    "answer": 10,
    "hints": [
      "Có bao nhiêu số hạng chứa x? Gom các x lại thành hạng tử nào?",
      "Phần còn lại 1 + 2 + … + 10 bằng bao nhiêu?",
      "Lập phương trình 10x + (tổng đó) = 155 rồi giải."
    ],
    "explain": "Có 10 số hạng chứa x nên vế trái bằng 10x + (1 + 2 + … + 10) = 10x + 55. Do đó 10x + 55 = 155, suy ra 10x = 100 và x = 10."
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-simplify-expression",
    "source": "hsg",
    "lang": "vi",
    "q": "Với y = −7, tính giá trị của biểu thức 3(2x − y) − 2(3x − 2y) + 5y. (Kết quả không phụ thuộc vào x.)",
    "svg": null,
    "choices": null,
    "answer": -42,
    "hints": [
      "Mở ngoặc từng tích: 3(2x − y) và 2(3x − 2y) cho những hạng tử nào? Chú ý dấu trừ đứng trước ngoặc thứ hai.",
      "Gom các hạng tử chứa x và các hạng tử chứa y. Hạng tử chứa x có triệt tiêu không?",
      "Biểu thức rút gọn còn lại là bội của y. Thay y = −7."
    ],
    "explain": "3(2x − y) − 2(3x − 2y) + 5y = 6x − 3y − 6x + 4y + 5y = 6y. Với y = −7 giá trị bằng 6 · (−7) = −42."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-double-inequality",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu số nguyên x thỏa mãn 2 < (3x + 1)/4 ≤ 7?",
    "svg": null,
    "choices": null,
    "answer": 7,
    "hints": [
      "Nhân cả ba vế với 4 thì bất đẳng thức kép thành gì?",
      "Trừ 1 rồi chia cho 3: x nằm trong khoảng nào?",
      "Chú ý dấu < và ≤ ở hai đầu, rồi đếm các số nguyên."
    ],
    "explain": "Nhân với 4: 8 < 3x + 1 ≤ 28. Trừ 1: 7 < 3x ≤ 27. Chia 3: 7/3 < x ≤ 9. Các số nguyên là 3, 4, 5, 6, 7, 8, 9, tức 7 số."
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-equation",
    "source": "hsg",
    "lang": "vi",
    "q": "Lan giải: x(x − 4) = 2x. \"Chia hai vế cho x được x − 4 = 2, vậy x = 6.\" Lời giải thiếu sót ở đâu?",
    "svg": null,
    "choices": [
      "Chia cho x mà chưa xét x = 0; x = 0 cũng là nghiệm",
      "Phải chia cả hai vế cho 2x",
      "Nghiệm đúng là x = −6",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "hints": [
      "Phép chia cho x chỉ được phép khi nào?",
      "Thử x = 0 vào phương trình ban đầu: hai vế bằng nhau không?",
      "Phương trình có thể có mấy nghiệm?"
    ],
    "explain": "Chia cho x chỉ hợp lệ khi x ≠ 0. Nhưng x = 0 thỏa mãn: 0·(−4) = 0 = 2·0. Cách đúng: x(x − 4) − 2x = 0 ⇒ x(x − 6) = 0 ⇒ x = 0 hoặc x = 6. Lan đã làm mất nghiệm x = 0."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-inequality-true",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho hai số a > b. Khẳng định nào CHẮC CHẮN đúng với mọi số c (c có thể âm)?",
    "svg": null,
    "choices": [
      "ac > bc",
      "a² > b²",
      "a − c > b − c",
      "1/a < 1/b"
    ],
    "answer": 2,
    "hints": [
      "Thử a = 2, b = 1, c = −1 với từng khẳng định. Khẳng định nào bị sai?",
      "Thử a = 1, b = −3 để kiểm tra a² > b² và 1/a < 1/b.",
      "Cộng hoặc trừ cùng một số vào hai vế bất đẳng thức thì chiều thay đổi không?"
    ],
    "explain": "Trừ cùng một số c vào hai vế không đổi chiều: a − c > b − c luôn đúng. ac > bc sai khi c = −1 (a = 2, b = 1). a² > b² sai với a = 1, b = −3. 1/a < 1/b sai với a = 1, b = −3 (1 < −1/3 là sai). Lỗi thường gặp: quên đổi chiều khi nhân với số âm."
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "hsg-natural-solutions",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu cặp số tự nhiên (x; y) thỏa mãn 3x + 5y = 31?",
    "svg": null,
    "choices": null,
    "answer": 2,
    "hints": [
      "Vì 5y ≤ 31, y có thể nhận những giá trị nào?",
      "Với mỗi y, tính 31 − 5y rồi kiểm tra có chia hết cho 3 không.",
      "Với những y thỏa mãn, x bằng bao nhiêu? Đếm các cặp."
    ],
    "explain": "Do 5y ≤ 31 nên y ∈ {0, 1, …, 6}. Tính 31 − 5y: 31, 26, 21, 16, 11, 6, 1. Chỉ 21 và 6 chia hết cho 3, cho x = 7 (y = 2) và x = 2 (y = 5). Có 2 cặp: (7; 2) và (2; 5).",
    "why": {
      "q": "Vì sao chỉ cần thử y = 0, 1, …, 6?",
      "choices": [
        "Vì 5y ≤ 31 nên y ≤ 6 (với y = 7 thì 5y = 35 > 31 và x sẽ âm)",
        "Vì 6 là ước của 31",
        "Vì y bắt buộc là số chẵn",
        "Vì x không thể bằng 0"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "Given a + b = 7 and ab = 10, find a² + b².",
  "q.hsg-01.hints": [
    "Expand (a + b)² = (a + b)(a + b). Which terms do you get?",
    "Does the result contain a² + b² and ab? Write a² + b² using (a + b)² and ab.",
    "Substitute a + b = 7 and ab = 10."
  ],
  "q.hsg-01.explain": "(a + b)² = a² + 2ab + b², so a² + b² = (a + b)² − 2ab = 7² − 2·10 = 49 − 20 = 29.",
  "q.hsg-02.q": "A father is 28 years older than his son. Four years ago the father was 5 times as old as the son. How old is the son now?",
  "q.hsg-02.hints": [
    "Let the son's age now be x. What is the father's age now?",
    "Four years ago, what were the son's and father's ages?",
    "Set up the equation (father) = 5 × (son) for four years ago and solve."
  ],
  "q.hsg-02.explain": "Let x be the son's age now, so the father is x + 28. Four years ago: x + 28 − 4 = 5(x − 4), i.e. x + 24 = 5x − 20, so 4x = 44 and x = 11. Check: the father is 39, four years ago 35 and 7, and 35 = 5 · 7.",
  "q.hsg-03.q": "Find x if (x + 1) + (x + 2) + (x + 3) + … + (x + 10) = 155.",
  "q.hsg-03.hints": [
    "How many terms contain x? What term do you get when you collect the x's?",
    "What is the remaining sum 1 + 2 + … + 10?",
    "Write 10x + (that sum) = 155 and solve."
  ],
  "q.hsg-03.explain": "There are 10 terms containing x, so the left side is 10x + (1 + 2 + … + 10) = 10x + 55. Hence 10x + 55 = 155, so 10x = 100 and x = 10.",
  "q.hsg-04.q": "For y = −7, find the value of 3(2x − y) − 2(3x − 2y) + 5y. (The result does not depend on x.)",
  "q.hsg-04.hints": [
    "Expand 3(2x − y) and 2(3x − 2y). Which terms do you get? Watch the minus sign before the second bracket.",
    "Collect the x terms and the y terms. Do the x terms cancel?",
    "The simplified expression is a multiple of y. Substitute y = −7."
  ],
  "q.hsg-04.explain": "3(2x − y) − 2(3x − 2y) + 5y = 6x − 3y − 6x + 4y + 5y = 6y. For y = −7 the value is 6 · (−7) = −42.",
  "q.hsg-05.q": "How many integers x satisfy 2 < (3x + 1)/4 ≤ 7?",
  "q.hsg-05.hints": [
    "Multiply all three parts by 4. What does the double inequality become?",
    "Subtract 1 then divide by 3: between which values does x lie?",
    "Pay attention to < and ≤ at the two ends, then count the integers."
  ],
  "q.hsg-05.explain": "Multiply by 4: 8 < 3x + 1 ≤ 28. Subtract 1: 7 < 3x ≤ 27. Divide by 3: 7/3 < x ≤ 9. The integers are 3, 4, 5, 6, 7, 8, 9, which is 7 numbers.",
  "q.hsg-06.q": "Lan solves x(x − 4) = 2x. \"Divide both sides by x to get x − 4 = 2, so x = 6.\" What is missing from the solution?",
  "q.hsg-06.hints": [
    "When is dividing by x allowed?",
    "Try x = 0 in the original equation: are the two sides equal?",
    "How many solutions can the equation have?"
  ],
  "q.hsg-06.explain": "Dividing by x is only valid when x ≠ 0. But x = 0 works: 0·(−4) = 0 = 2·0. The correct method: x(x − 4) − 2x = 0 ⇒ x(x − 6) = 0 ⇒ x = 0 or x = 6. Lan lost the solution x = 0.",
  "q.hsg-06.choices": [
    "She divided by x without considering x = 0; x = 0 is also a solution",
    "She should divide both sides by 2x",
    "The correct solution is x = −6",
    "The equation has no solution"
  ],
  "q.hsg-07.q": "Given numbers a > b, which statement is CERTAINLY true for every number c (c may be negative)?",
  "q.hsg-07.hints": [
    "Try a = 2, b = 1, c = −1 on each statement. Which fail?",
    "Try a = 1, b = −3 to test a² > b² and 1/a < 1/b.",
    "If you add or subtract the same number on both sides of an inequality, does its direction change?"
  ],
  "q.hsg-07.explain": "Subtracting the same number c from both sides keeps the direction: a − c > b − c is always true. ac > bc fails for c = −1 (a = 2, b = 1). a² > b² fails for a = 1, b = −3. 1/a < 1/b fails for a = 1, b = −3 (1 < −1/3 is false). A common mistake is forgetting to reverse the sign when multiplying by a negative number.",
  "q.hsg-07.choices": [
    "ac > bc",
    "a² > b²",
    "a − c > b − c",
    "1/a < 1/b"
  ],
  "q.hsg-08.q": "How many pairs of whole numbers (x, y) satisfy 3x + 5y = 31?",
  "q.hsg-08.hints": [
    "Since 5y ≤ 31, which values can y take?",
    "For each y, compute 31 − 5y and check whether it is divisible by 3.",
    "For the y that work, what is x? Count the pairs."
  ],
  "q.hsg-08.explain": "Since 5y ≤ 31, y ∈ {0, 1, …, 6}. Then 31 − 5y takes the values 31, 26, 21, 16, 11, 6, 1. Only 21 and 6 are divisible by 3, giving x = 7 (y = 2) and x = 2 (y = 5). There are 2 pairs: (7, 2) and (2, 5).",
  "q.hsg-08.why.q": "Why is it enough to try y = 0, 1, …, 6?",
  "q.hsg-08.why.choices": [
    "Because 5y ≤ 31 forces y ≤ 6 (for y = 7, 5y = 35 > 31 and x would be negative)",
    "Because 6 is a divisor of 31",
    "Because y must be even",
    "Because x cannot be 0"
  ]
}, vi: {} }
});
