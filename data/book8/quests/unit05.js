// 🚀 Extension quests — Math 8, unit 5 (Angles and constructions). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas (Book 8 level: reasons, algebra in angle facts, constructions).
// Check functions receive NUMBERS parsed by the game. No figures are shown, so every situation is described in words.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const eq = function (x, y) { return Math.abs(x - y) < 1e-9; };
  // "(p·x + q)" written with a real minus sign
  const lin = function (p, q) {
    const px = (p === 1 ? "" : String(p)) + "x";
    if (q === 0) return px;
    return px + (q < 0 ? " − " + (-q) : " + " + q);
  };
  // 5.2-x2: exterior angle (p·x + q)°, opposite interior angles (r·x)° and s°
  const xOf = function (f) { return (f.s - f.q) / (f.p - f.r); };
  const triAngles = function (f) { const x = xOf(f); return [f.r * x, f.s, 180 - (f.p * x + f.q)]; };

  window.GAME_QUESTS.push({
    unit: 5,
    sections: {
      "5.1": [
        {
          id: "5.1-x1", type: "ways",
          ask: "AB và CD là hai đường thẳng song song (A nằm trên đường trên, C nằm trên đường dưới). Điểm E nằm giữa hai đường thẳng; B, D và E đều ở bên phải đường thẳng AC. Biết góc BAE = 38° và góc DCE = 47°. Tính góc AEC. Giải theo nhiều cách.",
          why: "Kẻ thêm một đường phụ là “chìa khoá” của chứng minh hình học: mỗi đường phụ khác nhau mở ra một chuỗi lý do khác nhau.",
          strategies: [
            { id: "s1", name: "Kẻ qua E một đường thẳng song song với AB, rồi dùng hai cặp góc so le trong", steps: [
              { ask: "Phần góc AEC nằm phía trên đường kẻ thêm bằng bao nhiêu độ?", answer: 38 },
              { ask: "Phần góc AEC nằm phía dưới đường kẻ thêm bằng bao nhiêu độ?", answer: 47 }, { answer: 85 }] },
            { id: "s2", name: "Kéo dài AE cắt CD tại F, dùng góc so le trong rồi góc ngoài của tam giác EFC", steps: [
              { ask: "Góc EFC (so le trong với góc BAE) bằng bao nhiêu độ?", answer: 38 }, { answer: 85 }] },
            { id: "s3", name: "Nối AC: góc BAC và góc DCA là hai góc trong cùng phía", steps: [
              { ask: "Góc EAC + góc ECA = 180° − 38° − 47° = ?", answer: 95 }, { answer: 85 }] }
          ],
          sample: { strategy: "s2", steps: ["38", "85"] }
        },
        {
          id: "5.1-x2", type: "whatif", base: 30,
          ask: "Ví dụ: hai góc đồng vị bằng (2x + 10)° và 70°, nên 2x + 10 = 70 và x = 30. Nếu hai góc (2x + 10)° và 70° là hai góc trong cùng phía (vẫn giữa hai đường song song) thì x bằng bao nhiêu?",
          why: "Biết cặp góc nào bằng nhau, cặp nào bù nhau quyết định em lập phương trình nào — sai cặp là sai cả bài.",
          answer: function () { return (180 - 70 - 10) / 2; },
          reasons: [
            "Hai góc trong cùng phía bù nhau: 2x + 10 = 180 − 70 = 110, nên x = 50.",
            "Mọi cặp góc tạo bởi hai đường song song đều bằng nhau, nên x vẫn là 30.",
            "Hai góc cộng với nhau thành 360°: 2x + 10 + 70 = 360, nên x = 140."
          ],
          reason: 0,
          sample: { guess: "50", reason: 0 }
        },
        {
          id: "5.1-x3", type: "many", arity: 3, ordered: true,
          labels: ["a", "b", "x"],
          ask: "Hai góc trong cùng phía tạo bởi một cát tuyến và hai đường thẳng song song có số đo (a·x)° và (b·x)°, trong đó a, b, x đều là số nguyên dương. Tìm nhiều bộ (a, b, x) khác nhau.",
          why: "Hai góc trong cùng phía luôn chia nhau 180°, nên mỗi bộ (a, b, x) là một cách chia 180° theo tỉ số a : b — cách giải các bài góc có chữ.",
          check: function (v) { return inRange(v[0], 1, 180) && inRange(v[1], 1, 180) && inRange(v[2], 1, 180) && (v[0] + v[1]) * v[2] === 180; },
          challenge: function (v) { return v[0] === 4 * v[1] || v[1] === 4 * v[0]; },
          challengeText: "Một góc gấp đúng 4 lần góc kia.",
          kinds: [
            { id: "eq", text: "a = b: hai góc bằng nhau (cùng 90°)", test: function (v) { return v[0] === v[1]; } },
            { id: "mult", text: "góc này gấp một số nguyên lần góc kia (tỉ số 1 : n)", test: function (v) { return v[0] % v[1] === 0 || v[1] % v[0] === 0; } },
            { id: "other", text: "tỉ số khác, như 2 : 3 hay 3 : 4", test: function () { return true; } }
          ],
          kindSamples: [["1", "1", "90"], ["2", "2", "45"], ["2", "1", "60"], ["1", "5", "30"], ["2", "3", "36"]],
          sample: { values: ["1", "2", "60"] }
        }
      ],
      "5.2": [
        {
          id: "5.2-x1", type: "pattern",
          ask: "Tam giác cân thứ n có góc ở đỉnh bằng (10n)°. Kéo dài cạnh đáy ra ngoài để được góc ngoài tại một đỉnh ở đáy. Với tam giác 1, 2, 3, góc ngoài đó bằng 95°, 100°, 105°. Tìm góc ngoài này của tam giác 4, 10, 16 và quy luật theo n.",
          why: "Góc ngoài bằng tổng hai góc trong không kề, nên khi góc ở đỉnh tăng 10° thì góc ngoài ở đáy chỉ tăng 5° — quy luật cho thấy vì sao.",
          seq: [95, 100, 105],
          term: function (n) { return 180 - (180 - 10 * n) / 2; },
          askN: [4, 10, 16],
          sample: { terms: { 4: "110", 10: "140", 16: "170" }, rule: "90+5n" }
        },
        {
          id: "5.2-x2", type: "make",
          ask: "Tự ra đề tìm x: góc ngoài của một tam giác là (p·x + q)°, hai góc trong không kề với nó là (r·x)° và s°. Chọn p, r từ 1 đến 20 (p khác r), q là số nguyên (có thể âm), s là số nguyên dương. Đề phải cho một tam giác thật (x > 0 và mọi góc đều dương).",
          why: "Tự lập phương trình từ tính chất góc ngoài giúp em thấy mỗi tính chất hình học là một phương trình đang chờ được giải.",
          template: "Góc ngoài (p·x + q)° = (r·x)° + s°. Tìm x.",
          fields: [{ id: "p", label: "p" }, { id: "q", label: "q" }, { id: "r", label: "r" }, { id: "s", label: "s" }],
          valid: function (f) {
            if (!(inRange(f.p, 1, 20) && inRange(f.r, 1, 20) && f.p !== f.r && inRange(f.q, -179, 179) && inRange(f.s, 1, 178))) return false;
            const x = xOf(f), ext = f.p * x + f.q;
            return x > 0 && ext > 0 && ext < 180 && f.r * x > 0;
          },
          solve: function (f) { return xOf(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "An exterior angle of a triangle is (" + lin(f.p, f.q) + ")°. The two interior angles opposite to it are (" + lin(f.r, 0) + ")° and " + f.s + "°. Find x."
              : "Góc ngoài của một tam giác bằng (" + lin(f.p, f.q) + ")°. Hai góc trong không kề với nó là (" + lin(f.r, 0) + ")° và " + f.s + "°. Tìm x.";
          },
          criteria: [
            { id: "int", text: "x là số nguyên", test: function (f) { return (f.s - f.q) % (f.p - f.r) === 0; } },
            { id: "minus", text: "Biểu thức góc ngoài có phép trừ (q âm)", test: function (f) { return f.q < 0; } },
            { id: "iso", text: "Tam giác là tam giác cân (có hai góc trong bằng nhau)", test: function (f) { const a = triAngles(f); return eq(a[0], a[1]) || eq(a[0], a[2]) || eq(a[1], a[2]); } },
            { id: "right", text: "Tam giác là tam giác vuông", test: function (f) { return triAngles(f).some(function (a) { return eq(a, 90); }); } },
            { id: "acute", text: "Góc ngoài là góc nhọn (nên góc trong kề với nó là góc tù)", test: function (f) { return f.p * xOf(f) + f.q < 90; } }
          ],
          sample: { fields: { p: "4", q: "-20", r: "2", s: "60" } }
        },
        {
          id: "5.2-x3", type: "whatif", base: 120,
          ask: "Ví dụ: một tam giác có hai góc ngoài (ở hai đỉnh khác nhau) là 130° và 110°, nên góc ngoài thứ ba là 120°. Nếu vẽ lại tam giác để góc ngoài 130° giảm còn 110°, còn góc ngoài 110° giữ nguyên, thì góc ngoài thứ ba bằng bao nhiêu?",
          why: "Tổng ba góc ngoài luôn là 360° — một cách kiểm tra nhanh mọi phép tính góc của tam giác.",
          answer: function () { return 360 - 110 - 110; },
          reasons: [
            "Ba góc ngoài luôn có tổng 360°, nên góc ngoài thứ ba tăng đúng 20°.",
            "Góc ngoài thứ ba vẫn là 120° vì chỉ một góc ngoài thay đổi.",
            "Góc ngoài thứ ba cũng giảm 20°, giống góc vừa giảm."
          ],
          reason: 0,
          sample: { guess: "140", reason: 0 }
        }
      ],
      "5.3": [
        {
          id: "5.3-x1", type: "many", arity: 3, ordered: false,
          labels: ["Cạnh thứ nhất (cm)", "Cạnh thứ hai (cm)", "Cạnh thứ ba (cm)"],
          ask: "Em dùng compa để dựng một tam giác biết ba cạnh (c.c.c). Ba cạnh là số nguyên xăng-ti-mét và chu vi tam giác là 20 cm. Ba cạnh có thể là bao nhiêu? Chỉ chấp nhận bộ ba dựng được (hai cung cắt nhau).",
          why: "Hai cung chỉ cắt nhau khi hai cạnh nhỏ cộng lại lớn hơn cạnh lớn nhất — kiểm tra điều đó trước giúp em không dựng hình vô ích.",
          check: function (v) {
            if (!v.every(function (x) { return inRange(x, 1, 19); }) || v[0] + v[1] + v[2] !== 20) return false;
            const s = v.slice().sort(function (a, b) { return a - b; });
            return s[0] + s[1] > s[2];
          },
          challenge: function (v) { const s = v.slice().sort(function (a, b) { return a - b; }); return s[0] < s[1] && s[1] < s[2] && s[2] === 8; },
          challengeText: "Ba cạnh khác nhau và cạnh dài nhất là 8 cm.",
          kinds: [
            { id: "legs", text: "tam giác cân, cạnh đáy ngắn hơn cạnh bên", test: function (v) { return v[0] < v[1] && v[1] === v[2]; } },
            { id: "base", text: "tam giác cân, cạnh đáy dài hơn cạnh bên", test: function (v) { return v[0] === v[1]; } },
            { id: "scalene", text: "ba cạnh khác nhau", test: function () { return true; } }
          ],
          kindSamples: [["6", "7", "7"], ["4", "8", "8"], ["6", "6", "8"], ["3", "8", "9"], ["4", "7", "9"]],
          sample: { values: ["6", "7", "7"] }
        },
        {
          id: "5.3-x2", type: "ways",
          ask: "Em dựng tam giác ABC theo g.c.g: cạnh AB, góc A = 64°, góc B = 52°. Sau đó em dựng tia phân giác của góc C. Mỗi góc nhỏ do tia phân giác tạo ra bằng bao nhiêu độ? Giải theo nhiều cách.",
          why: "Tính trước số đo cần có giúp em kiểm tra bản dựng bằng thước đo góc — một bản dựng đúng phải khớp với phép tính.",
          strategies: [
            { id: "s1", name: "Tính góc C từ tổng ba góc, rồi chia đôi", steps: [
              { ask: "Góc C = 180° − 64° − 52° = ?", answer: 64 }, { answer: 32 }] },
            { id: "s2", name: "Chia đôi cả ba góc: tổng ba nửa góc là 90°", steps: [
              { ask: "Nửa góc A + nửa góc B = 32° + 26° = ?", answer: 58 }, { answer: 32 }] },
            { id: "s3", name: "Dùng góc ngoài tại C", steps: [
              { ask: "Góc ngoài tại C = góc A + góc B = ?", answer: 116 },
              { ask: "Góc C = 180° − góc ngoài = ?", answer: 64 }, { answer: 32 }] }
          ],
          sample: { strategy: "s1", steps: ["64", "32"] }
        },
        {
          id: "5.3-x3", type: "whatif", base: 80,
          ask: "Ví dụ: dựng tam giác theo g.c.g với cạnh 6 cm và hai góc kề 40°, 60°; góc thứ ba là 80°. Nếu giữ nguyên hai góc 40°, 60° nhưng cạnh dài gấp đôi (12 cm) thì góc thứ ba bằng bao nhiêu độ?",
          why: "Phóng to hình làm dài mọi cạnh nhưng không đổi góc — ý tưởng này dẫn đến hình đồng dạng và phép phóng to ở các chương sau.",
          answer: function () { return 180 - 40 - 60; },
          reasons: [
            "Góc thứ ba chỉ phụ thuộc vào hai góc kia (tổng 180°), không phụ thuộc độ dài cạnh: vẫn 80°.",
            "Cạnh dài gấp đôi nên góc thứ ba cũng gấp đôi.",
            "Tam giác to hơn nên góc thứ ba nhỏ đi để vừa với cạnh dài."
          ],
          reason: 0,
          sample: { guess: "80", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.5.1-x1.ask": "AB and CD are parallel lines (A is on the upper line, C is on the lower line). Point E lies between the two lines; B, D and E are all to the right of the line AC. Angle BAE = 38° and angle DCE = 47°. Work out angle AEC. Solve it in several ways.",
        "q.5.1-x1.why": "Drawing an extra line is the key to a geometric proof: each different extra line opens a different chain of reasons.",
        "q.5.1-x1.strategies": [
          "Draw a line through E parallel to AB, then use two pairs of alternate angles",
          "Extend AE to meet CD at F, use alternate angles, then the exterior angle of triangle EFC",
          "Join AC: angles BAC and DCA are co-interior angles"
        ],
        "q.5.1-x1.steps.s1": ["What is the part of angle AEC above the extra line, in degrees?", "What is the part of angle AEC below the extra line, in degrees?"],
        "q.5.1-x1.steps.s2": ["What is angle EFC (alternate to angle BAE), in degrees?"],
        "q.5.1-x1.steps.s3": ["Angle EAC + angle ECA = 180° − 38° − 47° = ?"],
        "q.5.1-x2.ask": "Example: two corresponding angles are (2x + 10)° and 70°, so 2x + 10 = 70 and x = 30. If the angles (2x + 10)° and 70° are co-interior angles instead (still between the parallel lines), what is x?",
        "q.5.1-x2.why": "Knowing which pairs of angles are equal and which add up to 180° decides which equation you write — the wrong pair makes the whole answer wrong.",
        "q.5.1-x2.reasons": [
          "Co-interior angles add up to 180°: 2x + 10 = 180 − 70 = 110, so x = 50.",
          "Every pair of angles made by parallel lines is equal, so x is still 30.",
          "The two angles add up to 360°: 2x + 10 + 70 = 360, so x = 140."
        ],
        "q.5.1-x3.labels": ["a", "b", "x"],
        "q.5.1-x3.ask": "Two co-interior angles made by a transversal and two parallel lines are (a·x)° and (b·x)°, where a, b and x are all positive integers. Find many different sets (a, b, x).",
        "q.5.1-x3.why": "Co-interior angles always share 180°, so each set (a, b, x) is a way to split 180° in the ratio a : b — the method for angle problems with letters.",
        "q.5.1-x3.challengeText": "One angle is exactly 4 times the other.",
        "q.5.1-x3.kinds": ["a = b: the two angles are equal (both 90°)", "one angle is a whole-number multiple of the other (ratio 1 : n)", "another ratio, such as 2 : 3 or 3 : 4"],
        "q.5.2-x1.ask": "Isosceles triangle n has an apex angle of (10n)°. The base is extended to make an exterior angle at one of the base vertices. For triangles 1, 2, 3 this exterior angle is 95°, 100°, 105°. Find this exterior angle for triangles 4, 10 and 16, and the rule in terms of n.",
        "q.5.2-x1.why": "An exterior angle equals the sum of the two opposite interior angles, so when the apex angle grows by 10° the base exterior angle grows by only 5° — the rule shows why.",
        "q.5.2-x2.ask": "Make a problem to find x: an exterior angle of a triangle is (p·x + q)°, and the two interior angles opposite to it are (r·x)° and s°. Choose p and r from 1 to 20 (p different from r), q a whole number (it can be negative) and s a positive whole number. The problem must give a real triangle (x > 0 and every angle positive).",
        "q.5.2-x2.why": "Writing your own equation from the exterior angle fact shows that every angle fact is an equation waiting to be solved.",
        "q.5.2-x2.template": "Exterior angle (p·x + q)° = (r·x)° + s°. Find x.",
        "q.5.2-x2.fields": ["p", "q", "r", "s"],
        "q.5.2-x2.criteria": [
          "x is a whole number",
          "The exterior angle expression has a subtraction (q is negative)",
          "The triangle is isosceles (two interior angles are equal)",
          "The triangle is right-angled",
          "The exterior angle is acute (so the interior angle next to it is obtuse)"
        ],
        "q.5.2-x3.ask": "Example: a triangle has two exterior angles (at different vertices) of 130° and 110°, so the third exterior angle is 120°. If the triangle is redrawn so that the 130° exterior angle becomes 110° and the other 110° exterior angle stays the same, what is the third exterior angle?",
        "q.5.2-x3.why": "The three exterior angles always add up to 360° — a quick check for any angle calculation in a triangle.",
        "q.5.2-x3.reasons": [
          "The three exterior angles always add up to 360°, so the third one increases by exactly 20°.",
          "The third exterior angle is still 120° because only one exterior angle changed.",
          "The third exterior angle also decreases by 20°, like the angle that changed."
        ],
        "q.5.3-x1.labels": ["First side (cm)", "Second side (cm)", "Third side (cm)"],
        "q.5.3-x1.ask": "You use compasses to construct a triangle from its three sides (SSS). The sides are whole numbers of centimetres and the perimeter is 20 cm. What could the three sides be? Only sets that can be constructed (the two arcs meet) count.",
        "q.5.3-x1.why": "The two arcs only meet when the two shorter sides add up to more than the longest side — checking this first stops you starting a construction that cannot work.",
        "q.5.3-x1.challengeText": "The three sides are all different and the longest side is 8 cm.",
        "q.5.3-x1.kinds": ["isosceles, the base is shorter than the equal sides", "isosceles, the base is longer than the equal sides", "three different sides"],
        "q.5.3-x2.ask": "You construct triangle ABC using ASA: side AB, angle A = 64° and angle B = 52°. Then you construct the bisector of angle C. How big is each of the two angles made by the bisector? Solve it in several ways.",
        "q.5.3-x2.why": "Working out the expected size first lets you check your construction with a protractor — a correct construction must match the calculation.",
        "q.5.3-x2.strategies": [
          "Work out angle C from the angle sum, then halve it",
          "Halve all three angles: the three halves add up to 90°",
          "Use the exterior angle at C"
        ],
        "q.5.3-x2.steps.s1": ["Angle C = 180° − 64° − 52° = ?"],
        "q.5.3-x2.steps.s2": ["Half of angle A + half of angle B = 32° + 26° = ?"],
        "q.5.3-x2.steps.s3": ["Exterior angle at C = angle A + angle B = ?", "Angle C = 180° − exterior angle = ?"],
        "q.5.3-x3.ask": "Example: you construct a triangle using ASA with a side of 6 cm and angles of 40° and 60° at its ends; the third angle is 80°. If you keep the angles 40° and 60° but make the side twice as long (12 cm), what is the third angle, in degrees?",
        "q.5.3-x3.why": "Enlarging a shape makes every side longer but keeps the angles — this idea leads to similar shapes and enlargements in later units.",
        "q.5.3-x3.reasons": [
          "The third angle depends only on the other two angles (total 180°), not on the side length: it is still 80°.",
          "The side is twice as long, so the third angle is also doubled.",
          "The triangle is bigger, so the third angle gets smaller to fit the longer side."
        ]
      },
      vi: {}
    }
  });
})();
