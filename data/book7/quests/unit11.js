// 🚀 Extension quests — Math 7, unit 11 (Graphs). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. No figures on the quest page: lines are given by equations or tables of values.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };

  window.GAME_QUESTS.push({
    unit: 11,
    sections: {
      "11.1": [
        {
          id: "11.1-x1", type: "make",
          ask: "Tự tạo một đề đổi tiền ngược: “1 đô la đổi được r rupee. T rupee đổi được bao nhiêu đô la?” (r nguyên từ 2 đến 100, T nguyên từ 1 đến 100 000; đáp số có nhiều nhất 2 chữ số thập phân).",
          why: "Hàm số y = rx cho biết cách đổi một chiều; đổi ngược là làm phép tính ngược x = y ÷ r — ý này dùng lại khi giải phương trình.",
          template: "1 đô la = r rupee; đổi T rupee",
          fields: [{ id: "r", label: "Tỉ giá r" }, { id: "t", label: "Số rupee T" }],
          valid: function (f) { return inRange(f.r, 2, 100) && inRange(f.t, 1, 100000) && (f.t * 100) % f.r === 0; },
          solve: function (f) { return f.t / f.r; },
          render: function (f, lang) {
            return lang === "en"
              ? "1 dollar can be exchanged for " + f.r + " rupees. How many dollars do you get for " + f.t + " rupees?"
              : "1 đô la đổi được " + f.r + " rupee. Đổi " + f.t + " rupee được bao nhiêu đô la?";
          },
          criteria: [
            { id: "whole", text: "Đáp số là số nguyên", test: function (f) { return f.t % f.r === 0; } },
            { id: "dec", text: "Đáp số là số thập phân (không nguyên)", test: function (f) { return f.t % f.r !== 0; } },
            { id: "bigT", text: "Số rupee T lớn hơn 1000", test: function (f) { return f.t > 1000; } },
            { id: "rate", text: "Tỉ giá r không phải số tròn chục", test: function (f) { return f.r % 10 !== 0; } },
            { id: "less1", text: "Đổi được ít hơn 1 đô la", test: function (f) { return f.t < f.r; } }
          ],
          sample: { fields: { r: "25", t: "1350" } }
        },
        {
          id: "11.1-x2", type: "whatif", base: 180,
          ask: "Ví dụ: 1 đô la Hồng Kông đổi được 9 rupee, hàm số r = 9d, nên 20 đô la HK đổi được 180 rupee. Nếu đổi chiều ngược lại với cùng tỉ giá thì 180 rupee đổi được bao nhiêu đô la HK?",
          why: "Biết đi theo cả hai chiều của một hàm số giúp em vừa tính được y từ x, vừa tìm lại x từ y.",
          answer: function () { return 180 / 9; },
          reasons: [
            "Đổi ngược thì làm phép tính ngược: chia cho 9, nên d = r ÷ 9 = 20.",
            "Vẫn nhân với 9 vì tỉ giá không đổi: 180 × 9 = 1620.",
            "Đổi ngược thì trừ đi 9: 180 − 9 = 171."
          ],
          reason: 0,
          sample: { guess: "20", reason: 0 }
        },
        {
          id: "11.1-x3", type: "ways",
          ask: "Maryam hơn Jamal 6 tuổi. Tuổi Angelo gấp đôi tuổi Maryam. Khi Jamal 9 tuổi thì Angelo bao nhiêu tuổi? Giải theo nhiều cách.",
          why: "Ghép hai hàm số m = j + 6 và a = 2m thành một hàm a = 2j + 12 giúp tính thẳng từ j mà không qua bước trung gian.",
          strategies: [
            { id: "s1", name: "Tính từng bước: Jamal → Maryam → Angelo", steps: [{ ask: "Khi đó Maryam bao nhiêu tuổi?", answer: 15 }, { answer: 30 }] },
            { id: "s2", name: "Dùng hàm số gộp a = 2j + 12", steps: [{ ask: "2 × 9 = ?", answer: 18 }, { answer: 30 }] },
            { id: "s3", name: "Bắt đầu từ năm Jamal 0 tuổi", steps: [
              { ask: "Khi Jamal 0 tuổi thì Angelo bao nhiêu tuổi?", answer: 12 },
              { ask: "Mỗi năm Jamal thêm 1 tuổi thì Angelo thêm mấy tuổi?", answer: 2 }, { answer: 30 }] }
          ],
          sample: { strategy: "s1", steps: ["15", "30"] }
        }
      ],
      "11.2": [
        {
          id: "11.2-x1", type: "many", arity: 2, ordered: true,
          labels: ["Hệ số góc m", "Tung độ gốc c"],
          ask: "Tìm các đường thẳng y = mx + c (m, c là số nguyên) đi qua điểm (2, 7). Nhập m và c.",
          why: "Qua một điểm có vô số đường thẳng — cần thêm một điểm nữa (hoặc biết m) mới xác định được đúng một đường.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && 2 * v[0] + v[1] === 7; },
          challenge: function (v) { return v[1] < 0; },
          challengeText: "Đường thẳng cắt trục y ở phía dưới trục x (c âm).",
          kinds: [
            { id: "down", text: "đường đi xuống (m âm)", test: function (v) { return v[0] < 0; } },
            { id: "negc", text: "đường đi lên, c âm", test: function (v) { return v[1] < 0; } },
            { id: "posc", text: "đường đi lên hoặc nằm ngang, c dương", test: function () { return true; } }
          ],
          kindSamples: [["3", "1"], ["0", "7"], ["-1", "9"], ["-2", "11"], ["4", "-1"]],
          sample: { values: ["3", "1"] }
        },
        {
          id: "11.2-x2", type: "whatif", base: -12,
          ask: "Ví dụ: điểm (−24, −12) nằm trên đường y = 0,5x. Nếu đổi thành đường y = 0,5x + 3 thì điểm trên đường mới có hoành độ −24 có tung độ bao nhiêu?",
          why: "Cộng thêm c vào hàm số làm cả đường thẳng dịch lên c đơn vị và cắt trục y tại (0, c) — các đường y = 0,5x + c song song nhau.",
          answer: function () { return 0.5 * -24 + 3; },
          reasons: [
            "Mọi điểm dịch lên 3 đơn vị nên tung độ là −12 + 3 = −9.",
            "Độ dốc vẫn là 0,5 nên tung độ không đổi, vẫn −12.",
            "Cộng 3 thì đường dịch xuống: −12 − 3 = −15."
          ],
          reason: 0,
          sample: { guess: "−9", reason: 0 }
        },
        {
          id: "11.2-x3", type: "pattern",
          ask: "Bảng giá trị của một đường thẳng: x = 1, 2, 3, 4 cho y = 1, 4, 7, 10. Tìm y khi x = 10, x = 25, x = 100 và viết quy luật tính y (dùng n thay cho x).",
          why: "Từ bảng giá trị tìm ra hàm số là cách đi ngược của việc lập bảng để vẽ đồ thị — em sẽ đọc được phương trình của một đường thẳng.",
          seq: [1, 4, 7, 10],
          term: function (n) { return 3 * n - 2; },
          askN: [10, 25, 100],
          sample: { terms: { 10: "28", 25: "73", 100: "298" }, rule: "3n-2" }
        }
      ],
      "11.3": [
        {
          id: "11.3-x1", type: "many", arity: 2, ordered: true,
          labels: ["a (đường x = a)", "b (đường y = b)"],
          ask: "Bốn đường thẳng x = 1, x = a, y = −2, y = b (a, b nguyên) tạo thành một hình chữ nhật có diện tích 24 đơn vị vuông. Tìm a và b.",
          why: "Chiều rộng và chiều cao của hình chữ nhật tạo bởi các đường song song với trục chính là khoảng cách giữa hai giá trị x và giữa hai giá trị y.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && Math.abs(v[0] - 1) * Math.abs(v[1] + 2) === 24; },
          challenge: function (v) { return v[0] < 0 && v[1] > 0; },
          challengeText: "Gốc tọa độ (0, 0) nằm bên trong hình chữ nhật.",
          kinds: [
            { id: "ru", text: "nằm bên phải và phía trên điểm (1, −2)", test: function (v) { return v[0] > 1 && v[1] > -2; } },
            { id: "rd", text: "nằm bên phải và phía dưới điểm (1, −2)", test: function (v) { return v[0] > 1; } },
            { id: "lu", text: "nằm bên trái và phía trên điểm (1, −2)", test: function (v) { return v[1] > -2; } },
            { id: "ld", text: "nằm bên trái và phía dưới điểm (1, −2)", test: function () { return true; } }
          ],
          kindSamples: [["7", "2"], ["5", "4"], ["7", "-6"], ["-5", "2"], ["-3", "-8"]],
          sample: { values: ["7", "2"] }
        },
        {
          id: "11.3-x2", type: "ways",
          ask: "Bốn đường x = −3, x = 5, y = −4, y = 2 tạo thành một hình chữ nhật. Tính diện tích của nó theo nhiều cách.",
          why: "Hai trục chia hình chữ nhật thành các phần nhỏ; cộng các phần là cách kiểm tra lại phép tính chiều rộng × chiều cao.",
          strategies: [
            { id: "s1", name: "Chiều rộng × chiều cao", steps: [
              { ask: "Chiều rộng (khoảng cách từ x = −3 đến x = 5)?", answer: 8 },
              { ask: "Chiều cao (khoảng cách từ y = −4 đến y = 2)?", answer: 6 }, { answer: 48 }] },
            { id: "s2", name: "Trục y chia hình thành phần trái và phần phải", steps: [
              { ask: "Diện tích phần bên phải trục y?", answer: 30 },
              { ask: "Diện tích phần bên trái trục y?", answer: 18 }, { answer: 48 }] },
            { id: "s3", name: "Trục x chia hình thành phần trên và phần dưới", steps: [
              { ask: "Diện tích phần phía trên trục x?", answer: 16 },
              { ask: "Diện tích phần phía dưới trục x?", answer: 32 }, { answer: 48 }] }
          ],
          sample: { strategy: "s1", steps: ["8", "6", "48"] }
        },
        {
          id: "11.3-x3", type: "whatif", base: 45,
          ask: "Ví dụ: các đường x = 5, x = −4, y = 1, y = −4 tạo hình chữ nhật diện tích 45 đơn vị vuông. Nếu thay đường y = −4 bằng đường y = 4 thì diện tích là bao nhiêu?",
          why: "Khoảng cách giữa hai đường nằm ngang phụ thuộc vào vị trí của chúng, không phải chỉ vào các chữ số — hãy luôn tính hiệu hai tung độ.",
          answer: function () { return (5 - -4) * Math.abs(4 - 1); },
          reasons: [
            "Chiều cao giờ là khoảng cách từ y = 1 đến y = 4, chỉ còn 3, nên diện tích là 9 × 3 = 27.",
            "Đổi dấu không làm đổi khoảng cách nên diện tích vẫn là 45.",
            "Chiều cao thành 4 + 4 = 8 nên diện tích là 9 × 8 = 72."
          ],
          reason: 0,
          sample: { guess: "27", reason: 0 }
        }
      ],
      "11.4": [
        {
          id: "11.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Giá mỗi km a (nghìn đồng)", "Phí mở cửa c (nghìn đồng)"],
          ask: "Taxi tính phí mở cửa c nghìn đồng cộng a nghìn đồng mỗi km (a, c nguyên dương). Một chuyến 8 km hết 100 nghìn đồng. Tìm các cặp a, c có thể.",
          why: "Đồ thị chi phí của taxi là đường thẳng: a là độ dốc (tốc độ thay đổi), c là điểm cắt trục tung (giá trị ban đầu).",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] > 0 && v[1] > 0 && 8 * v[0] + v[1] === 100; },
          challenge: function (v) { return v[1] === 2 * v[0]; },
          challengeText: "Phí mở cửa bằng đúng tiền đi 2 km.",
          sample: { values: ["10", "20"] }
        },
        {
          id: "11.4-x2", type: "pattern",
          ask: "Một bể có 200 lít nước. Nước chảy ra đều, sau phút 1, 2, 3 bể còn 192, 184, 176 lít. Bể còn bao nhiêu lít sau phút 5, phút 12, phút 25? Viết quy luật theo n.",
          why: "Đồ thị đi xuống đều có độ dốc âm: lượng nước giảm 8 lít mỗi phút, và em đoán được lúc bể cạn mà không cần vẽ.",
          seq: [192, 184, 176],
          term: function (n) { return 200 - 8 * n; },
          askN: [5, 12, 25],
          sample: { terms: { 5: "160", 12: "104", 25: "0" }, rule: "200-8n" }
        },
        {
          id: "11.4-x3", type: "whatif", base: 4,
          ask: "Ví dụ: gọi điện tốn 0,4 đô la mỗi phút (c = 0,4t), nên cuộc gọi 10 phút tốn 4 đô la. Nếu mỗi cuộc gọi còn tính thêm phí kết nối 1,5 đô la thì cuộc gọi 10 phút tốn bao nhiêu?",
          why: "Phí cố định làm đồ thị cắt trục tung cao hơn nhưng không đổi độ dốc — đọc đúng hai con số này là đọc được mọi đồ thị đường thẳng.",
          answer: function () { return (4 * 10 + 15) / 10; },
          reasons: [
            "Đường thẳng dịch lên 1,5 nhưng độ dốc giữ nguyên: 4 + 1,5 = 5,5 đô la.",
            "Phí 1,5 tính cho mỗi phút: (0,4 + 1,5) × 10 = 19 đô la.",
            "Phí kết nối làm đồ thị dốc gấp đôi nên tốn 8 đô la."
          ],
          reason: 0,
          sample: { guess: "5,5", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.11.1-x1.ask": "Make your own reverse currency question: “1 dollar can be exchanged for r rupees. How many dollars do you get for T rupees?” (r a whole number from 2 to 100, T a whole number from 1 to 100 000; the answer has at most 2 decimal places).",
        "q.11.1-x1.why": "The function y = rx changes money one way; changing back uses the inverse operation x = y ÷ r — an idea you reuse when solving equations.",
        "q.11.1-x1.template": "1 dollar = r rupees; exchange T rupees",
        "q.11.1-x1.fields": ["Exchange rate r", "Rupees T"],
        "q.11.1-x1.criteria": [
          "The answer is a whole number", "The answer is a decimal (not whole)", "T is greater than 1000",
          "The rate r is not a multiple of 10", "You get less than 1 dollar"
        ],
        "q.11.1-x2.ask": "Example: 1 Hong Kong dollar can be exchanged for 9 rupees, so r = 9d and 20 HK dollars give 180 rupees. Exchanging the other way at the same rate, how many HK dollars do you get for 180 rupees?",
        "q.11.1-x2.why": "Using a function in both directions lets you work out y from x and also find x again from y.",
        "q.11.1-x2.reasons": [
          "Going back uses the inverse operation: divide by 9, so d = r ÷ 9 = 20.",
          "Still multiply by 9 because the rate is the same: 180 × 9 = 1620.",
          "Going back means subtract 9: 180 − 9 = 171."
        ],
        "q.11.1-x3.ask": "Maryam is 6 years older than Jamal. Angelo is twice as old as Maryam. When Jamal is 9, how old is Angelo? Solve it in several ways.",
        "q.11.1-x3.why": "Combining the functions m = j + 6 and a = 2m into a = 2j + 12 lets you go straight from j without the middle step.",
        "q.11.1-x3.strategies": ["Step by step: Jamal → Maryam → Angelo", "Use the combined function a = 2j + 12", "Start from when Jamal is 0"],
        "q.11.1-x3.steps.s1": ["How old is Maryam then?"],
        "q.11.1-x3.steps.s2": ["2 × 9 = ?"],
        "q.11.1-x3.steps.s3": ["When Jamal is 0, how old is Angelo?", "Each year Jamal gets 1 year older; how many years older does Angelo get?"],
        "q.11.2-x1.labels": ["Gradient m", "y-intercept c"],
        "q.11.2-x1.ask": "Find lines y = mx + c (m and c integers) that pass through the point (2, 7). Enter m and c.",
        "q.11.2-x1.why": "Infinitely many lines pass through one point — you need another point (or to know m) to fix exactly one line.",
        "q.11.2-x1.challengeText": "The line crosses the y-axis below the x-axis (c is negative).",
        "q.11.2-x1.kinds": ["the line slopes down (m negative)", "the line slopes up, c negative", "the line slopes up or is horizontal, c positive"],
        "q.11.2-x2.ask": "Example: the point (−24, −12) is on the line y = 0.5x. If the line becomes y = 0.5x + 3, what is the y-coordinate of the point on the new line with x-coordinate −24?",
        "q.11.2-x2.why": "Adding c to the function moves the whole line up c units so it crosses the y-axis at (0, c) — the lines y = 0.5x + c are parallel.",
        "q.11.2-x2.reasons": [
          "Every point moves up 3 units, so the y-coordinate is −12 + 3 = −9.",
          "The gradient is still 0.5, so the y-coordinate stays −12.",
          "Adding 3 moves the line down: −12 − 3 = −15."
        ],
        "q.11.2-x3.ask": "A table of values for a straight line: x = 1, 2, 3, 4 gives y = 1, 4, 7, 10. Find y when x = 10, x = 25 and x = 100, and write the rule for y (use n instead of x).",
        "q.11.2-x3.why": "Finding the function from a table of values reverses making a table to draw a graph — you will be able to read the equation of a line.",
        "q.11.3-x1.labels": ["a (line x = a)", "b (line y = b)"],
        "q.11.3-x1.ask": "The four lines x = 1, x = a, y = −2 and y = b (a, b integers) make a rectangle with an area of 24 square units. Find a and b.",
        "q.11.3-x1.why": "The width and height of a rectangle made by lines parallel to the axes are the distances between the two x-values and between the two y-values.",
        "q.11.3-x1.challengeText": "The origin (0, 0) is inside the rectangle.",
        "q.11.3-x1.kinds": ["to the right of and above the point (1, −2)", "to the right of and below the point (1, −2)", "to the left of and above the point (1, −2)", "to the left of and below the point (1, −2)"],
        "q.11.3-x2.ask": "The four lines x = −3, x = 5, y = −4 and y = 2 make a rectangle. Work out its area in several ways.",
        "q.11.3-x2.why": "The axes split the rectangle into smaller parts; adding the parts checks the width × height calculation.",
        "q.11.3-x2.strategies": ["Width × height", "The y-axis splits it into a left part and a right part", "The x-axis splits it into a top part and a bottom part"],
        "q.11.3-x2.steps.s1": ["Width (distance from x = −3 to x = 5)?", "Height (distance from y = −4 to y = 2)?"],
        "q.11.3-x2.steps.s2": ["Area of the part to the right of the y-axis?", "Area of the part to the left of the y-axis?"],
        "q.11.3-x2.steps.s3": ["Area of the part above the x-axis?", "Area of the part below the x-axis?"],
        "q.11.3-x3.ask": "Example: the lines x = 5, x = −4, y = 1 and y = −4 make a rectangle with an area of 45 square units. If the line y = −4 is replaced by the line y = 4, what is the area?",
        "q.11.3-x3.why": "The distance between two horizontal lines depends on where they are, not just on the digits — always find the difference of the two y-values.",
        "q.11.3-x3.reasons": [
          "The height is now the distance from y = 1 to y = 4, only 3, so the area is 9 × 3 = 27.",
          "Changing the sign does not change the distance, so the area is still 45.",
          "The height becomes 4 + 4 = 8, so the area is 9 × 8 = 72."
        ],
        "q.11.4-x1.labels": ["Cost per km a (thousand dong)", "Fixed charge c (thousand dong)"],
        "q.11.4-x1.ask": "A taxi charges a fixed charge of c thousand dong plus a thousand dong per km (a, c positive whole numbers). An 8 km journey costs 100 thousand dong. Find possible pairs a, c.",
        "q.11.4-x1.why": "The graph of a taxi's cost is a straight line: a is the gradient (rate of change) and c is where it crosses the vertical axis (the starting value).",
        "q.11.4-x1.challengeText": "The fixed charge is exactly the cost of 2 km.",
        "q.11.4-x2.ask": "A tank holds 200 litres of water. Water flows out steadily: after minutes 1, 2, 3 there are 192, 184, 176 litres left. How many litres are left after minute 5, minute 12 and minute 25? Write the rule in terms of n.",
        "q.11.4-x2.why": "A graph going steadily down has a negative gradient: the water drops 8 litres a minute, and you can predict when the tank is empty without drawing.",
        "q.11.4-x3.ask": "Example: a phone call costs $0.4 per minute (c = 0.4t), so a 10-minute call costs $4. If every call also has a connection fee of $1.5, how much does a 10-minute call cost?",
        "q.11.4-x3.why": "A fixed fee makes the graph cross the vertical axis higher but keeps the same gradient — reading these two numbers lets you read any straight-line graph.",
        "q.11.4-x3.reasons": [
          "The line moves up 1.5 but the gradient stays the same: 4 + 1.5 = $5.5.",
          "The fee of 1.5 is charged every minute: (0.4 + 1.5) × 10 = $19.",
          "The connection fee makes the graph twice as steep, so it costs $8."
        ]
      },
      vi: {}
    }
  });
})();
