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

  // Builds a small coordinate-grid SVG (viewBox 0 0 260 200).
  // o: { x:[min,max], y:[min,max], pts:[[x,y,label]], polys:[{p:[[x,y]...], l:["A","B"], dash:bool}],
  //      lines:[[x1,y1,x2,y2]] (dashed) }
  function G(o) {
    var x0 = o.x[0], x1 = o.x[1], y0 = o.y[0], y1 = o.y[1];
    var c = Math.min(236 / (x1 - x0), 176 / (y1 - y0));
    var ox = 12 + (0 - x0) * c, oy = 10 + (y1 - 0) * c;
    function X(v) { return +(ox + v * c).toFixed(1); }
    function Y(v) { return +(oy - v * c).toFixed(1); }
    var s = '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" font-family="sans-serif" font-size="8">';
    var i;
    for (i = x0; i <= x1; i++) { s += '<line x1="' + X(i) + '" y1="' + Y(y0) + '" x2="' + X(i) + '" y2="' + Y(y1) + '" stroke-opacity="0.18"/>'; }
    for (i = y0; i <= y1; i++) { s += '<line x1="' + X(x0) + '" y1="' + Y(i) + '" x2="' + X(x1) + '" y2="' + Y(i) + '" stroke-opacity="0.18"/>'; }
    s += '<line x1="' + X(x0) + '" y1="' + Y(0) + '" x2="' + X(x1) + '" y2="' + Y(0) + '" stroke-width="1.4"/>';
    s += '<line x1="' + X(0) + '" y1="' + Y(y0) + '" x2="' + X(0) + '" y2="' + Y(y1) + '" stroke-width="1.4"/>';
    var step = c >= 18 ? 1 : 2;
    for (i = x0; i <= x1; i++) { if (i !== 0 && i % step === 0) { s += '<text x="' + (X(i) - 3) + '" y="' + (Y(0) + 9) + '" fill="currentColor" stroke="none">' + i + '</text>'; } }
    for (i = y0; i <= y1; i++) { if (i !== 0 && i % step === 0) { s += '<text x="' + (X(0) - 10) + '" y="' + (Y(i) + 3) + '" fill="currentColor" stroke="none">' + i + '</text>'; } }
    (o.lines || []).forEach(function (l) {
      s += '<line x1="' + X(l[0]) + '" y1="' + Y(l[1]) + '" x2="' + X(l[2]) + '" y2="' + Y(l[3]) + '" stroke-dasharray="4 3" stroke-width="1.6"/>';
    });
    (o.polys || []).forEach(function (p) {
      var pts = p.p.map(function (q) { return X(q[0]) + "," + Y(q[1]); }).join(" ");
      s += '<polygon points="' + pts + '" fill="currentColor" fill-opacity="0.15" stroke-width="1.6"' + (p.dash ? ' stroke-dasharray="3 2"' : '') + '/>';
      (p.l || []).forEach(function (t, k) {
        if (t) { s += '<text x="' + (X(p.p[k][0]) + 3) + '" y="' + (Y(p.p[k][1]) - 3) + '" fill="currentColor" stroke="none" font-size="10" font-weight="bold">' + t + '</text>'; }
      });
    });
    (o.pts || []).forEach(function (p) {
      s += '<circle cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="2.8" fill="currentColor"/>';
      if (p[2]) { s += '<text x="' + (X(p[0]) + 4) + '" y="' + (Y(p[1]) - 4) + '" fill="currentColor" stroke="none" font-size="10" font-weight="bold">' + p[2] + '</text>'; }
    });
    return s + '</svg>';
  }

  window.GAME_DATA.units.push({
    id: 14,
    title: "Position and transformation",
    titleVi: "Vị trí và phép biến hình",
    strand: "Geometry and measure",
    pages: [278, 309],
    realm: "Vương Quốc Gương Thần",
    emoji: "🪞",
    story: "Trong Vương Quốc Gương Thần, bản đồ kho báu bị tráo vị trí: hình bị lật, xoay, trượt và phóng to. Em cần đọc tọa độ chính xác và dùng thước tỉ lệ để tìm đường tới kho báu.",
    glossary: [
      { en: "scale", vi: "tỉ lệ (bản đồ)", def: "Tỉ số giữa độ dài trên bản vẽ và độ dài thật, ví dụ 1 : 50 000." },
      { en: "coordinates", vi: "tọa độ", def: "Cặp số (x, y) chỉ vị trí một điểm trên lưới." },
      { en: "midpoint", vi: "trung điểm", def: "Điểm nằm chính giữa đoạn thẳng, cách đều hai đầu mút." },
      { en: "translation", vi: "phép tịnh tiến", def: "Trượt cả hình theo một hướng và khoảng cách, không xoay, không lật." },
      { en: "reflection", vi: "phép đối xứng (phản xạ)", def: "Lật hình qua một đường gương, ảnh đối xứng với vật qua đường đó." },
      { en: "rotation", vi: "phép quay", def: "Xoay hình quanh một tâm theo một góc và một chiều xác định." },
      { en: "enlargement", vi: "phép phóng to", def: "Nhân mọi độ dài với hệ số k, giữ nguyên các góc." },
      { en: "scale factor", vi: "hệ số tỉ lệ", def: "Số lần mọi độ dài của ảnh gấp độ dài tương ứng của vật." },
      { en: "object / image", vi: "vật / ảnh", def: "Hình ban đầu gọi là vật, hình sau biến đổi gọi là ảnh." },
      { en: "congruent", vi: "bằng nhau (đồng dạng bằng)", def: "Hai hình có cùng hình dạng và kích thước." }
    ],
    sections: [
      {
        id: "14.1",
        title: "Maps and plans",
        titleVi: "Bản vẽ và bản đồ có tỉ lệ",
        learn: [
          "Tỉ lệ 1 : 50 000 nghĩa là 1 cm trên bản đồ ứng với 50 000 cm ngoài thực tế.",
          "Từ bản đồ ra thực tế: NHÂN với số bên phải của tỉ lệ. Từ thực tế lên bản đồ: CHIA.",
          "Luôn đổi đơn vị sau cùng: 100 000 cm = 1 km; 100 cm = 1 m.",
          "Tỉ lệ có thể viết 'đại diện cho' (1 cm đại diện 5 km), 'tỉ' (1 tỉ 20) hoặc dấu hai chấm (1 : 25 000), ý nghĩa như nhau.",
          "Bản đồ có số bên phải càng lớn thì cùng một khoảng thực tế vẽ càng ngắn."
        ],
        example: {
          q: "Bản đồ tỉ lệ 1 : 50 000, hai ga cách nhau 8,5 cm trên bản đồ. Khoảng cách thật là bao nhiêu km?",
          steps: ["Thực tế = 8,5 × 50 000 = 425 000 cm", "Đổi: 425 000 cm = 4 250 m = 4,25 km"],
          prompts: [
            "Tỉ lệ 1 : 50 000 nghĩa là 1 cm trên bản đồ ứng với bao nhiêu cm thật? Em tính cho 8,5 cm.",
            "Muốn đổi cm sang km em đi qua đơn vị trung gian nào? Mỗi bước chia cho bao nhiêu?"
          ],
          answer: { type: "num", value: 4.25 },
          twist: { q: "Nếu khoảng cách thật vẫn là 4,25 km nhưng bản đồ có tỉ lệ 1 : 25 000 thì hai ga cách nhau bao nhiêu cm trên bản đồ?", answer: { type: "num", value: 17 } }
        },
        questions: [
          Q({ id: "14.1-01", type: "num", diff: 1, skill: "scale-map-to-real",
            q: "On a map, 1 cm represents 40 km. Two towns are 3.5 cm apart on the map. How far apart are they in real life?", answer: 140, unitLabel: "km",
            h: ["1 cm đại diện cho bao nhiêu km?", "3,5 cm gồm bao nhiêu lần 1 cm?", "Nhân 3,5 với 40."],
            e: "3,5 × 40 = 140 km." }),
          Q({ id: "14.1-02", type: "num", diff: 1, skill: "scale-map-to-real",
            q: "A map has scale 1 : 50 000. Two stations are 8.5 cm apart on the map. Find the real distance in km.", answer: 4.25, tol: 0.001, unitLabel: "km",
            h: ["Để từ bản đồ ra thực tế, em nhân hay chia với 50 000?", "8,5 × 50 000 là bao nhiêu cm?", "Đổi cm sang km: chia cho 100 000."],
            e: "8,5 × 50 000 = 425 000 cm = 4,25 km. Lỗi hay gặp: chia 8,5 cho 50 000 thay vì nhân." }),
          Q({ id: "14.1-03", howto: "Find how long the 6 km road is when it is drawn on the map. Give that map length in centimetres.", type: "num", diff: 2, skill: "scale-real-to-map",
            q: "A map has scale 1 : 30 000. A road is 6 km long in real life. How long is it on the map?", answer: 20, unitLabel: "cm",
            h: ["Đổi 6 km sang cm trước. 1 km bằng bao nhiêu cm?", "Từ thực tế lên bản đồ em nhân hay chia?", "Chia 600 000 cm cho 30 000."],
            e: "6 km = 600 000 cm. 600 000 ÷ 30 000 = 20 cm." }),
          Q({ id: "14.1-04", type: "num", diff: 2, skill: "scale-map-to-real",
            q: "On a map with scale 1 : 200 000, two cities are 10 cm apart. What is the real distance in km?", answer: 20, unitLabel: "km",
            h: ["10 cm trên bản đồ là bao nhiêu cm thật?", "2 000 000 cm bằng bao nhiêu mét?", "Đổi tiếp sang km."],
            e: "10 × 200 000 = 2 000 000 cm = 20 000 m = 20 km." }),
          Q({ id: "14.1-05", type: "mc", diff: 2, skill: "scale-meaning",
            q: "Scale '1 to 20'. Marcus: '1 cm represents 20 m.' Arun: '1 mm represents 20 cm.' Sofia: '1 cm represents 20 cm.' Who is correct?",
            choices: ["Only Sofia", "Only Marcus", "Marcus and Arun", "All three"], answer: 0,
            h: ["Tỉ lệ 1 : 20 nghĩa là một đơn vị trên bản vẽ ứng với bao nhiêu đơn vị thật, cùng đơn vị?", "1 cm ứng với 20 cm. Còn 1 mm ứng với bao nhiêu mm?", "Kiểm tra từng bạn có dùng đơn vị khác nhau ở hai vế không."],
            e: "Hai vế của tỉ lệ cùng đơn vị: 1 cm ứng với 20 cm; 1 mm ứng với 20 mm. Chỉ Sofia đúng. Marcus và Arun đổi đơn vị sai." }),
          Q({ id: "14.1-06", type: "mc", diff: 3, skill: "scale-find",
            q: "Babra runs an 18 km race. The route is 24 cm on a map. Which scale is correct?",
            choices: ["1 : 65 000", "1 : 70 000", "1 : 75 000"], answer: 2,
            h: ["Đổi 18 km sang cm.", "Tỉ lệ = độ dài thật / độ dài trên bản đồ (cùng đơn vị cm).", "Chia 1 800 000 cho 24."],
            e: "18 km = 1 800 000 cm. 1 800 000 ÷ 24 = 75 000 nên tỉ lệ 1 : 75 000." }),
          Q({ id: "14.1-07", type: "num", diff: 2, skill: "scale-real-to-map",
            q: "A plan has scale 1 to 20. A room is 5 m long in real life. How long is it on the plan?", answer: 25, unitLabel: "cm",
            h: ["Đổi 5 m sang cm.", "Chia cho 20 hay nhân với 20?", "500 ÷ 20 = ?"],
            e: "5 m = 500 cm. 500 ÷ 20 = 25 cm." }),
          Q({ id: "14.1-08", howto: "Compare the length of the road on map B with its length on map A. Enter how many times as long it is on map B.", type: "num", diff: 3, skill: "scale-compare",
            q: "Map A has scale 1 : 25 000 and map B has scale 1 : 100 000. The same road is drawn on both. The road on map B is how many times as long as on map A? Give a fraction.", answer: "1/4",
            h: ["Cùng một con đường thật, bản đồ có số bên phải lớn hơn thì vẽ dài hơn hay ngắn hơn?", "Độ dài trên bản đồ A là thật/25 000, trên B là thật/100 000.", "Lập tỉ số (thật/100 000) : (thật/25 000)."],
            e: "Độ dài tỉ lệ nghịch với số bên phải. B/A = 25 000/100 000 = 1/4." })
        ]
      },
      {
        id: "14.2",
        title: "The distance between two points",
        titleVi: "Khoảng cách giữa hai điểm và trung điểm",
        learn: [
          "Hai điểm cùng tung độ y nằm trên đường ngang: khoảng cách bằng hiệu hai hoành độ (lấy số lớn trừ số bé).",
          "Hai điểm cùng hoành độ x nằm trên đường dọc: khoảng cách bằng hiệu hai tung độ.",
          "Với số âm, hãy đếm bước qua gốc: từ −3 đến 4 là 3 + 4 = 7 bước, không phải 1.",
          "Trung điểm của đoạn nối (x₁, y₁) và (x₂, y₂) là ((x₁ + x₂)/2, (y₁ + y₂)/2).",
          "Vẽ phác lên lưới giúp kiểm tra nhanh kết quả."
        ],
        example: {
          q: "Tìm khoảng cách giữa A(1, 2) và B(4, 2).",
          steps: ["Cùng y = 2 nên AB nằm ngang", "Hiệu hoành độ: 4 − 1 = 3", "Khoảng cách là 3 đơn vị."],
          prompts: [
            "Hai điểm có chung giá trị nào? Đoạn nối chúng nằm ngang hay dọc?",
            "Khoảng cách dọc theo trục ngang tính bằng hiệu của hai tọa độ nào?",
            "Viết khoảng cách kèm đơn vị."
          ],
          answer: { type: "num", value: 3 },
          twist: { q: "Nếu B là (4, 6) thay vì (4, 2) thì khoảng cách AB là bao nhiêu? (Gợi ý: hãy vẽ tam giác vuông.)", answer: { type: "num", value: 5 } }
        },
        questions: [
          Q({ id: "14.2-01", type: "num", diff: 1, skill: "dist-axis",
            q: "Find the distance between A(1, 2) and B(4, 2).",
            svg: G({ x: [0, 6], y: [0, 4], pts: [[1, 2, "A"], [4, 2, "B"]] }), answer: 3, unitLabel: "units",
            h: ["Hai điểm có cùng hoành độ hay cùng tung độ?", "Vậy chúng nằm trên đường ngang hay dọc?", "Lấy hiệu hai hoành độ."],
            e: "Cùng y = 2, khoảng cách = 4 − 1 = 3 đơn vị." }),
          Q({ id: "14.2-02", type: "num", diff: 1, skill: "dist-axis",
            q: "Find the distance between C(−3, 1) and D(−3, 5).",
            svg: G({ x: [-5, 2], y: [0, 6], pts: [[-3, 1, "C"], [-3, 5, "D"]] }), answer: 4, unitLabel: "units",
            h: ["Hai điểm có cùng hoành độ x = −3, chúng nằm trên đường nào?", "Cần so sánh tung độ nào?", "5 − 1 = ?"],
            e: "Cùng x, nên lấy hiệu tung độ: 5 − 1 = 4 đơn vị." }),
          Q({ id: "14.2-03", type: "num", diff: 2, skill: "dist-axis",
            q: "Find the distance between E(−4, 3) and F(2, 3).", answer: 6, unitLabel: "units",
            h: ["Hai điểm có cùng tung độ không?", "Một điểm ở bên trái, một điểm ở bên phải trục y. Đếm từ −4 đến 0 là mấy bước?", "Cộng với số bước từ 0 đến 2."],
            e: "Cùng y = 3, khoảng cách = 2 − (−4) = 6 đơn vị." }),
          Q({ id: "14.2-04", type: "num", diff: 2, skill: "dist-axis",
            q: "Find the distance between P(2, −3) and Q(2, 4).", answer: 7, unitLabel: "units",
            h: ["Hai điểm có cùng hoành độ không?", "Từ y = −3 lên y = 0 là mấy bước?", "Rồi từ 0 lên 4 là mấy bước, tổng cộng bao nhiêu?"],
            e: "Cùng x = 2, khoảng cách = 4 − (−3) = 7 đơn vị." }),
          Q({ id: "14.2-05", type: "text", diff: 2, skill: "midpoint",
            q: "Find the midpoint of A(2, 2) and B(8, 2). Write it as (x, y).",
            svg: G({ x: [0, 9], y: [0, 4], pts: [[2, 2, "A"], [8, 2, "B"]] }),
            answer: "(5, 2)", accept: ["(5,2)", "5,2", "(5; 2)"],
            h: ["Điểm chính giữa cách đều A và B, vậy hoành độ của nó nằm ở đâu giữa 2 và 8?", "Tính (2 + 8) ÷ 2.", "Tung độ của hai điểm đều bằng bao nhiêu, trung điểm có tung độ ra sao?"],
            e: "x = (2 + 8)/2 = 5, y = (2 + 2)/2 = 2. Trung điểm là (5, 2)." }),
          Q({ id: "14.2-06", type: "text", diff: 2, skill: "midpoint",
            q: "Find the midpoint of (−4, 1) and (6, 5).", answer: "(1, 3)", accept: ["(1,3)", "1,3"],
            h: ["Trung điểm có hoành độ là trung bình cộng của hai hoành độ. Cộng −4 và 6 được bao nhiêu?", "Chia đôi kết quả đó.", "Làm tương tự với 1 và 5 để tìm tung độ."],
            e: "x = (−4 + 6)/2 = 1, y = (1 + 5)/2 = 3. Trung điểm (1, 3)." }),
          Q({ id: "14.2-07", type: "mc", diff: 3, skill: "dist-negative",
            q: "Find the distance between (−3, 2) and (4, 2). A student writes 1 (from 4 − 3). Which is correct?",
            choices: ["1 unit", "7 units", "5 units", "−7 units"], answer: 1,
            h: ["Hai điểm có cùng tung độ không, vậy dùng hiệu hoành độ nào?", "4 − (−3) bằng bao nhiêu?", "Khoảng cách có thể là số âm không?"],
            e: "Hiệu hoành độ: 4 − (−3) = 7. Học sinh bỏ dấu âm nên tính 4 − 3 = 1 là sai. Khoảng cách luôn không âm, nên không thể là −7." }),
          Q({ id: "14.2-08", howto: "B is the other end of the line segment AB, and M is its middle point. Enter the coordinates of point B.", type: "text", diff: 3, skill: "midpoint-reverse",
            q: "M(2, 1) is the midpoint of A(−1, 4) and B. Find the coordinates of B.", answer: "(5, -2)", accept: ["(5,-2)", "5,-2", "(5, −2)", "(5,−2)"],
            h: ["Từ A đến M, hoành độ tăng bao nhiêu và tung độ thay đổi thế nào?", "M là chính giữa nên từ M đến B cần đi thêm cùng một bước.", "Cộng bước đó vào tọa độ M."],
            e: "Từ A(−1, 4) đến M(2, 1): +3 theo x, −3 theo y. Đi thêm một bước nữa: B = (2 + 3, 1 − 3) = (5, −2)." }),
          Q({ id: "14.2-09", type: "num", diff: 3, skill: "perimeter-coords",
            q: "A rectangle has vertices A(−2, −1), B(4, −1), C(4, 3) and D. Find its perimeter.",
            svg: G({ x: [-3, 5], y: [-2, 4], pts: [[-2, -1, "A"], [4, -1, "B"], [4, 3, "C"]] }), answer: 20, unitLabel: "units",
            h: ["Tính AB: hai điểm cùng tung độ hay cùng hoành độ?", "Tính BC tương tự.", "Chu vi hình chữ nhật = 2 × (dài + rộng)."],
            e: "AB = 4 − (−2) = 6; BC = 3 − (−1) = 4. Chu vi = 2 × (6 + 4) = 20. (D = (−2, 3).)" })
        ]
      },
      {
        id: "14.3",
        title: "Translating 2D shapes",
        titleVi: "Tịnh tiến hình 2D",
        sims: [{ id: "transform", at: 0 }],
        learn: [
          "Tịnh tiến là trượt hình đi một đoạn: sang phải/trái và lên/xuống, hình không xoay, không lật.",
          "Dịch sang phải: cộng vào x. Sang trái: trừ x. Lên: cộng y. Xuống: trừ y.",
          "Vật là hình ban đầu, ảnh là hình sau khi dịch; điểm A' đọc là 'A phẩy' tương ứng với A.",
          "Ảnh và vật bằng nhau (cùng hình dạng, kích thước, cùng hướng).",
          "Hai phép tịnh tiến liên tiếp bằng một phép tịnh tiến: cộng các bước theo x và theo y."
        ],
        example: {
          q: "Tam giác ABC có A(1,1), B(2,3), C(4,1). Tịnh tiến 3 sang phải, 2 lên trên. Tìm tọa độ của B' (A', C' làm tương tự).",
          steps: ["Cộng 3 vào mọi hoành độ, cộng 2 vào mọi tung độ", "A'(4, 3), B'(5, 5), C'(7, 3)"],
          prompts: [
            "Dịch sang phải làm thay đổi hoành độ hay tung độ? Tăng hay giảm bao nhiêu? Còn dịch lên trên thì sao?",
            "Áp dụng quy tắc đó cho từng đỉnh: tọa độ của ảnh B là gì?"
          ],
          answer: { type: "text", value: "(5, 5)", accept: ["(5;5)", "B'(5,5)", "B'(5;5)"] },
          twist: { q: "Nếu tịnh tiến 3 sang trái và 2 xuống dưới thì C(4, 1) có ảnh C' ở đâu?", answer: { type: "text", value: "(1, −1)", accept: ["(1;-1)", "C'(1,-1)", "C'(1;-1)"] } }
        },
        questions: [
          Q({ id: "14.3-01", howto: "A' (read 'A dash') is the new position of point A after the move. Enter the coordinates of A'.", type: "text", diff: 1, skill: "translate-point",
            q: "Translate A(1, 1) by 3 squares right and 2 squares up. Give A'.", answer: "(4, 3)", accept: ["(4,3)", "4,3"],
            h: ["Sang phải thì cộng hay trừ vào hoành độ?", "Lên trên thì thay đổi tung độ thế nào?", "Tính 1 + 3 và 1 + 2."],
            e: "x: 1 + 3 = 4; y: 1 + 2 = 3. A' = (4, 3)." }),
          Q({ id: "14.3-02", howto: "B' (read 'B dash') is the new position of point B after the move. Enter the coordinates of B'.", type: "text", diff: 1, skill: "translate-point",
            q: "Translate B(2, 3) by 4 squares left and 1 square down. Give B'.", answer: "(-2, 2)", accept: ["(-2,2)", "(−2, 2)", "(−2,2)"],
            h: ["Sang trái thì cộng hay trừ vào x?", "Xuống dưới thì y tăng hay giảm?", "2 − 4 = ? và 3 − 1 = ?"],
            e: "x: 2 − 4 = −2; y: 3 − 1 = 2. B' = (−2, 2)." }),
          Q({ id: "14.3-03", howto: "C' is where corner C ends up after the whole triangle moves. Enter only the coordinates of C'.", type: "text", diff: 2, skill: "translate-shape",
            q: "Triangle ABC has A(1, 1), B(2, 3), C(4, 1). It is translated 3 right and 2 up. Find C'.",
            svg: G({ x: [0, 8], y: [0, 6], polys: [{ p: [[1, 1], [2, 3], [4, 1]], l: ["A", "B", "C"] }] }),
            answer: "(7, 3)", accept: ["(7,3)", "7,3"],
            h: ["Đọc tọa độ đỉnh C trên lưới.", "Cộng 3 vào hoành độ của C.", "Cộng 2 vào tung độ của C."],
            e: "C(4, 1) → (4 + 3, 1 + 2) = (7, 3)." }),
          Q({ id: "14.3-04", howto: "Find how far P moves across and how far it moves up or down to reach P'. Enter the two moves as a pair (change in x, change in y), using a minus sign for left or down.", type: "text", diff: 2, skill: "translation-vector",
            q: "P(2, 5) is translated to P'(−1, 1). Write the translation as (change in x, change in y).", answer: "(-3, -4)", accept: ["(-3,-4)", "(−3, −4)", "(−3,−4)"],
            h: ["Hoành độ đi từ 2 đến −1: tăng hay giảm bao nhiêu?", "Tung độ đi từ 5 đến 1: thay đổi bao nhiêu?", "Ghi hai thay đổi (có dấu) thành cặp."],
            e: "Δx = −1 − 2 = −3; Δy = 1 − 5 = −4. Dịch 3 sang trái và 4 xuống: (−3, −4)." }),
          Q({ id: "14.3-05", type: "text", diff: 2, skill: "translate-point",
            q: "Translate (−3, 2) by 5 right and 4 down.", answer: "(2, -2)", accept: ["(2,-2)", "(2, −2)", "(2,−2)"],
            h: ["Cộng 5 vào hoành độ −3.", "Xuống 4 là trừ 4 vào tung độ 2.", "Viết cặp tọa độ."],
            e: "x: −3 + 5 = 2; y: 2 − 4 = −2. Ảnh (2, −2)." }),
          Q({ id: "14.3-06", type: "mc", diff: 3, skill: "translate-direction",
            q: "Translate (2, 3) by 3 squares LEFT. A student answers (5, 3). What is the correct image?",
            choices: ["(5, 3)", "(−1, 3)", "(2, 0)", "(2, 6)"], answer: 1,
            h: ["Sang trái thì x tăng hay giảm?", "Tung độ có thay đổi không khi chỉ dịch ngang?", "Tính 2 − 3."],
            e: "Sang trái nghĩa là trừ vào x: 2 − 3 = −1, y giữ nguyên: (−1, 3). Học sinh đã cộng thay vì trừ." }),
          Q({ id: "14.3-07", type: "text", diff: 3, skill: "translate-compose",
            q: "(2, 2) is translated 3 right and 1 up, and then 5 left and 4 down. Find the final image.", answer: "(0, -1)", accept: ["(0,-1)", "(0, −1)", "(0,−1)"],
            h: ["Tổng dịch theo x là +3 rồi −5: được bao nhiêu?", "Tổng dịch theo y là +1 rồi −4: được bao nhiêu?", "Áp dụng phép dịch tổng vào (2, 2)."],
            e: "Tổng Δx = 3 − 5 = −2; Δy = 1 − 4 = −3. (2, 2) → (0, −1)." }),
          Q({ id: "14.3-08", howto: "Point B is moved by the same translation that takes A to A'. B' is given; enter the coordinates of the starting point B.", type: "text", diff: 3, skill: "translate-reverse",
            q: "A(1, 1) is translated to A'(4, 3). The image of B is B'(5, 5). Find the coordinates of B.", answer: "(2, 3)", accept: ["(2,3)", "2,3"],
            h: ["Phép dịch từ A đến A' là bao nhiêu theo x và theo y?", "Để từ ảnh về vật, ta làm ngược lại thế nào?", "Trừ phép dịch đó khỏi B'."],
            e: "Phép dịch là (+3, +2). B = (5 − 3, 5 − 2) = (2, 3)." }),
          Q({ id: "14.3-09", type: "mc", diff: 3, skill: "translate-properties",
            q: "A triangle is translated. Which statement is true?",
            choices: ["The image is congruent to the object and faces the same way", "The image is smaller than the object", "The image is the mirror image of the object", "The image is turned upside down"], answer: 0,
            h: ["Tịnh tiến có làm đổi kích thước không?", "Có lật hay xoay hình không?", "Vậy ảnh và vật liên hệ thế nào?"],
            e: "Tịnh tiến chỉ đổi vị trí: ảnh bằng vật và cùng hướng. Nhầm với phản xạ (lật) hoặc phép quay." })
        ]
      },
      {
        id: "14.4",
        title: "Reflecting shapes",
        titleVi: "Đối xứng hình qua đường thẳng",
        learn: [
          "Phản xạ qua đường gương: mỗi điểm và ảnh của nó cách đường gương một khoảng bằng nhau, ở hai phía đối diện.",
          "Phản xạ qua trục y: (x, y) → (−x, y). Phản xạ qua trục x: (x, y) → (x, −y).",
          "Điểm nằm trên đường gương thì giữ nguyên vị trí.",
          "Phản xạ qua đường x = a: hoành độ mới = 2a − x; qua y = b: tung độ mới = 2b − y.",
          "Ảnh bằng vật nhưng bị đảo hướng (như soi gương)."
        ],
        example: {
          q: "Phản xạ điểm (3, 2) qua trục y.",
          steps: ["Cách trục y 3 đơn vị về bên phải, ảnh cách 3 đơn vị về bên trái", "Ảnh (−3, 2)"],
          prompts: [
            "Điểm (3, 2) cách trục y bao xa và nằm ở bên nào của trục?",
            "Ảnh cách trục y cùng khoảng đó nhưng ở phía đối diện: hoành độ ảnh là gì, tung độ có đổi không?"
          ],
          answer: { type: "text", value: "(−3, 2)", accept: ["(-3;2)", "-3,2"] },
          twist: { q: "Nếu phản xạ điểm (3, 2) qua trục x thì ảnh có tọa độ nào?", answer: { type: "text", value: "(3, −2)", accept: ["(3;-2)"] } }
        },
        questions: [
          Q({ id: "14.4-01", type: "text", diff: 1, skill: "reflect-axis",
            q: "Reflect (3, 2) in the y-axis.", answer: "(-3, 2)", accept: ["(-3,2)", "(−3, 2)", "(−3,2)"],
            h: ["Điểm cách trục y bao nhiêu đơn vị và ở phía nào?", "Ảnh ở phía ngược lại với cùng khoảng cách.", "Hoành độ đổi dấu, tung độ giữ nguyên."],
            e: "Qua trục y: (x, y) → (−x, y), nên (3, 2) → (−3, 2)." }),
          Q({ id: "14.4-02", type: "text", diff: 1, skill: "reflect-axis",
            q: "Reflect (−4, 1) in the x-axis.", answer: "(-4, -1)", accept: ["(-4,-1)", "(−4, −1)", "(−4,−1)"],
            h: ["Điểm ở trên hay dưới trục x?", "Ảnh ở phía đối diện cùng khoảng cách.", "Tung độ đổi dấu."],
            e: "Qua trục x: (x, y) → (x, −y), nên (−4, 1) → (−4, −1)." }),
          Q({ id: "14.4-03", howto: "R' is the new position of corner R after the triangle is reflected. Enter only the coordinates of R'.", type: "text", diff: 2, skill: "reflect-shape",
            q: "Triangle PQR has P(1, 1), Q(1, 3), R(3, 1). It is reflected in the y-axis. Find R'.",
            svg: G({ x: [-4, 4], y: [0, 4], polys: [{ p: [[1, 1], [1, 3], [3, 1]], l: ["P", "Q", "R"] }] }),
            answer: "(-3, 1)", accept: ["(-3,1)", "(−3, 1)", "(−3,1)"],
            h: ["R cách trục y bao nhiêu đơn vị?", "Ảnh nằm ở bên nào của trục y?", "Giữ nguyên tung độ."],
            e: "R(3, 1) → R'(−3, 1)." }),
          Q({ id: "14.4-04", type: "text", diff: 2, skill: "reflect-axis",
            q: "Reflect (2, −5) in the y-axis.", answer: "(-2, -5)", accept: ["(-2,-5)", "(−2, −5)", "(−2,−5)"],
            h: ["Phản xạ qua trục y thì tọa độ nào đổi dấu?", "Tung độ −5 có đổi không?", "Viết kết quả."],
            e: "Chỉ hoành độ đổi dấu: (2, −5) → (−2, −5)." }),
          Q({ id: "14.4-05", type: "mc", diff: 2, skill: "reflect-misconception",
            q: "Reflect (3, −2) in the x-axis. A student writes (−3, −2). Which is correct?",
            choices: ["(−3, −2)", "(3, 2)", "(−3, 2)", "(2, 3)"], answer: 1,
            h: ["Trục x là đường ngang, ảnh nằm trên hay dưới điểm?", "Tọa độ nào thay đổi khi lật qua đường ngang?", "Nhớ: (x, y) → (x, −y)."],
            e: "Qua trục x chỉ tung độ đổi dấu: (3, −2) → (3, 2). (−3, −2) là phản xạ qua trục y; (−3, 2) là phép quay 180°." }),
          Q({ id: "14.4-06", type: "text", diff: 3, skill: "reflect-line",
            q: "Reflect (5, 3) in the line x = 2.",
            svg: G({ x: [-2, 6], y: [0, 4], pts: [[5, 3, "A"]], lines: [[2, 0, 2, 4]] }),
            answer: "(-1, 3)", accept: ["(-1,3)", "(−1, 3)", "(−1,3)"],
            h: ["Điểm (5, 3) cách đường x = 2 bao nhiêu đơn vị?", "Ảnh nằm bên kia đường x = 2 cùng khoảng cách đó.", "Từ x = 2 đi sang trái bấy nhiêu đơn vị."],
            e: "Khoảng cách tới x = 2 là 5 − 2 = 3. Ảnh có x = 2 − 3 = −1, y giữ nguyên: (−1, 3)." }),
          Q({ id: "14.4-07", type: "text", diff: 3, skill: "reflect-line",
            q: "Reflect (1, 4) in the line y = 1.",
            svg: G({ x: [-1, 4], y: [-3, 5], pts: [[1, 4, "A"]], lines: [[-1, 1, 4, 1]] }),
            answer: "(1, -2)", accept: ["(1,-2)", "(1, −2)", "(1,−2)"],
            h: ["Điểm cách đường y = 1 bao nhiêu đơn vị?", "Ảnh nằm dưới đường y = 1 cùng khoảng cách.", "Lấy 1 trừ khoảng cách đó."],
            e: "Cách đường y = 1 là 3. Ảnh có y = 1 − 3 = −2, x giữ nguyên: (1, −2)." }),
          Q({ id: "14.4-08", type: "mc", diff: 3, skill: "reflect-invariant",
            q: "Which point stays in the same place when reflected in the y-axis?",
            choices: ["(0, 5)", "(5, 0)", "(−5, 0)", "(5, 5)"], answer: 0,
            h: ["Điểm nào nằm trên đường gương (trục y)?", "Điểm trên trục y có hoành độ bằng bao nhiêu?", "Đổi dấu hoành độ đó thì có thay đổi không?"],
            e: "Điểm trên trục y có x = 0 nên (0, 5) → (−0, 5) = (0, 5), giữ nguyên." }),
          Q({ id: "14.4-09", type: "text", diff: 3, skill: "reflect-compose",
            q: "A(−2, 3) is reflected in the y-axis, then the image is reflected in the x-axis. Find the final point.", answer: "(2, -3)", accept: ["(2,-3)", "(2, −3)", "(2,−3)"],
            h: ["Phản xạ qua trục y trước: tọa độ nào đổi dấu?", "Kết quả bước 1 là điểm nào?", "Rồi phản xạ qua trục x: tọa độ nào đổi dấu?"],
            e: "Bước 1: (−2, 3) → (2, 3). Bước 2: (2, 3) → (2, −3). Kết quả giống phép quay 180°." })
        ]
      },
      {
        id: "14.5",
        title: "Rotating shapes",
        titleVi: "Phép quay hình",
        learn: [
          "Phép quay cần ba thông tin: tâm quay, góc quay và chiều quay (cùng hoặc ngược chiều kim đồng hồ).",
          "Quay quanh gốc O: 180°: (x, y) → (−x, −y). 90° ngược chiều kim đồng hồ: (x, y) → (−y, x). 90° cùng chiều kim đồng hồ: (x, y) → (y, −x).",
          "Quay 180° thì chiều không quan trọng; quay 90° thì phải xác định chiều.",
          "Điểm quay quanh tâm giữ nguyên khoảng cách tới tâm; tâm quay không di chuyển.",
          "Dùng giấy can để kiểm tra: đặt đầu bút lên tâm rồi xoay giấy."
        ],
        example: {
          q: "Quay điểm (3, 1) góc 90° ngược chiều kim đồng hồ quanh O.",
          steps: ["Công thức (x, y) → (−y, x)", "(3, 1) → (−1, 3)"],
          prompts: [
            "Em thử đặt điểm (1, 0) và quay 90° ngược chiều kim đồng hồ quanh O: nó đến đâu? Từ đó em nhớ ra công thức nào?",
            "Thay x = 3, y = 1 vào công thức em vừa tìm."
          ],
          answer: { type: "text", value: "(−1, 3)", accept: ["(-1;3)"] },
          twist: { q: "Nếu quay (3, 1) 90° cùng chiều kim đồng hồ quanh O thì ảnh là điểm nào?", answer: { type: "text", value: "(1, −3)", accept: ["(1;-3)"] } }
        },
        questions: [
          Q({ id: "14.5-01", type: "text", diff: 1, skill: "rotate-180",
            q: "Rotate (2, 1) by 180° about the origin.", answer: "(-2, -1)", accept: ["(-2,-1)", "(−2, −1)", "(−2,−1)"],
            h: ["Quay nửa vòng quanh O thì điểm ở phía nào so với O?", "Cả hoành độ và tung độ có đổi dấu không?", "Viết tọa độ mới."],
            e: "Quay 180° quanh O: (x, y) → (−x, −y), nên (2, 1) → (−2, −1)." }),
          Q({ id: "14.5-02", type: "text", diff: 1, skill: "rotate-180",
            q: "Rotate (0, 4) by 180° about the origin.", answer: "(0, -4)", accept: ["(0,-4)", "(0, −4)", "(0,−4)", "(-0, -4)"],
            h: ["Điểm (0, 4) nằm trên trục nào?", "Nửa vòng quanh O sẽ đưa nó tới phía nào?", "Cách O vẫn 4 đơn vị."],
            e: "(0, 4) → (−0, −4) = (0, −4)." }),
          Q({ id: "14.5-03", type: "text", diff: 2, skill: "rotate-90",
            q: "Rotate (3, 1) by 90° anticlockwise about the origin.", answer: "(-1, 3)", accept: ["(-1,3)", "(−1, 3)", "(−1,3)"],
            h: ["Điểm (3, 1) ở góc phần tư nào? Quay 90° ngược chiều kim đồng hồ thì sang góc nào?", "Hãy thử vẽ (3, 1) rồi quay giấy can 90°.", "Hoặc dùng quy tắc (x, y) → (−y, x)."],
            e: "(x, y) → (−y, x): (3, 1) → (−1, 3)." }),
          Q({ id: "14.5-04", type: "text", diff: 2, skill: "rotate-90",
            q: "Rotate (3, 1) by 90° clockwise about the origin.", answer: "(1, -3)", accept: ["(1,-3)", "(1, −3)", "(1,−3)"],
            h: ["Quay cùng chiều kim đồng hồ thì điểm (3, 1) đi về phía dưới.", "Quy tắc cùng chiều: (x, y) → (y, −x).", "Áp dụng với x = 3, y = 1."],
            e: "(x, y) → (y, −x): (3, 1) → (1, −3)." }),
          Q({ id: "14.5-05", type: "text", diff: 2, skill: "rotate-centre",
            q: "Rotate (6, 5) by 180° about the centre (4, 3).",
            svg: G({ x: [0, 8], y: [0, 7], pts: [[6, 5, "P"], [4, 3, "C"]] }),
            answer: "(2, 1)", accept: ["(2,1)", "2,1"],
            h: ["Từ tâm C(4, 3) đến P(6, 5) cần đi bao nhiêu bước theo x và y?", "Quay 180° thì đi ngược lại cùng số bước từ C.", "Trừ các bước đó khỏi tọa độ C."],
            e: "Từ C đến P: (+2, +2). Ảnh: C − (2, 2) = (2, 1)." }),
          Q({ id: "14.5-06", type: "mc", diff: 2, skill: "rotate-direction",
            q: "Does a rotation of 180° clockwise give the same image as 180° anticlockwise?",
            choices: ["Yes, always", "No, they are mirror images", "Only for symmetrical shapes", "Only about the origin"], answer: 0,
            h: ["Quay nửa vòng theo chiều này, em đến đâu?", "Quay nửa vòng theo chiều ngược lại, em đến đâu?", "Hai vị trí đó giống hay khác nhau?"],
            e: "Hai chiều quay nửa vòng đều đưa điểm về phía đối diện qua tâm, nên ảnh giống nhau. Điều này không đúng với góc 90°." }),
          Q({ id: "14.5-07", type: "text", diff: 3, skill: "rotate-90",
            q: "Rotate (−2, 4) by 90° anticlockwise about the origin.", answer: "(-4, -2)", accept: ["(-4,-2)", "(−4, −2)", "(−4,−2)"],
            h: ["Quy tắc ngược chiều: (x, y) → (−y, x).", "Ở đây x = −2, y = 4. Tính −y.", "Tọa độ x ban đầu trở thành tung độ mới."],
            e: "(−2, 4) → (−4, −2)." }),
          Q({ id: "14.5-08", type: "text", diff: 3, skill: "rotate-repeat",
            q: "(2, 3) is rotated 90° anticlockwise about the origin three times in a row. Find the final point.", answer: "(3, -2)", accept: ["(3,-2)", "(3, −2)", "(3,−2)"],
            h: ["Quay lần 1: (x, y) → (−y, x). Ra điểm nào?", "Quay tiếp lần 2 và lần 3.", "Ba lần 90° ngược chiều bằng một phép quay 90° cùng chiều: kiểm tra lại."],
            e: "(2, 3) → (−3, 2) → (−2, −3) → (3, −2). Cũng bằng quay 90° cùng chiều: (x, y) → (y, −x) = (3, −2)." }),
          Q({ id: "14.5-09", type: "num", diff: 3, skill: "rotate-distance",
            q: "Point A is 5 cm from the centre of rotation O. A is rotated 90° about O to A'. How far is A' from O?", answer: 5, unitLabel: "cm",
            h: ["Điểm quay quanh tâm vạch ra đường gì?", "Khoảng cách tới tâm có thay đổi không?", "Vậy OA' bằng bao nhiêu?"],
            e: "Quay quanh O không đổi khoảng cách tới O (điểm đi trên đường tròn), nên OA' = 5 cm." })
        ]
      },
      {
        id: "14.6",
        title: "Enlarging shapes",
        titleVi: "Phóng to hình",
        learn: [
          "Phóng to với hệ số k: MỌI độ dài được nhân với k, các góc giữ nguyên.",
          "Hình vật và hình ảnh đồng dạng: cùng hình dạng, khác kích thước.",
          "Hệ số tỉ lệ = độ dài ảnh / độ dài vật tương ứng; kiểm tra với mọi cạnh.",
          "Phóng to với tâm O: tọa độ đỉnh nhân với k.",
          "Chu vi nhân k; diện tích nhân k²."
        ],
        example: {
          q: "Phóng to tam giác có đáy 2 ô, cao 1 ô với hệ số 3. Kích thước ảnh?",
          steps: ["Đáy ảnh = 3 × 2 = 6 ô", "Cao ảnh = 3 × 1 = 3 ô"],
          prompts: [
            "Phóng to hệ số 3 thì nhân độ dài mỗi cạnh với mấy? Áp dụng cho đáy 2 ô.",
            "Còn chiều cao 1 ô thì sao?"
          ],
          answer: { type: "text", value: "6, 3", accept: ["6;3", "6×3", "6x3", "6 ô và 3 ô"] },
          twist: { q: "Nếu hệ số phóng to là 3 thì diện tích ảnh gấp mấy lần diện tích hình gốc?", answer: { type: "num", value: 9 } }
        },
        questions: [
          Q({ id: "14.6-01", type: "num", diff: 1, skill: "enlarge-length",
            q: "A rectangle is 3 cm by 4 cm. It is enlarged with scale factor 2. How long is the longer side of the image?", answer: 8, unitLabel: "cm",
            h: ["Cạnh dài của vật là bao nhiêu?", "Phóng to hệ số 2 thì nhân hay cộng?", "4 × 2 = ?"],
            e: "4 × 2 = 8 cm (và cạnh ngắn 3 × 2 = 6 cm)." }),
          Q({ id: "14.6-02", type: "num", diff: 1, skill: "enlarge-length",
            q: "A triangle has base 2 squares and height 1 square. After an enlargement with scale factor 3, how many squares long is the base of the image?", answer: 6, unitLabel: "squares",
            h: ["Đáy ban đầu là bao nhiêu ô?", "Nhân với hệ số 3.", "2 × 3 = ?"],
            e: "Đáy ảnh = 3 × 2 = 6 ô." }),
          Q({ id: "14.6-03", type: "num", diff: 2, skill: "enlarge-perimeter",
            q: "A 5 cm by 2 cm rectangle is enlarged with scale factor 4. Find the perimeter of the image.", answer: 56, unitLabel: "cm",
            h: ["Kích thước ảnh là 5 × 4 và 2 × 4.", "Chu vi = 2 × (dài + rộng).", "Hoặc chu vi vật nhân 4."],
            e: "Ảnh 20 cm × 8 cm, chu vi 2 × (20 + 8) = 56 cm. Hoặc (2 × 7) × 4 = 56." }),
          Q({ id: "14.6-04", type: "num", diff: 2, skill: "scale-factor",
            q: "A 2 cm by 5 cm rectangle becomes an 8 cm by 20 cm rectangle after an enlargement. What is the scale factor?", answer: 4,
            h: ["Chọn một cạnh của vật và cạnh tương ứng của ảnh.", "Hệ số = độ dài ảnh / độ dài vật.", "Kiểm tra với cạnh còn lại: 20/5 = ?"],
            e: "8 ÷ 2 = 4 và 20 ÷ 5 = 4 nên hệ số là 4." }),
          Q({ id: "14.6-05", howto: "C' is the new position of corner C after the triangle is enlarged. Enter only the coordinates of C'.", type: "text", diff: 2, skill: "enlarge-coords",
            q: "Triangle ABC has A(1, 1), B(3, 1), C(1, 2). It is enlarged with scale factor 3 about the origin. Find C'.",
            svg: G({ x: [0, 8], y: [0, 7], polys: [{ p: [[1, 1], [3, 1], [1, 2]], l: ["A", "B", "C"] }] }),
            answer: "(3, 6)", accept: ["(3,6)", "3,6"],
            h: ["Đọc tọa độ C.", "Phóng to hệ số 3 quanh O: nhân cả hai tọa độ với 3.", "1 × 3 và 2 × 3 là bao nhiêu?"],
            e: "C(1, 2) → (3 × 1, 3 × 2) = (3, 6)." }),
          Q({ id: "14.6-06", type: "mc", diff: 2, skill: "enlarge-misconception",
            q: "A 2 cm by 3 cm rectangle is enlarged with scale factor 3. A student says the image is 5 cm by 6 cm. What is the correct image size?",
            choices: ["5 cm by 6 cm", "6 cm by 9 cm", "6 cm by 6 cm", "2 cm by 9 cm"], answer: 1,
            h: ["Hệ số tỉ lệ 3 nghĩa là cộng 3 hay nhân 3?", "Phải áp dụng cho cả hai cạnh.", "2 × 3 và 3 × 3 là bao nhiêu?"],
            e: "Mọi cạnh nhân 3: 6 cm × 9 cm. Học sinh đã cộng 3 vào mỗi cạnh nên hình méo (sai tỉ lệ)." }),
          Q({ id: "14.6-07", type: "num", diff: 3, skill: "enlarge-area",
            q: "A 2 cm by 3 cm rectangle is enlarged with scale factor 3. The area of the image is how many times the area of the object?", answer: 9,
            h: ["Tính diện tích vật.", "Tính kích thước ảnh rồi diện tích ảnh.", "Chia diện tích ảnh cho diện tích vật."],
            e: "Vật: 2 × 3 = 6 cm². Ảnh: 6 × 9 = 54 cm². 54 ÷ 6 = 9 = 3². Diện tích nhân k²." }),
          Q({ id: "14.6-08", type: "mc", diff: 3, skill: "enlarge-properties",
            q: "Which quantity stays the same after an enlargement?",
            choices: ["Angles", "Side lengths", "Area", "Perimeter"], answer: 0,
            h: ["Hai hình đồng dạng khác nhau ở điều gì?", "Khi phóng to, đường chéo và cạnh có thay đổi không?", "Cái gì không bị 'kéo giãn'?"],
            e: "Phóng to nhân các độ dài (và chu vi, diện tích) nhưng giữ nguyên các góc." }),
          Q({ id: "14.6-09", type: "num", diff: 3, skill: "enlarge-compose",
            q: "A 4 cm by 6 cm rectangle is enlarged with scale factor 2, and then the image is enlarged with scale factor 3. Find the perimeter of the final shape.", answer: 120, unitLabel: "cm",
            h: ["Sau hai lần phóng to, hệ số tổng cộng là bao nhiêu?", "Kích thước hình cuối là bao nhiêu?", "Tính chu vi."],
            e: "Hệ số tổng 2 × 3 = 6. Kích thước 24 × 36, chu vi 2 × (24 + 36) = 120 cm." })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Trung điểm, đối xứng, tịnh tiến, phóng to: các bài toán tọa độ và biến hình kiểu kiểm tra lớp 6–7 đang canh giữ kho báu.",
      questions: [
        V({ id: "ch-01", type: "text", diff: 2, skill: "midpoint",
          q: "Cho A(−3, 5) và B(7, −1). Tìm tọa độ trung điểm M của đoạn AB.", answer: "(2, 2)", accept: ["(2,2)", "2,2"],
          h: ["Trung điểm có hoành độ bằng trung bình cộng hai hoành độ.", "(−3 + 7) ÷ 2 = ?", "Làm tương tự với tung độ 5 và −1."],
          e: "x = (−3 + 7)/2 = 2; y = (5 + (−1))/2 = 2. M(2, 2)." }),
        V({ id: "ch-02", howto: "B là đầu mút còn lại của đoạn thẳng AB, còn M là trung điểm. Nhập tọa độ của điểm B.", type: "text", diff: 3, skill: "midpoint-reverse",
          q: "M(1, −2) là trung điểm của AB với A(−4, 3). Tìm tọa độ B.", answer: "(6, -7)", accept: ["(6,-7)", "(6, −7)", "(6,−7)"],
          h: ["Từ A đến M, hoành độ và tung độ thay đổi bao nhiêu?", "Từ M đến B cần thay đổi bằng chừng ấy nữa.", "Hoặc dùng 2M − A cho từng tọa độ."],
          e: "x_B = 2 × 1 − (−4) = 6; y_B = 2 × (−2) − 3 = −7. B(6, −7)." }),
        V({ id: "ch-03", type: "text", diff: 2, skill: "reflect-compose",
          q: "Điểm A(3, −2) được lấy đối xứng qua trục Oy, rồi ảnh của nó lấy đối xứng qua trục Ox. Tìm tọa độ điểm cuối cùng.", answer: "(-3, 2)", accept: ["(-3,2)", "(−3, 2)", "(−3,2)"],
          h: ["Đối xứng qua Oy làm đổi dấu tọa độ nào?", "Sau bước 1 điểm là (−3, −2). Đối xứng qua Ox đổi dấu tọa độ nào?", "Viết kết quả."],
          e: "(3, −2) → (−3, −2) → (−3, 2)." }),
        V({ id: "ch-04", type: "text", diff: 3, skill: "translate-compose",
          q: "Điểm A(1, 2) tịnh tiến 3 đơn vị sang phải và 5 đơn vị xuống dưới, sau đó tịnh tiến tiếp 7 đơn vị sang trái và 4 đơn vị lên trên. Tìm tọa độ ảnh cuối cùng.", answer: "(-3, 1)", accept: ["(-3,1)", "(−3, 1)", "(−3,1)"],
          h: ["Tổng dịch theo x: +3 rồi −7?", "Tổng dịch theo y: −5 rồi +4?", "Cộng phép dịch tổng vào (1, 2)."],
          e: "Δx = 3 − 7 = −4; Δy = −5 + 4 = −1. (1, 2) → (−3, 1)." }),
        V({ id: "ch-05", type: "num", diff: 3, skill: "triangle-area-coords",
          q: "Cho A(−2, 3), B(−2, −5), C(4, −5). Tính diện tích tam giác ABC (đơn vị diện tích).", answer: 24,
          h: ["Cạnh AB nằm ngang hay thẳng đứng? Dài bao nhiêu?", "Cạnh BC dài bao nhiêu? Hai cạnh này có vuông góc không?", "Diện tích tam giác vuông = nửa tích hai cạnh góc vuông."],
          e: "AB = 3 − (−5) = 8, BC = 4 − (−2) = 6, vuông tại B. S = ½ × 8 × 6 = 24." }),
        V({ id: "ch-06", type: "num", diff: 3, skill: "enlarge-area",
          q: "Hình chữ nhật 2 cm × 6 cm được phóng to với hệ số 3. Tính diện tích hình ảnh.", answer: 108, unitLabel: "cm²",
          h: ["Kích thước hình ảnh là bao nhiêu?", "Nhân hai kích thước mới.", "Hoặc diện tích cũ nhân với 3²."],
          e: "Ảnh 6 cm × 18 cm = 108 cm². Cũng bằng 12 × 9 = 108." }),
        V({ id: "ch-07", type: "num", diff: 3, skill: "enlarge-area",
          q: "Hình vuông có diện tích 25 cm² được phóng to thành hình vuông có diện tích 225 cm². Tìm hệ số phóng to.", answer: 3,
          h: ["Cạnh hình vuông ban đầu bằng bao nhiêu?", "Cạnh hình vuông mới bằng bao nhiêu?", "Chia cạnh mới cho cạnh cũ."],
          e: "Cạnh cũ 5 cm, cạnh mới 15 cm, hệ số 15/5 = 3. (Diện tích tăng 225/25 = 9 = 3² lần.)" }),
        V({ id: "ch-08", type: "num", diff: 3, skill: "scale-speed",
          q: "Trên bản đồ tỉ lệ 1 : 500 000, hai thành phố cách nhau 7,2 cm. Một ô tô đi với vận tốc 48 km/h. Hỏi ô tô đi hết bao nhiêu phút?", answer: 45, unitLabel: "phút",
          h: ["Khoảng cách thật là 7,2 × 500 000 cm. Đổi sang km.", "Thời gian = quãng đường ÷ vận tốc (giờ).", "Đổi giờ ra phút."],
          e: "7,2 × 500 000 = 3 600 000 cm = 36 km. 36 ÷ 48 = 0,75 giờ = 45 phút." }),
        V({ id: "ch-09", type: "num", diff: 3, skill: "dist-axis",
          q: "Hai điểm A(a, 2) và B(7, 2) cách nhau 5 đơn vị, với a nhỏ hơn 7. Tìm a.", answer: 2,
          h: ["A và B cùng tung độ nên cùng nằm trên đường ngang.", "Khoảng cách bằng 7 − a.", "Giải 7 − a = 5."],
          e: "7 − a = 5 nên a = 2." }),
        V({ id: "ch-10", type: "text", diff: 3, skill: "rotate-translate",
          q: "Điểm A(2, −3) được quay 180° quanh gốc O, rồi ảnh được tịnh tiến 5 đơn vị sang phải và 1 đơn vị lên trên. Tìm tọa độ điểm cuối.", answer: "(3, 4)", accept: ["(3,4)", "3,4"],
          h: ["Quay 180° quanh O: đổi dấu cả hai tọa độ.", "Sau khi quay điểm là (−2, 3).", "Cộng 5 vào x và 1 vào y."],
          e: "(2, −3) → (−2, 3) → (−2 + 5, 3 + 1) = (3, 4)." })
      ]
    },
    project: null
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "14.1-01": "map-cm", "14.1-02": "map-ratio", "14.1-04": "map-ratio", "14.1-03": "map-real-to-map", "14.2-03": "dist-axis", "14.2-04": "dist-axis", "14.2-07": "dist-axis", "14.6-01": "enlarge", "14.6-03": "enlarge", "14.6-04": "enlarge" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 14; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
