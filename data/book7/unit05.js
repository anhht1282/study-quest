// Math Quest 7 — Unit 5: Angles and constructions (book pp. 102-123)
(function () {
  var R = function (n) { return Math.round(n * 10) / 10; };
  var pt = function (cx, cy, deg, len) {
    return [R(cx + len * Math.cos(deg * Math.PI / 180)), R(cy - len * Math.sin(deg * Math.PI / 180))];
  };
  var ln = function (x1, y1, x2, y2) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
  };
  var tx = function (x, y, t) {
    return '<text x="' + x + '" y="' + (y + 4) + '" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">' + t + '</text>';
  };
  var svg = function (inner) {
    return '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5">' + inner + '</svg>';
  };
  // rays from a centre at the given angles (degrees, counter-clockwise from the +x axis)
  var rays = function (cx, cy, angles, len) {
    return angles.map(function (a) { var p = pt(cx, cy, a, len); return ln(cx, cy, p[0], p[1]); }).join('');
  };
  // a text label placed inside the sector whose middle direction is `deg`
  var lab = function (cx, cy, deg, r, t) { var p = pt(cx, cy, deg, r); return tx(p[0], p[1], t); };
  var poly = function (pts) {
    return '<polygon points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '"/>';
  };
  // two parallel lines + transversal (acute angle 67 deg); extra = labels
  var par = function (extra) {
    return svg(ln(20, 50, 240, 50) + ln(20, 110, 240, 110) + ln(92.8, 137.6, 143.7, 17.8) +
      tx(226, 44, '&gt;') + tx(226, 104, '&gt;') + extra);
  };

  var SVG_LINE = svg(ln(20, 110, 240, 110) + ln(130, 110, 165, 38) + lab(130, 110, 122, 30, '116°') + lab(130, 110, 32, 30, 'x'));
  var SVG_POINT3 = svg(rays(130, 80, [0, 130, 250], 70) + lab(130, 80, 65, 28, '130°') + lab(130, 80, 190, 28, '120°') + lab(130, 80, 305, 28, 'x'));
  var SVG_EQUAL3 = svg(rays(130, 80, [90, 210, 330], 70) + lab(130, 80, 150, 26, 'x') + lab(130, 80, 270, 26, 'x') + lab(130, 80, 30, 26, 'x'));
  var SVG_QUAD = svg(poly([[30, 40], [200, 25], [235, 130], [60, 140]]) +
    tx(52, 52, '95°') + tx(190, 40, '63°') + tx(214, 120, 'x') + tx(82, 128, '110°'));
  var SVG_KITE = svg(poly([[130, 20], [40, 70], [130, 145], [220, 70]]) +
    tx(130, 36, '135°') + tx(62, 70, '80°') + tx(198, 70, '80°') + tx(130, 128, 'x'));
  var SVG_INTER = svg(rays(130, 80, [20, 73, 200, 253], 80) + lab(130, 80, 46.5, 34, '53°') + lab(130, 80, 136, 34, 'x'));
  var SVG_THREE = svg(rays(130, 80, [0, 61, 107, 180, 241, 287], 80) + lab(130, 80, 30, 30, '61°') + lab(130, 80, 84, 30, '46°') + lab(130, 80, 143, 30, 'x'));
  var SVG_PAR1 = par(tx(118, 32, '113°') + tx(88, 124, 'x'));
  var SVG_PAR2 = par(tx(152, 38, '75°') + tx(117, 132, 'x'));
  var SVG_EXT = svg(poly([[30, 130], [170, 130], [118.8, 41.3]]) + ln(118.8, 41.3, 136, 24) +
    tx(62, 123, '45°') + tx(150, 122, '60°') + tx(152, 56, 'x'));
  var SVG_TRAP = svg(poly([[30, 110], [220, 110], [190.3, 40], [100, 40]]) +
    tx(58, 104, '45°') + tx(194, 103, '67°') + tx(176, 54, 'x') +
    tx(24, 112, 'A') + tx(228, 114, 'B') + tx(197, 34, 'C') + tx(94, 34, 'D') +
    tx(160, 106, '&gt;') + tx(150, 44, '&gt;'));
  var SVG_QABCD = svg(poly([[60, 25], [132, 25], [165.6, 142], [35, 72.7]]) +
    tx(70, 38, '118°') + tx(118, 38, '106°') + tx(50, 72, '90°') + tx(158, 128, 'x') +
    tx(54, 20, 'A') + tx(138, 20, 'B') + tx(172, 148, 'C') + tx(26, 76, 'D') +
    tx(96, 18, '4 cm') + tx(34, 44, '3 cm'));

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 5,
    title: "Angles and constructions",
    titleVi: "Góc và dựng hình",
    strand: "Geometry and measure",
    pages: [102, 123],
    realm: "Hải Đăng Vòng Tròn",
    emoji: "🧭",
    story: "Con tàu của em bị lạc giữa biển sương mù, chỉ còn chiếc la bàn và thước đo góc. Muốn lái đúng hướng, em phải tính các góc quanh một điểm, góc giữa các đường thẳng và vẽ chính xác đường vuông góc, đường song song để tới hải đăng.",
    glossary: [
      { en: "angle", vi: "góc", def: "Độ quay giữa hai tia chung gốc, đo bằng độ (°)." },
      { en: "quadrilateral", vi: "tứ giác", def: "Hình có bốn cạnh thẳng và bốn góc; tổng bốn góc luôn bằng 360°." },
      { en: "opposite angles", vi: "góc đối đỉnh", def: "Hai góc không kề nhau tạo bởi hai đường thẳng cắt nhau; chúng bằng nhau." },
      { en: "perpendicular", vi: "vuông góc", def: "Hai đường thẳng cắt nhau tạo góc 90°." },
      { en: "parallel", vi: "song song", def: "Hai đường thẳng không bao giờ cắt nhau, luôn cách đều nhau." },
      { en: "transversal", vi: "đường cắt", def: "Đường thẳng cắt qua hai (hay nhiều) đường thẳng song song." },
      { en: "protractor", vi: "thước đo góc", def: "Dụng cụ hình bán nguyệt dùng để đo và vẽ góc." },
      { en: "set square", vi: "ê-ke", def: "Thước tam giác có góc vuông, dùng vẽ đường vuông góc." },
      { en: "vertex", vi: "đỉnh", def: "Điểm mà hai cạnh của một góc gặp nhau." }
    ],
    sections: [
      {
        id: "5.1",
        title: "A sum of 360°",
        titleVi: "Tổng bằng 360°",
        sims: [{ id: "protractor", at: 0 }],
        learn: [
          "Một vòng quay đầy đủ là 360°. Các góc quanh một điểm cộng lại bằng 360°.",
          "Các góc trên một đường thẳng cộng lại bằng 180°.",
          "Vẽ một đường chéo chia tứ giác thành 2 tam giác, nên tổng bốn góc tứ giác = 2 × 180° = 360°.",
          "Muốn tìm góc còn thiếu: lấy tổng (180° hoặc 360°) trừ đi tổng các góc đã biết.",
          "Hình có trục đối xứng (như hình cánh diều) có các cặp góc bằng nhau — dùng điều này để bớt ẩn số."
        ],
        example: {
          q: "Ba góc của một tứ giác đều bằng 85°. Tính góc thứ tư.",
          steps: ["Tổng ba góc: 3 × 85° = 255°.", "Bốn góc cộng lại bằng 360°.", "Góc thứ tư = 360° − 255° = 105°."],
          prompts: [
            "Ba góc bằng nhau thì tổng ba góc tính bằng phép tính nào?",
            "Tổng bốn góc của một tứ giác là bao nhiêu độ?",
            "Muốn tìm góc còn thiếu, em lấy tổng chung trừ đi phần nào?"
          ],
          answer: { type: "num", value: 105 },
          twist: { q: "Nếu cả bốn góc của tứ giác đều bằng nhau thì mỗi góc bao nhiêu độ?", answer: { type: "num", value: 90 } }
        },
        questions: [
          { id: "5.1-01", type: "num", diff: 1, skill: "angles-straight-line", source: "book", lang: "en",
            q: "The angles on a straight line are 116° and x. Work out x.",
            svg: SVG_LINE, choices: null, answer: 64, accept: [], tol: 0, unitLabel: "°",
            hints: ["Các góc trên một đường thẳng cộng lại bằng bao nhiêu độ?", "Em đã biết một góc là 116°. Phần còn lại của 180° là bao nhiêu?", "Hãy tính 180 − 116."],
            explain: "Góc trên đường thẳng cộng lại 180°. x = 180° − 116° = 64°.", why: null },
          { id: "5.1-02", type: "num", diff: 1, skill: "angles-around-point", source: "book", lang: "en",
            q: "Three angles meet at a point: 130°, 120° and x. Work out x.",
            svg: SVG_POINT3, choices: null, answer: 110, accept: [], tol: 0, unitLabel: "°",
            hints: ["Các góc quanh một điểm tạo thành một vòng đầy đủ. Vòng đầy đủ là bao nhiêu độ?", "Hai góc đã biết cộng lại bằng bao nhiêu?", "Lấy 360 trừ tổng hai góc đó."],
            explain: "130° + 120° = 250°. x = 360° − 250° = 110°.", why: null },
          { id: "5.1-03", type: "num", diff: 1, skill: "angles-around-point", source: "book", lang: "en",
            q: "Three equal angles fit exactly around a point. How big is each angle?",
            svg: SVG_EQUAL3, choices: null, answer: 120, accept: [], tol: 0, unitLabel: "°",
            hints: ["Tổng ba góc quanh một điểm là bao nhiêu?", "Ba góc bằng nhau thì mỗi góc là một phần mấy của tổng?", "Hãy tính 360 ÷ 3."],
            explain: "Ba góc bằng nhau chia đều 360°: 360° ÷ 3 = 120°.", why: null },
          { id: "5.1-04", type: "num", diff: 2, skill: "quadrilateral-sum", source: "book", lang: "en",
            q: "Three angles of a quadrilateral are 60°, 80° and 110°. Work out the fourth angle.",
            svg: null, choices: null, answer: 110, accept: [], tol: 0, unitLabel: "°",
            hints: ["Bốn góc của một tứ giác cộng lại bằng bao nhiêu?", "Ba góc đã biết cộng lại là bao nhiêu?", "60 + 80 + 110 = 250. Còn thiếu bao nhiêu để đủ 360?"],
            explain: "60° + 80° + 110° = 250°. Góc thứ tư = 360° − 250° = 110°.", why: null },
          { id: "5.1-05", type: "num", diff: 2, skill: "quadrilateral-sum", source: "book", lang: "en",
            q: "Find the angle x in this quadrilateral. The other three angles are 95°, 63° and 110°.",
            svg: SVG_QUAD, choices: null, answer: 92, accept: [], tol: 0, unitLabel: "°",
            hints: ["Em dùng tổng bốn góc của tứ giác. Tổng đó là bao nhiêu?", "Cộng ba góc đã cho: 95 + 63 + 110 = ?", "Lấy 360 trừ kết quả ở bước trước."],
            explain: "95° + 63° + 110° = 268°. x = 360° − 268° = 92°.", why: null },
          { id: "5.1-06", type: "mc", diff: 2, skill: "quadrilateral-sum", source: "book", lang: "en",
            q: "Sofia measures three angles of a quadrilateral and gets 125°, 160° and 90°. Which statement shows she must have made a mistake?",
            svg: null,
            choices: ["The three angles add up to 375°, which is more than 360°, so there is no room for a fourth angle.", "A quadrilateral cannot have a right angle.", "The angles add up to 375°, but a quadrilateral's angles must add up to 180°.", "A quadrilateral cannot have an angle bigger than 150°."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Bốn góc của tứ giác cộng lại bằng bao nhiêu?", "Em hãy cộng ba góc Sofia đo được.", "Tổng ba góc đã vượt quá tổng cả bốn góc chưa?"],
            explain: "125 + 160 + 90 = 375 > 360 nên không còn chỗ cho góc thứ tư. Lỗi hay gặp: nhầm tổng góc tứ giác là 180° (đó là tổng góc tam giác).", why: null },
          { id: "5.1-07", type: "num", diff: 2, skill: "kite-angles", source: "book", lang: "en",
            q: "This kite has a vertical line of symmetry. Two angles are marked 80° and one is 135°. Find angle x.",
            svg: SVG_KITE, choices: null, answer: 65, accept: [], tol: 0, unitLabel: "°",
            hints: ["Hình cánh diều có trục đối xứng thẳng đứng. Điều này cho em biết gì về hai góc bên trái và bên phải?", "Vậy ba góc đã biết là những góc nào, và tổng của chúng bằng bao nhiêu?", "Lấy 360 trừ tổng ba góc đó."],
            explain: "Hai góc bên là 80° và 80°. 135° + 80° + 80° = 295°. x = 360° − 295° = 65°.", why: null },
          { id: "5.1-08", type: "num", diff: 3, skill: "quadrilateral-sum", source: "book", lang: "en",
            q: "One angle of a quadrilateral is 150°. The other three angles are all the same size. How big is each of them?",
            svg: null, choices: null, answer: 70, accept: [], tol: 0, unitLabel: "°",
            hints: ["Sau khi bỏ góc 150°, ba góc còn lại cộng lại bằng bao nhiêu?", "Ba góc bằng nhau, vậy mỗi góc là tổng đó chia cho mấy?", "Hãy tính (360 − 150) ÷ 3."],
            explain: "Ba góc còn lại cộng lại 360° − 150° = 210°. Mỗi góc = 210° ÷ 3 = 70°.", why: null },
          { id: "5.1-09", howto: "Find the number x that makes the three angles fit exactly around the point. Enter the value of x, not the size of one of the angles.", type: "num", diff: 3, skill: "angles-algebra", source: "book", lang: "en",
            q: "Three angles around a point are (2x + 10)°, (x + 20)° and (3x)°. Find the value of x.",
            svg: null, choices: null, answer: 55, accept: [], tol: 0, unitLabel: "",
            hints: ["Ba góc quanh một điểm cộng lại bằng bao nhiêu độ?", "Hãy viết phương trình: (2x + 10) + (x + 20) + 3x = 360. Gộp các số hạng giống nhau thì được gì?", "Em được 6x + 30 = 360. Giải tiếp để tìm x."],
            explain: "6x + 30 = 360 → 6x = 330 → x = 55. Kiểm tra: các góc là 120°, 75°, 165°, cộng lại 360°.", why: null },
          { id: "5.1-10", type: "mc", diff: 3, skill: "quadrilateral-equal-angles", source: "book", lang: "en",
            q: "All four angles of a quadrilateral are equal. What can you say about the quadrilateral?",
            svg: null,
            choices: ["Each angle is 90°, so it is a rectangle (possibly a square).", "Each angle is 45°, so it is a square.", "Each angle is 90°, so it must be a square.", "You cannot say anything about the angles."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Bốn góc bằng nhau và tổng là 360°. Mỗi góc bằng bao nhiêu?", "Hình có bốn góc vuông gọi là hình gì?", "Có bắt buộc bốn cạnh phải bằng nhau không, hay hình chữ nhật dài cũng thoả mãn?"],
            explain: "360° ÷ 4 = 90°, nên đó là hình chữ nhật. Hình vuông chỉ là trường hợp đặc biệt, nên không thể khẳng định chắc chắn là hình vuông.", why: null }
        ]
      },
      {
        id: "5.2",
        title: "Intersecting lines",
        titleVi: "Các đường thẳng cắt nhau",
        learn: [
          "Hai đường thẳng cắt nhau tạo ra bốn góc; hai góc đối đỉnh thì bằng nhau.",
          "Hai góc kề nhau trên cùng một đường thẳng cộng lại bằng 180°.",
          "Hai đường thẳng vuông góc cắt nhau tạo góc 90°; hai đường song song không bao giờ cắt nhau (ký hiệu bằng mũi tên).",
          "Một đường cắt hai đường song song tạo ra chỉ hai loại góc: một góc nhọn (hoặc bằng nhau) và một góc tù, cùng cộng lại 180°. Các góc ở cùng vị trí (đồng vị) thì bằng nhau.",
          "Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó."
        ],
        example: {
          q: "Hai đường thẳng cắt nhau, một góc là 53°. Tính góc kề bù với nó (từ đó suy ra ba góc còn lại).",
          steps: ["Góc kề bù với 53° là 180° − 53° = 127°.", "Góc đối đỉnh với 53° cũng là 53°.", "Góc đối đỉnh với 127° cũng là 127°. Bốn góc: 53°, 127°, 53°, 127° (tổng 360°)."],
          prompts: [
            "Hai góc kề bù nằm trên cùng một đường thẳng: tổng của chúng bằng bao nhiêu độ?",
            "Góc đối đỉnh với góc 53° có quan hệ thế nào với nó?",
            "Áp dụng tương tự cho góc còn lại. Cộng cả bốn góc thử xem có đủ 360° không?"
          ],
          answer: { type: "num", value: 127 },
          twist: { q: "Nếu hai góc đối đỉnh cộng lại bằng 100° thì góc kề bù với một trong hai góc đó bằng bao nhiêu độ?", answer: { type: "num", value: 130 } }
        },
        questions: [
          { id: "5.2-01", type: "num", diff: 1, skill: "vertical-adjacent", source: "book", lang: "en",
            q: "Two straight lines cross. One of the angles is 53° and the angle next to it is x. Work out x.",
            svg: SVG_INTER, choices: null, answer: 127, accept: [], tol: 0, unitLabel: "°",
            hints: ["Hai góc kề nhau trên một đường thẳng cộng lại bằng bao nhiêu?", "Em đã biết một góc là 53°.", "Hãy tính 180 − 53."],
            explain: "Hai góc kề nhau nằm trên một đường thẳng nên x = 180° − 53° = 127°.", why: null },
          { id: "5.2-02", type: "num", diff: 1, skill: "vertical-adjacent", source: "book", lang: "en",
            q: "Two straight lines cross to make four angles. One of the angles is 87°. Work out the angle next to it.",
            svg: null, choices: null, answer: 93, accept: [], tol: 0, unitLabel: "°",
            hints: ["Góc kề với 87° cùng nằm trên một đường thẳng với nó. Tổng hai góc đó là bao nhiêu?", "Vậy phần còn lại của 180° là bao nhiêu?", "Hãy tính 180 − 87."],
            explain: "Góc kề bù: 180° − 87° = 93°. (Hai góc đối đỉnh còn lại là 87° và 93°.)", why: null },
          { id: "5.2-03", type: "num", diff: 1, skill: "vertical-adjacent", source: "book", lang: "en",
            q: "Two lines intersect and one angle is 38°. What is the size of the angle opposite to it?",
            svg: null, choices: null, answer: 38, accept: [], tol: 0, unitLabel: "°",
            hints: ["Khi hai đường thẳng cắt nhau, các góc đối đỉnh có quan hệ gì?", "Góc đối đỉnh nằm ở phía nào so với góc 38°?", "Chúng bằng nhau — em không cần tính gì thêm."],
            explain: "Góc đối đỉnh luôn bằng nhau, nên đáp số là 38°.", why: null },
          { id: "5.2-04", type: "num", diff: 2, skill: "lines-through-point", source: "book", lang: "en",
            q: "Three straight lines cross at one point. Two of the angles are 61° and 46°, and they are next to each other. Find angle x, the next angle on the same straight line.",
            svg: SVG_THREE, choices: null, answer: 73, accept: [], tol: 0, unitLabel: "°",
            hints: ["Ba góc 61°, 46° và x nằm cạnh nhau trên cùng một đường thẳng. Tổng của chúng là bao nhiêu?", "Hai góc đã biết cộng lại bằng bao nhiêu?", "Lấy 180 trừ tổng đó."],
            explain: "61° + 46° + x = 180° (góc trên đường thẳng), nên x = 180° − 107° = 73°. Các góc còn lại: 61°, 46°, 73° (đối đỉnh).", why: null },
          { id: "5.2-05", type: "num", diff: 2, skill: "parallel-lines", source: "book", lang: "en",
            q: "The two horizontal lines are parallel. The marked obtuse angle (113°) is above the top line and to the left of the crossing line. Find the angle x that is below the bottom line and to the left of the crossing line.",
            svg: SVG_PAR1, choices: null, answer: 67, accept: [], tol: 0, unitLabel: "°",
            hints: ["Hãy tìm góc ở đường thẳng dưới nằm cùng vị trí với góc 113° (đồng vị). Nó bằng bao nhiêu?", "Góc đồng vị đó và x nằm cạnh nhau trên một đường thẳng. Quan hệ của chúng là gì?", "Hãy tính 180 − 113."],
            explain: "Góc đồng vị với 113° ở đường dưới cũng là 113°. Góc x kề bù với nó nên x = 180° − 113° = 67°.", why: null },
          { id: "5.2-06", type: "num", diff: 2, skill: "parallel-lines", source: "book", lang: "en",
            q: "The two horizontal lines are parallel. The angle 75° is above the top line and to the right of the crossing line. Find the angle x that is below the bottom line and to the right of the crossing line.",
            svg: SVG_PAR2, choices: null, answer: 105, accept: [], tol: 0, unitLabel: "°",
            hints: ["Góc x ở đường dưới, phía dưới và bên phải. Góc đồng vị của nó ở đường trên nằm ở đâu?", "Góc đồng vị đó kề bù với góc 75° (cùng trên một đường thẳng). Nó bằng bao nhiêu?", "x bằng góc đồng vị đó: 180 − 75."],
            explain: "Ở đường trên, góc dưới-phải kề bù với 75° nên bằng 105°. Góc x là đồng vị với nó nên x = 105°.", why: null },
          { id: "5.2-07", type: "mc", diff: 2, skill: "parallel-lines", source: "book", lang: "en",
            q: "A line crosses two other lines. The corresponding angles (same position at each crossing) are 56° and 126°. What can you say about the two lines?",
            svg: null,
            choices: ["They are not parallel, because corresponding angles of parallel lines must be equal.", "They are parallel, because 56° and 126° are both less than 180°.", "They are parallel, because the two angles are not equal.", "They are not parallel, because 56° + 126° is not 360°."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Nếu hai đường song song, góc đồng vị phải có quan hệ gì?", "56° và 126° có bằng nhau không?", "Từ đó em kết luận hai đường có song song không?"],
            explain: "Đường song song cho các góc đồng vị bằng nhau. 56° ≠ 126° nên hai đường không song song. Đừng nhầm: 'khác nhau' không có nghĩa là 'song song'.", why: null },
          { id: "5.2-08", type: "num", diff: 3, skill: "exterior-angle", source: "book", lang: "en",
            q: "A triangle has angles 45° and 60° at the base. One side is extended beyond the top vertex. Find the exterior angle x between the extension and the other side.",
            svg: SVG_EXT, choices: null, answer: 105, accept: [], tol: 0, unitLabel: "°",
            hints: ["Góc thứ ba của tam giác là bao nhiêu? (Tổng ba góc là 180°.)", "Góc ngoài x và góc thứ ba nằm cạnh nhau trên một đường thẳng. Quan hệ của chúng?", "Em cũng có thể thử: x có bằng 45 + 60 không?"],
            explain: "Góc thứ ba: 180° − 45° − 60° = 75°. Góc ngoài x = 180° − 75° = 105°, đúng bằng tổng hai góc trong không kề (45° + 60°).", why: null },
          { id: "5.2-09", type: "num", diff: 3, skill: "trapezium-angles", source: "book", lang: "en",
            q: "ABCD is a trapezium with AB parallel to DC. Angle A = 45° and angle B = 67°. Find angle C (marked x).",
            svg: SVG_TRAP, choices: null, answer: 113, accept: [], tol: 0, unitLabel: "°",
            hints: ["Cạnh BC là đường cắt của hai đường song song AB và DC. Hai góc B và C nằm ở vị trí nào so với nhau?", "Hai góc trong cùng phía đó cộng lại bằng bao nhiêu?", "Hãy tính 180 − 67."],
            explain: "AB // DC và BC cắt chúng nên góc B + góc C = 180°. Vậy C = 180° − 67° = 113°. (Tương tự D = 180° − 45° = 135°; kiểm tra: 45 + 67 + 113 + 135 = 360.)", why: null },
          { id: "5.2-10", type: "multi", diff: 3, skill: "angles-around-point", source: "book", lang: "en",
            q: "Squares have angles of 90°. Equilateral triangles have angles of 60°. Rhombuses (with angles 60° and 120°) are also used. Choose ALL the groups of shapes that fit exactly around a point.",
            svg: null,
            choices: ["6 equilateral triangles", "3 rhombuses, each using its 120° angle", "3 squares and 1 triangle", "2 squares and 3 triangles", "1 square and 5 triangles"],
            answer: [0, 1, 3], accept: [], tol: 0, unitLabel: "",
            hints: ["Để vừa khít quanh một điểm, tổng các góc phải bằng bao nhiêu?", "Hãy tính tổng góc của từng nhóm, ví dụ 6 × 60° hoặc 3 × 120°.", "Nhóm nào cho đúng 360°? Chú ý các nhóm 'gần đúng' như 330° hay 390°."],
            explain: "6 × 60 = 360 ✓; 3 × 120 = 360 ✓; 3 × 90 + 60 = 330 ✗; 2 × 90 + 3 × 60 = 360 ✓; 90 + 5 × 60 = 390 ✗.", why: null }
        ]
      },
      {
        id: "5.3",
        title: "Drawing lines and quadrilaterals",
        titleVi: "Vẽ đường thẳng và tứ giác",
        learn: [
          "Để vẽ đường vuông góc, đặt một cạnh góc vuông của ê-ke lên đường thẳng rồi vẽ dọc cạnh kia; hoặc dùng thước đo góc với vạch 90°.",
          "Để vẽ đường song song cách đường cho trước d cm: vẽ một đường vuông góc, đo d cm trên đó, rồi vẽ đường vuông góc với đường vuông góc ấy tại điểm vừa đánh dấu.",
          "Vẽ tứ giác chính xác: vẽ một cạnh biết độ dài, dùng thước đo góc ở một đầu rồi đo độ dài cạnh kế tiếp, cứ thế đến khi nối được điểm cuối.",
          "Không cần biết mọi cạnh và mọi góc: chỉ cần 5 số đo thích hợp là đủ để vẽ một tứ giác.",
          "Luôn phác thảo trước, rồi kiểm tra bằng cách đo lại hoặc dùng tổng bốn góc bằng 360°."
        ],
        example: {
          q: "Vẽ tứ giác ABCD biết AD = 4 cm, góc A = 130°, AB = 3 cm, góc D = 110°, DC = 6 cm.",
          steps: ["Vẽ đoạn AD dài 4 cm.", "Đặt thước đo góc tại A, vẽ tia tạo góc 130° với AD, đo 3 cm, đánh dấu B.", "Đặt thước tại D, vẽ tia tạo góc 110° với DA, đo 6 cm, đánh dấu C (cùng phía với B).", "Nối B với C. Không cần biết góc B, góc C hay độ dài BC."],
          prompts: [
            "Em bắt đầu vẽ từ đoạn nào có độ dài cho sẵn?",
            "Thước đo góc đặt ở đâu, lấy cạnh nào làm gốc để vẽ góc 130°? Rồi dùng thước thẳng đo bao nhiêu cm?",
            "Sang đầu kia của AD, em làm tương tự với góc nào? Điểm C nên nằm cùng phía hay khác phía với B?",
            "Còn thiếu cạnh nào để khép kín hình? Em có cần đo thêm góc nào nữa không?"
          ],
          answer: null,
          twist: { q: "Nếu đổi cả hai góc A và D thành 90° thì tổng hai góc B và C bằng bao nhiêu độ?", answer: { type: "num", value: 180 } }
        },
        questions: [
          { id: "5.3-01", type: "mc", diff: 1, skill: "draw-perpendicular", source: "book", lang: "en",
            q: "You want to use a protractor to draw a line through point A on a given line, perpendicular to it. Which method is correct?",
            svg: null,
            choices: ["Put the centre mark of the protractor at A with the 90° mark on the line, then draw along the flat edge.", "Put the centre mark at A with the 0° mark on the line, then draw along the flat edge.", "Put the centre mark at A with the 180° mark on the line, then draw along the curved edge.", "Put the protractor anywhere on the line and draw along the flat edge."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Đường vuông góc tạo với đường cho trước một góc bao nhiêu độ?", "Tâm thước phải đặt ở đâu để góc đo bắt đầu từ A?", "Vạch nào của thước phải nằm trùng với đường đã cho, và cạnh nào ta kẻ dọc theo?"],
            explain: "Tâm thước tại A, vạch 90° nằm trên đường cho trước, rồi kẻ dọc cạnh phẳng — khi đó cạnh phẳng vuông góc với đường ban đầu. Đặt vạch 0° hoặc 180° trên đường chỉ cho đường trùng nhau.", why: null },
          { id: "5.3-02", type: "mc", diff: 1, skill: "draw-parallel", source: "book", lang: "en",
            q: "How do you draw a line parallel to a given line and exactly 5 cm away from it?",
            svg: null,
            choices: ["Draw a perpendicular, measure 5 cm along it, then draw a line perpendicular to that perpendicular at the 5 cm mark.", "Draw any line that starts 5 cm from the first line.", "Draw a line at 45° to the first line, 5 cm long.", "Measure 5 cm along the first line and draw a perpendicular there."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Khoảng cách giữa hai đường song song được đo theo hướng nào?", "Bước đầu tiên để có hướng đó là vẽ đường gì?", "Sau khi đánh dấu 5 cm, đường cần vẽ phải tạo góc bao nhiêu với đường đo?"],
            explain: "Khoảng cách giữa hai đường song song đo theo đường vuông góc. Vẽ đường vuông góc, đo 5 cm, rồi vẽ đường vuông góc với đoạn đó tại điểm đánh dấu. Phương án cuối chỉ đo dọc theo đường đầu, không tạo được khoảng cách 5 cm.", why: null },
          { id: "5.3-03", type: "num", diff: 1, skill: "quadrilateral-sum", source: "book", lang: "en",
            q: "Three angles of a quadrilateral are 60°, 75° and 130°. Calculate the fourth angle so that you can draw it.",
            svg: null, choices: null, answer: 95, accept: [], tol: 0, unitLabel: "°",
            hints: ["Tổng bốn góc của một tứ giác là bao nhiêu?", "Cộng ba góc đã cho: 60 + 75 + 130.", "Lấy 360 trừ tổng đó."],
            explain: "60° + 75° + 130° = 265°. Góc thứ tư = 360° − 265° = 95°.", why: null },
          { id: "5.3-04", type: "mc", diff: 2, skill: "draw-quadrilateral", source: "book", lang: "en",
            q: "You are drawing quadrilateral ABCD with AD = 4 cm, angle A = 130°, AB = 3 cm, angle D = 110° and DC = 6 cm. You have drawn AD, then B, then C. What is the last step?",
            svg: null,
            choices: ["Join B to C with a straight line.", "Measure angle B and angle C with a protractor first, then draw BC.", "Calculate the length of BC and draw it with a ruler.", "Draw a perpendicular from C to AB."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Em đã có đủ bốn đỉnh A, B, C, D chưa?", "Còn thiếu cạnh nào của tứ giác?", "Cạnh đó nối hai điểm nào?"],
            explain: "Bốn đỉnh đã có đủ; chỉ cần nối B với C. Không cần biết trước góc B, góc C hay độ dài BC.", why: null },
          { id: "5.3-05", type: "mc", diff: 2, skill: "draw-quadrilateral", source: "book", lang: "en",
            q: "Instead of starting with AD, you start the same quadrilateral by drawing line CD = 6 cm. What is the next step?",
            svg: null,
            choices: ["Place the protractor at D, draw a line at 110° to DC, and measure 4 cm along it to mark A.", "Place the protractor at C and draw a line at 130°.", "Join A to C straight away.", "Draw BC first because it is the longest side."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Ở đỉnh D em biết những gì: góc nào và cạnh nào?", "Đỉnh nào có cả góc lẫn cạnh đi cùng với CD?", "Vậy sau CD, ta dựng tiếp từ đỉnh D theo hướng nào, dài bao nhiêu?"],
            explain: "Tại D biết góc D = 110° và DA = 4 cm, nên đặt thước đo góc tại D, vẽ góc 110° với DC, đo 4 cm để được A. Sau đó dựng B từ A (góc 130°, AB = 3 cm) và nối B với C.", why: null },
          { id: "5.3-06", type: "num", diff: 2, skill: "quadrilateral-sum", source: "book", lang: "en",
            q: "In quadrilateral ABCD, angle A = 118°, angle B = 106° and angle D = 90°. Calculate angle C (x).",
            svg: SVG_QABCD, choices: null, answer: 46, accept: [], tol: 0, unitLabel: "°",
            hints: ["Em cần tổng bốn góc của tứ giác. Tổng đó bằng bao nhiêu?", "Cộng ba góc đã biết: 118 + 106 + 90.", "Lấy 360 trừ kết quả."],
            explain: "118° + 106° + 90° = 314°. Góc C = 360° − 314° = 46°.", why: null },
          { id: "5.3-07", howto: "This is a drawing task: draw the quadrilateral accurately on paper with a ruler and protractor, then measure side CD. Enter the length of CD that you measure.", type: "num", diff: 2, skill: "draw-quadrilateral", source: "book", lang: "en",
            q: "Draw quadrilateral ABCD accurately: AB = 4 cm, AD = 3 cm, angle A = 118°, angle B = 106°, angle D = 90°. Then measure CD (give the length in cm, nearest 0.1).",
            svg: SVG_QABCD, choices: null, answer: 8.2, accept: [], tol: 0.15, unitLabel: "cm",
            hints: ["Em vẽ AB = 4 cm trước, rồi góc A = 118° và AD = 3 cm. Điểm D nằm ở đâu?", "Từ B vẽ tia tạo góc 106° với BA; từ D vẽ tia vuông góc với DA. Giao điểm của hai tia là điểm nào?", "Đo đoạn nối C với D bằng thước kẻ. Kết quả nằm gần 8 cm."],
            explain: "Vẽ AB, rồi AD (góc 118°), tia từ B (góc 106°) và tia từ D (góc 90°) cắt nhau tại C. Tính chính xác CD ≈ 8,2 cm (sai số đo ±0,15 cm là chấp nhận được).", why: null },
          { id: "5.3-08", type: "multi", diff: 3, skill: "angles-around-point", source: "book", lang: "en",
            q: "Three angles meet at a point and two of them are equal. One of the three angles is 100°. Choose ALL the possible pairs for the other two angles.",
            svg: null,
            choices: ["130° and 130°", "100° and 160°", "50° and 210°", "80° and 180°"],
            answer: [0, 1], accept: [], tol: 0, unitLabel: "",
            hints: ["Hai góc bằng nhau có thể gồm góc 100° hay không? Hãy xét hai trường hợp.", "Trường hợp 1: hai góc còn lại bằng nhau. Mỗi góc bằng bao nhiêu? Trường hợp 2: một góc còn lại cũng là 100°.", "Kiểm tra từng phương án: ba góc có cộng lại 360° và có đúng hai góc bằng nhau không?"],
            explain: "Trường hợp 1: hai góc còn lại bằng nhau: (360 − 100) ÷ 2 = 130°. Trường hợp 2: có thêm một góc 100°, góc cuối là 360 − 200 = 160°. Hai phương án còn lại không có hai góc bằng nhau hoặc tổng sai.", why: null },
          { id: "5.3-09", type: "mc", diff: 3, skill: "quadrilateral-existence", source: "book", lang: "en",
            q: "A learner tries to draw a quadrilateral with three angles of 120°. What happens and why?",
            svg: null,
            choices: ["The fourth angle would be 0°, so the quadrilateral cannot exist.", "The fourth angle would be 60°, so it works.", "The fourth angle would be 240°, so it is a normal quadrilateral.", "It works only if all four sides are equal."],
            answer: 0, accept: [], tol: 0, unitLabel: "",
            hints: ["Ba góc 120° cộng lại bằng bao nhiêu?", "Tổng bốn góc là 360°. Còn lại bao nhiêu cho góc thứ tư?", "Một góc 0° có tạo thành đỉnh của hình thật không?"],
            explain: "3 × 120° = 360°, nên góc thứ tư = 0°: hai cạnh trùng nhau, không có tứ giác. Lỗi hay gặp: quên rằng tổng bốn góc là 360° và lấy 180° − 120°.", why: null },
          { id: "5.3-10", type: "num", diff: 3, skill: "draw-quadrilateral", source: "book", lang: "en",
            q: "What is the least number of measurements (lengths and angles) that you need to draw a quadrilateral accurately? (Think of the worked example: it used three sides and two angles.)",
            svg: null, choices: null, answer: 5, accept: [], tol: 0, unitLabel: "",
            hints: ["Trong ví dụ vẽ ABCD, em đã dùng những số đo nào?", "Đếm số cạnh và số góc em đã dùng, sau đó xem có số đo nào bị thừa không.", "Không có số đo nào bị thừa: bớt đi một số đo thì hình không còn xác định duy nhất."],
            explain: "Ví dụ dùng AD, AB, DC (3 cạnh) và góc A, góc D (2 góc) = 5 số đo. Tổng quát, một tứ giác cần ít nhất 5 số đo thích hợp (ví dụ 4 cạnh + 1 đường chéo, hoặc 3 cạnh + 2 góc ở giữa).", why: null }
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Hải đăng đã hiện ra! Hãy vượt qua các bài toán góc kiểu lớp 6–7 để cập bến.",
      questions: [
        { id: "ch-01", type: "num", diff: 2, skill: "vn-adjacent", source: "vn", lang: "vi",
          q: "Hai góc kề bù hơn kém nhau 40°. Tính số đo góc lớn.",
          svg: null, choices: null, answer: 110, accept: [], tol: 0, unitLabel: "°",
          hints: ["Hai góc kề bù có tổng bằng bao nhiêu độ?", "Gọi góc nhỏ là x thì góc lớn là x + 40. Viết phương trình tổng.", "Giải x + (x + 40) = 180 rồi tìm góc lớn."],
          explain: "Tổng hai góc là 180°, hiệu là 40°. Góc lớn = (180 + 40) ÷ 2 = 110°, góc nhỏ = 70°.", why: null },
        { id: "ch-02", type: "num", diff: 3, skill: "vn-around-point", source: "vn", lang: "vi",
          q: "Năm góc liên tiếp quanh điểm O (không có phần chung) có số đo tỉ lệ 1 : 2 : 3 : 4 : 5. Tính số đo góc lớn nhất.",
          svg: null, choices: null, answer: 120, accept: [], tol: 0, unitLabel: "°",
          hints: ["Năm góc quanh một điểm cộng lại bằng bao nhiêu độ?", "Tỉ lệ 1:2:3:4:5 có tất cả bao nhiêu phần bằng nhau?", "Mỗi phần là 360 ÷ 15 độ; góc lớn nhất gồm 5 phần."],
          explain: "1 + 2 + 3 + 4 + 5 = 15 phần. Mỗi phần = 360° ÷ 15 = 24°. Góc lớn nhất = 5 × 24° = 120°.", why: null },
        { id: "ch-03", type: "num", diff: 3, skill: "vn-bisector", source: "vn", lang: "vi",
          q: "Cho góc xOy = 100°. Tia Oz là tia phân giác của góc xOy. Tia Ot là tia đối của tia Ox. Tính góc zOt.",
          svg: null, choices: null, answer: 130, accept: [], tol: 0, unitLabel: "°",
          hints: ["Tia phân giác chia góc xOy thành hai góc như thế nào? Góc xOz bằng bao nhiêu?", "Ox và Ot là hai tia đối nhau, vậy xOt là góc gì và bằng bao nhiêu độ?", "Góc zOt kề bù với góc zOx. Hãy tính 180 − xOz."],
          explain: "xOz = 100° ÷ 2 = 50°. Vì Ot đối Ox nên zOt kề bù với xOz: zOt = 180° − 50° = 130°.", why: null },
        { id: "ch-04", type: "num", diff: 3, skill: "vn-count-angles", source: "vn", lang: "vi",
          q: "Cho 6 tia chung gốc O, không có hai tia nào đối nhau. Hỏi có tất cả bao nhiêu góc (mỗi góc tạo bởi hai tia khác nhau)?",
          svg: null, choices: null, answer: 15, accept: [], tol: 0, unitLabel: "",
          hints: ["Mỗi góc được xác định bởi mấy tia?", "Từ một tia, em ghép được với bao nhiêu tia còn lại?", "6 × 5 đếm mỗi góc mấy lần? Hãy chia cho số đó."],
          explain: "Mỗi tia ghép với 5 tia còn lại: 6 × 5 = 30 cách, nhưng mỗi góc bị đếm 2 lần. Vậy có 30 ÷ 2 = 15 góc.", why: null },
        { id: "ch-05", type: "num", diff: 3, skill: "vn-count-angles", source: "vn", lang: "vi",
          q: "Cho n tia chung gốc, không có hai tia nào đối nhau. Biết có tất cả 45 góc tạo bởi các tia đó. Tìm n.",
          svg: null, choices: null, answer: 10, accept: [], tol: 0, unitLabel: "",
          hints: ["Số góc tạo bởi n tia được tính bằng công thức nào? (Hãy nhớ cách đếm ở bài 6 tia.)", "Công thức: n × (n − 1) ÷ 2 = 45. Suy ra n × (n − 1) bằng bao nhiêu?", "Tìm hai số nguyên liên tiếp có tích là 90."],
          explain: "n(n − 1)/2 = 45 → n(n − 1) = 90 = 10 × 9, nên n = 10.", why: null },
        { id: "ch-06", type: "num", diff: 3, skill: "vn-quadrilateral", source: "vn", lang: "vi",
          q: "Bốn góc của một tứ giác có số đo tỉ lệ 1 : 2 : 3 : 4. Tính số đo góc lớn nhất.",
          svg: null, choices: null, answer: 144, accept: [], tol: 0, unitLabel: "°",
          hints: ["Tổng bốn góc của tứ giác bằng bao nhiêu?", "Tỉ lệ 1:2:3:4 có bao nhiêu phần bằng nhau, mỗi phần là bao nhiêu độ?", "Góc lớn nhất gồm 4 phần."],
          explain: "1 + 2 + 3 + 4 = 10 phần, mỗi phần 360° ÷ 10 = 36°. Góc lớn nhất = 4 × 36° = 144°.", why: null },
        { id: "ch-07", type: "num", diff: 3, skill: "vn-vertical-pairs", source: "vn", lang: "vi",
          q: "Cho 5 đường thẳng phân biệt cùng đi qua điểm O. Hỏi có tất cả bao nhiêu cặp góc đối đỉnh (không kể góc bẹt)?",
          svg: null, choices: null, answer: 20, accept: [], tol: 0, unitLabel: "",
          hints: ["Hai đường thẳng cắt nhau tạo ra mấy cặp góc đối đỉnh?", "Từ 5 đường thẳng, em chọn được bao nhiêu cặp đường thẳng khác nhau?", "Nhân số cặp đường thẳng với số cặp góc đối đỉnh của mỗi cặp."],
          explain: "Mỗi cặp đường thẳng cho 2 cặp góc đối đỉnh. Số cặp đường thẳng: 5 × 4 ÷ 2 = 10. Vậy có 10 × 2 = 20 cặp góc đối đỉnh.", why: null },
        { id: "ch-08", type: "mc", diff: 3, skill: "vn-quadrilateral", source: "vn", lang: "vi",
          q: "Bạn An nói: 'Tôi vẽ được một tứ giác có cả bốn góc đều nhọn.' Nhận xét nào đúng?",
          svg: null,
          choices: ["An sai, vì bốn góc nhọn có tổng nhỏ hơn 4 × 90° = 360°, trong khi tổng bốn góc tứ giác phải đúng bằng 360°.", "An đúng, vì tổng bốn góc nhọn có thể bằng 360°.", "An sai, vì tứ giác phải có ít nhất một góc bẹt.", "An đúng, vì tứ giác chỉ cần có tổng góc nhỏ hơn 360°."],
          answer: 0, accept: [], tol: 0, unitLabel: "",
          hints: ["Góc nhọn là góc nhỏ hơn bao nhiêu độ?", "Bốn góc nhọn cộng lại nhỏ hơn bao nhiêu?", "So sánh với tổng góc của mọi tứ giác."],
          explain: "Mỗi góc nhọn < 90° nên bốn góc < 360°, mâu thuẫn với tổng bằng 360°. Vậy tứ giác có tối đa 3 góc nhọn.", why: null },
        { id: "ch-09", type: "num", diff: 3, skill: "vn-parallel", source: "vn", lang: "vi",
          q: "Hai đường thẳng a và b song song bị cắt bởi đường thẳng c. Hai góc trong cùng phía hơn kém nhau 20°. Tính số đo góc nhỏ.",
          svg: null, choices: null, answer: 80, accept: [], tol: 0, unitLabel: "°",
          hints: ["Với hai đường song song, hai góc trong cùng phía có tổng bằng bao nhiêu?", "Gọi góc nhỏ là x, góc lớn là x + 20. Viết phương trình.", "Giải x + (x + 20) = 180."],
          explain: "Hai góc trong cùng phía bù nhau: tổng 180°. Góc nhỏ = (180 − 20) ÷ 2 = 80° (góc lớn 100°).", why: null },
        { id: "ch-10", type: "num", diff: 3, skill: "vn-quadrilateral", source: "vn", lang: "vi",
          q: "Tứ giác ABCD có góc A = góc B = 2 × góc C và góc D = 90°. Tính góc A.",
          svg: null, choices: null, answer: 108, accept: [], tol: 0, unitLabel: "°",
          hints: ["Gọi góc C là c. Các góc A và B bằng bao nhiêu theo c?", "Tổng bốn góc: 2c + 2c + c + 90 = 360. Rút gọn vế trái.", "Giải 5c + 90 = 360 để tìm c, rồi nhân đôi."],
          explain: "5c + 90 = 360 → c = 54°. Góc A = 2 × 54° = 108°. Kiểm tra: 108 + 108 + 54 + 90 = 360.", why: null }
      ]
    },
    project: {
      title: "Clock rectangles", titleVi: "Hình chữ nhật trên mặt đồng hồ",
      pages: [123],
      goal: "Khám phá xem trên mặt đồng hồ có 12 điểm cách đều nhau có thể nối bốn điểm thành bao nhiêu hình chữ nhật, và tìm quy luật cho số điểm bất kỳ.",
      steps: [
        "Vẽ một đường tròn, đánh dấu 12 điểm cách đều nhau như mặt đồng hồ (mỗi điểm cách điểm kế 30°).",
        "Tìm bốn điểm nối thành một hình chữ nhật. Giải thích vì sao đó là hình chữ nhật (gợi ý: đường chéo, góc nội tiếp nửa đường tròn, các góc 90°).",
        "Tìm thêm các hình chữ nhật khác và đếm xem có tất cả bao nhiêu hình khác nhau (hình quay đi vẫn là hình khác).",
        "Làm lại với đồng hồ có 8 điểm, rồi 18 điểm. Ghi kết quả vào một bảng.",
        "Thử dự đoán số hình chữ nhật cho n điểm cách đều và kiểm tra bằng một trường hợp mới."
      ],
      extensions: [
        "Tìm xem trên các mặt đồng hồ khác nhau có thể vẽ được hình thoi, hình bình hành, hình cánh diều hay hình thang không.",
        "Với số điểm nào thì không thể có hình chữ nhật? Có hình vuông không?",
        "Tự đặt thêm một câu hỏi về các tứ giác trên mặt đồng hồ và trả lời nó."
      ],
      reflect: [
        "Em dùng tính chất nào của góc hoặc đường chéo để chắc chắn một tứ giác là hình chữ nhật?",
        "Em tìm được quy luật nào cho số hình chữ nhật khi số điểm thay đổi? Em chắc chắn quy luật đúng nhờ đâu?",
        "Câu trả lời cho hình thoi, hình thang, hình cánh diều có phụ thuộc vào số điểm không? Tại sao?"
      ]
    }
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "5.1-04": "quad-fourth", "5.3-03": "quad-fourth", "5.2-02": ["angle-cross", { "kind": "adjacent" }], "5.2-03": ["angle-cross", { "kind": "opposite" }]};
  window.GAME_DATA.units.filter(function (u) { return u.id === 5; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
