window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 6,
  en: {
    "q.ch-10.howto": "The question only asks for the response rate: out of all the forms the shop sent, what percentage came back. Enter that percentage.",
    "u.realm": "Floating Information Market",
    "u.story": "At the floating market every trader boasts: 'My oranges are the sweetest!' But who can test the whole market? You will learn to ask statistical questions, choose types of data, take fair samples and spot biased surveys so that boasts cannot fool you.",
    "g.0.def": "Information (numbers or words) collected to answer a question.",
    "g.1.def": "A question that can only be answered by collecting new data, and whose answer can vary from one individual to another.",
    "g.2.def": "Something you think will happen, tested using data.",
    "g.3.def": "Numerical data that can take only separate values, usually from counting (number of siblings, number of pages).",
    "g.4.def": "Measured data that can take any value (mass, length, time).",
    "g.5.def": "Data that are words, not numbers (colours, favourite subjects).",
    "g.6.def": "The whole group that you want to find out about.",
    "g.7.def": "A part of the population that is chosen to be surveyed.",
    "g.8.def": "The number of individuals in the sample; a large sample is usually more reliable than a small one.",
    "s.6.1.learn": [
      "A statistical question is one that you can only answer by collecting new data. A prediction is something you think will be true and will test with data.",
      "Discrete data are numbers that can take only separate values (counting): number of siblings, number of pages in a book, shoe size.",
      "Continuous data are measurements that can take any value: mass, length, time.",
      "Categorical data are words, not numbers: colours, favourite subjects, types of sport.",
      "There are many ways to collect data: questionnaires, measuring, observation, interviews, experiments. Questions in a questionnaire must be clear, with response boxes that do not overlap and cover all possibilities."
    ],
    "ex.6.1.q": "Prediction: 'Plants grown in the sun grow taller than plants grown in the shade.' You test it with an experiment and measure the heights of the plants. Is height discrete or continuous data?",
    "ex.6.1.steps": [
      "Do the experiment: sow the same kind of seed, one group in the sun and one group in the shade, with the same soil and the same amount of water.",
      "When the plants have grown, measure the height of each plant.",
      "Height is a measurement that can take any value, so it is continuous data."
    ],
    "ex.6.1.prompts": [
      "To make a fair comparison between the two groups of plants, which factor do you want to change and which factors do you keep the same?",
      "After the plants have grown, which number do you need to collect for each plant?",
      "Can this measurement take a value such as 12.37 cm? So which type of data is it?"
    ],
    "ex.6.1.twist": "If instead of measuring height you count the number of leaves on each plant, is that discrete or continuous data?",
    "s.6.2.learn": [
      "The population is the whole group you want to find out about; a sample is a part chosen from the population.",
      "If asking the whole population would take too long or cost too much, we use a sample.",
      "A good sample must represent the population: choose at random (draw names out of a hat, pick from a list), and do not ask only friends or one special group.",
      "A larger sample usually gives more reliable results, but takes more time and costs more.",
      "When a dice is thrown more times, the relative frequency of each face gets closer to the true probability; with few throws, results are easily distorted by chance."
    ],
    "ex.6.2.q": "Arun wants to know whether boys or girls in his school can hold their breath longer. What is the population in this investigation? (Then explain why he uses a sample.)",
    "ex.6.2.steps": [
      "Population: all the learners in the school.",
      "Testing the whole school would take a lot of time and is not practical, so choose a sample.",
      "Choose the sample: draw 40 names out of a hat, or pick from each class list (do not choose only close friends!)."
    ],
    "ex.6.2.prompts": [
      "Which group of learners is Arun's question about? What is that group called in statistics?",
      "Would it be convenient to test that whole group? What is the alternative?",
      "How can the sample be unbiased, meaning that every learner has an equal chance of being chosen?"
    ],
    "ex.6.2.twist": "If the school has 800 learners and Arun chooses a sample of 40, what percentage of the population is the sample?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The floating market is packed! Use statistics to choose the right samples and spot biased surveys.",
    "q.6.1-01.hints": [
      "Is mass measured or counted?",
      "Can the mass of a book be 350 g, 350.5 g, 350.52 g ...?",
      "So does it take any value or only separate values?"
    ],
    "q.6.1-01.explain": "Mass is a measurement that can take any value, so it is continuous data.",
    "q.6.1-02.hints": [
      "Is colour recorded as a number or as a word?",
      "Can you add colours together or find their mean?",
      "What do we call data that are words?"
    ],
    "q.6.1-02.explain": "Colour is a word, not a number, so it is categorical data.",
    "q.6.1-03.hints": [
      "Are pages counted or measured?",
      "Can a book have 120.5 pages?",
      "What type of data takes only the values 1, 2, 3, ...?"
    ],
    "q.6.1-03.explain": "The number of pages is a count and takes only separate whole-number values, so it is discrete data.",
    "q.6.1-04.hints": [
      "Can a shoe size be 36.37 or 36.512?",
      "Which values are actually allowed in real life?",
      "What do we call data that take only separate values?"
    ],
    "q.6.1-04.explain": "Shoe size takes only separate values, so it is discrete data. Common mistake: seeing 'measuring a foot' and choosing continuous — but foot length is continuous, shoe size is not.",
    "q.6.1-05.hints": [
      "What does each frequency tell you?",
      "To find the total number of people, what do you do with the frequencies?",
      "Work out 2 + 4 + 9 + 17 + 21."
    ],
    "q.6.1-05.explain": "Total number of people = add all the frequencies: 2 + 4 + 9 + 17 + 21 = 53.",
    "q.6.1-06.hints": [
      "What kind of value is the mode?",
      "Which score has the greatest frequency?",
      "The greatest frequency is 21 — which score does it belong to?"
    ],
    "q.6.1-06.explain": "The mode is the score with the greatest frequency. Score 5 has 21 people, the most, so the mode is 5.",
    "q.6.1-07.hints": [
      "To find the mean you need the total of all the scores. Each score appears many times — how do you multiply each score by its frequency?",
      "Work out 1×2 + 2×4 + 3×9 + 4×17 + 5×21.",
      "Divide the total score by the total number of people (53)."
    ],
    "q.6.1-07.explain": "Total score = 2 + 8 + 27 + 68 + 105 = 210. Mean = 210 ÷ 53 ≈ 3.96.",
    "q.6.1-08.hints": [
      "Which values are included in totals of 9 or more?",
      "Find the frequencies of 9, 10, 11 and 12 in the list (counting from total 2).",
      "Add 14 + 15 + 3 + 0."
    ],
    "q.6.1-08.explain": "The frequencies of totals 9, 10, 11, 12 are 14, 15, 3, 0. Adding: 14 + 15 + 3 + 0 = 32. (The total 7 occurred 17 times, the most — supporting Sofia's prediction.)",
    "q.6.1-09.hints": [
      "Which two days does the prediction compare? Which days do you need data for?",
      "Is one person on one day enough to draw a conclusion?",
      "Once you have lots of data for the two days, how do you compare them?"
    ],
    "q.6.1-09.explain": "You need numerical data about emails received on both Mondays and Fridays, from many people over many weeks, then compare the mean numbers. The other options use the wrong data or too small a sample.",
    "q.6.1-10.hints": [
      "Which box would someone who does exactly 2 hours tick?",
      "Is there a suitable box for someone who does 30 minutes?",
      "Good response boxes do not overlap and cover every possibility."
    ],
    "q.6.1-10.explain": "The boxes 'between 1 and 2' and 'between 2 and 3' overlap at 2 hours, and there is no box for under 1 hour. Groups must not overlap and must be complete: <1, 1 to <2, 2 to <3, 3 or more.",
    "q.6.2-01.hints": [
      "The population is the whole group Arun wants to find out about. Who is in that group?",
      "Is it only the learners who are tested?",
      "Tell population and sample apart: the sample is the part that is chosen."
    ],
    "q.6.2-01.explain": "The population is all the learners in the school. The learners who are tested are the sample; the time they hold their breath is the data.",
    "q.6.2-02.hints": [
      "If the whole school has 1000 learners and each takes 2 minutes, how long would it take?",
      "Does a sample always give exactly the same result as the whole population?",
      "What is the practical reason for using a sample?"
    ],
    "q.6.2-02.explain": "Testing the whole school takes a lot of time and is not practical, so a sample is used. A sample is only approximate and does not always match the population exactly.",
    "q.6.2-03.hints": [
      "The sample size is the number of individuals in the sample. Who does each frequency count?",
      "To find the total number of learners, what do you do with the four frequencies?",
      "Work out 200 + 170 + 230 + 220."
    ],
    "q.6.2-03.explain": "Sample size = the sum of the frequencies = 200 + 170 + 230 + 220 = 820.",
    "q.6.2-04.hints": [
      "Which season has the highest frequency?",
      "By how much does that season beat the second highest?",
      "With a difference like that, should you conclude strongly or cautiously?"
    ],
    "q.6.2-04.explain": "Autumn has 230, the highest, but only 10 more than winter (220), so it gives only weak support for the prediction. Do not conclude 'proved' when the difference is small.",
    "q.6.2-05.hints": [
      "What are the frequencies of score 1 and score 2?",
      "What calculation combines these two groups?",
      "Work out 10 + 12."
    ],
    "q.6.2-05.explain": "Score 1 has 10 people and score 2 has 12 people. Total 10 + 12 = 22 (out of 37 callers altogether).",
    "q.6.2-06.hints": [
      "Relative frequency equals the number of times something happens divided by what?",
      "How many sixes were there, and how many throws in total?",
      "Work out 110 ÷ 500."
    ],
    "q.6.2-06.explain": "Relative frequency = 110 ÷ 500 = 0.22. If the dice is fair, we expect about 1/6 ≈ 0.167.",
    "q.6.2-07.hints": [
      "Of the three experiments, which has the most throws?",
      "If the dice is fair, about how many times would you expect each face in 500 throws?",
      "How far are the counts for 5 and 6 from that expected number?"
    ],
    "q.6.2-07.explain": "A larger sample is more reliable. If fair, each face would come up about 83 times; face 6 (110) and face 5 (48) are far off, so the dice may not be fair.",
    "q.6.2-08.hints": [
      "Who must a good sample represent?",
      "Could the football team's opinions be the same as the whole school's?",
      "Which method gives every learner an equal chance of being chosen?"
    ],
    "q.6.2-08.explain": "Drawing names at random gives every learner an equal chance. The other methods choose a special group, so the sample is biased.",
    "q.6.2-09.hints": [
      "If the dice is fair, what is the probability of a six?",
      "The expected number of times equals the probability times the total number of throws.",
      "Work out 500 × 1/6 or 500 ÷ 6."
    ],
    "q.6.2-09.explain": "The probability of a six is 1/6. Expected number = 500 ÷ 6 ≈ 83.3. Suki actually got 110 — much higher.",
    "q.6.2-10.hints": [
      "Which is more reliable: asking 5 patients or 500 patients?",
      "What else does asking 500 patients cost?",
      "If a sample is large but chosen unfairly, does the bias disappear?"
    ],
    "q.6.2-10.explain": "A larger sample is more reliable but costs time and money. A large sample cannot replace choosing the sample fairly.",
    "q.ch-01.q": "A school has 1200 learners. It chooses a random sample of 5% of the learners. How many learners are in the sample?",
    "q.ch-01.hints": [
      "5% means 5 parts out of 100 parts. Write 5% as a fraction.",
      "Work out 1200 divided by 100 first.",
      "Multiply that result by 5."
    ],
    "q.ch-01.explain": "5% of 1200 = 1200 × 5 ÷ 100 = 60 learners.",
    "q.ch-02.q": "Which of the following is DISCRETE data?",
    "q.ch-02.choices": [
      "The number of goals in a football match",
      "The height of a player",
      "The time taken to run 100 m",
      "The colour of a team's shirt"
    ],
    "q.ch-02.hints": [
      "Is discrete data counted or measured?",
      "Can you record 2.5 goals?",
      "Rule out the measured data (height, time) and the word data (colour)."
    ],
    "q.ch-02.explain": "The number of goals is a count, so it takes only 0, 1, 2, ... (discrete). Height and time are continuous; shirt colour is categorical.",
    "q.ch-03.q": "Lan wants to find the mean height of Year 7 learners (300 learners) so she measures only 30 learners in the school basketball team. Which comment is best?",
    "q.ch-03.choices": [
      "The sample is biased: the basketball team is usually taller than normal, so the result will be larger than the true value.",
      "The sample is good because 30 learners is large enough.",
      "The sample is good because height is continuous data.",
      "The sample is biased because only boys are in the basketball team."
    ],
    "q.ch-03.hints": [
      "Are the learners in the basketball team like the whole year group in height?",
      "Will the mean from that sample be larger or smaller than the true value?",
      "Is the sample size enough to rescue an unfairly chosen sample?"
    ],
    "q.ch-03.explain": "Choosing a special group (basketball players, who are usually tall) as the sample causes bias; a large sample size cannot fix a sampling mistake.",
    "q.ch-04.q": "Which of the following survey questions is a leading question (it hints at the answer) and so makes the results biased?",
    "q.ch-04.choices": [
      "'Do you agree that school lunch is far too awful?'",
      "'How do you rate school lunch: very good, good, average, poor?'",
      "'How many days a week do you eat school lunch?'",
      "'Which item at lunch do you like best?'"
    ],
    "q.ch-04.hints": [
      "Which question already contains an opinion about lunch?",
      "Is the person answering being pushed towards a particular answer?",
      "A good question gives several neutral options."
    ],
    "q.ch-04.explain": "The first question has the words 'far too awful', which suggest the answer and make the results biased. The other questions are neutral.",
    "q.ch-05.q": "A random survey of 80 learners from a school of 1500 learners finds that 36 like football. Estimate the number of learners in the whole school who like football.",
    "q.ch-05.hints": [
      "In the sample, what proportion like football? Write it as a fraction.",
      "Simplify 36/80.",
      "Multiply that proportion by 1500."
    ],
    "q.ch-05.explain": "Proportion in the sample: 36/80 = 9/20. Estimate for the whole school: 1500 × 9/20 = 675 learners.",
    "q.ch-06.q": "A school has 4 year groups with 120, 180, 150 and 90 learners. A sample of 54 learners is needed so that each year group is represented in the same proportion as its number of learners. How many learners are chosen from the year group of 150 learners?",
    "q.ch-06.hints": [
      "What is the total number of learners in the school?",
      "The overall sampling fraction is 54 out of that total. Simplify the fraction.",
      "Multiply the fraction by 150."
    ],
    "q.ch-06.explain": "Total learners: 120 + 180 + 150 + 90 = 540. Fraction: 54/540 = 1/10. From the year group of 150, choose 150 ÷ 10 = 15 learners.",
    "q.ch-07.q": "Two groups each survey which subject learners in the whole school like best: Group A asks 15 learners chosen by drawing names at random; Group B asks 300 learners chosen by drawing names at random. Which conclusion is reasonable?",
    "q.ch-07.choices": [
      "B's result is more reliable because the sample is larger and both chose at random.",
      "A's result is more reliable because it is easier to check.",
      "Both results are equally reliable because both are random.",
      "B's result cannot be used because the sample is too large."
    ],
    "q.ch-07.hints": [
      "Both groups chose at random. What is the difference between them?",
      "Is a sample of 15 more easily distorted by chance than a sample of 300?",
      "So which result reflects the whole school better?"
    ],
    "q.ch-07.explain": "A larger sample is less distorted by chance, so it is more reliable. Random choice is necessary but sample size matters too.",
    "q.ch-08.q": "A dice is thrown 600 times and a six comes up 130 times. Work out the relative frequency of a six (round to 3 decimal places).",
    "q.ch-08.hints": [
      "Relative frequency is the number of times it happens divided by what?",
      "Write the fraction 130/600 and simplify it.",
      "Divide 13 by 60 and round to 3 decimal places."
    ],
    "q.ch-08.explain": "130 ÷ 600 = 13/60 ≈ 0.217. (If fair, we expect about 0.167.)",
    "q.ch-09.q": "25 learners are asked 'How long did you spend on homework yesterday?': under 1 hour: 3 learners; 1 to under 2 hours: 6 learners; 2 to under 3 hours: 11 learners; 3 hours or more: 5 learners. What percentage of the learners spent 2 hours or more on homework?",
    "q.ch-09.hints": [
      "Which boxes make up 'from 2 hours up'?",
      "Add the frequencies of those boxes, then divide by 25.",
      "Convert the fraction you get into a percentage."
    ],
    "q.ch-09.explain": "11 + 5 = 16 learners. 16/25 = 64/100 = 64%.",
    "q.ch-10.q": "A shop sends out 2000 survey forms by post. Only 400 forms are returned, and 90% of those praise the shop. The shop concludes '90% of customers are satisfied'. What is the response rate as a percentage? (Hint: people who do not reply may differ from people who do.)",
    "q.ch-10.hints": [
      "The response rate is the number of forms returned divided by the number sent.",
      "Write the fraction 400/2000 and simplify it.",
      "Convert to a percentage. Would you trust the conclusion '90% of customers are satisfied' when only 1/5 replied?"
    ],
    "q.ch-10.explain": "400 ÷ 2000 = 0.2 = 20%. With 80% not replying, the conclusion about 'all customers' may be biased (satisfied people are often more likely to reply)."
  },
  vi: {
    "q.6.1-01.q": "Chọn từ đúng để mô tả khối lượng của một cuốn sách.",
    "q.6.1-01.choices": ["rời rạc", "liên tục", "phân loại"],
    "q.6.1-02.q": "Chọn từ đúng để mô tả màu sắc của một cuốn sách.",
    "q.6.1-02.choices": ["rời rạc", "liên tục", "phân loại"],
    "q.6.1-03.q": "Chọn từ đúng để mô tả số trang của một cuốn sách.",
    "q.6.1-03.choices": ["rời rạc", "liên tục", "phân loại"],
    "q.6.1-04.q": "Cỡ giày (ví dụ 36, 37, 38 ...) là loại dữ liệu nào? Chọn lý do tốt nhất.",
    "q.6.1-04.choices": [
      "Rời rạc: chỉ nhận một số giá trị riêng lẻ như 36, 37, 38.",
      "Liên tục: giày được đo bằng thước, nên là liên tục.",
      "Phân loại: cỡ giày là nhãn, không phải số.",
      "Liên tục: cỡ giày có thể nhận mọi giá trị giữa 36 và 37."
    ],
    "q.6.1-05.q": "Một phiếu khảo sát khách sạn hỏi 'Phòng của bạn sạch đến mức nào? Khoanh tròn từ 1 đến 5'. Kết quả: điểm 1 → 2 người, điểm 2 → 4 người, điểm 3 → 9 người, điểm 4 → 17 người, điểm 5 → 21 người. Có bao nhiêu người trả lời?",
    "q.6.1-06.q": "Với cùng các câu trả lời đó (điểm 1: 2 người, 2: 4, 3: 9, 4: 17, 5: 21), mốt của điểm là bao nhiêu?",
    "q.6.1-07.q": "Với cùng các câu trả lời đó, tính điểm trung bình. Làm tròn đến 2 chữ số thập phân.",
    "q.6.1-08.q": "Sofia và Zara ném hai con xúc xắc 100 lần và cộng điểm. Tần số của các tổng từ 2 đến 12 là: 3, 5, 11, 12, 8, 17, 12, 14, 15, 3, 0. Tổng 9 trở lên xuất hiện bao nhiêu lần?",
    "q.6.1-09.q": "Adekunle dự đoán: 'Mọi người nhận được nhiều email vào thứ Hai hơn thứ Sáu.' Kế hoạch nào kiểm tra dự đoán tốt nhất?",
    "q.6.1-09.choices": [
      "Nhờ một mẫu người đi làm ghi lại số email nhận được vào nhiều ngày thứ Hai và nhiều ngày thứ Sáu, rồi so sánh các giá trị trung bình.",
      "Hỏi một người bạn xem thứ Hai tuần trước bạn ấy nhận được bao nhiêu email.",
      "Hỏi mọi người thích thứ Hai hay thứ Sáu hơn.",
      "Đếm số email mọi người gửi vào Chủ nhật."
    ],
    "q.6.1-10.q": "Một bảng hỏi có câu: 'Bạn làm bài tập bao nhiêu giờ? Đánh dấu một ô: Từ 1 đến 2 giờ / Từ 2 đến 3 giờ / Hơn 3 giờ.' Bảng hỏi sai ở đâu, và phiên bản nào sửa đúng?",
    "q.6.1-10.choices": [
      "Các ô chồng lấn ở 2 giờ và 3 giờ, và không có ô cho dưới 1 giờ. Tốt hơn: Dưới 1 / Từ 1 đến dưới 2 / Từ 2 đến dưới 3 / Từ 3 trở lên.",
      "Có quá nhiều ô. Tốt hơn: chỉ dùng một ô.",
      "Nên là câu hỏi mở, không có ô nào cả.",
      "Không có gì sai."
    ],
    "q.6.2-01.q": "Arun tìm hiểu xem học sinh trong trường mình nín thở được bao lâu. Tổng thể là gì?",
    "q.6.2-01.choices": [
      "Tất cả học sinh trong trường",
      "40 học sinh mà bạn ấy kiểm tra",
      "Tất cả các bạn nam trong lớp của bạn ấy",
      "Thời gian mỗi học sinh nín thở"
    ],
    "q.6.2-02.q": "Vì sao Arun có thể dùng mẫu thay vì kiểm tra cả trường?",
    "q.6.2-02.choices": [
      "Kiểm tra mọi người sẽ mất quá nhiều thời gian và có thể không thực tế.",
      "Mẫu luôn cho kết quả giống hệt cả trường.",
      "Pháp luật bắt buộc phải dùng mẫu.",
      "Vì chỉ có các bạn nam mới nín thở được."
    ],
    "q.6.2-03.q": "Sofia ghi lại mùa sinh nhật của các bạn: Xuân 200, Hạ 170, Thu 230, Đông 220. Cỡ mẫu là bao nhiêu?",
    "q.6.2-04.q": "Sofia dự đoán sinh nhật vào mùa thu phổ biến hơn các mùa khác. Mẫu của bạn ấy: Xuân 200, Hạ 170, Thu 230, Đông 220. Kết luận nào tốt nhất?",
    "q.6.2-04.choices": [
      "Mùa thu có tần số cao nhất (230) nhưng chỉ hơn mùa đông (220) một chút, nên dữ liệu chỉ ủng hộ dự đoán một cách yếu ớt.",
      "Dự đoán đã được chứng minh: mùa thu phổ biến hơn hẳn.",
      "Dự đoán sai vì mùa đông gần bằng.",
      "Không thể kết luận vì các số khác nhau."
    ],
    "q.6.2-05.q": "Một khảo sát đường dây hỗ trợ cho điểm từ 1 đến 5 với tần số 10, 12, 6, 1, 8 (1 = không hữu ích, 5 = rất hữu ích). Có bao nhiêu người gọi cho điểm 1 hoặc 2?",
    "q.6.2-06.q": "Suki ném một con xúc xắc 500 lần và được mặt sáu 110 lần. Tần suất tương đối của mặt sáu là bao nhiêu? Viết đáp số dưới dạng số thập phân.",
    "q.6.2-07.q": "Kết quả xúc xắc của Suki: ném 20 lần được mặt sáu 3 lần; ném 100 lần được mặt sáu 23 lần; ném 500 lần cho các điểm 1-6 lần lượt là 93, 92, 83, 74, 48, 110. Nhận xét nào tốt nhất?",
    "q.6.2-07.choices": [
      "Kết quả 500 lần ném đáng tin hơn, và sự chênh lệch lớn giữa mặt 5 (48) và mặt 6 (110) cho thấy xúc xắc có thể không công bằng.",
      "Kết quả 20 lần ném đáng tin nhất vì dễ đếm nhất.",
      "Cả ba thí nghiệm đều chứng minh xúc xắc công bằng.",
      "Kết quả không bao giờ giúp được gì vì xúc xắc là ngẫu nhiên."
    ],
    "q.6.2-08.q": "Một trường muốn biết 900 học sinh thích xem môn thể thao nào. Cách chọn mẫu 60 bạn nào là tốt nhất?",
    "q.6.2-08.choices": [
      "Bỏ tất cả tên vào mũ và bốc ngẫu nhiên 60 tên.",
      "Hỏi 60 bạn trong đội bóng đá của trường.",
      "Hỏi 60 bạn đứng gần cổng trường nhất vào giờ ra chơi.",
      "Chỉ hỏi 60 người bạn thân nhất của người tổ chức."
    ],
    "q.6.2-09.q": "Nếu một con xúc xắc công bằng và được ném 500 lần, em mong đợi có bao nhiêu mặt sáu? Làm tròn đáp số đến 1 chữ số thập phân.",
    "q.6.2-10.q": "Ban quản lý bệnh viện muốn biết bệnh nhân nghĩ gì về dịch vụ cấp cứu. Nhận xét nào về cỡ mẫu là đúng?",
    "q.6.2-10.choices": [
      "Mẫu lớn hơn cho kết quả đáng tin hơn, nhưng tốn nhiều thời gian và tiền bạc hơn để thu thập và phân tích.",
      "Mẫu nhỏ hơn luôn tốt hơn vì nhanh hơn.",
      "Cỡ mẫu không quan trọng nếu câu hỏi tốt.",
      "Mẫu lớn hơn thì tốt hơn vì không cần chọn mẫu công bằng nữa."
    ]
  }
});
