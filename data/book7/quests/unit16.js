// 🚀 Extension quests — Math 7, unit 16 (Interpreting results). Schema: MATH_QUESTS_GUIDE.md. Own wording,
// built only from each section's key ideas. Check functions receive NUMBERS parsed by the game.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  const isInt = Number.isInteger;
  const inRange = function (x, lo, hi) { return isInt(x) && x >= lo && x <= hi; };
  const allInt = function (v, lo, hi) { return v.every(function (x) { return inRange(x, lo, hi); }); };
  const neg = function (x) { return String(x).replace("-", "−"); };
  // 2 × 2 table: T students, R boys, C walkers, A boys who walk → the four cells
  const cells = function (f) { return [f.A, f.R - f.A, f.C - f.A, f.T - f.R - f.C + f.A]; };
  // statistics of five values
  const stats = function (f) {
    const v = [f.a, f.b, f.c, f.d, f.e].slice().sort(function (x, y) { return x - y; });
    const sum = v.reduce(function (s, x) { return s + x; }, 0);
    const count = {};
    v.forEach(function (x) { count[x] = (count[x] || 0) + 1; });
    const top = Math.max.apply(null, Object.keys(count).map(function (k) { return count[k]; }));
    const modes = Object.keys(count).filter(function (k) { return count[k] === top; });
    return {
      sum: sum, mean: sum / 5, median: v[2], range: v[4] - v[0],
      mode: top > 1 && modes.length === 1 ? Number(modes[0]) : null
    };
  };

  window.GAME_QUESTS.push({
    unit: 16,
    sections: {
      "16.1": [
        {
          id: "16.1-x1", type: "many", arity: 2, ordered: true,
          labels: ["Số nam đi bộ", "Số nữ đi xe buýt"],
          ask: "Khảo sát 30 bạn: 16 nam, 14 nữ; 12 bạn đi bộ, 18 bạn đi xe buýt. Bảng hai chiều (Nam/Nữ × Đi bộ/Xe buýt) có thể có số nam đi bộ và số nữ đi xe buýt là bao nhiêu?",
          why: "Chỉ biết các tổng thì bảng chưa xác định — cần biết thêm một ô thì mới điền được cả bảng.",
          check: function (v) { return inRange(v[0], 0, 12) && v[1] === v[0] + 2; },
          challenge: function (v) { return v[1] === 2 * v[0]; },
          challengeText: "Số nữ đi xe buýt gấp đôi số nam đi bộ.",
          kinds: [
            { id: "more", text: "nam đi bộ nhiều hơn nữ đi bộ", test: function (v) { return v[0] > 6; } },
            { id: "same", text: "số nam và nữ đi bộ bằng nhau", test: function (v) { return v[0] === 6; } },
            { id: "fewer", text: "nam đi bộ ít hơn nữ đi bộ", test: function () { return true; } }
          ],
          kindSamples: [["5", "7"], ["2", "4"], ["6", "8"], ["8", "10"], ["12", "14"]],
          sample: { values: ["5", "7"] }
        },
        {
          id: "16.1-x2", type: "whatif", base: 18,
          ask: "Ví dụ: lớp có 40 bạn, 22 bạn nữ, vậy có 18 bạn nam. Nếu lớp nhận thêm 5 bạn mới, đều là nữ, thì số bạn nam là bao nhiêu?",
          why: "Thay đổi một ô của bảng thì tổng hàng và tổng cả bảng cùng đổi, còn các ô khác giữ nguyên.",
          answer: function () { return 45 - 27; },
          reasons: [
            "Các bạn mới đều là nữ nên số nam giữ nguyên; tổng và số nữ cùng tăng thêm 5.",
            "Tổng tăng thành 45 nên số nam là 45 − 22 = 23.",
            "Có thêm 5 bạn nữ nên số nam giảm 5: 13."
          ],
          reason: 0,
          sample: { guess: "18", reason: 0 }
        },
        {
          id: "16.1-x3", type: "make",
          ask: "Tự ra đề bảng hai chiều (hàng: Nam/Nữ; cột: Đi bộ/Xe buýt): chọn tổng số bạn T, số nam R, số bạn đi bộ C và số nam đi bộ A (số nguyên, T không quá 500, không ô nào âm). Đề sẽ hỏi số nữ đi xe buýt.",
          why: "Tự dựng bảng giúp em thấy rõ vì sao “ô còn thiếu = tổng − các ô đã biết” luôn dùng được.",
          template: "T bạn, R nam, C đi bộ, A nam đi bộ",
          fields: [{ id: "T", label: "Tổng số bạn T" }, { id: "R", label: "Số nam R" }, { id: "C", label: "Số bạn đi bộ C" }, { id: "A", label: "Số nam đi bộ A" }],
          valid: function (f) { return allInt([f.T, f.R, f.C, f.A], 0, 500) && f.T > 0 && cells(f).every(function (x) { return x >= 0; }); },
          solve: function (f) { return cells(f)[3]; },
          render: function (f, lang) {
            return lang === "en"
              ? "A survey of " + f.T + " students: " + f.R + " are boys, " + f.C + " walk to school, and " + f.A + " of the boys walk. How many girls travel by bus?"
              : "Khảo sát " + f.T + " bạn: có " + f.R + " bạn nam, " + f.C + " bạn đi bộ đến trường, trong đó " + f.A + " bạn nam đi bộ. Có bao nhiêu bạn nữ đi xe buýt?";
          },
          criteria: [
            { id: "zero", text: "Ô cần tìm bằng 0", test: function (f) { return cells(f)[3] === 0; } },
            { id: "max", text: "Ô cần tìm lớn hơn cả ba ô còn lại", test: function (f) { const c = cells(f); return c[3] > Math.max(c[0], c[1], c[2]); } },
            { id: "diff", text: "Bốn ô có bốn giá trị khác nhau", test: function (f) { return new Set(cells(f)).size === 4; } },
            { id: "half", text: "Số nam đúng bằng một nửa tổng số bạn", test: function (f) { return 2 * f.R === f.T; } },
            { id: "big", text: "Khảo sát hơn 100 bạn", test: function (f) { return f.T > 100; } }
          ],
          sample: { fields: { T: "60", R: "30", C: "25", A: "10" } }
        }
      ],
      "16.2": [
        {
          id: "16.2-x1", type: "many", arity: 2, ordered: true,
          labels: ["Phần CD", "Phần DVD"],
          ask: "Trong biểu đồ cột chồng, cột của An cao đến vạch 15 (phần CD ở dưới, phần DVD ở trên) và An có nhiều DVD hơn CD. Phần CD và phần DVD có thể là bao nhiêu (số nguyên)?",
          why: "Đỉnh cột chồng là tổng — mỗi phần phải tính bằng hiệu, không đọc thẳng số ở đỉnh.",
          check: function (v) { return allInt(v, 0, 15) && v[0] + v[1] === 15 && v[1] > v[0]; },
          challenge: function (v) { return v[1] === 4 * v[0]; },
          challengeText: "Số DVD gấp 4 lần số CD.",
          kinds: [
            { id: "none", text: "không có CD", test: function (v) { return v[0] === 0; } },
            { id: "double", text: "DVD gấp ít nhất 2 lần CD", test: function (v) { return v[1] >= 2 * v[0]; } },
            { id: "less", text: "DVD nhiều hơn nhưng chưa gấp đôi CD", test: function () { return true; } }
          ],
          kindSamples: [["5", "10"], ["0", "15"], ["3", "12"], ["6", "9"], ["7", "8"]],
          sample: { values: ["5", "10"] }
        },
        {
          id: "16.2-x2", type: "ways",
          ask: "Biểu đồ cột chồng của ba bạn: đỉnh cột ở vạch 9, 12 và 7; phần CD (ở dưới) cao 2, 5 và 4. Cả ba bạn có tất cả bao nhiêu DVD? Giải theo nhiều cách.",
          why: "Tính từng cột rồi cộng, hay cộng các tổng rồi trừ, đều đúng — so sánh hai cách giúp em tự kiểm tra khi đọc biểu đồ.",
          strategies: [
            { id: "s1", name: "Cộng tất cả rồi bớt phần CD", steps: [
              { ask: "Tổng số đĩa của cả ba bạn?", answer: 28 },
              { ask: "Tổng số CD của cả ba bạn?", answer: 11 }, { answer: 17 }] },
            { id: "s2", name: "Tìm DVD của từng bạn rồi cộng", steps: [
              { ask: "DVD của bạn thứ nhất?", answer: 7 },
              { ask: "DVD của bạn thứ hai?", answer: 7 },
              { ask: "DVD của bạn thứ ba?", answer: 3 }, { answer: 17 }] }
          ],
          sample: { strategy: "s1", steps: ["28", "11", "17"] }
        },
        {
          id: "16.2-x3", type: "whatif", base: 7,
          ask: "Ví dụ: cột chồng của Karl cao 9, phần CD (ở dưới) cao 2, vậy Karl có 7 DVD. Nếu Karl mua thêm 3 CD và vẽ lại biểu đồ thì phần DVD ứng với bao nhiêu DVD?",
          why: "Khi phần dưới cao lên, phần trên bị đẩy lên nhưng không dài thêm — hiểu điều này mới đọc đúng biểu đồ cột chồng.",
          answer: function () { return 12 - 5; },
          reasons: [
            "Số DVD không đổi: đỉnh mới là 12, phần CD là 5, nên DVD vẫn là 12 − 5 = 7.",
            "Đọc số ở đỉnh cột mới: 12.",
            "Phần CD dài thêm 3 nên phần DVD ngắn đi 3: 4."
          ],
          reason: 0,
          sample: { guess: "7", reason: 0 }
        }
      ],
      "16.3": [
        {
          id: "16.3-x1", type: "many", arity: 2, ordered: false,
          labels: ["Góc phần thứ hai (°)", "Góc phần thứ ba (°)"],
          ask: "Biểu đồ tròn về 24 bạn được chia thành ba phần (mỗi phần ít nhất 1 bạn). Phần thứ nhất có góc 90°. Góc của hai phần còn lại có thể là bao nhiêu?",
          why: "Mỗi bạn ứng với cùng một góc (360° ÷ 24 = 15°), nên góc của mỗi phần phải là bội của 15°.",
          check: function (v) { return allInt(v, 15, 255) && v[0] % 15 === 0 && v[1] % 15 === 0 && v[0] + v[1] === 270; },
          challenge: function (v) { return Math.abs(v[0] - v[1]) === 30; },
          challengeText: "Số bạn của hai phần còn lại hơn kém nhau đúng 2 bạn.",
          kinds: [
            { id: "right", text: "có phần bằng phần thứ nhất (90°)", test: function (v) { return v[0] === 90 || v[1] === 90; } },
            { id: "big", text: "cả hai phần đều lớn hơn 90°", test: function (v) { return v[0] > 90; } },
            { id: "small", text: "có phần nhỏ hơn 90°", test: function () { return true; } }
          ],
          kindSamples: [["120", "150"], ["90", "180"], ["135", "135"], ["15", "255"], ["60", "210"]],
          sample: { values: ["120", "150"] }
        },
        {
          id: "16.3-x2", type: "ways",
          ask: "Khảo sát 60 bạn, có 25 bạn đi xe đạp. Góc ở tâm của phần “xe đạp” trong biểu đồ tròn là bao nhiêu độ? Giải theo nhiều cách.",
          why: "Tìm góc của một bạn, dùng phân số, hay tách thành phần dễ tính — chọn cách hợp với từng bộ số.",
          strategies: [
            { id: "s1", name: "Tìm góc ứng với một bạn", steps: [{ ask: "Mỗi bạn ứng với bao nhiêu độ?", answer: 6 }, { answer: 150 }] },
            { id: "s2", name: "Dùng phân số 25/60 rút gọn", steps: [{ ask: "25/60 rút gọn thành ?/12. Tử số là bao nhiêu?", answer: 5 }, { answer: 150 }] },
            { id: "s3", name: "Tách 25 = 20 + 5", steps: [
              { ask: "20 bạn là 1/3 của 60 bạn. Góc của 20 bạn?", answer: 120 },
              { ask: "Góc của 5 bạn còn lại?", answer: 30 }, { answer: 150 }] }
          ],
          sample: { strategy: "s1", steps: ["6", "150"] }
        },
        {
          id: "16.3-x3", type: "make",
          ask: "Tự ra đề: khảo sát N bạn, có m bạn chọn một câu trả lời (1 ≤ m < N ≤ 1 000, góc phải là số nguyên độ). Đề sẽ hỏi góc ở tâm của phần đó.",
          why: "Chọn tổng số sao cho góc ra số nguyên giúp em thấy vì sao 360 có nhiều ước lại rất tiện cho biểu đồ tròn.",
          template: "N bạn, m bạn chọn",
          fields: [{ id: "N", label: "Tổng số bạn N" }, { id: "m", label: "Số bạn chọn m" }],
          valid: function (f) { return inRange(f.N, 2, 1000) && inRange(f.m, 1, f.N - 1) && (360 * f.m) % f.N === 0; },
          solve: function (f) { return 360 * f.m / f.N; },
          render: function (f, lang) {
            return lang === "en"
              ? "In a survey of " + f.N + " students, " + f.m + " chose this answer. What is the angle of this sector in a pie chart?"
              : "Khảo sát " + f.N + " bạn, có " + f.m + " bạn chọn câu trả lời này. Góc ở tâm của phần này trong biểu đồ tròn là bao nhiêu độ?";
          },
          criteria: [
            { id: "big", text: "Góc lớn hơn 180° (phần chiếm hơn một nửa)", test: function (f) { return 360 * f.m / f.N > 180; } },
            { id: "right", text: "Góc đúng 90°", test: function (f) { return 4 * f.m === f.N; } },
            { id: "odd", text: "Góc là số lẻ", test: function (f) { return (360 * f.m / f.N) % 2 === 1; } },
            { id: "many", text: "Khảo sát hơn 100 bạn", test: function (f) { return f.N > 100; } },
            { id: "thin", text: "Góc nhỏ hơn 10°", test: function (f) { return 360 * f.m / f.N < 10; } }
          ],
          sample: { fields: { N: "40", m: "30" } }
        }
      ],
      "16.4": [
        {
          id: "16.4-x1", type: "many", arity: 2, ordered: true,
          labels: ["Phần trăm p (%)", "Tổng số người N"],
          ask: "Một đồ họa thông tin ghi: “p% trong số N người là 60 người”. Tìm các cặp p và N có thể (p nguyên từ 1 đến 100, N nguyên).",
          why: "Biết phần và phần trăm thì tìm được tổng — kỹ năng đọc ngược infographic khi nó chỉ cho một con số.",
          check: function (v) { return inRange(v[0], 1, 100) && isInt(v[1]) && v[1] > 0 && v[0] * v[1] === 6000; },
          challenge: function (v) { return v[1] > 100 && v[1] < 150; },
          challengeText: "Tổng số người nằm giữa 100 và 150.",
          kinds: [
            { id: "over", text: "60 người là hơn một nửa (p lớn hơn 50)", test: function (v) { return v[0] > 50; } },
            { id: "half", text: "60 người là đúng một nửa (p = 50)", test: function (v) { return v[0] === 50; } },
            { id: "under", text: "60 người chưa tới một nửa (p nhỏ hơn 50)", test: function () { return true; } }
          ],
          kindSamples: [["20", "300"], ["100", "60"], ["60", "100"], ["50", "120"], ["10", "600"]],
          sample: { values: ["20", "300"] }
        },
        {
          id: "16.4-x2", type: "ways",
          ask: "Một infographic cho biết 35% trong 640 người lớn của một làng thích đọc sách. Đó là bao nhiêu người? Giải theo nhiều cách.",
          why: "Phần trăm có thể tính qua 10%, qua 1% hay qua phân số — mỗi cách có lúc nhanh hơn, và các cách kiểm tra lẫn nhau.",
          strategies: [
            { id: "s1", name: "Dùng 10% và 5% (35% = 3 × 10% + 5%)", steps: [
              { ask: "10% của 640?", answer: 64 },
              { ask: "5% của 640?", answer: 32 }, { answer: 224 }] },
            { id: "s2", name: "Dùng 1% rồi nhân 35", steps: [{ ask: "1% của 640?", answer: 6.4 }, { answer: 224 }] },
            { id: "s3", name: "Đổi 35% thành phân số 7/20", steps: [{ ask: "640 ÷ 20 = ?", answer: 32 }, { answer: 224 }] }
          ],
          sample: { strategy: "s2", steps: ["6.4", "224"] }
        },
        {
          id: "16.4-x3", type: "whatif", base: 20,
          ask: "Ví dụ: làng có 800 người lớn, 20% (160 người) thuộc nhóm 35–44 tuổi. Nếu có thêm 200 người lớn mới chuyển đến, đều thuộc nhóm 35–44, thì nhóm này chiếm bao nhiêu phần trăm?",
          why: "Phần trăm luôn tính trên tổng — tổng thay đổi thì mọi phần trăm đều phải tính lại.",
          answer: function () { return (160 + 200) / (800 + 200) * 100; },
          reasons: [
            "Tổng thành 1 000 người và nhóm này có 360 người, nên chiếm 360 ÷ 1 000 = 36%.",
            "Thêm 200 trên 800 là thêm 25%, nên được 20% + 25% = 45%.",
            "Phần trăm của mỗi nhóm không đổi khi có thêm người: vẫn 20%."
          ],
          reason: 0,
          sample: { guess: "36", reason: 0 }
        }
      ],
      "16.5": [
        {
          id: "16.5-x1", type: "many", arity: 3, ordered: true,
          labels: ["Chỉ học Sinh", "Học cả hai môn", "Chỉ học Hóa"],
          ask: "Sơ đồ Venn về các bạn học Sinh và học Hóa (mỗi bạn học ít nhất một môn): 18 bạn học Sinh, 16 bạn học Hóa. Điền ba vùng của sơ đồ.",
          why: "Bạn học cả hai môn được đếm trong cả hai vòng — hiểu điều này để không cộng trùng khi đọc sơ đồ Venn.",
          check: function (v) { return allInt(v, 0, 18) && v[0] + v[1] === 18 && v[1] + v[2] === 16; },
          challenge: function (v) { return v[0] + v[1] + v[2] === 25; },
          challengeText: "Tổng số bạn trong sơ đồ là 25.",
          kinds: [
            { id: "apart", text: "không ai học cả hai môn (hai vòng rời nhau)", test: function (v) { return v[1] === 0; } },
            { id: "inside", text: "ai học Hóa cũng học Sinh (vòng Hóa nằm trong vòng Sinh)", test: function (v) { return v[2] === 0; } },
            { id: "bigmid", text: "vùng chung đông nhất", test: function (v) { return v[1] >= v[0] && v[1] >= v[2]; } },
            { id: "smallmid", text: "vùng chung không đông nhất", test: function () { return true; } }
          ],
          kindSamples: [["10", "8", "8"], ["18", "0", "16"], ["2", "16", "0"], ["5", "13", "3"], ["12", "6", "10"]],
          sample: { values: ["10", "8", "8"] }
        },
        {
          id: "16.5-x2", type: "whatif", base: 21,
          ask: "Ví dụ: sơ đồ Venn có 7 bạn chỉ học Sinh, 12 bạn học cả hai, 9 bạn chỉ học Hóa, vậy 21 bạn học Hóa. Nếu 3 bạn đang chỉ học Sinh đăng ký học thêm Hóa thì có bao nhiêu bạn học Hóa?",
          why: "Biết một bạn chuyển từ vùng này sang vùng khác của sơ đồ Venn làm thay đổi những tổng nào là chìa khóa đọc dữ liệu phân loại.",
          answer: function () { return 12 + 3 + 9; },
          reasons: [
            "3 bạn chuyển từ vùng “chỉ Sinh” sang vùng “cả hai”, nên số học Hóa tăng 3: 12 + 3 + 9 = 24.",
            "Tổng số bạn không đổi nên số bạn học Hóa cũng không đổi: 21.",
            "Mỗi bạn học cả hai được tính hai lần nên số học Hóa tăng 6: 27."
          ],
          reason: 0,
          sample: { guess: "24", reason: 0 }
        },
        {
          id: "16.5-x3", type: "ways",
          ask: "Lớp có 32 bạn: 20 bạn học Sinh, 17 bạn học Hóa, 3 bạn không học môn nào. Có bao nhiêu bạn học cả hai môn? Giải theo nhiều cách.",
          why: "Đếm trùng, so sánh tổng hay thử – điều chỉnh đều dẫn tới vùng giữa của sơ đồ Venn.",
          strategies: [
            { id: "s1", name: "Tìm số bạn học ít nhất một môn", steps: [{ ask: "Có bao nhiêu bạn học ít nhất một môn?", answer: 29 }, { answer: 8 }] },
            { id: "s2", name: "Cộng hai môn rồi xem bị đếm trùng bao nhiêu", steps: [{ ask: "20 + 17 = ?", answer: 37 }, { answer: 8 }] },
            { id: "s3", name: "Thử rồi điều chỉnh", steps: [
              { ask: "Thử “cả hai” = 5: tổng số bạn (kể cả 3 bạn không học môn nào) là bao nhiêu?", answer: 35 }, { answer: 8 }] }
          ],
          sample: { strategy: "s1", steps: ["29", "8"] }
        }
      ],
      "16.6": [
        {
          id: "16.6-x1", type: "many", arity: 3, ordered: false,
          labels: ["Giá trị 1", "Giá trị 2", "Giá trị 3"],
          ask: "Tìm bộ ba số nguyên dương có trung vị là 6 và trung bình là 8.",
          why: "Trung vị và trung bình đo hai điều khác nhau — một giá trị lớn kéo trung bình lên mà không làm đổi trung vị.",
          check: function (v) {
            const s = v.slice().sort(function (x, y) { return x - y; });
            return allInt(v, 1, 1000) && s[1] === 6 && s[0] + s[1] + s[2] === 24;
          },
          sample: { values: ["4", "6", "14"] }
        },
        {
          id: "16.6-x2", type: "make",
          ask: "Tự ra đề: chọn 5 giá trị (số nguyên từ 0 đến 100). Đề sẽ hỏi trung bình — còn trung vị, mốt và khoảng biến thiên quyết định các tiêu chí.",
          why: "Tự thiết kế bộ dữ liệu giúp em thấy mỗi số đo (trung bình, trung vị, mốt, khoảng biến thiên) phản ứng thế nào với từng giá trị.",
          template: "5 giá trị: a, b, c, d, e",
          fields: [{ id: "a", label: "a" }, { id: "b", label: "b" }, { id: "c", label: "c" }, { id: "d", label: "d" }, { id: "e", label: "e" }],
          valid: function (f) { return allInt([f.a, f.b, f.c, f.d, f.e], 0, 100); },
          solve: function (f) { return stats(f).mean; },
          render: function (f, lang) {
            const list = [f.a, f.b, f.c, f.d, f.e].map(neg).join(", ");
            return lang === "en" ? "Work out the mean of: " + list + "." : "Tính trung bình của: " + list + ".";
          },
          criteria: [
            { id: "gt", text: "Trung bình lớn hơn trung vị", test: function (f) { const s = stats(f); return s.mean > s.median; } },
            { id: "same", text: "Trung bình, trung vị và mốt bằng nhau (nhưng 5 số không giống hệt nhau)", test: function (f) {
              const s = stats(f); return s.mode !== null && s.range > 0 && s.mean === s.median && s.median === s.mode; } },
            { id: "spread", text: "Khoảng biến thiên lớn hơn 50 nhưng trung bình nhỏ hơn 20", test: function (f) { const s = stats(f); return s.range > 50 && s.mean < 20; } },
            { id: "dec", text: "Trung bình không phải số nguyên", test: function (f) { return stats(f).sum % 5 !== 0; } },
            { id: "mode", text: "Có mốt và mốt nhỏ hơn trung bình", test: function (f) { const s = stats(f); return s.mode !== null && s.mode < s.mean; } }
          ],
          sample: { fields: { a: "2", b: "2", c: "3", d: "5", e: "60" } }
        },
        {
          id: "16.6-x3", type: "pattern",
          ask: "Một người đã chạy n ngày, mỗi ngày 8 km. Ngày tiếp theo phải chạy bao nhiêu km để trung bình của tất cả n + 1 ngày là 9 km? Với n = 1, 2, 3 đáp số là 10, 11, 12. Tìm đáp số khi n = 5, 20, 100 và quy luật theo n.",
          why: "Tổng = trung bình × số giá trị: cách tìm giá trị còn thiếu này dùng được cho mọi bộ dữ liệu, dù lớn đến đâu.",
          seq: [10, 11, 12],
          term: function (n) { return 9 * (n + 1) - 8 * n; },
          askN: [5, 20, 100],
          sample: { terms: { 5: "14", 20: "29", 100: "109" }, rule: "n+9" }
        }
      ]
    },
    tr: {
      en: {
        "q.16.1-x1.labels": ["Boys who walk", "Girls who take the bus"],
        "q.16.1-x1.ask": "A survey of 30 students: 16 boys, 14 girls; 12 walk and 18 take the bus. In the two-way table (Boys/Girls × Walk/Bus), what could the number of boys who walk and the number of girls who take the bus be?",
        "q.16.1-x1.why": "Knowing only the totals does not fix the table — you need one more cell before you can complete it.",
        "q.16.1-x1.challengeText": "The number of girls who take the bus is double the number of boys who walk.",
        "q.16.1-x1.kinds": ["more boys than girls walk", "the same number of boys and girls walk", "fewer boys than girls walk"],
        "q.16.1-x2.ask": "Example: a class has 40 students and 22 are girls, so there are 18 boys. If 5 new students join the class and they are all girls, how many boys are there?",
        "q.16.1-x2.why": "Changing one cell of a table changes its row total and the grand total, while the other cells stay the same.",
        "q.16.1-x2.reasons": [
          "The new students are all girls, so the number of boys stays the same; the total and the number of girls both go up by 5.",
          "The total becomes 45, so there are 45 − 22 = 23 boys.",
          "There are 5 more girls, so there are 5 fewer boys: 13."
        ],
        "q.16.1-x3.ask": "Make a two-way table problem (rows: Boys/Girls; columns: Walk/Bus): choose the total number of students T, the number of boys R, the number who walk C and the number of boys who walk A (integers, T at most 500, no cell negative). The problem will ask for the number of girls who take the bus.",
        "q.16.1-x3.why": "Building the table yourself shows clearly why “missing cell = total − known cells” always works.",
        "q.16.1-x3.template": "T students, R boys, C walk, A boys walk",
        "q.16.1-x3.fields": ["Total students T", "Number of boys R", "Number who walk C", "Boys who walk A"],
        "q.16.1-x3.criteria": [
          "The missing cell is 0", "The missing cell is bigger than all three other cells", "The four cells have four different values",
          "The number of boys is exactly half of the total", "More than 100 students are surveyed"
        ],
        "q.16.2-x1.labels": ["CD part", "DVD part"],
        "q.16.2-x1.ask": "In a compound bar chart, An's bar reaches 15 (the CD part at the bottom, the DVD part on top) and An has more DVDs than CDs. What could the CD part and the DVD part be (whole numbers)?",
        "q.16.2-x1.why": "The top of a compound bar is the total — each part must be found by subtracting, not read straight from the top.",
        "q.16.2-x1.challengeText": "The number of DVDs is 4 times the number of CDs.",
        "q.16.2-x1.kinds": ["no CDs", "at least twice as many DVDs as CDs", "more DVDs, but not yet twice as many as CDs"],
        "q.16.2-x2.ask": "A compound bar chart for three students: the bars reach 9, 12 and 7; the CD parts (at the bottom) are 2, 5 and 4 tall. How many DVDs do the three students have altogether? Solve it in several ways.",
        "q.16.2-x2.why": "Working bar by bar then adding, or adding the totals then subtracting, are both correct — comparing them lets you check yourself when reading charts.",
        "q.16.2-x2.strategies": ["Add everything, then take away the CDs", "Find each student's DVDs, then add"],
        "q.16.2-x2.steps.s1": ["Total number of discs for all three students?", "Total number of CDs for all three students?"],
        "q.16.2-x2.steps.s2": ["DVDs of the first student?", "DVDs of the second student?", "DVDs of the third student?"],
        "q.16.2-x3.ask": "Example: Karl's compound bar reaches 9 and the CD part (at the bottom) is 2 tall, so Karl has 7 DVDs. If Karl buys 3 more CDs and the chart is redrawn, how many DVDs does the DVD part show?",
        "q.16.2-x3.why": "When the bottom part grows, the top part is pushed up but does not get longer — you need this to read compound bar charts correctly.",
        "q.16.2-x3.reasons": [
          "The number of DVDs does not change: the new top is 12 and the CD part is 5, so DVDs = 12 − 5 = 7.",
          "Read the number at the top of the new bar: 12.",
          "The CD part is 3 longer, so the DVD part is 3 shorter: 4."
        ],
        "q.16.3-x1.labels": ["Angle of the second sector (°)", "Angle of the third sector (°)"],
        "q.16.3-x1.ask": "A pie chart about 24 students has three sectors (each with at least 1 student). The first sector has an angle of 90°. What could the angles of the other two sectors be?",
        "q.16.3-x1.why": "Each student stands for the same angle (360° ÷ 24 = 15°), so the angle of every sector must be a multiple of 15°.",
        "q.16.3-x1.challengeText": "The other two sectors differ by exactly 2 students.",
        "q.16.3-x1.kinds": ["one part equals the first part (90°)", "both parts are greater than 90°", "one part is smaller than 90°"],
        "q.16.3-x2.ask": "In a survey of 60 students, 25 cycle to school. What is the angle of the “cycle” sector in a pie chart? Solve it in several ways.",
        "q.16.3-x2.why": "Finding the angle for one student, using a fraction, or splitting into easy parts — choose the way that suits the numbers.",
        "q.16.3-x2.strategies": ["Find the angle for one student", "Simplify the fraction 25/60", "Split 25 = 20 + 5"],
        "q.16.3-x2.steps.s1": ["How many degrees does each student stand for?"],
        "q.16.3-x2.steps.s2": ["25/60 simplifies to ?/12. What is the numerator?"],
        "q.16.3-x2.steps.s3": ["20 students are 1/3 of 60 students. Angle for 20 students?", "Angle for the other 5 students?"],
        "q.16.3-x3.ask": "Make a problem: a survey of N students in which m students chose one answer (1 ≤ m < N ≤ 1 000, and the angle must be a whole number of degrees). The problem will ask for the angle of that sector.",
        "q.16.3-x3.why": "Choosing a total so that the angle is a whole number shows why 360, with its many factors, is so handy for pie charts.",
        "q.16.3-x3.template": "N students, m chose",
        "q.16.3-x3.fields": ["Total students N", "Number who chose m"],
        "q.16.3-x3.criteria": [
          "The angle is greater than 180° (more than half)", "The angle is exactly 90°", "The angle is an odd number",
          "More than 100 students are surveyed", "The angle is less than 10°"
        ],
        "q.16.4-x1.labels": ["Percentage p (%)", "Total number of people N"],
        "q.16.4-x1.ask": "An infographic says: “p% of N people is 60 people”. Find possible pairs p and N (p a whole number from 1 to 100, N a whole number).",
        "q.16.4-x1.why": "Knowing a part and its percentage lets you find the total — the skill of reading an infographic backwards when it gives only one number.",
        "q.16.4-x1.challengeText": "The total number of people is between 100 and 150.",
        "q.16.4-x1.kinds": ["60 people are more than half (p more than 50)", "60 people are exactly half (p = 50)", "60 people are less than half (p less than 50)"],
        "q.16.4-x2.ask": "An infographic says that 35% of the 640 adults in a village like reading. How many people is that? Solve it in several ways.",
        "q.16.4-x2.why": "A percentage can be found through 10%, through 1% or through a fraction — each is sometimes faster, and they check each other.",
        "q.16.4-x2.strategies": ["Use 10% and 5% (35% = 3 × 10% + 5%)", "Use 1%, then multiply by 35", "Change 35% to the fraction 7/20"],
        "q.16.4-x2.steps.s1": ["10% of 640?", "5% of 640?"],
        "q.16.4-x2.steps.s2": ["1% of 640?"],
        "q.16.4-x2.steps.s3": ["640 ÷ 20 = ?"],
        "q.16.4-x3.ask": "Example: a village has 800 adults, and 20% (160 people) are aged 35–44. If 200 new adults move in, all aged 35–44, what percentage does this group make up?",
        "q.16.4-x3.why": "A percentage is always of the total — when the total changes, every percentage must be worked out again.",
        "q.16.4-x3.reasons": [
          "The total becomes 1 000 people and this group has 360 people, so it is 360 ÷ 1 000 = 36%.",
          "200 more on 800 is 25% more, so it becomes 20% + 25% = 45%.",
          "The percentage of each group does not change when people are added: still 20%."
        ],
        "q.16.5-x1.labels": ["Biology only", "Both subjects", "Chemistry only"],
        "q.16.5-x1.ask": "A Venn diagram of students who study Biology and Chemistry (each student studies at least one): 18 students study Biology and 16 study Chemistry. Fill in the three regions of the diagram.",
        "q.16.5-x1.why": "Students who study both are counted in both circles — understand this so you do not count twice when reading a Venn diagram.",
        "q.16.5-x1.challengeText": "There are 25 students in the diagram altogether.",
        "q.16.5-x1.kinds": ["nobody studies both (the circles do not overlap)", "everyone who studies Chemistry also studies Biology (one circle is inside the other)", "the overlap is the largest region", "the overlap is not the largest region"],
        "q.16.5-x2.ask": "Example: a Venn diagram shows 7 students who study only Biology, 12 who study both and 9 who study only Chemistry, so 21 study Chemistry. If 3 of the students who study only Biology also sign up for Chemistry, how many students study Chemistry?",
        "q.16.5-x2.why": "Knowing which totals change when a student moves from one region of a Venn diagram to another is the key to reading sorted data.",
        "q.16.5-x2.reasons": [
          "3 students move from the “Biology only” region to the “both” region, so Chemistry goes up by 3: 12 + 3 + 9 = 24.",
          "The total number of students does not change, so the number studying Chemistry does not change either: 21.",
          "Each student who studies both is counted twice, so Chemistry goes up by 6: 27."
        ],
        "q.16.5-x3.ask": "A class has 32 students: 20 study Biology, 17 study Chemistry and 3 study neither. How many students study both subjects? Solve it in several ways.",
        "q.16.5-x3.why": "Counting overlaps, comparing totals, or trying and improving all lead to the middle region of the Venn diagram.",
        "q.16.5-x3.strategies": ["Find how many study at least one subject", "Add the two subjects, then see how many are counted twice", "Try, then improve"],
        "q.16.5-x3.steps.s1": ["How many students study at least one subject?"],
        "q.16.5-x3.steps.s2": ["20 + 17 = ?"],
        "q.16.5-x3.steps.s3": ["Try “both” = 5: what is the total number of students (including the 3 who study neither)?"],
        "q.16.6-x1.labels": ["Value 1", "Value 2", "Value 3"],
        "q.16.6-x1.ask": "Find sets of three positive whole numbers with median 6 and mean 8.",
        "q.16.6-x1.why": "The median and the mean measure different things — one large value pulls the mean up without changing the median.",
        "q.16.6-x2.ask": "Make a problem: choose 5 values (whole numbers from 0 to 100). The problem will ask for the mean — the median, mode and range decide the criteria.",
        "q.16.6-x2.why": "Designing a data set yourself shows how the mean, median, mode and range each react to every value.",
        "q.16.6-x2.template": "5 values: a, b, c, d, e",
        "q.16.6-x2.fields": ["a", "b", "c", "d", "e"],
        "q.16.6-x2.criteria": [
          "The mean is greater than the median", "The mean, median and mode are equal (but the 5 numbers are not all the same)",
          "The range is greater than 50 but the mean is less than 20", "The mean is not a whole number", "There is a mode and it is less than the mean"
        ],
        "q.16.6-x3.ask": "Someone has run for n days, 8 km each day. How many km must they run on the next day so that the mean of all n + 1 days is 9 km? For n = 1, 2, 3 the answers are 10, 11, 12. Find the answer when n = 5, 20 and 100, and the rule in terms of n.",
        "q.16.6-x3.why": "Total = mean × number of values: this way of finding a missing value works for any data set, however large."
      },
      vi: {}
    }
  });
})();
