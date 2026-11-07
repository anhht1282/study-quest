window.GAME_DATA = window.GAME_DATA || { units: [] };
(function () {
  function Q(o) {
    return {
      id: o.id, type: o.type, diff: o.diff, skill: o.skill,
      source: o.source || "book", lang: o.lang || "en",
      q: o.q, svg: o.svg || null, choices: o.choices || null,
      answer: o.answer, accept: o.accept || [], tol: o.tol || 0,
      unitLabel: o.unitLabel || "", hints: o.h, explain: o.e, why: o.why || null, howto: o.howto || null
    };
  }
  function V(o) { o.source = "vn"; o.lang = "vi"; return Q(o); }

  // ---------- SVG helpers ----------
  var ST = 'stroke="currentColor" fill="none" stroke-width="1.5"';
  function wrap(inner) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 160" ' + ST + '>' + inner + '</svg>';
  }
  function tx(x, y, s) {
    return '<text x="' + x + '" y="' + y + '" fill="currentColor" stroke="none" font-size="12" text-anchor="middle" dominant-baseline="middle">' + s + '</text>';
  }
  function ln(x1, y1, x2, y2) {
    return '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '"/>';
  }
  function chev(x, y) {
    return '<path d="M' + (x - 6) + ' ' + (y - 4) + ' L' + x + ' ' + y + ' L' + (x - 6) + ' ' + (y + 4) + '"/>';
  }
  // two parallel lines + transversal; t = angle (deg) at upper-right of the top crossing
  function par(t, labs) {
    var r = Math.PI / 180, y1 = 45, y2 = 115;
    var cot = Math.cos(t * r) / Math.sin(t * r);
    var xa = 130 + 35 * cot, xb = xa - 70 * cot;
    var dx = -Math.cos(t * r), dy = Math.sin(t * r);
    var s = ln(20, y1, 240, y1) + ln(20, y2, 240, y2) + chev(225, y1) + chev(225, y2) +
      ln(xa - 28 * dx, y1 - 28 * dy, xb + 28 * dx, y2 + 28 * dy);
    var phi = { UR: t / 2, UL: 90 + t / 2, LL: 180 + t / 2, LR: 270 + t / 2 };
    labs.forEach(function (l) {
      var cx = l[0] === 'T' ? xa : xb, cy = l[0] === 'T' ? y1 : y2;
      var rad = 17 + 3.2 * l[2].length;
      var a = phi[l[1]] * r;
      s += tx(cx + rad * Math.cos(a), cy - rad * Math.sin(a), l[2]);
    });
    return wrap(s);
  }
  // triangle ABC with BC extended to X
  function ext(lA, lB, lE) {
    return wrap(
      '<polygon points="105,32 40,130 150,130"/>' + ln(150, 130, 240, 130) +
      tx(105, 20, 'A') + tx(30, 142, 'B') + tx(150, 144, 'C') + tx(244, 142, 'X') +
      tx(105, 56, lA) + tx(66, 120, lB) + tx(184, 112, lE));
  }

  var fig51_9 = par(70, [['T', 'UL', 'a'], ['T', 'UR', 'b'], ['T', 'LL', 'd'], ['T', 'LR', 'c'],
    ['B', 'UL', 'e'], ['B', 'UR', 'f'], ['B', 'LL', 'h'], ['B', 'LR', 'g']]);
  var fig51_10 = wrap(
    ln(20, 40, 240, 40) + ln(20, 120, 240, 120) + chev(225, 40) + chev(225, 120) +
    ln(60, 120, 120, 40) + ln(120, 40, 190, 120) +
    tx(48, 132, 'A') + tx(202, 132, 'B') + tx(120, 28, 'C') +
    tx(82, 110, '50°') + tx(168, 110, '60°') +
    tx(96, 50, 'd') + tx(120, 66, 'c') + tx(146, 50, 'e'));
  var fig52_4 = wrap(
    ln(30, 130, 245, 130) + ln(100, 30, 30, 130) + ln(100, 30, 120, 130) + ln(100, 30, 185, 130) +
    tx(100, 20, 'B') + tx(20, 142, 'A') + tx(120, 144, 'D') + tx(185, 144, 'C') +
    tx(88, 56, '35°') + tx(124, 56, '30°') + tx(100, 116, '110°') + tx(214, 112, 'y'));
  var chFig1 = par(94, [['T', 'LR', '(2x+10)°'], ['B', 'UR', '(3x−20)°']]);
  var chFig5 = wrap(
    '<polygon points="80,32 30,130 230,130"/>' + ln(80, 32, 150, 130) +
    tx(80, 20, 'B') + tx(20, 142, 'A') + tx(150, 144, 'D') + tx(236, 142, 'C') +
    tx(58, 120, '70°') + tx(206, 120, '30°') + tx(128, 114, 'x'));
  var chFig6 = wrap(
    ln(20, 40, 240, 40) + ln(20, 120, 240, 120) + chev(228, 40) + chev(228, 120) +
    ln(110, 40, 85, 70) + ln(85, 70, 100, 120) +
    tx(110, 28, 'A') + tx(100, 134, 'B') + tx(70, 70, 'C') +
    tx(128, 58, '130°') + tx(126, 100, '110°') + tx(236, 30, 'x') + tx(236, 110, 'y'));

  window.GAME_DATA.units.push({
    id: 5,
    title: "Angles and constructions",
    titleVi: "Góc và dựng hình",
    strand: "Geometry and measure",
    pages: [105, 125],
    realm: "Thung Lũng Song Song",
    emoji: "📐",
    story: "Em đến Thung Lũng Song Song, nơi những đường ray tàu không bao giờ gặp nhau và mỗi cây cầu đều phải dựng chính xác bằng thước và compa. Muốn đi qua thung lũng, em phải chứng minh được các góc bằng nhau bằng lập luận chặt chẽ như nhà toán học Euclid xưa.",
    glossary: [
      { en: "vertically opposite angles", vi: "góc đối đỉnh", def: "Hai góc đối nhau khi hai đường thẳng cắt nhau; chúng luôn bằng nhau." },
      { en: "transversal", vi: "cát tuyến", def: "Đường thẳng cắt hai (hay nhiều) đường thẳng khác." },
      { en: "corresponding angles", vi: "góc đồng vị", def: "Hai góc cùng vị trí (hình chữ F) khi cát tuyến cắt hai đường song song; chúng bằng nhau." },
      { en: "alternate angles", vi: "góc so le trong", def: "Hai góc nằm giữa hai đường song song, hai phía của cát tuyến (hình chữ Z); chúng bằng nhau." },
      { en: "exterior angle of a triangle", vi: "góc ngoài của tam giác", def: "Góc tạo bởi một cạnh và phần kéo dài của cạnh kề; bằng tổng hai góc trong không kề với nó." },
      { en: "proof", vi: "chứng minh", def: "Lập luận logic, mỗi bước đều có lý do." },
      { en: "construct", vi: "dựng hình", def: "Vẽ chính xác bằng thước và compa." },
      { en: "arc", vi: "cung tròn", def: "Một phần của đường tròn, vẽ bằng compa." },
      { en: "bisector", vi: "đường phân giác / trung trực", def: "Đường chia một góc (hoặc một đoạn thẳng) thành hai phần bằng nhau." },
      { en: "hypotenuse", vi: "cạnh huyền", def: "Cạnh đối diện góc vuông trong tam giác vuông." }
    ],
    sections: [
      {
        id: "5.1",
        title: "Parallel lines",
        titleVi: "Đường thẳng song song",
        learn: [
          "Góc đối đỉnh (hình chữ X) luôn bằng nhau; hai góc kề nhau trên một đường thẳng cộng lại bằng 180°.",
          "Khi một cát tuyến cắt hai đường thẳng song song, các góc đồng vị (hình chữ F) bằng nhau.",
          "Các góc so le trong (hình chữ Z, nằm giữa hai đường song song) cũng bằng nhau.",
          "Hai góc trong cùng phía (nằm giữa hai đường song song, cùng một phía cát tuyến) bù nhau: tổng bằng 180°.",
          "Một chứng minh phải nêu lý do cho từng bước: «đối đỉnh», «đồng vị», «so le trong», «kề bù»."
        ],
        example: {
          q: "Hai đường thẳng song song bị một cát tuyến cắt. Góc phía trên-trái ở đỉnh dưới là 65°. Tìm góc phía dưới-phải ở đỉnh trên (so le trong với nó) và nêu lý do.",
          steps: ["Góc phía trên-trái ở đỉnh trên = 65° vì đồng vị với góc 65° ở đỉnh dưới.", "Góc phía dưới-phải ở đỉnh trên đối đỉnh với góc đó nên cũng = 65°.", "Kết luận: góc so le trong = 65° (đồng vị rồi đối đỉnh)."],
          prompts: ["Góc 65° ở đỉnh dưới và góc trên-trái ở đỉnh trên nằm ở vị trí nào so với hai đường song song: so le, đồng vị hay trong cùng phía? Hai góc đó có quan hệ gì?","Góc em vừa tìm và góc dưới-phải ở đỉnh trên có chung đỉnh và nằm đối nhau qua đỉnh. Hai góc như vậy có quan hệ gì?","Em tóm tắt thành một quy tắc: hai góc so le trong của hai đường song song thì thế nào với nhau?"],
          answer: {"type":"num","value":65},
          twist: {"q":"Hai đường thẳng song song bị một cát tuyến cắt; một góc trong là 65°. Góc trong cùng phía với nó bằng bao nhiêu độ?","answer":{"type":"num","value":115}}
        },
        questions: [
          Q({ id: "5.1-01", type: "num", diff: 1, skill: "corresponding-angles", q: "The two horizontal lines are parallel. Find x.", svg: par(62, [['T', 'UR', '62°'], ['B', 'UR', 'x']]), answer: 62, unitLabel: "°",
            h: ["Hai góc 62° và x nằm ở cùng vị trí ở đỉnh trên và đỉnh dưới. Em nhớ chữ cái nào gợi ý cho cặp góc này?", "Chữ F: đó là góc gì khi hai đường song song?", "Góc đồng vị thì bằng nhau hay bù nhau?"],
            e: "x và 62° là hai góc đồng vị; đường thẳng song song nên góc đồng vị bằng nhau. Vậy x = 62°." }),
          Q({ id: "5.1-02", howto: "Find the size of angle x in degrees. Think of the reason (the angle fact you use), but you only need to enter the number.", type: "num", diff: 1, skill: "vertically-opposite", q: "Find x. Give a reason.", svg: par(48, [['T', 'UR', '48°'], ['T', 'LL', 'x']]), answer: 48, unitLabel: "°",
            h: ["Hai đường thẳng nào cắt nhau tạo ra góc 48° và góc x?", "Hai góc này nằm đối diện nhau qua giao điểm (hình chữ X). Chúng có tên gọi là gì?", "Hai góc đối đỉnh bằng nhau hay cộng lại 180°?"],
            e: "x và 48° là hai góc đối đỉnh nên bằng nhau: x = 48°." }),
          Q({ id: "5.1-03", type: "mc", diff: 1, skill: "alternate-id", q: "In the diagram the two horizontal lines are parallel. Which pair of angles are alternate angles?", svg: fig51_9,
            choices: ["a and e", "d and e", "c and e", "b and f"], answer: 2,
            h: ["Góc so le trong nằm giữa hai đường song song. Trong các góc a, b, c, d, e, f, những góc nào nằm giữa hai đường?", "Hai góc so le trong nằm ở hai phía khác nhau của cát tuyến (hình chữ Z). Hãy kiểm tra từng cặp: góc nào ở bên trái, góc nào ở bên phải?", "Cặp nào gồm một góc giữa-bên-phải ở đường trên và một góc giữa-bên-trái ở đường dưới?"],
            e: "c (giữa hai đường, bên phải, đường trên) và e (giữa hai đường, bên trái, đường dưới) tạo thành chữ Z nên là so le trong. a và e, b và f là đồng vị; d và e nằm cùng phía nên là trong cùng phía (bù nhau)." }),
          Q({ id: "5.1-04", type: "num", diff: 2, skill: "alternate-angles", q: "The two lines marked with arrows are parallel. Find x.", svg: par(68, [['T', 'LR', '112°'], ['B', 'UL', 'x']]), answer: 112, unitLabel: "°",
            h: ["Hai góc 112° và x đều nằm giữa hai đường song song. Chúng ở cùng phía hay khác phía của cát tuyến?", "Hai góc giữa hai đường song song, khác phía cát tuyến, được gọi là gì?", "Góc so le trong bằng nhau hay bù nhau?"],
            e: "112° và x là hai góc so le trong (chữ Z) nên bằng nhau: x = 112°." }),
          Q({ id: "5.1-05", type: "num", diff: 2, skill: "parallel-two-step", q: "The horizontal lines are parallel. Work out x.", svg: par(136, [['T', 'UR', '136°'], ['B', 'LR', 'x']]), answer: 44, unitLabel: "°",
            h: ["Góc x ở đỉnh dưới (phía dưới-phải). Tìm góc ở đỉnh trên nằm cùng vị trí với x (góc đồng vị) — nó liên hệ thế nào với 136°?", "136° và góc đồng vị đó nằm kề nhau trên một đường thẳng. Tổng của chúng là bao nhiêu độ?", "Vậy góc đồng vị đó bằng 180° − 136° bằng bao nhiêu?"],
            e: "Góc dưới-phải ở đỉnh trên kề bù với 136° nên bằng 180° − 136° = 44°. x đồng vị với góc đó nên x = 44°." }),
          Q({ id: "5.1-06", type: "mc", diff: 2, skill: "supplementary-misconception", q: "Two lines cross a transversal. At the top crossing, one angle is 105°. Chen says the angle y next to it (on the same straight line) is also 105°. Which statement is correct?", svg: par(105, [['T', 'UR', '105°'], ['T', 'LR', 'y']]),
            choices: ["y = 105°, because angles next to each other are equal", "y = 75°, because angles on a straight line add up to 180°", "y = 105°, because they are vertically opposite", "y = 15°, because the lines are parallel"], answer: 1,
            h: ["Hai góc 105° và y có chung một cạnh và nằm trên cùng một đường thẳng. Chúng là góc gì?", "Hai góc có tính chất «bằng nhau» là hai góc đối đỉnh. 105° và y có đối đỉnh không?", "Tổng hai góc trên một đường thẳng là bao nhiêu?"],
            e: "105° và y kề bù (trên một đường thẳng) nên y = 180° − 105° = 75°. Lỗi hay gặp: nhầm hai góc kề nhau là bằng nhau (chỉ đối đỉnh mới bằng nhau)." }),
          Q({ id: "5.1-07", howto: "x is the letter inside the angle label (2x + 10)°. Enter the value of x, not the size of the angle.", type: "num", diff: 2, skill: "parallel-algebra", q: "The lines are parallel. Find the value of x.", svg: par(70, [['T', 'UR', '(2x+10)°'], ['B', 'UR', '70°']]), answer: 30,
            h: ["Hai góc (2x + 10)° và 70° là cặp góc gì (nhớ chữ F)?", "Vì chúng bằng nhau, em viết được phương trình nào?", "Giải 2x + 10 = 70: trừ 10 hai vế rồi chia 2 được bao nhiêu?"],
            e: "Đồng vị nên 2x + 10 = 70 ⇒ 2x = 60 ⇒ x = 30." }),
          Q({ id: "5.1-08", type: "mc", diff: 3, skill: "disprove-parallel", q: "A student draws two lines crossing a transversal. A pair of corresponding angles are measured as 58° and 62°. What can you conclude?", svg: par(58, [['T', 'UR', '58°'], ['B', 'UR', '62°']]),
            choices: ["The lines are parallel, because the lines look equally spaced", "The lines are parallel, because 58° and 62° are close enough", "The lines cannot be parallel, because corresponding angles of parallel lines must be equal", "The lines cannot be parallel, because alternate angles are 58° and 62°"], answer: 2,
            h: ["Nếu hai đường song song thì hai góc đồng vị phải như thế nào với nhau?", "58° và 62° có bằng nhau không?", "Từ điều trái ngược đó em kết luận gì về hai đường?"],
            e: "Hai đường song song ⇒ góc đồng vị bằng nhau. Ở đây 58° ≠ 62° nên hai đường không thể song song. Không được kết luận dựa vào «nhìn giống nhau» hay «gần bằng»." }),
          Q({ id: "5.1-09", type: "mc", diff: 3, skill: "proof-alternate", q: "The horizontal lines are parallel. Which argument correctly proves that alternate angles c and e are equal?", svg: fig51_9,
            choices: ["c = b because vertically opposite; b = e because corresponding", "c = a because vertically opposite; a = e because corresponding", "c = a because corresponding; a = e because vertically opposite", "c = g because alternate; g = e because vertically opposite"], answer: 1,
            h: ["Muốn chuyển từ c sang e, em cần một góc trung gian. c đối đỉnh với góc nào ở đỉnh trên?", "Góc trung gian đó (a) và e nằm ở cùng vị trí ở hai đỉnh khác nhau. Chúng là cặp góc gì?", "Kiểm tra từng lựa chọn: lý do «đối đỉnh» và «đồng vị» có dùng đúng cặp góc không?"],
            e: "c và a là hai góc đối đỉnh (X) nên c = a; a và e là hai góc đồng vị (F) nên a = e. Vậy c = e. Các lựa chọn khác dùng sai cặp góc hoặc dùng sai lý do (c và b là kề bù, c và g là đồng vị chứ không phải so le trong)." }),
          Q({ id: "5.1-10", type: "num", diff: 3, skill: "triangle-sum-proof", q: "AB and CD are parallel lines, and C lies on CD. Angle A = 50° and angle B = 60° in triangle ABC. Use angles d and e at C to work out angle c.", svg: fig51_10, answer: 70, unitLabel: "°",
            h: ["Góc d ở C liên hệ thế nào với góc A (2 góc so le trong giữa hai đường song song)?", "Tương tự, góc e liên hệ thế nào với góc B?", "Ba góc d, c, e nằm cạnh nhau trên một đường thẳng. Tổng của chúng bằng bao nhiêu? Từ đó tìm c."],
            why: { q: "Why is d = 50°?", choices: ["d and angle A are alternate angles between parallel lines", "d and angle A are vertically opposite", "d and angle A add up to 180°"], answer: 0 },
            e: "d = A = 50° (so le trong), e = B = 60° (so le trong). Trên đường thẳng CD: d + c + e = 180° nên c = 180° − 50° − 60° = 70°. Đây chính là chứng minh tổng ba góc tam giác bằng 180°." })
        ]
      },
      {
        id: "5.2",
        title: "The exterior angle of a triangle",
        titleVi: "Góc ngoài của tam giác",
        learn: [
          "Kéo dài một cạnh của tam giác ra ngoài; góc tạo bởi cạnh kề và phần kéo dài là góc ngoài.",
          "Góc ngoài + góc trong kề với nó = 180° (kề bù).",
          "Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó.",
          "Chứng minh: a + b + c = 180° và c + d = 180° nên d = a + b.",
          "Tổng ba góc ngoài (mỗi đỉnh lấy một góc) của một tam giác luôn bằng 360°."
        ],
        example: {
          q: "Tam giác ABC có góc A = 50°, góc B = 65°. Kéo dài BC về phía C. Tính góc ngoài tại C.",
          steps: ["Góc ngoài tại C bằng tổng hai góc trong không kề: A + B", "= 50° + 65° = 115°", "Kiểm tra: góc C = 180° − 115° = 65°; 65° + 115° = 180° ✔"],
          prompts: ["Góc ngoài tại C liên hệ thế nào với góc C trong tam giác, và với hai góc trong không kề?","Thay giá trị của góc A và góc B vào quan hệ đó: góc ngoài là bao nhiêu?","Em có cách kiểm tra khác bằng tổng ba góc trong tam giác không?"],
          answer: {"type":"num","value":115},
          twist: {"q":"Nếu góc A = 50° và góc ngoài tại C là 130° thì góc B bằng bao nhiêu độ?","answer":{"type":"num","value":80}}
        },
        questions: [
          Q({ id: "5.2-01", type: "num", diff: 1, skill: "exterior-angle", q: "Work out the exterior angle x of the triangle.", svg: ext('80°', '45°', 'x'), answer: 125, unitLabel: "°",
            h: ["Góc x nằm ở C, ngoài tam giác. Hai góc trong không kề với x là những góc nào?", "Góc ngoài bằng tổng hay hiệu của hai góc trong đó?", "Hãy cộng 80° và 45°."],
            e: "Góc ngoài bằng tổng hai góc trong không kề: x = 80° + 45° = 125°." }),
          Q({ id: "5.2-02", type: "num", diff: 1, skill: "exterior-find-interior", q: "The exterior angle at C is 128° and the interior angle at A is 75°. Work out y, the interior angle at B.", svg: ext('75°', 'y', '128°'), answer: 53, unitLabel: "°",
            h: ["Góc ngoài 128° bằng tổng của hai góc nào?", "Em đã biết một trong hai góc đó là 75°. Viết phép tính: 75° + y = ?", "Vậy y = 128° − 75° bằng bao nhiêu?"],
            e: "Góc ngoài = A + B nên 128° = 75° + y, suy ra y = 53°." }),
          Q({ id: "5.2-03", howto: "x is the letter inside the angle expressions. Enter the value of x, not the size of any angle.", type: "num", diff: 2, skill: "exterior-algebra", q: "An exterior angle of a triangle is (3x + 10)°. The two opposite interior angles are 50° and 2x°. Find x.", answer: 40,
            h: ["Góc ngoài bằng tổng hai góc trong không kề. Viết phương trình theo x.", "Em được 3x + 10 = 50 + 2x. Muốn gom x về một vế, em làm gì?", "Trừ 2x ở hai vế rồi trừ 10: x bằng bao nhiêu?"],
            e: "3x + 10 = 50 + 2x ⇒ x = 40. Kiểm tra: góc ngoài = 130° và 50° + 80° = 130° ✔." }),
          Q({ id: "5.2-04", type: "num", diff: 2, skill: "exterior-two-triangles", q: "A, D and C lie on a straight line. In the diagram, angle ABD = 35°, angle DBC = 30° and angle ADB = 110°. Work out y, the exterior angle of triangle BCD at C.", svg: fig52_4, answer: 100, unitLabel: "°",
            h: ["Góc y là góc ngoài của tam giác BCD. Hai góc trong không kề với nó là những góc nào?", "Một trong hai góc đó là DBC = 30°. Còn góc BDC thì tính từ 110° bằng cách nào (A, D, C thẳng hàng)?", "Cộng BDC với 30° để được y."],
            e: "∠BDC = 180° − 110° = 70° (kề bù). y là góc ngoài của tam giác BCD nên y = ∠BDC + ∠DBC = 70° + 30° = 100°." }),
          Q({ id: "5.2-05", type: "num", diff: 2, skill: "exterior-isosceles", q: "ABC is isosceles with AB = AC and angle A = 48°. AB is extended beyond B to a point D. Work out the exterior angle CBD.", answer: 114, unitLabel: "°",
            h: ["Tam giác cân AB = AC thì hai góc nào bằng nhau?", "Hai góc ở đáy mỗi góc bằng (180° − 48°) chia 2. Là bao nhiêu?", "Góc ngoài tại B bằng tổng hai góc trong không kề: góc A và góc C."],
            e: "∠B = ∠C = (180° − 48°) ÷ 2 = 66°. Góc ngoài tại B = ∠A + ∠C = 48° + 66° = 114° (cũng bằng 180° − 66°)." }),
          Q({ id: "5.2-06", type: "mc", diff: 2, skill: "exterior-misconception", q: "In triangle ABC, angle A = 60° and angle B = 50°. Side BC is extended to X. What is the exterior angle ACX?",
            choices: ["70°", "110°", "120°", "130°"], answer: 1,
            h: ["Góc ngoài tại C bằng tổng của hai góc trong nào?", "Em đừng chọn góc trong ∠C (đó là 70°). Hãy tính tổng A + B.", "60° + 50° = ? Sau đó kiểm tra: góc ngoài + 70° có bằng 180° không?"],
            e: "Góc ngoài = 60° + 50° = 110°. Sai lầm hay gặp: 70° là góc TRONG tại C; 120° = 180° − 60° và 130° = 180° − 50° chỉ dùng một góc." }),
          Q({ id: "5.2-07", howto: "Find the size of angle EDC, the angle at D between DE and DC (marked x in the diagram). Enter it in degrees.", type: "num", diff: 3, skill: "exterior-parallel", svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 260 160\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\"><line x1=\"130\" y1=\"18\" x2=\"90\" y2=\"145\"/><line x1=\"90\" y1=\"145\" x2=\"170\" y2=\"145\"/><line x1=\"170\" y1=\"145\" x2=\"130\" y2=\"18\"/><line x1=\"150\" y1=\"81.5\" x2=\"130\" y2=\"145\"/><path d=\"M105.4 92.3 L109.2 84.8 L113.0 92.3\"/><path d=\"M136.2 118.3 L140.0 110.8 L143.8 118.3\"/><text x=\"130\" y=\"8\" fill=\"currentColor\" stroke=\"none\" font-size=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\">A</text><text x=\"82\" y=\"150\" fill=\"currentColor\" stroke=\"none\" font-size=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\">B</text><text x=\"178\" y=\"150\" fill=\"currentColor\" stroke=\"none\" font-size=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\">C</text><text x=\"159\" y=\"78\" fill=\"currentColor\" stroke=\"none\" font-size=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\">D</text><text x=\"130\" y=\"155\" fill=\"currentColor\" stroke=\"none\" font-size=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\">E</text><text x=\"108\" y=\"135\" fill=\"currentColor\" stroke=\"none\" font-size=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\">72°</text><text x=\"151\" y=\"101\" fill=\"currentColor\" stroke=\"none\" font-size=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\">x</text></svg>", q: "Triangle ABC is isosceles with AB = AC and angle ABC = 72°. D lies on AC and E lies on BC so that DE is parallel to AB. Work out angle EDC.", answer: 36, unitLabel: "°",
            h: ["Vì AB = AC, góc ACB bằng góc nào? Từ đó góc A bằng bao nhiêu?", "DE song song AB: góc EDC và góc nào của tam giác ABC là hai góc đồng vị?", "Hai góc đồng vị thì bằng nhau; đáp án là góc A."],
            e: "∠C = ∠B = 72° nên ∠A = 180° − 144° = 36°. DE ∥ AB nên ∠EDC = ∠A = 36° (đồng vị)." }),
          Q({ id: "5.2-08", type: "num", diff: 3, skill: "sum-exterior-360", q: "Two exterior angles of a triangle are 130° and 110°. Work out the third exterior angle.", answer: 120, unitLabel: "°",
            h: ["Mỗi góc ngoài cộng với góc trong kề nó bằng bao nhiêu? Tìm hai góc trong ứng với 130° và 110°.", "Hai góc trong đó là 50° và 70°. Góc trong thứ ba bằng bao nhiêu?", "Từ góc trong thứ ba, suy ra góc ngoài thứ ba."],
            why: { q: "Why do the three exterior angles of a triangle always add up to 360°?", choices: ["Each exterior angle = 180° − interior angle, so total = 3 × 180° − 180° = 360°", "Because a triangle has three sides and 3 × 120° = 360°", "Because the exterior angles are always equal"], answer: 0 },
            e: "Góc trong: 180° − 130° = 50°, 180° − 110° = 70°, góc trong thứ ba = 60°, nên góc ngoài thứ ba = 120°. Cách nhanh: 360° − 130° − 110° = 120°." }),
          Q({ id: "5.2-09", type: "mc", diff: 3, skill: "proof-exterior", q: "Which argument correctly proves that the exterior angle d of a triangle equals the sum of the two opposite interior angles a and b (c is the interior angle next to d)?",
            choices: ["a + b + c = 180° and c + d = 180° (straight line), so a + b = d", "a + b + c = 180° and d = c because they are vertically opposite, so d = a + b", "The exterior angle is outside the triangle so it is greater than 180°, which gives d = a + b", "d and c are corresponding angles, so d = c, and then d = a + b"], answer: 0,
            h: ["Em biết hai sự thật nào về a, b, c và về c, d?", "Hai góc c và d có chung đỉnh và nằm trên một đường thẳng, nên chúng liên hệ thế nào?", "Hãy so sánh hai phương trình a + b + c = 180° và c + d = 180° — hai vế phải giống nhau thì suy ra điều gì?"],
            e: "Trừ c ở hai đẳng thức: a + b = 180° − c và d = 180° − c, vậy d = a + b. Các cách khác dùng sai lý do (d và c kề bù, không đối đỉnh hay đồng vị) hoặc sai sự thật (góc ngoài nhỏ hơn 180°)." }),
          Q({ id: "5.2-10", type: "num", diff: 3, skill: "star-angles", q: "A five-pointed star is drawn by joining the vertices of a pentagon. The angles at four of the points are 30°, 40°, 35° and 45°. The angles at all five points add up to 180°. Work out the angle at the fifth point.", answer: 30, unitLabel: "°",
            h: ["Tổng năm góc ở năm đỉnh nhọn của ngôi sao là bao nhiêu?", "Tổng bốn góc đã biết 30° + 40° + 35° + 45° bằng bao nhiêu?", "Lấy tổng chung trừ đi tổng bốn góc."],
            e: "30° + 40° + 35° + 45° = 150°; góc còn lại = 180° − 150° = 30°. (Tổng 180° được chứng minh bằng cách dùng góc ngoài của tam giác hai lần.)" })
        ]
      },
      {
        id: "5.3",
        title: "Constructions",
        titleVi: "Dựng hình bằng thước và compa",
        learn: [
          "Dựng tam giác khi biết hai góc và cạnh xen giữa (ASA): vẽ cạnh, vẽ hai góc ở hai đầu, giao điểm hai tia là đỉnh thứ ba.",
          "Biết hai cạnh và góc xen giữa (SAS): vẽ góc trước, đo hai cạnh trên hai tia, nối hai đầu.",
          "Biết ba cạnh (SSS): vẽ một cạnh, dùng compa vẽ hai cung từ hai đầu với bán kính bằng hai cạnh kia; giao điểm hai cung là đỉnh thứ ba (cần hai cạnh nhỏ cộng lại lớn hơn cạnh còn lại).",
          "Tam giác vuông biết cạnh huyền và một cạnh góc vuông (RHS): vẽ cạnh, dựng góc vuông, rồi dùng cung bằng cạnh huyền từ đầu kia.",
          "Đường trung trực của đoạn thẳng đi qua trung điểm và vuông góc; đường phân giác chia góc thành hai góc bằng nhau. Không tẩy các nét dựng."
        ],
        example: {
          q: "Nêu các bước dựng tam giác ABC có AB = 5 cm, BC = 4 cm, AC = 4,5 cm.",
          steps: ["Vẽ đoạn AB = 5 cm.", "Mở compa 4,5 cm, đặt mũi tại A, vẽ một cung.", "Mở compa 4 cm, đặt mũi tại B, vẽ cung cắt cung trước tại C.", "Nối AC và BC."],
          prompts: ["Để bắt đầu dựng, em cố định phần nào của tam giác trước, và dùng dụng cụ nào?","Điểm C cách A đúng 4,5 cm. Tập hợp các điểm như thế trông thế nào, và em vẽ nó bằng cách nào?","C cũng phải cách B đúng 4 cm. Vậy C nằm ở đâu so với hai cung vừa vẽ?","Có C rồi, còn thiếu những đoạn nào để hoàn thiện tam giác?"],
          answer: null,
          twist: {"q":"Nếu đổi thành AB = 5 cm, BC = 2 cm, AC = 2 cm thì có dựng được tam giác không? Trả lời 'có' hoặc 'không'.","answer":{"type":"text","value":"không","accept":["khong","no","không dựng được","khong dung duoc"]}}
        },
        questions: [
          Q({ id: "5.3-01", type: "mc", diff: 1, skill: "construct-sss", q: "You know the three sides of a triangle but none of the angles (SSS). Which method is correct?",
            choices: ["Draw one side, then draw arcs from each end with radii equal to the other two sides; the arcs cross at the third vertex", "Draw one side, then use a protractor to draw two 60° angles at the ends", "Draw the three sides as separate lines and slide them until they meet", "Draw the longest side and measure the angle with a ruler"], answer: 0,
            h: ["Khi không biết góc nào, em dùng dụng cụ nào để «chuyển» độ dài một cạnh sang vị trí mới?", "Đỉnh thứ ba phải cách hai đầu đoạn đã vẽ những khoảng nào?", "Hai cung tròn giao nhau cho em điều gì?"],
            e: "Đỉnh thứ ba cách hai đầu cạnh đã vẽ lần lượt bằng hai cạnh còn lại, nên nó là giao điểm của hai cung có bán kính đúng bằng hai cạnh đó." }),
          Q({ id: "5.3-02", type: "mc", diff: 1, skill: "construct-asa", q: "Construct triangle ABC with AB = 8 cm, angle A = 60° and angle B = 50°. Which order of steps is correct?",
            choices: ["Draw AB = 8 cm; draw a 60° line at A and a 50° line at B; C is where the two lines cross", "Draw AB = 8 cm; draw a 60° line at A; open the compasses to 8 cm and mark C from B", "Draw AB and arcs of 60 cm and 50 cm", "Draw the 60° and 50° angles at the same point and join them"], answer: 0,
            h: ["Cạnh AB nằm giữa hai góc đã cho. Em nên vẽ cạnh trước hay góc trước?", "Hai góc 60° và 50° nằm ở những điểm nào?", "Đỉnh C xuất hiện ở đâu khi vẽ hai tia?"],
            e: "ASA: vẽ cạnh AB trước, rồi vẽ các góc ở hai đầu A và B; giao điểm của hai tia là C." }),
          Q({ id: "5.3-03", type: "mc", diff: 1, skill: "perp-bisector", q: "Which describes correctly how to construct the perpendicular bisector of a line segment AB?",
            choices: ["Open the compasses to more than half of AB; draw arcs above and below from A, repeat with the same width from B; join the two crossing points", "Draw one arc from A only, and join its end to B", "Open the compasses to a very small width and draw arcs from A and B so that they meet in the middle", "Measure a point near the middle and draw a line through it at any angle"], answer: 0,
            h: ["Để hai cung từ A và từ B cắt nhau thì bán kính compa phải lớn hơn hay nhỏ hơn nửa AB?", "Em có cần đổi độ mở compa giữa lúc vẽ cung từ A và từ B không?", "Nối hai giao điểm cho ta đường gì, đi qua điểm nào của AB?"],
            e: "Với cùng một bán kính (lớn hơn nửa AB), hai cung từ A và B cắt nhau ở hai điểm cách đều A và B; đường nối hai điểm đó đi qua trung điểm và vuông góc với AB." }),
          Q({ id: "5.3-04", type: "mc", diff: 1, skill: "construct-rhs", q: "A right-angled triangle ABC has a right angle at A, hypotenuse BC = 9 cm and AB = 7 cm. You have drawn AB and the perpendicular at A. How do you find C?",
            choices: ["Set the compasses to 9 cm, put the point on B and draw an arc crossing the perpendicular; that crossing point is C", "Set the compasses to 9 cm, put the point on A and draw an arc crossing the perpendicular", "Measure 9 cm along AB from A", "Draw another right angle at B"], answer: 0,
            h: ["Cạnh huyền là cạnh nối hai điểm nào (đối diện góc vuông)?", "C phải cách B bao nhiêu cm? Vậy tâm cung tròn đặt ở đâu?", "C cũng phải nằm trên đường nào đã vẽ vuông góc tại A?"],
            e: "Cạnh huyền BC = 9 cm nên C cách B đúng 9 cm: vẽ cung tâm B bán kính 9 cm cắt đường vuông góc dựng tại A." }),
          Q({ id: "5.3-05", type: "num", diff: 2, skill: "third-angle", q: "You construct a triangle using ASA with angles of 65° and 42° and the side between them. What is the size of the third angle?", answer: 73, unitLabel: "°",
            h: ["Tổng ba góc của tam giác bằng bao nhiêu?", "Tổng hai góc đã cho là bao nhiêu?", "Lấy tổng chung trừ tổng hai góc."],
            e: "65° + 42° = 107°; góc thứ ba = 180° − 107° = 73°." }),
          Q({ id: "5.3-06", type: "num", diff: 2, skill: "angle-bisector", q: "You construct the bisector of an angle of 126°. How big is each of the two equal angles?", answer: 63, unitLabel: "°",
            h: ["Đường phân giác chia góc thành mấy phần?", "Hai phần đó bằng nhau hay khác nhau?", "126° chia cho 2 bằng bao nhiêu?"],
            e: "Đường phân giác chia góc thành hai góc bằng nhau: 126° ÷ 2 = 63°." }),
          Q({ id: "5.3-07", type: "mc", diff: 2, skill: "triangle-inequality", q: "Maya says: 'I know all three sides, 3 cm, 4 cm and 8 cm, so I can always construct the triangle with compasses.' Is she right?",
            choices: ["Yes, any three lengths make a triangle", "No, because the two short sides 3 cm + 4 cm = 7 cm are shorter than 8 cm, so the arcs cannot meet", "No, because a triangle needs a right angle", "Yes, as long as she uses a sharp pencil"], answer: 1,
            h: ["Vẽ cạnh 8 cm. Hai cung bán kính 3 cm và 4 cm vẽ từ hai đầu: chúng với tới nhau không?", "Để hai cung gặp nhau, tổng hai bán kính phải so với 8 cm như thế nào?", "3 + 4 so với 8 thì sao?"],
            e: "Hai cạnh ngắn cộng lại phải lớn hơn cạnh dài nhất. 3 + 4 = 7 < 8 nên hai cung không cắt nhau: không dựng được tam giác. Sai lầm: nghĩ rằng ba độ dài bất kỳ đều tạo thành tam giác." }),
          Q({ id: "5.3-08", type: "num", diff: 2, skill: "rhs-third-side", q: "The hypotenuse of a right-angled triangle is 12.5 cm and one of the other sides is 10 cm. (Notice that 10 : 12.5 = 4 : 5, so it is a scaled 3-4-5 triangle.) How long is the third side?", answer: 7.5, tol: 0.1, unitLabel: "cm",
            h: ["Tam giác 3-4-5 có cạnh huyền 5 và hai cạnh góc vuông 3 và 4. Cạnh 10 ứng với cạnh nào?", "Hệ số phóng to từ 4 lên 10 là bao nhiêu? (và từ 5 lên 12,5?)", "Nhân hệ số đó với 3 để tìm cạnh còn lại."],
            e: "Hệ số phóng là 2,5 (4 × 2,5 = 10; 5 × 2,5 = 12,5). Cạnh còn lại = 3 × 2,5 = 7,5 cm. Có thể kiểm tra bằng bản vẽ chính xác." }),
          Q({ id: "5.3-09", type: "mc", diff: 3, skill: "two-triangles", q: "Two sides of a right-angled triangle are 10.5 cm and 8.3 cm. Zara says the third side is about 6.4 cm. Arun says it is about 13.4 cm. Who can be right?",
            choices: ["Only Zara", "Only Arun", "Both: 10.5 cm could be the hypotenuse (third side ≈ 6.4 cm), or the two given sides could be the shorter sides (hypotenuse ≈ 13.4 cm)", "Neither, the triangle cannot exist"], answer: 2,
            h: ["Em chưa biết 10,5 cm có phải cạnh huyền hay không. Hãy xét hai khả năng.", "Nếu 10,5 là cạnh huyền thì cạnh còn lại phải ngắn hơn hay dài hơn 10,5?", "Nếu cả hai cạnh đã cho là cạnh góc vuông thì cạnh huyền dài hơn hay ngắn hơn chúng?"],
            e: "Đề không nói cạnh nào là cạnh huyền. Nếu 10,5 là huyền thì cạnh còn lại ≈ 6,4 cm; nếu 10,5 và 8,3 là hai cạnh góc vuông thì huyền ≈ 13,4 cm. Cả hai đều đúng." }),
          Q({ id: "5.3-10", type: "mc", diff: 3, skill: "bisector-concurrency", q: "Marcus says: 'The perpendicular bisectors of the three sides of a triangle meet at one point.' Sofia says: 'The bisectors of the three angles of a triangle meet at one point.' After careful constructions on several different triangles, what do you expect?",
            choices: ["Only Marcus is right", "Only Sofia is right", "Both are right for every triangle", "Neither is right"], answer: 2,
            h: ["Hãy thử dựng thật chính xác trên một tam giác nhọn rồi một tam giác tù.", "Ba đường trung trực có cùng đi qua một điểm không? Còn ba đường phân giác?", "Nếu kết quả giống nhau trên nhiều tam giác khác nhau, em kết luận gì (và vì sao vẫn chưa phải chứng minh)?"],
            e: "Cả hai đều đúng với mọi tam giác: ba đường trung trực đồng quy ở tâm đường tròn ngoại tiếp, ba đường phân giác đồng quy ở tâm đường tròn nội tiếp. Dựng hình chỉ cho ta dự đoán, muốn chắc chắn phải chứng minh." })
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Cổng thung lũng chỉ mở khi em giải được các bài toán góc và chứng minh song song kiểu lớp 7.",
      questions: [
        V({ id: "ch-01", howto: "Câu hỏi hỏi số đo của góc lớn hơn trong hai góc (theo độ), không phải giá trị của x.", type: "num", diff: 3, skill: "co-interior-algebra", q: "Cho a // b, cát tuyến c cắt a, b. Hai góc trong cùng phía có số đo (2x + 10)° và (3x − 20)° như hình. Tính số đo góc lớn hơn trong hai góc đó.", svg: chFig1, answer: 94, unitLabel: "°",
          h: ["Hai góc trong cùng phía của hai đường thẳng song song có quan hệ gì?", "Viết phương trình: (2x + 10) + (3x − 20) = 180. Giải x.", "Thay x vào cả hai biểu thức, chọn số lớn hơn."],
          e: "Trong cùng phía bù nhau: 5x − 10 = 180 ⇒ x = 38. Hai góc là 86° và 94°. Góc lớn hơn là 94°." }),
        V({ id: "ch-02", type: "num", diff: 2, skill: "co-interior-sum-diff", q: "Hai đường thẳng song song bị một cát tuyến cắt. Hai góc trong cùng phía hơn kém nhau 40°. Tính số đo góc lớn.", answer: 110, unitLabel: "°",
          h: ["Hai góc trong cùng phía có tổng bằng bao nhiêu?", "Gọi góc nhỏ là t, góc lớn là t + 40. Viết phương trình tổng.", "Giải 2t + 40 = 180 rồi tìm góc lớn."],
          e: "Gọi góc nhỏ là t: t + (t + 40) = 180 ⇒ t = 70. Góc lớn = 110°." }),
        V({ id: "ch-03", type: "mc", diff: 3, skill: "prove-parallel", q: "Đường thẳng c cắt hai đường thẳng a và b, tạo hai góc trong cùng phía là 118° và 62°. Kết luận nào đúng và có lập luận đúng?",
          choices: ["a // b vì hai góc trong cùng phía có tổng 118° + 62° = 180°", "a // b vì hai góc đồng vị bằng nhau", "a không song song b vì hai góc không bằng nhau", "Không đủ dữ kiện để kết luận"], answer: 0,
          h: ["Nếu a // b thì hai góc trong cùng phía bù nhau. Điều ngược lại có thể dùng để chứng minh song song không?", "Tính 118° + 62°.", "Đề bài có nói hai góc này là đồng vị không?"],
          e: "Hai góc trong cùng phía bù nhau (tổng 180°) ⇒ a // b. Hai góc trong cùng phía không cần bằng nhau; đồng vị mới bằng nhau." }),
        V({ id: "ch-04", type: "mc", diff: 3, skill: "perp-parallel", q: "Cho a ⟂ c và b ⟂ c. Vì sao a // b?",
          choices: ["Vì hai góc đồng vị cùng bằng 90° nên bằng nhau, suy ra a // b", "Vì c là đường thẳng duy nhất đi qua cả a và b", "Vì hai góc kề bù cùng bằng 90° nên a trùng b", "Vì hai đường thẳng vuông góc luôn cắt nhau"], answer: 0,
          h: ["a và b cắt c, tạo ra các góc đồng vị. Mỗi góc đó là bao nhiêu độ?", "Hai góc đồng vị bằng nhau cho em kết luận gì về a và b?", "Loại những đáp án lý luận sai: a và b có trùng nhau không?"],
          e: "Hai góc đồng vị cùng bằng 90° nên bằng nhau, do đó a // b. (Hai đường cùng vuông góc với một đường thứ ba thì song song.)" }),
        V({ id: "ch-05", type: "num", diff: 3, skill: "bisector-exterior", q: "Tam giác ABC có góc A = 70°, góc C = 30°. BD là tia phân giác của góc B (D thuộc AC). Tính góc ADB (kí hiệu x trên hình).", svg: chFig5, answer: 70, unitLabel: "°",
          h: ["Tính góc B của tam giác ABC, rồi góc DBC sau khi chia đôi.", "Góc ADB là góc ngoài của tam giác nào? Hai góc trong không kề với nó là gì?", "Cộng góc DBC và góc C."],
          e: "∠B = 180° − 70° − 30° = 80°, ∠DBC = 40°. Góc ADB là góc ngoài của tam giác BDC nên bằng 40° + 30° = 70°." }),
        V({ id: "ch-06", type: "num", diff: 3, skill: "bent-line", q: "Hai tia Ax và By song song và cùng hướng sang phải. Điểm C nằm giữa hai đường như hình, góc xAC = 130°, góc yBC = 110°. Tính góc ACB.", svg: chFig6, answer: 120, unitLabel: "°",
          h: ["Qua C kẻ tia Cz song song với Ax (cùng hướng phải). Tia Cz song song với By luôn không?", "Góc ACz bù với góc xAC, và góc zCB bù với góc yBC (các cặp trong cùng phía). Tính từng góc.", "Góc ACB bằng tổng hai góc đó."],
          e: "Kẻ Cz // Ax // By. ∠ACz = 180° − 130° = 50° (trong cùng phía), ∠zCB = 180° − 110° = 70°. Vậy ∠ACB = 50° + 70° = 120°. (Công thức: 360° − 130° − 110°.)" }),
        V({ id: "ch-07", type: "mc", diff: 3, skill: "bisector-parallel", q: "Hai đường thẳng a // b bị cát tuyến c cắt. Vẽ tia phân giác của mỗi góc trong cặp góc so le trong. Hai tia phân giác này có quan hệ gì?",
          choices: ["Song song với nhau", "Vuông góc với nhau", "Cắt nhau tạo góc 45°", "Trùng nhau"], answer: 0,
          h: ["Hai góc so le trong của hai đường song song bằng nhau. Mỗi tia phân giác chia góc đó làm đôi thế nào?", "Hai nửa góc đó có bằng nhau không? Chúng là cặp góc gì đối với hai tia phân giác và cát tuyến?", "Nửa góc so le trong bằng nhau thì hai tia phân giác như thế nào?"],
          e: "Hai góc so le trong bằng nhau nên hai nửa của chúng cũng bằng nhau. Hai nửa này là cặp góc so le trong của hai tia phân giác với cát tuyến, nên hai tia phân giác song song." }),
        V({ id: "ch-08", howto: "Chỉ nhập số đo (độ) của góc tạo bởi tia At và cạnh AC. Phần «At // BC» là để em tự nhận xét, không cần nhập.", type: "num", diff: 3, skill: "exterior-bisector", q: "Tam giác ABC cân tại A, góc A = 50°. Tia At là tia phân giác của góc ngoài tại đỉnh A. Tính góc giữa At và cạnh AC (và nhận ra At // BC).", answer: 65, unitLabel: "°",
          h: ["Góc ngoài tại A bằng 180° trừ góc trong tại A, hay bằng tổng hai góc đáy?", "Hai góc đáy bằng nhau và mỗi góc là bao nhiêu? Vậy góc ngoài tại A bằng bao nhiêu?", "Chia đôi góc ngoài đó để được góc giữa At và AC."],
          e: "Góc ngoài tại A = 180° − 50° = 130°; nửa góc = 65°. Góc đáy C = (180° − 50°) ÷ 2 = 65° nên At tạo với AC góc so le trong bằng góc C ⇒ At // BC." }),
        V({ id: "ch-09", type: "num", diff: 2, skill: "adjacent-bisectors", q: "Hai góc xOy và yOz kề bù. Om là tia phân giác của góc xOy, On là tia phân giác của góc yOz. Tính góc mOn.", answer: 90, unitLabel: "°",
          h: ["Hai góc kề bù có tổng bằng bao nhiêu?", "Góc mOn bằng nửa góc xOy cộng nửa góc yOz. Hãy viết ra.", "Nửa của tổng 180° bằng bao nhiêu?"],
          e: "∠mOn = ½∠xOy + ½∠yOz = ½(∠xOy + ∠yOz) = ½ × 180° = 90°." }),
        V({ id: "ch-10", type: "num", diff: 3, skill: "exterior-ratio", q: "Tam giác ABC có góc ngoài tại B bằng 130°. Hai góc trong A và C có tỉ số 2 : 3. Tính góc C.", answer: 78, unitLabel: "°",
          h: ["Góc ngoài tại B bằng tổng hai góc trong nào?", "A + C = 130° và A : C = 2 : 3. Chia 130° thành 5 phần bằng nhau, mỗi phần là bao nhiêu?", "Góc C chiếm 3 phần."],
          e: "Góc ngoài bằng A + C = 130°. Chia thành 2 + 3 = 5 phần: mỗi phần 26°. Vậy A = 52°, C = 78°." })
      ]
    },
    project: null
  });
})();
