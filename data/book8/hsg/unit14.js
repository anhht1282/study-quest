window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 14,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01", "howto": "Nhập góc phương vị của C khi nhìn từ A (số độ, đo theo chiều kim đồng hồ từ hướng Bắc).",
    "type": "num",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Tàu đi từ A đến B theo hướng phương vị 070°, rồi đi từ B đến C theo hướng phương vị 160° với quãng đường BC = AB. Tính phương vị của C tính từ A (đơn vị độ).",
    "svg": null,
    "choices": null,
    "answer": 115,
    "hints": [
     "Phương vị ngược từ B về A là bao nhiêu? Góc giữa BA và BC bằng bao nhiêu?",
     "Tam giác ABC có AB = BC và góc ở B bằng bao nhiêu? Vậy các góc ở A và C là bao nhiêu?",
     "Từ hướng AB (070°) quay thêm góc BAC về phía C (cùng chiều hay ngược chiều kim đồng hồ?)."
    ],
    "explain": "Phương vị từ B về A là 250°; từ 250° đến 160° là 90°, nên góc ABC = 90°. Tam giác ABC vuông cân tại B nên góc BAC = 45°. C nằm bên phải hướng AB (rẽ phải từ 070° lên 160°) nên phương vị AC = 70° + 45° = 115°.",
    "tol": 0,
    "unitLabel": "°"
   },
   {
    "id": "hsg-02", "howto": "Tìm tọa độ đỉnh D của hình bình hành ABCD, rồi nhập tổng hai tọa độ của D (một số).",
    "type": "num",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Trên mặt phẳng tọa độ cho các điểm A(1; 2), B(5; 3), C(8; 7). Tìm điểm D để ABCD là hình bình hành (theo thứ tự đỉnh A, B, C, D). Tính tổng hai tọa độ của D.",
    "svg": null,
    "choices": null,
    "answer": 10,
    "hints": [
     "Hai đường chéo AC và BD của hình bình hành có chung điểm nào?",
     "Tìm tọa độ trung điểm của AC.",
     "Trung điểm đó cũng là trung điểm của BD; tìm D rồi cộng hai tọa độ."
    ],
    "explain": "Trung điểm AC là ((1 + 8)/2; (2 + 7)/2) = (4,5; 4,5), cũng là trung điểm BD nên D = (2 × 4,5 − 5; 2 × 4,5 − 3) = (4; 6). Tổng = 10.",
    "tol": 0
   },
   {
    "id": "hsg-03", "howto": "Nhập tổng hoành độ và tung độ của điểm cuối cùng, sau cả ba phép biến đổi (một số).",
    "type": "num",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Điểm P(3; −2) lần lượt chịu ba phép biến đổi: (1) phản xạ qua đường thẳng y = x; (2) quay 90° ngược chiều kim đồng hồ quanh gốc O; (3) tịnh tiến theo vectơ (−4; 1). Tính tổng hai tọa độ của ảnh cuối cùng.",
    "svg": null,
    "choices": null,
    "answer": -8,
    "hints": [
     "Phản xạ qua y = x làm hoán đổi hai tọa độ như thế nào?",
     "Quay 90° ngược chiều kim đồng hồ quanh O biến (x; y) thành điểm nào? Thử với (1; 0).",
     "Cuối cùng cộng vectơ tịnh tiến rồi cộng hai tọa độ."
    ],
    "explain": "(3; −2) → phản xạ qua y = x: (−2; 3) → quay 90° ngược chiều kim đồng hồ, (x; y) → (−y; x): (−3; −2) → tịnh tiến: (−7; −1). Tổng = −8.",
    "tol": 0
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Tam giác ABC có diện tích 8 cm². Phóng to tam giác này với hệ số 2 để được tam giác A'B'C', rồi phóng to A'B'C' với hệ số 3/2 để được A''B''C''. Tính diện tích tam giác A''B''C'' (cm²).",
    "svg": null,
    "choices": null,
    "answer": 72,
    "hints": [
     "Khi phóng to với hệ số k thì độ dài các cạnh thay đổi thế nào? Còn diện tích?",
     "Hai phép phóng to liên tiếp tương đương với một phép phóng to hệ số bao nhiêu?",
     "Nhân diện tích ban đầu với bình phương hệ số tổng."
    ],
    "explain": "Hệ số tổng là 2 × 3/2 = 3. Diện tích nhân với 3² = 9: 8 × 9 = 72 cm². (Không phải 8 × 3 = 24: diện tích nhân với bình phương hệ số.)",
    "tol": 0,
    "unitLabel": "cm²"
   },
   {
    "id": "hsg-05", "howto": "Tìm tọa độ tâm quay I, rồi nhập tổng hai tọa độ của I (một số).",
    "type": "num",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Phép quay 90° theo chiều kim đồng hồ quanh tâm I biến điểm A(6; 2) thành điểm A'(3; −3). Tìm tọa độ của I rồi tính tổng hai tọa độ.",
    "svg": null,
    "choices": null,
    "answer": 3,
    "hints": [
     "Tâm quay cách đều A và A'. Điểm I nằm trên đường nào đối với đoạn AA'?",
     "Tam giác IAA' là tam giác gì (biết góc quay 90° và IA = IA')?",
     "Thử I(2; 1): quay A quanh I 90° thuận chiều kim đồng hồ có ra A' không?"
    ],
    "explain": "IA = IA' và góc AIA' = 90°. Gọi I(c; d): quay thuận chiều kim đồng hồ 90°, (x; y) → (c + (y − d); d − (x − c)). Với A(6; 2): c + 2 − d = 3 và d − 6 + c = −3 ⇒ c − d = 1 và c + d = 3 ⇒ c = 2, d = 1. I(2; 1) có tổng 3.",
    "tol": 0
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Phản xạ một hình qua đường thẳng x = 1, rồi phản xạ ảnh thu được qua đường thẳng x = 4. Hai phép phản xạ liên tiếp này tương đương với phép biến đổi nào?",
    "svg": null,
    "choices": [
     "Phản xạ qua đường thẳng x = 2,5",
     "Tịnh tiến theo vectơ (6; 0)",
     "Tịnh tiến theo vectơ (3; 0)",
     "Phép quay 180° quanh điểm (2,5; 0)"
    ],
    "answer": 1,
    "hints": [
     "Điểm (0; 0) qua phản xạ thứ nhất rồi thứ hai trở thành điểm nào?",
     "Điểm (2; 5) thì sao? Hai điểm có cùng độ dịch chuyển không?",
     "Đó là phép biến đổi nào, độ dịch chuyển bằng mấy lần khoảng cách giữa hai đường?"
    ],
    "explain": "x → 2·1 − x = 2 − x → 2·4 − (2 − x) = 6 + x, y không đổi: đó là phép tịnh tiến theo vectơ (6; 0). Độ dịch chuyển bằng 2 lần khoảng cách giữa hai đường (2 × 3 = 6). Lỗi hay gặp: nghĩ rằng hai phản xạ cho phép quay hoặc phản xạ qua đường chính giữa."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Từ cảng B, người ta thấy tàu A ở phương vị 040°. Bạn Tuấn nói: \"Vậy từ tàu A nhìn về cảng B, phương vị là 140°\". Nhận xét nào đúng?",
    "svg": null,
    "choices": [
     "Bạn Tuấn đúng",
     "Phương vị đúng là 320°",
     "Phương vị đúng là 220°",
     "Phương vị đúng là 040° vì hướng không đổi"
    ],
    "answer": 2,
    "hints": [
     "Hai hướng nhìn từ B đến A và từ A đến B ngược nhau; hai phương vị hơn kém nhau bao nhiêu độ?",
     "Hãy vẽ một đường thẳng bắc–nam qua A và một qua B, đánh dấu góc 40°.",
     "Hai đường bắc–nam song song nên góc trong cùng phía có tổng bằng bao nhiêu?"
    ],
    "explain": "Phương vị ngược = 040° + 180° = 220°, vì hai đường bắc–nam song song (góc trong cùng phía bù nhau hoặc góc so le trong). Bạn Tuấn đã dùng 180° − 40° = 140°, sai."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-transformations",
    "source": "hsg",
    "lang": "vi",
    "q": "Phép phóng to hệ số 3 có tâm O biến đoạn thẳng AB (không đi qua O) thành đoạn A'B'. Khẳng định nào luôn đúng?",
    "svg": null,
    "choices": [
     "A'B' song song với AB và dài gấp 3 lần AB",
     "A'B' vuông góc với AB",
     "A'B' song song với AB và dài bằng AB",
     "A'B' cắt AB tại O"
    ],
    "answer": 0,
    "hints": [
     "Vectơ OA' so với vectơ OA như thế nào? Với OB' và OB?",
     "Vectơ A'B' = OB' − OA' bằng bao nhiêu lần vectơ AB?",
     "Hai vectơ cùng phương thì hai đường thẳng tương ứng thế nào?"
    ],
    "explain": "OA' = 3·OA và OB' = 3·OB nên A'B' = 3·AB (cùng phương, cùng chiều). Vậy A'B' ∥ AB và dài gấp 3 lần AB, với mọi vị trí của O.",
    "why": {
     "q": "Vì sao có tính chất đó?",
     "choices": [
      "Vì A'B' = 3·AB nên hai đoạn cùng phương",
      "Vì mọi phép biến hình đều giữ nguyên độ dài",
      "Vì tâm O luôn nằm trên AB",
      "Vì góc quay bằng 0° nên không có gì thay đổi"
     ],
     "answer": 0
    }
   }
  ]
 },
 "tr": {
  "en": {
    "q.hsg-05.howto": "Find the coordinates of the centre of rotation I, then enter the sum of its two coordinates (one number).",
    "q.hsg-03.howto": "Enter the sum of the x- and y-coordinates of the final point, after all three transformations (one number).",
    "q.hsg-02.howto": "Find the coordinates of vertex D of parallelogram ABCD, then enter the sum of its two coordinates (one number).",
    "q.hsg-01.howto": "Enter the bearing of C as seen from A (in degrees, measured clockwise from north).",
   "q.hsg-01.q": "A ship sails from A to B on a bearing of 070°, then from B to C on a bearing of 160° with BC = AB. Find the bearing of C from A (in degrees).",
   "q.hsg-01.hints": [
    "What is the back bearing from B to A? What is the angle between BA and BC?",
    "In triangle ABC, AB = BC and the angle at B is what? So what are the angles at A and C?",
    "From direction AB (070°) turn through angle BAC towards C (clockwise or anticlockwise?)."
   ],
   "q.hsg-01.explain": "The back bearing from B to A is 250°; from 250° to 160° is 90°, so angle ABC = 90°. Triangle ABC is isosceles right-angled at B so angle BAC = 45°. C lies to the right of AB (turning right from 070° to 160°), so the bearing of AC = 70° + 45° = 115°.",
   "q.hsg-02.q": "On a coordinate grid, A(1, 2), B(5, 3) and C(8, 7) are given. Find the point D so that ABCD is a parallelogram (vertices in order A, B, C, D). Find the sum of the two coordinates of D.",
   "q.hsg-02.hints": [
    "Which point do the two diagonals AC and BD of a parallelogram share?",
    "Find the midpoint of AC.",
    "That midpoint is also the midpoint of BD; find D and add its coordinates."
   ],
   "q.hsg-02.explain": "The midpoint of AC is ((1 + 8)/2, (2 + 7)/2) = (4.5, 4.5), which is also the midpoint of BD, so D = (2 × 4.5 − 5, 2 × 4.5 − 3) = (4, 6). The sum is 10.",
   "q.hsg-03.q": "The point P(3, −2) is transformed in turn by: (1) reflection in the line y = x; (2) rotation of 90° anticlockwise about the origin O; (3) translation by the vector (−4, 1). Find the sum of the coordinates of the final image.",
   "q.hsg-03.hints": [
    "How does reflection in y = x change the coordinates?",
    "Where does a 90° anticlockwise rotation about O send (x, y)? Try (1, 0).",
    "Finally add the translation vector, then add the two coordinates."
   ],
   "q.hsg-03.explain": "(3, −2) → reflect in y = x: (−2, 3) → rotate 90° anticlockwise, (x, y) → (−y, x): (−3, −2) → translate: (−7, −1). The sum is −8.",
   "q.hsg-04.q": "Triangle ABC has area 8 cm². It is enlarged by scale factor 2 to give A'B'C', and then A'B'C' is enlarged by scale factor 3/2 to give A''B''C''. Find the area of A''B''C'' (cm²).",
   "q.hsg-04.hints": [
    "When you enlarge by scale factor k, what happens to lengths? And to area?",
    "What single scale factor is equivalent to two enlargements in a row?",
    "Multiply the original area by the square of the overall factor."
   ],
   "q.hsg-04.explain": "The overall scale factor is 2 × 3/2 = 3. Area is multiplied by 3² = 9: 8 × 9 = 72 cm². (Not 8 × 3 = 24: area is multiplied by the square of the factor.)",
   "q.hsg-05.q": "A rotation of 90° clockwise about the centre I maps A(6, 2) to A'(3, −3). Find the coordinates of I and then the sum of its two coordinates.",
   "q.hsg-05.hints": [
    "The centre is equally far from A and A'. What line does I lie on relative to segment AA'?",
    "What kind of triangle is IAA' (the angle of rotation is 90° and IA = IA')?",
    "Try I(2, 1): does rotating A about I by 90° clockwise give A'?"
   ],
   "q.hsg-05.explain": "IA = IA' and angle AIA' = 90°. Let I(c, d): a 90° clockwise rotation sends (x, y) → (c + (y − d), d − (x − c)). For A(6, 2): c + 2 − d = 3 and d − 6 + c = −3 ⇒ c − d = 1 and c + d = 3 ⇒ c = 2, d = 1. I(2, 1) has sum 3.",
   "q.hsg-06.q": "A shape is reflected in the line x = 1 and its image is then reflected in the line x = 4. These two reflections together are equivalent to which single transformation?",
   "q.hsg-06.choices": [
    "Reflection in the line x = 2.5",
    "Translation by the vector (6, 0)",
    "Translation by the vector (3, 0)",
    "Rotation of 180° about the point (2.5, 0)"
   ],
   "q.hsg-06.hints": [
    "Where does the point (0, 0) end up after the first and then the second reflection?",
    "What about (2, 5)? Do both points move by the same amount?",
    "Which transformation is that, and how does the shift compare with the distance between the two lines?"
   ],
   "q.hsg-06.explain": "x → 2·1 − x = 2 − x → 2·4 − (2 − x) = 6 + x with y unchanged: this is a translation by the vector (6, 0). The shift is twice the distance between the lines (2 × 3 = 6). A common mistake is to think the two reflections give a rotation or a reflection in the middle line.",
   "q.hsg-07.q": "From port B, ship A is seen on a bearing of 040°. Tuan says: \"So from ship A, port B is on a bearing of 140°\". Which comment is correct?",
   "q.hsg-07.choices": [
    "Tuan is correct",
    "The correct bearing is 320°",
    "The correct bearing is 220°",
    "The correct bearing is 040° because the direction is unchanged"
   ],
   "q.hsg-07.hints": [
    "The directions B to A and A to B are opposite; how many degrees apart are the two bearings?",
    "Draw a north line through A and one through B, and mark the 40° angle.",
    "The two north lines are parallel; what do co-interior angles add up to?"
   ],
   "q.hsg-07.explain": "The back bearing = 040° + 180° = 220°, because the two north lines are parallel (alternate angles). Tuan used 180° − 40° = 140°, which is wrong.",
   "q.hsg-08.why.q": "Why does this property hold?",
   "q.hsg-08.why.choices": [
    "Because A'B' = 3·AB, so the segments have the same direction",
    "Because every transformation keeps lengths unchanged",
    "Because the centre O always lies on AB",
    "Because the angle of rotation is 0° so nothing changes"
   ],
   "q.hsg-08.q": "An enlargement with scale factor 3 and centre O maps a line segment AB (not through O) to A'B'. Which statement is always true?",
   "q.hsg-08.choices": [
    "A'B' is parallel to AB and 3 times as long",
    "A'B' is perpendicular to AB",
    "A'B' is parallel to AB and the same length",
    "A'B' meets AB at O"
   ],
   "q.hsg-08.hints": [
    "How does vector OA' compare with vector OA? And OB' with OB?",
    "Vector A'B' = OB' − OA' is how many times vector AB?",
    "If two vectors have the same direction, what does that say about the lines?"
   ],
   "q.hsg-08.explain": "OA' = 3·OA and OB' = 3·OB so A'B' = 3·AB (same direction). Hence A'B' ∥ AB and is 3 times as long, wherever O is."
  },
  "vi": {}
 }
});
