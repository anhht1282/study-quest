// 🚀 Extension quests — Math 8, unit 1 (Integers). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. Check functions receive NUMBERS parsed by the game; they never see raw learner text.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  const lcm = function (a, b) { return a / gcd(a, b) * b; };
  // prime factorisation as { prime: power }
  const factorise = function (n) {
    const out = {};
    let p = 2;
    while (n > 1 && p * p <= n) { while (n % p === 0) { out[p] = (out[p] || 0) + 1; n /= p; } p += 1; }
    if (n > 1) out[n] = (out[n] || 0) + 1;
    return out;
  };
  const primeCount = function (n) { const f = factorise(n); return Object.keys(f).reduce(function (s, k) { return s + f[k]; }, 0); };
  const maxPower = function (n) { const f = factorise(n); return Math.max.apply(null, Object.keys(f).map(function (k) { return f[k]; }).concat([0])); };
  const distinctPrimes = function (n) { return Object.keys(factorise(n)).length; };
  const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const sup = function (n) { return String(n).split("").map(function (d) { return SUP[Number(d)]; }).join(""); };
  const neg = function (x) { return String(x).replace("-", "−"); };
  const base = function (a) { return a < 0 ? "(" + neg(a) + ")" : String(a); };

  window.GAME_QUESTS.push({
    unit: 1,
    sections: {
      "1.1": [
        {
          id: "1.1-x1", type: "many", arity: 1,
          labels: ["Số"],
          ask: "Tìm số tự nhiên nhỏ hơn 150 mà khi phân tích ra thừa số nguyên tố có đúng 4 thừa số (đếm cả thừa số lặp lại, ví dụ 24 = 2 × 2 × 2 × 3).",
          why: "Đếm thừa số trên sơ đồ cây giúp em thấy mỗi số có đúng một cách phân tích — nền tảng để tìm ƯCLN và BCNN.",
          check: function (v) { return inRange(v[0], 2, 149) && primeCount(v[0]) === 4; },
          challenge: function (v) { return v[0] % 2 === 1; },
          challengeText: "Số đó là số lẻ.",
          kinds: [
            { id: "p1", text: "lũy thừa của một số nguyên tố (như 2⁴)", test: function (v) { return distinctPrimes(v[0]) === 1; } },
            { id: "p2", text: "có 2 thừa số nguyên tố khác nhau", test: function (v) { return distinctPrimes(v[0]) === 2; } },
            { id: "p3", text: "có 3 thừa số nguyên tố khác nhau", test: function () { return true; } }
          ],
          kindSamples: [["16"], ["81"], ["24"], ["54"], ["60"]],
          sample: { values: ["24"] }
        },
        {
          id: "1.1-x2", type: "whatif", base: 15,
          ask: "120 = 2³ × 3 × 5 và 75 = 3 × 5² nên ƯCLN(120, 75) = 15. Nếu thay 75 bằng 300 = 2² × 3 × 5² thì ƯCLN(120, 300) bằng bao nhiêu?",
          why: "Biết lấy số mũ nhỏ nhất của mỗi thừa số chung giúp em tìm ƯCLN của số lớn mà không phải liệt kê ước.",
          answer: function () { return gcd(120, 300); },
          reasons: [
            "Bây giờ 2 cũng là thừa số chung; lấy số mũ nhỏ hơn là 2², nên ƯCLN = 2² × 3 × 5 = 60.",
            "Lấy số mũ lớn hơn của 2 là 2³, nên ƯCLN = 2³ × 3 × 5 = 120.",
            "300 chỉ gấp 4 lần 75 nên ƯCLN vẫn là 15."
          ],
          reason: 0,
          sample: { guess: "60", reason: 0 }
        },
        {
          id: "1.1-x3", type: "make",
          ask: "Tự chọn hai số khác nhau a và b (từ 2 đến 500). Đề của em là: tìm BCNN của a và b. Game tự tính đáp án và chấm đề theo các tiêu chí.",
          why: "Chọn số sao cho đề có thừa số chung và số mũ lớn buộc em dùng đúng quy tắc “lấy số mũ lớn nhất” khi tìm BCNN.",
          template: "Tìm BCNN của a và b",
          fields: [{ id: "a", label: "Số a" }, { id: "b", label: "Số b" }],
          valid: function (f) { return inRange(f.a, 2, 500) && inRange(f.b, 2, 500) && f.a !== f.b; },
          solve: function (f) { return lcm(f.a, f.b); },
          render: function (f, lang) { return lang === "en" ? "Find the LCM of " + f.a + " and " + f.b + "." : "Tìm BCNN của " + f.a + " và " + f.b + "."; },
          criteria: [
            { id: "common", text: "Hai số có thừa số nguyên tố chung (ƯCLN > 1)", test: function (f) { return gcd(f.a, f.b) > 1; } },
            { id: "cube", text: "Một số có thừa số nguyên tố với số mũ từ 3 trở lên (như 2³)", test: function (f) { return maxPower(f.a) >= 3 || maxPower(f.b) >= 3; } },
            { id: "hcf10", text: "ƯCLN từ 10 trở lên, nên BCNN nhỏ hơn tích hai số ít nhất 10 lần", test: function (f) { return gcd(f.a, f.b) >= 10; } },
            { id: "three", text: "Mỗi số có ít nhất ba thừa số nguyên tố khác nhau", test: function (f) { return distinctPrimes(f.a) >= 3 && distinctPrimes(f.b) >= 3; } },
            { id: "nomult", text: "Không số nào là bội của số kia", test: function (f) { return f.a % f.b !== 0 && f.b % f.a !== 0; } }
          ],
          sample: { fields: { a: "120", b: "75" } }
        }
      ],
      "1.2": [
        {
          id: "1.2-x1", type: "ways",
          ask: "Tính (−7) × 38 + (−7) × (−18) theo nhiều cách khác nhau.",
          why: "Nhận ra thừa số chung (−7) giúp tính nhẩm nhanh, và đó cũng là ý tưởng của phân tích thành nhân tử ở chương 2.",
          strategies: [
            { id: "s1", name: "Tính từng tích rồi cộng", steps: [
              { ask: "(−7) × 38 = ?", answer: -266 }, { ask: "(−7) × (−18) = ?", answer: 126 }, { answer: -140 }] },
            { id: "s2", name: "Đặt (−7) ra ngoài: (−7) × (38 + (−18))", steps: [
              { ask: "38 + (−18) = ?", answer: 20 }, { answer: -140 }] }
          ],
          sample: { strategy: "s2", steps: ["20", "-140"] }
        },
        {
          id: "1.2-x2", type: "many", arity: 3, ordered: true,
          labels: ["a", "b", "c"],
          ask: "Tìm ba số nguyên a, b, c (từ −10 đến 10, c là số âm) sao cho (a + b) × c = −24.",
          why: "Em phải suy ngược từ quy tắc dấu: c âm và tích âm thì a + b phải dương — đúng cách dùng phép chia để tìm số còn thiếu.",
          check: function (v) { return inRange(v[0], -10, 10) && inRange(v[1], -10, 10) && inRange(v[2], -10, -1) && (v[0] + v[1]) * v[2] === -24; },
          challenge: function (v) { return v[0] < -5 || v[1] < -5; },
          challengeText: "a hoặc b nhỏ hơn −5.",
          kinds: [
            { id: "c2", text: "c = −2, a + b = 12", test: function (v) { return v[2] === -2; } },
            { id: "c3", text: "c = −3, a + b = 8", test: function (v) { return v[2] === -3; } },
            { id: "c4", text: "c = −4, a + b = 6", test: function (v) { return v[2] === -4; } },
            { id: "c6", text: "c = −6, a + b = 4", test: function (v) { return v[2] === -6; } },
            { id: "c8", text: "c = −8, a + b = 3", test: function () { return true; } }
          ],
          kindSamples: [["6", "6", "-2"], ["4", "4", "-3"], ["3", "3", "-4"], ["2", "2", "-6"], ["1", "2", "-8"]],
          sample: { values: ["2", "4", "-4"] }
        },
        {
          id: "1.2-x3", type: "whatif", base: 30,
          ask: "Ví dụ: (−2 + −4) × −5 = 30. Nếu bỏ ngoặc thành −2 + −4 × −5 thì kết quả là bao nhiêu?",
          why: "Thứ tự thực hiện phép tính quyết định đáp số — quên ngoặc là lỗi hay gặp khi thế số âm vào biểu thức.",
          answer: function () { return -2 + -4 * -5; },
          reasons: [
            "Không có ngoặc thì nhân trước: −4 × −5 = 20, rồi −2 + 20 = 18.",
            "Vẫn tính từ trái sang phải nên kết quả vẫn là 30.",
            "Bỏ ngoặc làm kết quả đổi dấu, nên được −30."
          ],
          reason: 0,
          sample: { guess: "18", reason: 0 }
        }
      ],
      "1.3": [
        {
          id: "1.3-x1", type: "many", arity: 2, ordered: true,
          labels: ["a", "b"],
          ask: "Tìm hai số nguyên a và b (khác 0) sao cho a² = b³.",
          why: "Mỗi cặp nối căn bậc hai với căn bậc ba của cùng một số, và số âm a cũng được vì (−a)² = a².",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && v[1] !== 0 && Math.abs(v[0]) <= 1e6 && v[0] * v[0] === v[1] * v[1] * v[1]; },
          challenge: function (v) { return v[1] > 50; },
          challengeText: "b lớn hơn 50.",
          sample: { values: ["8", "4"] }
        },
        {
          id: "1.3-x2", type: "pattern",
          ask: "Lập phương của các số âm: (−1)³ = −1, (−2)³ = −8, (−3)³ = −27, (−4)³ = −64, … Tìm số hạng thứ 5, thứ 7, thứ 10 và quy luật của số hạng thứ n.",
          why: "Lập phương của số âm vẫn âm, nên mỗi số âm có đúng một căn bậc ba — khác hẳn căn bậc hai.",
          seq: [-1, -8, -27, -64],
          term: function (n) { return -n * n * n; },
          askN: [5, 7, 10],
          sample: { terms: { 5: "-125", 7: "-343", 10: "-1000" }, rule: "-n^3" }
        },
        {
          id: "1.3-x3", type: "whatif", base: 2,
          ask: "Phương trình x² = 64 có 2 nghiệm (8 và −8). Nếu đổi thành x² = −64 thì có bao nhiêu nghiệm?",
          why: "Biết khi nào phương trình vô nghiệm giúp em không đi tìm một đáp số không tồn tại.",
          answer: function () { return 0; },
          reasons: [
            "Bình phương của mọi số đều không âm, nên không số nào bình phương lên được −64.",
            "Vẫn có 2 nghiệm là 8 và −8, chỉ đổi dấu vế phải.",
            "Có 1 nghiệm là −8, vì số âm cho kết quả âm."
          ],
          reason: 0,
          sample: { guess: "0", reason: 0 }
        }
      ],
      "1.4": [
        {
          id: "1.4-x1", type: "make",
          ask: "Tự ra đề aᵐ × aⁿ ÷ aᵖ với cơ số nguyên a (2 ≤ |a| ≤ 10) và các số mũ m, n, p từ 0 đến 20 (m + n ≥ p). Đáp án của đề là số mũ khi viết kết quả thành một lũy thừa của a.",
          why: "Tự chọn số mũ giúp em hiểu vì sao nhân thì cộng số mũ, chia thì trừ số mũ, và vì sao a⁰ = 1.",
          template: "aᵐ × aⁿ ÷ aᵖ = a mũ mấy?",
          fields: [{ id: "a", label: "Cơ số a" }, { id: "m", label: "Số mũ m" }, { id: "n", label: "Số mũ n" }, { id: "p", label: "Số mũ p" }],
          valid: function (f) {
            return inRange(f.a, -10, 10) && Math.abs(f.a) >= 2 && inRange(f.m, 0, 20) && inRange(f.n, 0, 20) && inRange(f.p, 0, 20) && f.m + f.n >= f.p;
          },
          solve: function (f) { return f.m + f.n - f.p; },
          render: function (f, lang) {
            const e = base(f.a) + sup(f.m) + " × " + base(f.a) + sup(f.n) + " ÷ " + base(f.a) + sup(f.p);
            return lang === "en" ? "Write " + e + " as a single power of " + neg(f.a) + ". Enter the index."
              : "Viết " + e + " thành một lũy thừa của " + neg(f.a) + ". Nhập số mũ.";
          },
          criteria: [
            { id: "zero", text: "Kết quả là a⁰ (bằng 1)", test: function (f) { return f.m + f.n === f.p; } },
            { id: "one", text: "Kết quả là a¹ (bằng chính a)", test: function (f) { return f.m + f.n - f.p === 1; } },
            { id: "bigp", text: "Số mũ của số chia lớn hơn cả m và n", test: function (f) { return f.p > f.m && f.p > f.n; } },
            { id: "negbase", text: "Cơ số là số âm", test: function (f) { return f.a < 0; } },
            { id: "ten", text: "Số mũ của kết quả từ 10 trở lên", test: function (f) { return f.m + f.n - f.p >= 10; } }
          ],
          sample: { fields: { a: "-2", m: "3", n: "5", p: "8" } }
        },
        {
          id: "1.4-x2", type: "pattern",
          ask: "Viết 27ⁿ ÷ 3 thành một lũy thừa của 3: 27¹ ÷ 3 = 3², 27² ÷ 3 = 3⁵, 27³ ÷ 3 = 3⁸, … Tìm số mũ khi n = 5, n = 10, n = 20 và quy luật của số mũ.",
          why: "Kết hợp “lũy thừa của lũy thừa” (27 = 3³) với quy tắc chia cùng cơ số là kỹ năng rút gọn lũy thừa em sẽ dùng mãi.",
          seq: [2, 5, 8],
          term: function (n) { return 3 * n - 1; },
          askN: [5, 10, 20],
          sample: { terms: { 5: "14", 10: "29", 20: "59" }, rule: "3n-1" }
        },
        {
          id: "1.4-x3", type: "whatif", base: 128,
          ask: "Ví dụ: 2³ × 2⁴ = 2⁷ = 128. Nếu đổi phép nhân thành phép cộng: 2³ + 2⁴ thì kết quả là bao nhiêu?",
          why: "Quy tắc cộng số mũ chỉ dùng cho phép nhân cùng cơ số — nhầm sang phép cộng là lỗi rất hay gặp.",
          answer: function () { return 8 + 16; },
          reasons: [
            "Phép cộng không có quy tắc số mũ: tính từng lũy thừa rồi cộng, 8 + 16 = 24.",
            "Vẫn cộng số mũ: 2³ + 2⁴ = 2⁷ = 128.",
            "Phép cộng thì nhân số mũ: 2¹² = 4096."
          ],
          reason: 0,
          sample: { guess: "24", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.1.1-x1.labels": ["Number"],
        "q.1.1-x1.ask": "Find a whole number less than 150 that has exactly 4 prime factors when written as a product of primes (count repeated factors too, e.g. 24 = 2 × 2 × 2 × 3).",
        "q.1.1-x1.why": "Counting factors on a factor tree shows that every number has exactly one prime factorisation — the basis for finding the HCF and LCM.",
        "q.1.1-x1.challengeText": "The number is odd.",
        "q.1.1-x1.kinds": ["a power of one prime (like 2⁴)", "2 different prime factors", "3 different prime factors"],
        "q.1.1-x2.ask": "120 = 2³ × 3 × 5 and 75 = 3 × 5², so HCF(120, 75) = 15. If 75 is replaced by 300 = 2² × 3 × 5², what is HCF(120, 300)?",
        "q.1.1-x2.why": "Taking the lowest power of each common prime factor lets you find the HCF of large numbers without listing factors.",
        "q.1.1-x2.reasons": [
          "Now 2 is a common factor too; the lower power is 2², so HCF = 2² × 3 × 5 = 60.",
          "Take the higher power of 2, which is 2³, so HCF = 2³ × 3 × 5 = 120.",
          "300 is just 4 times 75, so the HCF is still 15."
        ],
        "q.1.1-x3.ask": "Choose two different numbers a and b (from 2 to 500). Your problem is: find the LCM of a and b. The game works out the answer and checks your problem against the criteria.",
        "q.1.1-x3.why": "Choosing numbers with common factors and high powers makes you use the rule “take the highest power” correctly when finding the LCM.",
        "q.1.1-x3.template": "Find the LCM of a and b",
        "q.1.1-x3.fields": ["Number a", "Number b"],
        "q.1.1-x3.criteria": [
          "The numbers share a prime factor (HCF > 1)",
          "One number has a prime factor with index 3 or more (like 2³)",
          "The HCF is 10 or more, so the LCM is at least 10 times smaller than the product",
          "Each number has at least three different prime factors",
          "Neither number is a multiple of the other"
        ],
        "q.1.2-x1.ask": "Work out (−7) × 38 + (−7) × (−18) in several different ways.",
        "q.1.2-x1.why": "Spotting the common factor (−7) makes mental calculation quick, and it is also the idea behind factorising in unit 2.",
        "q.1.2-x1.strategies": ["Work out each product, then add", "Take (−7) outside: (−7) × (38 + (−18))"],
        "q.1.2-x1.steps.s1": ["(−7) × 38 = ?", "(−7) × (−18) = ?"],
        "q.1.2-x1.steps.s2": ["38 + (−18) = ?"],
        "q.1.2-x2.labels": ["a", "b", "c"],
        "q.1.2-x2.ask": "Find three integers a, b, c (from −10 to 10, with c negative) so that (a + b) × c = −24.",
        "q.1.2-x2.why": "You must reason backwards from the sign rules: c is negative and the product is negative, so a + b must be positive — exactly how division finds a missing number.",
        "q.1.2-x2.challengeText": "a or b is less than −5.",
        "q.1.2-x2.kinds": ["c = −2, a + b = 12", "c = −3, a + b = 8", "c = −4, a + b = 6", "c = −6, a + b = 4", "c = −8, a + b = 3"],
        "q.1.2-x3.ask": "Example: (−2 + −4) × −5 = 30. If the brackets are removed, giving −2 + −4 × −5, what is the result?",
        "q.1.2-x3.why": "The order of operations decides the answer — forgetting brackets is a common mistake when substituting negative numbers.",
        "q.1.2-x3.reasons": [
          "Without brackets you multiply first: −4 × −5 = 20, then −2 + 20 = 18.",
          "You still work from left to right, so the result is still 30.",
          "Removing the brackets changes the sign of the result, so it is −30."
        ],
        "q.1.3-x1.labels": ["a", "b"],
        "q.1.3-x1.ask": "Find two integers a and b (not 0) so that a² = b³.",
        "q.1.3-x1.why": "Each pair links a square root and a cube root of the same number, and a negative a works too because (−a)² = a².",
        "q.1.3-x1.challengeText": "b is greater than 50.",
        "q.1.3-x2.ask": "Cubes of negative numbers: (−1)³ = −1, (−2)³ = −8, (−3)³ = −27, (−4)³ = −64, … Find the 5th, 7th and 10th terms and the rule for the nth term.",
        "q.1.3-x2.why": "The cube of a negative number is still negative, so every negative number has exactly one cube root — quite different from square roots.",
        "q.1.3-x3.ask": "The equation x² = 64 has 2 solutions (8 and −8). If it becomes x² = −64, how many solutions are there?",
        "q.1.3-x3.why": "Knowing when an equation has no solution stops you hunting for an answer that does not exist.",
        "q.1.3-x3.reasons": [
          "The square of any number is never negative, so no number squares to −64.",
          "There are still 2 solutions, 8 and −8; only the sign on the right changed.",
          "There is 1 solution, −8, because a negative number gives a negative result."
        ],
        "q.1.4-x1.ask": "Make a problem aᵐ × aⁿ ÷ aᵖ with an integer base a (2 ≤ |a| ≤ 10) and indices m, n, p from 0 to 20 (m + n ≥ p). The answer to your problem is the index when the result is written as a single power of a.",
        "q.1.4-x1.why": "Choosing the indices yourself shows why you add indices when multiplying, subtract them when dividing, and why a⁰ = 1.",
        "q.1.4-x1.template": "aᵐ × aⁿ ÷ aᵖ = a to what power?",
        "q.1.4-x1.fields": ["Base a", "Index m", "Index n", "Index p"],
        "q.1.4-x1.criteria": [
          "The result is a⁰ (equal to 1)",
          "The result is a¹ (equal to a itself)",
          "The index of the divisor is greater than both m and n",
          "The base is negative",
          "The index of the result is 10 or more"
        ],
        "q.1.4-x2.ask": "Write 27ⁿ ÷ 3 as a single power of 3: 27¹ ÷ 3 = 3², 27² ÷ 3 = 3⁵, 27³ ÷ 3 = 3⁸, … Find the index when n = 5, n = 10 and n = 20, and the rule for the index.",
        "q.1.4-x2.why": "Combining “a power of a power” (27 = 3³) with the rule for dividing powers of the same base is a simplifying skill you will use again and again.",
        "q.1.4-x3.ask": "Example: 2³ × 2⁴ = 2⁷ = 128. If the multiplication becomes an addition, 2³ + 2⁴, what is the result?",
        "q.1.4-x3.why": "Adding indices only works when multiplying powers of the same base — mixing it up with addition is a very common mistake.",
        "q.1.4-x3.reasons": [
          "There is no index rule for addition: work out each power, then add, 8 + 16 = 24.",
          "You still add the indices: 2³ + 2⁴ = 2⁷ = 128.",
          "For addition you multiply the indices: 2¹² = 4096."
        ]
      },
      vi: {}
    }
  });
})();
