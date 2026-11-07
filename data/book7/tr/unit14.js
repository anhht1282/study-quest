window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 14,
  en: {
    "q.ch-02.howto": "B is the other end of the line segment AB, and M is its midpoint. Enter the coordinates of point B.",
    "u.realm": "Kingdom of the Magic Mirror",
    "u.story": "In the Kingdom of the Magic Mirror, the treasure map has been scrambled: shapes are flipped, turned, slid and enlarged. You need to read coordinates accurately and use a scale to find the way to the treasure.",
    "g.0.def": "The ratio of a length on a drawing to the real length, for example 1 : 50 000.",
    "g.1.def": "A pair of numbers (x, y) giving the position of a point on a grid.",
    "g.2.def": "The point exactly in the middle of a line segment, the same distance from both endpoints.",
    "g.3.def": "Sliding a whole shape in one direction by a distance, with no turning and no flipping.",
    "g.4.def": "Flipping a shape in a mirror line; the image is symmetrical to the object about that line.",
    "g.5.def": "Turning a shape about a centre through a given angle in a given direction.",
    "g.6.def": "Multiplying every length by a scale factor k, keeping the angles the same.",
    "g.7.def": "The number of times every length of the image is as long as the matching length of the object.",
    "g.8.def": "The original shape is called the object; the shape after the transformation is called the image.",
    "g.9.def": "Two shapes that have the same shape and size.",
    "s.14.1.learn": [
      "A scale of 1 : 50 000 means 1 cm on the map represents 50 000 cm in real life.",
      "From map to real life: MULTIPLY by the number on the right of the scale. From real life to map: DIVIDE.",
      "Always convert units last: 100 000 cm = 1 km; 100 cm = 1 m.",
      "A scale can be written 'represents' (1 cm represents 5 km), 'to' (1 to 20) or with a colon (1 : 25 000); they mean the same.",
      "The larger the number on the right of the scale, the shorter the same real distance is drawn."
    ],
    "ex.14.1.q": "A map has scale 1 : 50 000 and two stations are 8.5 cm apart on the map. What is the real distance in km?",
    "ex.14.1.steps": [
      "Real distance = 8.5 × 50 000 = 425 000 cm",
      "Convert: 425 000 cm = 4 250 m = 4.25 km"
    ],
    "ex.14.1.prompts": [
      "A scale of 1 : 50 000 means 1 cm on the map is how many cm in real life? Work it out for 8.5 cm.",
      "To change cm to km, which unit do you go through in between? What do you divide by at each step?"
    ],
    "ex.14.1.twist": "If the real distance is still 4.25 km but the map has scale 1 : 25 000, how many cm apart are the two stations on the map?",
    "s.14.2.learn": [
      "Two points with the same y-coordinate lie on a horizontal line: the distance is the difference of the two x-coordinates (larger minus smaller).",
      "Two points with the same x-coordinate lie on a vertical line: the distance is the difference of the two y-coordinates.",
      "With negative numbers, count the steps through the origin: from −3 to 4 is 3 + 4 = 7 steps, not 1.",
      "The midpoint of the line joining (x₁, y₁) and (x₂, y₂) is ((x₁ + x₂)/2, (y₁ + y₂)/2).",
      "A quick sketch on a grid helps you check the result."
    ],
    "ex.14.2.q": "Find the distance between A(1, 2) and B(4, 2).",
    "ex.14.2.steps": [
      "Same y = 2, so AB is horizontal",
      "Difference of x-coordinates: 4 − 1 = 3",
      "The distance is 3 units."
    ],
    "ex.14.2.prompts": [
      "Which value do the two points share? Is the line joining them horizontal or vertical?",
      "The distance along the horizontal axis is the difference between which two coordinates?",
      "Write the distance with its unit."
    ],
    "ex.14.2.twist": "If B is (4, 6) instead of (4, 2), what is the distance AB? (Hint: draw a right-angled triangle.)",
    "s.14.3.learn": [
      "A translation slides a shape a certain distance: right/left and up/down; the shape is not turned or flipped.",
      "Move right: add to x. Move left: subtract from x. Move up: add to y. Move down: subtract from y.",
      "The object is the original shape and the image is the shape after the move; the point A' is read 'A prime' and matches A.",
      "The image and object are congruent (same shape, same size, same orientation).",
      "Two translations in a row make one translation: add the steps in x and the steps in y."
    ],
    "ex.14.3.q": "Triangle ABC has A(1,1), B(2,3), C(4,1). It is translated 3 right and 2 up. Find the coordinates of B' (do A' and C' in the same way).",
    "ex.14.3.steps": [
      "Add 3 to every x-coordinate and add 2 to every y-coordinate",
      "A'(4, 3), B'(5, 5), C'(7, 3)"
    ],
    "ex.14.3.prompts": [
      "Does moving right change the x-coordinate or the y-coordinate? Does it increase or decrease, and by how much? What about moving up?",
      "Apply that rule to each vertex: what are the coordinates of the image of B?"
    ],
    "ex.14.3.twist": "If the translation is 3 left and 2 down, where is the image C' of C(4, 1)?",
    "s.14.4.learn": [
      "In a reflection in a mirror line, every point and its image are the same distance from the mirror line, on opposite sides.",
      "Reflection in the y-axis: (x, y) → (−x, y). Reflection in the x-axis: (x, y) → (x, −y).",
      "A point on the mirror line stays where it is.",
      "Reflection in the line x = a: new x = 2a − x; in y = b: new y = 2b − y.",
      "The image is congruent to the object but reversed (like looking in a mirror)."
    ],
    "ex.14.4.q": "Reflect the point (3, 2) in the y-axis.",
    "ex.14.4.steps": [
      "It is 3 units to the right of the y-axis, so the image is 3 units to the left",
      "Image (−3, 2)"
    ],
    "ex.14.4.prompts": [
      "How far is the point (3, 2) from the y-axis and on which side of it?",
      "The image is the same distance from the y-axis but on the opposite side: what is the x-coordinate of the image? Does the y-coordinate change?"
    ],
    "ex.14.4.twist": "If the point (3, 2) is reflected in the x-axis, what are the coordinates of the image?",
    "s.14.5.learn": [
      "A rotation needs three pieces of information: the centre of rotation, the angle and the direction (clockwise or anticlockwise).",
      "Rotation about the origin O: 180°: (x, y) → (−x, −y). 90° anticlockwise: (x, y) → (−y, x). 90° clockwise: (x, y) → (y, −x).",
      "For a 180° turn the direction does not matter; for a 90° turn you must state the direction.",
      "A point rotated about a centre keeps its distance from the centre; the centre itself does not move.",
      "Use tracing paper to check: put your pencil on the centre and turn the paper."
    ],
    "ex.14.5.q": "Rotate the point (3, 1) through 90° anticlockwise about O.",
    "ex.14.5.steps": [
      "Rule (x, y) → (−y, x)",
      "(3, 1) → (−1, 3)"
    ],
    "ex.14.5.prompts": [
      "Try placing the point (1, 0) and rotating it 90° anticlockwise about O: where does it go? Which rule does that help you remember?",
      "Substitute x = 3, y = 1 into the rule you just found."
    ],
    "ex.14.5.twist": "If (3, 1) is rotated 90° clockwise about O, which point is the image?",
    "s.14.6.learn": [
      "An enlargement with scale factor k: EVERY length is multiplied by k and the angles stay the same.",
      "The object and image are similar: same shape, different size.",
      "Scale factor = length of image / matching length of object; check it with every side.",
      "Enlargement with centre O: multiply the coordinates of each vertex by k.",
      "Perimeter is multiplied by k; area is multiplied by k²."
    ],
    "ex.14.6.q": "Enlarge a triangle with base 2 squares and height 1 square by scale factor 3. What are the dimensions of the image?",
    "ex.14.6.steps": [
      "Image base = 3 × 2 = 6 squares",
      "Image height = 3 × 1 = 3 squares"
    ],
    "ex.14.6.prompts": [
      "With scale factor 3, what do you multiply each side length by? Apply it to the base of 2 squares.",
      "What about the height of 1 square?"
    ],
    "ex.14.6.twist": "If the scale factor is 3, how many times as big as the original area is the area of the image?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Midpoints, reflections, translations, enlargements: Year 6–7 exam-style coordinate and transformation problems are guarding the treasure.",
    "q.14.1-01.hints": [
      "How many km does 1 cm represent?",
      "How many 1 cm lengths are in 3.5 cm?",
      "Multiply 3.5 by 40."
    ],
    "q.14.1-01.explain": "3.5 × 40 = 140 km.",
    "q.14.1-02.hints": [
      "To go from the map to real life, do you multiply or divide by 50 000?",
      "How many cm is 8.5 × 50 000?",
      "Change cm to km: divide by 100 000."
    ],
    "q.14.1-02.explain": "8.5 × 50 000 = 425 000 cm = 4.25 km. Common mistake: dividing 8.5 by 50 000 instead of multiplying.",
    "q.14.1-03.hints": [
      "Change 6 km to cm first. How many cm is 1 km?",
      "From real life to the map, do you multiply or divide?",
      "Divide 600 000 cm by 30 000."
    ],
    "q.14.1-03.explain": "6 km = 600 000 cm. 600 000 ÷ 30 000 = 20 cm.",
    "q.14.1-04.hints": [
      "10 cm on the map is how many cm in real life?",
      "How many metres is 2 000 000 cm?",
      "Convert on to km."
    ],
    "q.14.1-04.explain": "10 × 200 000 = 2 000 000 cm = 20 000 m = 20 km.",
    "q.14.1-05.hints": [
      "A scale of 1 : 20 means one unit on the drawing matches how many real units, in the same unit?",
      "1 cm matches 20 cm. How many mm does 1 mm match?",
      "Check whether each person uses different units on the two sides."
    ],
    "q.14.1-05.explain": "Both sides of a scale use the same unit: 1 cm matches 20 cm; 1 mm matches 20 mm. Only Sofia is correct. Marcus and Arun converted the units wrongly.",
    "q.14.1-06.hints": [
      "Change 18 km to cm.",
      "Scale = real length / length on the map (both in cm).",
      "Divide 1 800 000 by 24."
    ],
    "q.14.1-06.explain": "18 km = 1 800 000 cm. 1 800 000 ÷ 24 = 75 000, so the scale is 1 : 75 000.",
    "q.14.1-07.hints": [
      "Change 5 m to cm.",
      "Do you divide by 20 or multiply by 20?",
      "500 ÷ 20 = ?"
    ],
    "q.14.1-07.explain": "5 m = 500 cm. 500 ÷ 20 = 25 cm.",
    "q.14.1-08.hints": [
      "For the same real road, is it drawn longer or shorter on the map with the larger number on the right?",
      "The length on map A is real/25 000 and on map B is real/100 000.",
      "Form the ratio (real/100 000) : (real/25 000)."
    ],
    "q.14.1-08.explain": "Length is inversely proportional to the number on the right. B/A = 25 000/100 000 = 1/4.",
    "q.14.2-01.hints": [
      "Do the two points have the same x-coordinate or the same y-coordinate?",
      "So do they lie on a horizontal or a vertical line?",
      "Take the difference of the two x-coordinates."
    ],
    "q.14.2-01.explain": "Same y = 2, distance = 4 − 1 = 3 units.",
    "q.14.2-02.hints": [
      "The two points have the same x-coordinate x = −3. Which line do they lie on?",
      "Which y-coordinates do you need to compare?",
      "5 − 1 = ?"
    ],
    "q.14.2-02.explain": "Same x, so take the difference of the y-coordinates: 5 − 1 = 4 units.",
    "q.14.2-03.hints": [
      "Do the two points have the same y-coordinate?",
      "One point is to the left and one to the right of the y-axis. How many steps is it from −4 to 0?",
      "Add the number of steps from 0 to 2."
    ],
    "q.14.2-03.explain": "Same y = 3, distance = 2 − (−4) = 6 units.",
    "q.14.2-04.hints": [
      "Do the two points have the same x-coordinate?",
      "How many steps is it from y = −3 up to y = 0?",
      "Then how many steps from 0 up to 4, and how many in total?"
    ],
    "q.14.2-04.explain": "Same x = 2, distance = 4 − (−3) = 7 units.",
    "q.14.2-05.hints": [
      "The middle point is the same distance from A and B, so where is its x-coordinate between 2 and 8?",
      "Work out (2 + 8) ÷ 2.",
      "What is the y-coordinate of both points? What is the y-coordinate of the midpoint?"
    ],
    "q.14.2-05.explain": "x = (2 + 8)/2 = 5, y = (2 + 2)/2 = 2. The midpoint is (5, 2).",
    "q.14.2-06.hints": [
      "The x-coordinate of the midpoint is the mean of the two x-coordinates. What do −4 and 6 add up to?",
      "Halve that result.",
      "Do the same with 1 and 5 to find the y-coordinate."
    ],
    "q.14.2-06.explain": "x = (−4 + 6)/2 = 1, y = (1 + 5)/2 = 3. The midpoint is (1, 3).",
    "q.14.2-07.hints": [
      "Do the two points have the same y-coordinate? So which difference of x-coordinates do you use?",
      "What is 4 − (−3)?",
      "Can a distance be negative?"
    ],
    "q.14.2-07.explain": "Difference of x-coordinates: 4 − (−3) = 7. The student dropped the negative sign and worked out 4 − 3 = 1, which is wrong. A distance is never negative, so it cannot be −7.",
    "q.14.2-08.hints": [
      "From A to M, how much does the x-coordinate increase and how does the y-coordinate change?",
      "M is in the middle, so from M to B you need to make the same step again.",
      "Add that step to the coordinates of M."
    ],
    "q.14.2-08.explain": "From A(−1, 4) to M(2, 1): +3 in x, −3 in y. Take one more step: B = (2 + 3, 1 − 3) = (5, −2).",
    "q.14.2-09.hints": [
      "Work out AB: do the two points have the same y-coordinate or the same x-coordinate?",
      "Work out BC in the same way.",
      "Perimeter of a rectangle = 2 × (length + width)."
    ],
    "q.14.2-09.explain": "AB = 4 − (−2) = 6; BC = 3 − (−1) = 4. Perimeter = 2 × (6 + 4) = 20. (D = (−2, 3).)",
    "q.14.3-01.hints": [
      "Moving right: do you add to or subtract from the x-coordinate?",
      "How does moving up change the y-coordinate?",
      "Work out 1 + 3 and 1 + 2."
    ],
    "q.14.3-01.explain": "x: 1 + 3 = 4; y: 1 + 2 = 3. A' = (4, 3).",
    "q.14.3-02.hints": [
      "Moving left: do you add to or subtract from x?",
      "Moving down: does y increase or decrease?",
      "2 − 4 = ? and 3 − 1 = ?"
    ],
    "q.14.3-02.explain": "x: 2 − 4 = −2; y: 3 − 1 = 2. B' = (−2, 2).",
    "q.14.3-03.hints": [
      "Read the coordinates of vertex C on the grid.",
      "Add 3 to the x-coordinate of C.",
      "Add 2 to the y-coordinate of C."
    ],
    "q.14.3-03.explain": "C(4, 1) → (4 + 3, 1 + 2) = (7, 3).",
    "q.14.3-04.hints": [
      "The x-coordinate goes from 2 to −1: does it increase or decrease, and by how much?",
      "The y-coordinate goes from 5 to 1: how much does it change?",
      "Write the two changes (with signs) as a pair."
    ],
    "q.14.3-04.explain": "Δx = −1 − 2 = −3; Δy = 1 − 5 = −4. Move 3 left and 4 down: (−3, −4).",
    "q.14.3-05.hints": [
      "Add 5 to the x-coordinate −3.",
      "Down 4 means subtract 4 from the y-coordinate 2.",
      "Write the pair of coordinates."
    ],
    "q.14.3-05.explain": "x: −3 + 5 = 2; y: 2 − 4 = −2. Image (2, −2).",
    "q.14.3-06.hints": [
      "Moving left: does x increase or decrease?",
      "Does the y-coordinate change when you only move horizontally?",
      "Work out 2 − 3."
    ],
    "q.14.3-06.explain": "Moving left means subtracting from x: 2 − 3 = −1, y stays the same: (−1, 3). The student added instead of subtracting.",
    "q.14.3-07.hints": [
      "The total move in x is +3 then −5: what is the total?",
      "The total move in y is +1 then −4: what is the total?",
      "Apply the combined translation to (2, 2)."
    ],
    "q.14.3-07.explain": "Total Δx = 3 − 5 = −2; Δy = 1 − 4 = −3. (2, 2) → (0, −1).",
    "q.14.3-08.hints": [
      "What is the translation from A to A' in x and in y?",
      "To go from the image back to the object, what do you do in reverse?",
      "Subtract that translation from B'."
    ],
    "q.14.3-08.explain": "The translation is (+3, +2). B = (5 − 3, 5 − 2) = (2, 3).",
    "q.14.3-09.hints": [
      "Does a translation change the size?",
      "Does it flip or turn the shape?",
      "So how are the image and the object related?"
    ],
    "q.14.3-09.explain": "A translation only changes position: the image is congruent to the object and faces the same way. Do not confuse it with a reflection (flip) or a rotation.",
    "q.14.4-01.hints": [
      "How many units is the point from the y-axis and on which side?",
      "The image is on the opposite side at the same distance.",
      "The x-coordinate changes sign, the y-coordinate stays the same."
    ],
    "q.14.4-01.explain": "In the y-axis: (x, y) → (−x, y), so (3, 2) → (−3, 2).",
    "q.14.4-02.hints": [
      "Is the point above or below the x-axis?",
      "The image is on the opposite side at the same distance.",
      "The y-coordinate changes sign."
    ],
    "q.14.4-02.explain": "In the x-axis: (x, y) → (x, −y), so (−4, 1) → (−4, −1).",
    "q.14.4-03.hints": [
      "How many units is R from the y-axis?",
      "Which side of the y-axis is the image on?",
      "Keep the y-coordinate the same."
    ],
    "q.14.4-03.explain": "R(3, 1) → R'(−3, 1).",
    "q.14.4-04.hints": [
      "When you reflect in the y-axis, which coordinate changes sign?",
      "Does the y-coordinate −5 change?",
      "Write the result."
    ],
    "q.14.4-04.explain": "Only the x-coordinate changes sign: (2, −5) → (−2, −5).",
    "q.14.4-05.hints": [
      "The x-axis is a horizontal line: is the image above or below the point?",
      "Which coordinate changes when you flip in a horizontal line?",
      "Remember: (x, y) → (x, −y)."
    ],
    "q.14.4-05.explain": "In the x-axis only the y-coordinate changes sign: (3, −2) → (3, 2). (−3, −2) is a reflection in the y-axis; (−3, 2) is a 180° rotation.",
    "q.14.4-06.hints": [
      "How many units is (5, 3) from the line x = 2?",
      "The image is on the other side of the line x = 2 at the same distance.",
      "From x = 2 go left that many units."
    ],
    "q.14.4-06.explain": "The distance to x = 2 is 5 − 2 = 3. The image has x = 2 − 3 = −1, y stays the same: (−1, 3).",
    "q.14.4-07.hints": [
      "How many units is the point from the line y = 1?",
      "The image is below the line y = 1 at the same distance.",
      "Take that distance away from 1."
    ],
    "q.14.4-07.explain": "It is 3 units from the line y = 1. The image has y = 1 − 3 = −2, x stays the same: (1, −2).",
    "q.14.4-08.hints": [
      "Which point lies on the mirror line (the y-axis)?",
      "What is the x-coordinate of a point on the y-axis?",
      "Does changing the sign of that x-coordinate change it?"
    ],
    "q.14.4-08.explain": "A point on the y-axis has x = 0, so (0, 5) → (−0, 5) = (0, 5), which stays the same.",
    "q.14.4-09.hints": [
      "Reflect in the y-axis first: which coordinate changes sign?",
      "What point is the result of step 1?",
      "Then reflect in the x-axis: which coordinate changes sign?"
    ],
    "q.14.4-09.explain": "Step 1: (−2, 3) → (2, 3). Step 2: (2, 3) → (2, −3). The result is the same as a 180° rotation.",
    "q.14.5-01.hints": [
      "After a half turn about O, which side of O is the point on?",
      "Do both the x- and y-coordinates change sign?",
      "Write the new coordinates."
    ],
    "q.14.5-01.explain": "A 180° rotation about O: (x, y) → (−x, −y), so (2, 1) → (−2, −1).",
    "q.14.5-02.hints": [
      "Which axis does the point (0, 4) lie on?",
      "Which side will a half turn about O take it to?",
      "It is still 4 units from O."
    ],
    "q.14.5-02.explain": "(0, 4) → (−0, −4) = (0, −4).",
    "q.14.5-03.hints": [
      "Which quadrant is (3, 1) in? After a 90° anticlockwise turn, which quadrant does it go to?",
      "Try plotting (3, 1) and turning the tracing paper through 90°.",
      "Or use the rule (x, y) → (−y, x)."
    ],
    "q.14.5-03.explain": "(x, y) → (−y, x): (3, 1) → (−1, 3).",
    "q.14.5-04.hints": [
      "For a clockwise turn, the point (3, 1) moves downwards.",
      "The clockwise rule: (x, y) → (y, −x).",
      "Apply it with x = 3, y = 1."
    ],
    "q.14.5-04.explain": "(x, y) → (y, −x): (3, 1) → (1, −3).",
    "q.14.5-05.hints": [
      "From the centre C(4, 3) to P(6, 5), how many steps in x and in y?",
      "For a 180° turn, go the opposite way the same number of steps from C.",
      "Subtract those steps from the coordinates of C."
    ],
    "q.14.5-05.explain": "From C to P: (+2, +2). Image: C − (2, 2) = (2, 1).",
    "q.14.5-06.hints": [
      "Turn a half turn in this direction: where do you end up?",
      "Turn a half turn in the opposite direction: where do you end up?",
      "Are those two positions the same or different?"
    ],
    "q.14.5-06.explain": "A half turn in either direction takes the point to the opposite side of the centre, so the images are the same. This is not true for 90°.",
    "q.14.5-07.hints": [
      "Anticlockwise rule: (x, y) → (−y, x).",
      "Here x = −2, y = 4. Work out −y.",
      "The original x-coordinate becomes the new y-coordinate."
    ],
    "q.14.5-07.explain": "(−2, 4) → (−4, −2).",
    "q.14.5-08.hints": [
      "First turn: (x, y) → (−y, x). Which point do you get?",
      "Now do the second and third turns.",
      "Three 90° anticlockwise turns equal one 90° clockwise turn: check this."
    ],
    "q.14.5-08.explain": "(2, 3) → (−3, 2) → (−2, −3) → (3, −2). This also equals a 90° clockwise turn: (x, y) → (y, −x) = (3, −2).",
    "q.14.5-09.hints": [
      "What path does a point turning about a centre follow?",
      "Does the distance to the centre change?",
      "So what is OA'?"
    ],
    "q.14.5-09.explain": "A rotation about O does not change the distance to O (the point moves along a circle), so OA' = 5 cm.",
    "q.14.6-01.hints": [
      "How long is the longer side of the object?",
      "With scale factor 2, do you multiply or add?",
      "4 × 2 = ?"
    ],
    "q.14.6-01.explain": "4 × 2 = 8 cm (and the shorter side is 3 × 2 = 6 cm).",
    "q.14.6-02.hints": [
      "How many squares is the original base?",
      "Multiply by the scale factor 3.",
      "2 × 3 = ?"
    ],
    "q.14.6-02.explain": "Image base = 3 × 2 = 6 squares.",
    "q.14.6-03.hints": [
      "The image dimensions are 5 × 4 and 2 × 4.",
      "Perimeter = 2 × (length + width).",
      "Or multiply the object's perimeter by 4."
    ],
    "q.14.6-03.explain": "The image is 20 cm × 8 cm, perimeter 2 × (20 + 8) = 56 cm. Or (2 × 7) × 4 = 56.",
    "q.14.6-04.hints": [
      "Choose one side of the object and the matching side of the image.",
      "Scale factor = length of image / length of object.",
      "Check with the other side: 20/5 = ?"
    ],
    "q.14.6-04.explain": "8 ÷ 2 = 4 and 20 ÷ 5 = 4, so the scale factor is 4.",
    "q.14.6-05.hints": [
      "Read the coordinates of C.",
      "Enlargement with scale factor 3 about O: multiply both coordinates by 3.",
      "What are 1 × 3 and 2 × 3?"
    ],
    "q.14.6-05.explain": "C(1, 2) → (3 × 1, 3 × 2) = (3, 6).",
    "q.14.6-06.hints": [
      "Does scale factor 3 mean add 3 or multiply by 3?",
      "It must be applied to both sides.",
      "What are 2 × 3 and 3 × 3?"
    ],
    "q.14.6-06.explain": "Every side is multiplied by 3: 6 cm by 9 cm. The student added 3 to each side, so the shape is distorted (not in proportion).",
    "q.14.6-07.hints": [
      "Work out the area of the object.",
      "Work out the dimensions of the image, then its area.",
      "Divide the image area by the object area."
    ],
    "q.14.6-07.explain": "Object: 2 × 3 = 6 cm². Image: 6 × 9 = 54 cm². 54 ÷ 6 = 9 = 3². Area is multiplied by k².",
    "q.14.6-08.hints": [
      "How do two similar shapes differ?",
      "When you enlarge, do the diagonals and sides change?",
      "What is not 'stretched'?"
    ],
    "q.14.6-08.explain": "An enlargement multiplies lengths (and perimeter and area) but keeps the angles the same.",
    "q.14.6-09.hints": [
      "After two enlargements, what is the overall scale factor?",
      "What are the dimensions of the final shape?",
      "Work out the perimeter."
    ],
    "q.14.6-09.explain": "Overall scale factor 2 × 3 = 6. Dimensions 24 × 36, perimeter 2 × (24 + 36) = 120 cm.",
    "q.ch-01.q": "Given A(−3, 5) and B(7, −1). Find the coordinates of the midpoint M of AB.",
    "q.ch-01.hints": [
      "The x-coordinate of the midpoint is the mean of the two x-coordinates.",
      "(−3 + 7) ÷ 2 = ?",
      "Do the same with the y-coordinates 5 and −1."
    ],
    "q.ch-01.explain": "x = (−3 + 7)/2 = 2; y = (5 + (−1))/2 = 2. M(2, 2).",
    "q.ch-02.q": "M(1, −2) is the midpoint of AB with A(−4, 3). Find the coordinates of B.",
    "q.ch-02.hints": [
      "From A to M, how much do the x- and y-coordinates change?",
      "From M to B you need to change by the same amount again.",
      "Or use 2M − A for each coordinate."
    ],
    "q.ch-02.explain": "x_B = 2 × 1 − (−4) = 6; y_B = 2 × (−2) − 3 = −7. B(6, −7).",
    "q.ch-03.q": "The point A(3, −2) is reflected in the Oy axis, then its image is reflected in the Ox axis. Find the coordinates of the final point.",
    "q.ch-03.hints": [
      "Which coordinate changes sign in a reflection in Oy?",
      "After step 1 the point is (−3, −2). Which coordinate changes sign in a reflection in Ox?",
      "Write the result."
    ],
    "q.ch-03.explain": "(3, −2) → (−3, −2) → (−3, 2).",
    "q.ch-04.q": "The point A(1, 2) is translated 3 units right and 5 units down, then translated again 7 units left and 4 units up. Find the coordinates of the final image.",
    "q.ch-04.hints": [
      "Total move in x: +3 then −7?",
      "Total move in y: −5 then +4?",
      "Add the combined translation to (1, 2)."
    ],
    "q.ch-04.explain": "Δx = 3 − 7 = −4; Δy = −5 + 4 = −1. (1, 2) → (−3, 1).",
    "q.ch-05.q": "Given A(−2, 3), B(−2, −5), C(4, −5). Find the area of triangle ABC (in square units).",
    "q.ch-05.hints": [
      "Is side AB horizontal or vertical? How long is it?",
      "How long is side BC? Are these two sides perpendicular?",
      "Area of a right-angled triangle = half the product of the two perpendicular sides."
    ],
    "q.ch-05.explain": "AB = 3 − (−5) = 8, BC = 4 − (−2) = 6, right angle at B. Area = ½ × 8 × 6 = 24.",
    "q.ch-06.q": "A 2 cm × 6 cm rectangle is enlarged with scale factor 3. Find the area of the image.",
    "q.ch-06.hints": [
      "What are the dimensions of the image?",
      "Multiply the two new dimensions.",
      "Or multiply the old area by 3²."
    ],
    "q.ch-06.explain": "The image is 6 cm × 18 cm = 108 cm². Also 12 × 9 = 108.",
    "q.ch-07.q": "A square of area 25 cm² is enlarged to a square of area 225 cm². Find the scale factor.",
    "q.ch-07.hints": [
      "What is the side of the original square?",
      "What is the side of the new square?",
      "Divide the new side by the old side."
    ],
    "q.ch-07.explain": "Old side 5 cm, new side 15 cm, scale factor 15/5 = 3. (The area increases 225/25 = 9 = 3² times.)",
    "q.ch-08.q": "On a map with scale 1 : 500 000, two cities are 7.2 cm apart. A car travels at 48 km/h. How many minutes does the car take?",
    "q.ch-08.hints": [
      "The real distance is 7.2 × 500 000 cm. Convert it to km.",
      "Time = distance ÷ speed (in hours).",
      "Change hours to minutes."
    ],
    "q.ch-08.explain": "7.2 × 500 000 = 3 600 000 cm = 36 km. 36 ÷ 48 = 0.75 hours = 45 minutes.",
    "q.ch-09.q": "Two points A(a, 2) and B(7, 2) are 5 units apart, with a less than 7. Find a.",
    "q.ch-09.hints": [
      "A and B have the same y-coordinate, so they lie on a horizontal line.",
      "The distance equals 7 − a.",
      "Solve 7 − a = 5."
    ],
    "q.ch-09.explain": "7 − a = 5 so a = 2.",
    "q.ch-10.q": "The point A(2, −3) is rotated 180° about the origin O, then the image is translated 5 units right and 1 unit up. Find the coordinates of the final point.",
    "q.ch-10.hints": [
      "A 180° rotation about O: change the sign of both coordinates.",
      "After the rotation the point is (−2, 3).",
      "Add 5 to x and 1 to y."
    ],
    "q.ch-10.explain": "(2, −3) → (−2, 3) → (−2 + 5, 3 + 1) = (3, 4)."
  },
  vi: {
    "q.14.6-05.howto": "C' là vị trí mới của đỉnh C sau khi phóng to tam giác. Chỉ nhập tọa độ của C'.",
    "q.14.4-03.howto": "R' là vị trí mới của đỉnh R sau khi lấy đối xứng tam giác. Chỉ nhập tọa độ của R'.",
    "q.14.3-08.howto": "Điểm B được tịnh tiến giống hệt phép tịnh tiến đưa A tới A'. Đã biết B'; hãy nhập tọa độ của điểm ban đầu B.",
    "q.14.3-04.howto": "Tìm xem P di chuyển sang ngang bao nhiêu và lên hoặc xuống bao nhiêu để tới P'. Nhập hai số đó thành cặp (thay đổi của x, thay đổi của y), dùng dấu trừ khi sang trái hoặc xuống dưới.",
    "q.14.3-03.howto": "C' là vị trí mới của đỉnh C sau khi cả tam giác dịch chuyển. Chỉ nhập tọa độ của C'.",
    "q.14.3-02.howto": "B' (đọc là 'B phẩy') là vị trí mới của điểm B sau khi dịch chuyển. Nhập tọa độ của B'.",
    "q.14.3-01.howto": "A' (đọc là 'A phẩy') là vị trí mới của điểm A sau khi dịch chuyển. Nhập tọa độ của A'.",
    "q.14.2-08.howto": "B là đầu mút còn lại của đoạn thẳng AB, còn M là trung điểm của nó. Nhập tọa độ của điểm B.",
    "q.14.1-08.howto": "So sánh độ dài con đường trên bản đồ B với độ dài trên bản đồ A. Nhập con đường trên bản đồ B dài gấp mấy lần.",
    "q.14.1-03.howto": "Tìm độ dài của con đường 6 km khi vẽ trên bản đồ. Nhập độ dài trên bản đồ, tính bằng xăng-ti-mét.",
    "q.14.1-01.q": "Trên một bản đồ, 1 cm đại diện cho 40 km. Hai thị trấn cách nhau 3,5 cm trên bản đồ. Ngoài thực tế chúng cách nhau bao xa?",
    "q.14.1-02.q": "Một bản đồ có tỉ lệ 1 : 50 000. Hai ga cách nhau 8,5 cm trên bản đồ. Tìm khoảng cách thật theo km.",
    "q.14.1-03.q": "Một bản đồ có tỉ lệ 1 : 30 000. Một con đường dài 6 km ngoài thực tế. Trên bản đồ nó dài bao nhiêu?",
    "q.14.1-04.q": "Trên bản đồ tỉ lệ 1 : 200 000, hai thành phố cách nhau 10 cm. Khoảng cách thật là bao nhiêu km?",
    "q.14.1-05.q": "Tỉ lệ '1 trên 20'. Marcus: '1 cm đại diện cho 20 m.' Arun: '1 mm đại diện cho 20 cm.' Sofia: '1 cm đại diện cho 20 cm.' Ai đúng?",
    "q.14.1-05.choices": ["Chỉ Sofia", "Chỉ Marcus", "Marcus và Arun", "Cả ba bạn"],
    "q.14.1-06.q": "Babra chạy một cuộc đua dài 18 km. Đường chạy dài 24 cm trên bản đồ. Tỉ lệ nào là đúng?",
    "q.14.1-07.q": "Một bản vẽ có tỉ lệ 1 trên 20. Một căn phòng dài 5 m ngoài thực tế. Trên bản vẽ nó dài bao nhiêu?",
    "q.14.1-08.q": "Bản đồ A có tỉ lệ 1 : 25 000 và bản đồ B có tỉ lệ 1 : 100 000. Cùng một con đường được vẽ trên cả hai bản đồ. Con đường trên bản đồ B dài bằng bao nhiêu lần trên bản đồ A? Viết dưới dạng phân số.",
    "q.14.2-01.q": "Tìm khoảng cách giữa A(1, 2) và B(4, 2).",
    "q.14.2-02.q": "Tìm khoảng cách giữa C(−3, 1) và D(−3, 5).",
    "q.14.2-03.q": "Tìm khoảng cách giữa E(−4, 3) và F(2, 3).",
    "q.14.2-04.q": "Tìm khoảng cách giữa P(2, −3) và Q(2, 4).",
    "q.14.2-05.q": "Tìm trung điểm của A(2, 2) và B(8, 2). Viết dưới dạng (x, y).",
    "q.14.2-06.q": "Tìm trung điểm của (−4, 1) và (6, 5).",
    "q.14.2-07.q": "Tìm khoảng cách giữa (−3, 2) và (4, 2). Một học sinh viết 1 (từ 4 − 3). Đáp án nào đúng?",
    "q.14.2-07.choices": ["1 đơn vị", "7 đơn vị", "5 đơn vị", "−7 đơn vị"],
    "q.14.2-08.q": "M(2, 1) là trung điểm của A(−1, 4) và B. Tìm tọa độ của B.",
    "q.14.2-09.q": "Một hình chữ nhật có các đỉnh A(−2, −1), B(4, −1), C(4, 3) và D. Tìm chu vi của nó.",
    "q.14.3-01.q": "Tịnh tiến A(1, 1) sang phải 3 ô và lên trên 2 ô. Cho biết A'.",
    "q.14.3-02.q": "Tịnh tiến B(2, 3) sang trái 4 ô và xuống dưới 1 ô. Cho biết B'.",
    "q.14.3-03.q": "Tam giác ABC có A(1, 1), B(2, 3), C(4, 1). Nó được tịnh tiến 3 sang phải và 2 lên trên. Tìm C'.",
    "q.14.3-04.q": "P(2, 5) được tịnh tiến đến P'(−1, 1). Viết phép tịnh tiến dưới dạng (thay đổi của x, thay đổi của y).",
    "q.14.3-05.q": "Tịnh tiến (−3, 2) sang phải 5 và xuống dưới 4.",
    "q.14.3-06.q": "Tịnh tiến (2, 3) sang TRÁI 3 ô. Một học sinh trả lời (5, 3). Ảnh đúng là gì?",
    "q.14.3-07.q": "(2, 2) được tịnh tiến 3 sang phải và 1 lên trên, rồi 5 sang trái và 4 xuống dưới. Tìm ảnh cuối cùng.",
    "q.14.3-08.q": "A(1, 1) được tịnh tiến đến A'(4, 3). Ảnh của B là B'(5, 5). Tìm tọa độ của B.",
    "q.14.3-09.q": "Một tam giác được tịnh tiến. Nhận xét nào là đúng?",
    "q.14.3-09.choices": [
      "Ảnh bằng vật và cùng hướng với vật",
      "Ảnh nhỏ hơn vật",
      "Ảnh là hình phản chiếu trong gương của vật",
      "Ảnh bị lật ngược"
    ],
    "q.14.4-01.q": "Phản xạ (3, 2) qua trục y.",
    "q.14.4-02.q": "Phản xạ (−4, 1) qua trục x.",
    "q.14.4-03.q": "Tam giác PQR có P(1, 1), Q(1, 3), R(3, 1). Nó được phản xạ qua trục y. Tìm R'.",
    "q.14.4-04.q": "Phản xạ (2, −5) qua trục y.",
    "q.14.4-05.q": "Phản xạ (3, −2) qua trục x. Một học sinh viết (−3, −2). Đáp án nào đúng?",
    "q.14.4-06.q": "Phản xạ (5, 3) qua đường thẳng x = 2.",
    "q.14.4-07.q": "Phản xạ (1, 4) qua đường thẳng y = 1.",
    "q.14.4-08.q": "Điểm nào giữ nguyên vị trí khi phản xạ qua trục y?",
    "q.14.4-09.q": "A(−2, 3) được phản xạ qua trục y, rồi ảnh được phản xạ qua trục x. Tìm điểm cuối cùng.",
    "q.14.5-01.q": "Quay (2, 1) góc 180° quanh gốc tọa độ.",
    "q.14.5-02.q": "Quay (0, 4) góc 180° quanh gốc tọa độ.",
    "q.14.5-03.q": "Quay (3, 1) góc 90° ngược chiều kim đồng hồ quanh gốc tọa độ.",
    "q.14.5-04.q": "Quay (3, 1) góc 90° cùng chiều kim đồng hồ quanh gốc tọa độ.",
    "q.14.5-05.q": "Quay (6, 5) góc 180° quanh tâm (4, 3).",
    "q.14.5-06.q": "Phép quay 180° cùng chiều kim đồng hồ có cho cùng ảnh với phép quay 180° ngược chiều kim đồng hồ không?",
    "q.14.5-06.choices": [
      "Có, luôn luôn",
      "Không, chúng là hình phản chiếu của nhau",
      "Chỉ với các hình đối xứng",
      "Chỉ khi quay quanh gốc tọa độ"
    ],
    "q.14.5-07.q": "Quay (−2, 4) góc 90° ngược chiều kim đồng hồ quanh gốc tọa độ.",
    "q.14.5-08.q": "(2, 3) được quay 90° ngược chiều kim đồng hồ quanh gốc tọa độ ba lần liên tiếp. Tìm điểm cuối cùng.",
    "q.14.5-09.q": "Điểm A cách tâm quay O một khoảng 5 cm. A được quay 90° quanh O đến A'. A' cách O bao xa?",
    "q.14.6-01.q": "Một hình chữ nhật có kích thước 3 cm × 4 cm. Nó được phóng to với hệ số 2. Cạnh dài hơn của ảnh dài bao nhiêu?",
    "q.14.6-02.q": "Một tam giác có đáy 2 ô và chiều cao 1 ô. Sau phép phóng to với hệ số 3, đáy của ảnh dài bao nhiêu ô?",
    "q.14.6-03.q": "Một hình chữ nhật 5 cm × 2 cm được phóng to với hệ số 4. Tìm chu vi của ảnh.",
    "q.14.6-04.q": "Một hình chữ nhật 2 cm × 5 cm trở thành hình chữ nhật 8 cm × 20 cm sau một phép phóng to. Hệ số phóng to là bao nhiêu?",
    "q.14.6-05.q": "Tam giác ABC có A(1, 1), B(3, 1), C(1, 2). Nó được phóng to với hệ số 3 quanh gốc tọa độ. Tìm C'.",
    "q.14.6-06.q": "Một hình chữ nhật 2 cm × 3 cm được phóng to với hệ số 3. Một học sinh nói ảnh là 5 cm × 6 cm. Kích thước đúng của ảnh là bao nhiêu?",
    "q.14.6-06.choices": ["5 cm × 6 cm", "6 cm × 9 cm", "6 cm × 6 cm", "2 cm × 9 cm"],
    "q.14.6-07.q": "Một hình chữ nhật 2 cm × 3 cm được phóng to với hệ số 3. Diện tích của ảnh gấp bao nhiêu lần diện tích của vật?",
    "q.14.6-08.q": "Đại lượng nào giữ nguyên sau một phép phóng to?",
    "q.14.6-08.choices": ["Các góc", "Độ dài các cạnh", "Diện tích", "Chu vi"],
    "q.14.6-09.q": "Một hình chữ nhật 4 cm × 6 cm được phóng to với hệ số 2, rồi ảnh được phóng to với hệ số 3. Tìm chu vi của hình cuối cùng."
  }
});
