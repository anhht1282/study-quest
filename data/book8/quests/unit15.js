// 🚀 Extension quests — Math 8, unit 15 (Distance, area and volume). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const EPS = 1e-6;
  const near = function (a, b) { return Math.abs(a - b) < EPS; };
  const posInt = function (x) { return isInt(x) && x > 0; };
  // an answer rounded to 2+ decimal places is within half a hundredth of the exact value
  const ROUND2 = 0.005 + 1e-9;
  // 15.4-x1: slant height of a square pyramid with base s and total surface area 180
  const slant = function (s) { return (180 - s * s) / (2 * s); };
  const round6 = function (x) { return Math.round(x * 1e6) / 1e6; };
  // number for display: Unicode minus; decimal comma in Vietnamese
  const fmt = function (x, lang) {
    const s = String(round6(x)).replace("-", "−");
    return lang === "en" ? s : s.replace(".", ",");
  };
  const prismV = function (f) { return f.b * f.h * f.l / 2; };

  window.GAME_QUESTS.push({
    unit: 15,
    sections: {
      "15.1": [
        {
          id: "15.1-x1", type: "many", arity: 1,
          labels: ["Quãng đường (dặm)"],
          ask: "Dùng quy ước 5 dặm ≈ 8 km. Tìm các quãng đường là số nguyên dặm mà khi đổi ra km được một số nguyên ki-lô-mét từ 100 đến 200.",
          why: "Số dặm chia hết cho 5 thì đổi ra km rất gọn (mỗi 5 dặm là 8 km) — chọn số “đẹp” giúp em tính nhẩm nhanh.",
          check: function (v) { return posInt(v[0]) && v[0] % 5 === 0 && v[0] * 8 / 5 >= 100 && v[0] * 8 / 5 <= 200; },
          challenge: function (v) { const k = v[0] * 8 / 5; return isInt(Math.sqrt(k)); },
          challengeText: "Số ki-lô-mét là một số chính phương.",
          kinds: [
            { id: "x25", text: "số dặm là bội của 25 (số km là bội của 40)", test: function (v) { return v[0] % 25 === 0; } },
            { id: "even", text: "số dặm chẵn", test: function (v) { return v[0] % 2 === 0; } },
            { id: "odd", text: "số dặm lẻ", test: function () { return true; } }
          ],
          kindSamples: [["75"], ["100"], ["70"], ["80"], ["65"]],
          sample: { values: ["75"] }
        },
        {
          id: "15.1-x2", type: "whatif", base: 80,
          ask: "Ví dụ: 50 dặm ≈ 80 km (dùng 5 dặm ≈ 8 km). Nếu đổi ngược lại, 50 km thì bằng khoảng bao nhiêu dặm?",
          why: "Một dặm dài hơn một km, nên đổi km sang dặm thì con số phải nhỏ đi — tự hỏi điều này giúp em không nhân nhầm chiều.",
          answer: function () { return 50 * 5 / 8; },
          reasons: [
            "Dặm dài hơn km nên số dặm nhỏ hơn số km: 50 ÷ 8 × 5 = 31,25 dặm.",
            "Vẫn nhân với 1,6 như lần trước: 50 × 1,6 = 80 dặm.",
            "80 km lớn hơn 50 dặm là 30, nên 50 km ≈ 50 − 30 = 20 dặm."
          ],
          reason: 0,
          sample: { guess: "31.25", reason: 0 }
        },
        {
          id: "15.1-x3", type: "ways",
          ask: "Một ô tô chạy với tốc độ 45 dặm/giờ trong 2 giờ. Ô tô đi được khoảng bao nhiêu km (dùng 5 dặm ≈ 8 km, tức 1 dặm ≈ 1,6 km)? Giải theo nhiều cách.",
          why: "Đổi đơn vị ở đầu hay ở cuối bài đều được — chọn chỗ đổi có số dễ tính giúp em ít sai hơn.",
          strategies: [
            { id: "s1", name: "Đổi tốc độ ra km/giờ trước", steps: [
              { ask: "45 dặm/giờ bằng bao nhiêu km/giờ?", answer: 72 }, { answer: 144 }] },
            { id: "s2", name: "Tính quãng đường bằng dặm rồi nhân 1,6", steps: [
              { ask: "Trong 2 giờ ô tô đi bao nhiêu dặm?", answer: 90 }, { answer: 144 }] },
            { id: "s3", name: "Tính quãng đường bằng dặm rồi đếm nhóm 5 dặm", steps: [
              { ask: "Trong 2 giờ ô tô đi bao nhiêu dặm?", answer: 90 },
              { ask: "Quãng đường đó gồm bao nhiêu nhóm 5 dặm?", answer: 18 }, { answer: 144 }] }
          ],
          sample: { strategy: "s1", steps: ["72", "144"] }
        }
      ],
      "15.2": [
        {
          id: "15.2-x1", type: "many", arity: 3, ordered: true,
          labels: ["Đáy nhỏ a (cm)", "Đáy lớn b (cm)", "Chiều cao h (cm)"],
          ask: "Một hình thang có diện tích 48 cm². Hai đáy a < b và chiều cao h đều là số nguyên cm. Tìm các bộ (a, b, h) có thể.",
          why: "Từ công thức ½ × (a + b) × h, diện tích 48 cm² nghĩa là (a + b) × h = 96 — làm ngược công thức là kỹ năng chính của chặng này.",
          check: function (v) { return posInt(v[0]) && posInt(v[1]) && posInt(v[2]) && v[0] < v[1] && (v[0] + v[1]) * v[2] === 96; },
          challenge: function (v) { return v[2] === v[1]; },
          challengeText: "Chiều cao bằng đúng đáy lớn.",
          kinds: [
            { id: "tall", text: "chiều cao lớn hơn cả hai đáy", test: function (v) { return v[2] > v[1]; } },
            { id: "flat", text: "chiều cao nhỏ hơn cả hai đáy", test: function (v) { return v[2] < v[0]; } },
            { id: "mid", text: "chiều cao nằm giữa hai đáy (hoặc bằng một đáy)", test: function () { return true; } }
          ],
          kindSamples: [["1", "2", "32"], ["1", "3", "24"], ["20", "28", "2"], ["40", "56", "1"], ["4", "12", "6"]],
          sample: { values: ["5", "7", "8"] }
        },
        {
          id: "15.2-x2", type: "pattern",
          ask: "Hình thang thứ n có hai đáy dài n cm và 3n cm, chiều cao n cm. Diện tích của hình thang thứ 1, 2, 3 là 2, 8, 18 cm², … Tìm diện tích hình thang thứ 5, thứ 10, thứ 12 và quy luật theo n.",
          why: "Mọi độ dài gấp n lần thì diện tích gấp n² lần — điều này lặp lại ở chặng sau với diện tích toàn phần và thể tích.",
          seq: [2, 8, 18],
          term: function (n) { return 2 * n * n; },
          askN: [5, 10, 12],
          sample: { terms: { 5: "50", 10: "200", 12: "288" }, rule: "2n^2" }
        },
        {
          id: "15.2-x3", type: "whatif", base: 28,
          ask: "Ví dụ: hình bình hành có đáy 7 cm, cạnh bên nghiêng 5 cm, chiều cao vuông góc 4 cm, diện tích 28 cm². Nếu đẩy cho hình nghiêng hơn, cạnh bên dài 6 cm nhưng đáy và chiều cao vuông góc giữ nguyên, thì diện tích là bao nhiêu cm²?",
          why: "Diện tích chỉ phụ thuộc đáy và chiều cao vuông góc — nhầm cạnh nghiêng với chiều cao là lỗi rất hay gặp.",
          answer: function () { return 7 * 4; },
          reasons: [
            "Cắt một tam giác ghép sang bên kia vẫn được hình chữ nhật 7 × 4, nên diện tích vẫn là 28 cm².",
            "Lấy đáy nhân cạnh bên: 7 × 6 = 42 cm².",
            "Cạnh bên dài thêm 1 cm nên diện tích tăng thêm 7 cm²: 35 cm²."
          ],
          reason: 0,
          sample: { guess: "28", reason: 0 }
        }
      ],
      "15.3": [
        {
          id: "15.3-x1", type: "many", arity: 3, ordered: true,
          labels: ["Đáy tam giác b (cm)", "Chiều cao tam giác h (cm)", "Chiều dài lăng trụ l (cm)"],
          ask: "Một lăng trụ tam giác có thể tích 120 cm³. Mặt cắt là tam giác có đáy b và chiều cao h; lăng trụ dài l (b, h, l là số nguyên cm). Tìm các bộ (b, h, l) có thể.",
          why: "Thể tích = ½ × b × h × l, nên 120 cm³ nghĩa là b × h × l = 240 — đừng quên nửa diện tích của tam giác.",
          check: function (v) { return posInt(v[0]) && posInt(v[1]) && posInt(v[2]) && v[0] * v[1] * v[2] === 240; },
          challenge: function (v) { return v[0] > 4 && v[1] > 4 && v[2] > 4; },
          challengeText: "Cả ba kích thước đều lớn hơn 4 cm.",
          kinds: [
            { id: "one", text: "có một kích thước bằng 1 cm", test: function (v) { return v.indexOf(1) !== -1; } },
            { id: "twin", text: "có hai kích thước bằng nhau", test: function (v) { return v[0] === v[1] || v[1] === v[2] || v[0] === v[2]; } },
            { id: "diff", text: "ba kích thước khác nhau", test: function () { return true; } }
          ],
          kindSamples: [["1", "10", "24"], ["2", "1", "120"], ["2", "2", "60"], ["4", "4", "15"], ["6", "4", "10"]],
          sample: { values: ["6", "4", "10"] }
        },
        {
          id: "15.3-x2", type: "ways",
          ask: "Một lăng trụ tam giác có mặt cắt là tam giác đáy 4 cm, chiều cao 25 mm; lăng trụ dài 0,3 m. Tính thể tích theo cm³. Giải theo nhiều cách.",
          why: "Đổi mọi kích thước về cùng một đơn vị trước khi nhân — và biết 1 cm³ = 1 000 mm³ giúp em đổi kết quả cuối.",
          strategies: [
            { id: "s1", name: "Đổi mọi kích thước ra cm trước", steps: [
              { ask: "25 mm bằng bao nhiêu cm?", answer: 2.5 },
              { ask: "0,3 m bằng bao nhiêu cm?", answer: 30 }, { answer: 150 }] },
            { id: "s2", name: "Tính bằng mm rồi đổi ra cm³", steps: [
              { ask: "Diện tích mặt cắt bằng bao nhiêu mm²?", answer: 500 },
              { ask: "Thể tích bằng bao nhiêu mm³?", answer: 150000 }, { answer: 150 }] },
            { id: "s3", name: "Tính hình hộp chữ nhật bao quanh rồi lấy một nửa", steps: [
              { ask: "Hình hộp 4 cm × 2,5 cm × 30 cm có thể tích bao nhiêu cm³?", answer: 300 }, { answer: 150 }] }
          ],
          sample: { strategy: "s1", steps: ["2.5", "30", "150"] }
        },
        {
          id: "15.3-x3", type: "make",
          ask: "Tự ra đề: lăng trụ có mặt cắt là tam giác đáy b cm, chiều cao h cm, lăng trụ dài l cm (b, h, l lớn hơn 0, không quá 100, có thể là số thập phân). Đề sẽ hỏi thể tích (cm³).",
          why: "Tự chọn kích thước giúp em thấy cùng một thể tích có thể đến từ những lăng trụ rất khác dáng.",
          template: "Tam giác b × h, lăng trụ dài l",
          fields: [{ id: "b", label: "Đáy tam giác b (cm)" }, { id: "h", label: "Chiều cao tam giác h (cm)" }, { id: "l", label: "Chiều dài lăng trụ l (cm)" }],
          valid: function (f) { return [f.b, f.h, f.l].every(function (x) { return x > 0 && x <= 100; }); },
          solve: function (f) { return round6(prismV(f)); },
          render: function (f, lang) {
            return lang === "en"
              ? "A triangular prism is " + fmt(f.l, lang) + " cm long. Its cross-section is a triangle with base " + fmt(f.b, lang) + " cm and perpendicular height " + fmt(f.h, lang) + " cm. Work out its volume in cm³."
              : "Một lăng trụ tam giác dài " + fmt(f.l, lang) + " cm, mặt cắt là tam giác có đáy " + fmt(f.b, lang) + " cm và chiều cao " + fmt(f.h, lang) + " cm. Tính thể tích (cm³).";
          },
          criteria: [
            { id: "litre", text: "Thể tích đúng 1 lít (1 000 cm³)", test: function (f) { return near(prismV(f), 1000); } },
            { id: "dec", text: "Có ít nhất một kích thước là số thập phân", test: function (f) { return !isInt(f.b) || !isInt(f.h) || !isInt(f.l); } },
            { id: "squat", text: "Lăng trụ ngắn hơn cả đáy và chiều cao của tam giác", test: function (f) { return f.l < f.b && f.l < f.h; } },
            { id: "odd", text: "Đáy và chiều cao tam giác đều là số lẻ", test: function (f) { return isInt(f.b) && isInt(f.h) && f.b % 2 === 1 && f.h % 2 === 1; } },
            { id: "tiny", text: "Thể tích nhỏ hơn 10 cm³", test: function (f) { return prismV(f) < 10; } }
          ],
          sample: { fields: { b: "25", h: "20", l: "4" } }
        }
      ],
      "15.4": [
        {
          id: "15.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Cạnh đáy s (cm)", "Đường cao mặt bên t (cm)"],
          ask: "Một hình chóp đáy vuông có diện tích toàn phần 180 cm². Cạnh đáy s là số nguyên cm, đường cao mặt bên t có thể là số thập phân (làm tròn đến ít nhất 2 chữ số sau dấu phẩy nếu không chia hết). Tìm các cặp (s, t) có thể.",
          why: "Diện tích toàn phần = đáy + 4 mặt bên = s² + 2 × s × t — viết được công thức này là làm ngược được mọi bài.",
          // the slant height must exceed half the base side, otherwise the apex would be below the base
          check: function (v) { return posInt(v[0]) && slant(v[0]) > v[0] / 2 && Math.abs(v[1] - slant(v[0])) <= ROUND2; },
          canon: function (v) { return [v[0], slant(v[0])]; },
          challenge: function (v) { return v[1] < 2 * v[0]; },
          challengeText: "Mái chóp thấp: đường cao mặt bên t nhỏ hơn 2 lần cạnh đáy s.",
          kinds: [
            { id: "int", text: "t là số nguyên", test: function (v) { return isInt(v[1]); } },
            { id: "half", text: "t có phần thập phân là 0,5", test: function (v) { return isInt(2 * v[1]); } },
            { id: "other", text: "t có phần thập phân khác", test: function () { return true; } }
          ],
          kindSamples: [["2", "44"], ["6", "12"], ["1", "89.5"], ["3", "28.5"], ["8", "7.25"]],
          sample: { values: ["6", "12"] }
        },
        {
          id: "15.4-x2", type: "whatif", base: 96,
          ask: "Ví dụ: hình chóp đáy vuông cạnh 6 cm, đường cao mặt bên 5 cm có diện tích toàn phần 96 cm². Nếu cạnh đáy và đường cao mặt bên đều gấp đôi (12 cm và 10 cm) thì diện tích toàn phần là bao nhiêu cm²?",
          why: "Mọi độ dài gấp k lần thì diện tích gấp k² lần — giúp em kiểm tra nhanh kết quả mà không phải tính lại từng mặt.",
          answer: function () { return 12 * 12 + 4 * (12 * 10 / 2); },
          reasons: [
            "Mỗi mặt có hai kích thước đều gấp đôi, nên diện tích gấp 2 × 2 = 4 lần: 384 cm².",
            "Độ dài gấp đôi nên diện tích gấp đôi: 192 cm².",
            "Hình chóp là hình khối, nên gấp 2 × 2 × 2 = 8 lần: 768 cm²."
          ],
          reason: 0,
          sample: { guess: "384", reason: 0 }
        },
        {
          id: "15.4-x3", type: "ways",
          ask: "Một lăng trụ có hai đáy là tam giác vuông với ba cạnh 5 cm, 12 cm, 13 cm (hai cạnh góc vuông là 5 cm và 12 cm); lăng trụ dài 10 cm. Tính diện tích toàn phần. Giải theo nhiều cách.",
          why: "Tính từng mặt hay dùng “dải” trên hình khai triển đều đúng — so sánh hai cách giúp em không bỏ sót mặt nào.",
          strategies: [
            { id: "s1", name: "Tính từng mặt rồi cộng", steps: [
              { ask: "Hai mặt tam giác có tổng diện tích bao nhiêu cm²?", answer: 60 },
              { ask: "Mặt chữ nhật 5 cm × 10 cm?", answer: 50 },
              { ask: "Mặt chữ nhật 12 cm × 10 cm?", answer: 120 },
              { ask: "Mặt chữ nhật 13 cm × 10 cm?", answer: 130 }, { answer: 360 }] },
            { id: "s2", name: "Dùng hình khai triển: ba mặt chữ nhật ghép thành một dải dài bằng chu vi đáy", steps: [
              { ask: "Dải chữ nhật (chu vi tam giác × 10 cm) có diện tích bao nhiêu cm²?", answer: 300 },
              { ask: "Hai mặt tam giác có tổng diện tích bao nhiêu cm²?", answer: 60 }, { answer: 360 }] }
          ],
          sample: { strategy: "s2", steps: ["300", "60", "360"] }
        }
      ]
    },
    tr: {
      en: {
        "q.15.1-x1.labels": ["Distance (miles)"],
        "q.15.1-x1.kinds": ["the miles are a multiple of 25 (the km a multiple of 40)", "an even number of miles", "an odd number of miles"],
        "q.15.1-x1.ask": "Use 5 miles ≈ 8 km. Find distances that are a whole number of miles and convert to a whole number of kilometres from 100 to 200.",
        "q.15.1-x1.why": "A number of miles that is a multiple of 5 converts neatly to km (each 5 miles is 8 km) — choosing “nice” numbers helps you work it out in your head.",
        "q.15.1-x1.challengeText": "The number of kilometres is a square number.",
        "q.15.1-x2.ask": "Example: 50 miles ≈ 80 km (using 5 miles ≈ 8 km). The other way round, about how many miles is 50 km?",
        "q.15.1-x2.why": "A mile is longer than a kilometre, so changing km to miles must give a smaller number — asking yourself this stops you multiplying the wrong way.",
        "q.15.1-x2.reasons": [
          "A mile is longer than a km, so there are fewer miles than km: 50 ÷ 8 × 5 = 31.25 miles.",
          "Multiply by 1.6 again, as before: 50 × 1.6 = 80 miles.",
          "80 km is 30 more than 50 miles, so 50 km ≈ 50 − 30 = 20 miles."
        ],
        "q.15.1-x3.ask": "A car travels at 45 miles per hour for 2 hours. About how many kilometres does it travel (use 5 miles ≈ 8 km, so 1 mile ≈ 1.6 km)? Solve it in several ways.",
        "q.15.1-x3.why": "You can convert units at the start or at the end — choosing the step with easier numbers means fewer mistakes.",
        "q.15.1-x3.strategies": [
          "Convert the speed to km per hour first",
          "Find the distance in miles, then multiply by 1.6",
          "Find the distance in miles, then count groups of 5 miles"
        ],
        "q.15.1-x3.steps.s1": ["What is 45 miles per hour in km per hour?"],
        "q.15.1-x3.steps.s2": ["How many miles does the car travel in 2 hours?"],
        "q.15.1-x3.steps.s3": ["How many miles does the car travel in 2 hours?", "How many groups of 5 miles is that distance?"],
        "q.15.2-x1.labels": ["Shorter parallel side a (cm)", "Longer parallel side b (cm)", "Height h (cm)"],
        "q.15.2-x1.kinds": ["the height is greater than both parallel sides", "the height is less than both parallel sides", "the height is between the two parallel sides (or equal to one)"],
        "q.15.2-x1.ask": "A trapezium has area 48 cm². The parallel sides a < b and the perpendicular height h are all whole numbers of cm. Find possible sets (a, b, h).",
        "q.15.2-x1.why": "From the formula ½ × (a + b) × h, an area of 48 cm² means (a + b) × h = 96 — using the formula backwards is the key skill of this section.",
        "q.15.2-x1.challengeText": "The height is exactly equal to the longer parallel side.",
        "q.15.2-x2.ask": "Trapezium number n has parallel sides n cm and 3n cm and perpendicular height n cm. The areas of trapezia 1, 2, 3 are 2, 8, 18 cm², … Find the areas of trapezium 5, trapezium 10 and trapezium 12, and the rule in terms of n.",
        "q.15.2-x2.why": "When every length is multiplied by n the area is multiplied by n² — you meet this again in the next sections with surface area and volume.",
        "q.15.2-x3.ask": "Example: a parallelogram has base 7 cm, slanting side 5 cm and perpendicular height 4 cm, so its area is 28 cm². If it is pushed to lean more, so the slanting side is 6 cm but the base and the perpendicular height stay the same, what is the area in cm²?",
        "q.15.2-x3.why": "The area depends only on the base and the perpendicular height — mixing up the slanting side with the height is a very common mistake.",
        "q.15.2-x3.reasons": [
          "Cutting off a triangle and moving it to the other end still gives a 7 × 4 rectangle, so the area is still 28 cm².",
          "Multiply the base by the slanting side: 7 × 6 = 42 cm².",
          "The slanting side is 1 cm longer, so the area grows by 7 cm²: 35 cm²."
        ],
        "q.15.3-x1.labels": ["Triangle base b (cm)", "Triangle height h (cm)", "Length of the prism l (cm)"],
        "q.15.3-x1.kinds": ["one measurement is 1 cm", "two measurements are equal", "three different measurements"],
        "q.15.3-x1.ask": "A triangular prism has volume 120 cm³. Its cross-section is a triangle with base b and perpendicular height h; the prism is l long (b, h and l are whole numbers of cm). Find possible sets (b, h, l).",
        "q.15.3-x1.why": "Volume = ½ × b × h × l, so 120 cm³ means b × h × l = 240 — do not forget that the triangle is half of a rectangle.",
        "q.15.3-x1.challengeText": "All three measurements are greater than 4 cm.",
        "q.15.3-x2.ask": "A triangular prism has a triangular cross-section with base 4 cm and perpendicular height 25 mm; the prism is 0.3 m long. Work out its volume in cm³. Solve it in several ways.",
        "q.15.3-x2.why": "Change every measurement to the same unit before multiplying — and knowing 1 cm³ = 1000 mm³ lets you convert the final answer.",
        "q.15.3-x2.strategies": [
          "Change every measurement to cm first",
          "Work in mm, then change to cm³",
          "Find the cuboid around it, then take half"
        ],
        "q.15.3-x2.steps.s1": ["How many cm is 25 mm?", "How many cm is 0.3 m?"],
        "q.15.3-x2.steps.s2": ["What is the area of the cross-section in mm²?", "What is the volume in mm³?"],
        "q.15.3-x2.steps.s3": ["What is the volume of a 4 cm × 2.5 cm × 30 cm cuboid in cm³?"],
        "q.15.3-x3.ask": "Make a problem: a prism has a triangular cross-section with base b cm and perpendicular height h cm, and the prism is l cm long (b, h, l greater than 0 and at most 100, decimals allowed). The problem will ask for the volume (cm³).",
        "q.15.3-x3.why": "Choosing the measurements yourself shows that the same volume can come from prisms of very different shapes.",
        "q.15.3-x3.template": "Triangle b × h, prism length l",
        "q.15.3-x3.fields": ["Triangle base b (cm)", "Triangle height h (cm)", "Length of the prism l (cm)"],
        "q.15.3-x3.criteria": [
          "The volume is exactly 1 litre (1000 cm³)", "At least one measurement is a decimal",
          "The prism is shorter than both the base and the height of the triangle",
          "The base and the height of the triangle are both odd numbers", "The volume is less than 10 cm³"
        ],
        "q.15.4-x1.labels": ["Base edge s (cm)", "Slant height t (cm)"],
        "q.15.4-x1.kinds": ["t is a whole number", "t has decimal part 0.5", "t has a different decimal part"],
        "q.15.4-x1.ask": "A square-based pyramid has total surface area 180 cm². The base edge s is a whole number of cm; the slant height t (the height of each triangular face) may be a decimal (round to at least 2 decimal places if it does not divide exactly). Find possible pairs (s, t).",
        "q.15.4-x1.why": "Total surface area = base + 4 triangular faces = s² + 2 × s × t — once you can write this, you can work any question backwards.",
        "q.15.4-x1.challengeText": "A low roof: the slant height t is less than twice the base side s.",
        "q.15.4-x2.ask": "Example: a square-based pyramid with base edge 6 cm and slant height 5 cm has total surface area 96 cm². If the base edge and the slant height are both doubled (12 cm and 10 cm), what is the total surface area in cm²?",
        "q.15.4-x2.why": "When every length is multiplied by k the area is multiplied by k² — a quick check on your answer without working out every face again.",
        "q.15.4-x2.reasons": [
          "Both measurements of every face double, so each area is multiplied by 2 × 2 = 4: 384 cm².",
          "The lengths double, so the area doubles: 192 cm².",
          "A pyramid is a solid, so it is multiplied by 2 × 2 × 2 = 8: 768 cm²."
        ],
        "q.15.4-x3.ask": "A prism has right-angled triangle ends with sides 5 cm, 12 cm and 13 cm (the two shorter sides, 5 cm and 12 cm, meet at the right angle); the prism is 10 cm long. Work out its total surface area. Solve it in several ways.",
        "q.15.4-x3.why": "Adding the faces one by one or using the “strip” on the net are both correct — comparing them makes sure you do not miss a face.",
        "q.15.4-x3.strategies": [
          "Work out each face, then add",
          "Use the net: the three rectangles join into one strip as long as the perimeter of the triangle"
        ],
        "q.15.4-x3.steps.s1": [
          "What is the total area of the two triangular faces in cm²?",
          "The 5 cm × 10 cm rectangle?",
          "The 12 cm × 10 cm rectangle?",
          "The 13 cm × 10 cm rectangle?"
        ],
        "q.15.4-x3.steps.s2": [
          "What is the area of the strip (perimeter of the triangle × 10 cm) in cm²?",
          "What is the total area of the two triangular faces in cm²?"
        ]
      },
      vi: {}
    }
  });
})();
