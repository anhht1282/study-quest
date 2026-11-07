window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 11,
  en: {
    "u.realm": "Coordinate Valley",
    "u.story": "The valley's ancient map has only mysterious straight lines joining glowing points. Whoever can read a line, knowing whether it goes up, down or stays flat, can predict distances, prices and the petrol left in a tank. Learn to draw and read graphs to open the valley's gate!",
    "g.0.def": "A rule connecting two quantities: if you know the value of x you can find the matching value of y.",
    "g.1.def": "A letter (x, y, t...) standing for a number that can change.",
    "g.2.def": "A pair of numbers (x, y) giving the position of a point on a plane.",
    "g.3.def": "The x-axis is horizontal and the y-axis is vertical.",
    "g.4.def": "A line going up from left to right has positive gradient; going down, negative gradient; horizontal, zero.",
    "g.5.def": "How much a quantity changes in each 1 unit (for example $0.4 per minute).",
    "g.6.def": "A corner of a shape, for example a corner of a square.",
    "s.11.1.learn": [
      "A function is a rule that shows the relationship between two variables, for example x and y (or other letters).",
      "If Maryam is 6 years older than Jamal then m = j + 6: knowing j lets you find m.",
      "'Twice as old' means multiply by 2: if Angelo is twice as old as Sabrina then a = 2s.",
      "Exchanging money: if $1 exchanges for 70 rupees then y = 70x (multiply the exchange rate by the original amount).",
      "To write a function, first try a few specific numbers, find the rule, then replace with letters."
    ],
    "ex.11.1.q": "1 Hong Kong dollar exchanges for 9 rupees. Write a function connecting d HK dollars and r rupees.",
    "ex.11.1.steps": [
      "Try: 20 HK dollars exchange for 20 × 9 = 180 rupees",
      "Each time just multiply the number of dollars by 9",
      "So r = 9d"
    ],
    "ex.11.1.prompts": [
      "Try a specific number: how many rupees do 20 HK dollars exchange for?",
      "Each time you change from HK dollars to rupees, which calculation do you do with the number of dollars?",
      "Write that rule as a formula connecting r and d."
    ],
    "ex.11.1.twist": "With the same exchange rate, how many HK dollars do 450 rupees exchange for?",
    "s.11.2.learn": [
      "Make a table of values: choose a few values of x, work out y, then treat (x, y) as the coordinates of a point.",
      "For y = x + 3: when x = 2, y = 5; when x = −4, y = −1. The points lie on a straight line.",
      "A straight line goes on forever; the drawing shows only a section of it.",
      "To know whether a point is on the line, substitute x into the function and compare y.",
      "y = mx passes through the origin (0, 0); y = x + c crosses the y-axis at the point (0, c). The lines y = x + c are parallel to each other.",
      "The two axes can have different scales, so remember to read the numbers on each axis carefully."
    ],
    "ex.11.2.q": "For y = 0.5x, is the point (−24, −12) on the line? What about the point (15, 30)?",
    "ex.11.2.steps": [
      "x = −24: y = 0.5 × (−24) = −12, it matches so (−24, −12) is on the line.",
      "x = 15: y = 0.5 × 15 = 7.5, not 30.",
      "So (15, 30) is not on the line; it is above the line."
    ],
    "ex.11.2.prompts": [
      "To know whether a point is on the line, substitute the x-coordinate of the point into the function. When x = −24, what is y?",
      "Compare the result with the y-coordinate of the point (−12): does it match? Then try x = 15.",
      "The calculated y-value is 7.5 compared with 30: is the point (15, 30) above or below the line?"
    ],
    "ex.11.2.twist": "If the point (a, 30) is on the line y = 0.5x, what is a?",
    "s.11.3.learn": [
      "A vertical line (parallel to the y-axis) is named x = number: every point on it has the same x-coordinate.",
      "A horizontal line (parallel to the x-axis) is named y = number: every point on it has the same y-coordinate.",
      "The x-axis is named y = 0; the y-axis is named x = 0.",
      "If two points have the same x, the line joining them is vertical; if the same y, it is horizontal.",
      "The four lines x = a, x = b, y = c, y = d form a rectangle with width |a − b| and height |c − d|."
    ],
    "ex.11.3.q": "Plot P(2, −5) and Q(−6, −5). What is the name of the line through P and Q?",
    "ex.11.3.steps": [
      "P and Q have the same y-coordinate, −5.",
      "So the line through them is horizontal.",
      "Name of the line: y = −5."
    ],
    "ex.11.3.prompts": [
      "Compare the y-coordinates of P and Q: what is special?",
      "Is a line through two points at the same height horizontal or vertical?",
      "Which value do all the points on that line share? Write it as an equation."
    ],
    "ex.11.3.twist": "If P(2, −5) and R(2, 7), what is the name of the line through P and R?",
    "s.11.4.learn": [
      "A graph shows how a quantity changes with time.",
      "A straight line means the quantity increases (or decreases) steadily: the rate of change is constant.",
      "Rate of change = amount of change ÷ time, for example $0.4 per minute → c = 0.4t.",
      "A graph going up from left to right has positive gradient. Going down: negative gradient. Horizontal: zero gradient (the quantity is constant).",
      "The steeper the graph, the faster the change. The y-intercept shows the starting value (for example a taxi's starting charge)."
    ],
    "ex.11.4.q": "A straight-line graph shows that a 6-minute call costs $2.4. How much does each minute cost? What about a 10-minute call?",
    "ex.11.4.steps": [
      "Each minute: 2.4 ÷ 6 = $0.4.",
      "Function: c = 0.4t.",
      "t = 10: c = 0.4 × 10 = $4."
    ],
    "ex.11.4.prompts": [
      "You know 6 minutes cost $2.4; to find the price of one minute, which calculation do you do?",
      "The price per minute is constant, so how do you write the cost c in terms of time t?",
      "Substitute t = 10 into the formula you found."
    ],
    "ex.11.4.twist": "If you have $10, what is the maximum number of minutes you can call at the same price?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Conquer graph problems, direct proportion, inverse proportion and equal-ratio chains as in Year 7 tests!",
    "q.11.1-01.hints": [
      "'Twice as old' means multiply by what?",
      "If Sabrina is 6, multiply 6 by that number.",
      "6 × 2 = ?"
    ],
    "q.11.1-01.explain": "Twice as old means multiply by 2: 6 × 2 = 12 years old.",
    "q.11.1-02.hints": [
      "When s = 4, what is a? When s = 10?",
      "What calculation did you do with s to get a?",
      "Write that calculation using the letter s."
    ],
    "q.11.1-02.explain": "Angelo's age is always 2 times Sabrina's age so a = 2s.",
    "q.11.1-03.hints": [
      "'$10 more expensive': do you add or multiply?",
      "The diary costs $8.50.",
      "8.5 + 10 = ?"
    ],
    "q.11.1-03.explain": "The book costs $10 more so add: 8.5 + 10 = 18.5.",
    "q.11.1-04.hints": [
      "Try x = 6: what is y?",
      "Is the rule adding or multiplying?",
      "Write y = x ... with the number to add."
    ],
    "q.11.1-04.explain": "The book costs $10 more so y = x + 10.",
    "q.11.1-05.hints": [
      "If Abdul's mass is 40 kg, what is Lilah's mass in kg?",
      "Try each option with x = 40: which option gives y = 30?",
      "Who is lighter, x or y? See whether y is less than x."
    ],
    "q.11.1-05.explain": "y = 3x/4: Lilah is lighter than Abdul. Common mistakes: writing x = 3y/4 (swapping the two people) or adding 3/4 instead of multiplying.",
    "q.11.1-06.hints": [
      "How many rupees does this function say $1 exchanges for?",
      "Substitute x = 12 into y = 70x.",
      "70 × 12 = ?"
    ],
    "q.11.1-06.explain": "y = 70 × 12 = 840 rupees.",
    "q.11.1-07.hints": [
      "First, how many pesos does 1 euro exchange for?",
      "210 ÷ 10 = ?",
      "Multiply that result by 35."
    ],
    "q.11.1-07.explain": "1 euro = 21 pesos, so y = 21x. With x = 35: 21 × 35 = 735 pesos.",
    "q.11.1-08.hints": [
      "For each pair, work out x − 5.",
      "Pair (9, 4): 9 − 5 = ? Does it equal y?",
      "Which pair has y different from x − 5?"
    ],
    "q.11.1-08.explain": "The pair (0, 5) is wrong because 0 − 5 = −5, not 5. A common mistake: swapping it to y = 5 − x.",
    "q.11.1-09.hints": [
      "If w = 2, what is the length?",
      "Perimeter = 2 × (length + width). With w = 2, what is the perimeter?",
      "The length is 3w; adding w gives how many w? Then double it."
    ],
    "q.11.1-09.explain": "Length = 3w so P = 2(3w + w) = 8w.",
    "q.11.1-10.hints": [
      "With x = 100 dollars, how many dinars is y?",
      "To go backwards from dinars to dollars, use the inverse operation of 'multiply by 1.5'.",
      "570 ÷ 1.5 = ?"
    ],
    "q.11.1-10.explain": "y = 1.5x so x = y ÷ 1.5 = 570 ÷ 1.5 = 380 dollars.",
    "q.11.2-01.hints": [
      "Substitute x = −3 into x + 1.",
      "Where is (−3) + 1 on the number line?",
      "From −3 move 1 step to the right."
    ],
    "q.11.2-01.explain": "y = −3 + 1 = −2.",
    "q.11.2-02.hints": [
      "What is the x-coordinate of the point?",
      "Substitute x = −20 into x + 8.",
      "−20 + 8 = ?"
    ],
    "q.11.2-02.explain": "y = −20 + 8 = −12.",
    "q.11.2-03.choices": [
      "Yes, because 20 − 1 = 19",
      "No, because when x = 20, y = 21",
      "Yes, because 19 is close to 20",
      "No, because y must equal 2x"
    ],
    "q.11.2-03.hints": [
      "Substitute x = 20 into y = x + 1.",
      "Does the result equal 19?",
      "Might you have mixed up x + 1 with x − 1?"
    ],
    "q.11.2-03.explain": "When x = 20, y = 21, not 19, so the point is not on the line. A common mistake: using y = x − 1.",
    "q.11.2-04.hints": [
      "y is how many times x?",
      "Multiply 8.5 by 2.",
      "2 × 8.5 = ?"
    ],
    "q.11.2-04.explain": "y = 2 × 8.5 = 17.",
    "q.11.2-06.hints": [
      "How many units does $1 exchange for? Divide 42 by 6.",
      "Each dollar gives 7 units; how many do x dollars give?",
      "Write y = ... x."
    ],
    "q.11.2-06.explain": "42 ÷ 6 = 7 so y = 7x.",
    "q.11.2-07.hints": [
      "What is the x-value of a point on the y-axis?",
      "Substitute x = 0 into y = x + 3.",
      "0 + 3 = ?"
    ],
    "q.11.2-07.explain": "On the y-axis x = 0, so y = 0 + 3 = 3. The line crosses the y-axis at (0, 3).",
    "q.11.2-08.choices": [
      "On the line",
      "Above the line",
      "Below the line"
    ],
    "q.11.2-08.hints": [
      "With x = 15, what is y on the line?",
      "The given point has y = 30. Is it bigger or smaller than the value on the line?",
      "Bigger means higher up."
    ],
    "q.11.2-08.explain": "When x = 15, y on the line is 7.5. The point has y = 30, which is bigger, so it is above the line. A common mistake: thinking 30 = 2 × 15 means the point is on the line.",
    "q.11.2-09.hints": [
      "At the crossing point, both functions give the same y-value. Try x = 1: what is 2x and what is x + 1?",
      "The two values are equal when x = ?",
      "The point is (x, y) with the y you just found."
    ],
    "q.11.2-09.explain": "With x = 1: 2x = 2 and x + 1 = 2. The two lines cross at (1, 2).",
    "q.11.2-10.hints": [
      "At the crossing point: x − 4 = x/3. Try x = 3: what are the two sides?",
      "Try x = 6: what is x − 4 and what is x/3?",
      "At which value of x are the two sides equal?"
    ],
    "q.11.2-10.explain": "With x = 6: x − 4 = 2 and x/3 = 2. So x = 6 (the crossing point is (6, 2)).",
    "q.11.2-11.choices": [
      "They are all parallel to each other",
      "They all pass through the origin",
      "They all cross at (0, c)",
      "They are all horizontal"
    ],
    "q.11.2-11.hints": [
      "Draw y = x and y = x + 3. Do they cross?",
      "How much does each line go up when x increases by 1?",
      "What are lines with the same gradient like to each other?"
    ],
    "q.11.2-11.explain": "They all have the same gradient (y increases by 1 when x increases by 1) so they are parallel. Only c differs so they cross the y-axis at different places. A common mistake: thinking they all pass through the origin (true only when c = 0).",
    "q.11.3-01.hints": [
      "What do A and B have in common in their coordinates?",
      "What is the common x-coordinate?",
      "The vertical line through x = 4 is named x = 4."
    ],
    "q.11.3-01.explain": "A and B have the same x-coordinate 4 so the line through them is x = 4.",
    "q.11.3-02.hints": [
      "Do A and D have the same x or the same y?",
      "What is the common y-coordinate?",
      "What is the horizontal line through y-coordinate 2 named?"
    ],
    "q.11.3-02.explain": "A and D have the same y-coordinate 2 so the line is y = 2.",
    "q.11.3-03.hints": [
      "What is the y-coordinate of every point on the x-axis?",
      "For example the points (3, ?), (−5, ?) on the x-axis.",
      "The name of the line is 'y-coordinate = that number'."
    ],
    "q.11.3-03.explain": "Every point on the x-axis has y = 0 so the x-axis is y = 0. A common mistake: mixing it up with x = 0 (that is the y-axis).",
    "q.11.3-04.choices": [
      "Horizontal, parallel to the x-axis",
      "Vertical, parallel to the y-axis",
      "Passes through the origin",
      "It is a diagonal line"
    ],
    "q.11.3-04.hints": [
      "What is the y-coordinate of every point on the line y = 3?",
      "Try (0, 3), (5, 3), (−2, 3): which direction do they lie in?",
      "Since x changes while y stays still, what is the line like?"
    ],
    "q.11.3-04.explain": "y = 3 is a horizontal line, parallel to the x-axis. A common mistake: seeing the number 3 and thinking the line is at x = 3 (vertical).",
    "q.11.3-05.hints": [
      "The width is the distance between x = −4 and x = 5. What is it?",
      "The height is the distance between y = −4 and y = 1.",
      "Area = width × height."
    ],
    "q.11.3-05.explain": "Width = 5 − (−4) = 9; height = 1 − (−4) = 5. Area = 9 × 5 = 45.",
    "q.11.3-06.hints": [
      "What is the distance between x = −3 and x = 3?",
      "What is the distance between y = −1 and y = 5? Are the two numbers equal (a square)?",
      "Area of a square = side × side."
    ],
    "q.11.3-06.explain": "Side = 3 − (−3) = 6 and 5 − (−1) = 6; the two sides are equal so it is a square. Area = 36.",
    "q.11.3-07.hints": [
      "The line x = −10 consists of points with what x-coordinate?",
      "Look at the first number of each pair.",
      "Which points start with −10?"
    ],
    "q.11.3-07.explain": "Points on x = −10 must have x-coordinate −10: B(−10, 15) and E(−10, −10).",
    "q.11.3-08.hints": [
      "From the centre, each side is half the side length away from the centre. What is half of 8?",
      "Is the right-hand side vertical or horizontal?",
      "The vertical line passes through x = 4."
    ],
    "q.11.3-08.explain": "Half a side is 4. The right-hand side is vertical and 4 units from the centre: x = 4.",
    "q.11.3-09.hints": [
      "From the vertex (1, 2), can the square extend to the right or to the left?",
      "And can it extend up or down?",
      "How many combinations of (right/left) × (up/down) are there?"
    ],
    "q.11.3-09.explain": "2 horizontal directions × 2 vertical directions = 4 squares; for example the opposite vertex could be (5, 6), (−3, 6), (5, −2), (−3, −2).",
    "q.11.3-10.hints": [
      "A line parallel to the x-axis is horizontal. Is its name of the form x = ... or y = ...?",
      "What is the y-coordinate of the crossing point?",
      "Write y = that y-coordinate."
    ],
    "q.11.3-10.explain": "A horizontal line has the form y = number; it passes through y-coordinate 7.5 so y = 7.5. (The other line is x = −9.5.)",
    "q.11.4-01.hints": [
      "Find 4 on the time axis.",
      "Go up to the straight line, then across to the distance axis.",
      "Read the value on the vertical axis."
    ],
    "q.11.4-01.explain": "At t = 4 the line is at height 400 m (walking steadily 100 m each minute).",
    "q.11.4-02.hints": [
      "How many metres does the boy walk each minute? (Read it from the graph.)",
      "How many metres is 1 km?",
      "1000 ÷ 100 = ?"
    ],
    "q.11.4-02.explain": "Speed 100 m/minute. 1000 ÷ 100 = 10 minutes.",
    "q.11.4-03.hints": [
      "How many litres are there at the start? How many remain after 4 hours?",
      "How many litres does the car use each hour? (30 − 10) ÷ 4.",
      "30 − 2.5 × 5 = ?"
    ],
    "q.11.4-03.explain": "It uses 5 litres each hour. After 2.5 hours 12.5 litres have been used: 30 − 12.5 = 17.5 litres.",
    "q.11.4-04.hints": [
      "How many litres does the car use each hour?",
      "At the start there are 30 litres. How many hours are needed to use it all?",
      "30 ÷ 5 = ?"
    ],
    "q.11.4-04.explain": "It uses 5 litres/hour and the tank holds 30 litres so 30 ÷ 5 = 6 hours.",
    "q.11.4-05.choices": [
      "Positive gradient",
      "Negative gradient",
      "Zero gradient"
    ],
    "q.11.4-05.hints": [
      "Does the line go down or up as you move right?",
      "Positive gradient goes up; what is going down?",
      "Does the petrol in the tank increase or decrease?"
    ],
    "q.11.4-05.explain": "Going down from left to right: negative gradient. A common mistake: seeing many litres and thinking it is 'positive'.",
    "q.11.4-06.choices": [
      "Sofia is correct because 60 = 2 × 30",
      "Sofia is wrong because the $4 starting charge is only counted once",
      "Sofia is correct because the graph is a straight line",
      "Sofia is wrong because the 60-minute journey is cheaper than the 30-minute journey"
    ],
    "q.11.4-06.hints": [
      "Work out the price of a 30-minute journey: 4 + 0.5 × 30.",
      "Work out the price of a 60-minute journey.",
      "Is the 60-minute price double the 30-minute price?"
    ],
    "q.11.4-06.explain": "30 minutes: 4 + 15 = $19; 60 minutes: 4 + 30 = $34, less than $38. Sofia is wrong because the $4 starting charge does not double. A common mistake: thinking that double the time means double the price.",
    "q.11.4-07.hints": [
      "Which part of the graph is horizontal?",
      "At which minute does it start and at which minute does it end?",
      "20 − 10 = ?"
    ],
    "q.11.4-07.explain": "The horizontal part runs from minute 10 to minute 20: standing still for 10 minutes.",
    "q.11.4-08.hints": [
      "How many metres is the journey back?",
      "How many minutes does the journey back take?",
      "Speed = distance ÷ time = 400 ÷ 5."
    ],
    "q.11.4-08.explain": "He walks 400 m in 5 minutes: 400 ÷ 5 = 80 m/minute.",
    "q.11.4-09.hints": [
      "How many metres away from home does Ali walk?",
      "Then he returns: how many more metres?",
      "Add the distance out and the distance back."
    ],
    "q.11.4-09.explain": "Out 400 m, standing still 0 m, back 400 m. Total 400 + 400 = 800 m. A common mistake: reading 0 at the end and concluding he walked 0 m.",
    "q.11.4-10.choices": [
      "Ali is going fastest",
      "Ali is standing still",
      "Ali is returning home",
      "Ali is slowing down"
    ],
    "q.11.4-10.hints": [
      "In the horizontal part, does the distance from home change?",
      "If the distance does not change, what is Ali doing?",
      "Zero gradient corresponds to what speed?"
    ],
    "q.11.4-10.explain": "A horizontal part means the distance does not change: Ali is standing still (speed 0). A common mistake: thinking a horizontal line means going fastest.",
    "q.ch-01.q": "The graph shows the distance of Nam cycling from his home (A) to his grandparents' house (B). Nam stops for a rest for a while. For how many minutes did Nam rest?",
    "q.ch-01.hints": [
      "Which part of the graph is horizontal?",
      "It lasts from 1 hour to how many hours?",
      "Change that number of hours into minutes."
    ],
    "q.ch-01.explain": "The horizontal part runs from 1 hour to 1.5 hours: a rest of 0.5 hours = 30 minutes.",
    "q.ch-02.q": "Using the graph from the previous question (cycling), work out Nam's average speed over the whole journey AB (km/h, rounded to 0.1 if needed).",
    "q.ch-02.hints": [
      "What is the total distance Nam travels in km? (Read the end point.)",
      "How long is the total time including the rest?",
      "Average speed = total distance ÷ total time."
    ],
    "q.ch-02.explain": "He travels 32 km in 2.5 hours (including the rest time): 32 ÷ 2.5 = 12.8 km/h.",
    "q.ch-03.q": "Given y is directly proportional to x by the formula y = ax. When x = 4, y = −12. Find y when x = −5.",
    "q.ch-03.hints": [
      "Find the coefficient a by substituting x = 4, y = −12.",
      "a = y ÷ x = ?",
      "Substitute the a you found and x = −5 into y = ax."
    ],
    "q.ch-03.explain": "a = −12 ÷ 4 = −3. With x = −5: y = −3 × (−5) = 15.",
    "q.ch-04.q": "The graph of the function y = ax passes through the point A(−2, 6). The point B(m, −15) is also on that graph. Find m.",
    "q.ch-04.hints": [
      "Since A is on the graph, substitute x = −2, y = 6 to find a.",
      "a = 6 ÷ (−2) = ?",
      "Substitute y = −15 into y = ax to find m."
    ],
    "q.ch-04.explain": "a = 6 ÷ (−2) = −3. B is on the graph: −15 = −3 × m so m = 5.",
    "q.ch-05.q": "Share 180 marbles among three friends An, Binh and Chi in the ratio 2 : 3 : 4. How many marbles does the friend with the most get?",
    "q.ch-05.hints": [
      "What is the total number of parts? (2 + 3 + 4)",
      "How many marbles is each part? Divide 180 by the total number of parts.",
      "The friend with the most gets 4 parts."
    ],
    "q.ch-05.explain": "There are 9 parts in total; each part is 180 ÷ 9 = 20. The friend with the most: 4 × 20 = 80 marbles.",
    "q.ch-06.q": "12 workers finish a section of road in 15 days. If there are 20 workers (with the same productivity), how many days will they take?",
    "q.ch-06.hints": [
      "What is the total work, measured in 'workers × days'? (12 × 15)",
      "If the number of workers increases, does the number of days increase or decrease?",
      "Divide the total work by 20."
    ],
    "q.ch-06.explain": "Work: 12 × 15 = 180 (worker-days). With 20 workers: 180 ÷ 20 = 9 days.",
    "q.ch-07.q": "Given a/2 = b/3 = c/5 and a + b + c = 60. Find c.",
    "q.ch-07.hints": [
      "Let a/2 = b/3 = c/5 = k. Then a, b, c equal how many k?",
      "a + b + c = 2k + 3k + 5k = ?k. Solve for k.",
      "c = 5k."
    ],
    "q.ch-07.explain": "a = 2k, b = 3k, c = 5k so 10k = 60, k = 6. So c = 5 × 6 = 30.",
    "q.ch-08.q": "Given a/2 = b/3 = c/5 and a + 2b − c = 15. Work out a + b + c.",
    "q.ch-08.hints": [
      "Let a = 2k, b = 3k, c = 5k. Work out a + 2b − c in terms of k.",
      "2k + 6k − 5k = 3k = 15 so k = ?",
      "a + b + c = 10k."
    ],
    "q.ch-08.explain": "a + 2b − c = 2k + 6k − 5k = 3k = 15 so k = 5. Therefore a + b + c = 10k = 50.",
    "q.ch-09.q": "On a map with scale 1 : 500 000, the distance between two cities is 8 cm. What is the real distance in km?",
    "q.ch-09.hints": [
      "1 cm on the map corresponds to how many cm in real life?",
      "8 × 500 000 = ? cm.",
      "Change cm to km: 100 000 cm = 1 km."
    ],
    "q.ch-09.explain": "8 × 500 000 = 4 000 000 cm = 40 km.",
    "q.ch-10.q": "The perimeter of a triangle is 48 cm and its three sides are in the ratio 3 : 4 : 5. Work out the area of the triangle (cm²).",
    "q.ch-10.hints": [
      "Divide 48 by 3 + 4 + 5 to find one part.",
      "How many cm are the three sides? Are they 12, 16, 20?",
      "A triangle with sides 12, 16, 20 is right-angled; area = (12 × 16) ÷ 2."
    ],
    "q.ch-10.explain": "One part: 48 ÷ 12 = 4, the sides are 12, 16, 20 cm. Since 12² + 16² = 20² the triangle is right-angled, area = 12 × 16 ÷ 2 = 96 cm².",
    "p.goal": "Starting from the origin (0, 0), you take 4 steps along the grid lines (up, down, left, right). Explore which points you can finish at and in how many ways.",
    "p.steps": [
      "Draw a coordinate grid and try a few 4-step paths, for example up-right-up-up ends at (1, 3).",
      "List all the points you can reach. How many different points are there?",
      "Join those points: what shape do they make?",
      "Look at the coordinates of the end points: is the sum x + y always even or odd? What is special?",
      "Count the number of ways to reach each point, especially the points on the boundary. Which points have only 1 way?"
    ],
    "p.extensions": [
      "Repeat with paths of 5 steps or 6 steps. How does the shape change?",
      "With n steps, predict what condition the coordinates of the end points satisfy (involving |x| + |y|).",
      "Make a game: your friend chooses a target point and you find all the 4-step paths."
    ],
    "p.reflect": [
      "What pattern did you find in the coordinates of the end points? Explain in your own words.",
      "How can you be sure you have not missed any path?",
      "Which point has the most paths? Why do you think so?"
    ]
  },
  vi: {
    "q.11.3-10.howto": "Có hai đường thẳng đi qua điểm này: một đường thẳng đứng và một đường nằm ngang. Viết phương trình của đường nằm ngang.",
    "q.11.3-09.howto": "Đếm tất cả các hình vuông cạnh 4, có các cạnh song song với các trục, nhận điểm (1; 2) làm một đỉnh.",
    "q.11.3-08.howto": "Hình dung hình vuông trên lưới tọa độ. Viết phương trình của đường thẳng chứa cạnh bên phải của nó.",
    "q.11.3-02.howto": "Viết phương trình của đường thẳng đi qua cả A và D, dạng x = … hoặc y = ….",
    "q.11.3-01.howto": "Viết phương trình của đường thẳng đi qua cả A và B, dạng x = … hoặc y = ….",
    "q.11.2-06.howto": "Viết công thức tính số đơn vị tiền y nhận được khi đổi x đô la.",
    "q.11.1-09.howto": "Viết công thức tính chu vi P chỉ dùng chiều rộng w.",
    "q.11.1-04.howto": "Viết công thức tính giá cuốn sách (y) khi biết giá cuốn nhật ký (x).",
    "q.11.1-02.howto": "Viết công thức tính tuổi Angelo (a) khi biết tuổi Sabrina (s).",
    "q.11.1-01.q": "Angelo gấp đôi tuổi Sabrina. Khi Sabrina 6 tuổi thì Angelo bao nhiêu tuổi?",
    "q.11.1-02.q": "Sabrina s tuổi và Angelo a tuổi. Angelo gấp đôi tuổi Sabrina. Viết hàm số của a theo s (ví dụ a = ...).",
    "q.11.1-03.q": "Một cuốn sách đắt hơn một cuốn nhật ký 10 đô la. Cuốn sách giá bao nhiêu khi cuốn nhật ký giá 8,50 đô la?",
    "q.11.1-04.q": "Cuốn nhật ký giá x đô la và cuốn sách giá y đô la, trong đó sách đắt hơn nhật ký 10 đô la. Viết hàm số nối y và x.",
    "q.11.1-05.q": "Khối lượng của Lilah bằng 3/4 khối lượng của Abdul. Abdul nặng x kg và Lilah nặng y kg. Hàm số nào đúng?",
    "q.11.1-06.q": "Em có thể đổi x đô la Mỹ lấy y rupee Ấn Độ theo công thức y = 70x. Em nhận được bao nhiêu rupee khi đổi 12 đô la Mỹ?",
    "q.11.1-07.q": "Em có thể đổi 10 euro lấy 210 peso. Em nhận được bao nhiêu peso khi đổi 35 euro?",
    "q.11.1-08.q": "x và y liên hệ với nhau bằng hàm số y = x − 5. Cặp giá trị (x, y) nào KHÔNG thể xảy ra?",
    "q.11.1-09.q": "Chiều dài của một hình chữ nhật gấp ba lần chiều rộng. Chiều rộng là w cm và chu vi là P cm. Viết hàm số của P theo w.",
    "q.11.1-10.q": "Mối quan hệ giữa đô la Mỹ (x) và dinar Libya (y) là y = 1,5x. Bao nhiêu đô la Mỹ có giá trị bằng 570 dinar?",
    "q.11.2-01.q": "Với y = x + 1, giá trị của y là bao nhiêu khi x = −3?",
    "q.11.2-02.q": "Điểm (−20, ?) nằm trên đường thẳng y = x + 8. Tung độ còn thiếu là bao nhiêu?",
    "q.11.2-03.q": "Điểm (20, 19) có nằm trên đường thẳng y = x + 1 không?",
    "q.11.2-04.q": "Điểm (8,5; ?) nằm trên đường thẳng y = 2x. Tung độ còn thiếu là bao nhiêu?",
    "q.11.2-06.q": "Em có thể đổi 6 đô la Mỹ lấy 42 đơn vị một loại tiền khác. Em đổi x đô la lấy y đơn vị. Viết hàm số của y theo x.",
    "q.11.2-07.q": "Đồ thị cho thấy đường thẳng y = x + 3. Đường thẳng cắt trục y tại giá trị y nào?",
    "q.11.2-08.q": "Đường thẳng y = 0,5x được vẽ. Điểm (15, 30) nằm ở đâu so với đường thẳng?",
    "q.11.2-09.q": "Đồ thị cho thấy y = 2x và y = x + 1. Viết tọa độ giao điểm của hai đường thẳng dưới dạng (a, b).",
    "q.11.2-10.q": "Hai đường thẳng y = x − 4 và y = x/3 cắt nhau tại một điểm. Hoành độ của điểm đó là bao nhiêu?",
    "q.11.2-11.q": "Các đường thẳng dạng y = x + c được vẽ với c = −2, 0, 3 và 5. Tất cả các đường này có điểm chung nào?",
    "q.11.3-01.q": "Một hình chữ nhật có các đỉnh A(4, 2), B(4, −3), C(−2, −3) và D(−2, 2). Viết tên (phương trình) của đường thẳng đi qua A và B.",
    "q.11.3-02.q": "Với cùng hình chữ nhật đó (A(4, 2), B(4, −3), C(−2, −3), D(−2, 2)), viết tên của đường thẳng đi qua A và D.",
    "q.11.3-03.q": "Tên (phương trình) của trục x là gì?",
    "q.11.3-04.q": "Phát biểu nào về đường thẳng y = 3 là đúng?",
    "q.11.3-05.q": "Các đường thẳng x = 5, x = −4, y = 1 và y = −4 bao quanh một hình chữ nhật. Tính diện tích của nó (đơn vị vuông).",
    "q.11.3-06.q": "Các đường thẳng x = 3, y = 5, x = −3 và y = −1 bao quanh một hình vuông. Tính diện tích của nó.",
    "q.11.3-07.q": "Những điểm nào sau đây nằm trên đường thẳng x = −10? Chọn tất cả đáp án đúng.",
    "q.11.3-08.q": "Một hình vuông có tâm tại gốc tọa độ (0, 0), cạnh dài 8 đơn vị và các cạnh song song với các trục. Viết phương trình cạnh bên phải của nó.",
    "q.11.3-09.q": "Một đỉnh của hình vuông là (1, 2). Hình vuông có cạnh 4 và các cạnh song song với các trục. Có thể có bao nhiêu hình vuông khác nhau?",
    "q.11.3-10.q": "Hai đường thẳng song song với các trục cắt nhau tại (−9,5; 7,5). Viết phương trình của đường song song với trục x.",
    "q.11.4-01.q": "Một cậu bé đang đi bộ. Đồ thị cho thấy cậu đi được bao xa. Cậu đi được bao xa trong 4 phút?",
    "q.11.4-02.q": "Cậu bé đi bộ với tốc độ đều như trong đồ thị. Cậu mất bao nhiêu phút để đi 1 ki-lô-mét (1000 m)?",
    "q.11.4-03.q": "Đồ thị cho thấy lượng xăng (tính bằng lít) trong một chiếc ô tô trong suốt hành trình. Sau 2,5 giờ còn bao nhiêu lít trong bình?",
    "q.11.4-04.q": "Chiếc ô tô trong đồ thị tiếp tục dùng xăng với tốc độ như cũ. Sau bao nhiêu giờ kể từ lúc xuất phát thì bình hết xăng?",
    "q.11.4-05.q": "Trong đồ thị xăng, đường thẳng đi xuống từ trái sang phải. Nó có độ dốc như thế nào?",
    "q.11.4-06.q": "Một chiếc taxi tính phí khởi điểm 4 đô la cộng thêm 0,5 đô la cho mỗi phút. Sofia nói: 'Chuyến đi 1 giờ tốn gấp đôi chuyến đi 30 phút.' Ai đúng?",
    "q.11.4-07.q": "Đồ thị cho thấy khoảng cách từ nhà của Ali trong lúc đi bộ. Ali đã đứng yên (không di chuyển) trong bao nhiêu phút?",
    "q.11.4-08.q": "Trong đồ thị của Ali, anh đi bộ về nhà ở đoạn cuối (phút 20 đến phút 25). Tốc độ của anh trên đường về là bao nhiêu mét mỗi phút?",
    "q.11.4-09.q": "Trong đồ thị của Ali, tổng quãng đường anh thực sự đã đi (không phải khoảng cách từ nhà) trong 25 phút là bao nhiêu?",
    "q.11.4-10.q": "Trong đồ thị quãng đường – thời gian của Ali, một đoạn nằm ngang của đường thẳng có nghĩa là gì?"
  }
});
