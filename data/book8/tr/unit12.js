window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 12,
  en: {
    "u.realm": "Magic Mortar Building Site",
    "u.story": "A builder needs to mix cement, sand and gravel in exactly the right ratio so that the walls do not fall down and the floor does not crack. You have been asked to be chief engineer of the Magic Mortar Building Site: simplify recipes, share materials fairly and check mixed paint colours. Get one ratio wrong and the whole project is in danger!",
    "g.0.def": "A way to compare two or more quantities of the same kind, written as a : b.",
    "g.1.def": "Dividing all the numbers in a ratio by the same number to get a simpler ratio that is equal to it.",
    "g.2.def": "The largest number that divides exactly into all the numbers being considered.",
    "g.3.def": "Dividing an amount into parts according to a given ratio.",
    "g.4.def": "The fraction or percentage that a part makes up of the whole.",
    "g.5.def": "Two quantities that increase or decrease together with a constant ratio.",
    "g.6.def": "The money received from selling minus the money spent.",
    "g.7.def": "Seeing which quantity is bigger, darker or makes up a higher proportion.",
    "s.12.1.learn": [
      "A ratio a : b compares two (or more) quantities of the same kind, for example cement : sand = 1 : 4.",
      "Before simplifying you must put all quantities in the SAME units (m with cm, kg with g, hours with minutes).",
      "Simplify by dividing all the numbers by the HCF; if you cannot see the HCF yet, keep dividing by common factors until you cannot divide any more.",
      "A ratio with decimals: multiply everything by 10 (or 100) to make whole numbers before simplifying.",
      "A three-part ratio (a : b : c) needs ALL THREE numbers divided by the same number."
    ],
    "ex.12.1.q": "Simplify the ratio 3 m : 60 cm.",
    "ex.12.1.steps": [
      "Change to the same units: 3 m = 300 cm, so the ratio is 300 : 60.",
      "HCF(300, 60) = 60, divide both by 60.",
      "Result: 5 : 1."
    ],
    "ex.12.1.prompts": [
      "The two quantities are in different units. Which unit do you change them to, and what is the new ratio?",
      "Which number can you divide both by so that it cannot be simplified any further? What is that number for 300 and 60?",
      "Write the ratio in its simplest form."
    ],
    "ex.12.1.twist": "If it is changed to 3 m : 80 cm, what is the simplest form of the ratio?",
    "s.12.2.learn": [
      "Step 1: add the numbers in the ratio to find the total number of parts.",
      "Step 2: amount to share ÷ total number of parts = the value of ONE part.",
      "Step 3: multiply each person's number of parts by the value of one part.",
      "Always check: the shares must add up to the original amount.",
      "When the ratio is given by ages or hours worked, you can simplify the ratio first to make the calculation easier."
    ],
    "ex.12.2.q": "Share $750 between An, Binh and Chi in the ratio 2 : 3 : 5.",
    "ex.12.2.steps": [
      "Total number of parts: 2 + 3 + 5 = 10.",
      "One part: 750 ÷ 10 = $75.",
      "An: 2 × 75 = $150; Binh: 3 × 75 = $225; Chi: 5 × 75 = $375.",
      "Check: 150 + 225 + 375 = 750."
    ],
    "ex.12.2.prompts": [
      "The ratio 2 : 3 : 5 suggests dividing the money into how many equal parts altogether?",
      "If you know the total money and the number of parts, what is the value of one part?",
      "Each person receives their own number of parts. How much does each person get?",
      "How do you know the three numbers you found are sensible? Hint: look at the total."
    ],
    "ex.12.2.twist": "If An gets $200 and the ratio is still 2 : 3 : 5, how many dollars does Chi get?",
    "s.12.3.learn": [
      "A ratio a : b corresponds to the fractions a/(a + b) and b/(a + b) of the whole.",
      "To find the amount of one share: you can divide by parts (find one part then multiply) or take a fraction of the total.",
      "Conversely, if you know the fraction a/c of the whole then the rest is (c − a)/c and the ratio is a : (c − a).",
      "The total amount must be a multiple of the total number of parts (a + b) when all the amounts are whole numbers.",
      "To compare the proportions of two mixtures, change each ratio to a fraction of the whole then find a common denominator, or change to decimals or percentages."
    ],
    "ex.12.3.q": "Pink paint A is mixed red : white = 3 : 5, pink paint B is mixed red : white = 4 : 7. Which colour is darker?",
    "ex.12.3.steps": [
      "Fraction of red in A: 3/8; in B: 4/11.",
      "Common denominator 88: 3/8 = 33/88, 4/11 = 32/88.",
      "33/88 > 32/88 so A has the greater proportion of red, so A is darker."
    ],
    "ex.12.3.prompts": [
      "How dark it is depends on the red part of the whole mixture, not on the ratio red : white. Which fraction gives the red part of each type?",
      "The two fractions 3/8 and 4/11 have different denominators. Which common denominator do you choose to compare them?",
      "Compare the two numerators after finding the common denominator: which type has more red, and so what is the colour like?"
    ],
    "ex.12.3.twist": "Pink paint C is mixed red : white = 2 : 3. What fraction of the mixture is red in C (write a fraction)?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Ratio and proportion problems in the style of Vietnamese Grade 7–8 tests and gifted-student contests are waiting for you at the end of the site!",
    "q.12.1-01.hints": [
      "Which numbers do both 12 and 30 divide by exactly?",
      "What is the largest number that divides both (the HCF)?",
      "Divide both numbers by that HCF: which ratio do you get?"
    ],
    "q.12.1-01.explain": "HCF(12, 30) = 6. Dividing both numbers by 6 gives 2 : 5.",
    "q.12.1-02.hints": [
      "How many times 12 is 36?",
      "If you divide both numbers by 12, what does each become?",
      "Write the result in the form a : b."
    ],
    "q.12.1-02.explain": "HCF(36, 12) = 12 so 36 : 12 = 3 : 1.",
    "q.12.1-03.hints": [
      "The three numbers 8, 10, 12 are all even. Which number do they all divide by?",
      "Is there a number bigger than 2 that divides all three?",
      "Divide each number by the HCF and write the three numbers in order."
    ],
    "q.12.1-03.explain": "HCF(8, 10, 12) = 2, so dividing all three numbers by 2 gives 4 : 5 : 6.",
    "q.12.1-04.hints": [
      "Do the two quantities have the same units yet?",
      "How many metres is 1 km?",
      "When the units are the same, simplify 500 : 1000."
    ],
    "q.12.1-04.explain": "Change 1 km = 1000 m. The ratio is 500 : 1000, dividing both by 500 gives 1 : 2.",
    "q.12.1-05.hints": [
      "You need to put the two masses in the same units. How many grams is 1 kg?",
      "How many grams is 1.6 kg?",
      "Simplify 1600 : 800."
    ],
    "q.12.1-05.explain": "1.6 kg = 1600 g. The ratio 1600 : 800 = 2 : 1.",
    "q.12.1-06.choices": [
      "1 : 2 : 3",
      "2 : 4 : 1",
      "6 : 12 : 3 cannot be simplified",
      "1 : 2 : 1"
    ],
    "q.12.1-06.hints": [
      "Ben divided 6 and 12 by 6. What did Ben do with the number 3?",
      "When simplifying a ratio, how many numbers must you divide by the same number?",
      "Find the HCF of all three numbers 6, 12, 3 then divide all three."
    ],
    "q.12.1-06.explain": "You must divide ALL THREE numbers by the same HCF. HCF(6, 12, 3) = 3 so the ratio is 2 : 4 : 1. Ben only divided the first two numbers by 6 and forgot the number 3.",
    "q.12.1-07.hints": [
      "How do you turn 7.5 and 1.5 into whole numbers?",
      "If you multiply both numbers by 10, which ratio do you get?",
      "Simplify 75 : 15 using the HCF."
    ],
    "q.12.1-07.explain": "Multiply both by 10: 75 : 15. HCF = 15 so the ratio is 5 : 1.",
    "q.12.1-08.hints": [
      "Multiply all three numbers by 10 to remove the decimal point.",
      "What are the three new whole numbers?",
      "Find the HCF of 21, 7 and 14 then divide."
    ],
    "q.12.1-08.explain": "Multiply by 10: 21 : 7 : 14. HCF = 7 so the ratio is 3 : 1 : 2.",
    "q.12.1-09.hints": [
      "Choose a common unit. Are minutes easy?",
      "Change each time to minutes: 1 hour 40 minutes, 50 minutes, 2.5 hours.",
      "Simplify the three numbers you just converted using their HCF."
    ],
    "q.12.1-09.explain": "Change to minutes: 100 : 50 : 150. HCF = 50 so the ratio is 2 : 1 : 3. If you only convert but do not simplify fully (for example dividing by 10 only) the result is not in its simplest form.",
    "q.12.1-10.hints": [
      "Have both of them changed 1.2 litres to millilitres? How many ml is 1 litre?",
      "Rewrite the ratio when all three are in ml: 250 : 750 : ?",
      "Simplify using the HCF of the three numbers then compare with the two answers."
    ],
    "q.12.1-10.explain": "1.2 litres = 1200 ml. The ratio 250 : 750 : 1200, divided by 50, gives 5 : 15 : 24. Marcus is wrong (it does not match); Sofia is wrong because she used 120 ml instead of 1200 ml. Both are wrong.",
    "q.12.2-01.hints": [
      "What is the total number of parts (3 + 2 + 5)?",
      "What is each part worth ($80 divided by the total number of parts)?",
      "Kyra has 5 parts. Multiply the value of one part by 5."
    ],
    "q.12.2-01.explain": "Total 3 + 2 + 5 = 10 parts. One part = 80 ÷ 10 = $8. Kyra: 5 × 8 = $40.",
    "q.12.2-02.hints": [
      "Add the numbers in the ratio to find the total number of parts.",
      "What is 225 divided by the total number of parts?",
      "Beth has 3 parts, so multiply."
    ],
    "q.12.2-02.explain": "2 + 3 + 4 = 9 parts. One part = 225 ÷ 9 = $25. Beth: 3 × 25 = $75.",
    "q.12.2-03.hints": [
      "Which part of the ratio is the largest?",
      "What is the total number of parts and how much money is one part?",
      "Multiply the value of one part by the largest part."
    ],
    "q.12.2-03.explain": "3 + 5 + 1 = 9 parts, each part 432 ÷ 9 = $48. The largest share is 5 × 48 = $240.",
    "q.12.2-04.hints": [
      "Which number in the ratio 3 : 4 : 5 matches Ella?",
      "The total number of parts is 12. How much money is one part?",
      "Multiply by Ella's number of parts. You can check: the total of the three people must equal $192."
    ],
    "q.12.2-04.explain": "3 + 4 + 5 = 12 parts; 192 ÷ 12 = $16 per part. Ella: 4 × 16 = $64. Check: 48 + 64 + 80 = 192.",
    "q.12.2-05.hints": [
      "What is the total number of parts, and how many members is one part?",
      "The women have how many more parts than the men?",
      "Multiply the difference in parts by the value of one part."
    ],
    "q.12.2-05.explain": "5 + 7 + 3 = 15 parts, each part 285 ÷ 15 = 19 people. There are 7 − 5 = 2 parts more women than men, that is 2 × 19 = 38 people.",
    "q.12.2-06.hints": [
      "How many parts does the ratio 1 : 4 have altogether? (Add the two numbers.)",
      "What is one part worth if you divide $60 by the total number of parts?",
      "Do the two shares add up to $60? Which answer is correct?"
    ],
    "q.12.2-06.explain": "1 + 4 = 5 parts, one part is 60 ÷ 5 = $12, so the shares are $12 and $48. A common mistake: dividing 60 by 2 (the number of people) instead of by the total number of parts, giving $30 and $120 (the total is more than $60).",
    "q.12.2-07.hints": [
      "The ratio by hours worked is 6 : 4 : 3 : 5. How many hours in total?",
      "How much is paid for each hour (one part)?",
      "Ziva worked 5 hours. Multiply."
    ],
    "q.12.2-07.explain": "Total 6 + 4 + 3 + 5 = 18 hours. $450 ÷ 18 = $25 per hour. Ziva: 5 × 25 = $125.",
    "q.12.2-08.hints": [
      "How many degrees do the three angles of a triangle add up to?",
      "Divide that number of degrees by the total number of parts (2 + 3 + 5).",
      "Which part is the largest angle? Multiply."
    ],
    "q.12.2-08.explain": "The three angles add up to 180°. There are 2 + 3 + 5 = 10 parts, each part 18°. The largest angle: 5 × 18 = 90°.",
    "q.12.2-09.hints": [
      "This year the ratio is 4 : 9 : 11. How many parts in total, and how much does the oldest get?",
      "In 2 years the ages are 6, 11, 13. How much does the oldest get?",
      "Subtract the result in 2 years from this year's result."
    ],
    "q.12.2-09.explain": "This year: 300 ÷ 24 = 12.5 per part; the oldest child gets 11 × 12.5 = $137.5. In 2 years: 6 + 11 + 13 = 30 parts, each part $10; the oldest child gets 13 × 10 = $130. Difference: 137.5 − 130 = $7.5.",
    "q.12.2-10.hints": [
      "How much did Lin pay? (180 000 − 60 000 − 90 000)",
      "What does the ratio 60 000 : 90 000 : 30 000 simplify to?",
      "How much does Lin receive from $228 000? Profit = amount received − amount paid in."
    ],
    "q.12.2-10.explain": "Lin paid $30 000. The ratio 60 : 90 : 30 = 2 : 3 : 1, a total of 6 parts. Lin receives 228 000 ÷ 6 = $38 000. Profit = 38 000 − 30 000 = $8000 (not $9000).",
    "q.12.3-01.hints": [
      "How many parts are there altogether (2 + 7)?",
      "How many parts of the total are cashews?",
      "Write the fraction: number of cashew parts / total number of parts."
    ],
    "q.12.3-01.explain": "Total 2 + 7 = 9 parts, cashews are 2 parts so it is 2/9.",
    "q.12.3-02.hints": [
      "What is the total number of parts?",
      "What fraction of the tin is coconut? Work out the fraction of 50.",
      "What is 3/10 of 50?"
    ],
    "q.12.3-02.explain": "Total 3 + 7 = 10 parts. Coconut = 3/10 × 50 = 15 biscuits.",
    "q.12.3-03.hints": [
      "What is the total number of parts?",
      "How many members does one part match?",
      "Girls are 3 parts."
    ],
    "q.12.3-03.explain": "4 + 3 = 7 parts; 35 ÷ 7 = 5 members per part. Girls: 3 × 5 = 15 children.",
    "q.12.3-04.hints": [
      "If 3/11 are blue, what is the rest (1 − 3/11)?",
      "The fraction yellow is 8/11. So out of 11 parts, how many are blue and how many are yellow?",
      "Write the ratio blue : yellow using the number of parts."
    ],
    "q.12.3-04.explain": "Yellow = 1 − 3/11 = 8/11. Out of every 11 parts, 3 are blue and 8 are yellow so the ratio is 3 : 8 (not 3 : 11).",
    "q.12.3-05.hints": [
      "If cakes are 4/9, how many ninths are sandwiches?",
      "The remaining 9 − 4 = ? parts are sandwiches.",
      "Take care with the order: sandwiches first, cakes second."
    ],
    "q.12.3-05.explain": "Sandwiches = 9 − 4 = 5 parts out of 9, so the ratio sandwiches : cakes = 5 : 4.",
    "q.12.3-06.hints": [
      "What is the total number of parts in the ratio 5 : 7?",
      "What kind of number must the number of learners be compared with the total number of parts?",
      "Of the choices, which number is divisible by 12?"
    ],
    "q.12.3-06.explain": "The number of learners must be a multiple of 5 + 7 = 12. Of the given numbers only 36 is divisible by 12. A common mistake: choosing 25 because it is a multiple of 5 and forgetting to add the two parts.",
    "q.12.3-07.hints": [
      "What is the total number of parts in 3 : 5?",
      "The number of members must be a multiple of that number. List those multiples.",
      "Which multiple lies between 20 and 30?"
    ],
    "q.12.3-07.explain": "The total number of members is a multiple of 3 + 5 = 8: 8, 16, 24, 32… Only 24 lies between 20 and 30.",
    "q.12.3-08.choices": [
      "Sky blue",
      "Sea blue",
      "They are equally light"
    ],
    "q.12.3-08.hints": [
      "The lighter colour is the one with the greater proportion of white. Work out the fraction of white in each colour.",
      "Sky blue has 2/5 white, Sea blue has 3/10 white. Compare the two fractions.",
      "Change to the same denominator 10 then compare."
    ],
    "q.12.3-08.explain": "White in Sky blue: 2/5 = 4/10. White in Sea blue: 3/10. 4/10 > 3/10 so Sky blue is lighter. A common mistake: directly comparing the numbers 2 and 3 in the two ratios without noticing the totals of the parts are different (5 and 10).",
    "q.12.3-09.choices": [
      "Seals",
      "Sharks",
      "Both are equal"
    ],
    "q.12.3-09.hints": [
      "What is the fraction of boys in Seals (boys / total)?",
      "What is the fraction of boys in Sharks? The two denominators 30 and 40 are different.",
      "Change to decimals or to the same denominator (120) to compare."
    ],
    "q.12.3-09.explain": "Seals: 17/30 = 0.5667. Sharks: 23/40 = 0.575. With the same denominator 120: 68/120 and 69/120 so Sharks has the higher proportion of boys.",
    "q.12.3-10.hints": [
      "Lin's fraction of black is 40/(40 + 840). Simplify it.",
      "Ian's fraction of black is 25/(25 + 535). Simplify it.",
      "Compare the two fractions, for example by changing to decimals."
    ],
    "q.12.3-10.explain": "Lin: 40/880 = 1/22 ≈ 0.04545. Ian: 25/560 = 5/112 ≈ 0.04464. Lin has a slightly greater proportion of black.",
    "q.ch-01.q": "Three numbers x, y, z satisfy x/3 = y/5 = z/7 and x + y + z = 75. Work out z.",
    "q.ch-01.hints": [
      "Put x/3 = y/5 = z/7 = k and write x, y, z in terms of k.",
      "Substitute into x + y + z = 75 to find k.",
      "Work out z = 7k."
    ],
    "q.ch-01.explain": "Put x = 3k, y = 5k, z = 7k. Then 15k = 75 so k = 5 and z = 35.",
    "q.ch-02.q": "Given x/2 = y/5 and y − x = 24. Work out x + y.",
    "q.ch-02.hints": [
      "Put x = 2k and y = 5k.",
      "y − x = 3k = 24 gives you what value of k?",
      "Work out x + y = 7k."
    ],
    "q.ch-02.explain": "x = 2k, y = 5k, y − x = 3k = 24 so k = 8. So x + y = 7k = 56.",
    "q.ch-03.q": "Share 780 marbles between three friends A, B, C in inverse proportion to 2, 3, 4. How many marbles does A get?",
    "q.ch-03.hints": [
      "Inversely proportional to 2, 3, 4 means directly proportional to 1/2, 1/3, 1/4. With a common denominator of 12, which ratio do you get?",
      "The ratio A : B : C = 6 : 4 : 3. What is the total number of parts?",
      "Divide 780 by the total number of parts then multiply by 6."
    ],
    "q.ch-03.explain": "A : B : C = 1/2 : 1/3 : 1/4 = 6 : 4 : 3, a total of 13 parts. One part = 780 ÷ 13 = 60. A gets 6 × 60 = 360 marbles (B 240, C 180).",
    "q.ch-04.q": "12 workers finish a job in 15 days (each worker works at the same rate). To finish in 9 days, how many more workers are needed?",
    "q.ch-04.hints": [
      "Are the number of workers and the number of days directly or inversely proportional?",
      "How many 'worker-days' is the whole job (12 × 15)?",
      "How many people are needed to do 180 worker-days in 9 days? Then subtract 12."
    ],
    "q.ch-04.explain": "Inverse proportion: 12 × 15 = 180 worker-days. To finish in 9 days needs 180 ÷ 9 = 20 people, so 20 − 12 = 8 more workers are needed.",
    "q.ch-05.q": "A mixture of alcohol and water has the ratio alcohol : water = 3 : 2 and is 60 litres. How many litres of water must be added so that the ratio alcohol : water becomes 1 : 1?",
    "q.ch-05.hints": [
      "How many litres of alcohol and how many litres of water are in the 60-litre mixture?",
      "When you add water, does the amount of alcohol change?",
      "For alcohol : water = 1 : 1, how much water must there be? How much must be added?"
    ],
    "q.ch-05.explain": "Alcohol = 3/5 × 60 = 36 litres, water = 24 litres. The amount of alcohol stays the same so the water must be 36 litres. 36 − 24 = 12 litres of water must be added.",
    "q.ch-06.q": "On a map with scale 1 : 500 000, the distance between two cities is 7.2 cm. What is the actual distance between the two cities in km?",
    "q.ch-06.hints": [
      "The scale 1 : 500 000 means 1 cm on the map matches how many cm in real life?",
      "Work out 7.2 × 500 000 (in cm).",
      "Change cm to km: 1 km = 100 000 cm."
    ],
    "q.ch-06.explain": "7.2 × 500 000 = 3 600 000 cm = 36 km.",
    "q.ch-07.q": "At present a father is 30 years older than his child and the ratio of the father's age : the child's age is 7 : 2. After how many more years will the father be 3 times as old as the child?",
    "q.ch-07.hints": [
      "The age difference matches how many parts? From that, find the ages of the child and the father now.",
      "The age difference does not change with time. When the father is 3 times the child's age, the difference matches how many parts?",
      "From that find the child's age at that time then compare with the child's current age."
    ],
    "q.ch-07.explain": "7 − 2 = 5 parts = 30 years so 1 part = 6: the child is 12, the father is 42. When the father is 3 times the child's age, the difference of 30 years matches 2 parts so the child is 15. So it is after 15 − 12 = 3 years.",
    "q.ch-08.q": "Given a : b = 2 : 3 and b : c = 4 : 5. Given a + b + c = 140. Work out c.",
    "q.ch-08.hints": [
      "Make the number b equal in the two ratios: what is the LCM of 3 and 4?",
      "Write a : b : c with whole numbers (8 : 12 : 15), work out the total number of parts.",
      "Divide 140 by the total number of parts then multiply by c's part."
    ],
    "q.ch-08.explain": "a : b = 8 : 12 and b : c = 12 : 15 so a : b : c = 8 : 12 : 15, a total of 35 parts. One part = 140 ÷ 35 = 4, c = 15 × 4 = 60.",
    "q.ch-09.q": "The first tap on its own fills a tank in 6 hours, the second tap on its own fills the tank in 12 hours. If both taps are opened at the same time, after how many hours is the tank full?",
    "q.ch-09.hints": [
      "In 1 hour, what fraction of the tank does the first tap fill?",
      "In 1 hour, what fraction of the tank does the second tap fill? Add the two results.",
      "If 1/4 of the tank is filled each hour, how many hours are needed to fill the whole tank?"
    ],
    "q.ch-09.explain": "One hour: 1/6 + 1/12 = 3/12 = 1/4 of the tank. So the tank is full after 4 hours.",
    "q.ch-10.q": "Two quantities x and y are inversely proportional. If x increases by 25%, how does y change?",
    "q.ch-10.choices": [
      "y decreases by 25%",
      "y decreases by 20%",
      "y decreases by 15%",
      "y increases by 20%"
    ],
    "q.ch-10.hints": [
      "Does the product x × y change when two quantities are inversely proportional?",
      "If the new x is 1.25 times the old x, how many times the old y must the new y be?",
      "Work out 1 ÷ 1.25 then deduce the percentage decrease."
    ],
    "q.ch-10.explain": "Since x·y is constant, new y = y ÷ 1.25 = 0.8y, which is a decrease of 20%. A common mistake: thinking a 25% increase means a 25% decrease — wrong because the percentages are taken on different values."
  },
  vi: {
    "q.12.3-05.howto": "Viết tỉ số theo đúng thứ tự đề hỏi: bánh mì kẹp trước, bánh ngọt sau.",
    "q.12.3-04.howto": "Viết tỉ số theo đúng thứ tự đề hỏi: số khối xanh dương trước, số khối vàng sau.",
    "q.12.1-09.howto": "Viết ba thời gian chạy thành tỉ số theo đúng thứ tự đã cho, ở dạng tối giản. Chỉ nhập số nguyên, không ghi đơn vị.",
    "q.12.1-08.howto": "Rút gọn tỉ số sao cho mỗi phần là số nguyên và các phần không còn ước chung.",
    "q.12.1-07.howto": "Rút gọn tỉ số sao cho mỗi phần là số nguyên và các phần không còn ước chung.",
    "q.12.1-05.howto": "Viết hai khối lượng thành tỉ số ở dạng tối giản. Chỉ nhập số nguyên, không ghi đơn vị.",
    "q.12.1-04.howto": "Viết hai độ dài thành tỉ số ở dạng tối giản. Chỉ nhập số nguyên, không ghi đơn vị.",
    "q.12.1-01.q": "Rút gọn tỉ số 12 : 30.",
    "q.12.1-02.q": "Rút gọn tỉ số 36 : 12.",
    "q.12.1-03.q": "Rút gọn tỉ số 8 : 10 : 12.",
    "q.12.1-04.q": "Rút gọn tỉ số 500 m : 1 km.",
    "q.12.1-05.q": "Rút gọn tỉ số 1,6 kg : 800 g.",
    "q.12.1-06.q": "Ben rút gọn tỉ số 6 : 12 : 3 và viết 1 : 2 : 3. Dạng tối giản đúng là gì?",
    "q.12.1-07.q": "Rút gọn tỉ số 7,5 : 1,5.",
    "q.12.1-08.q": "Rút gọn tỉ số 2,1 : 0,7 : 1,4.",
    "q.12.1-09.q": "Thời gian chạy của Oditi là: thứ Hai 1 giờ 40 phút, thứ Tư 50 phút, thứ Sáu 2,5 giờ. Viết tỉ số thứ Hai : thứ Tư : thứ Sáu ở dạng tối giản.",
    "q.12.1-10.q": "Marcus trộn 250 ml sơn trắng, 750 ml sơn đỏ và 1,2 lít sơn vàng. Marcus nói tỉ số trắng : đỏ : vàng là 1 : 3 : 5. Sofia nói là 25 : 75 : 12. Ai đúng?",
    "q.12.1-10.choices": [
      "Chỉ Marcus đúng",
      "Chỉ Sofia đúng",
      "Cả hai đều sai (tỉ số là 5 : 15 : 24)",
      "Cả hai đều đúng"
    ],
    "q.12.2-01.q": "Chia $80 cho So, Luana và Kyra theo tỉ số 3 : 2 : 5. Kyra nhận được bao nhiêu?",
    "q.12.2-02.q": "Chia $225 cho Mia, Beth và Fen theo tỉ số 2 : 3 : 4. Beth nhận được bao nhiêu?",
    "q.12.2-03.q": "Chia $432 theo tỉ số 3 : 5 : 1. Phần lớn nhất là bao nhiêu?",
    "q.12.2-04.q": "Dave, Ella và Jia chia nhau hóa đơn tiền điện $192 theo tỉ số 3 : 4 : 5. Ella phải trả bao nhiêu?",
    "q.12.2-05.q": "Một dàn hợp xướng có nam, nữ và trẻ em theo tỉ số 5 : 7 : 3. Tất cả có 285 thành viên. Số nữ nhiều hơn số nam bao nhiêu người?",
    "q.12.2-06.q": "Chia $60 theo tỉ số 1 : 4. Cặp số tiền nào đúng?",
    "q.12.2-07.q": "Aden, Eli, Lily và Ziva chia nhau khoản thu nhập dự án $450 theo tỉ số giờ làm việc: Aden 6, Eli 4, Lily 3, Ziva 5. Ziva kiếm được bao nhiêu?",
    "q.12.2-08.q": "Các góc của một tam giác theo tỉ số 2 : 3 : 5. Tính số đo góc lớn nhất.",
    "q.12.2-09.q": "Mỗi năm David chia $300 cho các con theo tỉ số tuổi của chúng. Năm nay các con 4, 9 và 11 tuổi. Hai năm nữa, người con lớn nhất nhận ít hơn năm nay bao nhiêu đô la?",
    "q.12.2-10.q": "Zhi, Zhen và Lin mua một căn nhà giá $180 000. Zhi trả $60 000, Zhen trả $90 000 và Lin trả phần còn lại. Năm năm sau họ bán nhà với giá $228 000 và chia tiền theo cùng tỉ số như khi họ đã trả. Lin lãi bao nhiêu đô la?",
    "q.12.3-01.q": "Một túi hạt có hạt điều và đậu phộng theo tỉ số 2 : 7. Hạt điều chiếm bao nhiêu phần số hạt? (Viết phân số tối giản.)",
    "q.12.3-02.q": "Một hộp có bánh quy dừa và bánh quy gừng theo tỉ số 3 : 7. Có 50 chiếc bánh. Có bao nhiêu chiếc bánh quy dừa?",
    "q.12.3-03.q": "Câu lạc bộ quần vợt của trường có 35 thành viên. Tỉ số nam : nữ là 4 : 3. Câu lạc bộ có bao nhiêu bạn nữ?",
    "q.12.3-04.q": "Một túi có các khối lập phương màu xanh dương và màu vàng. 3/11 số khối là màu xanh dương. Viết tỉ số xanh dương : vàng.",
    "q.12.3-05.q": "Một quán cà phê bán bánh sandwich và bánh ngọt. 4/9 số món bán ra là bánh ngọt. Viết tỉ số sandwich : bánh ngọt.",
    "q.12.3-06.q": "Tỉ số nam : nữ của lớp 8C là 5 : 7. Số nào sau đây có thể là số học sinh của lớp?",
    "q.12.3-07.q": "Tỉ số nam : nữ trong một câu lạc bộ sách là 3 : 5. Số người lớn trong câu lạc bộ nhiều hơn 20 và ít hơn 30. Câu lạc bộ có bao nhiêu người lớn?",
    "q.12.3-08.q": "Sơn xanh da trời được pha từ xanh dương và trắng theo tỉ số 3 : 2. Sơn xanh biển được pha từ xanh dương và trắng theo tỉ số 7 : 3. Màu nào nhạt hơn?",
    "q.12.3-08.choices": [
      "Xanh da trời",
      "Xanh biển",
      "Nhạt như nhau"
    ],
    "q.12.3-09.q": "Câu lạc bộ bơi Seals có 13 nữ và 17 nam. Câu lạc bộ Sharks có 17 nữ và 23 nam. Câu lạc bộ nào có tỉ lệ nam cao hơn?",
    "q.12.3-09.choices": [
      "Seals",
      "Sharks",
      "Cả hai bằng nhau"
    ],
    "q.12.3-10.q": "Lin có các quân cờ đen và trắng theo tỉ số 40 : 840. Ian có chúng theo tỉ số 25 : 535. Ai có tỉ lệ quân đen lớn hơn?",
    "q.12.3-10.choices": [
      "Lin",
      "Ian",
      "Bằng nhau"
    ]
  }
});
