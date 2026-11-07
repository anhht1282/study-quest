// 🚀 Extension quests — Math 8, unit 16 (Interpreting and discussing results). Schema: MATH_QUESTS_GUIDE.md. Own
// wording, built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const EPS = 1e-6;
  const near = function (a, b) { return Math.abs(a - b) < EPS; };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const round6 = function (x) { return Math.round(x * 1e6) / 1e6; };
  // number for display: Unicode minus; decimal comma in Vietnamese
  const fmt = function (x, lang) {
    const s = String(round6(x)).replace("-", "−");
    return lang === "en" ? s : s.replace(".", ",");
  };
  const sorted = function (arr) { return arr.slice().sort(function (x, y) { return x - y; }); };
  const sum = function (arr) { return arr.reduce(function (s, x) { return s + x; }, 0); };
  // 16.3: stem-and-leaf data 23, 27, 31, 34, 38, 42, 45 plus two new values
  const STEM = [23, 27, 31, 34, 38, 42, 45];
  // 16.1 make: frequencies of 0–9, 10–19, 20–29, 30–39 calls
  const calls = function (f) { return [f.f1, f.f2, f.f3, f.f4]; };
  // 16.5 make: how many times taller bar B looks than bar A when the axis starts at s
  const looks = function (f) { return (f.b - f.s) / (f.a - f.s); };
  // 16.6 make: mean number of goals (0, 1, 2, 3 goals with frequencies g0..g3)
  const goals = function (f) { return [f.g0, f.g1, f.g2, f.g3]; };
  const goalMean = function (f) { const g = goals(f); return (g[1] + 2 * g[2] + 3 * g[3]) / sum(g); };

  window.GAME_QUESTS.push({
    unit: 16,
    sections: {
      "16.1": [
        {
          id: "16.1-x1", type: "many", arity: 2, ordered: false,
          labels: ["Tuổi thứ nhất", "Tuổi thứ hai"],
          ask: "Tuổi của 7 thành viên một câu lạc bộ: 12, 15, 21, 28, 33, 35, 37. Gom nhóm 10 ≤ a < 20, 20 ≤ a < 30, 30 ≤ a < 40. Thêm hai thành viên mới (tuổi nguyên từ 10 đến 39) sao cho nhóm 20 ≤ a < 30 trở thành nhóm duy nhất có tần số lớn nhất.",
          why: "Đếm đúng nhóm cho từng giá trị (nhất là giá trị nằm ở biên nhóm) là bước đầu tiên của mọi biểu đồ tần số.",
          check: function (v) { return inRange(v[0], 20, 29) && inRange(v[1], 20, 29); },
          challenge: function (v) { return v[0] === 20 || v[1] === 20; },
          challengeText: "Một trong hai tuổi nằm đúng ở biên dưới của nhóm 20 ≤ a < 30.",
          sample: { values: ["24", "27"] }
        },
        {
          id: "16.1-x2", type: "whatif", base: 10,
          ask: "Ví dụ: thời gian chạy (giây) của một lớp được gom nhóm: 10 ≤ t < 12 có 3 bạn, 12 ≤ t < 14 có 7 bạn, 14 ≤ t < 16 có 5 bạn. Vậy có 10 bạn chạy dưới 14 giây. Thêm một bạn chạy đúng 14,0 giây thì có bao nhiêu bạn chạy dưới 14 giây?",
          why: "Ký hiệu a ≤ t < b cho biết rõ giá trị ở biên thuộc nhóm nào — đọc sai ký hiệu là đếm sai cả biểu đồ.",
          answer: function () { return 3 + 7; },
          reasons: [
            "14,0 thuộc nhóm 14 ≤ t < 16 (đầu trái được tính), nên số bạn chạy dưới 14 giây vẫn là 10.",
            "14 là đầu mút phải của nhóm 12 ≤ t < 14 nên thuộc nhóm đó: 11 bạn.",
            "Bạn chạy 14,0 giây đứng giữa hai nhóm nên được tính cho cả hai: 11 bạn."
          ],
          reason: 0,
          sample: { guess: "10", reason: 0 }
        },
        {
          id: "16.1-x3", type: "make",
          ask: "Tự ra đề: bảng tần số số cuộc gọi trong ngày của nhân viên với bốn nhóm 0–9, 10–19, 20–29, 30–39 cuộc (tần số nguyên từ 0 đến 100, tổng lớn hơn 0). Đề sẽ hỏi có bao nhiêu nhân viên gọi ít nhất 20 cuộc.",
          why: "Tự lập bảng giúp em thấy “ít nhất 20” gồm những nhóm nào và vì sao chỉ đọc được số người, không đọc được số cuộc gọi chính xác.",
          template: "0–9: f₁, 10–19: f₂, 20–29: f₃, 30–39: f₄",
          fields: [
            { id: "f1", label: "Tần số nhóm 0–9 (f₁)" }, { id: "f2", label: "Tần số nhóm 10–19 (f₂)" },
            { id: "f3", label: "Tần số nhóm 20–29 (f₃)" }, { id: "f4", label: "Tần số nhóm 30–39 (f₄)" }
          ],
          valid: function (f) { return calls(f).every(function (x) { return inRange(x, 0, 100); }) && sum(calls(f)) > 0; },
          solve: function (f) { return f.f3 + f.f4; },
          render: function (f, lang) {
            return lang === "en"
              ? "Number of phone calls made by employees in one day: 0–9: " + f.f1 + ", 10–19: " + f.f2 + ", 20–29: " + f.f3 + ", 30–39: " + f.f4 + " employees. How many employees made at least 20 calls?"
              : "Số cuộc gọi trong một ngày của các nhân viên: 0–9: " + f.f1 + ", 10–19: " + f.f2 + ", 20–29: " + f.f3 + ", 30–39: " + f.f4 + " người. Có bao nhiêu nhân viên gọi ít nhất 20 cuộc?";
          },
          criteria: [
            { id: "mode", text: "Nhóm 10–19 là nhóm duy nhất có tần số lớn nhất", test: function (f) { return f.f2 > Math.max(f.f1, f.f3, f.f4); } },
            { id: "half", text: "Đúng một nửa số nhân viên gọi ít nhất 20 cuộc", test: function (f) { return 2 * (f.f3 + f.f4) === sum(calls(f)); } },
            { id: "zero", text: "Có một nhóm có tần số 0", test: function (f) { return calls(f).indexOf(0) !== -1; } },
            { id: "t30", text: "Công ty có đúng 30 nhân viên", test: function (f) { return sum(calls(f)) === 30; } },
            { id: "inc", text: "Tần số tăng dần từ nhóm đầu đến nhóm cuối", test: function (f) { return f.f1 < f.f2 && f.f2 < f.f3 && f.f3 < f.f4; } }
          ],
          sample: { fields: { f1: "3", f2: "9", f3: "6", f4: "6" } }
        }
      ],
      "16.2": [
        {
          id: "16.2-x1", type: "many", arity: 2, ordered: true,
          labels: ["Tháng 2", "Tháng 3"],
          ask: "Số khách của một cửa hàng: tháng 1 là 40, tháng 4 là 70. Biểu đồ theo thời gian tăng liên tục (mỗi tháng nhiều hơn tháng trước) và đoạn dốc nhất là từ tháng 2 đến tháng 3 (mức tăng lớn hơn hẳn hai đoạn kia). Số khách tháng 2 và tháng 3 (số nguyên) có thể là bao nhiêu?",
          why: "Độ dốc của mỗi đoạn trên biểu đồ chính là mức thay đổi giữa hai lần đo — đọc được điều đó là đọc được xu hướng.",
          check: function (v) {
            const b = v[0], c = v[1];
            return isInt(b) && isInt(c) && b > 40 && c > b && c < 70 && c - b > b - 40 && c - b > 70 - c;
          },
          kinds: [
            { id: "first", text: "đoạn tháng 1–2 dốc hơn đoạn tháng 3–4", test: function (v) { return v[0] - 40 > 70 - v[1]; } },
            { id: "last", text: "đoạn tháng 3–4 dốc hơn đoạn tháng 1–2", test: function (v) { return 70 - v[1] > v[0] - 40; } },
            { id: "same", text: "hai đoạn kia dốc bằng nhau", test: function () { return true; } }
          ],
          kindSamples: [["46", "65"], ["48", "66"], ["45", "62"], ["42", "64"], ["45", "65"]],
          sample: { values: ["45", "62"] }
        },
        {
          id: "16.2-x2", type: "ways",
          ask: "Giá vé xem phim (nghìn đồng): năm 2021 là 80, năm 2022 là 86, năm 2023 là 92. Từ năm 2021 đến năm 2023 giá vé tăng bao nhiêu phần trăm? Giải theo nhiều cách.",
          why: "Phần trăm thay đổi luôn so với giá trị đầu — có nhiều cách tính, và mỗi cách kiểm tra được cách kia.",
          strategies: [
            { id: "s1", name: "Tìm mức tăng rồi chia cho giá trị đầu", steps: [
              { ask: "Giá vé tăng bao nhiêu nghìn đồng?", answer: 12 },
              { ask: "Mức tăng chia cho giá năm 2021 bằng bao nhiêu (số thập phân)?", answer: 0.15 }, { answer: 15 }] },
            { id: "s2", name: "Chia giá mới cho giá cũ", steps: [
              { ask: "92 ÷ 80 bằng bao nhiêu?", answer: 1.15 }, { answer: 15 }] },
            { id: "s3", name: "Tìm 1% của giá đầu", steps: [
              { ask: "1% của 80 bằng bao nhiêu?", answer: 0.8 },
              { ask: "Giá vé tăng bao nhiêu nghìn đồng?", answer: 12 }, { answer: 15 }] }
          ],
          sample: { strategy: "s2", steps: ["1.15", "15"] }
        },
        {
          id: "16.2-x3", type: "pattern",
          ask: "Số thành viên một câu lạc bộ cờ: năm thứ 1 có 120, năm thứ 2 có 135, năm thứ 3 có 150, … Giả sử xu hướng tăng đều này tiếp tục. Tìm số thành viên năm thứ 6, năm thứ 10, năm thứ 20 và quy luật theo n.",
          why: "Kéo dài xu hướng thì tính được dự đoán — nhưng càng xa dải số liệu, dự đoán càng kém tin cậy vì xu hướng có thể thay đổi.",
          seq: [120, 135, 150],
          term: function (n) { return 15 * n + 105; },
          askN: [6, 10, 20],
          sample: { terms: { 6: "195", 10: "255", 20: "405" }, rule: "15n+105" }
        }
      ],
      "16.3": [
        {
          id: "16.3-x1", type: "many", arity: 2, ordered: false,
          labels: ["Giá trị mới thứ nhất", "Giá trị mới thứ hai"],
          ask: "Biểu đồ thân–lá (khóa 2 | 3 nghĩa là 23): 2 | 3 7; 3 | 1 4 8; 4 | 2 5. Trung vị là 34, khoảng biến thiên là 22. Thêm hai giá trị (số nguyên) sao cho trung vị vẫn là 34 và khoảng biến thiên vẫn là 22.",
          why: "Biểu đồ thân–lá giữ nguyên mọi giá trị nên em đếm được ngay vị trí ở giữa — thấy rõ giá trị mới đẩy trung vị đi đâu.",
          check: function (v) {
            if (!inRange(v[0], 23, 45) || !inRange(v[1], 23, 45)) return false;
            const d = sorted(STEM.concat(v));
            return d[4] === 34 && d[8] - d[0] === 22;
          },
          challenge: function (v) { return sum(STEM) + v[0] + v[1] === 9 * 34; },
          challengeText: "Trung bình của cả chín giá trị cũng bằng 34.",
          kinds: [
            { id: "mid", text: "có một giá trị bằng đúng 34", test: function (v) { return v[0] === 34 || v[1] === 34; } },
            { id: "end", text: "có một giá trị bằng giá trị nhỏ nhất hoặc lớn nhất", test: function (v) { return v[0] === 23 || v[1] === 45; } },
            { id: "split", text: "hai giá trị nằm hai phía của 34", test: function () { return true; } }
          ],
          kindSamples: [["34", "40"], ["30", "34"], ["23", "40"], ["30", "45"], ["30", "40"]],
          sample: { values: ["30", "40"] }
        },
        {
          id: "16.3-x2", type: "whatif", base: 22,
          ask: "Ví dụ: biểu đồ thân–lá (khóa 1 | 5 nghĩa là 15): 1 | 2 5 8; 2 | 0 4 4 9; 3 | 3 có trung vị 22. Nếu phát hiện giá trị 33 bị ghi nhầm, thật ra là 63 (lá 3 chuyển sang thân 6), thì trung vị mới là bao nhiêu?",
          why: "Trung vị chỉ phụ thuộc giá trị ở giữa, nên ít bị ảnh hưởng bởi một giá trị rất lớn — khác hẳn trung bình.",
          answer: function () { return (20 + 24) / 2; },
          reasons: [
            "Chỉ giá trị lớn nhất thay đổi, hai giá trị ở giữa vẫn là 20 và 24, nên trung vị vẫn là 22.",
            "Tổng tăng 30, chia cho 8 giá trị: 22 + 3,75 = 25,75.",
            "Trung vị nằm giữa giá trị nhỏ nhất và lớn nhất: (12 + 63) ÷ 2 = 37,5."
          ],
          reason: 0,
          sample: { guess: "22", reason: 0 }
        },
        {
          id: "16.3-x3", type: "ways",
          ask: "Khối lượng (kg) của 8 túi gạo, khóa 4 | 7 nghĩa là 4,7 kg: 3 | 8 9; 4 | 2 5 5 7; 5 | 0 4. Tính khối lượng trung bình của một túi. Giải theo nhiều cách.",
          why: "Khóa cho biết giá trị thật — đọc đúng khóa rồi chọn cách tính gọn (bỏ dấu phẩy, hay so với một số gốc) giúp em tính nhanh mà ít nhầm.",
          strategies: [
            { id: "s1", name: "Cộng các số thập phân rồi chia 8", steps: [
              { ask: "Tổng khối lượng của 8 túi là bao nhiêu kg?", answer: 36 }, { answer: 4.5 }] },
            { id: "s2", name: "Bỏ dấu phẩy (đổi ra phần mười kg), tính rồi chia 10", steps: [
              { ask: "Tổng 38 + 39 + 42 + 45 + 45 + 47 + 50 + 54 bằng bao nhiêu?", answer: 360 },
              { ask: "Chia cho 8 được bao nhiêu (phần mười kg)?", answer: 45 }, { answer: 4.5 }] },
            { id: "s3", name: "So với 4 kg: cộng các phần chênh lệch", steps: [
              { ask: "Tổng các phần chênh lệch so với 4 (lấy mỗi giá trị trừ 4) bằng bao nhiêu?", answer: 4 },
              { ask: "Chênh lệch trung bình bằng bao nhiêu?", answer: 0.5 }, { answer: 4.5 }] }
          ],
          sample: { strategy: "s1", steps: ["36", "4.5"] }
        }
      ],
      "16.4": [
        {
          id: "16.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Góc phần nữ của CLB A (°)", "Góc phần nữ của CLB B (°)"],
          ask: "Câu lạc bộ A có 90 thành viên, câu lạc bộ B có 60 thành viên; mỗi câu lạc bộ có cả nam và nữ. Mỗi câu lạc bộ vẽ một biểu đồ tròn (góc là số nguyên độ). B có nhiều hơn A đúng 5 thành viên nữ. Góc của phần “nữ” trong hai biểu đồ có thể là bao nhiêu?",
          why: "Cùng một góc có thể ứng với số người khác nhau — muốn so sánh hai biểu đồ tròn phải đổi góc ra số lượng bằng tổng của từng biểu đồ.",
          check: function (v) {
            const a = v[0], b = v[1];
            return inRange(a, 1, 359) && inRange(b, 1, 359) && a % 4 === 0 && b % 6 === 0 && b / 6 - a / 4 === 5;
          },
          challenge: function (v) { return v[1] === 2 * v[0]; },
          challengeText: "Góc phần nữ của B gấp đôi góc phần nữ của A.",
          kinds: [
            { id: "both", text: "nữ chiếm hơn nửa ở cả hai câu lạc bộ", test: function (v) { return v[0] > 180; } },
            { id: "onlyB", text: "nữ chiếm hơn nửa chỉ ở câu lạc bộ B", test: function (v) { return v[1] > 180; } },
            { id: "none", text: "nữ không chiếm quá nửa ở câu lạc bộ nào", test: function () { return true; } }
          ],
          kindSamples: [["184", "306"], ["200", "330"], ["120", "210"], ["160", "270"], ["40", "90"]],
          sample: { values: ["120", "210"] }
        },
        {
          id: "16.4-x2", type: "make",
          ask: "Tự ra đề: biểu đồ tròn về T người (T nguyên từ 1 đến 2 000) có một hình quạt góc θ độ (0 < θ < 360), và số người ứng với hình quạt đó phải là số nguyên. Đề sẽ hỏi hình quạt đó ứng với bao nhiêu người.",
          why: "Đi ngược từ góc ra số lượng (góc ÷ 360° × tổng) là cách duy nhất để đọc số thật từ một biểu đồ tròn.",
          template: "T người, hình quạt θ°",
          fields: [{ id: "T", label: "Tổng số người T" }, { id: "t", label: "Góc hình quạt θ (độ)" }],
          valid: function (f) {
            if (!inRange(f.T, 1, 2000) || !(f.t > 0 && f.t < 360)) return false;
            const n = f.t * f.T / 360;
            return near(n, Math.round(n)) && Math.round(n) > 0;
          },
          solve: function (f) { return Math.round(f.t * f.T / 360); },
          render: function (f, lang) {
            return lang === "en"
              ? "A pie chart shows " + f.T + " people. One sector has an angle of " + fmt(f.t, lang) + "°. How many people does this sector represent?"
              : "Một biểu đồ tròn biểu diễn " + f.T + " người. Một hình quạt có góc " + fmt(f.t, lang) + "°. Hình quạt đó ứng với bao nhiêu người?";
          },
          criteria: [
            { id: "not10", text: "Góc không phải bội của 10°", test: function (f) { return !isInt(round6(f.t / 10)); } },
            { id: "big", text: "Hình quạt ứng với hơn 100 người", test: function (f) { return f.t * f.T / 360 > 100; } },
            { id: "obtuse", text: "Góc là góc tù (từ 90° đến 180°, không kể hai đầu)", test: function (f) { return f.t > 90 && f.t < 180; } },
            { id: "frac", text: "Mỗi người ứng với một góc không nguyên (T không là ước của 360)", test: function (f) { return 360 % f.T !== 0; } },
            { id: "reflex", text: "Hình quạt chiếm hơn nửa hình tròn", test: function (f) { return f.t > 180; } }
          ],
          sample: { fields: { T: "600", t: "120" } }
        },
        {
          id: "16.4-x3", type: "whatif", base: 8,
          ask: "Ví dụ: lớp 8A có 32 bạn; trong biểu đồ tròn, phần “đi xe đạp” có góc 90°, ứng với 8 bạn. Lớp 8B có 40 bạn; phần “đi xe đạp” có góc 72°. Lớp 8B có bao nhiêu bạn đi xe đạp?",
          why: "Góc nhỏ hơn chưa chắc là ít người hơn — biểu đồ tròn chỉ cho tỉ lệ, muốn biết số lượng phải dùng tổng.",
          answer: function () { return 72 / 360 * 40; },
          reasons: [
            "72° là 1/5 hình tròn, và 1/5 của 40 bạn là 8 bạn — bằng đúng lớp 8A dù góc nhỏ hơn.",
            "Góc nhỏ hơn nên ít bạn hơn: 8 × 72 ÷ 90 = 6,4, khoảng 6 bạn.",
            "Lớp 8B đông hơn nên nhiều bạn hơn: 8 × 40 ÷ 32 = 10 bạn."
          ],
          reason: 0,
          sample: { guess: "8", reason: 0 }
        }
      ],
      "16.5": [
        {
          id: "16.5-x1", type: "many", arity: 3, ordered: true,
          labels: ["Chỉ học Lý", "Chỉ học Hóa", "Chỉ học Sinh"],
          ask: "Sơ đồ Venn ba môn Lý, Hóa, Sinh của 40 bạn (mỗi bạn học ít nhất một môn): 6 bạn học cả ba môn, 4 bạn chỉ học Hóa và Sinh, 5 bạn chỉ học Hóa và Lý, 3 bạn chỉ học Lý và Sinh. Điền ba vùng “chỉ học một môn” (số nguyên) sao cho Hóa là môn có nhiều bạn học nhất (nhiều hơn hẳn hai môn kia).",
          why: "Sơ đồ Venn cho thấy cả phần riêng lẫn phần chung — tổng một môn phải cộng mọi vùng nằm trong vòng của môn đó.",
          check: function (v) {
            const p = v[0], c = v[1], b = v[2];
            return inRange(p, 0, 22) && inRange(c, 0, 22) && inRange(b, 0, 22) && p + c + b === 22 && c + 15 > p + 14 && c + 15 > b + 13;
          },
          challenge: function (v) { return v[0] + 14 === v[2] + 13; },
          challengeText: "Số bạn học Lý bằng số bạn học Sinh.",
          kinds: [
            { id: "phys", text: "Lý nhiều bạn hơn Sinh", test: function (v) { return v[0] + 14 > v[2] + 13; } },
            { id: "bio", text: "Sinh nhiều bạn hơn Lý", test: function (v) { return v[2] + 13 > v[0] + 14; } },
            { id: "tie", text: "Lý và Sinh bằng nhau", test: function () { return true; } }
          ],
          kindSamples: [["7", "10", "5"], ["6", "12", "4"], ["5", "10", "7"], ["2", "12", "8"], ["5", "11", "6"]],
          sample: { values: ["5", "10", "7"] }
        },
        {
          id: "16.5-x2", type: "whatif", base: 5,
          ask: "Ví dụ: biểu đồ tròn về môn thể thao yêu thích của 30 bạn có phần “bơi” góc 60°, ứng với 5 bạn. Nếu vẽ lại cùng số liệu bằng biểu đồ cột, cột “đá bóng” (góc 120° trong biểu đồ tròn) cao đến vạch bao nhiêu?",
          why: "Mỗi loại biểu đồ cho thấy một điều khác nhau — chuyển được từ biểu đồ này sang biểu đồ khác là hiểu đúng số liệu.",
          answer: function () { return 120 / 360 * 30; },
          reasons: [
            "Biểu đồ cột cho tần số: 120° là 1/3 hình tròn, 1/3 của 30 bạn là 10 bạn.",
            "Chiều cao cột bằng số đo góc: 120.",
            "Chiều cao cột là phần trăm: 120° là khoảng 33,3%, nên cột cao 33,3."
          ],
          reason: 0,
          sample: { guess: "10", reason: 0 }
        },
        {
          id: "16.5-x3", type: "make",
          ask: "Tự ra đề về biểu đồ cột gây hiểu lầm: hai cột có giá trị A < B (lớn hơn 0, không quá 1 000), trục đứng bắt đầu từ vạch s (0 ≤ s < A). Đề sẽ hỏi: trên hình, cột B trông cao gấp mấy lần cột A?",
          why: "Trục không bắt đầu từ 0 làm chênh lệch nhỏ trông rất lớn — tự tạo một biểu đồ như vậy giúp em nhận ra mẹo này khi đọc tin tức.",
          template: "Cột A, cột B, trục bắt đầu từ s",
          fields: [{ id: "a", label: "Giá trị cột A" }, { id: "b", label: "Giá trị cột B" }, { id: "s", label: "Vạch bắt đầu của trục đứng (s)" }],
          valid: function (f) { return f.a > 0 && f.b > f.a && f.b <= 1000 && f.s >= 0 && f.s < f.a; },
          solve: function (f) { return round6(looks(f)); },
          render: function (f, lang) {
            return lang === "en"
              ? "A bar chart shows bar A with value " + fmt(f.a, lang) + " and bar B with value " + fmt(f.b, lang) + ". The vertical axis starts at " + fmt(f.s, lang) + ". On the picture, how many times as tall as bar A does bar B look?"
              : "Một biểu đồ cột có cột A giá trị " + fmt(f.a, lang) + " và cột B giá trị " + fmt(f.b, lang) + ". Trục đứng bắt đầu từ vạch " + fmt(f.s, lang) + ". Trên hình, cột B trông cao gấp mấy lần cột A?";
          },
          criteria: [
            { id: "honest", text: "Trục bắt đầu từ 0 (biểu đồ trung thực)", test: function (f) { return f.s === 0; } },
            { id: "trick", text: "B trông cao gấp ít nhất 3 lần dù B chưa lớn hơn A tới 50%", test: function (f) { return looks(f) >= 3 && f.b < 1.5 * f.a; } },
            { id: "two", text: "B trông cao gấp đúng 2 lần", test: function (f) { return near(looks(f), 2); } },
            { id: "big", text: "Cả hai giá trị đều lớn hơn 100", test: function (f) { return f.a > 100; } },
            { id: "close", text: "B lớn hơn A chưa tới 10%", test: function (f) { return f.b < 1.1 * f.a; } }
          ],
          sample: { fields: { a: "200", b: "210", s: "195" } }
        }
      ],
      "16.6": [
        {
          id: "16.6-x1", type: "many", arity: 2, ordered: false,
          labels: ["Số thứ nhất", "Số thứ hai"],
          ask: "Năm số nguyên dương có trung bình 12; ba số đã biết là 8, 10 và 15. Tìm hai số còn lại sao cho trung vị của năm số là 10.",
          why: "Biết trung bình và số giá trị thì biết tổng — đây là cách tìm giá trị bị thiếu; trung vị cho thêm điều kiện về vị trí.",
          check: function (v) {
            if (!inRange(v[0], 1, 100) || !inRange(v[1], 1, 100) || v[0] + v[1] !== 27) return false;
            return sorted([8, 10, 15, v[0], v[1]])[2] === 10;
          },
          challenge: function (v) { const d = sorted([8, 10, 15, v[0], v[1]]); return d[4] - d[0] === 21; },
          challengeText: "Khoảng biến thiên của năm số là 21.",
          kinds: [
            { id: "ten", text: "có một số bằng 10", test: function (v) { return v[0] === 10; } },
            { id: "min", text: "số nhỏ trở thành giá trị nhỏ nhất (nhỏ hơn 8)", test: function (v) { return v[0] < 8; } },
            { id: "mid", text: "số nhỏ là 8 hoặc 9", test: function () { return true; } }
          ],
          kindSamples: [["10", "17"], ["7", "20"], ["5", "22"], ["8", "19"], ["9", "18"]],
          sample: { values: ["7", "20"] }
        },
        {
          id: "16.6-x2", type: "make",
          ask: "Tự ra đề: bảng tần số số bàn thắng mỗi trận của một đội: 0, 1, 2, 3 bàn với tần số g₀, g₁, g₂, g₃ (số nguyên từ 0 đến 100, tổng lớn hơn 0). Đề sẽ hỏi số bàn thắng trung bình mỗi trận.",
          why: "Trung bình từ bảng tần số = tổng (giá trị × tần số) ÷ tổng tần số — tự lập bảng giúp em thấy mỗi tần số kéo trung bình về phía nào.",
          template: "0 bàn: g₀, 1 bàn: g₁, 2 bàn: g₂, 3 bàn: g₃",
          fields: [
            { id: "g0", label: "Số trận 0 bàn (g₀)" }, { id: "g1", label: "Số trận 1 bàn (g₁)" },
            { id: "g2", label: "Số trận 2 bàn (g₂)" }, { id: "g3", label: "Số trận 3 bàn (g₃)" }
          ],
          valid: function (f) { return goals(f).every(function (x) { return inRange(x, 0, 100); }) && sum(goals(f)) > 0; },
          solve: function (f) { return round6(goalMean(f)); },
          render: function (f, lang) {
            return lang === "en"
              ? "A team scored 0 goals in " + f.g0 + " matches, 1 goal in " + f.g1 + ", 2 goals in " + f.g2 + " and 3 goals in " + f.g3 + " matches. Work out the mean number of goals per match."
              : "Một đội ghi 0 bàn trong " + f.g0 + " trận, 1 bàn trong " + f.g1 + " trận, 2 bàn trong " + f.g2 + " trận và 3 bàn trong " + f.g3 + " trận. Tính số bàn thắng trung bình mỗi trận.";
          },
          criteria: [
            { id: "whole", text: "Trung bình là số nguyên", test: function (f) { return near(goalMean(f), Math.round(goalMean(f))); } },
            { id: "half", text: "Trung bình đúng bằng 1,5", test: function (f) { return near(goalMean(f), 1.5); } },
            { id: "t20", text: "Đội đã đá đúng 20 trận", test: function (f) { return sum(goals(f)) === 20; } },
            { id: "mode0", text: "0 bàn là giá trị duy nhất xuất hiện nhiều nhất (mốt)", test: function (f) { return f.g0 > Math.max(f.g1, f.g2, f.g3); } },
            { id: "high", text: "Trung bình lớn hơn 2", test: function (f) { return goalMean(f) > 2; } }
          ],
          sample: { fields: { g0: "6", g1: "4", g2: "4", g3: "6" } }
        },
        {
          id: "16.6-x3", type: "whatif", base: 16,
          ask: "Ví dụ: năm số có trung bình 12; bốn số đã biết là 8, 10, 15, 11 nên số thứ năm là 16. Nếu thêm một số thứ sáu sao cho trung bình của cả sáu số vẫn là 12 thì số thứ sáu là bao nhiêu?",
          why: "Tổng = trung bình × số giá trị: dùng ý này là tìm được giá trị cần thêm để giữ (hoặc đổi) trung bình.",
          answer: function () { return 6 * 12 - (8 + 10 + 15 + 11 + 16); },
          reasons: [
            "Tổng sáu số phải là 6 × 12 = 72, năm số đã có tổng 60, nên số thứ sáu là 12.",
            "Tổng sáu số là 72, trừ đi bốn số ban đầu (44) được 28.",
            "Chia tổng hiện có cho 6 như lần trước: 60 ÷ 6 = 10."
          ],
          reason: 0,
          sample: { guess: "12", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.16.1-x1.labels": ["First age", "Second age"],
        "q.16.1-x1.ask": "The ages of 7 members of a club are 12, 15, 21, 28, 33, 35, 37. They are grouped as 10 ≤ a < 20, 20 ≤ a < 30, 30 ≤ a < 40. Add two new members (whole-number ages from 10 to 39) so that the class 20 ≤ a < 30 becomes the only class with the greatest frequency.",
        "q.16.1-x1.why": "Putting each value in the right class (especially values on a class boundary) is the first step of every frequency diagram.",
        "q.16.1-x1.challengeText": "One of the two ages is exactly on the lower boundary of the class 20 ≤ a < 30.",
        "q.16.1-x2.ask": "Example: the running times (seconds) of a class are grouped: 10 ≤ t < 12 has 3 students, 12 ≤ t < 14 has 7 students, 14 ≤ t < 16 has 5 students. So 10 students ran in less than 14 seconds. One more student runs in exactly 14.0 seconds. How many students now ran in less than 14 seconds?",
        "q.16.1-x2.why": "The notation a ≤ t < b tells you exactly which class a boundary value belongs to — reading it wrongly means counting the whole diagram wrongly.",
        "q.16.1-x2.reasons": [
          "14.0 belongs to 14 ≤ t < 16 (the left end is included), so the number under 14 seconds is still 10.",
          "14 is the right end of the class 12 ≤ t < 14, so it belongs there: 11 students.",
          "A time of 14.0 seconds is between two classes, so it is counted in both: 11 students."
        ],
        "q.16.1-x3.ask": "Make a problem: a frequency table of the number of phone calls employees make in a day, with four classes 0–9, 10–19, 20–29, 30–39 calls (whole-number frequencies from 0 to 100, total greater than 0). The problem will ask how many employees made at least 20 calls.",
        "q.16.1-x3.why": "Making the table yourself shows which classes “at least 20” includes, and why you can read the number of people but not the exact numbers of calls.",
        "q.16.1-x3.template": "0–9: f₁, 10–19: f₂, 20–29: f₃, 30–39: f₄",
        "q.16.1-x3.fields": ["Frequency of 0–9 (f₁)", "Frequency of 10–19 (f₂)", "Frequency of 20–29 (f₃)", "Frequency of 30–39 (f₄)"],
        "q.16.1-x3.criteria": [
          "The class 10–19 is the only class with the greatest frequency", "Exactly half of the employees made at least 20 calls",
          "One class has frequency 0", "The company has exactly 30 employees",
          "The frequencies increase from the first class to the last"
        ],
        "q.16.2-x1.labels": ["February", "March"],
        "q.16.2-x1.kinds": ["January–February is steeper than March–April", "March–April is steeper than January–February", "the other two parts are equally steep"],
        "q.16.2-x1.ask": "The number of customers of a shop: 40 in January and 70 in April. The time series graph rises all the time (each month more than the month before) and the steepest part is from February to March (a bigger increase than both other parts). What could the numbers of customers in February and March be (whole numbers)?",
        "q.16.2-x1.why": "The steepness of each line segment is the change between two readings — reading this is reading the trend.",
        "q.16.2-x2.ask": "Cinema ticket prices (thousand dong): 80 in 2021, 86 in 2022 and 92 in 2023. By what percentage did the price increase from 2021 to 2023? Solve it in several ways.",
        "q.16.2-x2.why": "A percentage change is always compared with the starting value — there are several ways to work it out, and each one checks the others.",
        "q.16.2-x2.strategies": [
          "Find the increase, then divide by the starting value",
          "Divide the new price by the old price",
          "Find 1% of the starting price"
        ],
        "q.16.2-x2.steps.s1": ["By how many thousand dong did the price increase?", "The increase divided by the 2021 price is what (as a decimal)?"],
        "q.16.2-x2.steps.s2": ["What is 92 ÷ 80?"],
        "q.16.2-x2.steps.s3": ["What is 1% of 80?", "By how many thousand dong did the price increase?"],
        "q.16.2-x3.ask": "The number of members of a chess club: 120 in year 1, 135 in year 2, 150 in year 3, … Assume this steady increase continues. Find the number of members in year 6, year 10 and year 20, and the rule in terms of n.",
        "q.16.2-x3.why": "Continuing a trend gives you a prediction — but the further you go beyond the data, the less reliable it is, because trends can change.",
        "q.16.3-x1.labels": ["First new value", "Second new value"],
        "q.16.3-x1.kinds": ["one value is exactly 34", "one value equals the smallest or largest value", "the two values lie on either side of 34"],
        "q.16.3-x1.ask": "A stem-and-leaf diagram (key: 2 | 3 means 23): 2 | 3 7; 3 | 1 4 8; 4 | 2 5. The median is 34 and the range is 22. Add two values (whole numbers) so that the median is still 34 and the range is still 22.",
        "q.16.3-x1.why": "A stem-and-leaf diagram keeps every value, so you can count straight to the middle position — and see where new values push the median.",
        "q.16.3-x1.challengeText": "The mean of all nine values is also 34.",
        "q.16.3-x2.ask": "Example: the stem-and-leaf diagram (key: 1 | 5 means 15) 1 | 2 5 8; 2 | 0 4 4 9; 3 | 3 has median 22. If the value 33 turns out to be a mistake and is really 63 (the leaf 3 moves to the stem 6), what is the new median?",
        "q.16.3-x2.why": "The median depends only on the middle values, so one very large value hardly affects it — quite different from the mean.",
        "q.16.3-x2.reasons": [
          "Only the largest value changes; the two middle values are still 20 and 24, so the median is still 22.",
          "The total goes up by 30; divide by the 8 values: 22 + 3.75 = 25.75.",
          "The median is halfway between the smallest and the largest value: (12 + 63) ÷ 2 = 37.5."
        ],
        "q.16.3-x3.ask": "The masses (kg) of 8 bags of rice, key: 4 | 7 means 4.7 kg: 3 | 8 9; 4 | 2 5 5 7; 5 | 0 4. Work out the mean mass of a bag. Solve it in several ways.",
        "q.16.3-x3.why": "The key tells you the real values — read the key correctly, then choose a neat method (drop the decimal point, or compare with a base number) to work fast with fewer mistakes.",
        "q.16.3-x3.strategies": [
          "Add the decimals, then divide by 8",
          "Drop the decimal point (work in tenths of a kg), then divide by 10",
          "Compare with 4 kg: add up the differences"
        ],
        "q.16.3-x3.steps.s1": ["What is the total mass of the 8 bags in kg?"],
        "q.16.3-x3.steps.s2": ["What is 38 + 39 + 42 + 45 + 45 + 47 + 50 + 54?", "Divide by 8: what do you get (in tenths of a kg)?"],
        "q.16.3-x3.steps.s3": ["What is the total of the differences from 4 (each value minus 4)?", "What is the mean difference?"],
        "q.16.4-x1.labels": ["Angle for girls in club A (°)", "Angle for girls in club B (°)"],
        "q.16.4-x1.kinds": ["girls are more than half of both clubs", "girls are more than half of club B only", "girls are not more than half of either club"],
        "q.16.4-x1.ask": "Club A has 90 members and club B has 60 members; each club has both boys and girls. Each club draws a pie chart (the angles are whole numbers of degrees). Club B has exactly 5 more girls than club A. What could the angles of the “girls” sectors in the two pie charts be?",
        "q.16.4-x1.why": "The same angle can stand for different numbers of people — to compare two pie charts you must change the angles to amounts using each chart's own total.",
        "q.16.4-x1.challengeText": "The girls' angle for B is twice the girls' angle for A.",
        "q.16.4-x2.ask": "Make a problem: a pie chart of T people (T a whole number from 1 to 2000) has a sector with angle θ degrees (0 < θ < 360), and the number of people in that sector must be a whole number. The problem will ask how many people the sector represents.",
        "q.16.4-x2.why": "Working back from the angle to the amount (angle ÷ 360° × total) is the only way to read real numbers from a pie chart.",
        "q.16.4-x2.template": "T people, sector θ°",
        "q.16.4-x2.fields": ["Total number of people T", "Sector angle θ (degrees)"],
        "q.16.4-x2.criteria": [
          "The angle is not a multiple of 10°", "The sector represents more than 100 people",
          "The angle is obtuse (between 90° and 180°)", "Each person stands for an angle that is not a whole number (T is not a factor of 360)",
          "The sector is more than half of the circle"
        ],
        "q.16.4-x3.ask": "Example: class 8A has 32 students; in its pie chart the “cycle” sector has an angle of 90°, which is 8 students. Class 8B has 40 students; its “cycle” sector has an angle of 72°. How many students in 8B cycle?",
        "q.16.4-x3.why": "A smaller angle does not always mean fewer people — a pie chart shows only proportions; to know the amounts you need the total.",
        "q.16.4-x3.reasons": [
          "72° is 1/5 of the circle, and 1/5 of 40 students is 8 students — the same as 8A even though the angle is smaller.",
          "The angle is smaller, so there are fewer students: 8 × 72 ÷ 90 = 6.4, about 6 students.",
          "Class 8B is bigger, so there are more students: 8 × 40 ÷ 32 = 10 students."
        ],
        "q.16.5-x1.labels": ["Physics only", "Chemistry only", "Biology only"],
        "q.16.5-x1.kinds": ["more students take Physics than Biology", "more students take Biology than Physics", "Physics and Biology have the same number"],
        "q.16.5-x1.ask": "A Venn diagram for physics, chemistry and biology shows 40 students (each studies at least one subject): 6 study all three, 4 study only chemistry and biology, 5 study only chemistry and physics, 3 study only physics and biology. Fill in the three “one subject only” regions (whole numbers) so that chemistry has the most students (more than each of the other two subjects).",
        "q.16.5-x1.why": "A Venn diagram shows both the separate and the shared parts — the total for a subject must add every region inside that subject's circle.",
        "q.16.5-x1.challengeText": "The number of students studying physics equals the number studying biology.",
        "q.16.5-x2.ask": "Example: a pie chart of the favourite sports of 30 students has a “swimming” sector of 60°, which is 5 students. If the same data are drawn as a bar chart, how tall is the “football” bar (120° in the pie chart)?",
        "q.16.5-x2.why": "Each type of diagram shows something different — being able to change from one diagram to another means you really understand the data.",
        "q.16.5-x2.reasons": [
          "A bar chart shows frequencies: 120° is 1/3 of the circle, and 1/3 of 30 students is 10 students.",
          "The height of the bar is the size of the angle: 120.",
          "The height of the bar is a percentage: 120° is about 33.3%, so the bar is 33.3 tall."
        ],
        "q.16.5-x3.ask": "Make a problem about a misleading bar chart: two bars with values A < B (greater than 0, at most 1000), and the vertical axis starts at s (0 ≤ s < A). The problem will ask: on the picture, how many times as tall as bar A does bar B look?",
        "q.16.5-x3.why": "An axis that does not start at 0 makes a small difference look huge — making such a chart yourself helps you spot this trick in the news.",
        "q.16.5-x3.template": "Bar A, bar B, axis starts at s",
        "q.16.5-x3.fields": ["Value of bar A", "Value of bar B", "Where the vertical axis starts (s)"],
        "q.16.5-x3.criteria": [
          "The axis starts at 0 (an honest chart)", "B looks at least 3 times as tall even though B is less than 50% more than A",
          "B looks exactly twice as tall", "Both values are greater than 100", "B is less than 10% more than A"
        ],
        "q.16.6-x1.labels": ["First number", "Second number"],
        "q.16.6-x1.kinds": ["one number is 10", "the smaller number becomes the minimum (less than 8)", "the smaller number is 8 or 9"],
        "q.16.6-x1.ask": "Five positive whole numbers have a mean of 12; three of them are 8, 10 and 15. Find the other two numbers so that the median of the five numbers is 10.",
        "q.16.6-x1.why": "Knowing the mean and how many values there are gives you the total — that is how you find missing values; the median adds a condition on their positions.",
        "q.16.6-x1.challengeText": "The range of the five numbers is 21.",
        "q.16.6-x2.ask": "Make a problem: a frequency table of the goals a team scored per match: 0, 1, 2, 3 goals with frequencies g₀, g₁, g₂, g₃ (whole numbers from 0 to 100, total greater than 0). The problem will ask for the mean number of goals per match.",
        "q.16.6-x2.why": "The mean from a frequency table = total of (value × frequency) ÷ total frequency — making the table yourself shows which way each frequency pulls the mean.",
        "q.16.6-x2.template": "0 goals: g₀, 1 goal: g₁, 2 goals: g₂, 3 goals: g₃",
        "q.16.6-x2.fields": ["Matches with 0 goals (g₀)", "Matches with 1 goal (g₁)", "Matches with 2 goals (g₂)", "Matches with 3 goals (g₃)"],
        "q.16.6-x2.criteria": [
          "The mean is a whole number", "The mean is exactly 1.5", "The team played exactly 20 matches",
          "0 goals is the only most common value (the mode)", "The mean is greater than 2"
        ],
        "q.16.6-x3.ask": "Example: five numbers have a mean of 12; four of them are 8, 10, 15, 11, so the fifth is 16. If a sixth number is added so that the mean of all six numbers is still 12, what is the sixth number?",
        "q.16.6-x3.why": "Total = mean × number of values: use this to find the value you must add to keep (or change) the mean.",
        "q.16.6-x3.reasons": [
          "The six numbers must total 6 × 12 = 72; the five numbers already total 60, so the sixth number is 12.",
          "The total of six numbers is 72; subtract the first four numbers (44) to get 28.",
          "Divide the total you have by 6, as before: 60 ÷ 6 = 10."
        ]
      },
      vi: {}
    }
  });
})();
