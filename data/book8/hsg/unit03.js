window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 3,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "scale-by-01",
    "source": "hsg",
    "lang": "vi",
    "q": "Một cuốn sổ gồm 1 250 tờ giấy, mỗi tờ dày 0,08 mm, và hai tấm bìa, mỗi tấm dày 0,5 mm. Hỏi cuốn sổ dày bao nhiêu xăng-ti-mét?",
    "svg": null,
    "choices": null,
    "answer": 10.1,
    "hints": [
      "Bề dày của 1 250 tờ giấy là 1 250 × 0,08. Em có thể tính nhanh bằng cách nhân với 8 rồi chia cho 100 không?",
      "Hai tấm bìa dày tổng cộng bao nhiêu milimét?",
      "Tổng bề dày tính bằng mm là bao nhiêu? 1 cm bằng bao nhiêu mm?"
    ],
    "explain": "1 250 × 0,08 = 1 250 × 8 ÷ 100 = 100 mm. Hai bìa: 2 × 0,5 = 1 mm. Tổng bề dày 101 mm = 101 ÷ 10 = 10,1 cm.",
    "why": null
  },
  {
    "id": "hsg-02", "howto": "Đếm các số tự nhiên n thỏa mãn cả hai điều kiện làm tròn và nhập số lượng các số đó.",
    "type": "num",
    "diff": 3,
    "skill": "rounding-intersect",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu số tự nhiên n mà khi làm tròn đến hàng chục cho kết quả 4 250 và khi làm tròn đến hàng trăm cho kết quả 4 300?",
    "svg": null,
    "choices": null,
    "answer": 5,
    "hints": [
      "Làm tròn đến hàng chục cho 4 250 thì n nằm trong khoảng nào? Nhớ quy tắc làm tròn chữ số 5.",
      "Làm tròn đến hàng trăm cho 4 300 thì n nằm trong khoảng nào?",
      "Giao của hai khoảng gồm bao nhiêu số tự nhiên?"
    ],
    "explain": "Làm tròn đến hàng chục được 4 250 ⇔ 4 245 ≤ n ≤ 4 254. Làm tròn đến hàng trăm được 4 300 ⇔ 4 250 ≤ n ≤ 4 349. Giao: 4 250 ≤ n ≤ 4 254, gồm 5 số (4 250, 4 251, 4 252, 4 253, 4 254).",
    "why": null
  },
  {
    "id": "hsg-03", "howto": "Đếm các số a thỏa mãn tất cả điều kiện của đề và nhập số lượng, không nhập các giá trị a.",
    "type": "num",
    "diff": 3,
    "skill": "rounding-digits",
    "source": "hsg",
    "lang": "vi",
    "q": "Số thập phân a có đúng ba chữ số thập phân. Làm tròn a đến hàng phần trăm được 3,47. Có bao nhiêu giá trị của a mà chữ số hàng phần nghìn của a khác 0 và chia hết cho 3?",
    "svg": null,
    "choices": null,
    "answer": 3,
    "hints": [
      "Làm tròn đến hai chữ số thập phân được 3,47 thì a thuộc khoảng nào?",
      "Liệt kê các số có ba chữ số thập phân trong khoảng đó. Chữ số hàng phần nghìn của chúng là những chữ số nào?",
      "Trong các chữ số ấy, chữ số nào khác 0 và chia hết cho 3?"
    ],
    "explain": "Làm tròn đến hàng phần trăm được 3,47 ⇔ 3,465 ≤ a < 3,475. Các số có ba chữ số thập phân: 3,465; 3,466; …; 3,474 (chữ số hàng phần nghìn là 5, 6, 7, 8, 9, 0, 1, 2, 3, 4). Chữ số khác 0, chia hết cho 3: 6, 9, 3. Vậy có 3 giá trị: 3,466; 3,469; 3,473.",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "upper-bound-area",
    "source": "hsg",
    "lang": "vi",
    "q": "Một hình chữ nhật có chiều dài 8,3 m và chiều rộng 4,7 m, cả hai số đo đã được làm tròn đến 0,1 m. Diện tích lớn nhất có thể của hình chữ nhật là bao nhiêu mét vuông? (Làm tròn đến hàng phần trăm.)",
    "svg": null,
    "choices": null,
    "answer": 39.66,
    "tol": 0.01,
    "hints": [
      "Số đo 8,3 m sau khi làm tròn đến 0,1 m có thể lớn nhất là bao nhiêu (giá trị chưa đạt tới)?",
      "Tương tự, chiều rộng 4,7 m có thể lớn nhất là bao nhiêu?",
      "Nhân hai cận trên với nhau rồi làm tròn đến hàng phần trăm."
    ],
    "explain": "Chiều dài thực nằm trong [8,25; 8,35) nên cận trên là 8,35. Chiều rộng thực nằm trong [4,65; 4,75) nên cận trên là 4,75. Diện tích lớn nhất xấp xỉ 8,35 × 4,75 = 39,6625 ≈ 39,66 m².",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "recurring-digit-sum",
    "source": "hsg",
    "lang": "vi",
    "q": "Viết 1/7 dưới dạng số thập phân vô hạn tuần hoàn 0,(142857). Tính tổng của 100 chữ số thập phân đầu tiên.",
    "svg": null,
    "choices": null,
    "answer": 447,
    "hints": [
      "Chu kỳ 142857 gồm mấy chữ số? Tổng các chữ số của một chu kỳ là bao nhiêu?",
      "100 chữ số thập phân đầu tiên gồm bao nhiêu chu kỳ đầy đủ, và còn dư mấy chữ số?",
      "Các chữ số dư là những chữ số đầu của chu kỳ. Cộng chúng vào tổng các chu kỳ đầy đủ."
    ],
    "explain": "Chu kỳ 142857 có 6 chữ số, tổng 1 + 4 + 2 + 8 + 5 + 7 = 27. 100 = 6 × 16 + 4: có 16 chu kỳ đầy đủ (tổng 16 × 27 = 432) và 4 chữ số đầu của chu kỳ tiếp theo là 1, 4, 2, 8 (tổng 15). Tổng cần tìm: 432 + 15 = 447.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "num",
    "diff": 3,
    "skill": "tens-shift",
    "source": "hsg",
    "lang": "vi",
    "q": "Một số thập phân khi dời dấu phẩy sang trái một chữ số thì số mới kém số ban đầu 4,05 đơn vị. Tìm số ban đầu.",
    "svg": null,
    "choices": null,
    "answer": 4.5,
    "hints": [
      "Dời dấu phẩy sang trái một chữ số tương đương phép chia nào? Số mới bằng bao nhiêu phần số ban đầu?",
      "Hiệu «số cũ − số mới» bằng bao nhiêu phần của số cũ?",
      "Nếu 0,9 lần số cũ bằng 4,05 thì số cũ là bao nhiêu?"
    ],
    "explain": "Gọi số ban đầu là x. Dời dấu phẩy sang trái một chữ số được x ÷ 10. Theo đề: x − x ÷ 10 = 4,05 ⇔ 0,9x = 4,05 ⇔ x = 4,5. Kiểm tra: 4,5 → 0,45; hiệu 4,05.",
    "why": {
      "q": "Dời dấu phẩy của một số sang trái một chữ số tương đương với phép tính nào?",
      "choices": [
        "Chia số đó cho 10.",
        "Nhân số đó với 0,01.",
        "Trừ số đó đi 10.",
        "Chia số đó cho 100."
      ],
      "answer": 0
    }
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "sig-fig-interval",
    "source": "hsg",
    "lang": "vi",
    "q": "Số x làm tròn đến 1 chữ số có nghĩa cho kết quả 0,3. Khẳng định nào chắc chắn đúng?",
    "svg": null,
    "choices": [
      "0,25 ≤ x < 0,35",
      "0,2 ≤ x ≤ 0,4",
      "0,3 ≤ x < 0,4",
      "x > 0,3"
    ],
    "answer": 0,
    "hints": [
      "Chữ số có nghĩa đầu tiên của 0,3 nằm ở hàng nào (phần mười, phần trăm…)?",
      "Làm tròn đến hàng phần mười thì số nhỏ nhất và lớn nhất mà vẫn cho 0,3 là bao nhiêu?",
      "Số 0,35 làm tròn thành 0,3 hay 0,4? Điểm 0,25 thì sao?"
    ],
    "explain": "0,3 làm tròn ở hàng phần mười, nên x nằm trong khoảng cách 0,05 quanh 0,3: 0,25 ≤ x < 0,35 (0,25 làm tròn lên thành 0,3; 0,35 làm tròn lên thành 0,4). Lỗi hay gặp: nghĩ phải là 0,3 ≤ x < 0,4 như cắt bỏ phần thập phân.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "double-rounding",
    "source": "hsg",
    "lang": "vi",
    "q": "Hoa làm tròn 2,4449 đến 1 chữ số thập phân như sau: 2,4449 → 2,445 → 2,45 → 2,5. Kết quả và cách làm của Hoa như thế nào?",
    "svg": null,
    "choices": [
      "Đúng, vì làm tròn dần từng bước cho độ chính xác cao hơn.",
      "Sai: cần làm tròn một lần duy nhất từ số gốc, kết quả đúng là 2,4.",
      "Sai: kết quả đúng là 2,44.",
      "Sai: kết quả đúng là 2,6."
    ],
    "answer": 1,
    "hints": [
      "Để làm tròn đến 1 chữ số thập phân, em chỉ cần nhìn chữ số nào của số gốc 2,4449?",
      "Chữ số đó là 4 hay là từ 5 trở lên?",
      "Mỗi lần làm tròn trung gian có làm thay đổi chữ số quyết định không?"
    ],
    "explain": "Làm tròn đến một chữ số thập phân chỉ xét chữ số hàng phần trăm của số gốc: 2,4449 có chữ số hàng phần trăm là 4 (< 5) nên kết quả là 2,4. Làm tròn nhiều lần liên tiếp tạo ra «hiệu ứng domino» (4 → 5 → lên) và cho kết quả sai 2,5.",
    "why": null
  }
] },
  tr: { en: {
    "q.hsg-03.howto": "Count the numbers a that meet all the conditions and enter how many there are, not the values of a.",
    "q.hsg-02.howto": "Count the whole numbers n that satisfy both rounding conditions and enter how many there are.",
  "q.hsg-01.q": "A notebook has 1 250 sheets of paper, each 0.08 mm thick, and two covers, each 0.5 mm thick. How thick is the notebook in centimetres?",
  "q.hsg-01.hints": [
    "The thickness of 1 250 sheets is 1 250 × 0.08. Can you do it quickly by multiplying by 8 and dividing by 100?",
    "How many millimetres thick are the two covers in total?",
    "What is the total thickness in mm? How many mm are in 1 cm?"
  ],
  "q.hsg-01.explain": "1 250 × 0.08 = 1 250 × 8 ÷ 100 = 100 mm. Two covers: 2 × 0.5 = 1 mm. Total thickness 101 mm = 101 ÷ 10 = 10.1 cm.",
  "q.hsg-02.q": "How many whole numbers n round to 4 250 when rounded to the nearest 10 and to 4 300 when rounded to the nearest 100?",
  "q.hsg-02.hints": [
    "Rounding to the nearest 10 gives 4 250: which interval does n lie in? Remember the rule for a digit 5.",
    "Rounding to the nearest 100 gives 4 300: which interval does n lie in?",
    "How many whole numbers are in both intervals?"
  ],
  "q.hsg-02.explain": "Rounds to 4 250 (nearest 10) ⇔ 4 245 ≤ n ≤ 4 254. Rounds to 4 300 (nearest 100) ⇔ 4 250 ≤ n ≤ 4 349. Overlap: 4 250 ≤ n ≤ 4 254, which is 5 numbers (4 250, 4 251, 4 252, 4 253, 4 254).",
  "q.hsg-03.q": "The decimal a has exactly three decimal places. Rounded to 2 decimal places, a is 3.47. How many values of a have a thousandths digit that is non-zero and divisible by 3?",
  "q.hsg-03.hints": [
    "Rounding to 2 decimal places gives 3.47: which interval does a lie in?",
    "List the numbers with three decimal places in that interval. Which digits appear in the thousandths place?",
    "Which of those digits are non-zero and divisible by 3?"
  ],
  "q.hsg-03.explain": "Rounds to 3.47 (2 d.p.) ⇔ 3.465 ≤ a < 3.475. The numbers with three decimal places are 3.465, 3.466, …, 3.474 (thousandths digits 5, 6, 7, 8, 9, 0, 1, 2, 3, 4). Non-zero digits divisible by 3: 6, 9, 3. So there are 3 values: 3.466, 3.469, 3.473.",
  "q.hsg-04.q": "A rectangle has length 8.3 m and width 4.7 m, both measured to the nearest 0.1 m. What is the greatest possible area of the rectangle in square metres? (Round to 2 decimal places.)",
  "q.hsg-04.hints": [
    "A length of 8.3 m rounded to the nearest 0.1 m could be as large as what (the upper bound)?",
    "Similarly, what is the upper bound of the width 4.7 m?",
    "Multiply the two upper bounds and round to 2 decimal places."
  ],
  "q.hsg-04.explain": "The true length is in [8.25, 8.35) so its upper bound is 8.35. The true width is in [4.65, 4.75) so its upper bound is 4.75. The greatest area is about 8.35 × 4.75 = 39.6625 ≈ 39.66 m².",
  "q.hsg-05.q": "Write 1/7 as the recurring decimal 0.(142857). Find the sum of its first 100 decimal digits.",
  "q.hsg-05.hints": [
    "How many digits are in the repeating block 142857? What is the sum of the digits of one block?",
    "How many complete blocks are in the first 100 decimal digits, and how many digits are left over?",
    "The leftover digits are the first digits of the block. Add them to the total of the complete blocks."
  ],
  "q.hsg-05.explain": "The block 142857 has 6 digits with sum 1 + 4 + 2 + 8 + 5 + 7 = 27. 100 = 6 × 16 + 4: there are 16 complete blocks (sum 16 × 27 = 432) and the first 4 digits of the next block are 1, 4, 2, 8 (sum 15). The total is 432 + 15 = 447.",
  "q.hsg-06.q": "When the decimal point of a number is moved one place to the left, the new number is 4.05 less than the original. Find the original number.",
  "q.hsg-06.hints": [
    "Moving the decimal point one place left is equivalent to which division? What fraction of the original is the new number?",
    "The difference \"old − new\" is what fraction of the old number?",
    "If 0.9 times the old number equals 4.05, what is the old number?"
  ],
  "q.hsg-06.explain": "Let the original number be x. Moving the point one place left gives x ÷ 10. So x − x ÷ 10 = 4.05 ⇔ 0.9x = 4.05 ⇔ x = 4.5. Check: 4.5 → 0.45; difference 4.05.",
  "q.hsg-06.why.q": "Moving the decimal point of a number one place to the left is equivalent to which calculation?",
  "q.hsg-06.why.choices": [
    "Dividing the number by 10.",
    "Multiplying the number by 0.01.",
    "Subtracting 10 from the number.",
    "Dividing the number by 100."
  ],
  "q.hsg-07.q": "The number x rounds to 0.3 correct to 1 significant figure. Which statement must be true?",
  "q.hsg-07.choices": [
    "0.25 ≤ x < 0.35",
    "0.2 ≤ x ≤ 0.4",
    "0.3 ≤ x < 0.4",
    "x > 0.3"
  ],
  "q.hsg-07.hints": [
    "In which place (tenths, hundredths …) is the first significant figure of 0.3?",
    "Rounding to the nearest tenth, what are the smallest and largest values that still give 0.3?",
    "Does 0.35 round to 0.3 or 0.4? What about 0.25?"
  ],
  "q.hsg-07.explain": "0.3 is rounded at the tenths place, so x is within 0.05 of 0.3: 0.25 ≤ x < 0.35 (0.25 rounds up to 0.3; 0.35 rounds up to 0.4). Common mistake: thinking it is 0.3 ≤ x < 0.4, as if the digits were simply cut off.",
  "q.hsg-08.q": "Hoa rounds 2.4449 to 1 decimal place like this: 2.4449 → 2.445 → 2.45 → 2.5. What can we say about her method and result?",
  "q.hsg-08.choices": [
    "Correct, because rounding step by step gives more accuracy.",
    "Wrong: you must round once from the original number; the correct answer is 2.4.",
    "Wrong: the correct answer is 2.44.",
    "Wrong: the correct answer is 2.6."
  ],
  "q.hsg-08.hints": [
    "To round to 1 decimal place, which digit of the original number 2.4449 do you need to look at?",
    "Is that digit 4, or 5 or more?",
    "Does each intermediate rounding change the deciding digit?"
  ],
  "q.hsg-08.explain": "Rounding to 1 decimal place only looks at the hundredths digit of the original number: 2.4449 has hundredths digit 4 (< 5), so the answer is 2.4. Rounding repeatedly creates a \"domino effect\" (4 → 5 → round up) and gives the wrong answer 2.5."
}, vi: {} }
});
