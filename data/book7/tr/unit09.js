window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 9,
  en: {
    "q.ch-06.howto": "Enter an expression in n for the term in position n of the sequence (no need to write 'nth term =').",
    "u.realm": "Staircase Valley",
    "u.story": "On the way to Staircase Valley, you meet stone steps laid out by a mysterious rule. To know how tall the 100th step is without counting every step, you need to learn how to find the rule of a sequence and write it using algebra. The magical function machines at the end of the valley are also waiting for you to decode them!",
    "g.0.def": "A list of numbers arranged by a rule.",
    "g.1.def": "Each number in a sequence.",
    "g.2.def": "A way to work out the next term from the term just before it, for example 'add 3'.",
    "g.3.def": "A finite sequence stops; an infinite sequence has three dots and goes on forever.",
    "g.4.def": "The number that tells you which term it is in the sequence: first, second, ...",
    "g.5.def": "A formula for the term in position n, for example 3n + 2.",
    "g.6.def": "A diagram showing how each input number is changed to give the output number.",
    "g.7.def": "The operation that undoes another, for example the inverse of adding is subtracting.",
    "g.8.def": "A drawing that joins each input number to its output number.",
    "s.9.1.learn": [
      "A sequence is a list of numbers that follow a rule. Each number is called a term.",
      "The term-to-term rule tells you how to change one term into the next, for example 'add 4' or 'multiply by 2 then add 1'.",
      "Three dots at the end mean the sequence goes on forever (infinite). With no dots, the sequence stops (finite).",
      "A rule must work for EVERY pair of consecutive terms. The first two terms alone are often not enough to be sure of the rule."
    ],
    "ex.9.1.q": "The first term of a sequence is 5. The rule is: multiply by 2 then add 1. Write the first three terms.",
    "ex.9.1.steps": [
      "First term: 5",
      "Second term: 5 × 2 + 1 = 11",
      "Third term: 11 × 2 + 1 = 23",
      "The first three terms: 5, 11, 23"
    ],
    "ex.9.1.prompts": [
      "The question gives the first term: which number does this sequence start from?",
      "Apply the rule 'multiply by 2 then add 1' to the first term: which operation do you do first?",
      "The second term becomes the input for the next use of the rule. Work it out in the same way.",
      "Put the three numbers together as a sequence in the correct order."
    ],
    "ex.9.1.twist": "If the first term is 3 with the same rule, what is the third term?",
    "s.9.2.learn": [
      "A sequence of patterns is made from dots, matchsticks, squares ... Count the items in each pattern to get a number sequence.",
      "Look at how many items are added from one pattern to the next: that is the term-to-term rule.",
      "A table 'Pattern number – Number of items' helps you find pattern 10 or pattern 20, but it is slow. Using the rule 'add d each time' is faster: from pattern 1 to pattern n you add (n − 1) times.",
      "If each pattern adds 3 matchsticks, the number of matchsticks is always a multiple of 3; use this to check whether a number could be the number of matchsticks in some pattern."
    ],
    "ex.9.2.q": "Triangles made from matchsticks use 3, 6, 9 matchsticks. How many matchsticks does pattern 4 have and what is the rule?",
    "ex.9.2.steps": [
      "Each pattern adds one triangle = adds 3 matchsticks",
      "Rule: add 3",
      "Pattern 4: 9 + 3 = 12 matchsticks"
    ],
    "ex.9.2.prompts": [
      "From one pattern to the next, by how many does the number of matchsticks increase? Look at the picture to see why.",
      "What rule does that give you? Say it in one sentence.",
      "Apply the rule to pattern 4, starting from the number of matchsticks in pattern 3."
    ],
    "ex.9.2.twist": "Which pattern has exactly 30 matchsticks?",
    "s.9.3.learn": [
      "The position number n tells you which term it is: n = 1 is the first term, n = 2 is the second term ...",
      "The nth term is a formula for the nth term. The sequence 3, 6, 9, 12 … is the 3 times table, so the nth term = 3n.",
      "The sequence 3, 4, 5, 6 … has each term 2 more than its position number, so the nth term = n + 2. The sequence −5, −4, −3 … has nth term = n − 6.",
      "To check a formula, try n = 1, 2, 3. To find the 20th term, substitute n = 20 into the formula.",
      "To know whether a number is in the sequence, solve the equation nth term = that number and see whether n is a positive whole number."
    ],
    "ex.9.3.q": "Find the nth term of the sequence 12, 24, 36, 48, … then work out the 20th term.",
    "ex.9.3.steps": [
      "Make a table: n = 1, 2, 3, 4 gives 12, 24, 36, 48",
      "This is the 12 times table so the nth term = 12n",
      "20th term = 12 × 20 = 240"
    ],
    "ex.9.3.prompts": [
      "Make a table of n and the term: 12, 24, 36 belong to the times table of which number?",
      "If the nth term is n times a fixed number, how do you write the formula?",
      "Substitute n = 20 into the formula you found."
    ],
    "ex.9.3.twist": "Which term of the sequence 12, 24, 36, 48, … equals 600? (Say which position it is.)",
    "s.9.4.learn": [
      "A function is a relationship between two sets of numbers. A function machine takes an input number, changes it and gives an output number.",
      "One-step machine: for example the '+3' machine adds 3 to every input. We say 2 maps to 5.",
      "To find the input when you know the output, use the inverse operation: the inverse of +3 is −3, the inverse of ×2 is ÷2.",
      "A mapping diagram draws two number lines and joins each input to its output.",
      "To work out an unknown machine, test the function with all the given pairs. One input-output pair can fit many functions."
    ],
    "ex.9.4.q": "The machine is '×2'. Inputs 1 and 3 give their outputs; one unknown input gives output 10. What is the unknown input?",
    "ex.9.4.steps": [
      "1 × 2 = 2 and 3 × 2 = 6",
      "Working backwards: input = 10 ÷ 2 = 5",
      "So 1 → 2, 3 → 6, 5 → 10"
    ],
    "ex.9.4.prompts": [
      "Feed the numbers 1 and 3 into the machine: what are the outputs?",
      "You know the output is 10; to find the input, which operation do you use to go 'backwards'?",
      "Summarise as three input → output pairs."
    ],
    "ex.9.4.twist": "If the machine changes to '×2 then +1', which input gives output 15?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Pattern-sequence and matchstick problems in the style of Year 6–7 tests and gifted-student contests are waiting for you at the end of the valley!",
    "q.9.1-01.hints": [
      "How much do the two consecutive terms 7 and 11 differ by?",
      "Does that rule also work for 11 → 15 and 15 → 19?",
      "Apply that rule to the last term, 19."
    ],
    "q.9.1-01.explain": "Each term is 4 more than the one before. The next term is 19 + 4 = 23.",
    "q.9.1-02.hints": [
      "How much does it go down from 40 to 35?",
      "What number is the 5th term?",
      "From the 5th term, do one more step."
    ],
    "q.9.1-02.explain": "The rule is 'subtract 5'. The terms: 40, 35, 30, 25, 20, 15. The 6th term is 15.",
    "q.9.1-03.hints": [
      "What is the second term when you multiply the first term by 2?",
      "How is the third term worked out from the second term?",
      "You double twice in a row, starting from 6."
    ],
    "q.9.1-03.explain": "6 × 2 = 12 is the second term, then 12 × 2 = 24 is the third term.",
    "q.9.1-04.hints": [
      "Work out the second term first: do the multiplication before the addition.",
      "The second term is 9. Apply the rule again to 9.",
      "9 × 2 = ? then add 1."
    ],
    "q.9.1-04.explain": "4 × 2 + 1 = 9, then 9 × 2 + 1 = 19. The third term is 19.",
    "q.9.1-05.hints": [
      "With 10, what must you subtract first, and then what do you do?",
      "The second term is (10 − 8) × 6 = ? Try working it out.",
      "Do it again with the second term you just found."
    ],
    "q.9.1-05.explain": "Second term: (10 − 8) × 6 = 12. Third term: (12 − 8) × 6 = 24.",
    "q.9.1-06.hints": [
      "What is 24 divided by 2? Then add 4.",
      "The second term is 16. Do it once more.",
      "16 ÷ 2 + 4 = ?"
    ],
    "q.9.1-06.explain": "24 ÷ 2 + 4 = 16, then 16 ÷ 2 + 4 = 12. The third term is 12.",
    "q.9.1-07.hints": [
      "What does an infinite sequence usually end with?",
      "Find the sequence that does NOT have three dots at the end.",
      "Which sequence has a clear stopping point?"
    ],
    "q.9.1-07.explain": "The sequence 85, 75, 65, 55, 45, 35 has no three dots so it stops at 35: it is a finite sequence. The others have '…' so they go on forever.",
    "q.9.1-08.hints": [
      "Try 'add 4' with 8 → 20: does it work?",
      "Try 'multiply by 2' with 20 → 56. Is it correct?",
      "Try 'multiply by 3 then subtract 4' with each consecutive pair: 4 → 8, 8 → 20, 20 → 56, 56 → 164."
    ],
    "q.9.1-08.explain": "'Add 4' only works for 4 → 8; 'multiply by 2' only works for 4 → 8. The mistake is checking only the first two terms. The rule that works for every pair is 'multiply by 3 then subtract 4': 4×3−4=8, 8×3−4=20, 20×3−4=56, 56×3−4=164.",
    "q.9.1-09.hints": [
      "To get from the first term to 13, you multiplied by 2 then subtracted 3. So to go back, what is the last step?",
      "Undo each step in reverse order: 13 + 3 = ?",
      "Then divide the result by 2. Check by applying the rule."
    ],
    "q.9.1-09.explain": "Work backwards: 13 + 3 = 16, 16 ÷ 2 = 8. Check: 8 × 2 − 3 = 13. The first term is 8.",
    "q.9.1-10.hints": [
      "Try each rule: apply it to 3 and see whether you get 7.",
      "What is 3 × 2 − 1? Is it 7?",
      "Why are two terms not enough to decide the rule uniquely?"
    ],
    "q.9.1-10.explain": "Add 4: 3+4=7 correct. Multiply by 2 then add 1: 3×2+1=7 correct. Multiply by 3 then subtract 2: 3×3−2=7 correct. Multiply by 2 then subtract 1: 3×2−1=5, wrong. A sequence can have many rules if we know too few terms.",
    "q.9.2-01.hints": [
      "How many dots does each pattern add compared with the one before?",
      "How many dots do pattern 4 and pattern 5 have?",
      "Keep adding until pattern 6."
    ],
    "q.9.2-01.explain": "Add 2 dots each time: 3, 5, 7, 9, 11, 13. Pattern 6 has 13 dots.",
    "q.9.2-02.hints": [
      "How many matchsticks does each new triangle need?",
      "How many matchsticks does pattern 4 have?",
      "From pattern 4, add one more time."
    ],
    "q.9.2-02.explain": "Add 3 matchsticks each time: 3, 6, 9, 12, 15. Pattern 5 has 15 matchsticks.",
    "q.9.2-03.hints": [
      "How many more squares does pattern 2 have than pattern 1?",
      "How many more squares does pattern 3 have than pattern 2? Is it the same?",
      "Which rule works for both pairs?"
    ],
    "q.9.2-03.explain": "7 − 4 = 3 and 10 − 7 = 3, so the rule is 'add 3'. 'Multiply by 3' is wrong because 4 × 3 = 12, not 7.",
    "q.9.2-04.hints": [
      "The rule is add 3. From pattern 1 to pattern 8, how many times do you add?",
      "You add 7 times, 3 squares each time. So how many squares are added in total?",
      "Add the number of extra squares to 5."
    ],
    "q.9.2-04.explain": "From pattern 1 to pattern 8 you add 7 times × 3 = 21 squares. 5 + 21 = 26 squares.",
    "q.9.2-05.hints": [
      "How many dots does each pattern add?",
      "From pattern 1 to pattern 10, how many times do you add?",
      "9 × 3 = ? then add 4."
    ],
    "q.9.2-05.explain": "Add 3 dots each time, 9 times: 9 × 3 = 27. 4 + 27 = 31 dots.",
    "q.9.2-06.hints": [
      "From pattern 2 to pattern 4, how many times is it added?",
      "9 − 5 = 4 dots are added in 2 times. How many each time?",
      "2 are added each time, so how many times is pattern 7 after pattern 4?"
    ],
    "q.9.2-06.explain": "4 dots are added in 2 steps, so each step adds 2 dots. Pattern 5: 11, pattern 6: 13, pattern 7: 15.",
    "q.9.2-07.hints": [
      "Check Marcus's method with pattern 1: what is 1 × 2 + 3? And with pattern 2?",
      "Sofia's method: why add 2 to the position number? Try it with pattern 2.",
      "What does the rule 'add 2' tell you about the 20th pattern: is it only adding 2 once?"
    ],
    "q.9.2-07.explain": "Marcus's formula: position number × 2 + 3 is correct for pattern 1 (5), pattern 2 (7), pattern 3 (9), pattern 4 (11), so pattern 20 has 43 squares. Sofia makes a mistake: 'add 2 each time' does not mean adding 2 to the position number once; you must add 19 times.",
    "q.9.2-08.hints": [
      "The number of triangles in every pattern is a multiple of which number?",
      "What is 92 divided by 4?",
      "That quotient is the pattern number."
    ],
    "q.9.2-08.explain": "Pattern n has 4n triangles. 4n = 92 so n = 92 ÷ 4 = 23. Pattern 23 has 92 triangles.",
    "q.9.2-09.hints": [
      "The numbers 4, 8, 12 are all divisible by which number?",
      "Is 98 divisible by 4? (98 = 96 + 2)",
      "If 98 is not divisible by 4, can it be in this sequence?"
    ],
    "q.9.2-09.explain": "Every term is a multiple of 4. 98 divided by 4 leaves remainder 2, so 98 cannot be the number of triangles in any pattern. A common mistake: thinking every even number appears in the sequence.",
    "q.9.2-10.hints": [
      "From pattern 10 to pattern 25, how many times do you add?",
      "2 dots are added each time; how many dots do 15 additions give?",
      "Add the number you found to 21."
    ],
    "q.9.2-10.explain": "From pattern 10 to 25: 15 additions × 2 = 30 dots. 21 + 30 = 51 dots (also equal to 2 × 25 + 1).",
    "q.9.3-01.hints": [
      "Which times table does this sequence belong to?",
      "The 1st term equals how many times the position number 1?",
      "Write: nth term = (number) × n."
    ],
    "q.9.3-01.explain": "The term = 12 × position number, so the nth term is 12n.",
    "q.9.3-02.hints": [
      "What number do you substitute for n?",
      "6n means 6 × n.",
      "6 × 15 = ?"
    ],
    "q.9.3-02.explain": "Substitute n = 15: 6 × 15 = 90.",
    "q.9.3-03.hints": [
      "How much bigger is the first term 6 than the position number 1?",
      "How much bigger is the second term 7 than the position number 2? Is it always the same?",
      "Write: nth term = n plus that number."
    ],
    "q.9.3-03.explain": "Each term is 5 more than the position number (6 = 1 + 5, 7 = 2 + 5). The nth term is n + 5.",
    "q.9.3-04.hints": [
      "With n = 1, what must you do to 1 to get −2?",
      "With n = 2, does subtracting 3 give −1?",
      "Which rule works for all of them?"
    ],
    "q.9.3-04.explain": "−2 = 1 − 3, −1 = 2 − 3, 0 = 3 − 3. The nth term is n − 3.",
    "q.9.3-05.hints": [
      "The first term equals how many times the first position number?",
      "Which times table is this?",
      "Write it briefly using n."
    ],
    "q.9.3-05.explain": "The sequence is the 8 times table: nth term = 8n.",
    "q.9.3-06.hints": [
      "Substitute n = 5 into the formula.",
      "5 − 15 = ? (the answer is negative)",
      "From 5, count back 15 on the number line."
    ],
    "q.9.3-06.explain": "5 − 15 = −10.",
    "q.9.3-07.hints": [
      "Try n = 1 in 5n: does it give 5? Try n = 2.",
      "This sequence goes up by 1 each step, so the nth term is related to n by adding, not a multiple of n.",
      "Try n + 4 with n = 1, 2, 3."
    ],
    "q.9.3-07.explain": "The sequence rises steadily by 1 each step so it has the form n + a number. 5 = 1 + 4 so the nth term is n + 4. A common mistake: writing 5n (only right for the first term: 5 × 1 = 5, but 5 × 2 = 10 ≠ 6).",
    "q.9.3-08.hints": [
      "Substitute n = 1 into n − 6: which number do you get? Does it equal −5?",
      "Try n = 2, 3, 4 as well.",
      "The correct formula must work for every n you check."
    ],
    "q.9.3-08.explain": "n = 1: 1 − 6 = −5; n = 2: −4; n = 3: −3; n = 4: −2. The formula works for every given term, so Zara is correct.",
    "q.9.3-09.hints": [
      "You need to solve 16 × n = 400.",
      "Use the inverse operation of multiplying.",
      "400 ÷ 16 = ?"
    ],
    "q.9.3-09.explain": "16n = 400 so n = 400 ÷ 16 = 25. The number 400 is the 25th term.",
    "q.9.3-10.hints": [
      "What must a term of the sequence 4n satisfy with respect to 4?",
      "Which numbers are divisible by 4?",
      "Check 20, 22, 36, 63, 100 one at a time."
    ],
    "q.9.3-10.explain": "The terms of 4n are multiples of 4. 20, 36, 100 are divisible by 4 (n = 5, 9, 25). 22 and 63 are not divisible by 4 so they are not in the sequence.",
    "q.9.4-01.hints": [
      "What does this machine do to the input?",
      "Substitute the number: 4 + 5.",
      "The result is the output."
    ],
    "q.9.4-01.explain": "4 + 5 = 9.",
    "q.9.4-02.hints": [
      "What does the machine multiply by?",
      "5 × 6 = ?",
      "That is the output."
    ],
    "q.9.4-02.explain": "5 × 6 = 30.",
    "q.9.4-03.hints": [
      "What does the machine divide by?",
      "40 ÷ 4 = ?",
      "That is the output."
    ],
    "q.9.4-03.explain": "40 ÷ 4 = 10.",
    "q.9.4-04.hints": [
      "The machine adds 7. What is the inverse operation of adding 7?",
      "Work backwards from the output: 16 − 7.",
      "Check: add 7 to your result; do you get 16?"
    ],
    "q.9.4-04.explain": "The inverse of '+7' is '−7'. 16 − 7 = 9. Check: 9 + 7 = 16.",
    "q.9.4-05.hints": [
      "What is the inverse of multiplying by 3?",
      "30 ÷ 3 = ?",
      "Check: 10 × 3 = 30."
    ],
    "q.9.4-05.explain": "The inverse of '×3' is '÷3'. 30 ÷ 3 = 10.",
    "q.9.4-06.hints": [
      "What is the inverse of dividing by 2?",
      "9 × 2 = ?",
      "Check: 18 ÷ 2 = 9."
    ],
    "q.9.4-06.explain": "The inverse of '÷2' is '×2'. 9 × 2 = 18.",
    "q.9.4-07.hints": [
      "The machine HAS subtracted 5 to give 10. Is the input bigger or smaller than 10?",
      "So which operation takes you back to the input: add or subtract 5?",
      "Check by going forwards: does input − 5 give 10?"
    ],
    "q.9.4-07.explain": "A common mistake is to do 10 − 5 = 5 (repeating the machine's operation instead of the inverse). The inverse of '−5' is '+5': 10 + 5 = 15. Check: 15 − 5 = 10.",
    "q.9.4-08.hints": [
      "From 1 to 5, from 3 to 7, from 5 to 9: how much bigger is the output than the input?",
      "The function is '+4'. Check it with all three pairs.",
      "Apply it to 20."
    ],
    "q.9.4-08.explain": "Each output is 4 more than the input: the function is '+4'. For 20: 20 + 4 = 24.",
    "q.9.4-09.hints": [
      "What is 4 + 8? What is 4 × 3?",
      "Try 4 − 8 and 4 ÷ 3: do they give 12?",
      "Why do you need at least two input-output pairs to be sure of the function?"
    ],
    "q.9.4-09.explain": "4 + 8 = 12 and 4 × 3 = 12 are both correct. 4 − 8 = −4 and 4 ÷ 3 does not equal 12. One input-output pair can fit many functions, so you need a second pair to tell them apart.",
    "q.9.4-10.hints": [
      "There are two steps. When working backwards, which step must you undo first?",
      "Undo 'subtract 2' first: 19 + 2 = ?",
      "Then undo 'multiply by 3': divide by 3."
    ],
    "q.9.4-10.explain": "Work backwards step by step in reverse order: 19 + 2 = 21, then 21 ÷ 3 = 7. Check: 7 × 3 − 2 = 19.",
    "q.ch-01.q": "Given the sequence 5; 8; 11; 14; … What is the 100th term of the sequence?",
    "q.ch-01.hints": [
      "How much do two consecutive terms differ by?",
      "The nth term has the form 3n plus some number. The first term 5 = 3 × 1 + ?",
      "The formula is 3n + 2. Substitute n = 100."
    ],
    "q.ch-01.explain": "The common difference is 3 and the nth term = 3n + 2 (check: n=1 gives 5). The 100th term = 3 × 100 + 2 = 302.",
    "q.ch-02.q": "The sequence 7; 10; 13; …; 301 has numbers evenly spaced 3 apart. How many terms does the sequence have?",
    "q.ch-02.hints": [
      "From 7 up to 301, how much is the total increase?",
      "Each step adds 3, so how many steps are there? (301 − 7) ÷ 3.",
      "Number of terms = number of steps + 1."
    ],
    "q.ch-02.explain": "Number of steps = (301 − 7) ÷ 3 = 98. Number of terms = 98 + 1 = 99.",
    "q.ch-03.q": "Work out the sum A = 3 + 7 + 11 + … + 99 (two consecutive terms differ by 4).",
    "q.ch-03.hints": [
      "Count how many terms the sequence has: (99 − 3) ÷ 4 + 1.",
      "Pair the first number with the last: 3 + 99 = ?",
      "Sum = (first + last) × number of terms ÷ 2."
    ],
    "q.ch-03.explain": "Number of terms: (99 − 3) ÷ 4 + 1 = 25. Each first-last pair has sum 3 + 99 = 102. Sum = 102 × 25 ÷ 2 = 1275.",
    "q.ch-04.q": "Nam arranges squares side by side using matchsticks: 1 square needs 4 matchsticks, 2 adjacent squares need 7 matchsticks, 3 squares need 10 matchsticks, … How many matchsticks are needed to make 50 squares side by side?",
    "q.ch-04.hints": [
      "Each time a square is added, how many matchsticks are added (because one side is shared)?",
      "The number of matchsticks is 4, 7, 10, ... with formula 3n + 1. Check n = 1, 2, 3.",
      "Substitute n = 50."
    ],
    "q.ch-04.explain": "Each extra square needs 3 matchsticks, formula: 3n + 1 (n=1: 4). With n = 50: 3 × 50 + 1 = 151 matchsticks.",
    "q.ch-05.q": "Equilateral triangles side by side made from matchsticks need 3, 5, 7, 9, … matchsticks for 1, 2, 3, 4, … triangles. With exactly 101 matchsticks, how many triangles can be made?",
    "q.ch-05.hints": [
      "Each extra triangle needs how many more matchsticks?",
      "The formula for the number of matchsticks for n triangles is 2n + 1. Check n = 1, 2.",
      "Solve 2n + 1 = 101."
    ],
    "q.ch-05.explain": "The number of matchsticks for n triangles is 2n + 1 (n=1: 3, n=2: 5). 2n + 1 = 101 so n = 50 triangles.",
    "q.ch-06.q": "Write the nth term (in terms of n) of the sequence 9; 14; 19; 24; …",
    "q.ch-06.hints": [
      "How much do two consecutive terms differ by?",
      "The coefficient of n equals that number. Compare 5 × 1 with 9: how much more is needed?",
      "Check with n = 2: does 5 × 2 + 4 equal 14?"
    ],
    "q.ch-06.explain": "The common difference is 5 so the form is 5n + b. 9 = 5 × 1 + 4 so b = 4. The nth term is 5n + 4.",
    "q.ch-07.q": "The sequence 4; 7; 10; 13; … has nth term 3n + 1. Is 2025 a term of the sequence?",
    "q.ch-07.choices": [
      "Yes, n = 675",
      "No, because 2025 is divisible by 3 but every term leaves remainder 1 when divided by 3",
      "No, because 2025 is odd",
      "Yes, because 2025 is greater than 13"
    ],
    "q.ch-07.hints": [
      "What remainder does each term 3n + 1 leave when divided by 3?",
      "Is 2025 divisible by 3? (2 + 0 + 2 + 5 = 9)",
      "If 3n + 1 = 2025 then n = 2024/3. Is n a whole number?"
    ],
    "q.ch-07.explain": "3n + 1 always leaves remainder 1 when divided by 3, but 2025 is divisible by 3. Solving 3n + 1 = 2025 gives n = 2024/3, which is not a whole number, so 2025 is not in the sequence.",
    "q.ch-08.q": "A decreasing sequence: 100; 97; 94; 91; … Find the 50th term of the sequence.",
    "q.ch-08.hints": [
      "How much does it go down each step?",
      "From the 1st term to the 50th term, how many steps down are there?",
      "100 − 3 × 49 = ? (the answer is negative)"
    ],
    "q.ch-08.explain": "Formula: 103 − 3n (n=1: 100). With n = 50: 103 − 150 = −47.",
    "q.ch-09.q": "Three consecutive terms of an evenly spaced sequence have sum 66. What is the middle term?",
    "q.ch-09.hints": [
      "Let the middle number be a and the common difference d. What are the other two in terms of a and d?",
      "Add them up: what does (a − d) + a + (a + d) equal?",
      "3a = 66, so a = ?"
    ],
    "q.ch-09.explain": "The three numbers a − d, a, a + d have sum 3a = 66, so a = 22.",
    "q.ch-10.q": "The Fibonacci sequence: 1; 1; 2; 3; 5; 8; … in which each term from the third is the sum of the two terms just before it. Find the 10th term.",
    "q.ch-10.hints": [
      "The 7th term equals 5 + 8 = ?",
      "Write out each term in turn: 13, 21, ...",
      "The 10th term is the sum of the 8th and 9th terms."
    ],
    "q.ch-10.explain": "1, 1, 2, 3, 5, 8, 13, 21, 34, 55. The 10th term is 55.",
    "p.goal": "A goose walks along a number line and lays eggs at equal spacing (for example 2, 7, 12, 17, ...). A mole pops up above ground at equal spacing too (for example 1, 4, 7, 10, 13, ...). You discover when the mole finds an egg, and when it never does.",
    "p.steps": [
      "Draw a number line from −5 to 40. Mark the places where the goose lays eggs: 2, 7, 12, 17, ... and the places where the mole pops up: 1, 4, 7, 10, 13, ... At which numbers does the mole meet an egg?",
      "Look at the shared positions (7, 22, 37, ...). How far apart are they? How is that number related to the goose's step of 5 and the mole's step of 3?",
      "Choose your own starting point and step for each animal. Try at least 5 different pairs of sequences and record the positions where the mole meets an egg.",
      "Find a pair of sequences where the mole never finds an egg (hint: try even steps and starting points with different parity).",
      "Write a rule: how far apart are the matching positions? When are there no matching positions?"
    ],
    "p.extensions": [
      "Add a third animal (for example a rabbit hopping at equal spacing). When do all three animals meet at one point?",
      "Let the goose step 6 and the mole step 4: write down the conditions (even/odd) for them to be able to meet.",
      "Write the nth term for the goose's sequence and the mole's sequence, then try using algebra to find the common points."
    ],
    "p.reflect": [
      "What do you notice that is special about the gaps between the positions where the mole finds an egg?",
      "When does the mole never meet an egg? Explain in your own words.",
      "Where outside school can you use your knowledge of evenly spaced sequences (for example calendars, bridge steps, drum beats)?"
    ]
  },
  vi: {
    "q.9.4-08.howto": "Mỗi mũi tên nối một số đầu vào với số đầu ra của nó. Dùng cùng quy tắc đó cho đầu vào 20 và nhập số đầu ra.",
    "q.9.3-09.howto": "Tìm xem số 400 đứng ở vị trí thứ mấy trong dãy. Nhập số thứ tự n, không nhập chính số hạng.",
    "q.9.3-05.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.3-04.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.3-03.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.3-01.howto": "Tìm quy tắc cho số hạng ở vị trí n bất kỳ của dãy. Nhập quy tắc dưới dạng biểu thức chứa n (không cần viết 'số hạng thứ n =').",
    "q.9.2-08.howto": "Tìm hình nào trong dãy có đúng 92 tam giác. Nhập số thứ tự của hình đó, không nhập số tam giác.",
    "q.9.1-01.q": "Dãy số 7, 11, 15, 19, … có quy luật từ số hạng này sang số hạng sau là 'cộng 4'. Số hạng tiếp theo là bao nhiêu?",
    "q.9.1-02.q": "Cho dãy số: 40, 35, 30, 25, … Số hạng thứ 6 là bao nhiêu?",
    "q.9.1-03.q": "Số hạng đầu của một dãy là 6 và quy luật là 'nhân 2'. Số hạng thứ ba là bao nhiêu?",
    "q.9.1-04.q": "Số hạng đầu là 4. Quy luật là 'nhân 2 rồi cộng 1'. Số hạng thứ ba là bao nhiêu?",
    "q.9.1-05.q": "Số hạng đầu là 10. Quy luật là 'trừ 8 rồi nhân 6'. Số hạng thứ ba là bao nhiêu?",
    "q.9.1-06.q": "Số hạng đầu là 24. Quy luật là 'chia 2 rồi cộng 4'. Số hạng thứ ba là bao nhiêu?",
    "q.9.1-07.q": "Dãy nào dưới đây là dãy hữu hạn?",
    "q.9.1-08.q": "Sofia và Zara nhìn dãy 4, 8, 20, 56, 164, … Sofia nói 'cộng 4'. Zara nói 'nhân 2'. Quy luật nào thực sự đúng với TẤT CẢ các số hạng?",
    "q.9.1-08.choices": [
      "Cộng 4",
      "Nhân 2",
      "Nhân 3 rồi trừ 4",
      "Nhân 3 rồi cộng 4"
    ],
    "q.9.1-09.q": "Số hạng thứ hai của một dãy là 13. Quy luật là 'nhân 2 rồi trừ 3'. Số hạng đầu là bao nhiêu?",
    "q.9.1-10.q": "Một dãy bắt đầu bằng 3, 7, … Những quy luật nào sau đây cho ra 7 từ 3? (chọn tất cả)",
    "q.9.1-10.choices": [
      "Cộng 4",
      "Nhân 2 rồi cộng 1",
      "Nhân 3 rồi trừ 2",
      "Nhân 2 rồi trừ 1"
    ],
    "q.9.2-01.q": "Các hình chấm có 3, 5, 7, … chấm (mỗi lần thêm một chấm ở mỗi đầu). Hình 6 có bao nhiêu chấm?",
    "q.9.2-02.q": "Các tam giác que diêm xếp thành hàng dùng 3, 6, 9 que cho hình 1, 2, 3. Hình 5 cần bao nhiêu que diêm?",
    "q.9.2-03.q": "Các hình vuông có 4, 7, 10 ô. Quy luật từ số hạng này sang số hạng sau là gì?",
    "q.9.2-03.choices": [
      "Nhân 3",
      "Cộng 3",
      "Cộng 4",
      "Cộng 7"
    ],
    "q.9.2-04.q": "Các hình vuông có 5, 8, 11 ô. Hình 8 có bao nhiêu ô?",
    "q.9.2-05.q": "Các hình chấm có 4, 7, 10 chấm. Hình 10 có bao nhiêu chấm?",
    "q.9.2-06.q": "Jacob vẽ các hình chấm. Hình 2 có 5 chấm và hình 4 có 9 chấm. Mỗi lần thêm cùng một số chấm. Hình 7 có bao nhiêu chấm?",
    "q.9.2-07.q": "Các hình vuông có 5, 7, 9, 11 ô. Marcus nói hình 20 có 20 × 2 + 3 = 43 ô. Sofia nói 20 + 2 = 22. Ai đúng?",
    "q.9.2-07.choices": [
      "Marcus: 43 ô",
      "Sofia: 22 ô",
      "Cả hai đều đúng",
      "Không thể biết được"
    ],
    "q.9.2-08.q": "Các hình tam giác có 4, 8, 12, … tam giác ở hình 1, 2, 3. Hình số mấy có đúng 92 tam giác?",
    "q.9.2-09.q": "Trong dãy hình 4, 8, 12, … Frances nói có một hình có 98 tam giác. Làm sao em biết được mà không cần tính theo hình?",
    "q.9.2-09.choices": [
      "98 không phải là bội của 4",
      "98 quá lớn",
      "98 là số chẵn",
      "98 không thuộc bảng nhân 4 vì nó là số lẻ"
    ],
    "q.9.2-10.q": "Các hình chấm có 3, 5, 7, 9, … chấm (hình thứ 10 có 21 chấm). Hình 25 có bao nhiêu chấm?",
    "q.9.3-01.q": "Viết số hạng tổng quát của dãy 12, 24, 36, 48, 60, …",
    "q.9.3-02.q": "Số hạng tổng quát của một dãy là 6n. Số hạng thứ 15 là bao nhiêu?",
    "q.9.3-03.q": "Viết số hạng tổng quát của dãy 6, 7, 8, 9, 10, …",
    "q.9.3-04.q": "Viết số hạng tổng quát của dãy −2, −1, 0, 1, 2, …",
    "q.9.3-05.q": "Viết số hạng tổng quát của dãy 8, 16, 24, 32, 40, …",
    "q.9.3-06.q": "Số hạng tổng quát là n − 15. Số hạng thứ 5 là bao nhiêu?",
    "q.9.3-07.q": "Đâu là số hạng tổng quát của dãy 5, 6, 7, 8, 9, …?",
    "q.9.3-08.q": "Zara nhìn dãy −5, −4, −3, −2, … và nói số hạng tổng quát là n − 6. Bạn ấy có đúng không?",
    "q.9.3-08.choices": [
      "Đúng, bạn ấy đúng",
      "Không, phải là n + 6",
      "Không, phải là n − 5",
      "Không, dãy số âm không có quy luật"
    ],
    "q.9.3-09.q": "Số hạng tổng quát của một dãy là 16n. Số thứ tự n nào cho số hạng 400?",
    "q.9.3-10.q": "Những số nào sau đây là số hạng của dãy có số hạng tổng quát 4n? (chọn tất cả)",
    "q.9.4-01.q": "Một máy hàm số cộng 5. Nếu đầu vào là 4 thì đầu ra là bao nhiêu?",
    "q.9.4-02.q": "Một máy hàm số nhân với 6. Đầu vào là 5. Đầu ra là bao nhiêu?",
    "q.9.4-03.q": "Một máy hàm số chia cho 4. Đầu vào là 40. Đầu ra là bao nhiêu?",
    "q.9.4-04.q": "Một máy hàm số cộng 7. Đầu ra là 16. Đầu vào là bao nhiêu?",
    "q.9.4-05.q": "Một máy hàm số nhân với 3. Đầu ra là 30. Đầu vào là bao nhiêu?",
    "q.9.4-06.q": "Một máy hàm số chia cho 2. Đầu ra là 9. Đầu vào là bao nhiêu?",
    "q.9.4-07.q": "Một máy hàm số trừ 5. Đầu ra là 10. Đầu vào là bao nhiêu?",
    "q.9.4-08.q": "Một sơ đồ ánh xạ cho 1 → 5, 3 → 7, 5 → 9. Dùng cùng hàm số đó, đầu vào 20 cho đầu ra là bao nhiêu?",
    "q.9.4-09.q": "Một máy nhận đầu vào 4 và cho đầu ra 12. Máy đó có thể là hàm nào? (chọn tất cả)",
    "q.9.4-10.q": "Một máy hàm số hai bước thực hiện 'nhân 3' rồi 'trừ 2'. Đầu ra là 19. Đầu vào là bao nhiêu?"
  }
});
