// 🚀 Extension quests — Science 7, Unit 8 Changes to materials. Self-written; every fact comes from the stage's own
// `learn` / `learnDetail` / `example`. Science-thinking types: predict, odd, fair (+ whatif with the book's own
// numbers). See MATH_QUESTS_GUIDE.md § Science.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 8,
    sections: {
      "8.1": [
        {
          id: "8.1-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn chất — tìm cho mỗi chất một lý do khiến chỉ nó khác ba chất còn lại.",
          why: "So sánh tính chất vật lí và hoá học của chất phản ứng với sản phẩm giúp em nhận ra khi nào một chất mới đã được tạo thành.",
          items: ["magnesium", "oxygen", "magnesium oxide", "potassium"],
          props: [
            { id: "bright", text: "khi cháy cho ánh sáng chói đến mức không được nhìn thẳng vào", has: [0] },
            { id: "gas", text: "là chất khí", has: [1] },
            { id: "compound", text: "là hợp chất", has: [2] },
            { id: "oil", text: "phải ngâm trong dầu để không phản ứng với hơi nước trong không khí", has: [3] },
            { id: "noelec", text: "không dẫn điện", has: [1, 2] },
            { id: "metal", text: "là kim loại", has: [0, 3] },
            { id: "react", text: "là chất phản ứng khi đốt dải magnesium", has: [0, 1] }
          ],
          sample: { item: 3, prop: "oil" }
        },
        {
          id: "8.1-x2", type: "predict",
          ask: "Em thu được khí hydrogen trong một ống nghiệm, nhưng để miệng ống mở một lúc rồi mới đưa que đóm đang cháy vào. Điều gì xảy ra?",
          why: "Hiểu vì sao phải bịt ống đến phút cuối giúp em làm phép thử hydrogen thành công và dùng lại được ở bài nhận biết phản ứng.",
          options: ["Tiếng «pốp» to hơn bình thường", "Không có (hoặc hầu như không có) tiếng «pốp»", "Que đóm tắt rồi bùng cháy trở lại"],
          answer: 1,
          reasons: [
            "Hydrogen nhẹ hơn không khí nên đã thoát ra khỏi ống",
            "Để lâu, hydrogen phản ứng với không khí thành oxygen",
            "Hydrogen chỉ nổ khi ống nghiệm được đun nóng"
          ],
          reason: 0,
          observe: "Hầu như không còn hydrogen để thử: hydrogen nhẹ hơn không khí nên đã bay ra khỏi ống. Vì vậy phải bịt ngón tay ở miệng ống đến phút cuối; khi còn hydrogen, nó cháy với tiếng «pốp» nhỏ, tạo thành nước.",
          sample: { option: 1, reason: 0 }
        },
        {
          id: "8.1-x3", type: "predict",
          ask: "Magnesium là kim loại sáng bóng, dẫn điện. Sau khi đốt dải magnesium, em thu được bột trắng. Bột này có dẫn điện không?",
          why: "Bài này giúp em nhớ dấu hiệu quan trọng của phản ứng hoá học: sản phẩm có tính chất khác hẳn chất phản ứng.",
          options: ["Có, vì trong bột vẫn còn magnesium", "Có, và dẫn điện tốt hơn magnesium", "Không dẫn điện"],
          answer: 2,
          reasons: [
            "Khi cháy, magnesium chỉ đổi thể nên vẫn giữ tính chất cũ",
            "Bột là chất mới — magnesium oxide — với tính chất khác hẳn magnesium",
            "Kết hợp thêm oxygen làm chất dẫn điện tốt hơn"
          ],
          reason: 1,
          observe: "Magnesium oxide không dẫn điện. Nó là hợp chất dạng bột trắng, nóng chảy ở 2800 °C — khác hẳn magnesium (mềm, sáng bóng, dẫn điện, nóng chảy ở 651 °C).",
          sample: { option: 2, reason: 1 }
        }
      ],
      "8.2": [
        {
          id: "8.2-x1", type: "predict", sim: "titration",
          ask: "Bình nón chứa sodium hydroxide và chất chỉ thị vạn năng. Sau khi thêm 25 cm³ acid từ buret, pH bằng 7. Em thêm tiếp 3 cm³ acid nữa. pH sẽ thế nào?",
          why: "Biết điều gì xảy ra khi thêm quá tay giúp em hiểu vì sao phải thêm acid thật chậm, vài giọt một lần.",
          options: ["Khoảng 6", "Vẫn bằng 7", "Khoảng 8"],
          answer: 0,
          reasons: [
            "Thêm chất lỏng làm dung dịch loãng ra nên pH tăng",
            "Đã trung tính rồi thì pH không đổi nữa",
            "Kiềm đã được trung hoà hết; acid thêm vào không còn gì để phản ứng nên dung dịch có tính acid"
          ],
          reason: 2,
          observe: "Ở 28 cm³ acid, pH khoảng 6 — dung dịch có tính acid yếu. Thêm quá nhiều acid vào kiềm sẽ tạo ra chất lỏng có tính acid.",
          sample: { option: 0, reason: 2 }
        },
        {
          id: "8.2-x2", type: "odd",
          ask: "Cái nào khác loại? Năm thứ có liên quan tới acid và kiềm trong đời sống — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Thấy phản ứng trung hoà ở nhiều nơi trong đời sống giúp em chuẩn bị đặt câu hỏi khảo sát ở chặng sau.",
          items: ["thuốc chữa khó tiêu", "kem đánh răng", "vôi", "acid dạ dày", "mưa acid"],
          props: [
            { id: "antacid", text: "đôi khi được gọi là thuốc kháng acid", has: [0] },
            { id: "mouth", text: "trung hoà acid do vi khuẩn trong miệng tạo ra", has: [1] },
            { id: "soil", text: "được nông dân rải lên đất chua", has: [2] },
            { id: "digest", text: "do cơ thể tiết ra để tiêu hoá thức ăn", has: [3] },
            { id: "lake", text: "làm hại cây cối và làm thay đổi pH của hồ, sông, ao", has: [4] },
            { id: "neut", text: "được dùng để trung hoà acid", has: [0, 1, 2] },
            { id: "acid", text: "có tính acid", has: [3, 4] }
          ],
          sample: { item: 1, prop: "mouth" }
        },
        {
          id: "8.2-x3", type: "whatif", base: 25.5, unitLabel: "cm³",
          ask: "Buret chứa hydrochloric acid, số đọc lúc đầu 4,0 cm³; khi dung dịch sodium hydroxide vừa trung tính thì số đọc là 29,5 cm³ (đã dùng 25,5 cm³). Nếu bình chứa lượng sodium hydroxide gấp đôi (cùng nồng độ), cần bao nhiêu cm³ acid?",
          why: "Dự đoán bằng con số buộc em nghĩ xem lượng acid vừa đủ phụ thuộc vào lượng kiềm cần trung hoà thế nào.",
          answer: function () { return 51; },
          tol: 0.01,
          reasons: [
            "Vẫn 25,5 cm³ vì acid và chất chỉ thị không đổi",
            "Chỉ cần thêm 4,0 cm³ nữa (bằng số đọc lúc đầu)",
            "Kiềm gấp đôi nên cần lượng acid gấp đôi để trung hoà hết"
          ],
          reason: 2,
          sample: { guess: "51", reason: 2 }
        }
      ],
      "8.3": [
        {
          id: "8.3-x1", type: "fair",
          ask: "Thiết kế thí nghiệm công bằng giống khảo sát của Marcus và Arun về bột chữa khó tiêu. Em nghĩ ra được bao nhiêu thí nghiệm khác nhau?",
          why: "Biết mình thay đổi gì, giữ nguyên gì và đo gì là trọng tâm của việc lập kế hoạch khảo sát trong chặng này.",
          factors: [
            { id: "powder", text: "loại bột (dùng bột C thay cho bột A)" },
            { id: "spoon", text: "lượng bột trong mỗi thìa (thìa đầy hơn)" },
            { id: "vol", text: "thể tích acid trong cốc (20 cm³)" },
            { id: "ph", text: "độ mạnh của acid (pH 1)" },
            { id: "drops", text: "số giọt chất chỉ thị vạn năng" }
          ],
          outcomes: [
            { id: "spoons", text: "số thìa bột cần để chất chỉ thị chuyển xanh lá" }
          ],
          links: [
            { change: "powder", measure: "spoons", effect: "up" },
            { change: "spoon", measure: "spoons", effect: "down" }
          ],
          sample: { change: "powder", measure: "spoons", keep: ["spoon", "vol", "ph", "drops"], effect: "up" }
        },
        {
          id: "8.3-x2", type: "odd",
          ask: "Cái nào khác loại? Bốn câu hỏi về acid và kiềm — tìm cho mỗi câu một lý do khiến chỉ nó khác.",
          why: "Biết một câu hỏi có kiểm chứng được hay không là bước đầu tiên trước khi lập kế hoạch bất kì cuộc khảo sát nào.",
          items: [
            "Thuốc chữa khó tiêu nào tốt nhất?",
            "Bột chữa khó tiêu nào trung hoà được acid mà dùng ít bột nhất?",
            "Cần bao nhiêu vôi để trung hoà một hồ bị acid?",
            "Cần bao nhiêu kem đánh răng để trung hoà acid trong miệng?"
          ],
          props: [
            { id: "vague", text: "chưa chính xác: chữ «tốt nhất» có thể hiểu theo nhiều cách", has: [0] },
            { id: "rewrite", text: "là cách nhà khoa học viết lại câu hỏi cho kiểm chứng được", has: [1] },
            { id: "lakeq", text: "nói về một hồ nước", has: [2] },
            { id: "mouthq", text: "nói về acid trong miệng", has: [3] },
            { id: "remedy", text: "nói về thuốc chữa khó tiêu", has: [0, 1] },
            { id: "neutq", text: "là câu hỏi về phản ứng trung hoà", has: [0, 1, 2, 3] }
          ],
          sample: { item: 0, prop: "vague" }
        },
        {
          id: "8.3-x3", type: "predict",
          ask: "Lần đầu, bột A cần 10 thìa, bột B 6 thìa, bột C 24 thìa để trung hoà acid. Marcus và Arun làm lại thêm hai lần: A được 9 và 11, B được 17 và 16, C được 23 và 25. Giờ bột nào hiệu quả nhất?",
          why: "Bài này cho thấy vì sao phải lặp lại phép đo và nhìn bằng chứng một cách có phê phán trước khi kết luận.",
          options: ["Bột B", "Bột A", "Bột C"],
          answer: 1,
          reasons: [
            "Kết quả đầu tiên luôn đáng tin nhất vì làm cẩn thận nhất",
            "Bột cần nhiều thìa nhất là bột mạnh nhất",
            "Số 6 lệch hẳn so với 17 và 16 nên đáng ngờ; nhìn cả ba lần thì A cần ít thìa nhất"
          ],
          reason: 2,
          observe: "Trung bình: A cần 10 thìa, B 13 thìa (tính cả số 6 bất thường), C 24 thìa. Ít thìa nhất là hiệu quả nhất, nên A tốt nhất. Chỉ một lần đo thì chưa đủ bằng chứng.",
          sample: { option: 1, reason: 2 }
        }
      ],
      "8.4": [
        {
          id: "8.4-x1", type: "odd",
          ask: "Cái nào khác loại? Bốn ống nghiệm chứa bốn chất khí — tìm cho mỗi khí một lý do khiến chỉ nó khác.",
          why: "Nhớ phép thử riêng của từng khí giúp em dùng dấu hiệu «có khí thoát ra» để xác định đúng phản ứng nào đã xảy ra.",
          items: ["hydrogen", "oxygen", "carbon dioxide", "không khí"],
          props: [
            { id: "pop", text: "cháy với tiếng «pốp» khi gặp que đóm đang cháy", has: [0] },
            { id: "mg", text: "sinh ra khi magnesium phản ứng với hydrochloric acid", has: [0] },
            { id: "relight", text: "làm que đóm còn tàn đỏ bùng cháy trở lại", has: [1] },
            { id: "apple", text: "sinh ra khi thả miếng táo vào hydrogen peroxide", has: [1] },
            { id: "lime", text: "làm nước vôi trong hoá vẩn đục", has: [2] },
            { id: "soda", text: "sinh ra khi bột nở gặp giấm", has: [2] },
            { id: "none", text: "không cho kết quả rõ với cả ba phép thử", has: [3] },
            { id: "splint", text: "được nhận biết bằng một phép thử dùng que đóm", has: [0, 1] },
            { id: "gas", text: "là chất khí", has: [0, 1, 2, 3] }
          ],
          sample: { item: 2, prop: "lime" }
        },
        {
          id: "8.4-x2", type: "predict",
          ask: "Em cho một mẩu kẽm nhỏ vào nửa ống nghiệm hydrochloric acid loãng rồi cầm ống nghiệm. Ngoài bọt khí, em còn nhận thấy gì?",
          why: "Biết nhiều dấu hiệu khác nhau của phản ứng hoá học giúp em quyết định chắc chắn hơn khi chỉ thấy một dấu hiệu.",
          options: ["Ống nghiệm lạnh đi", "Không cảm thấy gì khác", "Ống nghiệm nóng lên"],
          answer: 2,
          reasons: [
            "Phản ứng hoá học có thể toả nhiệt — đó cũng là một dấu hiệu",
            "Khí thoát ra mang nhiệt đi nên ống nghiệm lạnh đi",
            "Chỉ potassium mới toả nhiệt khi phản ứng"
          ],
          reason: 0,
          observe: "Khí hydrogen thoát ra và ống nghiệm nóng lên khi cầm: phản ứng toả nhiệt. Toả nhiệt là một dấu hiệu nữa cho thấy có phản ứng hoá học.",
          sample: { option: 2, reason: 0 }
        },
        {
          id: "8.4-x3", type: "predict",
          ask: "Em rót dung dịch silver nitrate vào ống nghiệm rồi thêm từ từ dung dịch calcium chloride. Em sẽ thấy gì?",
          why: "Kết tủa là dấu hiệu em sẽ gặp lại, ví dụ để giải thích vì sao nước vôi trong hoá vẩn đục khi gặp carbon dioxide.",
          options: ["Một chất rắn xuất hiện trong chất lỏng", "Không có gì: hai chất lỏng chỉ hoà vào nhau", "Có bọt khí thoát ra"],
          answer: 0,
          reasons: [
            "Mọi phản ứng hoá học đều sinh ra chất khí",
            "Hai chất phản ứng với nhau tạo ra silver chloride là chất rắn — một kết tủa",
            "Trộn hai chất lỏng thì luôn chỉ được một chất lỏng"
          ],
          reason: 1,
          observe: "Một chất rắn — kết tủa silver chloride — xuất hiện: silver nitrate + calcium chloride → silver chloride + calcium nitrate. Hai dung dịch tạo ra chất rắn là dấu hiệu có phản ứng hoá học.",
          sample: { option: 0, reason: 1 }
        }
      ]
    },
    tr: {
      en: {
        "q.8.1-x1.ask": "Which one doesn't belong? Four substances — find a reason for each that makes only it different from the other three.",
        "q.8.1-x1.why": "Comparing the physical and chemical properties of reactants and products helps you spot when a new substance has been made.",
        "q.8.1-x1.items": ["magnesium", "oxygen", "magnesium oxide", "potassium"],
        "q.8.1-x1.props": ["burns with a light so bright you must not look straight at it", "is a gas", "is a compound", "must be kept under oil so it does not react with water vapour in the air", "does not conduct electricity", "is a metal", "is a reactant when a magnesium ribbon burns"],
        "q.8.1-x2.ask": "You have collected hydrogen in a test tube, but you leave the mouth of the tube open for a while before putting in a lighted splint. What happens?",
        "q.8.1-x2.why": "Knowing why you keep the tube closed until the last moment helps you do the hydrogen test properly and reuse it when detecting reactions.",
        "q.8.1-x2.options": ["A louder 'pop' than usual", "No 'pop' (or hardly any)", "The splint goes out and then relights"],
        "q.8.1-x2.reasons": [
          "Hydrogen is lighter than air, so it has escaped from the tube",
          "Left for a while, hydrogen reacts with the air and becomes oxygen",
          "Hydrogen only pops when the test tube is heated"
        ],
        "q.8.1-x2.observe": "There is hardly any hydrogen left to test: hydrogen is lighter than air, so it has floated out of the tube. That is why you keep a finger over the tube until the last moment; when hydrogen is there, it burns with a small 'pop', making water.",
        "q.8.1-x3.ask": "Magnesium is a shiny metal that conducts electricity. After burning a magnesium ribbon you get a white powder. Does this powder conduct electricity?",
        "q.8.1-x3.why": "This helps you remember an important sign of a chemical reaction: the product has very different properties from the reactants.",
        "q.8.1-x3.options": ["Yes, because there is still magnesium in the powder", "Yes, and better than magnesium", "It does not conduct electricity"],
        "q.8.1-x3.reasons": [
          "When it burns, magnesium only changes state, so it keeps its old properties",
          "The powder is a new substance — magnesium oxide — with properties very different from magnesium",
          "Combining with extra oxygen makes a substance conduct better"
        ],
        "q.8.1-x3.observe": "Magnesium oxide does not conduct electricity. It is a white powdery compound that melts at 2800 °C — very different from magnesium (soft, shiny, conducts electricity, melts at 651 °C).",
        "q.8.2-x1.ask": "A conical flask holds sodium hydroxide and universal indicator. After adding 25 cm³ of acid from the burette, the pH is 7. You add another 3 cm³ of acid. What will the pH be?",
        "q.8.2-x1.why": "Knowing what happens when you add too much helps you see why acid must be added very slowly, a few drops at a time.",
        "q.8.2-x1.options": ["About 6", "Still 7", "About 8"],
        "q.8.2-x1.reasons": [
          "Adding liquid makes the solution more dilute, so the pH goes up",
          "Once it is neutral, the pH does not change any more",
          "All the alkali has been neutralised; the extra acid has nothing left to react with, so the solution becomes acidic"
        ],
        "q.8.2-x1.observe": "At 28 cm³ of acid the pH is about 6 — the liquid is slightly acidic. Adding too much acid to an alkali makes an acidic liquid.",
        "q.8.2-x2.ask": "Which one doesn't belong? Five everyday things linked to acids and alkalis — find a reason for each that makes only it different.",
        "q.8.2-x2.why": "Seeing neutralisation in many places in everyday life prepares you to ask investigation questions in the next stage.",
        "q.8.2-x2.items": ["an indigestion remedy", "toothpaste", "lime", "stomach acid", "acid rain"],
        "q.8.2-x2.props": ["is sometimes called an antacid", "neutralises acid made by bacteria in the mouth", "is spread by farmers on acidic soil", "is made by the body to digest food", "damages trees and changes the pH of lakes, rivers and ponds", "is used to neutralise acid", "is acidic"],
        "q.8.2-x3.ask": "A burette holds hydrochloric acid; the first reading is 4.0 cm³, and when the sodium hydroxide has just become neutral the reading is 29.5 cm³ (25.5 cm³ used). If the flask held twice as much sodium hydroxide (same concentration), how many cm³ of acid would you need?",
        "q.8.2-x3.why": "Predicting a number makes you think about how the right amount of acid depends on how much alkali must be neutralised.",
        "q.8.2-x3.reasons": [
          "Still 25.5 cm³, because the acid and the indicator are the same",
          "Only 4.0 cm³ more (the same as the first reading)",
          "Twice the alkali needs twice the acid to neutralise it all"
        ],
        "q.8.3-x1.ask": "Design fair tests like Marcus and Arun's investigation of indigestion powders. How many different tests can you think of?",
        "q.8.3-x1.why": "Knowing what you change, what you keep the same and what you measure is the heart of planning an investigation in this stage.",
        "q.8.3-x1.factors": ["the type of powder (using powder C instead of powder A)", "how much powder is in each spatula (fuller spatulas)", "the volume of acid in the beaker (20 cm³)", "how strong the acid is (pH 1)", "the number of drops of universal indicator"],
        "q.8.3-x1.outcomes": ["the number of spatulas of powder needed to turn the indicator green"],
        "q.8.3-x2.ask": "Which one doesn't belong? Four questions about acids and alkalis — find a reason for each that makes only it different.",
        "q.8.3-x2.why": "Knowing whether a question can be tested is the first step before planning any investigation.",
        "q.8.3-x2.items": [
          "Which indigestion remedy is best?",
          "Which indigestion powder neutralises the acid using the least powder?",
          "How much lime is needed to neutralise an acidic lake?",
          "How much toothpaste is needed to neutralise the acid in the mouth?"
        ],
        "q.8.3-x2.props": ["is not precise: the word 'best' can mean several things", "is how a scientist rewrites a question so it can be tested", "is about a lake", "is about acid in the mouth", "is about indigestion remedies", "is a question about neutralisation"],
        "q.8.3-x3.ask": "The first time, powder A needed 10 spatulas, powder B 6 and powder C 24 to neutralise the acid. Marcus and Arun repeated it twice more: A gave 9 and 11, B gave 17 and 16, C gave 23 and 25. Which powder is the most effective now?",
        "q.8.3-x3.why": "This shows why you must repeat measurements and look at evidence critically before drawing a conclusion.",
        "q.8.3-x3.options": ["Powder B", "Powder A", "Powder C"],
        "q.8.3-x3.reasons": [
          "The first result is always the most reliable because you are most careful then",
          "The powder that needs the most spatulas is the strongest",
          "The 6 is far from 17 and 16, so it is suspicious; looking at all three tries, A needs the fewest spatulas"
        ],
        "q.8.3-x3.observe": "Means: A needs 10 spatulas, B 13 (including the odd 6), C 24. The fewest spatulas means the most effective, so A is best. One measurement alone is not enough evidence.",
        "q.8.4-x1.ask": "Which one doesn't belong? Four test tubes hold four gases — find a reason for each gas that makes only it different.",
        "q.8.4-x1.why": "Remembering each gas's own test helps you use the sign 'a gas is given off' to work out which reaction has happened.",
        "q.8.4-x1.items": ["hydrogen", "oxygen", "carbon dioxide", "air"],
        "q.8.4-x1.props": ["burns with a 'pop' with a lighted splint", "is made when magnesium reacts with hydrochloric acid", "relights a glowing splint", "is made when a piece of apple is put in hydrogen peroxide", "turns limewater cloudy", "is made when baking powder meets vinegar", "gives no clear result in any of the three tests", "is identified by a test using a splint", "is a gas"],
        "q.8.4-x2.ask": "You put a small piece of zinc into a test tube half full of dilute hydrochloric acid and hold the tube. Apart from bubbles, what else do you notice?",
        "q.8.4-x2.why": "Knowing several different signs of a chemical reaction helps you decide with more confidence when you see only one sign.",
        "q.8.4-x2.options": ["The test tube gets colder", "You feel nothing different", "The test tube gets warmer"],
        "q.8.4-x2.reasons": [
          "A chemical reaction can give out heat — that is another sign",
          "The escaping gas carries heat away, so the tube gets colder",
          "Only potassium gives out heat when it reacts"
        ],
        "q.8.4-x2.observe": "Hydrogen is given off and the test tube feels warm: the reaction gives out heat. Giving out heat is one more sign that a chemical reaction is happening.",
        "q.8.4-x3.ask": "You pour silver nitrate solution into a test tube and slowly add calcium chloride solution. What will you see?",
        "q.8.4-x3.why": "A precipitate is a sign you will meet again, for example to explain why limewater turns cloudy with carbon dioxide.",
        "q.8.4-x3.options": ["A solid appears in the liquid", "Nothing: the two liquids just mix", "Bubbles of gas are given off"],
        "q.8.4-x3.reasons": [
          "Every chemical reaction gives off a gas",
          "The two substances react to make silver chloride, a solid — a precipitate",
          "Mixing two liquids always gives just a liquid"
        ],
        "q.8.4-x3.observe": "A solid — a precipitate of silver chloride — appears: silver nitrate + calcium chloride → silver chloride + calcium nitrate. Two solutions making a solid is a sign of a chemical reaction."
      },
      vi: {}
    }
  });
})();
