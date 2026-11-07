window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 15,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "doi-don-vi-dien-tich",
    "lang": "vi",
    "q": "Một mảnh đất hình chữ nhật có chiều rộng 450 m và chiều dài 0,8 km. Tính diện tích mảnh đất theo héc-ta (1 ha = 10 000 m²).",
    "svg": null,
    "choices": null,
    "answer": 36,
    "hints": [
      "Đổi chiều dài sang cùng đơn vị với chiều rộng: 0,8 km bằng bao nhiêu mét?",
      "Tính diện tích bằng mét vuông.",
      "Chia cho 10 000 để đổi sang héc-ta."
    ],
    "explain": "0,8 km = 800 m. Diện tích: 450 × 800 = 360 000 m². Vì 1 ha = 10 000 m² nên diện tích là 360 000 : 10 000 = 36 ha.",
    "unitLabel": "ha",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "dien-tich-tam-giac-chung-duong-cao",
    "lang": "vi",
    "q": "Cho tam giác ABC có diện tích 60 cm². Điểm M nằm trên cạnh BC sao cho BM : MC = 2 : 3. Tính diện tích tam giác ABM (cm²).",
    "svg": null,
    "choices": null,
    "answer": 24,
    "hints": [
      "Hai tam giác ABM và ABC (hay ABM và AMC) có chung đường cao nào kẻ từ A?",
      "Khi chung chiều cao, diện tích tỉ lệ với đại lượng nào?",
      "BM chiếm bao nhiêu phần của BC? Từ đó tính diện tích ABM."
    ],
    "explain": "ABM và ABC có chung chiều cao hạ từ A xuống BC nên diện tích tỉ lệ với đáy: S(ABM) : S(ABC) = BM : BC = 2 : 5. Vậy S(ABM) = 60 × 2/5 = 24 cm².",
    "unitLabel": "cm²",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hinh-hop-ti-le",
    "lang": "vi",
    "q": "Một hình hộp chữ nhật có ba kích thước theo tỉ lệ 1 : 2 : 3 và thể tích 162 cm³. Tính diện tích toàn phần của hình hộp (cm²).",
    "svg": null,
    "choices": null,
    "answer": 198,
    "hints": [
      "Gọi các kích thước là k, 2k, 3k. Thể tích theo k là gì?",
      "Giải k³ = 27 để tìm k, suy ra ba kích thước.",
      "Diện tích toàn phần bằng 2 lần tổng ba diện tích mặt khác nhau."
    ],
    "explain": "Thể tích: k · 2k · 3k = 6k³ = 162 ⇒ k³ = 27 ⇒ k = 3. Các kích thước 3, 6, 9 cm. Diện tích toàn phần: 2(3·6 + 6·9 + 3·9) = 2(18 + 54 + 27) = 198 cm².",
    "unitLabel": "cm²",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "dem-khoi-lap-phuong",
    "lang": "vi",
    "q": "Một khối lập phương cạnh 5 cm được sơn toàn bộ mặt ngoài, rồi cưa thành 125 khối lập phương nhỏ cạnh 1 cm. Có bao nhiêu khối nhỏ có đúng một mặt được sơn?",
    "svg": null,
    "choices": null,
    "answer": 54,
    "hints": [
      "Khối có đúng một mặt sơn nằm ở vị trí nào so với khối lớn (ở đỉnh, cạnh, hay giữa mặt)?",
      "Trên mỗi mặt của khối lớn, những khối nằm ở giữa (không dính cạnh) tạo thành hình vuông cạnh bao nhiêu?",
      "Khối lập phương có mấy mặt? Nhân lên."
    ],
    "explain": "Khối có đúng một mặt sơn nằm ở phần giữa của mỗi mặt, không sát cạnh. Mỗi mặt có (5 − 2) × (5 − 2) = 9 khối như vậy. Có 6 mặt nên 6 × 9 = 54 khối.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "the-tich-nuoc-dang",
    "lang": "vi",
    "q": "Một bể nước hình hộp chữ nhật có đáy 36 cm × 24 cm, bên trong có nước (chưa đầy). Thả chìm hoàn toàn một khối sắt hình lập phương cạnh 12 cm vào bể (nước không tràn ra ngoài). Mực nước dâng lên bao nhiêu cm?",
    "svg": null,
    "choices": null,
    "answer": 2,
    "hints": [
      "Thể tích nước dâng lên bằng thể tích của vật nào?",
      "Thể tích khối sắt là bao nhiêu? Diện tích đáy bể là bao nhiêu?",
      "Phần nước dâng lên là hình hộp có đáy là đáy bể: chiều cao bằng thể tích chia diện tích đáy."
    ],
    "explain": "Thể tích khối sắt: 12³ = 1728 cm³ bằng thể tích nước dâng lên. Diện tích đáy bể: 36 × 24 = 864 cm². Mực nước dâng: 1728 : 864 = 2 cm.",
    "unitLabel": "cm",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "ti-le-the-tich-dien-tich",
    "lang": "vi",
    "q": "Gấp đôi cả ba kích thước (dài, rộng, cao) của một hình hộp chữ nhật. Phát biểu nào sau đây đúng?",
    "svg": null,
    "choices": [
      "Diện tích toàn phần và thể tích đều gấp 2 lần",
      "Diện tích toàn phần gấp 4 lần và thể tích gấp 4 lần",
      "Diện tích toàn phần gấp 4 lần và thể tích gấp 8 lần",
      "Diện tích toàn phần gấp 8 lần và thể tích gấp 4 lần"
    ],
    "answer": 2,
    "hints": [
      "Thử với hình lập phương cạnh 1 rồi cạnh 2: diện tích toàn phần và thể tích thay đổi thế nào?",
      "Diện tích là tích của hai độ dài, thể tích là tích của ba độ dài. Mỗi độ dài nhân 2 thì sao?",
      "Chọn phát biểu khớp với hai kết quả đó."
    ],
    "explain": "Diện tích toàn phần gồm tích của hai kích thước nên gấp 2² = 4 lần; thể tích gồm tích của ba kích thước nên gấp 2³ = 8 lần. Sai lầm phổ biến: nghĩ rằng cả hai đều gấp 2 lần.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "tim-loi-dien-tich-tam-giac",
    "lang": "vi",
    "q": "An tính diện tích tam giác có đáy 12 cm và chiều cao 8 cm là 12 × 8 = 96 cm². Bình tính được 48 cm². Nhận xét nào đúng?",
    "svg": null,
    "choices": [
      "An đúng vì diện tích = đáy × chiều cao",
      "Bình đúng: diện tích tam giác = ½ × đáy × chiều cao, An đã tính diện tích hình chữ nhật",
      "Cả hai đều sai: diện tích là 20 cm²",
      "Cả hai đều đúng: tùy cạnh nào chọn làm đáy"
    ],
    "answer": 1,
    "hints": [
      "Hình chữ nhật 12 cm × 8 cm có diện tích bao nhiêu? Tam giác cùng đáy, cùng chiều cao chiếm bao nhiêu phần?",
      "Công thức diện tích tam giác có hệ số nào?",
      "So sánh 96 và 48 với công thức đúng."
    ],
    "explain": "Diện tích tam giác = ½ × đáy × chiều cao = ½ × 12 × 8 = 48 cm². An quên nhân ½ nên được diện tích hình chữ nhật cùng đáy, cùng chiều cao. Bình đúng.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "duong-cao-huyen",
    "lang": "vi",
    "q": "Tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm và BC = 10 cm. Tính độ dài đường cao AH hạ từ A xuống cạnh BC (cm).",
    "svg": null,
    "choices": null,
    "answer": 4.8,
    "hints": [
      "Diện tích tam giác vuông tính theo hai cạnh góc vuông là bao nhiêu?",
      "Cũng diện tích đó tính theo đáy BC và chiều cao AH được viết thế nào?",
      "Cho hai biểu thức bằng nhau và giải tìm AH."
    ],
    "explain": "Diện tích = ½ · AB · AC = ½ · 6 · 8 = 24 cm². Cũng bằng ½ · BC · AH = ½ · 10 · AH = 5AH. Vậy 5AH = 24 ⇒ AH = 4,8 cm.",
    "tol": 0.01,
    "unitLabel": "cm",
    "why": {
      "q": "Vì sao cùng một tam giác lại viết được diện tích là ½·6·8 và ½·10·AH?",
      "choices": [
        "Vì diện tích không phụ thuộc cạnh nào được chọn làm đáy, miễn là dùng đúng đường cao tương ứng",
        "Vì 6 × 8 = 10 × AH đúng với mọi tam giác",
        "Vì AH luôn bằng nửa BC",
        "Vì tam giác cân"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "A rectangular plot of land is 450 m wide and 0.8 km long. Find its area in hectares (1 ha = 10 000 m²).",
  "q.hsg-01.hints": [
    "Convert the length to the same unit as the width: how many metres is 0.8 km?",
    "Work out the area in square metres.",
    "Divide by 10 000 to convert to hectares."
  ],
  "q.hsg-01.explain": "0.8 km = 800 m. Area: 450 × 800 = 360 000 m². Since 1 ha = 10 000 m², the area is 360 000 ÷ 10 000 = 36 ha.",
  "q.hsg-02.q": "Triangle ABC has area 60 cm². Point M lies on side BC with BM : MC = 2 : 3. Find the area of triangle ABM (cm²).",
  "q.hsg-02.hints": [
    "Triangles ABM and ABC share which height drawn from A?",
    "When the height is shared, the area is proportional to which quantity?",
    "What fraction of BC is BM? Use it to work out the area of ABM."
  ],
  "q.hsg-02.explain": "ABM and ABC share the height from A to BC, so their areas are proportional to their bases: area(ABM) : area(ABC) = BM : BC = 2 : 5. So area(ABM) = 60 × 2/5 = 24 cm².",
  "q.hsg-03.q": "A cuboid has three edges in the ratio 1 : 2 : 3 and volume 162 cm³. Find the total surface area of the cuboid (cm²).",
  "q.hsg-03.hints": [
    "Let the edges be k, 2k, 3k. What is the volume in terms of k?",
    "Solve k³ = 27 to find k, then the three edges.",
    "The surface area is twice the sum of the three different face areas."
  ],
  "q.hsg-03.explain": "Volume: k · 2k · 3k = 6k³ = 162 ⇒ k³ = 27 ⇒ k = 3. The edges are 3, 6, 9 cm. Surface area: 2(3·6 + 6·9 + 3·9) = 2(18 + 54 + 27) = 198 cm².",
  "q.hsg-04.q": "A cube of side 5 cm is painted on all its outside faces, then cut into 125 small cubes of side 1 cm. How many small cubes have exactly one painted face?",
  "q.hsg-04.hints": [
    "Where are the cubes with exactly one painted face located on the big cube (at a corner, along an edge, or in the middle of a face)?",
    "On each face of the big cube, the cubes in the middle (not touching an edge) form a square of what side?",
    "How many faces does a cube have? Multiply."
  ],
  "q.hsg-04.explain": "The cubes with exactly one painted face are in the middle of each face, away from the edges. Each face has (5 − 2) × (5 − 2) = 9 such cubes. There are 6 faces, so 6 × 9 = 54 cubes.",
  "q.hsg-05.q": "A cuboid-shaped water tank has a base 36 cm by 24 cm and contains some water (not full). An iron cube of side 12 cm is completely submerged in the tank (no water overflows). By how many cm does the water level rise?",
  "q.hsg-05.hints": [
    "The volume of water displaced equals the volume of which object?",
    "What is the volume of the iron cube? What is the area of the tank's base?",
    "The risen water is a cuboid with the tank's base: its height is the volume divided by the base area."
  ],
  "q.hsg-05.explain": "Volume of the cube: 12³ = 1728 cm³, equal to the volume of water pushed up. Base area: 36 × 24 = 864 cm². The level rises 1728 ÷ 864 = 2 cm.",
  "q.hsg-06.q": "All three dimensions (length, width, height) of a cuboid are doubled. Which statement is true?",
  "q.hsg-06.hints": [
    "Try a cube of side 1 then side 2: how do the surface area and the volume change?",
    "Area is a product of two lengths, volume a product of three. What happens if each length is multiplied by 2?",
    "Choose the statement matching those two results."
  ],
  "q.hsg-06.explain": "Surface area is made of products of two dimensions, so it is multiplied by 2² = 4; volume is a product of three dimensions, so it is multiplied by 2³ = 8. Common mistake: thinking both are just doubled.",
  "q.hsg-06.choices": [
    "Surface area and volume are both doubled",
    "Surface area is multiplied by 4 and volume by 4",
    "Surface area is multiplied by 4 and volume by 8",
    "Surface area is multiplied by 8 and volume by 4"
  ],
  "q.hsg-07.q": "An finds the area of a triangle with base 12 cm and height 8 cm to be 12 × 8 = 96 cm². Bình finds 48 cm². Which comment is correct?",
  "q.hsg-07.hints": [
    "What is the area of a 12 cm × 8 cm rectangle? What fraction of it does a triangle with the same base and height take up?",
    "Which factor appears in the formula for the area of a triangle?",
    "Compare 96 and 48 with the correct formula."
  ],
  "q.hsg-07.explain": "Area of a triangle = ½ × base × height = ½ × 12 × 8 = 48 cm². An forgot the ½ and found the area of the rectangle with the same base and height. Bình is right.",
  "q.hsg-07.choices": [
    "An is right because area = base × height",
    "Bình is right: the area of a triangle is ½ × base × height, and An found the area of a rectangle",
    "Both are wrong: the area is 20 cm²",
    "Both are right: it depends on which side is the base"
  ],
  "q.hsg-08.q": "Triangle ABC is right-angled at A with AB = 6 cm, AC = 8 cm and BC = 10 cm. Find the length of the altitude AH drawn from A to BC (cm).",
  "q.hsg-08.hints": [
    "What is the area of a right-angled triangle using its two perpendicular sides?",
    "How is the same area written using base BC and height AH?",
    "Set the two expressions equal and solve for AH."
  ],
  "q.hsg-08.explain": "Area = ½ · AB · AC = ½ · 6 · 8 = 24 cm². It also equals ½ · BC · AH = ½ · 10 · AH = 5AH. So 5AH = 24 ⇒ AH = 4.8 cm.",
  "q.hsg-08.why.q": "Why can the same triangle's area be written both as ½·6·8 and as ½·10·AH?",
  "q.hsg-08.why.choices": [
    "Because the area does not depend on which side is chosen as the base, as long as the matching height is used",
    "Because 6 × 8 = 10 × AH is always true for any triangle",
    "Because AH is always half of BC",
    "Because the triangle is isosceles"
  ]
}, vi: {} }
});
