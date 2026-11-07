window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 16,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "trung-binh-an",
    "lang": "vi",
    "q": "Năm số có trung bình cộng bằng 12. Thêm số thứ sáu vào thì trung bình cộng của sáu số là 13. Tìm số thứ sáu.",
    "svg": null,
    "choices": null,
    "answer": 18,
    "hints": [
      "Tổng của năm số đầu bằng trung bình nhân với số lượng bằng bao nhiêu?",
      "Tổng của sáu số bằng bao nhiêu?",
      "Số thứ sáu là hiệu của hai tổng đó."
    ],
    "explain": "Tổng năm số: 5 × 12 = 60. Tổng sáu số: 6 × 13 = 78. Số thứ sáu: 78 − 60 = 18.",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "bang-hai-chieu",
    "lang": "vi",
    "q": "Một lớp có 40 học sinh, trong đó 24 bạn nam. Có 18 bạn thích bóng đá, trong đó có 10 bạn nữ. Hỏi có bao nhiêu bạn nam thích bóng đá?",
    "svg": null,
    "choices": null,
    "answer": 8,
    "hints": [
      "Hãy vẽ bảng hai chiều: hàng là nam/nữ, cột là thích/không thích bóng đá. Điền các tổng đã biết.",
      "Số bạn thích bóng đá gồm nam và nữ; biết tổng và số nữ, tìm số nam.",
      "Kiểm tra số nữ: 40 − 24 = 16; nữ thích bóng đá 10 có hợp lí không?"
    ],
    "explain": "Số bạn thích bóng đá gồm nam và nữ: nam = 18 − 10 = 8. Kiểm tra bảng: nữ 40 − 24 = 16, nữ thích bóng đá 10 ≤ 16 ✓, nam thích 8 ≤ 24 ✓.",
    "why": null
  },
  {
    "id": "hsg-03", "howto": "Nhập số học sinh thuộc nhóm có góc ở tâm lớn thứ hai trong biểu đồ tròn.",
    "type": "num",
    "diff": 3,
    "skill": "bieu-do-tron-ti-le",
    "lang": "vi",
    "q": "Một biểu đồ tròn biểu diễn kết quả khảo sát 80 học sinh về môn thể thao yêu thích với bốn nhóm có số đo góc ở tâm theo tỉ lệ 1 : 2 : 3 : 4. Có bao nhiêu học sinh thuộc nhóm có góc ở tâm lớn thứ hai?",
    "svg": null,
    "choices": null,
    "answer": 24,
    "hints": [
      "Tổng các góc ở tâm của biểu đồ tròn bằng bao nhiêu độ? Mỗi phần của tỉ lệ ứng với bao nhiêu độ?",
      "Nhóm có góc lớn thứ hai ứng với mấy phần, tức bao nhiêu độ?",
      "Góc đó chiếm bao nhiêu phần của 360°? Lấy phần đó của 80."
    ],
    "explain": "Tổng 1 + 2 + 3 + 4 = 10 phần ứng với 360° nên mỗi phần 36°. Góc lớn thứ hai là 3 phần = 108°. Số học sinh: 108/360 × 80 = 24.",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "trung-binh-gop",
    "lang": "vi",
    "q": "Điểm trung bình môn Toán của lớp A (20 học sinh) là 7,0 và của lớp B (30 học sinh) là 8,0. Khi gộp thêm lớp C (50 học sinh), điểm trung bình của cả ba lớp (100 học sinh) là 8,2. Tìm điểm trung bình của lớp C.",
    "svg": null,
    "choices": null,
    "answer": 8.8,
    "hints": [
      "Tổng điểm của lớp A và của lớp B là bao nhiêu (trung bình × sĩ số)?",
      "Tổng điểm của cả 100 học sinh là bao nhiêu?",
      "Tổng điểm lớp C bằng hiệu; chia cho sĩ số lớp C."
    ],
    "explain": "Tổng điểm lớp A: 20 × 7 = 140; lớp B: 30 × 8 = 240. Tổng cả ba lớp: 100 × 8,2 = 820. Tổng điểm lớp C: 820 − 140 − 240 = 440. Trung bình lớp C: 440 : 50 = 8,8.",
    "tol": 0.01,
    "why": null
  },
  {
    "id": "hsg-05", "howto": "Tìm hai số b và d trong dãy năm số, rồi nhập tổng b + d.",
    "type": "num",
    "diff": 3,
    "skill": "thong-ke-du-lieu-an",
    "lang": "vi",
    "q": "Năm số nguyên được sắp xếp tăng dần a ≤ b ≤ c ≤ d ≤ e có trung bình cộng 10, trung vị 9, số nhỏ nhất a = 6 và khoảng biến thiên (số lớn nhất trừ số nhỏ nhất) bằng 8. Tính b + d.",
    "svg": null,
    "choices": null,
    "answer": 21,
    "hints": [
      "Trung vị của năm số sắp xếp là số nào? Khoảng biến thiên cho biết e bằng bao nhiêu?",
      "Tổng năm số bằng trung bình nhân 5 là bao nhiêu?",
      "Lấy tổng trừ a, c và e để ra b + d."
    ],
    "explain": "Trung vị c = 9; e = a + 8 = 14. Tổng năm số = 5 × 10 = 50. Do đó b + d = 50 − 6 − 9 − 14 = 21. (Ví dụ: 6, 8, 9, 13, 14 thỏa mãn.)",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "so-sanh-bieu-do-tron",
    "lang": "vi",
    "q": "Biểu đồ tròn A (khảo sát 200 người) cho thấy 40% đi học bằng xe buýt. Biểu đồ tròn B (khảo sát 1000 người) cho thấy 30% đi học bằng xe buýt. Phát biểu nào đúng?",
    "svg": null,
    "choices": [
      "Khảo sát A có nhiều người đi xe buýt hơn vì 40% lớn hơn 30%",
      "Hai khảo sát có số người đi xe buýt bằng nhau",
      "Khảo sát B có nhiều người đi xe buýt hơn, dù tỉ lệ thấp hơn",
      "Không thể so sánh nếu không biết số người đi bộ"
    ],
    "answer": 2,
    "hints": [
      "Tính số người đi xe buýt trong mỗi khảo sát.",
      "Phần trăm lớn hơn có nghĩa là số người nhiều hơn không?",
      "Hãy so sánh số lượng thực tế."
    ],
    "explain": "A: 40% × 200 = 80 người. B: 30% × 1000 = 300 người. Dù tỉ lệ ở B thấp hơn, số người ở B nhiều hơn. Sai lầm: so sánh phần trăm mà bỏ qua tổng số khác nhau của hai biểu đồ.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "anh-huong-trung-binh",
    "lang": "vi",
    "q": "Một tập dữ liệu có trung bình cộng bằng 8. Người ta thêm vào tập một giá trị mới bằng đúng 8. Phát biểu nào luôn đúng?",
    "svg": null,
    "choices": [
      "Trung bình cộng vẫn bằng 8",
      "Trung vị vẫn bằng 8",
      "Khoảng biến thiên tăng lên",
      "Mốt trở thành 8"
    ],
    "answer": 0,
    "hints": [
      "Tổng mới và số lượng mới thay đổi thế nào? Viết trung bình mới.",
      "Thử với tập 1, 2, 21 (trung bình 8): trung vị trước và sau khi thêm số 8 là bao nhiêu?",
      "Khoảng biến thiên có thể thay đổi không khi thêm giá trị nằm giữa giá trị nhỏ nhất và lớn nhất?"
    ],
    "explain": "Gọi tổng cũ là 8n. Sau khi thêm 8: tổng 8n + 8 = 8(n + 1), số lượng n + 1 nên trung bình vẫn 8. Các phát biểu khác không luôn đúng: với tập 1, 2, 21 (trung bình 8) trung vị là 2, thêm 8 thì trung vị thành 5; khoảng biến thiên không đổi vì 8 nằm giữa giá trị nhỏ nhất và lớn nhất; mốt không nhất thiết là 8.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "phan-tram-hai-chieu",
    "lang": "vi",
    "q": "Khảo sát 200 học sinh: 60% đi học bằng xe đạp. Trong nhóm đi xe đạp có 25% là nữ. Trong cả 200 học sinh có 45% là nữ. Hỏi trong nhóm không đi xe đạp có bao nhiêu phần trăm là nữ?",
    "svg": null,
    "choices": null,
    "answer": 75,
    "hints": [
      "Có bao nhiêu học sinh đi xe đạp, bao nhiêu học sinh không đi xe đạp?",
      "Có bao nhiêu nữ đi xe đạp? Tổng số nữ là bao nhiêu? Từ đó suy ra số nữ không đi xe đạp.",
      "Số nữ không đi xe đạp chiếm bao nhiêu phần trăm nhóm không đi xe đạp?"
    ],
    "explain": "Đi xe đạp: 120 học sinh, nữ đi xe đạp: 25% × 120 = 30. Tổng nữ: 45% × 200 = 90. Nữ không đi xe đạp: 90 − 30 = 60, trong nhóm 200 − 120 = 80 học sinh. Tỉ lệ: 60/80 = 75%.",
    "unitLabel": "%",
    "why": {
      "q": "Vì sao không thể tính bằng cách lấy 45% − 25% = 20%?",
      "choices": [
        "Vì các phần trăm được lấy trên các nhóm khác nhau (cả khối, nhóm đi xe đạp, nhóm không đi xe đạp) nên không trừ trực tiếp được",
        "Vì 45 − 25 không bằng 20",
        "Vì không bao giờ được trừ các phần trăm",
        "Vì nữ không thể đi xe đạp"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-05.howto": "Find the numbers b and d in the list of five numbers, then enter the sum b + d.",
    "q.hsg-03.howto": "Enter the number of students in the group with the second largest angle in the pie chart.",
  "q.hsg-01.q": "Five numbers have a mean of 12. A sixth number is added and the mean of the six numbers is 13. Find the sixth number.",
  "q.hsg-01.hints": [
    "The total of the first five numbers equals the mean times how many?",
    "What is the total of the six numbers?",
    "The sixth number is the difference between those two totals."
  ],
  "q.hsg-01.explain": "Total of five numbers: 5 × 12 = 60. Total of six numbers: 6 × 13 = 78. Sixth number: 78 − 60 = 18.",
  "q.hsg-02.q": "A class has 40 students, of whom 24 are boys. 18 students like football, and 10 of them are girls. How many boys like football?",
  "q.hsg-02.hints": [
    "Draw a two-way table: rows boys/girls, columns likes/doesn't like football. Fill in the totals you know.",
    "Those who like football are boys and girls; given the total and the number of girls, find the number of boys.",
    "Check: girls are 40 − 24 = 16; is 10 girls liking football possible?"
  ],
  "q.hsg-02.explain": "Students who like football are boys and girls: boys = 18 − 10 = 8. Check the table: girls 40 − 24 = 16, girls liking football 10 ≤ 16 ✓, boys liking football 8 ≤ 24 ✓.",
  "q.hsg-03.q": "A pie chart shows a survey of 80 students about their favourite sport, with four groups whose sector angles are in the ratio 1 : 2 : 3 : 4. How many students are in the group with the second largest angle?",
  "q.hsg-03.hints": [
    "How many degrees are there in total in a pie chart? How many degrees does each part of the ratio represent?",
    "How many parts, so how many degrees, does the second largest sector have?",
    "What fraction of 360° is that angle? Take that fraction of 80."
  ],
  "q.hsg-03.explain": "1 + 2 + 3 + 4 = 10 parts represent 360°, so each part is 36°. The second largest angle is 3 parts = 108°. Number of students: 108/360 × 80 = 24.",
  "q.hsg-04.q": "The mean maths mark of class A (20 students) is 7.0 and of class B (30 students) is 8.0. When class C (50 students) is added, the mean mark of all three classes (100 students) is 8.2. Find the mean mark of class C.",
  "q.hsg-04.hints": [
    "What is the total mark of class A and of class B (mean × number of students)?",
    "What is the total mark of all 100 students?",
    "The total for class C is the difference; divide by the number of students in class C."
  ],
  "q.hsg-04.explain": "Total of class A: 20 × 7 = 140; class B: 30 × 8 = 240. Total of all three classes: 100 × 8.2 = 820. Total of class C: 820 − 140 − 240 = 440. Mean of class C: 440 ÷ 50 = 8.8.",
  "q.hsg-05.q": "Five integers in increasing order a ≤ b ≤ c ≤ d ≤ e have mean 10, median 9, smallest value a = 6 and range (largest minus smallest) 8. Work out b + d.",
  "q.hsg-05.hints": [
    "Which of the five ordered numbers is the median? What does the range tell you about e?",
    "What is the total of the five numbers (mean times 5)?",
    "Subtract a, c and e from the total to get b + d."
  ],
  "q.hsg-05.explain": "The median is c = 9; e = a + 8 = 14. The total is 5 × 10 = 50. So b + d = 50 − 6 − 9 − 14 = 21. (For example 6, 8, 9, 13, 14 works.)",
  "q.hsg-06.q": "Pie chart A (a survey of 200 people) shows that 40% travel to school by bus. Pie chart B (a survey of 1000 people) shows that 30% travel by bus. Which statement is true?",
  "q.hsg-06.hints": [
    "Work out the number of bus users in each survey.",
    "Does a bigger percentage always mean more people?",
    "Compare the actual numbers."
  ],
  "q.hsg-06.explain": "A: 40% × 200 = 80 people. B: 30% × 1000 = 300 people. Although B's percentage is lower, B has more people. Mistake: comparing percentages while ignoring that the two totals are different.",
  "q.hsg-06.choices": [
    "More people in survey A travel by bus, because 40% is greater than 30%",
    "The same number of people travel by bus in both surveys",
    "More people in survey B travel by bus, even though its percentage is lower",
    "Nothing can be said without knowing the number of people who walk"
  ],
  "q.hsg-07.q": "A data set has mean 8. A new value exactly equal to 8 is added to the set. Which statement is always true?",
  "q.hsg-07.hints": [
    "How do the new total and the new number of values change? Write the new mean.",
    "Try the set 1, 2, 21 (mean 8): what is the median before and after adding an 8?",
    "Can the range change when you add a value between the smallest and largest?"
  ],
  "q.hsg-07.explain": "Let the old total be 8n. After adding 8: total 8n + 8 = 8(n + 1) and n + 1 values, so the mean is still 8. The others are not always true: for 1, 2, 21 (mean 8) the median is 2 and after adding 8 it becomes 5; the range does not change because 8 lies between the smallest and largest values; the mode need not be 8.",
  "q.hsg-07.choices": [
    "The mean is still 8",
    "The median is still 8",
    "The range gets bigger",
    "The mode becomes 8"
  ],
  "q.hsg-08.q": "In a survey of 200 students, 60% travel to school by bicycle. Of the cyclists, 25% are girls. Of all 200 students, 45% are girls. What percentage of the students who do not cycle are girls?",
  "q.hsg-08.hints": [
    "How many students cycle and how many do not?",
    "How many girls cycle? What is the total number of girls? Use these to find the girls who do not cycle.",
    "What percentage of the non-cycling group is that number?"
  ],
  "q.hsg-08.explain": "Cyclists: 120 students, girl cyclists: 25% × 120 = 30. All girls: 45% × 200 = 90. Girls who do not cycle: 90 − 30 = 60, out of 200 − 120 = 80 students. Percentage: 60/80 = 75%.",
  "q.hsg-08.why.q": "Why can't we find the answer by doing 45% − 25% = 20%?",
  "q.hsg-08.why.choices": [
    "Because the percentages are taken of different groups (all students, cyclists, non-cyclists), so they cannot be subtracted directly",
    "Because 45 − 25 is not 20",
    "Because percentages can never be subtracted",
    "Because girls cannot be cyclists"
  ]
}, vi: {} }
});
