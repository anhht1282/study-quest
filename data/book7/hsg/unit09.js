window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 9,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01", "howto": "Chỉ đếm những số hạng có đúng hai chữ số, rồi nhập số lượng các số hạng đó.",
    "type": "num",
    "diff": 3,
    "skill": "dem-so-hang",
    "lang": "vi",
    "q": "Cho dãy số 4, 7, 10, 13, … (mỗi số hạng lớn hơn số hạng liền trước 3 đơn vị). Hỏi dãy có bao nhiêu số hạng là số có hai chữ số?",
    "svg": null,
    "choices": null,
    "answer": 30,
    "hints": [
      "Số hạng thứ n của dãy có thể viết dưới dạng nào? Thử so sánh với các số trong bảng nhân 3.",
      "Số có hai chữ số nằm giữa hai giá trị nào? Hãy viết bất đẳng thức theo n.",
      "Giá trị nhỏ nhất và lớn nhất của n thỏa mãn là bao nhiêu? Có bao nhiêu số nguyên n như vậy?"
    ],
    "explain": "Số hạng thứ n là 3n + 1. Số có hai chữ số: 10 ≤ 3n + 1 ≤ 99 ⇔ 3 ≤ n ≤ 32. Vậy n = 3, 4, …, 32, tức là 32 − 3 + 1 = 30 số hạng.",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "tong-day-so",
    "lang": "vi",
    "q": "Tính hợp lý: S = 1 + 4 + 7 + 10 + … + 97 + 100 (các số hạng cách đều nhau 3 đơn vị).",
    "svg": null,
    "choices": null,
    "answer": 1717,
    "hints": [
      "Dãy có bao nhiêu số hạng? Hãy tìm số hạng thứ n.",
      "Nếu ghép số hạng đầu với số hạng cuối, rồi số hạng thứ hai với số hạng thứ hai từ cuối, các tổng có gì đặc biệt?",
      "Có bao nhiêu cặp như vậy và mỗi cặp có tổng bằng bao nhiêu?"
    ],
    "explain": "Số hạng thứ n là 3n − 2; 3n − 2 = 100 ⇒ n = 34. Ghép cặp (1 + 100), (4 + 97), … mỗi cặp bằng 101 và có 34 : 2 = 17 cặp. S = 17 × 101 = 1717.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "day-chung",
    "lang": "vi",
    "q": "Dãy P: 5, 9, 13, 17, … (cộng 4). Dãy Q: 3, 10, 17, 24, … (cộng 7). Một số có mặt ở cả hai dãy gọi là số hạng chung. Tìm số hạng chung thứ năm (theo thứ tự tăng dần).",
    "svg": null,
    "choices": null,
    "answer": 129,
    "hints": [
      "Mọi số hạng của dãy P chia 4 dư mấy? Còn dãy Q thì sao khi liệt kê vài số đầu?",
      "Tìm số hạng chung đầu tiên. Hai số hạng chung liên tiếp hơn kém nhau bao nhiêu (nghĩ tới BCNN của 4 và 7)?",
      "Từ số hạng chung đầu tiên, cộng bước nhảy đó thêm mấy lần để đến số thứ năm?"
    ],
    "explain": "Dãy P gồm các số chia 4 dư 1 (từ 5 trở đi). Liệt kê dãy Q: 3, 10, 17 — số 17 = 4·4 + 1 thuộc P, đó là số hạng chung đầu tiên. Hai số chung liên tiếp cách nhau BCNN(4, 7) = 28: 17, 45, 73, 101, 129. Số thứ năm là 129.",
    "why": null
  },
  {
    "id": "hsg-04", "howto": "Nhập số ô vuông nhiều nhất có thể xếp thành một hàng mà dùng không quá 150 que.",
    "type": "num",
    "diff": 3,
    "skill": "mau-que-diem",
    "lang": "vi",
    "q": "Xếp que diêm thành một hàng các ô vuông liền nhau (hai ô kề nhau dùng chung một que). Hình 1 có 1 ô vuông (4 que), hình 2 có 2 ô vuông (7 que), hình 3 có 3 ô vuông (10 que), … Với 150 que diêm, em xếp được nhiều nhất bao nhiêu ô vuông trong một hàng như vậy?",
    "svg": null,
    "choices": null,
    "answer": 49,
    "hints": [
      "Mỗi ô vuông thêm vào cần thêm bao nhiêu que? Viết công thức số que của hình thứ n.",
      "Số que của hình thứ n phải thỏa mãn bất đẳng thức nào với 150 que?",
      "n tìm được có thể là số thập phân; em cần lấy giá trị nguyên nào?"
    ],
    "explain": "Số que của hình n là 3n + 1. Cần 3n + 1 ≤ 150 ⇔ n ≤ 149/3 ≈ 49,67. Vì n nguyên nên n lớn nhất là 49 (dùng 148 que).",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "ham-bac-nhat",
    "lang": "vi",
    "q": "Hàm số f(x) = ax + b có f(3) = 11 và f(7) = 23. Tính f(−2).",
    "svg": null,
    "choices": null,
    "answer": -4,
    "hints": [
      "Khi x tăng thêm 4 (từ 3 lên 7), giá trị hàm số tăng thêm bao nhiêu? Từ đó suy ra a.",
      "Thay a và x = 3 vào f(3) = 11 để tìm b.",
      "Có a, b rồi, thay x = −2 vào f(x)."
    ],
    "explain": "f(7) − f(3) = 4a = 12 ⇒ a = 3. Từ 3·3 + b = 11 ⇒ b = 2. Vậy f(x) = 3x + 2 và f(−2) = −6 + 2 = −4.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "tinh-chat-so-hang",
    "lang": "vi",
    "q": "Dãy có số hạng thứ n là n² + n (n = 1, 2, 3, …): 2, 6, 12, 20, … Phát biểu nào sau đây luôn đúng?",
    "svg": null,
    "choices": [
      "Mọi số hạng đều là số chẵn",
      "Mọi số hạng đều chia hết cho 4",
      "Hiệu hai số hạng liên tiếp luôn bằng 4",
      "Có một số hạng bằng 100"
    ],
    "answer": 0,
    "hints": [
      "Thử viết n² + n dưới dạng tích của hai số nguyên liên tiếp. Có nhận xét gì về một trong hai số đó?",
      "Kiểm tra từng phát biểu bằng một phản ví dụ nhỏ (ví dụ số hạng thứ hai).",
      "Hiệu hai số hạng liên tiếp là một biểu thức theo n; nó có phải hằng số không?"
    ],
    "explain": "n² + n = n(n + 1) là tích của hai số nguyên liên tiếp nên luôn chẵn. Các phát biểu khác sai: 6 không chia hết cho 4; hiệu hai số hạng liên tiếp là 2n + 2 (4, 6, 8, …) không cố định; n(n + 1) = 100 vô nghiệm vì 9·10 = 90 và 10·11 = 110.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "tim-loi-sai",
    "lang": "vi",
    "q": "Lan và Minh cùng nhìn ba số hạng đầu của một dãy: 1, 2, 4, … Lan nói: \"Mỗi số hạng gấp đôi số liền trước, nên số hạng thứ 5 là 16.\" Minh nói: \"Số cộng thêm lần lượt là 1, 2, 3, … nên số hạng thứ 5 là 11.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Lan đúng vì 1, 2, 4 rõ ràng là nhân đôi",
      "Minh đúng vì các hiệu là 1, 2, 3",
      "Cả hai quy luật đều khớp với ba số hạng đã cho nên chưa thể xác định số hạng thứ 5",
      "Cả hai đều sai vì dãy phải là 1, 2, 4, 6, 8"
    ],
    "answer": 2,
    "hints": [
      "Hãy tự viết số hạng thứ 4 và thứ 5 theo quy luật của Lan, rồi theo quy luật của Minh.",
      "Cả hai quy luật có cho ra 1, 2, 4 đúng không?",
      "Từ ba số hạng, ta có thể chắc chắn chỉ có duy nhất một quy luật không?"
    ],
    "explain": "Quy luật của Lan cho 1, 2, 4, 8, 16; quy luật của Minh cho 1, 2, 4, 7, 11. Cả hai đều khớp với ba số hạng đã cho nên chưa đủ dữ kiện để khẳng định số hạng thứ 5. Sai lầm chung là kết luận quy luật chỉ từ vài số hạng đầu.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "day-so-tam-giac",
    "lang": "vi",
    "q": "Cho dãy 1, 3, 6, 10, 15, … (hiệu hai số hạng liên tiếp lần lượt là 2, 3, 4, 5, …). Tìm số hạng thứ 20 của dãy.",
    "svg": null,
    "choices": null,
    "answer": 210,
    "hints": [
      "Số hạng thứ n bằng 1 cộng với tổng của những hiệu nào?",
      "Tổng 2 + 3 + … + n có thể ghép cặp như bài cộng 1 + 2 + … + n không?",
      "Thử kiểm tra công thức tìm được với số hạng thứ 4 (bằng 10) trước khi thay n = 20."
    ],
    "explain": "Số hạng thứ n là 1 + 2 + 3 + … + n = n(n + 1)/2 (các số tam giác). Kiểm tra n = 4: 4·5/2 = 10 ✓. Với n = 20: 20·21/2 = 210.",
    "why": {
      "q": "Vì sao số hạng thứ n của dãy này không thể viết dạng an + b?",
      "choices": [
        "Vì các hiệu không đổi nên dãy là bậc nhất",
        "Vì các hiệu 2, 3, 4, … tăng dần, trong khi an + b có hiệu không đổi bằng a",
        "Vì mọi số hạng đều lẻ",
        "Vì số hạng đầu là 1"
      ],
      "answer": 1
    }
  }
] },
  tr: { en: {
    "q.hsg-04.howto": "Enter the greatest number of squares you can make in one row using no more than 150 matchsticks.",
    "q.hsg-01.howto": "Count only the terms that have exactly two digits, then enter how many such terms there are.",
  "q.hsg-01.q": "Consider the sequence 4, 7, 10, 13, … (each term is 3 more than the previous one). How many terms of the sequence are two-digit numbers?",
  "q.hsg-01.hints": [
    "How can the nth term be written? Compare with the multiples of 3.",
    "Which two values must a two-digit number lie between? Write an inequality in n.",
    "What are the smallest and largest values of n that work? How many whole numbers n is that?"
  ],
  "q.hsg-01.explain": "The nth term is 3n + 1. Two-digit numbers: 10 ≤ 3n + 1 ≤ 99 ⇔ 3 ≤ n ≤ 32. So n = 3, 4, …, 32, which is 32 − 3 + 1 = 30 terms.",
  "q.hsg-02.q": "Calculate cleverly: S = 1 + 4 + 7 + 10 + … + 97 + 100 (the terms increase by 3 each time).",
  "q.hsg-02.hints": [
    "How many terms are there? Find the nth term.",
    "If you pair the first term with the last, then the second with the second from last, what do you notice about the sums?",
    "How many pairs are there and what is each pair's sum?"
  ],
  "q.hsg-02.explain": "The nth term is 3n − 2; 3n − 2 = 100 gives n = 34. Pair (1 + 100), (4 + 97), … each pair is 101 and there are 34 ÷ 2 = 17 pairs. S = 17 × 101 = 1717.",
  "q.hsg-03.q": "Sequence P: 5, 9, 13, 17, … (add 4). Sequence Q: 3, 10, 17, 24, … (add 7). A number that appears in both is called a common term. Find the fifth common term (in increasing order).",
  "q.hsg-03.hints": [
    "What remainder does every term of P leave when divided by 4? List the first few terms of Q.",
    "Find the first common term. How far apart are two consecutive common terms (think of the lowest common multiple of 4 and 7)?",
    "Starting from the first common term, how many times do you add that step to reach the fifth one?"
  ],
  "q.hsg-03.explain": "P consists of the numbers that leave remainder 1 when divided by 4 (from 5 on). Listing Q: 3, 10, 17 — and 17 = 4·4 + 1 is in P, the first common term. Consecutive common terms differ by the lowest common multiple of 4 and 7 = 28: 17, 45, 73, 101, 129. The fifth is 129.",
  "q.hsg-04.q": "Matchsticks are arranged in a row of connected squares (neighbouring squares share one stick). Pattern 1 has 1 square (4 sticks), pattern 2 has 2 squares (7 sticks), pattern 3 has 3 squares (10 sticks), … With 150 sticks, what is the greatest number of squares you can make in such a row?",
  "q.hsg-04.hints": [
    "How many extra sticks does each new square need? Write a formula for the number of sticks in pattern n.",
    "Which inequality must the number of sticks satisfy with 150 sticks?",
    "The n you find may be a decimal; which whole number must you take?"
  ],
  "q.hsg-04.explain": "Pattern n uses 3n + 1 sticks. We need 3n + 1 ≤ 150 ⇔ n ≤ 149/3 ≈ 49.67. Since n is a whole number, the greatest n is 49 (using 148 sticks).",
  "q.hsg-05.q": "The function f(x) = ax + b has f(3) = 11 and f(7) = 23. Work out f(−2).",
  "q.hsg-05.hints": [
    "When x increases by 4 (from 3 to 7), by how much does the function value increase? What does that tell you about a?",
    "Substitute a and x = 3 into f(3) = 11 to find b.",
    "Now that you know a and b, substitute x = −2 into f(x)."
  ],
  "q.hsg-05.explain": "f(7) − f(3) = 4a = 12, so a = 3. From 3·3 + b = 11 we get b = 2. So f(x) = 3x + 2 and f(−2) = −6 + 2 = −4.",
  "q.hsg-06.q": "A sequence has nth term n² + n (n = 1, 2, 3, …): 2, 6, 12, 20, … Which statement is always true?",
  "q.hsg-06.hints": [
    "Try writing n² + n as a product of two consecutive integers. What can you say about one of them?",
    "Test each statement with a small counter-example (for instance the second term).",
    "The difference between consecutive terms is an expression in n; is it a constant?"
  ],
  "q.hsg-06.explain": "n² + n = n(n + 1) is a product of two consecutive integers, so it is always even. The others are false: 6 is not a multiple of 4; the difference of consecutive terms is 2n + 2 (4, 6, 8, …), not constant; n(n + 1) = 100 has no solution since 9·10 = 90 and 10·11 = 110.",
  "q.hsg-06.choices": [
    "Every term is even",
    "Every term is a multiple of 4",
    "The difference between consecutive terms is always 4",
    "Some term equals 100"
  ],
  "q.hsg-07.q": "Lan and Minh both look at the first three terms of a sequence: 1, 2, 4, … Lan says: \"Each term is double the previous one, so the 5th term is 16.\" Minh says: \"The amounts added are 1, 2, 3, … so the 5th term is 11.\" Which comment is correct?",
  "q.hsg-07.hints": [
    "Write the 4th and 5th terms yourself using Lan's rule, then Minh's rule.",
    "Does each rule really produce 1, 2, 4?",
    "From three terms alone, can you be certain there is only one possible rule?"
  ],
  "q.hsg-07.explain": "Lan's rule gives 1, 2, 4, 8, 16; Minh's rule gives 1, 2, 4, 7, 11. Both match the three given terms, so there is not enough information to state the 5th term. The common mistake is to decide a rule from only a few terms.",
  "q.hsg-07.choices": [
    "Lan is right because 1, 2, 4 clearly doubles",
    "Minh is right because the differences are 1, 2, 3",
    "Both rules fit the three given terms, so the 5th term cannot be determined from this information",
    "Both are wrong because the sequence must be 1, 2, 4, 6, 8"
  ],
  "q.hsg-08.q": "Consider the sequence 1, 3, 6, 10, 15, … (the differences between consecutive terms are 2, 3, 4, 5, …). Find the 20th term.",
  "q.hsg-08.hints": [
    "The nth term equals 1 plus the sum of which differences?",
    "Can the sum 2 + 3 + … + n be paired up like 1 + 2 + … + n?",
    "Check your formula with the 4th term (which is 10) before substituting n = 20."
  ],
  "q.hsg-08.explain": "The nth term is 1 + 2 + 3 + … + n = n(n + 1)/2 (triangular numbers). Check n = 4: 4·5/2 = 10 ✓. For n = 20: 20·21/2 = 210.",
  "q.hsg-08.why.q": "Why can the nth term of this sequence not be written in the form an + b?",
  "q.hsg-08.why.choices": [
    "Because the differences are constant, so the sequence is linear",
    "Because the differences 2, 3, 4, … keep growing, while an + b has a constant difference a",
    "Because all the terms are odd",
    "Because the first term is 1"
  ]
}, vi: {} }
});
