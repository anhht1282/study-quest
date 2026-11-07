window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 3,
  en: {
    "q.ch-04.howto": "□ is a hidden digit in the number 3.4□6. Enter the smallest digit □ for which the number rounds to 3.5 (to one decimal place).",
    "u.realm": "Hundred-Green Floating Market",
    "u.story": "You arrive at a floating market in the Mekong Delta, where the sellers multiply and divide by 10, 100 and 1000 and round prices at lightning speed. To bargain well and never give the wrong change, you need to master place value and rounding!",
    "g.0.def": "The numbers 10, 100, 1000… written in the form 10ⁿ.",
    "g.1.def": "The small raised number shows how many factors of 10 are multiplied together.",
    "g.2.def": "The position of a digit after the decimal point.",
    "g.3.def": "Replace a number with a nearby number to a given degree of accuracy.",
    "g.4.def": "Which place you round to, for example 2 decimal places.",
    "g.5.def": "Nearly equal, but not exactly equal.",
    "s.3.1.learn": [
      "10ⁿ is the number 1 followed by n zeros: 10³ = 1000.",
      "Multiplying by 10ⁿ: move the decimal point n places to the right (fill with 0s if digits are missing).",
      "Dividing by 10ⁿ: move the decimal point n places to the left.",
      "It is not always 'add or remove zeros': with decimals you must move the decimal point.",
      "Multiplying and then dividing by the same power of 10 takes you back to the original number."
    ],
    "ex.3.1.q": "Work out 2.87 × 10⁶ and 23 500 ÷ 10³.",
    "ex.3.1.steps": [
      "10⁶ = 1 000 000: move the decimal point 6 places to the right: 2.87 → 2 870 000",
      "23 500 ÷ 1000: move the decimal point 3 places to the left → 23.5"
    ],
    "ex.3.1.prompts": [
      "The power 6 of 10 tells you how many places to move the decimal point. Which way do you move it when multiplying?",
      "Dividing by 10³ moves the decimal point the opposite way; how many places?"
    ],
    "ex.3.1.twist": "If 2.87 × 10ⁿ = 28 700, what is n?",
    "s.3.2.learn": [
      "Identify the place to round to, then look at the digit immediately to its right.",
      "If that digit is ≥ 5: increase the digit you keep by 1; if < 5: keep it the same.",
      "After rounding, drop the digits to the right.",
      "Look at only one digit to the right; do not round several times.",
      "Rounding can carry over: 99.96 → 100.0."
    ],
    "ex.3.2.q": "Round 17.825684 to 4 decimal places.",
    "ex.3.2.steps": [
      "The 4th digit after the decimal point is 6: 17.8256|84",
      "The next digit is 8 ≥ 5 so 6 becomes 7",
      "Result: 17.8257"
    ],
    "ex.3.2.prompts": [
      "Rounding to 4 decimal places keeps digits up to which place after the decimal point? Which digit do you look at to decide?",
      "Is that digit greater or less than 5, and how does it affect the digit you keep?",
      "Write the final result, keeping exactly 4 digits after the decimal point."
    ],
    "ex.3.2.twist": "If you round 17.825684 to 2 decimal places, which number do you get?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Rounding, estimating and quick multiplying and dividing by 10, 100, 1000 in everyday problems.",
    "q.3.1-01.hints": [
      "10⁵ means multiplying how many 10s together?",
      "The power shows how many zeros come after the digit 1.",
      "Write the digit 1 then add exactly 5 zeros."
    ],
    "q.3.1-01.explain": "10⁵ = 10×10×10×10×10 = 100 000 (the digit 1 followed by 5 zeros).",
    "q.3.1-02.hints": [
      "How is the power of 10 related to the number of zeros?",
      "Count the zeros after the digit 1.",
      "The number you counted is n."
    ],
    "q.3.1-02.explain": "The power equals the number of zeros: 1 000 000 000 has 9 zeros so it equals 10⁹.",
    "q.3.1-03.hints": [
      "What is 10³?",
      "Multiply 45 by 1000.",
      "How many zeros do you add after 45?"
    ],
    "q.3.1-03.explain": "45 × 10³ = 45 × 1000 = 45 000.",
    "q.3.1-04.hints": [
      "What is 10⁴?",
      "Each time you multiply by 10, which way does the decimal point move?",
      "Move the decimal point 4 places to the right, filling with 0s where digits are missing."
    ],
    "q.3.1-04.explain": "Multiplying by 10⁴ moves the decimal point 4 places to the right: 4.2 → 42 000.",
    "q.3.1-05.hints": [
      "How many zeros does 10⁴ have?",
      "Dividing by 10⁴ moves the decimal point how many places to the left?",
      "7 300 000 has 5 zeros at the end; what is left after removing 4 of them?"
    ],
    "q.3.1-05.explain": "7 300 000 ÷ 10 000 = 730. Removing 4 zeros from the end gives 730.",
    "q.3.1-06.hints": [
      "3.5 × 100 — when you multiply 3.5 by 100, how does the decimal point move?",
      "Move the decimal point 2 places to the right: 3.5 → 35.0 → 350.",
      "Choose the answer with the value 350."
    ],
    "q.3.1-06.explain": "The answer is 350. A common mistake: 'adding two zeros' to 3.5 to make 3.500 — but adding zeros after the decimal part does not change the value. You must move the decimal point.",
    "q.3.1-07.hints": [
      "10⁵ is 100 000. How many places must the decimal point move?",
      "0.39 has 2 digits after the decimal point; moving 5 places uses up those 2 digits, so how many places are still missing?",
      "Fill in 3 more zeros: 39 then 000."
    ],
    "q.3.1-07.explain": "0.39 × 100 000 = 39 000. Move the decimal point 5 places: 0.39 → 39 → add 3 zeros.",
    "q.3.1-08.hints": [
      "How many zeros does 10⁶ have?",
      "Move the decimal point 6 places to the left, starting from the end of the number.",
      "36 800 000 → remove 6 places → 36.8."
    ],
    "q.3.1-08.explain": "36 800 000 ÷ 1 000 000 = 36.8 (the decimal point moves 6 places to the left).",
    "q.3.1-09.hints": [
      "Try 5 200 ÷ 10⁴: are there enough zeros (4) to cross off?",
      "What happens when the number has fewer than 4 zeros at the end?",
      "Then you have to move the decimal point; you cannot just cross off zeros."
    ],
    "q.3.1-09.explain": "The rule can only be used directly when the number has at least 4 zeros at the end. For example 5 200 ÷ 10 000 = 0.52, so you must move the decimal point.",
    "q.3.2-01.hints": [
      "What is the 3rd digit after the decimal point?",
      "What is the digit immediately to its right?",
      "If it is less than 5, keep the digit you are looking at the same."
    ],
    "q.3.2-01.explain": "12.894|3: the digit to the right is 3 < 5 so keep it the same: 12.894.",
    "q.3.2-02.hints": [
      "Draw a line after the 3rd digit after the decimal point.",
      "What is the digit immediately after the line?",
      "If it is 5 or more, increase the digit before it by 1."
    ],
    "q.3.2-02.explain": "127.996|52: the next digit is 5 so 6 increases to 7: 127.997.",
    "q.3.2-03.hints": [
      "What is the 3rd digit after the decimal point?",
      "Is the next digit 5 or less?",
      "What does 0 become when increased by 1?"
    ],
    "q.3.2-03.explain": "0.200|53: the next digit is 5 so 0 becomes 1: 0.201.",
    "q.3.2-04.hints": [
      "Draw a line after the 2nd digit after the decimal point.",
      "What is the next digit?",
      "What does 4 become when increased by 1?"
    ],
    "q.3.2-04.explain": "9.34|9612: the next digit is 9 so 4 becomes 5: 9.35.",
    "q.3.2-05.hints": [
      "Which number is the 4th digit after the decimal point?",
      "The next digit is 7 — round up or keep?",
      "8 increased by 1 gives 9; write all 4 digits."
    ],
    "q.3.2-05.explain": "0.0089|732: the next digit is 7 ≥ 5 so 9 increases by 1 to 10, carrying to the previous place: 0.0090. A common mistake: keeping 0.0089 (cutting off) instead of rounding up.",
    "q.3.2-06.hints": [
      "The first digit after the decimal point is 9; the next digit is 9.",
      "9 increased by 1 becomes 10, carry 1 into the units place.",
      "99.9 + 0.1 = ?"
    ],
    "q.3.2-06.explain": "99.9|961: increase by 0.1 to get 100.0, that is 100.",
    "q.3.2-07.hints": [
      "Work out 46.48 ÷ 3 on a calculator.",
      "The result is 15.4933… — round to 2 decimal places.",
      "The 3rd digit is 3, which is less than 5."
    ],
    "q.3.2-07.explain": "46.48 ÷ 3 = 15.4933… ≈ 15.49 (money is usually rounded to two decimal places, that is cents).",
    "q.3.2-08.hints": [
      "The real number must round to 9.55 when rounded to 2 decimal places.",
      "Try each number: draw a line after the 2nd digit and look at the next digit.",
      "Does 9.545 round up or down? What about 9.555?"
    ],
    "q.3.2-08.explain": "9.545 → 9.55 and 9.549 → 9.55. But 9.544 → 9.54; 9.555 and 9.556 → 9.56. The real range is from 9.545 up to but not including 9.555.",
    "q.3.2-09.hints": [
      "A number that rounds to 5.2 lies around 5.2; the smallest is in the 'lower half'.",
      "5.1x rounds up to 5.2 when the hundredths digit is what?",
      "The smallest hundredths digit that rounds up is 5."
    ],
    "q.3.2-09.explain": "5.15 rounds to 5.2 (because the next digit is 5). 5.14 rounds to 5.1.",
    "q.ch-01.q": "100 000 dong is shared equally among 7 friends. How many dong does each friend get, rounded to the nearest dong (a whole number)?",
    "q.ch-01.hints": [
      "Work out the division 100 000 ÷ 7.",
      "The result is 14285.714… — what is the first decimal digit?",
      "7 ≥ 5, so round up."
    ],
    "q.ch-01.explain": "100 000 ÷ 7 = 14285.714… ≈ 14 286 dong.",
    "q.ch-02.q": "Calculate quickly: 3.75 × 10³ + 0.25 × 10³.",
    "q.ch-02.hints": [
      "What common factor do the two terms have?",
      "Take 10³ outside: (3.75 + 0.25) × 10³.",
      "3.75 + 0.25 = ?"
    ],
    "q.ch-02.explain": "(3.75 + 0.25) × 1000 = 4 × 1000 = 4000.",
    "q.ch-03.q": "Find x if x ÷ 10³ = 4.07.",
    "q.ch-03.hints": [
      "Which multiplication is the inverse of dividing by 10³?",
      "x = 4.07 × 10³.",
      "Move the decimal point 3 places to the right."
    ],
    "q.ch-03.explain": "x = 4.07 × 1000 = 4070.",
    "q.ch-04.q": "The number 3.4□6 (□ is a digit) rounds to 3.5 when rounded to one decimal place. What is the smallest possible digit □?",
    "q.ch-04.hints": [
      "When rounding to 1 decimal place, which place's digit do you look at?",
      "The hundredths digit is □; for the 4 to increase to 5, what must □ be?",
      "□ ≥ 5, so the smallest value is?"
    ],
    "q.ch-04.explain": "The deciding digit is the hundredths digit (□). We need □ ≥ 5 so that 3.4 rounds up to 3.5. The smallest is 5.",
    "q.ch-05.q": "Round each number to 1 decimal place and then add: 2.47 + 3.58 + 1.96. What is the result?",
    "q.ch-05.hints": [
      "What do 2.47, 3.58 and 1.96 round to, in turn?",
      "2.5 ; 3.6 ; 2.0.",
      "Add the three rounded numbers."
    ],
    "q.ch-05.explain": "2.5 + 3.6 + 2.0 = 8.1 (the exact total is 8.01, a small difference).",
    "q.ch-06.q": "What is the largest number with three decimal places that rounds to 6.3 to the nearest tenth?",
    "q.ch-06.hints": [
      "Which interval do the numbers that round to 6.3 lie in?",
      "For the largest number that still rounds to 6.3, the hundredths digit must be less than 5.",
      "The largest hundredths digit is 4, and the largest later digit is 9."
    ],
    "q.ch-06.explain": "The hundredths digit is at most 4 (if it were 5 it would round up to 6.4), the thousandths digit at most 9: 6.349.",
    "q.ch-07.q": "An rounds 4.449 to 1 decimal place like this: 4.449 → 4.45 → 4.5. Is An right or wrong?",
    "q.ch-07.choices": [
      "Right, the result is 4.5",
      "Wrong, the correct result is 4.4",
      "Wrong, the correct result is 4.3",
      "Wrong, the correct result is 5"
    ],
    "q.ch-07.hints": [
      "When rounding to 1 decimal place, which digit do you need to look at?",
      "What is the hundredths digit of 4.449?",
      "4 < 5 so keep 4.4."
    ],
    "q.ch-07.explain": "Rounding only looks at the one digit immediately after the place you round to (4). The correct result is 4.4. You must not round several times in a row.",
    "q.ch-08.q": "A factory makes 3.6 × 10² boxes of pens each day, and each box has 10³ pens. How many days are needed to make 7 200 000 pens?",
    "q.ch-08.hints": [
      "How many pens are made each day? Work out 360 × 1000.",
      "360 000 pens each day.",
      "7 200 000 ÷ 360 000 = ?"
    ],
    "q.ch-08.explain": "Each day: 360 × 1000 = 360 000 pens. Number of days: 7 200 000 ÷ 360 000 = 20.",
    "q.ch-09.q": "Work out: 8 460 000 000 ÷ 10⁵.",
    "q.ch-09.hints": [
      "10⁵ = 100 000: how many zeros do you remove?",
      "8 460 000 000 has 7 zeros at the end.",
      "Remove 5 zeros, leaving 84600."
    ],
    "q.ch-09.explain": "8 460 000 000 ÷ 100 000 = 84 600."
  },
  vi: {
    "q.3.1-01.q": "Viết 10⁵ dưới dạng một số thông thường.",
    "q.3.1-02.q": "1 000 000 000 = 10ⁿ. Giá trị của n là bao nhiêu?",
    "q.3.1-03.q": "Tính 45 × 10³.",
    "q.3.1-04.q": "Tính 4,2 × 10⁴.",
    "q.3.1-05.q": "Tính 7 300 000 ÷ 10⁴.",
    "q.3.1-06.q": "Tính 3,5 × 10².",
    "q.3.1-06.choices": ["3,500", "350", "35", "0,035"],
    "q.3.1-07.q": "Tính 0,39 × 10⁵.",
    "q.3.1-08.q": "Tính 36 800 000 ÷ 10⁶.",
    "q.3.1-09.q": "Marcus nói: 'Để chia một số tự nhiên cho 10⁴, chỉ cần gạch bỏ bốn chữ số 0 ở cuối.' Quy tắc này KHÔNG dùng được nguyên như vậy khi nào?",
    "q.3.1-09.choices": [
      "Không bao giờ dùng được",
      "Khi số đó có ít hơn bốn chữ số 0 ở cuối",
      "Khi số đó là số chẵn",
      "Khi số đó lớn hơn 10⁴"
    ],
    "q.3.2-01.q": "Làm tròn 12,8943 đến 3 chữ số thập phân.",
    "q.3.2-02.q": "Làm tròn 127,99652 đến 3 chữ số thập phân.",
    "q.3.2-03.q": "Làm tròn 0,20053 đến 3 chữ số thập phân.",
    "q.3.2-04.q": "Làm tròn 9,349612 đến 2 chữ số thập phân.",
    "q.3.2-05.q": "Làm tròn 0,0089732 đến 4 chữ số thập phân.",
    "q.3.2-05.choices": ["0,0090", "0,0089", "0,0098", "0,0100"],
    "q.3.2-06.q": "Làm tròn 99,9961 đến 1 chữ số thập phân.",
    "q.3.2-07.q": "Ba người bạn chia đều một hóa đơn 46,48 đô la. Tính phần của mỗi người, làm tròn đến 2 chữ số thập phân.",
    "q.3.2-08.q": "Một máy đếm bước chân hiển thị 9,55 km (làm tròn đến 2 chữ số thập phân). Những số nào dưới đây có thể là quãng đường thật? Chọn tất cả đáp án đúng.",
    "q.3.2-08.choices": ["9,544", "9,545", "9,549", "9,555", "9,556"],
    "q.3.2-09.q": "Số nhỏ nhất có hai chữ số thập phân mà khi làm tròn đến 1 chữ số thập phân được 5,2 là số nào?"
  }
});
