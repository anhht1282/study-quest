// 🚀 Extension quests — Math 8, unit 8 (Shapes and symmetry). Schema: MATH_QUESTS_GUIDE.md. Own wording, built
// only from each section's key ideas (quadrilateral hierarchy and symmetry, circumference, 3D shapes and scale
// views). Check functions receive NUMBERS parsed by the game. No figures are shown, so shapes are described in words.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  // (lines of symmetry, order of rotational symmetry) of the special quadrilaterals and a general one
  const QUAD_SYM = ["4|4", "2|2", "0|2", "1|1", "0|1"];
  const dims = function (f) { return [f.a, f.b, f.c]; };

  window.GAME_QUESTS.push({
    unit: 8,
    sections: {
      "8.1": [
        {
          id: "8.1-x1", type: "many", arity: 2, ordered: true, noScale: true,   // symmetry counts are not proportional
          labels: ["Số trục đối xứng", "Bậc đối xứng quay"],
          ask: "Mỗi tứ giác có một cặp số: (số trục đối xứng, bậc đối xứng quay). Tứ giác không có đối xứng quay thì bậc là 1. Hãy nghĩ đến hình vuông, hình chữ nhật, hình thoi, hình bình hành, hình diều, hình thang cân và tứ giác bất kì. Tìm tất cả các cặp số khác nhau có thể có.",
          why: "Đếm trục đối xứng và bậc đối xứng quay là cách nhanh để nhận ra một tứ giác đặc biệt và vị trí của nó trong thứ bậc các tứ giác.",
          check: function (v) { return inRange(v[0], 0, 4) && inRange(v[1], 1, 4) && QUAD_SYM.indexOf(v[0] + "|" + v[1]) !== -1; },
          challenge: function (v) { return v[0] === 0 && v[1] === 2; },
          challengeText: "Một tứ giác có đối xứng quay nhưng không có trục đối xứng nào.",
          kinds: [
            { id: "both", text: "có cả trục đối xứng và đối xứng quay", test: function (v) { return v[0] > 0 && v[1] > 1; } },
            { id: "line", text: "chỉ có trục đối xứng", test: function (v) { return v[0] > 0; } },
            { id: "rot", text: "chỉ có đối xứng quay", test: function (v) { return v[1] > 1; } },
            { id: "none", text: "không có đối xứng nào", test: function () { return true; } }
          ],
          kindSamples: [["4", "4"], ["2", "2"], ["1", "1"], ["0", "2"], ["0", "1"]],
          sample: { values: ["2", "2"] }
        },
        {
          id: "8.1-x2", type: "ways",
          ask: "ABCD là một hình diều có AB = AD và CB = CD. Góc A = 80° và góc C = 60°. Tính góc B. Giải theo nhiều cách.",
          why: "Hình diều có một trục đối xứng và tách được thành các tam giác cân — mỗi tính chất cho em một con đường tính góc khác nhau.",
          strategies: [
            { id: "s1", name: "Tổng bốn góc là 360° và góc B = góc D", steps: [
              { ask: "Góc B + góc D = 360° − 80° − 60° = ?", answer: 220 }, { answer: 110 }] },
            { id: "s2", name: "Trục đối xứng AC chia hình diều thành hai tam giác bằng nhau", steps: [
              { ask: "Góc BAC = ?", answer: 40 }, { ask: "Góc BCA = ?", answer: 30 }, { answer: 110 }] },
            { id: "s3", name: "Đường chéo BD tạo ra hai tam giác cân ABD và CBD", steps: [
              { ask: "Góc ABD (góc ở đáy của tam giác cân ABD) = ?", answer: 50 },
              { ask: "Góc CBD (góc ở đáy của tam giác cân CBD) = ?", answer: 60 }, { answer: 110 }] }
          ],
          sample: { strategy: "s1", steps: ["220", "110"] }
        },
        {
          id: "8.1-x3", type: "whatif", base: 6,
          ask: "Ví dụ: một lục giác đều có đối xứng quay bậc 6. Nếu tô màu xen kẽ các cạnh (đỏ, xanh, đỏ, xanh, đỏ, xanh) và chỉ tính những phép quay đưa cạnh đỏ trùng cạnh đỏ, thì bậc đối xứng quay là bao nhiêu?",
          why: "Bậc đối xứng quay đếm số lần hình trùng khít trong một vòng — thêm màu sắc là thêm điều kiện, nên số lần có thể giảm.",
          answer: function () { return 3; },
          reasons: [
            "Chỉ những phép quay 120°, 240° và 360° đưa cạnh đỏ về cạnh đỏ, nên bậc là 3.",
            "Hình vẫn là lục giác đều nên bậc vẫn là 6.",
            "Có hai màu nên bậc là 2."
          ],
          reason: 0,
          sample: { guess: "3", reason: 0 }
        }
      ],
      "8.2": [
        {
          id: "8.2-x1", type: "whatif", base: 62.8, tol: 0.1,
          ask: "Ví dụ: một hình tròn đường kính 20 cm có chu vi khoảng 3,14 × 20 = 62,8 cm. Nếu thay bằng hai hình tròn có đường kính 12 cm và 8 cm, thì tổng chu vi của hai hình tròn là bao nhiêu xăng-ti-mét (dùng π ≈ 3,14)?",
          why: "Chu vi tỉ lệ thuận với đường kính (C = πd), nên chỉ cần tổng các đường kính là biết tổng các chu vi.",
          answer: function () { return 3.14 * 12 + 3.14 * 8; },
          reasons: [
            "C = πd nên π × 12 + π × 8 = π × 20: tổng chu vi vẫn là 62,8 cm.",
            "Hai hình tròn nhỏ hơn nên tổng chu vi nhỏ hơn 62,8 cm.",
            "Có hai hình tròn nên tổng chu vi lớn hơn 62,8 cm."
          ],
          reason: 0,
          sample: { guess: "62,8", reason: 0 }
        },
        {
          id: "8.2-x2", type: "pattern",
          ask: "Hình bán nguyệt thứ n có đường kính 2n cm. Chu vi của nó gồm nửa đường tròn và đường kính (dùng π ≈ 3,14). Chu vi của hình 1, 2, 3 là 5,14 cm, 10,28 cm, 15,42 cm. Tìm chu vi của hình 5, 10, 25 và quy luật theo n.",
          why: "Chu vi hình bán nguyệt = π × bán kính + đường kính; quy luật nhắc em không bao giờ quên cạnh thẳng.",
          seq: [5.14, 10.28, 15.42],
          term: function (n) { return 3.14 * n + 2 * n; },
          askN: [5, 10, 25],
          sample: { terms: { 5: "25,7", 10: "51,4", 25: "128,5" }, rule: "5.14n" }
        },
        {
          id: "8.2-x3", type: "ways",
          ask: "Một bánh xe có đường kính 70 cm lăn thẳng được 10 vòng. Bánh xe đi được bao nhiêu mét? Dùng π ≈ 22/7. Giải theo nhiều cách.",
          why: "Mỗi vòng lăn, bánh xe đi đúng một chu vi — cùng một ý tưởng nhưng có thể đổi đơn vị trước hoặc sau.",
          strategies: [
            { id: "s1", name: "Tính chu vi bằng xăng-ti-mét, nhân 10, rồi đổi ra mét", steps: [
              { ask: "Chu vi bánh xe = 22/7 × 70 = ? cm", answer: 220 }, { ask: "10 vòng = ? cm", answer: 2200 }, { answer: 22 }] },
            { id: "s2", name: "Đổi đường kính ra mét trước", steps: [
              { ask: "70 cm = ? m", answer: 0.7 }, { ask: "Chu vi = 22/7 × 0,7 = ? m", answer: 2.2 }, { answer: 22 }] },
            { id: "s3", name: "Nhân đường kính với 10 trước: 10 vòng như một vòng của bánh xe đường kính 700 cm", steps: [
              { ask: "10 × 70 = ? cm", answer: 700 }, { ask: "22/7 × 700 = ? cm", answer: 2200 }, { answer: 22 }] }
          ],
          sample: { strategy: "s2", steps: ["0,7", "2,2", "22"] }
        }
      ],
      "8.3": [
        {
          id: "8.3-x1", type: "make",
          ask: "Tự ra đề vẽ hình chiếu theo tỉ lệ: một chiếc hộp hình hộp chữ nhật dài a cm, rộng b cm, cao c cm (mỗi số từ 1 đến 2000), vẽ theo tỉ lệ 1 : k (k từ 2 đến 200). Đề hỏi diện tích hình chiếu bằng (nhìn từ trên xuống) trên bản vẽ.",
          why: "Tự chọn tỉ lệ giúp em thấy chọn tỉ lệ khéo thì bản vẽ có số đẹp và vừa trang giấy — đúng như khi vẽ kĩ thuật thật.",
          template: "Hộp a cm × b cm × c cm, tỉ lệ 1 : k. Diện tích hình chiếu bằng trên bản vẽ = ?",
          fields: [{ id: "a", label: "Dài a (cm)" }, { id: "b", label: "Rộng b (cm)" }, { id: "c", label: "Cao c (cm)" }, { id: "k", label: "Tỉ lệ 1 : k" }],
          valid: function (f) { return inRange(f.a, 1, 2000) && inRange(f.b, 1, 2000) && inRange(f.c, 1, 2000) && inRange(f.k, 2, 200); },
          solve: function (f) { return (f.a / f.k) * (f.b / f.k); },
          render: function (f, lang) {
            return lang === "en"
              ? "A cuboid box is " + f.a + " cm long, " + f.b + " cm wide and " + f.c + " cm high. You draw its plan view (from above) at a scale of 1 : " + f.k + ". What is the area of the plan view on your drawing, in cm²?"
              : "Một chiếc hộp hình hộp chữ nhật dài " + f.a + " cm, rộng " + f.b + " cm, cao " + f.c + " cm. Em vẽ hình chiếu bằng (nhìn từ trên xuống) theo tỉ lệ 1 : " + f.k + ". Diện tích hình chiếu bằng trên bản vẽ là bao nhiêu cm²?";
          },
          criteria: [
            { id: "whole", text: "Mọi kích thước trên bản vẽ đều là số nguyên xăng-ti-mét", test: function (f) { return dims(f).every(function (x) { return x % f.k === 0; }); } },
            { id: "page", text: "Hộp thật có cạnh dài ít nhất 1 m nhưng mọi cạnh trên bản vẽ không quá 20 cm", test: function (f) { return Math.max(f.a, f.b, f.c) >= 100 && dims(f).every(function (x) { return x <= 20 * f.k; }); } },
            { id: "square", text: "Hình chiếu bằng là hình vuông nhưng hộp không phải hình lập phương", test: function (f) { return f.a === f.b && f.c !== f.a; } },
            { id: "tall", text: "Hộp cao hơn cả chiều dài lẫn chiều rộng (như tủ lạnh)", test: function (f) { return f.c > f.a && f.c > f.b; } }
          ],
          sample: { fields: { a: "60", b: "40", c: "30", k: "10" } }
        },
        {
          id: "8.3-x2", type: "pattern",
          ask: "Xếp n khối lập phương cạnh 1 cm thành một hàng thẳng. Đếm số mặt hình vuông nằm ở mặt ngoài của cả khối (kể cả mặt đáy): với n = 1, 2, 3 là 6, 10, 14. Tìm số mặt vuông khi n = 5, 12, 25 và quy luật theo n.",
          why: "Mỗi khối thêm vào che mất hai mặt nhưng mang thêm sáu mặt — nhìn hình khối theo từng mặt chuẩn bị cho tính diện tích bề mặt ở chương sau.",
          seq: [6, 10, 14],
          term: function (n) { return 4 * n + 2; },
          askN: [5, 12, 25],
          sample: { terms: { 5: "22", 12: "50", 25: "102" }, rule: "4n+2" }
        },
        {
          id: "8.3-x3", type: "whatif", base: 24,
          ask: "Ví dụ: hộp dài 30 cm, rộng 20 cm. Vẽ hình chiếu bằng theo tỉ lệ 1 : 5 được hình chữ nhật 6 cm × 4 cm, diện tích 24 cm². Nếu vẽ theo tỉ lệ 1 : 10 thì diện tích hình chiếu bằng trên bản vẽ là bao nhiêu cm²?",
          why: "Khi mỗi độ dài giảm một nửa thì diện tích giảm bốn lần — điều quan trọng khi đọc bản vẽ và bản đồ.",
          answer: function () { return (30 / 10) * (20 / 10); },
          reasons: [
            "Mỗi cạnh trên bản vẽ ngắn đi một nửa (3 cm × 2 cm), nên diện tích chỉ còn một phần tư: 6 cm².",
            "Tỉ lệ nhỏ đi một nửa nên diện tích cũng giảm một nửa: 12 cm².",
            "Hộp thật không đổi nên diện tích trên bản vẽ vẫn là 24 cm²."
          ],
          reason: 0,
          sample: { guess: "6", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.8.1-x1.labels": ["Lines of symmetry", "Order of rotational symmetry"],
        "q.8.1-x1.ask": "Every quadrilateral has a pair of numbers: (number of lines of symmetry, order of rotational symmetry). A quadrilateral with no rotational symmetry has order 1. Think about the square, rectangle, rhombus, parallelogram, kite, isosceles trapezium and a general quadrilateral. Find all the different pairs that are possible.",
        "q.8.1-x1.why": "Counting lines of symmetry and the order of rotational symmetry is a quick way to recognise a special quadrilateral and its place in the hierarchy of quadrilaterals.",
        "q.8.1-x1.challengeText": "A quadrilateral with rotational symmetry but no lines of symmetry.",
        "q.8.1-x1.kinds": ["both line and rotational symmetry", "line symmetry only", "rotational symmetry only", "no symmetry at all"],
        "q.8.1-x2.ask": "ABCD is a kite with AB = AD and CB = CD. Angle A = 80° and angle C = 60°. Work out angle B. Solve it in several ways.",
        "q.8.1-x2.why": "A kite has one line of symmetry and splits into isosceles triangles — each property gives you a different route to the angle.",
        "q.8.1-x2.strategies": [
          "The four angles add up to 360° and angle B = angle D",
          "The line of symmetry AC splits the kite into two congruent triangles",
          "The diagonal BD makes two isosceles triangles ABD and CBD"
        ],
        "q.8.1-x2.steps.s1": ["Angle B + angle D = 360° − 80° − 60° = ?"],
        "q.8.1-x2.steps.s2": ["Angle BAC = ?", "Angle BCA = ?"],
        "q.8.1-x2.steps.s3": ["Angle ABD (a base angle of isosceles triangle ABD) = ?", "Angle CBD (a base angle of isosceles triangle CBD) = ?"],
        "q.8.1-x3.ask": "Example: a regular hexagon has rotational symmetry of order 6. If its sides are coloured alternately (red, blue, red, blue, red, blue) and you only count turns that put red sides onto red sides, what is the order of rotational symmetry?",
        "q.8.1-x3.why": "The order of rotational symmetry counts how many times a shape fits onto itself in one full turn — adding colours adds a condition, so the count can go down.",
        "q.8.1-x3.reasons": [
          "Only turns of 120°, 240° and 360° put red sides onto red sides, so the order is 3.",
          "It is still a regular hexagon, so the order is still 6.",
          "There are two colours, so the order is 2."
        ],
        "q.8.2-x1.ask": "Example: a circle with diameter 20 cm has a circumference of about 3.14 × 20 = 62.8 cm. If it is replaced by two circles with diameters 12 cm and 8 cm, what is the total circumference of the two circles, in centimetres (use π ≈ 3.14)?",
        "q.8.2-x1.why": "The circumference is proportional to the diameter (C = πd), so the total of the diameters tells you the total of the circumferences.",
        "q.8.2-x1.reasons": [
          "C = πd, so π × 12 + π × 8 = π × 20: the total circumference is still 62.8 cm.",
          "The two circles are smaller, so the total circumference is less than 62.8 cm.",
          "There are two circles, so the total circumference is more than 62.8 cm."
        ],
        "q.8.2-x2.ask": "Semicircle n has a diameter of 2n cm. Its perimeter is half a circle plus the diameter (use π ≈ 3.14). The perimeters of shapes 1, 2, 3 are 5.14 cm, 10.28 cm, 15.42 cm. Find the perimeters of shapes 5, 10 and 25, and the rule in terms of n.",
        "q.8.2-x2.why": "The perimeter of a semicircle = π × radius + diameter; the rule reminds you never to forget the straight edge.",
        "q.8.2-x3.ask": "A wheel with diameter 70 cm rolls in a straight line for 10 turns. How many metres does the wheel travel? Use π ≈ 22/7. Solve it in several ways.",
        "q.8.2-x3.why": "In each turn the wheel travels exactly one circumference — the same idea, but you can change the units before or after.",
        "q.8.2-x3.strategies": [
          "Work out the circumference in centimetres, multiply by 10, then change to metres",
          "Change the diameter into metres first",
          "Multiply the diameter by 10 first: 10 turns are like one turn of a wheel with diameter 700 cm"
        ],
        "q.8.2-x3.steps.s1": ["Circumference of the wheel = 22/7 × 70 = ? cm", "10 turns = ? cm"],
        "q.8.2-x3.steps.s2": ["70 cm = ? m", "Circumference = 22/7 × 0.7 = ? m"],
        "q.8.2-x3.steps.s3": ["10 × 70 = ? cm", "22/7 × 700 = ? cm"],
        "q.8.3-x1.ask": "Make a scale drawing problem: a cuboid box is a cm long, b cm wide and c cm high (each from 1 to 2000), drawn at a scale of 1 : k (k from 2 to 200). The problem asks for the area of the plan view (from above) on the drawing.",
        "q.8.3-x1.why": "Choosing the scale yourself shows that a well-chosen scale gives neat numbers and fits the page — just as in real technical drawing.",
        "q.8.3-x1.template": "Box a cm × b cm × c cm, scale 1 : k. Area of the plan view on the drawing = ?",
        "q.8.3-x1.fields": ["Length a (cm)", "Width b (cm)", "Height c (cm)", "Scale 1 : k"],
        "q.8.3-x1.criteria": [
          "Every length on the drawing is a whole number of centimetres",
          "The real box has an edge of at least 1 m, but every edge on the drawing is at most 20 cm",
          "The plan view is a square but the box is not a cube",
          "The box is taller than both its length and its width (like a fridge)"
        ],
        "q.8.3-x2.ask": "Put n cubes with edges of 1 cm in a straight row. Count the square faces on the outside of the whole solid (including the bottom): for n = 1, 2, 3 there are 6, 10, 14. Find the number of square faces when n = 5, 12 and 25, and the rule in terms of n.",
        "q.8.3-x2.why": "Each extra cube hides two faces but brings six new ones — looking at a solid face by face prepares you for surface area in a later unit.",
        "q.8.3-x3.ask": "Example: a box is 30 cm long and 20 cm wide. Its plan view at a scale of 1 : 5 is a 6 cm × 4 cm rectangle with an area of 24 cm². If you draw it at a scale of 1 : 10, what is the area of the plan view on the drawing, in cm²?",
        "q.8.3-x3.why": "When every length is halved, the area becomes four times smaller — important when you read drawings and maps.",
        "q.8.3-x3.reasons": [
          "Each side on the drawing is half as long (3 cm × 2 cm), so the area is only a quarter: 6 cm².",
          "The scale is halved, so the area is also halved: 12 cm².",
          "The real box does not change, so the area on the drawing is still 24 cm²."
        ]
      },
      vi: {}
    }
  });
})();
