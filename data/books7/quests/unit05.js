// 🚀 Extension quests — Science 7, Unit 5 Properties of materials. Self-written; every fact comes from the stage's
// own `learn` / `learnDetail`. Science-thinking types: predict, odd, fair (see MATH_QUESTS_GUIDE.md § Science),
// plus one numeric whatif built on the book's carat figures.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 5,
    sections: {
      "5.1": [
        {
          id: "5.1-x1", type: "odd",
          ask: "Cái nào khác loại? Năm chất — mỗi chất đều có một lý do riêng khiến chỉ nó khác bốn chất kia. Tìm hết nhé.",
          why: "Nhìn mỗi chất qua công dụng của nó giúp em nhớ rằng tính chất quyết định chất đó được dùng vào việc gì.",
          items: ["dây đồng", "đinh sắt", "thủy ngân", "lưu huỳnh", "khí heli"],
          props: [
            { id: "liquid", text: "là kim loại ở thể lỏng ở nhiệt độ phòng", has: [2] },
            { id: "balloon", text: "được bơm vào bóng bay", has: [4] },
            { id: "rubber", text: "được thêm vào cao su để cao su cứng hơn", has: [3] },
            { id: "magnet", text: "bị nam châm hút", has: [1] },
            { id: "wire", text: "làm dây điện vì dẫn điện tốt và mềm dẻo", has: [0] },
            { id: "metal", text: "là kim loại, dẫn điện tốt", has: [0, 1, 2] },
            { id: "nonmetal", text: "là phi kim, dẫn điện kém", has: [3, 4] }
          ],
          sample: { item: 2, prop: "liquid" }
        },
        {
          id: "5.1-x2", type: "predict",
          ask: "Một cái chảo có lòng bằng thép và tay cầm bằng phi kim đã nằm trên bàn rất lâu, nên cả hai phần cùng nhiệt độ với căn phòng. Em chạm tay vào từng phần. Phần nào cảm thấy lạnh hơn?",
          why: "Phân biệt \"thấy lạnh\" với \"thật sự lạnh\" là bước đầu để hiểu sự dẫn nhiệt ở các chương sau.",
          options: ["Lòng chảo bằng thép", "Tay cầm bằng phi kim", "Hai phần như nhau"],
          answer: 0,
          reasons: [
            "Kim loại lúc nào cũng lạnh hơn phi kim đặt cạnh nó",
            "Thép dẫn nhiệt tốt nên kéo nhiệt ra khỏi tay em nhanh, vì vậy em thấy lạnh",
            "Kim loại truyền \"cái lạnh\" vào tay em"
          ],
          reason: 1,
          observe: "Lòng chảo bằng thép cảm thấy lạnh hơn, dù hai phần cùng nhiệt độ. Thép dẫn nhiệt ra khỏi tay nhanh; phi kim dẫn nhiệt kém nên được dùng làm tay cầm chảo.",
          sample: { option: 0, reason: 1 }
        },
        {
          id: "5.1-x3", type: "predict",
          ask: "Em đưa một thanh nam châm lại gần ba vật: một chiếc nhẫn vàng, một cái đinh thép và một đoạn dây đồng. Vật nào bị hút?",
          why: "Biết chỉ một số kim loại có từ tính giúp em chọn đúng cách tách hỗn hợp ở bài 5.4.",
          options: ["Cả ba, vì đều là kim loại", "Chỉ cái đinh thép", "Không vật nào"],
          answer: 1,
          reasons: [
            "Chỉ một số kim loại có từ tính, như sắt, thép, niken và coban",
            "Mọi kim loại đều bị nam châm hút",
            "Vàng nặng nhất nên bị hút mạnh nhất"
          ],
          reason: 0,
          observe: "Chỉ đinh thép bị hút. Vàng và đồng là kim loại nhưng không có từ tính — không phải kim loại nào cũng bị nam châm hút.",
          sample: { option: 1, reason: 0 }
        }
      ],
      "5.2": [
        {
          id: "5.2-x1", type: "odd",
          ask: "Cái nào khác loại? Năm tính chất dùng để phân biệt kim loại với phi kim — tìm cho mỗi tính chất một lý do khiến chỉ nó khác.",
          why: "Biết mỗi tính chất được kiểm tra bằng cách nào giúp em tự lập kế hoạch thử một vật liệu lạ.",
          items: ["sáng bóng", "xỉn màu", "kêu vang khi gõ", "giòn", "dẫn điện"],
          props: [
            { id: "eyeM", text: "nhìn bằng mắt là thấy, và là dấu hiệu của kim loại", has: [0] },
            { id: "eyeN", text: "nhìn bằng mắt là thấy, và là dấu hiệu của phi kim", has: [1] },
            { id: "tap", text: "kiểm tra bằng cách gõ vào rồi lắng nghe", has: [2] },
            { id: "drop", text: "lộ ra khi vật rắn bị rơi và vỡ vụn", has: [3] },
            { id: "circuit", text: "kiểm tra bằng mạch có pin, bóng đèn và kẹp cá sấu", has: [4] },
            { id: "metal", text: "là tính chất của kim loại", has: [0, 2, 4] },
            { id: "nonmetal", text: "là tính chất của phi kim", has: [1, 3] }
          ],
          sample: { item: 4, prop: "circuit" }
        },
        {
          id: "5.2-x2", type: "predict",
          ask: "Một vật liệu lạ có bề mặt xỉn, rơi xuống thì vỡ vụn. Em đã chạm hai kẹp cá sấu vào nhau và thấy đèn sáng; sau đó kẹp vật liệu vào mạch thì đèn không sáng. Vật liệu này là gì?",
          why: "Kết luận dựa trên nhiều phép thử cùng chỉ một hướng là cách nhà khoa học xếp nhóm một vật liệu mới.",
          options: ["Kim loại", "Chưa thể đoán được", "Phi kim"],
          answer: 2,
          reasons: [
            "Chỉ cần một dấu hiệu giống kim loại là đủ để gọi là kim loại",
            "Cả ba dấu hiệu — xỉn, giòn, không dẫn điện — đều là của phi kim",
            "Đèn không sáng nghĩa là pin đã hết, nên không kết luận được gì"
          ],
          reason: 1,
          observe: "Đó là phi kim. Mọi dấu hiệu đều cùng một phía, và vì đèn đã sáng khi chạm hai kẹp vào nhau, em biết mạch thử vẫn hoạt động tốt.",
          sample: { option: 2, reason: 1 }
        },
        {
          id: "5.2-x3", type: "predict",
          ask: "Em thử một thanh đồng, nhưng hai kẹp cá sấu chỉ chạm hờ vào thanh (tiếp xúc kém). Đèn sẽ thế nào?",
          why: "Một kết quả lạ có thể đến từ cách làm thí nghiệm, nên kiểm tra dụng cụ trước khi kết luận là thói quen quan trọng.",
          options: ["Sáng bình thường, vì đồng dẫn điện tốt", "Có thể không sáng, dễ làm em kết luận sai", "Sáng hơn, vì chạm ít thì ít cản trở"],
          answer: 1,
          reasons: [
            "Kim loại dẫn điện tốt nên chạm thế nào đèn cũng sáng",
            "Chạm nhẹ giúp dòng điện chạy dễ hơn",
            "Dòng điện chỉ chạy qua vật liệu khi kẹp tiếp xúc tốt với nó"
          ],
          reason: 2,
          observe: "Đèn có thể không sáng dù đồng dẫn điện tốt. Vì thế sách dặn: kẹp phải tiếp xúc tốt với vật liệu, và chạm hai kẹp vào nhau trước để chắc đèn hoạt động.",
          sample: { option: 1, reason: 2 }
        }
      ],
      "5.3": [
        {
          id: "5.3-x1", type: "odd",
          ask: "Cái nào khác loại? Ba kim loại và hai hợp kim — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "So sánh hợp kim với các kim loại tạo nên nó cho em thấy trộn kim loại có thể tạo ra tính chất mới.",
          items: ["đồng", "kẽm", "đồng thau", "đồng thanh", "thiếc"],
          props: [
            { id: "wire", text: "nóng chảy ở 1085 °C, dùng làm dây điện", has: [0] },
            { id: "coat", text: "được phủ một lớp mỏng lên sắt để chống gỉ", has: [1] },
            { id: "cuzn", text: "là hợp kim của đồng và kẽm", has: [2] },
            { id: "cusn", text: "là hợp kim của đồng và thiếc", has: [3] },
            { id: "can", text: "tráng mặt trong hộp đựng thực phẩm", has: [4] },
            { id: "range", text: "là hợp kim, nóng chảy trong một khoảng nhiệt độ", has: [2, 3] },
            { id: "soft", text: "là nguyên tố, một kim loại mềm", has: [0, 1, 4] }
          ],
          sample: { item: 3, prop: "cusn" }
        },
        {
          id: "5.3-x2", type: "whatif", base: 6,
          ask: "Vàng 18 carat có 18 phần vàng nguyên chất và 6 phần kim loại khác, trên tổng 24 phần. Một chiếc nhẫn vàng 22 carat có bao nhiêu phần (trên 24) là kim loại khác?",
          why: "Đọc đúng ý nghĩa của một con số như \"carat\" giúp em hiểu thành phần của hợp kim thay vì chỉ thuộc lòng.",
          answer: function () { return 2; },
          reasons: [
            "Carat là số phần vàng trên 24 phần, nên phần còn lại là 24 − 22",
            "Carat là số phần kim loại khác, nên có 22 phần kim loại khác",
            "Carat càng cao thì càng có nhiều kim loại khác, nên phải nhiều hơn 6 phần"
          ],
          reason: 0,
          sample: { guess: "2", reason: 0 }
        },
        {
          id: "5.3-x3", type: "predict",
          ask: "Mô hình bè bong bóng: các hàng bong bóng nhỏ cùng cỡ xếp đều trong đĩa. Em bơm thêm một bong bóng to vào giữa, rồi đẩy nhẹ cho các hàng trượt. So với lúc chưa có bong bóng to, các hàng trượt thế nào?",
          why: "Mô hình hạt giải thích được vì sao hợp kim cứng hơn kim loại nguyên chất — đây là lối nghĩ em sẽ dùng mãi trong hóa học.",
          options: ["Dễ trượt hơn", "Trượt như cũ", "Khó trượt hơn"],
          answer: 2,
          reasons: [
            "Bong bóng to dính chặt vào bong bóng nhỏ, giống liên kết hóa học",
            "Bong bóng to làm các hàng không còn đều nên các lớp bị kẹt lại",
            "Bong bóng to nặng nên đè các hàng xuống"
          ],
          reason: 1,
          observe: "Các hàng khó trượt hơn. Đó là mô hình hợp kim: nguyên tử khác kích thước phá vỡ trật tự đều, các lớp bị kẹt nên hợp kim cứng và bền hơn. Các nguyên tử chỉ trộn lẫn, không liên kết với nhau.",
          sample: { option: 2, reason: 1 }
        }
      ],
      "5.4": [
        {
          id: "5.4-x1", type: "odd", sim: "separate",
          ask: "Cái nào khác loại? Bốn hỗn hợp — tìm cho mỗi hỗn hợp một lý do khiến chỉ cách tách nó khác.",
          why: "Chọn cách tách dựa trên tính chất khác nhau của các chất là kỹ năng em dùng khi tự lập kế hoạch tách hỗn hợp mới.",
          items: ["mạt sắt và lưu huỳnh", "đồng sulfate và nước", "phẩm màu và nước", "nước có cát và muối"],
          props: [
            { id: "magnet", text: "tách được bằng nam châm", has: [0] },
            { id: "room", text: "chỉ cần để ở phòng ấm cho nước bay hơi hết", has: [1] },
            { id: "cond", text: "dùng ống sinh hàn để thu nước tinh khiết", has: [2] },
            { id: "filter", text: "cần giấy lọc để giữ lại một chất rắn", has: [3] },
            { id: "evap", text: "thu chất rắn hòa trong nước bằng cách cho nước bay hơi", has: [1, 3] },
            { id: "heat", text: "cần đun nóng bằng một nguồn nhiệt", has: [2, 3] }
          ],
          sample: { item: 0, prop: "magnet" }
        },
        {
          id: "5.4-x2", type: "predict",
          ask: "Em đun sôi hỗn hợp nước và phẩm màu, hơi nước đi vào ống sinh hàn có nước lạnh chảy bên ngoài. Chất lỏng chảy xuống cốc hứng sẽ như thế nào?",
          why: "Hiểu mỗi chất đi đâu trong dụng cụ giúp em giải thích vì sao tách được hai chất có nhiệt độ sôi khác nhau.",
          options: ["Nước tinh khiết, không màu", "Nước có màu giống trong bình", "Không có gì, vì hơi nước bay mất"],
          answer: 0,
          reasons: [
            "Ống sinh hàn giữ màu lại giống như giấy lọc",
            "Nước sôi thành hơi còn phẩm màu ở lại bình; nước lạnh làm hơi nước ngưng tụ thành nước lỏng",
            "Phẩm màu hòa trong nước nên bay hơi theo nước"
          ],
          reason: 1,
          observe: "Cốc hứng được nước tinh khiết, phẩm màu ở lại trong bình. Hai chất tách được vì chúng có nhiệt độ sôi khác nhau.",
          sample: { option: 0, reason: 1 }
        },
        {
          id: "5.4-x3", type: "predict",
          ask: "Đang lọc nước có cát và muối, một bạn muốn nhanh nên lấy bút chì khuấy hỗn hợp ngay trong giấy lọc. Điều gì có thể xảy ra?",
          why: "Biết trước chỗ dễ hỏng của một bước thí nghiệm giúp em làm cẩn thận và có kết quả tin cậy.",
          options: ["Lọc nhanh hơn và muối sạch hơn", "Không có gì thay đổi", "Giấy lọc có thể rách, cát lọt xuống bình"],
          answer: 2,
          reasons: [
            "Giấy lọc khi ướt rất dễ rách",
            "Khuấy làm cát tan vào nước nên lọc nhanh hơn",
            "Bút chì làm nước chảy ra phía ngoài phễu"
          ],
          reason: 0,
          observe: "Giấy lọc ướt rất dễ rách; rách là cát lọt xuống bình và việc tách bị hỏng. Vì vậy không động vào giấy lọc ướt và rót hỗn hợp thật từ từ.",
          sample: { option: 2, reason: 0 }
        }
      ],
      "5.5": [
        {
          id: "5.5-x1", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác ba thứ còn lại.",
          why: "Xếp các chất quen thuộc vào nhóm acid hay kiềm giúp em sẵn sàng dùng chất chỉ thị ở bài 5.6.",
          items: ["nước chanh", "hydrochloric acid", "sodium hydroxide", "kem đánh răng"],
          props: [
            { id: "food", text: "là thực phẩm, có vị chua nhờ citric acid", has: [0] },
            { id: "lab", text: "là acid thường gặp trong phòng thí nghiệm", has: [1] },
            { id: "naoh", text: "là kiềm mạnh, hợp chất của natri, hydro và oxi", has: [2] },
            { id: "teeth", text: "là đồ dùng hằng ngày để đánh răng", has: [3] },
            { id: "acid", text: "là acid", has: [0, 1] },
            { id: "alkali", text: "có chứa kiềm", has: [2, 3] }
          ],
          sample: { item: 0, prop: "food" }
        },
        {
          id: "5.5-x2", type: "predict",
          ask: "Em pha loãng một acid mạnh bằng thật nhiều nước. Acid sau khi pha loãng sẽ như thế nào?",
          why: "Hiểu đúng mức nguy hiểm của acid loãng giúp em làm việc an toàn trong phòng thí nghiệm.",
          options: ["Hết nguy hiểm, có thể chạm tay vào", "Bớt nguy hiểm nhưng vẫn có hại", "Nguy hiểm hơn, vì có nhiều chất lỏng hơn"],
          answer: 1,
          reasons: [
            "Nước làm acid biến mất hoàn toàn",
            "Thêm nước làm acid mạnh lên",
            "Nước pha loãng acid nên nó yếu đi, nhưng acid vẫn còn đó"
          ],
          reason: 2,
          observe: "Acid loãng bớt nguy hiểm nhưng vẫn có thể gây kích ứng da và mắt, nên chai acid loãng vẫn có nhãn cảnh báo. Đó cũng là lý do khi làm đổ acid, em rửa chỗ đó bằng thật nhiều nước.",
          sample: { option: 1, reason: 2 }
        },
        {
          id: "5.5-x3", type: "predict",
          ask: "Điều gì xảy ra khi em trộn một acid với một kiềm?",
          why: "Ý tưởng acid và kiềm đối nghịch nhau là nền tảng để hiểu thang pH và chất chỉ thị ở bài sau.",
          options: ["Chúng triệt tiêu nhau", "Tạo ra một acid mạnh hơn", "Tạo ra một kiềm mạnh hơn"],
          answer: 0,
          reasons: [
            "Hai chất nguy hiểm trộn vào nhau thì càng nguy hiểm",
            "Kiềm lúc nào cũng mạnh hơn acid nên kiềm thắng",
            "Acid và kiềm là hai chất đối nghịch nhau về hóa học"
          ],
          reason: 2,
          observe: "Acid và kiềm triệt tiêu nhau khi trộn với nhau, vì chúng là hai chất đối nghịch về hóa học. Tính acid hay tính kiềm là một tính chất hóa học của chất.",
          sample: { option: 0, reason: 2 }
        }
      ],
      "5.6": [
        {
          id: "5.6-x1", type: "fair", sim: "ph",
          ask: "Em đo pH của các chất lỏng bằng chỉ thị vạn năng trong ống nghiệm. Hãy thiết kế các thí nghiệm công bằng: mỗi lần chỉ thay đổi một điều.",
          why: "Biết điều gì làm pH thay đổi và điều gì không giúp em tin vào số đo của mình — pH là tính chất của chính chất đó.",
          factors: [
            { id: "acid", text: "chất lỏng đem thử có tính acid mạnh hơn" },
            { id: "vol", text: "lượng chất lỏng rót vào ống nghiệm" },
            { id: "tube", text: "kích cỡ ống nghiệm sạch được dùng" }
          ],
          outcomes: [
            { id: "ph", text: "giá trị pH đọc được" }
          ],
          links: [
            { change: "acid", measure: "ph", effect: "down" },
            { change: "vol", measure: "ph", effect: "same" },
            { change: "tube", measure: "ph", effect: "same" }
          ],
          sample: { change: "vol", measure: "ph", keep: ["acid", "tube"], effect: "same" }
        },
        {
          id: "5.6-x2", type: "odd",
          ask: "Cái nào khác loại? Ba chất chỉ thị — tìm cho mỗi chất một lý do khiến chỉ nó khác hai chất kia.",
          why: "Biết mỗi chất chỉ thị cho em thông tin gì giúp em chọn đúng chất chỉ thị cho từng câu hỏi.",
          items: ["nước bắp cải tím", "quỳ", "chỉ thị vạn năng"],
          props: [
            { id: "plant", text: "tự làm được từ một loại rau", has: [0] },
            { id: "yellow", text: "có màu vàng trong kiềm", has: [0] },
            { id: "purple", text: "có màu tím trong chất trung tính", has: [1] },
            { id: "ph", text: "cho biết pH, tức là acid hay kiềm đến mức nào", has: [2] },
            { id: "simple", text: "chỉ cho biết là acid hay kiềm, không cho biết mạnh hay yếu", has: [0, 1] },
            { id: "red", text: "có màu đỏ trong acid mạnh", has: [0, 1, 2] }
          ],
          sample: { item: 2, prop: "ph" }
        },
        {
          id: "5.6-x3", type: "predict",
          ask: "Em nhỏ vài giọt nước bắp cải tím vào một cốc nước chanh. Nước trong cốc sẽ có màu gì?",
          why: "Dùng điều đã biết (nước chanh là acid) để dự đoán màu chỉ thị là cách nhà khoa học kiểm tra một chất lạ.",
          options: ["Vàng", "Xanh lam", "Đỏ"],
          answer: 2,
          reasons: [
            "Nước chanh màu vàng nên hỗn hợp sẽ có màu vàng",
            "Nước chanh là acid, mà nước bắp cải tím hóa đỏ trong acid",
            "Nước chanh chủ yếu là nước, nên có màu xanh lam như trong nước"
          ],
          reason: 1,
          observe: "Nước hóa đỏ: nước chanh là acid. Nước bắp cải tím có màu đỏ trong acid, xanh lam trong nước và vàng trong kiềm.",
          sample: { option: 2, reason: 1 }
        }
      ]
    },
    tr: {
      en: {
        "q.5.1-x1.ask": "Which one doesn't belong? Five substances — each has its own reason for being different from the other four. Find them all.",
        "q.5.1-x1.why": "Looking at each substance through its uses helps you remember that properties decide what a substance is used for.",
        "q.5.1-x1.items": ["copper wire", "an iron nail", "mercury", "sulfur", "helium gas"],
        "q.5.1-x1.props": ["is a metal that is liquid at room temperature", "is pumped into balloons", "is added to rubber to make it harder", "is attracted by a magnet", "is used for electrical wires because it conducts well and is flexible", "is a metal that conducts electricity well", "is a non-metal that conducts electricity poorly"],
        "q.5.1-x2.ask": "A pan with a steel base and a non-metal handle has been on the table for a long time, so both parts are at room temperature. You touch each part. Which part feels colder?",
        "q.5.1-x2.why": "Telling \"feels cold\" apart from \"really is cold\" is the first step to understanding heat conduction in later chapters.",
        "q.5.1-x2.options": ["The steel base", "The non-metal handle", "Both feel the same"],
        "q.5.1-x2.reasons": [
          "A metal is always colder than a non-metal next to it",
          "Steel is a good conductor of heat, so it takes heat away from your hand quickly and you feel cold",
          "A metal passes \"coldness\" into your hand"
        ],
        "q.5.1-x2.observe": "The steel base feels colder, even though both parts are at the same temperature. Steel conducts heat away from your hand quickly; non-metals are poor conductors of heat, which is why they are used for pan handles.",
        "q.5.1-x3.ask": "You bring a bar magnet close to three objects: a gold ring, a steel nail and a piece of copper wire. Which are attracted?",
        "q.5.1-x3.why": "Knowing that only some metals are magnetic helps you choose the right way to separate a mixture in topic 5.4.",
        "q.5.1-x3.options": ["All three, because they are all metals", "Only the steel nail", "None of them"],
        "q.5.1-x3.reasons": [
          "Only some metals are magnetic, such as iron, steel, nickel and cobalt",
          "All metals are attracted by magnets",
          "Gold is the heaviest, so it is attracted most strongly"
        ],
        "q.5.1-x3.observe": "Only the steel nail is attracted. Gold and copper are metals but they are not magnetic — not every metal is attracted by a magnet.",
        "q.5.2-x1.ask": "Which one doesn't belong? Five properties used to tell metals from non-metals — find a reason for each that makes only it different.",
        "q.5.2-x1.why": "Knowing how each property is tested helps you plan your own tests on an unknown material.",
        "q.5.2-x1.items": ["shiny", "dull", "sonorous when tapped", "brittle", "conducts electricity"],
        "q.5.2-x1.props": ["you can see it just by looking, and it is a sign of a metal", "you can see it just by looking, and it is a sign of a non-metal", "you test it by tapping and listening", "it shows when a solid is dropped and shatters", "you test it with a circuit with a cell, a lamp and crocodile clips", "is a property of metals", "is a property of non-metals"],
        "q.5.2-x2.ask": "An unknown material has a dull surface and shatters when dropped. You touched the two crocodile clips together and the lamp lit; then you clipped the material into the circuit and the lamp did not light. What is the material?",
        "q.5.2-x2.why": "Drawing a conclusion from several tests that all point the same way is how scientists classify a new material.",
        "q.5.2-x2.options": ["A metal", "Impossible to tell yet", "A non-metal"],
        "q.5.2-x2.reasons": [
          "One metal-like sign is enough to call it a metal",
          "All three signs — dull, brittle, does not conduct electricity — belong to non-metals",
          "The lamp not lighting means the cell is flat, so you cannot conclude anything"
        ],
        "q.5.2-x2.observe": "It is a non-metal. Every sign points the same way, and because the lamp lit when you touched the clips together, you know the test circuit was working.",
        "q.5.2-x3.ask": "You test a copper bar, but the two crocodile clips only lightly touch the bar (poor contact). What will the lamp do?",
        "q.5.2-x3.why": "A strange result can come from how the experiment was done, so checking the equipment before concluding is an important habit.",
        "q.5.2-x3.options": ["Light normally, because copper conducts electricity well", "Maybe not light, which could lead you to the wrong conclusion", "Light more brightly, because less contact means less in the way"],
        "q.5.2-x3.reasons": [
          "Metals conduct electricity well, so the lamp lights whatever the contact is like",
          "A light touch lets the current flow more easily",
          "Current only flows through the material when the clips make good contact with it"
        ],
        "q.5.2-x3.observe": "The lamp may not light even though copper is a good conductor. That is why the book says the clips must make good contact with the material, and you should touch the clips together first to check the lamp works.",
        "q.5.3-x1.ask": "Which one doesn't belong? Three metals and two alloys — find a reason for each that makes only it different.",
        "q.5.3-x1.why": "Comparing alloys with the metals they are made from shows you that mixing metals can create new properties.",
        "q.5.3-x1.items": ["copper", "zinc", "brass", "bronze", "tin"],
        "q.5.3-x1.props": ["melts at 1085 °C and is used for electrical wires", "is coated in a thin layer onto iron to stop rusting", "is an alloy of copper and zinc", "is an alloy of copper and tin", "coats the inside of food cans", "is an alloy that melts over a range of temperatures", "is an element, a soft metal"],
        "q.5.3-x2.ask": "18 carat gold has 18 parts of pure gold and 6 parts of other metals, out of 24 parts in total. How many parts (out of 24) of a 22 carat gold ring are other metals?",
        "q.5.3-x2.why": "Reading the meaning of a number like \"carat\" correctly helps you understand what an alloy is made of instead of just memorising.",
        "q.5.3-x2.reasons": [
          "Carat is the number of parts of gold out of 24, so the rest is 24 − 22",
          "Carat is the number of parts of other metals, so there are 22 parts of other metals",
          "The higher the carat, the more other metals there are, so it must be more than 6 parts"
        ],
        "q.5.3-x3.ask": "Bubble raft model: rows of small bubbles of the same size are packed evenly in the dish. You blow one big bubble into the middle, then gently push so the rows slide. Compared with before the big bubble, how do the rows slide?",
        "q.5.3-x3.why": "A particle model explains why alloys are harder than pure metals — a way of thinking you will use again and again in chemistry.",
        "q.5.3-x3.options": ["More easily", "The same as before", "Less easily"],
        "q.5.3-x3.reasons": [
          "The big bubble sticks tightly to the small ones, like a chemical bond",
          "The big bubble stops the rows being regular, so the layers get stuck",
          "The big bubble is heavy, so it presses the rows down"
        ],
        "q.5.3-x3.observe": "The rows slide less easily. That is the model of an alloy: atoms of a different size disrupt the regular pattern, the layers get stuck, so the alloy is harder and stronger. The atoms are only mixed — they are not bonded together.",
        "q.5.4-x1.ask": "Which one doesn't belong? Four mixtures — find a reason for each that makes only the way to separate it different.",
        "q.5.4-x1.why": "Choosing a separation method from the different properties of the substances is the skill you use when planning how to separate a new mixture.",
        "q.5.4-x1.items": ["iron filings and sulfur", "copper sulfate and water", "dye and water", "water with sand and salt"],
        "q.5.4-x1.props": ["can be separated with a magnet", "only needs to stay in a warm room until all the water evaporates", "uses a condenser to collect pure water", "needs filter paper to hold back a solid", "you get the solid that was in the water by letting the water evaporate", "needs to be heated with a heat source"],
        "q.5.4-x2.ask": "You boil a mixture of water and dye; the steam goes into a condenser with cold water flowing round the outside. What will the liquid that drips into the beaker be like?",
        "q.5.4-x2.why": "Knowing where each substance goes in the apparatus helps you explain why two substances with different boiling points can be separated.",
        "q.5.4-x2.options": ["Pure, colourless water", "Coloured water, like in the flask", "Nothing, because the steam escapes"],
        "q.5.4-x2.reasons": [
          "The condenser holds back the colour like filter paper",
          "The water boils into steam while the dye stays in the flask; the cold water condenses the steam back into liquid water",
          "The dye is dissolved in the water, so it evaporates with the water"
        ],
        "q.5.4-x2.observe": "The beaker collects pure water and the dye stays in the flask. The two substances can be separated because they have different boiling points.",
        "q.5.4-x3.ask": "While filtering water with sand and salt, a friend wants to go faster and stirs the mixture inside the filter paper with a pencil. What could happen?",
        "q.5.4-x3.why": "Knowing in advance where a step of an experiment can go wrong helps you work carefully and get reliable results.",
        "q.5.4-x3.options": ["Filtering is faster and the salt is cleaner", "Nothing changes", "The filter paper may tear and sand gets into the flask"],
        "q.5.4-x3.reasons": [
          "Wet filter paper tears very easily",
          "Stirring dissolves the sand in the water, so filtering is faster",
          "The pencil makes the water run down the outside of the funnel"
        ],
        "q.5.4-x3.observe": "Wet filter paper tears very easily; once it tears, sand gets into the flask and the separation is spoiled. So do not touch wet filter paper, and pour the mixture in very slowly.",
        "q.5.5-x1.ask": "Which one doesn't belong? Find a reason for each item that makes only it different from the other three.",
        "q.5.5-x1.why": "Sorting familiar substances into acids and alkalis gets you ready to use indicators in topic 5.6.",
        "q.5.5-x1.items": ["lemon juice", "hydrochloric acid", "sodium hydroxide", "toothpaste"],
        "q.5.5-x1.props": ["is a food that tastes sour because of citric acid", "is a common laboratory acid", "is a strong alkali, a compound of sodium, hydrogen and oxygen", "is something you use every day to clean your teeth", "is an acid", "contains an alkali"],
        "q.5.5-x2.ask": "You dilute a strong acid with lots of water. What is the acid like after it is diluted?",
        "q.5.5-x2.why": "Knowing how dangerous a dilute acid really is helps you work safely in the laboratory.",
        "q.5.5-x2.options": ["No longer dangerous, you can touch it", "Less dangerous but still harmful", "More dangerous, because there is more liquid"],
        "q.5.5-x2.reasons": [
          "Water makes the acid disappear completely",
          "Adding water makes the acid stronger",
          "Water dilutes the acid so it is weaker, but the acid is still there"
        ],
        "q.5.5-x2.observe": "A dilute acid is less dangerous but can still irritate skin and eyes, so bottles of dilute acid still have hazard labels. That is also why, if you spill acid, you wash the area with lots of water.",
        "q.5.5-x3.ask": "What happens when you mix an acid with an alkali?",
        "q.5.5-x3.why": "The idea that acids and alkalis are opposites is the basis for understanding the pH scale and indicators in the next topic.",
        "q.5.5-x3.options": ["They cancel each other out", "They make a stronger acid", "They make a stronger alkali"],
        "q.5.5-x3.reasons": [
          "Two dangerous substances mixed together are even more dangerous",
          "An alkali is always stronger than an acid, so the alkali wins",
          "Acids and alkalis are chemical opposites"
        ],
        "q.5.5-x3.observe": "Acids and alkalis cancel each other out when they are mixed, because they are chemical opposites. Being acidic or alkaline is a chemical property of a substance.",
        "q.5.6-x1.ask": "You measure the pH of liquids with universal indicator in a test tube. Design fair tests: change only one thing each time.",
        "q.5.6-x1.why": "Knowing what changes the pH and what does not helps you trust your measurements — pH is a property of the substance itself.",
        "q.5.6-x1.factors": ["the liquid being tested is a stronger acid", "the amount of liquid poured into the test tube", "the size of the clean test tube used"],
        "q.5.6-x1.outcomes": ["the pH value you read"],
        "q.5.6-x2.ask": "Which one doesn't belong? Three indicators — find a reason for each that makes only it different from the other two.",
        "q.5.6-x2.why": "Knowing what information each indicator gives you helps you choose the right indicator for each question.",
        "q.5.6-x2.items": ["red cabbage juice", "litmus", "universal indicator"],
        "q.5.6-x2.props": ["you can make it yourself from a vegetable", "is yellow in an alkali", "is purple in a neutral substance", "tells you the pH, that is, how acidic or alkaline something is", "only tells you acid or alkali, not strong or weak", "is red in a strong acid"],
        "q.5.6-x3.ask": "You add a few drops of red cabbage juice to a cup of lemon juice. What colour will the liquid in the cup become?",
        "q.5.6-x3.why": "Using what you already know (lemon juice is an acid) to predict an indicator colour is how scientists check an unknown substance.",
        "q.5.6-x3.options": ["Yellow", "Blue", "Red"],
        "q.5.6-x3.reasons": [
          "Lemon juice is yellow, so the mixture will be yellow",
          "Lemon juice is an acid, and red cabbage juice turns red in acids",
          "Lemon juice is mostly water, so it will be blue as in water"
        ],
        "q.5.6-x3.observe": "The liquid turns red: lemon juice is an acid. Red cabbage juice is red in acids, blue in water and yellow in alkalis."
      },
      vi: {}
    }
  });
})();
