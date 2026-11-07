window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 16,
  en: {
    "u.realm": "The Chart Cave",
    "u.story": "In the final cave, the rock walls are carved with charts: bar charts, line graphs, stem-and-leaf diagrams and pie charts. The explorer must read each chart correctly, compare means, medians and modes, and discuss what the data say, before the door to the treasure room opens.",
    "g.0.def": "A bar chart shows how many times each value or each group of values occurs.",
    "g.1.def": "A line graph joins values measured at consecutive points in time and shows the trend.",
    "g.2.def": "A way of recording data using the tens digit (stem) and the units digit (leaf), keeping every value.",
    "g.3.def": "A circle divided into sectors, with the angle at the centre in proportion to the frequency: angle = frequency ÷ total × 360°.",
    "g.4.def": "The sum of all the values divided by the number of values.",
    "g.5.def": "The middle value when the numbers are arranged in order (with two middle values, take their mean).",
    "g.6.def": "The value that occurs most often.",
    "g.7.def": "The largest value minus the smallest value, which measures spread.",
    "g.8.def": "For grouped data, the class with the greatest frequency.",
    "g.9.def": "The general direction in which data change over time: increasing, decreasing or steady.",
    "s.16.1.learn": [
      "A frequency diagram uses bars: the height of a bar is the frequency (number of times). The bars add up to the total amount of data.",
      "For grouped (continuous) data, the classes have equal width, the bars touch, and each class has the form a ≤ x < b (the left end is included, the right end is not).",
      "For discrete data, the bars have equal width and equal gaps between them; always give a title, axis labels and a sensible scale.",
      "When data are grouped, we only know the number in each class, not the exact values inside the class.",
      "'At least 20' means 20 or more; 'more than 20' does not include 20. Be careful with values exactly on a class boundary."
    ],
    "ex.16.1.q": "Frequencies of the number of phone calls: 0–9: 2, 10–19: 8, 20–29: 6, 30–39: 9. How many employees made at least 20 calls?",
    "ex.16.1.steps": [
      "'At least 20' includes the two classes 20–29 and 30–39",
      "6 + 9",
      "= 15 employees."
    ],
    "ex.16.1.prompts": [
      "Which classes does 'at least 20' include? Is the class 10–19 counted?",
      "So which frequencies do you need to add?",
      "Which question does the total you found answer? Write the conclusion with units."
    ],
    "ex.16.1.twist": "If the question asked 'at most 19 calls', how many employees would there be?",
    "s.16.2.learn": [
      "A time series graph joins measurements taken at consecutive times; the horizontal axis is time.",
      "It shows the trend: increasing, decreasing or going up and down with the seasons.",
      "Only the measured points are real data; the joining line segments only help to see the trend and are not certain to be right between two measurements.",
      "Change between two times = later value minus earlier value; percentage change = change ÷ starting value × 100.",
      "Predictions outside the range of the data are very unreliable, because the trend may change."
    ],
    "ex.16.2.q": "Ice-cream sales (hundreds of thousands of dong): Jan 12, Feb 15, Mar 21. What is the percentage increase from Jan to Mar?",
    "ex.16.2.steps": [
      "Increase: 21 − 12 = 9",
      "Divide by the starting value: 9 ÷ 12 = 0.75",
      "An increase of 75%."
    ],
    "ex.16.2.prompts": [
      "To find how much it increased, which two values do you need to find the difference between?",
      "Percentage increase is compared with which value as the original? What do you divide by?",
      "Change the quotient you found into a percentage."
    ],
    "ex.16.2.twist": "If sales fell from Mar (21) back to Jan (12), what is the percentage decrease (rounded to 0.1%)?",
    "s.16.3.learn": [
      "The stem is the first digit (tens), the leaf is the last digit (units). Always give a key, for example 2 | 3 means 23.",
      "The leaves in each row are put in increasing order to make the median easy to find.",
      "The diagram keeps every value, so you can find the mode, median, range and count the number of values.",
      "Median: count to the middle value; if the number of values is even take the mean of the two middle values.",
      "The key can be a decimal: 4 | 7 means 4.7."
    ],
    "ex.16.3.q": "From a diagram with key 1 | 2 = 12, the rows are: 1 | 2 5 5; 2 | 1 3 7 7 7 8; 3 | 4 6; 4 | 0 1 9. Find the mode.",
    "ex.16.3.steps": [
      "Find the leaf that is repeated most",
      "Row 2: the leaf 7 appears 3 times",
      "The mode is 27."
    ],
    "ex.16.3.prompts": [
      "The mode is the value that occurs most often. On a stem-and-leaf diagram, what do you look for?",
      "Count how many times each leaf is repeated in each row. Which leaf appears most?",
      "Combine the stem digit with the leaf to read the correct value. How does the key tell you to read it?"
    ],
    "ex.16.3.twist": "If four more values of 37 were added to the data, what would the mode be?",
    "s.16.4.learn": [
      "A pie chart divides a 360° circle into sectors in proportion to the frequencies. A pie chart shows proportions, not the real numbers.",
      "Sector angle = (frequency ÷ total) × 360°. The angles must add up to 360°.",
      "From an angle you can find the number: number = (angle ÷ 360°) × total.",
      "An angle only gives a proportion; to know the real number you must know the total.",
      "Two pie charts with the same angle but different totals represent different numbers."
    ],
    "ex.16.4.q": "40 learners chose a sport: football 16. Find the angle of the football sector.",
    "ex.16.4.steps": [
      "Fraction: 16/40",
      "Multiply by 360°: 16 ÷ 40 × 360",
      "= 144°."
    ],
    "ex.16.4.prompts": [
      "A sector shows a part of the whole group. What fraction do you write for that part?",
      "How many degrees is the whole circle? Multiply the fraction by that number of degrees.",
      "Work out the multiplication: how many degrees is the angle of the football sector?"
    ],
    "ex.16.4.twist": "If the angle of the basketball sector is 90°, how many learners chose basketball?",
    "s.16.5.learn": [
      "Choose a diagram according to its purpose: sorting by common features → Venn diagram or Carroll diagram; comparing discrete data → bar chart (dual or compound); continuous data → frequency diagram; over time → line graph; two measurements → scatter graph; proportions of parts → pie chart; keeping the exact values → stem-and-leaf.",
      "A pie chart is good for comparing parts with the whole, but exact numbers are hard to read.",
      "A stem-and-leaf diagram gives every value but is only suitable for a small amount of data.",
      "Beware of misleading diagrams: an axis that does not start at 0, an uneven scale, missing labels.",
      "Always give a title, axis labels and units."
    ],
    "ex.16.5.q": "The temperature recorded every hour during one day should be shown on which diagram?",
    "ex.16.5.steps": [
      "The data change over time",
      "A time series line graph shows the trend",
      "Choose a time series line graph."
    ],
    "ex.16.5.prompts": [
      "The hours of the day change continuously. What type of data is this, and which variable is important?",
      "What do you want the reader to see: individual bars or the trend rising and falling over time?",
      "Which type of diagram joins points in time order? Name it."
    ],
    "ex.16.5.twist": "If you want to compare the highest temperatures of 5 cities on the same day, which type of diagram should you use?",
    "s.16.6.learn": [
      "Mean = total ÷ number of values; median = middle value; mode = value that occurs most often; range = largest − smallest.",
      "When there is a very large or very small value (an outlier), the mean is pulled off, and the median is more reliable.",
      "To compare two data sets: use one average (mean/median) to say 'which is higher' and the range to say 'which is more consistent'.",
      "If you know the mean and the number of values, then total = mean × number of values: use this to find a missing value.",
      "Frequency table: mean = Σ(value × frequency) ÷ total frequency."
    ],
    "ex.16.6.q": "The mean of 5 numbers is 12. Four of the numbers are 8, 10, 15, 11. Find the remaining number.",
    "ex.16.6.steps": [
      "Total of the five numbers: 5 × 12 = 60",
      "Total of the four numbers: 8 + 10 + 15 + 11 = 44",
      "Remaining number: 60 − 44 = 16."
    ],
    "ex.16.6.prompts": [
      "Mean equals the total divided by the number of values. Knowing the mean 12 of 5 numbers, what is the total of the 5 numbers?",
      "Add the four known numbers.",
      "The remaining number is the shortfall between the two totals. What is it?"
    ],
    "ex.16.6.twist": "If the four known numbers are 8, 10, 15, 31 and the mean of the 5 numbers is still 12, what is the remaining number? What is strange?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The treasure lies behind tables of data: solve 10 statistics problems in the style of Vietnamese Grade 7–8 tests to open the last door!",
    "q.16.1-01.hints": [
      "Find the bar labelled 10–19 on the horizontal axis.",
      "Look up to the top of the bar and read off the frequency axis.",
      "Which mark is the top of the bar at?"
    ],
    "q.16.1-01.explain": "The 10–19 bar has height 8, so 8 employees made 10–19 calls.",
    "q.16.1-02.hints": [
      "Read the height of the 30–39 bar.",
      "Read the height of the 0–9 bar.",
      "Take the difference of the two numbers."
    ],
    "q.16.1-02.explain": "9 − 2 = 7 employees.",
    "q.16.1-03.hints": [
      "Each bar gives the number of employees in one class.",
      "To find the total, what do you do with the bars?",
      "2 + 8 + 6 + 9."
    ],
    "q.16.1-03.explain": "Add all the frequencies: 2 + 8 + 6 + 9 = 25 employees.",
    "q.16.1-04.hints": [
      "Each number is the number of DAYS in that class.",
      "To find the total number of days, what do you do?",
      "2 + 3 + 6 + 12 + 5."
    ],
    "q.16.1-04.explain": "Total number of days = 2 + 3 + 6 + 12 + 5 = 28 days (February in a non-leap year).",
    "q.16.1-05.hints": [
      "Does the diagram tell you exactly how many cups were sold on each day, or only which class that day belongs to?",
      "The last class is 80–99. Is it certain that some day sold exactly 99 cups?",
      "Grouped data lose the exact values."
    ],
    "q.16.1-05.explain": "When data are grouped we only know the number of days in each class. The highest class is 80–99 but we do not know whether any day sold exactly 99 cups.",
    "q.16.1-06.hints": [
      "The symbol ≤ at the left end means is that end point included or not?",
      "What about the symbol < at the right end?",
      "Can 30 belong to two classes at the same time?"
    ],
    "q.16.1-06.explain": "In the class 20 ≤ a < 30, the value 30 is excluded (because < 30). In the class 30 ≤ a < 40, 30 is included (because ≤). So 30 belongs in the class 30 ≤ a < 40.",
    "q.16.1-07.hints": [
      "Which classes contain only speeds greater than 80?",
      "They are 80 < s ≤ 90 and 90 < s ≤ 100.",
      "12 + 5."
    ],
    "q.16.1-07.explain": "The two classes above 80 km/h: 12 + 5 = 17 cars.",
    "q.16.1-08.hints": [
      "Does the symbol 50 < s tell you that s can equal 50?",
      "So can the slowest car travel at exactly 50 km/h?",
      "What can you only say about the range the slowest car's speed lies in?"
    ],
    "q.16.1-08.explain": "The first class is 50 < s ≤ 60: the speed must be GREATER than 50, so no car travelled at exactly 50 km/h. We only know the slowest car was between 50 and 60.",
    "q.16.1-09.hints": [
      "'At least 20' means 20 or more: which classes is that?",
      "Count the values in 20 ≤ a < 25 (remember to count both 20s) and in 25 ≤ a < 30.",
      "8 + 5."
    ],
    "q.16.1-09.explain": "Class 20 ≤ a < 25: 20, 24, 23, 22, 23, 22, 24, 20 → 8 people. Class 25 ≤ a < 30: 28, 29, 27, 25, 29 → 5 people. Total 13.",
    "q.16.1-10.hints": [
      "What is the total population? Add all the frequencies.",
      "Which classes correspond to over 40 years old? Add their frequencies.",
      "Divide the number of people over 40 by the total, then multiply by 100."
    ],
    "q.16.1-10.explain": "Total = 25 + 40 + 54 + 35 + 8 = 162. Over 40: 54 + 35 + 8 = 97. 97 ÷ 162 ≈ 0.599 ≈ 60%. Marcus is right.",
    "q.16.2-01.hints": [
      "Read the value of the car at age 0 and age 1.",
      "The starting value is 25 thousand, after 1 year it is 20 thousand.",
      "25 000 − 20 000."
    ],
    "q.16.2-01.explain": "The value fell from $25 000 to $20 000, a loss of $5000 in the first year.",
    "q.16.2-02.hints": [
      "Work out the difference between each pair of consecutive years.",
      "Only consider the times the price increased.",
      "2006 → 2010: 20.20 − 11.60 = ?"
    ],
    "q.16.2-02.explain": "The increases: 0.50; 0.20; 7.00 (2002–2006); 8.60 (2006–2010). The greatest increase is $8.60.",
    "q.16.2-03.hints": [
      "Where is 2½ years between 2 and 3 years?",
      "It is exactly halfway, so the estimated value is between 17 000 and 14 900.",
      "(17 000 + 14 900) ÷ 2."
    ],
    "q.16.2-03.explain": "The mean of 17 000 and 14 900 is $15 950 (about 16 000). This is only an estimate from the line joining the two points.",
    "q.16.2-04.hints": [
      "Work out the change between each pair of consecutive years.",
      "Only consider the increases.",
      "Which section slopes up the most?"
    ],
    "q.16.2-04.explain": "2006→2007 up 0.5; 2007→2008 up 1.0 (the most); the later periods all fall.",
    "q.16.2-05.hints": [
      "Find the pairs of years where the profit fell.",
      "Falls of 0.5; 0.5 and ?",
      "2010 → 2011: 1.5 down to 0.5."
    ],
    "q.16.2-05.explain": "The falls: 0.5 (2008–09), 0.5 (2009–10), 1.0 (2010–11). The greatest fall is $1 million.",
    "q.16.2-06.hints": [
      "Where is 2003 between 2002 and 2004?",
      "The estimated value is between 135 and 145.",
      "(135 + 145) ÷ 2."
    ],
    "q.16.2-06.explain": "2003 is exactly in the middle so the estimate is (135 + 145) ÷ 2 = 140 thousand dollars.",
    "q.16.2-07.hints": [
      "Work out the differences between consecutive months.",
      "Notice the decreases too.",
      "August → September: 26 down to 18."
    ],
    "q.16.2-07.explain": "The large changes: Aug→Sep −8, Oct→Nov −6, Feb→Mar +5. The greatest change is 8 people.",
    "q.16.2-08.hints": [
      "In which year does the real data end?",
      "Could the price trend change direction after 2018?",
      "How reliable is a prediction outside the range of the data?"
    ],
    "q.16.2-08.explain": "Predictions outside the range of the data are very unreliable, because prices can suddenly rise or fall. You should only talk about the general trend, not an exact price.",
    "q.16.2-09.hints": [
      "Which year is the highest point on the graph?",
      "Is the price recorded every year, or only every 10 years?",
      "Between 2005 and 2015 could the price have been higher than 50?"
    ],
    "q.16.2-09.explain": "We only know the price in the recorded years. Between two recordings, the price could have gone above $50, so we cannot say which year was highest. Marcus is right about the highest point among the recorded points, but Sofia's reasoning is more accurate.",
    "q.16.2-10.hints": [
      "How many shirts are left in week 8?",
      "About how many more shirts are usually sold each week?",
      "Compare those two numbers."
    ],
    "q.16.2-10.explain": "The stock falls by about 10 shirts a week, but at the end of week 8 only 8 shirts are left, so there probably are not enough for week 9 (although this is only a prediction).",
    "q.16.3-01.hints": [
      "Each leaf is one value.",
      "Count the leaves in each row: 4, 6, 5.",
      "Add them up."
    ],
    "q.16.3-01.explain": "4 + 6 + 5 = 15 CDs.",
    "q.16.3-02.hints": [
      "Which rows have values greater than 60?",
      "Stem 6 row: 61, 62, 64, 66, 67 are all greater than 60.",
      "Count the leaves in that row."
    ],
    "q.16.3-02.explain": "Row 6 has 5 values (61, 62, 64, 66, 67), all greater than 60: 5 CDs.",
    "q.16.3-03.hints": [
      "The mode is the value that occurs most often.",
      "Find a leaf that is repeated in a row.",
      "Combine the stem with the repeated leaf."
    ],
    "q.16.3-03.explain": "The leaf 5 appears 2 times in row 4 (45, 45); every other value appears only once. Mode = 45 minutes.",
    "q.16.3-04.hints": [
      "There are 15 values (odd): which value is the middle one?",
      "Count the first 8 values: 45, 45, 47, 49, 50, 52, 55, ...",
      "What is the 8th value?"
    ],
    "q.16.3-04.explain": "The middle value is the 8th: 45, 45, 47, 49, 50, 52, 55, 56. Median = 56 minutes.",
    "q.16.3-05.hints": [
      "The smallest value is in the first row.",
      "The largest value is in the last row.",
      "Largest minus smallest."
    ],
    "q.16.3-05.explain": "Smallest 45, largest 67: 67 − 45 = 22 minutes.",
    "q.16.3-06.hints": [
      "Find the largest and smallest values in the list.",
      "The largest is 168; what is the smallest?",
      "168 minus the smallest value."
    ],
    "q.16.3-06.explain": "Largest 168, smallest 101 so the range is 168 − 101 = 67 kB. Greg is wrong. (137 is the median, not the range.)",
    "q.16.3-07.hints": [
      "Write out every value in the diagram: 4, 8, 9, 12, 14, 19, 20, 22, 23, 27.",
      "Add all the values.",
      "Divide by 10 days (not the row means)."
    ],
    "q.16.3-07.explain": "Total = 4 + 8 + 9 + 12 + 14 + 19 + 20 + 22 + 23 + 27 = 158. Mean = 158 ÷ 10 = 15.8. Opaline is wrong because the rows have different numbers of values (3, 3, 4), so you must not take the mean of the row means.",
    "q.16.3-08.hints": [
      "About how many cars did most days have?",
      "The mode 24 is the largest value in the data: does it represent a 'typical day'?",
      "Do the few large values (17, 20, 24, 24, 24) pull the mean up or down?"
    ],
    "q.16.3-08.explain": "7 of the 12 days had at most 9 cars. The mode 24 is the largest value so it is not representative; the mean 12 is pulled up by the days with 17–24 cars. The median 8 best reflects a typical day.",
    "q.16.3-09.hints": [
      "Which values are greater than 32? Look carefully at the stem 3 row.",
      "In row 3: 33, 33, 35, 36, 37, 38, 38; add row 4 as well.",
      "Divide the number of students by 25 then multiply by 100."
    ],
    "q.16.3-09.explain": "Greater than 32: 7 values in row 3 and 4 values of 40: 11 students in total. 11 ÷ 25 = 0.44 = 44%.",
    "q.16.3-10.hints": [
      "What is 40% of 50 marks?",
      "Which students scored at least 20?",
      "Count the students with marks of 20 or more."
    ],
    "q.16.3-10.explain": "40% of 50 = 20 marks. Below 20 marks: 8, 9, 12, 18, 18 (5 students). 25 − 5 = 20 students do not have to re-sit.",
    "q.16.4-01.hints": [
      "What fraction of 360° is 150°?",
      "Simplify 150/360.",
      "Multiply that fraction by 120 children."
    ],
    "q.16.4-01.explain": "150/360 × 120 = 50 girls.",
    "q.16.4-02.hints": [
      "What fraction of 360° is 240°?",
      "240/360 = 2/3.",
      "2/3 of 72."
    ],
    "q.16.4-02.explain": "240/360 × 72 = 48 girls.",
    "q.16.4-03.hints": [
      "Compare proportions: which is bigger, the angle 150° or 240°?",
      "Compare numbers: 150/360 × 120 and 240/360 × 72.",
      "Does a bigger proportion guarantee a bigger number?"
    ],
    "q.16.4-03.explain": "Proportion of girls: Seals (240°) is greater than Dolphins (150°). But Dolphins has 50 girls and Seals has 48 girls. A pie chart only gives proportions, not the real numbers.",
    "q.16.4-04.hints": [
      "What fraction of the circle is 90°?",
      "90/360 = 1/4.",
      "1/4 of 24 000."
    ],
    "q.16.4-04.explain": "90/360 × 24 000 = $6000. (In 2009: 180/360 × 12 000 = 6000: the same amount of money!)",
    "q.16.4-05.hints": [
      "What fraction of 360° is 135°?",
      "135/360 = 3/8.",
      "3/8 of 24 000."
    ],
    "q.16.4-05.explain": "135/360 × 24 000 = $9000. In 2009: 45/360 × 12 000 = $1500; in 2019 it is 6 times as much.",
    "q.16.4-06.hints": [
      "The two angles are equal, so the two proportions are equal: 135/360 = ?",
      "Work out the money from painting houses in each year.",
      "Take 2009 away from 2019."
    ],
    "q.16.4-06.explain": "135/360 = 3/8. 2009: 3/8 × 12 000 = 4500. 2019: 3/8 × 24 000 = 9000. Difference $4500.",
    "q.16.4-07.hints": [
      "Does a bigger sector guarantee more people?",
      "Work out the number of men choosing milk chocolate: 135/360 × 480.",
      "Work out the number of women: 120/360 × 600."
    ],
    "q.16.4-07.explain": "Men: 135/360 × 480 = 180. Women: 120/360 × 600 = 200. More women chose it even though their sector is smaller, because there are more women in the survey.",
    "q.16.4-08.hints": [
      "What fraction of 360° is 81°?",
      "81/360 = 9/40.",
      "9/40 of 600."
    ],
    "q.16.4-08.explain": "81/360 × 600 = 135 women.",
    "q.16.4-09.hints": [
      "Work out 10% of 1600.",
      "Work out 14% of 1100.",
      "Take the difference of the two numbers."
    ],
    "q.16.4-09.explain": "Castlehill: 10% × 1600 = 160. Riverside: 14% × 1100 = 154. Difference 160 − 154 = 6 students (even though Riverside has the higher percentage).",
    "q.16.4-10.hints": [
      "Number of small T-shirts sold on Monday: 80/360 × 144.",
      "Tuesday has the same number of small T-shirts, but they only make up 40° of the circle.",
      "If 40° represents 32 T-shirts, how many T-shirts does 360° represent?"
    ],
    "q.16.4-10.explain": "Monday: 80/360 × 144 = 32 small T-shirts. Tuesday: 40° represents 32 T-shirts so 360° represents 32 × 9 = 288 T-shirts.",
    "q.16.5-01.hints": [
      "At which points in time is the data recorded?",
      "What do we want to see: the trend or the composition?",
      "Which diagram has time on the horizontal axis?"
    ],
    "q.16.5-01.explain": "The price of gold is measured every Monday and we need to see how it changes over time: a time series line graph.",
    "q.16.5-02.hints": [
      "This is a comparison of the ingredients of two salad dressings.",
      "Which diagram stacks several parts into one bar?",
      "You need to see each ingredient and the total."
    ],
    "q.16.5-02.explain": "A compound bar chart shows each ingredient and the total, making it easy to compare the two dressings.",
    "q.16.5-03.hints": [
      "What do you want to see: groups or exact values?",
      "Which diagram keeps every value?",
      "Stem-and-leaf."
    ],
    "q.16.5-03.explain": "A stem-and-leaf diagram groups the data by tens but still keeps every exact value.",
    "q.16.5-04.hints": [
      "Each horse has two measurements: age and height.",
      "Which diagram compares two sets of measurements as pairs of points?",
      "Each horse is one point on the graph."
    ],
    "q.16.5-04.explain": "When each item has two measurements to compare, use a scatter graph.",
    "q.16.5-05.hints": [
      "Does a pie chart show the real number of grams or only proportions?",
      "The two cans have different total masses; do two pie charts show that?",
      "Which diagram shows both each part and the total?"
    ],
    "q.16.5-05.explain": "A pie chart only shows proportions, not the real number of grams or the total mass. To compare the individual parts and the total, use a compound bar chart.",
    "q.16.5-06.hints": [
      "Draw three overlapping circles (Venn) for Physics, Biology, Chemistry.",
      "The regions that belong to Physics: only Physics, Physics–Chemistry, Physics–Biology and all three subjects.",
      "6 + 3 + 2 + 4."
    ],
    "q.16.5-06.explain": "Physics = 6 (only Physics) + 3 (Physics–Chemistry) + 2 (Physics–Biology) + 4 (all three) = 15. Check: the whole diagram totals 6 + 7 + 3 + 5 + 3 + 2 + 4 = 30.",
    "q.16.5-07.hints": [
      "Each number is the number of evenings in one class.",
      "To find the total, we add the frequencies.",
      "1 + 6 + 2 + 8 + 14."
    ],
    "q.16.5-07.explain": "Total number of evenings = 1 + 6 + 2 + 8 + 14 = 31.",
    "q.16.5-08.hints": [
      "Is the time spent on homework discrete or continuous data?",
      "For grouped continuous data, do the bars touch?",
      "Which diagram has bars as tall as the frequencies?"
    ],
    "q.16.5-08.explain": "Time is continuous data grouped into equal classes: use a frequency diagram with touching bars.",
    "q.16.5-09.hints": [
      "There are 28 values (even), so there are two middle values: the 14th and 15th.",
      "Put in increasing order: 5, 7, 8, 9, 10, 11, 11, 12, 12, 14, 16, 17, 18, 19, 20, ...",
      "The 14th value is 19, the 15th is 20. Take the mean."
    ],
    "q.16.5-09.explain": "Put the 28 values in order: the 14th value is 19 and the 15th is 20. Median = (19 + 20) ÷ 2 = 19.5.",
    "q.16.5-10.hints": [
      "What are the visible heights of the two bars?",
      "Compare with the true ratio 50 : 45.",
      "An axis that does not start at 0 exaggerates the difference."
    ],
    "q.16.5-10.explain": "An axis starting at 40 makes bar B look twice as tall as A, whereas 50/45 ≈ 1.1. This is a misleading chart.",
    "q.16.6-01.hints": [
      "Add the goals in every match.",
      "0 + 2 + 2 + 1 + 1 + 1 + 1 = ?",
      "Divide the total by the number of matches (7)."
    ],
    "q.16.6-01.explain": "Total = 8 goals; 8 ÷ 7 ≈ 1.14.",
    "q.16.6-02.hints": [
      "Add the goals.",
      "2 + 3 + 0 + 3 + 1 = ?",
      "Divide by 5 matches."
    ],
    "q.16.6-02.explain": "Total = 9; 9 ÷ 5 = 1.8. (Brazil scored more on average than Spain: 1.8 compared with 1.14.)",
    "q.16.6-03.hints": [
      "Put them in increasing order first.",
      "67, 69, 72, 75, 77, 82, 85.",
      "What is the middle value (the 4th)?"
    ],
    "q.16.6-03.explain": "In order: 67, 69, 72, 75, 77, 82, 85. The median is the 4th value: 75 cm.",
    "q.16.6-04.hints": [
      "Range = largest − smallest.",
      "Largest 89, smallest 73.",
      "89 − 73."
    ],
    "q.16.6-04.explain": "89 − 73 = 16 cm. (Group B has a range of 85 − 67 = 18 cm, so group A is more consistent.)",
    "q.16.6-05.hints": [
      "Put in increasing order: 450, 495, 500, 500, 500, 510, 525, 630, 650, 740.",
      "There are 10 values: the two middle values are the 5th and 6th.",
      "(500 + 510) ÷ 2."
    ],
    "q.16.6-05.explain": "The two middle values are 500 and 510. Median = (500 + 510) ÷ 2 = $505.",
    "q.16.6-06.hints": [
      "Compare 550 with most of the wages.",
      "How many wages are greater than 550?",
      "How does a very large value affect the mean?"
    ],
    "q.16.6-06.explain": "Only three wages are over 550 (630, 650, 740); most are around 500. The large values pull the mean up, while the median is hardly affected. The mean is not always higher than the median.",
    "q.16.6-07.hints": [
      "Is comparing totals fair when the numbers of babies are different?",
      "Work out the mean for the boys: 64 ÷ 20.",
      "Work out the mean for the girls: 51 ÷ 15."
    ],
    "q.16.6-07.explain": "Boys: 64 ÷ 20 = 3.2 kg. Girls: 51 ÷ 15 = 3.4 kg. Although the total mass of the boys is larger (because there are more of them), the girls are heavier on average.",
    "q.16.6-08.hints": [
      "'Consistent' means the marks are close together or far apart?",
      "Which measure shows spread?",
      "What does a smaller range tell you?"
    ],
    "q.16.6-08.explain": "A small range shows the marks are close together, that is more consistent. Maths has a range of 16 < 25 for Science. (A higher mean only tells you about the level of marks, not about consistency.)",
    "q.16.6-09.hints": [
      "Add the 8 values.",
      "28 + 29 + 28 + 33 + 32 + 31 + 32 + 29 = ?",
      "Divide by 8."
    ],
    "q.16.6-09.explain": "Total = 242; 242 ÷ 8 = 30.25 °C.",
    "q.16.6-10.hints": [
      "Find the mode for each team.",
      "Work out the mean: Team A has a total of 56 goals, what total does Team B have?",
      "Find the median: the mean of the 10th and 11th values."
    ],
    "q.16.6-10.explain": "Mode: A is 5, B is 1 (Marcus is right using the mode). Mean: A = 56 ÷ 20 = 2.8; B = 59 ÷ 20 = 2.95 (Zara is right using the mean). Median: both are 3 (Arun is right). All three are right, but each uses a different average.",
    "q.ch-01.q": "The test marks of 8 learners are 6, 7, 7, 8, 9, 5, 7, 10. Work out the mean mark.",
    "q.ch-01.hints": [
      "Add the eight marks.",
      "6 + 7 + 7 + 8 + 9 + 5 + 7 + 10 = ?",
      "Divide by 8."
    ],
    "q.ch-01.explain": "Total 59; 59 ÷ 8 = 7.375.",
    "q.ch-02.q": "The mean mark of five tests is 7.4. The first four tests scored 8; 6; 9; 7. What did the fifth test score?",
    "q.ch-02.hints": [
      "Total of five tests = 5 × 7.4.",
      "The total of the first four tests is 30.",
      "Take the difference."
    ],
    "q.ch-02.explain": "5 × 7.4 = 37; 37 − 30 = 7 marks.",
    "q.ch-03.q": "Six numbers in increasing order: 3, 5, 8, a, 13, 15. The median is 10. Find a.",
    "q.ch-03.hints": [
      "The number of values is even: the median is the mean of the two middle numbers.",
      "The two middle numbers are 8 and a.",
      "(8 + a) ÷ 2 = 10."
    ],
    "q.ch-03.explain": "(8 + a) ÷ 2 = 10 so 8 + a = 20, a = 12.",
    "q.ch-04.q": "Monthly rainfall (mm) on a line graph: Jan 80, Feb 120, Mar 200, Apr 260, May 180. By what percentage did the rainfall increase from Jan to Mar?",
    "q.ch-04.hints": [
      "What is the increase from 80 to 200?",
      "Divide the increase by the starting value.",
      "120 ÷ 80 × 100."
    ],
    "q.ch-04.explain": "Increase 120; 120 ÷ 80 = 1.5 = 150%.",
    "q.ch-05.q": "The exam marks of 14 learners (key 6 | 5 means 65):\n5 | 2 8\n6 | 0 5 5 7\n7 | 1 3 6 6 6 9\n8 | 4 8\nFind the median.",
    "q.ch-05.hints": [
      "14 values: take the mean of the 7th and 8th values.",
      "The 7th value is 71, the 8th is 73.",
      "(71 + 73) ÷ 2."
    ],
    "q.ch-05.explain": "(71 + 73) ÷ 2 = 72.",
    "q.ch-06.q": "120 students chose an extra-curricular activity. On the pie chart: football 135°, badminton 90°, swimming 60°, and the rest is chess. How many students chose chess?",
    "q.ch-06.hints": [
      "The remaining angle for chess: 360° − (135° + 90° + 60°).",
      "That angle is 75°.",
      "75/360 × 120."
    ],
    "q.ch-06.explain": "Chess angle = 360 − 285 = 75°. 75 ÷ 360 × 120 = 25 students.",
    "q.ch-07.q": "Homework times of 30 learners: 0–10 minutes: 4 learners; 10–20: 10 learners; 20–30: 14 learners; 30–40: 2 learners. Estimate the mean time (round to 2 decimal places).",
    "q.ch-07.hints": [
      "Use the class mid-values 5, 15, 25, 35.",
      "5×4 + 15×10 + 25×14 + 35×2 = ?",
      "Divide by 30."
    ],
    "q.ch-07.explain": "20 + 150 + 350 + 70 = 590; 590 ÷ 30 ≈ 19.67 minutes.",
    "q.ch-08.q": "Class 8A has 20 students with a mean mark of 7.5. Class 8B has 30 students with a mean mark of 8. Work out the overall mean mark of both classes together.",
    "q.ch-08.hints": [
      "What is the total of the marks in class A?",
      "What is the total of the marks in class B?",
      "Divide the total of both classes by 50 students."
    ],
    "q.ch-08.explain": "Class A: 20 × 7.5 = 150; class B: 30 × 8 = 240. Mean = 390 ÷ 50 = 7.8.",
    "q.ch-09.q": "Eight numbers have a mean of 12. If the number 19 is removed, what is the mean of the remaining seven numbers?",
    "q.ch-09.hints": [
      "What is the total of the eight numbers?",
      "96 minus 19 = ?",
      "Divide by 7."
    ],
    "q.ch-09.explain": "8 × 12 = 96; 96 − 19 = 77; 77 ÷ 7 = 11.",
    "q.ch-10.q": "On a pie chart of a survey of 200 working people, the 'motorbike' sector has an angle of 126°. How many people ride a motorbike?",
    "q.ch-10.hints": [
      "What fraction of 360° is 126°?",
      "126/360 = 7/20.",
      "7/20 of 200."
    ],
    "q.ch-10.explain": "126 ÷ 360 × 200 = 70 people."
  },
  vi: {
    "q.16.4-10.howto": "Nhập tổng số áo phông mọi cỡ mà cửa hàng bán được vào thứ Ba.",
    "q.16.3-10.howto": "Đếm số học sinh đạt từ 40% của 50 điểm trở lên, vì các bạn này không phải thi lại. Nhập số học sinh đó.",
    "q.16.2-07.howto": "Tìm mức tăng hoặc giảm số người lớn nhất giữa hai tháng liền nhau. Nhập độ lớn của nó dưới dạng số dương.",
    "q.16.2-02.howto": "Tìm mức tăng giá lớn nhất từ một năm được ghi đến năm được ghi ngay sau nó. Nhập mức tăng đó (đô la).",
    "q.16.1-01.q": "Biểu đồ tần số cho biết số cuộc gọi điện thoại mà tất cả nhân viên của một công ty thực hiện trong một ngày. Có bao nhiêu nhân viên gọi 10–19 cuộc?",
    "q.16.1-02.q": "Dùng cùng biểu đồ đó (các cột 2, 8, 6, 9 cho 0–9, 10–19, 20–29, 30–39 cuộc gọi), có bao nhiêu nhân viên gọi 30–39 cuộc nhiều hơn số nhân viên gọi 0–9 cuộc?",
    "q.16.1-03.q": "Dùng cùng biểu đồ đó, công ty có tất cả bao nhiêu nhân viên?",
    "q.16.1-04.q": "Bảng tần số cho biết số cốc cà phê bán được mỗi ngày ở một quán cà phê trong một tháng: 0–19: 2 ngày, 20–39: 3 ngày, 40–59: 6 ngày, 60–79: 12 ngày, 80–99: 5 ngày. Bảng này bao quát bao nhiêu ngày?",
    "q.16.1-05.q": "Dùng bảng cà phê ở trên (nhóm mốt 60–79 với 12 ngày), Marcus nói: 'Biểu đồ tần số cho thấy số cốc cà phê bán được nhiều nhất trong một ngày là 99.' Bạn có đúng không?",
    "q.16.1-05.choices": [
      "Không: dữ liệu đã được gom nhóm, nên biểu đồ chỉ cho thấy số cốc bán nhiều nhất trong một ngày nằm đâu đó trong khoảng 80–99",
      "Đúng: 99 là đầu mút trên của nhóm cuối",
      "Đúng: cột cao nhất là 99",
      "Không: số cốc bán nhiều nhất là 79"
    ],
    "q.16.1-06.q": "Bảng tần số cho biết tuổi của các thành viên một dàn hợp xướng với các nhóm 10 ≤ a < 20, 20 ≤ a < 30, 30 ≤ a < 40, 40 ≤ a < 50. Người đúng 30 tuổi được xếp vào nhóm nào?",
    "q.16.1-06.choices": [
      "20 ≤ a < 30",
      "30 ≤ a < 40",
      "Cả hai nhóm",
      "Không nhóm nào"
    ],
    "q.16.1-07.q": "Bảng tần số cho biết tốc độ s (km/h) của các xe đi qua camera đo tốc độ: 50 < s ≤ 60: 2 xe, 60 < s ≤ 70: 3 xe, 70 < s ≤ 80: 6 xe, 80 < s ≤ 90: 12 xe, 90 < s ≤ 100: 5 xe. Giới hạn tốc độ là 80 km/h. Có bao nhiêu xe chạy quá giới hạn?",
    "q.16.1-08.q": "Trong bảng camera đo tốc độ (nhóm đầu 50 < s ≤ 60), Sofia nói: 'Biểu đồ tần số cho thấy xe chậm nhất chạy 50 km/h.' Bạn có đúng không?",
    "q.16.1-08.choices": [
      "Không: 50 không thuộc nhóm đầu, nên xe chậm nhất chạy nhanh hơn 50 km/h",
      "Đúng: nhóm đầu bắt đầu từ 50",
      "Đúng: 50 là giá trị nhỏ nhất trên trục",
      "Không: xe chậm nhất chạy 60 km/h"
    ],
    "q.16.1-09.q": "Tuổi các thành viên một câu lạc bộ bowling: 15, 12, 16, 20, 24, 28, 23, 14, 10, 22, 29, 23, 17, 14, 27, 22, 25, 24, 20, 29. Dùng các nhóm 10 ≤ a < 15, 15 ≤ a < 20, 20 ≤ a < 25 và 25 ≤ a < 30, có bao nhiêu thành viên từ 20 tuổi trở lên?",
    "q.16.1-10.q": "Dân số của một ngôi làng theo nhóm tuổi năm 2010: 0–20: 25, 20–40: 40, 40–60: 54, 60–80: 35, 80–100: 8. Marcus nói 'khoảng 60% dân số trên 40 tuổi.' Làm tròn đến số nguyên gần nhất, bao nhiêu phần trăm trên 40 tuổi?",
    "q.16.2-01.q": "Đồ thị cho thấy giá trị của một chiếc xe (đơn vị nghìn đô-la) trong bốn năm. Xe mất bao nhiêu giá trị trong năm đầu tiên? Cho đáp án bằng đô-la.",
    "q.16.2-02.q": "Giá bạc trung bình mỗi ounce (đô-la): 1990: 4,80; 1994: 5,30; 1998: 5,50; 2002: 4,60; 2006: 11,60; 2010: 20,20; 2014: 19,10; 2018: 15,70. Mức tăng giá lớn nhất giữa hai năm liên tiếp được ghi là bao nhiêu?",
    "q.16.2-03.q": "Giá trị xe là 17 000 đô-la ở tuổi 2 năm và 14 900 đô-la ở tuổi 3 năm. Nối hai điểm bằng một đoạn thẳng và ước lượng giá trị sau 2½ năm.",
    "q.16.2-04.q": "Đồ thị theo thời gian cho thấy lợi nhuận (triệu đô-la) của một công ty trong sáu năm: 2006: 1; 2007: 1,5; 2008: 2,5; 2009: 2; 2010: 1,5; 2011: 0,5. Lợi nhuận tăng nhiều nhất giữa hai năm nào?",
    "q.16.2-04.choices": [
      "2006 đến 2007",
      "2007 đến 2008",
      "2008 đến 2009",
      "2010 đến 2011"
    ],
    "q.16.2-05.q": "Dùng cùng số liệu lợi nhuận (1; 1,5; 2,5; 2; 1,5; 0,5 triệu đô-la), lợi nhuận giảm bao nhiêu trong lần thay đổi giữa hai năm liên tiếp có mức giảm lớn nhất?",
    "q.16.2-06.q": "Đồ thị cho thấy giá trị một ngôi nhà (nghìn đô-la). Năm 2002 nó có giá 135 và năm 2004 nó có giá 145. Nối hai điểm này bằng một đoạn thẳng và ước lượng giá trị năm 2003.",
    "q.16.2-07.q": "Số người ở một nhà khách mỗi tháng: Th1 8, Th2 6, Th3 11, Th4 15, Th5 17, Th6 20, Th7 24, Th8 26, Th9 18, Th10 14, Th11 8, Th12 7. Thay đổi lớn nhất giữa hai tháng liên tiếp là bao nhiêu?",
    "q.16.2-08.q": "Một đồ thị theo thời gian cho thấy giá bạc trung bình cứ bốn năm một lần từ 1990 đến 2018. Có thể dùng đồ thị để dự đoán chính xác giá bạc năm 2022 không?",
    "q.16.2-08.choices": [
      "Không: 2022 nằm ngoài dải dữ liệu và giá có thể đổi chiều",
      "Có: kéo thẳng đường cuối cùng",
      "Có: giá đồng cho biết đáp án",
      "Có: đồ thị được tạo từ các đoạn thẳng"
    ],
    "q.16.2-09.q": "Một đồ thị cho thấy giá dầu thô trung bình mỗi thùng cứ mười năm một lần: 1965: 3 đô-la, 1975: 12 đô-la, 1985: 27 đô-la, 1995: 17 đô-la, 2005: 50 đô-la, 2015: 42 đô-la. Marcus nghĩ giá cao nhất vào năm 2005. Sofia nói không thể biết từ đồ thị này năm nào giá cao nhất. Ai đúng?",
    "q.16.2-09.choices": [
      "Sofia: giá chỉ được ghi cứ mười năm một lần, nên giá cao nhất có thể rơi vào một năm ở giữa",
      "Marcus: 2005 là điểm cao nhất",
      "Cả hai đều đúng",
      "Không ai đúng: là năm 1985"
    ],
    "q.16.2-10.q": "Số áo bóng bầu dục Scarlets tồn kho của một cửa hàng trong tám tuần là 72, 65, 57, 48, 39, 29, 19, 8. Mỗi tuần tồn kho giảm khoảng 7 đến 11 áo. Cửa hàng có khả năng đủ áo cho tuần 9 không?",
    "q.16.2-10.choices": [
      "Không: tồn kho giảm khoảng 10 áo mỗi tuần mà chỉ còn 8 áo",
      "Có: còn 8 áo nên có 8 áo cho tuần 9",
      "Có: đồ thị đang phẳng dần",
      "Không ai có thể nói gì"
    ],
    "q.16.3-01.q": "Shen ghi lại thời gian phát của một số đĩa CD.\nKhóa: 4 | 5 nghĩa là 45 phút\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nShen đã liệt kê bao nhiêu đĩa CD?",
    "q.16.3-02.q": "Khóa: 4 | 5 nghĩa là 45 phút\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nCó bao nhiêu đĩa CD có thời gian phát dài hơn 60 phút?",
    "q.16.3-03.q": "Khóa: 4 | 5 nghĩa là 45 phút\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nMốt của các thời gian phát là bao nhiêu?",
    "q.16.3-04.q": "Khóa: 4 | 5 nghĩa là 45 phút\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nTính trung vị của thời gian phát.",
    "q.16.3-05.q": "Khóa: 4 | 5 nghĩa là 45 phút\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nKhoảng biến thiên của các thời gian phát là bao nhiêu?",
    "q.16.3-06.q": "Kích thước (kB) của 30 tệp trên máy tính của Greg là: 101, 128, 117, 109, 154, 139, 166, 155, 117, 145, 135, 162, 117, 168, 125, 131, 140, 160, 151, 125, 152, 108, 139, 130, 165, 158, 103, 130, 110, 148. Greg nói khoảng biến thiên là 65 kB. Bạn có đúng không?",
    "q.16.3-06.choices": [
      "Không: khoảng biến thiên là 168 − 101 = 67 kB",
      "Đúng: 65 kB",
      "Không: khoảng biến thiên là 168 kB",
      "Không: khoảng biến thiên là 137 kB"
    ],
    "q.16.3-07.q": "Opaline đếm số chim trong vườn của bạn trong 10 ngày.\nKhóa: 0 | 4 nghĩa là 4 con chim\n0 | 4 8 9\n1 | 2 4 9\n2 | 0 2 3 7\nTính số chim trung bình mỗi ngày. (Opaline lấy trung bình ba trung bình hàng: cách đó không đúng.)",
    "q.16.3-08.q": "Ashish đếm số xe đi qua trường mỗi ngày trong 12 ngày.\nKhóa: 0 | 1 nghĩa là 1 xe\n0 | 1 2 3 6 7 7 9\n1 | 7\n2 | 0 4 4 4\nMốt là 24, trung vị là 8 và trung bình là 12. Số trung bình nào đại diện tốt nhất cho một ngày điển hình?",
    "q.16.3-08.choices": [
      "Trung vị, 8: phần lớn các ngày có ít hơn 10 xe",
      "Mốt, 24, vì nó lớn nhất",
      "Trung bình, 12, vì nó nằm giữa dải giá trị",
      "Tất cả đều tốt như nhau"
    ],
    "q.16.3-09.q": "Điểm của 25 học sinh lớp 8B (trên 40) được cho dưới đây.\nKhóa: 1 | 8 nghĩa là 18\n0 | 6 8 8 9 9\n1 | 6\n2 | 5 6 8 8 9\n3 | 0 1 2 3 3 5 6 7 8 8\n4 | 0 0 0 0\nCó bao nhiêu phần trăm học sinh đạt điểm cao hơn 32?",
    "q.16.3-10.q": "Điểm của 25 học sinh lớp 8T (trên 50) nằm trong biểu đồ thân–lá đã sắp xếp này.\nKhóa: 1 | 8 nghĩa là 18\n0 | 8 9\n1 | 2 8 8\n2 | 4 7 8 8 8 8 9\n3 | 4 6 6 7 8 9 9\n4 | 3 5 6 9\n5 | 0 0\nHọc sinh nào đạt dưới 40% phải thi lại. Có bao nhiêu học sinh không phải thi lại?",
    "q.16.4-01.q": "Biểu đồ tròn của câu lạc bộ bơi Dolphins cho thấy nữ 150° và nam 210°. Câu lạc bộ Dolphins có 120 trẻ. Câu lạc bộ có bao nhiêu em nữ?",
    "q.16.4-02.q": "Biểu đồ tròn của câu lạc bộ bơi Seals cho thấy nữ 240° và nam 120°. Câu lạc bộ Seals có 72 trẻ. Câu lạc bộ có bao nhiêu em nữ?",
    "q.16.4-03.q": "Ở câu lạc bộ Dolphins (120 trẻ) nữ chiếm 150°. Ở câu lạc bộ Seals (72 trẻ) nữ chiếm 240°. Phát biểu nào đúng?",
    "q.16.4-03.choices": [
      "Seals có tỉ lệ nữ lớn hơn, nhưng Dolphins có số nữ nhiều hơn",
      "Seals có cả tỉ lệ lớn hơn lẫn số nữ nhiều hơn",
      "Dolphins có cả tỉ lệ lớn hơn lẫn số lượng nhiều hơn",
      "Dolphins có tỉ lệ lớn hơn, Seals có số lượng nhiều hơn"
    ],
    "q.16.4-04.q": "Thu nhập của Ivan năm 2019 là 24 000 đô-la. Trong biểu đồ tròn năm 2019 của anh, làm vườn là 90°, rửa cửa sổ 135° và sơn nhà 135°. Anh kiếm được bao nhiêu từ làm vườn năm 2019?",
    "q.16.4-05.q": "Năm 2009 thu nhập của Ivan là 12 000 đô-la và rửa cửa sổ chiếm 45° của biểu đồ tròn. Năm 2019 (thu nhập 24 000 đô-la) rửa cửa sổ chiếm 135°. Anh kiếm được bao nhiêu từ rửa cửa sổ năm 2019?",
    "q.16.4-06.q": "Sơn nhà chiếm 135° trong biểu đồ tròn năm 2009 của Ivan (thu nhập 12 000 đô-la) và 135° trong biểu đồ tròn năm 2019 của anh (thu nhập 24 000 đô-la). Năm 2019 anh kiếm được từ sơn nhà nhiều hơn năm 2009 bao nhiêu tiền?",
    "q.16.4-07.q": "Trong một cuộc khảo sát, 480 nam và 600 nữ chọn loại sô-cô-la yêu thích. Hình quạt 'sữa' là 135° trong biểu đồ tròn của nam và 120° trong biểu đồ của nữ. Hassan nghĩ nhiều nam hơn nữ thích sô-cô-la sữa. Bạn có đúng không?",
    "q.16.4-07.choices": [
      "Không: 180 nam nhưng 200 nữ chọn sô-cô-la sữa",
      "Đúng: 135° lớn hơn 120°",
      "Đúng: nam có hình quạt lớn hơn",
      "Không: hai số bằng nhau"
    ],
    "q.16.4-08.q": "Trong khảo sát sô-cô-la của nữ (600 phụ nữ), hình quạt 'đen' là 81°. Có bao nhiêu phụ nữ chọn sô-cô-la đen?",
    "q.16.4-09.q": "Quần vợt là môn thể thao yêu thích của 10% trong 1600 học sinh trường Castlehill và của 14% trong 1100 học sinh trường Riverside. Ở Castlehill có nhiều hơn Riverside bao nhiêu học sinh chọn quần vợt?",
    "q.16.4-10.q": "Thứ Hai một cửa hàng bán được 144 chiếc áo phông; cỡ nhỏ chiếm 80° của biểu đồ tròn. Thứ Ba cửa hàng bán cùng số áo cỡ nhỏ, và hình quạt cỡ nhỏ trong biểu đồ tròn thứ Ba là 40°. Tổng cộng thứ Ba cửa hàng bán được bao nhiêu chiếc áo phông?",
    "q.16.5-01.q": "Loại biểu đồ nào tốt nhất để thể hiện giá vàng vào mỗi sáng thứ Hai?",
    "q.16.5-01.choices": [
      "Đồ thị theo thời gian",
      "Biểu đồ tròn",
      "Biểu đồ Venn",
      "Đồ thị phân tán"
    ],
    "q.16.5-02.q": "Loại biểu đồ nào tốt nhất để so sánh lượng (gam) của từng thành phần trong 100 ml hai loại nước sốt salad khác nhau?",
    "q.16.5-02.choices": [
      "Biểu đồ cột chồng",
      "Đồ thị theo thời gian",
      "Biểu đồ thân–lá",
      "Biểu đồ tần số"
    ],
    "q.16.5-03.q": "Loại biểu đồ nào tốt nhất cho tuổi của những người trên một chuyến xe buýt nếu em muốn thấy dữ liệu được gom nhóm nhưng vẫn giữ tuổi chính xác?",
    "q.16.5-03.choices": [
      "Biểu đồ thân–lá",
      "Đồ thị theo thời gian",
      "Biểu đồ tròn",
      "Đồ thị phân tán"
    ],
    "q.16.5-04.q": "Một trường dạy cưỡi ngựa ghi lại tuổi và chiều cao của từng con ngựa. Biểu đồ nào cho thấy tốt nhất liệu những con ngựa già hơn có xu hướng cao hơn không?",
    "q.16.5-04.choices": [
      "Đồ thị phân tán",
      "Biểu đồ tròn",
      "Đồ thị theo thời gian",
      "Biểu đồ Venn"
    ],
    "q.16.5-05.q": "Lon A có đậu 48 g, nước 32 g, sốt cà chua 17 g, đường 2 g, muối 1 g. Lon B có đậu 67 g, nước 30 g, sốt cà chua 18 g, đường 8 g, muối 2 g. Arun muốn so sánh cả lượng từng thành phần VÀ tổng lượng. Zara gợi ý hai biểu đồ tròn. Biểu đồ nào tốt hơn?",
    "q.16.5-05.choices": [
      "Biểu đồ cột chồng, vì nó cho thấy lượng thật và tổng",
      "Hai biểu đồ tròn, vì chúng cho thấy số gam thật",
      "Hai biểu đồ tròn, vì chúng cho thấy tổng khối lượng",
      "Đồ thị theo thời gian"
    ],
    "q.16.5-06.q": "30 học sinh học khoa học. 4 em học vật lý, sinh học và hóa học. 5 em chỉ học hóa học và sinh học, 3 em chỉ học hóa học và vật lý, và 2 em chỉ học vật lý và sinh học. 6 em chỉ học vật lý, 7 em chỉ học sinh học và 3 em chỉ học hóa học. Tổng cộng có bao nhiêu học sinh học vật lý?",
    "q.16.5-07.q": "Zara ghi lại số phút bạn dành cho bài tập về nhà mỗi buổi tối trong một tháng: 0 ≤ d < 20: 1, 20 ≤ d < 40: 6, 40 ≤ d < 60: 2, 60 ≤ d < 80: 8, 80 ≤ d < 100: 14. Bạn đã ghi dữ liệu cho bao nhiêu buổi tối?",
    "q.16.5-08.q": "Biểu đồ nào tốt nhất để biểu diễn thời gian làm bài tập về nhà đã gom nhóm của Zara (các nhóm có độ rộng bằng nhau như 0 ≤ d < 20)?",
    "q.16.5-08.choices": [
      "Biểu đồ tần số không có khoảng trống giữa các cột",
      "Biểu đồ tròn với 31 hình quạt",
      "Đồ thị theo thời gian",
      "Đồ thị phân tán"
    ],
    "q.16.5-09.q": "Đây là số trang Daylen đọc mỗi ngày trong bốn tuần: 25, 5, 18, 34, 16, 35, 12, 12, 20, 14, 8, 27, 39, 9, 30, 11, 22, 19, 7, 27, 10, 32, 27, 33, 11, 24, 17, 22. Tính trung vị.",
    "q.16.5-10.q": "Một biểu đồ cột cho thấy doanh số: Cửa hàng A 45, Cửa hàng B 50. Trục đứng bắt đầu từ 40, nên cột A trông cao 5 đơn vị và cột B cao 10 đơn vị. Vì sao điều này gây hiểu lầm?",
    "q.16.5-10.choices": [
      "B trông gấp đôi A, nhưng thật ra chỉ gấp khoảng 1,1 lần",
      "Vì các cột nên có màu khác nhau",
      "Vì các cột không chạm nhau",
      "Nó không gây hiểu lầm"
    ],
    "q.16.6-01.q": "Ở World Cup 2010, Tây Ban Nha ghi 0, 2, 2, 1, 1, 1, 1 bàn trong các trận đấu. Tính số bàn thắng trung bình mỗi trận. Cho đáp án với 2 chữ số thập phân.",
    "q.16.6-02.q": "Brazil ghi 2, 3, 0, 3, 1 bàn trong các trận đấu. Tính số bàn thắng trung bình mỗi trận.",
    "q.16.6-03.q": "Một giáo viên đo chiều cao của Nhóm B: 77 cm, 85 cm, 75 cm, 69 cm, 82 cm, 67 cm, 72 cm. Viết chiều cao trung vị.",
    "q.16.6-04.q": "Chiều cao của Nhóm A là 84 cm, 73 cm, 89 cm, 80 cm và 77 cm. Tính khoảng biến thiên.",
    "q.16.6-05.q": "Tiền lương hàng tuần (đô-la) của mười nhân viên văn phòng: 500, 525, 650, 510, 500, 495, 740, 630, 450, 500. Tính lương tuần trung vị.",
    "q.16.6-06.q": "Với cùng các mức lương (450, 495, 500, 500, 500, 510, 525, 630, 650, 740), trung bình là 550 đô-la và trung vị là 505 đô-la. Vì sao trung bình cao hơn trung vị?",
    "q.16.6-06.choices": [
      "Một vài mức lương cao (650 và 740 đô-la) kéo trung bình lên",
      "Trung bình luôn cao hơn trung vị",
      "Nhiều người kiếm trên 550 đô-la hơn là dưới",
      "Vì mốt là 500 đô-la"
    ],
    "q.16.6-07.q": "Một y tá đo tổng khối lượng của 20 bé trai là 64 kg và tổng khối lượng của 15 bé gái là 51 kg. Trung bình các bé nào nặng hơn?",
    "q.16.6-07.choices": [
      "Bé gái: 3,4 kg so với 3,2 kg của bé trai",
      "Bé trai: tổng của họ lớn hơn",
      "Bé trai: số bé trai nhiều hơn",
      "Bằng nhau"
    ],
    "q.16.6-08.q": "Điểm kiểm tra. Toán: 77, 89, 75, 80, 80, 91, 78, 76, 76, 76. Khoa học: 72, 79, 77, 87, 81, 62, 75, 87. Khoảng biến thiên của Toán là 16 và của Khoa học là 25. Nhóm nào có điểm nhất quán hơn?",
    "q.16.6-08.choices": [
      "Toán, vì khoảng biến thiên nhỏ hơn",
      "Khoa học, vì khoảng biến thiên lớn hơn",
      "Toán, vì trung bình cao hơn",
      "Nhất quán như nhau"
    ],
    "q.16.6-09.q": "Niall ghi lại nhiệt độ trong thí nghiệm thứ hai của bạn: 28, 29, 28, 33, 32, 31, 32, 29 (°C). Tính nhiệt độ trung bình.",
    "q.16.6-10.q": "Số bàn thắng trong 20 trận. Đội A: 0 bàn 4 lần, 1 bàn 1 lần, 2 bàn 4 lần, 3 bàn 2 lần, 4 bàn 4 lần, 5 bàn 5 lần. Đội B: 1 bàn 6 lần, 2 bàn 1 lần, 3 bàn 5 lần, 4 bàn 4 lần, 5 bàn 4 lần. Marcus nói đội A ghi trung bình nhiều hơn, Zara nói đội B, và Arun nói hai đội ghi bằng nhau. Ai đúng?",
    "q.16.6-10.choices": [
      "Cả ba đều có thể đúng: Marcus dùng mốt (5 và 1), Zara dùng trung bình (2,8 và 2,95), Arun dùng trung vị (3 và 3)",
      "Chỉ Zara, vì trung bình là số trung bình duy nhất",
      "Chỉ Marcus, vì đội A ghi 5 bàn nhiều lần nhất",
      "Chỉ Arun, vì các trung vị bằng nhau"
    ]
  }
});
