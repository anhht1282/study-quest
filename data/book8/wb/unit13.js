window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 13,
  pages: [159,164],
  sections: {
 "13.1": [
  {
   "id": "wb-13.1-01",
   "type": "num",
   "diff": 1,
   "skill": "prob-complement",
   "source": "wb",
   "lang": "en",
   "q": "A spinner has sectors of different colours. The probability that it lands on green is 0.15. Find the probability that it does NOT land on green.",
   "svg": null,
   "choices": null,
   "answer": 0.85,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng xác suất của tất cả kết quả có thể là bao nhiêu?",
    "'Không xanh lá' và 'xanh lá' cộng lại cho biến cố nào?",
    "Tính 1 − 0,15."
   ],
   "explain": "P(không xanh lá) = 1 − P(xanh lá) = 1 − 0,15 = 0,85.",
   "why": null
  },
  {
   "id": "wb-13.1-02",
   "type": "num",
   "diff": 1,
   "skill": "prob-complement",
   "source": "wb",
   "lang": "en",
   "q": "The probability that a train arrives early is 5% and the probability that it arrives late is 15%. What is the probability, as a percentage, that it arrives on time?",
   "svg": null,
   "choices": null,
   "answer": 80,
   "accept": [],
   "tol": 0,
   "unitLabel": "%",
   "hints": [
    "Tàu chỉ có thể đến sớm, đúng giờ hoặc muộn. Tổng xác suất là bao nhiêu phần trăm?",
    "Cộng xác suất đến sớm và đến muộn.",
    "Lấy 100% trừ tổng đó."
   ],
   "explain": "Sớm + muộn = 5% + 15% = 20%. Đúng giờ = 100% − 20% = 80%.",
   "why": null
  },
  {
   "id": "wb-13.1-03",
   "type": "text",
   "diff": 2,
   "skill": "prob-complement-frac",
   "source": "wb",
   "lang": "en",
   "q": "A biased dice has P(3) = 1/4 and P(6) = 1/8. Find the probability of getting a number that is neither 3 nor 6. (Fraction.)",
   "svg": null,
   "choices": null,
   "answer": "5/8",
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Hai biến cố 'ra 3' và 'ra 6' có thể xảy ra cùng lúc không? Vậy xác suất 'ra 3 hoặc 6' tính thế nào?",
    "Quy đồng 1/4 và 1/8 rồi cộng.",
    "Lấy 1 trừ kết quả vừa cộng."
   ],
   "explain": "P(3 hoặc 6) = 1/4 + 1/8 = 2/8 + 1/8 = 3/8. P(không phải 3 và 6) = 1 − 3/8 = 5/8.",
   "why": null
  },
  {
   "id": "wb-13.1-04",
   "type": "text",
   "diff": 2,
   "skill": "prob-table-spinner",
   "source": "wb",
   "lang": "en",
   "q": "A spinner has three equal sectors: red, yellow and green. It is spun twice. Find the probability of getting red at least once. (Fraction.)",
   "svg": null,
   "choices": null,
   "answer": "5/9",
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Có bao nhiêu kết quả đồng khả năng khi quay hai lần? Hãy vẽ bảng 3 × 3.",
    "Dễ hơn: đếm số kết quả KHÔNG có màu đỏ nào.",
    "Biến cố 'ít nhất một lần đỏ' là biến cố đối của 'không lần nào đỏ'."
   ],
   "explain": "Có 3 × 3 = 9 kết quả. Không có đỏ: 2 × 2 = 4 kết quả (vàng hoặc xanh lá ở cả hai lần). Vậy P(ít nhất một đỏ) = 1 − 4/9 = 5/9.",
   "why": null
  },
  {
   "id": "wb-13.1-05",
   "type": "text",
   "diff": 3,
   "skill": "prob-two-sets-cards",
   "source": "wb",
   "lang": "en",
   "q": "Set A has cards 1, 2, 3. Set B has cards 1, 2, 3, 4. One card is taken at random from each set and the numbers are added. Find the probability that the total is at least 6. (Fraction in simplest form.)",
   "svg": null,
   "choices": null,
   "answer": "1/4",
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Có bao nhiêu cặp (thẻ A, thẻ B)? Hãy lập bảng tổng 3 × 4.",
    "Tổng lớn nhất có thể là bao nhiêu? Những cặp nào cho tổng từ 6 trở lên?",
    "Số cặp thuận lợi chia 12 rồi rút gọn."
   ],
   "explain": "Có 3 × 4 = 12 cặp. Tổng ≥ 6: (2, 4) = 6, (3, 3) = 6, (3, 4) = 7, tức 3 cặp. P = 3/12 = 1/4.",
   "why": null
  },
  {
   "id": "wb-13.1-06",
   "type": "text",
   "diff": 3,
   "skill": "prob-product-dice",
   "source": "wb",
   "lang": "en",
   "q": "Two fair six-sided dice are thrown and the scores are multiplied. Find the probability that the product is more than 15. (Fraction.)",
   "svg": null,
   "choices": null,
   "answer": "11/36",
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Vẽ bảng 6 × 6 các tích. Có bao nhiêu ô?",
    "Liệt kê các cặp có tích lớn hơn 15. Bắt đầu từ hàng mặt 6, rồi mặt 5, mặt 4...",
    "Chú ý 4 × 4 = 16 vẫn tính, còn 3 × 5 = 15 thì không."
   ],
   "explain": "Có 36 kết quả. Tích > 15: (3,6), (4,4), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6): 11 kết quả. P = 11/36.",
   "why": null
  },
  {
   "id": "wb-13.1-07",
   "type": "mc",
   "diff": 2,
   "skill": "prob-order-matters",
   "source": "wb",
   "lang": "en",
   "q": "A spinner has three equal sectors, red, yellow and green, and is spun twice. Mia says: 'There is only one way to get a red and a yellow, so the probability is 1/9.' Which is the correct probability of getting one red and one yellow (in either order)?",
   "svg": null,
   "choices": [
    "1/9",
    "2/9",
    "1/3",
    "1/6"
   ],
   "answer": 1,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "'Đỏ rồi vàng' và 'vàng rồi đỏ' có phải cùng một kết quả không?",
    "Hãy liệt kê các cặp trong bảng 3 × 3 có một đỏ và một vàng.",
    "Số kết quả thuận lợi chia 9."
   ],
   "explain": "Mia quên thứ tự: RY và YR là hai kết quả khác nhau. Có 2 kết quả thuận lợi trong 9 kết quả, nên P = 2/9.",
   "why": null
  },
  {
   "id": "wb-13.1-08",
   "type": "text",
   "diff": 3,
   "skill": "prob-letters",
   "source": "wb",
   "lang": "en",
   "q": "One card is taken at random from the word CUBE and one card from the word SQUARE (each letter is on its own card). Find the probability that both cards show the same letter. (Fraction in simplest form.)",
   "svg": null,
   "choices": null,
   "answer": "1/12",
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Có bao nhiêu cặp thẻ (thẻ từ CUBE, thẻ từ SQUARE)?",
    "Hai từ có những chữ cái nào giống nhau?",
    "Số cặp giống nhau chia tổng số cặp, rồi rút gọn."
   ],
   "explain": "Có 4 × 6 = 24 cặp. Chữ giống nhau: U và E, tức 2 cặp. P = 2/24 = 1/12.",
   "why": null
  },
  {
   "id": "wb-13.1-09",
   "type": "text",
   "diff": 3,
   "skill": "prob-difference-dice",
   "source": "wb",
   "lang": "en",
   "q": "Two fair six-sided dice are thrown and the smaller number is subtracted from the larger. Find the probability that the difference is 3 or more. (Fraction in simplest form.)",
   "svg": null,
   "choices": null,
   "answer": "1/3",
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Vẽ bảng 6 × 6 các hiệu (số lớn − số nhỏ).",
    "Đếm số ô có hiệu 3, rồi hiệu 4, rồi hiệu 5.",
    "Cộng các số ô rồi chia 36 và rút gọn."
   ],
   "explain": "Hiệu 3: 6 ô; hiệu 4: 4 ô; hiệu 5: 2 ô; tổng 12 ô. P = 12/36 = 1/3.",
   "why": null
  }
 ],
 "13.2": [
  {
   "id": "wb-13.2-01",
   "type": "num",
   "diff": 1,
   "skill": "exp-prob",
   "source": "wb",
   "lang": "en",
   "q": "Arun makes a six-sided cardboard dice. He throws it 80 times: orange 34 times, pink 28 times and white 18 times. Find the experimental probability of pink. (Decimal.)",
   "svg": null,
   "choices": null,
   "answer": 0.35,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Xác suất thực nghiệm là gì chia cho gì?",
    "Màu hồng xuất hiện bao nhiêu lần trong tổng số lần gieo?",
    "Tính 28 ÷ 80."
   ],
   "explain": "Xác suất thực nghiệm = số lần xuất hiện ÷ tổng số lần thử = 28 ÷ 80 = 0,35.",
   "why": null
  },
  {
   "id": "wb-13.2-02",
   "type": "num",
   "diff": 1,
   "skill": "theory-frequency",
   "source": "wb",
   "lang": "en",
   "q": "Arun's dice has three faces coloured orange, two pink and one white. If he throws it 80 times, how many times would you expect orange (theoretical frequency)?",
   "svg": null,
   "choices": null,
   "answer": 40,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Xác suất lý thuyết ra màu cam là bao nhiêu (số mặt cam trên tổng số mặt)?",
    "Tần số kỳ vọng bằng xác suất nhân với số lần gieo.",
    "Tính 1/2 × 80."
   ],
   "explain": "P(cam) = 3/6 = 1/2. Số lần kỳ vọng = 1/2 × 80 = 40.",
   "why": null
  },
  {
   "id": "wb-13.2-03",
   "type": "num",
   "diff": 2,
   "skill": "exp-prob-compound",
   "source": "wb",
   "lang": "en",
   "q": "A spinner has five equal sectors numbered 1 to 5. In 400 spins the scores were: 1: 78 times, 2: 85 times, 3: 82 times, 4: 79 times, 5: 76 times. Find the experimental probability of getting an odd number. (Decimal.)",
   "svg": null,
   "choices": null,
   "answer": 0.59,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Những điểm nào là số lẻ?",
    "Cộng các tần số của các điểm lẻ.",
    "Chia tổng đó cho 400."
   ],
   "explain": "Số lẻ: 1, 3, 5 có 78 + 82 + 76 = 236 lần. Xác suất thực nghiệm = 236 ÷ 400 = 0,59.",
   "why": null
  },
  {
   "id": "wb-13.2-04",
   "type": "num",
   "diff": 2,
   "skill": "theory-frequency",
   "source": "wb",
   "lang": "en",
   "q": "Three fair coins are thrown 800 times. The theoretical probability of getting 3 heads is 1/8. How many times would you expect 3 heads?",
   "svg": null,
   "choices": null,
   "answer": 100,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tần số kỳ vọng là xác suất nhân với đại lượng nào?",
    "Em cần tính một phần tám của 800.",
    "800 ÷ 8 = ?"
   ],
   "explain": "Kỳ vọng = 1/8 × 800 = 100 lần.",
   "why": null
  },
  {
   "id": "wb-13.2-05",
   "type": "num",
   "diff": 2,
   "skill": "exp-prob-missing",
   "source": "wb",
   "lang": "en",
   "q": "A dice is thrown 200 times. The scores 1, 2 and 3 occur 48, 52 and 45 times. The score 4 is the only other score recorded. Find the experimental probability of a 4. (Decimal.)",
   "svg": null,
   "choices": null,
   "answer": 0.275,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng tất cả các tần số phải bằng bao nhiêu?",
    "Cộng tần số của 1, 2 và 3 rồi tìm tần số còn lại của 4.",
    "Chia tần số của 4 cho 200."
   ],
   "explain": "48 + 52 + 45 = 145, nên điểm 4 xuất hiện 200 − 145 = 55 lần. Xác suất thực nghiệm = 55 ÷ 200 = 0,275.",
   "why": null
  },
  {
   "id": "wb-13.2-06",
   "type": "num",
   "diff": 2,
   "skill": "theory-frequency",
   "source": "wb",
   "lang": "en",
   "q": "A fair spinner has 8 equal sectors numbered 1 to 8 and is spun 400 times. How many times would you expect to land on a prime number?",
   "svg": null,
   "choices": null,
   "answer": 200,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Những số nào trong 1 đến 8 là số nguyên tố? Chú ý số 1 có phải số nguyên tố không.",
    "Xác suất ra số nguyên tố là bao nhiêu?",
    "Nhân xác suất đó với 400."
   ],
   "explain": "Số nguyên tố: 2, 3, 5, 7 (4 số). P = 4/8 = 1/2. Kỳ vọng = 1/2 × 400 = 200 lần.",
   "why": null
  },
  {
   "id": "wb-13.2-07",
   "type": "num",
   "diff": 3,
   "skill": "combine-trials",
   "source": "wb",
   "lang": "en",
   "q": "Two sets of results from throwing three coins 500 times each show the number of times exactly 2 heads came up: 195 times in the first set and 180 times in the second set. Find the experimental probability of 2 heads using both sets together. (Decimal.)",
   "svg": null,
   "choices": null,
   "answer": 0.375,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Khi gộp hai bộ, tổng số lần thử là bao nhiêu?",
    "Tổng số lần ra đúng 2 mặt ngửa là bao nhiêu?",
    "Chia tổng số lần ra 2 mặt ngửa cho tổng số lần thử."
   ],
   "explain": "Tổng số lần thử: 500 + 500 = 1000. Tổng số lần ra 2 mặt ngửa: 195 + 180 = 375. Xác suất thực nghiệm = 375 ÷ 1000 = 0,375 (đúng bằng xác suất lý thuyết 3/8).",
   "why": null
  },
  {
   "id": "wb-13.2-08", "howto": "The dice has 10 faces altogether. Use all 900 results to estimate how many of these faces are black, and enter that whole number.",
   "type": "num",
   "diff": 3,
   "skill": "conjecture-faces",
   "source": "wb",
   "lang": "en",
   "q": "A 10-faced dice has faces coloured green, gold or black. In 300 throws it landed on green 92 times, gold 154 times and black 54 times. In another 600 throws it landed on green 181 times, gold 309 times and black 110 times. Using all 900 throws, estimate the number of black faces on the dice (round to a whole number).",
   "svg": null,
   "choices": null,
   "answer": 2,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Cộng các lần ra màu đen của hai bộ kết quả, và dùng tổng 900 lần gieo.",
    "Xác suất thực nghiệm của màu đen là bao nhiêu (số thập phân)?",
    "Số mặt màu đen ≈ xác suất × 10 (tổng số mặt). Làm tròn."
   ],
   "explain": "Đen: 54 + 110 = 164 lần trong 900 lần. 164 ÷ 900 ≈ 0,182. Số mặt đen ≈ 0,182 × 10 ≈ 1,8 nên làm tròn là 2 mặt.",
   "why": null
  },
  {
   "id": "wb-13.2-09",
   "type": "mc",
   "diff": 3,
   "skill": "exp-vs-theory",
   "source": "wb",
   "lang": "en",
   "q": "Zara throws a fair dice 60 times and gets a six 13 times. She would expect 10 sixes. Which statement is best?",
   "svg": null,
   "choices": [
    "The dice is definitely biased because 13 is not 10",
    "Small differences between experimental and theoretical results are normal, so the dice may still be fair",
    "Zara must have miscounted, because experimental results always equal theoretical results",
    "The probability of a six is now 13/60 for every future throw"
   ],
   "answer": 1,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Nếu em gieo xúc xắc 60 lần, kết quả có thể chính xác bằng 10 mặt sáu luôn không?",
    "13 lệch 10 một lượng lớn hay nhỏ so với 60 lần gieo?",
    "Muốn kết luận xúc xắc không cân đối cần thêm gì: ít hay nhiều lần gieo hơn?"
   ],
   "explain": "Kết quả thực nghiệm dao động quanh giá trị lý thuyết; 13 so với 10 trong 60 lần gieo là chênh lệch bình thường. Cần nhiều lần gieo hơn mới kết luận được xúc xắc có lệch hay không. Xác suất lý thuyết của mặt sáu vẫn là 1/6.",
   "why": null
  }
 ]
},
  tr: {
 "en": {
  "q.wb-13.1-01.hints": [
   "What do the probabilities of all possible outcomes add up to?",
   "'Not green' and 'green' together make which event?",
   "Work out 1 − 0.15."
  ],
  "q.wb-13.1-01.explain": "P(not green) = 1 − P(green) = 1 − 0.15 = 0.85.",
  "q.wb-13.1-02.hints": [
   "A train can only arrive early, on time or late. What do the probabilities total as a percentage?",
   "Add the probabilities of early and late.",
   "Subtract that total from 100%."
  ],
  "q.wb-13.1-02.explain": "Early + late = 5% + 15% = 20%. On time = 100% − 20% = 80%.",
  "q.wb-13.1-03.hints": [
   "Can 'throw a 3' and 'throw a 6' happen together? So how do you find the probability of '3 or 6'?",
   "Write 1/4 and 1/8 with a common denominator and add.",
   "Subtract your sum from 1."
  ],
  "q.wb-13.1-03.explain": "P(3 or 6) = 1/4 + 1/8 = 2/8 + 1/8 = 3/8. P(neither) = 1 − 3/8 = 5/8.",
  "q.wb-13.1-04.hints": [
   "How many equally likely outcomes are there for two spins? Draw a 3 × 3 table.",
   "It is easier to count the outcomes with NO red at all.",
   "'At least one red' is the complement of 'no red'."
  ],
  "q.wb-13.1-04.explain": "There are 3 × 3 = 9 outcomes. No red: 2 × 2 = 4 outcomes (yellow or green on both spins). So P(at least one red) = 1 − 4/9 = 5/9.",
  "q.wb-13.1-05.hints": [
   "How many (A card, B card) pairs are there? Draw a 3 × 4 table of totals.",
   "What is the largest possible total? Which pairs give 6 or more?",
   "Favourable pairs divided by 12, then simplify."
  ],
  "q.wb-13.1-05.explain": "There are 3 × 4 = 12 pairs. Totals of 6 or more: (2, 4) = 6, (3, 3) = 6, (3, 4) = 7, which is 3 pairs. P = 3/12 = 1/4.",
  "q.wb-13.1-06.hints": [
   "Draw a 6 × 6 table of products. How many cells are there?",
   "List the pairs with product above 15. Start with a 6, then a 5, then a 4 ...",
   "Note that 4 × 4 = 16 counts, but 3 × 5 = 15 does not."
  ],
  "q.wb-13.1-06.explain": "There are 36 outcomes. Products over 15: (3,6), (4,4), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6): 11 outcomes. P = 11/36.",
  "q.wb-13.1-07.hints": [
   "Are 'red then yellow' and 'yellow then red' the same outcome?",
   "List the pairs in the 3 × 3 table that have one red and one yellow.",
   "Favourable outcomes divided by 9."
  ],
  "q.wb-13.1-07.explain": "Mia forgot about order: RY and YR are two different outcomes. There are 2 favourable outcomes out of 9, so P = 2/9.",
  "q.wb-13.1-08.hints": [
   "How many pairs of cards (one from CUBE, one from SQUARE) are there?",
   "Which letters appear in both words?",
   "Matching pairs divided by total pairs, then simplify."
  ],
  "q.wb-13.1-08.explain": "There are 4 × 6 = 24 pairs. Letters in both words: U and E, which is 2 pairs. P = 2/24 = 1/12.",
  "q.wb-13.1-09.hints": [
   "Draw a 6 × 6 table of differences (larger − smaller).",
   "Count the cells with difference 3, then 4, then 5.",
   "Add the counts, divide by 36 and simplify."
  ],
  "q.wb-13.1-09.explain": "Difference 3: 6 cells; difference 4: 4 cells; difference 5: 2 cells; total 12 cells. P = 12/36 = 1/3.",
  "q.wb-13.2-01.hints": [
   "Experimental probability is what divided by what?",
   "How many times did pink come up out of the total number of throws?",
   "Work out 28 ÷ 80."
  ],
  "q.wb-13.2-01.explain": "Experimental probability = number of times ÷ total number of trials = 28 ÷ 80 = 0.35.",
  "q.wb-13.2-02.hints": [
   "What is the theoretical probability of orange (orange faces out of all faces)?",
   "Expected frequency is probability multiplied by the number of throws.",
   "Work out 1/2 × 80."
  ],
  "q.wb-13.2-02.explain": "P(orange) = 3/6 = 1/2. Expected number of times = 1/2 × 80 = 40.",
  "q.wb-13.2-03.hints": [
   "Which scores are odd numbers?",
   "Add the frequencies of the odd scores.",
   "Divide that total by 400."
  ],
  "q.wb-13.2-03.explain": "Odd scores 1, 3, 5 occurred 78 + 82 + 76 = 236 times. Experimental probability = 236 ÷ 400 = 0.59.",
  "q.wb-13.2-04.hints": [
   "Expected frequency is probability multiplied by what?",
   "You need one eighth of 800.",
   "800 ÷ 8 = ?"
  ],
  "q.wb-13.2-04.explain": "Expected = 1/8 × 800 = 100 times.",
  "q.wb-13.2-05.hints": [
   "What must all the frequencies add up to?",
   "Add the frequencies of 1, 2 and 3 to find what is left for 4.",
   "Divide the frequency of 4 by 200."
  ],
  "q.wb-13.2-05.explain": "48 + 52 + 45 = 145, so a 4 occurred 200 − 145 = 55 times. Experimental probability = 55 ÷ 200 = 0.275.",
  "q.wb-13.2-06.hints": [
   "Which of the numbers 1 to 8 are prime? Is 1 a prime number?",
   "What is the probability of landing on a prime?",
   "Multiply that probability by 400."
  ],
  "q.wb-13.2-06.explain": "Primes: 2, 3, 5, 7 (4 numbers). P = 4/8 = 1/2. Expected = 1/2 × 400 = 200 times.",
  "q.wb-13.2-07.hints": [
   "When you combine the two sets, what is the total number of trials?",
   "How many times in total did exactly 2 heads occur?",
   "Divide the total number of 2-head results by the total number of trials."
  ],
  "q.wb-13.2-07.explain": "Total trials: 500 + 500 = 1000. Total 2-head results: 195 + 180 = 375. Experimental probability = 375 ÷ 1000 = 0.375 (exactly the theoretical value 3/8).",
  "q.wb-13.2-08.hints": [
   "Add the black results from the two sets and use the total of 900 throws.",
   "What is the experimental probability of black (as a decimal)?",
   "Number of black faces ≈ probability × 10 (the total number of faces). Round it."
  ],
  "q.wb-13.2-08.explain": "Black: 54 + 110 = 164 times in 900 throws. 164 ÷ 900 ≈ 0.182. Black faces ≈ 0.182 × 10 ≈ 1.8, which rounds to 2 faces.",
  "q.wb-13.2-09.hints": [
   "If you throw a dice 60 times, will you always get exactly 10 sixes?",
   "Is the gap between 13 and 10 big or small compared with 60 throws?",
   "To decide whether a dice is biased would you need fewer or more throws?"
  ],
  "q.wb-13.2-09.explain": "Experimental results vary around the theoretical value; 13 compared with 10 in 60 throws is a normal difference. You would need many more throws to decide whether the dice is biased. The theoretical probability of a six is still 1/6."
 },
 "vi": {
    "q.wb-13.2-08.howto": "Xúc xắc có tất cả 10 mặt. Dùng cả 900 kết quả để ước lượng có bao nhiêu mặt màu đen, rồi nhập số nguyên đó.",
  "q.wb-13.1-01.q": "Một vòng quay có nhiều ô màu khác nhau. Xác suất vòng quay dừng ở màu xanh lá là 0,15. Tìm xác suất vòng quay KHÔNG dừng ở màu xanh lá.",
  "q.wb-13.1-02.q": "Xác suất tàu đến sớm là 5% và xác suất tàu đến muộn là 15%. Xác suất tàu đến đúng giờ là bao nhiêu phần trăm?",
  "q.wb-13.1-03.q": "Một con xúc xắc không cân đối có P(3) = 1/4 và P(6) = 1/8. Tìm xác suất ra một số không phải 3 và cũng không phải 6. (Phân số.)",
  "q.wb-13.1-04.q": "Một vòng quay có ba ô bằng nhau: đỏ, vàng và xanh lá. Vòng quay được quay hai lần. Tìm xác suất ra màu đỏ ít nhất một lần. (Phân số.)",
  "q.wb-13.1-05.q": "Bộ A có các thẻ 1, 2, 3. Bộ B có các thẻ 1, 2, 3, 4. Rút ngẫu nhiên một thẻ từ mỗi bộ rồi cộng hai số. Tìm xác suất để tổng ít nhất bằng 6. (Phân số tối giản.)",
  "q.wb-13.1-06.q": "Gieo hai con xúc xắc sáu mặt cân đối và nhân hai số chấm. Tìm xác suất để tích lớn hơn 15. (Phân số.)",
  "q.wb-13.1-07.q": "Một vòng quay có ba ô bằng nhau, đỏ, vàng và xanh lá, và được quay hai lần. Mia nói: 'Chỉ có một cách để được một đỏ và một vàng, nên xác suất là 1/9.' Xác suất đúng để được một đỏ và một vàng (theo thứ tự nào cũng được) là bao nhiêu?",
  "q.wb-13.1-07.choices": [
   "1/9",
   "2/9",
   "1/3",
   "1/6"
  ],
  "q.wb-13.1-08.q": "Rút ngẫu nhiên một thẻ từ từ CUBE và một thẻ từ từ SQUARE (mỗi chữ cái nằm trên một thẻ riêng). Tìm xác suất để hai thẻ cùng một chữ cái. (Phân số tối giản.)",
  "q.wb-13.1-09.q": "Gieo hai con xúc xắc sáu mặt cân đối rồi lấy số lớn trừ số nhỏ. Tìm xác suất để hiệu bằng 3 trở lên. (Phân số tối giản.)",
  "q.wb-13.2-01.q": "Arun làm một con xúc xắc sáu mặt bằng bìa. Bạn gieo 80 lần: màu cam 34 lần, màu hồng 28 lần và màu trắng 18 lần. Tìm xác suất thực nghiệm của màu hồng. (Số thập phân.)",
  "q.wb-13.2-02.q": "Con xúc xắc của Arun có ba mặt màu cam, hai mặt màu hồng và một mặt màu trắng. Nếu bạn gieo 80 lần thì kỳ vọng ra màu cam bao nhiêu lần (tần số lý thuyết)?",
  "q.wb-13.2-03.q": "Một vòng quay có năm ô bằng nhau đánh số 1 đến 5. Trong 400 lần quay, các điểm là: 1: 78 lần, 2: 85 lần, 3: 82 lần, 4: 79 lần, 5: 76 lần. Tìm xác suất thực nghiệm của việc ra số lẻ. (Số thập phân.)",
  "q.wb-13.2-04.q": "Ba đồng xu cân đối được tung 800 lần. Xác suất lý thuyết ra 3 mặt ngửa là 1/8. Kỳ vọng ra 3 mặt ngửa bao nhiêu lần?",
  "q.wb-13.2-05.q": "Một con xúc xắc được gieo 200 lần. Các điểm 1, 2 và 3 xuất hiện lần lượt 48, 52 và 45 lần. Điểm 4 là điểm duy nhất còn lại. Tìm xác suất thực nghiệm của điểm 4. (Số thập phân.)",
  "q.wb-13.2-06.q": "Một vòng quay cân đối có 8 ô bằng nhau đánh số 1 đến 8 và được quay 400 lần. Kỳ vọng vòng quay dừng ở một số nguyên tố bao nhiêu lần?",
  "q.wb-13.2-07.q": "Hai bộ kết quả từ việc tung ba đồng xu, mỗi bộ 500 lần, cho số lần ra đúng 2 mặt ngửa: 195 lần ở bộ thứ nhất và 180 lần ở bộ thứ hai. Tìm xác suất thực nghiệm của 2 mặt ngửa khi gộp cả hai bộ. (Số thập phân.)",
  "q.wb-13.2-08.q": "Một con xúc xắc 10 mặt có các mặt tô màu xanh lá, vàng hoặc đen. Trong 300 lần gieo nó ra xanh lá 92 lần, vàng 154 lần và đen 54 lần. Trong 600 lần gieo khác nó ra xanh lá 181 lần, vàng 309 lần và đen 110 lần. Dựa vào cả 900 lần gieo, hãy ước lượng số mặt màu đen của con xúc xắc (làm tròn thành số nguyên).",
  "q.wb-13.2-09.q": "Zara gieo một con xúc xắc cân đối 60 lần và được 13 lần mặt sáu. Bạn kỳ vọng được 10 lần mặt sáu. Phát biểu nào đúng nhất?",
  "q.wb-13.2-09.choices": [
   "Con xúc xắc chắc chắn không cân đối vì 13 khác 10",
   "Chênh lệch nhỏ giữa kết quả thực nghiệm và lý thuyết là bình thường, nên con xúc xắc vẫn có thể cân đối",
   "Zara chắc chắn đếm sai vì kết quả thực nghiệm luôn bằng kết quả lý thuyết",
   "Xác suất ra mặt sáu từ nay là 13/60 cho mọi lần gieo sau"
  ]
 }
}
});
