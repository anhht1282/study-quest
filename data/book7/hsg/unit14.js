window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 14,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "khoang-cach-hai-diem",
    "lang": "vi",
    "q": "Cho A(1; 2) và B(7; 10) trên mặt phẳng tọa độ (mỗi đơn vị là 1 cm). Tính độ dài đoạn thẳng AB (cm).",
    "svg": null,
    "choices": null,
    "answer": 10,
    "hints": [
      "Dựng tam giác vuông có AB là cạnh huyền; hai cạnh góc vuông song song với các trục dài bao nhiêu?",
      "Áp dụng định lí Pythagore: AB² = (hiệu hoành độ)² + (hiệu tung độ)².",
      "AB² bằng bao nhiêu? AB là căn bậc hai của số đó."
    ],
    "explain": "Hiệu hoành độ 7 − 1 = 6, hiệu tung độ 10 − 2 = 8. AB² = 6² + 8² = 36 + 64 = 100 ⇒ AB = 10 cm.",
    "unitLabel": "cm",
    "why": null
  },
  {
    "id": "hsg-02", "howto": "Tìm tọa độ của B', rồi nhập tổng hoành độ và tung độ của B' (một số).",
    "type": "num",
    "diff": 3,
    "skill": "tinh-tien",
    "lang": "vi",
    "q": "Phép tịnh tiến biến A(2; −3) thành A'(−1; 4). Phép tịnh tiến đó biến B(5; 5) thành B'. Tính tổng hai tọa độ của B'.",
    "svg": null,
    "choices": null,
    "answer": 14,
    "hints": [
      "Từ A đến A', hoành độ thay đổi bao nhiêu và tung độ thay đổi bao nhiêu? Đó là vectơ tịnh tiến.",
      "Áp dụng cùng thay đổi cho B.",
      "Cộng hoành độ và tung độ của B'."
    ],
    "explain": "Vectơ tịnh tiến: hoành độ −1 − 2 = −3, tung độ 4 − (−3) = 7. B' = (5 − 3; 5 + 7) = (2; 12). Tổng: 2 + 12 = 14.",
    "why": null
  },
  {
    "id": "hsg-03", "howto": "Nhập tổng hoành độ và tung độ của điểm cuối cùng P₂ (một số).",
    "type": "num",
    "diff": 3,
    "skill": "phan-xa-lien-tiep",
    "lang": "vi",
    "q": "Điểm P(7; 2) được lấy đối xứng qua đường thẳng x = 3 được P₁, sau đó P₁ được lấy đối xứng qua đường thẳng y = −1 được P₂. Tính tổng hai tọa độ của P₂.",
    "svg": null,
    "choices": null,
    "answer": -5,
    "hints": [
      "Khi lấy đối xứng qua đường thẳng đứng x = 3, tọa độ nào thay đổi? P₁ cách đường x = 3 bao nhiêu và nằm ở phía nào?",
      "Khi lấy đối xứng qua đường nằm ngang y = −1, tọa độ nào thay đổi?",
      "Tìm P₂ rồi cộng hai tọa độ."
    ],
    "explain": "P cách đường x = 3 một đoạn 4 về bên phải nên P₁ cách 4 về bên trái: P₁(−1; 2). P₁ cách đường y = −1 một đoạn 3 phía trên nên P₂ cách 3 phía dưới: y = −4. P₂(−1; −4), tổng −5.",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "phong-dai-dien-tich",
    "lang": "vi",
    "q": "Một hình tam giác có diện tích 8 cm² được phóng to với hệ số tỉ lệ 2,5. Tính diện tích hình mới (cm²).",
    "svg": null,
    "choices": null,
    "answer": 50,
    "hints": [
      "Khi các độ dài nhân với 2,5, đáy và chiều cao của tam giác đều thay đổi thế nào?",
      "Diện tích phụ thuộc vào tích đáy × chiều cao; vậy nó nhân với hệ số nào?",
      "Tính 8 nhân với hệ số đó."
    ],
    "explain": "Đáy và chiều cao đều nhân 2,5 nên diện tích nhân 2,5² = 6,25. Diện tích mới: 8 × 6,25 = 50 cm².",
    "unitLabel": "cm²",
    "why": null
  },
  {
    "id": "hsg-05", "howto": "Tìm tọa độ a và b của điểm ban đầu P, rồi nhập tích a × b.",
    "type": "num",
    "diff": 3,
    "skill": "xoay-va-doi-xung",
    "lang": "vi",
    "q": "Điểm P(a; b) được quay 90° ngược chiều kim đồng hồ quanh gốc O (phép quay biến (x; y) thành (−y; x)), sau đó lấy đối xứng qua trục hoành, được điểm Q(−3; −5). Tính a × b.",
    "svg": null,
    "choices": null,
    "answer": 15,
    "hints": [
      "Đối xứng qua trục hoành biến (x; y) thành điểm nào? Dùng ngược lại để tìm điểm trước phép đối xứng.",
      "Điểm đó là ảnh của P qua phép quay (x; y) → (−y; x). Từ đó suy ra a, b.",
      "Kiểm tra bằng cách thực hiện lại hai phép biến đổi lên P."
    ],
    "explain": "Trước phép đối xứng qua Ox, điểm là (−3; 5). Phép quay cho (−b; a) = (−3; 5) ⇒ b = 3, a = 5. Thử lại: (5; 3) → (−3; 5) → (−3; −5) ✓. a × b = 15.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "he-so-ti-le-dien-tich",
    "lang": "vi",
    "q": "Một hình được phóng to với hệ số tỉ lệ 3. Phát biểu nào sau đây đúng?",
    "svg": null,
    "choices": [
      "Diện tích gấp 3 lần",
      "Chu vi gấp 3 lần, diện tích gấp 9 lần",
      "Chu vi gấp 9 lần",
      "Các góc gấp 3 lần"
    ],
    "answer": 1,
    "hints": [
      "Các độ dài thay đổi thế nào? Một hình vuông cạnh 1 có diện tích bao nhiêu và sau phóng to thì bao nhiêu?",
      "Diện tích gấp bao nhiêu lần, chu vi gấp bao nhiêu lần?",
      "Các góc có đổi không?"
    ],
    "explain": "Độ dài (chu vi) gấp 3 lần, diện tích gấp 3² = 9 lần, các góc không đổi. Sai lầm: nghĩ diện tích cũng gấp 3 lần. Thử với hình vuông cạnh 1 thành cạnh 3: diện tích 1 thành 9.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "tim-loi-khoang-cach",
    "lang": "vi",
    "q": "Bình tính khoảng cách giữa A(1; 1) và B(4; 5) như sau: \"Đi sang phải 3 và lên trên 4, nên AB = 3 + 4 = 7.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Bình đúng: AB = 7",
      "Bình sai: AB = 12",
      "Bình sai: 3 và 4 là hai cạnh góc vuông, AB là cạnh huyền nên AB = 5",
      "Bình sai: AB = 1"
    ],
    "answer": 2,
    "hints": [
      "Đường đi \"sang phải rồi lên trên\" có phải đoạn thẳng AB không?",
      "Hai bước 3 và 4 là hai cạnh của hình nào? AB là cạnh nào của hình đó?",
      "Dùng định lí Pythagore để tính AB."
    ],
    "explain": "3 và 4 là hai cạnh góc vuông, còn AB là cạnh huyền nên AB = √(3² + 4²) = 5, nhỏ hơn 7. Sai lầm: cộng hai độ dài ngang và dọc như đường đi theo các ô lưới, không phải đoạn thẳng.",
    "why": null
  },
  {
    "id": "hsg-08", "howto": "M nằm trên trục hoành nên tung độ của M bằng 0. Chỉ nhập hoành độ của M.",
    "type": "num",
    "diff": 3,
    "skill": "diem-cach-deu",
    "lang": "vi",
    "q": "Tìm hoành độ của điểm M nằm trên trục hoành và cách đều hai điểm A(1; 3) và B(5; 1).",
    "svg": null,
    "choices": null,
    "answer": 2,
    "hints": [
      "Điểm M trên trục hoành có tọa độ dạng nào? Viết MA² và MB² bằng Pythagore.",
      "M cách đều A, B nghĩa là MA² = MB². Lập phương trình theo x.",
      "Giải phương trình và kiểm tra bằng cách tính MA và MB."
    ],
    "explain": "M(x; 0). MA² = (x − 1)² + 3², MB² = (x − 5)² + 1². MA² = MB² ⇒ x² − 2x + 10 = x² − 10x + 26 ⇒ 8x = 16 ⇒ x = 2. Kiểm tra: MA² = 1 + 9 = 10, MB² = 9 + 1 = 10 ✓.",
    "why": {
      "q": "Tập hợp các điểm cách đều hai điểm A và B là:",
      "choices": [
        "đường trung trực của đoạn AB",
        "đường thẳng đi qua A và B",
        "đường tròn đường kính AB",
        "đường thẳng song song với AB đi qua trung điểm của AB"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-08.howto": "M lies on the x-axis, so its y-coordinate is 0. Enter only the x-coordinate of M.",
    "q.hsg-05.howto": "Find the coordinates a and b of the starting point P, then enter the product a × b.",
    "q.hsg-03.howto": "Enter the sum of the x- and y-coordinates of the final point P₂ (one number).",
    "q.hsg-02.howto": "Find the coordinates of B', then enter the sum of its x- and y-coordinates (one number).",
  "q.hsg-01.q": "A(1, 2) and B(7, 10) are points on a coordinate grid (each unit is 1 cm). Find the length of AB (cm).",
  "q.hsg-01.hints": [
    "Draw a right-angled triangle with AB as hypotenuse; how long are the two legs parallel to the axes?",
    "Use Pythagoras' theorem: AB² = (difference in x)² + (difference in y)².",
    "What is AB²? AB is the square root of that number."
  ],
  "q.hsg-01.explain": "Difference in x: 7 − 1 = 6, difference in y: 10 − 2 = 8. AB² = 6² + 8² = 36 + 64 = 100, so AB = 10 cm.",
  "q.hsg-02.q": "A translation maps A(2, −3) to A'(−1, 4). The same translation maps B(5, 5) to B'. Find the sum of the two coordinates of B'.",
  "q.hsg-02.hints": [
    "From A to A', how much does the x-coordinate change and how much does the y-coordinate change? That is the translation vector.",
    "Apply the same changes to B.",
    "Add the x- and y-coordinates of B'."
  ],
  "q.hsg-02.explain": "Translation: x changes by −1 − 2 = −3, y changes by 4 − (−3) = 7. B' = (5 − 3, 5 + 7) = (2, 12). Sum: 2 + 12 = 14.",
  "q.hsg-03.q": "Point P(7, 2) is reflected in the line x = 3 to give P₁, and then P₁ is reflected in the line y = −1 to give P₂. Find the sum of the two coordinates of P₂.",
  "q.hsg-03.hints": [
    "When reflecting in the vertical line x = 3, which coordinate changes? How far is P from x = 3 and on which side?",
    "When reflecting in the horizontal line y = −1, which coordinate changes?",
    "Find P₂, then add its two coordinates."
  ],
  "q.hsg-03.explain": "P is 4 units to the right of x = 3, so P₁ is 4 units to the left: P₁(−1, 2). P₁ is 3 units above y = −1, so P₂ is 3 units below: y = −4. P₂ is (−1, −4), sum −5.",
  "q.hsg-04.q": "A triangle with area 8 cm² is enlarged with scale factor 2.5. Find the area of the new triangle (cm²).",
  "q.hsg-04.hints": [
    "When all lengths are multiplied by 2.5, what happens to the base and the height of the triangle?",
    "The area depends on base × height; so by what factor is it multiplied?",
    "Work out 8 times that factor."
  ],
  "q.hsg-04.explain": "Base and height are both multiplied by 2.5, so the area is multiplied by 2.5² = 6.25. New area: 8 × 6.25 = 50 cm².",
  "q.hsg-05.q": "Point P(a, b) is rotated 90° anticlockwise about the origin O (the rotation maps (x, y) to (−y, x)), then reflected in the x-axis to give Q(−3, −5). Work out a × b.",
  "q.hsg-05.hints": [
    "Reflecting in the x-axis maps (x, y) to which point? Work backwards to find the point before the reflection.",
    "That point is the image of P under (x, y) → (−y, x). Use it to find a and b.",
    "Check by applying the two transformations to P."
  ],
  "q.hsg-05.explain": "Before the reflection in the x-axis, the point is (−3, 5). The rotation gives (−b, a) = (−3, 5) ⇒ b = 3, a = 5. Check: (5, 3) → (−3, 5) → (−3, −5) ✓. a × b = 15.",
  "q.hsg-06.q": "A shape is enlarged with scale factor 3. Which statement is true?",
  "q.hsg-06.hints": [
    "How do the lengths change? A square of side 1 has what area, and what after enlargement?",
    "By what factor are the area and the perimeter multiplied?",
    "Do the angles change?"
  ],
  "q.hsg-06.explain": "Lengths (perimeter) are multiplied by 3, area by 3² = 9, and angles stay the same. Common mistake: thinking area is also 3 times bigger. Test with a square of side 1 becoming side 3: area 1 becomes 9.",
  "q.hsg-06.choices": [
    "Its area is 3 times bigger",
    "Its perimeter is 3 times bigger and its area is 9 times bigger",
    "Its perimeter is 9 times bigger",
    "Its angles are 3 times bigger"
  ],
  "q.hsg-07.q": "Bình works out the distance between A(1, 1) and B(4, 5) like this: \"Go 3 right and 4 up, so AB = 3 + 4 = 7.\" Which comment is correct?",
  "q.hsg-07.hints": [
    "Is the path \"right, then up\" the straight line AB?",
    "The steps 3 and 4 are two sides of which shape? Which side of it is AB?",
    "Use Pythagoras' theorem to find AB."
  ],
  "q.hsg-07.explain": "3 and 4 are the legs and AB is the hypotenuse, so AB = √(3² + 4²) = 5, which is less than 7. Mistake: adding the horizontal and vertical lengths, as if walking along grid lines, instead of finding the straight line.",
  "q.hsg-07.choices": [
    "Bình is right: AB = 7",
    "Bình is wrong: AB = 12",
    "Bình is wrong: 3 and 4 are the legs of a right-angled triangle and AB is the hypotenuse, so AB = 5",
    "Bình is wrong: AB = 1"
  ],
  "q.hsg-08.q": "Find the x-coordinate of the point M that lies on the x-axis and is the same distance from A(1, 3) and B(5, 1).",
  "q.hsg-08.hints": [
    "What form do the coordinates of a point on the x-axis have? Write MA² and MB² using Pythagoras.",
    "M equidistant from A and B means MA² = MB². Write an equation in x.",
    "Solve the equation and check by computing MA and MB."
  ],
  "q.hsg-08.explain": "M is (x, 0). MA² = (x − 1)² + 3², MB² = (x − 5)² + 1². MA² = MB² ⇒ x² − 2x + 10 = x² − 10x + 26 ⇒ 8x = 16 ⇒ x = 2. Check: MA² = 1 + 9 = 10, MB² = 9 + 1 = 10 ✓.",
  "q.hsg-08.why.q": "The set of all points equally distant from A and B is:",
  "q.hsg-08.why.choices": [
    "the perpendicular bisector of AB",
    "the line through A and B",
    "the circle with diameter AB",
    "the line parallel to AB through its midpoint"
  ]
}, vi: {} }
});
