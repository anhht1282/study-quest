window.GAME_TR = window.GAME_TR || [];

const TABLE_VI = "\n         | Đi bộ | Xe buýt\nNam   |  12  |  9\nNữ     |  15  | 14";

window.GAME_TR.push({
  unit: 16,
  en: {
    "u.realm": "Data City",
    "u.story": "Data City is full of tables, charts and information posters. The mayor asks you to read every chart correctly, choose the right type of chart and find the representative number, so that the city's decisions are not wrong because of misread data.",
    "g.0.def": "A table that shows data by two criteria at once, for example boys/girls and walk/bus.",
    "g.1.def": "A bar chart with the bars of two groups placed side by side for comparison.",
    "g.2.def": "A bar chart in which the parts of a group are stacked into one bar.",
    "g.3.def": "A circle divided into sectors; the angle at the centre shows each part's share of the whole 360°.",
    "g.4.def": "A grid of 100 squares; each shaded square is 1% of the total.",
    "g.5.def": "A poster that combines pictures, numbers and words to communicate data.",
    "g.6.def": "The sum of the values divided by the number of values.",
    "g.7.def": "The middle value when the data are in order.",
    "g.8.def": "The value that appears most often.",
    "g.9.def": "The largest value minus the smallest value, showing how spread out the data are.",
    "s.16.1.learn": [
      "A two-way table records data by two criteria: rows for one criterion, columns for the other.",
      "Each cell is the number of items that meet both conditions (where the row and column cross).",
      "Adding the cells along a row gives the row total, down a column gives the column total; the sum of the row totals = the sum of the column totals = the grand total.",
      "If a cell is missing, use the totals to find it: missing cell = total − the known cells.",
      "A frequency table shows how many times each value occurs; the total frequency is the number of items."
    ],
    "ex.16.1.q": "A class has 40 students, 22 of them girls. How many boys are there?",
    "ex.16.1.steps": [
      "Total = boys + girls",
      "Boys = 40 − 22",
      "= 18"
    ],
    "ex.16.1.prompts": [
      "Which two groups make up the total number of students? Write that relationship as an equation.",
      "To find the boys, how do you move the number of girls to the other side?",
      "Work out the result."
    ],
    "ex.16.1.twist": "If the class has 40 students and there are 4 more boys than girls, how many girls are there?",
    "s.16.2.learn": [
      "Dual bar chart: two sets of data side by side for each category, making it easy to compare each group directly.",
      "Compound bar chart: the groups are stacked into one bar, so the top of the bar is the TOTAL and each coloured part is a component.",
      "To read an upper stacked part: value = upper top − lower top (do not read the number at the top directly).",
      "Use a dual bar chart to compare each group; use a compound bar chart to see the total and the breakdown.",
      "Always have a title, axis labels and a key (which colour is which group)."
    ],
    "ex.16.2.q": "Karl's compound bar is 9 tall; the blue part (CDs) is 2 tall. How many DVDs are there?",
    "ex.16.2.steps": [
      "Total = 9, CDs = 2",
      "DVDs = 9 − 2",
      "= 7"
    ],
    "ex.16.2.prompts": [
      "Which coloured parts make up the height of the whole stack? Write it as an equation.",
      "To find the DVD part, which part do you take away?",
      "Work out the result."
    ],
    "ex.16.2.twist": "If the stack is 12 tall and the DVD part is twice as tall as the CD part, how tall is the CD part?",
    "s.16.3.learn": [
      "A pie chart shows PROPORTIONS, not the real quantities. The angles at the centre add up to 360°.",
      "To draw one: angle of a part = (quantity of the part ÷ total) × 360°.",
      "To read it backwards: quantity of a part = (angle ÷ 360°) × total.",
      "A waffle diagram has 100 squares; each square is 1% of the total.",
      "Two pie charts with the same angle do not mean the same quantity if the totals are different."
    ],
    "ex.16.3.q": "40 students are surveyed and the 'walk' angle is 90°. How many students walk?",
    "ex.16.3.steps": [
      "90 ÷ 360 = ¼",
      "¼ × 40",
      "= 10 students"
    ],
    "ex.16.3.prompts": [
      "The whole circle is 360°; what fraction of the circle is an angle of 90° (write a fraction)?",
      "Which calculation finds that fraction of 40 students?",
      "Work out the result."
    ],
    "ex.16.3.twist": "If the 'bus' angle is 135°, how many students take the bus?",
    "s.16.4.learn": [
      "An infographic combines pictures, numbers and small charts to tell a story with data.",
      "Read in order: read the title, check the units, then find the data you need.",
      "Percentage of a total: find 10% then multiply up, for example 20% = 2 × 10%.",
      "The size of an illustration does not decide the value: read the number.",
      "Check that the percentages add up to 100% to find a missing part."
    ],
    "ex.16.4.q": "A village has 800 adults and 20% of them are in the 35–44 age group. How many people is that?",
    "ex.16.4.steps": [
      "10% of 800 = 80",
      "20% = 2 × 80",
      "= 160 people"
    ],
    "ex.16.4.prompts": [
      "What do you divide a number by to find 10% of it?",
      "20% is how many times 10%?",
      "Multiply the 10% result by the factor you just found."
    ],
    "ex.16.4.twist": "If 240 people are in the 35–44 age group, making up 20% of the village, how many people live in the whole village?",
    "s.16.5.learn": [
      "Line graph: suitable for showing data that change over time.",
      "Scatter graph: two quantities for the same item (height – shoe size), to see whether there is a correlation.",
      "Dual/compound bar charts: compare several groups for each category.",
      "Pie chart: the parts of a total (proportions). Venn diagrams and Carroll diagrams: classify by properties.",
      "Always explain why you chose that type of chart."
    ],
    "ex.16.5.q": "Choose a chart for the number of gold, silver and bronze medals of two countries.",
    "ex.16.5.steps": [
      "There are two groups (two countries) and three kinds of medal",
      "You want to compare bars side by side",
      "Use a dual bar chart"
    ],
    "ex.16.5.prompts": [
      "How many groups (countries) and how many kinds of medal does the data have? Write them down.",
      "To put the bars of the two countries side by side for easy comparison, which kind of bar chart do you need?",
      "Name that type of chart."
    ],
    "ex.16.5.twist": "If you only want to show what fraction of one country's total medals are gold, silver and bronze, which chart do you use?",
    "s.16.6.learn": [
      "The mode is the value that appears most often; the median is the middle value after putting the data IN ORDER; the mean is the sum divided by the number of values.",
      "If there is an even number of values, the median is the mean of the two middle values.",
      "Range = largest − smallest, showing how spread out the data are.",
      "Two groups with the same mean but a smaller range are more consistent.",
      "To find a missing value: total = mean × number of values, then subtract the known values."
    ],
    "ex.16.6.q": "Ages: 42, 38, 16, 12, 12. Work out the mean.",
    "ex.16.6.steps": [
      "Total = 42 + 38 + 16 + 12 + 12 = 120",
      "There are 5 values",
      "120 ÷ 5 = 24"
    ],
    "ex.16.6.prompts": [
      "The mean needs the total of the values: work out the total of the ages.",
      "How many values are there altogether?",
      "The mean equals the total divided by the number of values."
    ],
    "ex.16.6.twist": "If a person aged 18 joins the group, what is the new mean?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Tables, charts and data from the classroom, in the style of Year 6–7 tests.",
    "q.16.1-01.hints": [
      "Each cell is the number of students in a separate group. Do the cells share any students?",
      "Add all four cells: 12 + 9 + 15 + 14.",
      "Remember to add carefully, row by row, then add the two rows."
    ],
    "q.16.1-01.explain": "12 + 9 + 15 + 14 = 50 students.",
    "q.16.1-02.hints": [
      "Find the 'Girls' row.",
      "Find the 'Bus' column.",
      "Read the cell where they cross."
    ],
    "q.16.1-02.explain": "The cell where the Girls row and the Bus column cross is 14.",
    "q.16.1-03.hints": [
      "What is the total of boys and girls?",
      "Girls = total minus boys.",
      "13 − 8 = ?"
    ],
    "q.16.1-03.explain": "Girls = 13 − 8 = 5.",
    "q.16.1-04.hints": [
      "How many girls travel by bus, out of how many students in total?",
      "How do you write the fraction 14/50 as a percentage?",
      "14/50 = 28/100."
    ],
    "q.16.1-04.explain": "14 ÷ 50 = 0.28 = 28%.",
    "q.16.1-05.hints": [
      "Which row is Boys and which column is Walk?",
      "Is 27 the number of boys? Who is included in 27?",
      "Take only a single cell."
    ],
    "q.16.1-05.explain": "Read only the cell where they cross: 12. Common mistakes: 27 is the total of the whole Walk column (boys + girls), 21 is the total of the whole Boys row.",
    "q.16.1-06.hints": [
      "Which values are included in 'at least 3'?",
      "Add the numbers of people for those values.",
      "7 + 5 = ?"
    ],
    "q.16.1-06.explain": "At least 3 messages means 3 or 4 messages: 7 + 5 = 12 people.",
    "q.16.1-07.hints": [
      "How many messages do 4 people sending 0 messages send?",
      "Multiply each value by the number of people: 0, 6, 16, 21, 20.",
      "Add the products."
    ],
    "q.16.1-07.explain": "0×4 + 1×6 + 2×8 + 3×7 + 4×5 = 0 + 6 + 16 + 21 + 20 = 63 messages.",
    "q.16.1-08.hints": [
      "How many boys are there among the 40 students?",
      "How many boys wear glasses (15 − 6)?",
      "Boys without glasses = total boys − boys with glasses."
    ],
    "q.16.1-08.explain": "Boys: 40 − 22 = 18. Boys with glasses: 15 − 6 = 9. Boys without glasses: 18 − 9 = 9.",
    "q.16.1-09.hints": [
      "How many girls are there?",
      "How many girls like pizza (35 − 15)?",
      "Girls who do not like it = total girls − girls who like it."
    ],
    "q.16.1-09.explain": "Girls: 60 − 24 = 36. Girls who like pizza: 35 − 15 = 20. Girls who do not like it: 36 − 20 = 16.",
    "q.16.1-10.choices": [
      "Every cell must be equal",
      "The largest number must be in the corner",
      "The sum of the row totals = the sum of the column totals = the grand total",
      "No check is needed"
    ],
    "q.16.1-10.hints": [
      "What do the row totals add up to?",
      "What do the column totals add up to?",
      "If both ways of adding count the same group of students, what must be true?"
    ],
    "q.16.1-10.explain": "Both the sum of the row totals and the sum of the column totals count every item, so they must be equal and equal to the grand total.",
    "q.16.2-01.hints": [
      "Which kind of disc does red stand for?",
      "Find the group 'Wenkai' then find the red bar.",
      "Read the height of the red bar on the axis."
    ],
    "q.16.2-01.explain": "Wenkai's red bar is 5 tall, so he has 5 DVDs.",
    "q.16.2-02.hints": [
      "Read Amber's number of CDs (blue bar).",
      "Read Karl's number of CDs.",
      "Take the difference of the two numbers."
    ],
    "q.16.2-02.explain": "Amber 8, Karl 2: 8 − 2 = 6.",
    "q.16.2-03.hints": [
      "Read the three blue bars: Amber, Wenkai, Karl.",
      "8, 9 and 2.",
      "8 + 9 + 2 = ?"
    ],
    "q.16.2-03.explain": "8 + 9 + 2 = 19 CDs.",
    "q.16.2-04.hints": [
      "In a compound bar, where is the total?",
      "Look at the top of Karl's bar.",
      "Read the value at the top."
    ],
    "q.16.2-04.explain": "The top of Karl's bar is at 9 so the total is 9 discs (2 CDs + 7 DVDs).",
    "q.16.2-05.choices": [
      "Amber",
      "Wenkai",
      "Karl",
      "They are equal"
    ],
    "q.16.2-05.hints": [
      "In a compound bar chart, which bars do you compare?",
      "What are the totals of Amber, Wenkai and Karl?",
      "10, 14, 9: which is the largest?"
    ],
    "q.16.2-05.explain": "Amber 10, Wenkai 14, Karl 9. Wenkai has the most.",
    "q.16.2-06.hints": [
      "Where does the red part start?",
      "The height of the red part is the difference of the two levels.",
      "9 − 2 = ?"
    ],
    "q.16.2-06.explain": "DVDs = 9 − 2 = 7. Choosing 9 misreads the top of the bar (the total) as the number of DVDs.",
    "q.16.2-07.hints": [
      "How many kinds of cake does Saturday have?",
      "Add the two kinds.",
      "18 + 7 = ?"
    ],
    "q.16.2-07.explain": "18 + 7 = 25 cakes.",
    "q.16.2-08.hints": [
      "Take only the chocolate cakes on both days.",
      "18 and 9.",
      "18 + 9 = ?"
    ],
    "q.16.2-08.explain": "18 + 9 = 27 chocolate cakes.",
    "q.16.2-09.choices": [
      "Pie chart",
      "Dual bar chart",
      "Compound bar chart",
      "Scatter graph"
    ],
    "q.16.2-09.hints": [
      "Which chart shows the total at the top of the bar?",
      "Which chart divides each bar into parts?",
      "Compound or dual bar chart?"
    ],
    "q.16.2-09.explain": "In a compound bar chart the top of the bar is the total for the day and the colours are the kinds of cake. A dual bar chart makes the total hard to see.",
    "q.16.2-10.hints": [
      "Work out 20% of 25.",
      "What is 10% of 25?",
      "25 + 5 = ?"
    ],
    "q.16.2-10.explain": "20% of 25 = 5. Plan for 25 + 5 = 30 cakes.",
    "q.16.3-01.hints": [
      "What fraction of 360° is 90°?",
      "Take that fraction of 40.",
      "¼ × 40 = ?"
    ],
    "q.16.3-01.explain": "90/360 = 1/4; 1/4 of 40 = 10 students.",
    "q.16.3-02.hints": [
      "How many degrees does each student represent?",
      "360 ÷ 20 = 18°.",
      "5 × 18 = ?"
    ],
    "q.16.3-02.explain": "Each student is 360 ÷ 20 = 18°. Apples: 5 × 18 = 90°.",
    "q.16.3-03.hints": [
      "How many degrees does each student represent?",
      "360 ÷ 45 = 8°.",
      "12 × 8 = ?"
    ],
    "q.16.3-03.explain": "Each student is 8°, bus: 12 × 8 = 96°.",
    "q.16.3-04.hints": [
      "How many squares are there in total?",
      "What percentage is each square?",
      "Count the shaded squares."
    ],
    "q.16.3-04.explain": "There are 100 squares so each is 1%. 35 squares is 35%.",
    "q.16.3-05.hints": [
      "How many degrees are there in total at the centre?",
      "Add the three known angles.",
      "360 − 270 = ?"
    ],
    "q.16.3-05.explain": "120 + 90 + 60 = 270. The remaining sector is 360 − 270 = 90°.",
    "q.16.3-06.choices": [
      "The same number of students take the bus",
      "The same proportion ¼ but different numbers of students",
      "Chart B has a larger angle",
      "Nothing can be concluded"
    ],
    "q.16.3-06.hints": [
      "What fraction of the circle is 90°?",
      "Work out ¼ of 60 and ¼ of 200.",
      "Does a pie chart show real numbers or proportions?"
    ],
    "q.16.3-06.explain": "Both are ¼ but ¼ of 60 is 15 while ¼ of 200 is 50. The same angle only means the same proportion.",
    "q.16.3-07.hints": [
      "What does 12% of 200 mean?",
      "What is 1% of 200?",
      "12 × 2 = ?"
    ],
    "q.16.3-07.explain": "1% of 200 is 2; 12% is 12 × 2 = 24 people.",
    "q.16.3-08.hints": [
      "How many students does each degree represent (72 ÷ 360)?",
      "72 ÷ 360 = 0.2.",
      "140 × 0.2 = ?"
    ],
    "q.16.3-08.explain": "140/360 × 72 = 0.2 × 140 = 28 students.",
    "q.16.3-09.hints": [
      "How many parts are there in total?",
      "How many degrees is each part (360 ÷ 9)?",
      "4 parts = ?"
    ],
    "q.16.3-09.explain": "9 parts in total; 360 ÷ 9 = 40° per part. The largest sector is 4 × 40 = 160°. (The number 180 children is not needed.)",
    "q.16.3-10.choices": [
      "Yes, just count the angle",
      "No, because the chart does not tell you the total number of emails",
      "Yes, it equals 360",
      "Yes, divide the angle by 2"
    ],
    "q.16.3-10.hints": [
      "Does a pie chart show proportions or quantities?",
      "Do you know the total number of emails?",
      "What extra information do you need?"
    ],
    "q.16.3-10.explain": "A pie chart only shows proportions. Without the total number of emails you cannot work out the real number for Friday.",
    "q.16.4-01.hints": [
      "What must the percentages add up to?",
      "Add the three known groups: 31 + 20 + 26.",
      "100 − 77 = ?"
    ],
    "q.16.4-01.explain": "31 + 20 + 26 = 77, so the 45–54 group is 100 − 77 = 23%.",
    "q.16.4-02.hints": [
      "What is 10% of 800?",
      "20% is double 10%.",
      "2 × 80 = ?"
    ],
    "q.16.4-02.explain": "10% = 80, 20% = 160 people.",
    "q.16.4-03.hints": [
      "Find 1% of 800.",
      "1% = 8, so 26% = 26 × 8.",
      "26 × 8 = 200 + 8"
    ],
    "q.16.4-03.explain": "1% of 800 = 8; 26 × 8 = 208 people.",
    "q.16.4-04.hints": [
      "1% of 800 = ?",
      "31 × 8 = ?",
      "30 × 8 + 8"
    ],
    "q.16.4-04.explain": "31 × 8 = 248 people.",
    "q.16.4-05.hints": [
      "Take the difference of the two production figures.",
      "11 − 6.3.",
      "Write 11 = 10.0 + 1."
    ],
    "q.16.4-05.explain": "11 − 6.3 = 4.7 million tonnes.",
    "q.16.4-06.hints": [
      "Add all four values.",
      "11 + 6.3 = 17.3.",
      "17.3 + 5 + 4.8 = ?"
    ],
    "q.16.4-06.explain": "11 + 6.3 + 5 + 4.8 = 27.1 million tonnes.",
    "q.16.4-07.hints": [
      "Which two groups do you need to add?",
      "35 + 5 = ?",
      "Check: do they all add up to 100%?"
    ],
    "q.16.4-07.explain": "35% + 5% = 40%.",
    "q.16.4-08.choices": [
      "Correct, 60% arrive on time",
      "Wrong, only 45% are on time",
      "Correct, because 45% is close to 50%",
      "Cannot tell"
    ],
    "q.16.4-08.hints": [
      "What percentage is the 'on time' group?",
      "Does 'early' also count as 'on time'?",
      "45% compared with 50%."
    ],
    "q.16.4-08.explain": "On time is only 45%, not over half. The manager would only be right by including 'early' (15%), which gives 60%, but that is not 'on time'.",
    "q.16.4-09.hints": [
      "What are the percentages for late and cancelled?",
      "10% of 400 = 40.",
      "40% = 4 × 40."
    ],
    "q.16.4-09.explain": "40% of 400 = 4 × 40 = 160 trains.",
    "q.16.4-10.hints": [
      "What percentage of all the trains are the 20 cancelled ones?",
      "If 5% is 20 trains, how many trains is 10%?",
      "How many times bigger is 100% than 5%?"
    ],
    "q.16.4-10.explain": "5% = 20 so 1% = 4 and 100% = 400 trains (of which 380 actually ran).",
    "q.16.5-01.choices": [
      "Line graph",
      "Pie chart",
      "Scatter graph",
      "Venn diagram"
    ],
    "q.16.5-01.hints": [
      "Which chart do you use for data that change over time?",
      "Which chart joins points in order of the days?",
      "Can a pie chart show the order of time?"
    ],
    "q.16.5-01.explain": "A line graph shows changes over time very clearly.",
    "q.16.5-02.choices": [
      "Pie chart",
      "Dual bar chart",
      "Scatter graph",
      "Carroll diagram"
    ],
    "q.16.5-02.hints": [
      "There are two quantities for each student.",
      "Each student is a point with two coordinates.",
      "Which chart is built from points like that?"
    ],
    "q.16.5-02.explain": "A scatter graph shows the relationship (correlation) between two quantities.",
    "q.16.5-03.choices": [
      "Line graph",
      "Dual bar chart",
      "Scatter graph",
      "Pie chart"
    ],
    "q.16.5-03.hints": [
      "There are two days and three kinds of item.",
      "You want to compare the two days for each item.",
      "Bars side by side for each item."
    ],
    "q.16.5-03.explain": "A dual bar chart puts two bars side by side for each item, so it is easy to compare.",
    "q.16.5-04.choices": [
      "Because a pie chart can only have 5 sectors",
      "Because the temperatures of the months are not parts of a total",
      "Because a pie chart cannot use colour",
      "Because temperature is always negative"
    ],
    "q.16.5-04.hints": [
      "A pie chart is for parts of a total. Are the temperatures of the months parts of a total?",
      "Does adding up the temperatures of 12 months mean anything?",
      "You need to see the change over time."
    ],
    "q.16.5-04.explain": "The temperatures of the months are not parts of a total. A line graph or bar chart is more suitable.",
    "q.16.5-05.hints": [
      "Studying chemistry includes 'only chemistry' and which other group?",
      "The overlap of the two circles belongs to both subjects.",
      "9 + 12 = ?"
    ],
    "q.16.5-05.explain": "Chemistry = only chemistry + both = 9 + 12 = 21.",
    "q.16.5-06.hints": [
      "There are three separate regions.",
      "Add the three regions; do not count the overlap twice.",
      "7 + 12 + 9 = ?"
    ],
    "q.16.5-06.explain": "7 + 12 + 9 = 28.",
    "q.16.5-07.hints": [
      "How many people like at least one drink?",
      "How many times does 25 + 18 count the people who like both?",
      "25 + 18 − 34 = ?"
    ],
    "q.16.5-07.explain": "At least one: 40 − 6 = 34. 25 + 18 = 43 counts the people who like both twice, so both = 43 − 34 = 9.",
    "q.16.5-08.choices": [
      "Temperature each hour during a day",
      "Number of students using each type of transport",
      "Height of a plant each week",
      "Number of gold, silver and bronze medals of two countries"
    ],
    "q.16.5-08.hints": [
      "Look for data that change over time.",
      "Is 'one value for each category' data over time?",
      "Choose the data that have a time axis."
    ],
    "q.16.5-08.explain": "Temperature each hour and the height of a plant each week are both data over time, so use a line graph.",
    "q.16.5-09.choices": [
      "There is no relationship",
      "Positive correlation: more study usually means higher scores",
      "Negative correlation",
      "Every student studied 0 hours"
    ],
    "q.16.5-09.hints": [
      "When the hours studied increase, what happens to the score?",
      "In which direction do the points rise?",
      "Which term do you use for the 'correlation'?"
    ],
    "q.16.5-09.explain": "The points rising shows a positive correlation: more hours of study usually means a higher score (not necessarily an absolute cause).",
    "q.16.5-10.hints": [
      "Which shapes have all angles 90°?",
      "How many lines of symmetry does a square have?",
      "How many lines of symmetry does a rectangle have?"
    ],
    "q.16.5-10.explain": "All angles 90°: rectangle and square. A square has 4 lines of symmetry, a rectangle has exactly 2. So only the rectangle: 1 shape.",
    "q.16.6-01.hints": [
      "Add the 5 ages.",
      "The total is 120. Divide by the number of values.",
      "120 ÷ 5 = ?"
    ],
    "q.16.6-01.explain": "Total 120, 120 ÷ 5 = 24.",
    "q.16.6-02.hints": [
      "Is the data in order yet?",
      "There are 5 values; which position is the middle value?",
      "The 3rd value."
    ],
    "q.16.6-02.explain": "In descending order 42, 38, 16, 12, 12: the 3rd value is 16.",
    "q.16.6-03.hints": [
      "Find the largest and the smallest.",
      "42 and 12.",
      "42 − 12 = ?"
    ],
    "q.16.6-03.explain": "42 − 12 = 30.",
    "q.16.6-04.hints": [
      "Add the 20 numbers: you can add each row of 10 numbers.",
      "Row 1 adds up to 58; what does row 2 add up to? The total?",
      "106 ÷ 20 = ?"
    ],
    "q.16.6-04.explain": "Total = 58 + 48 = 106 (row 1: 2+5+3+8+5+2+10+7+8+8 = 58, row 2: 4+7+2+2+3+6+10+3+4+7 = 48; 58 + 48 = 106). 106 ÷ 20 = 5.3.",
    "q.16.6-05.choices": [
      "5.5",
      "5",
      "5.25",
      "9"
    ],
    "q.16.6-05.hints": [
      "What is the first thing to do with the data?",
      "Put in order: 2, 3, 7, 9.",
      "There are 4 values, so the median is the mean of the two middle numbers."
    ],
    "q.16.6-05.explain": "You must put them in order: 2, 3, 7, 9. Median = (3 + 7) ÷ 2 = 5. Mistake: taking the two middle numbers of the unsorted list (9 and 2) gives 5.5; and 5.25 is the mean.",
    "q.16.6-06.hints": [
      "Put the 20 numbers in increasing order.",
      "What are the 10th and 11th values?",
      "Work out the mean of those two values."
    ],
    "q.16.6-06.explain": "Sorted: 2,2,2,2,3,3,3,4,4,5,5,6,7,7,7,8,8,8,10,10. The 10th and 11th values are both 5, so the median = 5.",
    "q.16.6-07.hints": [
      "What is the total of the 5 numbers (8 × 5)?",
      "What is the total of the four known numbers?",
      "40 − 32 = ?"
    ],
    "q.16.6-07.explain": "Total of the 5 numbers = 8 × 5 = 40; the four known numbers add up to 32; the remaining number is 40 − 32 = 8.",
    "q.16.6-08.hints": [
      "What is the original total of the 5 numbers?",
      "What is the new total of the 6 numbers?",
      "78 − 60 = ?"
    ],
    "q.16.6-08.explain": "Old total 5 × 12 = 60. New total 6 × 13 = 78. The sixth number = 18.",
    "q.16.6-09.choices": [
      "Class A is more consistent",
      "Class B is better than class A",
      "The two classes are exactly the same",
      "Class B is more consistent"
    ],
    "q.16.6-09.hints": [
      "How do the means of the two classes compare?",
      "What does the range tell you?",
      "Which class has more consistent scores?"
    ],
    "q.16.6-09.explain": "The means are the same but class A has a smaller range, so its scores are more consistent and stable.",
    "q.16.6-10.hints": [
      "What is the total of the four old numbers?",
      "What is the new total after adding 26?",
      "50 ÷ 5 = ?"
    ],
    "q.16.6-10.explain": "Old total 24, new total 50. 50 ÷ 5 = 10. One outlier raises the mean a lot; the median is still 6.",
    "q.ch-01.q": "Class 7A has 40 students, of whom 24 are girls. 18 students got a 'good' grade, of whom 10 are girls. How many boys did not get a 'good' grade?",
    "q.ch-01.hints": [
      "How many boys are there in the class?",
      "How many boys got a 'good' grade?",
      "Boys without a 'good' grade = total boys − boys with a 'good' grade."
    ],
    "q.ch-01.explain": "Boys: 40 − 24 = 16. Boys with a 'good' grade: 18 − 10 = 8. Boys without: 16 − 8 = 8 students.",
    "q.ch-02.q": "Five students in a group have a mean Maths score of 7.2. When a sixth student is added, the mean score of all six is 7.5. What score did the sixth student get?",
    "q.ch-02.hints": [
      "What is the total score of the first five students?",
      "What is the total score of the six students?",
      "The difference of the two totals is the sixth student's score."
    ],
    "q.ch-02.explain": "Total of five: 5 × 7.2 = 36. Total of six: 6 × 7.5 = 45. Sixth student: 45 − 36 = 9 marks.",
    "q.ch-03.q": "Test scores of 7 students: 5; 8; 6; 9; 8; 7; 10. Find the median of the scores.",
    "q.ch-03.hints": [
      "The first thing to do: put the numbers in order.",
      "There are 7 values: which position is the middle value?",
      "After ordering: 5, 6, 7, 8, 8, 9, 10."
    ],
    "q.ch-03.explain": "Ordered: 5, 6, 7, 8, 8, 9, 10. The 4th value is 8 so the median = 8.",
    "q.ch-04.q": "Temperatures over 7 days (°C): 28; 31; 33; 29; 35; 30; 32. Work out the range of the temperatures.",
    "q.ch-04.hints": [
      "Find the highest temperature.",
      "Find the lowest temperature.",
      "35 − 28 = ?"
    ],
    "q.ch-04.explain": "Highest 35, lowest 28; range = 35 − 28 = 7°C.",
    "q.ch-05.q": "The mean score of Nam's 6 tests is 8. His first five tests scored 9; 10; 10; 8; 6. What did he score in the sixth test?",
    "q.ch-05.hints": [
      "What is the total score of the 6 tests?",
      "What is the total of the first 5 tests?",
      "The difference of the two totals is the score of the sixth test."
    ],
    "q.ch-05.explain": "Total of 6 tests: 6 × 8 = 48. First five: 43. Sixth test: 48 − 43 = 5.",
    "q.ch-06.q": "A pie chart shows the sports chosen by 36 students: football has a 120° sector, table tennis has a 90° sector, and the rest is badminton. How many students chose badminton?",
    "q.ch-06.hints": [
      "What is the angle of the badminton sector?",
      "How many degrees does each student represent (360 ÷ 36)?",
      "Number of students = angle ÷ 10."
    ],
    "q.ch-06.explain": "Badminton angle: 360° − 120° − 90° = 150°. Each student is 10° so there are 150 ÷ 10 = 15 students.",
    "q.ch-07.q": "A dual bar chart shows the number of books read by two classes, 7A (blue) and 7B (red), over 3 months. How many more books in total did 7B read than 7A?",
    "q.ch-07.hints": [
      "Read the three blue bars of 7A: 20, 25, 30. What is the total?",
      "Read the three red bars of 7B. What is the total?",
      "Take the difference of the two totals."
    ],
    "q.ch-07.explain": "7A: 20 + 25 + 30 = 75. 7B: 28 + 22 + 35 = 85. Difference 85 − 75 = 10 books.",
    "q.ch-08.q": "Number of exercises done by 6 students: 4; 7; 9; 10; 12; 15. Find the median.",
    "q.ch-08.hints": [
      "The list is already in order. How many values are there?",
      "When there is an even number of values, which two values does the median use?",
      "(9 + 10) ÷ 2 = ?"
    ],
    "q.ch-08.explain": "There are 6 values, the two middle values are 9 and 10. Median = (9 + 10) ÷ 2 = 9.5.",
    "q.ch-09.q": "Frequency table of the scores of 30 students: score 5 has 4 students; score 6 has 6 students; score 7 has 10 students; score 8 has 6 students; score 9 has 4 students. Work out the mean score.",
    "q.ch-09.hints": [
      "Total score = Σ (score × number of students). Work out each product.",
      "20, 36, 70, 48, 36: add them up?",
      "Divide the total by 30."
    ],
    "q.ch-09.explain": "Total = 20 + 36 + 70 + 48 + 36 = 210. 210 ÷ 30 = 7 marks. The mode is also 7.",
    "q.ch-10.q": "The mean of 10 numbers is 6. If the number 15 is removed, what is the mean of the remaining 9 numbers?",
    "q.ch-10.hints": [
      "What is the total of the 10 numbers?",
      "What is the total of the remaining 9 numbers after removing 15?",
      "Divide by 9."
    ],
    "q.ch-10.explain": "Total of the 10 numbers: 60. Removing 15 leaves 45. Mean 45 ÷ 9 = 5."
  },
  vi: {
    "q.16.5-10.howto": "Đếm các hình trong danh sách vừa có bốn góc vuông VỪA có đúng hai trục đối xứng. Nhập số hình.",
    "q.16.1-07.howto": "Bảng cho biết có bao nhiêu người gửi 0, 1, 2, 3 hoặc 4 tin nhắn. Nhập tổng số tin nhắn mà tất cả mọi người trong bảng đã gửi.",
    "q.16.1-04.howto": "Tìm xem số bạn nữ đi xe buýt chiếm bao nhiêu phần trăm TẤT CẢ học sinh trong bảng. Nhập số phần trăm.",
    "q.16.1-03.howto": "Trong hàng 'bóng đá' của một bảng hai chiều có 8 bạn nam và tổng cộng 13 bạn. Nhập số bạn nữ chơi bóng đá.",
    "q.16.1-01.q": "Có bao nhiêu học sinh trong cuộc khảo sát?" + TABLE_VI,
    "q.16.1-02.q": "Có bao nhiêu bạn nữ đi xe buýt?" + TABLE_VI,
    "q.16.1-03.q": "Bóng đá: nam 8, nữ ?, tổng 13. Có bao nhiêu bạn nữ chơi bóng đá?",
    "q.16.1-04.q": "Dựa vào bảng, bao nhiêu phần trăm tổng số học sinh là nữ đi xe buýt?" + TABLE_VI,
    "q.16.1-05.q": "Từ bảng, có bao nhiêu bạn nam đi bộ đến trường?" + TABLE_VI,
    "q.16.1-06.q": "Số tin nhắn 30 người gửi trong một ngày:\n0 tin: 4 người\n1: 6\n2: 8\n3: 7\n4: 5\nCó bao nhiêu người gửi ít nhất 3 tin nhắn?",
    "q.16.1-07.q": "Dùng cùng bảng đó (0: 4, 1: 6, 2: 8, 3: 7, 4: 5 người), tổng số tin nhắn đã gửi là bao nhiêu?",
    "q.16.1-08.q": "Có 40 học sinh, trong đó 22 bạn nữ. Có 15 học sinh đeo kính; 6 bạn trong số đó là nữ. Có bao nhiêu bạn nam KHÔNG đeo kính?",
    "q.16.1-09.q": "60 học sinh, trong đó 35 bạn thích pizza. Có 24 bạn nam và 15 bạn nam thích pizza. Có bao nhiêu bạn nữ KHÔNG thích pizza?",
    "q.16.1-10.q": "Một bảng hai chiều đã được điền đầy đủ. Cách kiểm tra nào cho thấy rõ nhất bảng nhất quán?",
    "q.16.2-01.q": "Biểu đồ cột kép cho biết số CD (xanh) và DVD (đỏ). Wenkai có bao nhiêu DVD?",
    "q.16.2-02.q": "Amber có nhiều hơn Karl bao nhiêu CD?",
    "q.16.2-03.q": "Ba học sinh có tất cả bao nhiêu CD?",
    "q.16.2-04.q": "Trong biểu đồ cột chồng, tổng số đĩa của Karl là bao nhiêu?",
    "q.16.2-05.q": "Học sinh nào có nhiều đĩa nhất tính cả hai loại?",
    "q.16.2-06.q": "Trong biểu đồ cột chồng, phần đỏ (DVD) của Karl bắt đầu từ 2 và kết thúc ở 9. Karl có bao nhiêu DVD?",
    "q.16.2-07.q": "Một quán cà phê bán bánh. Thứ Bảy: 18 bánh sô-cô-la, 7 bánh vani. Chủ Nhật: 9 bánh sô-cô-la, 14 bánh vani. Thứ Bảy bán được bao nhiêu cái bánh?",
    "q.16.2-08.q": "Cùng quán cà phê đó (Thứ Bảy: 18 sô-cô-la, 7 vani; Chủ Nhật: 9 sô-cô-la, 14 vani). Tổng cộng hai ngày bán được bao nhiêu bánh sô-cô-la?",
    "q.16.2-09.q": "Em muốn một biểu đồ cho thấy CẢ tổng số bánh mỗi ngày LẪN cách mỗi tổng chia thành sô-cô-la và vani. Biểu đồ nào là tốt nhất?",
    "q.16.2-10.q": "Thứ Bảy tuần sau quán dự kiến bán nhiều hơn 20% so với 25 cái bánh của Thứ Bảy này. Quán nên chuẩn bị bao nhiêu cái bánh?",
    "q.16.3-01.q": "Trong biểu đồ tròn của 40 học sinh, hình quạt 'đi bộ' là 90°. Có bao nhiêu học sinh đi bộ?",
    "q.16.3-02.q": "20 học sinh chọn loại trái cây yêu thích: 5 bạn chọn táo. Hình quạt táo có góc bao nhiêu độ?",
    "q.16.3-03.q": "45 học sinh được hỏi về cách đi học. 12 bạn đi xe buýt. Hình quạt xe buýt có góc bao nhiêu độ?",
    "q.16.3-04.q": "Một biểu đồ ô vuông gồm 100 ô có 35 ô tô màu xanh lá. Màu xanh lá chiếm bao nhiêu phần trăm?",
    "q.16.3-05.q": "Một biểu đồ tròn có các hình quạt 120°, 90° và 60° và thêm một hình quạt nữa. Góc của hình quạt cuối cùng là bao nhiêu?",
    "q.16.3-06.q": "Hai biểu đồ tròn đều có hình quạt 90° cho 'xe buýt'. Biểu đồ A dành cho 60 học sinh, biểu đồ B dành cho 200 học sinh. Nhận xét nào là đúng?",
    "q.16.3-07.q": "200 người được khảo sát. Một biểu đồ ô vuông cho thấy 12% trong số họ thích trà. Có bao nhiêu người thích trà?",
    "q.16.3-08.q": "Một biểu đồ tròn biểu diễn 72 học sinh. Hình quạt 'đi xe đạp' là 140°. Có bao nhiêu học sinh đi xe đạp?",
    "q.16.3-09.q": "180 trẻ em chọn Bóng đá, Bơi hoặc Quần vợt theo tỉ lệ 2 : 3 : 4. Góc của hình quạt lớn nhất là bao nhiêu?",
    "q.16.3-10.q": "Một biểu đồ tròn cho biết số email Preety nhận được mỗi ngày trong tuần làm việc. Em có thể biết chính xác ngày thứ Sáu cô ấy nhận được bao nhiêu email không?",
    "q.16.4-01.q": "Đồ họa thông tin: một ngôi làng có 800 người lớn. Các nhóm tuổi: 18–34: 31%, 35–44: 20%, 45–54: ?, từ 55 trở lên: 26%. Bao nhiêu phần trăm ở độ tuổi 45–54?",
    "q.16.4-02.q": "Trong ngôi làng có 800 người lớn, 20% ở độ tuổi 35–44. Đó là bao nhiêu người lớn?",
    "q.16.4-03.q": "Trong ngôi làng có 800 người lớn, 26% từ 55 tuổi trở lên. Đó là bao nhiêu người lớn?",
    "q.16.4-04.q": "Trong cùng ngôi làng, 31% ở độ tuổi 18–34. Đó là bao nhiêu người lớn?",
    "q.16.4-05.q": "Sản lượng chuối mỗi năm (triệu tấn): Ấn Độ 11, Brazil 6,3, Ecuador 5, Trung Quốc 4,8. Ấn Độ sản xuất nhiều hơn Brazil bao nhiêu triệu tấn?",
    "q.16.4-06.q": "Dùng cùng số liệu về chuối (Ấn Độ 11, Brazil 6,3, Ecuador 5, Trung Quốc 4,8), tổng sản lượng của bốn nước là bao nhiêu triệu tấn?",
    "q.16.4-07.q": "Đồ họa thông tin về tàu hỏa: đến sớm 15%, đúng giờ 45%, trễ 35%, bị hủy 5%. Bao nhiêu phần trăm chuyến tàu trễ hoặc bị hủy?",
    "q.16.4-08.q": "Người quản lý nói: 'Hơn một nửa số chuyến tàu của chúng tôi đến đúng giờ.' Dựa vào số liệu (đến sớm 15%, đúng giờ 45%, trễ 35%, bị hủy 5%), người quản lý có đúng không?",
    "q.16.4-09.q": "Một nhà ga có 400 chuyến tàu mỗi ngày với các tỉ lệ phần trăm ở trên. Mỗi ngày có bao nhiêu chuyến trễ hoặc bị hủy?",
    "q.16.4-10.q": "Vào một ngày khác, 20 chuyến tàu bị hủy, chiếm 5% tổng số chuyến theo kế hoạch. Hôm đó theo kế hoạch có bao nhiêu chuyến tàu?",
    "q.16.5-01.q": "Biểu đồ nào cho thấy rõ nhất số kem bán được mỗi ngày trong một tuần, để em thấy được sự thay đổi theo thời gian?",
    "q.16.5-02.q": "Em có chiều cao và cỡ giày của 20 học sinh. Biểu đồ nào cho thấy học sinh cao hơn có xu hướng chân to hơn không?",
    "q.16.5-03.q": "Số bánh ngọt, bánh mì kẹp và đồ uống bán được ở một quán cà phê trong hai ngày khác nhau. Biểu đồ nào giúp dễ so sánh hai ngày cho từng mặt hàng?",
    "q.16.5-04.q": "Vì sao biểu đồ tròn KHÔNG phải là lựa chọn tốt cho nhiệt độ mỗi tháng trong một năm?",
    "q.16.5-05.q": "Một sơ đồ Venn: 7 học sinh chỉ học sinh học, 12 học cả hai môn, 9 chỉ học hóa học. Tổng cộng có bao nhiêu học sinh học hóa học?",
    "q.16.5-06.q": "Cùng sơ đồ Venn đó (7 chỉ sinh học, 12 cả hai, 9 chỉ hóa học). Tổng cộng có bao nhiêu học sinh?",
    "q.16.5-07.q": "40 người: 25 người thích trà, 18 người thích cà phê, 6 người không thích loại nào. Có bao nhiêu người thích cả hai?",
    "q.16.5-08.q": "Tập dữ liệu nào được biểu diễn tốt nhất bằng biểu đồ đường? (Chọn tất cả đáp án đúng.)",
    "q.16.5-09.q": "Một biểu đồ phân tán giữa số giờ học và điểm kiểm tra cho thấy các điểm đi lên từ dưới trái lên trên phải. Điều này gợi ý gì?",
    "q.16.5-10.q": "Các hình: hình chữ nhật, hình bình hành, hình vuông, hình thang, hình thoi, hình diều. Có bao nhiêu hình có TẤT CẢ các góc bằng 90° và có ĐÚNG hai trục đối xứng?",
    "q.16.6-01.q": "Năm số tuổi: 42, 38, 16, 12, 12. Tính số trung bình.",
    "q.16.6-02.q": "Năm số tuổi: 42, 38, 16, 12, 12. Tính trung vị.",
    "q.16.6-03.q": "Năm số tuổi: 42, 38, 16, 12, 12. Tính khoảng biến thiên.",
    "q.16.6-04.q": "Thời gian chờ (phút) trong 20 ngày: 2 5 3 8 5 2 10 7 8 8 4 7 2 2 3 6 10 3 4 7. Tính số trung bình.",
    "q.16.6-05.q": "Trung vị của 3, 9, 2, 7 là bao nhiêu?",
    "q.16.6-06.q": "Dùng 20 thời gian chờ (2 5 3 8 5 2 10 7 8 8 4 7 2 2 3 6 10 3 4 7), tìm trung vị. (Hãy sắp xếp trước: có 20 giá trị.)",
    "q.16.6-07.q": "Số trung bình của năm số là 8. Bốn trong số đó là 6, 9, 7 và 10. Số thứ năm là bao nhiêu?",
    "q.16.6-08.q": "Số trung bình của 5 số là 12. Thêm số thứ sáu thì số trung bình trở thành 13. Số thứ sáu là bao nhiêu?",
    "q.16.6-09.q": "Điểm của lớp A có trung bình 6,5 và khoảng biến thiên 2. Điểm của lớp B có trung bình 6,5 và khoảng biến thiên 7. Nhận xét nào là tốt nhất?",
    "q.16.6-10.q": "Bốn giá trị là 5, 6, 6, 7 (trung bình 6). Thêm giá trị thứ năm là 26. Số trung bình mới là bao nhiêu?"
  }
});
