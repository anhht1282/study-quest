window.GAME_DATA = window.GAME_DATA || { units: [] };
(function () {
  function Q(o) {
    return {
      id: o.id, type: o.type, diff: o.diff, skill: o.skill,
      source: o.source || "book", lang: o.lang || "en",
      q: o.q, svg: o.svg || null, choices: o.choices || null,
      answer: o.answer, accept: o.accept || [], tol: o.tol || 0,
      unitLabel: o.unitLabel || "", hints: o.h, explain: o.e, why: o.why || null, howto: o.howto || null
    };
  }
  function V(o) { o.source = "vn"; o.lang = "vi"; return Q(o); }
  var HEAD = '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" font-family="sans-serif" font-size="11" stroke-width="1.6">';
  function T(x, y, t) { return '<text x="' + x + '" y="' + y + '" fill="currentColor" stroke="none">' + t + '</text>'; }
  var DASH = ' stroke-dasharray="4 3" stroke-width="1.2"';

  // Parallelogram with base label b, perpendicular height label h, slant label s (optional)
  function PA(b, h, s) {
    var o = HEAD + '<polygon points="50,150 190,150 230,60 90,60" fill="currentColor" fill-opacity="0.12"/>';
    o += '<line x1="90" y1="60" x2="90" y2="150"' + DASH + '/><polyline points="90,142 98,142 98,150" stroke-width="1"/>';
    o += T(112, 168, b) + T(94, 108, h);
    if (s) { o += T(24, 108, s); }
    return o + '</svg>';
  }
  // Trapezium with parallel sides a (top), b (bottom) and height h
  function TZ(a, b, h) {
    var o = HEAD + '<polygon points="40,150 220,150 180,60 80,60" fill="currentColor" fill-opacity="0.12"/>';
    o += '<line x1="80" y1="60" x2="80" y2="150"' + DASH + '/><polyline points="80,142 88,142 88,150" stroke-width="1"/>';
    o += T(115, 52, a) + T(120, 168, b) + T(84, 108, h);
    return o + '</svg>';
  }
  // Triangular prism with right-angled triangle cross-section: legs base/height and length
  function PR(base, height, len) {
    var o = HEAD + '<polygon points="40,170 130,170 130,90" fill="currentColor" fill-opacity="0.12"/>';
    o += '<polyline points="130,90 210,50 210,130 130,170"/><line x1="40" y1="170" x2="120" y2="130"' + DASH + '/><line x1="120" y1="130" x2="210" y2="130"' + DASH + '/><line x1="120" y1="130" x2="130" y2="90" stroke-opacity="0"/>';
    o += '<line x1="130" y1="90" x2="210" y2="50"/><line x1="130" y1="170" x2="210" y2="130"/>';
    o += T(78, 185, base) + T(134, 132, height) + T(176, 160, len);
    return o + '</svg>';
  }
  // Square-based pyramid with base and slant height labels
  function PY(base, slant) {
    var o = HEAD + '<polygon points="50,150 170,150 220,120 100,120" fill="currentColor" fill-opacity="0.08"/>';
    o += '<line x1="135" y1="30" x2="50" y2="150"/><line x1="135" y1="30" x2="170" y2="150"/><line x1="135" y1="30" x2="220" y2="120"/><line x1="135" y1="30" x2="100" y2="120"' + DASH + '/>';
    o += '<line x1="135" y1="30" x2="110" y2="150"' + DASH + '/>';
    o += T(100, 168, base) + T(92, 95, slant);
    return o + '</svg>';
  }

  window.GAME_DATA.units.push({
    id: 15,
    title: "Distance, area and volume",
    titleVi: "Khoảng cách, diện tích và thể tích",
    strand: "Geometry and measure",
    pages: [331, 351],
    realm: "Thành Phố Kim Tự Tháp",
    emoji: "🔺",
    story: "Trong thành phố cổ có những kim tự tháp, bể nước hình lăng trụ và những cánh đồng hình thang. Nhà thám hiểm người Anh để lại bản đồ ghi dặm thay vì ki-lô-mét. Em phải đổi đơn vị, tính diện tích, thể tích và lượng vải bọc để mở cánh cổng đá.",
    glossary: [
      { en: "mile", vi: "dặm (Anh)", def: "Đơn vị đo độ dài; 5 dặm xấp xỉ 8 km, tức 1 dặm ≈ 1,6 km." },
      { en: "parallelogram", vi: "hình bình hành", def: "Tứ giác có hai cặp cạnh đối song song; diện tích = đáy × chiều cao vuông góc." },
      { en: "trapezium", vi: "hình thang", def: "Tứ giác có một cặp cạnh song song; diện tích = ½ × (tổng hai đáy) × chiều cao." },
      { en: "perpendicular height", vi: "chiều cao vuông góc", def: "Khoảng cách vuông góc giữa hai cạnh đáy, không phải độ dài cạnh bên nghiêng." },
      { en: "prism", vi: "lăng trụ", def: "Khối có hai mặt đáy bằng nhau, song song; mọi mặt cắt song song với đáy đều giống đáy." },
      { en: "cross-section", vi: "mặt cắt ngang", def: "Hình tạo ra khi cắt lăng trụ vuông góc với chiều dài, ví dụ một hình tam giác." },
      { en: "volume", vi: "thể tích", def: "Lượng không gian khối chiếm, đo bằng cm³, m³ ...; thể tích lăng trụ = diện tích đáy × chiều dài." },
      { en: "surface area", vi: "diện tích toàn phần", def: "Tổng diện tích mọi mặt của khối." },
      { en: "net", vi: "hình khai triển", def: "Hình phẳng gấp lại được thành khối." },
      { en: "slant height", vi: "đường cao mặt bên (trung đoạn)", def: "Chiều cao của mặt tam giác bên của kim tự tháp, đo theo mặt nghiêng." }
    ],
    sections: [
      {
        id: "15.1",
        title: "Converting between miles and kilometres",
        titleVi: "Đổi giữa dặm và ki-lô-mét",
        learn: [
          "Quy ước dùng trong sách: 5 dặm ≈ 8 km, tức 1 dặm ≈ 1,6 km và 1 km ≈ 5/8 dặm.",
          "Km sang dặm: nhân 5/8 (chia 8 rồi nhân 5). Dặm sang km: nhân 8/5 (chia 5 rồi nhân 8).",
          "Dặm sang km: nhân với 1,6 (hoặc nhân 8 rồi chia 5). Số km lớn hơn số dặm.",
          "Km sang dặm: chia cho 1,6 (hoặc nhân 5 rồi chia 8). Số dặm nhỏ hơn số km.",
          "Tốc độ cũng đổi như vậy: dặm/giờ sang km/giờ nhân 1,6.",
          "Kiểm tra bằng ước lượng: 1 dặm dài hơn 1 km, nên số km phải lớn hơn số dặm."
        ],
        example: {
          q: "Đổi 35 dặm ra km.",
          steps: ["35 ÷ 5 = 7 nhóm 5 dặm", "Mỗi nhóm 5 dặm = 8 km: 7 × 8 = 56", "35 dặm ≈ 56 km."],
          prompts: ["Quy ước 5 dặm ≈ 8 km. 35 dặm chứa bao nhiêu nhóm 5 dặm?","Mỗi nhóm 5 dặm đổi ra 8 km. Tổng cộng là bao nhiêu?","Vì quy ước chỉ gần đúng nên kết luận dùng dấu nào?"],
          answer: {"type":"num","value":56},
          twist: {"q":"Nếu một chặng đường dài 120 km thì bằng khoảng bao nhiêu dặm (dùng 5 dặm ≈ 8 km)?","answer":{"type":"num","value":75}}
        },
        questions: [
          Q({ id: "15.1-01", type: "multi", diff: 1, skill: "miles-km-compare",
            q: "Which of these statements are TRUE? (Choose all that apply.)",
            choices: ["15 miles is further than 15 km.", "100 km is exactly the same distance as 100 miles.", "2.5 km is further than 2.5 miles.", "6 km is not as far as 6 miles.", "In one hour, a car travelling at 70 miles per hour goes a shorter distance than a car travelling at 70 km per hour."], answer: [0, 3],
            h: ["Dặm dài hơn hay ngắn hơn ki-lô-mét?", "Cùng một con số: nếu đơn vị dài hơn thì quãng đường có dài hơn không?", "Xét từng câu: câu nào cho dặm lớn hơn km thì đúng, câu nào ngược lại thì sai."],
            e: "1 dặm ≈ 1,6 km, dài hơn 1 km. Vậy 15 dặm > 15 km (đúng) và 6 km < 6 dặm (đúng). 100 km không bằng 100 dặm; 2,5 km ngắn hơn 2,5 dặm; xe 70 dặm/giờ đi xa hơn xe 70 km/giờ." }),
          Q({ id: "15.1-02", type: "mc", diff: 2, skill: "miles-km-compare",
            q: "Zara says: 'My brother lives 35 km from my house. My sister lives 35 miles from my house. I live closer to my brother than to my sister.' Is Zara correct?",
            choices: ["Yes, because 35 km is a shorter distance than 35 miles", "No, because 35 km is further than 35 miles", "No, they are the same distance", "Cannot tell without a map"], answer: 0,
            h: ["Hãy đổi 35 dặm ra km (hoặc nghĩ 1 dặm dài hơn hay ngắn hơn 1 km).", "35 × 1,6 = ?", "So sánh với 35 km."],
            e: "35 dặm = 35 × 1,6 = 56 km, lớn hơn 35 km. Vậy anh trai ở gần hơn: Zara đúng." }),
          Q({ id: "15.1-03", type: "num", diff: 1, skill: "km-to-miles",
            q: "Convert 96 km into miles. (Use 8 km ≈ 5 miles.)", answer: 60, unitLabel: "dặm",
            h: ["Km sang dặm: nhân với 5/8. Em chia 96 cho 8 trước.", "96 ÷ 8 = ?", "Rồi nhân kết quả với 5."],
            e: "96 ÷ 8 = 12; 12 × 5 = 60 dặm." }),
          Q({ id: "15.1-04", type: "num", diff: 1, skill: "miles-to-km",
            q: "Convert 55 miles into kilometres. (Use 5 miles ≈ 8 km.)", answer: 88, unitLabel: "km",
            h: ["Dặm sang km: nhân với 8/5. Chia 55 cho 5 trước.", "55 ÷ 5 = ?", "Nhân kết quả với 8."],
            e: "55 ÷ 5 = 11; 11 × 8 = 88 km." }),
          Q({ id: "15.1-05", type: "num", diff: 2, skill: "miles-to-km",
            q: "Hamza and Inaya convert 23 miles into kilometres. Work out the answer as a decimal. (1 mile ≈ 8/5 km = 1.6 km.)", answer: 36.8, tol: 0.001, unitLabel: "km",
            h: ["Dặm sang km: nhân với 8/5, tức nhân 1,6.", "23 × 1,6 = 23 + 23 × 0,6.", "23 + 13,8 = ?"],
            e: "23 × 1,6 = 36,8 km (cũng là 36 4/5 km)." }),
          Q({ id: "15.1-06", type: "mc", diff: 2, skill: "miles-km-misconception",
            q: "Convert 50 miles to kilometres (1 mile ≈ 1.6 km). Marcus divides: 50 ÷ 1.6 = 31.25 km. Zara multiplies: 50 × 1.6 = 80 km. Who is correct?",
            choices: ["Zara: 80 km", "Marcus: 31.25 km", "Both are correct", "Neither: it is 30 km"], answer: 0,
            h: ["1 dặm dài hơn hay ngắn hơn 1 km?", "Vậy 50 dặm đổi ra km sẽ nhiều hơn hay ít hơn 50?", "Phép nào làm số tăng lên?"],
            e: "Dặm dài hơn km nên số km lớn hơn 50: phải nhân. Marcus chia sai, kết quả nhỏ hơn 50 là vô lý." }),
          Q({ id: "15.1-07", type: "mc", diff: 3, skill: "compare-distance",
            q: "Which is further, 107 km or 70 miles? (1 mile ≈ 1.6 km)",
            choices: ["70 miles", "107 km", "They are equal"], answer: 0,
            h: ["Muốn so sánh, phải đưa về cùng một đơn vị. Đổi 70 dặm ra km có dễ không?", "70 × 1,6 = ?", "So sánh kết quả với 107 km."],
            e: "70 dặm = 70 × 1,6 = 112 km > 107 km, nên 70 dặm xa hơn. (Hoặc đổi 107 km ra dặm ≈ 66,9 dặm < 70.)" }),
          Q({ id: "15.1-08", type: "num", diff: 2, skill: "milometer",
            q: "Evan's car milometer reads 125 465 miles at the start of a week and 126 335 miles at the end. How many kilometres did he travel this week? (1 mile ≈ 1.6 km)", answer: 1392, unitLabel: "km",
            h: ["Số dặm đã đi là hiệu hai số chỉ trên đồng hồ.", "126 335 − 125 465 = ?", "Đổi sang km: nhân 1,6."],
            e: "126 335 − 125 465 = 870 dặm. 870 × 1,6 = 1392 km." }),
          Q({ id: "15.1-09", type: "num", diff: 3, skill: "milometer",
            q: "Evan is paid 20 cents for each kilometre he travels. Using the distance from the previous question (870 miles, 1 mile ≈ 1.6 km), how many dollars is he paid for the week? (Evan thinks it is more than $250.)", answer: 278.4, tol: 0.01, unitLabel: "$",
            h: ["Quãng đường tính bằng km là bao nhiêu?", "20 cent = 0,2 đô-la mỗi km.", "1392 × 0,2 = ?"],
            e: "870 dặm = 1392 km. 1392 × $0,20 = $278,40 > $250, nên Evan đúng." }),
          Q({ id: "15.1-10", type: "num", diff: 2, skill: "speed-convert",
            q: "A speed limit is 70 miles per hour. What is it in kilometres per hour? (1 mile ≈ 1.6 km)", answer: 112, unitLabel: "km/h",
            h: ["Trong 1 giờ xe đi 70 dặm; mỗi dặm là bao nhiêu km?", "Nhân 70 với 1,6.", "70 × 16 = 1120, chia 10."],
            e: "70 × 1,6 = 112 km/h." })
        ]
      },
      {
        id: "15.2",
        title: "The area of a parallelogram and a trapezium",
        titleVi: "Diện tích hình bình hành và hình thang",
        learn: [
          "Diện tích hình bình hành = đáy × chiều cao vuông góc (không dùng cạnh bên nghiêng).",
          "Cắt một tam giác ở một đầu và ghép sang đầu kia, hình bình hành thành hình chữ nhật cùng diện tích.",
          "Diện tích hình thang = ½ × (a + b) × h, với a, b là hai cạnh song song và h là khoảng cách vuông góc giữa chúng.",
          "Hình thang ghép hai bản sao thành hình bình hành đáy (a + b), nên diện tích là một nửa.",
          "Nếu biết diện tích, dùng phép tính ngược để tìm chiều cao hoặc một đáy."
        ],
        example: {
          q: "Hình thang có hai đáy 7 cm, 13 cm và chiều cao 8 cm. Tính diện tích.",
          steps: ["Công thức ½ × (a + b) × h", "½ × (7 + 13) × 8 = ½ × 20 × 8", "= 80 cm²."],
          prompts: ["Hình thang có hai đáy song song. Công thức nào dùng trung bình hai đáy nhân chiều cao? Em nhớ hay tự suy ra được từ hai hình thang ghép lại?","Thay số vào công thức: em tính ngoặc trước hay nhân trước?","Kết quả có đơn vị gì? Vì sao là cm² chứ không phải cm?"],
          answer: {"type":"num","value":80},
          twist: {"q":"Một hình thang có diện tích 99 cm², chiều cao 9 cm và đáy bé 7 cm. Đáy lớn dài bao nhiêu cm?","answer":{"type":"num","value":15}}
        },
        questions: [
          Q({ id: "15.2-01", type: "num", diff: 1, skill: "area-parallelogram",
            q: "Find the area of this parallelogram with base 8 cm and perpendicular height 4 cm.", svg: PA("8 cm", "4 cm"), answer: 32, unitLabel: "cm²",
            h: ["Công thức diện tích hình bình hành là gì?", "Đáy là 8 cm, chiều cao vuông góc là 4 cm.", "8 × 4 = ?"],
            e: "Diện tích = 8 × 4 = 32 cm²." }),
          Q({ id: "15.2-02", type: "num", diff: 1, skill: "area-parallelogram",
            q: "A parallelogram has base 6 m and perpendicular height 1.5 m. Find its area.", answer: 9, unitLabel: "m²",
            h: ["Nhân đáy với chiều cao vuông góc.", "6 × 1,5 = 6 + 3.", "Đơn vị là m²."],
            e: "6 × 1,5 = 9 m²." }),
          Q({ id: "15.2-03", type: "num", diff: 2, skill: "area-trapezium",
            q: "Find the area of the trapezium. The parallel sides are 6 cm and 8 cm and the perpendicular height is 5 cm.", svg: TZ("6 cm", "8 cm", "5 cm"), answer: 35, unitLabel: "cm²",
            h: ["Cộng hai cạnh song song trước.", "6 + 8 = 14; nhân với chiều cao 5 rồi lấy một nửa.", "½ × 14 × 5 = ?"],
            e: "½ × (6 + 8) × 5 = ½ × 70 = 35 cm²." }),
          Q({ id: "15.2-04", type: "num", diff: 2, skill: "area-trapezium",
            q: "A trapezium has parallel sides of 4 mm and 12 mm and a perpendicular height of 7 mm. Find its area.", svg: TZ("4 mm", "12 mm", "7 mm"), answer: 56, unitLabel: "mm²",
            h: ["Hai đáy là những cạnh nào?", "Trung bình hai đáy là (4 + 12) ÷ 2 = ?", "Nhân trung bình đó với chiều cao 7."],
            e: "½ × 16 × 7 = 8 × 7 = 56 mm²." }),
          Q({ id: "15.2-05", type: "mc", diff: 2, skill: "area-parallelogram-misconception",
            q: "Bembe works out the area of this parallelogram as 7 × 5 = 35 cm². The base is 7 cm, the slanting side is 5 cm and the perpendicular height is 4 cm. What is the correct area?", svg: PA("7 cm", "4 cm", "5 cm"),
            choices: ["35 cm²", "28 cm²", "20 cm²", "11 cm²"], answer: 1,
            h: ["Chiều cao trong công thức là cạnh nghiêng hay đoạn vuông góc với đáy?", "Dùng số nào: 5 hay 4?", "7 × 4 = ?"],
            e: "Diện tích = đáy × chiều cao vuông góc = 7 × 4 = 28 cm². Bembe đã dùng cạnh nghiêng 5 cm nên ra 35 cm² (sai)." }),
          Q({ id: "15.2-06", type: "mc", diff: 2, skill: "area-trapezium-methods",
            q: "Sofia works out (a + b) ÷ 2, then multiplies by h. Marcus works out half of h, then (a + b), then multiplies his two answers. Zara works out (a + b), multiplies by h, then divides by 2. Will they all get the same area?",
            choices: ["Yes, all three equal ½ × (a + b) × h", "No, only Sofia is correct", "No, only Zara is correct", "No, Marcus's answer is different"], answer: 0,
            h: ["Viết biểu thức cho từng bạn.", "Sofia: (a + b)/2 × h; Marcus: (h/2) × (a + b); Zara: (a + b) × h/2.", "Thứ tự nhân và chia có làm đổi kết quả không?"],
            e: "Cả ba cùng bằng ½ × (a + b) × h vì nhân/chia có thể làm theo thứ tự bất kỳ. Em chọn cách tính nào đơn giản nhất cho từng bài." }),
          Q({ id: "15.2-07", howto: "Work out the area of A and the area of B in cm², then enter how much bigger one is than the other.", type: "num", diff: 3, skill: "area-difference",
            q: "Parallelogram A has base 15 mm and height 12 mm. Trapezium B has parallel sides 6 cm and 10 cm and perpendicular height 9 cm. Work out the difference in area, in cm².", answer: 70.2, tol: 0.01, unitLabel: "cm²",
            h: ["Hai hình đang dùng hai đơn vị khác nhau (mm và cm). Đổi hết về cm trước.", "A: 1,5 cm × 1,2 cm = ? ; B: ½ × (6 + 10) × 9 = ?", "Lấy diện tích lớn trừ diện tích nhỏ."],
            e: "A = 1,5 × 1,2 = 1,8 cm². B = ½ × 16 × 9 = 72 cm². Hiệu = 72 − 1,8 = 70,2 cm². (Lỗi hay gặp: trộn mm và cm.)" }),
          Q({ id: "15.2-08", type: "mc", diff: 3, skill: "area-scale-reasoning",
            q: "Zara says: 'If you double the base and double the height of a parallelogram, the area will be doubled.' By what factor does the area really change?",
            choices: ["2", "4", "6", "8"], answer: 1,
            h: ["Thử với hình bình hành đáy 3, cao 2: diện tích bao nhiêu?", "Gấp đôi: đáy 6, cao 4: diện tích bao nhiêu?", "Diện tích mới gấp mấy lần diện tích cũ?"],
            e: "Diện tích = đáy × chiều cao, nên nhân đôi cả hai thì diện tích nhân 2 × 2 = 4. Zara sai." }),
          Q({ id: "15.2-09", type: "num", diff: 2, skill: "area-trapezium",
            q: "A trapezium has parallel sides 2.3 cm and 9.8 cm, and perpendicular height 4.6 cm. Use a calculator to find its area.", answer: 27.83, tol: 0.01, unitLabel: "cm²",
            h: ["Cộng hai cạnh song song: 2,3 + 9,8.", "Nhân với 4,6 rồi chia 2.", "12,1 × 4,6 ÷ 2 = ?"],
            e: "½ × (2,3 + 9,8) × 4,6 = ½ × 12,1 × 4,6 = 27,83 cm². Ước lượng: ½ × 12 × 5 = 30." }),
          Q({ id: "15.2-10", type: "num", diff: 3, skill: "area-find-base",
            q: "A parallelogram has an area of 832 mm². Its perpendicular height is 2.6 cm. What is the length of its base in centimetres?", answer: 3.2, tol: 0.001, unitLabel: "cm",
            h: ["Đổi chiều cao sang mm hoặc diện tích sang cm² để cùng đơn vị.", "832 mm² = 8,32 cm².", "Đáy = diện tích ÷ chiều cao = 8,32 ÷ 2,6."],
            e: "832 mm² = 8,32 cm². Đáy = 8,32 ÷ 2,6 = 3,2 cm. (Hoặc 2,6 cm = 26 mm; 832 ÷ 26 = 32 mm = 3,2 cm.)" })
        ]
      },
      {
        id: "15.3",
        title: "Calculating the volume of triangular prisms",
        titleVi: "Tính thể tích lăng trụ tam giác",
        learn: [
          "Lăng trụ có mặt cắt ngang giống nhau suốt chiều dài.",
          "Thể tích lăng trụ = diện tích mặt cắt ngang × chiều dài (hoặc chiều cao lăng trụ).",
          "Với lăng trụ đáy tam giác: diện tích đáy = ½ × đáy tam giác × chiều cao tam giác (đừng quên ½).",
          "Đơn vị thể tích: cm³, m³. Đổi: 1 m³ = 1000 lít; 1 lít = 1000 cm³. Đổi mọi kích thước về cùng một đơn vị (mm, cm hoặc m) trước khi tính.",
          "Nhân mọi kích thước với k thì thể tích nhân k³."
        ],
        example: {
          q: "Lăng trụ có mặt cắt là tam giác đáy 6 cm, cao 4 cm; chiều dài lăng trụ 9 cm. Tính thể tích.",
          steps: ["Diện tích tam giác: ½ × 6 × 4 = 12 cm²", "Thể tích: 12 × 9", "= 108 cm³."],
          prompts: ["Lăng trụ có mặt cắt không đổi dọc theo chiều dài. Mặt cắt ở đây là tam giác nào, diện tích bao nhiêu?","Thể tích bằng diện tích mặt cắt nhân với đại lượng nào của lăng trụ?","Tính ra kết quả và ghi kèm đơn vị khối."],
          answer: {"type":"num","value":108},
          twist: {"q":"Nếu giữ nguyên mặt cắt tam giác nhưng chiều dài lăng trụ giảm một nửa thì thể tích còn bao nhiêu cm³?","answer":{"type":"num","value":54}}
        },
        questions: [
          Q({ id: "15.3-01", type: "num", diff: 1, skill: "volume-prism",
            q: "Find the volume of this triangular prism. The right-angled triangle has base 6 cm and height 8 cm; the prism is 10 cm long.", svg: PR("6 cm", "8 cm", "10 cm"), answer: 240, unitLabel: "cm³",
            h: ["Tính diện tích mặt cắt tam giác trước: ½ × b × h.", "½ × 6 × 8 = ?", "Nhân diện tích đó với chiều dài 10."],
            e: "Diện tích mặt cắt = ½ × 6 × 8 = 24 cm². Thể tích = 24 × 10 = 240 cm³." }),
          Q({ id: "15.3-02", type: "num", diff: 1, skill: "volume-prism",
            q: "A triangular prism has a cross-section with base 3 m and height 4 m. The prism is 7 m long. Find its volume.", answer: 42, unitLabel: "m³",
            h: ["Diện tích tam giác: ½ × 3 × 4.", "Bằng bao nhiêu m²?", "Nhân với 7."],
            e: "Diện tích = 6 m². V = 6 × 7 = 42 m³." }),
          Q({ id: "15.3-03", type: "num", diff: 2, skill: "volume-prism",
            q: "A triangular prism has a triangular cross-section with base 9 cm and perpendicular height 12 cm. The prism is 30 cm long. Find its volume.", answer: 1620, unitLabel: "cm³",
            h: ["Diện tích tam giác: ½ × 9 × 12.", "½ × 9 × 12 = 54.", "54 × 30 = ?"],
            e: "Diện tích mặt cắt 54 cm². V = 54 × 30 = 1620 cm³." }),
          Q({ id: "15.3-04", type: "num", diff: 2, skill: "volume-cuboid-half",
            q: "Yari finds the volume of a triangular prism with base 5 mm, height 7 mm and length 20 mm. Mike halves the volume of a cuboid 20 × 5 × 7 mm. What volume do they both get?", svg: PR("5 mm", "7 mm", "20 mm"), answer: 350, unitLabel: "mm³",
            h: ["Thể tích cuboid 20 × 5 × 7 là bao nhiêu?", "Lăng trụ tam giác bằng bao nhiêu phần của cuboid đó?", "700 ÷ 2 = ?"],
            e: "Cuboid: 20 × 5 × 7 = 700 mm³. Lăng trụ bằng một nửa: 350 mm³. Cách của Yari: ½ × 5 × 7 × 20 = 350." }),
          Q({ id: "15.3-05", type: "mc", diff: 2, skill: "volume-prism-misconception",
            q: "Vin's homework: a triangular prism has triangle base 8 cm, height 7 cm and length 120 mm. He gets ½ × 7 × 8 = 28 cm², then 28 × 120 = 3360 cm³. What is the correct volume?",
            choices: ["3360 cm³", "336 cm³", "33.6 cm³", "672 cm³"], answer: 1,
            h: ["Diện tích đang ở cm², chiều dài đang ở mm. Hai đơn vị có khớp không?", "Đổi 120 mm sang cm.", "28 × 12 = ?"],
            e: "120 mm = 12 cm. V = 28 × 12 = 336 cm³. Vin đã nhân với 120 (mm) lẫn với cm." }),
          Q({ id: "15.3-06", type: "num", diff: 3, skill: "volume-units",
            q: "A triangular prism has base 30 mm, height 6 cm and length 200 mm. Work out its volume in cm³.", answer: 180, unitLabel: "cm³",
            h: ["Đổi mọi kích thước sang cm trước.", "30 mm = 3 cm; 200 mm = 20 cm.", "½ × 3 × 6 × 20 = ?"],
            e: "Diện tích mặt cắt = ½ × 3 × 6 = 9 cm². V = 9 × 20 = 180 cm³." }),
          Q({ id: "15.3-07", type: "num", diff: 3, skill: "volume-units",
            q: "A triangular prism has base 7 m, height 9 m and length 10 cm. Work out its volume in m³.", answer: 3.15, tol: 0.001, unitLabel: "m³",
            h: ["Đổi chiều dài sang m: 10 cm = ? m.", "Diện tích mặt cắt: ½ × 7 × 9.", "31,5 × 0,1 = ?"],
            e: "10 cm = 0,1 m. Diện tích = 31,5 m². V = 31,5 × 0,1 = 3,15 m³." }),
          Q({ id: "15.3-08", type: "num", diff: 2, skill: "volume-find-height",
            q: "A triangular prism has volume 96 cm³ and is 8 cm long. Its triangular cross-section has base 6 cm. Find the height of the triangle.", answer: 4, unitLabel: "cm",
            h: ["Diện tích mặt cắt = V ÷ chiều dài.", "96 ÷ 8 = ? Đó là ½ × 6 × h.", "3 × h = 12."],
            e: "Diện tích mặt cắt = 96 ÷ 8 = 12 cm². ½ × 6 × h = 3h = 12 nên h = 4 cm." }),
          Q({ id: "15.3-09", type: "num", diff: 3, skill: "volume-find-height",
            q: "A triangular prism has volume 168 m³, base 4 m and length 12 m. Work out the height of the triangle.", answer: 7, unitLabel: "m",
            h: ["Diện tích mặt cắt = 168 ÷ 12.", "Diện tích = ½ × 4 × h = 2h.", "2h = 14."],
            e: "Diện tích = 168 ÷ 12 = 14 m². ½ × 4 × h = 2h = 14 nên h = 7 m." }),
          Q({ id: "15.3-10", type: "num", diff: 3, skill: "volume-melt",
            q: "A triangular prism of silver has a triangular cross-section with base 30 mm and height 12 mm, and is 25 mm long. Jan melts it and makes cubes of side 8 mm. Jan thinks he can make nine cubes. How many complete cubes can he really make?", answer: 8,
            h: ["Thể tích lăng trụ: ½ × 30 × 12 × 25.", "Thể tích một khối lập phương cạnh 8 mm là bao nhiêu?", "Chia 4500 cho 512 rồi chỉ lấy phần nguyên."],
            e: "V = ½ × 30 × 12 × 25 = 4500 mm³. Một khối lập phương: 8³ = 512 mm³. 4500 ÷ 512 ≈ 8,79, tức làm được 8 khối nguyên; 9 khối cần 4608 mm³ > 4500 nên Jan sai." })
        ]
      },
      {
        id: "15.4",
        title: "Calculating the surface area of triangular prisms and pyramids",
        titleVi: "Diện tích toàn phần lăng trụ tam giác và hình chóp",
        learn: [
          "Diện tích toàn phần = tổng diện tích mọi mặt. Vẽ hình khai triển (net) giúp không bỏ sót mặt.",
          "Lăng trụ tam giác có 5 mặt: 2 tam giác đáy và 3 hình chữ nhật.",
          "Diện tích toàn phần lăng trụ = 2 × diện tích đáy + (chu vi đáy) × chiều dài.",
          "Hình chóp đáy vuông có 5 mặt: 1 hình vuông và 4 tam giác cân bằng nhau.",
          "Diện tích mặt bên tam giác = ½ × cạnh đáy × đường cao mặt bên (slant height), không phải chiều cao thẳng đứng của hình chóp."
        ],
        example: {
          q: "Hình chóp đáy vuông cạnh 6 cm, đường cao mặt bên 5 cm. Tính diện tích toàn phần.",
          steps: ["Đáy: 6 × 6 = 36", "Mỗi mặt bên: ½ × 6 × 5 = 15; bốn mặt: 60", "Tổng: 36 + 60 = 96 cm²."],
          prompts: ["Diện tích toàn phần gồm những mặt nào? Đáy là hình gì và diện tích bao nhiêu?","Mỗi mặt bên là một tam giác. Em dùng đường cao nào của mặt bên (không phải đường cao của hình chóp)? Có mấy mặt như vậy?","Cộng diện tích đáy và các mặt bên."],
          answer: {"type":"num","value":96},
          twist: {"q":"Nếu đường cao mặt bên tăng lên 8 cm (đáy vẫn vuông cạnh 6 cm) thì diện tích toàn phần là bao nhiêu cm²?","answer":{"type":"num","value":132}}
        },
        questions: [
          Q({ id: "15.4-01", type: "num", diff: 2, skill: "sa-prism",
            q: "A triangular prism has isosceles triangle ends with base 6 cm, perpendicular height 4 cm and sloping sides 5 cm. The prism is 8 cm long. Work out its total surface area using a net (3 rectangles and 2 triangles).", answer: 152, unitLabel: "cm²",
            h: ["Các hình chữ nhật có kích thước 8 × 6, 8 × 5 và 8 × 5. Tổng diện tích?", "Mỗi tam giác đáy: ½ × 6 × 4 = ?", "Cộng 3 hình chữ nhật với 2 tam giác."],
            e: "Chữ nhật: 48 + 40 + 40 = 128. Hai tam giác: 2 × 12 = 24. Tổng = 152 cm²." }),
          Q({ id: "15.4-02", type: "mc", diff: 1, skill: "faces-count",
            q: "How many faces does a triangular-based pyramid (a tetrahedron) have?",
            choices: ["4", "5", "6", "3"], answer: 0,
            h: ["Hình chóp có một mặt đáy. Đáy là hình gì?", "Có bao nhiêu mặt bên tam giác?", "1 + 3."],
            e: "Đáy tam giác (1 mặt) và 3 mặt bên tam giác: tổng cộng 4 mặt." }),
          Q({ id: "15.4-03", type: "num", diff: 2, skill: "sa-prism",
            q: "A prism has right-angled triangle ends with perpendicular sides 6 cm and 8 cm and hypotenuse 10 cm. The prism is 12 cm long. Find its total surface area.", svg: PR("6 cm", "8 cm", "12 cm"), answer: 336, unitLabel: "cm²",
            h: ["Diện tích mỗi tam giác đáy: ½ × 6 × 8.", "Ba hình chữ nhật có chiều rộng 6, 8, 10 và dài 12: tổng diện tích = (6 + 8 + 10) × 12.", "Cộng hai đáy với phần bên."],
            e: "Hai đáy: 2 × 24 = 48. Phần bên: 24 × 12 = 288. Tổng = 336 cm²." }),
          Q({ id: "15.4-04", type: "num", diff: 2, skill: "sa-pyramid",
            q: "A square-based pyramid has base edge 10 cm. The perpendicular height of each triangular face is 14 cm. Find the total surface area.", svg: PY("10 cm", "14 cm"), answer: 380, unitLabel: "cm²",
            h: ["Diện tích đáy vuông là bao nhiêu?", "Mỗi tam giác bên: ½ × 10 × 14 = ?", "Cộng đáy với 4 tam giác."],
            e: "Đáy: 100. Mỗi mặt bên: ½ × 10 × 14 = 70, bốn mặt: 280. Tổng = 380 cm²." }),
          Q({ id: "15.4-05", type: "mc", diff: 2, skill: "sa-slant-misconception",
            q: "A square-based pyramid has base edge 6 cm, vertical height 4 cm and slant height (the height of each triangular face) 5 cm. What is the total surface area?",
            choices: ["96 cm²", "84 cm²", "60 cm²", "132 cm²"], answer: 0,
            h: ["Diện tích mặt tam giác dùng đường cao nằm trên mặt nghiêng hay chiều cao thẳng đứng của chóp?", "Dùng slant height 5: ½ × 6 × 5 = ?", "Cộng 36 với bốn mặt."],
            e: "Mặt bên dùng slant height 5: 36 + 4 × 15 = 96. Đáp án 84 là nhầm dùng chiều cao thẳng đứng 4." }),
          Q({ id: "15.4-06", type: "num", diff: 2, skill: "sa-tetrahedron",
            q: "A triangular-based pyramid has four identical triangular faces. Each triangle has base 15 cm and perpendicular height 13 cm. Find the total surface area.", answer: 390, unitLabel: "cm²",
            h: ["Có bao nhiêu mặt tam giác bằng nhau?", "Diện tích một mặt: ½ × 15 × 13 = ?", "Nhân với số mặt."],
            e: "Một mặt: ½ × 15 × 13 = 97,5 cm². Bốn mặt: 4 × 97,5 = 390 cm²." }),
          Q({ id: "15.4-07", type: "mc", diff: 3, skill: "sa-compare",
            q: "A triangular prism has triangle ends with base 6 cm, perpendicular height 4 cm and sloping sides 5 cm, and is 15 cm long. A cube has side 7 cm. Which shape has the greater surface area?",
            choices: ["The triangular prism", "The cube", "They are equal"], answer: 1,
            h: ["Tính diện tích toàn phần của lăng trụ: 2 tam giác + 3 hình chữ nhật.", "Diện tích toàn phần của hình lập phương cạnh 7 là 6 × 7².", "So sánh hai kết quả."],
            e: "Lăng trụ: 2 × 12 + (5 + 5 + 6) × 15 = 24 + 240 = 264 cm². Lập phương: 6 × 49 = 294 cm². Hình lập phương lớn hơn." }),
          Q({ id: "15.4-08", type: "num", diff: 3, skill: "sa-compare",
            q: "A triangular-based pyramid has four identical triangular faces, each with base 4 m and perpendicular height 3.5 m. A cuboid measures 2 m by 2 m by 1.5 m. How many square metres more is the surface area of the pyramid than that of the cuboid?", answer: 8, unitLabel: "m²",
            h: ["Diện tích một mặt tam giác: ½ × 4 × 3,5 = ? Bốn mặt?", "Hình hộp có ba cặp mặt: 2×2, 2×1,5, 2×1,5. Tổng diện tích?", "Lấy hiệu."],
            e: "Chóp: 4 × 7 = 28 m². Hộp: 2 × (4 + 3 + 3) = 20 m². Hiệu = 8 m²." }),
          Q({ id: "15.4-09", type: "num", diff: 3, skill: "sa-formula",
            q: "A square-based pyramid has base side x cm, and the perpendicular height of each triangular face is 2x cm, so its surface area is x² + 4 × (½ × x × 2x) = 5x² cm². Pyramid A has x = 5 and pyramid B has x = 7. What is the difference in their surface areas?", answer: 120, unitLabel: "cm²",
            h: ["Tính diện tích của chóp A bằng 5x² với x = 5.", "Tính diện tích chóp B với x = 7.", "245 − 125 = ?"],
            e: "A: 5 × 25 = 125 cm². B: 5 × 49 = 245 cm². Hiệu = 120 cm²." }),
          Q({ id: "15.4-10", type: "num", diff: 3, skill: "sa-tetrahedron",
            q: "The base of a triangular pyramid is an equilateral triangle with base 6 cm and perpendicular height 5.2 cm. The three sides are isosceles triangles with base 6 cm and perpendicular height 8.7 cm. Work out the total surface area.", answer: 93.9, tol: 0.01, unitLabel: "cm²",
            h: ["Vẽ phác để thấy có 1 tam giác đáy và 3 tam giác bên.", "Đáy: ½ × 6 × 5,2. Mỗi mặt bên: ½ × 6 × 8,7.", "Cộng đáy với 3 mặt bên."],
            e: "Đáy: ½ × 6 × 5,2 = 15,6. Mỗi mặt bên: ½ × 6 × 8,7 = 26,1, ba mặt: 78,3. Tổng = 93,9 cm²." })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Cánh cổng kim tự tháp đóng kín: giải 10 bài toán diện tích - thể tích để mở khóa!",
      questions: [
        V({ id: "ch-01", type: "num", diff: 2, skill: "miles-to-km",
          q: "Một con đường trên bản đồ Anh dài 72 dặm. Biết 5 dặm xấp xỉ 8 km. Con đường đó dài khoảng bao nhiêu km?", answer: 115.2, tol: 0.01, unitLabel: "km",
          h: ["1 dặm xấp xỉ bao nhiêu km?", "72 × 8 ÷ 5.", "576 ÷ 5."],
          e: "72 × 1,6 = 115,2 km." }),
        V({ id: "ch-02", type: "num", diff: 2, skill: "area-trapezium",
          q: "Một thửa ruộng hình thang có hai đáy dài 30 m và 50 m, chiều cao 20 m. Tính diện tích thửa ruộng.", answer: 800, unitLabel: "m²",
          h: ["Công thức diện tích hình thang?", "Tổng hai đáy là 80 m.", "½ × 80 × 20."],
          e: "S = ½ × (30 + 50) × 20 = 800 m²." }),
        V({ id: "ch-03", type: "num", diff: 3, skill: "area-parallelogram",
          q: "Mảnh vườn hình bình hành có đáy 18 m, chiều cao 12 m. Người ta dành đúng một phần ba diện tích để trồng rau. Diện tích trồng rau là bao nhiêu?", answer: 72, unitLabel: "m²",
          h: ["Tính diện tích cả mảnh vườn trước.", "18 × 12 = ?", "Lấy một phần ba."],
          e: "Diện tích 216 m²; 216 ÷ 3 = 72 m²." }),
        V({ id: "ch-04", type: "num", diff: 3, skill: "area-trapezium-reverse",
          q: "Hình thang có diện tích 120 cm², tổng hai đáy là 24 cm. Tìm chiều cao.", answer: 10, unitLabel: "cm",
          h: ["Viết S = ½ × (tổng hai đáy) × h.", "½ × 24 = 12, nên 12 × h = 120.", "h = 120 ÷ 12."],
          e: "12h = 120 nên h = 10 cm." }),
        V({ id: "ch-05", type: "num", diff: 2, skill: "volume-prism",
          q: "Một lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông 6 cm và 8 cm, chiều cao lăng trụ 15 cm. Tính thể tích.", answer: 360, unitLabel: "cm³",
          h: ["Diện tích đáy: ½ × 6 × 8.", "Bằng 24 cm².", "24 × 15."],
          e: "V = 24 × 15 = 360 cm³." }),
        V({ id: "ch-06", type: "num", diff: 3, skill: "volume-litres",
          q: "Một bể nước là lăng trụ đứng, mặt cắt là tam giác đáy 2 m, cao 1,5 m, bể dài 3 m. Bể đầy chứa bao nhiêu lít nước? (1 m³ = 1000 lít)", answer: 4500, unitLabel: "lít",
          h: ["Diện tích mặt cắt: ½ × 2 × 1,5.", "Thể tích = 1,5 × 3 (m³).", "Nhân 1000."],
          e: "Diện tích 1,5 m²; V = 4,5 m³ = 4500 lít." }),
        V({ id: "ch-07", type: "num", diff: 3, skill: "volume-rate",
          q: "Một bể hình hộp chữ nhật dài 2 m, rộng 1,5 m, cao 1,2 m đang chứa 1200 lít nước. Máy bơm bơm 40 lít mỗi phút. Sau bao nhiêu phút thì bể đầy?", answer: 60, unitLabel: "phút",
          h: ["Thể tích bể: 2 × 1,5 × 1,2 = ? m³ = ? lít.", "Còn thiếu bao nhiêu lít?", "Chia cho 40."],
          e: "Bể 3,6 m³ = 3600 lít. Còn thiếu 2400 lít; 2400 ÷ 40 = 60 phút." }),
        V({ id: "ch-08", type: "num", diff: 3, skill: "sa-prism",
          q: "Lăng trụ đứng có đáy là tam giác vuông cạnh 5 cm, 12 cm, 13 cm; chiều cao lăng trụ 10 cm. Tính diện tích toàn phần.", answer: 360, unitLabel: "cm²",
          h: ["Diện tích đáy: ½ × 5 × 12.", "Chu vi đáy: 5 + 12 + 13.", "2 × 30 + 30 × 10."],
          e: "Hai đáy: 60. Mặt bên: 30 × 10 = 300. Tổng 360 cm²." }),
        V({ id: "ch-09", type: "num", diff: 3, skill: "area-composite",
          q: "Hình tô đậm gồm hình bình hành đáy 14 cm, cao 8 cm, sau khi cắt bỏ một tam giác đáy 6 cm, cao 8 cm. Tính diện tích phần còn lại.", answer: 88, unitLabel: "cm²",
          h: ["Diện tích hình bình hành: 14 × 8.", "Diện tích tam giác bị cắt: ½ × 6 × 8.", "Lấy hiệu hai diện tích."],
          e: "112 − 24 = 88 cm²." }),
        V({ id: "ch-10", type: "num", diff: 3, skill: "sa-pyramid",
          q: "Một mô hình kim tự tháp có đáy là hình vuông cạnh 10 cm, đường cao mỗi mặt bên là 13 cm. Tính diện tích toàn phần của mô hình.", answer: 360, unitLabel: "cm²",
          h: ["Diện tích đáy: 10 × 10.", "Mỗi mặt bên: ½ × 10 × 13.", "Cộng đáy với bốn mặt bên."],
          e: "100 + 4 × 65 = 360 cm²." })
      ]
    },
    project: {
      title: "Biggest cuboid", titleVi: "Hộp lớn nhất",
      pages: [352],
      goal: "Từ một tờ giấy vuông 12 cm × 12 cm, vẽ sáu hình chữ nhật để cắt ra và gấp ghép thành một hình hộp chữ nhật. Tìm hộp có thể tích lớn nhất.",
      steps: [
        "Chọn ba kích thước a, b, c của hộp (ví dụ 2 × 3 × 5 cm) và tính thể tích, diện tích toàn phần.",
        "Vẽ sáu hình chữ nhật (hai mặt a × b, hai mặt a × c, hai mặt b × c) lên giấy ô li 12 × 12 sao cho không chồng lên nhau.",
        "Đếm xem còn bao nhiêu ô giấy bị bỏ phí; diện tích toàn phần của hộp chiếm bao nhiêu phần trăm tờ giấy 144 cm²?",
        "Thử nhiều bộ kích thước khác nhau; lập bảng gồm a, b, c, thể tích và diện tích toàn phần.",
        "Tìm hộp dùng hết cả tờ giấy (diện tích toàn phần = 144 cm²) và so sánh thể tích của chúng."
      ],
      extensions: [
        "Hộp có đáy vuông (a × a × c) tốt nhất khi nào? Tìm c khi 2a² + 4ac = 144.",
        "Thử làm hộp không có nắp từ tờ giấy 12 × 12: cắt bốn hình vuông ở bốn góc, gấp lên. Cạnh hình vuông nào cho thể tích lớn nhất?",
        "Làm một hộp thật từ giấy bìa và nộp kèm bảng số liệu."
      ],
      reflect: [
        "Hộp có diện tích toàn phần 144 cm² và thể tích lớn nhất có hình dạng thế nào? Vì sao em nghĩ vậy?",
        "Khi cố định diện tích giấy, hộp 'gần hình lập phương' có thể tích lớn hơn hay nhỏ hơn hộp dẹt?",
        "Em đã thay đổi cách vẽ hình chữ nhật thế nào để bớt lãng phí giấy?"
      ]
    }
  });
  // 🎲 number variants for spaced review (js/variants*.js)
  const GEN = {"15.1-03": "km-miles", "15.1-04": "km-miles", "15.1-05": "km-miles", "15.1-08": "km-miles", "15.2-02": "para-area", "15.2-09": "trap-area", "15.3-02": "prism-vol", "15.3-03": "prism-vol", "15.3-08": "prism-height", "15.3-09": "prism-height", "15.4-06": "tetra-area"};
  window.GAME_DATA.units.filter(function (u) { return u.id === 15; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
