window.GAME_DATA = window.GAME_DATA || { units: [] };
(function () {
  function Q(o) {
    var ans = o.answer, acc = o.accept || [];
    if (o.pt) {
      ans = "(" + o.pt[0] + ", " + o.pt[1] + ")";
      acc = [o.pt[0] + "," + o.pt[1], "(" + o.pt[0] + ";" + o.pt[1] + ")", o.pt[0] + " " + o.pt[1]];
    }
    return {
      id: o.id, type: o.pt ? "text" : o.type, diff: o.diff, skill: o.skill,
      source: o.source || "book", lang: o.lang || "en",
      q: o.q, svg: o.svg || null, choices: o.choices || null,
      answer: ans, accept: acc, tol: o.tol || 0,
      unitLabel: o.unitLabel || "", hints: o.h, explain: o.e, why: o.why || null, howto: o.howto || null
    };
  }
  function V(o) { o.source = "vn"; o.lang = "vi"; return Q(o); }
  var HEAD = '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" font-family="sans-serif" font-size="8">';

  // Bearing diagram: A at centre, B at bearing theta (deg). opt.northB adds a north line at B.
  function BR(theta, la, lb, northB) {
    var cx = 130, cy = 110, r = 70, t = theta * Math.PI / 180;
    var bx = +(cx + r * Math.sin(t)).toFixed(1), by = +(cy - r * Math.cos(t)).toFixed(1);
    var ax = +(cx + 22 * Math.sin(t)).toFixed(1), ay = +(cy - 22 * Math.cos(t)).toFixed(1);
    var s = HEAD;
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + cx + '" y2="20" stroke-width="1.4"/><polygon points="' + cx + ',14 ' + (cx - 4) + ',24 ' + (cx + 4) + ',24" fill="currentColor"/>';
    s += '<text x="' + (cx + 6) + '" y="22" fill="currentColor" stroke="none" font-size="11" font-weight="bold">N</text>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + bx + '" y2="' + by + '" stroke-width="1.6"/>';
    s += '<path d="M ' + cx + ' ' + (cy - 22) + ' A 22 22 0 ' + (theta > 180 ? 1 : 0) + ' 1 ' + ax + ' ' + ay + '" stroke-width="1" stroke-dasharray="2 2"/>';
    if (northB) {
      s += '<line x1="' + bx + '" y1="' + by + '" x2="' + bx + '" y2="' + Math.max(8, by - 55) + '" stroke-dasharray="4 3"/>';
      s += '<text x="' + (bx + 4) + '" y="' + Math.max(12, by - 50) + '" fill="currentColor" stroke="none" font-size="9">N</text>';
    }
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="currentColor"/><circle cx="' + bx + '" cy="' + by + '" r="3" fill="currentColor"/>';
    s += '<text x="' + (cx - 12) + '" y="' + (cy + 12) + '" fill="currentColor" stroke="none" font-size="11" font-weight="bold">' + la + '</text>';
    s += '<text x="' + (bx + 5) + '" y="' + (by + 12) + '" fill="currentColor" stroke="none" font-size="11" font-weight="bold">' + lb + '</text>';
    return s + '</svg>';
  }

  // Coordinate grid. o: x:[min,max], y:[min,max], pts:[[x,y,label]], polys:[{p,l,dash}], lines:[[x1,y1,x2,y2]] dashed
  function G(o) {
    var x0 = o.x[0], x1 = o.x[1], y0 = o.y[0], y1 = o.y[1];
    var c = Math.min(236 / (x1 - x0), 176 / (y1 - y0));
    var ox = 12 + (0 - x0) * c, oy = 10 + (y1 - 0) * c;
    function X(v) { return +(ox + v * c).toFixed(1); }
    function Y(v) { return +(oy - v * c).toFixed(1); }
    var s = HEAD, i;
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
    pages: [290, 330],
    realm: "Hải Đồ Thần Bí",
    emoji: "🧭",
    story: "Con tàu của em lạc giữa biển sương mù, chỉ còn la bàn và tấm hải đồ nhăn nhúm. Em phải đọc hướng đi bằng góc phương vị, tìm trung điểm giữa hai đảo, rồi lật, xoay, trượt và phóng to các mảnh hải đồ để ghép lại con đường về cảng.",
    glossary: [
      { en: "bearing", vi: "góc phương vị", def: "Góc đo từ hướng Bắc theo chiều kim đồng hồ, luôn viết đủ ba chữ số, ví dụ 065°." },
      { en: "midpoint", vi: "trung điểm", def: "Điểm nằm chính giữa một đoạn thẳng, cách đều hai đầu mút." },
      { en: "translation", vi: "phép tịnh tiến", def: "Trượt cả hình theo hướng phải/trái và lên/xuống, không xoay, không lật." },
      { en: "reflection", vi: "phép đối xứng", def: "Lật hình qua một đường gương (mirror line); ảnh và vật đối xứng nhau qua đường đó." },
      { en: "rotation", vi: "phép quay", def: "Xoay hình quanh tâm quay một góc nhất định theo chiều kim đồng hồ hoặc ngược lại." },
      { en: "enlargement", vi: "phép phóng to", def: "Nhân mọi độ dài của hình với hệ số k; góc không đổi." },
      { en: "scale factor", vi: "hệ số tỉ lệ", def: "Số lần mỗi độ dài của ảnh gấp độ dài tương ứng của vật." },
      { en: "object / image", vi: "vật / ảnh", def: "Hình trước khi biến đổi gọi là vật, hình sau biến đổi gọi là ảnh." },
      { en: "mirror line", vi: "đường gương (trục đối xứng)", def: "Đường thẳng mà hình được lật qua, ví dụ x = 4 hoặc y = 1." },
      { en: "congruent", vi: "bằng nhau", def: "Hai hình có cùng hình dạng và kích thước (vật và ảnh của tịnh tiến, đối xứng, quay)." }
    ],
    sections: [
      {
        id: "14.1",
        title: "Bearings",
        titleVi: "Góc phương vị",
        learn: [
          "Góc phương vị của B so với A là góc đo từ hướng Bắc (tại A) quay THEO CHIỀU KIM ĐỒNG HỒ tới đoạn AB.",
          "Góc phương vị có giá trị từ 000° đến 360° và luôn viết đủ ba chữ số: 65° viết là 065°.",
          "Các hướng chính: Bắc 000°, Đông 090°, Nam 180°, Tây 270°.",
          "Phải đặt mũi tên Bắc tại điểm xuất phát (điểm đứng sau chữ 'from').",
          "Hai đường Bắc song song nên góc so le trong cho ta: bearing của A từ B = bearing của B từ A cộng hoặc trừ 180°."
        ],
        example: {
          q: "Góc phương vị của B từ A là 127°. Tìm góc phương vị của A từ B.",
          steps: ["Hai đường Bắc song song, góc so le trong cho thêm 180°", "127° + 180° = 307°", "Bearing của A từ B là 307°."],
          prompts: ["Vẽ đường Bắc tại cả A và B: chúng song song hay cắt nhau? Chúng cho em cặp góc nào bằng nhau hoặc bù nhau?","Hai hướng nhìn ngược nhau tạo thành một đường thẳng. Vậy hai góc phương vị chênh nhau bao nhiêu độ? Tính ra con số.","Góc phương vị nằm trong khoảng từ 0° đến 360°. Kết quả em tìm có nằm trong khoảng đó không? Viết kết luận."],
          answer: {"type":"num","value":307},
          twist: {"q":"Nếu góc phương vị của B từ A là 250° thì góc phương vị của A từ B là bao nhiêu?","answer":{"type":"num","value":70}}
        },
        questions: [
          Q({ id: "14.1-01", type: "num", diff: 1, skill: "bearing-read",
            q: "In the diagram, find the bearing of B from A. (The dashed arc is the angle measured from north, clockwise; here the line makes an angle of 40° with north.)", svg: BR(40, "A", "B"), answer: 40, unitLabel: "°",
            h: ["Góc được đo từ hướng Bắc theo chiều nào?", "B nằm bên phải (phía Đông) của đường Bắc, vậy góc quay thuận chiều kim đồng hồ là bao nhiêu?", "Viết thành ba chữ số: 040°. Em nhập 40."],
            e: "B nằm giữa Bắc và Đông, góc từ Bắc theo chiều kim đồng hồ là 40°, viết 040°." }),
          Q({ id: "14.1-02", type: "num", diff: 2, skill: "bearing-read",
            q: "In the diagram, B is south-west of A. The angle between AB and the southward direction, measured clockwise from south, is 35°. Write the bearing of B from A.", svg: BR(215, "A", "B"), answer: 215, unitLabel: "°",
            h: ["Hướng Nam có bearing bao nhiêu độ?", "Từ hướng Nam, em quay tiếp theo chiều kim đồng hồ thêm bao nhiêu độ để tới AB?", "180° + 35° = ?"],
            e: "Nam là 180°. Từ Nam quay thêm 35° theo chiều kim đồng hồ: 180° + 35° = 215°." }),
          Q({ id: "14.1-03", type: "mc", diff: 1, skill: "bearing-compass",
            q: "Which direction does a bearing of 330° point towards?",
            choices: ["A little west of north", "A little east of north", "A little west of south", "A little east of south"], answer: 0,
            h: ["Bearing 000° (hoặc 360°) là hướng nào?", "330° còn thiếu bao nhiêu độ để đủ một vòng 360°?", "Thiếu 30° theo chiều kim đồng hồ nghĩa là đang lệch về phía Tây hay Đông của hướng Bắc?"],
            e: "330° = 360° − 30°, tức là gần hướng Bắc, lệch 30° về phía Tây (ngược chiều kim đồng hồ từ Bắc)." }),
          Q({ id: "14.1-04", type: "num", diff: 2, skill: "bearing-back",
            q: "The diagram shows a school and a shop. The bearing of the shop from the school is 042°. Work out the bearing of the school from the shop.", svg: BR(42, "School", "Shop", true), answer: 222, unitLabel: "°",
            h: ["Muốn tìm bearing của trường từ cửa hàng, em đặt mũi tên Bắc ở điểm nào?", "Hai đường Bắc song song, góc so le trong cho em thêm hay bớt bao nhiêu độ?", "042° + 180° = ?"],
            e: "Bearing 42° nhỏ hơn 180° nên cộng 180°: 42° + 180° = 222° (viết 222°)." }),
          Q({ id: "14.1-05", howto: "Find the bearing of A when you stand at B (the direction back). Enter the number of degrees.", type: "num", diff: 2, skill: "bearing-back",
            q: "Marcus's method uses alternate angles. In the diagram the bearing of B from A is 077°. Use his method to work out the bearing of A from B.", svg: BR(77, "A", "B", true), answer: 257, unitLabel: "°",
            h: ["Vẽ đường Bắc ở B; nó song song với đường Bắc ở A.", "Từ B nhìn về A, em đã quay thêm nửa vòng (180°) so với hướng từ A tới B.", "077° + 180° = ?"],
            e: "Góc so le trong cho 180° nữa: 77° + 180° = 257°." }),
          Q({ id: "14.1-06", howto: "Find the bearing of Q when you stand at P (the direction back). Enter the number of degrees.", type: "num", diff: 2, skill: "bearing-back",
            q: "Sofia's method: the bearing of P from Q is 244°. Work out the bearing of Q from P.", svg: BR(244, "Q", "P", true), answer: 64, unitLabel: "°",
            h: ["244° lớn hơn 180°, vậy khi đảo chiều em cộng hay trừ 180°?", "244° − 180° = ?", "Viết ba chữ số: 064°. Em nhập 64."],
            e: "Bearing > 180° thì trừ 180°: 244° − 180° = 64°, viết 064°." }),
          Q({ id: "14.1-07", type: "mc", diff: 2, skill: "bearing-rule",
            q: "The bearing of Y from X is m°, where m is less than 180. Which expression gives the bearing of X from Y?",
            choices: ["m + 180", "m − 180", "180 − m", "360 − m"], answer: 0,
            h: ["Thử với số cụ thể: nếu m = 60 thì bearing của X từ Y là bao nhiêu?", "Kết quả có nhỏ hơn 360° không? Có thể âm không?", "Biểu thức nào cho 240° khi m = 60?"],
            e: "Khi m < 180°, bearing ngược lại là m + 180°. m − 180 sẽ âm; 360 − m và 180 − m chỉ là đo ngược chiều hoặc đo sai." }),
          Q({ id: "14.1-08", type: "mc", diff: 2, skill: "bearing-anticlockwise",
            q: "Freya's town B is north-west of town A. The angle between the north line and AB, measured anticlockwise, is 32°. Freya says the bearing of B from A is 032°. What is the correct bearing?",
            choices: ["032°", "328°", "148°", "212°"], answer: 1,
            h: ["Bearing phải đo theo chiều kim đồng hồ hay ngược?", "Một vòng đầy là 360°. Nếu đi ngược 32° thì theo chiều kim đồng hồ phải đi bao nhiêu?", "360° − 32° = ?"],
            e: "Bearing luôn đo THEO chiều kim đồng hồ. Đo ngược 32° tức là 360° − 32° = 328°. Freya sai vì đo ngược chiều." }),
          Q({ id: "14.1-09", type: "mc", diff: 3, skill: "bearing-reasoning",
            q: "Seren walks straight from the tree to the lake on a bearing of 070°. Taylor first walks a short way due north from the tree, then walks straight to the lake. Compared with 070°, Taylor's bearing to the lake is:",
            svg: BR(70, "Tree", "Lake"),
            choices: ["Larger than 070°", "Smaller than 070°", "Exactly 070°", "Impossible to tell"], answer: 0,
            h: ["Sau khi đi về hướng Bắc, hồ nằm ở phía nào so với Taylor: phía Bắc hay phía Nam?", "Nếu hồ nằm thấp hơn (về phía Nam) thì hướng tới hồ quay từ Bắc theo chiều kim đồng hồ nhiều hơn hay ít hơn?", "Hãy thử vẽ nhanh: bearing tới một điểm nằm hẳn về phía Đông là 090°."],
            e: "Taylor đã đi lên phía Bắc nên hồ ở thấp hơn và gần hướng Đông/Nam hơn, góc quay từ Bắc lớn hơn: bearing lớn hơn 070°." }),
          Q({ id: "14.1-10", howto: "Angle ABC is the angle at town B between the line back to A and the line on to C. Enter its size in degrees.", type: "num", diff: 3, skill: "bearing-angle",
            q: "Town B is on a bearing of 065° from A. Town C is on a bearing of 140° from B. Work out the size of angle ABC.", answer: 105, unitLabel: "°",
            h: ["Bearing của A từ B là bao nhiêu? (đảo chiều 065°)", "Góc ABC nằm giữa hướng BA (245°) và hướng BC (140°); hai hướng đó cách nhau bao nhiêu độ?", "Lấy 245° trừ 140°."],
            e: "Bearing của A từ B = 065° + 180° = 245°. BC có bearing 140°. Góc ABC = 245° − 140° = 105°." })
        ]
      },
      {
        id: "14.2",
        title: "The midpoint of a line segment",
        titleVi: "Trung điểm của đoạn thẳng",
        learn: [
          "Trung điểm nằm chính giữa đoạn thẳng, cách đều hai đầu mút.",
          "Trung điểm của A(x₁, y₁) và B(x₂, y₂) là ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2): lấy trung bình hoành độ và trung bình tung độ.",
          "Nếu biết trung điểm M và một đầu mút A, thì đầu mút kia B có tọa độ 2·M − A (mỗi tọa độ).",
          "Hai đường chéo của hình bình hành cắt nhau tại trung điểm của cả hai đường.",
          "Vẽ phác trên lưới để kiểm tra kết quả có hợp lý không."
        ],
        example: {
          q: "Tìm trung điểm của A(2, 1) và B(6, 7).",
          steps: ["Hoành độ: (2 + 6) ÷ 2 = 4", "Tung độ: (1 + 7) ÷ 2 = 4", "Trung điểm là (4, 4)."],
          prompts: ["Trung điểm nằm chính giữa hai điểm. Với hoành độ 2 và 6, số nằm chính giữa là số nào? Em tính bằng phép gì?","Làm tương tự với tung độ 1 và 7.","Ghép hoành độ và tung độ thành tọa độ."],
          answer: {"type":"text","value":"(4,4)","accept":["4,4","(4;4)","4;4","(4, 4)"]},
          twist: {"q":"Nếu trung điểm của AB là M(5, 3) và A(1, −1) thì B có tọa độ nào?","answer":{"type":"text","value":"(9,7)","accept":["9,7","(9;7)","9;7","(9, 7)"]}}
        },
        questions: [
          Q({ id: "14.2-01", type: "text", diff: 1, skill: "midpoint-grid",
            q: "A(1, 2) and B(5, 2) are shown on the grid. Write the coordinates of the midpoint of AB.", svg: G({ x: [-1, 7], y: [-1, 4], pts: [[1, 2, "A"], [5, 2, "B"]], lines: [[1, 2, 5, 2]] }), pt: [3, 2],
            h: ["Đoạn AB nằm ngang hay dọc? Tung độ của điểm giữa là bao nhiêu?", "Từ A tới B đi bao nhiêu ô? Một nửa số ô đó là bao nhiêu?", "Từ A đi sang phải nửa quãng đó."],
            e: "AB nằm ngang dài 4 ô, nửa là 2 ô. Từ x = 1 đi 2 ô tới x = 3, y = 2: trung điểm (3, 2)." }),
          Q({ id: "14.2-02", type: "text", diff: 1, skill: "midpoint-grid",
            q: "E(2, 1) and F(2, 5) are shown on the grid. Write the coordinates of the midpoint of EF.", svg: G({ x: [-1, 5], y: [-1, 6], pts: [[2, 1, "F"], [2, 5, "E"]], lines: [[2, 1, 2, 5]] }), pt: [2, 3],
            h: ["Đoạn EF nằm ngang hay dọc? Hoành độ của điểm giữa là bao nhiêu?", "Từ F lên E đi bao nhiêu ô? Một nửa là bao nhiêu?", "Từ F đi lên nửa quãng đó."],
            e: "EF thẳng đứng dài 4 ô; nửa là 2 ô. Từ y = 1 lên 2 ô tới y = 3: trung điểm (2, 3)." }),
          Q({ id: "14.2-03", type: "text", diff: 2, skill: "midpoint-grid",
            q: "P(−3, −2) and Q(5, 2) are shown on the grid. Going from P to Q you move 8 squares across and 4 squares up. Write the coordinates of the midpoint of PQ.", svg: G({ x: [-4, 6], y: [-4, 4], pts: [[-3, -2, "P"], [5, 2, "Q"]], lines: [[-3, -2, 5, 2]] }), pt: [1, 0],
            h: ["Từ P tới điểm giữa, em đi một nửa quãng P tới Q. Một nửa của 8 ô và 4 ô là bao nhiêu?", "Từ P(−3, −2) đi sang phải 4 ô thì x bằng bao nhiêu?", "Đi lên 2 ô thì y bằng bao nhiêu?"],
            e: "Một nửa: 4 ô ngang và 2 ô lên. (−3 + 4, −2 + 2) = (1, 0). Cách khác: ((−3 + 5)/2, (−2 + 2)/2) = (1, 0)." }),
          Q({ id: "14.2-04", type: "mc", diff: 2, skill: "midpoint-misconception",
            q: "Find the midpoint of the line segment joining (4, 11) and (4, 2).",
            choices: ["(4, 9)", "(4, 6½)", "(4, 4½)", "(8, 13)"], answer: 1,
            h: ["Hoành độ hai điểm bằng nhau, vậy hoành độ trung điểm là bao nhiêu?", "Tung độ trung điểm là trung bình của 11 và 2: cộng rồi chia mấy?", "(11 + 2) ÷ 2 = ?"],
            e: "(11 + 2) ÷ 2 = 6,5 nên trung điểm là (4; 6,5). (4, 9) là lấy hiệu 11 − 2; (4, 4½) là lấy nửa hiệu; (8, 13) là cộng mà quên chia 2." }),
          Q({ id: "14.2-05", type: "text", diff: 2, skill: "midpoint-negative",
            q: "Work out the midpoint of the line segment joining (−5, 5) and (3, 1).", pt: [-1, 3],
            h: ["Cộng hai hoành độ: −5 + 3 bằng bao nhiêu?", "Cộng hai tung độ: 5 + 1 bằng bao nhiêu?", "Chia mỗi tổng cho 2."],
            e: "(−5 + 3) ÷ 2 = −1 và (5 + 1) ÷ 2 = 3. Trung điểm là (−1, 3)." }),
          Q({ id: "14.2-06", type: "mc", diff: 3, skill: "midpoint-error-find",
            q: "Shen and Hassan find the midpoint of (−5, −8) and (−1, 9). Shen writes (−2, −½). Hassan writes (−3, ½). Who is correct?",
            choices: ["Shen", "Hassan", "Both, because the order of adding does not matter", "Neither"], answer: 1,
            h: ["Tự tính hoành độ: (−5 + (−1)) ÷ 2 bằng bao nhiêu?", "Tung độ: (−8 + 9) ÷ 2 bằng bao nhiêu?", "So sánh với kết quả của hai bạn. Thứ tự cộng có làm đổi tổng không?"],
            e: "(−5 − 1) ÷ 2 = −3 và (−8 + 9) ÷ 2 = ½: đúng là (−3, ½) như Hassan. Shen tính −5 + (−1) thành −4 (sai). Đổi thứ tự cộng thì tổng không đổi, nên lỗi của Shen là lỗi tính." }),
          Q({ id: "14.2-07", howto: "You know the midpoint and one end of the segment. Enter the coordinates of the other end.", type: "text", diff: 2, skill: "midpoint-find-end",
            q: "The midpoint of a line segment is (4, 1). One end of the line segment is (2, 5). Work out the coordinates of the other end.", pt: [6, -3],
            h: ["Từ đầu mút (2, 5) tới trung điểm (4, 1), x thay đổi bao nhiêu, y thay đổi bao nhiêu?", "Để tới đầu mút kia, em đi thêm đúng một quãng như thế.", "Cộng thêm các thay đổi đó vào (4, 1)."],
            e: "Từ (2, 5) tới (4, 1): +2 theo x, −4 theo y. Đầu kia = (4 + 2, 1 − 4) = (6, −3). Cách khác: 2·(4, 1) − (2, 5)." }),
          Q({ id: "14.2-08", howto: "You know the midpoint and one end of the segment. Enter the coordinates of the other end.", type: "text", diff: 2, skill: "midpoint-find-end",
            q: "The midpoint of a line segment is (7, 2). One end of the line segment is (−1, 6). Work out the coordinates of the other end.", pt: [15, -2],
            h: ["Từ (−1, 6) tới (7, 2), x thay đổi bao nhiêu?", "y thay đổi bao nhiêu?", "Cộng cùng các thay đổi đó vào (7, 2)."],
            e: "Thay đổi: +8 theo x, −4 theo y. Đầu kia = (7 + 8, 2 − 4) = (15, −2)." }),
          Q({ id: "14.2-09", type: "mc", diff: 3, skill: "midpoint-diagonals",
            q: "A quadrilateral ABCD has vertices A(−2, 1), B(0, 4), C(5, 2) and D(1, −1). Do the diagonals AC and BD have the same midpoint?",
            choices: ["Yes, both midpoints are (1½, 1½)", "No: AC has midpoint (1½, 1½) but BD has midpoint (½, 1½)", "No: AC has midpoint (3, 3) but BD has midpoint (1, 3)", "Yes, both midpoints are (½, 1½)"], answer: 1,
            h: ["Hai đường chéo nối những cặp đỉnh nào?", "Tìm trung điểm AC rồi trung điểm BD.", "So sánh hai điểm vừa tìm."],
            e: "Trung điểm AC = ((−2 + 5)/2, (1 + 2)/2) = (1,5; 1,5). Trung điểm BD = ((0 + 1)/2, (4 − 1)/2) = (0,5; 1,5). Hai điểm khác nhau nên ABCD không phải hình bình hành." }),
          Q({ id: "14.2-10", howto: "Find which one of the five points B to F makes a segment with A whose midpoint is (−1, 1). Enter the coordinates of that point.", type: "text", diff: 3, skill: "midpoint-cards",
            q: "Three line segments are made from six points. One segment uses A(2, 0). The midpoint of all three segments is (−1, 1). The other points are B(−3, −2), C(−7, 5), D(1, 4), E(5, −3) and F(−4, 2). Which point is joined to A? Write its coordinates.", pt: [-4, 2],
            h: ["Nếu trung điểm là (−1, 1) và một đầu mút là (2, 0), đầu mút kia cách trung điểm bao nhiêu theo x và y?", "x giảm 3 từ 2 tới −1, vậy đầu kia giảm thêm bao nhiêu nữa?", "Đầu mút còn lại = 2·(−1, 1) − (2, 0)."],
            e: "Đầu kia = (2·(−1) − 2, 2·1 − 0) = (−4, 2), chính là điểm F. (Hai đoạn còn lại: B với D và C với E.)" })
        ]
      },
      {
        id: "14.3",
        title: "Translating 2D shapes",
        titleVi: "Tịnh tiến hình phẳng",
        learn: [
          "Tịnh tiến là trượt cả hình theo cùng một hướng và cùng một quãng; hình không xoay, không lật, không đổi cỡ.",
          "Mô tả bằng: 'sang phải/trái a ô, lên/xuống b ô'. Phải: x tăng, trái: x giảm; lên: y tăng, xuống: y giảm.",
          "Vectơ cột (a, b) viết số trên là chuyển động ngang (dương: phải, âm: trái), số dưới là chuyển động đứng (dương: lên, âm: xuống). Trong game em nhập vectơ dạng (a, b).",
          "Tìm ảnh bằng cách cộng từng tọa độ: (x, y) + (a, b) = (x + a, y + b). Vectơ quay về chỗ cũ là (−a, −b).",
          "Vật và ảnh luôn bằng nhau (congruent).",
          "Để quay lại vị trí cũ, tịnh tiến theo hướng ngược lại với cùng quãng.",
          "Hai phép tịnh tiến liên tiếp bằng một phép tịnh tiến: cộng riêng độ dịch theo x và theo y."
        ],
        example: {
          q: "Điểm P(2, 5) được tịnh tiến 4 ô sang phải và 3 ô xuống. Tìm ảnh P'.",
          steps: ["Sang phải 4: x = 2 + 4 = 6", "Xuống 3: y = 5 − 3 = 2", "P'(6, 2)."],
          prompts: ["'Sang phải 4 ô' làm tọa độ nào thay đổi, tăng hay giảm bao nhiêu?","'Xuống 3 ô' làm tọa độ nào thay đổi, tăng hay giảm bao nhiêu?","Ghép hai tọa độ mới và đặt tên cho ảnh."],
          answer: {"type":"text","value":"(6,2)","accept":["6,2","(6;2)","6;2","(6, 2)"]},
          twist: {"q":"Nếu muốn tịnh tiến P(2, 5) đến P'(−1, 9) thì vectơ tịnh tiến là gì (viết dạng (a, b))?","answer":{"type":"text","value":"(-3,4)","accept":["-3,4","(−3,4)","(-3;4)","-3;4","(−3;4)","(-3, 4)"]}}
        },
        questions: [
          Q({ id: "14.3-01", type: "text", diff: 1, skill: "translate-vector",
            q: "Point A(−1, 1) is translated by the column vector (3 across, 2 up), written (3, 2). Write the coordinates of A'.", pt: [2, 3],
            h: ["Số trên của vectơ cột cho biết sang phải hay trái bao nhiêu ô?", "Số dưới cho biết lên hay xuống bao nhiêu ô?", "A' = (−1 + 3, 1 + 2)."],
            e: "Vectơ (3, 2): sang phải 3, lên 2. A' = (−1 + 3, 1 + 2) = (2, 3)." }),
          Q({ id: "14.3-02", type: "mc", diff: 2, skill: "translate-describe",
            q: "Which column vector (across, up) translates a shape 4 squares left and 1 square down?",
            choices: ["(4, −1)", "(−4, 1)", "(−4, −1)", "(−1, −4)"], answer: 2,
            h: ["Sang trái thì số trên là dương hay âm?", "Xuống thì số dưới là dương hay âm?", "Số trên là chuyển động ngang, số dưới là chuyển động đứng."],
            e: "Trái 4 → −4 (trên), xuống 1 → −1 (dưới): (−4, −1). (4, −1) là nhầm trái thành phải; (−4, 1) là nhầm xuống thành lên; (−1, −4) là đảo thứ tự." }),
          Q({ id: "14.3-03", howto: "C' is where corner C ends up after the rectangle is translated. Enter only the coordinates of C'.", type: "text", diff: 2, skill: "translate-shape",
            q: "Rectangle ABCD has A(−2, 3), B(4, 3), C(4, −2) and D(−2, −2). It is translated by the column vector (8, 5). Write the coordinates of C'.", svg: G({ x: [-3, 13], y: [-3, 9], polys: [{ p: [[-2, 3], [4, 3], [4, -2], [-2, -2]], l: ["A", "B", "C", "D"] }] }), pt: [12, 3],
            h: ["Vectơ (8, 5) có nghĩa là sang phải bao nhiêu, lên bao nhiêu?", "Chỉ cần dịch đỉnh C(4, −2).", "C' = (4 + 8, −2 + 5)."],
            e: "C' = (4 + 8, −2 + 5) = (12, 3)." }),
          Q({ id: "14.3-04", type: "multi", diff: 2, skill: "translate-congruent",
            q: "Triangle DEF has a right angle at E, angle D = 45° and DF = 4 units. It is translated by the column vector (3, −2) to D'E'F'. Which statements are true? (Choose all that apply.)",
            choices: ["D'F' = 4 units", "Angle D'E'F' = 90°", "The image is congruent to the object", "D'F' is longer than DF"], answer: [0, 1, 2],
            h: ["Tịnh tiến có đổi kích thước hình không?", "Nó có đổi các góc không?", "Hình vật và hình ảnh như vậy gọi là gì?"],
            e: "Tịnh tiến chỉ đổi vị trí. Độ dài và góc giữ nguyên, hai hình bằng nhau (congruent). D'F' vẫn dài 4 đơn vị." }),
          Q({ id: "14.3-05", howto: "L' is where corner L ends up after the translation. Enter only the coordinates of L'.", type: "text", diff: 2, skill: "translate-vector",
            q: "Triangle JKL has J(−3, 4), K(−3, 1) and L(−2, 1). It is translated by the column vector (5, −4). Use Marcus's method, (x, y) + (5, −4), to find the coordinates of L'.", svg: G({ x: [-4, 5], y: [-4, 5], polys: [{ p: [[-3, 4], [-3, 1], [-2, 1]], l: ["J", "K", "L"] }] }), pt: [3, -3],
            h: ["Cộng riêng: hoành độ của L cộng với số trên của vectơ.", "Tung độ của L cộng với số dưới của vectơ.", "(−2 + 5, 1 + (−4))."],
            e: "L' = (−2 + 5, 1 − 4) = (3, −3). Marcus cộng từng tọa độ; không viết dấu = với cả cột như Arun." }),
          Q({ id: "14.3-06", howto: "Find how far triangle X moves across and up to reach X'. Enter the column vector as (across, up), with a minus sign for left or down.", type: "text", diff: 2, skill: "translate-find-vector",
            q: "Triangle X with vertices (1, 1), (3, 1), (1, 3) is translated to triangle X' with vertices (−3, −1), (−1, −1), (−3, 1). Write the column vector of the translation as (across, up).", svg: G({ x: [-4, 4], y: [-2, 4], polys: [{ p: [[1, 1], [3, 1], [1, 3]], l: ["X"] }, { p: [[-3, -1], [-1, -1], [-3, 1]], l: ["X'"], dash: true }] }), pt: [-4, -2],
            h: ["Chọn một đỉnh của X và đỉnh tương ứng của X'.", "Từ (1, 1) tới (−3, −1), x thay đổi bao nhiêu? y thay đổi bao nhiêu?", "Ghi thành cặp (ngang, đứng)."],
            e: "(1, 1) → (−3, −1): x giảm 4, y giảm 2. Vectơ là (−4, −2)." }),
          Q({ id: "14.3-07", type: "mc", diff: 2, skill: "translate-misconception",
            q: "Fin's homework: triangle ABC is translated by the column vector (3, −2) to A'B'C'. He says the vector that translates A'B'C' back to ABC is (2, −3). Is he correct?",
            choices: ["Yes", "No, it is (−3, 2)", "No, it is (3, 2)", "No, it is (−2, 3)"], answer: 1,
            h: ["Muốn quay về chỗ cũ, em phải đi ngược lại cả chiều ngang và chiều đứng.", "Đảo dấu cả hai số của (3, −2).", "Fin còn đảo thứ tự hai số, điều đó có đúng không?"],
            e: "Vectơ ngược của (3, −2) là (−3, 2): đổi dấu cả hai số, giữ thứ tự. Fin đã đảo thứ tự thành (2, −3) nên sai." }),
          Q({ id: "14.3-08", howto: "Find the translation that moves the shape back to where it started. Enter it as (across, up).", type: "text", diff: 2, skill: "translate-inverse",
            q: "A shape is translated by the column vector (−4, 7). Write the column vector that translates it back to its original position.", pt: [4, -7],
            h: ["Để quay lại, em đi ngược chiều ngang thế nào?", "Và ngược chiều đứng thế nào?", "Đổi dấu cả hai số."],
            e: "Đổi dấu cả hai số: (−4, 7) → (4, −7)." }),
          Q({ id: "14.3-09", howto: "F' is where corner F ends up after the square is translated. Enter only the coordinates of F'.", type: "text", diff: 3, skill: "translate-spilt",
            q: "Square EFGH has E(−5, −1) and F(3, −1). It is translated to E'F'G'H' and the image of E is E'(−8, 6). Find the coordinates of F'.", pt: [0, 6],
            h: ["Từ E(−5, −1) tới E'(−8, 6): x thay đổi bao nhiêu, y thay đổi bao nhiêu?", "Đó chính là vectơ tịnh tiến, áp dụng cho mọi đỉnh.", "F' = F + vectơ."],
            e: "Vectơ: x: −5 → −8 là −3; y: −1 → 6 là +7, tức (−3, 7). F' = (3 − 3, −1 + 7) = (0, 6)." }),
          Q({ id: "14.3-10", howto: "Find one translation that has the same effect as doing both translations. Enter it as (across, up).", type: "text", diff: 3, skill: "translate-combined",
            q: "A shape is translated by the column vector (3, −2) and then translated by (−5, 6). Write the single column vector that does the same job.", pt: [-2, 4],
            h: ["Sau hai phép tịnh tiến, tổng độ dịch ngang là bao nhiêu?", "Tổng độ dịch đứng là bao nhiêu?", "3 + (−5) và −2 + 6."],
            e: "Ngang: 3 − 5 = −2. Đứng: −2 + 6 = 4. Vectơ gộp là (−2, 4)." })
        ]
      },
      {
        id: "14.4",
        title: "Reflecting shapes",
        titleVi: "Đối xứng hình qua đường thẳng",
        learn: [
          "Muốn lật hình em cần đường gương (mirror line). Đường thẳng đứng có phương trình x = số; đường nằm ngang có phương trình y = số.",
          "Mỗi điểm và ảnh của nó cách đều đường gương, và đoạn nối chúng vuông góc với đường gương.",
          "Phản xạ qua x = a: giữ nguyên y, x' = 2a − x. Phản xạ qua y = b: giữ nguyên x, y' = 2b − y.",
          "Điểm nằm trên đường gương thì ảnh trùng chính nó.",
          "Gương chéo: qua y = x thì (x, y) → (y, x); qua y = −x thì (x, y) → (−y, −x).",
          "Biết vật và ảnh: đường gương đi qua trung điểm của đoạn nối hai điểm đó."
        ],
        example: {
          q: "Phản xạ điểm (1, 3) qua đường x = 4.",
          steps: ["Khoảng cách tới gương: 4 − 1 = 3", "Ảnh cách gương 3 về phía bên kia: x' = 4 + 3 = 7", "y giữ nguyên: ảnh là (7, 3)."],
          prompts: ["Gương là đường thẳng đứng x = 4. Điểm (1, 3) nằm bên nào của gương và cách gương bao xa?","Ảnh cách gương đúng bằng khoảng cách đó nhưng ở phía đối diện. Hoành độ ảnh là bao nhiêu?","Phản xạ qua một đường thẳng đứng có làm đổi độ cao (tung độ) của điểm không?"],
          answer: {"type":"text","value":"(7,3)","accept":["7,3","(7;3)","7;3","(7, 3)"]},
          twist: {"q":"Nếu gương là đường nằm ngang y = 1 thì ảnh của (1, 3) là điểm nào?","answer":{"type":"text","value":"(1,-1)","accept":["1,-1","(1;-1)","1;-1","(1,−1)","(1, -1)"]}}
        },
        questions: [
          Q({ id: "14.4-01", type: "text", diff: 1, skill: "reflect-vertical",
            q: "The triangle with vertices (1, 1), (2, 1) and (1, 3) is reflected in the line x = 3. Write the image of the vertex (1, 3).", svg: G({ x: [0, 7], y: [0, 5], polys: [{ p: [[1, 1], [2, 1], [1, 3]] }], lines: [[3, 0, 3, 5]] }), pt: [5, 3],
            h: ["Đỉnh (1, 3) cách đường x = 3 bao nhiêu ô?", "Đếm sang bên phải gương cùng số ô.", "Tung độ không đổi."],
            e: "Cách gương 2 ô, ảnh ở x = 3 + 2 = 5, y giữ nguyên: (5, 3)." }),
          Q({ id: "14.4-02", type: "text", diff: 2, skill: "reflect-vertical",
            q: "The triangle with vertices (1, 3), (1, 5) and (2, 4) is reflected in the line x = 2.5. Write the image of the vertex (1, 3).", svg: G({ x: [0, 6], y: [0, 6], polys: [{ p: [[1, 3], [1, 5], [2, 4]] }], lines: [[2.5, 0, 2.5, 6]] }), pt: [4, 3],
            h: ["Từ x = 1 tới đường x = 2,5 là bao nhiêu đơn vị?", "Ảnh nằm bên kia gương, cũng cách gương 1,5 đơn vị.", "2,5 + 1,5 = ?"],
            e: "Cách gương 2,5 − 1 = 1,5. Ảnh ở x = 2,5 + 1,5 = 4, y giữ nguyên: (4, 3). Công thức: x' = 2·2,5 − 1 = 4." }),
          Q({ id: "14.4-03", type: "text", diff: 2, skill: "reflect-horizontal",
            q: "The pentagon with vertices (2, 7), (4, 7), (4, 6), (3, 5) and (2, 6) is reflected in the line y = 4. Write the image of the vertex (3, 5).", svg: G({ x: [0, 7], y: [0, 8], polys: [{ p: [[2, 7], [4, 7], [4, 6], [3, 5], [2, 6]] }], lines: [[0, 4, 7, 4]] }), pt: [3, 3],
            h: ["Đường y = 4 nằm ngang. Đỉnh (3, 5) cách nó bao nhiêu ô?", "Đỉnh nằm trên gương, vậy ảnh nằm phía nào?", "y' = 4 − 1."],
            e: "Cách gương 1 ô (phía trên) nên ảnh cách gương 1 ô phía dưới: y = 3. Ảnh (3, 3)." }),
          Q({ id: "14.4-04", type: "text", diff: 3, skill: "reflect-horizontal",
            q: "Shape B has vertices (−4, 1), (−4, 3), (−3, 3), (−3, 2) and (−2, 1). It is reflected in the line y = −0.5. Write the image of the vertex (−3, 3).", svg: G({ x: [-5, 2], y: [-5, 4], polys: [{ p: [[-4, 1], [-4, 3], [-3, 3], [-3, 2], [-2, 1]] }], lines: [[-5, -0.5, 2, -0.5]] }), pt: [-3, -4],
            h: ["Từ y = 3 xuống tới đường y = −0,5 là bao nhiêu đơn vị?", "Ảnh nằm dưới gương, cách gương cùng khoảng đó.", "−0,5 − 3,5 = ?"],
            e: "Cách gương 3 − (−0,5) = 3,5. Ảnh ở y = −0,5 − 3,5 = −4: (−3, −4). Công thức y' = 2·(−0,5) − 3 = −4." }),
          Q({ id: "14.4-05", type: "mc", diff: 2, skill: "reflect-misconception",
            q: "Gille reflects shape A in the line y = −1 but draws the mirror line as a vertical line. The shape has a vertex at (2, 2). What is the image of this vertex under the correct reflection in y = −1?",
            choices: ["(2, −4)", "(−4, 2)", "(2, 0)", "(2, −2)"], answer: 0,
            h: ["Phương trình y = −1 là đường nằm ngang hay đứng?", "Đỉnh (2, 2) cách đường y = −1 bao nhiêu đơn vị theo chiều đứng?", "−1 − 3 = ?"],
            e: "y = −1 là đường NGANG. (2, 2) cách gương 3, ảnh ở y = −1 − 3 = −4: (2, −4). (−4, 2) là kết quả khi lật qua đường đứng x = −1 (lỗi của Gille)." }),
          Q({ id: "14.4-06", type: "text", diff: 2, skill: "reflect-diagonal",
            q: "Point A(3, 6) is reflected in the line y = x. Write the coordinates of A'.", svg: G({ x: [-1, 7], y: [-1, 7], pts: [[3, 6, "A"]], lines: [[-1, -1, 7, 7]] }), pt: [6, 3],
            h: ["Điểm nằm trên đường y = x có hoành độ và tung độ thế nào?", "Phản xạ qua y = x làm hoán đổi hai tọa độ.", "(3, 6) → (?, ?)."],
            e: "Phản xạ qua y = x: (x, y) → (y, x). (3, 6) → (6, 3)." }),
          Q({ id: "14.4-07", type: "text", diff: 3, skill: "reflect-diagonal",
            q: "Point A(−1, 2) is reflected in the line y = −x. Write the coordinates of A'. (Hint: the rule is (x, y) → (−y, −x). Check it on the grid.)", svg: G({ x: [-4, 3], y: [-3, 4], pts: [[-1, 2, "A"]], lines: [[-3, 3, 3, -3]] }), pt: [-2, 1],
            h: ["Đường y = −x đi qua (−3, 3), (0, 0), (3, −3).", "Quy tắc: (x, y) → (−y, −x), tức đổi chỗ hai tọa độ rồi đổi dấu cả hai.", "Với x = −1, y = 2: −y bằng bao nhiêu, −x bằng bao nhiêu? Kiểm tra: trung điểm của A và A' có nằm trên y = −x không?"],
            e: "(x, y) → (−y, −x): (−1, 2) → (−2, 1). Kiểm tra: trung điểm (−1,5; 1,5) thỏa y = −x." }),
          Q({ id: "14.4-08", howto: "Find the mirror line that reflects K onto K'. Write its equation (it starts with x = or y =).", type: "text", diff: 2, skill: "mirror-find",
            q: "Vertex K(2, 2) of a shape is reflected to K'(8, 2). Write the equation of the mirror line.", answer: "x=5", accept: ["x = 5", "x=5"],
            h: ["y không đổi, vậy gương là đường đứng hay ngang?", "Gương đi qua trung điểm của K và K'.", "(2 + 8) ÷ 2 = ?"],
            e: "Gương là đường đứng qua trung điểm: x = (2 + 8) ÷ 2 = 5, tức x = 5." }),
          Q({ id: "14.4-09", howto: "Find the mirror line that reflects L onto L'. Write its equation (it starts with x = or y =).", type: "text", diff: 3, skill: "mirror-find",
            q: "L(−1, 5) is reflected to L'(−1, −3). Write the equation of the mirror line.", answer: "y=1", accept: ["y = 1", "y=1"],
            h: ["x không đổi, vậy gương nằm ngang hay đứng?", "Gương đi qua trung điểm của L và L'.", "Trung điểm tung độ: (5 + (−3)) ÷ 2."],
            e: "Gương là đường ngang y = (5 − 3) ÷ 2 = 1, tức y = 1." }),
          Q({ id: "14.4-10", type: "text", diff: 3, skill: "reflect-double",
            q: "Point (6, −2) is reflected in the line x = 3, and the image is then reflected in the line y = 1. Find the final image.", pt: [0, 4],
            h: ["Phản xạ qua x = 3: x' = 2·3 − 6 = ?", "Điểm sau bước 1 là (0, −2). Phản xạ qua y = 1: y' = 2·1 − (−2).", "Ghép tọa độ."],
            e: "Bước 1: (6, −2) → (0, −2). Bước 2: y' = 2 − (−2) = 4 → (0, 4)." })
        ]
      },
      {
        id: "14.5",
        title: "Rotating shapes",
        titleVi: "Quay hình",
        learn: [
          "Muốn quay cần: tâm quay, góc quay và chiều (cùng chiều hoặc ngược chiều kim đồng hồ).",
          "Quay quanh gốc O: 90° ngược chiều kim đồng hồ (x, y) → (−y, x); 90° cùng chiều kim đồng hồ (x, y) → (y, −x); 180° (x, y) → (−x, −y).",
          "Quay 270° ngược chiều kim đồng hồ bằng quay 90° cùng chiều kim đồng hồ.",
          "Quay 180° thì chiều quay không quan trọng; tâm quay là trung điểm của điểm và ảnh.",
          "Với tâm C bất kỳ: lấy vectơ từ C tới điểm, quay vectơ đó, rồi cộng lại vào C."
        ],
        example: {
          q: "Quay (2, 5) quanh O một góc 90° cùng chiều kim đồng hồ.",
          steps: ["Công thức (x, y) → (y, −x)", "(2, 5) → (5, −2)", "Ảnh là (5, −2)."],
          prompts: ["Quay 90° cùng chiều kim đồng hồ quanh gốc: điểm (1, 0) sẽ đi đến đâu? Từ đó em đoán quy tắc đổi (x, y).","Áp quy tắc vào (2, 5): tọa độ mới là gì?","Ảnh nằm ở góc phần tư nào? Có hợp lý với việc quay từ góc phần tư thứ nhất theo chiều kim đồng hồ không?"],
          answer: {"type":"text","value":"(5,-2)","accept":["5,-2","(5;-2)","5;-2","(5,−2)","(5, -2)"]},
          twist: {"q":"Nếu quay (2, 5) ngược chiều kim đồng hồ 90° quanh O thì ảnh là điểm nào?","answer":{"type":"text","value":"(-5,2)","accept":["-5,2","(−5,2)","(-5;2)","-5;2","(-5, 2)"]}}
        },
        questions: [
          Q({ id: "14.5-01", type: "text", diff: 2, skill: "rotate-centre",
            q: "The rectangle with vertices (1, 1), (2, 1), (2, 3) and (1, 3) is rotated 90° clockwise about the centre C(2, 1). Write the image of the vertex (1, 3).", svg: G({ x: [0, 6], y: [-1, 5], polys: [{ p: [[1, 1], [2, 1], [2, 3], [1, 3]] }], pts: [[2, 1, "C"]] }), pt: [4, 2],
            h: ["Vectơ từ C(2, 1) tới (1, 3) là gì?", "Quay 90° cùng chiều kim đồng hồ: (a, b) → (b, −a).", "Cộng vectơ mới vào C."],
            e: "CP = (−1, 2) → quay cùng chiều 90°: (2, 1). Ảnh = (2 + 2, 1 + 1) = (4, 2)." }),
          Q({ id: "14.5-02", type: "text", diff: 2, skill: "rotate-centre",
            q: "The point (−1, 4) is rotated 90° anticlockwise about the centre (−2, 2). Write the coordinates of its image.", pt: [-4, 3],
            h: ["Vectơ từ tâm (−2, 2) tới (−1, 4) là gì?", "Quay 90° ngược chiều kim đồng hồ: (a, b) → (−b, a).", "Cộng vectơ mới vào tâm."],
            e: "Vectơ = (1, 2) → (−2, 1). Ảnh = (−2 − 2, 2 + 1) = (−4, 3)." }),
          Q({ id: "14.5-03", type: "text", diff: 2, skill: "rotate-180",
            q: "The point (−4, −1) is rotated through 180° about the centre (−1, −2). Write the coordinates of its image.", pt: [2, -3],
            h: ["Quay 180° quanh tâm thì tâm là trung điểm của điểm và ảnh.", "Ảnh = 2·(tâm) − điểm, từng tọa độ.", "2·(−1) − (−4) và 2·(−2) − (−1)."],
            e: "x' = −2 + 4 = 2, y' = −4 + 1 = −3. Ảnh (2, −3)." }),
          Q({ id: "14.5-04", type: "text", diff: 2, skill: "rotate-90-cw",
            q: "Rotate the vertex (4, 5) of a shape through 90° clockwise about the centre (2, 2). Write the coordinates of its image.", pt: [5, 0],
            h: ["Vectơ từ tâm (2, 2) tới (4, 5) là gì?", "Quay cùng chiều kim đồng hồ 90°: (a, b) → (b, −a).", "Cộng vào (2, 2)."],
            e: "Vectơ (2, 3) → (3, −2). Ảnh = (2 + 3, 2 − 2) = (5, 0)." }),
          Q({ id: "14.5-05", type: "text", diff: 2, skill: "rotate-180",
            q: "Rotate the vertex (−3, 4) through 180° about the centre (1, 0). Write the coordinates of its image.", pt: [5, -4],
            h: ["Từ (−3, 4) tới tâm (1, 0): x thay đổi bao nhiêu, y thay đổi bao nhiêu?", "Ảnh cách tâm một quãng bằng như thế, về phía bên kia.", "(1 + 4, 0 − 4)."],
            e: "Ảnh = 2·(1, 0) − (−3, 4) = (2 + 3, 0 − 4) = (5, −4)." }),
          Q({ id: "14.5-06", type: "mc", diff: 2, skill: "rotate-misconception",
            q: "Rohan rotates the point (−3, 3) through 90° anticlockwise about the centre (2, 3). Which image is correct?",
            choices: ["(2, −2)", "(−3, −3)", "(2, 8)", "(7, 3)"], answer: 0,
            h: ["Vectơ từ tâm (2, 3) tới (−3, 3) là gì?", "Quay 90° ngược chiều kim đồng hồ: (a, b) → (−b, a).", "Cộng vectơ mới vào tâm (2, 3)."],
            e: "Vectơ = (−5, 0) → (0, −5). Ảnh = (2, 3 − 5) = (2, −2). (−3, −3) là quay quanh gốc O thay vì tâm (2, 3); (2, 8) là quay cùng chiều; (7, 3) là quay 180°." }),
          Q({ id: "14.5-07", howto: "Find the fixed point that triangle A turns around to land on triangle B. Enter its coordinates.", type: "text", diff: 3, skill: "rotate-find-centre",
            q: "Triangle A with vertices (2, 3), (3, 3), (2, 5) is rotated through 180° to triangle B, where the vertex (2, 3) goes to (4, 1). Write the coordinates of the centre of rotation.", svg: G({ x: [-1, 6], y: [-2, 6], polys: [{ p: [[2, 3], [3, 3], [2, 5]], l: ["A"] }, { p: [[4, 1], [3, 1], [4, -1]], l: ["B"] }] }), pt: [3, 2],
            h: ["Khi quay 180°, tâm quay nằm ở đâu so với hai điểm tương ứng?", "Tâm là trung điểm của (2, 3) và (4, 1).", "((2 + 4) ÷ 2, (3 + 1) ÷ 2)."],
            e: "Tâm quay 180° là trung điểm của điểm và ảnh: ((2 + 4)/2, (3 + 1)/2) = (3, 2)." }),
          Q({ id: "14.5-08", type: "mc", diff: 2, skill: "rotate-describe",
            q: "The point P(5, 1) is mapped to P'(3, 3) by a rotation about the centre (3, 1). Which description is correct?",
            choices: ["90° anticlockwise, centre (3, 1)", "90° clockwise, centre (3, 1)", "180°, centre (3, 1)", "90° anticlockwise, centre (1, 1)"], answer: 0,
            h: ["Từ tâm (3, 1), điểm P nằm ở hướng nào và cách bao nhiêu?", "Điểm P' nằm ở hướng nào so với tâm?", "Từ hướng Đông tới hướng Bắc là quay ngược hay cùng chiều kim đồng hồ?"],
            e: "CP = (2, 0) hướng Đông; CP' = (0, 2) hướng Bắc. Từ Đông tới Bắc là 90° ngược chiều kim đồng hồ." }),
          Q({ id: "14.5-09", howto: "Find the fixed point that P turns around to reach P'. Enter its coordinates.", type: "text", diff: 3, skill: "rotate-find-centre",
            q: "A 90° clockwise rotation maps P(5, 5) to P'(7, 1). Find the coordinates of the centre of rotation.", pt: [4, 2],
            h: ["Gọi tâm là (a, b). Vectơ từ tâm tới P là (5 − a, 5 − b).", "Quay cùng chiều 90°: (u, v) → (v, −u). Ảnh P' = (a + 5 − b, b − (5 − a)).", "Giải: a − b = 2 và a + b = 6."],
            e: "Từ P' = (a + 5 − b, b − 5 + a) = (7, 1): a − b = 2 và a + b = 6, suy ra a = 4, b = 2. Tâm (4, 2). Kiểm tra: vectơ (1, 3) quay thành (3, −1), cộng vào (4, 2) được (7, 1)." }),
          Q({ id: "14.5-10", type: "text", diff: 3, skill: "rotate-combined",
            q: "Point P(2, 1) is rotated 90° anticlockwise about the origin, then the image is rotated through 180° about the centre (1, 1). Find the final image.", pt: [3, 0],
            h: ["Quay 90° ngược chiều quanh O: (x, y) → (−y, x). Điểm sau bước 1 là gì?", "Bước 2: quay 180° quanh (1, 1): ảnh = 2·(1, 1) − điểm.", "Tính 2 − (−1) và 2 − 2."],
            e: "Bước 1: (2, 1) → (−1, 2). Bước 2: (2 − (−1), 2 − 2) = (3, 0)." })
        ]
      },
      {
        id: "14.6",
        title: "Enlarging shapes",
        titleVi: "Phóng to hình",
        learn: [
          "Phép phóng to nhân MỌI độ dài với hệ số tỉ lệ k; hình ảnh đồng dạng với vật (cùng hình dạng, khác kích thước, góc không đổi).",
          "Với tâm phóng to O: khoảng cách từ O tới điểm ảnh bằng k lần khoảng cách từ O tới điểm vật.",
          "Với tâm O(0, 0): (x, y) → (kx, ky). Với tâm C: lấy vectơ từ C tới điểm, nhân k, cộng lại vào C.",
          "Chu vi nhân k, nhưng DIỆN TÍCH nhân k².",
          "Hệ số k = độ dài ảnh ÷ độ dài vật.",
          "Điểm trùng với tâm phóng to không di chuyển (điểm bất biến). Muốn tìm tâm, nối các đỉnh tương ứng của vật và ảnh: các đường thẳng gặp nhau tại tâm."
        ],
        example: {
          q: "Phóng to điểm P(3, 2) với tâm C(1, 1) và hệ số 3.",
          steps: ["Vectơ CP = (3 − 1, 2 − 1) = (2, 1)", "Nhân 3: (6, 3)", "Ảnh = C + (6, 3) = (7, 4)."],
          prompts: ["Phóng to tâm C: bắt đầu từ vectơ nối tâm C tới P. Tọa độ của nó là gì?","Hệ số 3 nghĩa là vectơ mới dài gấp mấy lần vectơ cũ? Hãy nhân vào từng tọa độ.","Vectơ mới cộng với tọa độ tâm C cho điểm ảnh. Kết quả là gì?"],
          answer: {"type":"text","value":"(7,4)","accept":["7,4","(7;4)","7;4","(7, 4)"]},
          twist: {"q":"Nếu hệ số phóng đại là −2 (cùng tâm C(1, 1)) thì ảnh của P(3, 2) ở đâu?","answer":{"type":"text","value":"(-3,-1)","accept":["-3,-1","(−3,−1)","(-3;-1)","-3;-1","(-3, -1)"]}}
        },
        questions: [
          Q({ id: "14.6-01", type: "num", diff: 1, skill: "enlarge-distance",
            q: "A shape is enlarged with scale factor 4. A corner of the object is 3 cm from the centre of enlargement. How far from the centre of enlargement is the matching corner of the image?", answer: 12, unitLabel: "cm",
            h: ["Với hệ số 4, khoảng cách tới tâm phóng to nhân lên mấy lần?", "Khoảng cách của vật là bao nhiêu?", "3 × 4 = ?"],
            e: "Ảnh phải cách tâm gấp 4 lần: 3 × 4 = 12 cm." }),
          Q({ id: "14.6-02", type: "text", diff: 2, skill: "enlarge-centre",
            q: "The point P(3, 2) is enlarged with scale factor 2 about the centre C(1, 1), shown on the grid. Find the coordinates of the image of P.", svg: G({ x: [0, 7], y: [0, 6], pts: [[1, 1, "C"], [3, 2, "P"]], lines: [[1, 1, 3, 2]] }), pt: [5, 3],
            h: ["Từ C tới P đi sang phải mấy ô, lên mấy ô?", "Nhân cả hai số đó với 2.", "Cộng vào tọa độ của C."],
            e: "CP = (2, 1) → nhân 2 được (4, 2). Ảnh = (1 + 4, 1 + 2) = (5, 3)." }),
          Q({ id: "14.6-03", type: "text", diff: 2, skill: "enlarge-centre",
            q: "The triangle has vertices (2, 2), (2, 3) and (4, 2). It is enlarged with scale factor 3 and centre of enlargement (1, 1). Write the image of the vertex (4, 2).", svg: G({ x: [0, 11], y: [0, 8], polys: [{ p: [[2, 2], [2, 3], [4, 2]] }], pts: [[1, 1, "C"]] }), pt: [10, 4],
            h: ["Từ tâm (1, 1) tới (4, 2): sang phải mấy ô, lên mấy ô?", "Nhân hai số đó với hệ số 3.", "Cộng vào (1, 1)."],
            e: "CP = (3, 1) → (9, 3). Ảnh = (1 + 9, 1 + 3) = (10, 4)." }),
          Q({ id: "14.6-04", type: "text", diff: 2, skill: "enlarge-centre",
            q: "For the same triangle (vertices (2, 2), (2, 3), (4, 2)), scale factor 3 and centre (1, 1), write the image of the vertex (2, 3).", pt: [4, 7],
            h: ["Vectơ từ (1, 1) tới (2, 3) là gì?", "Nhân với 3.", "Cộng vào (1, 1)."],
            e: "CP = (1, 2) → (3, 6). Ảnh = (1 + 3, 1 + 6) = (4, 7)." }),
          Q({ id: "14.6-05", type: "text", diff: 2, skill: "enlarge-centre",
            q: "A trapezium has vertices (3, 2), (7, 2), (5, 4) and (4, 4). It is enlarged with scale factor 2 and centre (5, 2). Write the image of the vertex (4, 4).", svg: G({ x: [0, 10], y: [0, 7], polys: [{ p: [[3, 2], [7, 2], [5, 4], [4, 4]] }], pts: [[5, 2, "C"]] }), pt: [3, 6],
            h: ["Từ tâm (5, 2) tới (4, 4): sang trái 1 ô và lên 2 ô.", "Nhân đôi: sang trái mấy ô, lên mấy ô?", "Cộng vào (5, 2)."],
            e: "CP = (−1, 2) → (−2, 4). Ảnh = (5 − 2, 2 + 4) = (3, 6)." }),
          Q({ id: "14.6-06", type: "num", diff: 2, skill: "enlarge-find-k",
            q: "A shape is enlarged about the centre (1, 1). The vertex P(2, 3) of the object moves to P'(5, 9). What is the scale factor?", answer: 4,
            h: ["Từ tâm (1, 1) tới P đi (1, 2).", "Từ tâm tới P' đi (4, 8).", "Hệ số = 4 ÷ 1."],
            e: "CP = (1, 2) và CP' = (4, 8) nên CP' gấp 4 lần CP. Hệ số tỉ lệ k = 4." }),
          Q({ id: "14.6-07", type: "mc", diff: 3, skill: "enlarge-find-centre",
            q: "Shape ABCD is enlarged with scale factor 4. The vertex A(−3, −2) goes to A'(0, 1). Marcus thinks the centre of enlargement is (−3, −4). Zara thinks it is (−4, −3). Who is correct?",
            choices: ["Marcus", "Zara", "Both", "Neither"], answer: 1,
            h: ["Nếu tâm là C, thì C + 4·(A − C) phải bằng A'.", "Thử tâm của Zara: A − C = (−3 + 4, −2 + 3).", "Tính C + 4·(A − C) cho từng tâm và so với (0, 1)."],
            e: "Tâm Zara (−4, −3): A − C = (1, 1), nhân 4 được (4, 4), cộng vào C: (0, 1) = A'. Tâm Marcus (−3, −4): A − C = (0, 2) → (0, 8) → ảnh (−3, 4) ≠ A'. Zara đúng." }),
          Q({ id: "14.6-08", type: "mc", diff: 2, skill: "enlarge-misconception",
            q: "Triangle vertex (2, 2) is enlarged with scale factor 3 about the centre (1, 1). Arun says you can just multiply the coordinates by 3. What is the correct image?",
            choices: ["(4, 4)", "(6, 6)", "(3, 3)", "(5, 5)"], answer: 0,
            h: ["Phép nhân thẳng các tọa độ chỉ đúng khi tâm ở đâu?", "Vectơ từ tâm (1, 1) tới (2, 2) là gì? Nhân 3.", "Cộng vào (1, 1)."],
            e: "CP = (1, 1) → (3, 3). Ảnh = (1 + 3, 1 + 3) = (4, 4). (6, 6) là nhân thẳng tọa độ: chỉ đúng khi tâm là gốc O(0, 0) — đây là phản ví dụ chống lại ý của Arun." }),
          Q({ id: "14.6-09", howto: "Find the centre of enlargement: the fixed point that the enlargement is measured from. Enter its coordinates.", type: "text", diff: 3, skill: "enlarge-find-centre",
            q: "A shape is enlarged with scale factor 2. The vertex P(4, 3) maps to P'(6, 5). Find the coordinates of the centre of enlargement.", pt: [2, 1],
            h: ["Tâm C, P và P' thẳng hàng; CP' = 2·CP.", "Vậy P là trung điểm của C và P'.", "C = 2P − P'."],
            e: "CP' = 2·CP nên P là trung điểm CP'. C = 2·(4, 3) − (6, 5) = (2, 1). Kiểm tra: (2, 1) + 2·(2, 2) = (6, 5)." }),
          Q({ id: "14.6-10", type: "text", diff: 3, skill: "enlarge-combined",
            q: "Point (3, 3) is enlarged with scale factor 2 about the centre (1, 2), and the image is then translated by the column vector (−2, 3). Find the final image.", pt: [3, 7],
            h: ["Vectơ từ tâm (1, 2) tới (3, 3) là gì? Nhân 2 rồi cộng vào tâm.", "Điểm sau phóng to là gì?", "Rồi cộng vectơ tịnh tiến (−2, 3)."],
            e: "CP = (2, 1) → (4, 2): ảnh (5, 4). Tịnh tiến (−2, 3): (3, 7)." })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Con tàu sắp cập cảng! Giải 10 bài toán hải đồ kiểu lớp 7–8 để mở cổng thành.",
      questions: [
        V({ id: "ch-01", type: "num", diff: 2, skill: "bearing-back",
          q: "Tàu A đi thẳng từ cảng O theo hướng phương vị 050°. Để quay lại đúng cảng O theo đường thẳng, tàu phải đi theo góc phương vị bao nhiêu độ?", answer: 230, unitLabel: "°",
          h: ["Quay về là đi ngược hướng, hướng ngược lệch bao nhiêu độ?", "050° nhỏ hơn 180° nên cộng hay trừ 180°?", "50° + 180° = ?"],
          e: "Hướng ngược lại: 50° + 180° = 230°, viết 230°." }),
        V({ id: "ch-02", type: "text", diff: 2, skill: "midpoint-find-end",
          q: "Trên mặt phẳng tọa độ, M(2, −1) là trung điểm của đoạn AB và A(−4, 3). Tìm tọa độ điểm B.", pt: [8, -5],
          h: ["Từ A tới M, x tăng bao nhiêu, y thay đổi bao nhiêu?", "B cách M một quãng như từ A tới M, cùng hướng.", "B = 2M − A."],
          e: "B = (2·2 − (−4), 2·(−1) − 3) = (8, −5)." }),
        V({ id: "ch-03", howto: "Tìm tọa độ trung điểm M của BC, rồi nhập tổng hoành độ và tung độ của M (một số).", type: "num", diff: 3, skill: "midpoint-compute",
          q: "Tam giác ABC có A(1, 2), B(7, 2), C(4, 8). Gọi M là trung điểm của cạnh BC. Tính tổng hoành độ và tung độ của M.", answer: 10.5, tol: 0.001,
          h: ["Trung điểm M của B(7, 2) và C(4, 8): hoành độ trung bình là bao nhiêu?", "Tung độ trung bình của 2 và 8 là bao nhiêu?", "M(5,5; 5), cộng hai số lại."],
          e: "M = ((7 + 4)/2; (2 + 8)/2) = (5,5; 5). Tổng = 10,5." }),
        V({ id: "ch-04", type: "text", diff: 2, skill: "translate-combined",
          q: "Điểm A(2, −3) được tịnh tiến sang phải 4 ô và lên 1 ô, sau đó tịnh tiến tiếp sang trái 6 ô và xuống 5 ô. Tìm tọa độ ảnh cuối cùng.", pt: [0, -7],
          h: ["Sau phép thứ nhất A đến vị trí nào?", "(6, −2) rồi sang trái 6, xuống 5.", "Hoặc cộng gộp 4 − 6 theo x và 1 − 5 theo y."],
          e: "(2, −3) → (6, −2) → (0, −7)." }),
        V({ id: "ch-05", type: "text", diff: 3, skill: "reflect-double",
          q: "Điểm P(7, 2) được lấy đối xứng qua đường thẳng x = 3, rồi lấy đối xứng ảnh qua đường thẳng y = −1. Tìm tọa độ điểm cuối cùng.", pt: [-1, -4],
          h: ["Đối xứng qua x = 3: x' = 2·3 − 7.", "Sau bước 1 điểm là (−1, 2).", "Đối xứng qua y = −1: y' = 2·(−1) − 2."],
          e: "(7, 2) → (−1, 2) → (−1, −2 − 2) = (−1, −4)." }),
        V({ id: "ch-06", type: "text", diff: 3, skill: "transform-chain",
          q: "Điểm P(2, 3) được quay 90° ngược chiều kim đồng hồ quanh gốc O, sau đó lấy đối xứng qua trục tung (trục y). Tìm tọa độ ảnh cuối cùng.", pt: [3, 2],
          h: ["Quay 90° ngược chiều: (x, y) → (−y, x).", "Sau quay: (−3, 2). Đối xứng qua trục y thì đổi dấu tọa độ nào?", "Đổi dấu hoành độ."],
          e: "(2, 3) → (−3, 2) → (3, 2)." }),
        V({ id: "ch-07", type: "num", diff: 3, skill: "enlarge-area",
          q: "Một mảnh vườn hình tam giác có diện tích 18 m² được phóng to thành bản vẽ mới có diện tích 162 m². Hệ số tỉ lệ của phép phóng to là bao nhiêu?", answer: 3,
          h: ["Diện tích gấp bao nhiêu lần?", "162 ÷ 18 = ?", "Diện tích nhân k², vậy k là căn bậc hai của 9."],
          e: "162 ÷ 18 = 9 = k², nên k = 3." }),
        V({ id: "ch-08", howto: "Nhập góc phương vị của C khi nhìn từ A (số độ, đo theo chiều kim đồng hồ từ hướng Bắc).", type: "num", diff: 3, skill: "bearing-triangle",
          q: "Ba thị trấn A, B, C: B ở hướng 070° từ A, C ở hướng 160° từ B, và AB = BC. Tìm góc phương vị của C từ A.", answer: 115, unitLabel: "°",
          h: ["Bearing của A từ B là bao nhiêu? Góc ABC bằng bao nhiêu độ?", "Tam giác cân vuông tại B có góc đáy bao nhiêu?", "Hướng AC lệch khỏi AB góc đáy, về phía nào? Cộng 70° với góc đó."],
          e: "A từ B: 250°, BC = 160° nên ∠ABC = 90°. Tam giác cân có góc đáy 45°. Bearing AC = 70° + 45° = 115°." }),
        V({ id: "ch-09", type: "num", diff: 3, skill: "enlarge-perimeter",
          q: "Một hình chữ nhật có kích thước 4 cm × 6 cm được phóng to với hệ số 1,5, sau đó tịnh tiến sang vị trí khác. Tính chu vi hình cuối cùng.", answer: 30, unitLabel: "cm",
          h: ["Phép tịnh tiến có làm đổi kích thước không?", "Kích thước sau phóng to là bao nhiêu?", "6 cm × 9 cm: chu vi 2 × (6 + 9)."],
          e: "Tịnh tiến không đổi kích thước. Sau phóng to: 6 cm × 9 cm, chu vi = 2 × 15 = 30 cm." }),
        V({ id: "ch-10", type: "text", diff: 3, skill: "midpoint-reflect",
          q: "Cho A(1, 5) và B(7, 1). Lấy A' là điểm đối xứng của A qua đường thẳng x = 4. Tìm tọa độ trung điểm của đoạn A'B.", pt: [7, 3],
          h: ["Tìm A' trước: x' = 2·4 − 1.", "A'(7, 5) và B(7, 1) có cùng hoành độ.", "Trung bình tung độ của 5 và 1."],
          e: "A' = (7, 5). Trung điểm của A'(7, 5) và B(7, 1) là (7, 3)." })
      ]
    },
    project: null
  });
})();
