// 🚀 Extension quests — Math 8, unit 4 (Decimals). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. Check functions receive NUMBERS parsed by the game; decimal results are compared with
// a small tolerance (floating point), and decimal places are read from the number's shortest decimal form.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const EPS = 1e-9;
  const isInt = Number.isInteger;
  const clean = function (x) { return Number(Number(x).toPrecision(12)); };
  const near = function (a, b) { return Math.abs(a - b) < EPS * Math.max(1, Math.abs(b)); };
  const show = function (x, lang) { const s = String(clean(x)).replace("-", "−"); return lang === "en" ? s : s.replace(".", ","); };
  const decPlaces = function (x) { const s = String(clean(x)); return s.indexOf("e") !== -1 ? 99 : s.indexOf(".") === -1 ? 0 : s.length - s.indexOf(".") - 1; };
  const isPow10 = function (r) { if (!(r > 0)) return false; const l = Math.log10(r); return Math.abs(l - Math.round(l)) < 1e-9; };

  window.GAME_QUESTS.push({
    unit: 4,
    sections: {
      "4.1": [
        {
          id: "4.1-x1", type: "many", arity: 1,
          labels: ["Khối lượng (kg)"],
          ask: "Một gói hàng nặng hơn 2,35 kg nhưng nhẹ hơn 2400 g. Tìm khối lượng có thể của gói hàng, tính bằng kg.",
          why: "Đổi về cùng đơn vị rồi so sánh từng hàng giúp em thấy giữa hai số thập phân luôn còn rất nhiều số khác.",
          check: function (v) { return Number.isFinite(v[0]) && v[0] > 2.35 && v[0] < 2.4; },
          challenge: function (v) { return v[0] < 2.351; },
          challengeText: "Gói hàng nặng chưa tới 2,351 kg.",
          kinds: [
            { id: "d2", text: "có 2 chữ số thập phân", test: function (v) { return decPlaces(v[0]) === 2; } },
            { id: "d3", text: "có 3 chữ số thập phân", test: function (v) { return decPlaces(v[0]) === 3; } },
            { id: "d4", text: "từ 4 chữ số thập phân trở lên", test: function () { return true; } }
          ],
          kindSamples: [["2.36"], ["2.39"], ["2.355"], ["2.399"], ["2.3501"]],
          sample: { values: ["2.38"] }
        },
        {
          id: "4.1-x2", type: "whatif", base: 5.609,
          ask: "Xếp 5,6; 5,68; 5,609 từ bé đến lớn thì số đứng giữa là 5,609. Nếu xếp −5,6; −5,68; −5,609 từ bé đến lớn thì số đứng giữa là số nào?",
          why: "Với số âm, số nằm xa 0 hơn lại nhỏ hơn — hiểu điều này giúp em so sánh đúng nhiệt độ, độ cao dưới mực nước biển…",
          answer: function () { return -5.609; },
          reasons: [
            "Đổi dấu thì thứ tự đảo ngược, nhưng số ở giữa vẫn ở giữa: −5,68 < −5,609 < −5,6.",
            "Thứ tự đảo ngược nên số đứng giữa cũng đổi thành −5,68.",
            "Số đứng giữa là −5,6 vì nó ngắn nhất."
          ],
          reason: 0,
          sample: { guess: "-5.609", reason: 0 }
        },
        {
          id: "4.1-x3", type: "make",
          ask: "Tự chọn hai số thập phân khác nhau x và y (độ lớn nhỏ hơn 1000, tối đa 4 chữ số thập phân). Đề của em: số nào lớn hơn? Đáp án là số lớn hơn.",
          why: "Tự tạo cặp số “dễ nhầm” giúp em nhớ cách so sánh theo từng hàng thay vì đếm chữ số.",
          template: "Số nào lớn hơn: x hay y?",
          fields: [{ id: "x", label: "Số x" }, { id: "y", label: "Số y" }],
          valid: function (f) {
            return Math.abs(f.x) < 1000 && Math.abs(f.y) < 1000 && f.x !== f.y && decPlaces(f.x) <= 4 && decPlaces(f.y) <= 4;
          },
          solve: function (f) { return Math.max(f.x, f.y); },
          render: function (f, lang) {
            return lang === "en" ? "Which is larger: " + show(f.x, "en") + " or " + show(f.y, "en") + "? Enter the larger number."
              : "Số nào lớn hơn: " + show(f.x, "vi") + " hay " + show(f.y, "vi") + "? Nhập số lớn hơn.";
          },
          criteria: [
            { id: "fewer", text: "Số có ít chữ số thập phân hơn lại là số lớn hơn", test: function (f) { const hi = Math.max(f.x, f.y), lo = Math.min(f.x, f.y); return decPlaces(hi) < decPlaces(lo); } },
            { id: "sameint", text: "Hai số có cùng phần nguyên (cùng dấu)", test: function (f) { return Math.trunc(f.x) === Math.trunc(f.y) && f.x * f.y > 0; } },
            { id: "close", text: "Hai số chênh nhau chưa tới 0,01", test: function (f) { return Math.abs(f.x - f.y) < 0.01 - EPS; } },
            { id: "bothneg", text: "Cả hai số đều âm", test: function (f) { return f.x < 0 && f.y < 0; } },
            { id: "samedp", text: "Hai số có cùng số chữ số thập phân", test: function (f) { return decPlaces(f.x) === decPlaces(f.y); } }
          ],
          sample: { fields: { x: "7.9", y: "7.85" } }
        }
      ],
      "4.2": [
        {
          id: "4.2-x1", type: "many", arity: 2, ordered: true,
          labels: ["a", "b"],
          ask: "Biết 36 × 15 = 540. Tìm hai số a, b sao cho a × b = 5,4, trong đó a là 36 nhân hoặc chia cho 10, 100, 1000, … và b là 15 nhân hoặc chia cho 10, 100, 1000, …",
          why: "Tổng số chữ số thập phân của hai thừa số quyết định vị trí dấu phẩy của tích — em đang khám phá quy tắc đó theo chiều ngược lại.",
          check: function (v) { return isPow10(v[0] / 36) && isPow10(v[1] / 15) && near(v[0] * v[1], 5.4); },
          challenge: function (v) { return v[0] < 0.01 || v[1] < 0.01; },
          challengeText: "Một trong hai số nhỏ hơn 0,01.",
          kinds: [
            { id: "keep", text: "giữ nguyên một số, chia số kia cho 100", test: function (v) { return near(v[0], 36) || near(v[1], 15); } },
            { id: "both", text: "chia cả hai số, mỗi số cho 10", test: function (v) { return v[0] < 36 && v[1] < 15; } },
            { id: "mix", text: "nhân một số, chia số kia", test: function () { return true; } }
          ],
          kindSamples: [["3.6", "1.5"], ["0.36", "15"], ["36", "0.15"], ["360", "0.015"], ["0.036", "150"]],
          sample: { values: ["3.6", "1.5"] }
        },
        {
          id: "4.2-x2", type: "ways",
          ask: "Biết 42 × 87 = 3654. Tính 4,2 × 0,87 theo nhiều cách khác nhau.",
          why: "Đếm chữ số thập phân, nhân với 0,01 hay tách thừa số đều cho cùng kết quả — dùng cách này để kiểm tra cách kia.",
          strategies: [
            { id: "s1", name: "Đếm tổng số chữ số thập phân", steps: [
              { ask: "Hai thừa số có tổng cộng bao nhiêu chữ số thập phân?", answer: 3 }, { answer: 3.654 }] },
            { id: "s2", name: "Tính 4,2 × 87 trước rồi nhân với 0,01", steps: [
              { ask: "4,2 × 87 = ?", answer: 365.4 }, { answer: 3.654 }] },
            { id: "s3", name: "Tách 4,2 = 4 + 0,2", steps: [
              { ask: "4 × 0,87 = ?", answer: 3.48 }, { ask: "0,2 × 0,87 = ?", answer: 0.174 }, { answer: 3.654 }] }
          ],
          sample: { strategy: "s1", steps: ["3", "3.654"] }
        },
        {
          id: "4.2-x3", type: "whatif", base: 2.086,
          ask: "Ví dụ: 5,96 × 0,35 = 2,086. Nếu đổi thành 59,6 × 0,035 thì kết quả là bao nhiêu?",
          why: "Một thừa số gấp 10 lần, thừa số kia giảm 10 lần thì tích giữ nguyên — mẹo nhanh để kiểm tra vị trí dấu phẩy.",
          answer: function () { return 2.086; },
          reasons: [
            "Một thừa số nhân 10, thừa số kia chia 10, nên tích không đổi.",
            "Có nhiều chữ số thập phân hơn nên tích nhỏ hơn: 0,2086.",
            "59,6 lớn gấp 10 lần 5,96 nên tích cũng lớn gấp 10 lần: 20,86."
          ],
          reason: 0,
          sample: { guess: "2.086", reason: 0 }
        }
      ],
      "4.3": [
        {
          id: "4.3-x1", type: "make",
          ask: "Tự ra phép chia a ÷ b trong đó số chia b là số thập phân (không phải số nguyên, 0 < |b| < 100), a có tối đa 3 chữ số thập phân và thương có tối đa 3 chữ số thập phân. Đáp án là thương.",
          why: "Chọn số chia sao cho thương “đẹp” buộc em nhân cả số bị chia và số chia với cùng một số — đúng cách chia cho số thập phân.",
          template: "Tính a ÷ b",
          fields: [{ id: "a", label: "Số bị chia a" }, { id: "b", label: "Số chia b" }],
          valid: function (f) {
            if (!(Math.abs(f.a) < 10000 && Math.abs(f.b) < 100 && f.b !== 0 && f.a !== 0 && !isInt(f.b))) return false;
            if (decPlaces(f.a) > 3 || decPlaces(f.b) > 3) return false;
            const q = f.a / f.b;
            return Math.abs(q * 1000 - Math.round(q * 1000)) < 1e-6;
          },
          solve: function (f) { return clean(f.a / f.b); },
          render: function (f, lang) { return (lang === "en" ? "Work out " : "Tính ") + show(f.a, lang) + " ÷ " + (f.b < 0 ? "(" + show(f.b, lang) + ")" : show(f.b, lang)) + "."; },
          criteria: [
            { id: "bigger", text: "Thương lớn hơn số bị chia (về độ lớn)", test: function (f) { return Math.abs(f.b) < 1; } },
            { id: "twodp", text: "Số chia có hai chữ số thập phân", test: function (f) { return decPlaces(f.b) === 2; } },
            { id: "intq", text: "Thương là số nguyên dù số bị chia và số chia đều là số thập phân", test: function (f) { return !isInt(f.a) && isInt(clean(f.a / f.b)); } },
            { id: "neg", text: "Có số âm", test: function (f) { return f.a < 0 || f.b < 0; } },
            { id: "threedp", text: "Thương có đúng 3 chữ số thập phân", test: function (f) { return decPlaces(f.a / f.b) === 3; } }
          ],
          sample: { fields: { a: "3.468", b: "0.8" } }
        },
        {
          id: "4.3-x2", type: "many", arity: 1,
          labels: ["Số chia"],
          ask: "Tìm số b có đúng một chữ số thập phân khác 0 (0 < b < 10) sao cho 3,6 ÷ b là một số nguyên.",
          why: "3,6 ÷ b = 36 ÷ (10b): em đang dùng đúng ý “nhân cả hai số với 10” để biến phép chia số thập phân thành phép chia số nguyên.",
          check: function (v) {
            const b = v[0];
            return b > 0 && b < 10 && decPlaces(b) === 1 && near(3.6 / b, Math.round(3.6 / b));
          },
          challenge: function (v) { return Math.round(3.6 / v[0]) % 2 === 1; },
          challengeText: "Thương là số lẻ.",
          kinds: [
            { id: "one", text: "b = 3,6, thương bằng 1", test: function (v) { return near(v[0], 3.6); } },
            { id: "small", text: "b nhỏ hơn 1, thương lớn hơn 3,6", test: function (v) { return v[0] < 1; } },
            { id: "big", text: "b lớn hơn 1, thương nhỏ hơn 3,6", test: function () { return true; } }
          ],
          kindSamples: [["3.6"], ["0.4"], ["0.9"], ["1.2"], ["1.8"]],
          sample: { values: ["0.4"] }
        },
        {
          id: "4.3-x3", type: "whatif", base: -70,
          ask: "Ví dụ: −42 ÷ 0,6 = −70. Nếu đổi thành −42 ÷ 0,06 thì kết quả là bao nhiêu?",
          why: "Số chia nhỏ đi 10 lần thì thương lớn lên 10 lần — ước lượng như vậy giúp em phát hiện dấu phẩy đặt sai.",
          answer: function () { return -700; },
          reasons: [
            "Số chia nhỏ đi 10 lần nên thương lớn gấp 10 lần về độ lớn: −700.",
            "Số chia nhỏ đi thì thương cũng nhỏ đi: −7.",
            "Chỉ thêm một chữ số 0 vào số chia nên thương không đổi: −70."
          ],
          reason: 0,
          sample: { guess: "-700", reason: 0 }
        }
      ],
      "4.4": [
        {
          id: "4.4-x1", type: "ways",
          ask: "Tính 45 × 0,98 theo nhiều cách khác nhau.",
          why: "Viết 0,98 = 1 − 0,02 hay tách 45 = 50 − 5 là những mẹo tính nhẩm giúp em kiểm tra kết quả bấm máy.",
          strategies: [
            { id: "s1", name: "Viết 0,98 = 1 − 0,02", steps: [{ ask: "45 × 0,02 = ?", answer: 0.9 }, { answer: 44.1 }] },
            { id: "s2", name: "Nhân như số nguyên rồi đặt dấu phẩy", steps: [{ ask: "45 × 98 = ?", answer: 4410 }, { answer: 44.1 }] },
            { id: "s3", name: "Viết 45 = 50 − 5", steps: [
              { ask: "50 × 0,98 = ?", answer: 49 }, { ask: "5 × 0,98 = ?", answer: 4.9 }, { answer: 44.1 }] }
          ],
          sample: { strategy: "s1", steps: ["0.9", "44.1"] }
        },
        {
          id: "4.4-x2", type: "pattern",
          ask: "11 × 0,9 = 9,9; 12 × 0,9 = 10,8; 13 × 0,9 = 11,7; … Số hạng thứ n là (n + 10) × 0,9. Tính nhẩm số hạng thứ 10, thứ 20, thứ 40 và viết quy luật.",
          why: "Nhân với 0,9 là “lấy số đó trừ đi một phần mười của nó” — mẹo giúp tính nhẩm cả dãy rất nhanh.",
          seq: [9.9, 10.8, 11.7],
          term: function (n) { return clean((n + 10) * 0.9); },
          askN: [10, 20, 40],
          sample: { terms: { 10: "18", 20: "27", 40: "45" }, rule: "0.9(n+10)" }
        },
        {
          id: "4.4-x3", type: "whatif", base: 25.2,
          ask: "Ví dụ: 28 × 0,9 = 28 − 2,8 = 25,2. Nếu đổi thành 28 × 1,1 thì kết quả là bao nhiêu?",
          why: "Viết 1,1 = 1 + 0,1 và 0,9 = 1 − 0,1 là cùng một ý: tách số thập phân thành phần dễ nhân.",
          answer: function () { return 30.8; },
          reasons: [
            "1,1 = 1 + 0,1 nên 28 + 2,8 = 30,8.",
            "Vẫn trừ đi 2,8 nên kết quả là 25,2.",
            "1,1 = 1 + 1 nên kết quả là 56."
          ],
          reason: 0,
          sample: { guess: "30.8", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.4.1-x1.labels": ["Mass (kg)"],
        "q.4.1-x1.ask": "A parcel weighs more than 2.35 kg but less than 2400 g. Find a possible mass of the parcel, in kg.",
        "q.4.1-x1.why": "Changing to the same unit and comparing place by place shows that there are always many more decimals between two decimals.",
        "q.4.1-x1.challengeText": "The parcel weighs less than 2.351 kg.",
        "q.4.1-x1.kinds": ["2 decimal places", "3 decimal places", "4 or more decimal places"],
        "q.4.1-x2.ask": "Putting 5.6, 5.68, 5.609 in order from smallest to largest, the middle number is 5.609. If you order −5.6, −5.68, −5.609 from smallest to largest, which number is in the middle?",
        "q.4.1-x2.why": "With negative numbers, the number further from 0 is smaller — understanding this helps you compare temperatures, depths below sea level…",
        "q.4.1-x2.reasons": [
          "Changing the signs reverses the order, but the middle number stays in the middle: −5.68 < −5.609 < −5.6.",
          "The order is reversed, so the middle number changes to −5.68 too.",
          "The middle number is −5.6 because it is the shortest."
        ],
        "q.4.1-x3.ask": "Choose two different decimals x and y (size less than 1000, at most 4 decimal places). Your problem: which is larger? The answer is the larger number.",
        "q.4.1-x3.why": "Making “easy to confuse” pairs helps you remember to compare place by place instead of counting digits.",
        "q.4.1-x3.template": "Which is larger: x or y?",
        "q.4.1-x3.fields": ["Number x", "Number y"],
        "q.4.1-x3.criteria": [
          "The number with fewer decimal places is the larger one",
          "The two numbers have the same whole-number part (same sign)",
          "The numbers differ by less than 0.01",
          "Both numbers are negative",
          "The two numbers have the same number of decimal places"
        ],
        "q.4.2-x1.labels": ["a", "b"],
        "q.4.2-x1.ask": "You know that 36 × 15 = 540. Find two numbers a and b with a × b = 5.4, where a is 36 multiplied or divided by 10, 100, 1000, … and b is 15 multiplied or divided by 10, 100, 1000, …",
        "q.4.2-x1.why": "The total number of decimal places in the two factors decides where the decimal point goes in the product — you are discovering that rule backwards.",
        "q.4.2-x1.challengeText": "One of the two numbers is less than 0.01.",
        "q.4.2-x1.kinds": ["keep one number, divide the other by 100", "divide both numbers, each by 10", "multiply one number, divide the other"],
        "q.4.2-x2.ask": "You know that 42 × 87 = 3654. Work out 4.2 × 0.87 in several different ways.",
        "q.4.2-x2.why": "Counting decimal places, multiplying by 0.01 or splitting a factor all give the same result — use one way to check another.",
        "q.4.2-x2.strategies": ["Count the total number of decimal places", "Work out 4.2 × 87 first, then multiply by 0.01", "Split 4.2 = 4 + 0.2"],
        "q.4.2-x2.steps.s1": ["How many decimal places do the two factors have altogether?"],
        "q.4.2-x2.steps.s2": ["4.2 × 87 = ?"],
        "q.4.2-x2.steps.s3": ["4 × 0.87 = ?", "0.2 × 0.87 = ?"],
        "q.4.2-x3.ask": "Example: 5.96 × 0.35 = 2.086. If it becomes 59.6 × 0.035, what is the result?",
        "q.4.2-x3.why": "If one factor is 10 times bigger and the other 10 times smaller, the product stays the same — a quick check on where the decimal point goes.",
        "q.4.2-x3.reasons": [
          "One factor is multiplied by 10 and the other divided by 10, so the product does not change.",
          "There are more decimal places, so the product is smaller: 0.2086.",
          "59.6 is 10 times 5.96, so the product is 10 times bigger: 20.86."
        ],
        "q.4.3-x1.ask": "Make a division a ÷ b where the divisor b is a decimal (not an integer, 0 < |b| < 100), a has at most 3 decimal places and the answer has at most 3 decimal places. The answer is the quotient.",
        "q.4.3-x1.why": "Choosing a divisor that gives a “nice” answer makes you multiply both numbers by the same number — exactly how to divide by a decimal.",
        "q.4.3-x1.template": "Work out a ÷ b",
        "q.4.3-x1.fields": ["Dividend a", "Divisor b"],
        "q.4.3-x1.criteria": [
          "The answer is larger than the number being divided (in size)",
          "The divisor has two decimal places",
          "The answer is an integer although both numbers are decimals",
          "There is a negative number",
          "The answer has exactly 3 decimal places"
        ],
        "q.4.3-x2.labels": ["Divisor"],
        "q.4.3-x2.ask": "Find a number b with exactly one non-zero decimal place (0 < b < 10) so that 3.6 ÷ b is an integer.",
        "q.4.3-x2.why": "3.6 ÷ b = 36 ÷ (10b): you are using the idea “multiply both numbers by 10” to turn a decimal division into an integer division.",
        "q.4.3-x2.challengeText": "The answer is an odd number.",
        "q.4.3-x2.kinds": ["b = 3.6, the answer is 1", "b is less than 1, the answer is greater than 3.6", "b is greater than 1, the answer is less than 3.6"],
        "q.4.3-x3.ask": "Example: −42 ÷ 0.6 = −70. If it becomes −42 ÷ 0.06, what is the result?",
        "q.4.3-x3.why": "When the divisor is 10 times smaller the answer is 10 times bigger — estimating like this helps you spot a misplaced decimal point.",
        "q.4.3-x3.reasons": [
          "The divisor is 10 times smaller, so the answer is 10 times bigger in size: −700.",
          "A smaller divisor gives a smaller answer: −7.",
          "Only a 0 was added to the divisor, so the answer does not change: −70."
        ],
        "q.4.4-x1.ask": "Work out 45 × 0.98 in several different ways.",
        "q.4.4-x1.why": "Writing 0.98 = 1 − 0.02 or splitting 45 = 50 − 5 are mental tricks that help you check a calculator answer.",
        "q.4.4-x1.strategies": ["Write 0.98 = 1 − 0.02", "Multiply as integers, then place the decimal point", "Write 45 = 50 − 5"],
        "q.4.4-x1.steps.s1": ["45 × 0.02 = ?"],
        "q.4.4-x1.steps.s2": ["45 × 98 = ?"],
        "q.4.4-x1.steps.s3": ["50 × 0.98 = ?", "5 × 0.98 = ?"],
        "q.4.4-x2.ask": "11 × 0.9 = 9.9; 12 × 0.9 = 10.8; 13 × 0.9 = 11.7; … Term n is (n + 10) × 0.9. Work out terms 10, 20 and 40 mentally and write the rule.",
        "q.4.4-x2.why": "Multiplying by 0.9 means “take the number and subtract a tenth of it” — a trick for working out the whole sequence quickly.",
        "q.4.4-x3.ask": "Example: 28 × 0.9 = 28 − 2.8 = 25.2. If it becomes 28 × 1.1, what is the result?",
        "q.4.4-x3.why": "Writing 1.1 = 1 + 0.1 and 0.9 = 1 − 0.1 is the same idea: split a decimal into parts that are easy to multiply.",
        "q.4.4-x3.reasons": [
          "1.1 = 1 + 0.1, so 28 + 2.8 = 30.8.",
          "You still subtract 2.8, so the result is 25.2.",
          "1.1 = 1 + 1, so the result is 56."
        ]
      },
      vi: {}
    }
  });
})();
