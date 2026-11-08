(function () {
  function Q(id, type, diff, skill, source, q, answer, hints, explain, o) {
    o = o || {};
    return {
      id: id, type: type, diff: diff, skill: skill, source: source,
      lang: source === "vn" ? "vi" : "en",
      q: q, svg: o.svg || null, choices: o.choices || null, answer: answer,
      accept: o.accept || [], tol: o.tol || 0, unitLabel: o.unitLabel || "",
      hints: hints, explain: explain, why: o.why || null, howto: o.howto || null
    };
  }
  // Adds Unicode variants (−, ², ³) and star-free variants to a list of ASCII answers.
  function A(list) {
    var out = [];
    list.forEach(function (s) {
      out.push(s);
      var t = s.replace(/\^2/g, "²").replace(/\^3/g, "³").replace(/-/g, "−");
      if (t !== s) out.push(t);
      var u = s.replace(/\*/g, "");
      if (u !== s) out.push(u);
    });
    return out;
  }
  var B = "book", V = "vn";
  var LINE_5_20 =
    '<svg viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="30" x2="290" y2="30" stroke="currentColor" stroke-width="2"/>' +
    '<g stroke="currentColor" stroke-width="2"><line x1="20" y1="24" x2="20" y2="36"/><line x1="70" y1="24" x2="70" y2="36"/><line x1="120" y1="24" x2="120" y2="36"/><line x1="170" y1="24" x2="170" y2="36"/><line x1="220" y1="24" x2="220" y2="36"/><line x1="270" y1="24" x2="270" y2="36"/></g>' +
    '<g font-size="13" fill="currentColor" text-anchor="middle"><text x="20" y="54">0</text><text x="70" y="54">5</text><text x="120" y="54">10</text><text x="170" y="54">15</text><text x="220" y="54">20</text><text x="270" y="54">25</text></g>' +
    '<line x1="76" y1="30" x2="220" y2="30" stroke="#0a7" stroke-width="4"/><circle cx="70" cy="30" r="6" fill="none" stroke="#0a7" stroke-width="3"/><circle cx="220" cy="30" r="6" fill="#0a7" stroke="#0a7" stroke-width="3"/></svg>';

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 2,
    title: "Expressions, formulae and equations",
    titleVi: "Biểu thức, công thức và phương trình",
    strand: "Algebra",
    pages: [29, 65],
    realm: "Xưởng Giả Kim Chữ Cái",
    emoji: "⚗️",
    story: "Trong Xưởng Giả Kim, mỗi lọ thuốc được ghi bằng một công thức viết bằng chữ cái, còn mỗi cánh cửa khóa bằng một phương trình bí ẩn. Em sẽ học viết biểu thức, thế số vào công thức, mở ngoặc, phân tích thừa số, giải phương trình và bất phương trình để trở thành nhà giả kim đại số.",
    glossary: [
      { en: "expression", vi: "biểu thức", def: "Cách viết có chữ và số, không có dấu bằng, ví dụ 3n + 8." },
      { en: "coefficient", vi: "hệ số", def: "Số đứng nhân với biến; trong 3n + 8, hệ số của n là 3." },
      { en: "constant", vi: "hằng số", def: "Số đứng một mình, không đổi, ví dụ 8 trong 3n + 8." },
      { en: "formula", vi: "công thức", def: "Quy tắc viết bằng chữ có dấu bằng, ví dụ F = ma." },
      { en: "equation", vi: "phương trình", def: "Có dấu bằng và ẩn số cần tìm, ví dụ 3x − 7 = 14." },
      { en: "subject of a formula", vi: "đại lượng được tính (chủ thể)", def: "Biến đứng một mình ở vế trái; đổi chủ thể bằng phép toán ngược." },
      { en: "expand brackets", vi: "mở ngoặc", def: "Nhân số hạng ngoài ngoặc với từng số hạng trong ngoặc: 4(x + 3) = 4x + 12." },
      { en: "factorise", vi: "phân tích thành nhân tử", def: "Đặt thừa số chung lớn nhất ra ngoài ngoặc: 4x + 12 = 4(x + 3)." },
      { en: "inequality", vi: "bất phương trình / bất đẳng thức", def: "Dùng <, ≤, >, ≥ để biểu diễn nhiều giá trị, ví dụ x > 5." },
      { en: "closed interval", vi: "đoạn (khoảng đóng)", def: "Khoảng có điểm đầu mút, ví dụ 3 ≤ x ≤ 9 gồm cả 3 và 9." }
    ],
    sections: [
      {
        id: "2.1", title: "Constructing expressions", titleVi: "Lập biểu thức",
        learn: [
          "Dùng chữ cái (biến) thay cho số chưa biết. Trong 3n + 8: n là biến, 3 là hệ số, 8 là hằng số, 3n và 8 là các số hạng.",
          "3 × n viết gọn là 3n; n × n viết gọn là n². n + 5 và 3n là biểu thức bậc nhất, còn n² thì không.",
          "Thứ tự phép tính: ngoặc, lũy thừa, nhân chia, cộng trừ. Muốn cộng trước rồi nhân thì phải đặt dấu ngoặc: 4(x + 2).",
          "Viết x ÷ 3 dưới dạng phân số x/3; \"hai phần ba của n\" là (2/3)n hay 2n/3.",
          "Hai biểu thức tương đương nếu luôn cho cùng giá trị với mọi số, ví dụ 2n/3, (2/3)n và (n/3) × 2."
        ],
        example: {
          q: "Tyler nghĩ một số x. Viết biểu thức cho số mà Tyler có khi cộng 2 vào x rồi nhân 4.",
          steps: ["Cộng 2 vào x: x + 2.", "Phép cộng phải làm trước nên đặt trong ngoặc.", "Nhân 4: 4(x + 2)."],
          prompts: ["Tyler làm phép nào đầu tiên với x? Em viết biểu thức cho số mới đó.","Nếu viết 4 × x + 2 thì 4 đang nhân với cái gì? Có đúng ý Tyler không, em cần thêm ký hiệu nào?","Ghép lại: nhân 4 với toàn bộ kết quả vừa có. Em viết gọn thế nào?"],
          answer: {"type":"text","value":"4(x+2)","accept":["4×(x+2)","(x+2)×4","(x+2)4","4(2+x)","(2+x)×4","4×(2+x)","(2+x)4"]},
          twist: {"q":"Nếu Tyler nhân 4 trước rồi mới cộng 2 thì biểu thức là gì? Khi x = 5, hai biểu thức chênh nhau bao nhiêu?","answer":{"type":"num","value":6}}
        },
        questions: [
          Q("2.1-01", "mc", 1, "terms-coefficients", B, "Trong biểu thức 4x + 9, hệ số của x là gì?", 0,
            ["Hệ số là số đứng nhân với biến. Biến ở đây là chữ nào?", "Số nào đang nhân với x?", "9 đứng một mình, gọi là gì?"],
            "4 nhân với x nên hệ số của x là 4. Số 9 là hằng số. Lỗi hay gặp: chọn 9 hoặc 13.",
            { choices: ["4", "9", "x", "13"] }),
          Q("2.1-02", "text", 1, "write-expression", B, "Jake nghĩ một số n. Anh nhân số đó với 2 rồi cộng 5. Viết biểu thức.", "2n+5",
            ["Nhân n với 2 viết gọn thế nào?", "2n rồi cộng 5.", "Viết hai số hạng nối bằng dấu +."],
            "Nhân với 2: 2n; cộng 5: 2n + 5.", { accept: A(["5+2n", "2*n+5", "n*2+5", "5+2*n"]) }),
          Q("2.1-03", "text", 2, "brackets", B, "Em nghĩ một số x. Em cộng 2 vào số đó rồi nhân kết quả với 4. Viết biểu thức.", "4(x+2)",
            ["Phép nào làm trước, cộng hay nhân?", "Muốn cộng xong mới nhân thì cần dấu gì?", "Đặt x + 2 trong ngoặc rồi nhân 4."],
            "Cộng trước nên (x + 2) trong ngoặc, rồi nhân 4: 4(x + 2). Nếu viết 4x + 2 thì chỉ có x được nhân 4.",
            { accept: A(["4*(x+2)", "(x+2)*4", "(x+2)4", "4x+8"]) }),
          Q("2.1-04", "mc", 2, "order-fractions", B, "Em nghĩ một số n, chia số đó cho 2 rồi cộng 4. Biểu thức nào đúng?", 0,
            ["Phép chia tác dụng lên n hay lên n + 4?", "Chia n cho 2 trước, cộng 4 sau.", "(n + 4)/2 nghĩa là cộng trước rồi mới chia."],
            "Chia trước, cộng sau: n/2 + 4. Biểu thức (n + 4)/2 là cộng 4 trước rồi mới chia — lỗi hay gặp.",
            { choices: ["n/2 + 4", "(n + 4)/2", "n/(2 + 4)", "2n + 4"] }),
          Q("2.1-05", "text", 2, "perimeter-expression", B, "Cạnh ngắn nhất của tam giác là y cm. Cạnh thứ hai dài hơn cạnh ngắn nhất 3 cm. Cạnh thứ ba dài gấp đôi cạnh thứ hai. Viết chu vi tam giác dạng gọn nhất.", "4y+9",
            ["Cạnh thứ hai là gì theo y?", "Cạnh thứ ba = 2(y + 3) = 2y + 6.", "Cộng ba cạnh y + (y + 3) + (2y + 6) rồi thu gọn."],
            "Ba cạnh: y, y + 3, 2y + 6. Chu vi = 4y + 9 (cm).", { accept: A(["9+4y"]) }),
          Q("2.1-06", "text", 2, "cost-expression", B, "Một bao xi măng giá c đô la, một bao sỏi giá g đô la, một bao cát giá s đô la. Viết biểu thức tổng giá của 3 bao xi măng, 4 bao sỏi và 6 bao cát.", "3c+4g+6s",
            ["Giá 3 bao xi măng là gì?", "Tương tự cho sỏi và cát.", "Cộng ba số hạng lại."],
            "3 bao xi măng: 3c; 4 bao sỏi: 4g; 6 bao cát: 6s. Tổng: 3c + 4g + 6s.",
            { accept: A(["3c+6s+4g", "4g+3c+6s", "4g+6s+3c", "6s+3c+4g", "6s+4g+3c"]) }),
          Q("2.1-07", "mc", 3, "fraction-cost", B, "Giá 1 kg táo là a đô la, 1 kg chuối là b đô la, 1 kg cà rốt là c đô la. Tổng giá của 3 kg táo, 1/4 kg chuối và 4/5 kg cà rốt là:", 0,
            ["Giá 3 kg táo là 3a. Còn 1/4 kg chuối?", "1/4 kg chuối giá (1/4) × b = b/4.", "Tương tự với 4/5 kg cà rốt rồi cộng."],
            "3a + b/4 + 4c/5. Các đáp án khác đảo phân số hoặc nhân sai (ví dụ 4b là 4 kg chuối).",
            { choices: ["3a + b/4 + 4c/5", "3a + 4b + 5c/4", "3a + b/4 + 5c/4", "a/3 + b/4 + 4c/5"] }),
          Q("2.1-08", "mc", 3, "write-fractions", B, "Pedro được yêu cầu viết biểu thức cho (a) một phần ba của x cộng 4, (b) 5 trừ hai phần năm của y. Pedro viết (a) x/3 + 4 và (b) 2y/5 − 5. Nhận xét nào đúng?", 1,
            ["Phần (a) có đúng không? Hãy đọc lại: một phần ba của x.", "Phần (b): số nào bị trừ, số nào là số trừ?", "\"5 trừ 2y/5\" khác \"2y/5 trừ 5\" thế nào?"],
            "(a) đúng. (b) phải là 5 − 2y/5; Pedro viết ngược thứ tự (2y/5 − 5 là số đối của kết quả đúng). Phép trừ không giao hoán.",
            { choices: ["Cả hai đều đúng", "Chỉ (a) đúng; (b) phải là 5 − 2y/5", "Chỉ (b) đúng", "Cả hai đều sai"] }),
          Q("2.1-09", "num", 3, "perimeter-substitute", B, "Hình chữ nhật có hai cạnh (1/3)a cm và 4b cm. Chu vi viết gọn là (2/3)a + 8b. Tính chu vi khi a = 6 và b = 2.", 20,
            ["Chu vi = 2 × (dài + rộng). Viết ra với a, b.", "2 × (a/3) = 2a/3 và 2 × 4b = 8b.", "Thế a = 6, b = 2: 2 × 6/3 + 8 × 2."],
            "Thế: (2/3) × 6 + 8 × 2 = 4 + 16 = 20 (cm).", { unitLabel: "cm" }),
          Q("2.1-10", "multi", 2, "equivalent-expressions", B, "Em nghĩ số n, chia cho 3 rồi nhân với 2. Chọn tất cả biểu thức tương đương.", [0, 1, 2],
            ["Chia cho 3 rồi nhân 2 có phải là lấy hai phần ba của n không?", "Thử n = 6 vào mỗi biểu thức: kết quả bao nhiêu?", "n/(3 × 2) = n/6 có cho cùng kết quả với n = 6 không?"],
            "Với n = 6: 2n/3 = 4, (n/3) × 2 = 4, (2/3)n = 4, nhưng n/6 = 1. Nhân 2 với n/3 không phải chia cho 6 — lỗi hay gặp.",
            { choices: ["2n/3", "(n/3) × 2", "(2/3)n", "n/(3 × 2)"] })
        ]
      },
      {
        id: "2.2", title: "Using expressions and formulae", titleVi: "Dùng biểu thức và công thức",
        learn: [
          "Thế số vào biểu thức: thay chữ bằng số rồi tính theo đúng thứ tự phép tính (ngoặc, lũy thừa, nhân chia, cộng trừ).",
          "Cẩn thận với số âm: (−3)² = 9 nhưng −3² = −9; 2y³ khi y = −3 là 2 × (−27), không phải (−6)³.",
          "Công thức là quy tắc có dấu bằng, ví dụ F = ma, v = u + 10t, C = πd. Biến đứng một mình bên trái là đại lượng được tính.",
          "Đổi chủ thể bằng phép toán ngược: từ F = ma, chia hai vế cho a được m = F/a.",
          "Muốn tìm biến trong công thức có thể thế số trước rồi giải phương trình, hoặc đổi chủ thể trước rồi thế số."
        ],
        example: {
          q: "Tính 3x² + 4 khi x = 10; rồi đổi chủ thể công thức h = 24d để tính d.",
          steps: ["3 × 10² + 4: tính lũy thừa trước: 10² = 100.", "3 × 100 + 4 = 304.", "h = 24d: chia hai vế cho 24 được d = h/24."],
          prompts: ["Theo thứ tự thực hiện phép tính, em tính lũy thừa hay nhân với 3 trước? 10² bằng bao nhiêu?","Có x² rồi, bước tiếp theo là nhân rồi cộng. Kết quả bao nhiêu?","Muốn 'gỡ' d ra khỏi 24d, em làm phép ngược nào, và làm ở cả hai vế hay một vế?"],
          answer: {"type":"num","value":304},
          twist: {"q":"Nếu x = −10 thì 3x² + 4 có thay đổi không? Giá trị là bao nhiêu?","answer":{"type":"num","value":304}}
        },
        questions: [
          Q("2.2-01", "num", 1, "substitute", B, "Tính 8m − 5 khi m = −2.", -21,
            ["Thế m = −2: 8 × (−2) − 5.", "8 × (−2) = ?", "Rồi trừ 5."],
            "8 × (−2) = −16; −16 − 5 = −21."),
          Q("2.2-02", "num", 2, "substitute-squares", B, "Tính 4k² khi k = −3.", 36,
            ["Bình phương chỉ tác dụng lên k, không phải 4k. Tính k² trước.", "(−3)² = ?", "Rồi nhân 4."],
            "(−3)² = 9; 4 × 9 = 36."),
          Q("2.2-03", "mc", 2, "error-squares", B, "Dakarai tính x² − 8 khi x = −3 như sau: −3 × −3 − 8 = −9 − 8 = −17. Kết quả đúng là:", 0,
            ["Tính −3 × −3 trước: dấu của tích hai số âm là gì?", "Vậy −3 × −3 bằng bao nhiêu?", "Trừ 8."],
            "(−3)² = +9 (âm × âm), nên 9 − 8 = 1. Dakarai nhầm −3 × −3 = −9.",
            { choices: ["1", "−17", "−1", "17"] }),
          Q("2.2-04", "num", 2, "substitute-cubes", B, "Tính 2y³ khi y = −3.", -54,
            ["y³ = y × y × y. Tính (−3)³ trước.", "(−3)³ = 9 × (−3) = ?", "Rồi nhân 2."],
            "(−3)³ = −27; 2 × (−27) = −54. Lỗi hay gặp: tính (2 × −3)³ = −216."),
          Q("2.2-05", "num", 1, "formula-words", B, "Một hãng taxi tính cước: phí cố định 6 đô la cộng 2 đô la mỗi km. Công thức: C = 6 + 2k. Tính cước cho quãng đường 35 km.", 76,
            ["Thế k = 35 vào công thức.", "2 × 35 = ?", "Cộng thêm phí cố định 6."],
            "C = 6 + 2 × 35 = 6 + 70 = 76 (đô la).", { unitLabel: "đô la" }),
          Q("2.2-06", "num", 2, "formula-brackets", B, "Chiều cao ngựa tính bằng cm: C = 2,5(4H + I), với H là số hand và I là số inch. Tính C khi H = 14 và I = 2.", 145,
            ["Thế số vào trong ngoặc trước: 4 × 14 + 2.", "4 × 14 + 2 = 58.", "Nhân với 2,5."],
            "4 × 14 + 2 = 58; 2,5 × 58 = 145 (cm).", { unitLabel: "cm", tol: 0.001 }),
          Q("2.2-07", "num", 2, "change-subject", B, "Cho công thức f = w/p. Đổi chủ thể thành w rồi tính w khi f = 0,25 và p = 52.", 13,
            ["Muốn w đứng một mình, phải làm gì với phép chia cho p?", "Nhân hai vế với p: w = f × p.", "0,25 × 52 = ?"],
            "w = f × p = 0,25 × 52 = 13.", { howto: "Đề yêu cầu tìm giá trị của w. Chỉ nhập giá trị của w, không cần viết công thức mới.", tol: 0.001 }),
          Q("2.2-08", "mc", 3, "change-subject", B, "Đổi chủ thể của công thức y = 7x − 3 thành x. Kết quả nào đúng?", 0,
            ["Bước ngược đầu tiên: bỏ trừ 3 bằng cách nào?", "Cộng 3 vào hai vế: y + 3 = 7x.", "Rồi chia cả hai vế (cả y + 3) cho 7."],
            "x = (y + 3)/7. Lỗi hay gặp: chỉ chia y cho 7 (y/7 + 3) hoặc quên đổi dấu 3.",
            { choices: ["x = (y + 3)/7", "x = y/7 + 3", "x = (y − 3)/7", "x = 7y + 3"] }),
          Q("2.2-09", "num", 3, "formula-solve", B, "Cho H = 6p − k. Tìm p khi H = 40 và k = 14.", 9,
            ["Thế số: 40 = 6p − 14.", "Cộng 14 vào hai vế: 6p = ?", "Chia hai vế cho 6."],
            "40 = 6p − 14 → 6p = 54 → p = 9. Hoặc đổi chủ thể: p = (H + k)/6 = 54/6 = 9."),
          Q("2.2-10", "num", 3, "formula-compare", B, "Thể tích lăng trụ tam giác V = bhl/2. Lăng trụ A: b = 8, h = 5, l = 18 (cm). Lăng trụ B: b = 9, h = 14, l = 6 (cm). Thể tích lăng trụ B lớn hơn lăng trụ A bao nhiêu cm³?", 18,
            ["Tính V của A: 8 × 5 × 18 ÷ 2.", "V(A) = 360. Tính V(B) = 9 × 14 × 6 ÷ 2.", "Lấy V(B) trừ V(A)."],
            "V(A) = 720/2 = 360; V(B) = 756/2 = 378. B lớn hơn 18 cm³ (Xavier nói A lớn hơn là sai).", { unitLabel: "cm³" })
        ]
      },
      {
        id: "2.3", title: "Expanding brackets", titleVi: "Mở ngoặc",
        learn: [
          "Mở ngoặc: nhân số hạng đứng ngoài với MỌI số hạng trong ngoặc: 3(2b + 5) = 6b + 15.",
          "Khi nhân biến với chính nó thì ra bình phương: a(a − 3) = a² − 3a.",
          "Chú ý dấu: −3(2x + 7) = −6x − 21 (dấu trừ nhân với cả hai số hạng).",
          "Có thể dùng bảng nhân hoặc mũi tên nối để không sót số hạng.",
          "Sau khi mở ngoặc, gộp các số hạng đồng dạng: 8x − 6x = 2x."
        ],
        example: {
          q: "Mở ngoặc và rút gọn 4(2x + 3x²) − x(6 + x).",
          steps: ["4(2x + 3x²) = 8x + 12x².", "−x(6 + x) = −6x − x².", "Gộp: 8x − 6x = 2x và 12x² − x² = 11x². Kết quả: 2x + 11x²."],
          prompts: ["Nhân 4 vào từng hạng tử trong ngoặc: em nhận được hai hạng tử nào?","Dấu trừ đứng trước x(6 + x) tác động lên hạng tử nào khi mở ngoặc? Chú ý dấu của từng hạng tử.","Trong các hạng tử vừa có, những cặp nào cùng phần biến và gộp được? Kết quả cuối là gì?"],
          answer: {"type":"text","value":"2x+11x²","accept":["11x²+2x","2x+11x^2","11x^2+2x","x(2+11x)","x(11x+2)","2x+11×x²"]},
          twist: {"q":"Nếu đổi thành 4(2x + 3x²) − x(6 − x) thì kết quả rút gọn là gì?","answer":{"type":"text","value":"2x+13x²","accept":["13x²+2x","2x+13x^2","13x^2+2x","x(2+13x)","x(13x+2)"]}}
        },
        questions: [
          Q("2.3-01", "text", 1, "expand-single", B, "Mở ngoặc: 4(x + 6).", "4x+24",
            ["Nhân 4 với x được gì?", "Nhân 4 với 6 được gì?", "Nối hai kết quả bằng dấu +."],
            "4 × x = 4x và 4 × 6 = 24 nên 4(x + 6) = 4x + 24.", { accept: A(["24+4x"]) }),
          Q("2.3-02", "text", 1, "expand-single", B, "Mở ngoặc: 7(z − 2).", "7z-14",
            ["Nhân 7 với z.", "Nhân 7 với −2.", "Viết hai kết quả liền nhau."],
            "7 × z = 7z; 7 × (−2) = −14. Vậy 7z − 14.", { accept: A(["-14+7z"]) }),
          Q("2.3-03", "text", 2, "expand-two-letters", B, "Mở ngoặc: 2(2p + 3q).", "4p+6q",
            ["2 nhân với 2p?", "2 nhân với 3q?", "Hai kết quả có đồng dạng để gộp không?"],
            "2 × 2p = 4p; 2 × 3q = 6q. Hai số hạng khác loại nên giữ nguyên: 4p + 6q.", { accept: A(["6q+4p"]) }),
          Q("2.3-04", "text", 2, "expand-letter", B, "Mở ngoặc: n(9 − 8n).", "9n-8n^2",
            ["n × 9 = ?", "n × (−8n) = ? Nhớ n × n = n².", "Nối hai kết quả."],
            "n × 9 = 9n; n × (−8n) = −8n². Vậy 9n − 8n².", { accept: A(["-8n^2+9n"]) }),
          Q("2.3-05", "text", 2, "expand-two-letters", B, "Mở ngoặc: 2d(4c − 7a).", "8cd-14ad",
            ["2d × 4c = ?", "2d × (−7a) = ?", "Chữ có thể viết theo thứ tự bảng chữ cái."],
            "2d × 4c = 8cd; 2d × (−7a) = −14ad. Cả 8cd − 14ad và 8dc − 14da đều đúng.", { accept: A(["8dc-14ad", "8cd-14da", "8dc-14da", "-14ad+8cd", "-14da+8cd", "8cd-14ad"]) }),
          Q("2.3-06", "text", 2, "expand-and-simplify", B, "Mở ngoặc và thu gọn: x(x + 2) + x(x + 5).", "2x^2+7x",
            ["Mở từng ngoặc: x(x + 2) = x² + 2x.", "x(x + 5) = x² + 5x. Cộng hai kết quả.", "Gộp x² + x² và 2x + 5x."],
            "x² + 2x + x² + 5x = 2x² + 7x.", { accept: A(["7x+2x^2"]) }),
          Q("2.3-07", "text", 3, "expand-subtract", B, "Mở ngoặc và thu gọn: 8(x + 5) − 3(2x + 7).", "2x+19",
            ["8(x + 5) = 8x + 40.", "−3(2x + 7): dấu trừ nhân với cả hai số hạng. Kết quả?", "Gộp: (8x − 6x) và (40 − 21)."],
            "8x + 40 − 6x − 21 = 2x + 19. Shen viết +21 là sai vì quên đổi dấu.", { accept: A(["19+2x"]) }),
          Q("2.3-08", "mc", 2, "sign-error", B, "Shen làm: 8(x + 5) − 3(2x + 7) = 8x + 40 − 6x + 21 = 2x + 61. Lỗi sai của Shen là gì?", 1,
            ["Kiểm tra từng số hạng sau khi mở ngoặc thứ hai.", "−3 × 7 bằng bao nhiêu, +21 hay −21?", "Dấu trừ trước ngoặc ảnh hưởng đến những số hạng nào?"],
            "−3 × 7 = −21 chứ không phải +21: Shen chỉ đổi dấu số hạng đầu. Kết quả đúng là 2x + 19.",
            { choices: ["Nhân sai 3 × 2 thành 6", "Quên đổi dấu số hạng thứ hai: phải là −21", "Nhân sai 8 × 5", "Không có lỗi nào"] }),
          Q("2.3-09", "multi", 3, "equivalent-expansions", B, "Chọn tất cả các biểu thức bằng 16x³ + 12x² sau khi mở ngoặc.", [0, 2],
            ["Mở ngoặc từng biểu thức: 4x²(4x + 3) = ?", "x²(12 + 16x) = ?", "Với 2x²(12x + 9) và 3x²(6 + 8x), hệ số của x³ và x² có khớp không?"],
            "4x²(4x + 3) = 16x³ + 12x² ✓; x²(12 + 16x) = 12x² + 16x³ ✓; 2x²(12x + 9) = 24x³ + 18x² ✗; 3x²(6 + 8x) = 18x² + 24x³ ✗.",
            { choices: ["4x²(4x + 3)", "2x²(12x + 9)", "x²(12 + 16x)", "3x²(6 + 8x)"] }),
          Q("2.3-10", "mc", 3, "equivalent-order", B, "Zara mở ngoặc 2d(4c − 7a) được 8cd − 14ad. Arun được 8dc − 14da và nói \"một trong hai ta sai\". Ai đúng?", 2,
            ["Phép nhân có giao hoán không? dc và cd có bằng nhau không?", "da và ad có bằng nhau không?", "Hai kết quả có cùng giá trị khi thế số thử không (c = 2, d = 3, a = 1)?"],
            "Phép nhân giao hoán: dc = cd và da = ad. Hai kết quả giống nhau, chỉ khác thứ tự viết chữ. Cả hai đều đúng.",
            { choices: ["Chỉ Zara đúng", "Chỉ Arun đúng", "Cả hai đúng (chỉ khác thứ tự chữ)", "Cả hai sai"] })
        ]
      },
      {
        id: "2.4", title: "Factorising", titleVi: "Phân tích thành nhân tử",
        learn: [
          "Phân tích thành nhân tử là phép ngược của mở ngoặc: 4x + 12 = 4(x + 3).",
          "Tìm ƯCLN của các số hạng (cả hệ số lẫn chữ), đặt nó ra ngoài ngoặc, rồi chia từng số hạng cho ƯCLN.",
          "ƯCLN của 4a và 8ab là 4a; ƯCLN của x² và 5x là x.",
          "Phải đặt ƯCLN (lớn nhất): 6x + 18 = 6(x + 3), không dừng ở 3(2x + 6).",
          "Kiểm tra bằng cách mở ngoặc ngược lại xem có ra biểu thức ban đầu không."
        ],
        example: {
          q: "Phân tích 4a + 8ab thành nhân tử.",
          steps: ["ƯCLN của 4a và 8ab là 4a.", "Chia: 4a ÷ 4a = 1; 8ab ÷ 4a = 2b.", "4a + 8ab = 4a(1 + 2b). Kiểm tra: 4a × 1 = 4a, 4a × 2b = 8ab."],
          prompts: ["Hai hạng tử 4a và 8ab có nhân tử chung lớn nhất là gì? Xét hệ số và phần biến riêng.","Lấy nhân tử chung ra ngoài thì mỗi hạng tử còn lại gì? Em chia từng hạng tử cho nhân tử chung.","Nếu nhân ngược ngoặc với nhân tử chung, em có trở về biểu thức ban đầu không?"],
          answer: {"type":"text","value":"4a(1+2b)","accept":["4a(2b+1)","(1+2b)4a","(2b+1)4a","4×a×(1+2b)","4×a×(2b+1)","4×a(1+2b)","(1+2b)×4a","(2b+1)×4a"]},
          twist: {"q":"Nếu đổi thành 4a + 8ab + 12a² thì phân tích thành nhân tử như thế nào?","answer":{"type":"text","value":"4a(1+2b+3a)","accept":["4a(1+3a+2b)","4a(2b+1+3a)","4a(2b+3a+1)","4a(3a+1+2b)","4a(3a+2b+1)"]}}
        },
        questions: [
          Q("2.4-01", "text", 1, "factorise-number", B, "Phân tích thành nhân tử: 2x + 10.", "2(x+5)",
            ["ƯCLN của 2x và 10 là gì?", "Chia 2x cho 2 và 10 cho 2.", "Viết 2 ngoài ngoặc, kết quả chia trong ngoặc."],
            "ƯCLN = 2; 2x + 10 = 2(x + 5). Kiểm tra: 2 × x = 2x, 2 × 5 = 10.", { accept: A(["2*(x+5)", "(x+5)*2", "(x+5)2"]) }),
          Q("2.4-02", "text", 1, "factorise-number", B, "Phân tích thành nhân tử: 8 − 12y.", "4(2-3y)",
            ["ƯCLN của 8 và 12 là gì?", "8 ÷ 4 = ? và 12y ÷ 4 = ?", "Giữ dấu trừ giữa hai số hạng."],
            "ƯCLN = 4; 8 − 12y = 4(2 − 3y).", { accept: A(["4*(2-3y)", "(2-3y)*4", "(2-3y)4"]) }),
          Q("2.4-03", "text", 2, "factorise-letter", B, "Phân tích thành nhân tử: 4a + 8ab.", "4a(1+2b)",
            ["ƯCLN của hệ số 4 và 8?", "Cả hai số hạng đều chứa chữ nào?", "Chia 4a cho 4a ra gì? (đừng để trống!)"],
            "ƯCLN = 4a: 4a(1 + 2b). Nhớ 4a ÷ 4a = 1 nên số hạng đầu thành 1.", { accept: A(["4a*(1+2b)", "4a(2b+1)", "(1+2b)4a"]) }),
          Q("2.4-04", "text", 2, "factorise-square", B, "Phân tích thành nhân tử: x² − 5x.", "x(x-5)",
            ["Cả x² và 5x đều có thừa số chung nào?", "x² ÷ x = ? và 5x ÷ x = ?", "Viết x(…)."],
            "ƯCLN = x: x(x − 5). Kiểm tra: x × x = x², x × (−5) = −5x.", { accept: A(["x*(x-5)", "(x-5)x"]) }),
          Q("2.4-05", "text", 2, "factorise-highest", B, "Phân tích thành nhân tử bằng ƯCLN: 18 − 24z.", "6(3-4z)",
            ["ƯCLN của 18 và 24 là bao nhiêu? Có phải 2 hay 3 không?", "ƯCLN lớn nhất là 6.", "18 ÷ 6 = 3 và 24z ÷ 6 = 4z."],
            "ƯCLN(18, 24) = 6 nên 18 − 24z = 6(3 − 4z).", { accept: A(["6*(3-4z)", "(3-4z)*6", "(3-4z)6"]) }),
          Q("2.4-06", "mc", 2, "factorise-complete", B, "Marcus phân tích 6x + 18 được 3(2x + 6), còn Arun được 6(x + 3). Nhận xét nào đúng?", 1,
            ["Mở ngoặc cả hai: có cùng kết quả không?", "Trong ngoặc của Marcus, 2x + 6 còn thừa số chung nào?", "ƯCLN của 6x và 18 là bao nhiêu?"],
            "Mở ngoặc cả hai đều ra 6x + 18 nhưng 3(2x + 6) vẫn còn thừa số chung 2 trong ngoặc. Phải đặt ƯCLN = 6: 6(x + 3).",
            { choices: ["Marcus đúng và đã phân tích hết", "Arun đúng; 3(2x + 6) chưa dùng ƯCLN", "Cả hai đều sai", "Cả hai giống nhau hoàn toàn"] }),
          Q("2.4-07", "mc", 2, "hcf-algebra", B, "ƯCLN của 6x và 9x² là gì?", 1,
            ["ƯCLN của hệ số 6 và 9?", "Chữ chung: x hay x²? Lấy số mũ nhỏ nhất.", "Nhân hệ số chung với chữ chung."],
            "Hệ số chung lớn nhất: 3; chữ chung: x (số mũ nhỏ nhất). ƯCLN = 3x. Lỗi hay gặp: chỉ lấy 3 (Zara) hoặc lấy 9x.",
            { choices: ["3", "3x", "9x", "6x²"] }),
          Q("2.4-08", "text", 3, "factorise-square", B, "Phân tích thành nhân tử: 6y² − 12y.", "6y(y-2)",
            ["ƯCLN của 6 và 12?", "Chữ chung của y² và y?", "6y² ÷ 6y = ? và 12y ÷ 6y = ?"],
            "ƯCLN = 6y: 6y(y − 2). Kiểm tra: 6y × y = 6y², 6y × (−2) = −12y.", { accept: A(["6y*(y-2)", "(y-2)6y"]) }),
          Q("2.4-09", "text", 3, "factorise-three-terms", B, "Phân tích thành nhân tử: 3y² − 9y + 6xy.", "3y(y-3+2x)",
            ["ƯCLN của 3, 9, 6 là gì?", "Cả ba số hạng đều chứa chữ y.", "Chia từng số hạng cho 3y."],
            "ƯCLN = 3y: 3y²/3y = y; −9y/3y = −3; 6xy/3y = 2x. Kết quả: 3y(y − 3 + 2x).",
            { accept: A(["3y(y+2x-3)", "3y(2x+y-3)", "3y(2x-3+y)", "3y(-3+y+2x)", "3y(-3+2x+y)"]) }),
          Q("2.4-10", "text", 3, "expand-collect-factorise", B, "Marcus mở ngoặc 6(3y + 2) − 4(y − 2), thu gọn rồi phân tích thành nhân tử. Kết quả đúng là gì?", "2(7y+10)",
            ["Mở ngoặc: 6(3y + 2) = 18y + 12. Còn −4(y − 2)?", "−4(y − 2) = −4y + 8. Gộp lại.", "14y + 20: ƯCLN là bao nhiêu?"],
            "18y + 12 − 4y + 8 = 14y + 20 = 2(7y + 10). Marcus quên đổi dấu −4 × (−2) = +8 nên sai.",
            { howto: "Nhập biểu thức cuối cùng đã được phân tích thành nhân tử (dạng có dấu ngoặc), không nhập biểu thức chỉ mới thu gọn.", accept: A(["2*(7y+10)", "(7y+10)2", "(7y+10)*2"]) })
        ]
      },
      {
        id: "2.5", title: "Constructing and solving equations", titleVi: "Lập và giải phương trình",
        learn: [
          "Công thức và phương trình đều có dấu bằng; biểu thức thì không. Phương trình có ẩn số cần tìm.",
          "Giải phương trình: dùng phép toán ngược, làm cùng một việc ở cả hai vế (cộng, trừ, nhân, chia).",
          "Có ngoặc thì mở ngoặc trước: 3(x + 3) = 24 → 3x + 9 = 24 → 3x = 15 → x = 5.",
          "Có ẩn ở hai vế thì chuyển ẩn về một vế: 5y − 4 = 3y + 8 → 2y − 4 = 8 → 2y = 12 → y = 6.",
          "Bài toán hình học (hai cạnh bằng nhau, tổng góc tam giác 180°) và bài toán lời văn: lập phương trình rồi giải, sau đó thử lại."
        ],
        example: {
          q: "Giải 5y − 4 = 3y + 8.",
          steps: ["Trừ 3y hai vế: 2y − 4 = 8.", "Cộng 4 hai vế: 2y = 12.", "Chia hai vế cho 2: y = 6. Thử lại: 5 × 6 − 4 = 26 và 3 × 6 + 8 = 26."],
          prompts: ["Có y ở cả hai vế. Em muốn dồn các số hạng chứa y về một bên: phải trừ đi hạng tử nào ở cả hai vế?","Bây giờ còn −4 ở bên có y. Em làm phép nào ở hai vế để đưa nó sang vế kia?","Với 2y = 12, em làm phép nào để tìm y, và kiểm tra kết quả bằng cách nào?"],
          answer: {"type":"num","value":6},
          twist: {"q":"Nếu đổi thành 5y − 4 = 5y + 8 thì chuyện gì xảy ra? Em thử giải rồi giải thích.","answer":null}
        },
        questions: [
          Q("2.5-01", "mc", 1, "formula-expression-equation", B, "9u − vw là một…", 1,
            ["Nó có dấu bằng không?", "Công thức và phương trình đều cần dấu bằng.", "Vậy nó thuộc loại nào?"],
            "9u − vw không có dấu bằng nên là biểu thức. T = 3a² − 8d là công thức; 3y + 7 = 35 là phương trình.",
            { choices: ["Công thức", "Biểu thức", "Phương trình"] }),
          Q("2.5-02", "num", 1, "solve-two-step", B, "Giải 3x + 5 = 26.", 7,
            ["Trừ 5 hai vế: 3x = ?", "3x = 21.", "Chia hai vế cho 3."],
            "3x + 5 = 26 → 3x = 21 → x = 7."),
          Q("2.5-03", "num", 2, "solve-brackets", B, "Giải 4(x − 3) = 24.", 9,
            ["Mở ngoặc: 4x − 12 = 24.", "Cộng 12 hai vế: 4x = ?", "Chia hai vế cho 4."],
            "4x − 12 = 24 → 4x = 36 → x = 9. Cách khác: chia hai vế cho 4 trước: x − 3 = 6."),
          Q("2.5-04", "num", 2, "word-problem-equation", B, "Em gái tôi 15 tuổi. Tuổi bố là x. Một nửa tuổi bố trừ 3 bằng tuổi em gái. Tuổi bố là bao nhiêu?", 36,
            ["Viết phương trình: x/2 − 3 = 15.", "Cộng 3 hai vế: x/2 = ?", "Nhân hai vế với 2."],
            "x/2 − 3 = 15 → x/2 = 18 → x = 36.", { unitLabel: "tuổi" }),
          Q("2.5-05", "num", 2, "solve-both-sides", B, "Giải 6y + 2 = 4y + 18.", 8,
            ["Trừ 4y hai vế: 2y + 2 = 18.", "Trừ 2 hai vế: 2y = ?", "Chia hai vế cho 2."],
            "6y + 2 = 4y + 18 → 2y + 2 = 18 → 2y = 16 → y = 8. Thử: 6 × 8 + 2 = 50 = 4 × 8 + 18."),
          Q("2.5-06", "num", 2, "solve-expand", B, "Giải 5(2x + 3) + 2(x − 4) = 31.", 2,
            ["Mở cả hai ngoặc trước.", "10x + 15 + 2x − 8 = 12x + 7.", "12x + 7 = 31 → 12x = ?"],
            "12x + 7 = 31 → 12x = 24 → x = 2."),
          Q("2.5-07", "num", 3, "geometry-equation", B, "Tam giác cân có hai cạnh bằng nhau là 2y + 7 và 5y − 17 (cm). Tìm y.", 8,
            ["Hai cạnh bằng nhau nên viết 2y + 7 = 5y − 17.", "Chuyển ẩn về một vế: 24 = 3y.", "Chia cho 3. Rồi thử: mỗi cạnh dài bao nhiêu cm?"],
            "2y + 7 = 5y − 17 → 24 = 3y → y = 8. Thử: 2 × 8 + 7 = 23 và 5 × 8 − 17 = 23.", { unitLabel: "" }),
          Q("2.5-08", "num", 3, "angle-equation", B, "Ba góc của một tam giác là 6n°, (2n + 5)° và (n − 5)°. Tìm n.", 20,
            ["Tổng ba góc trong tam giác bằng bao nhiêu độ?", "6n + 2n + 5 + n − 5 = 9n.", "9n = 180."],
            "6n + (2n + 5) + (n − 5) = 9n = 180 nên n = 20. Các góc: 120°, 45°, 15° (tổng 180°)."),
          Q("2.5-09", "num", 3, "rectangle-equations", B, "Hình chữ nhật có hai cạnh dài là 5x − 3 và 37, hai cạnh ngắn là 2(y + 3) và 20 (cm). Tính x + y.", 15,
            ["Cạnh đối bằng nhau: 5x − 3 = 37.", "x = ? Rồi 2(y + 3) = 20: y = ?", "Cộng x và y."],
            "5x − 3 = 37 → x = 8. 2(y + 3) = 20 → y + 3 = 10 → y = 7. Vậy x + y = 15.", { howto: "Tìm x và y, rồi chỉ nhập một số là tổng x + y." }),
          Q("2.5-10", "num", 3, "solve-fraction-answer", B, "Giải 4(2b − 3) = −8b. (Đáp án dạng phân số a/b.)", "3/4",
            ["Mở ngoặc: 8b − 12 = −8b.", "Cộng 8b và 12 hai vế: 16b = ?", "Chia 12 cho 16 rồi rút gọn."],
            "8b − 12 = −8b → 16b = 12 → b = 3/4. Thử: 4(2 × 3/4 − 3) = 4 × (−3/2) = −6 và −8 × 3/4 = −6.", { tol: 0.001 })
        ]
      },
      {
        id: "2.6", title: "Inequalities", titleVi: "Bất phương trình (bất đẳng thức)",
        learn: [
          "< là \"nhỏ hơn\", ≤ là \"nhỏ hơn hoặc bằng\", > là \"lớn hơn\", ≥ là \"lớn hơn hoặc bằng\".",
          "Trên trục số: vòng tròn rỗng cho < và >, vòng tròn đặc cho ≤ và ≥.",
          "3 ≤ x < 9: x lớn hơn hoặc bằng 3 và nhỏ hơn 9 (có 3, không có 9).",
          "Số nguyên nằm trong khoảng: kiểm tra điểm đầu và điểm cuối xem có được lấy không. Với 2 ≤ x < 6: 2, 3, 4, 5.",
          "Nhân hoặc cộng cùng một số vào hai vế cho bất đẳng thức tương đương: x > 5 tương đương 2x > 10 và x − 2 > 3."
        ],
        example: {
          q: "Liệt kê các giá trị nguyên của y thỏa −5 < y ≤ −1.",
          steps: ["y > −5 (không lấy −5) nên số nguyên nhỏ nhất là −4.", "y ≤ −1 (lấy −1) nên số nguyên lớn nhất là −1.", "Các giá trị: −4, −3, −2, −1."],
          prompts: ["Dấu < (không có dấu bằng) nói gì về −5: nó có được tính không? Số nguyên nhỏ nhất thỏa mãn là số nào?","Còn dấu ≤ với −1 thì sao: −1 có được tính không? Đó là số lớn nhất.","Liệt kê mọi số nguyên nằm giữa hai đầu mút (kể cả đầu được phép). Em có bao nhiêu số?"],
          answer: {"type":"text","value":"-4,-3,-2,-1","accept":["−4, −3, −2, −1","-1,-2,-3,-4","-4;-3;-2;-1","{-4,-3,-2,-1}","-4 -3 -2 -1"]},
          twist: {"q":"Nếu đổi thành −5 ≤ y < −1 thì các giá trị nguyên là gì? Tổng của chúng bằng bao nhiêu?","answer":{"type":"num","value":-14}}
        },
        questions: [
          Q("2.6-01", "num", 1, "smallest-integer", B, "Cho 12 ≤ x < 18 (x nguyên). Số nguyên nhỏ nhất x có thể bằng là bao nhiêu?", 12,
            ["Dấu ≤ có cho phép x bằng 12 không?", "Vòng tròn đặc hay rỗng tại 12?", "Vậy số nhỏ nhất là gì?"],
            "x ≥ 12 nên x = 12 được lấy. Ryan nhầm khi cho rằng số nhỏ nhất là 13."),
          Q("2.6-02", "num", 1, "largest-integer", B, "Cho 12 ≤ x < 18 (x nguyên). Số nguyên lớn nhất x có thể bằng là bao nhiêu?", 17,
            ["Dấu < có cho phép x bằng 18 không?", "Vòng tròn tại 18 rỗng hay đặc?", "Số nguyên liền trước 18 là?"],
            "x < 18 nên không lấy 18; lớn nhất là 17."),
          Q("2.6-03", "num", 2, "count-integers", B, "Có bao nhiêu số nguyên x thỏa −9 ≤ x < −1?", 8,
            ["Số nhỏ nhất là −9 (lấy). Số lớn nhất là số nguyên nào liền trước −1?", "Liệt kê: −9, −8, …, −2.", "Đếm."],
            "Các số: −9, −8, −7, −6, −5, −4, −3, −2: có 8 số."),
          Q("2.6-04", "text", 2, "write-inequality", B, "Viết bất đẳng thức: y lớn hơn −2 và nhỏ hơn hoặc bằng 5.", "-2<y<=5",
            ["Số nhỏ hơn: −2 ở bên trái. Dùng < hay ≤ cho −2?", "Số lớn hơn: 5 được lấy hay không?", "Viết dạng _ < y ≤ _."],
            "y > −2 viết −2 < y; y ≤ 5. Kết hợp: −2 < y ≤ 5.", { accept: ["-2<y≤5", "−2<y≤5", "−2<y<=5", "-2 < y <= 5", "-2<y and y<=5", "y>-2 and y<=5"] }),
          Q("2.6-05", "mc", 2, "number-line", B, "Bất đẳng thức nào được biểu diễn trên trục số này (vòng rỗng tại 5, vòng đặc tại 20)?", 1,
            ["Vòng rỗng nghĩa là không lấy đầu mút đó. Tại số nào?", "Vòng đặc nghĩa là lấy đầu mút. Tại số nào?", "Chọn bất đẳng thức khớp."],
            "Vòng rỗng tại 5 (không lấy 5): x > 5. Vòng đặc tại 20 (lấy 20): x ≤ 20. Vậy 5 < x ≤ 20.",
            { svg: LINE_5_20, choices: ["5 ≤ x < 20", "5 < x ≤ 20", "5 < x < 20", "5 ≤ x ≤ 20"] }),
          Q("2.6-06", "num", 2, "equivalent-inequality", B, "x > 8 tương đương với 3x > □. Điền số vào ô.", 24,
            ["Nhân cả hai vế với 3, chiều dấu có đổi không?", "3 × 8 = ?", "Vậy ô trống là mấy?"],
            "Nhân hai vế với số dương 3 giữ nguyên chiều: 3x > 24."),
          Q("2.6-07", "mc", 2, "reverse-inequality", B, "Arun nói 2 < y < 9 có thể viết là 9 > y > 2; Sofia nói có thể viết là 2 > y > 9. Ai đúng?", 0,
            ["Đọc 9 > y > 2 từ phải sang trái: y lớn hơn 2 và nhỏ hơn 9?", "2 > y > 9 nghĩa là y vừa nhỏ hơn 2 vừa lớn hơn 9. Có số nào như thế không?", "Kết luận."],
            "9 > y > 2 là cùng ý với 2 < y < 9 (viết ngược). 2 > y > 9 vô lý vì không số nào vừa < 2 vừa > 9. Chỉ Arun đúng.",
            { choices: ["Chỉ Arun đúng", "Chỉ Sofia đúng", "Cả hai đúng", "Cả hai sai"] }),
          Q("2.6-08", "num", 3, "integers-fractions", B, "Có bao nhiêu số nguyên m thỏa 2½ ≤ m < 7¼?", 5,
            ["2½ nằm giữa hai số nguyên nào? Số nguyên nhỏ nhất ≥ 2½ là gì?", "Số nguyên lớn nhất < 7¼ là gì?", "Liệt kê 3, 4, … rồi đếm."],
            "Số nhỏ nhất là 3 (2 < 2½) và lớn nhất là 7. Các số: 3, 4, 5, 6, 7: có 5 số. Sandeep nhầm khi liệt kê cả 2."),
          Q("2.6-09", "num", 3, "integers-fractions", B, "Tính tổng các số nguyên m thỏa 5¾ ≤ m < 9⅓.", 30,
            ["Số nguyên nhỏ nhất ≥ 5¾ là gì?", "Số nguyên lớn nhất < 9⅓ là gì?", "Cộng các số từ nhỏ nhất đến lớn nhất."],
            "Các số: 6, 7, 8, 9. Tổng = 6 + 7 + 8 + 9 = 30."),
          Q("2.6-10", "mc", 3, "combine-inequalities", B, "Có thể viết m > 14 và m < 8 thành một bất đẳng thức dạng a < m < b không?", 1,
            ["Số nào vừa lớn hơn 14 vừa nhỏ hơn 8?", "Thử m = 10: có thỏa cả hai không?", "Kết luận về tập giá trị."],
            "Không có số nào vừa > 14 vừa < 8, nên không viết được thành một bất đẳng thức (tập nghiệm rỗng). Lỗi hay gặp: viết 8 < m < 14, đó là m > 8 và m < 14.",
            { choices: ["Có: 8 < m < 14", "Không: không có số nào thỏa cả hai", "Có: 14 < m < 8", "Có: 8 > m > 14"] })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Cánh cổng cuối của Xưởng Giả Kim chỉ mở với những bài đại số kiểu thi lớp 7–8: rút gọn, phân tích, giải phương trình, bất phương trình và bài toán lập phương trình.",
      questions: [
        Q("ch-01", "text", 2, "simplify-expression", V, "Rút gọn biểu thức A = 4(x + 3) − 3(x − 2).", "x+18",
          ["Mở ngoặc thứ nhất: 4(x + 3) = ?", "−3(x − 2) = −3x + 6 (chú ý dấu).", "Gộp 4x − 3x và 12 + 6."],
          "4x + 12 − 3x + 6 = x + 18.", { accept: A(["18+x"]) }),
        Q("ch-02", "num", 3, "value-by-substitution", V, "Cho 2a − 3b = 5. Tính giá trị của biểu thức 6a − 9b + 4.", 19,
          ["Biểu thức 6a − 9b có liên hệ gì với 2a − 3b?", "6a − 9b = 3(2a − 3b).", "Thay 2a − 3b = 5 rồi cộng 4."],
          "6a − 9b + 4 = 3(2a − 3b) + 4 = 3 × 5 + 4 = 19. Không cần tìm riêng a và b."),
        Q("ch-03", "text", 3, "factorise-vn", V, "Phân tích đa thức 12x²y − 18xy² thành nhân tử.", "6xy(2x-3y)",
          ["ƯCLN của 12 và 18?", "Phần biến chung của x²y và xy²?", "Chia từng số hạng cho 6xy."],
          "ƯCLN = 6xy: 12x²y ÷ 6xy = 2x; 18xy² ÷ 6xy = 3y. Kết quả 6xy(2x − 3y).", { accept: A(["6yx(2x-3y)", "6xy*(2x-3y)", "6xy(-3y+2x)", "(2x-3y)6xy"]) }),
        Q("ch-04", "num", 2, "solve-linear-vn", V, "Giải phương trình 3(2x − 1) − 2(x + 4) = 5.", 4,
          ["Mở ngoặc cả hai (chú ý dấu của −2).", "6x − 3 − 2x − 8 = 4x − 11.", "4x − 11 = 5 → 4x = ?"],
          "4x − 11 = 5 → 4x = 16 → x = 4."),
        Q("ch-05", "num", 3, "solve-fraction-vn", V, "Giải phương trình (2x − 1)/3 = (x + 4)/2.", 14,
          ["Nhân chéo hoặc nhân hai vế với 6 để khử mẫu.", "2(2x − 1) = 3(x + 4).", "4x − 2 = 3x + 12 → x = ?"],
          "Nhân hai vế với 6: 2(2x − 1) = 3(x + 4) → 4x − 2 = 3x + 12 → x = 14. Thử: 27/3 = 9 và 18/2 = 9."),
        Q("ch-06", "num", 3, "inequality-negative", V, "Tìm số nguyên lớn nhất thỏa bất phương trình 7 − 2x > −3.", 4,
          ["Trừ 7 hai vế: −2x > −10.", "Chia hai vế cho −2: chiều bất đẳng thức thay đổi thế nào?", "x < 5; số nguyên lớn nhất nhỏ hơn 5?"],
          "7 − 2x > −3 → −2x > −10 → x < 5 (đổi chiều khi chia cho số âm). Số nguyên lớn nhất là 4."),
        Q("ch-07", "num", 3, "age-problem", V, "Hiện nay tuổi mẹ gấp 3 lần tuổi con. Sau 5 năm nữa, tổng tuổi hai mẹ con là 58. Hỏi hiện nay con bao nhiêu tuổi?", 12,
          ["Gọi tuổi con hiện nay là x. Tuổi mẹ là gì?", "Sau 5 năm: con x + 5, mẹ 3x + 5.", "(x + 5) + (3x + 5) = 58."],
          "4x + 10 = 58 → 4x = 48 → x = 12. Mẹ 36 tuổi; sau 5 năm: 17 + 41 = 58.", { unitLabel: "tuổi" }),
        Q("ch-08", "num", 3, "rectangle-problem", V, "Một mảnh vườn hình chữ nhật có chu vi 56 m, chiều dài hơn chiều rộng 6 m. Tính diện tích mảnh vườn.", 187,
          ["Gọi chiều rộng x. Chiều dài là gì?", "Chu vi: 2(x + x + 6) = 56.", "Tìm x, rồi nhân dài × rộng."],
          "2(2x + 6) = 56 → 2x + 6 = 28 → x = 11. Dài 17 m; diện tích 11 × 17 = 187 m².", { unitLabel: "m²" }),
        Q("ch-09", "num", 3, "triangle-angles", V, "Ba góc của một tam giác là x°, (2x + 10)° và (3x − 10)°. Góc lớn nhất bằng bao nhiêu độ?", 80,
          ["Tổng ba góc bằng bao nhiêu độ?", "x + 2x + 10 + 3x − 10 = 6x = 180.", "Tìm x rồi tính từng góc."],
          "6x = 180 → x = 30. Các góc: 30°, 70°, 80°. Góc lớn nhất 80°.", { unitLabel: "°" }),
        Q("ch-10", "num", 3, "compound-inequality", V, "Tìm tổng tất cả các số nguyên n thỏa 2 < (3n − 1)/4 ≤ 5.", 22,
          ["Nhân cả ba phần với 4: 8 < 3n − 1 ≤ 20.", "Cộng 1: 9 < 3n ≤ 21 → chia 3.", "3 < n ≤ 7: liệt kê và cộng."],
          "8 < 3n − 1 ≤ 20 → 9 < 3n ≤ 21 → 3 < n ≤ 7. Các số: 4, 5, 6, 7, tổng 22.", { howto: "Tìm tất cả các số nguyên n thỏa mãn, rồi chỉ nhập tổng của chúng." })
      ]
    },
    project: {
      title: "Algebra chains", titleVi: "Chuỗi đại số",
      pages: [65],
      goal: "Khám phá chuỗi đại số: đầu vào được thế vào biểu thức thứ nhất, kết quả lại được thế vào biểu thức thứ hai. Em sắp xếp tám thẻ biểu thức thành bốn chuỗi sao cho đầu vào 1, 2, 3, 4 cho đầu ra 40, 30, 20, 10.",
      steps: [
        "Thử một chuỗi mẫu: đầu vào 3, thẻ 4x − 10 cho 2, rồi thẻ 8x + 4 cho 20. Kiểm tra lại bằng tay.",
        "Chép tám thẻ: 2x + 3, 2(x + 1), 5x − 7, 12 − 2x, 3x − 4, 7x + 5, 3(x − 4), 8x − 2.",
        "Với đầu vào 1, thử từng thẻ đầu tiên và xem đầu ra của nó có thể đi qua thẻ nào để ra 40.",
        "Làm ngược từ đầu ra: muốn ra 40 thì thẻ cuối phải nhận số nào? Dùng phương trình để tìm.",
        "Ghi bảng bốn chuỗi hoàn chỉnh, mỗi thẻ chỉ dùng một lần, rồi thử lại từng chuỗi."
      ],
      extensions: [
        "Chọn hai thẻ và một số đầu vào, tính đầu ra, rồi đố bạn đoán em đã dùng thẻ nào.",
        "Làm chuỗi ba thẻ: bạn của em còn đoán được các thẻ không? Vì sao khó hơn?",
        "Tự thiết kế tám thẻ mới để có đúng bốn chuỗi cho đầu ra liên tiếp 10, 20, 30, 40."
      ],
      reflect: [
        "Làm ngược từ đầu ra có dễ hơn thử từ đầu vào không? Vì sao?",
        "Mỗi thẻ biểu thức giống một hàm máy; phép toán ngược của mỗi thẻ là gì?",
        "Chuỗi hai thẻ có thể thay bằng một thẻ duy nhất không? Hãy thử với 4x − 10 rồi 8x + 4."
      ]
    }
  });
  // 🎲 number variants for spaced review (js/variants*.js)
  const GEN = {"2.2-01": "subst-neg", "2.2-02": "subst-pow", "2.2-04": "subst-pow", "2.2-05": "fixed-plus", "2.2-09": "change-subject", "2.5-02": "solve2", "2.5-03": "solve-bracket", "2.5-04": "word-age", "2.5-05": "solve-both", "2.5-07": "solve-both", "2.5-08": "tri-angles-expr", "2.6-01": "int-bound", "2.6-02": "int-bound", "2.6-03": "int-range", "2.6-08": "int-range", "2.6-09": "int-sum-range"};
  window.GAME_DATA.units.filter(function (u) { return u.id === 2; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
