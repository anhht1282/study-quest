// 🚀 Extension quests — Science 7, Unit 4 Grouping and identifying organisms. Self-written; every fact comes from the
// stage's own `learn` / `learnDetail` / `example`. Types: odd, predict, fair, whatif. See MATH_QUESTS_GUIDE.md § Science.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 4,
    sections: {
      "4.1": [
        {
          id: "4.1-x1", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác ba thứ còn lại.",
          why: "Đối chiếu từng thứ với bảy đặc trưng của sinh vật giúp em nhớ ý nghĩa của từng đặc trưng chứ không chỉ thuộc tên.",
          items: ["gấu Bắc Cực mẹ", "gấu Bắc Cực con", "cái cây", "ô tô có cảm biến tự bật đèn"],
          props: [
            { id: "photo", text: "lấy dinh dưỡng bằng quang hợp", has: [2] },
            { id: "meat", text: "lấy dinh dưỡng bằng cách ăn thịt", has: [0, 1] },
            { id: "mother", text: "đã sinh ra con non cùng loại với mình", has: [0] },
            { id: "born", text: "được gấu mẹ sinh ra", has: [1] },
            { id: "fuel", text: "dùng nhiên liệu và oxygen để có năng lượng chuyển động", has: [3] },
            { id: "notLiving", text: "không phải là sinh vật", has: [3] },
            { id: "sense", text: "nhận biết được thay đổi xung quanh (như mùi thịt hay trời tối)", has: [0, 1, 2, 3] }
          ],
          sample: { item: 2, prop: "photo" }
        },
        {
          id: "4.1-x2", type: "predict",
          ask: "Ô tô dùng nhiên liệu và oxygen, thải ra carbon dioxide, chuyển động được, và có cảm biến nhận ra khi trời tối. Vậy ô tô có phải là sinh vật không?",
          why: "Dùng đủ bảy đặc trưng làm \"phép thử\" giúp em tự quyết định một thứ có sống hay không — ngay ở chặng sau với virus.",
          options: ["Không – ô tô thiếu một số đặc trưng của sinh vật", "Có – ô tô giống sinh vật ở nhiều điểm", "Có, nhưng chỉ khi động cơ đang chạy"],
          answer: 0,
          reasons: [
            "Vật nào chuyển động và thải ra carbon dioxide đều là vật sống",
            "Có cảm biến nghĩa là có cảm ứng, như thế là đủ để sống",
            "Sinh vật có cả bảy đặc trưng; ô tô không lớn lên, không sinh ra ô tô con, và không có tế bào để hô hấp"
          ],
          reason: 2,
          observe: "Ô tô không phải sinh vật. Nó có vài điểm giống (dùng nhiên liệu và oxygen, thải carbon dioxide, chuyển động, \"cảm nhận\" trời tối), nhưng thiếu sinh trưởng và sinh sản, và nó không có tế bào để hô hấp.",
          sample: { option: 0, reason: 2 }
        }
      ],
      "4.2": [
        {
          id: "4.2-x1", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Biết từng phần của virus làm gì giúp em giải thích virus nhân lên thế nào và vì sao người bị nhiễm thấy ốm.",
          items: ["một virus", "một tế bào", "sợi RNA", "vỏ protein"],
          props: [
            { id: "membrane", text: "có màng tế bào và tế bào chất", has: [1] },
            { id: "code", text: "mang bộ chỉ dẫn mã hóa để làm ra virus mới", has: [2] },
            { id: "spikes", text: "có những gai nhỏ giúp bám vào tế bào", has: [3] },
            { id: "inside", text: "chỉ tạo ra được bản sao khi ở bên trong một tế bào sống", has: [0] },
            { id: "part", text: "là một bộ phận của virus", has: [2, 3] },
            { id: "killed", text: "bị chết khi virus nhân lên bên trong nó", has: [1] }
          ],
          sample: { item: 0, prop: "inside" }
        },
        {
          id: "4.2-x2", type: "fair",
          ask: "Nhà khoa học chụp ảnh virus bằng kính hiển vi điện tử rồi đo chiều rộng virus trong ảnh. Thiết kế thí nghiệm công bằng — em nghĩ ra được bao nhiêu thí nghiệm khác nhau?",
          why: "Nhận ra rằng phóng đại chỉ làm ảnh to ra chứ không làm virus to ra giúp em đọc đúng mọi ảnh chụp qua kính hiển vi.",
          factors: [
            { id: "mag", text: "độ phóng đại của ảnh" },
            { id: "real", text: "chiều rộng thật của virus (chọn loại virus to hơn hay nhỏ hơn)" },
            { id: "colour", text: "màu dùng để tô các phần của virus trong ảnh" }
          ],
          outcomes: [
            { id: "img", text: "chiều rộng của virus trong ảnh" },
            { id: "size", text: "chiều rộng thật của virus" }
          ],
          links: [
            { change: "mag", measure: "img", effect: "up" },
            { change: "real", measure: "img", effect: "up" },
            { change: "real", measure: "size", effect: "up" },
            { change: "mag", measure: "size", effect: "same" },
            { change: "colour", measure: "img", effect: "same" },
            { change: "colour", measure: "size", effect: "same" }
          ],
          sample: { change: "mag", measure: "size", keep: ["real", "colour"], effect: "same" }
        },
        {
          id: "4.2-x3", type: "whatif", base: 10, unitLabel: "mm",
          ask: "Virus cúm rộng khoảng 0,0001 mm; ảnh phóng đại 100 000 lần cho thấy virus rộng 10 mm. Nếu cũng virus đó được chụp với độ phóng đại 300 000 lần, trong ảnh virus rộng bao nhiêu milimét?",
          why: "Đổi qua lại giữa kích thước thật và kích thước trong ảnh là kỹ năng em cần mỗi khi dùng kính hiển vi.",
          answer: function () { return 30; },
          tol: 0.01,
          reasons: [
            "Kích thước trong ảnh = kích thước thật × độ phóng đại, nên 0,0001 × 300 000",
            "Phóng đại lớn hơn thì phải chia kích thước thật cho độ phóng đại",
            "Kính hiển vi điện tử luôn cho ảnh cùng một cỡ, nên vẫn 10 mm"
          ],
          reason: 0,
          sample: { guess: "30", reason: 0 }
        }
      ],
      "4.3": [
        {
          id: "4.3-x1", type: "predict",
          ask: "Một con sư hổ khỏe mạnh lớn lên trong vườn thú. Khi trưởng thành, nó có thể có con không?",
          why: "Điều kiện \"con sinh ra phải hữu thụ\" chính là chìa khóa để định nghĩa một loài.",
          options: ["Có, nó sinh ra sư hổ con", "Có, nhưng con của nó là sư tử", "Không, sư hổ không thể có con"],
          answer: 2,
          reasons: [
            "Con vật khỏe mạnh thì luôn sinh sản được",
            "Bố mẹ của nó sinh được con, nên nó cũng sinh được",
            "Sư hổ bất thụ: nó khỏe mạnh nhưng không thể sinh sản"
          ],
          reason: 2,
          observe: "Sư hổ không thể có con: nó bất thụ. Vì vậy dù sư tử đực và hổ cái đôi khi sinh được sư hổ, sư tử và hổ vẫn là hai loài khác nhau.",
          sample: { option: 2, reason: 2 }
        },
        {
          id: "4.3-x2", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi con vật một lý do khiến chỉ nó khác ba con còn lại.",
          why: "So sánh các con vật theo cách sinh sản giúp em giải thích vì sao nhà sinh học xếp chúng vào cùng loài hay khác loài.",
          items: ["voi Ấn Độ", "sư tử", "hổ", "sư hổ"],
          props: [
            { id: "variation", text: "có biến dị như ngà thẳng hơn, đốm hồng trên da ở chỗ khác nhau", has: [0] },
            { id: "father", text: "con đực của loài này có thể là bố của sư hổ", has: [1] },
            { id: "mother", text: "con cái của loài này có thể là mẹ của sư hổ", has: [2] },
            { id: "infertile", text: "bất thụ, không thể có con", has: [3] },
            { id: "fertile", text: "sinh sản với con cùng loài và tạo ra con hữu thụ", has: [0, 1, 2] },
            { id: "parent", text: "là bố hoặc mẹ của sư hổ", has: [1, 2] }
          ],
          sample: { item: 3, prop: "infertile" }
        },
        {
          id: "4.3-x3", type: "predict",
          ask: "Hai con chim trong vườn trông khá giống nhau nhưng không hoàn toàn như nhau. Cách nào giúp nhà khoa học biết chắc chúng có cùng loài không?",
          why: "Biết rằng vẻ ngoài có thể đánh lừa vì biến dị giúp em hiểu vì sao các nhà sinh học đôi khi bất đồng về số loài.",
          options: ["Đếm xem chúng khác nhau ở bao nhiêu điểm", "Tìm hiểu xem chúng có sinh sản với nhau và có con hữu thụ không", "So sánh màu lông của chúng"],
          answer: 1,
          reasons: [
            "Sinh vật cùng loài trông giống hệt nhau, nên khác một điểm là khác loài",
            "Cùng loài vẫn có biến dị, nên phải xem chúng có sinh sản với nhau ra con hữu thụ không",
            "Màu lông giống nhau thì chắc chắn cùng loài"
          ],
          reason: 1,
          observe: "Các cá thể cùng loài không giống hệt nhau — giữa chúng có biến dị — nên nhìn vẻ ngoài chưa đủ. Nhà khoa học tìm hiểu xem chúng có sinh sản được với nhau và con sinh ra có hữu thụ không.",
          sample: { option: 1, reason: 1 }
        }
      ],
      "4.4": [
        {
          id: "4.4-x1", type: "predict", sim: "keybuilder",
          ask: "Em dùng khóa nhận biết năm con vật (cua, giun đất, chuồn chuồn, sên, ruồi nhà) cho một con nhện: nó có tám chân và không có cánh. Khóa sẽ dẫn em tới đâu?",
          why: "Thấy một khóa \"trả lời sai\" giúp em hiểu mỗi khóa chỉ dùng được cho những sinh vật mà nó được viết ra — và vì sao cần viết khóa cẩn thận ở chặng sau.",
          options: ["Không tới được tên nào cả", "Ruồi nhà", "Cua"],
          answer: 2,
          reasons: [
            "Nhện không có trong khóa, nên khóa dừng lại và không cho tên nào",
            "Câu \"Có nhiều hơn sáu chân không?\" chỉ có hai nhánh, nên mọi con hơn sáu chân đều đi tới cua",
            "Nhện không có cánh nên đi theo nhánh của ruồi nhà"
          ],
          reason: 1,
          observe: "Khóa dẫn tới \"cua\" — sai! Mỗi câu chỉ chia làm hai nhánh, và câu về số chân không tách được nhện khỏi cua. Khóa xếp lớp động vật thì có thêm cặp \"có tám chân → lớp hình nhện\".",
          sample: { option: 2, reason: 1 }
        },
        {
          id: "4.4-x2", type: "odd",
          ask: "Cái nào khác loại? Năm con vật trong khóa — tìm cho mỗi con một lý do khiến chỉ nó khác.",
          why: "Mỗi lý do \"chỉ con này có\" chính là một nhánh của khóa lưỡng phân — tìm chúng là em đang tự viết khóa.",
          items: ["cua", "giun đất", "chuồn chuồn", "sên", "ruồi nhà"],
          props: [
            { id: "legs", text: "có chân", has: [0, 2, 4] },
            { id: "six", text: "có đúng sáu chân", has: [2, 4] },
            { id: "many", text: "có nhiều hơn sáu chân", has: [0] },
            { id: "rings", text: "thân gồm các đốt vòng", has: [1] },
            { id: "four", text: "có bốn cánh", has: [2] },
            { id: "slug", text: "không có chân và thân không gồm các đốt vòng", has: [3] },
            { id: "two", text: "có hai cánh", has: [4] }
          ],
          sample: { item: 1, prop: "rings" }
        },
        {
          id: "4.4-x3", type: "predict",
          ask: "Dùng khóa nhận biết cá: \"Có sọc không?\" → \"Sọc có thẳng đứng không?\" → \"Vây có gai không?\". Một con cá có sọc thẳng đứng và vây không có gai. Đó là cá gì?",
          why: "Đi đúng từng bước, không đoán theo tên gọi, là thói quen giúp em dùng mọi khóa một cách chính xác.",
          options: ["Cá hề", "Cá rồng", "Cá ngựa vằn"],
          answer: 0,
          reasons: [
            "Có sọc → sọc thẳng đứng → vây không có gai → cá hề",
            "Có sọc như ngựa vằn nên là cá ngựa vằn",
            "Sọc thẳng đứng thì luôn là cá rồng"
          ],
          reason: 0,
          observe: "Đó là cá hề. Cá ngựa vằn là con có sọc nhưng sọc không thẳng đứng; cá rồng có sọc thẳng đứng và vây có gai.",
          sample: { option: 0, reason: 0 }
        }
      ],
      "4.5": [
        {
          id: "4.5-x1", type: "odd",
          ask: "Bốn câu hỏi có thể dùng trong khóa nhận biết cây. Cái nào khác loại? Tìm cho mỗi câu một lý do khiến chỉ nó khác.",
          why: "Một câu hỏi tốt trong khóa phải giúp mọi người dễ chọn giữa hai nhận định — tiêu chí em dùng khi chấm khóa của bạn.",
          items: ["Cây có cao không?", "Hoa có từ năm cánh trở lên không?", "Cây có lá xanh đậm không?", "Mặt trên lá có sẫm màu hơn mặt dưới không?"],
          props: [
            { id: "count", text: "có thể đếm để trả lời chắc chắn", has: [1] },
            { id: "compare", text: "so sánh hai mặt của cùng một chiếc lá", has: [3] },
            { id: "tall", text: "\"cao\" với người này có thể là thấp với người khác", has: [0] },
            { id: "green", text: "\"đậm\" đến mức nào thì mỗi người nhìn một khác", has: [2] },
            { id: "leaf", text: "hỏi về lá", has: [2, 3] },
            { id: "yesno", text: "trả lời bằng có hoặc không", has: [0, 1, 2, 3] }
          ],
          sample: { item: 1, prop: "count" }
        },
        {
          id: "4.5-x2", type: "whatif", base: 3,
          ask: "Khóa lưỡng phân cho 4 loại quả cần 3 câu hỏi. Nếu khóa phải nhận biết 6 loại quả, cần ít nhất bao nhiêu câu hỏi?",
          why: "Biết trước số câu hỏi cần có giúp em kiểm tra khóa mình viết đã đủ chưa, không thừa cũng không thiếu.",
          answer: function () { return 5; },
          reasons: [
            "Mỗi loại quả cần một câu hỏi riêng, nên 6 câu",
            "Mỗi câu tách một nhóm làm hai, thêm được một nhóm; để 6 loại đứng riêng cần 6 − 1 câu",
            "Mỗi câu chia đôi, nên 6 ÷ 2 = 3 câu"
          ],
          reason: 1,
          sample: { guess: "5", reason: 1 }
        },
        {
          id: "4.5-x3", type: "predict",
          ask: "Em viết khóa nhận biết bốn loài mèo, trong đó có câu \"Con mèo này có to không?\". Bạn em dùng thử khóa với một con linh miêu. Điều gì có thể xảy ra?",
          why: "Cho người khác dùng thử rồi sửa theo góp ý là cách nhà sinh học làm cho khóa dùng được với mọi người.",
          options: ["Bạn chắc chắn tới đúng tên", "Bạn có thể đi nhầm nhánh và tới sai tên", "Khóa không dùng được với loài nào cả"],
          answer: 1,
          reasons: [
            "Câu nào có hai lựa chọn có – không cũng là câu tốt",
            "Chỉ người viết khóa mới dùng được khóa của mình",
            "\"To\" mỗi người hiểu một khác, nên khó chọn giữa hai nhận định"
          ],
          reason: 2,
          observe: "Bạn có thể chọn khác em ở câu \"có to không?\" và tới sai loài. Đó là lý do cần đổi khóa cho bạn dùng thử, xin góp ý, rồi sửa câu đó thành một đặc điểm dễ chọn hơn.",
          sample: { option: 1, reason: 2 }
        }
      ]
    },
    tr: {
      en: {
        "q.4.1-x1.ask": "Which one doesn't belong? Find a reason for each that makes only it different from the other three.",
        "q.4.1-x1.why": "Checking each thing against the seven characteristics of living things helps you remember what each characteristic means, not just its name.",
        "q.4.1-x1.items": ["a mother polar bear", "a polar bear cub", "a tree", "a car with a sensor that switches on its lights"],
        "q.4.1-x1.props": ["gets its nutrition by photosynthesis", "gets its nutrition by eating meat", "has produced young of its own kind", "was born to a mother bear", "uses fuel and oxygen to get energy to move", "is not an organism", "can detect changes around it (such as the smell of meat or the dark)"],
        "q.4.1-x2.ask": "A car uses fuel and oxygen, gives out carbon dioxide, can move, and has a sensor that detects when it gets dark. So is a car an organism?",
        "q.4.1-x2.why": "Using all seven characteristics as a \"test\" helps you decide for yourself whether something is alive — straight away in the next stage, with viruses.",
        "q.4.1-x2.options": ["No – a car is missing some characteristics of organisms", "Yes – a car is like organisms in many ways", "Yes, but only while the engine is running"],
        "q.4.1-x2.reasons": [
          "Anything that moves and gives out carbon dioxide is alive",
          "Having a sensor means it has sensitivity, and that is enough to be alive",
          "Organisms have all seven characteristics; a car does not grow, does not produce baby cars, and has no cells to respire in"
        ],
        "q.4.1-x2.observe": "A car is not an organism. It is similar in a few ways (it uses fuel and oxygen, gives out carbon dioxide, moves, \"senses\" the dark), but it lacks growth and reproduction, and it has no cells to carry out respiration.",
        "q.4.2-x1.ask": "Which one doesn't belong? Find a reason for each that makes only it different.",
        "q.4.2-x1.why": "Knowing what each part of a virus does helps you explain how a virus replicates and why an infected person feels ill.",
        "q.4.2-x1.items": ["a virus", "a cell", "RNA strands", "a protein coat"],
        "q.4.2-x1.props": ["has a cell membrane and cytoplasm", "carries the coded instructions for making new viruses", "has small spikes that help it stick to a cell", "can only make copies of itself inside a living cell", "is a part of a virus", "is killed when viruses replicate inside it"],
        "q.4.2-x2.ask": "Scientists take photos of viruses with an electron microscope and measure how wide the virus is in the photo. Design fair tests — how many different tests can you think of?",
        "q.4.2-x2.why": "Realising that magnifying only makes the picture bigger, not the virus, helps you read every microscope photo correctly.",
        "q.4.2-x2.factors": ["the magnification of the photo", "the real width of the virus (choosing a bigger or smaller kind of virus)", "the colours used to show the parts of the virus in the photo"],
        "q.4.2-x2.outcomes": ["the width of the virus in the photo", "the real width of the virus"],
        "q.4.2-x3.ask": "A flu virus is about 0.0001 mm wide; a photo magnified 100 000 times shows it 10 mm wide. If the same virus is photographed at a magnification of 300 000 times, how many millimetres wide is it in the photo?",
        "q.4.2-x3.why": "Changing between real size and size in a photo is a skill you need every time you use a microscope.",
        "q.4.2-x3.reasons": [
          "Size in the photo = real size × magnification, so 0.0001 × 300 000",
          "With a bigger magnification you divide the real size by the magnification",
          "An electron microscope always gives pictures of the same size, so it is still 10 mm"
        ],
        "q.4.3-x1.ask": "A healthy liger grows up in a zoo. When it is an adult, can it have young?",
        "q.4.3-x1.why": "The condition \"the offspring must be fertile\" is the key to defining a species.",
        "q.4.3-x1.options": ["Yes, it has liger cubs", "Yes, but its young are lions", "No, a liger cannot have young"],
        "q.4.3-x1.reasons": [
          "A healthy animal can always reproduce",
          "Its parents could have young, so it can too",
          "Ligers are infertile: healthy, but unable to reproduce"
        ],
        "q.4.3-x1.observe": "A liger cannot have young: it is infertile. So even though a male lion and a female tiger can sometimes produce a liger, lions and tigers are still two different species.",
        "q.4.3-x2.ask": "Which one doesn't belong? Find a reason for each animal that makes only it different from the other three.",
        "q.4.3-x2.why": "Comparing animals by how they reproduce helps you explain why biologists put them in the same species or in different ones.",
        "q.4.3-x2.items": ["Indian elephant", "lion", "tiger", "liger"],
        "q.4.3-x2.props": ["shows variation such as straighter tusks, or pink patches on the skin in different places", "a male of this species can be the father of a liger", "a female of this species can be the mother of a liger", "is infertile and cannot have young", "breeds with its own species and produces fertile offspring", "is the father or mother of a liger"],
        "q.4.3-x3.ask": "Two birds in a garden look quite similar but not exactly the same. What helps a scientist know for sure whether they are the same species?",
        "q.4.3-x3.why": "Knowing that looks can fool you because of variation helps you understand why biologists sometimes disagree about how many species there are.",
        "q.4.3-x3.options": ["Count how many ways they are different", "Find out whether they breed together and have fertile offspring", "Compare the colour of their feathers"],
        "q.4.3-x3.reasons": [
          "Organisms of the same species look identical, so one difference means a different species",
          "There is variation within a species, so you must check whether they breed to give fertile offspring",
          "If the feather colour is the same, they must be the same species"
        ],
        "q.4.3-x3.observe": "Members of the same species are not identical — there is variation between them — so looks are not enough. Scientists find out whether they can breed together and whether the offspring are fertile.",
        "q.4.4-x1.ask": "You use the key for five animals (crab, earthworm, dragonfly, slug, housefly) on a spider: it has eight legs and no wings. Where does the key take you?",
        "q.4.4-x1.why": "Seeing a key \"give a wrong answer\" helps you understand that each key only works for the organisms it was written for — and why keys must be written carefully in the next stage.",
        "q.4.4-x1.options": ["It does not reach any name", "Housefly", "Crab"],
        "q.4.4-x1.reasons": [
          "A spider is not in the key, so the key stops and gives no name",
          "The question \"Does it have more than six legs?\" has only two branches, so anything with more than six legs ends at crab",
          "A spider has no wings, so it goes down the housefly branch"
        ],
        "q.4.4-x1.observe": "The key ends at \"crab\" — wrong! Each question splits into only two branches, and the question about legs cannot tell a spider from a crab. The key for classifying animals has an extra pair: \"has eight legs → arachnids\".",
        "q.4.4-x2.ask": "Which one doesn't belong? The five animals in the key — find a reason for each that makes only it different.",
        "q.4.4-x2.why": "Each \"only this one has it\" reason is a branch of a dichotomous key — finding them means you are writing a key yourself.",
        "q.4.4-x2.items": ["crab", "earthworm", "dragonfly", "slug", "housefly"],
        "q.4.4-x2.props": ["has legs", "has exactly six legs", "has more than six legs", "has a body made of rings", "has four wings", "has no legs and its body is not made of rings", "has two wings"],
        "q.4.4-x3.ask": "Using the fish key: \"Does it have stripes?\" → \"Are the stripes vertical?\" → \"Do the fins have spines?\". A fish has vertical stripes and fins without spines. Which fish is it?",
        "q.4.4-x3.why": "Following every step, instead of guessing from the names, is the habit that lets you use any key accurately.",
        "q.4.4-x3.options": ["Clown fish", "Dragon fish", "Zebra fish"],
        "q.4.4-x3.reasons": [
          "Stripes → vertical stripes → fins without spines → clown fish",
          "It has stripes like a zebra, so it is a zebra fish",
          "Vertical stripes always mean dragon fish"
        ],
        "q.4.4-x3.observe": "It is a clown fish. The zebra fish has stripes, but they are not vertical; the dragon fish has vertical stripes and fins with spines.",
        "q.4.5-x1.ask": "Four questions that could be used in a key to identify plants. Which one doesn't belong? Find a reason for each question that makes only it different.",
        "q.4.5-x1.why": "A good question in a key must make it easy for everyone to choose between two statements — the criterion you use when you mark a partner's key.",
        "q.4.5-x1.items": ["Is the plant tall?", "Do the flowers have five or more petals?", "Does the plant have dark green leaves?", "Is the top of the leaf darker than the underneath?"],
        "q.4.5-x1.props": ["you can count to answer it for certain", "compares two sides of the same leaf", "\"tall\" to one person may be short to another", "how dark is \"dark\"? everyone sees it differently", "asks about the leaves", "is answered with yes or no"],
        "q.4.5-x2.ask": "A dichotomous key for 4 kinds of fruit needs 3 questions. If a key has to identify 6 kinds of fruit, what is the smallest number of questions it needs?",
        "q.4.5-x2.why": "Knowing in advance how many questions are needed lets you check that your key has enough — no more and no fewer.",
        "q.4.5-x2.reasons": [
          "Each kind of fruit needs its own question, so 6",
          "Each question splits one group into two, adding one group; for 6 kinds to stand alone you need 6 − 1",
          "Each question halves the group, so 6 ÷ 2 = 3"
        ],
        "q.4.5-x3.ask": "You write a key for four kinds of cat that includes the question \"Is this cat big?\". A partner tries your key on a lynx. What might happen?",
        "q.4.5-x3.why": "Letting someone else try your key and improving it from their feedback is how biologists make keys that work for everyone.",
        "q.4.5-x3.options": ["Your partner is sure to reach the right name", "Your partner may take the wrong branch and reach the wrong name", "The key does not work for any species"],
        "q.4.5-x3.reasons": [
          "Any question with a yes–no choice is a good question",
          "Only the person who wrote a key can use it",
          "Everyone understands \"big\" differently, so it is hard to choose between the two statements"
        ],
        "q.4.5-x3.observe": "Your partner may choose differently from you at \"is it big?\" and reach the wrong species. That is why you swap keys for a partner to try, ask for feedback, and then change that question to a feature that is easier to choose."
      },
      vi: {}
    }
  });
})();
