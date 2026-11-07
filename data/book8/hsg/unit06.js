window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 6,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hidden-data-mean",
    "source": "hsg",
    "lang": "vi",
    "q": "Trung bình cộng của 5 số là 8. Nếu bỏ số lớn nhất thì trung bình cộng của 4 số còn lại là 7; nếu bỏ số nhỏ nhất thì trung bình cộng của 4 số còn lại là 8,5. Tìm hiệu giữa số lớn nhất và số nhỏ nhất.",
    "svg": null,
    "choices": null,
    "answer": 6,
    "hints": [
      "Tổng của 5 số là bao nhiêu? Tổng của 4 số còn lại sau khi bỏ số lớn nhất là bao nhiêu?",
      "Từ hai tổng đó, tìm số lớn nhất. Làm tương tự để tìm số nhỏ nhất.",
      "Trừ hai số vừa tìm."
    ],
    "explain": "Tổng 5 số: 5 × 8 = 40. Bỏ số lớn nhất, 4 số còn lại có tổng 4 × 7 = 28, nên số lớn nhất = 40 − 28 = 12. Bỏ số nhỏ nhất, 4 số còn lại có tổng 4 × 8,5 = 34, nên số nhỏ nhất = 40 − 34 = 6. Hiệu: 12 − 6 = 6.",
    "why": null
  },
  {
    "id": "hsg-02", "howto": "Xét mọi bộ bảy số thỏa mãn các điều kiện. Tìm giá trị lớn nhất mà số lớn nhất trong bộ có thể đạt được và nhập giá trị đó.",
    "type": "num",
    "diff": 3,
    "skill": "extreme-value-median",
    "source": "hsg",
    "lang": "vi",
    "q": "Bảy số nguyên dương đôi một khác nhau có trung bình cộng bằng 10 và trung vị bằng 12. Số lớn nhất trong bảy số có thể nhận giá trị lớn nhất là bao nhiêu?",
    "svg": null,
    "choices": null,
    "answer": 25,
    "hints": [
      "Tổng bảy số là bao nhiêu? Sắp xếp theo thứ tự tăng dần a₁ < a₂ < … < a₇: số nào bằng 12?",
      "Để a₇ lớn nhất thì sáu số còn lại phải nhỏ nhất có thể. Ba số nhỏ hơn 12 nhỏ nhất là gì?",
      "Hai số lớn hơn 12 (nhưng không phải số lớn nhất) nhỏ nhất là gì? Trừ tất cả khỏi tổng."
    ],
    "explain": "Tổng bảy số = 7 × 10 = 70. Trung vị a₄ = 12. Để a₇ lớn nhất, các số còn lại phải nhỏ nhất: a₁, a₂, a₃ = 1, 2, 3; a₅ = 13, a₆ = 14 (các số khác nhau và lớn hơn 12). Tổng sáu số này: 1 + 2 + 3 + 12 + 13 + 14 = 45. Vậy a₇ = 70 − 45 = 25 (lớn hơn 14 nên hợp lệ).",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "combined-mean",
    "source": "hsg",
    "lang": "vi",
    "q": "Lớp 7A có 36 học sinh với điểm trung bình môn Toán là 7,5. Lớp 7B có 24 học sinh. Điểm trung bình môn Toán của cả hai lớp gộp lại là 7,2. Tìm điểm trung bình của lớp 7B.",
    "svg": null,
    "choices": null,
    "answer": 6.75,
    "hints": [
      "Tổng điểm của lớp 7A là bao nhiêu?",
      "Tổng điểm của cả 60 học sinh là bao nhiêu?",
      "Lấy tổng chung trừ tổng của 7A rồi chia cho số học sinh 7B."
    ],
    "explain": "Tổng điểm 7A: 36 × 7,5 = 270. Tổng điểm cả hai lớp: 60 × 7,2 = 432. Tổng điểm 7B: 432 − 270 = 162. Điểm trung bình 7B: 162 ÷ 24 = 6,75.",
    "why": null
  },
  {
    "id": "hsg-04", "howto": "Dù 38 bạn sinh vào những tháng nào, luôn có một tháng có ít nhất k bạn cùng sinh. Tìm số k lớn nhất mà em chắc chắn được điều đó và nhập k.",
    "type": "num",
    "diff": 3,
    "skill": "pigeonhole",
    "source": "hsg",
    "lang": "vi",
    "q": "Trong một trường có 38 học sinh cùng lớp. Theo nguyên lý Dirichlet, số k lớn nhất sao cho chắc chắn có ít nhất k học sinh sinh trong cùng một tháng (của năm dương lịch) là bao nhiêu?",
    "svg": null,
    "choices": null,
    "answer": 4,
    "hints": [
      "Có bao nhiêu «chuồng» (tháng) và bao nhiêu «thỏ» (học sinh)?",
      "Nếu mỗi tháng có nhiều nhất 3 học sinh thì tổng cộng nhiều nhất là bao nhiêu học sinh?",
      "So sánh với 38 để suy ra điều chắc chắn xảy ra."
    ],
    "explain": "Nếu mỗi tháng có nhiều nhất 3 học sinh thì cả lớp có nhiều nhất 12 × 3 = 36 học sinh, mâu thuẫn với 38. Vậy có ít nhất một tháng có không ít hơn 4 học sinh. Có thể xếp 38 = 12 × 3 + 2 để chỉ đúng 4 ở hai tháng, nên không thể chắc chắn 5. Vậy k = 4.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "capture-recapture",
    "source": "hsg",
    "lang": "vi",
    "q": "Để ước lượng số cá trong một hồ, người ta bắt 60 con, đánh dấu rồi thả lại. Vài ngày sau bắt ngẫu nhiên 45 con thì có 6 con có dấu. Ước lượng số cá trong hồ, giả sử tỉ lệ cá có dấu trong mẫu bằng tỉ lệ trong cả hồ.",
    "svg": null,
    "choices": null,
    "answer": 450,
    "hints": [
      "Trong mẫu 45 con, tỉ lệ cá có dấu là bao nhiêu?",
      "Trong cả hồ, 60 con có dấu chiếm cùng tỉ lệ đó. Viết phương trình với N là tổng số cá.",
      "Giải phương trình 60 ÷ N = tỉ lệ vừa tìm."
    ],
    "explain": "Tỉ lệ cá có dấu trong mẫu: 6 ÷ 45 = 2/15. Giả sử cả hồ cũng có tỉ lệ đó: 60 ÷ N = 2/15 ⇒ N = 60 × 15 ÷ 2 = 450. Vậy ước lượng hồ có khoảng 450 con cá.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "mean-vs-median",
    "source": "hsg",
    "lang": "vi",
    "q": "Một tập dữ liệu gồm 5 số dương. Người ta thay số lớn nhất bằng một số lớn gấp 10 lần nó. Khẳng định nào chắc chắn đúng?",
    "svg": null,
    "choices": [
      "Cả trung bình cộng và trung vị đều tăng.",
      "Trung vị không đổi, trung bình cộng tăng.",
      "Trung bình cộng không đổi, trung vị tăng.",
      "Cả trung bình cộng và trung vị đều không đổi."
    ],
    "answer": 1,
    "hints": [
      "Trung vị của 5 số là số đứng ở vị trí nào khi sắp xếp? Số lớn nhất có phải số đó không?",
      "Tổng các số thay đổi thế nào khi một số tăng lên? Trung bình cộng thay đổi thế nào?",
      "Thử với dữ liệu 1, 2, 3, 4, 5 rồi thay 5 bằng 50."
    ],
    "explain": "Với 1, 2, 3, 4, 5: trung vị 3, trung bình 3. Thay 5 bằng 50: dữ liệu 1, 2, 3, 4, 50 có trung vị vẫn 3 (số ở giữa không đổi), trung bình = 60 ÷ 5 = 12 tăng. Tổng quát: số lớn nhất không phải số ở giữa nên trung vị giữ nguyên, còn tổng tăng nên trung bình tăng. Đây là lý do trung vị «bền» hơn trung bình khi có giá trị ngoại lai.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "mean-of-means",
    "source": "hsg",
    "lang": "vi",
    "q": "Trong lớp, điểm trung bình của nhóm nam là 7,0 và của nhóm nữ là 6,0. Nam kết luận: «Điểm trung bình của cả lớp là (7,0 + 6,0) ÷ 2 = 6,5». Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Nam đúng, vì trung bình của hai trung bình luôn là trung bình chung.",
      "Nam chỉ đúng khi số bạn nam bằng số bạn nữ; nói chung trung bình cả lớp nằm giữa 6,0 và 7,0 và gần nhóm đông hơn.",
      "Nam sai, vì trung bình cả lớp phải bằng trung vị của hai nhóm.",
      "Nam sai, vì trung bình cả lớp luôn lớn hơn 7,0."
    ],
    "answer": 1,
    "hints": [
      "Giả sử lớp có 30 nam và 10 nữ. Tính tổng điểm và trung bình cả lớp.",
      "Giả sử lớp có 10 nam và 30 nữ. Trung bình cả lớp là bao nhiêu?",
      "Khi nào trung bình chung bằng đúng 6,5?"
    ],
    "explain": "Với 30 nam và 10 nữ: (30 × 7 + 10 × 6) ÷ 40 = 270 ÷ 40 = 6,75. Với 10 nam và 30 nữ: (70 + 180) ÷ 40 = 6,25. Trung bình chung là trung bình có trọng số theo sĩ số, chỉ bằng 6,5 khi hai nhóm đông bằng nhau. Sai lầm của Nam: bỏ qua số lượng của từng nhóm.",
    "why": null
  },
  {
    "id": "hsg-08", "howto": "Xét mọi bộ năm số thỏa mãn các điều kiện. Tìm giá trị lớn nhất mà số lớn nhất trong bộ có thể đạt được và nhập giá trị đó.",
    "type": "num",
    "diff": 3,
    "skill": "mode-unique",
    "source": "hsg",
    "lang": "vi",
    "q": "Năm số nguyên dương có trung bình cộng bằng 6, trung vị bằng 5 và chỉ có duy nhất một mốt là 5. Số lớn nhất trong năm số đó có thể bằng bao nhiêu nhiều nhất?",
    "svg": null,
    "choices": null,
    "answer": 17,
    "hints": [
      "Tổng năm số là bao nhiêu? Sắp xếp a ≤ b ≤ c ≤ d ≤ e, số nào bằng 5? Mốt là 5 đòi hỏi số 5 xuất hiện ít nhất mấy lần?",
      "Để e lớn nhất, bốn số còn lại phải nhỏ nhất. Nếu a = b = 1 thì điều gì xảy ra với mốt?",
      "Chọn a, b khác nhau nhỏ nhất, tính tổng bốn số rồi tìm e."
    ],
    "explain": "Tổng năm số = 5 × 6 = 30; trung vị c = 5. Mốt duy nhất là 5 nên 5 xuất hiện ít nhất 2 lần: d = 5 (vì c = 5 và d ≥ c). Hai số a ≤ b < 5 phải khác nhau (nếu a = b thì số đó cũng xuất hiện 2 lần, mốt không duy nhất): nhỏ nhất a = 1, b = 2. Khi đó e = 30 − (1 + 2 + 5 + 5) = 17. Dữ liệu 1, 2, 5, 5, 17 thỏa mọi điều kiện.",
    "why": {
      "q": "Vì sao không thể chọn a = b = 1 khi muốn số lớn nhất e đạt giá trị lớn nhất?",
      "choices": [
        "Vì khi đó 1 và 5 cùng xuất hiện 2 lần, nên có hai mốt, trái với giả thiết chỉ có duy nhất một mốt.",
        "Vì khi đó trung vị không còn bằng 5.",
        "Vì khi đó trung bình cộng không còn bằng 6.",
        "Vì 1 không phải là số nguyên dương."
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-08.howto": "Think about every set of five numbers that fits the conditions. Find the biggest value the largest number can reach and enter it.",
    "q.hsg-04.howto": "However the 38 birthdays are spread, some month always has at least k pupils. Find the biggest k you can be sure of and enter k.",
    "q.hsg-02.howto": "Think about every set of seven numbers that fits the conditions. Find the biggest value the largest number can reach and enter it.",
  "q.hsg-01.q": "The mean of 5 numbers is 8. If the largest number is removed, the mean of the other 4 is 7; if the smallest number is removed, the mean of the other 4 is 8.5. Find the difference between the largest and the smallest number.",
  "q.hsg-01.hints": [
    "What is the total of the 5 numbers? What is the total of the other 4 after removing the largest?",
    "From those two totals, find the largest number. Do the same to find the smallest.",
    "Subtract the two numbers you found."
  ],
  "q.hsg-01.explain": "Total of 5 numbers: 5 × 8 = 40. Without the largest, the other 4 total 4 × 7 = 28, so the largest = 40 − 28 = 12. Without the smallest, the other 4 total 4 × 8.5 = 34, so the smallest = 40 − 34 = 6. Difference: 12 − 6 = 6.",
  "q.hsg-02.q": "Seven distinct positive integers have mean 10 and median 12. What is the greatest possible value of the largest of the seven numbers?",
  "q.hsg-02.hints": [
    "What is the total of the seven numbers? Arrange them a₁ < a₂ < … < a₇: which one equals 12?",
    "To make a₇ as large as possible the other six must be as small as possible. What are the three smallest numbers below 12?",
    "What are the two smallest numbers above 12 (other than the largest)? Subtract everything from the total."
  ],
  "q.hsg-02.explain": "The total is 7 × 10 = 70. The median a₄ = 12. To make a₇ largest, the others must be smallest: a₁, a₂, a₃ = 1, 2, 3; a₅ = 13, a₆ = 14 (distinct and bigger than 12). These six total 1 + 2 + 3 + 12 + 13 + 14 = 45. So a₇ = 70 − 45 = 25 (which is greater than 14, so it is valid).",
  "q.hsg-03.q": "Class 7A has 36 students with a mean maths mark of 7.5. Class 7B has 24 students. The mean maths mark of both classes together is 7.2. Find the mean mark of class 7B.",
  "q.hsg-03.hints": [
    "What is the total of the marks in class 7A?",
    "What is the total of the marks of all 60 students?",
    "Subtract the 7A total from the overall total, then divide by the number of students in 7B."
  ],
  "q.hsg-03.explain": "Total for 7A: 36 × 7.5 = 270. Total for both classes: 60 × 7.2 = 432. Total for 7B: 432 − 270 = 162. Mean for 7B: 162 ÷ 24 = 6.75.",
  "q.hsg-04.q": "There are 38 students in one class. By the pigeonhole principle, what is the largest k such that at least k students are certain to have birthdays in the same calendar month?",
  "q.hsg-04.hints": [
    "How many \"boxes\" (months) and how many \"pigeons\" (students) are there?",
    "If every month had at most 3 students, what is the greatest total number of students?",
    "Compare this with 38 to see what must happen."
  ],
  "q.hsg-04.explain": "If every month had at most 3 students, the class would have at most 12 × 3 = 36 students, contradicting 38. So some month has at least 4 students. We can arrange 38 = 12 × 3 + 2 so that only two months have 4, so 5 is not guaranteed. So k = 4.",
  "q.hsg-05.q": "To estimate the number of fish in a lake, 60 fish are caught, marked and released. A few days later 45 fish are caught at random and 6 of them are marked. Estimate the number of fish in the lake, assuming the proportion of marked fish in the sample equals the proportion in the whole lake.",
  "q.hsg-05.hints": [
    "In the sample of 45, what fraction of fish are marked?",
    "In the whole lake, the 60 marked fish make up the same fraction. Write an equation with N as the total number of fish.",
    "Solve 60 ÷ N = the fraction you found."
  ],
  "q.hsg-05.explain": "Fraction of marked fish in the sample: 6 ÷ 45 = 2/15. Assuming the same fraction for the whole lake: 60 ÷ N = 2/15 ⇒ N = 60 × 15 ÷ 2 = 450. So the lake has about 450 fish.",
  "q.hsg-06.q": "A data set has 5 positive numbers. The largest number is replaced by a number 10 times as large. Which statement is certainly true?",
  "q.hsg-06.choices": [
    "Both the mean and the median increase.",
    "The median stays the same and the mean increases.",
    "The mean stays the same and the median increases.",
    "Neither the mean nor the median changes."
  ],
  "q.hsg-06.hints": [
    "When 5 numbers are in order, which position is the median? Is the largest number that one?",
    "How does the total change when one number increases? How does the mean change?",
    "Try the data 1, 2, 3, 4, 5, then replace 5 by 50."
  ],
  "q.hsg-06.explain": "For 1, 2, 3, 4, 5: median 3, mean 3. Replace 5 by 50: the data 1, 2, 3, 4, 50 still has median 3 (the middle value is unchanged), and the mean = 60 ÷ 5 = 12 increases. In general the largest number is not the middle one so the median stays, while the total increases so the mean increases. This is why the median is more \"resistant\" to outliers than the mean.",
  "q.hsg-07.q": "In a class, the mean mark of the boys is 7.0 and of the girls is 6.0. Nam concludes: \"The mean mark of the whole class is (7.0 + 6.0) ÷ 2 = 6.5\". Which comment is correct?",
  "q.hsg-07.choices": [
    "Nam is right, because the mean of two means is always the overall mean.",
    "Nam is only right when there are equal numbers of boys and girls; in general the class mean lies between 6.0 and 7.0 and is closer to the larger group.",
    "Nam is wrong, because the class mean must equal the median of the two groups.",
    "Nam is wrong, because the class mean is always greater than 7.0."
  ],
  "q.hsg-07.hints": [
    "Suppose there are 30 boys and 10 girls. Work out the total marks and the class mean.",
    "Suppose there are 10 boys and 30 girls. What is the class mean?",
    "When is the overall mean exactly 6.5?"
  ],
  "q.hsg-07.explain": "With 30 boys and 10 girls: (30 × 7 + 10 × 6) ÷ 40 = 270 ÷ 40 = 6.75. With 10 boys and 30 girls: (70 + 180) ÷ 40 = 6.25. The overall mean is a weighted mean by group size and equals 6.5 only when the groups are the same size. Nam's mistake: ignoring the size of each group.",
  "q.hsg-08.q": "Five positive integers have mean 6, median 5 and a single (unique) mode 5. What is the greatest possible value of the largest of the five numbers?",
  "q.hsg-08.hints": [
    "What is the total of the five numbers? Arrange a ≤ b ≤ c ≤ d ≤ e: which one equals 5? The mode being 5 requires 5 to appear at least how many times?",
    "To make e largest, the other four must be smallest. If a = b = 1, what happens to the mode?",
    "Choose the smallest distinct a, b, find the total of the four numbers, then find e."
  ],
  "q.hsg-08.explain": "The total is 5 × 6 = 30; the median is c = 5. The unique mode is 5, so 5 appears at least twice: d = 5 (since c = 5 and d ≥ c). The two numbers a ≤ b < 5 must be different (if a = b that value would also appear twice and the mode would not be unique): smallest a = 1, b = 2. Then e = 30 − (1 + 2 + 5 + 5) = 17. The data 1, 2, 5, 5, 17 meets every condition.",
  "q.hsg-08.why.q": "Why can we not choose a = b = 1 when we want the largest number e to be as big as possible?",
  "q.hsg-08.why.choices": [
    "Because then both 1 and 5 appear twice, giving two modes, which contradicts a single mode.",
    "Because then the median is no longer 5.",
    "Because then the mean is no longer 6.",
    "Because 1 is not a positive integer."
  ]
}, vi: {} }
});
