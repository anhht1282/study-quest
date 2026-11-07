window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 14,
  pages: [165,192],
  sections: {
 "14.1": [
  {
   "id": "wb-14.1-01",
   "type": "num",
   "diff": 1,
   "skill": "bearing-read",
   "source": "wb",
   "lang": "en",
   "q": "In the diagram, the line from A to B makes an angle of 80° with the north line, measured clockwise. Write the bearing of B from A (as a number of degrees).",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><line x1=\"130\" y1=\"110\" x2=\"130\" y2=\"20\" stroke-width=\"1.4\"/><polygon points=\"130,14 126,24 134,24\" fill=\"currentColor\"/><text x=\"136\" y=\"22\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\">N</text><line x1=\"130\" y1=\"110\" x2=\"198.9\" y2=\"97.8\" stroke-width=\"1.6\"/><path d=\"M 130 88 A 22 22 0 0 1 151.7 106.2\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/><circle cx=\"130\" cy=\"110\" r=\"3\" fill=\"currentColor\"/><circle cx=\"198.9\" cy=\"97.8\" r=\"3\" fill=\"currentColor\"/><text x=\"118\" y=\"122\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\">A</text><text x=\"203.9\" y=\"109.8\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\">B</text></svg>",
   "choices": null,
   "answer": 80,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Góc phương vị được đo từ hướng nào và theo chiều nào?",
    "Hình đã cho góc đo từ Bắc theo chiều kim đồng hồ chưa?",
    "Viết góc đó theo dạng ba chữ số, rồi nhập số độ."
   ],
   "explain": "Góc phương vị đo từ Bắc theo chiều kim đồng hồ. Góc trong hình đã đúng như vậy, nên bearing của B từ A là 080°.",
   "why": null
  },
  {
   "id": "wb-14.1-02",
   "type": "num",
   "diff": 1,
   "skill": "bearing-compass",
   "source": "wb",
   "lang": "en",
   "q": "What is the bearing of due west?",
   "svg": null,
   "choices": null,
   "answer": 270,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Bắc là 000°, Đông là bao nhiêu?",
    "Mỗi lần quay thêm một góc vuông theo chiều kim đồng hồ thì cộng bao nhiêu độ?",
    "Từ Bắc quay theo chiều kim đồng hồ qua Đông, Nam rồi tới Tây."
   ],
   "explain": "Bắc 000°, Đông 090°, Nam 180°, Tây 270°. Vậy hướng Tây là 270°.",
   "why": null
  },
  {
   "id": "wb-14.1-03",
   "type": "num",
   "diff": 2,
   "skill": "bearing-back",
   "source": "wb",
   "lang": "en",
   "q": "The bearing of Y from X is 105°. Work out the bearing of X from Y.",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><line x1=\"130\" y1=\"110\" x2=\"130\" y2=\"20\" stroke-width=\"1.4\"/><polygon points=\"130,14 126,24 134,24\" fill=\"currentColor\"/><text x=\"136\" y=\"22\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\">N</text><line x1=\"130\" y1=\"110\" x2=\"197.6\" y2=\"128.1\" stroke-width=\"1.6\"/><path d=\"M 130 88 A 22 22 0 0 1 151.3 115.7\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/><line x1=\"197.6\" y1=\"128.1\" x2=\"197.6\" y2=\"73.1\" stroke-dasharray=\"4 3\"/><text x=\"201.6\" y=\"78.1\" fill=\"currentColor\" stroke=\"none\" font-size=\"9\">N</text><circle cx=\"130\" cy=\"110\" r=\"3\" fill=\"currentColor\"/><circle cx=\"197.6\" cy=\"128.1\" r=\"3\" fill=\"currentColor\"/><text x=\"118\" y=\"122\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\">X</text><text x=\"202.6\" y=\"140.1\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\">Y</text></svg>",
   "choices": null,
   "answer": 285,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Đường Bắc tại X và tại Y có song song không?",
    "Từ Y nhìn về X là hướng ngược lại hoàn toàn: chênh nhau bao nhiêu độ?",
    "105° + 180° = ?"
   ],
   "explain": "Hai hướng ngược nhau chênh 180°. Vì 105° < 180° nên cộng: 105° + 180° = 285°.",
   "why": null
  },
  {
   "id": "wb-14.1-04",
   "type": "num",
   "diff": 2,
   "skill": "bearing-back",
   "source": "wb",
   "lang": "en",
   "q": "The bearing of P from Q is 230°. Work out the bearing of Q from P.",
   "svg": null,
   "choices": null,
   "answer": 50,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "230° lớn hơn hay nhỏ hơn 180°?",
    "Nếu lớn hơn 180° thì khi đổi hướng em cộng hay trừ 180° (để kết quả nhỏ hơn 360°)?",
    "230° − 180° = ?"
   ],
   "explain": "230° > 180° nên trừ 180°: 230° − 180° = 50°, viết là 050°.",
   "why": null
  },
  {
   "id": "wb-14.1-05",
   "type": "mc",
   "diff": 3,
   "skill": "bearing-clockwise",
   "source": "wb",
   "lang": "en",
   "q": "In Ivan's diagram, point B is below and slightly to the left of A. The angle measured clockwise from north at A to AB is 208°, and the angle measured anticlockwise from north is 152°. Ivan writes 'The bearing of B from A is 152°'. What is the correct bearing?",
   "svg": null,
   "choices": [
    "152°, because it is the smaller angle",
    "208°, because bearings are measured clockwise from north",
    "028°, because 208° − 180° = 28°",
    "332°, because 360° − 28° = 332°"
   ],
   "answer": 1,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Góc phương vị luôn được đo theo chiều nào?",
    "Ivan đã lấy góc đo theo chiều ngược kim đồng hồ hay cùng chiều kim đồng hồ?",
    "Góc nào trong hai góc 152° và 208° đo theo chiều kim đồng hồ?"
   ],
   "explain": "Góc phương vị luôn đo theo CHIỀU KIM ĐỒNG HỒ từ Bắc. Ivan lấy góc đo ngược chiều (152°). Góc đúng là 208°, nên bearing của B từ A là 208°.",
   "why": null
  },
  {
   "id": "wb-14.1-06", "howto": "Find the direction of C as seen from B, as a bearing (measured clockwise from north). Enter the number of degrees.",
   "type": "num",
   "diff": 3,
   "skill": "bearing-angle",
   "source": "wb",
   "lang": "en",
   "q": "Town B is on a bearing of 070° from town A. At B, the angle ABC is 100°, measured anticlockwise from BA to BC. Work out the bearing of C from B.",
   "svg": null,
   "choices": null,
   "answer": 150,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Trước hết, bearing của A từ B là bao nhiêu (đảo chiều 070°)?",
    "Đi ngược chiều kim đồng hồ nghĩa là bearing tăng hay giảm?",
    "Bearing của BA trừ đi góc ABC."
   ],
   "explain": "Bearing của A từ B: 070° + 180° = 250°. Quay ngược chiều kim đồng hồ 100° nên bearing giảm: 250° − 100° = 150°.",
   "why": null
  },
  {
   "id": "wb-14.1-07", "howto": "Imagine standing at corner C of the hexagon and facing corner D. Enter the bearing of D from C in degrees.",
   "type": "num",
   "diff": 3,
   "skill": "bearing-hexagon",
   "source": "wb",
   "lang": "en",
   "q": "ABCDEF is a regular hexagon. The bearing of B from A is 090° and the hexagon goes round A, B, C, D, E, F clockwise (all interior angles are 120°). Work out the bearing of D from C.",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><polygon points=\"85,45 155,45 190,105.6 155,166.2 85,166.2 50,105.6\" stroke-width=\"1.6\"/><circle cx=\"85\" cy=\"45\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"155\" cy=\"45\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"190\" cy=\"105.6\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"155\" cy=\"166.2\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"85\" cy=\"166.2\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"50\" cy=\"105.6\" r=\"2.5\" fill=\"currentColor\"/><text x=\"78\" y=\"38\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">A</text><text x=\"162\" y=\"38\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">B</text><text x=\"203\" y=\"109\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">C</text><text x=\"162\" y=\"180\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">D</text><text x=\"78\" y=\"180\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">E</text><text x=\"37\" y=\"109\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">F</text><line x1=\"232\" y1=\"70\" x2=\"232\" y2=\"24\" stroke-width=\"1.4\"/><polygon points=\"232,16 228,26 236,26\" fill=\"currentColor\"/><text x=\"244\" y=\"24\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">N</text></svg>",
   "choices": null,
   "answer": 210,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Khi đi dọc cạnh lục giác theo chiều kim đồng hồ, tại mỗi đỉnh em rẽ phải một góc ngoài. Góc ngoài bằng bao nhiêu (180° − 120°)?",
    "Mỗi lần rẽ phải làm bearing tăng thêm bao nhiêu độ?",
    "AB là 090°. Cộng thêm góc ngoài cho BC rồi cộng thêm lần nữa cho CD."
   ],
   "explain": "Góc ngoài = 180° − 120° = 60°. AB = 090°, BC = 090° + 60° = 150°, CD = 150° + 60° = 210°. Bearing của D từ C là 210°.",
   "why": null
  },
  {
   "id": "wb-14.1-08", "howto": "Imagine standing at corner E of the hexagon and facing corner B. Work out this bearing yourself and enter it in degrees.",
   "type": "num",
   "diff": 3,
   "skill": "bearing-hexagon",
   "source": "wb",
   "lang": "en",
   "q": "ABCDEF is the same regular hexagon, with the bearing of B from A equal to 090° and the vertices in clockwise order. Zara says the bearing of B from E is 030°. What is the actual bearing of B from E?",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><polygon points=\"85,45 155,45 190,105.6 155,166.2 85,166.2 50,105.6\" stroke-width=\"1.6\"/><circle cx=\"85\" cy=\"45\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"155\" cy=\"45\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"190\" cy=\"105.6\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"155\" cy=\"166.2\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"85\" cy=\"166.2\" r=\"2.5\" fill=\"currentColor\"/><circle cx=\"50\" cy=\"105.6\" r=\"2.5\" fill=\"currentColor\"/><text x=\"78\" y=\"38\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">A</text><text x=\"162\" y=\"38\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">B</text><text x=\"203\" y=\"109\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">C</text><text x=\"162\" y=\"180\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">D</text><text x=\"78\" y=\"180\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">E</text><text x=\"37\" y=\"109\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">F</text><line x1=\"232\" y1=\"70\" x2=\"232\" y2=\"24\" stroke-width=\"1.4\"/><polygon points=\"232,16 228,26 236,26\" fill=\"currentColor\"/><text x=\"244\" y=\"24\" fill=\"currentColor\" stroke=\"none\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">N</text></svg>",
   "choices": null,
   "answer": 30,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Đường EB nối hai đỉnh đối diện qua tâm? Nó song song với cạnh nào của lục giác?",
    "EB song song với CD hay với AF? Dùng bearing của cạnh đó để suy ra.",
    "Bearing của FA là 030°. Cạnh nào song song với FA và cùng chiều đi từ E?"
   ],
   "explain": "Bearing các cạnh: AB 090°, BC 150°, CD 210°, DE 270°, EF 330°, FA 030°. EB song song và cùng chiều với FA nên bearing của B từ E là 030°. Zara đúng.",
   "why": null
  },
  {
   "id": "wb-14.1-09",
   "type": "mc",
   "diff": 3,
   "skill": "bearing-straight-line",
   "source": "wb",
   "lang": "en",
   "q": "The bearing of B from A is 125°. The bearing of C from A is 305°. What can you say about A, B and C?",
   "svg": null,
   "choices": [
    "A lies on the straight line BC, between B and C",
    "A, B and C form a right angle at A",
    "B lies on the straight line AC, between A and C",
    "C is due north of B"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Hai bearing này chênh nhau bao nhiêu độ?",
    "Hai hướng chênh nhau 180° thì nằm trên cùng một đường thẳng hay vuông góc?",
    "Từ A, B ở một phía và C ở phía ngược lại. Vậy điểm nào ở giữa?"
   ],
   "explain": "305° − 125° = 180°, nên AB và AC là hai hướng ngược nhau xuất phát từ A. Vậy B, A, C thẳng hàng và A nằm giữa B và C.",
   "why": null
  }
 ],
 "14.2": [
  {
   "id": "wb-14.2-01",
   "type": "text",
   "diff": 1,
   "skill": "midpoint-vertical",
   "source": "wb",
   "lang": "en",
   "q": "Write the coordinates of the midpoint of the line segment joining (2, 3) and (2, 7).",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><line x1=\"12\" y1=\"186\" x2=\"12\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"34\" y1=\"186\" x2=\"34\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"56\" y1=\"186\" x2=\"56\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"78\" y1=\"186\" x2=\"78\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"100\" y1=\"186\" x2=\"100\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"122\" y1=\"186\" x2=\"122\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"144\" y1=\"186\" x2=\"144\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"144\" y2=\"186\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"164\" x2=\"144\" y2=\"164\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"142\" x2=\"144\" y2=\"142\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"120\" x2=\"144\" y2=\"120\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"98\" x2=\"144\" y2=\"98\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"76\" x2=\"144\" y2=\"76\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"54\" x2=\"144\" y2=\"54\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"32\" x2=\"144\" y2=\"32\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"10\" x2=\"144\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"144\" y2=\"186\" stroke-width=\"1.4\"/><line x1=\"34\" y1=\"186\" x2=\"34\" y2=\"10\" stroke-width=\"1.4\"/><text x=\"9\" y=\"195\" fill=\"currentColor\" stroke=\"none\">-1</text><text x=\"53\" y=\"195\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"75\" y=\"195\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"97\" y=\"195\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"119\" y=\"195\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"141\" y=\"195\" fill=\"currentColor\" stroke=\"none\">5</text><text x=\"24\" y=\"167\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"24\" y=\"145\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"24\" y=\"123\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"24\" y=\"101\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"24\" y=\"79\" fill=\"currentColor\" stroke=\"none\">5</text><text x=\"24\" y=\"57\" fill=\"currentColor\" stroke=\"none\">6</text><text x=\"24\" y=\"35\" fill=\"currentColor\" stroke=\"none\">7</text><text x=\"24\" y=\"13\" fill=\"currentColor\" stroke=\"none\">8</text><line x1=\"78\" y1=\"120\" x2=\"78\" y2=\"32\" stroke-dasharray=\"4 3\" stroke-width=\"1.6\"/><circle cx=\"78\" cy=\"120\" r=\"2.8\" fill=\"currentColor\"/><text x=\"82\" y=\"116\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">A</text><circle cx=\"78\" cy=\"32\" r=\"2.8\" fill=\"currentColor\"/><text x=\"82\" y=\"28\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">B</text></svg>",
   "choices": null,
   "answer": "(2, 5)",
   "accept": [
    "2,5",
    "(2;5)",
    "2 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Đoạn thẳng này nằm ngang hay thẳng đứng? Hoành độ của trung điểm là bao nhiêu?",
    "Hai tung độ là 3 và 7. Điểm nằm giữa hai số đó là số nào?",
    "(3 + 7) ÷ 2 = ?"
   ],
   "explain": "Hoành độ không đổi là 2. Tung độ: (3 + 7) ÷ 2 = 5. Trung điểm là (2, 5).",
   "why": null
  },
  {
   "id": "wb-14.2-02",
   "type": "text",
   "diff": 1,
   "skill": "midpoint-formula",
   "source": "wb",
   "lang": "en",
   "q": "Work out the midpoint of the line segment joining (3, 8) and (9, 2).",
   "svg": null,
   "choices": null,
   "answer": "(6, 5)",
   "accept": [
    "6,5",
    "(6;5)",
    "6 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Trung điểm có hoành độ bằng trung bình cộng của hai hoành độ. Hai hoành độ là gì?",
    "Tương tự cho tung độ: trung bình cộng của 8 và 2.",
    "(3 + 9) ÷ 2 và (8 + 2) ÷ 2 là bao nhiêu?"
   ],
   "explain": "x = (3 + 9) ÷ 2 = 6 và y = (8 + 2) ÷ 2 = 5. Trung điểm là (6, 5).",
   "why": null
  },
  {
   "id": "wb-14.2-03",
   "type": "text",
   "diff": 2,
   "skill": "midpoint-negative",
   "source": "wb",
   "lang": "en",
   "q": "Work out the midpoint of the line segment joining (−4, 9) and (6, −3).",
   "svg": null,
   "choices": null,
   "answer": "(1, 3)",
   "accept": [
    "1,3",
    "(1;3)",
    "1 3"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Cộng hai hoành độ −4 và 6. Kết quả là bao nhiêu?",
    "Cộng hai tung độ 9 và −3, rồi chia 2.",
    "(−4 + 6) ÷ 2 và (9 + (−3)) ÷ 2 là bao nhiêu?"
   ],
   "explain": "x = (−4 + 6) ÷ 2 = 1; y = (9 − 3) ÷ 2 = 3. Trung điểm là (1, 3).",
   "why": null
  },
  {
   "id": "wb-14.2-04",
   "type": "text",
   "diff": 2,
   "skill": "midpoint-decimal",
   "source": "wb",
   "lang": "en",
   "q": "Work out the midpoint of the line segment joining (3, 2) and (8, 7).",
   "svg": null,
   "choices": null,
   "answer": "(5.5, 4.5)",
   "accept": [
    "5.5,4.5",
    "(5.5;4.5)",
    "5.5 4.5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng hai hoành độ 3 và 8 là số chẵn hay lẻ? Chia 2 sẽ ra số nguyên không?",
    "Kết quả có thể là số thập phân. Tính (3 + 8) ÷ 2.",
    "Tính tương tự (2 + 7) ÷ 2."
   ],
   "explain": "x = (3 + 8) ÷ 2 = 5,5 và y = (2 + 7) ÷ 2 = 4,5. Trung điểm là (5,5; 4,5).",
   "why": null
  },
  {
   "id": "wb-14.2-05",
   "type": "mc",
   "diff": 3,
   "skill": "midpoint-error",
   "source": "wb",
   "lang": "en",
   "q": "Hassan works out the midpoint of (−6, 5) and (2, −3) and writes (−2, 4). Which statement is correct?",
   "svg": null,
   "choices": [
    "The x-coordinate is right, but the y-coordinate should be (5 + (−3)) ÷ 2 = 1, so the midpoint is (−2, 1)",
    "Both coordinates are right",
    "The x-coordinate should be 4, so the midpoint is (4, 4)",
    "The midpoint is (−4, 1)"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Kiểm tra hoành độ: (−6 + 2) ÷ 2 bằng bao nhiêu?",
    "Hassan có vẻ lấy tung độ là (5 − (−3)) ÷ 2. Có đúng là phải TRỪ không?",
    "Trung điểm dùng tổng hay hiệu của hai tung độ?"
   ],
   "explain": "x = (−6 + 2) ÷ 2 = −2 là đúng. Nhưng y phải là trung bình cộng: (5 + (−3)) ÷ 2 = 1. Hassan đã lấy hiệu (5 − (−3)) ÷ 2 = 4, đó là nửa khoảng cách chứ không phải tọa độ trung điểm. Đáp án đúng: (−2, 1).",
   "why": null
  },
  {
   "id": "wb-14.2-06", "howto": "You know the midpoint and one end of the segment. Enter the coordinates of the other end.",
   "type": "text",
   "diff": 3,
   "skill": "midpoint-find-end",
   "source": "wb",
   "lang": "en",
   "q": "The midpoint of a line segment is (5, −1). One end is (8, 4). Write the coordinates of the other end.",
   "svg": null,
   "choices": null,
   "answer": "(2, -6)",
   "accept": [
    "2,-6",
    "(2;-6)",
    "2 -6"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Từ đầu mút (8, 4) tới trung điểm (5, −1), em đi bao nhiêu theo x và theo y?",
    "Đầu mút kia cách trung điểm cùng một khoảng nhưng theo chiều ngược lại.",
    "Từ (5, −1) lại đi một bước giống thế (cùng độ dịch)."
   ],
   "explain": "Từ (8, 4) tới (5, −1): x giảm 3, y giảm 5. Lặp lại bước đó từ trung điểm: (5 − 3, −1 − 5) = (2, −6). Kiểm tra: ((8 + 2) ÷ 2, (4 − 6) ÷ 2) = (5, −1).",
   "why": null
  },
  {
   "id": "wb-14.2-07",
   "type": "text",
   "diff": 3,
   "skill": "midpoint-square-centre",
   "source": "wb",
   "lang": "en",
   "q": "ABCD is a square. A is (−4, −2) and C is (−1, 3). Write the coordinates of the centre of the square.",
   "svg": null,
   "choices": null,
   "answer": "(-2.5, 0.5)",
   "accept": [
    "-2.5,0.5",
    "(-2.5;0.5)",
    "-2.5 0.5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "AC là đường chéo của hình vuông. Tâm hình vuông nằm ở đâu trên đường chéo đó?",
    "Tâm là trung điểm của AC.",
    "Tính ((−4 + (−1)) ÷ 2, (−2 + 3) ÷ 2)."
   ],
   "explain": "Các đường chéo của hình vuông cắt nhau tại tâm, đó là trung điểm của AC: ((−4 − 1) ÷ 2, (−2 + 3) ÷ 2) = (−2,5; 0,5).",
   "why": null
  },
  {
   "id": "wb-14.2-08", "howto": "C, D and E are found one after another. Enter only the coordinates of E.",
   "type": "text",
   "diff": 3,
   "skill": "midpoint-repeated",
   "source": "wb",
   "lang": "en",
   "q": "A is (12, 0) and B is (0, 8). C is the midpoint of AB, D is the midpoint of BC and E is the midpoint of CD. Write the coordinates of E.",
   "svg": null,
   "choices": null,
   "answer": "(4.5, 5)",
   "accept": [
    "4.5,5",
    "(4.5;5)",
    "4.5 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tìm C trước: trung điểm của A và B.",
    "Tìm D là trung điểm của B và C, rồi E là trung điểm của C và D.",
    "Mỗi bước dùng cùng công thức trung bình cộng."
   ],
   "explain": "C = (6, 4). D là trung điểm của B(0, 8) và C(6, 4): (3, 6). E là trung điểm của C(6, 4) và D(3, 6): (4,5; 5).",
   "why": null
  },
  {
   "id": "wb-14.2-09",
   "type": "text",
   "diff": 3,
   "skill": "midpoint-decimals",
   "source": "wb",
   "lang": "en",
   "q": "A is (2.8, 6.4) and C is (−3.6, −1.2). Find the midpoint of AC.",
   "svg": null,
   "choices": null,
   "answer": "(-0.4, 2.6)",
   "accept": [
    "-0.4,2.6",
    "(-0.4;2.6)",
    "-0.4 2.6"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Cộng hai hoành độ 2,8 và −3,6. Kết quả là bao nhiêu?",
    "Cộng hai tung độ 6,4 và −1,2.",
    "Chia mỗi tổng cho 2."
   ],
   "explain": "x = (2,8 + (−3,6)) ÷ 2 = −0,8 ÷ 2 = −0,4; y = (6,4 + (−1,2)) ÷ 2 = 5,2 ÷ 2 = 2,6. Trung điểm là (−0,4; 2,6).",
   "why": null
  }
 ],
 "14.3": [
  {
   "id": "wb-14.3-01",
   "type": "mc",
   "diff": 1,
   "skill": "column-vector",
   "source": "wb",
   "lang": "en",
   "q": "What does the column vector (−3, 2) (3 to the left, 2 up, written as −3 across and 2 up) mean for a translation?",
   "svg": null,
   "choices": [
    "Move 3 units left and 2 units up",
    "Move 3 units right and 2 units up",
    "Move 2 units left and 3 units up",
    "Move 3 units left and 2 units down"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Số ở trên của vectơ cột cho dịch chuyển theo hướng ngang hay dọc?",
    "Số âm theo hướng ngang nghĩa là sang trái hay sang phải?",
    "Số thứ hai dương nghĩa là lên hay xuống?"
   ],
   "explain": "Số trên là dịch ngang: −3 nghĩa là 3 đơn vị sang trái. Số dưới là dịch dọc: 2 nghĩa là 2 đơn vị lên trên.",
   "why": null
  },
  {
   "id": "wb-14.3-02",
   "type": "text",
   "diff": 1,
   "skill": "translate-point",
   "source": "wb",
   "lang": "en",
   "q": "The point A(2, −3) is translated by the column vector (−4, 5). Write the coordinates of A'.",
   "svg": null,
   "choices": null,
   "answer": "(-2, 2)",
   "accept": [
    "-2,2",
    "(-2;2)",
    "-2 2"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Cộng số ở trên vectơ vào hoành độ. Tính 2 + (−4).",
    "Cộng số ở dưới vectơ vào tung độ. Tính −3 + 5.",
    "Ghép hai kết quả thành cặp (x, y)."
   ],
   "explain": "A' = (2 + (−4), −3 + 5) = (−2, 2).",
   "why": null
  },
  {
   "id": "wb-14.3-03", "howto": "C' is where corner C ends up after the rectangle is translated. Enter only the coordinates of C'.",
   "type": "text",
   "diff": 2,
   "skill": "translate-shape",
   "source": "wb",
   "lang": "en",
   "q": "Rectangle ABCD has A(1, 1), B(4, 1), C(4, 3) and D(1, 3). It is translated by the column vector (−2, −3). Write the coordinates of C'.",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><line x1=\"12\" y1=\"186\" x2=\"12\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"34\" y1=\"186\" x2=\"34\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"56\" y1=\"186\" x2=\"56\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"78\" y1=\"186\" x2=\"78\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"100\" y1=\"186\" x2=\"100\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"122\" y1=\"186\" x2=\"122\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"144\" y1=\"186\" x2=\"144\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"166\" y1=\"186\" x2=\"166\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"188\" y1=\"186\" x2=\"188\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"210\" y1=\"186\" x2=\"210\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"210\" y2=\"186\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"164\" x2=\"210\" y2=\"164\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"142\" x2=\"210\" y2=\"142\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"120\" x2=\"210\" y2=\"120\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"98\" x2=\"210\" y2=\"98\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"76\" x2=\"210\" y2=\"76\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"54\" x2=\"210\" y2=\"54\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"32\" x2=\"210\" y2=\"32\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"10\" x2=\"210\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"120\" x2=\"210\" y2=\"120\" stroke-width=\"1.4\"/><line x1=\"78\" y1=\"186\" x2=\"78\" y2=\"10\" stroke-width=\"1.4\"/><text x=\"9\" y=\"129\" fill=\"currentColor\" stroke=\"none\">-3</text><text x=\"31\" y=\"129\" fill=\"currentColor\" stroke=\"none\">-2</text><text x=\"53\" y=\"129\" fill=\"currentColor\" stroke=\"none\">-1</text><text x=\"97\" y=\"129\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"119\" y=\"129\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"141\" y=\"129\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"163\" y=\"129\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"185\" y=\"129\" fill=\"currentColor\" stroke=\"none\">5</text><text x=\"207\" y=\"129\" fill=\"currentColor\" stroke=\"none\">6</text><text x=\"68\" y=\"189\" fill=\"currentColor\" stroke=\"none\">-3</text><text x=\"68\" y=\"167\" fill=\"currentColor\" stroke=\"none\">-2</text><text x=\"68\" y=\"145\" fill=\"currentColor\" stroke=\"none\">-1</text><text x=\"68\" y=\"101\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"68\" y=\"79\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"68\" y=\"57\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"68\" y=\"35\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"68\" y=\"13\" fill=\"currentColor\" stroke=\"none\">5</text><polygon points=\"100,98 166,98 166,54 100,54\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke-width=\"1.6\"/><text x=\"103\" y=\"95\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">A</text><text x=\"169\" y=\"95\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">B</text><text x=\"169\" y=\"51\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">C</text><text x=\"103\" y=\"51\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">D</text></svg>",
   "choices": null,
   "answer": "(2, 0)",
   "accept": [
    "2,0",
    "(2;0)",
    "2 0"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Vectơ (−2, −3) nghĩa là sang trái bao nhiêu và xuống bao nhiêu?",
    "Chỉ cần dịch đỉnh C(4, 3).",
    "C' = (4 + (−2), 3 + (−3))."
   ],
   "explain": "C' = (4 − 2, 3 − 3) = (2, 0).",
   "why": null
  },
  {
   "id": "wb-14.3-04", "howto": "Find how far P moves across and up to reach P'. Enter the column vector as (across, up), with a minus sign for left or down.",
   "type": "text",
   "diff": 2,
   "skill": "find-vector",
   "source": "wb",
   "lang": "en",
   "q": "P(2, 5) is translated to P'(−1, 1). Write the column vector of the translation as (across, up).",
   "svg": null,
   "choices": null,
   "answer": "(-3, -4)",
   "accept": [
    "-3,-4",
    "(-3;-4)",
    "-3 -4"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Từ P tới P', hoành độ thay đổi bao nhiêu (mới trừ cũ)?",
    "Tung độ thay đổi bao nhiêu?",
    "Viết hai thay đổi đó thành (ngang, dọc)."
   ],
   "explain": "Ngang: −1 − 2 = −3. Dọc: 1 − 5 = −4. Vectơ là (−3, −4).",
   "why": null
  },
  {
   "id": "wb-14.3-05", "howto": "Find the translation that moves the shape back to where it started. Enter it as (across, up).",
   "type": "text",
   "diff": 2,
   "skill": "inverse-vector",
   "source": "wb",
   "lang": "en",
   "q": "A shape is translated by the column vector (−1, −9). Write the column vector that translates it back to its original position.",
   "svg": null,
   "choices": null,
   "answer": "(1, 9)",
   "accept": [
    "1,9",
    "(1;9)",
    "1 9"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Để quay lại vị trí cũ, em phải đi ngược lại mỗi dịch chuyển. Hướng ngang −1 bị đảo thành gì?",
    "Hướng dọc −9 bị đảo thành gì?",
    "Viết hai số đã đảo dấu thành vectơ."
   ],
   "explain": "Vectơ ngược có cùng độ lớn nhưng đổi dấu cả hai số: (−1, −9) → (1, 9).",
   "why": null
  },
  {
   "id": "wb-14.3-06",
   "type": "mc",
   "diff": 3,
   "skill": "translate-swap",
   "source": "wb",
   "lang": "en",
   "q": "Adah translates a triangle B using the column vector (2, 3). She moves the triangle 3 squares right and 2 squares up. What is her mistake?",
   "svg": null,
   "choices": [
    "She swapped the two numbers: the top number is the horizontal move (2 right) and the bottom is the vertical move (3 up)",
    "She should have moved left, since 2 and 3 are the same sign",
    "Nothing is wrong, since the order does not matter",
    "She should have added 2 and 3 and moved 5 squares up"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Trong vectơ cột, số ở trên nói về hướng nào?",
    "Adah đã đi 3 ô theo hướng ngang hay dọc? Vectơ nói bao nhiêu?",
    "Hãy đọc lại vectơ: ngang trước, dọc sau."
   ],
   "explain": "Vectơ (2, 3) nghĩa là 2 ô sang phải rồi 3 ô lên trên. Adah đã đảo thứ tự (3 phải, 2 lên). Thứ tự quan trọng vì mỗi số ứng với một hướng.",
   "why": null
  },
  {
   "id": "wb-14.3-07", "howto": "J' is where corner J ends up after the trapezium is translated. Enter only the coordinates of J'.",
   "type": "text",
   "diff": 3,
   "skill": "translate-trapezium",
   "source": "wb",
   "lang": "en",
   "q": "Trapezium GHIJ has G(1, −3), H(2, −1), I(3, −1) and J(5, −3). It is translated by the column vector (−4, 6). Write the coordinates of J'.",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><line x1=\"12\" y1=\"186\" x2=\"12\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"28\" y1=\"186\" x2=\"28\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"44\" y1=\"186\" x2=\"44\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"60\" y1=\"186\" x2=\"60\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"76\" y1=\"186\" x2=\"76\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"92\" y1=\"186\" x2=\"92\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"108\" y1=\"186\" x2=\"108\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"124\" y1=\"186\" x2=\"124\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"140\" y1=\"186\" x2=\"140\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"156\" y1=\"186\" x2=\"156\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"172\" y1=\"186\" x2=\"172\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"188\" y1=\"186\" x2=\"188\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"188\" y2=\"186\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"170\" x2=\"188\" y2=\"170\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"154\" x2=\"188\" y2=\"154\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"138\" x2=\"188\" y2=\"138\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"122\" x2=\"188\" y2=\"122\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"106\" x2=\"188\" y2=\"106\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"90\" x2=\"188\" y2=\"90\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"74\" x2=\"188\" y2=\"74\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"58\" x2=\"188\" y2=\"58\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"42\" x2=\"188\" y2=\"42\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"26\" x2=\"188\" y2=\"26\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"10\" x2=\"188\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"122\" x2=\"188\" y2=\"122\" stroke-width=\"1.4\"/><line x1=\"92\" y1=\"186\" x2=\"92\" y2=\"10\" stroke-width=\"1.4\"/><text x=\"25\" y=\"131\" fill=\"currentColor\" stroke=\"none\">-4</text><text x=\"57\" y=\"131\" fill=\"currentColor\" stroke=\"none\">-2</text><text x=\"121\" y=\"131\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"153\" y=\"131\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"185\" y=\"131\" fill=\"currentColor\" stroke=\"none\">6</text><text x=\"82\" y=\"189\" fill=\"currentColor\" stroke=\"none\">-4</text><text x=\"82\" y=\"157\" fill=\"currentColor\" stroke=\"none\">-2</text><text x=\"82\" y=\"93\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"82\" y=\"61\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"82\" y=\"29\" fill=\"currentColor\" stroke=\"none\">6</text><polygon points=\"108,170 124,138 140,138 172,170\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke-width=\"1.6\"/><text x=\"111\" y=\"167\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">G</text><text x=\"127\" y=\"135\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">H</text><text x=\"143\" y=\"135\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">I</text><text x=\"175\" y=\"167\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">J</text><polygon points=\"44,74 60,42 76,42 108,74\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke-width=\"1.6\" stroke-dasharray=\"3 2\"/><text x=\"47\" y=\"71\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">G'</text><text x=\"63\" y=\"39\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">H'</text><text x=\"79\" y=\"39\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">I'</text><text x=\"111\" y=\"71\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">J'</text></svg>",
   "choices": null,
   "answer": "(1, 3)",
   "accept": [
    "1,3",
    "(1;3)",
    "1 3"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Chỉ cần dịch đỉnh J(5, −3).",
    "Cộng −4 vào hoành độ, cộng 6 vào tung độ.",
    "J' = (5 + (−4), −3 + 6)."
   ],
   "explain": "J' = (5 + (−4), −3 + 6) = (1, 3).",
   "why": null
  },
  {
   "id": "wb-14.3-08", "howto": "T' is the new position of corner T after the square is translated. Enter only the coordinates of T'.",
   "type": "text",
   "diff": 3,
   "skill": "translate-find-vector-square",
   "source": "wb",
   "lang": "en",
   "q": "Square RSTU has R(1, 1), S(1, −3), T(−3, −3) and U(−3, 1). The square is translated, and the image of R is R'(4, 2). Write the coordinates of T', the image of T.",
   "svg": null,
   "choices": null,
   "answer": "(0, -2)",
   "accept": [
    "0,-2",
    "(0;-2)",
    "0 -2"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Trước hết tìm vectơ tịnh tiến từ R(1, 1) tới R'(4, 2).",
    "Vectơ là (3, 1). Áp dụng nó cho T(−3, −3).",
    "T' = (−3 + 3, −3 + 1)."
   ],
   "explain": "Vectơ: (4 − 1, 2 − 1) = (3, 1). T' = (−3 + 3, −3 + 1) = (0, −2).",
   "why": null
  },
  {
   "id": "wb-14.3-09", "howto": "Find one translation that takes shape A straight to shape C. Enter it as (across, up).",
   "type": "text",
   "diff": 3,
   "skill": "combine-translations",
   "source": "wb",
   "lang": "en",
   "q": "Shape A is translated to B by the column vector (2, −4). Shape B is then translated to C by the column vector (2, 3). Write the single column vector that translates A directly to C.",
   "svg": null,
   "choices": null,
   "answer": "(4, -1)",
   "accept": [
    "4,-1",
    "(4;-1)",
    "4 -1"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tổng dịch chuyển theo hướng ngang là bao nhiêu sau hai bước?",
    "Tổng dịch chuyển theo hướng dọc là −4 + 3 = ?",
    "Ghép hai tổng thành vectơ."
   ],
   "explain": "Cộng từng thành phần: ngang 2 + 2 = 4, dọc −4 + 3 = −1. Vectơ duy nhất là (4, −1).",
   "why": null
  },
  {
   "id": "wb-14.3-10",
   "type": "mc",
   "diff": 2,
   "skill": "translate-properties",
   "source": "wb",
   "lang": "en",
   "q": "A shape is translated. Which property of the shape changes?",
   "svg": null,
   "choices": [
    "Its position",
    "Its size",
    "Its orientation (the way it faces)",
    "The size of its angles"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tịnh tiến là trượt hình đi. Hình có bị xoay hay lật không?",
    "Hình có to ra hay nhỏ lại không?",
    "Chỉ còn một tính chất nào thay đổi khi trượt?"
   ],
   "explain": "Phép tịnh tiến chỉ làm đổi vị trí. Kích thước, hướng và các góc đều giữ nguyên (ảnh và vật bằng nhau).",
   "why": null
  }
 ],
 "14.4": [
  {
   "id": "wb-14.4-01",
   "type": "mc",
   "diff": 1,
   "skill": "mirror-equation",
   "source": "wb",
   "lang": "en",
   "q": "A mirror line goes through the points (0, 3) and (7, 3). What is its equation?",
   "svg": null,
   "choices": [
    "x = 3",
    "y = 3",
    "x = 7",
    "y = 7"
   ],
   "answer": 1,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Hai điểm có cùng giá trị nào: hoành độ hay tung độ?",
    "Đường thẳng ngang bắt đầu bằng x = ... hay y = ...?",
    "Giá trị chung đó là bao nhiêu?"
   ],
   "explain": "Cả hai điểm đều có tung độ 3, nên đây là đường ngang. Đường ngang có phương trình dạng y = số, vậy y = 3.",
   "why": null
  },
  {
   "id": "wb-14.4-02",
   "type": "text",
   "diff": 1,
   "skill": "reflect-point-x",
   "source": "wb",
   "lang": "en",
   "q": "Reflect the point (2, 5) in the line x = 4. Write the coordinates of its image.",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><line x1=\"12\" y1=\"186\" x2=\"12\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"37.1\" y1=\"186\" x2=\"37.1\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"62.3\" y1=\"186\" x2=\"62.3\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"87.4\" y1=\"186\" x2=\"87.4\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"112.6\" y1=\"186\" x2=\"112.6\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"137.7\" y1=\"186\" x2=\"137.7\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"162.9\" y1=\"186\" x2=\"162.9\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"188\" y1=\"186\" x2=\"188\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"213.1\" y1=\"186\" x2=\"213.1\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"213.1\" y2=\"186\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"160.9\" x2=\"213.1\" y2=\"160.9\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"135.7\" x2=\"213.1\" y2=\"135.7\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"110.6\" x2=\"213.1\" y2=\"110.6\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"85.4\" x2=\"213.1\" y2=\"85.4\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"60.3\" x2=\"213.1\" y2=\"60.3\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"35.1\" x2=\"213.1\" y2=\"35.1\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"10\" x2=\"213.1\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"213.1\" y2=\"186\" stroke-width=\"1.4\"/><line x1=\"12\" y1=\"186\" x2=\"12\" y2=\"10\" stroke-width=\"1.4\"/><text x=\"34.1\" y=\"195\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"59.3\" y=\"195\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"84.4\" y=\"195\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"109.6\" y=\"195\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"134.7\" y=\"195\" fill=\"currentColor\" stroke=\"none\">5</text><text x=\"159.9\" y=\"195\" fill=\"currentColor\" stroke=\"none\">6</text><text x=\"185\" y=\"195\" fill=\"currentColor\" stroke=\"none\">7</text><text x=\"210.1\" y=\"195\" fill=\"currentColor\" stroke=\"none\">8</text><text x=\"2\" y=\"163.9\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"2\" y=\"138.7\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"2\" y=\"113.6\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"2\" y=\"88.4\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"2\" y=\"63.3\" fill=\"currentColor\" stroke=\"none\">5</text><text x=\"2\" y=\"38.1\" fill=\"currentColor\" stroke=\"none\">6</text><text x=\"2\" y=\"13\" fill=\"currentColor\" stroke=\"none\">7</text><line x1=\"112.6\" y1=\"186\" x2=\"112.6\" y2=\"10\" stroke-dasharray=\"4 3\" stroke-width=\"1.6\"/><circle cx=\"62.3\" cy=\"60.3\" r=\"2.8\" fill=\"currentColor\"/><text x=\"66.3\" y=\"56.3\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">P</text></svg>",
   "choices": null,
   "answer": "(6, 5)",
   "accept": [
    "6,5",
    "(6;5)",
    "6 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Điểm (2, 5) cách đường x = 4 bao nhiêu ô, và nằm bên nào?",
    "Ảnh nằm bên kia gương, cách gương cùng khoảng đó.",
    "Từ x = 4 đi thêm 2 ô sang phải."
   ],
   "explain": "(2, 5) cách gương x = 4 là 2 ô (bên trái). Ảnh cách gương 2 ô bên phải: x = 6, y vẫn 5. Ảnh là (6, 5).",
   "why": null
  },
  {
   "id": "wb-14.4-03",
   "type": "text",
   "diff": 2,
   "skill": "reflect-point-y",
   "source": "wb",
   "lang": "en",
   "q": "Reflect the point (5, 1) in the line y = 3. Write the coordinates of its image.",
   "svg": null,
   "choices": null,
   "answer": "(5, 5)",
   "accept": [
    "5,5",
    "(5;5)",
    "5 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Gương y = 3 là đường ngang hay dọc? Điểm (5, 1) nằm dưới hay trên gương?",
    "Điểm cách gương bao nhiêu ô?",
    "Ảnh nằm phía trên gương cùng khoảng cách."
   ],
   "explain": "(5, 1) cách gương y = 3 là 2 ô phía dưới. Ảnh cách gương 2 ô phía trên: y = 5, x vẫn 5. Ảnh là (5, 5).",
   "why": null
  },
  {
   "id": "wb-14.4-04",
   "type": "text",
   "diff": 2,
   "skill": "reflect-negative",
   "source": "wb",
   "lang": "en",
   "q": "Reflect the point (−4, −2) in the line x = −1. Write the coordinates of its image.",
   "svg": null,
   "choices": null,
   "answer": "(2, -2)",
   "accept": [
    "2,-2",
    "(2;-2)",
    "2 -2"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Từ x = −4 tới gương x = −1 là bao nhiêu ô?",
    "Đi tiếp từ gương cùng số ô đó về phía bên kia.",
    "−1 + 3 = ?"
   ],
   "explain": "Khoảng cách tới gương: −1 − (−4) = 3. Ảnh có x = −1 + 3 = 2, y vẫn −2. Ảnh là (2, −2).",
   "why": null
  },
  {
   "id": "wb-14.4-05",
   "type": "text",
   "diff": 2,
   "skill": "reflect-halfline",
   "source": "wb",
   "lang": "en",
   "q": "Reflect the point (2, 4) in the line y = 1.5. Write the coordinates of its image.",
   "svg": null,
   "choices": null,
   "answer": "(2, -1)",
   "accept": [
    "2,-1",
    "(2;-1)",
    "2 -1"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Từ y = 4 tới gương y = 1,5 là bao nhiêu đơn vị?",
    "Đi tiếp từ gương cùng khoảng đó xuống phía dưới.",
    "1,5 − 2,5 = ?"
   ],
   "explain": "Khoảng cách tới gương: 4 − 1,5 = 2,5. Ảnh có y = 1,5 − 2,5 = −1, x vẫn 2. Ảnh là (2, −1).",
   "why": null
  },
  {
   "id": "wb-14.4-06",
   "type": "mc",
   "diff": 2,
   "skill": "reflect-wrong-line",
   "source": "wb",
   "lang": "en",
   "q": "The point (1, 5) is reflected in the line x = 4. Which point is the image?",
   "svg": null,
   "choices": [
    "(7, 5)",
    "(4, 5)",
    "(8, 5)",
    "(1, 3)"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Gương x = 4 là đường dọc. Vậy toạ độ nào thay đổi: x hay y?",
    "(1, 5) cách gương bao nhiêu ô? Ảnh cách gương bao nhiêu ô, ở phía nào?",
    "(1, 3) có phải đối xứng qua đường ngang không? Còn (4, 5) là điểm nằm ngay trên gương."
   ],
   "explain": "(1, 5) cách gương x = 4 là 3 ô nên ảnh có x = 4 + 3 = 7, y vẫn 5: (7, 5). (4, 5) là điểm trên gương; (8, 5) do nhân đôi 4 mà quên trừ x; (1, 3) là ảnh qua đường ngang y = 4.",
   "why": null
  },
  {
   "id": "wb-14.4-07",
   "type": "text",
   "diff": 3,
   "skill": "reflect-y-neg-x",
   "source": "wb",
   "lang": "en",
   "q": "Triangle EFG has E(−3, 3), F(−5, 1) and G(−3, 1). It is reflected in the line y = −x. Use the rule (x, y) → (−y, −x) to write the coordinates of F', the image of F.",
   "svg": null,
   "choices": null,
   "answer": "(-1, 5)",
   "accept": [
    "-1,5",
    "(-1;5)",
    "-1 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Với quy tắc (x, y) → (−y, −x), tọa độ mới thứ nhất là −y. y của F là bao nhiêu?",
    "Tọa độ mới thứ hai là −x. x của F là bao nhiêu?",
    "Ghép hai số lại."
   ],
   "explain": "F(−5, 1): x = −5, y = 1. F' = (−y, −x) = (−1, 5).",
   "why": null
  },
  {
   "id": "wb-14.4-08",
   "type": "mc",
   "diff": 2,
   "skill": "invariant-point",
   "source": "wb",
   "lang": "en",
   "q": "Which of these points does not move when it is reflected in the line y = x?",
   "svg": null,
   "choices": [
    "(3, 4)",
    "(−2, 2)",
    "(5, 5)",
    "(0, 5)"
   ],
   "answer": 2,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Điểm nằm trên gương thì ảnh của nó ở đâu?",
    "Điểm nằm trên đường y = x có hoành độ và tung độ liên hệ thế nào?",
    "Điểm nào trong các lựa chọn có x = y?"
   ],
   "explain": "Điểm nằm trên đường gương thì không di chuyển. Điểm nằm trên y = x thỏa mãn x = y, đó là (5, 5). Quy tắc đối xứng qua y = x là hoán đổi x và y: (3, 4) → (4, 3), (−2, 2) → (2, −2), (0, 5) → (5, 0).",
   "why": null
  },
  {
   "id": "wb-14.4-09", "howto": "Find the mirror line that reflects P onto P'. Write its equation (it starts with x = or y =).",
   "type": "text",
   "diff": 3,
   "skill": "find-mirror",
   "source": "wb",
   "lang": "en",
   "q": "The point P(5, −4) is reflected to P'(5, 2). Write the equation of the mirror line.",
   "svg": null,
   "choices": null,
   "answer": "y=-1",
   "accept": [
    "y = -1",
    "y=−1",
    "y = −1"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Hoành độ không đổi nên gương là đường ngang hay đường dọc?",
    "Gương đi qua trung điểm của P và P'.",
    "(−4 + 2) ÷ 2 = ?"
   ],
   "explain": "Hoành độ không đổi nên gương là đường ngang y = số. Số đó là trung bình của hai tung độ: (−4 + 2) ÷ 2 = −1. Phương trình: y = −1.",
   "why": null
  },
  {
   "id": "wb-14.4-10",
   "type": "text",
   "diff": 3,
   "skill": "transform-sequence",
   "source": "wb",
   "lang": "en",
   "q": "The point (2, 1) is reflected in the line y = x, then translated by the column vector (4, −1), then reflected in the line x = 3. Write the coordinates of the final image.",
   "svg": null,
   "choices": null,
   "answer": "(1, 1)",
   "accept": [
    "1,1",
    "(1;1)",
    "1 1"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Bước 1: đối xứng qua y = x thì hoán đổi x và y. (2, 1) thành điểm nào?",
    "Bước 2: cộng vectơ (4, −1) vào điểm vừa tìm.",
    "Bước 3: lấy đối xứng điểm đó qua x = 3 (tính khoảng cách tới x = 3)."
   ],
   "explain": "(2, 1) → (1, 2) → (1 + 4, 2 − 1) = (5, 1) → qua x = 3: cách gương 2 ô nên ảnh có x = 3 − 2 = 1. Kết quả (1, 1).",
   "why": null
  }
 ],
 "14.5": [
  {
   "id": "wb-14.5-01",
   "type": "text",
   "diff": 1,
   "skill": "rotate-180",
   "source": "wb",
   "lang": "en",
   "q": "Rotate the point (5, 3) through 180° about the centre (3, 3). Write the coordinates of its image.",
   "svg": null,
   "choices": null,
   "answer": "(1, 3)",
   "accept": [
    "1,3",
    "(1;3)",
    "1 3"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Điểm (5, 3) cách tâm bao nhiêu ô theo chiều ngang, và có cùng tung độ với tâm không?",
    "Quay 180° đưa điểm sang phía đối diện qua tâm, cách tâm cùng khoảng.",
    "3 − 2 = ?"
   ],
   "explain": "(5, 3) nằm bên phải tâm 2 ô trên cùng hàng. Quay 180° được điểm bên trái tâm 2 ô: (1, 3).",
   "why": null
  },
  {
   "id": "wb-14.5-02",
   "type": "text",
   "diff": 2,
   "skill": "rotate-90cw",
   "source": "wb",
   "lang": "en",
   "q": "Rotate the point (5, 4) through 90° clockwise about the centre (2, 3). Write the coordinates of its image.",
   "svg": null,
   "choices": null,
   "answer": "(3, 0)",
   "accept": [
    "3,0",
    "(3;0)",
    "3 0"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "So với tâm (2, 3), điểm (5, 4) lệch bao nhiêu sang phải và bao nhiêu lên trên?",
    "Quay 90° theo chiều kim đồng hồ: 'phải 3, lên 1' trở thành 'xuống 3, phải 1' (tức xuống 3 so với tâm và phải 1).",
    "Từ tâm (2, 3): phải 1, xuống 3."
   ],
   "explain": "Độ lệch so với tâm (2, 3) là (+3, +1). Quay 90° theo chiều kim đồng hồ: (x, y) → (y, −x) = (+1, −3). Ảnh = (2 + 1, 3 − 3) = (3, 0).",
   "why": null
  },
  {
   "id": "wb-14.5-03",
   "type": "text",
   "diff": 2,
   "skill": "rotate-90acw",
   "source": "wb",
   "lang": "en",
   "q": "Rotate the point (6, 4) through 90° anticlockwise about the centre (3, 2). Write the coordinates of its image.",
   "svg": null,
   "choices": null,
   "answer": "(1, 5)",
   "accept": [
    "1,5",
    "(1;5)",
    "1 5"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "So với tâm (3, 2), điểm (6, 4) lệch bao nhiêu sang phải và lên trên?",
    "Quay 90° ngược chiều kim đồng hồ: lệch 'phải 3, lên 2' trở thành 'trái 2, lên 3'.",
    "Từ tâm (3, 2): trái 2, lên 3."
   ],
   "explain": "Độ lệch (+3, +2). Quay 90° ngược chiều kim đồng hồ: (x, y) → (−y, x) = (−2, +3). Ảnh = (3 − 2, 2 + 3) = (1, 5).",
   "why": null
  },
  {
   "id": "wb-14.5-04",
   "type": "text",
   "diff": 2,
   "skill": "rotate-180-b",
   "source": "wb",
   "lang": "en",
   "q": "Rotate the point (2, 3) through 180° about the centre (4, 5). Write the coordinates of its image.",
   "svg": null,
   "choices": null,
   "answer": "(6, 7)",
   "accept": [
    "6,7",
    "(6;7)",
    "6 7"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Từ (2, 3) tới tâm (4, 5), em đi bao nhiêu theo x và theo y?",
    "Quay 180° nghĩa là tâm là trung điểm của điểm và ảnh của nó.",
    "Từ tâm đi thêm đúng bước đó."
   ],
   "explain": "Từ (2, 3) tới tâm (4, 5): +2 và +2. Đi thêm bước đó từ tâm: (6, 7). Kiểm tra: trung điểm của (2, 3) và (6, 7) là (4, 5).",
   "why": null
  },
  {
   "id": "wb-14.5-05",
   "type": "mc",
   "diff": 3,
   "skill": "rotate-direction",
   "source": "wb",
   "lang": "en",
   "q": "The point (1, 3) is rotated 90° clockwise about the centre (3, 3). Which point is the image?",
   "svg": null,
   "choices": [
    "(3, 1)",
    "(3, 5)",
    "(5, 3)",
    "(1, 3)"
   ],
   "answer": 1,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Điểm (1, 3) nằm bên trái tâm. Kim đồng hồ quay từ hướng 'trái' về hướng nào (trái → ? )?",
    "Hãy nghĩ tới đồng hồ: từ 9 giờ quay theo chiều kim đồng hồ thì tới 12 giờ hay 6 giờ?",
    "(3, 1) là kết quả của quay ngược chiều; (5, 3) là quay 180°."
   ],
   "explain": "(1, 3) cách tâm 2 ô về bên trái. Quay 90° theo chiều kim đồng hồ đưa hướng 'trái' thành hướng 'lên': ảnh cách tâm 2 ô phía trên: (3, 5). (3, 1) là quay ngược chiều; (5, 3) là quay 180°.",
   "why": null
  },
  {
   "id": "wb-14.5-06", "howto": "Find the fixed point that triangle A turns around to land on triangle B. Enter its coordinates.",
   "type": "text",
   "diff": 3,
   "skill": "find-centre-180",
   "source": "wb",
   "lang": "en",
   "q": "Triangle A is rotated through 180° to triangle B. The vertex (2, 1) of A is mapped to the vertex (4, 3) of B. Write the coordinates of the centre of rotation.",
   "svg": null,
   "choices": null,
   "answer": "(3, 2)",
   "accept": [
    "3,2",
    "(3;2)",
    "3 2"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Trong phép quay 180°, tâm quay có vị trí thế nào so với điểm và ảnh của nó?",
    "Tâm quay là trung điểm của đoạn nối điểm và ảnh.",
    "Tính trung điểm của (2, 1) và (4, 3)."
   ],
   "explain": "Tâm quay 180° là trung điểm của điểm và ảnh: ((2 + 4) ÷ 2, (1 + 3) ÷ 2) = (3, 2).",
   "why": null
  },
  {
   "id": "wb-14.5-07", "howto": "Find the fixed point that P turns around to reach P'. Enter its coordinates.",
   "type": "text",
   "diff": 3,
   "skill": "find-centre-90",
   "source": "wb",
   "lang": "en",
   "q": "A rotation of 90° clockwise maps P(2, 6) to P'(5, 3). Write the coordinates of the centre of rotation.",
   "svg": null,
   "choices": null,
   "answer": "(2, 3)",
   "accept": [
    "2,3",
    "(2;3)",
    "2 3"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tâm cách đều P và P'. Nếu tâm là C(a, b), độ lệch của P so với C là (2 − a, 6 − b).",
    "Quay 90° theo chiều kim đồng hồ biến độ lệch (u, v) thành (v, −u). Viết độ lệch của P' so với C.",
    "Cho độ lệch này bằng (5 − a, 3 − b) để có hai phương trình, rồi giải a và b."
   ],
   "explain": "Độ lệch của P so với C là (2 − a, 6 − b); sau khi quay 90° theo chiều kim đồng hồ là (6 − b, −(2 − a)). Cho bằng (5 − a, 3 − b): 5 − a = 6 − b và 3 − b = a − 2, tức a − b = −1 và a + b = 5. Vậy a = 2, b = 3, tâm là (2, 3).",
   "why": null
  },
  {
   "id": "wb-14.5-08",
   "type": "text",
   "diff": 3,
   "skill": "rotate-sequence",
   "source": "wb",
   "lang": "en",
   "q": "The point (2, 5) is rotated 90° clockwise about the origin, then the image is rotated through 180° about the centre (1, 1). Write the coordinates of the final image.",
   "svg": null,
   "choices": null,
   "answer": "(-3, 4)",
   "accept": [
    "-3,4",
    "(-3;4)",
    "-3 4"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Bước 1: quay (2, 5) 90° theo chiều kim đồng hồ quanh O. Quy tắc quanh gốc: (x, y) → (y, −x). Ra điểm nào?",
    "Bước 2: quay điểm đó 180° quanh (1, 1): (1, 1) là trung điểm của điểm và ảnh.",
    "Ảnh = (2 × 1 − x, 2 × 1 − y)."
   ],
   "explain": "Bước 1: (2, 5) → (5, −2). Bước 2: tâm (1, 1) là trung điểm nên ảnh = (2 − 5, 2 − (−2)) = (−3, 4).",
   "why": null
  },
  {
   "id": "wb-14.5-09",
   "type": "mc",
   "diff": 2,
   "skill": "rotate-180-direction",
   "source": "wb",
   "lang": "en",
   "q": "A shape is rotated through 180° clockwise about the point C. Another copy of the shape is rotated through 180° anticlockwise about the same point C. What is true about the two images?",
   "svg": null,
   "choices": [
    "They are in exactly the same position",
    "They are reflections of each other in a line through C",
    "They are 180° apart, so one is the mirror image of the other in C",
    "One is twice as far from C as the other"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Quay theo chiều kim đồng hồ 180° là quay nửa vòng. Quay ngược chiều 180° cũng là nửa vòng?",
    "Cả hai cách đều đưa mỗi điểm sang phía đối diện của C. Điểm sẽ nằm ở đâu?",
    "Hai ảnh có khác nhau về vị trí không?"
   ],
   "explain": "Quay 180° là nửa vòng, nên theo chiều nào cũng cho cùng một kết quả: mỗi điểm sang phía đối diện qua C, cùng khoảng cách. Hai ảnh trùng nhau.",
   "why": null
  },
  {
   "id": "wb-14.5-10",
   "type": "num",
   "diff": 2,
   "skill": "rotate-combine",
   "source": "wb",
   "lang": "en",
   "q": "A shape is rotated 90° clockwise about the point C, and then the image is rotated 90° clockwise about the same point C again. What single rotation, in degrees, gives the same result?",
   "svg": null,
   "choices": null,
   "answer": 180,
   "accept": [],
   "tol": 0,
   "unitLabel": "°",
   "hints": [
    "Hai phép quay cùng chiều quanh cùng tâm: góc quay có cộng lại không?",
    "90° + 90° = ?",
    "Phép quay đó cùng chiều kim đồng hồ."
   ],
   "explain": "Hai phép quay cùng chiều, cùng tâm thì cộng góc: 90° + 90° = 180° (theo chiều kim đồng hồ).",
   "why": null
  }
 ],
 "14.6": [
  {
   "id": "wb-14.6-01",
   "type": "num",
   "diff": 1,
   "skill": "enlarge-lengths",
   "source": "wb",
   "lang": "en",
   "q": "A rectangle is 2 cm by 5 cm. It is enlarged with scale factor 3. How long is the longer side of the image?",
   "svg": null,
   "choices": null,
   "answer": 15,
   "accept": [],
   "tol": 0,
   "unitLabel": "cm",
   "hints": [
    "Hệ số tỉ lệ 3 nhân độ dài mỗi cạnh với số nào?",
    "Cạnh dài của vật là bao nhiêu?",
    "5 × 3 = ?"
   ],
   "explain": "Mọi độ dài được nhân với hệ số 3: cạnh dài 5 cm thành 5 × 3 = 15 cm (cạnh ngắn thành 6 cm).",
   "why": null
  },
  {
   "id": "wb-14.6-02",
   "type": "text",
   "diff": 1,
   "skill": "enlarge-point",
   "source": "wb",
   "lang": "en",
   "q": "The point P(4, 3) is enlarged with scale factor 3 about the centre of enlargement C(2, 1). Write the coordinates of the image of P.",
   "svg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" font-family=\"sans-serif\" font-size=\"8\"><line x1=\"12\" y1=\"186\" x2=\"12\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"34\" y1=\"186\" x2=\"34\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"56\" y1=\"186\" x2=\"56\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"78\" y1=\"186\" x2=\"78\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"100\" y1=\"186\" x2=\"100\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"122\" y1=\"186\" x2=\"122\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"144\" y1=\"186\" x2=\"144\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"166\" y1=\"186\" x2=\"166\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"188\" y1=\"186\" x2=\"188\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"210\" y1=\"186\" x2=\"210\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"210\" y2=\"186\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"164\" x2=\"210\" y2=\"164\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"142\" x2=\"210\" y2=\"142\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"120\" x2=\"210\" y2=\"120\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"98\" x2=\"210\" y2=\"98\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"76\" x2=\"210\" y2=\"76\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"54\" x2=\"210\" y2=\"54\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"32\" x2=\"210\" y2=\"32\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"10\" x2=\"210\" y2=\"10\" stroke-opacity=\"0.18\"/><line x1=\"12\" y1=\"186\" x2=\"210\" y2=\"186\" stroke-width=\"1.4\"/><line x1=\"12\" y1=\"186\" x2=\"12\" y2=\"10\" stroke-width=\"1.4\"/><text x=\"31\" y=\"195\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"53\" y=\"195\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"75\" y=\"195\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"97\" y=\"195\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"119\" y=\"195\" fill=\"currentColor\" stroke=\"none\">5</text><text x=\"141\" y=\"195\" fill=\"currentColor\" stroke=\"none\">6</text><text x=\"163\" y=\"195\" fill=\"currentColor\" stroke=\"none\">7</text><text x=\"185\" y=\"195\" fill=\"currentColor\" stroke=\"none\">8</text><text x=\"207\" y=\"195\" fill=\"currentColor\" stroke=\"none\">9</text><text x=\"2\" y=\"167\" fill=\"currentColor\" stroke=\"none\">1</text><text x=\"2\" y=\"145\" fill=\"currentColor\" stroke=\"none\">2</text><text x=\"2\" y=\"123\" fill=\"currentColor\" stroke=\"none\">3</text><text x=\"2\" y=\"101\" fill=\"currentColor\" stroke=\"none\">4</text><text x=\"2\" y=\"79\" fill=\"currentColor\" stroke=\"none\">5</text><text x=\"2\" y=\"57\" fill=\"currentColor\" stroke=\"none\">6</text><text x=\"2\" y=\"35\" fill=\"currentColor\" stroke=\"none\">7</text><text x=\"2\" y=\"13\" fill=\"currentColor\" stroke=\"none\">8</text><circle cx=\"56\" cy=\"164\" r=\"2.8\" fill=\"currentColor\"/><text x=\"60\" y=\"160\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">C</text><circle cx=\"100\" cy=\"120\" r=\"2.8\" fill=\"currentColor\"/><text x=\"104\" y=\"116\" fill=\"currentColor\" stroke=\"none\" font-size=\"10\" font-weight=\"bold\">P</text></svg>",
   "choices": null,
   "answer": "(8, 7)",
   "accept": [
    "8,7",
    "(8;7)",
    "8 7"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Từ C tới P, em đi bao nhiêu ô sang phải và lên trên?",
    "Nhân cả hai số đó với hệ số tỉ lệ 3.",
    "Từ C đi đúng khoảng mới đó."
   ],
   "explain": "Từ C(2, 1) tới P(4, 3): phải 2, lên 2. Nhân 3: phải 6, lên 6. Ảnh = (2 + 6, 1 + 6) = (8, 7).",
   "why": null
  },
  {
   "id": "wb-14.6-03",
   "type": "text",
   "diff": 2,
   "skill": "enlarge-vertex",
   "source": "wb",
   "lang": "en",
   "q": "A triangle has vertices (2, 1), (2, 4) and (4, 2). It is enlarged with scale factor 3 about the centre (1, 2). Write the image of the vertex (2, 4).",
   "svg": null,
   "choices": null,
   "answer": "(4, 8)",
   "accept": [
    "4,8",
    "(4;8)",
    "4 8"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Từ tâm (1, 2) tới đỉnh (2, 4): đi sang phải bao nhiêu và lên bao nhiêu?",
    "Nhân cả hai số với 3.",
    "Từ tâm đi đúng khoảng mới đó."
   ],
   "explain": "Từ tâm (1, 2) tới (2, 4): phải 1, lên 2. Nhân 3: phải 3, lên 6. Ảnh = (1 + 3, 2 + 6) = (4, 8).",
   "why": null
  },
  {
   "id": "wb-14.6-04",
   "type": "text",
   "diff": 2,
   "skill": "enlarge-vertex",
   "source": "wb",
   "lang": "en",
   "q": "For the same triangle and enlargement (centre (1, 2), scale factor 3), write the image of the vertex (4, 2).",
   "svg": null,
   "choices": null,
   "answer": "(10, 2)",
   "accept": [
    "10,2",
    "(10;2)",
    "10 2"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Đỉnh (4, 2) và tâm (1, 2) có cùng tung độ không?",
    "Từ tâm tới đỉnh đi sang phải 3 và lên 0. Nhân với 3.",
    "Từ tâm đi sang phải theo khoảng mới và lên 0."
   ],
   "explain": "Từ tâm (1, 2) tới (4, 2): phải 3, lên 0. Nhân 3: phải 9, lên 0. Ảnh = (1 + 9, 2 + 0) = (10, 2).",
   "why": null
  },
  {
   "id": "wb-14.6-05",
   "type": "mc",
   "diff": 1,
   "skill": "invariant-centre",
   "source": "wb",
   "lang": "en",
   "q": "A shape is enlarged. Which point stays in the same place (is invariant)?",
   "svg": null,
   "choices": [
    "The centre of enlargement",
    "The vertex of the shape closest to the origin",
    "The midpoint of the shape",
    "No point stays in the same place"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Khoảng cách từ tâm phóng to tới chính nó là bao nhiêu?",
    "Nhân khoảng cách đó với hệ số tỉ lệ thì được bao nhiêu?",
    "Vậy điểm nào không di chuyển?"
   ],
   "explain": "Mọi điểm đều bị đẩy ra xa tâm theo hệ số k, trừ chính tâm (khoảng cách 0 × k = 0). Vậy tâm phóng to là điểm bất biến.",
   "why": null
  },
  {
   "id": "wb-14.6-06",
   "type": "mc",
   "diff": 2,
   "skill": "enlarge-add-vs-multiply",
   "source": "wb",
   "lang": "en",
   "q": "A trapezium is enlarged with scale factor 3. One vertex is 2 squares right and 1 square up from the centre of enlargement. Where is its image?",
   "svg": null,
   "choices": [
    "6 squares right and 3 squares up from the centre",
    "5 squares right and 4 squares up from the centre",
    "2 squares right and 1 square up from the centre",
    "3 squares right and 3 squares up from the centre"
   ],
   "answer": 0,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Hệ số tỉ lệ 3 là phép cộng thêm 3 hay phép nhân với 3?",
    "Khoảng cách từ tâm theo mỗi hướng phải được làm gì?",
    "2 × 3 và 1 × 3 là bao nhiêu?"
   ],
   "explain": "Phép phóng to nhân khoảng cách từ tâm với hệ số: 2 × 3 = 6 ô sang phải, 1 × 3 = 3 ô lên trên. Đáp án 5 và 4 là lỗi cộng thêm 3 thay vì nhân.",
   "why": null
  },
  {
   "id": "wb-14.6-07", "howto": "Find the centre of enlargement: the fixed point that the enlargement is measured from. Enter its coordinates.",
   "type": "text",
   "diff": 3,
   "skill": "enlarge-find-centre",
   "source": "wb",
   "lang": "en",
   "q": "Vertex A(3, 2) of a shape is mapped to A'(7, 6) by an enlargement with scale factor 2. Write the coordinates of the centre of enlargement.",
   "svg": null,
   "choices": null,
   "answer": "(-1, -2)",
   "accept": [
    "-1,-2",
    "(-1;-2)",
    "-1 -2"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tâm phóng to, A và A' nằm trên cùng một đường thẳng. A' cách tâm gấp mấy lần A?",
    "Nếu tâm là C = (a, b) thì từ C tới A' dài gấp 2 lần từ C tới A. Viết hai phương trình cho a và b.",
    "7 − a = 2(3 − a) và 6 − b = 2(2 − b)."
   ],
   "explain": "A' cách tâm gấp 2 lần A: 7 − a = 2(3 − a) nên a = −1; 6 − b = 2(2 − b) nên b = −2. Tâm phóng to là (−1, −2). Kiểm tra: từ (−1, −2) tới A là phải 4, lên 4; nhân 2 được phải 8, lên 8, tới (7, 6).",
   "why": null
  },
  {
   "id": "wb-14.6-08", "howto": "Find the centre of enlargement that turns rectangle Q into rectangle P. Enter its coordinates.",
   "type": "text",
   "diff": 3,
   "skill": "enlarge-find-centre-rect",
   "source": "wb",
   "lang": "en",
   "q": "Rectangle Q has vertices (1, 1), (1, 2), (3, 2) and (3, 1). Rectangle P has vertices (1, 1), (1, 4), (7, 4) and (7, 1). P is an enlargement of Q with scale factor 3. Write the coordinates of the centre of enlargement.",
   "svg": null,
   "choices": null,
   "answer": "(1, 1)",
   "accept": [
    "1,1",
    "(1;1)",
    "1 1"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Đỉnh nào của Q có tọa độ giống một đỉnh của P?",
    "Điểm bất biến của phép phóng to là điểm nào?",
    "Hãy kiểm tra: nhân khoảng cách từ điểm đó tới các đỉnh khác của Q với 3 có ra các đỉnh của P không?"
   ],
   "explain": "(1, 1) có mặt ở cả Q và P nên nó không di chuyển: đó là điểm bất biến, tức tâm phóng to. Kiểm tra: (1, 2) → (1, 1 + 3×1) = (1, 4); (3, 2) → (1 + 3×2, 1 + 3×1) = (7, 4); (3, 1) → (7, 1). Đúng.",
   "why": null
  },
  {
   "id": "wb-14.6-09",
   "type": "mc",
   "diff": 3,
   "skill": "enlarge-area",
   "source": "wb",
   "lang": "en",
   "q": "A rectangle 3 cm by 2 cm is enlarged with scale factor 4. What is the area of the image?",
   "svg": null,
   "choices": [
    "24 cm²",
    "96 cm²",
    "48 cm²",
    "12 cm²"
   ],
   "answer": 1,
   "accept": [],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Tìm hai kích thước của ảnh trước (nhân mỗi cạnh với 4).",
    "Diện tích là tích hai cạnh. Tính tích hai kích thước mới.",
    "Hãy so sánh với 3 × 2 × 4: diện tích có bị nhân với 4 không?"
   ],
   "explain": "Ảnh có kích thước 12 cm × 8 cm, diện tích 96 cm². Diện tích gấp 96 ÷ 6 = 16 = 4² lần diện tích vật (6 cm²), không phải gấp 4 lần. Đáp án 24 là lỗi nhân diện tích với hệ số 4.",
   "why": null
  },
  {
   "id": "wb-14.6-10",
   "type": "text",
   "diff": 3,
   "skill": "enlarge-then-reflect",
   "source": "wb",
   "lang": "en",
   "q": "The point (2, 2) is enlarged with scale factor 3 about the centre (1, 1), and the image is then reflected in the line y = 2. Write the coordinates of the final image.",
   "svg": null,
   "choices": null,
   "answer": "(4, 0)",
   "accept": [
    "4,0",
    "(4;0)",
    "4 0"
   ],
   "tol": 0,
   "unitLabel": "",
   "hints": [
    "Bước 1: từ tâm (1, 1) tới (2, 2) là phải 1, lên 1. Nhân 3 rồi tìm ảnh.",
    "Bước 2: ảnh cách đường y = 2 bao nhiêu đơn vị, và ở phía nào?",
    "Lấy đối xứng sang phía bên kia cùng khoảng cách."
   ],
   "explain": "Bước 1: phải 3, lên 3 từ (1, 1) nên ảnh là (4, 4). Bước 2: (4, 4) cách y = 2 là 2 đơn vị phía trên; ảnh đối xứng cách 2 đơn vị phía dưới: y = 0. Kết quả (4, 0).",
   "why": null
  }
 ]
},
  tr: {
 "en": {
  "q.wb-14.1-01.hints": [
   "From which direction, and in which direction of turning, is a bearing measured?",
   "Is the angle in the diagram already measured clockwise from north?",
   "Write it with three figures, then enter the number of degrees."
  ],
  "q.wb-14.1-01.explain": "A bearing is measured clockwise from north. The angle in the diagram is already measured that way, so the bearing of B from A is 080°.",
  "q.wb-14.1-02.hints": [
   "North is 000°; what is east?",
   "Each extra right angle clockwise adds how many degrees?",
   "From north turn clockwise through east and south to reach west."
  ],
  "q.wb-14.1-02.explain": "North 000°, east 090°, south 180°, west 270°. So due west is 270°.",
  "q.wb-14.1-03.hints": [
   "Are the north lines at X and at Y parallel?",
   "Looking from Y to X is exactly the opposite direction: how many degrees apart?",
   "105° + 180° = ?"
  ],
  "q.wb-14.1-03.explain": "Opposite directions differ by 180°. Since 105° < 180° we add: 105° + 180° = 285°.",
  "q.wb-14.1-04.hints": [
   "Is 230° bigger or smaller than 180°?",
   "If it is bigger than 180°, do you add or subtract 180° (to keep the answer below 360°)?",
   "230° − 180° = ?"
  ],
  "q.wb-14.1-04.explain": "230° > 180° so subtract 180°: 230° − 180° = 50°, written 050°.",
  "q.wb-14.1-05.hints": [
   "In which direction of turning is a bearing always measured?",
   "Did Ivan use the anticlockwise angle or the clockwise angle?",
   "Which of 152° and 208° is measured clockwise?"
  ],
  "q.wb-14.1-05.explain": "A bearing is always measured CLOCKWISE from north. Ivan used the anticlockwise angle (152°). The correct angle is 208°, so the bearing of B from A is 208°.",
  "q.wb-14.1-06.hints": [
   "First, what is the bearing of A from B (reverse 070°)?",
   "Does turning anticlockwise make a bearing bigger or smaller?",
   "The bearing of BA minus the angle ABC."
  ],
  "q.wb-14.1-06.explain": "Bearing of A from B: 070° + 180° = 250°. Turning 100° anticlockwise reduces the bearing: 250° − 100° = 150°.",
  "q.wb-14.1-07.hints": [
   "Walking clockwise round the hexagon, you turn right through the exterior angle at each vertex. What is it (180° − 120°)?",
   "Each right turn increases the bearing by how many degrees?",
   "AB is 090°. Add the exterior angle for BC, then add it again for CD."
  ],
  "q.wb-14.1-07.explain": "Exterior angle = 180° − 120° = 60°. AB = 090°, BC = 090° + 60° = 150°, CD = 150° + 60° = 210°. The bearing of D from C is 210°.",
  "q.wb-14.1-08.hints": [
   "Does EB join two vertices through the centre? Which side of the hexagon is it parallel to?",
   "Is EB parallel to CD or to AF? Use that side's bearing.",
   "FA has bearing 030°. Which direction from E is the same as FA?"
  ],
  "q.wb-14.1-08.explain": "Side bearings: AB 090°, BC 150°, CD 210°, DE 270°, EF 330°, FA 030°. EB is parallel to FA and points the same way, so the bearing of B from E is 030°. Zara is correct.",
  "q.wb-14.1-09.hints": [
   "By how many degrees do these two bearings differ?",
   "If two directions differ by 180°, are they on one straight line or at right angles?",
   "From A, B is one way and C the opposite way. So which point is in the middle?"
  ],
  "q.wb-14.1-09.explain": "305° − 125° = 180°, so AB and AC point in exactly opposite directions from A. So B, A, C are in a straight line with A between B and C.",
  "q.wb-14.2-01.hints": [
   "Is the segment horizontal or vertical? What is the x-coordinate of the midpoint?",
   "The y-coordinates are 3 and 7. Which number is halfway between them?",
   "(3 + 7) ÷ 2 = ?"
  ],
  "q.wb-14.2-01.explain": "The x-coordinate stays 2. The y-coordinate: (3 + 7) ÷ 2 = 5. The midpoint is (2, 5).",
  "q.wb-14.2-02.hints": [
   "The x-coordinate of the midpoint is the mean of the two x-coordinates. What are they?",
   "Do the same for the y-coordinates: the mean of 8 and 2.",
   "What are (3 + 9) ÷ 2 and (8 + 2) ÷ 2?"
  ],
  "q.wb-14.2-02.explain": "x = (3 + 9) ÷ 2 = 6 and y = (8 + 2) ÷ 2 = 5. The midpoint is (6, 5).",
  "q.wb-14.2-03.hints": [
   "Add the two x-coordinates −4 and 6. What do you get?",
   "Add the two y-coordinates 9 and −3, then halve.",
   "What are (−4 + 6) ÷ 2 and (9 + (−3)) ÷ 2?"
  ],
  "q.wb-14.2-03.explain": "x = (−4 + 6) ÷ 2 = 1; y = (9 − 3) ÷ 2 = 3. The midpoint is (1, 3).",
  "q.wb-14.2-04.hints": [
   "Is the sum of the x-coordinates 3 and 8 even or odd? Will halving give a whole number?",
   "The result can be a decimal. Work out (3 + 8) ÷ 2.",
   "Do the same for (2 + 7) ÷ 2."
  ],
  "q.wb-14.2-04.explain": "x = (3 + 8) ÷ 2 = 5.5 and y = (2 + 7) ÷ 2 = 4.5. The midpoint is (5.5, 4.5).",
  "q.wb-14.2-05.hints": [
   "Check the x-coordinate: what is (−6 + 2) ÷ 2?",
   "Hassan seems to have used (5 − (−3)) ÷ 2. Should you SUBTRACT?",
   "Does a midpoint use the sum or the difference of the two y-coordinates?"
  ],
  "q.wb-14.2-05.explain": "x = (−6 + 2) ÷ 2 = −2 is right. But y must be the mean: (5 + (−3)) ÷ 2 = 1. Hassan used the difference (5 − (−3)) ÷ 2 = 4, which is half the distance, not the midpoint's coordinate. The correct midpoint is (−2, 1).",
  "q.wb-14.2-06.hints": [
   "From the end (8, 4) to the midpoint (5, −1), how far do you move in x and in y?",
   "The other end is the same distance from the midpoint but in the opposite direction.",
   "From (5, −1) make the same move again."
  ],
  "q.wb-14.2-06.explain": "From (8, 4) to (5, −1): x decreases by 3 and y decreases by 5. Repeat that move from the midpoint: (5 − 3, −1 − 5) = (2, −6). Check: ((8 + 2) ÷ 2, (4 − 6) ÷ 2) = (5, −1).",
  "q.wb-14.2-07.hints": [
   "AC is a diagonal of the square. Where is the centre on that diagonal?",
   "The centre is the midpoint of AC.",
   "Work out ((−4 + (−1)) ÷ 2, (−2 + 3) ÷ 2)."
  ],
  "q.wb-14.2-07.explain": "The diagonals of a square meet at its centre, which is the midpoint of AC: ((−4 − 1) ÷ 2, (−2 + 3) ÷ 2) = (−2.5, 0.5).",
  "q.wb-14.2-08.hints": [
   "Find C first: the midpoint of A and B.",
   "Then find D, the midpoint of B and C, and then E, the midpoint of C and D.",
   "Each step uses the same 'mean' rule."
  ],
  "q.wb-14.2-08.explain": "C = (6, 4). D is the midpoint of B(0, 8) and C(6, 4): (3, 6). E is the midpoint of C(6, 4) and D(3, 6): (4.5, 5).",
  "q.wb-14.2-09.hints": [
   "Add the two x-coordinates 2.8 and −3.6. What do you get?",
   "Add the two y-coordinates 6.4 and −1.2.",
   "Divide each sum by 2."
  ],
  "q.wb-14.2-09.explain": "x = (2.8 + (−3.6)) ÷ 2 = −0.8 ÷ 2 = −0.4; y = (6.4 + (−1.2)) ÷ 2 = 5.2 ÷ 2 = 2.6. The midpoint is (−0.4, 2.6).",
  "q.wb-14.3-01.hints": [
   "Does the top number of a column vector give a horizontal or a vertical move?",
   "A negative horizontal number means left or right?",
   "A positive second number means up or down?"
  ],
  "q.wb-14.3-01.explain": "The top number is the horizontal move: −3 means 3 units left. The bottom number is the vertical move: 2 means 2 units up.",
  "q.wb-14.3-02.hints": [
   "Add the top number of the vector to the x-coordinate. Work out 2 + (−4).",
   "Add the bottom number to the y-coordinate. Work out −3 + 5.",
   "Put the two results together as (x, y)."
  ],
  "q.wb-14.3-02.explain": "A' = (2 + (−4), −3 + 5) = (−2, 2).",
  "q.wb-14.3-03.hints": [
   "The vector (−2, −3) means how far left and how far down?",
   "You only need to move the vertex C(4, 3).",
   "C' = (4 + (−2), 3 + (−3))."
  ],
  "q.wb-14.3-03.explain": "C' = (4 − 2, 3 − 3) = (2, 0).",
  "q.wb-14.3-04.hints": [
   "From P to P', how much does the x-coordinate change (new minus old)?",
   "How much does the y-coordinate change?",
   "Write the two changes as (across, up)."
  ],
  "q.wb-14.3-04.explain": "Across: −1 − 2 = −3. Up: 1 − 5 = −4. The vector is (−3, −4).",
  "q.wb-14.3-05.hints": [
   "To get back, you must undo each move. What does the horizontal −1 become?",
   "What does the vertical −9 become?",
   "Write the two sign-changed numbers as the vector."
  ],
  "q.wb-14.3-05.explain": "The reverse vector has the same sizes but both signs changed: (−1, −9) → (1, 9).",
  "q.wb-14.3-06.hints": [
   "In a column vector, which direction does the top number give?",
   "Did Adah move 3 squares horizontally or vertically? What does the vector say?",
   "Read the vector again: across first, then up."
  ],
  "q.wb-14.3-06.explain": "The vector (2, 3) means 2 squares right and 3 squares up. Adah swapped the order (3 right, 2 up). Order matters because each number belongs to one direction.",
  "q.wb-14.3-07.hints": [
   "You only need to move the vertex J(5, −3).",
   "Add −4 to the x-coordinate and 6 to the y-coordinate.",
   "J' = (5 + (−4), −3 + 6)."
  ],
  "q.wb-14.3-07.explain": "J' = (5 + (−4), −3 + 6) = (1, 3).",
  "q.wb-14.3-08.hints": [
   "First find the translation vector from R(1, 1) to R'(4, 2).",
   "The vector is (3, 1). Apply it to T(−3, −3).",
   "T' = (−3 + 3, −3 + 1)."
  ],
  "q.wb-14.3-08.explain": "Vector: (4 − 1, 2 − 1) = (3, 1). T' = (−3 + 3, −3 + 1) = (0, −2).",
  "q.wb-14.3-09.hints": [
   "What is the total horizontal move after the two steps?",
   "What is the total vertical move, −4 + 3?",
   "Put the two totals together as a vector."
  ],
  "q.wb-14.3-09.explain": "Add the components: across 2 + 2 = 4, up −4 + 3 = −1. The single vector is (4, −1).",
  "q.wb-14.3-10.hints": [
   "A translation slides the shape. Is the shape turned or flipped?",
   "Does the shape get bigger or smaller?",
   "Which one property does change when you slide it?"
  ],
  "q.wb-14.3-10.explain": "A translation changes only the position. The size, orientation and angles stay the same (object and image are congruent).",
  "q.wb-14.4-01.hints": [
   "Which value do the two points share: the x-coordinate or the y-coordinate?",
   "Does a horizontal line start x = ... or y = ...?",
   "What is that shared value?"
  ],
  "q.wb-14.4-01.explain": "Both points have y-coordinate 3, so the line is horizontal. A horizontal line has an equation of the form y = number, so y = 3.",
  "q.wb-14.4-02.hints": [
   "How many squares is (2, 5) from the line x = 4, and on which side?",
   "The image is on the other side of the mirror, the same distance away.",
   "From x = 4 go 2 more squares to the right."
  ],
  "q.wb-14.4-02.explain": "(2, 5) is 2 squares left of the mirror x = 4. The image is 2 squares to the right: x = 6, and y stays 5. The image is (6, 5).",
  "q.wb-14.4-03.hints": [
   "Is the mirror y = 3 horizontal or vertical? Is (5, 1) below or above it?",
   "How many squares from the mirror is the point?",
   "The image is above the mirror at the same distance."
  ],
  "q.wb-14.4-03.explain": "(5, 1) is 2 squares below the mirror y = 3. The image is 2 squares above it: y = 5, x stays 5. The image is (5, 5).",
  "q.wb-14.4-04.hints": [
   "How many squares is it from x = −4 to the mirror x = −1?",
   "Go the same number of squares on from the mirror, to the other side.",
   "−1 + 3 = ?"
  ],
  "q.wb-14.4-04.explain": "Distance to the mirror: −1 − (−4) = 3. The image has x = −1 + 3 = 2, and y stays −2. The image is (2, −2).",
  "q.wb-14.4-05.hints": [
   "How many units is it from y = 4 to the mirror y = 1.5?",
   "Go the same distance on from the mirror, downwards.",
   "1.5 − 2.5 = ?"
  ],
  "q.wb-14.4-05.explain": "Distance to the mirror: 4 − 1.5 = 2.5. The image has y = 1.5 − 2.5 = −1, and x stays 2. The image is (2, −1).",
  "q.wb-14.4-06.hints": [
   "The mirror x = 4 is vertical. So which coordinate changes: x or y?",
   "How far is (1, 5) from the mirror? How far, and on which side, is its image?",
   "Is (1, 3) a reflection in a horizontal line? And (4, 5) lies on the mirror itself."
  ],
  "q.wb-14.4-06.explain": "(1, 5) is 3 squares from the mirror x = 4, so the image has x = 4 + 3 = 7 and y stays 5: (7, 5). (4, 5) is a point on the mirror; (8, 5) comes from doubling 4 and forgetting to subtract x; (1, 3) is the image in the horizontal line y = 4.",
  "q.wb-14.4-07.hints": [
   "With the rule (x, y) → (−y, −x), the new first coordinate is −y. What is y for F?",
   "The new second coordinate is −x. What is x for F?",
   "Put the two numbers together."
  ],
  "q.wb-14.4-07.explain": "F(−5, 1): x = −5, y = 1. F' = (−y, −x) = (−1, 5).",
  "q.wb-14.4-08.hints": [
   "If a point is on the mirror line, where is its image?",
   "How are the x- and y-coordinates related for a point on the line y = x?",
   "Which choice has x = y?"
  ],
  "q.wb-14.4-08.explain": "A point on the mirror line does not move. A point on y = x has x = y, which is (5, 5). The rule for reflecting in y = x is to swap x and y: (3, 4) → (4, 3), (−2, 2) → (2, −2), (0, 5) → (5, 0).",
  "q.wb-14.4-09.hints": [
   "The x-coordinate does not change, so is the mirror horizontal or vertical?",
   "The mirror passes through the midpoint of P and P'.",
   "(−4 + 2) ÷ 2 = ?"
  ],
  "q.wb-14.4-09.explain": "The x-coordinate does not change, so the mirror is a horizontal line y = number. The number is the mean of the y-coordinates: (−4 + 2) ÷ 2 = −1. The equation is y = −1.",
  "q.wb-14.4-10.hints": [
   "Step 1: reflecting in y = x swaps x and y. What does (2, 1) become?",
   "Step 2: add the vector (4, −1) to that point.",
   "Step 3: reflect that point in x = 3 (find its distance from x = 3)."
  ],
  "q.wb-14.4-10.explain": "(2, 1) → (1, 2) → (1 + 4, 2 − 1) = (5, 1) → in x = 3: it is 2 squares from the mirror, so the image has x = 3 − 2 = 1. The result is (1, 1).",
  "q.wb-14.5-01.hints": [
   "How many squares from the centre is (5, 3) horizontally, and does it have the same y as the centre?",
   "A 180° turn puts the point on the opposite side of the centre, the same distance away.",
   "3 − 2 = ?"
  ],
  "q.wb-14.5-01.explain": "(5, 3) is 2 squares right of the centre on the same row. A 180° turn gives the point 2 squares left of the centre: (1, 3).",
  "q.wb-14.5-02.hints": [
   "Relative to the centre (2, 3), how far right and how far up is (5, 4)?",
   "A 90° clockwise turn changes 'right 3, up 1' into 'down 3, right 1'.",
   "From the centre (2, 3): right 1, down 3."
  ],
  "q.wb-14.5-02.explain": "The offset from the centre (2, 3) is (+3, +1). A 90° clockwise turn maps (x, y) → (y, −x) = (+1, −3). Image = (2 + 1, 3 − 3) = (3, 0).",
  "q.wb-14.5-03.hints": [
   "Relative to the centre (3, 2), how far right and up is (6, 4)?",
   "A 90° anticlockwise turn changes 'right 3, up 2' into 'left 2, up 3'.",
   "From the centre (3, 2): left 2, up 3."
  ],
  "q.wb-14.5-03.explain": "The offset is (+3, +2). A 90° anticlockwise turn maps (x, y) → (−y, x) = (−2, +3). Image = (3 − 2, 2 + 3) = (1, 5).",
  "q.wb-14.5-04.hints": [
   "From (2, 3) to the centre (4, 5), how far do you go in x and in y?",
   "A 180° turn means the centre is the midpoint of the point and its image.",
   "From the centre, make exactly the same move again."
  ],
  "q.wb-14.5-04.explain": "From (2, 3) to the centre (4, 5): +2 and +2. Make that move again from the centre: (6, 7). Check: the midpoint of (2, 3) and (6, 7) is (4, 5).",
  "q.wb-14.5-05.hints": [
   "The point (1, 3) is to the left of the centre. Turning clockwise, which direction comes after 'left'?",
   "Think of a clock: from 9 o'clock turning clockwise do you reach 12 or 6?",
   "(3, 1) comes from an anticlockwise turn; (5, 3) is a 180° turn."
  ],
  "q.wb-14.5-05.explain": "(1, 3) is 2 squares left of the centre. A 90° clockwise turn takes 'left' to 'up': the image is 2 squares above the centre: (3, 5). (3, 1) is an anticlockwise turn; (5, 3) is a 180° turn.",
  "q.wb-14.5-06.hints": [
   "In a 180° rotation, where is the centre relative to a point and its image?",
   "The centre is the midpoint of the segment joining a point and its image.",
   "Find the midpoint of (2, 1) and (4, 3)."
  ],
  "q.wb-14.5-06.explain": "The centre of a 180° rotation is the midpoint of a point and its image: ((2 + 4) ÷ 2, (1 + 3) ÷ 2) = (3, 2).",
  "q.wb-14.5-07.hints": [
   "The centre is equally far from P and P'. If the centre is C(a, b), the offset of P from C is (2 − a, 6 − b).",
   "A 90° clockwise turn changes an offset (u, v) into (v, −u). Write the offset of P' from C.",
   "Set it equal to (5 − a, 3 − b) to get two equations, then solve for a and b."
  ],
  "q.wb-14.5-07.explain": "The offset of P from C is (2 − a, 6 − b); after a 90° clockwise turn it is (6 − b, −(2 − a)). Setting it equal to (5 − a, 3 − b): 5 − a = 6 − b and 3 − b = a − 2, so a − b = −1 and a + b = 5. Hence a = 2, b = 3 and the centre is (2, 3).",
  "q.wb-14.5-08.hints": [
   "Step 1: rotate (2, 5) 90° clockwise about O. The rule about the origin is (x, y) → (y, −x). What point do you get?",
   "Step 2: rotate that point 180° about (1, 1): (1, 1) is the midpoint of the point and its image.",
   "Image = (2 × 1 − x, 2 × 1 − y)."
  ],
  "q.wb-14.5-08.explain": "Step 1: (2, 5) → (5, −2). Step 2: the centre (1, 1) is the midpoint so the image = (2 − 5, 2 − (−2)) = (−3, 4).",
  "q.wb-14.5-09.hints": [
   "A 180° clockwise turn is a half-turn. Is a 180° anticlockwise turn also a half-turn?",
   "Both put each point on the opposite side of C. Where does each point end up?",
   "Do the two images differ in position?"
  ],
  "q.wb-14.5-09.explain": "A 180° turn is a half-turn, so either direction gives the same result: each point goes to the opposite side of C at the same distance. The two images coincide.",
  "q.wb-14.5-10.hints": [
   "Two turns in the same direction about the same centre: do the angles add?",
   "90° + 90° = ?",
   "The single rotation is also clockwise."
  ],
  "q.wb-14.5-10.explain": "Two rotations in the same direction about the same centre add their angles: 90° + 90° = 180° (clockwise).",
  "q.wb-14.6-01.hints": [
   "A scale factor of 3 multiplies every length by what?",
   "How long is the longer side of the object?",
   "5 × 3 = ?"
  ],
  "q.wb-14.6-01.explain": "Every length is multiplied by the scale factor 3: the 5 cm side becomes 5 × 3 = 15 cm (the short side becomes 6 cm).",
  "q.wb-14.6-02.hints": [
   "From C to P, how many squares right and up do you go?",
   "Multiply both numbers by the scale factor 3.",
   "From C, go that new distance."
  ],
  "q.wb-14.6-02.explain": "From C(2, 1) to P(4, 3): right 2, up 2. Times 3: right 6, up 6. Image = (2 + 6, 1 + 6) = (8, 7).",
  "q.wb-14.6-03.hints": [
   "From the centre (1, 2) to the vertex (2, 4): how far right and how far up?",
   "Multiply both numbers by 3.",
   "From the centre go that new distance."
  ],
  "q.wb-14.6-03.explain": "From the centre (1, 2) to (2, 4): right 1, up 2. Times 3: right 3, up 6. Image = (1 + 3, 2 + 6) = (4, 8).",
  "q.wb-14.6-04.hints": [
   "Do the vertex (4, 2) and the centre (1, 2) have the same y-coordinate?",
   "From the centre to the vertex is right 3, up 0. Multiply by 3.",
   "From the centre go right by the new distance and up 0."
  ],
  "q.wb-14.6-04.explain": "From the centre (1, 2) to (4, 2): right 3, up 0. Times 3: right 9, up 0. Image = (1 + 9, 2 + 0) = (10, 2).",
  "q.wb-14.6-05.hints": [
   "What is the distance from the centre of enlargement to itself?",
   "What do you get if you multiply that distance by the scale factor?",
   "So which point does not move?"
  ],
  "q.wb-14.6-05.explain": "Every point is pushed away from the centre by the factor k, except the centre itself (distance 0 × k = 0). So the centre of enlargement is the invariant point.",
  "q.wb-14.6-06.hints": [
   "Is a scale factor of 3 'add 3' or 'multiply by 3'?",
   "What must be done to the distance from the centre in each direction?",
   "What are 2 × 3 and 1 × 3?"
  ],
  "q.wb-14.6-06.explain": "An enlargement multiplies the distances from the centre by the scale factor: 2 × 3 = 6 squares right, 1 × 3 = 3 squares up. The answer 5 and 4 comes from adding 3 instead of multiplying.",
  "q.wb-14.6-07.hints": [
   "The centre, A and A' are on one straight line. How many times further from the centre is A' than A?",
   "If the centre is C = (a, b) then C to A' is twice C to A. Write two equations for a and b.",
   "7 − a = 2(3 − a) and 6 − b = 2(2 − b)."
  ],
  "q.wb-14.6-07.explain": "A' is twice as far from the centre as A: 7 − a = 2(3 − a) gives a = −1; 6 − b = 2(2 − b) gives b = −2. The centre is (−1, −2). Check: from (−1, −2) to A is right 4, up 4; doubled that is right 8, up 8, reaching (7, 6).",
  "q.wb-14.6-08.hints": [
   "Which vertex of Q has the same coordinates as a vertex of P?",
   "Which point of an enlargement is invariant?",
   "Check: if you multiply the distances from that point to the other vertices of Q by 3, do you get the vertices of P?"
  ],
  "q.wb-14.6-08.explain": "(1, 1) appears in both Q and P so it does not move: it is the invariant point, i.e. the centre of enlargement. Check: (1, 2) → (1, 1 + 3×1) = (1, 4); (3, 2) → (1 + 3×2, 1 + 3×1) = (7, 4); (3, 1) → (7, 1). Correct.",
  "q.wb-14.6-09.hints": [
   "Find the image's two dimensions first (multiply each side by 4).",
   "Area is the product of the two sides. Work out the product of the new dimensions.",
   "Compare with 3 × 2 × 4: is the area multiplied by 4?"
  ],
  "q.wb-14.6-09.explain": "The image measures 12 cm by 8 cm, so its area is 96 cm². The area is 96 ÷ 6 = 16 = 4² times the object's area (6 cm²), not 4 times. The answer 24 comes from multiplying the area by 4.",
  "q.wb-14.6-10.hints": [
   "Step 1: from the centre (1, 1) to (2, 2) is right 1, up 1. Multiply by 3 and find the image.",
   "Step 2: how far, and on which side, is that image from the line y = 2?",
   "Reflect it to the other side at the same distance."
  ],
  "q.wb-14.6-10.explain": "Step 1: right 3, up 3 from (1, 1) so the image is (4, 4). Step 2: (4, 4) is 2 units above y = 2; its reflection is 2 units below: y = 0. The result is (4, 0)."
 },
 "vi": {
    "q.wb-14.6-08.howto": "Tìm tâm của phép phóng to biến hình chữ nhật Q thành hình chữ nhật P. Nhập tọa độ của điểm đó.",
    "q.wb-14.6-07.howto": "Tìm tâm phóng to: điểm cố định mà phép phóng to lấy làm gốc. Nhập tọa độ của điểm đó.",
    "q.wb-14.5-07.howto": "Tìm điểm cố định mà P quay quanh để tới P'. Nhập tọa độ của điểm đó.",
    "q.wb-14.5-06.howto": "Tìm điểm cố định mà tam giác A quay quanh để trùng với tam giác B. Nhập tọa độ của điểm đó.",
    "q.wb-14.4-09.howto": "Tìm trục đối xứng biến P thành P'. Viết phương trình của đường thẳng đó (bắt đầu bằng x = hoặc y =).",
    "q.wb-14.3-09.howto": "Tìm một phép tịnh tiến đưa hình A thẳng tới hình C. Nhập dạng (ngang, dọc).",
    "q.wb-14.3-08.howto": "T' là vị trí mới của đỉnh T sau khi hình vuông được tịnh tiến. Chỉ nhập tọa độ của T'.",
    "q.wb-14.3-07.howto": "J' là vị trí mới của đỉnh J sau khi tịnh tiến hình thang. Chỉ nhập tọa độ của J'.",
    "q.wb-14.3-05.howto": "Tìm phép tịnh tiến đưa hình trở về đúng vị trí ban đầu. Nhập dạng (ngang, dọc).",
    "q.wb-14.3-04.howto": "Tìm xem P di chuyển sang ngang và lên bao nhiêu để tới P'. Nhập vectơ cột dạng (ngang, dọc), dùng dấu trừ khi sang trái hoặc xuống dưới.",
    "q.wb-14.3-03.howto": "C' là vị trí mới của đỉnh C sau khi tịnh tiến hình chữ nhật. Chỉ nhập tọa độ của C'.",
    "q.wb-14.2-08.howto": "Các điểm C, D, E được tìm lần lượt. Chỉ nhập tọa độ của E.",
    "q.wb-14.2-06.howto": "Em biết trung điểm và một đầu mút của đoạn thẳng. Nhập tọa độ của đầu mút còn lại.",
    "q.wb-14.1-08.howto": "Hãy tưởng tượng em đứng ở đỉnh E của lục giác và nhìn về đỉnh B. Tự tính góc phương vị này rồi nhập số độ.",
    "q.wb-14.1-07.howto": "Hãy tưởng tượng em đứng ở đỉnh C của lục giác và nhìn về đỉnh D. Nhập góc phương vị của D từ C (độ).",
    "q.wb-14.1-06.howto": "Tìm hướng của C khi nhìn từ B, dưới dạng góc phương vị (đo theo chiều kim đồng hồ từ hướng Bắc). Nhập số độ.",
  "q.wb-14.1-01.q": "Trong hình, đoạn thẳng từ A đến B tạo với đường Bắc một góc 80°, đo theo chiều kim đồng hồ. Viết góc phương vị của B từ A (số độ).",
  "q.wb-14.1-02.q": "Góc phương vị của hướng chính Tây là bao nhiêu?",
  "q.wb-14.1-03.q": "Góc phương vị của Y từ X là 105°. Tính góc phương vị của X từ Y.",
  "q.wb-14.1-04.q": "Góc phương vị của P từ Q là 230°. Tính góc phương vị của Q từ P.",
  "q.wb-14.1-05.q": "Trong hình của Ivan, điểm B nằm phía dưới và hơi lệch sang trái so với A. Góc đo theo chiều kim đồng hồ từ Bắc tại A tới AB là 208°, còn góc đo ngược chiều kim đồng hồ từ Bắc là 152°. Ivan viết 'Góc phương vị của B từ A là 152°'. Góc phương vị đúng là bao nhiêu?",
  "q.wb-14.1-05.choices": [
   "152°, vì đó là góc nhỏ hơn",
   "208°, vì góc phương vị được đo theo chiều kim đồng hồ từ Bắc",
   "028°, vì 208° − 180° = 28°",
   "332°, vì 360° − 28° = 332°"
  ],
  "q.wb-14.1-06.q": "Thị trấn B nằm ở góc phương vị 070° từ thị trấn A. Tại B, góc ABC bằng 100°, đo ngược chiều kim đồng hồ từ BA đến BC. Tính góc phương vị của C từ B.",
  "q.wb-14.1-07.q": "ABCDEF là một lục giác đều. Góc phương vị của B từ A là 090° và các đỉnh A, B, C, D, E, F xếp theo chiều kim đồng hồ (mọi góc trong đều 120°). Tính góc phương vị của D từ C.",
  "q.wb-14.1-08.q": "ABCDEF là lục giác đều như trên, với bearing của B từ A bằng 090° và các đỉnh xếp theo chiều kim đồng hồ. Zara nói bearing của B từ E là 030°. Bearing thực sự của B từ E là bao nhiêu?",
  "q.wb-14.1-09.q": "Góc phương vị của B từ A là 125°. Góc phương vị của C từ A là 305°. Em có thể kết luận gì về A, B và C?",
  "q.wb-14.1-09.choices": [
   "A nằm trên đường thẳng BC, giữa B và C",
   "A, B, C tạo thành góc vuông tại A",
   "B nằm trên đường thẳng AC, giữa A và C",
   "C nằm chính phía Bắc của B"
  ],
  "q.wb-14.2-01.q": "Viết tọa độ trung điểm của đoạn thẳng nối (2, 3) và (2, 7).",
  "q.wb-14.2-02.q": "Tính trung điểm của đoạn thẳng nối (3, 8) và (9, 2).",
  "q.wb-14.2-03.q": "Tính trung điểm của đoạn thẳng nối (−4, 9) và (6, −3).",
  "q.wb-14.2-04.q": "Tính trung điểm của đoạn thẳng nối (3, 2) và (8, 7).",
  "q.wb-14.2-05.q": "Hassan tính trung điểm của (−6, 5) và (2, −3) và viết (−2, 4). Phát biểu nào đúng?",
  "q.wb-14.2-05.choices": [
   "Hoành độ đúng, nhưng tung độ phải là (5 + (−3)) ÷ 2 = 1, nên trung điểm là (−2, 1)",
   "Cả hai tọa độ đều đúng",
   "Hoành độ phải là 4, nên trung điểm là (4, 4)",
   "Trung điểm là (−4, 1)"
  ],
  "q.wb-14.2-06.q": "Trung điểm của một đoạn thẳng là (5, −1). Một đầu mút là (8, 4). Viết tọa độ đầu mút còn lại.",
  "q.wb-14.2-07.q": "ABCD là một hình vuông. A là (−4, −2) và C là (−1, 3). Viết tọa độ tâm của hình vuông.",
  "q.wb-14.2-08.q": "A là (12, 0) và B là (0, 8). C là trung điểm của AB, D là trung điểm của BC và E là trung điểm của CD. Viết tọa độ của E.",
  "q.wb-14.2-09.q": "A là (2,8; 6,4) và C là (−3,6; −1,2). Tìm trung điểm của AC.",
  "q.wb-14.3-01.q": "Vectơ cột (−3, 2) (viết là −3 theo chiều ngang và 2 theo chiều dọc) có nghĩa gì với một phép tịnh tiến?",
  "q.wb-14.3-01.choices": [
   "Dịch chuyển 3 đơn vị sang trái và 2 đơn vị lên trên",
   "Dịch chuyển 3 đơn vị sang phải và 2 đơn vị lên trên",
   "Dịch chuyển 2 đơn vị sang trái và 3 đơn vị lên trên",
   "Dịch chuyển 3 đơn vị sang trái và 2 đơn vị xuống dưới"
  ],
  "q.wb-14.3-02.q": "Điểm A(2, −3) được tịnh tiến theo vectơ cột (−4, 5). Viết tọa độ của A'.",
  "q.wb-14.3-03.q": "Hình chữ nhật ABCD có A(1, 1), B(4, 1), C(4, 3) và D(1, 3). Nó được tịnh tiến theo vectơ cột (−2, −3). Viết tọa độ của C'.",
  "q.wb-14.3-04.q": "P(2, 5) được tịnh tiến thành P'(−1, 1). Viết vectơ cột của phép tịnh tiến dưới dạng (ngang, dọc).",
  "q.wb-14.3-05.q": "Một hình được tịnh tiến theo vectơ cột (−1, −9). Viết vectơ cột đưa hình trở lại vị trí ban đầu.",
  "q.wb-14.3-06.q": "Adah tịnh tiến tam giác B theo vectơ cột (2, 3). Bạn dịch tam giác sang phải 3 ô và lên 2 ô. Lỗi của Adah là gì?",
  "q.wb-14.3-06.choices": [
   "Bạn đã đảo hai số: số trên là dịch ngang (sang phải 2) và số dưới là dịch dọc (lên 3)",
   "Bạn phải dịch sang trái, vì 2 và 3 cùng dấu",
   "Không sai gì, vì thứ tự không quan trọng",
   "Bạn phải cộng 2 và 3 rồi dịch lên 5 ô"
  ],
  "q.wb-14.3-07.q": "Hình thang GHIJ có G(1, −3), H(2, −1), I(3, −1) và J(5, −3). Nó được tịnh tiến theo vectơ cột (−4, 6). Viết tọa độ của J'.",
  "q.wb-14.3-08.q": "Hình vuông RSTU có R(1, 1), S(1, −3), T(−3, −3) và U(−3, 1). Hình vuông được tịnh tiến, và ảnh của R là R'(4, 2). Viết tọa độ T', ảnh của T.",
  "q.wb-14.3-09.q": "Hình A được tịnh tiến thành B theo vectơ cột (2, −4). Sau đó hình B được tịnh tiến thành C theo vectơ cột (2, 3). Viết vectơ cột duy nhất đưa A trực tiếp thành C.",
  "q.wb-14.3-10.q": "Một hình được tịnh tiến. Tính chất nào của hình thay đổi?",
  "q.wb-14.3-10.choices": [
   "Vị trí của nó",
   "Kích thước của nó",
   "Hướng của nó (cách nó quay mặt)",
   "Số đo các góc của nó"
  ],
  "q.wb-14.4-01.q": "Một đường gương đi qua các điểm (0, 3) và (7, 3). Phương trình của nó là gì?",
  "q.wb-14.4-01.choices": [
   "x = 3",
   "y = 3",
   "x = 7",
   "y = 7"
  ],
  "q.wb-14.4-02.q": "Lấy đối xứng điểm (2, 5) qua đường thẳng x = 4. Viết tọa độ ảnh của nó.",
  "q.wb-14.4-03.q": "Lấy đối xứng điểm (5, 1) qua đường thẳng y = 3. Viết tọa độ ảnh của nó.",
  "q.wb-14.4-04.q": "Lấy đối xứng điểm (−4, −2) qua đường thẳng x = −1. Viết tọa độ ảnh của nó.",
  "q.wb-14.4-05.q": "Lấy đối xứng điểm (2, 4) qua đường thẳng y = 1,5. Viết tọa độ ảnh của nó.",
  "q.wb-14.4-06.q": "Điểm (1, 5) được lấy đối xứng qua đường thẳng x = 4. Điểm nào là ảnh?",
  "q.wb-14.4-06.choices": [
   "(7, 5)",
   "(4, 5)",
   "(8, 5)",
   "(1, 3)"
  ],
  "q.wb-14.4-07.q": "Tam giác EFG có E(−3, 3), F(−5, 1) và G(−3, 1). Nó được lấy đối xứng qua đường thẳng y = −x. Dùng quy tắc (x, y) → (−y, −x) để viết tọa độ F', ảnh của F.",
  "q.wb-14.4-08.q": "Điểm nào sau đây không thay đổi khi lấy đối xứng qua đường thẳng y = x?",
  "q.wb-14.4-08.choices": [
   "(3, 4)",
   "(−2, 2)",
   "(5, 5)",
   "(0, 5)"
  ],
  "q.wb-14.4-09.q": "Điểm P(5, −4) được phản chiếu thành P'(5, 2). Viết phương trình đường gương.",
  "q.wb-14.4-10.q": "Điểm (2, 1) được lấy đối xứng qua đường thẳng y = x, sau đó tịnh tiến theo vectơ cột (4, −1), rồi lấy đối xứng qua đường thẳng x = 3. Viết tọa độ ảnh cuối cùng.",
  "q.wb-14.5-01.q": "Quay điểm (5, 3) một góc 180° quanh tâm (3, 3). Viết tọa độ ảnh của nó.",
  "q.wb-14.5-02.q": "Quay điểm (5, 4) một góc 90° theo chiều kim đồng hồ quanh tâm (2, 3). Viết tọa độ ảnh của nó.",
  "q.wb-14.5-03.q": "Quay điểm (6, 4) một góc 90° ngược chiều kim đồng hồ quanh tâm (3, 2). Viết tọa độ ảnh của nó.",
  "q.wb-14.5-04.q": "Quay điểm (2, 3) một góc 180° quanh tâm (4, 5). Viết tọa độ ảnh của nó.",
  "q.wb-14.5-05.q": "Điểm (1, 3) được quay 90° theo chiều kim đồng hồ quanh tâm (3, 3). Điểm nào là ảnh?",
  "q.wb-14.5-05.choices": [
   "(3, 1)",
   "(3, 5)",
   "(5, 3)",
   "(1, 3)"
  ],
  "q.wb-14.5-06.q": "Tam giác A được quay 180° thành tam giác B. Đỉnh (2, 1) của A biến thành đỉnh (4, 3) của B. Viết tọa độ tâm quay.",
  "q.wb-14.5-07.q": "Một phép quay 90° theo chiều kim đồng hồ biến P(2, 6) thành P'(5, 3). Viết tọa độ tâm quay.",
  "q.wb-14.5-08.q": "Điểm (2, 5) được quay 90° theo chiều kim đồng hồ quanh gốc tọa độ, sau đó ảnh được quay 180° quanh tâm (1, 1). Viết tọa độ ảnh cuối cùng.",
  "q.wb-14.5-09.q": "Một hình được quay 180° theo chiều kim đồng hồ quanh điểm C. Một bản sao khác của hình được quay 180° ngược chiều kim đồng hồ quanh cùng điểm C. Điều gì đúng về hai ảnh?",
  "q.wb-14.5-09.choices": [
   "Chúng nằm đúng cùng một vị trí",
   "Chúng đối xứng nhau qua một đường thẳng đi qua C",
   "Chúng cách nhau 180°, nên cái này là ảnh gương của cái kia qua C",
   "Cái này cách C xa gấp đôi cái kia"
  ],
  "q.wb-14.5-10.q": "Một hình được quay 90° theo chiều kim đồng hồ quanh điểm C, rồi ảnh lại được quay 90° theo chiều kim đồng hồ quanh cùng điểm C. Một phép quay duy nhất bao nhiêu độ cho cùng kết quả?",
  "q.wb-14.6-01.q": "Một hình chữ nhật có kích thước 2 cm × 5 cm. Nó được phóng to với hệ số tỉ lệ 3. Cạnh dài của ảnh dài bao nhiêu?",
  "q.wb-14.6-02.q": "Điểm P(4, 3) được phóng to với hệ số tỉ lệ 3 qua tâm phóng to C(2, 1). Viết tọa độ ảnh của P.",
  "q.wb-14.6-03.q": "Một tam giác có các đỉnh (2, 1), (2, 4) và (4, 2). Nó được phóng to với hệ số 3 qua tâm (1, 2). Viết ảnh của đỉnh (2, 4).",
  "q.wb-14.6-04.q": "Với cùng tam giác và phép phóng to đó (tâm (1, 2), hệ số 3), viết ảnh của đỉnh (4, 2).",
  "q.wb-14.6-05.q": "Một hình được phóng to. Điểm nào giữ nguyên vị trí (là điểm bất biến)?",
  "q.wb-14.6-05.choices": [
   "Tâm phóng to",
   "Đỉnh của hình gần gốc tọa độ nhất",
   "Trung điểm của hình",
   "Không có điểm nào giữ nguyên vị trí"
  ],
  "q.wb-14.6-06.q": "Một hình thang được phóng to với hệ số tỉ lệ 3. Một đỉnh nằm cách tâm phóng to 2 ô sang phải và 1 ô lên trên. Ảnh của nó nằm ở đâu?",
  "q.wb-14.6-06.choices": [
   "Cách tâm 6 ô sang phải và 3 ô lên trên",
   "Cách tâm 5 ô sang phải và 4 ô lên trên",
   "Cách tâm 2 ô sang phải và 1 ô lên trên",
   "Cách tâm 3 ô sang phải và 3 ô lên trên"
  ],
  "q.wb-14.6-07.q": "Đỉnh A(3, 2) của một hình biến thành A'(7, 6) qua phép phóng to với hệ số tỉ lệ 2. Viết tọa độ tâm phóng to.",
  "q.wb-14.6-08.q": "Hình chữ nhật Q có các đỉnh (1, 1), (1, 2), (3, 2) và (3, 1). Hình chữ nhật P có các đỉnh (1, 1), (1, 4), (7, 4) và (7, 1). P là phép phóng to của Q với hệ số tỉ lệ 3. Viết tọa độ tâm phóng to.",
  "q.wb-14.6-09.q": "Một hình chữ nhật 3 cm × 2 cm được phóng to với hệ số tỉ lệ 4. Diện tích của ảnh là bao nhiêu?",
  "q.wb-14.6-09.choices": [
   "24 cm²",
   "96 cm²",
   "48 cm²",
   "12 cm²"
  ],
  "q.wb-14.6-10.q": "Điểm (2, 2) được phóng to với hệ số 3 qua tâm (1, 1), rồi ảnh được lấy đối xứng qua đường thẳng y = 2. Viết tọa độ ảnh cuối cùng."
 }
}
});
