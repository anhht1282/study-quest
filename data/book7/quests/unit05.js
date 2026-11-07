// 🚀 Extension quests — Math 7, unit 5 (Angles and constructions). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game. No figures are
// shown on the quest page, so every situation is described in words.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const neg = function (x) { return String(x).replace("-", "−"); };
  // fourth angle of quadrilateral ABCD from angles A, B, C
  const fourth = function (f) { return 360 - f.a - f.b - f.c; };
  const angles = function (f) { return [f.a, f.b, f.c, fourth(f)]; };

  window.GAME_QUESTS.push({
    unit: 5,
    sections: {
      "5.1": [
        {
          id: "5.1-x1", type: "many", arity: 3, ordered: false,
          labels: ["Góc thứ hai", "Góc thứ ba", "Góc thứ tư"],
          ask: "Một tứ giác có một góc vuông (90°). Ba góc còn lại có thể là bao nhiêu độ? Mỗi góc là số nguyên độ, lớn hơn 0° và nhỏ hơn 180°. Tìm nhiều bộ ba khác nhau.",
          why: "Tổng bốn góc luôn là 360° nên ba góc còn lại luôn có tổng 270° — em kiểm tra mọi bản vẽ tứ giác bằng đúng phép cộng này.",
          check: function (v) { return v.every(function (x) { return inRange(x, 1, 179); }) && v[0] + v[1] + v[2] === 270; },
          challenge: function (v) { const s = v.slice().sort(function (a, b) { return a - b; }); return s[1] === s[0] + 1 && s[2] === s[1] + 1; },
          challengeText: "Ba góc là ba số tự nhiên liên tiếp.",
          kinds: [
            { id: "right", text: "có thêm một góc vuông", test: function (v) { return v.indexOf(90) !== -1; } },
            { id: "two", text: "có hai góc tù", test: function (v) { return v.filter(function (x) { return x > 90; }).length === 2; } },
            { id: "one", text: "có đúng một góc tù", test: function () { return true; } }
          ],
          kindSamples: [["90", "90", "90"], ["80", "90", "100"], ["70", "100", "100"], ["40", "110", "120"], ["60", "60", "150"]],
          sample: { values: ["100", "80", "90"] }
        },
        {
          id: "5.1-x2", type: "pattern",
          ask: "Tứ giác thứ n có ba góc bằng nhau, mỗi góc bằng (60 + 5n)°. Góc thứ tư của tứ giác 1, 2, 3 là 165°, 150°, 135°. Tìm góc thứ tư của tứ giác 5, 8, 10 và quy luật theo n.",
          why: "Khi ba góc cùng lớn lên thì góc thứ tư nhỏ đi gấp ba lần như vậy — em thấy rõ vì sao “lấy 360° trừ đi tổng đã biết”.",
          seq: [165, 150, 135],
          term: function (n) { return 360 - 3 * (60 + 5 * n); },
          askN: [5, 8, 10],
          sample: { terms: { 5: "105", 8: "60", 10: "30" }, rule: "180-15n" }
        },
        {
          id: "5.1-x3", type: "whatif", base: 105,
          ask: "Ví dụ: tứ giác có ba góc đều bằng 85° thì góc thứ tư là 105°. Nếu mỗi góc trong ba góc đó tăng thêm 5° thì góc thứ tư bằng bao nhiêu?",
          why: "Dự đoán trước khi tính giúp em hiểu mỗi góc ảnh hưởng đến tổng 360° thế nào, chứ không chỉ thuộc phép trừ.",
          answer: function () { return 360 - 3 * (85 + 5); },
          reasons: [
            "Ba góc cùng tăng 5° nên tổng của chúng tăng 15°; góc thứ tư phải giảm 15° để tổng vẫn là 360°.",
            "Góc thứ tư cũng tăng 5° giống các góc kia.",
            "Góc thứ tư chỉ giảm 5° vì mỗi góc chỉ tăng 5°."
          ],
          reason: 0,
          sample: { guess: "90", reason: 0 }
        }
      ],
      "5.2": [
        {
          id: "5.2-x1", type: "many", arity: 2, ordered: false,
          labels: ["Góc trong thứ nhất", "Góc trong thứ hai"],
          ask: "Một góc ngoài của tam giác bằng 130°. Hai góc trong không kề với góc ngoài đó có thể là bao nhiêu độ (số nguyên độ)? Tìm nhiều cặp khác nhau.",
          why: "Góc ngoài bằng tổng hai góc trong không kề — một lối tắt giúp em tìm góc mà không cần tính góc thứ ba.",
          check: function (v) { return inRange(v[0], 1, 129) && inRange(v[1], 1, 129) && v[0] + v[1] === 130; },
          challenge: function (v) { return v[0] === v[1] || v[0] === 50 || v[1] === 50; },
          challengeText: "Tam giác đó là tam giác cân (có hai góc bằng nhau).",
          kinds: [
            { id: "obtuse", text: "tam giác tù", test: function (v) { return Math.max(v[0], v[1]) > 90; } },
            { id: "right", text: "tam giác vuông", test: function (v) { return Math.max(v[0], v[1]) === 90; } },
            { id: "acute", text: "tam giác nhọn", test: function () { return true; } }
          ],
          kindSamples: [["30", "100"], ["10", "120"], ["40", "90"], ["60", "70"], ["50", "80"]],
          sample: { values: ["70", "60"] }
        },
        {
          id: "5.2-x2", type: "ways",
          ask: "Một đường thẳng cắt hai đường thẳng song song, tạo ra 8 góc. Một góc nhọn trong số đó bằng 67°. Mỗi góc tù bằng bao nhiêu độ? Giải theo nhiều cách.",
          why: "Kề bù, đồng vị và tổng các góc quanh một điểm là ba công cụ khác nhau — dùng cách này để kiểm tra cách kia.",
          strategies: [
            { id: "s1", name: "Kề bù ở giao điểm trên, rồi dùng góc đồng vị", steps: [
              { ask: "Góc kề bù với góc 67° ở cùng giao điểm bằng bao nhiêu?", answer: 113 }, { answer: 113 }] },
            { id: "s2", name: "Dùng góc đồng vị trước, rồi kề bù ở giao điểm dưới", steps: [
              { ask: "Góc đồng vị với góc 67° ở giao điểm dưới bằng bao nhiêu?", answer: 67 }, { answer: 113 }] },
            { id: "s3", name: "Tổng 8 góc quanh hai giao điểm là 2 × 360° = 720°", steps: [
              { ask: "Bốn góc nhọn cộng lại bằng bao nhiêu?", answer: 268 },
              { ask: "Vậy bốn góc tù cộng lại bằng bao nhiêu?", answer: 452 }, { answer: 113 }] }
          ],
          sample: { strategy: "s1", steps: ["113", "113"] }
        },
        {
          id: "5.2-x3", type: "whatif", base: 127,
          ask: "Ví dụ: hai đường thẳng cắt nhau, một góc 53° thì góc kề bù với nó là 127°. Nếu xoay một đường để góc 53° tăng thêm 20° thì góc kề bù bằng bao nhiêu?",
          why: "Hai góc kề bù luôn “chia nhau” 180°: góc này lớn lên bao nhiêu thì góc kia nhỏ đi bấy nhiêu.",
          answer: function () { return 180 - (53 + 20); },
          reasons: [
            "Tổng hai góc kề bù luôn là 180°, nên góc kia giảm đúng 20°.",
            "Góc kề bù cũng tăng 20° vì hai đường vẫn cắt nhau.",
            "Góc kề bù không đổi vì nó nằm trên đường thẳng không bị xoay."
          ],
          reason: 0,
          sample: { guess: "107", reason: 0 }
        }
      ],
      "5.3": [
        {
          id: "5.3-x1", type: "make",
          ask: "Tự ra đề vẽ tứ giác ABCD: chọn góc A, góc B, góc C (số nguyên độ). Đề hỏi góc D để bạn kiểm tra trước khi vẽ. Cả bốn góc phải nhỏ hơn 180°.",
          why: "Tính góc còn lại trước khi cầm thước đo góc giúp em phát hiện ngay một đề không vẽ được.",
          template: "Góc A = a°, góc B = b°, góc C = c°. Góc D = ?",
          fields: [{ id: "a", label: "Góc A" }, { id: "b", label: "Góc B" }, { id: "c", label: "Góc C" }],
          valid: function (f) { return inRange(f.a, 1, 179) && inRange(f.b, 1, 179) && inRange(f.c, 1, 179) && inRange(fourth(f), 1, 179); },
          solve: function (f) { return fourth(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "Quadrilateral ABCD has angle A = " + f.a + "°, angle B = " + f.b + "° and angle C = " + f.c + "°. Work out angle D before you draw it."
              : "Tứ giác ABCD có góc A = " + f.a + "°, góc B = " + f.b + "°, góc C = " + f.c + "°. Tính góc D trước khi vẽ.";
          },
          criteria: [
            { id: "right", text: "Có ít nhất một góc vuông (vẽ được bằng ê-ke)", test: function (f) { return angles(f).indexOf(90) !== -1; } },
            { id: "obtuse", text: "Góc D là góc tù", test: function (f) { return fourth(f) > 90; } },
            { id: "par", text: "Góc A + góc B = 180° (khi đó cạnh AD song song với cạnh BC)", test: function (f) { return f.a + f.b === 180; } },
            { id: "diff", text: "Bốn góc đều khác nhau", test: function (f) { const a = angles(f); return a.every(function (x, i) { return a.indexOf(x) === i; }); } },
            { id: "small", text: "Có một góc nhỏ hơn 45°", test: function (f) { return angles(f).some(function (x) { return x < 45; }); } }
          ],
          sample: { fields: { a: "90", b: "90", c: "140" } }
        },
        {
          id: "5.3-x2", type: "many", arity: 3, ordered: false,
          labels: ["Góc A", "Góc B", "Góc C"],
          ask: "Em chỉ có bộ ê-ke (góc 30°, 45°, 60°, 90°) và ghép chúng lại, nên chỉ vẽ được các góc là bội của 15°. Tứ giác ABCD có góc D = 75°. Ba góc A, B, C (đều là bội của 15° và nhỏ hơn 180°) có thể là bao nhiêu?",
          why: "Biết tổng các góc phải bằng 360° giúp em chọn số đo trước, rồi mới vẽ — đúng cách lập kế hoạch vẽ hình.",
          check: function (v) { return v.every(function (x) { return inRange(x, 15, 165) && x % 15 === 0; }) && v[0] + v[1] + v[2] === 285; },
          challenge: function (v) { const o = v.filter(function (x) { return x !== 90; }); return o.length === 2 && o[0] !== o[1]; },
          challengeText: "Có đúng một góc vuông và hai góc còn lại khác nhau.",
          kinds: [
            { id: "right", text: "có góc vuông", test: function (v) { return v.indexOf(90) !== -1; } },
            { id: "two", text: "có hai góc tù", test: function (v) { return v.filter(function (x) { return x > 90; }).length === 2; } },
            { id: "one", text: "có đúng một góc tù", test: function () { return true; } }
          ],
          kindSamples: [["90", "90", "105"], ["75", "90", "120"], ["60", "105", "120"], ["30", "120", "135"], ["60", "60", "165"]],
          sample: { values: ["120", "105", "60"] }
        },
        {
          id: "5.3-x3", type: "ways",
          ask: "Ba góc của một tứ giác là 60°, 75° và 130°. Tính góc thứ tư để có thể vẽ hình. Giải theo nhiều cách.",
          why: "Có nhiều đường đến cùng một đáp số; cách “so với 90°” còn giúp em ước lượng nhanh khi vẽ.",
          strategies: [
            { id: "s1", name: "Cộng ba góc rồi lấy 360° trừ đi", steps: [{ ask: "60 + 75 + 130 = ?", answer: 265 }, { answer: 95 }] },
            { id: "s2", name: "Trừ dần từng góc khỏi 360°", steps: [
              { ask: "360 − 60 = ?", answer: 300 }, { ask: "300 − 75 = ?", answer: 225 }, { answer: 95 }] },
            { id: "s3", name: "So mỗi góc với 90° (bốn góc vuông có tổng 360°)", steps: [
              { ask: "Tổng độ lệch so với 90°: (60 − 90) + (75 − 90) + (130 − 90) = ?", answer: -5 }, { answer: 95 }] }
          ],
          sample: { strategy: "s3", steps: ["−5", "95"] }
        }
      ]
    },
    tr: {
      en: {
        "q.5.1-x1.labels": ["Second angle", "Third angle", "Fourth angle"],
        "q.5.1-x1.ask": "A quadrilateral has one right angle (90°). What could the other three angles be? Each angle is a whole number of degrees, greater than 0° and less than 180°. Find several different sets of three.",
        "q.5.1-x1.why": "The four angles always add up to 360°, so the other three always add up to 270° — you can check any quadrilateral drawing with this sum.",
        "q.5.1-x1.challengeText": "The three angles are three consecutive whole numbers.",
        "q.5.1-x1.kinds": ["there is another right angle", "there are two obtuse angles", "there is exactly one obtuse angle"],
        "q.5.1-x2.ask": "Quadrilateral n has three equal angles, each (60 + 5n)°. The fourth angle of quadrilaterals 1, 2, 3 is 165°, 150°, 135°. Find the fourth angle of quadrilaterals 5, 8 and 10, and the rule in terms of n.",
        "q.5.1-x2.why": "When the three angles grow, the fourth angle shrinks three times as fast — you can see why we “subtract the known total from 360°”.",
        "q.5.1-x3.ask": "Example: a quadrilateral with three angles of 85° has a fourth angle of 105°. If each of those three angles increases by 5°, what is the fourth angle?",
        "q.5.1-x3.why": "Predicting before calculating shows how each angle affects the total of 360°, not just how to subtract.",
        "q.5.1-x3.reasons": [
          "The three angles each increase by 5°, so their total increases by 15°; the fourth angle must decrease by 15° to keep the total at 360°.",
          "The fourth angle also increases by 5°, like the others.",
          "The fourth angle decreases by only 5° because each angle only increases by 5°."
        ],
        "q.5.2-x1.labels": ["First interior angle", "Second interior angle"],
        "q.5.2-x1.ask": "An exterior angle of a triangle is 130°. What could the two interior angles opposite to it be (whole numbers of degrees)? Find several different pairs.",
        "q.5.2-x1.why": "An exterior angle equals the sum of the two opposite interior angles — a shortcut that finds angles without working out the third angle.",
        "q.5.2-x1.challengeText": "The triangle is isosceles (it has two equal angles).",
        "q.5.2-x1.kinds": ["an obtuse triangle", "a right-angled triangle", "an acute triangle"],
        "q.5.2-x2.ask": "A straight line crosses two parallel lines and makes 8 angles. One of the acute angles is 67°. What is the size of each obtuse angle? Solve it in several ways.",
        "q.5.2-x2.why": "Angles on a straight line, corresponding angles and angles around a point are three different tools — use one to check another.",
        "q.5.2-x2.strategies": [
          "Angles on a straight line at the top crossing, then corresponding angles",
          "Corresponding angles first, then angles on a straight line at the bottom crossing",
          "The 8 angles around the two crossings add up to 2 × 360° = 720°"
        ],
        "q.5.2-x2.steps.s1": ["What is the angle on a straight line with the 67° angle at the same crossing?"],
        "q.5.2-x2.steps.s2": ["What is the angle corresponding to the 67° angle at the bottom crossing?"],
        "q.5.2-x2.steps.s3": ["What do the four acute angles add up to?", "So what do the four obtuse angles add up to?"],
        "q.5.2-x3.ask": "Example: two straight lines cross; if one angle is 53°, the angle next to it on the straight line is 127°. If one line is turned so that the 53° angle increases by 20°, what is the angle next to it?",
        "q.5.2-x3.why": "Two angles on a straight line always “share” 180°: as one grows, the other shrinks by the same amount.",
        "q.5.2-x3.reasons": [
          "Angles on a straight line always add up to 180°, so the other angle decreases by exactly 20°.",
          "The angle next to it also increases by 20° because the lines still cross.",
          "The angle next to it does not change because it lies on the line that was not turned."
        ],
        "q.5.3-x1.ask": "Make a problem for drawing quadrilateral ABCD: choose angle A, angle B and angle C (whole numbers of degrees). The problem asks for angle D so that a friend can check it before drawing. All four angles must be less than 180°.",
        "q.5.3-x1.why": "Calculating the missing angle before you pick up the protractor shows at once whether the problem can be drawn.",
        "q.5.3-x1.template": "Angle A = a°, angle B = b°, angle C = c°. Angle D = ?",
        "q.5.3-x1.fields": ["Angle A", "Angle B", "Angle C"],
        "q.5.3-x1.criteria": [
          "At least one right angle (drawn with a set square)",
          "Angle D is obtuse",
          "Angle A + angle B = 180° (then side AD is parallel to side BC)",
          "All four angles are different",
          "One angle is less than 45°"
        ],
        "q.5.3-x2.labels": ["Angle A", "Angle B", "Angle C"],
        "q.5.3-x2.ask": "You only have set squares (angles 30°, 45°, 60°, 90°) and put them together, so you can only draw angles that are multiples of 15°. Quadrilateral ABCD has angle D = 75°. What could angles A, B and C be (all multiples of 15° and less than 180°)?",
        "q.5.3-x2.why": "Knowing that the angles must add up to 360° lets you choose the measurements first and then draw — the right way to plan a construction.",
        "q.5.3-x2.challengeText": "Exactly one right angle, and the other two angles are different.",
        "q.5.3-x2.kinds": ["there is a right angle", "there are two obtuse angles", "there is exactly one obtuse angle"],
        "q.5.3-x3.ask": "Three angles of a quadrilateral are 60°, 75° and 130°. Work out the fourth angle so that you can draw it. Solve it in several ways.",
        "q.5.3-x3.why": "Many routes lead to the same answer; the “compare with 90°” method also helps you estimate quickly while drawing.",
        "q.5.3-x3.strategies": [
          "Add the three angles, then subtract from 360°",
          "Subtract each angle from 360° in turn",
          "Compare each angle with 90° (four right angles add up to 360°)"
        ],
        "q.5.3-x3.steps.s1": ["60 + 75 + 130 = ?"],
        "q.5.3-x3.steps.s2": ["360 − 60 = ?", "300 − 75 = ?"],
        "q.5.3-x3.steps.s3": ["Total difference from 90°: (60 − 90) + (75 − 90) + (130 − 90) = ?"]
      },
      vi: {}
    }
  });
})();
