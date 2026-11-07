(function () {
  function S(inner) {
    return "<svg viewBox='0 0 260 160' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' fill='none' stroke-width='2'>" + inner + "</svg>";
  }
  function Q(id, type, diff, skill, q, o) {
    return Object.assign({
      id: id, type: type, diff: diff, skill: skill, source: "book", lang: "en", q: q,
      svg: null, choices: null, answer: null, accept: [], tol: 0, unitLabel: "",
      hints: [], explain: "", why: null
    }, o);
  }
  function V(id, type, diff, skill, q, o) {
    return Q(id, type, diff, skill, q, Object.assign({ source: "vn", lang: "vi" }, o));
  }

  var s81 = [
    Q("8.1-01", "num", 1, "polygon-symmetry", "How many lines of symmetry does a regular hexagon have?", {
      answer: 6,
      svg: S("<polygon points='130,15 190,48 190,112 130,145 70,112 70,48'/><line x1='130' y1='15' x2='130' y2='145' stroke-dasharray='4'/><line x1='70' y1='48' x2='190' y2='112' stroke-dasharray='4'/><line x1='190' y1='48' x2='70' y2='112' stroke-dasharray='4'/>"),
      hints: ["Hình lục giác đều có mấy cạnh?", "Với đa giác đều, số trục đối xứng liên quan thế nào đến số cạnh?", "Số trục đối xứng bằng số cạnh. Vậy là bao nhiêu?"],
      explain: "Đa giác đều có số trục đối xứng bằng số cạnh. Lục giác đều có 6 cạnh nên có 6 trục đối xứng."
    }),
    Q("8.1-02", "num", 1, "polygon-symmetry", "What is the order of rotational symmetry of a regular nonagon (9 sides)?", {
      answer: 9,
      hints: ["Khi xoay đa giác đều đúng một vòng, nó trùng khít với chính nó bao nhiêu lần?", "Mỗi cạnh có thể đặt vào vị trí của cạnh nào?", "Bậc đối xứng quay bằng số cạnh."],
      explain: "Đa giác đều n cạnh có bậc đối xứng quay bằng n. Nonagon có 9 cạnh nên bậc 9."
    }),
    Q("8.1-03", "num", 2, "polygon-symmetry", "A regular polygon has rotational symmetry of order 15. How many sides does it have?", {
      answer: 15,
      hints: ["Bậc đối xứng quay của đa giác đều liên hệ thế nào với số cạnh?", "Hai số này bằng nhau hay khác nhau?", "Số cạnh bằng bậc đối xứng quay."],
      explain: "Số cạnh của đa giác đều bằng bậc đối xứng quay và bằng số trục đối xứng, nên có 15 cạnh."
    }),
    Q("8.1-04", "mc", 2, "quad-symmetry", "How many lines of symmetry does a rectangle (that is not a square) have?", {
      choices: ["1", "2", "4", "0"], answer: 1,
      svg: S("<rect x='50' y='40' width='160' height='80'/><line x1='130' y1='30' x2='130' y2='130' stroke-dasharray='4'/><line x1='40' y1='80' x2='220' y2='80' stroke-dasharray='4'/>"),
      hints: ["Gấp hình chữ nhật theo đường thẳng đứng đi qua tâm: hai nửa có trùng nhau không?", "Gấp theo đường nằm ngang đi qua tâm thì sao?", "Gấp theo đường chéo thì hai nửa có trùng không? Vì sao?"],
      explain: "Hình chữ nhật (không vuông) có 2 trục đối xứng: hai đường trung bình. Sai lầm hay gặp là chọn 4 vì nghĩ đường chéo cũng là trục đối xứng; thực ra chỉ hình vuông mới có thêm 2 đường chéo là trục."
    }),
    Q("8.1-05", "mc", 2, "quad-hierarchy", "Zara says: 'My quadrilateral has two pairs of parallel sides and all angles are 90°.' Marcus says: 'So it must be a square.' Is Marcus right?", {
      choices: ["Yes, it must be a square", "No, it must be a rectangle but might not be a square", "No, it must be a rhombus", "No, it must be a kite and nothing else"],
      answer: 1,
      hints: ["Hình chữ nhật có hai cặp cạnh song song và 4 góc vuông không?", "Mô tả của Zara có nói các cạnh bằng nhau không?", "Vậy ta chắc chắn gọi nó là gì, và chưa chắc là gì?"],
      explain: "Hai cặp cạnh song song và 4 góc vuông cho ta hình chữ nhật. Chưa biết 4 cạnh bằng nhau nên chưa thể kết luận hình vuông. Lỗi: nhầm hình chữ nhật với hình vuông."
    }),
    Q("8.1-06", "mc", 2, "quad-properties", "Which description fits a kite?", {
      choices: ["Two pairs of adjacent sides equal, and one pair of equal angles", "All sides equal and all angles 90°", "Exactly one pair of parallel sides", "Two pairs of parallel sides and opposite angles equal"],
      answer: 0,
      svg: S("<polygon points='130,10 175,60 130,150 85,60'/>"),
      hints: ["Hãy nhìn diều: hai cạnh phía trên bằng nhau, hai cạnh phía dưới bằng nhau. Đó là cặp cạnh kề hay đối?", "Hai góc ở hai bên (trái, phải) bằng nhau; còn góc trên và dưới thì sao?", "Loại các đáp án mô tả hình vuông, hình thang, hình bình hành."],
      explain: "Hình diều có hai cặp cạnh kề bằng nhau và chỉ một cặp góc đối bằng nhau. Các phương án còn lại lần lượt là hình vuông, hình thang, hình bình hành."
    }),
    Q("8.1-07", "num", 1, "quad-properties", "An isosceles trapezium has how many pairs of equal angles?", {
      answer: 2,
      hints: ["Vẽ hình thang cân: hai góc ở đáy lớn có bằng nhau không?", "Hai góc ở đáy nhỏ thì sao?", "Đếm số cặp góc bằng nhau."],
      explain: "Hình thang cân có hai góc kề đáy lớn bằng nhau và hai góc kề đáy nhỏ bằng nhau: 2 cặp góc bằng nhau."
    }),
    Q("8.1-08", "multi", 3, "quad-hierarchy", "Use the hierarchy of quadrilaterals. Which statements are true? (choose all)", {
      choices: ["A square is a special rectangle", "A kite is a special rhombus", "A rhombus is a special parallelogram", "A rectangle is a special rhombus"],
      answer: [0, 2],
      hints: ["'Đặc biệt' nghĩa là: hình đó có mọi tính chất của hình kia và thêm điều kiện. Hình vuông có mọi tính chất của hình chữ nhật không?", "Hình thoi có hai cặp cạnh song song không? Còn hình diều thì sao?", "Hình chữ nhật có bắt buộc 4 cạnh bằng nhau không?"],
      explain: "Hình vuông là hình chữ nhật đặc biệt; hình thoi là hình bình hành đặc biệt. Ngược lại: hình thoi mới là hình diều đặc biệt (không phải ngược), và hình chữ nhật không cần 4 cạnh bằng nhau nên không phải hình thoi."
    }),
    Q("8.1-09", "multi", 3, "quad-hierarchy", "A quadrilateral has all four sides equal and all four angles 90°. Which names correctly describe it? (choose all)", {
      choices: ["Square", "Rectangle", "Rhombus", "A shape with exactly one pair of parallel sides"],
      answer: [0, 1, 2],
      hints: ["Hình đó thỏa mãn định nghĩa hình vuông chứ?", "Nó có 4 góc vuông, vậy có phải hình chữ nhật không? Có 4 cạnh bằng nhau, vậy có phải hình thoi không?", "Hình có cả hai cặp cạnh song song thì có thể có 'đúng một cặp' không?"],
      explain: "Đây là hình vuông, và hình vuông vừa là hình chữ nhật vừa là hình thoi. Nó có 2 cặp cạnh song song nên không thể là hình có đúng một cặp cạnh song song."
    }),
    Q("8.1-10", "num", 3, "polygon-rotation", "What is the smallest angle you can turn a regular octagon about its centre so that it fits exactly onto itself?", {
      answer: 45, unitLabel: "°",
      hints: ["Một vòng quay đầy đủ là bao nhiêu độ?", "Bát giác đều trùng khít với chính nó 8 lần trong một vòng.", "Chia 360° cho 8."],
      explain: "Bậc đối xứng quay là 8 nên góc quay nhỏ nhất là 360° ÷ 8 = 45°."
    })
  ];

  var s82 = [
    Q("8.2-01", "num", 1, "circumference", "Work out the circumference of a circle with diameter 6 cm. Use π ≈ 3.14 (answer to 1 d.p. is fine).", {
      answer: 18.84, tol: 0.1, unitLabel: "cm",
      hints: ["Công thức chu vi khi biết đường kính là gì?", "Thay d = 6 và π = 3,14 vào công thức.", "Tính 3,14 × 6."],
      explain: "C = πd = 3,14 × 6 = 18,84 cm, làm tròn 18,8 cm."
    }),
    Q("8.2-02", "num", 1, "circumference", "Work out the circumference of a circle with diameter 25 cm. Use π ≈ 3.14.", {
      answer: 78.5, tol: 0.1, unitLabel: "cm",
      hints: ["Em đã được cho đường kính hay bán kính?", "Dùng C = πd.", "Tính 3,14 × 25."],
      explain: "C = πd = 3,14 × 25 = 78,5 cm."
    }),
    Q("8.2-03", "num", 2, "circumference", "A circle has radius 7 cm. Use π ≈ 3.142 and give the circumference correct to 2 d.p.", {
      answer: 43.99, tol: 0.05, unitLabel: "cm",
      hints: ["Đề cho bán kính. Đường kính bằng mấy lần bán kính?", "d = 2 × 7 = ? rồi dùng C = πd.", "Tính 3,142 × 14."],
      explain: "d = 2r = 14 cm. C = 3,142 × 14 = 43,988 ≈ 43,99 cm."
    }),
    Q("8.2-04", "num", 2, "circumference", "A circle has radius 2.6 cm. Use π ≈ 3.14 and give the circumference to 1 d.p.", {
      answer: 16.3, tol: 0.1, unitLabel: "cm",
      hints: ["Tìm đường kính từ bán kính trước.", "d = 5,2 cm. Rồi C = πd.", "Tính 3,14 × 5,2."],
      explain: "d = 2 × 2,6 = 5,2 cm; C = 3,14 × 5,2 = 16,328 ≈ 16,3 cm."
    }),
    Q("8.2-05", "mc", 2, "circumference", "A circle has radius 5 cm. What is its circumference? (π ≈ 3.14)", {
      choices: ["15.7 cm", "31.4 cm", "78.5 cm", "62.8 cm"], answer: 1,
      hints: ["Đề cho bán kính 5 cm. Đường kính là bao nhiêu?", "Chu vi = π × đường kính.", "So sánh kết quả với 4 lựa chọn; có lựa chọn nào đến từ việc lấy π × bán kính hoặc πr² không?"],
      explain: "d = 10 nên C = 3,14 × 10 = 31,4 cm. 15,7 là sai vì dùng π × r; 78,5 là diện tích πr² (không phải chu vi); 62,8 là gấp đôi do dùng 2π × d."
    }),
    Q("8.2-06", "num", 2, "circumference", "Use the π button on your calculator. Circumference of a circle with diameter 9 cm, to 2 d.p.", {
      answer: 28.27, tol: 0.1, unitLabel: "cm",
      hints: ["Dùng nút π trên máy tính thay cho 3,14.", "C = π × 9.", "Làm tròn đến 2 chữ số thập phân."],
      explain: "C = π × 9 = 28,274... ≈ 28,27 cm."
    }),
    Q("8.2-07", "num", 2, "circumference-inverse", "The circumference of a circular disc is 39 cm. Use the π button. Work out the diameter, to 1 d.p.", {
      answer: 12.4, tol: 0.1, unitLabel: "cm",
      hints: ["C = πd. Muốn tìm d, em cần làm phép tính ngược nào?", "d = C ÷ π.", "Tính 39 ÷ π."],
      explain: "d = C ÷ π = 39 ÷ π = 12,414... ≈ 12,4 cm (124 mm)."
    }),
    Q("8.2-08", "num", 2, "circumference-inverse", "The circumference of a circle is 9.25 m. Use the π button. Work out the radius to 2 d.p.", {
      answer: 1.47, tol: 0.05, unitLabel: "m",
      hints: ["C = 2πr. Làm sao để tìm r?", "r = C ÷ (2π).", "Tính 9,25 ÷ (2 × π)."],
      explain: "r = C ÷ 2π = 9,25 ÷ 6,2832 = 1,472... ≈ 1,47 m."
    }),
    Q("8.2-09", "num", 3, "semicircle-perimeter", "Work out the perimeter of a semicircle with diameter 20 cm. Use the π button, 2 d.p. (Remember the straight edge!)", {
      answer: 51.42, tol: 0.1, unitLabel: "cm",
      svg: S("<path d='M30 110 A100 100 0 0 1 230 110 Z'/><text x='110' y='135' fill='currentColor' stroke='none' font-size='14'>20 cm</text>"),
      hints: ["Chu vi hình bán nguyệt gồm mấy phần?", "Phần cong bằng nửa chu vi đường tròn: πd ÷ 2. Phần thẳng là đường kính.", "Tính π × 20 ÷ 2 rồi cộng 20."],
      explain: "Cung = π × 20 ÷ 2 = 31,416; cộng đường kính 20 được 51,416 ≈ 51,42 cm. Lỗi thường gặp: quên cộng cạnh thẳng."
    }),
    Q("8.2-10", "mc", 3, "semicircle-perimeter", "Zara thinks a semicircle of diameter 15 m has a greater perimeter than a quarter-circle of radius 10 m. Who is right? (Include straight edges; use the π button.)", {
      choices: ["Zara is right: semicircle ≈ 38.56 m, quarter-circle ≈ 35.71 m", "Zara is wrong: quarter-circle is bigger because its radius is bigger", "They are equal", "Cannot tell without the area"],
      answer: 0,
      hints: ["Hình bán nguyệt: cung + đường kính 15 m. Cung bằng bao nhiêu?", "Hình quạt một phần tư: cung = 2π × 10 ÷ 4, cộng thêm hai bán kính 10 m.", "Tính hai chu vi rồi so sánh."],
      explain: "Bán nguyệt: π × 15 ÷ 2 + 15 = 23,56 + 15 = 38,56 m. Quạt 1/4: 2π × 10 ÷ 4 + 20 = 15,71 + 20 = 35,71 m. Bán kính lớn hơn nhưng chưa chắc chu vi lớn hơn, phải tính cả hai."
    })
  ];

  var s83 = [
    Q("8.3-01", "num", 1, "faces-edges", "How many faces does a triangular prism have?", {
      answer: 5,
      hints: ["Hãy phác thảo lăng trụ tam giác: có mấy mặt đáy hình tam giác?", "Có bao nhiêu mặt bên hình chữ nhật?", "Cộng hai đáy với các mặt bên."],
      explain: "2 mặt đáy tam giác + 3 mặt bên chữ nhật = 5 mặt."
    }),
    Q("8.3-02", "num", 1, "vertices", "How many vertices does a square-based pyramid have?", {
      answer: 5,
      hints: ["Đáy hình vuông có mấy đỉnh?", "Còn đỉnh phía trên cùng thì sao?", "Cộng lại."],
      explain: "4 đỉnh ở đáy + 1 đỉnh chóp = 5 đỉnh."
    }),
    Q("8.3-03", "num", 2, "faces-edges", "How many edges does a hexagonal prism have?", {
      answer: 18,
      hints: ["Mỗi đáy lục giác có mấy cạnh? Có mấy đáy?", "Có mấy cạnh bên nối hai đáy?", "6 + 6 + 6 = ?"],
      explain: "Hai đáy có 6 + 6 = 12 cạnh và có 6 cạnh bên, tổng 18 cạnh."
    }),
    Q("8.3-04", "mc", 2, "euler", "Which formula links faces (F), vertices (V) and edges (E) of any solid with flat faces?", {
      choices: ["F + V = E − 2", "F + V = E + 2", "F + E = V + 2", "F × V = E"],
      answer: 1,
      hints: ["Thử với hình lập phương: F = 6, V = 8, E = 12.", "Tính F + V rồi so với E.", "F + V lớn hơn E bao nhiêu?"],
      explain: "Với hình lập phương, F + V = 14 còn E = 12, nên F + V = E + 2 (công thức Euler). Lỗi thường gặp là đảo dấu +2 và −2."
    }),
    Q("8.3-05", "num", 3, "euler", "A solid has 7 faces and 15 edges. How many vertices does it have?", {
      answer: 10,
      hints: ["Dùng F + V = E + 2.", "Thay F = 7, E = 15: 7 + V = 17.", "Giải ra V."],
      explain: "V = E + 2 − F = 15 + 2 − 7 = 10. Đó là lăng trụ ngũ giác."
    }),
    Q("8.3-06", "num", 2, "scale-views", "A cuboid is 30 cm long, 20 cm wide and 10 cm high. You draw its views at scale 1 : 5. What is the area of the top view on your drawing?", {
      howto: "Imagine the top view drawn on paper at the given scale. Enter the area of that drawn shape on the paper, not the real area of the cuboid's top.",
      answer: 24, unitLabel: "cm²",
      hints: ["Mặt nhìn từ trên xuống là hình gì, có hai kích thước nào?", "Chia mỗi kích thước thật cho 5.", "Dài 6 cm, rộng 4 cm. Diện tích?"],
      explain: "Nhìn từ trên: hình chữ nhật 30 × 20 cm thật, vẽ 6 × 4 cm, diện tích 24 cm²."
    }),
    Q("8.3-07", "num", 2, "scale-views", "A cylinder has diameter 14 cm and height 10 cm. At scale 1 : 2, what is the area of its front view on the drawing?", {
      howto: "Imagine the front view drawn on paper at the given scale. Enter the area of that drawn shape on the paper, not the real area.",
      answer: 35, unitLabel: "cm²",
      hints: ["Nhìn từ phía trước, hình trụ trông như hình gì?", "Chiều rộng bằng đường kính, chiều cao bằng chiều cao hình trụ.", "Chia đôi cả hai: 7 và 5. Diện tích?"],
      explain: "Mặt nhìn trước là hình chữ nhật 14 × 10 cm, vẽ ở tỉ lệ 1:2 thành 7 × 5 cm, diện tích 35 cm²."
    }),
    Q("8.3-08", "mc", 2, "views", "A triangular prism lies with its triangular ends at the front and back. Which view shows a triangle?", {
      choices: ["Plan view (from above)", "Front elevation", "Side elevation", "None of them"],
      answer: 1,
      svg: S("<polygon points='60,120 130,50 200,120'/><polygon points='90,95 160,25 230,95' stroke-dasharray='4'/><line x1='130' y1='50' x2='160' y2='25'/><line x1='200' y1='120' x2='230' y2='95'/>"),
      hints: ["Nhìn từ trên xuống, em thấy hình gì của lăng trụ nằm?", "Nhìn từ bên cạnh thì sao?", "Đáy tam giác đối diện hướng nhìn nào?"],
      explain: "Đáy tam giác quay về phía trước nên nhìn thẳng từ trước thấy tam giác. Nhìn từ trên hoặc từ bên đều thấy hình chữ nhật. Lỗi hay gặp: nghĩ nhìn từ trên cũng thấy tam giác."
    }),
    Q("8.3-09", "num", 3, "views", "A staircase solid is made of 1 cm cubes: the front shows columns of 3, 2 and 1 cubes, and it is one cube deep. How many unit squares are in its front elevation?", {
      answer: 6,
      svg: S("<rect x='60' y='40' width='30' height='90'/><rect x='90' y='70' width='30' height='60'/><rect x='120' y='100' width='30' height='30'/>"),
      hints: ["Mỗi cột nhìn từ trước là một hình chữ nhật các ô vuông.", "Cột cao 3 có 3 ô, cột cao 2 có 2 ô, cột cao 1 có 1 ô.", "Cộng lại."],
      explain: "Mặt nhìn trước gồm 3 + 2 + 1 = 6 ô vuông đơn vị."
    }),
    Q("8.3-10", "num", 3, "scale-views", "A shipping container is 6 m long, 2.4 m wide and 2.6 m high. Draw it at scale 1 : 100. What is the area of the plan view on the drawing?", {
      howto: "Imagine the plan view (seen from above) drawn on paper at the given scale. Enter the area of that drawn shape in cm² on the paper, not the real area.",
      answer: 14.4, tol: 0.01, unitLabel: "cm²",
      hints: ["Đổi mét sang cm trước khi chia tỉ lệ.", "6 m = 600 cm → 6 cm trên hình; 2,4 m = 240 cm → ?", "Nhân hai kích thước trên hình."],
      explain: "Dài 600 cm ÷ 100 = 6 cm; rộng 240 cm ÷ 100 = 2,4 cm. Diện tích mặt nhìn trên = 6 × 2,4 = 14,4 cm²."
    })
  ];

  var ch = [
    V("ch-01", "num", 2, "quad-angle-sum", "Tứ giác ABCD có góc A = 80°, góc B = 100°, góc C = 70°. Tính số đo góc D.", {
      answer: 110, unitLabel: "°",
      hints: ["Tổng bốn góc của một tứ giác là bao nhiêu độ?", "Cộng ba góc đã biết.", "Lấy 360° trừ tổng đó."],
      explain: "Tổng các góc tứ giác là 360°. Góc D = 360° − (80° + 100° + 70°) = 110°."
    }),
    V("ch-02", "num", 3, "polygon-angle-sum", "Một đa giác có tổng các góc trong bằng 1440°. Đa giác đó có bao nhiêu cạnh?", {
      answer: 10,
      hints: ["Tổng góc trong đa giác n cạnh tính bằng công thức nào? (nghĩ đến chia thành các tam giác)", "(n − 2) × 180° = 1440°.", "Giải n − 2 = 8."],
      explain: "(n − 2) × 180 = 1440 nên n − 2 = 8, n = 10. Đó là thập giác."
    }),
    V("ch-03", "num", 3, "diagonals", "Một đa giác lồi có 12 cạnh. Hỏi nó có tất cả bao nhiêu đường chéo? (Gợi ý: số đường chéo = n(n − 3) ÷ 2)", {
      answer: 54,
      hints: ["Từ mỗi đỉnh vẽ được bao nhiêu đường chéo? (trừ chính nó và hai đỉnh kề)", "Từ mỗi đỉnh có 12 − 3 = 9 đường chéo. Với 12 đỉnh?", "Mỗi đường chéo bị đếm hai lần, nên chia 2."],
      explain: "12 × 9 = 108, mỗi đường chéo đếm hai lần nên có 108 ÷ 2 = 54 đường chéo."
    }),
    V("ch-04", "num", 3, "diagonals", "Một đa giác lồi có 35 đường chéo. Hỏi đa giác có bao nhiêu cạnh?", {
      answer: 10,
      hints: ["Dùng n(n − 3) ÷ 2 = 35.", "n(n − 3) = 70. Tìm hai số hơn kém nhau 3 có tích 70.", "Thử 10 và 7."],
      explain: "n(n − 3) = 70. Vì 10 × 7 = 70 nên n = 10."
    }),
    V("ch-05", "num", 3, "polygon-angle-sum", "Mỗi góc trong của một đa giác đều bằng 150°. Đa giác đều đó có bao nhiêu cạnh?", {
      answer: 12,
      hints: ["Góc ngoài tại mỗi đỉnh bằng 180° trừ góc trong. Bằng bao nhiêu?", "Tổng các góc ngoài của đa giác lồi luôn là 360°.", "Chia 360° cho 30°."],
      explain: "Góc ngoài = 180° − 150° = 30°. Số cạnh = 360° ÷ 30° = 12."
    }),
    V("ch-06", "num", 2, "wheel-circumference", "Một bánh xe có đường kính 70 cm (lấy π ≈ 22/7). Bánh xe lăn 100 vòng không trượt thì đi được bao nhiêu mét?", {
      answer: 220, unitLabel: "m",
      hints: ["Mỗi vòng lăn đi được quãng đường bằng chu vi bánh xe. Chu vi bằng bao nhiêu?", "C = (22/7) × 70 = 220 cm.", "Nhân với 100 vòng rồi đổi cm sang m."],
      explain: "C = 22/7 × 70 = 220 cm. 100 vòng được 22000 cm = 220 m."
    }),
    V("ch-07", "num", 3, "wheel-circumference", "Bánh xe đạp có bán kính 35 cm (π ≈ 22/7). Để đi quãng đường 2,2 km thì bánh xe phải lăn bao nhiêu vòng?", {
      answer: 1000,
      hints: ["Đường kính bằng bao nhiêu? Chu vi bằng bao nhiêu cm?", "C = 2 × 22/7 × 35 = 220 cm. Đổi 2,2 km sang cm.", "2,2 km = 220 000 cm. Chia cho chu vi."],
      explain: "C = 220 cm = 2,2 m. 2,2 km = 2200 m nên số vòng = 2200 ÷ 2,2 = 1000 vòng."
    }),
    V("ch-08", "num", 3, "prism-count", "Một hình lăng trụ đứng có tổng cộng 24 cạnh. Hỏi đáy của nó là đa giác có bao nhiêu cạnh?", {
      answer: 8,
      hints: ["Lăng trụ đáy n-giác có bao nhiêu cạnh đáy (cả hai đáy)?", "Và bao nhiêu cạnh bên? Tổng quát: 3n cạnh.", "3n = 24."],
      explain: "Lăng trụ đáy n-giác có n + n + n = 3n cạnh. 3n = 24 nên n = 8 (đáy là bát giác)."
    }),
    V("ch-09", "num", 3, "prism-count", "Một hình chóp có đáy là đa giác n cạnh và có tất cả 14 cạnh. Hỏi hình chóp có bao nhiêu đỉnh?", {
      answer: 8,
      hints: ["Hình chóp đáy n-giác có n cạnh đáy và bao nhiêu cạnh bên?", "Tổng số cạnh là 2n. Tìm n.", "Số đỉnh = n + 1."],
      explain: "Số cạnh = n + n = 2n = 14, n = 7. Số đỉnh = 7 + 1 = 8 (kiểm tra: F + V = E + 2 → 8 + 8 = 16 = 14 + 2)."
    }),
    V("ch-10", "mc", 3, "quad-hierarchy", "Một tứ giác có bốn cạnh bằng nhau và hai đường chéo bằng nhau. Tứ giác đó là hình gì?", {
      choices: ["Hình thoi (chưa chắc vuông)", "Hình vuông", "Hình chữ nhật (chưa chắc vuông)", "Hình bình hành bất kỳ"],
      answer: 1,
      hints: ["Tứ giác có 4 cạnh bằng nhau là hình gì?", "Hình thoi có hai đường chéo bằng nhau khi nào? (nghĩ đến 4 góc của nó)", "Hình thoi có đường chéo bằng nhau thì có góc vuông."],
      explain: "4 cạnh bằng nhau cho hình thoi. Hình thoi có hai đường chéo bằng nhau thì là hình chữ nhật, nên có 4 góc vuông và 4 cạnh bằng nhau: hình vuông."
    })
  ];

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 8,
    title: "Shapes and symmetry",
    titleVi: "Hình dạng và đối xứng",
    strand: "Geometry and measure",
    pages: [171, 197],
    realm: "Thành Phố Kiến Trúc Sư",
    emoji: "🏛️",
    story: "Em là thực tập sinh của một kiến trúc sư tài ba. Muốn xây tòa tháp cao nhất thành phố, em phải biết các hình tứ giác ghép với nhau thế nào, đo chu vi những mái vòm tròn và vẽ bản thiết kế nhìn từ trước, bên cạnh và từ trên xuống.",
    glossary: [
      { en: "regular polygon", vi: "đa giác đều", def: "Đa giác có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau." },
      { en: "quadrilateral", vi: "tứ giác", def: "Hình phẳng có bốn cạnh thẳng." },
      { en: "rotational symmetry", vi: "đối xứng quay", def: "Số lần hình trùng khít với chính nó khi xoay một vòng đầy đủ." },
      { en: "circumference", vi: "chu vi đường tròn", def: "Độ dài đường tròn, C = πd." },
      { en: "pi (π)", vi: "số pi", def: "Tỉ số giữa chu vi và đường kính đường tròn, khoảng 3,14." },
      { en: "vertex / edge / face", vi: "đỉnh / cạnh / mặt", def: "Góc, đoạn giao của hai mặt, và mặt phẳng của hình khối." },
      { en: "plan view", vi: "hình chiếu bằng", def: "Hình nhìn từ trên xuống." },
      { en: "front / side elevation", vi: "hình chiếu đứng / cạnh", def: "Hình nhìn từ phía trước / từ bên cạnh." }
    ],
    sections: [
      {
        id: "8.1", title: "Quadrilaterals and polygons", titleVi: "Tứ giác và đa giác",
        learn: [
          "Đa giác đều n cạnh có n cạnh bằng nhau, n trục đối xứng và đối xứng quay bậc n.",
          "Bảy tứ giác cần nhớ: hình vuông, hình chữ nhật, hình bình hành, hình thoi, hình diều, hình thang, hình thang cân.",
          "Hình bình hành: hai cặp cạnh song song và bằng nhau, các góc đối bằng nhau. Hình chữ nhật: thêm 4 góc vuông.",
          "Hình diều: hai cặp cạnh kề bằng nhau, một cặp góc đối bằng nhau. Hình thang cân: một cặp cạnh song song, hai cạnh bên bằng nhau, hai cặp góc bằng nhau.",
          "Thứ bậc các tứ giác: hình vuông là hình chữ nhật đặc biệt và cũng là hình thoi đặc biệt; hình thoi là hình bình hành và hình diều đặc biệt."
        ],
        example: {
          q: "Vẽ phác một hình bát giác đều, mô tả các cạnh và tính đối xứng. Hình có bao nhiêu trục đối xứng?",
          steps: ["Bát giác đều có 8 cạnh bằng nhau.", "Có 8 trục đối xứng.", "Xoay một vòng nó trùng khít 8 lần: đối xứng quay bậc 8."],
          prompts: ["'Bát' nghĩa là mấy? Một đa giác đều như thế có mấy cạnh, và các cạnh, các góc giống nhau thế nào?","Đa giác đều có thể gấp đôi theo những đường nào? Hãy đếm cả đường đi qua đỉnh và đường đi qua trung điểm cạnh.","Xoay hình quanh tâm đến khi trùng khít lần đầu: mỗi lần xoay bao nhiêu độ, và có bao nhiêu vị trí trùng khít trong một vòng?"],
          answer: {"type":"num","value":8},
          twist: {"q":"Một hình thập giác đều (10 cạnh) cần xoay quanh tâm ít nhất bao nhiêu độ để trùng khít với chính nó?","answer":{"type":"num","value":36}}
        },
        questions: s81
      },
      {
        id: "8.2", title: "The circumference of a circle", titleVi: "Chu vi đường tròn",
        learn: [
          "Chu vi chia cho đường kính của mọi đường tròn luôn xấp xỉ 3,14; số đó gọi là π.",
          "Công thức: C = πd, với d là đường kính. Vì d = 2r nên cũng có C = 2πr.",
          "π ≈ 3,14 hoặc 3,142 hoặc 22/7. Nút π trên máy tính cho giá trị chính xác hơn.",
          "Biết C, tìm đường kính: d = C ÷ π; tìm bán kính: r = C ÷ 2π.",
          "Chu vi hình bán nguyệt = nửa chu vi đường tròn + đường kính. Luôn cộng cả cạnh thẳng."
        ],
        example: {
          q: "Tính chu vi đường tròn bán kính 4 m (π = 3,14), làm tròn 1 chữ số thập phân.",
          steps: ["d = 2 × 4 = 8 m.", "C = πd = 3,14 × 8 = 25,12", "Làm tròn: 25,1 m."],
          prompts: ["Công thức chu vi dùng đường kính hay bán kính? Từ bán kính 4 m, em tìm đường kính thế nào?","Thay π = 3,14 và d vào công thức: C bằng bao nhiêu?","Đề yêu cầu làm tròn 1 chữ số thập phân: em nhìn chữ số thứ hai sau dấu phẩy để quyết định điều gì?"],
          answer: {"type":"num","value":25.1,"tol":0.05},
          twist: {"q":"Nếu bán kính tăng gấp đôi thành 8 m thì chu vi mới (π = 3,14, làm tròn 1 chữ số thập phân) là bao nhiêu mét?","answer":{"type":"num","value":50.2,"tol":0.05}}
        },
        questions: s82
      },
      {
        id: "8.3", title: "3D shapes", titleVi: "Hình khối",
        learn: [
          "Mặt là phần phẳng, đỉnh là góc, cạnh là nơi hai mặt gặp nhau. Hình hộp chữ nhật: 6 mặt, 8 đỉnh, 12 cạnh.",
          "Công thức Euler với hình khối có mặt phẳng: F + V = E + 2.",
          "Hình chiếu bằng nhìn từ trên xuống, hình chiếu đứng nhìn từ trước, hình chiếu cạnh nhìn từ bên.",
          "Vẽ theo tỉ lệ: đổi mọi kích thước sang cùng đơn vị rồi chia cho số bên phải của tỉ lệ. Tỉ lệ 1:5 nghĩa là 1 cm trên hình bằng 5 cm thật.",
          "Lăng trụ n-giác có n + 2 mặt, 2n đỉnh, 3n cạnh; hình chóp đáy n-giác có n + 1 mặt, n + 1 đỉnh, 2n cạnh."
        ],
        example: {
          q: "Hình hộp 35 cm × 10 cm × 15 cm (dài × cao × rộng). Vẽ ba hình chiếu ở tỉ lệ 1:5. Hỏi hình chiếu bằng (nhìn từ trên xuống) có kích thước bao nhiêu (dài × rộng, đơn vị cm)?",
          steps: ["Chia mỗi kích thước cho 5: 7 cm, 2 cm, 3 cm.", "Hình chiếu bằng: 7 × 3 cm.", "Hình chiếu đứng: 7 × 2 cm; hình chiếu cạnh: 3 × 2 cm."],
          prompts: ["Tỉ lệ 1:5 nghĩa là mỗi cạnh trên bản vẽ so với thực tế thế nào? Áp dụng cho từng kích thước 35, 10, 15.","Nhìn từ trên xuống, em thấy những kích thước nào của hộp (và không thấy kích thước nào)?","Nhìn từ phía trước, rồi nhìn từ cạnh bên: mỗi hình lộ ra cặp kích thước nào?"],
          answer: {"type":"text","value":"7×3","accept":["7x3","7*3","3×7","3x7","7cm×3cm","7 cm x 3 cm"]},
          twist: {"q":"Nếu tỉ lệ đổi thành 1:10 thì hình chiếu bằng (hộp thật 35 cm × 15 cm) có diện tích bao nhiêu cm² trên bản vẽ?","answer":{"type":"num","value":5.25}}
        },
        questions: s83
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Các bài toán lớp 7–8 về tứ giác, đa giác, đường tròn và hình khối đang chờ em ở cổng thành!",
      questions: ch
    },
    project: {
      title: "Quadrilateral tiling", titleVi: "Lát gạch bằng tứ giác",
      pages: [197],
      goal: "Khám phá vì sao mọi tứ giác đều có thể lát kín mặt phẳng (tessellate) mà không để hở, và tự thiết kế một mẫu lát gạch của riêng em.",
      steps: [
        "Vẽ một hình chữ nhật lớn, cắt thành nhiều hình chữ nhật nhỏ bằng nhau và xếp kín. Tại mỗi điểm gặp nhau có bốn góc 90° cộng lại bằng 360°.",
        "Vẽ một hình diều rồi vẽ hình chữ nhật bao quanh nó. Lát hình chữ nhật đó theo cùng một hướng. Em nhận thấy gì? Điều này có chứng minh được mọi hình diều lát kín mặt phẳng không?",
        "Vẽ một hình bình hành, cắt ra, đồ viền để tạo mẫu lát. Dùng tính chất các góc đối bằng nhau để giải thích vì sao các góc quanh một điểm cộng đủ 360°.",
        "Ghép hai hình thang giống hệt nhau để tạo thành hình bình hành. Từ đó giải thích vì sao hình thang lát được.",
        "Trên lưới chấm, vẽ một tứ giác bất kỳ (không đều) và xoay nó để bốn góc khác nhau của nó gặp nhau tại một điểm."
      ],
      extensions: [
        "Tô màu mẫu lát của em để tạo họa tiết gạch bông đẹp.",
        "Thử với tứ giác lõm (có một góc lớn hơn 180°). Nó có lát được không?",
        "Tìm ví dụ mẫu lát trong thực tế: sàn nhà, gạch lát, tổ ong."
      ],
      reflect: [
        "Vì sao tổng bốn góc của một tứ giác bằng 360° lại giúp mọi tứ giác lát kín được mặt phẳng?",
        "Có tứ giác nào không lát được không? Em giải thích bằng cách nào?",
        "Trong các tứ giác em đã lát, mẫu nào em thấy đẹp nhất và vì sao?"
      ]
    }
  });
})();
