window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 4,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-fast-decimal",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính nhanh (0,125 × 16,4 − 0,125 × 6,4) ÷ 0,25.",
    "svg": null,
    "choices": null,
    "answer": 5,
    "hints": [
      "Hai tích đầu có thừa số chung nào? Có thể đặt ra ngoài ngoặc không?",
      "16,4 − 6,4 bằng bao nhiêu?",
      "0,125 × 10 chia cho 0,25: hãy đổi 0,125 và 0,25 thành phân số nếu cần."
    ],
    "explain": "Đặt 0,125 làm thừa số chung: 0,125 × (16,4 − 6,4) = 0,125 × 10 = 1,25. Rồi 1,25 ÷ 0,25 = 5."
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-decimal-sum",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính 0,01 + 0,02 + 0,03 + … + 0,99 + 1,00 (tổng các số từ 0,01 đến 1,00, mỗi số hơn số trước 0,01).",
    "svg": null,
    "choices": null,
    "answer": 50.5,
    "tol": 0.001,
    "hints": [
      "Nếu nhân mỗi số với 100 thì dãy trở thành dãy nào?",
      "Tổng 1 + 2 + … + 100 tính bằng cách ghép cặp đầu–cuối như thế nào?",
      "Đừng quên chia lại cho 100."
    ],
    "explain": "Nhân với 100 được 1 + 2 + … + 100 = 100 × 101 : 2 = 5050 (ghép 50 cặp, mỗi cặp 101). Chia lại cho 100: 5050 : 100 = 50,5."
  },
  {
    "id": "hsg-03", "howto": "Tìm tất cả các giá trị x thỏa mãn, rồi chỉ nhập tổng của chúng.",
    "type": "num",
    "diff": 3,
    "skill": "hsg-absolute-decimal",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm tổng tất cả các giá trị của x thỏa mãn |4x − 3| = 2,2.",
    "svg": null,
    "choices": null,
    "answer": 1.5,
    "tol": 0.001,
    "hints": [
      "Giá trị tuyệt đối bằng 2,2 thì biểu thức trong dấu đó có thể bằng những số nào?",
      "Giải hai phương trình 4x − 3 = 2,2 và 4x − 3 = −2,2.",
      "Cộng hai nghiệm vừa tìm."
    ],
    "explain": "|4x − 3| = 2,2 nên 4x − 3 = 2,2 hoặc 4x − 3 = −2,2. Trường hợp 1: 4x = 5,2 nên x = 1,3. Trường hợp 2: 4x = 0,8 nên x = 0,2. Tổng: 1,3 + 0,2 = 1,5."
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-repeating-decimal",
    "source": "hsg",
    "lang": "vi",
    "q": "Biết 1 ÷ 7 = 0,142857142857… (nhóm 142857 lặp lại mãi). Chữ số thập phân thứ 2025 là chữ số nào?",
    "svg": null,
    "choices": null,
    "answer": 2,
    "hints": [
      "Nhóm lặp gồm bao nhiêu chữ số?",
      "Chia 2025 cho độ dài nhóm: được thương và số dư là bao nhiêu?",
      "Số dư cho biết chữ số thứ mấy trong nhóm. Đó là chữ số nào?"
    ],
    "explain": "Nhóm lặp có 6 chữ số. 2025 = 6 × 337 + 3, nên chữ số thứ 2025 là chữ số thứ 3 trong nhóm 1-4-2-8-5-7, tức là 2."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-mixture-decimal",
    "source": "hsg",
    "lang": "vi",
    "q": "Trộn 3 kg gạo loại 10 nghìn đồng/kg với x kg gạo loại 16 nghìn đồng/kg thì được hỗn hợp có giá trung bình 12 nghìn đồng/kg. Tìm x (kg).",
    "svg": null,
    "choices": null,
    "answer": 1.5,
    "unitLabel": "kg",
    "tol": 0.001,
    "hints": [
      "Tổng số tiền của hai loại gạo là bao nhiêu (theo x)?",
      "Tổng khối lượng hỗn hợp là bao nhiêu, và giá trung bình bằng tổng tiền chia cho gì?",
      "Lập phương trình 30 + 16x = 12(3 + x) rồi giải."
    ],
    "explain": "Tổng tiền: 3·10 + 16x = 30 + 16x. Tổng khối lượng 3 + x. Giá trung bình 12 nên 30 + 16x = 12(3 + x) = 36 + 12x, suy ra 4x = 6 và x = 1,5. Kiểm tra: (30 + 24) : 4,5 = 12."
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-decimal-between-0-1",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho số thập phân x với 0 < x < 1. Khẳng định nào CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
      "x² > x",
      "x² < x",
      "1 ÷ x < 1",
      "x + 0,1 < 1"
    ],
    "answer": 1,
    "hints": [
      "Thử x = 0,5 và x = 0,95 với từng khẳng định.",
      "Nhân một số dương nhỏ hơn 1 với chính nó thì kết quả lớn hơn hay nhỏ hơn số đó?",
      "1 chia cho một số nhỏ hơn 1 (dương) cho kết quả lớn hơn hay nhỏ hơn 1?"
    ],
    "explain": "x² = x · x, nhân x với một số nhỏ hơn 1 làm x nhỏ đi nên x² < x. Các đáp án khác sai: x = 0,5 cho x² = 0,25 < x; 1 ÷ x > 1; x = 0,95 thì x + 0,1 = 1,05 > 1. Lỗi thường gặp: tưởng phép nhân luôn làm số lớn lên."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-division",
    "source": "hsg",
    "lang": "vi",
    "q": "An tính 7,2 ÷ 0,06 như sau: \"Nhân số bị chia với 10 được 72, nhân số chia với 100 được 6, vậy 72 ÷ 6 = 12.\" Đáp án đúng và lỗi của An là gì?",
    "svg": null,
    "choices": [
      "Đáp án 120; lỗi: nhân hai số với hai số khác nhau (10 và 100)",
      "Đáp án 12; An làm đúng",
      "Đáp án 1,2; lỗi: quên dấu phẩy",
      "Đáp án 1200; lỗi: nhân cả hai với 1000"
    ],
    "answer": 0,
    "hints": [
      "Nếu nhân số bị chia và số chia với hai số khác nhau thì thương có giữ nguyên không?",
      "Muốn số chia 0,06 thành số tự nhiên, ta nhân cả hai số với bao nhiêu?",
      "Tính 720 ÷ 6."
    ],
    "explain": "Thương chỉ giữ nguyên khi nhân CẢ HAI số với cùng một số. Nhân cả hai với 100: 7,2 ÷ 0,06 = 720 ÷ 6 = 120. An đã nhân hai số với hai số khác nhau (10 và 100), nên kết quả bị chia 10: 12 thay vì 120."
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "hsg-decimal-shift",
    "source": "hsg",
    "lang": "vi",
    "q": "Tổng hai số thập phân là 12,1. Nếu dời dấu phẩy của số lớn sang trái một hàng thì được số bé. Tìm số lớn.",
    "svg": null,
    "choices": null,
    "answer": 11,
    "tol": 0.001,
    "hints": [
      "Dời dấu phẩy sang trái một hàng thì số bé bằng bao nhiêu lần số lớn?",
      "Gọi số lớn là a. Tổng a + (số bé) bằng bao nhiêu lần a?",
      "Lập phương trình 1,1 × a = 12,1."
    ],
    "explain": "Gọi số lớn là a thì số bé là a ÷ 10 = 0,1a. Tổng: a + 0,1a = 1,1a = 12,1 nên a = 12,1 : 1,1 = 11. Số bé là 1,1 và 11 + 1,1 = 12,1.",
    "why": {
      "q": "Vì sao dời dấu phẩy sang trái một hàng nghĩa là chia số đó cho 10?",
      "choices": [
        "Vì mỗi chữ số lùi xuống hàng thấp hơn liền kề nên giá trị của nó giảm 10 lần",
        "Vì ta trừ đi 1 đơn vị",
        "Vì ta phải chia cho 100",
        "Vì dời dấu phẩy không làm thay đổi giá trị số"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-03.howto": "Find all the values of x that work, then enter only their sum.",
  "q.hsg-01.q": "Calculate quickly (0.125 × 16.4 − 0.125 × 6.4) ÷ 0.25.",
  "q.hsg-01.hints": [
    "Do the first two products share a common factor? Can you factorise it out?",
    "What is 16.4 − 6.4?",
    "Now 0.125 × 10 divided by 0.25: convert 0.125 and 0.25 to fractions if it helps."
  ],
  "q.hsg-01.explain": "Take out the common factor 0.125: 0.125 × (16.4 − 6.4) = 0.125 × 10 = 1.25. Then 1.25 ÷ 0.25 = 5.",
  "q.hsg-02.q": "Calculate 0.01 + 0.02 + 0.03 + … + 0.99 + 1.00 (each number is 0.01 more than the one before).",
  "q.hsg-02.hints": [
    "If you multiply every number by 100, which sequence do you get?",
    "How do you add 1 + 2 + … + 100 by pairing first and last terms?",
    "Don't forget to divide by 100 at the end."
  ],
  "q.hsg-02.explain": "Multiplying by 100 gives 1 + 2 + … + 100 = 100 × 101 ÷ 2 = 5050 (50 pairs, each summing to 101). Divide by 100 again: 5050 ÷ 100 = 50.5.",
  "q.hsg-03.q": "Find the sum of all values of x that satisfy |4x − 3| = 2.2.",
  "q.hsg-03.hints": [
    "If an absolute value equals 2.2, which two numbers can the expression inside be?",
    "Solve the two equations 4x − 3 = 2.2 and 4x − 3 = −2.2.",
    "Add the two solutions."
  ],
  "q.hsg-03.explain": "|4x − 3| = 2.2 means 4x − 3 = 2.2 or 4x − 3 = −2.2. Case 1: 4x = 5.2 so x = 1.3. Case 2: 4x = 0.8 so x = 0.2. Sum: 1.3 + 0.2 = 1.5.",
  "q.hsg-04.q": "Given that 1 ÷ 7 = 0.142857142857… (the block 142857 repeats forever), which digit is in the 2025th decimal place?",
  "q.hsg-04.hints": [
    "How many digits are in the repeating block?",
    "Divide 2025 by the block length: what are the quotient and the remainder?",
    "The remainder tells you which digit of the block it is. Which digit is that?"
  ],
  "q.hsg-04.explain": "The repeating block has 6 digits. 2025 = 6 × 337 + 3, so the 2025th digit is the 3rd digit of the block 1-4-2-8-5-7, which is 2.",
  "q.hsg-05.q": "3 kg of rice costing 10 thousand dong/kg is mixed with x kg of rice costing 16 thousand dong/kg to give a mixture with average price 12 thousand dong/kg. Find x (kg).",
  "q.hsg-05.hints": [
    "What is the total cost of the two kinds of rice (in terms of x)?",
    "What is the total mass of the mixture, and the average price equals total cost divided by what?",
    "Set up 30 + 16x = 12(3 + x) and solve."
  ],
  "q.hsg-05.explain": "Total cost: 3·10 + 16x = 30 + 16x. Total mass: 3 + x. The average is 12, so 30 + 16x = 12(3 + x) = 36 + 12x, giving 4x = 6 and x = 1.5. Check: (30 + 24) ÷ 4.5 = 12.",
  "q.hsg-06.q": "x is a decimal with 0 < x < 1. Which statement is CERTAINLY true?",
  "q.hsg-06.hints": [
    "Try x = 0.5 and x = 0.95 on each statement.",
    "If you multiply a positive number less than 1 by itself, is the result bigger or smaller than the number?",
    "If you divide 1 by a positive number less than 1, is the result bigger or smaller than 1?"
  ],
  "q.hsg-06.explain": "x² = x · x, and multiplying x by a number less than 1 makes it smaller, so x² < x. The others fail: x = 0.5 gives x² = 0.25 < x; 1 ÷ x > 1; and x = 0.95 gives x + 0.1 = 1.05 > 1. A common mistake is to think multiplication always makes a number bigger.",
  "q.hsg-06.choices": [
    "x² > x",
    "x² < x",
    "1 ÷ x < 1",
    "x + 0.1 < 1"
  ],
  "q.hsg-07.q": "An calculates 7.2 ÷ 0.06 like this: \"Multiply the dividend by 10 to get 72, multiply the divisor by 100 to get 6, so 72 ÷ 6 = 12.\" What is the correct answer and what is An's mistake?",
  "q.hsg-07.hints": [
    "If you multiply the dividend and divisor by different numbers, does the quotient stay the same?",
    "To turn the divisor 0.06 into a whole number, what do you multiply both numbers by?",
    "Calculate 720 ÷ 6."
  ],
  "q.hsg-07.explain": "The quotient only stays the same when BOTH numbers are multiplied by the SAME number. Multiplying both by 100: 7.2 ÷ 0.06 = 720 ÷ 6 = 120. An multiplied by different numbers (10 and 100), so his result is 10 times too small: 12 instead of 120.",
  "q.hsg-07.choices": [
    "The answer is 120; the mistake: multiplying by two different numbers (10 and 100)",
    "The answer is 12; An is correct",
    "The answer is 1.2; the mistake: forgetting the decimal point",
    "The answer is 1200; the mistake: multiplying both by 1000"
  ],
  "q.hsg-08.q": "The sum of two decimals is 12.1. Moving the decimal point of the larger one one place to the left gives the smaller one. Find the larger number.",
  "q.hsg-08.hints": [
    "Moving the decimal point one place left makes the smaller number what fraction of the larger?",
    "Let the larger be a. The sum a + (smaller) is how many times a?",
    "Set up 1.1 × a = 12.1."
  ],
  "q.hsg-08.explain": "Let the larger number be a, so the smaller is a ÷ 10 = 0.1a. Sum: a + 0.1a = 1.1a = 12.1, so a = 12.1 ÷ 1.1 = 11. The smaller is 1.1 and 11 + 1.1 = 12.1.",
  "q.hsg-08.why.q": "Why does moving the decimal point one place left mean dividing the number by 10?",
  "q.hsg-08.why.choices": [
    "Because every digit moves to the next lower place, so its value becomes 10 times smaller",
    "Because we subtract 1",
    "Because we must divide by 100",
    "Because moving the point does not change the value"
  ]
}, vi: {} }
});
