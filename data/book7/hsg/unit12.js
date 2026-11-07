window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 12,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "chia-ti-le",
    "lang": "vi",
    "q": "Ba bạn chia nhau 360 viên bi theo tỉ lệ 2 : 3 : 7. Hỏi bạn nhận nhiều nhất được bao nhiêu viên?",
    "svg": null,
    "choices": null,
    "answer": 210,
    "hints": [
      "Tổng số phần bằng nhau là bao nhiêu?",
      "Một phần ứng với bao nhiêu viên bi?",
      "Bạn nhận nhiều nhất ứng với mấy phần?"
    ],
    "explain": "Tổng số phần: 2 + 3 + 7 = 12. Một phần: 360 : 12 = 30 viên. Bạn nhận nhiều nhất có 7 phần: 7 × 30 = 210 viên.",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "ti-le-sau-khi-them",
    "lang": "vi",
    "q": "Hai số dương a và b có a : b = 3 : 5. Nếu cùng cộng thêm 8 vào mỗi số thì tỉ số mới là 5 : 7. Tính a + b.",
    "svg": null,
    "choices": null,
    "answer": 32,
    "hints": [
      "Đặt a = 3k, b = 5k. Sau khi cộng thêm 8, tỉ số hai số mới viết thế nào?",
      "Dùng tính chất tỉ lệ thức (nhân chéo) để tìm k.",
      "Có k rồi, tính a, b và cộng lại; thử lại tỉ số 5 : 7."
    ],
    "explain": "Đặt a = 3k, b = 5k. (3k + 8)/(5k + 8) = 5/7 ⇒ 21k + 56 = 25k + 40 ⇒ k = 4. Vậy a = 12, b = 20, a + b = 32. Thử lại: 20 : 28 = 5 : 7 ✓.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "cong-viec-nhieu-buoc",
    "lang": "vi",
    "q": "6 công nhân (năng suất như nhau) hoàn thành một công việc trong 10 ngày. Làm được 4 ngày thì 2 công nhân nghỉ việc, 4 công nhân còn lại làm tiếp đến khi xong. Hỏi công việc hoàn thành sau tổng cộng bao nhiêu ngày kể từ đầu?",
    "svg": null,
    "choices": null,
    "answer": 13,
    "hints": [
      "Toàn bộ công việc bằng bao nhiêu \"công nhân-ngày\"?",
      "Sau 4 ngày với 6 người, đã làm được bao nhiêu công nhân-ngày, còn lại bao nhiêu?",
      "4 người làm phần còn lại trong mấy ngày? Nhớ cộng cả 4 ngày đầu."
    ],
    "explain": "Cả công việc: 6 × 10 = 60 công nhân-ngày. 4 ngày đầu: 6 × 4 = 24; còn lại 36. Với 4 người: 36 : 4 = 9 ngày. Tổng: 4 + 9 = 13 ngày.",
    "unitLabel": "ngày",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "ti-le-noi-tiep",
    "lang": "vi",
    "q": "Cho A : B = 2 : 3 và B : C = 4 : 5. Biết A + B + C = 350. Tính C.",
    "svg": null,
    "choices": null,
    "answer": 150,
    "hints": [
      "Hai tỉ số cho B ứng với 3 và 4. Hãy đưa về cùng một giá trị của B (BCNN).",
      "Viết dãy tỉ số A : B : C với số B chung.",
      "Chia 350 theo dãy tỉ số đó rồi lấy phần của C."
    ],
    "explain": "A : B = 8 : 12 và B : C = 12 : 15, nên A : B : C = 8 : 12 : 15. Tổng 35 phần ứng với 350, mỗi phần là 10. C = 15 × 10 = 150.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hop-kim-ti-le",
    "lang": "vi",
    "q": "Một thanh hợp kim đồng – kẽm nặng 20 kg, trong đó đồng và kẽm theo tỉ lệ 3 : 2 về khối lượng. Phải thêm bao nhiêu kg kẽm để hợp kim có đồng và kẽm theo tỉ lệ 1 : 1?",
    "svg": null,
    "choices": null,
    "answer": 4,
    "hints": [
      "Trong 20 kg có bao nhiêu kg đồng và bao nhiêu kg kẽm?",
      "Khi thêm kẽm, khối lượng đồng có đổi không?",
      "Để tỉ lệ 1 : 1, kẽm phải bằng bao nhiêu kg? Cần thêm bao nhiêu?"
    ],
    "explain": "Đồng: 20 × 3/5 = 12 kg; kẽm: 8 kg. Đồng không đổi, để tỉ lệ 1 : 1 cần 12 kg kẽm nên phải thêm 12 − 8 = 4 kg.",
    "unitLabel": "kg",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "ti-le-ba-dai-luong",
    "lang": "vi",
    "q": "Từ a : b = 2 : 3 và b : c = 4 : 5, Nam kết luận a : b : c = 2 : 3 : 5. Tỉ lệ a : b : c đúng là:",
    "svg": null,
    "choices": [
      "2 : 3 : 5",
      "8 : 12 : 15",
      "2 : 4 : 5",
      "8 : 12 : 5"
    ],
    "answer": 1,
    "hints": [
      "Trong a : b = 2 : 3, b ứng với số mấy? Còn trong b : c = 4 : 5?",
      "Muốn ghép hai tỉ số, hai phần ứng với b phải bằng nhau. Nhân thế nào?",
      "Với b chung, viết lại a và c."
    ],
    "explain": "Trong hai tỉ số, b ứng với 3 và 4 – khác nhau nên không thể ghép trực tiếp. Quy đồng b = 12: a : b = 8 : 12 và b : c = 12 : 15, suy ra a : b : c = 8 : 12 : 15. Nam đã ghép sai khi bỏ qua việc b chưa cùng giá trị.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "tinh-chat-ti-le-thuc",
    "lang": "vi",
    "q": "Cho a : b = 2 : 3 (a, b dương). Phát biểu nào sau đây luôn đúng?",
    "svg": null,
    "choices": [
      "(a + 5) : (b + 5) = 2 : 3",
      "a : (a + b) = 2 : 3",
      "(a + b) : b = 5 : 3",
      "(a − 1) : (b − 1) = 2 : 3"
    ],
    "answer": 2,
    "hints": [
      "Đặt a = 2k, b = 3k rồi thử từng phát biểu.",
      "Với a = 2, b = 3 thử (a + 5) : (b + 5) và (a + 2) : (b + 3).",
      "Tỉ số (a + b) : b khi viết theo k bằng bao nhiêu?"
    ],
    "explain": "Với a = 2k, b = 3k: (a + b) : b = 5k : 3k = 5 : 3, luôn đúng. Các phát biểu khác sai: (2 + 5) : (3 + 5) = 7 : 8 ≠ 2 : 3; a : (a + b) = 2 : 5 chứ không phải 2 : 3; (2 − 1) : (3 − 1) = 1 : 2 ≠ 2 : 3.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "ti-le-nghich",
    "lang": "vi",
    "q": "Hai xe cùng đi từ A đến B. Vận tốc của xe thứ nhất và xe thứ hai theo tỉ lệ 4 : 5, và xe thứ nhất đi hết 2,5 giờ. Hỏi xe thứ hai đi hết bao nhiêu giờ?",
    "svg": null,
    "choices": null,
    "answer": 2,
    "hints": [
      "Cùng một quãng đường, nếu vận tốc lớn hơn thì thời gian thay đổi thế nào?",
      "Tỉ số thời gian của hai xe so với tỉ số vận tốc 4 : 5 như thế nào?",
      "Từ 2,5 giờ của xe thứ nhất, tính thời gian xe thứ hai."
    ],
    "explain": "Cùng quãng đường nên thời gian tỉ lệ nghịch với vận tốc: t₁ : t₂ = 5 : 4. Do đó t₂ = 2,5 × 4/5 = 2 giờ. Kiểm tra: quãng đường = 4v × 2,5 = 10v = 5v × 2 ✓.",
    "unitLabel": "giờ",
    "why": {
      "q": "Vì sao tỉ số thời gian là 5 : 4 chứ không phải 4 : 5?",
      "choices": [
        "Vì cùng một quãng đường, vận tốc lớn hơn thì thời gian ít hơn (tỉ lệ nghịch)",
        "Vì xe thứ nhất xuất phát sớm hơn",
        "Vì tỉ số luôn viết ngược lại",
        "Vì xe thứ hai đi quãng đường dài hơn"
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
  "q.hsg-01.q": "Three friends share 360 marbles in the ratio 2 : 3 : 7. How many marbles does the friend with the most receive?",
  "q.hsg-01.hints": [
    "How many equal parts are there in total?",
    "How many marbles does one part represent?",
    "How many parts does the friend with the most get?"
  ],
  "q.hsg-01.explain": "Total parts: 2 + 3 + 7 = 12. One part: 360 ÷ 12 = 30 marbles. The largest share has 7 parts: 7 × 30 = 210 marbles.",
  "q.hsg-02.q": "Two positive numbers a and b have a : b = 3 : 5. If 8 is added to each number, the new ratio is 5 : 7. Work out a + b.",
  "q.hsg-02.hints": [
    "Let a = 3k and b = 5k. After adding 8, how do you write the ratio of the new numbers?",
    "Use cross-multiplication of the equal ratios to find k.",
    "With k known, work out a and b and add; check the ratio 5 : 7."
  ],
  "q.hsg-02.explain": "Let a = 3k and b = 5k. (3k + 8)/(5k + 8) = 5/7 ⇒ 21k + 56 = 25k + 40 ⇒ k = 4. So a = 12, b = 20 and a + b = 32. Check: 20 : 28 = 5 : 7 ✓.",
  "q.hsg-03.q": "6 workers (all equally productive) finish a job in 10 days. After 4 days, 2 workers leave and the other 4 carry on until the job is done. After how many days in total from the start is the job finished?",
  "q.hsg-03.hints": [
    "How many worker-days is the whole job?",
    "After 4 days with 6 workers, how many worker-days are done and how many remain?",
    "In how many days do 4 workers finish the rest? Remember to add the first 4 days."
  ],
  "q.hsg-03.explain": "The whole job: 6 × 10 = 60 worker-days. First 4 days: 6 × 4 = 24; 36 remain. With 4 workers: 36 ÷ 4 = 9 days. Total: 4 + 9 = 13 days.",
  "q.hsg-04.q": "Given A : B = 2 : 3 and B : C = 4 : 5, and A + B + C = 350, find C.",
  "q.hsg-04.hints": [
    "The two ratios give B as 3 and as 4. Rewrite them with the same value for B (use the lowest common multiple).",
    "Write the combined ratio A : B : C using the common B.",
    "Share 350 in that ratio and take C's share."
  ],
  "q.hsg-04.explain": "A : B = 8 : 12 and B : C = 12 : 15, so A : B : C = 8 : 12 : 15. The 35 parts represent 350, so each part is 10. C = 15 × 10 = 150.",
  "q.hsg-05.q": "A copper–zinc alloy bar has mass 20 kg, with copper and zinc in the ratio 3 : 2 by mass. How many kg of zinc must be added so that copper and zinc are in the ratio 1 : 1?",
  "q.hsg-05.hints": [
    "In 20 kg, how many kg are copper and how many are zinc?",
    "When zinc is added, does the mass of copper change?",
    "For the ratio 1 : 1, how many kg of zinc are needed? How much must be added?"
  ],
  "q.hsg-05.explain": "Copper: 20 × 3/5 = 12 kg; zinc: 8 kg. Copper stays the same; for a 1 : 1 ratio we need 12 kg of zinc, so add 12 − 8 = 4 kg.",
  "q.hsg-06.q": "From a : b = 2 : 3 and b : c = 4 : 5, Nam concludes a : b : c = 2 : 3 : 5. The correct ratio a : b : c is:",
  "q.hsg-06.hints": [
    "In a : b = 2 : 3, which number goes with b? And in b : c = 4 : 5?",
    "To combine the ratios, the two parts for b must be equal. How can you scale them?",
    "With b the same, rewrite a and c."
  ],
  "q.hsg-06.explain": "In the two ratios, b corresponds to 3 and to 4, which differ, so they cannot be joined directly. Making b = 12: a : b = 8 : 12 and b : c = 12 : 15, giving a : b : c = 8 : 12 : 15. Nam combined them wrongly by ignoring that b was not the same value.",
  "q.hsg-06.choices": [
    "2 : 3 : 5",
    "8 : 12 : 15",
    "2 : 4 : 5",
    "8 : 12 : 5"
  ],
  "q.hsg-07.q": "Given a : b = 2 : 3 (a and b positive), which statement is always true?",
  "q.hsg-07.hints": [
    "Put a = 2k and b = 3k, then test each statement.",
    "With a = 2 and b = 3, try (a + 5) : (b + 5) and (a − 1) : (b − 1).",
    "What is the ratio (a + b) : b when written in terms of k?"
  ],
  "q.hsg-07.explain": "With a = 2k and b = 3k: (a + b) : b = 5k : 3k = 5 : 3, always true. The others fail: (2 + 5) : (3 + 5) = 7 : 8 ≠ 2 : 3; a : (a + b) = 2 : 5, not 2 : 3; (2 − 1) : (3 − 1) = 1 : 2 ≠ 2 : 3.",
  "q.hsg-07.choices": [
    "(a + 5) : (b + 5) = 2 : 3",
    "a : (a + b) = 2 : 3",
    "(a + b) : b = 5 : 3",
    "(a − 1) : (b − 1) = 2 : 3"
  ],
  "q.hsg-08.q": "Two cars both travel from A to B. The speeds of the first and second car are in the ratio 4 : 5, and the first car takes 2.5 hours. How many hours does the second car take?",
  "q.hsg-08.hints": [
    "For the same distance, if the speed is greater, what happens to the time?",
    "How does the ratio of the times compare with the speed ratio 4 : 5?",
    "From the first car's 2.5 hours, work out the second car's time."
  ],
  "q.hsg-08.explain": "The distance is the same, so time is inversely proportional to speed: t₁ : t₂ = 5 : 4. So t₂ = 2.5 × 4/5 = 2 hours. Check: distance = 4v × 2.5 = 10v = 5v × 2 ✓.",
  "q.hsg-08.why.q": "Why is the ratio of the times 5 : 4 and not 4 : 5?",
  "q.hsg-08.why.choices": [
    "Because for the same distance, a greater speed means less time (inverse proportion)",
    "Because the first car left earlier",
    "Because ratios are always written the other way round",
    "Because the second car travelled a longer distance"
  ]
}, vi: {} }
});
