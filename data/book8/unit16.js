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
  var HEAD = '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" font-family="sans-serif" font-size="10" stroke-width="1.4">';
  function T(x, y, t, a) { return '<text x="' + x + '" y="' + y + '" fill="currentColor" stroke="none"' + (a ? ' text-anchor="' + a + '"' : '') + '>' + t + '</text>'; }

  // Bar chart. vals, labels, ymax, ystep, optional x-axis title.
  function BC(vals, labels, ymax, ystep, xt) {
    var x0 = 34, x1 = 250, y0 = 160, y1 = 20, n = vals.length, w = (x1 - x0) / n, s = HEAD, i;
    for (i = 0; i <= ymax; i += ystep) {
      var y = y0 - (y0 - y1) * i / ymax;
      s += '<line x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" stroke-opacity="0.18"/>' + T(x0 - 5, y + 3, i, "end");
    }
    for (i = 0; i < n; i++) {
      var h = (y0 - y1) * vals[i] / ymax, bx = x0 + i * w + w * 0.15;
      s += '<rect x="' + bx + '" y="' + (y0 - h) + '" width="' + (w * 0.7) + '" height="' + h + '" fill="currentColor" fill-opacity="0.3"/>';
      s += T(x0 + i * w + w / 2, y0 + 12, labels[i], "middle");
    }
    s += '<line x1="' + x0 + '" y1="' + y1 + '" x2="' + x0 + '" y2="' + y0 + '"/><line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '"/>';
    if (xt) { s += T(142, 188, xt, "middle"); }
    return s + '</svg>';
  }
  // Line graph (time series). pts: values, labels.
  function LC(vals, labels, ymax, ystep, xt) {
    var x0 = 34, x1 = 250, y0 = 160, y1 = 20, n = vals.length, w = (x1 - x0) / n, s = HEAD, i, pts = [];
    for (i = 0; i <= ymax; i += ystep) {
      var y = y0 - (y0 - y1) * i / ymax;
      s += '<line x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" stroke-opacity="0.18"/>' + T(x0 - 5, y + 3, i, "end");
    }
    for (i = 0; i < n; i++) {
      var px = x0 + i * w + w / 2, py = y0 - (y0 - y1) * vals[i] / ymax;
      pts.push(px + "," + py);
      s += T(px, y0 + 12, labels[i], "middle");
    }
    s += '<polyline points="' + pts.join(" ") + '" stroke-width="1.8"/>';
    for (i = 0; i < n; i++) { var q = pts[i].split(","); s += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="2.8" fill="currentColor"/>'; }
    s += '<line x1="' + x0 + '" y1="' + y1 + '" x2="' + x0 + '" y2="' + y0 + '"/><line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '"/>';
    if (xt) { s += T(142, 188, xt, "middle"); }
    return s + '</svg>';
  }
  // Pie chart. parts: [[angle, label]]
  function PC(parts) {
    var cx = 130, cy = 100, r = 62, a = 0, s = HEAD;
    parts.forEach(function (p) {
      var a1 = a + p[0], t0 = a * Math.PI / 180, t1 = a1 * Math.PI / 180;
      var x0 = (cx + r * Math.sin(t0)).toFixed(1), y0 = (cy - r * Math.cos(t0)).toFixed(1);
      var x1 = (cx + r * Math.sin(t1)).toFixed(1), y1 = (cy - r * Math.cos(t1)).toFixed(1);
      s += '<path d="M ' + cx + ' ' + cy + ' L ' + x0 + ' ' + y0 + ' A ' + r + ' ' + r + ' 0 ' + (p[0] > 180 ? 1 : 0) + ' 1 ' + x1 + ' ' + y1 + ' Z" fill="currentColor" fill-opacity="' + (0.12 + 0.12 * (parts.indexOf(p) % 4)) + '"/>';
      var tm = (a + p[0] / 2) * Math.PI / 180;
      s += T((cx + (r + 16) * Math.sin(tm)).toFixed(1), (cy - (r + 12) * Math.cos(tm) + 3).toFixed(1), p[1], "middle");
      a = a1;
    });
    return s + '</svg>';
  }

  window.GAME_DATA.units.push({
    id: 16,
    title: "Interpreting and discussing results",
    titleVi: "Đọc hiểu và bàn luận kết quả thống kê",
    strand: "Statistics and probability",
    pages: [353, 387],
    realm: "Hang Động Biểu Đồ",
    emoji: "📊",
    story: "Trong hang động cuối cùng, các vách đá khắc đầy biểu đồ: cột, đường, thân–lá và hình tròn. Nhà thám hiểm phải đọc đúng từng biểu đồ, so sánh trung bình, trung vị, mốt rồi bàn luận xem dữ liệu nói lên điều gì, trước khi cánh cửa kho báu mở ra.",
    glossary: [
      { en: "frequency diagram", vi: "biểu đồ tần số", def: "Biểu đồ cột cho biết mỗi giá trị hoặc mỗi nhóm giá trị xuất hiện bao nhiêu lần." },
      { en: "time series graph", vi: "biểu đồ đoạn thẳng theo thời gian", def: "Đồ thị đường nối các giá trị đo ở những thời điểm liên tiếp, cho thấy xu hướng." },
      { en: "stem-and-leaf diagram", vi: "biểu đồ thân–lá", def: "Cách ghi dữ liệu bằng chữ số hàng chục (thân) và hàng đơn vị (lá), giữ nguyên mọi giá trị." },
      { en: "pie chart", vi: "biểu đồ tròn", def: "Hình tròn chia thành các hình quạt, góc ở tâm tỉ lệ với tần số: góc = tần số ÷ tổng × 360°." },
      { en: "mean", vi: "số trung bình", def: "Tổng tất cả các giá trị chia cho số giá trị." },
      { en: "median", vi: "trung vị", def: "Giá trị ở giữa khi các số được sắp xếp tăng dần (hai số giữa thì lấy trung bình)." },
      { en: "mode", vi: "mốt", def: "Giá trị xuất hiện nhiều nhất." },
      { en: "range", vi: "khoảng biến thiên", def: "Giá trị lớn nhất trừ giá trị nhỏ nhất, đo độ phân tán." },
      { en: "modal class", vi: "nhóm có tần số cao nhất", def: "Với dữ liệu gom nhóm, đó là nhóm có tần số lớn nhất." },
      { en: "trend", vi: "xu hướng", def: "Hướng thay đổi chung của dữ liệu theo thời gian: tăng, giảm hay ổn định." }
    ],
    sections: [
      {
        id: "16.1",
        title: "Interpreting and drawing frequency diagrams",
        titleVi: "Đọc và vẽ biểu đồ tần số",
        learn: [
          "Biểu đồ tần số dùng cột: chiều cao cột là tần số (số lần). Tổng các cột bằng tổng số dữ liệu.",
          "Với dữ liệu gom nhóm (liên tục), các nhóm có độ rộng bằng nhau, các cột nằm sát nhau, mỗi nhóm có dạng a ≤ x < b (đầu trái được tính, đầu phải thì không).",
          "Với dữ liệu rời rạc, các cột có cùng độ rộng và có khoảng cách đều nhau; luôn đặt tiêu đề, nhãn trục và thang chia hợp lý.",
          "Khi dữ liệu đã gom nhóm, ta chỉ biết số lượng trong mỗi nhóm, không biết giá trị chính xác bên trong nhóm.",
          "'Ít nhất 20' nghĩa là 20 hoặc lớn hơn; 'nhiều hơn 20' nghĩa là không tính 20. Cẩn thận với các giá trị nằm đúng biên nhóm."
        ],
        example: {
          q: "Tần số số cuộc gọi: 0–9: 2, 10–19: 8, 20–29: 6, 30–39: 9. Có bao nhiêu nhân viên gọi ít nhất 20 cuộc?",
          steps: ["'Ít nhất 20' gồm hai nhóm 20–29 và 30–39", "6 + 9", "= 15 nhân viên."],
          prompts: ["'Ít nhất 20' gồm những nhóm nào? Nhóm 10–19 có được tính không?","Vậy em cần cộng những tần số nào?","Tổng em vừa tìm trả lời cho câu hỏi nào? Kết luận kèm đơn vị."],
          answer: {"type":"num","value":15},
          twist: {"q":"Nếu hỏi 'nhiều nhất 19 cuộc' thì có bao nhiêu nhân viên?","answer":{"type":"num","value":10}}
        },
        questions: [
          Q({ id: "16.1-01", type: "num", diff: 1, skill: "freq-read",
            q: "The frequency diagram shows the number of phone calls made by all the employees of a company in one day. How many employees made 10–19 phone calls?", svg: BC([2, 8, 6, 9], ["0–9", "10–19", "20–29", "30–39"], 10, 2, "Calls"), answer: 8,
            h: ["Tìm cột có nhãn 10–19 trên trục ngang.", "Nhìn lên đỉnh cột và đọc trên trục tần số.", "Đỉnh cột ở vạch nào?"],
            e: "Cột 10–19 cao 8, vậy 8 nhân viên gọi 10–19 cuộc." }),
          Q({ id: "16.1-02", type: "num", diff: 1, skill: "freq-read",
            q: "Using the same diagram (bars 2, 8, 6, 9 for 0–9, 10–19, 20–29, 30–39 calls), how many more employees made 30–39 calls than made 0–9 calls?", svg: BC([2, 8, 6, 9], ["0–9", "10–19", "20–29", "30–39"], 10, 2, "Calls"), answer: 7,
            h: ["Đọc chiều cao cột 30–39.", "Đọc chiều cao cột 0–9.", "Lấy hiệu hai số."],
            e: "9 − 2 = 7 nhân viên." }),
          Q({ id: "16.1-03", type: "num", diff: 1, skill: "freq-total",
            q: "Using the same diagram, how many employees are there in the company altogether?", svg: BC([2, 8, 6, 9], ["0–9", "10–19", "20–29", "30–39"], 10, 2, "Calls"), answer: 25,
            h: ["Mỗi cột cho số nhân viên của một nhóm.", "Muốn biết tổng, em làm gì với các cột?", "2 + 8 + 6 + 9."],
            e: "Cộng mọi tần số: 2 + 8 + 6 + 9 = 25 nhân viên." }),
          Q({ id: "16.1-04", type: "num", diff: 2, skill: "freq-total",
            q: "The frequency table shows the number of cups of coffee sold each day in a coffee shop during one month: 0–19: 2 days, 20–39: 3 days, 40–59: 6 days, 60–79: 12 days, 80–99: 5 days. How many days does the table cover?", answer: 28,
            h: ["Mỗi con số là số NGÀY trong nhóm đó.", "Muốn biết tổng số ngày thì làm gì?", "2 + 3 + 6 + 12 + 5."],
            e: "Tổng số ngày = 2 + 3 + 6 + 12 + 5 = 28 ngày (tháng 2 không nhuận)." }),
          Q({ id: "16.1-05", type: "mc", diff: 2, skill: "freq-misconception",
            q: "Using the coffee table above (modal group 60–79 with 12 days), Marcus says: 'The frequency diagram shows that the most cups of coffee sold in one day was 99.' Is he correct?",
            choices: ["No: the data are grouped, so the diagram only shows that the most cups sold in a day was somewhere in 80–99", "Yes: 99 is the top of the last class", "Yes: the tallest bar is 99", "No: the most cups sold was 79"], answer: 0,
            h: ["Biểu đồ cho biết từng ngày bán chính xác bao nhiêu cốc, hay chỉ cho biết ngày đó thuộc nhóm nào?", "Nhóm cuối là 80–99. Có chắc một ngày nào đó bán đúng 99 cốc không?", "Dữ liệu gom nhóm làm mất giá trị chính xác."],
            e: "Khi dữ liệu được gom nhóm ta chỉ biết số ngày trong mỗi nhóm. Nhóm cao nhất là 80–99 nhưng không biết có ngày nào đúng 99 cốc hay không." }),
          Q({ id: "16.1-06", type: "mc", diff: 2, skill: "class-intervals",
            q: "The frequency table shows the ages of a choir with classes 10 ≤ a < 20, 20 ≤ a < 30, 30 ≤ a < 40, 40 ≤ a < 50. In which class would you include someone aged exactly 30 years?",
            choices: ["20 ≤ a < 30", "30 ≤ a < 40", "Both classes", "Neither class"], answer: 1,
            h: ["Ký hiệu ≤ ở đầu trái nghĩa là đầu mút đó có được tính hay không?", "Ký hiệu < ở đầu phải thì sao?", "30 có thể thuộc hai nhóm cùng lúc không?"],
            e: "Ở nhóm 20 ≤ a < 30, giá trị 30 bị loại (vì < 30). Ở nhóm 30 ≤ a < 40, 30 được tính (vì ≤). Vậy 30 thuộc nhóm 30 ≤ a < 40." }),
          Q({ id: "16.1-07", type: "num", diff: 2, skill: "freq-grouped",
            q: "The frequency table shows the speeds s (km/h) of cars passing a speed camera: 50 < s ≤ 60: 2 cars, 60 < s ≤ 70: 3 cars, 70 < s ≤ 80: 6 cars, 80 < s ≤ 90: 12 cars, 90 < s ≤ 100: 5 cars. The speed limit is 80 km/h. How many cars are travelling over the limit?", answer: 17,
            h: ["Những nhóm nào chỉ gồm tốc độ lớn hơn 80?", "Đó là 80 < s ≤ 90 và 90 < s ≤ 100.", "12 + 5."],
            e: "Hai nhóm trên 80 km/h: 12 + 5 = 17 xe." }),
          Q({ id: "16.1-08", type: "mc", diff: 3, skill: "class-intervals",
            q: "In the speed-camera table (first class 50 < s ≤ 60), Sofia says: 'The frequency diagram shows that the slowest car was travelling at 50 km/h.' Is she correct?",
            choices: ["No: 50 is not included in the first class, so the slowest car was faster than 50 km/h", "Yes: the first class starts at 50", "Yes: 50 is the lowest value on the axis", "No: the slowest car was 60 km/h"], answer: 0,
            h: ["Ký hiệu 50 < s cho biết s có thể bằng 50 không?", "Vậy xe chậm nhất có thể chạy đúng 50 km/h không?", "Chỉ biết xe chậm nhất chạy trong khoảng nào?"],
            e: "Nhóm đầu là 50 < s ≤ 60: tốc độ phải LỚN HƠN 50, nên không có xe nào chạy đúng 50 km/h. Ta chỉ biết xe chậm nhất nằm trong khoảng 50 đến 60." }),
          Q({ id: "16.1-09", type: "num", diff: 3, skill: "freq-class-count",
            q: "Ages of members of a bowling club: 15, 12, 16, 20, 24, 28, 23, 14, 10, 22, 29, 23, 17, 14, 27, 22, 25, 24, 20, 29. Using the classes 10 ≤ a < 15, 15 ≤ a < 20, 20 ≤ a < 25 and 25 ≤ a < 30, how many members are at least 20 years old?", answer: 13,
            h: ["'At least 20' nghĩa là 20 hoặc lớn hơn: thuộc những nhóm nào?", "Đếm các giá trị trong 20 ≤ a < 25 (nhớ tính cả hai số 20) và trong 25 ≤ a < 30.", "8 + 5."],
            e: "Nhóm 20 ≤ a < 25: 20, 24, 23, 22, 23, 22, 24, 20 → 8 người. Nhóm 25 ≤ a < 30: 28, 29, 27, 25, 29 → 5 người. Tổng 13." }),
          Q({ id: "16.1-10", type: "num", diff: 3, skill: "freq-compare",
            q: "Population of a village by age group in 2010: 0–20: 25, 20–40: 40, 40–60: 54, 60–80: 35, 80–100: 8. Marcus says 'approximately 60% of the population were over the age of 40.' To the nearest whole number, what percentage were over 40?", answer: 60, tol: 0.5, unitLabel: "%",
            h: ["Tổng dân số là bao nhiêu? Cộng mọi tần số.", "Những nhóm nào ứng với trên 40 tuổi? Cộng tần số của chúng.", "Chia phần số người trên 40 cho tổng rồi nhân 100."],
            e: "Tổng = 25 + 40 + 54 + 35 + 8 = 162. Trên 40 tuổi: 54 + 35 + 8 = 97. 97 ÷ 162 ≈ 0,599 ≈ 60%. Marcus đúng." })
        ]
      },
      {
        id: "16.2",
        title: "Time series graphs",
        titleVi: "Biểu đồ đoạn thẳng theo thời gian",
        learn: [
          "Biểu đồ theo thời gian nối các số đo ở những thời điểm liên tiếp; trục ngang là thời gian.",
          "Nó cho thấy xu hướng: tăng, giảm hay dao động theo mùa.",
          "Chỉ các điểm đo là dữ liệu thật; đoạn thẳng nối chỉ giúp nhìn xu hướng, không chắc đúng giữa hai lần đo.",
          "Thay đổi giữa hai thời điểm = giá trị sau trừ giá trị trước; phần trăm thay đổi = thay đổi ÷ giá trị đầu × 100.",
          "Dự đoán ngoài dải dữ liệu rất kém tin cậy, vì xu hướng có thể đổi."
        ],
        example: {
          q: "Doanh thu kem (trăm nghìn đồng): Th1 12, Th2 15, Th3 21. Phần trăm tăng từ Th1 đến Th3?",
          steps: ["Tăng: 21 − 12 = 9", "Chia cho giá trị đầu: 9 ÷ 12 = 0,75", "Tăng 75%."],
          prompts: ["Muốn biết tăng bao nhiêu, em cần tìm hiệu giữa hai giá trị nào?","Phần trăm tăng được tính so với giá trị nào làm gốc? Em chia cho số nào?","Đổi thương vừa tìm sang phần trăm."],
          answer: {"type":"num","value":75},
          twist: {"q":"Nếu doanh thu giảm từ Th3 (21) về lại Th1 (12) thì phần trăm giảm là bao nhiêu (làm tròn đến 0,1%)?","answer":{"type":"num","value":42.9,"tol":0.05}}
        },
        questions: [
          Q({ id: "16.2-01", type: "num", diff: 1, skill: "ts-change",
            q: "The graph shows the value of a car (in $ thousands) over four years. How much value did the car lose during the first year? Give your answer in dollars.", svg: LC([25, 20, 17, 14.9, 13.4], [0, 1, 2, 3, 4], 30, 5, "Age of car (years)"), answer: 5000, unitLabel: "$",
            h: ["Đọc giá trị của xe ở tuổi 0 và tuổi 1.", "Giá trị ban đầu là 25 nghìn, sau 1 năm là 20 nghìn.", "25 000 − 20 000."],
            e: "Giá trị giảm từ 25 000 xuống 20 000 đô-la, mất 5000 đô-la trong năm đầu." }),
          Q({ id: "16.2-02", howto: "Find the biggest rise in price from one recorded year to the next one. Enter that rise in dollars.", type: "num", diff: 2, skill: "ts-change",
            q: "Average price of silver per ounce ($): 1990: 4.80, 1994: 5.30, 1998: 5.50, 2002: 4.60, 2006: 11.60, 2010: 20.20, 2014: 19.10, 2018: 15.70. What is the greatest increase in price between two consecutive recorded years?", answer: 8.6, tol: 0.001, unitLabel: "$",
            h: ["Tính hiệu giữa mỗi cặp năm liên tiếp.", "Chỉ xét những lần giá tăng.", "2006 → 2010: 20,20 − 11,60 = ?"],
            e: "Các lần tăng: 0,50; 0,20; 7,00 (2002–2006); 8,60 (2006–2010). Tăng nhiều nhất là 8,60 đô-la." }),
          Q({ id: "16.2-03", type: "num", diff: 3, skill: "ts-estimate",
            q: "The car's value is $17 000 at age 2 years and $14 900 at age 3 years. Join the two points with a straight line and estimate the value after 2½ years.", answer: 15950, tol: 50, unitLabel: "$",
            h: ["2½ năm nằm ở đâu giữa 2 và 3 năm?", "Nằm chính giữa, nên giá trị ước lượng nằm giữa 17 000 và 14 900.", "(17 000 + 14 900) ÷ 2."],
            e: "Trung bình của 17 000 và 14 900 là 15 950 đô-la (khoảng 16 000). Đây chỉ là ước lượng từ đoạn thẳng nối hai điểm." }),
          Q({ id: "16.2-04", type: "mc", diff: 2, skill: "ts-read",
            q: "The time series graph shows the profit ($ million) of a company for six years: 2006: 1, 2007: 1.5, 2008: 2.5, 2009: 2, 2010: 1.5, 2011: 0.5. Between which two years was the greatest increase in profit?", svg: LC([1, 1.5, 2.5, 2, 1.5, 0.5], [2006, 2007, 2008, 2009, 2010, 2011], 3, 0.5, "Year"),
            choices: ["2006 to 2007", "2007 to 2008", "2008 to 2009", "2010 to 2011"], answer: 1,
            h: ["Tính mức thay đổi giữa từng cặp năm liên tiếp.", "Chỉ xét các lần tăng.", "Đoạn dốc lên nhiều nhất là đoạn nào?"],
            e: "2006→2007 tăng 0,5; 2007→2008 tăng 1,0 (nhiều nhất); các giai đoạn sau đều giảm." }),
          Q({ id: "16.2-05", type: "num", diff: 2, skill: "ts-change",
            q: "Using the same profit data (1, 1.5, 2.5, 2, 1.5, 0.5 million dollars), by how much did the profit fall in the year-to-year change with the greatest decrease?", svg: LC([1, 1.5, 2.5, 2, 1.5, 0.5], [2006, 2007, 2008, 2009, 2010, 2011], 3, 0.5, "Year"), answer: 1, unitLabel: "triệu $",
            h: ["Tìm các cặp năm mà lợi nhuận giảm.", "Giảm 0,5; 0,5 và ?", "2010 → 2011: 1,5 xuống 0,5."],
            e: "Các lần giảm: 0,5 (2008–09), 0,5 (2009–10), 1,0 (2010–11). Giảm nhiều nhất là 1 triệu đô-la." }),
          Q({ id: "16.2-06", type: "num", diff: 2, skill: "ts-estimate",
            q: "The graph shows the value of a house ($ thousands). In 2002 it was worth 135 and in 2004 it was worth 145. Join these points with a straight line and estimate its value in 2003.", svg: LC([120, 135, 145, 180, 190, 170], [2000, 2002, 2004, 2006, 2008, 2010], 200, 50, "Year"), answer: 140, unitLabel: "nghìn $",
            h: ["2003 nằm ở đâu giữa 2002 và 2004?", "Giá trị ước lượng nằm giữa 135 và 145.", "(135 + 145) ÷ 2."],
            e: "2003 ở chính giữa nên ước lượng là (135 + 145) ÷ 2 = 140 nghìn đô-la." }),
          Q({ id: "16.2-07", howto: "Find the biggest rise or fall in the number of people from one month to the next. Enter its size as a positive number.", type: "num", diff: 2, skill: "ts-change",
            q: "Number of people staying in a guest house each month: Jan 8, Feb 6, Mar 11, Apr 15, May 17, Jun 20, Jul 24, Aug 26, Sep 18, Oct 14, Nov 8, Dec 7. What is the greatest change between two consecutive months?", answer: 8,
            h: ["Tính hiệu giữa các tháng liên tiếp.", "Chú ý cả các lần giảm.", "Tháng 8 → tháng 9: 26 xuống 18."],
            e: "Các thay đổi lớn: Aug→Sep −8, Oct→Nov −6, Feb→Mar +5. Thay đổi lớn nhất là 8 người." }),
          Q({ id: "16.2-08", type: "mc", diff: 2, skill: "ts-misconception",
            q: "A time series graph shows the average price of silver every four years from 1990 to 2018. Can we use the graph to predict an accurate price of silver in 2022?",
            choices: ["No: 2022 is outside the data and prices may change direction", "Yes: continue the last line straight", "Yes: copper prices show the answer", "Yes: the graph is made of straight lines"], answer: 0,
            h: ["Dữ liệu thật kết thúc ở năm nào?", "Xu hướng giá có thể đổi chiều sau năm 2018 không?", "Dự đoán ngoài dải dữ liệu đáng tin cậy đến đâu?"],
            e: "Dự đoán ngoài dải dữ liệu rất kém tin cậy, vì giá có thể tăng hay giảm bất ngờ. Chỉ nên nói xu hướng chung, không phải giá chính xác." }),
          Q({ id: "16.2-09", type: "mc", diff: 3, skill: "ts-reasoning",
            q: "A graph shows the average price of crude oil per barrel every ten years: 1965: $3, 1975: $12, 1985: $27, 1995: $17, 2005: $50, 2015: $42. Marcus thinks the price was highest in 2005. Sofia says you cannot tell from this graph in which year the price was highest. Who is right?",
            svg: LC([3, 12, 27, 17, 50, 42], ["1965", "1975", "1985", "1995", "2005", "2015"], 55, 10, "Year"),
            choices: ["Sofia: prices are only recorded every ten years, so the highest price could have been in a year between", "Marcus: 2005 is the highest point", "Both are right", "Neither: it was 1985"], answer: 0,
            h: ["Điểm cao nhất trên đồ thị là năm nào?", "Giá có được ghi mỗi năm không, hay chỉ mỗi 10 năm?", "Giữa 2005 và 2015 giá có thể đã cao hơn 50 không?"],
            e: "Chỉ biết giá ở các năm đã ghi. Giữa hai lần ghi, giá có thể đã vượt 50 đô-la, nên không thể khẳng định năm nào cao nhất. Marcus đúng về điểm cao nhất trong số các điểm đã ghi, nhưng Sofia lập luận chính xác hơn." }),
          Q({ id: "16.2-10", type: "mc", diff: 3, skill: "ts-predict",
            q: "A shop's stock of Scarlets rugby shirts over eight weeks is 72, 65, 57, 48, 39, 29, 19, 8. Each week the stock fell by about 7 to 11 shirts. Does the shop probably have enough shirts for week 9?",
            svg: LC([72, 65, 57, 48, 39, 29, 19, 8], [1, 2, 3, 4, 5, 6, 7, 8], 80, 10, "Week"),
            choices: ["No: the stock falls by about 10 a week but only 8 remain", "Yes: 8 shirts are left, so there are 8 for week 9", "Yes: the graph is flattening", "Nobody can say anything"], answer: 0,
            h: ["Tuần 8 còn bao nhiêu áo?", "Mỗi tuần thường bán thêm khoảng bao nhiêu áo?", "So sánh hai số đó."],
            e: "Tồn kho giảm khoảng 10 áo mỗi tuần, mà cuối tuần 8 chỉ còn 8 áo, nên nhiều khả năng không đủ cho tuần 9 (dù đây chỉ là dự đoán)." })
        ]
      },
      {
        id: "16.3",
        title: "Stem-and-leaf diagrams",
        titleVi: "Biểu đồ thân–lá",
        learn: [
          "Thân là chữ số đầu (hàng chục), lá là chữ số cuối (hàng đơn vị). Luôn có khóa (key), ví dụ 2 | 3 nghĩa là 23.",
          "Lá trên mỗi hàng được sắp xếp tăng dần để dễ tìm trung vị.",
          "Biểu đồ giữ nguyên mọi giá trị, nên tìm được mốt, trung vị, khoảng biến thiên và đếm số giá trị.",
          "Trung vị: đếm tới giá trị ở giữa; nếu số giá trị chẵn lấy trung bình hai giá trị giữa.",
          "Khóa có thể là số thập phân: 4 | 7 nghĩa là 4,7."
        ],
        example: {
          q: "Từ biểu đồ có khóa 1 | 2 = 12, các hàng: 1 | 2 5 5; 2 | 1 3 7 7 7 8; 3 | 4 6; 4 | 0 1 9. Tìm mốt.",
          steps: ["Tìm lá lặp nhiều nhất", "Hàng 2: lá 7 xuất hiện 3 lần", "Mốt là 27."],
          prompts: ["Mốt là giá trị xuất hiện nhiều nhất. Trên biểu đồ thân-lá, em tìm điều gì?","Hãy đếm số lần lặp của từng lá trong mỗi hàng. Lá nào xuất hiện nhiều nhất?","Ghép chữ số hàng thân với lá để đọc đúng giá trị. Khóa cho biết cách đọc thế nào?"],
          answer: {"type":"num","value":27},
          twist: {"q":"Nếu có thêm bốn giá trị 37 nữa trong dữ liệu thì mốt là bao nhiêu?","answer":{"type":"num","value":37}}
        },
        questions: [
          Q({ id: "16.3-01", type: "num", diff: 1, skill: "sl-count",
            q: "Shen recorded the playing times of some CDs.\nKey: 4 | 5 means 45 minutes\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nHow many CDs did Shen list?", answer: 15,
            h: ["Mỗi lá là một giá trị.", "Đếm lá từng hàng: 4, 6, 5.", "Cộng lại."],
            e: "4 + 6 + 5 = 15 đĩa CD." }),
          Q({ id: "16.3-02", type: "num", diff: 1, skill: "sl-count",
            q: "Key: 4 | 5 means 45 minutes\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nHow many of the CDs have a playing time longer than 60 minutes?", answer: 5,
            h: ["Những hàng nào có giá trị lớn hơn 60?", "Hàng thân 6: 61, 62, 64, 66, 67 đều lớn hơn 60.", "Đếm các lá ở hàng đó."],
            e: "Hàng 6 có 5 giá trị (61, 62, 64, 66, 67), tất cả lớn hơn 60: 5 đĩa." }),
          Q({ id: "16.3-03", type: "num", diff: 1, skill: "sl-mode",
            q: "Key: 4 | 5 means 45 minutes\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nWhat is the mode of the playing times?", answer: 45, unitLabel: "phút",
            h: ["Mốt là giá trị xuất hiện nhiều nhất.", "Tìm lá lặp lại ở một hàng.", "Ghép thân với lá lặp."],
            e: "Lá 5 xuất hiện 2 lần ở hàng 4 (45, 45); các giá trị khác chỉ xuất hiện 1 lần. Mốt = 45 phút." }),
          Q({ id: "16.3-04", type: "num", diff: 2, skill: "sl-median",
            q: "Key: 4 | 5 means 45 minutes\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nWork out the median playing time.", answer: 56, unitLabel: "phút",
            h: ["Có 15 giá trị (lẻ): giá trị ở giữa là giá trị thứ mấy?", "Đếm 8 giá trị đầu: 45, 45, 47, 49, 50, 52, 55, ...", "Giá trị thứ 8 là gì?"],
            e: "Giá trị ở giữa là thứ 8: 45, 45, 47, 49, 50, 52, 55, 56. Trung vị = 56 phút." }),
          Q({ id: "16.3-05", type: "num", diff: 2, skill: "sl-range",
            q: "Key: 4 | 5 means 45 minutes\n4 | 5 5 7 9\n5 | 0 2 5 6 8 9\n6 | 1 2 4 6 7\nWhat is the range of the playing times?", answer: 22, unitLabel: "phút",
            h: ["Giá trị nhỏ nhất nằm ở hàng đầu.", "Giá trị lớn nhất nằm ở hàng cuối.", "Lớn nhất trừ nhỏ nhất."],
            e: "Nhỏ nhất 45, lớn nhất 67: 67 − 45 = 22 phút." }),
          Q({ id: "16.3-06", type: "mc", diff: 2, skill: "sl-range-misconception",
            q: "The sizes (kB) of 30 files on Greg's computer are: 101, 128, 117, 109, 154, 139, 166, 155, 117, 145, 135, 162, 117, 168, 125, 131, 140, 160, 151, 125, 152, 108, 139, 130, 165, 158, 103, 130, 110, 148. Greg says the range is 65 kB. Is he correct?",
            choices: ["No: the range is 168 − 101 = 67 kB", "Yes: 65 kB", "No: the range is 168 kB", "No: the range is 137 kB"], answer: 0,
            h: ["Tìm giá trị lớn nhất và nhỏ nhất trong danh sách.", "Lớn nhất 168; nhỏ nhất là bao nhiêu?", "168 trừ giá trị nhỏ nhất."],
            e: "Lớn nhất 168, nhỏ nhất 101 nên khoảng biến thiên 168 − 101 = 67 kB. Greg sai. (137 là trung vị, không phải khoảng biến thiên.)" }),
          Q({ id: "16.3-07", type: "num", diff: 3, skill: "sl-mean",
            q: "Opaline counted the birds in her garden for 10 days.\nKey: 0 | 4 means 4 birds\n0 | 4 8 9\n1 | 2 4 9\n2 | 0 2 3 7\nWork out the mean number of birds per day. (Opaline averaged the three row means: that method is not correct.)", answer: 15.8, tol: 0.001,
            h: ["Viết ra mọi giá trị của biểu đồ: 4, 8, 9, 12, 14, 19, 20, 22, 23, 27.", "Cộng tất cả các giá trị.", "Chia cho 10 ngày (không chia các trung bình hàng)."],
            e: "Tổng = 4 + 8 + 9 + 12 + 14 + 19 + 20 + 22 + 23 + 27 = 158. Trung bình = 158 ÷ 10 = 15,8. Opaline sai vì các hàng có số giá trị khác nhau (3, 3, 4) nên không được lấy trung bình của các trung bình hàng." }),
          Q({ id: "16.3-08", type: "mc", diff: 3, skill: "sl-choose-average",
            q: "Ashish counted the cars passing his school each day for 12 days.\nKey: 0 | 1 means 1 car\n0 | 1 2 3 6 7 7 9\n1 | 7\n2 | 0 4 4 4\nThe mode is 24, the median is 8 and the mean is 12. Which average best represents the typical day?",
            choices: ["The median, 8: most days had fewer than 10 cars", "The mode, 24, because it is the biggest", "The mean, 12, because it is in the middle of the range", "They are all equally good"], answer: 0,
            h: ["Phần lớn các ngày có khoảng bao nhiêu xe?", "Mốt 24 là giá trị lớn nhất trong dữ liệu: nó có đại diện được cho 'ngày bình thường' không?", "Vài giá trị lớn (17, 20, 24, 24, 24) kéo trung bình lên hay xuống?"],
            e: "7 trong 12 ngày có nhiều nhất 9 xe. Mốt 24 là giá trị lớn nhất nên không đại diện; trung bình 12 bị kéo lên bởi các ngày có 17–24 xe. Trung vị 8 phản ánh tốt nhất ngày điển hình." }),
          Q({ id: "16.3-09", type: "num", diff: 3, skill: "sl-percent",
            q: "The scores of 25 students in class 8B (out of 40) are shown.\nKey: 1 | 8 means 18\n0 | 6 8 8 9 9\n1 | 6\n2 | 5 6 8 8 9\n3 | 0 1 2 3 3 5 6 7 8 8\n4 | 0 0 0 0\nWhat percentage of the students scored more than 32?", answer: 44, unitLabel: "%",
            h: ["Những giá trị nào lớn hơn 32? Chú ý hàng thân 3.", "Ở hàng 3: 33, 33, 35, 36, 37, 38, 38; thêm cả hàng 4.", "Số học sinh đó chia cho 25 rồi nhân 100."],
            e: "Lớn hơn 32: 7 giá trị ở hàng 3 và 4 giá trị 40: tổng 11 học sinh. 11 ÷ 25 = 0,44 = 44%." }),
          Q({ id: "16.3-10", howto: "Count the students who scored at least 40% of the 50 marks, because they do not re-sit. Enter that number of students.", type: "num", diff: 3, skill: "sl-percent",
            q: "The marks of 25 students in class 8T (out of 50) are in this ordered stem-and-leaf diagram.\nKey: 1 | 8 means 18\n0 | 8 9\n1 | 2 8 8\n2 | 4 7 8 8 8 8 9\n3 | 4 6 6 7 8 9 9\n4 | 3 5 6 9\n5 | 0 0\nAny student scoring less than 40% must re-sit the test. How many students do not have to re-sit?", answer: 20,
            h: ["40% của 50 điểm là bao nhiêu điểm?", "Học sinh nào được điểm ít nhất 20?", "Đếm các học sinh có điểm từ 20 trở lên."],
            e: "40% của 50 = 20 điểm. Dưới 20 điểm: 8, 9, 12, 18, 18 (5 em). 25 − 5 = 20 em không phải thi lại." })
        ]
      },
      {
        id: "16.4",
        title: "Pie charts",
        titleVi: "Biểu đồ tròn",
        learn: [
          "Biểu đồ tròn chia hình tròn 360° thành các hình quạt tỉ lệ với tần số. Biểu đồ tròn cho tỉ lệ, không cho số lượng thật.",
          "Góc hình quạt = (tần số ÷ tổng) × 360°. Tổng các góc phải bằng 360°.",
          "Từ góc suy ra số lượng: số lượng = (góc ÷ 360°) × tổng.",
          "Góc chỉ cho tỉ lệ; muốn biết số lượng thật phải biết tổng.",
          "Hai biểu đồ tròn có cùng góc nhưng tổng khác nhau thì số lượng khác nhau."
        ],
        example: {
          q: "40 bạn chọn môn thể thao: bóng đá 16. Tìm góc hình quạt bóng đá.",
          steps: ["Phân số: 16/40", "Nhân 360°: 16 ÷ 40 × 360", "= 144°."],
          prompts: ["Hình quạt thể hiện một phần của cả nhóm. Em viết phần đó dưới dạng phân số nào?","Cả hình tròn là bao nhiêu độ? Nhân phân số với số độ đó.","Tính phép nhân: góc của quạt bóng đá bằng bao nhiêu độ?"],
          answer: {"type":"num","value":144},
          twist: {"q":"Nếu góc hình quạt bóng rổ là 90° thì có bao nhiêu bạn chọn bóng rổ?","answer":{"type":"num","value":10}}
        },
        questions: [
          Q({ id: "16.4-01", type: "num", diff: 1, skill: "pie-count",
            q: "The pie chart for the Dolphins swimming club shows girls 150° and boys 210°. There are 120 children in the Dolphins club. How many girls are in the club?", svg: PC([[150, "Girls 150°"], [210, "Boys 210°"]]), answer: 50,
            h: ["150° là bao nhiêu phần của 360°?", "Rút gọn 150/360.", "Nhân phân số đó với 120 em."],
            e: "150/360 × 120 = 50 em gái." }),
          Q({ id: "16.4-02", type: "num", diff: 1, skill: "pie-count",
            q: "The pie chart for the Seals swimming club shows girls 240° and boys 120°. There are 72 children in the Seals club. How many girls are in the club?", svg: PC([[240, "Girls 240°"], [120, "Boys 120°"]]), answer: 48,
            h: ["240° là bao nhiêu phần của 360°?", "240/360 = 2/3.", "2/3 của 72."],
            e: "240/360 × 72 = 48 em gái." }),
          Q({ id: "16.4-03", type: "mc", diff: 2, skill: "pie-misconception",
            q: "In the Dolphins club (120 children) girls are 150°. In the Seals club (72 children) girls are 240°. Which statement is correct?",
            choices: ["Seals has the greater proportion of girls, but Dolphins has the greater number of girls", "Seals has both the greater proportion and the greater number of girls", "Dolphins has both the greater proportion and the greater number", "Dolphins has the greater proportion, Seals the greater number"], answer: 0,
            h: ["So sánh tỉ lệ: góc 150° hay 240° lớn hơn?", "So sánh số lượng: 150/360 × 120 và 240/360 × 72.", "Tỉ lệ lớn hơn có chắc cho số lượng lớn hơn không?"],
            e: "Tỉ lệ nữ: Seals (240°) lớn hơn Dolphins (150°). Nhưng Dolphins có 50 em gái, Seals có 48 em gái. Biểu đồ tròn chỉ cho tỉ lệ, không cho số lượng thật." }),
          Q({ id: "16.4-04", type: "num", diff: 2, skill: "pie-count",
            q: "Ivan's income in 2019 was $24 000. In his 2019 pie chart, gardening is 90°, washing windows 135° and painting houses 135°. How much did he earn from gardening in 2019?", svg: PC([[90, "garden 90°"], [135, "windows 135°"], [135, "painting 135°"]]), answer: 6000, unitLabel: "$",
            h: ["90° là bao nhiêu phần của hình tròn?", "90/360 = 1/4.", "1/4 của 24 000."],
            e: "90/360 × 24 000 = 6000 đô-la. (Năm 2009: 180/360 × 12 000 = 6000: cùng một số tiền!)" }),
          Q({ id: "16.4-05", type: "num", diff: 2, skill: "pie-count",
            q: "In 2009 Ivan's income was $12 000 and washing windows was 45° of the pie chart. In 2019 (income $24 000) washing windows was 135°. How much did he earn from washing windows in 2019?", answer: 9000, unitLabel: "$",
            h: ["135° là bao nhiêu phần của 360°?", "135/360 = 3/8.", "3/8 của 24 000."],
            e: "135/360 × 24 000 = 9000 đô-la. Năm 2009: 45/360 × 12 000 = 1500 đô-la; năm 2019 gấp 6 lần." }),
          Q({ id: "16.4-06", type: "num", diff: 3, skill: "pie-compare",
            q: "Painting houses was 135° of Ivan's 2009 pie chart (income $12 000) and 135° of his 2019 pie chart (income $24 000). How much more money did he earn from painting houses in 2019 than in 2009?", answer: 4500, unitLabel: "$",
            h: ["Hai góc bằng nhau, vậy hai tỉ lệ bằng nhau: 135/360 = ?", "Tính tiền sơn nhà mỗi năm.", "Lấy hiệu 2019 trừ 2009."],
            e: "135/360 = 3/8. 2009: 3/8 × 12 000 = 4500. 2019: 3/8 × 24 000 = 9000. Chênh lệch 4500 đô-la." }),
          Q({ id: "16.4-07", type: "mc", diff: 3, skill: "pie-misconception",
            q: "In a survey, 480 men and 600 women chose their favourite chocolate. The 'milk' sector is 135° in the men's pie chart and 120° in the women's. Hassan thinks more men than women like milk chocolate. Is he correct?",
            svg: PC([[90, "plain 90°"], [135, "milk 135°"], [60, "white 60°"], [75, "caramel 75°"]]),
            choices: ["No: 180 men but 200 women chose milk chocolate", "Yes: 135° is bigger than 120°", "Yes: men have the bigger sector", "No: the numbers are equal"], answer: 0,
            h: ["Hình quạt lớn hơn có chắc là số người nhiều hơn không?", "Tính số nam chọn sô-cô-la sữa: 135/360 × 480.", "Tính số nữ: 120/360 × 600."],
            e: "Nam: 135/360 × 480 = 180. Nữ: 120/360 × 600 = 200. Số nữ nhiều hơn dù hình quạt nhỏ hơn, vì số nữ trong khảo sát lớn hơn." }),
          Q({ id: "16.4-08", type: "num", diff: 2, skill: "pie-count",
            q: "In the women's chocolate survey (600 women), the 'plain' sector is 81°. How many women chose plain chocolate?", svg: PC([[81, "plain 81°"], [120, "milk 120°"], [84, "white 84°"], [75, "caramel 75°"]]), answer: 135,
            h: ["81° là bao nhiêu phần của 360°?", "81/360 = 9/40.", "9/40 của 600."],
            e: "81/360 × 600 = 135 phụ nữ." }),
          Q({ id: "16.4-09", type: "num", diff: 3, skill: "pie-compare",
            q: "Tennis is the favourite sport of 10% of the 1600 students at Castlehill School and of 14% of the 1100 students at Riverside School. How many more students chose tennis at Castlehill than at Riverside?", answer: 6,
            h: ["Tính 10% của 1600.", "Tính 14% của 1100.", "Lấy hiệu hai số."],
            e: "Castlehill: 10% × 1600 = 160. Riverside: 14% × 1100 = 154. Chênh lệch 160 − 154 = 6 học sinh (dù Riverside có tỉ lệ cao hơn)." }),
          Q({ id: "16.4-10", howto: "Enter the total number of T-shirts of all sizes that the shop sold on Tuesday.", type: "num", diff: 3, skill: "pie-total",
            q: "On Monday a shop sold 144 T-shirts; the small size was 80° of the pie chart. On Tuesday the shop sold the same number of small T-shirts, and the small sector in the Tuesday pie chart is 40°. How many T-shirts did the shop sell altogether on Tuesday?", answer: 288,
            h: ["Số áo cỡ nhỏ bán ngày thứ hai: 80/360 × 144.", "Ngày thứ ba có cùng số áo nhỏ, nhưng chỉ chiếm 40° của hình tròn.", "Nếu 40° ứng với 32 áo, thì 360° ứng với bao nhiêu áo?"],
            e: "Thứ hai: 80/360 × 144 = 32 áo nhỏ. Thứ ba: 40° ứng với 32 áo nên 360° ứng với 32 × 9 = 288 áo." })
        ]
      },
      {
        id: "16.5",
        title: "Representing data",
        titleVi: "Biểu diễn dữ liệu",
        learn: [
          "Chọn biểu đồ theo mục đích: phân loại theo đặc điểm chung → Venn hoặc bảng Carroll; so sánh dữ liệu rời rạc → biểu đồ cột (đôi hoặc chồng); dữ liệu liên tục → biểu đồ tần số; theo thời gian → đồ thị đường; hai số đo → đồ thị phân tán; tỉ lệ các phần → biểu đồ tròn; giữ nguyên giá trị → thân–lá.",
          "Biểu đồ tròn tốt khi cần so sánh phần với tổng, nhưng khó đọc số chính xác.",
          "Biểu đồ thân–lá cho mọi giá trị nhưng chỉ hợp với lượng dữ liệu nhỏ.",
          "Cẩn thận biểu đồ gây hiểu lầm: trục không bắt đầu từ 0, thang đo không đều, thiếu nhãn.",
          "Luôn có tiêu đề, nhãn trục và đơn vị."
        ],
        example: {
          q: "Nhiệt độ ghi mỗi giờ trong một ngày nên dùng biểu đồ nào?",
          steps: ["Dữ liệu thay đổi theo thời gian", "Đồ thị đường theo thời gian cho thấy xu hướng", "Chọn biểu đồ đoạn thẳng theo thời gian."],
          prompts: ["Giờ trong ngày thay đổi liên tục. Dữ liệu này là loại gì, và biến nào quan trọng?","Em muốn người xem thấy điều gì: từng cột riêng lẻ hay xu hướng tăng giảm theo thời gian?","Loại biểu đồ nào nối các điểm theo thứ tự thời gian? Hãy gọi tên nó."],
          answer: {"type":"text","value":"biểu đồ đường","accept":["đồ thị đường","biểu đồ đoạn thẳng","đồ thị đoạn thẳng","biểu đồ đường gấp khúc","line graph","biểu đồ đường thẳng"]},
          twist: {"q":"Nếu muốn so sánh nhiệt độ cao nhất của 5 thành phố trong cùng một ngày thì nên dùng loại biểu đồ nào?","answer":{"type":"text","value":"biểu đồ cột","accept":["đồ thị cột","bar chart","biểu đồ cột đứng","biểu đồ cột ngang"]}}
        },
        questions: [
          Q({ id: "16.5-01", type: "mc", diff: 1, skill: "choose-chart",
            q: "Which type of diagram is best to show the value of gold every Monday morning?",
            choices: ["Time series graph", "Pie chart", "Venn diagram", "Scatter graph"], answer: 0,
            h: ["Dữ liệu được ghi theo mốc nào?", "Ta muốn thấy điều gì: xu hướng hay thành phần?", "Biểu đồ nào có trục ngang là thời gian?"],
            e: "Giá vàng đo mỗi thứ Hai, cần xem nó thay đổi theo thời gian: đồ thị đường theo thời gian." }),
          Q({ id: "16.5-02", type: "mc", diff: 1, skill: "choose-chart",
            q: "Which type of diagram is best to compare the amounts (in grams) of each ingredient in 100 ml of two different salad dressings?",
            choices: ["Compound bar chart", "Time series graph", "Stem-and-leaf diagram", "Frequency diagram"], answer: 0,
            h: ["Đây là so sánh các thành phần của hai loại nước sốt.", "Biểu đồ nào chồng nhiều phần vào một cột?", "Em cần thấy từng thành phần lẫn tổng."],
            e: "Biểu đồ cột chồng (compound bar chart) cho thấy từng thành phần và tổng, dễ so sánh hai loại nước sốt." }),
          Q({ id: "16.5-03", type: "mc", diff: 2, skill: "choose-chart",
            q: "Which type of diagram is best for the ages of the people on a bus if you want to see the data grouped but still keep the exact ages?",
            choices: ["Stem-and-leaf diagram", "Time series graph", "Pie chart", "Scatter graph"], answer: 0,
            h: ["Em muốn thấy gì: nhóm hay giá trị chính xác?", "Biểu đồ nào giữ nguyên từng giá trị?", "Thân–lá."],
            e: "Biểu đồ thân–lá gom dữ liệu theo hàng chục nhưng vẫn giữ mọi giá trị chính xác." }),
          Q({ id: "16.5-04", type: "mc", diff: 2, skill: "choose-chart",
            q: "A riding school records the age and the height of each of its horses. Which diagram best shows whether older horses tend to be taller?",
            choices: ["Scatter graph", "Pie chart", "Time series graph", "Venn diagram"], answer: 0,
            h: ["Mỗi con ngựa có hai số đo: tuổi và chiều cao.", "Biểu đồ nào so sánh hai tập số đo theo từng cặp điểm?", "Mỗi con ngựa là một điểm trên biểu đồ."],
            e: "Khi mỗi đối tượng có hai số đo cần so sánh, dùng đồ thị phân tán (scatter graph)." }),
          Q({ id: "16.5-05", type: "mc", diff: 2, skill: "choose-chart-misconception",
            q: "Can A has beans 48 g, water 32 g, tomato paste 17 g, sugar 2 g, salt 1 g. Can B has beans 67 g, water 30 g, tomato paste 18 g, sugar 8 g, salt 2 g. Arun wants to compare individual AND total amounts of ingredients. Zara suggests two pie charts. Which diagram is better?",
            choices: ["A compound bar chart, because it shows actual amounts and totals", "Two pie charts, because they show the actual grams", "Two pie charts, because they show the total mass", "A time series graph"], answer: 0,
            h: ["Biểu đồ tròn cho biết số gam thật hay chỉ tỉ lệ?", "Hai lon có tổng khối lượng khác nhau; hai biểu đồ tròn có cho thấy điều đó không?", "Biểu đồ nào cho thấy cả từng phần lẫn tổng?"],
            e: "Biểu đồ tròn chỉ cho thấy tỉ lệ, không cho thấy số gam thật hay tổng khối lượng. Để so sánh phần riêng và tổng, dùng biểu đồ cột chồng." }),
          Q({ id: "16.5-06", type: "num", diff: 3, skill: "venn-count",
            q: "30 students study science. 4 study physics, biology and chemistry. 5 study only chemistry and biology, 3 study only chemistry and physics, and 2 study only physics and biology. 6 study only physics, 7 study only biology and 3 study only chemistry. How many students study physics altogether?", answer: 15,
            h: ["Vẽ ba vòng giao nhau (Venn) cho Lý, Sinh, Hóa.", "Các vùng thuộc Lý: chỉ Lý, Lý–Hóa, Lý–Sinh và cả ba môn.", "6 + 3 + 2 + 4."],
            e: "Học Lý = 6 (chỉ Lý) + 3 (Lý–Hóa) + 2 (Lý–Sinh) + 4 (cả ba) = 15. Kiểm tra: tổng cả sơ đồ 6 + 7 + 3 + 5 + 3 + 2 + 4 = 30." }),
          Q({ id: "16.5-07", type: "num", diff: 1, skill: "freq-total",
            q: "Zara recorded the minutes she spent on homework each evening for one month: 0 ≤ d < 20: 1, 20 ≤ d < 40: 6, 40 ≤ d < 60: 2, 60 ≤ d < 80: 8, 80 ≤ d < 100: 14. For how many evenings did she record data?", answer: 31,
            h: ["Mỗi số là số buổi tối trong một nhóm.", "Muốn biết tổng, ta cộng các tần số.", "1 + 6 + 2 + 8 + 14."],
            e: "Tổng số buổi tối = 1 + 6 + 2 + 8 + 14 = 31." }),
          Q({ id: "16.5-08", type: "mc", diff: 2, skill: "choose-chart",
            q: "Which diagram is best to represent Zara's grouped homework times (classes of equal width such as 0 ≤ d < 20)?",
            choices: ["Frequency diagram with no gaps between the bars", "Pie chart with 31 sectors", "Time series graph", "Scatter graph"], answer: 0,
            h: ["Thời gian làm bài là dữ liệu rời rạc hay liên tục?", "Dữ liệu liên tục gom nhóm thì cột có nằm sát nhau không?", "Biểu đồ nào có cột cao bằng tần số?"],
            e: "Thời gian là dữ liệu liên tục đã gom nhóm đều nhau: dùng biểu đồ tần số với các cột sát nhau." }),
          Q({ id: "16.5-09", type: "num", diff: 2, skill: "median",
            q: "These are the numbers of pages Daylen reads each day for four weeks: 25, 5, 18, 34, 16, 35, 12, 12, 20, 14, 8, 27, 39, 9, 30, 11, 22, 19, 7, 27, 10, 32, 27, 33, 11, 24, 17, 22. Work out the median.", answer: 19.5, tol: 0.001,
            h: ["Có 28 giá trị (chẵn), nên có hai giá trị giữa: thứ 14 và thứ 15.", "Sắp xếp tăng dần: 5, 7, 8, 9, 10, 11, 11, 12, 12, 14, 16, 17, 18, 19, 20, ...", "Giá trị thứ 14 là 19, thứ 15 là 20. Lấy trung bình."],
            e: "Sắp xếp 28 giá trị, giá trị thứ 14 là 19 và thứ 15 là 20. Trung vị = (19 + 20) ÷ 2 = 19,5." }),
          Q({ id: "16.5-10", type: "mc", diff: 3, skill: "misleading-graph",
            q: "A bar chart shows sales: Shop A 45, Shop B 50. The vertical axis starts at 40, so bar A looks 5 units tall and bar B 10 units tall. Why is this misleading?",
            choices: ["B looks twice as big as A, but really it is only about 1.1 times as big", "Because bars should be different colours", "Because the bars are not touching", "It is not misleading"], answer: 0,
            h: ["Chiều cao nhìn thấy của hai cột là bao nhiêu?", "So sánh với tỉ số thật 50 : 45.", "Trục không bắt đầu từ 0 sẽ phóng đại sự khác biệt."],
            e: "Trục bắt đầu ở 40 làm cột B trông cao gấp đôi A, trong khi 50/45 ≈ 1,1. Đây là biểu đồ gây hiểu lầm." })
        ]
      },
      {
        id: "16.6",
        title: "Using statistics",
        titleVi: "Sử dụng số liệu thống kê",
        learn: [
          "Trung bình = tổng ÷ số giá trị; trung vị = giá trị giữa; mốt = giá trị xuất hiện nhiều nhất; khoảng biến thiên = lớn nhất − nhỏ nhất.",
          "Khi có giá trị rất lớn hoặc rất nhỏ (ngoại lai), trung bình bị kéo lệch, trung vị tin cậy hơn.",
          "So sánh hai tập dữ liệu: dùng một số trung bình (mean/median) để nói 'bên nào cao hơn' và khoảng biến thiên để nói 'bên nào đều hơn'.",
          "Biết trung bình và số giá trị thì tổng = trung bình × số giá trị: dùng để tìm giá trị bị thiếu.",
          "Bảng tần số: trung bình = Σ(giá trị × tần số) ÷ tổng tần số."
        ],
        example: {
          q: "Trung bình của 5 số là 12. Bốn số đã biết: 8, 10, 15, 11. Tìm số còn lại.",
          steps: ["Tổng năm số: 5 × 12 = 60", "Tổng bốn số: 8 + 10 + 15 + 11 = 44", "Số còn lại: 60 − 44 = 16."],
          prompts: ["Trung bình bằng tổng chia cho số số. Biết trung bình 12 của 5 số, tổng 5 số là bao nhiêu?","Cộng bốn số đã biết.","Số còn lại là phần thiếu giữa hai tổng. Nó bằng bao nhiêu?"],
          answer: {"type":"num","value":16},
          twist: {"q":"Nếu bốn số đã biết là 8, 10, 15, 31 và trung bình 5 số vẫn là 12 thì số còn lại là bao nhiêu? Có gì lạ?","answer":{"type":"num","value":-4}}
        },
        questions: [
          Q({ id: "16.6-01", type: "num", diff: 1, skill: "mean",
            q: "In the 2010 World Cup Spain scored 0, 2, 2, 1, 1, 1, 1 goals in their matches. Work out the mean number of goals per match. Give your answer to 2 decimal places.", answer: 1.14, tol: 0.01,
            h: ["Cộng số bàn thắng của mọi trận.", "0 + 2 + 2 + 1 + 1 + 1 + 1 = ?", "Chia tổng cho số trận (7)."],
            e: "Tổng = 8 bàn; 8 ÷ 7 ≈ 1,14." }),
          Q({ id: "16.6-02", type: "num", diff: 1, skill: "mean",
            q: "Brazil scored 2, 3, 0, 3, 1 goals in their matches. Work out the mean number of goals per match.", answer: 1.8, tol: 0.001,
            h: ["Cộng các bàn thắng.", "2 + 3 + 0 + 3 + 1 = ?", "Chia cho 5 trận."],
            e: "Tổng = 9; 9 ÷ 5 = 1,8. (Brazil trung bình ghi nhiều bàn hơn Tây Ban Nha: 1,8 so với 1,14.)" }),
          Q({ id: "16.6-03", type: "num", diff: 2, skill: "median",
            q: "A teacher measured the heights of Group B: 77 cm, 85 cm, 75 cm, 69 cm, 82 cm, 67 cm, 72 cm. Write the median height.", answer: 75, unitLabel: "cm",
            h: ["Sắp xếp theo thứ tự tăng dần trước.", "67, 69, 72, 75, 77, 82, 85.", "Giá trị ở giữa (thứ 4) là?"],
            e: "Sắp xếp: 67, 69, 72, 75, 77, 82, 85. Trung vị là giá trị thứ 4: 75 cm." }),
          Q({ id: "16.6-04", type: "num", diff: 1, skill: "range",
            q: "Group A's heights are 84 cm, 73 cm, 89 cm, 80 cm and 77 cm. Work out the range.", answer: 16, unitLabel: "cm",
            h: ["Khoảng biến thiên = lớn nhất − nhỏ nhất.", "Lớn nhất 89, nhỏ nhất 73.", "89 − 73."],
            e: "89 − 73 = 16 cm. (Nhóm B có khoảng biến thiên 85 − 67 = 18 cm, nên nhóm A đồng đều hơn.)" }),
          Q({ id: "16.6-05", type: "num", diff: 2, skill: "median",
            q: "Weekly wages ($) of ten office workers: 500, 525, 650, 510, 500, 495, 740, 630, 450, 500. Work out the median weekly wage.", answer: 505, unitLabel: "$",
            h: ["Sắp xếp tăng dần: 450, 495, 500, 500, 500, 510, 525, 630, 650, 740.", "Có 10 giá trị: hai giá trị giữa là thứ 5 và thứ 6.", "(500 + 510) ÷ 2."],
            e: "Hai giá trị giữa là 500 và 510. Trung vị = (500 + 510) ÷ 2 = 505 đô-la." }),
          Q({ id: "16.6-06", type: "mc", diff: 2, skill: "average-choice",
            q: "For the same wages (450, 495, 500, 500, 500, 510, 525, 630, 650, 740) the mean is $550 and the median is $505. Why is the mean higher than the median?",
            choices: ["A few high wages ($650 and $740) pull the mean up", "The mean is always higher than the median", "More people earn above $550 than below", "Because the mode is $500"], answer: 0,
            h: ["So sánh 550 với phần lớn các mức lương.", "Có bao nhiêu mức lương lớn hơn 550?", "Giá trị rất lớn ảnh hưởng đến trung bình thế nào?"],
            e: "Chỉ ba mức lương vượt 550 (630, 650, 740); phần lớn nằm quanh 500. Các giá trị lớn kéo trung bình lên, trong khi trung vị ít bị ảnh hưởng. Trung bình không phải lúc nào cũng cao hơn trung vị." }),
          Q({ id: "16.6-07", type: "mc", diff: 3, skill: "compare-data",
            q: "A nurse measured the total mass of 20 baby boys as 64 kg and the total mass of 15 baby girls as 51 kg. Which babies were heavier on average?",
            choices: ["The girls: 3.4 kg compared with 3.2 kg for the boys", "The boys: their total is bigger", "The boys: there are more of them", "They are equal"], answer: 0,
            h: ["So sánh tổng có công bằng không khi số em bé khác nhau?", "Tính trung bình cho bé trai: 64 ÷ 20.", "Tính trung bình cho bé gái: 51 ÷ 15."],
            e: "Bé trai: 64 ÷ 20 = 3,2 kg. Bé gái: 51 ÷ 15 = 3,4 kg. Dù tổng khối lượng của bé trai lớn hơn (vì nhiều em hơn), trung bình bé gái nặng hơn." }),
          Q({ id: "16.6-08", type: "mc", diff: 3, skill: "compare-data",
            q: "Test marks. Maths: 77, 89, 75, 80, 80, 91, 78, 76, 76, 76. Science: 72, 79, 77, 87, 81, 62, 75, 87. The Maths range is 16 and the Science range is 25. Which group had more consistent scores?",
            choices: ["Maths, because its range is smaller", "Science, because its range is larger", "Maths, because its mean is higher", "They are equally consistent"], answer: 0,
            h: ["'Nhất quán' nghĩa là các điểm gần nhau hay xa nhau?", "Đại lượng nào đo độ phân tán?", "Khoảng biến thiên nhỏ hơn nói lên điều gì?"],
            e: "Khoảng biến thiên nhỏ cho thấy các điểm gần nhau, tức nhất quán hơn. Maths có khoảng 16 < 25 của Science. (Trung bình cao hơn chỉ nói về mức điểm, không nói về độ nhất quán.)" }),
          Q({ id: "16.6-09", type: "num", diff: 2, skill: "mean",
            q: "Niall recorded the temperatures in his second experiment: 28, 29, 28, 33, 32, 31, 32, 29 (°C). Work out the mean temperature.", answer: 30.25, tol: 0.001, unitLabel: "°C",
            h: ["Cộng 8 giá trị.", "28 + 29 + 28 + 33 + 32 + 31 + 32 + 29 = ?", "Chia cho 8."],
            e: "Tổng = 242; 242 ÷ 8 = 30,25 °C." }),
          Q({ id: "16.6-10", type: "mc", diff: 3, skill: "average-choice",
            q: "Goals in 20 matches. Team A: 0 goals 4 times, 1 goal once, 2 goals 4 times, 3 goals twice, 4 goals 4 times, 5 goals 5 times. Team B: 1 goal 6 times, 2 goals once, 3 goals 5 times, 4 goals 4 times, 5 goals 4 times. Marcus says team A scores more on average, Zara says team B does, and Arun says they score the same. Who is right?",
            choices: ["All three could be correct: Marcus uses the mode (5 and 1), Zara the mean (2.8 and 2.95), Arun the median (3 and 3)", "Only Zara, because the mean is the only average", "Only Marcus, because team A scored 5 goals most often", "Only Arun, because the medians are equal"], answer: 0,
            h: ["Tìm mốt của từng đội.", "Tính trung bình: Team A có tổng 56 bàn, Team B có tổng bao nhiêu?", "Tìm trung vị: trung bình của giá trị thứ 10 và 11."],
            e: "Mốt: A là 5, B là 1 (Marcus đúng theo mốt). Trung bình: A = 56 ÷ 20 = 2,8; B = 59 ÷ 20 = 2,95 (Zara đúng theo trung bình). Trung vị cả hai đều là 3 (Arun đúng). Cả ba đều đúng, nhưng với mỗi cách trung bình khác nhau." })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Kho báu nằm sau các bảng số liệu: giải 10 bài thống kê kiểu lớp 7–8 để mở cửa cuối cùng!",
      questions: [
        V({ id: "ch-01", type: "num", diff: 2, skill: "mean",
          q: "Điểm kiểm tra của 8 bạn là 6, 7, 7, 8, 9, 5, 7, 10. Tính điểm trung bình.", answer: 7.375, tol: 0.001,
          h: ["Cộng tám điểm.", "6 + 7 + 7 + 8 + 9 + 5 + 7 + 10 = ?", "Chia cho 8."],
          e: "Tổng 59; 59 ÷ 8 = 7,375." }),
        V({ id: "ch-02", type: "num", diff: 3, skill: "mean-missing",
          q: "Điểm trung bình của năm bài kiểm tra là 7,4. Bốn bài đầu được 8; 6; 9; 7. Hỏi bài thứ năm được mấy điểm?", answer: 7,
          h: ["Tổng năm bài = 5 × 7,4.", "Tổng bốn bài đầu là 30.", "Lấy hiệu."],
          e: "5 × 7,4 = 37; 37 − 30 = 7 điểm." }),
        V({ id: "ch-03", type: "num", diff: 3, skill: "median-missing",
          q: "Sáu số đã sắp xếp tăng dần: 3, 5, 8, a, 13, 15. Biết trung vị là 10. Tìm a.", answer: 12,
          h: ["Số giá trị chẵn: trung vị là trung bình hai số giữa.", "Hai số giữa là 8 và a.", "(8 + a) ÷ 2 = 10."],
          e: "(8 + a) ÷ 2 = 10 nên 8 + a = 20, a = 12." }),
        V({ id: "ch-04", type: "num", diff: 3, skill: "ts-percent",
          q: "Lượng mưa các tháng (mm) trên biểu đồ đoạn thẳng: Th1 80, Th2 120, Th3 200, Th4 260, Th5 180. Từ Th1 đến Th3 lượng mưa tăng bao nhiêu phần trăm?", answer: 150, unitLabel: "%",
          h: ["Mức tăng từ 80 lên 200?", "Chia mức tăng cho giá trị đầu.", "120 ÷ 80 × 100."],
          e: "Tăng 120; 120 ÷ 80 = 1,5 = 150%." }),
        V({ id: "ch-05", type: "num", diff: 3, skill: "sl-median",
          q: "Điểm thi của 14 bạn (khóa 6 | 5 nghĩa là 65):\n5 | 2 8\n6 | 0 5 5 7\n7 | 1 3 6 6 6 9\n8 | 4 8\nTìm trung vị.", answer: 72,
          h: ["14 giá trị: lấy trung bình giá trị thứ 7 và 8.", "Giá trị thứ 7 là 71, thứ 8 là 73.", "(71 + 73) ÷ 2."],
          e: "(71 + 73) ÷ 2 = 72." }),
        V({ id: "ch-06", type: "num", diff: 3, skill: "pie-count",
          q: "120 học sinh chọn môn ngoại khóa. Trên biểu đồ tròn: bóng đá 135°, cầu lông 90°, bơi 60°, phần còn lại là cờ vua. Có bao nhiêu bạn chọn cờ vua?", answer: 25,
          h: ["Góc còn lại cho cờ vua: 360° − (135° + 90° + 60°).", "Góc đó là 75°.", "75/360 × 120."],
          e: "Góc cờ vua = 360 − 285 = 75°. 75 ÷ 360 × 120 = 25 bạn." }),
        V({ id: "ch-07", type: "num", diff: 3, skill: "freq-grouped-mean",
          q: "Thời gian làm bài của 30 bạn: 0–10 phút: 4 bạn; 10–20: 10 bạn; 20–30: 14 bạn; 30–40: 2 bạn. Ước lượng thời gian trung bình (làm tròn 2 chữ số thập phân).", answer: 19.67, tol: 0.01, unitLabel: "phút",
          h: ["Dùng giá trị giữa nhóm 5, 15, 25, 35.", "5×4 + 15×10 + 25×14 + 35×2 = ?", "Chia cho 30."],
          e: "20 + 150 + 350 + 70 = 590; 590 ÷ 30 ≈ 19,67 phút." }),
        V({ id: "ch-08", type: "num", diff: 3, skill: "mean-combine",
          q: "Lớp 8A có 20 học sinh, điểm trung bình 7,5. Lớp 8B có 30 học sinh, điểm trung bình 8. Tính điểm trung bình chung của cả hai lớp.", answer: 7.8, tol: 0.001,
          h: ["Tổng điểm lớp A là bao nhiêu?", "Tổng điểm lớp B là bao nhiêu?", "Chia tổng hai lớp cho 50 học sinh."],
          e: "Lớp A: 20 × 7,5 = 150; lớp B: 30 × 8 = 240. Trung bình = 390 ÷ 50 = 7,8." }),
        V({ id: "ch-09", type: "num", diff: 3, skill: "mean-remove",
          q: "Tám số có trung bình là 12. Nếu bỏ đi số 19 thì trung bình của bảy số còn lại là bao nhiêu?", answer: 11,
          h: ["Tổng tám số là bao nhiêu?", "96 trừ 19 = ?", "Chia cho 7."],
          e: "8 × 12 = 96; 96 − 19 = 77; 77 ÷ 7 = 11." }),
        V({ id: "ch-10", type: "num", diff: 3, skill: "pie-count",
          q: "Trên biểu đồ tròn khảo sát 200 người đi làm, hình quạt 'xe máy' có góc 126°. Có bao nhiêu người đi xe máy?", answer: 70,
          h: ["126° là bao nhiêu phần của 360°?", "126/360 = 7/20.", "7/20 của 200."],
          e: "126 ÷ 360 × 200 = 70 người." })
      ]
    },
    project: null
  });
})();
