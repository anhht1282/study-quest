// Math Quest 8 — Unit 4: Decimals (book pp. 80-103) + Project 2 Diamond decimals (p. 104)
window.GAME_DATA = window.GAME_DATA || { units: [] };
window.GAME_DATA.units.push({
  id: 4,
  title: "Decimals",
  titleVi: "Số thập phân",
  strand: "Number",
  pages: [80, 103],
  realm: "Hang Kim Cương Thập Phân",
  emoji: "💎",
  story: "Trong Hang Kim Cương Thập Phân, mỗi viên đá quý có khối lượng và giá trị là một số thập phân. Thợ kim hoàn chỉ cần sai một chữ số sau dấu phẩy là mất cả gia tài! Em hãy sắp xếp, nhân, chia và tính nhanh các số thập phân để trở thành thợ kim hoàn giỏi nhất.",
  glossary: [
    { en: "compare / order", vi: "so sánh / sắp xếp", def: "Đặt các số theo thứ tự từ bé đến lớn hoặc ngược lại." },
    { en: "place value", vi: "giá trị theo vị trí", def: "Giá trị của một chữ số tuỳ vào vị trí của nó: hàng chục, đơn vị, phần mười, phần trăm..." },
    { en: "estimation", vi: "ước lượng", def: "Làm tròn số để tính nhanh, dùng kiểm tra kết quả có hợp lý không." },
    { en: "equivalent calculation", vi: "phép tính tương đương", def: "Phép tính khác nhưng cùng kết quả, ví dụ nhân cả số bị chia và số chia với 10." },
    { en: "short division", vi: "chia theo cột", def: "Cách chia viết gọn khi số chia là số nguyên nhỏ." },
    { en: "reverse calculation", vi: "phép tính ngược", def: "Dùng phép tính ngược (nhân để kiểm tra phép chia) để xem kết quả có đúng không." },
    { en: "factor", vi: "thừa số / ước", def: "Số nhân với số khác để ra tích; tách số thập phân thành thừa số giúp tính dễ hơn." },
    { en: "term-to-term rule", vi: "quy tắc giữa hai số hạng liên tiếp", def: "Quy tắc cho biết cách đi từ số hạng này sang số hạng kế tiếp của dãy số." }
  ],
  sections: [
    {
      id: "4.1",
      title: "Ordering decimals",
      titleVi: "Sắp xếp số thập phân",
      learn: [
        "So sánh phần nguyên trước. Nếu phần nguyên bằng nhau thì so sánh hàng phần mười, rồi phần trăm, rồi phần nghìn...",
        "Có thể viết thêm số 0 ở cuối để các số có cùng số chữ số thập phân: 26,5 = 26,500. Khi đó chỉ cần so sánh phần sau dấu phẩy.",
        "Số có nhiều chữ số thập phân hơn chưa chắc lớn hơn: 7,9 lớn hơn 7,85.",
        "Khi so sánh các số đo, phải đổi về CÙNG đơn vị trước: 1000 g = 1 kg, 100 cm = 1 m, 1000 m = 1 km, 1000 ml = 1 l.",
        "Với số âm thì ngược lại: −4,05 lớn hơn −4,52 vì −4,05 nằm gần 0 hơn trên trục số."
      ],
      example: {
        q: "Sắp xếp từ bé đến lớn: 5.6, 4.95, 5.68, 5.609.",
        steps: [
          "4,95 có phần nguyên nhỏ nhất nên bé nhất.",
          "Ba số còn lại cùng phần nguyên 5 và cùng 6 phần mười. Viết cùng số chữ số thập phân: 5,600; 5,680; 5,609.",
          "So sánh phần nghìn: 5,600 < 5,609 < 5,680.",
          "Thứ tự: 4,95; 5,6; 5,609; 5,68."
        ],
        prompts: ["Nhìn phần nguyên trước: số nào có phần nguyên nhỏ hơn hẳn các số còn lại?","Ba số còn lại cùng phần nguyên và phần mười. Làm sao để so sánh công bằng? Viết thêm số 0 để làm gì?","Sau khi viết cùng số chữ số thập phân, em so sánh ở hàng nào và thấy thứ tự ra sao?","Ghép số bé nhất với thứ tự vừa tìm: dãy từ bé đến lớn viết như thế nào?"],
        answer: {"type":"text","value":"4,95; 5,6; 5,609; 5,68","accept":["4.95;5.6;5.609;5.68","4.95,5.6,5.609,5.68","4,95<5,6<5,609<5,68","4.95<5.6<5.609<5.68","4,95;5,60;5,609;5,68","4,95 5,6 5,609 5,68"]},
        twist: {"q":"Nếu thêm số 5,61 vào danh sách thì nó đứng ở đâu? Số đứng thứ ba từ bé đến lớn là số nào?","answer":{"type":"num","value":5.609}}
      },
      questions: [
        {
          id: "4.1-01", type: "mc", diff: 1, skill: "compare-decimals", source: "book", lang: "en",
          q: "Choose the correct symbol: 6.71 ? 6.03", svg: null,
          choices: ["<", ">", "="], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["Hai số có cùng phần nguyên không?", "Cùng phần nguyên 6, hãy so sánh hàng phần mười.", "7 phần mười so với 0 phần mười: số nào lớn hơn?"],
          explain: "Cùng phần nguyên 6; phần mười 7 > 0 nên 6,71 > 6,03.", why: null
        },
        {
          id: "4.1-02", type: "mc", diff: 2, skill: "compare-decimals", source: "book", lang: "en",
          q: "Choose the correct symbol: 27.9 ? 27.85", svg: null,
          choices: ["<", ">", "="], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["Viết 27,9 với hai chữ số thập phân. Em được số nào?", "So sánh 27,90 và 27,85: phần mười là 9 và 8.", "Số có nhiều chữ số hơn có luôn lớn hơn không?"],
          explain: "27,9 = 27,90 và 90 > 85 nên 27,9 > 27,85. Lỗi hay gặp: tưởng 85 > 9 nên 27,85 lớn hơn; đó là so sánh sai vì quên hàng phần mười quan trọng hơn hàng phần trăm.", why: null
        },
        {
          id: "4.1-03", type: "num", diff: 1, skill: "order-decimals", source: "book", lang: "en",
          q: "Which is the smallest of these numbers: 9.09, 8.9, 9.53, 9.4?", svg: null, choices: null, answer: 8.9, accept: [], tol: 0, unitLabel: "",
          hints: ["Hãy nhìn phần nguyên của từng số.", "Số nào có phần nguyên nhỏ nhất?", "Có số nào có phần nguyên nhỏ hơn 9 không?"],
          explain: "Chỉ 8,9 có phần nguyên là 8, các số khác là 9, nên 8,9 bé nhất.", why: null
        },
        {
          id: "4.1-04", type: "num", diff: 2, skill: "order-decimals", source: "book", lang: "en",
          q: "Put 6.725, 6.78, 6.007, 6.71 in order from smallest to largest. Which number is third in the list?", svg: null, choices: null, answer: 6.725, accept: [], tol: 0, unitLabel: "",
          hints: ["Viết tất cả với 3 chữ số thập phân: 6,725; 6,780; 6,007; 6,710.", "So sánh phần sau dấu phẩy như so sánh các số nguyên: 725, 780, 007, 710.", "Xếp từ bé đến lớn rồi chọn số thứ ba."],
          explain: "6,007 < 6,710 < 6,725 < 6,780. Số thứ ba là 6,725.", why: null
        },
        {
          id: "4.1-05", type: "mc", diff: 2, skill: "compare-measures", source: "book", lang: "en",
          q: "Choose the correct symbol: 0.985 m ? 985 cm", svg: null,
          choices: ["<", ">", "="], answer: 0, accept: [], tol: 0, unitLabel: "",
          hints: ["Hai số đo có cùng đơn vị chưa?", "Đổi 0,985 m ra cm: nhân với 100.", "98,5 cm so với 985 cm: số nào lớn hơn?"],
          explain: "0,985 m = 98,5 cm, nhỏ hơn 985 cm nên 0,985 m < 985 cm. Luôn đổi về cùng đơn vị trước khi so sánh.", why: null
        },
        {
          id: "4.1-06", type: "num", diff: 2, skill: "order-measures", source: "book", lang: "en",
          q: "Four masses are 2.3 kg, 780 g, 2.18 kg and 1950 g. When written in order from smallest to largest, what is the second mass? Give it in kg.", svg: null, choices: null, answer: 1.95, accept: [], tol: 0, unitLabel: "kg",
          hints: ["Đổi tất cả sang kilôgam. 1000 g = 1 kg.", "780 g = 0,78 kg và 1950 g = ? kg.", "Sắp xếp 0,78; 1,95; 2,18; 2,3 rồi chọn số thứ hai."],
          explain: "Đổi ra kg: 0,78; 1,95; 2,18; 2,3. Thứ tự đã đúng; số thứ hai là 1,95 kg (tức 1950 g).", why: null
        },
        {
          id: "4.1-07", type: "mc", diff: 2, skill: "order-negatives", source: "book", lang: "en",
          q: "Arun orders −4.52, −4.31, −4.05, −4.38 by comparing only the decimal parts and says −4.05 is the smallest. Which number is actually the smallest?", svg: null,
          choices: ["−4.05", "−4.31", "−4.38", "−4.52"], answer: 3, accept: [], tol: 0, unitLabel: "",
          hints: ["Vẽ trục số: số nào nằm xa 0 nhất về phía âm?", "Với số âm, số có giá trị tuyệt đối lớn hơn thì bé hơn.", "Trong bốn số, giá trị tuyệt đối nào lớn nhất?"],
          explain: "Với số âm, số nào xa 0 nhất thì bé nhất. −4,52 xa 0 nhất nên bé nhất. Arun mắc lỗi áp dụng cách so sánh số dương cho số âm.", why: null
        },
        {
          id: "4.1-08", type: "num", diff: 3, skill: "inequality-decimals", source: "book", lang: "en",
          q: "Zara says that if x has two decimal places and 3.27 ≤ x < 3.34, there are 8 possible values of x. How many possible values are there really?", svg: null, choices: null, answer: 7, accept: [], tol: 0, unitLabel: "",
          hints: ["Liệt kê các số có hai chữ số thập phân bắt đầu từ 3,27.", "Dấu ≤ cho phép x = 3,27; dấu < có cho phép x = 3,34 không?", "Đếm: 3,27; 3,28; ... đến số lớn nhất nhỏ hơn 3,34."],
          explain: "x có thể là 3,27; 3,28; 3,29; 3,30; 3,31; 3,32; 3,33, tức 7 giá trị. 3,34 bị loại vì dấu < . Zara đếm nhầm.", why: null
        },
        {
          id: "4.1-09", type: "multi", diff: 3, skill: "decimal-sequences", source: "book", lang: "en",
          q: "Each sequence is described by its first term and rule. Which sequences have a fifth term greater than 2.4?", svg: null,
          choices: ["A: first term 0.5, add 0.5", "B: first term 0.15, multiply by 2", "C: first term −1.7, add 1", "D: first term 33.6, divide by 2", "E: first term 1.25, add 0.25", "F: first term 10.45, subtract 2"],
          answer: [0, 5], accept: [], tol: 0, unitLabel: "",
          hints: ["Hãy viết lần lượt 5 số hạng đầu của từng dãy.", "Số hạng thứ năm cần 4 lần áp dụng quy tắc (hoặc nhân/chia 4 lần).", "Cẩn thận với B: số hạng thứ năm chính xác bằng bao nhiêu, có LỚN hơn 2,4 hay chỉ bằng?"],
          explain: "Số hạng thứ 5: A = 2,5; B = 2,4 (bằng, không lớn hơn); C = 2,3; D = 2,1; E = 2,25; F = 2,45. Chỉ A và F lớn hơn 2,4.", why: null
        },
        {
          id: "4.1-10", type: "num", diff: 3, skill: "inequality-decimals", source: "book", lang: "en",
          q: "y is a number with three decimal places and −0.274 < y ≤ −0.27. How many different values can y have?", svg: null, choices: null, answer: 4, accept: [], tol: 0, unitLabel: "",
          hints: ["−0,27 viết với ba chữ số thập phân là số nào?", "y phải lớn hơn −0,274 nhưng không vượt quá −0,270. Liệt kê các số ba chữ số thập phân ở giữa.", "−0,273; −0,272; −0,271; ... còn số nào nữa? −0,274 có được không?"],
          explain: "y có thể là −0,273; −0,272; −0,271 và −0,270. Số −0,274 bị loại vì dấu <. Có 4 giá trị.", why: null
        }
      ]
    },
    {
      id: "4.2",
      title: "Multiplying decimals",
      titleVi: "Nhân số thập phân",
      learn: [
        "Bỏ dấu phẩy, nhân như số nguyên, rồi đặt lại dấu phẩy: kết quả có số chữ số thập phân bằng TỔNG số chữ số thập phân của hai thừa số.",
        "Ví dụ: 3,2 × 0,04 → 32 × 4 = 128; có 1 + 2 = 3 chữ số thập phân nên được 0,128.",
        "0,2 × 0,3 = 0,06 chứ không phải 0,6: phần mười × phần mười = phần trăm.",
        "Biết 42 × 87 = 3654 thì suy ra 4,2 × 8,7 = 36,54 và 0,42 × 0,087 = 0,03654 bằng cách đếm lại chữ số thập phân.",
        "Kiểm tra bằng ước lượng: làm tròn mỗi số đến 1 chữ số có nghĩa rồi nhân; kết quả chính xác phải gần với ước lượng."
      ],
      example: {
        q: "Tính 5.96 × 0.35 và kiểm tra bằng ước lượng.",
        steps: [
          "Bỏ dấu phẩy: 596 × 35 = 20 860.",
          "Tổng số chữ số thập phân: 2 + 2 = 4 nên 5,96 × 0,35 = 2,0860 = 2,086.",
          "Ước lượng: 6 × 0,4 = 2,4, gần với 2,086 nên kết quả hợp lý."
        ],
        prompts: ["Nếu tạm quên dấu phẩy thì em nhân hai số nguyên nào? Cứ đặt cột như bình thường.","Mỗi thừa số có mấy chữ số thập phân? Vậy tích cần có bao nhiêu chữ số thập phân?","Làm tròn từng số về số dễ tính gần nhất rồi nhân. Kết quả ước lượng có gần với kết quả chính xác không?"],
        answer: {"type":"num","value":2.086},
        twist: {"q":"Nếu tính 5,96 × 0,035 thì kết quả là bao nhiêu? Em suy ra được từ kết quả cũ mà không nhân lại không?","answer":{"type":"num","value":0.2086}}
      },
      questions: [
        {
          id: "4.2-01", type: "num", diff: 1, skill: "mul-decimal-mental", source: "book", lang: "en",
          q: "Use a mental method to work out 0.1 × −8.", svg: null, choices: null, answer: -0.8, accept: [], tol: 0, unitLabel: "",
          hints: ["Bỏ qua dấu phẩy và dấu trừ: 1 × 8 bằng bao nhiêu?", "Đếm số chữ số thập phân trong phép tính ban đầu.", "Tích của số dương và số âm mang dấu gì?"],
          explain: "1 × 8 = 8; có 1 chữ số thập phân nên được 0,8; dương × âm = âm. Vậy −0,8.", why: null
        },
        {
          id: "4.2-02", type: "num", diff: 1, skill: "mul-decimal-mental", source: "book", lang: "en",
          q: "Work out 0.7 × 8.", svg: null, choices: null, answer: 5.6, accept: [], tol: 0, unitLabel: "",
          hints: ["Tính 7 × 8 trước.", "Phép tính ban đầu có mấy chữ số thập phân?", "Đặt dấu phẩy để kết quả có đúng số chữ số thập phân đó."],
          explain: "7 × 8 = 56; có 1 chữ số thập phân nên 0,7 × 8 = 5,6.", why: null
        },
        {
          id: "4.2-03", type: "num", diff: 2, skill: "mul-decimal-mental", source: "book", lang: "en",
          q: "Work out −9 × 0.2.", svg: null, choices: null, answer: -1.8, accept: [], tol: 0, unitLabel: "",
          hints: ["Tính 9 × 2 rồi xét dấu.", "Số âm nhân số dương cho kết quả âm hay dương?", "Đặt dấu phẩy: có mấy chữ số thập phân?"],
          explain: "9 × 2 = 18; 1 chữ số thập phân nên 1,8; dấu âm: −1,8.", why: null
        },
        {
          id: "4.2-04", type: "num", diff: 2, skill: "mul-decimals", source: "book", lang: "en",
          q: "Work out 0.12 × 0.3.", svg: null, choices: null, answer: 0.036, accept: [], tol: 0, unitLabel: "",
          hints: ["Bỏ dấu phẩy: 12 × 3 bằng bao nhiêu?", "0,12 có 2 chữ số thập phân, 0,3 có 1 chữ số thập phân. Tổng là mấy?", "Đặt dấu phẩy để có đúng 3 chữ số thập phân."],
          explain: "12 × 3 = 36; tổng 2 + 1 = 3 chữ số thập phân nên 0,036.", why: null
        },
        {
          id: "4.2-05", type: "num", diff: 2, skill: "mul-from-known", source: "book", lang: "en",
          q: "Jan works out that 42 × 87 = 3654. Use this to work out 4.2 × 8.7.", svg: null, choices: null, answer: 36.54, accept: [], tol: 0, unitLabel: "",
          hints: ["So với 42 × 87, hai thừa số đã bị chia cho bao nhiêu?", "Cả hai cùng chia cho 10: tích bị chia cho bao nhiêu?", "3654 chia cho 100 là bao nhiêu?"],
          explain: "4,2 = 42 ÷ 10 và 8,7 = 87 ÷ 10 nên tích bị chia cho 100: 3654 ÷ 100 = 36,54.", why: null
        },
        {
          id: "4.2-06", type: "num", diff: 2, skill: "mul-decimals", source: "book", lang: "en",
          q: "Work out 0.56 × 8.3.", svg: null, choices: null, answer: 4.648, accept: [], tol: 0, unitLabel: "",
          hints: ["Bỏ dấu phẩy: tính 56 × 83.", "56 × 83 = 56 × 80 + 56 × 3. Em được bao nhiêu?", "Tổng số chữ số thập phân là 3. Ước lượng 0,6 × 8 ≈ 4,8 để kiểm tra."],
          explain: "56 × 83 = 4480 + 168 = 4648; 2 + 1 = 3 chữ số thập phân nên 4,648. Ước lượng 0,6 × 8 = 4,8, gần đúng.", why: null
        },
        {
          id: "4.2-07", type: "mc", diff: 2, skill: "mul-place-value", source: "book", lang: "en",
          q: "Arun is puzzled why 0.4 × 0.2 is not 0.8. What is 0.4 × 0.2?", svg: null,
          choices: ["0.8", "0.08", "0.6", "0.008"], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["4 × 2 bằng bao nhiêu?", "Có bao nhiêu chữ số thập phân trong cả hai thừa số cộng lại?", "0,4 là 4 phần mười, 0,2 là 2 phần mười. Phần mười nhân phần mười cho đơn vị nào?"],
          explain: "4 × 2 = 8 và có 2 chữ số thập phân nên 0,08. Phần mười × phần mười = phần trăm. Lỗi hay gặp: chọn 0,8 vì đặt dấu phẩy chỉ với 1 chữ số thập phân.", why: null
        },
        {
          id: "4.2-08", type: "mc", diff: 3, skill: "estimate-check", source: "book", lang: "en",
          q: "Syra works out 0.45 × 2.8 and gets 12.6. Use estimation to decide which answer is the only one that could be correct.", svg: null,
          choices: ["12.6", "1.26", "0.126", "126"], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["Làm tròn 0,45 và 2,8 đến 1 chữ số có nghĩa.", "0,5 × 3 bằng bao nhiêu?", "Chọn đáp án gần ước lượng đó nhất."],
          explain: "0,45 ≈ 0,5 và 2,8 ≈ 3 nên tích ≈ 1,5. Chỉ 1,26 gần 1,5. Số liệu đúng: 45 × 28 = 1260 và có 3 chữ số thập phân nên 1,260. Syra đặt sai dấu phẩy.", why: null
        },
        {
          id: "4.2-09", type: "num", diff: 3, skill: "mul-from-known", source: "book", lang: "en",
          q: "Given that 158 × 46 = 7268, work out 1.58 × 0.046.", svg: null, choices: null, answer: 0.07268, accept: [], tol: 0, unitLabel: "",
          hints: ["1,58 có mấy chữ số thập phân? 0,046 có mấy?", "Tổng số chữ số thập phân là bao nhiêu?", "Viết 7268 rồi dịch dấu phẩy sang trái đủ số bước; thêm số 0 nếu cần."],
          explain: "1,58 có 2 và 0,046 có 3 chữ số thập phân, tổng 5. 7268 với 5 chữ số thập phân là 0,07268.", why: null
        },
        {
          id: "4.2-10", type: "num", diff: 3, skill: "mul-context", source: "book", lang: "en",
          q: "The instructions for a medicine say: give 7.3 mg per kg of the cat’s mass. A cat has mass 5.8 kg. How many milligrams of medicine does the cat need? (Estimate first: 7 × 6 = 42.)", svg: null, choices: null, answer: 42.34, accept: [], tol: 0, unitLabel: "mg",
          hints: ["Liều thuốc = 7,3 × khối lượng mèo. Viết phép nhân.", "Bỏ dấu phẩy: 73 × 58 bằng bao nhiêu?", "73 × 58 = 4234. Đặt dấu phẩy với 2 chữ số thập phân."],
          explain: "7,3 × 5,8: 73 × 58 = 4234, có 2 chữ số thập phân nên 42,34 mg. Ước lượng 7 × 6 = 42 rất gần, nên hợp lý.", why: null
        }
      ]
    },
    {
      id: "4.3",
      title: "Dividing by decimals",
      titleVi: "Chia cho số thập phân",
      learn: [
        "Để chia cho một số thập phân, viết phép chia dưới dạng phân số rồi nhân cả tử và mẫu với 10 để mẫu thành số nguyên: 5,67 ÷ 0,7 = 56,7 ÷ 7.",
        "Nhân cả số bị chia và số chia với cùng một số thì thương KHÔNG đổi, nên không cần chia kết quả cho 10 nữa.",
        "Sau đó chia theo cột (short division) cho số nguyên, giữ nguyên vị trí dấu phẩy.",
        "Kiểm tra bằng ước lượng và phép tính ngược: nếu 20,504 ÷ 0,8 = 25,63 thì 25,63 × 0,8 phải ≈ 20,5.",
        "Nếu đề cho làm tròn đến n chữ số thập phân, chỉ cần chia đến chữ số thứ n + 1 rồi làm tròn."
      ],
      example: {
        q: "Tính 3.468 ÷ 0.8.",
        steps: [
          "Viết 3,468 ÷ 0,8 = (3,468 × 10) ÷ (0,8 × 10) = 34,68 ÷ 8.",
          "Chia theo cột: 34,68 ÷ 8 = 4,335.",
          "Kiểm tra ngược: 4,335 × 0,8 = 3,468 ✓"
        ],
        prompts: ["Chia cho số thập phân khó đặt cột. Nhân cả số bị chia và số chia với cùng số nào để số chia thành số nguyên?","Sau khi đổi, hãy chia 34,68 cho 8 theo cột. Khi hạ chữ số sau dấu phẩy, em đặt dấu phẩy ở thương lúc nào?","Cách thử nhanh nhất để biết thương đúng hay sai là gì?"],
        answer: {"type":"num","value":4.335},
        twist: {"q":"Nếu chia 3,468 cho 0,08 thì thương bằng bao nhiêu?","answer":{"type":"num","value":43.35}}
      },
      questions: [
        {
          id: "4.3-01", type: "num", diff: 1, skill: "div-decimal", source: "book", lang: "en",
          q: "Work out 2.4 ÷ 0.4.", svg: null, choices: null, answer: 6, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân cả 2,4 và 0,4 với 10: em được phép chia nào?", "24 ÷ 4 bằng bao nhiêu?", "Thương có đổi sau khi nhân cả hai số với 10 không?"],
          explain: "2,4 ÷ 0,4 = 24 ÷ 4 = 6.", why: null
        },
        {
          id: "4.3-02", type: "num", diff: 1, skill: "div-decimal", source: "book", lang: "en",
          q: "Work out 7.2 ÷ 0.9.", svg: null, choices: null, answer: 8, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân cả hai số với 10 để số chia thành số nguyên.", "Em được 72 ÷ 9.", "72 ÷ 9 = ?"],
          explain: "7,2 ÷ 0,9 = 72 ÷ 9 = 8.", why: null
        },
        {
          id: "4.3-03", type: "num", diff: 2, skill: "div-decimal", source: "book", lang: "en",
          q: "Work out −42 ÷ 0.6.", svg: null, choices: null, answer: -70, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân cả tử và mẫu với 10: −42/0,6 = ?/6.", "−420 ÷ 6 bằng bao nhiêu?", "Số âm chia số dương cho kết quả âm hay dương?"],
          explain: "−42 ÷ 0,6 = −420 ÷ 6 = −70.", why: null
        },
        {
          id: "4.3-04", type: "num", diff: 2, skill: "div-decimal", source: "book", lang: "en",
          q: "Work out 0.92 ÷ 0.4.", svg: null, choices: null, answer: 2.3, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân cả hai số với 10: 0,92 thành bao nhiêu?", "Em được 9,2 ÷ 4. Chia theo cột.", "4 vào 9 được 2 dư 1; hạ 2 xuống..."],
          explain: "0,92 ÷ 0,4 = 9,2 ÷ 4 = 2,3.", why: null
        },
        {
          id: "4.3-05", type: "num", diff: 2, skill: "div-context", source: "book", lang: "en",
          q: "Artur pays $1.08 for a piece of string 0.8 m long. What is the cost of the string per metre?", svg: null, choices: null, answer: 1.35, accept: [], tol: 0, unitLabel: "$",
          hints: ["Giá mỗi mét = tổng giá ÷ độ dài. Viết phép chia.", "Em cần tính 1,08 ÷ 0,8. Nhân cả hai số với 10.", "10,8 ÷ 8 bằng bao nhiêu?"],
          explain: "1,08 ÷ 0,8 = 10,8 ÷ 8 = 1,35 đô la mỗi mét. Kiểm tra: 1,35 × 0,8 = 1,08 ✓.", why: null
        },
        {
          id: "4.3-06", type: "num", diff: 2, skill: "div-decimal", source: "book", lang: "en",
          q: "Work out 21.84 ÷ 0.8.", svg: null, choices: null, answer: 27.3, accept: [], tol: 0, unitLabel: "",
          hints: ["Nhân cả 21,84 và 0,8 với 10.", "Em được 218,4 ÷ 8. Chia theo cột.", "Ước lượng: 20 ÷ 1 ≈ 20 hay 22 ÷ 0,8 ≈ 27?"],
          explain: "21,84 ÷ 0,8 = 218,4 ÷ 8 = 27,3. Kiểm tra ngược: 27,3 × 0,8 = 21,84 ✓.", why: null
        },
        {
          id: "4.3-07", type: "mc", diff: 2, skill: "div-equivalent", source: "book", lang: "en",
          q: "Arun works out 3 ÷ 0.6 as (3 × 10) ÷ (0.6 × 10) = 30 ÷ 6 = 5, but then wants to divide 5 by 10 to get 0.5. What is the correct answer to 3 ÷ 0.6?", svg: null,
          choices: ["0.5", "5", "50", "18"], answer: 1, accept: [], tol: 0, unitLabel: "",
          hints: ["Kiểm tra bằng phép nhân: 0,6 nhân với kết quả phải bằng 3.", "0,6 × 0,5 bằng bao nhiêu? 0,6 × 5 bằng bao nhiêu?", "Khi nhân cả số bị chia và số chia với 10, thương có thay đổi không?"],
          explain: "0,6 × 5 = 3 nên 3 ÷ 0,6 = 5. Khi nhân cả hai số với cùng một số, thương không đổi, nên không chia thêm cho 10. Lỗi của Arun là chia thêm cho 10.", why: null
        },
        {
          id: "4.3-08", type: "mc", diff: 3, skill: "div-odd-one-out", source: "book", lang: "en",
          q: "Which calculation gives a different answer from the other four?", svg: null,
          choices: ["A: 6.3 ÷ 0.9", "B: 1.4 ÷ 0.2", "C: 4.9 ÷ 0.7", "D: 4.8 ÷ 0.6", "E: 5.6 ÷ 0.8"], answer: 3, accept: [], tol: 0, unitLabel: "",
          hints: ["Đổi mỗi phép chia thành phép chia hai số nguyên (nhân cả hai số với 10).", "A: 63 ÷ 9; B: 14 ÷ 2; C: 49 ÷ 7; D: ? ; E: ?", "Tính tất cả; bốn phép cho cùng một kết quả."],
          explain: "A = 63÷9 = 7; B = 14÷2 = 7; C = 49÷7 = 7; D = 48÷6 = 8; E = 56÷8 = 7. D là phép khác.", why: null
        },
        {
          id: "4.3-09", type: "num", diff: 3, skill: "div-find-error", source: "book", lang: "en",
          q: "Isla works out 50.46 ÷ 1.2 as 504.6 ÷ 12 and gets 42.5, forgetting a zero when doing the short division. What is the correct value of 50.46 ÷ 1.2?", svg: null, choices: null, answer: 42.05, accept: [], tol: 0, unitLabel: "",
          hints: ["Phép chia tương đương 504,6 ÷ 12 đúng hay sai?", "Chia theo cột: 12 vào 50 được 4, dư 2; vào 24 được 2, dư 0; hạ 6 xuống...", "12 vào 6 được 0! Dấu phẩy ở đâu, số 0 nằm ở vị trí nào?"],
          explain: "504,6 ÷ 12 = 42,05 (12 không chia được 6 nên viết 0 rồi hạ 0 tiếp theo, 12 × 0,05 = 0,6). Kiểm tra ngược: 42,05 × 1,2 = 50,46 ✓.", why: null
        },
        {
          id: "4.3-10", type: "num", diff: 3, skill: "div-round", source: "book", lang: "en",
          q: "Work out 82.35 ÷ 1.1, giving your answer correct to 2 decimal places.", svg: null, choices: null, answer: 74.86, accept: [], tol: 0.001, unitLabel: "",
          hints: ["Nhân cả hai số với 10 để có 823,5 ÷ 11.", "Chia theo cột đến chữ số thập phân thứ ba: 74,863...", "Làm tròn 74,863... đến 2 chữ số thập phân: nhìn chữ số thứ ba."],
          explain: "823,5 ÷ 11 = 74,8636... Chữ số thập phân thứ ba là 3 (< 5) nên làm tròn xuống: 74,86. Kiểm tra: 11 × 75 ≈ 825 ✓.", why: null
        }
      ]
    },
    {
      id: "4.4",
      title: "Making decimal calculations easier",
      titleVi: "Tính nhanh với số thập phân",
      learn: [
        "Dùng thứ tự thực hiện phép tính: làm trong ngoặc trước, rồi nhân chia, rồi cộng trừ.",
        "Viết 0,9 = 1 − 0,1 để nhân nhanh: 28 × 0,9 = 28 × 1 − 28 × 0,1 = 28 − 2,8 = 25,2. Tương tự 0,99 = 1 − 0,01.",
        "Sắp xếp lại phép nhân để tạo ra tích đẹp: 4 × 12,6 × 2,5 = (4 × 2,5) × 12,6 = 10 × 12,6 = 126.",
        "Tách số thập phân thành thừa số dễ nhân: 0,15 = 0,5 × 0,3 hoặc 0,35 = 0,5 × 0,7; 0,12 = 0,2 × 0,6.",
        "Khi tách thừa số, nhân với phần nguyên dễ trước, rồi nhân với phần còn lại, chia 10 khi cần."
      ],
      example: {
        q: "Tính nhẩm 12 × 0.15.",
        steps: [
          "Tách 0,15 = 0,5 × 0,3.",
          "12 × 0,5 = 6 (một nửa của 12).",
          "6 × 0,3 = 6 × 3 ÷ 10 = 18 ÷ 10 = 1,8."
        ],
        prompts: ["0,15 có thể viết thành tích hai số dễ nhân nhẩm hơn không? Thử với 0,5 và một số khác.","Nhân 12 với 0,5 nghĩa là lấy mấy phần của 12?","Còn nhân 6 với 0,3: em viết 0,3 là bao nhiêu phần mười rồi tính."],
        answer: {"type":"num","value":1.8},
        twist: {"q":"Nếu tính 12 × 0,25 thì có cách nhẩm nào nhanh? Kết quả là bao nhiêu?","answer":{"type":"num","value":3}}
      },
      questions: [
        {
          id: "4.4-01", type: "num", diff: 1, skill: "order-of-ops", source: "book", lang: "en",
          q: "Work out (0.6 − 0.2) × 0.8 mentally.", svg: null, choices: null, answer: 0.32, accept: [], tol: 0, unitLabel: "",
          hints: ["Làm gì trước: phần trong ngoặc hay phép nhân?", "0,6 − 0,2 bằng bao nhiêu?", "0,4 × 0,8: tính 4 × 8 rồi đặt dấu phẩy với 2 chữ số thập phân."],
          explain: "(0,6 − 0,2) × 0,8 = 0,4 × 0,8 = 0,32.", why: null
        },
        {
          id: "4.4-02", type: "num", diff: 1, skill: "order-of-ops", source: "book", lang: "en",
          q: "Work out (0.7 + 0.1) × 0.6 mentally.", svg: null, choices: null, answer: 0.48, accept: [], tol: 0, unitLabel: "",
          hints: ["Tính trong ngoặc trước.", "0,7 + 0,1 = ?", "0,8 × 0,6: tính 8 × 6 rồi đặt dấu phẩy."],
          explain: "(0,7 + 0,1) × 0,6 = 0,8 × 0,6 = 0,48.", why: null
        },
        {
          id: "4.4-03", type: "num", diff: 2, skill: "near-one", source: "book", lang: "en",
          q: "Use the idea 0.9 = 1 − 0.1 to work out 28 × 0.9.", svg: null, choices: null, answer: 25.2, accept: [], tol: 0, unitLabel: "",
          hints: ["Viết 28 × 0,9 = 28 × (1 − 0,1).", "Phân phối: 28 × 1 − 28 × 0,1 = 28 − ?", "28 × 0,1 bằng bao nhiêu? Rồi trừ."],
          explain: "28 × 0,9 = 28 − 2,8 = 25,2.", why: null
        },
        {
          id: "4.4-04", type: "num", diff: 2, skill: "rearrange", source: "book", lang: "en",
          q: "Work out 4 × 12.6 × 2.5 by rearranging the order of multiplication.", svg: null, choices: null, answer: 126, accept: [], tol: 0, unitLabel: "",
          hints: ["Hai thừa số nào nhân với nhau cho tích tròn?", "4 × 2,5 bằng bao nhiêu?", "Còn lại: 10 × 12,6."],
          explain: "Nhân có thể làm theo thứ tự bất kỳ: (4 × 2,5) × 12,6 = 10 × 12,6 = 126.", why: null
        },
        {
          id: "4.4-05", type: "num", diff: 2, skill: "factors-decimal", source: "book", lang: "en",
          q: "Use 0.35 = 0.5 × 0.7 to work out 24 × 0.35.", svg: null, choices: null, answer: 8.4, accept: [], tol: 0, unitLabel: "",
          hints: ["Viết 24 × 0,5 × 0,7. Nhân với 0,5 là lấy một nửa.", "24 × 0,5 = ?", "Rồi nhân kết quả với 0,7."],
          explain: "24 × 0,5 = 12; 12 × 0,7 = 8,4. Kiểm tra: 24 × 0,35 = 8,4 ✓.", why: null
        },
        {
          id: "4.4-06", type: "num", diff: 2, skill: "near-one", source: "book", lang: "en",
          q: "A new medicine was given to 3200 patients and 99% (0.99) of them felt better. How many patients felt better?", svg: null, choices: null, answer: 3168, accept: [], tol: 0, unitLabel: "",
          hints: ["Số bệnh nhân khỏe hơn = 3200 × 0,99.", "Viết 0,99 = 1 − 0,01.", "3200 − 3200 × 0,01 = 3200 − ?"],
          explain: "3200 × 0,99 = 3200 − 32 = 3168 bệnh nhân.", why: null
        },
        {
          id: "4.4-07", type: "mc", diff: 2, skill: "near-one", source: "book", lang: "en",
          q: "Which working is a correct way to make 52 × 0.99 easier?", svg: null,
          choices: ["52 × 1 − 52 × 0.01", "52 × 1 − 52 × 0.1", "52 × 1 + 52 × 0.01", "52 − 0.99"], answer: 0, accept: [], tol: 0, unitLabel: "",
          hints: ["0,99 kém 1 bao nhiêu?", "1 − 0,99 bằng bao nhiêu: 0,1 hay 0,01?", "Em phải TRỪ đi hay cộng thêm?"],
          explain: "0,99 = 1 − 0,01 nên 52 × 0,99 = 52 − 0,52 = 51,48. Lỗi: dùng 0,1 (đó là cách cho 0,9), hoặc cộng thay vì trừ.", why: null
        },
        {
          id: "4.4-08", type: "num", diff: 3, skill: "factors-decimal", source: "book", lang: "en",
          q: "Use 0.14 = 0.2 × 0.7 to work out 180 × 0.14.", svg: null, choices: null, answer: 25.2, accept: [], tol: 0, unitLabel: "",
          hints: ["Viết 180 × 0,2 × 0,7. Nhân với 0,2 trước.", "180 × 0,2 bằng bao nhiêu?", "36 × 0,7 = 36 × 7 ÷ 10."],
          explain: "180 × 0,2 = 36; 36 × 0,7 = 252 ÷ 10 = 25,2. Cũng có thể kiểm tra: 18 × 14 = 252, nên 180 × 0,14 = 25,2 ✓.", why: null
        },
        {
          id: "4.4-09", howto: "Enter the number that really belongs in the box. It might be Zara's value, Sofia's value or neither.", type: "num", diff: 3, skill: "missing-number", source: "book", lang: "en",
          q: "Find the missing number in 32 × (0.8 − □) ÷ 0.02 = 800. Zara says 0.4 and Sofia says 0.3.", svg: null, choices: null, answer: 0.3, accept: [], tol: 0, unitLabel: "",
          hints: ["Làm ngược: nhân cả hai vế với 0,02. Vế phải được bao nhiêu?", "32 × (0,8 − □) = 16. Chia 16 cho 32.", "0,8 − □ = 0,5. Số cần điền là bao nhiêu?"],
          explain: "800 × 0,02 = 16 nên 32 × (0,8 − □) = 16, suy ra 0,8 − □ = 0,5, □ = 0,3. Sofia đúng. Thử lại: 32 × 0,5 ÷ 0,02 = 16 ÷ 0,02 = 800 ✓.", why: null
        },
        {
          id: "4.4-10", type: "mc", diff: 3, skill: "factors-decimal", source: "book", lang: "en",
          q: "Nam works out 12 × 0.15 as 12 × 0.5 × 0.3 = 1.8. Ha works out it as 12 × 0.1 + 12 × 0.5 = 7.2. Who is correct?", svg: null,
          choices: ["Nam is correct; Ha is wrong because 0.15 = 0.1 + 0.05, not 0.1 + 0.5", "Ha is correct because 0.15 = 0.1 + 0.5", "Both are correct", "Both are wrong"], answer: 0, accept: [], tol: 0, unitLabel: "",
          hints: ["Kiểm tra từng cách tách: 0,5 × 0,3 có bằng 0,15 không?", "0,1 + 0,5 bằng bao nhiêu? Có phải 0,15 không?", "Dùng ước lượng: 12 × 0,15 gần 12 × 0,1 = 1,2 hay gần 7?"],
          explain: "0,5 × 0,3 = 0,15 nên Nam đúng: 12 × 0,15 = 1,8. Ha sai vì 0,1 + 0,5 = 0,6 chứ không phải 0,15 (phải là 0,1 + 0,05).", why: null
        }
      ]
    }
  ],
  challenge: {
    title: "Thử thách Việt Nam",
    intro: "Các bài toán số thập phân kiểu kiểm tra và học sinh giỏi lớp 7–8: tính nhanh, tìm x, chuyển động, tiền tệ và số thập phân tuần hoàn.",
    questions: [
      {
        id: "ch-01", type: "num", diff: 2, skill: "smart-calc", source: "vn", lang: "vi",
        q: "Tính hợp lý: 0,125 × 7,3 × 8.", svg: null, choices: null, answer: 7.3, accept: [], tol: 0, unitLabel: "",
        hints: ["Hai thừa số nào nhân với nhau cho tích đẹp?", "0,125 × 8 bằng bao nhiêu? (1/8 của 8)", "Còn lại 1 × 7,3."],
        explain: "(0,125 × 8) × 7,3 = 1 × 7,3 = 7,3.", why: null
      },
      {
        id: "ch-02", type: "num", diff: 3, skill: "find-x-decimal", source: "vn", lang: "vi",
        q: "Tìm x biết (x − 0,4) × 2,5 = 3.", svg: null, choices: null, answer: 1.6, accept: [], tol: 0, unitLabel: "",
        hints: ["(x − 0,4) là thừa số chưa biết. Tìm nó bằng phép tính nào?", "x − 0,4 = 3 ÷ 2,5. Nhân cả hai số với 10 để chia.", "30 ÷ 25 = 1,2. Vậy x bằng bao nhiêu?"],
        explain: "x − 0,4 = 3 ÷ 2,5 = 1,2 nên x = 1,2 + 0,4 = 1,6. Thử lại: (1,6 − 0,4) × 2,5 = 1,2 × 2,5 = 3 ✓.", why: null
      },
      {
        id: "ch-03", type: "num", diff: 3, skill: "find-x-decimal", source: "vn", lang: "vi",
        q: "Tìm x biết x ÷ 0,25 + 0,5 = 18,5.", svg: null, choices: null, answer: 4.5, accept: [], tol: 0, unitLabel: "",
        hints: ["Trước hết tìm x ÷ 0,25 bằng cách bỏ + 0,5 ở vế trái.", "x ÷ 0,25 = 18. Chia cho 0,25 giống nhân với số nào?", "Chia cho 0,25 giống nhân với 4, vậy 4x = 18. Tìm x."],
        explain: "x ÷ 0,25 = 18,5 − 0,5 = 18. Vì chia cho 0,25 là nhân với 4 nên 4x = 18, x = 4,5. Thử lại: 4,5 ÷ 0,25 = 18; 18 + 0,5 = 18,5 ✓.", why: null
      },
      {
        id: "ch-04", type: "num", diff: 3, skill: "speed-decimal", source: "vn", lang: "vi",
        q: "Một xe đi 1,5 giờ với vận tốc 42,6 km/h, sau đó đi tiếp 0,75 giờ với vận tốc 56,4 km/h. Tính vận tốc trung bình của xe trên cả hành trình.", svg: null, choices: null, answer: 47.2, accept: [], tol: 0, unitLabel: "km/h",
        hints: ["Vận tốc trung bình = tổng quãng đường ÷ tổng thời gian. Cần tính quãng đường từng đoạn.", "Đoạn 1: 42,6 × 1,5 = 63,9 km. Đoạn 2: 56,4 × 0,75 = ? km.", "Tổng quãng đường 106,2 km; tổng thời gian 2,25 giờ. Thực hiện phép chia."],
        explain: "S₁ = 42,6 × 1,5 = 63,9; S₂ = 56,4 × 0,75 = 42,3; tổng 106,2 km trong 2,25 giờ. v = 106,2 ÷ 2,25 = 47,2 km/h. Chú ý: không lấy trung bình cộng hai vận tốc (49,5).", why: null
      },
      {
        id: "ch-05", type: "num", diff: 3, skill: "money-decimal", source: "vn", lang: "vi",
        q: "Mua 4,5 kg táo hết 157 500 đồng. Hỏi mua 2,4 kg táo cùng loại hết bao nhiêu đồng?", svg: null, choices: null, answer: 84000, accept: [], tol: 0, unitLabel: "đồng",
        hints: ["Tìm giá 1 kg táo trước. Phép tính nào?", "157 500 ÷ 4,5: nhân cả hai số với 10.", "Giá 1 kg là 35 000 đồng. Giá 2,4 kg là bao nhiêu?"],
        explain: "Giá 1 kg: 157 500 ÷ 4,5 = 1 575 000 ÷ 45 = 35 000 đồng. 2,4 kg: 35 000 × 2,4 = 84 000 đồng.", why: null
      },
      {
        id: "ch-06", type: "num", diff: 3, skill: "recurring-decimal", source: "vn", lang: "vi",
        q: "Số thập phân vô hạn tuần hoàn 0,(45) = 0,4545... bằng 5/11 và 0,(54) = 0,5454... bằng 6/11. Tính tổng 0,(45) + 0,(54).", svg: null, choices: null, answer: 1, accept: [], tol: 0, unitLabel: "",
        hints: ["Hai số đó là hai phân số nào?", "Cộng 5/11 + 6/11.", "Em cũng có thể cộng trực tiếp từng chữ số: 0,4545... + 0,5454... có chữ số nào cộng lại cho 9?"],
        explain: "5/11 + 6/11 = 11/11 = 1. Theo chữ số: 4 + 5 = 9 ở mọi vị trí tạo 0,999... = 1.", why: null
      },
      {
        id: "ch-07", type: "num", diff: 3, skill: "round-context-decimal", source: "vn", lang: "vi",
        q: "Một bồn hoa hình tròn có bán kính 2,5 m. Lấy π ≈ 3,14, tính diện tích bồn hoa, làm tròn đến chữ số thập phân thứ nhất.", svg: null, choices: null, answer: 19.6, accept: [], tol: 0.01, unitLabel: "m²",
        hints: ["Công thức diện tích hình tròn là gì?", "S = 3,14 × 2,5 × 2,5. Tính 2,5 × 2,5 trước.", "3,14 × 6,25 = 19,625. Làm tròn đến 1 chữ số thập phân."],
        explain: "S = 3,14 × 2,5² = 3,14 × 6,25 = 19,625 ≈ 19,6 m² (chữ số thứ hai là 2 < 5 nên giữ nguyên).", why: null
      },
      {
        id: "ch-08", type: "mc", diff: 3, skill: "recurring-decimal", source: "vn", lang: "vi",
        q: "Trong các số sau, số nào lớn nhất?", svg: null,
        choices: ["0,(7) = 0,7777...", "0,77", "0,778", "0,7"], answer: 2, accept: [], tol: 0, unitLabel: "",
        hints: ["Viết các số với 4 chữ số thập phân: 0,7777; 0,7700; 0,7780; 0,7000.", "So sánh hàng phần nghìn của 0,7777... và 0,778.", "0,7777... có phần nghìn là 7, còn 0,778 có phần nghìn là 8."],
        explain: "0,7777... < 0,778 vì ở hàng phần nghìn 7 < 8 (dù 0,7777... có vô hạn chữ số 7). Vậy 0,778 lớn nhất.", why: null
      },
      {
        id: "ch-09", type: "num", diff: 2, skill: "estimate-decimal", source: "vn", lang: "vi",
        q: "Bạn An ước lượng 38,7 ÷ 0,52 bằng cách làm tròn mỗi số đến 1 chữ số có nghĩa rồi chia. Kết quả ước lượng của An là bao nhiêu?", svg: null, choices: null, answer: 80, accept: [], tol: 0, unitLabel: "",
        hints: ["Làm tròn 38,7 và 0,52 đến 1 chữ số có nghĩa.", "Em được 40 ÷ 0,5.", "Chia cho 0,5 giống nhân với 2."],
        explain: "38,7 ≈ 40 và 0,52 ≈ 0,5 nên 40 ÷ 0,5 = 80 (kết quả chính xác 74,4).", why: null
      },
      {
        id: "ch-10", type: "num", diff: 3, skill: "rect-area-decimal", source: "vn", lang: "vi",
        q: "Một hình chữ nhật có diện tích 50,15 m² và chiều rộng 3,4 m. Tính chu vi hình chữ nhật.", svg: null, choices: null, answer: 36.3, accept: [], tol: 0, unitLabel: "m",
        hints: ["Chiều dài = diện tích ÷ chiều rộng. Nhân cả hai số với 10.", "501,5 ÷ 34 = ?", "Chiều dài 14,75 m. Chu vi = 2 × (dài + rộng)."],
        explain: "Chiều dài = 50,15 ÷ 3,4 = 14,75 m. Chu vi = 2 × (14,75 + 3,4) = 2 × 18,15 = 36,3 m.", why: null
      }
    ]
  },
  project: {
    title: "Diamond decimals", titleVi: "Kim cương thập phân",
    pages: [104],
    goal: "Khám phá cách điền các ô trong một ‘viên kim cương’ số thập phân, tìm quy luật và tạo ra phương pháp tính nhanh các giá trị trong kim cương từ vài số cho trước.",
    steps: [
      "Quan sát kim cương mẫu (đỉnh 4,3; hai bên 10,1 và 6,7; đáy 3,3). Tìm xem các số trong ô vuông (7,2; 5,5; 8,4; 6,7; 5) được tính từ các số ở hai ô tròn gần nhất như thế nào.",
      "Chọn một số w cho đỉnh và một số thập phân g giữa 0 và 1. Đặt x = w + g, y = x + g, z = y + g rồi điền năm ô vuông theo quy luật em tìm được.",
      "Thử ít nhất ba cặp (w, g) khác nhau. Ghi kết quả vào bảng và nhận xét: các ô vuông có liên hệ gì với w, g?",
      "Tìm cách nhanh nhất để điền các ô vuông khi chỉ biết w và g, rồi kiểm tra bằng một cặp số mới.",
      "Với kim cương thứ hai: chọn a và g, tính b = a + g, c = b + g, d = c + g, e = d + g. Làm ngược để tìm các số trong bốn ô tròn."
    ],
    extensions: [
      "Thay phép cộng g bằng phép nhân với một số thập phân r. Kim cương mới có những quy luật gì?",
      "Cho trước chỉ hai số trong kim cương. Hãy tìm điều kiện để điền được toàn bộ kim cương, và khi nào có nhiều đáp án.",
      "Tự thiết kế một kim cương thập phân có đáp án đẹp, đố bạn tìm quy luật."
    ],
    reflect: [
      "Em đã nhận ra quy luật nào giữa w, g và các ô vuông? Mô tả bằng lời hoặc công thức.",
      "Nếu chỉ biết hai số trong kim cương, em có luôn điền được hết không? Giải thích vì sao.",
      "Việc tính với số thập phân gặp khó ở bước nào nhất, và em đã vượt qua nó thế nào?"
    ]
  }
});

(function () {
  // 🎲 number variants for spaced review (js/variants*.js)
  const GEN = {"4.1-08": "dec-count", "4.1-10": "dec-count", "4.2-01": "dec-mul8", "4.2-02": "dec-mul8", "4.2-03": "dec-mul8", "4.2-04": "dec-mul8", "4.2-06": "dec-mul8", "4.2-07": "dec-mul8", "4.2-05": "known-product", "4.2-09": "known-product", "4.3-01": "dec-div8", "4.3-02": "dec-div8", "4.3-03": "dec-div8", "4.3-04": "dec-div8", "4.3-06": "dec-div8", "4.3-07": "dec-div8", "4.3-09": "dec-div8", "4.4-01": "dec-bracket", "4.4-02": "dec-bracket", "4.4-03": "times-point9", "4.4-06": "times-point9", "4.4-07": "times-point9"};
  window.GAME_DATA.units.filter(function (u) { return u.id === 4; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
