window.GAME_DATA = window.GAME_DATA || { units: [] };
(function () {
  var S0 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 180" fill="none" stroke="currentColor" stroke-width="1.5" font-family="sans-serif" font-size="11">';
  var C1 = '#3b82f6', C2 = '#ef4444';
  var PAL = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6'];
  function t(x, y, s, a) { return '<text x="' + x + '" y="' + y + '" fill="currentColor" stroke="none" text-anchor="' + (a || 'middle') + '">' + s + '</text>'; }
  // dual (side by side) or compound (stacked) bar chart; series = [[...],[...]]
  function bars(cats, s1, s2, max, stacked, n1, n2) {
    var o = S0 + '<line x1="40" y1="20" x2="40" y2="140"/><line x1="40" y1="140" x2="250" y2="140"/>';
    var k, y, step = max <= 20 ? 2 : (max <= 40 ? 10 : 10);
    for (y = 0; y <= max; y += step) {
      var py = 140 - y * 120 / max;
      o += '<line x1="37" y1="' + py + '" x2="40" y2="' + py + '"/>' + t(34, py + 4, y, 'end');
    }
    var w = 210 / cats.length;
    for (k = 0; k < cats.length; k++) {
      var x0 = 40 + k * w + w * 0.2, bw = w * 0.6;
      var h1 = s1[k] * 120 / max, h2 = s2[k] * 120 / max;
      if (stacked) {
        o += '<rect x="' + x0 + '" y="' + (140 - h1) + '" width="' + bw + '" height="' + h1 + '" fill="' + C1 + '" stroke="none"/>';
        o += '<rect x="' + x0 + '" y="' + (140 - h1 - h2) + '" width="' + bw + '" height="' + h2 + '" fill="' + C2 + '" stroke="none"/>';
      } else {
        o += '<rect x="' + x0 + '" y="' + (140 - h1) + '" width="' + (bw / 2) + '" height="' + h1 + '" fill="' + C1 + '" stroke="none"/>';
        o += '<rect x="' + (x0 + bw / 2) + '" y="' + (140 - h2) + '" width="' + (bw / 2) + '" height="' + h2 + '" fill="' + C2 + '" stroke="none"/>';
      }
      o += t(x0 + bw / 2, 155, cats[k]);
    }
    o += '<rect x="60" y="164" width="9" height="9" fill="' + C1 + '" stroke="none"/>' + t(73, 173, n1, 'start');
    o += '<rect x="150" y="164" width="9" height="9" fill="' + C2 + '" stroke="none"/>' + t(163, 173, n2, 'start');
    return o + '</svg>';
  }
  function pie(angles) {
    var o = S0, a0 = -Math.PI / 2, cx = 130, cy = 90, r = 70, i;
    for (i = 0; i < angles.length; i++) {
      var a1 = a0 + angles[i] * Math.PI / 180;
      var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      o += '<path d="M' + cx + ',' + cy + ' L' + x0.toFixed(1) + ',' + y0.toFixed(1) + ' A' + r + ',' + r + ' 0 ' + (angles[i] > 180 ? 1 : 0) + ' 1 ' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' Z" fill="' + PAL[i % 5] + '" stroke="currentColor"/>';
      var am = (a0 + a1) / 2;
      o += t((cx + 45 * Math.cos(am)).toFixed(1), (cy + 45 * Math.sin(am) + 4).toFixed(1), angles[i] + '°');
      a0 = a1;
    }
    return o + '</svg>';
  }
  function waffle(filled, label) {
    var o = S0, i;
    for (i = 0; i < 100; i++) {
      o += '<rect x="' + (50 + (i % 10) * 16) + '" y="' + (8 + Math.floor(i / 10) * 16) + '" width="14" height="14" fill="' + (i < filled ? C1 : 'none') + '"/>';
    }
    return o + t(130, 176, label) + '</svg>';
  }
  var B = function (id, diff, skill, q, answer, h, explain, o) {
    return Object.assign({ id: id, type: 'num', diff: diff, skill: skill, source: 'book', lang: 'en', q: q, svg: null, choices: null, answer: answer, accept: [], tol: 0, unitLabel: '', hints: h, explain: explain, why: null }, o || {});
  };
  var V = function (id, diff, skill, q, answer, h, explain, o) {
    return B(id, diff, skill, q, answer, h, explain, Object.assign({ source: 'vn', lang: 'vi' }, o || {}));
  };
  var T1 = "         | Walk | Bus\nBoys  |  12  |  9\nGirls  |  15  | 14";
  var DUAL = bars(['Amber', 'Wenkai', 'Karl'], [8, 9, 2], [2, 5, 7], 10, false, 'CD', 'DVD');
  var COMP = bars(['Amber', 'Wenkai', 'Karl'], [8, 9, 2], [2, 5, 7], 14, true, 'CD', 'DVD');

  window.GAME_DATA.units.push({
    id: 16,
    title: "Interpreting results",
    titleVi: "Đọc và diễn giải kết quả",
    strand: "Statistics and probability",
    pages: [337, 378],
    realm: "Thành Phố Dữ Liệu",
    emoji: "📊",
    story: "Thành Phố Dữ Liệu tràn ngập bảng số, biểu đồ và áp phích thông tin. Thị trưởng nhờ em đọc đúng từng biểu đồ, chọn đúng loại biểu đồ và tìm con số đại diện, để các quyết định của thành phố không bị sai vì đọc nhầm số liệu.",
    glossary: [
      { en: "two-way table", vi: "bảng hai chiều", def: "Bảng cho thấy số liệu theo hai tiêu chí cùng lúc, ví dụ nam/nữ và đi bộ/đi xe buýt." },
      { en: "dual bar chart", vi: "biểu đồ cột kép", def: "Biểu đồ cột có các cột của hai nhóm đặt cạnh nhau để so sánh." },
      { en: "compound bar chart", vi: "biểu đồ cột chồng", def: "Biểu đồ cột mà các phần của nhóm được xếp chồng thành một cột." },
      { en: "pie chart", vi: "biểu đồ hình quạt (tròn)", def: "Hình tròn chia thành các hình quạt; góc ở tâm cho biết tỉ lệ của từng phần so với toàn bộ 360°." },
      { en: "waffle diagram", vi: "biểu đồ ô vuông", def: "Lưới 100 ô; mỗi ô tô màu là 1% của tổng." },
      { en: "infographic", vi: "đồ họa thông tin", def: "Áp phích kết hợp hình, số và chữ để truyền đạt dữ liệu." },
      { en: "mean", vi: "số trung bình", def: "Tổng các giá trị chia cho số giá trị." },
      { en: "median", vi: "trung vị", def: "Giá trị ở giữa khi dữ liệu xếp theo thứ tự." },
      { en: "mode", vi: "mốt", def: "Giá trị xuất hiện nhiều nhất." },
      { en: "range", vi: "khoảng biến thiên", def: "Giá trị lớn nhất trừ giá trị nhỏ nhất, cho biết độ phân tán." }
    ],
    sections: [
      {
        id: "16.1", title: "Two-way tables", titleVi: "Bảng hai chiều",
        learn: [
          "Bảng hai chiều ghi số liệu theo hai tiêu chí: hàng theo tiêu chí này, cột theo tiêu chí kia.",
          "Mỗi ô là số cá thể thỏa cả hai điều kiện (hàng và cột giao nhau).",
          "Cộng các ô theo hàng được tổng hàng, theo cột được tổng cột; tổng các tổng hàng = tổng các tổng cột = tổng cả bảng.",
          "Thiếu một ô thì dùng tổng để tìm: ô còn thiếu = tổng − các ô đã biết.",
          "Bảng tần số cho biết mỗi giá trị xuất hiện bao nhiêu lần; tổng số lần là số cá thể."
        ],
        example: { q: "Lớp có 40 bạn, 22 nữ. Hỏi có bao nhiêu nam?", steps: ["Tổng = nam + nữ", "Nam = 40 − 22", "= 18"], prompts: ["Tổng số bạn gồm hai nhóm nào? Em viết quan hệ đó thành một đẳng thức.", "Muốn tìm nam, em chuyển số nữ sang vế bên kia như thế nào?", "Tính kết quả."], answer: { type: "num", value: 18 }, twist: { q: "Nếu lớp có 40 bạn và số nam nhiều hơn số nữ 4 bạn thì có bao nhiêu bạn nữ?", answer: { type: "num", value: 18 } } },
        questions: [
          B("16.1-01", 1, "twoway-read", "How many students are in the survey?\n" + T1, 50, ["Mỗi ô là số học sinh của một nhóm riêng. Các ô có chung học sinh nào không?", "Cộng cả bốn ô: 12 + 9 + 15 + 14.", "Nhớ cộng cẩn thận từng hàng rồi cộng hai hàng."], "12 + 9 + 15 + 14 = 50 học sinh.", { unitLabel: "học sinh" }),
          B("16.1-02", 1, "twoway-read", "How many girls travel by bus?\n" + T1, 14, ["Tìm hàng 'Girls'.", "Tìm cột 'Bus'.", "Đọc ô giao nhau."], "Ô giao của hàng Girls và cột Bus là 14.", {}),
          B("16.1-03", 1, "twoway-missing", "Football: boys 8, girls ?, total 13. How many girls play football?", 5, ["Tổng nam và nữ bằng bao nhiêu?", "Nữ = tổng trừ nam.", "13 − 8 = ?"], "Nữ = 13 − 8 = 5.", { howto: "In the football row of a two-way table there are 8 boys and 13 players in total. Enter the number of girls who play football.",}),
          B("16.1-04", 2, "twoway-read", "Using the table, what percentage of all the students are girls who travel by bus?\n" + T1, 28, ["Có bao nhiêu nữ đi xe buýt, trên tổng bao nhiêu học sinh?", "Phân số 14/50 viết thành phần trăm thế nào?", "14/50 = 28/100."], "14 ÷ 50 = 0,28 = 28%.", { howto: "Find the girls who go by bus as a percentage of ALL the students in the table. Enter the percentage.", unitLabel: "%" }),
          B("16.1-05", 2, "twoway-misconception", "From the table, how many boys walk to school?\n" + T1, 0, ["Hàng nào ứng với Boys, cột nào ứng với Walk?", "Có phải 27 là số nam không? 27 gồm những ai?", "Chỉ lấy một ô duy nhất."], "Chỉ đọc ô giao: 12. Sai lầm hay gặp: 27 là tổng cả cột Walk (nam + nữ), 21 là tổng cả hàng Boys.", { type: "mc", choices: ["12", "27", "21", "15"] }),
          B("16.1-06", 2, "frequency-table", "Number of text messages sent by 30 people in a day:\n0 messages: 4 people\n1: 6\n2: 8\n3: 7\n4: 5\nHow many people sent at least 3 messages?", 12, ["'Ít nhất 3' gồm những giá trị nào?", "Cộng số người của các giá trị đó.", "7 + 5 = ?"], "Ít nhất 3 tin là 3 hoặc 4 tin: 7 + 5 = 12 người.", { unitLabel: "người" }),
          B("16.1-07", 2, "frequency-table", "Using the same table (0:4, 1:6, 2:8, 3:7, 4:5 people), what is the total number of messages sent?", 63, ["4 người gửi 0 tin cho bao nhiêu tin?", "Mỗi giá trị nhân với số người: 0, 6, 16, 21, 20.", "Cộng các tích."], "0×4 + 1×6 + 2×8 + 3×7 + 4×5 = 0 + 6 + 16 + 21 + 20 = 63 tin.", { howto: "The table shows how many people sent 0, 1, 2, 3 or 4 messages. Enter the total number of messages sent by everyone in the table.", unitLabel: "tin" }),
          B("16.1-08", 3, "twoway-complete", "There are 40 students: 22 girls. 15 students wear glasses; 6 of them are girls. How many boys do NOT wear glasses?", 9, ["Có bao nhiêu nam trong 40 học sinh?", "Có bao nhiêu nam đeo kính (15 − 6)?", "Nam không đeo kính = tổng nam − nam đeo kính."], "Nam: 40 − 22 = 18. Nam đeo kính: 15 − 6 = 9. Nam không đeo kính: 18 − 9 = 9.", { unitLabel: "bạn" }),
          B("16.1-09", 3, "twoway-complete", "60 students: 35 like pizza. There are 24 boys, and 15 of the boys like pizza. How many girls do NOT like pizza?", 16, ["Có bao nhiêu nữ?", "Có bao nhiêu nữ thích pizza (35 − 15)?", "Nữ không thích = tổng nữ − nữ thích."], "Nữ: 60 − 24 = 36. Nữ thích pizza: 35 − 15 = 20. Nữ không thích: 36 − 20 = 16.", { unitLabel: "bạn" }),
          B("16.1-10", 3, "twoway-check", "A two-way table has been completed. Which check best shows the table is consistent?", 2, ["Tổng các hàng nói về điều gì?", "Tổng các cột nói về cái gì?", "Hai cách cộng này cùng đếm cùng một nhóm học sinh thì phải thế nào?"], "Cả tổng các tổng hàng lẫn tổng các tổng cột đều đếm toàn bộ cá thể nên phải bằng nhau và bằng tổng cả bảng.", { type: "mc", choices: ["Mỗi ô phải bằng nhau", "Số lớn nhất phải nằm ở góc", "Tổng các tổng hàng = tổng các tổng cột = tổng cả bảng", "Không cần kiểm tra"] })
        ]
      },
      {
        id: "16.2", title: "Dual and compound bar charts", titleVi: "Biểu đồ cột kép và cột chồng",
        learn: [
          "Biểu đồ cột kép: hai nhóm số liệu đặt cạnh nhau cho mỗi loại, giúp so sánh trực tiếp từng nhóm.",
          "Biểu đồ cột chồng: các nhóm xếp chồng thành một cột, nên đỉnh cột là TỔNG và phần màu là từng thành phần.",
          "Đọc phần chồng ở trên: giá trị = đỉnh trên − đỉnh dưới (không đọc thẳng số ở đỉnh).",
          "Dùng cột kép để so sánh từng nhóm; dùng cột chồng để xem tổng và cơ cấu.",
          "Luôn có tiêu đề, nhãn trục và chú giải (màu nào là nhóm nào)."
        ],
        example: { q: "Cột chồng của Karl cao 9; phần xanh (CD) cao 2. Có bao nhiêu DVD?", steps: ["Tổng = 9, CD = 2", "DVD = 9 − 2", "= 7"], prompts: ["Chiều cao cả chồng gồm những phần màu nào? Viết thành đẳng thức.", "Muốn tìm phần DVD, em bớt đi phần nào?", "Tính kết quả."], answer: { type: "num", value: 7 }, twist: { q: "Nếu chồng cao 12 và phần DVD cao gấp đôi phần CD thì CD cao bao nhiêu?", answer: { type: "num", value: 4 } } },
        questions: [
          B("16.2-01", 1, "dual-read", "The dual bar chart shows the number of CDs (blue) and DVDs (red). How many DVDs does Wenkai have?", 5, ["Màu đỏ ứng với đĩa nào?", "Tìm nhóm 'Wenkai' rồi tìm cột đỏ.", "Đọc độ cao cột đỏ trên trục."], "Cột đỏ của Wenkai cao 5 nên có 5 DVD.", { svg: DUAL }),
          B("16.2-02", 1, "dual-read", "How many CDs does Amber have more than Karl?", 6, ["Đọc số CD của Amber (cột xanh).", "Đọc số CD của Karl.", "Lấy hiệu hai số."], "Amber 8, Karl 2: 8 − 2 = 6.", { svg: DUAL }),
          B("16.2-03", 1, "dual-read", "How many CDs do the three students have altogether?", 19, ["Đọc ba cột xanh: Amber, Wenkai, Karl.", "8, 9 và 2.", "8 + 9 + 2 = ?"], "8 + 9 + 2 = 19 CD.", { svg: DUAL }),
          B("16.2-04", 1, "compound-read", "In the compound bar chart, what is the total number of discs Karl has?", 9, ["Với cột chồng, tổng nằm ở đâu?", "Nhìn đỉnh cột của Karl.", "Đọc giá trị ở đỉnh."], "Đỉnh cột Karl ở 9 nên tổng là 9 đĩa (2 CD + 7 DVD).", { svg: COMP }),
          B("16.2-05", 2, "compound-read", "Which student has the most discs altogether?", 1, ["Với cột chồng, so sánh cột nào?", "Tổng của Amber, Wenkai, Karl là mấy?", "10, 14, 9: số nào lớn nhất?"], "Amber 10, Wenkai 14, Karl 9. Wenkai nhiều nhất.", { type: "mc", choices: ["Amber", "Wenkai", "Karl", "Bằng nhau"], svg: COMP }),
          B("16.2-06", 2, "compound-misconception", "In the compound chart, Karl's red (DVD) part starts at 2 and ends at 9. How many DVDs does Karl have?", 1, ["Phần đỏ bắt đầu ở đâu?", "Chiều cao phần đỏ là hiệu hai mức.", "9 − 2 = ?"], "DVD = 9 − 2 = 7. Chọn 9 là đọc nhầm đỉnh cột (tổng) thành số DVD.", { type: "mc", choices: ["9", "7", "2", "11"], svg: COMP }),
          B("16.2-07", 2, "twoway-chart", "A café sold cakes. Saturday: 18 chocolate, 7 vanilla. Sunday: 9 chocolate, 14 vanilla. How many cakes were sold on Saturday?", 25, ["Thứ bảy gồm mấy loại bánh?", "Cộng hai loại.", "18 + 7 = ?"], "18 + 7 = 25 cái.", {}),
          B("16.2-08", 2, "twoway-chart", "Same café (Sat: 18 choc, 7 van; Sun: 9 choc, 14 van). How many chocolate cakes in total over the two days?", 27, ["Chỉ lấy loại chocolate ở cả hai ngày.", "18 và 9.", "18 + 9 = ?"], "18 + 9 = 27 bánh chocolate.", {}),
          B("16.2-09", 3, "chart-choice", "You want a chart that shows BOTH the total cakes each day AND how each total splits into chocolate and vanilla. Which chart is best?", 2, ["Biểu đồ nào cho thấy tổng ở đỉnh cột?", "Biểu đồ nào chia mỗi cột thành các phần?", "Cột chồng hay cột kép?"], "Cột chồng có đỉnh cột là tổng cả ngày và các màu là từng loại bánh. Cột kép lại khó thấy tổng.", { type: "mc", choices: ["Biểu đồ tròn", "Biểu đồ cột kép", "Biểu đồ cột chồng", "Biểu đồ phân tán"] }),
          B("16.2-10", 3, "chart-reason", "Next Saturday the café expects 20% more cakes than this Saturday's 25 cakes. How many cakes should it plan for?", 30, ["Tính 20% của 25.", "10% của 25 là bao nhiêu?", "25 + 5 = ?"], "20% của 25 = 5. Dự kiến 25 + 5 = 30 bánh.", { unitLabel: "cái" })
        ]
      },
      {
        id: "16.3", title: "Pie charts and waffle diagrams", titleVi: "Biểu đồ tròn và biểu đồ ô vuông",
        learn: [
          "Biểu đồ tròn cho thấy TỈ LỆ, không cho thấy số lượng thật. Tổng các góc ở tâm là 360°.",
          "Muốn vẽ: góc của một phần = (số lượng của phần ÷ tổng) × 360°.",
          "Muốn đọc ngược: số lượng của phần = (góc ÷ 360°) × tổng.",
          "Biểu đồ ô vuông có 100 ô; mỗi ô là 1% của tổng.",
          "Hai biểu đồ tròn có cùng góc không có nghĩa là cùng số lượng nếu tổng khác nhau."
        ],
        example: { q: "Điều tra 40 bạn, góc 'đi bộ' là 90°. Có bao nhiêu bạn đi bộ?", steps: ["90 ÷ 360 = ¼", "¼ × 40", "= 10 bạn"], prompts: ["Cả hình tròn là 360°; góc 90° chiếm mấy phần của cả hình (viết phân số)?", "Phần đó của 40 bạn là phép tính nào?", "Tính kết quả."], answer: { type: "num", value: 10 }, twist: { q: "Nếu góc 'đi xe buýt' là 135° thì có bao nhiêu bạn đi xe buýt?", answer: { type: "num", value: 15 } } },
        questions: [
          B("16.3-01", 1, "pie-read", "In a pie chart of 40 students, the 'walk' sector is 90°. How many students walk?", 10, ["90° là bao nhiêu phần của 360°?", "Lấy phần đó của 40.", "¼ × 40 = ?"], "90/360 = 1/4; 1/4 của 40 = 10 bạn.", { unitLabel: "bạn" }),
          B("16.3-02", 1, "pie-draw", "20 students choose their favourite fruit: 5 choose apples. What angle is the apple sector?", 90, ["Mỗi học sinh ứng với bao nhiêu độ?", "360 ÷ 20 = 18°.", "5 × 18 = ?"], "Mỗi bạn 360 ÷ 20 = 18°. Táo: 5 × 18 = 90°.", { unitLabel: "°" }),
          B("16.3-03", 2, "pie-draw", "45 students were asked how they travel. 12 take the bus. What angle is the bus sector?", 96, ["Mỗi bạn ứng với bao nhiêu độ?", "360 ÷ 45 = 8°.", "12 × 8 = ?"], "Mỗi bạn 8°, bus: 12 × 8 = 96°.", { unitLabel: "°" }),
          B("16.3-04", 1, "waffle", "A waffle diagram of 100 squares has 35 squares shaded green. What percentage is green?", 35, ["Tổng có bao nhiêu ô?", "Mỗi ô là bao nhiêu phần trăm?", "Đếm số ô tô màu."], "100 ô nên mỗi ô là 1%. 35 ô là 35%.", { svg: waffle(35, "35 of 100 squares"), unitLabel: "%" }),
          B("16.3-05", 1, "pie-angles", "A pie chart has sectors of 120°, 90° and 60° and one more sector. What is the angle of the last sector?", 90, ["Tổng góc ở tâm là bao nhiêu độ?", "Cộng ba góc đã biết.", "360 − 270 = ?"], "120 + 90 + 60 = 270. Phần còn lại 360 − 270 = 90°.", { svg: pie([120, 90, 60, 90]), unitLabel: "°" }),
          B("16.3-06", 2, "pie-misconception", "Two pie charts both have a 90° sector for 'bus'. Chart A is for 60 students, Chart B for 200 students. Which statement is correct?", 1, ["90° là bao nhiêu phần của hình tròn?", "Tính ¼ của 60 và ¼ của 200.", "Biểu đồ tròn thể hiện số thật hay tỉ lệ?"], "Cả hai đều là ¼ nhưng ¼ của 60 là 15 còn ¼ của 200 là 50. Cùng góc chỉ là cùng tỉ lệ.", { type: "mc", choices: ["Cùng số học sinh đi xe buýt", "Cùng tỉ lệ ¼ nhưng số học sinh khác nhau", "Biểu đồ B có góc lớn hơn", "Không thể kết luận gì"] }),
          B("16.3-07", 2, "pie-read", "200 people were surveyed. A waffle diagram shows 12% of them prefer tea. How many people prefer tea?", 24, ["12% của 200 nghĩa là gì?", "1% của 200 là bao nhiêu?", "12 × 2 = ?"], "1% của 200 là 2; 12% là 12 × 2 = 24 người.", { unitLabel: "người" }),
          B("16.3-08", 3, "pie-read", "A pie chart shows 72 students. The 'cycle' sector is 140°. How many students cycle?", 28, ["Mỗi độ ứng với bao nhiêu học sinh (72 ÷ 360)?", "72 ÷ 360 = 0,2.", "140 × 0,2 = ?"], "140/360 × 72 = 0,2 × 140 = 28 bạn.", { unitLabel: "bạn" }),
          B("16.3-09", 3, "pie-ratio", "180 children choose Football, Swimming or Tennis in the ratio 2 : 3 : 4. What is the angle of the largest sector?", 160, ["Tổng số phần là bao nhiêu?", "Mỗi phần chiếm bao nhiêu độ (360 ÷ 9)?", "4 phần = ?"], "Tổng 9 phần; 360 ÷ 9 = 40° mỗi phần. Phần lớn nhất 4 × 40 = 160°. (Số 180 em không cần dùng.)", { unitLabel: "°" }),
          B("16.3-10", 3, "pie-reason", "A pie chart shows how many emails Preety got each weekday. Can you tell exactly how many emails she got on Friday?", 1, ["Biểu đồ tròn cho biết tỉ lệ hay số lượng?", "Em có biết tổng số email không?", "Cần biết thêm thông tin gì?"], "Biểu đồ tròn chỉ cho tỉ lệ. Không biết tổng số email thì không tính được số thật của thứ sáu.", { type: "mc", choices: ["Có, đếm góc là ra", "Không, vì biểu đồ không cho biết tổng số email", "Có, bằng 360", "Có, lấy góc chia 2"] })
        ]
      },
      {
        id: "16.4", title: "Infographics", titleVi: "Đồ họa thông tin",
        learn: [
          "Đồ họa thông tin (infographic) kết hợp hình ảnh, số và biểu đồ nhỏ để kể một câu chuyện dữ liệu.",
          "Đọc theo thứ tự: đọc tiêu đề, xem đơn vị, rồi tìm số liệu cần.",
          "Phần trăm của tổng: tìm 10% rồi nhân lên, ví dụ 20% = 2 × 10%.",
          "Hình minh họa to hay nhỏ không quyết định giá trị: hãy đọc con số.",
          "Kiểm tra các phần trăm cộng lại đủ 100% để tìm phần thiếu."
        ],
        example: { q: "Làng có 800 người lớn, 20% ở nhóm 35–44. Có bao nhiêu người?", steps: ["10% của 800 = 80", "20% = 2 × 80", "= 160 người"], prompts: ["10% của một số tính bằng cách chia số đó cho mấy?", "20% gấp mấy lần 10%?", "Nhân kết quả 10% với hệ số vừa tìm."], answer: { type: "num", value: 160 }, twist: { q: "Nếu có 240 người ở nhóm 35–44, chiếm 20% dân số làng, thì cả làng có bao nhiêu người?", answer: { type: "num", value: 1200 } } },
        questions: [
          B("16.4-01", 1, "infographic-percent", "Infographic: a village has 800 adults. Age groups: 18–34: 31%, 35–44: 20%, 45–54: ?, 55+: 26%. What percentage are aged 45–54?", 23, ["Các phần trăm phải cộng được bao nhiêu?", "Cộng ba nhóm đã biết: 31 + 20 + 26.", "100 − 77 = ?"], "31 + 20 + 26 = 77, nên nhóm 45–54 là 100 − 77 = 23%.", { unitLabel: "%" }),
          B("16.4-02", 1, "infographic-percent", "In the village of 800 adults, 20% are aged 35–44. How many adults is that?", 160, ["10% của 800 là bao nhiêu?", "20% gấp đôi 10%.", "2 × 80 = ?"], "10% = 80, 20% = 160 người.", { unitLabel: "người" }),
          B("16.4-03", 2, "infographic-percent", "In the village of 800 adults, 26% are aged 55 or over. How many adults is that?", 208, ["Tìm 1% của 800.", "1% = 8, vậy 26% = 26 × 8.", "26 × 8 = 200 + 8"], "1% của 800 = 8; 26 × 8 = 208 người.", { unitLabel: "người" }),
          B("16.4-04", 2, "infographic-percent", "In the same village, 31% are aged 18–34. How many adults is that?", 248, ["1% của 800 = ?", "31 × 8 = ?", "30 × 8 + 8"], "31 × 8 = 248 người.", { unitLabel: "người" }),
          B("16.4-05", 1, "infographic-read", "Bananas per year (million tonnes): India 11, Brazil 6.3, Ecuador 5, China 4.8. How many million tonnes more does India produce than Brazil?", 4.7, ["Lấy hiệu hai số sản lượng.", "11 − 6,3.", "Đổi 11 = 10,0 + 1."], "11 − 6,3 = 4,7 triệu tấn.", { tol: 0.01, unitLabel: "triệu tấn" }),
          B("16.4-06", 2, "infographic-read", "Using the same banana data (India 11, Brazil 6.3, Ecuador 5, China 4.8), what is the total produced by the four countries, in million tonnes?", 27.1, ["Cộng cả bốn giá trị.", "11 + 6,3 = 17,3.", "17,3 + 5 + 4,8 = ?"], "11 + 6,3 + 5 + 4,8 = 27,1 triệu tấn.", { tol: 0.01, unitLabel: "triệu tấn" }),
          B("16.4-07", 2, "infographic-percent", "A train infographic: early 15%, on time 45%, late 35%, cancelled 5%. What percentage of trains are late or cancelled?", 40, ["Hai nhóm nào cần cộng?", "35 + 5 = ?", "Kiểm tra: tất cả cộng đủ 100% chưa?"], "35% + 5% = 40%.", { unitLabel: "%" }),
          B("16.4-08", 2, "infographic-misconception", "The manager says: 'Over half of our trains arrive on time.' Using the data (early 15%, on time 45%, late 35%, cancelled 5%), is the manager correct?", 1, ["Nhóm 'on time' chiếm bao nhiêu phần trăm?", "Có phải 'early' cũng được tính là 'on time' không?", "45% so với 50%."], "On time chỉ 45%, chưa quá nửa. Quản lý chỉ đúng nếu gộp cả 'early' (15%), vì khi đó 60% nhưng đó không phải là 'on time'.", { type: "mc", choices: ["Đúng, 60% đến đúng giờ", "Sai, chỉ 45% đúng giờ", "Đúng, vì 45% gần 50%", "Không thể biết"] }),
          B("16.4-09", 3, "infographic-percent", "A station runs 400 trains a day with the percentages above. How many trains are late or cancelled each day?", 160, ["Phần trăm late và cancelled là bao nhiêu?", "10% của 400 = 40.", "40% = 4 × 40."], "40% của 400 = 4 × 40 = 160 chuyến.", { unitLabel: "chuyến" }),
          B("16.4-10", 3, "infographic-reverse", "On another day, 20 trains were cancelled, which was 5% of all the trains planned. How many trains were planned that day?", 400, ["20 chuyến bị hủy ứng với bao nhiêu phần trăm của tổng số chuyến?", "Nếu 5% là 20 chuyến thì 10% là bao nhiêu chuyến?", "100% gấp bao nhiêu lần 5%?"], "5% = 20 nên 1% = 4 và 100% = 400 chuyến (trong đó 380 chuyến thực sự chạy).", { unitLabel: "chuyến" })
        ]
      },
      {
        id: "16.5", title: "Representing data", titleVi: "Chọn cách biểu diễn dữ liệu",
        learn: [
          "Biểu đồ đường: thích hợp để thấy dữ liệu thay đổi theo thời gian.",
          "Biểu đồ phân tán: hai đại lượng của cùng một đối tượng (chiều cao – cỡ giày), xem có tương quan không.",
          "Biểu đồ cột kép/cột chồng: so sánh nhiều nhóm theo từng loại.",
          "Biểu đồ tròn: các phần của một tổng (tỉ lệ). Sơ đồ Venn, bảng Carroll: phân loại theo tính chất.",
          "Luôn giải thích vì sao chọn loại biểu đồ đó."
        ],
        example: { q: "Chọn biểu đồ cho số huy chương vàng, bạc, đồng của hai nước.", steps: ["Có hai nhóm (hai nước), ba loại huy chương", "Muốn so sánh cột cạnh nhau", "Dùng biểu đồ cột kép"], prompts: ["Dữ liệu có mấy nhóm (nước) và mấy loại huy chương? Em ghi lại.", "Muốn đặt các cột của hai nước cạnh nhau cho dễ so sánh thì cần kiểu cột nào?", "Gọi tên loại biểu đồ đó."], answer: { type: "text", value: "biểu đồ cột kép", accept: ["cột kép", "biểu đồ cột đôi", "cột đôi"] }, twist: { q: "Nếu chỉ muốn thể hiện huy chương vàng, bạc, đồng chiếm bao nhiêu phần của tổng số huy chương của một nước thì dùng biểu đồ nào?", answer: { type: "text", value: "biểu đồ tròn", accept: ["tròn", "biểu đồ hình tròn"] } } },
        questions: [
          B("16.5-01", 1, "choose-chart", "Which chart best shows the number of ice creams sold each day for one week, so that you can see changes over time?", 0, ["Dữ liệu thay đổi theo thời gian dùng biểu đồ nào?", "Biểu đồ nào nối các điểm theo thứ tự ngày?", "Biểu đồ tròn có thể hiện thứ tự thời gian không?"], "Biểu đồ đường thể hiện sự thay đổi theo thời gian rất rõ.", { type: "mc", choices: ["Biểu đồ đường", "Biểu đồ tròn", "Biểu đồ phân tán", "Sơ đồ Venn"] }),
          B("16.5-02", 1, "choose-chart", "You have the height and shoe size of 20 students. Which chart shows if taller students tend to have bigger feet?", 2, ["Có hai đại lượng cho mỗi học sinh.", "Mỗi học sinh là một điểm với hai tọa độ.", "Biểu đồ nào dựng từ các điểm như vậy?"], "Biểu đồ phân tán cho thấy mối liên hệ (tương quan) giữa hai đại lượng.", { type: "mc", choices: ["Biểu đồ tròn", "Biểu đồ cột kép", "Biểu đồ phân tán", "Bảng Carroll"] }),
          B("16.5-03", 1, "choose-chart", "Cakes, sandwiches and drinks sold at a café on two different days. Which chart makes it easy to compare the two days for each item?", 1, ["Có hai ngày và ba loại hàng.", "Em muốn so sánh hai ngày cho từng loại.", "Cột đặt cạnh nhau cho mỗi loại."], "Biểu đồ cột kép đặt hai cột cạnh nhau cho từng loại hàng nên dễ so sánh.", { type: "mc", choices: ["Biểu đồ đường", "Biểu đồ cột kép", "Biểu đồ phân tán", "Biểu đồ tròn"] }),
          B("16.5-04", 2, "choose-misconception", "Why is a pie chart NOT a good choice for the temperature in each month of a year?", 1, ["Biểu đồ tròn dùng cho các phần của một tổng. Nhiệt độ các tháng có phải các phần của một tổng không?", "Cộng nhiệt độ 12 tháng có ý nghĩa gì không?", "Em cần xem sự thay đổi theo thời gian."], "Nhiệt độ các tháng không phải các phần của một tổng. Biểu đồ đường hoặc cột phù hợp hơn.", { type: "mc", choices: ["Vì biểu đồ tròn chỉ vẽ được 5 phần", "Vì nhiệt độ các tháng không phải các phần của một tổng", "Vì biểu đồ tròn không dùng màu được", "Vì nhiệt độ luôn là số âm"] }),
          B("16.5-05", 2, "venn", "A Venn diagram: 7 students study only biology, 12 study both, 9 study only chemistry. How many students study chemistry in total?", 21, ["Học hóa gồm 'chỉ hóa' và nhóm nào nữa?", "Nhóm giao của hai vòng thuộc cả hai môn.", "9 + 12 = ?"], "Chemistry = chỉ hóa + cả hai = 9 + 12 = 21.", { unitLabel: "học sinh" }),
          B("16.5-06", 2, "venn", "Same Venn diagram (7 only biology, 12 both, 9 only chemistry). How many students are there altogether?", 28, ["Có ba vùng riêng biệt.", "Cộng ba vùng, đừng đếm vùng giao hai lần.", "7 + 12 + 9 = ?"], "7 + 12 + 9 = 28.", { unitLabel: "học sinh" }),
          B("16.5-07", 3, "venn", "40 people: 25 like tea, 18 like coffee, 6 like neither. How many like both?", 9, ["Có bao nhiêu người thích ít nhất một loại?", "25 + 18 đếm người thích cả hai mấy lần?", "25 + 18 − 34 = ?"], "Ít nhất một loại: 40 − 6 = 34. 25 + 18 = 43 đếm người thích cả hai hai lần, vậy cả hai = 43 − 34 = 9.", { unitLabel: "người" }),
          B("16.5-08", 3, "choose-chart", "Which data sets are best shown on a line graph? (Choose all that apply.)", [0, 2], ["Hãy tìm dữ liệu thay đổi theo thời gian.", "Dữ liệu 'mỗi loại một giá trị' có phải theo thời gian không?", "Chọn các dữ liệu có trục thời gian."], "Nhiệt độ mỗi giờ và chiều cao cây theo tuần đều là dữ liệu theo thời gian nên dùng biểu đồ đường.", { type: "multi", choices: ["Nhiệt độ mỗi giờ trong một ngày", "Số học sinh đi mỗi loại phương tiện", "Chiều cao của một cây theo từng tuần", "Số huy chương vàng, bạc, đồng của hai nước"] }),
          B("16.5-09", 3, "scatter-reason", "A scatter graph of hours studied against test score shows the points rising from bottom left to top right. What does it suggest?", 1, ["Khi giờ học tăng thì điểm thế nào?", "Điểm rơi lên theo hướng nào?", "Em dùng thuật ngữ 'tương quan' nào?"], "Các điểm đi lên cho thấy tương quan dương: học nhiều giờ hơn thường điểm cao hơn (chưa chắc là nguyên nhân tuyệt đối).", { type: "mc", choices: ["Không có mối liên hệ", "Tương quan dương: học nhiều hơn thường điểm cao hơn", "Tương quan âm", "Mọi bạn đều học 0 giờ"] }),
          B("16.5-10", 3, "carroll", "Shapes: rectangle, parallelogram, square, trapezium, rhombus, kite. How many have ALL angles 90° and EXACTLY two lines of symmetry?", 1, ["Hình nào có tất cả góc 90°?", "Hình vuông có bao nhiêu trục đối xứng?", "Hình chữ nhật có bao nhiêu trục đối xứng?"], "Góc đều 90°: chữ nhật và vuông. Hình vuông có 4 trục đối xứng, chữ nhật có đúng 2. Vậy chỉ có hình chữ nhật: 1 hình.", { howto: "Count the shapes in the list that have four right angles AND exactly two lines of symmetry. Enter how many shapes.",})
        ]
      },
      {
        id: "16.6", title: "Using statistics", titleVi: "Dùng số liệu thống kê",
        sims: [{ id: "datastats", at: 0 }],
        learn: [
          "Mốt là giá trị xuất hiện nhiều nhất; trung vị là giá trị ở giữa sau khi XẾP thứ tự; trung bình là tổng chia số giá trị.",
          "Nếu số giá trị chẵn, trung vị là trung bình cộng của hai giá trị ở giữa.",
          "Khoảng biến thiên = lớn nhất − nhỏ nhất, cho biết dữ liệu phân tán nhiều hay ít.",
          "Hai nhóm có cùng trung bình nhưng khoảng biến thiên nhỏ hơn thì ổn định hơn.",
          "Tìm giá trị thiếu: tổng = trung bình × số giá trị, rồi trừ các giá trị đã biết."
        ],
        example: { q: "Tuổi: 42, 38, 16, 12, 12. Tính trung bình.", steps: ["Tổng = 42 + 38 + 16 + 12 + 12 = 120", "Có 5 giá trị", "120 ÷ 5 = 24"], prompts: ["Trung bình cần tổng của các giá trị: em tính tổng các tuổi.", "Có bao nhiêu giá trị tất cả?", "Trung bình bằng tổng chia cho số giá trị."], answer: { type: "num", value: 24 }, twist: { q: "Nếu thêm một người 18 tuổi vào nhóm thì trung bình mới là bao nhiêu?", answer: { type: "num", value: 23 } } },
        questions: [
          B("16.6-01", 1, "mean", "Five ages: 42, 38, 16, 12, 12. Work out the mean.", 24, ["Cộng 5 tuổi.", "Tổng bằng 120. Chia cho số giá trị.", "120 ÷ 5 = ?"], "Tổng 120, 120 ÷ 5 = 24.", { unitLabel: "tuổi" }),
          B("16.6-02", 1, "median", "Five ages: 42, 38, 16, 12, 12. Work out the median.", 16, ["Dữ liệu đã xếp thứ tự chưa?", "Có 5 giá trị, giá trị ở giữa là thứ mấy?", "Giá trị thứ 3."], "Giảm dần 42, 38, 16, 12, 12: giá trị thứ 3 là 16.", {}),
          B("16.6-03", 1, "range", "Five ages: 42, 38, 16, 12, 12. Work out the range.", 30, ["Tìm lớn nhất và nhỏ nhất.", "42 và 12.", "42 − 12 = ?"], "42 − 12 = 30.", {}),
          B("16.6-04", 2, "mean", "Waiting times (minutes) over 20 days: 2 5 3 8 5 2 10 7 8 8 4 7 2 2 3 6 10 3 4 7. Work out the mean.", 5.3, ["Cộng 20 số: có thể cộng từng hàng 10 số.", "Hàng 1 cộng được 58, hàng 2 cộng được bao nhiêu? Tổng?", "106 ÷ 20 = ?"], "Tổng = 58 + 48 = 106 (hàng 1: 2+5+3+8+5+2+10+7+8+8 = 58, hàng 2: 4+7+2+2+3+6+10+3+4+7 = 48; 58 + 48 = 106). 106 ÷ 20 = 5,3.", { tol: 0.01, unitLabel: "phút" }),
          B("16.6-05", 2, "median-misconception", "What is the median of 3, 9, 2, 7?", 1, ["Việc đầu tiên cần làm với dữ liệu là gì?", "Xếp: 2, 3, 7, 9.", "Có 4 giá trị, trung vị là trung bình hai số giữa."], "Phải xếp thứ tự: 2, 3, 7, 9. Trung vị = (3 + 7) ÷ 2 = 5. Sai lầm: lấy hai số giữa của dãy chưa sắp xếp (9 và 2) được 5,5; còn 5,25 là số trung bình.", { type: "mc", choices: ["5,5", "5", "5,25", "9"] }),
          B("16.6-06", 2, "median", "Using the 20 waiting times (2 5 3 8 5 2 10 7 8 8 4 7 2 2 3 6 10 3 4 7), find the median. (Sort first: there are 20 values.)", 5, ["Xếp 20 số theo thứ tự tăng dần.", "Giá trị thứ 10 và thứ 11 là gì?", "Tính trung bình hai giá trị đó."], "Sắp xếp: 2,2,2,2,3,3,3,4,4,5,5,6,7,7,7,8,8,8,10,10. Giá trị thứ 10 và 11 đều 5, trung vị = 5.", { unitLabel: "phút" }),
          B("16.6-07", 2, "missing-value", "The mean of five numbers is 8. Four of them are 6, 9, 7 and 10. What is the fifth number?", 8, ["Tổng 5 số là bao nhiêu (8 × 5)?", "Tổng bốn số đã biết là mấy?", "40 − 32 = ?"], "Tổng 5 số = 8 × 5 = 40; bốn số đã biết cộng được 32; số còn lại là 40 − 32 = 8.", {}),
          B("16.6-08", 3, "missing-value", "The mean of 5 numbers is 12. A sixth number is added and the mean becomes 13. What is the sixth number?", 18, ["Tổng ban đầu của 5 số?", "Tổng mới của 6 số?", "78 − 60 = ?"], "Tổng cũ 5 × 12 = 60. Tổng mới 6 × 13 = 78. Số thứ sáu = 18.", {}),
          B("16.6-09", 3, "compare-spread", "Class A scores have mean 6.5 and range 2. Class B scores have mean 6.5 and range 7. Which statement is best?", 0, ["Trung bình hai lớp thế nào?", "Khoảng biến thiên nói lên điều gì?", "Lớp nào điểm đồng đều hơn?"], "Cùng trung bình nhưng lớp A có khoảng biến thiên nhỏ hơn nên điểm đồng đều, ổn định hơn.", { type: "mc", choices: ["Lớp A đồng đều hơn", "Lớp B giỏi hơn lớp A", "Hai lớp giống hệt nhau", "Lớp B đồng đều hơn"] }),
          B("16.6-10", 3, "outlier", "Four values are 5, 6, 6, 7 (mean 6). A fifth value 26 is added. What is the new mean?", 10, ["Tổng bốn số cũ?", "Tổng mới sau khi thêm 26.", "50 ÷ 5 = ?"], "Tổng cũ 24, tổng mới 50. 50 ÷ 5 = 10. Một giá trị ngoại lai làm trung bình tăng mạnh; trung vị vẫn là 6.", {})
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Bảng, biểu đồ và số liệu từ lớp học, kiểu đề kiểm tra lớp 6–7.",
      questions: [
        V("ch-01", 2, "vn-twoway", "Lớp 7A có 40 học sinh, trong đó 24 bạn nữ. Có 18 bạn đạt loại giỏi, trong đó 10 bạn nữ. Hỏi có bao nhiêu bạn nam không đạt loại giỏi?", 8, ["Số bạn nam của lớp là bao nhiêu?", "Số bạn nam đạt loại giỏi là bao nhiêu?", "Nam không giỏi = tổng nam − nam giỏi."], "Nam: 40 − 24 = 16. Nam giỏi: 18 − 10 = 8. Nam không giỏi: 16 − 8 = 8 bạn.", { unitLabel: "bạn" }),
        V("ch-02", 3, "vn-mean-add", "Năm bạn trong tổ có điểm trung bình môn Toán là 7,2. Khi thêm bạn thứ sáu vào thì điểm trung bình của cả sáu bạn là 7,5. Hỏi bạn thứ sáu được mấy điểm?", 9, ["Tổng điểm của năm bạn đầu là bao nhiêu?", "Tổng điểm của sáu bạn là bao nhiêu?", "Hiệu hai tổng chính là điểm bạn thứ sáu."], "Tổng năm bạn: 5 × 7,2 = 36. Tổng sáu bạn: 6 × 7,5 = 45. Bạn thứ sáu: 45 − 36 = 9 điểm.", { unitLabel: "điểm" }),
        V("ch-03", 2, "vn-median", "Điểm kiểm tra của 7 bạn: 5; 8; 6; 9; 8; 7; 10. Tìm trung vị của dãy điểm.", 8, ["Việc đầu tiên: xếp dãy số theo thứ tự.", "Có 7 giá trị: giá trị ở giữa là giá trị thứ mấy?", "Sau khi xếp: 5, 6, 7, 8, 8, 9, 10."], "Xếp: 5, 6, 7, 8, 8, 9, 10. Giá trị thứ 4 là 8 nên trung vị = 8.", {}),
        V("ch-04", 1, "vn-range", "Nhiệt độ trong 7 ngày (°C): 28; 31; 33; 29; 35; 30; 32. Tính khoảng biến thiên của nhiệt độ.", 7, ["Tìm nhiệt độ cao nhất.", "Tìm nhiệt độ thấp nhất.", "35 − 28 = ?"], "Cao nhất 35, thấp nhất 28; khoảng biến thiên = 35 − 28 = 7°C.", { unitLabel: "°C" }),
        V("ch-05", 3, "vn-missing-data", "Trung bình cộng điểm 6 bài kiểm tra của Nam là 8. Năm bài đầu được 9; 10; 10; 8; 6 điểm. Hỏi bài thứ sáu được mấy điểm?", 5, ["Tổng điểm 6 bài là bao nhiêu?", "Tổng 5 bài đầu là bao nhiêu?", "Hiệu hai tổng chính là điểm bài thứ sáu."], "Tổng 6 bài: 6 × 8 = 48. Năm bài đầu: 43. Bài sáu: 48 − 43 = 5.", { unitLabel: "điểm" }),
        V("ch-06", 3, "vn-pie", "Biểu đồ hình quạt cho 36 học sinh chọn môn thể thao: bóng đá chiếm góc 120°, bóng bàn chiếm góc 90°, phần còn lại là cầu lông. Có bao nhiêu bạn chọn cầu lông?", 15, ["Góc của phần cầu lông là bao nhiêu độ?", "Mỗi bạn ứng với bao nhiêu độ (360 ÷ 36)?", "Số bạn = góc ÷ 10."], "Góc cầu lông: 360° − 120° − 90° = 150°. Mỗi bạn ứng với 10° nên có 150 ÷ 10 = 15 bạn.", { unitLabel: "bạn", svg: pie([120, 90, 150]) }),
        V("ch-07", 2, "vn-dual-bar", "Biểu đồ cột kép cho số sách đọc được của hai lớp 7A (xanh) và 7B (đỏ) trong 3 tháng. Tổng số sách của 7B nhiều hơn 7A bao nhiêu quyển?", 10, ["Đọc ba cột xanh của 7A: 20, 25, 30. Tổng?", "Đọc ba cột đỏ của 7B. Tổng?", "Lấy hiệu hai tổng."], "7A: 20 + 25 + 30 = 75. 7B: 28 + 22 + 35 = 85. Chênh lệch 85 − 75 = 10 quyển.", { unitLabel: "quyển", svg: bars(['T1', 'T2', 'T3'], [20, 25, 30], [28, 22, 35], 40, false, '7A', '7B') }),
        V("ch-08", 2, "vn-median-even", "Số bài tập làm được của 6 bạn: 4; 7; 9; 10; 12; 15. Tìm trung vị.", 9.5, ["Dãy đã sắp thứ tự. Có mấy giá trị?", "Khi có số chẵn giá trị thì trung vị lấy hai giá trị nào?", "(9 + 10) ÷ 2 = ?"], "Có 6 giá trị, hai giá trị ở giữa là 9 và 10. Trung vị = (9 + 10) ÷ 2 = 9,5.", { tol: 0.01 }),
        V("ch-09", 3, "vn-freq-mean", "Bảng tần số điểm của 30 bạn: điểm 5 có 4 bạn; điểm 6 có 6 bạn; điểm 7 có 10 bạn; điểm 8 có 6 bạn; điểm 9 có 4 bạn. Tính điểm trung bình.", 7, ["Tổng điểm = Σ (điểm × số bạn). Tính từng tích.", "20, 36, 70, 48, 36: cộng lại?", "Chia tổng cho 30."], "Tổng = 20 + 36 + 70 + 48 + 36 = 210. 210 ÷ 30 = 7 điểm. Mốt cũng là 7.", { unitLabel: "điểm" }),
        V("ch-10", 3, "vn-remove-value", "Trung bình cộng của 10 số là 6. Nếu bỏ đi số 15 thì trung bình cộng của 9 số còn lại là bao nhiêu?", 5, ["Tổng 10 số?", "Tổng 9 số còn lại sau khi bỏ 15?", "Chia cho 9."], "Tổng 10 số: 60. Bỏ 15 còn 45. Trung bình 45 ÷ 9 = 5.", {})
      ]
    },
    project: null
  });
})();
