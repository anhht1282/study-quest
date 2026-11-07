// 🚀 Extension quests — Science 7, Unit 6 Earth physics. Self-written; every fact comes from the stage's own
// `learn` / `learnDetail`. Science-thinking types: predict, odd, fair (see MATH_QUESTS_GUIDE.md § Science), plus
// numeric whatif quests built only on the book's numbers (343 m/s, 1500 m/s and 0.2 s, 4 cm a year, 29.5 days).
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 6,
    sections: {
      "6.1": [
        {
          id: "6.1-x1", type: "predict", sim: "sound",
          ask: "Một chuông điện đang kêu trong bình thủy tinh kín. Em dùng bơm chân không hút hết không khí ra khỏi bình. Em sẽ thấy và nghe gì?",
          why: "Tự dự đoán trước giúp em nhớ rằng muốn nghe được âm cần cả dao động lẫn một môi trường có hạt.",
          options: ["Chuông ngừng rung và im lặng", "Vẫn thấy chuông rung nhưng không nghe tiếng", "Chuông kêu to hơn vì không còn không khí cản"],
          answer: 1,
          reasons: [
            "Âm cần một môi trường có hạt; hết không khí thì không có hạt nào để truyền dao động",
            "Không khí cung cấp năng lượng để chuông rung",
            "Trong chân không âm truyền nhanh hơn nên nghe rõ hơn"
          ],
          reason: 0,
          observe: "Chuông vẫn rung nhưng không còn tiếng. Chân không không có hạt nào để dao động, nên sóng âm không truyền ra ngoài được — giống như trong vũ trụ.",
          sample: { option: 1, reason: 0 }
        },
        {
          id: "6.1-x2", type: "odd",
          ask: "Cái nào khác loại? Bốn thứ mà âm có thể (hoặc không thể) đi qua — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Biết âm truyền qua những gì giúp em giải thích tiếng vang và cách tàu đo độ sâu ở bài 6.2.",
          items: ["không khí", "nước", "mặt bàn gỗ", "chân không trong vũ trụ"],
          props: [
            { id: "speed", text: "âm truyền qua với tốc độ khoảng 343 m/s", has: [0] },
            { id: "whale", text: "cá voi và cá heo dùng nó để giao tiếp bằng âm", has: [1] },
            { id: "ear", text: "áp tai lên đó sẽ nghe rõ tiếng bạn gõ nhẹ", has: [2] },
            { id: "none", text: "không có hạt nên âm không truyền qua được", has: [3] },
            { id: "tap", text: "trong thí nghiệm gõ bàn, tiếng gõ đã truyền qua nó tới tai em", has: [0, 2] },
            { id: "fluid", text: "là chất lỏng hoặc chất khí", has: [0, 1] }
          ],
          sample: { item: 3, prop: "none" }
        },
        {
          id: "6.1-x3", type: "whatif", base: 343, unitLabel: "m",
          ask: "Trong không khí, mỗi giây âm đi được khoảng 343 m. Một tiếng động tới tai em sau 3 giây. Âm đã đi được khoảng bao nhiêu mét?",
          why: "Dùng tốc độ truyền âm để tính quãng đường là bước chuẩn bị cho bài toán tiếng vang ở bài 6.2.",
          answer: function () { return 1029; },
          tol: 1,
          reasons: [
            "Âm to thì đi nhanh hơn, nên còn phải xa hơn 3 × 343 m",
            "Mỗi giây âm đi thêm khoảng 343 m, nên 3 giây là 3 × 343",
            "Âm tới tai ngay lập tức, nên thời gian không liên quan tới quãng đường"
          ],
          reason: 1,
          sample: { guess: "1029", reason: 1 }
        }
      ],
      "6.2": [
        {
          id: "6.2-x1", type: "fair", sim: "echo",
          ask: "Em vỗ tay trước một bức tường và lắng nghe tiếng vang. Hãy thiết kế các thí nghiệm công bằng: mỗi lần chỉ thay đổi một điều.",
          why: "Tìm ra điều gì ảnh hưởng tới tiếng vang là cách người ta thiết kế phòng thu, nhà hát và máy đo độ sâu.",
          factors: [
            { id: "dist", text: "đứng xa bức tường hơn" },
            { id: "smooth", text: "thay rèm dày, mềm bằng bề mặt nhẵn, phẳng như gạch men" },
            { id: "size", text: "bề mặt phản xạ lớn hơn" }
          ],
          outcomes: [
            { id: "time", text: "thời gian từ lúc vỗ tay tới khi nghe tiếng vang" },
            { id: "loud", text: "độ rõ của tiếng vang" }
          ],
          links: [
            { change: "dist", measure: "time", effect: "up" },
            { change: "smooth", measure: "loud", effect: "up" },
            { change: "size", measure: "loud", effect: "up" },
            { change: "smooth", measure: "time", effect: "same" }
          ],
          sample: { change: "smooth", measure: "time", keep: ["dist", "size"], effect: "same" }
        },
        {
          id: "6.2-x2", type: "whatif", base: 150, unitLabel: "m",
          ask: "Tàu cá phát âm xuống đàn cá; trong nước âm đi 1500 m/s. Nếu âm đi tới đàn cá rồi về tàu mất 0,2 s thì đàn cá cách tàu 150 m. Nếu tiếng vang về tàu sau 0,4 s thì đàn cá cách tàu bao nhiêu mét?",
          why: "Nhớ rằng âm phải đi rồi về giúp em tính đúng khoảng cách — công thức quãng đường = tốc độ × thời gian sẽ học kĩ ở lớp 8.",
          answer: function () { return 300; },
          tol: 0.5,
          reasons: [
            "1500 × 0,4 = 600 m, đó chính là khoảng cách tới đàn cá",
            "Âm đi chậm lại khi xuống sâu, nên phải ít hơn 300 m",
            "Thời gian gấp đôi nên khoảng cách gấp đôi; vẫn phải chia đôi vì âm đi rồi về"
          ],
          reason: 2,
          sample: { guess: "300", reason: 2 }
        },
        {
          id: "6.2-x3", type: "predict",
          ask: "Zara tập trống trong một căn phòng trống và nghe nhiều tiếng vang. Phủ thứ nào lên tường sẽ giảm tiếng vang nhiều nhất?",
          why: "Chọn vật liệu theo cách nó phản xạ âm là điều người thiết kế phòng thu và nhà hát luôn làm.",
          options: ["Tấm gỗ phẳng", "Rèm dày, mềm", "Gương phẳng lớn"],
          answer: 1,
          reasons: [
            "Bề mặt mềm, không nhẵn phẳng phản xạ âm kém nên ít tiếng vang",
            "Gương chỉ phản xạ ánh sáng, không phản xạ âm",
            "Gỗ dày nên chặn hết được âm"
          ],
          reason: 0,
          observe: "Rèm dày, mềm giảm tiếng vang nhiều nhất. Âm phản xạ tốt nhất trên bề mặt lớn, nhẵn và phẳng như kính, gạch men hay kim loại phẳng; tấm gỗ phẳng và gương phẳng lớn cũng nhẵn, phẳng nên lại làm tiếng vang rõ hơn.",
          sample: { option: 1, reason: 0 }
        }
      ],
      "6.3": [
        {
          id: "6.3-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn lớp của Trái Đất — tìm cho mỗi lớp một lý do khiến chỉ nó khác ba lớp kia.",
          why: "Nắm chắc các lớp của Trái Đất là nền để hiểu vì sao các mảng kiến tạo trôi được ở bài 6.4.",
          items: ["vỏ Trái Đất", "lớp manti", "lõi ngoài", "lõi trong"],
          props: [
            { id: "crust", text: "là lớp ngoài cùng, bằng đá rắn", has: [0] },
            { id: "mantle", text: "là đá nóng chảy có thể chảy, nằm ngay dưới vỏ", has: [1] },
            { id: "outer", text: "là kim loại nóng chảy, chủ yếu sắt và niken", has: [2] },
            { id: "inner", text: "là kim loại rắn ở tâm Trái Đất", has: [3] },
            { id: "feni", text: "chủ yếu là sắt và niken", has: [2, 3] },
            { id: "solid", text: "ở thể rắn", has: [0, 3] },
            { id: "molten", text: "ở thể nóng chảy", has: [1, 2] }
          ],
          sample: { item: 1, prop: "mantle" }
        },
        {
          id: "6.3-x2", type: "predict",
          ask: "Nếu ý tưởng của Wegener đúng — mọi đất liền từng là một lục địa lớn — thì ở chỗ bờ của hai lục địa khớp với nhau như mảnh ghép, em dự đoán sẽ thấy gì?",
          why: "Một ý tưởng khoa học tốt phải dự đoán được điều ta có thể kiểm tra — đó là cách Wegener tìm bằng chứng.",
          options: ["Loại đá và hóa thạch hai bên khớp nhau", "Loại đá và hóa thạch hai bên khác hẳn nhau", "Chỉ hình dạng bờ khớp nhau, ngoài ra không có gì giống"],
          answer: 0,
          reasons: [
            "Các lục địa ở xa nhau nên mọi thứ trên đó phải khác nhau",
            "Hai bờ từng là một khối đất liền, nên đá và hóa thạch ở chỗ ghép phải giống nhau",
            "Hóa thạch tự trôi qua đại dương từ lục địa này sang lục địa kia"
          ],
          reason: 1,
          observe: "Đúng như vậy: loại đá và hóa thạch khớp nhau ở chỗ các lục địa ghép vào nhau. Cùng với hình dạng các lục địa, đó là ba bằng chứng của Wegener — dù ông chưa giải thích được vì sao lục địa trôi dạt.",
          sample: { option: 0, reason: 1 }
        },
        {
          id: "6.3-x3", type: "whatif", base: 4, unitLabel: "cm",
          ask: "Các mảng kiến tạo dịch chuyển khoảng 4 cm mỗi năm. Sau 100 năm, một mảng dịch chuyển được khoảng bao nhiêu xentimét?",
          why: "Tính thử với con số thật giúp em cảm nhận vì sao biến đổi địa chất chậm phải mất hàng triệu năm.",
          answer: function () { return 400; },
          tol: 0.5,
          reasons: [
            "Mảng chỉ dịch một lần rồi dừng, nên vẫn là 4 cm",
            "Mảng trôi nhanh dần theo năm, nên phải nhiều hơn 400 cm",
            "Mỗi năm thêm khoảng 4 cm, nên 100 năm là 100 × 4"
          ],
          reason: 2,
          sample: { guess: "400", reason: 2 }
        }
      ],
      "6.4": [
        {
          id: "6.4-x1", type: "odd",
          ask: "Cái nào khác loại? Ba dãy núi và một núi lửa — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Liên hệ mỗi dạng địa hình với chuyển động của mảng giúp em đọc được lịch sử của Trái Đất từ núi non.",
          items: ["dãy Himalaya", "dãy Rocky", "dãy Ural", "núi lửa Anak Krakatau"],
          props: [
            { id: "asia", text: "là núi uốn nếp trẻ ở châu Á", has: [0] },
            { id: "america", text: "là núi uốn nếp trẻ ở Bắc Mỹ", has: [1] },
            { id: "old", text: "đã hơn 200 triệu năm tuổi", has: [2] },
            { id: "tsunami", text: "từng phun trào thổi bay một phần núi xuống biển, gây sóng thần", has: [3] },
            { id: "fold", text: "là núi uốn nếp, hình thành khi các mảng xô vào nhau", has: [0, 1, 2] },
            { id: "young", text: "chỉ khoảng 10–25 triệu năm tuổi", has: [0, 1] }
          ],
          sample: { item: 2, prop: "old" }
        },
        {
          id: "6.4-x2", type: "predict",
          ask: "Sau mỗi lần phun trào, kích thước của một núi lửa thay đổi thế nào?",
          why: "Hiểu núi lửa lớn lên ra sao giúp em thấy biến đổi địa chất tạo ra đá mới và địa hình mới.",
          options: ["Nhỏ đi, vì đá bị phun ra ngoài", "Lớn hơn", "Giữ nguyên"],
          answer: 1,
          reasons: [
            "Núi lửa mất đá nên thấp xuống",
            "Magma rút hết về lòng đất sau khi phun",
            "Dung nham và tro nguội đi, đông cứng thành lớp đá mới phủ lên núi"
          ],
          reason: 2,
          observe: "Núi lửa lớn hơn: dung nham và tro nguội đi, đông cứng thành đá mới, nên mỗi lần phun trào núi lại cao thêm một lớp.",
          sample: { option: 1, reason: 2 }
        },
        {
          id: "6.4-x3", type: "predict", sim: "plates",
          ask: "Ở một ranh giới, hai mảng đang trượt qua nhau nhưng đã nhiều năm không thấy dịch chuyển. Điều gì có thể xảy ra tiếp theo?",
          why: "Biết áp suất tích tụ ở ranh giới mảng giúp em hiểu vì sao động đất xảy ra đột ngột và dữ dội.",
          options: ["Hai mảng đã ngừng chuyển động mãi mãi", "Một núi lửa mọc lên ngay", "Áp suất tích tụ dần rồi gây chuyển động dữ dội — động đất"],
          answer: 2,
          reasons: [
            "Ma sát làm hai mảng dính lại nhưng lực vẫn tác dụng, nên áp suất tăng dần tới khi mảng dịch đột ngột",
            "Không thấy dịch chuyển nghĩa là không còn lực nào tác dụng lên mảng",
            "Mảng trượt qua nhau lúc nào cũng tạo ra núi lửa"
          ],
          reason: 0,
          observe: "Áp suất cứ tích tụ cho đến khi gây ra chuyển động dữ dội: một trận động đất. Các mảng rất lớn và nặng nên ma sát giữa chúng rất lớn.",
          sample: { option: 2, reason: 0 }
        }
      ],
      "6.5": [
        {
          id: "6.5-x1", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác ba thứ còn lại.",
          why: "Nhìn mỗi vật theo vai trò của nó (nguồn sáng hay vật chặn sáng) là chìa khóa để giải thích mọi loại thực.",
          items: ["Mặt Trời", "Trái Đất", "Mặt Trăng", "máy bay"],
          props: [
            { id: "source", text: "là nguồn sáng trong các ví dụ về bóng tối và thực của bài", has: [0] },
            { id: "lunar", text: "bóng của nó in lên Mặt Trăng, gây nguyệt thực", has: [1] },
            { id: "solar", text: "bóng của nó in lên Trái Đất, gây nhật thực", has: [2] },
            { id: "metal", text: "làm bằng kim loại", has: [3] },
            { id: "opaque", text: "là vật không trong suốt, chặn các tia sáng", has: [1, 2, 3] },
            { id: "ground", text: "bóng của nó có thể in lên mặt đất nơi con người đứng", has: [2, 3] }
          ],
          sample: { item: 3, prop: "metal" }
        },
        {
          id: "6.5-x2", type: "predict", sim: "eclipse",
          ask: "Mô hình trong lớp: đèn là Mặt Trời, bóng đá là Trái Đất, bóng tennis là Mặt Trăng. Em chuyển bóng tennis ra phía sau bóng đá, vào vùng bóng tối của bóng đá. Mô hình đang cho thấy gì?",
          why: "Tự dự đoán bằng mô hình giúp em phân biệt chắc chắn nhật thực với nguyệt thực.",
          options: ["Nhật thực", "Nguyệt thực", "Không có thực nào"],
          answer: 1,
          reasons: [
            "Bóng tennis tự tối đi vì ở xa đèn",
            "Bóng tennis che đèn, không cho ánh sáng tới bóng đá",
            "Bóng đá (Trái Đất) ở giữa đèn và bóng tennis, nên bóng của nó phủ lên bóng tennis"
          ],
          reason: 2,
          observe: "Đó là nguyệt thực: Trái Đất ở giữa Mặt Trời và Mặt Trăng, nên bóng của Trái Đất in lên Mặt Trăng. Nếu bóng tennis ở giữa đèn và bóng đá thì đó là nhật thực.",
          sample: { option: 1, reason: 2 }
        },
        {
          id: "6.5-x3", type: "whatif", base: 59,
          ask: "Một tháng âm lịch dài 29,5 ngày, nên 2 tháng âm lịch là 59 ngày. Các nhà thiên văn Trung Đông biết nhật thực lặp lại sau mỗi 223 tháng âm lịch. Đó là bao nhiêu ngày?",
          why: "Tìm ra một quy luật lặp lại rồi tính toán với nó là cách người xưa dự đoán được thực từ 3000 năm trước.",
          answer: function () { return 6578.5; },
          tol: 0.5,
          reasons: [
            "Nhân 223 với 29,5 ngày",
            "Một tháng có 30 ngày, nên tính 223 × 30",
            "Mặt Trăng mất 28 ngày quay quanh Trái Đất, nên tính 223 × 28"
          ],
          reason: 0,
          sample: { guess: "6578,5", reason: 0 }
        }
      ]
    },
    tr: {
      en: {
        "q.6.1-x1.ask": "An electric bell is ringing inside a sealed glass jar. You use a vacuum pump to remove all the air from the jar. What will you see and hear?",
        "q.6.1-x1.why": "Predicting first helps you remember that to hear a sound you need both a vibration and a medium with particles.",
        "q.6.1-x1.options": ["The bell stops vibrating and goes silent", "You still see the bell vibrating but hear no sound", "The bell gets louder because no air is in the way"],
        "q.6.1-x1.reasons": [
          "Sound needs a medium with particles; with no air there are no particles to pass the vibrations on",
          "The air gives the bell the energy to vibrate",
          "Sound travels faster in a vacuum, so you hear it more clearly"
        ],
        "q.6.1-x1.observe": "The bell keeps vibrating but you hear nothing. A vacuum has no particles to vibrate, so the sound wave cannot travel out — just like in space.",
        "q.6.1-x2.ask": "Which one doesn't belong? Four things that sound can (or cannot) travel through — find a reason for each that makes only it different.",
        "q.6.1-x2.why": "Knowing what sound can travel through helps you explain echoes and how ships measure depth in topic 6.2.",
        "q.6.1-x2.items": ["air", "water", "a wooden table top", "the vacuum of space"],
        "q.6.1-x2.props": ["sound travels through it at about 343 m/s", "whales and dolphins use it to communicate with sound", "if you put your ear on it you clearly hear a friend's gentle tap", "has no particles, so sound cannot travel through it", "in the table-tapping test, the tap travelled through it to your ear", "is a liquid or a gas"],
        "q.6.1-x3.ask": "In air, sound travels about 343 m every second. A noise reaches your ear after 3 seconds. About how many metres has the sound travelled?",
        "q.6.1-x3.why": "Using the speed of sound to work out a distance prepares you for the echo problems in topic 6.2.",
        "q.6.1-x3.reasons": [
          "Loud sounds travel faster, so it must be even further than 3 × 343 m",
          "Each second the sound goes about another 343 m, so 3 seconds is 3 × 343",
          "Sound reaches your ear instantly, so time has nothing to do with distance"
        ],
        "q.6.2-x1.ask": "You clap your hands in front of a wall and listen for the echo. Design fair tests: change only one thing each time.",
        "q.6.2-x1.why": "Finding out what affects an echo is how people design recording studios, theatres and depth finders.",
        "q.6.2-x1.factors": ["standing further from the wall", "swapping thick soft curtains for a smooth flat surface like tiles", "a bigger reflecting surface"],
        "q.6.2-x1.outcomes": ["the time from the clap until you hear the echo", "how clear the echo is"],
        "q.6.2-x2.ask": "A fishing boat sends a sound down to a shoal of fish; in water sound travels at 1500 m/s. If the sound takes 0.2 s to reach the fish and come back, the fish are 150 m from the boat. If the echo returns after 0.4 s, how many metres away are the fish?",
        "q.6.2-x2.why": "Remembering that the sound goes there and back helps you work out the distance correctly — distance = speed × time is studied in detail in Stage 8.",
        "q.6.2-x2.reasons": [
          "1500 × 0.4 = 600 m, and that is the distance to the fish",
          "Sound slows down as it goes deeper, so it must be less than 300 m",
          "Twice the time means twice the distance; you still halve it because the sound goes there and back"
        ],
        "q.6.2-x3.ask": "Zara practises the drums in an empty room and hears lots of echoes. Which covering on the walls would reduce the echoes the most?",
        "q.6.2-x3.why": "Choosing materials by how they reflect sound is what designers of studios and theatres always do.",
        "q.6.2-x3.options": ["Flat wooden boards", "Thick, soft curtains", "Large flat mirrors"],
        "q.6.2-x3.reasons": [
          "Soft surfaces that are not smooth and flat reflect sound poorly, so there are fewer echoes",
          "Mirrors only reflect light, not sound",
          "Wood is thick, so it blocks all the sound"
        ],
        "q.6.2-x3.observe": "Thick, soft curtains reduce the echoes the most. Sound reflects best from large, smooth, flat surfaces such as glass, tiles or flat metal; flat wooden boards and large flat mirrors are smooth and flat too, so they would make the echoes stronger.",
        "q.6.3-x1.ask": "Which one doesn't belong? Four layers of the Earth — find a reason for each that makes only it different from the other three.",
        "q.6.3-x1.why": "Knowing the layers of the Earth well is the basis for understanding why tectonic plates can move in topic 6.4.",
        "q.6.3-x1.items": ["the crust", "the mantle", "the outer core", "the inner core"],
        "q.6.3-x1.props": ["is the outermost layer, made of solid rock", "is molten rock that can flow, just below the crust", "is molten metal, mostly iron and nickel", "is solid metal at the centre of the Earth", "is mostly iron and nickel", "is solid", "is molten"],
        "q.6.3-x2.ask": "If Wegener's idea is right — all the land was once one big continent — what do you predict you will find where the coasts of two continents fit together like jigsaw pieces?",
        "q.6.3-x2.why": "A good scientific idea must predict something we can check — that is how Wegener found his evidence.",
        "q.6.3-x2.options": ["The rock types and fossils on both sides match", "The rock types and fossils on both sides are completely different", "Only the shapes of the coasts match, nothing else is alike"],
        "q.6.3-x2.reasons": [
          "The continents are far apart, so everything on them must be different",
          "The two coasts were once one piece of land, so the rocks and fossils where they join must be alike",
          "Fossils floated across the ocean from one continent to another"
        ],
        "q.6.3-x2.observe": "That is right: the rock types and fossils match where the continents fit together. Together with the shapes of the continents, these are Wegener's three pieces of evidence — even though he could not explain why the continents drift.",
        "q.6.3-x3.ask": "Tectonic plates move about 4 cm each year. After 100 years, about how many centimetres has a plate moved?",
        "q.6.3-x3.why": "Working with a real number helps you feel why slow geological change takes millions of years.",
        "q.6.3-x3.reasons": [
          "A plate moves only once and then stops, so it is still 4 cm",
          "Plates move faster each year, so it must be more than 400 cm",
          "Each year adds about 4 cm, so 100 years is 100 × 4"
        ],
        "q.6.4-x1.ask": "Which one doesn't belong? Three mountain ranges and one volcano — find a reason for each that makes only it different.",
        "q.6.4-x1.why": "Linking each landform to how the plates move helps you read the Earth's history from its mountains.",
        "q.6.4-x1.items": ["the Himalayas", "the Rocky Mountains", "the Ural Mountains", "the Anak Krakatau volcano"],
        "q.6.4-x1.props": ["are young fold mountains in Asia", "are young fold mountains in North America", "are more than 200 million years old", "once erupted and blew part of the mountain into the sea, causing a tsunami", "are fold mountains formed when plates moved together", "are only about 10–25 million years old"],
        "q.6.4-x2.ask": "After each eruption, how does the size of a volcano change?",
        "q.6.4-x2.why": "Understanding how a volcano grows shows you that geological change makes new rock and new landforms.",
        "q.6.4-x2.options": ["It gets smaller, because rock is thrown out", "It gets bigger", "It stays the same"],
        "q.6.4-x2.reasons": [
          "The volcano loses rock, so it gets lower",
          "All the magma goes back underground after the eruption",
          "The lava and ash cool and harden into a new layer of rock on the mountain"
        ],
        "q.6.4-x2.observe": "The volcano gets bigger: the lava and ash cool and harden into new rock, so each eruption adds another layer to the mountain.",
        "q.6.4-x3.ask": "At a boundary, two plates are sliding past each other but have not been seen to move for many years. What could happen next?",
        "q.6.4-x3.why": "Knowing that pressure builds up at plate boundaries helps you understand why earthquakes are sudden and violent.",
        "q.6.4-x3.options": ["The two plates have stopped moving for ever", "A volcano appears straight away", "Pressure builds up and then causes a violent movement — an earthquake"],
        "q.6.4-x3.reasons": [
          "Friction makes the plates stick, but forces still act, so pressure rises until the plates suddenly move",
          "Not moving means no force is acting on the plates any more",
          "Plates sliding past each other always make volcanoes"
        ],
        "q.6.4-x3.observe": "The pressure keeps building until it causes a violent movement: an earthquake. The plates are very large and heavy, so the friction between them is very large.",
        "q.6.5-x1.ask": "Which one doesn't belong? Find a reason for each item that makes only it different from the other three.",
        "q.6.5-x1.why": "Seeing each object by its role (light source or light blocker) is the key to explaining every kind of eclipse.",
        "q.6.5-x1.items": ["the Sun", "the Earth", "the Moon", "an aeroplane"],
        "q.6.5-x1.props": ["is the light source in this topic's examples of shadows and eclipses", "its shadow falls on the Moon, causing a lunar eclipse", "its shadow falls on the Earth, causing a solar eclipse", "is made of metal", "is opaque and blocks rays of light", "its shadow can fall on the ground where people stand"],
        "q.6.5-x2.ask": "Classroom model: the lamp is the Sun, the football is the Earth and the tennis ball is the Moon. You move the tennis ball behind the football, into the football's shadow. What does the model show now?",
        "q.6.5-x2.why": "Predicting with a model helps you tell a solar eclipse from a lunar eclipse for sure.",
        "q.6.5-x2.options": ["A solar eclipse", "A lunar eclipse", "No eclipse at all"],
        "q.6.5-x2.reasons": [
          "The tennis ball gets darker by itself because it is far from the lamp",
          "The tennis ball blocks the lamp so no light reaches the football",
          "The football (the Earth) is between the lamp and the tennis ball, so its shadow covers the tennis ball"
        ],
        "q.6.5-x2.observe": "It is a lunar eclipse: the Earth is between the Sun and the Moon, so the Earth's shadow falls on the Moon. If the tennis ball is between the lamp and the football, that is a solar eclipse.",
        "q.6.5-x3.ask": "A lunar month is 29.5 days long, so 2 lunar months are 59 days. Astronomers in the Middle East knew that solar eclipses repeat every 223 lunar months. How many days is that?",
        "q.6.5-x3.why": "Finding a repeating pattern and calculating with it is how people predicted eclipses 3000 years ago.",
        "q.6.5-x3.reasons": [
          "Multiply 223 by 29.5 days",
          "A month has 30 days, so work out 223 × 30",
          "The Moon takes 28 days to orbit the Earth, so work out 223 × 28"
        ]
      },
      vi: {}
    }
  });
})();
