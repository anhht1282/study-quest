(function () {
  const Q = (id, type, diff, skill, q, answer, hints, explain, o) =>
    Object.assign({ id, type, diff, skill, source: "book", lang: "en", q, svg: null, choices: null, answer,
      accept: [], tol: 0, unitLabel: "", hints, explain, why: null }, o || {});
  const V = { source: "vn", lang: "vi" };
  const V3 = (o) => Object.assign({}, V, o || {});

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 7,
    title: "Fractions",
    titleVi: "Phân số",
    strand: "Number",
    pages: [136, 162],
    realm: "Thung Lũng Bánh Chia",
    emoji: "🍰",
    story: "Ở Thung Lũng Bánh Chia, ông thợ làm bánh cần chia, ghép và pha trộn những mẩu bánh nhỏ cho lễ hội. Chỉ cần nhầm một phân số là cả mẻ bánh hỏng! Em hãy giúp ông so sánh, cộng, nhân, chia phân số thật chính xác.",
    glossary: [
      { en: "proper fraction", vi: "phân số thực sự", def: "Phân số có tử nhỏ hơn mẫu, giá trị nhỏ hơn 1." },
      { en: "improper fraction", vi: "phân số lớn hơn 1 (tử ≥ mẫu)", def: "Phân số có tử lớn hơn hoặc bằng mẫu, ví dụ 7/4." },
      { en: "mixed number", vi: "hỗn số", def: "Số gồm phần nguyên và phần phân số, ví dụ 1 3/4." },
      { en: "common denominator", vi: "mẫu số chung", def: "Mẫu chung của các phân số sau khi quy đồng." },
      { en: "equivalent fractions", vi: "phân số bằng nhau", def: "Các phân số khác dạng nhưng cùng giá trị, như 1/2 = 2/4." },
      { en: "reciprocal", vi: "số nghịch đảo", def: "Phân số lật ngược: nghịch đảo của 2/3 là 3/2." },
      { en: "simplest form", vi: "phân số tối giản", def: "Tử và mẫu không còn ước chung nào lớn hơn 1." },
      { en: "factor", vi: "ước số", def: "Số chia hết một số khác; dùng để tách phân số thành các bước dễ tính." }
    ],
    sections: [
      {
        id: "7.1", title: "Ordering fractions", titleVi: "So sánh và sắp xếp phân số",
        learn: [
          "Muốn so sánh hai phân số khác mẫu, quy đồng về cùng mẫu rồi so sánh tử số.",
          "Hai phân số bằng nhau khi nhân (hoặc chia) cả tử và mẫu với cùng một số: 2/3 = 10/15.",
          "Với phân số lớn hơn 1, đổi sang hỗn số: so sánh phần nguyên trước, rồi mới so phần phân số.",
          "Cũng có thể đổi phân số ra số thập phân bằng phép chia để sắp xếp thứ tự."
        ],
        example: { q: "Điền dấu < hoặc > vào chỗ trống: 17/3 ... 5 5/6.",
          steps: ["Đổi 17/3 ra hỗn số: 17/3 = 5 2/3", "Phần nguyên bằng nhau (5), so 2/3 với 5/6: 2/3 = 4/6", "4/6 < 5/6 nên 17/3 < 5 5/6"],
          prompts: [
            "Phân số 17/3 có tử lớn hơn mẫu; em đổi nó sang dạng nào để dễ so với 5 5/6?",
            "Phần nguyên đã bằng nhau, vậy cần so sánh phần nào? Muốn so 2/3 với 5/6 em làm gì với mẫu số?",
            "Sau khi quy đồng, so hai tử số rồi chọn dấu thích hợp."
          ],
          answer: { type: "text", value: "<", accept: ["nhỏ hơn"] },
          twist: { q: "Nếu đổi 5 5/6 thành 5 1/2 thì dấu thích hợp là gì (< hay >)?", answer: { type: "text", value: ">", accept: ["lớn hơn"] } } },
        questions: [
          Q("7.1-01", "num", 1, "equiv-frac", "Find the missing number: 3/4 = ?/20", 15,
            ["Mẫu số đã nhân với số nào để từ 4 thành 20?", "Tử số cũng phải nhân với đúng số đó.", "3 nhân với số vừa tìm được bao nhiêu?"],
            "20 ÷ 4 = 5, nên nhân cả tử và mẫu với 5: 3×5 = 15.",
            { howto: "Enter only the number that replaces the ? so that the two fractions are equal." }),
          Q("7.1-02", "num", 1, "equiv-frac", "Write the missing number: 2/3 = ?/15", 10,
            ["Từ mẫu 3 lên mẫu 15 là nhân với mấy?", "Tử số 2 cũng nhân với số đó.", "2 × 5 = ?"],
            "15 ÷ 3 = 5, vậy 2/3 = (2×5)/(3×5) = 10/15.",
            { howto: "Enter only the number that replaces the ? so that the two fractions are equal." }),
          Q("7.1-03", "mc", 1, "compare-frac", "Which is correct?", 1,
            ["Hãy đưa cả hai về mẫu 10.", "3/5 bằng bao nhiêu phần mười?", "So sánh 6/10 với 7/10."],
            "3/5 = 6/10 mà 6/10 < 7/10 nên 3/5 < 7/10.",
            { choices: ["3/5 > 7/10", "3/5 < 7/10", "3/5 = 7/10"] }),
          Q("7.1-04", "mc", 2, "compare-frac", "Which is the larger fraction, 1/3 or 1/4?", 1,
            ["Hình dung một chiếc bánh chia làm 3 phần bằng nhau và một chiếc khác chia làm 4 phần.", "Phần nào to hơn: một phần ba hay một phần tư?", "Chia càng nhiều phần thì mỗi phần như thế nào?"],
            "Lỗi hay gặp: thấy 4 > 3 nên chọn 1/4. Thực ra chia thành nhiều phần hơn thì mỗi phần nhỏ hơn, nên 1/3 > 1/4 (4/12 > 3/12).",
            { choices: ["1/4, because 4 is bigger than 3", "1/3, because thirds are bigger pieces than quarters", "They are equal"] }),
          Q("7.1-05", "num", 2, "mixed-number", "Write 37/4 as a mixed number.", "9 1/4",
            ["37 chứa bao nhiêu nhóm 4 trọn vẹn?", "4 × 9 = 36, còn dư bao nhiêu?", "Phần nguyên là 9, phần dư trên mẫu 4."],
            "37 ÷ 4 = 9 dư 1, nên 37/4 = 9 1/4."),
          Q("7.1-06", "mc", 2, "compare-mixed", "Which is greater: 17/3 or 5 5/6?", 1,
            ["Đổi 17/3 thành hỗn số trước.", "Hai phần nguyên có bằng nhau không? Khi đó so gì tiếp?", "Quy đồng 2/3 và 5/6 về mẫu 6."],
            "17/3 = 5 2/3 = 5 4/6. Vì 4/6 < 5/6 nên 5 5/6 lớn hơn.",
            { choices: ["17/3", "5 5/6", "They are equal"] }),
          Q("7.1-07", "mc", 3, "order-frac", "Which list shows 7/3, 16/7, 58/25, 9/4 in order, smallest first?", 0,
            ["Đổi mỗi phân số ra hỗn số hoặc số thập phân (làm tròn 2-3 chữ số).", "Các giá trị đều khoảng 2 phẩy: 2,25 ; 2,28... ; 2,32 ; 2,33...", "Sắp xếp các số thập phân từ bé đến lớn rồi tra lại phân số tương ứng."],
            "9/4 = 2,25 ; 16/7 ≈ 2,286 ; 58/25 = 2,32 ; 7/3 ≈ 2,333. Thứ tự: 9/4, 16/7, 58/25, 7/3.",
            { choices: ["9/4, 16/7, 58/25, 7/3", "16/7, 9/4, 58/25, 7/3", "9/4, 16/7, 7/3, 58/25", "7/3, 58/25, 16/7, 9/4"] }),
          Q("7.1-08", "num", 3, "between-frac", "A fraction n/9 is greater than 1/2 and less than 2/3. Find the fraction (as a/b).", "5/9",
            ["Đổi 1/2 và 2/3 về mẫu 18 có thể giúp, nhưng ở đây thử đổi về mẫu 9: 1/2 bằng bao nhiêu phần chín?", "1/2 = 4,5/9 và 2/3 = 6/9. Số nguyên n nào nằm giữa 4,5 và 6?", "n có thể bằng 5 hay chỉ có số khác?"],
            "1/2 = 4,5/9 và 2/3 = 6/9, nên 4,5 < n < 6, suy ra n = 5. Phân số là 5/9.",
            { howto: "Find the fraction with denominator 9 that lies between 1/2 and 2/3. Enter the whole fraction (your number over 9), not just n." })
        ]
      },
      {
        id: "7.2", title: "Adding mixed numbers", titleVi: "Cộng và trừ hỗn số",
        sims: [{ id: "fractionbars", at: 0 }],
        learn: [
          "Cộng hỗn số: cộng các phần nguyên với nhau, cộng các phần phân số với nhau (quy đồng nếu cần).",
          "Nếu tổng phần phân số lớn hơn 1, nhớ chuyển 1 đơn vị sang phần nguyên.",
          "Trừ hỗn số: nếu phần phân số bị trừ nhỏ hơn số trừ, 'mượn' 1 từ phần nguyên.",
          "Không bao giờ cộng tử với tử và mẫu với mẫu: 1/2 + 2/3 khác 3/5.",
          "Ước lượng trước bằng phần nguyên giúp kiểm tra kết quả hợp lý."
        ],
        example: { q: "Tính 4 2/3 + 3 1/2.",
          steps: ["Cộng phần nguyên: 4 + 3 = 7", "Cộng phần phân số: 2/3 + 1/2 = 4/6 + 3/6 = 7/6 = 1 1/6", "Tổng: 7 + 1 1/6 = 8 1/6"],
          prompts: [
            "Có hai hỗn số; em cộng riêng phần nào trước? Kết quả bao nhiêu?",
            "Phần phân số có mẫu 3 và 2: em làm gì để cộng được? Tổng có còn là phân số bé hơn 1 không?",
            "Phần phân số vượt quá 1: em ghép nó với phần nguyên thế nào?"
          ],
          answer: { type: "num", value: "49/6" },
          twist: { q: "Nếu đổi thành 4 2/3 − 3 1/2 thì kết quả là bao nhiêu (dạng phân số)?", answer: { type: "num", value: "7/6" } } },
        questions: [
          Q("7.2-01", "num", 1, "add-frac", "Work out 2/5 + 7/10. Give your answer as a mixed number.", "1 1/10",
            ["Đưa 2/5 về mẫu 10.", "4/10 + 7/10 = ?", "11/10 lớn hơn 1, viết thành hỗn số."],
            "2/5 = 4/10. 4/10 + 7/10 = 11/10 = 1 1/10."),
          Q("7.2-02", "num", 1, "add-mixed", "Work out 3 1/4 + 2 1/4.", "5 1/2",
            ["Cộng phần nguyên trước: 3 + 2 = ?", "Cộng phần phân số: 1/4 + 1/4 = ?", "Rút gọn phần phân số rồi ghép lại."],
            "3 + 2 = 5 và 1/4 + 1/4 = 2/4 = 1/2. Kết quả 5 1/2."),
          Q("7.2-03", "num", 2, "add-frac", "Work out 5/6 + 3/4. Give your answer as a mixed number.", "1 7/12",
            ["Mẫu chung nhỏ nhất của 6 và 4 là bao nhiêu?", "5/6 = 10/12 và 3/4 = 9/12.", "19/12 viết thành hỗn số."],
            "10/12 + 9/12 = 19/12 = 1 7/12."),
          Q("7.2-04", "num", 2, "add-mixed", "Work out 4 2/3 + 3 1/2.", "8 1/6",
            ["Cộng phần nguyên: 4 + 3 = ?", "2/3 + 1/2 với mẫu 6 là bao nhiêu?", "Tổng phân số lớn hơn 1, chuyển 1 sang phần nguyên."],
            "7 + 7/6 = 7 + 1 1/6 = 8 1/6."),
          Q("7.2-05", "num", 2, "sub-mixed", "Work out 6 1/4 − 2 3/4.", "3 1/2",
            ["Phần phân số 1/4 có đủ để trừ 3/4 không?", "Viết lại 6 1/4 = 5 5/4.", "5 5/4 − 2 3/4 = ?"],
            "6 1/4 = 5 5/4. Trừ: (5−2) + (5/4−3/4) = 3 + 2/4 = 3 1/2."),
          Q("7.2-06", "mc", 2, "add-mixed", "Work out 3 1/2 + 2 2/3.", 1,
            ["Phần nguyên cộng lại là bao nhiêu?", "1/2 + 2/3 quy đồng mẫu 6 bằng bao nhiêu?", "7/6 vượt quá 1, em đã thêm 1 vào phần nguyên chưa?"],
            "5 + (3/6 + 4/6) = 5 + 7/6 = 6 1/6. Đáp án 5 3/5 là lỗi cộng tử với tử, mẫu với mẫu; 5 1/6 là quên 'nhớ' 1.",
            { choices: ["5 3/5", "6 1/6", "5 1/6", "6 3/5"] }),
          Q("7.2-07", "num", 3, "collect-terms", "Simplify 3 7/8 x + 4 5/6 x. Write the coefficient of x as a mixed number.", "8 17/24",
            ["Hai số hạng giống nhau (cùng x), em chỉ cần cộng hệ số.", "7/8 + 5/6 với mẫu 24 là bao nhiêu?", "41/24 = 1 17/24, rồi cộng với 3 + 4."],
            "3 + 4 = 7; 7/8 + 5/6 = 21/24 + 20/24 = 41/24 = 1 17/24. Hệ số: 8 17/24.",
            { howto: "Write 3 7/8 x + 4 5/6 x as one single term in x. Enter only the number in front of x (the coefficient) as a mixed number, without typing x." }),
          Q("7.2-08", "num", 3, "perimeter-frac", "A quadrilateral has sides 9/4 m, 14/3 m, 19/6 m and 29/9 m. Work out the perimeter as a mixed number.", "13 11/36",
            ["Mẫu chung nhỏ nhất của 4, 3, 6, 9 là bao nhiêu?", "Đổi: 81/36, 168/36, 114/36, 116/36.", "Cộng tử số rồi đổi 479/36 ra hỗn số."],
            "Với mẫu 36: 81 + 168 + 114 + 116 = 479, vậy 479/36 = 13 11/36 m.", { unitLabel: "m" }),
          Q("7.2-09", "mc", 3, "estimate-mixed", "Zara says: 'Without adding the fractions, I know 5 2/3 + 7 7/8 is between 12 and 14.' Why is she right?", 0,
            ["5 + 7 bằng bao nhiêu? Phần phân số mỗi cái có thể lớn đến mức nào?", "Mỗi phần phân số nhỏ hơn 1, vậy hai phần cộng lại nhỏ hơn mấy?", "Từ đó tổng nằm giữa hai số nguyên nào?"],
            "5 + 7 = 12, mỗi phân số dưới 1 nên cộng lại dưới 2. Tổng nằm giữa 12 và 14 (thực tế là 13 13/24).",
            { choices: ["5 + 7 = 12 and the two fractions add up to less than 2", "Because the fractions add up to exactly 1", "Because 5 + 7 = 12 and fractions never change a total", "Because 2/3 + 7/8 = 9/11"] })
        ]
      },
      {
        id: "7.3", title: "Multiplying fractions", titleVi: "Nhân phân số",
        learn: [
          "Tìm 'một phân số của một phân số' bằng cách nhân: 1/2 của 1/3 = 1/2 × 1/3 = 1/6.",
          "Nhân phân số: tử nhân tử, mẫu nhân mẫu, rồi rút gọn.",
          "Có thể rút gọn chéo trước khi nhân để số nhỏ hơn.",
          "Bình phương một phân số: (3/4)² = 3/4 × 3/4 = 9/16.",
          "Nhân với phân số thực sự cho kết quả nhỏ hơn số ban đầu."
        ],
        example: { q: "Tính 7/8 × 4/5.",
          steps: ["Rút gọn chéo: 4 và 8 cùng chia hết cho 4 → 7/2 × 1/5", "Nhân: (7×1)/(2×5) = 7/10"],
          prompts: [
            "Trước khi nhân, em nhìn chéo: có tử và mẫu nào cùng chia hết cho một số lớn hơn 1 không?",
            "Sau khi rút gọn, em nhân tử với tử và mẫu với mẫu thì được gì?"
          ],
          answer: { type: "num", value: "7/10" },
          twist: { q: "Nếu đổi thành 7/8 ÷ 4/5 thì kết quả là bao nhiêu?", answer: { type: "num", value: "35/32" } } },
        questions: [
          Q("7.3-01", "num", 1, "mult-frac", "Work out 1/2 × 1/3.", "1/6",
            ["Nhân hai tử số với nhau.", "Nhân hai mẫu số với nhau.", "1/6 đã tối giản chưa?"], "(1×1)/(2×3) = 1/6."),
          Q("7.3-02", "num", 1, "mult-frac", "Work out 2/3 × 3/4.", "1/2",
            ["Tử nhân tử, mẫu nhân mẫu được phân số nào?", "6/12 còn rút gọn được không?", "Chia cả hai cho 6."], "(2×3)/(3×4) = 6/12 = 1/2."),
          Q("7.3-03", "num", 2, "mult-frac", "Work out 3/5 × 5/9.", "1/3",
            ["Có thừa số nào chung ở tử và mẫu để rút gọn chéo?", "Gạch số 5 ở tử và 5 ở mẫu.", "Còn 3/9 = ?"], "3/5 × 5/9 = 15/45 = 1/3."),
          Q("7.3-04", "num", 2, "mult-frac", "Work out 7/8 × 4/5.", "7/10",
            ["Rút gọn chéo 4 và 8.", "Còn 7/2 × 1/5.", "Nhân hai phân số này."], "7/8 × 4/5 = 28/40 = 7/10."),
          Q("7.3-05", "num", 2, "square-frac", "Work out (3/4)².", "9/16",
            ["Bình phương nghĩa là nhân phân số với chính nó.", "3/4 × 3/4: tử nhân tử là bao nhiêu?", "Mẫu nhân mẫu là bao nhiêu?"], "(3/4)² = 3×3 / 4×4 = 9/16."),
          Q("7.3-06", "mc", 2, "mult-misconception", "Which working is correct for 2/3 × 3/5?", 1,
            ["Phép nhân phân số có cần quy đồng mẫu không?", "Tử nhân tử, mẫu nhân mẫu, rồi rút gọn.", "Kiểm tra: 6/15 có tối giản không?"],
            "2/3 × 3/5 = 6/15 = 2/5. Đáp án 5/8 là cộng tử, cộng mẫu (sai); 10/9 là lật phân số thứ hai (sai).",
            { choices: ["2/3 × 3/5 = 5/8", "2/3 × 3/5 = 6/15 = 2/5", "2/3 × 3/5 = 10/9"] }),
          Q("7.3-07", "num", 3, "mult-chain", "Work out 3/4 × 2/3 × 24.", 12,
            ["Làm từ trái sang phải: 3/4 × 2/3 bằng bao nhiêu?", "3/4 × 2/3 = 1/2.", "1/2 của 24 là bao nhiêu?"], "3/4 × 2/3 = 6/12 = 1/2, rồi 1/2 × 24 = 12."),
          Q("7.3-08", "num", 3, "area-frac", "A rectangle is 2/3 m long and 3/8 m wide. What is its area as a fraction?", "1/4",
            ["Diện tích hình chữ nhật tính thế nào?", "Nhân 2/3 với 3/8.", "6/24 rút gọn thành?"], "Diện tích = 2/3 × 3/8 = 6/24 = 1/4 m².", { unitLabel: "m²" }),
          Q("7.3-09", "num", 3, "frac-of-frac", "A tank is 3/4 full of water. Then 2/5 of the water is used. What fraction of the whole tank is now full?", "9/20",
            ["Sau khi dùng 2/5, còn lại bao nhiêu phần của lượng nước?", "Còn lại 3/5 lượng nước. Vậy cần 3/5 của 3/4.", "3/5 × 3/4 = ?"], "Còn 1 − 2/5 = 3/5 lượng nước: 3/5 × 3/4 = 9/20 bể.")
        ]
      },
      {
        id: "7.4", title: "Dividing fractions", titleVi: "Chia phân số",
        learn: [
          "Chia cho một phân số nghĩa là hỏi 'trong số này chứa bao nhiêu phần như vậy?': 2/3 ÷ 1/6 = 4.",
          "Quy tắc: lật ngược phân số thứ hai (số nghịch đảo) rồi nhân.",
          "Nghịch đảo của 2/3 là 3/2; của 5 là 1/5.",
          "Chia cho phân số nhỏ hơn 1 cho kết quả lớn hơn số bị chia.",
          "Cuối cùng rút gọn và đổi sang hỗn số nếu cần."
        ],
        example: { q: "Tính 2/5 ÷ 3/10.",
          steps: ["Lật phân số thứ hai: 2/5 × 10/3", "Nhân: 20/15 = 4/3", "Đổi hỗn số: 1 1/3"],
          prompts: [
            "Chia cho một phân số tức là nhân với phân số nào?",
            "Nhân hai phân số xong, em có rút gọn được 20/15 không? Chia cho số nào?",
            "Phân số này lớn hơn 1: em viết nó thành hỗn số thế nào?"
          ],
          answer: { type: "num", value: "4/3" },
          twist: { q: "Nếu đổi phép chia thành phép nhân, tính 2/5 × 3/10, thì kết quả là bao nhiêu?", answer: { type: "num", value: "3/25" } } },
        questions: [
          Q("7.4-01", "num", 1, "div-frac", "Work out 2/3 ÷ 1/6.", 4,
            ["Trong 2/3 chứa bao nhiêu phần sáu? 2/3 bằng mấy phần sáu?", "2/3 = 4/6.", "4/6 chứa bao nhiêu 1/6?"], "2/3 × 6/1 = 12/3 = 4."),
          Q("7.4-02", "num", 1, "div-frac", "Work out 1/2 ÷ 1/4.", 2,
            ["Một nửa gồm mấy phần tư?", "1/2 = 2/4.", "2/4 ÷ 1/4 = ?"], "1/2 × 4/1 = 4/2 = 2."),
          Q("7.4-03", "num", 2, "div-frac", "Work out 2/5 ÷ 3/10. Give your answer as a mixed number.", "1 1/3",
            ["Lật 3/10 thành phân số nào?", "2/5 × 10/3 = ?", "20/15 rút gọn rồi đổi hỗn số."], "2/5 × 10/3 = 20/15 = 4/3 = 1 1/3."),
          Q("7.4-04", "num", 2, "div-frac", "Work out 3/8 ÷ 3/4.", "1/2",
            ["Nghịch đảo của 3/4 là gì?", "3/8 × 4/3: có thể rút gọn chéo không?", "Còn lại phân số nào?"], "3/8 × 4/3 = 12/24 = 1/2."),
          Q("7.4-05", "num", 2, "div-frac", "Work out 7/9 ÷ 2/3. Give your answer as a mixed number.", "1 1/6",
            ["Lật 2/3.", "7/9 × 3/2: rút gọn 3 với 9.", "7/6 = ? hỗn số."], "7/9 × 3/2 = 21/18 = 7/6 = 1 1/6."),
          Q("7.4-06", "mc", 2, "div-misconception", "Work out 3/4 ÷ 1/2.", 1,
            ["Ta cần lật phân số nào trước khi nhân?", "Nghịch đảo của 1/2 là gì?", "3/4 × 2 = ?"],
            "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 1 1/2. Đáp án 3/8 là nhân thẳng 3/4 × 1/2 (quên lật).",
            { choices: ["3/8", "1 1/2", "2/3", "3/4"] }),
          Q("7.4-07", "mc", 3, "div-size", "Without calculating exactly, is 5/6 ÷ 2/3 bigger or smaller than 5/6?", 0,
            ["Chia 5/6 cho 2/3 nghĩa là hỏi 5/6 chứa bao nhiêu nhóm 2/3.", "2/3 nhỏ hơn 1, vậy phép chia sẽ cho nhiều hay ít nhóm hơn so với chia cho 1?", "Kiểm tra: 5/6 × 3/2 = 5/4 có lớn hơn 5/6 không?"],
            "Chia cho một phân số nhỏ hơn 1 cho kết quả lớn hơn. Thật vậy 5/6 × 3/2 = 5/4 > 5/6.",
            { choices: ["Bigger, because dividing by a fraction less than 1 gives more groups", "Smaller, because division always makes numbers smaller", "The same, because the fraction is only turned upside down"] }),
          Q("7.4-08", "num", 3, "div-word", "How many cups holding 3/4 litre can be filled from 4 1/2 litres of juice?", 6,
            ["Đổi 4 1/2 ra phân số: 9/2.", "Cần tính 9/2 ÷ 3/4.", "9/2 × 4/3 = ?"], "9/2 ÷ 3/4 = 9/2 × 4/3 = 36/6 = 6 cốc.", { unitLabel: "cups" }),
          Q("7.4-09", "num", 3, "div-inverse", "A number divided by 2/3 gives 9/4. Find the number as a mixed number.", "1 1/2",
            ["Phép chia ngược của chia là phép gì?", "Số cần tìm = 9/4 × 2/3.", "Rút gọn rồi đổi hỗn số."], "Số đó = 9/4 × 2/3 = 18/12 = 3/2 = 1 1/2.")
        ]
      },
      {
        id: "7.5", title: "Making fraction calculations easier", titleVi: "Tính phân số nhanh hơn",
        learn: [
          "Tách phân số thành tích các phân số dễ hơn bằng ước số: 1/4 = 1/2 × 1/2 (chia đôi hai lần).",
          "Dùng phân số bằng nhau với mẫu 10 hoặc 100 để chia cho dễ: 3/5 = 6/10.",
          "Tìm phân số lớn của một số bằng cách lấy số đó trừ đi phân số bé bù: 19/20 của 800 = 800 − 1/20 × 800.",
          "Rút gọn các thừa số chung ở tử và mẫu trước khi nhân.",
          "Luôn tuân theo thứ tự thực hiện phép tính: nhân chia trước, cộng trừ sau."
        ],
        example: { q: "Tính 3/20 × 4500.",
          steps: ["3/20 = 15/100", "4500 ÷ 100 = 45", "15 × 45 = 15×40 + 15×5 = 600 + 75 = 675"],
          prompts: [
            "Đổi 3/20 sang phân số có mẫu 100 thì được bao nhiêu phần trăm?",
            "Chia 4500 cho 100 được bao nhiêu, đó là giá trị của mấy phần?",
            "Có 15 phần như vậy: em nhân thế nào cho dễ, chẳng hạn tách 15 ra?"
          ],
          answer: { type: "num", value: 675 },
          twist: { q: "Nếu 3/20 của một số bằng 45 thì số đó là bao nhiêu?", answer: { type: "num", value: 300 } } },
        questions: [
          Q("7.5-01", "num", 1, "easy-frac-of", "Work out 1/4 × 600.", 150,
            ["1/4 là chia đôi mấy lần?", "600 ÷ 2 = 300.", "300 ÷ 2 = ?"], "Chia đôi hai lần: 600 → 300 → 150."),
          Q("7.5-02", "num", 1, "easy-frac-of", "Work out 3/5 × 120.", 72,
            ["Đổi 3/5 thành phân số mẫu 10.", "3/5 = 6/10; 120 ÷ 10 = 12.", "12 × 6 = ?"], "120 ÷ 10 = 12, nhân 6 được 72."),
          Q("7.5-03", "num", 2, "easy-frac-of", "Work out 1/15 × 180.", 12,
            ["15 = 3 × 5, em chia 180 cho 3 rồi cho 5.", "180 ÷ 3 = 60.", "60 ÷ 5 = ?"], "180 ÷ 15 = 12."),
          Q("7.5-04", "num", 2, "easy-frac-of", "Work out 3/20 × 4500.", 675,
            ["Đổi 3/20 thành phân số mẫu 100.", "3/20 = 15/100, và 4500 ÷ 100 = 45.", "15 × 45 = 15×40 + 15×5."], "15 × 45 = 600 + 75 = 675."),
          Q("7.5-05", "num", 2, "easy-frac-of", "Work out 7/20 × 900.", 315,
            ["900 ÷ 20 bằng bao nhiêu?", "900 ÷ 20 = 45.", "45 × 7 = ?"], "900 ÷ 20 = 45, nhân 7 được 315."),
          Q("7.5-06", "num", 2, "cancel-frac", "Work out 9/10 × 5/12 as a fraction in simplest form.", "3/8",
            ["Rút gọn chéo 9 với 12 (chia cho 3) và 5 với 10 (chia cho 5).", "Còn 3/2 × 1/4.", "Nhân hai phân số còn lại."], "9/10 × 5/12 = 3/2 × 1/4 = 3/8."),
          Q("7.5-07", "mc", 2, "easy-misconception", "Which is 2/5 of 340?", 1,
            ["Chia 340 cho mẫu số trước.", "340 ÷ 5 = 68 (đó là 1/5).", "2/5 là mấy lần 1/5?"],
            "1/5 của 340 là 68, nên 2/5 là 136. Đáp án 68 là quên nhân với tử số; 850 là chia cho tử và nhân với mẫu (ngược).",
            { choices: ["850", "136", "1700", "68"] }),
          Q("7.5-08", "num", 3, "complement", "Work out 19/20 × 800 by first finding 1/20 of 800.", 760,
            ["19/20 thiếu bao nhiêu phần để thành một nguyên?", "Thiếu 1/20. 1/20 của 800 là 40.", "800 − 40 = ?"], "19/20 = 1 − 1/20. 1/20 × 800 = 40, nên kết quả 800 − 40 = 760."),
          Q("7.5-09", "num", 3, "order-ops-frac", "Work out 1/2 + 1/3 × 3/4 as a fraction.", "3/4",
            ["Phép tính nào làm trước, cộng hay nhân?", "1/3 × 3/4 = 1/4.", "1/2 + 1/4 = ?"], "Nhân trước: 1/3 × 3/4 = 1/4. Cộng: 1/2 + 1/4 = 3/4."),
          Q("7.5-10", "num", 3, "easy-frac-of", "Work out 11/20 × 7000.", 3850,
            ["Đổi 11/20 thành phân số mẫu 100.", "11/20 = 55/100 và 7000 ÷ 100 = 70.", "55 × 70 = ?"], "70 × 55 = 70×50 + 70×5 = 3500 + 350 = 3850.")
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Những bài toán phân số kiểu kiểm tra lớp 6–7 và học sinh giỏi: tính nhanh, bài toán có lời văn và so sánh khéo léo.",
      questions: [
        Q("ch-01", "num", 2, "telescoping", "Tính nhanh: 1/(1×2) + 1/(2×3) + 1/(3×4) + … + 1/(9×10). Viết kết quả dạng phân số.", "9/10",
          ["Thử viết 1/(1×2) = 1 − 1/2 và 1/(2×3) = 1/2 − 1/3.", "Mỗi số hạng có dạng 1/n − 1/(n+1). Các số hạng giữa sẽ thế nào khi cộng lại?", "Chỉ còn lại số hạng đầu và cuối: 1 − 1/10."],
          "Vì 1/(n(n+1)) = 1/n − 1/(n+1), tổng bị triệt tiêu thành 1 − 1/10 = 9/10.", V),
        Q("ch-02", "num", 3, "telescoping", "Tính: 1/(3×4) + 1/(4×5) + 1/(5×6) + … + 1/(11×12).", "1/4",
          ["Dùng 1/(n(n+1)) = 1/n − 1/(n+1).", "Số hạng đầu là 1/3 − 1/4, số hạng cuối là 1/11 − 1/12.", "Còn lại 1/3 − 1/12 = ?"],
          "Tổng = 1/3 − 1/12 = 4/12 − 1/12 = 3/12 = 1/4.", V),
        Q("ch-03", "num", 3, "telescoping", "Tính: 1/(1×3) + 1/(3×5) + 1/(5×7) + … + 1/(19×21).", "10/21",
          ["Hai thừa số cách nhau 2 đơn vị. Thử: 1/(1×3) = 1/2 × (1 − 1/3).", "Tổng quát 1/(n(n+2)) = 1/2 × (1/n − 1/(n+2)).", "Tổng = 1/2 × (1 − 1/21)."],
          "Tổng = 1/2 × (1 − 1/21) = 1/2 × 20/21 = 10/21.", V),
        Q("ch-04", "num", 2, "work-rate", "Vòi thứ nhất chảy một mình đầy bể trong 6 giờ, vòi thứ hai chảy một mình đầy bể trong 3 giờ. Mở cả hai vòi cùng lúc thì sau bao nhiêu giờ đầy bể?", 2,
          ["Trong 1 giờ vòi thứ nhất chảy được mấy phần bể?", "Vòi 1: 1/6 bể, vòi 2: 1/3 bể mỗi giờ. Cả hai mỗi giờ được bao nhiêu?", "Nếu mỗi giờ chảy 1/2 bể thì cần mấy giờ để đầy 1 bể?"],
          "Mỗi giờ: 1/6 + 1/3 = 1/2 bể. Vậy cần 1 ÷ 1/2 = 2 giờ.", V3({ unitLabel: "giờ" })),
        Q("ch-05", "num", 3, "work-rate", "Một vòi nước chảy vào đầy bể cạn trong 6 giờ. Một vòi khác tháo cạn bể đầy trong 9 giờ. Bể đang cạn, mở cả hai vòi cùng lúc. Sau bao nhiêu giờ bể đầy?", 18,
          ["Vòi vào mỗi giờ làm đầy được mấy phần bể? Vòi ra làm vơi mấy phần?", "Mỗi giờ tăng thêm: 1/6 − 1/9 phần bể.", "1/6 − 1/9 = 1/18. Cần mấy giờ để đủ 1 bể?"],
          "Mỗi giờ nước tăng 1/6 − 1/9 = 3/18 − 2/18 = 1/18 bể, nên cần 18 giờ.", V3({ unitLabel: "giờ" })),
        Q("ch-06", "num", 3, "frac-of-remaining", "Một người đi hết quãng đường trong 3 ngày. Ngày đầu đi 2/5 quãng đường. Ngày thứ hai đi 3/5 quãng đường còn lại. Ngày thứ ba đi nốt 18 km. Tính độ dài quãng đường.", 75,
          ["Sau ngày đầu còn lại bao nhiêu phần quãng đường?", "Còn 3/5. Ngày hai đi 3/5 của 3/5 = 9/25. Còn lại sau ngày hai?", "Còn 3/5 − 9/25 = 6/25 quãng đường ứng với 18 km. Quãng đường cả là bao nhiêu?"],
          "Phần còn lại sau 2 ngày: 3/5 × (1 − 3/5) = 3/5 × 2/5 = 6/25. 6/25 quãng đường = 18 km nên cả quãng đường = 18 ÷ 6/25 = 75 km.", V3({ unitLabel: "km" })),
        Q("ch-07", "mc", 2, "compare-trick", "So sánh 2023/2024 và 2024/2025 (không quy đồng).", 1,
          ["Mỗi phân số còn thiếu bao nhiêu để bằng 1?", "2023/2024 thiếu 1/2024 ; 2024/2025 thiếu 1/2025.", "Phần thiếu nào nhỏ hơn thì phân số đó gần 1 hơn."],
          "Phần bù: 1/2024 > 1/2025 nên 2023/2024 = 1 − 1/2024 nhỏ hơn 2024/2025 = 1 − 1/2025.", V3({ choices: ["2023/2024 > 2024/2025", "2023/2024 < 2024/2025", "Hai phân số bằng nhau"] })),
        Q("ch-08", "mc", 3, "compare-trick", "Phân số nào lớn nhất trong ba phân số 11/12, 12/13, 13/14?", 2,
          ["Tính phần bù của mỗi phân số so với 1.", "Phần bù lần lượt: 1/12, 1/13, 1/14.", "Phần bù nhỏ nhất thì phân số lớn nhất."],
          "1 − 11/12 = 1/12, 1 − 12/13 = 1/13, 1 − 13/14 = 1/14. Phần bù 1/14 bé nhất nên 13/14 lớn nhất.", V3({ choices: ["11/12", "12/13", "13/14", "Cả ba bằng nhau"] })),
        Q("ch-09", "num", 3, "find-x", "Tìm x, biết (x + 1/2) × 2/3 = 5/6. Viết x dạng phân số.", "3/4",
          ["Một tích bằng 5/6, thừa số đã biết là 2/3. Thừa số còn lại tính thế nào?", "x + 1/2 = 5/6 ÷ 2/3 = 5/6 × 3/2.", "x + 1/2 = 5/4. Vậy x = ?"],
          "x + 1/2 = 5/6 ÷ 2/3 = 15/12 = 5/4, nên x = 5/4 − 1/2 = 3/4.", V),
        Q("ch-10", "num", 2, "frac-of-number", "Lớp 7A có 48 học sinh, trong đó 1/6 số học sinh đạt loại giỏi, 3/8 số học sinh đạt loại khá, còn lại là trung bình. Có bao nhiêu học sinh trung bình?", 22,
          ["Tính số học sinh giỏi: 1/6 của 48.", "Giỏi: 8 em; khá: 3/8 của 48 = 18 em.", "48 trừ đi số giỏi và khá."],
          "Giỏi: 48/6 = 8; khá: 48×3/8 = 18; trung bình: 48 − 8 − 18 = 22.", V3({ unitLabel: "học sinh" }))
      ]
    },
    project: {
      title: "Fraction averages", titleVi: "Trung bình của các phân số",
      pages: [163],
      goal: "Tìm các bộ năm phân số nằm giữa 0 và 1 có trung bình cộng, trung vị và yếu vị (mốt) đều bằng 1/2, rồi khám phá khoảng biến thiên.",
      steps: [
        "Kiểm tra bộ 1/5, 1/2, 1/2, 1/2, 4/5: tính mốt, trung vị và trung bình cộng.",
        "Tự tạo ít nhất ba bộ năm phân số khác có mốt, trung vị, trung bình đều bằng 1/2.",
        "Tìm bộ mà phân số 1/2 chỉ xuất hiện đúng hai lần nhưng vẫn là mốt, trung vị và trung bình.",
        "Tính khoảng biến thiên (lớn nhất trừ nhỏ nhất) của mỗi bộ; tìm bộ có khoảng biến thiên lớn hơn 1/2, nhỏ hơn 1/2 và đúng bằng 1/2."
      ],
      extensions: [
        "Thay 1/2 bằng 1/3: tìm bộ năm phân số có mốt, trung vị, trung bình cùng bằng 1/3.",
        "Thử với bộ bảy phân số và ghi lại quy luật em thấy.",
        "Tìm bộ phân số có trung bình cộng 1/2 nhưng trung vị khác 1/2."
      ],
      reflect: [
        "Em đã dùng chiến lược nào để đảm bảo trung bình bằng 1/2 (ví dụ ghép cặp phân số đối nhau quanh 1/2)?",
        "Vì sao khoảng biến thiên của các bộ trên không bao giờ vượt quá 1?",
        "Em thấy cộng phân số ở bước tính trung bình khó ở chỗ nào?"
      ]
    }
  });
  // 🎲 Number variants for spaced review (js/variants*.js): family that re-asks each question with fresh numbers.
  const GEN = { "7.1-01": "equiv-frac", "7.1-02": "equiv-frac", "7.1-05": "to-mixed", "7.2-01": "frac-add", "7.2-03": "frac-add", "7.2-02": "mixed-add", "7.2-04": "mixed-add", "7.2-06": "mixed-add", "7.2-05": "mixed-sub", "7.3-01": "frac-mul", "7.3-02": "frac-mul", "7.3-03": "frac-mul", "7.3-04": "frac-mul", "7.3-06": "frac-mul", "7.3-05": "frac-square", "7.4-01": "frac-div", "7.4-02": "frac-div", "7.4-03": "frac-div", "7.4-04": "frac-div", "7.4-05": "frac-div", "7.4-06": "frac-div", "7.5-01": "frac-of", "7.5-02": "frac-of", "7.5-03": "frac-of", "7.5-04": "frac-of", "7.5-05": "frac-of", "7.5-07": "frac-of", "7.5-10": "frac-of" };
  window.GAME_DATA.units.filter(function (u) { return u.id === 7; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
