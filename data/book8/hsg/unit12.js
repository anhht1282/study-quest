window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 12,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho ba số a, b, c thỏa mãn a : b = 2 : 3 và b : c = 4 : 5. Biết a + b + c = 105. Tìm c.",
    "svg": null,
    "choices": null,
    "answer": 45,
    "hints": [
     "Hai tỉ số đang chứa số b với hai giá trị khác nhau (3 và 4). Làm thế nào để b có cùng một giá trị ở cả hai tỉ số?",
     "Hãy viết tỉ số a : b : c với các số nguyên.",
     "Tổng các phần là bao nhiêu? Mỗi phần ứng với bao nhiêu đơn vị?"
    ],
    "explain": "Nhân a : b = 2 : 3 với 4 được 8 : 12; nhân b : c = 4 : 5 với 3 được 12 : 15. Vậy a : b : c = 8 : 12 : 15, tổng 35 phần. Mỗi phần = 105 : 35 = 3, nên c = 15 × 3 = 45.",
    "tol": 0
   },
   {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Các số dương x, y, z thỏa mãn 2x = 3y = 5z và x + y + z = 31. Tính x − z.",
    "svg": null,
    "choices": null,
    "answer": 9,
    "hints": [
     "Đặt 2x = 3y = 5z = 30t (30 là BCNN của 2, 3, 5). Khi đó x, y, z bằng bao nhiêu theo t?",
     "Thay vào x + y + z = 31 để tìm t.",
     "Tính x và z rồi lấy hiệu."
    ],
    "explain": "Đặt 2x = 3y = 5z = 30t ⇒ x = 15t, y = 10t, z = 6t. Khi đó 31t = 31 ⇒ t = 1, x = 15, z = 6 và x − z = 9.",
    "tol": 0
   },
   {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "12 công nhân dự định hoàn thành một công việc trong 15 ngày (năng suất mỗi người như nhau). Sau khi làm được 5 ngày, có 6 công nhân chuyển đi nơi khác. Hỏi 6 công nhân còn lại phải làm thêm bao nhiêu ngày nữa để xong việc?",
    "svg": null,
    "choices": null,
    "answer": 20,
    "hints": [
     "Toàn bộ công việc bằng bao nhiêu 'ngày công' (số người × số ngày)?",
     "5 ngày đầu 12 người đã làm được bao nhiêu ngày công?",
     "Phần còn lại chia cho 6 người thì mất bao nhiêu ngày?"
    ],
    "explain": "Cả công việc: 12 × 15 = 180 ngày công. 5 ngày đầu: 12 × 5 = 60 ngày công. Còn lại 120 ngày công, 6 người làm trong 120 : 6 = 20 ngày.",
    "tol": 0,
    "unitLabel": "ngày"
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Vòi A chảy một mình đầy bể trong 6 giờ, vòi B chảy một mình đầy bể trong 9 giờ, còn vòi C tháo một mình cạn bể đầy trong 18 giờ. Ban đầu bể cạn, mở cả ba vòi cùng lúc. Sau bao nhiêu giờ thì bể đầy?",
    "svg": null,
    "choices": null,
    "answer": 4.5,
    "hints": [
     "Trong 1 giờ, vòi A chảy được mấy phần bể? Vòi B? Vòi C tháo đi mấy phần?",
     "Cộng, trừ các phân số đó để biết trong 1 giờ bể tăng thêm mấy phần.",
     "Cần mấy giờ để đủ 1 bể?"
    ],
    "explain": "Mỗi giờ: 1/6 + 1/9 − 1/18 = (3 + 2 − 1)/18 = 4/18 = 2/9 bể. Thời gian đầy bể: 1 : 2/9 = 9/2 = 4,5 giờ.",
    "tol": 0.01,
    "unitLabel": "giờ"
   },
   {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Tỉ số của hai số dương là 3 : 5. Nếu cùng cộng thêm 10 vào mỗi số thì tỉ số mới là 2 : 3. Tính tổng của hai số ban đầu.",
    "svg": null,
    "choices": null,
    "answer": 80,
    "hints": [
     "Hai số ban đầu có thể viết là 3k và 5k. Hai số mới là gì?",
     "Lập phương trình (3k + 10)/(5k + 10) = 2/3 rồi nhân chéo.",
     "Giải k rồi tính tổng 3k + 5k."
    ],
    "explain": "(3k + 10)/(5k + 10) = 2/3 ⇒ 3(3k + 10) = 2(5k + 10) ⇒ 9k + 30 = 10k + 20 ⇒ k = 10. Hai số là 30 và 50, tổng bằng 80.",
    "tol": 0
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Bạn Hùng giải bài toán: \"5 người làm xong một việc trong 12 ngày. Hỏi 10 người làm xong việc đó trong bao nhiêu ngày?\" như sau: \"Số người gấp đôi nên số ngày cũng gấp đôi: 24 ngày\". Lỗi sai của bạn Hùng là gì?",
    "svg": null,
    "choices": [
     "Bạn nhân sai: 12 × 2 ≠ 24",
     "Bạn dùng tỉ lệ thuận thay cho tỉ lệ nghịch",
     "Bài toán không đủ dữ kiện",
     "Bạn quên rằng 10 người làm chậm hơn 5 người"
    ],
    "answer": 1,
    "hints": [
     "Có nhiều người hơn thì công việc xong nhanh hơn hay chậm hơn?",
     "Đại lượng nào không đổi trong bài này: số người × số ngày hay số người ÷ số ngày?",
     "Vậy hai đại lượng tỉ lệ thuận hay tỉ lệ nghịch?"
    ],
    "explain": "Tổng công việc 5 × 12 = 60 ngày công không đổi, nên số người và số ngày tỉ lệ NGHỊCH: 10 người làm trong 60 : 10 = 6 ngày. Bạn Hùng đã dùng nhầm tỉ lệ thuận."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Biết x/3 = y/4 (x, y khác 0). Khẳng định nào sau đây CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
     "x + y = 7",
     "4x = 3y",
     "x = 3 và y = 4",
     "x − y = −1"
    ],
    "answer": 1,
    "hints": [
     "Thử x = 6: khi đó y bằng bao nhiêu? Thử thêm x = 9.",
     "Nhân chéo đẳng thức x/3 = y/4 thì được gì?",
     "Khẳng định nào đúng với mọi cặp (x; y) thỏa mãn?"
    ],
    "explain": "Nhân chéo: 4x = 3y, luôn đúng. Các phương án khác chỉ đúng cho riêng một cặp (ví dụ x = 3, y = 4) mà không đúng với (6; 8): x + y = 14, x − y = −2."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Biết y tỉ lệ thuận với x và x tỉ lệ nghịch với z (các đại lượng khác 0). Khi đó y và z có quan hệ gì?",
    "svg": null,
    "choices": [
     "y tỉ lệ thuận với z",
     "y tỉ lệ nghịch với z",
     "y không phụ thuộc z",
     "Không xác định được"
    ],
    "answer": 1,
    "hints": [
     "Viết y theo x với hệ số tỉ lệ a, và x theo z với hệ số tỉ lệ b.",
     "Thay x = b/z vào y = ax.",
     "Tích hay thương của y và z là hằng số?"
    ],
    "explain": "y = ax và x = b/z nên y = ab/z, tức y·z = ab không đổi. Vậy y tỉ lệ nghịch với z.",
    "why": {
     "q": "Vì sao đáp án đó đúng?",
     "choices": [
      "Vì y = ax và x = b/z nên y = (ab)/z",
      "Vì thuận nhân thuận thì ra thuận",
      "Vì x bị loại bỏ khi thay vào",
      "Vì y và z cùng tỉ lệ với x"
     ],
     "answer": 0
    }
   }
  ]
 },
 "tr": {
  "en": {
   "q.hsg-01.q": "Three numbers a, b, c satisfy a : b = 2 : 3 and b : c = 4 : 5. Given that a + b + c = 105, find c.",
   "q.hsg-01.hints": [
    "The two ratios contain b with different values (3 and 4). How can you make b the same in both?",
    "Write the ratio a : b : c using whole numbers.",
    "What is the total number of parts? How much is each part worth?"
   ],
   "q.hsg-01.explain": "Multiply a : b = 2 : 3 by 4 to get 8 : 12; multiply b : c = 4 : 5 by 3 to get 12 : 15. So a : b : c = 8 : 12 : 15, 35 parts in total. One part = 105 ÷ 35 = 3, so c = 15 × 3 = 45.",
   "q.hsg-02.q": "The positive numbers x, y, z satisfy 2x = 3y = 5z and x + y + z = 31. Find x − z.",
   "q.hsg-02.hints": [
    "Put 2x = 3y = 5z = 30t (30 is the LCM of 2, 3, 5). What are x, y, z in terms of t?",
    "Substitute into x + y + z = 31 to find t.",
    "Work out x and z, then subtract."
   ],
   "q.hsg-02.explain": "Put 2x = 3y = 5z = 30t ⇒ x = 15t, y = 10t, z = 6t. Then 31t = 31 ⇒ t = 1, x = 15, z = 6 and x − z = 9.",
   "q.hsg-03.q": "12 workers plan to finish a job in 15 days (all work at the same rate). After 5 days, 6 workers are moved to another site. How many more days do the remaining 6 workers need to finish the job?",
   "q.hsg-03.hints": [
    "How many 'worker-days' (people × days) is the whole job?",
    "How many worker-days did 12 people complete in the first 5 days?",
    "How many days will 6 people need for what is left?"
   ],
   "q.hsg-03.explain": "The whole job: 12 × 15 = 180 worker-days. First 5 days: 12 × 5 = 60 worker-days. 120 worker-days remain; 6 people need 120 ÷ 6 = 20 days.",
   "q.hsg-04.q": "Tap A alone fills a tank in 6 hours, tap B alone fills it in 9 hours, and drain C alone empties a full tank in 18 hours. The tank starts empty and all three are opened together. After how many hours is the tank full?",
   "q.hsg-04.hints": [
    "In 1 hour, what fraction of the tank does A fill? B? How much does C drain?",
    "Add and subtract those fractions to find the fraction gained in 1 hour.",
    "How many hours are needed for one whole tank?"
   ],
   "q.hsg-04.explain": "Each hour: 1/6 + 1/9 − 1/18 = (3 + 2 − 1)/18 = 4/18 = 2/9 of the tank. Time to fill: 1 ÷ 2/9 = 9/2 = 4.5 hours.",
   "q.hsg-05.q": "The ratio of two positive numbers is 3 : 5. If 10 is added to each number, the new ratio is 2 : 3. Find the sum of the two original numbers.",
   "q.hsg-05.hints": [
    "The original numbers can be written 3k and 5k. What are the new numbers?",
    "Form the equation (3k + 10)/(5k + 10) = 2/3 and cross-multiply.",
    "Solve for k, then work out 3k + 5k."
   ],
   "q.hsg-05.explain": "(3k + 10)/(5k + 10) = 2/3 ⇒ 3(3k + 10) = 2(5k + 10) ⇒ 9k + 30 = 10k + 20 ⇒ k = 10. The numbers are 30 and 50, with sum 80.",
   "q.hsg-06.q": "Hung solves: \"5 people finish a job in 12 days. How many days do 10 people need?\" as follows: \"The number of people doubles so the number of days doubles too: 24 days\". What is Hung's mistake?",
   "q.hsg-06.choices": [
    "He multiplied wrongly: 12 × 2 ≠ 24",
    "He used direct proportion instead of inverse proportion",
    "The problem does not have enough information",
    "He forgot that 10 people work slower than 5 people"
   ],
   "q.hsg-06.hints": [
    "With more people, is the job finished faster or slower?",
    "What stays constant here: people × days or people ÷ days?",
    "So are the quantities directly or inversely proportional?"
   ],
   "q.hsg-06.explain": "The total work 5 × 12 = 60 worker-days is constant, so people and days are INVERSELY proportional: 10 people take 60 ÷ 10 = 6 days. Hung wrongly used direct proportion.",
   "q.hsg-07.q": "Given that x/3 = y/4 (x, y not 0). Which statement is DEFINITELY true?",
   "q.hsg-07.choices": [
    "x + y = 7",
    "4x = 3y",
    "x = 3 and y = 4",
    "x − y = −1"
   ],
   "q.hsg-07.hints": [
    "Try x = 6: what is y? Then try x = 9.",
    "What do you get by cross-multiplying x/3 = y/4?",
    "Which statement holds for every pair (x, y) that works?"
   ],
   "q.hsg-07.explain": "Cross-multiplying gives 4x = 3y, which always holds. The other statements are true only for particular pairs (for example x = 3, y = 4) but fail for (6, 8): x + y = 14, x − y = −2.",
   "q.hsg-08.why.q": "Why is that the right answer?",
   "q.hsg-08.why.choices": [
    "Because y = ax and x = b/z so y = (ab)/z",
    "Because direct times direct gives direct",
    "Because x cancels out on substitution",
    "Because y and z are both proportional to x"
   ],
   "q.hsg-08.q": "Suppose y is directly proportional to x and x is inversely proportional to z (all quantities non-zero). What is the relationship between y and z?",
   "q.hsg-08.choices": [
    "y is directly proportional to z",
    "y is inversely proportional to z",
    "y does not depend on z",
    "It cannot be determined"
   ],
   "q.hsg-08.hints": [
    "Write y in terms of x with constant a, and x in terms of z with constant b.",
    "Substitute x = b/z into y = ax.",
    "Is the product or the quotient of y and z constant?"
   ],
   "q.hsg-08.explain": "y = ax and x = b/z so y = ab/z, i.e. y·z = ab is constant. So y is inversely proportional to z."
  },
  "vi": {}
 }
});
