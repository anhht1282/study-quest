window.GAME_DATA = window.GAME_DATA || { units: [] };
window.GAME_DATA.units.push({
  "id": 12,
  "title": "Ratio and proportion",
  "titleVi": "Tỉ số và tỉ lệ",
  "strand": "Number",
  "pages": [
    257,
    274
  ],
  "realm": "Công Trường Vữa Thần",
  "emoji": "🏗️",
  "story": "Nhà xây dựng cần trộn xi măng, cát và sỏi đúng tỉ lệ thì tường mới không đổ, sàn mới không nứt. Em được nhờ làm kỹ sư trưởng của Công Trường Vữa Thần: rút gọn công thức, chia vật liệu công bằng và kiểm tra màu sơn pha. Sai một tỉ số là cả công trình gặp nguy!",
  "glossary": [
    {
      "en": "ratio",
      "vi": "tỉ số",
      "def": "Cách so sánh hai hay nhiều đại lượng cùng loại, viết dạng a : b."
    },
    {
      "en": "simplify",
      "vi": "rút gọn",
      "def": "Chia tất cả các số trong tỉ số cho cùng một số để được tỉ số đơn giản hơn nhưng bằng nó."
    },
    {
      "en": "highest common factor",
      "vi": "ước chung lớn nhất (ƯCLN)",
      "def": "Số lớn nhất chia hết cho tất cả các số đang xét."
    },
    {
      "en": "share",
      "vi": "chia (theo tỉ số)",
      "def": "Chia một lượng thành các phần theo một tỉ số cho trước."
    },
    {
      "en": "proportion",
      "vi": "tỉ lệ (phần)",
      "def": "Phân số hay phần trăm mà một phần chiếm trong toàn thể."
    },
    {
      "en": "direct proportion",
      "vi": "tỉ lệ thuận",
      "def": "Hai đại lượng cùng tăng hoặc cùng giảm với tỉ số không đổi."
    },
    {
      "en": "profit",
      "vi": "lợi nhuận (tiền lãi)",
      "def": "Số tiền bán được trừ đi số tiền bỏ ra."
    },
    {
      "en": "comparison",
      "vi": "sự so sánh",
      "def": "Xem đại lượng nào lớn hơn, đậm hơn hay chiếm tỉ lệ cao hơn."
    }
  ],
  "sections": [
    {
      "id": "12.1",
      "title": "Simplifying ratios",
      "titleVi": "Rút gọn tỉ số",
      "learn": [
        "Tỉ số a : b so sánh hai (hoặc nhiều) đại lượng cùng loại, ví dụ xi măng : cát = 1 : 4.",
        "Trước khi rút gọn phải đưa mọi đại lượng về CÙNG đơn vị (m với cm, kg với g, giờ với phút).",
        "Rút gọn bằng cách chia tất cả các số cho ƯCLN; nếu chưa thấy ƯCLN, cứ chia dần cho các ước chung đến khi không chia được nữa.",
        "Tỉ số có số thập phân: nhân tất cả với 10 (hoặc 100) để thành số nguyên rồi mới rút gọn.",
        "Tỉ số ba phần (a : b : c) phải chia CẢ BA số cho cùng một số."
      ],
      "example": {
        "q": "Rút gọn tỉ số 3 m : 60 cm.",
        "steps": [
          "Đổi cùng đơn vị: 3 m = 300 cm, tỉ số là 300 : 60.",
          "ƯCLN(300, 60) = 60, chia cả hai cho 60.",
          "Kết quả: 5 : 1."
        ],
        "prompts": ["Hai đại lượng đang ở hai đơn vị khác nhau. Em đổi về cùng đơn vị nào, và tỉ số mới là bao nhiêu?","Chia cả hai số cho số nào thì không thể rút gọn thêm? Số đó là gì của 300 và 60?","Viết tỉ số tối giản."],
        "answer": {"type":"text","value":"5:1","accept":["5 : 1","5/1","5 to 1"]},
        "twist": {"q":"Nếu đổi thành 3 m : 80 cm thì tỉ số tối giản là gì?","answer":{"type":"text","value":"15:4","accept":["15 : 4","15/4"]}}
      },
      "questions": [
        {"id": "12.1-01", "type": "text", "diff": 1, "skill": "simplify-ratio", "source": "book", "lang": "en", "q": "Simplify the ratio 12 : 30.", "svg": null, "choices": null, "answer": "2:5", "accept": ["2 : 5", "2: 5", "2 :5"], "tol": 0, "unitLabel": "", "hints": ["Hai số 12 và 30 cùng chia hết cho những số nào?", "Số lớn nhất chia hết cho cả hai (ƯCLN) là bao nhiêu?", "Chia cả hai số cho ƯCLN đó, em được tỉ số nào?"], "explain": "ƯCLN(12, 30) = 6. Chia cả hai số cho 6 được 2 : 5.", "why": null},
        {"id": "12.1-02", "type": "text", "diff": 1, "skill": "simplify-ratio", "source": "book", "lang": "en", "q": "Simplify the ratio 36 : 12.", "svg": null, "choices": null, "answer": "3:1", "accept": ["3 : 1", "3: 1", "3 :1"], "tol": 0, "unitLabel": "", "hints": ["36 là bao nhiêu lần 12?", "Nếu chia cả hai số cho 12 thì mỗi số thành bao nhiêu?", "Viết kết quả dưới dạng a : b."], "explain": "ƯCLN(36, 12) = 12 nên 36 : 12 = 3 : 1.", "why": null},
        {"id": "12.1-03", "type": "text", "diff": 1, "skill": "simplify-ratio3", "source": "book", "lang": "en", "q": "Simplify the ratio 8 : 10 : 12.", "svg": null, "choices": null, "answer": "4:5:6", "accept": ["4 : 5 : 6", "4: 5: 6", "4 :5 :6"], "tol": 0, "unitLabel": "", "hints": ["Ba số 8, 10, 12 đều là số chẵn. Chúng cùng chia hết cho số nào?", "Có số nào lớn hơn 2 chia hết cho cả ba số không?", "Chia từng số cho ƯCLN, viết ba số theo thứ tự."], "explain": "ƯCLN(8, 10, 12) = 2, nên chia cả ba số cho 2 được 4 : 5 : 6.", "why": null},
        {"id": "12.1-04", "howto": "Write the two lengths as a ratio in its simplest form. Enter whole numbers only, without units.", "type": "text", "diff": 2, "skill": "ratio-units", "source": "book", "lang": "en", "q": "Simplify the ratio 500 m : 1 km.", "svg": null, "choices": null, "answer": "1:2", "accept": ["1 : 2", "1: 2", "1 :2"], "tol": 0, "unitLabel": "", "hints": ["Hai đại lượng đang có cùng đơn vị chưa?", "1 km bằng bao nhiêu mét?", "Khi cùng đơn vị, hãy rút gọn 500 : 1000."], "explain": "Đổi 1 km = 1000 m. Tỉ số 500 : 1000, chia cả hai cho 500 được 1 : 2.", "why": null},
        {"id": "12.1-05", "howto": "Write the two masses as a ratio in its simplest form. Enter whole numbers only, without units.", "type": "text", "diff": 2, "skill": "ratio-units", "source": "book", "lang": "en", "q": "Simplify the ratio 1.6 kg : 800 g.", "svg": null, "choices": null, "answer": "2:1", "accept": ["2 : 1", "2: 1", "2 :1"], "tol": 0, "unitLabel": "", "hints": ["Em cần đưa hai khối lượng về cùng đơn vị. 1 kg bằng bao nhiêu gam?", "1,6 kg bằng bao nhiêu gam?", "Rút gọn 1600 : 800."], "explain": "1,6 kg = 1600 g. Tỉ số 1600 : 800 = 2 : 1.", "why": null},
        {"id": "12.1-06", "type": "mc", "diff": 2, "skill": "ratio-three-parts", "source": "book", "lang": "en", "q": "Ben simplified the ratio 6 : 12 : 3 and wrote 1 : 2 : 3. Which is the correct simplest form?", "svg": null, "choices": ["1 : 2 : 3", "2 : 4 : 1", "6 : 12 : 3 không rút gọn được", "1 : 2 : 1"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Ben chia 6 và 12 cho 6. Còn số 3 thì Ben đã làm gì?", "Khi rút gọn tỉ số, ta phải chia mấy số cho cùng một số?", "Tìm ƯCLN của cả ba số 6, 12, 3 rồi chia cả ba."], "explain": "Phải chia CẢ BA số cho cùng một ƯCLN. ƯCLN(6, 12, 3) = 3 nên tỉ số là 2 : 4 : 1. Ben chỉ chia hai số đầu cho 6 và bỏ quên số 3.", "why": null},
        {"id": "12.1-07", "howto": "Simplify the ratio so that every part is a whole number and the parts have no common factor.", "type": "text", "diff": 2, "skill": "ratio-decimals", "source": "book", "lang": "en", "q": "Simplify the ratio 7.5 : 1.5.", "svg": null, "choices": null, "answer": "5:1", "accept": ["5 : 1", "5: 1", "5 :1"], "tol": 0, "unitLabel": "", "hints": ["Làm sao để biến 7,5 và 1,5 thành số nguyên?", "Nhân cả hai số với 10 thì được tỉ số nào?", "Rút gọn 75 : 15 bằng ƯCLN."], "explain": "Nhân cả hai với 10: 75 : 15. ƯCLN = 15 nên tỉ số là 5 : 1.", "why": null},
        {"id": "12.1-08", "howto": "Simplify the ratio so that every part is a whole number and the parts have no common factor.", "type": "text", "diff": 2, "skill": "ratio-decimals", "source": "book", "lang": "en", "q": "Simplify the ratio 2.1 : 0.7 : 1.4.", "svg": null, "choices": null, "answer": "3:1:2", "accept": ["3 : 1 : 2", "3: 1: 2", "3 :1 :2"], "tol": 0, "unitLabel": "", "hints": ["Nhân cả ba số với 10 để bỏ dấu phẩy thập phân.", "Ba số nguyên mới là gì?", "Tìm ƯCLN của 21, 7 và 14 rồi chia."], "explain": "Nhân với 10: 21 : 7 : 14. ƯCLN = 7 nên tỉ số là 3 : 1 : 2.", "why": null},
        {"id": "12.1-09", "howto": "Write the three run times as a ratio, in the order given, in its simplest form. Enter whole numbers only, without units.", "type": "text", "diff": 3, "skill": "ratio-units3", "source": "book", "lang": "en", "q": "Oditi's run times are: Monday 1 hour 40 minutes, Wednesday 50 minutes, Friday 2.5 hours. Write the ratio Monday : Wednesday : Friday in its simplest form.", "svg": null, "choices": null, "answer": "2:1:3", "accept": ["2 : 1 : 3", "2: 1: 3", "2 :1 :3"], "tol": 0, "unitLabel": "", "hints": ["Chọn một đơn vị chung. Phút có dễ không?", "Đổi từng thời gian ra phút: 1 giờ 40 phút, 50 phút, 2,5 giờ.", "Rút gọn ba số em vừa đổi bằng ƯCLN của chúng."], "explain": "Đổi ra phút: 100 : 50 : 150. ƯCLN = 50 nên tỉ số là 2 : 1 : 3. Nếu chỉ đổi mà không rút gọn đủ (ví dụ chia cho 10 thôi) thì kết quả chưa tối giản.", "why": null},
        {"id": "12.1-10", "type": "mc", "diff": 3, "skill": "ratio-units3", "source": "book", "lang": "en", "q": "Marcus mixes 250 ml of white paint, 750 ml of red paint and 1.2 litres of yellow paint. Marcus says the ratio white : red : yellow is 1 : 3 : 5. Sofia says it is 25 : 75 : 12. Who is correct?", "svg": null, "choices": ["Only Marcus is correct", "Only Sofia is correct", "Neither is correct (the ratio is 5 : 15 : 24)", "Both are correct"], "answer": 2, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Hai bạn đã đổi 1,2 lít ra mililit chưa? 1 lít bằng bao nhiêu ml?", "Viết lại tỉ số khi cả ba đều tính bằng ml: 250 : 750 : ?", "Rút gọn bằng ƯCLN của ba số rồi so với hai đáp án."], "explain": "1,2 lít = 1200 ml. Tỉ số 250 : 750 : 1200, chia cho 50 được 5 : 15 : 24. Marcus sai (không khớp), Sofia sai vì lấy 120 ml thay vì 1200 ml. Cả hai đều sai.", "why": null}
      ]
    },
    {
      "id": "12.2",
      "title": "Sharing in a ratio",
      "titleVi": "Chia theo tỉ số",
      "learn": [
        "Bước 1: cộng các số trong tỉ số để biết tổng số phần.",
        "Bước 2: lấy lượng cần chia ÷ tổng số phần = giá trị của MỘT phần.",
        "Bước 3: nhân số phần của từng người với giá trị một phần.",
        "Luôn kiểm tra: tổng các phần chia được phải bằng lượng ban đầu.",
        "Khi tỉ số cho theo tuổi hoặc giờ làm, em có thể rút gọn tỉ số trước để tính dễ hơn."
      ],
      "example": {
        "q": "Chia $750 cho An, Bình, Chi theo tỉ số 2 : 3 : 5.",
        "steps": [
          "Tổng số phần: 2 + 3 + 5 = 10.",
          "Một phần: 750 ÷ 10 = $75.",
          "An: 2 × 75 = $150; Bình: 3 × 75 = $225; Chi: 5 × 75 = $375.",
          "Kiểm tra: 150 + 225 + 375 = 750."
        ],
        "prompts": ["Tỉ số 2 : 3 : 5 gợi ý chia tiền thành tất cả bao nhiêu phần bằng nhau?","Biết tổng tiền và số phần, một phần có giá trị bao nhiêu?","Mỗi người nhận số phần của mình. Mỗi người được bao nhiêu?","Làm sao em biết ba số vừa tìm là hợp lý? Gợi ý: nhìn vào tổng."],
        "answer": {"type":"text","value":"(150, 225, 375)","accept":["150;225;375","150,225,375","(150;225;375)","150 225 375","An 150 Bình 225 Chi 375"]},
        "twist": {"q":"Nếu An nhận $200 và tỉ số vẫn là 2 : 3 : 5 thì Chi nhận bao nhiêu đô?","answer":{"type":"num","value":500}}
      },
      "questions": [
        {"id": "12.2-01", "type": "num", "diff": 1, "skill": "share-ratio", "source": "book", "lang": "en", "q": "Share $80 between So, Luana and Kyra in the ratio 3 : 2 : 5. How much does Kyra get?", "svg": null, "choices": null, "answer": 40, "accept": [], "tol": 0, "unitLabel": "$", "hints": ["Tổng số phần là bao nhiêu (3 + 2 + 5)?", "Mỗi phần có giá trị bao nhiêu ($80 chia cho tổng số phần)?", "Kyra có 5 phần. Nhân giá trị một phần với 5."], "explain": "Tổng 3 + 2 + 5 = 10 phần. Một phần = 80 ÷ 10 = $8. Kyra: 5 × 8 = $40.", "why": null},
        {"id": "12.2-02", "type": "num", "diff": 1, "skill": "share-ratio", "source": "book", "lang": "en", "q": "Share $225 between Mia, Beth and Fen in the ratio 2 : 3 : 4. How much does Beth get?", "svg": null, "choices": null, "answer": 75, "accept": [], "tol": 0, "unitLabel": "$", "hints": ["Cộng các số của tỉ số để tìm tổng số phần.", "225 chia cho tổng số phần được bao nhiêu?", "Beth có 3 phần, hãy nhân lên."], "explain": "2 + 3 + 4 = 9 phần. Một phần = 225 ÷ 9 = $25. Beth: 3 × 25 = $75.", "why": null},
        {"id": "12.2-03", "type": "num", "diff": 2, "skill": "share-ratio", "source": "book", "lang": "en", "q": "Share $432 in the ratio 3 : 5 : 1. How much is the largest share?", "svg": null, "choices": null, "answer": 240, "accept": [], "tol": 0, "unitLabel": "$", "hints": ["Phần nào trong tỉ số lớn nhất?", "Tổng số phần là bao nhiêu và một phần là bao nhiêu tiền?", "Nhân giá trị một phần với phần lớn nhất."], "explain": "3 + 5 + 1 = 9 phần, mỗi phần 432 ÷ 9 = $48. Phần lớn nhất là 5 × 48 = $240.", "why": null},
        {"id": "12.2-04", "type": "num", "diff": 2, "skill": "share-ratio", "source": "book", "lang": "en", "q": "Dave, Ella and Jia share an electricity bill of $192 in the ratio 3 : 4 : 5. How much does Ella pay?", "svg": null, "choices": null, "answer": 64, "accept": [], "tol": 0, "unitLabel": "$", "hints": ["Ella ứng với số nào trong tỉ số 3 : 4 : 5?", "Tổng số phần là 12. Một phần là bao nhiêu tiền?", "Nhân với số phần của Ella. Em có thể kiểm tra: tổng ba người phải bằng $192."], "explain": "3 + 4 + 5 = 12 phần; 192 ÷ 12 = $16 một phần. Ella: 4 × 16 = $64. Kiểm tra: 48 + 64 + 80 = 192.", "why": null},
        {"id": "12.2-05", "type": "num", "diff": 2, "skill": "share-ratio-compare", "source": "book", "lang": "en", "q": "A choir has men, women and children in the ratio 5 : 7 : 3. There are 285 members altogether. How many more women than men are there?", "svg": null, "choices": null, "answer": 38, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tổng số phần là bao nhiêu, và một phần là bao nhiêu thành viên?", "Số phụ nữ hơn nam là hơn mấy phần?", "Nhân số phần chênh lệch với giá trị một phần."], "explain": "5 + 7 + 3 = 15 phần, mỗi phần 285 ÷ 15 = 19 người. Phụ nữ nhiều hơn nam 7 − 5 = 2 phần, tức 2 × 19 = 38 người.", "why": null},
        {"id": "12.2-06", "type": "mc", "diff": 2, "skill": "share-ratio", "source": "book", "lang": "en", "q": "Share $60 in the ratio 1 : 4. Which pair of amounts is correct?", "svg": null, "choices": ["$30 and $120", "$12 and $48", "$20 and $40", "$10 and $50"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tỉ số 1 : 4 có tất cả bao nhiêu phần? (Cộng hai số lại.)", "Một phần có giá trị bao nhiêu nếu chia $60 cho tổng số phần?", "Tổng hai phần chia được có bằng $60 không? Đáp án nào đúng?"], "explain": "1 + 4 = 5 phần, một phần là 60 ÷ 5 = $12, nên các phần là $12 và $48. Lỗi hay gặp: chia 60 cho 2 (số lượng người) thay vì cho tổng số phần, ra $30 và $120 (tổng vượt $60).", "why": null},
        {"id": "12.2-07", "type": "num", "diff": 2, "skill": "share-ratio", "source": "book", "lang": "en", "q": "Aden, Eli, Lily and Ziva share project earnings of $450 in the ratio of hours worked: Aden 6, Eli 4, Lily 3, Ziva 5. How much does Ziva earn?", "svg": null, "choices": null, "answer": 125, "accept": [], "tol": 0, "unitLabel": "$", "hints": ["Tỉ số theo giờ làm là 6 : 4 : 3 : 5. Tổng bao nhiêu giờ?", "Mỗi giờ (một phần) được trả bao nhiêu?", "Ziva làm 5 giờ. Nhân lên."], "explain": "Tổng 6 + 4 + 3 + 5 = 18 giờ. $450 ÷ 18 = $25 mỗi giờ. Ziva: 5 × 25 = $125.", "why": null},
        {"id": "12.2-08", "type": "num", "diff": 3, "skill": "share-ratio-context", "source": "book", "lang": "en", "q": "The angles of a triangle are in the ratio 2 : 3 : 5. Work out the size of the largest angle.", "svg": null, "choices": null, "answer": 90, "accept": [], "tol": 0, "unitLabel": "°", "hints": ["Tổng ba góc của một tam giác là bao nhiêu độ?", "Chia số độ đó cho tổng số phần (2 + 3 + 5).", "Góc lớn nhất ứng với phần nào? Nhân lên."], "explain": "Tổng ba góc = 180°. Có 2 + 3 + 5 = 10 phần, mỗi phần 18°. Góc lớn nhất: 5 × 18 = 90°.", "why": null},
        {"id": "12.2-09", "type": "num", "diff": 3, "skill": "share-ratio-reasoning", "source": "book", "lang": "en", "q": "Every year David shares $300 among his children in the ratio of their ages. This year they are 4, 9 and 11. In two years' time, how many dollars less will the oldest child get than this year?", "svg": null, "choices": null, "answer": 7.5, "accept": [], "tol": 0.01, "unitLabel": "$", "hints": ["Năm nay tỉ số là 4 : 9 : 11. Tổng bao nhiêu phần, người lớn nhất được bao nhiêu?", "Sau 2 năm tuổi là 6, 11, 13. Người lớn nhất nhận bao nhiêu?", "Lấy kết quả năm nay trừ kết quả sau 2 năm."], "explain": "Năm nay: 300 ÷ 24 = 12,5 một phần; con lớn nhận 11 × 12,5 = $137,5. Sau 2 năm: 6 + 11 + 13 = 30 phần, mỗi phần $10; con lớn nhận 13 × 10 = $130. Hiệu: 137,5 − 130 = $7,5.", "why": null},
        {"id": "12.2-10", "type": "num", "diff": 3, "skill": "share-ratio-profit", "source": "book", "lang": "en", "q": "Zhi, Zhen and Lin buy a house for $180 000. Zhi pays $60 000, Zhen pays $90 000 and Lin pays the rest. Five years later they sell it for $228 000 and share the money in the same ratio as they paid. How many dollars profit does Lin make?", "svg": null, "choices": null, "answer": 8000.0, "accept": [], "tol": 0, "unitLabel": "$", "hints": ["Lin đã trả bao nhiêu tiền? (180 000 − 60 000 − 90 000)", "Tỉ số 60 000 : 90 000 : 30 000 rút gọn thành gì?", "Lin nhận bao nhiêu từ $228 000? Lãi = số nhận − số đã bỏ ra."], "explain": "Lin trả $30 000. Tỉ số 60 : 90 : 30 = 2 : 3 : 1, tổng 6 phần. Lin nhận 228 000 ÷ 6 = $38 000. Lãi = 38 000 − 30 000 = $8000 (không phải $9000).", "why": null}
      ]
    },
    {
      "id": "12.3",
      "title": "Ratio and direct proportion",
      "titleVi": "Tỉ số và tỉ lệ thuận",
      "learn": [
        "Tỉ số a : b ứng với phân số a/(a + b) và b/(a + b) của toàn thể.",
        "Muốn tìm số lượng một phần: có thể chia theo phần (tìm một phần rồi nhân) hoặc lấy phân số của tổng số.",
        "Ngược lại, nếu biết phân số a/c của toàn thể thì phần còn lại là (c − a)/c và tỉ số là a : (c − a).",
        "Tổng số lượng phải là bội của tổng số phần (a + b) khi các lượng đều nguyên.",
        "Để so sánh tỉ lệ của hai hỗn hợp, đổi mỗi tỉ số thành phân số của toàn thể rồi quy đồng, hoặc đổi ra số thập phân, phần trăm."
      ],
      "example": {
        "q": "Sơn hồng A pha đỏ : trắng = 3 : 5, sơn hồng B pha đỏ : trắng = 4 : 7. Màu nào đậm hơn?",
        "steps": [
          "Phân số đỏ của A: 3/8; của B: 4/11.",
          "Quy đồng mẫu 88: 3/8 = 33/88, 4/11 = 32/88.",
          "33/88 > 32/88 nên A có tỉ lệ đỏ lớn hơn, A đậm hơn."
        ],
        "prompts": ["Độ đậm phụ thuộc vào phần đỏ trong cả hỗn hợp, không phải tỉ số đỏ : trắng. Em tính phần đỏ của mỗi loại bằng phân số nào?","Hai phân số 3/8 và 4/11 khác mẫu. Em chọn mẫu số chung nào để so sánh?","So hai tử số sau khi quy đồng: loại nào có nhiều đỏ hơn, và vì thế màu ra sao?"],
        "answer": {"type":"text","value":"A","accept":["a","sơn A","son A","Sơn hồng A","màu A"]},
        "twist": {"q":"Sơn hồng C pha đỏ : trắng = 2 : 3. Phần đỏ của C là bao nhiêu phần của hỗn hợp (viết phân số)?","answer":{"type":"num","value":"2/5"}}
      },
      "questions": [
        {"id": "12.3-01", "type": "num", "diff": 1, "skill": "ratio-to-fraction", "source": "book", "lang": "en", "q": "A bag of nuts holds cashews and peanuts in the ratio 2 : 7. What fraction of the nuts are cashews? (Give a fraction in simplest form.)", "svg": null, "choices": null, "answer": "2/9", "accept": [], "tol": 0, "unitLabel": "", "hints": ["Có tất cả bao nhiêu phần (2 + 7)?", "Cashew chiếm mấy phần trong tổng số?", "Viết phân số: số phần cashew / tổng số phần."], "explain": "Tổng 2 + 7 = 9 phần, cashew chiếm 2 phần nên là 2/9.", "why": null},
        {"id": "12.3-02", "type": "num", "diff": 1, "skill": "ratio-to-fraction-amount", "source": "book", "lang": "en", "q": "A tin holds coconut and ginger biscuits in the ratio 3 : 7. There are 50 biscuits. How many coconut biscuits are there?", "svg": null, "choices": null, "answer": 15, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tổng số phần là bao nhiêu?", "Coconut chiếm phân số nào của hộp? Tính phân số của 50.", "3/10 của 50 là bao nhiêu?"], "explain": "Tổng 3 + 7 = 10 phần. Coconut = 3/10 × 50 = 15 chiếc.", "why": null},
        {"id": "12.3-03", "type": "num", "diff": 2, "skill": "ratio-to-fraction-amount", "source": "book", "lang": "en", "q": "A school tennis club has 35 members. The ratio of boys to girls is 4 : 3. How many girls are in the club?", "svg": null, "choices": null, "answer": 15, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tổng số phần là bao nhiêu?", "Một phần ứng với bao nhiêu thành viên?", "Nữ chiếm 3 phần."], "explain": "4 + 3 = 7 phần; 35 ÷ 7 = 5 người một phần. Nữ: 3 × 5 = 15 em.", "why": null},
        {"id": "12.3-04", "howto": "Write the ratio in the order asked: number of blue cubes, then number of yellow cubes.", "type": "text", "diff": 2, "skill": "fraction-to-ratio", "source": "book", "lang": "en", "q": "A bag contains blue and yellow cubes. 3/11 of the cubes are blue. Write the ratio blue : yellow.", "svg": null, "choices": null, "answer": "3:8", "accept": ["3 : 8", "3: 8", "3 :8"], "tol": 0, "unitLabel": "", "hints": ["Nếu 3/11 là xanh thì phần còn lại (1 − 3/11) là bao nhiêu?", "Phân số vàng là 8/11. Vậy trong 11 phần có mấy phần xanh, mấy phần vàng?", "Viết tỉ số xanh : vàng bằng số phần."], "explain": "Vàng = 1 − 3/11 = 8/11. Cứ 11 phần thì 3 phần xanh, 8 phần vàng nên tỉ số là 3 : 8 (không phải 3 : 11).", "why": null},
        {"id": "12.3-05", "howto": "Write the ratio in the order asked: sandwiches first, then cakes.", "type": "text", "diff": 2, "skill": "fraction-to-ratio", "source": "book", "lang": "en", "q": "A café sells sandwiches and cakes. 4/9 of the items it sells are cakes. Write the ratio sandwiches : cakes.", "svg": null, "choices": null, "answer": "5:4", "accept": ["5 : 4", "5: 4", "5 :4"], "tol": 0, "unitLabel": "", "hints": ["Cake là 4/9 thì sandwich là bao nhiêu phần chín?", "Còn 9 − 4 = ? phần là sandwich.", "Chú ý thứ tự: sandwich trước, cake sau."], "explain": "Sandwich = 9 − 4 = 5 phần trên 9, nên tỉ số sandwich : cake = 5 : 4.", "why": null},
        {"id": "12.3-06", "type": "mc", "diff": 2, "skill": "ratio-whole-multiple", "source": "book", "lang": "en", "q": "The ratio of boys to girls in class 8C is 5 : 7. Which of these could be the number of learners in the class?", "svg": null, "choices": ["25", "30", "36", "38"], "answer": 2, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tổng số phần của tỉ số 5 : 7 là bao nhiêu?", "Số học sinh phải là một số như thế nào so với tổng số phần?", "Trong các lựa chọn, số nào chia hết cho 12?"], "explain": "Số học sinh phải là bội của 5 + 7 = 12. Trong các số đã cho chỉ có 36 chia hết cho 12. Lỗi hay gặp: chọn 25 vì là bội của 5 mà quên cộng hai phần.", "why": null},
        {"id": "12.3-07", "type": "num", "diff": 3, "skill": "ratio-whole-multiple", "source": "book", "lang": "en", "q": "The ratio of men to women in a book club is 3 : 5. The number of adults in the club is more than 20 and fewer than 30. How many adults are in the club?", "svg": null, "choices": null, "answer": 24, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tổng số phần của 3 : 5 là bao nhiêu?", "Số thành viên phải là bội của số đó. Liệt kê các bội đó.", "Bội nào nằm giữa 20 và 30?"], "explain": "Tổng số thành viên là bội của 3 + 5 = 8: 8, 16, 24, 32… Chỉ có 24 nằm giữa 20 và 30.", "why": null},
        {"id": "12.3-08", "type": "mc", "diff": 3, "skill": "compare-proportions", "source": "book", "lang": "en", "q": "Sky blue paint is made from blue and white in the ratio 3 : 2. Sea blue is made from blue and white in the ratio 7 : 3. Which shade is lighter?", "svg": null, "choices": ["Sky blue", "Sea blue", "They are equally light"], "answer": 0, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Màu nào sáng hơn là màu có tỉ lệ trắng lớn hơn. Tính phân số trắng của mỗi màu.", "Sky blue có trắng 2/5, Sea blue có trắng 3/10. Hãy so sánh hai phân số.", "Đưa về cùng mẫu 10 rồi so sánh."], "explain": "Trắng của Sky blue: 2/5 = 4/10. Trắng của Sea blue: 3/10. 4/10 > 3/10 nên Sky blue sáng hơn. Lỗi hay gặp: so sánh trực tiếp số 2 và 3 trong hai tỉ số mà không để ý tổng số phần khác nhau (5 và 10).", "why": null},
        {"id": "12.3-09", "type": "mc", "diff": 3, "skill": "compare-proportions", "source": "book", "lang": "en", "q": "The Seals swimming club has 13 girls and 17 boys. The Sharks club has 17 girls and 23 boys. Which club has the higher proportion of boys?", "svg": null, "choices": ["Seals", "Sharks", "Both are equal"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Phân số nam của Seals là bao nhiêu (nam / tổng)?", "Phân số nam của Sharks là bao nhiêu? Hai mẫu 30 và 40 khác nhau.", "Đổi sang số thập phân hoặc cùng mẫu (120) để so sánh."], "explain": "Seals: 17/30 = 0,5667. Sharks: 23/40 = 0,575. Cùng mẫu 120: 68/120 và 69/120 nên Sharks có tỉ lệ nam cao hơn.", "why": null},
        {"id": "12.3-10", "type": "mc", "diff": 3, "skill": "compare-proportions", "source": "book", "lang": "en", "q": "Lin has black and white counters in the ratio 40 : 840. Ian has them in the ratio 25 : 535. Who has the greater proportion of black counters?", "svg": null, "choices": ["Lin", "Ian", "Equal"], "answer": 0, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Phân số đen của Lin là 40/(40 + 840). Rút gọn nó.", "Phân số đen của Ian là 25/(25 + 535). Rút gọn nó.", "So sánh hai phân số, ví dụ đổi ra số thập phân."], "explain": "Lin: 40/880 = 1/22 ≈ 0,04545. Ian: 25/560 = 5/112 ≈ 0,04464. Lin có tỉ lệ đen lớn hơn một chút.", "why": null}
      ]
    }
  ],
  "challenge": {
    "title": "Thử thách Việt Nam",
    "intro": "Các bài toán tỉ số, tỉ lệ kiểu kiểm tra và học sinh giỏi lớp 7–8 đang chờ em ở cuối công trường!",
    "questions": [
        {"id": "ch-01", "type": "num", "diff": 2, "skill": "equal-ratios", "source": "vn", "lang": "vi", "q": "Cho ba số x, y, z thỏa mãn x/3 = y/5 = z/7 và x + y + z = 75. Tính z.", "svg": null, "choices": null, "answer": 35, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Đặt x/3 = y/5 = z/7 = k, hãy biểu diễn x, y, z theo k.", "Thay vào x + y + z = 75 để tìm k.", "Tính z = 7k."], "explain": "Đặt x = 3k, y = 5k, z = 7k. Khi đó 15k = 75 nên k = 5 và z = 35.", "why": null},
        {"id": "ch-02", "type": "num", "diff": 2, "skill": "equal-ratios", "source": "vn", "lang": "vi", "q": "Biết x/2 = y/5 và y − x = 24. Tính x + y.", "svg": null, "choices": null, "answer": 56, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Đặt x = 2k và y = 5k.", "y − x = 3k = 24 cho em k bằng bao nhiêu?", "Tính x + y = 7k."], "explain": "x = 2k, y = 5k, y − x = 3k = 24 nên k = 8. Vậy x + y = 7k = 56.", "why": null},
        {"id": "ch-03", "type": "num", "diff": 3, "skill": "inverse-share", "source": "vn", "lang": "vi", "q": "Chia 780 viên bi cho ba bạn A, B, C tỉ lệ nghịch với 2, 3, 4. Hỏi bạn A được bao nhiêu viên bi?", "svg": null, "choices": null, "answer": 360, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tỉ lệ nghịch với 2, 3, 4 nghĩa là tỉ lệ thuận với 1/2, 1/3, 1/4. Quy đồng mẫu 12 thì được tỉ số nào?", "Tỉ số A : B : C = 6 : 4 : 3. Tổng số phần là bao nhiêu?", "780 chia cho tổng số phần rồi nhân với 6."], "explain": "A : B : C = 1/2 : 1/3 : 1/4 = 6 : 4 : 3, tổng 13 phần. Một phần = 780 ÷ 13 = 60. A nhận 6 × 60 = 360 viên (B 240, C 180).", "why": null},
        {"id": "ch-04", "type": "num", "diff": 2, "skill": "work-rate", "source": "vn", "lang": "vi", "q": "12 công nhân làm xong một công việc trong 15 ngày (năng suất mỗi người như nhau). Muốn xong trong 9 ngày thì cần thêm bao nhiêu công nhân?", "svg": null, "choices": null, "answer": 8, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Số công nhân và số ngày là hai đại lượng tỉ lệ thuận hay tỉ lệ nghịch?", "Tổng khối lượng công việc là bao nhiêu 'công' (12 × 15)?", "Cần bao nhiêu người để làm 180 công trong 9 ngày? Rồi trừ đi 12."], "explain": "Tỉ lệ nghịch: 12 × 15 = 180 công. Làm trong 9 ngày cần 180 ÷ 9 = 20 người, nên cần thêm 20 − 12 = 8 công nhân.", "why": null},
        {"id": "ch-05", "type": "num", "diff": 3, "skill": "mixture", "source": "vn", "lang": "vi", "q": "Một hỗn hợp rượu và nước có tỉ lệ rượu : nước = 3 : 2 và có 60 lít. Cần thêm bao nhiêu lít nước để tỉ lệ rượu : nước trở thành 1 : 1?", "svg": null, "choices": null, "answer": 12, "accept": [], "tol": 0, "unitLabel": "lít", "hints": ["Hỗn hợp 60 lít chứa bao nhiêu lít rượu, bao nhiêu lít nước?", "Thêm nước thì lượng rượu có đổi không?", "Để rượu : nước = 1 : 1, lượng nước phải bằng bao nhiêu? Cần thêm bao nhiêu?"], "explain": "Rượu = 3/5 × 60 = 36 lít, nước = 24 lít. Lượng rượu giữ nguyên nên nước phải bằng 36 lít. Cần thêm 36 − 24 = 12 lít nước.", "why": null},
        {"id": "ch-06", "type": "num", "diff": 2, "skill": "map-scale", "source": "vn", "lang": "vi", "q": "Trên bản đồ tỉ lệ 1 : 500 000, khoảng cách giữa hai thành phố là 7,2 cm. Khoảng cách thực tế giữa hai thành phố là bao nhiêu km?", "svg": null, "choices": null, "answer": 36, "accept": [], "tol": 0.01, "unitLabel": "km", "hints": ["Tỉ lệ 1 : 500 000 nghĩa là 1 cm trên bản đồ ứng với bao nhiêu cm thực tế?", "Tính 7,2 × 500 000 (đơn vị cm).", "Đổi cm ra km: 1 km = 100 000 cm."], "explain": "7,2 × 500 000 = 3 600 000 cm = 36 km.", "why": null},
        {"id": "ch-07", "type": "num", "diff": 3, "skill": "age-ratio", "source": "vn", "lang": "vi", "q": "Hiện nay tuổi bố hơn tuổi con 30 tuổi và tỉ số tuổi bố : tuổi con là 7 : 2. Sau bao nhiêu năm nữa thì tuổi bố gấp 3 lần tuổi con?", "svg": null, "choices": null, "answer": 3, "accept": [], "tol": 0, "unitLabel": "năm", "hints": ["Hiệu số tuổi tương ứng mấy phần? Từ đó tìm tuổi của con và bố hiện nay.", "Hiệu số tuổi không đổi theo thời gian. Khi bố gấp 3 lần con thì hiệu tương ứng mấy phần?", "Từ đó tìm tuổi con lúc đó rồi so với tuổi con hiện nay."], "explain": "7 − 2 = 5 phần = 30 tuổi nên 1 phần = 6: con 12 tuổi, bố 42 tuổi. Khi bố gấp 3 lần con, hiệu 30 tuổi ứng với 2 phần nên con 15 tuổi. Vậy sau 15 − 12 = 3 năm.", "why": null},
        {"id": "ch-08", "type": "num", "diff": 3, "skill": "equal-ratios", "source": "vn", "lang": "vi", "q": "Cho a : b = 2 : 3 và b : c = 4 : 5. Biết a + b + c = 140. Tính c.", "svg": null, "choices": null, "answer": 60, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Làm cho số b ở hai tỉ số bằng nhau: BCNN của 3 và 4 là bao nhiêu?", "Viết a : b : c bằng số nguyên (8 : 12 : 15), tính tổng số phần.", "140 chia tổng số phần rồi nhân với phần của c."], "explain": "a : b = 8 : 12 và b : c = 12 : 15 nên a : b : c = 8 : 12 : 15, tổng 35 phần. Một phần = 140 ÷ 35 = 4, c = 15 × 4 = 60.", "why": null},
        {"id": "ch-09", "type": "num", "diff": 3, "skill": "work-rate", "source": "vn", "lang": "vi", "q": "Vòi thứ nhất chảy một mình đầy bể trong 6 giờ, vòi thứ hai chảy một mình đầy bể trong 12 giờ. Mở cả hai vòi cùng lúc thì sau bao nhiêu giờ bể đầy?", "svg": null, "choices": null, "answer": 4, "accept": [], "tol": 0, "unitLabel": "giờ", "hints": ["Trong 1 giờ vòi thứ nhất chảy được mấy phần bể?", "Trong 1 giờ vòi thứ hai chảy được mấy phần bể? Cộng hai kết quả.", "Nếu mỗi giờ được 1/4 bể thì cần mấy giờ để đầy cả bể?"], "explain": "Một giờ: 1/6 + 1/12 = 3/12 = 1/4 bể. Vậy đầy bể sau 4 giờ.", "why": null},
        {"id": "ch-10", "type": "mc", "diff": 3, "skill": "inverse-proportion", "source": "vn", "lang": "vi", "q": "Hai đại lượng x và y tỉ lệ nghịch với nhau. Nếu x tăng 25% thì y thay đổi thế nào?", "svg": null, "choices": ["y giảm 25%", "y giảm 20%", "y giảm 15%", "y tăng 20%"], "answer": 1, "accept": [], "tol": 0, "unitLabel": "", "hints": ["Tích x × y có đổi không khi hai đại lượng tỉ lệ nghịch?", "Nếu x mới là 1,25 lần x cũ thì y mới phải là bao nhiêu lần y cũ?", "Tính 1 ÷ 1,25 rồi suy ra phần trăm giảm."], "explain": "Vì x·y không đổi nên y mới = y ÷ 1,25 = 0,8y, tức giảm 20%. Lỗi hay gặp: nghĩ tăng 25% thì giảm 25% — sai vì phần trăm lấy trên giá trị khác nhau.", "why": null}
      ]
  },
  "project": null
});

(function () {
  // 🎲 number variants for spaced review (js/variants*.js)
  const GEN = {"12.2-01": "share-ratio3", "12.2-02": "share-ratio3", "12.2-03": "share-ratio3", "12.2-04": "share-ratio3", "12.2-05": "ratio-diff", "12.2-08": "ratio-angles", "12.3-01": "ratio-frac", "12.3-02": "ratio-part", "12.3-03": "ratio-part"};
  window.GAME_DATA.units.filter(function (u) { return u.id === 12; }).forEach(function (u) {
    u.sections.forEach(function (s) { s.questions.forEach(function (q) { if (GEN[q.id]) q.gen = GEN[q.id]; }); });
  });
})();
