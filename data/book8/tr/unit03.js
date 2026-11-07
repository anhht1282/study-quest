window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 3,
  en: {
    "u.realm": "Decimal-Shift Village",
    "u.story": "In Decimal-Shift Village, the villagers trade in enormous and tiny numbers: millions of grains of rice, rare drops of water. If the decimal point jumps one place wrongly, the prices will be wrong by a factor of ten! Learn to shift the decimal point and round skilfully to help the village calculate correctly.",
    "g.0.def": "A number with a whole part and a decimal part separated by a decimal point, for example 3.75.",
    "g.1.def": "A different calculation that gives the same result, and is usually easier to do.",
    "g.2.def": "An operation that undoes the previous operation, like multiplication and division; used to check a result.",
    "g.3.def": "The number of digits after the decimal point in a number.",
    "g.4.def": "Counted from the first non-zero digit of the number, going from left to right.",
    "g.5.def": "Replacing a number with a nearby number that has fewer digits, to a given degree of accuracy.",
    "g.6.def": "The number of significant figures or decimal places you must keep when rounding.",
    "g.7.def": "Calculating quickly by rounding the numbers to get an approximate result.",
    "s.3.1.learn": [
      "0.1 = 1/10 so multiplying by 0.1 is the same as dividing by 10: 8 × 0.1 = 8 ÷ 10 = 0.8.",
      "0.01 = 1/100 so multiplying by 0.01 is the same as dividing by 100: 8 × 0.01 = 0.08.",
      "Dividing by 0.1 is the same as multiplying by 10: 8 ÷ 0.1 = 80. Dividing by 0.01 is the same as multiplying by 100: 8 ÷ 0.01 = 800.",
      "Checking tip: use the inverse operation. If 2.3 × 10 = 23 then 23 × 0.1 = 2.3 is correct.",
      "Equivalent calculations: 3.2 ÷ 0.1 = (3.2 × 10) ÷ (0.1 × 10) = 32 ÷ 1 = 32."
    ],
    "ex.3.1.q": "Work out 4.156 ÷ 0.01.",
    "ex.3.1.steps": [
      "Dividing by 0.01 is the same as multiplying by 100.",
      "4.156 × 100 = 415.6 (move the decimal point 2 places to the right)",
      "Check using the inverse operation: 415.6 × 0.01 = 4.156 ✓"
    ],
    "ex.3.1.prompts": [
      "0.01 is what fraction of 1? Dividing by one hundredth means asking how many 'hundredths' are in the number.",
      "When you multiply by 100, which way does the decimal point of 4.156 move, and how many places?",
      "How can you check by using the inverse operation?"
    ],
    "ex.3.1.twist": "If you divide 4.156 by 0.001, what is the result?",
    "s.3.2.learn": [
      "The first significant figure is the first non-zero digit (from the left). In 0.00806, 8 is the first significant figure, 0 is the second, 6 is the third.",
      "To round to n significant figures: find the nth digit and look at the digit immediately to its right. If it is ≥ 5, increase the nth digit by 1; if it is < 5, keep it the same.",
      "For large numbers, replace the dropped digits with zeros to keep the correct value: 4286 ≈ 4000 (1 s.f.), not 4.",
      "For small numbers, keep the leading zeros: 0.08069 ≈ 0.0807 (3 s.f.). Leading zeros are not significant figures.",
      "Estimating: round each number to 1 significant figure and calculate, then compare with the exact result to check."
    ],
    "ex.3.2.q": "Round 0.7963 to 2 significant figures.",
    "ex.3.2.steps": [
      "The first significant figure is 7, the second is 9.",
      "The digit to the right of the 9 is 6, which is greater than or equal to 5, so round up: 79 becomes 80.",
      "The result is 0.80 (keep the 0 to show it has been rounded to 2 s.f.)."
    ],
    "ex.3.2.prompts": [
      "Where do you start counting significant figures? Do the leading zeros of 0.7963 count?",
      "Once you keep 2 significant figures, what do you look at next in order to decide?",
      "Should you write 0.8 or 0.80? What different information do these two ways of writing carry?"
    ],
    "ex.3.2.twist": "If you round 0.7963 to 3 significant figures, what do you get?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Grade 7–8 test and gifted-student style problems on shifting the decimal point, rounding and recurring decimals. Come on, give them a go!",
    "q.3.1-01.hints": [
      "Multiplying by 0.1 is the same as dividing by which number?",
      "Work out 45 ÷ 10.",
      "How many places does the decimal point of 45 move to the left?"
    ],
    "q.3.1-01.explain": "Multiplying by 0.1 is the same as dividing by 10. So 45 × 0.1 = 45 ÷ 10 = 4.5.",
    "q.3.1-02.hints": [
      "Is multiplying by 0.01 the same as dividing by 10 or 100?",
      "How many places do you need to move the decimal point to the left?",
      "3.7 divided by 100: add zeros to make room for the decimal point."
    ],
    "q.3.1-02.explain": "Multiplying by 0.01 is the same as dividing by 100. 3.7 ÷ 100 = 0.037.",
    "q.3.1-03.hints": [
      "How many tenths (0.1) are there in 8 units?",
      "One unit contains 10 tenths. So how many do 8 units contain?",
      "Dividing by 0.1 is the same as multiplying by which number?"
    ],
    "q.3.1-03.explain": "Dividing by 0.1 is the same as multiplying by 10. So 8 ÷ 0.1 = 8 × 10 = 80.",
    "q.3.1-04.hints": [
      "Is dividing by 0.01 the same as multiplying by 10 or 100?",
      "How many places do you move the decimal point of 0.65 to the right?",
      "What is 0.65 × 100?"
    ],
    "q.3.1-04.explain": "Dividing by 0.01 is the same as multiplying by 100. 0.65 × 100 = 65.",
    "q.3.1-05.hints": [
      "Multiplying by 0.01 is dividing by what?",
      "520 ÷ 100: count how many places the decimal point moves.",
      "Does the final 0 in 5.20 need to be written?"
    ],
    "q.3.1-05.explain": "520 × 0.01 = 520 ÷ 100 = 5.2 (you can write 5.20 but the final zero can be dropped).",
    "q.3.1-06.hints": [
      "When you divide by a number smaller than 1, does the result get bigger or smaller?",
      "How many tenths are there in 6?",
      "Dividing by 0.1 means the same as multiplying by 10."
    ],
    "q.3.1-06.explain": "6 ÷ 0.1 = 6 × 10 = 60. Common mistake: choosing 0.6 because you think dividing by 0.1 makes the number smaller. In fact dividing by a number less than 1 makes the number bigger.",
    "q.3.1-07.hints": [
      "0.1G means 0.1 × G. Which number do you substitute for G?",
      "You need to work out 0.1 × 125.",
      "Multiplying by 0.1 is the same as dividing by 10."
    ],
    "q.3.1-07.explain": "C = 0.1 × 125 = 125 ÷ 10 = 12.5 g.",
    "q.3.1-08.hints": [
      "Each step is equivalent to multiplying or dividing by 10 or 100. Rewrite each step that way.",
      "Multiplying by 0.1 is ÷10; dividing by 0.01 is ×100; dividing by 0.1 is ×10. Put together, the starting number is multiplied by what?",
      "To get back to the starting number, do the inverse operation to 12 500."
    ],
    "q.3.1-08.explain": "÷10, then ×100, then ×10: altogether multiplying by 100. So the starting number = 12 500 ÷ 100 = 125. Check: 125 × 0.1 = 12.5; 12.5 ÷ 0.01 = 1250; 1250 ÷ 0.1 = 12 500 ✓.",
    "q.3.1-09.hints": [
      "First work out what 24 ÷ 0.1 equals.",
      "Work out the value of each calculation and compare it with that result.",
      "Remember: ×0.01 is ÷100; ÷0.01 is ×100."
    ],
    "q.3.1-09.explain": "24 ÷ 0.1 = 240. 24 × 10 = 240 ✓; 2400 × 0.1 = 240 ✓; 2.4 ÷ 0.01 = 240 ✓; 240 × 0.01 = 2.4 ✗; 24 ÷ 0.01 = 2400 ✗.",
    "q.3.1-10.hints": [
      "To disprove a statement, you need an example where the result is NOT smaller than the original number.",
      "Compare the result with the original number in each calculation.",
      "What is special about negative numbers when comparing? Which is greater, −5 or −500?"
    ],
    "q.3.1-10.explain": "−500 × 0.01 = −5 and −5 > −500, so the result is LARGER than the original number. The other three examples all give a smaller result so they do not disprove the statement.",
    "q.3.2-01.hints": [
      "Which number is the first significant figure of 352?",
      "What is the digit immediately to its right, is it smaller or greater than 5?",
      "After rounding, what must the remaining digits be replaced with?"
    ],
    "q.3.2-01.explain": "The first digit is 3 and the digit to its right is 5 so round up to 4, and the remaining digits become 0: 352 ≈ 400.",
    "q.3.2-02.hints": [
      "Are the leading zeros significant figures?",
      "The first significant figure is 8. What is the digit to its right?",
      "7 ≥ 5, so what does 8 become?"
    ],
    "q.3.2-02.explain": "The first significant figure is 8; the digit to its right is 7 (≥ 5) so 8 becomes 9. So 0.0087 ≈ 0.009.",
    "q.3.2-03.hints": [
      "Find the first, second and third significant figures of 0.08069.",
      "The third figure is 6. What is the digit to its right?",
      "9 ≥ 5, so what does 6 become? Don't forget the leading zero."
    ],
    "q.3.2-03.explain": "The first three significant figures are 8, 0, 6. The digit to the right is 9 so 6 becomes 7: 0.0807.",
    "q.3.2-04.hints": [
      "Round 0.238, 576 and 39.76 to 1 significant figure: which numbers do you get?",
      "You get (0.2 × 600) ÷ 40. Work out the numerator first.",
      "What is 120 ÷ 40?"
    ],
    "q.3.2-04.explain": "0.238 ≈ 0.2; 576 ≈ 600; 39.76 ≈ 40. (0.2 × 600) ÷ 40 = 120 ÷ 40 = 3. The exact value is 3.45 so the estimate is quite close.",
    "q.3.2-05.hints": [
      "What are the first two significant figures of 45 150?",
      "The next digit is 1. Round up or keep the same?",
      "Does 45 have the same size as 45 150? What must you do to keep the value?"
    ],
    "q.3.2-05.explain": "2 s.f. is 45, the next digit is 1 so keep it the same. But you must add zeros to keep the correct value: 45 000. Harry's mistake was forgetting the zeros.",
    "q.3.2-06.hints": [
      "Is the zero immediately after the decimal point a significant figure?",
      "Which are the first two significant figures of 0.03284?",
      "The digit to the right of the 2 is 8. Round up or keep the same?"
    ],
    "q.3.2-06.explain": "The first two significant figures are 3 and 2 (leading zeros don't count). 8 ≥ 5 so 2 becomes 3: 0.033. Harry's mistake: treating the leading zero as a significant figure.",
    "q.3.2-07.hints": [
      "Count four significant figures: 2, 0, 9, and which other digit?",
      "The fourth figure is 0, and the digit to its right is 9.",
      "9 ≥ 5 so the digit 0 increases by 1."
    ],
    "q.3.2-07.explain": "The first four significant figures are 2, 0, 9, 0; the next digit is 9 so round up: 209.1.",
    "q.3.2-08.hints": [
      "First work out the exact total 63 475 + 32 486.",
      "The total is a 5-digit number. What are its first two significant figures?",
      "Does the third figure round up? Don't forget to add the zeros."
    ],
    "q.3.2-08.explain": "63 475 + 32 486 = 95 961. The first two significant figures are 9 and 5, the next digit is 9 so 95 becomes 96: 96 000.",
    "q.3.2-09.hints": [
      "Which division gives the mean mass of one peanut?",
      "Work out 150 ÷ 335 with a calculator or by estimating.",
      "The result is about 0.4477... Round to 1 significant figure."
    ],
    "q.3.2-09.explain": "150 ÷ 335 = 0.44776... The first significant figure is 4, the next digit is 4 (< 5) so keep it the same: 0.4 g.",
    "q.3.2-10.hints": [
      "How accurate are the measurements 9.6 and 0.87 (how many significant figures)?",
      "Should a result calculated from measurements be more accurate than the measurements themselves?",
      "Choose a sensible degree of accuracy for the context: how many significant figures?"
    ],
    "q.3.2-10.explain": "The original measurements have only 2 significant figures so a sensible answer is 8.4 m². Keeping 8.352 gives a false sense of accuracy; rounding to 8 loses too much information.",
    "q.ch-01.q": "Find x if x × 0.01 = 3.7 ÷ 0.1.",
    "q.ch-01.hints": [
      "Work out the right-hand side 3.7 ÷ 0.1 first. Dividing by 0.1 is multiplying by what?",
      "The right-hand side equals 37. So x × 0.01 = 37.",
      "To find x, divide 37 by 0.01. Dividing by 0.01 is multiplying by what?"
    ],
    "q.ch-01.explain": "3.7 ÷ 0.1 = 37. From x × 0.01 = 37 we get x = 37 ÷ 0.01 = 37 × 100 = 3700.",
    "q.ch-02.q": "Find x if (x ÷ 0.1) × 0.01 = 4.5.",
    "q.ch-02.hints": [
      "x ÷ 0.1 means x multiplied by which number?",
      "Then multiply by 0.01 (that is, divide by 100). Combining the two steps: is x multiplied or divided by how much?",
      "Combined: x × 10 ÷ 100 = x ÷ 10. So x ÷ 10 = 4.5; find x."
    ],
    "q.ch-02.explain": "(x ÷ 0.1) × 0.01 = x × 10 × 0.01 = x × 0.1 = 4.5, so x = 4.5 ÷ 0.1 = 45. Check: 45 ÷ 0.1 = 450; 450 × 0.01 = 4.5 ✓.",
    "q.ch-03.q": "A water tank holds 25 litres. A tap flows steadily at 0.01 litres every second. How many seconds must the tap run to fill the tank (the tank starts empty)?",
    "q.ch-03.hints": [
      "To find how many seconds are needed, divide the total amount of water by the amount per second. Write that calculation.",
      "That is the division 25 ÷ 0.01.",
      "Dividing by 0.01 is multiplying by 100."
    ],
    "q.ch-03.explain": "Time = 25 ÷ 0.01 = 25 × 100 = 2500 seconds (about 41 minutes 40 seconds).",
    "q.ch-04.q": "The population of a province is 3 456 789 people. Round this population to 2 significant figures.",
    "q.ch-04.hints": [
      "What are the first two significant figures of 3 456 789?",
      "The third figure is 5. Round up or keep the same?",
      "After rounding, how many digits does the number have? Replace the remaining digits with zeros."
    ],
    "q.ch-04.explain": "The first two digits are 3 and 4, the next digit is 5 so round up: 34 becomes 35. Keep the size using 5 zeros: 3 500 000.",
    "q.ch-05.q": "Round the number 0.0049951 to 3 significant figures. Write the result as a decimal.",
    "q.ch-05.hints": [
      "What is the first significant figure of 0.0049951? What are the first three significant figures?",
      "The digit to the right of the third significant figure is 5. What happens to 499?",
      "499 rounds up to 500. How can the result 0.00500 be written more simply?"
    ],
    "q.ch-05.explain": "The first three significant figures are 4, 9, 9; the next digit is 5 so round up: 499 becomes 500 (carrying to the left). The result is 0.00500 = 0.005.",
    "q.ch-06.q": "A car travels 100 km in 1 hour 45 minutes. Work out the car's average speed, rounded to 1 decimal place.",
    "q.ch-06.hints": [
      "Convert 1 hour 45 minutes to hours. What is 45 minutes in hours (as a decimal)?",
      "The time is 1.75 hours. Speed = distance ÷ time.",
      "Work out 100 ÷ 1.75 and round to 1 decimal place."
    ],
    "q.ch-06.explain": "45 minutes = 0.75 hours so the time is 1.75 hours. v = 100 ÷ 1.75 = 57.142857... ≈ 57.1 km/h.",
    "q.ch-07.q": "At a currency exchange counter, 1 USD exchanges for 25 450 dong. Lan has 3 120 000 dong. What is the greatest whole number of USD Lan can get (round down so as not to exceed her money)? Hint: do the division and take the whole-number part.",
    "q.ch-07.hints": [
      "Which division gives the number of USD she can get?",
      "Work out 3 120 000 ÷ 25 450 (you can estimate 3 120 000 ÷ 25 000).",
      "The quotient is about 122.6. The question asks for the greatest whole number of USD not exceeding her money: take the whole-number part or round up?"
    ],
    "q.ch-07.explain": "3 120 000 ÷ 25 450 ≈ 122.59. Since she cannot exchange more than the money she has, she can only exchange 122 USD (round down, not up to 123). Rounding must suit the real-life context.",
    "q.ch-08.q": "Write 2/11 as the infinite recurring decimal 0.181818... Which digit is the 50th decimal place (after the decimal point)?",
    "q.ch-08.hints": [
      "What is the repeating block of 0.181818... and how many digits long is it?",
      "The digits in odd places are 1, in even places 8. Is place 50 odd or even?",
      "Place 50 is even, so which digit is it?"
    ],
    "q.ch-08.explain": "2/11 = 0.(18) with a 2-digit repeating block: odd places are 1, even places are 8. 50 is even so the 50th digit is 8.",
    "q.ch-09.q": "Given 5/7 = 0.714285714285... (repeating block 714285). Which digit is the 100th decimal place?",
    "q.ch-09.hints": [
      "How many digits are in the repeating block 714285?",
      "Divide 100 by the length of the block and find the remainder.",
      "The remainder is 4, meaning the 4th digit of the block. What is the 4th digit of 714285?"
    ],
    "q.ch-09.explain": "The block is 6 digits long. 100 = 6 × 16 + 4 so the 100th digit is the 4th digit of the block 7-1-4-2-8-5, which is 2.",
    "q.ch-10.q": "Calculate in a sensible way: 2.5 × 37.6 × 0.4.",
    "q.ch-10.hints": [
      "Multiplication is commutative and associative. Which two factors multiply to give a nice result?",
      "What is 2.5 × 0.4?",
      "What remains is 1 × 37.6."
    ],
    "q.ch-10.explain": "Regroup: (2.5 × 0.4) × 37.6 = 1 × 37.6 = 37.6."
  },
  vi: {
    "q.3.1-01.q": "Tính 45 × 0,1.",
    "q.3.1-02.q": "Tính 3,7 × 0,01.",
    "q.3.1-03.q": "Tính 8 ÷ 0,1.",
    "q.3.1-04.q": "Tính 0,65 ÷ 0,01.",
    "q.3.1-05.q": "Tính 520 × 0,01.",
    "q.3.1-06.q": "Tính 6 ÷ 0,1. Đáp án nào đúng?",
    "q.3.1-07.q": "Một thợ kim hoàn dùng công thức C = 0,1G để tìm khối lượng đồng trong vàng xanh, với G là khối lượng vàng xanh. Tìm khối lượng đồng trong 125 g vàng xanh.",
    "q.3.1-08.q": "Razi nghĩ ra một số. Bạn nhân số đó với 0,1, lấy kết quả chia cho 0,01, rồi lại chia kết quả đó cho 0,1. Đáp số cuối cùng của bạn là 12 500. Bạn Razi đã nghĩ ra số nào?",
    "q.3.1-09.q": "Những phép tính nào dưới đây có cùng giá trị với 24 ÷ 0,1? Chọn tất cả đáp án đúng.",
    "q.3.1-10.q": "Harsha nói: ‘Khi nhân một số với 0,01 thì luôn được số nhỏ hơn.’ Phép tính nào cho thấy bạn ấy KHÔNG đúng?",
    "q.3.2-01.q": "Làm tròn 352 đến 1 chữ số có nghĩa.",
    "q.3.2-02.q": "Làm tròn 0,0087 đến 1 chữ số có nghĩa.",
    "q.3.2-03.q": "Làm tròn 0,08069 đến 3 chữ số có nghĩa.",
    "q.3.2-04.q": "Ước lượng giá trị của (0,238 × 576) ÷ 39,76 bằng cách làm tròn mỗi số đến 1 chữ số có nghĩa.",
    "q.3.2-05.q": "Harry làm tròn 45 150 đến 2 chữ số có nghĩa và viết 45. Đáp án đúng là gì?",
    "q.3.2-06.q": "Harry làm tròn 0,03284 đến 2 chữ số có nghĩa và viết 0,03. Đáp án đúng là gì?",
    "q.3.2-07.q": "Làm tròn 209,095046 đến 4 chữ số có nghĩa.",
    "q.3.2-08.q": "Tại một trận bóng đá có 63 475 cổ động viên của một đội và 32 486 cổ động viên của đội kia. Tổng cộng có bao nhiêu cổ động viên? Viết đáp số đã làm tròn đến 2 chữ số có nghĩa.",
    "q.3.2-09.q": "Một túi đậu phộng nặng 150 g và chứa 335 hạt. Tính khối lượng trung bình của một hạt, làm tròn đến 1 chữ số có nghĩa.",
    "q.3.2-10.q": "Hai cạnh của một hình chữ nhật là 9,6 m và 0,87 m nên 9,6 × 0,87 = 8,352. Zara bảo ghi diện tích là 8,352 m². Sofia bảo cả hai số đo đều có 2 chữ số có nghĩa nên ghi 8,4 m². Ai hợp lý hơn?",
    "q.3.2-10.choices": [
      "Sofia: 8,4 m², vì đáp số không nên chính xác hơn các số đo",
      "Zara: 8,352 m², vì máy tính cho đáp số chính xác",
      "Sofia: 8 m², vì 1 chữ số có nghĩa luôn an toàn nhất",
      "Cả hai đều hợp lý như nhau"
    ]
  }
});
