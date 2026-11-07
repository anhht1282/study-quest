window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 12,
  pages: [147,158],
  sections: {
 "12.1": [
  {
   "id": "wb-12.1-01",
   "type": "text",
   "diff": 1,
   "skill": "simplify-ratio",
   "source": "wb",
   "lang": "en",
   "q": "Simplify the ratio 18 : 45.",
   "svg": null,
   "choices": null,
   "answer": "2:5",
   "accept": [
    "2 : 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Hai số 18 và 45 cùng chia hết cho những số nào?",
    "Số lớn nhất chia hết cho cả hai là số nào?",
    "Chia cả 18 và 45 cho số đó rồi viết kết quả dạng a : b."
   ],
   "explain": "ƯCLN(18, 45) = 9. Chia cả hai số cho 9: 18 : 45 = 2 : 5.",
   "why": null
  },
  {
   "id": "wb-12.1-02",
   "type": "text",
   "diff": 1,
   "skill": "simplify-ratio3",
   "source": "wb",
   "lang": "en",
   "q": "Simplify the ratio 14 : 21 : 35.",
   "svg": null,
   "choices": null,
   "answer": "2:3:5",
   "accept": [
    "2 : 3 : 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Ba số 14, 21, 35 đều là bội của số nào?",
    "Em phải chia cả ba số cho cùng một số hay chỉ chia hai số?",
    "14 ÷ 7, 21 ÷ 7 và 35 ÷ 7 bằng bao nhiêu?"
   ],
   "explain": "ƯCLN của 14, 21, 35 là 7. Chia cả ba số cho 7 được 2 : 3 : 5.",
   "why": null
  },
  {
   "id": "wb-12.1-03", "howto": "Write the two amounts of money as a ratio in its simplest form. Enter whole numbers only, without units.",
   "type": "text",
   "diff": 2,
   "skill": "simplify-units",
   "source": "wb",
   "lang": "en",
   "q": "Simplify the ratio $1.26 : 60 cents.",
   "svg": null,
   "choices": null,
   "answer": "21:10",
   "accept": [
    "21 : 10"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Hai đại lượng đang ở hai đơn vị khác nhau. Em đổi $1,26 sang cent như thế nào?",
    "Sau khi đổi, tỉ số là 126 : 60. Hai số này cùng chia hết cho số lớn nhất nào?",
    "Chia cả hai cho 6 rồi viết kết quả."
   ],
   "explain": "$1,26 = 126 cent nên tỉ số là 126 : 60. Chia cả hai cho 6 được 21 : 10.",
   "why": null
  },
  {
   "id": "wb-12.1-04",
   "type": "num",
   "diff": 2,
   "skill": "ratio-1-n",
   "source": "wb",
   "lang": "en",
   "q": "Write the ratio 4 : 10 in the form 1 : n. What is n?",
   "svg": null,
   "choices": null,
   "answer": 2.5,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Để vế đầu bằng 1, em phải chia vế đầu cho số nào?",
    "Cái gì làm với vế trái thì phải làm với vế phải. Vậy chia 10 cho số nào?",
    "10 ÷ 4 = ?"
   ],
   "explain": "Chia cả hai vế cho 4: 4 : 10 = 1 : 2,5. Vậy n = 2,5.",
   "why": null
  },
  {
   "id": "wb-12.1-05",
   "type": "mc",
   "diff": 3,
   "skill": "simplify-ratio3-error",
   "source": "wb",
   "lang": "en",
   "q": "Karen simplifies 12 : 40 : 8 like this: '12 : 40 is 3 : 10 and 40 : 8 is 5 : 1, so the ratio is 3 : 10 : 5 : 1.' Which statement explains her mistake and gives the correct answer?",
   "svg": null,
   "choices": [
    "She must divide all three numbers by the same HCF, 4, to get 3 : 10 : 2",
    "She is correct: the ratio is 3 : 10 : 5 : 1",
    "She should add the numbers to get 60, so 12 : 40 : 8 = 1 : 1 : 1",
    "She should divide only by 2, giving 6 : 20 : 4"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tỉ số ban đầu có mấy phần? Đáp án của Karen có mấy phần?",
    "Số 40 bị rút gọn thành 10 ở cặp đầu và thành 5 ở cặp sau. Hai kết quả đó có khớp nhau không?",
    "Hãy chia cả ba số cho cùng một số lớn nhất. Số đó là bao nhiêu?"
   ],
   "explain": "Karen rút gọn hai cặp bằng hai số chia khác nhau (4 rồi 8), nên số 40 thành 10 ở cặp đầu và 5 ở cặp sau, không thể ghép lại. Phải chia CẢ BA số cho cùng ƯCLN = 4: 12 : 40 : 8 = 3 : 10 : 2.",
   "why": null
  },
  {
   "id": "wb-12.1-06", "howto": "Write the three lengths as a ratio, in the order given, in its simplest form. Enter whole numbers only, without units.",
   "type": "text",
   "diff": 3,
   "skill": "simplify-mixed-units3",
   "source": "wb",
   "lang": "en",
   "q": "Simplify the ratio 6 m : 0.03 km : 150 cm.",
   "svg": null,
   "choices": null,
   "answer": "4:20:1",
   "accept": [
    "4 : 20 : 1"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Ba đại lượng có ba đơn vị khác nhau. Em chọn đơn vị chung nào cho tiện?",
    "Đổi sang cm: 6 m = ? cm, 0,03 km = ? cm (1 km = 100 000 cm).",
    "Viết ba số theo cm rồi chia cho ƯCLN của chúng."
   ],
   "explain": "Đổi sang cm: 6 m = 600 cm, 0,03 km = 3000 cm, 150 cm. Tỉ số 600 : 3000 : 150, chia cho ƯCLN = 150 được 4 : 20 : 1.",
   "why": null
  },
  {
   "id": "wb-12.1-07",
   "type": "mc",
   "diff": 3,
   "skill": "ratio-compare-rate",
   "source": "wb",
   "lang": "en",
   "q": "Mia types 18 words in 40 seconds. Ed types 25 words in 60 seconds. Who types more quickly?",
   "svg": null,
   "choices": [
    "Mia",
    "Ed",
    "They type at the same speed"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Muốn so sánh công bằng, em nên đưa hai bạn về cùng số giây hay cùng số từ?",
    "Tìm số từ gõ được trong 1 giây, hoặc số giây cho 1 từ, của mỗi bạn.",
    "Mia: 18 ÷ 40 = ?; Ed: 25 ÷ 60 = ?. Số nào lớn hơn?"
   ],
   "explain": "Mia: 18 ÷ 40 = 0,45 từ/giây. Ed: 25 ÷ 60 ≈ 0,417 từ/giây. 0,45 > 0,417 nên Mia gõ nhanh hơn. Em không thể chỉ so sánh số từ (25 > 18) vì thời gian khác nhau.",
   "why": null
  },
  {
   "id": "wb-12.1-08", "howto": "Write the three run times as a ratio, in the order given, in its simplest form. Enter whole numbers only, without units.",
   "type": "text",
   "diff": 3,
   "skill": "simplify-times3",
   "source": "wb",
   "lang": "en",
   "q": "Oditi runs for 40 minutes, then 1¼ hours, then 1 hour 50 minutes. Write the ratio of these three times in its simplest form.",
   "svg": null,
   "choices": null,
   "answer": "8:15:22",
   "accept": [
    "8 : 15 : 22"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Để so sánh, em đổi cả ba thời gian về cùng đơn vị. Phút hay giờ tiện hơn?",
    "1¼ giờ = ? phút; 1 giờ 50 phút = ? phút.",
    "Tỉ số 40 : 75 : 110, chia cho ƯCLN của ba số."
   ],
   "explain": "Đổi sang phút: 40, 75 và 110. Tỉ số 40 : 75 : 110, ƯCLN = 5, nên được 8 : 15 : 22.",
   "why": null
  }
 ],
 "12.2": [
  {
   "id": "wb-12.2-01",
   "type": "num",
   "diff": 1,
   "skill": "share-ratio",
   "source": "wb",
   "lang": "en",
   "q": "Share $72 between Ali, Bob and Carl in the ratio 4 : 1 : 3. How much does Ali get?",
   "svg": null,
   "choices": null,
   "answer": 36,
   "accept": [],
   "tol": 0,
   "unitLabel": "$",
   "hints": [
    "Tổng số phần là bao nhiêu?",
    "Một phần có giá trị bao nhiêu đô la?",
    "Ali có 4 phần, vậy nhân giá trị một phần với mấy?"
   ],
   "explain": "Tổng số phần: 4 + 1 + 3 = 8. Một phần: 72 ÷ 8 = 9. Ali nhận 4 × 9 = 36 đô la.",
   "why": null
  },
  {
   "id": "wb-12.2-02",
   "type": "num",
   "diff": 1,
   "skill": "share-ratio",
   "source": "wb",
   "lang": "en",
   "q": "Share $90 in the ratio 1 : 3 : 5. How much is the largest share?",
   "svg": null,
   "choices": null,
   "answer": 50,
   "accept": [],
   "tol": 0,
   "unitLabel": "$",
   "hints": [
    "Cộng các số trong tỉ số để biết tổng số phần.",
    "Chia $90 cho tổng số phần được giá trị một phần.",
    "Phần lớn nhất ứng với số nào trong tỉ số?"
   ],
   "explain": "1 + 3 + 5 = 9 phần. Một phần: 90 ÷ 9 = 10. Phần lớn nhất: 5 × 10 = 50 đô la.",
   "why": null
  },
  {
   "id": "wb-12.2-03",
   "type": "num",
   "diff": 2,
   "skill": "share-bill",
   "source": "wb",
   "lang": "en",
   "q": "Gita, Harry and Indira share an electricity bill in the ratio 2 : 4 : 5. The bill is $165. How much does Harry pay?",
   "svg": null,
   "choices": null,
   "answer": 60,
   "accept": [],
   "tol": 0,
   "unitLabel": "$",
   "hints": [
    "Tổng số phần của tỉ số 2 : 4 : 5 là bao nhiêu?",
    "165 chia cho tổng số phần được bao nhiêu?",
    "Harry có 4 phần: lấy giá trị một phần nhân với 4."
   ],
   "explain": "2 + 4 + 5 = 11 phần. Một phần: 165 ÷ 11 = 15. Harry trả 4 × 15 = 60 đô la. Kiểm tra: 30 + 60 + 75 = 165.",
   "why": null
  },
  {
   "id": "wb-12.2-04",
   "type": "num",
   "diff": 2,
   "skill": "share-members",
   "source": "wb",
   "lang": "en",
   "q": "A gardening club has men, women and children in the ratio 5 : 4 : 11. The club has 240 members. How many children are in the club?",
   "svg": null,
   "choices": null,
   "answer": 132,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng số phần là bao nhiêu?",
    "240 ÷ tổng số phần = số thành viên ứng với một phần.",
    "Trẻ em ứng với 11 phần: nhân lên."
   ],
   "explain": "5 + 4 + 11 = 20 phần. Một phần: 240 ÷ 20 = 12 người. Trẻ em: 11 × 12 = 132.",
   "why": null
  },
  {
   "id": "wb-12.2-05",
   "type": "num",
   "diff": 2,
   "skill": "share-angles",
   "source": "wb",
   "lang": "en",
   "q": "The angles of a triangle are in the ratio 2 : 3 : 4. Find the size of the smallest angle.",
   "svg": null,
   "choices": null,
   "answer": 40,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Tổng ba góc của tam giác là bao nhiêu độ?",
    "Chia 180° cho tổng số phần của tỉ số.",
    "Góc nhỏ nhất ứng với 2 phần."
   ],
   "explain": "2 + 3 + 4 = 9 phần. Một phần: 180° ÷ 9 = 20°. Góc nhỏ nhất: 2 × 20° = 40°.",
   "why": null
  },
  {
   "id": "wb-12.2-06",
   "type": "mc",
   "diff": 3,
   "skill": "share-ratio-error",
   "source": "wb",
   "lang": "en",
   "q": "Sam shares $60 in the ratio 2 : 3. He works out 60 ÷ 2 = 30 and 60 ÷ 3 = 20, so the shares are $30 and $20. What is wrong with his method?",
   "svg": null,
   "choices": [
    "He should divide $60 by the total 2 + 3 = 5 parts first, giving $24 and $36",
    "He should have divided by 2 + 3 = 5 and then added 2 and 3 to the result",
    "Nothing is wrong, since 30 + 20 = 50 is close to 60",
    "He should multiply 60 by 2 and by 3"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Cộng hai phần của Sam lại: có bằng $60 không?",
    "Mỗi người nhận một số phần khác nhau. Tổng số phần là bao nhiêu?",
    "Chia $60 cho tổng số phần được giá trị một phần, rồi nhân với 2 và với 3."
   ],
   "explain": "30 + 20 = 50 ≠ 60, nên cách làm sai: Sam chia cho từng số riêng lẻ thay vì cho TỔNG số phần. Đúng: 60 ÷ 5 = 12; phần chia là 2 × 12 = 24 và 3 × 12 = 36 (24 + 36 = 60).",
   "why": null
  },
  {
   "id": "wb-12.2-07",
   "type": "num",
   "diff": 3,
   "skill": "share-hours",
   "source": "wb",
   "lang": "en",
   "q": "Dan, Eve, Fay and Gus share the $1200 earned from a project in the ratio of the hours they worked: Dan 3, Eve 8, Fay 5, Gus 4. How much more does Eve earn than Gus?",
   "svg": null,
   "choices": null,
   "answer": 240,
   "accept": [],
   "tol": 0,
   "unitLabel": "$",
   "hints": [
    "Tổng số giờ (số phần) là bao nhiêu?",
    "Mỗi giờ (một phần) được trả bao nhiêu đô la?",
    "Eve nhận 8 phần, Gus nhận 4 phần. Hiệu của chúng là bao nhiêu phần?"
   ],
   "explain": "3 + 8 + 5 + 4 = 20 giờ. Mỗi giờ: 1200 ÷ 20 = $60. Eve: 8 × 60 = $480; Gus: 4 × 60 = $240. Hiệu: 480 − 240 = 240 đô la.",
   "why": null
  },
  {
   "id": "wb-12.2-08",
   "type": "num",
   "diff": 3,
   "skill": "share-ages",
   "source": "wb",
   "lang": "en",
   "q": "Every year Maya shares 240 oranges between her children in the ratio of their ages. This year the children are 4, 6 and 10 years old. In four years' time, how many more oranges will the youngest child receive than this year?",
   "svg": null,
   "choices": null,
   "answer": 12,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Năm nay: tổng số phần là 4 + 6 + 10. Đứa nhỏ nhất nhận bao nhiêu quả?",
    "Sau bốn năm, các tuổi là bao nhiêu? Tổng số phần mới là bao nhiêu?",
    "Tính phần của đứa nhỏ nhất ở năm đó (chú ý có thể ra số thập phân) rồi lấy hiệu."
   ],
   "explain": "Năm nay: 4 + 6 + 10 = 20 phần, 240 ÷ 20 = 12 nên đứa nhỏ nhất nhận 4 × 12 = 48. Sau 4 năm: tuổi 8, 10, 14, tổng 32; 240 ÷ 32 = 7,5 nên nhận 8 × 7,5 = 60. Hơn 60 − 48 = 12 quả.",
   "why": null
  },
  {
   "id": "wb-12.2-09",
   "type": "num",
   "diff": 3,
   "skill": "share-loss",
   "source": "wb",
   "lang": "en",
   "q": "Three friends buy a boat. They pay $1200, $1800 and $3000. Later they sell it for $5100 and share the money in the same ratio in which they paid. How much money does the friend who paid $3000 lose?",
   "svg": null,
   "choices": null,
   "answer": 450,
   "accept": [],
   "tol": 0,
   "unitLabel": "$",
   "hints": [
    "Rút gọn tỉ số 1200 : 1800 : 3000 thành số nhỏ nhất.",
    "Chia $5100 theo tỉ số rút gọn đó. Người trả nhiều nhất nhận bao nhiêu?",
    "Lỗ là số tiền đã bỏ ra trừ số tiền nhận lại."
   ],
   "explain": "1200 : 1800 : 3000 = 2 : 3 : 5 (tổng 10 phần). Một phần: 5100 ÷ 10 = 510. Người trả $3000 nhận 5 × 510 = $2550. Lỗ: 3000 − 2550 = 450 đô la.",
   "why": null
  }
 ],
 "12.3": [
  {
   "id": "wb-12.3-01",
   "type": "text",
   "diff": 1,
   "skill": "ratio-to-fraction",
   "source": "wb",
   "lang": "en",
   "q": "A bag has brazil nuts and almonds in the ratio 2 : 3. What fraction of the nuts are almonds? (Give a fraction.)",
   "svg": null,
   "choices": null,
   "answer": "3/5",
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng số phần là bao nhiêu?",
    "Hạnh nhân chiếm mấy phần trong tổng số?",
    "Viết số phần đó trên tổng số phần."
   ],
   "explain": "Tổng số phần: 2 + 3 = 5. Hạnh nhân chiếm 3 phần nên phân số là 3/5.",
   "why": null
  },
  {
   "id": "wb-12.3-02",
   "type": "num",
   "diff": 1,
   "skill": "ratio-total",
   "source": "wb",
   "lang": "en",
   "q": "A box of balls has tennis balls and footballs in the ratio 5 : 4. There are 36 balls in the box. How many tennis balls are there?",
   "svg": null,
   "choices": null,
   "answer": 20,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng số phần là bao nhiêu?",
    "36 chia cho tổng số phần được số bóng ứng với một phần.",
    "Bóng tennis ứng với 5 phần."
   ],
   "explain": "5 + 4 = 9 phần. Một phần: 36 ÷ 9 = 4 quả. Bóng tennis: 5 × 4 = 20.",
   "why": null
  },
  {
   "id": "wb-12.3-03", "howto": "Write the ratio in the order asked: CDs first, then DVDs.",
   "type": "text",
   "diff": 2,
   "skill": "fraction-to-ratio",
   "source": "wb",
   "lang": "en",
   "q": "5/9 of the items in a box are DVDs and the rest are CDs. Write the ratio CDs : DVDs.",
   "svg": null,
   "choices": null,
   "answer": "4:5",
   "accept": [
    "4 : 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Nếu 9 phần là tổng thì DVD chiếm bao nhiêu phần?",
    "Phần còn lại, tức CD, chiếm bao nhiêu phần?",
    "Viết CD : DVD theo thứ tự đề bài."
   ],
   "explain": "Trong 9 phần, DVD có 5 phần nên CD có 9 − 5 = 4 phần. Tỉ số CD : DVD = 4 : 5.",
   "why": null
  },
  {
   "id": "wb-12.3-04",
   "type": "mc",
   "diff": 2,
   "skill": "ratio-total-multiple",
   "source": "wb",
   "lang": "en",
   "q": "The ratio of boys to girls in a swimming club is 4 : 7. Which of these could be the total number of children in the club?",
   "svg": null,
   "choices": [
    "38",
    "45",
    "52",
    "66",
    "70"
   ],
   "answer": 3,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng số phần của tỉ số 4 : 7 là bao nhiêu?",
    "Tổng số trẻ phải là một bội của số nào?",
    "Số nào trong các lựa chọn chia hết cho tổng số phần?"
   ],
   "explain": "4 + 7 = 11, nên tổng số trẻ phải chia hết cho 11. Chỉ có 66 = 6 × 11 chia hết cho 11 (38, 45, 52, 70 đều không).",
   "why": null
  },
  {
   "id": "wb-12.3-05",
   "type": "num",
   "diff": 3,
   "skill": "ratio-total-bounds",
   "source": "wb",
   "lang": "en",
   "q": "The ratio of men to women in a cafe is 7 : 6. The number of adults in the cafe is greater than 30 but less than 40. How many adults are in the cafe?",
   "svg": null,
   "choices": null,
   "answer": 39,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng số phần của tỉ số 7 : 6 là bao nhiêu?",
    "Tổng số người là bội của số đó. Liệt kê các bội của nó.",
    "Bội nào nằm giữa 30 và 40?"
   ],
   "explain": "7 + 6 = 13. Các bội của 13: 13, 26, 39, 52. Chỉ có 39 nằm giữa 30 và 40. Vậy có 39 người lớn (21 đàn ông và 18 phụ nữ).",
   "why": null
  },
  {
   "id": "wb-12.3-06",
   "type": "mc",
   "diff": 3,
   "skill": "compare-proportion",
   "source": "wb",
   "lang": "en",
   "q": "Drink P is made from apple juice and water in the ratio 3 : 7. Drink Q is made from apple juice and water in the ratio 2 : 5. Which drink has the greater proportion of apple juice?",
   "svg": null,
   "choices": [
    "Drink P",
    "Drink Q",
    "They have the same proportion"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tỉ lệ nước ép táo là phân số nào trong mỗi đồ uống? Chú ý tổng số phần.",
    "P: 3/10; Q: 2/7. Muốn so sánh, em quy đồng mẫu số thành mẫu số chung nào?",
    "3/10 = 21/70; 2/7 = ? /70."
   ],
   "explain": "P: tổng 10 phần, táo là 3/10 = 21/70. Q: tổng 7 phần, táo là 2/7 = 20/70. 21/70 > 20/70 nên P có tỉ lệ táo lớn hơn.",
   "why": null
  },
  {
   "id": "wb-12.3-07",
   "type": "mc",
   "diff": 3,
   "skill": "compare-proportion-counts",
   "source": "wb",
   "lang": "en",
   "q": "Li has 28 magazines and 12 puzzle books. Su has 42 magazines and 20 puzzle books. Who has the greater proportion of magazines?",
   "svg": null,
   "choices": [
    "Li",
    "Su",
    "They have the same proportion"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tỉ lệ tạp chí là tạp chí chia cho TỔNG số đồ, không phải chia cho số sách.",
    "Li: 28/40; Su: 42/62. Viết mỗi phân số dưới dạng số thập phân.",
    "28 ÷ 40 = 0,7 còn 42 ÷ 62 = ?"
   ],
   "explain": "Li: 28/(28 + 12) = 28/40 = 0,7. Su: 42/(42 + 20) = 42/62 ≈ 0,677. 0,7 > 0,677 nên Li có tỉ lệ tạp chí lớn hơn. Số tạp chí của Su nhiều hơn, nhưng tỉ lệ mới là điều được hỏi.",
   "why": null
  },
  {
   "id": "wb-12.3-08",
   "type": "num",
   "diff": 2,
   "skill": "ratio-three-total",
   "source": "wb",
   "lang": "en",
   "q": "A builder makes 2.7 tonnes of concrete from cement, sand and gravel in the ratio 1 : 3 : 5. How many kilograms of sand does he use?",
   "svg": null,
   "choices": null,
   "answer": 900,
   "accept": [],
   "tol": 0,
   "unitLabel": "kg",
   "hints": [
    "Đổi 2,7 tấn sang kilôgam (1 tấn = 1000 kg).",
    "Tổng số phần của tỉ số 1 : 3 : 5 là bao nhiêu?",
    "Chia khối lượng cho tổng số phần, rồi nhân với số phần của cát."
   ],
   "explain": "2,7 tấn = 2700 kg. Tổng 1 + 3 + 5 = 9 phần. Một phần: 2700 ÷ 9 = 300 kg. Cát: 3 × 300 = 900 kg.",
   "why": null
  },
  {
   "id": "wb-12.3-09", "howto": "The first number of the ratio (for girls) is hidden. Enter how many girls are in the choir.",
   "type": "num",
   "diff": 3,
   "skill": "ratio-missing-term",
   "source": "wb",
   "lang": "en",
   "q": "The ratio of girls to boys in a choir is ? : 6, with fewer girls than boys. The number of children in the choir is 33. How many girls are in the choir?",
   "svg": null,
   "choices": null,
   "answer": 15,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Số ? là số nguyên dương nhỏ hơn 6. Hãy thử vài giá trị: tổng số phần là ? + 6.",
    "Tổng số em, 33, phải chia hết cho tổng số phần. Giá trị ? nào làm được điều đó?",
    "Khi biết ?, một phần có bao nhiêu em? Số em nữ là bao nhiêu?"
   ],
   "explain": "Tổng số phần là ? + 6, nằm trong 7 đến 11 và phải là ước của 33. Chỉ có 11 (? = 5). Một phần: 33 ÷ 11 = 3 em. Số nữ: 5 × 3 = 15.",
   "why": null
  }
 ]
},
  tr: {
 "en": {
  "q.wb-12.1-01.hints": [
   "Which numbers divide both 18 and 45?",
   "What is the largest number that divides both?",
   "Divide 18 and 45 by it and write the result as a : b."
  ],
  "q.wb-12.1-01.explain": "HCF(18, 45) = 9. Divide both numbers by 9: 18 : 45 = 2 : 5.",
  "q.wb-12.1-02.hints": [
   "Which number are 14, 21 and 35 all multiples of?",
   "Do you divide all three numbers or only two of them?",
   "What are 14 ÷ 7, 21 ÷ 7 and 35 ÷ 7?"
  ],
  "q.wb-12.1-02.explain": "The HCF of 14, 21 and 35 is 7. Dividing all three by 7 gives 2 : 3 : 5.",
  "q.wb-12.1-03.hints": [
   "The two quantities use different units. How do you change $1.26 into cents?",
   "After converting, the ratio is 126 : 60. What is the largest number that divides both?",
   "Divide both by 6 and write the result."
  ],
  "q.wb-12.1-03.explain": "$1.26 = 126 cents, so the ratio is 126 : 60. Dividing both by 6 gives 21 : 10.",
  "q.wb-12.1-04.hints": [
   "To make the first number 1, what must you divide it by?",
   "Whatever you do to one side you must do to the other. So what do you divide 10 by?",
   "What is 10 ÷ 4?"
  ],
  "q.wb-12.1-04.explain": "Divide both sides by 4: 4 : 10 = 1 : 2.5. So n = 2.5.",
  "q.wb-12.1-05.hints": [
   "How many parts does the original ratio have? How many does Karen's answer have?",
   "The 40 became 10 in the first pair and 5 in the second. Do those two results match?",
   "Divide all three numbers by the same largest number. What is it?"
  ],
  "q.wb-12.1-05.explain": "Karen simplified the two pairs using different divisors (4 and then 8), so the 40 became 10 in one pair and 5 in the other and they cannot be joined. She must divide ALL THREE numbers by the same HCF = 4: 12 : 40 : 8 = 3 : 10 : 2.",
  "q.wb-12.1-06.hints": [
   "The three quantities use three different units. Which common unit is convenient?",
   "Change to cm: 6 m = ? cm and 0.03 km = ? cm (1 km = 100 000 cm).",
   "Write the three numbers in cm, then divide by their HCF."
  ],
  "q.wb-12.1-06.explain": "Change to cm: 6 m = 600 cm, 0.03 km = 3000 cm, and 150 cm. The ratio 600 : 3000 : 150 divided by the HCF 150 gives 4 : 20 : 1.",
  "q.wb-12.1-07.hints": [
   "For a fair comparison, should you use the same number of seconds or the same number of words for both?",
   "Work out the words typed per second, or the seconds per word, for each person.",
   "Mia: 18 ÷ 40 = ?; Ed: 25 ÷ 60 = ?. Which is larger?"
  ],
  "q.wb-12.1-07.explain": "Mia: 18 ÷ 40 = 0.45 words per second. Ed: 25 ÷ 60 ≈ 0.417 words per second. 0.45 > 0.417 so Mia is faster. You cannot just compare the word counts (25 > 18) because the times differ.",
  "q.wb-12.1-08.hints": [
   "To compare, change all three times to one unit. Is minutes or hours easier?",
   "1¼ hours = ? minutes; 1 hour 50 minutes = ? minutes.",
   "The ratio is 40 : 75 : 110. Divide by the HCF of the three numbers."
  ],
  "q.wb-12.1-08.explain": "In minutes the times are 40, 75 and 110. The ratio 40 : 75 : 110 has HCF 5, so it simplifies to 8 : 15 : 22.",
  "q.wb-12.2-01.hints": [
   "What is the total number of parts?",
   "How many dollars is one part worth?",
   "Ali has 4 parts, so what do you multiply the value of one part by?"
  ],
  "q.wb-12.2-01.explain": "Total parts: 4 + 1 + 3 = 8. One part: 72 ÷ 8 = 9. Ali gets 4 × 9 = $36.",
  "q.wb-12.2-02.hints": [
   "Add the numbers in the ratio to find the total number of parts.",
   "Divide $90 by the total number of parts to find one part.",
   "Which number in the ratio gives the largest share?"
  ],
  "q.wb-12.2-02.explain": "1 + 3 + 5 = 9 parts. One part: 90 ÷ 9 = 10. The largest share is 5 × 10 = $50.",
  "q.wb-12.2-03.hints": [
   "What is the total number of parts in the ratio 2 : 4 : 5?",
   "What is 165 divided by the total number of parts?",
   "Harry has 4 parts: multiply the value of one part by 4."
  ],
  "q.wb-12.2-03.explain": "2 + 4 + 5 = 11 parts. One part: 165 ÷ 11 = 15. Harry pays 4 × 15 = $60. Check: 30 + 60 + 75 = 165.",
  "q.wb-12.2-04.hints": [
   "What is the total number of parts?",
   "240 ÷ total parts = the number of members in one part.",
   "Children are 11 parts: multiply."
  ],
  "q.wb-12.2-04.explain": "5 + 4 + 11 = 20 parts. One part: 240 ÷ 20 = 12 people. Children: 11 × 12 = 132.",
  "q.wb-12.2-05.hints": [
   "What do the three angles of a triangle add up to?",
   "Divide 180° by the total number of parts in the ratio.",
   "The smallest angle is 2 parts."
  ],
  "q.wb-12.2-05.explain": "2 + 3 + 4 = 9 parts. One part: 180° ÷ 9 = 20°. The smallest angle is 2 × 20° = 40°.",
  "q.wb-12.2-06.hints": [
   "Add up Sam's two shares: do they make $60?",
   "Each person gets a different number of parts. What is the total number of parts?",
   "Divide $60 by the total number of parts to get one part, then multiply by 2 and by 3."
  ],
  "q.wb-12.2-06.explain": "30 + 20 = 50 ≠ 60, so the method is wrong: Sam divided by each number separately instead of by the TOTAL number of parts. Correct: 60 ÷ 5 = 12; the shares are 2 × 12 = 24 and 3 × 12 = 36 (24 + 36 = 60).",
  "q.wb-12.2-07.hints": [
   "What is the total number of hours (parts)?",
   "How many dollars is each hour (one part) worth?",
   "Eve gets 8 parts and Gus gets 4 parts. How many parts is the difference?"
  ],
  "q.wb-12.2-07.explain": "3 + 8 + 5 + 4 = 20 hours. Each hour: 1200 ÷ 20 = $60. Eve: 8 × 60 = $480; Gus: 4 × 60 = $240. Difference: 480 − 240 = $240.",
  "q.wb-12.2-08.hints": [
   "This year: the total is 4 + 6 + 10 parts. How many oranges does the youngest get?",
   "In four years' time, what are the ages? What is the new total number of parts?",
   "Work out the youngest child's share then (it may be a decimal) and take the difference."
  ],
  "q.wb-12.2-08.explain": "This year: 4 + 6 + 10 = 20 parts, 240 ÷ 20 = 12, so the youngest gets 4 × 12 = 48. In four years: ages 8, 10, 14, total 32; 240 ÷ 32 = 7.5, so she gets 8 × 7.5 = 60. That is 60 − 48 = 12 more.",
  "q.wb-12.2-09.hints": [
   "Simplify the ratio 1200 : 1800 : 3000 to its smallest numbers.",
   "Share $5100 in that simplified ratio. How much does the person who paid most receive?",
   "The loss is the amount paid minus the amount received."
  ],
  "q.wb-12.2-09.explain": "1200 : 1800 : 3000 = 2 : 3 : 5 (10 parts). One part: 5100 ÷ 10 = 510. The person who paid $3000 receives 5 × 510 = $2550. Loss: 3000 − 2550 = $450.",
  "q.wb-12.3-01.hints": [
   "What is the total number of parts?",
   "How many of those parts are almonds?",
   "Write almond parts over total parts."
  ],
  "q.wb-12.3-01.explain": "Total parts: 2 + 3 = 5. Almonds are 3 of those parts, so the fraction is 3/5.",
  "q.wb-12.3-02.hints": [
   "What is the total number of parts?",
   "36 divided by the total number of parts gives the balls in one part.",
   "Tennis balls are 5 parts."
  ],
  "q.wb-12.3-02.explain": "5 + 4 = 9 parts. One part: 36 ÷ 9 = 4 balls. Tennis balls: 5 × 4 = 20.",
  "q.wb-12.3-03.hints": [
   "If 9 parts is the whole, how many parts are DVDs?",
   "How many parts are left for CDs?",
   "Write CDs : DVDs in the order the question asks."
  ],
  "q.wb-12.3-03.explain": "Out of 9 parts, 5 are DVDs so CDs are 9 − 5 = 4 parts. The ratio CDs : DVDs = 4 : 5.",
  "q.wb-12.3-04.hints": [
   "What is the total number of parts in the ratio 4 : 7?",
   "The total number of children must be a multiple of which number?",
   "Which choice is divisible by the total number of parts?"
  ],
  "q.wb-12.3-04.explain": "4 + 7 = 11, so the total must be a multiple of 11. Only 66 = 6 × 11 works (38, 45, 52 and 70 are not multiples of 11).",
  "q.wb-12.3-05.hints": [
   "What is the total number of parts in the ratio 7 : 6?",
   "The total is a multiple of that number. List its multiples.",
   "Which multiple lies between 30 and 40?"
  ],
  "q.wb-12.3-05.explain": "7 + 6 = 13. Multiples of 13: 13, 26, 39, 52. Only 39 lies between 30 and 40. So there are 39 adults (21 men and 18 women).",
  "q.wb-12.3-06.hints": [
   "What fraction of each drink is apple juice? Remember the total number of parts.",
   "P: 3/10; Q: 2/7. What common denominator can you use to compare them?",
   "3/10 = 21/70; 2/7 = ?/70."
  ],
  "q.wb-12.3-06.explain": "P: 10 parts in total, apple juice is 3/10 = 21/70. Q: 7 parts in total, apple juice is 2/7 = 20/70. 21/70 > 20/70 so P has the greater proportion of apple juice.",
  "q.wb-12.3-07.hints": [
   "The proportion of magazines is magazines divided by the TOTAL, not by the number of puzzle books.",
   "Li: 28/40; Su: 42/62. Write each fraction as a decimal.",
   "28 ÷ 40 = 0.7 and 42 ÷ 62 = ?"
  ],
  "q.wb-12.3-07.explain": "Li: 28/(28 + 12) = 28/40 = 0.7. Su: 42/(42 + 20) = 42/62 ≈ 0.677. 0.7 > 0.677 so Li has the greater proportion. Su has more magazines, but the question asks about the proportion.",
  "q.wb-12.3-08.hints": [
   "Change 2.7 tonnes to kilograms (1 tonne = 1000 kg).",
   "What is the total number of parts in the ratio 1 : 3 : 5?",
   "Divide the mass by the total number of parts, then multiply by the sand's parts."
  ],
  "q.wb-12.3-08.explain": "2.7 tonnes = 2700 kg. Total 1 + 3 + 5 = 9 parts. One part: 2700 ÷ 9 = 300 kg. Sand: 3 × 300 = 900 kg.",
  "q.wb-12.3-09.hints": [
   "The ? is a whole number less than 6. Try some values: the total number of parts is ? + 6.",
   "The total of 33 children must be divisible by the total number of parts. Which value of ? works?",
   "Once you know ?, how many children are in one part? How many girls is that?"
  ],
  "q.wb-12.3-09.explain": "The total number of parts is ? + 6, between 7 and 11, and it must divide 33. Only 11 works (? = 5). One part: 33 ÷ 11 = 3 children. Girls: 5 × 3 = 15."
 },
 "vi": {
    "q.wb-12.3-09.howto": "Số thứ nhất của tỉ số (ứng với số bạn nữ) bị che mất. Nhập số bạn nữ trong dàn hợp xướng.",
    "q.wb-12.3-03.howto": "Viết tỉ số theo đúng thứ tự đề hỏi: số CD trước, số DVD sau.",
    "q.wb-12.1-08.howto": "Viết ba thời gian chạy thành tỉ số theo đúng thứ tự đã cho, ở dạng tối giản. Chỉ nhập số nguyên, không ghi đơn vị.",
    "q.wb-12.1-06.howto": "Viết ba độ dài thành tỉ số theo đúng thứ tự đã cho, ở dạng tối giản. Chỉ nhập số nguyên, không ghi đơn vị.",
    "q.wb-12.1-03.howto": "Viết hai số tiền thành tỉ số ở dạng tối giản. Chỉ nhập số nguyên, không ghi đơn vị.",
  "q.wb-12.1-01.q": "Rút gọn tỉ số 18 : 45.",
  "q.wb-12.1-02.q": "Rút gọn tỉ số 14 : 21 : 35.",
  "q.wb-12.1-03.q": "Rút gọn tỉ số $1,26 : 60 xu (cent).",
  "q.wb-12.1-04.q": "Viết tỉ số 4 : 10 dưới dạng 1 : n. Giá trị của n là bao nhiêu?",
  "q.wb-12.1-05.q": "Karen rút gọn 12 : 40 : 8 như sau: '12 : 40 là 3 : 10 còn 40 : 8 là 5 : 1, nên tỉ số là 3 : 10 : 5 : 1.' Phát biểu nào giải thích đúng lỗi sai của Karen và cho đáp án đúng?",
  "q.wb-12.1-05.choices": [
   "Em phải chia cả ba số cho cùng một ƯCLN là 4 để được 3 : 10 : 2",
   "Karen đúng: tỉ số là 3 : 10 : 5 : 1",
   "Em phải cộng các số được 60, nên 12 : 40 : 8 = 1 : 1 : 1",
   "Em chỉ chia cho 2 nên được 6 : 20 : 4"
  ],
  "q.wb-12.1-06.q": "Rút gọn tỉ số 6 m : 0,03 km : 150 cm.",
  "q.wb-12.1-07.q": "Mia gõ được 18 từ trong 40 giây. Ed gõ được 25 từ trong 60 giây. Ai gõ nhanh hơn?",
  "q.wb-12.1-07.choices": [
   "Mia",
   "Ed",
   "Hai bạn gõ nhanh như nhau"
  ],
  "q.wb-12.1-08.q": "Oditi chạy 40 phút, rồi 1¼ giờ, rồi 1 giờ 50 phút. Viết tỉ số ba thời gian này ở dạng tối giản.",
  "q.wb-12.2-01.q": "Chia $72 cho Ali, Bob và Carl theo tỉ số 4 : 1 : 3. Ali nhận bao nhiêu?",
  "q.wb-12.2-02.q": "Chia $90 theo tỉ số 1 : 3 : 5. Phần lớn nhất là bao nhiêu?",
  "q.wb-12.2-03.q": "Gita, Harry và Indira chia hóa đơn tiền điện theo tỉ số 2 : 4 : 5. Hóa đơn là $165. Harry trả bao nhiêu?",
  "q.wb-12.2-04.q": "Một câu lạc bộ làm vườn có đàn ông, phụ nữ và trẻ em theo tỉ số 5 : 4 : 11. Câu lạc bộ có 240 thành viên. Có bao nhiêu trẻ em?",
  "q.wb-12.2-05.q": "Các góc của một tam giác theo tỉ số 2 : 3 : 4. Tìm số đo góc nhỏ nhất.",
  "q.wb-12.2-06.q": "Sam chia $60 theo tỉ số 2 : 3. Bạn tính 60 ÷ 2 = 30 và 60 ÷ 3 = 20, nên hai phần là $30 và $20. Cách làm của Sam sai ở đâu?",
  "q.wb-12.2-06.choices": [
   "Bạn phải chia $60 cho tổng số phần 2 + 3 = 5 trước, được $24 và $36",
   "Bạn phải chia cho 5 rồi cộng 2 và 3 vào kết quả",
   "Không sai gì, vì 30 + 20 = 50 gần bằng 60",
   "Bạn phải nhân 60 với 2 và với 3"
  ],
  "q.wb-12.2-07.q": "Dan, Eve, Fay và Gus chia $1200 thu được từ một dự án theo tỉ số số giờ làm việc: Dan 3, Eve 8, Fay 5, Gus 4. Eve nhận nhiều hơn Gus bao nhiêu?",
  "q.wb-12.2-08.q": "Mỗi năm Maya chia 240 quả cam cho các con theo tỉ số tuổi của chúng. Năm nay các con 4, 6 và 10 tuổi. Sau bốn năm nữa, đứa con nhỏ nhất nhận nhiều hơn năm nay bao nhiêu quả cam?",
  "q.wb-12.2-09.q": "Ba người bạn mua chung một chiếc thuyền, mỗi người trả $1200, $1800 và $3000. Sau đó họ bán thuyền được $5100 và chia tiền theo cùng tỉ số đã bỏ ra. Người đã trả $3000 bị lỗ bao nhiêu tiền?",
  "q.wb-12.3-01.q": "Một túi có hạt brazil và hạnh nhân theo tỉ số 2 : 3. Hạnh nhân chiếm bao nhiêu phần của số hạt? (Viết phân số.)",
  "q.wb-12.3-02.q": "Một hộp bóng có bóng tennis và bóng đá theo tỉ số 5 : 4. Hộp có 36 quả bóng. Có bao nhiêu quả bóng tennis?",
  "q.wb-12.3-03.q": "5/9 số đồ vật trong hộp là đĩa DVD, phần còn lại là đĩa CD. Viết tỉ số CD : DVD.",
  "q.wb-12.3-04.q": "Tỉ số nam : nữ trong một câu lạc bộ bơi là 4 : 7. Số nào sau đây có thể là tổng số trẻ trong câu lạc bộ?",
  "q.wb-12.3-04.choices": [
   "38",
   "45",
   "52",
   "66",
   "70"
  ],
  "q.wb-12.3-05.q": "Tỉ số đàn ông : phụ nữ trong một quán cà phê là 7 : 6. Số người lớn trong quán lớn hơn 30 nhưng nhỏ hơn 40. Có bao nhiêu người lớn trong quán?",
  "q.wb-12.3-06.q": "Đồ uống P pha nước ép táo và nước theo tỉ số 3 : 7. Đồ uống Q pha nước ép táo và nước theo tỉ số 2 : 5. Đồ uống nào có tỉ lệ nước ép táo lớn hơn?",
  "q.wb-12.3-06.choices": [
   "Đồ uống P",
   "Đồ uống Q",
   "Hai đồ uống có tỉ lệ bằng nhau"
  ],
  "q.wb-12.3-07.q": "Li có 28 tạp chí và 12 sách câu đố. Su có 42 tạp chí và 20 sách câu đố. Ai có tỉ lệ tạp chí lớn hơn?",
  "q.wb-12.3-07.choices": [
   "Li",
   "Su",
   "Hai bạn có tỉ lệ bằng nhau"
  ],
  "q.wb-12.3-08.q": "Một thợ xây trộn 2,7 tấn bê tông từ xi măng, cát và sỏi theo tỉ số 1 : 3 : 5. Anh dùng bao nhiêu kilôgam cát?",
  "q.wb-12.3-09.q": "Tỉ số nữ : nam trong một đội hợp xướng là ? : 6, và số nữ ít hơn số nam. Đội có 33 em. Có bao nhiêu em nữ?"
 }
}
});
