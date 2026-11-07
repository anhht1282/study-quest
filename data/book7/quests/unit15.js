// 🚀 Extension quests — Math 7, unit 15 (Shapes, area and volume). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const EPS = 1e-9;
  const near = function (a, b) { return Math.abs(a - b) < EPS; };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const round6 = function (x) { return Math.round(x * 1e6) / 1e6; };
  const isWhole = function (x) { return near(x, Math.round(x)); };
  // an answer rounded to 2+ decimal places is within half a hundredth of the exact value
  const ROUND2 = 0.005 + 1e-9;
  // 15.3-x1: base and height of a 24 cm² triangle; one of the two may be rounded
  const heightOk = function (b, h) { return b > 0 && h > 0 && Math.abs(h - 48 / b) <= ROUND2; };
  const dp = function (x) { const m = String(x).split(".")[1]; return m ? m.length : 0; };
  // keep the number the learner typed with fewer decimal places (the "exact" one) and recompute the rounded one
  const keepFirst = function (v) { return heightOk(v[0], v[1]) && (!heightOk(v[1], v[0]) || dp(v[0]) <= dp(v[1])); };
  // number for display: Unicode minus; decimal comma in Vietnamese
  const fmt = function (x, lang) {
    const s = String(round6(x)).replace("-", "−");
    return lang === "en" ? s : s.replace(".", ",");
  };
  const pos = function (x, hi) { return x > 0 && x <= hi; };
  const surface = function (f) { return 2 * (f.l * f.w + f.l * f.h + f.w * f.h); };

  window.GAME_QUESTS.push({
    unit: 15,
    sections: {
      "15.1": [
        {
          id: "15.1-x1", type: "whatif", base: 45000,
          ask: "Ví dụ: 4,5 m² = 45 000 cm². Nếu đổi 4,5 m² ra mm² thì được bao nhiêu?",
          why: "Với diện tích, hệ số đổi độ dài phải được bình phương lên — nắm chắc điều này để không nhầm với đổi độ dài.",
          answer: function () { return 4.5 * 1000 * 1000; },
          reasons: [
            "1 m = 1 000 mm nên 1 m² = 1 000 × 1 000 = 1 000 000 mm²; 4,5 × 1 000 000 = 4 500 000.",
            "mm nhỏ hơn cm 10 lần nên chỉ cần nhân 45 000 với 10: 450 000.",
            "1 m = 1 000 mm nên nhân 4,5 với 1 000: 4 500."
          ],
          reason: 0,
          sample: { guess: "4500000", reason: 0 }
        },
        {
          id: "15.1-x2", type: "many", arity: 2, ordered: true,
          labels: ["Chiều dài (cm)", "Chiều rộng (mm)"],
          ask: "Một hình chữ nhật có diện tích 6 cm². Chiều dài đo bằng cm, chiều rộng đo bằng mm (cả hai là số nguyên). Tìm các cặp số đo có thể.",
          why: "Hai cạnh đo bằng hai đơn vị khác nhau là bẫy quen thuộc: phải đổi về cùng đơn vị rồi mới tính diện tích.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] > 0 && v[1] > 0 && v[0] * v[1] === 60; },
          challenge: function (v) { return v[0] * 10 + v[1] === 50; },
          challengeText: "Hình chữ nhật đó có chu vi đúng 10 cm.",
          kinds: [
            { id: "swap", text: "“chiều dài” thật ra ngắn hơn chiều rộng", test: function (v) { return 10 * v[0] < v[1]; } },
            { id: "thin", text: "chiều rộng chưa tới 1 cm", test: function (v) { return v[1] < 10; } },
            { id: "usual", text: "chiều rộng từ 1 cm, ngắn hơn chiều dài", test: function () { return true; } }
          ],
          kindSamples: [["4", "15"], ["1", "60"], ["2", "30"], ["5", "12"], ["12", "5"]],
          sample: { values: ["4", "15"] }
        },
        {
          id: "15.1-x3", type: "make",
          ask: "Tự ra đề: hình chữ nhật có hai cạnh a mm và b mm (số nguyên từ 1 đến 2 000). Đề sẽ hỏi diện tích bằng cm².",
          why: "Chọn số đo bằng mm rồi đổi diện tích ra cm² giúp em thấy vì sao phải chia cho 100 chứ không phải 10.",
          template: "Hình chữ nhật a mm × b mm → ? cm²",
          fields: [{ id: "a", label: "Cạnh a (mm)" }, { id: "b", label: "Cạnh b (mm)" }],
          valid: function (f) { return inRange(f.a, 1, 2000) && inRange(f.b, 1, 2000); },
          solve: function (f) { return f.a * f.b / 100; },
          render: function (f, lang) {
            return lang === "en"
              ? "A rectangle measures " + fmt(f.a, lang) + " mm by " + fmt(f.b, lang) + " mm. Find its area in cm²."
              : "Hình chữ nhật có hai cạnh " + fmt(f.a, lang) + " mm và " + fmt(f.b, lang) + " mm. Tính diện tích bằng cm².";
          },
          criteria: [
            { id: "dec", text: "Đáp số là số thập phân", test: function (f) { return (f.a * f.b) % 100 !== 0; } },
            { id: "one", text: "Diện tích đúng 1 cm²", test: function (f) { return f.a * f.b === 100; } },
            { id: "big", text: "Diện tích lớn hơn 50 cm²", test: function (f) { return f.a * f.b > 5000; } },
            { id: "long", text: "Có một cạnh dài hơn 10 cm", test: function (f) { return f.a > 100 || f.b > 100; } },
            { id: "sq", text: "Hình chữ nhật là hình vuông", test: function (f) { return f.a === f.b; } }
          ],
          sample: { fields: { a: "120", b: "45" } }
        }
      ],
      "15.2": [
        {
          id: "15.2-x1", type: "many", arity: 2, ordered: false,
          labels: ["Chiều dài (m)", "Chiều rộng (m)"],
          ask: "Một mảnh đất hình chữ nhật có diện tích đúng 1 ha. Chiều dài và chiều rộng (số nguyên mét) có thể là bao nhiêu?",
          why: "1 ha không nhất thiết là hình vuông cạnh 100 m — mọi hình có diện tích 10 000 m² đều là 1 ha.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] > 0 && v[1] > 0 && v[0] * v[1] === 10000; },
          challenge: function (v) { return v[0] !== 100 && v[0] + v[1] < 210; },
          challengeText: "Không có cạnh nào dài 100 m nhưng chu vi vẫn nhỏ hơn 420 m.",
          kinds: [
            { id: "square", text: "hình vuông 100 m × 100 m", test: function (v) { return v[0] === 100 && v[1] === 100; } },
            { id: "tens", text: "hai cạnh đều tròn chục mét", test: function (v) { return v[0] % 10 === 0 && v[1] % 10 === 0; } },
            { id: "other", text: "có cạnh không tròn chục mét", test: function () { return true; } }
          ],
          kindSamples: [["50", "200"], ["100", "100"], ["10", "1000"], ["25", "400"], ["16", "625"]],
          sample: { values: ["50", "200"] }
        },
        {
          id: "15.2-x2", type: "ways",
          ask: "Một mảnh đất hình chữ nhật dài 2,5 km, rộng 600 m. Diện tích bao nhiêu ha? Giải theo nhiều cách.",
          why: "Đổi qua m², qua km² hay đếm ô vuông 1 ha đều đến cùng đáp số — mỗi cách kiểm tra cho cách kia.",
          strategies: [
            { id: "s1", name: "Tính bằng m² rồi chia 10 000", steps: [{ ask: "Diện tích bằng bao nhiêu m²?", answer: 1500000 }, { answer: 150 }] },
            { id: "s2", name: "Tính bằng km² rồi nhân 100 (1 km² = 100 ha)", steps: [{ ask: "0,6 km × 2,5 km = ? km²", answer: 1.5 }, { answer: 150 }] },
            { id: "s3", name: "Đếm số ô vuông cạnh 100 m (mỗi ô 1 ha)", steps: [
              { ask: "Cạnh 600 m chứa mấy đoạn 100 m?", answer: 6 },
              { ask: "Cạnh 2,5 km chứa mấy đoạn 100 m?", answer: 25 }, { answer: 150 }] }
          ],
          sample: { strategy: "s3", steps: ["6", "25", "150"] }
        },
        {
          id: "15.2-x3", type: "whatif", base: 1,
          ask: "Hình vuông cạnh 100 m có diện tích 1 ha. Nếu cạnh dài gấp đôi (200 m) thì diện tích là bao nhiêu ha?",
          why: "Cạnh gấp đôi mà diện tích gấp bốn — hiểu điều này giúp em ước lượng diện tích đất mà không cần tính chi tiết.",
          answer: function () { return 200 * 200 / 10000; },
          reasons: [
            "Cả hai chiều đều gấp đôi nên diện tích gấp 2 × 2 = 4 lần: 40 000 m² = 4 ha.",
            "Cạnh gấp đôi nên diện tích gấp đôi: 2 ha.",
            "Mỗi cạnh thêm 100 m nên diện tích thêm 1 ha: 2 ha."
          ],
          reason: 0,
          sample: { guess: "4", reason: 0 }
        }
      ],
      "15.3": [
        {
          id: "15.3-x1", type: "many", arity: 2, ordered: false,
          labels: ["Đáy (cm)", "Chiều cao (cm)"],
          ask: "Một tam giác có diện tích 24 cm². Đáy và chiều cao tương ứng có thể là bao nhiêu cm? (Có thể dùng số thập phân; không chia hết thì làm tròn đến ít nhất 2 chữ số sau dấu phẩy.)",
          why: "Biết diện tích và một số đo thì tìm được số đo kia bằng h = 2A ÷ b — kỹ năng em dùng khi giải bài ngược.",
          check: function (v) { return heightOk(v[0], v[1]) || heightOk(v[1], v[0]); },
          canon: function (v) { return keepFirst(v) ? [v[0], 48 / v[0]] : [48 / v[1], v[1]]; },
          challenge: function (v) { return !isWhole(v[0]) && !isWhole(v[1]); },
          challengeText: "Cả đáy và chiều cao đều không phải số nguyên.",
          kinds: [
            { id: "whole", text: "cả hai là số nguyên", test: function (v) { return isWhole(v[0]) && isWhole(v[1]); } },
            { id: "one", text: "một số nguyên, một số thập phân", test: function (v) { return isWhole(v[0]) || isWhole(v[1]); } },
            { id: "dec", text: "cả hai không phải số nguyên", test: function () { return true; } }
          ],
          kindSamples: [["6", "8"], ["4", "12"], ["5", "9.6"], ["1.5", "32"], ["2.5", "19.2"]],
          sample: { values: ["6", "8"] }
        },
        {
          id: "15.3-x2", type: "ways",
          ask: "Hình “ngôi nhà”: một hình chữ nhật rộng 10 cm, cao 6 cm, phía trên đặt một tam giác có đáy là cạnh 10 cm, chiều cao 4 cm, đỉnh nằm ngay giữa. Tính diện tích cả hình. Giải theo nhiều cách.",
          why: "Hình ghép có thể chia nhỏ ra để cộng, hoặc bao lại bằng một hình chữ nhật rồi trừ phần thừa.",
          strategies: [
            { id: "s1", name: "Chia thành hình chữ nhật và tam giác rồi cộng", steps: [
              { ask: "Diện tích hình chữ nhật?", answer: 60 },
              { ask: "Diện tích tam giác?", answer: 20 }, { answer: 80 }] },
            { id: "s2", name: "Bao bằng hình chữ nhật 10 cm × 10 cm rồi trừ phần thừa", steps: [
              { ask: "Diện tích hình chữ nhật bao quanh?", answer: 100 },
              { ask: "Hai tam giác vuông thừa ở hai góc trên (mỗi tam giác có hai cạnh góc vuông 5 cm và 4 cm) có tổng diện tích?", answer: 20 }, { answer: 80 }] }
          ],
          sample: { strategy: "s1", steps: ["60", "20", "80"] }
        },
        {
          id: "15.3-x3", type: "make",
          ask: "Tự ra đề: tam giác có đáy b cm và chiều cao h cm (lớn hơn 0, không quá 100, có thể là số thập phân). Đề sẽ hỏi diện tích.",
          why: "Tự chọn đáy và chiều cao giúp em thấy chữ “½” làm đáp số thay đổi thế nào, kể cả khi ra số thập phân.",
          template: "Tam giác: đáy b, chiều cao h",
          fields: [{ id: "b", label: "Đáy b (cm)" }, { id: "h", label: "Chiều cao h (cm)" }],
          valid: function (f) { return pos(f.b, 100) && pos(f.h, 100); },
          solve: function (f) { return round6(f.b * f.h / 2); },
          render: function (f, lang) {
            return lang === "en"
              ? "A triangle has base " + fmt(f.b, lang) + " cm and perpendicular height " + fmt(f.h, lang) + " cm. Find its area in cm²."
              : "Tam giác có đáy " + fmt(f.b, lang) + " cm và chiều cao " + fmt(f.h, lang) + " cm. Tính diện tích (cm²).";
          },
          criteria: [
            { id: "dec", text: "Diện tích không phải số nguyên", test: function (f) { return !isWhole(f.b * f.h / 2); } },
            { id: "tall", text: "Chiều cao lớn hơn đáy", test: function (f) { return f.h > f.b; } },
            { id: "big", text: "Diện tích lớn hơn 100 cm²", test: function (f) { return f.b * f.h / 2 > 100; } },
            { id: "decb", text: "Đáy là số thập phân", test: function (f) { return !isInt(f.b); } },
            { id: "a18", text: "Diện tích đúng 18 cm²", test: function (f) { return near(f.b * f.h / 2, 18); } }
          ],
          sample: { fields: { b: "4.5", h: "8" } }
        }
      ],
      "15.4": [
        {
          id: "15.4-x1", type: "many", arity: 3, ordered: false,
          labels: ["Dài (cm)", "Rộng (cm)", "Cao (cm)"],
          ask: "Một hình hộp chữ nhật có thể tích 36 cm³, các kích thước là số nguyên cm. Tìm các bộ ba kích thước có thể.",
          why: "Nhiều hình hộp khác nhau có cùng thể tích — như các cách xếp 36 khối lập phương nhỏ thành một khối.",
          check: function (v) { return v.every(function (x) { return isInt(x) && x > 0; }) && v[0] * v[1] * v[2] === 36; },
          challenge: function (v) { return v[0] + v[1] + v[2] === 10; },
          challengeText: "Tổng ba kích thước chỉ bằng 10 cm (hình hộp “gần lập phương” nhất).",
          kinds: [
            { id: "twin", text: "có hai kích thước bằng nhau", test: function (v) { return v[0] === v[1] || v[1] === v[2]; } },
            { id: "one", text: "có một kích thước 1 cm", test: function (v) { return v[0] === 1; } },
            { id: "diff", text: "ba kích thước khác nhau, đều lớn hơn 1 cm", test: function () { return true; } }
          ],
          kindSamples: [["2", "3", "6"], ["2", "2", "9"], ["3", "3", "4"], ["1", "2", "18"], ["1", "3", "12"]],
          sample: { values: ["2", "3", "6"] }
        },
        {
          id: "15.4-x2", type: "whatif", base: 378,
          ask: "Ví dụ: hộp 12 cm × 9 cm × 3,5 cm có thể tích 378 cm³. Nếu cả ba kích thước đều gấp đôi thì thể tích là bao nhiêu cm³?",
          why: "Thể tích tăng theo lập phương của hệ số — vì sao hộp to gấp đôi lại chứa được nhiều hơn hẳn.",
          answer: function () { return 24 * 18 * 7; },
          reasons: [
            "Mỗi kích thước nhân 2 nên thể tích nhân 2 × 2 × 2 = 8: 378 × 8 = 3 024.",
            "Các kích thước gấp đôi nên thể tích gấp đôi: 756.",
            "Ba kích thước, mỗi cái gấp 2, nên thể tích gấp 2 + 2 + 2 = 6 lần: 2 268."
          ],
          reason: 0,
          sample: { guess: "3024", reason: 0 }
        },
        {
          id: "15.4-x3", type: "pattern",
          ask: "Các khối lập phương cạnh 1 cm, 2 cm, 3 cm, … có thể tích 1, 8, 27, … cm³. Tìm thể tích khối lập phương cạnh 5 cm, 10 cm, 12 cm và quy luật theo n (cạnh n cm).",
          why: "Khối lập phương cạnh 10 cm có thể tích 1 000 cm³ (1 lít) — cũng là lý do 1 cm³ = 1 000 mm³.",
          seq: [1, 8, 27],
          term: function (n) { return n * n * n; },
          askN: [5, 10, 12],
          sample: { terms: { 5: "125", 10: "1000", 12: "1728" }, rule: "n^3" }
        }
      ],
      "15.5": [
        {
          id: "15.5-x1", type: "many", arity: 3, ordered: false,
          labels: ["Dài (cm)", "Rộng (cm)", "Cao (cm)"],
          ask: "Một hình hộp chữ nhật có diện tích bề mặt 94 cm², các kích thước là số nguyên cm. Tìm các bộ ba kích thước có thể.",
          why: "Tìm ngược kích thước từ diện tích bề mặt buộc em hiểu rõ 3 cặp mặt của hình hộp, không chỉ thuộc công thức.",
          check: function (v) {
            return v.every(function (x) { return isInt(x) && x > 0; }) && 2 * (v[0] * v[1] + v[0] * v[2] + v[1] * v[2]) === 94;
          },
          challenge: function (v) { return v[0] * v[1] * v[2] > 50; },
          challengeText: "Hình hộp đó có thể tích lớn hơn 50 cm³.",
          sample: { values: ["1", "5", "7"] }
        },
        {
          id: "15.5-x2", type: "ways",
          ask: "Một hộp không nắp dài 10 cm, rộng 6 cm, cao 4 cm (mặt không có là mặt trên 10 cm × 6 cm). Tính diện tích bề mặt của hộp. Giải theo nhiều cách.",
          why: "Bớt một mặt, cộng từng mặt, hay trải bốn mặt bên thành một dải là ba cách nhìn hình khai triển của hộp.",
          strategies: [
            { id: "s1", name: "Tính cả hộp có nắp rồi bớt mặt nắp", steps: [{ ask: "Diện tích bề mặt của hộp có nắp?", answer: 248 }, { answer: 188 }] },
            { id: "s2", name: "Cộng mặt đáy với bốn mặt bên", steps: [
              { ask: "Diện tích mặt đáy?", answer: 60 },
              { ask: "Tổng diện tích bốn mặt bên?", answer: 128 }, { answer: 188 }] },
            { id: "s3", name: "Trải bốn mặt bên thành một dải hình chữ nhật", steps: [
              { ask: "Dải đó dài bằng chu vi đáy. Chu vi đáy là bao nhiêu cm?", answer: 32 },
              { ask: "Diện tích dải (dài × cao 4 cm)?", answer: 128 }, { answer: 188 }] }
          ],
          sample: { strategy: "s1", steps: ["248", "188"] }
        },
        {
          id: "15.5-x3", type: "make",
          ask: "Tự ra đề: hình hộp chữ nhật dài l, rộng w, cao h (cm, lớn hơn 0, không quá 100). Đề sẽ hỏi diện tích bề mặt.",
          why: "Tự thiết kế hộp giúp em so sánh diện tích bề mặt với thể tích — hai đại lượng rất hay bị nhầm.",
          template: "Hình hộp l × w × h",
          fields: [{ id: "l", label: "Dài l (cm)" }, { id: "w", label: "Rộng w (cm)" }, { id: "h", label: "Cao h (cm)" }],
          valid: function (f) { return pos(f.l, 100) && pos(f.w, 100) && pos(f.h, 100); },
          solve: function (f) { return round6(surface(f)); },
          render: function (f, lang) {
            return lang === "en"
              ? "A cuboid measures " + fmt(f.l, lang) + " cm by " + fmt(f.w, lang) + " cm by " + fmt(f.h, lang) + " cm. Find its surface area in cm²."
              : "Hình hộp chữ nhật dài " + fmt(f.l, lang) + " cm, rộng " + fmt(f.w, lang) + " cm, cao " + fmt(f.h, lang) + " cm. Tính diện tích bề mặt (cm²).";
          },
          criteria: [
            { id: "cube", text: "Hình hộp là hình lập phương", test: function (f) { return f.l === f.w && f.w === f.h; } },
            { id: "big", text: "Diện tích bề mặt lớn hơn 500 cm²", test: function (f) { return surface(f) > 500; } },
            { id: "dec", text: "Có một kích thước là số thập phân", test: function (f) { return !isInt(f.l) || !isInt(f.w) || !isInt(f.h); } },
            { id: "thin", text: "Có một kích thước đúng 1 cm (hộp rất mỏng)", test: function (f) { return f.l === 1 || f.w === 1 || f.h === 1; } },
            { id: "sv", text: "Số đo diện tích bề mặt (cm²) bằng số đo thể tích (cm³)", test: function (f) { return near(surface(f), f.l * f.w * f.h); } }
          ],
          sample: { fields: { l: "6", w: "6", h: "6" } }
        }
      ]
    },
    tr: {
      en: {
        "q.15.1-x1.ask": "Example: 4.5 m² = 45 000 cm². If you convert 4.5 m² to mm², what do you get?",
        "q.15.1-x1.why": "For area, the length conversion factor is squared — know this well so you do not confuse it with converting lengths.",
        "q.15.1-x1.reasons": [
          "1 m = 1 000 mm, so 1 m² = 1 000 × 1 000 = 1 000 000 mm²; 4.5 × 1 000 000 = 4 500 000.",
          "A mm is 10 times smaller than a cm, so just multiply 45 000 by 10: 450 000.",
          "1 m = 1 000 mm, so multiply 4.5 by 1 000: 4 500."
        ],
        "q.15.1-x2.labels": ["Length (cm)", "Width (mm)"],
        "q.15.1-x2.ask": "A rectangle has area 6 cm². Its length is measured in cm and its width in mm (both whole numbers). Find possible pairs of measurements.",
        "q.15.1-x2.why": "Two sides in two different units is a familiar trap: change to the same unit before working out the area.",
        "q.15.1-x2.challengeText": "The rectangle has a perimeter of exactly 10 cm.",
        "q.15.1-x2.kinds": ["the “length” is actually shorter than the width", "the width is less than 1 cm", "the width is at least 1 cm and shorter than the length"],
        "q.15.1-x3.ask": "Make a problem: a rectangle with sides a mm and b mm (whole numbers from 1 to 2 000). The problem will ask for the area in cm².",
        "q.15.1-x3.why": "Choosing lengths in mm and converting the area to cm² shows why you divide by 100, not by 10.",
        "q.15.1-x3.template": "Rectangle a mm × b mm → ? cm²",
        "q.15.1-x3.fields": ["Side a (mm)", "Side b (mm)"],
        "q.15.1-x3.criteria": [
          "The answer is a decimal", "The area is exactly 1 cm²", "The area is greater than 50 cm²",
          "One side is longer than 10 cm", "The rectangle is a square"
        ],
        "q.15.2-x1.labels": ["Length (m)", "Width (m)"],
        "q.15.2-x1.ask": "A rectangular field has an area of exactly 1 ha. What could its length and width be (whole numbers of metres)?",
        "q.15.2-x1.why": "1 ha does not have to be a square with side 100 m — any shape with an area of 10 000 m² is 1 ha.",
        "q.15.2-x1.challengeText": "No side is 100 m long, but the perimeter is still less than 420 m.",
        "q.15.2-x1.kinds": ["a 100 m × 100 m square", "both sides are whole tens of metres", "a side that is not a whole number of tens of metres"],
        "q.15.2-x2.ask": "A rectangular field is 2.5 km long and 600 m wide. What is its area in hectares? Solve it in several ways.",
        "q.15.2-x2.why": "Going through m², through km², or counting 1 ha squares all reach the same answer — each way checks the others.",
        "q.15.2-x2.strategies": ["Work in m², then divide by 10 000", "Work in km², then multiply by 100 (1 km² = 100 ha)", "Count the squares with side 100 m (each is 1 ha)"],
        "q.15.2-x2.steps.s1": ["What is the area in m²?"],
        "q.15.2-x2.steps.s2": ["0.6 km × 2.5 km = ? km²"],
        "q.15.2-x2.steps.s3": ["How many 100 m lengths fit along the 600 m side?", "How many 100 m lengths fit along the 2.5 km side?"],
        "q.15.2-x3.ask": "A square with side 100 m has an area of 1 ha. If the side is twice as long (200 m), what is the area in hectares?",
        "q.15.2-x3.why": "Double the side gives four times the area — knowing this helps you estimate land areas without detailed working.",
        "q.15.2-x3.reasons": [
          "Both directions double, so the area is multiplied by 2 × 2 = 4: 40 000 m² = 4 ha.",
          "The side doubles, so the area doubles: 2 ha.",
          "Each side gets 100 m longer, so the area gets 1 ha bigger: 2 ha."
        ],
        "q.15.3-x1.labels": ["Base (cm)", "Height (cm)"],
        "q.15.3-x1.ask": "A triangle has area 24 cm². What could its base and matching perpendicular height be, in cm? (You may use decimals; if it does not divide exactly, round to at least 2 decimal places.)",
        "q.15.3-x1.why": "If you know the area and one measurement, you find the other with h = 2A ÷ b — a skill you use for inverse problems.",
        "q.15.3-x1.challengeText": "Neither the base nor the height is a whole number.",
        "q.15.3-x1.kinds": ["both are whole numbers", "one whole number and one decimal", "neither is a whole number"],
        "q.15.3-x2.ask": "A “house” shape: a rectangle 10 cm wide and 6 cm tall with a triangle on top whose base is the 10 cm side, height 4 cm, and apex exactly in the middle. Find the area of the whole shape. Solve it in several ways.",
        "q.15.3-x2.why": "A compound shape can be split into parts to add, or surrounded by a rectangle and the extra parts subtracted.",
        "q.15.3-x2.strategies": ["Split into a rectangle and a triangle, then add", "Surround it with a 10 cm × 10 cm rectangle, then subtract the extra"],
        "q.15.3-x2.steps.s1": ["Area of the rectangle?", "Area of the triangle?"],
        "q.15.3-x2.steps.s2": ["Area of the surrounding rectangle?", "Total area of the two extra right-angled triangles in the top corners (each has short sides 5 cm and 4 cm)?"],
        "q.15.3-x3.ask": "Make a problem: a triangle with base b cm and perpendicular height h cm (greater than 0, at most 100, decimals allowed). The problem will ask for the area.",
        "q.15.3-x3.why": "Choosing the base and height yourself shows how the “½” changes the answer, even when it becomes a decimal.",
        "q.15.3-x3.template": "Triangle: base b, height h",
        "q.15.3-x3.fields": ["Base b (cm)", "Height h (cm)"],
        "q.15.3-x3.criteria": [
          "The area is not a whole number", "The height is greater than the base", "The area is greater than 100 cm²",
          "The base is a decimal", "The area is exactly 18 cm²"
        ],
        "q.15.4-x1.labels": ["Length (cm)", "Width (cm)", "Height (cm)"],
        "q.15.4-x1.ask": "A cuboid has volume 36 cm³ and its measurements are whole numbers of cm. Find possible sets of three measurements.",
        "q.15.4-x1.why": "Many different cuboids have the same volume — like the ways of stacking 36 small cubes into one block.",
        "q.15.4-x1.challengeText": "The three measurements add up to only 10 cm (the cuboid that is “closest” to a cube).",
        "q.15.4-x1.kinds": ["two of the dimensions are equal", "one dimension is 1 cm", "three different dimensions, all greater than 1 cm"],
        "q.15.4-x2.ask": "Example: a 12 cm × 9 cm × 3.5 cm box has volume 378 cm³. If all three measurements are doubled, what is the volume in cm³?",
        "q.15.4-x2.why": "Volume grows with the cube of the factor — which is why a box twice as big holds far more.",
        "q.15.4-x2.reasons": [
          "Each measurement is multiplied by 2, so the volume is multiplied by 2 × 2 × 2 = 8: 378 × 8 = 3 024.",
          "The measurements double, so the volume doubles: 756.",
          "Three measurements, each multiplied by 2, so the volume is 2 + 2 + 2 = 6 times bigger: 2 268."
        ],
        "q.15.4-x3.ask": "Cubes with edges 1 cm, 2 cm, 3 cm, … have volumes 1, 8, 27, … cm³. Find the volume of the cube with edge 5 cm, 10 cm and 12 cm, and the rule in terms of n (edge n cm).",
        "q.15.4-x3.why": "A cube with edge 10 cm has a volume of 1 000 cm³ (1 litre) — the same reason that 1 cm³ = 1 000 mm³.",
        "q.15.5-x1.labels": ["Length (cm)", "Width (cm)", "Height (cm)"],
        "q.15.5-x1.ask": "A cuboid has surface area 94 cm² and its measurements are whole numbers of cm. Find possible sets of three measurements.",
        "q.15.5-x1.why": "Working back from the surface area to the measurements makes you really understand the 3 pairs of faces of a cuboid, not just the formula.",
        "q.15.5-x1.challengeText": "The cuboid has a volume greater than 50 cm³.",
        "q.15.5-x2.ask": "An open box (no lid) is 10 cm long, 6 cm wide and 4 cm high (the missing face is the 10 cm × 6 cm top). Find the surface area of the box. Solve it in several ways.",
        "q.15.5-x2.why": "Taking one face away, adding face by face, or unrolling the four side faces into one strip are three ways of seeing the net of a box.",
        "q.15.5-x2.strategies": ["Work out the closed box, then take away the lid", "Add the base and the four side faces", "Unroll the four side faces into one rectangular strip"],
        "q.15.5-x2.steps.s1": ["Surface area of the box with a lid?"],
        "q.15.5-x2.steps.s2": ["Area of the base?", "Total area of the four side faces?"],
        "q.15.5-x2.steps.s3": ["The strip is as long as the perimeter of the base. What is the perimeter of the base in cm?", "Area of the strip (length × height 4 cm)?"],
        "q.15.5-x3.ask": "Make a problem: a cuboid with length l, width w and height h (cm, greater than 0, at most 100). The problem will ask for the surface area.",
        "q.15.5-x3.why": "Designing a box yourself lets you compare surface area with volume — two quantities that are often mixed up.",
        "q.15.5-x3.template": "Cuboid l × w × h",
        "q.15.5-x3.fields": ["Length l (cm)", "Width w (cm)", "Height h (cm)"],
        "q.15.5-x3.criteria": [
          "The cuboid is a cube", "The surface area is greater than 500 cm²", "One measurement is a decimal",
          "One measurement is exactly 1 cm (a very thin box)", "The surface area (cm²) has the same value as the volume (cm³)"
        ]
      },
      vi: {}
    }
  });
})();
