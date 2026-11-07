// 🚀 Extension quests — Science 7, Unit 2 Materials and their structure. Self-written; every fact comes from the
// stage's own learn / learnDetail / example. Science-thinking types: predict, odd, fair (MATH_QUESTS_GUIDE.md § Khoa học).
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 2,
    sections: {
      "2.1": [
        {
          id: "2.1-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn vật quen thuộc — với mỗi vật, hãy tìm một lý do khiến chỉ nó khác ba vật còn lại.",
          why: "Xét một vật theo nhiều tính chất cùng lúc là cách em xếp đúng một chất vào thể của nó, kể cả khi có ngoại lệ.",
          items: ["viên gạch", "nước máy", "không khí trong quả bóng bay", "miếng bọt biển"],
          props: [
            { id: "keep", text: "dù bị ép mạnh vẫn giữ nguyên hình dạng", has: [0] },
            { id: "liquid", text: "lấy hình dạng của vật chứa nhưng thể tích không đổi", has: [1] },
            { id: "fill", text: "lấp đầy vật chứa kín, các hạt ở rất xa nhau", has: [2] },
            { id: "sponge", text: "là chất rắn nhưng vẫn nén được", has: [3] },
            { id: "solid", text: "là chất rắn", has: [0, 3] },
            { id: "squash", text: "nén được", has: [2, 3] }
          ],
          sample: { item: 3, prop: "sponge" }
        },
        {
          id: "2.1-x2", type: "predict", sim: "particles",
          ask: "Hai ống kín có pít-tông: ống thứ nhất chứa đầy nước, ống thứ hai chứa đầy không khí. Em ấn mạnh pít-tông của từng ống. Điều gì xảy ra?",
          why: "Dự đoán bằng thuyết hạt rồi đối chiếu giúp em thấy lý thuyết giải thích được tính chất của từng thể.",
          options: ["Cả hai pít-tông đều ấn vào được như nhau", "Pít-tông ống nước đi vào sâu hơn", "Chỉ pít-tông ống không khí ấn vào được"],
          answer: 2,
          reasons: [
            "Hạt khí ở rất xa nhau nên ép được chúng lại gần nhau; hạt chất lỏng đã chạm nhau nên không ép bẹp được",
            "Chất lỏng chảy được nên cũng nén được giống chất khí",
            "Nước nặng hơn không khí nên đè pít-tông xuống sâu hơn"
          ],
          reason: 0,
          observe: "Pít-tông ống không khí đi vào được: khí bị nén, các hạt dồn lại gần nhau và chiếm ít chỗ hơn. Pít-tông ống nước gần như không nhúc nhích, vì chất lỏng không nén được.",
          sample: { option: 2, reason: 0 }
        },
        {
          id: "2.1-x3", type: "predict",
          ask: "Giả sử lấy được hết mọi hạt ra khỏi một bình kín. Bên trong bình lúc đó có gì?",
          why: "Hiểu chân không giúp em hình dung rõ hơn rằng giữa các hạt khí không có gì cả — ý tưởng em sẽ dùng khi giải thích sự chuyển thể.",
          options: ["Không có gì cả", "Vẫn còn một ít không khí loãng", "Một chất khí không màu, không mùi"],
          answer: 0,
          reasons: [
            "Chân không là khoảng không gian không có hạt nào, nên nó không chứa gì",
            "Ở đâu cũng luôn còn không khí",
            "Chất khí vô hình vẫn ở lại dù hết hạt"
          ],
          reason: 0,
          observe: "Bình chứa chân không: không có hạt nào, tức là không có gì cả. Mọi chất, kể cả chất khí, đều được tạo nên từ các hạt.",
          sample: { option: 0, reason: 0 }
        }
      ],
      "2.2": [
        {
          id: "2.2-x1", type: "fair", sim: "heating",
          ask: "Thiết kế thí nghiệm công bằng với nước và đèn Bunsen. Em nghĩ ra được bao nhiêu thí nghiệm khác nhau?",
          why: "Chỉ thay đổi một điều mỗi lần là cách em biết chắc điều gì làm nhiệt độ thay đổi — và phát hiện lúc nào nó không đổi.",
          factors: [
            { id: "warm", text: "nước ban đầu ấm hay lạnh" },
            { id: "time", text: "số phút đun khi nước chưa sôi" },
            { id: "more", text: "số phút đun thêm khi nước đã sôi mạnh" }
          ],
          outcomes: [
            { id: "temp", text: "số chỉ của nhiệt kế" },
            { id: "evap", text: "nước bay hơi nhanh hay chậm" }
          ],
          links: [
            { change: "warm", measure: "evap", effect: "up" },
            { change: "time", measure: "temp", effect: "up" },
            { change: "more", measure: "temp", effect: "same" }
          ],
          sample: { change: "more", measure: "temp", keep: ["warm", "time"], effect: "same" }
        },
        {
          id: "2.2-x2", type: "whatif", base: 68, unitLabel: "°C",
          ask: "Khi đun nước, nhiệt độ ghi được: 20, 32, 44, 56, 68 °C ở các phút 0, 1, 2, 3, 4. Nếu nhiệt độ tiếp tục tăng như vậy, đến phút thứ 6 nhiệt kế chỉ bao nhiêu °C?",
          why: "Đọc quy luật trong bảng số liệu để dự đoán là kỹ năng em dùng khi vẽ và mô tả đồ thị nhiệt độ.",
          answer: function () { return 92; },
          tol: 0.01,
          reasons: [
            "Mỗi phút nhiệt độ tăng đều 12 °C, nên thêm 2 phút thì tăng thêm 24 °C",
            "Nhiệt độ dừng lại ở 68 °C",
            "Nước đã sôi nên nhiệt kế chỉ 100 °C"
          ],
          reason: 0,
          sample: { guess: "92", reason: 0 }
        },
        {
          id: "2.2-x3", type: "predict",
          ask: "Hơi nước từ một ấm nước đang sôi chạm vào một chiếc đĩa lạnh. Em dự đoán thấy gì trên đĩa?",
          why: "Nhận ra sự ngưng tụ trong đời sống giúp em gọi đúng tên từng sự chuyển thể của nước.",
          options: ["Những giọt nước nhỏ xuất hiện trên đĩa", "Đĩa vẫn khô vì hơi nước bay đi mất", "Một lớp nước đá mỏng phủ trên đĩa"],
          answer: 0,
          reasons: [
            "Hơi nước chạm vật lạnh thì ngưng tụ, trở lại thành nước lỏng",
            "Hơi nước là khí vô hình nên không thể thành nước lại",
            "Vật lạnh làm hơi nước đông đặc ngay thành nước đá"
          ],
          reason: 0,
          observe: "Trên đĩa đọng những giọt nước nhỏ: hơi nước đã ngưng tụ thành nước lỏng. Đông đặc là từ lỏng sang rắn, xảy ra khi nước ở trong ngăn đá.",
          sample: { option: 0, reason: 0 }
        }
      ],
      "2.3": [
        {
          id: "2.3-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn sự chuyển thể — tìm cho mỗi quá trình một lý do (về các hạt) khiến chỉ nó khác.",
          why: "Giải thích mỗi sự chuyển thể bằng cách các hạt chuyển động là điều em sẽ dùng lại ngay khi học vòng tuần hoàn của nước.",
          items: ["nóng chảy", "sôi", "ngưng tụ", "đông đặc"],
          props: [
            { id: "slide", text: "lực hút không giữ nổi trật tự cố định, các hạt bắt đầu trượt qua nhau", has: [0] },
            { id: "escape", text: "các hạt đủ năng lượng phá vỡ lực hút yếu và thoát ra tự do", has: [1] },
            { id: "cold", text: "hạt đang chuyển động tự do gặp bề mặt lạnh, chậm lại và xích lại gần nhau", has: [2] },
            { id: "fixed", text: "kết thúc khi các hạt chỉ còn dao động trong trật tự cố định", has: [3] },
            { id: "in", text: "xảy ra khi năng lượng nhiệt được truyền vào các hạt", has: [0, 1] },
            { id: "out", text: "xảy ra khi năng lượng nhiệt truyền ra khỏi các hạt", has: [2, 3] }
          ],
          sample: { item: 1, prop: "escape" }
        },
        {
          id: "2.3-x2", type: "predict",
          ask: "Một khối chất rắn được đun nóng nhưng chưa nóng chảy. Kích thước của nó sẽ thế nào?",
          why: "Phân biệt \"hạt to ra\" với \"hạt chiếm nhiều chỗ hơn\" giúp em dùng thuyết hạt cho đúng.",
          options: ["Co nhỏ lại", "Nở to ra một chút", "Giữ nguyên vì chất rắn có thể tích cố định"],
          answer: 1,
          reasons: [
            "Từng hạt phình to ra khi bị đun nóng",
            "Hạt nhận năng lượng nhiệt, dao động mạnh hơn nên chiếm nhiều chỗ hơn",
            "Hạt trong chất rắn đứng yên nên không gì thay đổi được"
          ],
          reason: 1,
          observe: "Chất rắn nở ra. Bản thân các hạt không to lên: chúng dao động mạnh hơn nên chiếm nhiều chỗ hơn, còn lực hút vẫn giữ chúng đúng vị trí.",
          sample: { option: 1, reason: 1 }
        },
        {
          id: "2.3-x3", type: "predict",
          ask: "Em cho một cốc nước vào ngăn đá. Trong lúc nước lạnh dần đến khi thành đá, các hạt nước sẽ thế nào?",
          why: "Biết năng lượng truyền ra khỏi hạt khi làm lạnh giúp em giải thích cả sự đông đặc lẫn sự ngưng tụ.",
          options: ["Chuyển động nhanh hơn vì bị lạnh", "Dừng hẳn, không còn chuyển động gì", "Chậm dần rồi chỉ còn dao động tại chỗ"],
          answer: 2,
          reasons: [
            "Năng lượng nhiệt truyền từ hạt ra xung quanh nên hạt còn ít năng lượng hơn",
            "Cái lạnh truyền vào làm hạt chạy nhanh hơn",
            "Trong chất rắn các hạt hoàn toàn đứng yên"
          ],
          reason: 0,
          observe: "Các hạt chậm dần, khó trượt qua nhau hơn, cuối cùng không di chuyển nữa mà chỉ dao động trong trật tự cố định: nước đã đông đặc.",
          sample: { option: 2, reason: 0 }
        }
      ],
      "2.4": [
        {
          id: "2.4-x1", type: "odd", sim: "watercycle",
          ask: "Cái nào khác loại? Năm quá trình trong vòng tuần hoàn của nước — mỗi quá trình có thể là \"kẻ lạc loài\" theo một lý do riêng.",
          why: "Dùng đúng thuật ngữ cho từng giai đoạn là yêu cầu chính khi em làm áp phích vòng tuần hoàn của nước.",
          items: ["bay hơi", "thoát hơi nước", "ngưng tụ", "giáng thuỷ", "dòng chảy mặt"],
          props: [
            { id: "sea", text: "nước ở sông, hồ, đại dương thành hơi nhờ năng lượng Mặt Trời", has: [0] },
            { id: "plant", text: "nước bay hơi từ cây vào khí quyển", has: [1] },
            { id: "cloud", text: "hơi nước lạnh đi thành giọt nước nhỏ tạo nên mây", has: [2] },
            { id: "fall", text: "nước rơi từ mây xuống thành mưa, tuyết, mưa đá hay mưa tuyết", has: [3] },
            { id: "soil", text: "nước chảy trên mặt đất vào sông, có thể cuốn theo đất", has: [4] },
            { id: "vapour", text: "nước lỏng chuyển thành hơi nước", has: [0, 1] },
            { id: "cycle", text: "là một phần của vòng tuần hoàn của nước", has: [0, 1, 2, 3, 4] }
          ],
          sample: { item: 1, prop: "plant" }
        },
        {
          id: "2.4-x2", type: "whatif", base: 350, unitLabel: "mm",
          ask: "Một vùng nhận 1000 mm mưa mỗi năm: 40% bay hơi và thoát hơi, 25% thành dòng chảy mặt, phần còn lại thành nước ngầm (350 mm). Giả sử lượng mưa vẫn 1000 mm và dòng chảy mặt vẫn 25%, nhưng bay hơi và thoát hơi chỉ còn 30%. Nước ngầm là bao nhiêu mm?",
          why: "Theo dõi các \"con đường\" của nước bằng con số giúp em hiểu vì sao thay đổi một phần của vòng tuần hoàn ảnh hưởng tới các phần khác.",
          answer: function () { return 450; },
          tol: 0.01,
          reasons: [
            "Ba con đường luôn cộng lại bằng 100%, nên phần bay hơi giảm bao nhiêu thì phần nước ngầm tăng bấy nhiêu",
            "Nước ngầm không liên quan đến bay hơi nên vẫn là 350 mm",
            "Bay hơi giảm 10% nên nước ngầm cũng giảm 10%"
          ],
          reason: 0,
          sample: { guess: "450", reason: 0 }
        },
        {
          id: "2.4-x3", type: "predict",
          ask: "Sau cơn mưa có một vũng nước trên đường. Trời nắng suốt cả ngày. Đến chiều vũng nước sẽ thế nào?",
          why: "Dùng thuyết hạt cho một cảnh đời thường là đúng câu hỏi sách đặt ra ở cuối bài vòng tuần hoàn của nước.",
          options: ["Nhỏ dần rồi biến mất", "Vẫn còn nguyên như lúc đầu", "To ra vì nắng làm nước nở ra"],
          answer: 0,
          reasons: [
            "Một số hạt nước nhận đủ năng lượng từ Mặt Trời để thoát khỏi lực giữ chúng và thành hơi nước",
            "Nước chỉ thành hơi khi sôi ở 100 °C",
            "Nắng phá huỷ nước, làm nó mất đi mãi mãi"
          ],
          reason: 0,
          observe: "Vũng nước khô dần: nước bay hơi vào khí quyển. Hơi nước đó không mất đi — nó có thể ngưng tụ thành mây rồi rơi xuống thành mưa ở nơi khác.",
          sample: { option: 0, reason: 0 }
        }
      ],
      "2.5": [
        {
          id: "2.5-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn nguyên tố — tìm cho mỗi nguyên tố một lý do (về cách nguyên tử sắp xếp) khiến chỉ nó khác.",
          why: "Biết nguyên tử trong nguyên tố có thể đứng riêng, xếp sát hay liên kết thành hạt là bước chuẩn bị để hiểu hợp chất ở chặng sau.",
          items: ["neon", "vàng", "oxygen", "lưu huỳnh"],
          props: [
            { id: "free", text: "nguyên tử chuyển động tự do, không gắn vào nhau", has: [0] },
            { id: "metal", text: "là kim loại, nguyên tử xếp sát nhau", has: [1] },
            { id: "two", text: "mỗi hạt gồm 2 nguyên tử", has: [2] },
            { id: "eight", text: "mỗi hạt gồm 8 nguyên tử", has: [3] },
            { id: "bond", text: "nguyên tử liên kết với nhau thành những hạt nhỏ", has: [2, 3] },
            { id: "element", text: "chỉ gồm một loại nguyên tử", has: [0, 1, 2, 3] }
          ],
          sample: { item: 3, prop: "eight" }
        },
        {
          id: "2.5-x2", type: "predict",
          ask: "Theo ý tưởng của Democritus, nếu em cứ cắt đôi một mẩu vàng mãi, cuối cùng em sẽ được gì?",
          why: "Đi theo một ý tưởng đến cùng giúp em hiểu vì sao từ \"atom\" có nghĩa là \"không thể chia\".",
          options: ["Mẩu vàng nhỏ mãi mãi, không bao giờ hết", "Một mẩu rất nhỏ không thể cắt được nữa", "Một mẩu của một chất khác, không còn là vàng"],
          answer: 1,
          reasons: [
            "Mọi thứ gồm những mẩu rất nhỏ không thể chia nhỏ hơn, và vàng chỉ gồm một loại mẩu như thế",
            "Vật chất liền một khối nên có thể cắt nhỏ mãi",
            "Cắt nhỏ làm vàng biến thành nguyên tố khác"
          ],
          reason: 0,
          observe: "Democritus gọi mẩu nhỏ nhất ấy là nguyên tử. Ngày nay ta biết nguyên tử có thật: kính hiển vi đặc biệt đã cho thấy được một số loại nguyên tử lớn.",
          sample: { option: 1, reason: 0 }
        },
        {
          id: "2.5-x3", type: "odd",
          ask: "Cái nào khác loại? Dùng bảng tuần hoàn để tìm cho mỗi nguyên tố một lý do khiến chỉ nó khác.",
          why: "Đọc được chu kì, vùng kim loại – phi kim và khối lượng nguyên tử từ bảng tuần hoàn là kỹ năng em dùng suốt môn Hoá.",
          items: ["sodium (Na)", "magnesium (Mg)", "argon (Ar)", "helium (He)"],
          props: [
            { id: "latin", text: "kí hiệu lấy từ một tên Latin cổ", has: [0] },
            { id: "heavier", text: "là kim loại có nguyên tử nặng hơn nguyên tử sodium", has: [1] },
            { id: "heaviest", text: "có nguyên tử nặng nhất trong bốn nguyên tố này", has: [2] },
            { id: "p3", text: "nằm ở chu kì 3", has: [0, 1, 2] },
            { id: "metal", text: "là kim loại", has: [0, 1] },
            { id: "nonmetal", text: "là phi kim", has: [2, 3] }
          ],
          sample: { item: 3, prop: "p3" }
        }
      ],
      "2.6": [
        {
          id: "2.6-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn chất trong sơ đồ hạt — tìm cho mỗi chất một lý do khiến chỉ nó khác.",
          why: "Đọc công thức để biết chất gồm những nguyên tử nào là cách nhanh nhất phân biệt nguyên tố với hợp chất.",
          items: ["O₂", "CO₂", "H₂O", "CH₄"],
          props: [
            { id: "element", text: "là nguyên tố vì hai nguyên tử trong hạt cùng một loại", has: [0] },
            { id: "di", text: "tên gọi có \"di\" vì có hai nguyên tử oxygen với một nguyên tử carbon", has: [1] },
            { id: "ho", text: "chỉ gồm hydrogen và oxygen", has: [2] },
            { id: "five", text: "mỗi hạt có 5 nguyên tử", has: [3] },
            { id: "oxy", text: "có nguyên tử oxygen", has: [0, 1, 2] },
            { id: "carbon", text: "có nguyên tử carbon", has: [1, 3] },
            { id: "hydro", text: "có nguyên tử hydrogen", has: [2, 3] }
          ],
          sample: { item: 3, prop: "five" }
        },
        {
          id: "2.6-x2", type: "predict",
          ask: "Sodium và chlorine là hai nguyên tố em chắc chắn không muốn ăn. Khi chúng liên kết với nhau thành sodium chloride, em dự đoán hợp chất này thế nào?",
          why: "Hiểu rằng hợp chất có tính chất mới sẽ giúp em ở chặng sau, khi so sánh hỗn hợp sắt – lưu huỳnh với iron sulfide.",
          options: ["Vẫn giống hệt sodium hoặc chlorine", "Có tính chất nằm giữa sodium và chlorine", "Có tính chất hoàn toàn mới — chính là muối ăn"],
          answer: 2,
          reasons: [
            "Hợp chất giữ nguyên tính chất của từng nguyên tố tạo nên nó",
            "Khi liên kết, các nguyên tố mất tính chất riêng và hợp chất có tính chất mới",
            "Ghép hai chất thì tính chất luôn ở khoảng giữa hai chất"
          ],
          reason: 1,
          observe: "Sodium chloride là muối ăn, không hề giống sodium hay chlorine. Các nguyên tố đã mất tính chất riêng khi liên kết thành hợp chất.",
          sample: { option: 2, reason: 1 }
        }
      ],
      "2.7": [
        {
          id: "2.7-x1", type: "predict",
          ask: "Em đun hỗn hợp mạt sắt và bột lưu huỳnh đến khi đỏ rực, để nguội, rồi đưa nam châm lại gần chất mới tạo thành. Điều gì xảy ra?",
          why: "Thử bằng nam châm là cách đơn giản để kiểm tra em đang có một hỗn hợp hay một hợp chất.",
          options: ["Nam châm hút sắt ra khỏi chất mới", "Nam châm không hút được sắt ra", "Nam châm hút cả lưu huỳnh"],
          answer: 1,
          reasons: [
            "Sắt vẫn còn nằm trong đó nên vẫn bị hút như trước",
            "Sắt và lưu huỳnh đã liên kết thành iron sulfide, một hợp chất không bị nam châm hút",
            "Đun nóng làm lưu huỳnh trở thành kim loại"
          ],
          reason: 1,
          observe: "Không tách được sắt bằng nam châm: chất mới là iron sulfide, không bị nam châm hút và cũng không dẫn nhiệt, không dẫn điện. Trước khi đun, trong hỗn hợp thì nam châm hút được mạt sắt.",
          sample: { option: 1, reason: 1 }
        },
        {
          id: "2.7-x2", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi chất một lý do khiến chỉ nó khác ba chất còn lại.",
          why: "So sánh nguyên tố, hỗn hợp và hợp chất cạnh nhau giúp em nhớ chắc sự khác nhau giữa chúng.",
          items: ["mạt sắt", "bột lưu huỳnh", "hỗn hợp sắt và lưu huỳnh", "iron sulfide"],
          props: [
            { id: "conduct", text: "là kim loại, dẫn nhiệt và dẫn điện", has: [0] },
            { id: "yellow", text: "là phi kim màu vàng, giòn", has: [1] },
            { id: "separate", text: "tách được thành hai chất bằng nam châm", has: [2] },
            { id: "compound", text: "là hợp chất", has: [3] },
            { id: "element", text: "là nguyên tố", has: [0, 1] },
            { id: "both", text: "có cả nguyên tử sắt và nguyên tử lưu huỳnh", has: [2, 3] },
            { id: "magnet", text: "có phần bị nam châm hút", has: [0, 2] }
          ],
          sample: { item: 2, prop: "separate" }
        },
        {
          id: "2.7-x3", type: "whatif", base: 42, unitLabel: "m³",
          ask: "Một phòng học chứa 200 m³ không khí thì có khoảng 42 m³ oxygen. Một hội trường chứa 300 m³ không khí thì có khoảng bao nhiêu m³ oxygen?",
          why: "Dùng phần trăm thành phần của không khí cho phép em ước tính lượng một khí trong bất kỳ căn phòng nào.",
          answer: function () { return 63; },
          tol: 0.01,
          reasons: [
            "Oxygen luôn chiếm khoảng 21% không khí, nên không khí gấp rưỡi thì oxygen cũng gấp rưỡi",
            "Phòng nào cũng có khoảng 42 m³ oxygen",
            "Phòng càng to thì oxygen chiếm phần trăm càng nhỏ"
          ],
          reason: 0,
          sample: { guess: "63", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.2.1-x1.ask": "Which one doesn't belong? Four everyday things — for each one, find a reason that makes only it different from the other three.",
        "q.2.1-x1.why": "Looking at several properties at once is how you put a material in the right state, even when there is an exception.",
        "q.2.1-x1.items": ["a brick", "tap water", "the air in a balloon", "a sponge"],
        "q.2.1-x1.props": ["keeps its shape even when squeezed hard", "takes the shape of its container but keeps the same volume", "fills a closed container, with particles very far apart", "is a solid but can still be compressed", "is a solid", "can be compressed"],
        "q.2.1-x2.ask": "Two sealed tubes with plungers: the first is full of water, the second is full of air. You push hard on each plunger. What happens?",
        "q.2.1-x2.why": "Predicting with the particle theory and then checking shows you how the theory explains the properties of each state.",
        "q.2.1-x2.options": ["Both plungers go in by the same amount", "The plunger in the water tube goes in further", "Only the plunger in the air tube goes in"],
        "q.2.1-x2.reasons": [
          "Gas particles are far apart, so they can be squeezed closer; liquid particles already touch, so a liquid cannot be squashed",
          "Liquids can flow, so they can be compressed just like gases",
          "Water is heavier than air, so it pushes the plunger further in"
        ],
        "q.2.1-x2.observe": "The plunger in the air tube goes in: the gas is compressed, its particles are pushed closer together and take up less space. The plunger in the water tube hardly moves, because liquids cannot be compressed.",
        "q.2.1-x3.ask": "Imagine you could take every particle out of a sealed container. What would be inside it then?",
        "q.2.1-x3.why": "Understanding a vacuum helps you picture that there is nothing at all between gas particles — an idea you will use to explain changes of state.",
        "q.2.1-x3.options": ["Nothing at all", "A little thin air", "A colourless gas with no smell"],
        "q.2.1-x3.reasons": [
          "A vacuum is a space with no particles in it, so it contains nothing",
          "There is always some air everywhere",
          "An invisible gas stays behind even when the particles are gone"
        ],
        "q.2.1-x3.observe": "The container holds a vacuum: no particles, so nothing at all. Every substance, gases included, is made of particles.",
        "q.2.2-x1.ask": "Design fair tests with water and a Bunsen burner. How many different tests can you think of?",
        "q.2.2-x1.why": "Changing only one thing at a time is how you know for sure what makes the temperature change — and spot when it doesn't change.",
        "q.2.2-x1.factors": ["whether the water starts warm or cold", "the number of minutes of heating before the water boils", "the number of extra minutes of heating once the water is boiling hard"],
        "q.2.2-x1.outcomes": ["the thermometer reading", "how fast the water evaporates"],
        "q.2.2-x2.ask": "While heating water, the temperatures recorded were 20, 32, 44, 56, 68 °C at minutes 0, 1, 2, 3, 4. If the temperature keeps rising in the same way, what will the thermometer read at minute 6, in °C?",
        "q.2.2-x2.why": "Reading a pattern in a results table to make a prediction is the skill you use when you draw and describe a temperature graph.",
        "q.2.2-x2.reasons": [
          "The temperature rises by 12 °C every minute, so 2 more minutes add another 24 °C",
          "The temperature stops at 68 °C",
          "The water is boiling, so the thermometer reads 100 °C"
        ],
        "q.2.2-x3.ask": "Steam from a boiling kettle touches a cold plate. What do you predict you will see on the plate?",
        "q.2.2-x3.why": "Spotting condensation in everyday life helps you name each change of state of water correctly.",
        "q.2.2-x3.options": ["Small drops of water appear on the plate", "The plate stays dry because the steam floats away", "A thin layer of ice covers the plate"],
        "q.2.2-x3.reasons": [
          "When steam touches something cold it condenses, turning back into liquid water",
          "Steam is an invisible gas, so it can never turn back into water",
          "A cold object makes steam freeze straight into ice"
        ],
        "q.2.2-x3.observe": "Small drops of water collect on the plate: the steam has condensed into liquid water. Freezing is liquid to solid, which happens when water is put in a freezer.",
        "q.2.3-x1.ask": "Which one doesn't belong? Four changes of state — find a reason (about the particles) for each process that makes only it different.",
        "q.2.3-x1.why": "Explaining each change of state by how the particles move is something you will use again straight away in the water cycle.",
        "q.2.3-x1.items": ["melting", "boiling", "condensing", "freezing"],
        "q.2.3-x1.props": ["the attractive forces can no longer hold the fixed pattern, and particles start to slide past each other", "particles with enough energy break the weak attractive forces and escape to move freely", "freely moving particles meet a cold surface, slow down and move closer together", "it ends when the particles only vibrate in a fixed pattern", "it happens when heat energy is transferred to the particles", "it happens when heat energy is transferred away from the particles"],
        "q.2.3-x2.ask": "A block of solid is heated but does not melt. What happens to its size?",
        "q.2.3-x2.why": "Telling \"the particles get bigger\" apart from \"the particles take up more space\" helps you use the particle theory correctly.",
        "q.2.3-x2.options": ["It shrinks", "It expands a little", "It stays the same because a solid has a fixed volume"],
        "q.2.3-x2.reasons": [
          "Each particle swells up when it is heated",
          "The particles gain heat energy and vibrate more, so they take up more space",
          "Particles in a solid are still, so nothing can change"
        ],
        "q.2.3-x2.observe": "The solid expands. The particles themselves do not get bigger: they vibrate more and take up more space, while the attractive forces still hold them in place.",
        "q.2.3-x3.ask": "You put a cup of water in the freezer. As the water cools until it turns to ice, what happens to the water particles?",
        "q.2.3-x3.why": "Knowing that energy is transferred away from the particles when they cool helps you explain both freezing and condensing.",
        "q.2.3-x3.options": ["They move faster because they are cold", "They stop completely and do not move at all", "They slow down until they only vibrate in place"],
        "q.2.3-x3.reasons": [
          "Heat energy is transferred from the particles to the surroundings, so the particles have less energy",
          "The cold goes into the particles and makes them move faster",
          "In a solid the particles are completely still"
        ],
        "q.2.3-x3.observe": "The particles slow down, find it harder to slide past each other, and finally stop moving around and only vibrate in a fixed pattern: the water has frozen.",
        "q.2.4-x1.ask": "Which one doesn't belong? Five processes in the water cycle — each one can be the odd one out for its own reason.",
        "q.2.4-x1.why": "Using the right term for each stage is the main thing you need when you make your water cycle poster.",
        "q.2.4-x1.items": ["evaporation", "transpiration", "condensation", "precipitation", "surface run-off"],
        "q.2.4-x1.props": ["water in rivers, lakes and oceans turns into vapour using energy from the Sun", "water evaporates from plants into the atmosphere", "water vapour cools into tiny drops of water that form clouds", "water falls from clouds as rain, snow, hail or sleet", "water flows over the ground into rivers and can carry soil with it", "liquid water turns into water vapour", "is part of the water cycle"],
        "q.2.4-x2.ask": "An area gets 1000 mm of rain a year: 40% evaporates and transpires, 25% becomes surface run-off, and the rest becomes groundwater (350 mm). Suppose the rain is still 1000 mm and run-off is still 25%, but evaporation and transpiration drop to 30%. How many mm become groundwater?",
        "q.2.4-x2.why": "Following the \"paths\" of water with numbers helps you see why changing one part of the water cycle affects the other parts.",
        "q.2.4-x2.reasons": [
          "The three paths always add up to 100%, so whatever evaporation loses, groundwater gains",
          "Groundwater has nothing to do with evaporation, so it stays at 350 mm",
          "Evaporation drops by 10%, so groundwater drops by 10% too"
        ],
        "q.2.4-x3.ask": "After the rain there is a puddle on the road. It is sunny all day. What will the puddle be like by the afternoon?",
        "q.2.4-x3.why": "Using the particle theory for an everyday scene is exactly the question the book asks at the end of the water cycle topic.",
        "q.2.4-x3.options": ["Smaller and smaller until it disappears", "Just the same as at the start", "Bigger, because the Sun makes the water expand"],
        "q.2.4-x3.reasons": [
          "Some water particles get enough energy from the Sun to escape the forces holding them and become water vapour",
          "Water only turns into vapour when it boils at 100 °C",
          "The Sun destroys the water, so it is gone for ever"
        ],
        "q.2.4-x3.observe": "The puddle dries up: the water evaporates into the atmosphere. That vapour is not lost — it can condense into clouds and fall as rain somewhere else.",
        "q.2.5-x1.ask": "Which one doesn't belong? Four elements — find a reason (about how the atoms are arranged) for each that makes only it different.",
        "q.2.5-x1.why": "Knowing that atoms in an element can be on their own, packed closely or joined into particles prepares you for compounds in the next stage.",
        "q.2.5-x1.items": ["neon", "gold", "oxygen", "sulfur"],
        "q.2.5-x1.props": ["its atoms move freely and are not joined to each other", "is a metal whose atoms are packed closely together", "each particle has 2 atoms", "each particle has 8 atoms", "its atoms are joined together into small particles", "is made of only one type of atom"],
        "q.2.5-x2.ask": "Following Democritus's idea, if you kept cutting a piece of gold in half again and again, what would you end up with?",
        "q.2.5-x2.why": "Following an idea all the way through helps you understand why the word \"atom\" means \"cannot be divided\".",
        "q.2.5-x2.options": ["Smaller and smaller pieces of gold for ever", "A very tiny piece that cannot be cut any more", "A piece of a different substance that is no longer gold"],
        "q.2.5-x2.reasons": [
          "Everything is made of very tiny pieces that cannot be divided, and gold is made of only one kind of such piece",
          "Matter is one solid lump, so it can be cut smaller for ever",
          "Cutting gold into small pieces turns it into another element"
        ],
        "q.2.5-x2.observe": "Democritus called that smallest piece an atom. Today we know atoms are real: a special microscope has shown some of the larger kinds of atom.",
        "q.2.5-x3.ask": "Which one doesn't belong? Use the Periodic Table to find a reason for each element that makes only it different.",
        "q.2.5-x3.why": "Reading the period, the metal and non-metal areas and the atom mass from the Periodic Table is a skill you use throughout chemistry.",
        "q.2.5-x3.items": ["sodium (Na)", "magnesium (Mg)", "argon (Ar)", "helium (He)"],
        "q.2.5-x3.props": ["its symbol comes from an old Latin name", "is a metal whose atoms are heavier than sodium atoms", "has the heaviest atoms of these four elements", "is in period 3", "is a metal", "is a non-metal"],
        "q.2.6-x1.ask": "Which one doesn't belong? Four substances from the particle diagrams — find a reason for each that makes only it different.",
        "q.2.6-x1.why": "Reading a formula to see which atoms a substance contains is the quickest way to tell an element from a compound.",
        "q.2.6-x1.items": ["O₂", "CO₂", "H₂O", "CH₄"],
        "q.2.6-x1.props": ["is an element because both atoms in the particle are the same type", "its name has \"di\" because it has two oxygen atoms with one carbon atom", "contains only hydrogen and oxygen", "each particle has 5 atoms", "contains oxygen atoms", "contains carbon atoms", "contains hydrogen atoms"],
        "q.2.6-x2.ask": "Sodium and chlorine are two elements you would certainly not want to eat. When they bond to form sodium chloride, what do you predict the compound will be like?",
        "q.2.6-x2.why": "Understanding that a compound has new properties will help you in the next stage, when you compare an iron–sulfur mixture with iron sulfide.",
        "q.2.6-x2.options": ["Exactly like sodium or chlorine", "Halfway between sodium and chlorine", "Completely new properties — it is table salt"],
        "q.2.6-x2.reasons": [
          "A compound keeps the properties of each element it is made from",
          "When they bond, the elements lose their own properties and the compound has new ones",
          "Putting two substances together always gives properties halfway between them"
        ],
        "q.2.6-x2.observe": "Sodium chloride is table salt and is not at all like sodium or chlorine. The elements lost their own properties when they bonded into a compound.",
        "q.2.7-x1.ask": "You heat a mixture of iron filings and sulfur powder until it glows red, let it cool, then bring a magnet near the new substance. What happens?",
        "q.2.7-x1.why": "Testing with a magnet is a simple way to check whether you have a mixture or a compound.",
        "q.2.7-x1.options": ["The magnet pulls iron out of the new substance", "The magnet cannot pull any iron out", "The magnet attracts the sulfur too"],
        "q.2.7-x1.reasons": [
          "The iron is still in there, so it is attracted as before",
          "Iron and sulfur have joined to form iron sulfide, a compound that is not attracted to a magnet",
          "Heating turns the sulfur into a metal"
        ],
        "q.2.7-x1.observe": "You cannot separate iron with the magnet: the new substance is iron sulfide, which is not attracted to a magnet and does not conduct heat or electricity. Before heating, in the mixture, the magnet could pull out the iron filings.",
        "q.2.7-x2.ask": "Which one doesn't belong? Find a reason for each substance that makes only it different from the other three.",
        "q.2.7-x2.why": "Comparing an element, a mixture and a compound side by side helps you remember clearly how they differ.",
        "q.2.7-x2.items": ["iron filings", "sulfur powder", "a mixture of iron and sulfur", "iron sulfide"],
        "q.2.7-x2.props": ["is a metal that conducts heat and electricity", "is a yellow, brittle non-metal", "can be separated into two substances with a magnet", "is a compound", "is an element", "contains both iron atoms and sulfur atoms", "has a part that is attracted to a magnet"],
        "q.2.7-x3.ask": "A classroom with 200 m³ of air holds about 42 m³ of oxygen. A hall with 300 m³ of air holds about how many m³ of oxygen?",
        "q.2.7-x3.why": "Using the percentage composition of air lets you estimate the amount of a gas in any room.",
        "q.2.7-x3.reasons": [
          "Oxygen is always about 21% of the air, so one and a half times the air means one and a half times the oxygen",
          "Every room has about 42 m³ of oxygen",
          "The bigger the room, the smaller the percentage of oxygen"
        ]
      },
      vi: {}
    }
  });
})();
