window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 8,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-circle-chord",
    "source": "hsg",
    "lang": "vi",
    "q": "Đường tròn tâm O bán kính 10 cm có dây AB dài 16 cm. Tính khoảng cách từ O đến AB (cm).",
    "svg": null,
    "choices": null,
    "answer": 6,
    "unitLabel": "cm",
    "hints": [
      "Đường vuông góc hạ từ tâm O xuống dây AB cắt dây tại điểm nào?",
      "Nếu M là điểm đó thì AM bằng bao nhiêu và tam giác OMA có dạng gì?",
      "Tam giác vuông có cạnh huyền 10 và một cạnh góc vuông 8 thì cạnh còn lại bằng bao nhiêu?"
    ],
    "explain": "Đường vuông góc từ O xuống AB đi qua trung điểm M của AB nên AM = 16 : 2 = 8 cm. Tam giác OMA vuông tại M có OA = 10 (bán kính) nên OM = √(10² − 8²) = √36 = 6 cm."
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-polygon-symmetry",
    "source": "hsg",
    "lang": "vi",
    "q": "Một đa giác đều có mỗi góc trong bằng 156°. Đa giác đó có bao nhiêu trục đối xứng?",
    "svg": null,
    "choices": null,
    "answer": 15,
    "hints": [
      "Mỗi góc ngoài của đa giác bằng bao nhiêu độ?",
      "Tổng các góc ngoài của một đa giác lồi bằng bao nhiêu? Từ đó tìm số cạnh.",
      "Đa giác đều n cạnh có bao nhiêu trục đối xứng?"
    ],
    "explain": "Góc ngoài = 180° − 156° = 24°. Tổng các góc ngoài là 360° nên số cạnh n = 360° : 24° = 15. Đa giác đều n cạnh có n trục đối xứng nên có 15 trục."
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-circumscribed-rectangle",
    "source": "hsg",
    "lang": "vi",
    "q": "Hình chữ nhật 5 cm × 12 cm nội tiếp một đường tròn (bốn đỉnh nằm trên đường tròn). Tính bán kính đường tròn (cm).",
    "svg": null,
    "choices": null,
    "answer": 6.5,
    "unitLabel": "cm",
    "tol": 0.001,
    "hints": [
      "Đường chéo của hình chữ nhật đi qua tâm đường tròn. Nó là gì của đường tròn?",
      "Tính độ dài đường chéo bằng định lý Py-ta-go (5, 12, ?).",
      "Bán kính bằng một nửa đường kính."
    ],
    "explain": "Đường chéo của hình chữ nhật là đường kính của đường tròn ngoại tiếp. Đường chéo = √(5² + 12²) = √169 = 13 cm. Bán kính = 13 : 2 = 6,5 cm."
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-cuboid-volume",
    "source": "hsg",
    "lang": "vi",
    "q": "Hình hộp chữ nhật có diện tích ba mặt cùng một đỉnh lần lượt là 12 cm², 15 cm² và 20 cm². Tính thể tích hình hộp (cm³).",
    "svg": null,
    "choices": null,
    "answer": 60,
    "unitLabel": "cm³",
    "hints": [
      "Gọi ba kích thước là a, b, c. Diện tích ba mặt là những tích nào?",
      "Nhân ba tích đó với nhau được biểu thức nào theo (abc)?",
      "Từ (abc)² = 12 × 15 × 20, tìm abc."
    ],
    "explain": "Giả sử ab = 12, bc = 15, ca = 20. Nhân lại: (abc)² = 12 × 15 × 20 = 3600 nên abc = 60. Kiểm tra: a = 4, b = 3, c = 5 cho ab = 12, bc = 15, ca = 20. Thể tích = 60 cm³."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-euler-vertices",
    "source": "hsg",
    "lang": "vi",
    "q": "Một khối đa diện có 12 mặt, mỗi mặt là một ngũ giác, và tại mỗi đỉnh có đúng 3 mặt gặp nhau. Biết công thức Euler: số đỉnh − số cạnh + số mặt = 2. Tìm số đỉnh.",
    "svg": null,
    "choices": null,
    "answer": 20,
    "hints": [
      "12 mặt ngũ giác có tất cả bao nhiêu cạnh (tính theo từng mặt)? Mỗi cạnh thuộc bao nhiêu mặt?",
      "Từ đó số cạnh của khối là bao nhiêu?",
      "Thay vào công thức Euler: V − E + F = 2."
    ],
    "explain": "12 mặt ngũ giác có 12 × 5 = 60 cạnh tính theo mặt, mỗi cạnh được tính hai lần nên E = 30. Công thức Euler: V − 30 + 12 = 2 nên V = 20. Kiểm tra: mỗi đỉnh có 3 mặt: 3 × 20 = 60 = 12 × 5. (Đây là khối thập nhị diện đều.)"
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-two-axes",
    "source": "hsg",
    "lang": "vi",
    "q": "Một tứ giác có đúng hai trục đối xứng. Khẳng định nào CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
      "Là hình bình hành",
      "Là hình vuông",
      "Là hình chữ nhật",
      "Là hình thang cân"
    ],
    "answer": 0,
    "hints": [
      "Có những tứ giác nào có đúng hai trục đối xứng? (Hình vuông có bao nhiêu trục?)",
      "Hình chữ nhật (không vuông) và hình thoi (không vuông) đều có đúng hai trục. Hai hình này có điểm chung gì?",
      "Hình nào trong các lựa chọn bao gồm cả hai hình đó?"
    ],
    "explain": "Tứ giác có đúng hai trục đối xứng là hình chữ nhật (không vuông) hoặc hình thoi (không vuông); cả hai đều là hình bình hành. Hình vuông có 4 trục, hình thoi không phải hình chữ nhật, hình chữ nhật không phải hình thoi, và hình thoi (không vuông) không phải hình thang cân."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-congruent",
    "source": "hsg",
    "lang": "vi",
    "q": "Hà lập luận: \"Hai tam giác có ba góc bằng nhau từng đôi một thì hai tam giác đó bằng nhau (chồng khít lên nhau).\" Lập luận sai ở đâu?",
    "svg": null,
    "choices": [
      "Sai vì hai tam giác phải có ba cạnh bằng nhau và ba góc khác nhau",
      "Sai vì chỉ tam giác vuông mới có thể bằng nhau",
      "Không sai, vì ba góc xác định duy nhất tam giác",
      "Sai vì ba góc bằng nhau chỉ đảm bảo cùng hình dạng, chưa đảm bảo cùng kích thước (ví dụ hai tam giác đều cạnh 3 và 6)"
    ],
    "answer": 3,
    "hints": [
      "Hai tam giác đều có cạnh 3 cm và 6 cm có các góc bằng nhau không? Chúng có chồng khít nhau không?",
      "Để chứng minh hai tam giác bằng nhau cần điều kiện nào về cạnh?",
      "Ba góc bằng nhau chỉ cho ta biết điều gì về hình dạng và về kích thước?"
    ],
    "explain": "Ba góc bằng nhau chỉ đảm bảo cùng hình dạng (đồng dạng), không đảm bảo cùng kích thước. Phản ví dụ: hai tam giác đều cạnh 3 cm và 6 cm có các góc đều 60° nhưng không bằng nhau. Muốn bằng nhau cần thêm ít nhất một cặp cạnh bằng nhau (ví dụ góc-góc-cạnh)."
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "hsg-painted-cuboid",
    "source": "hsg",
    "lang": "vi",
    "q": "Một khối gỗ hình hộp chữ nhật 6 cm × 5 cm × 4 cm được sơn cả 6 mặt rồi cắt thành các khối lập phương cạnh 1 cm. Có bao nhiêu khối lập phương không bị sơn mặt nào?",
    "svg": null,
    "choices": null,
    "answer": 24,
    "hints": [
      "Những khối nào bị sơn? Chúng nằm ở vị trí nào của khối gỗ?",
      "Nếu bóc đi lớp ngoài cùng dày 1 cm ở mọi phía, khối còn lại có kích thước bao nhiêu?",
      "Đếm số khối lập phương nhỏ trong khối còn lại."
    ],
    "explain": "Các khối không sơn nằm hoàn toàn bên trong. Bỏ lớp ngoài dày 1 cm ở hai đầu mỗi chiều, mỗi chiều mất 2 khối: còn (6 − 2) × (5 − 2) × (4 − 2) = 4 × 3 × 2 = 24 khối.",
    "why": {
      "q": "Vì sao số khối không bị sơn là (6 − 2) × (5 − 2) × (4 − 2)?",
      "choices": [
        "Vì ở mỗi chiều, hai khối ngoài cùng (một ở mỗi đầu) đều chạm mặt sơn, nên mỗi chiều mất 2 khối",
        "Vì mỗi chiều chỉ mất 1 khối",
        "Vì chỉ hai mặt của khối gỗ bị sơn",
        "Vì thể tích trừ đi 2 cm³"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "A circle with centre O and radius 10 cm has a chord AB of length 16 cm. Find the distance from O to AB (in cm).",
  "q.hsg-01.hints": [
    "Where does the perpendicular from the centre O to the chord AB meet the chord?",
    "If M is that point, what is AM, and what kind of triangle is OMA?",
    "A right-angled triangle has hypotenuse 10 and one leg 8. What is the other leg?"
  ],
  "q.hsg-01.explain": "The perpendicular from O to AB passes through the midpoint M of AB, so AM = 16 ÷ 2 = 8 cm. Triangle OMA is right-angled at M with OA = 10 (the radius), so OM = √(10² − 8²) = √36 = 6 cm.",
  "q.hsg-02.q": "A regular polygon has each interior angle equal to 156°. How many lines of symmetry does it have?",
  "q.hsg-02.hints": [
    "How many degrees is each exterior angle of the polygon?",
    "What do the exterior angles of a convex polygon add up to? Use this to find the number of sides.",
    "How many lines of symmetry does a regular n-sided polygon have?"
  ],
  "q.hsg-02.explain": "Exterior angle = 180° − 156° = 24°. The exterior angles add up to 360°, so n = 360° ÷ 24° = 15 sides. A regular n-gon has n lines of symmetry, so it has 15.",
  "q.hsg-03.q": "A 5 cm × 12 cm rectangle is inscribed in a circle (all four vertices lie on the circle). Find the radius of the circle (in cm).",
  "q.hsg-03.hints": [
    "The diagonal of the rectangle passes through the centre of the circle. What is it for the circle?",
    "Find the length of the diagonal with Pythagoras (5, 12, ?).",
    "The radius is half the diameter."
  ],
  "q.hsg-03.explain": "The diagonal of the rectangle is a diameter of the circle. Diagonal = √(5² + 12²) = √169 = 13 cm. Radius = 13 ÷ 2 = 6.5 cm.",
  "q.hsg-04.q": "A cuboid has the areas of three faces meeting at one vertex equal to 12 cm², 15 cm² and 20 cm². Find the volume of the cuboid (in cm³).",
  "q.hsg-04.hints": [
    "Call the three dimensions a, b, c. Which products are the three face areas?",
    "Multiply the three products together: what expression in (abc) do you get?",
    "From (abc)² = 12 × 15 × 20, find abc."
  ],
  "q.hsg-04.explain": "Say ab = 12, bc = 15, ca = 20. Multiplying: (abc)² = 12 × 15 × 20 = 3600, so abc = 60. Check: a = 4, b = 3, c = 5 give ab = 12, bc = 15, ca = 20. Volume = 60 cm³.",
  "q.hsg-05.q": "A polyhedron has 12 faces, each a pentagon, and exactly 3 faces meet at every vertex. Using Euler's formula (vertices − edges + faces = 2), find the number of vertices.",
  "q.hsg-05.hints": [
    "How many edges do the 12 pentagonal faces have in total (counted face by face)? How many faces does each edge belong to?",
    "So how many edges does the solid have?",
    "Substitute into Euler's formula: V − E + F = 2."
  ],
  "q.hsg-05.explain": "The 12 pentagons have 12 × 5 = 60 edges counted face by face; each edge is counted twice, so E = 30. Euler: V − 30 + 12 = 2, so V = 20. Check: 3 faces per vertex gives 3 × 20 = 60 = 12 × 5. (This is the regular dodecahedron.)",
  "q.hsg-06.q": "A quadrilateral has exactly two lines of symmetry. Which statement is CERTAINLY true?",
  "q.hsg-06.hints": [
    "Which quadrilaterals have exactly two lines of symmetry? (How many does a square have?)",
    "A non-square rectangle and a non-square rhombus both have exactly two. What do they have in common?",
    "Which option includes both of these shapes?"
  ],
  "q.hsg-06.explain": "A quadrilateral with exactly two lines of symmetry is a non-square rectangle or a non-square rhombus; both are parallelograms. A square has 4 lines, a rhombus is not a rectangle, a rectangle is not a rhombus, and a non-square rhombus is not an isosceles trapezium.",
  "q.hsg-06.choices": [
    "It is a parallelogram",
    "It is a square",
    "It is a rectangle",
    "It is an isosceles trapezium"
  ],
  "q.hsg-07.q": "Ha argues: \"Two triangles whose three angles are equal in pairs are congruent (they fit exactly on top of each other).\" What is wrong?",
  "q.hsg-07.hints": [
    "Do equilateral triangles with sides 3 cm and 6 cm have equal angles? Do they fit exactly on top of each other?",
    "What condition on the sides is needed to prove two triangles congruent?",
    "What do three equal angles tell you about shape, and what about size?"
  ],
  "q.hsg-07.explain": "Equal angles only guarantee the same shape (similar), not the same size. Counterexample: equilateral triangles with sides 3 cm and 6 cm both have angles of 60° but are not congruent. We need at least one pair of equal sides as well (for example angle-angle-side).",
  "q.hsg-07.choices": [
    "Wrong because the triangles must have three equal sides and different angles",
    "Wrong because only right-angled triangles can be congruent",
    "Nothing is wrong, because three angles determine a triangle uniquely",
    "Wrong because equal angles only guarantee the same shape, not the same size (e.g. equilateral triangles with sides 3 and 6)"
  ],
  "q.hsg-08.q": "A wooden block measuring 6 cm × 5 cm × 4 cm has all 6 faces painted and is then cut into 1 cm cubes. How many cubes have no painted face?",
  "q.hsg-08.hints": [
    "Which cubes get painted? Where are they in the block?",
    "If you peel off the outer layer 1 cm thick on every side, what are the dimensions of the block that remains?",
    "Count the small cubes in the remaining block."
  ],
  "q.hsg-08.explain": "Unpainted cubes lie completely inside. Removing the outer 1 cm layer at both ends of each dimension loses 2 cubes per dimension: (6 − 2) × (5 − 2) × (4 − 2) = 4 × 3 × 2 = 24 cubes.",
  "q.hsg-08.why.q": "Why is the number of unpainted cubes (6 − 2) × (5 − 2) × (4 − 2)?",
  "q.hsg-08.why.choices": [
    "Because in each direction the two outermost cubes (one at each end) touch a painted face, so each dimension loses 2 cubes",
    "Because each dimension loses only 1 cube",
    "Because only two faces of the block are painted",
    "Because the volume is reduced by 2 cm³"
  ]
}, vi: {} }
});
