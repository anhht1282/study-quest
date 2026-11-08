(function () {
  // ---------- small SVG helpers (inline, no external refs) ----------
  var T = function (x, y, s, a) { return '<text x="' + x + '" y="' + y + '" font-size="8" fill="currentColor" stroke="none" text-anchor="' + (a || 'middle') + '">' + s + '</text>'; };
  var px = function (x) { return 130 + 20 * x; };
  var py = function (y) { return 110 - 20 * y; };
  function coord(shapes) {
    var s = '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none"><svg width="260" height="200" viewBox="0 0 260 200">';
    for (var i = -6; i <= 6; i++) s += '<line x1="' + px(i) + '" y1="0" x2="' + px(i) + '" y2="200" stroke-opacity="0.15"/>';
    for (var j = -4; j <= 5; j++) s += '<line x1="0" y1="' + py(j) + '" x2="260" y2="' + py(j) + '" stroke-opacity="0.15"/>';
    s += '<line x1="0" y1="110" x2="260" y2="110" stroke-width="1.5"/><line x1="130" y1="0" x2="130" y2="200" stroke-width="1.5"/>';
    for (var a = -6; a <= 6; a += 2) if (a !== 0) s += T(px(a), 121, a);
    for (var b = -4; b <= 4; b += 2) if (b !== 0) s += T(122, py(b) + 3, b, 'end');
    s += T(255, 106, 'x') + T(137, 8, 'y', 'start') + T(124, 121, '0', 'end');
    return s + shapes + '</svg></svg>';
  }
  var lineMC = function (m, c) { return '<line x1="' + px(-6.5) + '" y1="' + py(m * -6.5 + c) + '" x2="' + px(6.5) + '" y2="' + py(m * 6.5 + c) + '" stroke-width="2"/>'; };
  var dot = function (x, y, l, dx, dy) { return '<circle cx="' + px(x) + '" cy="' + py(y) + '" r="3" fill="currentColor"/>' + T(px(x) + (dx || 7), py(y) + (dy || -4), l); };
  // time graph: plot area x 40..245, y 165..20
  function tg(xmax, ymax, xs, ys, xl, yl, pts) {
    var X = function (v) { return 40 + v / xmax * 205; }, Y = function (v) { return 165 - v / ymax * 145; };
    var s = '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none">';
    for (var v = 0; v <= xmax + 1e-9; v += xs) s += '<line x1="' + X(v) + '" y1="20" x2="' + X(v) + '" y2="165" stroke-opacity="0.15"/>' + T(X(v), 176, +v.toFixed(2));
    for (var w = 0; w <= ymax + 1e-9; w += ys) s += '<line x1="40" y1="' + Y(w) + '" x2="245" y2="' + Y(w) + '" stroke-opacity="0.15"/>' + T(35, Y(w) + 3, +w.toFixed(2), 'end');
    s += '<line x1="40" y1="165" x2="250" y2="165" stroke-width="1.5"/><line x1="40" y1="165" x2="40" y2="14" stroke-width="1.5"/>';
    s += T(150, 192, xl) + T(42, 11, yl, 'start');
    s += '<polyline stroke-width="2" points="' + pts.map(function (p) { return X(p[0]) + ',' + Y(p[1]); }).join(' ') + '"/>';
    return s + '</svg>';
  }
  var Q = function (id, type, diff, skill, q, ans, hints, explain, o) {
    o = o || {};
    var r = { id: id, type: type, diff: diff, skill: skill, source: o.source || 'book', lang: o.lang || 'en', q: q, svg: o.svg || null, choices: o.choices || null, answer: ans, accept: o.accept || [], tol: o.tol || 0, unitLabel: o.unitLabel || '', hints: hints, explain: explain };
    if (o.why) r.why = o.why;
    if (o.howto) r.howto = o.howto;
    return r;
  };
  var V = function (id, type, diff, skill, q, ans, hints, explain, o) {
    o = o || {}; o.source = 'vn'; o.lang = 'vi';
    return Q(id, type, diff, skill, q, ans, hints, explain, o);
  };

  var boySvg = tg(7, 700, 1, 100, 'Time (min)', 'Distance (m)', [[0, 0], [6, 600]]);
  var petrolSvg = tg(4, 30, 1, 10, 'Time (h)', 'Petrol (L)', [[0, 30], [4, 10]]);
  var taxiSvg = tg(40, 25, 10, 5, 'Time (min)', 'Cost ($)', [[0, 4], [40, 24]]);
  var tripSvg = tg(30, 500, 5, 100, 'Time (min)', 'Distance from home (m)', [[0, 0], [10, 400], [20, 400], [25, 0]]);
  var bikeSvg = tg(3, 40, 0.5, 10, 'Thời gian (giờ)', 'Quãng đường (km)', [[0, 0], [1, 12], [1.5, 12], [2.5, 32]]);

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 11,
    title: "Graphs",
    titleVi: "Đồ thị",
    strand: "Algebra",
    pages: [225, 244],
    realm: "Thung Lũng Tọa Độ",
    emoji: "📈",
    story: "Chiếc bản đồ cổ của thung lũng chỉ có những đường thẳng bí ẩn nối các điểm sáng. Ai đọc được đường thẳng – biết nó đi lên, đi xuống hay nằm ngang – sẽ đoán được quãng đường, giá tiền, lượng xăng còn lại. Em hãy học cách vẽ và đọc đồ thị để mở cổng thung lũng!",
    glossary: [
      { en: "function", vi: "hàm số", def: "Quy tắc nối hai đại lượng: biết giá trị của x thì tìm được giá trị y tương ứng." },
      { en: "variable", vi: "biến số", def: "Chữ (x, y, t...) đại diện cho một số có thể thay đổi." },
      { en: "coordinates", vi: "tọa độ", def: "Cặp số (x, y) chỉ vị trí của một điểm trên mặt phẳng." },
      { en: "axes", vi: "các trục tọa độ", def: "Trục hoành (x) nằm ngang và trục tung (y) thẳng đứng." },
      { en: "gradient", vi: "độ dốc", def: "Đường đi lên từ trái sang phải: dốc dương; đi xuống: dốc âm; nằm ngang: bằng 0." },
      { en: "rate", vi: "tốc độ thay đổi", def: "Đại lượng thay đổi bao nhiêu trong mỗi 1 đơn vị (ví dụ 0,4 đô la mỗi phút)." },
      { en: "vertex", vi: "đỉnh", def: "Góc của một hình, ví dụ đỉnh của hình vuông." }
    ],
    sections: [
      {
        id: "11.1", title: "Functions", titleVi: "Hàm số",
        learn: [
          "Hàm số là quy tắc cho biết mối liên hệ giữa hai biến, ví dụ x và y (hoặc các chữ khác).",
          "Nếu Maryam hơn Jamal 6 tuổi thì m = j + 6: biết j là tìm được m.",
          "'Gấp đôi' nghĩa là nhân 2: tuổi Angelo gấp đôi tuổi Sabrina thì a = 2s.",
          "Đổi tiền: 1 đô la đổi được 70 rupee thì y = 70x (nhân tỉ giá với số tiền gốc).",
          "Muốn viết hàm số, hãy thử vài số cụ thể trước, tìm quy luật, rồi thay bằng chữ."
        ],
        example: {
          q: "1 đô la Hồng Kông đổi được 9 rupee. Viết hàm số giữa d đô la HK và r rupee.",
          steps: ["Thử: 20 đô la HK đổi được 20 × 9 = 180 rupee", "Mỗi lần chỉ việc nhân số đô la với 9", "Vậy r = 9d"],
          prompts: [
            "Hãy thử với một số cụ thể: 20 đô la HK đổi được bao nhiêu rupee?",
            "Mỗi lần chuyển từ đô la HK sang rupee, em đã làm phép tính nào với số đô la?",
            "Viết quy tắc đó thành công thức giữa r và d."
          ],
          answer: { type: "text", value: "r=9d", accept: ["r = 9d", "r=9×d", "r=9*d", "r=d×9", "r=d*9", "9d"] },
          twist: { q: "Với cùng tỉ giá, 450 rupee đổi được bao nhiêu đô la HK?", answer: { type: "num", value: 50 } }
        },
        questions: [
          Q("11.1-01", "num", 1, "write-function", "Angelo is twice as old as Sabrina. How old is Angelo when Sabrina is 6 years old?", 12,
            ["'Gấp đôi' nghĩa là nhân với mấy?", "Sabrina 6 tuổi thì em nhân 6 với số đó.", "6 × 2 = ?"], "Gấp đôi nghĩa là nhân 2: 6 × 2 = 12 tuổi.", { unitLabel: "tuổi" }),
          Q("11.1-02", "text", 2, "write-function", "Sabrina is s years old and Angelo is a years old. Angelo is twice as old as Sabrina. Write a function for a in terms of s (for example a = ...).", "a=2s",
            ["Khi s = 4 thì a bằng bao nhiêu? Khi s = 10 thì sao?", "Em đã làm phép tính gì với s để ra a?", "Viết phép tính đó với chữ s."], "Tuổi Angelo luôn gấp 2 lần tuổi Sabrina nên a = 2s.", { howto: "Write a formula that gives Angelo's age a when you know Sabrina's age s.", accept: ["a = 2s", "a=2*s", "a=s*2", "a=2×s", "a = 2 × s"] }),
          Q("11.1-03", "num", 1, "write-function", "A book costs $10 more than a diary. How much does the book cost when the diary costs $8.50?", 18.5,
            ["'Đắt hơn $10' thì em cộng hay nhân?", "Giá nhật ký là 8,50 đô la.", "8,5 + 10 = ?"], "Cuốn sách đắt hơn 10 đô la nên cộng: 8,5 + 10 = 18,5.", { tol: 0.01, unitLabel: "$" }),
          Q("11.1-04", "text", 2, "write-function", "The diary costs $x and the book costs $y, where the book costs $10 more than the diary. Write a function connecting y and x.", "y=x+10",
            ["Thử x = 6 thì y bằng bao nhiêu?", "Quy luật là cộng hay nhân?", "Viết y = x ... với số cần cộng."], "Sách đắt hơn 10 đô la nên y = x + 10.", { howto: "Write a formula that gives the price of the book, y, when you know the price of the diary, x.", accept: ["y = x + 10", "y=10+x", "y = 10 + x"] }),
          Q("11.1-05", "mc", 2, "write-function", "Lilah's mass is 3/4 of Abdul's mass. Abdul's mass is x kg and Lilah's mass is y kg. Which function is correct?", 0,
            ["Nếu Abdul nặng 40 kg thì Lilah nặng bao nhiêu kg?", "Thử từng lựa chọn với x = 40: lựa chọn nào cho y = 30?", "Ai là người nhẹ hơn: x hay y? Hãy xem y có phải nhỏ hơn x không."],
            "y = 3x/4: Lilah nhẹ hơn Abdul. Lỗi hay gặp: viết x = 3y/4 (đảo vai trò hai người) hoặc cộng 3/4 thay vì nhân.",
            { choices: ["y = 3x/4", "x = 3y/4", "y = x + 3/4", "y = 4x/3"] }),
          Q("11.1-06", "num", 2, "exchange", "You can exchange x US dollars for y Indian rupees using y = 70x. How many rupees do you get for 12 US dollars?", 840,
            ["Hàm số này nói 1 đô la đổi được mấy rupee?", "Thay x = 12 vào y = 70x.", "70 × 12 = ?"], "y = 70 × 12 = 840 rupee.", { unitLabel: "rupee" }),
          Q("11.1-07", "num", 2, "exchange", "You can exchange 10 euro for 210 pesos. How many pesos do you get for 35 euro?", 735,
            ["Trước hết, 1 euro đổi được bao nhiêu peso?", "210 ÷ 10 = ?", "Nhân kết quả đó với 35."], "1 euro = 21 peso, nên y = 21x. Với x = 35: 21 × 35 = 735 peso.", { unitLabel: "peso" }),
          Q("11.1-08", "mc", 3, "pairs", "x and y are connected by the function y = x − 5. Which pair of values (x, y) is NOT possible?", 3,
            ["Với mỗi cặp, hãy tính x − 5.", "Cặp (9, 4): 9 − 5 = ? Có bằng y không?", "Cặp nào có y khác x − 5?"],
            "Cặp (0, 5) sai vì 0 − 5 = −5 chứ không phải 5. Lỗi hay gặp: đảo thành y = 5 − x.",
            { choices: ["(9, 4)", "(5, 0)", "(2, −3)", "(0, 5)"] }),
          Q("11.1-09", "text", 3, "write-function", "The length of a rectangle is three times its width. The width is w cm and the perimeter is P cm. Write a function for P in terms of w.", "P=8w",
            ["Nếu w = 2 thì chiều dài bằng bao nhiêu?", "Chu vi = 2 × (dài + rộng). Với w = 2 chu vi là bao nhiêu?", "Chiều dài là 3w; cộng với w được mấy w? Rồi nhân đôi."], "Dài = 3w nên P = 2(3w + w) = 8w.", { howto: "Write a formula that gives the perimeter P using only the width w.", accept: ["p=8w", "P = 8w", "p = 8w", "P=2(3w+w)", "P=8*w", "P=w*8"] }),
          Q("11.1-10", "num", 3, "exchange", "The relationship between US dollars (x) and Libyan dinars (y) is y = 1.5x. How many US dollars are worth 570 dinars?", 380,
            ["Với x = 100 đô la thì y là bao nhiêu dinar?", "Muốn đi ngược từ dinar về đô la, em làm phép tính ngược của 'nhân 1,5'.", "570 ÷ 1,5 = ?"], "y = 1,5x nên x = y ÷ 1,5 = 570 ÷ 1,5 = 380 đô la.", { unitLabel: "$" })
        ]
      },
      {
        id: "11.2", title: "Graphs of functions", titleVi: "Đồ thị của hàm số",
        sims: [{ id: "linegraph", at: 0 }],
        learn: [
          "Lập bảng giá trị: chọn vài giá trị x, tính y, rồi coi (x, y) là tọa độ điểm.",
          "Với y = x + 3: x = 2 thì y = 5; x = −4 thì y = −1. Các điểm nằm trên một đường thẳng.",
          "Đường thẳng kéo dài mãi; hình vẽ chỉ là một đoạn của nó.",
          "Muốn biết điểm có nằm trên đường hay không, thay x vào hàm số và so y.",
          "y = mx đi qua gốc (0, 0); y = x + c cắt trục y tại điểm (0, c). Các đường y = x + c song song nhau.",
          "Hai trục có thể chia tỉ lệ khác nhau, nhớ đọc kĩ số trên từng trục."
        ],
        example: {
          q: "Với y = 0,5x, điểm (−24, −12) có nằm trên đường thẳng không? Điểm (15, 30) thì sao?",
          steps: ["x = −24: y = 0,5 × (−24) = −12, khớp nên (−24, −12) nằm trên đường.", "x = 15: y = 0,5 × 15 = 7,5, không phải 30.", "Vậy (15, 30) không nằm trên đường, nó nằm phía trên đường thẳng."],
          prompts: [
            "Muốn biết điểm có nằm trên đường thẳng không, em thay hoành độ của điểm vào hàm số. Khi x = −24 thì y bằng bao nhiêu?",
            "So kết quả với tung độ của điểm (−12): có khớp không? Rồi thử với x = 15.",
            "Giá trị y tính được là 7,5 so với 30: điểm (15, 30) nằm phía trên hay phía dưới đường thẳng?"
          ],
          answer: { type: "text", value: "có, không", accept: ["có;không", "có và không", "co,khong"] },
          twist: { q: "Điểm (a, 30) nằm trên đường y = 0,5x thì a bằng bao nhiêu?", answer: { type: "num", value: 60 } }
        },
        questions: [
          Q("11.2-01", "num", 1, "table-values", "For y = x + 1, what is the value of y when x = −3?", -2,
            ["Thay x = −3 vào x + 1.", "(−3) + 1 nằm ở đâu trên trục số?", "Từ −3 đi sang phải 1 bước."], "y = −3 + 1 = −2."),
          Q("11.2-02", "num", 1, "table-values", "A point (−20, ?) lies on the line y = x + 8. What is the missing y-coordinate?", -12,
            ["Hoành độ của điểm là bao nhiêu?", "Thay x = −20 vào x + 8.", "−20 + 8 = ?"], "y = −20 + 8 = −12.", {}),
          Q("11.2-03", "mc", 2, "point-on-line", "Is the point (20, 19) on the line y = x + 1?", 1,
            ["Thay x = 20 vào y = x + 1.", "Kết quả có bằng 19 không?", "Có thể em vừa nhầm x + 1 thành x − 1?"],
            "Khi x = 20 thì y = 21, không phải 19, nên điểm không nằm trên đường. Lỗi hay gặp: dùng y = x − 1.",
            { choices: ["Có, vì 20 − 1 = 19", "Không, vì khi x = 20 thì y = 21", "Có, vì 19 gần bằng 20", "Không, vì y phải bằng 2x"] }),
          Q("11.2-04", "num", 2, "table-values", "A point (8.5, ?) lies on the line y = 2x. What is the missing y-coordinate?", 17,
            ["y gấp mấy lần x?", "Nhân 8,5 với 2.", "2 × 8,5 = ?"], "y = 2 × 8,5 = 17.", { tol: 0.01 }),
          Q("11.2-06", "text", 2, "write-function", "You can exchange 6 US dollars for 42 units of another currency. You exchange x dollars for y units. Write a function for y in terms of x.", "y=7x",
            ["1 đô la đổi được bao nhiêu đơn vị? Hãy chia 42 cho 6.", "Mỗi đô la được 7 đơn vị; x đô la được bao nhiêu?", "Viết y = ... x."], "42 ÷ 6 = 7 nên y = 7x.", { howto: "Write a formula that gives the number of units y you receive for x dollars.", accept: ["y = 7x", "y=7*x", "y=x*7", "y = 7 × x"] }),
          Q("11.2-07", "num", 1, "read-graph", "The graph shows the line y = x + 3. At what y-value does the line cross the y-axis?", 3,
            ["Điểm trên trục y có hoành độ x bằng bao nhiêu?", "Thay x = 0 vào y = x + 3.", "0 + 3 = ?"], "Trên trục y thì x = 0, do đó y = 0 + 3 = 3. Đường cắt trục y tại (0, 3).", { svg: coord(lineMC(1, 3) + dot(0, 3, '(0, 3)', 6, -4)) }),
          Q("11.2-08", "mc", 3, "point-on-line", "The line y = 0.5x is drawn. Where is the point (15, 30) compared with the line?", 1,
            ["Với x = 15, đường thẳng có y bằng bao nhiêu?", "Điểm đã cho có y = 30. Nó lớn hơn hay nhỏ hơn giá trị trên đường?", "Lớn hơn nghĩa là nằm cao hơn."],
            "Khi x = 15 thì y trên đường là 7,5. Điểm có y = 30 lớn hơn nên nằm phía trên đường. Lỗi hay gặp: nhầm 30 = 2 × 15 nghĩa là điểm nằm trên đường.",
            { choices: ["Nằm trên đường thẳng", "Nằm phía trên đường thẳng", "Nằm phía dưới đường thẳng"] }),
          Q("11.2-09", "text", 3, "intersection", "The graph shows y = 2x and y = x + 1. Write the coordinates of the point where the lines cross, in the form (a, b).", "(1,2)",
            ["Tại điểm giao, cả hai hàm số cho cùng một giá trị y. Thử x = 1 xem: 2x bằng bao nhiêu, x + 1 bằng bao nhiêu?", "Hai giá trị bằng nhau khi x = ?", "Điểm là (x, y) với y vừa tìm."], "Với x = 1: 2x = 2 và x + 1 = 2. Hai đường cắt nhau tại (1, 2).",
            { accept: ["(1, 2)", "1,2", "x=1,y=2", "(1,2)"], svg: coord(lineMC(2, 0) + lineMC(1, 1) + dot(1, 2, '?', 6, -4)) }),
          Q("11.2-10", "num", 3, "intersection", "The lines y = x − 4 and y = x/3 cross at one point. What is the x-coordinate of that point?", 6,
            ["Tại điểm giao: x − 4 = x/3. Thử x = 3: hai vế bằng bao nhiêu?", "Thử x = 6: x − 4 là bao nhiêu, x/3 là bao nhiêu?", "Hai vế bằng nhau ở giá trị x nào?"], "Với x = 6: x − 4 = 2 và x/3 = 2. Vậy x = 6 (điểm giao là (6, 2)).", {}),
          Q("11.2-11", "mc", 3, "family-lines", "Lines of the form y = x + c are drawn for c = −2, 0, 3 and 5. What do all these lines have in common?", 0,
            ["Hãy vẽ y = x và y = x + 3. Chúng có cắt nhau không?", "Mỗi đường đi lên bao nhiêu khi x tăng 1?", "Đường cùng độ dốc thì như thế nào với nhau?"],
            "Đều có độ dốc như nhau (y tăng 1 khi x tăng 1) nên chúng song song. Chỉ có c khác nhau nên chúng cắt trục y ở nơi khác nhau. Lỗi hay gặp: nghĩ chúng đều đi qua gốc (chỉ đúng khi c = 0).",
            { choices: ["Chúng đều song song với nhau", "Chúng đều đi qua gốc tọa độ", "Chúng đều cắt nhau tại (0, c)", "Chúng đều nằm ngang"] })
        ]
      },
      {
        id: "11.3", title: "Lines parallel to the axes", titleVi: "Đường thẳng song song với các trục",
        learn: [
          "Đường thẳng đứng (song song trục y) có tên x = số: mọi điểm trên đó có cùng hoành độ.",
          "Đường nằm ngang (song song trục x) có tên y = số: mọi điểm trên đó có cùng tung độ.",
          "Trục x có tên y = 0; trục y có tên x = 0.",
          "Hai điểm có cùng x thì đường nối chúng thẳng đứng; cùng y thì nằm ngang.",
          "Bốn đường x = a, x = b, y = c, y = d tạo thành hình chữ nhật có chiều rộng |a − b|, chiều cao |c − d|."
        ],
        example: {
          q: "Vẽ P(2, −5) và Q(−6, −5). Đường thẳng qua P, Q có tên gì?",
          steps: ["P và Q có cùng tung độ −5.", "Nên đường qua chúng nằm ngang.", "Tên đường: y = −5."],
          prompts: [
            "So sánh tung độ của P và Q: có gì đặc biệt?",
            "Đường đi qua hai điểm cùng độ cao thì nằm ngang hay thẳng đứng?",
            "Mọi điểm trên đường đó có chung giá trị nào? Hãy viết thành phương trình."
          ],
          answer: { type: "text", value: "y = −5", accept: ["y=-5", "y = -5"] },
          twist: { q: "Nếu P(2, −5) và R(2, 7) thì đường thẳng đi qua P và R có tên là gì?", answer: { type: "text", value: "x = 2", accept: ["x=2"] } }
        },
        questions: [
          Q("11.3-01", "text", 1, "name-line", "A rectangle has vertices A(4, 2), B(4, −3), C(−2, −3) and D(−2, 2). Write the name (equation) of the line through A and B.", "x=4",
            ["A và B có điểm chung nào về tọa độ?", "Hoành độ chung là bao nhiêu?", "Đường thẳng đứng qua x = 4 có tên x = 4."], "A và B cùng hoành độ 4 nên đường qua chúng là x = 4.", { howto: "Write the equation of the straight line that passes through both A and B, in a form like x = … or y = ….", accept: ["x = 4"], svg: coord('<polygon points="' + [[4, 2], [4, -3], [-2, -3], [-2, 2]].map(function (p) { return px(p[0]) + ',' + py(p[1]); }).join(' ') + '" stroke-width="1.5"/>' + dot(4, 2, 'A', 5, -3) + dot(4, -3, 'B', 5, 9) + dot(-2, -3, 'C', -10, 9) + dot(-2, 2, 'D', -10, -3)) }),
          Q("11.3-02", "text", 1, "name-line", "For the same rectangle (A(4, 2), B(4, −3), C(−2, −3), D(−2, 2)), write the name of the line through A and D.", "y=2",
            ["A và D có cùng x hay cùng y?", "Tung độ chung là bao nhiêu?", "Đường nằm ngang qua tung độ 2 có tên gì?"], "A và D cùng tung độ 2 nên đường là y = 2.", { howto: "Write the equation of the straight line that passes through both A and D, in a form like x = … or y = ….", accept: ["y = 2"] }),
          Q("11.3-03", "mc", 1, "axes-names", "What is the name (equation) of the x-axis?", 0,
            ["Mọi điểm trên trục x có tung độ bằng bao nhiêu?", "Ví dụ các điểm (3, ?), (−5, ?) trên trục x.", "Tên đường là 'tung độ = số đó'."],
            "Mọi điểm trên trục x có y = 0 nên trục x là y = 0. Lỗi hay gặp: nhầm với x = 0 (đó là trục y).",
            { choices: ["y = 0", "x = 0", "y = x", "x = y"] }),
          Q("11.3-04", "mc", 2, "name-line", "Which statement about the line y = 3 is true?", 0,
            ["Mọi điểm trên đường y = 3 có tung độ bằng bao nhiêu?", "Thử (0, 3), (5, 3), (−2, 3): chúng nằm theo hướng nào?", "Vì x thay đổi mà y đứng yên, đường thế nào?"],
            "y = 3 là đường nằm ngang, song song trục x. Lỗi hay gặp: thấy số 3 và nghĩ đường nằm tại x = 3 (thẳng đứng).",
            { choices: ["Nằm ngang, song song với trục x", "Thẳng đứng, song song với trục y", "Đi qua gốc tọa độ", "Là đường chéo"] }),
          Q("11.3-05", "num", 2, "area-lines", "The lines x = 5, x = −4, y = 1 and y = −4 enclose a rectangle. Work out its area (square units).", 45,
            ["Chiều rộng là khoảng cách giữa x = −4 và x = 5. Là bao nhiêu?", "Chiều cao là khoảng cách giữa y = −4 và y = 1.", "Diện tích = rộng × cao."], "Rộng = 5 − (−4) = 9; cao = 1 − (−4) = 5. Diện tích = 9 × 5 = 45.", { unitLabel: "đơn vị²" }),
          Q("11.3-06", "num", 3, "area-lines", "The lines x = 3, y = 5, x = −3 and y = −1 enclose a square. Work out its area.", 36,
            ["Khoảng cách giữa x = −3 và x = 3 là bao nhiêu?", "Khoảng cách giữa y = −1 và y = 5 là bao nhiêu? Hai số có bằng nhau không (hình vuông)?", "Diện tích hình vuông = cạnh × cạnh."], "Cạnh = 3 − (−3) = 6 và 5 − (−1) = 6, hai cạnh bằng nhau nên là hình vuông. Diện tích = 36.", { unitLabel: "đơn vị²" }),
          Q("11.3-07", "multi", 2, "point-on-line", "Which of these points lie on the line x = −10? Choose all that apply.", [1, 3],
            ["Đường x = −10 gồm các điểm có hoành độ thế nào?", "Nhìn số đầu tiên của từng cặp.", "Điểm nào bắt đầu bằng −10?"], "Điểm nằm trên x = −10 phải có hoành độ −10: B(−10, 15) và E(−10, −10).",
            { choices: ["A(10, 10)", "B(−10, 15)", "C(10, −15)", "E(−10, −10)"] }),
          Q("11.3-08", "text", 2, "name-line", "A square has centre at the origin (0, 0), side 8 units, and sides parallel to the axes. Write the equation of its right-hand side.", "x=4",
            ["Từ tâm, mỗi cạnh cách tâm một nửa độ dài cạnh. Một nửa của 8 là?", "Cạnh bên phải thẳng đứng hay nằm ngang?", "Đường thẳng đứng đi qua x = 4."], "Nửa cạnh là 4. Cạnh bên phải thẳng đứng và cách tâm 4 đơn vị: x = 4.", { howto: "Picture the square on a coordinate grid. Write the equation of the line that its right-hand side lies on.", accept: ["x = 4"] }),
          Q("11.3-09", "num", 3, "square-vertex", "One vertex of a square is (1, 2). The square has side 4 and its sides are parallel to the axes. How many different squares are possible?", 4,
            ["Từ đỉnh (1, 2), hình vuông có thể 'mọc' sang phải hay sang trái?", "Và có thể mọc lên trên hay xuống dưới?", "Có mấy tổ hợp (phải/trái) × (lên/xuống)?"], "2 hướng ngang × 2 hướng dọc = 4 hình vuông, ví dụ đỉnh đối diện có thể là (5, 6), (−3, 6), (5, −2), (−3, −2).", { howto: "Count all the different squares with side 4 and sides parallel to the axes that have the point (1, 2) as one of their corners." }),
          Q("11.3-10", "text", 2, "name-line", "Two lines parallel to the axes cross at (−9.5, 7.5). Write the equation of the one parallel to the x-axis.", "y=7.5",
            ["Đường song song trục x thì nằm ngang. Dạng tên của nó là x = ... hay y = ...?", "Tung độ của điểm giao là bao nhiêu?", "Viết y = tung độ đó."], "Đường nằm ngang có dạng y = số; đi qua tung độ 7,5 nên y = 7,5. (Đường kia là x = −9,5.)", { howto: "Two lines pass through this point: one vertical and one horizontal. Write the equation of the horizontal one.", accept: ["y = 7.5", "y=7,5", "y = 7,5"] })
        ]
      },
      {
        id: "11.4", title: "Interpreting graphs", titleVi: "Đọc và hiểu đồ thị",
        learn: [
          "Đồ thị cho thấy một đại lượng thay đổi theo thời gian như thế nào.",
          "Đường thẳng nghĩa là đại lượng tăng (hoặc giảm) đều: tốc độ thay đổi không đổi.",
          "Tốc độ thay đổi (rate) = lượng thay đổi ÷ thời gian, ví dụ 0,4 đô la mỗi phút → c = 0,4t.",
          "Đồ thị đi lên từ trái sang phải: dốc dương. Đi xuống: dốc âm. Nằm ngang: dốc 0 (đại lượng không đổi).",
          "Đồ thị càng dốc thì thay đổi càng nhanh. Điểm cắt trục y cho biết giá trị ban đầu (ví dụ phí khởi điểm của taxi)."
        ],
        example: {
          q: "Đồ thị đường thẳng cho biết cuộc gọi 6 phút tốn 2,4 đô la. Mỗi phút tốn bao nhiêu? Cuộc gọi 10 phút?",
          steps: ["Mỗi phút: 2,4 ÷ 6 = 0,4 đô la.", "Hàm số: c = 0,4t.", "t = 10: c = 0,4 × 10 = 4 đô la."],
          prompts: [
            "Biết 6 phút tốn 2,4 đô la, muốn tìm giá một phút em làm phép tính nào?",
            "Giá mỗi phút không đổi, vậy chi phí c theo thời gian t được viết thế nào?",
            "Thay t = 10 vào công thức em vừa tìm."
          ],
          answer: { type: "num", value: 4 },
          twist: { q: "Nếu em có 10 đô la thì gọi được tối đa bao nhiêu phút với cùng giá đó?", answer: { type: "num", value: 25 } }
        },
        questions: [
          Q("11.4-01", "num", 1, "read-graph", "A boy is walking. The graph shows how far he walks. How far does he walk in 4 minutes?", 400,
            ["Tìm 4 trên trục thời gian.", "Đi lên đến đường thẳng, rồi đi sang trục khoảng cách.", "Đọc giá trị trên trục dọc."], "Tại t = 4 đường thẳng ở độ cao 400 m (đi đều 100 m mỗi phút).", { svg: boySvg, unitLabel: "m" }),
          Q("11.4-02", "num", 2, "rate", "The boy walks at a steady rate shown in the graph. How many minutes will he take to walk 1 kilometre (1000 m)?", 10,
            ["Mỗi phút cậu bé đi được bao nhiêu mét? (Đọc từ đồ thị.)", "1 km bằng bao nhiêu mét?", "1000 ÷ 100 = ?"], "Tốc độ 100 m/phút. 1000 ÷ 100 = 10 phút.", { svg: boySvg, unitLabel: "phút" }),
          Q("11.4-03", "num", 2, "read-graph", "The graph shows the petrol (in litres) in a car during a journey. How many litres are in the tank after 2.5 hours?", 17.5,
            ["Lúc đầu có bao nhiêu lít? Sau 4 giờ còn bao nhiêu?", "Mỗi giờ xe dùng bao nhiêu lít? (30 − 10) ÷ 4.", "30 − 2,5 × 5 = ?"], "Mỗi giờ dùng 5 lít. Sau 2,5 giờ đã dùng 12,5 lít: 30 − 12,5 = 17,5 lít.", { svg: petrolSvg, tol: 0.01, unitLabel: "L" }),
          Q("11.4-04", "num", 2, "rate", "The car in the graph keeps using petrol at the same rate. After how many hours from the start will the tank be empty?", 6,
            ["Xe dùng bao nhiêu lít mỗi giờ?", "Lúc đầu có 30 lít. Cần bao nhiêu giờ để dùng hết?", "30 ÷ 5 = ?"], "Tốc độ dùng 5 lít/giờ, bình 30 lít nên 30 ÷ 5 = 6 giờ.", { svg: petrolSvg, unitLabel: "giờ" }),
          Q("11.4-05", "mc", 1, "gradient", "In the petrol graph, the line goes downward from left to right. What kind of gradient does it have?", 1,
            ["Đường đi xuống hay đi lên khi sang phải?", "Dốc dương là đi lên; còn đi xuống là gì?", "Xăng trong bình tăng hay giảm?"], "Đi xuống từ trái sang phải: dốc âm. Lỗi hay gặp: thấy số lít nhiều nên cho là 'dương'.",
            { choices: ["Dốc dương", "Dốc âm", "Dốc bằng 0"], svg: petrolSvg }),
          Q("11.4-06", "mc", 3, "reasoning", "A taxi charges $4 to start plus $0.5 for each minute. Sofia says: 'A 1-hour journey costs twice as much as a 30-minute journey.' Who is correct?", 1,
            ["Tính giá chuyến 30 phút: 4 + 0,5 × 30.", "Tính giá chuyến 60 phút.", "Giá 60 phút có gấp đôi giá 30 phút không?"],
            "30 phút: 4 + 15 = 19 đô la; 60 phút: 4 + 30 = 34 đô la, ít hơn 38 đô la. Sofia sai vì phí khởi điểm 4 đô la không nhân đôi. Lỗi hay gặp: nghĩ thời gian gấp đôi thì giá gấp đôi.",
            { choices: ["Sofia đúng vì 60 = 2 × 30", "Sofia sai vì phí khởi điểm 4 đô la chỉ tính một lần", "Sofia đúng vì đồ thị là đường thẳng", "Sofia sai vì chuyến 60 phút rẻ hơn chuyến 30 phút"], svg: taxiSvg }),
          Q("11.4-07", "num", 1, "read-graph", "The graph shows Ali's distance from home during a walk. For how many minutes did he stand still (not moving)?", 10,
            ["Đoạn nào của đồ thị nằm ngang?", "Nó bắt đầu ở phút nào và kết thúc ở phút nào?", "20 − 10 = ?"], "Đoạn nằm ngang từ phút 10 đến phút 20: đứng yên 10 phút.", { svg: tripSvg, unitLabel: "phút" }),
          Q("11.4-08", "num", 2, "rate", "In Ali's graph, he walks back home in the last part (minutes 20 to 25). What is his speed on the way back, in metres per minute?", 80,
            ["Quãng đường quay về là bao nhiêu mét?", "Thời gian đi về là bao nhiêu phút?", "Tốc độ = quãng đường ÷ thời gian = 400 ÷ 5."], "Đi 400 m trong 5 phút: 400 ÷ 5 = 80 m/phút.", { svg: tripSvg, unitLabel: "m/phút" }),
          Q("11.4-09", "num", 3, "reasoning", "In Ali's graph, what is the total distance he actually walked (not his distance from home) during the 25 minutes?", 800,
            ["Ali đi ra xa nhà được bao nhiêu mét?", "Sau đó anh quay về: thêm bao nhiêu mét?", "Cộng quãng đường đi và về."], "Đi ra 400 m, đứng yên 0 m, quay về 400 m. Tổng 400 + 400 = 800 m. Lỗi hay gặp: đọc 0 ở cuối và kết luận đã đi 0 m.", { svg: tripSvg, unitLabel: "m" }),
          Q("11.4-10", "mc", 2, "gradient", "In Ali's distance-time graph, what does a horizontal part of the line mean?", 1,
            ["Trong đoạn nằm ngang, khoảng cách tới nhà có thay đổi không?", "Nếu khoảng cách không đổi, Ali đang làm gì?", "Dốc bằng 0 tương ứng với tốc độ bao nhiêu?"],
            "Đoạn nằm ngang nghĩa là khoảng cách không đổi: Ali đứng yên (tốc độ 0). Lỗi hay gặp: nghĩ đường nằm ngang là đi nhanh nhất.",
            { choices: ["Ali đi nhanh nhất", "Ali đứng yên", "Ali đang quay về nhà", "Ali đi chậm dần"], svg: tripSvg })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Chinh phục những bài toán đồ thị, tỉ lệ thuận, tỉ lệ nghịch và dãy tỉ số bằng nhau như trong đề kiểm tra lớp 7!",
      questions: [
        V("ch-01", "num", 2, "read-graph", "Đồ thị biểu diễn quãng đường của bạn Nam đi xe đạp từ nhà (A) đến nhà ông bà (B). Nam dừng lại nghỉ một lúc. Hỏi Nam đã nghỉ bao nhiêu phút?", 30,
          ["Đoạn nào của đồ thị nằm ngang?", "Nó kéo dài từ 1 giờ đến mấy giờ?", "Đổi số giờ đó ra phút."], "Đoạn nằm ngang từ 1 giờ đến 1,5 giờ: nghỉ 0,5 giờ = 30 phút.", { svg: bikeSvg, unitLabel: "phút" }),
        V("ch-02", "num", 3, "read-graph", "Với đồ thị ở bài trước (xe đạp), tính vận tốc trung bình của Nam trên cả quãng đường AB (km/giờ, làm tròn đến 0,1 nếu cần).", 12.8,
          ["Tổng quãng đường Nam đi là bao nhiêu km? (Đọc điểm cuối.)", "Tổng thời gian kể cả lúc nghỉ là bao lâu?", "Vận tốc trung bình = tổng quãng đường ÷ tổng thời gian."], "Đi 32 km trong 2,5 giờ (tính cả thời gian nghỉ): 32 ÷ 2,5 = 12,8 km/giờ.", { svg: bikeSvg, tol: 0.01, unitLabel: "km/giờ" }),
        V("ch-03", "num", 2, "direct-function", "Cho y tỉ lệ thuận với x theo công thức y = ax. Biết khi x = 4 thì y = −12. Tính y khi x = −5.", 15,
          ["Tìm hệ số a bằng cách thay x = 4, y = −12.", "a = y ÷ x = ?", "Thay a vừa tìm và x = −5 vào y = ax."], "a = −12 ÷ 4 = −3. Với x = −5: y = −3 × (−5) = 15."),
        V("ch-04", "num", 3, "direct-function", "Đồ thị hàm số y = ax đi qua điểm A(−2, 6). Điểm B(m, −15) cũng thuộc đồ thị đó. Tìm m.", 5,
          ["Vì A thuộc đồ thị nên thay x = −2, y = 6 để tìm a.", "a = 6 ÷ (−2) = ?", "Thay y = −15 vào y = ax để tìm m."], "a = 6 ÷ (−2) = −3. B thuộc đồ thị: −15 = −3 × m nên m = 5."),
        V("ch-05", "num", 2, "direct-division", "Chia 180 viên bi cho ba bạn An, Bình, Chi theo tỉ lệ 2 : 3 : 4. Bạn được nhiều nhất có bao nhiêu viên bi?", 80,
          ["Tổng số phần là bao nhiêu? (2 + 3 + 4)", "Mỗi phần bằng bao nhiêu viên? Lấy 180 chia cho tổng số phần.", "Bạn nhiều nhất ứng với 4 phần."], "Tổng 9 phần; mỗi phần 180 ÷ 9 = 20. Bạn nhiều nhất: 4 × 20 = 80 viên.", { unitLabel: "viên" }),
        V("ch-06", "num", 3, "inverse-proportion", "12 công nhân làm xong một đoạn đường trong 15 ngày. Nếu có 20 công nhân (năng suất như nhau) thì làm xong trong bao nhiêu ngày?", 9,
          ["Tổng công việc, tính bằng 'công nhân × ngày', là bao nhiêu? (12 × 15)", "Số công nhân tăng thì số ngày tăng hay giảm?", "Chia tổng công việc cho 20."], "Công việc: 12 × 15 = 180 (công). Với 20 công nhân: 180 ÷ 20 = 9 ngày.", { unitLabel: "ngày" }),
        V("ch-07", "num", 3, "equal-ratios", "Cho a/2 = b/3 = c/5 và a + b + c = 60. Tìm c.", 30,
          ["Đặt a/2 = b/3 = c/5 = k. Khi đó a, b, c bằng bao nhiêu k?", "a + b + c = 2k + 3k + 5k = ?k. Giải k.", "c = 5k."], "a = 2k, b = 3k, c = 5k nên 10k = 60, k = 6. Vậy c = 5 × 6 = 30."),
        V("ch-08", "num", 3, "equal-ratios", "Cho a/2 = b/3 = c/5 và a + 2b − c = 15. Tính a + b + c.", 50,
          ["Đặt a = 2k, b = 3k, c = 5k. Tính a + 2b − c theo k.", "2k + 6k − 5k = 3k = 15 nên k = ?", "a + b + c = 10k."], "a + 2b − c = 2k + 6k − 5k = 3k = 15 nên k = 5. Do đó a + b + c = 10k = 50."),
        V("ch-09", "num", 2, "scale-map", "Trên bản đồ tỉ lệ 1 : 500 000, khoảng cách giữa hai thành phố là 8 cm. Khoảng cách thực tế là bao nhiêu km?", 40,
          ["1 cm trên bản đồ ứng với bao nhiêu cm ngoài thực tế?", "8 × 500 000 = ? cm.", "Đổi cm sang km: 100 000 cm = 1 km."], "8 × 500 000 = 4 000 000 cm = 40 km.", { unitLabel: "km" }),
        V("ch-10", "num", 3, "equal-ratios", "Chu vi một tam giác là 48 cm, ba cạnh tỉ lệ với 3 : 4 : 5. Tính diện tích tam giác đó (cm²).", 96,
          ["Chia 48 cho 3 + 4 + 5 để tìm một phần.", "Ba cạnh là bao nhiêu cm? Chúng có dạng 12, 16, 20 không?", "Tam giác có cạnh 12, 16, 20 là tam giác vuông; diện tích = (12 × 16) ÷ 2."], "Một phần: 48 ÷ 12 = 4, các cạnh 12, 16, 20 cm. Vì 12² + 16² = 20² nên tam giác vuông, diện tích = 12 × 16 ÷ 2 = 96 cm².", { unitLabel: "cm²" })
      ]
    },
    project: {
      title: "Four steps", titleVi: "Bốn bước chân",
      pages: [245],
      goal: "Xuất phát từ gốc tọa độ (0, 0), em đi 4 bước theo đường lưới (lên, xuống, trái, phải). Hãy khám phá em có thể kết thúc ở những điểm nào và theo bao nhiêu cách.",
      steps: [
        "Vẽ lưới tọa độ và thử vài đường đi 4 bước, ví dụ lên-phải-lên-lên kết thúc ở (1, 3).",
        "Liệt kê tất cả các điểm có thể đến được. Có bao nhiêu điểm khác nhau?",
        "Nối các điểm ấy lại: chúng tạo thành hình gì?",
        "Nhìn tọa độ các điểm đến: tổng x + y luôn là số chẵn hay lẻ? Có gì đặc biệt?",
        "Đếm số cách đến mỗi điểm, đặc biệt các điểm trên biên. Điểm nào chỉ có 1 cách?"
      ],
      extensions: [
        "Làm lại với đường đi 5 bước hoặc 6 bước. Hình dạng thay đổi thế nào?",
        "Với n bước, em đoán xem các điểm đến có tọa độ thỏa mãn điều kiện gì (liên quan |x| + |y|)?",
        "Tạo một trò chơi: bạn của em chọn điểm đích, em tìm tất cả các đường đi 4 bước."
      ],
      reflect: [
        "Em tìm được quy luật gì về tọa độ các điểm đến? Em giải thích bằng lời của mình.",
        "Làm sao em chắc là mình không bỏ sót đường đi nào?",
        "Điểm nào có nhiều đường đi nhất? Vì sao em nghĩ vậy?"
      ]
    }
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "11.1-06": "exchange", "11.1-07": "exchange", "11.2-01": "line-value", "11.2-02": "line-value", "11.2-04": "line-value" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 11; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
