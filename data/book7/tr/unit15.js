window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 15,
  en: {
    "u.realm": "Ancient Building Site",
    "u.story": "The builders at the Ancient Building Site need to tile courtyards, paint water tanks and measure fields many hectares wide. Get just one unit wrong and they will order a whole truckload of tiles too many! Use area and volume to help them calculate correctly.",
    "g.0.def": "The amount of flat surface a shape covers, measured in square units such as cm², m².",
    "g.1.def": "The number you multiply or divide by to change from one unit to another, for example 1 cm² = 100 mm².",
    "g.2.def": "A unit for measuring the area of land; 1 ha = 10 000 m² (a square of side 100 m).",
    "g.3.def": "The perpendicular distance from the base of a triangle to the opposite vertex.",
    "g.4.def": "A shape made from several simple shapes such as rectangles and triangles.",
    "g.5.def": "The amount of space a solid takes up, measured in cm³, m³...",
    "g.6.def": "A solid with 6 rectangular faces; V = length × width × height.",
    "g.7.def": "The total area of all the faces of a solid.",
    "g.8.def": "A flat shape that can be folded into a solid.",
    "s.15.1.learn": [
      "Area is measured in SQUARE units: mm², cm², m², km². Choose a unit that fits the size of the object: m² for a football pitch, cm² or mm² for a stamp.",
      "1 cm = 10 mm so 1 cm² = 10 × 10 = 100 mm².",
      "1 m = 100 cm so 1 m² = 100 × 100 = 10 000 cm².",
      "Changing to a SMALLER unit makes the number bigger: MULTIPLY by the factor. Changing to a LARGER unit: DIVIDE.",
      "The safe way: change the lengths to the same unit first, then work out the area."
    ],
    "ex.15.1.q": "A shape has area 4.5 m². Convert it to cm².",
    "ex.15.1.steps": [
      "m² → cm² is changing to a smaller unit, so multiply by 10 000",
      "4.5 × 10 000 = 45 000",
      "So 4.5 m² = 45 000 cm²"
    ],
    "ex.15.1.prompts": [
      "Changing from m² to cm² goes to a smaller or larger unit, so do you multiply or divide?",
      "1 m = 100 cm, so how many cm² is 1 m²? Multiply by 4.5.",
      "Write the answer with its unit."
    ],
    "ex.15.1.twist": "What do you get if you convert 4.5 m² to dm²?",
    "s.15.2.learn": [
      "The hectare (ha) is used to measure the area of land. 1 ha is the area of a square with side 100 m.",
      "1 ha = 100 m × 100 m = 10 000 m².",
      "Convert ha to m²: multiply by 10 000. Convert m² to ha: divide by 10 000.",
      "1 km² = 1 000 m × 1 000 m = 1 000 000 m² = 100 ha.",
      "When the sides are given in a mix of km and m, change everything to metres, work out the area in m², then convert to ha."
    ],
    "ex.15.2.q": "A rectangular piece of land is 850 m by 1.4 km. Find its area in hectares.",
    "ex.15.2.steps": [
      "Convert 1.4 km = 1 400 m",
      "Area = 850 × 1 400 = 1 190 000 m²",
      "Divide by 10 000: 1 190 000 ÷ 10 000 = 119 ha"
    ],
    "ex.15.2.prompts": [
      "The two sides are in different units; how do you change km to m?",
      "Which operation gives the area of a rectangle? Work it out in m².",
      "How many m² is 1 ha? Which operation do you use to convert?"
    ],
    "ex.15.2.twist": "A square piece of land has area 1 ha. How many metres long is its side?",
    "s.15.3.learn": [
      "A triangle is always half of the rectangle around it with the same base and the same height.",
      "Formula: A = ½ × base × height = ½bh.",
      "The height must be PERPENDICULAR to the base, drawn from the opposite vertex. Do not use the slanted side!",
      "For a compound shape, split it into rectangles and triangles, work out each part, then add.",
      "If you know the area and the base, find the height: h = 2A ÷ b."
    ],
    "ex.15.3.q": "A triangle has base 8 cm and perpendicular height 6 cm. Work out its area.",
    "ex.15.3.steps": [
      "A = ½ × b × h = ½ × 8 × 6",
      "= 24 cm²"
    ],
    "ex.15.3.prompts": [
      "How does the formula for the area of a triangle use the base and the height?",
      "Substitute the numbers and calculate; remember the unit for area."
    ],
    "ex.15.3.twist": "If a triangle has area 36 cm² and base 9 cm, how many cm is its height?",
    "s.15.4.learn": [
      "Volume is the amount of space a solid takes up. 1 cm³ is the volume of a cube with edge 1 cm.",
      "Cuboid: V = length × width × height. Cube with edge a: V = a × a × a = a³.",
      "All three dimensions must be in the same unit before multiplying. If the edges are in mm the volume is in mm³; in m it is in m³.",
      "1 cm³ = 1 000 mm³ (10 × 10 × 10) and 1 m³ = 1 000 000 cm³ (100 × 100 × 100).",
      "If you know V and two dimensions, find the missing dimension by dividing."
    ],
    "ex.15.4.q": "A box is 12 cm long, 9 cm wide and 35 mm high. Work out its volume in cm³.",
    "ex.15.4.steps": [
      "Convert 35 mm = 3.5 cm so the units are the same",
      "V = 12 × 9 × 3.5 = 108 × 3.5",
      "= 378 cm³"
    ],
    "ex.15.4.prompts": [
      "Are the dimensions in the same unit yet? Which measurement do you need to convert, and to what unit?",
      "Remember the formula for the volume of a cuboid; multiply the first two dimensions first.",
      "Now multiply by the remaining dimension."
    ],
    "ex.15.4.twist": "If the box is filled with water (1 cm³ of water = 1 ml), how many litres does it hold?",
    "s.15.5.learn": [
      "Surface area is the total area of all the faces of a solid, measured in square units.",
      "A cube with edge a has 6 equal faces: S = 6a².",
      "A cuboid has 3 pairs of identical faces: S = 2(length × width + length × height + width × height).",
      "A net helps you see all 6 faces when it is folded.",
      "For an open box (no lid), take away the area of one face (the base or the lid)."
    ],
    "ex.15.5.q": "Work out the surface area of a 10 cm × 6 cm × 4 cm cuboid.",
    "ex.15.5.steps": [
      "The faces: 10×6 = 60, 10×4 = 40, 6×4 = 24",
      "There are 2 of each kind: 2 × (60 + 40 + 24)",
      "= 2 × 124 = 248 cm²"
    ],
    "ex.15.5.prompts": [
      "How many kinds of face does a cuboid have, and which two dimensions make each kind? Work out the area of each kind.",
      "The faces come in equal pairs; how can you group them?",
      "Work out the sum in the brackets, then multiply by the remaining factor."
    ],
    "ex.15.5.twist": "If the box is a cube with edge 5 cm, what is the surface area in cm²?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Real-life problems about gardens, water tanks and rice fields, in the style of Year 6–7 tests.",
    "q.15.1-01.hints": [
      "Which unit would you sensibly use to measure the length of a football pitch?",
      "If lengths are in metres, what unit is the area in?",
      "Which square unit is just right, not as small as cm² and not as big as km²?"
    ],
    "q.15.1-01.explain": "The length of a football pitch is measured in metres, so its area is measured in square metres (m²).",
    "q.15.1-02.hints": [
      "How many mm² is 1 cm²?",
      "When you change to a smaller unit, do you multiply or divide?",
      "Multiply 8 by the factor you just found."
    ],
    "q.15.1-02.explain": "1 cm² = 100 mm² so 8 cm² = 8 × 100 = 800 mm².",
    "q.15.1-03.hints": [
      "Going from mm² to cm² is changing to a larger or a smaller unit?",
      "So do you multiply or divide by 100?",
      "What is 600 divided by 100?"
    ],
    "q.15.1-03.explain": "Changing to a larger unit means dividing: 600 ÷ 100 = 6 cm².",
    "q.15.1-04.hints": [
      "How many cm² is 1 m² (remember 100 × 100)?",
      "Do you multiply or divide when changing to a smaller unit?",
      "Work out 3 × 10 000."
    ],
    "q.15.1-04.explain": "1 m² = 10 000 cm² so 3 m² = 30 000 cm².",
    "q.15.1-05.hints": [
      "You are changing from m² to cm²: what is the factor?",
      "Multiply 8.1 by 10 000: how many places does the decimal point move?",
      "Move the decimal point 4 places to the right."
    ],
    "q.15.1-05.explain": "8.1 × 10 000 = 81 000 cm².",
    "q.15.1-06.hints": [
      "To go from cm² to m², what do you divide by?",
      "Divide 780 by 10 000: how many places does the decimal point move to the left?",
      "780 → 78.0 → 7.80 → 0.780 → 0.0780."
    ],
    "q.15.1-06.explain": "780 ÷ 10 000 = 0.078 m².",
    "q.15.1-07.hints": [
      "How many cm is 1 m?",
      "A square of side 1 m can be split into how many rows, each with how many 1 cm squares?",
      "Area is the product of two dimensions: multiply the number of squares in each row by the number of rows."
    ],
    "q.15.1-07.explain": "A common mistake is to choose 100 because 1 m = 100 cm. But area has two dimensions: 100 × 100 = 10 000 cm².",
    "q.15.1-08.hints": [
      "The two sides are in different units; what should you do first?",
      "What is 65 mm in cm?",
      "Multiply 6.5 by 2."
    ],
    "q.15.1-08.explain": "65 mm = 6.5 cm. Area = 6.5 × 2 = 13 cm².",
    "q.15.1-09.choices": [
      "Correct",
      "Wrong, it should be 250 000 mm²",
      "Wrong, it should be 2 500 mm²",
      "Wrong, it should be 2 500 000 mm²"
    ],
    "q.15.1-09.hints": [
      "Convert 0.25 m² to cm² first: what do you multiply by?",
      "Then convert cm² to mm²: what do you multiply by?",
      "Or compare the final result with 25 000."
    ],
    "q.15.1-09.explain": "0.25 m² = 2 500 cm² = 250 000 mm². Zara is missing a zero, so she is wrong.",
    "q.15.1-10.hints": [
      "Convert the floor dimensions to cm first.",
      "What are the area of the floor and the area of one tile in cm²?",
      "Divide the floor area by the area of one tile: 60 000 ÷ 625."
    ],
    "q.15.1-10.explain": "The floor is 300 cm × 200 cm = 60 000 cm². Each tile is 25 × 25 = 625 cm². 60 000 ÷ 625 = 96 tiles.",
    "q.15.2-01.hints": [
      "How many m² is 1 ha?",
      "When you change to a smaller unit, do you multiply or divide?",
      "Work out 2.4 × 10 000."
    ],
    "q.15.2-01.explain": "2.4 × 10 000 = 24 000 m².",
    "q.15.2-02.hints": [
      "Going from m² to ha is changing to a larger or a smaller unit?",
      "So what do you divide by?",
      "125 000 ÷ 10 000 = ?"
    ],
    "q.15.2-02.explain": "125 000 ÷ 10 000 = 12.5 ha.",
    "q.15.2-03.hints": [
      "Which factor do you multiply by?",
      "How many places does the decimal point move to the right?",
      "0.35 → 3 500."
    ],
    "q.15.2-03.explain": "0.35 × 10 000 = 3 500 m².",
    "q.15.2-04.hints": [
      "Divide by 10 000.",
      "Move the decimal point 4 places to the left.",
      "85 000 → 8.5000."
    ],
    "q.15.2-04.explain": "85 000 ÷ 10 000 = 8.5 ha.",
    "q.15.2-05.hints": [
      "How do you work out the area of a square?",
      "What is 100 × 100?",
      "Do not mix it up with the perimeter or with the number 100."
    ],
    "q.15.2-05.explain": "1 ha = 100 × 100 = 10 000 m². Choosing 100 m² confuses the side with the area.",
    "q.15.2-06.hints": [
      "The two dimensions are in different units; change km to m: 1.4 km = ? m",
      "Work out the area in m² first: 850 × 1 400.",
      "Divide the result by 10 000."
    ],
    "q.15.2-06.explain": "1.4 km = 1 400 m. 850 × 1 400 = 1 190 000 m² = 119 ha.",
    "q.15.2-07.hints": [
      "Area of a square = side × side.",
      "200 × 200 = ? m²",
      "Change m² to ha by dividing by 10 000."
    ],
    "q.15.2-07.explain": "200 × 200 = 40 000 m² = 4 ha.",
    "q.15.2-08.hints": [
      "Area of a rectangle = length × width.",
      "Multiply 105 × 68: you can split it into 100 × 68 and 5 × 68.",
      "6 800 + 340 = ?"
    ],
    "q.15.2-08.explain": "105 × 68 = 6 800 + 340 = 7 140 m² (nearly 0.7 ha, a bit more than half a hectare).",
    "q.15.2-09.hints": [
      "Change 6 ha to m² first.",
      "Area = length × width, so length = area ÷ width.",
      "60 000 ÷ 200 = ?"
    ],
    "q.15.2-09.explain": "6 ha = 60 000 m². Length = 60 000 ÷ 200 = 300 m.",
    "q.15.2-10.choices": [
      "3 ha",
      "25 000 m²",
      "0.04 km²",
      "All three are equal"
    ],
    "q.15.2-10.hints": [
      "Change all three to the same unit, for example ha.",
      "How many ha is 25 000 m²? How many ha is 0.04 km²?",
      "Compare 3, 2.5 and 4."
    ],
    "q.15.2-10.explain": "25 000 m² = 2.5 ha; 0.04 km² = 0.04 × 100 = 4 ha; the other is 3 ha. The largest is 0.04 km². You must change to the same unit before comparing.",
    "q.15.3-01.hints": [
      "What is the formula for the area of a triangle?",
      "Substitute b = 8, h = 6 into ½ × b × h.",
      "½ × 48 = ?"
    ],
    "q.15.3-01.explain": "A = ½ × 8 × 6 = 24 cm².",
    "q.15.3-02.hints": [
      "Multiply the base by the height first.",
      "10 × 7 = ?",
      "Take half of the result."
    ],
    "q.15.3-02.explain": "½ × 10 × 7 = 35 cm².",
    "q.15.3-03.hints": [
      "In a right-angled triangle, the two perpendicular sides can be the base and the height.",
      "Multiply 9 × 12.",
      "Halve it."
    ],
    "q.15.3-03.explain": "A = ½ × 9 × 12 = 54 cm².",
    "q.15.3-04.hints": [
      "From A = ½bh, what do you get if you multiply both sides by 2?",
      "2A = 72 = b × h.",
      "h = 72 ÷ 9 = ?"
    ],
    "q.15.3-04.explain": "2 × 36 = 72 = 9 × h so h = 8 cm.",
    "q.15.3-05.hints": [
      "Which side is the height used in the formula?",
      "Is the slanted side of 9 cm perpendicular to the base?",
      "Work out ½ × 12 × 8."
    ],
    "q.15.3-05.explain": "You must use the perpendicular height 8 cm: ½ × 12 × 8 = 48 cm². The answer 54 comes from wrongly using the slanted side 9 cm; 96 comes from forgetting the ½.",
    "q.15.3-06.hints": [
      "Both numbers are already in mm, so there is no need to convert.",
      "½ × 40 × 20 = ?",
      "20 × 20 = ?"
    ],
    "q.15.3-06.explain": "A = ½ × 40 × 20 = 400 mm².",
    "q.15.3-07.hints": [
      "Which familiar shapes can you split the compound shape into?",
      "What is the area of the rectangle? The area of the triangle?",
      "Add the two areas."
    ],
    "q.15.3-07.explain": "Rectangle: 10 × 6 = 60. Triangle: ½ × 10 × 5 = 25. Total 85 cm².",
    "q.15.3-08.hints": [
      "Work out the rectangular body separately.",
      "The roof is a triangle with base 6 and height 3: what is its area?",
      "24 + 9 = ?"
    ],
    "q.15.3-08.explain": "Body: 6 × 4 = 24. Roof: ½ × 6 × 3 = 9. Total 33 cm².",
    "q.15.3-09.choices": [
      "The pointed triangle has the larger area",
      "The leaning triangle has the larger area",
      "They are equal, both 30 cm²",
      "They cannot be compared"
    ],
    "q.15.3-09.hints": [
      "Does the area formula use how much the triangle leans?",
      "Which quantities are needed?",
      "If two triangles have the same base and height, what can you say about their areas?"
    ],
    "q.15.3-09.explain": "Area depends only on the base and the perpendicular height: ½ × 10 × 6 = 30 cm² for both, even though the shapes are different.",
    "q.15.3-10.hints": [
      "Work out the area of the first triangle.",
      "If the base is halved, how must the height change to keep the area the same?",
      "35 = ½ × 7 × h, solve for h."
    ],
    "q.15.3-10.explain": "Area of the first = ½ × 14 × 5 = 35. With base 7: ½ × 7 × h = 35 so h = 10 cm (base halved, height doubled).",
    "q.15.4-01.hints": [
      "What is the formula for the volume of a cuboid?",
      "10 × 6 = ?",
      "Now multiply by 4."
    ],
    "q.15.4-01.explain": "V = 10 × 6 × 4 = 240 cm³.",
    "q.15.4-02.hints": [
      "Are the three dimensions all in mm yet?",
      "12 × 8 = ?",
      "Multiply the result by 5."
    ],
    "q.15.4-02.explain": "V = 12 × 8 × 5 = 480 mm³.",
    "q.15.4-03.hints": [
      "Multiply the first two numbers: 7 × 4.",
      "Now multiply by 2.",
      "28 × 2 = ?"
    ],
    "q.15.4-03.explain": "V = 7 × 4 × 2 = 56 cm³.",
    "q.15.4-04.hints": [
      "How are the three dimensions of a cube related?",
      "V = 5 × 5 × 5.",
      "25 × 5 = ?"
    ],
    "q.15.4-04.explain": "V = 5³ = 125 cm³.",
    "q.15.4-05.hints": [
      "Is any dimension in a different unit?",
      "35 mm = ? cm",
      "12 × 9 × 3.5 = ?"
    ],
    "q.15.4-05.explain": "35 mm = 3.5 cm. V = 12 × 9 × 3.5 = 378 cm³. A common mistake is multiplying straight by 35 without converting the unit.",
    "q.15.4-06.hints": [
      "V = length × width × height. Work out length × width first.",
      "10 × 6 = 60, so 60 × height = 360.",
      "360 ÷ 60 = ?"
    ],
    "q.15.4-06.explain": "Base area = 60 cm². Height = 360 ÷ 60 = 6 cm.",
    "q.15.4-07.hints": [
      "How many cm is 1 m?",
      "How many dimensions does volume have?",
      "Multiply 100 × 100 × 100."
    ],
    "q.15.4-07.explain": "1 m³ = 100 × 100 × 100 = 1 000 000 cm³. Choosing 100 or 10 000 forgets the number of dimensions of volume.",
    "q.15.4-08.hints": [
      "Change 1.2 m to cm.",
      "120 × 60 = ?",
      "7 200 × 25 = ?"
    ],
    "q.15.4-08.explain": "1.2 m = 120 cm. V = 120 × 60 × 25 = 180 000 cm³.",
    "q.15.4-09.hints": [
      "Change 90 cm to metres.",
      "8 × 6 × 0.9 = ?",
      "48 × 0.9 = ?"
    ],
    "q.15.4-09.explain": "90 cm = 0.9 m. V = 8 × 6 × 0.9 = 43.2 m³.",
    "q.15.4-10.hints": [
      "Work out the volume of the old cube: 4³.",
      "Work out the volume of the new cube: 8³.",
      "512 ÷ 64 = ?"
    ],
    "q.15.4-10.explain": "64 → 512, multiplied by 512 ÷ 64 = 8. When the edge is doubled the volume is multiplied by 2 × 2 × 2 = 8 (not 2).",
    "q.15.5-01.hints": [
      "How many faces does a cube have?",
      "What is the area of one face?",
      "Multiply 4 by 6."
    ],
    "q.15.5-01.explain": "One face is 2 × 2 = 4 cm². There are 6 faces: 6 × 4 = 24 cm².",
    "q.15.5-02.hints": [
      "List the three kinds of face: 5×3, 5×2, 3×2.",
      "Add the three areas: 15 + 10 + 6.",
      "Multiply the total by 2."
    ],
    "q.15.5-02.explain": "2 × (15 + 10 + 6) = 2 × 31 = 62 cm².",
    "q.15.5-03.hints": [
      "Area of one face: 7 × 7.",
      "How many faces are there?",
      "49 × 6 = ?"
    ],
    "q.15.5-03.explain": "One face is 49 cm², 6 faces: 294 cm².",
    "q.15.5-04.hints": [
      "The faces: 8×5, 8×3, 5×3.",
      "40 + 24 + 15 = ?",
      "Double the total."
    ],
    "q.15.5-04.explain": "2 × (40 + 24 + 15) = 2 × 79 = 158 cm².",
    "q.15.5-05.hints": [
      "What are the areas of the three kinds of face?",
      "How many faces of each kind are there?",
      "Add the three areas 24 + 18 + 12, then multiply by what?"
    ],
    "q.15.5-05.explain": "24 + 18 + 12 = 54 is the area of ONE face of each kind; you must multiply by 2 to get 108 cm². 72 is the volume, 216 is a wrong multiplication.",
    "q.15.5-06.hints": [
      "The faces: 2×1.5, 2×1, 1.5×1.",
      "3 + 2 + 1.5 = ?",
      "Double it."
    ],
    "q.15.5-06.explain": "2 × (3 + 2 + 1.5) = 2 × 6.5 = 13 m².",
    "q.15.5-07.hints": [
      "Area of one face = 150 ÷ 6.",
      "One face = edge × edge; find the number that multiplied by itself gives it.",
      "25 = ? × ?"
    ],
    "q.15.5-07.explain": "150 ÷ 6 = 25 = 5 × 5 so the edge is 5 cm.",
    "q.15.5-08.hints": [
      "Work out the surface area of the closed box first.",
      "The closed box is 248 cm². Which face is the lid and what is its area?",
      "248 − 60 = ?"
    ],
    "q.15.5-08.explain": "Closed box: 2 × (60 + 40 + 24) = 248. Remove the lid 10 × 6 = 60. That leaves 188 cm².",
    "q.15.5-09.hints": [
      "What are the dimensions of the new cuboid?",
      "With dimensions 6 × 3 × 3: work out the three kinds of face.",
      "2 × (18 + 18 + 9) = ?"
    ],
    "q.15.5-09.explain": "Cuboid 6 × 3 × 3: 2 × (18 + 18 + 9) = 90 cm². Two separate cubes have 2 × 54 = 108 cm²; sticking them together hides 2 faces (2 × 9 = 18).",
    "q.15.5-10.choices": [
      "The volume equals the surface area",
      "The volume 1 cm³ and the surface area 6 cm² are different kinds of quantity, so they cannot be compared",
      "The surface area is smaller than the volume",
      "Both are equal to 6"
    ],
    "q.15.5-10.hints": [
      "Work out the volume and the surface area for a cube with edge 1 cm.",
      "Do these two quantities have the same unit?",
      "Can you compare 1 cm³ and 6 cm² directly?"
    ],
    "q.15.5-10.explain": "V = 1 cm³ and S = 6 cm². Volume and area have different kinds of unit, so you cannot say they are equal or that one is bigger: comparing them is meaningless.",
    "q.ch-01.q": "A rectangular garden is 40 m long and 25 m wide. A path 2 m wide runs just inside the fence all the way round the garden. Find the area of the remaining land for growing vegetables.",
    "q.ch-01.hints": [
      "The path runs along both sides of each dimension. How many metres does the remaining length lose?",
      "The remaining length is 40 − 2×2 = 36 m. What is the remaining width?",
      "Multiply 36 by the remaining width."
    ],
    "q.ch-01.explain": "The 2 m path is on both sides, so each dimension loses 4 m: length 36 m, width 21 m. Area = 36 × 21 = 756 m².",
    "q.ch-02.q": "A rectangular floor 12 m × 8 m has a 5 m × 3 m rectangular corner missing (an L shape). Find the area of the floor.",
    "q.ch-02.hints": [
      "You can work out the whole large rectangle and then subtract the missing part.",
      "What are the areas of the large rectangle and of the missing part?",
      "96 − 15 = ?"
    ],
    "q.ch-02.explain": "12 × 8 = 96 m², the missing part is 5 × 3 = 15 m². The L-shaped floor: 96 − 15 = 81 m².",
    "q.ch-03.q": "An open rectangular water tank (no lid) is 2 m long, 1.5 m wide and 1 m high. The whole inside of the tank (4 sides and the base) is painted, at 30 thousand dong per m². Find the cost of the paint (in thousand dong).",
    "q.ch-03.hints": [
      "Which faces make up the inside, and how many kinds are there?",
      "Two faces 2 × 1, two faces 1.5 × 1 and the base 2 × 1.5: what is the total area?",
      "Multiply the area by 30."
    ],
    "q.ch-03.explain": "Area: 2×(2×1) + 2×(1.5×1) + 2×1.5 = 4 + 3 + 3 = 10 m². Paint cost 10 × 30 = 300 thousand dong.",
    "q.ch-04.q": "A rectangular water tank with a 2 m × 1.5 m base holds water 40 cm deep. A further 600 litres of water (1 m³ = 1 000 litres) is pumped in. How deep, in cm, is the water now?",
    "q.ch-04.hints": [
      "What is the area of the base of the tank in m²?",
      "How many m³ is 600 litres? How many metres does the water rise = volume ÷ base area?",
      "0.6 ÷ 3 = 0.2 m = ? cm, then add 40 cm."
    ],
    "q.ch-04.explain": "Base 2 × 1.5 = 3 m². 600 litres = 0.6 m³ so the water rises 0.6 ÷ 3 = 0.2 m = 20 cm. New depth 40 + 20 = 60 cm.",
    "q.ch-05.q": "A rectangular rice field is 250 m long and 160 m wide. Each hectare yields 6 tonnes of rice. How many tonnes of rice does the whole field yield?",
    "q.ch-05.hints": [
      "Work out the area of the field in m².",
      "Convert m² to ha (divide by 10 000).",
      "Multiply the number of ha by 6."
    ],
    "q.ch-05.explain": "250 × 160 = 40 000 m² = 4 ha. Yield 4 × 6 = 24 tonnes.",
    "q.ch-06.q": "Triangle ABC has a right angle at A with AB = 9 cm, AC = 12 cm, BC = 15 cm. Find the length of the altitude AH drawn from A to BC (in cm).",
    "q.ch-06.hints": [
      "Work out the area of the triangle using the two perpendicular sides.",
      "The same area equals ½ × BC × AH.",
      "54 = ½ × 15 × AH, solve for AH."
    ],
    "q.ch-06.explain": "Area = ½ × 9 × 12 = 54 cm². Also = ½ × 15 × AH so AH = 108 ÷ 15 = 7.2 cm.",
    "q.ch-07.q": "A rectangle has its length increased by 20% and its width decreased by 20%. By what percentage does the new area decrease compared with the old area?",
    "q.ch-07.hints": [
      "Let the length be a and the width b. How many times a is the new length?",
      "The new width is 0.8b. The new area is 1.2 × 0.8 times the old area.",
      "1.2 × 0.8 = 0.96; compared with 1, what percentage decrease is that?"
    ],
    "q.ch-07.explain": "New area = 1.2a × 0.8b = 0.96ab = 96% of the old area, so it decreases by 4%. It does not stay the same even though it is +20% and −20%.",
    "q.ch-08.q": "A cube with edge 6 cm is painted red on all 6 faces, then cut into small cubes with edge 2 cm. How many small cubes are painted on exactly 2 faces?",
    "q.ch-08.hints": [
      "Edge 6 divided by edge 2: how many small cubes are along each large edge?",
      "A cube with exactly 2 painted faces is on an edge (not a corner).",
      "The large cube has 12 edges, each with 3 cubes of which 2 are at corners."
    ],
    "q.ch-08.explain": "Each edge has 3 small cubes; take away the 2 corner cubes and 1 middle cube is left. There are 12 edges so 12 × 1 = 12 cubes.",
    "q.ch-09.q": "A cuboid fish tank is 80 cm long, 50 cm wide and 40 cm high. Water is poured in up to ¾ of the height of the tank. How many litres of water does the tank hold? (1 litre = 1 000 cm³)",
    "q.ch-09.hints": [
      "What is the height of the water in cm?",
      "Volume of water = 80 × 50 × (height of water).",
      "Change cm³ to litres: divide by 1 000."
    ],
    "q.ch-09.explain": "The water is 30 cm deep. V = 80 × 50 × 30 = 120 000 cm³ = 120 litres.",
    "q.ch-10.q": "An orchard has an area of 0.3 ha. Each tree needs 2 m² of land. What is the greatest number of trees the orchard can hold?",
    "q.ch-10.hints": [
      "Change 0.3 ha to m².",
      "Number of trees = area ÷ area for each tree.",
      "3 000 ÷ 2 = ?"
    ],
    "q.ch-10.explain": "0.3 ha = 3 000 m². 3 000 ÷ 2 = 1 500 trees.",
    "p.goal": "Explore how the volume and surface area change when you remove some small cubes from a 3 × 3 × 3 cube, and whether you can keep the surface area the same while the volume decreases.",
    "p.steps": [
      "Use 27 small cubes (or draw on squared paper) to build a 3 × 3 × 3 cube. Work out the volume (27 cm³) and the surface area (6 × 9 = 54 cm²).",
      "Remove one cube at a corner. What is the volume now? How does the surface area change? Explain by counting the faces lost and the new faces revealed.",
      "Try removing a cube from the middle of an edge, and from the middle of a face. Record in a table: position of the removed cube, volume, surface area.",
      "Find ways of removing more cubes so that the volume becomes 25, 24, 20... cm³ but the surface area is still 54 cm². Draw the ways you find.",
      "Find the smallest volume you can reach while keeping the surface area at 54 cm², and explain why it cannot be smaller."
    ],
    "p.extensions": [
      "Repeat with a 4 × 4 × 4 cube: what is the starting surface area, and what is the smallest volume that keeps it the same?",
      "Try the opposite: keep the volume the same but make the surface area as large as possible.",
      "Design a gift box with volume 24 cm³ and the smallest possible surface area, and compare it with other boxes of the same volume."
    ],
    "p.reflect": [
      "When you remove a cube at a corner, why does the surface area not change?",
      "Do volume and surface area always change together? Use your examples to answer.",
      "What rule do you find about the removed cubes that can keep the surface area the same?"
    ]
  },
  vi: {
    "q.15.5-08.howto": "Tìm tổng diện tích bìa cần để làm các mặt của hộp. Nhớ rằng hộp không có nắp.",
    "q.15.1-01.q": "Đơn vị nào phù hợp nhất để đo diện tích của một sân bóng đá?",
    "q.15.1-02.q": "Đổi 8 cm² ra mm².",
    "q.15.1-03.q": "Đổi 600 mm² ra cm².",
    "q.15.1-04.q": "Đổi 3 m² ra cm².",
    "q.15.1-05.q": "Đổi 8,1 m² ra cm².",
    "q.15.1-06.q": "Đổi 780 cm² ra m².",
    "q.15.1-07.q": "Có bao nhiêu cm² trong 1 m²?",
    "q.15.1-08.q": "Một hình chữ nhật dài 65 mm và rộng 2 cm. Tính diện tích của nó theo cm².",
    "q.15.1-09.q": "Zara nói: '0,25 m² bằng 25 000 mm².' Bạn ấy có đúng không?",
    "q.15.1-10.q": "Một sàn nhà có kích thước 3 m × 2 m. Những viên gạch vuông cạnh 25 cm lát kín sàn, không có khe hở. Cần bao nhiêu viên gạch?",
    "q.15.2-01.q": "Đổi 2,4 ha ra m².",
    "q.15.2-02.q": "Đổi 125 000 m² ra héc-ta.",
    "q.15.2-03.q": "Đổi 0,35 ha ra m².",
    "q.15.2-04.q": "Đổi 85 000 m² ra héc-ta.",
    "q.15.2-05.q": "Một héc-ta là diện tích của một thửa ruộng hình vuông cạnh 100 m. 1 ha bằng bao nhiêu mét vuông?",
    "q.15.2-06.q": "Một mảnh đất hình chữ nhật có kích thước 850 m × 1,4 km. Tìm diện tích của nó theo héc-ta.",
    "q.15.2-07.q": "Một thửa ruộng hình vuông có cạnh 200 m. Diện tích của nó là bao nhiêu héc-ta?",
    "q.15.2-08.q": "Một sân bóng đá dài 105 m và rộng 68 m. Tính diện tích của nó theo m².",
    "q.15.2-09.q": "Một thửa ruộng hình chữ nhật có diện tích 6 ha và chiều rộng 200 m. Thửa ruộng dài bao nhiêu mét?",
    "q.15.2-10.q": "Hãy nhớ 1 km² = 100 ha. Diện tích nào lớn nhất?",
    "q.15.3-01.q": "Tính diện tích tam giác có đáy 8 cm và chiều cao vuông góc 6 cm.",
    "q.15.3-02.q": "Một tam giác có đáy 10 cm và chiều cao 7 cm. Tìm diện tích của nó.",
    "q.15.3-03.q": "Một tam giác vuông có hai cạnh góc vuông là 9 cm và 12 cm. Tìm diện tích của nó.",
    "q.15.3-04.q": "Một tam giác có diện tích 36 cm² và đáy 9 cm. Chiều cao vuông góc của nó là bao nhiêu?",
    "q.15.3-05.q": "Một tam giác có đáy 12 cm, chiều cao vuông góc 8 cm và một cạnh xiên 9 cm. Diện tích của nó là bao nhiêu?",
    "q.15.3-06.q": "Một tam giác có đáy 40 mm và chiều cao vuông góc 20 mm. Tính diện tích của nó theo mm².",
    "q.15.3-07.q": "Một hình chữ nhật 10 cm × 6 cm có một tam giác đáy 10 cm, chiều cao 5 cm ghép lên trên. Tìm tổng diện tích.",
    "q.15.3-08.q": "Một hình 'ngôi nhà' gồm một hình chữ nhật rộng 6 cm, cao 4 cm với mái hình tam giác cao 3 cm ở trên (đáy 6 cm). Tìm tổng diện tích của nó.",
    "q.15.3-09.q": "Hai tam giác đều có đáy 10 cm và chiều cao vuông góc 6 cm, nhưng một tam giác cao và nhọn, tam giác kia nghiêng sang một bên. Nhận xét nào là đúng?",
    "q.15.3-10.q": "Một tam giác có đáy 14 cm và chiều cao 5 cm. Một tam giác khác có đáy 7 cm. Chiều cao bằng bao nhiêu thì diện tích của nó bằng tam giác kia?",
    "q.15.4-01.q": "Tìm thể tích của một hình hộp chữ nhật dài 10 cm, rộng 6 cm và cao 4 cm.",
    "q.15.4-02.q": "Một hình hộp chữ nhật có kích thước 12 mm × 8 mm × 5 mm. Tìm thể tích của nó theo mm³.",
    "q.15.4-03.q": "Tìm thể tích của hình hộp chữ nhật 7 cm × 4 cm × 2 cm.",
    "q.15.4-04.q": "Tìm thể tích của hình lập phương có cạnh 5 cm.",
    "q.15.4-05.q": "Một hình hộp chữ nhật dài 12 cm, rộng 9 cm và cao 35 mm. Tìm thể tích của nó theo cm³.",
    "q.15.4-06.q": "Một hình hộp chữ nhật có thể tích 360 cm³, chiều dài 10 cm và chiều rộng 6 cm. Chiều cao của nó là bao nhiêu?",
    "q.15.4-07.q": "Có bao nhiêu cm³ trong 1 m³?",
    "q.15.4-08.q": "Một hình hộp chữ nhật dài 1,2 m, rộng 60 cm và cao 25 cm. Tìm thể tích của nó theo cm³.",
    "q.15.4-09.q": "Một bể dài 8 m, rộng 6 m và sâu 90 cm. Tìm thể tích của nó theo m³ (làm tròn đến 1 chữ số thập phân).",
    "q.15.4-10.q": "Một hình lập phương có cạnh 4 cm. Cạnh được tăng gấp đôi lên 8 cm. Thể tích được nhân lên bao nhiêu lần?",
    "q.15.5-01.q": "Tìm diện tích bề mặt của hình lập phương có cạnh 2 cm.",
    "q.15.5-02.q": "Tìm diện tích bề mặt của hình hộp chữ nhật 5 cm × 3 cm × 2 cm.",
    "q.15.5-03.q": "Tìm diện tích bề mặt của hình lập phương có cạnh 7 cm.",
    "q.15.5-04.q": "Một hình hộp chữ nhật có kích thước 8 cm × 5 cm × 3 cm. Tìm diện tích bề mặt của nó.",
    "q.15.5-05.q": "Một hình hộp chữ nhật có kích thước 6 cm × 4 cm × 3 cm. Diện tích bề mặt của nó là bao nhiêu?",
    "q.15.5-06.q": "Một hình hộp chữ nhật dài 2 m, rộng 1,5 m và cao 1 m. Tìm diện tích bề mặt của nó theo m².",
    "q.15.5-07.q": "Một hình lập phương có diện tích bề mặt 150 cm². Mỗi cạnh dài bao nhiêu?",
    "q.15.5-08.q": "Một chiếc hộp hở (không nắp) có kích thước 10 cm × 6 cm × 4 cm. Cần bao nhiêu bìa cứng để làm hộp?",
    "q.15.5-09.q": "Hai hình lập phương cạnh 3 cm được dán úp mặt vào nhau thành một hình hộp chữ nhật. Diện tích bề mặt của hình hộp mới là bao nhiêu?",
    "q.15.5-10.q": "Nhận xét nào là đúng với hình lập phương cạnh 1 cm?"
  }
});
