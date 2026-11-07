window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 2,
  en: {
    "q.ch-10.howto": "Find all the integers n that work, then enter only their sum.",
    "q.2.5-09.howto": "Find x and y, then enter one number: the sum x + y.",
    "q.2.4-10.howto": "Enter the final factorised expression (with a bracket), not just the simplified one.",
    "q.2.2-07.howto": "The task is to find the value of w. Enter only the value of w; you do not need to type the rearranged formula.",
    "u.realm": "Alphabet Alchemy Workshop",
    "u.story": "In the Alchemy Workshop, every potion is labelled with a formula written in letters, and every door is locked with a mysterious equation. You will learn to write expressions, substitute into formulae, expand brackets, factorise, and solve equations and inequalities to become an algebra alchemist.",
    "g.0.def": "A way of writing with letters and numbers but no equals sign, for example 3n + 8.",
    "g.1.def": "The number that multiplies a variable; in 3n + 8, the coefficient of n is 3.",
    "g.2.def": "A number on its own that never changes, for example the 8 in 3n + 8.",
    "g.3.def": "A rule written with letters and an equals sign, for example F = ma.",
    "g.4.def": "Has an equals sign and an unknown to find, for example 3x − 7 = 14.",
    "g.5.def": "The variable stands alone on the left-hand side; change the subject using inverse operations.",
    "g.6.def": "Multiply the term outside the brackets by each term inside: 4(x + 3) = 4x + 12.",
    "g.7.def": "Take the highest common factor outside the brackets: 4x + 12 = 4(x + 3).",
    "g.8.def": "Use <, ≤, >, ≥ to show a range of values, for example x > 5.",
    "g.9.def": "A range with end points, for example 3 ≤ x ≤ 9 includes both 3 and 9.",
    "s.2.1.learn": [
      "Use letters (variables) in place of unknown numbers. In 3n + 8: n is the variable, 3 is the coefficient, 8 is the constant, and 3n and 8 are the terms.",
      "3 × n is written 3n; n × n is written n². n + 5 and 3n are linear expressions, but n² is not.",
      "Order of operations: brackets, indices, multiplication and division, addition and subtraction. To add first and then multiply you must use brackets: 4(x + 2).",
      "Write x ÷ 3 as the fraction x/3; \"two-thirds of n\" is (2/3)n or 2n/3.",
      "Two expressions are equivalent if they always give the same value for every number, for example 2n/3, (2/3)n and (n/3) × 2."
    ],
    "ex.2.1.q": "Tyler thinks of a number x. Write an expression for the number Tyler gets when he adds 2 to x and then multiplies by 4.",
    "ex.2.1.steps": [
      "Add 2 to x: x + 2.",
      "The addition must be done first, so put it in brackets.",
      "Multiply by 4: 4(x + 2)."
    ],
    "ex.2.1.prompts": [
      "What is the first thing Tyler does to x? Write an expression for that new number.",
      "If you write 4 × x + 2, what is the 4 multiplying? Is that what Tyler means, and what extra notation do you need?",
      "Put it together: multiply 4 by the whole result you just had. How do you write that neatly?"
    ],
    "ex.2.1.twist": "If Tyler multiplies by 4 first and then adds 2, what is the expression? When x = 5, how much do the two expressions differ by?",
    "s.2.2.learn": [
      "Substituting into an expression: replace the letters with numbers, then work out following the correct order of operations (brackets, indices, multiplication and division, addition and subtraction).",
      "Be careful with negative numbers: (−3)² = 9 but −3² = −9; 2y³ when y = −3 is 2 × (−27), not (−6)³.",
      "A formula is a rule with an equals sign, for example F = ma, v = u + 10t, C = πd. The variable on its own on the left is the quantity being calculated.",
      "Change the subject using inverse operations: from F = ma, divide both sides by a to get m = F/a.",
      "To find a variable in a formula you can substitute first and then solve an equation, or change the subject first and then substitute."
    ],
    "ex.2.2.q": "Work out 3x² + 4 when x = 10; then change the subject of the formula h = 24d to find d.",
    "ex.2.2.steps": [
      "3 × 10² + 4: work out the index first: 10² = 100.",
      "3 × 100 + 4 = 304.",
      "h = 24d: divide both sides by 24 to get d = h/24."
    ],
    "ex.2.2.prompts": [
      "By the order of operations, do you work out the index or multiply by 3 first? What is 10²?",
      "Now that you have x², the next steps are to multiply and then add. What is the result?",
      "To 'free' d from 24d, which inverse operation do you use, and do you do it to both sides or just one?"
    ],
    "ex.2.2.twist": "If x = −10, does 3x² + 4 change? What is its value?",
    "s.2.3.learn": [
      "Expanding brackets: multiply the term outside by EVERY term inside: 3(2b + 5) = 6b + 15.",
      "When you multiply a variable by itself you get a square: a(a − 3) = a² − 3a.",
      "Watch the signs: −3(2x + 7) = −6x − 21 (the minus sign multiplies both terms).",
      "You can use a multiplication grid or arrows so that you don't miss a term.",
      "After expanding, collect like terms: 8x − 6x = 2x."
    ],
    "ex.2.3.q": "Expand and simplify 4(2x + 3x²) − x(6 + x).",
    "ex.2.3.steps": [
      "4(2x + 3x²) = 8x + 12x².",
      "−x(6 + x) = −6x − x².",
      "Collect: 8x − 6x = 2x and 12x² − x² = 11x². Result: 2x + 11x²."
    ],
    "ex.2.3.prompts": [
      "Multiply 4 by each term in the brackets: which two terms do you get?",
      "Which terms does the minus sign in front of x(6 + x) affect when you expand? Pay attention to the sign of each term.",
      "Among the terms you now have, which pairs have the same variable part and can be collected? What is the final result?"
    ],
    "ex.2.3.twist": "If it is changed to 4(2x + 3x²) − x(6 − x), what is the simplified result?",
    "s.2.4.learn": [
      "Factorising is the inverse of expanding brackets: 4x + 12 = 4(x + 3).",
      "Find the HCF of the terms (both the numbers and the letters), take it outside the brackets, then divide each term by the HCF.",
      "The HCF of 4a and 8ab is 4a; the HCF of x² and 5x is x.",
      "You must take out the HCF (the highest): 6x + 18 = 6(x + 3), do not stop at 3(2x + 6).",
      "Check by expanding the brackets again to see if you get the original expression."
    ],
    "ex.2.4.q": "Factorise 4a + 8ab.",
    "ex.2.4.steps": [
      "The HCF of 4a and 8ab is 4a.",
      "Divide: 4a ÷ 4a = 1; 8ab ÷ 4a = 2b.",
      "4a + 8ab = 4a(1 + 2b). Check: 4a × 1 = 4a, 4a × 2b = 8ab."
    ],
    "ex.2.4.prompts": [
      "What is the highest common factor of the two terms 4a and 8ab? Look at the numbers and the letters separately.",
      "When you take the common factor outside, what is left of each term? Divide each term by the common factor.",
      "If you multiply the brackets back by the common factor, do you return to the original expression?"
    ],
    "ex.2.4.twist": "If it is changed to 4a + 8ab + 12a², how do you factorise it?",
    "s.2.5.learn": [
      "Formulae and equations both have an equals sign; expressions do not. An equation has an unknown to find.",
      "Solving an equation: use inverse operations, doing the same thing to both sides (add, subtract, multiply, divide).",
      "If there are brackets, expand first: 3(x + 3) = 24 → 3x + 9 = 24 → 3x = 15 → x = 5.",
      "If the unknown is on both sides, move it to one side: 5y − 4 = 3y + 8 → 2y − 4 = 8 → 2y = 12 → y = 6.",
      "Geometry problems (two equal sides, angles in a triangle add up to 180°) and word problems: form an equation, solve it, then check."
    ],
    "ex.2.5.q": "Solve 5y − 4 = 3y + 8.",
    "ex.2.5.steps": [
      "Subtract 3y from both sides: 2y − 4 = 8.",
      "Add 4 to both sides: 2y = 12.",
      "Divide both sides by 2: y = 6. Check: 5 × 6 − 4 = 26 and 3 × 6 + 8 = 26."
    ],
    "ex.2.5.prompts": [
      "There is y on both sides. You want to gather the terms with y on one side: which term must you subtract from both sides?",
      "Now there is still −4 on the side with y. Which operation do you do to both sides to move it to the other side?",
      "With 2y = 12, which operation finds y, and how can you check the result?"
    ],
    "ex.2.5.twist": "If it is changed to 5y − 4 = 5y + 8, what happens? Try to solve it and explain.",
    "s.2.6.learn": [
      "< means \"less than\", ≤ means \"less than or equal to\", > means \"greater than\", ≥ means \"greater than or equal to\".",
      "On a number line: an open circle for < and >, a closed circle for ≤ and ≥.",
      "3 ≤ x < 9: x is greater than or equal to 3 and less than 9 (3 is included, 9 is not).",
      "Integers in a range: check whether the start and end points are included. For 2 ≤ x < 6: 2, 3, 4, 5.",
      "Multiplying or adding the same number to both sides gives an equivalent inequality: x > 5 is equivalent to 2x > 10 and x − 2 > 3."
    ],
    "ex.2.6.q": "List the integer values of y that satisfy −5 < y ≤ −1.",
    "ex.2.6.steps": [
      "y > −5 (−5 is not included) so the smallest integer is −4.",
      "y ≤ −1 (−1 is included) so the largest integer is −1.",
      "The values are: −4, −3, −2, −1."
    ],
    "ex.2.6.prompts": [
      "What does the < sign (with no equals) say about −5: is it counted? Which is the smallest integer that works?",
      "What about the ≤ sign with −1: is −1 counted? That is the largest number.",
      "List every integer between the two end points (including an end point if it is allowed). How many numbers do you have?"
    ],
    "ex.2.6.twist": "If it is changed to −5 ≤ y < −1, what are the integer values? What is their sum?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The final gate of the Alchemy Workshop only opens for algebra problems in the style of Grade 7–8 exams: simplifying, factorising, solving equations and inequalities, and forming equations from word problems.",
    "q.2.1-01.q": "In the expression 4x + 9, what is the coefficient of x?",
    "q.2.1-01.hints": [
      "The coefficient is the number that multiplies the variable. Which letter is the variable here?",
      "Which number is multiplying x?",
      "The 9 stands on its own; what is it called?"
    ],
    "q.2.1-01.explain": "4 multiplies x so the coefficient of x is 4. The number 9 is the constant. Common mistake: choosing 9 or 13.",
    "q.2.1-02.q": "Jake thinks of a number n. He multiplies it by 2 and then adds 5. Write an expression.",
    "q.2.1-02.hints": [
      "How do you write n multiplied by 2 in a simpler way?",
      "2n and then add 5.",
      "Write the two terms joined by a + sign."
    ],
    "q.2.1-02.explain": "Multiply by 2: 2n; add 5: 2n + 5.",
    "q.2.1-03.q": "You think of a number x. You add 2 to it and then multiply the result by 4. Write an expression.",
    "q.2.1-03.hints": [
      "Which operation is done first, adding or multiplying?",
      "To add first and multiply after, what symbol do you need?",
      "Put x + 2 in brackets and then multiply by 4."
    ],
    "q.2.1-03.explain": "The addition comes first so (x + 2) is in brackets, then multiply by 4: 4(x + 2). If you write 4x + 2 then only x is multiplied by 4.",
    "q.2.1-04.q": "You think of a number n, divide it by 2 and then add 4. Which expression is correct?",
    "q.2.1-04.hints": [
      "Does the division apply to n or to n + 4?",
      "Divide n by 2 first, add 4 after.",
      "(n + 4)/2 means add first and then divide."
    ],
    "q.2.1-04.explain": "Divide first, add after: n/2 + 4. The expression (n + 4)/2 adds 4 first and then divides — a common mistake.",
    "q.2.1-05.q": "The shortest side of a triangle is y cm. The second side is 3 cm longer than the shortest side. The third side is twice as long as the second side. Write the perimeter of the triangle in its simplest form.",
    "q.2.1-05.hints": [
      "What is the second side in terms of y?",
      "The third side = 2(y + 3) = 2y + 6.",
      "Add the three sides y + (y + 3) + (2y + 6) and simplify."
    ],
    "q.2.1-05.explain": "The three sides: y, y + 3, 2y + 6. Perimeter = 4y + 9 (cm).",
    "q.2.1-06.q": "A bag of cement costs c dollars, a bag of gravel costs g dollars, and a bag of sand costs s dollars. Write an expression for the total cost of 3 bags of cement, 4 bags of gravel and 6 bags of sand.",
    "q.2.1-06.hints": [
      "What is the cost of 3 bags of cement?",
      "Do the same for gravel and sand.",
      "Add the three terms together."
    ],
    "q.2.1-06.explain": "3 bags of cement: 3c; 4 bags of gravel: 4g; 6 bags of sand: 6s. Total: 3c + 4g + 6s.",
    "q.2.1-07.q": "1 kg of apples costs a dollars, 1 kg of bananas costs b dollars, 1 kg of carrots costs c dollars. The total cost of 3 kg of apples, 1/4 kg of bananas and 4/5 kg of carrots is:",
    "q.2.1-07.hints": [
      "The cost of 3 kg of apples is 3a. What about 1/4 kg of bananas?",
      "1/4 kg of bananas costs (1/4) × b = b/4.",
      "Do the same for 4/5 kg of carrots and then add."
    ],
    "q.2.1-07.explain": "3a + b/4 + 4c/5. The other answers invert a fraction or multiply wrongly (for example 4b is 4 kg of bananas).",
    "q.2.1-08.q": "Pedro is asked to write expressions for (a) one third of x plus 4, (b) 5 minus two fifths of y. Pedro writes (a) x/3 + 4 and (b) 2y/5 − 5. Which comment is correct?",
    "q.2.1-08.choices": [
      "Both are correct",
      "Only (a) is correct; (b) should be 5 − 2y/5",
      "Only (b) is correct",
      "Both are wrong"
    ],
    "q.2.1-08.hints": [
      "Is part (a) correct? Read it again: one third of x.",
      "Part (b): which number is being subtracted from, and which is being subtracted?",
      "How is \"5 minus 2y/5\" different from \"2y/5 minus 5\"?"
    ],
    "q.2.1-08.explain": "(a) is correct. (b) should be 5 − 2y/5; Pedro wrote the order backwards (2y/5 − 5 is the opposite of the correct result). Subtraction is not commutative.",
    "q.2.1-09.q": "A rectangle has sides (1/3)a cm and 4b cm. The perimeter in simplest form is (2/3)a + 8b. Work out the perimeter when a = 6 and b = 2.",
    "q.2.1-09.hints": [
      "Perimeter = 2 × (length + width). Write it out with a and b.",
      "2 × (a/3) = 2a/3 and 2 × 4b = 8b.",
      "Substitute a = 6, b = 2: 2 × 6/3 + 8 × 2."
    ],
    "q.2.1-09.explain": "Substitute: (2/3) × 6 + 8 × 2 = 4 + 16 = 20 (cm).",
    "q.2.1-10.q": "You think of a number n, divide it by 3 and then multiply by 2. Select all the equivalent expressions.",
    "q.2.1-10.hints": [
      "Is dividing by 3 and then multiplying by 2 the same as taking two thirds of n?",
      "Try n = 6 in each expression: what is the result?",
      "Does n/(3 × 2) = n/6 give the same result when n = 6?"
    ],
    "q.2.1-10.explain": "With n = 6: 2n/3 = 4, (n/3) × 2 = 4, (2/3)n = 4, but n/6 = 1. Multiplying n/3 by 2 is not dividing by 6 — a common mistake.",
    "q.2.2-01.q": "Work out 8m − 5 when m = −2.",
    "q.2.2-01.hints": [
      "Substitute m = −2: 8 × (−2) − 5.",
      "8 × (−2) = ?",
      "Then subtract 5."
    ],
    "q.2.2-01.explain": "8 × (−2) = −16; −16 − 5 = −21.",
    "q.2.2-02.q": "Work out 4k² when k = −3.",
    "q.2.2-02.hints": [
      "The square applies only to k, not to 4k. Work out k² first.",
      "(−3)² = ?",
      "Then multiply by 4."
    ],
    "q.2.2-02.explain": "(−3)² = 9; 4 × 9 = 36.",
    "q.2.2-03.q": "Dakarai works out x² − 8 when x = −3 like this: −3 × −3 − 8 = −9 − 8 = −17. The correct result is:",
    "q.2.2-03.hints": [
      "Work out −3 × −3 first: what is the sign of the product of two negative numbers?",
      "So what is −3 × −3?",
      "Subtract 8."
    ],
    "q.2.2-03.explain": "(−3)² = +9 (negative × negative), so 9 − 8 = 1. Dakarai mistakenly took −3 × −3 = −9.",
    "q.2.2-04.q": "Work out 2y³ when y = −3.",
    "q.2.2-04.hints": [
      "y³ = y × y × y. Work out (−3)³ first.",
      "(−3)³ = 9 × (−3) = ?",
      "Then multiply by 2."
    ],
    "q.2.2-04.explain": "(−3)³ = −27; 2 × (−27) = −54. Common mistake: working out (2 × −3)³ = −216.",
    "q.2.2-05.q": "A taxi company charges a fixed fee of 6 dollars plus 2 dollars per km. The formula is C = 6 + 2k. Work out the cost for a journey of 35 km.",
    "q.2.2-05.hints": [
      "Substitute k = 35 into the formula.",
      "2 × 35 = ?",
      "Add the fixed fee of 6."
    ],
    "q.2.2-05.explain": "C = 6 + 2 × 35 = 6 + 70 = 76 (dollars).",
    "q.2.2-06.q": "A horse's height in cm is C = 2.5(4H + I), where H is the number of hands and I is the number of inches. Work out C when H = 14 and I = 2.",
    "q.2.2-06.hints": [
      "Substitute inside the brackets first: 4 × 14 + 2.",
      "4 × 14 + 2 = 58.",
      "Multiply by 2.5."
    ],
    "q.2.2-06.explain": "4 × 14 + 2 = 58; 2.5 × 58 = 145 (cm).",
    "q.2.2-07.q": "Given the formula f = w/p. Change the subject to w and then work out w when f = 0.25 and p = 52.",
    "q.2.2-07.hints": [
      "To leave w on its own, what must you do about the division by p?",
      "Multiply both sides by p: w = f × p.",
      "0.25 × 52 = ?"
    ],
    "q.2.2-07.explain": "w = f × p = 0.25 × 52 = 13.",
    "q.2.2-08.q": "Change the subject of the formula y = 7x − 3 to x. Which result is correct?",
    "q.2.2-08.hints": [
      "First inverse step: how do you remove the −3?",
      "Add 3 to both sides: y + 3 = 7x.",
      "Then divide both sides (all of y + 3) by 7."
    ],
    "q.2.2-08.explain": "x = (y + 3)/7. Common mistakes: dividing only y by 7 (y/7 + 3) or forgetting to change the sign of 3.",
    "q.2.2-09.q": "Given H = 6p − k. Find p when H = 40 and k = 14.",
    "q.2.2-09.hints": [
      "Substitute: 40 = 6p − 14.",
      "Add 14 to both sides: 6p = ?",
      "Divide both sides by 6."
    ],
    "q.2.2-09.explain": "40 = 6p − 14 → 6p = 54 → p = 9. Or change the subject: p = (H + k)/6 = 54/6 = 9.",
    "q.2.2-10.q": "The volume of a triangular prism is V = bhl/2. Prism A: b = 8, h = 5, l = 18 (cm). Prism B: b = 9, h = 14, l = 6 (cm). How many cm³ greater is the volume of prism B than prism A?",
    "q.2.2-10.hints": [
      "Work out V for A: 8 × 5 × 18 ÷ 2.",
      "V(A) = 360. Work out V(B) = 9 × 14 × 6 ÷ 2.",
      "Subtract V(A) from V(B)."
    ],
    "q.2.2-10.explain": "V(A) = 720/2 = 360; V(B) = 756/2 = 378. B is greater by 18 cm³ (Xavier is wrong to say A is greater).",
    "q.2.3-01.q": "Expand: 4(x + 6).",
    "q.2.3-01.hints": [
      "What do you get when you multiply 4 by x?",
      "What do you get when you multiply 4 by 6?",
      "Join the two results with a + sign."
    ],
    "q.2.3-01.explain": "4 × x = 4x and 4 × 6 = 24 so 4(x + 6) = 4x + 24.",
    "q.2.3-02.q": "Expand: 7(z − 2).",
    "q.2.3-02.hints": [
      "Multiply 7 by z.",
      "Multiply 7 by −2.",
      "Write the two results next to each other."
    ],
    "q.2.3-02.explain": "7 × z = 7z; 7 × (−2) = −14. So 7z − 14.",
    "q.2.3-03.q": "Expand: 2(2p + 3q).",
    "q.2.3-03.hints": [
      "What is 2 multiplied by 2p?",
      "What is 2 multiplied by 3q?",
      "Are the two results like terms that can be collected?"
    ],
    "q.2.3-03.explain": "2 × 2p = 4p; 2 × 3q = 6q. The two terms are different kinds so leave them: 4p + 6q.",
    "q.2.3-04.q": "Expand: n(9 − 8n).",
    "q.2.3-04.hints": [
      "n × 9 = ?",
      "n × (−8n) = ? Remember n × n = n².",
      "Join the two results."
    ],
    "q.2.3-04.explain": "n × 9 = 9n; n × (−8n) = −8n². So 9n − 8n².",
    "q.2.3-05.q": "Expand: 2d(4c − 7a).",
    "q.2.3-05.hints": [
      "2d × 4c = ?",
      "2d × (−7a) = ?",
      "Letters can be written in alphabetical order."
    ],
    "q.2.3-05.explain": "2d × 4c = 8cd; 2d × (−7a) = −14ad. Both 8cd − 14ad and 8dc − 14da are correct.",
    "q.2.3-06.q": "Expand and simplify: x(x + 2) + x(x + 5).",
    "q.2.3-06.hints": [
      "Expand each bracket: x(x + 2) = x² + 2x.",
      "x(x + 5) = x² + 5x. Add the two results.",
      "Collect x² + x² and 2x + 5x."
    ],
    "q.2.3-06.explain": "x² + 2x + x² + 5x = 2x² + 7x.",
    "q.2.3-07.q": "Expand and simplify: 8(x + 5) − 3(2x + 7).",
    "q.2.3-07.hints": [
      "8(x + 5) = 8x + 40.",
      "−3(2x + 7): the minus sign multiplies both terms. What is the result?",
      "Collect: (8x − 6x) and (40 − 21)."
    ],
    "q.2.3-07.explain": "8x + 40 − 6x − 21 = 2x + 19. Shen writing +21 is wrong because he forgot to change the sign.",
    "q.2.3-08.q": "Shen works: 8(x + 5) − 3(2x + 7) = 8x + 40 − 6x + 21 = 2x + 61. What is Shen's mistake?",
    "q.2.3-08.choices": [
      "Multiplied 3 × 2 wrongly as 6",
      "Forgot to change the sign of the second term: it should be −21",
      "Multiplied 8 × 5 wrongly",
      "There is no mistake"
    ],
    "q.2.3-08.hints": [
      "Check each term after expanding the second bracket.",
      "What is −3 × 7, +21 or −21?",
      "Which terms does the minus sign in front of the bracket affect?"
    ],
    "q.2.3-08.explain": "−3 × 7 = −21, not +21: Shen only changed the sign of the first term. The correct result is 2x + 19.",
    "q.2.3-09.q": "Select all the expressions that equal 16x³ + 12x² after expanding.",
    "q.2.3-09.hints": [
      "Expand each expression: 4x²(4x + 3) = ?",
      "x²(12 + 16x) = ?",
      "For 2x²(12x + 9) and 3x²(6 + 8x), do the coefficients of x³ and x² match?"
    ],
    "q.2.3-09.explain": "4x²(4x + 3) = 16x³ + 12x² ✓; x²(12 + 16x) = 12x² + 16x³ ✓; 2x²(12x + 9) = 24x³ + 18x² ✗; 3x²(6 + 8x) = 18x² + 24x³ ✗.",
    "q.2.3-10.q": "Zara expands 2d(4c − 7a) and gets 8cd − 14ad. Arun gets 8dc − 14da and says \"one of us is wrong\". Who is correct?",
    "q.2.3-10.choices": [
      "Only Zara is correct",
      "Only Arun is correct",
      "Both are correct (only the order of the letters differs)",
      "Both are wrong"
    ],
    "q.2.3-10.hints": [
      "Is multiplication commutative? Are dc and cd equal?",
      "Are da and ad equal?",
      "Do the two results have the same value when you try numbers (c = 2, d = 3, a = 1)?"
    ],
    "q.2.3-10.explain": "Multiplication is commutative: dc = cd and da = ad. The two results are the same, only the order of the letters differs. Both are correct.",
    "q.2.4-01.q": "Factorise: 2x + 10.",
    "q.2.4-01.hints": [
      "What is the HCF of 2x and 10?",
      "Divide 2x by 2 and 10 by 2.",
      "Write 2 outside the brackets and the divided results inside."
    ],
    "q.2.4-01.explain": "HCF = 2; 2x + 10 = 2(x + 5). Check: 2 × x = 2x, 2 × 5 = 10.",
    "q.2.4-02.q": "Factorise: 8 − 12y.",
    "q.2.4-02.hints": [
      "What is the HCF of 8 and 12?",
      "8 ÷ 4 = ? and 12y ÷ 4 = ?",
      "Keep the minus sign between the two terms."
    ],
    "q.2.4-02.explain": "HCF = 4; 8 − 12y = 4(2 − 3y).",
    "q.2.4-03.q": "Factorise: 4a + 8ab.",
    "q.2.4-03.hints": [
      "What is the HCF of the coefficients 4 and 8?",
      "Which letter do both terms contain?",
      "What does 4a ÷ 4a give? (don't leave it blank!)"
    ],
    "q.2.4-03.explain": "HCF = 4a: 4a(1 + 2b). Remember 4a ÷ 4a = 1 so the first term becomes 1.",
    "q.2.4-04.q": "Factorise: x² − 5x.",
    "q.2.4-04.hints": [
      "Which common factor do both x² and 5x have?",
      "x² ÷ x = ? and 5x ÷ x = ?",
      "Write x(…)."
    ],
    "q.2.4-04.explain": "HCF = x: x(x − 5). Check: x × x = x², x × (−5) = −5x.",
    "q.2.4-05.q": "Factorise using the HCF: 18 − 24z.",
    "q.2.4-05.hints": [
      "What is the HCF of 18 and 24? Is it 2 or 3?",
      "The highest common factor is 6.",
      "18 ÷ 6 = 3 and 24z ÷ 6 = 4z."
    ],
    "q.2.4-05.explain": "HCF(18, 24) = 6 so 18 − 24z = 6(3 − 4z).",
    "q.2.4-06.q": "Marcus factorises 6x + 18 and gets 3(2x + 6), but Arun gets 6(x + 3). Which comment is correct?",
    "q.2.4-06.choices": [
      "Marcus is correct and has factorised completely",
      "Arun is correct; 3(2x + 6) has not used the HCF",
      "Both are wrong",
      "Both are exactly the same"
    ],
    "q.2.4-06.hints": [
      "Expand both: do they give the same result?",
      "In Marcus's brackets, does 2x + 6 still have a common factor?",
      "What is the HCF of 6x and 18?"
    ],
    "q.2.4-06.explain": "Expanding both gives 6x + 18 but 3(2x + 6) still has a common factor of 2 in the brackets. You must take out the HCF = 6: 6(x + 3).",
    "q.2.4-07.q": "What is the HCF of 6x and 9x²?",
    "q.2.4-07.hints": [
      "What is the HCF of the coefficients 6 and 9?",
      "Common letter: x or x²? Take the smallest power.",
      "Multiply the common coefficient by the common letter."
    ],
    "q.2.4-07.explain": "Highest common coefficient: 3; common letter: x (smallest power). HCF = 3x. Common mistakes: taking only 3 (Zara) or taking 9x.",
    "q.2.4-08.q": "Factorise: 6y² − 12y.",
    "q.2.4-08.hints": [
      "What is the HCF of 6 and 12?",
      "What is the common letter part of y² and y?",
      "6y² ÷ 6y = ? and 12y ÷ 6y = ?"
    ],
    "q.2.4-08.explain": "HCF = 6y: 6y(y − 2). Check: 6y × y = 6y², 6y × (−2) = −12y.",
    "q.2.4-09.q": "Factorise: 3y² − 9y + 6xy.",
    "q.2.4-09.hints": [
      "What is the HCF of 3, 9, 6?",
      "All three terms contain the letter y.",
      "Divide each term by 3y."
    ],
    "q.2.4-09.explain": "HCF = 3y: 3y²/3y = y; −9y/3y = −3; 6xy/3y = 2x. Result: 3y(y − 3 + 2x).",
    "q.2.4-10.q": "Marcus expands 6(3y + 2) − 4(y − 2), simplifies and then factorises. What is the correct result?",
    "q.2.4-10.hints": [
      "Expand: 6(3y + 2) = 18y + 12. What about −4(y − 2)?",
      "−4(y − 2) = −4y + 8. Collect the terms.",
      "14y + 20: what is the HCF?"
    ],
    "q.2.4-10.explain": "18y + 12 − 4y + 8 = 14y + 20 = 2(7y + 10). Marcus forgot to change the sign of −4 × (−2) = +8 so he was wrong.",
    "q.2.5-01.q": "9u − vw is an…",
    "q.2.5-01.choices": [
      "Formula",
      "Expression",
      "Equation"
    ],
    "q.2.5-01.hints": [
      "Does it have an equals sign?",
      "Formulae and equations both need an equals sign.",
      "So which type is it?"
    ],
    "q.2.5-01.explain": "9u − vw has no equals sign so it is an expression. T = 3a² − 8d is a formula; 3y + 7 = 35 is an equation.",
    "q.2.5-02.q": "Solve 3x + 5 = 26.",
    "q.2.5-02.hints": [
      "Subtract 5 from both sides: 3x = ?",
      "3x = 21.",
      "Divide both sides by 3."
    ],
    "q.2.5-02.explain": "3x + 5 = 26 → 3x = 21 → x = 7.",
    "q.2.5-03.q": "Solve 4(x − 3) = 24.",
    "q.2.5-03.hints": [
      "Expand the brackets: 4x − 12 = 24.",
      "Add 12 to both sides: 4x = ?",
      "Divide both sides by 4."
    ],
    "q.2.5-03.explain": "4x − 12 = 24 → 4x = 36 → x = 9. Alternatively: divide both sides by 4 first: x − 3 = 6.",
    "q.2.5-04.q": "My sister is 15 years old. My father's age is x. Half of my father's age minus 3 equals my sister's age. How old is my father?",
    "q.2.5-04.hints": [
      "Write the equation: x/2 − 3 = 15.",
      "Add 3 to both sides: x/2 = ?",
      "Multiply both sides by 2."
    ],
    "q.2.5-04.explain": "x/2 − 3 = 15 → x/2 = 18 → x = 36.",
    "q.2.5-05.q": "Solve 6y + 2 = 4y + 18.",
    "q.2.5-05.hints": [
      "Subtract 4y from both sides: 2y + 2 = 18.",
      "Subtract 2 from both sides: 2y = ?",
      "Divide both sides by 2."
    ],
    "q.2.5-05.explain": "6y + 2 = 4y + 18 → 2y + 2 = 18 → 2y = 16 → y = 8. Check: 6 × 8 + 2 = 50 = 4 × 8 + 18.",
    "q.2.5-06.q": "Solve 5(2x + 3) + 2(x − 4) = 31.",
    "q.2.5-06.hints": [
      "Expand both brackets first.",
      "10x + 15 + 2x − 8 = 12x + 7.",
      "12x + 7 = 31 → 12x = ?"
    ],
    "q.2.5-06.explain": "12x + 7 = 31 → 12x = 24 → x = 2.",
    "q.2.5-07.q": "An isosceles triangle has two equal sides of 2y + 7 and 5y − 17 (cm). Find y.",
    "q.2.5-07.hints": [
      "The two sides are equal so write 2y + 7 = 5y − 17.",
      "Move the unknown to one side: 24 = 3y.",
      "Divide by 3. Then check: how many cm long is each side?"
    ],
    "q.2.5-07.explain": "2y + 7 = 5y − 17 → 24 = 3y → y = 8. Check: 2 × 8 + 7 = 23 and 5 × 8 − 17 = 23.",
    "q.2.5-08.q": "The three angles of a triangle are 6n°, (2n + 5)° and (n − 5)°. Find n.",
    "q.2.5-08.hints": [
      "How many degrees do the three angles of a triangle add up to?",
      "6n + 2n + 5 + n − 5 = 9n.",
      "9n = 180."
    ],
    "q.2.5-08.explain": "6n + (2n + 5) + (n − 5) = 9n = 180 so n = 20. The angles: 120°, 45°, 15° (total 180°).",
    "q.2.5-09.q": "A rectangle has two long sides of 5x − 3 and 37, and two short sides of 2(y + 3) and 20 (cm). Work out x + y.",
    "q.2.5-09.hints": [
      "Opposite sides are equal: 5x − 3 = 37.",
      "x = ? Then 2(y + 3) = 20: y = ?",
      "Add x and y."
    ],
    "q.2.5-09.explain": "5x − 3 = 37 → x = 8. 2(y + 3) = 20 → y + 3 = 10 → y = 7. So x + y = 15.",
    "q.2.5-10.q": "Solve 4(2b − 3) = −8b. (Give the answer as a fraction a/b.)",
    "q.2.5-10.hints": [
      "Expand the brackets: 8b − 12 = −8b.",
      "Add 8b and 12 to both sides: 16b = ?",
      "Divide 12 by 16 and simplify."
    ],
    "q.2.5-10.explain": "8b − 12 = −8b → 16b = 12 → b = 3/4. Check: 4(2 × 3/4 − 3) = 4 × (−3/2) = −6 and −8 × 3/4 = −6.",
    "q.2.6-01.q": "Given 12 ≤ x < 18 (x an integer). What is the smallest integer x can equal?",
    "q.2.6-01.hints": [
      "Does the ≤ sign allow x to equal 12?",
      "Is the circle at 12 closed or open?",
      "So what is the smallest number?"
    ],
    "q.2.6-01.explain": "x ≥ 12 so x = 12 is included. Ryan was mistaken in thinking the smallest number is 13.",
    "q.2.6-02.q": "Given 12 ≤ x < 18 (x an integer). What is the largest integer x can equal?",
    "q.2.6-02.hints": [
      "Does the < sign allow x to equal 18?",
      "Is the circle at 18 open or closed?",
      "What is the integer just before 18?"
    ],
    "q.2.6-02.explain": "x < 18 so 18 is not included; the largest is 17.",
    "q.2.6-03.q": "How many integers x satisfy −9 ≤ x < −1?",
    "q.2.6-03.hints": [
      "The smallest number is −9 (included). Which integer just before −1 is the largest?",
      "List: −9, −8, …, −2.",
      "Count them."
    ],
    "q.2.6-03.explain": "The numbers: −9, −8, −7, −6, −5, −4, −3, −2: there are 8 numbers.",
    "q.2.6-04.q": "Write an inequality: y is greater than −2 and less than or equal to 5.",
    "q.2.6-04.hints": [
      "The smaller number: −2 is on the left. Use < or ≤ for −2?",
      "The larger number: is 5 included or not?",
      "Write it in the form _ < y ≤ _."
    ],
    "q.2.6-04.explain": "y > −2 is written −2 < y; y ≤ 5. Combined: −2 < y ≤ 5.",
    "q.2.6-05.q": "Which inequality is shown on this number line (open circle at 5, closed circle at 20)?",
    "q.2.6-05.hints": [
      "An open circle means that end point is not included. At which number?",
      "A closed circle means the end point is included. At which number?",
      "Choose the matching inequality."
    ],
    "q.2.6-05.explain": "Open circle at 5 (5 not included): x > 5. Closed circle at 20 (20 included): x ≤ 20. So 5 < x ≤ 20.",
    "q.2.6-06.q": "x > 8 is equivalent to 3x > □. Fill in the number in the box.",
    "q.2.6-06.hints": [
      "Multiply both sides by 3: does the direction of the sign change?",
      "3 × 8 = ?",
      "So what is the number in the box?"
    ],
    "q.2.6-06.explain": "Multiplying both sides by the positive number 3 keeps the direction: 3x > 24.",
    "q.2.6-07.q": "Arun says 2 < y < 9 can be written as 9 > y > 2; Sofia says it can be written as 2 > y > 9. Who is correct?",
    "q.2.6-07.choices": [
      "Only Arun is correct",
      "Only Sofia is correct",
      "Both are correct",
      "Both are wrong"
    ],
    "q.2.6-07.hints": [
      "Read 9 > y > 2 from right to left: y is greater than 2 and less than 9?",
      "2 > y > 9 means y is both less than 2 and greater than 9. Is there such a number?",
      "Draw a conclusion."
    ],
    "q.2.6-07.explain": "9 > y > 2 says the same as 2 < y < 9 (written the other way round). 2 > y > 9 is impossible because no number is both < 2 and > 9. Only Arun is correct.",
    "q.2.6-08.q": "How many integers m satisfy 2½ ≤ m < 7¼?",
    "q.2.6-08.hints": [
      "Which two integers does 2½ lie between? What is the smallest integer ≥ 2½?",
      "What is the largest integer < 7¼?",
      "List 3, 4, … and count."
    ],
    "q.2.6-08.explain": "The smallest is 3 (2 < 2½) and the largest is 7. The numbers: 3, 4, 5, 6, 7: there are 5 numbers. Sandeep was mistaken to list 2 as well.",
    "q.2.6-09.q": "Work out the sum of the integers m that satisfy 5¾ ≤ m < 9⅓.",
    "q.2.6-09.hints": [
      "What is the smallest integer ≥ 5¾?",
      "What is the largest integer < 9⅓?",
      "Add the numbers from the smallest to the largest."
    ],
    "q.2.6-09.explain": "The numbers: 6, 7, 8, 9. Sum = 6 + 7 + 8 + 9 = 30.",
    "q.2.6-10.q": "Can m > 14 and m < 8 be written as a single inequality of the form a < m < b?",
    "q.2.6-10.choices": [
      "Yes: 8 < m < 14",
      "No: no number satisfies both",
      "Yes: 14 < m < 8",
      "Yes: 8 > m > 14"
    ],
    "q.2.6-10.hints": [
      "Which number is both greater than 14 and less than 8?",
      "Try m = 10: does it satisfy both?",
      "Draw a conclusion about the set of values."
    ],
    "q.2.6-10.explain": "No number is both > 14 and < 8, so it cannot be written as a single inequality (the solution set is empty). Common mistake: writing 8 < m < 14, which is m > 8 and m < 14.",
    "q.ch-01.q": "Simplify the expression A = 4(x + 3) − 3(x − 2).",
    "q.ch-01.hints": [
      "Expand the first bracket: 4(x + 3) = ?",
      "−3(x − 2) = −3x + 6 (watch the signs).",
      "Collect 4x − 3x and 12 + 6."
    ],
    "q.ch-01.explain": "4x + 12 − 3x + 6 = x + 18.",
    "q.ch-02.q": "Given 2a − 3b = 5. Work out the value of the expression 6a − 9b + 4.",
    "q.ch-02.hints": [
      "How is the expression 6a − 9b related to 2a − 3b?",
      "6a − 9b = 3(2a − 3b).",
      "Substitute 2a − 3b = 5 and then add 4."
    ],
    "q.ch-02.explain": "6a − 9b + 4 = 3(2a − 3b) + 4 = 3 × 5 + 4 = 19. There is no need to find a and b separately.",
    "q.ch-03.q": "Factorise the polynomial 12x²y − 18xy².",
    "q.ch-03.hints": [
      "What is the HCF of 12 and 18?",
      "What is the common variable part of x²y and xy²?",
      "Divide each term by 6xy."
    ],
    "q.ch-03.explain": "HCF = 6xy: 12x²y ÷ 6xy = 2x; 18xy² ÷ 6xy = 3y. Result 6xy(2x − 3y).",
    "q.ch-04.q": "Solve the equation 3(2x − 1) − 2(x + 4) = 5.",
    "q.ch-04.hints": [
      "Expand both brackets (watch the sign of −2).",
      "6x − 3 − 2x − 8 = 4x − 11.",
      "4x − 11 = 5 → 4x = ?"
    ],
    "q.ch-04.explain": "4x − 11 = 5 → 4x = 16 → x = 4.",
    "q.ch-05.q": "Solve the equation (2x − 1)/3 = (x + 4)/2.",
    "q.ch-05.hints": [
      "Cross-multiply or multiply both sides by 6 to remove the denominators.",
      "2(2x − 1) = 3(x + 4).",
      "4x − 2 = 3x + 12 → x = ?"
    ],
    "q.ch-05.explain": "Multiply both sides by 6: 2(2x − 1) = 3(x + 4) → 4x − 2 = 3x + 12 → x = 14. Check: 27/3 = 9 and 18/2 = 9.",
    "q.ch-06.q": "Find the largest integer that satisfies the inequality 7 − 2x > −3.",
    "q.ch-06.hints": [
      "Subtract 7 from both sides: −2x > −10.",
      "Divide both sides by −2: what happens to the direction of the inequality sign?",
      "x < 5; what is the largest integer less than 5?"
    ],
    "q.ch-06.explain": "7 − 2x > −3 → −2x > −10 → x < 5 (the sign reverses when dividing by a negative number). The largest integer is 4.",
    "q.ch-07.q": "At present a mother is 3 times as old as her child. In 5 years' time the sum of their ages will be 58. How old is the child now?",
    "q.ch-07.hints": [
      "Let the child's age now be x. What is the mother's age?",
      "In 5 years: child x + 5, mother 3x + 5.",
      "(x + 5) + (3x + 5) = 58."
    ],
    "q.ch-07.explain": "4x + 10 = 58 → 4x = 48 → x = 12. The mother is 36; in 5 years: 17 + 41 = 58.",
    "q.ch-08.q": "A rectangular garden has a perimeter of 56 m, and its length is 6 m more than its width. Work out the area of the garden.",
    "q.ch-08.hints": [
      "Let the width be x. What is the length?",
      "Perimeter: 2(x + x + 6) = 56.",
      "Find x, then multiply length × width."
    ],
    "q.ch-08.explain": "2(2x + 6) = 56 → 2x + 6 = 28 → x = 11. Length 17 m; area 11 × 17 = 187 m².",
    "q.ch-09.q": "The three angles of a triangle are x°, (2x + 10)° and (3x − 10)°. How many degrees is the largest angle?",
    "q.ch-09.hints": [
      "How many degrees do the three angles add up to?",
      "x + 2x + 10 + 3x − 10 = 6x = 180.",
      "Find x and then work out each angle."
    ],
    "q.ch-09.explain": "6x = 180 → x = 30. The angles: 30°, 70°, 80°. The largest angle is 80°.",
    "q.ch-10.q": "Find the sum of all the integers n that satisfy 2 < (3n − 1)/4 ≤ 5.",
    "q.ch-10.hints": [
      "Multiply all three parts by 4: 8 < 3n − 1 ≤ 20.",
      "Add 1: 9 < 3n ≤ 21 → divide by 3.",
      "3 < n ≤ 7: list and add."
    ],
    "q.ch-10.explain": "8 < 3n − 1 ≤ 20 → 9 < 3n ≤ 21 → 3 < n ≤ 7. The numbers: 4, 5, 6, 7, with sum 22.",
    "p.goal": "Explore algebra chains: an input is substituted into the first expression, and the result is substituted into the second expression. Arrange eight expression cards into four chains so that inputs 1, 2, 3, 4 give outputs 40, 30, 20, 10.",
    "p.steps": [
      "Try a sample chain: input 3, card 4x − 10 gives 2, then card 8x + 4 gives 20. Check it again by hand.",
      "Copy the eight cards: 2x + 3, 2(x + 1), 5x − 7, 12 − 2x, 3x − 4, 7x + 5, 3(x − 4), 8x − 2.",
      "With input 1, try each card as the first card and see which card its output could go through to give 40.",
      "Work backwards from the output: to give 40, which number must the last card receive? Use an equation to find it.",
      "Record the four complete chains in a table, using each card only once, then check each chain."
    ],
    "p.extensions": [
      "Choose two cards and an input number, work out the output, then challenge a friend to guess which cards you used.",
      "Make a chain of three cards: can your friend still guess the cards? Why is it harder?",
      "Design eight new cards of your own so that there are exactly four chains giving consecutive outputs 10, 20, 30, 40."
    ],
    "p.reflect": [
      "Is working backwards from the output easier than trying from the input? Why?",
      "Each expression card is like a function machine; what is the inverse operation of each card?",
      "Can a chain of two cards be replaced by a single card? Try it with 4x − 10 followed by 8x + 4."
    ]
  },
  vi: {}
});
