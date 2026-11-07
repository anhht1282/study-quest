window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 4,
  en: {
    "u.realm": "Decimal Diamond Cave",
    "u.story": "In the Decimal Diamond Cave, every gemstone has a mass and a value given as a decimal. A jeweller who gets just one digit after the decimal point wrong loses a whole fortune! Order, multiply, divide and calculate quickly with decimals to become the best jeweller.",
    "g.0.def": "Putting numbers in order from smallest to largest or the other way round.",
    "g.1.def": "The value of a digit depends on its position: tens, units, tenths, hundredths...",
    "g.2.def": "Rounding numbers to calculate quickly, used to check whether a result is sensible.",
    "g.3.def": "A different calculation with the same result, for example multiplying both the dividend and the divisor by 10.",
    "g.4.def": "A compact way of dividing, used when the divisor is a small whole number.",
    "g.5.def": "Using the inverse operation (multiplying to check a division) to see whether a result is right.",
    "g.6.def": "A number that is multiplied by another to give a product; splitting a decimal into factors makes calculating easier.",
    "g.7.def": "A rule that tells you how to get from one term of a sequence to the next.",
    "s.4.1.learn": [
      "Compare the whole-number parts first. If the whole-number parts are equal, compare the tenths, then the hundredths, then the thousandths...",
      "You can write extra zeros at the end so that the numbers have the same number of decimal places: 26.5 = 26.500. Then you only need to compare the parts after the decimal point.",
      "A number with more decimal places is not necessarily larger: 7.9 is greater than 7.85.",
      "When comparing measurements, first convert to the SAME unit: 1000 g = 1 kg, 100 cm = 1 m, 1000 m = 1 km, 1000 ml = 1 l.",
      "With negative numbers it is the other way round: −4.05 is greater than −4.52 because −4.05 is closer to 0 on the number line."
    ],
    "ex.4.1.q": "Put in order from smallest to largest: 5.6, 4.95, 5.68, 5.609.",
    "ex.4.1.steps": [
      "4.95 has the smallest whole-number part so it is the smallest.",
      "The other three numbers have the same whole-number part 5 and the same 6 tenths. Write them with the same number of decimal places: 5.600; 5.680; 5.609.",
      "Compare the thousandths: 5.600 < 5.609 < 5.680.",
      "Order: 4.95; 5.6; 5.609; 5.68."
    ],
    "ex.4.1.prompts": [
      "Look at the whole-number parts first: which number has a clearly smaller whole-number part than the others?",
      "The other three numbers have the same whole-number part and tenths. How can you compare them fairly? What is the purpose of writing extra zeros?",
      "After writing them with the same number of decimal places, which place do you compare and what order do you see?",
      "Put the smallest number together with the order you just found: how is the sequence from smallest to largest written?"
    ],
    "ex.4.1.twist": "If the number 5.61 is added to the list, where does it go? Which number is third from smallest to largest?",
    "s.4.2.learn": [
      "Remove the decimal points, multiply as whole numbers, then put the decimal point back: the result has as many decimal places as the TOTAL number of decimal places in the two factors.",
      "Example: 3.2 × 0.04 → 32 × 4 = 128; there are 1 + 2 = 3 decimal places so the answer is 0.128.",
      "0.2 × 0.3 = 0.06, not 0.6: tenths × tenths = hundredths.",
      "Knowing 42 × 87 = 3654 lets you deduce 4.2 × 8.7 = 36.54 and 0.42 × 0.087 = 0.03654 by counting the decimal places again.",
      "Check with an estimate: round each number to 1 significant figure and multiply; the exact result should be close to the estimate."
    ],
    "ex.4.2.q": "Work out 5.96 × 0.35 and check with an estimate.",
    "ex.4.2.steps": [
      "Remove the decimal points: 596 × 35 = 20 860.",
      "Total number of decimal places: 2 + 2 = 4 so 5.96 × 0.35 = 2.0860 = 2.086.",
      "Estimate: 6 × 0.4 = 2.4, which is close to 2.086 so the result is sensible."
    ],
    "ex.4.2.prompts": [
      "If you forget the decimal points for a moment, which two whole numbers do you multiply? Set out the columns as usual.",
      "How many decimal places does each factor have? So how many decimal places must the product have?",
      "Round each number to the nearest easy number and multiply. Is the estimate close to the exact result?"
    ],
    "ex.4.2.twist": "If you work out 5.96 × 0.035, what is the result? Can you deduce it from the old result without multiplying again?",
    "s.4.3.learn": [
      "To divide by a decimal, write the division as a fraction and multiply the numerator and denominator by 10 so the denominator is a whole number: 5.67 ÷ 0.7 = 56.7 ÷ 7.",
      "If you multiply both the dividend and the divisor by the same number, the quotient does NOT change, so there is no need to divide the result by 10 afterwards.",
      "Then use short division by the whole number, keeping the decimal point in the same position.",
      "Check using an estimate and the inverse operation: if 20.504 ÷ 0.8 = 25.63 then 25.63 × 0.8 should be ≈ 20.5.",
      "If the question asks you to round to n decimal places, divide as far as the (n + 1)th decimal place and then round."
    ],
    "ex.4.3.q": "Work out 3.468 ÷ 0.8.",
    "ex.4.3.steps": [
      "Write 3.468 ÷ 0.8 = (3.468 × 10) ÷ (0.8 × 10) = 34.68 ÷ 8.",
      "Short division: 34.68 ÷ 8 = 4.335.",
      "Check with the inverse: 4.335 × 0.8 = 3.468 ✓"
    ],
    "ex.4.3.prompts": [
      "Dividing by a decimal is hard to set out. What number can you multiply both the dividend and the divisor by so the divisor becomes a whole number?",
      "After changing, divide 34.68 by 8 using short division. When you bring down the digit after the decimal point, when do you put the decimal point in the quotient?",
      "What is the quickest way to test whether the quotient is right or wrong?"
    ],
    "ex.4.3.twist": "If you divide 3.468 by 0.08, what is the quotient?",
    "s.4.4.learn": [
      "Use the order of operations: brackets first, then multiplication and division, then addition and subtraction.",
      "Write 0.9 = 1 − 0.1 to multiply quickly: 28 × 0.9 = 28 × 1 − 28 × 0.1 = 28 − 2.8 = 25.2. Similarly 0.99 = 1 − 0.01.",
      "Rearrange a multiplication to make a nice product: 4 × 12.6 × 2.5 = (4 × 2.5) × 12.6 = 10 × 12.6 = 126.",
      "Split a decimal into factors that are easy to multiply: 0.15 = 0.5 × 0.3 or 0.35 = 0.5 × 0.7; 0.12 = 0.2 × 0.6.",
      "When splitting into factors, multiply by the easy whole part first, then by the remaining part, dividing by 10 when needed."
    ],
    "ex.4.4.q": "Work out 12 × 0.15 mentally.",
    "ex.4.4.steps": [
      "Split 0.15 = 0.5 × 0.3.",
      "12 × 0.5 = 6 (half of 12).",
      "6 × 0.3 = 6 × 3 ÷ 10 = 18 ÷ 10 = 1.8."
    ],
    "ex.4.4.prompts": [
      "Can 0.15 be written as a product of two numbers that are easier to multiply mentally? Try with 0.5 and another number.",
      "Multiplying 12 by 0.5 means taking what fraction of 12?",
      "As for multiplying 6 by 0.3: write 0.3 as a number of tenths and then calculate."
    ],
    "ex.4.4.twist": "If you work out 12 × 0.25, is there a quick mental method? What is the result?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Grade 7–8 test and gifted-student style decimal problems: quick calculation, finding x, motion, money and recurring decimals.",
    "q.4.1-01.hints": [
      "Do the two numbers have the same whole-number part?",
      "They have the same whole-number part 6, so compare the tenths.",
      "7 tenths compared with 0 tenths: which is greater?"
    ],
    "q.4.1-01.explain": "Same whole-number part 6; tenths 7 > 0 so 6.71 > 6.03.",
    "q.4.1-02.hints": [
      "Write 27.9 with two decimal places. Which number do you get?",
      "Compare 27.90 and 27.85: the tenths are 9 and 8.",
      "Is a number with more digits always greater?"
    ],
    "q.4.1-02.explain": "27.9 = 27.90 and 90 > 85 so 27.9 > 27.85. Common mistake: thinking 85 > 9 so 27.85 is larger; that is a wrong comparison because it forgets that the tenths place matters more than the hundredths.",
    "q.4.1-03.hints": [
      "Look at the whole-number part of each number.",
      "Which number has the smallest whole-number part?",
      "Is there a number with a whole-number part smaller than 9?"
    ],
    "q.4.1-03.explain": "Only 8.9 has whole-number part 8, the others have 9, so 8.9 is the smallest.",
    "q.4.1-04.hints": [
      "Write them all with 3 decimal places: 6.725; 6.780; 6.007; 6.710.",
      "Compare the parts after the decimal point as if they were whole numbers: 725, 780, 007, 710.",
      "Order from smallest to largest and then pick the third number."
    ],
    "q.4.1-04.explain": "6.007 < 6.710 < 6.725 < 6.780. The third number is 6.725.",
    "q.4.1-05.hints": [
      "Do the two measurements have the same unit yet?",
      "Convert 0.985 m to cm: multiply by 100.",
      "98.5 cm compared with 985 cm: which is greater?"
    ],
    "q.4.1-05.explain": "0.985 m = 98.5 cm, which is less than 985 cm so 0.985 m < 985 cm. Always convert to the same unit before comparing.",
    "q.4.1-06.hints": [
      "Convert them all to kilograms. 1000 g = 1 kg.",
      "780 g = 0.78 kg and 1950 g = ? kg.",
      "Order 0.78; 1.95; 2.18; 2.3 and then pick the second."
    ],
    "q.4.1-06.explain": "Converted to kg: 0.78; 1.95; 2.18; 2.3. The order is already correct; the second is 1.95 kg (that is 1950 g).",
    "q.4.1-07.hints": [
      "Draw a number line: which number is furthest from 0 on the negative side?",
      "With negative numbers, the number with the greater absolute value is smaller.",
      "Among the four numbers, which absolute value is greatest?"
    ],
    "q.4.1-07.explain": "With negative numbers, the number furthest from 0 is the smallest. −4.52 is furthest from 0 so it is the smallest. Arun's mistake is applying the method for comparing positive numbers to negative numbers.",
    "q.4.1-08.hints": [
      "List the numbers with two decimal places starting from 3.27.",
      "The ≤ sign allows x = 3.27; does the < sign allow x = 3.34?",
      "Count: 3.27; 3.28; ... up to the largest number less than 3.34."
    ],
    "q.4.1-08.explain": "x can be 3.27; 3.28; 3.29; 3.30; 3.31; 3.32; 3.33, that is 7 values. 3.34 is excluded because of the < sign. Zara miscounted.",
    "q.4.1-09.hints": [
      "Write out the first 5 terms of each sequence in turn.",
      "The fifth term needs the rule applied 4 times (or multiplying/dividing 4 times).",
      "Be careful with B: what exactly is the fifth term, is it GREATER than 2.4 or only equal?"
    ],
    "q.4.1-09.explain": "Fifth term: A = 2.5; B = 2.4 (equal, not greater); C = 2.3; D = 2.1; E = 2.25; F = 2.45. Only A and F are greater than 2.4.",
    "q.4.1-10.hints": [
      "What is −0.27 written with three decimal places?",
      "y must be greater than −0.274 but not exceed −0.270. List the three-decimal-place numbers in between.",
      "−0.273; −0.272; −0.271; ... what other number is there? Is −0.274 allowed?"
    ],
    "q.4.1-10.explain": "y can be −0.273; −0.272; −0.271 and −0.270. The number −0.274 is excluded because of the < sign. There are 4 values.",
    "q.4.2-01.hints": [
      "Ignore the decimal point and the minus sign: what is 1 × 8?",
      "Count the number of decimal places in the original calculation.",
      "What sign does the product of a positive and a negative number have?"
    ],
    "q.4.2-01.explain": "1 × 8 = 8; there is 1 decimal place so 0.8; positive × negative = negative. So −0.8.",
    "q.4.2-02.hints": [
      "Work out 7 × 8 first.",
      "How many decimal places does the original calculation have?",
      "Place the decimal point so the result has exactly that many decimal places."
    ],
    "q.4.2-02.explain": "7 × 8 = 56; there is 1 decimal place so 0.7 × 8 = 5.6.",
    "q.4.2-03.hints": [
      "Work out 9 × 2 and then consider the sign.",
      "Does negative × positive give a negative or positive result?",
      "Place the decimal point: how many decimal places are there?"
    ],
    "q.4.2-03.explain": "9 × 2 = 18; 1 decimal place so 1.8; negative sign: −1.8.",
    "q.4.2-04.hints": [
      "Remove the decimal points: what is 12 × 3?",
      "0.12 has 2 decimal places, 0.3 has 1 decimal place. What is the total?",
      "Place the decimal point so there are exactly 3 decimal places."
    ],
    "q.4.2-04.explain": "12 × 3 = 36; total 2 + 1 = 3 decimal places so 0.036.",
    "q.4.2-05.hints": [
      "Compared with 42 × 87, how much have the two factors been divided by?",
      "Both are divided by 10: how much is the product divided by?",
      "What is 3654 divided by 100?"
    ],
    "q.4.2-05.explain": "4.2 = 42 ÷ 10 and 8.7 = 87 ÷ 10 so the product is divided by 100: 3654 ÷ 100 = 36.54.",
    "q.4.2-06.hints": [
      "Remove the decimal points: work out 56 × 83.",
      "56 × 83 = 56 × 80 + 56 × 3. What do you get?",
      "The total number of decimal places is 3. Estimate 0.6 × 8 ≈ 4.8 to check."
    ],
    "q.4.2-06.explain": "56 × 83 = 4480 + 168 = 4648; 2 + 1 = 3 decimal places so 4.648. The estimate 0.6 × 8 = 4.8 is close.",
    "q.4.2-07.hints": [
      "What is 4 × 2?",
      "How many decimal places are there in the two factors added together?",
      "0.4 is 4 tenths, 0.2 is 2 tenths. What unit do tenths times tenths give?"
    ],
    "q.4.2-07.explain": "4 × 2 = 8 and there are 2 decimal places so 0.08. Tenths × tenths = hundredths. Common mistake: choosing 0.8 by placing the decimal point with only 1 decimal place.",
    "q.4.2-08.hints": [
      "Round 0.45 and 2.8 to 1 significant figure.",
      "What is 0.5 × 3?",
      "Choose the answer closest to that estimate."
    ],
    "q.4.2-08.explain": "0.45 ≈ 0.5 and 2.8 ≈ 3 so the product ≈ 1.5. Only 1.26 is close to 1.5. The exact data: 45 × 28 = 1260 and there are 3 decimal places so 1.260. Syra placed the decimal point wrongly.",
    "q.4.2-09.hints": [
      "How many decimal places does 1.58 have? How many does 0.046 have?",
      "What is the total number of decimal places?",
      "Write 7268 and move the decimal point to the left enough places; add zeros if needed."
    ],
    "q.4.2-09.explain": "1.58 has 2 and 0.046 has 3 decimal places, a total of 5. 7268 with 5 decimal places is 0.07268.",
    "q.4.2-10.hints": [
      "Dose = 7.3 × the cat's mass. Write the multiplication.",
      "Remove the decimal points: what is 73 × 58?",
      "73 × 58 = 4234. Place the decimal point with 2 decimal places."
    ],
    "q.4.2-10.explain": "7.3 × 5.8: 73 × 58 = 4234, with 2 decimal places that is 42.34 mg. The estimate 7 × 6 = 42 is very close, so it is sensible.",
    "q.4.3-01.hints": [
      "Multiply both 2.4 and 0.4 by 10: which division do you get?",
      "What is 24 ÷ 4?",
      "Does the quotient change after multiplying both numbers by 10?"
    ],
    "q.4.3-01.explain": "2.4 ÷ 0.4 = 24 ÷ 4 = 6.",
    "q.4.3-02.hints": [
      "Multiply both numbers by 10 so the divisor becomes a whole number.",
      "You get 72 ÷ 9.",
      "72 ÷ 9 = ?"
    ],
    "q.4.3-02.explain": "7.2 ÷ 0.9 = 72 ÷ 9 = 8.",
    "q.4.3-03.hints": [
      "Multiply both numerator and denominator by 10: −42/0.6 = ?/6.",
      "What is −420 ÷ 6?",
      "Does a negative divided by a positive give a negative or positive result?"
    ],
    "q.4.3-03.explain": "−42 ÷ 0.6 = −420 ÷ 6 = −70.",
    "q.4.3-04.hints": [
      "Multiply both numbers by 10: what does 0.92 become?",
      "You get 9.2 ÷ 4. Use short division.",
      "4 into 9 goes 2 remainder 1; bring down 2..."
    ],
    "q.4.3-04.explain": "0.92 ÷ 0.4 = 9.2 ÷ 4 = 2.3.",
    "q.4.3-05.hints": [
      "Cost per metre = total cost ÷ length. Write the division.",
      "You need to work out 1.08 ÷ 0.8. Multiply both numbers by 10.",
      "What is 10.8 ÷ 8?"
    ],
    "q.4.3-05.explain": "1.08 ÷ 0.8 = 10.8 ÷ 8 = 1.35 dollars per metre. Check: 1.35 × 0.8 = 1.08 ✓.",
    "q.4.3-06.hints": [
      "Multiply both 21.84 and 0.8 by 10.",
      "You get 218.4 ÷ 8. Use short division.",
      "Estimate: 20 ÷ 1 ≈ 20 or 22 ÷ 0.8 ≈ 27?"
    ],
    "q.4.3-06.explain": "21.84 ÷ 0.8 = 218.4 ÷ 8 = 27.3. Check with the inverse: 27.3 × 0.8 = 21.84 ✓.",
    "q.4.3-07.hints": [
      "Check by multiplying: 0.6 times the result must equal 3.",
      "What is 0.6 × 0.5? What is 0.6 × 5?",
      "When you multiply both the dividend and the divisor by 10, does the quotient change?"
    ],
    "q.4.3-07.explain": "0.6 × 5 = 3 so 3 ÷ 0.6 = 5. When you multiply both numbers by the same number, the quotient does not change, so you do not divide by 10 again. Arun's mistake was dividing by 10 again.",
    "q.4.3-08.hints": [
      "Change each division into a division of two whole numbers (multiply both numbers by 10).",
      "A: 63 ÷ 9; B: 14 ÷ 2; C: 49 ÷ 7; D: ? ; E: ?",
      "Work them all out; four of the calculations give the same result."
    ],
    "q.4.3-08.explain": "A = 63 ÷ 9 = 7; B = 14 ÷ 2 = 7; C = 49 ÷ 7 = 7; D = 48 ÷ 6 = 8; E = 56 ÷ 8 = 7. D is the different one.",
    "q.4.3-09.hints": [
      "Is the equivalent division 504.6 ÷ 12 correct or not?",
      "Short division: 12 into 50 goes 4 remainder 2; into 24 goes 2 remainder 0; bring down 6...",
      "12 into 6 goes 0 times! Where is the decimal point, and where does the zero go?"
    ],
    "q.4.3-09.explain": "504.6 ÷ 12 = 42.05 (12 does not go into 6 so write 0 and bring down the next 0; 12 × 0.05 = 0.6). Check with the inverse: 42.05 × 1.2 = 50.46 ✓.",
    "q.4.3-10.hints": [
      "Multiply both numbers by 10 to get 823.5 ÷ 11.",
      "Use short division to the third decimal place: 74.863...",
      "Round 74.863... to 2 decimal places: look at the third decimal digit."
    ],
    "q.4.3-10.explain": "823.5 ÷ 11 = 74.8636... The third decimal digit is 3 (< 5) so round down: 74.86. Check: 11 × 75 ≈ 825 ✓.",
    "q.4.4-01.hints": [
      "What do you do first: the part in brackets or the multiplication?",
      "What is 0.6 − 0.2?",
      "0.4 × 0.8: work out 4 × 8 and then place the decimal point with 2 decimal places."
    ],
    "q.4.4-01.explain": "(0.6 − 0.2) × 0.8 = 0.4 × 0.8 = 0.32.",
    "q.4.4-02.hints": [
      "Work out the brackets first.",
      "0.7 + 0.1 = ?",
      "0.8 × 0.6: work out 8 × 6 and then place the decimal point."
    ],
    "q.4.4-02.explain": "(0.7 + 0.1) × 0.6 = 0.8 × 0.6 = 0.48.",
    "q.4.4-03.hints": [
      "Write 28 × 0.9 = 28 × (1 − 0.1).",
      "Expand: 28 × 1 − 28 × 0.1 = 28 − ?",
      "What is 28 × 0.1? Then subtract."
    ],
    "q.4.4-03.explain": "28 × 0.9 = 28 − 2.8 = 25.2.",
    "q.4.4-04.hints": [
      "Which two factors multiply to give a round product?",
      "What is 4 × 2.5?",
      "What remains: 10 × 12.6."
    ],
    "q.4.4-04.explain": "Multiplication can be done in any order: (4 × 2.5) × 12.6 = 10 × 12.6 = 126.",
    "q.4.4-05.hints": [
      "Write 24 × 0.5 × 0.7. Multiplying by 0.5 is taking half.",
      "24 × 0.5 = ?",
      "Then multiply the result by 0.7."
    ],
    "q.4.4-05.explain": "24 × 0.5 = 12; 12 × 0.7 = 8.4. Check: 24 × 0.35 = 8.4 ✓.",
    "q.4.4-06.hints": [
      "Number of patients who felt better = 3200 × 0.99.",
      "Write 0.99 = 1 − 0.01.",
      "3200 − 3200 × 0.01 = 3200 − ?"
    ],
    "q.4.4-06.explain": "3200 × 0.99 = 3200 − 32 = 3168 patients.",
    "q.4.4-07.hints": [
      "How much less than 1 is 0.99?",
      "What is 1 − 0.99: 0.1 or 0.01?",
      "Do you SUBTRACT or add?"
    ],
    "q.4.4-07.explain": "0.99 = 1 − 0.01 so 52 × 0.99 = 52 − 0.52 = 51.48. Mistakes: using 0.1 (that is the method for 0.9), or adding instead of subtracting.",
    "q.4.4-08.hints": [
      "Write 180 × 0.2 × 0.7. Multiply by 0.2 first.",
      "What is 180 × 0.2?",
      "36 × 0.7 = 36 × 7 ÷ 10."
    ],
    "q.4.4-08.explain": "180 × 0.2 = 36; 36 × 0.7 = 252 ÷ 10 = 25.2. You can also check: 18 × 14 = 252, so 180 × 0.14 = 25.2 ✓.",
    "q.4.4-09.hints": [
      "Work backwards: multiply both sides by 0.02. What does the right-hand side become?",
      "32 × (0.8 − □) = 16. Divide 16 by 32.",
      "0.8 − □ = 0.5. What number goes in the box?"
    ],
    "q.4.4-09.explain": "800 × 0.02 = 16 so 32 × (0.8 − □) = 16, which gives 0.8 − □ = 0.5, □ = 0.3. Sofia is correct. Check: 32 × 0.5 ÷ 0.02 = 16 ÷ 0.02 = 800 ✓.",
    "q.4.4-10.hints": [
      "Check each split: does 0.5 × 0.3 equal 0.15?",
      "What is 0.1 + 0.5? Is it 0.15?",
      "Use an estimate: is 12 × 0.15 close to 12 × 0.1 = 1.2 or close to 7?"
    ],
    "q.4.4-10.explain": "0.5 × 0.3 = 0.15 so Nam is correct: 12 × 0.15 = 1.8. Ha is wrong because 0.1 + 0.5 = 0.6, not 0.15 (it should be 0.1 + 0.05).",
    "q.ch-01.q": "Calculate in a sensible way: 0.125 × 7.3 × 8.",
    "q.ch-01.hints": [
      "Which two factors multiply to give a nice product?",
      "What is 0.125 × 8? (1/8 of 8)",
      "What remains is 1 × 7.3."
    ],
    "q.ch-01.explain": "(0.125 × 8) × 7.3 = 1 × 7.3 = 7.3.",
    "q.ch-02.q": "Find x if (x − 0.4) × 2.5 = 3.",
    "q.ch-02.hints": [
      "(x − 0.4) is the unknown factor. Which operation finds it?",
      "x − 0.4 = 3 ÷ 2.5. Multiply both numbers by 10 to divide.",
      "30 ÷ 25 = 1.2. So what is x?"
    ],
    "q.ch-02.explain": "x − 0.4 = 3 ÷ 2.5 = 1.2 so x = 1.2 + 0.4 = 1.6. Check: (1.6 − 0.4) × 2.5 = 1.2 × 2.5 = 3 ✓.",
    "q.ch-03.q": "Find x if x ÷ 0.25 + 0.5 = 18.5.",
    "q.ch-03.hints": [
      "First find x ÷ 0.25 by removing the + 0.5 on the left-hand side.",
      "x ÷ 0.25 = 18. Dividing by 0.25 is the same as multiplying by which number?",
      "Dividing by 0.25 is the same as multiplying by 4, so 4x = 18. Find x."
    ],
    "q.ch-03.explain": "x ÷ 0.25 = 18.5 − 0.5 = 18. Since dividing by 0.25 is multiplying by 4, 4x = 18, x = 4.5. Check: 4.5 ÷ 0.25 = 18; 18 + 0.5 = 18.5 ✓.",
    "q.ch-04.q": "A vehicle travels for 1.5 hours at 42.6 km/h and then for another 0.75 hours at 56.4 km/h. Work out the vehicle's average speed over the whole journey.",
    "q.ch-04.hints": [
      "Average speed = total distance ÷ total time. You need to work out the distance of each part.",
      "Part 1: 42.6 × 1.5 = 63.9 km. Part 2: 56.4 × 0.75 = ? km.",
      "Total distance 106.2 km; total time 2.25 hours. Do the division."
    ],
    "q.ch-04.explain": "S₁ = 42.6 × 1.5 = 63.9; S₂ = 56.4 × 0.75 = 42.3; total 106.2 km in 2.25 hours. v = 106.2 ÷ 2.25 = 47.2 km/h. Note: do not take the mean of the two speeds (49.5).",
    "q.ch-05.q": "4.5 kg of apples cost 157 500 dong. How many dong do 2.4 kg of the same apples cost?",
    "q.ch-05.hints": [
      "Find the price of 1 kg of apples first. Which calculation?",
      "157 500 ÷ 4.5: multiply both numbers by 10.",
      "The price of 1 kg is 35 000 dong. What is the price of 2.4 kg?"
    ],
    "q.ch-05.explain": "Price of 1 kg: 157 500 ÷ 4.5 = 1 575 000 ÷ 45 = 35 000 dong. 2.4 kg: 35 000 × 2.4 = 84 000 dong.",
    "q.ch-06.q": "The infinite recurring decimal 0.(45) = 0.4545... equals 5/11 and 0.(54) = 0.5454... equals 6/11. Work out the sum 0.(45) + 0.(54).",
    "q.ch-06.hints": [
      "Which two fractions are these numbers?",
      "Add 5/11 + 6/11.",
      "You can also add digit by digit: in 0.4545... + 0.5454..., which digits add to give 9?"
    ],
    "q.ch-06.explain": "5/11 + 6/11 = 11/11 = 1. Digit by digit: 4 + 5 = 9 in every place gives 0.999... = 1.",
    "q.ch-07.q": "A circular flower bed has a radius of 2.5 m. Taking π ≈ 3.14, work out the area of the flower bed, rounded to 1 decimal place.",
    "q.ch-07.hints": [
      "What is the formula for the area of a circle?",
      "S = 3.14 × 2.5 × 2.5. Work out 2.5 × 2.5 first.",
      "3.14 × 6.25 = 19.625. Round to 1 decimal place."
    ],
    "q.ch-07.explain": "S = 3.14 × 2.5² = 3.14 × 6.25 = 19.625 ≈ 19.6 m² (the second decimal digit is 2 < 5 so keep it the same).",
    "q.ch-08.q": "Which of the following numbers is the largest?",
    "q.ch-08.choices": [
      "0.(7) = 0.7777...",
      "0.77",
      "0.778",
      "0.7"
    ],
    "q.ch-08.hints": [
      "Write the numbers with 4 decimal places: 0.7777; 0.7700; 0.7780; 0.7000.",
      "Compare the thousandths of 0.7777... and 0.778.",
      "0.7777... has thousandths digit 7, while 0.778 has thousandths digit 8."
    ],
    "q.ch-08.explain": "0.7777... < 0.778 because in the thousandths place 7 < 8 (even though 0.7777... has infinitely many 7s). So 0.778 is the largest.",
    "q.ch-09.q": "An estimates 38.7 ÷ 0.52 by rounding each number to 1 significant figure and then dividing. What is An's estimate?",
    "q.ch-09.hints": [
      "Round 38.7 and 0.52 to 1 significant figure.",
      "You get 40 ÷ 0.5.",
      "Dividing by 0.5 is the same as multiplying by 2."
    ],
    "q.ch-09.explain": "38.7 ≈ 40 and 0.52 ≈ 0.5 so 40 ÷ 0.5 = 80 (the exact result is 74.4).",
    "q.ch-10.q": "A rectangle has an area of 50.15 m² and a width of 3.4 m. Work out the perimeter of the rectangle.",
    "q.ch-10.hints": [
      "Length = area ÷ width. Multiply both numbers by 10.",
      "501.5 ÷ 34 = ?",
      "The length is 14.75 m. Perimeter = 2 × (length + width)."
    ],
    "q.ch-10.explain": "Length = 50.15 ÷ 3.4 = 14.75 m. Perimeter = 2 × (14.75 + 3.4) = 2 × 18.15 = 36.3 m.",
    "p.goal": "Explore how to fill in the boxes of a decimal ‘diamond’, find the pattern and create a quick method for working out the values in the diamond from a few given numbers.",
    "p.steps": [
      "Look at the sample diamond (top 4.3; sides 10.1 and 6.7; bottom 3.3). Find how the numbers in the squares (7.2; 5.5; 8.4; 6.7; 5) are worked out from the numbers in the two nearest circles.",
      "Choose a number w for the top and a decimal g between 0 and 1. Let x = w + g, y = x + g, z = y + g and fill in the five squares following the pattern you found.",
      "Try at least three different pairs (w, g). Record the results in a table and comment: how are the squares related to w and g?",
      "Find the quickest way to fill in the squares when you only know w and g, then check with a new pair of numbers.",
      "For the second diamond: choose a and g, work out b = a + g, c = b + g, d = c + g, e = d + g. Work backwards to find the numbers in the four circles."
    ],
    "p.extensions": [
      "Replace adding g with multiplying by a decimal r. What patterns does the new diamond have?",
      "Given only two numbers in the diamond, find the conditions under which the whole diamond can be filled in, and when there are several answers.",
      "Design a decimal diamond of your own with nice answers and challenge a friend to find the pattern."
    ],
    "p.reflect": [
      "Which pattern did you notice between w, g and the squares? Describe it in words or with a formula.",
      "If you only know two numbers in the diamond, can you always fill in all of it? Explain why.",
      "At which step did calculating with decimals cause the most difficulty, and how did you get past it?"
    ]
  },
  vi: {
    "q.4.4-09.howto": "Nhập số thật sự phải điền vào ô. Đó có thể là số của Zara, của Sofia hoặc không phải của ai.",
    "q.4.1-01.q": "Chọn dấu đúng: 6,71 ? 6,03",
    "q.4.1-02.q": "Chọn dấu đúng: 27,9 ? 27,85",
    "q.4.1-03.q": "Số nào bé nhất trong các số sau: 9,09; 8,9; 9,53; 9,4?",
    "q.4.1-04.q": "Sắp xếp 6,725; 6,78; 6,007; 6,71 theo thứ tự từ bé đến lớn. Số đứng thứ ba trong dãy là số nào?",
    "q.4.1-05.q": "Chọn dấu đúng: 0,985 m ? 985 cm",
    "q.4.1-06.q": "Bốn khối lượng là 2,3 kg; 780 g; 2,18 kg và 1950 g. Khi viết theo thứ tự từ bé đến lớn, khối lượng thứ hai là bao nhiêu? Viết theo kg.",
    "q.4.1-07.q": "Arun sắp xếp −4,52; −4,31; −4,05; −4,38 chỉ bằng cách so sánh phần thập phân và nói −4,05 là số bé nhất. Thực ra số nào bé nhất?",
    "q.4.1-08.q": "Zara nói rằng nếu x có hai chữ số thập phân và 3,27 ≤ x < 3,34 thì x có 8 giá trị có thể. Thực sự có bao nhiêu giá trị có thể?",
    "q.4.1-09.q": "Mỗi dãy số được mô tả bằng số hạng đầu và quy tắc. Những dãy nào có số hạng thứ năm lớn hơn 2,4?",
    "q.4.1-09.choices": [
      "A: số hạng đầu 0,5, cộng thêm 0,5",
      "B: số hạng đầu 0,15, nhân với 2",
      "C: số hạng đầu −1,7, cộng thêm 1",
      "D: số hạng đầu 33,6, chia cho 2",
      "E: số hạng đầu 1,25, cộng thêm 0,25",
      "F: số hạng đầu 10,45, trừ đi 2"
    ],
    "q.4.1-10.q": "y là một số có ba chữ số thập phân và −0,274 < y ≤ −0,27. y có thể nhận bao nhiêu giá trị khác nhau?",
    "q.4.2-01.q": "Dùng cách tính nhẩm để tính 0,1 × −8.",
    "q.4.2-02.q": "Tính 0,7 × 8.",
    "q.4.2-03.q": "Tính −9 × 0,2.",
    "q.4.2-04.q": "Tính 0,12 × 0,3.",
    "q.4.2-05.q": "Jan tính được 42 × 87 = 3654. Hãy dùng kết quả này để tính 4,2 × 8,7.",
    "q.4.2-06.q": "Tính 0,56 × 8,3.",
    "q.4.2-07.q": "Arun thắc mắc vì sao 0,4 × 0,2 không bằng 0,8. Vậy 0,4 × 0,2 bằng bao nhiêu?",
    "q.4.2-08.q": "Syra tính 0,45 × 2,8 được 12,6. Hãy dùng ước lượng để quyết định đáp án nào là đáp án duy nhất có thể đúng.",
    "q.4.2-09.q": "Biết 158 × 46 = 7268, hãy tính 1,58 × 0,046.",
    "q.4.2-10.q": "Hướng dẫn dùng thuốc ghi: cho mèo uống 7,3 mg cho mỗi kg khối lượng của mèo. Một con mèo nặng 5,8 kg. Con mèo cần bao nhiêu miligam thuốc? (Hãy ước lượng trước: 7 × 6 = 42.)",
    "q.4.3-01.q": "Tính 2,4 ÷ 0,4.",
    "q.4.3-02.q": "Tính 7,2 ÷ 0,9.",
    "q.4.3-03.q": "Tính −42 ÷ 0,6.",
    "q.4.3-04.q": "Tính 0,92 ÷ 0,4.",
    "q.4.3-05.q": "Artur trả 1,08 đô la cho một đoạn dây dài 0,8 m. Giá của sợi dây tính theo mỗi mét là bao nhiêu?",
    "q.4.3-06.q": "Tính 21,84 ÷ 0,8.",
    "q.4.3-07.q": "Arun tính 3 ÷ 0,6 thành (3 × 10) ÷ (0,6 × 10) = 30 ÷ 6 = 5, nhưng sau đó lại muốn chia 5 cho 10 để được 0,5. Đáp án đúng của 3 ÷ 0,6 là gì?",
    "q.4.3-08.q": "Phép tính nào cho kết quả khác với bốn phép tính còn lại?",
    "q.4.3-09.q": "Isla tính 50,46 ÷ 1,2 thành 504,6 ÷ 12 và được 42,5, vì quên một số 0 khi chia theo cột. Giá trị đúng của 50,46 ÷ 1,2 là bao nhiêu?",
    "q.4.3-10.q": "Tính 82,35 ÷ 1,1, viết đáp số làm tròn đến 2 chữ số thập phân.",
    "q.4.4-01.q": "Tính nhẩm (0,6 − 0,2) × 0,8.",
    "q.4.4-02.q": "Tính nhẩm (0,7 + 0,1) × 0,6.",
    "q.4.4-03.q": "Dùng ý 0,9 = 1 − 0,1 để tính 28 × 0,9.",
    "q.4.4-04.q": "Tính 4 × 12,6 × 2,5 bằng cách sắp xếp lại thứ tự phép nhân.",
    "q.4.4-05.q": "Dùng 0,35 = 0,5 × 0,7 để tính 24 × 0,35.",
    "q.4.4-06.q": "Một loại thuốc mới được dùng cho 3200 bệnh nhân và 99% (0,99) trong số họ cảm thấy khỏe hơn. Có bao nhiêu bệnh nhân cảm thấy khỏe hơn?",
    "q.4.4-07.q": "Cách tính nào dưới đây là cách đúng để tính 52 × 0,99 dễ hơn?",
    "q.4.4-08.q": "Dùng 0,14 = 0,2 × 0,7 để tính 180 × 0,14.",
    "q.4.4-09.q": "Tìm số còn thiếu trong 32 × (0,8 − □) ÷ 0,02 = 800. Zara nói là 0,4 còn Sofia nói là 0,3.",
    "q.4.4-10.q": "Nam tính 12 × 0,15 thành 12 × 0,5 × 0,3 = 1,8. Hà tính thành 12 × 0,1 + 12 × 0,5 = 7,2. Ai đúng?",
    "q.4.4-10.choices": [
      "Nam đúng; Hà sai vì 0,15 = 0,1 + 0,05 chứ không phải 0,1 + 0,5",
      "Hà đúng vì 0,15 = 0,1 + 0,5",
      "Cả hai đều đúng",
      "Cả hai đều sai"
    ]
  }
});
