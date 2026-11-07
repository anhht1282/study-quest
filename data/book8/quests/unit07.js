// 🚀 Extension quests — Math 8, unit 7 (Fractions). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. Check functions receive NUMBERS parsed by the game ("3/4", "2 1/3", "−3 2/9", "0,75"
// all arrive as numbers). Where a fraction is entered as separate numerator/denominator, comparisons are exact on
// integers; otherwise a tiny tolerance absorbs floating-point error only.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const eq = function (x, y) { return Math.abs(x - y) < 1e-9; };
  const whole = function (x) { return eq(x, Math.round(x)); };
  const pos = function (x) { return Number.isFinite(x) && x > 0; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  const lcm = function (a, b) { return a / gcd(a, b) * b; };
  const neg = function (x) { return String(x).replace("-", "−"); };
  // denominator made only of the prime factors 2 and 5
  const only25 = function (b) { while (b % 2 === 0) b /= 2; while (b % 5 === 0) b /= 5; return b === 1; };
  // 7.3-x3: mixed numbers w n/d
  const mixed = function (w, n, d) { return (w === 0 ? "" : w + " ") + n + "/" + d; };
  const first = function (f) { return f.w1 + f.n1 / f.d1; };
  const second = function (f) { return f.w2 + f.n2 / f.d2; };
  // 7.6-x3: the part that is left, as numerator / denominator over b·d
  const leftNum = function (f) { return f.b * f.d - f.a * f.d - f.c * f.b; };

  window.GAME_QUESTS.push({
    unit: 7,
    sections: {
      "7.1": [
        {
          id: "7.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Tử số", "Mẫu số"],
          ask: "Tìm phân số tối giản nhỏ hơn 1, mẫu số không quá 20, mà khi đổi ra số thập phân thì phép chia dừng lại (số thập phân hữu hạn). Nhập tử số và mẫu số. Tìm càng nhiều càng tốt!",
          why: "Chỉ cần nhìn thừa số nguyên tố của mẫu số (chỉ có 2 và 5) là biết trước phép chia có dừng hay không, khỏi phải chia.",
          check: function (v) { return inRange(v[1], 2, 20) && inRange(v[0], 1, v[1] - 1) && gcd(v[0], v[1]) === 1 && only25(v[1]); },
          challenge: function (v) { return v[1] === 16; },
          challengeText: "Số thập phân có đúng 4 chữ số sau dấu phẩy.",
          kinds: [
            { id: "two", text: "mẫu số chỉ có thừa số nguyên tố 2", test: function (v) { return v[1] % 5 !== 0; } },
            { id: "five", text: "mẫu số chỉ có thừa số nguyên tố 5", test: function (v) { return v[1] % 2 !== 0; } },
            { id: "both", text: "mẫu số có cả thừa số 2 và 5", test: function () { return true; } }
          ],
          kindSamples: [["1", "2"], ["3", "8"], ["1", "5"], ["3", "5"], ["3", "10"]],
          sample: { values: ["3", "8"] }
        },
        {
          id: "7.1-x2", type: "whatif", base: 1 / 9,
          ask: "Ví dụ: 1/9 = 0,(1) = 0,111…, và 9 × 1/9 = 1. Số thập phân vô hạn tuần hoàn 0,(9) = 0,999… thì bằng bao nhiêu?",
          why: "Viết số tuần hoàn thành phân số cho em giá trị chính xác của nó — kể cả khi kết quả làm em ngạc nhiên.",
          answer: function () { return 9 * (1 / 9); },
          reasons: [
            "0,(9) = 9 × 0,(1) = 9 × 1/9 = 1, nên 0,(9) đúng bằng 1.",
            "0,(9) luôn nhỏ hơn 1 một chút, khoảng 0,999.",
            "0,(9) = 9/10 vì chữ số 9 nằm ở hàng phần mười."
          ],
          reason: 0,
          sample: { guess: "1", reason: 0 }
        },
        {
          id: "7.1-x3", type: "ways",
          ask: "Viết số thập phân vô hạn tuần hoàn 0,(36) = 0,363636… thành phân số tối giản. Giải theo nhiều cách.",
          why: "Mỗi số thập phân vô hạn tuần hoàn là một phân số; đổi được hai chiều giúp em chọn dạng dễ tính nhất.",
          strategies: [
            { id: "s1", name: "Dùng 0,(01) = 1/99: 0,(36) = 36/99, rồi rút gọn", steps: [
              { ask: "ƯCLN(36, 99) = ?", answer: 9 }, { answer: "4/11" }] },
            { id: "s2", name: "Đặt x = 0,(36) rồi nhân với 100", steps: [
              { ask: "100x − x = 36,(36) − 0,(36) = ?", answer: 36 }, { answer: "4/11" }] },
            { id: "s3", name: "Nhận ra 0,(36) = 4 × 0,(09)", steps: [
              { ask: "0,(09) viết thành phân số tối giản là?", answer: "1/11" }, { answer: "4/11" }] }
          ],
          sample: { strategy: "s2", steps: ["36", "4/11"] }
        }
      ],
      "7.2": [
        {
          id: "7.2-x1", type: "many", arity: 1, ordered: true,
          labels: ["Số x"],
          ask: "Tìm số x nằm giữa −3 1/4 và −3 1/5 (tức là −3 1/4 < x < −3 1/5). Có thể nhập phân số, hỗn số âm hoặc số thập phân (cách nhập: −3 1/4 hoặc −13/4). Tìm nhiều số khác nhau.",
          why: "Giữa hai số âm rất gần nhau vẫn có vô số số; muốn tìm chúng em phải nhớ rằng với số âm, thứ tự bị đảo chiều.",
          check: function (v) { return Number.isFinite(v[0]) && v[0] > -3.25 + 1e-12 && v[0] < -3.2 - 1e-12; },
          challenge: function (v) { return eq(v[0], -29 / 9); },
          challengeText: "x là phân số có mẫu số nhỏ nhất có thể.",
          kinds: [
            { id: "d2", text: "số thập phân có 2 chữ số sau dấu phẩy", test: function (v) { return whole(v[0] * 100); } },
            { id: "fin", text: "số thập phân hữu hạn có từ 3 chữ số sau dấu phẩy", test: function (v) { return Math.abs(v[0] * 1e8 - Math.round(v[0] * 1e8)) < 1e-3; } },
            { id: "rec", text: "số thập phân vô hạn tuần hoàn", test: function () { return true; } }
          ],
          kindSamples: [["-3.21"], ["-3.24"], ["-3.225"], ["-3.2125"], ["-29/9"]],
          sample: { values: ["-3 2/9"] }
        },
        {
          id: "7.2-x2", type: "make",
          ask: "Tự ra đề so sánh hai phân số a/b và c/d (b, d từ 2 đến 30; a, c là số nguyên khác 0 từ −100 đến 100, có thể âm). Hai phân số không bằng nhau và không phải số nguyên. Đề hỏi: phân số nào lớn hơn?",
          why: "Tự tạo hai phân số rất gần nhau buộc em dùng cách so sánh chắc chắn — quy đồng hoặc nhân chéo — thay vì đoán.",
          template: "Phân số nào lớn hơn: a/b hay c/d?",
          fields: [{ id: "a", label: "Tử a" }, { id: "b", label: "Mẫu b" }, { id: "c", label: "Tử c" }, { id: "d", label: "Mẫu d" }],
          valid: function (f) {
            return inRange(f.a, -100, 100) && inRange(f.c, -100, 100) && f.a !== 0 && f.c !== 0 && inRange(f.b, 2, 30) && inRange(f.d, 2, 30) &&
              f.a * f.d !== f.b * f.c && f.a % f.b !== 0 && f.c % f.d !== 0;
          },
          solve: function (f) { return Math.max(f.a / f.b, f.c / f.d); },
          render: function (f, lang) {
            const p = neg(f.a) + "/" + f.b, q = neg(f.c) + "/" + f.d;
            return lang === "en"
              ? "Which is greater, " + p + " or " + q + "? Write the greater fraction."
              : "Phân số nào lớn hơn: " + p + " hay " + q + "? Viết phân số lớn hơn.";
          },
          criteria: [
            { id: "mixed", text: "Cả hai đều có giá trị tuyệt đối lớn hơn 1 và có cùng phần nguyên khi đổi ra hỗn số", test: function (f) { const x = f.a / f.b, y = f.c / f.d; return Math.abs(x) > 1 && Math.abs(y) > 1 && Math.trunc(x) === Math.trunc(y); } },
            { id: "close", text: "Hai phân số rất gần nhau: tích chéo a×d và b×c chỉ hơn kém nhau 1", test: function (f) { return Math.abs(f.a * f.d - f.b * f.c) === 1; } },
            { id: "neg", text: "Cả hai phân số đều âm", test: function (f) { return f.a < 0 && f.c < 0; } },
            { id: "lcd", text: "Hai mẫu khác nhau và không mẫu nào chia hết cho mẫu kia", test: function (f) { return f.b !== f.d && f.b % f.d !== 0 && f.d % f.b !== 0; } }
          ],
          sample: { fields: { a: "7", b: "9", c: "11", d: "14" } }
        },
        {
          id: "7.2-x3", type: "ways",
          ask: "Phân số 11/14 lớn hơn phân số 7/9 bao nhiêu? Viết đáp số dạng phân số. Giải theo nhiều cách.",
          why: "Hai phân số chênh nhau rất ít thì khó so bằng mắt; có nhiều cách tính giúp em vừa so sánh vừa kiểm tra.",
          strategies: [
            { id: "s1", name: "Quy đồng mẫu số 126", steps: [
              { ask: "7/9 = ?/126", answer: 98 }, { ask: "11/14 = ?/126", answer: 99 }, { answer: "1/126" }] },
            { id: "s2", name: "Phương pháp chéo: (11 × 9 − 7 × 14) / (14 × 9)", steps: [
              { ask: "11 × 9 − 7 × 14 = ?", answer: 1 }, { answer: "1/126" }] },
            { id: "s3", name: "So phần còn thiếu để được 1", steps: [
              { ask: "1 − 7/9 = ?", answer: "2/9" }, { ask: "1 − 11/14 = ?", answer: "3/14" }, { answer: "1/126" }] }
          ],
          sample: { strategy: "s2", steps: ["1", "1/126"] }
        }
      ],
      "7.3": [
        {
          id: "7.3-x1", type: "ways",
          ask: "Tính 6 1/5 − 2 2/3. Nhập đáp số dạng phân số hoặc hỗn số. Giải theo nhiều cách.",
          why: "Mỗi cách trừ hỗn số có chỗ mạnh riêng; cách “đếm thêm” trên trục số còn giúp em ước lượng nhanh.",
          strategies: [
            { id: "s1", name: "Đổi cả hai hỗn số ra phân số có mẫu 15", steps: [
              { ask: "6 1/5 = ?/15", answer: 93 }, { ask: "2 2/3 = ?/15", answer: 40 }, { answer: "53/15" }] },
            { id: "s2", name: "Trừ phần nguyên và phần phân số riêng, mượn 1 khi cần", steps: [
              { ask: "Quy đồng: 6 1/5 = 6 3/15. Mượn 1 từ phần nguyên: 6 3/15 = 5 ?/15", answer: 18 }, { answer: "53/15" }] },
            { id: "s3", name: "Đếm thêm từ 2 2/3 lên 6 1/5", steps: [
              { ask: "Từ 2 2/3 lên 3 cần thêm bao nhiêu?", answer: "1/3" }, { ask: "Từ 3 lên 6 1/5 cần thêm bao nhiêu?", answer: "16/5" }, { answer: "53/15" }] }
          ],
          sample: { strategy: "s1", steps: ["93", "40", "3 8/15"] }
        },
        {
          id: "7.3-x2", type: "whatif", base: 8 / 3,
          ask: "Ví dụ: 5 1/3 − 2 2/3 = 2 2/3. Nếu cộng thêm 1/3 vào cả số bị trừ lẫn số trừ, ta được 5 2/3 − 3. Hiệu mới bằng bao nhiêu?",
          why: "Cộng cùng một số vào hai số thì hiệu không đổi — mẹo này biến phép trừ phải “mượn” thành phép trừ cho một số nguyên.",
          answer: function () { return (5 + 2 / 3) - 3; },
          reasons: [
            "Hai số cùng tăng 1/3 nên khoảng cách giữa chúng không đổi: hiệu vẫn là 2 2/3.",
            "Số bị trừ tăng 1/3 nên hiệu cũng tăng 1/3.",
            "Hai số đều thay đổi nên hiệu tăng 2/3."
          ],
          reason: 0,
          sample: { guess: "2 2/3", reason: 0 }
        },
        {
          id: "7.3-x3", type: "make",
          ask: "Tự ra đề trừ hai hỗn số (phần nguyên từ 0 đến 20, mẫu số từ 2 đến 20, tử số nhỏ hơn mẫu số). Số bị trừ phải lớn hơn số trừ. Đề hỏi hiệu.",
          why: "Tự chọn số giúp em thấy lúc nào phải mượn 1, lúc nào phải quy đồng, và lúc nào kết quả đẹp bất ngờ.",
          template: "w₁ n₁/d₁ − w₂ n₂/d₂ = ?",
          fields: [
            { id: "w1", label: "Phần nguyên số bị trừ" }, { id: "n1", label: "Tử số bị trừ" }, { id: "d1", label: "Mẫu số bị trừ" },
            { id: "w2", label: "Phần nguyên số trừ" }, { id: "n2", label: "Tử số trừ" }, { id: "d2", label: "Mẫu số trừ" }
          ],
          valid: function (f) {
            return inRange(f.w1, 0, 20) && inRange(f.w2, 0, 20) && inRange(f.d1, 2, 20) && inRange(f.d2, 2, 20) &&
              inRange(f.n1, 1, f.d1 - 1) && inRange(f.n2, 1, f.d2 - 1) &&
              (f.w1 * f.d1 + f.n1) * f.d2 > (f.w2 * f.d2 + f.n2) * f.d1;
          },
          solve: function (f) { return first(f) - second(f); },
          render: function (f, lang) {
            const e = mixed(f.w1, f.n1, f.d1) + " − " + mixed(f.w2, f.n2, f.d2);
            return lang === "en" ? "Work out " + e + "." : "Tính " + e + ".";
          },
          criteria: [
            { id: "borrow", text: "Phải mượn 1 từ phần nguyên (phần phân số của số bị trừ nhỏ hơn)", test: function (f) { return f.n1 * f.d2 < f.n2 * f.d1; } },
            { id: "lcd", text: "Hai mẫu khác nhau và không mẫu nào chia hết cho mẫu kia", test: function (f) { return f.d1 !== f.d2 && f.d1 % f.d2 !== 0 && f.d2 % f.d1 !== 0; } },
            { id: "small", text: "Cả hai số đều lớn hơn 2 nhưng hiệu nhỏ hơn 1", test: function (f) { return f.w2 >= 2 && first(f) - second(f) < 1; } },
            { id: "whole", text: "Hai mẫu khác nhau mà hiệu là số nguyên", test: function (f) { return f.d1 !== f.d2 && f.n1 * f.d2 === f.n2 * f.d1; } }
          ],
          sample: { fields: { w1: "7", n1: "1", d1: "4", w2: "2", n2: "5", d2: "6" } }
        }
      ],
      "7.4": [
        {
          id: "7.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hỗn số (không phải số nguyên)", "Số nguyên n"],
          ask: "Tìm một hỗn số (không phải số nguyên) và một số nguyên n từ 2 trở lên sao cho hỗn số × n = 35. Nhập hỗn số dạng 4 3/8 hoặc 35/8. Tìm nhiều cặp khác nhau.",
          why: "Đi ngược phép nhân một số nguyên với hỗn số giúp em thấy mẫu số phải “biến mất” khi nhân thì tích mới là số nguyên.",
          check: function (v) { return inRange(v[1], 2, 10000) && pos(v[0]) && !whole(v[0]) && eq(v[0] * v[1], 35); },
          challenge: function (v) { return v[0] > 4 && v[0] < 5; },
          challengeText: "Hỗn số nằm giữa 4 và 5.",
          kinds: [
            { id: "red", text: "35/n rút gọn được (n chia hết cho 5 hoặc 7)", test: function (v) { return gcd(v[1], 35) > 1; } },
            { id: "fin", text: "35/n tối giản, đổi ra số thập phân hữu hạn", test: function (v) { return only25(v[1]); } },
            { id: "rec", text: "35/n tối giản, đổi ra số thập phân vô hạn tuần hoàn", test: function () { return true; } }
          ],
          kindSamples: [["17.5", "2"], ["8.75", "4"], ["35/3", "3"], ["35/6", "6"], ["3.5", "10"]],
          sample: { values: ["17 1/2", "2"] }
        },
        {
          id: "7.4-x2", type: "pattern",
          ask: "Phép tính thứ n là (n 2/3) × 6, ví dụ phép tính 1, 2, 3 là 1 2/3 × 6 = 10, 2 2/3 × 6 = 16, 3 2/3 × 6 = 22. Tìm kết quả của phép tính 5, 9, 20 và quy luật theo n.",
          why: "Tách hỗn số: n × 6 + 2/3 × 6 = 6n + 4 — quy luật chính là phương pháp tách phần nguyên và phần phân số.",
          seq: [10, 16, 22],
          term: function (n) { return 6 * n + 4; },
          askN: [5, 9, 20],
          sample: { terms: { 5: "34", 9: "58", 20: "124" }, rule: "6n+4" }
        },
        {
          id: "7.4-x3", type: "whatif", base: 28,
          ask: "Ví dụ: 3 1/2 × 8 = 3 × 8 + 1/2 × 8 = 24 + 4 = 28. Nếu đổi thành 3 1/4 × 8 thì kết quả bằng bao nhiêu?",
          why: "Phần phân số cũng phải nhân với số nguyên — đoán trước giúp em bắt lỗi chỉ nhân phần nguyên.",
          answer: function () { return 3 * 8 + 8 / 4; },
          reasons: [
            "Phần phân số giảm 1/4, nhân với 8 thì kết quả giảm 2: được 26.",
            "Chỉ cần nhân phần nguyên: 3 × 8 rồi viết thêm 1/4, được 24 1/4.",
            "Phần phân số nhỏ đi một nửa nên cả kết quả nhỏ đi một nửa: được 14."
          ],
          reason: 0,
          sample: { guess: "26", reason: 0 }
        }
      ],
      "7.5": [
        {
          id: "7.5-x1", type: "ways",
          ask: "Tính 12 ÷ 3/5. Giải theo nhiều cách.",
          why: "“Nhân với số nghịch đảo” là quy tắc; đếm các phần 1/5 giải thích vì sao quy tắc đó đúng.",
          strategies: [
            { id: "s1", name: "Nhân với số nghịch đảo", steps: [
              { ask: "Số nghịch đảo của 3/5 là?", answer: "5/3" }, { answer: 20 }] },
            { id: "s2", name: "Đếm số phần 1/5 trong 12, rồi gom 3 phần thành một nhóm 3/5", steps: [
              { ask: "Trong 12 có bao nhiêu phần 1/5?", answer: 60 }, { answer: 20 }] },
            { id: "s3", name: "Đổi phân số ra số thập phân", steps: [
              { ask: "3/5 viết dạng số thập phân là?", answer: 0.6 }, { answer: 20 }] }
          ],
          sample: { strategy: "s1", steps: ["5/3", "20"] }
        },
        {
          id: "7.5-x2", type: "many", arity: 3, ordered: true,
          labels: ["Số nguyên n", "Tử số a", "Mẫu số b"],
          ask: "Tìm số nguyên dương n và phân số tối giản a/b nhỏ hơn 1 sao cho n ÷ a/b = 24. Nhập n, a, b. Tìm nhiều bộ khác nhau.",
          why: "Chia cho phân số nhỏ hơn 1 luôn làm số lớn lên; tìm ngược giúp em hiểu “lớn lên bao nhiêu lần” chính là b/a.",
          check: function (v) {
            const n = v[0], a = v[1], b = v[2];
            return inRange(n, 1, 23) && inRange(b, 2, 1000) && inRange(a, 1, b - 1) && gcd(a, b) === 1 && n * b === 24 * a;
          },
          challenge: function (v) { return v[0] > 20; },
          challengeText: "n lớn hơn 20.",
          kinds: [
            { id: "unit", text: "a/b là phân số đơn vị (n là ước của 24)", test: function (v) { return v[1] === 1; } },
            { id: "full", text: "b = 24 (n và 24 không có ước chung)", test: function (v) { return v[2] === 24; } },
            { id: "other", text: "n/24 rút gọn được, a khác 1", test: function () { return true; } }
          ],
          kindSamples: [["2", "1", "12"], ["3", "1", "8"], ["5", "5", "24"], ["7", "7", "24"], ["9", "3", "8"]],
          sample: { values: ["6", "1", "4"] }
        },
        {
          id: "7.5-x3", type: "whatif", base: 25,
          ask: "Ví dụ: 10 ÷ 2/5 = 25. Nếu số chia gấp đôi thành 4/5, tức là tính 10 ÷ 4/5, thì kết quả bằng bao nhiêu?",
          why: "Số chia lớn hơn thì thương nhỏ hơn — biết điều này giúp em kiểm tra nhanh mọi phép chia phân số.",
          answer: function () { return 10 * 5 / 4; },
          reasons: [
            "Số chia gấp đôi thì thương giảm một nửa: 25 : 2 = 12 1/2.",
            "Phân số lớn hơn thì kết quả lớn hơn, nên thương gấp đôi: 50.",
            "Chia cho phân số cũng như nhân với phân số đó: 10 × 4/5 = 8."
          ],
          reason: 0,
          sample: { guess: "12,5", reason: 0 }
        }
      ],
      "7.6": [
        {
          id: "7.6-x1", type: "many", arity: 2, ordered: true,
          labels: ["Phân số lớn hơn", "Phân số nhỏ hơn"],
          ask: "Tìm hai phân số dương (không phải số nguyên) có hiệu bằng 1/12: phân số thứ nhất trừ phân số thứ hai được 1/12. Tìm nhiều cặp khác nhau.",
          why: "Phương pháp chéo (a×d − b×c)/(b×d) cho thấy những cặp phân số nào có hiệu đẹp — rất hữu ích khi tính nhẩm.",
          check: function (v) { return pos(v[0]) && pos(v[1]) && !whole(v[0]) && !whole(v[1]) && eq(v[0] - v[1], 1 / 12); },
          challenge: function (v) { return whole(1 / v[0]) && whole(1 / v[1]); },
          challengeText: "Cả hai phân số đều có tử số là 1.",
          kinds: [
            { id: "small", text: "cả hai phân số nhỏ hơn 1", test: function (v) { return v[0] < 1; } },
            { id: "big", text: "cả hai phân số lớn hơn 1", test: function (v) { return v[1] > 1; } },
            { id: "mix", text: "một phân số lớn hơn 1, một phân số nhỏ hơn 1", test: function () { return true; } }
          ],
          kindSamples: [["1/3", "1/4"], ["1/2", "5/12"], ["7/6", "13/12"], ["5/4", "7/6"], ["25/24", "23/24"]],
          sample: { values: ["1/2", "5/12"] }
        },
        {
          id: "7.6-x2", type: "pattern",
          ask: "Phép tính thứ n là 6 ÷ 3/(n + 3): phép tính 1, 2, 3 là 6 ÷ 3/4 = 8, 6 ÷ 3/5 = 10, 6 ÷ 3/6 = 12. Tìm kết quả của phép tính 5, 10, 17 và quy luật theo n.",
          why: "Chia nhẩm n ÷ a/b = n × b ÷ a: ở đây 6 ÷ 3 = 2 luôn đi trước, nên kết quả chỉ là 2 × (n + 3).",
          seq: [8, 10, 12],
          term: function (n) { return 6 * (n + 3) / 3; },
          askN: [5, 10, 17],
          sample: { terms: { 5: "16", 10: "26", 17: "40" }, rule: "2n+6" }
        },
        {
          id: "7.6-x3", type: "make",
          ask: "Tự ra đề “phần còn lại”: trong một hộp kẹo, a/b số kẹo là kẹo sữa, c/d là kẹo chanh, còn lại là kẹo bạc hà. Chọn a < b, c < d (b, d từ 2 đến 30) sao cho hai phần cộng lại nhỏ hơn 1. Đề hỏi: kẹo bạc hà chiếm bao nhiêu phần?",
          why: "Bài “phần còn lại” là 1 trừ đi tổng các phần — tự chọn số giúp em thấy mẫu số chung nhỏ nhất làm phép tính gọn đến đâu.",
          template: "a/b kẹo sữa, c/d kẹo chanh, còn lại kẹo bạc hà. Kẹo bạc hà chiếm bao nhiêu phần?",
          fields: [{ id: "a", label: "Tử a" }, { id: "b", label: "Mẫu b" }, { id: "c", label: "Tử c" }, { id: "d", label: "Mẫu d" }],
          valid: function (f) {
            return inRange(f.b, 2, 30) && inRange(f.d, 2, 30) && inRange(f.a, 1, f.b - 1) && inRange(f.c, 1, f.d - 1) && leftNum(f) > 0;
          },
          solve: function (f) { return leftNum(f) / (f.b * f.d); },
          render: function (f, lang) {
            return lang === "en"
              ? "In a box of sweets, " + f.a + "/" + f.b + " are milk sweets, " + f.c + "/" + f.d + " are lemon sweets and the rest are mint sweets. What fraction of the sweets are mint?"
              : "Trong một hộp kẹo, " + f.a + "/" + f.b + " số kẹo là kẹo sữa, " + f.c + "/" + f.d + " là kẹo chanh, còn lại là kẹo bạc hà. Kẹo bạc hà chiếm bao nhiêu phần số kẹo?";
          },
          criteria: [
            { id: "lcd", text: "Hai mẫu khác nhau và mẫu chung nhỏ nhất nhỏ hơn tích hai mẫu", test: function (f) { return f.b !== f.d && lcm(f.b, f.d) < f.b * f.d; } },
            { id: "most", text: "Kẹo bạc hà nhiều hơn mỗi loại kia", test: function (f) { return leftNum(f) > f.a * f.d && leftNum(f) > f.c * f.b; } },
            { id: "unit", text: "Phần còn lại rút gọn được thành phân số có tử số là 1", test: function (f) { return (f.b * f.d) % leftNum(f) === 0; } },
            { id: "tiny", text: "Phần còn lại nhỏ hơn 1/10", test: function (f) { return 10 * leftNum(f) < f.b * f.d; } }
          ],
          sample: { fields: { a: "1", b: "4", c: "1", d: "6" } }
        }
      ]
    },
    tr: {
      en: {
        "q.7.1-x1.labels": ["Numerator", "Denominator"],
        "q.7.1-x1.ask": "Find fractions in their simplest form, less than 1, with a denominator of at most 20, whose division stops when you change them into decimals (terminating decimals). Enter the numerator and the denominator. Find as many as you can!",
        "q.7.1-x1.why": "Just by looking at the prime factors of the denominator (only 2 and 5) you know in advance whether the division stops, without dividing.",
        "q.7.1-x1.challengeText": "The decimal has exactly 4 digits after the decimal point.",
        "q.7.1-x1.kinds": ["the denominator has only the prime factor 2", "the denominator has only the prime factor 5", "the denominator has both factors 2 and 5"],
        "q.7.1-x2.ask": "Example: 1/9 = 0.(1) = 0.111…, and 9 × 1/9 = 1. What is the recurring decimal 0.(9) = 0.999… equal to?",
        "q.7.1-x2.why": "Writing a recurring decimal as a fraction gives its exact value — even when the result surprises you.",
        "q.7.1-x2.reasons": [
          "0.(9) = 9 × 0.(1) = 9 × 1/9 = 1, so 0.(9) is exactly 1.",
          "0.(9) is always a little less than 1, about 0.999.",
          "0.(9) = 9/10 because the digit 9 is in the tenths column."
        ],
        "q.7.1-x3.ask": "Write the recurring decimal 0.(36) = 0.363636… as a fraction in its simplest form. Solve it in several ways.",
        "q.7.1-x3.why": "Every recurring decimal is a fraction; changing both ways lets you choose the form that is easiest to work with.",
        "q.7.1-x3.strategies": [
          "Use 0.(01) = 1/99: 0.(36) = 36/99, then simplify",
          "Let x = 0.(36), then multiply by 100",
          "Notice that 0.(36) = 4 × 0.(09)"
        ],
        "q.7.1-x3.steps.s1": ["HCF(36, 99) = ?"],
        "q.7.1-x3.steps.s2": ["100x − x = 36.(36) − 0.(36) = ?"],
        "q.7.1-x3.steps.s3": ["What is 0.(09) as a fraction in its simplest form?"],
        "q.7.2-x1.labels": ["Number x"],
        "q.7.2-x1.ask": "Find numbers x between −3 1/4 and −3 1/5 (that is, −3 1/4 < x < −3 1/5). You can type a fraction, a negative mixed number or a decimal (how to type: −3 1/4 or −13/4). Find many different numbers.",
        "q.7.2-x1.why": "There are infinitely many numbers between two negative numbers that are very close; to find them you must remember that the order is reversed for negative numbers.",
        "q.7.2-x1.challengeText": "x is a fraction with the smallest possible denominator.",
        "q.7.2-x1.kinds": ["a decimal with 2 decimal places", "a terminating decimal with 3 or more decimal places", "a recurring decimal"],
        "q.7.2-x2.ask": "Make a problem comparing two fractions a/b and c/d (b and d from 2 to 30; a and c whole numbers from −100 to 100, not 0, and they can be negative). The two fractions are not equal and are not whole numbers. The problem asks: which fraction is greater?",
        "q.7.2-x2.why": "Making two fractions that are very close forces you to use a reliable method — common denominators or cross-multiplying — instead of guessing.",
        "q.7.2-x2.template": "Which is greater: a/b or c/d?",
        "q.7.2-x2.fields": ["Numerator a", "Denominator b", "Numerator c", "Denominator d"],
        "q.7.2-x2.criteria": [
          "Both have an absolute value greater than 1 and the same whole-number part as mixed numbers",
          "The two fractions are very close: the cross products a×d and b×c differ by 1",
          "Both fractions are negative",
          "The denominators are different and neither is a multiple of the other"
        ],
        "q.7.2-x3.ask": "How much greater is 11/14 than 7/9? Write the answer as a fraction. Solve it in several ways.",
        "q.7.2-x3.why": "Two fractions that are very close are hard to compare by eye; several methods let you compare and check at the same time.",
        "q.7.2-x3.strategies": [
          "Use the common denominator 126",
          "Cross method: (11 × 9 − 7 × 14) / (14 × 9)",
          "Compare how much each fraction is short of 1"
        ],
        "q.7.2-x3.steps.s1": ["7/9 = ?/126", "11/14 = ?/126"],
        "q.7.2-x3.steps.s2": ["11 × 9 − 7 × 14 = ?"],
        "q.7.2-x3.steps.s3": ["1 − 7/9 = ?", "1 − 11/14 = ?"],
        "q.7.3-x1.ask": "Work out 6 1/5 − 2 2/3. Type the answer as a fraction or a mixed number. Solve it in several ways.",
        "q.7.3-x1.why": "Each way of subtracting mixed numbers has its own strength; “counting on” along a number line also helps you estimate quickly.",
        "q.7.3-x1.strategies": [
          "Change both mixed numbers into fractions with denominator 15",
          "Subtract the whole numbers and the fractions separately, borrowing 1 when needed",
          "Count on from 2 2/3 to 6 1/5"
        ],
        "q.7.3-x1.steps.s1": ["6 1/5 = ?/15", "2 2/3 = ?/15"],
        "q.7.3-x1.steps.s2": ["Common denominator: 6 1/5 = 6 3/15. Borrow 1 from the whole number: 6 3/15 = 5 ?/15"],
        "q.7.3-x1.steps.s3": ["How much do you add to go from 2 2/3 to 3?", "How much do you add to go from 3 to 6 1/5?"],
        "q.7.3-x2.ask": "Example: 5 1/3 − 2 2/3 = 2 2/3. If you add 1/3 to both numbers, you get 5 2/3 − 3. What is the new difference?",
        "q.7.3-x2.why": "Adding the same amount to both numbers keeps the difference the same — this trick turns a subtraction that needs borrowing into subtracting a whole number.",
        "q.7.3-x2.reasons": [
          "Both numbers increase by 1/3, so the gap between them stays the same: the difference is still 2 2/3.",
          "The first number increases by 1/3, so the difference also increases by 1/3.",
          "Both numbers change, so the difference increases by 2/3."
        ],
        "q.7.3-x3.ask": "Make a subtraction of two mixed numbers (whole-number parts from 0 to 20, denominators from 2 to 20, numerators less than denominators). The first number must be greater than the second. The problem asks for the difference.",
        "q.7.3-x3.why": "Choosing the numbers yourself shows when you must borrow 1, when you need a common denominator, and when the answer turns out surprisingly neat.",
        "q.7.3-x3.template": "w₁ n₁/d₁ − w₂ n₂/d₂ = ?",
        "q.7.3-x3.fields": ["Whole part of the first number", "Numerator of the first number", "Denominator of the first number", "Whole part of the second number", "Numerator of the second number", "Denominator of the second number"],
        "q.7.3-x3.criteria": [
          "You must borrow 1 from the whole number (the fraction part of the first number is smaller)",
          "The denominators are different and neither is a multiple of the other",
          "Both numbers are greater than 2 but the difference is less than 1",
          "The denominators are different but the difference is a whole number"
        ],
        "q.7.4-x1.labels": ["Mixed number (not a whole number)", "Integer n"],
        "q.7.4-x1.ask": "Find a mixed number (not a whole number) and an integer n of 2 or more so that the mixed number × n = 35. Type the mixed number as 4 3/8 or 35/8. Find several different pairs.",
        "q.7.4-x1.why": "Working backwards from multiplying an integer by a mixed number shows that the denominator must “disappear” for the product to be a whole number.",
        "q.7.4-x1.challengeText": "The mixed number is between 4 and 5.",
        "q.7.4-x1.kinds": ["35/n simplifies (n is a multiple of 5 or 7)", "35/n is in simplest form and is a terminating decimal", "35/n is in simplest form and is a recurring decimal"],
        "q.7.4-x2.ask": "Calculation n is (n 2/3) × 6; for example, calculations 1, 2, 3 are 1 2/3 × 6 = 10, 2 2/3 × 6 = 16, 3 2/3 × 6 = 22. Find the answers to calculations 5, 9 and 20, and the rule in terms of n.",
        "q.7.4-x2.why": "Partition the mixed number: n × 6 + 2/3 × 6 = 6n + 4 — the rule is exactly the partitioning method.",
        "q.7.4-x3.ask": "Example: 3 1/2 × 8 = 3 × 8 + 1/2 × 8 = 24 + 4 = 28. If it changes to 3 1/4 × 8, what is the answer?",
        "q.7.4-x3.why": "The fraction part must be multiplied by the integer too — predicting first helps you catch the mistake of multiplying only the whole number.",
        "q.7.4-x3.reasons": [
          "The fraction part goes down by 1/4, and multiplied by 8 the answer goes down by 2: it is 26.",
          "You only multiply the whole number: 3 × 8, then write 1/4 after it, giving 24 1/4.",
          "The fraction part halves, so the whole answer halves: it is 14."
        ],
        "q.7.5-x1.ask": "Work out 12 ÷ 3/5. Solve it in several ways.",
        "q.7.5-x1.why": "“Multiply by the reciprocal” is the rule; counting the fifths explains why the rule works.",
        "q.7.5-x1.strategies": [
          "Multiply by the reciprocal",
          "Count the fifths in 12, then group 3 fifths together to make 3/5",
          "Change the fraction into a decimal"
        ],
        "q.7.5-x1.steps.s1": ["What is the reciprocal of 3/5?"],
        "q.7.5-x1.steps.s2": ["How many fifths are there in 12?"],
        "q.7.5-x1.steps.s3": ["What is 3/5 as a decimal?"],
        "q.7.5-x2.labels": ["Integer n", "Numerator a", "Denominator b"],
        "q.7.5-x2.ask": "Find a positive integer n and a fraction a/b in its simplest form, less than 1, so that n ÷ a/b = 24. Enter n, a and b. Find many different sets.",
        "q.7.5-x2.why": "Dividing by a fraction less than 1 always makes a number bigger; working backwards shows that “how many times bigger” is exactly b/a.",
        "q.7.5-x2.challengeText": "n is greater than 20.",
        "q.7.5-x2.kinds": ["a/b is a unit fraction (n is a factor of 24)", "b = 24 (n and 24 have no common factor)", "n/24 simplifies and a is not 1"],
        "q.7.5-x3.ask": "Example: 10 ÷ 2/5 = 25. If the divisor is doubled to 4/5, so you work out 10 ÷ 4/5, what is the answer?",
        "q.7.5-x3.why": "A larger divisor gives a smaller answer — knowing this lets you check any division by a fraction quickly.",
        "q.7.5-x3.reasons": [
          "When the divisor doubles, the answer halves: 25 ÷ 2 = 12 1/2.",
          "A larger fraction gives a larger answer, so the answer doubles: 50.",
          "Dividing by a fraction is the same as multiplying by it: 10 × 4/5 = 8."
        ],
        "q.7.6-x1.labels": ["Greater fraction", "Smaller fraction"],
        "q.7.6-x1.ask": "Find two positive fractions (not whole numbers) with a difference of 1/12: the first fraction minus the second fraction is 1/12. Find several different pairs.",
        "q.7.6-x1.why": "The cross method (a×d − b×c)/(b×d) shows which pairs of fractions have a neat difference — very useful for mental calculation.",
        "q.7.6-x1.challengeText": "Both fractions have a numerator of 1.",
        "q.7.6-x1.kinds": ["both fractions are less than 1", "both fractions are greater than 1", "one fraction is greater than 1, the other less than 1"],
        "q.7.6-x2.ask": "Calculation n is 6 ÷ 3/(n + 3): calculations 1, 2, 3 are 6 ÷ 3/4 = 8, 6 ÷ 3/5 = 10, 6 ÷ 3/6 = 12. Find the answers to calculations 5, 10 and 17, and the rule in terms of n.",
        "q.7.6-x2.why": "Mental division n ÷ a/b = n × b ÷ a: here 6 ÷ 3 = 2 always comes first, so the answer is just 2 × (n + 3).",
        "q.7.6-x3.ask": "Make a “what is left” problem: in a box of sweets, a/b of the sweets are milk sweets, c/d are lemon sweets and the rest are mint sweets. Choose a < b and c < d (b and d from 2 to 30) so that the two parts add up to less than 1. The problem asks: what fraction of the sweets are mint?",
        "q.7.6-x3.why": "A “what is left” problem is 1 minus the sum of the parts — choosing your own numbers shows how much the lowest common denominator simplifies the work.",
        "q.7.6-x3.template": "a/b milk sweets, c/d lemon sweets, the rest are mint sweets. What fraction are mint?",
        "q.7.6-x3.fields": ["Numerator a", "Denominator b", "Numerator c", "Denominator d"],
        "q.7.6-x3.criteria": [
          "The denominators are different and their lowest common denominator is less than their product",
          "There are more mint sweets than each of the other kinds",
          "The part that is left simplifies to a fraction with numerator 1",
          "The part that is left is less than 1/10"
        ]
      },
      vi: {}
    }
  });
})();
