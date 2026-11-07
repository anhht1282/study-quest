// 🚀 Extension quests — Science 7, Unit 9 Electricity. Self-written; every fact comes from the stage's own `learn`.
// Science-thinking types: predict (Predict → Observe → Explain), odd (which one doesn't belong — every item can be
// the odd one out for its own reason), fair (design fair tests). See MATH_QUESTS_GUIDE.md § Science.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 9,
    sections: {
      "9.1": [
        {
          id: "9.1-x1", type: "predict",
          ask: "Một mạch có pin, công tắc và bốn bóng đèn đặt cách xa nhau trên một vòng dây rất dài. Khi đóng công tắc, các đèn sáng theo thứ tự nào?",
          why: "Dự đoán trước rồi mới xem kết quả giúp em phát hiện chỗ mình hiểu sai về cách electron chuyển động.",
          options: ["Đèn gần cực âm sáng trước, rồi lần lượt tới các đèn xa hơn", "Đèn gần cực dương sáng trước", "Cả bốn đèn sáng gần như cùng một lúc"],
          answer: 2,
          reasons: [
            "Electron có sẵn trong mọi đoạn dây kim loại; mạch vừa kín là tất cả cùng bắt đầu chạy",
            "Electron phải đi từ pin tới từng đèn, đèn nào gần thì electron tới trước",
            "Dòng điện chạy từ cực dương sang cực âm nên đèn gần cực dương sáng trước"
          ],
          reason: 0,
          observe: "Bốn đèn sáng gần như cùng lúc. Trong kim loại, electron tự do có sẵn ở khắp dây; khi mạch kín, chúng cùng chạy một hướng — giống mô hình vòng dây của Hoạt động 9.1.1.",
          sample: { option: 2, reason: 0 }
        },
        {
          id: "9.1-x2", type: "odd",
          ask: "Cái nào khác loại? Với mỗi thứ, hãy tìm một lý do khiến chính nó khác ba thứ còn lại.",
          why: "Nhìn một nhóm khái niệm từ nhiều góc khác nhau giúp em nhớ chắc vai trò của từng thứ trong mạch điện.",
          items: ["electron", "cực âm của pin", "cực dương của pin", "dây đồng"],
          props: [
            { id: "neg", text: "mang điện tích âm", has: [0, 1] },
            { id: "pull", text: "hút electron về phía nó", has: [2] },
            { id: "particle", text: "là hạt nhỏ hơn, có trong nguyên tử", has: [0] },
            { id: "push", text: "đẩy electron chạy vào dây", has: [1] },
            { id: "metal", text: "là kim loại, bên trong có electron tự do chuyển động", has: [3] }
          ],
          sample: { item: 0, prop: "particle" }
        }
      ],
      "9.2": [
        {
          id: "9.2-x1", type: "odd",
          ask: "Cái nào khác loại? Năm linh kiện — mỗi linh kiện đều có thể là \"kẻ lạc loài\" theo một lý do riêng. Tìm hết nhé.",
          why: "Biết mỗi linh kiện làm gì là bước đầu để em tự thiết kế mạch cho một công việc mới.",
          items: ["ampe kế", "bóng đèn", "chuông", "công tắc", "pin"],
          props: [
            { id: "measure", text: "đo dòng điện trong mạch", has: [0] },
            { id: "light", text: "phát ra ánh sáng", has: [1] },
            { id: "sound", text: "phát ra tiếng kêu", has: [2] },
            { id: "switch", text: "làm dòng điện ngừng hoặc bắt đầu chạy", has: [3] },
            { id: "energy", text: "cung cấp năng lượng để dòng điện chạy", has: [4] },
            { id: "symbol", text: "có kí hiệu chuẩn trên sơ đồ mạch điện", has: [0, 1, 2, 3, 4] },
            { id: "bell", text: "là linh kiện của mạch chuông cửa", has: [2, 3, 4] }
          ],
          sample: { item: 3, prop: "switch" }
        },
        {
          id: "9.2-x2", type: "predict",
          ask: "Mạch chuông cửa gồm pin, chuông và một công tắc đang MỞ. Điều gì xảy ra?",
          why: "Hiểu vì sao mạch hở thì mọi thứ ngừng chạy giúp em tìm lỗi khi một mạch không hoạt động.",
          options: ["Chuông kêu", "Chuông kêu rất nhỏ", "Chuông không kêu"],
          answer: 2,
          reasons: [
            "Pin chưa được dùng nên chưa có năng lượng",
            "Công tắc mở làm mạch hở một chỗ, nên electron ngừng chạy ở mọi chỗ trong mạch",
            "Chuông chỉ kêu khi mạch có thêm ampe kế"
          ],
          reason: 1,
          observe: "Chuông im lặng. Khi bấm (đóng) công tắc, mạch kín, electron chạy và chuông kêu — đó chính là cách chuông cửa hoạt động.",
          sample: { option: 2, reason: 1 }
        }
      ],
      "9.3": [
        {
          id: "9.3-x1", type: "predict", sim: "ammeter",
          ask: "Mạch nối tiếp: pin, công tắc và hai đèn. Em đặt ampe kế lần lượt ở X (trước đèn 1), Y (giữa hai đèn) và Z (sau đèn 2). Số chỉ sẽ thế nào?",
          why: "Đây đúng là dự đoán trong phần Tư duy như nhà khoa học — tự cam kết một dự đoán trước khi đo giúp em nhớ lâu kết quả.",
          options: ["Giảm dần từ X tới Z", "Như nhau ở X, Y và Z", "Tăng dần từ X tới Z"],
          answer: 1,
          reasons: [
            "Mỗi đèn dùng hết một phần electron",
            "Electron chạy như một đoàn tàu: cùng tốc độ ở mọi chỗ trong mạch nối tiếp",
            "Electron chạy nhanh dần khi tới gần cực dương"
          ],
          reason: 1,
          observe: "Ba số chỉ bằng nhau. Đèn biến đổi năng lượng mà electron mang theo, chứ electron không bị \"dùng hết\".",
          sample: { option: 1, reason: 1 }
        },
        {
          id: "9.3-x2", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "So sánh hai loại ampe kế với các linh kiện khác giúp em thấy: trông khác nhau nhưng có thể làm cùng một việc.",
          items: ["ampe kế kim chỉ", "ampe kế hiện số", "bóng đèn", "công tắc"],
          props: [
            { id: "measure", text: "đo được dòng điện", has: [0, 1] },
            { id: "needle", text: "đọc số chỉ bằng vị trí kim trên thang đo", has: [0] },
            { id: "digits", text: "hiện số chỉ bằng chữ số", has: [1] },
            { id: "light", text: "phát ra ánh sáng", has: [2] },
            { id: "open", text: "có thể làm hở mạch", has: [3] },
            { id: "red", text: "có chốt đỏ phải nối với cực dương", has: [0, 1] }
          ],
          sample: { item: 0, prop: "needle" }
        }
      ],
      "9.4": [
        {
          id: "9.4-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn vật liệu dùng trong điện — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Chọn đúng vật liệu cho đúng việc (dẫn điện hay giữ an toàn) là điều kĩ sư điện làm hằng ngày.",
          items: ["lõi đồng của dây điện trong nhà", "vỏ nhựa của dây điện", "dây nhôm của đường dây điện đi xa", "cái cách điện trên cột điện"],
          props: [
            { id: "metal", text: "là kim loại, có electron tự do chuyển động", has: [0, 2] },
            { id: "ins", text: "là vật cách điện", has: [1, 3] },
            { id: "home", text: "đưa dòng điện đến ổ cắm trong nhà", has: [0] },
            { id: "touch", text: "giữ an toàn khi người cầm vào dây", has: [1] },
            { id: "far", text: "dẫn điện qua quãng đường rất xa", has: [2] },
            { id: "pole", text: "ngăn dòng điện chạy từ dây vào cột kim loại", has: [3] }
          ],
          sample: { item: 3, prop: "pole" }
        },
        {
          id: "9.4-x2", type: "predict", sim: "conductors",
          ask: "Mạch thử gồm pin, đèn và hai kẹp cá sấu. Em kẹp cả hai kẹp vào VỎ NHỰA của một đoạn dây điện chưa bóc vỏ (bên trong là lõi đồng). Đèn sẽ thế nào?",
          why: "Bài này nhắc em rằng điều quyết định là vật liệu mà electron phải đi qua, không phải thứ nằm ở gần đó.",
          options: ["Đèn sáng vì bên trong có đồng", "Đèn không sáng", "Đèn sáng mờ"],
          answer: 1,
          reasons: [
            "Kẹp chỉ chạm vào nhựa; trong nhựa electron không tự do chuyển động nên không có dòng điện",
            "Đồng là kim loại nên đèn luôn sáng khi có đồng trong mạch",
            "Dây quá dài nên dòng điện yếu đi"
          ],
          reason: 0,
          observe: "Đèn không sáng: vỏ nhựa là vật cách điện, ngăn dòng electron. Bóc vỏ để kẹp chạm vào lõi đồng thì đèn sáng.",
          sample: { option: 1, reason: 0 }
        }
      ],
      "9.5": [
        {
          id: "9.5-x1", type: "fair", sim: "circuit",
          ask: "Thiết kế thí nghiệm công bằng với mạch nối tiếp. Em có thể nghĩ ra bao nhiêu thí nghiệm khác nhau?",
          why: "Chỉ thay đổi một điều và giữ nguyên mọi điều khác là cách nhà khoa học biết chắc nguyên nhân của một kết quả.",
          factors: [
            { id: "cells", text: "số pin" },
            { id: "lamps", text: "số đèn" },
            { id: "pos", text: "vị trí đặt ampe kế" }
          ],
          outcomes: [
            { id: "current", text: "số chỉ ampe kế" },
            { id: "bright", text: "độ sáng của đèn" }
          ],
          links: [
            { change: "cells", measure: "current", effect: "up" },
            { change: "cells", measure: "bright", effect: "up" },
            { change: "lamps", measure: "current", effect: "down" },
            { change: "lamps", measure: "bright", effect: "down" },
            { change: "pos", measure: "current", effect: "same" }
          ],
          sample: { change: "pos", measure: "current", keep: ["cells", "lamps"], effect: "same" }
        },
        {
          id: "9.5-x2", type: "whatif", base: 1.4, unitLabel: "A",
          ask: "Mạch có một pin và một đèn: ampe kế chỉ 1,4 A. Nếu dùng HAI pin (vẫn một đèn), ampe kế chỉ bao nhiêu ampe?",
          why: "Dự đoán bằng con số buộc em dùng đúng quan hệ giữa năng lượng của pin và dòng điện.",
          answer: function () { return 2.8; },
          tol: 0.01,
          reasons: [
            "Hai pin chia đôi dòng điện cho nhau",
            "Hai pin cho năng lượng điện gấp đôi nên dòng điện tăng gấp đôi",
            "Số pin không ảnh hưởng tới dòng điện"
          ],
          reason: 1,
          sample: { guess: "2,8", reason: 1 }
        },
        {
          id: "9.5-x3", type: "predict",
          ask: "Mạch một pin, một đèn: ampe kế chỉ 1,4 A. Em mắc thêm một đèn nối tiếp. Đèn ban đầu sẽ thế nào?",
          why: "Hiểu vì sao thêm đèn làm mọi đèn mờ đi giúp em thiết kế mạch đủ sáng cho một công việc.",
          options: ["Sáng hơn", "Mờ hơn", "Sáng như cũ"],
          answer: 1,
          reasons: [
            "Đèn mới lấy hết electron của đèn cũ",
            "Hai đèn chia nhau năng lượng nên dòng điện tăng",
            "Thêm đèn làm electron chạy chậm lại trên toàn mạch, dòng điện giảm còn một nửa"
          ],
          reason: 2,
          observe: "Cả hai đèn đều mờ hơn, ampe kế chỉ 0,7 A — một nửa so với trước.",
          sample: { option: 1, reason: 2 }
        }
      ]
    },
    tr: {
      en: {
        "q.9.1-x1.ask": "A circuit has a cell, a switch and four lamps placed far apart on a very long loop of wire. When you close the switch, in what order do the lamps light?",
        "q.9.1-x1.why": "Predicting before you look helps you catch what you misunderstand about how electrons move.",
        "q.9.1-x1.options": ["The lamp nearest the negative terminal first, then the ones further away", "The lamp nearest the positive terminal first", "All four light at almost the same moment"],
        "q.9.1-x1.reasons": [
          "Electrons are already in every part of the metal wire; as soon as the circuit is complete they all start moving",
          "Electrons must travel from the cell to each lamp, so the nearest lamp gets them first",
          "Current flows from positive to negative, so the lamp near the positive terminal lights first"
        ],
        "q.9.1-x1.observe": "All four lamps light at almost the same time. In a metal, free electrons are already everywhere along the wire; when the circuit is complete they all move in one direction — like the loop-of-rope model in Activity 9.1.1.",
        "q.9.1-x2.ask": "Which one doesn't belong? For each item, find a reason that makes that item different from the other three.",
        "q.9.1-x2.why": "Looking at a group of ideas from several angles helps you remember the job of each part of a circuit.",
        "q.9.1-x2.items": ["an electron", "the negative terminal of a cell", "the positive terminal of a cell", "a copper wire"],
        "q.9.1-x2.props": ["has a negative charge", "attracts electrons towards it", "is a smaller particle found inside atoms", "pushes electrons into the wire", "is a metal with free electrons inside"],
        "q.9.2-x1.ask": "Which one doesn't belong? Five components — each one can be the odd one out for its own reason. Find them all.",
        "q.9.2-x1.why": "Knowing what each component does is the first step to designing your own circuit for a new job.",
        "q.9.2-x1.items": ["ammeter", "lamp", "buzzer", "switch", "cell"],
        "q.9.2-x1.props": ["measures the current in the circuit", "gives out light", "makes a sound", "stops or starts the current", "supplies the energy that makes the current flow", "has a standard symbol in circuit diagrams", "is a part of a doorbell circuit"],
        "q.9.2-x2.ask": "A doorbell circuit has a cell, a buzzer and a switch that is OPEN. What happens?",
        "q.9.2-x2.why": "Understanding why everything stops when a circuit is broken helps you find the fault when a circuit doesn't work.",
        "q.9.2-x2.options": ["The buzzer sounds", "The buzzer sounds very quietly", "The buzzer does not sound"],
        "q.9.2-x2.reasons": [
          "The cell has not been used yet, so it has no energy",
          "The open switch breaks the circuit in one place, so electrons stop everywhere in the circuit",
          "The buzzer only sounds when there is also an ammeter"
        ],
        "q.9.2-x2.observe": "The buzzer is silent. Press (close) the switch: the circuit is complete, electrons flow and the buzzer sounds — that is how a doorbell works.",
        "q.9.3-x1.ask": "Series circuit: a cell, a switch and two lamps. You put the ammeter at X (before lamp 1), then Y (between the lamps), then Z (after lamp 2). What will the readings be?",
        "q.9.3-x1.why": "This is the prediction from Think like a scientist — committing to a prediction before measuring helps you remember the result.",
        "q.9.3-x1.options": ["Smaller and smaller from X to Z", "The same at X, Y and Z", "Bigger and bigger from X to Z"],
        "q.9.3-x1.reasons": [
          "Each lamp uses up some of the electrons",
          "Electrons move like a train: at the same speed everywhere in a series circuit",
          "Electrons speed up as they get near the positive terminal"
        ],
        "q.9.3-x1.observe": "All three readings are the same. The lamps change the energy the electrons carry; the electrons are not \"used up\".",
        "q.9.3-x2.ask": "Which one doesn't belong? Find a reason for each item that makes only that item different.",
        "q.9.3-x2.why": "Comparing two kinds of ammeter with other components shows you that things can look different but do the same job.",
        "q.9.3-x2.items": ["needle ammeter", "digital ammeter", "lamp", "switch"],
        "q.9.3-x2.props": ["can measure current", "you read it from where a needle points on a scale", "shows the reading as digits", "gives out light", "can break the circuit", "has a red terminal that must join the positive terminal"],
        "q.9.4-x1.ask": "Which one doesn't belong? Four materials used with electricity — find a reason for each that makes only it different.",
        "q.9.4-x1.why": "Choosing the right material for the job (to conduct or to keep people safe) is what electrical engineers do every day.",
        "q.9.4-x1.items": ["the copper core of a house wire", "the plastic coating of a wire", "the aluminium wire of a long-distance power line", "the insulator on an electricity pole"],
        "q.9.4-x1.props": ["is a metal with free electrons", "is an insulator", "carries current to the sockets in a home", "keeps you safe when you hold the cable", "conducts electricity over very long distances", "stops current flowing from the wire into the metal pole"],
        "q.9.4-x2.ask": "A test circuit has a cell, a lamp and two crocodile clips. You clip both clips onto the PLASTIC COATING of a piece of wire that has not been stripped (there is copper inside). What does the lamp do?",
        "q.9.4-x2.why": "This reminds you that what matters is the material the electrons must pass through, not what happens to be nearby.",
        "q.9.4-x2.options": ["It lights because there is copper inside", "It does not light", "It lights dimly"],
        "q.9.4-x2.reasons": [
          "The clips only touch plastic; electrons in plastic are not free to move, so there is no current",
          "Copper is a metal, so the lamp always lights when there is copper in the circuit",
          "The wire is too long, so the current gets weaker"
        ],
        "q.9.4-x2.observe": "The lamp does not light: the plastic coating is an insulator and stops the flow of electrons. Strip it so the clips touch the copper core, and the lamp lights.",
        "q.9.5-x1.ask": "Design fair tests with a series circuit. How many different tests can you think of?",
        "q.9.5-x1.why": "Changing only one thing and keeping everything else the same is how scientists know for sure what causes a result.",
        "q.9.5-x1.factors": ["the number of cells", "the number of lamps", "where the ammeter is placed"],
        "q.9.5-x1.outcomes": ["the ammeter reading", "how bright the lamps are"],
        "q.9.5-x2.ask": "A circuit with one cell and one lamp: the ammeter reads 1.4 A. If you use TWO cells (still one lamp), what will the ammeter read in amps?",
        "q.9.5-x2.why": "Predicting a number makes you use the right link between the energy of the cells and the current.",
        "q.9.5-x2.reasons": [
          "The two cells share the current between them",
          "Two cells give twice the electrical energy, so the current doubles",
          "The number of cells does not affect the current"
        ],
        "q.9.5-x3.ask": "A circuit with one cell and one lamp: the ammeter reads 1.4 A. You add a second lamp in series. What happens to the first lamp?",
        "q.9.5-x3.why": "Understanding why adding lamps dims every lamp helps you design a circuit bright enough for a job.",
        "q.9.5-x3.options": ["It gets brighter", "It gets dimmer", "It stays as bright"],
        "q.9.5-x3.reasons": [
          "The new lamp takes all the electrons from the first lamp",
          "The two lamps share the energy, so the current goes up",
          "Adding a lamp slows the electrons all round the circuit, so the current halves"
        ],
        "q.9.5-x3.observe": "Both lamps are dimmer and the ammeter reads 0.7 A — half of before."
      },
      vi: {}
    }
  });
})();
