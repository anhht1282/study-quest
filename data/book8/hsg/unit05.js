window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 5,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "count-angle-pairs",
    "source": "hsg",
    "lang": "vi",
    "q": "Năm đường thẳng đôi một song song bị một cát tuyến cắt. Hỏi có tất cả bao nhiêu cặp góc so le trong? (Mỗi cặp góc so le trong được tạo bởi cát tuyến và hai đường thẳng song song nào đó.)",
    "svg": null,
    "choices": null,
    "answer": 20,
    "hints": [
      "Chọn hai đường thẳng trong năm đường: có bao nhiêu cách chọn?",
      "Với một cặp đường thẳng song song cố định và một cát tuyến, có mấy cặp góc so le trong?",
      "Nhân hai kết quả lại."
    ],
    "explain": "Số cách chọn 2 trong 5 đường thẳng là 5 × 4 ÷ 2 = 10. Với mỗi cặp đường thẳng song song và cát tuyến có 2 cặp góc so le trong. Vậy có 10 × 2 = 20 cặp.",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "exterior-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Ba góc ngoài (mỗi đỉnh lấy một góc ngoài) của một tam giác có số đo tỉ lệ với 3 : 4 : 5. Tính số đo góc trong nhỏ nhất của tam giác (độ).",
    "svg": null,
    "choices": null,
    "answer": 30,
    "unitLabel": "°",
    "hints": [
      "Tổng ba góc ngoài của một tam giác (mỗi đỉnh một góc) luôn bằng bao nhiêu độ?",
      "Chia 360° theo tỉ lệ 3 : 4 : 5 để tìm từng góc ngoài.",
      "Góc trong và góc ngoài tại cùng một đỉnh quan hệ thế nào? Góc trong nhỏ nhất ứng với góc ngoài nào?"
    ],
    "explain": "Tổng ba góc ngoài là 360°. Một phần ứng với 360° ÷ 12 = 30°, nên các góc ngoài là 90°, 120°, 150°. Góc trong = 180° − góc ngoài: 90°, 60°, 30°. Góc trong nhỏ nhất là 30°.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "count-vertical-angles",
    "source": "hsg",
    "lang": "vi",
    "q": "Qua điểm O vẽ 8 đường thẳng phân biệt, ta được 16 tia chung gốc O. Xét mọi góc nhỏ hơn 180° có đỉnh O mà hai cạnh là hai tia trong số 16 tia đó. Có tất cả bao nhiêu cặp góc đối đỉnh?",
    "svg": null,
    "choices": null,
    "answer": 56,
    "hints": [
      "Hai đường thẳng cắt nhau tại O tạo ra mấy cặp góc đối đỉnh?",
      "Có bao nhiêu cặp đường thẳng khác nhau trong 8 đường thẳng?",
      "Mỗi cặp góc đối đỉnh sinh ra từ đúng một cặp đường thẳng nào? Nhân hai kết quả."
    ],
    "explain": "Mỗi cặp góc đối đỉnh được tạo bởi hai cạnh nằm trên đúng hai đường thẳng khác nhau trong 8 đường. Hai đường thẳng cắt nhau tạo 2 cặp góc đối đỉnh. Số cặp đường thẳng là 8 × 7 ÷ 2 = 28. Vậy có 28 × 2 = 56 cặp góc đối đỉnh. (Tổng quát: n(n − 1) cặp.)",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "triangle-inequality-count",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu tam giác khác nhau (không kể hoán vị các cạnh) có độ dài ba cạnh đều là số nguyên xăng-ti-mét và chu vi bằng 12 cm?",
    "svg": null,
    "choices": null,
    "answer": 3,
    "hints": [
      "Điều kiện nào ba độ dài a ≤ b ≤ c phải thỏa để dựng được một tam giác?",
      "Với chu vi 12, c nhỏ hơn mấy (từ a + b > c và a + b + c = 12)? Giá trị lớn nhất có thể của c là bao nhiêu?",
      "Với mỗi c khả dĩ, liệt kê các cặp (a, b) với a ≤ b ≤ c."
    ],
    "explain": "Giả sử a ≤ b ≤ c. Bất đẳng thức tam giác a + b > c cùng a + b = 12 − c cho 12 − c > c ⇒ c < 6, tức c ≤ 5. Mặt khác c ≥ 4 vì c là cạnh lớn nhất (3c ≥ 12). Với c = 5: a + b = 7 ⇒ (2, 5), (3, 4). Với c = 4: a + b = 8 ⇒ (4, 4). Vậy có 3 tam giác: (2, 5, 5), (3, 4, 5), (4, 4, 4).",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "altitude-bisector",
    "source": "hsg",
    "lang": "vi",
    "q": "Tam giác ABC có góc B lớn hơn góc C là 24°. Kẻ đường cao AH và tia phân giác AD của góc A (H, D thuộc cạnh BC). Tính số đo góc HAD (độ).",
    "svg": null,
    "choices": null,
    "answer": 12,
    "unitLabel": "°",
    "hints": [
      "Trong tam giác vuông ABH và tam giác vuông ACH, hãy biểu diễn góc BAH và góc CAH theo B và C.",
      "Góc BAD bằng nửa góc A. Biểu diễn góc BAD qua B và C (dùng A = 180° − B − C).",
      "Góc HAD là hiệu của hai góc nào trong số các góc trên?"
    ],
    "explain": "Ta có ∠BAH = 90° − B và ∠BAD = A ÷ 2 = (180° − B − C) ÷ 2 = 90° − (B + C) ÷ 2. Khi đó ∠HAD = ∠BAD − ∠BAH = (90° − (B + C) ÷ 2) − (90° − B) = (B − C) ÷ 2 = 24° ÷ 2 = 12°.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "angle-pair-misconception",
    "source": "hsg",
    "lang": "vi",
    "q": "Khẳng định nào sau đây luôn đúng?",
    "svg": null,
    "choices": [
      "Hai góc bù nhau thì luôn kề nhau.",
      "Hai góc đối đỉnh thì bằng nhau.",
      "Hai góc bằng nhau thì luôn đối đỉnh.",
      "Hai góc có tổng 90° thì luôn kề nhau."
    ],
    "answer": 1,
    "hints": [
      "Hãy vẽ hai góc 70° và 110° ở hai nơi khác nhau. Chúng có bù nhau không? Có kề nhau không?",
      "Hai góc đối đỉnh cùng bù với góc nào? Từ đó suy ra gì?",
      "Hai góc 40° ở hai tam giác khác nhau có đối đỉnh không?"
    ],
    "explain": "B đúng: hai góc đối đỉnh cùng bù với một góc kề, nên bằng nhau. A sai: hai góc 70° và 110° ở hai nơi khác nhau vẫn bù nhau nhưng không kề. C sai: hai góc 40° ở hai tam giác khác nhau bằng nhau nhưng không đối đỉnh. D sai tương tự A. Chú ý: «bằng nhau» và «đối đỉnh» là hai điều kiện khác nhau; đối đỉnh ⇒ bằng nhau chứ không ngược lại.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "parallel-criterion-flaw",
    "source": "hsg",
    "lang": "vi",
    "q": "Hai đường thẳng a và b bị cát tuyến c cắt, tạo ra hai góc 70° và 110°. An kết luận: «Vì 70° + 110° = 180° nên a ∥ b». Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "An đúng vì hai góc bù nhau thì hai đường thẳng song song.",
      "An chưa đủ căn cứ: tổng 180° chỉ cho a ∥ b nếu hai góc ở vị trí trong cùng phía (hoặc ngoài cùng phía).",
      "An sai vì 70° ≠ 110° nên hai đường thẳng không song song.",
      "An sai vì cần có thêm đường thẳng thứ ba vuông góc với c."
    ],
    "answer": 1,
    "hints": [
      "Hai góc 70° và 110° có thể là hai góc kề bù ngay tại một giao điểm không? Khi đó có suy ra được a ∥ b không?",
      "Dấu hiệu song song nào dùng tổng hai góc bằng 180°? Hai góc ấy phải ở vị trí nào so với cát tuyến?",
      "Vẽ a và b không song song nhưng vẫn có hai góc 70° và 110° kề bù tại một giao điểm."
    ],
    "explain": "Hai góc kề bù tại cùng một giao điểm luôn có tổng 180° dù a, b có song song hay không. Chỉ khi hai góc ở vị trí trong cùng phía (tại hai giao điểm khác nhau) có tổng 180° mới kết luận được a ∥ b. Lỗi của An: chỉ nhìn tổng số đo mà không xét vị trí hai góc.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "external-bisectors",
    "source": "hsg",
    "lang": "vi",
    "q": "Tam giác ABC có góc A = 50°. Các tia phân giác của hai góc ngoài tại B và tại C cắt nhau tại K. Tính số đo góc BKC (độ).",
    "svg": null,
    "choices": null,
    "answer": 65,
    "unitLabel": "°",
    "hints": [
      "Góc ngoài tại B bằng bao nhiêu theo góc B? Góc KBC là một nửa của góc nào?",
      "Tương tự với góc KCB. Biểu diễn tổng ∠KBC + ∠KCB theo B + C.",
      "Dùng B + C = 180° − A để tính tổng đó, rồi tìm ∠BKC trong tam giác KBC."
    ],
    "explain": "∠KBC = (180° − B) ÷ 2 và ∠KCB = (180° − C) ÷ 2. Tổng: (360° − (B + C)) ÷ 2 = (360° − 130°) ÷ 2 = 115° (vì B + C = 180° − 50° = 130°). Trong tam giác KBC: ∠BKC = 180° − 115° = 65°. Tổng quát ∠BKC = 90° − A ÷ 2.",
    "why": {
      "q": "Trong tam giác ABC, tổng ∠KBC + ∠KCB (K là giao điểm hai phân giác ngoài tại B, C) bằng bao nhiêu theo góc A?",
      "choices": [
        "90° + A ÷ 2",
        "90° − A ÷ 2",
        "180° − A",
        "90°"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "Five parallel lines are cut by one transversal. How many pairs of alternate angles are there in total? (Each pair of alternate angles is formed by the transversal and two of the parallel lines.)",
  "q.hsg-01.hints": [
    "Choose two lines out of five: in how many ways can you do this?",
    "For one fixed pair of parallel lines and the transversal, how many pairs of alternate angles are there?",
    "Multiply the two results."
  ],
  "q.hsg-01.explain": "The number of ways to choose 2 of the 5 lines is 5 × 4 ÷ 2 = 10. Each pair of parallel lines with the transversal gives 2 pairs of alternate angles. So there are 10 × 2 = 20 pairs.",
  "q.hsg-02.q": "The three exterior angles (one at each vertex) of a triangle are in the ratio 3 : 4 : 5. Find the smallest interior angle of the triangle (in degrees).",
  "q.hsg-02.hints": [
    "What is the sum of the three exterior angles of a triangle (one per vertex)?",
    "Divide 360° in the ratio 3 : 4 : 5 to find each exterior angle.",
    "How are the interior and exterior angles at the same vertex related? Which exterior angle gives the smallest interior angle?"
  ],
  "q.hsg-02.explain": "The three exterior angles add up to 360°. One part is 360° ÷ 12 = 30°, so the exterior angles are 90°, 120°, 150°. Interior angle = 180° − exterior angle: 90°, 60°, 30°. The smallest interior angle is 30°.",
  "q.hsg-03.q": "Eight different lines are drawn through a point O, giving 16 rays from O. Consider every angle less than 180° with vertex O whose two arms are among these 16 rays. How many pairs of vertical (vertically opposite) angles are there in total?",
  "q.hsg-03.hints": [
    "How many pairs of vertical angles do two intersecting lines form?",
    "How many different pairs of lines are there among the 8 lines?",
    "Each pair of vertical angles comes from exactly which pair of lines? Multiply the two results."
  ],
  "q.hsg-03.explain": "Each pair of vertical angles is formed by arms lying on exactly two different lines among the 8. Two intersecting lines form 2 pairs of vertical angles. The number of pairs of lines is 8 × 7 ÷ 2 = 28. So there are 28 × 2 = 56 pairs of vertical angles. (In general: n(n − 1) pairs.)",
  "q.hsg-04.q": "How many different triangles (not counting rearranged sides) have all three side lengths whole numbers of centimetres and perimeter 12 cm?",
  "q.hsg-04.hints": [
    "What condition must three lengths a ≤ b ≤ c satisfy so that a triangle can be constructed?",
    "With perimeter 12, c must be less than what (from a + b > c and a + b + c = 12)? What is the largest possible c?",
    "For each possible c, list the pairs (a, b) with a ≤ b ≤ c."
  ],
  "q.hsg-04.explain": "Suppose a ≤ b ≤ c. The triangle inequality a + b > c together with a + b = 12 − c gives 12 − c > c ⇒ c < 6, so c ≤ 5. Also c ≥ 4 since c is the longest side (3c ≥ 12). For c = 5: a + b = 7 ⇒ (2, 5), (3, 4). For c = 4: a + b = 8 ⇒ (4, 4). So there are 3 triangles: (2, 5, 5), (3, 4, 5), (4, 4, 4).",
  "q.hsg-05.q": "In triangle ABC, angle B is 24° larger than angle C. The altitude AH and the bisector AD of angle A are drawn (H and D lie on side BC). Find the size of angle HAD (in degrees).",
  "q.hsg-05.hints": [
    "In the right-angled triangles ABH and ACH, express angles BAH and CAH in terms of B and C.",
    "Angle BAD is half of angle A. Express angle BAD using B and C (use A = 180° − B − C).",
    "Angle HAD is the difference of which two of these angles?"
  ],
  "q.hsg-05.explain": "We have ∠BAH = 90° − B and ∠BAD = A ÷ 2 = (180° − B − C) ÷ 2 = 90° − (B + C) ÷ 2. So ∠HAD = ∠BAD − ∠BAH = (90° − (B + C) ÷ 2) − (90° − B) = (B − C) ÷ 2 = 24° ÷ 2 = 12°.",
  "q.hsg-06.q": "Which statement is always true?",
  "q.hsg-06.choices": [
    "Supplementary angles are always adjacent.",
    "Vertically opposite angles are equal.",
    "Equal angles are always vertically opposite.",
    "Angles that add up to 90° are always adjacent."
  ],
  "q.hsg-06.hints": [
    "Draw two angles of 70° and 110° in different places. Are they supplementary? Are they adjacent?",
    "Vertically opposite angles are both supplementary to which angle? What follows?",
    "Are two 40° angles in two different triangles vertically opposite?"
  ],
  "q.hsg-06.explain": "B is true: vertically opposite angles are both supplementary to an adjacent angle, so they are equal. A is false: angles of 70° and 110° in different places are still supplementary but not adjacent. C is false: two 40° angles in different triangles are equal but not vertically opposite. D is false for the same reason as A. Note: \"equal\" and \"vertically opposite\" are different conditions; vertically opposite ⇒ equal, not the other way round.",
  "q.hsg-07.q": "Lines a and b are cut by a transversal c, forming two angles of 70° and 110°. An concludes: \"Since 70° + 110° = 180°, a ∥ b\". Which comment is correct?",
  "q.hsg-07.choices": [
    "An is right because supplementary angles mean the lines are parallel.",
    "An has not given enough: a sum of 180° only gives a ∥ b if the two angles are co-interior (or co-exterior) angles.",
    "An is wrong because 70° ≠ 110°, so the lines are not parallel.",
    "An is wrong because a third line perpendicular to c is needed."
  ],
  "q.hsg-07.hints": [
    "Could 70° and 110° be two angles on a straight line at one intersection? Would a ∥ b follow then?",
    "Which test for parallel lines uses angles adding to 180°? Where must those angles be relative to the transversal?",
    "Draw a and b not parallel but still with a 70° and a 110° angle on a straight line at one intersection."
  ],
  "q.hsg-07.explain": "Two angles on a straight line at the same intersection always add up to 180°, whether or not a and b are parallel. Only when the angles are co-interior (at the two different intersections) and add up to 180° can we conclude a ∥ b. An's error: looking only at the sum without considering the positions of the angles.",
  "q.hsg-08.q": "In triangle ABC, angle A = 50°. The bisectors of the exterior angles at B and at C meet at K. Find the size of angle BKC (in degrees).",
  "q.hsg-08.hints": [
    "How big is the exterior angle at B in terms of B? Angle KBC is half of which angle?",
    "Similarly for angle KCB. Write ∠KBC + ∠KCB in terms of B + C.",
    "Use B + C = 180° − A to find that sum, then find ∠BKC in triangle KBC."
  ],
  "q.hsg-08.explain": "∠KBC = (180° − B) ÷ 2 and ∠KCB = (180° − C) ÷ 2. Sum: (360° − (B + C)) ÷ 2 = (360° − 130°) ÷ 2 = 115° (since B + C = 180° − 50° = 130°). In triangle KBC: ∠BKC = 180° − 115° = 65°. In general ∠BKC = 90° − A ÷ 2.",
  "q.hsg-08.why.q": "In triangle ABC, the sum ∠KBC + ∠KCB (K is where the exterior bisectors at B and C meet) equals what, in terms of angle A?",
  "q.hsg-08.why.choices": [
    "90° + A ÷ 2",
    "90° − A ÷ 2",
    "180° − A",
    "90°"
  ]
}, vi: {} }
});
