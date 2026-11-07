window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 10,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "phan-tram-lien-tiep",
    "lang": "vi",
    "q": "Giá một chiếc xe đạp được tăng 30%, sau đó cửa hàng giảm 30% so với giá mới. Giá cuối cùng thấp hơn giá ban đầu bao nhiêu phần trăm?",
    "svg": null,
    "choices": null,
    "answer": 9,
    "hints": [
      "Nếu giá ban đầu là 100 đơn vị, sau khi tăng 30% giá là bao nhiêu?",
      "Giảm 30% của giá mới nghĩa là lấy 30% của số nào (số ban đầu hay số mới)?",
      "So sánh giá cuối với 100 để tìm phần trăm chênh lệch."
    ],
    "explain": "Giả sử giá ban đầu 100. Sau khi tăng: 130. Giảm 30% của 130 là 39, giá cuối là 91. Thấp hơn giá ban đầu 100 − 91 = 9, tức 9%.",
    "unitLabel": "%",
    "why": null
  },
  {
    "id": "hsg-02", "howto": "Tìm giá niêm yết lúc đầu, trước cả hai lần giảm giá. Nhập số tiền tính bằng đồng, viết đủ các chữ số.",
    "type": "num",
    "diff": 3,
    "skill": "phan-tram-nguoc",
    "lang": "vi",
    "q": "Một chiếc áo được giảm giá 15%. Sau đó cửa hàng giảm thêm 10% so với giá đã giảm, và giá cuối cùng là 306 000 đồng. Tính giá niêm yết ban đầu (đồng).",
    "svg": null,
    "choices": null,
    "answer": 400000,
    "hints": [
      "Sau lần giảm 15%, giá bằng bao nhiêu phần trăm giá ban đầu (dạng hệ số)?",
      "Sau lần giảm thứ hai 10%, giá bằng bao nhiêu phần trăm giá sau lần giảm thứ nhất?",
      "Nhân hai hệ số lại, rồi 306 000 bằng bao nhiêu phần giá ban đầu?"
    ],
    "explain": "Giá cuối = giá gốc × 0,85 × 0,9 = giá gốc × 0,765. Giá gốc = 306 000 : 0,765 = 400 000 đồng.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "pha-dung-dich",
    "lang": "vi",
    "q": "Có 300 g dung dịch nước muối nồng độ 10% (khối lượng muối chiếm 10% khối lượng dung dịch). Cần đổ thêm bao nhiêu gam nước nguyên chất để được dung dịch nồng độ 6%?",
    "svg": null,
    "choices": null,
    "answer": 200,
    "hints": [
      "Có bao nhiêu gam muối trong 300 g dung dịch? Khối lượng muối có thay đổi khi đổ thêm nước không?",
      "Nếu muối chiếm 6% dung dịch mới thì dung dịch mới nặng bao nhiêu gam?",
      "Dung dịch mới nặng hơn dung dịch cũ bao nhiêu gam?"
    ],
    "explain": "Muối: 10% × 300 = 30 g (không đổi). Dung dịch 6%: 30 : 0,06 = 500 g. Lượng nước thêm: 500 − 300 = 200 g.",
    "unitLabel": "g",
    "why": null
  },
  {
    "id": "hsg-04", "howto": "Nhập sĩ số của lớp lúc đầu, trước khi 2 bạn chuyển vào.",
    "type": "num",
    "diff": 3,
    "skill": "phan-tram-si-so",
    "lang": "vi",
    "q": "Trong một lớp có 25% số học sinh đạt loại giỏi. Sau khi có thêm 2 bạn học sinh giỏi chuyển vào lớp (không có bạn nào chuyển đi), số học sinh giỏi chiếm 30% sĩ số lớp. Hỏi lớp lúc đầu có bao nhiêu học sinh?",
    "svg": null,
    "choices": null,
    "answer": 28,
    "hints": [
      "Gọi sĩ số ban đầu là n. Số học sinh giỏi ban đầu và lúc sau biểu diễn thế nào theo n?",
      "Viết phương trình: số học sinh giỏi lúc sau bằng 30% sĩ số lúc sau.",
      "Giải phương trình rồi thử lại: 25% sĩ số ban đầu có phải số nguyên không?"
    ],
    "explain": "Gọi sĩ số ban đầu n. Lúc đầu có 0,25n học sinh giỏi; lúc sau (0,25n + 2) trên (n + 2) bạn, và 0,25n + 2 = 0,3(n + 2) ⇔ 1,4 = 0,05n ⇔ n = 28. Thử lại: 7 + 2 = 9 và 9/30 = 30% ✓.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "phan-tram-chuoi",
    "lang": "vi",
    "q": "Số A bằng 120% của số B, và số B bằng 75% của số C. Hỏi A bằng bao nhiêu phần trăm của C?",
    "svg": null,
    "choices": null,
    "answer": 90,
    "hints": [
      "Viết A theo B và B theo C bằng hệ số thập phân.",
      "Thay B vào để viết A theo C.",
      "Đổi hệ số vừa tìm sang phần trăm."
    ],
    "explain": "A = 1,2B và B = 0,75C nên A = 1,2 × 0,75 × C = 0,9C. Vậy A bằng 90% của C.",
    "unitLabel": "%",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "sai-lam-phan-tram",
    "lang": "vi",
    "q": "Giá một chiếc áo tăng 50%, sau đó giảm 50% so với giá mới. So với giá ban đầu, giá cuối cùng:",
    "svg": null,
    "choices": [
      "Bằng giá ban đầu",
      "Cao hơn 25%",
      "Thấp hơn 25%",
      "Thấp hơn 50%"
    ],
    "answer": 2,
    "hints": [
      "Giả sử giá ban đầu 100. Sau khi tăng 50% là bao nhiêu?",
      "50% được lấy trên số nào ở lần giảm?",
      "So sánh kết quả cuối với 100."
    ],
    "explain": "100 → 150 (tăng 50%) → 75 (giảm 50% của 150). Giá cuối thấp hơn ban đầu 25%. Sai lầm phổ biến: cộng trừ thẳng +50% − 50% = 0%, quên rằng hai lần phần trăm lấy trên hai số khác nhau.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "so-sanh-giam-gia",
    "lang": "vi",
    "q": "Cửa hàng A giảm giá 20%, sau đó giảm thêm 10% trên giá đã giảm. Cửa hàng B giảm 30% một lần. An nói: \"20% + 10% = 30% nên hai cửa hàng như nhau.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "An đúng: hai cửa hàng đều giảm 30%",
      "An sai: B rẻ hơn vì hai lần giảm của A chỉ tương đương 28%",
      "An sai: A rẻ hơn vì được giảm hai lần",
      "An sai: B giảm 30% còn A giảm 35%"
    ],
    "answer": 1,
    "hints": [
      "Với giá niêm yết 100, giá cuối ở cửa hàng A là bao nhiêu?",
      "Giá cuối ở cửa hàng B là bao nhiêu?",
      "Lần giảm 10% của cửa hàng A tính trên số nào?"
    ],
    "explain": "Cửa hàng A: 100 × 0,8 × 0,9 = 72. Cửa hàng B: 100 × 0,7 = 70. B rẻ hơn. Lỗi của An: cộng thẳng hai phần trăm dù lần giảm thứ hai tính trên giá đã giảm (80), nên A chỉ giảm tổng cộng 28%.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "tang-lien-tiep",
    "lang": "vi",
    "q": "Một đại lượng tăng x% rồi tiếp tục tăng x% so với giá trị mới. Sau hai lần tăng, đại lượng đó tăng tổng cộng 21% so với ban đầu. Tìm x.",
    "svg": null,
    "choices": null,
    "answer": 10,
    "hints": [
      "Sau lần tăng thứ nhất, đại lượng bằng bao nhiêu lần ban đầu (theo x)?",
      "Lần thứ hai nhân thêm hệ số nào? Viết tích hai hệ số bằng 1,21.",
      "1,21 là bình phương của số nào?"
    ],
    "explain": "Hệ số mỗi lần tăng là (1 + x/100). Hai lần: (1 + x/100)² = 1,21 ⇒ 1 + x/100 = 1,1 ⇒ x = 10.",
    "unitLabel": "%",
    "why": {
      "q": "Vì sao x không phải là 10,5 (một nửa của 21)?",
      "choices": [
        "Vì lần tăng thứ hai tính trên số đã tăng nên các hệ số được nhân với nhau",
        "Vì 21 là số lẻ",
        "Vì không thể chia phần trăm",
        "Vì lần tăng thứ nhất lớn hơn lần thứ hai"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-04.howto": "Enter the number of students in the class at the start, before the 2 new students joined.",
    "q.hsg-02.howto": "Find the original marked price, before both discounts. Enter the amount in dong, writing all the digits.",
  "q.hsg-01.q": "The price of a bicycle is increased by 30%, then the shop reduces the new price by 30%. By what percentage is the final price lower than the original price?",
  "q.hsg-01.hints": [
    "If the original price is 100 units, what is it after the 30% increase?",
    "A 30% reduction of the new price means 30% of which number (the original or the new one)?",
    "Compare the final price with 100 to find the percentage difference."
  ],
  "q.hsg-01.explain": "Suppose the original price is 100. After the increase: 130. 30% of 130 is 39, so the final price is 91. That is 100 − 91 = 9 lower, i.e. 9%.",
  "q.hsg-02.q": "A shirt is reduced by 15%. The shop then reduces the new price by a further 10%, and the final price is 306 000 đồng. Find the original price (in đồng).",
  "q.hsg-02.hints": [
    "After the 15% reduction, the price is what multiplier of the original?",
    "After the second 10% reduction, the price is what multiplier of the first reduced price?",
    "Multiply the two multipliers; 306 000 is what fraction of the original price?"
  ],
  "q.hsg-02.explain": "Final price = original × 0.85 × 0.9 = original × 0.765. Original = 306 000 ÷ 0.765 = 400 000 đồng.",
  "q.hsg-03.q": "There is 300 g of salt solution of concentration 10% (the mass of salt is 10% of the mass of the solution). How many grams of pure water must be added to get a solution of concentration 6%?",
  "q.hsg-03.hints": [
    "How many grams of salt are in 300 g of solution? Does the amount of salt change when water is added?",
    "If the salt is 6% of the new solution, how many grams does the new solution weigh?",
    "By how many grams is the new solution heavier than the old one?"
  ],
  "q.hsg-03.explain": "Salt: 10% × 300 = 30 g (unchanged). A 6% solution: 30 ÷ 0.06 = 500 g. Water added: 500 − 300 = 200 g.",
  "q.hsg-04.q": "In a class, 25% of the students are rated excellent. After 2 more excellent students move into the class (nobody leaves), the excellent students make up 30% of the class. How many students were in the class at first?",
  "q.hsg-04.hints": [
    "Let the original class size be n. How can you write the number of excellent students before and after in terms of n?",
    "Write an equation: the number of excellent students afterwards equals 30% of the class size afterwards.",
    "Solve the equation, then check: is 25% of the original size a whole number?"
  ],
  "q.hsg-04.explain": "Let the original class size be n. At first there are 0.25n excellent students; afterwards 0.25n + 2 out of n + 2, and 0.25n + 2 = 0.3(n + 2) ⇔ 1.4 = 0.05n ⇔ n = 28. Check: 7 + 2 = 9 and 9/30 = 30% ✓.",
  "q.hsg-05.q": "Number A is 120% of number B, and number B is 75% of number C. What percentage of C is A?",
  "q.hsg-05.hints": [
    "Write A in terms of B and B in terms of C using decimal multipliers.",
    "Substitute B to write A in terms of C.",
    "Convert the multiplier you found into a percentage."
  ],
  "q.hsg-05.explain": "A = 1.2B and B = 0.75C, so A = 1.2 × 0.75 × C = 0.9C. So A is 90% of C.",
  "q.hsg-06.q": "The price of a coat rises by 50%, then falls by 50% of the new price. Compared with the original price, the final price is:",
  "q.hsg-06.hints": [
    "Suppose the original price is 100. What is it after the 50% rise?",
    "Which number is the 50% taken of in the reduction?",
    "Compare the final result with 100."
  ],
  "q.hsg-06.explain": "100 → 150 (up 50%) → 75 (down 50% of 150). The final price is 25% lower. Common mistake: simply doing +50% − 50% = 0%, forgetting that the two percentages are taken of different amounts.",
  "q.hsg-06.choices": [
    "the same as the original price",
    "25% higher",
    "25% lower",
    "50% lower"
  ],
  "q.hsg-07.q": "Shop A reduces prices by 20%, then by a further 10% of the reduced price. Shop B reduces prices by 30% once. An says: \"20% + 10% = 30%, so the two shops are the same.\" Which comment is correct?",
  "q.hsg-07.hints": [
    "With a list price of 100, what is the final price at shop A?",
    "What is the final price at shop B?",
    "What number is shop A's 10% reduction taken of?"
  ],
  "q.hsg-07.explain": "Shop A: 100 × 0.8 × 0.9 = 72. Shop B: 100 × 0.7 = 70. B is cheaper. An's mistake: adding the percentages although the second reduction is taken of the reduced price (80), so A only gives 28% altogether.",
  "q.hsg-07.choices": [
    "An is right: both shops give a 30% discount",
    "An is wrong: shop B is cheaper, because shop A's two discounts add up to only 28%",
    "An is wrong: shop A is cheaper, because it gives two discounts",
    "An is wrong: shop B gives 30% and shop A gives 35%"
  ],
  "q.hsg-08.q": "A quantity increases by x%, then increases by x% of its new value. After the two increases, it has gone up by 21% in total compared with the start. Find x.",
  "q.hsg-08.hints": [
    "After the first increase, the quantity is how many times the original (in terms of x)?",
    "What multiplier does the second increase add? Write the product of the two multipliers as 1.21.",
    "1.21 is the square of which number?"
  ],
  "q.hsg-08.explain": "Each increase has multiplier (1 + x/100). Two increases: (1 + x/100)² = 1.21 ⇒ 1 + x/100 = 1.1 ⇒ x = 10.",
  "q.hsg-08.why.q": "Why is x not 10.5 (half of 21)?",
  "q.hsg-08.why.choices": [
    "Because the second increase is calculated on the already increased amount, so the multipliers multiply",
    "Because 21 is an odd number",
    "Because percentages can never be divided",
    "Because the first increase is bigger than the second"
  ]
}, vi: {} }
});
