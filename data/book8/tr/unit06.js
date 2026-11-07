window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 6,
  en: {
    "u.realm": "Survey Island",
    "u.story": "You arrive on Survey Island, where the islanders are about to elect a representative but nobody knows exactly how many people live in each village. You must design questionnaires and choose samples very carefully so the results show the opinion of the whole island.",
    "g.0.def": "Data that can be counted and takes only separate values, for example the number of brothers and sisters.",
    "g.1.def": "Data that can be measured and can take any value in a range, for example height or time.",
    "g.2.def": "Data that is in groups or names, for example colours or favourite sports.",
    "g.3.def": "Collecting data from every member of the whole population.",
    "g.4.def": "All the people or things you are interested in for an investigation.",
    "g.5.def": "A part of the population chosen to be surveyed.",
    "g.6.def": "A sample that reflects the characteristics of the population (it has boys, girls, different ages ...).",
    "g.7.def": "A way of choosing a sample or wording a question that pushes the results towards one side.",
    "g.8.def": "A prepared table for recording observed data or answers.",
    "s.6.1.learn": [
      "First, decide which data you need to collect and what type it is: discrete, continuous or categorical.",
      "There are many ways to collect it: self-completion questionnaires, face-to-face interviews, observing and recording on a sheet (counting vehicles, timing), or doing an experiment.",
      "A data collection sheet needs enough columns for every factor you want to compare (for example gender, age) and clear, unbiased questions.",
      "If you cannot ask everyone, take a sample; the sample must be representative of the population.",
      "Always give a reason why you chose that method."
    ],
    "ex.6.1.q": "The head teacher wants to know whether learners are happy with the length of break time. What data do you collect and how?",
    "ex.6.1.steps": [
      "Data: opinion (happy / not happy), plus year group and gender because opinions may differ.",
      "Sampling: choose a few boys and girls at random from each class.",
      "Method: a short interview or questionnaire; record in a table with columns for year group, gender and opinion."
    ],
    "ex.6.1.prompts": [
      "What is the head teacher interested in? What information do you need from each learner, and what other information might make opinions differ?",
      "You cannot ask the whole school. How do you choose a group of learners so the sample is not biased?",
      "How will you ask, and where will you record the answers so that they are easy to summarise later?"
    ],
    "ex.6.1.twist": "The head teacher allows you to survey 40 learners across 4 year groups, choosing the same number from each year. How many learners do you choose from each year?",
    "s.6.2.learn": [
      "The population is everything you are interested in (the whole class, the whole school, every car passing the gate ...).",
      "Random sample: every member has an equal chance of being chosen, which is less biased than 'the first 50 people'.",
      "If there are different groups (boys/girls, year groups), choose the number from each group in proportion to its size in the population.",
      "A larger sample is usually more accurate but takes more time and effort; a large sample that is chosen in a biased way is still wrong.",
      "Spread the sample over time (many hours, many days), not just one moment."
    ],
    "ex.6.2.q": "A school has 600 learners, of whom 240 are boys. A sample of 50 learners keeps the same proportion of boys and girls. How many boys are needed?",
    "ex.6.2.steps": [
      "Proportion of boys in the school: 240 ÷ 600 = 0.4",
      "Boys in the sample: 0.4 × 50 = 20",
      "The remaining 30 are girls."
    ],
    "ex.6.2.prompts": [
      "To keep the sample in proportion, first what fraction of the whole school are boys?",
      "Apply the same proportion to the sample of 50: how many boys is that?",
      "From the number of boys, which calculation gives the number of girls in the sample?"
    ],
    "ex.6.2.twist": "If the sample increases to 80 learners (still in proportion), how many boys are needed?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "The islanders will only trust your survey if you can choose a representative sample and spot a biased one.",
    "q.6.1-01.hints": [
      "The answer is a number. Is that number counted or measured?",
      "Could someone have 2.5 brothers and sisters?",
      "What is data that is counted and takes only whole numbers called?"
    ],
    "q.6.1-01.explain": "The number of brothers and sisters is a count 0, 1, 2, 3, ... so it is discrete data.",
    "q.6.1-02.hints": [
      "Is time counted or measured?",
      "Could a learner do homework for 47.5 minutes?",
      "What is data that is measured and can take values in a range called?"
    ],
    "q.6.1-02.explain": "Time is measured and can take any value in a range, so it is continuous data.",
    "q.6.1-03.hints": [
      "Could you ask someone to find out how a drawing pin lands?",
      "The most reliable way is to drop the pin many times. What is the result of each drop: a number or a 'direction'?",
      "What type of data is 'point up' or 'point down'?"
    ],
    "q.6.1-03.explain": "To find out how likely each outcome is, do an experiment many times and record it in a tally chart. The result 'point up / point down' is categorical data.",
    "q.6.1-04.hints": [
      "You want to count vehicles that actually pass. Ask other people or observe yourself?",
      "When observing, what is convenient to record with?",
      "What is a sheet with ready-made boxes to tally each vehicle called?"
    ],
    "q.6.1-04.explain": "Counting vehicles is observation: stand at the gate and record each vehicle on a data collection sheet (tally chart).",
    "q.6.1-05.hints": [
      "Which group does Ahmad want to compare with which group?",
      "To compare men and women, what information about each person must the sheet record?",
      "Which column is missing from the sheet?"
    ],
    "q.6.1-05.explain": "The question requires comparing men and women, so the sheet needs a gender column. Also it is better to give ready-made options (1, 2, 3 times a week ...) instead of an open answer.",
    "q.6.1-06.hints": [
      "Does a good question let people choose any opinion, or suggest the answer in advance?",
      "Words like 'everyone agrees', 'surely', 'terrible' lead the respondent in which direction?",
      "Which question gives all three neutral choices?"
    ],
    "q.6.1-06.explain": "The question 'too short, about right, or too long' gives all the choices and does not hint at an answer. The others are leading questions (biased). Common mistake: choosing a familiar-sounding question and forgetting that it suggests the answer.",
    "q.6.1-07.hints": [
      "Who usually goes to the cinema on a Saturday night? Are they the same as customers on a Tuesday morning?",
      "If you only ask on one special night, do the results reflect other days?",
      "A good sample should be spread across which factors (day, time, age)?"
    ],
    "q.6.1-07.explain": "Taking only one weekend night gives a sample biased towards people who often go to the cinema. You should ask on many different days and times, and across ages.",
    "q.6.1-08.hints": [
      "How many cars were observed altogether?",
      "How many carried only one person?",
      "Write the fraction 9/20 and convert it to a percentage."
    ],
    "q.6.1-08.explain": "9 ÷ 20 = 0.45 = 45%.",
    "q.6.1-09.hints": [
      "Total number of people in the cars: multiply each number of people by the number of cars, then add.",
      "Total people = 9 + 12 + 9 + 8 = ? And the total number of cars?",
      "Divide the total number of people by the total number of cars."
    ],
    "q.6.1-09.explain": "Total people = 1×9 + 2×6 + 3×3 + 4×2 = 38. Mean = 38 ÷ 20 = 1.9 people per car.",
    "q.6.1-10.hints": [
      "'Hard to read' is a feeling. Which numbers could measure it (sentence length, word length)?",
      "If you take only the first page of one book and the last page of the other, is that fair?",
      "To compare fairly, how big must the two samples be and how should they be chosen?"
    ],
    "q.6.1-10.explain": "Use objective measures (words per sentence, letters per word), random samples of the same size from both books, then compare means. The other methods do not measure difficulty or are not fair.",
    "q.6.2-01.hints": [
      "The population is the group whose opinions you want to know, not the group you actually ask.",
      "Who do you want to talk about: the 50 learners or all the learners in the school?",
      "Choose the largest group that your conclusion is aimed at."
    ],
    "q.6.2-01.explain": "The population is all the learners in the school; the 50 learners asked are only a sample.",
    "q.6.2-02.hints": [
      "Do you need to wait all day to get 50 people?",
      "Does this method need a list or a draw?",
      "So what is the main advantage?"
    ],
    "q.6.2-02.explain": "The first 50 customers are very quick and easy to get, but they are not necessarily representative.",
    "q.6.2-03.hints": [
      "Who is usually there as soon as the shop opens?",
      "Are they like the people who come in the evening?",
      "So does the sample represent all customers?"
    ],
    "q.6.2-03.explain": "Early customers may differ from afternoon customers (age, job, needs), so the sample may be biased.",
    "q.6.2-04.hints": [
      "If men and women have different opinions, should the sample leave out one group?",
      "How many of each group should be in the sample, based on what?",
      "Within each group, should people be chosen deliberately or at random?"
    ],
    "q.6.2-04.explain": "For a representative sample, take both groups in their real proportions and choose at random within each group.",
    "q.6.2-05.hints": [
      "What fraction of the whole school is Year 8? Write it as a fraction.",
      "Simplify 180/450.",
      "Multiply that fraction by the sample size 30."
    ],
    "q.6.2-05.explain": "180 ÷ 450 = 2/5. Year 8 learners in the sample = 2/5 × 30 = 12.",
    "q.6.2-06.hints": [
      "To take 10 papers evenly from 250, how many papers are in each 'group'?",
      "Which calculation gives the number of papers in each group?",
      "What is 250 divided by 10?"
    ],
    "q.6.2-06.explain": "250 ÷ 10 = 25, so take every 25th paper (starting from a random position between 1 and 25).",
    "q.6.2-07.hints": [
      "Who usually leaves a football stadium? Which sport do they like most?",
      "Can a large sample made up of only one kind of person represent everyone?",
      "So which matters more, the sample size or how the sample is chosen?"
    ],
    "q.6.2-07.explain": "A large sample does not cure bias: people at a football match usually like football. Common mistake: thinking 'the bigger the sample the more correct'.",
    "q.6.2-08.hints": [
      "What time of day is 08:00 on the road? Who is in the cars then?",
      "To reflect the whole day, when should you observe?",
      "Choose the way that spreads the sample evenly over time."
    ],
    "q.6.2-08.explain": "The morning rush hour has many commuters driving alone, so the sample is biased. Observing at several times and on several days is more representative.",
    "q.6.2-09.hints": [
      "The two ask the same question, but do they ask the same 50 parents?",
      "What if one asks at a primary school gate and the other at a secondary school gate?",
      "What makes two different samples lead to different results?"
    ],
    "q.6.2-09.explain": "Different samples (people, places, times) often give different results. That is why you must choose the sample carefully and consider using a larger one.",
    "q.6.2-10.hints": [
      "What fraction of the whole class are boys? Write it as a fraction and simplify.",
      "What does 15/36 simplify to?",
      "Multiply that fraction by 12."
    ],
    "q.6.2-10.explain": "15 ÷ 36 = 5/12. Boys in the sample = 5/12 × 12 = 5 (and 7 girls).",
    "q.ch-01.q": "A school has 900 learners. To find the favourite sports of the whole school, which way of choosing a sample of 50 learners is the most representative?",
    "q.ch-01.choices": [
      "Ask the 50 learners in the football team",
      "Choose at random from the list of the whole school, with the number from each year and each gender in the correct proportion",
      "Ask the 50 learners who arrive at school earliest",
      "Ask your 50 closest friends"
    ],
    "q.ch-01.hints": [
      "A good sample must resemble the population in which characteristics (year, gender)?",
      "The football team, early arrivals, close friends: which of these are special groups?",
      "Which method is both random and keeps the correct proportions?"
    ],
    "q.ch-01.explain": "Random selection split by year group and gender gives a sample that resembles the whole school. The other three take only one special group so they are biased.",
    "q.ch-02.q": "A group of learners wants to know what percentage of learners support private tutoring, so they hand out questionnaires right at the gate of a tutoring centre. Which comment is correct?",
    "q.ch-02.choices": [
      "The sample is biased because most people there already attend tutoring, so it is hard to represent the whole school",
      "The sample is good because many learners were asked",
      "The sample is good because everyone has the right to answer",
      "The sample is biased because the questionnaire is too short"
    ],
    "q.ch-02.hints": [
      "Who is usually in front of a tutoring centre?",
      "What do they think about tutoring compared with learners who do not attend?",
      "What do we call a sample made up only of a group with the same point of view?"
    ],
    "q.ch-02.explain": "Most people at the centre gate already attend tutoring so they tend to support it; the sample is biased and does not represent the whole school.",
    "q.ch-03.q": "A school has 1200 learners: Year 6 has 350, Year 7 has 300, Year 8 has 280, Year 9 has 270. A sample of 60 learners is chosen in proportion to the number of learners in each year. How many Year 7 learners are in the sample?",
    "q.ch-03.hints": [
      "What fraction of the whole school is Year 7?",
      "What does 300/1200 simplify to?",
      "Multiply that fraction by the sample size 60."
    ],
    "q.ch-03.explain": "300 ÷ 1200 = 1/4; 1/4 × 60 = 15 Year 7 learners.",
    "q.ch-04.q": "To ask for opinions about canteen meals, which question is NOT biased?",
    "q.ch-04.choices": [
      "Do you agree that the canteen rice is very tasty?",
      "How is the canteen food: good, average or poor?",
      "Clearly the canteen needs a new cook, doesn't it?",
      "Do you like the delicious rice at our canteen?"
    ],
    "q.ch-04.hints": [
      "Biased questions often include praising or criticising words. Which question has such words?",
      "Which question gives the respondent a full range of choices from positive to negative?",
      "Choose the question with neutral options."
    ],
    "q.ch-04.explain": "The question 'good, average or poor' gives all the choices and does not hint. The other three suggest an answer so they are biased.",
    "q.ch-05.q": "Class 7A surveys the number of siblings of 10 randomly chosen learners: 0, 1, 2, 1, 1, 3, 2, 0, 1, 2. Work out the mean number of siblings per learner.",
    "q.ch-05.hints": [
      "Add all 10 values.",
      "The total is 13. How many learners are there?",
      "Divide the total by the number of learners."
    ],
    "q.ch-05.explain": "0 + 1 + 2 + 1 + 1 + 3 + 2 + 0 + 1 + 2 = 13; 13 ÷ 10 = 1.3.",
    "q.ch-06.q": "You want to find the heights of the learners in your class. What type of data is it and how should you collect it?",
    "q.ch-06.choices": [
      "Continuous data; measure directly and record in a table",
      "Discrete data; just ask out loud for fun",
      "Categorical data; count cars passing the gate",
      "Categorical data; make a questionnaire about colours"
    ],
    "q.ch-06.hints": [
      "Is height a count or a measurement?",
      "Could a height be 152.4 cm?",
      "How should measured data be collected to be accurate?"
    ],
    "q.ch-06.explain": "Height is continuous data (a measurement), so it must be measured directly with a ruler and recorded in a table.",
    "q.ch-07.q": "Group A surveys 40 random learners and finds that 62% like Maths. Group B surveys 40 other random learners and finds 48%. Which conclusion is the most reasonable?",
    "q.ch-07.choices": [
      "The two samples are different so the results differ; take a larger sample or combine the samples to get a better estimate",
      "Group A definitely calculated wrongly",
      "Group B definitely calculated wrongly",
      "It is impossible to survey learners' opinions"
    ],
    "q.ch-07.hints": [
      "Did the two groups ask the same 40 learners?",
      "Each time you choose at random, can the results be exactly the same?",
      "How can you get a more reliable estimate?"
    ],
    "q.ch-07.explain": "Results from different random samples usually vary. Increasing the sample size or combining the data gives a more stable estimate.",
    "q.ch-08.q": "A school has 840 learners. You want to choose a sample equal to 5% of all learners. How many learners are in the sample?",
    "q.ch-08.hints": [
      "Which fraction equals 5%?",
      "5% = 5/100 = 1/20. Take 1/20 of 840.",
      "What is 840 divided by 20?"
    ],
    "q.ch-08.explain": "5% of 840 = 840 × 0.05 = 42 learners.",
    "q.ch-09.q": "Binh counts the motorbikes passing the school gate from 7:00 to 7:15 to conclude that 'most vehicles passing the gate are motorbikes'. What is the biggest weakness and a reasonable improvement?",
    "q.ch-09.choices": [
      "It is the rush hour for dropping off learners so it is not representative; count at many time slots and on many days",
      "Counting from exactly 7:00 to 7:30 is enough",
      "Just count the cars",
      "There is no weakness, because it is a direct count"
    ],
    "q.ch-09.hints": [
      "What is special about 7 a.m. in front of a school gate?",
      "Is the traffic then like at noon or in the evening?",
      "How can the observation reflect the whole day?"
    ],
    "q.ch-09.explain": "The 7:00 slot is rush hour so the result is biased. Observing at many time slots and on many days is more representative.",
    "q.ch-10.q": "A school hands out 150 questionnaires and gets 120 back, of which 78 answer 'agree'. What percentage of the returned questionnaires say 'agree'?",
    "q.ch-10.hints": [
      "Should you compare 78 with which number of questionnaires: 150 or 120?",
      "Write the fraction 78/120.",
      "Convert it to a percentage."
    ],
    "q.ch-10.explain": "Calculated on the returned questionnaires: 78 ÷ 120 = 0.65 = 65%. (People who did not return it may have different opinions, so this result still risks being biased.)"
  },
  vi: {
    "q.6.2-06.howto": "«Cứ k bài lấy một» nghĩa là cô lấy một bài, rồi lấy bài cách đó k vị trí trong chồng bài, cứ thế tiếp tục. Tìm k để lấy được đúng 10 trong 250 bài và nhập k.",
    "q.6.1-01.q": "Các thành viên trong lớp em có bao nhiêu anh chị em? Đây là loại dữ liệu gì?",
    "q.6.1-01.choices": ["Rời rạc", "Liên tục", "Phân loại"],
    "q.6.1-02.q": "Mỗi tối học sinh dành bao lâu để làm bài tập? Đây là loại dữ liệu gì?",
    "q.6.1-02.choices": ["Rời rạc", "Liên tục", "Phân loại"],
    "q.6.1-03.q": "Khi thả một chiếc đinh ghim, nó dễ rơi mũi lên hay mũi xuống hơn? Phương pháp và loại dữ liệu nào là tốt nhất?",
    "q.6.1-03.choices": [
      "Làm thí nghiệm: thả nhiều lần và ghi bảng đếm kết quả; dữ liệu phân loại",
      "Phát phiếu hỏi; dữ liệu liên tục",
      "Phỏng vấn mọi người; dữ liệu rời rạc",
      "Quan sát xe ô tô bên ngoài; dữ liệu liên tục"
    ],
    "q.6.1-04.q": "Em muốn biết có bao nhiêu phương tiện đi qua cổng trường từ 08:00 đến 08:15. Phương pháp nào tốt nhất?",
    "q.6.1-04.choices": [
      "Quan sát và ghi từng phương tiện vào phiếu thu thập dữ liệu",
      "Gửi phiếu hỏi đến tất cả phụ huynh",
      "Phỏng vấn thầy hiệu trưởng",
      "Tổng điều tra cả thị trấn"
    ],
    "q.6.1-05.q": "Ahmad muốn biết nam và nữ ở phòng tập của anh ấy có thói quen khác nhau không và khung giờ nào đông nhất. Phiếu thu thập dữ liệu của anh ấy có các cột: Tên | Bạn đến phòng tập bao lâu một lần? | Bạn thích buổi sáng hay buổi tối? Vấn đề chính là gì?",
    "q.6.1-05.choices": [
      "Không có cột giới tính nên anh ấy không thể so sánh nam và nữ",
      "Có quá nhiều cột",
      "Phiếu chỉ hỏi về khung giờ trong ngày",
      "Phiếu nên hỏi địa chỉ của mọi người"
    ],
    "q.6.1-06.q": "Một trường muốn biết học sinh có nghĩ giờ nghỉ trưa quá ngắn không. Câu hỏi nào tốt nhất vì KHÔNG thiên lệch?",
    "q.6.1-06.choices": [
      "Ai cũng đồng ý giờ nghỉ trưa ngắn quá mức, đúng không?",
      "Giờ nghỉ trưa quá ngắn, vừa phải hay quá dài?",
      "Bạn có ghét giờ nghỉ trưa tệ hại của chúng ta không?",
      "Chắc chắn bạn muốn giờ nghỉ trưa dài hơn chứ?"
    ],
    "q.6.1-07.q": "Quản lý một rạp chiếu phim phát phiếu hỏi cho tất cả khách vào một tối thứ Bảy để biết mọi người đến rạp bao lâu một lần. Vì sao đây không phải cách chọn mẫu tốt?",
    "q.6.1-07.choices": [
      "Tối thứ Bảy không điển hình: những người đi vào lúc đó có lẽ là khách đến thường xuyên hơn, nên mẫu có thể không đại diện cho mọi khách hàng",
      "Mẫu quá lớn",
      "Không thể dùng phiếu hỏi trong rạp chiếu phim",
      "Bà ấy chỉ nên hỏi nhân viên"
    ],
    "q.6.1-08.q": "Sofia quan sát 20 chiếc ô tô trên một con đường đông đúc và ghi lại số người trong mỗi xe: 1 người trong 9 xe, 2 người trong 6 xe, 3 người trong 3 xe và 4 người trong 2 xe. Bao nhiêu phần trăm số xe chỉ chở một người?",
    "q.6.1-09.q": "Dùng số liệu của Sofia (1 người: 9 xe, 2 người: 6 xe, 3 người: 3 xe, 4 người: 2 xe), tìm số người trung bình trên mỗi xe.",
    "q.6.1-10.q": "Anders cho rằng sách X khó đọc hơn sách Y. Kế hoạch nào cho dữ liệu công bằng nhất để so sánh chúng?",
    "q.6.1-10.choices": [
      "Chọn ngẫu nhiên các trang từ mỗi cuốn, đếm số từ trên mỗi câu và số chữ cái trên mỗi từ ở các mẫu cùng cỡ, rồi so sánh các số trung bình",
      "Đọc trang đầu của X và trang cuối của Y rồi nói cuốn nào có cảm giác khó hơn",
      "Hỏi bạn bè xem cuốn nào có bìa đẹp nhất",
      "Đếm tổng số trang của mỗi cuốn"
    ],
    "q.6.2-01.q": "Em muốn tìm hiểu học sinh trong trường nghĩ gì về chính sách bài tập về nhà. Tổng thể là gì?",
    "q.6.2-01.choices": [
      "Tất cả học sinh trong trường của em",
      "50 học sinh em hỏi",
      "Chỉ các học sinh trong lớp em",
      "Các thầy cô giáo"
    ],
    "q.6.2-02.q": "Một quản lý chọn mẫu là 50 khách hàng đầu tiên sau khi cửa hàng mở cửa. Một ưu điểm của cách này là gì?",
    "q.6.2-02.choices": [
      "Nhanh và dễ",
      "Chắc chắn đại diện",
      "Có người ở mọi lứa tuổi",
      "Tránh được thiên lệch"
    ],
    "q.6.2-03.q": "Nhược điểm của việc chọn 50 khách hàng đầu tiên sau khi cửa hàng mở cửa là gì?",
    "q.6.2-03.choices": [
      "Họ có thể khác với khách hàng vào các thời điểm khác trong ngày, nên mẫu có thể thiên lệch",
      "Mất quá nhiều thời gian",
      "Tốn quá nhiều tiền",
      "Không có nhược điểm"
    ],
    "q.6.2-04.q": "Quản lý nghĩ rằng ý kiến của nam và nữ có thể khác nhau. Ông ấy nên chọn mẫu 50 khách hàng như thế nào?",
    "q.6.2-04.choices": [
      "Chọn nam và nữ theo tỉ lệ số lượng của họ trong số khách hàng, chọn ngẫu nhiên người trong mỗi nhóm",
      "Chỉ hỏi nam vì họ mua sắm nhiều hơn",
      "Hỏi 50 người đầu tiên, bất kể là ai",
      "Chỉ hỏi bạn bè của ông ấy"
    ],
    "q.6.2-05.q": "Một trường có 450 học sinh: 150 em lớp 7, 180 em lớp 8 và 120 em lớp 9. Một mẫu 30 học sinh được chọn theo tỉ lệ số học sinh mỗi khối. Có bao nhiêu học sinh lớp 8 trong mẫu?",
    "q.6.2-06.q": "Một giám khảo đã chấm 250 bài và muốn chấm lại một mẫu 10 bài. Cô ấy chọn cứ mỗi k bài một bài từ một chồng bài, bắt đầu từ một bài ngẫu nhiên. Giá trị k nào cho đúng 10 bài?",
    "q.6.2-07.q": "Một cuộc khảo sát hỏi 1000 người rời sân vận động bóng đá: 'Môn thể thao yêu thích của bạn là gì?' Người tổ chức nói cuộc khảo sát đáng tin cậy vì mẫu rất lớn. Có gì sai?",
    "q.6.2-07.choices": [
      "Người hâm mộ bóng đá không tiêu biểu cho toàn bộ dân số, nên mẫu thiên lệch dù lớn đến đâu",
      "Mẫu 1000 người luôn quá nhỏ",
      "Không nên hỏi người ở bên ngoài",
      "Không có gì sai"
    ],
    "q.6.2-08.q": "Zalika tìm hiểu có bao nhiêu người trong mỗi chiếc xe trên một con đường đông đúc. Cô ấy nói: 'Tôi sẽ bắt đầu từ 08:00 và quan sát 200 chiếc xe.' Cải tiến nào là tốt nhất?",
    "q.6.2-08.choices": [
      "Quan sát các nhóm xe nhỏ hơn vào nhiều thời điểm khác nhau trong ngày và vào các ngày khác nhau",
      "Quan sát 200 chiếc xe, tất cả vào giờ cao điểm buổi chiều",
      "Chỉ quan sát những xe chỉ có tài xế",
      "Chỉ quan sát 20 chiếc xe"
    ],
    "q.6.2-09.q": "Arun và Sofia mỗi người hỏi 50 phụ huynh: 'Lượng bài tập về nhà con bạn nhận được là quá ít, vừa phải hay quá nhiều?' Kết quả của họ khá khác nhau. Lý do có khả năng nhất là gì?",
    "q.6.2-09.choices": [
      "Họ chọn các mẫu khác nhau (phụ huynh, địa điểm hoặc thời gian khác nhau), nên kết quả khác nhau",
      "Cả hai cuộc khảo sát chắc chắn có lỗi tính toán",
      "Phụ huynh không bao giờ nói thật",
      "Tổng thể đã thay đổi trong lúc khảo sát"
    ],
    "q.6.2-10.q": "Lớp 8A có 36 học sinh: 15 nam và 21 nữ. Một giáo viên chọn mẫu 12 học sinh giữ nguyên tỉ lệ nam : nữ của lớp. Có bao nhiêu nam trong mẫu?"
  }
});
