window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 11,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "duong-thang-qua-2-diem",
    "lang": "vi",
    "q": "Đồ thị của hàm số bậc nhất y = ax + b đi qua hai điểm A(1; 5) và B(4; 11). Điểm M thuộc đồ thị có hoành độ 10. Tìm tung độ của M.",
    "svg": null,
    "choices": null,
    "answer": 23,
    "hints": [
      "Khi hoành độ tăng từ 1 lên 4 thì tung độ tăng bao nhiêu? Từ đó tìm hệ số a.",
      "Thay tọa độ điểm A vào y = ax + b để tìm b.",
      "Thay x = 10 vào hàm số vừa tìm."
    ],
    "explain": "Hoành độ tăng 3 thì tung độ tăng 11 − 5 = 6, nên a = 2. Từ 5 = 2·1 + b ⇒ b = 3. Hàm số y = 2x + 3; với x = 10 thì y = 23.",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "dien-tich-hcn-toa-do",
    "lang": "vi",
    "q": "Bốn đường thẳng x = −3, x = 5, y = 2 và y = −4 cắt nhau tạo thành một hình chữ nhật. Một đường chéo chia hình chữ nhật thành hai tam giác bằng nhau. Tính diện tích mỗi tam giác (đơn vị diện tích, mỗi ô vuông tọa độ có cạnh 1).",
    "svg": null,
    "choices": null,
    "answer": 24,
    "hints": [
      "Chiều rộng của hình chữ nhật là hiệu của hai hoành độ nào?",
      "Chiều cao là hiệu của hai tung độ nào?",
      "Diện tích hình chữ nhật chia 2 là diện tích mỗi tam giác. Tính xem."
    ],
    "explain": "Chiều rộng: 5 − (−3) = 8. Chiều cao: 2 − (−4) = 6. Diện tích hình chữ nhật 8 × 6 = 48, mỗi tam giác 48 : 2 = 24.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "giao-diem-hai-duong",
    "lang": "vi",
    "q": "Hai đường thẳng y = 2x − 1 và y = −x + 8 cắt nhau tại điểm I(m; n). Tính m + n.",
    "svg": null,
    "choices": null,
    "answer": 8,
    "hints": [
      "Tại giao điểm, hai giá trị y bằng nhau. Hãy lập phương trình theo x.",
      "Giải phương trình để được m, rồi thay vào một trong hai hàm số để được n.",
      "Kiểm tra điểm tìm được có thỏa mãn cả hai hàm số không, rồi cộng m + n."
    ],
    "explain": "Giao điểm: 2x − 1 = −x + 8 ⇒ 3x = 9 ⇒ x = 3, y = 2·3 − 1 = 5. Thử vào hàm số thứ hai: −3 + 8 = 5 ✓. Vậy m + n = 3 + 5 = 8.",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "he-so-goc-giao-diem",
    "lang": "vi",
    "q": "Điểm K là giao điểm của hai đường thẳng x = 2 và y = −5. Đường thẳng y = ax + 3 đi qua K. Tìm a.",
    "svg": null,
    "choices": null,
    "answer": -4,
    "hints": [
      "Tọa độ của K là gì (đường x = 2 cho hoành độ, đường y = −5 cho tung độ)?",
      "Thay tọa độ K vào y = ax + 3.",
      "Giải phương trình bậc nhất theo a."
    ],
    "explain": "K(2; −5). Thay vào: −5 = a·2 + 3 ⇒ 2a = −8 ⇒ a = −4.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "do-thi-chuyen-dong",
    "lang": "vi",
    "q": "Ô tô A xuất phát lúc 0 giờ với vận tốc 60 km/h. Sau 1,5 giờ, ô tô B xuất phát từ cùng nơi, cùng đường, cùng chiều với vận tốc 90 km/h. Ô tô B đuổi kịp ô tô A sau bao nhiêu giờ tính từ lúc ô tô A xuất phát?",
    "svg": null,
    "choices": null,
    "answer": 4.5,
    "hints": [
      "Viết quãng đường của A theo thời gian t (giờ) kể từ lúc A xuất phát. Còn B đã đi trong bao lâu khi đó?",
      "Hai xe gặp nhau khi hai đồ thị quãng đường – thời gian cắt nhau, tức hai quãng đường bằng nhau. Lập phương trình.",
      "Giải phương trình 60t = 90(t − 1,5)."
    ],
    "explain": "A: s = 60t. B: s = 90(t − 1,5). Gặp nhau: 60t = 90t − 135 ⇒ 30t = 135 ⇒ t = 4,5 giờ.",
    "tol": 0.01,
    "unitLabel": "giờ",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "duong-song-song-truc",
    "lang": "vi",
    "q": "Điểm A nằm trên đường thẳng x = 3, điểm B nằm trên đường thẳng y = 3. Phát biểu nào luôn đúng?",
    "svg": null,
    "choices": [
      "A và B luôn là hai điểm khác nhau",
      "Hoành độ của A bằng tung độ của B",
      "AB luôn vuông góc với trục Ox",
      "Tung độ của A bằng 3"
    ],
    "answer": 1,
    "hints": [
      "Viết tọa độ tổng quát của A (hoành độ cố định, tung độ tự do) và của B.",
      "Hãy thử vài cặp A, B cụ thể, kể cả khi A trùng B, để loại các phát biểu sai.",
      "Phát biểu nào chỉ dựa vào phần cố định của tọa độ?"
    ],
    "explain": "A(3; p) và B(q; 3) với p, q bất kỳ. Hoành độ của A luôn là 3 và tung độ của B luôn là 3 nên chúng luôn bằng nhau. Các phát biểu kia sai: A, B có thể trùng nhau tại (3; 3); AB không luôn vuông góc với Ox; tung độ của A là p tùy ý.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "tim-loi-sai-do-thi",
    "lang": "vi",
    "q": "Hà nói: \"Hai đường thẳng y = 2x + 1 và y = 2x − 5 đều đi lên về bên phải nên chắc chắn chúng sẽ cắt nhau.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Hà đúng: hai đường cùng đi lên thì cắt nhau",
      "Hà sai: hai đường cùng hệ số góc 2 nên song song, không bao giờ cắt nhau",
      "Hà sai: chúng cắt nhau tại (0; 1)",
      "Hà sai: hai đường là một"
    ],
    "answer": 1,
    "hints": [
      "Nếu hai đường cắt nhau thì tồn tại x để 2x + 1 = 2x − 5. Điều đó có xảy ra không?",
      "Hai đường có cùng độ dốc thì chúng nằm ở vị trí tương đối nào?",
      "Điểm khác nhau giữa hai đường là hệ số nào?"
    ],
    "explain": "2x + 1 = 2x − 5 ⇔ 1 = −5, vô lý, nên không có giao điểm. Cùng hệ số góc 2 nên hai đường song song, chỉ khác nhau ở tung độ gốc (1 và −5). Lỗi của Hà: \"cùng đi lên\" không có nghĩa là cắt nhau.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "dien-tich-tam-giac-truc",
    "lang": "vi",
    "q": "Đường thẳng y = −2x + k (với k > 0) cắt trục hoành tại A và cắt trục tung tại B. Tam giác OAB (O là gốc tọa độ) có diện tích 25. Tìm k.",
    "svg": null,
    "choices": null,
    "answer": 10,
    "hints": [
      "B có tọa độ thế nào theo k (cho x = 0)? A có tọa độ thế nào (cho y = 0)?",
      "Tam giác OAB vuông tại O, hai cạnh góc vuông là OA và OB. Viết diện tích theo k.",
      "Giải phương trình k²/4 = 25 với k > 0."
    ],
    "explain": "B(0; k), và y = 0 ⇒ x = k/2 nên A(k/2; 0). Diện tích = ½ · (k/2) · k = k²/4 = 25 ⇒ k² = 100 ⇒ k = 10 (vì k > 0).",
    "why": {
      "q": "Vì sao đường thẳng cắt trục tung tại điểm (0; k)?",
      "choices": [
        "Vì trên trục tung x = 0 nên y = −2·0 + k = k",
        "Vì hệ số góc là −2",
        "Vì k luôn dương",
        "Vì đường thẳng đi qua gốc tọa độ"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "The graph of the linear function y = ax + b passes through A(1, 5) and B(4, 11). The point M lies on the graph and has x-coordinate 10. Find the y-coordinate of M.",
  "q.hsg-01.hints": [
    "When the x-coordinate goes from 1 to 4, by how much does the y-coordinate increase? Use this to find the gradient a.",
    "Substitute the coordinates of A into y = ax + b to find b.",
    "Substitute x = 10 into the function you found."
  ],
  "q.hsg-01.explain": "x increases by 3 while y increases by 11 − 5 = 6, so a = 2. From 5 = 2·1 + b we get b = 3. The function is y = 2x + 3; for x = 10, y = 23.",
  "q.hsg-02.q": "The four lines x = −3, x = 5, y = 2 and y = −4 form a rectangle. A diagonal splits the rectangle into two equal triangles. Find the area of each triangle (in square units, each coordinate square has side 1).",
  "q.hsg-02.hints": [
    "The width of the rectangle is the difference between which two x-values?",
    "The height is the difference between which two y-values?",
    "Half of the rectangle's area is the area of each triangle. Work it out."
  ],
  "q.hsg-02.explain": "Width: 5 − (−3) = 8. Height: 2 − (−4) = 6. Rectangle area 8 × 6 = 48, each triangle 48 ÷ 2 = 24.",
  "q.hsg-03.q": "The lines y = 2x − 1 and y = −x + 8 meet at the point I(m, n). Work out m + n.",
  "q.hsg-03.hints": [
    "At the intersection the two y-values are equal. Write an equation in x.",
    "Solve it to get m, then substitute into either function to get n.",
    "Check that the point satisfies both functions, then add m + n."
  ],
  "q.hsg-03.explain": "Intersection: 2x − 1 = −x + 8 ⇒ 3x = 9 ⇒ x = 3, y = 2·3 − 1 = 5. Check in the second function: −3 + 8 = 5 ✓. So m + n = 3 + 5 = 8.",
  "q.hsg-04.q": "K is the point where the lines x = 2 and y = −5 meet. The line y = ax + 3 passes through K. Find a.",
  "q.hsg-04.hints": [
    "What are the coordinates of K (the line x = 2 gives the x-coordinate, y = −5 the y-coordinate)?",
    "Substitute the coordinates of K into y = ax + 3.",
    "Solve the linear equation for a."
  ],
  "q.hsg-04.explain": "K is (2, −5). Substitute: −5 = a·2 + 3 ⇒ 2a = −8 ⇒ a = −4.",
  "q.hsg-05.q": "Car A leaves at time 0 at 60 km/h. After 1.5 hours, car B leaves the same place on the same road, in the same direction, at 90 km/h. How many hours after car A set off does car B catch up with car A?",
  "q.hsg-05.hints": [
    "Write A's distance in terms of the time t (hours) since A set off. For how long has B been travelling at that moment?",
    "The cars meet where their distance–time graphs cross, i.e. the distances are equal. Write an equation.",
    "Solve 60t = 90(t − 1.5)."
  ],
  "q.hsg-05.explain": "A: s = 60t. B: s = 90(t − 1.5). They meet when 60t = 90t − 135 ⇒ 30t = 135 ⇒ t = 4.5 hours.",
  "q.hsg-06.q": "Point A lies on the line x = 3 and point B lies on the line y = 3. Which statement is always true?",
  "q.hsg-06.hints": [
    "Write general coordinates for A (fixed x, free y) and for B.",
    "Try a few specific pairs A, B, including A = B, to eliminate false statements.",
    "Which statement relies only on the fixed parts of the coordinates?"
  ],
  "q.hsg-06.explain": "A is (3, p) and B is (q, 3) with p and q arbitrary. The x-coordinate of A is always 3 and the y-coordinate of B is always 3, so they are always equal. The others are false: A and B can coincide at (3, 3); AB is not always perpendicular to the x-axis; the y-coordinate of A is any p.",
  "q.hsg-06.choices": [
    "A and B are always different points",
    "The x-coordinate of A equals the y-coordinate of B",
    "AB is always perpendicular to the x-axis",
    "The y-coordinate of A is 3"
  ],
  "q.hsg-07.q": "Hà says: \"The lines y = 2x + 1 and y = 2x − 5 both go up to the right, so they will definitely cross.\" Which comment is correct?",
  "q.hsg-07.hints": [
    "If the lines cross, there is an x with 2x + 1 = 2x − 5. Can that happen?",
    "What is the relative position of two lines with the same steepness?",
    "Which coefficient makes the two lines different?"
  ],
  "q.hsg-07.explain": "2x + 1 = 2x − 5 would give 1 = −5, impossible, so there is no intersection. The same gradient 2 means the lines are parallel and differ only in the y-intercept (1 and −5). Hà's mistake: \"both rise\" does not mean they cross.",
  "q.hsg-07.choices": [
    "Hà is right: any two rising lines cross",
    "Hà is wrong: both lines have gradient 2, so they are parallel and never meet",
    "Hà is wrong: they cross at (0, 1)",
    "Hà is wrong: the two lines are the same line"
  ],
  "q.hsg-08.q": "The line y = −2x + k (with k > 0) meets the x-axis at A and the y-axis at B. Triangle OAB (O is the origin) has area 25. Find k.",
  "q.hsg-08.hints": [
    "What are the coordinates of B in terms of k (put x = 0)? And of A (put y = 0)?",
    "Triangle OAB is right-angled at O with legs OA and OB. Write its area in terms of k.",
    "Solve k²/4 = 25 with k > 0."
  ],
  "q.hsg-08.explain": "B is (0, k), and y = 0 gives x = k/2, so A is (k/2, 0). Area = ½ · (k/2) · k = k²/4 = 25 ⇒ k² = 100 ⇒ k = 10 (since k > 0).",
  "q.hsg-08.why.q": "Why does the line meet the y-axis at the point (0, k)?",
  "q.hsg-08.why.choices": [
    "Because on the y-axis x = 0, so y = −2·0 + k = k",
    "Because the gradient is −2",
    "Because k is always positive",
    "Because the line passes through the origin"
  ]
}, vi: {} }
});
