window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 8,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "polygon-interior-sum",
    "source": "hsg",
    "lang": "vi",
    "q": "Tổng của tất cả các góc trong của một đa giác lồi, trừ đi một góc trong của nó, bằng 2 000°. Hỏi đa giác đó có bao nhiêu cạnh?",
    "svg": null,
    "choices": null,
    "answer": 14,
    "hints": [
      "Tổng các góc trong của đa giác lồi n cạnh bằng bao nhiêu? Nó phải là bội của số nào?",
      "Một góc trong của đa giác lồi nằm trong khoảng nào (lớn hơn 0° và nhỏ hơn mấy độ)?",
      "Vậy tổng các góc trong nằm trong khoảng nào? Tìm bội của 180° trong khoảng đó."
    ],
    "explain": "Gọi tổng các góc trong là S = (n − 2) × 180° và góc bị trừ là x với 0° < x < 180°. Ta có S = 2 000° + x nên 2 000° < S < 2 180°. Bội của 180° trong khoảng này chỉ có 2 160° = 12 × 180°, tức n − 2 = 12 ⇒ n = 14 (khi đó x = 160°). Đa giác có 14 cạnh.",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "diagonals-change",
    "source": "hsg",
    "lang": "vi",
    "q": "Khi tăng số cạnh của một đa giác lồi thêm 3 cạnh thì số đường chéo tăng thêm 27. Hỏi đa giác ban đầu có bao nhiêu cạnh?",
    "svg": null,
    "choices": null,
    "answer": 9,
    "hints": [
      "Đa giác lồi n cạnh có bao nhiêu đường chéo (công thức theo n)?",
      "Viết số đường chéo của đa giác (n + 3) cạnh rồi trừ đi số đường chéo của đa giác n cạnh.",
      "Hiệu đó bằng 27: giải phương trình để tìm n."
    ],
    "explain": "Số đường chéo của đa giác n cạnh là n(n − 3) ÷ 2. Với (n + 3) cạnh: (n + 3)n ÷ 2. Hiệu: [(n + 3)n − n(n − 3)] ÷ 2 = (6n) ÷ 2 = 3n. Từ 3n = 27 ⇒ n = 9. Kiểm tra: 9 cạnh có 27 đường chéo; 12 cạnh có 54, hơn 27.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "wheel-revolutions",
    "source": "hsg",
    "lang": "vi",
    "q": "Một xe có bánh trước bán kính 30 cm và bánh sau bán kính 45 cm. Khi xe đi một quãng đường nào đó, bánh trước quay nhiều hơn bánh sau 25 vòng. Hỏi bánh sau đã quay bao nhiêu vòng? (Các bánh lăn không trượt.)",
    "svg": null,
    "choices": null,
    "answer": 50,
    "hints": [
      "Mỗi vòng, bánh trước và bánh sau đi được quãng đường bằng bao nhiêu (chu vi, theo π)?",
      "Gọi số vòng của bánh sau là N. Viết số vòng của bánh trước và quãng đường theo mỗi bánh.",
      "Quãng đường theo hai bánh phải bằng nhau: lập và giải phương trình."
    ],
    "explain": "Chu vi bánh trước 2π × 30 = 60π (cm), bánh sau 2π × 45 = 90π (cm). Gọi N là số vòng bánh sau thì bánh trước quay N + 25 vòng. Quãng đường như nhau: (N + 25) × 60π = N × 90π ⇒ 60N + 1 500 = 90N ⇒ N = 50. Bánh sau quay 50 vòng (bánh trước 75 vòng).",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "prism-euler",
    "source": "hsg",
    "lang": "vi",
    "q": "Một hình lăng trụ đứng có đáy là đa giác n cạnh. Tổng số đỉnh, số cạnh và số mặt của hình lăng trụ này bằng 62. Tìm n.",
    "svg": null,
    "choices": null,
    "answer": 10,
    "hints": [
      "Lăng trụ có đáy n cạnh thì có bao nhiêu đỉnh? Bao nhiêu cạnh (đáy và cạnh bên)?",
      "Số mặt của lăng trụ gồm những mặt nào? Có bao nhiêu mặt?",
      "Cộng ba số theo n, đặt bằng 62 rồi giải."
    ],
    "explain": "Lăng trụ đáy n cạnh có 2n đỉnh, 3n cạnh (2n cạnh đáy + n cạnh bên) và n + 2 mặt (2 đáy + n mặt bên). Tổng: 2n + 3n + (n + 2) = 6n + 2 = 62 ⇒ n = 10. (Kiểm tra công thức Euler: 20 − 30 + 12 = 2.)",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "cuboid-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Ba kích thước của một hình hộp chữ nhật tỉ lệ với 1 : 2 : 3 và thể tích của nó bằng 48 cm³. Tính diện tích toàn phần của hình hộp (cm²).",
    "svg": null,
    "choices": null,
    "answer": 88,
    "hints": [
      "Gọi các kích thước là k, 2k, 3k. Thể tích theo k bằng bao nhiêu?",
      "Giải k³ để tìm k, rồi tìm ba kích thước cụ thể.",
      "Diện tích toàn phần bằng 2 lần tổng ba diện tích mặt khác nhau. Tính."
    ],
    "explain": "Thể tích: k × 2k × 3k = 6k³ = 48 ⇒ k³ = 8 ⇒ k = 2. Các kích thước 2, 4, 6 cm. Diện tích toàn phần = 2(2×4 + 2×6 + 4×6) = 2(8 + 12 + 24) = 88 cm².",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "quadrilateral-conditions",
    "source": "hsg",
    "lang": "vi",
    "q": "Khẳng định nào sau đây luôn đúng?",
    "svg": null,
    "choices": [
      "Hình thoi có hai đường chéo bằng nhau là hình vuông.",
      "Tứ giác có hai đường chéo vuông góc với nhau là hình thoi.",
      "Tứ giác có hai cạnh đối bằng nhau là hình bình hành.",
      "Hình thang có hai cạnh bên bằng nhau là hình thang cân."
    ],
    "answer": 0,
    "hints": [
      "Với mỗi phương án sai, thử vẽ một phản ví dụ. Với phương án B, em có thể vẽ tứ giác «hình diều» không?",
      "Với phương án D, hình bình hành (không phải hình chữ nhật) có là hình thang với hai cạnh bên bằng nhau không?",
      "Hình thoi có hai đường chéo bằng nhau thì có bốn góc như thế nào?"
    ],
    "explain": "A đúng: hình thoi có hai đường chéo bằng nhau thì là hình chữ nhật (một hình bình hành có hai đường chéo bằng nhau) và có bốn cạnh bằng nhau, nên là hình vuông. B sai: hình diều có hai đường chéo vuông góc nhưng không phải hình thoi. C sai: hình thang cân có hai cạnh bên (đối nhau) bằng nhau nhưng hai cạnh bên đó không song song. D sai: hình bình hành không phải hình chữ nhật có hai cạnh bên bằng nhau nhưng không phải hình thang cân.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "exterior-angle-sum",
    "source": "hsg",
    "lang": "vi",
    "q": "Bạn Hà nói: «Tổng các góc ngoài (mỗi đỉnh một góc ngoài) của đa giác lồi n cạnh là (n − 2) × 180° nên đa giác càng nhiều cạnh thì tổng góc ngoài càng lớn.» Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Hà đúng, vì công thức (n − 2) × 180° dùng cho mọi loại góc.",
      "Hà sai: tổng các góc ngoài của đa giác lồi luôn bằng 360°, không phụ thuộc n.",
      "Hà sai: tổng các góc ngoài bằng 180° × n.",
      "Hà sai: tổng các góc ngoài bằng 180° với mọi đa giác lồi."
    ],
    "answer": 1,
    "hints": [
      "Một tam giác có tổng các góc ngoài (mỗi đỉnh một góc) bằng bao nhiêu? Một hình vuông thì sao?",
      "Mỗi góc ngoài bù với góc trong tại cùng đỉnh. Tổng của n cặp (trong + ngoài) bằng bao nhiêu?",
      "Lấy tổng đó trừ đi tổng các góc trong (n − 2) × 180°."
    ],
    "explain": "Tổng (góc trong + góc ngoài) ở n đỉnh là n × 180°. Tổng góc trong là (n − 2) × 180° nên tổng góc ngoài = n × 180° − (n − 2) × 180° = 360°. Kiểm tra: tam giác đều có ba góc ngoài 120° (tổng 360°); hình vuông có bốn góc ngoài 90° (tổng 360°). Hà nhầm tổng góc trong với tổng góc ngoài.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "perimeter-reshape",
    "source": "hsg",
    "lang": "vi",
    "q": "Một sợi dây thép dài 88 cm được uốn thành một hình vuông. Sau đó người ta duỗi thẳng ra và uốn lại thành một đường tròn (lấy π = 22/7). Đường kính của đường tròn lớn hơn cạnh hình vuông bao nhiêu xăng-ti-mét?",
    "svg": null,
    "choices": null,
    "answer": 6,
    "hints": [
      "Cạnh hình vuông bằng bao nhiêu khi chu vi là 88 cm?",
      "Chu vi đường tròn bằng π nhân đường kính. Từ chu vi 88 cm, tìm đường kính.",
      "Trừ cạnh hình vuông khỏi đường kính."
    ],
    "explain": "Cạnh hình vuông: 88 ÷ 4 = 22 cm. Đường kính đường tròn d = chu vi ÷ π = 88 ÷ (22/7) = 88 × 7 ÷ 22 = 28 cm. Chênh lệch: 28 − 22 = 6 cm.",
    "why": {
      "q": "Vì sao với cùng chu vi 88 cm, đường kính vòng tròn (28 cm) lại lớn hơn cạnh hình vuông (22 cm)?",
      "choices": [
        "Vì chu vi hình tròn bằng π lần đường kính còn chu vi hình vuông bằng 4 lần cạnh, mà π < 4 nên cùng chu vi thì đường kính phải lớn hơn cạnh.",
        "Vì hình tròn luôn có diện tích nhỏ hơn hình vuông cùng chu vi.",
        "Vì đường kính luôn bằng cạnh hình vuông cộng 6 cm.",
        "Vì π lớn hơn 4."
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "The sum of all the interior angles of a convex polygon, minus one of its interior angles, is 2 000°. How many sides does the polygon have?",
  "q.hsg-01.hints": [
    "What is the sum of the interior angles of a convex n-sided polygon? It must be a multiple of what?",
    "Between which values does one interior angle of a convex polygon lie (greater than 0° and less than how many degrees)?",
    "So the sum of the interior angles lies in what interval? Find the multiple of 180° in it."
  ],
  "q.hsg-01.explain": "Let the sum of the interior angles be S = (n − 2) × 180° and the subtracted angle x with 0° < x < 180°. Then S = 2 000° + x, so 2 000° < S < 2 180°. The only multiple of 180° in this interval is 2 160° = 12 × 180°, so n − 2 = 12 ⇒ n = 14 (and x = 160°). The polygon has 14 sides.",
  "q.hsg-02.q": "When the number of sides of a convex polygon is increased by 3, the number of diagonals increases by 27. How many sides did the original polygon have?",
  "q.hsg-02.hints": [
    "How many diagonals does a convex n-sided polygon have (formula in n)?",
    "Write the number of diagonals of the (n + 3)-sided polygon and subtract the number for the n-sided polygon.",
    "That difference equals 27: solve the equation to find n."
  ],
  "q.hsg-02.explain": "A polygon with n sides has n(n − 3) ÷ 2 diagonals. With (n + 3) sides: (n + 3)n ÷ 2. Difference: [(n + 3)n − n(n − 3)] ÷ 2 = (6n) ÷ 2 = 3n. From 3n = 27 ⇒ n = 9. Check: 9 sides have 27 diagonals; 12 sides have 54, which is 27 more.",
  "q.hsg-03.q": "A vehicle has front wheels of radius 30 cm and rear wheels of radius 45 cm. Over a certain distance the front wheel turns 25 more times than the rear wheel. How many times does the rear wheel turn? (The wheels roll without slipping.)",
  "q.hsg-03.hints": [
    "In one turn, how far does each wheel travel (circumference in terms of π)?",
    "Let N be the number of turns of the rear wheel. Write the number of turns of the front wheel and the distance for each wheel.",
    "The distances must be equal: set up and solve the equation."
  ],
  "q.hsg-03.explain": "The front wheel circumference is 2π × 30 = 60π (cm), the rear wheel 2π × 45 = 90π (cm). Let N be the rear wheel's turns; the front wheel turns N + 25 times. Same distance: (N + 25) × 60π = N × 90π ⇒ 60N + 1 500 = 90N ⇒ N = 50. The rear wheel turns 50 times (the front wheel 75).",
  "q.hsg-04.q": "A right prism has a base that is an n-sided polygon. The total of its vertices, edges and faces is 62. Find n.",
  "q.hsg-04.hints": [
    "A prism with an n-sided base has how many vertices? How many edges (base and vertical edges)?",
    "Which faces does a prism have? How many are there?",
    "Add the three numbers in terms of n, set equal to 62 and solve."
  ],
  "q.hsg-04.explain": "A prism with an n-sided base has 2n vertices, 3n edges (2n base edges + n vertical edges) and n + 2 faces (2 bases + n side faces). Total: 2n + 3n + (n + 2) = 6n + 2 = 62 ⇒ n = 10. (Check with Euler's formula: 20 − 30 + 12 = 2.)",
  "q.hsg-05.q": "The three dimensions of a cuboid are in the ratio 1 : 2 : 3 and its volume is 48 cm³. Find the total surface area of the cuboid (cm²).",
  "q.hsg-05.hints": [
    "Let the dimensions be k, 2k, 3k. What is the volume in terms of k?",
    "Solve for k³ to find k, then find the three actual dimensions.",
    "The total surface area is twice the sum of the three different face areas. Calculate it."
  ],
  "q.hsg-05.explain": "Volume: k × 2k × 3k = 6k³ = 48 ⇒ k³ = 8 ⇒ k = 2. The dimensions are 2, 4, 6 cm. Total surface area = 2(2×4 + 2×6 + 4×6) = 2(8 + 12 + 24) = 88 cm².",
  "q.hsg-06.q": "Which statement is always true?",
  "q.hsg-06.choices": [
    "A rhombus with equal diagonals is a square.",
    "A quadrilateral with perpendicular diagonals is a rhombus.",
    "A quadrilateral with one pair of opposite sides equal is a parallelogram.",
    "A trapezium with equal non-parallel sides is isosceles."
  ],
  "q.hsg-06.hints": [
    "For each false option, try to draw a counterexample. For B, can you draw a kite?",
    "For D, is a parallelogram (not a rectangle) a trapezium with equal non-parallel sides?",
    "If a rhombus has equal diagonals, what can you say about its four angles?"
  ],
  "q.hsg-06.explain": "A is true: a rhombus with equal diagonals is a rectangle (a parallelogram with equal diagonals) with four equal sides, so it is a square. B is false: a kite has perpendicular diagonals but is not a rhombus. C is false: an isosceles trapezium has two opposite sides (the legs) equal but those legs are not parallel. D is false: a parallelogram that is not a rectangle has equal non-parallel sides yet is not an isosceles trapezium.",
  "q.hsg-07.q": "Ha says: \"The sum of the exterior angles (one at each vertex) of a convex n-sided polygon is (n − 2) × 180°, so the more sides, the larger the sum of exterior angles.\" Which comment is correct?",
  "q.hsg-07.choices": [
    "Ha is right, because the formula (n − 2) × 180° works for every kind of angle.",
    "Ha is wrong: the exterior angles of a convex polygon always add up to 360°, whatever n is.",
    "Ha is wrong: the exterior angles add up to 180° × n.",
    "Ha is wrong: the exterior angles add up to 180° for every convex polygon."
  ],
  "q.hsg-07.hints": [
    "What is the sum of the exterior angles (one per vertex) of a triangle? Of a square?",
    "Each exterior angle is supplementary to the interior angle at the same vertex. What is the total of the n pairs (interior + exterior)?",
    "Subtract the sum of the interior angles (n − 2) × 180° from that total."
  ],
  "q.hsg-07.explain": "The sum of (interior + exterior) at n vertices is n × 180°. The interior angles add to (n − 2) × 180°, so the exterior angles add to n × 180° − (n − 2) × 180° = 360°. Check: an equilateral triangle has three exterior angles of 120° (sum 360°); a square has four exterior angles of 90° (sum 360°). Ha confused the sum of interior angles with that of exterior angles.",
  "q.hsg-08.q": "A 88 cm piece of wire is bent into a square. It is then straightened and bent into a circle (use π = 22/7). By how many centimetres is the diameter of the circle longer than the side of the square?",
  "q.hsg-08.hints": [
    "What is the side of the square when its perimeter is 88 cm?",
    "The circumference of a circle is π times the diameter. From a circumference of 88 cm, find the diameter.",
    "Subtract the side of the square from the diameter."
  ],
  "q.hsg-08.explain": "Side of the square: 88 ÷ 4 = 22 cm. Diameter of the circle d = circumference ÷ π = 88 ÷ (22/7) = 88 × 7 ÷ 22 = 28 cm. Difference: 28 − 22 = 6 cm.",
  "q.hsg-08.why.q": "Why is the diameter of the circle (28 cm) greater than the side of the square (22 cm) for the same 88 cm of wire?",
  "q.hsg-08.why.choices": [
    "Because the circumference is π times the diameter while the perimeter of a square is 4 times its side, and π < 4, so for equal lengths the diameter must be larger than the side.",
    "Because a circle always has a smaller area than a square of the same perimeter.",
    "Because the diameter is always the side of the square plus 6 cm.",
    "Because π is greater than 4."
  ]
}, vi: {} }
});
