window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 5,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-quadrilateral-ratio",
    "source": "hsg",
    "lang": "vi",
    "q": "Một tứ giác có bốn góc tỉ lệ với 2 : 3 : 4 : 6. Tính số đo góc lớn nhất (độ).",
    "svg": null,
    "choices": null,
    "answer": 144,
    "unitLabel": "°",
    "hints": [
      "Tổng bốn góc của một tứ giác là bao nhiêu độ?",
      "Tổng các phần của tỉ số 2 : 3 : 4 : 6 là bao nhiêu? Mỗi phần bằng bao nhiêu độ?",
      "Góc lớn nhất ứng với mấy phần?"
    ],
    "explain": "Tổng bốn góc là 360°. Có 2 + 3 + 4 + 6 = 15 phần nên mỗi phần là 360° : 15 = 24°. Góc lớn nhất gồm 6 phần: 6 × 24° = 144°."
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-parallel-cointerior",
    "source": "hsg",
    "lang": "vi",
    "q": "Một đường thẳng cắt hai đường thẳng song song tạo ra hai góc trong cùng phía hơn kém nhau 40°. Tính số đo góc lớn hơn (độ).",
    "svg": null,
    "choices": null,
    "answer": 110,
    "unitLabel": "°",
    "hints": [
      "Hai góc trong cùng phía của hai đường thẳng song song có tổng bằng bao nhiêu độ?",
      "Biết tổng và hiệu của hai số, số lớn được tính thế nào?",
      "Tính (tổng + hiệu) : 2."
    ],
    "explain": "Hai góc trong cùng phía của hai đường thẳng song song bù nhau nên tổng bằng 180°. Số lớn = (180° + 40°) : 2 = 110° (số bé là 70°)."
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-clock-angle",
    "source": "hsg",
    "lang": "vi",
    "q": "Lúc 3 giờ 20 phút, góc nhỏ (không quá 180°) giữa kim giờ và kim phút là bao nhiêu độ?",
    "svg": null,
    "choices": null,
    "answer": 20,
    "unitLabel": "°",
    "hints": [
      "Kim phút quay 360° trong 60 phút. Lúc 20 phút nó cách số 12 bao nhiêu độ?",
      "Kim giờ quay 30° mỗi giờ. Lúc 3 giờ nó ở 90°, thêm 20 phút nó quay thêm bao nhiêu độ?",
      "Lấy hiệu hai vị trí."
    ],
    "explain": "Kim phút ở 20 × 6° = 120° so với số 12. Kim giờ quay 0,5° mỗi phút nên ở 3 × 30° + 20 × 0,5° = 100°. Góc giữa hai kim là 120° − 100° = 20°."
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-quadrilateral-algebra",
    "source": "hsg",
    "lang": "vi",
    "q": "Một tứ giác có ba góc lần lượt là a, a + 20° và a + 40°, còn góc thứ tư bằng 2a. Tính số đo góc lớn nhất (độ).",
    "svg": null,
    "choices": null,
    "answer": 120,
    "unitLabel": "°",
    "hints": [
      "Tổng bốn góc là bao nhiêu? Viết tổng đó theo a.",
      "Giải phương trình để tìm a.",
      "Tính cả bốn góc rồi chọn góc lớn nhất."
    ],
    "explain": "a + (a + 20°) + (a + 40°) + 2a = 5a + 60° = 360° nên a = 60°. Bốn góc là 60°, 80°, 100°, 120°. Góc lớn nhất là 120°."
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-rhombus-diagonal",
    "source": "hsg",
    "lang": "vi",
    "q": "Một hình thoi có chu vi 52 cm và một đường chéo dài 24 cm. Tính độ dài đường chéo còn lại (cm).",
    "svg": null,
    "choices": null,
    "answer": 10,
    "unitLabel": "cm",
    "hints": [
      "Cạnh của hình thoi dài bao nhiêu?",
      "Hai đường chéo của hình thoi có cắt nhau vuông góc tại trung điểm không? Từ đó có tam giác vuông nào?",
      "Tam giác vuông có cạnh huyền 13 và một cạnh góc vuông 12 thì cạnh còn lại bằng bao nhiêu?"
    ],
    "explain": "Cạnh hình thoi = 52 : 4 = 13 cm. Hai đường chéo vuông góc và cắt nhau tại trung điểm, tạo tam giác vuông có cạnh huyền 13 và một cạnh góc vuông 24 : 2 = 12. Cạnh góc vuông còn lại là √(13² − 12²) = 5 (bộ ba 5-12-13). Vậy đường chéo còn lại dài 2 × 5 = 10 cm."
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-quadrilateral-true",
    "source": "hsg",
    "lang": "vi",
    "q": "Khẳng định nào về tứ giác sau đây CHẮC CHẮN đúng?",
    "svg": null,
    "choices": [
      "Hai đường chéo bằng nhau thì là hình chữ nhật",
      "Hai đường chéo vuông góc thì là hình thoi",
      "Hai cạnh đối song song và bằng nhau thì là hình bình hành",
      "Có một cặp góc đối bằng nhau thì là hình bình hành"
    ],
    "answer": 2,
    "hints": [
      "Hình thang cân có hai đường chéo bằng nhau không? Nó có phải hình chữ nhật không?",
      "Một hình diều (hai cặp cạnh kề bằng nhau) có hai đường chéo vuông góc không? Nó có phải hình thoi không?",
      "Hãy nhớ định nghĩa: hai cạnh đối song song và bằng nhau dẫn tới hình gì?"
    ],
    "explain": "Hai cạnh đối song song và bằng nhau thì tứ giác là hình bình hành (đúng). Hai đường chéo bằng nhau chưa chắc là hình chữ nhật (hình thang cân). Hai đường chéo vuông góc chưa chắc là hình thoi (hình diều). Một cặp góc đối bằng nhau chưa đủ để là hình bình hành (hình diều cũng có)."
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-find-flaw-angles",
    "source": "hsg",
    "lang": "vi",
    "q": "Bình khẳng định: \"Hai góc có các cạnh tương ứng song song thì bằng nhau.\" Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "Sai: chúng luôn bù nhau",
      "Sai: chúng bằng nhau hoặc bù nhau (tổng 180°)",
      "Đúng trong mọi trường hợp",
      "Sai: chúng luôn phụ nhau"
    ],
    "answer": 1,
    "hints": [
      "Vẽ góc xOy rồi vẽ một góc khác có cạnh song song, nhưng một cạnh quay ngược chiều. Hai góc có bằng nhau không?",
      "Khi hai cạnh cùng chiều với hai cạnh kia, hai góc quan hệ thế nào? Khi một cặp cạnh ngược chiều thì sao?",
      "Tổng hai góc trong trường hợp ngược chiều bằng bao nhiêu?"
    ],
    "explain": "Nếu hai cặp cạnh cùng chiều (hoặc cùng ngược chiều) thì hai góc bằng nhau. Nhưng nếu một cặp cạnh cùng chiều còn cặp kia ngược chiều thì hai góc bù nhau (tổng 180°). Vậy hai góc bằng nhau HOẶC bù nhau; khẳng định của Bình thiếu trường hợp bù nhau."
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "hsg-bisectors-adjacent",
    "source": "hsg",
    "lang": "vi",
    "q": "Hai góc kề bù ∠xOy và ∠yOz, trong đó ∠xOy lớn hơn ∠yOz là 36°. Gọi Om, On lần lượt là tia phân giác của ∠xOy và ∠yOz. Tính ∠mOn (độ).",
    "svg": null,
    "choices": null,
    "answer": 90,
    "unitLabel": "°",
    "hints": [
      "Hai góc kề bù có tổng bằng bao nhiêu độ?",
      "∠mOn gồm một nửa của góc nào và một nửa của góc nào?",
      "Viết ∠mOn = ½ × (tổng hai góc) rồi tính. Con số 36° có cần dùng không?"
    ],
    "explain": "Tia Oy nằm giữa Om và On nên ∠mOn = ∠mOy + ∠yOn = ½∠xOy + ½∠yOz = ½(∠xOy + ∠yOz) = ½ · 180° = 90°. Dữ kiện 36° là thừa.",
    "why": {
      "q": "Vì sao kết quả không phụ thuộc vào con số 36°?",
      "choices": [
        "Vì ∠mOn = ½(∠xOy + ∠yOz) và hai góc kề bù luôn có tổng 180°, bất kể chúng lệch nhau bao nhiêu",
        "Vì 36° quá nhỏ nên bỏ qua được",
        "Vì Om và On trùng nhau",
        "Vì ∠xOy luôn bằng ∠yOz"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "The four angles of a quadrilateral are in the ratio 2 : 3 : 4 : 6. Find the largest angle (in degrees).",
  "q.hsg-01.hints": [
    "What is the sum of the four angles of a quadrilateral?",
    "What is the total number of parts in the ratio 2 : 3 : 4 : 6? How many degrees is one part?",
    "How many parts does the largest angle have?"
  ],
  "q.hsg-01.explain": "The four angles add up to 360°. There are 2 + 3 + 4 + 6 = 15 parts, so one part is 360° ÷ 15 = 24°. The largest angle has 6 parts: 6 × 24° = 144°.",
  "q.hsg-02.q": "A transversal crosses two parallel lines and makes two co-interior angles that differ by 40°. Find the larger angle (in degrees).",
  "q.hsg-02.hints": [
    "What is the sum of two co-interior angles between parallel lines?",
    "Given the sum and the difference of two numbers, how do you find the larger one?",
    "Calculate (sum + difference) ÷ 2."
  ],
  "q.hsg-02.explain": "Co-interior angles between parallel lines add up to 180°. The larger angle = (180° + 40°) ÷ 2 = 110° (the smaller is 70°).",
  "q.hsg-03.q": "At 3:20, what is the smaller angle (at most 180°) between the hour hand and the minute hand, in degrees?",
  "q.hsg-03.hints": [
    "The minute hand turns 360° in 60 minutes. At 20 minutes, how many degrees is it from the 12?",
    "The hour hand turns 30° per hour. At 3 o'clock it is at 90°; how much further does it turn in 20 minutes?",
    "Take the difference of the two positions."
  ],
  "q.hsg-03.explain": "The minute hand is at 20 × 6° = 120° from the 12. The hour hand turns 0.5° per minute, so it is at 3 × 30° + 20 × 0.5° = 100°. The angle between the hands is 120° − 100° = 20°.",
  "q.hsg-04.q": "Three angles of a quadrilateral are a, a + 20° and a + 40°, and the fourth angle is 2a. Find the largest angle (in degrees).",
  "q.hsg-04.hints": [
    "What is the sum of the four angles? Write that sum in terms of a.",
    "Solve the equation to find a.",
    "Work out all four angles and pick the largest."
  ],
  "q.hsg-04.explain": "a + (a + 20°) + (a + 40°) + 2a = 5a + 60° = 360°, so a = 60°. The four angles are 60°, 80°, 100°, 120°. The largest is 120°.",
  "q.hsg-05.q": "A rhombus has perimeter 52 cm and one diagonal of length 24 cm. Find the length of the other diagonal (in cm).",
  "q.hsg-05.hints": [
    "How long is each side of the rhombus?",
    "Do the diagonals of a rhombus meet at right angles at their midpoints? Which right-angled triangle does that give?",
    "A right-angled triangle has hypotenuse 13 and one leg 12. What is the other leg?"
  ],
  "q.hsg-05.explain": "Side of the rhombus = 52 ÷ 4 = 13 cm. The diagonals meet at right angles at their midpoints, forming a right-angled triangle with hypotenuse 13 and one leg 24 ÷ 2 = 12. The other leg is √(13² − 12²) = 5 (the 5-12-13 triple). So the other diagonal is 2 × 5 = 10 cm.",
  "q.hsg-06.q": "Which of these statements about quadrilaterals is CERTAINLY true?",
  "q.hsg-06.hints": [
    "Does an isosceles trapezium have equal diagonals? Is it a rectangle?",
    "Does a kite (two pairs of equal adjacent sides) have perpendicular diagonals? Is it a rhombus?",
    "Remember the definition: what shape do two opposite sides that are parallel and equal give?"
  ],
  "q.hsg-06.explain": "A quadrilateral with two opposite sides parallel and equal is a parallelogram (true). Equal diagonals do not guarantee a rectangle (isosceles trapezium). Perpendicular diagonals do not guarantee a rhombus (kite). One pair of equal opposite angles is not enough for a parallelogram (a kite has one too).",
  "q.hsg-06.choices": [
    "Equal diagonals means it is a rectangle",
    "Perpendicular diagonals means it is a rhombus",
    "Two opposite sides parallel and equal means it is a parallelogram",
    "One pair of equal opposite angles means it is a parallelogram"
  ],
  "q.hsg-07.q": "Binh claims: \"Two angles whose corresponding sides are parallel are equal.\" Which comment is correct?",
  "q.hsg-07.hints": [
    "Draw angle xOy then another angle with parallel sides, but with one side pointing the opposite way. Are the two angles equal?",
    "When both sides point the same way as the originals, how are the angles related? And when one pair of sides points the opposite way?",
    "What is the sum of the two angles in the opposite-direction case?"
  ],
  "q.hsg-07.explain": "If both pairs of sides point the same way (or both opposite), the angles are equal. But if one pair points the same way and the other the opposite way, the angles are supplementary (sum 180°). So the angles are equal OR supplementary; Binh missed the supplementary case.",
  "q.hsg-07.choices": [
    "Wrong: they are always supplementary",
    "Wrong: they are equal or supplementary (sum 180°)",
    "Correct in every case",
    "Wrong: they are always complementary"
  ],
  "q.hsg-08.q": "Angles ∠xOy and ∠yOz are adjacent angles on a straight line, with ∠xOy greater than ∠yOz by 36°. Om and On are the bisectors of ∠xOy and ∠yOz respectively. Find ∠mOn (in degrees).",
  "q.hsg-08.hints": [
    "What is the sum of two adjacent angles on a straight line?",
    "Is ∠mOn made of half of which angle plus half of which angle?",
    "Write ∠mOn = ½ × (sum of the two angles) and calculate. Is the number 36° needed?"
  ],
  "q.hsg-08.explain": "Ray Oy lies between Om and On, so ∠mOn = ∠mOy + ∠yOn = ½∠xOy + ½∠yOz = ½(∠xOy + ∠yOz) = ½ · 180° = 90°. The 36° is an extra, unneeded fact.",
  "q.hsg-08.why.q": "Why does the result not depend on the number 36°?",
  "q.hsg-08.why.choices": [
    "Because ∠mOn = ½(∠xOy + ∠yOz) and two adjacent angles on a line always add to 180°, however much they differ",
    "Because 36° is too small to matter",
    "Because Om and On coincide",
    "Because ∠xOy always equals ∠yOz"
  ]
}, vi: {} }
});
