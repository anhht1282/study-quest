// Math Quest 8 — Unit 3: Place value and rounding (book pp. 66-79)
window.GAME_DATA = window.GAME_DATA || { units: [] };
window.GAME_DATA.units.push({
  id: 3,
  title: "Place value and rounding",
  titleVi: "Giá trị theo vị trí và làm tròn",
  strand: "Number",
  pages: [66, 79],
  realm: "Làng Dịch Chuyển Dấu Phẩy",
  emoji: "🔟",
  story: "Ở Làng Dịch Chuyển Dấu Phẩy, dân làng buôn bán bằng những con số khổng lồ và bé xíu: hàng triệu hạt gạo, từng giọt nước hiếm hoi. Nếu dấu phẩy nhảy sai một bước, giá cả sẽ sai gấp mười lần! Em hãy học cách dịch chuyển dấu phẩy và làm tròn thật khéo để giúp làng tính toán đúng.",
  glossary: [
    { en: "decimal number", vi: "số thập phân", def: "Số có phần nguyên và phần thập phân ngăn cách bởi dấu phẩy, ví dụ 3,75." },
    { en: "equivalent calculation", vi: "phép tính tương đương", def: "Phép tính khác nhưng cho cùng kết quả, thường dễ làm hơn." },
    { en: "inverse operation", vi: "phép tính ngược", def: "Phép tính hoàn tác phép tính trước, như nhân và chia; dùng để kiểm tra kết quả." },
    { en: "decimal places (d.p.)", vi: "chữ số thập phân", def: "Số chữ số đứng sau dấu phẩy của một số." },
    { en: "significant figures (s.f.)", vi: "chữ số có nghĩa", def: "Tính từ chữ số khác 0 đầu tiên của số, đi từ trái sang phải." },
    { en: "round", vi: "làm tròn", def: "Thay một số bằng số gần nó, ít chữ số hơn, theo mức độ chính xác cho trước." },
    { en: "degree of accuracy", vi: "mức độ chính xác", def: "Số chữ số có nghĩa hoặc chữ số thập phân em phải giữ lại khi làm tròn." },
    { en: "estimate", vi: "ước lượng", def: "Tính nhanh bằng cách làm tròn số để biết kết quả đại khái." }
  ],
  sections: [
    {
      id: "3.1",
      title: "Multiplying and dividing by 0.1 and 0.01",
      titleVi: "Nhân và chia cho 0,1 và 0,01",
      learn: [
        "0,1 = 1/10 nên nhân với 0,1 giống chia cho 10: 8 × 0,1 = 8 ÷ 10 = 0,8.",
        "0,01 = 1/100 nên nhân với 0,01 giống chia cho 100: 8 × 0,01 = 0,08.",
        "Chia cho 0,1 giống nhân với 10: 8 ÷ 0,1 = 80. Chia cho 0,01 giống nhân với 100: 8 ÷ 0,01 = 800.",
        "Mẹo kiểm tra: dùng phép tính ngược. Nếu 2,3 × 10 = 23 thì 23 × 0,1 = 2,3 là đúng.",
        "Phép tính tương đương: 3,2 ÷ 0,1 = (3,2 × 10) ÷ (0,1 × 10) = 32 ÷ 1 = 32."
      ],
      example: {
        q: "Tính 4.156 ÷ 0.01.",
        steps: [
          "Chia cho 0,01 giống như nhân với 100.",
          "4,156 × 100 = 415,6 (dịch dấu phẩy sang phải 2 bước)",
          "Kiểm tra bằng phép tính ngược: 415,6 × 0,01 = 4,156 ✓"
        ],
        prompts: ["0,01 là một phần mấy của 1? Chia cho một phần trăm nghĩa là trong số đó có bao nhiêu 'phần trăm'?","Nhân với 100 thì dấu phẩy của 4,156 dịch về phía nào, mấy bước?","Làm cách nào để tự kiểm tra bằng phép tính ngược?"],
        answer: {"type":"num","value":415.6},
        twist: {"q":"Nếu chia 4,156 cho 0,001 thì kết quả là bao nhiêu?","answer":{"type":"num","value":4156}}
      },
      questions: [
        {
          id: "3.1-01", type: "num", diff: 1, skill: "mul-0.1", source: "book", lang: "en",
          q: "Work out 45 × 0.1.", svg: null, choices: null, answer: 4.5, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân với 0,1 giống như chia cho số nào?", "Hãy tính 45 ÷ 10.", "Dấu phẩy của 45 dịch sang trái mấy bước?"],
          explain: "Nhân với 0,1 giống chia cho 10. Vậy 45 × 0,1 = 45 ÷ 10 = 4,5.", why: null
        },
        {
          id: "3.1-02", type: "num", diff: 1, skill: "mul-0.01", source: "book", lang: "en",
          q: "Work out 3.7 × 0.01.", svg: null, choices: null, answer: 0.037, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân với 0,01 giống chia cho 10 hay 100?", "Em cần dịch dấu phẩy sang trái bao nhiêu bước?", "3,7 chia 100: thêm số 0 để đủ chỗ cho dấu phẩy."],
          explain: "Nhân với 0,01 giống chia cho 100. 3,7 ÷ 100 = 0,037.", why: null
        },
        {
          id: "3.1-03", type: "num", diff: 1, skill: "div-0.1", source: "book", lang: "en",
          q: "Work out 8 ÷ 0.1.", svg: null, choices: null, answer: 80, accept: [], tol: 0, unitLabel: "",
          hints: ["Trong 8 đơn vị có bao nhiêu phần mười (0,1)?", "Một đơn vị chứa 10 phần mười. Vậy 8 đơn vị chứa bao nhiêu?", "Chia cho 0,1 giống nhân với số nào?"],
          explain: "Chia cho 0,1 giống nhân với 10. Vậy 8 ÷ 0,1 = 8 × 10 = 80.", why: null
        },
        {
          id: "3.1-04", type: "num", diff: 1, skill: "div-0.01", source: "book", lang: "en",
          q: "Work out 0.65 ÷ 0.01.", svg: null, choices: null, answer: 65, accept: [], tol: 0, unitLabel: "",
          hints: ["Chia cho 0,01 giống nhân với 10 hay 100?", "Dịch dấu phẩy của 0,65 sang phải mấy bước?", "0,65 × 100 bằng bao nhiêu?"],
          explain: "Chia cho 0,01 giống nhân với 100. 0,65 × 100 = 65.", why: null
        },
        {
          id: "3.1-05", type: "num", diff: 2, skill: "mul-0.01", source: "book", lang: "en",
          q: "Work out 520 × 0.01.", svg: null, choices: null, answer: 5.2, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân với 0,01 là chia cho bao nhiêu?", "520 ÷ 100: đếm xem dấu phẩy dịch mấy bước.", "Số 0 cuối cùng trong 5,20 có cần viết không?"],
          explain: "520 × 0,01 = 520 ÷ 100 = 5,2 (có thể viết 5,20 nhưng số 0 cuối bỏ được).", why: null
        },
        {
          id: "3.1-06", type: "mc", diff: 2, skill: "div-0.1", source: "book", lang: "en",
          q: "Work out 6 ÷ 0.1. Which answer is correct?", svg: null,
          choices: ["0.6", "60", "600", "0.06"], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["Chia cho một số nhỏ hơn 1 thì kết quả lớn lên hay nhỏ đi?", "Trong 6 có bao nhiêu phần mười?", "Chia cho 0,1 cùng nghĩa với nhân với 10."],
          explain: "6 ÷ 0,1 = 6 × 10 = 60. Lỗi hay gặp: chọn 0,6 vì tưởng chia cho 0,1 làm số nhỏ đi. Thực ra chia cho số bé hơn 1 làm số lớn lên.", why: null
        },
        {
          id: "3.1-07", type: "num", diff: 2, skill: "formula-0.1", source: "book", lang: "en",
          q: "A jeweller uses the formula C = 0.1G to find the mass of copper in green gold, where G is the mass of green gold. Find the mass of copper in 125 g of green gold.",
          svg: null, choices: null, answer: 12.5, accept: [], tol: 0, unitLabel: "g",
          hints: ["0,1G nghĩa là 0,1 × G. Em thay G bằng số nào?", "Em cần tính 0,1 × 125.", "Nhân với 0,1 giống chia cho 10."],
          explain: "C = 0,1 × 125 = 125 ÷ 10 = 12,5 g.", why: null
        },
        {
          id: "3.1-08", type: "num", diff: 3, skill: "chain-0.1-0.01", source: "book", lang: "en",
          q: "Razi thinks of a number. He multiplies it by 0.1, divides the answer by 0.01, and then divides that answer by 0.1. His final answer is 12 500. What number did he think of?",
          svg: null, choices: null, answer: 125, accept: [], tol: 0, unitLabel: "",
          hints: ["Mỗi bước tương đương nhân hoặc chia cho 10 hay 100. Em viết lại từng bước đó.", "Nhân 0,1 là ÷10; chia 0,01 là ×100; chia 0,1 là ×10. Gộp lại, số ban đầu bị nhân với mấy?", "Muốn quay ngược về số ban đầu, em làm phép tính ngược với 12 500."],
          explain: "÷10, rồi ×100, rồi ×10: tổng cộng nhân với 100. Vậy số ban đầu = 12 500 ÷ 100 = 125. Kiểm tra: 125×0,1 = 12,5; 12,5÷0,01 = 1250; 1250÷0,1 = 12 500 ✓.", why: null
        },
        {
          id: "3.1-09", type: "multi", diff: 3, skill: "equivalent-calc", source: "book", lang: "en",
          q: "Which of these calculations have the same value as 24 ÷ 0.1? Choose all that apply.", svg: null,
          choices: ["24 × 10", "2400 × 0.1", "2.4 ÷ 0.01", "240 × 0.01", "24 ÷ 0.01"], answer: [0, 1, 2], accept: [], tol: 0, unitLabel: "",
          hints: ["Trước hết tính 24 ÷ 0,1 bằng bao nhiêu?", "Tính giá trị từng phép tính rồi so với kết quả đó.", "Nhớ: ×0,01 là ÷100; ÷0,01 là ×100."],
          explain: "24 ÷ 0,1 = 240. 24×10 = 240 ✓; 2400×0,1 = 240 ✓; 2,4÷0,01 = 240 ✓; 240×0,01 = 2,4 ✗; 24÷0,01 = 2400 ✗.", why: null
        },
        {
          id: "3.1-10", type: "mc", diff: 3, skill: "counterexample", source: "book", lang: "en",
          q: "Harsha says: ‘When you multiply a number by 0.01 you always get a smaller number.’ Which calculation shows she is NOT correct?", svg: null,
          choices: ["300 × 0.01 = 3", "−500 × 0.01 = −5", "0.4 × 0.01 = 0.004", "10 × 0.01 = 0.1"], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["Để bác bỏ một khẳng định, em cần một ví dụ mà kết quả KHÔNG nhỏ hơn số ban đầu.", "Hãy so sánh kết quả với số ban đầu trong từng phép tính.", "Số âm có gì đặc biệt khi so sánh? −5 và −500, số nào lớn hơn?"],
          explain: "−500 × 0,01 = −5 và −5 > −500, nên kết quả LỚN hơn số ban đầu. Ba ví dụ còn lại đều cho kết quả nhỏ hơn nên không bác bỏ được khẳng định.", why: null
        }
      ]
    },
    {
      id: "3.2",
      title: "Rounding",
      titleVi: "Làm tròn số",
      learn: [
        "Chữ số có nghĩa đầu tiên là chữ số khác 0 đầu tiên (từ trái sang). Trong 0,00806 thì 8 là chữ số có nghĩa thứ nhất, 0 là thứ hai, 6 là thứ ba.",
        "Để làm tròn đến n chữ số có nghĩa: tìm chữ số thứ n, nhìn chữ số ngay bên phải nó. Nếu ≥ 5 thì tăng chữ số thứ n thêm 1, nếu < 5 thì giữ nguyên.",
        "Với số lớn, phải thay các chữ số bị bỏ bằng số 0 để giữ đúng giá trị: 4286 ≈ 4000 (1 s.f.), không phải 4.",
        "Với số nhỏ, giữ các số 0 ở đầu: 0,08069 ≈ 0,0807 (3 s.f.). Số 0 đứng đầu không phải chữ số có nghĩa.",
        "Ước lượng: làm tròn mỗi số đến 1 chữ số có nghĩa rồi tính, sau đó so với kết quả chính xác để kiểm tra."
      ],
      example: {
        q: "Làm tròn 0.7963 đến 2 chữ số có nghĩa.",
        steps: [
          "Chữ số có nghĩa thứ nhất là 7, thứ hai là 9.",
          "Chữ số bên phải số 9 là 6, lớn hơn hoặc bằng 5 nên làm tròn lên: 79 thành 80.",
          "Kết quả 0,80 (giữ số 0 để cho thấy đã làm tròn đến 2 s.f.)."
        ],
        prompts: ["Chữ số có nghĩa bắt đầu đếm từ đâu? Các số 0 đứng đầu 0,7963 có tính không?","Giữ 2 chữ số có nghĩa rồi, em nhìn chữ số kế tiếp để quyết định điều gì?","Em nên viết 0,8 hay 0,80? Hai cách viết này mang thông tin khác nhau ở chỗ nào?"],
        answer: {"type":"num","value":0.8},
        twist: {"q":"Nếu làm tròn 0,7963 đến 3 chữ số có nghĩa thì được bao nhiêu?","answer":{"type":"num","value":0.796}}
      },
      questions: [
        {
          id: "3.2-01", type: "num", diff: 1, skill: "round-sf", source: "book", lang: "en",
          q: "Round 352 to 1 significant figure.", svg: null, choices: null, answer: 400, accept: [], tol: 0, unitLabel: "",
          hints: ["Chữ số có nghĩa thứ nhất của 352 là số nào?", "Chữ số ngay bên phải nó là gì, nhỏ hơn hay lớn hơn 5?", "Sau khi làm tròn, các chữ số còn lại phải thay bằng gì?"],
          explain: "Chữ số đầu là 3, chữ số bên phải là 5 nên làm tròn lên thành 4, các chữ số còn lại thành 0: 352 ≈ 400.", why: null
        },
        {
          id: "3.2-02", type: "num", diff: 1, skill: "round-sf", source: "book", lang: "en",
          q: "Round 0.0087 to 1 significant figure.", svg: null, choices: null, answer: 0.009, accept: [], tol: 0.00005, unitLabel: "",
          hints: ["Các số 0 ở đầu có phải chữ số có nghĩa không?", "Chữ số có nghĩa đầu tiên là 8. Chữ số bên phải nó là gì?", "7 ≥ 5, vậy 8 trở thành số nào?"],
          explain: "Chữ số có nghĩa đầu tiên là 8; chữ số bên phải là 7 (≥ 5) nên 8 thành 9. Vậy 0,0087 ≈ 0,009.", why: null
        },
        {
          id: "3.2-03", type: "num", diff: 2, skill: "round-sf", source: "book", lang: "en",
          q: "Round 0.08069 to 3 significant figures.", svg: null, choices: null, answer: 0.0807, accept: [], tol: 0.000005, unitLabel: "",
          hints: ["Tìm chữ số có nghĩa thứ nhất, thứ hai, thứ ba của 0,08069.", "Chữ số thứ ba là 6. Chữ số bên phải nó là gì?", "9 ≥ 5, vậy 6 thành số nào? Đừng quên số 0 ở đầu."],
          explain: "Ba chữ số có nghĩa đầu là 8, 0, 6. Chữ số bên phải là 9 nên 6 thành 7: 0,0807.", why: null
        },
        {
          id: "3.2-04", type: "num", diff: 2, skill: "estimate", source: "book", lang: "en",
          q: "Estimate the value of (0.238 × 576) ÷ 39.76 by rounding each number to 1 significant figure.", svg: null, choices: null, answer: 3, accept: [], tol: 0, unitLabel: "",
          hints: ["Làm tròn 0,238; 576 và 39,76 đến 1 chữ số có nghĩa: ra các số nào?", "Em được (0,2 × 600) ÷ 40. Tính tử số trước.", "120 ÷ 40 bằng bao nhiêu?"],
          explain: "0,238 ≈ 0,2; 576 ≈ 600; 39,76 ≈ 40. (0,2 × 600) ÷ 40 = 120 ÷ 40 = 3. Giá trị chính xác là 3,45 nên ước lượng khá gần.", why: null
        },
        {
          id: "3.2-05", type: "mc", diff: 2, skill: "round-large", source: "book", lang: "en",
          q: "Harry rounds 45 150 to 2 significant figures and writes 45. What is the correct answer?", svg: null,
          choices: ["45", "4500", "45 000", "46 000"], answer: 2, accept: [], tol: 0, unitLabel: "",
          hints: ["Hai chữ số có nghĩa đầu của 45 150 là gì?", "Chữ số tiếp theo là 1. Làm tròn lên hay giữ nguyên?", "Số 45 có cùng độ lớn với 45 150 không? Em cần làm gì để giữ giá trị?"],
          explain: "2 s.f. là 45, chữ số kế là 1 nên giữ nguyên. Nhưng phải thêm số 0 để giữ đúng giá trị: 45 000. Lỗi của Harry là bỏ quên các số 0.", why: null
        },
        {
          id: "3.2-06", type: "mc", diff: 2, skill: "round-small", source: "book", lang: "en",
          q: "Harry rounds 0.03284 to 2 significant figures and writes 0.03. What is the correct answer?", svg: null,
          choices: ["0.03", "0.033", "0.0328", "0.32"], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["Số 0 ở ngay sau dấu phẩy có phải chữ số có nghĩa không?", "Hai chữ số có nghĩa đầu của 0,03284 là các số nào?", "Chữ số bên phải số 2 là 8. Làm tròn lên hay giữ nguyên?"],
          explain: "Hai chữ số có nghĩa đầu là 3 và 2 (các số 0 ở đầu không tính). 8 ≥ 5 nên 2 thành 3: 0,033. Lỗi của Harry: coi số 0 đầu là chữ số có nghĩa.", why: null
        },
        {
          id: "3.2-07", type: "num", diff: 2, skill: "round-sf", source: "book", lang: "en",
          q: "Round 209.095046 to 4 significant figures.", svg: null, choices: null, answer: 209.1, accept: [], tol: 0.005, unitLabel: "",
          hints: ["Đếm bốn chữ số có nghĩa: 2, 0, 9, và chữ số nào nữa?", "Chữ số thứ tư là 0, chữ số bên phải nó là 9.", "9 ≥ 5 nên chữ số 0 tăng thêm 1."],
          explain: "Bốn chữ số có nghĩa đầu là 2, 0, 9, 0; chữ số tiếp theo là 9 nên làm tròn lên: 209,1.", why: null
        },
        {
          id: "3.2-08", type: "num", diff: 3, skill: "round-context", source: "book", lang: "en",
          q: "At a football match there were 63 475 supporters of one team and 32 486 of the other team. How many supporters were there altogether? Give your answer correct to 2 significant figures.",
          svg: null, choices: null, answer: 96000, accept: [], tol: 0, unitLabel: "",
          hints: ["Trước hết tính tổng chính xác 63 475 + 32 486.", "Tổng là một số có 5 chữ số. Hai chữ số có nghĩa đầu là gì?", "Chữ số thứ ba có làm tròn lên không? Đừng quên thêm các số 0."],
          explain: "63 475 + 32 486 = 95 961. Hai chữ số có nghĩa đầu là 9 và 5, chữ số kế là 9 nên 95 thành 96: 96 000.", why: null
        },
        {
          id: "3.2-09", type: "num", diff: 3, skill: "round-context", source: "book", lang: "en",
          q: "A bag of peanuts has mass 150 g and contains 335 peanuts. Work out the mean mass of one peanut, correct to 1 significant figure.",
          svg: null, choices: null, answer: 0.4, accept: [], tol: 0.001, unitLabel: "g",
          hints: ["Khối lượng trung bình của một hạt là phép chia nào?", "Tính 150 ÷ 335 bằng máy tính hoặc ước lượng.", "Kết quả khoảng 0,4477... Làm tròn đến 1 chữ số có nghĩa."],
          explain: "150 ÷ 335 = 0,44776... Chữ số có nghĩa đầu là 4, chữ số kế là 4 (< 5) nên giữ nguyên: 0,4 g.", why: null
        },
        {
          id: "3.2-10", type: "mc", diff: 3, skill: "sensible-accuracy", source: "book", lang: "en",
          q: "The sides of a rectangle are 9.6 m and 0.87 m, so 9.6 × 0.87 = 8.352. Zara says to give the area as 8.352 m². Sofia says both measurements have 2 s.f., so give 8.4 m². Who is more sensible?", svg: null,
          choices: ["Sofia: 8.4 m², because the answer should not be more accurate than the measurements", "Zara: 8.352 m², because a calculator gives exact answers", "Sofia: 8 m², because 1 s.f. is always safest", "Both are equally sensible"], answer: 0, accept: [], tol: 0, unitLabel: "",
          hints: ["Các số đo 9,6 và 0,87 chính xác đến mức nào (bao nhiêu chữ số có nghĩa)?", "Kết quả tính từ số đo có nên chính xác hơn chính các số đo đó không?", "Chọn mức độ chính xác hợp lý với bối cảnh: bao nhiêu chữ số có nghĩa?"],
          explain: "Số đo gốc chỉ có 2 chữ số có nghĩa nên đáp số hợp lý là 8,4 m². Giữ 8,352 tạo cảm giác chính xác giả tạo; làm tròn còn 8 thì mất quá nhiều thông tin.", why: null
        }
      ]
    }
  ],
  challenge: {
    title: "Thử thách Việt Nam",
    intro: "Những bài toán kiểu kiểm tra và học sinh giỏi lớp 7–8 về dịch dấu phẩy, làm tròn và số thập phân tuần hoàn. Nào, thử sức nhé!",
    questions: [
      {
        id: "ch-01", type: "num", diff: 2, skill: "find-x-decimal", source: "vn", lang: "vi",
        q: "Tìm x biết x × 0,01 = 3,7 ÷ 0,1.", svg: null, choices: null, answer: 3700, accept: [], tol: 0, unitLabel: "",
        hints: ["Em tính vế phải 3,7 ÷ 0,1 trước. Chia cho 0,1 là nhân với mấy?", "Vế phải bằng 37. Vậy x × 0,01 = 37.", "Muốn tìm x, em chia 37 cho 0,01. Chia cho 0,01 là nhân với mấy?"],
        explain: "3,7 ÷ 0,1 = 37. Từ x × 0,01 = 37 suy ra x = 37 ÷ 0,01 = 37 × 100 = 3700.", why: null
      },
      {
        id: "ch-02", type: "num", diff: 3, skill: "find-x-decimal", source: "vn", lang: "vi",
        q: "Tìm x biết (x ÷ 0,1) × 0,01 = 4,5.", svg: null, choices: null, answer: 45, accept: [], tol: 0, unitLabel: "",
        hints: ["x ÷ 0,1 nghĩa là x nhân với số nào?", "Sau đó nhân với 0,01 (tức chia 100). Gộp hai bước: x được nhân hay chia cho bao nhiêu?", "Gộp lại: x × 10 ÷ 100 = x ÷ 10. Vậy x ÷ 10 = 4,5, tìm x."],
        explain: "(x ÷ 0,1) × 0,01 = x × 10 × 0,01 = x × 0,1 = 4,5, nên x = 4,5 ÷ 0,1 = 45. Thử lại: 45 ÷ 0,1 = 450; 450 × 0,01 = 4,5 ✓.", why: null
      },
      {
        id: "ch-03", type: "num", diff: 2, skill: "word-decimal", source: "vn", lang: "vi",
        q: "Một bể nước chứa được 25 lít. Vòi nước chảy đều mỗi giây được 0,01 lít. Hỏi vòi phải chảy bao nhiêu giây thì đầy bể (bể ban đầu rỗng)?", svg: null, choices: null, answer: 2500, accept: [], tol: 0, unitLabel: "giây",
        hints: ["Muốn biết cần bao nhiêu giây, em lấy tổng lượng nước chia cho lượng nước mỗi giây. Viết phép tính đó.", "Đó là phép chia 25 cho 0,01.", "Chia cho 0,01 là nhân với 100."],
        explain: "Thời gian = 25 ÷ 0,01 = 25 × 100 = 2500 giây (khoảng 41 phút 40 giây).", why: null
      },
      {
        id: "ch-04", type: "num", diff: 2, skill: "round-context", source: "vn", lang: "vi",
        q: "Dân số của một tỉnh là 3 456 789 người. Làm tròn số dân này đến 2 chữ số có nghĩa.", svg: null, choices: null, answer: 3500000, accept: [], tol: 0, unitLabel: "người",
        hints: ["Hai chữ số có nghĩa đầu của 3 456 789 là gì?", "Chữ số thứ ba là 5. Làm tròn lên hay giữ nguyên?", "Sau khi làm tròn, số này có bao nhiêu chữ số? Các chữ số còn lại thay bằng số 0."],
        explain: "Hai chữ số đầu là 3 và 4, chữ số kế là 5 nên làm tròn lên: 34 thành 35. Giữ nguyên độ lớn bằng 5 số 0: 3 500 000.", why: null
      },
      {
        id: "ch-05", type: "num", diff: 3, skill: "round-carry", source: "vn", lang: "vi",
        q: "Làm tròn số 0,0049951 đến 3 chữ số có nghĩa. Viết kết quả dưới dạng số thập phân.", svg: null, choices: null, answer: 0.005, accept: [], tol: 0.0000005, unitLabel: "",
        hints: ["Chữ số có nghĩa đầu tiên của 0,0049951 là số mấy? Ba chữ số có nghĩa đầu là gì?", "Chữ số bên phải chữ số có nghĩa thứ ba là 5. Điều gì xảy ra với 499?", "499 làm tròn lên thành 500. Kết quả 0,00500 còn viết gọn thế nào?"],
        explain: "Ba chữ số có nghĩa đầu là 4, 9, 9; chữ số kế là 5 nên làm tròn lên: 499 thành 500 (nhớ sang trái). Kết quả 0,00500 = 0,005.", why: null
      },
      {
        id: "ch-06", type: "num", diff: 3, skill: "speed-round", source: "vn", lang: "vi",
        q: "Một ô tô đi quãng đường 100 km hết 1 giờ 45 phút. Tính vận tốc trung bình của ô tô, làm tròn đến chữ số thập phân thứ nhất.", svg: null, choices: null, answer: 57.1, accept: [], tol: 0.01, unitLabel: "km/h",
        hints: ["Đổi 1 giờ 45 phút ra giờ. 45 phút bằng bao nhiêu giờ (viết dạng số thập phân)?", "Thời gian là 1,75 giờ. Vận tốc = quãng đường ÷ thời gian.", "Tính 100 ÷ 1,75 rồi làm tròn đến 1 chữ số thập phân."],
        explain: "45 phút = 0,75 giờ nên thời gian là 1,75 giờ. v = 100 ÷ 1,75 = 57,142857... ≈ 57,1 km/h.", why: null
      },
      {
        id: "ch-07", type: "num", diff: 3, skill: "money-round", source: "vn", lang: "vi",
        q: "Tại quầy đổi tiền, 1 USD đổi được 25 450 đồng. Bạn Lan có 3 120 000 đồng. Hỏi Lan đổi được nhiều nhất bao nhiêu USD nguyên (làm tròn xuống để không vượt số tiền)? Gợi ý: tính phép chia rồi lấy phần nguyên.", svg: null, choices: null, answer: 122, accept: [], tol: 0, unitLabel: "USD",
        hints: ["Số USD đổi được là phép chia nào?", "Tính 3 120 000 ÷ 25 450 (có thể ước lượng 3 120 000 ÷ 25 000).", "Thương khoảng 122,6. Đề yêu cầu số USD nguyên nhiều nhất mà không vượt tiền: lấy phần nguyên hay làm tròn lên?"],
        explain: "3 120 000 ÷ 25 450 ≈ 122,59. Vì không thể đổi quá số tiền đang có nên chỉ đổi được 122 USD (làm tròn xuống, không làm tròn lên 123). Làm tròn phải hợp với bối cảnh thực tế.", why: null
      },
      {
        id: "ch-08", type: "num", diff: 3, skill: "recurring-decimal", source: "vn", lang: "vi",
        q: "Viết 2/11 thành số thập phân vô hạn tuần hoàn 0,181818... Hỏi chữ số thập phân thứ 50 (sau dấu phẩy) là chữ số nào?", svg: null, choices: null, answer: 8, accept: [], tol: 0, unitLabel: "",
        hints: ["Chu kỳ lặp của 0,181818... là gì và dài mấy chữ số?", "Các chữ số ở vị trí lẻ là 1, vị trí chẵn là 8. Vị trí 50 là lẻ hay chẵn?", "Vị trí 50 chẵn, vậy chữ số đó là số nào?"],
        explain: "2/11 = 0,(18) với chu kỳ 2 chữ số: vị trí lẻ là 1, vị trí chẵn là 8. 50 là số chẵn nên chữ số thứ 50 là 8.", why: null
      },
      {
        id: "ch-09", type: "num", diff: 3, skill: "recurring-decimal", source: "vn", lang: "vi",
        q: "Cho 5/7 = 0,714285714285... (chu kỳ 714285). Chữ số thập phân thứ 100 là chữ số nào?", svg: null, choices: null, answer: 2, accept: [], tol: 0, unitLabel: "",
        hints: ["Chu kỳ 714285 có bao nhiêu chữ số?", "Chia 100 cho độ dài chu kỳ, tìm số dư.", "Số dư là 4, tức là chữ số thứ 4 của chu kỳ. Chữ số thứ 4 của 714285 là gì?"],
        explain: "Chu kỳ dài 6 chữ số. 100 = 6 × 16 + 4 nên chữ số thứ 100 là chữ số thứ 4 trong chu kỳ 7-1-4-2-8-5, tức là 2.", why: null
      },
      {
        id: "ch-10", type: "num", diff: 2, skill: "smart-calc", source: "vn", lang: "vi",
        q: "Tính hợp lý: 2,5 × 37,6 × 0,4.", svg: null, choices: null, answer: 37.6, accept: [], tol: 0, unitLabel: "",
        hints: ["Phép nhân có tính giao hoán và kết hợp. Hai thừa số nào nhân với nhau cho kết quả đẹp?", "2,5 × 0,4 bằng bao nhiêu?", "Còn lại 1 × 37,6."],
        explain: "Nhóm lại: (2,5 × 0,4) × 37,6 = 1 × 37,6 = 37,6.", why: null
      }
    ]
  },
  project: null
});
