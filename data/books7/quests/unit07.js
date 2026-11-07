// 🚀 Extension quests — Science 7, Unit 7 Microorganisms in the environment. Self-written; every fact comes from
// the stage's own `learn` / `learnDetail` / `example`. Science-thinking types: predict, odd, fair (+ whatif with the
// book's own numbers). See MATH_QUESTS_GUIDE.md § Science.
window.GAME_QUESTS = window.GAME_QUESTS || [];
(function () {
  window.GAME_QUESTS.push({
    unit: 7,
    sections: {
      "7.1": [
        {
          id: "7.1-x1", type: "odd",
          ask: "Cái nào khác loại? Năm sinh vật — mỗi sinh vật đều có thể là \"kẻ lạc loài\" theo một lý do riêng. Tìm hết nhé.",
          why: "So sánh từng nhóm sinh vật theo nhiều tiêu chí giúp em nhớ chắc vì sao có loại là vi sinh vật, có loại thì không.",
          items: ["vi khuẩn", "nấm men", "nấm mũ", "tảo", "động vật nguyên sinh"],
          props: [
            { id: "tiny", text: "khoảng 1000 cá thể xếp nối đuôi chỉ dài vừa 1 mm", has: [0] },
            { id: "bud", text: "sinh sản bằng những chồi nhỏ mọc ra từ tế bào", has: [1] },
            { id: "big", text: "nhìn thấy dễ dàng mà không cần kính hiển vi", has: [2] },
            { id: "micro", text: "là vi sinh vật", has: [0, 1, 3, 4] },
            { id: "plant", text: "là sinh vật nhỏ giống thực vật, sống trong nước ao", has: [3] },
            { id: "animal", text: "là sinh vật nhỏ giống động vật, sống trong nước ao", has: [4] },
            { id: "fungus", text: "thuộc nhóm nấm", has: [1, 2] }
          ],
          sample: { item: 2, prop: "big" }
        },
        {
          id: "7.1-x2", type: "predict",
          ask: "Làm thí nghiệm nuôi vi sinh vật từ không khí, bạn Minh đậy và dán nắp đĩa Petri nhưng QUÊN lật úp đĩa trước khi để vài ngày. Điều gì có thể xảy ra?",
          why: "Hiểu lý do của từng bước trong quy trình giúp em làm thí nghiệm cẩn thận và giải thích được khi kết quả khác dự kiến.",
          options: [
            "Không có gì khác: khuẩn lạc mọc y như khi lật úp",
            "Vi sinh vật trong không khí tiếp tục lọt vào đĩa",
            "Một số vi sinh vật có thể chết, nên mọc ít khuẩn lạc hơn"
          ],
          answer: 2,
          reasons: [
            "Đĩa không lật thì nắp bị hở, không khí lọt vào",
            "Vi sinh vật cần nằm phía trên để nhận ánh sáng",
            "Giọt nước đọng bên trong có thể nhỏ xuống thành vũng trên thạch và làm vi sinh vật chết đuối"
          ],
          reason: 2,
          observe: "Nước đọng dưới nắp có thể nhỏ xuống thành vũng trên mặt thạch; vi sinh vật nằm trong vũng có thể bị chết đuối. Lật úp đĩa là để tránh điều đó — nắp đã được dán kín nên không khí không lọt vào.",
          sample: { option: 2, reason: 2 }
        },
        {
          id: "7.1-x3", type: "whatif", base: 512,
          ask: "Một tế bào vi khuẩn trên thạch cứ 20 phút lại phân chia thành 2; sau 3 giờ có 512 tế bào. Nếu để thêm 40 phút nữa (không tế bào nào chết), sẽ có bao nhiêu tế bào?",
          why: "Thấy số tế bào tăng nhanh thế nào giúp em hiểu vì sao chỉ một vi sinh vật cũng tạo ra được khuẩn lạc nhìn thấy bằng mắt thường.",
          answer: function () { return 2048; },
          tol: 0.01,
          reasons: [
            "Thời gian dài thêm khoảng một phần tư nên số tế bào cũng chỉ tăng khoảng một phần tư",
            "Mỗi lần phân chia chỉ thêm một tế bào mới, nên thêm 2 tế bào",
            "Thêm 40 phút là thêm 2 lần phân chia; mỗi lần số tế bào gấp đôi"
          ],
          reason: 2,
          sample: { guess: "2048", reason: 2 }
        }
      ],
      "7.2": [
        {
          id: "7.2-x1", type: "odd", sim: "foodweb",
          ask: "Cái nào khác loại? Năm sinh vật trong lưới thức ăn đồng cỏ châu Phi — tìm cho mỗi sinh vật một lý do khiến chỉ nó khác.",
          why: "Đọc lưới thức ăn theo nhiều cách (ai ăn gì, ai bị ăn) chính là kỹ năng em cần khi thêm vi sinh vật vào lưới ở các chặng sau.",
          items: ["cỏ", "linh dương", "mối", "linh cẩu", "báo hoa mai"],
          props: [
            { id: "producer", text: "là sinh vật sản xuất", has: [0] },
            { id: "consumer", text: "là sinh vật tiêu thụ", has: [1, 2, 3, 4] },
            { id: "acacia", text: "ăn cả cỏ lẫn cây keo", has: [1] },
            { id: "aardvark", text: "bị lợn đất ăn", has: [2] },
            { id: "both", text: "vừa ăn linh dương vừa bị báo hoa mai ăn", has: [3] },
            { id: "top", text: "không bị sinh vật nào trong lưới này ăn", has: [4] },
            { id: "herb", text: "là động vật ăn thực vật", has: [1, 2] },
            { id: "carn", text: "là động vật ăn thịt", has: [3, 4] }
          ],
          sample: { item: 3, prop: "both" }
        },
        {
          id: "7.2-x2", type: "predict", sim: "foodweb",
          ask: "Trong lưới thức ăn đồng cỏ châu Phi, giả sử toàn bộ mối biến mất. Sinh vật nào bị ảnh hưởng trực tiếp nhất?",
          why: "Dự đoán điều xảy ra khi một mắt xích biến mất cho thấy các sinh vật sống cùng nhau phụ thuộc vào nhau thế nào.",
          options: ["Báo săn", "Lợn đất", "Ngựa vằn"],
          answer: 1,
          reasons: [
            "Ngựa vằn và mối cùng ăn cỏ, nên ngựa vằn sẽ hết thức ăn theo",
            "Trong lưới này, mối là thức ăn duy nhất của lợn đất",
            "Báo săn đứng cuối chuỗi nên luôn chịu mọi thay đổi trước tiên"
          ],
          reason: 1,
          observe: "Lợn đất mất nguồn thức ăn duy nhất của nó trong lưới. Báo săn và báo hoa mai vẫn còn linh dương, ngựa vằn để ăn; còn ngựa vằn không ăn mối nên không mất thức ăn.",
          sample: { option: 1, reason: 1 }
        },
        {
          id: "7.2-x3", type: "predict",
          ask: "Bữa trưa của Arun có thịt gà; con gà đó đã ăn lúa mì. Năng lượng trong miếng thịt gà ban đầu đến từ đâu?",
          why: "Lần ngược năng lượng về tận gốc giúp em hiểu vì sao mọi chuỗi thức ăn đều bắt đầu bằng một thực vật.",
          options: ["Từ Mặt Trời", "Từ đất nơi lúa mì mọc", "Do chính con gà tạo ra khi lớn lên"],
          answer: 0,
          reasons: [
            "Cây lấy hết thức ăn có sẵn trong đất qua rễ",
            "Động vật tự sinh ra năng lượng trong cơ thể",
            "Lúa mì dùng năng lượng ánh sáng để tự tạo thức ăn; gà ăn lúa mì nên nhận năng lượng đó"
          ],
          reason: 2,
          observe: "Chuỗi thức ăn là Mặt Trời → lúa mì → gà → Arun. Lúa mì là sinh vật sản xuất: nó dùng năng lượng ánh sáng Mặt Trời để tạo thức ăn; năng lượng đó truyền sang gà rồi sang Arun.",
          sample: { option: 0, reason: 2 }
        }
      ],
      "7.3": [
        {
          id: "7.3-x1", type: "fair",
          ask: "Thiết kế thí nghiệm công bằng với hai lát bánh mì để xem điều gì ảnh hưởng tới sự phân huỷ. Em nghĩ ra được bao nhiêu thí nghiệm khác nhau?",
          why: "Đây đúng là cách làm của thí nghiệm nhiệt độ trong bài, và cũng là bước đầu để em tự lập kế hoạch kiểm tra ảnh hưởng của độ ẩm.",
          factors: [
            { id: "temp", text: "nhiệt độ nơi để bánh" },
            { id: "water", text: "lượng nước nhỏ vào bánh" },
            { id: "bread", text: "loại bánh mì" },
            { id: "air", text: "thời gian để bánh ngoài không khí trước khi bọc" }
          ],
          outcomes: [
            { id: "pct", text: "phần trăm bề mặt bánh có mốc ở ngày 6" },
            { id: "first", text: "số ngày đến khi bắt đầu thấy mốc" }
          ],
          links: [
            { change: "temp", measure: "pct", effect: "up" },
            { change: "temp", measure: "first", effect: "down" }
          ],
          sample: { change: "temp", measure: "pct", keep: ["water", "bread", "air"], effect: "up" }
        },
        {
          id: "7.3-x2", type: "odd",
          ask: "Cái nào khác loại? Tìm cho mỗi thứ một lý do khiến chỉ nó khác ba thứ còn lại.",
          why: "Phân biệt chất hữu cơ với chất không phải hữu cơ giúp em đoán được thứ gì có thể bị vi sinh vật phân huỷ.",
          items: ["quả táo", "mốc trên quả táo", "miếng da thuộc", "hòn đá"],
          props: [
            { id: "tree", text: "đến từ một cái cây", has: [0] },
            { id: "decomp", text: "là sinh vật phân giải", has: [1] },
            { id: "animal", text: "là chất hữu cơ có nguồn gốc từ động vật", has: [2] },
            { id: "notorg", text: "không phải chất hữu cơ", has: [3] },
            { id: "see", text: "nhìn thấy được bằng mắt thường", has: [0, 1, 2, 3] },
            { id: "pic", text: "có mặt trong ảnh quả táo bị mốc của bài", has: [0, 1] }
          ],
          sample: { item: 3, prop: "notorg" }
        },
        {
          id: "7.3-x3", type: "predict",
          ask: "Hai lát bánh mì giống nhau, được làm ẩm như nhau rồi bọc kín: lát A để ở chỗ ấm 25 °C, lát B trong tủ lạnh 5 °C. Sau 6 ngày, em đoán thế nào?",
          why: "Cam kết một dự đoán trước khi xem số liệu giúp em rút ra kết luận từ kết quả thật, không phải từ điều mình nghĩ.",
          options: ["Lát B mốc nhiều hơn vì tủ lạnh ẩm", "Hai lát mốc như nhau vì cùng loại bánh, cùng lượng nước", "Lát A mốc nhiều hơn hẳn"],
          answer: 2,
          reasons: [
            "Ở chỗ ấm, nấm mốc phát triển nhanh hơn",
            "Lạnh giết hết vi sinh vật nên lát B hoàn toàn không có mốc",
            "Mốc cần bóng tối, mà trong tủ lạnh thì tối"
          ],
          reason: 0,
          observe: "Ngày 6: lát A có 70 % bề mặt bị mốc, lát B chỉ 5 %. Lạnh làm mốc mọc chậm hơn nhiều nhưng không ngăn hẳn — vì thế ta giữ thức ăn trong tủ lạnh.",
          sample: { option: 2, reason: 0 }
        }
      ],
      "7.4": [
        {
          id: "7.4-x1", type: "odd",
          ask: "Cái nào khác loại? Năm thứ trong câu chuyện về sốt rét và DDT — tìm cho mỗi thứ một lý do khiến chỉ nó khác.",
          why: "Nhìn một vấn đề môi trường từ nhiều phía là điều em cần khi tranh luận vai WHO hoặc WWF trong dự án của bài.",
          items: ["nấm bên trong khúc gỗ", "muỗi", "DDT", "vi sinh vật gây sốt rét", "đại bàng đầu trắng"],
          props: [
            { id: "decomp", text: "đang phân huỷ gỗ chết", has: [0] },
            { id: "carry", text: "truyền vi sinh vật gây bệnh sốt rét", has: [1] },
            { id: "persist", text: "là chất bền: trong hồ, sau 150 năm vẫn còn hơn một nửa", has: [2] },
            { id: "living", text: "là sinh vật sống", has: [0, 1, 3, 4] },
            { id: "proto", text: "là động vật nguyên sinh cực nhỏ", has: [3] },
            { id: "chicks", text: "số con non giảm khi DDT được dùng và tăng lại sau khi DDT bị cấm", has: [4] },
            { id: "harm", text: "bị DDT làm hại hoặc giết chết", has: [1, 4] }
          ],
          sample: { item: 2, prop: "persist" }
        },
        {
          id: "7.4-x2", type: "predict",
          ask: "Đảo san hô Midway cách mọi vùng dùng DDT hàng nghìn dặm. Người ta kiểm tra chim hải âu chân đen sống ở đó. Em đoán thế nào?",
          why: "Bài này cho thấy một chất không bị phân huỷ có thể đi theo chuỗi thức ăn tới những nơi rất xa — điều quan trọng khi bàn về DDT.",
          options: ["Trong chim có DDT", "Không có DDT, vì ở đó không ai phun", "Chỉ có DDT nếu gió thổi thuốc phun tới đảo"],
          answer: 0,
          reasons: [
            "Chỉ những con vật bị phun trực tiếp mới có DDT trong cơ thể",
            "DDT bị phân huỷ rất nhanh nên không thể đi xa",
            "DDT không bị phân huỷ hết trong cơ thể; con vật ăn con mồi có DDT, rồi mang DDT theo khi di chuyển"
          ],
          reason: 2,
          observe: "Người ta vẫn tìm thấy DDT trong chim hải âu chân đen ở Midway. Khi một con vật ăn con vật khác có DDT, nó nhận luôn DDT và mang theo khi di chuyển.",
          sample: { option: 0, reason: 2 }
        },
        {
          id: "7.4-x3", type: "whatif", base: 10,
          ask: "Lưới thức ăn trong vườn: lá cây → sâu → chim; lá cây → ốc sên → chim; ốc sên → ếch. Thêm sinh vật phân giải (mũi tên từ mọi sinh vật tới chúng) thì lưới có 10 mũi tên. Nếu thêm một con rắn ăn ếch, lưới có bao nhiêu mũi tên?",
          why: "Đếm mũi tên cho thấy sinh vật phân giải nhận năng lượng từ mọi mắt xích — và vì sao sơ đồ thường không vẽ chúng.",
          answer: function () { return 12; },
          tol: 0.01,
          reasons: [
            "Chỉ thêm mũi tên ếch → rắn, vì sinh vật phân giải chỉ phân huỷ thực vật chết",
            "Thêm mũi tên ếch → rắn và thêm mũi tên rắn → sinh vật phân giải",
            "Phải thêm mũi tên từ rắn tới mọi sinh vật khác trong lưới"
          ],
          reason: 1,
          sample: { guess: "12", reason: 1 }
        }
      ]
    },
    tr: {
      en: {
        "q.7.1-x1.ask": "Which one doesn't belong? Five living things — each one can be the odd one out for its own reason. Find them all.",
        "q.7.1-x1.why": "Comparing each group of organisms in several ways helps you remember why some are microorganisms and some are not.",
        "q.7.1-x1.items": ["bacteria", "yeast", "a mushroom", "algae", "protozoa"],
        "q.7.1-x1.props": ["about 1000 of them in a row fit into just 1 mm", "reproduces by small buds growing out of its cells", "is easy to see without a microscope", "is a microorganism", "is a tiny plant-like organism living in pond water", "is a tiny animal-like organism living in pond water", "belongs to the fungi"],
        "q.7.1-x2.ask": "Growing microorganisms from the air, Minh closes and tapes the lid of the Petri dish but FORGETS to turn the dish upside down before leaving it for a few days. What might happen?",
        "q.7.1-x2.why": "Knowing the reason for each step of a method helps you work carefully and explain results that are not what you expected.",
        "q.7.1-x2.options": [
          "Nothing different: the colonies grow just as when the dish is upside down",
          "Microorganisms from the air keep getting into the dish",
          "Some microorganisms may die, so fewer colonies grow"
        ],
        "q.7.1-x2.reasons": [
          "If the dish is not turned over, the lid is open and air gets in",
          "Microorganisms need to be on top to get light",
          "Drops of water inside can fall and make puddles on the agar, which can drown the microorganisms"
        ],
        "q.7.1-x2.observe": "Water collecting under the lid can drip and form puddles on the agar; microorganisms in a puddle can drown. Turning the dish over prevents this — the lid is already taped shut, so air cannot get in.",
        "q.7.1-x3.ask": "A bacterium on agar splits into 2 every 20 minutes; after 3 hours there are 512 cells. If you wait another 40 minutes (no cells die), how many cells will there be?",
        "q.7.1-x3.why": "Seeing how fast the number of cells grows helps you understand why just one microorganism can make a colony you can see with your eyes.",
        "q.7.1-x3.reasons": [
          "The time is about a quarter longer, so the number of cells only grows by about a quarter",
          "Each division only adds one new cell, so there are 2 more cells",
          "40 more minutes means 2 more divisions; each one doubles the number of cells"
        ],
        "q.7.2-x1.ask": "Which one doesn't belong? Five organisms from the African grassland food web — find a reason for each that makes only it different.",
        "q.7.2-x1.why": "Reading a food web in several ways (who eats what, who gets eaten) is exactly the skill you need when you add microorganisms to food webs in later stages.",
        "q.7.2-x1.items": ["grass", "antelope", "termite", "hyena", "leopard"],
        "q.7.2-x1.props": ["is a producer", "is a consumer", "eats both grass and acacia", "is eaten by the aardvark", "eats antelope and is eaten by the leopard", "is not eaten by anything in this web", "is a herbivore", "is a carnivore"],
        "q.7.2-x2.ask": "In the African grassland food web, imagine that all the termites disappear. Which organism is affected most directly?",
        "q.7.2-x2.why": "Predicting what happens when one link disappears shows how organisms living together depend on each other.",
        "q.7.2-x2.options": ["The cheetah", "The aardvark", "The zebra"],
        "q.7.2-x2.reasons": [
          "Zebras and termites both eat grass, so the zebras will run out of food too",
          "In this web, termites are the aardvark's only food",
          "The cheetah is at the end of the chain, so it always feels every change first"
        ],
        "q.7.2-x2.observe": "The aardvark loses its only food in the web. Cheetahs and leopards still have antelope and zebra to eat; zebras do not eat termites, so they lose no food.",
        "q.7.2-x3.ask": "Arun's lunch has chicken; the chicken had eaten wheat. Where did the energy in the chicken first come from?",
        "q.7.2-x3.why": "Tracing energy back to its very start helps you understand why every food chain begins with a plant.",
        "q.7.2-x3.options": ["From the Sun", "From the soil the wheat grew in", "The chicken made it itself as it grew"],
        "q.7.2-x3.reasons": [
          "Plants take all their food ready-made from the soil through their roots",
          "Animals make their own energy inside their bodies",
          "Wheat uses light energy to make its own food; the chicken eats the wheat and gets that energy"
        ],
        "q.7.2-x3.observe": "The food chain is Sun → wheat → chicken → Arun. Wheat is the producer: it uses light energy from the Sun to make food; that energy passes to the chicken and then to Arun.",
        "q.7.3-x1.ask": "Design fair tests with two slices of bread to find out what affects decay. How many different tests can you think of?",
        "q.7.3-x1.why": "This is exactly how the temperature investigation in the lesson works, and it is the first step to planning your own test of the effect of moisture.",
        "q.7.3-x1.factors": ["the temperature where the bread is kept", "the amount of water dropped on the bread", "the type of bread", "how long the bread is left in the air before wrapping"],
        "q.7.3-x1.outcomes": ["the percentage of the bread's surface with mould on day 6", "the number of days until mould first appears"],
        "q.7.3-x2.ask": "Which one doesn't belong? Find a reason for each item that makes only it different from the other three.",
        "q.7.3-x2.why": "Telling organic matter from things that are not organic helps you predict what can be decayed by microorganisms.",
        "q.7.3-x2.items": ["an apple", "the mould on an apple", "a piece of leather", "a stone"],
        "q.7.3-x2.props": ["comes from a tree", "is a decomposer", "is organic matter that comes from an animal", "is not organic matter", "can be seen with the naked eye", "is in the lesson's photo of the mouldy apple"],
        "q.7.3-x3.ask": "Two identical slices of bread, made equally damp and then wrapped: slice A is kept somewhere warm at 25 °C, slice B in a fridge at 5 °C. What do you predict after 6 days?",
        "q.7.3-x3.why": "Committing to a prediction before seeing the data helps you draw conclusions from the real results, not from what you think.",
        "q.7.3-x3.options": ["Slice B is mouldier because the fridge is damp", "Both slices are equally mouldy because they are the same bread with the same water", "Slice A is much mouldier"],
        "q.7.3-x3.reasons": [
          "In a warm place, mould grows faster",
          "Cold kills all the microorganisms, so slice B has no mould at all",
          "Mould needs darkness, and it is dark inside a fridge"
        ],
        "q.7.3-x3.observe": "Day 6: slice A has mould on 70 % of its surface, slice B only 5 %. Cold makes mould grow much more slowly but does not stop it completely — that is why we keep food in a fridge.",
        "q.7.4-x1.ask": "Which one doesn't belong? Five things from the story of malaria and DDT — find a reason for each that makes only it different.",
        "q.7.4-x1.why": "Looking at an environmental problem from several sides is what you need when you argue as WHO or WWF in the lesson's project.",
        "q.7.4-x1.items": ["the fungus inside a log", "a mosquito", "DDT", "the microorganism that causes malaria", "a bald eagle"],
        "q.7.4-x1.props": ["is decomposing dead wood", "carries the microorganism that causes malaria", "is persistent: in a lake, more than half is still there after 150 years", "is a living organism", "is a microscopic protozoan", "its number of young fell while DDT was used and rose again after DDT was banned", "is harmed or killed by DDT"],
        "q.7.4-x2.ask": "Midway Atoll is thousands of miles from anywhere DDT was used. Scientists test the black-footed albatrosses living there. What do you predict?",
        "q.7.4-x2.why": "This shows that a substance that is not broken down can travel along food chains to very distant places — important when you discuss DDT.",
        "q.7.4-x2.options": ["The birds contain DDT", "No DDT, because nobody sprays it there", "Only if the wind blows the spray to the island"],
        "q.7.4-x2.reasons": [
          "Only animals that are sprayed directly have DDT in their bodies",
          "DDT breaks down very quickly, so it cannot travel far",
          "DDT is not fully broken down in the body; an animal eats prey containing DDT and carries it as it moves"
        ],
        "q.7.4-x2.observe": "DDT was found in the black-footed albatrosses on Midway. When an animal eats another animal that has DDT in its body, it takes in the DDT too and carries it wherever it goes.",
        "q.7.4-x3.ask": "A garden food web: leaves → caterpillar → bird; leaves → snail → bird; snail → frog. With decomposers added (an arrow from every organism to them) the web has 10 arrows. If a snake that eats frogs is added, how many arrows does the web have?",
        "q.7.4-x3.why": "Counting arrows shows that decomposers get energy from every link — and why diagrams usually leave them out.",
        "q.7.4-x3.reasons": [
          "Only add the frog → snake arrow, because decomposers only break down dead plants",
          "Add a frog → snake arrow and a snake → decomposers arrow",
          "Add arrows from the snake to every other organism in the web"
        ]
      },
      vi: {}
    }
  });
})();
