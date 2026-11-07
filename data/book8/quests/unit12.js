// 🚀 Extension quests — Math 8, unit 12 (Ratio and proportion). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
  const sorted = function (v) { return v.slice().sort(function (p, q) { return p - q; }); };
  // An gets a parts, Binh gets b parts and Binh has D more: one part is D ÷ (b − a)
  const total = function (f) { return (f.d * (f.a + f.b)) / (f.b - f.a); };
  const wholeTotal = function (f) { return (f.d * (f.a + f.b)) % (f.b - f.a) === 0; };

  window.GAME_QUESTS.push({
    unit: 12,
    sections: {
      "12.1": [
        {
          id: "12.1-x1", type: "many", arity: 2, ordered: false,
          labels: ["Đoạn ngắn (cm)", "Đoạn dài (cm)"],
          ask: "Cắt một sợi dây dài 2 m thành hai đoạn có độ dài là số nguyên xăng-ti-mét, đoạn ngắn và đoạn dài khác nhau. Rút gọn tỉ số đoạn ngắn : đoạn dài được p : q với q không quá 9. Tìm độ dài hai đoạn.",
          why: "Phải đổi 2 m thành 200 cm trước khi so sánh, rồi chia cho ƯCLN để có tỉ số tối giản — hai bước cốt lõi của rút gọn tỉ số.",
          check: function (v) {
            const s = sorted(v), a = s[0], b = s[1];
            return isInt(a) && isInt(b) && a > 0 && a < b && a + b === 200 && b / gcd(a, b) <= 9;
          },
          challenge: function (v) { const s = sorted(v), g = gcd(s[0], s[1]); return s[0] / g > 1; },
          challengeText: "Trong tỉ số tối giản p : q, cả p và q đều lớn hơn 1.",
          kinds: [
            { id: "few", text: "tổng số phần p + q là 4 hoặc 5", test: function (v) { const g = gcd(v[0], v[1]); return (v[0] + v[1]) / g <= 5; } },
            { id: "eight", text: "tổng số phần p + q là 8", test: function (v) { const g = gcd(v[0], v[1]); return (v[0] + v[1]) / g === 8; } },
            { id: "ten", text: "tổng số phần p + q là 10", test: function () { return true; } }
          ],
          kindSamples: [["50", "150"], ["40", "160"], ["25", "175"], ["75", "125"], ["20", "180"]],
          sample: { values: ["50", "150"] }
        },
        {
          id: "12.1-x2", type: "whatif", base: 5,
          ask: "Ví dụ: 3 m : 60 cm = 300 cm : 60 cm = 5 : 1. Nếu đổi thành 3 m : 6 dm thì tỉ số tối giản là ? : 1 — nhập số còn thiếu.",
          why: "Đơn vị khác nhau có thể che giấu hai độ dài bằng nhau — luôn đổi về cùng đơn vị rồi mới so sánh.",
          answer: function () { return 300 / 60; },
          reasons: [
            "6 dm = 60 cm, vẫn là độ dài cũ, nên tỉ số vẫn là 5 : 1.",
            "6 dm nhỏ hơn 60 cm mười lần nên tỉ số thành 50 : 1.",
            "Chỉ nhìn các số: 3 : 6 = 0,5 : 1."
          ],
          reason: 0,
          sample: { guess: "5", reason: 0 }
        },
        {
          id: "12.1-x3", type: "ways",
          ask: "Một món bánh cần 2,4 kg bột, 900 g đường và 1,5 kg bơ. Viết tỉ số bột : đường : bơ ở dạng tối giản a : b : c rồi nhập số c. Làm theo nhiều cách.",
          why: "Tỉ số có đơn vị khác nhau hay có số thập phân đều đưa về số nguyên cùng đơn vị trước — chọn cách đổi khéo thì rút gọn nhanh hơn.",
          strategies: [
            { id: "s1", name: "Đổi hết sang gam rồi chia cho ƯCLN", steps: [
              { ask: "2,4 kg bằng bao nhiêu gam?", answer: 2400 },
              { ask: "ƯCLN của 2400, 900 và 1500 là bao nhiêu?", answer: 300 }, { answer: 5 }] },
            { id: "s2", name: "Đổi hết sang ki-lô-gam rồi nhân 10", steps: [
              { ask: "900 g bằng bao nhiêu ki-lô-gam?", answer: 0.9 },
              { ask: "Nhân cả ba với 10 được 24 : 9 : 15. Chia cả ba cho số nào?", answer: 3 }, { answer: 5 }] },
            { id: "s3", name: "Chia dần từng bước (theo gam)", steps: [{ ask: "Chia cả ba số (theo gam) cho 100 được 24 : 9 : ? — số thứ ba là bao nhiêu?", answer: 15 }, { answer: 5 }] }
          ],
          sample: { strategy: "s1", steps: ["2400", "300", "5"] }
        }
      ],
      "12.2": [
        {
          id: "12.2-x1", type: "make",
          ask: "Tự tạo đề: An và Bình chia tiền theo tỉ số a : b (a, b nguyên từ 1 đến 20, a < b). An nhận ít hơn Bình D nghìn đồng (D nguyên từ 1 đến 10 000). Đề hỏi hai bạn chia tất cả bao nhiêu nghìn đồng.",
          why: "Chênh lệch hai phần ứng với (b − a) phần bằng nhau — tìm một phần từ chênh lệch là cách đi ngược của bài chia theo tỉ số.",
          template: "Chia theo a : b, Bình hơn An D nghìn",
          fields: [{ id: "a", label: "Phần của An a" }, { id: "b", label: "Phần của Bình b" }, { id: "d", label: "Chênh lệch D" }],
          valid: function (f) { return inRange(f.a, 1, 20) && inRange(f.b, 1, 20) && f.a < f.b && inRange(f.d, 1, 10000); },
          solve: function (f) { return total(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "An and Binh share some money in the ratio " + f.a + " : " + f.b + ". An gets " + f.d + " thousand dong less than Binh. How many thousand dong do they share altogether?"
              : "An và Bình chia tiền theo tỉ số " + f.a + " : " + f.b + ". An nhận ít hơn Bình " + f.d + " nghìn đồng. Hai bạn chia tất cả bao nhiêu nghìn đồng?";
          },
          criteria: [
            { id: "whole", text: "Tổng số tiền là số nguyên nghìn đồng", test: function (f) { return wholeTotal(f); } },
            { id: "simp", text: "Tỉ số a : b chưa tối giản (nên rút gọn trước)", test: function (f) { return gcd(f.a, f.b) > 1; } },
            { id: "close", text: "Tổng số tiền lớn hơn 10 lần chênh lệch D", test: function (f) { return f.a + f.b > 10 * (f.b - f.a); } },
            { id: "wide", text: "Bình nhận ít nhất gấp 3 lần An", test: function (f) { return f.b >= 3 * f.a; } },
            { id: "part", text: "Giá trị một phần không phải số nguyên nhưng tổng số tiền vẫn là số nguyên", test: function (f) { return f.d % (f.b - f.a) !== 0 && wholeTotal(f); } }
          ],
          sample: { fields: { a: "10", b: "12", d: "3" } }
        },
        {
          id: "12.2-x2", type: "many", arity: 3, ordered: false,
          labels: ["Số phần thứ nhất", "Số phần thứ hai", "Số phần thứ ba"],
          ask: "Chia 360 nghìn đồng cho ba bạn theo tỉ số a : b : c ở dạng tối giản (a, b, c nguyên dương khác nhau, đều không quá 10) sao cho mỗi bạn nhận một số nguyên nghìn đồng. Tìm các tỉ số như vậy.",
          why: "Tổng số tiền phải chia hết cho tổng số phần thì mỗi phần mới là số nguyên — bước 1 và bước 2 của phép chia theo tỉ số.",
          check: function (v) {
            const s = sorted(v);
            return s.every(function (x) { return inRange(x, 1, 10); }) && s[0] < s[1] && s[1] < s[2] &&
              gcd(gcd(s[0], s[1]), s[2]) === 1 && 360 % (s[0] + s[1] + s[2]) === 0;
          },
          challenge: function (v) { const s = sorted(v); return s[2] === s[0] + s[1] && (360 * s[0]) / (s[0] + s[1] + s[2]) < 50; },
          challengeText: "Bạn nhận nhiều nhất được đúng một nửa số tiền, còn bạn nhận ít nhất được dưới 50 nghìn đồng.",
          kinds: [
            { id: "more", text: "một bạn nhận hơn một nửa", test: function (v) { return v[2] > v[0] + v[1]; } },
            { id: "half", text: "một bạn nhận đúng một nửa", test: function (v) { return v[2] === v[0] + v[1]; } },
            { id: "less", text: "không bạn nào nhận tới một nửa", test: function () { return true; } }
          ],
          kindSamples: [["1", "2", "5"], ["1", "3", "5"], ["1", "2", "3"], ["2", "3", "5"], ["3", "4", "5"]],
          sample: { values: ["2", "3", "5"] }
        },
        {
          id: "12.2-x3", type: "ways",
          ask: "Ba anh em 12, 15 và 21 tuổi chia 540 nghìn đồng tiền mừng tuổi theo tỉ số tuổi. Em út (12 tuổi) nhận bao nhiêu nghìn đồng? Giải theo nhiều cách.",
          why: "Rút gọn tỉ số trước khi chia làm các số nhỏ hơn mà kết quả không đổi — hai cách cho cùng đáp số là cách kiểm tra tốt.",
          strategies: [
            { id: "s1", name: "Rút gọn tỉ số tuổi trước", steps: [
              { ask: "12 : 15 : 21 rút gọn thành 4 : 5 : ? — số thứ ba là bao nhiêu?", answer: 7 },
              { ask: "Một phần trị giá bao nhiêu nghìn đồng?", answer: 33.75 }, { answer: 135 }] },
            { id: "s2", name: "Dùng ngay tổng số tuổi", steps: [{ ask: "Tổng số tuổi (tổng số phần) là bao nhiêu?", answer: 48 }, { answer: 135 }] },
            { id: "s3", name: "Dùng phân số của tổng", steps: [{ ask: "Phần của em út là 12/48 = 1/? — mẫu số là bao nhiêu?", answer: 4 }, { answer: 135 }] }
          ],
          sample: { strategy: "s2", steps: ["48", "135"] }
        }
      ],
      "12.3": [
        {
          id: "12.3-x1", type: "pattern",
          ask: "Pha sơn hồng theo tỉ số đỏ : trắng = n : 3. Với n = 1, 2, 3, phân số sơn đỏ trong hỗn hợp là 1/4, 2/5, 3/6. Tìm phân số sơn đỏ khi n = 7, n = 12, n = 27 (viết phân số hoặc số thập phân) và viết quy luật theo n.",
          why: "Tỉ số a : b ứng với phân số a/(a + b) của cả hỗn hợp — đổi tỉ số ra phân số là cách so sánh độ đậm của các hỗn hợp.",
          seq: [0.25, 0.4, 0.5],
          term: function (n) { return n / (n + 3); },
          askN: [7, 12, 27],
          sample: { terms: { 7: "7/10", 12: "0,8", 27: "0,9" }, rule: "n/(n+3)" }
        },
        {
          id: "12.3-x2", type: "whatif", base: 7,
          ask: "Ví dụ: hộp 50 chiếc bánh có bánh dừa : bánh gừng = 3 : 7, nên có 15 bánh dừa và 35 bánh gừng. Nếu cho thêm 10 bánh gừng vào hộp thì tỉ số bánh dừa : bánh gừng là 3 : ? — nhập số còn thiếu.",
          why: "Thêm vào một loại làm thay đổi tỉ số — phải tính lại số lượng thật của từng loại rồi mới rút gọn.",
          answer: function () { return (3 * 45) / 15; },
          reasons: [
            "Dừa vẫn 15, gừng thành 45: 15 : 45 = 1 : 3 = 3 : 9.",
            "Thêm bánh không làm thay đổi tỉ số, vẫn là 3 : 7.",
            "Thêm 10 bánh gừng thì cộng 10 vào số sau: 3 : 17."
          ],
          reason: 0,
          sample: { guess: "9", reason: 0 }
        },
        {
          id: "12.3-x3", type: "ways",
          ask: "Một bao hạt có hạt xanh và hạt vàng; 3/11 số hạt là hạt xanh. Bao có 66 hạt xanh. Bao có bao nhiêu hạt vàng? Giải theo nhiều cách.",
          why: "Biết phân số a/c của toàn thể thì phần còn lại là (c − a)/c và tỉ số là a : (c − a) — đi qua tổng hay qua tỉ số đều được.",
          strategies: [
            { id: "s1", name: "Tìm tổng số hạt trước", steps: [{ ask: "Bao có tất cả bao nhiêu hạt?", answer: 242 }, { answer: 176 }] },
            { id: "s2", name: "Dùng tỉ số xanh : vàng", steps: [
              { ask: "Tỉ số xanh : vàng là 3 : ? — số thứ hai là bao nhiêu?", answer: 8 },
              { ask: "Một phần là bao nhiêu hạt?", answer: 22 }, { answer: 176 }] },
            { id: "s3", name: "Tìm 1/11 số hạt", steps: [{ ask: "1/11 số hạt là bao nhiêu hạt?", answer: 22 }, { answer: 176 }] }
          ],
          sample: { strategy: "s1", steps: ["242", "176"] }
        }
      ]
    },
    tr: {
      en: {
        "q.12.1-x1.labels": ["Shorter piece (cm)", "Longer piece (cm)"],
        "q.12.1-x1.kinds": ["the total number of parts p + q is 4 or 5", "the total number of parts p + q is 8", "the total number of parts p + q is 10"],
        "q.12.1-x1.ask": "A 2 m piece of string is cut into two pieces whose lengths are whole numbers of centimetres, a shorter one and a longer one. The ratio shorter : longer in its simplest form is p : q with q at most 9. Find the lengths of the two pieces.",
        "q.12.1-x1.why": "You must change 2 m to 200 cm before comparing, then divide by the HCF to get the simplest form — the two key steps of simplifying a ratio.",
        "q.12.1-x1.challengeText": "In the simplest form p : q, both p and q are greater than 1.",
        "q.12.1-x2.ask": "Example: 3 m : 60 cm = 300 cm : 60 cm = 5 : 1. If it is changed to 3 m : 6 dm, the ratio in its simplest form is ? : 1 — enter the missing number.",
        "q.12.1-x2.why": "Different units can hide two equal lengths — always change to the same unit before comparing.",
        "q.12.1-x2.reasons": [
          "6 dm = 60 cm, the same length as before, so the ratio is still 5 : 1.",
          "6 dm is ten times smaller than 60 cm, so the ratio becomes 50 : 1.",
          "Just look at the numbers: 3 : 6 = 0.5 : 1."
        ],
        "q.12.1-x3.ask": "A cake needs 2.4 kg of flour, 900 g of sugar and 1.5 kg of butter. Write the ratio flour : sugar : butter in its simplest form a : b : c and enter the number c. Do it in several ways.",
        "q.12.1-x3.why": "Ratios with mixed units or decimals are first changed to whole numbers in the same unit — a clever choice of unit makes simplifying quicker.",
        "q.12.1-x3.strategies": ["Change everything to grams, then divide by the HCF", "Change everything to kilograms, then multiply by 10", "Divide step by step (in grams)"],
        "q.12.1-x3.steps.s1": ["How many grams is 2.4 kg?", "What is the HCF of 2400, 900 and 1500?"],
        "q.12.1-x3.steps.s2": ["How many kilograms is 900 g?", "Multiplying all three by 10 gives 24 : 9 : 15. Divide all three by what number?"],
        "q.12.1-x3.steps.s3": ["Dividing all three numbers (in grams) by 100 gives 24 : 9 : ? — what is the third number?"],
        "q.12.2-x1.ask": "Make your own question: An and Binh share money in the ratio a : b (a, b whole numbers from 1 to 20, a < b). An gets D thousand dong less than Binh (D a whole number from 1 to 10 000). The question asks how many thousand dong they share altogether.",
        "q.12.2-x1.why": "The difference between the two shares is (b − a) equal parts — finding one part from the difference is sharing in a ratio worked backwards.",
        "q.12.2-x1.template": "Share in the ratio a : b, Binh gets D thousand more than An",
        "q.12.2-x1.fields": ["An's parts a", "Binh's parts b", "Difference D"],
        "q.12.2-x1.criteria": [
          "The total amount is a whole number of thousand dong",
          "The ratio a : b is not in its simplest form (simplify it first)",
          "The total amount is more than 10 times the difference D",
          "Binh gets at least 3 times as much as An",
          "One part is not a whole number but the total amount is"
        ],
        "q.12.2-x2.labels": ["First number of parts", "Second number of parts", "Third number of parts"],
        "q.12.2-x2.kinds": ["one person gets more than half", "one person gets exactly half", "nobody gets as much as half"],
        "q.12.2-x2.ask": "Share 360 thousand dong between three friends in a ratio a : b : c in its simplest form (a, b, c different positive whole numbers, none more than 10) so that each friend gets a whole number of thousand dong. Find such ratios.",
        "q.12.2-x2.why": "The amount must divide exactly by the total number of parts for each part to be a whole number — steps 1 and 2 of sharing in a ratio.",
        "q.12.2-x2.challengeText": "The friend who gets the most gets exactly half the money, and the friend who gets the least gets under 50 thousand dong.",
        "q.12.2-x3.ask": "Three siblings aged 12, 15 and 21 share 540 thousand dong of lucky money in the ratio of their ages. How many thousand dong does the youngest (aged 12) get? Solve it in several ways.",
        "q.12.2-x3.why": "Simplifying the ratio before sharing makes the numbers smaller but keeps the result — two methods giving the same answer is a good check.",
        "q.12.2-x3.strategies": ["Simplify the ratio of ages first", "Use the total of the ages straight away", "Use a fraction of the total"],
        "q.12.2-x3.steps.s1": ["12 : 15 : 21 simplifies to 4 : 5 : ? — what is the third number?", "How many thousand dong is one part worth?"],
        "q.12.2-x3.steps.s2": ["What is the total of the ages (the total number of parts)?"],
        "q.12.2-x3.steps.s3": ["The youngest's share is 12/48 = 1/? — what is the denominator?"],
        "q.12.3-x1.ask": "Pink paint is mixed in the ratio red : white = n : 3. For n = 1, 2, 3 the fraction of red paint in the mixture is 1/4, 2/5, 3/6. Find the fraction of red paint when n = 7, n = 12 and n = 27 (as a fraction or a decimal), and write the rule in terms of n.",
        "q.12.3-x1.why": "A ratio a : b means the fraction a/(a + b) of the whole mixture — changing ratios to fractions is how you compare how strong mixtures are.",
        "q.12.3-x2.ask": "Example: a box of 50 biscuits has coconut : ginger = 3 : 7, so there are 15 coconut biscuits and 35 ginger biscuits. If 10 more ginger biscuits are put in the box, the ratio coconut : ginger is 3 : ? — enter the missing number.",
        "q.12.3-x2.why": "Adding more of one kind changes the ratio — work out the real amount of each kind again before simplifying.",
        "q.12.3-x2.reasons": [
          "Coconut is still 15 and ginger becomes 45: 15 : 45 = 1 : 3 = 3 : 9.",
          "Adding biscuits does not change the ratio, so it is still 3 : 7.",
          "Adding 10 ginger biscuits means adding 10 to the second number: 3 : 17."
        ],
        "q.12.3-x3.ask": "A bag holds green and yellow seeds; 3/11 of the seeds are green. There are 66 green seeds. How many yellow seeds are in the bag? Solve it in several ways.",
        "q.12.3-x3.why": "If you know the fraction a/c of the whole, the rest is (c − a)/c and the ratio is a : (c − a) — you can go through the total or through the ratio.",
        "q.12.3-x3.strategies": ["Find the total number of seeds first", "Use the ratio green : yellow", "Find 1/11 of the seeds"],
        "q.12.3-x3.steps.s1": ["How many seeds are in the bag altogether?"],
        "q.12.3-x3.steps.s2": ["The ratio green : yellow is 3 : ? — what is the second number?", "How many seeds is one part?"],
        "q.12.3-x3.steps.s3": ["How many seeds is 1/11 of the seeds?"]
      },
      vi: {}
    }
  });
})();
