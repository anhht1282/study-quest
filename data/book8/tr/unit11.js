window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 11,
  en: {
    "u.realm": "Coordinate Valley",
    "u.story": "The valley gate only opens when you can read a \"map\" made of straight lines: taxi fares, a water tank running dry, two walkers heading in opposite directions. Every graph is a story, and you must be able to retell it with a function.",
    "g.0.def": "A rule that tells you the value of y for each value of x, for example y = 3x + 2.",
    "g.1.def": "Marking the points (x, y) on a coordinate grid and joining them up.",
    "g.2.def": "A function of the form y = mx + c, whose graph is a straight line.",
    "g.3.def": "The number m in y = mx + c: when x goes up by 1, y goes up by m.",
    "g.4.def": "The value c in y = mx + c, the y-coordinate of the point where the line crosses the y-axis.",
    "g.5.def": "The x-coordinate of the point where the line crosses the x-axis (when y = 0).",
    "g.6.def": "An expression linking x and y for every point on the line.",
    "g.7.def": "Two lines with the same gradient (and different y-intercepts).",
    "s.11.1.learn": [
      "A situation with a fixed part and a changing part can be written as a function: total = (price per unit) × (number of units) + (fixed part).",
      "For example: hiring a hall with a $15 booking fee and $40 per hour gives c = 40n + 15.",
      "Substitute a value into the function to work out the output; if you know the output, solve an equation to find the input.",
      "Many different functions can pass through the same pair (x, y); one pair of numbers does not give a unique function.",
      "A real-life context can limit the sensible values of a variable (there is no negative time, and petrol cannot be negative)."
    ],
    "ex.11.1.q": "Hiring a digger: a fixed fee of $35 plus $10 per day. (a) What is the cost of hiring it for 7 days? (b) Write a function for n days.",
    "ex.11.1.steps": [
      "(a) 35 + 10 × 7 = 105 dollars.",
      "(b) y = 10n + 35."
    ],
    "ex.11.1.prompts": [
      "The cost has a constant part and a part that changes with the number of days. For 7 days, how do you work out those two parts and then add them?",
      "Replace the number 7 with the letter n: the fixed part stays the same, so what does the changing part become? Write y in terms of n."
    ],
    "ex.11.1.twist": "If the fixed fee rises to $50 but it is still $10 per day, how many dollars does 7 days cost?",
    "s.11.2.learn": [
      "Make a table of values: substitute values of x into the function to work out y, for example y = 2x − 1 for x = −2 gives y = −5.",
      "Each pair (x, y) in the table is a point; plot the points on a grid and join them with a straight line.",
      "Choose a scale so that every point in the table can be plotted.",
      "A point lies on the graph when its coordinates satisfy the function (substituting x gives the right y).",
      "Crossing the y-axis: x = 0. Crossing the x-axis: y = 0. You can predict them directly from the function."
    ],
    "ex.11.2.q": "Given y = 8x + 4. Make a table for x = −2, −1, 0, 1, 2, 3.",
    "ex.11.2.steps": [
      "x = −2: y = 8 × (−2) + 4 = −12.",
      "Table of y: −12, −4, 4, 12, 20, 28.",
      "Plot the 6 points and join them in a straight line; the line crosses the y-axis at 4."
    ],
    "ex.11.2.prompts": [
      "Choose x = −2 and substitute it into y = 8x + 4. Do you multiply first or add first, and what is the sign of 8 × (−2)?",
      "When x goes up by 1 unit, how much does y change? Use that to fill in the whole table more quickly.",
      "What kind of line do your plotted points lie on? What value of x gives the intersection with the y-axis, and can you see it in the table?"
    ],
    "ex.11.2.twist": "If it changes to y = −8x + 4, what is y when x = 3? How does the direction of the line change?",
    "s.11.3.learn": [
      "A linear function has the form y = mx + c; its graph is a straight line.",
      "m is the gradient: when x goes up by 1, y goes up by m. If m is negative the line slopes down; if m = 0 the line is horizontal.",
      "c is the y-intercept: the line crosses the y-axis at (0, c).",
      "Lines with the same m are parallel; lines with the same c cross the y-axis at the same point.",
      "In a real-life situation, m is the change per unit (price per hour) and c is the starting value (the fixed fee)."
    ],
    "ex.11.3.q": "The line y = 6x − 2. Find the gradient and the y-intercept.",
    "ex.11.3.steps": [
      "Gradient m = 6: when x goes up by 1, y goes up by 6.",
      "y-intercept c = −2: the line crosses the y-axis at (0, −2)."
    ],
    "ex.11.3.prompts": [
      "In y = mx + c, what does the coefficient in front of x tell you when x goes up by 1 unit?",
      "When x = 0, what is y? Which axis does that point lie on?"
    ],
    "ex.11.3.twist": "A straight line passes through (0, 5) and every time x goes up by 1, y goes down by 3. Write its equation.",
    "s.11.4.learn": [
      "Reading a graph: from a value on one axis, go across to the line and read the value on the other axis.",
      "A distance–time graph: the slope is the speed; a horizontal section means standing still; a steeper line means faster.",
      "The intersection of two lines shows when two quantities are equal (two people meet, two prices are equal).",
      "A line crossing the y-axis gives the starting value; the slope gives the change per unit.",
      "A graph with several sections tells a story stage by stage: each section has its own speed."
    ],
    "ex.11.4.q": "A graph of two taxi fares: A has a fixed fee of $12 and $2 per km; B has a fixed $4 and $4 per km. After what distance are the two fares equal?",
    "ex.11.4.steps": [
      "The two lines cross at x = 4.",
      "Check: A = 12 + 2 × 4 = 20; B = 4 + 4 × 4 = 20.",
      "After 4 km both taxis cost the same, $20."
    ],
    "ex.11.4.prompts": [
      "When do the two taxis cost the same? On the graph, which point of the two lines is that? Read the x-coordinate of the intersection.",
      "Substitute the number of km you found into both formulas: are the two prices equal?",
      "Conclusion: give the answer with the units of distance and the units of money."
    ],
    "ex.11.4.twist": "If taxi B had no fixed fee (still $4 per km), after how many km would the two taxis cost the same?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The function y = ax + b, gradient, intersections and motion: familiar types of problem from Grade 8 tests!",
    "q.11.1-01.hints": [
      "What is the cost of 12 books (not counting postage)?",
      "How many times is the $4 postage charged?",
      "Add the cost of the books and the postage."
    ],
    "q.11.1-01.explain": "12 × 6 = 72, add the postage of 4 once: 76 dollars.",
    "q.11.1-02.hints": [
      "How do you write the price of b books (not counting postage)?",
      "Is the postage the fixed part or the part that changes with b?",
      "Put the two parts together as c = ..."
    ],
    "q.11.1-02.explain": "Changing part: 6b; fixed part: 4. So c = 6b + 4.",
    "q.11.1-03.hints": [
      "How much is the hourly charge for 1.5 hours?",
      "Is the $45 fixed fee charged per hour?",
      "Add the two amounts."
    ],
    "q.11.1-03.explain": "30 × 1.5 = 45; add the fixed fee of 45: total 90 dollars.",
    "q.11.1-04.hints": [
      "Which amount is multiplied by the number of weeks w?",
      "Which amount is charged only once?",
      "Write y = (part for the weeks) + (fixed part)."
    ],
    "q.11.1-04.explain": "Changing cost: 50 × w; fixed delivery cost: 80. So y = 50w + 80.",
    "q.11.1-05.hints": [
      "Marcus pays $49; how many dollars of that is the fixed charge?",
      "How much money is left for printing photos?",
      "Divide that amount by the price per photo."
    ],
    "q.11.1-05.explain": "49 − 3 = 46 dollars for photos; 46 ÷ 2 = 23 photos. Check: 2 × 23 + 3 = 49.",
    "q.11.1-06.choices": [
      "Nothing is wrong",
      "The fixed fee has been doubled; the correct cost is $655",
      "The cost of 14 days should be $340 + $45",
      "The cost of 14 days is $630"
    ],
    "q.11.1-06.hints": [
      "How many times must the $25 fixed fee be paid, whether you hire for 7 or 14 days?",
      "Which part of the $340 really doubles when you hire for twice as many days?",
      "Work it out again: for 14 days, how much is the daily rental, then add the fixed fee."
    ],
    "q.11.1-06.explain": "Only the daily part doubles (7 × 45 = 315 → 630). The fixed fee of 25 is charged only once: 14 days = 630 + 25 = 655, not 680. This function is not directly proportional because it has a fixed fee.",
    "q.11.1-07.hints": [
      "How many more metres taller does the plant need to be than at the start?",
      "The plant grows 0.2 m each week.",
      "Divide the extra height needed by the growth each week."
    ],
    "q.11.1-07.explain": "It needs 3.5 − 1.5 = 2 m more; 2 ÷ 0.2 = 10 weeks. Function: h = 1.5 + 0.2t.",
    "q.11.1-08.hints": [
      "Write the relationship: z = f ÷ 2 − 2. When z = 30, what is half her father's age?",
      "If z = f/2 − 2 = 30 then what does f/2 equal?",
      "Double it to find f."
    ],
    "q.11.1-08.explain": "f/2 − 2 = 30 so f/2 = 32 and f = 64 years old.",
    "q.11.1-09.hints": [
      "Substitute x = 5 into each function and work out y.",
      "Which functions give y = 30? Which do not?",
      "Do not choose by gut feeling: more than one function could be correct."
    ],
    "q.11.1-09.explain": "Substituting x = 5: 6x = 30; 4x + 10 = 30; x + 30 = 35 (wrong); 40 − 2x = 30; 8x − 10 = 30. So functions A, B, D, E all fit. One pair (x, y) does not give a unique function.",
    "q.11.1-10.hints": [
      "A tank that is out of petrol means r equals what?",
      "Solve 18 − 3t = 0.",
      "For t bigger than that value r is negative — does that make sense?"
    ],
    "q.11.1-10.explain": "18 − 3t = 0 so t = 6 hours. After 6 hours r would be negative, which is meaningless, so t can only take values from 0 to 6.",
    "q.11.2-01.hints": [
      "Substitute x = 3 into −2x.",
      "Multiply −2 by 3: what is the sign of the result?",
      "Write the result."
    ],
    "q.11.2-01.explain": "y = −2 × 3 = −6.",
    "q.11.2-02.hints": [
      "Substitute x = −2 into 2x + 3.",
      "What is 2 × (−2)?",
      "Add 3."
    ],
    "q.11.2-02.explain": "y = 2 × (−2) + 3 = −4 + 3 = −1.",
    "q.11.2-03.hints": [
      "Substitute the x-coordinate of each point into the function y = 2x − 1.",
      "Coordinates are written (x, y): is the first number x or y?",
      "Which point gives exactly the y-value beside it?"
    ],
    "q.11.2-03.explain": "For (3, 5): 2 × 3 − 1 = 5 ✓. (5, 3) is a point with its coordinates swapped: 2 × 5 − 1 = 9 ≠ 3. (−1, −2): 2(−1) − 1 = −3. (2, 5): 2 × 2 − 1 = 3.",
    "q.11.2-04.hints": [
      "Substitute x = 20 into 5x − 15.",
      "5 × 20 = ?",
      "Subtract 15."
    ],
    "q.11.2-04.explain": "5 × 20 − 15 = 100 − 15 = 85.",
    "q.11.2-05.hints": [
      "For a point on the x-axis, what is y?",
      "Solve 5x − 15 = 0.",
      "Divide both sides by 5 after moving 15 to the other side."
    ],
    "q.11.2-05.explain": "y = 0: 5x = 15 so x = 3. The line crosses the x-axis at (3, 0).",
    "q.11.2-06.hints": [
      "For each point, substitute x into 2x + 40.",
      "Compare the result with the y-coordinate of that point.",
      "Cross out any point that does not match."
    ],
    "q.11.2-06.explain": "P(15,70): 30 + 40 = 70 ✓. Q(50,150): 140 ≠ 150 ✗. R(37,114): 74 + 40 = 114 ✓. S(−20,10): 0 ≠ 10 ✗. T(100,240): 240 ✓.",
    "q.11.2-07.hints": [
      "Out of diesel means f equals what on the graph?",
      "Find the point where the line touches the horizontal axis.",
      "Read the value of h at that point."
    ],
    "q.11.2-07.explain": "The line crosses the h-axis at h = 8 (f = 0). Check: 40 − 5 × 8 = 0. The point (0, 40) shows there are 40 litres at the start.",
    "q.11.2-08.choices": [
      "Both points are correct",
      "Wrong: only (10, 130) is correct; (20, 230) is the right point",
      "Wrong: neither point is correct",
      "Correct: the points are evenly spaced"
    ],
    "q.11.2-08.hints": [
      "Substitute x = 10 into 10x + 30. Do you get 130?",
      "Substitute x = 20. What is the value of y?",
      "Compare it with 260."
    ],
    "q.11.2-08.explain": "x = 10: 100 + 30 = 130 ✓. x = 20: 200 + 30 = 230, not 260. Marcus is wrong about the second point (doubling x does not double y because of the term 30).",
    "q.11.2-09.choices": [
      "Line A",
      "Line B",
      "Line C",
      "None of the lines"
    ],
    "q.11.2-09.hints": [
      "What is the plant's starting height? Do all the lines start there?",
      "What is the height after 1 week? Which line passes through that point?",
      "Which line reaches 12 cm after 1 week?"
    ],
    "q.11.2-09.explain": "Function: y = 10 + 2x. After 6 weeks y = 22. Line B passes through (6, 22). A grows 1 cm/week (y = 10 + x), C grows 5 cm/week (y = 10 + 5x).",
    "q.11.2-10.hints": [
      "On the x-axis, y = ?",
      "Solve 2x + 5 = 0.",
      "What is x = −5 ÷ 2?"
    ],
    "q.11.2-10.explain": "Put y = 0: 2x = −5 so x = −2.5. The y-axis crossing is (0, 5). You can predict where the line crosses the axes without a table of values.",
    "q.11.3-01.hints": [
      "The function has the form y = mx + c. Which number plays the role of m?",
      "m is the coefficient in front of x, including its sign.",
      "Write the value of m."
    ],
    "q.11.3-01.explain": "The gradient is the coefficient of x: m = −5 (the line slopes down from left to right).",
    "q.11.3-02.hints": [
      "The y-intercept is the y-coordinate of the point where the line crosses the y-axis. What is x there?",
      "Substitute x = 0 into the function.",
      "Pay attention to the sign of the constant term."
    ],
    "q.11.3-02.explain": "x = 0 gives y = −4. The constant term c = −4 is the y-intercept.",
    "q.11.3-03.hints": [
      "Rewrite the function in the form y = mx + c (put the x term first).",
      "What is the coefficient in front of x, including its sign?",
      "Is the number 12 the gradient or the y-intercept?"
    ],
    "q.11.3-03.explain": "y = −2x + 12 so the gradient is −2. Choosing 12 confuses it with the y-intercept; choosing 2 ignores the negative sign.",
    "q.11.3-04.hints": [
      "At which point does the line cross the y-axis? That is c.",
      "From (0, 2) to (1, 5): when x goes up by 1, how much does y go up?",
      "Write y = mx + c with the m and c you found."
    ],
    "q.11.3-04.explain": "c = 2, m = 3 (x goes up 1, y goes up 3). Equation: y = 3x + 2.",
    "q.11.3-05.hints": [
      "What do parallel lines have in common: the gradient or the y-intercept?",
      "What is the gradient of y = 4x + 6?",
      "Find the line whose coefficient of x is that number."
    ],
    "q.11.3-05.explain": "Parallel means the same gradient 4. Only y = 4x + 2 has m = 4. Choosing y = 6x + 4 confuses m and c.",
    "q.11.3-06.hints": [
      "What is the gradient of a line parallel to y = 3x + 6?",
      "If it passes through the origin (0, 0), what is the y-intercept?",
      "Write y = mx + c."
    ],
    "q.11.3-06.explain": "m = 3 (parallel), c = 0 (through the origin). So y = 3x.",
    "q.11.3-07.choices": [
      "The charge per hour is $25",
      "The fixed charge is $25",
      "The electrician works for at most 25 hours",
      "The total charge for 1 hour is $40"
    ],
    "q.11.3-07.hints": [
      "When x goes up by 1 hour, how much does y go up?",
      "The number 25 is the coefficient of x — it is the gradient.",
      "Which number is the fixed charge (not depending on hours)?"
    ],
    "q.11.3-07.explain": "25 is the gradient: each hour the electrician charges another 25 dollars. The number 40 is the y-intercept: the fixed call-out fee.",
    "q.11.3-08.hints": [
      "Read the point where the line crosses the y-axis.",
      "The line crosses the x-axis at (2, 0). From (0, 4) to (2, 0): x goes up by 2, how does y change? What is the gradient?",
      "The gradient is negative because the line slopes down. Write the equation."
    ],
    "q.11.3-08.explain": "c = 4; from (0,4) to (2,0) y falls by 4 when x goes up by 2 so m = −2. Equation: y = −2x + 4 (or y = 4 − 2x).",
    "q.11.3-09.hints": [
      "The x-axis crossing has y = 0. Solve 5x + 6 = 0.",
      "Look for the pattern: 6 divided by m, then take the negative.",
      "Work out −6 ÷ 5."
    ],
    "q.11.3-09.explain": "In general: mx + 6 = 0 so x = −6/m. For m = 5: x = −1.2.",
    "q.11.3-10.hints": [
      "When the tank has run out of water, what is y?",
      "Solve −4x + 40 = 0.",
      "What does a negative gradient tell you about the amount of water over time?"
    ],
    "q.11.3-10.explain": "−4x + 40 = 0 so x = 10 minutes. The y-intercept 40 is the starting amount of water, and the gradient −4 means 4 litres are lost each minute.",
    "q.11.4-01.hints": [
      "Find x = 7 on the horizontal axis then go up to the Taxi B line.",
      "Read the value of y at that point.",
      "The value of y is the number of dollars to pay."
    ],
    "q.11.4-01.explain": "At x = 7, the Taxi B line is at height 32. That is $32 (function: y = 4x + 4).",
    "q.11.4-02.hints": [
      "The fixed charge is the charge for 0 km. Which axis is that point on?",
      "Read y at x = 0 on the Taxi A line.",
      "Write down that number of dollars."
    ],
    "q.11.4-02.explain": "The Taxi A line crosses the y-axis at 12 so the fixed charge is $12.",
    "q.11.4-03.hints": [
      "The charge per km is the increase in cost for each extra km (the gradient).",
      "Taxi B: from 0 km (4 dollars) to 8 km is 36 dollars. How much does the cost increase?",
      "Divide the increase in cost by the extra distance."
    ],
    "q.11.4-03.explain": "(36 − 4) ÷ 8 = 4. Taxi B charges $4 per km (gradient = 4).",
    "q.11.4-04.hints": [
      "At which point on the graph are the two taxi prices equal?",
      "Read the x-coordinate of the intersection of the two lines.",
      "The x-coordinate gives the distance (km)."
    ],
    "q.11.4-04.explain": "The two lines cross at (4, 20): after 4 km both cost $20. The intersection shows when the two prices are equal.",
    "q.11.4-05.choices": [
      "Plumber A",
      "Plumber B",
      "Equal",
      "Cannot be determined"
    ],
    "q.11.4-05.hints": [
      "Find x = 2 on the time axis.",
      "Read each plumber's price at x = 2.",
      "Which line is lower there?"
    ],
    "q.11.4-05.explain": "At x = 2: Plumber A is $260, Plumber B is $200. B is cheaper. (But after 5 hours the two plumbers cost the same, and then B is more expensive.)",
    "q.11.4-06.hints": [
      "How many km from home does Arun start (the y-intercept)?",
      "After 6 hours Arun is 40 km from home. How much does the distance increase each hour?",
      "Write y = mx + c."
    ],
    "q.11.4-06.explain": "c = 10 (at the start he is 10 km from home); from 10 up to 40 in 6 hours so m = 30 ÷ 6 = 5 km/h. So y = 5x + 10.",
    "q.11.4-07.hints": [
      "After Marcus stops, at what height is Marcus's line horizontal?",
      "Solve 5x + 10 = 32.",
      "Divide 22 by 5."
    ],
    "q.11.4-07.explain": "Marcus stops at 32 km. Arun gets there when 5x + 10 = 32 so x = 4.4 hours. The intersection is when the two people are the same distance from home, that is, when they meet.",
    "q.11.4-08.choices": [
      "Travelling at a constant speed",
      "Standing still (resting)",
      "Travelling faster",
      "Turning back"
    ],
    "q.11.4-08.hints": [
      "Does the distance from home change during the horizontal section?",
      "If the distance does not change with time, what is the speed?",
      "So what is Marcus doing?"
    ],
    "q.11.4-08.explain": "In the horizontal section: time passes but the distance does not change, so Marcus is standing still (speed 0). A common mistake: thinking a horizontal section means \"travelling fast at a steady rate\".",
    "q.11.4-09.hints": [
      "At what time does Tanesha start, and at what time does she meet Zalika?",
      "Work out the difference between those two times.",
      "Change it to hours."
    ],
    "q.11.4-09.explain": "From 09:30 to 10:30 is 1 hour. (Tanesha cycles faster: 30 km/h compared with 20 km/h, so she catches up at 30 km.)",
    "q.11.4-10.hints": [
      "The car is faster than the van when its line is above 10 m/s. When does the car reach exactly 10 m/s as it speeds up?",
      "When slowing down from 25 to 0 in 10 s (from second 40 to 50), when is the car back at 10 m/s?",
      "Subtract the earlier time from the later time."
    ],
    "q.11.4-10.explain": "It speeds up 1.25 m/s each second so it reaches 10 m/s at second 8. It slows down 2.5 m/s each second from second 40, reaching 10 m/s at second 46. The car is faster for 46 − 8 = 38 seconds.",
    "q.ch-01.q": "The point A(2; m) lies on the graph of the function y = 3x − 1. Find m.",
    "q.ch-01.hints": [
      "If a point lies on the graph, its coordinates satisfy the function.",
      "Substitute x = 2 into y = 3x − 1.",
      "The value of y you just worked out is m."
    ],
    "q.ch-01.explain": "m = 3 × 2 − 1 = 5.",
    "q.ch-02.q": "Given the function y = (m − 2)x + 3. The graph of the function passes through the point (1; 6). Find m.",
    "q.ch-02.hints": [
      "Substitute x = 1, y = 6 into the function.",
      "We get the equation: (m − 2) × 1 + 3 = 6.",
      "Solve the equation to find m."
    ],
    "q.ch-02.explain": "m − 2 + 3 = 6 so m = 5.",
    "q.ch-03.q": "The graph of y = ax + b passes through the two points (0; 3) and (2; 7). Work out a + b.",
    "q.ch-03.hints": [
      "The point (0; 3) immediately tells you which value, a or b?",
      "Substitute b then use the point (2; 7) to find a.",
      "Add a and b."
    ],
    "q.ch-03.explain": "Through (0;3): b = 3. Through (2;7): 2a + 3 = 7 so a = 2. So a + b = 5.",
    "q.ch-04.q": "The two lines y = 2x + 1 and y = −x + 7 meet at one point. Find the x-coordinate of the intersection.",
    "q.ch-04.hints": [
      "At the intersection, the two values of y are equal.",
      "Solve the equation 2x + 1 = −x + 7.",
      "Rearrange to find x."
    ],
    "q.ch-04.explain": "2x + 1 = −x + 7 so 3x = 6 and x = 2 (the intersection is (2; 5)).",
    "q.ch-05.q": "The line y = −3x + 12 meets the two axes at A (on the x-axis) and B (on the y-axis). Work out the area of triangle OAB (in square units).",
    "q.ch-05.hints": [
      "Find A: put y = 0 to get the x-coordinate.",
      "Find B: put x = 0 to get the y-coordinate.",
      "Triangle OAB has a right angle at O; area = ½ × OA × OB."
    ],
    "q.ch-05.explain": "A(4; 0), B(0; 12). Area = ½ × 4 × 12 = 24.",
    "q.ch-06.q": "Taxi company A charges a starting fee of 12 thousand dong and 9 thousand dong per km. Company B charges a starting fee of 20 thousand dong and 7 thousand dong per km. After how many km are the two companies' prices equal?",
    "q.ch-06.hints": [
      "Write the price function of A in terms of x km and of B in terms of x km.",
      "Set the two expressions equal: 12 + 9x = 20 + 7x.",
      "Solve for x."
    ],
    "q.ch-06.explain": "12 + 9x = 20 + 7x so 2x = 8 and x = 4 km. After more than 4 km, company B is cheaper.",
    "q.ch-07.q": "A car leaves A at 60 km/h and a motorbike leaves B at 40 km/h, travelling towards each other, starting at the same time, with AB = 150 km. After how many hours do the two vehicles meet?",
    "q.ch-07.hints": [
      "What is the distance the car has travelled after x hours? The distance the motorbike has travelled?",
      "When they meet, the sum of the two distances equals the distance AB.",
      "Solve 60x + 40x = 150."
    ],
    "q.ch-07.explain": "60x + 40x = 150 so x = 1.5 hours. On the distance–time graph, that is the intersection of y = 60x and y = 150 − 40x.",
    "q.ch-08.q": "Write the equation of the line parallel to y = 2x + 3 that passes through the point (1; −1).",
    "q.ch-08.hints": [
      "If it is parallel, what is the gradient of the new line?",
      "Substitute the point (1; −1) into y = 2x + b to find b.",
      "Write the complete equation."
    ],
    "q.ch-08.explain": "a = 2. Through (1; −1): −1 = 2 + b so b = −3. So y = 2x − 3.",
    "q.ch-09.q": "The two lines y = (k + 1)x + 2 and y = (2k − 3)x − 5 are parallel. Find k.",
    "q.ch-09.hints": [
      "What quantity do two parallel lines have in common?",
      "Set the two gradients equal: k + 1 = 2k − 3.",
      "Solve the equation for k."
    ],
    "q.ch-09.explain": "k + 1 = 2k − 3 so k = 4 (the common gradient is 5; the two y-intercepts are different so the lines do not coincide).",
    "q.ch-10.q": "The formula for converting degrees C to degrees F is F = 1.8C + 32. At what temperature is the reading in degrees C equal to the reading in degrees F?",
    "q.ch-10.hints": [
      "For C and F to be equal, we put F = C.",
      "Solve 1.8C + 32 = C.",
      "Rearrange: 0.8C = −32. Work out C."
    ],
    "q.ch-10.explain": "1.8C + 32 = C so 0.8C = −32 and C = −40. At −40° the two scales agree; on the graph it is the intersection of y = 1.8x + 32 and y = x.",
    "p.goal": "Arrange nine function cards in a grid so that each function satisfies the property at the top of its column and the start of its row, then find out whether there is more than one way to arrange them.",
    "p.steps": [
      "For each function card (for example y = 4 − 2x, y = 3x − 4, y = x), write it in the form y = mx + c and make a table of values.",
      "Sketch the graph of each card, noting the gradient m and the y-intercept c.",
      "Read the six property cards carefully (positive/negative gradient, positive/negative y-intercept, passes through (0, 0), parallel to y = x + 2).",
      "Try placing the cards in a 3 × 3 grid: each function must satisfy the property at the head of its row and the head of its column.",
      "Check each cell again by substituting numbers or looking at the graph.",
      "Ask: is there more than one way to arrange them? Explain."
    ],
    "p.extensions": [
      "Design a new set of cards yourself (for example y = 2x + 5, y = −x) then create a new grid for a friend to solve.",
      "Add a new property such as \"crosses the x-axis at a positive number\" and check which cards fit.",
      "Find a way to make a grid that has exactly one way of arranging the cards."
    ],
    "p.reflect": [
      "Which feature (m or c) did you use to rule out a card most quickly?",
      "Why can some functions be placed in several cells, or some cells cannot be used?",
      "Which skill are you most confident in: making a table, drawing a graph or reading m and c?"
    ]
  },
  vi: {
    "q.11.1-04.howto": "Viết công thức tính tổng chi phí y theo số tuần w.",
    "q.11.1-02.howto": "Viết công thức tính tổng chi phí c theo số sách b.",
    "q.11.1-01.q": "Arun mua sách trực tuyến. Mỗi cuốn sách giá $6 và phí bưu điện là $4. Tính tổng chi phí cho 12 cuốn sách.",
    "q.11.1-02.q": "Sách giá $6 mỗi cuốn cộng $4 phí bưu điện. Nếu b cuốn sách có giá $c, hãy viết hàm số của c theo b.",
    "q.11.1-03.q": "Một thợ sửa ống nước thu phí cố định $45 cộng $30 mỗi giờ. Tính chi phí của một công việc kéo dài 1,5 giờ.",
    "q.11.1-04.q": "Giàn giáo tốn $80 phí giao hàng cộng $50 mỗi tuần. Chi phí cho w tuần là $y. Viết y theo w.",
    "q.11.1-05.q": "In ảnh tốn $2 mỗi ảnh cộng phí cố định $3. Marcus trả $49. Có bao nhiêu ảnh đã được in?",
    "q.11.1-06.q": "Thuê một chiếc ô tô tốn phí cố định $25 cộng $45 mỗi ngày. Thuê 7 ngày tốn $340. Sofia nói: \"Vậy 14 ngày tốn 2 × $340 = $680.\" Sai ở chỗ nào?",
    "q.11.1-07.q": "Một cây tre cao 1,5 m và mỗi tuần cao thêm 0,2 m. Sau bao nhiêu tuần cây cao 3,5 m?",
    "q.11.1-08.q": "Zara nói: \"Tuổi của em ít hơn nửa tuổi bố em 2 tuổi.\" Zara 30 tuổi. Bố bạn ấy bao nhiêu tuổi?",
    "q.11.1-09.q": "Khi x = 5 thì y = 30. Hàm số nào trong các hàm sau có thể đúng? (Chọn tất cả đáp án phù hợp.)",
    "q.11.1-10.q": "Lượng xăng trong bình xăng của một chiếc xe sau t giờ là r lít, với r = 18 − 3t. Sau bao nhiêu giờ thì bình hết xăng?",
    "q.11.2-01.q": "Với hàm số y = −2x, tìm y khi x = 3.",
    "q.11.2-02.q": "Với hàm số y = 2x + 3, tìm y khi x = −2.",
    "q.11.2-03.q": "Đồ thị biểu diễn đường thẳng y = 2x − 1. Điểm nào nằm trên đường thẳng?",
    "q.11.2-04.q": "Hàm số là y = 5x − 15. Tìm y khi x = 20.",
    "q.11.2-05.q": "Đồ thị của y = 5x − 15 cắt trục x. Hoành độ của giao điểm này là bao nhiêu?",
    "q.11.2-06.q": "Đồ thị của y = 2x + 40 được vẽ. Những điểm nào sau đây nằm trên đường thẳng? (Chọn tất cả đáp án phù hợp.)",
    "q.11.2-07.q": "Một động cơ dùng 5 lít mỗi giờ và ban đầu có 40 lít, nên f = 40 − 5h. Dùng đồ thị, sau bao nhiêu giờ thì động cơ hết dầu diesel?",
    "q.11.2-08.q": "Hàm số là y = 10x + 30. Marcus nói: \"Nếu kéo dài đồ thị thì (10, 130) và (20, 260) sẽ nằm trên đường thẳng.\" Bạn ấy có đúng không?",
    "q.11.2-09.q": "Ban đầu một cây cao 10 cm và mỗi tuần cao thêm 2 cm. Ba đường thẳng A, B và C được vẽ (chiều cao tính bằng cm theo số tuần). Đường nào biểu diễn cây?",
    "q.11.2-10.q": "Đường thẳng y = 2x + 5 cắt trục x. Tìm hoành độ của giao điểm mà không cần lập bảng giá trị.",
    "q.11.3-01.q": "Gradient (hệ số góc) của đường thẳng y = −5x + 3 là bao nhiêu?",
    "q.11.3-02.q": "y-intercept (tung độ gốc) của đường thẳng y = 3x − 4 là bao nhiêu?",
    "q.11.3-03.q": "Gradient (hệ số góc) của đường thẳng y = 12 − 2x là bao nhiêu?",
    "q.11.3-04.q": "Viết phương trình của đường thẳng được vẽ. (Gợi ý: đọc tung độ gốc, sau đó đọc hệ số góc từ các điểm.)",
    "q.11.3-05.q": "Đường thẳng nào sau đây song song với y = 4x + 6?",
    "q.11.3-06.q": "Viết phương trình của một đường thẳng song song với y = 3x + 6 và đi qua gốc tọa độ.",
    "q.11.3-07.q": "Chi phí cho một lần thợ điện đến là y = 25x + 40, với y là tổng chi phí tính bằng đô la và x là số giờ. Số 25 cho em biết điều gì?",
    "q.11.3-08.q": "Viết phương trình của đường thẳng được vẽ dưới dạng y = mx + c.",
    "q.11.3-09.q": "Khảo sát: y = 2x + 6 cắt trục x tại x = −3; y = 3x + 6 tại x = −2; y = 4x + 6 tại x = −1,5. Dự đoán giao điểm với trục x của y = 5x + 6.",
    "q.11.3-10.q": "Nước chảy ra khỏi một bể: y = −4x + 40, trong đó y là số lít trong bể sau x phút. Sau bao nhiêu phút thì bể cạn?",
    "q.11.4-01.q": "Đồ thị biểu diễn giá cước của hai chiếc taxi. Taxi B thu bao nhiêu tiền cho một chuyến đi dài 7 km?",
    "q.11.4-02.q": "Trên cùng đồ thị taxi đó, tìm phí cố định của Taxi A.",
    "q.11.4-03.q": "Trên cùng đồ thị taxi đó, tìm giá cước mỗi ki-lô-mét của Taxi B.",
    "q.11.4-04.q": "Ở quãng đường nào thì hai taxi có giá bằng nhau?",
    "q.11.4-05.q": "Hai thợ sửa ống nước thu một khoản phí cố định cộng giá theo giờ (đồ thị). Thợ nào rẻ hơn cho một công việc 2 giờ?",
    "q.11.4-05.choices": [
      "Thợ A",
      "Thợ B",
      "Bằng nhau",
      "Không xác định được"
    ],
    "q.11.4-06.q": "Arun đi bộ rời xa nhà. Sau x giờ bạn ấy cách nhà y km. Dùng đồ thị để viết phương trình đường thẳng của Arun.",
    "q.11.4-07.q": "Arun và Marcus cắt nhau tại một điểm trên đồ thị. Sau bao nhiêu giờ hai bạn gặp nhau? (Arun: y = 5x + 10; Marcus dừng lại ở cách nhà 32 km.)",
    "q.11.4-08.q": "Trong đồ thị khoảng cách từ nhà theo thời gian, đường của Marcus trở nên nằm ngang sau 3 giờ. Đoạn nằm ngang cho biết điều gì?",
    "q.11.4-09.q": "Zalika bắt đầu đạp xe lúc 09:00 và Tanesha bắt đầu lúc 09:30. Họ gặp nhau lúc 10:30. Tanesha đã đạp xe trong bao lâu trước khi đuổi kịp Zalika?",
    "q.11.4-10.q": "Đồ thị biểu diễn tốc độ của một chiếc xe tải nhỏ (không đổi, 10 m/s) và một chiếc xe hơi. Xe hơi chạy nhanh hơn xe tải trong bao nhiêu giây?"
  }
});
