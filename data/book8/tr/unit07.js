window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 7,
  en: {
    "u.realm": "Melody Valley",
    "u.story": "In Melody Valley, each music staff is a cake cut into notes: semibreves, minims, crotchets ... If you arrange the fractions of the notes wrongly, the tune loses its beat. Use fractions and recurring decimals to harmonise the lost ancient song!",
    "g.0.def": "A decimal with a digit or a group of digits that repeats forever, for example 0.(3).",
    "g.1.def": "A decimal that ends and does not repeat forever, for example 0.625.",
    "g.2.def": "A fraction whose numerator is 1, such as 1/2, 1/3, 1/4.",
    "g.3.def": "A number made of a whole part and a fraction part, for example 2 1/3.",
    "g.4.def": "A fraction whose numerator is greater than or equal to its denominator, such as 7/3.",
    "g.5.def": "The fraction turned upside down (numerator and denominator swapped); the reciprocal of 3/4 is 4/3.",
    "g.6.def": "Splitting a number into parts that are easy to calculate, for example 3 1/2 = 3 + 1/2.",
    "g.7.def": "A shared denominator of several fractions, used to add, subtract or compare.",
    "g.8.def": "Fractions that look different but have the same value, for example 1/2 = 3/6.",
    "s.7.1.learn": [
      "To convert a fraction to a decimal, divide the numerator by the denominator: 5/8 = 5 ÷ 8 = 0.625.",
      "If the division stops, you get a terminating decimal (0.625). If a digit or a group of digits repeats forever, it is a recurring decimal, for example 71/99 = 0.7171… = 0.(71).",
      "Notation: put the repeating part in brackets, 1/14 = 0.0(714285), 11/12 = 0.91(6). The textbook uses dots above the first and last digits of the repeating part.",
      "A fraction in its simplest form whose denominator has only the prime factors 2 and 5 gives a terminating decimal; a denominator with other factors (3, 7, 11, 13 ...) gives a recurring decimal.",
      "A recurring decimal can always be rewritten as a fraction, for example 0.(3) = 1/3 and 0.(9) = 1."
    ],
    "ex.7.1.q": "Convert 11/12 to a decimal.",
    "ex.7.1.steps": [
      "Divide 11 ÷ 12 = 0.916666…",
      "Only the digit 6 repeats forever",
      "Write 11/12 = 0.91(6), a recurring decimal."
    ],
    "ex.7.1.prompts": [
      "A fraction is a division. Divide 11 by 12 and write the first few decimal digits. Do you notice anything unusual?",
      "Which digit repeats forever, and which digit appears only once?",
      "Is there a notation to write the repeating part briefly, and what is this kind of decimal called?"
    ],
    "ex.7.1.twist": "When you convert 1/7 to a decimal, how many digits are in the repeating part? (Try dividing.)",
    "s.7.2.learn": [
      "To compare fractions, you can write them over a common denominator and compare the numerators, or convert them all to decimals.",
      "Convert fractions greater than 1 to mixed numbers, compare the whole parts first, then the fraction parts.",
      "Negative numbers: ignore the negative signs to compare, then reverse the order. The larger the absolute value, the smaller the negative number: −3.58 < −3.57.",
      "With the same denominator, the larger numerator gives the larger fraction. With the same numerator, the larger denominator gives the smaller fraction.",
      "You can convert fractions to percentages (denominator 100) to compare scores and ratios."
    ],
    "ex.7.2.q": "Compare −3 1/4 and −16/5. Put <, > or = between them.",
    "ex.7.2.steps": [
      "−16/5 = −3 1/5",
      "Compare 3 1/4 with 3 1/5: 1/4 > 1/5 so 3 1/4 > 3 1/5",
      "Negative numbers reverse the order: −3 1/4 < −3 1/5 = −16/5"
    ],
    "ex.7.2.prompts": [
      "Convert −16/5 to a mixed number so both numbers have the same form. What are the whole part and the fraction part?",
      "With the same whole part 3, compare the fractions 1/4 and 1/5: which is larger, and why?",
      "When both numbers are negative, how does the order of size reverse? Which number is further left on the number line?"
    ],
    "ex.7.2.twist": "If −16/5 is changed to −13/4, how are −3 1/4 and −13/4 related? Put <, > or =.",
    "s.7.3.learn": [
      "You can only subtract fractions that have the same denominator. If the denominators differ, find a common denominator first.",
      "Method 1: convert mixed numbers to improper fractions, subtract, simplify, then convert back to a mixed number.",
      "Method 2: subtract the whole parts and the fraction parts separately; if the fraction part is not big enough, 'borrow' 1 from the whole part.",
      "Estimate first by rounding: 9 2/7 − 3 8/9 ≈ 9 − 4 = 5, so the result is close to 5, not 6 or 7.",
      "For perimeter problems: the missing side = the perimeter minus the sum of the known sides."
    ],
    "ex.7.3.q": "Work out 5 1/6 − 2 3/4.",
    "ex.7.3.steps": [
      "5 1/6 = 31/6 and 2 3/4 = 11/4",
      "Common denominator 12: 62/12 − 33/12 = 29/12",
      "29/12 = 2 5/12"
    ],
    "ex.7.3.prompts": [
      "Mixed numbers are hard to subtract directly. How do you convert each mixed number to an improper fraction?",
      "Two fractions with denominators 6 and 4: what is the lowest common denominator? Convert, then subtract the numerators.",
      "29/12 is a fraction greater than 1. How do you rewrite it as a mixed number?"
    ],
    "ex.7.3.twist": "If the subtraction is changed to addition: 5 1/6 + 2 3/4, what is the result (as an improper fraction)?",
    "s.7.4.learn": [
      "Partition a mixed number: a b/c × n = a × n + b/c × n. Each part must be multiplied by n.",
      "Fraction times a whole number: divide the whole number by the denominator, then multiply by the numerator, for example 2/3 × 12 = 12 ÷ 3 × 2 = 8.",
      "Estimate by rounding the mixed number: 4 2/3 × 20 ≈ 5 × 20 = 100 (the exact answer is 93 1/3).",
      "Another way: convert the mixed number to an improper fraction, then multiply, for example 3 2/3 × 8 = 11/3 × 8 = 88/3 = 29 1/3.",
      "Total = mean × number of items; area of a rectangle = length × width."
    ],
    "ex.7.4.q": "Work out 2 5/6 × 9.",
    "ex.7.4.steps": [
      "2 5/6 × 9 = 2 × 9 + 5/6 × 9",
      "= 18 + 45/6 = 18 + 7 1/2",
      "= 25 1/2"
    ],
    "ex.7.4.prompts": [
      "Split the mixed number into its whole part and fraction part, then multiply each by 9. How do you write the expression?",
      "Work out 2 × 9 and 5/6 × 9. Can the fraction 45/6 be simplified?",
      "Add the two results. What number do you get?"
    ],
    "ex.7.4.twist": "If you multiply 2 5/6 by 12, what is the result? Does the denominator 6 'disappear'?",
    "s.7.5.learn": [
      "n ÷ 1/k asks 'how many 1/k are there in n?'. The answer is n × k, for example 3 ÷ 1/2 = 6.",
      "The reciprocal of a fraction is the fraction with the numerator and denominator swapped: the reciprocal of 3/4 is 4/3.",
      "Dividing by a fraction is the same as multiplying by its reciprocal: 10 ÷ 3/4 = 10 × 4/3 = 40/3 = 13 1/3.",
      "Dividing a whole number by a fraction less than 1 gives a result greater than that number.",
      "A smaller fraction gives a larger quotient: 6 ÷ 1/2 = 12 > 6 ÷ 3/4 = 8."
    ],
    "ex.7.5.q": "Work out 7 ÷ 2/3.",
    "ex.7.5.steps": [
      "The reciprocal of 2/3 is 3/2",
      "7 × 3/2 = 21/2",
      "21/2 = 10 1/2"
    ],
    "ex.7.5.prompts": [
      "Dividing by a fraction: with 2/3, imagine 'how many 2/3 are there in 7'. Which calculation is equivalent?",
      "Multiply 7 by the upside-down fraction: what are the numerator and denominator now, and what is the result?",
      "How do you write 21/2 as a mixed number?"
    ],
    "ex.7.5.twist": "If you divide 7 by 3/2, is the result larger or smaller than 7? What is the value (as a fraction)?",
    "s.7.6.learn": [
      "Mental addition and subtraction: change one fraction to have the same denominator as the other (1/3 + 1/6 = 2/6 + 1/6 = 1/2).",
      "Cross method: a/b − c/d = (a×d − b×c)/(b×d), for example 4/5 − 3/4 = (16 − 15)/20 = 1/20.",
      "Mental division: n ÷ a/b = n × b ÷ a, for example 6 ÷ 3/4 = 6 × 4 ÷ 3 = 8.",
      "Always remember the order of operations: brackets first, then multiplication and division, then addition and subtraction.",
      "'The rest' word problems: take 1 minus the sum of the known parts."
    ],
    "ex.7.6.q": "Work out 3/4 × (1/2 + 1/3).",
    "ex.7.6.steps": [
      "Brackets first: 1/2 + 1/3 = 3/6 + 2/6 = 5/6",
      "Multiply: 3/4 × 5/6 = 15/24",
      "Simplify: 15/24 = 5/8"
    ],
    "ex.7.6.prompts": [
      "The expression has brackets: what do you calculate first? What common denominator do the fractions 1/2 and 1/3 need?",
      "Multiply 3/4 by the sum you just found: multiplying numerators and denominators gives which fraction?",
      "Do 15 and 24 have a common factor greater than 1? How do you simplify?"
    ],
    "ex.7.6.twist": "If the plus sign is replaced by a minus sign: 3/4 × (1/2 − 1/3), what is the result?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Grade 7 tests and gifted-student problems on fractions: recurring decimals, quick calculation, comparison, work rates and finding x.",
    "q.7.1-01.hints": [
      "3/8 means 3 divided by 8. How do you set up the division 3 ÷ 8?",
      "Add a decimal point and zeros to the 3 and keep dividing. What is the first digit after the decimal point?",
      "Does the division stop? If so, it is a terminating decimal."
    ],
    "q.7.1-01.explain": "3 ÷ 8 = 0.375. The division ends so this is a terminating decimal.",
    "q.7.1-02.hints": [
      "Work out 1 ÷ 6 using long division. What are the digits after the decimal point?",
      "After the digit 1, which digit repeats forever?",
      "Only the digit 6 repeats; the digit 1 appears just once."
    ],
    "q.7.1-02.explain": "1 ÷ 6 = 0.1666… only the digit 6 repeats, written 0.1(6). Common mistakes: rounding to 0.16 or thinking the whole '16' repeats.",
    "q.7.1-03.hints": [
      "Try changing the denominator to 10, 100 or 1000: which fraction is easy to change?",
      "The denominators 5, 20 and 8 have only the prime factors 2 and 5. What about the denominator 3?",
      "A denominator with a prime factor other than 2 and 5 gives a recurring decimal."
    ],
    "q.7.1-03.explain": "A fraction in simplest form whose denominator has only the factors 2 and 5 gives a terminating decimal. 2/3 has denominator 3 so 2/3 = 0.(6) is recurring.",
    "q.7.1-04.hints": [
      "Which group of digits repeats in 0.4545…? How many digits are in that group?",
      "Which digit is in the odd positions (1, 3, 5 ...)? Which in the even positions?",
      "Is 20 even or odd? Use this to find the digit."
    ],
    "q.7.1-04.explain": "The period is 45. Odd positions are 4, even positions are 5. Position 20 is even so the digit is 5.",
    "q.7.1-05.hints": [
      "What result do you already know 1 ÷ 3 gives when divided?",
      "3/10 = 0.3 exactly; does it repeat?",
      "33/100 = 0.33 stops, so which fraction is left that gives 0.333… forever?"
    ],
    "q.7.1-05.explain": "1 ÷ 3 = 0.333… so 0.(3) = 1/3. Common mistake: confusing 0.333… with 0.3 = 3/10 or 0.33 = 33/100, which are terminating.",
    "q.7.1-06.hints": [
      "Simplify 8/52 first. Which fraction do you get?",
      "Divide 2 by 13 using long division, taking the first 4 digits after the decimal point.",
      "The digits are 0.1538… What is the fourth digit?"
    ],
    "q.7.1-06.explain": "8/52 = 2/13 = 0.153846153846… The 4th digit after the decimal point is 8.",
    "q.7.1-07.hints": [
      "What fraction of an hour is 20 minutes? Simplify 20/60.",
      "Convert 1/3 to a decimal. 4 hours 20 minutes = 4 + 1/3 hours.",
      "4 hours 20 minutes = 4.333… hours. What is the 5th digit?"
    ],
    "q.7.1-07.explain": "20 minutes = 1/3 hour = 0.(3) hour so 4 hours 20 minutes = 4.333… hours. The 5th digit after the decimal point is 3.",
    "q.7.1-08.hints": [
      "A calculator shows only a limited number of digits. Have you seen a block of digits repeat yet?",
      "Continue the division 5 ÷ 13 by hand. After 384615 what comes next?",
      "The division repeats 384615 384615… so the period has 6 digits, not just the digit 8."
    ],
    "q.7.1-08.explain": "5/13 = 0.(384615), a period of 6 digits. The calculator shows only 8 digits so the final 8 is just rounding, not a period. You must keep dividing to see the repeating block.",
    "q.7.1-09.hints": [
      "Which fraction equals 0.333…? Which fraction equals 0.666…?",
      "Add those two fractions. What do the numerator and denominator give?",
      "So 0.333… + 0.666… = 0.999… equals which number?"
    ],
    "q.7.1-09.explain": "0.(3) = 1/3 and 0.(6) = 2/3, the sum is 3/3 = 1. So 0.999… = 1.",
    "q.7.1-10.hints": [
      "A unit fraction 1/n terminates when n has only which prime factors?",
      "Factorise each n from 2 to 12 into primes. Which n have only 2 and 5?",
      "List them: 2, 4, 5, 8, 10. Count again."
    ],
    "q.7.1-10.explain": "n with only the factors 2 and 5: 2, 4, 5, 8, 10, so 5 terminating fractions (0.5, 0.25, 0.2, 0.125, 0.1). The others recur.",
    "q.7.2-01.hints": [
      "Convert 11/4 to a mixed number. What do you get?",
      "Simplify the fraction part of 2 15/20.",
      "Are the two mixed numbers equal?"
    ],
    "q.7.2-01.explain": "11/4 = 2 3/4 and 2 15/20 = 2 3/4 so the two numbers are equal.",
    "q.7.2-02.hints": [
      "Convert 13/2 to a mixed number.",
      "Write 1/2 and 5/8 over the common denominator 8.",
      "Compare 4/8 with 5/8."
    ],
    "q.7.2-02.explain": "13/2 = 6 1/2 = 6 4/8 and 4/8 < 5/8 so 13/2 < 6 5/8.",
    "q.7.2-03.hints": [
      "The two fractions have the same numerator. If you cut a cake into 17 parts or 19 parts, which parts are bigger?",
      "The larger the denominator, what happens to each part?",
      "So are 8 of the bigger parts larger or smaller?"
    ],
    "q.7.2-03.explain": "With the same numerator, the larger the denominator, the smaller the fraction. 8/17 > 8/19. Common mistake: thinking a larger denominator means a larger fraction.",
    "q.7.2-04.hints": [
      "Convert the fractions greater than 1 to mixed numbers. Which fraction is less than 1?",
      "9/4 = 2 1/4 and 11/5 = 2 1/5, and what about 7/8?",
      "The fraction less than 1 is certainly the smallest number."
    ],
    "q.7.2-04.explain": "9/4 = 2 1/4, 11/5 = 2 1/5, and 7/8 < 1. So the smallest is 7/8.",
    "q.7.2-05.hints": [
      "Write them all over the common denominator 16 as negative mixed numbers: -1 12/16, -1 13/16, -1 10/16.",
      "Ignore the negative signs first: which number has the smallest absolute value?",
      "For negative numbers, the smaller the absolute value, the larger the number."
    ],
    "q.7.2-05.explain": "−7/4 = −1 12/16, −1 13/16, −1 5/8 = −1 10/16. The smallest absolute value is 1 10/16 so −1 5/8 is the largest. Common mistake: choosing the number with the largest fraction part.",
    "q.7.2-06.hints": [
      "Convert 17/25 to a fraction with denominator 100: multiply the numerator and denominator by which number?",
      "Do the same with 13/20.",
      "Compare the three percentages you found."
    ],
    "q.7.2-06.explain": "17/25 = 68%, 13/20 = 65%, Catrina 67%. The highest is 68%.",
    "q.7.2-07.hints": [
      "Convert 34/40 to a percentage. Divide or multiply?",
      "34/40 = 85/100. Which percentage?",
      "Take the difference of the two percentages."
    ],
    "q.7.2-07.explain": "34/40 = 85%, Irena 87%. They differ by 2 percentage points.",
    "q.7.2-08.hints": [
      "Convert both fractions to decimals (or percentages) by dividing.",
      "65/72 ≈ 0.9028. What is 35/38 ≈ ?",
      "Which decimal is larger?"
    ],
    "q.7.2-08.explain": "65/72 ≈ 0.903 (90.3%) while 35/38 ≈ 0.921 (92.1%). The second test is better. Using the common denominator 1368 is also correct but longer.",
    "q.7.2-09.hints": [
      "Convert the negative numbers to approximate decimals: -3.17, -0.82, -3.8, -4.4.",
      "For negative numbers, which one is furthest from 0 is the smallest.",
      "The order: -4 2/5, ?, -3 1/6, -9/11. What is the missing number?"
    ],
    "q.7.2-09.explain": "−4 2/5 (−4.4) < −19/5 (−3.8) < −3 1/6 (−3.17) < −9/11 (−0.82). The second number is −19/5.",
    "q.7.2-10.hints": [
      "Write 2 1/3 and 4 1/2 as fractions over 42. Which fractions do you get?",
      "a/7 = 6a/42. You need 98/42 < 6a/42 < 189/42, that is 98 < 6a < 189.",
      "Find the smallest and largest integer values of a, then count."
    ],
    "q.7.2-10.explain": "2 1/3 = 98/42, 4 1/2 = 189/42, a/7 = 6a/42. You need 98 < 6a < 189 so 16.3 < a < 31.5, a = 17, …, 31: that is 15 numbers.",
    "q.7.3-01.hints": [
      "Convert both mixed numbers to fractions with denominator 3.",
      "16/3 − 8/3 = ?",
      "Convert the result to a mixed number."
    ],
    "q.7.3-01.explain": "5 1/3 = 16/3, 2 2/3 = 8/3. 16/3 − 8/3 = 8/3 = 2 2/3.",
    "q.7.3-02.hints": [
      "Convert both mixed numbers to fractions with the same denominator 5.",
      "16/5 − 9/5 = ?",
      "Convert 7/5 to a mixed number."
    ],
    "q.7.3-02.explain": "16/5 − 9/5 = 7/5 = 1 2/5.",
    "q.7.3-03.hints": [
      "Convert to fractions: 9 1/6 = 55/6 and 3 5/12 = 41/12.",
      "Use the common denominator 12 and subtract the numerators.",
      "Simplify and convert to a mixed number."
    ],
    "q.7.3-03.explain": "55/6 − 41/12 = 110/12 − 41/12 = 69/12 = 23/4 = 5 3/4.",
    "q.7.3-04.hints": [
      "What is the lowest common multiple of 4 and 5?",
      "4 1/4 = 17/4 and 1 3/5 = 8/5. Use the common denominator 20.",
      "Subtract the numerators then convert to a mixed number."
    ],
    "q.7.3-04.explain": "17/4 − 8/5 = 85/20 − 32/20 = 53/20 = 2 13/20.",
    "q.7.3-05.choices": [
      "He subtracted 6 − 9 the wrong way round (9 − 6) and kept the whole number 4 unchanged",
      "He should not have changed 3/5 to tenths",
      "He forgot to simplify 3/10",
      "There is no mistake"
    ],
    "q.7.3-05.hints": [
      "Try estimating: 4 3/5 minus nearly 1 gives about what?",
      "Can the result 4 3/10 be right when you subtract a positive number?",
      "6/10 is smaller than 9/10, so you must 'borrow' 1 from the whole number 4. What did Rio do?"
    ],
    "q.7.3-05.explain": "6/10 < 9/10 so you cannot subtract; you must borrow 1 from 4 or convert to improper fractions. Rio took 9 − 6 = 3 and kept 4, which is wrong. Correct answer: 3 7/10.",
    "q.7.3-06.hints": [
      "Convert 4 3/5 to a fraction over 5, then over 10.",
      "46/10 − 9/10 = ?",
      "Convert to a mixed number."
    ],
    "q.7.3-06.explain": "4 3/5 = 23/5 = 46/10. 46/10 − 9/10 = 37/10 = 3 7/10.",
    "q.7.3-07.hints": [
      "Convert both to fractions: 133/8 and 57/5.",
      "What is the common denominator of 8 and 5?",
      "Subtract, then convert to a mixed number."
    ],
    "q.7.3-07.explain": "133/8 − 57/5 = 665/40 − 456/40 = 209/40 = 5 9/40 km.",
    "q.7.3-08.hints": [
      "Which two whole numbers is 9 2/7 between? Which is it closer to?",
      "Which whole number is 3 8/9 closest to?",
      "Work out 9 − 4, then see whether the fraction parts push the result up or down."
    ],
    "q.7.3-08.explain": "9 2/7 ≈ 9.3 and 3 8/9 ≈ 3.9. The difference ≈ 5.4 lies between 5 and 6. Taking only 9 − 4 = 5 is not enough to choose the exact interval.",
    "q.7.3-09.hints": [
      "The perimeter is the sum of the four sides. What do you need to find first: the sum of the three known sides?",
      "Add the three mixed numbers with common denominator 36: 5 4/36 + 8 24/36 + 9 30/36.",
      "Subtract the sum of the three sides from the perimeter."
    ],
    "q.7.3-09.explain": "5 4/36 + 8 24/36 + 9 30/36 = 22 58/36 = 23 22/36. 35 13/36 − 23 22/36 = 11 27/36 = 11 3/4 m.",
    "q.7.3-10.hints": [
      "You can subtract twice in a row, or add the two cut pieces and subtract once. Which will you choose?",
      "1 3/5 + 2 9/10 = 4 1/2. Now subtract it from 5 1/4.",
      "5 1/4 − 4 1/2 = ?"
    ],
    "q.7.3-10.explain": "1 3/5 + 2 9/10 = 4 1/2. 5 1/4 − 4 1/2 = 3/4 m.",
    "q.7.4-01.hints": [
      "What is 3 × 8?",
      "What is 1/2 of 8?",
      "Add the two results."
    ],
    "q.7.4-01.explain": "3 × 8 = 24, 1/2 × 8 = 4, total 28.",
    "q.7.4-02.hints": [
      "Partition 2 1/4 = 2 + 1/4.",
      "2 × 12 = ? and 1/4 × 12 = ?",
      "Add the two parts."
    ],
    "q.7.4-02.explain": "2 × 12 = 24, 1/4 × 12 = 3. Total 27.",
    "q.7.4-03.hints": [
      "Split 4 2/3 into 4 and 2/3.",
      "4 × 9 = 36. For 2/3 × 9: divide 9 by 3 then multiply by 2.",
      "Add the two parts."
    ],
    "q.7.4-03.explain": "4 × 9 = 36, 2/3 × 9 = 6, total 42.",
    "q.7.4-04.hints": [
      "Partition 8 3/5 = 8 + 3/5.",
      "3/5 × 10 = ? (divide 10 by 5 then multiply by 3).",
      "Add it to 8 × 10."
    ],
    "q.7.4-04.explain": "8 × 10 = 80, 3/5 × 10 = 6, total 86.",
    "q.7.4-05.hints": [
      "Area equals length times width. Partition 2 1/3 = 2 + 1/3.",
      "18 × 2 = 36, 18 × 1/3 = ?",
      "Add the two parts."
    ],
    "q.7.4-05.explain": "18 × 2 = 36, 18 × 1/3 = 6, area 42 m².",
    "q.7.4-06.choices": [
      "Only the whole number was multiplied by 8; the fraction 2/3 was not multiplied",
      "The learner should have added 8 instead of multiplying",
      "The fraction should have been turned upside down",
      "There is no mistake"
    ],
    "q.7.4-06.hints": [
      "Each part of the mixed number 3 2/3 must be multiplied by 8. Which parts did the learner multiply?",
      "What is 2/3 × 8? Is it equal to 2/3?",
      "2/3 × 8 = 16/3 = 5 1/3, which must be added to 24."
    ],
    "q.7.4-06.explain": "3 2/3 × 8 = 3 × 8 + 2/3 × 8 = 24 + 5 1/3 = 29 1/3. Common mistake: forgetting to multiply the fraction by 8.",
    "q.7.4-07.hints": [
      "Total = mean × number of items. How do you substitute the numbers?",
      "20 × 2 = 40 and 20 × 2/5 = ?",
      "Add the two parts."
    ],
    "q.7.4-07.explain": "20 × 2 = 40, 20 × 2/5 = 8. Total 48 litres (Lin's thought of 46 litres is wrong).",
    "q.7.4-08.hints": [
      "Work out the area: 3 3/5 × 2.",
      "The area is 7 1/5 m². How many whole square metres must she buy?",
      "Round UP to a whole number then multiply by 42."
    ],
    "q.7.4-08.explain": "Area = 7 1/5 m². She can only buy a whole number so she buys 8 m². Cost 8 × 42 = $336 (294 = 7 × 42 is not enough).",
    "q.7.4-09.hints": [
      "Partition 5 1/4 = 5 + 1/4.",
      "50 × 5 = 250 and 50 × 1/4 = 12.5.",
      "Add the two parts."
    ],
    "q.7.4-09.explain": "50 × 5 = 250, 50 × 1/4 = 12.5, total 262.5 minutes (4 hours 22.5 minutes).",
    "q.7.4-10.hints": [
      "Simplify 4/6 first. What new mixed number do you have?",
      "The simplified mixed number is 3 2/3. What is the denominator?",
      "n must be a multiple of the denominator, so the smallest n = ?"
    ],
    "q.7.4-10.explain": "3 4/6 = 3 2/3 (denominator 3). n = 3 gives 3 2/3 × 3 = 11. Common mistake: using the denominator 6 and answering 6.",
    "q.7.5-01.hints": [
      "Into how many quarters is each whole divided?",
      "There are 3 wholes, so the total number of parts is?",
      "Or multiply 3 by the denominator 4."
    ],
    "q.7.5-01.explain": "3 ÷ 1/4 = 3 × 4 = 12.",
    "q.7.5-02.hints": [
      "How many thirds are in one whole?",
      "Multiply the whole number by the denominator.",
      "6 × 3 = ?"
    ],
    "q.7.5-02.explain": "6 ÷ 1/3 = 6 × 3 = 18.",
    "q.7.5-03.hints": [
      "Length = area ÷ width. Which division do you write?",
      "16 ÷ 1/5 = 16 × 5.",
      "Work out 16 × 5."
    ],
    "q.7.5-03.explain": "Length = 16 ÷ 1/5 = 16 × 5 = 80 m.",
    "q.7.5-04.hints": [
      "Speed = distance ÷ time. Substitute the numbers.",
      "16 ÷ 1/6 = 16 × 6.",
      "How many kilometres per hour is the result?"
    ],
    "q.7.5-04.explain": "16 ÷ 1/6 = 16 × 6 = 96 km/h.",
    "q.7.5-05.hints": [
      "Ask: how many 2/3 are there in 4? What do you get by turning 2/3 upside down?",
      "4 × 3/2 = 12/2.",
      "Simplify."
    ],
    "q.7.5-05.explain": "4 ÷ 2/3 = 4 × 3/2 = 12/2 = 6.",
    "q.7.5-06.hints": [
      "What is the reciprocal of 5/6?",
      "9 × 6/5 = 54/5.",
      "Convert 54/5 to a mixed number."
    ],
    "q.7.5-06.explain": "9 × 6/5 = 54/5 = 10 4/5.",
    "q.7.5-07.hints": [
      "Dividing by a fraction is equivalent to multiplying by which fraction?",
      "Dividing by 3/4: what must 3/4 be turned into before multiplying?",
      "Will dividing a whole number by a fraction less than 1 give a result larger or smaller than the whole number?"
    ],
    "q.7.5-07.explain": "6 ÷ 3/4 = 6 × 4/3 = 8. Common mistakes: multiplying directly by 3/4 (forgetting to flip), or flipping the wrong number.",
    "q.7.5-08.hints": [
      "Multiply 11 by the reciprocal of 7/10.",
      "11 × 10/7 = 110/7.",
      "Convert 110/7 to a mixed number: how many times does 7 go into 110?"
    ],
    "q.7.5-08.explain": "11 × 10/7 = 110/7 = 15 5/7.",
    "q.7.5-09.choices": [
      "Yes: 6 ÷ 3/4 is bigger than 6 ÷ 1/2",
      "No: the larger fraction gives the smaller answer, e.g. 6 ÷ 1/2 = 12 but 6 ÷ 3/4 = 8",
      "Yes, because bigger numbers always give bigger answers",
      "No, the answers are always equal"
    ],
    "q.7.5-09.hints": [
      "Try specific numbers: work out 6 ÷ 1/2 and 6 ÷ 3/4.",
      "6 ÷ 1/2 = 12. What is 6 ÷ 3/4?",
      "Compare 12 and 8, then say which fraction is larger and which result is larger."
    ],
    "q.7.5-09.explain": "6 ÷ 1/2 = 12 while 6 ÷ 3/4 = 8. The larger fraction (3/4) gives the smaller quotient. Sofia is wrong.",
    "q.7.5-10.hints": [
      "Simplify 5/15 to which unit fraction?",
      "1 ÷ 1/3 = 3. Each time the dividend increases by 1, by how much does the answer increase?",
      "When the dividend is 10 the answer is 10 × 3."
    ],
    "q.7.5-10.explain": "5/15 = 1/3 so n ÷ 5/15 = 3n. With n = 10, the result is 30.",
    "q.7.6-01.hints": [
      "Change 1/3 into sixths.",
      "2/6 + 1/6 = ?",
      "Simplify."
    ],
    "q.7.6-01.explain": "1/3 = 2/6 so 2/6 + 1/6 = 3/6 = 1/2.",
    "q.7.6-02.hints": [
      "Change 4/5 to a fraction with denominator 15.",
      "7/15 + 12/15 = ?",
      "Convert to a mixed number."
    ],
    "q.7.6-02.explain": "4/5 = 12/15. 7/15 + 12/15 = 19/15 = 1 4/15.",
    "q.7.6-03.hints": [
      "Numerator = 5 × 2 − 7 × 1. Work out each product.",
      "10 − 7 = ?",
      "Denominator = 7 × 2 = 14."
    ],
    "q.7.6-03.explain": "(10 − 7)/14 = 3/14.",
    "q.7.6-04.hints": [
      "Length = area ÷ width.",
      "Mental trick: 10 × 4 ÷ 3.",
      "40 ÷ 3 = ?"
    ],
    "q.7.6-04.explain": "10 ÷ 3/4 = 10 × 4 ÷ 3 = 40/3 = 13 1/3 m.",
    "q.7.6-05.hints": [
      "The whole box is 1 = 10/10. Convert 1/5 and 1/2 to tenths.",
      "2/10 + 5/10 = ?",
      "The rest is 10/10 minus that."
    ],
    "q.7.6-05.explain": "1/5 + 1/2 = 7/10. Fraction of dark chocolates = 1 − 7/10 = 3/10.",
    "q.7.6-06.hints": [
      "What is the common denominator of 3 and 4?",
      "1/3 + 1/4 = 7/12.",
      "12/12 − 7/12 = ?"
    ],
    "q.7.6-06.explain": "1/3 + 1/4 = 7/12. Fraction that are tall = 1 − 7/12 = 5/12.",
    "q.7.6-07.choices": [
      "Added the numerators and the denominators separately",
      "Used a common denominator of 10 but forgot to simplify",
      "Should have multiplied the fractions",
      "No mistake"
    ],
    "q.7.6-07.hints": [
      "Try estimating: 2/5 is close to 1/2, so 2/5 + 1/10 is close to what? Is 3/15 = 1/5 reasonable?",
      "Do the two fractions have the same denominator yet? What must you do before adding?",
      "Change 2/5 to tenths, then add only the numerators."
    ],
    "q.7.6-07.explain": "2/5 = 4/10 so 2/5 + 1/10 = 5/10 = 1/2. Common mistake: adding both numerators and denominators (2 + 1)/(5 + 10).",
    "q.7.6-08.hints": [
      "Can you subtract the numerators and denominators separately? Change 1/2 to the denominator 6.",
      "5/6 − 3/6 = ?",
      "Simplify, then multiply by 1/3."
    ],
    "q.7.6-08.explain": "5/6 − 1/2 = 5/6 − 3/6 = 2/6 = 1/3. Then 1/3 × 1/3 = 1/9.",
    "q.7.6-09.hints": [
      "Do the brackets first. Use the common denominator 6.",
      "2 2/3 − 1 1/6 = 1 1/2.",
      "Multiply the result by 4."
    ],
    "q.7.6-09.explain": "2 4/6 − 1 1/6 = 1 3/6 = 1 1/2. Then 4 × 1 1/2 = 6.",
    "q.7.6-10.hints": [
      "Work out the two brackets separately. First bracket: 4 1/3 + 9 2/3 = ?",
      "Second bracket: 4/10 + 3/10 = 7/10.",
      "Divide 14 by 7/10: multiply by the reciprocal."
    ],
    "q.7.6-10.explain": "4 1/3 + 9 2/3 = 14, 2/5 + 3/10 = 7/10. 14 ÷ 7/10 = 14 × 10/7 = 20.",
    "q.ch-01.q": "The recurring decimal 0.(36) = a/b where a/b is a fraction in simplest form. Work out a + b.",
    "q.ch-01.hints": [
      "0.(36) = 36/99 (the period has 2 digits so the denominator is 99). How do you simplify?",
      "HCF(36, 99) = 9. What is the simplest-form fraction?",
      "Add the numerator and denominator of the simplest-form fraction."
    ],
    "q.ch-01.explain": "0.(36) = 36/99 = 4/11. So a + b = 4 + 11 = 15.",
    "q.ch-02.q": "Work out 0.(12) + 0.(21). Write the result as a fraction in simplest form.",
    "q.ch-02.hints": [
      "Write 0.(12) and 0.(21) as fractions with denominator 99.",
      "12/99 + 21/99 = ?",
      "Simplify using the HCF."
    ],
    "q.ch-02.explain": "12/99 + 21/99 = 33/99 = 1/3.",
    "q.ch-03.q": "Write 1/7 as the recurring decimal 0.(142857). Which digit is the 2024th digit after the decimal point?",
    "q.ch-03.hints": [
      "How many digits are in the period?",
      "Divide 2024 by 6 and find the remainder.",
      "The remainder is 2, so take the second digit of the period."
    ],
    "q.ch-03.explain": "The period 142857 has 6 digits. 2024 = 6 × 337 + 2 so the 2024th digit is the second digit of the period, which is 4.",
    "q.ch-04.q": "Calculate quickly A = 1/(1×2) + 1/(2×3) + 1/(3×4) + … + 1/(99×100).",
    "q.ch-04.hints": [
      "Write 1/(1×2) = 1 − 1/2 and 1/(2×3) = 1/2 − 1/3.",
      "When you add, how do the middle terms cancel?",
      "Only the first and last terms remain."
    ],
    "q.ch-04.explain": "1/(k(k+1)) = 1/k − 1/(k+1). The sum cancels leaving A = 1 − 1/100 = 99/100.",
    "q.ch-05.q": "Calculate B = 2/(1×3) + 2/(3×5) + 2/(5×7) + … + 2/(49×51).",
    "q.ch-05.hints": [
      "2/(1×3) = 1 − 1/3. By how much do the two factors differ?",
      "2/(3×5) = 1/3 − 1/5. What is the pattern?",
      "The sum collapses to 1 − 1/51."
    ],
    "q.ch-05.explain": "2/((2k−1)(2k+1)) = 1/(2k−1) − 1/(2k+1). Sum B = 1 − 1/51 = 50/51.",
    "q.ch-06.q": "Compare 12/25 and 13/24 using an intermediate fraction. Which method is correct?",
    "q.ch-06.choices": [
      "12/25 < 1/2 < 13/24 so 12/25 < 13/24",
      "12/25 > 1/2 > 13/24 so 12/25 > 13/24",
      "Both fractions are greater than 1/2 so they are equal",
      "You must use the common denominator 600 to compare, you cannot use an intermediate"
    ],
    "q.ch-06.hints": [
      "Compare 12/25 with 1/2: 12 against half of 25 (12.5).",
      "Compare 13/24 with 1/2: 13 against half of 24 (12).",
      "One fraction is less than 1/2 and the other is greater than 1/2: what do you conclude?"
    ],
    "q.ch-06.explain": "12/25 = 12/25 < 12.5/25 = 1/2 and 13/24 > 12/24 = 1/2. So 12/25 < 1/2 < 13/24. Using the common denominator 600 is also correct but long.",
    "q.ch-07.q": "The difference 2024/2025 − 2023/2024 is a fraction with numerator 1. What is its denominator?",
    "q.ch-07.hints": [
      "Write 2024/2025 = 1 − 1/2025 and 2023/2024 = 1 − 1/2024.",
      "Difference = 1/2024 − 1/2025. How do you find a common denominator?",
      "The common denominator is 2024 × 2025. Work out the product."
    ],
    "q.ch-07.explain": "2024/2025 − 2023/2024 = 1/2024 − 1/2025 = 1/(2024 × 2025) = 1/4098600. The denominator is 4098600.",
    "q.ch-08.q": "Tap A alone fills a tank in 6 hours, tap B alone fills the tank in 4 hours. If both taps are opened at the same time, after how many minutes is the tank full?",
    "q.ch-08.hints": [
      "In 1 hour, what fraction of the tank does tap A fill? Tap B?",
      "1/6 + 1/4 = 5/12 of the tank per hour. So how many hours does the whole tank take?",
      "Convert 12/5 hours to minutes: 12/5 × 60."
    ],
    "q.ch-08.explain": "In one hour the two taps fill 1/6 + 1/4 = 5/12 of the tank. Time = 12/5 hours = 2.4 hours = 144 minutes.",
    "q.ch-09.q": "A tank is empty. The inlet tap fills the tank in 5 hours, the outlet tap empties a full tank in 8 hours. If both taps are opened at the same time, after how many hours is the tank full? (Write a fraction or mixed number.)",
    "q.ch-09.hints": [
      "The inlet tap fills 1/5 of the tank per hour. What fraction per hour does the outlet drain?",
      "Each hour the water increases by 1/5 − 1/8 = ? of the tank.",
      "Time = 1 ÷ (fraction of tank gained per hour)."
    ],
    "q.ch-09.explain": "Each hour the water increases by 1/5 − 1/8 = 3/40 of the tank. Time = 1 ÷ 3/40 = 40/3 hours = 13 1/3 hours.",
    "q.ch-10.q": "Find x given that 2/3 · x + 1/4 = 5/6.",
    "q.ch-10.hints": [
      "First find 2/3 · x: take 1/4 away from 5/6.",
      "5/6 − 1/4 = 7/12. So 2/3 · x = 7/12.",
      "x = 7/12 ÷ 2/3. How do you divide fractions?"
    ],
    "q.ch-10.explain": "2/3 · x = 5/6 − 1/4 = 7/12. x = 7/12 × 3/2 = 21/24 = 7/8."
  },
  vi: {
    "q.7.2-10.howto": "Đếm các số nguyên a thỏa mãn. Nhập số lượng các số đó, không nhập các giá trị của a.",
    "q.7.2-09.howto": "Sắp xếp bốn số theo thứ tự từ nhỏ đến lớn. Chỉ nhập số đứng thứ hai, viết dưới dạng phân số không phải hỗn số (giữ dấu trừ).",
    "q.7.1-07.howto": "Viết 4 giờ 20 phút thành số giờ dạng số thập phân. Chỉ nhập một chữ số đứng ở vị trí thứ 5 sau dấu phẩy.",
    "q.7.1-06.howto": "Viết phân số dưới dạng số thập phân. Chỉ nhập một chữ số đứng ở vị trí thứ 4 sau dấu phẩy.",
    "q.7.1-01.q": "Dùng phép chia để viết 3/8 dưới dạng số thập phân.",
    "q.7.1-02.q": "Phát biểu nào về 1/6 dưới dạng số thập phân là đúng?",
    "q.7.1-02.choices": [
      "Đó là số thập phân hữu hạn 0,16",
      "Đó là số thập phân vô hạn tuần hoàn 0,1666… chỉ có chữ số 6 lặp lại",
      "Đó là số thập phân vô hạn tuần hoàn 0,161616…",
      "Đó là số thập phân hữu hạn 0,166"
    ],
    "q.7.1-03.q": "Không cần tính, phân số nào sau đây là số thập phân vô hạn tuần hoàn? (tất cả đều tối giản)",
    "q.7.1-04.q": "5/11 = 0,454545… Chữ số thứ 20 sau dấu phẩy là gì?",
    "q.7.1-05.q": "Phân số nào bằng số thập phân vô hạn tuần hoàn 0,333… ?",
    "q.7.1-06.q": "Rajim có 8 tuần nghỉ trong một năm 52 tuần. Viết 8/52 dưới dạng số thập phân. Chữ số thứ 4 sau dấu phẩy là gì? (8/52 = 2/13)",
    "q.7.1-07.q": "Ada viết 10 phút là 1/6 giờ = 0,1666… giờ. Dùng cách của bạn ấy, hãy viết 4 giờ 20 phút dưới dạng số giờ thập phân. Chữ số thứ 5 sau dấu phẩy là gì?",
    "q.7.1-08.q": "Marcus bấm 5 ÷ 13 và thấy 0,38461538. Bạn ấy nói: \"vậy 5/13 = 0,38461538 tuần hoàn với chữ số 8 lặp lại\". Sofia không đồng ý. Ai đúng?",
    "q.7.1-08.choices": [
      "Sofia: máy tính chỉ hiện 8 chữ số nên chưa thấy được khối lặp; hãy chia tiếp",
      "Marcus: mọi kết quả 8 chữ số đều phải tuần hoàn",
      "Sofia: 5/13 là số thập phân hữu hạn",
      "Marcus: chữ số cuối cùng hiện ra luôn lặp lại"
    ],
    "q.7.1-09.q": "Tính 0,333… + 0,666… ra một số duy nhất. (Hãy nghĩ mỗi số là một phân số.)",
    "q.7.1-10.q": "Trong các phân số đơn vị 1/2, 1/3, 1/4, …, 1/12 (mười một phân số), có bao nhiêu phân số là số thập phân hữu hạn?",
    "q.7.2-01.q": "Dấu nào làm cho biểu thức này đúng?  11/4  ☐  2 15/20",
    "q.7.2-02.q": "Dấu nào làm cho biểu thức này đúng?  13/2  ☐  6 5/8",
    "q.7.2-03.q": "Dấu nào làm cho biểu thức này đúng?  8/17  ☐  8/19",
    "q.7.2-04.q": "Cho 9/4, 7/8 và 11/5. Viết số nhỏ nhất trong ba số.",
    "q.7.2-05.q": "Số nào trong các số này là lớn nhất?  −7/4,  −1 13/16,  −1 5/8",
    "q.7.2-06.q": "Ba chị em làm một bài kiểm tra. Adele được 17/25, Belle được 13/20 và Catrina được 67%. Điểm cao nhất là bao nhiêu phần trăm?",
    "q.7.2-07.q": "Lớp của Steffan có 34 trong 40 học sinh đạt. Lớp của Irena có 87% đạt. Hai tỉ lệ đạt chênh nhau bao nhiêu điểm phần trăm?",
    "q.7.2-08.q": "Arun được 65/72 điểm trong bài kiểm tra đầu và 35/38 điểm trong bài thứ hai. Bạn ấy làm tốt hơn ở bài nào?",
    "q.7.2-08.choices": [
      "Bài đầu tiên",
      "Bài thứ hai",
      "Như nhau ở cả hai bài",
      "Không thể so sánh nếu không có mẫu số chung là 1368"
    ],
    "q.7.2-09.q": "Sắp xếp −3 1/6, −9/11, −19/5 và −4 2/5 theo thứ tự, số nhỏ nhất đứng đầu. Viết số thứ hai trong danh sách dưới dạng phân số không thực sự (lớn hơn 1).",
    "q.7.2-10.q": "Có bao nhiêu số nguyên a để phân số a/7 nằm hẳn giữa 2 1/3 và 4 1/2?",
    "q.7.3-01.q": "Tính 5 1/3 − 2 2/3.",
    "q.7.3-02.q": "Tính 3 1/5 − 1 4/5.",
    "q.7.3-03.q": "Tính 9 1/6 − 3 5/12.",
    "q.7.3-04.q": "Tính 4 1/4 − 1 3/5.",
    "q.7.3-05.q": "Rio tính 4 3/5 − 9/10 như sau: 4 3/5 = 4 6/10, rồi 4 6/10 − 9/10 = 4 3/10. Lỗi sai của bạn ấy là gì?",
    "q.7.3-05.choices": [
      "Bạn ấy lấy 6 − 9 ngược lại (9 − 6) và giữ nguyên số nguyên 4",
      "Bạn ấy không nên đổi 3/5 sang phần mười",
      "Bạn ấy quên rút gọn 3/10",
      "Không có lỗi"
    ],
    "q.7.3-06.q": "Tính đáp án đúng cho câu hỏi của Rio: 4 3/5 − 9/10.",
    "q.7.3-07.q": "Sami lái xe 16 5/8 km đến chỗ làm và 11 2/5 km đến siêu thị. Hiệu của hai quãng đường là bao nhiêu?",
    "q.7.3-08.q": "Không tìm đáp án chính xác, hãy cho biết 9 2/7 − 3 8/9 nằm giữa hai số nguyên nào?",
    "q.7.3-08.choices": [
      "4 và 5",
      "5 và 6",
      "6 và 7",
      "7 và 8"
    ],
    "q.7.3-09.q": "Chu vi của một tứ giác là 35 13/36 m. Ba cạnh của nó là 5 1/9 m, 8 2/3 m và 9 5/6 m. Cạnh thứ tư dài bao nhiêu?",
    "q.7.3-10.q": "Zalika có một thanh gỗ dài 5 1/4 m. Bạn ấy cắt đi 1 3/5 m, rồi cắt thêm 2 9/10 m. Còn lại bao nhiêu gỗ?",
    "q.7.4-01.q": "Tính 3 1/2 × 8 bằng cách tách: 3 × 8 + 1/2 × 8.",
    "q.7.4-02.q": "Tính 2 1/4 × 12.",
    "q.7.4-03.q": "Tính 4 2/3 × 9.",
    "q.7.4-04.q": "Tính 8 3/5 × 10.",
    "q.7.4-05.q": "Một hình chữ nhật có chiều dài 18 m và chiều rộng 2 1/3 m. Tính diện tích của nó.",
    "q.7.4-06.q": "Một học sinh tính 3 2/3 × 8 = 24 2/3. Lỗi sai là gì?",
    "q.7.4-06.choices": [
      "Chỉ nhân phần nguyên với 8; phân số 2/3 không được nhân",
      "Học sinh nên cộng 8 thay vì nhân",
      "Nên đảo ngược phân số",
      "Không có lỗi"
    ],
    "q.7.4-07.q": "Lin có 20 bình chứa. Lượng nước trung bình trong một bình là 2 2/5 lít. Tính tổng lượng nước.",
    "q.7.4-08.q": "Martha lát một hình chữ nhật dài 3 3/5 m và rộng 2 m. Gạch lát giá 42 đô la một mét vuông và bà chỉ mua được số mét vuông nguyên. Bà phải trả bao nhiêu?",
    "q.7.4-09.q": "Jamal mất 5 1/4 phút để trồng một khay cây con. Bạn ấy cần bao nhiêu phút cho 50 khay?",
    "q.7.4-10.q": "Số nguyên dương nhỏ nhất n để 3 4/6 × n là một số nguyên là bao nhiêu? (Cẩn thận: hãy rút gọn trước!)",
    "q.7.5-01.q": "Có bao nhiêu phần tư trong 3? Tính 3 ÷ 1/4.",
    "q.7.5-02.q": "Tính 6 ÷ 1/3.",
    "q.7.5-03.q": "Diện tích một hình chữ nhật là 16 m² và chiều rộng là 1/5 m. Chiều dài của nó là bao nhiêu?",
    "q.7.5-04.q": "Một ô tô đi 16 km trong 1/6 giờ. Dùng công thức tốc độ = quãng đường ÷ thời gian, tính tốc độ trung bình của nó.",
    "q.7.5-05.q": "Tính 4 ÷ 2/3.",
    "q.7.5-06.q": "Tính 9 ÷ 5/6. Viết đáp án dưới dạng hỗn số.",
    "q.7.5-07.q": "Cách nào đúng để tính 6 ÷ 3/4?",
    "q.7.5-08.q": "Tính 11 ÷ 7/10. Viết đáp án dưới dạng hỗn số.",
    "q.7.5-09.q": "Sofia nói: \"Khi chia một số nguyên cho hai phân số thực sự khác nhau, phân số lớn hơn cho đáp án lớn hơn.\" Bạn ấy có đúng không?",
    "q.7.5-10.q": "Quan sát dãy: 1 ÷ 5/15, 2 ÷ 5/15, 3 ÷ 5/15, … Các đáp án là 3, 6, 9, … Đáp án của phép tính thứ 10, 10 ÷ 5/15, là bao nhiêu?",
    "q.7.6-01.q": "Tính nhẩm 1/3 + 1/6. Viết đáp án dưới dạng tối giản.",
    "q.7.6-02.q": "Tính 7/15 + 4/5. Viết đáp án dưới dạng hỗn số.",
    "q.7.6-03.q": "Tính 5/7 − 1/2 bằng phương pháp chéo: (5 × 2 − 7 × 1) / (7 × 2).",
    "q.7.6-04.q": "Diện tích một lối đi là 10 m² và chiều rộng là 3/4 m. Chiều dài lối đi là bao nhiêu?",
    "q.7.6-05.q": "Trong một hộp sôcôla, 1/5 là sôcôla trắng, 1/2 là sôcôla sữa và phần còn lại là sôcôla đen. Sôcôla đen chiếm bao nhiêu phần của hộp?",
    "q.7.6-06.q": "Trong một đội khúc côn cầu, 1/3 số cầu thủ thấp và 1/4 có chiều cao trung bình. Số còn lại là cao. Cầu thủ cao chiếm bao nhiêu phần của đội?",
    "q.7.6-07.q": "Một học sinh viết 2/5 + 1/10 = 3/15. Lỗi sai là gì?",
    "q.7.6-07.choices": [
      "Cộng tử với tử và mẫu với mẫu riêng rẽ",
      "Dùng mẫu số chung là 10 nhưng quên rút gọn",
      "Nên nhân các phân số",
      "Không có lỗi"
    ],
    "q.7.6-08.q": "Tính 1/3 × (5/6 − 1/2). Marcus được kết quả 1/3 bằng cách nói 5/6 − 1/2 = 4/4 = 1. Đáp án đúng là gì?",
    "q.7.6-09.q": "Tính 4 × (2 2/3 − 1 1/6).",
    "q.7.6-10.q": "Tính (4 1/3 + 9 2/3) ÷ (2/5 + 3/10)."
  }
});
