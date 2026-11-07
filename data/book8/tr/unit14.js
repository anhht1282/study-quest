window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 14,
  en: {
    "q.ch-08.howto": "Enter the bearing of C as seen from A (in degrees, measured clockwise from north).",
    "q.ch-03.howto": "Find the coordinates of the midpoint M of BC, then enter the sum of its x- and y-coordinates (one number).",
    "u.realm": "The Mystic Sea Chart",
    "u.story": "Your ship is lost in a sea of fog, with only a compass and a crumpled sea chart left. You must read directions using bearings, find the midpoint between two islands, then reflect, rotate, translate and enlarge the pieces of the chart to put together the way back to port.",
    "g.0.def": "An angle measured from north in a clockwise direction, always written with three digits, for example 065°.",
    "g.1.def": "The point exactly in the middle of a line segment, the same distance from both end points.",
    "g.2.def": "Sliding a whole shape right/left and up/down, with no turning and no flipping.",
    "g.3.def": "Flipping a shape in a mirror line; the image and the object are symmetrical about that line.",
    "g.4.def": "Turning a shape about a centre of rotation through a given angle, clockwise or anticlockwise.",
    "g.5.def": "Multiplying every length of a shape by a scale factor k; angles stay the same.",
    "g.6.def": "The number of times each length of the image is as long as the matching length of the object.",
    "g.7.def": "The shape before a transformation is called the object, the shape after is called the image.",
    "g.8.def": "The line in which a shape is reflected, for example x = 4 or y = 1.",
    "g.9.def": "Two shapes with the same shape and size (the object and image of a translation, reflection or rotation).",
    "s.14.1.learn": [
      "The bearing of B from A is the angle measured from north (at A) turning CLOCKWISE to the line AB.",
      "A bearing is between 000° and 360° and is always written with three digits: 65° is written as 065°.",
      "The main directions: North 000°, East 090°, South 180°, West 270°.",
      "Always draw the north arrow at the starting point (the point after the word 'from').",
      "The two north lines are parallel, so alternate angles give: bearing of A from B = bearing of B from A plus or minus 180°."
    ],
    "ex.14.1.q": "The bearing of B from A is 127°. Find the bearing of A from B.",
    "ex.14.1.steps": [
      "The two north lines are parallel; alternate angles add 180°",
      "127° + 180° = 307°",
      "The bearing of A from B is 307°."
    ],
    "ex.14.1.prompts": [
      "Draw the north line at both A and B: are they parallel or do they cross? Which pair of angles are equal or supplementary?",
      "Two directions looking back at each other make a straight line. So how many degrees apart are the two bearings? Work out the number.",
      "A bearing is between 0° and 360°. Is your answer in that range? Write your conclusion."
    ],
    "ex.14.1.twist": "If the bearing of B from A is 250°, what is the bearing of A from B?",
    "s.14.2.learn": [
      "The midpoint is exactly in the middle of a line segment, the same distance from both end points.",
      "The midpoint of A(x₁, y₁) and B(x₂, y₂) is ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2): take the mean of the x-coordinates and the mean of the y-coordinates.",
      "If you know the midpoint M and one end point A, the other end point B has coordinates 2·M − A (for each coordinate).",
      "The two diagonals of a parallelogram cross at the midpoint of both diagonals.",
      "Sketch on a grid to check that the result is sensible."
    ],
    "ex.14.2.q": "Find the midpoint of A(2, 1) and B(6, 7).",
    "ex.14.2.steps": [
      "x-coordinate: (2 + 6) ÷ 2 = 4",
      "y-coordinate: (1 + 7) ÷ 2 = 4",
      "The midpoint is (4, 4)."
    ],
    "ex.14.2.prompts": [
      "The midpoint is exactly halfway between two points. For x-coordinates 2 and 6, which number is exactly halfway? What operation do you use?",
      "Do the same with the y-coordinates 1 and 7.",
      "Put the x-coordinate and y-coordinate together as a coordinate pair."
    ],
    "ex.14.2.twist": "If the midpoint of AB is M(5, 3) and A is (1, −1), what are the coordinates of B?",
    "s.14.3.learn": [
      "A translation slides a whole shape in the same direction by the same distance; the shape does not turn, flip or change size.",
      "Describe it as: 'a squares right/left, b squares up/down'. Right: x increases, left: x decreases; up: y increases, down: y decreases.",
      "In the column vector (a, b) the top number is the horizontal movement (positive: right, negative: left), the bottom number is the vertical movement (positive: up, negative: down). In the game you enter the vector as (a, b).",
      "Find the image by adding each coordinate: (x, y) + (a, b) = (x + a, y + b). The vector that returns to the start is (−a, −b).",
      "The object and image are always congruent.",
      "To return to the original position, translate in the opposite direction by the same distance.",
      "Two translations in a row equal one translation: add the x-movements and the y-movements separately."
    ],
    "ex.14.3.q": "Point P(2, 5) is translated 4 squares right and 3 squares down. Find the image P'.",
    "ex.14.3.steps": [
      "Right 4: x = 2 + 4 = 6",
      "Down 3: y = 5 − 3 = 2",
      "P'(6, 2)."
    ],
    "ex.14.3.prompts": [
      "'Right 4 squares' changes which coordinate, and does it increase or decrease by how much?",
      "'Down 3 squares' changes which coordinate, and does it increase or decrease by how much?",
      "Put the two new coordinates together and name the image."
    ],
    "ex.14.3.twist": "If you want to translate P(2, 5) to P'(−1, 9), what is the translation vector (write it as (a, b))?",
    "s.14.4.learn": [
      "To reflect a shape you need a mirror line. A vertical line has equation x = number; a horizontal line has equation y = number.",
      "Each point and its image are the same distance from the mirror line, and the line joining them is perpendicular to the mirror line.",
      "Reflection in x = a: y stays the same, x' = 2a − x. Reflection in y = b: x stays the same, y' = 2b − y.",
      "A point on the mirror line is its own image.",
      "Diagonal mirrors: in y = x, (x, y) → (y, x); in y = −x, (x, y) → (−y, −x).",
      "If you know the object and image: the mirror line passes through the midpoint of the line joining the two points."
    ],
    "ex.14.4.q": "Reflect the point (1, 3) in the line x = 4.",
    "ex.14.4.steps": [
      "Distance to the mirror: 4 − 1 = 3",
      "The image is 3 on the other side of the mirror: x' = 4 + 3 = 7",
      "y stays the same: the image is (7, 3)."
    ],
    "ex.14.4.prompts": [
      "The mirror is the vertical line x = 4. Which side of the mirror is the point (1, 3) on, and how far from it?",
      "The image is exactly that distance from the mirror but on the opposite side. What is the x-coordinate of the image?",
      "Does a reflection in a vertical line change the height (y-coordinate) of the point?"
    ],
    "ex.14.4.twist": "If the mirror is the horizontal line y = 1, what is the image of (1, 3)?",
    "s.14.5.learn": [
      "To rotate you need: a centre of rotation, an angle and a direction (clockwise or anticlockwise).",
      "Rotation about the origin O: 90° anticlockwise (x, y) → (−y, x); 90° clockwise (x, y) → (y, −x); 180° (x, y) → (−x, −y).",
      "A rotation of 270° anticlockwise is the same as 90° clockwise.",
      "For 180° the direction does not matter; the centre of rotation is the midpoint of a point and its image.",
      "For any centre C: take the vector from C to the point, rotate that vector, then add it back to C."
    ],
    "ex.14.5.q": "Rotate (2, 5) about O through 90° clockwise.",
    "ex.14.5.steps": [
      "Rule (x, y) → (y, −x)",
      "(2, 5) → (5, −2)",
      "The image is (5, −2)."
    ],
    "ex.14.5.prompts": [
      "Rotating 90° clockwise about the origin: where does the point (1, 0) go? From this, guess the rule for changing (x, y).",
      "Apply the rule to (2, 5): what are the new coordinates?",
      "Which quadrant is the image in? Is that sensible for a clockwise turn from the first quadrant?"
    ],
    "ex.14.5.twist": "If you rotate (2, 5) 90° anticlockwise about O, what is the image?",
    "s.14.6.learn": [
      "An enlargement multiplies EVERY length by the scale factor k; the image is similar to the object (same shape, different size, same angles).",
      "With centre of enlargement O: the distance from O to an image point is k times the distance from O to the object point.",
      "With centre O(0, 0): (x, y) → (kx, ky). With centre C: take the vector from C to the point, multiply by k, then add it back to C.",
      "Perimeter is multiplied by k, but AREA is multiplied by k².",
      "Scale factor k = image length ÷ object length.",
      "A point at the centre of enlargement does not move (an invariant point). To find the centre, join matching vertices of the object and image: the lines meet at the centre."
    ],
    "ex.14.6.q": "Enlarge the point P(3, 2) with centre C(1, 1) and scale factor 3.",
    "ex.14.6.steps": [
      "Vector CP = (3 − 1, 2 − 1) = (2, 1)",
      "Multiply by 3: (6, 3)",
      "Image = C + (6, 3) = (7, 4)."
    ],
    "ex.14.6.prompts": [
      "Enlargement from centre C: start with the vector from the centre C to P. What are its coordinates?",
      "A scale factor of 3 means the new vector is how many times as long as the old one? Multiply each coordinate.",
      "Adding the new vector to the coordinates of the centre C gives the image point. What is the result?"
    ],
    "ex.14.6.twist": "If the scale factor is −2 (same centre C(1, 1)), where is the image of P(3, 2)?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The ship is almost in port! Solve 10 sea-chart problems in the style of Vietnamese Grade 7–8 tests to open the city gate.",
    "q.14.1-01.hints": [
      "In which direction is the angle measured from north?",
      "B is to the right (east) of the north line, so how big is the clockwise angle?",
      "Write it with three digits: 040°. You enter 40."
    ],
    "q.14.1-01.explain": "B is between north and east, and the angle from north clockwise is 40°, written 040°.",
    "q.14.1-02.hints": [
      "What is the bearing of south in degrees?",
      "From south, how many more degrees do you turn clockwise to reach AB?",
      "180° + 35° = ?"
    ],
    "q.14.1-02.explain": "South is 180°. From south turn a further 35° clockwise: 180° + 35° = 215°.",
    "q.14.1-03.hints": [
      "Which direction is bearing 000° (or 360°)?",
      "How many degrees short of a full turn of 360° is 330°?",
      "Being 30° short going clockwise means you are to the west or east of north?"
    ],
    "q.14.1-03.explain": "330° = 360° − 30°, so it is close to north, 30° towards the west (anticlockwise from north).",
    "q.14.1-04.hints": [
      "To find the bearing of the school from the shop, at which point do you draw the north arrow?",
      "The two north lines are parallel; do alternate angles add or subtract how many degrees?",
      "042° + 180° = ?"
    ],
    "q.14.1-04.explain": "The bearing 42° is less than 180°, so add 180°: 42° + 180° = 222° (written 222°).",
    "q.14.1-05.hints": [
      "Draw a north line at B; it is parallel to the north line at A.",
      "Looking from B back to A, you have turned an extra half turn (180°) compared with the direction from A to B.",
      "077° + 180° = ?"
    ],
    "q.14.1-05.explain": "Alternate angles give another 180°: 77° + 180° = 257°.",
    "q.14.1-06.hints": [
      "244° is greater than 180°, so when you reverse the direction do you add or subtract 180°?",
      "244° − 180° = ?",
      "Write three digits: 064°. You enter 64."
    ],
    "q.14.1-06.explain": "A bearing > 180° means subtract 180°: 244° − 180° = 64°, written 064°.",
    "q.14.1-07.hints": [
      "Try a specific number: if m = 60, what is the bearing of X from Y?",
      "Is the result less than 360°? Could it be negative?",
      "Which expression gives 240° when m = 60?"
    ],
    "q.14.1-07.explain": "When m < 180°, the reverse bearing is m + 180°. m − 180 would be negative; 360 − m and 180 − m only measure the wrong way round or incorrectly.",
    "q.14.1-08.hints": [
      "Should a bearing be measured clockwise or anticlockwise?",
      "A full turn is 360°. If you go 32° anticlockwise, how far must you go clockwise?",
      "360° − 32° = ?"
    ],
    "q.14.1-08.explain": "A bearing is ALWAYS measured CLOCKWISE. 32° anticlockwise means 360° − 32° = 328°. Freya is wrong because she measured anticlockwise.",
    "q.14.1-09.hints": [
      "After walking north, is the lake north or south of Taylor?",
      "If the lake is lower (further south), is the clockwise turn from north to the lake more or less?",
      "Try a quick sketch: the bearing to a point due east is 090°."
    ],
    "q.14.1-09.explain": "Taylor walked north, so the lake is lower and closer to east/south, so the turn from north is bigger: the bearing is larger than 070°.",
    "q.14.1-10.hints": [
      "What is the bearing of A from B? (reverse 065°)",
      "Angle ABC lies between the direction BA (245°) and the direction BC (140°); how many degrees apart are those two directions?",
      "Take 140° away from 245°."
    ],
    "q.14.1-10.explain": "Bearing of A from B = 065° + 180° = 245°. BC has bearing 140°. Angle ABC = 245° − 140° = 105°.",
    "q.14.2-01.hints": [
      "Is AB horizontal or vertical? What is the y-coordinate of the middle point?",
      "How many squares is it from A to B? What is half of that?",
      "From A go right half that distance."
    ],
    "q.14.2-01.explain": "AB is horizontal and 4 squares long, half is 2 squares. From x = 1 go 2 squares to x = 3, y = 2: midpoint (3, 2).",
    "q.14.2-02.hints": [
      "Is EF horizontal or vertical? What is the x-coordinate of the middle point?",
      "How many squares is it from F up to E? What is half of that?",
      "From F go up half that distance."
    ],
    "q.14.2-02.explain": "EF is vertical and 4 squares long; half is 2 squares. From y = 1 go up 2 squares to y = 3: midpoint (2, 3).",
    "q.14.2-03.hints": [
      "From P to the middle point you go half the distance from P to Q. What is half of 8 squares and 4 squares?",
      "From P(−3, −2) go right 4 squares: what is x?",
      "Go up 2 squares: what is y?"
    ],
    "q.14.2-03.explain": "Half: 4 squares across and 2 up. (−3 + 4, −2 + 2) = (1, 0). Another way: ((−3 + 5)/2, (−2 + 2)/2) = (1, 0).",
    "q.14.2-04.hints": [
      "The two points have the same x-coordinate, so what is the x-coordinate of the midpoint?",
      "The y-coordinate of the midpoint is the mean of 11 and 2: add then divide by what?",
      "(11 + 2) ÷ 2 = ?"
    ],
    "q.14.2-04.explain": "(11 + 2) ÷ 2 = 6.5 so the midpoint is (4, 6.5). (4, 9) takes the difference 11 − 2; (4, 4½) takes half the difference; (8, 13) adds but forgets to divide by 2.",
    "q.14.2-05.hints": [
      "Add the two x-coordinates: what is −5 + 3?",
      "Add the two y-coordinates: what is 5 + 1?",
      "Divide each sum by 2."
    ],
    "q.14.2-05.explain": "(−5 + 3) ÷ 2 = −1 and (5 + 1) ÷ 2 = 3. The midpoint is (−1, 3).",
    "q.14.2-06.hints": [
      "Work out the x-coordinate yourself: what is (−5 + (−1)) ÷ 2?",
      "The y-coordinate: what is (−8 + 9) ÷ 2?",
      "Compare with the two learners' results. Does the order of adding change the sum?"
    ],
    "q.14.2-06.explain": "(−5 − 1) ÷ 2 = −3 and (−8 + 9) ÷ 2 = ½: the answer is (−3, ½) as Hassan says. Shen worked out −5 + (−1) as −4 (wrong). Changing the order of adding does not change the sum, so Shen's mistake is a calculation error.",
    "q.14.2-07.hints": [
      "From the end point (2, 5) to the midpoint (4, 1), how much does x change and how much does y change?",
      "To reach the other end point, go exactly the same distance again.",
      "Add those changes to (4, 1)."
    ],
    "q.14.2-07.explain": "From (2, 5) to (4, 1): +2 in x, −4 in y. The other end = (4 + 2, 1 − 4) = (6, −3). Another way: 2·(4, 1) − (2, 5).",
    "q.14.2-08.hints": [
      "From (−1, 6) to (7, 2), how much does x change?",
      "How much does y change?",
      "Add the same changes to (7, 2)."
    ],
    "q.14.2-08.explain": "Changes: +8 in x, −4 in y. The other end = (7 + 8, 2 − 4) = (15, −2).",
    "q.14.2-09.hints": [
      "Which pairs of vertices do the two diagonals join?",
      "Find the midpoint of AC, then the midpoint of BD.",
      "Compare the two points you found."
    ],
    "q.14.2-09.explain": "Midpoint of AC = ((−2 + 5)/2, (1 + 2)/2) = (1.5, 1.5). Midpoint of BD = ((0 + 1)/2, (4 − 1)/2) = (0.5, 1.5). The two points are different so ABCD is not a parallelogram.",
    "q.14.2-10.hints": [
      "If the midpoint is (−1, 1) and one end point is (2, 0), how far is the other end point from the midpoint in x and y?",
      "x decreases by 3 from 2 to −1, so by how much does the other end decrease further?",
      "The other end point = 2·(−1, 1) − (2, 0)."
    ],
    "q.14.2-10.explain": "The other end = (2·(−1) − 2, 2·1 − 0) = (−4, 2), which is point F. (The other two segments: B with D and C with E.)",
    "q.14.3-01.hints": [
      "Does the top number of the column vector tell you how many squares right or left?",
      "Does the bottom number tell you how many squares up or down?",
      "A' = (−1 + 3, 1 + 2)."
    ],
    "q.14.3-01.explain": "Vector (3, 2): right 3, up 2. A' = (−1 + 3, 1 + 2) = (2, 3).",
    "q.14.3-02.hints": [
      "For left, is the top number positive or negative?",
      "For down, is the bottom number positive or negative?",
      "The top number is the horizontal movement, the bottom number is the vertical movement."
    ],
    "q.14.3-02.explain": "Left 4 → −4 (top), down 1 → −1 (bottom): (−4, −1). (4, −1) mixes up left and right; (−4, 1) mixes up down and up; (−1, −4) swaps the order.",
    "q.14.3-03.hints": [
      "What does the vector (8, 5) mean: how far right and how far up?",
      "You only need to move vertex C(4, −2).",
      "C' = (4 + 8, −2 + 5)."
    ],
    "q.14.3-03.explain": "C' = (4 + 8, −2 + 5) = (12, 3).",
    "q.14.3-04.hints": [
      "Does a translation change the size of a shape?",
      "Does it change the angles?",
      "What do we call an object and image like this?"
    ],
    "q.14.3-04.explain": "A translation only changes position. Lengths and angles stay the same and the two shapes are congruent. D'F' is still 4 units long.",
    "q.14.3-05.hints": [
      "Add separately: the x-coordinate of L plus the top number of the vector.",
      "The y-coordinate of L plus the bottom number of the vector.",
      "(−2 + 5, 1 + (−4))."
    ],
    "q.14.3-05.explain": "L' = (−2 + 5, 1 − 4) = (3, −3). Marcus adds each coordinate; do not write an equals sign with a whole column as Arun does.",
    "q.14.3-06.hints": [
      "Choose a vertex of X and the matching vertex of X'.",
      "From (1, 1) to (−3, −1), how much does x change? How much does y change?",
      "Write it as a pair (across, up)."
    ],
    "q.14.3-06.explain": "(1, 1) → (−3, −1): x decreases by 4, y decreases by 2. The vector is (−4, −2).",
    "q.14.3-07.hints": [
      "To return to the start, you must go back both horizontally and vertically.",
      "Change the sign of both numbers of (3, −2).",
      "Fin also swapped the order of the two numbers; is that correct?"
    ],
    "q.14.3-07.explain": "The reverse vector of (3, −2) is (−3, 2): change the sign of both numbers and keep the order. Fin swapped the order to (2, −3) so he is wrong.",
    "q.14.3-08.hints": [
      "To go back, how do you reverse the horizontal movement?",
      "And how do you reverse the vertical movement?",
      "Change the sign of both numbers."
    ],
    "q.14.3-08.explain": "Change the sign of both numbers: (−4, 7) → (4, −7).",
    "q.14.3-09.hints": [
      "From E(−5, −1) to E'(−8, 6): how much does x change, how much does y change?",
      "That is exactly the translation vector; apply it to every vertex.",
      "F' = F + vector."
    ],
    "q.14.3-09.explain": "Vector: x: −5 → −8 is −3; y: −1 → 6 is +7, so (−3, 7). F' = (3 − 3, −1 + 7) = (0, 6).",
    "q.14.3-10.hints": [
      "After the two translations, what is the total horizontal movement?",
      "What is the total vertical movement?",
      "3 + (−5) and −2 + 6."
    ],
    "q.14.3-10.explain": "Horizontal: 3 − 5 = −2. Vertical: −2 + 6 = 4. The combined vector is (−2, 4).",
    "q.14.4-01.hints": [
      "How many squares is the vertex (1, 3) from the line x = 3?",
      "Count the same number of squares to the right of the mirror.",
      "The y-coordinate does not change."
    ],
    "q.14.4-01.explain": "It is 2 squares from the mirror, so the image is at x = 3 + 2 = 5, y stays the same: (5, 3).",
    "q.14.4-02.hints": [
      "How many units is it from x = 1 to the line x = 2.5?",
      "The image is on the other side of the mirror, also 1.5 units from the mirror.",
      "2.5 + 1.5 = ?"
    ],
    "q.14.4-02.explain": "The distance to the mirror is 2.5 − 1 = 1.5. The image is at x = 2.5 + 1.5 = 4, y stays the same: (4, 3). Formula: x' = 2·2.5 − 1 = 4.",
    "q.14.4-03.hints": [
      "The line y = 4 is horizontal. How many squares is the vertex (3, 5) from it?",
      "The vertex is above the mirror, so which side is the image on?",
      "y' = 4 − 1."
    ],
    "q.14.4-03.explain": "It is 1 square from the mirror (above) so the image is 1 square below the mirror: y = 3. The image is (3, 3).",
    "q.14.4-04.hints": [
      "How many units is it from y = 3 down to the line y = −0.5?",
      "The image is below the mirror, the same distance away.",
      "−0.5 − 3.5 = ?"
    ],
    "q.14.4-04.explain": "The distance to the mirror is 3 − (−0.5) = 3.5. The image is at y = −0.5 − 3.5 = −4: (−3, −4). Formula y' = 2·(−0.5) − 3 = −4.",
    "q.14.4-05.hints": [
      "Is the equation y = −1 a horizontal or vertical line?",
      "How many units vertically is the vertex (2, 2) from the line y = −1?",
      "−1 − 3 = ?"
    ],
    "q.14.4-05.explain": "y = −1 is a HORIZONTAL line. (2, 2) is 3 from the mirror, the image is at y = −1 − 3 = −4: (2, −4). (−4, 2) is the result of reflecting in the vertical line x = −1 (Gille's mistake).",
    "q.14.4-06.hints": [
      "What do the x- and y-coordinates of a point on the line y = x look like?",
      "Reflection in y = x swaps the two coordinates.",
      "(3, 6) → (?, ?)."
    ],
    "q.14.4-06.explain": "Reflection in y = x: (x, y) → (y, x). (3, 6) → (6, 3).",
    "q.14.4-07.hints": [
      "The line y = −x goes through (−3, 3), (0, 0), (3, −3).",
      "Rule: (x, y) → (−y, −x), that is swap the two coordinates and then change the sign of both.",
      "With x = −1, y = 2: what are −y and −x? Check: does the midpoint of A and A' lie on y = −x?"
    ],
    "q.14.4-07.explain": "(x, y) → (−y, −x): (−1, 2) → (−2, 1). Check: the midpoint (−1.5, 1.5) satisfies y = −x.",
    "q.14.4-08.hints": [
      "y does not change, so is the mirror vertical or horizontal?",
      "The mirror passes through the midpoint of K and K'.",
      "(2 + 8) ÷ 2 = ?"
    ],
    "q.14.4-08.explain": "The mirror is a vertical line through the midpoint: x = (2 + 8) ÷ 2 = 5, so x = 5.",
    "q.14.4-09.hints": [
      "x does not change, so is the mirror horizontal or vertical?",
      "The mirror passes through the midpoint of L and L'.",
      "Midpoint y-coordinate: (5 + (−3)) ÷ 2."
    ],
    "q.14.4-09.explain": "The mirror is the horizontal line y = (5 − 3) ÷ 2 = 1, so y = 1.",
    "q.14.4-10.hints": [
      "Reflection in x = 3: x' = 2·3 − 6 = ?",
      "After step 1 the point is (0, −2). Reflection in y = 1: y' = 2·1 − (−2).",
      "Put the coordinates together."
    ],
    "q.14.4-10.explain": "Step 1: (6, −2) → (0, −2). Step 2: y' = 2 − (−2) = 4 → (0, 4).",
    "q.14.5-01.hints": [
      "What is the vector from C(2, 1) to (1, 3)?",
      "Rotation 90° clockwise: (a, b) → (b, −a).",
      "Add the new vector to C."
    ],
    "q.14.5-01.explain": "CP = (−1, 2) → rotated 90° clockwise: (2, 1). Image = (2 + 2, 1 + 1) = (4, 2).",
    "q.14.5-02.hints": [
      "What is the vector from the centre (−2, 2) to (−1, 4)?",
      "Rotation 90° anticlockwise: (a, b) → (−b, a).",
      "Add the new vector to the centre."
    ],
    "q.14.5-02.explain": "Vector = (1, 2) → (−2, 1). Image = (−2 − 2, 2 + 1) = (−4, 3).",
    "q.14.5-03.hints": [
      "For a 180° rotation about a centre, the centre is the midpoint of a point and its image.",
      "Image = 2·(centre) − point, for each coordinate.",
      "2·(−1) − (−4) and 2·(−2) − (−1)."
    ],
    "q.14.5-03.explain": "x' = −2 + 4 = 2, y' = −4 + 1 = −3. The image is (2, −3).",
    "q.14.5-04.hints": [
      "What is the vector from the centre (2, 2) to (4, 5)?",
      "Rotation 90° clockwise: (a, b) → (b, −a).",
      "Add to (2, 2)."
    ],
    "q.14.5-04.explain": "Vector (2, 3) → (3, −2). Image = (2 + 3, 2 − 2) = (5, 0).",
    "q.14.5-05.hints": [
      "From (−3, 4) to the centre (1, 0): how much does x change, how much does y change?",
      "The image is the same distance from the centre, on the other side.",
      "(1 + 4, 0 − 4)."
    ],
    "q.14.5-05.explain": "Image = 2·(1, 0) − (−3, 4) = (2 + 3, 0 − 4) = (5, −4).",
    "q.14.5-06.hints": [
      "What is the vector from the centre (2, 3) to (−3, 3)?",
      "Rotation 90° anticlockwise: (a, b) → (−b, a).",
      "Add the new vector to the centre (2, 3)."
    ],
    "q.14.5-06.explain": "Vector = (−5, 0) → (0, −5). Image = (2, 3 − 5) = (2, −2). (−3, −3) rotates about the origin O instead of the centre (2, 3); (2, 8) is a clockwise rotation; (7, 3) is a 180° rotation.",
    "q.14.5-07.hints": [
      "In a 180° rotation, where is the centre of rotation relative to two matching points?",
      "The centre is the midpoint of (2, 3) and (4, 1).",
      "((2 + 4) ÷ 2, (3 + 1) ÷ 2)."
    ],
    "q.14.5-07.explain": "The centre of a 180° rotation is the midpoint of a point and its image: ((2 + 4)/2, (3 + 1)/2) = (3, 2).",
    "q.14.5-08.hints": [
      "From the centre (3, 1), in which direction is P and how far?",
      "In which direction is P' from the centre?",
      "Going from east to north, is that an anticlockwise or clockwise turn?"
    ],
    "q.14.5-08.explain": "CP = (2, 0) points east; CP' = (0, 2) points north. From east to north is a 90° anticlockwise turn.",
    "q.14.5-09.hints": [
      "Call the centre (a, b). The vector from the centre to P is (5 − a, 5 − b).",
      "Rotating 90° clockwise: (u, v) → (v, −u). Image P' = (a + 5 − b, b − (5 − a)).",
      "Solve: a − b = 2 and a + b = 6."
    ],
    "q.14.5-09.explain": "From P' = (a + 5 − b, b − 5 + a) = (7, 1): a − b = 2 and a + b = 6, so a = 4, b = 2. The centre is (4, 2). Check: the vector (1, 3) rotates to (3, −1), adding to (4, 2) gives (7, 1).",
    "q.14.5-10.hints": [
      "Rotation 90° anticlockwise about O: (x, y) → (−y, x). What is the point after step 1?",
      "Step 2: rotate 180° about (1, 1): image = 2·(1, 1) − point.",
      "Work out 2 − (−1) and 2 − 2."
    ],
    "q.14.5-10.explain": "Step 1: (2, 1) → (−1, 2). Step 2: (2 − (−1), 2 − 2) = (3, 0).",
    "q.14.6-01.hints": [
      "With scale factor 4, the distance to the centre of enlargement is multiplied by how much?",
      "What is the distance for the object?",
      "3 × 4 = ?"
    ],
    "q.14.6-01.explain": "The image must be 4 times as far from the centre: 3 × 4 = 12 cm.",
    "q.14.6-02.hints": [
      "From C to P, how many squares right and how many up?",
      "Multiply both numbers by 2.",
      "Add to the coordinates of C."
    ],
    "q.14.6-02.explain": "CP = (2, 1) → multiplied by 2 gives (4, 2). Image = (1 + 4, 1 + 2) = (5, 3).",
    "q.14.6-03.hints": [
      "From the centre (1, 1) to (4, 2): how many squares right and how many up?",
      "Multiply those two numbers by the scale factor 3.",
      "Add to (1, 1)."
    ],
    "q.14.6-03.explain": "CP = (3, 1) → (9, 3). Image = (1 + 9, 1 + 3) = (10, 4).",
    "q.14.6-04.hints": [
      "What is the vector from (1, 1) to (2, 3)?",
      "Multiply by 3.",
      "Add to (1, 1)."
    ],
    "q.14.6-04.explain": "CP = (1, 2) → (3, 6). Image = (1 + 3, 1 + 6) = (4, 7).",
    "q.14.6-05.hints": [
      "From the centre (5, 2) to (4, 4): 1 square left and 2 squares up.",
      "Double it: how many squares left and how many up?",
      "Add to (5, 2)."
    ],
    "q.14.6-05.explain": "CP = (−1, 2) → (−2, 4). Image = (5 − 2, 2 + 4) = (3, 6).",
    "q.14.6-06.hints": [
      "From the centre (1, 1) to P is (1, 2).",
      "From the centre to P' is (4, 8).",
      "Scale factor = 4 ÷ 1."
    ],
    "q.14.6-06.explain": "CP = (1, 2) and CP' = (4, 8) so CP' is 4 times CP. The scale factor k = 4.",
    "q.14.6-07.hints": [
      "If the centre is C, then C + 4·(A − C) must equal A'.",
      "Try Zara's centre: A − C = (−3 + 4, −2 + 3).",
      "Work out C + 4·(A − C) for each centre and compare with (0, 1)."
    ],
    "q.14.6-07.explain": "Zara's centre (−4, −3): A − C = (1, 1), multiplied by 4 gives (4, 4), add to C: (0, 1) = A'. Marcus's centre (−3, −4): A − C = (0, 2) → (0, 8) → image (−3, 4) ≠ A'. Zara is correct.",
    "q.14.6-08.hints": [
      "Multiplying the coordinates directly is only correct when the centre is where?",
      "What is the vector from the centre (1, 1) to (2, 2)? Multiply by 3.",
      "Add to (1, 1)."
    ],
    "q.14.6-08.explain": "CP = (1, 1) → (3, 3). Image = (1 + 3, 1 + 3) = (4, 4). (6, 6) comes from multiplying the coordinates directly: this is only right when the centre is the origin O(0, 0), so it is a counterexample to Arun's idea.",
    "q.14.6-09.hints": [
      "The centre C, P and P' are in a straight line; CP' = 2·CP.",
      "So P is the midpoint of C and P'.",
      "C = 2P − P'."
    ],
    "q.14.6-09.explain": "CP' = 2·CP so P is the midpoint of CP'. C = 2·(4, 3) − (6, 5) = (2, 1). Check: (2, 1) + 2·(2, 2) = (6, 5).",
    "q.14.6-10.hints": [
      "What is the vector from the centre (1, 2) to (3, 3)? Multiply by 2 then add to the centre.",
      "What is the point after the enlargement?",
      "Then add the translation vector (−2, 3)."
    ],
    "q.14.6-10.explain": "CP = (2, 1) → (4, 2): image (5, 4). Translate by (−2, 3): (3, 7).",
    "q.ch-01.q": "Ship A sails straight from port O on a bearing of 050°. To return directly to port O in a straight line, what bearing must the ship sail on?",
    "q.ch-01.hints": [
      "To go back you go in the opposite direction; how many degrees different is the opposite direction?",
      "050° is less than 180°, so do you add or subtract 180°?",
      "50° + 180° = ?"
    ],
    "q.ch-01.explain": "The opposite direction: 50° + 180° = 230°, written 230°.",
    "q.ch-02.q": "On the coordinate plane, M(2, −1) is the midpoint of line segment AB and A is (−4, 3). Find the coordinates of point B.",
    "q.ch-02.hints": [
      "From A to M, how much does x increase and how much does y change?",
      "B is the same distance from M as A is, in the same direction.",
      "B = 2M − A."
    ],
    "q.ch-02.explain": "B = (2·2 − (−4), 2·(−1) − 3) = (8, −5).",
    "q.ch-03.q": "Triangle ABC has A(1, 2), B(7, 2), C(4, 8). Let M be the midpoint of side BC. Find the sum of the x- and y-coordinates of M.",
    "q.ch-03.hints": [
      "For the midpoint M of B(7, 2) and C(4, 8): what is the mean x-coordinate?",
      "What is the mean y-coordinate of 2 and 8?",
      "M is (5.5, 5); add the two numbers."
    ],
    "q.ch-03.explain": "M = ((7 + 4)/2, (2 + 8)/2) = (5.5, 5). Sum = 10.5.",
    "q.ch-04.q": "Point A(2, −3) is translated 4 squares right and 1 square up, then translated 6 squares left and 5 squares down. Find the coordinates of the final image.",
    "q.ch-04.hints": [
      "After the first translation, where is A?",
      "(6, −2) then 6 left and 5 down.",
      "Or combine 4 − 6 in x and 1 − 5 in y."
    ],
    "q.ch-04.explain": "(2, −3) → (6, −2) → (0, −7).",
    "q.ch-05.q": "Point P(7, 2) is reflected in the line x = 3, then the image is reflected in the line y = −1. Find the coordinates of the final point.",
    "q.ch-05.hints": [
      "Reflection in x = 3: x' = 2·3 − 7.",
      "After step 1 the point is (−1, 2).",
      "Reflection in y = −1: y' = 2·(−1) − 2."
    ],
    "q.ch-05.explain": "(7, 2) → (−1, 2) → (−1, −2 − 2) = (−1, −4).",
    "q.ch-06.q": "Point P(2, 3) is rotated 90° anticlockwise about the origin O, then reflected in the y-axis. Find the coordinates of the final image.",
    "q.ch-06.hints": [
      "Rotation 90° anticlockwise: (x, y) → (−y, x).",
      "After the rotation: (−3, 2). For a reflection in the y-axis, which coordinate changes sign?",
      "Change the sign of the x-coordinate."
    ],
    "q.ch-06.explain": "(2, 3) → (−3, 2) → (3, 2).",
    "q.ch-07.q": "A triangular garden plot with area 18 m² is enlarged to a new plan with area 162 m². What is the scale factor of the enlargement?",
    "q.ch-07.hints": [
      "The area is multiplied by how much?",
      "162 ÷ 18 = ?",
      "Area is multiplied by k², so k is the square root of 9."
    ],
    "q.ch-07.explain": "162 ÷ 18 = 9 = k², so k = 3.",
    "q.ch-08.q": "Three towns A, B, C: B is on a bearing of 070° from A, C is on a bearing of 160° from B, and AB = BC. Find the bearing of C from A.",
    "q.ch-08.hints": [
      "What is the bearing of A from B? How many degrees is angle ABC?",
      "What are the base angles of an isosceles triangle with a right angle at B?",
      "Direction AC differs from AB by the base angle, on which side? Add that angle to 70°."
    ],
    "q.ch-08.explain": "A from B: 250°, BC = 160° so ∠ABC = 90°. The isosceles triangle has base angles of 45°. Bearing of AC = 70° + 45° = 115°.",
    "q.ch-09.q": "A rectangle measuring 4 cm × 6 cm is enlarged with scale factor 1.5, then translated to another position. Find the perimeter of the final shape.",
    "q.ch-09.hints": [
      "Does a translation change the size?",
      "What are the dimensions after the enlargement?",
      "6 cm × 9 cm: perimeter 2 × (6 + 9)."
    ],
    "q.ch-09.explain": "A translation does not change size. After the enlargement: 6 cm × 9 cm, perimeter = 2 × 15 = 30 cm.",
    "q.ch-10.q": "Given A(1, 5) and B(7, 1). Let A' be the reflection of A in the line x = 4. Find the coordinates of the midpoint of A'B.",
    "q.ch-10.hints": [
      "Find A' first: x' = 2·4 − 1.",
      "A'(7, 5) and B(7, 1) have the same x-coordinate.",
      "The mean of the y-coordinates 5 and 1."
    ],
    "q.ch-10.explain": "A' = (7, 5). The midpoint of A'(7, 5) and B(7, 1) is (7, 3)."
  },
  vi: {
    "q.14.6-09.howto": "Tìm tâm phóng to: điểm cố định mà phép phóng to lấy làm gốc. Nhập tọa độ của điểm đó.",
    "q.14.5-09.howto": "Tìm điểm cố định mà P quay quanh để tới P'. Nhập tọa độ của điểm đó.",
    "q.14.5-07.howto": "Tìm điểm cố định mà tam giác A quay quanh để trùng với tam giác B. Nhập tọa độ của điểm đó.",
    "q.14.4-09.howto": "Tìm trục đối xứng biến L thành L'. Viết phương trình của đường thẳng đó (bắt đầu bằng x = hoặc y =).",
    "q.14.4-08.howto": "Tìm trục đối xứng biến K thành K'. Viết phương trình của đường thẳng đó (bắt đầu bằng x = hoặc y =).",
    "q.14.3-10.howto": "Tìm một phép tịnh tiến có cùng tác dụng như thực hiện cả hai phép tịnh tiến. Nhập dạng (ngang, dọc).",
    "q.14.3-09.howto": "F' là vị trí mới của đỉnh F sau khi tịnh tiến hình vuông. Chỉ nhập tọa độ của F'.",
    "q.14.3-08.howto": "Tìm phép tịnh tiến đưa hình trở về đúng vị trí ban đầu. Nhập dạng (ngang, dọc).",
    "q.14.3-06.howto": "Tìm xem tam giác X di chuyển sang ngang và lên bao nhiêu để tới X'. Nhập vectơ cột dạng (ngang, dọc), dùng dấu trừ khi sang trái hoặc xuống dưới.",
    "q.14.3-05.howto": "L' là vị trí mới của đỉnh L sau phép tịnh tiến. Chỉ nhập tọa độ của L'.",
    "q.14.3-03.howto": "C' là vị trí mới của đỉnh C sau khi tịnh tiến hình chữ nhật. Chỉ nhập tọa độ của C'.",
    "q.14.2-10.howto": "Tìm xem trong năm điểm từ B đến F, điểm nào nối với A tạo thành đoạn thẳng có trung điểm (−1; 1). Nhập tọa độ của điểm đó.",
    "q.14.2-08.howto": "Em biết trung điểm và một đầu mút của đoạn thẳng. Nhập tọa độ của đầu mút còn lại.",
    "q.14.2-07.howto": "Em biết trung điểm và một đầu mút của đoạn thẳng. Nhập tọa độ của đầu mút còn lại.",
    "q.14.1-10.howto": "Góc ABC là góc tại thị trấn B, nằm giữa đường quay về A và đường đi tiếp tới C. Nhập số đo của góc (độ).",
    "q.14.1-06.howto": "Tìm góc phương vị của Q khi em đứng ở P (hướng quay ngược lại). Nhập số độ.",
    "q.14.1-05.howto": "Tìm góc phương vị của A khi em đứng ở B (hướng quay ngược lại). Nhập số độ.",
    "q.14.1-01.q": "Trong hình, tìm góc phương vị của B từ A. (Cung nét đứt là góc đo từ hướng Bắc theo chiều kim đồng hồ; ở đây đường thẳng tạo với hướng Bắc một góc 40°.)",
    "q.14.1-02.q": "Trong hình, B nằm ở phía tây nam của A. Góc giữa AB và hướng Nam, đo theo chiều kim đồng hồ từ hướng Nam, là 35°. Viết góc phương vị của B từ A.",
    "q.14.1-03.q": "Góc phương vị 330° chỉ về hướng nào?",
    "q.14.1-03.choices": [
      "Hơi lệch về phía tây của hướng bắc",
      "Hơi lệch về phía đông của hướng bắc",
      "Hơi lệch về phía tây của hướng nam",
      "Hơi lệch về phía đông của hướng nam"
    ],
    "q.14.1-04.q": "Hình vẽ cho thấy một trường học và một cửa hàng. Góc phương vị của cửa hàng từ trường là 042°. Tính góc phương vị của trường từ cửa hàng.",
    "q.14.1-05.q": "Cách làm của Marcus dùng các góc so le trong. Trong hình, góc phương vị của B từ A là 077°. Dùng cách của bạn để tính góc phương vị của A từ B.",
    "q.14.1-06.q": "Cách làm của Sofia: góc phương vị của P từ Q là 244°. Tính góc phương vị của Q từ P.",
    "q.14.1-07.q": "Góc phương vị của Y từ X là m°, với m nhỏ hơn 180. Biểu thức nào cho góc phương vị của X từ Y?",
    "q.14.1-08.q": "Thị trấn B của Freya nằm ở phía tây bắc của thị trấn A. Góc giữa đường Bắc và AB, đo ngược chiều kim đồng hồ, là 32°. Freya nói góc phương vị của B từ A là 032°. Góc phương vị đúng là bao nhiêu?",
    "q.14.1-09.q": "Seren đi thẳng từ cái cây đến cái hồ theo góc phương vị 070°. Taylor trước tiên đi một đoạn ngắn thẳng về hướng bắc từ cái cây, rồi đi thẳng đến hồ. So với 070°, góc phương vị của Taylor đến hồ là:",
    "q.14.1-09.choices": [
      "Lớn hơn 070°",
      "Nhỏ hơn 070°",
      "Đúng bằng 070°",
      "Không thể biết"
    ],
    "q.14.1-10.q": "Thị trấn B nằm theo góc phương vị 065° từ A. Thị trấn C nằm theo góc phương vị 140° từ B. Tính số đo góc ABC.",
    "q.14.2-01.q": "A(1, 2) và B(5, 2) được cho trên lưới. Viết tọa độ trung điểm của AB.",
    "q.14.2-02.q": "E(2, 1) và F(2, 5) được cho trên lưới. Viết tọa độ trung điểm của EF.",
    "q.14.2-03.q": "P(−3, −2) và Q(5, 2) được cho trên lưới. Đi từ P đến Q em đi 8 ô sang ngang và 4 ô lên. Viết tọa độ trung điểm của PQ.",
    "q.14.2-04.q": "Tìm trung điểm của đoạn thẳng nối (4, 11) và (4, 2).",
    "q.14.2-05.q": "Tính trung điểm của đoạn thẳng nối (−5, 5) và (3, 1).",
    "q.14.2-06.q": "Shen và Hassan tìm trung điểm của (−5, −8) và (−1, 9). Shen viết (−2, −½). Hassan viết (−3, ½). Ai đúng?",
    "q.14.2-06.choices": [
      "Shen",
      "Hassan",
      "Cả hai, vì thứ tự cộng không quan trọng",
      "Không ai đúng"
    ],
    "q.14.2-07.q": "Trung điểm của một đoạn thẳng là (4, 1). Một đầu mút của đoạn thẳng là (2, 5). Tính tọa độ đầu mút còn lại.",
    "q.14.2-08.q": "Trung điểm của một đoạn thẳng là (7, 2). Một đầu mút của đoạn thẳng là (−1, 6). Tính tọa độ đầu mút còn lại.",
    "q.14.2-09.q": "Tứ giác ABCD có các đỉnh A(−2, 1), B(0, 4), C(5, 2) và D(1, −1). Hai đường chéo AC và BD có cùng trung điểm không?",
    "q.14.2-09.choices": [
      "Có, cả hai trung điểm đều là (1½, 1½)",
      "Không: AC có trung điểm (1½, 1½) nhưng BD có trung điểm (½, 1½)",
      "Không: AC có trung điểm (3, 3) nhưng BD có trung điểm (1, 3)",
      "Có, cả hai trung điểm đều là (½, 1½)"
    ],
    "q.14.2-10.q": "Ba đoạn thẳng được tạo từ sáu điểm. Một đoạn dùng A(2, 0). Trung điểm của cả ba đoạn là (−1, 1). Các điểm còn lại là B(−3, −2), C(−7, 5), D(1, 4), E(5, −3) và F(−4, 2). Điểm nào được nối với A? Viết tọa độ của nó.",
    "q.14.3-01.q": "Điểm A(−1, 1) được tịnh tiến theo vectơ cột (3 sang ngang, 2 lên), viết là (3, 2). Viết tọa độ của A'.",
    "q.14.3-02.q": "Vectơ cột (ngang, lên) nào tịnh tiến một hình sang trái 4 ô và xuống 1 ô?",
    "q.14.3-03.q": "Hình chữ nhật ABCD có A(−2, 3), B(4, 3), C(4, −2) và D(−2, −2). Nó được tịnh tiến theo vectơ cột (8, 5). Viết tọa độ của C'.",
    "q.14.3-04.q": "Tam giác DEF vuông tại E, góc D = 45° và DF = 4 đơn vị. Nó được tịnh tiến theo vectơ cột (3, −2) thành D'E'F'. Những phát biểu nào đúng? (Chọn tất cả đáp án đúng.)",
    "q.14.3-04.choices": [
      "D'F' = 4 đơn vị",
      "Góc D'E'F' = 90°",
      "Ảnh bằng với vật (congruent)",
      "D'F' dài hơn DF"
    ],
    "q.14.3-05.q": "Tam giác JKL có J(−3, 4), K(−3, 1) và L(−2, 1). Nó được tịnh tiến theo vectơ cột (5, −4). Dùng cách của Marcus, (x, y) + (5, −4), để tìm tọa độ của L'.",
    "q.14.3-06.q": "Tam giác X có các đỉnh (1, 1), (3, 1), (1, 3) được tịnh tiến thành tam giác X' có các đỉnh (−3, −1), (−1, −1), (−3, 1). Viết vectơ cột của phép tịnh tiến dưới dạng (ngang, lên).",
    "q.14.3-07.q": "Bài tập về nhà của Fin: tam giác ABC được tịnh tiến theo vectơ cột (3, −2) thành A'B'C'. Bạn nói vectơ tịnh tiến A'B'C' trở lại ABC là (2, −3). Bạn có đúng không?",
    "q.14.3-07.choices": [
      "Đúng",
      "Không, đó là (−3, 2)",
      "Không, đó là (3, 2)",
      "Không, đó là (−2, 3)"
    ],
    "q.14.3-08.q": "Một hình được tịnh tiến theo vectơ cột (−4, 7). Viết vectơ cột tịnh tiến nó trở lại vị trí ban đầu.",
    "q.14.3-09.q": "Hình vuông EFGH có E(−5, −1) và F(3, −1). Nó được tịnh tiến thành E'F'G'H' và ảnh của E là E'(−8, 6). Tìm tọa độ của F'.",
    "q.14.3-10.q": "Một hình được tịnh tiến theo vectơ cột (3, −2) rồi tịnh tiến tiếp theo (−5, 6). Viết vectơ cột duy nhất cho cùng kết quả.",
    "q.14.4-01.q": "Tam giác có các đỉnh (1, 1), (2, 1) và (1, 3) được phản xạ qua đường thẳng x = 3. Viết ảnh của đỉnh (1, 3).",
    "q.14.4-02.q": "Tam giác có các đỉnh (1, 3), (1, 5) và (2, 4) được phản xạ qua đường thẳng x = 2,5. Viết ảnh của đỉnh (1, 3).",
    "q.14.4-03.q": "Ngũ giác có các đỉnh (2, 7), (4, 7), (4, 6), (3, 5) và (2, 6) được phản xạ qua đường thẳng y = 4. Viết ảnh của đỉnh (3, 5).",
    "q.14.4-04.q": "Hình B có các đỉnh (−4, 1), (−4, 3), (−3, 3), (−3, 2) và (−2, 1). Nó được phản xạ qua đường thẳng y = −0,5. Viết ảnh của đỉnh (−3, 3).",
    "q.14.4-05.q": "Gille phản xạ hình A qua đường thẳng y = −1 nhưng lại vẽ đường gương là một đường thẳng đứng. Hình có một đỉnh tại (2, 2). Ảnh của đỉnh này qua phép phản xạ đúng qua y = −1 là gì?",
    "q.14.4-06.q": "Điểm A(3, 6) được phản xạ qua đường thẳng y = x. Viết tọa độ của A'.",
    "q.14.4-07.q": "Điểm A(−1, 2) được phản xạ qua đường thẳng y = −x. Viết tọa độ của A'. (Gợi ý: quy tắc là (x, y) → (−y, −x). Hãy kiểm tra trên lưới.)",
    "q.14.4-08.q": "Đỉnh K(2, 2) của một hình được phản xạ thành K'(8, 2). Viết phương trình của đường gương.",
    "q.14.4-09.q": "L(−1, 5) được phản xạ thành L'(−1, −3). Viết phương trình của đường gương.",
    "q.14.4-10.q": "Điểm (6, −2) được phản xạ qua đường thẳng x = 3, rồi ảnh được phản xạ qua đường thẳng y = 1. Tìm ảnh cuối cùng.",
    "q.14.5-01.q": "Hình chữ nhật có các đỉnh (1, 1), (2, 1), (2, 3) và (1, 3) được quay 90° cùng chiều kim đồng hồ quanh tâm C(2, 1). Viết ảnh của đỉnh (1, 3).",
    "q.14.5-02.q": "Điểm (−1, 4) được quay 90° ngược chiều kim đồng hồ quanh tâm (−2, 2). Viết tọa độ ảnh của nó.",
    "q.14.5-03.q": "Điểm (−4, −1) được quay một góc 180° quanh tâm (−1, −2). Viết tọa độ ảnh của nó.",
    "q.14.5-04.q": "Quay đỉnh (4, 5) của một hình một góc 90° cùng chiều kim đồng hồ quanh tâm (2, 2). Viết tọa độ ảnh của nó.",
    "q.14.5-05.q": "Quay đỉnh (−3, 4) một góc 180° quanh tâm (1, 0). Viết tọa độ ảnh của nó.",
    "q.14.5-06.q": "Rohan quay điểm (−3, 3) một góc 90° ngược chiều kim đồng hồ quanh tâm (2, 3). Ảnh nào đúng?",
    "q.14.5-07.q": "Tam giác A có các đỉnh (2, 3), (3, 3), (2, 5) được quay một góc 180° thành tam giác B, trong đó đỉnh (2, 3) biến thành (4, 1). Viết tọa độ tâm quay.",
    "q.14.5-08.q": "Điểm P(5, 1) được biến thành P'(3, 3) bởi một phép quay quanh tâm (3, 1). Mô tả nào đúng?",
    "q.14.5-08.choices": [
      "90° ngược chiều kim đồng hồ, tâm (3, 1)",
      "90° cùng chiều kim đồng hồ, tâm (3, 1)",
      "180°, tâm (3, 1)",
      "90° ngược chiều kim đồng hồ, tâm (1, 1)"
    ],
    "q.14.5-09.q": "Một phép quay 90° cùng chiều kim đồng hồ biến P(5, 5) thành P'(7, 1). Tìm tọa độ tâm quay.",
    "q.14.5-10.q": "Điểm P(2, 1) được quay 90° ngược chiều kim đồng hồ quanh gốc tọa độ, rồi ảnh được quay một góc 180° quanh tâm (1, 1). Tìm ảnh cuối cùng.",
    "q.14.6-01.q": "Một hình được phóng to với hệ số 4. Một góc của vật cách tâm phóng to 3 cm. Góc tương ứng của ảnh cách tâm phóng to bao xa?",
    "q.14.6-02.q": "Điểm P(3, 2) được phóng to với hệ số 2 quanh tâm C(1, 1), như trên lưới. Tìm tọa độ ảnh của P.",
    "q.14.6-03.q": "Tam giác có các đỉnh (2, 2), (2, 3) và (4, 2). Nó được phóng to với hệ số 3 và tâm phóng to (1, 1). Viết ảnh của đỉnh (4, 2).",
    "q.14.6-04.q": "Với cùng tam giác đó (các đỉnh (2, 2), (2, 3), (4, 2)), hệ số 3 và tâm (1, 1), viết ảnh của đỉnh (2, 3).",
    "q.14.6-05.q": "Hình thang có các đỉnh (3, 2), (7, 2), (5, 4) và (4, 4). Nó được phóng to với hệ số 2 và tâm (5, 2). Viết ảnh của đỉnh (4, 4).",
    "q.14.6-06.q": "Một hình được phóng to quanh tâm (1, 1). Đỉnh P(2, 3) của vật chuyển đến P'(5, 9). Hệ số tỉ lệ là bao nhiêu?",
    "q.14.6-07.q": "Hình ABCD được phóng to với hệ số 4. Đỉnh A(−3, −2) biến thành A'(0, 1). Marcus nghĩ tâm phóng to là (−3, −4). Zara nghĩ nó là (−4, −3). Ai đúng?",
    "q.14.6-07.choices": [
      "Marcus",
      "Zara",
      "Cả hai",
      "Không ai đúng"
    ],
    "q.14.6-08.q": "Đỉnh (2, 2) của tam giác được phóng to với hệ số 3 quanh tâm (1, 1). Arun nói em chỉ cần nhân tọa độ với 3. Ảnh đúng là gì?",
    "q.14.6-09.q": "Một hình được phóng to với hệ số 2. Đỉnh P(4, 3) biến thành P'(6, 5). Tìm tọa độ tâm phóng to.",
    "q.14.6-10.q": "Điểm (3, 3) được phóng to với hệ số 2 quanh tâm (1, 2), rồi ảnh được tịnh tiến theo vectơ cột (−2, 3). Tìm ảnh cuối cùng."
  }
});
