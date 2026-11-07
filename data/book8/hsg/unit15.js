window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 15,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Dùng quy ước 5 dặm ≈ 8 km. Một ô tô chạy quãng đường 100 km với vận tốc không đổi 50 dặm/giờ. Hỏi ô tô chạy hết bao nhiêu phút?",
    "svg": null,
    "choices": null,
    "answer": 75,
    "hints": [
     "50 dặm/giờ bằng bao nhiêu km/giờ? (50 dặm gấp 5 dặm mấy lần?)",
     "Thời gian = quãng đường : vận tốc, tính bằng giờ.",
     "Đổi số giờ đó sang phút."
    ],
    "explain": "50 dặm = 10 × 8 = 80 km nên vận tốc là 80 km/giờ. Thời gian = 100 : 80 = 1,25 giờ = 75 phút.",
    "tol": 0,
    "unitLabel": "phút"
   },
   {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Một hình thang có diện tích 150 cm², chiều cao 10 cm, và hai đáy hơn kém nhau 6 cm. Tính độ dài đáy lớn (cm).",
    "svg": null,
    "choices": null,
    "answer": 18,
    "hints": [
     "Diện tích hình thang = (tổng hai đáy) × chiều cao : 2. Từ đó tìm tổng hai đáy.",
     "Có tổng và hiệu của hai đáy, làm thế nào tìm từng đáy?",
     "Đáy lớn bằng (tổng + hiệu) : 2."
    ],
    "explain": "(a + b) × 10 : 2 = 150 ⇒ a + b = 30. Với a − b = 6 thì a = (30 + 6) : 2 = 18 và b = 12. Đáy lớn dài 18 cm.",
    "tol": 0,
    "unitLabel": "cm"
   },
   {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Một lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông 6 cm và 8 cm, chiều dài lăng trụ là 15 cm. Tính diện tích toàn phần của lăng trụ (cm²).",
    "svg": null,
    "choices": null,
    "answer": 408,
    "hints": [
     "Cạnh huyền của tam giác đáy dài bao nhiêu cm? (6, 8, … )",
     "Diện tích của hai mặt đáy tam giác cộng lại là bao nhiêu?",
     "Ba mặt bên là hình chữ nhật, có tổng diện tích = chu vi đáy × chiều dài."
    ],
    "explain": "Cạnh huyền = 10 cm. Hai đáy: 2 × (6 × 8 : 2) = 48 cm². Mặt bên: (6 + 8 + 10) × 15 = 360 cm². Tổng = 408 cm².",
    "tol": 0,
    "unitLabel": "cm²"
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Một bể nước hình hộp chữ nhật có đáy 50 cm × 40 cm, nước trong bể cao 10 cm. Thả chìm hoàn toàn vào bể một khối lăng trụ tam giác (đáy là tam giác vuông có hai cạnh góc vuông 12 cm và 10 cm, chiều dài lăng trụ 25 cm). Mực nước dâng lên bao nhiêu milimét?",
    "svg": null,
    "choices": null,
    "answer": 7.5,
    "hints": [
     "Thể tích của khối lăng trụ là bao nhiêu cm³?",
     "Thể tích nước dâng lên bằng thể tích vật chìm. Diện tích đáy bể là bao nhiêu?",
     "Chiều cao dâng = thể tích : diện tích đáy (cm), rồi đổi sang mm."
    ],
    "explain": "Thể tích lăng trụ = (12 × 10 : 2) × 25 = 1500 cm³. Diện tích đáy bể = 50 × 40 = 2000 cm². Nước dâng 1500 : 2000 = 0,75 cm = 7,5 mm.",
    "tol": 0.01,
    "unitLabel": "mm"
   },
   {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Một hình chóp đều có đáy là hình vuông cạnh 10 cm và chiều cao 12 cm (đỉnh nằm phía trên tâm đáy). Tính diện tích toàn phần của hình chóp (cm²).",
    "svg": null,
    "choices": null,
    "answer": 360,
    "hints": [
     "Khoảng cách từ tâm đáy đến cạnh đáy là bao nhiêu cm?",
     "Đường cao của mặt bên (từ đỉnh xuống trung điểm cạnh đáy) tạo với chiều cao và khoảng cách trên một tam giác vuông; tính nó.",
     "Diện tích toàn phần = đáy + 4 mặt bên tam giác."
    ],
    "explain": "Khoảng cách từ tâm đến cạnh đáy: 5 cm. Đường cao mặt bên = √(12² + 5²) = 13 cm. Mỗi mặt bên: 1/2 × 10 × 13 = 65 cm², 4 mặt: 260 cm². Đáy: 100 cm². Tổng = 360 cm².",
    "tol": 0,
    "unitLabel": "cm²"
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Một hình bình hành có hai cạnh kề dài 10 cm và 6 cm, góc giữa hai cạnh đó là 30°. Bạn Mai tính diện tích bằng 10 × 6 = 60 cm². Lỗi sai của bạn Mai là gì?",
    "svg": null,
    "choices": [
     "Phải nhân 10 × 6 rồi chia 2",
     "Cạnh 6 cm là cạnh xiên, không phải chiều cao; diện tích đúng là 30 cm²",
     "Diện tích đúng là 60 cm² vì 10 × 6 là công thức đúng",
     "Phải dùng công thức hình thang"
    ],
    "answer": 1,
    "hints": [
     "Công thức diện tích hình bình hành dùng cạnh bên hay đường cao tương ứng với đáy?",
     "Nếu đáy là 10 cm thì đường cao vẽ từ đỉnh đối diện có bằng cạnh 6 cm không?",
     "Trong tam giác vuông tạo bởi cạnh 6, góc 30°, đường cao bằng bao nhiêu?"
    ],
    "explain": "Diện tích = đáy × đường cao vuông góc. Với đáy 10, đường cao = 3 (cạnh đối diện góc 30° bằng nửa cạnh huyền 6 trong tam giác vuông), nên diện tích = 30 cm². Bạn Mai đã dùng cạnh bên (xiên) thay cho chiều cao."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Hai hình bình hành ABCD và ABEF có chung cạnh AB, và các cạnh DC, EF cùng nằm trên một đường thẳng song song với AB. Khẳng định nào chắc chắn đúng?",
    "svg": null,
    "choices": [
     "Hai hình bình hành có diện tích bằng nhau",
     "ABCD có diện tích lớn hơn nếu cạnh AD dài hơn",
     "Hai hình bình hành có chu vi bằng nhau",
     "Hai hình bình hành bằng nhau (chồng khít)"
    ],
    "answer": 0,
    "hints": [
     "Hai hình bình hành có chung đáy AB không? Khoảng cách giữa hai đường thẳng song song là gì đối với cả hai hình?",
     "Chiều cao của hai hình bình hành so với đáy AB có bằng nhau không?",
     "Công thức diện tích dùng những đại lượng nào?"
    ],
    "explain": "Cả hai có đáy AB và cùng chiều cao (khoảng cách giữa hai đường thẳng song song), nên diện tích bằng nhau dù hình dạng xiên khác nhau."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-measure",
    "source": "hsg",
    "lang": "vi",
    "q": "Tăng gấp đôi mọi kích thước (mọi độ dài) của một lăng trụ tam giác. Diện tích toàn phần và thể tích thay đổi như thế nào?",
    "svg": null,
    "choices": [
     "Cả hai đều tăng gấp 2",
     "Diện tích gấp 2, thể tích gấp 4",
     "Diện tích gấp 4, thể tích gấp 8",
     "Diện tích gấp 8, thể tích gấp 16"
    ],
    "answer": 2,
    "hints": [
     "Diện tích là tích của mấy độ dài? Nó nhân lên bao nhiêu khi mỗi độ dài nhân đôi?",
     "Thể tích là tích của mấy độ dài?",
     "Ghép hai kết quả."
    ],
    "explain": "Diện tích gồm tích hai độ dài: nhân 2² = 4. Thể tích gồm tích ba độ dài: nhân 2³ = 8. Lỗi hay gặp: cho rằng cả hai đều tăng gấp đôi.",
    "why": {
     "q": "Vì sao diện tích nhân 4 còn thể tích nhân 8?",
     "choices": [
      "Vì diện tích chứa hai chiều và thể tích chứa ba chiều, mỗi chiều nhân 2",
      "Vì 4 = 2 + 2 và 8 = 2 + 2 + 2 + 2",
      "Vì diện tích chỉ tính mặt đáy",
      "Vì thể tích luôn gấp đôi diện tích"
     ],
     "answer": 0
    }
   }
  ]
 },
 "tr": {
  "en": {
   "q.hsg-01.q": "Use 5 miles ≈ 8 km. A car drives 100 km at a constant speed of 50 miles per hour. How many minutes does the journey take?",
   "q.hsg-01.hints": [
    "How many km per hour is 50 miles per hour? (50 miles is how many times 5 miles?)",
    "Time = distance ÷ speed, in hours.",
    "Convert that number of hours to minutes."
   ],
   "q.hsg-01.explain": "50 miles = 10 × 8 = 80 km, so the speed is 80 km/h. Time = 100 ÷ 80 = 1.25 hours = 75 minutes.",
   "q.hsg-02.q": "A trapezium has area 150 cm² and height 10 cm, and its parallel sides differ in length by 6 cm. Find the length of the longer parallel side (cm).",
   "q.hsg-02.hints": [
    "Area of a trapezium = (sum of parallel sides) × height ÷ 2. Use it to find the sum of the parallel sides.",
    "You know the sum and the difference of the two sides; how do you find each?",
    "The longer side = (sum + difference) ÷ 2."
   ],
   "q.hsg-02.explain": "(a + b) × 10 ÷ 2 = 150 ⇒ a + b = 30. With a − b = 6, a = (30 + 6) ÷ 2 = 18 and b = 12. The longer side is 18 cm.",
   "q.hsg-03.q": "A prism has a right-angled triangular cross-section with perpendicular sides 6 cm and 8 cm, and the prism is 15 cm long. Find the total surface area of the prism (cm²).",
   "q.hsg-03.hints": [
    "How long is the hypotenuse of the triangular face? (6, 8, … )",
    "What is the total area of the two triangular ends?",
    "The three rectangular faces have total area = perimeter of the triangle × length."
   ],
   "q.hsg-03.explain": "The hypotenuse = 10 cm. Two ends: 2 × (6 × 8 ÷ 2) = 48 cm². Rectangular faces: (6 + 8 + 10) × 15 = 360 cm². Total = 408 cm².",
   "q.hsg-04.q": "A rectangular tank has a base 50 cm by 40 cm and contains water to a depth of 10 cm. A solid triangular prism (cross-section a right-angled triangle with perpendicular sides 12 cm and 10 cm, length 25 cm) is completely submerged in the tank. By how many millimetres does the water level rise?",
   "q.hsg-04.hints": [
    "What is the volume of the prism in cm³?",
    "The rise in water volume equals the submerged volume. What is the area of the tank base?",
    "Rise in height = volume ÷ base area (in cm); then convert to mm."
   ],
   "q.hsg-04.explain": "Volume of prism = (12 × 10 ÷ 2) × 25 = 1500 cm³. Base area of tank = 50 × 40 = 2000 cm². The water rises 1500 ÷ 2000 = 0.75 cm = 7.5 mm.",
   "q.hsg-05.q": "A pyramid has a square base of side 10 cm and a vertical height of 12 cm (the apex is directly above the centre of the base). Find the total surface area of the pyramid (cm²).",
   "q.hsg-05.hints": [
    "How far is the centre of the base from a base edge, in cm?",
    "The slant height of a face, the vertical height and that distance form a right-angled triangle; find the slant height.",
    "Total surface area = base + 4 triangular faces."
   ],
   "q.hsg-05.explain": "The distance from the centre to a base edge is 5 cm. The slant height = √(12² + 5²) = 13 cm. Each face: 1/2 × 10 × 13 = 65 cm², four faces: 260 cm². Base: 100 cm². Total = 360 cm².",
   "q.hsg-06.q": "A parallelogram has two adjacent sides of 10 cm and 6 cm, with an angle of 30° between them. Mai calculates the area as 10 × 6 = 60 cm². What is her mistake?",
   "q.hsg-06.choices": [
    "She must work out 10 × 6 and then halve it",
    "The 6 cm side is slanted, not the height; the correct area is 30 cm²",
    "The correct area is 60 cm² because 10 × 6 is the right formula",
    "She should use the trapezium formula"
   ],
   "q.hsg-06.hints": [
    "Does the area formula use the slanting side or the perpendicular height corresponding to the base?",
    "If the base is 10 cm, is the height from the opposite vertex equal to the 6 cm side?",
    "In the right-angled triangle formed with the side 6 and the 30° angle, how long is the height?"
   ],
   "q.hsg-06.explain": "Area = base × perpendicular height. With base 10, the height = 3 (the side opposite 30° is half the hypotenuse 6 in a right-angled triangle), so the area = 30 cm². Mai used the slanting side instead of the height.",
   "q.hsg-07.q": "Parallelograms ABCD and ABEF share the side AB, and the sides DC and EF lie on the same line parallel to AB. Which statement is definitely true?",
   "q.hsg-07.choices": [
    "The two parallelograms have equal areas",
    "ABCD has the bigger area if AD is longer",
    "The two parallelograms have equal perimeters",
    "The two parallelograms are congruent"
   ],
   "q.hsg-07.hints": [
    "Do both parallelograms have base AB? What does the distance between the two parallel lines represent for each?",
    "Are the heights of the two parallelograms (relative to base AB) equal?",
    "Which quantities does the area formula use?"
   ],
   "q.hsg-07.explain": "Both have base AB and the same height (the distance between the two parallel lines), so their areas are equal even though their slants differ.",
   "q.hsg-08.why.q": "Why is area multiplied by 4 but volume by 8?",
   "q.hsg-08.why.choices": [
    "Because area has two dimensions and volume has three, and each is multiplied by 2",
    "Because 4 = 2 + 2 and 8 = 2 + 2 + 2 + 2",
    "Because area only counts the base",
    "Because volume is always double the area"
   ],
   "q.hsg-08.q": "All dimensions (every length) of a triangular prism are doubled. How do the total surface area and the volume change?",
   "q.hsg-08.choices": [
    "Both are doubled",
    "Area ×2, volume ×4",
    "Area ×4, volume ×8",
    "Area ×8, volume ×16"
   ],
   "q.hsg-08.hints": [
    "Area is a product of how many lengths? By what factor does it grow when each length doubles?",
    "Volume is a product of how many lengths?",
    "Put the two results together."
   ],
   "q.hsg-08.explain": "Area involves a product of two lengths: multiplied by 2² = 4. Volume involves a product of three lengths: multiplied by 2³ = 8. A common mistake is to think both double."
  },
  "vi": {}
 }
});
