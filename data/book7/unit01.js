(function () {
  // Helper: builds a Question object exactly as in DATA_SCHEMA.md
  function Q(id, type, diff, skill, source, q, answer, hints, explain, o) {
    o = o || {};
    return {
      id: id, type: type, diff: diff, skill: skill, source: source,
      lang: source === "vn" ? "vi" : "en",
      q: q, svg: o.svg || null, choices: o.choices || null, answer: answer,
      accept: o.accept || [], tol: o.tol || 0, unitLabel: o.unitLabel || "",
      hints: hints, explain: explain, why: o.why || null, howto: o.howto || null
    };
  }
  var B = "book", V = "vn";

  window.GAME_DATA = window.GAME_DATA || { units: [] };
  window.GAME_DATA.units.push({
    id: 1,
    title: "Integers",
    titleVi: "Số nguyên",
    strand: "Number",
    pages: [9, 29],
    realm: "Đảo Băng Lửa",
    emoji: "🧊",
    story: "Con tàu của em cập bến Đảo Băng Lửa, nơi núi lửa nóng tới +800°C còn hang băng lạnh tới −40°C. Muốn mở cổng đảo, em phải đọc nhiệt kế, chia đều kho báu và giải các mật mã chia hết. Số nguyên chính là chìa khóa!",
    glossary: [
      { en: "integer", vi: "số nguyên", def: "Các số nguyên dương, số 0 và các số nguyên âm: …, −2, −1, 0, 1, 2, …" },
      { en: "inverse", vi: "số đối", def: "Số đối của 3 là −3: cộng hai số này được 0." },
      { en: "multiple", vi: "bội", def: "Kết quả khi nhân một số với 1, 2, 3, …; ví dụ bội của 4: 4, 8, 12, …" },
      { en: "lowest common multiple (LCM)", vi: "bội chung nhỏ nhất (BCNN)", def: "Số nhỏ nhất (khác 0) là bội của cả hai số đã cho." },
      { en: "factor", vi: "ước", def: "Số chia hết số đã cho mà không dư; ví dụ ước của 18: 1, 2, 3, 6, 9, 18." },
      { en: "highest common factor (HCF)", vi: "ước chung lớn nhất (ƯCLN)", def: "Số lớn nhất là ước của cả hai số đã cho." },
      { en: "test for divisibility", vi: "dấu hiệu chia hết", def: "Quy tắc nhanh để biết một số có chia hết cho 2, 3, 4, 5, … hay không." },
      { en: "square number", vi: "số chính phương", def: "Bình phương của một số nguyên: 1, 4, 9, 16, 25, …" },
      { en: "cube number", vi: "số lập phương", def: "Lập phương của một số nguyên: 1, 8, 27, 64, …" },
      { en: "square root", vi: "căn bậc hai", def: "√16 = 4 vì 4² = 16." }
    ],
    sections: [
      {
        id: "1.1", title: "Adding and subtracting integers", titleVi: "Cộng và trừ số nguyên",
        sims: [{ id: "numberline", at: 0 }, { id: "counters", at: 1 }],
        learn: [
          "Trên trục số: cộng số dương thì đi sang phải, cộng số âm thì đi sang trái.",
          "Số đối của 3 là −3, số đối của −5 là 5. Hai số đối nhau cộng lại bằng 0.",
          "Trừ một số nguyên = cộng với số đối của nó: 2 − 6 = 2 + (−6) = −4.",
          "Trừ một số âm thì thành cộng số dương: 2 − (−4) = 2 + 4 = 6.",
          "Muốn ước lượng, làm tròn các số (chục, trăm, hay đơn vị) rồi mới tính."
        ],
        example: {
          q: "Tính −4 − (−3).",
          steps: ["Trừ một số = cộng số đối của nó. Số đối của −3 là 3.", "−4 − (−3) = −4 + 3", "Từ −4 đi sang phải 3 bước: kết quả = −1."],
          prompts: [
            "Phép trừ một số có thể được thay bằng phép cộng với số nào?",
            "Em viết lại phép tính này dưới dạng một phép cộng như thế nào?",
            "Đứng ở −4 trên trục số rồi cộng 3: em đi về phía nào và dừng ở đâu?"
          ],
          answer: { type: "num", value: -1 },
          twist: { q: "Nếu đổi thành −4 − (+3) thì kết quả là bao nhiêu? Vì sao khác với −4 − (−3)?", answer: { type: "num", value: -7 } }
        },
        questions: [
          Q("1.1-01", "num", 1, "add-negatives", B, "Work out −3 + 4.", 1,
            ["Em đặt ngón tay ở −3 trên trục số. Cộng 4 thì đi sang trái hay sang phải?", "Từ −3 cần mấy bước để về 0?", "Sau khi về 0, còn bao nhiêu bước nữa?"],
            "Từ −3 đi sang phải 4 bước: 3 bước tới 0, còn 1 bước nữa. Vậy −3 + 4 = 1."),
          Q("1.1-02", "num", 1, "add-negatives", B, "Work out 9 + (−5).", 4,
            ["Cộng một số âm thì đi sang trái hay phải?", "Từ 9 đi sang trái 5 bước thì tới số nào?", "Kiểm tra lại: 9 − 5 bằng mấy?"],
            "9 + (−5) giống 9 − 5 = 4."),
          Q("1.1-03", "num", 1, "subtract-integers", B, "Work out 3 − (−5).", 8,
            ["Số đối của −5 là số nào?", "Trừ một số thì ta làm phép gì với số đối của nó?", "Vậy 3 − (−5) = 3 + ? "],
            "Trừ −5 là cộng 5: 3 − (−5) = 3 + 5 = 8."),
          Q("1.1-04", "num", 1, "subtract-integers", B, "Work out −3 − 7.", -10,
            ["Số đối của 7 là số nào?", "Viết −3 − 7 thành −3 + (số đối của 7).", "Từ −3 đi sang trái 7 bước thì tới số nào?"],
            "−3 − 7 = −3 + (−7) = −10."),
          Q("1.1-05", "num", 2, "add-negatives", B, "Two integers add up to −4. One of the integers is 5. Work out the other integer.", -9,
            ["Từ 5, cần cộng thêm bao nhiêu để về 0?", "Từ 0, cần đi tiếp bao nhiêu bước nữa để tới −4?", "Cộng hai quãng em tìm được (cùng hướng trái) thì ra mấy?"],
            "5 + ? = −4 nên ? = −4 − 5 = −9. Kiểm tra: 5 + (−9) = −4."),
          Q("1.1-06", "mc", 2, "subtract-negatives", B, "What is −4 − (−6)?", 1,
            ["Dấu trừ đứng trước một số âm thì đổi thành phép gì?", "−4 − (−6) = −4 + ? ", "Từ −4 đi sang phải 6 bước thì tới đâu?"],
            "Trừ −6 là cộng 6: −4 + 6 = 2. Nhiều bạn nhầm thành −4 − 6 = −10 (quên rằng trừ số âm thì đổi thành cộng).",
            { choices: ["−10", "2", "−2", "10"] }),
          Q("1.1-07", "num", 2, "estimate", B, "Estimate −67 + 29 by rounding each number to the nearest 10.", -40,
            ["Làm tròn −67 đến hàng chục thì được số nào?", "Làm tròn 29 đến hàng chục thì được số nào?", "Cộng hai số đã làm tròn."],
            "−67 ≈ −70 và 29 ≈ 30, nên ước lượng là −70 + 30 = −40."),
          Q("1.1-08", "num", 2, "add-negatives", B, "Work out −5 + 4 + (−3).", -4,
            ["Cộng hai số đầu trước: −5 + 4 bằng mấy?", "Lấy kết quả đó cộng tiếp với −3.", "Từ −1 đi sang trái 3 bước tới đâu?"],
            "−5 + 4 = −1, rồi −1 + (−3) = −4. Đổi thứ tự cộng vẫn ra −4."),
          Q("1.1-09", "num", 3, "number-line-reasoning", B, "Three integers are equally spaced on a number line. The smallest is −3 and the largest is 7. What is the integer in the middle?", 2,
            ["Từ −3 đến 7 khoảng cách là bao nhiêu?", "Số ở giữa chia khoảng cách ấy làm mấy phần bằng nhau?", "Từ −3 đi sang phải một nửa khoảng cách đó."],
            "Khoảng cách 7 − (−3) = 10, một nửa là 5. Số giữa là −3 + 5 = 2."),
          Q("1.1-10", "mc", 3, "reasoning-subtraction", B, "● and ▲ are two integers. Which statement about ● − ▲ and ▲ − ● is always true?", 1,
            ["Thử với ● = 5, ▲ = 3. Tính ● − ▲ và ▲ − ●.", "Hai kết quả đó có quan hệ gì với nhau?", "Thử thêm một cặp số khác, ví dụ ● = −2, ▲ = 4 để kiểm tra dự đoán."],
            "5 − 3 = 2 còn 3 − 5 = −2: chúng là hai số đối nhau. Điều này đúng với mọi cặp số. Chúng chỉ bằng nhau khi ● = ▲ (khi đó cả hai bằng 0).",
            { choices: ["They always have the same value", "They are always the inverse of each other (they add to 0)", "They have the same value when both integers are positive"] })
        ]
      },
      {
        id: "1.2", title: "Multiplying and dividing integers", titleVi: "Nhân và chia số nguyên",
        learn: [
          "Nhân số âm với số dương cho kết quả âm: −3 × 4 = −3 + (−3) + (−3) + (−3) = −12.",
          "Chia là phép ngược của nhân: vì −3 × 4 = −12 nên −12 ÷ 4 = −3.",
          "Hai số khác dấu: tích và thương đều âm. Ví dụ 6 × (−9) = −54, 63 ÷ (−7) = −9.",
          "Có ngoặc thì tính trong ngoặc trước: 5 × (1 + (−4)) = 5 × (−3) = −15.",
          "Ước lượng bằng cách làm tròn: −3,2 × 6,8 ≈ −3 × 7 = −21."
        ],
        example: {
          q: "Tính 20 ÷ (−10) và 5 × (1 + (−4)).",
          steps: ["20 ÷ 10 = 2; hai số khác dấu nên thương âm: 20 ÷ (−10) = −2.", "Trong ngoặc: 1 + (−4) = −3.", "5 × (−3) = −15."],
          prompts: [
            "Bỏ qua dấu, chia hai độ lớn trước: được bao nhiêu? Hai số khác dấu thì thương mang dấu gì?",
            "Có ngoặc thì phần nào phải làm trước? Trong ngoặc, 1 cộng với số âm 4 cho kết quả gì?",
            "Số dương nhân với số âm cho dấu gì? Em tính thử."
          ],
          answer: { type: "text", value: "−2, −15", accept: ["-2;-15", "-2,-15", "-2 và -15", "−2; −15"] },
          twist: { q: "Nếu thừa số đầu đổi thành (−5), tức (−5) × (1 + (−4)), thì kết quả là bao nhiêu?", answer: { type: "num", value: 15 } }
        },
        questions: [
          Q("1.2-01", "num", 1, "multiply-neg", B, "Work out 6 × (−4).", -24,
            ["Tính 6 × 4 trước (bỏ dấu) được bao nhiêu?", "Hai số khác dấu thì tích dương hay âm?", "Ghép dấu với kết quả."],
            "6 × 4 = 24, khác dấu nên 6 × (−4) = −24."),
          Q("1.2-02", "num", 1, "divide-neg", B, "Work out −30 ÷ 6.", -5,
            ["30 ÷ 6 bằng mấy?", "Một số âm chia cho số dương cho dấu gì?", "Ghép lại."],
            "30 ÷ 6 = 5, khác dấu nên −30 ÷ 6 = −5."),
          Q("1.2-03", "num", 1, "divide-neg", B, "Work out 27 ÷ (−3).", -9,
            ["27 ÷ 3 bằng mấy?", "Hai số khác dấu thì thương dấu gì?", "Viết đáp số."],
            "27 ÷ 3 = 9, khác dấu nên kết quả −9."),
          Q("1.2-04", "num", 2, "missing-number", B, "Find the missing number: −2 × □ = −14.", 7,
            ["14 chia cho 2 bằng mấy?", "Số âm nhân với số nào thì ra số âm?", "Nhân thử −2 với số em nghĩ."],
            "−14 ÷ (−2) = 7 vì −2 × 7 = −14. Số cần tìm là 7 (dương, để tích âm)."),
          Q("1.2-05", "mc", 2, "multiply-neg", B, "Work out −5 × 3.", 1,
            ["Phần số (bỏ dấu): 5 × 3 bằng mấy?", "Hai số khác dấu thì dấu của tích là gì?", "Loại các đáp án có dấu hoặc độ lớn sai."],
            "5 × 3 = 15 và tích khác dấu nên âm: −15. Đáp án 15 là quên dấu; −2 là nhầm nhân thành cộng.",
            { choices: ["15", "−15", "−2", "2"] }),
          Q("1.2-06", "num", 2, "brackets", B, "Work out 5 × (−2 − 4).", -30,
            ["Tính trong ngoặc trước: −2 − 4 = ?", "Nhân kết quả đó với 5.", "Dấu của tích?"],
            "−2 − 4 = −6, rồi 5 × (−6) = −30."),
          Q("1.2-07", "num", 2, "brackets", B, "Work out −4 × (−1 + 7).", -24,
            ["Trong ngoặc: −1 + 7 = ?", "Nhân −4 với số đó.", "Khác dấu thì kết quả âm."],
            "−1 + 7 = 6 và −4 × 6 = −24."),
          Q("1.2-08", "num", 2, "estimate", B, "Estimate −53 × 39 by rounding to the nearest 10.", -2000,
            ["Làm tròn −53 và 39 đến hàng chục.", "Nhân hai số đã làm tròn (bỏ dấu trước).", "Khác dấu thì nhớ thêm dấu trừ."],
            "−53 ≈ −50 và 39 ≈ 40; −50 × 40 = −2000."),
          Q("1.2-09", "num", 3, "factor-pairs", B, "How many ordered pairs of integers (a, b) have a × b = −10? (For example (2, −5) and (−5, 2) count as different pairs.)", 8,
            ["Liệt kê các cặp số dương có tích 10: (1, 10), (2, 5)...", "Với mỗi cặp, số nào mang dấu âm? Có hai khả năng.", "Đã tính cả thứ tự đảo (a, b) và (b, a) chưa?"],
            "Các cặp ước dương của 10 là {1,10} và {2,5}. Mỗi cặp có 2 thứ tự và 2 cách đặt dấu âm: 2 × 2 × 2 = 8 cặp.", { howto: "Count every ordered pair of integers (a, b) whose product is −10 and enter how many pairs there are." }),
          Q("1.2-10", "num", 3, "product-sum", B, "The product of two integers is −10 and their sum is 3. What is the larger integer?", 5,
            ["Liệt kê vài cặp có tích −10, như (2, −5), (5, −2), (1, −10)...", "Tính tổng của từng cặp.", "Cặp nào có tổng 3? Số lớn hơn của cặp đó là gì?"],
            "5 × (−2) = −10 và 5 + (−2) = 3. Số lớn hơn là 5.")
        ]
      },
      {
        id: "1.3", title: "Lowest common multiples", titleVi: "Bội chung nhỏ nhất",
        learn: [
          "Bội của 4: 4, 8, 12, 16, … Bội của 6: 6, 12, 18, … Bội chung của 4 và 6: 12, 24, 36, …",
          "BCNN (bội chung nhỏ nhất) là số nhỏ nhất trong các bội chung: BCNN(4, 6) = 12.",
          "Cách tìm: liệt kê bội của số lớn hơn rồi kiểm tra số nào chia hết cho số còn lại.",
          "Mọi bội chung đều là bội của BCNN.",
          "Tích A × B luôn là một bội chung của A và B nhưng không phải lúc nào cũng là bội chung nhỏ nhất."
        ],
        example: {
          q: "Tìm BCNN của 6 và 10.",
          steps: ["Bội của 10 tận cùng bằng 0: 10, 20, 30, …", "Trong đó số đầu tiên chia hết cho 6 là 30.", "BCNN(6, 10) = 30."],
          prompts: [
            "Hãy liệt kê vài bội đầu của số lớn hơn: chữ số cuối của chúng có điểm gì đặc biệt?",
            "Trong dãy đó, số nào đầu tiên cũng chia hết cho 6? Thử chia từng số cho 6.",
            "Số vừa tìm có phải bội chung nhỏ nhất không? Em kết luận thế nào?"
          ],
          answer: { type: "num", value: 30 },
          twist: { q: "Nếu thay 10 bằng 9 thì BCNN(6, 9) là bao nhiêu? Nó có bằng 6 × 9 = 54 không?", answer: { type: "num", value: 18 } }
        },
        questions: [
          Q("1.3-01", "num", 1, "lcm", B, "Find the LCM of 4 and 6.", 12,
            ["Liệt kê vài bội của 6.", "Số nào trong đó cũng chia hết cho 4?", "Đó là số nhỏ nhất như vậy chưa?"],
            "Bội của 6: 6, 12, ... ; 12 chia hết cho 4 nên BCNN = 12."),
          Q("1.3-02", "num", 1, "lcm", B, "Find the LCM of 8 and 12.", 24,
            ["Liệt kê bội của 12: 12, 24, 36, ...", "Số nào chia hết cho 8?", "Chọn số nhỏ nhất."],
            "12 không chia hết cho 8; 24 = 8 × 3 nên BCNN = 24."),
          Q("1.3-03", "num", 1, "lcm", B, "Find the LCM of 10 and 15.", 30,
            ["Liệt kê bội của 15.", "15 có chia hết cho 10 không? 30?", "Chọn số nhỏ nhất thỏa mãn."],
            "Bội của 15: 15, 30, ...; 30 chia hết cho 10 nên BCNN = 30."),
          Q("1.3-04", "num", 2, "lcm", B, "Find the LCM of 7 and 8.", 56,
            ["7 và 8 có ước chung nào lớn hơn 1 không?", "Nếu không có, BCNN liên quan thế nào tới tích 7 × 8?", "Tính 7 × 8."],
            "7 và 8 không có ước chung nào ngoài 1 nên BCNN = 7 × 8 = 56."),
          Q("1.3-05", "num", 2, "lcm-three", B, "Find the LCM of 3, 4 and 6.", 12,
            ["Bội của 6: 6, 12, 18...", "Số nào chia hết cho 3 và 4 nữa?", "Chọn số nhỏ nhất."],
            "12 chia hết cho 3, 4 và 6; không có số nhỏ hơn nào như vậy. BCNN = 12."),
          Q("1.3-06", "num", 2, "lcm-three", B, "Find the LCM of 18, 9 and 4.", 36,
            ["Bắt đầu từ bội của số lớn nhất: 18, 36, ...", "18 có chia hết cho 4 không?", "36 có chia hết cho cả 9 và 4 không?"],
            "18 không chia hết cho 4; 36 chia hết cho 18, 9 và 4. BCNN = 36."),
          Q("1.3-07", "num", 2, "common-multiples", B, "How many common multiples of 3 and 5 are less than 40?", 2,
            ["BCNN của 3 và 5 là bao nhiêu?", "Mọi bội chung là gì của BCNN?", "Liệt kê bội của BCNN nhỏ hơn 40."],
            "BCNN = 15. Bội của 15 nhỏ hơn 40: 15 và 30. Có 2 số."),
          Q("1.3-08", "mc", 3, "lcm-misconception", B, "A student says: \"If A and B are whole numbers, then A × B is the lowest common multiple of A and B.\" Is this right?", 1,
            ["Thử với A = 4 và B = 6: tính A × B.", "Bội chung nhỏ nhất của 4 và 6 là bao nhiêu? Hai số có bằng nhau không?", "A × B luôn là một bội chung không? Có luôn nhỏ nhất không?"],
            "4 × 6 = 24 là bội chung của 4 và 6 nhưng BCNN là 12. Vậy A × B luôn là bội chung nhưng chưa chắc nhỏ nhất.",
            { choices: ["Yes, it is always the LCM", "No: it is always a common multiple, but not always the lowest (4 × 6 = 24, LCM = 12)", "No: A × B is never a common multiple"] }),
          Q("1.3-09", "num", 3, "lcm-reverse", B, "The LCM of two different whole numbers is 21, and both numbers are less than 21. What is the sum of the two numbers?", 10,
            ["Hai số này đều là ước của 21. Liệt kê các ước của 21.", "Loại 21 (không nhỏ hơn 21). Còn các ước nào?", "Chọn hai số có BCNN đúng bằng 21 rồi cộng lại."],
            "Ước của 21 nhỏ hơn 21: 1, 3, 7. BCNN(3, 7) = 21, còn BCNN(1, 3) = 3 và BCNN(1, 7) = 7. Vậy hai số là 3 và 7, tổng 10.")
        ]
      },
      {
        id: "1.4", title: "Highest common factors", titleVi: "Ước chung lớn nhất",
        learn: [
          "Ước của 18: 1, 2, 3, 6, 9, 18. Ước của 27: 1, 3, 9, 27. Ước chung: 1, 3, 9.",
          "ƯCLN (ước chung lớn nhất) là ước chung lớn nhất: ƯCLN(18, 27) = 9.",
          "Tìm ước theo cặp: 28 = 1 × 28 = 2 × 14 = 4 × 7.",
          "Chia cả tử và mẫu cho ƯCLN để rút gọn phân số hết mức: 16/40 = 2/5 (ƯCLN = 8).",
          "Nếu ƯCLN của tử và mẫu bằng 1 thì phân số không rút gọn được nữa."
        ],
        example: {
          q: "Tìm ƯCLN của 16 và 40, rồi rút gọn phân số 16/40.",
          steps: ["Ước của 16: 1, 2, 4, 8, 16. Số lớn nhất trong đó chia hết 40 là 8.", "ƯCLN(16, 40) = 8.", "Chia tử và mẫu cho 8: 16/40 = 2/5."],
          prompts: [
            "Hãy liệt kê các ước của số nhỏ hơn. Ước nào trong đó cũng chia hết số kia?",
            "Trong các ước chung em vừa tìm, số nào lớn nhất? Đó là ƯCLN.",
            "Muốn phân số giữ nguyên giá trị mà gọn hơn, em làm gì với tử và mẫu?"
          ],
          answer: { type: "num", value: "2/5" },
          twist: { q: "Nếu đổi thành phân số 18/48, phân số tối giản là gì?", answer: { type: "num", value: "3/8" } }
        },
        questions: [
          Q("1.4-01", "num", 1, "factors", B, "How many factors does 24 have?", 8,
            ["Tìm các cặp nhân bằng 24: 1 × 24, 2 × 12, ...", "Liệt kê đủ các cặp tới khi hai số gặp nhau.", "Đếm tất cả các số trong các cặp."],
            "24 = 1×24 = 2×12 = 3×8 = 4×6. Ước: 1, 2, 3, 4, 6, 8, 12, 24, tổng cộng 8 ước."),
          Q("1.4-02", "num", 1, "hcf", B, "Find the HCF of 18 and 48.", 6,
            ["Liệt kê ước của 18.", "Số nào trong đó cũng chia hết 48?", "Chọn số lớn nhất."],
            "Ước chung của 18 và 48: 1, 2, 3, 6. Lớn nhất là 6."),
          Q("1.4-03", "num", 1, "hcf", B, "Find the HCF of 12 and 30.", 6,
            ["Ước của 12 là gì?", "Ước nào của 12 cũng là ước của 30?", "Chọn số lớn nhất."],
            "Ước của 12: 1, 2, 3, 4, 6, 12. Chung với 30: 1, 2, 3, 6. ƯCLN = 6."),
          Q("1.4-04", "mc", 2, "hcf-misconception", B, "What is the highest common factor of 12 and 28?", 1,
            ["Liệt kê ước của 12 và ước của 28.", "Chọn các số có mặt trong cả hai danh sách.", "ƯCLN nhỏ hơn hay lớn hơn cả hai số?"],
            "Ước chung của 12 và 28: 1, 2, 4. ƯCLN = 4. Đáp án 84 là BCNN, nhiều bạn nhầm hai khái niệm; 2 là ước chung nhưng chưa lớn nhất.",
            { choices: ["2", "4", "84", "336"] }),
          Q("1.4-05", "num", 2, "hcf", B, "Find the HCF of 60 and 90.", 30,
            ["60 và 90 đều chia hết cho 10. Còn số nào lớn hơn?", "Thử 30: 60 ÷ 30 và 90 ÷ 30 có chia hết không?", "Có số nào lớn hơn 30 chia hết cho cả hai không?"],
            "60 = 30 × 2 và 90 = 30 × 3, và 2 với 3 không còn ước chung. ƯCLN = 30."),
          Q("1.4-06", "num", 2, "simplify-fraction", B, "Find the HCF of 35 and 56, then write 35/56 as simply as possible. Give the simplified fraction.", "5/8",
            ["Ước của 35 là gì? Số nào chia hết 56?", "Chia cả tử và mẫu cho ƯCLN vừa tìm.", "Viết phân số sau khi chia."],
            "ƯCLN(35, 56) = 7. 35 ÷ 7 = 5 và 56 ÷ 7 = 8, nên 35/56 = 5/8.", { howto: "The question has two steps, but enter only the final simplified fraction (not the HCF)." }),
          Q("1.4-07", "num", 2, "hcf-three", B, "Find the HCF of 54, 72 and 90.", 18,
            ["Tìm ƯCLN của 54 và 72 trước.", "Số đó có chia hết 90 không?", "Nếu có, đó là đáp án; nếu không thì thử ước của nó."],
            "ƯCLN(54, 72) = 18 và 90 = 18 × 5, nên ƯCLN của ba số là 18."),
          Q("1.4-08", "mc", 3, "reason-hcf", B, "Why can the fraction 25/36 not be simplified?", 0,
            ["Ước của 25 là gì? Ước của 36 là gì?", "Hai số có ước chung nào ngoài 1 không?", "Muốn rút gọn, cần chia cả hai cho số lớn hơn 1 nào đó."],
            "Ước của 25: 1, 5, 25; ước của 36 không có 5 hay 25, nên ƯCLN = 1. Khi ƯCLN bằng 1, không có số nào để chia cả tử và mẫu.",
            { choices: ["Because HCF(25, 36) = 1, so they share no factor greater than 1", "Because 25 and 36 are both even", "Because 25 is smaller than 36"] }),
          Q("1.4-09", "num", 3, "hcf-count", B, "Two numbers have HCF 4. One number is between 10 and 20 and the other is between 20 and 40. How many different pairs of numbers are possible?", 4,
            ["Số có ước 4 trong khoảng 10–20 là những số nào?", "Trong khoảng 20–40 có các bội của 4 nào?", "Với mỗi cặp, tính ƯCLN và giữ cặp nào bằng 4."],
            "Số thứ nhất: 12 hoặc 16. Số thứ hai: 24, 28, 32, 36. ƯCLN = 4 với (12, 28), (12, 32), (16, 28), (16, 36): có 4 cặp.", { howto: "Make pairs with one number between 10 and 20 and one number between 20 and 40 whose HCF is exactly 4. Enter how many such pairs there are." }),
          Q("1.4-10", "num", 3, "hcf-lcm-relation", B, "HCF(8, 12) = 4 and LCM(8, 12) = 24. Notice 4 × 24 = 8 × 12. Use this pattern: HCF(15, 20) = 5, so what is LCM(15, 20)?", 60,
            ["Tích hai số 15 × 20 bằng bao nhiêu?", "Theo quy luật: ƯCLN × BCNN = tích hai số.", "Vậy BCNN = tích ÷ ƯCLN."],
            "15 × 20 = 300 và ƯCLN × BCNN = 300, nên BCNN = 300 ÷ 5 = 60.")
        ]
      },
      {
        id: "1.5", title: "Tests for divisibility", titleVi: "Dấu hiệu chia hết",
        learn: [
          "Chia hết cho 2: chữ số cuối là 0, 2, 4, 6, 8. Chia hết cho 5: chữ số cuối là 0 hoặc 5. Chia hết cho 10: chữ số cuối là 0.",
          "Chia hết cho 3 (hoặc 9): tổng các chữ số chia hết cho 3 (hoặc 9).",
          "Chia hết cho 4: hai chữ số cuối chia hết cho 4. Chia hết cho 8: ba chữ số cuối chia hết cho 8.",
          "Chia hết cho 6: chia hết cho cả 2 và 3.",
          "Chia hết cho 11: hiệu giữa tổng các chữ số ở vị trí lẻ và tổng các chữ số ở vị trí chẵn bằng 0 hoặc là bội của 11.",
          "Chia hết cho 7: bỏ chữ số cuối, trừ 2 lần chữ số đó khỏi phần còn lại; nếu kết quả chia hết cho 7 thì số ban đầu cũng vậy."
        ],
        example: {
          q: "Số ∗7258 thiếu một chữ số. Tìm ∗ để số chia hết cho 11.",
          steps: ["Tổng chữ số vị trí (từ phải): 8 + 2 + ∗ = 10 + ∗ và 5 + 7 = 12.", "Hiệu bằng 0 khi 10 + ∗ = 12, tức ∗ = 2.", "27258 chia hết cho 11."],
          prompts: [
            "Dấu hiệu chia hết cho 11 dùng tổng chữ số ở vị trí lẻ và vị trí chẵn. Đếm từ phải sang trái, những chữ số nào ở vị trí lẻ, chữ số nào ở vị trí chẵn?",
            "Hai tổng đó phải liên hệ với nhau thế nào để số chia hết cho 11? Từ đó ∗ bằng bao nhiêu?",
            "Em thử chia số vừa điền cho 11 để kiểm tra nhé: có chia hết không?"
          ],
          answer: { type: "num", value: 2 },
          twist: { q: "Nếu số là ∗7259 thì ∗ bằng bao nhiêu để số chia hết cho 11?", answer: { type: "num", value: 1 } }
        },
        questions: [
          Q("1.5-01", "num", 1, "digit-sum", B, "Find the sum of the digits of 28 572.", 24,
            ["Liệt kê các chữ số: 2, 8, 5, 7, 2.", "Cộng lần lượt.", "Kiểm tra lại tổng."],
            "2 + 8 + 5 + 7 + 2 = 24."),
          Q("1.5-02", "mc", 2, "divisible-3-9", B, "The digit sum of 28 572 is 24. Which conclusion is correct?", 0,
            ["24 có chia hết cho 3 không? Có chia hết cho 9 không?", "Dấu hiệu chia hết cho 3 và cho 9 có giống nhau không?", "So sánh với các đáp án."],
            "24 là bội của 3 nhưng không phải bội của 9, nên số đó chia hết cho 3 mà không chia hết cho 9. Chia hết cho 3 không kéo theo chia hết cho 9.",
            { choices: ["Divisible by 3 but not by 9", "Divisible by 9 because it is divisible by 3", "Not divisible by 3"] }),
          Q("1.5-03", "num", 2, "missing-digit", B, "The number 5742* is divisible by 6. Find the sum of all possible values of the digit *.", 6,
            ["Chia hết cho 6 cần chia hết cho những số nào?", "Chữ số cuối * phải thế nào để chia hết cho 2?", "Tổng các chữ số 5 + 7 + 4 + 2 + * có cần chia hết cho 3 không? Thử các * chẵn."],
            "Cần chia hết cho 2 nên * ∈ {0, 2, 4, 6, 8}. Tổng 18 + * chia hết cho 3 khi * = 0 hoặc 6. Tổng các giá trị là 0 + 6 = 6.", { howto: "The * is one missing last digit. Find every digit that makes 5742* divisible by 6, then enter the sum of those digits." }),
          Q("1.5-04", "mc", 2, "divisible-8", B, "Is 25 764 divisible by 8?", 1,
            ["Dấu hiệu chia hết cho 8 xét mấy chữ số cuối?", "764 ÷ 8 bằng mấy, có dư không?", "25 764 chia hết cho 4 thì có kéo theo chia hết cho 8 không?"],
            "Ba chữ số cuối là 764, và 764 ÷ 8 = 95 dư 4 nên không chia hết cho 8. Dù 25 764 chia hết cho 2 và 4 thì vẫn có thể không chia hết cho 8.",
            { choices: ["Yes, because it is divisible by both 2 and 4", "No, because 764 is not divisible by 8", "Yes, because the last digit is even"] }),
          Q("1.5-05", "num", 2, "test-7", B, "Use the test for 7 on 2583: remove the last digit, then subtract twice that digit from what is left. What number do you get?", 252,
            ["Bỏ chữ số cuối 3 thì còn số nào?", "Hai lần chữ số vừa bỏ là bao nhiêu?", "Lấy phần còn lại trừ đi số đó."],
            "Bỏ 3 còn 258; 258 − 2 × 3 = 252. 252 = 7 × 36 nên 2583 chia hết cho 7.", { howto: "Do the step described just once and enter the new number you get. You do not need to say whether 2583 is divisible by 7." }),
          Q("1.5-06", "mc", 2, "divisible-11", B, "Is 161 084 divisible by 11?", 0,
            ["Tính tổng chữ số ở vị trí 1, 3, 5 (từ trái): 1 + 1 + 8.", "Tính tổng các chữ số ở vị trí 2, 4, 6: 6 + 0 + 4.", "Hiệu hai tổng đó có bằng 0 không?"],
            "Hai tổng là 10 và 10, hiệu bằng 0 nên 161 084 chia hết cho 11 (161 084 = 11 × 14 644).",
            { choices: ["Yes: the two digit sums are equal (difference 0)", "No: the digit sum is not a multiple of 11", "No: it ends in 4"] }),
          Q("1.5-07", "num", 3, "missing-digit-66", B, "The number ∗7258 is divisible by 66 (that is, by 6 and by 11). Find the missing digit ∗.", 2,
            ["66 = 6 × 11. Số cần chia hết cho những số nào?", "Dùng dấu hiệu 11: 8 + 2 + ∗ và 5 + 7 khác nhau bao nhiêu?", "Chọn ∗ để hiệu bằng 0, rồi kiểm tra chia hết cho 6."],
            "Dấu hiệu 11: 10 + ∗ − 12 = 0 ⇒ ∗ = 2. 27258 chẵn và tổng chữ số 24 chia hết cho 3 nên chia hết cho 6. Vậy ∗ = 2.", { howto: "∗ is the missing first digit of the five-digit number ∗7258. Enter just that digit." }),
          Q("1.5-08", "num", 3, "next-multiple", B, "Find the smallest integer greater than 2521 that is divisible by 6.", 2526,
            ["Số chia hết cho 6 phải chẵn. Thử các số chẵn lớn hơn 2521.", "Tính tổng chữ số của 2522, 2524, 2526.", "Số nào có tổng chia hết cho 3 đầu tiên?"],
            "2522 (tổng 11), 2524 (tổng 13) không chia hết cho 3; 2526 có tổng 15 chia hết cho 3. Vậy 2526."),
          Q("1.5-09", "num", 3, "next-multiple", B, "Find the smallest integer greater than 2521 that is divisible by 11.", 2530,
            ["2521 ÷ 11 gần bằng bao nhiêu?", "Thử nhân 11 với 229 và 230.", "Số nào lớn hơn 2521?"],
            "11 × 229 = 2519 < 2521, còn 11 × 230 = 2530 > 2521. Vậy 2530."),
          Q("1.5-10", "mc", 3, "divisibility-reasoning", B, "A student says: \"A number is divisible by 8 when it is divisible by 2 and by 4.\" Is this correct?", 1,
            ["Số 12 có chia hết cho 2 và 4 không?", "12 có chia hết cho 8 không?", "Một ví dụ mâu thuẫn đủ để bác bỏ một phát biểu \"luôn đúng\" chưa?"],
            "12 chia hết cho 2 và 4 nhưng không chia hết cho 8, vậy phát biểu sai. (Phát biểu với 6 = 2 × 3 thì đúng vì 2 và 3 không có ước chung.)",
            { choices: ["Yes, it is always correct", "No: 12 is divisible by 2 and 4 but not by 8", "No: 16 is divisible by 2 and 4 but not by 8"] })
        ]
      },
      {
        id: "1.6", title: "Square roots and cube roots", titleVi: "Căn bậc hai và căn bậc ba",
        learn: [
          "Số chính phương: 1, 4, 9, 16, 25, … (n²). Đọc 5² là \"5 bình phương\".",
          "Căn bậc hai là phép ngược của bình phương: 4² = 16 nên √16 = 4.",
          "Số lập phương: 1, 8, 27, 64, 125, … (n³). Căn bậc ba: 2³ = 8 nên ∛8 = 2.",
          "Muốn ước lượng √79: 8² = 64 và 9² = 81 nên √79 nằm giữa 8 và 9, gần 9 hơn.",
          "Số chính phương luôn có số ước lẻ (ví dụ 36 có 9 ước)."
        ],
        example: {
          q: "Tính √64 ÷ ∛64.",
          steps: ["8² = 64 nên √64 = 8.", "4³ = 64 nên ∛64 = 4.", "8 ÷ 4 = 2."],
          prompts: [
            "Số nào nhân với chính nó thì ra 64?",
            "Còn số nào nhân với chính nó ba lần (lập phương) thì ra 64?",
            "Có hai kết quả rồi, đề bài bảo em làm phép tính nào giữa chúng?"
          ],
          answer: { type: "num", value: 2 },
          twist: { q: "Nếu đổi thành √144 ÷ ∛27 thì kết quả là bao nhiêu?", answer: { type: "num", value: 4 } }
        },
        questions: [
          Q("1.6-01", "num", 1, "squares", B, "Work out 15².", 225,
            ["15² nghĩa là 15 × 15.", "15 × 10 = 150, 15 × 5 = ?", "Cộng hai kết quả."],
            "15 × 15 = 150 + 75 = 225."),
          Q("1.6-02", "num", 1, "square-root", B, "Find √121.", 11,
            ["Số nào nhân với chính nó bằng 121?", "Thử 10 × 10 và 11 × 11.", "Chọn số đúng."],
            "11 × 11 = 121 nên √121 = 11."),
          Q("1.6-03", "num", 1, "cubes", B, "Work out 4³.", 64,
            ["4³ = 4 × 4 × 4.", "4 × 4 = ?", "Nhân tiếp với 4."],
            "4 × 4 = 16 và 16 × 4 = 64."),
          Q("1.6-04", "mc", 1, "root-misconception", B, "What is √16?", 1,
            ["Số nào nhân với chính nó bằng 16?", "Có phải một nửa của 16 không? Thử 8 × 8.", "Thử 4 × 4."],
            "4 × 4 = 16 nên √16 = 4. Đáp án 8 là nhầm căn bậc hai với \"chia đôi\".",
            { choices: ["8", "4", "256", "2"] }),
          Q("1.6-05", "num", 2, "roots-mixed", B, "Work out √144 − ∛27.", 9,
            ["√144 bằng mấy? (12 × 12)", "∛27 bằng mấy? (3 × 3 × 3)", "Trừ hai kết quả."],
            "√144 = 12 và ∛27 = 3 nên 12 − 3 = 9."),
          Q("1.6-06", "num", 2, "estimate-root", B, "Which integer is closest to √66?", 8,
            ["8² và 9² bằng bao nhiêu?", "66 nằm giữa hai số chính phương nào?", "66 gần 64 hơn hay gần 81 hơn?"],
            "8² = 64 và 9² = 81; 66 gần 64 hơn nên số nguyên gần √66 nhất là 8."),
          Q("1.6-07", "num", 2, "estimate-root", B, "√180 is between two consecutive integers. What is the smaller of the two?", 13,
            ["Thử 13² và 14².", "180 có nằm giữa hai kết quả đó không?", "Thử 14² và 15² nếu cần."],
            "13² = 169 và 14² = 196, 169 < 180 < 196 nên √180 nằm giữa 13 và 14. Số nhỏ hơn là 13."),
          Q("1.6-08", "num", 2, "estimate-cube-root", B, "∛90 is between two consecutive integers. What is the smaller of the two?", 4,
            ["Tính 4³ và 5³.", "90 nằm giữa hai kết quả nào?", "Chọn số nhỏ hơn trong hai cơ số."],
            "4³ = 64 và 5³ = 125; 64 < 90 < 125 nên ∛90 nằm giữa 4 và 5."),
          Q("1.6-09", "num", 3, "square-factors", B, "How many whole numbers from 1 to 50 have exactly 3 factors?", 4,
            ["36 có 9 ước. Số chính phương có số ước lẻ — số 4 có bao nhiêu ước?", "Số có đúng 3 ước phải có dạng bình phương của số nào?", "Liệt kê bình phương của số nguyên tố không vượt quá 50."],
            "Số có đúng 3 ước là bình phương của một số nguyên tố: 2² = 4, 3² = 9, 5² = 25, 7² = 49. Có 4 số."),
          Q("1.6-10", "num", 3, "odd-sums", B, "Add the first seven odd numbers (1 + 3 + 5 + ...) and then take the square root of your answer. What do you get?", 7,
            ["Tính tổng 3 số lẻ đầu: 1 + 3 + 5, rồi lấy căn.", "Tính tổng 4 số lẻ đầu và lấy căn. Em nhận ra quy luật gì?", "Áp dụng quy luật cho 7 số lẻ."],
            "Tổng n số lẻ đầu tiên bằng n²: 1+3+5 = 9, 1+3+5+7 = 16... Với 7 số: 49 và √49 = 7.")
        ]
      }
    ],
    challenge: {
      title: "Thử thách Việt Nam",
      intro: "Cổng cuối của Đảo Băng Lửa hiện ra: những bài toán chia hết, ƯCLN – BCNN và tính nhanh kiểu Việt Nam đang chờ em!",
      questions: [
        Q("ch-01", "num", 3, "lcm-word", V, "Hai ngọn hải đăng cùng bật sáng lúc 20 giờ. Ngọn thứ nhất cứ 12 giây sáng một lần, ngọn thứ hai cứ 18 giây sáng một lần. Sau bao nhiêu giây thì hai ngọn lại cùng sáng lần đầu tiên?", 36,
          ["Thời điểm cùng sáng phải là bội của số nào và số nào?", "Cần lần đầu tiên, tức là bội thế nào?", "Tìm BCNN(12, 18)."],
          "Thời điểm cùng sáng là bội chung của 12 và 18; lần đầu là BCNN(12, 18) = 36 giây.", { unitLabel: "giây" }),
        Q("ch-02", "num", 3, "hcf-word", V, "Cô giáo có 48 cái bút và 72 quyển vở. Cô muốn chia thành các phần quà giống hệt nhau (mỗi phần có cùng số bút và cùng số vở), không thừa cái nào. Hỏi chia được nhiều nhất bao nhiêu phần quà?", 24,
          ["Số phần quà phải là ước của số nào và số nào?", "Muốn nhiều phần nhất thì chọn ước nào?", "Tính ƯCLN(48, 72)."],
          "Số phần là ước chung của 48 và 72; nhiều nhất là ƯCLN(48, 72) = 24 phần (mỗi phần 2 bút và 3 vở).", { unitLabel: "phần" }),
        Q("ch-03", "num", 3, "lcm-remainder", V, "Tìm số tự nhiên nhỏ nhất lớn hơn 1 mà khi chia cho 4, cho 5 và cho 6 đều dư 1.", 61,
          ["Nếu trừ số đó đi 1 thì số mới chia hết cho những số nào?", "Số mới nhỏ nhất (khác 0) là bao nhiêu? (BCNN)", "Cộng lại 1."],
          "Số trừ đi 1 chia hết cho 4, 5, 6 nên là bội của BCNN(4, 5, 6) = 60. Số nhỏ nhất lớn hơn 1 là 60 + 1 = 61."),
        Q("ch-04", "num", 3, "hidden-digit", V, "Cho số 3a4b (a, b là chữ số, b ≠ 0) chia hết cho cả 5 và 9. Tính a + b.", 11,
          ["Chia hết cho 5 và b ≠ 0 thì b bằng mấy?", "Tổng chữ số 3 + a + 4 + b phải chia hết cho 9.", "Tìm a, rồi cộng a + b."],
          "b = 5. Tổng chữ số: 12 + a chia hết cho 9 ⇒ a = 6. Số 3645 = 45 × 81. a + b = 11.", { howto: "3a4b là một số có bốn chữ số: a là chữ số hàng trăm, b là chữ số hàng đơn vị. Tìm a và b, rồi chỉ nhập tổng a + b." }),
        Q("ch-05", "num", 3, "quick-sum", V, "Tính nhanh: 1 − 2 + 3 − 4 + … + 99 − 100.", -50,
          ["Nhóm từng cặp liên tiếp: (1 − 2), (3 − 4), …", "Mỗi cặp bằng bao nhiêu?", "Có bao nhiêu cặp?"],
          "Mỗi cặp (2k−1) − 2k = −1. Có 50 cặp nên tổng = −50."),
        Q("ch-06", "num", 3, "quick-sum", V, "Tính tổng tất cả các số nguyên từ −20 đến 21.", 21,
          ["Hai số đối nhau cộng lại bằng mấy?", "Những số nào có thể ghép cặp đối nhau?", "Số nào còn lại không có cặp?"],
          "Các số −20, …, 20 ghép thành cặp đối nhau, tổng bằng 0. Còn lại số 21, nên tổng là 21."),
        Q("ch-07", "num", 3, "temperature-word", V, "Lúc sáng sớm Sa Pa là −3°C. Đến trưa nhiệt độ tăng 11°C, buổi chiều giảm 9°C, ban đêm giảm thêm 4°C nữa. Hỏi nhiệt độ ban đêm là bao nhiêu độ C?", -5,
          ["Viết phép tính: −3, cộng 11, trừ 9, trừ 4.", "Tính từng bước: −3 + 11 = ?", "Tiếp tục trừ 9 rồi trừ 4."],
          "−3 + 11 = 8; 8 − 9 = −1; −1 − 4 = −5. Nhiệt độ ban đêm là −5°C.", { unitLabel: "°C" }),
        Q("ch-08", "mc", 3, "consecutive-sum", V, "Tổng của ba số tự nhiên liên tiếp bất kì luôn chia hết cho số nào dưới đây?", 1,
          ["Thử với 1, 2, 3 rồi 4, 5, 6: tính tổng.", "Gọi số ở giữa là n: viết ba số và cộng lại.", "Kết quả có dạng gì theo n?"],
          "Ba số n − 1, n, n + 1 có tổng 3n nên luôn chia hết cho 3. Không phải luôn chia hết cho 2, 6 hay 9: ví dụ 2 + 3 + 4 = 9 (lẻ, không chia hết cho 2 và 6) và 3 + 4 + 5 = 12 (không chia hết cho 9).",
          { choices: ["2", "3", "6", "9"] }),
        Q("ch-09", "num", 3, "lcm-range", V, "Một lớp xếp hàng 4, hàng 6 hay hàng 9 đều vừa đủ, không thừa ai. Biết số học sinh trong khoảng từ 100 đến 130. Hỏi lớp có bao nhiêu học sinh?", 108,
          ["Số học sinh là bội chung của 4, 6, 9. BCNN là bao nhiêu?", "Liệt kê các bội của BCNN đó.", "Chọn bội nằm trong khoảng 100 đến 130."],
          "BCNN(4, 6, 9) = 36. Bội của 36: 36, 72, 108, 144. Chỉ 108 nằm trong khoảng 100–130.", { unitLabel: "học sinh" }),
        Q("ch-10", "num", 3, "perfect-square", V, "Tìm số tự nhiên n nhỏ nhất để 12 × n là một số chính phương.", 3,
          ["Phân tích 12 = 4 × 3. Số 4 đã là số chính phương chưa?", "Để 4 × 3 × n là số chính phương thì n phải \"bù\" thừa số nào?", "Thử n = 3: 12 × 3 = ?"],
          "12 × 3 = 36 = 6². Thử n = 1, 2: 12 và 24 không phải số chính phương. Vậy n = 3.")
      ]
    },
    project: {
      title: "Mixed-up properties",
      titleVi: "Tính chất xáo trộn",
      pages: [31],
      goal: "Xếp 9 thẻ tính chất (như \"ƯCLN bằng 1\", \"tổng là số chính phương\", \"cả hai đều là số nguyên tố\"…) và 6 thẻ số (2, 3, 4, 5, 6, 7) vào bảng 3 × 3 sao cho mỗi thẻ mô tả đúng cặp số ở đầu cột và đầu hàng.",
      steps: [
        "Chọn các hàng 2, 3, 6 và các cột 4, 5, 7. Với mỗi ô, viết ra cặp số tương ứng (ví dụ ô hàng 2, cột 5 là cặp 2 và 5).",
        "Với mỗi cặp, tính tổng, hiệu, tích, ƯCLN và BCNN, và ghi chúng vào một bảng nháp.",
        "Kiểm tra từng thẻ tính chất xem nó đúng với những cặp nào. Thẻ nào chỉ khớp với 1–2 cặp thì đặt trước.",
        "Dùng phương pháp loại trừ để đặt dần các thẻ còn lại vào bảng.",
        "Tìm xem còn cách xếp khác không. Đếm xem bao nhiêu cách."
      ],
      extensions: [
        "Thay bộ số 2, 3, 4, 5, 6, 7 bằng một bộ số khác mà vẫn xếp được bảng. Em cần thay đổi gì?",
        "Tự thiết kế 3 thẻ tính chất mới (ví dụ \"Tổng là số lẻ\") và thêm vào trò chơi.",
        "Tạo một bảng 4 × 4 và thử thách bạn của em xếp các thẻ."
      ],
      reflect: [
        "Thẻ nào dễ đặt nhất, thẻ nào khó nhất? Vì sao?",
        "Em đã dùng chiến lược nào (liệt kê, loại trừ, thử và sai)? Chiến lược nào nhanh nhất?",
        "Có thể có nhiều đáp án khác nhau không? Em kiểm tra bằng cách nào?"
      ]
    }
  });
  // 🎲 Number variants for spaced review (js/variants.js): family that re-asks each question with fresh numbers.
  const GEN = {
    "1.1-01": "int-addsub", "1.1-02": "int-addsub", "1.1-03": "int-addsub", "1.1-04": "int-addsub", "1.1-06": "int-addsub",
    "1.1-05": "int-other", "1.1-07": "estimate-add", "1.1-08": "int-add3",
    "1.2-01": "int-mul", "1.2-05": "int-mul", "1.2-02": "int-div", "1.2-03": "int-div", "1.2-04": "int-missing",
    "1.2-06": "int-brackets", "1.2-07": "int-brackets", "1.2-08": "estimate-mul",
    "1.3-01": "lcm2", "1.3-02": "lcm2", "1.3-03": "lcm2", "1.3-04": "lcm2", "1.3-05": "lcm3", "1.3-06": "lcm3",
    "1.4-01": "factor-count", "1.4-02": "hcf2", "1.4-03": "hcf2", "1.4-04": "hcf2", "1.4-05": "hcf2", "1.4-07": "hcf3",
    "1.5-01": "digit-sum", "1.5-08": ["next-multiple", { d: 6 }], "1.5-09": ["next-multiple", { d: 11 }],
    "1.6-01": "square", "1.6-02": "sqrt", "1.6-03": "cube", "1.6-05": "roots-mixed",
    "1.6-06": "sqrt-closest", "1.6-07": "sqrt-between", "1.6-08": "cbrt-between"
  };
  const unit1 = window.GAME_DATA.units.filter(function (u) { return u.id === 1; }).pop();
  unit1.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
})();
