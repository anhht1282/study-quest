window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 7,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-telescoping-fraction",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính 2/(1×3) + 2/(3×5) + 2/(5×7) + … + 2/(47×49). Viết kết quả dưới dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "48/49",
    "hints": [
      "Thử viết 1/1 − 1/3: kết quả có liên hệ gì với 2/(1×3)?",
      "Tổng quát, 2/(k(k+2)) bằng hiệu của hai phân số nào?",
      "Khi viết từng số hạng thành hiệu, các số hạng nào triệt tiêu nhau? Còn lại gì?"
    ],
    "explain": "Vì 1/k − 1/(k + 2) = 2/(k(k + 2)), tổng bằng (1/1 − 1/3) + (1/3 − 1/5) + … + (1/47 − 1/49). Các số hạng ở giữa triệt tiêu, còn 1 − 1/49 = 48/49."
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-fraction-add-both",
    "source": "hsg",
    "lang": "vi",
    "q": "Cần cộng cùng một số tự nhiên n vào cả tử số và mẫu số của phân số 7/15 để được phân số bằng 3/4. Tìm n.",
    "svg": null,
    "choices": null,
    "answer": 17,
    "hints": [
      "Sau khi cộng n, phân số mới viết thế nào?",
      "Hai phân số bằng nhau thì tích chéo như thế nào?",
      "Giải phương trình 4(7 + n) = 3(15 + n)."
    ],
    "explain": "(7 + n)/(15 + n) = 3/4 nên 4(7 + n) = 3(15 + n), tức 28 + 4n = 45 + 3n, suy ra n = 17. Kiểm tra: 24/32 = 3/4."
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-work-fractions",
    "source": "hsg",
    "lang": "vi",
    "q": "Vòi A chảy một mình đầy bể trong 6 giờ, vòi B chảy một mình đầy bể trong 9 giờ, còn vòi C tháo cạn bể đầy trong 18 giờ. Nếu bể đang cạn và mở cả ba vòi cùng lúc thì sau bao nhiêu giờ bể đầy?",
    "svg": null,
    "choices": null,
    "answer": 4.5,
    "unitLabel": "h",
    "tol": 0.001,
    "hints": [
      "Mỗi giờ, vòi A chảy được bao nhiêu phần bể? Vòi B? Vòi C tháo bao nhiêu phần?",
      "Mỗi giờ cả ba vòi làm bể đầy thêm bao nhiêu phần (cộng phần chảy, trừ phần tháo)?",
      "Thời gian đầy bể bằng 1 chia cho phần đầy thêm mỗi giờ."
    ],
    "explain": "Mỗi giờ: 1/6 + 1/9 − 1/18 = 3/18 + 2/18 − 1/18 = 4/18 = 2/9 bể. Thời gian đầy bể: 1 : 2/9 = 9/2 = 4,5 giờ."
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-fraction-of-remaining",
    "source": "hsg",
    "lang": "vi",
    "q": "Một người đi quãng đường trong 3 ngày. Ngày thứ nhất đi 2/5 quãng đường. Ngày thứ hai đi 3/8 quãng đường còn lại. Ngày thứ ba đi nốt 18 km. Tính độ dài cả quãng đường (km).",
    "svg": null,
    "choices": null,
    "answer": 48,
    "unitLabel": "km",
    "hints": [
      "Sau ngày thứ nhất, còn lại bao nhiêu phần quãng đường?",
      "Ngày thứ hai đi 3/8 của phần còn lại. Sau ngày thứ hai còn lại bao nhiêu phần quãng đường?",
      "18 km ứng với phần còn lại cuối cùng. Tìm cả quãng đường."
    ],
    "explain": "Sau ngày 1 còn 1 − 2/5 = 3/5 quãng đường. Ngày 2 còn lại (1 − 3/8) × 3/5 = 5/8 × 3/5 = 3/8 quãng đường. Vậy 3/8 quãng đường = 18 km nên cả quãng đường dài 18 : 3/8 = 48 km. Kiểm tra: ngày 1 đi 19,2 km, còn 28,8; ngày 2 đi 10,8, còn 18."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-fractions-between",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu số nguyên a để phân số a/24 lớn hơn 3/7 và nhỏ hơn 5/6?",
    "svg": null,
    "choices": null,
    "answer": 9,
    "hints": [
      "Đổi 5/6 sang mẫu 24. Điều kiện a/24 < 5/6 cho a < ?",
      "Điều kiện a/24 > 3/7 tương đương 7a > 72. Số nguyên a nhỏ nhất thỏa là bao nhiêu?",
      "Đếm các số nguyên a từ giá trị nhỏ nhất đến lớn nhất (chú ý các dấu bất đẳng thức chặt)."
    ],
    "explain": "a/24 < 5/6 = 20/24 nên a < 20, tức a ≤ 19. a/24 > 3/7 nên 7a > 72, a > 10,28…, tức a ≥ 11. Các số nguyên a từ 11 đến 19 gồm 19 − 11 + 1 = 9 số."
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-mediant",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho a, b, c, d là các số nguyên dương và a/b < c/d. Khẳng định nào CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
      "(a + c)/(b + d) < a/b",
      "a/b < (a + c)/(b + d) < c/d",
      "(a + c)/(b + d) bằng trung bình cộng của a/b và c/d",
      "(a + c)/(b + d) > c/d"
    ],
    "answer": 1,
    "hints": [
      "Thử a/b = 1/2 và c/d = 1/1. Tính (a + c)/(b + d) rồi so sánh với hai phân số đó.",
      "So sánh (a + c)/(b + d) với trung bình cộng của hai phân số trong ví dụ trên.",
      "Dùng a/b < c/d ⇒ ad < bc để kiểm tra a/b < (a + c)/(b + d)."
    ],
    "explain": "a/b < c/d nghĩa là ad < bc. Khi đó a(b + d) = ab + ad < ab + bc = b(a + c) nên a/b < (a + c)/(b + d). Tương tự (a + c)/(b + d) < c/d. Vậy phân số (a + c)/(b + d) nằm giữa hai phân số. Ví dụ 1/2 và 1/1 cho 2/3, không bằng trung bình cộng 3/4, nên đáp án về trung bình cộng sai."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-fraction",
    "source": "hsg",
    "lang": "vi",
    "q": "Tú nói: \"Cộng cùng một số tự nhiên khác 0 vào cả tử số và mẫu số thì phân số luôn tăng lên, vì tử và mẫu cùng tăng.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Đúng với mọi phân số",
      "Sai: phân số luôn giữ nguyên",
      "Sai: chỉ tăng khi phân số nhỏ hơn 1; với phân số lớn hơn 1 (như 3/2 → 4/3) thì giảm",
      "Sai: phân số luôn giảm"
    ],
    "answer": 2,
    "hints": [
      "Thử với 1/2: cộng 1 vào tử và mẫu, phân số thay đổi thế nào?",
      "Thử với 3/2: cộng 1 vào tử và mẫu, phân số tăng hay giảm?",
      "Phân số nhỏ hơn 1 và lớn hơn 1 có hành xử giống nhau không?"
    ],
    "explain": "Với phân số nhỏ hơn 1 (ví dụ 1/2 → 2/3) phân số tăng. Với phân số lớn hơn 1 thì giảm: 3/2 = 1,5 còn 4/3 ≈ 1,33. Phân số bằng 1 giữ nguyên. Vậy lập luận của Tú chỉ đúng với phân số nhỏ hơn 1."
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "hsg-integer-fraction-values",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu số tự nhiên n (kể cả 0) để phân số (3n + 7)/(n + 1) có giá trị là một số nguyên?",
    "svg": null,
    "choices": null,
    "answer": 3,
    "hints": [
      "Viết (3n + 7)/(n + 1) thành 3 cộng một phân số đơn giản hơn. Phân số đó là gì?",
      "Để biểu thức nguyên thì n + 1 phải là gì của 4?",
      "Liệt kê các ước dương của 4, tìm n tương ứng (n ≥ 0) và đếm."
    ],
    "explain": "(3n + 7)/(n + 1) = 3 + 4/(n + 1), nên n + 1 phải là ước của 4. Vì n ≥ 0 nên n + 1 ≥ 1: n + 1 ∈ {1, 2, 4}, tức n ∈ {0, 1, 3}. Có 3 giá trị.",
    "why": {
      "q": "Vì sao n + 1 phải là ước của 4?",
      "choices": [
        "Vì (3n + 7)/(n + 1) = 3 + 4/(n + 1), nên 4/(n + 1) phải là số nguyên",
        "Vì n + 1 luôn bằng 4",
        "Vì 3n + 7 luôn chia hết cho 4",
        "Vì n + 1 là số nguyên tố"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "Calculate 2/(1×3) + 2/(3×5) + 2/(5×7) + … + 2/(47×49). Give the result as a fraction in lowest terms.",
  "q.hsg-01.hints": [
    "Try writing 1/1 − 1/3: how is it related to 2/(1×3)?",
    "In general, 2/(k(k+2)) equals the difference of which two fractions?",
    "When you write each term as a difference, which terms cancel? What is left?"
  ],
  "q.hsg-01.explain": "Since 1/k − 1/(k + 2) = 2/(k(k + 2)), the sum equals (1/1 − 1/3) + (1/3 − 1/5) + … + (1/47 − 1/49). The middle terms cancel, leaving 1 − 1/49 = 48/49.",
  "q.hsg-02.q": "The same whole number n is added to both the numerator and the denominator of 7/15 to give a fraction equal to 3/4. Find n.",
  "q.hsg-02.hints": [
    "After adding n, how do you write the new fraction?",
    "If two fractions are equal, how do their cross-products compare?",
    "Solve 4(7 + n) = 3(15 + n)."
  ],
  "q.hsg-02.explain": "(7 + n)/(15 + n) = 3/4 gives 4(7 + n) = 3(15 + n), i.e. 28 + 4n = 45 + 3n, so n = 17. Check: 24/32 = 3/4.",
  "q.hsg-03.q": "Tap A alone fills a tank in 6 hours, tap B alone fills it in 9 hours, and drain C empties a full tank in 18 hours. If the tank starts empty and all three are opened together, how many hours until it is full?",
  "q.hsg-03.hints": [
    "Each hour, what fraction of the tank does tap A fill? Tap B? What fraction does C drain?",
    "Each hour, how much does the tank fill overall (add the inflows, subtract the outflow)?",
    "The time to fill is 1 divided by the fraction gained per hour."
  ],
  "q.hsg-03.explain": "Each hour: 1/6 + 1/9 − 1/18 = 3/18 + 2/18 − 1/18 = 4/18 = 2/9 of the tank. Time to fill: 1 ÷ 2/9 = 9/2 = 4.5 hours.",
  "q.hsg-04.q": "A traveller covers a journey in 3 days. On day 1 he covers 2/5 of the journey. On day 2 he covers 3/8 of the remaining distance. On day 3 he covers the last 18 km. Find the length of the whole journey (km).",
  "q.hsg-04.hints": [
    "After day 1, what fraction of the journey remains?",
    "Day 2 covers 3/8 of what remains. After day 2, what fraction of the whole journey remains?",
    "The 18 km corresponds to that last fraction. Find the whole journey."
  ],
  "q.hsg-04.explain": "After day 1, 1 − 2/5 = 3/5 of the journey remains. After day 2 the remainder is (1 − 3/8) × 3/5 = 5/8 × 3/5 = 3/8 of the journey. So 3/8 of the journey = 18 km, and the whole journey is 18 ÷ 3/8 = 48 km. Check: day 1 covers 19.2 km leaving 28.8; day 2 covers 10.8 leaving 18.",
  "q.hsg-05.q": "For how many integers a is the fraction a/24 greater than 3/7 and less than 5/6?",
  "q.hsg-05.hints": [
    "Convert 5/6 to denominator 24. The condition a/24 < 5/6 gives a < ?",
    "The condition a/24 > 3/7 is equivalent to 7a > 72. What is the smallest integer a that works?",
    "Count the integers a from the smallest to the largest (note the strict inequalities)."
  ],
  "q.hsg-05.explain": "a/24 < 5/6 = 20/24 gives a < 20, so a ≤ 19. a/24 > 3/7 gives 7a > 72, a > 10.28…, so a ≥ 11. The integers a from 11 to 19 number 19 − 11 + 1 = 9.",
  "q.hsg-06.q": "a, b, c, d are positive integers and a/b < c/d. Which statement is CERTAINLY true?",
  "q.hsg-06.hints": [
    "Try a/b = 1/2 and c/d = 1/1. Compute (a + c)/(b + d) and compare it with both fractions.",
    "Compare (a + c)/(b + d) with the mean of the two fractions in that example.",
    "Use a/b < c/d ⇒ ad < bc to check a/b < (a + c)/(b + d)."
  ],
  "q.hsg-06.explain": "a/b < c/d means ad < bc. Then a(b + d) = ab + ad < ab + bc = b(a + c), so a/b < (a + c)/(b + d). Similarly (a + c)/(b + d) < c/d. So (a + c)/(b + d) lies between the two fractions. For example 1/2 and 1/1 give 2/3, not the mean 3/4, so the \"mean\" option is false.",
  "q.hsg-06.choices": [
    "(a + c)/(b + d) < a/b",
    "a/b < (a + c)/(b + d) < c/d",
    "(a + c)/(b + d) equals the mean of a/b and c/d",
    "(a + c)/(b + d) > c/d"
  ],
  "q.hsg-07.q": "Tu says: \"If you add the same non-zero whole number to both the numerator and the denominator, the fraction always increases, because both numbers get bigger.\" Which comment is correct?",
  "q.hsg-07.hints": [
    "Try 1/2: add 1 to the numerator and denominator. How does the fraction change?",
    "Try 3/2: add 1 to the numerator and denominator. Does it increase or decrease?",
    "Do fractions less than 1 and greater than 1 behave the same way?"
  ],
  "q.hsg-07.explain": "For a fraction less than 1 (e.g. 1/2 → 2/3) it increases. For a fraction greater than 1 it decreases: 3/2 = 1.5 but 4/3 ≈ 1.33. A fraction equal to 1 stays the same. So Tu is only right for fractions less than 1.",
  "q.hsg-07.choices": [
    "Correct for every fraction",
    "Wrong: the fraction always stays the same",
    "Wrong: it only increases when the fraction is less than 1; for fractions greater than 1 (like 3/2 → 4/3) it decreases",
    "Wrong: the fraction always decreases"
  ],
  "q.hsg-08.q": "For how many whole numbers n (including 0) is the fraction (3n + 7)/(n + 1) an integer?",
  "q.hsg-08.hints": [
    "Write (3n + 7)/(n + 1) as 3 plus a simpler fraction. What is that fraction?",
    "For the expression to be an integer, what must n + 1 be in relation to 4?",
    "List the positive divisors of 4, find the matching n (n ≥ 0) and count."
  ],
  "q.hsg-08.explain": "(3n + 7)/(n + 1) = 3 + 4/(n + 1), so n + 1 must be a divisor of 4. Since n ≥ 0, n + 1 ≥ 1: n + 1 ∈ {1, 2, 4}, so n ∈ {0, 1, 3}. There are 3 values.",
  "q.hsg-08.why.q": "Why must n + 1 be a divisor of 4?",
  "q.hsg-08.why.choices": [
    "Because (3n + 7)/(n + 1) = 3 + 4/(n + 1), so 4/(n + 1) must be an integer",
    "Because n + 1 always equals 4",
    "Because 3n + 7 is always divisible by 4",
    "Because n + 1 is prime"
  ]
}, vi: {} }
});
