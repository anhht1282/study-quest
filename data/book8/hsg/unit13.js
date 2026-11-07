window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 13,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Gieo đồng thời hai con xúc xắc cân đối, mỗi con có sáu mặt từ 1 đến 6. Tính xác suất để tổng số chấm là một số nguyên tố (viết phân số tối giản).",
    "svg": null,
    "choices": null,
    "answer": "5/12",
    "hints": [
     "Các tổng có thể là từ 2 đến 12. Trong đó những số nào là số nguyên tố?",
     "Với mỗi tổng nguyên tố, đếm xem có bao nhiêu cặp (a; b) cho tổng đó.",
     "Tổng số kết quả có thể là bao nhiêu? Rút gọn phân số."
    ],
    "explain": "Tổng nguyên tố: 2, 3, 5, 7, 11 với số cách lần lượt 1, 2, 4, 6, 2 (tổng 15 cách). Xác suất = 15/36 = 5/12.",
    "tol": 0
   },
   {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Một túi có 5 bi đỏ, 4 bi xanh và 3 bi vàng, giống hệt nhau về kích thước. Lấy ngẫu nhiên lần lượt 2 bi, không hoàn lại. Tính xác suất để hai bi lấy ra cùng màu (phân số tối giản).",
    "svg": null,
    "choices": null,
    "answer": "19/66",
    "hints": [
     "Xác suất lấy hai bi đỏ liên tiếp là bao nhiêu? (chú ý lần 2 chỉ còn 11 bi)",
     "Làm tương tự cho hai bi xanh và hai bi vàng.",
     "Hai bi cùng màu là các trường hợp riêng rẽ, em làm gì với ba xác suất đó?"
    ],
    "explain": "P(đỏ, đỏ) = 5/12 × 4/11 = 20/132; P(xanh, xanh) = 4/12 × 3/11 = 12/132; P(vàng, vàng) = 3/12 × 2/11 = 6/132. Cộng lại: 38/132 = 19/66.",
    "tol": 0
   },
   {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Chọn ngẫu nhiên một số tự nhiên có ba chữ số. Tính xác suất để ba chữ số của nó đôi một khác nhau (phân số tối giản).",
    "svg": null,
    "choices": null,
    "answer": "18/25",
    "hints": [
     "Có bao nhiêu số tự nhiên có ba chữ số tất cả?",
     "Chữ số hàng trăm có mấy cách chọn? Chữ số hàng chục khi đó có mấy cách?",
     "Chữ số hàng đơn vị còn mấy cách? Nhân lại rồi chia cho tổng số kết quả."
    ],
    "explain": "Có 900 số. Hàng trăm: 9 cách (1–9); hàng chục: 9 cách (0–9 trừ chữ số hàng trăm); hàng đơn vị: 8 cách. Số thuận lợi 9 × 9 × 8 = 648. Xác suất = 648/900 = 18/25.",
    "tol": 0
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Tung một đồng xu cân đối 4 lần. Tính xác suất để có ít nhất một lần hai mặt ngửa xuất hiện liên tiếp (viết phân số tối giản).",
    "svg": null,
    "choices": null,
    "answer": "1/2",
    "hints": [
     "Có tất cả bao nhiêu dãy kết quả khi tung 4 lần?",
     "Đếm các dãy KHÔNG có hai mặt ngửa liền nhau sẽ dễ hơn. Bắt đầu với các dãy có 0 mặt ngửa, 1 mặt ngửa, …",
     "Lấy tổng số dãy trừ đi số dãy không có hai mặt ngửa liền nhau."
    ],
    "explain": "Có 2⁴ = 16 dãy. Dãy không có hai ngửa liền nhau: 0 ngửa: 1; 1 ngửa: 4; 2 ngửa không kề nhau: 3 (NTNT, NTTN, TNTN); 3 hoặc 4 ngửa: 0. Tổng 8. Vậy có 16 − 8 = 8 dãy cần tìm và xác suất = 8/16 = 1/2.",
    "tol": 0
   },
   {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Trong hộp có bi đỏ và bi xanh; xác suất lấy ngẫu nhiên một bi đỏ là 1/3 và có 6 bi xanh. Cần thêm vào hộp bao nhiêu bi đỏ nữa để xác suất lấy được bi đỏ trở thành 3/5?",
    "svg": null,
    "choices": null,
    "answer": 6,
    "hints": [
     "Nếu có r bi đỏ thì P(đỏ) = r/(r + 6). Dùng 1/3 để tìm r.",
     "Thêm n bi đỏ thì số bi đỏ và tổng số bi mới là bao nhiêu?",
     "Lập phương trình (r + n)/(r + 6 + n) = 3/5 và giải n."
    ],
    "explain": "r/(r + 6) = 1/3 ⇒ 3r = r + 6 ⇒ r = 3. Thêm n bi đỏ: (3 + n)/(9 + n) = 3/5 ⇒ 15 + 5n = 27 + 3n ⇒ n = 6.",
    "tol": 0,
    "unitLabel": "bi"
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Bạn Bình lập luận: \"Tung hai đồng xu cân đối, có 3 kết quả: hai sấp, một sấp một ngửa, hai ngửa. Vậy xác suất để được một sấp một ngửa là 1/3\". Lập luận sai ở đâu?",
    "svg": null,
    "choices": [
     "Phải có 4 đồng xu mới tính được",
     "Xác suất đúng là 1/4",
     "Ba kết quả đó không đồng khả năng; xác suất đúng là 1/2",
     "Lập luận hoàn toàn đúng"
    ],
    "answer": 2,
    "hints": [
     "Ba kết quả 'hai sấp', 'một sấp một ngửa', 'hai ngửa' có khả năng xảy ra như nhau không?",
     "Hãy liệt kê kết quả khi phân biệt đồng xu thứ nhất và thứ hai.",
     "Có bao nhiêu kết quả đồng khả năng, và bao nhiêu trong số đó là 'một sấp một ngửa'?"
    ],
    "explain": "Các kết quả đồng khả năng là SS, SN, NS, NN (phân biệt hai đồng xu). 'Một sấp một ngửa' gồm SN và NS nên xác suất = 2/4 = 1/2. Lỗi: coi ba nhóm kết quả là đồng khả năng."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Hai biến cố A và B có P(A) = 0,3 và P(B) = 0,5 (không biết A, B có loại trừ nhau hay không). Khẳng định nào sau đây CHẮC CHẮN đúng với xác suất P(A hoặc B)?",
    "svg": null,
    "choices": [
     "P(A hoặc B) = 0,8",
     "P(A hoặc B) = 0,65",
     "0,5 ≤ P(A hoặc B) ≤ 0,8",
     "P(A hoặc B) ≤ 0,5"
    ],
    "answer": 2,
    "hints": [
     "Nếu A và B loại trừ nhau thì P(A hoặc B) bằng bao nhiêu?",
     "Nếu A nằm hoàn toàn trong B thì P(A hoặc B) bằng bao nhiêu?",
     "Mọi trường hợp khác nằm giữa hai giá trị đó không?"
    ],
    "explain": "Trường hợp lớn nhất: loại trừ nhau, P = 0,3 + 0,5 = 0,8. Trường hợp nhỏ nhất: A nằm trong B, P = 0,5. Mọi trường hợp khác nằm giữa, nên 0,5 ≤ P(A hoặc B) ≤ 0,8. Phương án 'bằng 0,8' chỉ đúng khi A, B loại trừ nhau."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-probability",
    "source": "hsg",
    "lang": "vi",
    "q": "Trong một nhóm 13 người, xác suất để có ít nhất hai người sinh cùng một tháng (trong năm dương lịch) bằng:",
    "svg": null,
    "choices": [
     "1",
     "12/13",
     "1/12",
     "Phụ thuộc vào ngày sinh cụ thể"
    ],
    "answer": 0,
    "hints": [
     "Có bao nhiêu tháng và bao nhiêu người? Hãy coi mỗi tháng là một 'chuồng', mỗi người là một 'con thỏ'.",
     "Nếu 12 người đầu sinh ở 12 tháng khác nhau, người thứ 13 sinh ở tháng nào?",
     "Vậy trường hợp 'tất cả khác tháng' có thể xảy ra không?"
    ],
    "explain": "Theo nguyên lý Dirichlet, 13 người vào 12 tháng thì chắc chắn có ít nhất hai người cùng tháng. Biến cố này luôn xảy ra nên xác suất bằng 1, dù khả năng mỗi tháng có thể không đều nhau.",
    "why": {
     "q": "Lý do chính xác là gì?",
     "choices": [
      "Vì 13 > 12 nên không thể xếp 13 người vào 12 tháng mà mỗi tháng không quá một người",
      "Vì mỗi người có xác suất 1/12 sinh vào mỗi tháng",
      "Vì 12/13 + 1/13 = 1",
      "Vì tháng sinh được chọn ngẫu nhiên nên kết quả không chắc chắn"
     ],
     "answer": 0
    }
   }
  ]
 },
 "tr": {
  "en": {
   "q.hsg-01.q": "Two fair six-sided dice are rolled together. Find the probability that the sum of the scores is a prime number (as a fraction in simplest form).",
   "q.hsg-01.hints": [
    "The possible sums are 2 to 12. Which of these are prime?",
    "For each prime sum, count how many pairs (a, b) give it.",
    "How many outcomes are possible in total? Simplify the fraction."
   ],
   "q.hsg-01.explain": "Prime sums: 2, 3, 5, 7, 11 can be made in 1, 2, 4, 6, 2 ways (15 ways in total). Probability = 15/36 = 5/12.",
   "q.hsg-02.q": "A bag holds 5 red, 4 blue and 3 yellow balls, identical in size. Two balls are taken at random one after the other without replacement. Find the probability that the two balls are the same colour (simplest form).",
   "q.hsg-02.hints": [
    "What is the probability of taking two red balls in a row? (Note only 11 balls remain for the second draw.)",
    "Do the same for two blue and two yellow.",
    "These are separate cases; what do you do with the three probabilities?"
   ],
   "q.hsg-02.explain": "P(red, red) = 5/12 × 4/11 = 20/132; P(blue, blue) = 4/12 × 3/11 = 12/132; P(yellow, yellow) = 3/12 × 2/11 = 6/132. Adding: 38/132 = 19/66.",
   "q.hsg-03.q": "A three-digit whole number is chosen at random. Find the probability that its three digits are all different (simplest form).",
   "q.hsg-03.hints": [
    "How many three-digit whole numbers are there altogether?",
    "How many choices for the hundreds digit? Then how many for the tens digit?",
    "How many choices remain for the units digit? Multiply, then divide by the total."
   ],
   "q.hsg-03.explain": "There are 900 numbers. Hundreds: 9 choices (1–9); tens: 9 choices (0–9 except the hundreds digit); units: 8 choices. Favourable = 9 × 9 × 8 = 648. Probability = 648/900 = 18/25.",
   "q.hsg-04.q": "A fair coin is tossed 4 times. Find the probability that two heads appear in a row at least once (simplest form).",
   "q.hsg-04.hints": [
    "How many outcome sequences are there for 4 tosses?",
    "It is easier to count sequences with NO two adjacent heads. Start with 0 heads, 1 head, …",
    "Subtract the number of sequences with no adjacent heads from the total."
   ],
   "q.hsg-04.explain": "There are 2⁴ = 16 sequences. Sequences with no two adjacent heads: 0 heads: 1; 1 head: 4; 2 non-adjacent heads: 3 (HTHT, HTTH, THTH); 3 or 4 heads: 0. Total 8. So 16 − 8 = 8 sequences qualify and the probability = 8/16 = 1/2.",
   "q.hsg-05.q": "A box contains red and blue balls; the probability of picking a red ball at random is 1/3 and there are 6 blue balls. How many more red balls must be added so that the probability of picking red becomes 3/5?",
   "q.hsg-05.hints": [
    "If there are r red balls then P(red) = r/(r + 6). Use 1/3 to find r.",
    "After adding n red balls, what are the new numbers of red balls and of balls in total?",
    "Form the equation (r + n)/(r + 6 + n) = 3/5 and solve for n."
   ],
   "q.hsg-05.explain": "r/(r + 6) = 1/3 ⇒ 3r = r + 6 ⇒ r = 3. Adding n red balls: (3 + n)/(9 + n) = 3/5 ⇒ 15 + 5n = 27 + 3n ⇒ n = 6.",
   "q.hsg-06.q": "Binh argues: \"Toss two fair coins; there are 3 outcomes: two tails, one tail and one head, two heads. So the probability of one tail and one head is 1/3\". What is wrong with the argument?",
   "q.hsg-06.choices": [
    "You need 4 coins to calculate it",
    "The correct probability is 1/4",
    "The three outcomes are not equally likely; the correct probability is 1/2",
    "The argument is completely correct"
   ],
   "q.hsg-06.hints": [
    "Are the outcomes 'two tails', 'one tail one head' and 'two heads' equally likely?",
    "List the outcomes when you tell the first and second coins apart.",
    "How many equally likely outcomes are there, and how many are 'one tail one head'?"
   ],
   "q.hsg-06.explain": "The equally likely outcomes are TT, TH, HT, HH (telling the coins apart). 'One tail one head' includes TH and HT, so the probability = 2/4 = 1/2. The mistake is treating the three groups as equally likely.",
   "q.hsg-07.q": "Events A and B have P(A) = 0.3 and P(B) = 0.5 (we do not know whether they are mutually exclusive). Which statement about P(A or B) is DEFINITELY true?",
   "q.hsg-07.choices": [
    "P(A or B) = 0.8",
    "P(A or B) = 0.65",
    "0.5 ≤ P(A or B) ≤ 0.8",
    "P(A or B) ≤ 0.5"
   ],
   "q.hsg-07.hints": [
    "If A and B are mutually exclusive, what is P(A or B)?",
    "If A lies completely inside B, what is P(A or B)?",
    "Do all other cases lie between those two values?"
   ],
   "q.hsg-07.explain": "Largest case: mutually exclusive, P = 0.3 + 0.5 = 0.8. Smallest case: A inside B, P = 0.5. Everything else lies in between, so 0.5 ≤ P(A or B) ≤ 0.8. 'Equal to 0.8' is only true if A and B are mutually exclusive.",
   "q.hsg-08.why.q": "What is the exact reason?",
   "q.hsg-08.why.choices": [
    "Because 13 > 12, you cannot place 13 people in 12 months with at most one per month",
    "Because each person has probability 1/12 for each month",
    "Because 12/13 + 1/13 = 1",
    "Because birth months are random so the result is uncertain"
   ],
   "q.hsg-08.q": "In a group of 13 people, the probability that at least two of them have their birthday in the same calendar month is:",
   "q.hsg-08.choices": [
    "1",
    "12/13",
    "1/12",
    "Depends on the actual birthdays"
   ],
   "q.hsg-08.hints": [
    "How many months and how many people are there? Treat each month as a 'pigeonhole' and each person as a 'pigeon'.",
    "If the first 12 people are all born in different months, which month is the 13th person born in?",
    "So can the case 'all in different months' happen?"
   ],
   "q.hsg-08.explain": "By the pigeonhole principle, 13 people in 12 months must include two in the same month. The event always happens, so the probability is 1, whatever the chances of each month."
  },
  "vi": {}
 }
});
