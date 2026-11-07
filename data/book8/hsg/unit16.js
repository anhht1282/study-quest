window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 16,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Lớp 8A có 20 học sinh với điểm trung bình môn Toán là 7,5. Lớp 8B có 30 học sinh với điểm trung bình là 8,0. Tính điểm trung bình của cả 50 học sinh hai lớp.",
    "svg": null,
    "choices": null,
    "answer": 7.8,
    "hints": [
     "Tổng điểm của lớp 8A bằng bao nhiêu? (số học sinh × điểm trung bình)",
     "Tổng điểm của lớp 8B? Tổng điểm của cả hai lớp?",
     "Chia tổng điểm cho tổng số học sinh."
    ],
    "explain": "Tổng điểm 8A: 20 × 7,5 = 150. Tổng điểm 8B: 30 × 8 = 240. Trung bình chung: (150 + 240) : 50 = 390 : 50 = 7,8. (Không phải (7,5 + 8) : 2 = 7,75.)",
    "tol": 0.01
   },
   {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Năm số nguyên dương có: trung vị bằng 6, trung bình cộng bằng 7, mốt (giá trị xuất hiện nhiều nhất, duy nhất) bằng 3 và khoảng biến thiên (số lớn nhất trừ số nhỏ nhất) bằng 9. Tìm số lớn nhất trong năm số đó.",
    "svg": null,
    "choices": null,
    "answer": 12,
    "hints": [
     "Sắp xếp năm số a ≤ b ≤ c ≤ d ≤ e. Số nào bằng 6? Mốt bằng 3 cho biết điều gì về các số nhỏ?",
     "Tổng của năm số bằng bao nhiêu? Khoảng biến thiên 9 cho quan hệ nào giữa e và a?",
     "Khi a = b = 3, c = 6, hãy dùng tổng và khoảng biến thiên để tìm d và e."
    ],
    "explain": "Trung vị: c = 6. Tổng = 5 × 7 = 35. Mốt 3 duy nhất và các số lớn hơn 3 nên a = b = 3 (3 phải xuất hiện ít nhất hai lần). Khoảng biến thiên: e = 3 + 9 = 12. Khi đó d = 35 − 3 − 3 − 6 − 12 = 11 ≤ 12. Số lớn nhất là 12. (Vét cạn xác nhận đây là nghiệm duy nhất.)",
    "tol": 0
   },
   {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Trung bình cộng của 10 số là 15. Bỏ đi hai số 24 và 10 thì trung bình cộng của 8 số còn lại là bao nhiêu?",
    "svg": null,
    "choices": null,
    "answer": 14.5,
    "hints": [
     "Tổng của 10 số ban đầu bằng bao nhiêu?",
     "Sau khi bỏ hai số, tổng còn lại là bao nhiêu?",
     "Chia tổng còn lại cho 8."
    ],
    "explain": "Tổng 10 số = 10 × 15 = 150. Bỏ 24 và 10 còn 150 − 34 = 116. Trung bình = 116 : 8 = 14,5.",
    "tol": 0.01
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Biểu đồ tròn biểu diễn môn thể thao yêu thích của một số học sinh: bóng đá chiếm góc 108°, bóng rổ chiếm góc 72°, phần còn lại là bơi lội và quần vợt với tỉ lệ 3 : 2. Biết có 36 học sinh chọn bơi lội. Có bao nhiêu học sinh chọn quần vợt?",
    "svg": null,
    "choices": null,
    "answer": 24,
    "hints": [
     "Hai môn bơi lội và quần vợt cùng chiếm tổng góc bao nhiêu độ?",
     "Chia góc đó theo tỉ lệ 3 : 2. Góc của bơi lội là bao nhiêu? Mỗi độ ứng với bao nhiêu học sinh?",
     "Nhân góc của quần vợt với số học sinh trên mỗi độ."
    ],
    "explain": "Góc còn lại: 360° − 108° − 72° = 180°. Chia 3 : 2: bơi lội 108°, quần vợt 72°. 108° ứng với 36 học sinh nên 1° ứng với 1/3 học sinh. Quần vợt: 72 × 1/3 = 24 học sinh.",
    "tol": 0,
    "unitLabel": "học sinh"
   },
   {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Bốn số nguyên dương có trung bình cộng bằng 10, trung vị bằng 9 và mốt (duy nhất) bằng 8. Tìm số lớn nhất trong bốn số.",
    "svg": null,
    "choices": null,
    "answer": 14,
    "hints": [
     "Sắp xếp a ≤ b ≤ c ≤ d. Trung vị 9 cho quan hệ nào giữa b và c?",
     "Mốt bằng 8 nghĩa là 8 xuất hiện ít nhất mấy lần? Chúng nằm ở vị trí nào?",
     "Dùng tổng 40 để tìm số còn lại."
    ],
    "explain": "Tổng = 40, b + c = 18. Mốt 8 xuất hiện ít nhất hai lần. Nếu c = 8 thì b = 10 > c, vô lý; nên c ≥ 9 và hai số 8 phải là a và b, suy ra c = 10. Khi đó d = 40 − 8 − 8 − 10 = 14. Số lớn nhất là 14.",
    "tol": 0
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Bạn Dũng tính: \"Nhóm A có 10 bạn, điểm trung bình 7; nhóm B có 40 bạn, điểm trung bình 9. Điểm trung bình chung là (7 + 9) : 2 = 8\". Nhận xét nào đúng?",
    "svg": null,
    "choices": [
     "Bạn Dũng đúng",
     "Sai; trung bình chung là 8,6 vì nhóm B đông hơn",
     "Sai; trung bình chung là 7 vì nhóm A đứng trước",
     "Sai; trung bình chung là 9 vì nhóm B có điểm cao hơn"
    ],
    "answer": 1,
    "hints": [
     "Hai nhóm có số bạn như nhau không? Nhóm nào ảnh hưởng nhiều hơn tới trung bình chung?",
     "Hãy tính tổng điểm của từng nhóm.",
     "Trung bình chung = tổng điểm : tổng số bạn."
    ],
    "explain": "Phải tính trung bình có trọng số: (10 × 7 + 40 × 9) : 50 = 430 : 50 = 8,6. Kết quả của Dũng chỉ đúng khi hai nhóm có số bạn bằng nhau."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Một tập dữ liệu có trung bình cộng m và khoảng biến thiên R. Nhân mỗi số liệu với 3 rồi trừ đi 2. Khẳng định nào đúng với tập dữ liệu mới?",
    "svg": null,
    "choices": [
     "Trung bình là 3m − 2 và khoảng biến thiên là 3R",
     "Trung bình là 3m − 2 và khoảng biến thiên là 3R − 2",
     "Trung bình là 3m và khoảng biến thiên là 3R − 2",
     "Trung bình là m + 1 và khoảng biến thiên là R"
    ],
    "answer": 0,
    "hints": [
     "Thử với bộ số 1, 2, 3: nhân 3 rồi trừ 2 được bộ nào? Tính trung bình và khoảng biến thiên.",
     "Phép trừ 2 ảnh hưởng thế nào tới hiệu giữa số lớn nhất và nhỏ nhất?",
     "Còn phép nhân 3?"
    ],
    "explain": "Với 1, 2, 3 → 1, 4, 7: trung bình 4 = 3·2 − 2, khoảng biến thiên 6 = 3·2. Tổng quát: trung bình mới 3m − 2; khoảng biến thiên mới 3R (phép trừ 2 không đổi hiệu hai số)."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-statistics",
    "source": "hsg",
    "lang": "vi",
    "q": "Lương tháng (triệu đồng) của 9 nhân viên một công ty: 8 người nhận 10 triệu và giám đốc nhận 100 triệu. Số đo nào mô tả tốt nhất mức lương \"điển hình\" của nhân viên?",
    "svg": null,
    "choices": [
     "Trung bình cộng",
     "Trung vị",
     "Khoảng biến thiên",
     "Tổng lương"
    ],
    "answer": 1,
    "hints": [
     "Tính trung bình cộng của 9 mức lương. Nó có gần mức lương của đa số người không?",
     "Trung vị của 9 mức lương (sắp xếp từ thấp đến cao) là số thứ mấy và bằng bao nhiêu?",
     "Giá trị 100 ảnh hưởng tới số đo nào nhiều nhất?"
    ],
    "explain": "Trung bình = (8 × 10 + 100) : 9 = 20 triệu — cao gấp đôi mức lương của 8/9 nhân viên vì bị kéo lên bởi giá trị ngoại lai 100. Trung vị và mốt đều bằng 10 triệu, phản ánh mức lương điển hình.",
    "why": {
     "q": "Vì sao đáp án đó phù hợp?",
     "choices": [
      "Vì trung vị không bị ảnh hưởng nhiều bởi giá trị ngoại lai",
      "Vì trung bình cộng luôn là số đo tốt nhất",
      "Vì khoảng biến thiên cho biết mức lương phổ biến",
      "Vì tổng lương càng lớn thì càng điển hình"
     ],
     "answer": 0
    }
   }
  ]
 },
 "tr": {
  "en": {
   "q.hsg-01.q": "Class 8A has 20 students with a mean maths score of 7.5. Class 8B has 30 students with a mean of 8.0. Find the mean score of all 50 students in the two classes.",
   "q.hsg-01.hints": [
    "What is the total score of class 8A? (number of students × mean)",
    "The total score of class 8B? Of both classes together?",
    "Divide the total score by the total number of students."
   ],
   "q.hsg-01.explain": "Total score of 8A: 20 × 7.5 = 150. Total score of 8B: 30 × 8 = 240. Combined mean: (150 + 240) ÷ 50 = 390 ÷ 50 = 7.8. (Not (7.5 + 8) ÷ 2 = 7.75.)",
   "q.hsg-02.q": "Five positive integers have median 6, mean 7, a single mode (the most frequent value) of 3, and range (largest minus smallest) 9. Find the largest of the five numbers.",
   "q.hsg-02.hints": [
    "Order the numbers a ≤ b ≤ c ≤ d ≤ e. Which one equals 6? What does a mode of 3 tell you about the small numbers?",
    "What is the sum of the five numbers? What relation between e and a does the range 9 give?",
    "With a = b = 3, c = 6, use the sum and the range to find d and e."
   ],
   "q.hsg-02.explain": "Median: c = 6. Sum = 5 × 7 = 35. The single mode is 3 and the other values are not smaller, so a = b = 3 (3 must appear at least twice). Range: e = 3 + 9 = 12. Then d = 35 − 3 − 3 − 6 − 12 = 11 ≤ 12. The largest is 12. (An exhaustive check confirms the solution is unique.)",
   "q.hsg-03.q": "The mean of 10 numbers is 15. After removing the two numbers 24 and 10, what is the mean of the remaining 8 numbers?",
   "q.hsg-03.hints": [
    "What is the sum of the original 10 numbers?",
    "After removing the two numbers, what is the remaining sum?",
    "Divide the remaining sum by 8."
   ],
   "q.hsg-03.explain": "Sum of 10 numbers = 10 × 15 = 150. Removing 24 and 10 leaves 150 − 34 = 116. Mean = 116 ÷ 8 = 14.5.",
   "q.hsg-04.q": "A pie chart shows the favourite sports of some students: football has an angle of 108°, basketball 72°, and the rest is swimming and tennis in the ratio 3 : 2. 36 students chose swimming. How many chose tennis?",
   "q.hsg-04.hints": [
    "What total angle do swimming and tennis share?",
    "Share that angle in the ratio 3 : 2. What is the angle for swimming? How many students does each degree represent?",
    "Multiply the tennis angle by the number of students per degree."
   ],
   "q.hsg-04.explain": "Remaining angle: 360° − 108° − 72° = 180°. Split 3 : 2: swimming 108°, tennis 72°. 108° represents 36 students so 1° represents 1/3 of a student. Tennis: 72 × 1/3 = 24 students.",
   "q.hsg-05.q": "Four positive integers have mean 10, median 9 and a single mode of 8. Find the largest of the four numbers.",
   "q.hsg-05.hints": [
    "Order a ≤ b ≤ c ≤ d. What relation between b and c does the median 9 give?",
    "A mode of 8 means 8 appears at least how many times? In which positions?",
    "Use the sum of 40 to find the remaining number."
   ],
   "q.hsg-05.explain": "Sum = 40, b + c = 18. The mode 8 appears at least twice. If c = 8 then b = 10 > c, impossible; so c ≥ 9 and the two 8s must be a and b, giving c = 10. Then d = 40 − 8 − 8 − 10 = 14. The largest is 14.",
   "q.hsg-06.q": "Dung calculates: \"Group A has 10 students with mean score 7; group B has 40 students with mean score 9. The overall mean is (7 + 9) ÷ 2 = 8\". Which comment is correct?",
   "q.hsg-06.choices": [
    "Dung is correct",
    "Wrong; the overall mean is 8.6 because group B is larger",
    "Wrong; the overall mean is 7 because group A comes first",
    "Wrong; the overall mean is 9 because group B has the higher score"
   ],
   "q.hsg-06.hints": [
    "Do the two groups have the same number of students? Which group has more influence on the overall mean?",
    "Work out the total score of each group.",
    "Overall mean = total score ÷ total number of students."
   ],
   "q.hsg-06.explain": "A weighted mean is needed: (10 × 7 + 40 × 9) ÷ 50 = 430 ÷ 50 = 8.6. Dung's result would only be right if the two groups were the same size.",
   "q.hsg-07.q": "A data set has mean m and range R. Each value is multiplied by 3 and then 2 is subtracted. Which statement is correct for the new data set?",
   "q.hsg-07.choices": [
    "Mean is 3m − 2 and range is 3R",
    "Mean is 3m − 2 and range is 3R − 2",
    "Mean is 3m and range is 3R − 2",
    "Mean is m + 1 and range is R"
   ],
   "q.hsg-07.hints": [
    "Try the data 1, 2, 3: what do you get after multiplying by 3 and subtracting 2? Find the mean and the range.",
    "How does subtracting 2 affect the difference between the largest and smallest values?",
    "And multiplying by 3?"
   ],
   "q.hsg-07.explain": "With 1, 2, 3 → 1, 4, 7: mean 4 = 3·2 − 2, range 6 = 3·2. In general the new mean is 3m − 2 and the new range is 3R (subtracting 2 does not change a difference).",
   "q.hsg-08.why.q": "Why is that answer appropriate?",
   "q.hsg-08.why.choices": [
    "Because the median is not much affected by an outlier",
    "Because the mean is always the best measure",
    "Because the range tells you the common salary",
    "Because a bigger total pay is more typical"
   ],
   "q.hsg-08.q": "The monthly pay (in million dong) of 9 employees: 8 people earn 10 million and the director earns 100 million. Which measure best describes the \"typical\" pay of an employee?",
   "q.hsg-08.choices": [
    "Mean",
    "Median",
    "Range",
    "Total pay"
   ],
   "q.hsg-08.hints": [
    "Work out the mean of the 9 salaries. Is it close to what most people earn?",
    "What is the median of the 9 salaries (ordered), which position and what value?",
    "Which measure is most affected by the value 100?"
   ],
   "q.hsg-08.explain": "Mean = (8 × 10 + 100) ÷ 9 = 20 million, double the pay of 8 of the 9 employees, because it is pulled up by the outlier 100. The median and mode are both 10 million and reflect typical pay."
  },
  "vi": {}
 }
});
