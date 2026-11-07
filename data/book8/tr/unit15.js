window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 15,
  en: {
    "u.realm": "The Pyramid City",
    "u.story": "The ancient city has pyramids, prism-shaped water tanks and trapezium-shaped fields. A British explorer left a map that gives miles instead of kilometres. You must convert units and work out areas, volumes and the amount of cloth needed to cover things, to open the stone gate.",
    "g.0.def": "A unit of length; 5 miles is about 8 km, so 1 mile ≈ 1.6 km.",
    "g.1.def": "A quadrilateral with two pairs of parallel sides; area = base × perpendicular height.",
    "g.2.def": "A quadrilateral with one pair of parallel sides; area = ½ × (sum of the two parallel sides) × height.",
    "g.3.def": "The perpendicular distance between the two parallel sides, not the length of the slanting side.",
    "g.4.def": "A solid with two equal, parallel end faces; every cross-section parallel to the ends is the same as the end.",
    "g.5.def": "The shape made when you cut a prism at right angles to its length, for example a triangle.",
    "g.6.def": "The amount of space a solid takes up, measured in cm³, m³ ...; volume of a prism = area of cross-section × length.",
    "g.7.def": "The total area of all the faces of a solid.",
    "g.8.def": "A flat shape that can be folded up into a solid.",
    "g.9.def": "The height of a triangular side face of a pyramid, measured along the sloping face.",
    "s.15.1.learn": [
      "Convention used in this book: 5 miles ≈ 8 km, so 1 mile ≈ 1.6 km and 1 km ≈ 5/8 mile.",
      "Km to miles: multiply by 5/8 (divide by 8 then multiply by 5). Miles to km: multiply by 8/5 (divide by 5 then multiply by 8).",
      "Miles to km: multiply by 1.6 (or multiply by 8 then divide by 5). The number of km is greater than the number of miles.",
      "Km to miles: divide by 1.6 (or multiply by 5 then divide by 8). The number of miles is smaller than the number of km.",
      "Speeds convert in the same way: miles per hour to km per hour, multiply by 1.6.",
      "Check by estimating: 1 mile is longer than 1 km, so the number of km must be greater than the number of miles."
    ],
    "ex.15.1.q": "Convert 35 miles to km.",
    "ex.15.1.steps": [
      "35 ÷ 5 = 7 groups of 5 miles",
      "Each group of 5 miles = 8 km: 7 × 8 = 56",
      "35 miles ≈ 56 km."
    ],
    "ex.15.1.prompts": [
      "The convention is 5 miles ≈ 8 km. How many groups of 5 miles are in 35 miles?",
      "Each group of 5 miles converts to 8 km. What is the total?",
      "Since the convention is only approximate, which sign do you use in your conclusion?"
    ],
    "ex.15.1.twist": "If a journey is 120 km, about how many miles is that (use 5 miles ≈ 8 km)?",
    "s.15.2.learn": [
      "Area of a parallelogram = base × perpendicular height (do not use the slanting side).",
      "Cut off a triangle at one end and move it to the other end, and the parallelogram becomes a rectangle with the same area.",
      "Area of a trapezium = ½ × (a + b) × h, where a and b are the two parallel sides and h is the perpendicular distance between them.",
      "Two copies of a trapezium fit together to make a parallelogram with base (a + b), so the area is half of that.",
      "If you know the area, use the inverse operation to find the height or one of the parallel sides."
    ],
    "ex.15.2.q": "A trapezium has parallel sides 7 cm and 13 cm and height 8 cm. Work out the area.",
    "ex.15.2.steps": [
      "Formula ½ × (a + b) × h",
      "½ × (7 + 13) × 8 = ½ × 20 × 8",
      "= 80 cm²."
    ],
    "ex.15.2.prompts": [
      "A trapezium has two parallel sides. Which formula uses the mean of the two parallel sides times the height? Do you remember it, or can you work it out from two trapeziums put together?",
      "Substitute the numbers into the formula: do you work out the bracket first or multiply first?",
      "What units does the answer have? Why is it cm² and not cm?"
    ],
    "ex.15.2.twist": "A trapezium has area 99 cm², height 9 cm and shorter parallel side 7 cm. How long in cm is the longer parallel side?",
    "s.15.3.learn": [
      "A prism has the same cross-section all along its length.",
      "Volume of a prism = area of cross-section × length (or height of the prism).",
      "For a prism with a triangular cross-section: area of cross-section = ½ × base of triangle × height of triangle (do not forget the ½).",
      "Units of volume: cm³, m³. Conversions: 1 m³ = 1000 litres; 1 litre = 1000 cm³. Convert all lengths to the same unit (mm, cm or m) before calculating.",
      "Multiply every length by k and the volume is multiplied by k³."
    ],
    "ex.15.3.q": "A prism has a triangular cross-section with base 6 cm and height 4 cm; the prism is 9 cm long. Work out the volume.",
    "ex.15.3.steps": [
      "Area of triangle: ½ × 6 × 4 = 12 cm²",
      "Volume: 12 × 9",
      "= 108 cm³."
    ],
    "ex.15.3.prompts": [
      "A prism has a constant cross-section along its length. Which triangle is the cross-section here, and what is its area?",
      "Volume equals the area of the cross-section times which measurement of the prism?",
      "Work out the result and write it with cubic units."
    ],
    "ex.15.3.twist": "If the triangular cross-section stays the same but the length of the prism is halved, what is the volume in cm³?",
    "s.15.4.learn": [
      "Total surface area = the sum of the areas of all the faces. Drawing a net helps you not to miss any faces.",
      "A triangular prism has 5 faces: 2 triangular ends and 3 rectangles.",
      "Total surface area of a prism = 2 × area of end + (perimeter of end) × length.",
      "A square-based pyramid has 5 faces: 1 square and 4 identical isosceles triangles.",
      "Area of a triangular side face = ½ × base edge × slant height, not the vertical height of the pyramid."
    ],
    "ex.15.4.q": "A square-based pyramid has base edge 6 cm and slant height 5 cm. Work out the total surface area.",
    "ex.15.4.steps": [
      "Base: 6 × 6 = 36",
      "Each side face: ½ × 6 × 5 = 15; four faces: 60",
      "Total: 36 + 60 = 96 cm²."
    ],
    "ex.15.4.prompts": [
      "Which faces make up the total surface area? What shape is the base and what is its area?",
      "Each side face is a triangle. Which height of the side face do you use (not the height of the pyramid)? How many such faces are there?",
      "Add the area of the base and the side faces."
    ],
    "ex.15.4.twist": "If the slant height increases to 8 cm (the base is still a square of side 6 cm), what is the total surface area in cm²?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The pyramid gate is shut tight: solve 10 area and volume problems to unlock it!",
    "q.15.1-01.hints": [
      "Is a mile longer or shorter than a kilometre?",
      "With the same number: if the unit is longer, is the distance longer?",
      "Look at each statement: a statement that makes miles greater than km is true, the opposite is false."
    ],
    "q.15.1-01.explain": "1 mile ≈ 1.6 km, which is longer than 1 km. So 15 miles > 15 km (true) and 6 km < 6 miles (true). 100 km is not equal to 100 miles; 2.5 km is shorter than 2.5 miles; a car at 70 miles per hour goes further than a car at 70 km per hour.",
    "q.15.1-02.hints": [
      "Convert 35 miles to km (or think whether 1 mile is longer or shorter than 1 km).",
      "35 × 1.6 = ?",
      "Compare with 35 km."
    ],
    "q.15.1-02.explain": "35 miles = 35 × 1.6 = 56 km, which is more than 35 km. So the brother lives closer: Zara is correct.",
    "q.15.1-03.hints": [
      "Km to miles: multiply by 5/8. Divide 96 by 8 first.",
      "96 ÷ 8 = ?",
      "Then multiply the result by 5."
    ],
    "q.15.1-03.explain": "96 ÷ 8 = 12; 12 × 5 = 60 miles.",
    "q.15.1-04.hints": [
      "Miles to km: multiply by 8/5. Divide 55 by 5 first.",
      "55 ÷ 5 = ?",
      "Multiply the result by 8."
    ],
    "q.15.1-04.explain": "55 ÷ 5 = 11; 11 × 8 = 88 km.",
    "q.15.1-05.hints": [
      "Miles to km: multiply by 8/5, which is multiplying by 1.6.",
      "23 × 1.6 = 23 + 23 × 0.6.",
      "23 + 13.8 = ?"
    ],
    "q.15.1-05.explain": "23 × 1.6 = 36.8 km (also 36 4/5 km).",
    "q.15.1-06.hints": [
      "Is 1 mile longer or shorter than 1 km?",
      "So when you convert 50 miles to km will the answer be more or less than 50?",
      "Which operation makes the number bigger?"
    ],
    "q.15.1-06.explain": "A mile is longer than a km so the number of km is greater than 50: you must multiply. Marcus divided wrongly; an answer smaller than 50 makes no sense.",
    "q.15.1-07.hints": [
      "To compare, you must use the same unit. Is it easy to convert 70 miles to km?",
      "70 × 1.6 = ?",
      "Compare the result with 107 km."
    ],
    "q.15.1-07.explain": "70 miles = 70 × 1.6 = 112 km > 107 km, so 70 miles is further. (Or convert 107 km to miles ≈ 66.9 miles < 70.)",
    "q.15.1-08.hints": [
      "The number of miles travelled is the difference between the two readings on the milometer.",
      "126 335 − 125 465 = ?",
      "Convert to km: multiply by 1.6."
    ],
    "q.15.1-08.explain": "126 335 − 125 465 = 870 miles. 870 × 1.6 = 1392 km.",
    "q.15.1-09.hints": [
      "What is the distance in km?",
      "20 cents = $0.2 per km.",
      "1392 × 0.2 = ?"
    ],
    "q.15.1-09.explain": "870 miles = 1392 km. 1392 × $0.20 = $278.40 > $250, so Evan is right.",
    "q.15.1-10.hints": [
      "In 1 hour the car goes 70 miles; how many km is each mile?",
      "Multiply 70 by 1.6.",
      "70 × 16 = 1120, divide by 10."
    ],
    "q.15.1-10.explain": "70 × 1.6 = 112 km/h.",
    "q.15.2-01.hints": [
      "What is the formula for the area of a parallelogram?",
      "The base is 8 cm, the perpendicular height is 4 cm.",
      "8 × 4 = ?"
    ],
    "q.15.2-01.explain": "Area = 8 × 4 = 32 cm².",
    "q.15.2-02.hints": [
      "Multiply the base by the perpendicular height.",
      "6 × 1.5 = 6 + 3.",
      "The unit is m²."
    ],
    "q.15.2-02.explain": "6 × 1.5 = 9 m².",
    "q.15.2-03.hints": [
      "Add the two parallel sides first.",
      "6 + 8 = 14; multiply by the height 5 and then take half.",
      "½ × 14 × 5 = ?"
    ],
    "q.15.2-03.explain": "½ × (6 + 8) × 5 = ½ × 70 = 35 cm².",
    "q.15.2-04.hints": [
      "Which sides are the parallel sides?",
      "The mean of the two parallel sides is (4 + 12) ÷ 2 = ?",
      "Multiply that mean by the height 7."
    ],
    "q.15.2-04.explain": "½ × 16 × 7 = 8 × 7 = 56 mm².",
    "q.15.2-05.hints": [
      "Is the height in the formula the slanting side or the line perpendicular to the base?",
      "Which number do you use: 5 or 4?",
      "7 × 4 = ?"
    ],
    "q.15.2-05.explain": "Area = base × perpendicular height = 7 × 4 = 28 cm². Bembe used the slanting side 5 cm and got 35 cm² (wrong).",
    "q.15.2-06.hints": [
      "Write an expression for each learner.",
      "Sofia: (a + b)/2 × h; Marcus: (h/2) × (a + b); Zara: (a + b) × h/2.",
      "Does the order of multiplying and dividing change the result?"
    ],
    "q.15.2-06.explain": "All three equal ½ × (a + b) × h because multiplying and dividing can be done in any order. Choose the easiest way for each question.",
    "q.15.2-07.hints": [
      "The two shapes use different units (mm and cm). Convert everything to cm first.",
      "A: 1.5 cm × 1.2 cm = ? ; B: ½ × (6 + 10) × 9 = ?",
      "Take the smaller area from the larger area."
    ],
    "q.15.2-07.explain": "A = 1.5 × 1.2 = 1.8 cm². B = ½ × 16 × 9 = 72 cm². Difference = 72 − 1.8 = 70.2 cm². (A common mistake: mixing mm and cm.)",
    "q.15.2-08.hints": [
      "Try a parallelogram with base 3 and height 2: what is the area?",
      "Doubled: base 6, height 4: what is the area?",
      "How many times bigger is the new area than the old area?"
    ],
    "q.15.2-08.explain": "Area = base × height, so if both are doubled the area is multiplied by 2 × 2 = 4. Zara is wrong.",
    "q.15.2-09.hints": [
      "Add the parallel sides: 2.3 + 9.8.",
      "Multiply by 4.6 then divide by 2.",
      "12.1 × 4.6 ÷ 2 = ?"
    ],
    "q.15.2-09.explain": "½ × (2.3 + 9.8) × 4.6 = ½ × 12.1 × 4.6 = 27.83 cm². Estimate: ½ × 12 × 5 = 30.",
    "q.15.2-10.hints": [
      "Convert the height to mm or the area to cm² so the units match.",
      "832 mm² = 8.32 cm².",
      "Base = area ÷ height = 8.32 ÷ 2.6."
    ],
    "q.15.2-10.explain": "832 mm² = 8.32 cm². Base = 8.32 ÷ 2.6 = 3.2 cm. (Or 2.6 cm = 26 mm; 832 ÷ 26 = 32 mm = 3.2 cm.)",
    "q.15.3-01.hints": [
      "Work out the area of the triangular cross-section first: ½ × b × h.",
      "½ × 6 × 8 = ?",
      "Multiply that area by the length 10."
    ],
    "q.15.3-01.explain": "Area of cross-section = ½ × 6 × 8 = 24 cm². Volume = 24 × 10 = 240 cm³.",
    "q.15.3-02.hints": [
      "Area of triangle: ½ × 3 × 4.",
      "How many m² is that?",
      "Multiply by 7."
    ],
    "q.15.3-02.explain": "Area = 6 m². V = 6 × 7 = 42 m³.",
    "q.15.3-03.hints": [
      "Area of triangle: ½ × 9 × 12.",
      "½ × 9 × 12 = 54.",
      "54 × 30 = ?"
    ],
    "q.15.3-03.explain": "Area of cross-section 54 cm². V = 54 × 30 = 1620 cm³.",
    "q.15.3-04.hints": [
      "What is the volume of the cuboid 20 × 5 × 7?",
      "What fraction of that cuboid is the triangular prism?",
      "700 ÷ 2 = ?"
    ],
    "q.15.3-04.explain": "Cuboid: 20 × 5 × 7 = 700 mm³. The prism is half of it: 350 mm³. Yari's way: ½ × 5 × 7 × 20 = 350.",
    "q.15.3-05.hints": [
      "The area is in cm² but the length is in mm. Do the units match?",
      "Convert 120 mm to cm.",
      "28 × 12 = ?"
    ],
    "q.15.3-05.explain": "120 mm = 12 cm. V = 28 × 12 = 336 cm³. Vin multiplied by 120 (mm) while the area was in cm.",
    "q.15.3-06.hints": [
      "Convert all lengths to cm first.",
      "30 mm = 3 cm; 200 mm = 20 cm.",
      "½ × 3 × 6 × 20 = ?"
    ],
    "q.15.3-06.explain": "Area of cross-section = ½ × 3 × 6 = 9 cm². V = 9 × 20 = 180 cm³.",
    "q.15.3-07.hints": [
      "Convert the length to m: 10 cm = ? m.",
      "Area of cross-section: ½ × 7 × 9.",
      "31.5 × 0.1 = ?"
    ],
    "q.15.3-07.explain": "10 cm = 0.1 m. Area = 31.5 m². V = 31.5 × 0.1 = 3.15 m³.",
    "q.15.3-08.hints": [
      "Area of cross-section = V ÷ length.",
      "96 ÷ 8 = ? That is ½ × 6 × h.",
      "3 × h = 12."
    ],
    "q.15.3-08.explain": "Area of cross-section = 96 ÷ 8 = 12 cm². ½ × 6 × h = 3h = 12 so h = 4 cm.",
    "q.15.3-09.hints": [
      "Area of cross-section = 168 ÷ 12.",
      "Area = ½ × 4 × h = 2h.",
      "2h = 14."
    ],
    "q.15.3-09.explain": "Area = 168 ÷ 12 = 14 m². ½ × 4 × h = 2h = 14 so h = 7 m.",
    "q.15.3-10.hints": [
      "Volume of prism: ½ × 30 × 12 × 25.",
      "What is the volume of a cube with side 8 mm?",
      "Divide 4500 by 512 and take only the whole number part."
    ],
    "q.15.3-10.explain": "V = ½ × 30 × 12 × 25 = 4500 mm³. One cube: 8³ = 512 mm³. 4500 ÷ 512 ≈ 8.79, so 8 whole cubes can be made; 9 cubes need 4608 mm³ > 4500 so Jan is wrong.",
    "q.15.4-01.hints": [
      "The rectangles measure 8 × 6, 8 × 5 and 8 × 5. What is their total area?",
      "Each triangular end: ½ × 6 × 4 = ?",
      "Add the 3 rectangles and the 2 triangles."
    ],
    "q.15.4-01.explain": "Rectangles: 48 + 40 + 40 = 128. Two triangles: 2 × 12 = 24. Total = 152 cm².",
    "q.15.4-02.hints": [
      "A pyramid has one base face. What shape is the base?",
      "How many triangular side faces are there?",
      "1 + 3."
    ],
    "q.15.4-02.explain": "A triangular base (1 face) and 3 triangular side faces: 4 faces in total.",
    "q.15.4-03.hints": [
      "Area of each triangular end: ½ × 6 × 8.",
      "Three rectangles with widths 6, 8, 10 and length 12: total area = (6 + 8 + 10) × 12.",
      "Add the two ends and the sides."
    ],
    "q.15.4-03.explain": "Two ends: 2 × 24 = 48. Sides: 24 × 12 = 288. Total = 336 cm².",
    "q.15.4-04.hints": [
      "What is the area of the square base?",
      "Each side triangle: ½ × 10 × 14 = ?",
      "Add the base and the 4 triangles."
    ],
    "q.15.4-04.explain": "Base: 100. Each side face: ½ × 10 × 14 = 70, four faces: 280. Total = 380 cm².",
    "q.15.4-05.hints": [
      "For the area of a triangular face do you use the height along the sloping face or the vertical height of the pyramid?",
      "Use the slant height 5: ½ × 6 × 5 = ?",
      "Add 36 and the four faces."
    ],
    "q.15.4-05.explain": "Side faces use the slant height 5: 36 + 4 × 15 = 96. The answer 84 comes from wrongly using the vertical height 4.",
    "q.15.4-06.hints": [
      "How many equal triangular faces are there?",
      "Area of one face: ½ × 15 × 13 = ?",
      "Multiply by the number of faces."
    ],
    "q.15.4-06.explain": "One face: ½ × 15 × 13 = 97.5 cm². Four faces: 4 × 97.5 = 390 cm².",
    "q.15.4-07.hints": [
      "Work out the total surface area of the prism: 2 triangles + 3 rectangles.",
      "The total surface area of a cube with side 7 is 6 × 7².",
      "Compare the two results."
    ],
    "q.15.4-07.explain": "Prism: 2 × 12 + (5 + 5 + 6) × 15 = 24 + 240 = 264 cm². Cube: 6 × 49 = 294 cm². The cube is greater.",
    "q.15.4-08.hints": [
      "Area of one triangular face: ½ × 4 × 3.5 = ? Four faces?",
      "The cuboid has three pairs of faces: 2×2, 2×1.5, 2×1.5. What is the total area?",
      "Take the difference."
    ],
    "q.15.4-08.explain": "Pyramid: 4 × 7 = 28 m². Cuboid: 2 × (4 + 3 + 3) = 20 m². Difference = 8 m².",
    "q.15.4-09.hints": [
      "Work out the area of pyramid A using 5x² with x = 5.",
      "Work out the area of pyramid B with x = 7.",
      "245 − 125 = ?"
    ],
    "q.15.4-09.explain": "A: 5 × 25 = 125 cm². B: 5 × 49 = 245 cm². Difference = 120 cm².",
    "q.15.4-10.hints": [
      "Sketch it to see there is 1 base triangle and 3 side triangles.",
      "Base: ½ × 6 × 5.2. Each side face: ½ × 6 × 8.7.",
      "Add the base and the 3 side faces."
    ],
    "q.15.4-10.explain": "Base: ½ × 6 × 5.2 = 15.6. Each side face: ½ × 6 × 8.7 = 26.1, three faces: 78.3. Total = 93.9 cm².",
    "q.ch-01.q": "A road on a British map is 72 miles long. Given that 5 miles is approximately 8 km, about how many km long is the road?",
    "q.ch-01.hints": [
      "About how many km is 1 mile?",
      "72 × 8 ÷ 5.",
      "576 ÷ 5."
    ],
    "q.ch-01.explain": "72 × 1.6 = 115.2 km.",
    "q.ch-02.q": "A trapezium-shaped field has parallel sides 30 m and 50 m long and a height of 20 m. Find the area of the field.",
    "q.ch-02.hints": [
      "What is the formula for the area of a trapezium?",
      "The sum of the two parallel sides is 80 m.",
      "½ × 80 × 20."
    ],
    "q.ch-02.explain": "A = ½ × (30 + 50) × 20 = 800 m².",
    "q.ch-03.q": "A parallelogram-shaped garden has base 18 m and height 12 m. Exactly one third of the area is used for growing vegetables. What is the area used for vegetables?",
    "q.ch-03.hints": [
      "Work out the area of the whole garden first.",
      "18 × 12 = ?",
      "Take one third."
    ],
    "q.ch-03.explain": "Area 216 m²; 216 ÷ 3 = 72 m².",
    "q.ch-04.q": "A trapezium has area 120 cm² and the sum of its parallel sides is 24 cm. Find the height.",
    "q.ch-04.hints": [
      "Write A = ½ × (sum of parallel sides) × h.",
      "½ × 24 = 12, so 12 × h = 120.",
      "h = 120 ÷ 12."
    ],
    "q.ch-04.explain": "12h = 120 so h = 10 cm.",
    "q.ch-05.q": "A prism has a right-angled triangle as its cross-section with perpendicular sides 6 cm and 8 cm, and the prism is 15 cm tall (long). Work out the volume.",
    "q.ch-05.hints": [
      "Area of the end: ½ × 6 × 8.",
      "It equals 24 cm².",
      "24 × 15."
    ],
    "q.ch-05.explain": "V = 24 × 15 = 360 cm³.",
    "q.ch-06.q": "A water tank is a prism with a triangular cross-section of base 2 m and height 1.5 m, and the tank is 3 m long. How many litres of water does the full tank hold? (1 m³ = 1000 litres)",
    "q.ch-06.hints": [
      "Area of cross-section: ½ × 2 × 1.5.",
      "Volume = 1.5 × 3 (m³).",
      "Multiply by 1000."
    ],
    "q.ch-06.explain": "Area 1.5 m²; V = 4.5 m³ = 4500 litres.",
    "q.ch-07.q": "A cuboid-shaped tank is 2 m long, 1.5 m wide and 1.2 m high and already holds 1200 litres of water. A pump pumps in 40 litres per minute. After how many minutes is the tank full?",
    "q.ch-07.hints": [
      "Volume of the tank: 2 × 1.5 × 1.2 = ? m³ = ? litres.",
      "How many litres are still needed?",
      "Divide by 40."
    ],
    "q.ch-07.explain": "The tank is 3.6 m³ = 3600 litres. 2400 litres are still needed; 2400 ÷ 40 = 60 minutes.",
    "q.ch-08.q": "A prism has a right-angled triangle as its cross-section with sides 5 cm, 12 cm, 13 cm; the prism is 10 cm long. Work out the total surface area.",
    "q.ch-08.hints": [
      "Area of the end: ½ × 5 × 12.",
      "Perimeter of the end: 5 + 12 + 13.",
      "2 × 30 + 30 × 10."
    ],
    "q.ch-08.explain": "Two ends: 60. Sides: 30 × 10 = 300. Total 360 cm².",
    "q.ch-09.q": "The shaded shape is a parallelogram with base 14 cm and height 8 cm after a triangle with base 6 cm and height 8 cm has been cut off. Find the area of the remaining part.",
    "q.ch-09.hints": [
      "Area of the parallelogram: 14 × 8.",
      "Area of the triangle cut off: ½ × 6 × 8.",
      "Take the difference of the two areas."
    ],
    "q.ch-09.explain": "112 − 24 = 88 cm².",
    "q.ch-10.q": "A model pyramid has a square base of side 10 cm and the slant height of each side face is 13 cm. Work out the total surface area of the model.",
    "q.ch-10.hints": [
      "Area of the base: 10 × 10.",
      "Each side face: ½ × 10 × 13.",
      "Add the base and the four side faces."
    ],
    "q.ch-10.explain": "100 + 4 × 65 = 360 cm².",
    "p.goal": "From a square sheet of paper 12 cm × 12 cm, draw six rectangles to cut out and fold into a cuboid. Find the cuboid with the greatest volume.",
    "p.steps": [
      "Choose the three dimensions a, b, c of the cuboid (for example 2 × 3 × 5 cm) and work out the volume and total surface area.",
      "Draw six rectangles (two faces a × b, two faces a × c, two faces b × c) on 12 × 12 squared paper so that they do not overlap.",
      "Count how many squares of paper are wasted; what percentage of the 144 cm² sheet is the total surface area of the cuboid?",
      "Try many different sets of dimensions; make a table with a, b, c, volume and total surface area.",
      "Find the cuboids that use the whole sheet (total surface area = 144 cm²) and compare their volumes."
    ],
    "p.extensions": [
      "When is a cuboid with a square base (a × a × c) best? Find c when 2a² + 4ac = 144.",
      "Try making an open box from the 12 × 12 sheet: cut four squares from the four corners and fold up. Which side length of square gives the greatest volume?",
      "Make a real box from card and hand it in with your table of data."
    ],
    "p.reflect": [
      "What shape is the cuboid with total surface area 144 cm² and the greatest volume? Why do you think so?",
      "With a fixed area of paper, does a box that is 'nearly a cube' have a larger or smaller volume than a flat box?",
      "How did you change the way you drew the rectangles to waste less paper?"
    ]
  },
  vi: {
    "q.15.2-07.howto": "Tính diện tích của A và của B theo cm², rồi nhập phần chênh lệch giữa hai diện tích.",
    "q.15.1-01.q": "Những phát biểu nào sau đây ĐÚNG? (Chọn tất cả đáp án đúng.)",
    "q.15.1-01.choices": [
      "15 dặm xa hơn 15 km.",
      "100 km đúng bằng quãng đường 100 dặm.",
      "2,5 km xa hơn 2,5 dặm.",
      "6 km không xa bằng 6 dặm.",
      "Trong một giờ, một xe chạy 70 dặm/giờ đi quãng đường ngắn hơn xe chạy 70 km/giờ."
    ],
    "q.15.1-02.q": "Zara nói: 'Anh trai tớ sống cách nhà tớ 35 km. Chị gái tớ sống cách nhà tớ 35 dặm. Tớ sống gần anh trai hơn gần chị gái.' Zara có đúng không?",
    "q.15.1-02.choices": [
      "Đúng, vì 35 km là quãng đường ngắn hơn 35 dặm",
      "Sai, vì 35 km xa hơn 35 dặm",
      "Sai, hai quãng đường bằng nhau",
      "Không thể biết nếu không có bản đồ"
    ],
    "q.15.1-03.q": "Đổi 96 km ra dặm. (Dùng 8 km ≈ 5 dặm.)",
    "q.15.1-04.q": "Đổi 55 dặm ra ki-lô-mét. (Dùng 5 dặm ≈ 8 km.)",
    "q.15.1-05.q": "Hamza và Inaya đổi 23 dặm ra ki-lô-mét. Tính kết quả dưới dạng số thập phân. (1 dặm ≈ 8/5 km = 1,6 km.)",
    "q.15.1-06.q": "Đổi 50 dặm ra ki-lô-mét (1 dặm ≈ 1,6 km). Marcus chia: 50 ÷ 1,6 = 31,25 km. Zara nhân: 50 × 1,6 = 80 km. Ai đúng?",
    "q.15.1-06.choices": [
      "Zara: 80 km",
      "Marcus: 31,25 km",
      "Cả hai đều đúng",
      "Không ai đúng: là 30 km"
    ],
    "q.15.1-07.q": "Quãng đường nào xa hơn, 107 km hay 70 dặm? (1 dặm ≈ 1,6 km)",
    "q.15.1-07.choices": [
      "70 dặm",
      "107 km",
      "Bằng nhau"
    ],
    "q.15.1-08.q": "Đồng hồ đo quãng đường xe của Evan chỉ 125 465 dặm vào đầu tuần và 126 335 dặm vào cuối tuần. Tuần này anh ấy đã đi bao nhiêu ki-lô-mét? (1 dặm ≈ 1,6 km)",
    "q.15.1-09.q": "Evan được trả 20 xu (cent) cho mỗi ki-lô-mét anh ấy đi. Dùng quãng đường ở câu trước (870 dặm, 1 dặm ≈ 1,6 km), anh ấy được trả bao nhiêu đô-la trong tuần? (Evan nghĩ là hơn 250 đô-la.)",
    "q.15.1-10.q": "Giới hạn tốc độ là 70 dặm một giờ. Đổi ra ki-lô-mét một giờ là bao nhiêu? (1 dặm ≈ 1,6 km)",
    "q.15.2-01.q": "Tìm diện tích hình bình hành này có đáy 8 cm và chiều cao vuông góc 4 cm.",
    "q.15.2-02.q": "Một hình bình hành có đáy 6 m và chiều cao vuông góc 1,5 m. Tìm diện tích của nó.",
    "q.15.2-03.q": "Tìm diện tích hình thang. Hai cạnh song song là 6 cm và 8 cm và chiều cao vuông góc là 5 cm.",
    "q.15.2-04.q": "Một hình thang có hai cạnh song song 4 mm và 12 mm và chiều cao vuông góc 7 mm. Tìm diện tích của nó.",
    "q.15.2-05.q": "Bembe tính diện tích hình bình hành này là 7 × 5 = 35 cm². Đáy là 7 cm, cạnh bên nghiêng là 5 cm và chiều cao vuông góc là 4 cm. Diện tích đúng là bao nhiêu?",
    "q.15.2-06.q": "Sofia tính (a + b) ÷ 2, rồi nhân với h. Marcus tính một nửa của h, rồi (a + b), rồi nhân hai kết quả của mình. Zara tính (a + b), nhân với h, rồi chia 2. Cả ba bạn có ra cùng diện tích không?",
    "q.15.2-06.choices": [
      "Có, cả ba đều bằng ½ × (a + b) × h",
      "Không, chỉ Sofia đúng",
      "Không, chỉ Zara đúng",
      "Không, kết quả của Marcus khác"
    ],
    "q.15.2-07.q": "Hình bình hành A có đáy 15 mm và chiều cao 12 mm. Hình thang B có hai cạnh song song 6 cm và 10 cm và chiều cao vuông góc 9 cm. Tính hiệu diện tích, theo cm².",
    "q.15.2-08.q": "Zara nói: 'Nếu gấp đôi đáy và gấp đôi chiều cao của một hình bình hành thì diện tích sẽ gấp đôi.' Diện tích thật sự thay đổi bao nhiêu lần?",
    "q.15.2-09.q": "Một hình thang có hai cạnh song song 2,3 cm và 9,8 cm, và chiều cao vuông góc 4,6 cm. Dùng máy tính để tìm diện tích của nó.",
    "q.15.2-10.q": "Một hình bình hành có diện tích 832 mm². Chiều cao vuông góc của nó là 2,6 cm. Độ dài đáy là bao nhiêu xen-ti-mét?",
    "q.15.3-01.q": "Tìm thể tích của lăng trụ tam giác này. Tam giác vuông có đáy 6 cm và chiều cao 8 cm; lăng trụ dài 10 cm.",
    "q.15.3-02.q": "Một lăng trụ tam giác có mặt cắt ngang với đáy 3 m và chiều cao 4 m. Lăng trụ dài 7 m. Tìm thể tích của nó.",
    "q.15.3-03.q": "Một lăng trụ tam giác có mặt cắt ngang là tam giác đáy 9 cm và chiều cao vuông góc 12 cm. Lăng trụ dài 30 cm. Tìm thể tích của nó.",
    "q.15.3-04.q": "Yari tìm thể tích của một lăng trụ tam giác có đáy 5 mm, chiều cao 7 mm và chiều dài 20 mm. Mike lấy một nửa thể tích của hình hộp chữ nhật 20 × 5 × 7 mm. Hai bạn cùng ra thể tích bao nhiêu?",
    "q.15.3-05.q": "Bài tập về nhà của Vin: một lăng trụ tam giác có đáy tam giác 8 cm, chiều cao 7 cm và chiều dài 120 mm. Bạn tính ½ × 7 × 8 = 28 cm², rồi 28 × 120 = 3360 cm³. Thể tích đúng là bao nhiêu?",
    "q.15.3-06.q": "Một lăng trụ tam giác có đáy 30 mm, chiều cao 6 cm và chiều dài 200 mm. Tính thể tích của nó theo cm³.",
    "q.15.3-07.q": "Một lăng trụ tam giác có đáy 7 m, chiều cao 9 m và chiều dài 10 cm. Tính thể tích của nó theo m³.",
    "q.15.3-08.q": "Một lăng trụ tam giác có thể tích 96 cm³ và dài 8 cm. Mặt cắt ngang tam giác của nó có đáy 6 cm. Tìm chiều cao của tam giác.",
    "q.15.3-09.q": "Một lăng trụ tam giác có thể tích 168 m³, đáy 4 m và chiều dài 12 m. Tính chiều cao của tam giác.",
    "q.15.3-10.q": "Một lăng trụ tam giác bằng bạc có mặt cắt ngang là tam giác đáy 30 mm và chiều cao 12 mm, dài 25 mm. Jan nấu chảy nó và làm các khối lập phương cạnh 8 mm. Jan nghĩ bạn làm được chín khối. Thực sự bạn làm được bao nhiêu khối lập phương nguyên vẹn?",
    "q.15.4-01.q": "Một lăng trụ tam giác có hai đáy là tam giác cân với cạnh đáy 6 cm, chiều cao vuông góc 4 cm và cạnh bên nghiêng 5 cm. Lăng trụ dài 8 cm. Tính diện tích toàn phần của nó bằng hình khai triển (3 hình chữ nhật và 2 tam giác).",
    "q.15.4-02.q": "Hình chóp đáy tam giác (tứ diện) có bao nhiêu mặt?",
    "q.15.4-03.q": "Một lăng trụ có hai đáy là tam giác vuông với hai cạnh góc vuông 6 cm và 8 cm và cạnh huyền 10 cm. Lăng trụ dài 12 cm. Tìm diện tích toàn phần của nó.",
    "q.15.4-04.q": "Một hình chóp đáy vuông có cạnh đáy 10 cm. Chiều cao vuông góc của mỗi mặt tam giác là 14 cm. Tìm diện tích toàn phần.",
    "q.15.4-05.q": "Một hình chóp đáy vuông có cạnh đáy 6 cm, chiều cao thẳng đứng 4 cm và đường cao mặt bên (slant height, chiều cao của mỗi mặt tam giác) 5 cm. Diện tích toàn phần là bao nhiêu?",
    "q.15.4-06.q": "Một hình chóp đáy tam giác có bốn mặt tam giác giống hệt nhau. Mỗi tam giác có đáy 15 cm và chiều cao vuông góc 13 cm. Tìm diện tích toàn phần.",
    "q.15.4-07.q": "Một lăng trụ tam giác có hai đáy tam giác với cạnh đáy 6 cm, chiều cao vuông góc 4 cm và cạnh bên nghiêng 5 cm, dài 15 cm. Một hình lập phương có cạnh 7 cm. Hình nào có diện tích toàn phần lớn hơn?",
    "q.15.4-07.choices": [
      "Lăng trụ tam giác",
      "Hình lập phương",
      "Bằng nhau"
    ],
    "q.15.4-08.q": "Một hình chóp đáy tam giác có bốn mặt tam giác giống hệt nhau, mỗi mặt có đáy 4 m và chiều cao vuông góc 3,5 m. Một hình hộp chữ nhật có kích thước 2 m, 2 m, 1,5 m. Diện tích toàn phần của hình chóp lớn hơn của hình hộp bao nhiêu mét vuông?",
    "q.15.4-09.q": "Một hình chóp đáy vuông có cạnh đáy x cm, và chiều cao vuông góc của mỗi mặt tam giác là 2x cm, nên diện tích toàn phần là x² + 4 × (½ × x × 2x) = 5x² cm². Hình chóp A có x = 5 và hình chóp B có x = 7. Hiệu diện tích toàn phần của chúng là bao nhiêu?",
    "q.15.4-10.q": "Đáy của một hình chóp tam giác là tam giác đều có cạnh đáy 6 cm và chiều cao vuông góc 5,2 cm. Ba mặt bên là các tam giác cân có đáy 6 cm và chiều cao vuông góc 8,7 cm. Tính diện tích toàn phần."
  }
});
