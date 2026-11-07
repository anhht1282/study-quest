window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 1,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-remainder",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm số tự nhiên nhỏ nhất (lớn hơn 0) chia 8 dư 3, chia 10 dư 5 và chia 12 dư 7.",
    "svg": null,
    "choices": null,
    "answer": 115,
    "hints": [
      "Mỗi phép chia, số dư kém số chia bao nhiêu đơn vị? Em nhận xét gì?",
      "Nếu cộng thêm 5 vào số cần tìm thì nó chia hết cho những số nào?",
      "Số vừa nhận được phải là bội chung của 8, 10, 12. Bội chung nhỏ nhất là bao nhiêu?"
    ],
    "explain": "Ta có 8 − 3 = 10 − 5 = 12 − 7 = 5 nên n + 5 chia hết cho 8, 10 và 12. BCNN(8, 10, 12) = 120, n + 5 nhỏ nhất bằng 120 nên n = 115. Kiểm tra: 115 = 8·14 + 3 = 10·11 + 5 = 12·9 + 7."
  },
  {
    "id": "hsg-02", "howto": "Đếm các cặp (a; b) thỏa mãn cả hai điều kiện và nhập số cặp, không nhập các số a, b.",
    "type": "num",
    "diff": 3,
    "skill": "hsg-hcf-pairs",
    "source": "hsg",
    "lang": "vi",
    "q": "Hai số tự nhiên a < b có ƯCLN bằng 18 và tổng a + b = 144. Có bao nhiêu cặp (a; b) như vậy?",
    "svg": null,
    "choices": null,
    "answer": 2,
    "hints": [
      "Nếu ƯCLN(a, b) = 18 thì a và b viết được dưới dạng nào?",
      "Đặt a = 18m, b = 18n. Tổng m + n bằng bao nhiêu, và m, n phải có tính chất gì?",
      "Liệt kê các cặp m < n có m + n = 8 rồi loại những cặp có ước chung lớn hơn 1."
    ],
    "explain": "Đặt a = 18m, b = 18n với ƯCLN(m, n) = 1 và m < n. Từ a + b = 144 có m + n = 8. Các cặp: (1; 7), (2; 6), (3; 5). Cặp (2; 6) có ước chung 2 nên bị loại. Còn (1; 7) và (3; 5), tức (18; 126) và (54; 90). Có 2 cặp."
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-last-digit",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm chữ số tận cùng của tổng 7^2025 + 3^2025.",
    "svg": null,
    "choices": null,
    "answer": 0,
    "hints": [
      "Chữ số tận cùng của 7¹, 7², 7³, 7⁴, 7⁵ lần lượt là gì? Có quy luật lặp lại không?",
      "Chu kì lặp là bao nhiêu? 2025 chia cho chu kì dư mấy?",
      "Làm tương tự với 3^2025, rồi cộng hai chữ số tận cùng."
    ],
    "explain": "Chữ số tận cùng của lũy thừa của 7 lặp theo chu kì 4: 7, 9, 3, 1. Vì 2025 = 4·506 + 1 nên 7^2025 tận cùng bằng 7. Lũy thừa của 3 cũng có chu kì 4: 3, 9, 7, 1, nên 3^2025 tận cùng bằng 3. Tổng tận cùng bằng 7 + 3 = 10, tức chữ số tận cùng là 0."
  },
  {
    "id": "hsg-04", "howto": "5a7b là số có bốn chữ số, a và b là hai chữ số còn thiếu. Tìm tất cả các số như vậy chia hết cho 45, rồi nhập tổng của các số đó.",
    "type": "num",
    "diff": 3,
    "skill": "hsg-divisibility-digits",
    "source": "hsg",
    "lang": "vi",
    "q": "Gọi S là tổng tất cả các số có dạng 5a7b (a, b là chữ số) mà chia hết cho 45. Tính S.",
    "svg": null,
    "choices": null,
    "answer": 10845,
    "hints": [
      "45 phân tích thành tích của hai số nguyên tố cùng nhau nào?",
      "Chữ số b chỉ có thể là gì để chia hết cho 5? Rồi tổng các chữ số phải chia hết cho mấy?",
      "Với mỗi giá trị của b, tìm a, rồi cộng các số tìm được."
    ],
    "explain": "45 = 5 · 9 với 5 và 9 nguyên tố cùng nhau. Chia hết cho 5 thì b = 0 hoặc 5. Tổng các chữ số 5 + a + 7 + b phải chia hết cho 9. Nếu b = 0 thì 12 + a chia hết cho 9 nên a = 6, ta có 5670. Nếu b = 5 thì 17 + a chia hết cho 9 nên a = 1, ta có 5175. S = 5670 + 5175 = 10845."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-grouping-sum",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính S = 1 + 2 − 3 − 4 + 5 + 6 − 7 − 8 + … + 2021 + 2022 − 2023 − 2024 + 2025.",
    "svg": null,
    "choices": null,
    "answer": 1,
    "hints": [
      "Nếu nhóm bốn số liên tiếp một lần, tổng mỗi nhóm bằng bao nhiêu?",
      "Từ 1 đến 2024 có bao nhiêu nhóm như vậy?",
      "Số hạng cuối cùng 2025 nằm ngoài các nhóm. Cộng nó vào."
    ],
    "explain": "Mỗi nhóm bốn số (1 + 2 − 3 − 4), (5 + 6 − 7 − 8), … đều có tổng −4. Từ 1 đến 2024 có 2024 : 4 = 506 nhóm nên tổng là 506 · (−4) = −2024. Cộng thêm số hạng cuối 2025: S = −2024 + 2025 = 1."
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-square-divisible",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho n là số tự nhiên và n² chia hết cho 12. Khẳng định nào sau đây CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
      "n chia hết cho 12",
      "n chia hết cho 4",
      "n chia hết cho 6",
      "n chia hết cho 24"
    ],
    "answer": 2,
    "hints": [
      "Thử n = 6: n² bằng bao nhiêu và có chia hết cho 12 không?",
      "Nếu n² chia hết cho 2 và cho 3 (hai số nguyên tố) thì n phải chia hết cho những số nào?",
      "Khẳng định nào còn đúng với cả ví dụ n = 6?"
    ],
    "explain": "Vì 2 và 3 là số nguyên tố, n² chia hết cho 2 thì n chia hết cho 2, n² chia hết cho 3 thì n chia hết cho 3, nên n chia hết cho 6. Các đáp án còn lại sai: n = 6 có n² = 36 chia hết cho 12 nhưng 6 không chia hết cho 4, 12 hay 24. Lỗi thường gặp là nghĩ rằng n² chia hết cho 12 thì n chia hết cho 12."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-lcm",
    "source": "hsg",
    "lang": "vi",
    "q": "Khoa lập luận: \"Số 12 chia hết cho 4 và chia hết cho 6. Vậy mọi số chia hết cho cả 4 và 6 đều chia hết cho 4 × 6 = 24.\" Lập luận sai ở đâu?",
    "svg": null,
    "choices": [
      "Sai vì 4 và 6 không nguyên tố cùng nhau: phải chia hết cho BCNN(4, 6) = 12, không phải tích 24",
      "Sai vì 12 không chia hết cho 6",
      "Sai vì phải xét thêm cả 3 và 8",
      "Không sai, lập luận đúng"
    ],
    "answer": 0,
    "hints": [
      "Hai số 4 và 6 có nguyên tố cùng nhau không?",
      "Số nhỏ nhất chia hết cho cả 4 và 6 là số nào? Số đó có chia hết cho 24 không?",
      "Quy tắc \"chia hết cho cả a và b thì chia hết cho a × b\" cần điều kiện gì về a và b?"
    ],
    "explain": "Quy tắc chỉ đúng khi hai số nguyên tố cùng nhau. Ở đây ƯCLN(4, 6) = 2 nên cần chia hết cho BCNN(4, 6) = 12, chứ không phải tích 24. Phản ví dụ chính là số 12: chia hết cho 4 và 6 nhưng không chia hết cho 24."
  },
  {
    "id": "hsg-08", "howto": "Đếm xem có bao nhiêu số nguyên n làm cho (n + 5)/(n − 1) là một số nguyên; nhập số lượng đó, không nhập các giá trị n.",
    "type": "num",
    "diff": 3,
    "skill": "hsg-integer-fraction",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu số nguyên n để (n + 5)/(n − 1) là một số nguyên?",
    "svg": null,
    "choices": null,
    "answer": 8,
    "hints": [
      "Hãy viết (n + 5)/(n − 1) thành 1 cộng với một phân số đơn giản hơn. Phân số đó là gì?",
      "Để cả biểu thức là số nguyên thì n − 1 phải là gì của 6?",
      "Liệt kê tất cả các ước nguyên (kể cả âm) của 6 rồi đếm."
    ],
    "explain": "(n + 5)/(n − 1) = 1 + 6/(n − 1), nên n − 1 phải là ước của 6. Các ước nguyên của 6 là ±1, ±2, ±3, ±6, tức 8 giá trị, mỗi giá trị cho một n (n = 2, 0, 3, −1, 4, −2, 7, −5). Vậy có 8 số nguyên n.",
    "why": {
      "q": "Vì sao n − 1 phải là ước của 6?",
      "choices": [
        "Vì (n + 5)/(n − 1) = 1 + 6/(n − 1), nên 6/(n − 1) phải là số nguyên",
        "Vì n − 1 luôn là số nguyên tố",
        "Vì 6 chia hết cho mọi số nguyên",
        "Vì n + 5 và n − 1 luôn bằng nhau"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-08.howto": "Count how many integers n make (n + 5)/(n − 1) an integer; enter that count, not the values of n.",
    "q.hsg-04.howto": "5a7b is a four-digit number where a and b are missing digits. Find all such numbers that are divisible by 45, then enter the sum of those numbers.",
    "q.hsg-02.howto": "Count the pairs (a, b) that meet both conditions and enter the number of pairs, not the numbers a and b.",
  "q.hsg-01.q": "Find the smallest positive integer that leaves remainder 3 when divided by 8, remainder 5 when divided by 10 and remainder 7 when divided by 12.",
  "q.hsg-01.hints": [
    "For each division, how far is the remainder below the divisor? What do you notice?",
    "If you add 5 to the required number, which numbers does it become divisible by?",
    "The new number must be a common multiple of 8, 10 and 12. What is the lowest one?"
  ],
  "q.hsg-01.explain": "Since 8 − 3 = 10 − 5 = 12 − 7 = 5, the number n + 5 is divisible by 8, 10 and 12. The lowest common multiple of 8, 10 and 12 is 120, so the smallest n + 5 is 120 and n = 115. Check: 115 = 8·14 + 3 = 10·11 + 5 = 12·9 + 7.",
  "q.hsg-02.q": "Two positive integers a < b have highest common factor 18 and sum a + b = 144. How many pairs (a, b) are there?",
  "q.hsg-02.hints": [
    "If HCF(a, b) = 18, what form can a and b be written in?",
    "Let a = 18m and b = 18n. What is m + n, and what property must m and n have?",
    "List the pairs m < n with m + n = 8, then remove those with a common factor greater than 1."
  ],
  "q.hsg-02.explain": "Write a = 18m and b = 18n with HCF(m, n) = 1 and m < n. From a + b = 144 we get m + n = 8. The pairs are (1, 7), (2, 6), (3, 5). The pair (2, 6) shares the factor 2, so it is rejected. That leaves (1, 7) and (3, 5), i.e. (18, 126) and (54, 90). There are 2 pairs.",
  "q.hsg-03.q": "Find the last digit of the sum 7^2025 + 3^2025.",
  "q.hsg-03.hints": [
    "What are the last digits of 7¹, 7², 7³, 7⁴, 7⁵? Do they repeat?",
    "What is the length of the cycle? What is the remainder when 2025 is divided by it?",
    "Do the same for 3^2025, then add the two last digits."
  ],
  "q.hsg-03.explain": "Powers of 7 end in a cycle of length 4: 7, 9, 3, 1. Since 2025 = 4·506 + 1, 7^2025 ends in 7. Powers of 3 also have a cycle of length 4: 3, 9, 7, 1, so 3^2025 ends in 3. The sum ends in 7 + 3 = 10, so the last digit is 0.",
  "q.hsg-04.q": "Let S be the sum of all numbers of the form 5a7b (a and b are digits) that are divisible by 45. Find S.",
  "q.hsg-04.hints": [
    "Which two coprime numbers multiply to give 45?",
    "What can the digit b be for divisibility by 5? Then the digit sum must be divisible by what?",
    "For each value of b, find a, then add up the numbers you find."
  ],
  "q.hsg-04.explain": "45 = 5 · 9 with 5 and 9 coprime. Divisible by 5 means b = 0 or 5. The digit sum 5 + a + 7 + b must be divisible by 9. If b = 0, then 12 + a is divisible by 9 so a = 6, giving 5670. If b = 5, then 17 + a is divisible by 9 so a = 1, giving 5175. S = 5670 + 5175 = 10845.",
  "q.hsg-05.q": "Calculate S = 1 + 2 − 3 − 4 + 5 + 6 − 7 − 8 + … + 2021 + 2022 − 2023 − 2024 + 2025.",
  "q.hsg-05.hints": [
    "If you group four consecutive terms, what is the sum of each group?",
    "How many such groups are there from 1 to 2024?",
    "The last term 2025 is outside the groups. Add it in."
  ],
  "q.hsg-05.explain": "Each group of four terms (1 + 2 − 3 − 4), (5 + 6 − 7 − 8), … has sum −4. From 1 to 2024 there are 2024 ÷ 4 = 506 groups, giving 506 · (−4) = −2024. Adding the last term 2025: S = −2024 + 2025 = 1.",
  "q.hsg-06.q": "Let n be a positive integer such that n² is divisible by 12. Which statement is CERTAINLY true?",
  "q.hsg-06.hints": [
    "Try n = 6: what is n², and is it divisible by 12?",
    "If n² is divisible by the primes 2 and 3, what must n be divisible by?",
    "Which statement still holds for the example n = 6?"
  ],
  "q.hsg-06.explain": "Since 2 and 3 are prime, n² divisible by 2 means n is divisible by 2, and n² divisible by 3 means n is divisible by 3, so n is divisible by 6. The other options fail: n = 6 gives n² = 36, divisible by 12, but 6 is not divisible by 4, 12 or 24. A common mistake is to think n² divisible by 12 means n is divisible by 12.",
  "q.hsg-06.choices": [
    "n is divisible by 12",
    "n is divisible by 4",
    "n is divisible by 6",
    "n is divisible by 24"
  ],
  "q.hsg-07.q": "Khoa argues: \"12 is divisible by 4 and by 6. So every number divisible by both 4 and 6 is divisible by 4 × 6 = 24.\" What is wrong with the argument?",
  "q.hsg-07.hints": [
    "Are 4 and 6 coprime?",
    "What is the smallest number divisible by both 4 and 6? Is it divisible by 24?",
    "What condition on a and b is needed for \"divisible by both a and b implies divisible by a × b\"?"
  ],
  "q.hsg-07.explain": "The rule only works for coprime numbers. Here HCF(4, 6) = 2, so we need divisibility by LCM(4, 6) = 12, not by the product 24. The counterexample is 12 itself: divisible by 4 and 6 but not by 24.",
  "q.hsg-07.choices": [
    "Wrong because 4 and 6 are not coprime: divisibility by LCM(4, 6) = 12 is needed, not by the product 24",
    "Wrong because 12 is not divisible by 6",
    "Wrong because 3 and 8 must also be considered",
    "Nothing is wrong, the argument is correct"
  ],
  "q.hsg-08.q": "For how many integers n is (n + 5)/(n − 1) an integer?",
  "q.hsg-08.hints": [
    "Write (n + 5)/(n − 1) as 1 plus a simpler fraction. What is that fraction?",
    "For the whole expression to be an integer, what must n − 1 be in relation to 6?",
    "List all integer divisors of 6 (including negatives) and count them."
  ],
  "q.hsg-08.explain": "(n + 5)/(n − 1) = 1 + 6/(n − 1), so n − 1 must be a divisor of 6. The integer divisors of 6 are ±1, ±2, ±3, ±6, that is 8 values, each giving one n (n = 2, 0, 3, −1, 4, −2, 7, −5). So there are 8 integers n.",
  "q.hsg-08.why.q": "Why must n − 1 be a divisor of 6?",
  "q.hsg-08.why.choices": [
    "Because (n + 5)/(n − 1) = 1 + 6/(n − 1), so 6/(n − 1) must be an integer",
    "Because n − 1 is always prime",
    "Because 6 is divisible by every integer",
    "Because n + 5 and n − 1 are always equal"
  ]
}, vi: {} }
});
