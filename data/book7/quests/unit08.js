// 🚀 Extension quests — Math 7, unit 8 (Shapes and symmetry). Schema: MATH_QUESTS_GUIDE.md. Own wording, built
// only from each section's key ideas. Check functions receive NUMBERS parsed by the game. No figures are shown
// on the quest page, so every shape is described in words and the answers are counts, lengths or angles.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const eq = function (x, y) { return Math.abs(x - y) < 1e-9; };
  const pos = function (x) { return Number.isFinite(x) && x > 0; };
  // triangle with angles A = a, B = b and C = 180 − a − b
  const tri = function (f) { return [f.a, f.b, 180 - f.a - f.b]; };
  // [faces, edges, vertices] of a prism / pyramid on an n-sided base
  const prism = function (n) { return [n + 2, 3 * n, 2 * n]; };
  const pyramid = function (n) { return [n + 1, 2 * n, n + 1]; };
  const same = function (x, y) { return x[0] === y[0] && x[1] === y[1] && x[2] === y[2]; };
  const solidOk = function (v) {
    if (!v.every(isInt)) return false;
    const np = v[1] / 3, nq = v[1] / 2;
    return (isInt(np) && np >= 3 && same(v, prism(np))) || (isInt(nq) && nq >= 3 && same(v, pyramid(nq)));
  };

  window.GAME_QUESTS.push({
    unit: 8,
    sections: {
      "8.1": [
        {
          id: "8.1-x1", type: "many", arity: 1,
          labels: ["Số cạnh n"],
          ask: "Đa giác đều n cạnh trùng với chính nó khi quay một góc 360° ÷ n quanh tâm. Tìm các số n (n ≥ 3) để góc quay nhỏ nhất này là một số nguyên độ.",
          why: "Bậc đối xứng quay của đa giác đều n cạnh là n — mỗi lần quay 360° ÷ n thì hình lại trùng khít.",
          check: function (v) { return inRange(v[0], 3, 360) && 360 % v[0] === 0; },
          challenge: function (v) { return (360 / v[0]) % 2 === 1; },
          challengeText: "Góc quay nhỏ nhất là một số lẻ độ.",
          kinds: [
            { id: "oddang", text: "góc quay là số lẻ độ (n là bội của 8)", test: function (v) { return (360 / v[0]) % 2 === 1; } },
            { id: "oddn", text: "n là số lẻ", test: function (v) { return v[0] % 2 === 1; } },
            { id: "even", text: "n chẵn và góc quay là số chẵn độ", test: function () { return true; } }
          ],
          kindSamples: [["8"], ["24"], ["3"], ["5"], ["6"]],
          sample: { values: ["6"] }
        },
        {
          id: "8.1-x2", type: "whatif", base: 2,
          ask: "Ví dụ: hình chữ nhật (không phải hình vuông) có 2 trục đối xứng. Nếu kéo cho chiều dài bằng chiều rộng (thành hình vuông) thì hình có bao nhiêu trục đối xứng?",
          why: "Hình vuông là đa giác đều 4 cạnh — một hình “đều hơn” có nhiều đường gấp chồng khít hơn.",
          answer: function () { return 4; },
          reasons: [
            "Hình vuông là đa giác đều 4 cạnh: thêm 2 trục là hai đường chéo, tổng cộng 4 trục.",
            "Vẫn 2 trục vì hình vuông cũng là hình chữ nhật.",
            "Chỉ còn 2 trục là hai đường chéo, hai đường nối trung điểm các cạnh không còn là trục."
          ],
          reason: 0,
          sample: { guess: "4", reason: 0 }
        },
        {
          id: "8.1-x3", type: "ways",
          ask: "Một ngôi sao đều có 8 cánh giống hệt nhau. Bậc đối xứng quay của ngôi sao là bao nhiêu? Giải theo nhiều cách.",
          why: "Đếm phần giống nhau, tính góc quay nhỏ nhất hay đếm trục là ba cách kiểm tra cùng một tính chất đối xứng.",
          strategies: [
            { id: "s1", name: "Đếm số phần giống hệt nhau", steps: [{ ask: "Ngôi sao có bao nhiêu cánh giống hệt nhau?", answer: 8 }, { answer: 8 }] },
            { id: "s2", name: "Tìm góc quay nhỏ nhất", steps: [{ ask: "Quay góc nhỏ nhất bao nhiêu độ thì ngôi sao trùng với chính nó?", answer: 45 }, { answer: 8 }] },
            { id: "s3", name: "Đếm trục đối xứng (với hình đều này, bậc quay bằng số trục)", steps: [
              { ask: "Có bao nhiêu trục đi qua hai đỉnh cánh đối diện?", answer: 4 },
              { ask: "Có bao nhiêu trục đi qua khe giữa hai cánh đối diện?", answer: 4 }, { answer: 8 }] }
          ],
          sample: { strategy: "s2", steps: ["45", "8"] }
        }
      ],
      "8.2": [
        {
          id: "8.2-x1", type: "whatif", base: 13,
          ask: "Ví dụ: đường tròn bán kính 6,5 cm thì dây cung dài nhất dài 13 cm. Nếu bán kính tăng thêm 1,5 cm thì dây cung dài nhất dài bao nhiêu cm?",
          why: "Dây cung dài nhất là đường kính, luôn gấp đôi bán kính — nên mọi thay đổi của bán kính cũng gấp đôi lên.",
          answer: function () { return 2 * (6.5 + 1.5); },
          reasons: [
            "Dây dài nhất là đường kính, bằng 2 × bán kính, nên tăng 2 × 1,5 = 3 cm: 16 cm.",
            "Dây dài nhất cũng chỉ tăng 1,5 cm: 14,5 cm.",
            "Dây dài nhất không phụ thuộc bán kính nên vẫn 13 cm."
          ],
          reason: 0,
          sample: { guess: "16", reason: 0 }
        },
        {
          id: "8.2-x2", type: "many", arity: 2, ordered: false,
          labels: ["Góc thứ nhất", "Góc thứ hai"],
          ask: "Tam giác có một cạnh là đường kính của đường tròn và đỉnh thứ ba nằm trên đường tròn. Hai góc ở hai đầu đường kính có thể là bao nhiêu độ (số nguyên độ)? Tìm nhiều cặp.",
          why: "Góc ở đỉnh nằm trên đường tròn luôn là 90°, nên hai góc còn lại luôn có tổng 90° — dù đỉnh ở đâu trên đường tròn.",
          check: function (v) { return inRange(v[0], 1, 89) && inRange(v[1], 1, 89) && v[0] + v[1] === 90; },
          challenge: function (v) { return v[0] === 2 * v[1] || v[1] === 2 * v[0]; },
          challengeText: "Một góc gấp đôi góc kia.",
          sample: { values: ["40", "50"] }
        },
        {
          id: "8.2-x3", type: "pattern",
          ask: "Đánh dấu n điểm trên một đường tròn rồi nối mỗi cặp điểm bằng một dây cung. 1 điểm: 0 dây; 2 điểm: 1 dây; 3 điểm: 3 dây. Có bao nhiêu dây cung với 6, 10, 20 điểm? Tìm quy luật theo n (gợi ý: mỗi điểm nối với n − 1 điểm kia, mỗi dây được đếm hai lần).",
          why: "Đếm dây cung có hệ thống (mỗi điểm, rồi chia đôi) là cách đếm em sẽ gặp lại nhiều lần — kể cả khi đếm đường chéo của đa giác.",
          seq: [0, 1, 3],
          term: function (n) { return n * (n - 1) / 2; },
          askN: [6, 10, 20],
          sample: { terms: { 6: "15", 10: "45", 20: "190" }, rule: "n(n-1)/2" }
        }
      ],
      "8.3": [
        {
          id: "8.3-x1", type: "make",
          ask: "Tự tạo đề: tam giác ABC bằng tam giác DEF (A ứng với D, B ứng với E, C ứng với F). Chọn góc A và góc B (số nguyên độ). Đề hỏi góc F.",
          why: "Tìm đúng cặp đỉnh tương ứng là bước quyết định khi dùng hai hình bằng nhau — tự ra đề giúp em nhớ điều đó.",
          template: "ABC = DEF, góc A = a°, góc B = b°. Góc F = ?",
          fields: [{ id: "a", label: "Góc A" }, { id: "b", label: "Góc B" }],
          valid: function (f) { return inRange(f.a, 1, 178) && inRange(f.b, 1, 178) && f.a + f.b < 180; },
          solve: function (f) { return 180 - f.a - f.b; },
          render: function (f, lang) {
            return lang === "en"
              ? "Triangle ABC is congruent to triangle DEF (A↔D, B↔E, C↔F). Angle A = " + f.a + "° and angle B = " + f.b + "°. Find angle F."
              : "Tam giác ABC bằng tam giác DEF (A↔D, B↔E, C↔F). Góc A = " + f.a + "°, góc B = " + f.b + "°. Tính góc F.";
          },
          criteria: [
            { id: "right", text: "Tam giác vuông", test: function (f) { return tri(f).indexOf(90) !== -1; } },
            { id: "obtuse", text: "Tam giác tù", test: function (f) { return tri(f).some(function (x) { return x > 90; }); } },
            { id: "iso", text: "Tam giác cân (có hai góc bằng nhau)", test: function (f) { const t = tri(f); return t[0] === t[1] || t[1] === t[2] || t[0] === t[2]; } },
            { id: "equi", text: "Tam giác đều", test: function (f) { return f.a === 60 && f.b === 60; } },
            { id: "small", text: "Góc F là góc nhỏ nhất của tam giác", test: function (f) { const t = tri(f); return t[2] < t[0] && t[2] < t[1]; } }
          ],
          sample: { fields: { a: "45", b: "45" } }
        },
        {
          id: "8.3-x2", type: "many", arity: 2, ordered: false,
          labels: ["EF (cm)", "FD (cm)"],
          ask: "Tam giác DEF bằng tam giác ABC. Chu vi tam giác ABC là 40 cm và DE = 10 cm. EF và FD có thể dài bao nhiêu cm? (Có thể dùng số thập phân; ba cạnh phải tạo được một tam giác.)",
          why: "Hai hình bằng nhau có cùng chu vi; em còn phải nhớ: mỗi cạnh tam giác nhỏ hơn tổng hai cạnh kia.",
          check: function (v) { return pos(v[0]) && pos(v[1]) && eq(v[0] + v[1], 30) && Math.abs(v[0] - v[1]) < 10 - 1e-9; },
          challenge: function (v) { return eq(v[0], v[1]); },
          challengeText: "Tam giác DEF là tam giác cân.",
          kinds: [
            { id: "iso", text: "tam giác cân", test: function (v) { return eq(v[0], v[1]); } },
            { id: "int", text: "tam giác thường, cạnh là số nguyên cm", test: function (v) { return isInt(v[0]) && isInt(v[1]); } },
            { id: "dec", text: "tam giác thường, cạnh là số thập phân", test: function () { return true; } }
          ],
          kindSamples: [["15", "15"], ["12", "18"], ["11", "19"], ["12,5", "17,5"], ["13,2", "16,8"]],
          sample: { values: ["12", "18"] }
        },
        {
          id: "8.3-x3", type: "ways",
          ask: "Tam giác ABC bằng tam giác DEF (A↔D, B↔E, C↔F). Chu vi tam giác ABC là 30 cm, AB = 8 cm, BC = 12 cm. Tính FD. Giải theo nhiều cách.",
          why: "Có thể tính trong hình này rồi chuyển sang hình kia, hoặc chuyển trước rồi tính — hai đường cùng đến một đáp số.",
          strategies: [
            { id: "s1", name: "Tính CA trong tam giác ABC, rồi dùng cạnh tương ứng", steps: [{ ask: "CA = ? cm", answer: 10 }, { answer: 10 }] },
            { id: "s2", name: "Chuyển sang tam giác DEF trước", steps: [{ ask: "DE + EF = ? cm", answer: 20 }, { answer: 10 }] }
          ],
          sample: { strategy: "s2", steps: ["20", "10"] }
        }
      ],
      "8.4": [
        {
          id: "8.4-x1", type: "pattern",
          ask: "Lăng trụ có đáy là đa giác n cạnh. Cộng số mặt, số cạnh và số đỉnh của nó: lăng trụ tam giác (n = 3) được 5 + 9 + 6 = 20. Tìm tổng này khi n = 6, n = 10, n = 25 và quy luật theo n.",
          why: "Viết số mặt, cạnh, đỉnh theo n giúp em tính cho mọi lăng trụ mà không cần vẽ — và kiểm tra lại bằng công thức Euler.",
          term: function (n) { return 6 * n + 2; },
          askN: [6, 10, 25],
          sample: { terms: { 6: "38", 10: "62", 25: "152" }, rule: "6n+2" }
        },
        {
          id: "8.4-x2", type: "many", arity: 3, ordered: true,
          labels: ["Số mặt", "Số cạnh", "Số đỉnh"],
          ask: "Tìm bộ (số mặt, số cạnh, số đỉnh) của một lăng trụ hoặc một hình chóp có đáy là đa giác (ít nhất 3 cạnh). Tìm càng nhiều khối khác nhau càng tốt.",
          why: "Mỗi bộ số đều thoả “đỉnh + mặt − cạnh = 2”: em vừa luyện công thức theo n, vừa kiểm chứng công thức Euler.",
          check: solidOk,
          challenge: function (v) { return v[1] === 30; },
          challengeText: "Khối đó có đúng 30 cạnh.",
          sample: { values: ["5", "9", "6"] }
        },
        {
          id: "8.4-x3", type: "whatif", base: 9,
          ask: "Ví dụ: lăng trụ tam giác có 9 cạnh. Nếu đáy là lục giác (6 cạnh) thì lăng trụ có bao nhiêu cạnh?",
          why: "Số cạnh của lăng trụ là 3n: hai đáy và các cạnh bên — hiểu điều này thì không cần đếm từng cạnh.",
          answer: function () { return 3 * 6; },
          reasons: [
            "Mỗi đáy có 6 cạnh và có 6 cạnh bên: 3 × 6 = 18 cạnh.",
            "Đáy thêm 3 cạnh nên khối chỉ thêm 3 cạnh: 12 cạnh.",
            "Số cạnh bằng số mặt cộng số đỉnh: 8 + 12 = 20 cạnh."
          ],
          reason: 0,
          sample: { guess: "18", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.8.1-x1.labels": ["Number of sides n"],
        "q.8.1-x1.ask": "A regular polygon with n sides looks the same after a turn of 360° ÷ n about its centre. Find values of n (n ≥ 3) for which this smallest angle of turn is a whole number of degrees.",
        "q.8.1-x1.why": "The order of rotational symmetry of a regular n-sided polygon is n — every turn of 360° ÷ n fits it exactly onto itself again.",
        "q.8.1-x1.challengeText": "The smallest angle of turn is an odd number of degrees.",
        "q.8.1-x1.kinds": ["the angle is an odd number of degrees (n is a multiple of 8)", "n is odd", "n is even and the angle is an even number of degrees"],
        "q.8.1-x2.ask": "Example: a rectangle (not a square) has 2 lines of symmetry. If it is stretched so that its length equals its width (a square), how many lines of symmetry does it have?",
        "q.8.1-x2.why": "A square is a regular 4-sided polygon — a “more regular” shape has more fold lines where the halves match.",
        "q.8.1-x2.reasons": [
          "A square is a regular 4-sided polygon: the two diagonals are added as lines, 4 lines in total.",
          "Still 2 lines, because a square is also a rectangle.",
          "Only 2 lines remain, the diagonals; the lines joining midpoints of sides are no longer lines of symmetry."
        ],
        "q.8.1-x3.ask": "A regular star has 8 identical points. What is the order of rotational symmetry of the star? Solve it in several ways.",
        "q.8.1-x3.why": "Counting identical parts, finding the smallest angle of turn and counting lines of symmetry are three ways to check the same symmetry.",
        "q.8.1-x3.strategies": [
          "Count the identical parts",
          "Find the smallest angle of turn",
          "Count lines of symmetry (for this regular shape, the order equals the number of lines)"
        ],
        "q.8.1-x3.steps.s1": ["How many identical points does the star have?"],
        "q.8.1-x3.steps.s2": ["What is the smallest angle of turn, in degrees, that fits the star onto itself?"],
        "q.8.1-x3.steps.s3": ["How many lines pass through two opposite tips?", "How many lines pass through the gaps between two opposite points?"],
        "q.8.2-x1.ask": "Example: a circle with radius 6.5 cm has a longest chord of 13 cm. If the radius increases by 1.5 cm, how long, in cm, is the longest chord?",
        "q.8.2-x1.why": "The longest chord is the diameter, always twice the radius — so any change in the radius is doubled too.",
        "q.8.2-x1.reasons": [
          "The longest chord is the diameter, 2 × the radius, so it increases by 2 × 1.5 = 3 cm: 16 cm.",
          "The longest chord also increases by only 1.5 cm: 14.5 cm.",
          "The longest chord does not depend on the radius, so it is still 13 cm."
        ],
        "q.8.2-x2.labels": ["First angle", "Second angle"],
        "q.8.2-x2.ask": "A triangle has one side that is a diameter of a circle, and its third vertex is on the circle. What could the two angles at the ends of the diameter be (whole numbers of degrees)? Find several pairs.",
        "q.8.2-x2.why": "The angle at the vertex on the circle is always 90°, so the other two angles always add up to 90° — wherever the vertex is on the circle.",
        "q.8.2-x2.challengeText": "One angle is twice the other.",
        "q.8.2-x3.ask": "Mark n points on a circle and join every pair of points with a chord. 1 point: 0 chords; 2 points: 1 chord; 3 points: 3 chords. How many chords are there with 6, 10 and 20 points? Find the rule in terms of n (hint: each point joins to the n − 1 other points, and each chord is counted twice).",
        "q.8.2-x3.why": "Counting chords systematically (from each point, then halving) is a counting method you will meet again — including when counting the diagonals of a polygon.",
        "q.8.3-x1.ask": "Make a problem: triangle ABC is congruent to triangle DEF (A matches D, B matches E, C matches F). Choose angle A and angle B (whole numbers of degrees). The problem asks for angle F.",
        "q.8.3-x1.why": "Matching the corresponding vertices is the key step when you use congruent shapes — making a problem helps you remember it.",
        "q.8.3-x1.template": "ABC ≅ DEF, angle A = a°, angle B = b°. Angle F = ?",
        "q.8.3-x1.fields": ["Angle A", "Angle B"],
        "q.8.3-x1.criteria": [
          "A right-angled triangle",
          "An obtuse-angled triangle",
          "An isosceles triangle (two equal angles)",
          "An equilateral triangle",
          "Angle F is the smallest angle of the triangle"
        ],
        "q.8.3-x2.labels": ["EF (cm)", "FD (cm)"],
        "q.8.3-x2.ask": "Triangle DEF is congruent to triangle ABC. The perimeter of triangle ABC is 40 cm and DE = 10 cm. How long, in cm, could EF and FD be? (You can use decimals; the three sides must make a triangle.)",
        "q.8.3-x2.why": "Congruent shapes have the same perimeter; and remember: each side of a triangle is shorter than the other two sides added together.",
        "q.8.3-x2.challengeText": "Triangle DEF is isosceles.",
        "q.8.3-x2.kinds": ["an isosceles triangle", "a scalene triangle with whole-number sides", "a scalene triangle with decimal sides"],
        "q.8.3-x3.ask": "Triangle ABC is congruent to triangle DEF (A↔D, B↔E, C↔F). The perimeter of triangle ABC is 30 cm, AB = 8 cm and BC = 12 cm. Find FD. Solve it in several ways.",
        "q.8.3-x3.why": "You can calculate in one shape and then move to the other, or move first and then calculate — two routes to the same answer.",
        "q.8.3-x3.strategies": [
          "Find CA in triangle ABC, then use the corresponding side",
          "Move to triangle DEF first"
        ],
        "q.8.3-x3.steps.s1": ["CA = ? cm"],
        "q.8.3-x3.steps.s2": ["DE + EF = ? cm"],
        "q.8.4-x1.ask": "A prism has a base that is an n-sided polygon. Add its numbers of faces, edges and vertices: a triangular prism (n = 3) gives 5 + 9 + 6 = 20. Find this total when n = 6, n = 10 and n = 25, and the rule in terms of n.",
        "q.8.4-x1.why": "Writing faces, edges and vertices in terms of n lets you work them out for any prism without drawing — and check them with Euler's formula.",
        "q.8.4-x2.labels": ["Faces", "Edges", "Vertices"],
        "q.8.4-x2.ask": "Find the set (number of faces, number of edges, number of vertices) of a prism or a pyramid whose base is a polygon (at least 3 sides). Find as many different solids as you can.",
        "q.8.4-x2.why": "Every set satisfies “vertices + faces − edges = 2”: you practise the rules in n and test Euler's formula at the same time.",
        "q.8.4-x2.challengeText": "The solid has exactly 30 edges.",
        "q.8.4-x3.ask": "Example: a triangular prism has 9 edges. If the base is a hexagon (6 sides), how many edges does the prism have?",
        "q.8.4-x3.why": "A prism has 3n edges: two bases and the side edges — once you understand this, you do not need to count each edge.",
        "q.8.4-x3.reasons": [
          "Each base has 6 edges and there are 6 side edges: 3 × 6 = 18 edges.",
          "The base has 3 more edges, so the solid has only 3 more edges: 12 edges.",
          "The number of edges equals faces plus vertices: 8 + 12 = 20 edges."
        ]
      },
      vi: {}
    }
  });
})();
