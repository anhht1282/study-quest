(function () {
  const Q = (id, type, diff, skill, q, answer, hints, explain, o) =>
    Object.assign({ id, type, diff, skill, source: "book", lang: "en", q, svg: null, choices: null, answer,
      accept: [], tol: 0, unitLabel: "", hints, explain, why: null }, o || {});
  const V = { source: "vn", lang: "vi" };
  const V3 = (o) => Object.assign({}, V, o || {});

  const SVG_TRAP = "<svg viewBox='0 0 260 160' xmlns='http://www.w3.org/2000/svg'><polygon points='50,125 210,125 170,40 90,40' fill='none' stroke='currentColor' stroke-width='3'/><text x='130' y='148' font-size='11' fill='currentColor' text-anchor='middle'>isosceles trapezium</text></svg>";
  const SVG_CIRC = "<svg viewBox='0 0 260 160' xmlns='http://www.w3.org/2000/svg'><circle cx='130' cy='85' r='60' fill='none' stroke='currentColor' stroke-width='2.5'/><polygon points='70,85 190,85 160,33' fill='none' stroke='currentColor' stroke-width='2.5'/><text x='58' y='100' font-size='12' fill='currentColor'>A</text><text x='194' y='100' font-size='12' fill='currentColor'>B</text><text x='160' y='26' font-size='12' fill='currentColor'>C</text><text x='126' y='102' font-size='11' fill='currentColor'>O</text></svg>";
  const SVG_CUBE = "<svg viewBox='0 0 260 160' xmlns='http://www.w3.org/2000/svg'><g fill='none' stroke='currentColor' stroke-width='2.5'><polygon points='50,60 130,60 130,140 50,140'/><polyline points='50,60 90,30 170,30 170,110 130,140'/><line x1='130' y1='60' x2='170' y2='30'/></g><g fill='none' stroke='currentColor' stroke-width='2' stroke-dasharray='5,4'><line x1='50' y1='140' x2='90' y2='110'/><line x1='90' y1='110' x2='90' y2='30'/><line x1='90' y1='110' x2='170' y2='110'/></g></svg>";
  const SVG_GRID = "<svg viewBox='0 0 260 160' xmlns='http://www.w3.org/2000/svg'><g stroke='currentColor' stroke-width='2'><rect x='50' y='10' width='128' height='128' fill='none'/><line x1='82' y1='10' x2='82' y2='138'/><line x1='114' y1='10' x2='114' y2='138'/><line x1='146' y1='10' x2='146' y2='138'/><line x1='50' y1='42' x2='178' y2='42'/><line x1='50' y1='74' x2='178' y2='74'/><line x1='50' y1='106' x2='178' y2='106'/></g></svg>";

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 8,
    title: "Shapes and symmetry",
    titleVi: "Hình và đối xứng",
    strand: "Geometry and measure",
    pages: [164, 189],
    realm: "Lâu Đài Gương Thần",
    emoji: "🪞",
    story: "Lâu Đài Gương Thần được xây từ những hình hoàn hảo: cửa sổ tròn, sàn lát gạch và các khối đá đủ hình dạng. Muốn mở cánh cổng chính, em phải nhận ra trục đối xứng, nhận biết hình bằng nhau và đếm đỉnh, cạnh, mặt của các khối.",
    glossary: [
      { en: "line of symmetry", vi: "trục đối xứng", def: "Đường thẳng chia hình thành hai nửa gấp chồng khít lên nhau." },
      { en: "rotational symmetry", vi: "đối xứng quay", def: "Hình trùng với chính nó khi quay quanh tâm một góc nhỏ hơn một vòng." },
      { en: "order of rotation", vi: "bậc đối xứng quay", def: "Số lần hình trùng khít với chính nó trong một vòng quay đầy đủ." },
      { en: "chord", vi: "dây cung", def: "Đoạn thẳng nối hai điểm trên đường tròn." },
      { en: "tangent", vi: "tiếp tuyến", def: "Đường thẳng chạm đường tròn tại đúng một điểm." },
      { en: "congruent", vi: "bằng nhau (đồng dạng và cùng cỡ)", def: "Hai hình có cùng hình dạng và cùng kích thước." },
      { en: "vertex / edge / face", vi: "đỉnh / cạnh / mặt", def: "Góc nhọn, đoạn nối hai mặt và mặt phẳng của khối 3D." },
      { en: "prism", vi: "hình lăng trụ", def: "Khối có hai đáy là đa giác bằng nhau và các mặt bên là hình chữ nhật." }
    ],
    sections: [
      {
        id: "8.1", title: "Identifying the symmetry of 2D shapes", titleVi: "Nhận biết đối xứng của hình phẳng",
        sims: [{ id: "reflectgrid", at: 0 }],
        learn: [
          "Trục đối xứng là đường gấp mà hai nửa hình chồng khít lên nhau.",
          "Bậc đối xứng quay là số lần hình trùng với chính nó khi quay một vòng đầy đủ (360°).",
          "Đa giác đều n cạnh có n trục đối xứng và bậc đối xứng quay n.",
          "Hình chữ nhật (không vuông) và hình thoi: 2 trục, bậc 2. Hình bình hành thường: 0 trục, bậc 2.",
          "Hình thang cân: 1 trục, bậc 1. Hình diều: 1 trục, bậc 1."
        ],
        example: { q: "Hình bình hành (không phải hình chữ nhật hay hình thoi) có bao nhiêu trục đối xứng và bậc đối xứng quay bằng bao nhiêu?",
          steps: ["Thử gấp theo đường chéo hay đường trung bình: hai nửa không chồng khít", "Nên không có trục đối xứng (0)", "Quay 180° quanh tâm thì hình trùng với chính nó: bậc 2"],
          prompts: [
            "Gấp hình bình hành theo một đường chéo, hay theo đường trung bình: hai nửa có chồng khít không?",
            "Vậy hình này có bao nhiêu trục đối xứng?",
            "Xoay hình quanh tâm một góc bao nhiêu độ thì nó trùng lại với chính nó? Trong một vòng 360° nó trùng mấy lần?"
          ],
          answer: { type: "text", value: "0, 2", accept: ["0;2", "0,2", "0 và 2"] },
          twist: { q: "Nếu đó là hình thoi (không phải hình vuông) thì có bao nhiêu trục đối xứng?", answer: { type: "num", value: 2 } } },
        questions: [
          Q("8.1-01", "num", 1, "line-sym", "How many lines of symmetry does a rectangle (that is not a square) have?", 2,
            ["Có thể gấp hình chữ nhật theo chiều dọc để hai nửa trùng nhau không?", "Gấp theo chiều ngang thì sao?", "Gấp theo đường chéo có trùng không?"],
            "Chỉ có 2 trục: một dọc, một ngang qua tâm. Đường chéo không phải trục."),
          Q("8.1-02", "num", 1, "rot-order", "What is the order of rotational symmetry of a parallelogram that is not a rectangle or rhombus?", 2,
            ["Quay hình quanh tâm 90° có trùng khít không?", "Quay 180° thì sao?", "Trong một vòng 360° có mấy vị trí trùng?"],
            "Quay nửa vòng (180°) thì trùng và quay đủ vòng cũng trùng: bậc 2."),
          Q("8.1-03", "num", 1, "line-sym", "How many lines of symmetry does an equilateral triangle have?", 3,
            ["Mỗi đỉnh có thể nối với trung điểm cạnh đối diện không?", "Có bao nhiêu đỉnh?", "Mỗi đường như vậy là một trục."],
            "Từ mỗi đỉnh kẻ tới trung điểm cạnh đối: 3 trục."),
          Q("8.1-04", "mc", 2, "sym-misconception", "How many lines of symmetry does a parallelogram (not a rectangle or rhombus) have?", 2,
            ["Gấp theo đường chéo, hai nửa là hai tam giác trông giống nhau; chúng có chồng khít không?", "Một nửa sẽ bị xoay ngược khi gấp: kiểm tra các góc.", "Hãy nhớ hình này chỉ có đối xứng quay."],
            "Hình bình hành thường không có trục đối xứng. Nhiều bạn nghĩ đường chéo là trục nhưng gấp theo đường chéo hai nửa không trùng nhau.",
            { choices: ["2", "4", "0", "1"] }),
          Q("8.1-05", "num", 2, "line-sym", "How many lines of symmetry does the shape shown have?", 1,
            ["Hình có hai cạnh song song và hai cạnh bên bằng nhau.", "Đường nào đi qua trung điểm hai đáy?", "Có trục ngang không (trên dưới có bằng nhau không)?"],
            "Hình thang cân chỉ có 1 trục dọc đi qua trung điểm hai đáy.", { svg: SVG_TRAP }),
          Q("8.1-06", "num", 2, "polygon-sym", "A regular polygon has 9 lines of symmetry. How many sides does it have?", 9,
            ["Đa giác đều có quan hệ gì giữa số cạnh và số trục?", "Tam giác đều: 3 cạnh, 3 trục. Hình vuông?", "Vậy số cạnh bằng bao nhiêu?"],
            "Đa giác đều n cạnh có n trục, nên có 9 cạnh."),
          Q("8.1-07", "mc", 3, "quad-sym", "Which quadrilateral has exactly 2 lines of symmetry and rotational symmetry of order 2, but is not a rectangle?", 3,
            ["Loại những hình có 1 trục hoặc không có trục.", "Hình diều có 1 trục, hình thang cân có 1 trục, hình bình hành thường 0 trục.", "Hình nào có 2 trục là các đường chéo?"],
            "Hình thoi có 2 trục (hai đường chéo) và bậc 2. Hình bình hành có bậc 2 nhưng 0 trục.",
            { choices: ["Kite", "Isosceles trapezium", "Parallelogram", "Rhombus"] }),
          Q("8.1-08", "num", 3, "rot-pattern", "Song has 5 red square tiles and 4 white square tiles. He arranges all 9 tiles into a 3 by 3 square so that the pattern has rotational symmetry of order 4. How many red tiles are NOT in the centre square?", 4,
            ["Ở chế độ bậc 4, các ô ngoài tâm đi theo nhóm bao nhiêu ô cùng màu?", "Có 9 ô, một ô nằm ở tâm, còn 8 ô chia thành 2 nhóm 4.", "Số ô đỏ là 5: nhóm 4 đỏ thì tâm phải màu gì?"],
            "8 ô ngoài tâm chia thành 2 nhóm 4 ô. Có 5 đỏ và 4 trắng, nên 1 nhóm đỏ (4 ô) + tâm đỏ, nhóm kia trắng. Vậy 4 ô đỏ không ở tâm."),
          Q("8.1-09", "num", 3, "sym-sum", "A regular hexagon has some lines of symmetry and a certain order of rotational symmetry. What is their sum?", 12,
            ["Số trục của lục giác đều?", "Bậc đối xứng quay của lục giác đều?", "Cộng hai số đó."],
            "Lục giác đều có 6 trục và bậc 6: 6 + 6 = 12.",
            { howto: "Find two numbers for a regular hexagon: how many lines of symmetry it has and its order of rotational symmetry. Enter these two numbers added together." })
        ]
      },
      {
        id: "8.2", title: "Circles and polygons", titleVi: "Đường tròn",
        learn: [
          "Bán kính nối tâm với một điểm trên đường tròn; đường kính gấp 2 lần bán kính.",
          "Dây cung là đoạn nối hai điểm trên đường tròn; đường kính là dây cung dài nhất.",
          "Tiếp tuyến chạm đường tròn tại đúng một điểm và vuông góc với bán kính tại điểm đó.",
          "Nếu một cạnh của tam giác là đường kính và đỉnh còn lại nằm trên đường tròn thì tam giác vuông tại đỉnh đó.",
          "Đường tròn có vô số trục đối xứng và đối xứng quay vô hạn bậc."
        ],
        example: { q: "Đường tròn có bán kính 6,5 cm. Dây cung dài nhất có độ dài bao nhiêu?",
          steps: ["Dây cung dài nhất là đường kính", "Đường kính = 2 × bán kính = 2 × 6,5 = 13 cm"],
          prompts: [
            "Dây cung nào đi qua tâm đường tròn? Nó có tên gọi gì?",
            "Đường kính liên hệ với bán kính bằng phép tính nào? Em tính với 6,5 cm."
          ],
          answer: { type: "num", value: 13 },
          twist: { q: "Nếu dây cung dài nhất của một đường tròn dài 17 cm thì bán kính là bao nhiêu cm?", answer: { type: "num", value: 8.5 } } },
        questions: [
          Q("8.2-01", "mc", 1, "circle-parts", "What is the name of a line from the centre of a circle to its edge?", 1,
            ["Điểm đầu của đoạn là tâm, điểm cuối nằm trên đường tròn.", "Đoạn qua tâm và hai đầu nằm trên đường tròn có tên khác.", "Chọn tên của đoạn từ tâm ra rìa."],
            "Đoạn từ tâm đến đường tròn là bán kính (radius).", { choices: ["diameter", "radius", "chord", "tangent"] }),
          Q("8.2-02", "num", 1, "radius-diameter", "A circle has radius 7 cm. What is its diameter?", 14,
            ["Đường kính đi qua tâm: gồm mấy bán kính?", "Hai bán kính.", "2 × 7 = ?"], "Đường kính = 2 × 7 = 14 cm.", { unitLabel: "cm" }),
          Q("8.2-03", "mc", 1, "circle-parts", "Which line touches a circle at exactly one point?", 3,
            ["Đường cắt đường tròn tại hai điểm là gì?", "Dây cung nối hai điểm trên đường tròn.", "Đường chỉ chạm một điểm gọi là gì?"],
            "Đường thẳng chạm đường tròn tại đúng một điểm là tiếp tuyến.", { choices: ["radius", "diameter", "chord", "tangent"] }),
          Q("8.2-04", "num", 2, "radius-diameter", "A circle has diameter 18.6 cm. What is its radius?", 9.3,
            ["Bán kính bằng một nửa đường kính.", "18,6 ÷ 2 = ?", "Kiểm tra: 2 × kết quả có bằng 18,6 không?"], "Bán kính = 18,6 ÷ 2 = 9,3 cm.", { unitLabel: "cm", tol: 0.01 }),
          Q("8.2-05", "mc", 2, "chord-misconception", "Which statement is true?", 1,
            ["Một dây cung có bắt buộc đi qua tâm không?", "Đường kính có nối hai điểm trên đường tròn không?", "Vậy mọi đường kính có phải dây cung không?"],
            "Mọi đường kính là dây cung (nối hai điểm trên đường tròn). Nhưng dây cung không nhất thiết đi qua tâm nên không phải dây nào cũng là đường kính.",
            { choices: ["Every chord is a diameter", "Every diameter is a chord", "A chord must go through the centre", "A chord touches the circle at one point"] }),
          Q("8.2-06", "num", 2, "longest-chord", "A circle has radius 6.5 cm. What is the length of its longest chord?", 13,
            ["Dây nào dài nhất trong một đường tròn?", "Đó là đường kính.", "2 × 6,5 = ?"], "Dây dài nhất là đường kính: 13 cm.", { unitLabel: "cm" }),
          Q("8.2-07", "num", 3, "angle-semicircle", "AB is a diameter of the circle and C is on the circle. What is angle ACB?", 90,
            ["AB đi qua tâm O, nên OA = OB = OC.", "Tam giác OAC và OBC là các tam giác cân.", "Cạnh AB là cạnh dài nhất, góc đối diện nó là góc đặc biệt nào?"],
            "Khi cạnh AB là đường kính và C nằm trên đường tròn thì góc ACB = 90° (góc nội tiếp chắn nửa đường tròn).", { svg: SVG_CIRC, unitLabel: "°" }),
          Q("8.2-08", "num", 3, "tangent-square", "Four tangents to a circle of radius 4 cm form a square around it. What is the perimeter of the square?", 32,
            ["Mỗi cạnh hình vuông tiếp xúc đường tròn: khoảng cách giữa hai cạnh đối bằng gì?", "Hai cạnh đối cách nhau một đường kính = 8 cm.", "Chu vi = 4 × cạnh."],
            "Cạnh hình vuông bằng đường kính 8 cm, chu vi 4 × 8 = 32 cm.", { unitLabel: "cm" }),
          Q("8.2-09", "mc", 3, "inscribed-quad", "Four vertices of each quadrilateral lie on a circle. Which one is impossible?", 3,
            ["Hình chữ nhật có đỉnh nằm trên đường tròn được không?", "Hình thang cân thì sao?", "Hình thoi có bốn đỉnh trên đường tròn thì phải có thêm tính chất gì (độ dài hai đường chéo)?"],
            "Hình thoi nội tiếp đường tròn thì hai đường chéo bằng nhau, nên là hình vuông. Hình thoi không vuông không thể nội tiếp.",
            { choices: ["Rectangle", "Square", "Isosceles trapezium", "A rhombus that is not a square"] })
        ]
      },
      {
        id: "8.3", title: "Recognising congruent shapes", titleVi: "Hình bằng nhau (đồng dạng và cùng cỡ)",
        learn: [
          "Hai hình bằng nhau (congruent) khi có cùng hình dạng và cùng kích thước; có thể lật hoặc xoay.",
          "Các cạnh tương ứng bằng nhau, các góc tương ứng bằng nhau.",
          "Hai hình bằng nhau có cùng chu vi và cùng diện tích.",
          "Hai tam giác có ba cạnh tương ứng bằng nhau thì bằng nhau.",
          "Các góc bằng nhau chưa đủ để kết luận hai hình bằng nhau (có thể khác cỡ)."
        ],
        example: { q: "Tam giác ABC bằng tam giác DEF, góc A = 50°, góc B = 60°. Tìm góc F (F tương ứng C).",
          steps: ["Góc C = 180° − 50° − 60° = 70°", "F tương ứng C nên góc F = 70°"],
          prompts: [
            "Tổng ba góc trong một tam giác là bao nhiêu độ? Từ đó em tìm góc C thế nào?",
            "Hai tam giác bằng nhau thì các góc tương ứng thế nào? F tương ứng với đỉnh nào?"
          ],
          answer: { type: "num", value: 70 },
          twist: { q: "Nếu F tương ứng với B thay vì C thì góc F bằng bao nhiêu độ?", answer: { type: "num", value: 60 } } },
        questions: [
          Q("8.3-01", "mc", 1, "congruent-def", "What does 'congruent' mean for two shapes?", 1,
            ["Hai hình cần giống nhau ở điều gì?", "Kích thước có cần giống không?", "Chọn cả hình dạng và kích thước."],
            "Hai hình bằng nhau khi có cùng hình dạng và cùng kích thước.",
            { choices: ["Same shape only", "Same shape and same size", "Same size only", "Same colour"] }),
          Q("8.3-02", "num", 1, "corresponding", "Triangle ABC is congruent to triangle PQR. AB = 5 cm, BC = 7 cm, CA = 9 cm. PQ = 5 cm and QR = 7 cm. What is RP?", 9,
            ["P tương ứng với A, Q tương ứng với B, R với C.", "RP tương ứng với cạnh nào của tam giác ABC?", "RP tương ứng CA."],
            "RP tương ứng CA, nên RP = 9 cm.", { unitLabel: "cm" }),
          Q("8.3-03", "num", 1, "corresponding", "Triangle ABC is congruent to triangle PQR (A↔P). Angle A = 62°. What is angle P?", 62,
            ["P ứng với đỉnh nào?", "Góc tương ứng có bằng nhau không?", "Vậy P bằng bao nhiêu?"], "Góc tương ứng bằng nhau nên P = 62°.", { unitLabel: "°" }),
          Q("8.3-04", "num", 2, "angles-congruent", "Triangle ABC is congruent to triangle DEF (A↔D, B↔E, C↔F). Angle A = 50° and angle B = 60°. Find angle F.", 70,
            ["Tổng ba góc trong tam giác là bao nhiêu?", "Góc C = 180° − 50° − 60°.", "F tương ứng với C."], "C = 70° nên F = 70°.", { unitLabel: "°" }),
          Q("8.3-05", "mc", 2, "congruent-misconception", "Which statement is true?", 2,
            ["Hai hình chữ nhật cùng chu vi có thể có kích thước khác nhau không?", "Hai tam giác đều có cạnh khác nhau có bằng nhau không?", "Hình bằng nhau thì chu vi và diện tích thế nào?"],
            "Hình bằng nhau có cùng chu vi và diện tích. Các phát biểu khác sai: hai hình vuông khác cạnh không bằng nhau; hai chữ nhật cùng chu vi chưa chắc bằng nhau; hai tam giác đều chưa chắc cùng cỡ.",
            { choices: ["All squares are congruent", "Two rectangles with the same perimeter are congruent", "Congruent shapes have the same area and the same perimeter", "Two triangles with all angles 60° are always congruent"] }),
          Q("8.3-06", "num", 2, "join-shapes", "Two congruent rectangles 8 cm by 3 cm are joined along their 8 cm sides to make a bigger rectangle. What is its perimeter?", 28,
            ["Hai chữ nhật ghép theo cạnh dài 8 cm: kích thước mới là bao nhiêu?", "Chiều dài vẫn 8 cm, chiều rộng thành 3 + 3 = 6 cm.", "Chu vi = 2 × (8 + 6)."],
            "Hình mới 8 cm × 6 cm, chu vi 2 × (8 + 6) = 28 cm.", { unitLabel: "cm" }),
          Q("8.3-07", "mc", 3, "sss", "Two triangles both have sides 5.3 cm, 7.1 cm and 9.5 cm (matching sides in the same order). Sofia says they are congruent. Zara says you cannot tell without the angles. Who is right?", 0,
            ["Nếu ba cạnh đã xác định, tam giác có thể có nhiều hình dạng không?", "Thử dựng tam giác với ba cạnh cho trước: có hai cách khác nhau (không kể lật) không?", "Ba cạnh tương ứng bằng nhau là điều kiện đủ."],
            "Hai tam giác có ba cạnh tương ứng bằng nhau thì bằng nhau. Sofia đúng, không cần biết góc.",
            { choices: ["Sofia: three equal sides are enough", "Zara: angles are always needed", "Neither", "Both"] }),
          Q("8.3-08", "num", 3, "congruent-perimeter", "A 10 cm by 4 cm rectangle is cut into two congruent rectangles, each 5 cm by 4 cm. What is the perimeter of each piece?", 18,
            ["Mỗi mảnh có kích thước nào?", "5 cm và 4 cm.", "Chu vi = 2 × (5 + 4)."], "Mỗi mảnh 5 × 4 nên chu vi 2 × 9 = 18 cm.", { unitLabel: "cm" }),
          Q("8.3-09", "num", 3, "congruent-area", "Two congruent right-angled triangles with legs 6 cm and 8 cm are joined along their hypotenuse (10 cm) to form a rectangle. What is the area of the rectangle?", 48,
            ["Hai tam giác vuông ghép theo cạnh huyền cho hình gì?", "Hình chữ nhật 6 cm × 8 cm.", "Diện tích = dài × rộng, hoặc 2 × diện tích một tam giác."],
            "Diện tích mỗi tam giác = 6×8/2 = 24, hai tam giác = 48 cm².", { unitLabel: "cm²" })
        ]
      },
      {
        id: "8.4", title: "3D shapes", titleVi: "Hình khối 3D",
        learn: [
          "Mặt là phần phẳng, cạnh là đoạn nối hai mặt, đỉnh là góc nhọn của khối.",
          "Hình hộp chữ nhật: 6 mặt, 12 cạnh, 8 đỉnh. Hình lập phương cũng vậy.",
          "Lăng trụ đáy n-giác: n + 2 mặt, 3n cạnh, 2n đỉnh. Hình chóp đáy n-giác: n + 1 mặt, 2n cạnh, n + 1 đỉnh.",
          "Công thức Euler cho khối đa diện: đỉnh + mặt − cạnh = 2.",
          "Khối có thể vẽ ba góc nhìn: nhìn trước, nhìn cạnh, nhìn trên."
        ],
        example: { q: "Lăng trụ tam giác có bao nhiêu mặt, cạnh, đỉnh?",
          steps: ["Đáy tam giác nên n = 3", "Mặt: n + 2 = 5 ; cạnh: 3n = 9 ; đỉnh: 2n = 6", "Kiểm tra Euler: 6 + 5 − 9 = 2"],
          prompts: [
            "Đáy của lăng trụ có hình gì và có mấy cạnh? Em gọi số cạnh đáy là n.",
            "Mặt gồm hai đáy và các mặt bên; cạnh gồm cạnh đáy và cạnh bên; đỉnh nằm ở hai đáy. Em biểu diễn từng số theo n.",
            "Kiểm tra công thức Euler: đỉnh + mặt − cạnh bằng bao nhiêu?"
          ],
          answer: { type: "text", value: "5, 9, 6", accept: ["5;9;6", "5 mặt, 9 cạnh, 6 đỉnh", "5 mặt; 9 cạnh; 6 đỉnh"] },
          twist: { q: "Nếu đáy là lục giác (6 cạnh) thì lăng trụ có bao nhiêu cạnh?", answer: { type: "num", value: 18 } } },
        questions: [
          Q("8.4-01", "num", 1, "faces", "How many faces does a cuboid have?", 6,
            ["Đếm: trên, dưới, trước, sau, trái, phải.", "Có bao nhiêu mặt như vậy?", "Mỗi mặt là hình chữ nhật."], "Hình hộp chữ nhật có 6 mặt."),
          Q("8.4-02", "num", 1, "vertices", "How many vertices does a cube have?", 8,
            ["Đỉnh là các góc của khối.", "4 góc ở mặt trên cộng 4 góc ở mặt dưới.", "4 + 4 = ?"], "Hình lập phương có 8 đỉnh."),
          Q("8.4-03", "num", 1, "edges", "How many edges does a cube have?", 12,
            ["Mỗi mặt đáy có 4 cạnh; còn các cạnh bên?", "4 (trên) + 4 (dưới) + 4 (đứng).", "Tổng là bao nhiêu?"], "4 + 4 + 4 = 12 cạnh."),
          Q("8.4-04", "num", 2, "prism-faces", "How many faces does a pentagonal prism have?", 7,
            ["Hai đáy là ngũ giác, mấy mặt đáy?", "Mặt bên là hình chữ nhật, có bao nhiêu mặt bên (bằng số cạnh đáy)?", "2 + 5 = ?"], "2 mặt đáy + 5 mặt bên = 7 mặt."),
          Q("8.4-05", "mc", 2, "pyramid", "Which solid has exactly 5 faces?", 1,
            ["Tứ diện có mấy mặt?", "Hình chóp đáy vuông gồm 1 đáy và mấy mặt bên?", "Hình lập phương có 6 mặt, bát diện có 8 mặt."],
            "Hình chóp đáy vuông có 1 mặt đáy + 4 mặt bên = 5 mặt. Tứ diện có 4, lập phương 6, bát diện 8.",
            { choices: ["Tetrahedron", "Square-based pyramid", "Cube", "Octahedron"] }),
          Q("8.4-06", "mc", 2, "edges-misconception", "How many edges does a square-based pyramid have?", 1,
            ["Đáy vuông có mấy cạnh?", "Từ mỗi đỉnh đáy có một cạnh lên đỉnh chóp: thêm mấy cạnh?", "4 + 4 = ?"],
            "Đáy có 4 cạnh và 4 cạnh bên: tổng 8. Đáp án 5 là số đỉnh (hoặc mặt); 4 chỉ là các cạnh đáy.",
            { choices: ["5", "8", "10", "4"] }),
          Q("8.4-07", "num", 2, "euler", "A solid has 8 faces and 12 vertices. Use vertices + faces − edges = 2 to find the number of edges.", 18,
            ["12 + 8 − E = 2.", "12 + 8 = 20.", "E = 20 − 2 = ?"], "E = 12 + 8 − 2 = 18 cạnh (đó là lăng trụ lục giác)."),
          Q("8.4-08", "num", 2, "hidden-edges", "The dashed lines in the picture show hidden edges of a cube. How many edges are hidden?", 3,
            ["Đếm các đoạn nét đứt.", "Nét đứt xuất phát từ cùng một đỉnh phía sau.", "Có mấy đoạn như vậy?"],
            "Có 3 cạnh bị che (đều gặp nhau ở đỉnh phía sau dưới bên trái).", { svg: SVG_CUBE }),
          Q("8.4-09", "num", 3, "prism-reason", "A prism has 21 edges. How many sides does its base have?", 7,
            ["Lăng trụ đáy n-giác có bao nhiêu cạnh theo n?", "Mỗi đáy n cạnh và có n cạnh bên: tổng 3n.", "3n = 21 nên n = ?"], "3n = 21 nên n = 7 (đáy là thất giác)."),
          Q("8.4-10", "mc", 3, "solid-id", "A solid has 6 vertices, 12 edges and 8 faces. Which solid is it?", 1,
            ["Mặt đều là tam giác thì hình có bao nhiêu mặt?", "Kiểm tra Euler: 6 + 8 − 12 = 2 đúng.", "Khối nào có 8 mặt tam giác và 6 đỉnh?"],
            "Bát diện có 6 đỉnh, 12 cạnh, 8 mặt tam giác. Hình lập phương có 8 đỉnh, 6 mặt.",
            { choices: ["Cube", "Octahedron", "Triangular prism", "Square-based pyramid"] })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Bài toán đối xứng, đếm hình và khối 3D theo phong cách kiểm tra lớp 6–7 và học sinh giỏi.",
      questions: [
        Q("ch-01", "num", 2, "polygon-sym", "Đa giác đều có 15 cạnh thì có bao nhiêu trục đối xứng?", 15,
          ["Tam giác đều có mấy cạnh, mấy trục?", "Quy luật giữa số cạnh và số trục của đa giác đều là gì?", "Áp dụng cho 15 cạnh."],
          "Đa giác đều n cạnh có đúng n trục đối xứng, nên 15 trục.", V),
        Q("ch-02", "mc", 3, "centre-sym", "Hình nào sau đây có tâm đối xứng (trùng với chính nó khi quay 180° quanh tâm)?", 2,
          ["Quay 180° tam giác đều có trùng không?", "Hình thang cân thì sao?", "Hình nào có cặp cạnh đối song song và bằng nhau?"],
          "Hình bình hành có tâm đối xứng là giao điểm hai đường chéo. Tam giác đều, hình thang cân và ngũ giác đều không có.",
          V3({ choices: ["Tam giác đều", "Hình thang cân", "Hình bình hành", "Ngũ giác đều"] })),
        Q("ch-03", "num", 3, "count-squares", "Hình vuông cạnh 4 ô được chia thành lưới 4×4 ô vuông nhỏ. Có tất cả bao nhiêu hình vuông (mọi kích cỡ) trong hình?", 30,
          ["Đếm theo từng cỡ: hình vuông 1×1 có bao nhiêu?", "1×1: 16, 2×2: 9, 3×3: 4, 4×4: 1.", "Cộng các số này lại."],
          "16 + 9 + 4 + 1 = 30 hình vuông.", V3({ svg: SVG_GRID })),
        Q("ch-04", "num", 3, "count-rect", "Một lưới 3×3 ô vuông có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông)?", 36,
          ["Một hình chữ nhật được xác định bởi hai đường kẻ ngang và hai đường kẻ dọc.", "Lưới 3×3 có 4 đường ngang và 4 đường dọc. Chọn 2 trong 4 đường ngang bằng mấy cách?", "6 cách chọn ngang × 6 cách chọn dọc."],
          "Chọn 2 trong 4 đường ngang: 6 cách; tương tự dọc: 6 cách. Tổng 6 × 6 = 36.", V),
        Q("ch-05", "num", 3, "prism-count", "Một hình lăng trụ có đáy là đa giác 12 cạnh. Tổng số đỉnh, cạnh và mặt của nó là bao nhiêu?", 74,
          ["Đỉnh = 2n, cạnh = 3n, mặt = n + 2 với n = 12.", "Đỉnh 24, cạnh 36, mặt 14.", "Cộng ba số."],
          "24 + 36 + 14 = 74.", V),
        Q("ch-06", "num", 3, "pyramid-count", "Một hình chóp có tổng số cạnh là 20. Hỏi nó có bao nhiêu mặt?", 11,
          ["Hình chóp đáy n-giác có bao nhiêu cạnh theo n?", "Cạnh = 2n nên 2n = 20.", "n = 10, mặt = n + 1."],
          "2n = 20 nên n = 10, số mặt = 10 + 1 = 11.", V),
        Q("ch-07", "num", 2, "euler", "Một khối đa diện có 10 đỉnh và 7 mặt. Dùng công thức Euler đỉnh + mặt − cạnh = 2, tìm số cạnh.", 15,
          ["Thay vào: 10 + 7 − cạnh = 2.", "10 + 7 = 17.", "cạnh = 17 − 2."],
          "Số cạnh = 10 + 7 − 2 = 15 (đó là lăng trụ ngũ giác).", V),
        Q("ch-08", "mc", 3, "letter-sym", "Chữ cái in hoa (kiểu chữ không chân) nào có đúng 1 trục đối xứng và đối xứng quay bậc 1?", 1,
          ["H có bao nhiêu trục (dọc, ngang)?", "S và N có trục không? Quay 180° chúng ra sao?", "Chữ A chỉ có 1 trục dọc."],
          "A có đúng 1 trục dọc và không đối xứng quay (bậc 1). H có 2 trục, S và N có đối xứng quay bậc 2 mà không có trục.",
          V3({ choices: ["H", "A", "S", "N"] })),
        Q("ch-09", "num", 3, "cube-cut", "Một khối lập phương 3×3×3 được sơn mặt ngoài rồi cưa thành 27 khối lập phương nhỏ. Có bao nhiêu khối nhỏ có đúng 2 mặt được sơn?", 12,
          ["Khối có 2 mặt sơn nằm ở vị trí nào của khối lớn?", "Chúng nằm giữa các cạnh của khối lớn (không phải ở đỉnh).", "Khối lớn có 12 cạnh, mỗi cạnh có 1 khối ở giữa."],
          "Các khối ở đỉnh có 3 mặt sơn, ở giữa cạnh có 2 mặt: 12 cạnh × 1 = 12 khối.", V),
        Q("ch-10", "num", 3, "isosceles-sym", "Tam giác ABC cân tại A có chu vi 36 cm và đáy BC = 10 cm. Tính độ dài cạnh bên AB.", 13,
          ["Tam giác cân có hai cạnh bên thế nào?", "AB + AC = 36 − 10 = 26.", "AB = AC nên AB = 26 ÷ 2."],
          "AB + AC = 36 − 10 = 26 và AB = AC nên AB = 13 cm.", V3({ unitLabel: "cm" }))
      ]
    },
    project: null
  });
})();
