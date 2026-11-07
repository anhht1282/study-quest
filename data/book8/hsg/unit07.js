window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 7,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "telescoping-gap3",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính S = 1/(2×5) + 1/(5×8) + 1/(8×11) + … + 1/(32×35). Viết kết quả dưới dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "11/70",
    "hints": [
      "Hiệu 1/a − 1/b với b = a + 3 bằng bao nhiêu? Nó liên quan thế nào đến 1/(a × b)?",
      "Hãy viết mỗi số hạng 1/(a × (a + 3)) dưới dạng (1/3) × (1/a − 1/(a + 3)).",
      "Cộng lại: các số hạng ở giữa triệt tiêu thế nào? Còn lại những số nào?"
    ],
    "explain": "Vì 1/a − 1/(a + 3) = 3 ÷ (a(a + 3)) nên 1/(a(a + 3)) = (1/3)(1/a − 1/(a + 3)). Do đó S = (1/3)[(1/2 − 1/5) + (1/5 − 1/8) + … + (1/32 − 1/35)] = (1/3)(1/2 − 1/35) = (1/3) × 33/70 = 11/70.",
    "why": null
  },
  {
    "id": "hsg-02", "howto": "Nhập số cặp (x; y) tìm được, không nhập các giá trị của x và y.",
    "type": "num",
    "diff": 3,
    "skill": "egyptian-fractions",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu cặp số tự nhiên (x; y) với 0 < x < y thỏa mãn 1/x + 1/y = 1/6?",
    "svg": null,
    "choices": null,
    "answer": 4,
    "hints": [
      "Nhân cả hai vế với 6xy. Em được phương trình nào?",
      "Đưa về dạng (x − 6)(y − 6) = một số cụ thể. Số đó bằng bao nhiêu?",
      "Vì x < y và cả hai lớn hơn 6, hãy liệt kê các cách phân tích số đó thành tích hai ước dương a < b."
    ],
    "explain": "1/x + 1/y = 1/6 ⇒ 6y + 6x = xy ⇒ xy − 6x − 6y + 36 = 36 ⇒ (x − 6)(y − 6) = 36. Vì 1/x < 1/6 nên x > 6, y > 6. Với x < y: (x − 6; y − 6) = (1; 36), (2; 18), (3; 12), (4; 9). Cặp (6; 6) cho x = y = 12 bị loại. Suy ra (x; y) = (7; 42), (8; 24), (9; 18), (10; 15): có 4 cặp.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "add-same-number",
    "source": "hsg",
    "lang": "vi",
    "q": "Cộng cùng một số tự nhiên n vào cả tử và mẫu của phân số 7/19 thì được phân số bằng 2/3. Tìm n.",
    "svg": null,
    "choices": null,
    "answer": 17,
    "hints": [
      "Phân số mới có dạng nào theo n? Đặt nó bằng 2/3.",
      "Dùng tính chất của hai phân số bằng nhau (nhân chéo) để viết phương trình.",
      "Giải phương trình và kiểm tra lại bằng cách thay n vào."
    ],
    "explain": "(7 + n) ÷ (19 + n) = 2/3 ⇒ 3(7 + n) = 2(19 + n) ⇒ 21 + 3n = 38 + 2n ⇒ n = 17. Kiểm tra: 24/36 = 2/3. (Hiệu mẫu − tử không đổi là 12, ứng với 3 − 2 = 1 phần, nên mẫu mới là 36 và n = 36 − 19 = 17.)",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "count-fractions",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu phân số tối giản có mẫu số bằng 24 và nằm giữa 1/4 và 5/6 (không kể hai đầu mút)?",
    "svg": null,
    "choices": null,
    "answer": 5,
    "hints": [
      "Viết 1/4 và 5/6 dưới dạng phân số có mẫu 24.",
      "Tử số k của phân số k/24 phải thỏa mãn bất đẳng thức nào?",
      "Trong các giá trị k đó, loại những số có ước chung lớn hơn 1 với 24. Còn lại bao nhiêu?"
    ],
    "explain": "1/4 = 6/24 và 5/6 = 20/24 nên 6 < k < 20, tức k = 7, 8, …, 19. Phân số k/24 tối giản khi ƯCLN(k, 24) = 1, tức k không chia hết cho 2 và 3: k = 7, 11, 13, 17, 19. Có 5 phân số.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "work-rate-stages",
    "source": "hsg",
    "lang": "vi",
    "q": "Vòi A chảy một mình đầy bể trong 12 giờ, vòi B chảy một mình đầy bể trong 15 giờ, còn vòi C tháo cạn bể đầy trong 20 giờ. Ban đầu bể cạn, người ta mở vòi A và B trong 3 giờ rồi mở thêm vòi C. Hỏi sau khi mở vòi C, cần thêm bao nhiêu giờ nữa thì bể đầy?",
    "svg": null,
    "choices": null,
    "answer": 5.5,
    "hints": [
      "Mỗi giờ vòi A, vòi B chảy được mấy phần bể? Sau 3 giờ bể đầy mấy phần?",
      "Khi mở cả ba vòi, mỗi giờ lượng nước trong bể thay đổi bao nhiêu phần bể?",
      "Phần bể còn thiếu chia cho phần bể tăng thêm mỗi giờ."
    ],
    "explain": "Mỗi giờ A, B chảy được 1/12 + 1/15 = 9/60 = 3/20 bể. Sau 3 giờ: 9/20 bể. Còn thiếu 11/20 bể. Khi mở cả ba vòi, mỗi giờ tăng 3/20 − 1/20 = 1/10 bể. Thời gian cần thêm: (11/20) ÷ (1/10) = 5,5 giờ.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "mediant",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho các số nguyên dương a, b, c, d với a/b < c/d. Khẳng định nào chắc chắn đúng?",
    "svg": null,
    "choices": [
      "(a + c)/(b + d) bằng trung bình cộng của a/b và c/d.",
      "a/b < (a + c)/(b + d) < c/d.",
      "(a + c)/(b + d) > c/d.",
      "(a + c)/(b + d) = 1/2 với mọi a, b, c, d."
    ],
    "answer": 1,
    "hints": [
      "Thử a/b = 1/2 và c/d = 1/1. Tính (a + c)/(b + d) rồi so sánh với trung bình cộng của hai phân số.",
      "Phân số (a + c)/(b + d) nằm ở đâu so với a/b và c/d trong ví dụ đó?",
      "Thử thêm a/b = 1/3, c/d = 1/2 để kiểm tra quy luật."
    ],
    "explain": "Với 1/2 và 1/1: (1 + 1)/(2 + 1) = 2/3, nằm giữa 1/2 và 1, nhưng trung bình cộng là 3/4 ≠ 2/3 (loại A). Chứng minh tổng quát: a/b < c/d ⇒ ad < bc ⇒ a(b + d) < b(a + c) ⇒ a/b < (a + c)/(b + d); tương tự (a + c)/(b + d) < c/d. Vậy B đúng. «Cộng tử với tử, mẫu với mẫu» không cho trung bình cộng mà cho một phân số nằm giữa.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "recurring-nine",
    "source": "hsg",
    "lang": "vi",
    "q": "Nam nói: «0,(9) < 1 vì viết mãi 0,999… vẫn luôn thiếu một chút so với 1.» Lan nói: «0,(9) = 1.» Ai đúng và vì sao?",
    "svg": null,
    "choices": [
      "Nam đúng, vì mọi chữ số 9 vẫn nhỏ hơn 10.",
      "Lan đúng, vì 0,(9) = 9/9 = 1 (cũng như 0,(3) × 3 = 1/3 × 3 = 1).",
      "Cả hai đều sai, 0,(9) lớn hơn 1.",
      "Không ai chứng minh được vì số vô hạn không so sánh được."
    ],
    "answer": 1,
    "hints": [
      "Số thập phân tuần hoàn 0,(1) bằng phân số nào? Tương tự 0,(2), 0,(3)?",
      "Vậy 0,(9) bằng phân số nào khi theo cùng quy luật? Rút gọn phân số đó.",
      "Nếu 0,(9) < 1 thì hiệu 1 − 0,(9) là một số dương. Hiệu đó có chữ số khác 0 nào không, dù viết bao nhiêu chữ số thập phân?"
    ],
    "explain": "Ta có 0,(1) = 1/9, 0,(3) = 3/9 = 1/3, nên 0,(9) = 9/9 = 1. Cách khác: 1/3 = 0,(3) nên 3 × 1/3 = 1 = 3 × 0,(3) = 0,(9). Nam nhầm vì tưởng «viết mãi vẫn thiếu»; thực tế hiệu 1 − 0,(9) nhỏ hơn mọi số dương nên bằng 0.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "telescoping-product",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính tích P = (1 − 1/2) × (1 − 1/3) × (1 − 1/4) × … × (1 − 1/50). Viết kết quả dưới dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "1/50",
    "hints": [
      "Hãy tính từng thừa số: 1 − 1/2, 1 − 1/3, 1 − 1/4. Mỗi thừa số thành phân số nào?",
      "Viết tích dưới dạng 1/2 × 2/3 × 3/4 × … và quan sát các tử số và mẫu số.",
      "Các thừa số nào triệt tiêu với nhau, và còn lại tử số và mẫu số nào?"
    ],
    "explain": "1 − 1/k = (k − 1)/k nên P = 1/2 × 2/3 × 3/4 × … × 49/50. Tử số của phân số này triệt tiêu với mẫu số của phân số liền trước, chỉ còn tử số đầu 1 và mẫu số cuối 50. Vậy P = 1/50.",
    "why": {
      "q": "Vì sao hầu hết các thừa số trong tích triệt tiêu?",
      "choices": [
        "Vì tử số của mỗi phân số bằng mẫu số của phân số đứng trước nó, nên khi nhân chúng rút gọn cho nhau.",
        "Vì mỗi phân số đều bằng 1.",
        "Vì các phân số đều có cùng mẫu số.",
        "Vì tích của hai phân số liên tiếp luôn bằng 1/2."
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-02.howto": "Enter how many pairs (x; y) there are, not the values of x and y.",
  "q.hsg-01.q": "Calculate S = 1/(2×5) + 1/(5×8) + 1/(8×11) + … + 1/(32×35). Give the answer as a fraction in its simplest form.",
  "q.hsg-01.hints": [
    "What is 1/a − 1/b when b = a + 3? How is it related to 1/(a × b)?",
    "Write each term 1/(a × (a + 3)) as (1/3) × (1/a − 1/(a + 3)).",
    "Add them up: how do the middle terms cancel? Which numbers remain?"
  ],
  "q.hsg-01.explain": "Since 1/a − 1/(a + 3) = 3 ÷ (a(a + 3)), we get 1/(a(a + 3)) = (1/3)(1/a − 1/(a + 3)). So S = (1/3)[(1/2 − 1/5) + (1/5 − 1/8) + … + (1/32 − 1/35)] = (1/3)(1/2 − 1/35) = (1/3) × 33/70 = 11/70.",
  "q.hsg-02.q": "How many pairs of positive integers (x, y) with x < y satisfy 1/x + 1/y = 1/6?",
  "q.hsg-02.hints": [
    "Multiply both sides by 6xy. What equation do you get?",
    "Rewrite it as (x − 6)(y − 6) = a specific number. What is that number?",
    "Since x < y and both exceed 6, list the ways to write that number as a product of two positive factors a < b."
  ],
  "q.hsg-02.explain": "1/x + 1/y = 1/6 ⇒ 6y + 6x = xy ⇒ xy − 6x − 6y + 36 = 36 ⇒ (x − 6)(y − 6) = 36. Since 1/x < 1/6 we have x > 6 and y > 6. With x < y: (x − 6, y − 6) = (1, 36), (2, 18), (3, 12), (4, 9). The pair (6, 6) gives x = y = 12 and is rejected. So (x, y) = (7, 42), (8, 24), (9, 18), (10, 15): there are 4 pairs.",
  "q.hsg-03.q": "The same whole number n is added to both numerator and denominator of the fraction 7/19, giving a fraction equal to 2/3. Find n.",
  "q.hsg-03.hints": [
    "What form does the new fraction take in terms of n? Set it equal to 2/3.",
    "Use the property of equal fractions (cross-multiplication) to write an equation.",
    "Solve and check by substituting n."
  ],
  "q.hsg-03.explain": "(7 + n) ÷ (19 + n) = 2/3 ⇒ 3(7 + n) = 2(19 + n) ⇒ 21 + 3n = 38 + 2n ⇒ n = 17. Check: 24/36 = 2/3. (The difference denominator − numerator stays 12 and corresponds to 3 − 2 = 1 part, so the new denominator is 36 and n = 36 − 19 = 17.)",
  "q.hsg-04.q": "How many fractions in simplest form with denominator 24 lie between 1/4 and 5/6 (not including the end values)?",
  "q.hsg-04.hints": [
    "Write 1/4 and 5/6 as fractions with denominator 24.",
    "What inequality must the numerator k of k/24 satisfy?",
    "Among those values of k, remove the ones sharing a common factor greater than 1 with 24. How many remain?"
  ],
  "q.hsg-04.explain": "1/4 = 6/24 and 5/6 = 20/24, so 6 < k < 20, i.e. k = 7, 8, …, 19. The fraction k/24 is in simplest form when HCF(k, 24) = 1, i.e. k is not divisible by 2 or 3: k = 7, 11, 13, 17, 19. There are 5 fractions.",
  "q.hsg-05.q": "Tap A alone fills a tank in 12 hours, tap B alone fills it in 15 hours, and drain C empties a full tank in 20 hours. The tank starts empty; taps A and B are opened for 3 hours, then drain C is opened as well. How many more hours after opening C until the tank is full?",
  "q.hsg-05.hints": [
    "What fraction of the tank do A and B fill each hour? How full is the tank after 3 hours?",
    "With all three open, by what fraction of the tank does the water level change each hour?",
    "Divide the fraction still missing by the fraction gained each hour."
  ],
  "q.hsg-05.explain": "A and B together fill 1/12 + 1/15 = 9/60 = 3/20 of the tank per hour. After 3 hours: 9/20 full. Missing: 11/20. With all three open, the tank gains 3/20 − 1/20 = 1/10 per hour. Extra time: (11/20) ÷ (1/10) = 5.5 hours.",
  "q.hsg-06.q": "For positive integers a, b, c, d with a/b < c/d, which statement is certainly true?",
  "q.hsg-06.choices": [
    "(a + c)/(b + d) equals the mean of a/b and c/d.",
    "a/b < (a + c)/(b + d) < c/d.",
    "(a + c)/(b + d) > c/d.",
    "(a + c)/(b + d) = 1/2 for all a, b, c, d."
  ],
  "q.hsg-06.hints": [
    "Try a/b = 1/2 and c/d = 1/1. Calculate (a + c)/(b + d) and compare it with the mean of the two fractions.",
    "Where does (a + c)/(b + d) lie relative to a/b and c/d in that example?",
    "Try a/b = 1/3, c/d = 1/2 as well to test the pattern."
  ],
  "q.hsg-06.explain": "With 1/2 and 1/1: (1 + 1)/(2 + 1) = 2/3, between 1/2 and 1, but the mean is 3/4 ≠ 2/3 (rules out A). General proof: a/b < c/d ⇒ ad < bc ⇒ a(b + d) < b(a + c) ⇒ a/b < (a + c)/(b + d); similarly (a + c)/(b + d) < c/d. So B is true. \"Adding numerators and adding denominators\" does not give the mean but a fraction lying in between.",
  "q.hsg-07.q": "Nam says: \"0.(9) < 1 because 0.999… always falls a little short of 1.\" Lan says: \"0.(9) = 1.\" Who is right and why?",
  "q.hsg-07.choices": [
    "Nam is right, because every digit 9 is still less than 10.",
    "Lan is right, because 0.(9) = 9/9 = 1 (just as 0.(3) × 3 = 1/3 × 3 = 1).",
    "Both are wrong, 0.(9) is greater than 1.",
    "Nobody can prove it because infinite numbers cannot be compared."
  ],
  "q.hsg-07.hints": [
    "Which fraction equals the recurring decimal 0.(1)? Similarly 0.(2), 0.(3)?",
    "Following the same pattern, which fraction equals 0.(9)? Simplify it.",
    "If 0.(9) < 1, then 1 − 0.(9) would be a positive number. Does that difference have any non-zero digit, however many decimal places you write?"
  ],
  "q.hsg-07.explain": "We have 0.(1) = 1/9, 0.(3) = 3/9 = 1/3, so 0.(9) = 9/9 = 1. Another way: 1/3 = 0.(3), so 3 × 1/3 = 1 = 3 × 0.(3) = 0.(9). Nam is mistaken in thinking \"it always falls short\"; in fact the difference 1 − 0.(9) is smaller than every positive number, so it is 0.",
  "q.hsg-08.q": "Calculate the product P = (1 − 1/2) × (1 − 1/3) × (1 − 1/4) × … × (1 − 1/50). Give the answer as a fraction in simplest form.",
  "q.hsg-08.hints": [
    "Work out each factor: 1 − 1/2, 1 − 1/3, 1 − 1/4. Which fraction is each factor?",
    "Write the product as 1/2 × 2/3 × 3/4 × … and look at the numerators and denominators.",
    "Which numbers cancel, and which numerator and denominator remain?"
  ],
  "q.hsg-08.explain": "1 − 1/k = (k − 1)/k so P = 1/2 × 2/3 × 3/4 × … × 49/50. Each numerator cancels with the denominator of the previous fraction, leaving only the first numerator 1 and the last denominator 50. So P = 1/50.",
  "q.hsg-08.why.q": "Why do almost all the factors in the product cancel?",
  "q.hsg-08.why.choices": [
    "Because the numerator of each fraction equals the denominator of the fraction before it, so they cancel when multiplied.",
    "Because every fraction equals 1.",
    "Because all the fractions have the same denominator.",
    "Because the product of two consecutive fractions is always 1/2."
  ]
}, vi: {} }
});
