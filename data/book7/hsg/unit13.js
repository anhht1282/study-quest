window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 13,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "xac-suat-khong-hoan-lai",
    "lang": "vi",
    "q": "Một túi có 5 bi đỏ, 3 bi xanh và 2 bi vàng (cùng kích cỡ). Lấy ngẫu nhiên lần lượt 2 bi, không trả lại. Tính xác suất để hai bi lấy ra cùng màu. Viết kết quả dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "14/45",
    "hints": [
      "Có bao nhiêu cách lấy lần lượt 2 bi từ 10 bi (có thứ tự)?",
      "Với mỗi màu, có bao nhiêu cách lấy 2 bi cùng màu (có thứ tự)? Ví dụ màu đỏ: 5 × 4.",
      "Cộng số cách của ba màu rồi chia cho tổng số cách; rút gọn."
    ],
    "explain": "Tổng số cách: 10 × 9 = 90. Hai bi đỏ: 5 × 4 = 20; hai bi xanh: 3 × 2 = 6; hai bi vàng: 2 × 1 = 2. Tổng 28 cách thuận lợi. Xác suất = 28/90 = 14/45.",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "dem-ket-qua-xuc-xac",
    "lang": "vi",
    "q": "Gieo đồng thời hai con xúc xắc cân đối, mỗi con có các mặt 1, 2, 3, 4, 5, 6. Tính xác suất để tổng hai mặt xuất hiện lớn hơn hoặc bằng 10. Viết dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "1/6",
    "hints": [
      "Có tất cả bao nhiêu kết quả có thể (cặp số có thứ tự)?",
      "Liệt kê các cặp có tổng 10, tổng 11, tổng 12.",
      "Cộng số cặp thuận lợi rồi chia cho tổng số kết quả."
    ],
    "explain": "Có 6 × 6 = 36 kết quả. Tổng 10: (4,6), (5,5), (6,4); tổng 11: (5,6), (6,5); tổng 12: (6,6). Có 3 + 2 + 1 = 6 kết quả thuận lợi. Xác suất = 6/36 = 1/6.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "xac-suat-xung-khac",
    "lang": "vi",
    "q": "Một hộp chứa bi đỏ, bi xanh và bi vàng. Biết xác suất lấy được bi vàng là 0,1 và xác suất lấy được bi đỏ gấp đôi xác suất lấy được bi xanh. Tìm xác suất lấy được bi đỏ.",
    "svg": null,
    "choices": null,
    "answer": 0.6,
    "hints": [
      "Ba biến cố \"đỏ\", \"xanh\", \"vàng\" loại trừ nhau và bao phủ mọi khả năng; tổng ba xác suất bằng bao nhiêu?",
      "Gọi xác suất bi xanh là p. Xác suất bi đỏ theo p là gì? Lập phương trình.",
      "Giải p rồi tính xác suất bi đỏ."
    ],
    "explain": "Tổng xác suất bằng 1. Gọi P(xanh) = p thì P(đỏ) = 2p, và 2p + p + 0,1 = 1 ⇒ 3p = 0,9 ⇒ p = 0,3. Vậy P(đỏ) = 0,6.",
    "tol": 0.001,
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "them-bi-doi-xac-suat",
    "lang": "vi",
    "q": "Trong hộp có 6 bi đỏ và 18 bi xanh. Phải bỏ thêm ít nhất bao nhiêu bi đỏ nữa vào hộp để xác suất lấy được bi đỏ tăng từ 1/4 lên đúng 2/5?",
    "svg": null,
    "choices": null,
    "answer": 6,
    "hints": [
      "Lúc đầu xác suất bi đỏ là bao nhiêu? Số bi xanh có thay đổi khi thêm bi đỏ không?",
      "Gọi x là số bi đỏ thêm vào. Viết xác suất mới theo x và cho bằng 2/5.",
      "Giải phương trình và kiểm tra lại."
    ],
    "explain": "Lúc đầu 6/24 = 1/4. Thêm x bi đỏ: (6 + x)/(24 + x) = 2/5 ⇒ 30 + 5x = 48 + 2x ⇒ 3x = 18 ⇒ x = 6. Thử lại: 12/30 = 2/5 ✓.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "xac-suat-chu-so",
    "lang": "vi",
    "q": "Lập tất cả các số có ba chữ số khác nhau từ các chữ số 1, 2, 3, 4, 5. Chọn ngẫu nhiên một số trong các số đó. Tính xác suất để số được chọn là số chẵn. Viết dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "2/5",
    "hints": [
      "Có bao nhiêu số có ba chữ số khác nhau lập được từ 5 chữ số? (chọn chữ số hàng trăm, hàng chục, hàng đơn vị)",
      "Số chẵn có chữ số hàng đơn vị là những chữ số nào? Với mỗi lựa chọn, còn bao nhiêu cách chọn hai chữ số còn lại?",
      "Chia số các số chẵn cho tổng số các số; rút gọn."
    ],
    "explain": "Tổng số: 5 × 4 × 3 = 60. Số chẵn: hàng đơn vị là 2 hoặc 4 (2 cách), hai chữ số còn lại chọn 4 × 3 = 12 cách, được 2 × 12 = 24 số. Xác suất = 24/60 = 2/5.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "xac-suat-thuc-nghiem",
    "lang": "vi",
    "q": "Nam tung một đồng xu cân đối 3 lần, cả 3 lần đều ra mặt ngửa. Nam nói: \"Lần tung thứ tư nhiều khả năng ra mặt sấp để cân bằng.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Nam đúng: xác suất ra sấp lớn hơn 1/2",
      "Nam đúng: xác suất ra sấp là 3/4",
      "Nam sai: các lần tung độc lập nên xác suất ra sấp vẫn là 1/2",
      "Nam sai: lúc này xác suất ra ngửa bằng 0"
    ],
    "answer": 2,
    "hints": [
      "Đồng xu có \"nhớ\" các lần tung trước không?",
      "Các lần tung độc lập có ảnh hưởng nhau không?",
      "Xác suất ra sấp ở lần thứ tư là bao nhiêu?"
    ],
    "explain": "Các lần tung là độc lập: xác suất mặt sấp ở lần thứ tư vẫn là 1/2. Sai lầm: nghĩ rằng kết quả trước làm thay đổi kết quả sau (\"ngụy biện con bạc\"). Lưu ý: nếu đồng xu thực sự không cân đối thì khác, nhưng đề bài nói là cân đối.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "tim-loi-sai-xac-suat",
    "lang": "vi",
    "q": "Xác suất trời mưa vào thứ Bảy là 0,3 và vào Chủ nhật cũng là 0,3. Hoa nói: \"Xác suất mưa ít nhất một trong hai ngày là 0,3 + 0,3 = 0,6.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Hoa đúng: cộng các xác suất",
      "Cách làm của Hoa không hợp lệ: hai biến cố không xung khắc (có thể mưa cả hai ngày) nên chưa thể kết luận 0,6",
      "Hoa sai: kết quả là 0,3 × 0,3 = 0,09",
      "Hoa sai: kết quả là 0,3"
    ],
    "answer": 1,
    "hints": [
      "Phép cộng xác suất chỉ dùng khi hai biến cố có tính chất gì?",
      "\"Mưa thứ Bảy\" và \"mưa Chủ nhật\" có thể cùng xảy ra không?",
      "Nếu cùng xảy ra, trường hợp đó bị đếm mấy lần khi cộng?"
    ],
    "explain": "Hai biến cố không xung khắc (có thể mưa cả hai ngày), nên không thể cộng thẳng xác suất; trường hợp mưa cả hai ngày bị tính hai lần. Do đó, đáp án đúng là: không thể kết luận 0,6, thực tế giá trị nhỏ hơn hoặc bằng 0,6 và phụ thuộc vào mối quan hệ giữa hai ngày.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "xac-suat-bu",
    "lang": "vi",
    "q": "Gieo hai con xúc xắc cân đối và nhân hai số chấm. Tính xác suất để tích chẵn. Viết dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "3/4",
    "hints": [
      "Tích hai số tự nhiên lẻ khi nào? Khi nào chẵn?",
      "Tính xác suất biến cố đối: tích lẻ, dựa vào khả năng mỗi con ra mặt lẻ.",
      "Xác suất cần tìm bằng 1 trừ xác suất biến cố đối."
    ],
    "explain": "Tích lẻ ⇔ cả hai số đều lẻ: 3 × 3 = 9 trong 36 kết quả, xác suất 9/36 = 1/4. Xác suất tích chẵn = 1 − 1/4 = 3/4.",
    "why": {
      "q": "Vì sao đếm các kết quả có tích lẻ lại dễ hơn?",
      "choices": [
        "Vì tích lẻ chỉ xảy ra khi cả hai số đều lẻ — một trường hợp đơn giản, còn tích chẵn có nhiều trường hợp",
        "Vì số lẻ xuất hiện nhiều hơn số chẵn",
        "Vì xúc xắc cân đối",
        "Vì 36 chia hết cho 4"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "A bag contains 5 red, 3 blue and 2 yellow counters (all the same size). Two counters are taken at random one after the other, without replacement. Find the probability that both counters are the same colour. Give your answer as a fraction in its simplest form.",
  "q.hsg-01.hints": [
    "How many ordered ways are there to take 2 counters from 10?",
    "For each colour, how many ordered ways are there to take 2 of that colour? For red: 5 × 4.",
    "Add the ways for the three colours and divide by the total; simplify."
  ],
  "q.hsg-01.explain": "Total ways: 10 × 9 = 90. Two red: 5 × 4 = 20; two blue: 3 × 2 = 6; two yellow: 2 × 1 = 2. That is 28 favourable ways. Probability = 28/90 = 14/45.",
  "q.hsg-02.q": "Two fair dice, each with faces 1, 2, 3, 4, 5, 6, are rolled together. Find the probability that the total score is at least 10. Give your answer as a fraction in its simplest form.",
  "q.hsg-02.hints": [
    "How many possible outcomes are there in total (ordered pairs)?",
    "List the pairs with total 10, total 11 and total 12.",
    "Add up the favourable pairs and divide by the total number of outcomes."
  ],
  "q.hsg-02.explain": "There are 6 × 6 = 36 outcomes. Total 10: (4,6), (5,5), (6,4); total 11: (5,6), (6,5); total 12: (6,6). That is 3 + 2 + 1 = 6 favourable outcomes. Probability = 6/36 = 1/6.",
  "q.hsg-03.q": "A box contains red, blue and yellow counters. The probability of picking a yellow counter is 0.1, and the probability of picking red is twice the probability of picking blue. Find the probability of picking a red counter.",
  "q.hsg-03.hints": [
    "The events red, blue and yellow are mutually exclusive and cover every possibility; what do the three probabilities add up to?",
    "Let the probability of blue be p. What is the probability of red in terms of p? Write an equation.",
    "Solve for p, then find the probability of red."
  ],
  "q.hsg-03.explain": "The probabilities add up to 1. Let P(blue) = p, then P(red) = 2p, and 2p + p + 0.1 = 1 ⇒ 3p = 0.9 ⇒ p = 0.3. So P(red) = 0.6.",
  "q.hsg-04.q": "A box contains 6 red and 18 blue counters. How many more red counters must be added so that the probability of picking a red counter increases from 1/4 to exactly 2/5?",
  "q.hsg-04.hints": [
    "What is the probability of red at the start? Does the number of blue counters change when red ones are added?",
    "Let x be the number of red counters added. Write the new probability in terms of x and set it equal to 2/5.",
    "Solve the equation and check it."
  ],
  "q.hsg-04.explain": "At the start 6/24 = 1/4. Adding x red: (6 + x)/(24 + x) = 2/5 ⇒ 30 + 5x = 48 + 2x ⇒ 3x = 18 ⇒ x = 6. Check: 12/30 = 2/5 ✓.",
  "q.hsg-05.q": "Form all the three-digit numbers with different digits from the digits 1, 2, 3, 4, 5. One of these numbers is chosen at random. Find the probability that it is even. Give your answer as a fraction in its simplest form.",
  "q.hsg-05.hints": [
    "How many three-digit numbers with different digits can be made from 5 digits? (choose hundreds, tens and units digits)",
    "Which digits can the units digit of an even number be? For each choice, how many ways are there to choose the other two digits?",
    "Divide the number of even numbers by the total; simplify."
  ],
  "q.hsg-05.explain": "Total: 5 × 4 × 3 = 60. Even numbers: the units digit is 2 or 4 (2 ways), the other two digits can be chosen in 4 × 3 = 12 ways, giving 2 × 12 = 24 numbers. Probability = 24/60 = 2/5.",
  "q.hsg-06.q": "Nam flips a fair coin 3 times and gets heads each time. Nam says: \"The 4th flip is more likely to be tails to even things out.\" Which comment is correct?",
  "q.hsg-06.hints": [
    "Does the coin \"remember\" the earlier flips?",
    "Do independent flips affect each other?",
    "What is the probability of tails on the 4th flip?"
  ],
  "q.hsg-06.explain": "The flips are independent: the probability of tails on the 4th flip is still 1/2. The mistake is thinking earlier results change later ones (the \"gambler's fallacy\"). Note: a coin that was really biased would be different, but the question says it is fair.",
  "q.hsg-06.choices": [
    "Nam is right: tails has probability greater than 1/2",
    "Nam is right: tails has probability 3/4",
    "Nam is wrong: the flips are independent, so tails still has probability 1/2",
    "Nam is wrong: heads now has probability 0"
  ],
  "q.hsg-07.q": "The probability of rain on Saturday is 0.3 and on Sunday it is also 0.3. Hoa says: \"The probability of rain on at least one of the two days is 0.3 + 0.3 = 0.6.\" Which comment is correct?",
  "q.hsg-07.hints": [
    "Adding probabilities works only when the two events have what property?",
    "Can \"rain on Saturday\" and \"rain on Sunday\" happen together?",
    "If they can happen together, how many times is that case counted when you add?"
  ],
  "q.hsg-07.explain": "The events are not mutually exclusive (it can rain on both days), so you cannot simply add; the case of rain on both days is counted twice. So the correct statement is that 0.6 is not justified: the true value is at most 0.6 and depends on how the two days are related.",
  "q.hsg-07.choices": [
    "Hoa is right: add the probabilities",
    "Hoa's method is invalid: the events are not mutually exclusive (it can rain on both days), so 0.6 is not justified",
    "Hoa is wrong: the answer is 0.3 × 0.3 = 0.09",
    "Hoa is wrong: the answer is 0.3"
  ],
  "q.hsg-08.q": "Two fair dice are rolled and the two scores are multiplied. Find the probability that the product is even. Give your answer as a fraction in its simplest form.",
  "q.hsg-08.hints": [
    "When is the product of two whole numbers odd? When is it even?",
    "Find the probability of the opposite event: the product is odd, using the chance that each die shows an odd number.",
    "The required probability is 1 minus the probability of the opposite event."
  ],
  "q.hsg-08.explain": "The product is odd ⇔ both scores are odd: 3 × 3 = 9 of the 36 outcomes, probability 9/36 = 1/4. Probability the product is even = 1 − 1/4 = 3/4.",
  "q.hsg-08.why.q": "Why is it easier to count the outcomes where the product is odd?",
  "q.hsg-08.why.choices": [
    "Because the product is odd only when both scores are odd, which is one simple case, while 'even' has many cases",
    "Because odd numbers are more common than even numbers",
    "Because the dice are fair",
    "Because 36 is divisible by 4"
  ]
}, vi: {} }
});
