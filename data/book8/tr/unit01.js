window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 1,
  en: {
    "q.1.2-09.howto": "The ? is the unknown bottom box. Find the number in the top box of the pyramid and enter only that number.",
    "u.realm": "Cipher City",
    "u.story": "You arrive in Cipher City, where every safe is locked with the product of two huge prime numbers. A thief can only open a safe by working backwards to find the two factors. Practise prime factorisation, HCF, LCM, roots and powers to become the best locksmith in the city!",
    "g.0.def": "A prime factor is a factor of a number that is itself prime; for example 12 = 2 × 2 × 3 has prime factors 2 and 3.",
    "g.1.def": "A diagram that splits a number into a product of two numbers until every branch ends in a prime number.",
    "g.2.def": "Take each common prime factor with the smallest power, then multiply them together.",
    "g.3.def": "Take every prime factor with the largest power, then multiply them together.",
    "g.4.def": "2³ = 2 × 2 × 2; the small 3 written above is the power (index).",
    "g.5.def": "A positive number has two square roots that are opposites: √25 = 5, and −5 is also a square root of 25.",
    "g.6.def": "Every number has just one cube root: ∛(−125) = −5.",
    "g.7.def": "The counting numbers and zero: 0, 1, 2, 3, …",
    "g.8.def": "A number that can be written as a fraction; every integer is a rational number.",
    "s.1.1.learn": [
      "Every integer greater than 1 is either a prime number or can be written as a product of prime numbers.",
      "Use a factor tree: split a number into a product of two numbers (not using 1) until every branch ends in a prime number.",
      "Write it in index form: 120 = 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5.",
      "HCF: take the common prime factors with the SMALLEST power. LCM: take every prime factor with the LARGEST power.",
      "Two different prime numbers always have HCF = 1 and LCM = their product."
    ],
    "ex.1.1.q": "Find the HCF and LCM of 120 and 75.",
    "ex.1.1.steps": [
      "120 = 2³ × 3 × 5 and 75 = 3 × 5².",
      "HCF: take the smallest powers: there is no common factor 2; 3¹ and 5¹ → 3 × 5 = 15.",
      "LCM: take the largest powers: 2³ × 3 × 5² = 8 × 3 × 25 = 600."
    ],
    "ex.1.1.prompts": [
      "To compare two numbers by their common factors, what form should you write each number in?",
      "Which prime factors appear in both numbers? For each common factor, do you keep the smaller or the larger power?",
      "Now gather every factor that appears in at least one number: which power do you take for each, and what is the product?"
    ],
    "ex.1.1.twist": "If 75 is changed to 125, what is the HCF of 120 and 125? Why is it smaller than before?",
    "s.1.2.learn": [
      "Negative × positive = negative; positive × negative = negative; for example −6 × 3 = −18.",
      "Negative × negative = positive; for example −5 × −2 = 10. You can see this from a pattern: the product goes up by 5 each time the second number goes down by 1.",
      "Division follows the same sign rule: two numbers with the same sign give a positive quotient, different signs give a negative quotient.",
      "Division is the inverse of multiplication, so it can be used to find a missing number: if x ÷ −4 = 8 then x = 8 × (−4).",
      "Order of operations: brackets first, then indices (powers), then multiplication and division, and finally addition and subtraction. Estimate by rounding the numbers."
    ],
    "ex.1.2.q": "Work out (−3 + −5) × −6.",
    "ex.1.2.steps": [
      "Do the brackets first: −3 + −5 = −8.",
      "Multiply: −8 × −6; both numbers are negative so the result is positive.",
      "= 48."
    ],
    "ex.1.2.prompts": [
      "The expression has brackets, so which operation do you do first? When you add two negative numbers, which way do you move on the number line?",
      "When you multiply two negative numbers, what is the sign of the product? How can you explain that rule?",
      "So what is 8 × 6, and which answer do you get once you attach the sign you found?"
    ],
    "ex.1.2.twist": "If it is changed to (−3 + 5) × (−6), what is the result? How does the sign of the product change?",
    "s.1.3.learn": [
      "5² = 25 and (−5)² = 25, so 25 has two square roots, 5 and −5. √25 means only the positive root: √25 = 5.",
      "A negative number has no square root because the square of any number is never negative. The equation x² = −25 has no solution.",
      "Every number (positive, negative or 0) has exactly one cube root: ∛125 = 5 and ∛(−125) = −5 because (−5)³ = −125.",
      "Be careful: −5² = −25 (only the 5 is squared) but (−5)² = 25.",
      "Natural numbers are 0, 1, 2, …; integers also include the negative numbers; rational numbers are numbers that can be written as fractions."
    ],
    "ex.1.3.q": "Solve x² = 64, x³ = 64 and x³ + 64 = 0. How many different real solutions do the three equations have altogether?",
    "ex.1.3.steps": [
      "x² = 64 has two solutions: x = 8 or x = −8.",
      "x³ = 64: x = ∛64 = 4 (one solution).",
      "x³ + 64 = 0 gives x³ = −64, so x = ∛(−64) = −4."
    ],
    "ex.1.3.prompts": [
      "How many numbers square to give 64? Try negative numbers too.",
      "A number cubed gives 64 (positive): can that number be negative? Why?",
      "From x³ + 64 = 0, rearrange and ask yourself: which number cubed gives −64?"
    ],
    "ex.1.3.twist": "If it is changed to x² = −64, how many real solutions are there? Why?",
    "s.1.4.learn": [
      "aⁿ means multiply n factors of a: 5³ = 5 × 5 × 5 = 125. The number n is the power (index).",
      "Going right along a table of powers, multiply by the base again; going left, divide, so 5¹ = 5 and 5⁰ = 1.",
      "Multiplying with the same base: add the powers: 6² × 6³ = 6⁵. Dividing with the same base: subtract the powers: 5⁶ ÷ 5⁴ = 5².",
      "Power of a power: multiply the powers: (3²)³ = 3⁶.",
      "You can only multiply or divide by adding or subtracting powers when the bases are the SAME."
    ],
    "ex.1.4.q": "Work out 7⁴ given that 7³ = 343, then find 7⁰.",
    "ex.1.4.steps": [
      "7⁴ = 7³ × 7 = 343 × 7 = 2401.",
      "Divide 7¹ by 7: 7⁰ = 7 ÷ 7 = 1."
    ],
    "ex.1.4.prompts": [
      "7⁴ has exactly one more factor of 7 than 7³. So what do you do to 343 to get 7⁴?",
      "Each time the power goes down by 1, what is the value divided by? Go from 7¹ down to 7⁰."
    ],
    "ex.1.4.twist": "Given 2⁵ = 32, work out 2⁶ and 2⁰, then add the two results. What is the total?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The final Cipher Gate only opens for arithmetic problems in the style of Grade 7–8 exams and gifted-student contests.",
    "q.1.1-01.q": "Write 120 as a product of prime factors (write each factor separately, with no indices). How many factors are there altogether?",
    "q.1.1-01.hints": [
      "Draw a factor tree for 120 = 12 × 10. Which numbers are at the ends of the branches?",
      "12 = 3 × 4 and 4 = 2 × 2; 10 = 2 × 5. List the prime numbers at the ends of the branches.",
      "Count: how many numbers are in 2, 2, 2, 3, 5?"
    ],
    "q.1.1-01.explain": "120 = 2 × 2 × 2 × 3 × 5 so there are 5 prime factors (counting repeats).",
    "q.1.1-02.q": "72 = 2ᵃ × 3². Find a.",
    "q.1.1-02.hints": [
      "What do you get when you divide 72 by 3² = 9?",
      "72 ÷ 9 = 8. Which power of 2 is 8?",
      "2 × 2 × 2 = 8, so what is the power?"
    ],
    "q.1.1-02.explain": "72 = 8 × 9 = 2³ × 3². So a = 3.",
    "q.1.1-03.q": "Which expression is 180 written as a product of prime factors?",
    "q.1.1-03.choices": [
      "2² × 3² × 5",
      "2 × 3² × 10",
      "2² × 3 × 15",
      "18 × 10"
    ],
    "q.1.1-03.hints": [
      "A prime factor must be a prime number. Are 10, 15 and 18 prime numbers?",
      "Test each option: what is 4 × 9 × 5?",
      "Rule out the options that still contain composite numbers."
    ],
    "q.1.1-03.explain": "180 = 2² × 3² × 5 = 4 × 9 × 5. The other answers contain 10, 15 or 18, which are composite numbers, so they are not fully factorised — a common mistake.",
    "q.1.1-04.q": "Work out the value of 2³ × 5 × 7².",
    "q.1.1-04.hints": [
      "What is 2³? What is 7²?",
      "Multiply 8 × 49 first. What do you get?",
      "Then multiply by 5."
    ],
    "q.1.1-04.explain": "2³ = 8, 7² = 49. 8 × 49 = 392; 392 × 5 = 1960.",
    "q.1.1-05.q": "Given 40 = 2 × 2 × 2 × 5 and 28 = 2 × 2 × 7, find the HCF of 40 and 28.",
    "q.1.1-05.hints": [
      "Which prime factors do the two numbers have in common?",
      "How many times does 2 appear in 40, and how many times in 28? Which count do you use?",
      "HCF = the product of the common factors, using the smallest number of times."
    ],
    "q.1.1-05.explain": "Common: 2 (3 times in 40, 2 times in 28 → take 2 times). 5 and 7 are not common. HCF = 2 × 2 = 4.",
    "q.1.1-06.q": "Use 40 = 2³ × 5 and 28 = 2² × 7 to find the LCM of 40 and 28.",
    "q.1.1-06.hints": [
      "The LCM must be divisible by both numbers, so it needs to contain all the factors of both.",
      "Take the largest power of each factor: 2³, 5, 7.",
      "Multiply 8 × 5 × 7."
    ],
    "q.1.1-06.explain": "LCM = 2³ × 5 × 7 = 8 × 35 = 280.",
    "q.1.1-07.q": "Find the HCF of 396 and 168.",
    "q.1.1-07.hints": [
      "Factorise each number: 396 = 4 × 99, 168 = 8 × 21.",
      "396 = 2² × 3² × 11 and 168 = 2³ × 3 × 7. Which factors are common?",
      "Take 2² and 3¹, then multiply."
    ],
    "q.1.1-07.explain": "396 = 2² × 3² × 11; 168 = 2³ × 3 × 7. Common factors with the smallest powers: 2² × 3 = 12.",
    "q.1.1-08.q": "Find the LCM of 396 and 168.",
    "q.1.1-08.hints": [
      "Use 396 = 2² × 3² × 11 and 168 = 2³ × 3 × 7.",
      "Take the largest power of 2, 3, 7 and 11. Write that product out.",
      "2³ × 3² × 7 × 11 = 72 × 77."
    ],
    "q.1.1-08.explain": "LCM = 2³ × 3² × 7 × 11 = 8 × 9 × 77 = 5544. Check: 396 × 168 ÷ 12 = 5544.",
    "q.1.1-09.q": "What is the LCM of 18 and 30?",
    "q.1.1-09.choices": [
      "90",
      "540",
      "6",
      "180"
    ],
    "q.1.1-09.hints": [
      "18 = 2 × 3² and 30 = 2 × 3 × 5. What is the largest power of each factor?",
      "Should you just multiply 18 × 30? The two numbers share the common factor 2 × 3.",
      "Work out 2 × 3² × 5."
    ],
    "q.1.1-09.explain": "LCM = 2 × 3² × 5 = 90. Common mistakes: multiplying 18 × 30 = 540 directly (that is only a common multiple, not the lowest) or choosing 6 (that is the HCF).",
    "q.1.1-10.q": "The HCF of 12 and N is 4, and the LCM of 12 and N is 60. Find N.",
    "q.1.1-10.hints": [
      "How is the product of the two numbers related to HCF × LCM?",
      "12 × N = 4 × 60.",
      "N = 240 ÷ 12. Check that HCF(12, N) = 4."
    ],
    "q.1.1-10.explain": "For two numbers a, b: a × b = HCF × LCM. 12 × N = 240 so N = 20. Check: 12 = 2² × 3, 20 = 2² × 5: HCF = 4, LCM = 60.",
    "q.1.2-01.q": "Work out −8 × −11.",
    "q.1.2-01.hints": [
      "What sign do you get when you multiply two negative numbers?",
      "Ignore the signs and work out 8 × 11 first.",
      "Attach a positive sign to the result."
    ],
    "q.1.2-01.explain": "Negative × negative = positive. 8 × 11 = 88 so −8 × −11 = 88.",
    "q.1.2-02.q": "Work out −42 ÷ −6.",
    "q.1.2-02.hints": [
      "What sign does the quotient have when both numbers have the same sign?",
      "What is 42 ÷ 6?",
      "Attach the sign."
    ],
    "q.1.2-02.explain": "−42 ÷ −6 = 7 because the same signs give a positive quotient, and 6 × 7 = 42.",
    "q.1.2-03.q": "Work out (−3 + −5) × −6.",
    "q.1.2-03.hints": [
      "What must you work out first, the brackets or the multiplication?",
      "−3 + −5 = ?",
      "Then multiply the result by −6."
    ],
    "q.1.2-03.explain": "−3 + −5 = −8; −8 × −6 = 48.",
    "q.1.2-04.q": "Work out −6 × (−2 − −7).",
    "q.1.2-04.hints": [
      "Inside the brackets: what happens when you subtract a negative number?",
      "−2 − (−7) = −2 + 7 = ?",
      "Multiply −6 by the result in the brackets."
    ],
    "q.1.2-04.explain": "−2 − −7 = −2 + 7 = 5; −6 × 5 = −30.",
    "q.1.2-05.q": "Find x if 16 ÷ x = −2.",
    "q.1.2-05.hints": [
      "If 16 ÷ x = −2 then what does x × (−2) equal?",
      "Or: x = 16 ÷ (−2).",
      "Work it out and check by dividing."
    ],
    "q.1.2-05.explain": "x = 16 ÷ (−2) = −8. Check: 16 ÷ (−8) = −2.",
    "q.1.2-06.q": "Select all the CORRECT calculations.",
    "q.1.2-06.choices": [
      "−2 × −5 = 10",
      "−5 × 2 = −10",
      "−6 × −3 = −18",
      "−20 ÷ −4 = −5"
    ],
    "q.1.2-06.hints": [
      "For each calculation, count the number of negative signs.",
      "An even number of negative signs gives a positive result, an odd number gives a negative result.",
      "Check −6 × −3 and −20 ÷ −4: can they be negative?"
    ],
    "q.1.2-06.explain": "−2 × −5 = 10 is correct; −5 × 2 = −10 is correct. −6 × −3 = +18 (not −18) and −20 ÷ −4 = +5 (not −5): the mistake is mixing up negative × negative.",
    "q.1.2-07.q": "Round to the nearest ten to estimate −48 × −29.",
    "q.1.2-07.hints": [
      "Round −48 and −29 to the nearest ten.",
      "−48 ≈ −50 and −29 ≈ −30.",
      "Work out −50 × −30."
    ],
    "q.1.2-07.explain": "−50 × −30 = 1500 (a positive product). The exact value is 1392, which is close to 1500.",
    "q.1.2-08.q": "Multiplication pyramid: each box is the product of the two boxes directly below it. The bottom row is −4, −5, −2. What is the number at the top?",
    "q.1.2-08.hints": [
      "Which two bottom boxes are multiplied to give the middle box of the second row?",
      "−4 × −5 = 20 and −5 × −2 = 10.",
      "Top = 20 × 10."
    ],
    "q.1.2-08.explain": "Second row: 20 and 10. Top: 20 × 10 = 200.",
    "q.1.2-09.q": "A multiplication pyramid has bottom row 5, −1, ? and the right-hand box of the second row is 6. Find the number at the top.",
    "q.1.2-09.hints": [
      "The right-hand box = (−1) × (third bottom box). Use 6 to find the third bottom box.",
      "−1 × ? = 6 so ? = −6. What is the left-hand box of the second row, 5 × (−1)?",
      "Top = (−5) × 6."
    ],
    "q.1.2-09.explain": "The third bottom box is −6. Second row: 5 × −1 = −5 and 6. Top: −5 × 6 = −30.",
    "q.1.2-10.q": "Multiply five negative integers together. What sign does the product have?",
    "q.1.2-10.choices": [
      "Positive",
      "Negative",
      "Could be positive or negative",
      "Zero"
    ],
    "q.1.2-10.hints": [
      "What sign do two negative numbers give when multiplied? Group the numbers into pairs.",
      "How many pairs are there, and how many negative numbers are left over?",
      "The pairs give positive; what sign does the leftover negative number give when multiplied in?"
    ],
    "q.1.2-10.explain": "Two pairs give positive × positive, and one negative is left over, so the product is negative. In general: an odd number of negative factors gives a negative product.",
    "q.1.3-01.q": "Work out (−7)².",
    "q.1.3-01.hints": [
      "Squaring means multiplying the number by itself. (−7) × (−7) = ?",
      "What is the sign of the product of two negative numbers?",
      "7 × 7 = ?"
    ],
    "q.1.3-01.explain": "(−7)² = (−7) × (−7) = 49.",
    "q.1.3-02.q": "Work out (−7)³.",
    "q.1.3-02.hints": [
      "(−7)³ = (−7) × (−7) × (−7). Work out the first two factors first.",
      "(−7) × (−7) = 49. Now multiply by −7.",
      "What is the sign of the result?"
    ],
    "q.1.3-02.explain": "49 × (−7) = −343.",
    "q.1.3-03.q": "Find ∛(−27).",
    "q.1.3-03.hints": [
      "Which number multiplied by itself three times gives 27?",
      "3³ = 27. Which negative number cubed gives −27?",
      "(−3)³ = ?"
    ],
    "q.1.3-03.explain": "(−3)³ = −27 so ∛(−27) = −3.",
    "q.1.3-04.q": "Solve the equation x² = 144. Select all the solutions.",
    "q.1.3-04.choices": [
      "12",
      "−12",
      "72",
      "0"
    ],
    "q.1.3-04.hints": [
      "Which positive number squares to give 144?",
      "What is the square of its opposite?",
      "Can 72 or 0 square to give 144?"
    ],
    "q.1.3-04.explain": "12² = 144 and (−12)² = 144. So x = 12 or x = −12. Common mistakes: forgetting the negative solution or halving 144 to get 72.",
    "q.1.3-05.q": "Solve x³ + 125 = 0.",
    "q.1.3-05.hints": [
      "Move 125 to the right-hand side: x³ = ?",
      "x³ = −125. Find the cube root of −125.",
      "Check by working out (−5)³."
    ],
    "q.1.3-05.explain": "x³ = −125 so x = ∛(−125) = −5.",
    "q.1.3-06.q": "How many solutions does the equation x² + 9 = 0 have?",
    "q.1.3-06.choices": [
      "One solution x = 3",
      "One solution x = −3",
      "Two solutions x = 3 and x = −3",
      "No solutions"
    ],
    "q.1.3-06.hints": [
      "Move 9 to the right-hand side: x² = ?",
      "Can the square of a number be negative?",
      "So what do you conclude about the number of solutions?"
    ],
    "q.1.3-06.explain": "x² = −9 but a square is always ≥ 0, so there are no solutions. Common mistake: choosing ±3 by ignoring the negative sign.",
    "q.1.3-07.q": "Work out ∛(4³) − ∛((−4)³).",
    "q.1.3-07.hints": [
      "What is ∛(4³)? The cube root and cubing are inverse operations.",
      "∛((−4)³) = ∛(−64) = ?",
      "Subtract: 4 − (−4)."
    ],
    "q.1.3-07.explain": "∛(4³) = 4 and ∛((−4)³) = −4. So 4 − (−4) = 8.",
    "q.1.3-08.q": "What is the value of −5²?",
    "q.1.3-08.choices": [
      "25",
      "−25",
      "10",
      "−10"
    ],
    "q.1.3-08.hints": [
      "Does the squaring apply to 5 or to −5?",
      "Work out 5² first, then put the minus sign in front.",
      "Compare with (−5)²."
    ],
    "q.1.3-08.explain": "−5² = −(5²) = −25, which is different from (−5)² = 25. Common mistake: mixing up the two notations.",
    "q.1.3-09.q": "The equation x² + x = 20 has two integer solutions. What is the sum of the two solutions?",
    "q.1.3-09.hints": [
      "Try x = 4: 4² + 4 = ?",
      "Try x = −5: (−5)² + (−5) = ?",
      "Add the two solutions 4 and −5."
    ],
    "q.1.3-09.explain": "4² + 4 = 20 and (−5)² − 5 = 20. The two solutions are 4 and −5, and their sum is −1.",
    "q.1.3-10.q": "In the list 5, −1/5, −500, 16, −4.8, 99½, how many numbers are natural numbers?",
    "q.1.3-10.hints": [
      "Natural numbers are the counting numbers 0, 1, 2, …",
      "Which numbers in the list are non-negative integers?",
      "5 and 16. Count them."
    ],
    "q.1.3-10.explain": "Only 5 and 16 are natural numbers. Negative numbers, fractions and decimals are not natural numbers.",
    "q.1.4-01.q": "Work out 2⁹.",
    "q.1.4-01.hints": [
      "2⁴ = 16. Keep multiplying up step by step.",
      "2⁵ = 32, 2⁶ = 64, 2⁷ = 128, …",
      "2⁸ = 256. What about 2⁹?"
    ],
    "q.1.4-01.explain": "2⁹ = 2⁸ × 2 = 256 × 2 = 512.",
    "q.1.4-02.q": "Work out 5⁰.",
    "q.1.4-02.hints": [
      "In the sequence 5³, 5², 5¹, … what do you do each time you move to the left?",
      "5¹ ÷ 5 = ?",
      "So what is 5⁰?"
    ],
    "q.1.4-02.explain": "5⁰ = 5¹ ÷ 5 = 1. Any non-zero number to the power 0 equals 1.",
    "q.1.4-03.q": "6² × 6³ = 6ⁿ. Find n.",
    "q.1.4-03.hints": [
      "6² = 6 × 6 and 6³ = 6 × 6 × 6. How many factors of 6 are there altogether?",
      "2 + 3 = ?",
      "n = ?"
    ],
    "q.1.4-03.explain": "Multiplying with the same base: add the powers: 2 + 3 = 5.",
    "q.1.4-04.q": "Given 3⁸ = 6561, work out 3⁹.",
    "q.1.4-04.hints": [
      "How is 3⁹ related to 3⁸?",
      "3⁹ = 3⁸ × 3.",
      "6561 × 3 = ?"
    ],
    "q.1.4-04.explain": "3⁹ = 3⁸ × 3 = 6561 × 3 = 19 683.",
    "q.1.4-05.q": "9³ × 9ᵐ = 9⁸. Find m.",
    "q.1.4-05.hints": [
      "With the same base 9: what do you do to the powers when multiplying?",
      "3 + m = 8.",
      "m = ?"
    ],
    "q.1.4-05.explain": "3 + m = 8 so m = 5.",
    "q.1.4-06.q": "(2³)² = 2ⁿ. Find n.",
    "q.1.4-06.hints": [
      "(2³)² = 2³ × 2³.",
      "Add the powers: 3 + 3 = ?",
      "Or multiply: 3 × 2."
    ],
    "q.1.4-06.explain": "(2³)² = 2³ × 2³ = 2⁶. Rule: multiply the two powers: 3 × 2 = 6.",
    "q.1.4-07.q": "5⁶ ÷ 5² equals:",
    "q.1.4-07.choices": [
      "5⁴",
      "5³",
      "1⁴",
      "5⁸"
    ],
    "q.1.4-07.hints": [
      "When you divide two powers with the same base, what happens to the powers?",
      "6 − 2 = ?",
      "Do you divide the powers or the bases?"
    ],
    "q.1.4-07.explain": "Dividing with the same base: subtract the powers: 5⁶ ÷ 5² = 5⁴. Common mistakes: dividing the powers (5³) or dividing the bases (1⁴).",
    "q.1.4-08.q": "Sofia says: \"4² = 2⁴ and 4³ = 3⁴\". Which comment is correct?",
    "q.1.4-08.choices": [
      "Both are correct",
      "Only the first statement is correct",
      "Only the second statement is correct",
      "Both are wrong"
    ],
    "q.1.4-08.hints": [
      "Work out 4² and 2⁴. Are they equal?",
      "Work out 4³ and 3⁴.",
      "Which of Sofia's statements is wrong?"
    ],
    "q.1.4-08.explain": "4² = 16 = 2⁴ is correct. 4³ = 64 but 3⁴ = 81 so it is wrong. So only the first statement is correct.",
    "q.1.4-09.q": "15³ can be written as 3ᵃ × 5ᵇ. Find a + b.",
    "q.1.4-09.hints": [
      "15 = 3 × 5. So 15³ = (3 × 5)³ = ?",
      "15³ = 3 × 5 × 3 × 5 × 3 × 5.",
      "Count the number of factors of 3 and of 5."
    ],
    "q.1.4-09.explain": "15³ = 3³ × 5³ so a = 3 and b = 3, a + b = 6.",
    "q.1.4-10.q": "4⁶ can be written as 2ⁿ. Find n.",
    "q.1.4-10.hints": [
      "Write 4 as a power of 2.",
      "4 = 2², so 4⁶ = (2²)⁶.",
      "Multiply the two powers."
    ],
    "q.1.4-10.explain": "4⁶ = (2²)⁶ = 2¹². So n = 12.",
    "q.ch-01.q": "Find the prime number p such that p + 2 and p + 4 are also prime numbers.",
    "q.ch-01.hints": [
      "Try p = 2: is p + 2 = 4 prime?",
      "Try p = 3, 5, 7: are p, p + 2, p + 4 all prime?",
      "For p > 3, is any of p, p + 2, p + 4 divisible by 3?"
    ],
    "q.ch-01.explain": "p = 3 gives 3, 5, 7, which are all prime. For p > 3, the three numbers p, p + 2, p + 4 leave different remainders when divided by 3, so one of them is divisible by 3 and greater than 3 — not prime. So p = 3.",
    "q.ch-02.q": "How many positive factors does 360 have altogether?",
    "q.ch-02.hints": [
      "Write 360 as a product of prime factors.",
      "360 = 2³ × 3² × 5.",
      "Number of factors = (3 + 1)(2 + 1)(1 + 1)."
    ],
    "q.ch-02.explain": "360 = 2³ × 3² × 5 so the number of factors is (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24.",
    "q.ch-03.q": "Two numbers a and b have HCF = 12 and LCM = 180. Given a = 36, find b.",
    "q.ch-03.hints": [
      "Remember the formula linking a × b, the HCF and the LCM.",
      "a × b = 12 × 180.",
      "b = 2160 ÷ 36."
    ],
    "q.ch-03.explain": "a × b = HCF × LCM = 12 × 180 = 2160 so b = 2160 ÷ 36 = 60. Check: HCF(36, 60) = 12, LCM = 180.",
    "q.ch-04.q": "Find x if 4ˣ = 8⁴.",
    "q.ch-04.hints": [
      "Write 4 and 8 as powers of 2.",
      "4ˣ = 2²ˣ and 8⁴ = 2¹².",
      "Compare the powers: 2x = 12."
    ],
    "q.ch-04.explain": "4ˣ = 2²ˣ and 8⁴ = (2³)⁴ = 2¹². The bases are the same so 2x = 12, x = 6.",
    "q.ch-05.q": "Compare 2³⁰⁰ and 3²⁰⁰.",
    "q.ch-05.choices": [
      "2³⁰⁰ > 3²⁰⁰",
      "2³⁰⁰ < 3²⁰⁰",
      "2³⁰⁰ = 3²⁰⁰",
      "Cannot be compared"
    ],
    "q.ch-05.hints": [
      "The two powers have different indices. Rewrite them with the same power 100.",
      "2³⁰⁰ = (2³)¹⁰⁰ = 8¹⁰⁰ and 3²⁰⁰ = (3²)¹⁰⁰ = 9¹⁰⁰.",
      "Compare 8¹⁰⁰ and 9¹⁰⁰."
    ],
    "q.ch-05.explain": "2³⁰⁰ = 8¹⁰⁰ < 9¹⁰⁰ = 3²⁰⁰. So 3²⁰⁰ is greater.",
    "q.ch-06.q": "Find the last digit of 7²⁰²⁴.",
    "q.ch-06.hints": [
      "Work out the last digit of 7¹, 7², 7³, 7⁴. After how many powers does the pattern repeat?",
      "The pattern has length 4: 7, 9, 3, 1. What is the remainder when 2024 is divided by 4?",
      "2024 is divisible by 4 so it behaves like 7⁴."
    ],
    "q.ch-06.explain": "7⁴ = 2401 ends in 1. 2024 = 4 × 506 so 7²⁰²⁴ = (7⁴)⁵⁰⁶ ends in 1.",
    "q.ch-07.q": "Find the last digit of 2²⁰²⁵.",
    "q.ch-07.hints": [
      "What are the last digits of 2¹, 2², 2³, 2⁴, 2⁵?",
      "The pattern has length 4: 2, 4, 8, 6.",
      "What is the remainder when 2025 is divided by 4?"
    ],
    "q.ch-07.explain": "2025 = 4 × 506 + 1 so 2²⁰²⁵ has the same last digit as 2¹, which is 2.",
    "q.ch-08.q": "Work out (2¹² × 3⁵ − 4⁶ × 9²) ÷ (2¹¹ × 3⁴).",
    "q.ch-08.hints": [
      "Rewrite 4⁶ and 9² using bases 2 and 3.",
      "4⁶ × 9² = 2¹² × 3⁴. Take out the common factor 2¹² × 3⁴ in the numerator.",
      "Numerator = 2¹² × 3⁴ × (3 − 1). Simplify with the denominator."
    ],
    "q.ch-08.explain": "4⁶ × 9² = 2¹² × 3⁴. Numerator = 2¹² × 3⁴(3 − 1) = 2¹³ × 3⁴. Dividing by 2¹¹ × 3⁴ gives 2² = 4.",
    "q.ch-09.q": "Find the integer x if (x − 2)³ = −27.",
    "q.ch-09.hints": [
      "−27 is the cube of which number?",
      "(−3)³ = −27 so x − 2 = ?",
      "Solve for x."
    ],
    "q.ch-09.explain": "(x − 2)³ = −27 so x − 2 = −3, x = −1. Check: (−1 − 2)³ = (−3)³ = −27.",
    "q.ch-10.q": "A teacher has 252 oranges and 168 tangerines and wants to share them into identical gift bags, each with the same number of oranges and the same number of tangerines, with no fruit left over. What is the greatest number of bags she can make?",
    "q.ch-10.hints": [
      "The number of bags must be a factor of both 252 and 168. To make the most bags, what should you choose?",
      "252 = 2² × 3² × 7 and 168 = 2³ × 3 × 7.",
      "HCF = 2² × 3 × 7."
    ],
    "q.ch-10.explain": "The number of bags is HCF(252, 168) = 2² × 3 × 7 = 84. Each bag has 3 oranges and 2 tangerines."
  },
  vi: {}
});
