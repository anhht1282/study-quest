window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 2,
  en: {
    "u.realm": "Mystery Letter Forest",
    "u.story": "In the heart of the Mystery Letter Forest, every stone gate is carved with a letter standing for an unknown number. The forest keeper only opens a gate for those who can write expressions, simplify, expand brackets and solve equations. Algebra is the map that leads you out!",
    "g.0.def": "Made of numbers and letters but with no equals sign, for example 5n + 4.",
    "g.1.def": "Has numbers, letters and an equals sign, for example 5n + 4 = 19.",
    "g.2.def": "Each part that is added or subtracted in an expression: 5n and 4 are two terms.",
    "g.3.def": "The number multiplying a variable: in 5n, the coefficient is 5.",
    "g.4.def": "A letter that stands for a number that can change or is not yet known.",
    "g.5.def": "A rule that describes the relationship between quantities, for example A = l × w.",
    "g.6.def": "Replace the letters with number values, then calculate.",
    "g.7.def": "Terms with the same letter part, such as 3x and 5x; only these terms can be added or subtracted.",
    "g.8.def": "Multiply the number outside the brackets by each term inside the brackets.",
    "g.9.def": "Use < or > to show a range of numbers, for example x > 4.",
    "s.2.1.learn": [
      "A letter can stand for an unknown number. An expression has numbers and letters but no equals sign; an equation has an equals sign.",
      "In 5n + 4 there are two terms, 5n and 4. The number 5 is the coefficient of n, and 4 is the constant.",
      "5n means 5 × n. Always write the number before the letter: write 3x, not x3.",
      "\"Double\" means × 2, \"half\" means ÷ 2, and x ÷ 2 is written as x/2.",
      "Two expressions that are equal for every value of the letter are called equivalent: 5n + 4 is the same as 4 + 5 × n."
    ],
    "ex.2.1.q": "Mathew is x years old. David is 4 years older than Mathew, Adam is 2 years younger than Mathew, Kathryn is 3 times Mathew's age, and Ella is half Mathew's age. Write an expression for each person's age.",
    "ex.2.1.steps": [
      "David: x + 4 (4 years older so add 4).",
      "Adam: x − 2. Kathryn: 3x (write the number before the letter).",
      "Ella: x/2 (half means divide by 2)."
    ],
    "ex.2.1.prompts": [
      "Does '4 years older' mean David is older or younger than Mathew? Which operation do you use with x?",
      "Which operation do you use for '2 years younger'? What about '3 times', and how do you write a number with a letter neatly?",
      "'Half' of a number is the same as dividing or multiplying by what?"
    ],
    "ex.2.1.twist": "If Mathew is 10 years old, what is the total age of all five people?",
    "s.2.2.learn": [
      "A formula is a rule linking two quantities. For example: number of days = 7 × number of weeks, written d = 7w.",
      "Substitution: replace the letters with numbers, then calculate. For 2w − 3v when w = 12, v = 5: 2 × 12 − 3 × 5 = 24 − 15 = 9.",
      "Remember the order of operations: multiply and divide first, then add and subtract.",
      "x/5 means x ÷ 5.",
      "You can use inverse operations to find an unknown quantity: if V = IR then I = V ÷ R."
    ],
    "ex.2.2.q": "Work out 2w − 3v when w = 12 and v = 5.",
    "ex.2.2.steps": [
      "Substitute: 2 × 12 − 3 × 5.",
      "Multiply first: 24 − 15.",
      "= 9."
    ],
    "ex.2.2.prompts": [
      "Each letter must be replaced by its number; how is a multiplication between a number and a letter rewritten?",
      "According to the order of operations, do you multiply or subtract first?",
      "What is left is a subtraction between two numbers: what is the final result?"
    ],
    "ex.2.2.twist": "If the values are swapped, w = 5 and v = 12, what is 2w − 3v?",
    "s.2.3.learn": [
      "Like terms have the same letter part: 2x and 3x are like terms, but 2x and 3y are not.",
      "Only like terms can be added or subtracted: 2x + 3x = 5x, 7y − 2y = 5y.",
      "x means 1x. So 5x − x = 4x.",
      "xy and yx are the same: the order of the letters does not matter, so 4xy + 3yx = 7xy.",
      "Neat ways to write: a (not 1a), 2a (not a + a or 2 × a), ab, a/b, a², a³."
    ],
    "ex.2.3.q": "Simplify 4p + 3q + 2p − q.",
    "ex.2.3.steps": [
      "Collect p: 4p + 2p = 6p.",
      "Collect q: 3q − q = 2q.",
      "6p and 2q are not like terms so stop here: 6p + 2q."
    ],
    "ex.2.3.prompts": [
      "What kinds of terms are in the expression? Which term is the same kind as 4p?",
      "Do the same with the terms containing q, noting that −q actually has coefficient −1.",
      "Can you combine the p terms with the q terms? Why?"
    ],
    "ex.2.3.twist": "If the question is 4p + 3q + 2p − 3q, what is the simplified result?",
    "s.2.4.learn": [
      "Expanding brackets: multiply the number outside by each term inside. 4(n + 3) = 4n + 12.",
      "When there is a minus sign, multiply the sign too: 2(x − 5) = 2x − 10.",
      "There can be several terms inside the brackets: 3(2g + h − 7) = 6g + 3h − 21.",
      "You can use a multiplication grid or arcs so that you do not forget any term.",
      "After expanding, remember to collect like terms: 4(x + 7) − 1 = 4x + 28 − 1 = 4x + 27."
    ],
    "ex.2.4.q": "Expand and simplify 5(2x + 4) − 12.",
    "ex.2.4.steps": [
      "5 × 2x = 10x and 5 × 4 = 20 so we get 10x + 20 − 12.",
      "Collect the constants: 20 − 12 = 8.",
      "Result: 10x + 8."
    ],
    "ex.2.4.prompts": [
      "The 5 outside the brackets must multiply which terms inside?",
      "After removing the brackets there are two constant terms (with no letter): how do you deal with them?",
      "Put together the part with x and the constant part: what is the final expression?"
    ],
    "ex.2.4.twist": "If the question is 5(2x + 4) + 12, what is the simplified result?",
    "s.2.5.learn": [
      "Solving an equation means finding the value of the letter that makes both sides equal.",
      "Keep it balanced: do the same operation to both sides. x + 5 = 12 ⇒ subtract 5 from both sides ⇒ x = 7.",
      "Inverse operations: add ↔ subtract, multiply ↔ divide. 2y + 4 = 16 ⇒ 2y = 12 ⇒ y = 6.",
      "If the letter is on the right-hand side you can swap the sides: 12 = y + 3 is written as y + 3 = 12.",
      "Always check: substitute the answer into the original equation.",
      "Word problems: let a letter stand for the number you need to find, translate each sentence into an operation, then solve."
    ],
    "ex.2.5.q": "Solve 2y + 4 = 16 and check.",
    "ex.2.5.steps": [
      "Subtract 4 from both sides: 2y = 12.",
      "Divide both sides by 2: y = 6.",
      "Check: 2 × 6 + 4 = 16 ✓."
    ],
    "ex.2.5.prompts": [
      "To get y on its own, which number should you remove first on the left-hand side? What do you do to both sides?",
      "What about the coefficient 2 next to y: what do you do to both sides?",
      "Substitute the value of y you found into the original equation: are both sides equal?"
    ],
    "ex.2.5.twist": "If the equation changes to 2y − 4 = 16, what is y?",
    "s.2.6.learn": [
      "Use < (less than) and > (greater than) to show a range of numbers. x > 4 means x is any number greater than 4 and not equal to 4.",
      "On a number line, draw an open circle at that number (because the number itself is not included) and an arrow towards the values that satisfy it.",
      "x > 4: arrow to the right (to +∞). y < 7: arrow to the left (to −∞).",
      "For x > 7, the smallest integer is 8 (not 7), the list is: 8, 9, 10, …",
      "For y < 2, the largest integer is 1, the list is: 1, 0, −1, −2, …",
      "For x > 4 there is no largest integer because the sequence goes on forever."
    ],
    "ex.2.6.q": "Given y < 2. What is the largest integer value of y? (Then list the integer values y can take.)",
    "ex.2.6.steps": [
      "y is less than 2 and not equal to 2 so the largest integer is 1.",
      "The list: 1, 0, −1, −2, −3, …",
      "The … shows the sequence continues forever in the negative direction."
    ],
    "ex.2.6.prompts": [
      "Can y equal 2? So which integer comes just before 2?",
      "From that number, going on towards smaller numbers, how do the integers follow one another?",
      "Does this list have an end? What symbol do you use to record that idea?"
    ],
    "ex.2.6.twist": "If it changes to y ≤ 2, what is the largest integer value of y?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The Letter Forest hides its way out behind Vietnamese-style problems on forming equations and simplifying expressions. Expand the brackets and keep it balanced!",
    "q.2.1-01.hints": [
      "When you add more, does the number of counters in the bag go up or down?",
      "Which operation represents \"adding 2\" to n?",
      "Write n and 2 joined by that operation."
    ],
    "q.2.1-01.explain": "Adding 2 counters means adding 2: n + 2.",
    "q.2.1-02.hints": [
      "When you take some out, does the number of counters go up or down?",
      "Which operation describes \"taking away 3\"?",
      "Write n and 3 joined by that operation."
    ],
    "q.2.1-02.explain": "Taking out 3 means subtracting 3: n − 3.",
    "q.2.1-03.hints": [
      "\"Twice\" is which operation with t?",
      "Write 2 × t neatly using the rule \"number first, letter after\".",
      "Which two characters make up your expression?"
    ],
    "q.2.1-03.explain": "Twice means multiply by 2, and 2 × t is written neatly as 2t.",
    "q.2.1-04.hints": [
      "\"Half\" is dividing by which number?",
      "Write t ÷ 2 as a fraction.",
      "What is the numerator and what is the denominator?"
    ],
    "q.2.1-04.explain": "Half means divide by 2: t ÷ 2 = t/2.",
    "q.2.1-05.hints": [
      "What is the first thing you do to x?",
      "Write the result of the first step as simply as possible.",
      "Then subtract 9 from that result."
    ],
    "q.2.1-05.explain": "Multiply by 4: 4x. Subtract 9: 4x − 9.",
    "q.2.1-06.hints": [
      "What expression do you get from multiplying x by 2?",
      "\"Subtract the result from 25\" means to take which number away from which?",
      "Does 25 come before or after the minus sign?"
    ],
    "q.2.1-06.explain": "The result after multiplying is 2x. Take 2x away from 25, so write 25 − 2x (which is different from 2x − 25).",
    "q.2.1-07.hints": [
      "How do you write the cost of 4 T-shirts?",
      "How do you write the cost of 2 shirts?",
      "To get the total, which operation joins the two results?"
    ],
    "q.2.1-07.explain": "4 T-shirts cost 4t, 2 shirts cost 2s, so the total is 4t + 2s. The answer 2t + 4s swaps the quantities, while 6ts and 4t × 2s multiply instead of adding.",
    "q.2.1-08.hints": [
      "Try n = 2 in the original expression 2n + 3.",
      "Try n = 2 in each answer and compare.",
      "Which answer gives a different result?"
    ],
    "q.2.1-08.explain": "With n = 2: 2n + 3 = 7. 3 + 2 × n = 7; n × 2 + 3 = 7; 3 + n + n = 7; but 2 + 3n = 8. So 2 + 3n is not equivalent. (Note: with n = 1 both equal 5, so testing one value is not enough to conclude.)",
    "q.2.1-09.hints": [
      "What are Ella's age and David's age?",
      "Add those two expressions together.",
      "x/2 + x combines to how many x? (x is 2/2 x)."
    ],
    "q.2.1-09.explain": "Ella: x/2. David: x + 4. Total: x/2 + x + 4 = 3x/2 + 4 (or 1.5x + 4).",
    "q.2.2-01.hints": [
      "What number do you replace x with?",
      "Rewrite: 13 + 9.",
      "Work out the sum."
    ],
    "q.2.2-01.explain": "13 + 9 = 22.",
    "q.2.2-02.hints": [
      "x/5 means which division?",
      "Write 40 ÷ 5.",
      "Work out the result."
    ],
    "q.2.2-02.explain": "x/5 = 40 ÷ 5 = 8.",
    "q.2.2-03.hints": [
      "Substitute w = 12 and v = 5: 2 × 12 − 3 × 5.",
      "Multiply first or subtract first?",
      "Work out 24 − 15."
    ],
    "q.2.2-03.explain": "2 × 12 = 24 and 3 × 5 = 15, so 24 − 15 = 9.",
    "q.2.2-04.hints": [
      "ab means which operation between a and b?",
      "Work out 9 × 8.",
      "Subtract 32."
    ],
    "q.2.2-04.explain": "ab = 9 × 8 = 72; 72 − 32 = 40.",
    "q.2.2-05.hints": [
      "30/c means 30 ÷ c.",
      "Work out 30 ÷ 6.",
      "Then subtract 2."
    ],
    "q.2.2-05.explain": "30 ÷ 6 = 5, then 5 − 2 = 3.",
    "q.2.2-06.hints": [
      "Work out the numerator first: x + y = ?",
      "Then divide the result by 2.",
      "30 ÷ 2 = ?"
    ],
    "q.2.2-06.explain": "x + y = 30, and 30 ÷ 2 = 15 (this is exactly the mean of x and y).",
    "q.2.2-07.hints": [
      "What could the letters h and T stand for?",
      "Substitute h = 30 into 9h: 9 × 30.",
      "Work out the product."
    ],
    "q.2.2-07.explain": "T = 9 × 30 = 270 (dollars).",
    "q.2.2-08.hints": [
      "IR means I × R. So 40 = 5 × R.",
      "What is the inverse operation of multiplying?",
      "Work out 40 ÷ 5."
    ],
    "q.2.2-08.explain": "40 = 5 × R so R = 40 ÷ 5 = 8.",
    "q.2.2-09.hints": [
      "Should the wire left be shorter or longer than the original wire?",
      "Then should p (the number being subtracted from) be the long wire or the short wire?",
      "Which number in the subtraction matches the piece cut off?"
    ],
    "q.2.2-09.explain": "Wire left = original wire − piece cut off, so p is the length of the whole wire and q is the piece that is cut. If it were the other way round, W would be negative, which makes no sense.",
    "q.2.2-10.hints": [
      "Try k = 1, 2, 3: are the three expressions equal?",
      "The expression 3k grows quickly, 20 − k decreases. Where could they meet?",
      "Check k = 5 in all three expressions."
    ],
    "q.2.2-10.explain": "With k = 5: k + 10 = 15, 3k = 15, 20 − k = 15. The three values are equal, so k = 5.",
    "q.2.3-01.hints": [
      "Do 2y and 4y have the same letter part?",
      "Add the two coefficients 2 and 4.",
      "Keep the letter y unchanged."
    ],
    "q.2.3-01.explain": "2 + 4 = 6 so 2y + 4y = 6y.",
    "q.2.3-02.hints": [
      "What is the coefficient of g?",
      "Add 8 + 5 + 1.",
      "Keep the letter g."
    ],
    "q.2.3-02.explain": "g = 1g, so 8 + 5 + 1 = 14: 14g.",
    "q.2.3-03.hints": [
      "What is the coefficient of n?",
      "Work out 8 − 1.",
      "Keep the letter n."
    ],
    "q.2.3-03.explain": "8n − 1n = 7n.",
    "q.2.3-04.hints": [
      "Collect the terms containing p first.",
      "Collect the terms containing q: 3q − q.",
      "Are the two results like terms? Can they be combined further?"
    ],
    "q.2.3-04.explain": "4p + 2p = 6p and 3q − q = 2q. Since 6p and 2q are not like terms, the result is 6p + 2q.",
    "q.2.3-05.hints": [
      "Collect the terms containing t: 5t − 3t.",
      "Collect the constants: 7 + 3.",
      "Can the result be combined any further?"
    ],
    "q.2.3-05.explain": "5t − 3t = 2t and 7 + 3 = 10; 2t and 10 are not like terms. The result is 2t + 10.",
    "q.2.3-06.hints": [
      "How many different letters are there?",
      "Collect each kind: r, s, t.",
      "Write the three results joined with plus signs."
    ],
    "q.2.3-06.explain": "r: 7r − 2r = 5r. s: 2s + s = 3s. t: 3t + 2t = 5t. The result is 5r + 3s + 5t.",
    "q.2.3-07.hints": [
      "Are xy and yx the same term?",
      "Does the order of multiplying change the result (for example 2 × 3 and 3 × 2)?",
      "Add the two coefficients 4 and 3."
    ],
    "q.2.3-07.explain": "yx = xy because multiplication is commutative, so 4xy + 3xy = 7xy.",
    "q.2.3-08.hints": [
      "Which terms contain a? Which term contains b?",
      "Can 3b be added to a term containing a?",
      "Only collect the a part: what is 5a − 2a?"
    ],
    "q.2.3-08.explain": "5a − 2a = 3a; 3b is not a like term so it stays: 3a + 3b. The answers 6ab and 3ab are wrong because they mistake adding two different letters for a product.",
    "q.2.3-09.hints": [
      "Which terms have the letters bc? Which have bd (or db)?",
      "Collect bc: 3bc − 2bc.",
      "Collect bd: 5bd + 3db (remember db = bd)."
    ],
    "q.2.3-09.explain": "3bc − 2bc = bc (coefficient 1, the 1 is not written). 5bd + 3db = 8bd. Result: bc + 8bd.",
    "q.2.3-10.hints": [
      "For the denominators 4 and 12: what is the lowest common denominator?",
      "Change 3a/4 into a fraction with denominator 12.",
      "Add the numerators, then simplify by dividing by the HCF."
    ],
    "q.2.3-10.explain": "3a/4 = 9a/12. Add: 9a/12 + 5a/12 = 14a/12 = 7a/6 (divide numerator and denominator by 2).",
    "q.2.4-01.hints": [
      "The 4 must multiply which terms in the brackets?",
      "What is 4 × n, and what is 4 × 3?",
      "Join the two results with a plus sign."
    ],
    "q.2.4-01.explain": "4 × n = 4n and 4 × 3 = 12, so 4n + 12.",
    "q.2.4-02.hints": [
      "What sign is in front of the 5?",
      "What is 2 × 5?",
      "Should the result subtract or add the number you just found?"
    ],
    "q.2.4-02.explain": "2 × x = 2x and 2 × 5 = 10; the minus sign stays: 2x − 10.",
    "q.2.4-03.hints": [
      "How many terms are inside the brackets?",
      "Multiply 3 by 2g, h and 7 in turn.",
      "Keep the sign in front of each term."
    ],
    "q.2.4-03.explain": "3 × 2g = 6g, 3 × h = 3h, 3 × 7 = 21 (with a minus sign): 6g + 3h − 21.",
    "q.2.4-04.hints": [
      "What is 7 × 6c?",
      "What is 7 × 7h?",
      "Keep the minus sign between the two results."
    ],
    "q.2.4-04.explain": "7 × 6c = 42c and 7 × 7h = 49h, so 42c − 49h.",
    "q.2.4-05.hints": [
      "Expand the brackets first: 4(x + 7) = ?",
      "Then subtract 1.",
      "Collect the constants 28 and −1."
    ],
    "q.2.4-05.explain": "4(x + 7) = 4x + 28; 4x + 28 − 1 = 4x + 27.",
    "q.2.4-06.hints": [
      "Expand the brackets 7(x + 3).",
      "Which term is like 5x?",
      "Add 7x and 5x."
    ],
    "q.2.4-06.explain": "7(x + 3) = 7x + 21; 7x + 5x = 12x. The result is 12x + 21.",
    "q.2.4-07.hints": [
      "The 3 must multiply which terms in the brackets?",
      "Is the second term in the brackets −5x or +5x?",
      "What sign does 3 × (−5x) have?"
    ],
    "q.2.4-07.explain": "3 × 2 = 6 and 3 × (−5x) = −15x, so 6 − 15x. Bethan wrote 6 + 15x because she forgot the minus sign.",
    "q.2.4-08.hints": [
      "Expand the brackets one at a time.",
      "What form do the results of the first, second and last expressions take?",
      "Which expression has a constant different from 30?"
    ],
    "q.2.4-08.explain": "2(12x + 15) = 24x + 30; 3(10 + 8x) = 30 + 24x; 6(5 + 4x) = 30 + 24x; but 4(6x + 26) = 24x + 104. Arun is wrong.",
    "q.2.4-09.hints": [
      "What is the formula for the area of a rectangle?",
      "Write 8 × (3y + 4).",
      "Expand the brackets."
    ],
    "q.2.4-09.explain": "Area = 8(3y + 4) = 24y + 32 (cm²).",
    "q.2.4-10.hints": [
      "\"Twice\" means multiply by what?",
      "Write 2(4k − 7m).",
      "Expand the brackets."
    ],
    "q.2.4-10.explain": "Angle B = 2(4k − 7m) = 8k − 14m (degrees).",
    "q.2.5-01.hints": [
      "Which operation is the inverse of subtracting 4?",
      "Do that operation to both sides.",
      "9 + 4 = ?"
    ],
    "q.2.5-01.explain": "Add 4 to both sides: x = 9 + 4 = 13. Check: 13 − 4 = 9.",
    "q.2.5-02.hints": [
      "Rewrite with y on the left-hand side: y + 3 = 15.",
      "Subtract 3 from both sides.",
      "15 − 3 = ?"
    ],
    "q.2.5-02.explain": "y + 3 = 15 ⇒ y = 15 − 3 = 12.",
    "q.2.5-03.hints": [
      "First, how much do you subtract from both sides?",
      "After that, what is 4a?",
      "Divide by 4."
    ],
    "q.2.5-03.explain": "4a = 16 ⇒ a = 4. Check: 4 × 4 + 1 = 17.",
    "q.2.5-04.hints": [
      "Which operation is the inverse of subtracting 2?",
      "Add 2 to both sides: 3a = ?",
      "Divide by 3."
    ],
    "q.2.5-04.explain": "3a = 15 ⇒ a = 5. Check: 15 − 2 = 13.",
    "q.2.5-05.hints": [
      "Rewrite as 4c − 3 = 29.",
      "Add 3 to both sides.",
      "Divide by 4."
    ],
    "q.2.5-05.explain": "4c = 32 ⇒ c = 8. Check: 4 × 8 − 3 = 29.",
    "q.2.5-06.hints": [
      "Let the starting number of DVDs be d. After selling some, which expression is left?",
      "Write the equation: d − 3 = 26.",
      "Solve using the inverse operation."
    ],
    "q.2.5-06.explain": "d − 3 = 26 ⇒ d = 29.",
    "q.2.5-07.hints": [
      "Let Jin's age be j. What is twice Jin's age?",
      "Write the equation: 2j + 3 = 35.",
      "Subtract 3 then divide by 2."
    ],
    "q.2.5-07.explain": "2j + 3 = 35 ⇒ 2j = 32 ⇒ j = 16.",
    "q.2.5-08.hints": [
      "To remove \"− 6\", do we add or subtract 6 on both sides?",
      "What is −2 + 6?",
      "Substitute the answer into the equation to check."
    ],
    "q.2.5-08.explain": "Add 6 to both sides: x = −2 + 6 = 4. Steffan is wrong because he subtracted 6 again and got −8 (check: −8 − 6 = −14, not −2).",
    "q.2.5-09.hints": [
      "The two equal sides are equal, so 4p − 5 = ?",
      "Solve to find p (it does not have to be a whole number).",
      "Both equal sides are 37; add the base 20."
    ],
    "q.2.5-09.explain": "The two equal sides are equal so each is 37 cm long (true for p = 10.5). Perimeter = 37 + 37 + 20 = 94 cm.",
    "q.2.5-10.hints": [
      "The ways to combine: there are 3 × 3 = 9 equations. Try solving a few of them.",
      "For m to be large, should the left-hand side grow quickly or slowly as m increases? Should the number on the right be large or small?",
      "Try 2m − 6 = 44."
    ],
    "q.2.5-10.explain": "Solving all 9 equations: 4m+4: 7, 10, 4; 2m−6: 19, 25, 13; 6m+2: 5, 7, 3. The largest is 25 (2m − 6 = 44), the smallest is 3 (6m + 2 = 20).",
    "q.2.6-01.hints": [
      "How do you read the sign >?",
      "Can x equal the number 4 itself?",
      "Choose the statement that describes numbers greater than 4."
    ],
    "q.2.6-01.explain": "x > 4 means x is any number greater than 4 (4 is not included). \"4 or more\" would need the sign ≥.",
    "q.2.6-02.hints": [
      "Which sign means \"greater than\"?",
      "Write n, that sign, then −1.",
      "Check: does n = 0 work?"
    ],
    "q.2.6-02.explain": "\"Greater than\" is >, so n > −1.",
    "q.2.6-03.hints": [
      "Which sign means \"less than\"?",
      "Write q, that sign, then −2.",
      "Check: does q = −3 work?"
    ],
    "q.2.6-03.explain": "\"Less than\" is <, so q < −2.",
    "q.2.6-04.hints": [
      "Can y equal 4?",
      "What is the next integer after 4?",
      "Does that number satisfy y > 4?"
    ],
    "q.2.6-04.explain": "y must be greater than 4 (not equal to 4), so the smallest integer is 5.",
    "q.2.6-05.hints": [
      "Can n equal 12?",
      "What is the integer just before 12?",
      "Does that number satisfy n < 12?"
    ],
    "q.2.6-05.explain": "n is less than 12 so the largest integer is 11.",
    "q.2.6-06.hints": [
      "Between which two integers does 2.5 lie?",
      "Which integers are greater than 2.5?",
      "Choose the smallest of them."
    ],
    "q.2.6-06.explain": "2 < 2.5 so it does not work; 3 > 2.5 so the smallest integer is 3.",
    "q.2.6-07.hints": [
      "Can x equal 7?",
      "Which is the first integer that satisfies x > 7?",
      "Where does the list of integers start?"
    ],
    "q.2.6-07.explain": "x > 7 excludes 7 so the smallest integer is 8. Katya is wrong because she forgot that an open circle does not include the number 7.",
    "q.2.6-08.hints": [
      "Between which two negative integers does −3.5 lie?",
      "Which of those two numbers is less than −3.5?",
      "Is −3 less than −3.5?"
    ],
    "q.2.6-08.explain": "−3 > −3.5 so it does not work; −4 < −3.5 so the largest integer is −4.",
    "q.2.6-09.hints": [
      "List a few numbers that satisfy y > 4: 5, 6, 7, …",
      "Can you always find a number greater than the one you just thought of?",
      "Which direction does the arrow on the number line point?"
    ],
    "q.2.6-09.explain": "For any integer satisfying y > 4, we can always find a greater one (add 1). The values continue to +∞ so there is no largest.",
    "q.2.6-10.hints": [
      "What is the smallest integer satisfying n > −3.5?",
      "What is the largest integer satisfying n < 2.5?",
      "List from the smallest to the largest and count."
    ],
    "q.2.6-10.explain": "n ∈ {−3, −2, −1, 0, 1, 2}. There are 6 integers.",
    "q.ch-01.q": "Find x if 5(x − 2) = 3(x + 4).",
    "q.ch-01.hints": [
      "Expand the brackets on both sides first.",
      "Collect the terms containing x on one side and the numbers on the other.",
      "Divide both sides by the coefficient of x."
    ],
    "q.ch-01.explain": "5x − 10 = 3x + 12 ⇒ 2x = 22 ⇒ x = 11. Check: 5 × 9 = 45 and 3 × 15 = 45.",
    "q.ch-02.q": "At present a mother is 3 times as old as her child. In 12 years' time she will be only twice as old as the child. How old is the child now?",
    "q.ch-02.hints": [
      "Let the child's present age be x. What is the mother's present age?",
      "In 12 years, what are the child's age and the mother's age?",
      "Form the equation: mother's age in 12 years = 2 × child's age in 12 years."
    ],
    "q.ch-02.explain": "Let x be the child's age, then the mother is 3x. In 12 years: 3x + 12 = 2(x + 12) ⇒ 3x + 12 = 2x + 24 ⇒ x = 12. (The mother is 36.)",
    "q.ch-03.q": "The sum of three consecutive whole numbers is 78. Find the largest of the three numbers.",
    "q.ch-03.hints": [
      "Let the smallest number be n. What are the other two numbers?",
      "Form the equation with sum 78 and simplify.",
      "The largest number is n + 2."
    ],
    "q.ch-03.explain": "n + (n + 1) + (n + 2) = 3n + 3 = 78 ⇒ n = 25. The three numbers are 25, 26, 27; the largest is 27.",
    "q.ch-04.q": "Find the smallest value of the expression (x − 3)² + 5 as x takes all integer values.",
    "q.ch-04.hints": [
      "A square is always greater than or equal to which number?",
      "When is (x − 3)² smallest?",
      "What does the expression equal then?"
    ],
    "q.ch-04.explain": "(x − 3)² ≥ 0 and equals 0 when x = 3. So the smallest value of the expression is 0 + 5 = 5.",
    "q.ch-05.q": "How many whole numbers x (including 0) satisfy 3x + 2 < 20?",
    "q.ch-05.hints": [
      "Subtract 2 from both sides: 3x < ?",
      "Divide by 3 to see what x is less than.",
      "List the whole numbers less than that, starting from 0."
    ],
    "q.ch-05.explain": "3x < 18 ⇒ x < 6. The whole numbers: 0, 1, 2, 3, 4, 5, 6 numbers in total.",
    "q.ch-06.q": "Simplify A = 3(2x − 1) − 2(x + 4) and then work out the value of A when x = 5.",
    "q.ch-06.hints": [
      "Expand each bracket, remembering the minus sign in front of the second bracket.",
      "Simplify to the form ax + b.",
      "Substitute x = 5."
    ],
    "q.ch-06.explain": "A = 6x − 3 − 2x − 8 = 4x − 11. With x = 5: 4 × 5 − 11 = 9.",
    "q.ch-07.q": "A rectangle has perimeter 56 cm and its length is 6 cm more than its width. Work out the area of the rectangle (cm²).",
    "q.ch-07.hints": [
      "Let the width be w. What is the length?",
      "What is half the perimeter? Form the equation w + (w + 6) = half the perimeter.",
      "Find w, then the length, then multiply."
    ],
    "q.ch-07.explain": "Half the perimeter is 28: w + w + 6 = 28 ⇒ w = 11, length 17. Area 11 × 17 = 187 cm².",
    "q.ch-08.q": "Simplify 2(x + 3) + 3(x − 2). Which answer is correct?",
    "q.ch-08.hints": [
      "Expand the first bracket: 2(x + 3) = ?",
      "Expand the second bracket: 3(x − 2) = ? (multiply 3 by both x and 2).",
      "Collect the x terms and the constants."
    ],
    "q.ch-08.explain": "2x + 6 + 3x − 6 = 5x. The answers 5x − 2 or 5x + 12 are wrong because 3 was not multiplied fully into the −2 or the signs were mixed up.",
    "q.ch-09.q": "A tank contains a litres of water. 5 more litres are poured in, then half of the water in the tank is scooped out, leaving 14 litres. How many litres were in the tank at the start?",
    "q.ch-09.hints": [
      "After pouring in 5 more litres, how many litres are in the tank (in terms of a)?",
      "Which expression is the half that remains? Form an equation equal to 14.",
      "Multiply both sides by 2 then subtract 5."
    ],
    "q.ch-09.explain": "(a + 5)/2 = 14 ⇒ a + 5 = 28 ⇒ a = 23.",
    "q.ch-10.q": "Arranging n adjacent squares in a row with matchsticks needs 3n + 1 matchsticks. With 100 matchsticks, what is the greatest number of squares you can make?",
    "q.ch-10.hints": [
      "We need 3n + 1 ≤ 100. Try solving 3n + 1 = 100 first.",
      "Subtract 1 then divide by 3.",
      "If n is not a whole number you must round down; here, is the result a whole number?"
    ],
    "q.ch-10.explain": "3n + 1 ≤ 100 ⇒ 3n ≤ 99 ⇒ n ≤ 33. So at most 33 squares can be made (using exactly 100 matchsticks)."
  },
  vi: {
    "q.2.5-09.howto": "Nhập chu vi của cả tam giác (cm). Em không cần nhập giá trị của p.",
    "q.2.3-09.howto": "Đừng chép lại kết quả của Dai: em tự rút gọn 3bc + 5bd − 2bc + 3db và nhập dạng đơn giản nhất đúng.",
    "q.2.1-01.q": "Sofia có một túi đựng n hạt đếm (counter). Bạn ấy bỏ thêm hai hạt đếm vào. Viết biểu thức cho số hạt đếm trong túi.",
    "q.2.1-02.q": "Sofia có n hạt đếm. Lần này bạn ấy lấy ra ba hạt đếm. Viết biểu thức cho số hạt đếm còn lại.",
    "q.2.1-03.q": "Nhiệt độ vào thứ Ba là t °C. Viết biểu thức cho nhiệt độ ấm gấp đôi.",
    "q.2.1-04.q": "Nhiệt độ vào thứ Ba là t °C. Viết biểu thức cho nhiệt độ ấm bằng một nửa.",
    "q.2.1-05.q": "Em nghĩ ra một số x. Em nhân nó với 4, rồi trừ đi 9. Viết biểu thức cho kết quả.",
    "q.2.1-06.q": "Em nghĩ ra một số x. Em nhân nó với 2, rồi lấy 25 trừ đi kết quả đó. Viết biểu thức.",
    "q.2.1-07.q": "Áo phông giá t đô la một chiếc và áo sơ mi giá s đô la một chiếc. Biểu thức nào cho tổng giá của bốn áo phông và hai áo sơ mi?",
    "q.2.1-08.q": "Biểu thức nào dưới đây KHÔNG tương đương với 2n + 3?",
    "q.2.1-09.q": "Mathew x tuổi. Ella bằng một nửa tuổi của anh ấy và David hơn Mathew 4 tuổi. Viết biểu thức đơn giản nhất cho tuổi Ella cộng với tuổi David.",
    "q.2.2-01.q": "Tính x + 9 khi x = 13.",
    "q.2.2-02.q": "Tính x/5 khi x = 40.",
    "q.2.2-03.q": "Tính 2w − 3v khi w = 12 và v = 5.",
    "q.2.2-04.q": "Tính ab − c khi a = 9, b = 8 và c = 32.",
    "q.2.2-05.q": "Tính 30/c − 2 khi c = 6.",
    "q.2.2-06.q": "Tính (x + y)/2 khi x = 19 và y = 11.",
    "q.2.2-07.q": "Sanjay được trả 9 đô la mỗi giờ và dùng công thức T = 9h. Tính T khi h = 30.",
    "q.2.2-08.q": "Trong công thức V = IR, tính R khi V = 40 và I = 5.",
    "q.2.2-09.q": "Mateo cắt một đoạn dây nhỏ ra khỏi một đoạn dây lớn và dùng W = p − q để tìm độ dài dây còn lại. Cách hiểu nào về p và q là hợp lý?",
    "q.2.2-09.choices": [
      "p = độ dài đoạn dây lớn, q = độ dài đoạn nhỏ bị cắt đi",
      "p = độ dài đoạn dây nhỏ, q = độ dài đoạn dây lớn",
      "p và q có thể là đoạn nào cũng được, không quan trọng"
    ],
    "q.2.2-10.q": "Giá trị nào của k cho cùng một kết quả ở cả ba biểu thức k + 10, 3k và 20 − k?",
    "q.2.3-01.q": "Rút gọn 2y + 4y.",
    "q.2.3-02.q": "Rút gọn 8g + 5g + g.",
    "q.2.3-03.q": "Rút gọn 8n − n.",
    "q.2.3-04.q": "Rút gọn 4p + 3q + 2p − q.",
    "q.2.3-05.q": "Rút gọn 5t + 7 − 3t + 3.",
    "q.2.3-06.q": "Rút gọn 7r + 2s + 3t − 2r + s + 2t.",
    "q.2.3-07.q": "Rút gọn 4xy + 3yx.",
    "q.2.3-08.q": "Dạng đơn giản nhất của 5a + 3b − 2a là gì?",
    "q.2.3-09.q": "Dai đã rút gọn sai 3bc + 5bd − 2bc + 3db. Hãy viết dạng đơn giản nhất đúng.",
    "q.2.3-10.q": "Rút gọn 3a/4 + 5a/12 hết mức có thể.",
    "q.2.4-01.q": "Khai triển 4(n + 3).",
    "q.2.4-02.q": "Khai triển 2(x − 5).",
    "q.2.4-03.q": "Khai triển 3(2g + h − 7).",
    "q.2.4-04.q": "Khai triển 7(6c − 7h).",
    "q.2.4-05.q": "Khai triển và rút gọn 4(x + 7) − 1.",
    "q.2.4-06.q": "Khai triển và rút gọn 7(x + 3) + 5x.",
    "q.2.4-07.q": "Khai triển 3(2 − 5x). Đáp án nào đúng?",
    "q.2.4-08.q": "Arun khai triển bốn biểu thức: 2(12x + 15), 3(10 + 8x), 4(6x + 26) và 6(5 + 4x). Biểu thức nào cho kết quả khác với ba biểu thức còn lại?",
    "q.2.4-09.q": "Một hình chữ nhật có chiều rộng 8 cm và chiều dài (3y + 4) cm. Viết diện tích của nó ở dạng đơn giản nhất (đơn vị cm²).",
    "q.2.4-10.q": "Trong tam giác ABC, góc tại A bằng (4k − 7m)°. Góc tại B gấp đôi góc tại A. Viết góc tại B ở dạng đơn giản nhất.",
    "q.2.5-01.q": "Giải x − 4 = 9.",
    "q.2.5-02.q": "Giải 15 = y + 3.",
    "q.2.5-03.q": "Giải 4a + 1 = 17.",
    "q.2.5-04.q": "Giải 3a − 2 = 13.",
    "q.2.5-05.q": "Giải 29 = 4c − 3.",
    "q.2.5-06.q": "Paul có một số đĩa DVD. Bạn ấy bán đi ba đĩa và còn lại 26 đĩa. Lúc đầu Paul có bao nhiêu đĩa DVD?",
    "q.2.5-07.q": "Tuổi của Jana hơn hai lần tuổi của Jin là ba tuổi. Jana 35 tuổi. Jin bao nhiêu tuổi?",
    "q.2.5-08.q": "Giải x − 6 = −2.",
    "q.2.5-09.q": "Một tam giác cân có hai cạnh bên bằng nhau dài (4p − 5) cm và 37 cm, và cạnh đáy dài 20 cm. Tìm chu vi của tam giác (đơn vị cm).",
    "q.2.5-10.q": "Kenji có ba thẻ biểu thức: 4m + 4, 2m − 6 và 6m + 2, và ba thẻ số: 32, 44 và 20. Bạn ấy lập một phương trình bằng cách cho một thẻ biểu thức bằng một thẻ số (ví dụ 4m + 4 = 32). Nghiệm m lớn nhất mà bạn ấy có thể nhận được là bao nhiêu?",
    "q.2.6-01.q": "Bất đẳng thức x > 4 có nghĩa là gì?",
    "q.2.6-01.choices": [
      "x là mọi số lớn hơn 4 (không tính số 4)",
      "x có thể bằng 4 hoặc là mọi số lớn hơn 4",
      "x là mọi số nhỏ hơn 4"
    ],
    "q.2.6-02.q": "Viết \"n lớn hơn −1\" dưới dạng bất đẳng thức.",
    "q.2.6-03.q": "Viết \"q nhỏ hơn −2\" dưới dạng bất đẳng thức.",
    "q.2.6-04.q": "Với y > 4, số nguyên nhỏ nhất mà y có thể nhận là bao nhiêu?",
    "q.2.6-05.q": "Với n < 12, số nguyên lớn nhất mà n có thể nhận là bao nhiêu?",
    "q.2.6-06.q": "Với y > 2,5, số nguyên nhỏ nhất mà y có thể nhận là bao nhiêu?",
    "q.2.6-07.q": "Katya nói rằng nếu x > 7 thì số nguyên nhỏ nhất của x là 7. Số nguyên nhỏ nhất đúng là số nào?",
    "q.2.6-07.choices": [
      "7",
      "8",
      "6",
      "Không có số nguyên nhỏ nhất"
    ],
    "q.2.6-08.q": "Với m < −3,5, số nguyên lớn nhất mà m có thể nhận là bao nhiêu?",
    "q.2.6-09.q": "Với y > 4, vì sao em không thể viết ra số nguyên lớn nhất mà y có thể nhận?",
    "q.2.6-09.choices": [
      "Vì các số nguyên cứ tiếp tục mãi về phía dương vô cùng",
      "Vì 4 không được tính",
      "Vì y phải là số âm"
    ],
    "q.2.6-10.q": "Có bao nhiêu số nguyên n thỏa mãn đồng thời n > −3,5 và n < 2,5?"
  }
});
