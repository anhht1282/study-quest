// 🚀 Extension quests — Science 7, Unit 1 Cells. Self-written; every fact comes from the stage's own learn /
// learnDetail / example. Science-thinking types: predict, odd, fair (see MATH_QUESTS_GUIDE.md § Khoa học).
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 1,
    sections: {
      "1.1": [
        {
          id: "1.1-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn bộ phận của tế bào thực vật — với mỗi bộ phận, hãy tìm một lý do khiến chỉ nó khác ba bộ phận còn lại.",
          why: "Nhớ chắc việc của từng bộ phận là nền để chặng sau em so sánh tế bào thực vật với tế bào động vật.",
          items: ["thành tế bào", "màng tế bào", "lục lạp", "không bào"],
          props: [
            { id: "wall", text: "chắc, cứng và làm bằng cellulose", has: [0] },
            { id: "control", text: "kiểm soát các chất đi vào và đi ra khỏi tế bào", has: [1] },
            { id: "green", text: "chứa diệp lục màu xanh, là nơi cây tạo ra thức ăn", has: [2] },
            { id: "sap", text: "là một khoang lớn chứa dung dịch đường và các chất khác hoà tan trong nước", has: [3] },
            { id: "plant", text: "là một bộ phận có thể gặp trong tế bào thực vật", has: [0, 1, 2, 3] }
          ],
          sample: { item: 2, prop: "green" }
        },
        {
          id: "1.1-x2", type: "whatif", base: 120, unitLabel: "mm",
          ask: "Lan soi tế bào vảy hành với thị kính 10× và vật kính 40×: tế bào trông dài 120 mm. Nếu Lan đổi sang vật kính 10× (thị kính vẫn 10×) và soi đúng tế bào đó, nó trông dài bao nhiêu mm?",
          why: "Biết độ phóng đại tổng thay đổi thế nào giúp em đọc đúng kích thước khi đổi vật kính ở mọi bài soi kính sau này.",
          answer: function () { return 30; },
          tol: 0.01,
          reasons: [
            "Độ phóng đại tổng giảm từ 400 lần xuống 100 lần, tức còn một phần tư, nên ảnh cũng chỉ dài bằng một phần tư",
            "Tế bào thật không đổi nên ảnh qua kính vẫn dài như cũ",
            "Chỉ vật kính thay đổi còn thị kính giữ nguyên, nên ảnh chỉ ngắn đi một nửa"
          ],
          reason: 0,
          sample: { guess: "30", reason: 0 }
        },
        {
          id: "1.1-x3", type: "fair", sim: "microscope",
          ask: "Thiết kế thí nghiệm công bằng với kính hiển vi. Em nghĩ ra được bao nhiêu thí nghiệm khác nhau?",
          why: "Thay đổi một thứ và giữ nguyên mọi thứ khác giúp em biết chắc điều gì làm tế bào trông to hơn qua kính.",
          factors: [
            { id: "eye", text: "độ phóng đại của thị kính" },
            { id: "obj", text: "độ phóng đại của vật kính" },
            { id: "cell", text: "kích thước thật của tế bào được soi" }
          ],
          outcomes: [
            { id: "img", text: "tế bào trông dài bao nhiêu qua kính" },
            { id: "mag", text: "độ phóng đại tổng của kính" }
          ],
          links: [
            { change: "obj", measure: "img", effect: "up" },
            { change: "obj", measure: "mag", effect: "up" },
            { change: "eye", measure: "img", effect: "up" },
            { change: "eye", measure: "mag", effect: "up" },
            { change: "cell", measure: "img", effect: "up" },
            { change: "cell", measure: "mag", effect: "same" }
          ],
          sample: { change: "cell", measure: "mag", keep: ["eye", "obj"], effect: "same" }
        }
      ],
      "1.2": [
        {
          id: "1.2-x1", type: "predict",
          ask: "Em quệt nhẹ tăm bông vào mặt trong má rồi quệt lên lam kính sạch (bước 2, chưa nhỏ thuốc nhuộm). Nhìn lam kính bằng mắt thường, em sẽ thấy gì?",
          why: "Đoán trước rồi đối chiếu giúp em hiểu vì sao cần cả thuốc nhuộm lẫn kính hiển vi mới quan sát được tế bào.",
          options: ["Thấy rõ từng tế bào má", "Không thấy tế bào nào", "Thấy các tế bào màu xanh"],
          answer: 1,
          reasons: [
            "Tế bào nhỏ đến mức mắt thường không nhìn thấy",
            "Tăm bông chưa lấy được tế bào nào",
            "Tế bào má vốn có màu xanh nên chỉ cần nhìn kĩ là thấy"
          ],
          reason: 0,
          observe: "Lam kính trông như trống trơn: tế bào quá nhỏ để mắt thường thấy. Phải nhỏ xanh methylen để nhuộm tế bào cho dễ nhìn, rồi đặt dưới kính hiển vi mới thấy được chúng.",
          sample: { option: 1, reason: 0 }
        },
        {
          id: "1.2-x2", type: "odd",
          ask: "Cái nào khác loại? Bốn bộ phận dùng để nhận ra tế bào thực vật hay động vật — tìm cho mỗi bộ phận một lý do khiến chỉ nó khác.",
          why: "Biết dấu hiệu nào mạnh, dấu hiệu nào yếu giúp em kết luận chắc chắn khi nhìn một hình tế bào lạ.",
          items: ["thành tế bào", "lục lạp", "không bào lớn", "nhân"],
          props: [
            { id: "both", text: "có ở cả tế bào động vật lẫn tế bào thực vật", has: [3] },
            { id: "strong", text: "mọi tế bào thực vật đều có, tế bào động vật thì không bao giờ có", has: [0] },
            { id: "weak", text: "một số tế bào thực vật như tế bào rễ, tế bào hành cũng không có", has: [1] },
            { id: "sap", text: "chứa dịch tế bào", has: [2] },
            { id: "remove", text: "bị bỏ đi khi biến hình tế bào thực vật thành tế bào động vật", has: [0, 1, 2] },
            { id: "plant", text: "có thể gặp trong tế bào thực vật", has: [0, 1, 2, 3] }
          ],
          sample: { item: 0, prop: "strong" }
        }
      ],
      "1.3": [
        {
          id: "1.3-x1", type: "odd",
          ask: "Cái nào khác loại? Năm tế bào chuyên hoá — mỗi tế bào đều có thể là \"kẻ lạc loài\" theo một lý do riêng. Tìm hết nhé.",
          why: "Gắn mỗi tế bào với cấu tạo đặc biệt của nó là cách nhớ chức năng nhanh nhất, và em sẽ cần nó khi học về các cơ quan.",
          items: ["hồng cầu", "tế bào thần kinh", "tế bào có lông", "tế bào lông hút", "tế bào mô giậu"],
          props: [
            { id: "nonuc", text: "không có nhân", has: [0] },
            { id: "axon", text: "có một sợi tế bào chất rất dài truyền tín hiệu điện", has: [1] },
            { id: "cilia", text: "có lông rung quét chất nhầy lên phía sau miệng", has: [2] },
            { id: "absorb", text: "có phần kéo dài, mảnh để hấp thụ nước từ đất", has: [3] },
            { id: "chloro", text: "có rất nhiều lục lạp chứa diệp lục", has: [4] },
            { id: "wall", text: "có thành tế bào", has: [3, 4] },
            { id: "animal", text: "là tế bào động vật", has: [0, 1, 2] }
          ],
          sample: { item: 0, prop: "nonuc" }
        },
        {
          id: "1.3-x2", type: "predict",
          ask: "Giả sử hồng cầu có một cái nhân to như nhiều tế bào khác. Em dự đoán điều gì sẽ xảy ra với việc chở oxygen?",
          why: "Tự hỏi \"nếu cấu tạo khác đi thì sao\" giúp em thấy rõ vì sao mỗi tế bào chuyên hoá lại có hình dạng như vậy.",
          options: ["Chở được nhiều oxygen hơn", "Chở được ít oxygen hơn", "Không có gì thay đổi"],
          answer: 1,
          reasons: [
            "Nhân chiếm chỗ, nên còn ít chỗ chứa hemoglobin — chất mang oxygen",
            "Nhân điều khiển tế bào nên tế bào có nhân luôn làm việc tốt hơn",
            "Oxygen được chở ở trong nhân"
          ],
          reason: 0,
          observe: "Hồng cầu thật không có nhân, chính nhờ vậy nó có thêm chỗ chứa hemoglobin để mang oxygen đi khắp cơ thể. Có nhân thì phần chỗ đó mất đi.",
          sample: { option: 1, reason: 0 }
        },
        {
          id: "1.3-x3", type: "predict",
          ask: "Em hít vào một hơi không khí có lẫn bụi. Bụi sẽ đi đâu?",
          why: "Hiểu tế bào có lông phối hợp với chất nhầy thế nào chuẩn bị cho em chặng sau, khi các tế bào giống nhau nhóm lại thành mô.",
          options: ["Đi thẳng vào phổi và ở lại đó", "Bị lông rung bắt lấy và tiêu huỷ ngay", "Bị chất nhầy giữ lại rồi được đưa lên phía sau miệng"],
          answer: 2,
          reasons: [
            "Chính lông rung tạo ra chất nhầy để \"ăn\" bụi",
            "Chất nhầy dính giữ bụi, còn lông rung vẫy để quét chất nhầy lên trên",
            "Ống dẫn khí chỉ là ống rỗng, không làm gì với bụi"
          ],
          reason: 1,
          observe: "Chất nhầy (do các tế bào khác trong lớp lót tạo ra) giữ bụi và vi khuẩn lại, không cho vào phổi. Lông rung quét chất nhầy lên phía sau miệng và em nuốt nó.",
          sample: { option: 2, reason: 1 }
        }
      ],
      "1.4": [
        {
          id: "1.4-x1", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác ba thứ còn lại.",
          why: "Phân biệt tế bào, mô và cơ quan là chìa khoá để đọc mọi sơ đồ cơ thể sinh vật ở các chương sau.",
          items: ["biểu bì vảy hành", "biểu mô có lông", "lá cây", "một tế bào thần kinh"],
          props: [
            { id: "plantt", text: "là một mô của thực vật", has: [0] },
            { id: "animalt", text: "là một mô của động vật", has: [1] },
            { id: "organ", text: "là một cơ quan, cắt ngang thấy bốn lớp mô", has: [2] },
            { id: "one", text: "chỉ là một tế bào, chưa phải một nhóm tế bào", has: [3] },
            { id: "tissue", text: "là một nhóm tế bào giống nhau cùng làm một việc", has: [0, 1] },
            { id: "plant", text: "thuộc về thực vật", has: [0, 2] }
          ],
          sample: { item: 2, prop: "organ" }
        },
        {
          id: "1.4-x2", type: "predict",
          ask: "Bạn Nam nói: \"Lá mỏng như vậy chắc chỉ gồm một loại tế bào.\" Cắt ngang một chiếc lá rồi soi kính hiển vi, em dự đoán thấy gì?",
          why: "Kiểm tra một ý kiến bằng quan sát là cách khoa học tiến lên — và giúp em nhớ vì sao lá là một cơ quan.",
          options: ["Nhiều lớp mô khác nhau xếp chồng lên nhau", "Chỉ một lớp tế bào giống hệt nhau", "Một lớp tế bào thực vật và một lớp tế bào động vật"],
          answer: 0,
          reasons: [
            "Lá là một cơ quan, mà cơ quan gồm nhiều loại mô khác nhau cùng phối hợp",
            "Lá rất mỏng nên chỉ đủ chỗ cho một lớp tế bào",
            "Mọi bộ phận của cây đều chỉ là một mô"
          ],
          reason: 0,
          observe: "Thấy bốn lớp: biểu bì trên, lớp mô giậu, lớp mô xốp và biểu bì dưới. Lá gồm nhiều mô nên là một cơ quan.",
          sample: { option: 0, reason: 0 }
        },
        {
          id: "1.4-x3", type: "odd",
          ask: "Cái nào khác loại? Bốn cấp độ tổ chức trong cơ thể người — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Xếp đúng cấp độ (tế bào → mô → cơ quan → hệ cơ quan) giúp em mô tả được cách cơ thể vận hành khi học các hệ cơ quan.",
          items: ["tế bào cơ trơn", "mô cơ trơn", "dạ dày", "hệ tiêu hoá"],
          props: [
            { id: "cell", text: "chỉ là một tế bào", has: [0] },
            { id: "same", text: "là một nhóm tế bào giống nhau", has: [1] },
            { id: "organ", text: "là một cơ quan, gồm mô cơ và nhiều mô khác", has: [2] },
            { id: "system", text: "là một nhóm cơ quan cùng thực hiện một chức năng", has: [3] },
            { id: "body", text: "là một phần của cơ thể người", has: [0, 1, 2, 3] }
          ],
          sample: { item: 3, prop: "system" }
        }
      ]
    },
    tr: {
      en: {
        "q.1.1-x1.ask": "Which one doesn't belong? Four parts of a plant cell — for each part, find a reason that makes only that part different from the other three.",
        "q.1.1-x1.why": "Knowing the job of each part for sure is the base for the next stage, where you compare plant cells with animal cells.",
        "q.1.1-x1.items": ["cell wall", "cell membrane", "chloroplast", "sap vacuole"],
        "q.1.1-x1.props": ["is strong, stiff and made of cellulose", "controls what goes into and out of the cell", "contains green chlorophyll and is where the plant makes food", "is a large space holding a solution of sugar and other substances dissolved in water", "is a part that can be found in a plant cell"],
        "q.1.1-x2.ask": "Lan looks at an onion cell with a 10× eyepiece and a 40× objective lens: the cell looks 120 mm long. If Lan changes to the 10× objective (eyepiece still 10×) and looks at the same cell, how many mm long will it look?",
        "q.1.1-x2.why": "Knowing how the total magnification changes helps you read sizes correctly whenever you change the objective lens later on.",
        "q.1.1-x2.reasons": [
          "The total magnification drops from 400 times to 100 times, a quarter, so the image is only a quarter as long",
          "The real cell has not changed, so the image looks just as long as before",
          "Only the objective changed and the eyepiece stayed the same, so the image is only half as long"
        ],
        "q.1.1-x3.ask": "Design fair tests with a microscope. How many different tests can you think of?",
        "q.1.1-x3.why": "Changing one thing and keeping everything else the same lets you know for sure what makes a cell look bigger through the microscope.",
        "q.1.1-x3.factors": ["the magnification of the eyepiece", "the magnification of the objective lens", "the real size of the cell you look at"],
        "q.1.1-x3.outcomes": ["how long the cell looks through the microscope", "the total magnification of the microscope"],
        "q.1.2-x1.ask": "You gently rub a cotton bud on the inside of your cheek, then wipe it onto a clean slide (step 2, no stain yet). Looking at the slide with your eyes only, what will you see?",
        "q.1.2-x1.why": "Predicting and then checking helps you understand why you need both a stain and a microscope to see cells.",
        "q.1.2-x1.options": ["Each cheek cell clearly", "No cells at all", "Blue cells"],
        "q.1.2-x1.reasons": [
          "Cells are so small that you cannot see them with your eyes alone",
          "The cotton bud has not picked up any cells",
          "Cheek cells are blue anyway, so you only need to look carefully"
        ],
        "q.1.2-x1.observe": "The slide looks empty: the cells are too small to see with your eyes. You add methylene blue to stain the cells so they are easier to see, then look through a microscope to see them.",
        "q.1.2-x2.ask": "Which one doesn't belong? Four parts used to tell plant cells from animal cells — find a reason for each that makes only it different.",
        "q.1.2-x2.why": "Knowing which clues are strong and which are weak lets you decide for sure when you see a picture of an unfamiliar cell.",
        "q.1.2-x2.items": ["cell wall", "chloroplast", "large sap vacuole", "nucleus"],
        "q.1.2-x2.props": ["is found in both animal cells and plant cells", "every plant cell has one, animal cells never do", "some plant cells, such as root cells and onion cells, do not have it", "contains cell sap", "is removed when you change a plant cell picture into an animal cell", "can be found in a plant cell"],
        "q.1.3-x1.ask": "Which one doesn't belong? Five specialised cells — each one can be the odd one out for its own reason. Find them all.",
        "q.1.3-x1.why": "Linking each cell to its special structure is the quickest way to remember its function, and you will need it when you learn about organs.",
        "q.1.3-x1.items": ["red blood cell", "neurone", "ciliated cell", "root hair cell", "palisade cell"],
        "q.1.3-x1.props": ["has no nucleus", "has a very long strand of cytoplasm that carries electrical signals", "has cilia that sweep mucus up to the back of the mouth", "has a long, thin part to absorb water from the soil", "has a lot of chloroplasts containing chlorophyll", "has a cell wall", "is an animal cell"],
        "q.1.3-x2.ask": "Imagine a red blood cell had a big nucleus like many other cells. What do you predict would happen to how it carries oxygen?",
        "q.1.3-x2.why": "Asking \"what if the structure were different?\" helps you see why each specialised cell is built the way it is.",
        "q.1.3-x2.options": ["It would carry more oxygen", "It would carry less oxygen", "Nothing would change"],
        "q.1.3-x2.reasons": [
          "The nucleus takes up space, so there is less room for haemoglobin, which carries oxygen",
          "The nucleus controls the cell, so a cell with a nucleus always works better",
          "Oxygen is carried inside the nucleus"
        ],
        "q.1.3-x2.observe": "Real red blood cells have no nucleus, and that is what gives them extra room for haemoglobin to carry oxygen all round the body. With a nucleus, some of that room would be lost.",
        "q.1.3-x3.ask": "You breathe in air with some dust in it. Where does the dust go?",
        "q.1.3-x3.why": "Understanding how ciliated cells work with mucus prepares you for the next stage, where similar cells group together into tissues.",
        "q.1.3-x3.options": ["Straight into the lungs, where it stays", "The cilia catch it and destroy it at once", "Mucus traps it and it is carried up to the back of the mouth"],
        "q.1.3-x3.reasons": [
          "The cilia themselves make mucus to \"eat\" the dust",
          "Sticky mucus traps the dust, and the cilia wave to sweep the mucus upwards",
          "The air tubes are just empty pipes that do nothing to the dust"
        ],
        "q.1.3-x3.observe": "Mucus (made by other cells in the lining) traps dust and bacteria so they do not get into the lungs. The cilia sweep the mucus up to the back of the mouth and you swallow it.",
        "q.1.4-x1.ask": "Which one doesn't belong? Find a reason for each item that makes only it different from the other three.",
        "q.1.4-x1.why": "Telling cells, tissues and organs apart is the key to reading every diagram of a living body in later chapters.",
        "q.1.4-x1.items": ["onion epidermis", "ciliated epithelium", "a leaf", "one neurone"],
        "q.1.4-x1.props": ["is a plant tissue", "is an animal tissue", "is an organ: a cross-section shows four layers of tissue", "is only one cell, not a group of cells", "is a group of similar cells working together on one job", "belongs to a plant"],
        "q.1.4-x2.ask": "Nam says: \"A leaf is so thin, it must be made of only one type of cell.\" If you cut across a leaf and look through a microscope, what do you predict you will see?",
        "q.1.4-x2.why": "Testing an idea by observing is how science moves forward — and it helps you remember why a leaf is an organ.",
        "q.1.4-x2.options": ["Several different layers of tissue on top of each other", "Only one layer of identical cells", "One layer of plant cells and one layer of animal cells"],
        "q.1.4-x2.reasons": [
          "A leaf is an organ, and an organ is made of several different tissues working together",
          "A leaf is so thin that there is only room for one layer of cells",
          "Every part of a plant is just one tissue"
        ],
        "q.1.4-x2.observe": "You see four layers: the upper epidermis, the palisade layer, the spongy layer and the lower epidermis. A leaf contains several tissues, so it is an organ.",
        "q.1.4-x3.ask": "Which one doesn't belong? Four levels of organisation in the human body — find a reason for each that makes only it different.",
        "q.1.4-x3.why": "Putting things at the right level (cell → tissue → organ → organ system) helps you describe how the body works when you study organ systems.",
        "q.1.4-x3.items": ["a smooth muscle cell", "smooth muscle tissue", "the stomach", "the digestive system"],
        "q.1.4-x3.props": ["is only one cell", "is a group of similar cells", "is an organ made of muscle tissue and many other tissues", "is a group of organs that carry out one function together", "is a part of the human body"]
      },
      vi: {}
    }
  });
})();
