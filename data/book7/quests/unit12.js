// 🚀 Extension quests — Math 7, unit 12 (Ratio and proportion). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  const isPrime = function (n) { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };

  window.GAME_QUESTS.push({
    unit: 12,
    sections: {
      "12.1": [
        {
          id: "12.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Số học sinh nam", "Số học sinh nữ"],
          ask: "Lớp có 36 học sinh, có cả nam và nữ. Tìm số nam và số nữ sao cho tỉ số nam : nữ còn rút gọn được (chưa tối giản).",
          why: "Tỉ số rút gọn được khi hai số có ước chung lớn hơn 1 — tìm ƯCLN là bước đầu tiên của mọi bài rút gọn tỉ số.",
          check: function (v) { return inRange(v[0], 1, 35) && inRange(v[1], 1, 35) && v[0] + v[1] === 36 && gcd(v[0], v[1]) > 1; },
          challenge: function (v) { const d = gcd(v[0], v[1]); return isPrime(v[0] / d) && isPrime(v[1] / d); },
          challengeText: "Sau khi rút gọn, cả hai số của tỉ số đều là số nguyên tố.",
          kinds: [
            { id: "by6", text: "rút gọn được cho 6", test: function (v) { return v[0] % 6 === 0; } },
            { id: "by2", text: "rút gọn được cho 2 (không cho 3)", test: function (v) { return v[0] % 2 === 0; } },
            { id: "by3", text: "rút gọn được cho 3 (không cho 2)", test: function () { return true; } }
          ],
          kindSamples: [["12", "24"], ["6", "30"], ["2", "34"], ["4", "32"], ["3", "33"]],
          sample: { values: ["12", "24"] }
        },
        {
          id: "12.1-x2", type: "whatif", base: 80,
          ask: "Ví dụ: mô hình xe cao 6 cm, xe thật cao 160 cm, tỉ số tối giản là 3 : 80. Nếu xe thật cao 2 m thì tỉ số tối giản mô hình : xe thật là 3 : ? (nhập số thứ hai).",
          why: "Phải đổi về cùng đơn vị trước khi viết tỉ số — nếu không, tỉ số sai hàng trăm lần.",
          answer: function () { return 200 / gcd(6, 200); },
          reasons: [
            "Đổi 2 m = 200 cm trước: 6 : 200 = 3 : 100.",
            "Viết luôn 6 : 2 = 3 : 1 vì đã có hai số.",
            "Xe thật “2” nhỏ hơn 160 nên số thứ hai phải nhỏ hơn 80."
          ],
          reason: 0,
          sample: { guess: "100", reason: 0 }
        },
        {
          id: "12.1-x3", type: "ways",
          ask: "Một hỗn hợp có 84 g bột và 126 g đường. Tỉ số bột : đường ở dạng tối giản là 2 : ?. Tìm số thứ hai theo nhiều cách.",
          why: "Chia một lần cho ƯCLN hay chia dần nhiều lần đều đúng — biết cả hai giúp em chọn cách nhanh và tự kiểm tra.",
          strategies: [
            { id: "s1", name: "Chia một lần cho ƯCLN", steps: [{ ask: "ƯCLN(84, 126) = ?", answer: 42 }, { answer: 3 }] },
            { id: "s2", name: "Chia dần cho các ước chung nhỏ", steps: [
              { ask: "Chia cả hai cho 2: 84 : 126 = 42 : ?", answer: 63 },
              { ask: "Chia tiếp cả hai cho 3: 42 : 63 = 14 : ?", answer: 21 }, { answer: 3 }] },
            { id: "s3", name: "Phân tích ra thừa số nguyên tố", steps: [
              { ask: "84 = 2 × 2 × 3 × 7 và 126 = 2 × 3 × 3 × ?", answer: 7 }, { answer: 3 }] }
          ],
          sample: { strategy: "s1", steps: ["42", "3"] }
        }
      ],
      "12.2": [
        {
          id: "12.2-x1", type: "make",
          ask: "Tự tạo một đề: “Chia T theo tỉ số a : b giữa An và Bình. Bình nhận bao nhiêu?” (T nguyên từ 1 đến 100 000; a, b nguyên từ 1 đến 50; mỗi phần có nhiều nhất 2 chữ số thập phân).",
          why: "Tự chọn tổng và tỉ số cho em thấy vì sao tổng chia hết cho tổng số phần thì phép chia đẹp, và khi nào nên rút gọn tỉ số trước.",
          template: "Chia T theo tỉ số a : b",
          fields: [{ id: "t", label: "Tổng T" }, { id: "a", label: "Phần của An a" }, { id: "b", label: "Phần của Bình b" }],
          valid: function (f) { return inRange(f.t, 1, 100000) && inRange(f.a, 1, 50) && inRange(f.b, 1, 50) && (f.t * 100) % (f.a + f.b) === 0; },
          solve: function (f) { return (f.t * f.b) / (f.a + f.b); },
          render: function (f, lang) {
            return lang === "en"
              ? "Share " + f.t + " between An and Binh in the ratio " + f.a + " : " + f.b + ". How much does Binh get?"
              : "Chia " + f.t + " cho An và Bình theo tỉ số " + f.a + " : " + f.b + ". Bình nhận bao nhiêu?";
          },
          criteria: [
            { id: "reduce", text: "Tỉ số chưa tối giản (nên rút gọn trước)", test: function (f) { return gcd(f.a, f.b) > 1; } },
            { id: "amore", text: "An nhận nhiều hơn Bình", test: function (f) { return f.a > f.b; } },
            { id: "whole", text: "Mỗi người nhận một số nguyên", test: function (f) { return f.t % (f.a + f.b) === 0; } },
            { id: "bigpart", text: "Một phần lớn hơn 100", test: function (f) { return f.t / (f.a + f.b) > 100; } },
            { id: "parts", text: "Tổng số phần từ 10 trở lên", test: function (f) { return f.a + f.b >= 10; } }
          ],
          sample: { fields: { t: "600", a: "6", b: "4" } }
        },
        {
          id: "12.2-x2", type: "pattern",
          ask: "Chia kẹo cho Minh và Hà theo tỉ số 1 : 4. Ở lần chia thứ 1, 2, 3 có 10, 15, 20 cái kẹo nên Hà nhận 8, 12, 16 cái. Mỗi lần chia có thêm 5 cái. Ở lần thứ 10, 20, 50 Hà nhận bao nhiêu cái? Viết quy luật theo n.",
          why: "Khi tổng tăng thêm đúng một lần tổng số phần (5 cái), mỗi người nhận thêm đúng số phần của mình — đó là lý do tỉ số luôn được giữ.",
          seq: [8, 12, 16],
          term: function (n) { return 4 * n + 4; },
          askN: [10, 20, 50],
          sample: { terms: { 10: "44", 20: "84", 50: "204" }, rule: "4n+4" }
        },
        {
          id: "12.2-x3", type: "whatif", base: 36,
          ask: "Ví dụ: chia 45 đô la cho Ethan và Julie theo tỉ số 1 : 4 thì Julie nhận 36 đô la. Nếu có thêm Sam và chia theo tỉ số 1 : 4 : 1 (Ethan : Julie : Sam) thì Julie nhận bao nhiêu?",
          why: "Giá trị một phần phụ thuộc vào tổng số phần — thêm người là thêm phần, nên mỗi phần nhỏ đi.",
          answer: function () { return (45 * 4) / 6; },
          reasons: [
            "Tổng số phần thành 6, một phần là 7,5 đô la, nên Julie nhận 4 × 7,5 = 30 đô la.",
            "Julie vẫn có 4 phần nên vẫn nhận 36 đô la.",
            "Mỗi người bớt 1 phần cho Sam nên Julie còn 3 phần: 27 đô la."
          ],
          reason: 0,
          sample: { guess: "30", reason: 0 }
        }
      ],
      "12.3": [
        {
          id: "12.3-x1", type: "ways",
          ask: "Làm 6 cái bánh cần 270 g bột. Làm 10 cái bánh cần bao nhiêu gam bột? Giải theo nhiều cách.",
          why: "Phương pháp về đơn vị, đi qua một số bánh dễ tính, hay dùng hệ số nhân đều dựa vào cùng một ý: tỉ lệ thuận là nhân hoặc chia.",
          strategies: [
            { id: "s1", name: "Về đơn vị: tìm bột cho 1 cái", steps: [{ ask: "1 cái bánh cần bao nhiêu gam bột?", answer: 45 }, { answer: 450 }] },
            { id: "s2", name: "Đi qua 12 cái (gấp đôi 6) rồi bớt 2 cái", steps: [
              { ask: "12 cái bánh cần bao nhiêu gam bột?", answer: 540 },
              { ask: "2 cái bánh cần bao nhiêu gam bột?", answer: 90 }, { answer: 450 }] },
            { id: "s3", name: "Dùng hệ số nhân", steps: [{ ask: "10 cái gấp 6 cái bao nhiêu lần? (viết phân số tối giản)", answer: "5/3" }, { answer: 450 }] }
          ],
          sample: { strategy: "s1", steps: ["45", "450"] }
        },
        {
          id: "12.3-x2", type: "many", arity: 1,
          labels: ["Số bánh"],
          ask: "Công thức: 12 cái bánh cần 2 quả trứng và 150 g đường. Em muốn làm n cái bánh (n từ 1 đến 100) mà số trứng cần là số nguyên. Tìm các giá trị n.",
          why: "Nhìn ra “2 trứng cho 12 bánh” nghĩa là “1 trứng cho 6 bánh” giúp em biết ngay số lượng nào làm được trọn vẹn.",
          check: function (v) { return inRange(v[0], 1, 100) && v[0] % 6 === 0; },
          challenge: function (v) { return (25 * v[0]) % 200 === 0; },
          challengeText: "Lượng đường cũng là một số tròn trăm gam.",
          kinds: [
            { id: "by24", text: "đường cũng là số tròn trăm gam", test: function (v) { return v[0] % 24 === 0; } },
            { id: "by12", text: "gấp công thức lên số nguyên lần", test: function (v) { return v[0] % 12 === 0; } },
            { id: "half", text: "gấp công thức lên số lần có “rưỡi” (0,5; 1,5; …)", test: function () { return true; } }
          ],
          kindSamples: [["24"], ["48"], ["12"], ["36"], ["6"]],
          sample: { values: ["18"] }
        },
        {
          id: "12.3-x3", type: "whatif", base: 6,
          ask: "Ví dụ: 2 quả trứng làm được 12 cái bánh, nên 36 cái bánh cần 6 quả trứng. Nếu làm 42 cái bánh (thêm 6 cái) thì cần bao nhiêu quả trứng?",
          why: "Tỉ lệ thuận là nhân hoặc chia, không phải “thêm bao nhiêu cái thì thêm bấy nhiêu trứng” — đây là lỗi hay gặp nhất của chương.",
          answer: function () { return (2 * 42) / 12; },
          reasons: [
            "6 cái bánh là nửa của 12 cái nên cần thêm nửa của 2 trứng, tức 1 trứng: 7 quả.",
            "Thêm 6 cái bánh thì thêm 6 quả trứng: 12 quả.",
            "42 vẫn gần 36 nên số trứng không đổi: 6 quả."
          ],
          reason: 0,
          sample: { guess: "7", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.12.1-x1.labels": ["Number of boys", "Number of girls"],
        "q.12.1-x1.ask": "A class has 36 students, both boys and girls. Find numbers of boys and girls so that the ratio boys : girls can still be simplified (it is not in its simplest form).",
        "q.12.1-x1.why": "A ratio can be simplified when the two numbers have a common factor greater than 1 — finding the highest common factor is the first step in simplifying any ratio.",
        "q.12.1-x1.challengeText": "After simplifying, both numbers in the ratio are prime numbers.",
        "q.12.1-x1.kinds": ["can be simplified by 6", "can be simplified by 2 (not by 3)", "can be simplified by 3 (not by 2)"],
        "q.12.1-x2.ask": "Example: a model car is 6 cm high and the real car is 160 cm high, so the ratio in its simplest form is 3 : 80. If the real car is 2 m high, the ratio model : real car in its simplest form is 3 : ? (enter the second number).",
        "q.12.1-x2.why": "You must change to the same units before writing a ratio — otherwise the ratio is wrong by hundreds of times.",
        "q.12.1-x2.reasons": [
          "First change 2 m = 200 cm: 6 : 200 = 3 : 100.",
          "Just write 6 : 2 = 3 : 1 because there are already two numbers.",
          "The real car “2” is less than 160, so the second number must be less than 80."
        ],
        "q.12.1-x3.ask": "A mixture has 84 g of flour and 126 g of sugar. The ratio flour : sugar in its simplest form is 2 : ?. Find the second number in several ways.",
        "q.12.1-x3.why": "Dividing once by the HCF or dividing step by step are both correct — knowing both lets you choose the quick way and check yourself.",
        "q.12.1-x3.strategies": ["Divide once by the HCF", "Divide step by step by small common factors", "Write the numbers as products of prime factors"],
        "q.12.1-x3.steps.s1": ["HCF(84, 126) = ?"],
        "q.12.1-x3.steps.s2": ["Divide both by 2: 84 : 126 = 42 : ?", "Divide both by 3 again: 42 : 63 = 14 : ?"],
        "q.12.1-x3.steps.s3": ["84 = 2 × 2 × 3 × 7 and 126 = 2 × 3 × 3 × ?"],
        "q.12.2-x1.ask": "Make your own question: “Share T between An and Binh in the ratio a : b. How much does Binh get?” (T a whole number from 1 to 100 000; a, b whole numbers from 1 to 50; each share has at most 2 decimal places).",
        "q.12.2-x1.why": "Choosing the total and the ratio yourself shows why the division is neat when the total divides by the number of parts, and when to simplify the ratio first.",
        "q.12.2-x1.template": "Share T in the ratio a : b",
        "q.12.2-x1.fields": ["Total T", "An's parts a", "Binh's parts b"],
        "q.12.2-x1.criteria": [
          "The ratio is not in its simplest form (simplify it first)", "An gets more than Binh", "Each person gets a whole number",
          "One part is more than 100", "There are 10 or more parts in total"
        ],
        "q.12.2-x2.ask": "Sweets are shared between Minh and Ha in the ratio 1 : 4. In shares 1, 2, 3 there are 10, 15, 20 sweets, so Ha gets 8, 12, 16 sweets. Each share has 5 more sweets. How many sweets does Ha get in shares 10, 20 and 50? Write the rule in terms of n.",
        "q.12.2-x2.why": "When the total grows by exactly one lot of the total parts (5 sweets), each person gets exactly their number of parts more — that is why the ratio stays the same.",
        "q.12.2-x3.ask": "Example: sharing $45 between Ethan and Julie in the ratio 1 : 4 gives Julie $36. If Sam joins and they share in the ratio 1 : 4 : 1 (Ethan : Julie : Sam), how much does Julie get?",
        "q.12.2-x3.why": "The value of one part depends on the total number of parts — more people means more parts, so each part is smaller.",
        "q.12.2-x3.reasons": [
          "There are now 6 parts, one part is $7.5, so Julie gets 4 × 7.5 = $30.",
          "Julie still has 4 parts, so she still gets $36.",
          "Everyone gives 1 part to Sam, so Julie has 3 parts left: $27."
        ],
        "q.12.3-x1.ask": "6 cakes need 270 g of flour. How many grams of flour do 10 cakes need? Solve it in several ways.",
        "q.12.3-x1.why": "The unitary method, going through an easy number of cakes, and using a multiplier all rest on one idea: direct proportion means multiplying or dividing.",
        "q.12.3-x1.strategies": ["Unitary method: find the flour for 1 cake", "Go through 12 cakes (double 6), then take away 2 cakes", "Use a multiplier"],
        "q.12.3-x1.steps.s1": ["How many grams of flour does 1 cake need?"],
        "q.12.3-x1.steps.s2": ["How many grams of flour do 12 cakes need?", "How many grams of flour do 2 cakes need?"],
        "q.12.3-x1.steps.s3": ["How many times is 10 cakes compared with 6 cakes? (write a fraction in its simplest form)"],
        "q.12.3-x2.labels": ["Number of cakes"],
        "q.12.3-x2.ask": "A recipe: 12 cakes need 2 eggs and 150 g of sugar. You want to make n cakes (n from 1 to 100) so that the number of eggs needed is a whole number. Find values of n.",
        "q.12.3-x2.why": "Seeing that “2 eggs for 12 cakes” means “1 egg for 6 cakes” tells you straight away which amounts work out exactly.",
        "q.12.3-x2.challengeText": "The amount of sugar is also a whole number of hundreds of grams.",
        "q.12.3-x2.kinds": ["the sugar is also a whole number of hundreds of grams", "the recipe is multiplied by a whole number", "the recipe is multiplied by a “and a half” number (0.5, 1.5, …)"],
        "q.12.3-x3.ask": "Example: 2 eggs make 12 cakes, so 36 cakes need 6 eggs. If you make 42 cakes (6 more), how many eggs do you need?",
        "q.12.3-x3.why": "Direct proportion means multiplying or dividing, not “add the same number of eggs as cakes” — this is the most common mistake in the unit.",
        "q.12.3-x3.reasons": [
          "6 cakes is half of 12 cakes, so you need half of 2 eggs more, which is 1 egg: 7 eggs.",
          "6 more cakes means 6 more eggs: 12 eggs.",
          "42 is still close to 36, so the number of eggs stays the same: 6 eggs."
        ]
      },
      vi: {}
    }
  });
})();
