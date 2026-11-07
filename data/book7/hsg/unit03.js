window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 3,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01", "howto": "Đếm các số tự nhiên n thỏa mãn cả hai điều kiện làm tròn và nhập số lượng các số đó.",
    "type": "num",
    "diff": 3,
    "skill": "hsg-rounding-count",
    "source": "hsg",
    "lang": "vi",
    "q": "Số tự nhiên n làm tròn đến hàng trăm được 4 500 và làm tròn đến hàng chục được 4 450. Có bao nhiêu số n như vậy?",
    "svg": null,
    "choices": null,
    "answer": 5,
    "hints": [
      "Số làm tròn đến hàng trăm được 4 500 nằm trong khoảng nào (từ số nhỏ nhất đến lớn nhất)?",
      "Số làm tròn đến hàng chục được 4 450 nằm trong khoảng nào?",
      "Hai khoảng giao nhau ở những số tự nhiên nào? Đếm chúng."
    ],
    "explain": "Làm tròn đến hàng trăm được 4 500 khi 4 450 ≤ n ≤ 4 549. Làm tròn đến hàng chục được 4 450 khi 4 445 ≤ n ≤ 4 454. Phần chung là 4 450 ≤ n ≤ 4 454 gồm 5 số: 4 450, 4 451, 4 452, 4 453, 4 454."
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-powers-of-ten",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính (3,6 × 10³ + 4,8 × 10²) ÷ (1,2 × 10²).",
    "svg": null,
    "choices": null,
    "answer": 34,
    "hints": [
      "Viết 3,6 × 10³ và 4,8 × 10² thành số tự nhiên thông thường.",
      "Tổng ở tử số bằng bao nhiêu, và 1,2 × 10² bằng bao nhiêu?",
      "Hoặc: đặt 1,2 × 10² làm thừa số chung. Em chia từng số hạng cho nó được gì?"
    ],
    "explain": "3,6 × 10³ = 3600 và 4,8 × 10² = 480, tổng là 4080. Mẫu 1,2 × 10² = 120. Vậy 4080 ÷ 120 = 34. (Cách khác: 3600 ÷ 120 = 30 và 480 ÷ 120 = 4, cộng lại được 34.)"
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-count-digits",
    "source": "hsg",
    "lang": "vi",
    "q": "Số 2^10 × 5^8 khi viết ra trong hệ thập phân có bao nhiêu chữ số?",
    "svg": null,
    "choices": null,
    "answer": 9,
    "hints": [
      "Có thể ghép bao nhiêu cặp thừa số 2 và 5 để tạo thành lũy thừa của 10?",
      "Tách 2^10 = 2^8 × 2². Khi đó 2^8 × 5^8 bằng gì?",
      "Số nhận được là một số nhỏ nhân với 10^8. Số đó có mấy chữ số?"
    ],
    "explain": "2^10 × 5^8 = 2² × (2^8 × 5^8) = 4 × 10^8 = 400 000 000. Số này gồm chữ số 4 và 8 chữ số 0, tức 9 chữ số."
  },
  {
    "id": "hsg-04", "howto": "Chiều dài và chiều rộng thật chỉ được biết gần đúng. Nhập cận trên của diện tích: số mà diện tích thật luôn nhỏ hơn nhưng có thể đến gần tùy ý.",
    "type": "num",
    "diff": 3,
    "skill": "hsg-upper-bound",
    "source": "hsg",
    "lang": "vi",
    "q": "Chiều dài và chiều rộng của một hình chữ nhật, sau khi làm tròn đến cm, lần lượt là 12 cm và 8 cm. Diện tích thật của hình chữ nhật luôn nhỏ hơn một số nào đó. Tìm số nhỏ nhất như vậy (cận trên của diện tích), tính bằng cm².",
    "svg": null,
    "choices": null,
    "answer": 106.25,
    "unitLabel": "cm²",
    "tol": 0.001,
    "hints": [
      "Chiều dài thật có thể lớn nhất gần bằng bao nhiêu (đo đến cm được 12)?",
      "Chiều rộng thật có thể lớn nhất gần bằng bao nhiêu?",
      "Diện tích lớn nhất không thể vượt quá tích của hai cận trên này. Tính tích."
    ],
    "explain": "Số đo làm tròn đến cm là 12 nên chiều dài thật nhỏ hơn 12,5; tương tự chiều rộng thật nhỏ hơn 8,5. Do đó diện tích thật nhỏ hơn 12,5 × 8,5 = 106,25 cm², và có thể gần giá trị này tùy ý nên đây là cận trên nhỏ nhất."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-move-decimal",
    "source": "hsg",
    "lang": "vi",
    "q": "Một số thập phân, nếu dời dấu phẩy sang phải hai hàng thì được số mới lớn hơn số cũ 178,2 đơn vị. Tìm số đó.",
    "svg": null,
    "choices": null,
    "answer": 1.8,
    "tol": 0.001,
    "hints": [
      "Dời dấu phẩy sang phải hai hàng thì số được nhân với bao nhiêu?",
      "Nếu số cũ là x, số mới là gì, và hiệu hai số bằng bao nhiêu lần x?",
      "Lập phương trình 99x = 178,2 rồi giải."
    ],
    "explain": "Gọi số cũ là x thì số mới là 100x. Hiệu: 100x − x = 99x = 178,2 nên x = 178,2 : 99 = 1,8. Kiểm tra: 1,8 → 180, 180 − 1,8 = 178,2."
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-rounding",
    "source": "hsg",
    "lang": "vi",
    "q": "Nam làm tròn 2,449 đến hàng phần mười như sau: \"2,449 ≈ 2,45 (đến hàng phần trăm), rồi 2,45 ≈ 2,5.\" Cách làm của Nam sai ở đâu?",
    "svg": null,
    "choices": [
      "Làm tròn nhiều lần liên tiếp gây sai: chỉ được nhìn chữ số hàng phần trăm của số gốc (4 < 5), đáp án là 2,4",
      "Phải làm tròn xuống vì số có ba chữ số thập phân",
      "Kết quả đúng là 2,5",
      "Kết quả đúng là 2,45"
    ],
    "answer": 0,
    "hints": [
      "Để làm tròn đến hàng phần mười, ta nhìn chữ số ở hàng nào của số ban đầu?",
      "Chữ số đó là mấy, nhỏ hơn 5 hay không?",
      "Làm tròn hai lần liên tiếp có thể làm tăng sai số không?"
    ],
    "explain": "Phải nhìn chữ số hàng phần trăm của số gốc: 2,449 có chữ số hàng phần trăm là 4 < 5 nên làm tròn xuống: 2,4. Nam làm tròn hai lần liên tiếp, lần đầu tạo ra chữ số 5 giả, nên sai. Lỗi này gọi là làm tròn kép."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-error-interval",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho a = 3,2 và b = 1,5 là hai số đã được làm tròn đến hàng phần mười. Trong các khoảng sau, khoảng HẸP NHẤT mà chắc chắn chứa hiệu thật a − b là khoảng nào?",
    "svg": null,
    "choices": [
      "1,65 ≤ a − b ≤ 1,75",
      "1,6 < a − b < 1,8",
      "1,5 < a − b < 1,9",
      "a − b = 1,7"
    ],
    "answer": 1,
    "hints": [
      "a thật nằm trong khoảng nào? b thật nằm trong khoảng nào?",
      "Để a − b nhỏ nhất, em lấy a nhỏ nhất và b ra sao? Còn để lớn nhất?",
      "Hai đầu mút vừa tìm được là bao nhiêu và khoảng đó mở hay đóng ở mỗi đầu?"
    ],
    "explain": "3,15 ≤ a < 3,25 và 1,45 ≤ b < 1,55. Hiệu nhỏ nhất xấp xỉ 3,15 − 1,55 = 1,6 (không đạt được vì b < 1,55); lớn nhất xấp xỉ 3,25 − 1,45 = 1,8 (không đạt được vì a < 3,25). Vậy 1,6 < a − b < 1,8. Khoảng 1,65 đến 1,75 quá hẹp (sai), khoảng 1,5 đến 1,9 đúng nhưng rộng hơn, và a − b không nhất thiết bằng 1,7."
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "hsg-trailing-zeros",
    "source": "hsg",
    "lang": "vi",
    "q": "Tích 1 × 2 × 3 × … × 25 có tận cùng bằng bao nhiêu chữ số 0?",
    "svg": null,
    "choices": null,
    "answer": 6,
    "hints": [
      "Một chữ số 0 ở cuối được tạo từ cặp thừa số nào?",
      "Trong các số từ 1 đến 25, có bao nhiêu số chia hết cho 5? Có số nào chứa hai thừa số 5?",
      "Cộng số thừa số 5 lại, rồi so với số thừa số 2."
    ],
    "explain": "Mỗi chữ số 0 ở cuối ứng với một cặp thừa số 2 × 5. Từ 1 đến 25 có 5 số chia hết cho 5 (5, 10, 15, 20, 25), trong đó 25 = 5² cho thêm một thừa số 5, tổng 6 thừa số 5. Thừa số 2 nhiều hơn 6, nên có 6 chữ số 0.",
    "why": {
      "q": "Vì sao chỉ cần đếm thừa số 5 mà không cần đếm thừa số 2?",
      "choices": [
        "Vì thừa số 2 xuất hiện nhiều hơn thừa số 5, nên số cặp 2 × 5 bị giới hạn bởi số thừa số 5",
        "Vì 5 lớn hơn 2",
        "Vì chữ số 0 chỉ sinh ra từ thừa số 5",
        "Vì 25 chia hết cho 5"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-04.howto": "The true length and width are only known approximately. Enter the upper bound of the area: the number the true area always stays below but can get as close to as you like.",
    "q.hsg-01.howto": "Count the whole numbers n that satisfy both rounding conditions and enter how many there are.",
  "q.hsg-01.q": "A whole number n rounds to 4 500 to the nearest hundred and to 4 450 to the nearest ten. How many such numbers n are there?",
  "q.hsg-01.hints": [
    "Between which smallest and largest values can a number lie if it rounds to 4 500 to the nearest hundred?",
    "Between which values can a number lie if it rounds to 4 450 to the nearest ten?",
    "At which whole numbers do the two ranges overlap? Count them."
  ],
  "q.hsg-01.explain": "Rounding to 4 500 to the nearest hundred means 4 450 ≤ n ≤ 4 549. Rounding to 4 450 to the nearest ten means 4 445 ≤ n ≤ 4 454. The overlap is 4 450 ≤ n ≤ 4 454, which has 5 numbers: 4 450, 4 451, 4 452, 4 453, 4 454.",
  "q.hsg-02.q": "Calculate (3.6 × 10³ + 4.8 × 10²) ÷ (1.2 × 10²).",
  "q.hsg-02.hints": [
    "Write 3.6 × 10³ and 4.8 × 10² as ordinary whole numbers.",
    "What is the sum on top, and what is 1.2 × 10²?",
    "Or: divide each term by 1.2 × 10². What do you get?"
  ],
  "q.hsg-02.explain": "3.6 × 10³ = 3600 and 4.8 × 10² = 480, with sum 4080. The divisor 1.2 × 10² = 120. So 4080 ÷ 120 = 34. (Alternatively 3600 ÷ 120 = 30 and 480 ÷ 120 = 4, giving 34.)",
  "q.hsg-03.q": "How many digits does 2^10 × 5^8 have when written out in full?",
  "q.hsg-03.hints": [
    "How many pairs of a factor 2 and a factor 5 can you make to form a power of 10?",
    "Split 2^10 = 2^8 × 2². Then what is 2^8 × 5^8?",
    "The result is a small number times 10^8. How many digits does it have?"
  ],
  "q.hsg-03.explain": "2^10 × 5^8 = 2² × (2^8 × 5^8) = 4 × 10^8 = 400 000 000. It is the digit 4 followed by eight 0s, so it has 9 digits.",
  "q.hsg-04.q": "The length and width of a rectangle, rounded to the nearest cm, are 12 cm and 8 cm. The true area is always less than a certain number. Find the smallest such number (the upper bound of the area), in cm².",
  "q.hsg-04.hints": [
    "How large can the true length get (if it measures 12 to the nearest cm)?",
    "How large can the true width get?",
    "The area cannot exceed the product of these two upper bounds. Calculate the product."
  ],
  "q.hsg-04.explain": "A length that rounds to 12 cm is less than 12.5 cm; similarly the true width is less than 8.5 cm. So the true area is less than 12.5 × 8.5 = 106.25 cm², and it can get as close to this as we like, so this is the smallest upper bound.",
  "q.hsg-05.q": "When the decimal point of a decimal number is moved two places to the right, the new number is 178.2 more than the original. Find the original number.",
  "q.hsg-05.hints": [
    "Moving the decimal point two places to the right multiplies the number by what?",
    "If the original number is x, what is the new number, and the difference is how many times x?",
    "Set up 99x = 178.2 and solve."
  ],
  "q.hsg-05.explain": "Let the original number be x; the new number is 100x. The difference is 100x − x = 99x = 178.2, so x = 178.2 ÷ 99 = 1.8. Check: 1.8 becomes 180, and 180 − 1.8 = 178.2.",
  "q.hsg-06.q": "Nam rounds 2.449 to one decimal place like this: \"2.449 ≈ 2.45 (to 2 d.p.), then 2.45 ≈ 2.5.\" What is wrong with his method?",
  "q.hsg-06.hints": [
    "To round to one decimal place, which digit of the original number do we look at?",
    "What is that digit, and is it less than 5?",
    "Can rounding twice in a row increase the error?"
  ],
  "q.hsg-06.explain": "We must look at the hundredths digit of the original number: 2.449 has hundredths digit 4 < 5, so it rounds down to 2.4. Nam rounded twice in a row; the first rounding created a false 5, so he is wrong. This mistake is called double rounding.",
  "q.hsg-06.choices": [
    "Repeated rounding causes an error: only the hundredths digit of the original number counts (4 < 5), so the answer is 2.4",
    "It must be rounded down because it has three decimal places",
    "The correct result is 2.5",
    "The correct result is 2.45"
  ],
  "q.hsg-07.q": "a = 3.2 and b = 1.5 are two numbers rounded to one decimal place. Which of the following is the NARROWEST interval that is certain to contain the true difference a − b?",
  "q.hsg-07.hints": [
    "Between which values does the true a lie? And the true b?",
    "To make a − b smallest, do you take the smallest a and what b? And for the largest?",
    "What are the two endpoints, and is the interval open or closed at each end?"
  ],
  "q.hsg-07.explain": "3.15 ≤ a < 3.25 and 1.45 ≤ b < 1.55. The smallest difference is about 3.15 − 1.55 = 1.6 (not reached since b < 1.55); the largest is about 3.25 − 1.45 = 1.8 (not reached since a < 3.25). So 1.6 < a − b < 1.8. The interval 1.65 to 1.75 is too narrow (wrong), 1.5 to 1.9 is true but wider, and a − b need not equal 1.7.",
  "q.hsg-07.choices": [
    "1.65 ≤ a − b ≤ 1.75",
    "1.6 < a − b < 1.8",
    "1.5 < a − b < 1.9",
    "a − b = 1.7"
  ],
  "q.hsg-08.q": "How many zeros are at the end of the product 1 × 2 × 3 × … × 25?",
  "q.hsg-08.hints": [
    "Which pair of factors creates one zero at the end?",
    "How many numbers from 1 to 25 are divisible by 5? Does any of them contain two factors of 5?",
    "Add up the factors of 5 and compare with the factors of 2."
  ],
  "q.hsg-08.explain": "Each zero at the end comes from a pair of factors 2 × 5. From 1 to 25 there are 5 multiples of 5 (5, 10, 15, 20, 25), and 25 = 5² adds one more factor 5, giving 6 factors of 5 in total. There are more than 6 factors of 2, so there are 6 zeros.",
  "q.hsg-08.why.q": "Why is it enough to count the factors of 5 and not the factors of 2?",
  "q.hsg-08.why.choices": [
    "Because factors of 2 are more plentiful than factors of 5, so the number of 2 × 5 pairs is limited by the factors of 5",
    "Because 5 is bigger than 2",
    "Because zeros only come from factors of 5",
    "Because 25 is divisible by 5"
  ]
}, vi: {} }
});
