window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 11,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "Đồ thị của hàm số y = 2x − 6 cắt trục hoành tại A và cắt trục tung tại B. Tính diện tích tam giác OAB (O là gốc tọa độ, đơn vị diện tích).",
    "svg": null,
    "choices": null,
    "answer": 9,
    "hints": [
     "Tại giao điểm với trục hoành, y bằng bao nhiêu? Tìm x.",
     "Tại giao điểm với trục tung, x bằng bao nhiêu? Tìm y.",
     "Tam giác OAB vuông tại đâu? Hai cạnh góc vuông dài bao nhiêu?"
    ],
    "explain": "A: y = 0 ⇒ x = 3, A(3; 0). B: x = 0 ⇒ y = −6, B(0; −6). Tam giác OAB vuông tại O với OA = 3, OB = 6 nên diện tích = 1/2 × 3 × 6 = 9.",
    "tol": 0
   },
   {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "Ba điểm A(−2; 3), B(1; 9) và C(4; t) cùng nằm trên một đường thẳng. Tìm t.",
    "svg": null,
    "choices": null,
    "answer": 15,
    "hints": [
     "Khi đi từ A đến B, x tăng bao nhiêu và y tăng bao nhiêu? Độ dốc là bao nhiêu?",
     "Từ B đến C, x tăng bao nhiêu?",
     "Với cùng độ dốc, y phải tăng bao nhiêu từ B đến C?"
    ],
    "explain": "Độ dốc AB = (9 − 3)/(1 − (−2)) = 2. Từ B đến C, x tăng 3 nên y tăng 2 × 3 = 6, do đó t = 9 + 6 = 15.",
    "tol": 0
   },
   {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "Hai đường thẳng y = 2x + 1 và y = −x + 7 cắt nhau tại điểm M(x₀; y₀). Tính x₀ + y₀.",
    "svg": null,
    "choices": null,
    "answer": 7,
    "hints": [
     "Tại giao điểm, hai giá trị y của hai đường thẳng có quan hệ gì?",
     "Giải 2x + 1 = −x + 7 để tìm x₀.",
     "Thay x₀ vào một phương trình để tìm y₀, rồi cộng."
    ],
    "explain": "2x + 1 = −x + 7 ⇒ 3x = 6 ⇒ x₀ = 2; y₀ = 2·2 + 1 = 5. Vậy x₀ + y₀ = 7.",
    "tol": 0
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "Xe A rời thành phố P lúc 0 giờ với vận tốc 40 km/h. Đúng 1 giờ sau, xe B cũng rời P, đi cùng đường, với vận tốc 60 km/h. Hỏi xe B đuổi kịp xe A vào thời điểm mấy giờ (tính từ lúc xe A xuất phát)?",
    "svg": null,
    "choices": null,
    "answer": 3,
    "hints": [
     "Khi xe B bắt đầu đi thì xe A đã cách P bao xa?",
     "Mỗi giờ xe B rút ngắn khoảng cách đó bao nhiêu km?",
     "Mất bao nhiêu giờ để rút ngắn hết khoảng cách? Cộng thêm 1 giờ xuất phát muộn."
    ],
    "explain": "Khi B xuất phát, A đã đi 40 km. B nhanh hơn 20 km/h nên cần 40 : 20 = 2 giờ để đuổi kịp. Thời điểm là 1 + 2 = 3 giờ. (Hoặc giải 40t = 60(t − 1) ⇒ t = 3.)",
    "tol": 0,
    "unitLabel": "giờ"
   },
   {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "Với mỗi giá trị của k, đường thẳng d: y = (k − 1)x + 2k − 5 đều đi qua một điểm cố định (a; b). Tính a + b.",
    "svg": null,
    "choices": null,
    "answer": -5,
    "hints": [
     "Hãy nhóm các hạng tử chứa k lại: y = k(…) − x − 5. Biểu thức trong ngoặc là gì?",
     "Để điểm (a; b) không phụ thuộc k, biểu thức trong ngoặc phải bằng bao nhiêu?",
     "Từ đó tìm a rồi tính b, cuối cùng cộng a + b."
    ],
    "explain": "y = k(x + 2) − x − 5. Điểm cố định ứng với x + 2 = 0, tức a = −2; khi đó b = −(−2) − 5 = −3. Vậy a + b = −5. (Kiểm tra: k = 1 cho y = −3; k = 2 cho y = x − 1 = −3 tại x = −2.)",
    "tol": 0
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "Đồ thị của một hàm số bậc nhất đi qua hai điểm (0; 4) và (2; 0). Khẳng định nào đúng?",
    "svg": null,
    "choices": [
     "Độ dốc bằng 2 và hàm số tăng",
     "Độ dốc bằng −2 và hàm số giảm",
     "Giao điểm với trục tung là (0; 2)",
     "Phương trình là y = 2x + 4"
    ],
    "answer": 1,
    "hints": [
     "Từ (0; 4) đến (2; 0), x tăng bao nhiêu và y thay đổi thế nào?",
     "Dấu của độ dốc cho biết hàm số tăng hay giảm?",
     "Giao điểm với trục tung nằm ở đâu?"
    ],
    "explain": "Độ dốc = (0 − 4)/(2 − 0) = −2 (âm nên hàm số giảm), cắt trục tung tại 4: y = −2x + 4. Lỗi hay gặp: lấy 'độ dốc = 2' (nhầm hoành độ) hoặc nhầm hệ số tự do với 2."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "So sánh đồ thị (d₁): y = −3x + 1 và (d₂): y = 2x + 1. Khẳng định nào đúng?",
    "svg": null,
    "choices": [
     "d₁ luôn nằm dưới d₂",
     "d₁ luôn nằm trên d₂",
     "d₁ nằm dưới d₂ khi x > 0 và nằm trên d₂ khi x < 0",
     "Hai đường thẳng song song"
    ],
    "answer": 2,
    "hints": [
     "Hai đường thẳng này có điểm chung nào không? Tìm nó.",
     "Thử x = 1 và x = −1: đường nào nằm trên?",
     "Phía hai bên điểm chung, vị trí tương đối có đổi không?"
    ],
    "explain": "−3x + 1 < 2x + 1 ⇔ −5x < 0 ⇔ x > 0. Hai đường cắt nhau tại (0; 1): d₁ nằm dưới d₂ khi x > 0 và nằm trên khi x < 0."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-graphs",
    "source": "hsg",
    "lang": "vi",
    "q": "Đồ thị hàm số y = ax + b (a ≠ 0, b ≠ 0) đi qua các góc phần tư I, II và IV (không đi qua góc phần tư III). Điều kiện đúng là:",
    "svg": null,
    "choices": [
     "a > 0 và b > 0",
     "a < 0 và b > 0",
     "a < 0 và b < 0",
     "a > 0 và b < 0"
    ],
    "answer": 1,
    "hints": [
     "Độ dốc âm thì đường thẳng đi lên hay đi xuống khi x tăng?",
     "Giao điểm với trục tung (0; b) nằm trên hay dưới gốc O nếu đường thẳng đi qua góc phần tư II?",
     "Kết hợp hai dấu của a và b."
    ],
    "explain": "Đường đi từ góc phần tư II qua I rồi xuống IV nghĩa là hàm số giảm (a < 0) và cắt trục tung phía trên gốc (b > 0). Nếu a < 0 và b < 0 thì đường thẳng đi qua các góc phần tư II, III và IV.",
    "why": {
     "q": "Vì sao b phải dương?",
     "choices": [
      "Vì đường thẳng giảm nên cắt trục tung dưới gốc O",
      "Vì đường thẳng đi qua góc phần tư I và II nên cắt trục tung phía trên O",
      "Vì a âm nên b cũng phải dương",
      "Vì b luôn bằng a"
     ],
     "answer": 1
    }
   }
  ]
 },
 "tr": {
  "en": {
   "q.hsg-01.q": "The graph of y = 2x − 6 meets the x-axis at A and the y-axis at B. Find the area of triangle OAB (O is the origin, in square units).",
   "q.hsg-01.hints": [
    "At the point where the graph meets the x-axis, what is y? Find x.",
    "At the point where it meets the y-axis, what is x? Find y.",
    "Where is triangle OAB right-angled? How long are the two perpendicular sides?"
   ],
   "q.hsg-01.explain": "A: y = 0 ⇒ x = 3, so A(3, 0). B: x = 0 ⇒ y = −6, so B(0, −6). Triangle OAB is right-angled at O with OA = 3, OB = 6, so the area = 1/2 × 3 × 6 = 9.",
   "q.hsg-02.q": "Three points A(−2, 3), B(1, 9) and C(4, t) lie on one straight line. Find t.",
   "q.hsg-02.hints": [
    "Going from A to B, how much does x increase and how much does y increase? What is the gradient?",
    "From B to C, how much does x increase?",
    "With the same gradient, how much must y increase from B to C?"
   ],
   "q.hsg-02.explain": "The gradient of AB = (9 − 3)/(1 − (−2)) = 2. From B to C, x increases by 3 so y increases by 2 × 3 = 6, giving t = 9 + 6 = 15.",
   "q.hsg-03.q": "The lines y = 2x + 1 and y = −x + 7 meet at the point M(x₀, y₀). Find x₀ + y₀.",
   "q.hsg-03.hints": [
    "At the intersection, how are the two y-values related?",
    "Solve 2x + 1 = −x + 7 to find x₀.",
    "Substitute x₀ into one equation to get y₀, then add."
   ],
   "q.hsg-03.explain": "2x + 1 = −x + 7 ⇒ 3x = 6 ⇒ x₀ = 2; y₀ = 2·2 + 1 = 5. So x₀ + y₀ = 7.",
   "q.hsg-04.q": "Car A leaves town P at time 0 at 40 km/h. Exactly 1 hour later car B leaves P along the same road at 60 km/h. At what time (in hours after car A set off) does B catch up with A?",
   "q.hsg-04.hints": [
    "When car B sets off, how far from P is car A?",
    "By how many km per hour does B reduce that gap?",
    "How many hours does it take to close the gap? Then add the 1-hour delay."
   ],
   "q.hsg-04.explain": "When B sets off, A is 40 km ahead. B is 20 km/h faster so it needs 40 ÷ 20 = 2 hours. The time is 1 + 2 = 3 hours. (Or solve 40t = 60(t − 1) ⇒ t = 3.)",
   "q.hsg-05.q": "For every value of k, the line d: y = (k − 1)x + 2k − 5 passes through a fixed point (a, b). Find a + b.",
   "q.hsg-05.hints": [
    "Group the terms with k: y = k(…) − x − 5. What is in the bracket?",
    "For the point (a, b) not to depend on k, what must the bracket equal?",
    "Then find a, then b, and finally add a + b."
   ],
   "q.hsg-05.explain": "y = k(x + 2) − x − 5. The fixed point has x + 2 = 0, so a = −2; then b = −(−2) − 5 = −3. So a + b = −5. (Check: k = 1 gives y = −3; k = 2 gives y = x − 1 = −3 at x = −2.)",
   "q.hsg-06.q": "The graph of a linear function passes through the points (0, 4) and (2, 0). Which statement is correct?",
   "q.hsg-06.choices": [
    "The gradient is 2 and the function is increasing",
    "The gradient is −2 and the function is decreasing",
    "The y-intercept is (0, 2)",
    "The equation is y = 2x + 4"
   ],
   "q.hsg-06.hints": [
    "From (0, 4) to (2, 0), how much does x increase and how does y change?",
    "What does the sign of the gradient tell you about increasing or decreasing?",
    "Where is the y-intercept?"
   ],
   "q.hsg-06.explain": "Gradient = (0 − 4)/(2 − 0) = −2 (negative, so the function decreases) and the y-intercept is 4: y = −2x + 4. Common mistakes: taking 'gradient = 2' (the x-value) or confusing the intercept with 2.",
   "q.hsg-07.q": "Compare the graphs (d₁): y = −3x + 1 and (d₂): y = 2x + 1. Which statement is correct?",
   "q.hsg-07.choices": [
    "d₁ is always below d₂",
    "d₁ is always above d₂",
    "d₁ is below d₂ when x > 0 and above d₂ when x < 0",
    "The lines are parallel"
   ],
   "q.hsg-07.hints": [
    "Do the lines have a common point? Find it.",
    "Try x = 1 and x = −1: which line is higher?",
    "Does the relative position change on either side of the common point?"
   ],
   "q.hsg-07.explain": "−3x + 1 < 2x + 1 ⇔ −5x < 0 ⇔ x > 0. The lines meet at (0, 1): d₁ is below d₂ when x > 0 and above when x < 0.",
   "q.hsg-08.why.q": "Why must b be positive?",
   "q.hsg-08.why.choices": [
    "Because a decreasing line meets the y-axis below O",
    "Because passing through quadrants I and II means it meets the y-axis above O",
    "Because a is negative, b must be positive too",
    "Because b always equals a"
   ],
   "q.hsg-08.q": "The graph of y = ax + b (a ≠ 0, b ≠ 0) passes through quadrants I, II and IV (not through quadrant III). The correct condition is:",
   "q.hsg-08.choices": [
    "a > 0 and b > 0",
    "a < 0 and b > 0",
    "a < 0 and b < 0",
    "a > 0 and b < 0"
   ],
   "q.hsg-08.hints": [
    "With a negative gradient, does the line go up or down as x increases?",
    "Is the y-intercept (0, b) above or below O if the line enters quadrant II?",
    "Combine the signs of a and b."
   ],
   "q.hsg-08.explain": "Going from quadrant II through I down to IV means a decreasing function (a < 0) with the y-intercept above the origin (b > 0). If a < 0 and b < 0 the line would pass through quadrants II, III and IV instead."
  },
  "vi": {}
 }
});
