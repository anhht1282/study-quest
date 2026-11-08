window.GAME_DATA = window.GAME_DATA || { units: [] };
window.GAME_DATA.units.push({
  "id": 13,
  "title": "Probability",
  "titleVi": "Xác suất",
  "strand": "Statistics and probability",
  "pages": [
    275,
    288
  ],
  "realm": "Hang Xúc Xắc Bí Ẩn",
  "emoji": "🎲",
  "story": "Trong hang động bí ẩn, những viên xúc xắc phát sáng, đồng xu cổ và vòng quay thần kỳ quyết định ai được mở cửa kho báu. Muốn thắng, em phải biết tính cơ hội của từng kết quả, và kiểm tra xem thí nghiệm có khớp với lý thuyết không. Nhà vua của hang từng chọn người thắng cuộc chỉ bằng trò 'kéo búa bao'!",
  "glossary": [
    {
      "en": "probability",
      "vi": "xác suất",
      "def": "Số từ 0 đến 1 đo khả năng một biến cố xảy ra."
    },
    {
      "en": "outcome",
      "vi": "kết quả",
      "def": "Một kết quả có thể xảy ra của một phép thử, ví dụ mặt 4 khi gieo xúc xắc."
    },
    {
      "en": "equally likely",
      "vi": "đồng khả năng",
      "def": "Các kết quả có cơ hội xảy ra như nhau."
    },
    {
      "en": "complementary event",
      "vi": "biến cố đối",
      "def": "Biến cố A' xảy ra khi A không xảy ra; P(A') = 1 − P(A)."
    },
    {
      "en": "unbiased / fair",
      "vi": "cân đối",
      "def": "Xúc xắc hay đồng xu mà mọi mặt đều có khả năng như nhau."
    },
    {
      "en": "sample space diagram",
      "vi": "bảng (sơ đồ) kết quả",
      "def": "Bảng hoặc sơ đồ liệt kê tất cả kết quả có thể xảy ra."
    },
    {
      "en": "experimental probability",
      "vi": "xác suất thực nghiệm",
      "def": "Số lần xảy ra chia cho tổng số lần thử trong một thí nghiệm."
    },
    {
      "en": "theoretical probability",
      "vi": "xác suất lý thuyết",
      "def": "Tính từ các kết quả đồng khả năng: số kết quả thuận lợi / tổng số kết quả."
    }
  ],
  "sections": [
    {
      "id": "13.1",
      "title": "Calculating probabilities",
      "titleVi": "Tính xác suất",
      "learn": [
        "Xác suất của một biến cố nằm từ 0 (không thể) đến 1 (chắc chắn); tổng xác suất của mọi kết quả bằng 1.",
        "Biến cố đối A' là 'A không xảy ra': P(A') = 1 − P(A). Ví dụ P(không ra đỏ) = 1 − P(đỏ).",
        "Với các kết quả đồng khả năng: P = số kết quả thuận lợi / tổng số kết quả.",
        "Liệt kê có hệ thống: hai xúc xắc có bảng 6 × 6 = 36 kết quả; đồng xu và xúc xắc có 2 × 6 = 12; ba đồng xu có 8 kết quả (vẽ sơ đồ cây).",
        "Cẩn thận: HT và TH là hai kết quả khác nhau, nên hai đồng xu có 4 kết quả đồng khả năng chứ không phải 3."
      ],
      "example": {
        "q": "Gieo hai xúc xắc cân đối. Tìm xác suất để tổng hai mặt nhỏ hơn hoặc bằng 4.",
        "steps": [
          "Có 6 × 6 = 36 kết quả đồng khả năng.",
          "Tổng 2: (1,1); tổng 3: (1,2), (2,1); tổng 4: (1,3), (2,2), (3,1), cộng 6 kết quả.",
          "Xác suất = 6/36 = 1/6. Biến cố đối (tổng lớn hơn 4) có xác suất 1 − 1/6 = 5/6."
        ],
        "prompts": ["Có bao nhiêu kết quả khi gieo hai xúc xắc? Vì sao là phép nhân?","Liệt kê các cặp có tổng 2, 3 rồi 4. Mỗi tổng có mấy cặp? Đừng quên thứ tự hai xúc xắc.","Xác suất bằng số kết quả thuận lợi chia tổng số kết quả; viết dạng rút gọn. Biến cố 'tổng lớn hơn 4' liên hệ thế nào?"],
        "answer": {"type":"num","value":"1/6"},
        "twist": {"q":"Nếu đổi thành 'tổng nhỏ hơn hoặc bằng 5' thì xác suất là bao nhiêu?","answer":{"type":"num","value":"5/18"}}
      },
      "questions": [
        {"id": "13.1-01", "type": "num", "diff": 1, "skill": "complement", "source": "book", "lang": "en", "q": "The probability that a football team wins a match is 0.3 and the probability that it draws is 0.1. Work out the probability that the team loses.", "svg": null, "choices": null, "answer": 0.6, "accept": [], "tol": 0.001, "unitLabel": "", "hints": ["Thắng, hòa, thua là ba kết quả loại trừ nhau. Tổng xác suất của chúng bằng bao nhiêu?", "Xác suất thắng hoặc hòa là bao nhiêu (0,3 + 0,1)?", "Xác suất thua = 1 trừ kết quả vừa tìm."], "explain": "P(thắng hoặc hòa) = 0,3 + 0,1 = 0,4. P(thua) = 1 − 0,4 = 0,6.", "why": null},
        {"id": "13.1-02", "type": "num", "diff": 1, "skill": "two-dice-table", "source": "book", "lang": "en", "q": "Two fair 6-sided dice are thrown. Find the probability of getting the same number on both dice. (Give a fraction in simplest form.)", "svg": null, "choices": null, "answer": "1/6", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Có tất cả bao nhiêu kết quả khi gieo hai xúc xắc? (6 × 6)", "Những kết quả nào có hai mặt giống nhau: (1,1), (2,2), …? Có bao nhiêu?", "Viết phân số số kết quả thuận lợi / 36 rồi rút gọn."], "explain": "Có 36 kết quả, trong đó 6 kết quả có hai mặt giống nhau. Xác suất 6/36 = 1/6.", "why": null},
        {"id": "13.1-03", "type": "num", "diff": 2, "skill": "two-dice-table", "source": "book", "lang": "en", "q": "Two fair 6-sided dice are thrown and the scores are added. Find the probability that the total is 6. (Fraction.)", "svg": null, "choices": null, "answer": "5/36", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Hãy liệt kê các cặp (xúc xắc 1, xúc xắc 2) có tổng 6, bắt đầu từ (1, 5).", "Có tất cả bao nhiêu cặp như thế? Chú ý (1,5) và (5,1) là hai kết quả khác nhau.", "Chia số cặp cho 36."], "explain": "Các cặp: (1,5), (2,4), (3,3), (4,2), (5,1) là 5 cặp. Xác suất 5/36.", "why": null},
        {"id": "13.1-04", "type": "num", "diff": 2, "skill": "two-dice-table", "source": "book", "lang": "en", "q": "Two fair 6-sided dice are thrown and added. Find the probability that the total is 9 or more. (Fraction in simplest form.)", "svg": null, "choices": null, "answer": "5/18", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Đếm các cặp có tổng 9, rồi tổng 10, 11, 12.", "Tổng 9 có 4 cặp, 10 có 3 cặp, 11 có 2 cặp, 12 có 1 cặp. Cộng lại.", "Chia cho 36 và rút gọn."], "explain": "4 + 3 + 2 + 1 = 10 cặp nên xác suất là 10/36 = 5/18.", "why": null},
        {"id": "13.1-05", "type": "mc", "diff": 2, "skill": "complement-two-dice", "source": "book", "lang": "en", "q": "Two fair dice are thrown. What is the probability that neither die shows a 5?", "svg": null, "choices": ["35/36", "25/36", "5/6", "26/36"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Xác suất một xúc xắc cụ thể không ra 5 là bao nhiêu?", "Đếm các kết quả (a, b) mà cả a và b đều khác 5. Mỗi xúc xắc có mấy lựa chọn?", "Số kết quả thuận lợi chia cho 36 là bao nhiêu?"], "explain": "Mỗi xúc xắc có 5 mặt khác 5 nên có 5 × 5 = 25 kết quả thuận lợi, xác suất 25/36. Lỗi: 35/36 (nghĩ chỉ loại một cặp (5,5)); 26/36 (loại 10 cặp có ít nhất một số 5 nhưng đếm thiếu cặp (5,5), thực tế loại 11 cặp).", "why": null},
        {"id": "13.1-06", "type": "num", "diff": 2, "skill": "two-dice-table", "source": "book", "lang": "en", "q": "Two fair dice are thrown and the scores are added. Find the probability that the total is a prime number. (Fraction in simplest form.)", "svg": null, "choices": null, "answer": "5/12", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tổng có thể từ 2 đến 12. Những số nào trong đó là số nguyên tố?", "Đếm số cặp cho từng tổng nguyên tố: 2, 3, 5, 7, 11.", "Cộng số cặp rồi chia cho 36 và rút gọn."], "explain": "Tổng nguyên tố: 2 (1 cặp), 3 (2), 5 (4), 7 (6), 11 (2) cộng được 15 cặp. Xác suất 15/36 = 5/12.", "why": null},
        {"id": "13.1-07", "type": "num", "diff": 2, "skill": "outcome-list", "source": "book", "lang": "en", "q": "A fair coin and a fair 6-sided dice are thrown together. Find the probability of getting a head and an even number. (Fraction in simplest form.)", "svg": null, "choices": null, "answer": "1/4", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Có bao nhiêu kết quả khi gieo đồng xu và xúc xắc? (2 × 6)", "Các kết quả thuận lợi: H2, H4, H6. Có mấy kết quả?", "Chia rồi rút gọn."], "explain": "Có 12 kết quả đồng khả năng, 3 kết quả thuận lợi (H2, H4, H6). Xác suất 3/12 = 1/4.", "why": null},
        {"id": "13.1-08", "type": "num", "diff": 3, "skill": "outcome-list", "source": "book", "lang": "en", "q": "Three fair coins are thrown. Find the probability of getting exactly 2 heads and 1 tail. (Fraction.)", "svg": null, "choices": null, "answer": "3/8", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Vẽ sơ đồ cây hoặc liệt kê: HHH, HHT, … Có tất cả bao nhiêu kết quả?", "Trong đó có bao nhiêu kết quả gồm đúng 2 H và 1 T? (HHT, …)", "Viết số kết quả thuận lợi trên tổng số kết quả."], "explain": "Có 2 × 2 × 2 = 8 kết quả. Đúng hai mặt ngửa: HHT, HTH, THH, tức 3 kết quả. Xác suất 3/8.", "why": null},
        {"id": "13.1-09", "type": "num", "diff": 3, "skill": "outcome-list", "source": "book", "lang": "en", "q": "Zara has cards 2, 4 and 5. She places them side by side in a random order to make a 3-digit number. Find the probability that the number is more than 400. (Fraction in simplest form.)", "svg": null, "choices": null, "answer": "2/3", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Liệt kê tất cả số có ba chữ số tạo được: 245, 254, … Có tất cả bao nhiêu số?", "Số lớn hơn 400 thì chữ số hàng trăm phải như thế nào?", "Đếm những số có hàng trăm là 4 hoặc 5 rồi chia cho tổng số."], "explain": "Có 3 × 2 × 1 = 6 số: 245, 254, 425, 452, 524, 542. Số lớn hơn 400: 425, 452, 524, 542 là 4 số. Xác suất 4/6 = 2/3.", "why": null},
        {"id": "13.1-10", "type": "mc", "diff": 3, "skill": "equally-likely", "source": "book", "lang": "en", "q": "Arun says: 'When you throw two fair coins there are three outcomes: 2 heads, 2 tails, or a head and a tail. So the probability of 2 heads is 1/3.' Which statement is correct?", "svg": null, "choices": ["Arun is right: there are 3 outcomes so P(2 heads) = 1/3", "Arun is wrong: HT and TH are different, so there are 4 equally likely outcomes and P(2 heads) = 1/4", "Arun is wrong: P(2 heads) = 1/2"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Hai đồng xu tách biệt nhau: đồng thứ nhất ngửa, đồng thứ hai sấp có khác với đồng thứ nhất sấp, đồng thứ hai ngửa không?", "Liệt kê đầy đủ các kết quả khi phân biệt đồng xu thứ nhất và thứ hai.", "Các kết quả em liệt kê có đồng khả năng không? P(HH) bằng bao nhiêu?"], "explain": "HT và TH là hai kết quả khác nhau, nên có 4 kết quả đồng khả năng: HH, HT, TH, TT. P(2 mặt ngửa) = 1/4. Ba 'kết quả' của Arun không đồng khả năng: 'một ngửa một sấp' chiếm 2 trong 4 kết quả.", "why": null}
      ]
    },
    {
      "id": "13.2",
      "title": "Experimental and theoretical probabilities",
      "titleVi": "Xác suất thực nghiệm và lý thuyết",
      "learn": [
        "Xác suất thực nghiệm = số lần biến cố xảy ra / tổng số lần thử, tính từ kết quả của một thí nghiệm.",
        "Xác suất lý thuyết dựa trên các kết quả đồng khả năng, ví dụ P(mặt 1 của xúc xắc cân đối) = 1/6.",
        "Số lần kỳ vọng = xác suất lý thuyết × số lần thử (ví dụ gieo 600 lần, kỳ vọng 100 lần mặt 6).",
        "Càng thử nhiều lần, xác suất thực nghiệm càng gần xác suất lý thuyết; vài lần thử thì có thể lệch nhiều.",
        "Nếu kết quả thực nghiệm lệch rất xa lý thuyết thì có thể xúc xắc/đồng xu không cân đối hoặc số liệu không đáng tin."
      ],
      "example": {
        "q": "Gieo hai đồng xu cân đối 50 lần: HH 17 lần, TT 14 lần, một ngửa một sấp 19 lần. Xác suất thực nghiệm của HH lớn hơn xác suất lý thuyết bao nhiêu?",
        "steps": [
          "Thực nghiệm: 17/50 = 0,34.",
          "Lý thuyết: 4 kết quả đồng khả năng nên P(HH) = 1/4 = 0,25.",
          "Chênh lệch 0,09 vì mới chỉ gieo 50 lần; gieo nhiều hơn thì hai số sẽ gần nhau hơn."
        ],
        "prompts": ["Xác suất thực nghiệm bằng số lần HH xảy ra chia cho tổng số lần gieo. Với 17 lần trong 50 lần, tỉ lệ này bằng bao nhiêu?","Gieo hai đồng xu, liệt kê mọi kết quả đồng khả năng. HH chiếm mấy phần?","Hai số khác nhau bao nhiêu? Theo em điều gì làm chúng chưa trùng nhau, và gieo thêm nhiều lần thì sao?"],
        "answer": {"type":"num","value":0.09},
        "twist": {"q":"Nếu gieo 2000 lần thì theo lý thuyết em kỳ vọng HH xuất hiện khoảng bao nhiêu lần?","answer":{"type":"num","value":500}}
      },
      "questions": [
        {"id": "13.2-01", "type": "num", "diff": 1, "skill": "experimental-prob", "source": "book", "lang": "en", "q": "A spreadsheet simulates throwing a dice 200 times. The score 4 comes up 33 times. Find the experimental probability of a 4. (Fraction or decimal.)", "svg": null, "choices": null, "answer": "33/200", "accept": [], "tol": 0.0005, "unitLabel": "", "hints": ["Xác suất thực nghiệm = số lần xảy ra / tổng số lần thử.", "Số lần ra mặt 4 là bao nhiêu, tổng số lần gieo là bao nhiêu?", "Viết phân số 33/200 (hoặc số thập phân tương ứng)."], "explain": "Xác suất thực nghiệm của mặt 4 là 33/200 = 0,165.", "why": null},
        {"id": "13.2-02", "type": "num", "diff": 1, "skill": "theoretical-prob", "source": "book", "lang": "en", "q": "Two fair coins are thrown. What is the theoretical probability of getting one head and one tail? (Fraction in simplest form.)", "svg": null, "choices": null, "answer": "1/2", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Liệt kê các kết quả đồng khả năng khi gieo hai đồng xu.", "Có mấy kết quả cho một ngửa một sấp? (HT và TH)", "Số kết quả thuận lợi chia cho tổng số kết quả, rồi rút gọn."], "explain": "Có 4 kết quả: HH, HT, TH, TT. Một ngửa một sấp có 2 kết quả nên xác suất lý thuyết là 2/4 = 1/2.", "why": null},
        {"id": "13.2-03", "type": "num", "diff": 2, "skill": "expected-frequency", "source": "book", "lang": "en", "q": "A spinner has P(red) = 0.6, P(white) = 0.3 and P(blue) = 0.1. It is spun 800 times. How many times would you expect it to land on red?", "svg": null, "choices": null, "answer": 480, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Số lần kỳ vọng = xác suất × số lần quay.", "Tính 0,6 × 800.", "Kết quả có hợp lý (hơn một nửa số lần) không?"], "explain": "Số lần kỳ vọng ra đỏ = 0,6 × 800 = 480 lần.", "why": null},
        {"id": "13.2-04", "type": "num", "diff": 2, "skill": "experimental-prob", "source": "book", "lang": "en", "q": "A spinner is spun 800 times: red 489 times, white 218 times and blue 93 times. Find the experimental probability of white (as a decimal).", "svg": null, "choices": null, "answer": 0.2725, "accept": [], "tol": 0.0005, "unitLabel": "", "hints": ["Tổng số lần quay là bao nhiêu?", "Mặt trắng xuất hiện bao nhiêu lần?", "Chia 218 cho 800."], "explain": "Xác suất thực nghiệm của trắng = 218/800 = 0,2725 (xấp xỉ 0,3, gần xác suất lý thuyết).", "why": null},
        {"id": "13.2-05", "type": "mc", "diff": 2, "skill": "experiment-reliability", "source": "book", "lang": "en", "q": "A coin is thrown 10 times and shows 7 heads. Which statement is best?", "svg": null, "choices": ["The coin is definitely biased because 7/10 is not 1/2", "10 throws is too few; throw many more times before deciding", "The next throw is more likely to be a tail to even things out", "The theoretical probability of a head is now 7/10"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Xác suất thực nghiệm 7/10 có chắc chắn bằng xác suất lý thuyết 1/2 không?", "Điều gì xảy ra với xác suất thực nghiệm khi số lần thử rất lớn?", "Mỗi lần gieo có 'nhớ' kết quả lần trước để bù lại không?"], "explain": "Với chỉ 10 lần thử, kết quả có thể lệch nhiều. Muốn nhận xét đồng xu có lệch hay không cần gieo nhiều lần hơn. Lỗi: nghĩ lần sau nhất định ra sấp để 'cân bằng', hoặc kết luận đồng xu lệch vội vàng.", "why": null},
        {"id": "13.2-06", "type": "num", "diff": 2, "skill": "experimental-prob", "source": "book", "lang": "en", "q": "The first 20 decimal digits of π are 1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6. Find the experimental probability that a digit is 3. (Decimal.)", "svg": null, "choices": null, "answer": 0.15, "accept": [], "tol": 0.001, "unitLabel": "", "hints": ["Đếm xem chữ số 3 xuất hiện bao nhiêu lần trong 20 chữ số.", "Tổng số chữ số là bao nhiêu?", "Chia số lần xuất hiện cho 20."], "explain": "Chữ số 3 xuất hiện 3 lần trong 20 chữ số. Xác suất thực nghiệm = 3/20 = 0,15 (lý thuyết là 1/10 = 0,1).", "why": null},
        {"id": "13.2-07", "type": "num", "diff": 3, "skill": "combine-experiments", "source": "book", "lang": "en", "q": "Four learners throw six dice together and note 'at least one 6'. Arun: 7 times in 10 throws; Sofia: 9 in 20; Marcus: 31 in 40; Zara: 36 in 50. Combine all the results to find the experimental probability of at least one 6. (Fraction or decimal.)", "svg": null, "choices": null, "answer": "83/120", "accept": [], "tol": 0.002, "unitLabel": "", "hints": ["Cộng số lần 'có ít nhất một mặt 6' của cả bốn bạn.", "Cộng tổng số lần ném của cả bốn bạn.", "Chia hai tổng đó cho nhau."], "explain": "Số lần có ít nhất một 6: 7 + 9 + 31 + 36 = 83. Tổng số lần ném: 10 + 20 + 40 + 50 = 120. Xác suất thực nghiệm = 83/120 ≈ 0,692.", "why": null},
        {"id": "13.2-08", "type": "mc", "diff": 3, "skill": "experiment-reliability", "source": "book", "lang": "en", "q": "Two fair coins are thrown 100 times. Which set of results (HH, TT, one of each) is most likely to be genuine?", "svg": null, "choices": ["HH 24, TT 26, one of each 50", "HH 5, TT 5, one of each 90", "HH 33, TT 33, one of each 34", "HH 0, TT 0, one of each 100"], "answer": 0, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tính số lần kỳ vọng cho HH, TT và 'một ngửa một sấp' khi gieo 100 lần (xác suất 1/4, 1/4, 1/2).", "Kết quả nào gần với 25, 25, 50 nhất?", "Kết quả 33, 33, 34 có phản ánh việc cho rằng 3 kết quả đồng khả năng không?"], "explain": "Kỳ vọng: HH 25, TT 25, mỗi loại một 50. Bộ 24, 26, 50 rất gần. Bộ 33, 33, 34 là dấu hiệu của lỗi cho rằng có 3 kết quả đồng khả năng; 5, 5, 90 và 0, 0, 100 lệch quá xa.", "why": null},
        {"id": "13.2-09", "type": "num", "diff": 3, "skill": "estimate-from-experiment", "source": "book", "lang": "en", "q": "Marcus draws a counter from a bag 40 times, replacing it each time, and gets red 14 times. The bag holds 100 counters. Use his results to estimate how many counters are red.", "svg": null, "choices": null, "answer": 35, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tính xác suất thực nghiệm của màu đỏ: 14/40.", "Nếu xác suất ra đỏ là 14/40 thì trong 100 viên có khoảng bao nhiêu viên đỏ?", "Tính 14/40 × 100."], "explain": "Xác suất thực nghiệm của đỏ = 14/40 = 0,35. Ước lượng số bi đỏ = 0,35 × 100 = 35 viên.", "why": null},
        {"id": "13.2-10", "type": "num", "diff": 3, "skill": "theory-vs-experiment", "source": "book", "lang": "en", "q": "A computer simulates 500 throws of six dice and gets at least one 6 in 333 of them. The theoretical probability is 0.6651. Find the (positive) difference between the experimental and theoretical probabilities. (Decimal.)", "svg": null, "choices": null, "answer": 0.0009, "accept": [], "tol": 0.0002, "unitLabel": "", "hints": ["Tính xác suất thực nghiệm 333/500 dưới dạng số thập phân.", "Trừ: lý thuyết trừ thực nghiệm.", "Kết quả rất nhỏ nói gì về độ tin cậy của thí nghiệm khi số lần thử lớn?"], "explain": "333/500 = 0,666. Hiệu 0,666 − 0,6651 = 0,0009. Số lần thử lớn (500) nên xác suất thực nghiệm gần như trùng xác suất lý thuyết.", "why": null}
      ]
    }
  ],
  "challenge": {
    "title": "Thử thách Việt Nam",
    "intro": "Gieo xúc xắc, rút thẻ và tính biến cố đối theo phong cách đề kiểm tra lớp 7–8, em sẵn sàng chưa?",
    "questions": [
        {"id": "ch-01", "type": "num", "diff": 2, "skill": "two-dice-table", "source": "vn", "lang": "vi", "q": "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để tổng hai mặt là 10 trở lên (viết phân số tối giản).", "svg": null, "choices": null, "answer": "1/6", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Liệt kê các cặp có tổng 10, 11, 12.", "Có tất cả bao nhiêu cặp (3 + 2 + 1)?", "Chia cho 36 và rút gọn."], "explain": "Tổng 10: 3 cặp, tổng 11: 2 cặp, tổng 12: 1 cặp, cộng 6 cặp. Xác suất 6/36 = 1/6.", "why": null},
        {"id": "ch-02", "type": "num", "diff": 2, "skill": "complement-two-dice", "source": "vn", "lang": "vi", "q": "Gieo hai con xúc xắc cân đối. Tính xác suất để tích hai số chấm là số chẵn (phân số tối giản).", "svg": null, "choices": null, "answer": "3/4", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Khi nào tích hai số là số lẻ?", "Tính xác suất cả hai mặt đều lẻ rồi dùng biến cố đối.", "P(tích chẵn) = 1 − P(tích lẻ)."], "explain": "Tích lẻ khi cả hai mặt lẻ: 3 × 3 = 9 cặp, xác suất 9/36 = 1/4. Vậy P(tích chẵn) = 1 − 1/4 = 3/4.", "why": null},
        {"id": "ch-03", "type": "num", "diff": 3, "skill": "outcome-list", "source": "vn", "lang": "vi", "q": "Một hộp có 5 tấm thẻ ghi số 1, 2, 3, 4, 5. Rút ngẫu nhiên cùng lúc hai thẻ. Tính xác suất để tổng hai số trên thẻ là số chẵn (phân số tối giản).", "svg": null, "choices": null, "answer": "2/5", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Có bao nhiêu cách chọn 2 thẻ trong 5 thẻ (không phân biệt thứ tự)? Liệt kê.", "Tổng chẵn khi hai số cùng chẵn hoặc cùng lẻ. Đếm từng trường hợp.", "Cộng hai trường hợp và chia cho tổng số cách chọn."], "explain": "Có 10 cặp. Cùng lẻ: (1,3), (1,5), (3,5) là 3 cặp; cùng chẵn: (2,4) là 1 cặp. Có 4 cặp tổng chẵn nên xác suất 4/10 = 2/5.", "why": null},
        {"id": "ch-04", "type": "num", "diff": 3, "skill": "complement-two-dice", "source": "vn", "lang": "vi", "q": "Gieo hai con xúc xắc cân đối. Tính xác suất để có ít nhất một con ra mặt 6 (phân số).", "svg": null, "choices": null, "answer": "11/36", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Biến cố đối của 'ít nhất một mặt 6' là gì?", "Có bao nhiêu kết quả mà cả hai con đều không ra 6?", "Lấy 1 trừ xác suất của biến cố đối."], "explain": "Biến cố đối: không con nào ra 6, có 5 × 5 = 25 kết quả, xác suất 25/36. Vậy xác suất cần tìm là 1 − 25/36 = 11/36.", "why": null},
        {"id": "ch-05", "type": "num", "diff": 3, "skill": "complement", "source": "vn", "lang": "vi", "q": "Một túi có bi đỏ, bi xanh và 14 bi vàng. Biết xác suất lấy được bi đỏ là 0,25 và xác suất lấy được bi xanh là 0,4. Hỏi túi có tất cả bao nhiêu viên bi?", "svg": null, "choices": null, "answer": 40, "accept": [], "tol": 0, "unitLabel": "viên", "hints": ["Ba màu bao quát mọi khả năng. Xác suất lấy được bi vàng là bao nhiêu?", "Nếu 14 viên vàng chiếm 0,35 tổng số thì tổng số là bao nhiêu?", "Tính 14 ÷ 0,35."], "explain": "P(vàng) = 1 − 0,25 − 0,4 = 0,35. Vậy 0,35 × tổng = 14, tổng = 14 ÷ 0,35 = 40 viên.", "why": null},
        {"id": "ch-06", "type": "num", "diff": 3, "skill": "theory-vs-experiment", "source": "vn", "lang": "vi", "q": "Gieo một đồng xu cân đối 200 lần, được 108 lần mặt ngửa. Tìm hiệu giữa xác suất thực nghiệm và xác suất lý thuyết của mặt ngửa (số thập phân, lấy giá trị dương).", "svg": null, "choices": null, "answer": 0.04, "accept": [], "tol": 0.001, "unitLabel": "", "hints": ["Xác suất thực nghiệm của mặt ngửa là 108/200 bằng bao nhiêu?", "Xác suất lý thuyết của đồng xu cân đối là bao nhiêu?", "Lấy hiệu hai số, chú ý kết quả dương."], "explain": "Thực nghiệm: 108/200 = 0,54. Lý thuyết: 0,5. Hiệu: 0,54 − 0,5 = 0,04.", "why": null},
        {"id": "ch-07", "type": "num", "diff": 3, "skill": "outcome-list", "source": "vn", "lang": "vi", "q": "Rút ngẫu nhiên một thẻ từ 20 thẻ ghi các số 1, 2, …, 20. Tính xác suất để số rút được là số nguyên tố hoặc là bội của 4 (phân số tối giản).", "svg": null, "choices": null, "answer": "13/20", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Liệt kê các số nguyên tố từ 1 đến 20.", "Liệt kê các bội của 4 từ 1 đến 20. Có số nào vừa nguyên tố vừa là bội của 4 không?", "Cộng số kết quả thuận lợi rồi chia cho 20."], "explain": "Số nguyên tố: 2, 3, 5, 7, 11, 13, 17, 19 (8 số). Bội của 4: 4, 8, 12, 16, 20 (5 số). Hai nhóm không trùng nhau nên có 13 số. Xác suất 13/20.", "why": null},
        {"id": "ch-08", "type": "num", "diff": 3, "skill": "complement-coins", "source": "vn", "lang": "vi", "q": "Gieo ba đồng xu cân đối. Tính xác suất để có ít nhất một đồng xu ngửa (phân số).", "svg": null, "choices": null, "answer": "7/8", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Biến cố đối của 'ít nhất một ngửa' là gì?", "Xác suất cả ba đồng đều sấp (TTT) là bao nhiêu trong 8 kết quả?", "Lấy 1 trừ xác suất đó."], "explain": "Biến cố đối: cả ba sấp (TTT), xác suất 1/8. Vậy P(ít nhất một ngửa) = 1 − 1/8 = 7/8.", "why": null},
        {"id": "ch-09", "type": "num", "diff": 3, "skill": "two-dice-table", "source": "vn", "lang": "vi", "q": "Gieo hai con xúc xắc cân đối. Tính xác suất để hiệu của số lớn trừ số nhỏ bằng đúng 2 (phân số tối giản).", "svg": null, "choices": null, "answer": "2/9", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Liệt kê các cặp (a, b) có a − b = 2.", "Cặp (3, 1) và cặp (1, 3) có là hai kết quả khác nhau không?", "Đếm tất cả cặp rồi chia cho 36 và rút gọn."], "explain": "Các cặp có hiệu 2: (1,3), (2,4), (3,5), (4,6) và các cặp đảo lại, tổng 8 cặp. Xác suất 8/36 = 2/9.", "why": null},
        {"id": "ch-10", "type": "mc", "diff": 3, "skill": "probability-misconception", "source": "vn", "lang": "vi", "q": "Bình tung một đồng xu cân đối ba lần liên tiếp đều ra ngửa. Bình nói: 'Lần tung thứ tư khả năng ra sấp lớn hơn 1/2 để cân bằng lại.' Nhận xét nào đúng?", "svg": null, "choices": ["Bình đúng: sấp phải ra nhiều hơn để cân bằng", "Bình sai: các lần tung độc lập, xác suất sấp vẫn là 1/2", "Bình sai: lần thứ tư chắc chắn ra ngửa", "Bình đúng vì đồng xu bị lệch"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Mỗi lần tung đồng xu có phụ thuộc vào các lần tung trước không?", "Đồng xu có 'nhớ' ba lần ngửa vừa rồi không?", "Vậy xác suất ra sấp ở lần thứ tư là bao nhiêu?"], "explain": "Các lần tung độc lập, đồng xu không nhớ kết quả cũ. Xác suất sấp ở lần thứ tư vẫn là 1/2. Nhầm lẫn của Bình là 'ngụy biện con bạc'.", "why": null}
      ]
  },
  "project": {
    "title": "High fives",
    "titleVi": "Năm điểm cao",
    "pages": [
      289
    ],
    "goal": "Điều tra xem khi quay hai chiếc kim quay (hoặc rút hai viên bi) đánh số từ 1 đến 5 và ghi lại số LỚN HƠN trong hai số, mỗi số xuất hiện thường xuyên đến mức nào, rồi so sánh kết quả thực nghiệm với dự đoán lý thuyết.",
    "steps": [
      "Tạo số ngẫu nhiên từ 1 đến 5: dùng hàm random của bảng tính, bỏ 5 viên bi vào túi rồi rút, hoặc làm kim quay 5 ngăn.",
      "Tạo từng cặp số ngẫu nhiên và ghi lại số lớn hơn (ví dụ 2 và 4 thì ghi 4; 3 và 3 thì ghi 3). Lặp lại 100 lần, có thể làm theo nhóm.",
      "Trình bày kết quả bằng bảng tần số và biểu đồ cột. Em có thấy số 5 xuất hiện nhiều nhất không?",
      "Vẽ bảng 5 × 5 cho kim quay A và B, điền số lớn hơn vào mỗi ô. Đếm xem mỗi số 1, 2, 3, 4, 5 xuất hiện bao nhiêu lần trong 25 ô.",
      "Từ bảng, tính xác suất lý thuyết của từng số (số ô / 25), rồi nhân với 100 để dự đoán số lần xuất hiện trong 100 lần thử. So sánh với thí nghiệm."
    ],
    "extensions": [
      "Làm lại với hai kim quay đánh số 1 đến 6 và 1 đến 7: dự đoán số lần xuất hiện từng số, rồi kiểm tra bằng bảng 6 × 6, 7 × 7.",
      "Tìm quy luật: khi kim quay có n số, số k là số lớn hơn trong cặp với xác suất bao nhiêu? Dự đoán cho n = 10 và n = 100.",
      "Thay 'số lớn hơn' bằng 'số nhỏ hơn' hoặc 'tích' của hai số và khám phá xem kết quả khác thế nào."
    ],
    "reflect": [
      "Kết quả thí nghiệm của em có giống dự đoán lý thuyết không? Vì sao có (hoặc không có) sự chênh lệch?",
      "Nếu tăng số lần thử từ 100 lên 1000, em nghĩ kết quả sẽ thay đổi thế nào?",
      "Em thấy quy luật gì trong số lần xuất hiện của các số 1, 2, 3, 4, 5 trong bảng?"
    ]
  }
});

(function () {
  // 🎲 number variants for spaced review (js/variants*.js)
  const GEN = {"13.1-01": "prob-rest", "13.1-03": "dice-sum", "13.1-04": "dice-sum", "13.1-06": "dice-sum", "13.2-01": "exp-prob", "13.2-04": "exp-prob", "13.2-06": "exp-prob", "13.2-03": "expected", "13.2-09": "estimate-pop"};
  window.GAME_DATA.units.filter(function (u) { return u.id === 13; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
