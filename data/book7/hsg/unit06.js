window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 6,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-mean-remove",
    "source": "hsg",
    "lang": "vi",
    "q": "Trung bình cộng của 5 số là 14. Nếu bỏ đi số lớn nhất thì trung bình cộng của 4 số còn lại là 11. Tìm số lớn nhất.",
    "svg": null,
    "choices": null,
    "answer": 26,
    "hints": [
      "Tổng của 5 số bằng bao nhiêu?",
      "Tổng của 4 số còn lại bằng bao nhiêu?",
      "Số bị bỏ đi bằng hiệu của hai tổng đó."
    ],
    "explain": "Tổng 5 số: 5 × 14 = 70. Tổng 4 số còn lại: 4 × 11 = 44. Số lớn nhất là 70 − 44 = 26."
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-capture-recapture",
    "source": "hsg",
    "lang": "vi",
    "q": "Để ước lượng số cá trong một hồ, người ta bắt 60 con, đánh dấu rồi thả lại. Ít hôm sau bắt ngẫu nhiên 75 con thì thấy 9 con có dấu. Hãy ước lượng số cá trong hồ.",
    "svg": null,
    "choices": null,
    "answer": 500,
    "hints": [
      "Trong mẫu 75 con, tỉ lệ cá có dấu là bao nhiêu?",
      "Nếu mẫu đại diện cho cả hồ, tỉ lệ cá có dấu trong cả hồ cũng bằng tỉ lệ đó. Có tất cả 60 con có dấu.",
      "Lập tỉ lệ 60 : N = 9 : 75 rồi tìm N."
    ],
    "explain": "Tỉ lệ cá có dấu trong mẫu là 9/75. Giả sử cả hồ có cùng tỉ lệ này thì 60/N = 9/75, suy ra N = 60 × 75 : 9 = 500. Ước lượng hồ có khoảng 500 con cá."
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-combined-mean",
    "source": "hsg",
    "lang": "vi",
    "q": "Lớp 7A có 36 học sinh với điểm trung bình môn Toán là 6,5. Cả hai lớp 7A và 7B gồm 60 học sinh có điểm trung bình 7,1. Tính điểm trung bình của lớp 7B.",
    "svg": null,
    "choices": null,
    "answer": 8,
    "tol": 0.001,
    "hints": [
      "Lớp 7B có bao nhiêu học sinh?",
      "Tổng điểm của cả hai lớp và tổng điểm lớp 7A lần lượt là bao nhiêu?",
      "Tổng điểm lớp 7B chia cho số học sinh lớp 7B."
    ],
    "explain": "Lớp 7B có 60 − 36 = 24 học sinh. Tổng điểm hai lớp: 60 × 7,1 = 426. Tổng điểm lớp 7A: 36 × 6,5 = 234. Tổng điểm lớp 7B: 426 − 234 = 192. Điểm trung bình 7B: 192 : 24 = 8."
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-mean-new-value",
    "source": "hsg",
    "lang": "vi",
    "q": "Mười bài kiểm tra có điểm trung bình 7,4. Sau khi thêm bài kiểm tra thứ 11 thì điểm trung bình tăng lên 7,6. Tính điểm của bài thứ 11.",
    "svg": null,
    "choices": null,
    "answer": 9.6,
    "tol": 0.001,
    "hints": [
      "Tổng điểm của 10 bài đầu là bao nhiêu?",
      "Tổng điểm của 11 bài sau khi thêm là bao nhiêu?",
      "Điểm bài thứ 11 bằng hiệu hai tổng đó."
    ],
    "explain": "Tổng 10 bài: 10 × 7,4 = 74. Tổng 11 bài: 11 × 7,6 = 83,6. Điểm bài thứ 11 là 83,6 − 74 = 9,6."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-mean-median-mode",
    "source": "hsg",
    "lang": "vi",
    "q": "Năm số nguyên dương có trung bình cộng bằng 8, trung vị bằng 8 và mốt duy nhất bằng 10. Tìm số nhỏ nhất trong năm số đó.",
    "svg": null,
    "choices": null,
    "answer": 5,
    "hints": [
      "Sắp xếp năm số tăng dần: a ≤ b ≤ c ≤ d ≤ e. Trung vị cho biết giá trị của số nào?",
      "Mốt duy nhất là 10 nghĩa là 10 xuất hiện nhiều lần nhất. Vị trí nào chứa số 10?",
      "Dùng tổng bằng 40 để tìm a + b, rồi loại các trường hợp làm xuất hiện mốt thứ hai."
    ],
    "explain": "Sắp xếp a ≤ b ≤ c ≤ d ≤ e có c = 8 (trung vị). Mốt là 10 phải xuất hiện ít nhất 2 lần và c = 8 nên d = e = 10. Tổng = 5 × 8 = 40 nên a + b = 40 − 8 − 20 = 12 với a ≤ b ≤ 8. Các khả năng: (4; 8) làm 8 xuất hiện 2 lần (hai mốt), (6; 6) làm 6 xuất hiện 2 lần (hai mốt), còn (5; 7) hợp lệ. Dãy 5, 7, 8, 10, 10. Số nhỏ nhất là 5."
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-sampling",
    "source": "hsg",
    "lang": "vi",
    "q": "Một trường có 600 học sinh. Cô giáo muốn biết \"trung bình mỗi bạn ngủ mấy giờ\" nên hỏi 30 bạn ngồi bàn đầu (5% số học sinh) rồi kết luận: \"Mẫu này đại diện vì 5% là đủ lớn.\" Nhận xét nào đúng nhất?",
    "svg": null,
    "choices": [
      "Đại diện, vì 5% luôn đủ lớn với mọi trường",
      "Không đại diện, vì mẫu 30 bạn quá lớn",
      "Chưa chắc đại diện: cách chọn không ngẫu nhiên nên có thể thiên lệch, tỉ lệ 5% không sửa được điều đó",
      "Đại diện, vì các bạn bàn đầu học giỏi nên trả lời đáng tin"
    ],
    "answer": 2,
    "hints": [
      "Những bạn ngồi bàn đầu có thể có đặc điểm chung nào ảnh hưởng đến giờ ngủ?",
      "Mỗi học sinh trong trường có cơ hội được chọn như nhau không?",
      "Tỉ lệ 5% có khắc phục được việc chọn mẫu thiên lệch không?"
    ],
    "explain": "Chất lượng mẫu phụ thuộc vào CÁCH CHỌN (ngẫu nhiên, mỗi bạn có cơ hội như nhau), không chỉ phụ thuộc vào kích thước. Những bạn ngồi bàn đầu có thể thấp hơn, chăm hơn hoặc ngủ đủ giấc hơn nên mẫu có thể thiên lệch. Mẫu 5% chọn không ngẫu nhiên vẫn có thể sai lệch."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-mean-must-be-true",
    "source": "hsg",
    "lang": "vi",
    "q": "Trung bình cộng của 7 số thực là 9. Khẳng định nào CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
      "Cả 7 số đều dương",
      "Trung vị bằng 9",
      "Có ít nhất một số bằng 9",
      "Có ít nhất một số không nhỏ hơn 9"
    ],
    "answer": 3,
    "hints": [
      "Hãy lập ví dụ: 7 số có TBC bằng 9 nhưng một số bằng 0 hoặc âm. Điều đó có xảy ra không?",
      "Nếu cả 7 số đều nhỏ hơn 9 thì TBC có thể bằng 9 không?",
      "Trung vị và mốt có nhất thiết bằng TBC không? Thử dãy 1, 1, 1, 1, 1, 1, 57."
    ],
    "explain": "Nếu cả 7 số đều nhỏ hơn 9 thì tổng nhỏ hơn 63, TBC nhỏ hơn 9: mâu thuẫn. Vậy có ít nhất một số không nhỏ hơn 9. Các đáp án khác sai: dãy 1, 1, 1, 1, 1, 1, 57 có TBC 9 nhưng trung vị là 1 và không số nào bằng 9; dãy −3, 0, 12, 12, 12, 12, 18 có TBC 9 nhưng có số không dương."
  },
  {
    "id": "hsg-08", "howto": "Dù 25 bạn sinh vào những tháng nào, luôn có một tháng có từ một số bạn trở lên cùng sinh. Tìm số bạn lớn nhất mà em chắc chắn được điều đó và nhập số đó.",
    "type": "num",
    "diff": 3,
    "skill": "hsg-pigeonhole-months",
    "source": "hsg",
    "lang": "vi",
    "q": "Trong một nhóm 25 học sinh bất kì, chắc chắn có ít nhất bao nhiêu bạn sinh cùng một tháng (trong năm)?",
    "svg": null,
    "choices": null,
    "answer": 3,
    "hints": [
      "Có bao nhiêu \"ngăn\" (tháng) để xếp học sinh vào?",
      "Nếu mỗi tháng chỉ có tối đa 2 bạn thì nhiều nhất xếp được bao nhiêu bạn?",
      "25 có vượt quá con số đó không? Từ đó suy ra điều gì?"
    ],
    "explain": "Có 12 tháng. Nếu mỗi tháng có tối đa 2 bạn thì chỉ có tối đa 12 × 2 = 24 bạn, mà có 25 bạn nên phải có một tháng có ít nhất 3 bạn (nguyên lý Dirichlet). Vậy chắc chắn có ít nhất 3 bạn cùng tháng sinh (có thể có đúng 3 nên không thể khẳng định 4).",
    "why": {
      "q": "Vì sao không thể khẳng định chắc chắn có 4 bạn cùng tháng sinh?",
      "choices": [
        "Vì có thể xếp 25 bạn sao cho mỗi tháng có nhiều nhất 3 bạn (ví dụ 1 tháng có 3 bạn, 11 tháng còn lại 2 bạn)",
        "Vì 25 không chia hết cho 12",
        "Vì tháng 2 có ít ngày hơn các tháng khác",
        "Vì một tháng có thể có 0 bạn"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-08.howto": "However the 25 birthdays are spread over the year, some month always has at least a certain number of pupils. Find the biggest number you can be sure of and enter it.",
  "q.hsg-01.q": "The mean of 5 numbers is 14. If the largest number is removed, the mean of the remaining 4 numbers is 11. Find the largest number.",
  "q.hsg-01.hints": [
    "What is the total of the 5 numbers?",
    "What is the total of the remaining 4 numbers?",
    "The removed number is the difference of those two totals."
  ],
  "q.hsg-01.explain": "Total of 5 numbers: 5 × 14 = 70. Total of the remaining 4: 4 × 11 = 44. The largest number is 70 − 44 = 26.",
  "q.hsg-02.q": "To estimate the number of fish in a lake, 60 fish are caught, marked and released. A few days later 75 fish are caught at random and 9 of them are marked. Estimate the number of fish in the lake.",
  "q.hsg-02.hints": [
    "In the sample of 75, what fraction of the fish are marked?",
    "If the sample represents the whole lake, the fraction of marked fish in the lake is the same. There are 60 marked fish in total.",
    "Set up the proportion 60 : N = 9 : 75 and find N."
  ],
  "q.hsg-02.explain": "The fraction of marked fish in the sample is 9/75. Assuming the whole lake has the same fraction, 60/N = 9/75, so N = 60 × 75 ÷ 9 = 500. The lake has about 500 fish.",
  "q.hsg-03.q": "Class 7A has 36 students with a mean Maths score of 6.5. The two classes 7A and 7B together have 60 students with a mean of 7.1. Find the mean score of class 7B.",
  "q.hsg-03.hints": [
    "How many students are in class 7B?",
    "What are the total scores of both classes together and of class 7A?",
    "Divide the total score of 7B by the number of students in 7B."
  ],
  "q.hsg-03.explain": "Class 7B has 60 − 36 = 24 students. Total score of both classes: 60 × 7.1 = 426. Total of 7A: 36 × 6.5 = 234. Total of 7B: 426 − 234 = 192. Mean of 7B: 192 ÷ 24 = 8.",
  "q.hsg-04.q": "Ten tests have a mean score of 7.4. After an 11th test is added, the mean rises to 7.6. Find the score of the 11th test.",
  "q.hsg-04.hints": [
    "What is the total score of the first 10 tests?",
    "What is the total score of all 11 tests?",
    "The 11th score is the difference of those totals."
  ],
  "q.hsg-04.explain": "Total of 10 tests: 10 × 7.4 = 74. Total of 11 tests: 11 × 7.6 = 83.6. The 11th score is 83.6 − 74 = 9.6.",
  "q.hsg-05.q": "Five positive integers have mean 8, median 8 and a single (unique) mode 10. Find the smallest of the five numbers.",
  "q.hsg-05.hints": [
    "Order the numbers a ≤ b ≤ c ≤ d ≤ e. Which number does the median tell you?",
    "A unique mode of 10 means 10 appears most often. Which positions hold the 10s?",
    "Use total 40 to find a + b, then reject the cases that create a second mode."
  ],
  "q.hsg-05.explain": "Order a ≤ b ≤ c ≤ d ≤ e with c = 8 (median). The mode 10 must appear at least twice and c = 8, so d = e = 10. The total is 5 × 8 = 40, so a + b = 40 − 8 − 20 = 12 with a ≤ b ≤ 8. Options: (4, 8) makes 8 appear twice (two modes), (6, 6) makes 6 appear twice (two modes), while (5, 7) is valid. The list is 5, 7, 8, 10, 10. The smallest is 5.",
  "q.hsg-06.q": "A school has 600 students. A teacher wants to know \"how many hours a student sleeps on average\", so she asks the 30 students sitting at the front desks (5% of the students) and concludes: \"This sample is representative because 5% is large enough.\" Which comment is best?",
  "q.hsg-06.hints": [
    "What might students at the front desks have in common that affects their sleeping hours?",
    "Does every student in the school have an equal chance of being chosen?",
    "Can a percentage like 5% fix a biased way of choosing the sample?"
  ],
  "q.hsg-06.explain": "The quality of a sample depends on HOW it is chosen (randomly, each student having an equal chance), not only its size. Students at the front may be shorter, more diligent or better rested, so the sample may be biased. A 5% sample chosen non-randomly can still be misleading.",
  "q.hsg-06.choices": [
    "Representative, because 5% is always large enough in any school",
    "Not representative, because a sample of 30 is too big",
    "Not necessarily representative: the selection is not random so it may be biased, and 5% does not fix that",
    "Representative, because front-desk students are good at school so their answers are reliable"
  ],
  "q.hsg-07.q": "The mean of 7 real numbers is 9. Which statement is CERTAINLY true?",
  "q.hsg-07.hints": [
    "Make an example: 7 numbers with mean 9 where one number is 0 or negative. Is it possible?",
    "If all 7 numbers were less than 9, could the mean be 9?",
    "Must the median and mode equal the mean? Try the list 1, 1, 1, 1, 1, 1, 57."
  ],
  "q.hsg-07.explain": "If all 7 numbers were less than 9, the total would be less than 63 and the mean less than 9: contradiction. So at least one number is not less than 9. The others fail: the list 1, 1, 1, 1, 1, 1, 57 has mean 9 but median 1 and no number equal to 9; the list −3, 0, 12, 12, 12, 12, 18 has mean 9 but contains non-positive numbers.",
  "q.hsg-07.choices": [
    "All 7 numbers are positive",
    "The median is 9",
    "At least one number equals 9",
    "At least one number is not less than 9"
  ],
  "q.hsg-08.q": "In any group of 25 students, what is the largest number n such that at least n of them are certain to have been born in the same month?",
  "q.hsg-08.hints": [
    "How many \"boxes\" (months) are there to put the students in?",
    "If each month had at most 2 students, how many students could be placed at most?",
    "Does 25 exceed that number? What follows?"
  ],
  "q.hsg-08.explain": "There are 12 months. If every month had at most 2 students there would be at most 12 × 2 = 24 students, but there are 25, so some month has at least 3 (pigeonhole principle). So at least 3 share a birth month (it can be exactly 3, so 4 cannot be guaranteed).",
  "q.hsg-08.why.q": "Why can't we be sure that 4 students share a birth month?",
  "q.hsg-08.why.choices": [
    "Because 25 students can be arranged with at most 3 in any month (for example 3 in one month and 2 in each of the other 11)",
    "Because 25 is not divisible by 12",
    "Because February has fewer days than the other months",
    "Because a month might have 0 students"
  ]
}, vi: {} }
});
