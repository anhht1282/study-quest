window.GAME_DATA = window.GAME_DATA || { units: [] };
(function () {
  var S0 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 180" fill="none" stroke="currentColor" stroke-width="2" font-family="sans-serif" font-size="14">';
  function t(x, y, s, a) { return '<text x="' + x + '" y="' + y + '" fill="currentColor" stroke="none" text-anchor="' + (a || 'middle') + '">' + s + '</text>'; }
  // triangle with dashed perpendicular height; labels for base and height
  function tri(bl, hl) {
    return S0 + '<polygon points="30,140 230,140 100,30"/><line x1="100" y1="30" x2="100" y2="140" stroke-dasharray="5 4"/>' +
      '<polyline points="100,128 112,128 112,140"/>' + t(130, 165, bl) + t(92, 90, hl, 'end') + '</svg>';
  }
  // cuboid with labels l, w, h
  function cub(l, w, h) {
    return S0 + '<rect x="30" y="70" width="130" height="80"/><polygon points="30,70 80,30 210,30 160,70"/><polygon points="160,70 210,30 210,110 160,150"/>' +
      t(95, 170, l) + t(195, 145, w, 'start') + t(22, 115, h, 'end') + '</svg>';
  }
  function rect(wl, hl) {
    return S0 + '<rect x="40" y="30" width="180" height="100"/>' + t(130, 155, wl) + t(232, 85, hl, 'start') + '</svg>';
  }
  function comp1() { // rectangle 10 x 6 with triangle on top, height 5
    return S0 + '<rect x="40" y="90" width="180" height="60"/><polygon points="40,90 220,90 220,30"/>' + t(130, 172, '10 cm') + t(32, 125, '6 cm', 'end') + t(228, 62, '5 cm', 'start') + '</svg>';
  }
  function comp2() { // rectangle 6 x 4 with triangle roof height 3
    return S0 + '<rect x="50" y="90" width="150" height="60"/><polygon points="50,90 200,90 125,30"/><line x1="125" y1="30" x2="125" y2="90" stroke-dasharray="5 4"/>' +
      t(125, 172, '6 cm') + t(42, 125, '4 cm', 'end') + t(133, 66, '3 cm', 'start') + '</svg>';
  }
  var B = function (id, diff, skill, q, answer, h, explain, o) {
    return Object.assign({ id: id, type: 'num', diff: diff, skill: skill, source: 'book', lang: 'en', q: q, svg: null, choices: null, answer: answer, accept: [], tol: 0, unitLabel: '', hints: h, explain: explain, why: null }, o || {});
  };
  var V = function (id, diff, skill, q, answer, h, explain, o) {
    return B(id, diff, skill, q, answer, h, explain, Object.assign({ source: 'vn', lang: 'vi' }, o || {}));
  };

  window.GAME_DATA.units.push({
    id: 15,
    title: "Shapes, area and volume",
    titleVi: "Hình, diện tích và thể tích",
    strand: "Geometry and measure",
    pages: [310, 336],
    realm: "Công Trường Thành Cổ",
    emoji: "🏗️",
    story: "Người xây dựng ở Công Trường Thành Cổ cần lát gạch cho sân, sơn bể nước và đo những thửa ruộng rộng hàng héc-ta. Chỉ cần đổi sai một đơn vị là mua thừa cả xe gạch! Em hãy dùng diện tích và thể tích để giúp họ tính đúng.",
    glossary: [
      { en: "area", vi: "diện tích", def: "Lượng mặt phẳng mà một hình phủ kín, đo bằng đơn vị vuông như cm², m²." },
      { en: "conversion factor", vi: "hệ số đổi đơn vị", def: "Số em nhân hoặc chia để đổi từ đơn vị này sang đơn vị khác, ví dụ 1 cm² = 100 mm²." },
      { en: "hectare (ha)", vi: "héc-ta", def: "Đơn vị đo diện tích đất; 1 ha = 10 000 m² (hình vuông cạnh 100 m)." },
      { en: "perpendicular height", vi: "chiều cao vuông góc", def: "Khoảng cách vuông góc từ đáy tới đỉnh đối diện của tam giác." },
      { en: "compound shape", vi: "hình ghép", def: "Hình được ghép từ nhiều hình đơn giản như chữ nhật và tam giác." },
      { en: "volume", vi: "thể tích", def: "Lượng không gian vật thể chiếm chỗ, đo bằng cm³, m³..." },
      { en: "cuboid", vi: "hình hộp chữ nhật", def: "Khối có 6 mặt chữ nhật; V = dài × rộng × cao." },
      { en: "surface area", vi: "diện tích bề mặt", def: "Tổng diện tích tất cả các mặt của một khối." },
      { en: "net", vi: "hình khai triển", def: "Hình phẳng gấp lại được thành khối." }
    ],
    sections: [
      {
        id: "15.1", title: "Converting between units for area", titleVi: "Đổi đơn vị diện tích",
        learn: [
          "Diện tích đo bằng đơn vị VUÔNG: mm², cm², m², km². Chọn đơn vị hợp với độ dài của vật: sân bóng dùng m², con tem dùng cm² hoặc mm².",
          "1 cm = 10 mm nên 1 cm² = 10 × 10 = 100 mm².",
          "1 m = 100 cm nên 1 m² = 100 × 100 = 10 000 cm².",
          "Đổi sang đơn vị NHỎ hơn thì số đo lớn lên: NHÂN với hệ số. Đổi sang đơn vị LỚN hơn thì CHIA.",
          "Cách an toàn: đổi độ dài về cùng đơn vị trước, rồi mới tính diện tích."
        ],
        example: { q: "Một hình có diện tích 4,5 m². Đổi ra cm².", steps: ["m² → cm² là sang đơn vị nhỏ hơn nên nhân với 10 000", "4,5 × 10 000 = 45 000", "Vậy 4,5 m² = 45 000 cm²"], prompts: ["Đổi từ m² sang cm² là đi sang đơn vị bé hơn hay lớn hơn, nên nhân hay chia?", "1 m = 100 cm, vậy 1 m² bằng bao nhiêu cm²? Nhân với 4,5.", "Viết đáp số kèm đơn vị."], answer: { type: "num", value: 45000 }, twist: { q: "Nếu đổi 4,5 m² ra dm² thì được bao nhiêu?", answer: { type: "num", value: 450 } } },
        questions: [
          B("15.1-01", 1, "area-units", "Which unit is best for measuring the area of a football pitch?", 1, ["Em đo chiều dài sân bóng bằng đơn vị nào cho hợp lý?", "Nếu độ dài tính bằng mét thì diện tích tính bằng đơn vị gì?", "Loại đơn vị vuông nào vừa phải, không quá bé như cm² cũng không quá lớn như km²?"], "Chiều dài sân bóng đo bằng mét nên diện tích đo bằng mét vuông (m²).", { type: "mc", choices: ["cm²", "m²", "km²", "mm²"] }),
          B("15.1-02", 1, "convert-cm2-mm2", "Convert 8 cm² to mm².", 800, ["1 cm² bằng bao nhiêu mm²?", "Đổi sang đơn vị nhỏ hơn thì nhân hay chia?", "Nhân 8 với hệ số em vừa tìm."], "1 cm² = 100 mm² nên 8 cm² = 8 × 100 = 800 mm².", { unitLabel: "mm²" }),
          B("15.1-03", 1, "convert-cm2-mm2", "Convert 600 mm² to cm².", 6, ["Từ mm² sang cm² là sang đơn vị lớn hơn hay nhỏ hơn?", "Vậy em nhân hay chia cho 100?", "600 chia 100 bằng bao nhiêu?"], "Sang đơn vị lớn hơn thì chia: 600 ÷ 100 = 6 cm².", { unitLabel: "cm²" }),
          B("15.1-04", 1, "convert-m2-cm2", "Convert 3 m² to cm².", 30000, ["1 m² bằng bao nhiêu cm² (nhớ 100 × 100)?", "Nhân hay chia khi đổi sang đơn vị nhỏ hơn?", "Tính 3 × 10 000."], "1 m² = 10 000 cm² nên 3 m² = 30 000 cm².", { unitLabel: "cm²" }),
          B("15.1-05", 2, "convert-m2-cm2", "Convert 8.1 m² to cm².", 81000, ["Em đổi từ m² sang cm², hệ số là bao nhiêu?", "Nhân 8,1 với 10 000: dịch dấu phẩy mấy chữ số?", "Dịch dấu phẩy 4 chữ số sang phải."], "8,1 × 10 000 = 81 000 cm².", { unitLabel: "cm²" }),
          B("15.1-06", 2, "convert-m2-cm2", "Convert 780 cm² to m².", 0.078, ["Từ cm² sang m² em chia cho bao nhiêu?", "Chia 780 cho 10 000: dịch dấu phẩy mấy chữ số sang trái?", "780 → 78,0 → 7,80 → 0,780 → 0,0780."], "780 ÷ 10 000 = 0,078 m².", { tol: 0.0001, unitLabel: "m²" }),
          B("15.1-07", 2, "convert-misconception", "How many cm² are there in 1 m²?", 2, ["1 m bằng bao nhiêu cm?", "Hình vuông cạnh 1 m có thể chia thành mấy hàng, mỗi hàng mấy ô vuông 1 cm?", "Diện tích là tích hai chiều: lấy số ô mỗi hàng nhân số hàng."], "Sai lầm hay gặp là chọn 100 vì 1 m = 100 cm. Nhưng diện tích có hai chiều: 100 × 100 = 10 000 cm².", { type: "mc", choices: ["100 cm²", "1 000 cm²", "10 000 cm²", "100 000 cm²"] }),
          B("15.1-08", 2, "area-mixed-units", "A rectangle is 65 mm long and 2 cm wide. Work out its area in cm².", 13, ["Hai cạnh đang có đơn vị khác nhau, em nên làm gì trước?", "Đổi 65 mm ra cm được bao nhiêu?", "Nhân 6,5 với 2."], "65 mm = 6,5 cm. Diện tích = 6,5 × 2 = 13 cm².", { svg: rect("65 mm", "2 cm"), unitLabel: "cm²" }),
          B("15.1-09", 3, "area-units-reason", "Zara says: '0.25 m² is the same as 25 000 mm².' Is she correct?", 1, ["Đổi 0,25 m² ra cm² trước: nhân với bao nhiêu?", "Sau đó đổi cm² ra mm²: nhân với bao nhiêu?", "Hay so sánh kết quả cuối với 25 000."], "0,25 m² = 2 500 cm² = 250 000 mm². Zara thiếu một chữ số 0, vậy bạn ấy sai.", { type: "mc", choices: ["Đúng", "Sai, đúng phải là 250 000 mm²", "Sai, đúng phải là 2 500 mm²", "Sai, đúng phải là 2 500 000 mm²"] }),
          B("15.1-10", 3, "tiles", "A floor is 3 m by 2 m. Square tiles of side 25 cm cover it with no gaps. How many tiles are needed?", 96, ["Đổi các kích thước sàn ra cm trước.", "Diện tích sàn và diện tích một viên gạch là bao nhiêu cm²?", "Chia diện tích sàn cho diện tích một viên: 60 000 ÷ 625."], "Sàn 300 cm × 200 cm = 60 000 cm². Mỗi viên 25 × 25 = 625 cm². 60 000 ÷ 625 = 96 viên.", { unitLabel: "viên" })
        ]
      },
      {
        id: "15.2", title: "Using hectares", titleVi: "Dùng héc-ta",
        learn: [
          "Héc-ta (ha) dùng để đo diện tích đất. 1 ha là diện tích hình vuông cạnh 100 m.",
          "1 ha = 100 m × 100 m = 10 000 m².",
          "Đổi ha sang m²: nhân với 10 000. Đổi m² sang ha: chia cho 10 000.",
          "1 km² = 1 000 m × 1 000 m = 1 000 000 m² = 100 ha.",
          "Khi cạnh cho bằng km và m lẫn lộn, hãy đổi hết về mét, tính m² rồi đổi sang ha."
        ],
        example: { q: "Mảnh đất hình chữ nhật 850 m × 1,4 km. Tính diện tích bằng ha.", steps: ["Đổi 1,4 km = 1 400 m", "Diện tích = 850 × 1 400 = 1 190 000 m²", "Chia 10 000: 1 190 000 ÷ 10 000 = 119 ha"], prompts: ["Hai cạnh đang ở hai đơn vị khác nhau; em đổi km sang m thế nào?", "Diện tích hình chữ nhật tính bằng phép nào? Tính theo m².", "1 ha bằng bao nhiêu m²? Em làm phép gì để đổi?"], answer: { type: "num", value: 119 }, twist: { q: "Một mảnh đất hình vuông có diện tích 1 ha. Cạnh của nó dài bao nhiêu mét?", answer: { type: "num", value: 100 } } },
        questions: [
          B("15.2-01", 1, "ha-m2", "Convert 2.4 ha to m².", 24000, ["1 ha bằng bao nhiêu m²?", "Đổi sang đơn vị nhỏ hơn thì nhân hay chia?", "Tính 2,4 × 10 000."], "2,4 × 10 000 = 24 000 m².", { unitLabel: "m²" }),
          B("15.2-02", 1, "ha-m2", "Convert 125 000 m² to hectares.", 12.5, ["Từ m² sang ha là sang đơn vị lớn hơn hay nhỏ hơn?", "Vậy chia cho bao nhiêu?", "125 000 ÷ 10 000 = ?"], "125 000 ÷ 10 000 = 12,5 ha.", { unitLabel: "ha" }),
          B("15.2-03", 1, "ha-m2", "Convert 0.35 ha to m².", 3500, ["Nhân với hệ số nào?", "Dịch dấu phẩy mấy chữ số sang phải?", "0,35 → 3 500."], "0,35 × 10 000 = 3 500 m².", { unitLabel: "m²" }),
          B("15.2-04", 1, "ha-m2", "Convert 85 000 m² to hectares.", 8.5, ["Chia cho 10 000.", "Dịch dấu phẩy 4 chữ số sang trái.", "85 000 → 8,5000."], "85 000 ÷ 10 000 = 8,5 ha.", { unitLabel: "ha" }),
          B("15.2-05", 2, "ha-misconception", "One hectare is the area of a square field with side 100 m. How many square metres is 1 ha?", 2, ["Diện tích hình vuông tính thế nào?", "100 × 100 bằng bao nhiêu?", "Đừng nhầm với chu vi hay với số 100."], "1 ha = 100 × 100 = 10 000 m². Chọn 100 m² là nhầm lẫn giữa cạnh và diện tích.", { type: "mc", choices: ["100 m²", "1 000 m²", "10 000 m²", "100 000 m²"] }),
          B("15.2-06", 2, "ha-area", "A rectangular piece of land is 850 m by 1.4 km. Find its area in hectares.", 119, ["Hai chiều đang khác đơn vị, em đổi km ra m: 1,4 km = ? m", "Tính diện tích bằng m² trước: 850 × 1 400.", "Chia kết quả cho 10 000."], "1,4 km = 1 400 m. 850 × 1 400 = 1 190 000 m² = 119 ha.", { unitLabel: "ha" }),
          B("15.2-07", 2, "ha-area", "A square field has side 200 m. What is its area in hectares?", 4, ["Diện tích hình vuông = cạnh × cạnh.", "200 × 200 = ? m²", "Đổi m² ra ha bằng cách chia 10 000."], "200 × 200 = 40 000 m² = 4 ha.", { unitLabel: "ha" }),
          B("15.2-08", 2, "ha-area", "A football pitch is 105 m long and 68 m wide. Work out its area in m².", 7140, ["Diện tích hình chữ nhật = dài × rộng.", "Nhân 105 × 68: có thể tách 100 × 68 và 5 × 68.", "6 800 + 340 = ?"], "105 × 68 = 6 800 + 340 = 7 140 m² (gần 0,7 ha, tức hơn một nửa héc-ta).", { unitLabel: "m²" }),
          B("15.2-09", 3, "ha-reverse", "A rectangular field has area 6 ha and width 200 m. How long is the field, in metres?", 300, ["Đổi 6 ha ra m² trước.", "Diện tích = dài × rộng, vậy dài = diện tích ÷ rộng.", "60 000 ÷ 200 = ?"], "6 ha = 60 000 m². Dài = 60 000 ÷ 200 = 300 m.", { unitLabel: "m" }),
          B("15.2-10", 3, "ha-compare", "Remember 1 km² = 100 ha. Which is the largest area?", 2, ["Đổi cả ba về cùng một đơn vị, chẳng hạn ha.", "25 000 m² bằng bao nhiêu ha? 0,04 km² bằng bao nhiêu ha?", "So sánh 3, 2,5 và 4."], "25 000 m² = 2,5 ha; 0,04 km² = 0,04 × 100 = 4 ha; còn lại 3 ha. Lớn nhất là 0,04 km². Phải đổi cùng đơn vị mới so sánh được.", { type: "mc", choices: ["3 ha", "25 000 m²", "0,04 km²", "Cả ba bằng nhau"] })
        ]
      },
      {
        id: "15.3", title: "The area of a triangle", titleVi: "Diện tích hình tam giác",
        learn: [
          "Tam giác luôn bằng một nửa hình chữ nhật bao quanh nó có cùng đáy và cùng chiều cao.",
          "Công thức: A = ½ × đáy × chiều cao = ½bh.",
          "Chiều cao phải VUÔNG GÓC với đáy, kẻ từ đỉnh đối diện. Không dùng cạnh xiên!",
          "Với hình ghép, chia thành chữ nhật và tam giác, tính từng phần rồi cộng lại.",
          "Biết diện tích và đáy thì tìm chiều cao: h = 2A ÷ b."
        ],
        example: { q: "Tam giác có đáy 8 cm và chiều cao vuông góc 6 cm. Tính diện tích.", steps: ["A = ½ × b × h = ½ × 8 × 6", "= 24 cm²"], prompts: ["Công thức diện tích tam giác dùng đáy và chiều cao như thế nào?", "Thay số vào và tính; nhớ đơn vị diện tích."], answer: { type: "num", value: 24 }, twist: { q: "Nếu tam giác có diện tích 36 cm² và đáy 9 cm thì chiều cao là bao nhiêu cm?", answer: { type: "num", value: 8 } } },
        questions: [
          B("15.3-01", 1, "triangle-area", "Work out the area of the triangle with base 8 cm and perpendicular height 6 cm.", 24, ["Công thức diện tích tam giác là gì?", "Thay b = 8, h = 6 vào ½ × b × h.", "½ × 48 = ?"], "A = ½ × 8 × 6 = 24 cm².", { svg: tri("8 cm", "6 cm"), unitLabel: "cm²" }),
          B("15.3-02", 1, "triangle-area", "A triangle has base 10 cm and height 7 cm. Find its area.", 35, ["Nhân đáy với chiều cao trước.", "10 × 7 = ?", "Lấy một nửa kết quả."], "½ × 10 × 7 = 35 cm².", { svg: tri("10 cm", "7 cm"), unitLabel: "cm²" }),
          B("15.3-03", 1, "triangle-area", "A right-angled triangle has the two short sides 9 cm and 12 cm. Find its area.", 54, ["Trong tam giác vuông, hai cạnh góc vuông có thể làm đáy và chiều cao.", "Nhân 9 × 12.", "Chia đôi."], "A = ½ × 9 × 12 = 54 cm².", { unitLabel: "cm²" }),
          B("15.3-04", 2, "triangle-height", "A triangle has area 36 cm² and base 9 cm. What is its perpendicular height?", 8, ["Từ A = ½bh, nhân hai vế với 2 được gì?", "2A = 72 = b × h.", "h = 72 ÷ 9 = ?"], "2 × 36 = 72 = 9 × h nên h = 8 cm.", { unitLabel: "cm" }),
          B("15.3-05", 2, "triangle-misconception", "A triangle has base 12 cm, perpendicular height 8 cm and a slanted side of 9 cm. What is its area?", 1, ["Chiều cao dùng trong công thức là cạnh nào?", "Cạnh xiên 9 cm có vuông góc với đáy không?", "Tính ½ × 12 × 8."], "Phải dùng chiều cao vuông góc 8 cm: ½ × 12 × 8 = 48 cm². Đáp án 54 là dùng nhầm cạnh xiên 9 cm; 96 là quên nhân ½.", { type: "mc", choices: ["54 cm²", "48 cm²", "96 cm²", "108 cm²"], svg: tri("12 cm", "8 cm") }),
          B("15.3-06", 2, "triangle-area", "A triangle has base 40 mm and perpendicular height 20 mm. Work out its area in mm².", 400, ["Hai số đã cùng đơn vị mm, không cần đổi.", "½ × 40 × 20 = ?", "20 × 20 = ?"], "A = ½ × 40 × 20 = 400 mm².", { unitLabel: "mm²" }),
          B("15.3-07", 2, "compound-area", "A rectangle 10 cm by 6 cm has a triangle of base 10 cm and height 5 cm joined on top. Find the total area.", 85, ["Chia hình ghép thành những hình quen thuộc nào?", "Diện tích chữ nhật? Diện tích tam giác?", "Cộng hai diện tích."], "Chữ nhật: 10 × 6 = 60. Tam giác: ½ × 10 × 5 = 25. Tổng 85 cm².", { svg: comp1(), unitLabel: "cm²" }),
          B("15.3-08", 3, "compound-area", "A 'house' shape is a rectangle 6 cm wide and 4 cm tall with a triangular roof of height 3 cm on top (base 6 cm). Find its total area.", 33, ["Tính riêng phần thân chữ nhật.", "Mái là tam giác đáy 6, cao 3: diện tích?", "24 + 9 = ?"], "Thân: 6 × 4 = 24. Mái: ½ × 6 × 3 = 9. Tổng 33 cm².", { svg: comp2(), unitLabel: "cm²" }),
          B("15.3-09", 3, "triangle-reason", "Two triangles both have base 10 cm and perpendicular height 6 cm, but one is tall and pointed, the other is leaning to the side. Which statement is correct?", 2, ["Công thức diện tích có dùng độ nghiêng của tam giác không?", "Chỉ cần những đại lượng nào?", "Hai tam giác có đáy và chiều cao như nhau thì diện tích thế nào?"], "Diện tích chỉ phụ thuộc đáy và chiều cao vuông góc: ½ × 10 × 6 = 30 cm² cho cả hai, dù hình dạng khác nhau.", { type: "mc", choices: ["Tam giác nhọn có diện tích lớn hơn", "Tam giác nghiêng có diện tích lớn hơn", "Bằng nhau, đều 30 cm²", "Không so sánh được"] }),
          B("15.3-10", 3, "triangle-reason", "A triangle has base 14 cm and height 5 cm. Another triangle has base 7 cm. What height makes its area the same?", 10, ["Tính diện tích tam giác thứ nhất.", "Đáy giảm một nửa thì chiều cao phải thay đổi thế nào để diện tích giữ nguyên?", "35 = ½ × 7 × h, giải h."], "Diện tích thứ nhất = ½ × 14 × 5 = 35. Với đáy 7: ½ × 7 × h = 35 nên h = 10 cm (đáy giảm nửa, cao tăng gấp đôi).", { unitLabel: "cm" })
        ]
      },
      {
        id: "15.4", title: "Calculating the volume of cubes and cuboids", titleVi: "Thể tích hình lập phương và hình hộp chữ nhật",
        sims: [{ id: "cuboid", at: 0 }],
        learn: [
          "Thể tích là lượng không gian khối chiếm chỗ. 1 cm³ là thể tích khối lập phương cạnh 1 cm.",
          "Hình hộp chữ nhật: V = dài × rộng × cao. Hình lập phương cạnh a: V = a × a × a = a³.",
          "Ba kích thước phải cùng đơn vị trước khi nhân. Cạnh đo bằng mm thì thể tích là mm³; bằng m thì là m³.",
          "1 cm³ = 1 000 mm³ (10 × 10 × 10) và 1 m³ = 1 000 000 cm³ (100 × 100 × 100).",
          "Nếu biết V và hai kích thước thì tìm kích thước còn lại bằng phép chia."
        ],
        example: { q: "Hộp dài 12 cm, rộng 9 cm, cao 35 mm. Tính thể tích bằng cm³.", steps: ["Đổi 35 mm = 3,5 cm cho cùng đơn vị", "V = 12 × 9 × 3,5 = 108 × 3,5", "= 378 cm³"], prompts: ["Các kích thước đã cùng đơn vị chưa? Em cần đổi số đo nào, sang đơn vị gì?", "Nhớ công thức thể tích hình hộp chữ nhật; nhân hai kích thước đầu trước.", "Nhân tiếp với kích thước còn lại."], answer: { type: "num", value: 378 }, twist: { q: "Nếu hộp được đổ đầy nước (1 cm³ nước = 1 ml) thì chứa bao nhiêu lít?", answer: { type: "num", value: 0.378 } } },
        questions: [
          B("15.4-01", 1, "cuboid-volume", "Find the volume of a cuboid 10 cm long, 6 cm wide and 4 cm high.", 240, ["Công thức thể tích hình hộp chữ nhật là gì?", "10 × 6 = ?", "Nhân tiếp với 4."], "V = 10 × 6 × 4 = 240 cm³.", { svg: cub("10 cm", "6 cm", "4 cm"), unitLabel: "cm³" }),
          B("15.4-02", 1, "cuboid-volume", "A cuboid measures 12 mm by 8 mm by 5 mm. Find its volume in mm³.", 480, ["Ba kích thước đã cùng đơn vị mm chưa?", "12 × 8 = ?", "Nhân kết quả với 5."], "V = 12 × 8 × 5 = 480 mm³.", { unitLabel: "mm³" }),
          B("15.4-03", 1, "cuboid-volume", "Find the volume of a cuboid 7 cm by 4 cm by 2 cm.", 56, ["Nhân hai số đầu: 7 × 4.", "Nhân tiếp với 2.", "28 × 2 = ?"], "V = 7 × 4 × 2 = 56 cm³.", { unitLabel: "cm³" }),
          B("15.4-04", 1, "cube-volume", "Find the volume of a cube with edge 5 cm.", 125, ["Hình lập phương có ba kích thước thế nào với nhau?", "V = 5 × 5 × 5.", "25 × 5 = ?"], "V = 5³ = 125 cm³.", { unitLabel: "cm³" }),
          B("15.4-05", 2, "volume-mixed-units", "A cuboid is 12 cm long, 9 cm wide and 35 mm high. Find its volume in cm³.", 378, ["Có kích thước nào khác đơn vị không?", "35 mm = ? cm", "12 × 9 × 3,5 = ?"], "35 mm = 3,5 cm. V = 12 × 9 × 3,5 = 378 cm³. Lỗi hay gặp là nhân thẳng với 35 mà không đổi đơn vị.", { unitLabel: "cm³" }),
          B("15.4-06", 2, "cuboid-missing-side", "A cuboid has volume 360 cm³, length 10 cm and width 6 cm. What is its height?", 6, ["V = dài × rộng × cao. Tính dài × rộng trước.", "10 × 6 = 60, vậy 60 × cao = 360.", "360 ÷ 60 = ?"], "Diện tích đáy = 60 cm². Cao = 360 ÷ 60 = 6 cm.", { unitLabel: "cm" }),
          B("15.4-07", 2, "volume-misconception", "How many cm³ are there in 1 m³?", 3, ["1 m bằng bao nhiêu cm?", "Thể tích có mấy chiều?", "Nhân 100 × 100 × 100."], "1 m³ = 100 × 100 × 100 = 1 000 000 cm³. Chọn 100 hoặc 10 000 là quên số chiều của thể tích.", { type: "mc", choices: ["100 cm³", "10 000 cm³", "100 000 cm³", "1 000 000 cm³"] }),
          B("15.4-08", 2, "volume-mixed-units", "A cuboid is 1.2 m long, 60 cm wide and 25 cm high. Find its volume in cm³.", 180000, ["Đổi 1,2 m ra cm.", "120 × 60 = ?", "7 200 × 25 = ?"], "1,2 m = 120 cm. V = 120 × 60 × 25 = 180 000 cm³.", { unitLabel: "cm³" }),
          B("15.4-09", 3, "volume-mixed-units", "A tank is 8 m long, 6 m wide and 90 cm deep. Find its volume in m³ (give the answer to 1 decimal place).", 43.2, ["Đổi 90 cm ra mét.", "8 × 6 × 0,9 = ?", "48 × 0,9 = ?"], "90 cm = 0,9 m. V = 8 × 6 × 0,9 = 43,2 m³.", { tol: 0.01, unitLabel: "m³" }),
          B("15.4-10", 3, "volume-scaling", "A cube has edge 4 cm. Its edge is doubled to 8 cm. By what number is the volume multiplied?", 8, ["Tính thể tích cube cũ: 4³.", "Tính thể tích cube mới: 8³.", "512 ÷ 64 = ?"], "64 → 512, tăng 512 ÷ 64 = 8 lần. Cạnh gấp đôi thì thể tích gấp 2 × 2 × 2 = 8 lần (không phải 2 lần).", { unitLabel: "lần" })
        ]
      },
      {
        id: "15.5", title: "Calculating the surface area of cubes and cuboids", titleVi: "Diện tích bề mặt hình lập phương và hình hộp chữ nhật",
        learn: [
          "Diện tích bề mặt là tổng diện tích tất cả các mặt của khối, đo bằng đơn vị vuông.",
          "Hình lập phương cạnh a có 6 mặt bằng nhau: S = 6a².",
          "Hình hộp chữ nhật có 3 cặp mặt giống nhau: S = 2(dài × rộng + dài × cao + rộng × cao).",
          "Hình khai triển (net) giúp em thấy đủ 6 mặt khi gấp lại.",
          "Hộp không nắp thì bớt diện tích một mặt đáy (hoặc mặt nắp)."
        ],
        example: { q: "Tính diện tích bề mặt hộp 10 cm × 6 cm × 4 cm.", steps: ["Các mặt: 10×6 = 60, 10×4 = 40, 6×4 = 24", "Mỗi loại có 2 mặt: 2 × (60 + 40 + 24)", "= 2 × 124 = 248 cm²"], prompts: ["Hình hộp có mấy loại mặt, mỗi loại ghép bởi hai kích thước nào? Em tính diện tích từng loại.", "Các mặt xuất hiện theo từng cặp bằng nhau; em gom lại thế nào?", "Tính tổng trong ngoặc rồi nhân với hệ số còn lại."], answer: { type: "num", value: 248 }, twist: { q: "Nếu hộp là khối lập phương cạnh 5 cm thì diện tích bề mặt là bao nhiêu cm²?", answer: { type: "num", value: 150 } } },
        questions: [
          B("15.5-01", 1, "cube-surface", "Find the surface area of a cube with edge 2 cm.", 24, ["Hình lập phương có mấy mặt?", "Diện tích một mặt là bao nhiêu?", "Nhân 4 với 6."], "Một mặt 2 × 2 = 4 cm². Có 6 mặt: 6 × 4 = 24 cm².", { unitLabel: "cm²" }),
          B("15.5-02", 1, "cuboid-surface", "Find the surface area of a cuboid 5 cm by 3 cm by 2 cm.", 62, ["Liệt kê ba loại mặt: 5×3, 5×2, 3×2.", "Cộng ba diện tích: 15 + 10 + 6.", "Nhân tổng với 2."], "2 × (15 + 10 + 6) = 2 × 31 = 62 cm².", { svg: cub("5 cm", "3 cm", "2 cm"), unitLabel: "cm²" }),
          B("15.5-03", 1, "cube-surface", "Find the surface area of a cube with edge 7 cm.", 294, ["Diện tích một mặt: 7 × 7.", "Có mấy mặt?", "49 × 6 = ?"], "Một mặt 49 cm², 6 mặt: 294 cm².", { unitLabel: "cm²" }),
          B("15.5-04", 2, "cuboid-surface", "A cuboid measures 8 cm by 5 cm by 3 cm. Find its surface area.", 158, ["Các mặt: 8×5, 8×3, 5×3.", "40 + 24 + 15 = ?", "Gấp đôi tổng."], "2 × (40 + 24 + 15) = 2 × 79 = 158 cm².", { unitLabel: "cm²" }),
          B("15.5-05", 2, "surface-misconception", "A cuboid is 6 cm by 4 cm by 3 cm. What is its surface area?", 2, ["Ba loại mặt có diện tích bao nhiêu?", "Mỗi loại có bao nhiêu mặt?", "Tổng ba diện tích 24 + 18 + 12 rồi nhân mấy?"], "24 + 18 + 12 = 54 là diện tích MỘT mặt của mỗi loại; phải nhân 2 được 108 cm². 72 là thể tích, 216 là nhân nhầm.", { type: "mc", choices: ["72 cm²", "54 cm²", "108 cm²", "216 cm²"] }),
          B("15.5-06", 2, "cuboid-surface", "A cuboid is 2 m long, 1.5 m wide and 1 m high. Find its surface area in m².", 13, ["Các mặt: 2×1.5, 2×1, 1.5×1.", "3 + 2 + 1,5 = ?", "Nhân đôi."], "2 × (3 + 2 + 1,5) = 2 × 6,5 = 13 m².", { tol: 0.01, unitLabel: "m²" }),
          B("15.5-07", 3, "cube-reverse", "A cube has surface area 150 cm². How long is each edge?", 5, ["Diện tích một mặt = 150 ÷ 6.", "Một mặt = cạnh × cạnh, tìm số nhân với chính nó.", "25 = ? × ?"], "150 ÷ 6 = 25 = 5 × 5 nên cạnh 5 cm.", { unitLabel: "cm" }),
          B("15.5-08", 3, "open-box", "An open box (no lid) is 10 cm by 6 cm by 4 cm. How much card is needed to make it?", 188, ["Tính diện tích bề mặt hộp kín trước.", "Hộp kín 248 cm². Nắp là mặt nào, diện tích bao nhiêu?", "248 − 60 = ?"], "Hộp kín: 2 × (60 + 40 + 24) = 248. Bỏ nắp 10 × 6 = 60. Còn 188 cm².", { howto: "Find the total area of card needed for the outside faces of the box. Remember the box has no lid.", unitLabel: "cm²" }),
          B("15.5-09", 3, "joined-cubes", "Two cubes with edge 3 cm are stuck together face to face to make one cuboid. What is the surface area of the new cuboid?", 90, ["Cuboid mới có kích thước bao nhiêu?", "Kích thước 6 × 3 × 3: tính ba loại mặt.", "2 × (18 + 18 + 9) = ?"], "Cuboid 6 × 3 × 3: 2 × (18 + 18 + 9) = 90 cm². Hai cube riêng lẻ có 2 × 54 = 108 cm², dính lại mất 2 mặt (2 × 9 = 18).", { unitLabel: "cm²" }),
          B("15.5-10", 3, "surface-vs-volume", "Which statement is true for a cube with edge 1 cm?", 1, ["Tính thể tích và diện tích bề mặt cho cube cạnh 1 cm.", "Hai đại lượng này có cùng đơn vị không?", "Có thể so sánh 1 cm³ và 6 cm² trực tiếp không?"], "V = 1 cm³ còn S = 6 cm². Thể tích và diện tích khác loại đơn vị nên không thể nói bằng nhau hay lớn hơn: so sánh chúng là vô nghĩa.", { type: "mc", choices: ["Thể tích bằng diện tích bề mặt", "Thể tích 1 cm³ và diện tích bề mặt 6 cm² là hai đại lượng khác loại, không so sánh được", "Diện tích bề mặt nhỏ hơn thể tích", "Cả hai đều bằng 6"] })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Những bài toán thực tế về vườn, bể nước và ruộng lúa, kiểu đề kiểm tra lớp 6–7.",
      questions: [
        V("ch-01", 3, "vn-garden-path", "Mảnh vườn hình chữ nhật dài 40 m, rộng 25 m. Người ta làm một lối đi rộng 2 m chạy sát bên trong hàng rào xung quanh vườn. Tính diện tích phần đất còn lại để trồng rau.", 756, ["Lối đi chạy dọc cả hai phía của mỗi chiều. Chiều dài còn lại bị bớt bao nhiêu mét?", "Chiều dài còn 40 − 2×2 = 36 m. Chiều rộng còn bao nhiêu?", "Nhân 36 với chiều rộng còn lại."], "Lối đi rộng 2 m ở cả hai bên nên mỗi chiều bớt 4 m: dài 36 m, rộng 21 m. Diện tích = 36 × 21 = 756 m².", { unitLabel: "m²" }),
        V("ch-02", 2, "vn-compound", "Sàn nhà hình chữ nhật 12 m × 8 m bị khuyết một góc hình chữ nhật 5 m × 3 m (hình chữ L). Tính diện tích sàn.", 81, ["Em có thể tính cả hình chữ nhật lớn rồi trừ phần khuyết.", "Diện tích chữ nhật lớn và phần khuyết là bao nhiêu?", "96 − 15 = ?"], "12 × 8 = 96 m², phần khuyết 5 × 3 = 15 m². Sàn L: 96 − 15 = 81 m².", { unitLabel: "m²" }),
        V("ch-03", 3, "vn-paint-tank", "Bể nước hình hộp chữ nhật không nắp dài 2 m, rộng 1,5 m, cao 1 m. Người ta sơn toàn bộ mặt trong của bể (4 mặt bên và đáy), giá 30 nghìn đồng mỗi m². Tính tiền sơn (đơn vị: nghìn đồng).", 300, ["Mặt trong gồm những mặt nào, và có mấy loại?", "Hai mặt 2 × 1, hai mặt 1,5 × 1 và đáy 2 × 1,5: tổng diện tích?", "Nhân diện tích với 30."], "Diện tích: 2×(2×1) + 2×(1,5×1) + 2×1,5 = 4 + 3 + 3 = 10 m². Tiền sơn 10 × 30 = 300 nghìn đồng.", { unitLabel: "nghìn đồng" }),
        V("ch-04", 3, "vn-fill-tank", "Bể nước hình hộp chữ nhật đáy 2 m × 1,5 m đang có nước cao 40 cm. Bơm thêm 600 lít nước (1 m³ = 1 000 lít). Hỏi mực nước mới cao bao nhiêu cm?", 60, ["Đáy bể có diện tích bao nhiêu m²?", "600 lít bằng bao nhiêu m³? Nước dâng thêm bao nhiêu mét = thể tích ÷ diện tích đáy?", "0,6 ÷ 3 = 0,2 m = ? cm, rồi cộng 40 cm."], "Đáy 2 × 1,5 = 3 m². 600 lít = 0,6 m³ nên nước dâng 0,6 ÷ 3 = 0,2 m = 20 cm. Mực nước mới 40 + 20 = 60 cm.", { unitLabel: "cm" }),
        V("ch-05", 2, "vn-ha-yield", "Thửa ruộng hình chữ nhật dài 250 m, rộng 160 m. Mỗi héc-ta thu hoạch 6 tấn lúa. Hỏi cả thửa ruộng thu được bao nhiêu tấn lúa?", 24, ["Tính diện tích thửa ruộng bằng m².", "Đổi m² ra ha (chia 10 000).", "Nhân số ha với 6."], "250 × 160 = 40 000 m² = 4 ha. Thu 4 × 6 = 24 tấn.", { unitLabel: "tấn" }),
        V("ch-06", 3, "vn-triangle-height", "Tam giác ABC vuông tại A có AB = 9 cm, AC = 12 cm, BC = 15 cm. Tính độ dài đường cao AH kẻ từ A xuống BC (cm).", 7.2, ["Tính diện tích tam giác theo hai cạnh góc vuông.", "Cũng diện tích đó bằng ½ × BC × AH.", "54 = ½ × 15 × AH, giải AH."], "Diện tích = ½ × 9 × 12 = 54 cm². Mặt khác = ½ × 15 × AH nên AH = 108 ÷ 15 = 7,2 cm.", { tol: 0.01, unitLabel: "cm" }),
        V("ch-07", 3, "vn-percent-change", "Một hình chữ nhật có chiều dài tăng 20% và chiều rộng giảm 20%. Diện tích mới giảm bao nhiêu phần trăm so với diện tích cũ?", 4, ["Gọi dài a và rộng b. Dài mới bằng bao nhiêu lần a?", "Rộng mới bằng 0,8b. Diện tích mới bằng 1,2 × 0,8 lần diện tích cũ.", "1,2 × 0,8 = 0,96, so với 1 thì giảm bao nhiêu phần trăm?"], "Diện tích mới = 1,2a × 0,8b = 0,96ab = 96% diện tích cũ, nên giảm 4%. Không phải giữ nguyên dù +20% và −20%.", { unitLabel: "%" }),
        V("ch-08", 3, "vn-cube-cut", "Khối lập phương cạnh 6 cm được sơn đỏ cả 6 mặt, rồi cưa thành các khối lập phương nhỏ cạnh 2 cm. Hỏi có bao nhiêu khối nhỏ được sơn đúng 2 mặt?", 12, ["Cạnh 6 chia cạnh 2: mỗi cạnh lớn có mấy khối nhỏ?", "Khối có đúng 2 mặt sơn nằm ở cạnh (không phải góc).", "Khối lớn có 12 cạnh, mỗi cạnh có 3 khối trong đó 2 khối ở góc."], "Mỗi cạnh có 3 khối nhỏ, trừ 2 khối góc còn 1 khối giữa. Có 12 cạnh nên 12 × 1 = 12 khối.", { unitLabel: "khối" }),
        V("ch-09", 2, "vn-aquarium", "Hồ cá hình hộp chữ nhật dài 80 cm, rộng 50 cm, cao 40 cm. Nước đổ đến ¾ chiều cao hồ. Hỏi hồ chứa bao nhiêu lít nước? (1 lít = 1 000 cm³)", 120, ["Chiều cao nước là bao nhiêu cm?", "Thể tích nước = 80 × 50 × (chiều cao nước).", "Đổi cm³ sang lít: chia 1 000."], "Nước cao 30 cm. V = 80 × 50 × 30 = 120 000 cm³ = 120 lít.", { unitLabel: "lít" }),
        V("ch-10", 3, "vn-ha-trees", "Một vườn cây rộng 0,3 ha. Mỗi cây cần 2 m² đất. Hỏi vườn trồng được nhiều nhất bao nhiêu cây?", 1500, ["Đổi 0,3 ha ra m².", "Số cây = diện tích ÷ diện tích mỗi cây.", "3 000 ÷ 2 = ?"], "0,3 ha = 3 000 m². 3 000 ÷ 2 = 1 500 cây.", { unitLabel: "cây" })
      ]
    },
    project: {
      title: "Removing cubes", titleVi: "Lấy bớt khối lập phương",
      pages: [336],
      goal: "Khám phá xem khi bớt một số khối nhỏ khỏi khối 3 × 3 × 3 thì thể tích và diện tích bề mặt thay đổi ra sao, và có thể giữ nguyên diện tích bề mặt trong khi thể tích giảm không.",
      steps: [
        "Dùng 27 khối nhỏ (hoặc vẽ trên giấy ô) xếp thành khối 3 × 3 × 3. Tính thể tích (27 cm³) và diện tích bề mặt (6 × 9 = 54 cm²).",
        "Lấy đi một khối ở góc. Thể tích còn bao nhiêu? Diện tích bề mặt thay đổi thế nào? Giải thích bằng cách đếm mặt mất đi và mặt mới lộ ra.",
        "Thử lấy đi khối ở giữa cạnh, ở giữa mặt. Ghi bảng: vị trí khối bị bỏ, thể tích, diện tích bề mặt.",
        "Tìm cách lấy đi nhiều khối để thể tích còn 25, 24, 20... cm³ nhưng diện tích bề mặt vẫn là 54 cm². Vẽ lại các cách em tìm được.",
        "Tìm thể tích nhỏ nhất có thể đạt được khi giữ diện tích bề mặt bằng 54 cm² và giải thích vì sao không thể nhỏ hơn."
      ],
      extensions: [
        "Làm lại với khối 4 × 4 × 4: diện tích bề mặt ban đầu là bao nhiêu, thể tích nhỏ nhất giữ nguyên diện tích là bao nhiêu?",
        "Thử câu ngược lại: giữ nguyên thể tích nhưng làm diện tích bề mặt lớn nhất có thể.",
        "Thiết kế một hộp quà thể tích 24 cm³ có diện tích bề mặt nhỏ nhất, so sánh với các hộp khác cùng thể tích."
      ],
      reflect: [
        "Khi bỏ một khối ở góc, vì sao diện tích bề mặt không đổi?",
        "Thể tích và diện tích bề mặt có luôn thay đổi cùng nhau không? Hãy dùng ví dụ của em để trả lời.",
        "Em rút ra quy luật gì về những khối bị bỏ có thể giữ nguyên diện tích bề mặt?"
      ]
    }
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "15.1-02": ["area-convert", { "u": 0}], "15.1-03": ["area-convert", { "u": 0}], "15.1-04": ["area-convert", { "u": 1}], "15.1-05": ["area-convert", { "u": 1}], "15.1-06": ["area-convert", { "u": 1}], "15.2-01": ["area-convert", { "u": 2}], "15.2-02": ["area-convert", { "u": 2}], "15.2-03": ["area-convert", { "u": 2}], "15.2-04": ["area-convert", { "u": 2}], "15.2-06": "rect-ha", "15.2-07": "rect-ha", "15.3-03": "triangle-area", "15.3-06": "triangle-area", "15.3-04": "triangle-height", "15.4-02": "cuboid-volume", "15.4-03": "cuboid-volume", "15.4-04": "cuboid-volume", "15.4-06": "cuboid-missing", "15.5-01": "surface-area", "15.5-03": "surface-area", "15.5-04": "surface-area", "15.5-05": "surface-area", "15.5-07": "cube-reverse" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 15; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
