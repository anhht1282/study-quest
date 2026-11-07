window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 4,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "decimal-series",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính tổng S = 0,01 + 0,02 + 0,03 + … + 0,49 + 0,50.",
    "svg": null,
    "choices": null,
    "answer": 12.75,
    "hints": [
      "Hãy ghép số đầu với số cuối, số thứ hai với số thứ hai từ cuối. Mỗi cặp có tổng bằng bao nhiêu?",
      "Có bao nhiêu số hạng, và do đó bao nhiêu cặp?",
      "Hoặc: S = 0,01 × (1 + 2 + … + 50). Tổng 1 + 2 + … + 50 bằng bao nhiêu?"
    ],
    "explain": "S = 0,01 × (1 + 2 + … + 50) = 0,01 × (50 × 51 ÷ 2) = 0,01 × 1 275 = 12,75. (Cách ghép cặp: 0,01 + 0,50 = 0,51, có 25 cặp, 25 × 0,51 = 12,75.)",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "motion-decimals",
    "source": "hsg",
    "lang": "vi",
    "q": "Hai xe A và B xuất phát từ hai thành phố cách nhau 258,25 km và đi ngược chiều nhau. Xe A khởi hành lúc 6 giờ với vận tốc 42,5 km/h; xe B khởi hành lúc 6 giờ 30 phút với vận tốc 36,5 km/h. Đến lúc gặp nhau, xe A đã đi được bao nhiêu ki-lô-mét?",
    "svg": null,
    "choices": null,
    "answer": 148.75,
    "hints": [
      "Trong nửa giờ đầu chỉ có xe A chạy. Xe A đi được bao nhiêu km và khoảng cách còn lại là bao nhiêu?",
      "Sau khi cả hai cùng chạy, mỗi giờ khoảng cách giảm bao nhiêu km?",
      "Từ đó tính thời gian hai xe cùng chạy, rồi tổng thời gian xe A đã chạy."
    ],
    "explain": "Nửa giờ đầu xe A đi 42,5 × 0,5 = 21,25 km; còn lại 258,25 − 21,25 = 237 km. Mỗi giờ hai xe tiến lại gần nhau 42,5 + 36,5 = 79 km nên mất 237 ÷ 79 = 3 giờ. Xe A chạy tổng cộng 3,5 giờ, đi được 42,5 × 3,5 = 148,75 km.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "remove-point",
    "source": "hsg",
    "lang": "vi",
    "q": "Số thập phân a có đúng một chữ số ở phần thập phân. Nếu bỏ dấu phẩy của a (giữ nguyên các chữ số) thì được số mới lớn hơn a là 224,1 đơn vị. Tìm a.",
    "svg": null,
    "choices": null,
    "answer": 24.9,
    "hints": [
      "Bỏ dấu phẩy của số có một chữ số thập phân thì số mới gấp mấy lần a?",
      "Hiệu «số mới − a» bằng bao nhiêu lần a?",
      "Nếu 9 lần a bằng 224,1 thì a là bao nhiêu?"
    ],
    "explain": "Bỏ dấu phẩy của số có một chữ số thập phân là nhân số đó với 10. Do đó 10a − a = 9a = 224,1 ⇒ a = 224,1 ÷ 9 = 24,9. Kiểm tra: 249 − 24,9 = 224,1.",
    "why": null
  },
  {
    "id": "hsg-04", "howto": "Lập tất cả các số thập phân theo đúng luật của đề, rồi nhập hiệu giữa số lớn nhất và số nhỏ nhất.",
    "type": "num",
    "diff": 3,
    "skill": "digit-arrangement",
    "source": "hsg",
    "lang": "vi",
    "q": "Dùng ba chữ số 3, 5, 8, mỗi chữ số đúng một lần, cùng với đúng một dấu phẩy đặt giữa các chữ số, ta lập được các số thập phân (dạng a,bc hoặc ab,c). Hiệu giữa số lớn nhất và số nhỏ nhất trong các số ấy là bao nhiêu?",
    "svg": null,
    "choices": null,
    "answer": 81.72,
    "hints": [
      "Để số lớn nhất, phần nguyên nên có mấy chữ số và bắt đầu bằng chữ số nào?",
      "Để số nhỏ nhất, phần nguyên nên có mấy chữ số và bắt đầu bằng chữ số nào?",
      "Sắp xếp các chữ số còn lại để tối đa hóa hoặc tối thiểu hóa, rồi trừ hai số."
    ],
    "explain": "Số lớn nhất: phần nguyên hai chữ số lớn nhất 85, phần thập phân 3: 85,3. Số nhỏ nhất: phần nguyên một chữ số nhỏ nhất 3, rồi các chữ số nhỏ tiếp theo: 3,58. Hiệu: 85,3 − 3,58 = 81,72.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "divide-remainder",
    "source": "hsg",
    "lang": "vi",
    "q": "Một sợi dây dài 7,5 m được cắt thành các đoạn dài 0,35 m cho đến khi không cắt được nữa. Đoạn dây còn thừa dài bao nhiêu mét?",
    "svg": null,
    "choices": null,
    "answer": 0.15,
    "hints": [
      "Chia 7,5 cho 0,35: nhân cả hai số với 100 thì phép chia trở thành phép chia nào?",
      "Thương nguyên nhận được là bao nhiêu (số đoạn cắt được trọn vẹn)?",
      "Số mét đã cắt là bao nhiêu? Lấy 7,5 trừ đi số đó."
    ],
    "explain": "750 ÷ 35 = 21 dư 15, nên cắt được 21 đoạn. Đã dùng 21 × 0,35 = 7,35 m. Dây thừa 7,5 − 7,35 = 0,15 m. (Lưu ý: phần dư của phép chia 750 ÷ 35 là 15 ứng với 0,15 m, không phải 15 m.)",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "num",
    "diff": 3,
    "skill": "factorise-decimal",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính giá trị biểu thức (14,7 × 0,25 + 0,25 × 5,3) ÷ 0,125.",
    "svg": null,
    "choices": null,
    "answer": 40,
    "hints": [
      "Hai tích ở tử có thừa số chung nào? Hãy đặt thừa số chung ra ngoài.",
      "Tổng 14,7 + 5,3 bằng bao nhiêu?",
      "0,25 ÷ 0,125 bằng bao nhiêu? Ghép các kết quả lại."
    ],
    "explain": "14,7 × 0,25 + 0,25 × 5,3 = 0,25 × (14,7 + 5,3) = 0,25 × 20. Chia cho 0,125: 0,25 × 20 ÷ 0,125 = (0,25 ÷ 0,125) × 20 = 2 × 20 = 40.",
    "why": {
      "q": "Bước đặt thừa số chung 0,25 ra ngoài dựa trên tính chất nào?",
      "choices": [
        "Tính chất phân phối của phép nhân đối với phép cộng.",
        "Tính chất giao hoán của phép cộng.",
        "Tính chất kết hợp của phép nhân.",
        "Quy tắc chia hết cho 5."
      ],
      "answer": 0
    }
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "multiply-divide-below-one",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho số dương a và số b với 0 < b < 1. Khẳng định nào sau đây chắc chắn đúng?",
    "svg": null,
    "choices": [
      "a × b > a",
      "a ÷ b < a",
      "a × b < a < a ÷ b",
      "a × b > a ÷ b"
    ],
    "answer": 2,
    "hints": [
      "Thử a = 8, b = 0,5: tính a × b và a ÷ b rồi so sánh với a.",
      "Nhân với một số nhỏ hơn 1 làm số lớn lên hay nhỏ đi? Chia cho một số nhỏ hơn 1 thì sao?",
      "Thử thêm b = 0,1 để chắc chắn quy luật không đổi."
    ],
    "explain": "Với a = 8, b = 0,5: a × b = 4 < 8 < a ÷ b = 16. Tổng quát: 0 < b < 1 thì a × b < a và a ÷ b = a × (1/b) > a vì 1/b > 1. Lỗi hay gặp: tưởng phép nhân luôn làm tăng, phép chia luôn làm giảm.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "difference-of-squares-estimate",
    "source": "hsg",
    "lang": "vi",
    "q": "So sánh tích 0,48 × 0,52 với 0,25 (= 0,5 × 0,5). Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Tích lớn hơn 0,25 vì 0,52 > 0,5.",
      "Hai giá trị bằng nhau vì 0,48 + 0,52 = 0,5 + 0,5.",
      "Tích nhỏ hơn 0,25 đúng 0,0004.",
      "Tích nhỏ hơn 0,25 đúng 0,04."
    ],
    "answer": 2,
    "hints": [
      "Hãy viết 0,48 = 0,5 − 0,02 và 0,52 = 0,5 + 0,02.",
      "Tích (0,5 − 0,02)(0,5 + 0,02) khai triển ra thế nào? Các hạng tử giữa có triệt tiêu không?",
      "0,02 × 0,02 bằng bao nhiêu?"
    ],
    "explain": "0,48 × 0,52 = (0,5 − 0,02)(0,5 + 0,02) = 0,5² − 0,02² = 0,25 − 0,0004 = 0,2496. Vậy tích nhỏ hơn 0,25 đúng 0,0004. Hai số có tổng không đổi thì tích lớn nhất khi chúng bằng nhau; lệch càng xa thì tích càng nhỏ. Lỗi hay gặp: nhầm 0,02² = 0,04.",
    "why": null
  }
] },
  tr: { en: {
    "q.hsg-04.howto": "Make all the decimals allowed by the rules, then enter the difference between the largest and the smallest.",
  "q.hsg-01.q": "Calculate the sum S = 0.01 + 0.02 + 0.03 + … + 0.49 + 0.50.",
  "q.hsg-01.hints": [
    "Pair the first term with the last, the second with the second from last. What is the sum of each pair?",
    "How many terms are there, and so how many pairs?",
    "Or write S = 0.01 × (1 + 2 + … + 50). What is 1 + 2 + … + 50?"
  ],
  "q.hsg-01.explain": "S = 0.01 × (1 + 2 + … + 50) = 0.01 × (50 × 51 ÷ 2) = 0.01 × 1 275 = 12.75. (By pairing: 0.01 + 0.50 = 0.51, there are 25 pairs, 25 × 0.51 = 12.75.)",
  "q.hsg-02.q": "Cars A and B leave two cities 258.25 km apart and travel towards each other. Car A leaves at 6:00 at 42.5 km/h; car B leaves at 6:30 at 36.5 km/h. By the time they meet, how many kilometres has car A travelled?",
  "q.hsg-02.hints": [
    "In the first half hour only car A moves. How far does it go, and how much distance remains?",
    "Once both move, by how many km per hour does the gap shrink?",
    "Use this to find the time both travel, then the total time car A has travelled."
  ],
  "q.hsg-02.explain": "In the first half hour car A travels 42.5 × 0.5 = 21.25 km; the remaining gap is 258.25 − 21.25 = 237 km. Each hour the cars approach by 42.5 + 36.5 = 79 km, so it takes 237 ÷ 79 = 3 hours. Car A travels 3.5 hours in total, covering 42.5 × 3.5 = 148.75 km.",
  "q.hsg-03.q": "The decimal a has exactly one digit after the decimal point. If the decimal point is removed (keeping the digits), the new number is 224.1 more than a. Find a.",
  "q.hsg-03.hints": [
    "Removing the point from a number with one decimal place multiplies it by what?",
    "The difference \"new number − a\" equals how many times a?",
    "If 9 times a equals 224.1, what is a?"
  ],
  "q.hsg-03.explain": "Removing the point from a number with one decimal place multiplies it by 10. So 10a − a = 9a = 224.1 ⇒ a = 224.1 ÷ 9 = 24.9. Check: 249 − 24.9 = 224.1.",
  "q.hsg-04.q": "Using the digits 3, 5 and 8, each exactly once, and exactly one decimal point between digits, we can make decimals (of the form a.bc or ab.c). What is the difference between the largest and the smallest of these numbers?",
  "q.hsg-04.hints": [
    "For the largest number, how many digits should the whole-number part have and which digit should start it?",
    "For the smallest number, how many digits should the whole-number part have and which digit should start it?",
    "Arrange the remaining digits to maximise or minimise, then subtract."
  ],
  "q.hsg-04.explain": "Largest: the biggest two-digit whole part 85, then 3: 85.3. Smallest: a one-digit whole part with the smallest digit 3, then the next smallest digits: 3.58. Difference: 85.3 − 3.58 = 81.72.",
  "q.hsg-05.q": "A 7.5 m rope is cut into pieces of length 0.35 m until no more full pieces can be cut. How many metres of rope are left over?",
  "q.hsg-05.hints": [
    "Divide 7.5 by 0.35: if you multiply both numbers by 100, what division do you get?",
    "What is the whole-number quotient (the number of full pieces)?",
    "How many metres were cut? Subtract that from 7.5."
  ],
  "q.hsg-05.explain": "750 ÷ 35 = 21 remainder 15, so 21 pieces are cut. Length used: 21 × 0.35 = 7.35 m. Left over: 7.5 − 7.35 = 0.15 m. (Note: the remainder 15 in 750 ÷ 35 corresponds to 0.15 m, not 15 m.)",
  "q.hsg-06.q": "Evaluate (14.7 × 0.25 + 0.25 × 5.3) ÷ 0.125.",
  "q.hsg-06.hints": [
    "What factor do the two products have in common? Take it outside a bracket.",
    "What is 14.7 + 5.3?",
    "What is 0.25 ÷ 0.125? Put the results together."
  ],
  "q.hsg-06.explain": "14.7 × 0.25 + 0.25 × 5.3 = 0.25 × (14.7 + 5.3) = 0.25 × 20. Dividing by 0.125: 0.25 × 20 ÷ 0.125 = (0.25 ÷ 0.125) × 20 = 2 × 20 = 40.",
  "q.hsg-06.why.q": "Taking the common factor 0.25 outside the bracket relies on which property?",
  "q.hsg-06.why.choices": [
    "The distributive property of multiplication over addition.",
    "The commutative property of addition.",
    "The associative property of multiplication.",
    "The divisibility rule for 5."
  ],
  "q.hsg-07.q": "Let a be a positive number and 0 < b < 1. Which statement is certainly true?",
  "q.hsg-07.choices": [
    "a × b > a",
    "a ÷ b < a",
    "a × b < a < a ÷ b",
    "a × b > a ÷ b"
  ],
  "q.hsg-07.hints": [
    "Try a = 8, b = 0.5: calculate a × b and a ÷ b and compare with a.",
    "Does multiplying by a number less than 1 make a number bigger or smaller? What about dividing?",
    "Try b = 0.1 as well to make sure the pattern holds."
  ],
  "q.hsg-07.explain": "With a = 8, b = 0.5: a × b = 4 < 8 < a ÷ b = 16. In general, if 0 < b < 1 then a × b < a and a ÷ b = a × (1/b) > a because 1/b > 1. Common mistake: believing multiplication always increases and division always decreases.",
  "q.hsg-08.q": "Compare the product 0.48 × 0.52 with 0.25 (= 0.5 × 0.5). Which comment is correct?",
  "q.hsg-08.choices": [
    "The product is greater than 0.25 because 0.52 > 0.5.",
    "They are equal because 0.48 + 0.52 = 0.5 + 0.5.",
    "The product is less than 0.25 by exactly 0.0004.",
    "The product is less than 0.25 by exactly 0.04."
  ],
  "q.hsg-08.hints": [
    "Write 0.48 = 0.5 − 0.02 and 0.52 = 0.5 + 0.02.",
    "How does (0.5 − 0.02)(0.5 + 0.02) expand? Do the middle terms cancel?",
    "What is 0.02 × 0.02?"
  ],
  "q.hsg-08.explain": "0.48 × 0.52 = (0.5 − 0.02)(0.5 + 0.02) = 0.5² − 0.02² = 0.25 − 0.0004 = 0.2496. So the product is less than 0.25 by exactly 0.0004. For two numbers with a fixed sum, the product is largest when they are equal; the further apart, the smaller. Common mistake: thinking 0.02² = 0.04."
}, vi: {} }
});
