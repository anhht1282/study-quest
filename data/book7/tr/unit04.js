window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 4,
  en: {
    "q.ch-07.howto": "□ is a hidden digit in the number 7.□4. Enter the smallest digit □ that makes 7.□4 greater than 7.35.",
    "u.realm": "Decimal Treasure Cave",
    "u.story": "You find a treasure cave: every chest holds gold, silver and gems recorded as decimals. You must compare, add, subtract, multiply and divide exactly to share the treasure fairly.",
    "g.0.def": "A number with a decimal point separating the whole-number part and the decimal part.",
    "g.1.def": "The position of a digit after the decimal point.",
    "g.2.def": "The way of dividing in which the quotient is written above.",
    "g.3.def": "Calculating approximately using rounded numbers.",
    "g.4.def": "A calculation done the other way round to check a result.",
    "g.5.def": "For example 0.5 = 0.50.",
    "s.4.1.learn": [
      "Compare from left to right: the whole-number part first, then tenths, hundredths...",
      "Adding zeros at the end of the decimal part does not change the value: 4.2 = 4.20.",
      "Write the numbers with the same number of decimal places and then compare them like whole numbers.",
      "More digits does not necessarily mean larger: 2.19 < 2.205."
    ],
    "ex.4.1.q": "Put 4.23, 4.6, 4.179 in order from smallest to largest.",
    "ex.4.1.steps": [
      "Write 4.230, 4.600, 4.179",
      "Compare 230, 600, 179",
      "4.179 < 4.23 < 4.6"
    ],
    "ex.4.1.prompts": [
      "The numbers have different numbers of decimal places; what do you do to make them the same length?",
      "When they are the same length, which part of the numbers do you only need to compare?",
      "Put them in order from smallest to largest and then write them again using the original numbers."
    ],
    "ex.4.1.twist": "If you add the number 4.2 to the list and order from smallest to largest, which number is second?",
    "s.4.2.learn": [
      "Line up the decimal points in a column.",
      "Add zeros to make up the decimal places when needed.",
      "Mental method: split into the whole-number part and the decimal part.",
      "Round then compensate: 7.5 + 4.8 = 7.5 + 5 − 0.2."
    ],
    "ex.4.2.q": "Work out 8.3 − 2.9.",
    "ex.4.2.steps": [
      "Whole numbers: 8 − 2 = 6",
      "Decimals: 0.3 − 0.9 = −0.6",
      "6 − 0.6 = 5.4"
    ],
    "ex.4.2.prompts": [
      "Split each number into its whole-number part and decimal part. What do you get when you subtract the two whole-number parts?",
      "What is unusual when you subtract the two decimal parts? What does it mean when the number being subtracted is bigger than the one it is taken from?",
      "Combine the two results you have: what is the answer?"
    ],
    "ex.4.2.twist": "If you swap the two numbers and work out 2.9 − 8.3, what is the result?",
    "s.4.3.learn": [
      "Ignore the decimal points and multiply as whole numbers.",
      "Put the decimal point back: the result has as many decimal places as the question has.",
      "Multiplying by 9 is multiplying by 10 and then subtracting the number.",
      "Estimate to check the position of the decimal point."
    ],
    "ex.4.3.q": "Work out 476 × 3.7.",
    "ex.4.3.steps": [
      "476 × 37 = 17 612",
      "The question has 1 decimal place",
      "1761.2"
    ],
    "ex.4.3.prompts": [
      "Temporarily ignore the decimal point and multiply two whole numbers: 476 times which number?",
      "In the original question, how many decimal places do the two factors have altogether?",
      "Put the decimal point in the product so that it has exactly that many decimal places."
    ],
    "ex.4.3.twist": "If it changes to 476 × 0.37, what is the result?",
    "s.4.4.learn": [
      "Short division: keep the decimal point of the quotient in line with the dividend.",
      "Add zeros at the end of the dividend if the division does not finish.",
      "Rounding: divide to one more decimal place and only then round.",
      "Check by the inverse multiplication."
    ],
    "ex.4.4.q": "Work out 8.46 ÷ 7, rounded to 2 decimal places.",
    "ex.4.4.steps": [
      "8.460 ÷ 7 = 1.208…",
      "The 3rd digit is 8 so round up",
      "1.21"
    ],
    "ex.4.4.prompts": [
      "To round to 2 decimal places, to which decimal place do you need to divide?",
      "What is the third digit? Is it greater or less than 5?",
      "Write the rounded result."
    ],
    "ex.4.4.twist": "If you round 8.46 ÷ 7 to 1 decimal place, what do you get?",
    "s.4.5.learn": [
      "Multiplying by 0.1 is dividing by 10; 0.25 is one quarter.",
      "Multiplying by 9 or 99: multiply by 10 or 100 and then subtract.",
      "Round the number and then compensate for the difference.",
      "Swap and group the factors to get round numbers."
    ],
    "ex.4.5.q": "Work out 3.5 × 99.",
    "ex.4.5.steps": [
      "3.5 × 100 = 350",
      "350 − 3.5 = 346.5"
    ],
    "ex.4.5.prompts": [
      "Which round number is 99 close to? How can you write 99 using that number?",
      "Having multiplied by the round number, which part do you need to put back to get the exact result?"
    ],
    "ex.4.5.twist": "If it changes to 3.5 × 101, what is the result?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Quick calculation, finding x and word problems with decimals.",
    "q.4.1-01.hints": [
      "Are the whole-number parts of the two numbers the same?",
      "Compare the tenths: 0 and 2.",
      "0 < 2 so which number is smaller?"
    ],
    "q.4.1-01.explain": "Same whole-number part 6; tenths 0 < 2 so 6.03 < 6.24.",
    "q.4.1-02.hints": [
      "Write 9.2 as 9.20 so they have the same number of decimal places.",
      "Compare 9.20 and 9.01 in the tenths place.",
      "How does 2 compare with 0?"
    ],
    "q.4.1-02.explain": "9.20 > 9.01 because the tenths digit 2 > 0.",
    "q.4.1-03.hints": [
      "Compare the tenths first: 1 and 2.",
      "Do not compare '19' with '205' as whole numbers.",
      "Write 2.190 and 2.205."
    ],
    "q.4.1-03.explain": "2.19 = 2.190 < 2.205 because the tenths digit 1 < 2. A common mistake: thinking that more digits, or '19 > 2', makes it larger.",
    "q.4.1-04.hints": [
      "Give all three numbers 3 decimal places: 4.230, 4.600, 4.179.",
      "Compare the part after the decimal point: 230, 600, 179.",
      "Which number is smallest?"
    ],
    "q.4.1-04.explain": "4.230; 4.600; 4.179: 179 is the smallest so 4.179.",
    "q.4.1-05.hints": [
      "Does adding a zero at the end of the decimal part change the value?",
      "Do 9.58 and 9.580 have the same number of thousandths when written in full?",
      "Are the two numbers equal?"
    ],
    "q.4.1-05.explain": "A zero at the end of the decimal part does not change the value: 9.58 = 9.580.",
    "q.4.1-06.hints": [
      "Write 0.49 and 0.51 as 0.490 and 0.510.",
      "The number with 1 decimal place in between is 0.5.",
      "Does 0.5 = 0.50 lie between 0.49 and 0.51?"
    ],
    "q.4.1-06.explain": "0.49 < 0.50 < 0.51 so 0.5.",
    "q.4.1-07.hints": [
      "Write them all with 4 decimal places: 0.0720, 0.0600, 0.7000, 0.0702.",
      "Put them in order from largest to smallest.",
      "Which number is in second place?"
    ],
    "q.4.1-07.explain": "In descending order: 0.7; 0.072; 0.0702; 0.06. The second largest is 0.072.",
    "q.4.1-08.hints": [
      "Write 5.34 as 5.340.",
      "Compare the hundredths: d with 4.",
      "d must be less than 4 — what is the largest value?"
    ],
    "q.4.1-08.explain": "5.3d8 < 5.340 needs d < 4 (if d = 4 then 5.348 > 5.340). The largest is d = 3.",
    "q.4.1-09.hints": [
      "Does adding a zero at the end of the decimal part change the value?",
      "When the numbers have the same number of decimal places, the part after the decimal point is a whole number in the same unit.",
      "So is comparing whole numbers reasonable?"
    ],
    "q.4.1-09.explain": "After writing the same number of decimal places, every number counts in the same unit (thousandths), so comparing 230, 600, 179 is valid.",
    "q.4.2-01.hints": [
      "Line up the decimal points: 3.40 + 5.28.",
      "Add from right to left.",
      "Hundredths: 0 + 8."
    ],
    "q.4.2-01.explain": "3.40 + 5.28 = 8.68.",
    "q.4.2-02.hints": [
      "Write 12.50 − 4.37 with the decimal points lined up.",
      "Hundredths: 0 − 7 needs borrowing.",
      "12.50 − 4.37 = ?"
    ],
    "q.4.2-02.explain": "12.50 − 4.37 = 8.13.",
    "q.4.2-03.hints": [
      "Write 1 = 1.000.",
      "1.000 − 0.284.",
      "The digits added to 0.284 must make 1.000."
    ],
    "q.4.2-03.explain": "1.000 − 0.284 = 0.716.",
    "q.4.2-04.hints": [
      "Whole-number part: 14 − 6 = ?",
      "Decimal part: 0.4 − 0.5 = ?",
      "Combine the two results: 8 + (−0.1)."
    ],
    "q.4.2-04.explain": "14 − 6 = 8; 0.4 − 0.5 = −0.1; 8 − 0.1 = 7.9.",
    "q.4.2-05.hints": [
      "Whole-number part 15 − 5 = ?",
      "Decimal part 0.1 − 0.7 = ?",
      "10 − 0.6 = ?"
    ],
    "q.4.2-05.explain": "10 + (0.1 − 0.7) = 10 − 0.6 = 9.4.",
    "q.4.2-06.hints": [
      "Do the two numbers have the same number of decimal places?",
      "Write 5.60 + 0.27.",
      "Add with the decimal points lined up."
    ],
    "q.4.2-06.explain": "5.60 + 0.27 = 5.87. A mistake: aligning on the right gives 56 + 27 = 83 → 8.3; you must line up the decimal points.",
    "q.4.2-07.hints": [
      "You added 5 instead of 4.8 — did you add too much or too little?",
      "If you added 0.2 too much, what must you do to the result?",
      "12.5 − 0.2 = ?"
    ],
    "q.4.2-07.explain": "7.5 + 5 adds 0.2 too much so you must subtract 0.2: 12.5 − 0.2 = 12.3.",
    "q.4.2-08.hints": [
      "Which subtraction tells you a?",
      "a = 10.1 − 2.35.",
      "Write 10.10 − 2.35."
    ],
    "q.4.2-08.explain": "a = 10.10 − 2.35 = 7.75.",
    "q.4.2-09.hints": [
      "Work out the total mass bought.",
      "2.75 + 1.8 + 0.95 = ?",
      "8 − total = ?"
    ],
    "q.4.2-09.explain": "Total = 5.5 kg; remaining 8 − 5.5 = 2.5 kg.",
    "q.4.2-10.hints": [
      "Write 100 = 100.00.",
      "Borrow from the units place in turn.",
      "37.58 + ? = 100."
    ],
    "q.4.2-10.explain": "100.00 − 37.58 = 62.42.",
    "q.4.3-01.hints": [
      "Ignore the decimal point: 2 × 4 = ?",
      "How many digits are after the decimal point in the question?",
      "The result must also have 3 decimal places."
    ],
    "q.4.3-01.explain": "2 × 4 = 8; there are 3 decimal places so 0.008.",
    "q.4.3-02.hints": [
      "30 × 6 = ?",
      "There are 2 decimal places.",
      "180 → 1.80 = 1.8."
    ],
    "q.4.3-02.explain": "30 × 6 = 180 → 1.80 = 1.8.",
    "q.4.3-03.hints": [
      "36 × 5 = ?",
      "The question has 1 decimal place.",
      "180 → 18.0."
    ],
    "q.4.3-03.explain": "36 × 5 = 180; 1 decimal place: 18.0 = 18.",
    "q.4.3-04.hints": [
      "Ignore the decimal point: 476 × 37.",
      "476 × 7 = 3332; 476 × 30 = 14280.",
      "Add them, then put the decimal point after 1 digit from the right."
    ],
    "q.4.3-04.explain": "476 × 37 = 17612; one decimal place: 1761.2.",
    "q.4.3-05.hints": [
      "125 × 8 = ?",
      "There are 2 decimal places.",
      "1000 → 10.00."
    ],
    "q.4.3-05.explain": "125 × 8 = 1000; 2 decimal places: 10.00 = 10.",
    "q.4.3-06.hints": [
      "7 × 6 = ?",
      "How many decimal places does the question have?",
      "Where do you put the decimal point in 42?"
    ],
    "q.4.3-06.explain": "7 × 6 = 42, one decimal place so 4.2. Mistakes: forgetting the decimal point (42) or misplacing it (0.42).",
    "q.4.3-07.hints": [
      "4.6 × 10 = ?",
      "46 − 4.6 = ?",
      "Compare with 46 × 9 = 414."
    ],
    "q.4.3-07.explain": "46 − 4.6 = 41.4.",
    "q.4.3-08.hints": [
      "Write 9 = 10 − 1.",
      "12.6 × 10 = 126.",
      "126 − 12.6 = ?"
    ],
    "q.4.3-08.explain": "126 − 12.6 = 113.4.",
    "q.4.3-09.hints": [
      "How many times smaller is 4.76 than 476?",
      "Divide 17 612 by 100.",
      "Move the decimal point 2 places to the left."
    ],
    "q.4.3-09.explain": "4.76 = 476 ÷ 100 so the result = 17 612 ÷ 100 = 176.12.",
    "q.4.4-01.hints": [
      "Keep the decimal point in line with the dividend.",
      "4 ÷ 2 = 2, then 2 ÷ 2, 5 ÷ 2 remainder 1...",
      "The result has 3 decimal places."
    ],
    "q.4.4-01.explain": "4.258 ÷ 2 = 2.129.",
    "q.4.4-02.hints": [
      "96 ÷ 4 = ?",
      "The dividend has 1 decimal place.",
      "24 → 2.4."
    ],
    "q.4.4-02.explain": "96 ÷ 4 = 24 so 9.6 ÷ 4 = 2.4.",
    "q.4.4-03.hints": [
      "75 ÷ 5 = ?",
      "15 → place the decimal point.",
      "The dividend has 1 decimal place."
    ],
    "q.4.4-03.explain": "75 ÷ 5 = 15 so 7.5 ÷ 5 = 1.5.",
    "q.4.4-04.hints": [
      "How many times does 18 go into 41?",
      "Put the decimal point in the quotient in line.",
      "Keep dividing until it finishes, adding zeros if needed."
    ],
    "q.4.4-04.explain": "41.481 ÷ 18 = 2.3045. Check: 2.3045 × 18 = 41.481.",
    "q.4.4-05.hints": [
      "Work to 3 decimal places: 1.208…",
      "The 3rd digit is 8.",
      "Round 1.208 to 2 decimal places."
    ],
    "q.4.4-05.explain": "8.46 ÷ 7 = 1.208… ≈ 1.21.",
    "q.4.4-06.hints": [
      "7.62 ÷ 5 = 1.524.",
      "The 2nd digit after the decimal point is 2.",
      "2 < 5 so keep it the same."
    ],
    "q.4.4-06.explain": "7.62 ÷ 5 = 1.524 ≈ 1.5.",
    "q.4.4-07.hints": [
      "84 ÷ 4 = ?",
      "The dividend has 2 decimal places.",
      "21 → write 2 decimal places."
    ],
    "q.4.4-07.explain": "84 ÷ 4 = 21 so 0.84 ÷ 4 = 0.21. Mistakes: 2.1 (misplaced decimal point) or 0.021.",
    "q.4.4-08.hints": [
      "Work to 4 decimal places.",
      "8.6 ÷ 13 = 0.6615…",
      "Round 0.6615 to 3 decimal places."
    ],
    "q.4.4-08.explain": "8.6 ÷ 13 = 0.66153… ≈ 0.662.",
    "q.4.4-09.hints": [
      "Which operation is the inverse of dividing by 6?",
      "n = 1.507 × 6.",
      "1507 × 6 = ?"
    ],
    "q.4.4-09.explain": "n = 1.507 × 6 = 9.042.",
    "q.4.4-10.hints": [
      "Which calculation?",
      "25.5 ÷ 6.",
      "Keep dividing until it finishes."
    ],
    "q.4.4-10.explain": "25.5 ÷ 6 = 4.25.",
    "q.4.5-01.hints": [
      "0.1 is one what?",
      "Divide 3450 by 10.",
      "Move the decimal point 1 place to the left."
    ],
    "q.4.5-01.explain": "0.1 × 3450 = 3450 ÷ 10 = 345.",
    "q.4.5-02.hints": [
      "0.3 = 3 × 0.1.",
      "0.1 × 3450 = 345.",
      "3 × 345 = ?"
    ],
    "q.4.5-02.explain": "0.3 × 3450 = 3 × 345 = 1035.",
    "q.4.5-03.hints": [
      "6.8 × 10 = ?",
      "68 − 6.8 = ?",
      "Check with 68 × 9 = 612."
    ],
    "q.4.5-03.explain": "68 − 6.8 = 61.2.",
    "q.4.5-04.hints": [
      "47 − 4.7.",
      "Move the decimal point when multiplying by 10.",
      "47 − 4.7 = ?"
    ],
    "q.4.5-04.explain": "47 − 4.7 = 42.3.",
    "q.4.5-05.hints": [
      "7.3 + 5 = ?",
      "By how much is 5 greater than 4.9?",
      "12.3 − 0.1."
    ],
    "q.4.5-05.explain": "7.3 + 5 = 12.3, which adds 0.1 too much so 12.2.",
    "q.4.5-06.hints": [
      "Subtracting 3 instead of 2.9: did you subtract too much or too little?",
      "If you subtracted 0.1 too much, how must the result be adjusted?",
      "8.2 − 3 = 5.2."
    ],
    "q.4.5-06.explain": "8.2 − 3 = 5.2 but 0.1 too much was subtracted, so add it back: 5.3. Mistake: subtracting another 0.1 (5.1).",
    "q.4.5-07.hints": [
      "3.5 × 100 = ?",
      "350 − 3.5 = ?",
      "99 = 100 − 1."
    ],
    "q.4.5-07.explain": "350 − 3.5 = 346.5.",
    "q.4.5-08.hints": [
      "0.25 is one what?",
      "36 ÷ 4 = ?",
      "The result?"
    ],
    "q.4.5-08.explain": "0.25 × 36 = 36 ÷ 4 = 9.",
    "q.4.5-09.hints": [
      "Which two numbers multiply to give a round number?",
      "2.5 × 4 = ?",
      "10 × 7.3 = ?"
    ],
    "q.4.5-09.explain": "2.5 × 4 = 10; 10 × 7.3 = 73.",
    "q.ch-01.q": "Calculate quickly: 0.25 × 3.7 × 40.",
    "q.ch-01.hints": [
      "Which two factors do you group to multiply to a round number?",
      "0.25 × 40 = ?",
      "10 × 3.7 = ?"
    ],
    "q.ch-01.explain": "0.25 × 40 = 10; 10 × 3.7 = 37.",
    "q.ch-02.q": "Work out: 0.5 + 1.5 + 2.5 + … + 9.5 (10 terms).",
    "q.ch-02.hints": [
      "Pair the first and last: 0.5 + 9.5 = ?",
      "How many pairs are there?",
      "5 pairs, each equal to 10."
    ],
    "q.ch-02.explain": "0.5 + 9.5 = 10; 1.5 + 8.5 = 10; … there are 5 pairs so the total is 50.",
    "q.ch-03.q": "Find x if x + 3.75 = 10.2 − 4.05.",
    "q.ch-03.hints": [
      "Work out the right-hand side first.",
      "10.2 − 4.05 = 6.15.",
      "x = 6.15 − 3.75."
    ],
    "q.ch-03.explain": "10.2 − 4.05 = 6.15; x = 6.15 − 3.75 = 2.4.",
    "q.ch-04.q": "Find x if 4 × x − 1.2 = 5.6.",
    "q.ch-04.hints": [
      "Add 1.2 to both sides to remove the −1.2.",
      "4 × x = 6.8.",
      "x = 6.8 ÷ 4."
    ],
    "q.ch-04.explain": "4x = 5.6 + 1.2 = 6.8; x = 1.7.",
    "q.ch-05.q": "A household uses 150 kWh of electricity. The first 100 kWh cost 1.8 thousand dong/kWh and the next 50 kWh cost 2.4 thousand dong/kWh. 10% VAT is added. What is the total to pay, in thousand dong?",
    "q.ch-05.hints": [
      "Work out the cost of the first 100 kWh.",
      "Cost of the next 50 kWh: 50 × 2.4 = ?",
      "Add the two amounts then add 10% (multiply by 1.1)."
    ],
    "q.ch-05.explain": "100 × 1.8 = 180; 50 × 2.4 = 120; total 300; adding 10% = 330 thousand dong.",
    "q.ch-06.q": "This month your family uses 12.5 m³ of water. The first 8 m³ cost 6.2 thousand dong/m³ and the rest cost 9.6 thousand dong/m³. How many thousand dong must be paid?",
    "q.ch-06.hints": [
      "How many m³ is the rest?",
      "8 × 6.2 = 49.6; 4.5 × 9.6 = ?",
      "Add the two amounts."
    ],
    "q.ch-06.explain": "12.5 − 8 = 4.5 m³; 8 × 6.2 = 49.6; 4.5 × 9.6 = 43.2; total 92.8 thousand dong.",
    "q.ch-07.q": "Find the smallest digit □ such that 7.□4 > 7.35.",
    "q.ch-07.hints": [
      "Compare the tenths: □ with 3.",
      "If □ = 3, how does 7.34 compare with 7.35?",
      "What is the smallest digit that works?"
    ],
    "q.ch-07.explain": "□ = 3 gives 7.34 < 7.35; □ = 4 gives 7.44 > 7.35. The smallest is 4.",
    "q.ch-08.q": "Let a = 2.0□3 and b = 2.□03 (the two □ digits are the same and not 0). Compare a and b.",
    "q.ch-08.choices": [
      "a > b",
      "b > a",
      "Depends on □",
      "a = b"
    ],
    "q.ch-08.hints": [
      "Compare the tenths: 0 and □.",
      "If □ ≥ 1, how does the tenths digit of b compare with a's?",
      "b is greater than a right at the tenths place."
    ],
    "q.ch-08.explain": "Tenths: a has 0, b has □ ≥ 1, so b > a.",
    "q.ch-09.q": "25.5 kg of rice is shared equally into 6 bags and then 0.25 kg is added to each bag. How many kg does each bag weigh?",
    "q.ch-09.hints": [
      "Each bag at first weighs: 25.5 ÷ 6.",
      "25.5 ÷ 6 = 4.25.",
      "Add 0.25."
    ],
    "q.ch-09.explain": "25.5 ÷ 6 = 4.25; 4.25 + 0.25 = 4.5 kg.",
    "q.ch-10.q": "Estimate 19.8 × 4.1 by rounding each number to the nearest whole number.",
    "q.ch-10.hints": [
      "What does 19.8 round to?",
      "What does 4.1 round to?",
      "20 × 4 = ?"
    ],
    "q.ch-10.explain": "19.8 ≈ 20; 4.1 ≈ 4; 20 × 4 = 80."
  },
  vi: {
    "q.4.2-04.howto": "Nhập kết quả của 14,4 − 6,5. Cách của Zara là một cách làm, nhưng em có thể dùng bất kì cách đúng nào.",
    "q.4.1-08.howto": "d là một chữ số bị thiếu trong 5,3d8. Nhập chữ số d lớn nhất mà vẫn làm cho 5,3d8 nhỏ hơn 5,34.",
    "q.4.1-01.q": "Chọn dấu đúng: 6,03 ? 6,24",
    "q.4.1-02.q": "Chọn dấu đúng: 9,2 ? 9,01",
    "q.4.1-03.q": "Số nào lớn hơn, 2,19 hay 2,205?",
    "q.4.1-03.choices": [
      "2,19, vì 19 > 2",
      "2,205",
      "Hai số bằng nhau"
    ],
    "q.4.1-04.q": "Số nào bé nhất trong 4,23; 4,6 và 4,179?",
    "q.4.1-05.q": "Chọn dấu đúng: 9,58 ? 9,580",
    "q.4.1-06.q": "Viết một số thập phân có một chữ số thập phân nằm giữa 0,49 và 0,51.",
    "q.4.1-07.q": "Trong các số 0,072; 0,06; 0,7 và 0,0702, số nào lớn thứ hai?",
    "q.4.1-08.q": "Chữ số d lớn nhất để 5,3d8 < 5,34 là bao nhiêu?",
    "q.4.1-09.q": "Ulrika sắp xếp 4,23; 4,6; 4,179 bằng cách viết 4,230; 4,600; 4,179 rồi so sánh 230, 600, 179. Vì sao cách làm này hợp lệ?",
    "q.4.1-09.choices": [
      "Thêm số 0 không đổi giá trị và bây giờ mọi số đều đếm theo cùng một đơn vị (phần nghìn)",
      "Vì số dài nhất luôn là số lớn nhất",
      "Vì các số 0 làm số lớn hơn",
      "Cách làm này không hợp lệ"
    ],
    "q.4.2-01.q": "Tính 3,4 + 5,28.",
    "q.4.2-02.q": "Tính 12,5 − 4,37.",
    "q.4.2-03.q": "Tính 1 − 0,284.",
    "q.4.2-04.q": "Dùng cách của Zara: 14,4 − 6,5 (phần nguyên trước, rồi phần thập phân).",
    "q.4.2-05.q": "Tính 15,1 − 5,7.",
    "q.4.2-06.q": "Tính 5,6 + 0,27.",
    "q.4.2-06.choices": ["8,3", "5,87", "5,33", "6,2"],
    "q.4.2-07.q": "Zara tính 7,5 + 4,8 bằng cách lấy 7,5 + 5 = 12,5 rồi cộng thêm 0,2 được 12,7. Bạn ấy làm đúng không?",
    "q.4.2-07.choices": [
      "Đúng, 12,7",
      "Sai, bạn ấy phải trừ 0,2 để được 12,3",
      "Sai, đáp số là 12,5",
      "Sai, đáp số là 11,3"
    ],
    "q.4.2-08.q": "Tìm a biết a + 2,35 = 10,1.",
    "q.4.2-09.q": "Hà chỉ mang được tối đa 8 kg trái cây. Bạn ấy đã mua 2,75 kg, 1,8 kg và 0,95 kg. Hà còn mua thêm được nhiều nhất bao nhiêu kg trái cây?",
    "q.4.2-10.q": "Tính 100 − 37,58.",
    "q.4.3-01.q": "Tính 0,002 × 4.",
    "q.4.3-02.q": "Tính 30 × 0,06.",
    "q.4.3-03.q": "Tính 3,6 × 5.",
    "q.4.3-04.q": "Tính 476 × 3,7.",
    "q.4.3-05.q": "Tính 1,25 × 8.",
    "q.4.3-06.q": "Tính 0,7 × 6.",
    "q.4.3-06.choices": ["4,2", "42", "0,42", "4,02"],
    "q.4.3-07.q": "Dùng 4,6 × 9 = 4,6 × 10 − 4,6 để tính 4,6 × 9.",
    "q.4.3-08.q": "Tính 12,6 × 9.",
    "q.4.3-09.q": "Biết 476 × 37 = 17 612, hãy tính 4,76 × 37.",
    "q.4.4-01.q": "Tính 4,258 ÷ 2.",
    "q.4.4-02.q": "Tính 9,6 ÷ 4.",
    "q.4.4-03.q": "Tính 7,5 ÷ 5.",
    "q.4.4-04.q": "Tính 41,481 ÷ 18.",
    "q.4.4-05.q": "Tính 8,46 ÷ 7, làm tròn đến 2 chữ số thập phân.",
    "q.4.4-06.q": "Tính 7,62 ÷ 5, làm tròn đến 1 chữ số thập phân.",
    "q.4.4-07.q": "Tính 0,84 ÷ 4.",
    "q.4.4-07.choices": ["0,21", "2,1", "0,021", "0,0021"],
    "q.4.4-08.q": "Tính 8,6 ÷ 13, làm tròn đến 3 chữ số thập phân.",
    "q.4.4-09.q": "Tìm số n biết n ÷ 6 = 1,507.",
    "q.4.4-10.q": "Một sợi dây dài 25,5 m được cắt thành 6 đoạn bằng nhau. Mỗi đoạn dài bao nhiêu?",
    "q.4.5-01.q": "Alek tiêu 0,1 của 3450 đô la để mua đá. Đó là bao nhiêu đô la?",
    "q.4.5-02.q": "Alek tiêu 0,3 của 3450 đô la để mua bạc. Đó là bao nhiêu đô la?",
    "q.4.5-03.q": "Tính 6,8 × 9 bằng cách dùng 6,8 × 10 − 6,8.",
    "q.4.5-04.q": "Tính 4,7 × 9.",
    "q.4.5-05.q": "Tính 7,3 + 4,9 bằng cách cộng 5 rồi điều chỉnh.",
    "q.4.5-06.q": "Để tính 8,2 − 2,9, Sam làm 8,2 − 3. Bước tiếp theo là gì?",
    "q.4.5-06.choices": [
      "Trừ 0,1: 5,1",
      "Cộng 0,1: 5,3",
      "Giữ nguyên: 5,2",
      "Cộng 0,2: 5,4"
    ],
    "q.4.5-07.q": "Tính 3,5 × 99 bằng cách dùng 3,5 × 100 − 3,5.",
    "q.4.5-08.q": "Tính 0,25 × 36 bằng cách coi 0,25 là một phần tư.",
    "q.4.5-09.q": "Tính 2,5 × 7,3 × 4 theo thứ tự dễ nhất."
  }
});
