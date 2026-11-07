// 🚀 Extension quests — Science 7, Unit 3 Forces and energy. Self-written; every fact comes from the stage's own
// `learn` / `learnDetail` / `example`. Types: whatif, odd, fair, predict. See MATH_QUESTS_GUIDE.md § Science.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 3,
    sections: {
      "3.1": [
        {
          id: "3.1-x1", type: "whatif", sim: "weight", base: 112, unitLabel: "N",
          ask: "Phi hành gia 70 kg có trọng lượng 112 N trên Mặt Trăng (1,6 N/kg). Nếu người đó đứng trên Sao Hỏa, nơi cường độ hấp dẫn là 3,7 N/kg, trọng lượng là bao nhiêu niutơn?",
          why: "Đổi một số trong W = m × g rồi dự đoán kết quả giúp em thấy rõ cái gì đổi (trọng lượng) và cái gì giữ nguyên (khối lượng).",
          answer: function () { return 259; },
          tol: 0.01,
          reasons: [
            "Khối lượng vẫn là 70 kg; chỉ thay 1,6 bằng 3,7 nên W = 70 × 3,7",
            "Lên hành tinh khác thì khối lượng cũng giảm theo, nên trọng lượng nhỏ hơn 112 N",
            "Ở đâu cũng dùng 10 N/kg, nên trọng lượng là 700 N"
          ],
          reason: 0,
          sample: { guess: "259", reason: 0 }
        },
        {
          id: "3.1-x2", type: "odd",
          ask: "Cái nào khác loại? Với mỗi đại lượng, hãy tìm một lý do khiến chỉ nó khác ba đại lượng còn lại.",
          why: "Người ta hay nhầm khối lượng với trọng lượng; so sánh chúng từ nhiều phía giúp em dùng đúng từ và đúng đơn vị.",
          items: ["khối lượng", "trọng lượng", "lực tiếp xúc", "cường độ hấp dẫn"],
          props: [
            { id: "kg", text: "đo bằng kilôgam", has: [0] },
            { id: "same", text: "giữ nguyên khi đưa vật từ Trái Đất lên Mặt Trăng", has: [0] },
            { id: "force", text: "là một lực, đo bằng niutơn", has: [1, 2] },
            { id: "up", text: "hướng lên, do bề mặt đỡ vật đẩy ra", has: [2] },
            { id: "nkg", text: "đo bằng niutơn trên kilôgam (N/kg)", has: [3] },
            { id: "pull", text: "là lực hấp dẫn kéo vật về tâm Trái Đất", has: [1] }
          ],
          sample: { item: 2, prop: "up" }
        },
        {
          id: "3.1-x3", type: "fair",
          ask: "Em có lực kế và các quả nặng, và tưởng tượng có thể mang chúng đi khắp Hệ Mặt Trời. Thiết kế thí nghiệm công bằng — em nghĩ ra được bao nhiêu thí nghiệm khác nhau?",
          why: "Giữ nguyên mọi thứ trừ một điều là cách duy nhất để biết chắc trọng lượng phụ thuộc vào khối lượng, vào nơi đo hay vào khoảng cách.",
          factors: [
            { id: "load", text: "khối lượng các quả nặng treo vào lực kế" },
            { id: "field", text: "nơi đo (Trái Đất, Mặt Trăng, Sao Mộc…) — tức cường độ hấp dẫn" },
            { id: "far", text: "khoảng cách từ quả nặng tới Trái Đất (ví dụ đi xa trên tàu vũ trụ)" }
          ],
          outcomes: [
            { id: "weight", text: "trọng lượng (số chỉ lực kế, N)" },
            { id: "mass", text: "khối lượng của quả nặng (kg)" }
          ],
          links: [
            { change: "load", measure: "weight", effect: "up" },
            { change: "load", measure: "mass", effect: "up" },
            { change: "field", measure: "weight", effect: "up" },
            { change: "field", measure: "mass", effect: "same" },
            { change: "far", measure: "weight", effect: "down" },
            { change: "far", measure: "mass", effect: "same" }
          ],
          sample: { change: "field", measure: "mass", keep: ["load", "far"], effect: "same" }
        }
      ],
      "3.2": [
        {
          id: "3.2-x1", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Phân biệt vật thật với mô hình, ngôi sao với hành tinh giúp em kể lại mạch lạc câu chuyện Hệ Mặt Trời hình thành.",
          items: ["một tinh vân", "Mặt Trời", "Trái Đất", "mô hình máy tính về sự hình thành Hệ Mặt Trời"],
          props: [
            { id: "cloud", text: "là đám mây bụi và khí, nơi các ngôi sao đang ra đời", has: [0] },
            { id: "hot", text: "đã lớn quá một kích thước nên đủ nóng để thành ngôi sao", has: [1] },
            { id: "orbit", text: "chuyển động theo quỹ đạo quanh Mặt Trời", has: [2] },
            { id: "spin", text: "tự quay quanh trục cùng chiều với chiều các hành tinh quay quanh Mặt Trời", has: [1, 2] },
            { id: "gravity", text: "có khối lượng nên gây ra lực hấp dẫn", has: [0, 1, 2] },
            { id: "limit", text: "không phải vật thật nên có thể có hạn chế", has: [3] }
          ],
          sample: { item: 3, prop: "limit" }
        },
        {
          id: "3.2-x2", type: "predict",
          ask: "Giả thuyết: Hệ Mặt Trời hình thành từ một đám mây bụi và khí, giống những ngôi sao trẻ có đĩa bụi dẹt bao quanh. Nếu giả thuyết đúng, em dự đoán các hành tinh quay quanh Mặt Trời thế nào?",
          why: "Từ một giả thuyết suy ra điều có thể kiểm tra được là bước then chốt của cách thứ hai nhà khoa học dùng để tìm hiểu quá khứ.",
          options: [
            "Mỗi hành tinh một chiều riêng, trên những mặt phẳng khác nhau",
            "Cùng một chiều, và gần như trong cùng một mặt phẳng",
            "Cùng một chiều, nhưng nghiêng đủ mọi hướng như các đường trên quả bóng"
          ],
          answer: 1,
          reasons: [
            "Lực hấp dẫn của Mặt Trời kéo mỗi hành tinh theo một hướng khác nhau",
            "Các hành tinh hình thành ở những nơi khác nhau trong vũ trụ rồi mới bị Mặt Trời kéo về",
            "Mọi hành tinh hình thành từ cùng một đĩa bụi và khí dẹt quanh Mặt Trời trẻ"
          ],
          reason: 2,
          observe: "Đúng vậy: mọi hành tinh quay quanh Mặt Trời cùng một chiều, trong cùng một mặt phẳng, nên Hệ Mặt Trời trông dẹt. Những sự thật này là bằng chứng ủng hộ giả thuyết.",
          sample: { option: 1, reason: 2 }
        },
        {
          id: "3.2-x3", type: "predict",
          ask: "Một bạn nói: \"Sao Kim tự quay ngược chiều, vậy giả thuyết tinh vân sai rồi, bỏ đi thôi!\" Theo em, nhà khoa học kết luận thế nào?",
          why: "Biết cân nhắc bằng chứng ủng hộ và bằng chứng có vẻ mâu thuẫn giúp em đánh giá mọi lí thuyết khoa học sau này.",
          options: [
            "Bỏ giả thuyết ngay, vì nó đã sai",
            "Giả thuyết đã được chứng minh chắc chắn, Sao Kim không quan trọng",
            "Giữ giả thuyết vì hầu hết bằng chứng ủng hộ, và ghi nhận điều mâu thuẫn"
          ],
          answer: 2,
          reasons: [
            "Hầu hết sự thật ủng hộ giả thuyết; một vài điều có vẻ mâu thuẫn thì cần được giải thích thêm",
            "Chỉ cần một sự thật trái ngược là giả thuyết phải bị bỏ",
            "Mô hình máy tính đã chứng minh giả thuyết nên nó không thể sai"
          ],
          reason: 0,
          observe: "Nhà khoa học nói hầu hết bằng chứng ủng hộ giả thuyết, còn Sao Kim tự quay ngược chiều thì có vẻ mâu thuẫn với nó. Giả thuyết chưa được \"chứng minh\": không ai quan sát được Hệ Mặt Trời hình thành, và mô hình dùng để kiểm tra nó cũng có hạn chế.",
          sample: { option: 2, reason: 0 }
        }
      ],
      "3.3": [
        {
          id: "3.3-x1", type: "predict",
          ask: "Tưởng tượng lực hấp dẫn của Mặt Trời bỗng dưng ngừng kéo Trái Đất. Trái Đất sẽ chuyển động thế nào?",
          why: "Hiểu vì sao cần một lực luôn hướng về Mặt Trời giúp em giải thích mọi quỹ đạo — của hành tinh, sao chổi hay tiểu hành tinh.",
          options: [
            "Bay theo đường thẳng ra ngoài vũ trụ",
            "Dừng lại ngay tại chỗ",
            "Rơi thẳng vào Mặt Trời",
            "Vẫn đi vòng tròn như cũ"
          ],
          answer: 0,
          reasons: [
            "Không còn lực kéo thì vật sẽ chậm dần rồi dừng lại",
            "Muốn đi theo đường tròn phải có lực làm đổi hướng; mất lực đó, hành tinh đi thẳng",
            "Trái Đất đã quen với quỹ đạo nên vẫn đi vòng như trước"
          ],
          reason: 1,
          observe: "Trái Đất sẽ bay theo đường thẳng ra ngoài vũ trụ. Trong chân không không có lực cản không khí làm nó chậm lại, nên nó cũng không dừng lại; chính lực hấp dẫn hướng về Mặt Trời mới giữ nó trên quỹ đạo.",
          sample: { option: 0, reason: 1 }
        },
        {
          id: "3.3-x2", type: "whatif", base: 108000, unitLabel: "km",
          ask: "Trái Đất đi 30 km/s nên trong 1 giờ đi được 108 000 km. Sao Hỏa ở xa Mặt Trời hơn và đi 24 km/s. Trong 1 giờ Sao Hỏa đi được bao nhiêu kilômét?",
          why: "Dùng bảng tốc độ để tính và so sánh giúp em thấy xu hướng: càng xa Mặt Trời, hành tinh càng đi chậm.",
          answer: function () { return 24 * 3600; },
          tol: 0.5,
          reasons: [
            "Ở xa hơn phải đi hết vòng lớn hơn, nên Sao Hỏa đi nhanh hơn Trái Đất",
            "Trong chân không không có lực cản, nên mọi hành tinh đi cùng tốc độ",
            "Sao Hỏa bị Mặt Trời hút yếu hơn nên chậm hơn; quãng đường = 24 × 3600"
          ],
          reason: 2,
          sample: { guess: "86400", reason: 2 }
        },
        {
          id: "3.3-x3", type: "odd",
          ask: "Cái nào khác loại? Bốn thứ đang chuyển động — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "So sánh chuyển động trên Trái Đất với chuyển động trong vũ trụ giúp em nhận ra lực nào đang tác dụng ở mỗi nơi.",
          items: ["Sao Thủy", "Sao Hải Vương", "Trái Đất", "máy bay vừa hạ cánh"],
          props: [
            { id: "vacuum", text: "chuyển động trong chân không", has: [0, 1, 2] },
            { id: "air", text: "bị lực cản không khí làm chậm lại", has: [3] },
            { id: "fastest", text: "có tốc độ trên quỹ đạo lớn nhất trong các hành tinh", has: [0] },
            { id: "far", text: "ở xa Mặt Trời gấp khoảng 30 lần Trái Đất", has: [1] },
            { id: "thirty", text: "đi quanh Mặt Trời với tốc độ khoảng 30 km/s", has: [2] },
            { id: "near", text: "ở gần Mặt Trời hơn Sao Hỏa", has: [0, 2] }
          ],
          sample: { item: 1, prop: "far" }
        }
      ],
      "3.4": [
        {
          id: "3.4-x1", type: "whatif", base: 7.5, unitLabel: "m",
          ask: "Bến cảng có độ sâu trung bình 6 m và biên độ thủy triều 3 m thì độ sâu lớn nhất là 7,5 m. Nếu một bến khác cũng sâu trung bình 6 m nhưng biên độ thủy triều là 5 m, độ sâu lớn nhất là bao nhiêu mét?",
          why: "Tính được độ sâu lúc triều cao, triều thấp giúp em hiểu vì sao có bến cảng chỉ dùng được vào một số giờ trong ngày.",
          answer: function () { return 6 + 5 / 2; },
          tol: 0.01,
          reasons: [
            "Triều cao cao hơn mức trung bình đúng bằng cả biên độ: 6 + 5",
            "Triều cao cao hơn mức trung bình một nửa biên độ: 6 + 5 ÷ 2",
            "Biên độ không ảnh hưởng tới độ sâu lớn nhất, vẫn là 7,5 m"
          ],
          reason: 1,
          sample: { guess: "8,5", reason: 1 }
        },
        {
          id: "3.4-x2", type: "predict", sim: "tides",
          ask: "Ở một bến cảng, triều cao lúc khoảng 6 giờ sáng. Lần triều cao tiếp theo vào khoảng mấy giờ?",
          why: "Dự đoán giờ triều cao bằng mô hình Trái Đất – Mặt Trăng là việc người đi biển và người làm ở bến cảng cần làm mỗi ngày.",
          options: ["Khoảng 12 giờ trưa", "Khoảng 6 giờ chiều cùng ngày", "Khoảng 6 giờ sáng hôm sau"],
          answer: 1,
          reasons: [
            "Chỉ phía gần Mặt Trăng có triều cao, nên phải chờ Trái Đất quay đủ một vòng 24 giờ",
            "Cứ mỗi 6 giờ lại có một lần triều cao",
            "Phía gần Mặt Trăng và phía xa nhất đều có triều cao; Trái Đất quay nửa vòng (12 giờ) là tới chỗ kia"
          ],
          reason: 2,
          observe: "Triều cao tiếp theo vào khoảng 6 giờ chiều, cách 12 giờ; lúc khoảng 12 giờ trưa là triều thấp (6 giờ sau triều cao). Vì Mặt Trăng cũng chuyển động quanh Trái Đất nên giờ triều không đúng y nhau mỗi ngày.",
          sample: { option: 1, reason: 2 }
        },
        {
          id: "3.4-x3", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác ba thứ còn lại.",
          why: "Thủy triều không chỉ là chuyện mực nước biển: so sánh các nơi và các kiểu thủy triều cho em thấy nó ảnh hưởng tới cả tàu thuyền lẫn đất liền.",
          items: ["vịnh Fundy (Canada)", "biển Địa Trung Hải", "thủy triều đất", "một bến cảng nông lúc triều thấp"],
          props: [
            { id: "big", text: "có biên độ thủy triều lớn nhất thế giới, 16,3 m", has: [0] },
            { id: "small", text: "có biên độ thủy triều thuộc loại nhỏ nhất thế giới", has: [1] },
            { id: "land", text: "làm đất liền lên xuống, biên độ khoảng 30 cm", has: [2] },
            { id: "boats", text: "tàu thuyền có thể không di chuyển an toàn vì nước không đủ sâu", has: [3] },
            { id: "water", text: "là chỗ có nước đại dương", has: [0, 1, 3] },
            { id: "tidal", text: "có liên quan đến lực thủy triều", has: [0, 1, 2, 3] }
          ],
          sample: { item: 2, prop: "land" }
        }
      ],
      "3.5": [
        {
          id: "3.5-x1", type: "odd",
          ask: "Cái nào khác loại? Năm dạng năng lượng — mỗi dạng đều có thể là \"kẻ lạc loài\" theo một lý do riêng. Tìm hết nhé.",
          why: "Biết dạng nào là kho dự trữ, dạng nào là cách truyền là nền móng để vẽ sơ đồ năng lượng ở chặng sau.",
          items: ["động năng", "nhiệt năng", "điện năng", "thế năng hấp dẫn", "hóa năng"],
          props: [
            { id: "transfer", text: "chỉ là một cách truyền năng lượng, không phải dạng dự trữ", has: [2] },
            { id: "both", text: "vừa được xếp là dự trữ, vừa được xếp là truyền", has: [1] },
            { id: "move", text: "là năng lượng dự trữ do vật đang chuyển động", has: [0] },
            { id: "lift", text: "được dự trữ khi vật được nâng lên xa một nguồn hấp dẫn", has: [3] },
            { id: "food", text: "được dự trữ trong thức ăn, pin và nhiên liệu", has: [4] },
            { id: "bus", text: "có ở chiếc xe buýt đang chạy lên dốc", has: [0, 1, 2, 3, 4] }
          ],
          sample: { item: 1, prop: "both" }
        },
        {
          id: "3.5-x2", type: "predict",
          ask: "Mạch có pin, dây dẫn và bóng đèn đang sáng. Năng lượng đi qua dây dẫn tới đèn ở dạng nào?",
          why: "Phân biệt chỗ năng lượng được dự trữ với cách nó được truyền đi sẽ giúp em ở chương Điện.",
          options: ["Điện năng", "Hóa năng", "Nhiệt năng"],
          answer: 0,
          reasons: [
            "Hóa năng trong pin chảy nguyên vẹn qua dây tới đèn",
            "Pin dự trữ hóa năng; dòng điện chạy trong dây là cách truyền năng lượng điện",
            "Dây ấm lên nên năng lượng đi trong dây là nhiệt năng"
          ],
          reason: 1,
          observe: "Năng lượng được dự trữ trong pin dưới dạng hóa năng, còn trong dây dẫn nó được truyền đi dưới dạng điện năng — một cách truyền, không phải một kho dự trữ.",
          sample: { option: 0, reason: 1 }
        },
        {
          id: "3.5-x3", type: "predict",
          ask: "Có bốn kho năng lượng: gạo chưa nấu, nước được bơm lên bể trên cao, một cốc nước nóng, và một quả bóng tennis đang lăn. Để nguyên một tháng, kho nào hầu như vẫn còn?",
          why: "Biết kho nào giữ được lâu giải thích vì sao con người dự trữ năng lượng bằng nhiên liệu, pin và bể nước trên cao.",
          options: ["Cả bốn kho", "Cốc nước nóng và quả bóng", "Gạo và nước trong bể trên cao"],
          answer: 2,
          reasons: [
            "Năng lượng đã vào kho thì không bao giờ mất khỏi kho",
            "Kho nóng và kho đang chuyển động mạnh hơn nên giữ được lâu hơn",
            "Hóa năng và thế năng hấp dẫn dự trữ được dễ và lâu; vật nóng thì nguội đi, bóng thì dừng lại"
          ],
          reason: 2,
          observe: "Gạo (hóa năng) và nước trên bể cao (thế năng hấp dẫn) vẫn giữ năng lượng. Cốc nước đã nguội và quả bóng đã dừng: nhiệt năng và động năng chỉ dự trữ được trong thời gian ngắn.",
          sample: { option: 2, reason: 2 }
        }
      ],
      "3.6": [
        {
          id: "3.6-x1", type: "whatif", base: 32, unitLabel: "°C",
          ask: "Dầu ăn được đun bằng nến: 22 °C lúc bắt đầu và 32 °C sau 4 phút, mỗi phút tăng đều. Nếu cứ tăng đều như vậy, sau 8 phút dầu ở bao nhiêu °C?",
          why: "Dự đoán bằng quy luật trong bảng số liệu là cách nhà khoa học đọc một đồ thị đường.",
          answer: function () { return 22 + 8 * 2.5; },
          tol: 0.01,
          reasons: [
            "Thời gian gấp đôi thì nhiệt độ gấp đôi: 32 × 2",
            "Mỗi phút tăng 2,5 °C nên 22 + 8 × 2,5",
            "Sau 4 phút nến đã truyền hết năng lượng nên nhiệt độ giữ ở 32 °C"
          ],
          reason: 1,
          sample: { guess: "42", reason: 1 }
        },
        {
          id: "3.6-x2", type: "odd",
          ask: "Cái nào khác loại? Năm sự việc có năng lượng chuyển hóa — tìm cho mỗi sự việc một lý do khiến chỉ nó khác.",
          why: "Nhìn sơ đồ năng lượng của nhiều sự việc cạnh nhau giúp em tự vẽ được sơ đồ cho bất kì máy móc hay hoạt động nào.",
          items: ["bếp củi nấu ăn", "người đi lên cầu thang", "nhà máy điện dùng khí thiên nhiên", "quyển sách rơi khỏi giá", "ti vi đang bật"],
          props: [
            { id: "chem", text: "bắt đầu từ hóa năng", has: [0, 1, 2] },
            { id: "gpeEnd", text: "kết thúc bằng thế năng hấp dẫn", has: [1] },
            { id: "makeElec", text: "tạo ra điện năng để truyền tới các ngôi nhà", has: [2] },
            { id: "gpeStart", text: "bắt đầu từ thế năng hấp dẫn", has: [3] },
            { id: "two", text: "đổi một dạng thành hai dạng cùng lúc: âm thanh và ánh sáng", has: [4] },
            { id: "pot", text: "truyền nhiệt năng sang nồi và thức ăn", has: [0] }
          ],
          sample: { item: 3, prop: "gpeStart" }
        },
        {
          id: "3.6-x3", type: "predict",
          ask: "Một cục pin mới nằm trong ngăn kéo suốt một tháng, không nối vào mạch nào. Điều gì xảy ra với năng lượng của nó?",
          why: "Hiểu rằng năng lượng chỉ làm được việc khi có một quá trình chuyển hóa hay truyền nó đi là ý chính của cả chặng này.",
          options: ["Pin nóng dần lên", "Năng lượng tự chuyển hết thành nhiệt rồi bay đi", "Không có gì xảy ra; hóa năng vẫn nằm trong pin"],
          answer: 2,
          reasons: [
            "Năng lượng luôn tự chuyển hóa, dù không có quá trình nào",
            "Năng lượng chỉ làm được việc khi được chuyển hóa hay truyền đi; nằm yên trong kho thì nó không làm gì",
            "Pin mới chưa có năng lượng cho tới khi được lắp vào mạch"
          ],
          reason: 1,
          observe: "Không có gì xảy ra: hóa năng vẫn được dự trữ trong pin. Chỉ khi nối pin vào mạch, hóa năng mới được chuyển thành điện năng và truyền đi để làm việc.",
          sample: { option: 2, reason: 1 }
        }
      ],
      "3.7": [
        {
          id: "3.7-x1", type: "whatif", sim: "sankey", base: 51, unitLabel: "J",
          ask: "Đèn A chỉ đổi 15% điện năng thành ánh sáng: nhận 60 J thì hao phí 51 J. Nếu cũng đèn A nhận 200 J điện năng, bao nhiêu jun bị hao phí dưới dạng nhiệt?",
          why: "Tính phần hao phí theo phần trăm giúp em so sánh thiết bị nào lãng phí nhiều năng lượng hơn.",
          answer: function () { return 0.85 * 200; },
          tol: 0.01,
          reasons: [
            "Đèn nhận nhiều điện hơn thì làm việc tốt hơn, nên hao phí ít hơn 85%",
            "Hao phí của đèn A luôn là 51 J",
            "Đèn A vẫn hao phí 85%, nên 0,85 × 200"
          ],
          reason: 2,
          sample: { guess: "170", reason: 2 }
        },
        {
          id: "3.7-x2", type: "predict",
          ask: "Đèn A đổi khoảng 15% điện năng thành ánh sáng, đèn B khoảng 50%. Cùng nhận một lượng điện năng như nhau, đèn nào làm nóng không khí xung quanh nhiều hơn?",
          why: "Biết năng lượng hao phí đi đâu giúp em chọn thiết bị tiết kiệm năng lượng.",
          options: ["Đèn B", "Như nhau", "Đèn A"],
          answer: 2,
          reasons: [
            "Đèn A đổi 85% điện năng thành nhiệt năng, tiêu tán ra xung quanh",
            "Đèn nào sáng hơn thì nóng hơn",
            "Hai đèn đều dùng điện nên tỏa nhiệt như nhau"
          ],
          reason: 0,
          observe: "Đèn A: 85% điện năng thành nhiệt năng và tiêu tán ra không khí; đèn B chỉ 50%. Phần nhiệt năng đó lan ra xung quanh và không thu hồi lại được.",
          sample: { option: 2, reason: 0 }
        },
        {
          id: "3.7-x3", type: "odd",
          ask: "Cái nào khác loại? Năm phần năng lượng — tìm cho mỗi phần một lý do khiến chỉ nó khác.",
          why: "Tách đúng phần có ích và phần hao phí là bước đầu để vẽ sơ đồ dòng năng lượng và tính phần trăm.",
          items: ["nhiệt năng làm nóng động cơ xe máy", "động năng của xe máy đang chạy", "tiếng ồn của động cơ xe máy", "ánh sáng phát ra từ đèn B", "nhiệt năng làm nóng hòn đá quanh bếp củi"],
          props: [
            { id: "useful", text: "là phần năng lượng có ích", has: [1, 3] },
            { id: "wasted", text: "là năng lượng hao phí, bị tiêu tán", has: [0, 2, 4] },
            { id: "kinetic", text: "là năng lượng dự trữ do vật chuyển động", has: [1] },
            { id: "see", text: "là cách truyền năng lượng mà mắt nhìn thấy được", has: [3] },
            { id: "vibrate", text: "được truyền đi từ một vật đang rung", has: [2] },
            { id: "wood", text: "có được từ hóa năng của gỗ", has: [4] },
            { id: "petrolHeat", text: "là nhiệt năng sinh ra từ hóa năng của xăng", has: [0] }
          ],
          sample: { item: 4, prop: "wood" }
        }
      ]
    },
    tr: {
      en: {
        "q.3.1-x1.ask": "A 70 kg astronaut has a weight of 112 N on the Moon (1.6 N/kg). If the astronaut stands on Mars, where the gravitational field strength is 3.7 N/kg, what is their weight in newtons?",
        "q.3.1-x1.why": "Changing one number in W = m × g and predicting the result shows you clearly what changes (weight) and what stays the same (mass).",
        "q.3.1-x1.reasons": [
          "The mass is still 70 kg; only 1.6 is replaced by 3.7, so W = 70 × 3.7",
          "On another planet the mass gets smaller too, so the weight is less than 112 N",
          "You use 10 N/kg everywhere, so the weight is 700 N"
        ],
        "q.3.1-x2.ask": "Which one doesn't belong? For each quantity, find a reason that makes only it different from the other three.",
        "q.3.1-x2.why": "People often mix up mass and weight; comparing them from several sides helps you use the right word and the right unit.",
        "q.3.1-x2.items": ["mass", "weight", "contact force", "gravitational field strength"],
        "q.3.1-x2.props": ["is measured in kilograms", "stays the same when an object is taken from the Earth to the Moon", "is a force, measured in newtons", "acts upwards, pushed by the surface holding the object", "is measured in newtons per kilogram (N/kg)", "is the force of gravity pulling an object towards the centre of the Earth"],
        "q.3.1-x3.ask": "You have a forcemeter and some masses, and you imagine you can take them anywhere in the Solar System. Design fair tests — how many different tests can you think of?",
        "q.3.1-x3.why": "Keeping everything the same except one thing is the only way to know for sure whether weight depends on mass, on where you measure, or on distance.",
        "q.3.1-x3.factors": ["the mass of the masses hung on the forcemeter", "where you measure (Earth, Moon, Jupiter…) — that is, the gravitational field strength", "the distance from the masses to the Earth (for example, travelling far away in a spacecraft)"],
        "q.3.1-x3.outcomes": ["the weight (forcemeter reading, N)", "the mass of the masses (kg)"],
        "q.3.2-x1.ask": "Which one doesn't belong? Find a reason for each that makes only it different.",
        "q.3.2-x1.why": "Telling a real object from a model, and a star from a planet, helps you retell the story of how the Solar System formed clearly.",
        "q.3.2-x1.items": ["a nebula", "the Sun", "the Earth", "a computer model of how the Solar System formed"],
        "q.3.2-x1.props": ["is a cloud of dust and gas where stars are being born", "grew past a certain size so it became hot enough to be a star", "moves in an orbit around the Sun", "spins on its axis in the same direction as the planets orbit the Sun", "has mass, so it is a source of gravity", "is not the real thing, so it can have limitations"],
        "q.3.2-x2.ask": "Hypothesis: the Solar System formed from a cloud of dust and gas, like young stars that have a flat disc of dust around them. If the hypothesis is right, how do you predict the planets move around the Sun?",
        "q.3.2-x2.why": "Working out something testable from a hypothesis is the key step in the second way scientists find out about the past.",
        "q.3.2-x2.options": [
          "Each planet in its own direction, in different planes",
          "All in the same direction, and almost in the same plane",
          "All in the same direction, but tilted every which way like the lines on a ball"
        ],
        "q.3.2-x2.reasons": [
          "The Sun's gravity pulls each planet in a different direction",
          "The planets formed in different places in space and were pulled in by the Sun later",
          "All the planets formed from the same flat disc of dust and gas around the young Sun"
        ],
        "q.3.2-x2.observe": "Yes: all the planets orbit the Sun in the same direction and in the same plane, so the Solar System looks flat. These facts are evidence that supports the hypothesis.",
        "q.3.2-x3.ask": "A classmate says: \"Venus spins the opposite way, so the nebula hypothesis is wrong — let's throw it away!\" What do you think scientists conclude?",
        "q.3.2-x3.why": "Learning to weigh supporting evidence against evidence that seems to contradict will help you judge any scientific theory later on.",
        "q.3.2-x3.options": [
          "Throw the hypothesis away at once, because it is wrong",
          "The hypothesis has been proved for certain, so Venus does not matter",
          "Keep the hypothesis because most evidence supports it, and note what contradicts it"
        ],
        "q.3.2-x3.reasons": [
          "Most facts support the hypothesis; a few that seem to contradict it need more explaining",
          "Just one fact against it means the hypothesis must be thrown away",
          "The computer model proved the hypothesis, so it cannot be wrong"
        ],
        "q.3.2-x3.observe": "Scientists say most of the evidence supports the hypothesis, while Venus spinning the opposite way seems to contradict it. The hypothesis has not been \"proved\": nobody could watch the Solar System form, and the models used to test it have limitations too.",
        "q.3.3-x1.ask": "Imagine the Sun's gravity suddenly stopped pulling on the Earth. How would the Earth move?",
        "q.3.3-x1.why": "Understanding why a force always pointing at the Sun is needed helps you explain every orbit — of planets, comets or asteroids.",
        "q.3.3-x1.options": ["It would fly off in a straight line into space", "It would stop where it is", "It would fall straight into the Sun", "It would keep going round in a circle as before"],
        "q.3.3-x1.reasons": [
          "With no pulling force, an object slows down and stops",
          "Moving in a circle needs a force that keeps changing the direction; without it, a planet goes straight",
          "The Earth is used to its orbit, so it keeps going round as before"
        ],
        "q.3.3-x1.observe": "The Earth would fly off in a straight line into space. In a vacuum there is no air resistance to slow it down, so it would not stop either; it is the force of gravity towards the Sun that keeps it in orbit.",
        "q.3.3-x2.ask": "The Earth moves at 30 km/s, so in 1 hour it travels 108 000 km. Mars is further from the Sun and moves at 24 km/s. How many kilometres does Mars travel in 1 hour?",
        "q.3.3-x2.why": "Using the speed table to calculate and compare shows you the trend: the further from the Sun, the slower a planet moves.",
        "q.3.3-x2.reasons": [
          "Further out it has a bigger circle to go round, so Mars moves faster than the Earth",
          "There is no air resistance in a vacuum, so all planets move at the same speed",
          "The Sun pulls Mars less strongly, so it is slower; distance = 24 × 3600"
        ],
        "q.3.3-x3.ask": "Which one doesn't belong? Four moving things — find a reason for each that makes only it different.",
        "q.3.3-x3.why": "Comparing movement on Earth with movement in space helps you see which forces act in each place.",
        "q.3.3-x3.items": ["Mercury", "Neptune", "the Earth", "a plane that has just landed"],
        "q.3.3-x3.props": ["moves through a vacuum", "is slowed down by air resistance", "has the fastest orbital speed of all the planets", "is about 30 times as far from the Sun as the Earth", "moves around the Sun at about 30 km/s", "is closer to the Sun than Mars"],
        "q.3.4-x1.ask": "A harbour with a mean depth of 6 m and a tidal range of 3 m has a greatest depth of 7.5 m. If another harbour also has a mean depth of 6 m but a tidal range of 5 m, what is its greatest depth in metres?",
        "q.3.4-x1.why": "Working out the depth at high and low tide helps you understand why some harbours can only be used at certain times of day.",
        "q.3.4-x1.reasons": [
          "High tide is above the mean by the whole tidal range: 6 + 5",
          "High tide is above the mean by half the tidal range: 6 + 5 ÷ 2",
          "The tidal range does not affect the greatest depth, so it is still 7.5 m"
        ],
        "q.3.4-x2.ask": "At a harbour, high tide is at about 6 o'clock in the morning. At about what time is the next high tide?",
        "q.3.4-x2.why": "Predicting high tides with the Earth–Moon model is something sailors and harbour workers need to do every day.",
        "q.3.4-x2.options": ["At about 12 noon", "At about 6 o'clock in the evening the same day", "At about 6 o'clock the next morning"],
        "q.3.4-x2.reasons": [
          "Only the side nearest the Moon has a high tide, so you wait for the Earth to turn a whole 24-hour circle",
          "There is a high tide every 6 hours",
          "The side nearest the Moon and the side furthest away both have high tide; half a turn of the Earth (12 hours) brings you to the other one"
        ],
        "q.3.4-x2.observe": "The next high tide is at about 6 in the evening, 12 hours later; at about 12 noon there is a low tide (6 hours after high tide). Because the Moon also moves around the Earth, the tide times are not exactly the same every day.",
        "q.3.4-x3.ask": "Which one doesn't belong? Find a reason for each that makes only it different from the other three.",
        "q.3.4-x3.why": "Tides are not only about sea level: comparing places and kinds of tide shows you they affect boats and even the land.",
        "q.3.4-x3.items": ["the Bay of Fundy (Canada)", "the Mediterranean Sea", "earth tides", "a shallow harbour at low tide"],
        "q.3.4-x3.props": ["has the biggest tidal range in the world, 16.3 m", "has one of the smallest tidal ranges in the world", "makes the land rise and fall, with a range of about 30 cm", "boats may not move safely because the water is not deep enough", "is a place with ocean water", "is linked to tidal forces"],
        "q.3.5-x1.ask": "Which one doesn't belong? Five kinds of energy — each one can be the odd one out for its own reason. Find them all.",
        "q.3.5-x1.why": "Knowing which kinds are energy stores and which are ways of transferring energy is the foundation for drawing energy diagrams in the next stage.",
        "q.3.5-x1.items": ["kinetic energy", "thermal energy", "electrical energy", "gravitational potential energy", "chemical energy"],
        "q.3.5-x1.props": ["is only a way of transferring energy, not a store", "is listed as both a store and a transfer", "is energy stored because an object is moving", "is stored when an object is lifted away from a source of gravity", "is stored in food, cells and fuels", "is found in a bus driving up a hill"],
        "q.3.5-x2.ask": "A circuit has a cell, wires and a lamp that is lit. In what form does the energy travel through the wires to the lamp?",
        "q.3.5-x2.why": "Telling apart where energy is stored and how it is transferred will help you in the Electricity unit.",
        "q.3.5-x2.options": ["Electrical energy", "Chemical energy", "Thermal energy"],
        "q.3.5-x2.reasons": [
          "The chemical energy in the cell flows unchanged along the wires to the lamp",
          "The cell stores chemical energy; the current in the wires is a way of transferring electrical energy",
          "The wires get warm, so the energy in them is thermal energy"
        ],
        "q.3.5-x2.observe": "The energy is stored in the cell as chemical energy, and in the wires it is transferred as electrical energy — a way of transferring, not a store.",
        "q.3.5-x3.ask": "There are four energy stores: uncooked rice, water pumped up into a high tank, a cup of hot water, and a rolling tennis ball. Left alone for a month, which ones still have almost all their energy?",
        "q.3.5-x3.why": "Knowing which stores last explains why people store energy in fuels, cells and high water tanks.",
        "q.3.5-x3.options": ["All four stores", "The cup of hot water and the ball", "The rice and the water in the high tank"],
        "q.3.5-x3.reasons": [
          "Once energy is in a store it never leaves the store",
          "Hot stores and moving stores are stronger, so they last longer",
          "Chemical and gravitational potential energy are easy to store for a long time; hot objects cool down and balls stop"
        ],
        "q.3.5-x3.observe": "The rice (chemical energy) and the water in the high tank (gravitational potential energy) still hold their energy. The cup has cooled and the ball has stopped: thermal and kinetic energy can only be stored for a short time.",
        "q.3.6-x1.ask": "Cooking oil is heated by a candle: 22 °C at the start and 32 °C after 4 minutes, rising steadily each minute. If it keeps rising the same way, what is the temperature of the oil after 8 minutes, in °C?",
        "q.3.6-x1.why": "Predicting from the pattern in a results table is how scientists read a line graph.",
        "q.3.6-x1.reasons": [
          "Twice the time means twice the temperature: 32 × 2",
          "It rises 2.5 °C each minute, so 22 + 8 × 2.5",
          "After 4 minutes the candle has transferred all its energy, so the temperature stays at 32 °C"
        ],
        "q.3.6-x2.ask": "Which one doesn't belong? Five events where energy changes — find a reason for each that makes only it different.",
        "q.3.6-x2.why": "Looking at the energy diagrams of many events side by side helps you draw your own diagram for any machine or activity.",
        "q.3.6-x2.items": ["a wood fire for cooking", "people walking up stairs", "a power station that uses natural gas", "a book falling off a shelf", "a television that is switched on"],
        "q.3.6-x2.props": ["starts with chemical energy", "ends with gravitational potential energy", "produces electrical energy that goes to homes", "starts with gravitational potential energy", "changes one kind into two at once: sound and light", "transfers thermal energy to a pan and the food in it"],
        "q.3.6-x3.ask": "A new cell lies in a drawer for a whole month, not connected to any circuit. What happens to its energy?",
        "q.3.6-x3.why": "Understanding that energy only does something when a process changes or transfers it is the main idea of this whole stage.",
        "q.3.6-x3.options": ["The cell slowly gets hot", "All the energy changes into heat by itself and escapes", "Nothing happens; the chemical energy stays in the cell"],
        "q.3.6-x3.reasons": [
          "Energy always changes by itself, even with no process",
          "Energy only does something when it is changed or transferred; sitting in a store, it does nothing",
          "A new cell has no energy until it is put into a circuit"
        ],
        "q.3.6-x3.observe": "Nothing happens: the chemical energy is still stored in the cell. Only when the cell is connected into a circuit is the chemical energy changed into electrical energy and transferred to do something.",
        "q.3.7-x1.ask": "Lamp A changes only 15% of its electrical energy into light: given 60 J, it wastes 51 J. If the same lamp A is given 200 J of electrical energy, how many joules are wasted as heat?",
        "q.3.7-x1.why": "Working out the wasted part from a percentage helps you compare which device wastes more energy.",
        "q.3.7-x1.reasons": [
          "A lamp given more energy works better, so it wastes less than 85%",
          "Lamp A always wastes 51 J",
          "Lamp A still wastes 85%, so 0.85 × 200"
        ],
        "q.3.7-x2.ask": "Lamp A changes about 15% of its electrical energy into light, lamp B about 50%. Given the same amount of electrical energy, which lamp heats the air around it more?",
        "q.3.7-x2.why": "Knowing where wasted energy goes helps you choose devices that save energy.",
        "q.3.7-x2.options": ["Lamp B", "Both the same", "Lamp A"],
        "q.3.7-x2.reasons": [
          "Lamp A changes 85% of its electrical energy into thermal energy, which is dissipated around it",
          "The brighter lamp is always the hotter one",
          "Both lamps use electricity, so they give out the same heat"
        ],
        "q.3.7-x2.observe": "Lamp A: 85% of the electrical energy becomes thermal energy and is dissipated into the air; lamp B only 50%. That thermal energy spreads out and cannot be recovered.",
        "q.3.7-x3.ask": "Which one doesn't belong? Five parts of energy — find a reason for each that makes only it different.",
        "q.3.7-x3.why": "Sorting the useful part from the wasted part correctly is the first step to drawing energy flow diagrams and working out percentages.",
        "q.3.7-x3.items": ["the thermal energy heating a motorbike engine", "the kinetic energy of a moving motorbike", "the noise of a motorbike engine", "the light given out by lamp B", "the thermal energy heating the stones around a wood fire"],
        "q.3.7-x3.props": ["is the useful part of the energy", "is wasted energy that is dissipated", "is energy stored because something is moving", "is a way of transferring energy that you can see", "is transferred from something that is vibrating", "comes from the chemical energy in wood", "is thermal energy made from the chemical energy in petrol"]
      },
      vi: {}
    }
  });
})();
