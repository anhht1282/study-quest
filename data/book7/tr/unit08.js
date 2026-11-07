window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 8,
  en: {
    "u.realm": "Magic Mirror Castle",
    "u.story": "Magic Mirror Castle is built from perfect shapes: round windows, tiled floors and stone blocks of every form. To open the main gate, you must spot lines of symmetry, recognise congruent shapes and count the vertices, edges and faces of solids.",
    "g.0.def": "A line that divides a shape into two halves that fold exactly onto each other.",
    "g.1.def": "A shape that fits onto itself when turned about its centre through an angle less than a full turn.",
    "g.2.def": "The number of times a shape fits onto itself during one full turn.",
    "g.3.def": "A straight line segment joining two points on a circle.",
    "g.4.def": "A straight line that touches a circle at exactly one point.",
    "g.5.def": "Two shapes with the same shape and the same size.",
    "g.6.def": "The corner point, the line segment where two faces meet, and the flat surface of a 3D solid.",
    "g.7.def": "A solid with two identical polygons as bases and rectangles as the side faces.",
    "s.8.1.learn": [
      "A line of symmetry is a fold line where the two halves of a shape fit exactly onto each other.",
      "The order of rotational symmetry is the number of times a shape fits onto itself in one full turn (360°).",
      "A regular polygon with n sides has n lines of symmetry and rotational symmetry of order n.",
      "A rectangle (not a square) and a rhombus: 2 lines, order 2. An ordinary parallelogram: 0 lines, order 2.",
      "An isosceles trapezium: 1 line, order 1. A kite: 1 line, order 1."
    ],
    "ex.8.1.q": "How many lines of symmetry does a parallelogram (that is not a rectangle or a rhombus) have, and what is its order of rotational symmetry?",
    "ex.8.1.steps": [
      "Try folding along a diagonal or a midline: the two halves do not fit exactly",
      "So there are no lines of symmetry (0)",
      "After a 180° turn about the centre the shape fits onto itself: order 2"
    ],
    "ex.8.1.prompts": [
      "Fold the parallelogram along a diagonal, or along a midline: do the two halves fit exactly?",
      "So how many lines of symmetry does this shape have?",
      "Through what angle must you turn the shape about its centre for it to fit onto itself? In one full 360° turn, how many times does it fit?"
    ],
    "ex.8.1.twist": "If it were a rhombus (not a square), how many lines of symmetry would it have?",
    "s.8.2.learn": [
      "A radius joins the centre to a point on the circle; the diameter is 2 times the radius.",
      "A chord is a line segment joining two points on the circle; the diameter is the longest chord.",
      "A tangent touches the circle at exactly one point and is perpendicular to the radius at that point.",
      "If one side of a triangle is a diameter and the other vertex lies on the circle, the triangle has a right angle at that vertex.",
      "A circle has infinitely many lines of symmetry and rotational symmetry of infinite order."
    ],
    "ex.8.2.q": "A circle has radius 6.5 cm. How long is its longest chord?",
    "ex.8.2.steps": [
      "The longest chord is the diameter",
      "Diameter = 2 × radius = 2 × 6.5 = 13 cm"
    ],
    "ex.8.2.prompts": [
      "Which chord passes through the centre of the circle? What is it called?",
      "Which calculation links the diameter to the radius? Work it out with 6.5 cm."
    ],
    "ex.8.2.twist": "If the longest chord of a circle is 17 cm long, what is the radius in cm?",
    "s.8.3.learn": [
      "Two shapes are congruent when they have the same shape and the same size; they may be flipped or turned.",
      "Corresponding sides are equal and corresponding angles are equal.",
      "Congruent shapes have the same perimeter and the same area.",
      "Two triangles with all three corresponding sides equal are congruent.",
      "Equal angles are not enough to say two shapes are congruent (they could be different sizes)."
    ],
    "ex.8.3.q": "Triangle ABC is congruent to triangle DEF, angle A = 50°, angle B = 60°. Find angle F (F corresponds to C).",
    "ex.8.3.steps": [
      "Angle C = 180° − 50° − 60° = 70°",
      "F corresponds to C so angle F = 70°"
    ],
    "ex.8.3.prompts": [
      "How many degrees do the three angles in a triangle add up to? From that, how do you find angle C?",
      "In congruent triangles, how are corresponding angles related? Which vertex does F correspond to?"
    ],
    "ex.8.3.twist": "If F corresponded to B instead of C, how many degrees would angle F be?",
    "s.8.4.learn": [
      "A face is a flat surface, an edge is a line segment where two faces meet, and a vertex is a corner point of the solid.",
      "A cuboid: 6 faces, 12 edges, 8 vertices. A cube is the same.",
      "A prism with an n-sided base: n + 2 faces, 3n edges, 2n vertices. A pyramid with an n-sided base: n + 1 faces, 2n edges, n + 1 vertices.",
      "Euler's formula for polyhedra: vertices + faces − edges = 2.",
      "A solid can be drawn from three views: front elevation, side elevation and plan."
    ],
    "ex.8.4.q": "How many faces, edges and vertices does a triangular prism have?",
    "ex.8.4.steps": [
      "The base is a triangle so n = 3",
      "Faces: n + 2 = 5 ; edges: 3n = 9 ; vertices: 2n = 6",
      "Check Euler: 6 + 5 − 9 = 2"
    ],
    "ex.8.4.prompts": [
      "What shape is the base of the prism and how many sides does it have? Call the number of base sides n.",
      "Faces are the two bases and the side faces; edges are base edges and side edges; vertices are on the two bases. Write each number in terms of n.",
      "Check Euler's formula: what does vertices + faces − edges equal?"
    ],
    "ex.8.4.twist": "If the base is a hexagon (6 sides), how many edges does the prism have?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Symmetry, shape-counting and 3D solid problems in the style of Grade 6–7 tests and gifted-student contests.",
    "q.8.1-01.hints": [
      "Can you fold the rectangle vertically so the two halves match?",
      "What about folding horizontally?",
      "Does folding along a diagonal match?"
    ],
    "q.8.1-01.explain": "There are only 2 lines: one vertical and one horizontal through the centre. A diagonal is not a line of symmetry.",
    "q.8.1-02.hints": [
      "Does turning the shape 90° about its centre make it fit?",
      "What about turning 180°?",
      "In one full 360° turn, how many positions fit?"
    ],
    "q.8.1-02.explain": "A half turn (180°) fits and a full turn fits too: order 2.",
    "q.8.1-03.hints": [
      "Can each vertex be joined to the midpoint of the opposite side?",
      "How many vertices are there?",
      "Each such line is a line of symmetry."
    ],
    "q.8.1-03.explain": "Drawing from each vertex to the midpoint of the opposite side gives 3 lines.",
    "q.8.1-04.hints": [
      "Fold along a diagonal: the two halves are two triangles that look alike; do they fit exactly?",
      "One half would be turned the wrong way round when folded: check the angles.",
      "Remember this shape has only rotational symmetry."
    ],
    "q.8.1-04.explain": "An ordinary parallelogram has no lines of symmetry. Many people think a diagonal is a line of symmetry, but when folded along a diagonal the two halves do not match.",
    "q.8.1-05.hints": [
      "The shape has two parallel sides and two equal slanting sides.",
      "Which line passes through the midpoints of the two parallel sides?",
      "Is there a horizontal line of symmetry (are the top and bottom equal)?"
    ],
    "q.8.1-05.explain": "An isosceles trapezium has only 1 vertical line of symmetry through the midpoints of the two parallel sides.",
    "q.8.1-06.hints": [
      "For a regular polygon, what is the link between the number of sides and the number of lines of symmetry?",
      "Equilateral triangle: 3 sides, 3 lines. Square?",
      "So how many sides does it have?"
    ],
    "q.8.1-06.explain": "A regular polygon with n sides has n lines of symmetry, so this one has 9 sides.",
    "q.8.1-07.hints": [
      "Rule out the shapes with 1 line or no lines.",
      "A kite has 1 line, an isosceles trapezium has 1 line, an ordinary parallelogram has 0 lines.",
      "Which shape has 2 lines that are its diagonals?"
    ],
    "q.8.1-07.explain": "A rhombus has 2 lines (the two diagonals) and order 2. A parallelogram has order 2 but 0 lines.",
    "q.8.1-08.hints": [
      "With order 4, the tiles outside the centre come in groups of how many tiles of the same colour?",
      "There are 9 tiles, one is in the centre, and the other 8 split into 2 groups of 4.",
      "There are 5 red tiles: if a group of 4 is red, what colour must the centre be?"
    ],
    "q.8.1-08.explain": "The 8 tiles outside the centre split into 2 groups of 4. There are 5 red and 4 white, so one group is red (4 tiles) + red centre, and the other group is white. So 4 red tiles are not in the centre.",
    "q.8.1-09.hints": [
      "How many lines of symmetry does a regular hexagon have?",
      "What is the order of rotational symmetry of a regular hexagon?",
      "Add the two numbers."
    ],
    "q.8.1-09.explain": "A regular hexagon has 6 lines and order 6: 6 + 6 = 12.",
    "q.8.2-01.hints": [
      "The start of the line is the centre and the end lies on the circle.",
      "A line through the centre with both ends on the circle has a different name.",
      "Choose the name for the line from the centre to the edge."
    ],
    "q.8.2-01.explain": "A line from the centre to the circle is a radius.",
    "q.8.2-02.hints": [
      "A diameter passes through the centre: how many radii does it contain?",
      "Two radii.",
      "2 × 7 = ?"
    ],
    "q.8.2-02.explain": "Diameter = 2 × 7 = 14 cm.",
    "q.8.2-03.hints": [
      "What is a line that cuts the circle at two points?",
      "A chord joins two points on the circle.",
      "What is a line that touches at only one point called?"
    ],
    "q.8.2-03.explain": "A line that touches a circle at exactly one point is a tangent.",
    "q.8.2-04.hints": [
      "The radius is half the diameter.",
      "18.6 ÷ 2 = ?",
      "Check: does 2 × your result equal 18.6?"
    ],
    "q.8.2-04.explain": "Radius = 18.6 ÷ 2 = 9.3 cm.",
    "q.8.2-05.hints": [
      "Does a chord have to pass through the centre?",
      "Does a diameter join two points on the circle?",
      "So is every diameter a chord?"
    ],
    "q.8.2-05.explain": "Every diameter is a chord (it joins two points on the circle). But a chord does not have to pass through the centre, so not every chord is a diameter.",
    "q.8.2-06.hints": [
      "Which chord is the longest in a circle?",
      "It is the diameter.",
      "2 × 6.5 = ?"
    ],
    "q.8.2-06.explain": "The longest chord is the diameter: 13 cm.",
    "q.8.2-07.hints": [
      "AB passes through the centre O, so OA = OB = OC.",
      "Triangles OAC and OBC are isosceles triangles.",
      "Side AB is the longest side; which special angle is opposite it?"
    ],
    "q.8.2-07.explain": "When AB is a diameter and C is on the circle, angle ACB = 90° (the angle in a semicircle).",
    "q.8.2-08.hints": [
      "Each side of the square touches the circle: what does the distance between two opposite sides equal?",
      "Opposite sides are one diameter apart = 8 cm.",
      "Perimeter = 4 × side."
    ],
    "q.8.2-08.explain": "The side of the square equals the diameter 8 cm, so the perimeter is 4 × 8 = 32 cm.",
    "q.8.2-09.hints": [
      "Can a rectangle have its vertices on a circle?",
      "What about an isosceles trapezium?",
      "If a rhombus has four vertices on a circle, what extra property must it have (the lengths of the two diagonals)?"
    ],
    "q.8.2-09.explain": "If a rhombus is inscribed in a circle, its two diagonals are equal, so it is a square. A rhombus that is not a square cannot be inscribed.",
    "q.8.3-01.hints": [
      "What must the two shapes have in common?",
      "Does the size have to be the same?",
      "Choose both shape and size."
    ],
    "q.8.3-01.explain": "Two shapes are congruent when they have the same shape and the same size.",
    "q.8.3-02.hints": [
      "P corresponds to A, Q corresponds to B, R corresponds to C.",
      "Which side of triangle ABC does RP correspond to?",
      "RP corresponds to CA."
    ],
    "q.8.3-02.explain": "RP corresponds to CA, so RP = 9 cm.",
    "q.8.3-03.hints": [
      "Which vertex does P correspond to?",
      "Are corresponding angles equal?",
      "So how big is P?"
    ],
    "q.8.3-03.explain": "Corresponding angles are equal so P = 62°.",
    "q.8.3-04.hints": [
      "How much do the three angles of a triangle add up to?",
      "Angle C = 180° − 50° − 60°.",
      "F corresponds to C."
    ],
    "q.8.3-04.explain": "C = 70° so F = 70°.",
    "q.8.3-05.hints": [
      "Can two rectangles with the same perimeter have different dimensions?",
      "Are two equilateral triangles with different sides congruent?",
      "What do congruent shapes have in common in perimeter and area?"
    ],
    "q.8.3-05.explain": "Congruent shapes have the same perimeter and area. The other statements are false: two squares with different sides are not congruent; two rectangles with the same perimeter are not necessarily congruent; two equilateral triangles need not be the same size.",
    "q.8.3-06.hints": [
      "Two rectangles joined along the 8 cm side: what are the new dimensions?",
      "The length is still 8 cm and the width becomes 3 + 3 = 6 cm.",
      "Perimeter = 2 × (8 + 6)."
    ],
    "q.8.3-06.explain": "The new shape is 8 cm × 6 cm, with perimeter 2 × (8 + 6) = 28 cm.",
    "q.8.3-07.hints": [
      "If three sides are fixed, can the triangle have several shapes?",
      "Try constructing a triangle with three given sides: are there two different ways (not counting flipping)?",
      "Three equal corresponding sides is a sufficient condition."
    ],
    "q.8.3-07.explain": "Two triangles with three equal corresponding sides are congruent. Sofia is right; you do not need the angles.",
    "q.8.3-08.hints": [
      "What are the dimensions of each piece?",
      "5 cm and 4 cm.",
      "Perimeter = 2 × (5 + 4)."
    ],
    "q.8.3-08.explain": "Each piece is 5 × 4 so its perimeter is 2 × 9 = 18 cm.",
    "q.8.3-09.hints": [
      "What shape do two right-angled triangles make when joined along the hypotenuse?",
      "A 6 cm × 8 cm rectangle.",
      "Area = length × width, or 2 × the area of one triangle."
    ],
    "q.8.3-09.explain": "Area of each triangle = 6×8/2 = 24, so two triangles = 48 cm².",
    "q.8.4-01.hints": [
      "Count: top, bottom, front, back, left, right.",
      "How many such faces are there?",
      "Each face is a rectangle."
    ],
    "q.8.4-01.explain": "A cuboid has 6 faces.",
    "q.8.4-02.hints": [
      "Vertices are the corners of the solid.",
      "4 corners on the top face plus 4 corners on the bottom face.",
      "4 + 4 = ?"
    ],
    "q.8.4-02.explain": "A cube has 8 vertices.",
    "q.8.4-03.hints": [
      "Each of the top and bottom faces has 4 edges; what about the vertical edges?",
      "4 (top) + 4 (bottom) + 4 (vertical).",
      "What is the total?"
    ],
    "q.8.4-03.explain": "4 + 4 + 4 = 12 edges.",
    "q.8.4-04.hints": [
      "The two bases are pentagons: how many base faces?",
      "The side faces are rectangles: how many side faces are there (equal to the number of base sides)?",
      "2 + 5 = ?"
    ],
    "q.8.4-04.explain": "2 base faces + 5 side faces = 7 faces.",
    "q.8.4-05.hints": [
      "How many faces does a tetrahedron have?",
      "A square-based pyramid has 1 base and how many side faces?",
      "A cube has 6 faces, an octahedron has 8 faces."
    ],
    "q.8.4-05.explain": "A square-based pyramid has 1 base face + 4 side faces = 5 faces. A tetrahedron has 4, a cube 6, an octahedron 8.",
    "q.8.4-06.hints": [
      "How many edges does the square base have?",
      "From each base vertex there is an edge up to the apex: how many more edges?",
      "4 + 4 = ?"
    ],
    "q.8.4-06.explain": "The base has 4 edges and there are 4 slanting edges: total 8. The answer 5 is the number of vertices (or faces); 4 is only the base edges.",
    "q.8.4-07.hints": [
      "12 + 8 − E = 2.",
      "12 + 8 = 20.",
      "E = 20 − 2 = ?"
    ],
    "q.8.4-07.explain": "E = 12 + 8 − 2 = 18 edges (it is a hexagonal prism).",
    "q.8.4-08.hints": [
      "Count the dashed lines.",
      "The dashed lines all start from the same back vertex.",
      "How many such lines are there?"
    ],
    "q.8.4-08.explain": "There are 3 hidden edges (all meeting at the back bottom-left vertex).",
    "q.8.4-09.hints": [
      "How many edges does a prism with an n-sided base have, in terms of n?",
      "Each base has n edges and there are n side edges: total 3n.",
      "3n = 21 so n = ?"
    ],
    "q.8.4-09.explain": "3n = 21 so n = 7 (the base is a heptagon).",
    "q.8.4-10.hints": [
      "If all faces are triangles, how many faces does the solid have?",
      "Check Euler: 6 + 8 − 12 = 2, correct.",
      "Which solid has 8 triangular faces and 6 vertices?"
    ],
    "q.8.4-10.explain": "An octahedron has 6 vertices, 12 edges and 8 triangular faces. A cube has 8 vertices and 6 faces.",
    "q.ch-01.q": "How many lines of symmetry does a regular polygon with 15 sides have?",
    "q.ch-01.hints": [
      "How many sides and how many lines does an equilateral triangle have?",
      "What is the pattern between the number of sides and the number of lines of symmetry of a regular polygon?",
      "Apply it to 15 sides."
    ],
    "q.ch-01.explain": "A regular polygon with n sides has exactly n lines of symmetry, so 15 lines.",
    "q.ch-02.q": "Which of the following shapes has a centre of symmetry (it fits onto itself when turned 180° about its centre)?",
    "q.ch-02.choices": [
      "Equilateral triangle",
      "Isosceles trapezium",
      "Parallelogram",
      "Regular pentagon"
    ],
    "q.ch-02.hints": [
      "Does an equilateral triangle fit when turned 180°?",
      "What about an isosceles trapezium?",
      "Which shape has pairs of opposite sides that are parallel and equal?"
    ],
    "q.ch-02.explain": "A parallelogram has a centre of symmetry at the intersection of its diagonals. An equilateral triangle, an isosceles trapezium and a regular pentagon do not.",
    "q.ch-03.q": "A square with side 4 units is divided into a 4×4 grid of small squares. How many squares of all sizes are there in the picture altogether?",
    "q.ch-03.hints": [
      "Count by size: how many 1×1 squares are there?",
      "1×1: 16, 2×2: 9, 3×3: 4, 4×4: 1.",
      "Add these numbers up."
    ],
    "q.ch-03.explain": "16 + 9 + 4 + 1 = 30 squares.",
    "q.ch-04.q": "How many rectangles (including squares) are there altogether in a 3×3 grid of squares?",
    "q.ch-04.hints": [
      "A rectangle is determined by two horizontal lines and two vertical lines.",
      "A 3×3 grid has 4 horizontal and 4 vertical lines. In how many ways can you choose 2 of the 4 horizontal lines?",
      "6 ways to choose horizontal × 6 ways to choose vertical."
    ],
    "q.ch-04.explain": "Choosing 2 of the 4 horizontal lines: 6 ways; similarly vertical: 6 ways. Total 6 × 6 = 36.",
    "q.ch-05.q": "A prism has a base that is a polygon with 12 sides. What is the total number of its vertices, edges and faces?",
    "q.ch-05.hints": [
      "Vertices = 2n, edges = 3n, faces = n + 2 with n = 12.",
      "Vertices 24, edges 36, faces 14.",
      "Add the three numbers."
    ],
    "q.ch-05.explain": "24 + 36 + 14 = 74.",
    "q.ch-06.q": "A pyramid has 20 edges in total. How many faces does it have?",
    "q.ch-06.hints": [
      "How many edges does a pyramid with an n-sided base have, in terms of n?",
      "Edges = 2n so 2n = 20.",
      "n = 10, faces = n + 1."
    ],
    "q.ch-06.explain": "2n = 20 so n = 10, number of faces = 10 + 1 = 11.",
    "q.ch-07.q": "A polyhedron has 10 vertices and 7 faces. Use Euler's formula vertices + faces − edges = 2 to find the number of edges.",
    "q.ch-07.hints": [
      "Substitute: 10 + 7 − edges = 2.",
      "10 + 7 = 17.",
      "edges = 17 − 2."
    ],
    "q.ch-07.explain": "Number of edges = 10 + 7 − 2 = 15 (it is a pentagonal prism).",
    "q.ch-08.q": "Which capital letter (in a sans-serif font) has exactly 1 line of symmetry and rotational symmetry of order 1?",
    "q.ch-08.hints": [
      "How many lines (vertical, horizontal) does H have?",
      "Do S and N have lines? What happens to them when turned 180°?",
      "The letter A has only 1 vertical line."
    ],
    "q.ch-08.explain": "A has exactly 1 vertical line and no rotational symmetry (order 1). H has 2 lines; S and N have rotational symmetry of order 2 but no lines.",
    "q.ch-09.q": "A 3×3×3 cube is painted on the outside and then cut into 27 small cubes. How many small cubes have exactly 2 painted faces?",
    "q.ch-09.hints": [
      "Where are the cubes with 2 painted faces in the big cube?",
      "They lie in the middle of the edges of the big cube (not at the corners).",
      "The big cube has 12 edges, and each edge has 1 cube in the middle."
    ],
    "q.ch-09.explain": "The corner cubes have 3 painted faces and the cubes in the middle of an edge have 2: 12 edges × 1 = 12 cubes.",
    "q.ch-10.q": "Triangle ABC is isosceles at A with perimeter 36 cm and base BC = 10 cm. Work out the length of the equal side AB.",
    "q.ch-10.hints": [
      "What is true about the two equal sides of an isosceles triangle?",
      "AB + AC = 36 − 10 = 26.",
      "AB = AC so AB = 26 ÷ 2."
    ],
    "q.ch-10.explain": "AB + AC = 36 − 10 = 26 and AB = AC so AB = 13 cm."
  },
  vi: {
    "q.8.1-09.howto": "Tìm hai số của lục giác đều: số trục đối xứng và bậc đối xứng quay. Nhập tổng của hai số đó.",
    "q.8.1-01.q": "Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?",
    "q.8.1-02.q": "Bậc đối xứng quay của hình bình hành không phải hình chữ nhật hay hình thoi là bao nhiêu?",
    "q.8.1-03.q": "Tam giác đều có bao nhiêu trục đối xứng?",
    "q.8.1-04.q": "Hình bình hành (không phải hình chữ nhật hay hình thoi) có bao nhiêu trục đối xứng?",
    "q.8.1-05.q": "Hình được cho có bao nhiêu trục đối xứng?",
    "q.8.1-06.q": "Một đa giác đều có 9 trục đối xứng. Đa giác đó có bao nhiêu cạnh?",
    "q.8.1-07.q": "Tứ giác nào có đúng 2 trục đối xứng và đối xứng quay bậc 2, nhưng không phải là hình chữ nhật?",
    "q.8.1-07.choices": [
      "Hình diều",
      "Hình thang cân",
      "Hình bình hành",
      "Hình thoi"
    ],
    "q.8.1-08.q": "Song có 5 viên gạch vuông màu đỏ và 4 viên gạch vuông màu trắng. Bạn ấy xếp cả 9 viên thành một hình vuông 3 × 3 sao cho mẫu có đối xứng quay bậc 4. Có bao nhiêu viên gạch đỏ KHÔNG nằm ở ô chính giữa?",
    "q.8.1-09.q": "Lục giác đều có một số trục đối xứng và một bậc đối xứng quay nhất định. Tổng của hai số đó là bao nhiêu?",
    "q.8.2-01.q": "Đoạn thẳng từ tâm đường tròn đến rìa của nó có tên là gì?",
    "q.8.2-01.choices": [
      "đường kính",
      "bán kính",
      "dây cung",
      "tiếp tuyến"
    ],
    "q.8.2-02.q": "Một đường tròn có bán kính 7 cm. Đường kính của nó bằng bao nhiêu?",
    "q.8.2-03.q": "Đường nào chạm đường tròn tại đúng một điểm?",
    "q.8.2-03.choices": [
      "bán kính",
      "đường kính",
      "dây cung",
      "tiếp tuyến"
    ],
    "q.8.2-04.q": "Một đường tròn có đường kính 18,6 cm. Bán kính của nó bằng bao nhiêu?",
    "q.8.2-05.q": "Phát biểu nào đúng?",
    "q.8.2-05.choices": [
      "Mọi dây cung đều là đường kính",
      "Mọi đường kính đều là dây cung",
      "Dây cung phải đi qua tâm",
      "Dây cung chạm đường tròn tại một điểm"
    ],
    "q.8.2-06.q": "Một đường tròn có bán kính 6,5 cm. Dây cung dài nhất của nó dài bao nhiêu?",
    "q.8.2-07.q": "AB là đường kính của đường tròn và C nằm trên đường tròn. Góc ACB bằng bao nhiêu?",
    "q.8.2-08.q": "Bốn tiếp tuyến của một đường tròn bán kính 4 cm tạo thành một hình vuông bao quanh nó. Chu vi hình vuông là bao nhiêu?",
    "q.8.2-09.q": "Bốn đỉnh của mỗi tứ giác nằm trên một đường tròn. Tứ giác nào là không thể?",
    "q.8.2-09.choices": [
      "Hình chữ nhật",
      "Hình vuông",
      "Hình thang cân",
      "Hình thoi không phải hình vuông"
    ],
    "q.8.3-01.q": "'Bằng nhau' (congruent) nghĩa là gì đối với hai hình?",
    "q.8.3-01.choices": [
      "Chỉ cùng hình dạng",
      "Cùng hình dạng và cùng kích thước",
      "Chỉ cùng kích thước",
      "Cùng màu"
    ],
    "q.8.3-02.q": "Tam giác ABC bằng tam giác PQR. AB = 5 cm, BC = 7 cm, CA = 9 cm. PQ = 5 cm và QR = 7 cm. RP bằng bao nhiêu?",
    "q.8.3-03.q": "Tam giác ABC bằng tam giác PQR (A↔P). Góc A = 62°. Góc P bằng bao nhiêu?",
    "q.8.3-04.q": "Tam giác ABC bằng tam giác DEF (A↔D, B↔E, C↔F). Góc A = 50° và góc B = 60°. Tìm góc F.",
    "q.8.3-05.q": "Phát biểu nào đúng?",
    "q.8.3-05.choices": [
      "Mọi hình vuông đều bằng nhau",
      "Hai hình chữ nhật có cùng chu vi thì bằng nhau",
      "Các hình bằng nhau có cùng diện tích và cùng chu vi",
      "Hai tam giác có cả ba góc 60° luôn bằng nhau"
    ],
    "q.8.3-06.q": "Hai hình chữ nhật bằng nhau 8 cm × 3 cm được ghép theo cạnh 8 cm để tạo thành một hình chữ nhật lớn hơn. Chu vi của nó là bao nhiêu?",
    "q.8.3-07.q": "Hai tam giác đều có các cạnh 5,3 cm, 7,1 cm và 9,5 cm (các cạnh tương ứng cùng thứ tự). Sofia nói chúng bằng nhau. Zara nói không thể biết nếu không có các góc. Ai đúng?",
    "q.8.3-07.choices": [
      "Sofia: ba cạnh bằng nhau là đủ",
      "Zara: luôn cần các góc",
      "Không ai đúng",
      "Cả hai đều đúng"
    ],
    "q.8.3-08.q": "Một hình chữ nhật 10 cm × 4 cm được cắt thành hai hình chữ nhật bằng nhau, mỗi hình 5 cm × 4 cm. Chu vi của mỗi mảnh là bao nhiêu?",
    "q.8.3-09.q": "Hai tam giác vuông bằng nhau có hai cạnh góc vuông 6 cm và 8 cm được ghép theo cạnh huyền (10 cm) để tạo thành một hình chữ nhật. Diện tích hình chữ nhật là bao nhiêu?",
    "q.8.4-01.q": "Hình hộp chữ nhật có bao nhiêu mặt?",
    "q.8.4-02.q": "Hình lập phương có bao nhiêu đỉnh?",
    "q.8.4-03.q": "Hình lập phương có bao nhiêu cạnh?",
    "q.8.4-04.q": "Lăng trụ ngũ giác có bao nhiêu mặt?",
    "q.8.4-05.q": "Khối nào có đúng 5 mặt?",
    "q.8.4-05.choices": [
      "Tứ diện",
      "Hình chóp đáy vuông",
      "Hình lập phương",
      "Bát diện"
    ],
    "q.8.4-06.q": "Hình chóp đáy vuông có bao nhiêu cạnh?",
    "q.8.4-07.q": "Một khối có 8 mặt và 12 đỉnh. Dùng công thức đỉnh + mặt − cạnh = 2 để tìm số cạnh.",
    "q.8.4-08.q": "Các nét đứt trong hình cho thấy các cạnh bị khuất của một hình lập phương. Có bao nhiêu cạnh bị khuất?",
    "q.8.4-09.q": "Một lăng trụ có 21 cạnh. Đáy của nó có bao nhiêu cạnh?",
    "q.8.4-10.q": "Một khối có 6 đỉnh, 12 cạnh và 8 mặt. Đó là khối nào?",
    "q.8.4-10.choices": [
      "Hình lập phương",
      "Bát diện",
      "Lăng trụ tam giác",
      "Hình chóp đáy vuông"
    ]
  }
});
