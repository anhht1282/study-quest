// 🚀 Extension quests — Math 7, unit 1 (Integers). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. Check functions receive NUMBERS parsed by the game; they never see raw learner text.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  const lcm = function (a, b) { return a / gcd(a, b) * b; };
  const par = function (x) { return x < 0 ? "(" + String(x).replace("-", "−") + ")" : String(x); };
  const neg = function (x) { return String(x).replace("-", "−"); };
  const digits = function (n) { return String(Math.abs(n)).split("").map(Number); };
  const isSquare = function (n) { const r = Math.round(Math.sqrt(n)); return r * r === n; };
  const isCube = function (n) { const r = Math.round(Math.cbrt(n)); return r * r * r === n; };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };

  window.GAME_QUESTS.push({
    unit: 1,
    sections: {
      "1.1": [
        {
          id: "1.1-x1", type: "many", arity: 2, ordered: false,
          ask: "Tìm hai số nguyên có tổng bằng −3 và tích là một số âm. Tìm càng nhiều cặp khác nhau càng tốt!",
          why: "Em thấy số âm “thắng” số dương khi nào — kỹ năng để đoán nhanh dấu của tổng trước khi tính.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] + v[1] === -3 && v[0] * v[1] < 0; },
          challenge: function (v) { return v[0] < -50 || v[1] < -50; },
          challengeText: "Một trong hai số nhỏ hơn −50.",
          kinds: [
            { id: "one", text: "số dương có 1 chữ số", test: function (v) { return Math.max(v[0], v[1]) < 10; } },
            { id: "two", text: "số dương có 2 chữ số", test: function (v) { return Math.max(v[0], v[1]) < 100; } },
            { id: "big", text: "số dương từ 100 trở lên", test: function () { return true; } }
          ],
          kindSamples: [["1", "-4"], ["2", "-5"], ["15", "-18"], ["40", "-43"], ["200", "-203"]],
          sample: { values: ["1", "-4"] }
        },
        {
          id: "1.1-x2", type: "whatif", sim: "numberline", base: -1,
          ask: "Ví dụ: −4 − (−3) = −1. Nếu đổi thành −4 − (+3) thì kết quả là bao nhiêu?",
          why: "Phân biệt “trừ số âm” với “trừ số dương” là chỗ hay nhầm nhất khi tính với số nguyên.",
          answer: function () { return -4 - 3; },
          reasons: [
            "Trừ một số dương thì đi sang trái 3 bước trên trục số, nên kết quả nhỏ hơn −4.",
            "Hai dấu trừ đứng cạnh nhau luôn thành dấu cộng.",
            "Kết quả không đổi vì chỉ đổi dấu một số."
          ],
          reason: 0,
          sample: { guess: "-7", reason: 0 }
        },
        {
          id: "1.1-x3", type: "make",
          ask: "Tự ra một phép tính a − b với hai số nguyên a, b (từ −50 đến 50). Game tự tính đáp án và chấm đề theo các tiêu chí.",
          why: "Ra đề buộc em nghĩ xem đề nào thật sự luyện được quy tắc trừ số âm — người ra đề hiểu bài sâu nhất.",
          template: "Tính a − b",
          fields: [{ id: "a", label: "Số a" }, { id: "b", label: "Số b" }],
          valid: function (f) { return inRange(f.a, -50, 50) && inRange(f.b, -50, 50); },
          solve: function (f) { return f.a - f.b; },
          render: function (f, lang) { return (lang === "en" ? "Work out " : "Tính ") + neg(f.a) + " − " + par(f.b) + "."; },
          criteria: [
            { id: "neg", text: "Có ít nhất một số âm", test: function (f) { return f.a < 0 || f.b < 0; } },
            { id: "subneg", text: "Trừ một số âm (b < 0)", test: function (f) { return f.b < 0; } },
            { id: "ansneg", text: "Đáp án là số âm", test: function (f) { return f.a - f.b < 0; } },
            { id: "bothneg", text: "Cả hai số đều âm", test: function (f) { return f.a < 0 && f.b < 0; } },
            { id: "near0", text: "Hai số lớn (độ lớn ≥ 20) nhưng đáp án nằm trong khoảng −5 đến 5", test: function (f) { return Math.abs(f.a) >= 20 && Math.abs(f.b) >= 20 && Math.abs(f.a - f.b) <= 5; } }
          ],
          sample: { fields: { a: "-23", b: "-21" } }
        }
      ],
      "1.2": [
        {
          id: "1.2-x1", type: "many", arity: 2, ordered: false,
          ask: "Tìm hai số nguyên có tích bằng −12. Có bao nhiêu cặp như vậy?",
          why: "Liệt kê các cặp thừa số có dấu giúp em chắc quy tắc “khác dấu thì tích âm” và chuẩn bị cho phân tích ra thừa số.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] * v[1] === -12; },
          challenge: function (v) { return v[0] + v[1] === 1; },
          challengeText: "Tổng của hai số bằng 1.",
          kinds: [
            { id: "f1", text: "cặp thừa số 1 và 12 (có dấu)", test: function (v) { return Math.min(Math.abs(v[0]), Math.abs(v[1])) === 1; } },
            { id: "f2", text: "cặp thừa số 2 và 6 (có dấu)", test: function (v) { return Math.min(Math.abs(v[0]), Math.abs(v[1])) === 2; } },
            { id: "f3", text: "cặp thừa số 3 và 4 (có dấu)", test: function (v) { return Math.min(Math.abs(v[0]), Math.abs(v[1])) === 3; } }
          ],
          kindSamples: [["1", "-12"], ["-1", "12"], ["2", "-6"], ["-2", "6"], ["3", "-4"]],
          sample: { values: ["3", "-4"] }
        },
        {
          id: "1.2-x2", type: "ways",
          ask: "Tính (−6) × 5 ÷ (−3) theo nhiều cách khác nhau.",
          why: "Biết nhiều đường đến cùng một đáp án giúp em tự kiểm tra kết quả và chọn cách nhanh nhất.",
          strategies: [
            { id: "s1", name: "Nhân trước rồi chia", steps: [{ ask: "(−6) × 5 = ?", answer: -30 }, { answer: 10 }] },
            { id: "s2", name: "Chia trước: (−6) ÷ (−3), rồi nhân 5", steps: [{ ask: "(−6) ÷ (−3) = ?", answer: 2 }, { answer: 10 }] },
            { id: "s3", name: "Xét dấu trước, rồi tính phần số", steps: [
              { ask: "Kết quả mang dấu gì? Nhập 1 nếu dương, −1 nếu âm", answer: 1 },
              { ask: "6 × 5 ÷ 3 = ?", answer: 10 }, { answer: 10 }] }
          ],
          sample: { strategy: "s2", steps: ["2", "10"] }
        },
        {
          id: "1.2-x3", type: "whatif", base: -12,
          ask: "Ví dụ: −3 × 4 = −12. Nếu đổi thành −3 × (−4) thì kết quả là bao nhiêu?",
          why: "Quy tắc dấu của phép nhân sẽ dùng mãi khi rút gọn biểu thức và giải phương trình.",
          answer: function () { return -3 * -4; },
          reasons: [
            "Nhân hai số cùng dấu thì được số dương.",
            "Có số âm thì tích luôn âm.",
            "Đổi dấu một thừa số không làm đổi kết quả."
          ],
          reason: 0,
          sample: { guess: "12", reason: 0 }
        }
      ],
      "1.3": [
        {
          id: "1.3-x1", type: "many", arity: 2, ordered: false,
          ask: "Tìm hai số tự nhiên khác nhau, cùng lớn hơn 1, có BCNN bằng 12.",
          why: "Đi ngược từ BCNN về hai số giúp em hiểu BCNN được “ghép” từ các thừa số của hai số như thế nào.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] > 1 && v[1] > 1 && v[0] !== v[1] && lcm(v[0], v[1]) === 12; },
          challenge: function (v) { return gcd(v[0], v[1]) === 1; },
          challengeText: "Hai số không có ước chung nào ngoài 1.",
          sample: { values: ["4", "6"] }
        },
        {
          id: "1.3-x2", type: "pattern",
          ask: "Các bội chung của 4 và 6 là 12, 24, 36, … Tìm bội chung thứ 5, thứ 10, thứ 25 và quy luật tổng quát.",
          why: "Mọi bội chung đều là bội của BCNN — đó là dãy 12n, em sẽ gặp lại ở chương 9 (số hạng tổng quát).",
          seq: [12, 24, 36],
          term: function (n) { return 12 * n; },
          askN: [5, 10, 25],
          sample: { terms: { 5: "60", 10: "120", 25: "300" }, rule: "12n" }
        }
      ],
      "1.4": [
        {
          id: "1.4-x1", type: "make",
          ask: "Tự ra đề rút gọn phân số a/b (2 ≤ a < b ≤ 200) mà phân số rút gọn được. Đáp án của đề là ƯCLN(a, b).",
          why: "Chọn tử và mẫu sao cho đề hay buộc em nhìn ra ước chung — đúng kỹ năng rút gọn phân số ở chương 7.",
          template: "Rút gọn a/b",
          fields: [{ id: "a", label: "Tử số a" }, { id: "b", label: "Mẫu số b" }],
          valid: function (f) { return inRange(f.a, 2, 200) && inRange(f.b, 2, 200) && f.a < f.b && gcd(f.a, f.b) > 1; },
          solve: function (f) { return gcd(f.a, f.b); },
          render: function (f, lang) {
            return lang === "en" ? "To simplify " + f.a + "/" + f.b + " fully, find the HCF of " + f.a + " and " + f.b + "."
              : "Để rút gọn " + f.a + "/" + f.b + " tới tối giản, hãy tìm ƯCLN(" + f.a + ", " + f.b + ").";
          },
          criteria: [
            { id: "big", text: "ƯCLN từ 6 trở lên", test: function (f) { return gcd(f.a, f.b) >= 6; } },
            { id: "odd", text: "Tử số là số lẻ", test: function (f) { return f.a % 2 === 1; } },
            { id: "notone", text: "Rút gọn xong, tử số khác 1", test: function (f) { return f.a / gcd(f.a, f.b) > 1; } },
            { id: "bigden", text: "Rút gọn xong, mẫu số lớn hơn 5", test: function (f) { return f.b / gcd(f.a, f.b) > 5; } },
            { id: "three", text: "Mẫu số có ba chữ số", test: function (f) { return f.b >= 100; } }
          ],
          sample: { fields: { a: "45", b: "120" } }
        },
        {
          id: "1.4-x2", type: "whatif", base: 9,
          ask: "ƯCLN(18, 27) = 9. Nếu nhân cả hai số với 2 thì ƯCLN(36, 54) bằng bao nhiêu?",
          why: "Thấy ƯCLN “lớn theo” hai số giúp em rút gọn nhanh những phân số có tử và mẫu lớn.",
          answer: function () { return gcd(36, 54); },
          reasons: [
            "Cả hai số đều có thêm thừa số 2, nên ƯCLN cũng được nhân với 2.",
            "ƯCLN không đổi vì tỉ số của hai số không đổi.",
            "ƯCLN tăng thêm 2 đơn vị."
          ],
          reason: 0,
          sample: { guess: "18", reason: 0 }
        },
        {
          id: "1.4-x3", type: "many", arity: 2, ordered: false,
          ask: "Tìm hai số tự nhiên khác nhau, cùng nhỏ hơn 50, có ƯCLN bằng 6.",
          why: "Mỗi cặp em tìm đều có dạng 6 × (hai số không có ước chung) — em đang tự khám phá cấu trúc của ƯCLN.",
          check: function (v) { return inRange(v[0], 1, 49) && inRange(v[1], 1, 49) && v[0] !== v[1] && gcd(v[0], v[1]) === 6; },
          challenge: function (v) { return v[0] + v[1] === 60; },
          challengeText: "Tổng hai số bằng 60.",
          sample: { values: ["12", "18"] }
        }
      ],
      "1.5": [
        {
          id: "1.5-x1", type: "many", arity: 1,
          labels: ["Số có ba chữ số"],
          ask: "Tìm số có ba chữ số, chữ số hàng trăm là 5, chia hết cho cả 3 và 4.",
          why: "Kết hợp hai dấu hiệu chia hết (3 và 4) là cách nhanh để kiểm tra chia hết cho 12 mà không cần chia.",
          check: function (v) { return inRange(v[0], 500, 599) && v[0] % 12 === 0; },
          challenge: function (v) { return v[0] % 9 === 0; },
          challengeText: "Số đó còn chia hết cho 9.",
          kinds: [
            { id: "both", text: "chia hết cho cả 8 và 9", test: function (v) { return v[0] % 72 === 0; } },
            { id: "by8", text: "chia hết cho 8", test: function (v) { return v[0] % 8 === 0; } },
            { id: "by9", text: "chia hết cho 9", test: function (v) { return v[0] % 9 === 0; } },
            { id: "none", text: "không chia hết cho 8, cũng không chia hết cho 9", test: function () { return true; } }
          ],
          kindSamples: [["504"], ["528"], ["540"], ["516"], ["564"]],
          sample: { values: ["516"] }
        },
        {
          id: "1.5-x2", type: "make",
          ask: "Tự chọn một số có bốn chữ số chia hết cho 11 (dùng dấu hiệu chia hết cho 11). Đề sẽ là: tính số đó chia 11.",
          why: "Tự tạo số chia hết cho 11 bằng dấu hiệu (hiệu các chữ số) giúp em nhớ dấu hiệu lâu hơn là chỉ kiểm tra.",
          template: "Số n có bốn chữ số, chia hết cho 11",
          fields: [{ id: "n", label: "Số n" }],
          valid: function (f) { return inRange(f.n, 1000, 9999) && f.n % 11 === 0; },
          solve: function (f) { return f.n / 11; },
          render: function (f, lang) { return (lang === "en" ? "Work out " : "Tính ") + f.n + " ÷ 11."; },
          criteria: [
            { id: "even", text: "Số đó cũng chia hết cho 2", test: function (f) { return f.n % 2 === 0; } },
            { id: "three", text: "Số đó cũng chia hết cho 3", test: function (f) { return f.n % 3 === 0; } },
            { id: "five", text: "Số đó cũng chia hết cho 5", test: function (f) { return f.n % 5 === 0; } },
            { id: "diff", text: "Bốn chữ số đều khác nhau", test: function (f) { const d = digits(f.n); return new Set(d).size === 4; } },
            { id: "zero", text: "Có chữ số 0", test: function (f) { return digits(f.n).indexOf(0) !== -1; } }
          ],
          sample: { fields: { n: "1320" } }
        },
        {
          id: "1.5-x3", type: "whatif", base: 2,
          ask: "Ví dụ: số ∗7258 chia hết cho 11 khi ∗ = 2. Nếu đổi yêu cầu thành chia hết cho 9 thì ∗ bằng bao nhiêu?",
          why: "Mỗi dấu hiệu chia hết nhìn vào một đặc điểm khác của số — chọn đúng dấu hiệu là nửa lời giải.",
          answer: function () { return 5; },
          reasons: [
            "Với 9 phải xét tổng các chữ số: ∗ + 22 phải chia hết cho 9.",
            "Vẫn xét hiệu các chữ số ở vị trí lẻ và chẵn như với 11.",
            "Chữ số cuối phải là 9."
          ],
          reason: 0,
          sample: { guess: "5", reason: 0 }
        }
      ],
      "1.6": [
        {
          id: "1.6-x1", type: "pattern",
          ask: "Các số chính phương 1, 4, 9, 16, 25 … cách nhau 3, 5, 7, 9, … Tìm khoảng cách thứ 10, thứ 20, thứ 50 và quy luật của khoảng cách thứ n.",
          why: "Khoảng cách giữa hai số chính phương liên tiếp luôn là số lẻ — em sẽ dùng để ước lượng căn bậc hai nhanh.",
          seq: [3, 5, 7, 9],
          term: function (n) { return 2 * n + 1; },
          askN: [10, 20, 50],
          sample: { terms: { 10: "21", 20: "41", 50: "101" }, rule: "2n+1" }
        },
        {
          id: "1.6-x2", type: "many", arity: 1,
          labels: ["Số"],
          ask: "Tìm số tự nhiên (khác 0) vừa là số chính phương vừa là số lập phương.",
          why: "Những số này là lũy thừa bậc 6 (1, 64, 729, …) — em tự khám phá mối liên hệ giữa bình phương và lập phương.",
          check: function (v) { return isInt(v[0]) && v[0] > 0 && v[0] <= 1e9 && isSquare(v[0]) && isCube(v[0]); },
          challenge: function (v) { return v[0] > 1000; },
          challengeText: "Số đó lớn hơn 1000.",
          sample: { values: ["64"] }
        },
        {
          id: "1.6-x3", type: "whatif", base: 8,
          ask: "√79 nằm giữa 8 và 9. Nếu đổi thành √150 thì nó nằm giữa hai số nguyên nào? Nhập số nhỏ hơn.",
          why: "Ước lượng căn bậc hai giữa hai số nguyên giúp em kiểm tra kết quả máy tính có hợp lý không.",
          answer: function () { return Math.floor(Math.sqrt(150)); },
          reasons: [
            "12² = 144 < 150 < 169 = 13².",
            "150 : 2 = 75 nên căn khoảng 75.",
            "Số gấp đôi thì căn cũng gấp đôi, nên khoảng 16."
          ],
          reason: 0,
          sample: { guess: "12", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.1.1-x1.ask": "Find two integers whose sum is −3 and whose product is negative. Find as many different pairs as you can!",
        "q.1.1-x1.why": "You see when a negative number “wins” over a positive one — a skill for predicting the sign of a sum before you work it out.",
        "q.1.1-x1.challengeText": "One of the two numbers is less than −50.",
        "q.1.1-x1.kinds": ["the positive number has 1 digit", "the positive number has 2 digits", "the positive number is 100 or more"],
        "q.1.1-x2.ask": "Example: −4 − (−3) = −1. If it becomes −4 − (+3), what is the result?",
        "q.1.1-x2.why": "Telling “subtract a negative” from “subtract a positive” apart is where most integer mistakes happen.",
        "q.1.1-x2.reasons": [
          "Subtracting a positive number moves 3 steps left on the number line, so the result is less than −4.",
          "Two minus signs next to each other always make a plus.",
          "The result does not change because only one sign changed."
        ],
        "q.1.1-x3.ask": "Make your own calculation a − b with integers a and b (from −50 to 50). The game works out the answer and checks your problem against the criteria.",
        "q.1.1-x3.why": "Making a problem makes you think about which problems really practise subtracting negatives — the problem-setter understands most deeply.",
        "q.1.1-x3.template": "Work out a − b",
        "q.1.1-x3.fields": ["Number a", "Number b"],
        "q.1.1-x3.criteria": [
          "At least one negative number", "Subtracts a negative (b < 0)", "The answer is negative",
          "Both numbers are negative", "Two big numbers (size ≥ 20) but the answer is between −5 and 5"
        ],
        "q.1.2-x1.ask": "Find two integers whose product is −12. How many such pairs are there?",
        "q.1.2-x1.why": "Listing signed factor pairs makes the rule “different signs give a negative product” solid and prepares you for factorising.",
        "q.1.2-x1.challengeText": "The two numbers add up to 1.",
        "q.1.2-x1.kinds": ["the factor pair 1 and 12 (with signs)", "the factor pair 2 and 6 (with signs)", "the factor pair 3 and 4 (with signs)"],
        "q.1.2-x2.ask": "Work out (−6) × 5 ÷ (−3) in several different ways.",
        "q.1.2-x2.why": "Knowing several routes to the same answer lets you check yourself and pick the quickest way.",
        "q.1.2-x2.strategies": ["Multiply first, then divide", "Divide first: (−6) ÷ (−3), then multiply by 5", "Decide the sign first, then work out the numbers"],
        "q.1.2-x2.steps.s1": ["(−6) × 5 = ?"],
        "q.1.2-x2.steps.s2": ["(−6) ÷ (−3) = ?"],
        "q.1.2-x2.steps.s3": ["What sign is the result? Enter 1 for positive, −1 for negative", "6 × 5 ÷ 3 = ?"],
        "q.1.2-x3.ask": "Example: −3 × 4 = −12. If it becomes −3 × (−4), what is the result?",
        "q.1.2-x3.why": "The sign rules for multiplying are used all the time when simplifying expressions and solving equations.",
        "q.1.2-x3.reasons": [
          "Multiplying two numbers with the same sign gives a positive number.",
          "If there is a negative number the product is always negative.",
          "Changing the sign of one factor does not change the result."
        ],
        "q.1.3-x1.ask": "Find two different whole numbers, both greater than 1, whose lowest common multiple is 12.",
        "q.1.3-x1.why": "Working backwards from the LCM shows how the LCM is “built” from the factors of the two numbers.",
        "q.1.3-x1.challengeText": "The two numbers have no common factor except 1.",
        "q.1.3-x2.ask": "The common multiples of 4 and 6 are 12, 24, 36, … Find the 5th, 10th and 25th common multiple and the general rule.",
        "q.1.3-x2.why": "Every common multiple is a multiple of the LCM — the sequence 12n, which you will meet again in unit 9 (nth term).",
        "q.1.4-x1.ask": "Make a fraction a/b to simplify (2 ≤ a < b ≤ 200) that can be simplified. The answer to your problem is the HCF of a and b.",
        "q.1.4-x1.why": "Choosing a numerator and denominator for a good problem makes you spot common factors — exactly the skill for simplifying fractions in unit 7.",
        "q.1.4-x1.template": "Simplify a/b",
        "q.1.4-x1.fields": ["Numerator a", "Denominator b"],
        "q.1.4-x1.criteria": [
          "The HCF is 6 or more", "The numerator is odd", "After simplifying, the numerator is not 1",
          "After simplifying, the denominator is greater than 5", "The denominator has three digits"
        ],
        "q.1.4-x2.ask": "HCF(18, 27) = 9. If both numbers are multiplied by 2, what is HCF(36, 54)?",
        "q.1.4-x2.why": "Seeing the HCF “grow with” the two numbers helps you simplify fractions with big numerators and denominators quickly.",
        "q.1.4-x2.reasons": [
          "Both numbers gain a factor 2, so the HCF is multiplied by 2 as well.",
          "The HCF does not change because the ratio of the numbers does not change.",
          "The HCF goes up by 2."
        ],
        "q.1.4-x3.ask": "Find two different whole numbers, both less than 50, whose highest common factor is 6.",
        "q.1.4-x3.why": "Every pair you find looks like 6 × (two numbers with no common factor) — you are discovering how the HCF is built.",
        "q.1.4-x3.challengeText": "The two numbers add up to 60.",
        "q.1.5-x1.labels": ["Three-digit number"],
        "q.1.5-x1.ask": "Find a three-digit number with 5 in the hundreds place that is divisible by both 3 and 4.",
        "q.1.5-x1.why": "Combining two divisibility tests (3 and 4) is a quick way to test for 12 without dividing.",
        "q.1.5-x1.challengeText": "The number is also divisible by 9.",
        "q.1.5-x1.kinds": ["divisible by both 8 and 9", "divisible by 8", "divisible by 9", "divisible by neither 8 nor 9"],
        "q.1.5-x2.ask": "Choose a four-digit number that is divisible by 11 (use the test for 11). Your problem will be: divide it by 11.",
        "q.1.5-x2.why": "Building a multiple of 11 with the test (the difference of digit sums) helps you remember the test far better than just checking.",
        "q.1.5-x2.template": "A four-digit number n divisible by 11",
        "q.1.5-x2.fields": ["Number n"],
        "q.1.5-x2.criteria": [
          "It is also divisible by 2", "It is also divisible by 3", "It is also divisible by 5",
          "All four digits are different", "It has a digit 0"
        ],
        "q.1.5-x3.ask": "Example: the number ∗7258 is divisible by 11 when ∗ = 2. If the condition becomes divisible by 9, what is ∗?",
        "q.1.5-x3.why": "Each divisibility test looks at a different feature of the number — choosing the right test is half the solution.",
        "q.1.5-x3.reasons": [
          "For 9 you look at the digit sum: ∗ + 22 must be divisible by 9.",
          "You still use the difference of the odd- and even-position digits, as for 11.",
          "The last digit must be 9."
        ],
        "q.1.6-x1.ask": "The square numbers 1, 4, 9, 16, 25 … are 3, 5, 7, 9, … apart. Find the 10th, 20th and 50th gap and the rule for the nth gap.",
        "q.1.6-x1.why": "The gap between consecutive square numbers is always odd — you will use it to estimate square roots quickly.",
        "q.1.6-x2.labels": ["Number"],
        "q.1.6-x2.ask": "Find a whole number (not 0) that is both a square number and a cube number.",
        "q.1.6-x2.why": "These numbers are sixth powers (1, 64, 729, …) — you are discovering how squares and cubes are linked.",
        "q.1.6-x2.challengeText": "The number is greater than 1000.",
        "q.1.6-x3.ask": "√79 is between 8 and 9. If it becomes √150, which two whole numbers is it between? Enter the smaller one.",
        "q.1.6-x3.why": "Estimating a square root between two whole numbers lets you check whether a calculator answer makes sense.",
        "q.1.6-x3.reasons": [
          "12² = 144 < 150 < 169 = 13².",
          "150 : 2 = 75, so the root is about 75.",
          "Double the number means double the root, so about 16."
        ]
      },
      vi: {}
    }
  });
})();
