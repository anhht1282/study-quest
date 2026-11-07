// 🚀 Extension quests — Math 7, unit 4 (Decimals). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const clean = function (x) { return Math.round(x * 1e9) / 1e9; };
  const near = function (a, b) { return Math.abs(a - b) < 1e-9; };
  // number of decimal places of x (up to 6), or -1 when it has more
  const places = function (x) {
    for (let k = 0; k <= 6; k++) { const s = x * Math.pow(10, k); if (Math.abs(s - Math.round(s)) < 1e-6) return k; }
    return -1;
  };
  const fmt = function (x, lang) {
    const s = String(clean(x)).replace("-", "−");
    return lang === "en" ? s : s.replace(".", ",");
  };
  // like places, but a non-terminating value (e.g. typed as 2/3) counts as "many" places
  const placesOr99 = function (x) { const k = places(x); return k < 0 ? 99 : k; };
  const okDec = function (x, maxPlaces) { const k = places(x); return Number.isFinite(x) && k >= 0 && k <= maxPlaces; };
  const trio = function (f) { return [f.a, f.b, f.c]; };
  const sorted = function (f) { return trio(f).slice().sort(function (p, q) { return p - q; }); };
  // true when x has strictly more (or fewer) decimal places than both other numbers of the trio
  const placesOnly = function (f, x, more) {
    const k = places(x);
    return trio(f).filter(function (y) { return y !== x; }).every(function (y) { return more ? k > places(y) : k < places(y); });
  };
  const anyPair = function (f, test) {
    const t = trio(f);
    return test(t[0], t[1]) || test(t[0], t[2]) || test(t[1], t[2]);
  };
  const MULTS = [9, 11, 99, 101, 999, 1001];

  window.GAME_QUESTS.push({
    unit: 4,
    sections: {
      "4.1": [
        {
          id: "4.1-x1", type: "many", arity: 1,
          labels: ["Số thập phân"],
          ask: "Tìm các số lớn hơn 4,6 nhưng nhỏ hơn 4,61. Tìm càng nhiều số khác nhau càng tốt!",
          why: "Giữa 4,60 và 4,61 vẫn còn vô số số — chỉ cần viết thêm chữ số thập phân, đúng ý “thêm 0 ở cuối không đổi giá trị”.",
          check: function (v) { return v[0] > 4.6 && v[0] < 4.61; },
          challenge: function (v) { return v[0] < 4.605; },
          challengeText: "Số đó gần 4,6 hơn gần 4,61.",
          kinds: [
            { id: "p3", text: "có 3 chữ số thập phân", test: function (v) { return places(v[0]) === 3; } },
            { id: "p4", text: "có 4 chữ số thập phân", test: function (v) { return places(v[0]) === 4; } },
            { id: "p5", text: "có từ 5 chữ số thập phân trở lên", test: function () { return true; } }
          ],
          kindSamples: [["4,605"], ["4,607"], ["4,6051"], ["4,6099"], ["4,60001"]],
          sample: { values: ["4,607"] }
        },
        {
          id: "4.1-x2", type: "whatif", base: 4.6,
          ask: "Ví dụ: trong ba số 4,23; 4,6; 4,179 thì 4,6 lớn nhất. Nếu thay 4,6 bằng 4,06 thì số lớn nhất là số nào?",
          why: "Viết các số cho cùng số chữ số thập phân (4,060; 4,179; 4,230) là cách chắc chắn nhất để so sánh.",
          answer: function () { return 4.23; },
          reasons: [
            "4,06 = 4,060 nhỏ hơn 4,179 và 4,230, nên 4,23 lớn nhất.",
            "4,179 lớn nhất vì có nhiều chữ số nhất.",
            "4,06 vẫn lớn nhất vì 6 lớn hơn 2 và 1."
          ],
          reason: 0,
          sample: { guess: "4,23", reason: 0 }
        },
        {
          id: "4.1-x3", type: "make",
          ask: "Tự ra đề sắp xếp ba số thập phân khác nhau a, b, c (lớn hơn 0, nhỏ hơn 100, tối đa 4 chữ số thập phân). Người giải sắp xếp từ bé đến lớn và cho biết số đứng giữa.",
          why: "Chọn số sao cho đề có “bẫy” (số nhiều chữ số lại bé hơn) giúp em và bạn không còn so sánh theo độ dài số.",
          template: "Sắp xếp a; b; c từ bé đến lớn",
          fields: [{ id: "a", label: "Số a" }, { id: "b", label: "Số b" }, { id: "c", label: "Số c" }],
          valid: function (f) {
            return trio(f).every(function (x) { return x > 0 && x < 100 && okDec(x, 4); }) && f.a !== f.b && f.a !== f.c && f.b !== f.c;
          },
          solve: function (f) { return sorted(f)[1]; },
          render: function (f, lang) {
            const t = trio(f).map(function (x) { return fmt(x, lang); });
            return lang === "en"
              ? "Order " + t.join(", ") + " from smallest to largest. Which number is in the middle?"
              : "Sắp xếp " + t.join("; ") + " từ bé đến lớn. Số nào đứng giữa?";
          },
          criteria: [
            { id: "trap", text: "Số có nhiều chữ số thập phân nhất lại là số bé nhất", test: function (f) { return placesOnly(f, sorted(f)[0], true); } },
            { id: "short", text: "Số có ít chữ số thập phân nhất lại là số lớn nhất", test: function (f) { return placesOnly(f, sorted(f)[2], false); } },
            { id: "int", text: "Cả ba số có cùng phần nguyên", test: function (f) { return Math.floor(f.a) === Math.floor(f.b) && Math.floor(f.b) === Math.floor(f.c); } },
            { id: "tenth", text: "Có hai số giống nhau đến hàng phần mười", test: function (f) { return anyPair(f, function (p, q) { return Math.floor(clean(p * 10)) === Math.floor(clean(q * 10)); }); } },
            { id: "close", text: "Có hai số chênh nhau ít hơn 0,01", test: function (f) { return anyPair(f, function (p, q) { return Math.abs(p - q) < 0.01 - 1e-9; }); } }
          ],
          sample: { fields: { a: "2,19", b: "2,205", c: "2,3" } }
        }
      ],
      "4.2": [
        {
          id: "4.2-x1", type: "ways",
          ask: "Tính 12,4 − 5,8 theo nhiều cách.",
          why: "Tách phần nguyên, làm tròn rồi bù, hay đếm thêm — mỗi cách hợp với một kiểu số, và cách này kiểm tra cách kia.",
          strategies: [
            { id: "s1", name: "Tách phần nguyên và phần thập phân", steps: [
              { ask: "12 − 5 = ?", answer: 7 }, { ask: "0,4 − 0,8 = ?", answer: -0.4 }, { answer: 6.6 }] },
            { id: "s2", name: "Làm tròn 5,8 thành 6 rồi bù lại", steps: [{ ask: "12,4 − 6 = ?", answer: 6.4 }, { answer: 6.6 }] },
            { id: "s3", name: "Đếm thêm từ 5,8 lên 12,4", steps: [
              { ask: "Từ 5,8 lên 6 cần thêm bao nhiêu?", answer: 0.2 }, { ask: "Từ 6 lên 12,4 cần thêm bao nhiêu?", answer: 6.4 }, { answer: 6.6 }] }
          ],
          sample: { strategy: "s2", steps: ["6,4", "6,6"] }
        },
        {
          id: "4.2-x2", type: "pattern",
          ask: "Dãy 0,3; 0,7; 1,1; 1,5; … mỗi lần cộng 0,4. Tìm số hạng thứ 10, thứ 25, thứ 100 và số hạng tổng quát.",
          why: "Cộng số thập phân lặp lại cũng tạo thành dãy có quy luật như với số nguyên — chỉ cần đặt dấu phẩy cho đúng.",
          seq: [0.3, 0.7, 1.1, 1.5],
          term: function (n) { return clean(0.4 * n - 0.1); },
          askN: [10, 25, 100],
          sample: { terms: { 10: "3,9", 25: "9,9", 100: "39,9" }, rule: "0,4n-0,1" }
        },
        {
          id: "4.2-x3", type: "whatif", base: 5.4,
          ask: "Ví dụ: 8,3 − 2,9 = 5,4. Nếu đổi thành 8,3 − 2,09 thì kết quả là bao nhiêu?",
          why: "Đặt dấu phẩy thẳng cột (2,09 so với 2,90) tránh được lỗi nhầm giá trị của từng chữ số.",
          answer: function () { return 6.21; },
          reasons: [
            "2,09 nhỏ hơn 2,90; trừ đi số nhỏ hơn thì hiệu lớn hơn: 8,30 − 2,09 = 6,21.",
            "Thêm chữ số 0 không làm đổi giá trị nên kết quả vẫn là 5,4.",
            "2,09 có nhiều chữ số hơn nên lớn hơn 2,9, vì vậy hiệu nhỏ hơn 5,4."
          ],
          reason: 0,
          sample: { guess: "6,21", reason: 0 }
        }
      ],
      "4.3": [
        {
          id: "4.3-x1", type: "many", arity: 2, ordered: false,
          labels: ["Số thứ nhất", "Số thứ hai"],
          ask: "Tìm hai số dương, cả hai đều không phải số nguyên, có tích bằng 1,2.",
          why: "Đếm chữ số thập phân của hai thừa số rồi đặt dấu phẩy cho tích — mỗi cặp em tìm là một lần luyện quy tắc đó.",
          check: function (v) { return v[0] > 0 && v[1] > 0 && !isInt(v[0]) && !isInt(v[1]) && near(v[0] * v[1], 1.2); },
          challenge: function (v) { return places(v[0]) === 3 || places(v[1]) === 3; },
          challengeText: "Một trong hai số có đúng 3 chữ số thập phân.",
          kinds: [
            { id: "p1", text: "cả hai số có 1 chữ số thập phân", test: function (v) { return Math.max(placesOr99(v[0]), placesOr99(v[1])) === 1; } },
            { id: "p2", text: "số có nhiều chữ số thập phân nhất có 2 chữ số", test: function (v) { return Math.max(placesOr99(v[0]), placesOr99(v[1])) === 2; } },
            { id: "p3", text: "có số có từ 3 chữ số thập phân trở lên", test: function () { return true; } }
          ],
          kindSamples: [["0,5", "2,4"], ["0,8", "1,5"], ["0,25", "4,8"], ["1,25", "0,96"], ["0,125", "9,6"]],
          sample: { values: ["0,5", "2,4"] }
        },
        {
          id: "4.3-x2", type: "make",
          ask: "Tự ra phép nhân a × b với hai số dương nhỏ hơn 1000, mỗi số tối đa 3 chữ số thập phân, và ít nhất một số không phải số nguyên.",
          why: "Đề nhân hay làm người giải bất ngờ (tích nhỏ hơn thừa số, chữ số 0 biến mất) — ước lượng trước giúp tránh đặt sai dấu phẩy.",
          template: "Tính a × b",
          fields: [{ id: "a", label: "Số a" }, { id: "b", label: "Số b" }],
          valid: function (f) {
            return [f.a, f.b].every(function (x) { return x > 0 && x < 1000 && okDec(x, 3); }) && !(isInt(f.a) && isInt(f.b));
          },
          solve: function (f) { return clean(f.a * f.b); },
          render: function (f, lang) { return (lang === "en" ? "Work out " : "Tính ") + fmt(f.a, lang) + " × " + fmt(f.b, lang) + "."; },
          criteria: [
            { id: "int", text: "Tích là số nguyên dù cả hai số đều không phải số nguyên", test: function (f) { return !isInt(f.a) && !isInt(f.b) && places(f.a * f.b) === 0; } },
            { id: "less", text: "Tích nhỏ hơn cả hai thừa số", test: function (f) { const p = f.a * f.b; return p < f.a && p < f.b; } },
            { id: "dp3", text: "Hai số có tổng cộng từ 3 chữ số thập phân trở lên", test: function (f) { return places(f.a) + places(f.b) >= 3; } },
            { id: "drop", text: "Tích có chữ số 0 ở cuối phần thập phân bị lược đi (như 0,25 × 0,8 = 0,200 = 0,2)", test: function (f) { const k = places(f.a * f.b); return k > 0 && k < places(f.a) + places(f.b); } },
            { id: "big", text: "Một thừa số lớn hơn 100", test: function (f) { return f.a > 100 || f.b > 100; } }
          ],
          sample: { fields: { a: "0,25", b: "0,8" } }
        },
        {
          id: "4.3-x3", type: "whatif", base: 1761.2,
          ask: "Ví dụ: 476 × 3,7 = 1 761,2. Nếu đổi thành 47,6 × 0,37 thì kết quả là bao nhiêu?",
          why: "Phần chữ số (476 × 37 = 17 612) không đổi; chỉ cần đếm lại chữ số thập phân — cách tính nhanh cả một họ phép nhân.",
          answer: function () { return 17.612; },
          reasons: [
            "Đề có 1 + 2 = 3 chữ số thập phân nên 17 612 trở thành 17,612.",
            "Tích vẫn có 1 chữ số thập phân như ví dụ nên là 1 761,2.",
            "Hai số đều nhỏ đi 10 lần nên tích chỉ nhỏ đi 10 lần: 176,12."
          ],
          reason: 0,
          sample: { guess: "17,612", reason: 0 }
        }
      ],
      "4.4": [
        {
          id: "4.4-x1", type: "ways",
          ask: "Tính 13,5 ÷ 6 theo nhiều cách.",
          why: "Chia viết ngắn, tách số bị chia hay chia thành hai bước nhỏ đều đúng — và nhân ngược lại (2,25 × 6) để kiểm tra.",
          strategies: [
            { id: "s1", name: "Chia viết ngắn, thêm chữ số 0 khi còn dư", steps: [
              { ask: "13 ÷ 6 được 2, dư bao nhiêu?", answer: 1 }, { answer: 2.25 }] },
            { id: "s2", name: "Tách 13,5 = 12 + 1,5", steps: [
              { ask: "12 ÷ 6 = ?", answer: 2 }, { ask: "1,5 ÷ 6 = ?", answer: 0.25 }, { answer: 2.25 }] },
            { id: "s3", name: "Chia cho 2 rồi chia cho 3", steps: [{ ask: "13,5 ÷ 2 = ?", answer: 6.75 }, { answer: 2.25 }] }
          ],
          sample: { strategy: "s3", steps: ["6,75", "2,25"] }
        },
        {
          id: "4.4-x2", type: "many", arity: 1,
          labels: ["Số chia b"],
          ask: "Tìm số tự nhiên b từ 2 đến 50 sao cho 3,6 ÷ b cho kết quả chính xác (không phải làm tròn) với nhiều nhất 2 chữ số thập phân.",
          why: "Phép chia dừng ở hàng phần trăm khi 360 chia hết cho b — em nối chia số thập phân với ước và bội ở chương 1.",
          check: function (v) { return isInt(v[0]) && v[0] >= 2 && v[0] <= 50 && 360 % v[0] === 0; },
          challenge: function (v) { return 3.6 / v[0] < 0.1; },
          challengeText: "Kết quả nhỏ hơn 0,1.",
          kinds: [
            { id: "d1", text: "kết quả có 1 chữ số thập phân (b là ước của 36)", test: function (v) { return 36 % v[0] === 0; } },
            { id: "by5", text: "kết quả có 2 chữ số thập phân, b chia hết cho 5", test: function (v) { return v[0] % 5 === 0; } },
            { id: "by8", text: "kết quả có 2 chữ số thập phân, b là bội của 8", test: function () { return true; } }
          ],
          kindSamples: [["4"], ["9"], ["5"], ["15"], ["8"]],
          sample: { values: ["4"] }
        },
        {
          id: "4.4-x3", type: "whatif", base: 1.21,
          ask: "Ví dụ: 8,46 ÷ 7 làm tròn đến 2 chữ số thập phân được 1,21. Nếu tính 84,6 ÷ 7 (làm tròn đến 2 chữ số thập phân) thì được bao nhiêu?",
          why: "Phải làm tròn ở bước cuối cùng; nhân một kết quả đã làm tròn sẽ kéo theo cả sai số.",
          answer: function () { return 12.09; },
          reasons: [
            "Phải chia lại rồi mới làm tròn: 84,6 ÷ 7 = 12,0857… ≈ 12,09.",
            "Số bị chia gấp 10 nên lấy 1,21 × 10 = 12,1.",
            "Số chia vẫn là 7 nên kết quả không đổi: 1,21."
          ],
          reason: 0,
          sample: { guess: "12,09", reason: 0 }
        }
      ],
      "4.5": [
        {
          id: "4.5-x1", type: "ways",
          ask: "Tính 2,5 × 3,2 × 4 theo nhiều cách.",
          why: "Đổi chỗ và nhóm để được số tròn (2,5 × 4 = 10) là mẹo tính nhẩm em dùng được với mọi số thập phân.",
          strategies: [
            { id: "s1", name: "Tính lần lượt từ trái sang phải", steps: [{ ask: "2,5 × 3,2 = ?", answer: 8 }, { answer: 32 }] },
            { id: "s2", name: "Nhóm 2,5 với 4 trước", steps: [{ ask: "2,5 × 4 = ?", answer: 10 }, { answer: 32 }] },
            { id: "s3", name: "Nhân 3,2 với 4 trước", steps: [{ ask: "3,2 × 4 = ?", answer: 12.8 }, { answer: 32 }] }
          ],
          sample: { strategy: "s2", steps: ["10", "32"] }
        },
        {
          id: "4.5-x2", type: "make",
          ask: "Tự ra đề tính nhanh a × m: m là một trong các số 9, 11, 99, 101, 999, 1001; a là số thập phân không nguyên, 0 < a < 100, tối đa 2 chữ số thập phân.",
          why: "Viết m thành số tròn cộng hoặc trừ một chút (99 = 100 − 1) là mẹo bù trừ dùng mãi trong tính nhẩm.",
          template: "Tính nhanh a × m",
          fields: [{ id: "a", label: "Số a" }, { id: "m", label: "Số m" }],
          valid: function (f) { return f.a > 0 && f.a < 100 && !isInt(f.a) && okDec(f.a, 2) && MULTS.indexOf(f.m) !== -1; },
          solve: function (f) { return clean(f.a * f.m); },
          render: function (f, lang) {
            return lang === "en" ? "Use a quick method to work out " + fmt(f.a, "en") + " × " + f.m + "."
              : "Tính nhanh " + fmt(f.a, "vi") + " × " + f.m + ".";
          },
          criteria: [
            { id: "near", text: "m gần 100 hoặc 1000 (99, 101, 999 hoặc 1001)", test: function (f) { return f.m >= 99; } },
            { id: "add", text: "Phải cộng thêm để bù (m = 11, 101 hoặc 1001)", test: function (f) { return f.m % 10 === 1; } },
            { id: "dp2", text: "Số a có 2 chữ số thập phân", test: function (f) { return places(f.a) === 2; } },
            { id: "small", text: "Số a nhỏ hơn 1", test: function (f) { return f.a < 1; } },
            { id: "big", text: "Kết quả lớn hơn 1000", test: function (f) { return f.a * f.m > 1000; } }
          ],
          sample: { fields: { a: "4,75", m: "99" } }
        },
        {
          id: "4.5-x3", type: "whatif", base: 346.5,
          ask: "Ví dụ: 3,5 × 99 = 3,5 × 100 − 3,5 = 346,5. Nếu đổi thành 3,5 × 98 thì kết quả là bao nhiêu?",
          why: "Biết phải bù bao nhiêu lần số đó giúp em dùng mẹo “làm tròn rồi bù” cho mọi số gần số tròn.",
          answer: function () { return 343; },
          reasons: [
            "98 = 100 − 2 nên phải bớt 2 lần 3,5 = 7: 350 − 7 = 343.",
            "98 kém 99 là 1 nên chỉ bớt thêm 1: 346,5 − 1 = 345,5.",
            "Bớt 2 khỏi 350: 350 − 2 = 348."
          ],
          reason: 0,
          sample: { guess: "343", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.4.1-x1.labels": ["Decimal"],
        "q.4.1-x1.ask": "Find numbers greater than 4.6 but less than 4.61. Find as many different ones as you can!",
        "q.4.1-x1.why": "Between 4.60 and 4.61 there are still endless numbers — just write more decimal places, since adding a 0 at the end does not change the value.",
        "q.4.1-x1.challengeText": "The number is closer to 4.6 than to 4.61.",
        "q.4.1-x1.kinds": ["has 3 decimal places", "has 4 decimal places", "has 5 or more decimal places"],
        "q.4.1-x2.ask": "Example: of the three numbers 4.23, 4.6 and 4.179, 4.6 is the largest. If 4.6 is replaced by 4.06, which number is the largest?",
        "q.4.1-x2.why": "Writing the numbers with the same number of decimal places (4.060, 4.179, 4.230) is the safest way to compare.",
        "q.4.1-x2.reasons": [
          "4.06 = 4.060 is less than 4.179 and 4.230, so 4.23 is the largest.",
          "4.179 is the largest because it has the most digits.",
          "4.06 is still the largest because 6 is more than 2 and 1."
        ],
        "q.4.1-x3.ask": "Make a problem: order three different decimals a, b, c (more than 0, less than 100, at most 4 decimal places). The solver orders them from smallest to largest and gives the middle one.",
        "q.4.1-x3.why": "Choosing numbers that set a “trap” (the longer number is smaller) helps you and a friend stop comparing by length.",
        "q.4.1-x3.template": "Order a, b, c from smallest to largest",
        "q.4.1-x3.fields": ["Number a", "Number b", "Number c"],
        "q.4.1-x3.criteria": [
          "The number with the most decimal places is the smallest", "The number with the fewest decimal places is the largest",
          "All three numbers have the same whole-number part", "Two numbers are the same up to the tenths",
          "Two numbers differ by less than 0.01"
        ],
        "q.4.2-x1.ask": "Work out 12.4 − 5.8 in several ways.",
        "q.4.2-x1.why": "Splitting into whole and decimal parts, rounding and adjusting, or counting on — each suits some numbers, and one checks another.",
        "q.4.2-x1.strategies": ["Split into whole-number and decimal parts", "Round 5.8 to 6, then adjust", "Count on from 5.8 to 12.4"],
        "q.4.2-x1.steps.s1": ["12 − 5 = ?", "0.4 − 0.8 = ?"],
        "q.4.2-x1.steps.s2": ["12.4 − 6 = ?"],
        "q.4.2-x1.steps.s3": ["From 5.8 up to 6, how much do you add?", "From 6 up to 12.4, how much do you add?"],
        "q.4.2-x2.ask": "The sequence 0.3, 0.7, 1.1, 1.5, … adds 0.4 each time. Find the 10th, 25th and 100th terms and the nth term.",
        "q.4.2-x2.why": "Adding a decimal again and again makes a sequence with a rule, just like with integers — you only need the decimal point in the right place.",
        "q.4.2-x3.ask": "Example: 8.3 − 2.9 = 5.4. If it becomes 8.3 − 2.09, what is the answer?",
        "q.4.2-x3.why": "Lining up the decimal points (2.09 against 2.90) stops you mixing up the value of each digit.",
        "q.4.2-x3.reasons": [
          "2.09 is less than 2.90; taking away a smaller number gives a bigger difference: 8.30 − 2.09 = 6.21.",
          "Adding a 0 does not change the value, so the answer is still 5.4.",
          "2.09 has more digits, so it is bigger than 2.9, and the difference is less than 5.4."
        ],
        "q.4.3-x1.labels": ["First number", "Second number"],
        "q.4.3-x1.ask": "Find two positive numbers, neither of them a whole number, whose product is 1.2.",
        "q.4.3-x1.why": "Count the decimal places of the two factors, then place the decimal point in the product — every pair you find practises that rule.",
        "q.4.3-x1.challengeText": "One of the numbers has exactly 3 decimal places.",
        "q.4.3-x1.kinds": ["both numbers have 1 decimal place", "the number with the most decimal places has 2", "one number has 3 or more decimal places"],
        "q.4.3-x2.ask": "Make a multiplication a × b with two positive numbers less than 1000, each with at most 3 decimal places, and at least one not a whole number.",
        "q.4.3-x2.why": "A good multiplication surprises the solver (a product smaller than a factor, a vanishing 0) — estimating first stops a misplaced decimal point.",
        "q.4.3-x2.template": "Work out a × b",
        "q.4.3-x2.fields": ["Number a", "Number b"],
        "q.4.3-x2.criteria": [
          "The product is a whole number although neither number is", "The product is smaller than both factors",
          "The two numbers have 3 or more decimal places altogether",
          "The product loses a 0 at the end of its decimal part (like 0.25 × 0.8 = 0.200 = 0.2)", "One factor is greater than 100"
        ],
        "q.4.3-x3.ask": "Example: 476 × 3.7 = 1761.2. If it becomes 47.6 × 0.37, what is the answer?",
        "q.4.3-x3.why": "The digits (476 × 37 = 17 612) stay the same; you only recount the decimal places — a quick way to do a whole family of multiplications.",
        "q.4.3-x3.reasons": [
          "The question has 1 + 2 = 3 decimal places, so 17 612 becomes 17.612.",
          "The product still has 1 decimal place like the example, so it is 1761.2.",
          "Both numbers are 10 times smaller, so the product is only 10 times smaller: 176.12."
        ],
        "q.4.4-x1.ask": "Work out 13.5 ÷ 6 in several ways.",
        "q.4.4-x1.why": "Short division, splitting the number, or dividing in two small steps are all correct — and multiplying back (2.25 × 6) checks the answer.",
        "q.4.4-x1.strategies": ["Short division, adding zeros while there is a remainder", "Split 13.5 = 12 + 1.5", "Divide by 2, then by 3"],
        "q.4.4-x1.steps.s1": ["13 ÷ 6 is 2. What is the remainder?"],
        "q.4.4-x1.steps.s2": ["12 ÷ 6 = ?", "1.5 ÷ 6 = ?"],
        "q.4.4-x1.steps.s3": ["13.5 ÷ 2 = ?"],
        "q.4.4-x2.labels": ["Divisor b"],
        "q.4.4-x2.ask": "Find whole numbers b from 2 to 50 so that 3.6 ÷ b gives an exact answer (no rounding) with at most 2 decimal places.",
        "q.4.4-x2.why": "The division stops at the hundredths when 360 is divisible by b — linking decimal division to factors and multiples from unit 1.",
        "q.4.4-x2.challengeText": "The answer is less than 0.1.",
        "q.4.4-x2.kinds": ["the answer has 1 decimal place (b is a factor of 36)", "the answer has 2 decimal places, b is divisible by 5", "the answer has 2 decimal places, b is a multiple of 8"],
        "q.4.4-x3.ask": "Example: 8.46 ÷ 7 rounded to 2 decimal places is 1.21. What is 84.6 ÷ 7 rounded to 2 decimal places?",
        "q.4.4-x3.why": "Round only at the very last step; multiplying a rounded answer multiplies its error too.",
        "q.4.4-x3.reasons": [
          "Divide again, then round: 84.6 ÷ 7 = 12.0857… ≈ 12.09.",
          "The number divided is 10 times bigger, so 1.21 × 10 = 12.1.",
          "The divisor is still 7, so the answer stays 1.21."
        ],
        "q.4.5-x1.ask": "Work out 2.5 × 3.2 × 4 in several ways.",
        "q.4.5-x1.why": "Reordering and grouping to make a round number (2.5 × 4 = 10) is a mental trick that works with any decimals.",
        "q.4.5-x1.strategies": ["Work from left to right", "Group 2.5 with 4 first", "Multiply 3.2 by 4 first"],
        "q.4.5-x1.steps.s1": ["2.5 × 3.2 = ?"],
        "q.4.5-x1.steps.s2": ["2.5 × 4 = ?"],
        "q.4.5-x1.steps.s3": ["3.2 × 4 = ?"],
        "q.4.5-x2.ask": "Make a quick-calculation problem a × m: m is one of 9, 11, 99, 101, 999, 1001; a is a decimal that is not a whole number, 0 < a < 100, with at most 2 decimal places.",
        "q.4.5-x2.why": "Writing m as a round number plus or minus a little (99 = 100 − 1) is a compensation trick you will use again and again.",
        "q.4.5-x2.template": "Quick method: a × m",
        "q.4.5-x2.fields": ["Number a", "Number m"],
        "q.4.5-x2.criteria": [
          "m is close to 100 or 1000 (99, 101, 999 or 1001)", "You must add to adjust (m = 11, 101 or 1001)",
          "The number a has 2 decimal places", "The number a is less than 1", "The answer is greater than 1000"
        ],
        "q.4.5-x3.ask": "Example: 3.5 × 99 = 3.5 × 100 − 3.5 = 346.5. If it becomes 3.5 × 98, what is the answer?",
        "q.4.5-x3.why": "Knowing how many lots of the number to adjust by lets you use “round then adjust” for any number near a round one.",
        "q.4.5-x3.reasons": [
          "98 = 100 − 2, so take away 2 lots of 3.5 = 7: 350 − 7 = 343.",
          "98 is 1 less than 99, so take away just 1 more: 346.5 − 1 = 345.5.",
          "Take 2 from 350: 350 − 2 = 348."
        ]
      },
      vi: {}
    }
  });
})();
