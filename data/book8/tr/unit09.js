window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 9,
  en: {
    "q.ch-04.howto": "Enter the greatest number of squares you can make using no more than 100 matchsticks.",
    "u.realm": "Spiral Shell Cave",
    "u.story": "You have wandered into a cave full of giant spiral shells. Each coil is bigger than the one before it, following a secret rule. Only by finding the nth term formula and understanding the magic function machine can you unlock the way out.",
    "g.0.def": "A list of numbers arranged according to a rule.",
    "g.1.def": "A way to find the next term from the term just before it.",
    "g.2.def": "A way to find a term when you know its position in the sequence.",
    "g.3.def": "An expression in n that gives the term at position n, for example 3n + 4.",
    "g.4.def": "A relationship that gives exactly one output for each input.",
    "g.5.def": "A diagram of operations that turns an input x into an output y.",
    "g.6.def": "A function that takes the output y back to the input x.",
    "g.7.def": "A drawing of arrows joining inputs to outputs.",
    "s.9.1.learn": [
      "A sequence is a list of numbers that follows a rule. The term-to-term rule tells you how to find the next number.",
      "The rule can be adding or subtracting a number (including fractions and decimals) or have two steps such as 'multiply by 2 then add 5'.",
      "If you know the first term and the rule, you work out the terms one at a time.",
      "To go back to the previous term, do the inverse operations in the reverse order.",
      "A sequence that adds the same amount each time does not grow by 'doubling': the 20th term is not 2 times the 10th term."
    ],
    "ex.9.1.q": "The first term is 4 and the rule is 'multiply by 3 then add 2'. Write the first three terms.",
    "ex.9.1.steps": [
      "Term 1 = 4.",
      "Term 2 = 4 × 3 + 2 = 14.",
      "Term 3 = 14 × 3 + 2 = 44."
    ],
    "ex.9.1.prompts": [
      "The first term is given. What does the rule say about how to make the next term from the previous one?",
      "Use 4 as the input to the rule: do you multiply by 3 first or add 2 first? What is the result?",
      "Use the result you just found as the new input. Which term do you get?"
    ],
    "ex.9.1.twist": "If the first term is 1 and you still use the rule 'multiply by 3 then add 2', what is the third term?",
    "s.9.2.learn": [
      "A sequence of patterns gives a number sequence: count the dots or squares in each pattern.",
      "A position-to-term rule lets you work out the term at any position straight away.",
      "The amount it goes up by each step is the multiplier of the position: if it goes up by 3, you have 3 × position.",
      "Make a table: position, term, multiples of the difference, then see how much you need to add or subtract to match.",
      "Always check the rule with at least two positions."
    ],
    "ex.9.2.q": "The patterns have 4, 7, 10, … squares. Find the position-to-term rule.",
    "ex.9.2.steps": [
      "The difference is 3, so look at 3 × position = 3, 6, 9, 12.",
      "Compared with the sequence 4, 7, 10, 13: each term is 1 more.",
      "The rule: term = 3 × position + 1."
    ],
    "ex.9.2.prompts": [
      "Each time you move to the next pattern, how many more squares are there? What does that suggest you multiply the position by?",
      "Make the sequence 3, 6, 9, 12 and put it next to the real sequence 4, 7, 10, 13. What is the difference between them, and is it constant?",
      "Put the two observations together to make a formula in terms of the position n."
    ],
    "ex.9.2.twist": "If the patterns have 5, 9, 13, … squares, what is the position-to-term rule in terms of n?",
    "s.9.3.learn": [
      "Replace the word 'position' with n: term = 2 × position + 3 is written as the nth term 2n + 3.",
      "To find the kth term, substitute n = k into the expression.",
      "To find the nth term of a linear sequence: the coefficient of n equals the common difference, then add or subtract to match the first term.",
      "To check whether a number is in the sequence: solve 'expression = that number'; n must be a positive integer.",
      "A decreasing sequence has a negative coefficient of n, for example 30 − 6n."
    ],
    "ex.9.3.q": "Find the nth term of the sequence 7, 10, 13, 16, …",
    "ex.9.3.steps": [
      "The difference is 3, so the coefficient of n is 3: table 3n = 3, 6, 9, 12.",
      "Each term of the sequence is 4 more than 3n.",
      "The nth term: 3n + 4."
    ],
    "ex.9.3.prompts": [
      "How far apart are the terms? That number will be multiplied by n in the formula. How do you make the table of 3n?",
      "Compare the real terms 7, 10, 13, 16 with the 3n table: what is the constant difference?",
      "Combine them into a formula for the nth term. Try n = 1 and n = 2 to see whether you get 7 and 10."
    ],
    "ex.9.3.twist": "For the sequence 7, 10, 13, 16, … use the formula to find the 50th term. What is it?",
    "s.9.4.learn": [
      "A function is a relationship between two sets of numbers: the input x and the output y.",
      "You can draw a one-step or two-step function machine, a mapping diagram, or a table of x and y values.",
      "Write a function as an equation starting y = …, for example 'multiply by 2 then add 1' is y = 2x + 1.",
      "The inverse function goes from y back to x: reverse each operation in the opposite order. For example if y = 2x + 4 then x = (y − 4) ÷ 2.",
      "To find a function from a table of values, look at how much y changes when x changes by a given amount."
    ],
    "ex.9.4.q": "A two-step machine: × 2 then + 1. For x = 0, 2, 3, 4½ find y and write the equation.",
    "ex.9.4.steps": [
      "0 → 0 × 2 + 1 = 1; 2 → 5; 3 → 7; 4½ → 10.",
      "Equation: y = 2x + 1."
    ],
    "ex.9.4.prompts": [
      "For each value of x, which two steps does the machine do, and in what order? Try x = 0 and x = 2 first.",
      "Look at the (x, y) pairs you have just worked out, then write the machine's rule as a formula linking y and x."
    ],
    "ex.9.4.twist": "If the machine changes the order to '+ 1 then × 2', what is the value of y when x = 3?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Sequences, matchstick patterns and sum problems in the style of Vietnamese Grade 7–8 contests are waiting for you in the cave!",
    "q.9.1-01.hints": [
      "What is the last term given?",
      "Add 3½ to the last term.",
      "17½ + 3½ = ?"
    ],
    "q.9.1-01.explain": "The rule is add 3½: 17½ + 3½ = 21.",
    "q.9.1-02.hints": [
      "Subtract the first term from the second term.",
      "5¼ − 5 = ?",
      "Write ¼ as a decimal."
    ],
    "q.9.1-02.explain": "Each term goes up by ¼ = 0.25.",
    "q.9.1-03.hints": [
      "Find the second term first: 4 × 3 + 2.",
      "The second term is 14.",
      "Apply the rule to 14: 14 × 3 + 2."
    ],
    "q.9.1-03.explain": "Term 2: 4 × 3 + 2 = 14. Term 3: 14 × 3 + 2 = 44.",
    "q.9.1-04.hints": [
      "Second term: 8 × 2 − 5 = ?",
      "Third term: 11 × 2 − 5 = ?",
      "The third term is 17. Apply the rule once more."
    ],
    "q.9.1-04.explain": "8 → 11 → 17 → 17 × 2 − 5 = 29.",
    "q.9.1-05.hints": [
      "Write out the terms one after another.",
      "9 → (9 − 6) × 2 = 6 → (6 − 6) × 2 = ?",
      "The third term is 0; what is the next term?"
    ],
    "q.9.1-05.explain": "9, 6, 0, then (0 − 6) × 2 = −12. The first negative term is −12.",
    "q.9.1-06.hints": [
      "Write a few more terms: what comes after 9.5?",
      "The new term is the mean of the old term and 10. Which two numbers does it lie between?",
      "If a number smaller than 10 is averaged with 10, can it go over 10?"
    ],
    "q.9.1-06.explain": "Each new term is the mean of the previous term and 10, so it always lies between the previous term and 10: it gets closer to 10 but never exceeds 10.",
    "q.9.1-07.hints": [
      "Try each rule on 8. Which rule gives 10?",
      "Then try again on 10 to see whether it gives 14.",
      "The rule 'add 2 each time' gives 8, 10, 12; does that match?"
    ],
    "q.9.1-07.explain": "(8 − 3) × 2 = 10 and (10 − 3) × 2 = 14. The other rules are right for only one step or wrong straight away. 'Add 2' gives 12, not 14.",
    "q.9.1-08.hints": [
      "How many steps of adding are there from the 10th term to the 20th term?",
      "Each step adds 4⅗. Does the term double, or does it increase by a fixed amount?",
      "The 20th term = the 10th term + 10 lots of 4⅗."
    ],
    "q.9.1-08.explain": "The sequence grows by a constant amount (adding), not by multiplying. The 20th term = the 10th term + 10 × 4⅗, not 2 × the 10th term. Mistake: confusing an adding rule with direct proportion.",
    "q.9.1-09.hints": [
      "How many steps are there from the 10th term to the 20th term?",
      "Each step adds 4.6. So how much is added altogether?",
      "50.4 + 10 × 4.6."
    ],
    "q.9.1-09.explain": "10 steps × 4.6 = 46. 50.4 + 46 = 96.4.",
    "q.9.1-10.hints": [
      "To go back one step, do the inverse operations in the reverse order: divide by 2 then subtract 3.",
      "Term 6: 442 ÷ 2 − 3 = 218.",
      "Go back two more times: 218 → ? → ?"
    ],
    "q.9.1-10.explain": "Term 6: 442 ÷ 2 − 3 = 218. Term 5: 218 ÷ 2 − 3 = 106. Term 4: 106 ÷ 2 − 3 = 50. Check: (50 + 3) × 2 = 106.",
    "q.9.2-01.hints": [
      "Substitute position 10 into the rule.",
      "2 × 10 = ?",
      "Add 3."
    ],
    "q.9.2-01.explain": "2 × 10 + 3 = 23 dots.",
    "q.9.2-02.hints": [
      "Where does the multiplier of the position come from? (how much it goes up each step)",
      "Try position 1: 2 × 1 = 2; you need 5, so how much must you add?",
      "Check that position 2 gives 7."
    ],
    "q.9.2-02.explain": "It goes up by 2 each step, so multiply the position by 2. 2 × 1 = 2, you need 5, so add 3. Check: 2 × 2 + 3 = 7.",
    "q.9.2-03.hints": [
      "How many more squares does each pattern have?",
      "The multiplier of n is 3. Try 3 × 1 = 3; you need 4.",
      "Add 1."
    ],
    "q.9.2-03.explain": "Each step adds 3 squares so you have 3n; 3 × 1 = 3 is 1 short so add 1: 3n + 1. Check n = 3: 10.",
    "q.9.2-04.hints": [
      "How many more squares does each pattern have?",
      "The rule: 2 × position + 1.",
      "Substitute position 15."
    ],
    "q.9.2-04.explain": "term = 2n + 1. For n = 15: 2 × 15 + 1 = 31.",
    "q.9.2-05.hints": [
      "How much does it go up each time?",
      "Try 4 × 1 = 4; you need 6.",
      "You need to add 2."
    ],
    "q.9.2-05.explain": "It goes up by 4 each time so 4n; 4 × 1 = 4 is 2 short, so 4n + 2. Check n = 3: 14.",
    "q.9.2-06.hints": [
      "How many more rectangles does each pattern have?",
      "It goes up by 5, so multiply the position by 5 then subtract a number.",
      "5 × 1 = 5, you need 3 so subtract 2. Substitute n = 12."
    ],
    "q.9.2-06.explain": "term = 5n − 2. For n = 12: 5 × 12 − 2 = 58.",
    "q.9.2-07.hints": [
      "Try Harsha's rule with position 1: does it give 4?",
      "The multiplier of the position is the amount it goes up each step, not the first term.",
      "The difference is 2; 2 × 1 = 2, you need 4 so add 2."
    ],
    "q.9.2-07.explain": "4 × 1 + 2 = 6, not 4. Harsha confused the first term with the multiplier. The amount it goes up each step (2) is the multiplier: 2n + 2.",
    "q.9.2-08.hints": [
      "How much does it go up each step?",
      "5 × 1 = 5; you need 10.",
      "Add 5."
    ],
    "q.9.2-08.explain": "It goes up by 5 so 5n; 5 × 1 = 5 is 5 short so add 5: 5n + 5.",
    "q.9.2-09.hints": [
      "How much does it go up each step?",
      "It goes up by 20 so 20n; 20 × 1 = 20, you need 10.",
      "The rule is 20n − 10. Substitute n = 20."
    ],
    "q.9.2-09.explain": "term = 20n − 10. For n = 20: 400 − 10 = 390.",
    "q.9.2-10.hints": [
      "Check Razi's rule with position 2, not just position 1.",
      "2 × 2 + 3 = ? Does it equal 8?",
      "The real difference is 3, so the multiplier is 3."
    ],
    "q.9.2-10.explain": "Checking one position is not enough. For position 2: 2 × 2 + 3 = 7 ≠ 8. The difference is 3 so the correct rule is 3n + 2 (3 × 1 + 2 = 5, 3 × 2 + 2 = 8).",
    "q.9.3-01.hints": [
      "Replace n with 10.",
      "2 × 10 = ?",
      "Subtract 1."
    ],
    "q.9.3-01.explain": "2 × 10 − 1 = 19.",
    "q.9.3-02.hints": [
      "Substitute n = 8.",
      "½ × 8 = ?",
      "Add 6."
    ],
    "q.9.3-02.explain": "½ × 8 + 6 = 4 + 6 = 10.",
    "q.9.3-03.hints": [
      "How much does it go up each step? That is the coefficient of n.",
      "3 × 1 = 3; you need 7.",
      "Add 4."
    ],
    "q.9.3-03.explain": "It goes up by 3 so 3n; 3 × 1 = 3 is 4 short. The nth term: 3n + 4.",
    "q.9.3-04.hints": [
      "The coefficient of n is the difference.",
      "5 × 1 = 5; you need 6.",
      "Add 1."
    ],
    "q.9.3-04.explain": "It goes up by 5 so 5n; 5 × 1 = 5 is 1 short so add 1: 5n + 1.",
    "q.9.3-05.hints": [
      "The coefficient of n is 4. Try 4 × 1.",
      "4 × 1 = 4; you need 3.",
      "You must subtract 1."
    ],
    "q.9.3-05.explain": "It goes up by 4 so 4n; 4 × 1 = 4 but the first term is 3, so subtract 1: 4n − 1.",
    "q.9.3-06.hints": [
      "The sequence goes down by 6 each step, so what is the coefficient of n?",
      "The coefficient is −6. −6 × 1 = −6; you need 24.",
      "Add 30."
    ],
    "q.9.3-06.explain": "It goes down by 6 so the coefficient of n is −6. −6 × 1 = −6, you need 24 so add 30: 30 − 6n (or −6n + 30). Check n = 5: 0.",
    "q.9.3-07.hints": [
      "Set up the equation 3n + 5 = the given number.",
      "Solve for n; n must be a positive integer.",
      "For 50: 3n = 45. What about 48: 3n = 43?"
    ],
    "q.9.3-07.explain": "3n + 5 = 50 gives n = 15 (an integer). 48, 52, 54 give n = 43/3, 47/3, 49/3, which are not integers. Mistake: finding n without checking whether n is an integer.",
    "q.9.3-08.hints": [
      "Work out A: substitute n = 12 into 8n − 4.",
      "A = 92. Work out B: substitute n = 7 into 11n + 16.",
      "B = 93. Work out B − A."
    ],
    "q.9.3-08.explain": "A = 8 × 12 − 4 = 92; B = 11 × 7 + 16 = 93. B − A = 1 so card B is larger.",
    "q.9.3-09.hints": [
      "Set up the equation 6n − 5 = 79.",
      "Add 5 to both sides: 6n = 84.",
      "Divide by 6."
    ],
    "q.9.3-09.explain": "6n − 5 = 79 → 6n = 84 → n = 14. So 79 is the 14th term.",
    "q.9.3-10.hints": [
      "Is the given sequence increasing or decreasing?",
      "Is the coefficient of n in 2n + 22 positive or negative? So does the expression increase or decrease?",
      "If a sequence is decreasing, what sign must the coefficient of n have?"
    ],
    "q.9.3-10.explain": "A steadily decreasing sequence must have a negative coefficient of n (−6). 2n + 22 has a positive coefficient so it increases: 24, 26, 28, … (the first term 24 still fits but the later terms do not).",
    "q.9.4-01.hints": [
      "What operation does the machine do to the input?",
      "2½ + 5 = ?",
      "Write it as a decimal."
    ],
    "q.9.4-01.explain": "Output = 2.5 + 5 = 7.5.",
    "q.9.4-02.hints": [
      "Do the first operation: 4.5 × 2.",
      "The result of step 1 is 9.",
      "Do step 2: 9 + 1."
    ],
    "q.9.4-02.explain": "4.5 × 2 = 9; 9 + 1 = 10.",
    "q.9.4-03.hints": [
      "19 ÷ 2 = ?",
      "Step 1 gives 9.5.",
      "Subtract 3."
    ],
    "q.9.4-03.explain": "19 ÷ 2 = 9.5; 9.5 − 3 = 6.5.",
    "q.9.4-04.hints": [
      "To find the input, go backwards through each step.",
      "The inverse of − 1 is + 1: 26 + 1 = 27.",
      "The inverse of × 3 is ÷ 3."
    ],
    "q.9.4-04.explain": "Reverse: 26 + 1 = 27, then 27 ÷ 3 = 9. Check: 9 × 3 − 1 = 26.",
    "q.9.4-05.hints": [
      "Reverse the last step first: what is the inverse of + 5?",
      "11.5 − 5 = 6.5.",
      "The inverse of ÷ 2 is × 2."
    ],
    "q.9.4-05.explain": "11.5 − 5 = 6.5; 6.5 × 2 = 13. Check: 13 ÷ 2 + 5 = 11.5.",
    "q.9.4-06.hints": [
      "x is the input and y is the output.",
      "What do you get when you multiply x by 2?",
      "Then add 1."
    ],
    "q.9.4-06.explain": "x × 2 + 1 is written briefly as y = 2x + 1.",
    "q.9.4-07.hints": [
      "Which operation comes first: subtracting or multiplying?",
      "After subtracting 3 we have (x − 3).",
      "Multiply that whole expression by 8, remembering the brackets."
    ],
    "q.9.4-07.explain": "Subtract 3 first: (x − 3), then multiply by 8: y = 8(x − 3) = 8x − 24. A common mistake: writing 8x − 3 (forgetting the brackets).",
    "q.9.4-08.hints": [
      "The function does: multiply by 2 then add 4. How do you reverse it in the opposite order?",
      "First subtract 4 from y, then divide by 2.",
      "Brackets: subtracting 4 must happen before dividing."
    ],
    "q.9.4-08.explain": "Reverse each step backwards: subtract 4 then divide by 2, that is x = (y − 4) ÷ 2. 'y ÷ 2 − 4' is wrong because it divides first and then subtracts.",
    "q.9.4-09.hints": [
      "Try x = 4 in both expressions.",
      "Both give 13. Try x = 5.5.",
      "3 × 5.5 + 1 = 17.5 and 4 × 5.5 − 3 = ? Does it equal 19?"
    ],
    "q.9.4-09.explain": "For x = 5.5: 3x + 1 = 17.5 ≠ 19 so Sofia is wrong; 4x − 3 = 19 ✓, and x = 7: 25 ✓. Only Arun is correct. You must test every pair of values, not just one pair.",
    "q.9.4-10.hints": [
      "When x goes up by 4, y goes up by 2: how much does y change when x goes up by 1?",
      "The coefficient of x is ½, so y = ½x + b. Use x = 4, y = 11 to find b.",
      "b = 11 − 2 = 9. Work out ½ × 20 + 9."
    ],
    "q.9.4-10.explain": "The coefficient of x is 2 ÷ 4 = ½. 11 = ½ × 4 + b so b = 9, y = ½x + 9. For x = 20: 10 + 9 = 19.",
    "q.ch-01.q": "For the sequence 3, 7, 11, 15, … find the 50th term.",
    "q.ch-01.hints": [
      "What is the difference between two consecutive terms?",
      "The nth term has the form 4n − 1.",
      "Substitute n = 50."
    ],
    "q.ch-01.explain": "The nth term is 4n − 1 (4 × 1 − 1 = 3). The 50th term = 4 × 50 − 1 = 199.",
    "q.ch-02.q": "For the sequence 5, 8, 11, 14, … which term of the sequence is the number 302?",
    "q.ch-02.hints": [
      "Find the nth term of the sequence.",
      "The nth term is 3n + 2.",
      "Solve 3n + 2 = 302."
    ],
    "q.ch-02.explain": "3n + 2 = 302 so 3n = 300, n = 100. The number 302 is the 100th term.",
    "q.ch-03.q": "Squares are made in a row with matchsticks: 1 square needs 4 matchsticks, 2 squares need 7 matchsticks, 3 squares need 10 matchsticks, … How many matchsticks are needed to make 25 squares?",
    "q.ch-03.hints": [
      "Each time we add one more square, how many more matchsticks do we add?",
      "The number of matchsticks for n squares is 3n + 1.",
      "Substitute n = 25."
    ],
    "q.ch-03.explain": "The first square needs 4 matchsticks and each further square adds 3 matchsticks, so the number of matchsticks = 3n + 1. For n = 25: 3 × 25 + 1 = 76 matchsticks.",
    "q.ch-04.q": "With the matchstick square rule (n squares need 3n + 1 matchsticks), if you have 100 matchsticks, what is the greatest number of squares you can make?",
    "q.ch-04.hints": [
      "You need 3n + 1 ≤ 100.",
      "3n ≤ 99.",
      "Divide 99 by 3."
    ],
    "q.ch-04.explain": "3n + 1 ≤ 100 so n ≤ 33. For n = 33 you need exactly 100 matchsticks. So you can make 33 squares.",
    "q.ch-05.q": "Work out the sum S = 5 + 10 + 15 + … + 100 (the numbers go up in steps of 5).",
    "q.ch-05.hints": [
      "How many terms are there? (100 ÷ 5)",
      "There are 20 terms. Pair the first with the last: 5 + 100 = 105.",
      "Sum = number of terms × (first + last) ÷ 2."
    ],
    "q.ch-05.explain": "There are 20 terms. S = 20 × (5 + 100) ÷ 2 = 20 × 105 ÷ 2 = 1050.",
    "q.ch-06.q": "Work out the sum 3 + 7 + 11 + … + 99 (each number is 4 more than the one before).",
    "q.ch-06.hints": [
      "The nth term is 4n − 1. Which term is the number 99?",
      "4n − 1 = 99 so n = 25.",
      "S = 25 × (3 + 99) ÷ 2."
    ],
    "q.ch-06.explain": "99 = 4n − 1 so n = 25. S = 25 × (3 + 99) ÷ 2 = 25 × 51 = 1275.",
    "q.ch-07.q": "Find the 20th term of the sequence 2, 5, 10, 17, 26, …",
    "q.ch-07.hints": [
      "The differences between consecutive terms: 3, 5, 7, 9, … What do you notice? Try comparing with the squares 1, 4, 9, 16, 25.",
      "Each term equals the position squared plus 1.",
      "n² + 1 with n = 20."
    ],
    "q.ch-07.explain": "2 = 1² + 1, 5 = 2² + 1, 10 = 3² + 1… so the nth term is n² + 1. For n = 20: 400 + 1 = 401.",
    "q.ch-08.q": "In the sequence 1, 1, 2, 3, 5, 8, 13, … each term from the third onwards equals the sum of the two terms just before it. Find the 10th term.",
    "q.ch-08.hints": [
      "Continue the sequence after 13.",
      "The next numbers: 8 + 13 = 21, then 13 + 21 = 34.",
      "The 10th term is 21 + 34."
    ],
    "q.ch-08.explain": "The sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. The 10th term is 55.",
    "q.ch-09.q": "Find the 10th term of the sequence 2, 6, 12, 20, 30, … (hint: write each number as a product of two consecutive whole numbers).",
    "q.ch-09.hints": [
      "2 = 1 × 2, 6 = 2 × 3, 12 = 3 × 4. What is the rule?",
      "The nth term is n × (n + 1).",
      "n = 10: 10 × 11."
    ],
    "q.ch-09.explain": "The nth term is n(n + 1). The 10th term = 10 × 11 = 110.",
    "q.ch-10.q": "A taxi company charges using the formula y = 10 000x + 12 000 (dong), where x is the number of km and 12 000 dong is the starting fee. How many dong must you pay for a 7 km journey?",
    "q.ch-10.hints": [
      "What is x? Replace x with the distance.",
      "10 000 × 7 = ?",
      "Add the 12 000 starting fee."
    ],
    "q.ch-10.explain": "y = 10 000 × 7 + 12 000 = 70 000 + 12 000 = 82 000 dong."
  },
  vi: {
    "q.9.3-09.howto": "Tìm xem số 79 đứng ở vị trí thứ mấy trong dãy. Nhập số thứ tự n, không nhập chính số hạng.",
    "q.9.3-06.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.3-05.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.3-04.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.3-03.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.2-08.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.2-05.howto": "Tìm quy tắc tính số chấm ở Mẫu n theo n. Nhập quy tắc dưới dạng biểu thức chứa n.",
    "q.9.2-03.howto": "Tìm quy tắc tính số hình vuông ở Mẫu n theo n. Nhập quy tắc dưới dạng biểu thức chứa n.",
    "q.9.1-05.howto": "Áp dụng quy tắc liên tiếp, bắt đầu từ 9. Nhập số hạng đầu tiên của dãy nhỏ hơn 0.",
    "q.9.1-01.q": "Dãy 7, 10½, 14, 17½, … có quy luật giữa các số hạng là 'cộng 3½'. Số hạng tiếp theo là bao nhiêu?",
    "q.9.1-02.q": "Quy luật giữa các số hạng (số cần cộng) của dãy 5, 5¼, 5½, 5¾, … là gì? Viết dưới dạng số thập phân.",
    "q.9.1-03.q": "Số hạng đầu là 4. Quy luật là 'nhân 3 rồi cộng 2'. Số hạng thứ ba là bao nhiêu?",
    "q.9.1-04.q": "Số hạng đầu là 8. Quy luật là 'nhân 2 rồi trừ 5'. Số hạng thứ tư là bao nhiêu?",
    "q.9.1-05.q": "Số hạng đầu là 9. Quy luật là 'trừ 6 rồi nhân 2'. Số hạng âm đầu tiên là bao nhiêu?",
    "q.9.1-06.q": "Một dãy bắt đầu từ 2 với quy luật 'cộng 10 rồi chia 2' (các số hạng 2; 6; 8; 9; 9,5; …). Sofia nói sẽ không có số hạng nào lớn hơn 10. Bạn ấy có đúng không?",
    "q.9.1-06.choices": [
      "Không, các số hạng cứ tăng và vượt quá 10",
      "Đúng, các số hạng tiến gần 10 nhưng không bao giờ vượt quá 10",
      "Không, cuối cùng các số hạng sẽ trở thành số âm",
      "Đúng, vì các số hạng không đổi"
    ],
    "q.9.1-07.q": "Ba số hạng đầu của một dãy là 8, 10, 14. Quy luật nào đúng?",
    "q.9.1-07.choices": [
      "Nhân 3 rồi trừ 14",
      "Chia 2 rồi cộng 6",
      "Trừ 3 rồi nhân 2",
      "Mỗi lần cộng 2"
    ],
    "q.9.1-08.q": "Số hạng thứ 10 là 50⅖ và quy luật là 'cộng 4⅗'. Tania tìm số hạng thứ 20 bằng cách nhân đôi số hạng thứ 10. Vì sao cách làm này sai?",
    "q.9.1-08.choices": [
      "Dãy không tăng bằng cách nhân mà tăng bằng cách cộng 4⅗ mỗi lần, nên số hạng thứ 20 không gấp đôi số hạng thứ 10",
      "Nhân đôi là đúng nhưng bạn ấy cộng sai",
      "Số hạng thứ 20 phải nhỏ hơn số hạng thứ 10",
      "Bạn ấy phải chia đôi số hạng thứ 10"
    ],
    "q.9.1-09.q": "Số hạng thứ 10 là 50,4 và quy luật là 'cộng 4,6'. Số hạng thứ 20 là bao nhiêu?",
    "q.9.1-10.q": "Số hạng thứ 7 của một dãy là 442. Quy luật là 'cộng 3 rồi nhân 2'. Số hạng thứ 4 là bao nhiêu?",
    "q.9.2-01.q": "Một dãy mẫu chấm có 5, 7, 9, … chấm ở Mẫu 1, 2, 3. Quy luật theo vị trí là số hạng = 2 × vị trí + 3. Mẫu 10 có bao nhiêu chấm?",
    "q.9.2-02.q": "Dãy 5, 7, 9, 11, … mỗi lần tăng 2. Quy luật theo vị trí của dãy là gì?",
    "q.9.2-02.choices": [
      "số hạng = 2 × vị trí + 3",
      "số hạng = 5 × vị trí + 2",
      "số hạng = vị trí + 4",
      "số hạng = 3 × vị trí + 2"
    ],
    "q.9.2-03.q": "Các hình vuông: Mẫu 1 có 4, Mẫu 2 có 7, Mẫu 3 có 10, … Viết quy luật cho số hình vuông ở Mẫu n (theo n).",
    "q.9.2-04.q": "Một dãy mẫu các ô vuông màu hồng có 3, 5, 7, … ô ở Mẫu 1, 2, 3. Mẫu 15 có bao nhiêu ô vuông?",
    "q.9.2-05.q": "Một dãy mẫu chấm có 6, 10, 14, 18, … chấm. Viết quy luật cho Mẫu n (theo n).",
    "q.9.2-06.q": "Các hình chữ nhật: Mẫu 1 có 3, Mẫu 2 có 8, Mẫu 3 có 13, … Mẫu 12 có bao nhiêu hình chữ nhật?",
    "q.9.2-07.q": "Harsha được cho các hình tam giác: Mẫu 1 có 4, Mẫu 2 có 6, Mẫu 3 có 8. Bạn ấy viết số hạng = 4 × vị trí + 2 ('bắt đầu từ 4, mỗi lần tăng 2'). Quy luật nào mới thật sự đúng?",
    "q.9.2-07.choices": [
      "số hạng = 2 × vị trí + 2",
      "số hạng = 4 × vị trí + 2",
      "số hạng = 2 × vị trí + 4",
      "số hạng = vị trí + 3"
    ],
    "q.9.2-08.q": "Viết quy luật (theo n) cho dãy 10, 15, 20, 25, …",
    "q.9.2-09.q": "Một dãy mẫu có 10, 30, 50, 70, … vật. Mẫu 20 có bao nhiêu vật?",
    "q.9.2-10.q": "Một dãy là 5, 8, 11, 14, … Razi nói quy luật là số hạng = 2 × vị trí + 3. Bạn ấy có đúng không, và vì sao?",
    "q.9.2-10.choices": [
      "Đúng: 2 × 1 + 3 = 5",
      "Sai: đúng với Mẫu 1 nhưng Mẫu 2 cho 7 chứ không phải 8; quy luật đúng là 3n + 2",
      "Sai: quy luật đúng là 3n + 5",
      "Đúng: vì dãy bắt đầu từ 5"
    ],
    "q.9.3-01.q": "Số hạng tổng quát của một dãy là 2n − 1. Số hạng thứ 10 là bao nhiêu?",
    "q.9.3-02.q": "Số hạng tổng quát của một dãy là ½n + 6. Số hạng thứ 8 là bao nhiêu?",
    "q.9.3-03.q": "Viết số hạng tổng quát của dãy 7, 10, 13, 16, …",
    "q.9.3-04.q": "Viết số hạng tổng quát của dãy 6, 11, 16, 21, …",
    "q.9.3-05.q": "Viết số hạng tổng quát của dãy 3, 7, 11, 15, …",
    "q.9.3-06.q": "Viết số hạng tổng quát của dãy giảm 24, 18, 12, 6, 0, …",
    "q.9.3-07.q": "Số nào trong các số sau là một số hạng của dãy có số hạng tổng quát 3n + 5?",
    "q.9.3-08.q": "Thẻ A: số hạng thứ 12 của dãy có số hạng tổng quát 8n − 4. Thẻ B: số hạng thứ 7 của dãy có số hạng tổng quát 11n + 16. Tính (giá trị của B) − (giá trị của A).",
    "q.9.3-09.q": "Trong dãy có số hạng tổng quát 6n − 5, vị trí n nào cho số hạng 79?",
    "q.9.3-10.q": "Không cần tính các số hạng, vì sao dãy 24, 18, 12, 6, 0, … KHÔNG thể có số hạng tổng quát 2n + 22?",
    "q.9.3-10.choices": [
      "Vì dãy đang giảm nhưng 2n + 22 tăng khi n tăng",
      "Vì 22 lớn hơn 2",
      "Vì số hạng đầu sẽ là 22",
      "Vì dãy có chứa số 0"
    ],
    "q.9.4-01.q": "Một máy hàm số cộng 5 vào đầu vào. Đầu vào là 2½. Đầu ra là bao nhiêu?",
    "q.9.4-02.q": "Máy hai bước: × 2 rồi + 1. Đầu vào là 4,5. Đầu ra là bao nhiêu?",
    "q.9.4-03.q": "Máy hai bước: ÷ 2 rồi − 3. Đầu vào là 19. Đầu ra là bao nhiêu?",
    "q.9.4-04.q": "Một máy thực hiện × 3 rồi − 1. Đầu ra là 26. Đầu vào là bao nhiêu?",
    "q.9.4-05.q": "Một máy thực hiện ÷ 2 rồi + 5. Đầu ra là 11,5. Đầu vào là bao nhiêu?",
    "q.9.4-06.q": "Viết hàm số 'nhân x với 2 rồi cộng 1' thành phương trình bắt đầu bằng y = …",
    "q.9.4-07.q": "Viết hàm số 'trừ 3 từ x, rồi nhân với 8' thành phương trình. (Nhớ dùng dấu ngoặc!)",
    "q.9.4-08.q": "Hàm số là y = 2x + 4. Hàm ngược (x theo y) là hàm nào?",
    "q.9.4-09.q": "Một máy hàm số có đầu vào x = 4; 5,5; 7 và đầu ra y = 13; 19; 25. Sofia nghĩ y = 3x + 1; Arun nghĩ y = 4x − 3. Ai đúng?",
    "q.9.4-09.choices": [
      "Chỉ Sofia",
      "Chỉ Arun",
      "Cả hai",
      "Không ai"
    ],
    "q.9.4-10.q": "Hàm hai bước của Marcus cho y = 11 khi x = 4. Khi x tăng 4 thì y tăng 2. Khi x = 20 thì y bằng bao nhiêu?"
  }
});
