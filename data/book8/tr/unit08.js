window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 8,
  en: {
    "u.realm": "Architect City",
    "u.story": "You are an intern for a brilliant architect. To build the tallest tower in the city, you must know how quadrilaterals fit together, measure the circumference of round domes and draw plans seen from the front, the side and from above.",
    "g.0.def": "A polygon with all sides equal and all angles equal.",
    "g.1.def": "A flat shape with four straight sides.",
    "g.2.def": "The number of times a shape fits onto itself during one full turn.",
    "g.3.def": "The length around a circle, C = πd.",
    "g.4.def": "The ratio of the circumference of a circle to its diameter, about 3.14.",
    "g.5.def": "Faces, vertices and edges of a solid: flat surfaces, corners, and the lines where two faces meet.",
    "g.6.def": "The view from above.",
    "g.7.def": "The view from the front / from the side.",
    "s.8.1.learn": [
      "A regular n-sided polygon has n equal sides, n lines of symmetry and rotational symmetry of order n.",
      "Seven quadrilaterals to remember: square, rectangle, parallelogram, rhombus, kite, trapezium, isosceles trapezium.",
      "Parallelogram: two pairs of parallel and equal sides, opposite angles equal. Rectangle: also 4 right angles.",
      "Kite: two pairs of adjacent equal sides, one pair of equal opposite angles. Isosceles trapezium: one pair of parallel sides, the two non-parallel sides equal, two pairs of equal angles.",
      "Hierarchy of quadrilaterals: a square is a special rectangle and also a special rhombus; a rhombus is a special parallelogram and a special kite."
    ],
    "ex.8.1.q": "Sketch a regular octagon, describe its sides and symmetry. How many lines of symmetry does it have?",
    "ex.8.1.steps": [
      "A regular octagon has 8 equal sides.",
      "It has 8 lines of symmetry.",
      "Turned through a full turn it fits onto itself 8 times: rotational symmetry of order 8."
    ],
    "ex.8.1.prompts": [
      "What does 'octa' mean? How many sides does such a regular polygon have, and how are its sides and angles alike?",
      "Along which lines can a regular polygon be folded in half? Count both the lines through vertices and the lines through the midpoints of sides.",
      "Turn the shape about its centre until it first fits onto itself: how many degrees is each turn, and how many fitting positions are there in one turn?"
    ],
    "ex.8.1.twist": "Through at least how many degrees about its centre must a regular decagon (10 sides) be turned to fit onto itself?",
    "s.8.2.learn": [
      "The circumference divided by the diameter of any circle is always about 3.14; this number is called π.",
      "Formula: C = πd, where d is the diameter. Since d = 2r, we also have C = 2πr.",
      "π ≈ 3.14 or 3.142 or 22/7. The π button on a calculator gives a more accurate value.",
      "Given C, find the diameter: d = C ÷ π; find the radius: r = C ÷ 2π.",
      "Perimeter of a semicircle = half the circumference of the circle + the diameter. Always add the straight edge too."
    ],
    "ex.8.2.q": "Work out the circumference of a circle with radius 4 m (π = 3.14), rounded to 1 decimal place.",
    "ex.8.2.steps": [
      "d = 2 × 4 = 8 m.",
      "C = πd = 3.14 × 8 = 25.12",
      "Rounded: 25.1 m."
    ],
    "ex.8.2.prompts": [
      "Does the circumference formula use the diameter or the radius? From a radius of 4 m, how do you find the diameter?",
      "Substitute π = 3.14 and d into the formula: how big is C?",
      "The question asks for rounding to 1 decimal place: what do you look at in the second decimal place to decide?"
    ],
    "ex.8.2.twist": "If the radius doubles to 8 m, what is the new circumference (π = 3.14, rounded to 1 decimal place) in metres?",
    "s.8.3.learn": [
      "A face is a flat surface, a vertex is a corner, an edge is where two faces meet. A cuboid: 6 faces, 8 vertices, 12 edges.",
      "Euler's formula for solids with flat faces: F + V = E + 2.",
      "The plan is the view from above, the front elevation is the view from the front, the side elevation is the view from the side.",
      "Drawing to scale: convert all dimensions to the same unit then divide by the right-hand number of the ratio. A scale of 1:5 means 1 cm on the drawing is 5 cm in real life.",
      "An n-sided prism has n + 2 faces, 2n vertices, 3n edges; a pyramid with an n-sided base has n + 1 faces, n + 1 vertices, 2n edges."
    ],
    "ex.8.3.q": "A cuboid is 35 cm × 10 cm × 15 cm (length × height × width). Draw the three views at scale 1:5. What are the dimensions of the plan (view from above), as length × width in cm?",
    "ex.8.3.steps": [
      "Divide each dimension by 5: 7 cm, 2 cm, 3 cm.",
      "Plan: 7 × 3 cm.",
      "Front elevation: 7 × 2 cm; side elevation: 3 × 2 cm."
    ],
    "ex.8.3.prompts": [
      "A scale of 1:5 means how does each edge on the drawing compare with real life? Apply it to each of the dimensions 35, 10, 15.",
      "Looking from above, which dimensions of the box do you see (and which do you not see)?",
      "Looking from the front, then from the side: which pair of dimensions does each view show?"
    ],
    "ex.8.3.twist": "If the scale changes to 1:10, what is the area in cm² of the plan on the drawing (real box 35 cm × 15 cm)?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Grade 7–8 problems on quadrilaterals, polygons, circles and solids are waiting for you at the city gate!",
    "q.8.1-01.hints": [
      "How many sides does a regular hexagon have?",
      "For a regular polygon, how is the number of lines of symmetry related to the number of sides?",
      "The number of lines of symmetry equals the number of sides. So how many?"
    ],
    "q.8.1-01.explain": "A regular polygon has as many lines of symmetry as sides. A regular hexagon has 6 sides so it has 6 lines of symmetry.",
    "q.8.1-02.hints": [
      "When a regular polygon is turned through exactly one full turn, how many times does it fit onto itself?",
      "Which side's position can each side be placed in?",
      "The order of rotational symmetry equals the number of sides."
    ],
    "q.8.1-02.explain": "A regular n-sided polygon has rotational symmetry of order n. A nonagon has 9 sides so the order is 9.",
    "q.8.1-03.hints": [
      "How is the order of rotational symmetry of a regular polygon related to the number of sides?",
      "Are the two numbers equal or different?",
      "The number of sides equals the order of rotational symmetry."
    ],
    "q.8.1-03.explain": "The number of sides of a regular polygon equals its order of rotational symmetry and the number of lines of symmetry, so it has 15 sides.",
    "q.8.1-04.hints": [
      "Fold the rectangle along the vertical line through the centre: do the two halves match?",
      "What about folding along the horizontal line through the centre?",
      "Fold along a diagonal: do the two halves match? Why?"
    ],
    "q.8.1-04.explain": "A rectangle (not a square) has 2 lines of symmetry: the two midlines. A common mistake is choosing 4 by thinking the diagonals are also lines of symmetry; in fact only a square also has the 2 diagonals as lines of symmetry.",
    "q.8.1-05.hints": [
      "Does a rectangle have two pairs of parallel sides and 4 right angles?",
      "Does Zara's description say the sides are equal?",
      "So what can we definitely call it, and what can't we be sure of?"
    ],
    "q.8.1-05.explain": "Two pairs of parallel sides and 4 right angles give a rectangle. We do not know that the 4 sides are equal so we cannot conclude it is a square. Mistake: confusing a rectangle with a square.",
    "q.8.1-06.hints": [
      "Look at a kite: the two upper sides are equal, the two lower sides are equal. Are those pairs adjacent or opposite?",
      "The two angles on the left and right are equal; what about the top and bottom angles?",
      "Rule out the options that describe a square, a trapezium and a parallelogram."
    ],
    "q.8.1-06.explain": "A kite has two pairs of adjacent equal sides and only one pair of equal opposite angles. The other options describe a square, a trapezium and a parallelogram respectively.",
    "q.8.1-07.hints": [
      "Draw an isosceles trapezium: are the two angles at the longer base equal?",
      "What about the two angles at the shorter base?",
      "Count the pairs of equal angles."
    ],
    "q.8.1-07.explain": "An isosceles trapezium has two equal angles at the longer base and two equal angles at the shorter base: 2 pairs of equal angles.",
    "q.8.1-08.hints": [
      "'Special' means: the shape has all the properties of the other, plus extra conditions. Does a square have all the properties of a rectangle?",
      "Does a rhombus have two pairs of parallel sides? What about a kite?",
      "Must a rectangle have 4 equal sides?"
    ],
    "q.8.1-08.explain": "A square is a special rectangle; a rhombus is a special parallelogram. The other way round: a rhombus is a special kite (not the reverse), and a rectangle does not need 4 equal sides so it is not a rhombus.",
    "q.8.1-09.hints": [
      "Does the shape satisfy the definition of a square?",
      "It has 4 right angles, so is it a rectangle? It has 4 equal sides, so is it a rhombus?",
      "Can a shape with both pairs of parallel sides have 'exactly one' pair?"
    ],
    "q.8.1-09.explain": "This is a square, and a square is both a rectangle and a rhombus. It has 2 pairs of parallel sides so it cannot be a shape with exactly one pair of parallel sides.",
    "q.8.1-10.hints": [
      "How many degrees is a full turn?",
      "A regular octagon fits onto itself 8 times in one turn.",
      "Divide 360° by 8."
    ],
    "q.8.1-10.explain": "The order of rotational symmetry is 8 so the smallest angle of turn is 360° ÷ 8 = 45°.",
    "q.8.2-01.hints": [
      "What is the formula for circumference when you know the diameter?",
      "Substitute d = 6 and π = 3.14 into the formula.",
      "Work out 3.14 × 6."
    ],
    "q.8.2-01.explain": "C = πd = 3.14 × 6 = 18.84 cm, rounded to 18.8 cm.",
    "q.8.2-02.hints": [
      "Were you given the diameter or the radius?",
      "Use C = πd.",
      "Work out 3.14 × 25."
    ],
    "q.8.2-02.explain": "C = πd = 3.14 × 25 = 78.5 cm.",
    "q.8.2-03.hints": [
      "The question gives the radius. The diameter is how many times the radius?",
      "d = 2 × 7 = ? then use C = πd.",
      "Work out 3.142 × 14."
    ],
    "q.8.2-03.explain": "d = 2r = 14 cm. C = 3.142 × 14 = 43.988 ≈ 43.99 cm.",
    "q.8.2-04.hints": [
      "Find the diameter from the radius first.",
      "d = 5.2 cm. Then C = πd.",
      "Work out 3.14 × 5.2."
    ],
    "q.8.2-04.explain": "d = 2 × 2.6 = 5.2 cm; C = 3.14 × 5.2 = 16.328 ≈ 16.3 cm.",
    "q.8.2-05.hints": [
      "The radius is 5 cm. What is the diameter?",
      "Circumference = π × diameter.",
      "Compare your result with the 4 options; does any option come from using π × radius or πr²?"
    ],
    "q.8.2-05.explain": "d = 10 so C = 3.14 × 10 = 31.4 cm. 15.7 is wrong because it uses π × r; 78.5 is the area πr² (not the circumference); 62.8 is double because it uses 2π × d.",
    "q.8.2-06.hints": [
      "Use the π button on the calculator instead of 3.14.",
      "C = π × 9.",
      "Round to 2 decimal places."
    ],
    "q.8.2-06.explain": "C = π × 9 = 28.274... ≈ 28.27 cm.",
    "q.8.2-07.hints": [
      "C = πd. To find d, which inverse operation do you need?",
      "d = C ÷ π.",
      "Work out 39 ÷ π."
    ],
    "q.8.2-07.explain": "d = C ÷ π = 39 ÷ π = 12.414... ≈ 12.4 cm (124 mm).",
    "q.8.2-08.hints": [
      "C = 2πr. How do you find r?",
      "r = C ÷ (2π).",
      "Work out 9.25 ÷ (2 × π)."
    ],
    "q.8.2-08.explain": "r = C ÷ 2π = 9.25 ÷ 6.2832 = 1.472... ≈ 1.47 m.",
    "q.8.2-09.hints": [
      "How many parts does the perimeter of a semicircle have?",
      "The curved part is half the circumference of the circle: πd ÷ 2. The straight part is the diameter.",
      "Work out π × 20 ÷ 2 then add 20."
    ],
    "q.8.2-09.explain": "Arc = π × 20 ÷ 2 = 31.416; adding the diameter 20 gives 51.416 ≈ 51.42 cm. Common mistake: forgetting to add the straight edge.",
    "q.8.2-10.hints": [
      "Semicircle: arc + diameter 15 m. How long is the arc?",
      "Quarter-circle sector: arc = 2π × 10 ÷ 4, plus the two radii of 10 m.",
      "Work out both perimeters then compare."
    ],
    "q.8.2-10.explain": "Semicircle: π × 15 ÷ 2 + 15 = 23.56 + 15 = 38.56 m. Quarter-circle: 2π × 10 ÷ 4 + 20 = 15.71 + 20 = 35.71 m. A larger radius does not guarantee a larger perimeter; you must work out both.",
    "q.8.3-01.hints": [
      "Sketch the triangular prism: how many triangular end faces are there?",
      "How many rectangular side faces are there?",
      "Add the two ends to the side faces."
    ],
    "q.8.3-01.explain": "2 triangular ends + 3 rectangular sides = 5 faces.",
    "q.8.3-02.hints": [
      "How many vertices does a square base have?",
      "What about the top vertex?",
      "Add them."
    ],
    "q.8.3-02.explain": "4 vertices at the base + 1 apex = 5 vertices.",
    "q.8.3-03.hints": [
      "How many edges does each hexagonal base have? How many bases are there?",
      "How many lengthways edges join the two bases?",
      "6 + 6 + 6 = ?"
    ],
    "q.8.3-03.explain": "The two bases have 6 + 6 = 12 edges and there are 6 lengthways edges, a total of 18 edges.",
    "q.8.3-04.hints": [
      "Try a cube: F = 6, V = 8, E = 12.",
      "Work out F + V and compare with E.",
      "By how much is F + V larger than E?"
    ],
    "q.8.3-04.explain": "For a cube, F + V = 14 and E = 12, so F + V = E + 2 (Euler's formula). Common mistake: swapping +2 and −2.",
    "q.8.3-05.hints": [
      "Use F + V = E + 2.",
      "Substitute F = 7, E = 15: 7 + V = 17.",
      "Solve for V."
    ],
    "q.8.3-05.explain": "V = E + 2 − F = 15 + 2 − 7 = 10. It is a pentagonal prism.",
    "q.8.3-06.hints": [
      "What shape is the view from above, and which two dimensions does it have?",
      "Divide each real dimension by 5.",
      "Length 6 cm, width 4 cm. Area?"
    ],
    "q.8.3-06.explain": "View from above: a rectangle 30 × 20 cm in real life, drawn as 6 × 4 cm, area 24 cm².",
    "q.8.3-07.hints": [
      "Seen from the front, what shape does a cylinder look like?",
      "The width is the diameter, the height is the height of the cylinder.",
      "Halve both: 7 and 5. Area?"
    ],
    "q.8.3-07.explain": "The front view is a rectangle 14 × 10 cm, drawn at scale 1:2 as 7 × 5 cm, area 35 cm².",
    "q.8.3-08.hints": [
      "Looking from above, what shape of the lying prism do you see?",
      "What about looking from the side?",
      "Which viewing direction does the triangular end face?"
    ],
    "q.8.3-08.explain": "The triangular ends face the front, so looking straight from the front you see a triangle. Looking from above or from the side you see rectangles. Common mistake: thinking the view from above also shows a triangle.",
    "q.8.3-09.hints": [
      "Each column seen from the front is a rectangle of squares.",
      "The column of height 3 has 3 squares, the column of height 2 has 2 squares, the column of height 1 has 1 square.",
      "Add them."
    ],
    "q.8.3-09.explain": "The front view has 3 + 2 + 1 = 6 unit squares.",
    "q.8.3-10.hints": [
      "Convert metres to cm before dividing by the scale.",
      "6 m = 600 cm → 6 cm on the drawing; 2.4 m = 240 cm → ?",
      "Multiply the two dimensions on the drawing."
    ],
    "q.8.3-10.explain": "Length 600 cm ÷ 100 = 6 cm; width 240 cm ÷ 100 = 2.4 cm. Area of the plan = 6 × 2.4 = 14.4 cm².",
    "q.ch-01.q": "Quadrilateral ABCD has angle A = 80°, angle B = 100°, angle C = 70°. Work out the size of angle D.",
    "q.ch-01.hints": [
      "How many degrees do the four angles of a quadrilateral add up to?",
      "Add the three known angles.",
      "Subtract that total from 360°."
    ],
    "q.ch-01.explain": "The angles of a quadrilateral add up to 360°. Angle D = 360° − (80° + 100° + 70°) = 110°.",
    "q.ch-02.q": "A polygon has interior angles that add up to 1440°. How many sides does it have?",
    "q.ch-02.hints": [
      "Which formula gives the sum of the interior angles of an n-sided polygon? (think of splitting into triangles)",
      "(n − 2) × 180° = 1440°.",
      "Solve n − 2 = 8."
    ],
    "q.ch-02.explain": "(n − 2) × 180 = 1440 so n − 2 = 8, n = 10. It is a decagon.",
    "q.ch-03.q": "A convex polygon has 12 sides. How many diagonals does it have altogether? (Hint: number of diagonals = n(n − 3) ÷ 2)",
    "q.ch-03.hints": [
      "How many diagonals can be drawn from each vertex? (not to itself or the two adjacent vertices)",
      "From each vertex there are 12 − 3 = 9 diagonals. For 12 vertices?",
      "Each diagonal is counted twice, so divide by 2."
    ],
    "q.ch-03.explain": "12 × 9 = 108, each diagonal is counted twice so there are 108 ÷ 2 = 54 diagonals.",
    "q.ch-04.q": "A convex polygon has 35 diagonals. How many sides does the polygon have?",
    "q.ch-04.hints": [
      "Use n(n − 3) ÷ 2 = 35.",
      "n(n − 3) = 70. Find two numbers that differ by 3 with product 70.",
      "Try 10 and 7."
    ],
    "q.ch-04.explain": "n(n − 3) = 70. Since 10 × 7 = 70, n = 10.",
    "q.ch-05.q": "Each interior angle of a regular polygon is 150°. How many sides does the regular polygon have?",
    "q.ch-05.hints": [
      "The exterior angle at each vertex equals 180° minus the interior angle. How big is it?",
      "The exterior angles of a convex polygon always add up to 360°.",
      "Divide 360° by 30°."
    ],
    "q.ch-05.explain": "Exterior angle = 180° − 150° = 30°. Number of sides = 360° ÷ 30° = 12.",
    "q.ch-06.q": "A wheel has diameter 70 cm (take π ≈ 22/7). If the wheel rolls 100 turns without slipping, how many metres does it travel?",
    "q.ch-06.hints": [
      "In each turn it travels a distance equal to the circumference of the wheel. What is the circumference?",
      "C = (22/7) × 70 = 220 cm.",
      "Multiply by 100 turns then convert cm to m."
    ],
    "q.ch-06.explain": "C = 22/7 × 70 = 220 cm. 100 turns gives 22000 cm = 220 m.",
    "q.ch-07.q": "A bicycle wheel has radius 35 cm (π ≈ 22/7). To travel 2.2 km, how many turns must the wheel make?",
    "q.ch-07.hints": [
      "What is the diameter? What is the circumference in cm?",
      "C = 2 × 22/7 × 35 = 220 cm. Convert 2.2 km to cm.",
      "2.2 km = 220 000 cm. Divide by the circumference."
    ],
    "q.ch-07.explain": "C = 220 cm = 2.2 m. 2.2 km = 2200 m so the number of turns = 2200 ÷ 2.2 = 1000 turns.",
    "q.ch-08.q": "A right prism has 24 edges in total. How many sides does its base polygon have?",
    "q.ch-08.hints": [
      "A prism with an n-sided base has how many edges on the bases (both bases)?",
      "And how many lengthways edges? In general: 3n edges.",
      "3n = 24."
    ],
    "q.ch-08.explain": "A prism with an n-sided base has n + n + n = 3n edges. 3n = 24 so n = 8 (the base is an octagon).",
    "q.ch-09.q": "A pyramid has a base that is an n-sided polygon and has 14 edges in total. How many vertices does the pyramid have?",
    "q.ch-09.hints": [
      "A pyramid with an n-sided base has n base edges and how many sloping edges?",
      "The total number of edges is 2n. Find n.",
      "Number of vertices = n + 1."
    ],
    "q.ch-09.explain": "Number of edges = n + n = 2n = 14, n = 7. Number of vertices = 7 + 1 = 8 (check: F + V = E + 2 → 8 + 8 = 16 = 14 + 2).",
    "q.ch-10.q": "A quadrilateral has four equal sides and two equal diagonals. What shape is it?",
    "q.ch-10.choices": [
      "Rhombus (not necessarily a square)",
      "Square",
      "Rectangle (not necessarily a square)",
      "Any parallelogram"
    ],
    "q.ch-10.hints": [
      "What is a quadrilateral with 4 equal sides?",
      "When does a rhombus have equal diagonals? (think of its 4 angles)",
      "A rhombus with equal diagonals has right angles."
    ],
    "q.ch-10.explain": "4 equal sides give a rhombus. A rhombus with two equal diagonals is a rectangle, so it has 4 right angles and 4 equal sides: a square.",
    "p.goal": "Explore why every quadrilateral can tessellate the plane without leaving gaps, and design your own tiling pattern.",
    "p.steps": [
      "Draw a large rectangle, cut it into many equal small rectangles and fit them together. At each meeting point four 90° angles add up to 360°.",
      "Draw a kite and then draw a rectangle around it. Tile that rectangle in the same direction. What do you notice? Does this prove that every kite tessellates?",
      "Draw a parallelogram, cut it out and draw around it to make a tiling pattern. Use the property that opposite angles are equal to explain why the angles around a point add up to 360°.",
      "Fit two identical trapezia together to make a parallelogram. From this explain why trapezia tessellate.",
      "On a dotty grid, draw any (irregular) quadrilateral and rotate it so that its four different angles meet at a point."
    ],
    "p.extensions": [
      "Colour your tiling pattern to make a beautiful decorative tile design.",
      "Try a concave quadrilateral (one angle greater than 180°). Can it tessellate?",
      "Find real-life examples of tessellations: floors, floor tiles, honeycombs."
    ],
    "p.reflect": [
      "Why does the fact that the four angles of a quadrilateral add up to 360° help every quadrilateral tessellate?",
      "Is there any quadrilateral that cannot tessellate? How would you explain it?",
      "Of the quadrilaterals you tiled, which pattern do you find the most beautiful and why?"
    ]
  },
  vi: {
    "q.8.3-10.howto": "Hãy hình dung hình chiếu bằng (nhìn từ trên) được vẽ trên giấy theo tỉ lệ đã cho. Nhập diện tích của hình vẽ trên giấy (cm²), không phải diện tích thật.",
    "q.8.3-07.howto": "Hãy hình dung hình nhìn từ phía trước được vẽ trên giấy theo tỉ lệ đã cho. Nhập diện tích của hình vẽ trên giấy, không phải diện tích thật.",
    "q.8.3-06.howto": "Hãy hình dung hình nhìn từ trên được vẽ trên giấy theo tỉ lệ đã cho. Nhập diện tích của hình vẽ trên giấy, không phải diện tích thật của mặt trên.",
    "q.8.1-01.q": "Một lục giác đều có bao nhiêu trục đối xứng?",
    "q.8.1-02.q": "Bậc đối xứng quay của một hình chín cạnh đều (9 cạnh) là bao nhiêu?",
    "q.8.1-03.q": "Một đa giác đều có đối xứng quay bậc 15. Nó có bao nhiêu cạnh?",
    "q.8.1-04.q": "Một hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?",
    "q.8.1-05.q": "Zara nói: 'Tứ giác của tôi có hai cặp cạnh song song và tất cả các góc đều bằng 90°.' Marcus nói: 'Vậy nó chắc chắn là hình vuông.' Marcus có đúng không?",
    "q.8.1-05.choices": [
      "Đúng, nó chắc chắn là hình vuông",
      "Không, nó chắc chắn là hình chữ nhật nhưng có thể không phải hình vuông",
      "Không, nó chắc chắn là hình thoi",
      "Không, nó chắc chắn là hình diều và không phải gì khác"
    ],
    "q.8.1-06.q": "Mô tả nào phù hợp với hình diều?",
    "q.8.1-06.choices": [
      "Hai cặp cạnh kề bằng nhau và một cặp góc đối bằng nhau",
      "Tất cả các cạnh bằng nhau và tất cả các góc bằng 90°",
      "Có đúng một cặp cạnh song song",
      "Hai cặp cạnh song song và các góc đối bằng nhau"
    ],
    "q.8.1-07.q": "Một hình thang cân có bao nhiêu cặp góc bằng nhau?",
    "q.8.1-08.q": "Dùng thứ bậc của các tứ giác. Những phát biểu nào đúng? (chọn tất cả)",
    "q.8.1-08.choices": [
      "Hình vuông là hình chữ nhật đặc biệt",
      "Hình diều là hình thoi đặc biệt",
      "Hình thoi là hình bình hành đặc biệt",
      "Hình chữ nhật là hình thoi đặc biệt"
    ],
    "q.8.1-09.q": "Một tứ giác có cả bốn cạnh bằng nhau và cả bốn góc bằng 90°. Những tên gọi nào mô tả đúng nó? (chọn tất cả)",
    "q.8.1-09.choices": [
      "Hình vuông",
      "Hình chữ nhật",
      "Hình thoi",
      "Hình có đúng một cặp cạnh song song"
    ],
    "q.8.1-10.q": "Góc nhỏ nhất mà em có thể xoay một bát giác đều quanh tâm của nó để nó trùng khít với chính nó là bao nhiêu?",
    "q.8.2-01.q": "Tính chu vi của đường tròn có đường kính 6 cm. Dùng π ≈ 3,14 (đáp án làm tròn 1 chữ số thập phân là được).",
    "q.8.2-02.q": "Tính chu vi của đường tròn có đường kính 25 cm. Dùng π ≈ 3,14.",
    "q.8.2-03.q": "Một đường tròn có bán kính 7 cm. Dùng π ≈ 3,142 và cho chu vi chính xác đến 2 chữ số thập phân.",
    "q.8.2-04.q": "Một đường tròn có bán kính 2,6 cm. Dùng π ≈ 3,14 và cho chu vi đến 1 chữ số thập phân.",
    "q.8.2-05.q": "Một đường tròn có bán kính 5 cm. Chu vi của nó là bao nhiêu? (π ≈ 3,14)",
    "q.8.2-05.choices": [
      "15,7 cm",
      "31,4 cm",
      "78,5 cm",
      "62,8 cm"
    ],
    "q.8.2-06.q": "Dùng nút π trên máy tính. Tính chu vi của đường tròn có đường kính 9 cm, đến 2 chữ số thập phân.",
    "q.8.2-07.q": "Chu vi của một chiếc đĩa tròn là 39 cm. Dùng nút π. Tính đường kính, đến 1 chữ số thập phân.",
    "q.8.2-08.q": "Chu vi của một đường tròn là 9,25 m. Dùng nút π. Tính bán kính đến 2 chữ số thập phân.",
    "q.8.2-09.q": "Tính chu vi của hình bán nguyệt có đường kính 20 cm. Dùng nút π, 2 chữ số thập phân. (Nhớ cạnh thẳng nhé!)",
    "q.8.2-10.q": "Zara nghĩ rằng một hình bán nguyệt đường kính 15 m có chu vi lớn hơn một hình quạt một phần tư bán kính 10 m. Ai đúng? (Tính cả các cạnh thẳng; dùng nút π.)",
    "q.8.2-10.choices": [
      "Zara đúng: bán nguyệt ≈ 38,56 m, quạt một phần tư ≈ 35,71 m",
      "Zara sai: quạt một phần tư lớn hơn vì bán kính của nó lớn hơn",
      "Chúng bằng nhau",
      "Không thể biết nếu không có diện tích"
    ],
    "q.8.3-01.q": "Một lăng trụ tam giác có bao nhiêu mặt?",
    "q.8.3-02.q": "Một hình chóp đáy vuông có bao nhiêu đỉnh?",
    "q.8.3-03.q": "Một lăng trụ lục giác có bao nhiêu cạnh?",
    "q.8.3-04.q": "Công thức nào liên hệ số mặt (F), số đỉnh (V) và số cạnh (E) của mọi hình khối có các mặt phẳng?",
    "q.8.3-05.q": "Một hình khối có 7 mặt và 15 cạnh. Nó có bao nhiêu đỉnh?",
    "q.8.3-06.q": "Một hình hộp chữ nhật dài 30 cm, rộng 20 cm và cao 10 cm. Em vẽ các hình chiếu của nó ở tỉ lệ 1 : 5. Diện tích hình chiếu bằng (nhìn từ trên xuống) trên bản vẽ của em là bao nhiêu?",
    "q.8.3-07.q": "Một hình trụ có đường kính 14 cm và chiều cao 10 cm. Ở tỉ lệ 1 : 2, diện tích hình chiếu đứng của nó trên bản vẽ là bao nhiêu?",
    "q.8.3-08.q": "Một lăng trụ tam giác nằm với hai đáy tam giác ở phía trước và phía sau. Hình chiếu nào cho thấy hình tam giác?",
    "q.8.3-08.choices": [
      "Hình chiếu bằng (nhìn từ trên xuống)",
      "Hình chiếu đứng (nhìn từ phía trước)",
      "Hình chiếu cạnh (nhìn từ bên cạnh)",
      "Không hình nào"
    ],
    "q.8.3-09.q": "Một hình khối bậc thang được làm từ các khối lập phương 1 cm: mặt trước có các cột 3, 2 và 1 khối lập phương, và nó dày một khối. Hình chiếu đứng của nó có bao nhiêu ô vuông đơn vị?",
    "q.8.3-10.q": "Một container vận chuyển dài 6 m, rộng 2,4 m và cao 2,6 m. Vẽ nó ở tỉ lệ 1 : 100. Diện tích hình chiếu bằng trên bản vẽ là bao nhiêu?"
  }
});
