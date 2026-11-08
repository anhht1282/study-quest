(function () {
  var Q = function (id, type, diff, skill, source, q, answer, hints, explain, o) {
    return Object.assign({ id: id, type: type, diff: diff, skill: skill, source: source, lang: source === "vn" ? "vi" : "en",
      q: q, svg: null, choices: null, answer: answer, accept: [], tol: 0, unitLabel: "", hints: hints, explain: explain, why: null }, o || {});
  };
  var B = "book", V = "vn";

  var s31 = [
    Q("3.1-01", "num", 1, "powers-of-10", B, "Write 10⁵ as an ordinary number.", 100000,
      ["10⁵ nghĩa là nhân mấy số 10 với nhau?", "Số mũ cho biết có bao nhiêu chữ số 0 đứng sau chữ số 1.", "Viết số 1 rồi thêm đúng 5 chữ số 0."],
      "10⁵ = 10×10×10×10×10 = 100 000 (số 1 theo sau 5 chữ số 0)."),
    Q("3.1-02", "num", 1, "powers-of-10", B, "1 000 000 000 = 10ⁿ. What is n?", 9,
      ["Đếm số chữ số 0 đứng sau chữ số 1.", "Có 9 chữ số 0 sau số 1."],
      "Số mũ bằng số chữ số 0: 1 000 000 000 có 9 chữ số 0 nên bằng 10⁹.", { hints: ["Số mũ của 10 liên quan thế nào đến số chữ số 0?", "Đếm các chữ số 0 sau chữ số 1.", "Số em đếm được chính là n."] }),
    Q("3.1-03", "num", 1, "multiply-pow10", B, "Work out 45 × 10³.", 45000,
      ["10³ bằng bao nhiêu?", "Nhân 45 với 1000.", "Thêm mấy chữ số 0 vào sau 45?"],
      "45 × 10³ = 45 × 1000 = 45 000."),
    Q("3.1-04", "num", 2, "multiply-pow10", B, "Work out 4.2 × 10⁴.", 42000,
      ["10⁴ bằng bao nhiêu?", "Mỗi lần nhân với 10, dấu phẩy dịch về phía nào?", "Dịch dấu phẩy 4 hàng sang phải, thiếu chữ số thì điền 0."],
      "Nhân với 10⁴ là dời dấu phẩy 4 hàng sang phải: 4.2 → 42 000."),
    Q("3.1-05", "num", 2, "divide-pow10", B, "Work out 7 300 000 ÷ 10⁴.", 730,
      ["10⁴ có mấy chữ số 0?", "Chia cho 10⁴ là dời dấu phẩy mấy hàng sang trái?", "7 300 000 có 5 chữ số 0 cuối; bỏ đi 4 chữ số 0 còn lại gì?"],
      "7 300 000 ÷ 10 000 = 730. Bỏ 4 chữ số 0 ở cuối được 730."),
    Q("3.1-06", "mc", 2, "multiply-pow10", B, "Work out 3.5 × 10².", 1,
      ["3.5 × 100 — nhân 3.5 với 100, dấu phẩy dịch thế nào?", "Dịch dấu phẩy 2 hàng sang phải: 3.5 → 35.0 → 350.", "Chọn đáp án có giá trị 350."],
      "Đáp án 350. Lỗi thường gặp: 'thêm hai chữ số 0' vào 3.5 thành 3.500 — nhưng thêm 0 sau phần thập phân không đổi giá trị. Phải dời dấu phẩy.",
      { choices: ["3.500", "350", "35", "0.035"] }),
    Q("3.1-07", "num", 3, "multiply-pow10", B, "Work out 0.39 × 10⁵.", 39000,
      ["10⁵ là 100 000. Dấu phẩy phải dời mấy hàng?", "0.39 có 2 chữ số sau dấu phẩy; dời 5 hàng thì dùng hết 2 chữ số và còn thiếu mấy hàng?", "Điền thêm 3 chữ số 0: 39 rồi 000."],
      "0.39 × 100 000 = 39 000. Dời dấu phẩy 5 hàng: 0.39 → 39 → thêm 3 số 0."),
    Q("3.1-08", "num", 3, "divide-pow10", B, "Work out 36 800 000 ÷ 10⁶.", 36.8,
      ["10⁶ có mấy chữ số 0?", "Dời dấu phẩy 6 hàng sang trái, bắt đầu từ cuối số.", "36 800 000 → bỏ 6 hàng → 36.8."],
      "36 800 000 ÷ 1 000 000 = 36.8 (dấu phẩy dời 6 hàng sang trái)."),
    Q("3.1-09", "mc", 3, "divide-pow10", B, "Marcus says: 'To divide a whole number by 10⁴, just cross off four zeros from the end.' When does this rule NOT work as it stands?", 1,
      ["Thử 5 200 ÷ 10⁴: có đủ 4 chữ số 0 để gạch không?", "Khi số có ít hơn 4 chữ số 0 ở cuối thì sao?", "Khi đó phải dời dấu phẩy chứ không gạch được."],
      "Quy tắc chỉ dùng trực tiếp khi số có ít nhất 4 chữ số 0 ở cuối. Ví dụ 5 200 ÷ 10 000 = 0.52, phải dời dấu phẩy.",
      { choices: ["It never works", "When the number has fewer than four zeros at the end", "When the number is even", "When the number is greater than 10⁴"] })
  ];

  var s32 = [
    Q("3.2-01", "num", 1, "round-dp", B, "Round 12.8943 to 3 decimal places.", 12.894,
      ["Chữ số thứ 3 sau dấu phẩy là gì?", "Chữ số ngay bên phải nó là mấy?", "Nhỏ hơn 5 thì giữ nguyên chữ số đang xét."],
      "12.894|3: chữ số bên phải là 3 < 5 nên giữ nguyên: 12.894."),
    Q("3.2-02", "num", 1, "round-dp", B, "Round 127.99652 to 3 decimal places.", 127.997,
      ["Gạch một đường sau chữ số thứ 3 sau dấu phẩy.", "Chữ số ngay sau đường gạch là mấy?", "Từ 5 trở lên thì tăng chữ số trước đó thêm 1."],
      "127.996|52: chữ số kế là 5 nên 6 tăng thành 7: 127.997."),
    Q("3.2-03", "num", 2, "round-dp", B, "Round 0.20053 to 3 decimal places.", 0.201,
      ["Chữ số thứ 3 sau dấu phẩy là mấy?", "Chữ số tiếp theo là 5 hay nhỏ hơn?", "0 tăng thêm 1 thành mấy?"],
      "0.200|53: chữ số kế là 5 nên 0 thành 1: 0.201."),
    Q("3.2-04", "num", 2, "round-dp", B, "Round 9.349612 to 2 decimal places.", 9.35,
      ["Gạch sau chữ số thứ 2 sau dấu phẩy.", "Chữ số kế là mấy?", "4 tăng lên 1 thành mấy?"],
      "9.34|9612: chữ số kế là 9 nên 4 thành 5: 9.35."),
    Q("3.2-05", "mc", 2, "round-dp", B, "Round 0.0089732 to 4 decimal places.", 0,
      ["Chữ số thứ 4 sau dấu phẩy là số nào?", "Chữ số kế là 7 — tăng hay giữ?", "8 tăng thêm 1 thì ra 9, hãy viết đủ 4 chữ số."],
      "0.0089|732: chữ số kế là 7 ≥ 5 nên 9 tăng 1 thành 10, nhớ sang hàng trước: 0.0090. Lỗi thường gặp: giữ 0.0089 (cắt bỏ) mà không làm tròn lên.",
      { choices: ["0.0090", "0.0089", "0.0098", "0.0100"] }),
    Q("3.2-06", "num", 2, "round-dp", B, "Round 99.9961 to 1 decimal place.", 100,
      ["Chữ số thứ nhất sau dấu phẩy là 9; chữ số kế là 9.", "9 tăng 1 thì thành 10, nhớ 1 sang hàng đơn vị.", "99.9 + 0.1 = ?"],
      "99.9|961: tăng 0.1 được 100.0, tức 100.",
      { tol: 0.001 }),
    Q("3.2-07", "num", 2, "round-context", B, "Three friends share a bill of $46.48 equally. Work out each share, rounded to 2 decimal places.", 15.49,
      ["Tính 46.48 ÷ 3 trên máy tính.", "Kết quả là 15.4933… — làm tròn đến 2 chữ số thập phân.", "Chữ số thứ 3 là 3, nhỏ hơn 5."],
      "46.48 ÷ 3 = 15.4933… ≈ 15.49 (tiền thường làm tròn đến hai chữ số thập phân, tức xu).",
      { unitLabel: "$", tol: 0.001 }),
    Q("3.2-08", "multi", 3, "round-dp", B, "A pedometer shows 9.55 km (2 d.p.). Which of these could be the real distance? Choose all.", [1, 2],
      ["Số thật khi làm tròn đến 2 chữ số thập phân phải ra 9.55.", "Thử từng số: gạch sau chữ số thứ 2, nhìn chữ số kế.", "9.545 làm tròn lên hay xuống? 9.555 thì sao?"],
      "9.545 → 9.55 và 9.549 → 9.55. Còn 9.544 → 9.54; 9.555 và 9.556 → 9.56. Khoảng thật là từ 9.545 đến dưới 9.555.",
      { choices: ["9.544", "9.545", "9.549", "9.555", "9.556"] }),
    Q("3.2-09", "num", 3, "round-reasoning", B, "What is the smallest number with two decimal places that rounds to 5.2 when rounded to 1 d.p.?", 5.15,
      ["Số làm tròn thành 5.2 nằm quanh 5.2; số nhỏ nhất ở 'nửa dưới'.", "5.1x tăng lên 5.2 khi chữ số hàng phần trăm là bao nhiêu?", "Hàng phần trăm nhỏ nhất làm tròn lên là 5."],
      "5.15 làm tròn thành 5.2 (vì chữ số kế là 5). 5.14 thì thành 5.1.",
      { tol: 0.001 })
  ];

  var ch = [
    Q("ch-01", "num", 2, "round-context", V, "Chia đều 100 000 đồng cho 7 bạn. Mỗi bạn nhận được bao nhiêu đồng, làm tròn đến đồng (số nguyên)?", 14286,
      ["Thực hiện phép chia 100 000 ÷ 7.", "Kết quả 14285,714… — chữ số thập phân đầu tiên là mấy?", "7 ≥ 5, làm tròn lên."],
      "100 000 ÷ 7 = 14285,714… ≈ 14 286 đồng.", { unitLabel: "đồng" }),
    Q("ch-02", "num", 2, "mental-pow10", V, "Tính nhanh: 3,75 × 10³ + 0,25 × 10³.", 4000,
      ["Hai số hạng có thừa số chung là gì?", "Đặt 10³ ra ngoài: (3,75 + 0,25) × 10³.", "3,75 + 0,25 = ?"],
      "(3,75 + 0,25) × 1000 = 4 × 1000 = 4000."),
    Q("ch-03", "num", 2, "find-x-pow10", V, "Tìm x biết x ÷ 10³ = 4,07.", 4070,
      ["Phép nhân nào là phép ngược của chia cho 10³?", "x = 4,07 × 10³.", "Dời dấu phẩy 3 hàng sang phải."],
      "x = 4,07 × 1000 = 4070."),
    Q("ch-04", "num", 3, "hidden-digit", V, "Số 3,4□6 (□ là một chữ số) làm tròn đến một chữ số thập phân được 3,5. Chữ số □ nhỏ nhất có thể là bao nhiêu?", 5,
      ["Làm tròn đến 1 chữ số thập phân thì nhìn chữ số hàng nào?", "Hàng phần trăm chính là □; để 4 tăng lên thành 5, □ phải thế nào?", "□ ≥ 5, giá trị nhỏ nhất là?"],
      "Chữ số quyết định là hàng phần trăm (□). Cần □ ≥ 5 để 3,4 làm tròn lên 3,5. Nhỏ nhất: 5.", { howto: "□ là một chữ số bị che trong số 3,4□6. Nhập chữ số □ nhỏ nhất sao cho số đó làm tròn đến một chữ số thập phân được 3,5." }),
    Q("ch-05", "num", 3, "round-estimate", V, "Làm tròn từng số đến 1 chữ số thập phân rồi cộng: 2,47 + 3,58 + 1,96. Kết quả bằng bao nhiêu?", 8.1,
      ["Làm tròn 2,47; 3,58; 1,96 lần lượt thành?", "2,5 ; 3,6 ; 2,0.", "Cộng ba số vừa làm tròn."],
      "2,5 + 3,6 + 2,0 = 8,1 (tổng đúng là 8,01, sai khác nhỏ).", { tol: 0.001 }),
    Q("ch-06", "num", 3, "hidden-digit", V, "Số lớn nhất có ba chữ số thập phân mà làm tròn đến hàng phần mười được 6,3 là số nào?", 6.349,
      ["Số làm tròn thành 6,3 nằm trong khoảng nào?", "Số lớn nhất còn giữ 6,3: hàng phần trăm phải nhỏ hơn 5.", "Hàng phần trăm lớn nhất là 4, các hàng sau lớn nhất là 9."],
      "Chữ số hàng phần trăm tối đa là 4 (nếu 5 sẽ lên 6,4), hàng phần nghìn tối đa 9: 6,349.", { tol: 0.0001 }),
    Q("ch-07", "mc", 3, "round-trap", V, "Bạn An làm tròn 4,449 đến 1 chữ số thập phân như sau: 4,449 → 4,45 → 4,5. Bạn An làm đúng hay sai?", 1,
      ["Làm tròn đến 1 chữ số thập phân thì chỉ cần nhìn chữ số nào?", "Chữ số hàng phần trăm của 4,449 là mấy?", "4 < 5 nên giữ nguyên 4,4."],
      "Làm tròn chỉ nhìn một chữ số ngay sau hàng cần làm tròn (4). Kết quả đúng: 4,4. Không được làm tròn nhiều lần liên tiếp.",
      { choices: ["Đúng, kết quả 4,5", "Sai, kết quả đúng là 4,4", "Sai, kết quả đúng là 4,3", "Sai, kết quả đúng là 5"] }),
    Q("ch-08", "num", 3, "word-pow10", V, "Một nhà máy làm 3,6 × 10² hộp bút mỗi ngày, mỗi hộp có 10³ cái bút. Hỏi cần bao nhiêu ngày để làm đủ 7 200 000 cái bút?", 20,
      ["Mỗi ngày làm bao nhiêu cái bút? Tính 360 × 1000.", "360 000 cái mỗi ngày.", "7 200 000 ÷ 360 000 = ?"],
      "Mỗi ngày: 360 × 1000 = 360 000 cái. Số ngày: 7 200 000 ÷ 360 000 = 20.", { unitLabel: "ngày" }),
    Q("ch-09", "num", 3, "divide-pow10", V, "Tính: 8 460 000 000 ÷ 10⁵.", 84600,
      ["10⁵ = 100 000: bỏ bao nhiêu chữ số 0?", "8 460 000 000 có 7 chữ số 0 ở cuối.", "Bỏ 5 chữ số 0, còn 84600."],
      "8 460 000 000 ÷ 100 000 = 84 600.")
  ];

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 3, title: "Place value and rounding", titleVi: "Giá trị theo vị trí và làm tròn", strand: "Number", pages: [62, 75],
    realm: "Chợ Nổi Trăm Xanh", emoji: "🍎",
    story: "Em đến chợ nổi miền Tây, nơi người bán hàng luôn nhân chia với 10, 100, 1000 và làm tròn tiền thật nhanh. Muốn mặc cả giỏi và không bao giờ thối nhầm tiền, em cần thành thạo giá trị của chữ số và cách làm tròn!",
    glossary: [
      { en: "power of 10", vi: "lũy thừa của 10", def: "Các số 10, 100, 1000… viết dưới dạng 10ⁿ." },
      { en: "index", vi: "số mũ", def: "Số nhỏ viết trên cao cho biết nhân bao nhiêu thừa số 10." },
      { en: "decimal place", vi: "chữ số thập phân", def: "Vị trí của chữ số sau dấu phẩy." },
      { en: "round", vi: "làm tròn", def: "Thay một số bằng số gần nó với độ chính xác cho trước." },
      { en: "degree of accuracy", vi: "độ chính xác", def: "Làm tròn đến hàng nào, ví dụ 2 chữ số thập phân." },
      { en: "approximately", vi: "xấp xỉ", def: "Gần bằng, không hoàn toàn bằng." }
    ],
    sections: [
      { id: "3.1", title: "Multiplying and dividing by powers of 10", titleVi: "Nhân và chia với lũy thừa của 10",
        sims: [{ id: "placevalue", at: 0 }],
        learn: ["10ⁿ là số 1 theo sau n chữ số 0: 10³ = 1000.",
          "Nhân với 10ⁿ: dời dấu phẩy n hàng sang phải (thiếu chữ số thì điền 0).",
          "Chia cho 10ⁿ: dời dấu phẩy n hàng sang trái.",
          "Không phải lúc nào cũng 'thêm hoặc bỏ chữ số 0': với số thập phân phải dời dấu phẩy.",
          "Nhân rồi chia cùng một lũy thừa của 10 thì trở về số ban đầu."],
        example: { q: "Tính 2,87 × 10⁶ và 23 500 ÷ 10³.", steps: ["10⁶ = 1 000 000: dời dấu phẩy 6 hàng sang phải: 2,87 → 2 870 000", "23 500 ÷ 1000: dời dấu phẩy 3 hàng sang trái → 23,5"], prompts: ["Số mũ 6 của 10 cho biết dấu phẩy phải dời mấy hàng? Nhân thì dời về phía nào?", "Chia cho 10³ thì dời dấu phẩy theo hướng ngược lại; dời mấy hàng?"], answer: { type: "text", value: "2 870 000; 23,5", accept: ["2870000;23,5", "2870000, 23,5", "2870000;23.5", "2870000, 23.5", "2870000 và 23,5", "2870000 và 23.5"] }, twist: { q: "Nếu 2,87 × 10ⁿ = 28 700 thì n bằng bao nhiêu?", answer: { type: "num", value: 4 } } },
        questions: s31 },
      { id: "3.2", title: "Rounding", titleVi: "Làm tròn số",
        sims: [{ id: "roundzoom", at: 0 }],
        learn: ["Xác định hàng cần làm tròn, nhìn chữ số ngay bên phải nó.",
          "Chữ số đó ≥ 5: tăng chữ số cần giữ thêm 1; < 5: giữ nguyên.",
          "Sau khi làm tròn bỏ các chữ số bên phải.",
          "Chỉ nhìn một chữ số bên phải, không làm tròn nhiều lần.",
          "Làm tròn có thể kéo theo nhớ: 99,96 → 100,0."],
        example: { q: "Làm tròn 17,825684 đến 4 chữ số thập phân.", steps: ["Chữ số thứ 4 sau dấu phẩy là 6: 17,8256|84", "Chữ số kế là 8 ≥ 5 nên 6 thành 7", "Kết quả: 17,8257"], prompts: ["Làm tròn đến 4 chữ số thập phân thì giữ lại đến chữ số nào sau dấu phẩy? Nhìn chữ số nào để quyết định?", "Chữ số đó lớn hơn hay nhỏ hơn 5, và điều đó ảnh hưởng thế nào đến chữ số được giữ lại?", "Viết kết quả cuối cùng, giữ đúng 4 chữ số sau dấu phẩy."], answer: { type: "num", value: 17.8257 }, twist: { q: "Nếu làm tròn 17,825684 đến 2 chữ số thập phân thì được số nào?", answer: { type: "num", value: 17.83 } } },
        questions: s32 }
    ],
    challenge: { title: "Thử thách Việt Nam", intro: "Làm tròn, ước lượng và nhân chia nhanh với 10, 100, 1000 trong các bài toán đời thường.", questions: ch },
    project: null
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "3.1-01": "pow10", "3.1-02": "pow10", "3.1-03": "mul-pow10", "3.1-04": "mul-pow10", "3.1-06": "mul-pow10", "3.1-07": "mul-pow10", "3.1-05": "div-pow10", "3.1-08": "div-pow10", "3.2-01": "round-dp", "3.2-02": "round-dp", "3.2-03": "round-dp", "3.2-04": "round-dp", "3.2-05": "round-dp", "3.2-06": "round-dp" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 3; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
