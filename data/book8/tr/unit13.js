window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 13,
  en: {
    "u.realm": "The Mystery Dice Cave",
    "u.story": "In the mysterious cave, glowing dice, ancient coins and magic spinners decide who gets to open the treasure door. To win, you must work out the chance of each outcome and check whether an experiment matches the theory. The king of the cave once chose a winner with nothing more than a game of rock-paper-scissors!",
    "g.0.def": "A number from 0 to 1 that measures how likely an event is to happen.",
    "g.1.def": "One possible result of an experiment, for example a 4 when you roll a dice.",
    "g.2.def": "Outcomes that have the same chance of happening.",
    "g.3.def": "Event A' happens when A does not happen; P(A') = 1 − P(A).",
    "g.4.def": "A dice or coin where every face is equally likely.",
    "g.5.def": "A table or diagram that lists all the possible outcomes.",
    "g.6.def": "The number of times an event happens divided by the total number of trials in an experiment.",
    "g.7.def": "Calculated from equally likely outcomes: number of successful outcomes / total number of outcomes.",
    "s.13.1.learn": [
      "The probability of an event is between 0 (impossible) and 1 (certain); the probabilities of all outcomes add up to 1.",
      "The complement A' means 'A does not happen': P(A') = 1 − P(A). For example P(not red) = 1 − P(red).",
      "For equally likely outcomes: P = number of successful outcomes / total number of outcomes.",
      "List outcomes systematically: two dice give a 6 × 6 table of 36 outcomes; a coin and a dice give 2 × 6 = 12; three coins give 8 outcomes (draw a tree diagram).",
      "Be careful: HT and TH are two different outcomes, so two coins have 4 equally likely outcomes, not 3."
    ],
    "ex.13.1.q": "Two fair dice are thrown. Find the probability that the sum of the two scores is less than or equal to 4.",
    "ex.13.1.steps": [
      "There are 6 × 6 = 36 equally likely outcomes.",
      "Sum 2: (1,1); sum 3: (1,2), (2,1); sum 4: (1,3), (2,2), (3,1), making 6 outcomes.",
      "Probability = 6/36 = 1/6. The complement (sum greater than 4) has probability 1 − 1/6 = 5/6."
    ],
    "ex.13.1.prompts": [
      "How many outcomes are there when two dice are thrown? Why do we multiply?",
      "List the pairs with sum 2, 3 and then 4. How many pairs does each sum have? Do not forget the order of the two dice.",
      "Probability is the number of successful outcomes divided by the total number of outcomes; write it in simplest form. How is the event 'sum greater than 4' related?"
    ],
    "ex.13.1.twist": "What would the probability be if it were changed to 'sum less than or equal to 5'?",
    "s.13.2.learn": [
      "Experimental probability = number of times the event happens / total number of trials, worked out from the results of an experiment.",
      "Theoretical probability is based on equally likely outcomes, for example P(1 on a fair dice) = 1/6.",
      "Expected number of times = theoretical probability × number of trials (for example, if you throw 600 times you expect a 6 about 100 times).",
      "The more trials you do, the closer the experimental probability gets to the theoretical probability; with only a few trials it can be very different.",
      "If the experimental results are very far from the theory, the dice/coin may be biased or the data may be unreliable."
    ],
    "ex.13.2.q": "Two fair coins are thrown 50 times: HH 17 times, TT 14 times, one head and one tail 19 times. By how much is the experimental probability of HH greater than the theoretical probability?",
    "ex.13.2.steps": [
      "Experimental: 17/50 = 0.34.",
      "Theoretical: there are 4 equally likely outcomes, so P(HH) = 1/4 = 0.25.",
      "The difference is 0.09 because the coins were only thrown 50 times; with more throws the two numbers will be closer together."
    ],
    "ex.13.2.prompts": [
      "Experimental probability is the number of times HH happens divided by the total number of throws. With 17 out of 50, what is this ratio?",
      "Throw two coins and list all the equally likely outcomes. What fraction of them is HH?",
      "How different are the two numbers? What do you think stops them from matching, and what happens if you throw many more times?"
    ],
    "ex.13.2.twist": "If the coins were thrown 2000 times, about how many times would you expect HH to appear in theory?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Throw dice, draw cards and work out complementary events in the style of Vietnamese Grade 7–8 tests. Are you ready?",
    "q.13.1-01.hints": [
      "Win, draw and lose are three mutually exclusive outcomes. What do their probabilities add up to?",
      "What is the probability of winning or drawing (0.3 + 0.1)?",
      "Probability of losing = 1 minus the result you just found."
    ],
    "q.13.1-01.explain": "P(win or draw) = 0.3 + 0.1 = 0.4. P(lose) = 1 − 0.4 = 0.6.",
    "q.13.1-02.hints": [
      "How many outcomes are there in total when two dice are thrown? (6 × 6)",
      "Which outcomes have the same number on both dice: (1,1), (2,2), …? How many are there?",
      "Write the fraction number of successful outcomes / 36 and then simplify."
    ],
    "q.13.1-02.explain": "There are 36 outcomes, of which 6 have the same number on both dice. Probability 6/36 = 1/6.",
    "q.13.1-03.hints": [
      "List the pairs (dice 1, dice 2) with sum 6, starting from (1, 5).",
      "How many such pairs are there? Note that (1,5) and (5,1) are different outcomes.",
      "Divide the number of pairs by 36."
    ],
    "q.13.1-03.explain": "The pairs: (1,5), (2,4), (3,3), (4,2), (5,1) are 5 pairs. Probability 5/36.",
    "q.13.1-04.hints": [
      "Count the pairs with sum 9, then sum 10, 11, 12.",
      "Sum 9 has 4 pairs, 10 has 3, 11 has 2, 12 has 1. Add them up.",
      "Divide by 36 and simplify."
    ],
    "q.13.1-04.explain": "4 + 3 + 2 + 1 = 10 pairs so the probability is 10/36 = 5/18.",
    "q.13.1-05.hints": [
      "What is the probability that one particular dice does not show a 5?",
      "Count the outcomes (a, b) where both a and b are not 5. How many choices does each dice have?",
      "What is the number of successful outcomes divided by 36?"
    ],
    "q.13.1-05.explain": "Each dice has 5 faces that are not 5, so there are 5 × 5 = 25 successful outcomes, probability 25/36. Errors: 35/36 (thinking only the single pair (5,5) is excluded); 26/36 (removing the 10 pairs with at least one 5 but missing the pair (5,5); in fact 11 pairs are excluded).",
    "q.13.1-06.hints": [
      "The sum can be from 2 to 12. Which of these numbers are prime?",
      "Count the pairs for each prime sum: 2, 3, 5, 7, 11.",
      "Add the number of pairs, then divide by 36 and simplify."
    ],
    "q.13.1-06.explain": "Prime sums: 2 (1 pair), 3 (2), 5 (4), 7 (6), 11 (2) add up to 15 pairs. Probability 15/36 = 5/12.",
    "q.13.1-07.hints": [
      "How many outcomes are there when a coin and a dice are thrown? (2 × 6)",
      "The successful outcomes: H2, H4, H6. How many outcomes is that?",
      "Divide, then simplify."
    ],
    "q.13.1-07.explain": "There are 12 equally likely outcomes, 3 successful outcomes (H2, H4, H6). Probability 3/12 = 1/4.",
    "q.13.1-08.hints": [
      "Draw a tree diagram or list: HHH, HHT, … How many outcomes are there in total?",
      "How many of them have exactly 2 H and 1 T? (HHT, …)",
      "Write the number of successful outcomes over the total number of outcomes."
    ],
    "q.13.1-08.explain": "There are 2 × 2 × 2 = 8 outcomes. Exactly two heads: HHT, HTH, THH, which is 3 outcomes. Probability 3/8.",
    "q.13.1-09.hints": [
      "List all the 3-digit numbers that can be made: 245, 254, … How many numbers are there?",
      "For a number to be more than 400, what must the hundreds digit be?",
      "Count the numbers with hundreds digit 4 or 5 and divide by the total."
    ],
    "q.13.1-09.explain": "There are 3 × 2 × 1 = 6 numbers: 245, 254, 425, 452, 524, 542. Numbers more than 400: 425, 452, 524, 542 are 4 numbers. Probability 4/6 = 2/3.",
    "q.13.1-10.hints": [
      "The two coins are separate: is 'first coin head, second coin tail' different from 'first coin tail, second coin head'?",
      "List all the outcomes in full, telling the first and second coin apart.",
      "Are the outcomes you listed equally likely? What is P(HH)?"
    ],
    "q.13.1-10.explain": "HT and TH are different outcomes, so there are 4 equally likely outcomes: HH, HT, TH, TT. P(2 heads) = 1/4. Arun's three 'outcomes' are not equally likely: 'one head and one tail' makes up 2 of the 4 outcomes.",
    "q.13.2-01.hints": [
      "Experimental probability = number of times it happens / total number of trials.",
      "How many times did a 4 come up, and what is the total number of throws?",
      "Write the fraction 33/200 (or the matching decimal)."
    ],
    "q.13.2-01.explain": "The experimental probability of a 4 is 33/200 = 0.165.",
    "q.13.2-02.hints": [
      "List the equally likely outcomes when two coins are thrown.",
      "How many outcomes give one head and one tail? (HT and TH)",
      "Divide the number of successful outcomes by the total number of outcomes, then simplify."
    ],
    "q.13.2-02.explain": "There are 4 outcomes: HH, HT, TH, TT. One head and one tail has 2 outcomes so the theoretical probability is 2/4 = 1/2.",
    "q.13.2-03.hints": [
      "Expected number of times = probability × number of spins.",
      "Work out 0.6 × 800.",
      "Is the answer reasonable (more than half of the spins)?"
    ],
    "q.13.2-03.explain": "Expected number of times it lands on red = 0.6 × 800 = 480 times.",
    "q.13.2-04.hints": [
      "What is the total number of spins?",
      "How many times did white come up?",
      "Divide 218 by 800."
    ],
    "q.13.2-04.explain": "Experimental probability of white = 218/800 = 0.2725 (about 0.3, close to the theoretical probability).",
    "q.13.2-05.hints": [
      "Is the experimental probability 7/10 certain to equal the theoretical probability 1/2?",
      "What happens to the experimental probability when the number of trials is very large?",
      "Does each throw 'remember' the previous result in order to make up for it?"
    ],
    "q.13.2-05.explain": "With only 10 trials, the result can be quite different from the theory. To decide whether the coin is biased you need many more throws. Errors: thinking the next throw must be a tail to 'balance out', or jumping to the conclusion that the coin is biased.",
    "q.13.2-06.hints": [
      "Count how many times the digit 3 appears among the 20 digits.",
      "What is the total number of digits?",
      "Divide the number of times it appears by 20."
    ],
    "q.13.2-06.explain": "The digit 3 appears 3 times in the 20 digits. Experimental probability = 3/20 = 0.15 (theoretical is 1/10 = 0.1).",
    "q.13.2-07.hints": [
      "Add up the number of times 'at least one 6' happened for all four learners.",
      "Add up the total number of throws of all four learners.",
      "Divide one total by the other."
    ],
    "q.13.2-07.explain": "Number of times with at least one 6: 7 + 9 + 31 + 36 = 83. Total number of throws: 10 + 20 + 40 + 50 = 120. Experimental probability = 83/120 ≈ 0.692.",
    "q.13.2-08.hints": [
      "Work out the expected numbers for HH, TT and 'one of each' in 100 throws (probabilities 1/4, 1/4, 1/2).",
      "Which results are closest to 25, 25, 50?",
      "Does the result 33, 33, 34 reflect the belief that there are 3 equally likely outcomes?"
    ],
    "q.13.2-08.explain": "Expected: HH 25, TT 25, one of each 50. The set 24, 26, 50 is very close. The set 33, 33, 34 is a sign of the error of thinking there are 3 equally likely outcomes; 5, 5, 90 and 0, 0, 100 are too far off.",
    "q.13.2-09.hints": [
      "Work out the experimental probability of red: 14/40.",
      "If the probability of red is 14/40, about how many of the 100 counters are red?",
      "Work out 14/40 × 100."
    ],
    "q.13.2-09.explain": "Experimental probability of red = 14/40 = 0.35. Estimated number of red counters = 0.35 × 100 = 35.",
    "q.13.2-10.hints": [
      "Work out the experimental probability 333/500 as a decimal.",
      "Subtract: theoretical minus experimental.",
      "What does a very small result tell you about how reliable the experiment is when the number of trials is large?"
    ],
    "q.13.2-10.explain": "333/500 = 0.666. Difference 0.666 − 0.6651 = 0.0009. The number of trials is large (500), so the experimental probability is almost the same as the theoretical probability.",
    "q.ch-01.q": "Two fair dice are thrown at the same time. Find the probability that the sum of the two scores is 10 or more (give a fraction in simplest form).",
    "q.ch-01.hints": [
      "List the pairs with sum 10, 11, 12.",
      "How many pairs are there altogether (3 + 2 + 1)?",
      "Divide by 36 and simplify."
    ],
    "q.ch-01.explain": "Sum 10: 3 pairs, sum 11: 2 pairs, sum 12: 1 pair, making 6 pairs. Probability 6/36 = 1/6.",
    "q.ch-02.q": "Two fair dice are thrown. Find the probability that the product of the two scores is even (fraction in simplest form).",
    "q.ch-02.hints": [
      "When is the product of two numbers odd?",
      "Work out the probability that both scores are odd, then use the complement.",
      "P(product even) = 1 − P(product odd)."
    ],
    "q.ch-02.explain": "The product is odd when both scores are odd: 3 × 3 = 9 pairs, probability 9/36 = 1/4. So P(product even) = 1 − 1/4 = 3/4.",
    "q.ch-03.q": "A box has 5 cards numbered 1, 2, 3, 4, 5. Two cards are drawn at random at the same time. Find the probability that the sum of the two numbers on the cards is even (fraction in simplest form).",
    "q.ch-03.hints": [
      "In how many ways can 2 cards be chosen from 5 (order does not matter)? List them.",
      "The sum is even when both numbers are even or both are odd. Count each case.",
      "Add the two cases and divide by the total number of ways to choose."
    ],
    "q.ch-03.explain": "There are 10 pairs. Both odd: (1,3), (1,5), (3,5) are 3 pairs; both even: (2,4) is 1 pair. There are 4 pairs with an even sum, so the probability is 4/10 = 2/5.",
    "q.ch-04.q": "Two fair dice are thrown. Find the probability that at least one dice shows a 6 (fraction).",
    "q.ch-04.hints": [
      "What is the complement of 'at least one 6'?",
      "How many outcomes are there where neither dice shows a 6?",
      "Take the probability of the complement away from 1."
    ],
    "q.ch-04.explain": "Complement: neither dice shows a 6, which has 5 × 5 = 25 outcomes, probability 25/36. So the required probability is 1 − 25/36 = 11/36.",
    "q.ch-05.q": "A bag contains red counters, blue counters and 14 yellow counters. The probability of picking a red counter is 0.25 and the probability of picking a blue counter is 0.4. How many counters are there in the bag altogether?",
    "q.ch-05.hints": [
      "The three colours cover every possibility. What is the probability of picking a yellow counter?",
      "If the 14 yellow counters make up 0.35 of the total, what is the total?",
      "Work out 14 ÷ 0.35."
    ],
    "q.ch-05.explain": "P(yellow) = 1 − 0.25 − 0.4 = 0.35. So 0.35 × total = 14, total = 14 ÷ 0.35 = 40 counters.",
    "q.ch-06.q": "A fair coin is thrown 200 times and lands on heads 108 times. Find the difference between the experimental probability and the theoretical probability of heads (decimal, take the positive value).",
    "q.ch-06.hints": [
      "What is the experimental probability of heads, 108/200?",
      "What is the theoretical probability for a fair coin?",
      "Take the difference of the two numbers, making sure the result is positive."
    ],
    "q.ch-06.explain": "Experimental: 108/200 = 0.54. Theoretical: 0.5. Difference: 0.54 − 0.5 = 0.04.",
    "q.ch-07.q": "A card is drawn at random from 20 cards numbered 1, 2, …, 20. Find the probability that the number drawn is a prime number or a multiple of 4 (fraction in simplest form).",
    "q.ch-07.hints": [
      "List the prime numbers from 1 to 20.",
      "List the multiples of 4 from 1 to 20. Is any number both prime and a multiple of 4?",
      "Add the number of successful outcomes and divide by 20."
    ],
    "q.ch-07.explain": "Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19 (8 numbers). Multiples of 4: 4, 8, 12, 16, 20 (5 numbers). The two groups do not overlap, so there are 13 numbers. Probability 13/20.",
    "q.ch-08.q": "Three fair coins are thrown. Find the probability that at least one coin shows heads (fraction).",
    "q.ch-08.hints": [
      "What is the complement of 'at least one head'?",
      "What is the probability that all three coins show tails (TTT) out of 8 outcomes?",
      "Take that probability away from 1."
    ],
    "q.ch-08.explain": "Complement: all three tails (TTT), probability 1/8. So P(at least one head) = 1 − 1/8 = 7/8.",
    "q.ch-09.q": "Two fair dice are thrown. Find the probability that the larger score minus the smaller score is exactly 2 (fraction in simplest form).",
    "q.ch-09.hints": [
      "List the pairs (a, b) with a − b = 2.",
      "Are the pairs (3, 1) and (1, 3) two different outcomes?",
      "Count all the pairs, then divide by 36 and simplify."
    ],
    "q.ch-09.explain": "The pairs with difference 2: (1,3), (2,4), (3,5), (4,6) and their reversed pairs, 8 pairs in total. Probability 8/36 = 2/9.",
    "q.ch-10.q": "Binh throws a fair coin three times in a row and gets heads each time. Binh says: 'The fourth throw is more likely than 1/2 to be tails to balance things out.' Which statement is correct?",
    "q.ch-10.choices": [
      "Binh is right: tails must come up more to balance out",
      "Binh is wrong: the throws are independent, the probability of tails is still 1/2",
      "Binh is wrong: the fourth throw is certain to be heads",
      "Binh is right because the coin is biased"
    ],
    "q.ch-10.hints": [
      "Does each throw of the coin depend on the earlier throws?",
      "Does the coin 'remember' the three heads just thrown?",
      "So what is the probability of tails on the fourth throw?"
    ],
    "q.ch-10.explain": "The throws are independent; the coin does not remember old results. The probability of tails on the fourth throw is still 1/2. Binh's mistake is the 'gambler's fallacy'.",
    "p.goal": "Investigate how often each number appears when two spinners (or two counters drawn) numbered 1 to 5 are used and the LARGER of the two numbers is recorded, then compare the experimental results with the theoretical prediction.",
    "p.steps": [
      "Generate random numbers from 1 to 5: use the random function of a spreadsheet, put 5 counters in a bag and draw them, or make a spinner with 5 sections.",
      "Generate pairs of random numbers and record the larger one (for example 2 and 4 gives 4; 3 and 3 gives 3). Repeat 100 times, perhaps working in groups.",
      "Present the results in a frequency table and a bar chart. Do you see that 5 appears most often?",
      "Draw a 5 × 5 table for spinners A and B and fill the larger number into each cell. Count how many times each of 1, 2, 3, 4, 5 appears in the 25 cells.",
      "From the table, work out the theoretical probability of each number (number of cells / 25), then multiply by 100 to predict how many times it appears in 100 trials. Compare with the experiment."
    ],
    "p.extensions": [
      "Repeat with two spinners numbered 1 to 6 and 1 to 7: predict how many times each number appears, then check with 6 × 6 and 7 × 7 tables.",
      "Look for a pattern: when a spinner has n numbers, what is the probability that k is the larger number of the pair? Predict for n = 10 and n = 100.",
      "Replace 'larger number' with 'smaller number' or the 'product' of the two numbers and explore how the results differ."
    ],
    "p.reflect": [
      "Do your experimental results match the theoretical prediction? Why is there (or is there not) a difference?",
      "If you increase the number of trials from 100 to 1000, how do you think the results will change?",
      "What pattern do you notice in the number of times 1, 2, 3, 4, 5 appear in the table?"
    ]
  },
  vi: {
    "q.13.1-01.q": "Xác suất một đội bóng thắng trận là 0,3 và xác suất hòa là 0,1. Tính xác suất đội đó thua.",
    "q.13.1-02.q": "Gieo hai con xúc xắc cân đối 6 mặt. Tìm xác suất để hai con ra cùng một số. (Viết phân số tối giản.)",
    "q.13.1-03.q": "Gieo hai con xúc xắc cân đối 6 mặt rồi cộng số chấm. Tìm xác suất để tổng bằng 6. (Phân số.)",
    "q.13.1-04.q": "Gieo hai con xúc xắc cân đối 6 mặt rồi cộng số chấm. Tìm xác suất để tổng từ 9 trở lên. (Phân số tối giản.)",
    "q.13.1-05.q": "Gieo hai con xúc xắc cân đối. Xác suất để không con nào ra mặt 5 là bao nhiêu?",
    "q.13.1-06.q": "Gieo hai con xúc xắc cân đối rồi cộng số chấm. Tìm xác suất để tổng là số nguyên tố. (Phân số tối giản.)",
    "q.13.1-07.q": "Gieo cùng lúc một đồng xu cân đối và một con xúc xắc cân đối 6 mặt. Tìm xác suất để được mặt ngửa và số chẵn. (Phân số tối giản.)",
    "q.13.1-08.q": "Gieo ba đồng xu cân đối. Tìm xác suất để được đúng 2 mặt ngửa và 1 mặt sấp. (Phân số.)",
    "q.13.1-09.q": "Zara có các thẻ 2, 4 và 5. Bạn xếp chúng cạnh nhau theo thứ tự ngẫu nhiên để tạo một số có ba chữ số. Tìm xác suất để số đó lớn hơn 400. (Phân số tối giản.)",
    "q.13.1-10.q": "Arun nói: 'Khi gieo hai đồng xu cân đối có ba kết quả: 2 ngửa, 2 sấp, hoặc một ngửa một sấp. Vậy xác suất 2 mặt ngửa là 1/3.' Nhận xét nào đúng?",
    "q.13.1-10.choices": [
      "Arun đúng: có 3 kết quả nên P(2 mặt ngửa) = 1/3",
      "Arun sai: HT và TH khác nhau, nên có 4 kết quả đồng khả năng và P(2 mặt ngửa) = 1/4",
      "Arun sai: P(2 mặt ngửa) = 1/2"
    ],
    "q.13.2-01.q": "Một bảng tính mô phỏng việc gieo xúc xắc 200 lần. Mặt 4 xuất hiện 33 lần. Tìm xác suất thực nghiệm của mặt 4. (Phân số hoặc số thập phân.)",
    "q.13.2-02.q": "Gieo hai đồng xu cân đối. Xác suất lý thuyết để được một ngửa một sấp là bao nhiêu? (Phân số tối giản.)",
    "q.13.2-03.q": "Một vòng quay có P(đỏ) = 0,6, P(trắng) = 0,3 và P(xanh) = 0,1. Vòng quay được quay 800 lần. Em kỳ vọng nó dừng ở màu đỏ bao nhiêu lần?",
    "q.13.2-04.q": "Một vòng quay được quay 800 lần: đỏ 489 lần, trắng 218 lần và xanh 93 lần. Tìm xác suất thực nghiệm của màu trắng (số thập phân).",
    "q.13.2-05.q": "Một đồng xu được gieo 10 lần và ra 7 mặt ngửa. Nhận xét nào hợp lý nhất?",
    "q.13.2-05.choices": [
      "Đồng xu chắc chắn bị lệch vì 7/10 khác 1/2",
      "10 lần gieo là quá ít; cần gieo nhiều lần hơn nữa trước khi kết luận",
      "Lần gieo tiếp theo có nhiều khả năng ra sấp hơn để cân bằng lại",
      "Xác suất lý thuyết của mặt ngửa bây giờ là 7/10"
    ],
    "q.13.2-06.q": "20 chữ số thập phân đầu tiên của π là 1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6. Tìm xác suất thực nghiệm để một chữ số là 3. (Số thập phân.)",
    "q.13.2-07.q": "Bốn bạn cùng gieo sáu con xúc xắc và ghi lại 'có ít nhất một mặt 6'. Arun: 7 lần trong 10 lần gieo; Sofia: 9 trong 20; Marcus: 31 trong 40; Zara: 36 trong 50. Gộp tất cả kết quả để tìm xác suất thực nghiệm của 'có ít nhất một mặt 6'. (Phân số hoặc số thập phân.)",
    "q.13.2-08.q": "Gieo hai đồng xu cân đối 100 lần. Bộ kết quả nào (HH, TT, mỗi loại một) có khả năng là thật nhất?",
    "q.13.2-08.choices": [
      "HH 24, TT 26, mỗi loại một 50",
      "HH 5, TT 5, mỗi loại một 90",
      "HH 33, TT 33, mỗi loại một 34",
      "HH 0, TT 0, mỗi loại một 100"
    ],
    "q.13.2-09.q": "Marcus rút một viên bi từ túi 40 lần, mỗi lần đều trả lại, và được màu đỏ 14 lần. Túi có 100 viên bi. Dùng kết quả của bạn để ước lượng có bao nhiêu viên bi đỏ.",
    "q.13.2-10.q": "Máy tính mô phỏng 500 lần gieo sáu con xúc xắc và được ít nhất một mặt 6 trong 333 lần. Xác suất lý thuyết là 0,6651. Tìm hiệu (dương) giữa xác suất thực nghiệm và xác suất lý thuyết. (Số thập phân.)"
  }
});
