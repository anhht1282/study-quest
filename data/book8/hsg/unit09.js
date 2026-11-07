window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 9,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho dãy số 5, 9, 13, 17, … (hai số hạng liên tiếp hơn kém nhau 4 đơn vị). Tính tổng của 30 số hạng đầu tiên.",
    "svg": null,
    "choices": null,
    "answer": 1890,
    "hints": [
     "Số hạng thứ 30 của dãy là số nào? (dùng số hạng thứ n)",
     "Nếu ghép số hạng đầu với số hạng cuối, số thứ hai với số thứ hai từ cuối, các tổng này có bằng nhau không?",
     "Có bao nhiêu cặp như vậy, mỗi cặp có tổng bằng bao nhiêu?"
    ],
    "explain": "Số hạng thứ n là 4n + 1 nên số hạng thứ 30 là 121. Ghép cặp đầu–cuối: 5 + 121 = 126, mỗi cặp đều có tổng 126. Có 30 : 2 = 15 cặp nên tổng = 15 × 126 = 1890.",
    "tol": 0
   },
   {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Dãy 7, 12, 17, 22, … có số hạng thứ n là 5n + 2. Trong dãy này có bao nhiêu số hạng là số có đúng ba chữ số?",
    "svg": null,
    "choices": null,
    "answer": 180,
    "hints": [
     "Số hạng ba chữ số nhỏ nhất là số hạng nào? Giải 5n + 2 ≥ 100.",
     "Số hạng ba chữ số lớn nhất ứng với n lớn nhất thỏa 5n + 2 ≤ 999 là bao nhiêu?",
     "Đếm các số nguyên n từ giá trị nhỏ nhất đến lớn nhất em tìm được."
    ],
    "explain": "5n + 2 ≥ 100 ⇒ n ≥ 19,6 nên n nhỏ nhất là 20 (số hạng 102). 5n + 2 ≤ 999 ⇒ n ≤ 199,4 nên n lớn nhất là 199 (số hạng 997). Số giá trị n là 199 − 20 + 1 = 180.",
    "tol": 0
   },
   {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Tính tổng A = 1/(1×2) + 1/(2×3) + 1/(3×4) + … + 1/(99×100). Viết kết quả dạng phân số tối giản.",
    "svg": null,
    "choices": null,
    "answer": "99/100",
    "hints": [
     "Hãy thử viết 1/(1×2) thành hiệu của hai phân số: 1/1 − 1/2 có bằng nó không?",
     "Vậy 1/(k(k+1)) có thể viết thành hiệu nào? Kiểm tra với k = 2.",
     "Khi cộng tất cả các hiệu, những số hạng nào triệt tiêu nhau, còn lại gì?"
    ],
    "explain": "Vì 1/(k(k+1)) = 1/k − 1/(k+1) nên A = (1 − 1/2) + (1/2 − 1/3) + … + (1/99 − 1/100). Các số hạng ở giữa triệt tiêu, còn A = 1 − 1/100 = 99/100.",
    "tol": 0
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Một dãy số có hiệu hai số hạng liên tiếp luôn bằng nhau. Biết số hạng thứ 7 bằng 31 và số hạng thứ 12 bằng 56. Tìm số hạng thứ 100.",
    "svg": null,
    "choices": null,
    "answer": 496,
    "hints": [
     "Từ số hạng thứ 7 đến số hạng thứ 12 có bao nhiêu bước nhảy?",
     "Các bước nhảy đó tăng tổng cộng bao nhiêu? Mỗi bước tăng bao nhiêu?",
     "Từ số hạng thứ 7 đến số hạng thứ 100 cần bao nhiêu bước nhảy?"
    ],
    "explain": "Từ số hạng 7 đến số hạng 12 có 5 bước, tăng 56 − 31 = 25 nên mỗi bước tăng 5. Từ số hạng 7 đến số hạng 100 có 93 bước: 31 + 93 × 5 = 31 + 465 = 496.",
    "tol": 0
   },
   {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Hàm số f(x) = ax + b thỏa mãn f(2) = 11 và f(5) = 23. Tính f(10).",
    "svg": null,
    "choices": null,
    "answer": 43,
    "hints": [
     "Khi x tăng từ 2 lên 5 thì f(x) tăng bao nhiêu? Vậy hệ số a bằng bao nhiêu?",
     "Thay a vào f(2) = 11 để tìm b.",
     "Có a và b rồi, tính f(10)."
    ],
    "explain": "f(5) − f(2) = 3a = 12 nên a = 4. Từ 2a + b = 11 ⇒ b = 3. Vậy f(x) = 4x + 3 và f(10) = 43.",
    "tol": 0
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Một dãy số có hiệu hai số hạng liên tiếp luôn bằng 4. Khẳng định nào sau đây CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
     "Số hạng thứ n luôn bằng 4n",
     "Số hạng thứ n luôn có dạng 4n + k với k là một hằng số",
     "Mọi số hạng đều chia hết cho 4",
     "Dãy luôn có một số hạng bằng 0"
    ],
    "answer": 1,
    "hints": [
     "Hãy thử với hai dãy khác nhau: 4, 8, 12, … và 1, 5, 9, … Cả hai có hiệu 4 chứ?",
     "Số hạng thứ n của dãy phụ thuộc vào số hạng đầu như thế nào?",
     "Khẳng định nào đúng với CẢ HAI dãy em vừa thử?"
    ],
    "explain": "Số hạng thứ n là a₁ + 4(n − 1) = 4n + (a₁ − 4), tức dạng 4n + k với k cố định. Các phương án A, C, D chỉ đúng khi a₁ có giá trị đặc biệt (dãy 1, 5, 9, … là phản ví dụ)."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Trong các số sau, số nào KHÔNG thể là số hạng của dãy có số hạng thứ n là 6n + 5 (n = 1, 2, 3, …)?",
    "svg": null,
    "choices": [
     "47",
     "101",
     "99",
     "203"
    ],
    "answer": 2,
    "hints": [
     "Nếu x = 6n + 5 thì x − 5 phải có tính chất gì?",
     "Trừ 5 từ mỗi số rồi kiểm tra xem kết quả có chia hết cho 6 không.",
     "Số nào cho kết quả không chia hết cho 6?"
    ],
    "explain": "x là số hạng khi x − 5 chia hết cho 6 (và x ≥ 11). 47 − 5 = 42, 101 − 5 = 96, 203 − 5 = 198 đều chia hết cho 6; 99 − 5 = 94 không chia hết cho 6 (6 × 15 = 90, dư 4) nên 99 không thuộc dãy."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-sequences",
    "source": "hsg",
    "lang": "vi",
    "q": "Các số tam giác 1, 3, 6, 10, 15, … có số hạng thứ n là n(n + 1)/2. Tổng của hai số tam giác liên tiếp luôn là:",
    "svg": null,
    "choices": [
     "Một số chính phương",
     "Một số lẻ",
     "Một số chẵn",
     "Một số nguyên tố"
    ],
    "answer": 0,
    "hints": [
     "Thử cộng: 1 + 3, 3 + 6, 6 + 10. Em nhận ra các kết quả là loại số nào?",
     "Viết tổng hai số liên tiếp theo n: n(n+1)/2 + (n+1)(n+2)/2.",
     "Đặt thừa số chung (n + 1) và rút gọn."
    ],
    "explain": "1 + 3 = 4, 3 + 6 = 9, 6 + 10 = 16, … Tổng = (n+1)(n + n + 2)/2 = (n+1)(n+1) = (n+1)², luôn là số chính phương.",
    "why": {
     "q": "Vì sao khẳng định đó luôn đúng?",
     "choices": [
      "Vì cả hai số đều là số tam giác",
      "Vì n(n+1)/2 + (n+1)(n+2)/2 = (n+1)(n+1)",
      "Vì tổng của một số chẵn và một số lẻ là số lẻ",
      "Vì 4 = 2², 9 = 3² và 16 = 4² nên mọi tổng đều thế"
     ],
     "answer": 1
    }
   }
  ]
 },
 "tr": {
  "en": {
   "q.hsg-01.q": "Consider the sequence 5, 9, 13, 17, … (consecutive terms differ by 4). Find the sum of the first 30 terms.",
   "q.hsg-01.hints": [
    "What is the 30th term of the sequence? (use the nth term)",
    "If you pair the first term with the last, the second with the second from last, are all the pair sums equal?",
    "How many such pairs are there, and what is each pair's sum?"
   ],
   "q.hsg-01.explain": "The nth term is 4n + 1, so the 30th term is 121. Pair first with last: 5 + 121 = 126, and every pair has this sum. There are 30 ÷ 2 = 15 pairs, so the sum is 15 × 126 = 1890.",
   "q.hsg-02.q": "The sequence 7, 12, 17, 22, … has nth term 5n + 2. How many terms of this sequence are three-digit numbers?",
   "q.hsg-02.hints": [
    "Which is the first three-digit term? Solve 5n + 2 ≥ 100.",
    "What is the largest n with 5n + 2 ≤ 999?",
    "Count the integers n from the smallest to the largest value you found."
   ],
   "q.hsg-02.explain": "5n + 2 ≥ 100 ⇒ n ≥ 19.6, so the smallest n is 20 (term 102). 5n + 2 ≤ 999 ⇒ n ≤ 199.4, so the largest n is 199 (term 997). The number of values of n is 199 − 20 + 1 = 180.",
   "q.hsg-03.q": "Calculate A = 1/(1×2) + 1/(2×3) + 1/(3×4) + … + 1/(99×100). Give the answer as a fraction in simplest form.",
   "q.hsg-03.hints": [
    "Try writing 1/(1×2) as a difference of two fractions: does 1/1 − 1/2 equal it?",
    "So 1/(k(k+1)) can be written as which difference? Check with k = 2.",
    "When you add all the differences, which terms cancel and what is left?"
   ],
   "q.hsg-03.explain": "Since 1/(k(k+1)) = 1/k − 1/(k+1), A = (1 − 1/2) + (1/2 − 1/3) + … + (1/99 − 1/100). The middle terms cancel, leaving A = 1 − 1/100 = 99/100.",
   "q.hsg-04.q": "A sequence has a constant difference between consecutive terms. The 7th term is 31 and the 12th term is 56. Find the 100th term.",
   "q.hsg-04.hints": [
    "How many steps are there from the 7th term to the 12th term?",
    "How much do those steps add up to? How much does each step add?",
    "How many steps are needed from the 7th term to the 100th term?"
   ],
   "q.hsg-04.explain": "From term 7 to term 12 there are 5 steps adding 56 − 31 = 25, so each step adds 5. From term 7 to term 100 there are 93 steps: 31 + 93 × 5 = 31 + 465 = 496.",
   "q.hsg-05.q": "The function f(x) = ax + b satisfies f(2) = 11 and f(5) = 23. Find f(10).",
   "q.hsg-05.hints": [
    "When x increases from 2 to 5, by how much does f(x) increase? So what is a?",
    "Substitute a into f(2) = 11 to find b.",
    "With a and b known, work out f(10)."
   ],
   "q.hsg-05.explain": "f(5) − f(2) = 3a = 12 so a = 4. From 2a + b = 11, b = 3. So f(x) = 4x + 3 and f(10) = 43.",
   "q.hsg-06.q": "In a sequence the difference between consecutive terms is always 4. Which statement is DEFINITELY true?",
   "q.hsg-06.choices": [
    "The nth term is always 4n",
    "The nth term always has the form 4n + k where k is a constant",
    "Every term is divisible by 4",
    "The sequence always has a term equal to 0"
   ],
   "q.hsg-06.hints": [
    "Try two different sequences: 4, 8, 12, … and 1, 5, 9, … Both have difference 4, right?",
    "How does the nth term depend on the first term?",
    "Which statement is true for BOTH sequences you tried?"
   ],
   "q.hsg-06.explain": "The nth term is a₁ + 4(n − 1) = 4n + (a₁ − 4), which has the form 4n + k with k fixed. A, C, D hold only for special first terms (the sequence 1, 5, 9, … is a counterexample).",
   "q.hsg-07.q": "Which of these numbers can NOT be a term of the sequence with nth term 6n + 5 (n = 1, 2, 3, …)?",
   "q.hsg-07.choices": [
    "47",
    "101",
    "99",
    "203"
   ],
   "q.hsg-07.hints": [
    "If x = 6n + 5, what property must x − 5 have?",
    "Subtract 5 from each number and check whether the result is divisible by 6.",
    "Which number gives a result not divisible by 6?"
   ],
   "q.hsg-07.explain": "x is a term when x − 5 is divisible by 6 (and x ≥ 11). 47 − 5 = 42, 101 − 5 = 96 and 203 − 5 = 198 are all divisible by 6; 99 − 5 = 94 is not (6 × 15 = 90, remainder 4), so 99 is not in the sequence.",
   "q.hsg-08.why.q": "Why is this always true?",
   "q.hsg-08.why.choices": [
    "Because both numbers are triangular numbers",
    "Because n(n+1)/2 + (n+1)(n+2)/2 = (n+1)(n+1)",
    "Because an even plus an odd number is odd",
    "Because 4 = 2², 9 = 3² and 16 = 4², so every sum is like that"
   ],
   "q.hsg-08.q": "The triangular numbers 1, 3, 6, 10, 15, … have nth term n(n + 1)/2. The sum of two consecutive triangular numbers is always:",
   "q.hsg-08.choices": [
    "A square number",
    "An odd number",
    "An even number",
    "A prime number"
   ],
   "q.hsg-08.hints": [
    "Try adding 1 + 3, 3 + 6, 6 + 10. What kind of numbers are the results?",
    "Write the sum in terms of n: n(n+1)/2 + (n+1)(n+2)/2.",
    "Take out the common factor (n + 1) and simplify."
   ],
   "q.hsg-08.explain": "1 + 3 = 4, 3 + 6 = 9, 6 + 10 = 16, … The sum = (n+1)(n + n + 2)/2 = (n+1)(n+1) = (n+1)², always a square number."
  },
  "vi": {}
 }
});
