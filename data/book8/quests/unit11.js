// 🚀 Extension quests — Math 8, unit 11 (Graphs). Schema: MATH_QUESTS_GUIDE.md. Own wording, built only from
// each section's key ideas. No figures on the quest page: every graph is given by its equation or a table.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const neg = function (x) { return String(x).replace("-", "−"); };
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  // "y = mx + c" written the way a textbook would (no 1x, no + 0, a real minus sign)
  const line = function (m, c) {
    const mx = m === 1 ? "x" : m === -1 ? "−x" : neg(m) + "x";
    return "y = " + mx + (c === 0 ? "" : c < 0 ? " − " + Math.abs(c) : " + " + c);
  };
  const xCut = function (f) { return -f.c / f.m + 0; }; // + 0 turns −0 into 0

  window.GAME_QUESTS.push({
    unit: 11,
    sections: {
      "11.1": [
        {
          id: "11.1-x1", type: "ways",
          ask: "Thợ sửa ống nước lấy phí cố định 45 nghìn đồng cộng 30 nghìn đồng mỗi giờ làm. Một khách trả tất cả 180 nghìn đồng. Thợ đã làm bao nhiêu giờ? Giải theo nhiều cách.",
          why: "Biết đầu ra của hàm chi phí thì giải phương trình để tìm đầu vào — thử bảng giá trị là cách kiểm tra lại phép giải.",
          strategies: [
            { id: "s1", name: "Bỏ phí cố định trước rồi chia", steps: [{ ask: "Trừ phí cố định, còn bao nhiêu nghìn đồng tiền công theo giờ?", answer: 135 }, { answer: 4.5 }] },
            { id: "s2", name: "Thử 4 giờ rồi xem còn dư", steps: [
              { ask: "Làm 4 giờ thì hết bao nhiêu nghìn đồng?", answer: 165 },
              { ask: "Còn dư bao nhiêu nghìn đồng so với 180?", answer: 15 }, { answer: 4.5 }] },
            { id: "s3", name: "Thử 5 giờ rồi lùi lại", steps: [{ ask: "Làm 5 giờ thì hết bao nhiêu nghìn đồng?", answer: 195 }, { answer: 4.5 }] }
          ],
          sample: { strategy: "s1", steps: ["135", "4,5"] }
        },
        {
          id: "11.1-x2", type: "whatif", base: 105,
          ask: "Ví dụ: thuê máy đào hết phí cố định 35 đô cộng 10 đô mỗi ngày (y = 10n + 35), nên thuê 7 ngày hết 105 đô. Nếu thuê gấp đôi số ngày (14 ngày) thì hết bao nhiêu đô?",
          why: "Khi có phần cố định, gấp đôi đầu vào không làm gấp đôi đầu ra — chỉ phần thay đổi theo n mới gấp đôi.",
          answer: function () { return 10 * 14 + 35; },
          reasons: [
            "Chỉ tiền theo ngày gấp đôi, phí cố định giữ nguyên: 140 + 35 = 175 đô.",
            "Gấp đôi số ngày thì gấp đôi số tiền: 2 × 105 = 210 đô.",
            "Chỉ tính tiền theo ngày: 14 × 10 = 140 đô."
          ],
          reason: 0,
          sample: { guess: "175", reason: 0 }
        },
        {
          id: "11.1-x3", type: "pattern",
          ask: "Taxi thu phí mở cửa 12 nghìn đồng và 15 nghìn đồng mỗi km. Đi 1, 2, 3 km hết 27, 42, 57 nghìn đồng. Đi 6 km, 20 km, 45 km hết bao nhiêu nghìn đồng? Viết hàm chi phí theo n km.",
          why: "Tổng chi phí = giá mỗi đơn vị × số đơn vị + phần cố định — dạng hàm em sẽ vẽ thành đường thẳng ở các chặng sau.",
          seq: [27, 42, 57],
          term: function (n) { return 15 * n + 12; },
          askN: [6, 20, 45],
          sample: { terms: { 6: "102", 20: "312", 45: "687" }, rule: "15n+12" }
        }
      ],
      "11.2": [
        {
          id: "11.2-x1", type: "many", arity: 2, ordered: true,
          labels: ["x", "y"],
          ask: "Tìm các điểm (x, y) có tọa độ là số nguyên nằm trên đồ thị y = −2x + 5, với cả x và y đều từ −10 đến 10.",
          why: "Một điểm nằm trên đồ thị khi thay x vào hàm ra đúng y — đó cũng là cách em lập bảng giá trị để vẽ đường thẳng.",
          check: function (v) { return inRange(v[0], -10, 10) && inRange(v[1], -10, 10) && v[1] === -2 * v[0] + 5; },
          challenge: function (v) { return v[1] === v[0] - 4; },
          challengeText: "Điểm đó cũng nằm trên đường thẳng y = x − 4.",
          kinds: [
            { id: "axis", text: "nằm trên trục tọa độ", test: function (v) { return v[0] === 0 || v[1] === 0; } },
            { id: "q2", text: "nằm trong góc phần tư thứ hai", test: function (v) { return v[0] < 0; } },
            { id: "q1", text: "nằm trong góc phần tư thứ nhất", test: function (v) { return v[1] > 0; } },
            { id: "q4", text: "nằm trong góc phần tư thứ tư", test: function () { return true; } }
          ],
          kindSamples: [["-2", "9"], ["-1", "7"], ["0", "5"], ["1", "3"], ["3", "-1"]],
          sample: { values: ["1", "3"] }
        },
        {
          id: "11.2-x2", type: "whatif", base: -0.5,
          ask: "Ví dụ: đường y = 8x + 4 cắt trục y tại 4 và cắt trục x tại x = −0,5. Nếu đổi thành y = 8x − 4 thì đường cắt trục x tại x bằng bao nhiêu?",
          why: "Giao với trục x là chỗ y = 0 — giải phương trình đó là dự đoán được giao điểm mà không cần vẽ.",
          answer: function () { return 4 / 8; },
          reasons: [
            "Cho y = 0: 8x − 4 = 0 nên x = 0,5.",
            "Hệ số 8 không đổi nên giao với trục x vẫn là −0,5.",
            "Đường cắt trục x tại −4, giống số ở cuối phương trình."
          ],
          reason: 0,
          sample: { guess: "0,5", reason: 0 }
        },
        {
          id: "11.2-x3", type: "ways",
          ask: "Bảng giá trị của một đường thẳng: x = −2, 0, 1 cho y = −11, −3, 1. Tìm y khi x = 7. Giải theo nhiều cách.",
          why: "Bảng giá trị, phương trình và đồ thị là ba cách nhìn cùng một hàm — chuyển qua lại giữa chúng giúp em điền bảng nhanh và kiểm tra lỗi.",
          strategies: [
            { id: "s1", name: "Tìm phương trình y = 4x + c rồi thay x = 7", steps: [{ ask: "Số c trong y = 4x + c là bao nhiêu?", answer: -3 }, { answer: 25 }] },
            { id: "s2", name: "Đi tiếp từ điểm có x = 0", steps: [{ ask: "Từ x = 0 đến x = 7, y tăng thêm bao nhiêu?", answer: 28 }, { answer: 25 }] },
            { id: "s3", name: "Đi tiếp từ điểm có x = −2", steps: [{ ask: "Từ x = −2 đến x = 7 có bao nhiêu bước tăng 1?", answer: 9 }, { answer: 25 }] }
          ],
          sample: { strategy: "s1", steps: ["-3", "25"] }
        }
      ],
      "11.3": [
        {
          id: "11.3-x1", type: "make",
          ask: "Tự tạo một đường thẳng y = mx + c (m, c nguyên từ −10 đến 10, m ≠ 0). Đề hỏi đường cắt trục x tại điểm có hoành độ bao nhiêu.",
          why: "Chọn m và c rồi xem đường đi lên hay xuống, cắt trục x ở đâu giúp em hiểu vai trò của hệ số góc và tung độ gốc.",
          template: "y = mx + c cắt trục x ở đâu?",
          fields: [{ id: "m", label: "Hệ số góc m" }, { id: "c", label: "Tung độ gốc c" }],
          valid: function (f) { return inRange(f.m, -10, 10) && f.m !== 0 && inRange(f.c, -10, 10); },
          solve: function (f) { return xCut(f); },
          render: function (f, lang) {
            return lang === "en"
              ? "The line " + line(f.m, f.c) + " crosses the x-axis at x = ?"
              : "Đường thẳng " + line(f.m, f.c) + " cắt trục x tại điểm có hoành độ x = ?";
          },
          criteria: [
            { id: "down", text: "Đường đi xuống (hệ số góc âm)", test: function (f) { return f.m < 0; } },
            { id: "pos", text: "Đường cắt trục x ở bên phải gốc tọa độ (x > 0)", test: function (f) { return xCut(f) > 0; } },
            { id: "int", text: "Hoành độ giao điểm là số nguyên", test: function (f) { return f.c % f.m === 0; } },
            { id: "par", text: "Song song với đường y = 3x + 1 (nhưng không trùng)", test: function (f) { return f.m === 3 && f.c !== 1; } },
            { id: "pt", text: "Đường đi qua điểm (2, 5)", test: function (f) { return 2 * f.m + f.c === 5; } }
          ],
          sample: { fields: { m: "-2", c: "9" } }
        },
        {
          id: "11.3-x2", type: "many", arity: 2, ordered: true,
          labels: ["Hệ số góc m", "Tung độ gốc c"],
          ask: "Tìm đường thẳng y = mx + c (m, c nguyên, m ≠ 0) đi qua điểm (1, 6) và cắt trục x tại điểm có hoành độ là số nguyên.",
          why: "Thay tọa độ một điểm vào y = mx + c cho một liên hệ giữa m và c; tìm giao với trục x lại cần chia c cho m — hai ý kết hợp làm số đường hợp lệ ít đi.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] !== 0 && v[0] + v[1] === 6 && v[1] % v[0] === 0; },
          challenge: function (v) { return 3 * v[0] + v[1] === 0; },
          challengeText: "Đường cắt trục x đúng tại x = 3.",
          kinds: [
            { id: "right", text: "cắt trục x bên phải gốc (m âm)", test: function (v) { return v[0] < 0; } },
            { id: "origin", text: "đi qua gốc tọa độ", test: function (v) { return v[1] === 0; } },
            { id: "left", text: "cắt trục x bên trái gốc", test: function () { return true; } }
          ],
          kindSamples: [["-1", "7"], ["-2", "8"], ["6", "0"], ["1", "5"], ["2", "4"]],
          sample: { values: ["2", "4"] }
        },
        {
          id: "11.3-x3", type: "whatif", base: 14,
          ask: "Ví dụ: đường y = 3x + 2 đi qua điểm (4, 14). Một đường song song với nó cắt trục y tại (0, −5). Điểm có x = 4 trên đường mới có y bằng bao nhiêu?",
          why: "Các đường song song có cùng hệ số góc; khoảng cách theo chiều dọc giữa chúng bằng hiệu hai tung độ gốc ở mọi x.",
          answer: function () { return 3 * 4 - 5; },
          reasons: [
            "Song song nên cùng hệ số góc 3: đường mới là y = 3x − 5, với x = 4 thì y = 7.",
            "Đường mới thấp hơn 5 đơn vị nên y = 14 − 5 = 9.",
            "Song song thì mọi điểm có cùng x đều có cùng y: vẫn là 14."
          ],
          reason: 0,
          sample: { guess: "7", reason: 0 }
        }
      ],
      "11.4": [
        {
          id: "11.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Giá mỗi giờ a", "Phí cố định b"],
          ask: "Công ty A cho thuê thuyền với chi phí c = 40n + 15 (nghìn đồng, n giờ). Công ty B tính c = an + b (a, b nguyên dương). Tìm a, b sao cho thuê 3 giờ thì B rẻ hơn A, nhưng thuê 10 giờ thì B đắt hơn A.",
          why: "Hai đường chi phí cắt nhau ở chỗ hai giá bằng nhau; trước và sau giao điểm, công ty rẻ hơn đổi chỗ cho nhau.",
          check: function (v) { return isInt(v[0]) && isInt(v[1]) && v[0] > 0 && v[1] > 0 && 3 * v[0] + v[1] < 135 && 10 * v[0] + v[1] > 415; },
          challenge: function (v) { return 5 * v[0] + v[1] === 215; },
          challengeText: "Hai công ty bằng giá khi thuê đúng 5 giờ.",
          sample: { values: ["42", "3"] }
        },
        {
          id: "11.4-x2", type: "ways",
          ask: "Lan đi bộ từ nhà với vận tốc 80 m mỗi phút. Sau đó 10 phút, Minh đạp xe từ nhà Lan đuổi theo với vận tốc 240 m mỗi phút. Tính từ lúc Lan xuất phát, sau bao nhiêu phút thì Minh đuổi kịp? Giải theo nhiều cách.",
          why: "Trên đồ thị quãng đường – thời gian, chỗ hai người gặp nhau là giao điểm của hai đường — có thể tìm bằng lập luận, phương trình hay bảng giá trị.",
          strategies: [
            { id: "s1", name: "Lập luận khoảng cách được rút ngắn", steps: [
              { ask: "Lúc Minh xuất phát, Lan đã đi được bao nhiêu m?", answer: 800 },
              { ask: "Mỗi phút Minh rút ngắn khoảng cách bao nhiêu m?", answer: 160 },
              { ask: "Minh cần bao nhiêu phút để đuổi kịp?", answer: 5 }, { answer: 15 }] },
            { id: "s2", name: "Viết hàm quãng đường của Minh: d = 240t − ?", steps: [{ ask: "Số còn thiếu trong d = 240t − ? là bao nhiêu?", answer: 2400 }, { answer: 15 }] },
            { id: "s3", name: "Lập bảng giá trị", steps: [
              { ask: "Ở phút thứ 14, Lan đã đi được bao nhiêu m?", answer: 1120 },
              { ask: "Ở phút thứ 14, Minh đã đi được bao nhiêu m?", answer: 960 }, { answer: 15 }] }
          ],
          sample: { strategy: "s2", steps: ["2400", "15"] }
        },
        {
          id: "11.4-x3", type: "whatif", base: 4,
          ask: "Ví dụ: taxi A thu 12 đô cố định và 2 đô mỗi km, taxi B thu 4 đô cố định và 4 đô mỗi km; hai đường giá cắt nhau tại 4 km. Nếu taxi B giảm còn 3 đô mỗi km (vẫn 4 đô cố định) thì hai taxi bằng giá khi đi bao nhiêu km?",
          why: "Giao điểm phụ thuộc vào cả phần cố định lẫn độ dốc của hai đường — đổi độ dốc thì giao điểm dịch chuyển.",
          answer: function () { return (12 - 4) / (3 - 2); },
          reasons: [
            "B đắt hơn A mỗi km chỉ còn 1 đô, cần 8 km mới bù được 8 đô chênh lệch phí cố định.",
            "Giá mỗi km không ảnh hưởng đến giao điểm, vẫn là 4 km.",
            "B rẻ hơn nên hai giá gặp nhau sớm hơn, khoảng 3 km."
          ],
          reason: 0,
          sample: { guess: "8", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.11.1-x1.ask": "A plumber charges a fixed fee of 45 thousand dong plus 30 thousand dong per hour. A customer pays 180 thousand dong altogether. How many hours did the plumber work? Solve it in several ways.",
        "q.11.1-x1.why": "When you know the output of a cost function, you solve an equation to find the input — trying a table of values checks the solution.",
        "q.11.1-x1.strategies": ["Take off the fixed fee first, then divide", "Try 4 hours, then look at what is left", "Try 5 hours, then go back"],
        "q.11.1-x1.steps.s1": ["After taking off the fixed fee, how many thousand dong are left for the hours worked?"],
        "q.11.1-x1.steps.s2": ["How many thousand dong do 4 hours cost?", "How many thousand dong are left over compared with 180?"],
        "q.11.1-x1.steps.s3": ["How many thousand dong do 5 hours cost?"],
        "q.11.1-x2.ask": "Example: hiring a digger costs a fixed fee of $35 plus $10 per day (y = 10n + 35), so hiring it for 7 days costs $105. If it is hired for twice as many days (14 days), how many dollars does it cost?",
        "q.11.1-x2.why": "When there is a fixed part, doubling the input does not double the output — only the part that changes with n doubles.",
        "q.11.1-x2.reasons": [
          "Only the daily cost doubles and the fixed fee stays the same: 140 + 35 = $175.",
          "Twice as many days means twice the cost: 2 × 105 = $210.",
          "Only count the daily cost: 14 × 10 = $140."
        ],
        "q.11.1-x3.ask": "A taxi charges a starting fee of 12 thousand dong and 15 thousand dong per km. Journeys of 1, 2, 3 km cost 27, 42, 57 thousand dong. How many thousand dong do journeys of 6 km, 20 km and 45 km cost? Write the cost function for n km.",
        "q.11.1-x3.why": "Total cost = cost per unit × number of units + fixed part — a function you will draw as a straight line in the next sections.",
        "q.11.2-x1.labels": ["x", "y"],
        "q.11.2-x1.kinds": ["on an axis", "in the second quadrant", "in the first quadrant", "in the fourth quadrant"],
        "q.11.2-x1.ask": "Find points (x, y) with integer coordinates on the graph of y = −2x + 5, where x and y are both from −10 to 10.",
        "q.11.2-x1.why": "A point is on a graph when substituting x into the function gives exactly y — that is also how you make a table of values to draw a straight line.",
        "q.11.2-x1.challengeText": "The point is also on the line y = x − 4.",
        "q.11.2-x2.ask": "Example: the line y = 8x + 4 crosses the y-axis at 4 and crosses the x-axis at x = −0.5. If it is changed to y = 8x − 4, at what value of x does the line cross the x-axis?",
        "q.11.2-x2.why": "The line crosses the x-axis where y = 0 — solving that equation predicts the crossing point without drawing.",
        "q.11.2-x2.reasons": [
          "Put y = 0: 8x − 4 = 0, so x = 0.5.",
          "The 8 has not changed, so it still crosses the x-axis at −0.5.",
          "The line crosses the x-axis at −4, the number at the end of the equation."
        ],
        "q.11.2-x3.ask": "A table of values for a straight line: x = −2, 0, 1 gives y = −11, −3, 1. Find y when x = 7. Solve it in several ways.",
        "q.11.2-x3.why": "A table of values, an equation and a graph are three views of the same function — moving between them helps you fill in tables quickly and spot mistakes.",
        "q.11.2-x3.strategies": ["Find the equation y = 4x + c, then substitute x = 7", "Continue from the point where x = 0", "Continue from the point where x = −2"],
        "q.11.2-x3.steps.s1": ["What is c in y = 4x + c?"],
        "q.11.2-x3.steps.s2": ["From x = 0 to x = 7, how much does y increase?"],
        "q.11.2-x3.steps.s3": ["From x = −2 to x = 7, how many steps of 1 are there?"],
        "q.11.3-x1.ask": "Make your own straight line y = mx + c (m, c integers from −10 to 10, m ≠ 0). The question asks where the line crosses the x-axis.",
        "q.11.3-x1.why": "Choosing m and c and then seeing whether the line goes up or down and where it crosses the x-axis helps you understand the gradient and the y-intercept.",
        "q.11.3-x1.template": "Where does y = mx + c cross the x-axis?",
        "q.11.3-x1.fields": ["Gradient m", "y-intercept c"],
        "q.11.3-x1.criteria": [
          "The line slopes down (negative gradient)",
          "The line crosses the x-axis to the right of the origin (x > 0)",
          "The x-coordinate of the crossing point is an integer",
          "Parallel to the line y = 3x + 1 (but not the same line)",
          "The line passes through the point (2, 5)"
        ],
        "q.11.3-x2.labels": ["Gradient m", "y-intercept c"],
        "q.11.3-x2.kinds": ["crosses the x-axis right of the origin (m negative)", "passes through the origin", "crosses the x-axis left of the origin"],
        "q.11.3-x2.ask": "Find straight lines y = mx + c (m, c integers, m ≠ 0) that pass through the point (1, 6) and cross the x-axis at a point whose x-coordinate is an integer.",
        "q.11.3-x2.why": "Substituting a point into y = mx + c links m and c; finding where the line crosses the x-axis needs c divided by m — together the two ideas limit the possible lines.",
        "q.11.3-x2.challengeText": "The line crosses the x-axis exactly at x = 3.",
        "q.11.3-x3.ask": "Example: the line y = 3x + 2 passes through the point (4, 14). A line parallel to it crosses the y-axis at (0, −5). What is y at the point with x = 4 on the new line?",
        "q.11.3-x3.why": "Parallel lines have the same gradient; the vertical distance between them is the difference of the two y-intercepts at every x.",
        "q.11.3-x3.reasons": [
          "Parallel means the same gradient 3: the new line is y = 3x − 5, so when x = 4, y = 7.",
          "The new line is 5 units lower, so y = 14 − 5 = 9.",
          "Parallel lines have the same y for the same x: still 14."
        ],
        "q.11.4-x1.labels": ["Cost per hour a", "Fixed charge b"],
        "q.11.4-x1.ask": "Company A hires out boats for c = 40n + 15 (thousand dong, n hours). Company B charges c = an + b (a, b positive whole numbers). Find a, b so that for 3 hours B is cheaper than A, but for 10 hours B is more expensive than A.",
        "q.11.4-x1.why": "Two cost lines cross where the two prices are equal; before and after the crossing point, the cheaper company swaps over.",
        "q.11.4-x1.challengeText": "The two companies cost the same for exactly 5 hours.",
        "q.11.4-x2.ask": "Lan walks from home at 80 m per minute. 10 minutes later, Minh cycles from Lan's home after her at 240 m per minute. Counting from when Lan set off, after how many minutes does Minh catch up? Solve it in several ways.",
        "q.11.4-x2.why": "On a distance–time graph, the place where two people meet is where the two lines cross — you can find it by reasoning, with an equation or with a table of values.",
        "q.11.4-x2.strategies": ["Reason about the gap closing", "Write Minh's distance function: d = 240t − ?", "Make a table of values"],
        "q.11.4-x2.steps.s1": ["When Minh sets off, how many metres has Lan walked?", "By how many metres does Minh close the gap each minute?", "How many minutes does Minh need to catch up?"],
        "q.11.4-x2.steps.s2": ["What is the missing number in d = 240t − ?"],
        "q.11.4-x2.steps.s3": ["At minute 14, how many metres has Lan walked?", "At minute 14, how many metres has Minh cycled?"],
        "q.11.4-x3.ask": "Example: taxi A charges $12 fixed and $2 per km, taxi B charges $4 fixed and $4 per km; the two price lines cross at 4 km. If taxi B lowers its price to $3 per km (still $4 fixed), for how many km do the two taxis cost the same?",
        "q.11.4-x3.why": "The crossing point depends on both the fixed part and the steepness of the two lines — change a gradient and the crossing point moves.",
        "q.11.4-x3.reasons": [
          "B now costs only $1 more per km than A, so it takes 8 km to make up the $8 difference in fixed charges.",
          "The price per km does not affect the crossing point, so it is still 4 km.",
          "B is cheaper, so the prices meet sooner, at about 3 km."
        ]
      },
      vi: {}
    }
  });
})();
