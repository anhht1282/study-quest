window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 5,
  en: {
    "q.ch-08.howto": "Enter only the size (in degrees) of the angle between ray At and side AC. The part about At // BC is for you to notice; you do not type it.",
    "q.ch-01.howto": "The question asks for the size of the larger of the two angles (in degrees), not the value of x.",
    "u.realm": "Parallel Valley",
    "u.story": "You arrive in Parallel Valley, where train tracks never meet and every bridge must be built exactly with a ruler and compasses. To cross the valley, you must prove that angles are equal using careful reasoning, just like the ancient mathematician Euclid.",
    "g.0.def": "Two angles opposite each other when two lines cross; they are always equal.",
    "g.1.def": "A line that crosses two (or more) other lines.",
    "g.2.def": "Two angles in the same position (an F shape) when a transversal crosses two parallel lines; they are equal.",
    "g.3.def": "Two angles between two parallel lines, on opposite sides of the transversal (a Z shape); they are equal.",
    "g.4.def": "The angle between one side of a triangle and the extension of the adjacent side; it equals the sum of the two interior opposite angles.",
    "g.5.def": "Logical reasoning in which every step has a reason.",
    "g.6.def": "Drawing accurately using only a ruler and compasses.",
    "g.7.def": "Part of a circle, drawn with compasses.",
    "g.8.def": "A line that divides an angle (or a line segment) into two equal parts.",
    "g.9.def": "The side opposite the right angle in a right-angled triangle.",
    "s.5.1.learn": [
      "Vertically opposite angles (an X shape) are always equal; two adjacent angles on a straight line add up to 180°.",
      "When a transversal crosses two parallel lines, corresponding angles (an F shape) are equal.",
      "Alternate angles (a Z shape, between the two parallel lines) are also equal.",
      "Co-interior angles (between the two parallel lines, on the same side of the transversal) are supplementary: they add up to 180°.",
      "A proof must give a reason for each step: 'vertically opposite', 'corresponding', 'alternate', 'angles on a straight line'."
    ],
    "ex.5.1.q": "Two parallel lines are crossed by a transversal. The upper-left angle at the lower crossing is 65°. Find the lower-right angle at the upper crossing (alternate to it) and give reasons.",
    "ex.5.1.steps": [
      "The upper-left angle at the upper crossing = 65° because it is corresponding to the 65° angle at the lower crossing.",
      "The lower-right angle at the upper crossing is vertically opposite that angle, so it is also 65°.",
      "Conclusion: the alternate angle = 65° (corresponding, then vertically opposite)."
    ],
    "ex.5.1.prompts": [
      "Where are the 65° angle at the lower crossing and the upper-left angle at the upper crossing, relative to the two parallel lines: alternate, corresponding or co-interior? How are these two angles related?",
      "The angle you just found and the lower-right angle at the upper crossing share a vertex and are opposite each other. How are two such angles related?",
      "Summarise as a rule: for two parallel lines, how are alternate angles related?"
    ],
    "ex.5.1.twist": "Two parallel lines are crossed by a transversal; one interior angle is 65°. How many degrees is the co-interior angle on the same side as it?",
    "s.5.2.learn": [
      "Extend one side of a triangle; the angle between the adjacent side and the extension is an exterior angle.",
      "Exterior angle + the interior angle next to it = 180° (angles on a straight line).",
      "An exterior angle of a triangle equals the sum of the two interior opposite angles.",
      "Proof: a + b + c = 180° and c + d = 180°, so d = a + b.",
      "The three exterior angles of a triangle (one at each vertex) always add up to 360°."
    ],
    "ex.5.2.q": "In triangle ABC, angle A = 50° and angle B = 65°. BC is extended beyond C. Work out the exterior angle at C.",
    "ex.5.2.steps": [
      "The exterior angle at C equals the sum of the two interior opposite angles: A + B",
      "= 50° + 65° = 115°",
      "Check: angle C = 180° − 115° = 65°; 65° + 115° = 180° ✔"
    ],
    "ex.5.2.prompts": [
      "How is the exterior angle at C related to angle C in the triangle, and to the two interior opposite angles?",
      "Substitute the values of angle A and angle B into that relationship: how big is the exterior angle?",
      "Is there another way to check, using the sum of the three angles of a triangle?"
    ],
    "ex.5.2.twist": "If angle A = 50° and the exterior angle at C is 130°, how many degrees is angle B?",
    "s.5.3.learn": [
      "To construct a triangle given two angles and the side between them (ASA): draw the side, draw the two angles at its ends; where the two rays cross is the third vertex.",
      "Given two sides and the angle between them (SAS): draw the angle first, measure the two sides along the two rays, then join the ends.",
      "Given three sides (SSS): draw one side, then use compasses to draw two arcs from its ends with radii equal to the other two sides; where the arcs cross is the third vertex (the two shorter sides must add up to more than the longest side).",
      "A right-angled triangle given the hypotenuse and one other side (RHS): draw the side, construct a right angle, then draw an arc with radius equal to the hypotenuse from the other end.",
      "The perpendicular bisector of a line segment passes through its midpoint at right angles; an angle bisector divides an angle into two equal angles. Do not rub out construction lines."
    ],
    "ex.5.3.q": "Describe the steps to construct triangle ABC with AB = 5 cm, BC = 4 cm and AC = 4.5 cm.",
    "ex.5.3.steps": [
      "Draw line AB = 5 cm.",
      "Set the compasses to 4.5 cm, put the point on A and draw an arc.",
      "Set the compasses to 4 cm, put the point on B and draw an arc crossing the first arc at C.",
      "Join AC and BC."
    ],
    "ex.5.3.prompts": [
      "To start the construction, which part of the triangle do you fix first, and which tool do you use?",
      "Point C is exactly 4.5 cm from A. What do all such points look like, and how do you draw them?",
      "C must also be exactly 4 cm from B. So where is C compared with the two arcs you have drawn?",
      "Once you have C, which lines are still missing to complete the triangle?"
    ],
    "ex.5.3.twist": "If it were changed to AB = 5 cm, BC = 2 cm, AC = 2 cm, could you construct the triangle? Answer 'yes' or 'no'.",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The valley gate opens only when you can solve Grade 7 style problems on angles and proving lines are parallel.",
    "q.5.1-01.hints": [
      "The angles 62° and x are in the same position at the upper and lower crossings. Which letter shape suggests this pair of angles?",
      "The letter F: what kind of angles are these when the lines are parallel?",
      "Are corresponding angles equal or supplementary?"
    ],
    "q.5.1-01.explain": "x and 62° are corresponding angles; the lines are parallel so corresponding angles are equal. So x = 62°.",
    "q.5.1-02.hints": [
      "Which two lines cross to make the 48° angle and angle x?",
      "These two angles are opposite each other at the crossing point (an X shape). What are they called?",
      "Are vertically opposite angles equal or do they add up to 180°?"
    ],
    "q.5.1-02.explain": "x and 48° are vertically opposite angles, so they are equal: x = 48°.",
    "q.5.1-03.hints": [
      "Alternate angles lie between the two parallel lines. Of the angles a, b, c, d, e, f, which lie between the two lines?",
      "Two alternate angles are on opposite sides of the transversal (a Z shape). Check each pair: which angle is on the left and which on the right?",
      "Which pair has an angle between the lines on the right at the upper line and an angle between the lines on the left at the lower line?"
    ],
    "q.5.1-03.explain": "c (between the lines, on the right, at the upper line) and e (between the lines, on the left, at the lower line) make a Z shape so they are alternate angles. a and e, b and f are corresponding; d and e are on the same side so they are co-interior (supplementary).",
    "q.5.1-04.hints": [
      "The angles 112° and x both lie between the two parallel lines. Are they on the same side or opposite sides of the transversal?",
      "What are two angles between parallel lines, on opposite sides of the transversal, called?",
      "Are alternate angles equal or supplementary?"
    ],
    "q.5.1-04.explain": "112° and x are alternate angles (Z shape) so they are equal: x = 112°.",
    "q.5.1-05.hints": [
      "Angle x is at the lower crossing (below and to the right). Find the angle at the upper crossing in the same position as x (the corresponding angle): how is it related to 136°?",
      "136° and that corresponding angle are next to each other on a straight line. How many degrees do they add up to?",
      "So how big is the corresponding angle, 180° − 136°?"
    ],
    "q.5.1-05.explain": "The lower-right angle at the upper crossing is next to 136° on a straight line, so it is 180° − 136° = 44°. x is corresponding to that angle so x = 44°.",
    "q.5.1-06.hints": [
      "The angles 105° and y share one arm and lie on the same straight line. What kind of angles are they?",
      "Angles with the property 'equal' are vertically opposite angles. Are 105° and y vertically opposite?",
      "How many degrees do two angles on a straight line add up to?"
    ],
    "q.5.1-06.explain": "105° and y are on a straight line so y = 180° − 105° = 75°. Common mistake: thinking adjacent angles are equal (only vertically opposite angles are equal).",
    "q.5.1-07.hints": [
      "What kind of pair are (2x + 10)° and 70° (remember the letter F)?",
      "Since they are equal, which equation can you write?",
      "Solve 2x + 10 = 70: subtract 10 from both sides, then divide by 2. What do you get?"
    ],
    "q.5.1-07.explain": "Corresponding angles are equal, so 2x + 10 = 70 ⇒ 2x = 60 ⇒ x = 30.",
    "q.5.1-08.hints": [
      "If two lines are parallel, how must corresponding angles be related?",
      "Are 58° and 62° equal?",
      "From this contradiction, what do you conclude about the two lines?"
    ],
    "q.5.1-08.explain": "Parallel lines ⇒ corresponding angles are equal. Here 58° ≠ 62°, so the lines cannot be parallel. You must not conclude from 'looks similar' or 'nearly equal'.",
    "q.5.1-09.hints": [
      "To get from c to e you need an angle in between. Which angle at the upper crossing is vertically opposite c?",
      "That angle in between (a) and e are in the same position at the two different crossings. What kind of pair are they?",
      "Check each option: are the reasons 'vertically opposite' and 'corresponding' used for the right pairs of angles?"
    ],
    "q.5.1-09.explain": "c and a are vertically opposite (X) so c = a; a and e are corresponding (F) so a = e. Hence c = e. The other options use the wrong pair of angles or the wrong reason (c and b are on a straight line, c and g are corresponding, not alternate).",
    "q.5.1-10.hints": [
      "How is angle d at C related to angle A (two alternate angles between parallel lines)?",
      "Similarly, how is angle e related to angle B?",
      "The angles d, c, e are next to each other on a straight line. What do they add up to? Use this to find c."
    ],
    "q.5.1-10.explain": "d = A = 50° (alternate), e = B = 60° (alternate). On line CD: d + c + e = 180° so c = 180° − 50° − 60° = 70°. This is exactly the proof that the angles of a triangle add up to 180°.",
    "q.5.2-01.hints": [
      "Angle x is at C, outside the triangle. Which are the two interior opposite angles?",
      "Is the exterior angle the sum or the difference of those two interior angles?",
      "Add 80° and 45°."
    ],
    "q.5.2-01.explain": "An exterior angle equals the sum of the two interior opposite angles: x = 80° + 45° = 125°.",
    "q.5.2-02.hints": [
      "The exterior angle 128° is the sum of which two angles?",
      "You know one of them is 75°. Write the calculation: 75° + y = ?",
      "So what is y = 128° − 75°?"
    ],
    "q.5.2-02.explain": "Exterior angle = A + B so 128° = 75° + y, which gives y = 53°.",
    "q.5.2-03.hints": [
      "The exterior angle equals the sum of the two interior opposite angles. Write an equation in x.",
      "You get 3x + 10 = 50 + 2x. To collect the x terms on one side, what do you do?",
      "Subtract 2x from both sides, then subtract 10: what is x?"
    ],
    "q.5.2-03.explain": "3x + 10 = 50 + 2x ⇒ x = 40. Check: the exterior angle = 130° and 50° + 80° = 130° ✔.",
    "q.5.2-04.hints": [
      "Angle y is an exterior angle of triangle BCD. Which are the two interior opposite angles?",
      "One of them is DBC = 30°. How do you find angle BDC from 110° (A, D, C are collinear)?",
      "Add BDC and 30° to get y."
    ],
    "q.5.2-04.explain": "∠BDC = 180° − 110° = 70° (angles on a straight line). y is an exterior angle of triangle BCD so y = ∠BDC + ∠DBC = 70° + 30° = 100°.",
    "q.5.2-05.hints": [
      "In an isosceles triangle with AB = AC, which two angles are equal?",
      "Each base angle equals (180° − 48°) divided by 2. What is it?",
      "The exterior angle at B equals the sum of the two interior opposite angles: angle A and angle C."
    ],
    "q.5.2-05.explain": "∠B = ∠C = (180° − 48°) ÷ 2 = 66°. Exterior angle at B = ∠A + ∠C = 48° + 66° = 114° (also equal to 180° − 66°).",
    "q.5.2-06.hints": [
      "The exterior angle at C equals the sum of which two interior angles?",
      "Do not choose the interior angle ∠C (that is 70°). Work out the sum A + B.",
      "60° + 50° = ? Then check: do the exterior angle + 70° add up to 180°?"
    ],
    "q.5.2-06.explain": "Exterior angle = 60° + 50° = 110°. Common mistakes: 70° is the INTERIOR angle at C; 120° = 180° − 60° and 130° = 180° − 50° use only one angle.",
    "q.5.2-07.hints": [
      "Since AB = AC, which angle equals angle ACB? From that, how big is angle A?",
      "DE is parallel to AB: angle EDC and which angle of triangle ABC are corresponding angles?",
      "Corresponding angles are equal; the answer is angle A."
    ],
    "q.5.2-07.explain": "∠C = ∠B = 72° so ∠A = 180° − 144° = 36°. DE ∥ AB so ∠EDC = ∠A = 36° (corresponding).",
    "q.5.2-08.hints": [
      "What do an exterior angle and its adjacent interior angle add up to? Find the interior angles for 130° and 110°.",
      "Those two interior angles are 50° and 70°. How big is the third interior angle?",
      "From the third interior angle, work out the third exterior angle."
    ],
    "q.5.2-08.explain": "Interior angles: 180° − 130° = 50°, 180° − 110° = 70°, third interior angle = 60°, so the third exterior angle = 120°. Quick way: 360° − 130° − 110° = 120°.",
    "q.5.2-09.hints": [
      "Which two facts do you know about a, b, c and about c, d?",
      "The angles c and d share a vertex and lie on a straight line. How are they related?",
      "Compare the two equations a + b + c = 180° and c + d = 180° — if the right-hand sides are the same, what follows?"
    ],
    "q.5.2-09.explain": "Subtract c from both equations: a + b = 180° − c and d = 180° − c, so d = a + b. The other arguments use the wrong reason (d and c are on a straight line, not vertically opposite or corresponding) or a false fact (an exterior angle is less than 180°).",
    "q.5.2-10.hints": [
      "What do the five angles at the five points of the star add up to?",
      "How much do the four known angles 30° + 40° + 35° + 45° add up to?",
      "Subtract the sum of the four angles from the overall total."
    ],
    "q.5.2-10.explain": "30° + 40° + 35° + 45° = 150°; the remaining angle = 180° − 150° = 30°. (The total of 180° is proved by using the exterior angle of a triangle twice.)",
    "q.5.3-01.hints": [
      "When you know no angles, which tool do you use to 'transfer' the length of a side to a new position?",
      "What distances must the third vertex be from the two ends of the side you have drawn?",
      "What do the two crossing arcs give you?"
    ],
    "q.5.3-01.explain": "The third vertex is at distances equal to the other two sides from the two ends of the drawn side, so it is where two arcs with exactly those radii cross.",
    "q.5.3-02.hints": [
      "Side AB lies between the two given angles. Should you draw the side first or the angles first?",
      "At which points are the angles 60° and 50° drawn?",
      "Where does vertex C appear when you draw the two rays?"
    ],
    "q.5.3-02.explain": "ASA: draw side AB first, then draw the angles at the two ends A and B; where the two rays cross is C.",
    "q.5.3-03.hints": [
      "For the arcs from A and from B to cross, must the compass radius be more or less than half of AB?",
      "Do you need to change the compass width between drawing the arc from A and the arc from B?",
      "What line do you get by joining the two crossing points, and which point of AB does it pass through?"
    ],
    "q.5.3-03.explain": "With the same radius (more than half of AB), the arcs from A and B cross at two points that are equidistant from A and B; the line through those two points passes through the midpoint and is perpendicular to AB.",
    "q.5.3-04.hints": [
      "The hypotenuse joins which two points (opposite the right angle)?",
      "How far must C be from B? So where do you place the centre of the arc?",
      "C must also lie on which line already drawn perpendicular at A?"
    ],
    "q.5.3-04.explain": "The hypotenuse BC = 9 cm so C is exactly 9 cm from B: draw an arc with centre B and radius 9 cm crossing the perpendicular constructed at A.",
    "q.5.3-05.hints": [
      "How many degrees do the three angles of a triangle add up to?",
      "How much do the two given angles add up to?",
      "Subtract the sum of the two angles from the overall total."
    ],
    "q.5.3-05.explain": "65° + 42° = 107°; third angle = 180° − 107° = 73°.",
    "q.5.3-06.hints": [
      "Into how many parts does an angle bisector divide an angle?",
      "Are those two parts equal or different?",
      "What is 126° divided by 2?"
    ],
    "q.5.3-06.explain": "An angle bisector divides the angle into two equal angles: 126° ÷ 2 = 63°.",
    "q.5.3-07.hints": [
      "Draw the 8 cm side. Draw arcs of radius 3 cm and 4 cm from its two ends: can they reach each other?",
      "For the two arcs to meet, how must the sum of the two radii compare with 8 cm?",
      "How does 3 + 4 compare with 8?"
    ],
    "q.5.3-07.explain": "The two shorter sides must add up to more than the longest side. 3 + 4 = 7 < 8 so the arcs do not cross: the triangle cannot be constructed. Common mistake: thinking any three lengths make a triangle.",
    "q.5.3-08.hints": [
      "A 3-4-5 triangle has hypotenuse 5 and shorter sides 3 and 4. Which side does 10 correspond to?",
      "What is the scale factor from 4 up to 10? (and from 5 up to 12.5?)",
      "Multiply that scale factor by 3 to find the remaining side."
    ],
    "q.5.3-08.explain": "The scale factor is 2.5 (4 × 2.5 = 10; 5 × 2.5 = 12.5). The remaining side = 3 × 2.5 = 7.5 cm. You can check with an accurate drawing.",
    "q.5.3-09.hints": [
      "You do not yet know whether 10.5 cm is the hypotenuse. Consider two possibilities.",
      "If 10.5 is the hypotenuse, must the other side be shorter or longer than 10.5?",
      "If both given sides are the shorter sides, is the hypotenuse longer or shorter than them?"
    ],
    "q.5.3-09.explain": "The question does not say which side is the hypotenuse. If 10.5 is the hypotenuse then the other side ≈ 6.4 cm; if 10.5 and 8.3 are the two shorter sides then the hypotenuse ≈ 13.4 cm. Both are correct.",
    "q.5.3-10.hints": [
      "Try constructing very accurately on an acute-angled triangle and then an obtuse-angled triangle.",
      "Do the three perpendicular bisectors pass through the same point? What about the three angle bisectors?",
      "If the result is the same on many different triangles, what do you conclude (and why is it still not a proof)?"
    ],
    "q.5.3-10.explain": "Both are right for every triangle: the three perpendicular bisectors meet at the circumcentre, and the three angle bisectors meet at the incentre. Constructions only give a conjecture; to be certain you need a proof.",
    "q.ch-01.q": "a // b and a transversal c crosses a and b. Two co-interior angles measure (2x + 10)° and (3x − 20)° as shown. Work out the size of the larger of the two angles.",
    "q.ch-01.hints": [
      "How are two co-interior angles of parallel lines related?",
      "Write the equation: (2x + 10) + (3x − 20) = 180. Solve for x.",
      "Substitute x into both expressions and choose the larger number."
    ],
    "q.ch-01.explain": "Co-interior angles are supplementary: 5x − 10 = 180 ⇒ x = 38. The two angles are 86° and 94°. The larger angle is 94°.",
    "q.ch-02.q": "Two parallel lines are crossed by a transversal. Two co-interior angles differ by 40°. Work out the size of the larger angle.",
    "q.ch-02.hints": [
      "How many degrees do two co-interior angles add up to?",
      "Let the smaller angle be t and the larger be t + 40. Write an equation for the total.",
      "Solve 2t + 40 = 180 then find the larger angle."
    ],
    "q.ch-02.explain": "Let the smaller angle be t: t + (t + 40) = 180 ⇒ t = 70. The larger angle = 110°.",
    "q.ch-03.q": "Line c crosses lines a and b, making two co-interior angles of 118° and 62°. Which conclusion is correct and has correct reasoning?",
    "q.ch-03.choices": [
      "a // b because the two co-interior angles add up to 118° + 62° = 180°",
      "a // b because the two corresponding angles are equal",
      "a is not parallel to b because the two angles are not equal",
      "There is not enough information to conclude"
    ],
    "q.ch-03.hints": [
      "If a // b then co-interior angles are supplementary. Can the converse be used to prove lines are parallel?",
      "Work out 118° + 62°.",
      "Does the question say these two angles are corresponding?"
    ],
    "q.ch-03.explain": "Co-interior angles that are supplementary (sum 180°) ⇒ a // b. Co-interior angles do not need to be equal; it is corresponding angles that are equal.",
    "q.ch-04.q": "a ⟂ c and b ⟂ c. Why is a // b?",
    "q.ch-04.choices": [
      "Because the two corresponding angles are both 90°, so they are equal, which means a // b",
      "Because c is the only line that passes through both a and b",
      "Because the two angles on a straight line are both 90°, so a coincides with b",
      "Because two perpendicular lines always cross"
    ],
    "q.ch-04.hints": [
      "a and b cross c, making corresponding angles. How many degrees is each of those angles?",
      "What do equal corresponding angles tell you about a and b?",
      "Rule out the answers with faulty reasoning: do a and b coincide?"
    ],
    "q.ch-04.explain": "The two corresponding angles are both 90° so they are equal, hence a // b. (Two lines perpendicular to the same third line are parallel.)",
    "q.ch-05.q": "In triangle ABC, angle A = 70° and angle C = 30°. BD is the bisector of angle B (D on AC). Work out angle ADB (marked x in the diagram).",
    "q.ch-05.hints": [
      "Work out angle B of triangle ABC, then angle DBC after halving.",
      "Angle ADB is an exterior angle of which triangle? Which two interior angles are opposite it?",
      "Add angle DBC and angle C."
    ],
    "q.ch-05.explain": "∠B = 180° − 70° − 30° = 80°, ∠DBC = 40°. Angle ADB is an exterior angle of triangle BDC so it equals 40° + 30° = 70°.",
    "q.ch-06.q": "Rays Ax and By are parallel and both point to the right. Point C lies between the two lines as shown, angle xAC = 130° and angle yBC = 110°. Work out angle ACB.",
    "q.ch-06.hints": [
      "Through C draw ray Cz parallel to Ax (pointing right). Is ray Cz also parallel to By?",
      "Angle ACz is supplementary to angle xAC, and angle zCB is supplementary to angle yBC (co-interior pairs). Work out each angle.",
      "Angle ACB is the sum of those two angles."
    ],
    "q.ch-06.explain": "Draw Cz // Ax // By. ∠ACz = 180° − 130° = 50° (co-interior), ∠zCB = 180° − 110° = 70°. So ∠ACB = 50° + 70° = 120°. (Formula: 360° − 130° − 110°.)",
    "q.ch-07.q": "Two parallel lines a // b are crossed by transversal c. Draw the bisector of each angle in a pair of alternate angles. How are these two bisectors related?",
    "q.ch-07.choices": [
      "They are parallel to each other",
      "They are perpendicular to each other",
      "They cross at an angle of 45°",
      "They coincide"
    ],
    "q.ch-07.hints": [
      "Alternate angles between parallel lines are equal. How does each bisector halve its angle?",
      "Are the two half-angles equal? What kind of pair are they for the two bisectors and the transversal?",
      "If the half-angles are equal alternate angles, how are the two bisectors related?"
    ],
    "q.ch-07.explain": "The two alternate angles are equal so their halves are also equal. These halves are alternate angles for the two bisectors and the transversal, so the two bisectors are parallel.",
    "q.ch-08.q": "Triangle ABC is isosceles at A, with angle A = 50°. Ray At bisects the exterior angle at vertex A. Work out the angle between At and side AC (and notice that At // BC).",
    "q.ch-08.hints": [
      "Is the exterior angle at A equal to 180° minus the interior angle at A, or to the sum of the two base angles?",
      "The two base angles are equal and how big is each? So how big is the exterior angle at A?",
      "Halve that exterior angle to get the angle between At and AC."
    ],
    "q.ch-08.explain": "Exterior angle at A = 180° − 50° = 130°; half of it = 65°. Base angle C = (180° − 50°) ÷ 2 = 65° so At makes with AC an alternate angle equal to angle C ⇒ At // BC.",
    "q.ch-09.q": "Angles xOy and yOz are adjacent on a straight line. Om bisects angle xOy and On bisects angle yOz. Work out angle mOn.",
    "q.ch-09.hints": [
      "How many degrees do two adjacent angles on a straight line add up to?",
      "Angle mOn equals half of angle xOy plus half of angle yOz. Write that down.",
      "What is half of the total 180°?"
    ],
    "q.ch-09.explain": "∠mOn = ½∠xOy + ½∠yOz = ½(∠xOy + ∠yOz) = ½ × 180° = 90°.",
    "q.ch-10.q": "Triangle ABC has an exterior angle at B of 130°. The two interior angles A and C are in the ratio 2 : 3. Work out angle C.",
    "q.ch-10.hints": [
      "The exterior angle at B equals the sum of which two interior angles?",
      "A + C = 130° and A : C = 2 : 3. Split 130° into 5 equal parts: how big is each part?",
      "Angle C is 3 parts."
    ],
    "q.ch-10.explain": "The exterior angle = A + C = 130°. Split into 2 + 3 = 5 parts: each part is 26°. So A = 52°, C = 78°."
  },
  vi: {
    "q.5.2-07.howto": "Tìm số đo góc EDC, tức góc tại D giữa DE và DC (kí hiệu x trên hình). Nhập số đo theo độ.",
    "q.5.2-03.howto": "x là chữ có trong các biểu thức góc. Nhập giá trị của x, không phải số đo của góc nào.",
    "q.5.1-07.howto": "x là chữ trong nhãn góc (2x + 10)°. Nhập giá trị của x, không phải số đo của góc.",
    "q.5.1-02.howto": "Tìm số đo góc x (độ). Hãy tự nghĩ lí do (tính chất góc em dùng), nhưng chỉ cần nhập con số.",
    "q.5.1-01.q": "Hai đường nằm ngang song song. Tìm x.",
    "q.5.1-02.q": "Tìm x. Nêu lý do.",
    "q.5.1-03.q": "Trong hình, hai đường nằm ngang song song. Cặp góc nào là cặp góc so le trong?",
    "q.5.1-04.q": "Hai đường có mũi tên song song. Tìm x.",
    "q.5.1-05.q": "Các đường nằm ngang song song. Tính x.",
    "q.5.1-06.q": "Hai đường thẳng cắt một cát tuyến. Tại giao điểm phía trên, một góc là 105°. Chen nói góc y kề với nó (trên cùng một đường thẳng) cũng bằng 105°. Phát biểu nào đúng?",
    "q.5.1-06.choices": [
      "y = 105°, vì các góc kề nhau thì bằng nhau",
      "y = 75°, vì các góc trên một đường thẳng cộng lại bằng 180°",
      "y = 105°, vì chúng là hai góc đối đỉnh",
      "y = 15°, vì hai đường thẳng song song"
    ],
    "q.5.1-07.q": "Các đường thẳng song song. Tìm giá trị của x.",
    "q.5.1-08.q": "Một học sinh vẽ hai đường thẳng cắt một cát tuyến. Một cặp góc đồng vị đo được là 58° và 62°. Em có thể kết luận gì?",
    "q.5.1-08.choices": [
      "Hai đường song song, vì chúng trông cách đều nhau",
      "Hai đường song song, vì 58° và 62° đủ gần nhau",
      "Hai đường không thể song song, vì các góc đồng vị của hai đường song song phải bằng nhau",
      "Hai đường không thể song song, vì các góc so le trong là 58° và 62°"
    ],
    "q.5.1-09.q": "Các đường nằm ngang song song. Lập luận nào chứng minh đúng rằng hai góc so le trong c và e bằng nhau?",
    "q.5.1-09.choices": [
      "c = b vì đối đỉnh; b = e vì đồng vị",
      "c = a vì đối đỉnh; a = e vì đồng vị",
      "c = a vì đồng vị; a = e vì đối đỉnh",
      "c = g vì so le trong; g = e vì đối đỉnh"
    ],
    "q.5.1-10.q": "AB và CD là hai đường thẳng song song, và C nằm trên CD. Trong tam giác ABC, góc A = 50° và góc B = 60°. Dùng các góc d và e tại C để tính góc c.",
    "q.5.1-10.why.q": "Vì sao d = 50°?",
    "q.5.1-10.why.choices": [
      "d và góc A là hai góc so le trong giữa hai đường song song",
      "d và góc A là hai góc đối đỉnh",
      "d và góc A cộng lại bằng 180°"
    ],
    "q.5.2-01.q": "Tính góc ngoài x của tam giác.",
    "q.5.2-02.q": "Góc ngoài tại C là 128° và góc trong tại A là 75°. Tính y, là góc trong tại B.",
    "q.5.2-03.q": "Một góc ngoài của tam giác là (3x + 10)°. Hai góc trong không kề với nó là 50° và 2x°. Tìm x.",
    "q.5.2-04.q": "A, D và C nằm trên một đường thẳng. Trong hình, góc ABD = 35°, góc DBC = 30° và góc ADB = 110°. Tính y, là góc ngoài của tam giác BCD tại C.",
    "q.5.2-05.q": "ABC là tam giác cân có AB = AC và góc A = 48°. AB được kéo dài qua B đến điểm D. Tính góc ngoài CBD.",
    "q.5.2-06.q": "Trong tam giác ABC, góc A = 60° và góc B = 50°. Cạnh BC được kéo dài đến X. Góc ngoài ACX bằng bao nhiêu?",
    "q.5.2-07.q": "Tam giác ABC cân có AB = AC và góc ABC = 72°. D nằm trên AC và E nằm trên BC sao cho DE song song với AB. Tính góc EDC.",
    "q.5.2-08.q": "Hai góc ngoài của một tam giác là 130° và 110°. Tính góc ngoài thứ ba.",
    "q.5.2-08.why.q": "Vì sao ba góc ngoài của một tam giác luôn cộng lại bằng 360°?",
    "q.5.2-08.why.choices": [
      "Mỗi góc ngoài = 180° − góc trong, nên tổng = 3 × 180° − 180° = 360°",
      "Vì tam giác có ba cạnh và 3 × 120° = 360°",
      "Vì các góc ngoài luôn bằng nhau"
    ],
    "q.5.2-09.q": "Lập luận nào chứng minh đúng rằng góc ngoài d của một tam giác bằng tổng hai góc trong không kề a và b (c là góc trong kề với d)?",
    "q.5.2-09.choices": [
      "a + b + c = 180° và c + d = 180° (trên đường thẳng), nên a + b = d",
      "a + b + c = 180° và d = c vì đối đỉnh, nên d = a + b",
      "Góc ngoài nằm ngoài tam giác nên lớn hơn 180°, do đó d = a + b",
      "d và c là hai góc đồng vị, nên d = c, rồi d = a + b"
    ],
    "q.5.2-10.q": "Một ngôi sao năm cánh được vẽ bằng cách nối các đỉnh của một ngũ giác. Các góc tại bốn đỉnh nhọn là 30°, 40°, 35° và 45°. Các góc tại cả năm đỉnh cộng lại bằng 180°. Tính góc tại đỉnh thứ năm.",
    "q.5.3-01.q": "Em biết ba cạnh của một tam giác nhưng không biết góc nào (SSS). Cách nào đúng?",
    "q.5.3-01.choices": [
      "Vẽ một cạnh, rồi vẽ các cung từ mỗi đầu với bán kính bằng hai cạnh còn lại; hai cung cắt nhau tại đỉnh thứ ba",
      "Vẽ một cạnh, rồi dùng thước đo góc vẽ hai góc 60° ở hai đầu",
      "Vẽ ba cạnh thành các đường riêng rồi trượt chúng cho đến khi gặp nhau",
      "Vẽ cạnh dài nhất và đo góc bằng thước kẻ"
    ],
    "q.5.3-02.q": "Dựng tam giác ABC có AB = 8 cm, góc A = 60° và góc B = 50°. Thứ tự các bước nào đúng?",
    "q.5.3-02.choices": [
      "Vẽ AB = 8 cm; vẽ tia 60° tại A và tia 50° tại B; C là giao điểm của hai tia",
      "Vẽ AB = 8 cm; vẽ tia 60° tại A; mở compa 8 cm và đánh dấu C từ B",
      "Vẽ AB và các cung 60 cm và 50 cm",
      "Vẽ các góc 60° và 50° tại cùng một điểm rồi nối chúng"
    ],
    "q.5.3-03.q": "Mô tả nào đúng về cách dựng đường trung trực của đoạn thẳng AB?",
    "q.5.3-03.choices": [
      "Mở compa lớn hơn nửa AB; vẽ các cung phía trên và phía dưới từ A, lặp lại với cùng độ mở từ B; nối hai giao điểm",
      "Chỉ vẽ một cung từ A, rồi nối đầu cung với B",
      "Mở compa rất nhỏ và vẽ cung từ A và B sao cho gặp nhau ở giữa",
      "Đo một điểm gần giữa rồi vẽ một đường qua điểm đó với góc bất kỳ"
    ],
    "q.5.3-04.q": "Tam giác vuông ABC vuông tại A, cạnh huyền BC = 9 cm và AB = 7 cm. Em đã vẽ AB và đường vuông góc tại A. Làm thế nào để tìm C?",
    "q.5.3-04.choices": [
      "Đặt compa 9 cm, đặt mũi tại B và vẽ một cung cắt đường vuông góc; giao điểm đó là C",
      "Đặt compa 9 cm, đặt mũi tại A và vẽ một cung cắt đường vuông góc",
      "Đo 9 cm dọc theo AB từ A",
      "Vẽ thêm một góc vuông tại B"
    ],
    "q.5.3-05.q": "Em dựng một tam giác theo ASA với hai góc 65° và 42° và cạnh xen giữa. Góc thứ ba bằng bao nhiêu?",
    "q.5.3-06.q": "Em dựng đường phân giác của một góc 126°. Mỗi góc trong hai góc bằng nhau đó là bao nhiêu?",
    "q.5.3-07.q": "Maya nói: 'Tôi biết cả ba cạnh là 3 cm, 4 cm và 8 cm, nên tôi luôn dựng được tam giác bằng compa.' Bạn ấy có đúng không?",
    "q.5.3-07.choices": [
      "Đúng, ba độ dài bất kỳ đều tạo thành tam giác",
      "Sai, vì hai cạnh ngắn 3 cm + 4 cm = 7 cm ngắn hơn 8 cm, nên hai cung không gặp nhau",
      "Sai, vì tam giác cần có góc vuông",
      "Đúng, miễn là dùng bút chì nhọn"
    ],
    "q.5.3-08.q": "Cạnh huyền của một tam giác vuông là 12,5 cm và một trong hai cạnh còn lại là 10 cm. (Để ý rằng 10 : 12,5 = 4 : 5, nên đây là tam giác 3-4-5 được phóng to.) Cạnh thứ ba dài bao nhiêu?",
    "q.5.3-09.q": "Hai cạnh của một tam giác vuông là 10,5 cm và 8,3 cm. Zara nói cạnh thứ ba khoảng 6,4 cm. Arun nói khoảng 13,4 cm. Ai có thể đúng?",
    "q.5.3-09.choices": [
      "Chỉ Zara",
      "Chỉ Arun",
      "Cả hai: 10,5 cm có thể là cạnh huyền (cạnh thứ ba ≈ 6,4 cm), hoặc hai cạnh đã cho có thể là hai cạnh góc vuông (cạnh huyền ≈ 13,4 cm)",
      "Không ai đúng, tam giác không tồn tại"
    ],
    "q.5.3-10.q": "Marcus nói: 'Ba đường trung trực của ba cạnh một tam giác gặp nhau tại một điểm.' Sofia nói: 'Ba đường phân giác của ba góc một tam giác gặp nhau tại một điểm.' Sau khi dựng cẩn thận trên nhiều tam giác khác nhau, em dự đoán điều gì?",
    "q.5.3-10.choices": [
      "Chỉ Marcus đúng",
      "Chỉ Sofia đúng",
      "Cả hai đúng với mọi tam giác",
      "Không ai đúng"
    ]
  }
});
