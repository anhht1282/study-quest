window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 13,
  en: {
    "u.realm": "Dice Valley",
    "u.story": "You arrive in Dice Valley, where every race depends on luck. To avoid being fooled by 'lucky' games and to understand what the weather forecast says, you must learn to measure how likely an event is using a number from 0 to 1.",
    "g.0.def": "One possible result of an experiment, for example rolling a 4 on a dice.",
    "g.1.def": "How easy or hard it is for an event to happen: certain, likely, unlikely, impossible...",
    "g.2.def": "Outcomes that have the same chance of happening, for example the 6 faces of a fair dice.",
    "g.3.def": "Two outcomes that cannot both happen in one trial.",
    "g.4.def": "The number of favourable outcomes divided by the total number of equally likely outcomes.",
    "g.5.def": "An estimate of probability based on the results of a real experiment.",
    "g.6.def": "The number of times an event happens divided by the total number of trials.",
    "g.7.def": "One go at an experiment, for example one flip of a coin.",
    "s.13.1.learn": [
      "Probability is a number from 0 to 1 that measures how likely something is: 0 is impossible, 1 is certain, 0.5 is an even chance.",
      "A probability can be written as a fraction, a decimal or a percentage: 4/5 = 0.8 = 80%.",
      "To compare two probabilities, change both to the same form (usually percentages).",
      "A probability is never less than 0 or greater than 1 (or 100%).",
      "Trials are independent: a coin does not 'remember' earlier flips, so the next flip is still 50%."
    ],
    "ex.13.1.q": "The Tigers win their next match with probability 45%, the Lions with probability 4/5. Which team is more likely to win?",
    "ex.13.1.steps": [
      "Change 4/5 = 0.8 = 80%",
      "Compare 80% > 45%",
      "So the Lions are more likely to win."
    ],
    "ex.13.1.prompts": [
      "The two probabilities are in different forms (percentage and fraction). Which common form will you change them to so you can compare?",
      "Change 4/5 to a percentage and compare it with 45%: which is larger?",
      "What does a larger probability tell you about which team is more likely to win?"
    ],
    "ex.13.1.twist": "What is the probability, as a percentage, that the Tigers do not win the next match?",
    "s.13.2.learn": [
      "Two outcomes are mutually exclusive if they cannot happen together: when you roll once and get 1, you cannot also get 3.",
      "When outcomes are equally likely: probability = (number of favourable outcomes) / (total number of outcomes).",
      "A probability of 0 means impossible; a probability of 1 means certain.",
      "If the outcomes are mutually exclusive and cover every possibility, their probabilities add up to 1; so P(not happening) = 1 − P(happening).",
      "If two events can happen together (such as '5 or less' and '5 or more'), you must not add their probabilities as if they were mutually exclusive."
    ],
    "ex.13.2.q": "10 cards: 2, 5, 8, 5, 9, 8, 5, 3, 8, 5. A card is picked without looking. Find the probability of picking an 8.",
    "ex.13.2.steps": [
      "There are 10 equally likely cards.",
      "There are 3 cards showing 8.",
      "P(8) = 3/10 = 30%."
    ],
    "ex.13.2.prompts": [
      "What does the total number of cards tell you about the number of possible outcomes?",
      "Count how many cards show the number 8.",
      "Probability = wanted outcomes divided by possible outcomes: write it as a fraction, then as a percentage."
    ],
    "ex.13.2.twist": "If 2 more cards showing 8 are added to the set, what is the probability of picking an 8?",
    "s.13.3.learn": [
      "Experimental probability = relative frequency = number of times it happens / total number of trials.",
      "The more trials you do, the more reliable the result; with few trials the result can be far from the theory.",
      "Experimental results are often not exactly equal to the theoretical probability, and that is normal.",
      "P(not happening) = 1 − P(happening); the relative frequencies of all outcomes add up to 1.",
      "Experimental probability can be used to estimate how often something will happen in future, or an unknown amount (the number of red balls in a bag)."
    ],
    "ex.13.3.q": "124 drawing pins are dropped and 48 land point up. Find the experimental probability that a pin lands point up.",
    "ex.13.3.steps": [
      "Relative frequency = 48/124",
      "≈ 0.39",
      "The experimental probability is about 39%."
    ],
    "ex.13.3.prompts": [
      "Experimental probability is the number of times it happens divided by the total number of trials. Put the numbers into a fraction.",
      "Divide to get a decimal, then round to the nearest hundredth.",
      "To write it as a percentage, what do you multiply the result by?"
    ],
    "ex.13.3.twist": "If 200 pins are dropped in total and 80 land point up, what is the experimental probability?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Rolling dice, picking cards, counting balls: exam-style and gifted-student probability problems are waiting for you at the end of the valley.",
    "q.13.1-01.hints": [
      "Could the day after Monday ever not be Tuesday?",
      "Does this event always happen, or only sometimes?",
      "Which end of the 0 to 1 scale is its probability at?"
    ],
    "q.13.1-01.explain": "The day after Monday is always Tuesday, so this event is certain to happen: its probability is 1 (certain).",
    "q.13.1-02.hints": [
      "How many tenths is 4/5?",
      "If you multiply the numerator and denominator by 2, which fraction do you get?",
      "What percentage is 8/10?"
    ],
    "q.13.1-02.explain": "4/5 = 8/10 = 0.8 = 80%.",
    "q.13.1-03.hints": [
      "30% means 30 parts out of how many parts?",
      "Write 30/100, then find a common factor of 30 and 100.",
      "Which fraction do you get when you divide the numerator and denominator by 10?"
    ],
    "q.13.1-03.explain": "30% = 30/100 = 3/10 after dividing the numerator and denominator by 10.",
    "q.13.1-04.hints": [
      "You should change all four numbers to the same form. Which form is easiest?",
      "What percentage is 3/5?",
      "Among 60%, 55%, 58%, 50%, which is the largest?"
    ],
    "q.13.1-04.explain": "3/5 = 60%, 0.55 = 55%, 58%, 0.5 = 50%. The greatest is 3/5. Common mistake: seeing that 58% has a 'bigger' number than 3 or 5 and choosing it without changing the form.",
    "q.13.1-05.hints": [
      "Does the coin remember the previous five flips?",
      "How many faces does a fair coin have on each flip, and are they equally likely?",
      "So how do the earlier results affect the next flip?"
    ],
    "q.13.1-05.explain": "Each flip is independent, and a fair coin always has a 50% probability of heads. The mistake of thinking it is now tails' turn is called the gambler's fallacy.",
    "q.13.1-05.why.q": "Why is the answer 50%?",
    "q.13.1-05.why.choices": [
      "Because the coin 'makes up' for earlier results to keep things balanced",
      "Because the flips are independent of each other",
      "Because 5 flips is not enough"
    ],
    "q.13.1-06.hints": [
      "Between which two values on the scale does a probability lie?",
      "Change each number to a decimal to compare it with 0 and 1.",
      "Which numbers are less than 0 or greater than 1?"
    ],
    "q.13.1-06.explain": "A probability must be from 0 to 1. 1.2 and 3/2 = 1.5 are greater than 1; −0.3 is less than 0. But 0.9 and 100% (= 1) are valid.",
    "q.13.1-07.hints": [
      "What does 80% mean out of 100 parts?",
      "Simplify it to 'out of 10 days, how many days'?",
      "Work out 80% of 10."
    ],
    "q.13.1-07.explain": "80% of 10 = 0.8 × 10 = 8 days. This is only the 'expected' number of days; in reality it may differ a little.",
    "q.13.2-01.hints": [
      "How many cards are there in total?",
      "How many cards show the number 3?",
      "Probability = number of favourable cards / total number of cards."
    ],
    "q.13.2-01.explain": "There is only 1 card with 3 among the 10 cards, so P = 1/10.",
    "q.13.2-02.hints": [
      "Count how many cards show 5.",
      "Write the probability as a fraction with denominator 10.",
      "Simplify that fraction."
    ],
    "q.13.2-02.explain": "There are 4 cards showing 5, so P = 4/10 = 2/5.",
    "q.13.2-03.hints": [
      "Is there any card showing 1?",
      "What do we call such an event: certain or impossible?",
      "What is the probability of an impossible event?"
    ],
    "q.13.2-03.explain": "No card shows 1, so the event is impossible and P = 0.",
    "q.13.2-04.hints": [
      "Which of the numbers on the cards are odd?",
      "Count the cards showing 5, 9 and 3.",
      "Write the fraction and simplify it."
    ],
    "q.13.2-04.explain": "Odd numbers: four cards of 5, one card of 9, one card of 3 = 6 cards. P = 6/10 = 3/5.",
    "q.13.2-05.hints": [
      "How many cards show 8?",
      "How many cards are not 8?",
      "Or: take the probability of picking an 8 away from 1."
    ],
    "q.13.2-05.explain": "P(8) = 3/10 so P(not 8) = 1 − 3/10 = 7/10.",
    "q.13.2-06.hints": [
      "List the multiples of 3 from 1 to 20.",
      "How many numbers are in your list?",
      "Divide by the total number of faces (20) and simplify."
    ],
    "q.13.2-06.explain": "Multiples of 3: 3, 6, 9, 12, 15, 18 (6 numbers). P = 6/20 = 3/10.",
    "q.13.2-07.hints": [
      "Which numbers divide exactly into 30 (factors of 30)?",
      "Keep only the factors that are less than or equal to 20.",
      "Count them, then divide by 20."
    ],
    "q.13.2-07.explain": "Factors of 30 from 1 to 20: 1, 2, 3, 5, 6, 10, 15 (7 numbers). P = 7/20.",
    "q.13.2-08.hints": [
      "Do the two groups '5 or less' and '5 or more' share a card?",
      "Work out 3/8 + 6/8. How does the result compare with 1?",
      "Can a total probability be more than 1? What does that tell you about counting something twice?"
    ],
    "q.13.2-08.explain": "The card 5 is counted twice. 3/8 + 6/8 = 9/8 > 1, so the events are not mutually exclusive; you can only add probabilities when the outcomes do not overlap.",
    "q.13.2-09.hints": [
      "How many numbers have 6 as the tens digit and a units digit that is not 6?",
      "What about the case where the units digit is 6 and the tens digit is not 6?",
      "Add the two cases, then divide by 100."
    ],
    "q.13.2-09.explain": "Tens digit is 6, units digit not 6: 9 numbers. Units digit is 6, tens digit not 6: 9 numbers. Total 18 numbers, P = 18/100 = 9/50.",
    "q.13.2-10.hints": [
      "How many choices does each digit have other than 6?",
      "How many such pairs of digits are there?",
      "Or: what is the probability of 'at least one digit is 6'? Then take it away from 1."
    ],
    "q.13.2-10.explain": "Each digit has 9 choices other than 6, so there are 9 × 9 = 81 numbers. P = 81/100.",
    "q.13.3-01.hints": [
      "How many times does it happen, and what is the total number of trials?",
      "Write 140/400.",
      "Simplify the fraction by dividing by 20."
    ],
    "q.13.3-01.explain": "P = 140/400 = 7/20 (= 35%).",
    "q.13.3-02.hints": [
      "How many cars are not travelling faster than 60 km/h?",
      "Or use the complement: 1 minus the probability from the previous part.",
      "Write the answer as a fraction in its simplest form."
    ],
    "q.13.3-02.explain": "400 − 140 = 260 cars. P = 260/400 = 13/20, or 1 − 7/20 = 13/20.",
    "q.13.3-03.hints": [
      "Write the fraction 232/240.",
      "Divide the numerator by the denominator with a calculator, or simplify.",
      "Multiply the result by 100, then round."
    ],
    "q.13.3-03.explain": "232 ÷ 240 ≈ 0.9667 = 96.67% ≈ 97%.",
    "q.13.3-04.hints": [
      "Relative frequency = number of heads / total number of flips.",
      "Write 24/40.",
      "Simplify by dividing by 8."
    ],
    "q.13.3-04.explain": "24/40 = 3/5 = 0.6.",
    "q.13.3-05.hints": [
      "If you flip a fair coin 40 times, are you certain to get exactly 20 heads?",
      "Is 40 trials a lot or a few?",
      "What should you do to reach a more certain conclusion about whether the coin is fair?"
    ],
    "q.13.3-05.explain": "Experimental results vary around the theoretical probability. To reach a conclusion you need more trials. Mistake: thinking the experiment must match the theory exactly.",
    "q.13.3-06.hints": [
      "How many balls are in the bag in total?",
      "How many balls are red?",
      "Write the fraction favourable / total."
    ],
    "q.13.3-06.explain": "Total 1 + 1 + 3 = 5 balls, and 3 are red, so P(red) = 3/5.",
    "q.13.3-07.hints": [
      "What decimal is 40%?",
      "Expected number of pins pointing up = probability × number of trials.",
      "Work out 0.4 × 500."
    ],
    "q.13.3-07.explain": "0.4 × 500 = 200 pins.",
    "q.13.3-08.hints": [
      "What is the experimental probability of a red ball (36/50)?",
      "If there are r red balls, the theoretical probability is r/(r+2). Try r = 3, 5, 7.",
      "Which r gives r/(r+2) closest to 0.72?"
    ],
    "q.13.3-08.explain": "36/50 = 0.72. r = 3 gives 0.6; r = 5 gives 5/7 ≈ 0.714; r = 7 gives 7/9 ≈ 0.78. The closest odd number is 5.",
    "q.13.3-09.hints": [
      "Can a student both want to be in a band and be in a sports team?",
      "If so, how many times did you count that student when you added 92 + 68?",
      "So are the two groups mutually exclusive?"
    ],
    "q.13.3-09.explain": "The two groups are not mutually exclusive: students in both are counted twice, so 2/3 may be too large. Only add when the groups do not overlap.",
    "q.13.3-10.hints": [
      "What is the experimental frequency of red?",
      "Which fraction does 45/120 simplify to?",
      "Multiply that frequency by 40."
    ],
    "q.13.3-10.explain": "45/120 = 3/8. Estimated number of red counters = 3/8 × 40 = 15.",
    "q.ch-01.q": "Two fair dice are rolled at the same time. Find the probability that the sum of the two faces is 7.",
    "q.ch-01.hints": [
      "How many pairs of outcomes (first face, second face) are there in total?",
      "List the pairs with sum 7: (1,6), (2,5)...",
      "Divide the number of favourable pairs by 36 and simplify."
    ],
    "q.ch-01.explain": "There are 6 × 6 = 36 pairs. Sum 7 has 6 pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). P = 6/36 = 1/6.",
    "q.ch-02.q": "Two fair dice are rolled. Find the probability that the sum of the two faces is a multiple of 5.",
    "q.ch-02.hints": [
      "What range can the sum of two dice be in, and which sums are multiples of 5?",
      "How many pairs give sum 5 and how many give sum 10?",
      "Add the two numbers of pairs, then divide by 36."
    ],
    "q.ch-02.explain": "Sum 5: (1,4),(2,3),(3,2),(4,1) = 4 pairs. Sum 10: (4,6),(5,5),(6,4) = 3 pairs. In all 7 pairs, so P = 7/36.",
    "q.ch-03.q": "Two fair dice are rolled. Find the probability that the product of the two faces is an odd number.",
    "q.ch-03.hints": [
      "When is the product of two numbers odd?",
      "How many odd faces does each dice have?",
      "The number of favourable pairs is 3 × 3 = ? then divide by 36."
    ],
    "q.ch-03.explain": "The product is odd when both faces are odd: 3 × 3 = 9 pairs. P = 9/36 = 1/4.",
    "q.ch-04.q": "There are 30 cards numbered from 1 to 30. One card is picked at random. Find the probability that the number on it is divisible by 3 or divisible by 5.",
    "q.ch-04.hints": [
      "How many numbers from 1 to 30 are divisible by 3? Divisible by 5?",
      "Is there a number divisible by both 3 and 5 that is counted twice?",
      "Favourable numbers = 10 + 6 − (the number counted twice); divide by 30."
    ],
    "q.ch-04.explain": "Divisible by 3: 10 numbers. Divisible by 5: 6 numbers. Divisible by 15: 2 numbers (15, 30) are counted twice. There are 10 + 6 − 2 = 14 numbers; P = 14/30 = 7/15.",
    "q.ch-05.q": "There are 50 cards numbered from 1 to 50. One card is picked at random. Find the probability that the card shows a prime number.",
    "q.ch-05.hints": [
      "Is 1 a prime number?",
      "List the prime numbers up to 50 in order.",
      "Count them, then divide by 50 and simplify."
    ],
    "q.ch-05.explain": "Primes ≤ 50: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47 (15 numbers). P = 15/50 = 3/10.",
    "q.ch-06.q": "In a game of chess, the probability that An wins is 0.35 and the probability of a draw is 0.25. Find the probability that An loses.",
    "q.ch-06.hints": [
      "Are the three outcomes win, draw, lose mutually exclusive and do they cover every possibility?",
      "What do the three probabilities add up to?",
      "Take the sum of the two known probabilities away from 1."
    ],
    "q.ch-06.explain": "P(lose) = 1 − 0.35 − 0.25 = 0.4.",
    "q.ch-07.q": "A box has 12 red marbles and some blue marbles. One marble is picked at random and the probability of red is 2/5. How many blue marbles are in the box?",
    "q.ch-07.hints": [
      "If the total number of marbles is n, how do you write the probability of red?",
      "12/n = 2/5, so what is n?",
      "Number of blue marbles = total number of marbles − 12."
    ],
    "q.ch-07.explain": "12/n = 2/5 so n = 30. Number of blue marbles = 30 − 12 = 18.",
    "q.ch-08.q": "A bag has 3 red marbles and 5 blue marbles. What is the least number of red marbles you must add so that the probability of picking a red marble is 1/2?",
    "q.ch-08.hints": [
      "After adding k red marbles, what are the total number of marbles and the number of red marbles?",
      "Set up the equation (3 + k)/(8 + k) = 1/2.",
      "Solve the equation to find k, then check it."
    ],
    "q.ch-08.explain": "(3+k)/(8+k) = 1/2 ⟹ 6 + 2k = 8 + k ⟹ k = 2. Then there are 5 red out of 10, exactly 1/2.",
    "q.ch-09.q": "A player takes 80 penalty kicks and scores 56 times. Based on this result, estimate the number of goals when the player takes 150 kicks.",
    "q.ch-09.hints": [
      "What is the experimental probability of scoring (56/80)?",
      "Simplify the fraction 56/80.",
      "Multiply that probability by 150."
    ],
    "q.ch-09.explain": "56/80 = 7/10. Estimate: 7/10 × 150 = 105 goals.",
    "q.ch-10.q": "Class 7A has 40 students: 24 like football, 18 like badminton and 6 like both. One student is chosen at random. What is the probability that the student likes at least one of the two sports?",
    "q.ch-10.choices": [
      "42/40",
      "36/40 = 9/10",
      "30/40 = 3/4",
      "24/40 = 3/5"
    ],
    "q.ch-10.hints": [
      "If you only add 24 + 18, how many times are the students who like both counted?",
      "Number who like at least one sport = 24 + 18 minus the number counted twice.",
      "Divide that number by 40 and compare with the answers."
    ],
    "q.ch-10.explain": "Number who like at least one sport: 24 + 18 − 6 = 36. P = 36/40 = 9/10. The answer 42/40 is wrong because of double counting and because it is greater than 1."
  },
  vi: {
    "q.13.3-10.howto": "Dùng kết quả của 120 lần rút để ước lượng trong 40 thẻ ở hộp có bao nhiêu thẻ màu đỏ. Nhập số thẻ đó.",
    "q.13.3-08.howto": "Dùng 50 kết quả của Daniella để quyết định trong túi nhiều khả năng có bao nhiêu bi đỏ. Nhập số bi đỏ đó.",
    "q.13.1-01.q": "Chọn từ phù hợp nhất để mô tả: 'Ngày sau thứ Hai sẽ là thứ Ba.'",
    "q.13.1-01.choices": ["không thể", "khó xảy ra", "cơ hội ngang nhau", "chắc chắn"],
    "q.13.1-02.q": "Viết 4/5 dưới dạng phần trăm.",
    "q.13.1-03.q": "Viết 30% dưới dạng phân số tối giản.",
    "q.13.1-04.q": "Số nào dưới đây là xác suất lớn nhất?",
    "q.13.1-04.choices": ["3/5", "0,55", "58%", "0,5"],
    "q.13.1-05.q": "Sogand tung một đồng xu cân đối năm lần và lần nào cũng được mặt ngửa. Xác suất để lần tung tiếp theo được mặt ngửa là bao nhiêu?",
    "q.13.1-05.choices": ["Lớn hơn 50%", "Nhỏ hơn 50%", "Đúng bằng 50%", "Lần này chắc chắn phải là mặt sấp"],
    "q.13.1-06.q": "Số nào dưới đây KHÔNG thể là xác suất? Chọn tất cả đáp án đúng.",
    "q.13.1-06.choices": ["0,9", "1,2", "−0,3", "100%", "3/2"],
    "q.13.1-07.q": "Dự báo cho biết xác suất có mưa là 80%. Trong 10 ngày có đúng dự báo này, em mong đợi khoảng bao nhiêu ngày có mưa?",
    "q.13.2-01.q": "Mười tấm thẻ ghi các số 2, 5, 8, 5, 9, 8, 5, 3, 8, 5. Chọn ngẫu nhiên một thẻ. Tìm xác suất để thẻ đó ghi số 3.",
    "q.13.2-02.q": "Với cùng mười tấm thẻ đó (2, 5, 8, 5, 9, 8, 5, 3, 8, 5), tìm xác suất chọn được thẻ ghi số 5.",
    "q.13.2-03.q": "Với cùng mười tấm thẻ đó, tìm xác suất chọn được thẻ ghi số 1.",
    "q.13.2-04.q": "Với cùng mười tấm thẻ đó, tìm xác suất chọn được thẻ ghi số lẻ.",
    "q.13.2-05.q": "Với cùng mười tấm thẻ đó, tìm xác suất để thẻ chọn được KHÔNG phải số 8.",
    "q.13.2-06.q": "Một con xúc xắc cân đối có 20 mặt đánh số từ 1 đến 20. Tìm xác suất gieo được một bội của 3.",
    "q.13.2-07.q": "Với cùng xúc xắc 20 mặt đó, tìm xác suất gieo được một ước của 30.",
    "q.13.2-08.q": "Tám tấm thẻ: 2, 3, 5, 7, 11, 13, 17, 19. P(không quá 5) = 3/8 và P(ít nhất 5) = 6/8. Zara nói hai xác suất này cộng lại bằng 1 vì chắc chắn một trong hai sẽ xảy ra. Vì sao bạn ấy sai?",
    "q.13.2-08.choices": [
      "Thẻ số 5 nằm trong cả hai nhóm, nên các kết quả không xung khắc",
      "Vì 3/8 + 6/8 không phải là phân số thực sự",
      "Vì các xác suất không bao giờ cộng được",
      "Bạn ấy đúng"
    ],
    "q.13.2-09.q": "Máy tính tạo ngẫu nhiên một số có hai chữ số từ 00 đến 99 (cả 100 cặp đều có khả năng như nhau). Tìm xác suất để có đúng một chữ số là 6.",
    "q.13.2-10.q": "Với cùng số ngẫu nhiên từ 00 đến 99 đó, tìm xác suất để không chữ số nào là 6.",
    "q.13.3-01.q": "Khảo sát 400 chiếc ô tô cho thấy 140 chiếc chạy nhanh hơn 60 km/h. Tìm xác suất thực nghiệm để chiếc xe tiếp theo chạy nhanh hơn 60 km/h.",
    "q.13.3-02.q": "Trong cùng cuộc khảo sát đó, tìm xác suất thực nghiệm để một chiếc xe chạy với tốc độ không quá 60 km/h.",
    "q.13.3-03.q": "Khảo sát 240 học sinh cho thấy 232 em có điện thoại di động. Tìm xác suất thực nghiệm để một học sinh có điện thoại, viết dưới dạng phần trăm làm tròn đến hàng đơn vị.",
    "q.13.3-04.q": "Varun tung một đồng xu 40 lần: 24 lần ngửa và 16 lần sấp. Tìm tần suất tương đối của mặt ngửa.",
    "q.13.3-05.q": "Toby nói đồng xu của Varun không cân đối vì 24 lần ngửa không đúng bằng một nửa của 40. Nhận xét nào là tốt nhất?",
    "q.13.3-05.choices": [
      "Toby đúng vì 24 không bằng 20",
      "Chưa chắc: chỉ với 40 lần tung, chênh lệch như vậy có thể xảy ra do ngẫu nhiên ngay cả với đồng xu cân đối",
      "Đồng xu chắc chắn cân đối vì 24 + 16 = 40",
      "Toby đúng vì thí nghiệm không bao giờ sai"
    ],
    "q.13.3-06.q": "Một túi có 1 bi trắng, 1 bi đen và 3 bi đỏ. Lấy ngẫu nhiên một bi. Tìm xác suất lý thuyết để được bi đỏ.",
    "q.13.3-07.q": "Một chiếc đinh ghim rơi ngửa (mũi hướng lên) với tần suất 40%. Nếu thả 500 chiếc, em dự đoán có bao nhiêu chiếc rơi ngửa?",
    "q.13.3-08.q": "Một túi có 1 bi trắng, 1 bi đen và một số bi đỏ (số lẻ). Daniella lấy một bi rồi bỏ lại, làm như vậy 50 lần: 6 lần trắng, 8 lần đen, 36 lần đỏ. Số bi đỏ có khả năng nhất là bao nhiêu?",
    "q.13.3-09.q": "Trong cuộc khảo sát 240 học sinh, 92 em muốn vào ban nhạc và 68 em ở đội thể thao. Một học sinh cho rằng xác suất ban nhạc HOẶC thể thao là (92 + 68)/240 = 2/3. Vì sao điều này có thể sai?",
    "q.13.3-09.choices": [
      "Một số học sinh có thể ở cả hai nhóm nên bị đếm hai lần",
      "Vì 92 + 68 không bằng 160",
      "Vì phải chia cho 100",
      "Điều đó đúng"
    ],
    "q.13.3-10.q": "Một hộp có 40 viên bi. Rút 120 lần có hoàn lại, có 45 lần được bi đỏ. Ước lượng số bi đỏ trong hộp."
  }
});
