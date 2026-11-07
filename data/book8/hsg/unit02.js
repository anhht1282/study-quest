window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 2,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "identity-value",
    "source": "hsg",
    "lang": "vi",
    "q": "Cho hai số x, y thỏa x − y = 3 và x × y = 10. Tính giá trị của x² + y².",
    "svg": null,
    "choices": null,
    "answer": 29,
    "hints": [
      "Hãy khai triển (x − y)². Biểu thức này chứa những hạng tử nào?",
      "Trong khai triển đó, em đã biết giá trị của đại lượng nào?",
      "Làm sao tách x² + y² ra khỏi (x − y)² bằng cách cộng thêm 2xy?"
    ],
    "explain": "(x − y)² = x² − 2xy + y², suy ra x² + y² = (x − y)² + 2xy = 3² + 2 × 10 = 9 + 20 = 29. (Kiểm tra: x = 5, y = 2 hoặc x = −2, y = −5 đều cho 29.)",
    "why": null
  },
  {
    "id": "hsg-02", "howto": "Tìm tất cả các nghiệm của phương trình, rồi chỉ nhập tổng của chúng.",
    "type": "num",
    "diff": 3,
    "skill": "abs-equation",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm tổng các nghiệm của phương trình |2x − 3| = x + 3.",
    "svg": null,
    "choices": null,
    "answer": 6,
    "hints": [
      "Giá trị tuyệt đối bằng x + 3 thì x + 3 phải có dấu thế nào?",
      "Hãy tách thành hai trường hợp: 2x − 3 = x + 3 và 2x − 3 = −(x + 3). Giải từng phương trình.",
      "Hai giá trị tìm được có thỏa x + 3 ≥ 0 không? Cộng chúng lại."
    ],
    "explain": "Điều kiện: x + 3 ≥ 0. Trường hợp 1: 2x − 3 = x + 3 ⇒ x = 6. Trường hợp 2: 2x − 3 = −x − 3 ⇒ 3x = 0 ⇒ x = 0. Cả hai đều thỏa điều kiện (kiểm tra: |9| = 9, |−3| = 3). Tổng các nghiệm là 6 + 0 = 6.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "add-one-trick",
    "source": "hsg",
    "lang": "vi",
    "q": "Giải phương trình (x + 1) ÷ 2021 + (x + 2) ÷ 2020 + (x + 3) ÷ 2019 = −3.",
    "svg": null,
    "choices": null,
    "answer": -2022,
    "hints": [
      "Giải trực tiếp bằng quy đồng có khả thi không? Hãy thử cộng thêm 1 vào mỗi phân số ở vế trái. Phân số thứ nhất trở thành gì?",
      "Cộng 1 vào ba phân số nghĩa là cộng 3 vào vế trái. Vế phải trở thành bao nhiêu?",
      "Nếu tích của (x + 2022) với một số dương bằng 0 thì x bằng bao nhiêu?"
    ],
    "explain": "Cộng 1 vào mỗi phân số: (x + 1) ÷ 2021 + 1 = (x + 2022) ÷ 2021; tương tự (x + 2022) ÷ 2020 và (x + 2022) ÷ 2019. Cộng 3 vào cả hai vế, vế phải bằng 0: (x + 2022) × (1/2021 + 1/2020 + 1/2019) = 0. Vì thừa số trong ngoặc dương nên x + 2022 = 0, tức x = −2022.",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "integer-solutions",
    "source": "hsg",
    "lang": "vi",
    "q": "Có bao nhiêu số nguyên x thỏa mãn đồng thời |x − 3| ≤ 6 và x² > 4?",
    "svg": null,
    "choices": null,
    "answer": 8,
    "hints": [
      "|x − 3| ≤ 6 nghĩa là x nằm trong khoảng nào? Viết dưới dạng bất đẳng thức kép.",
      "x² > 4 tương đương điều kiện nào về x (chú ý cả x âm)?",
      "Trong khoảng ở câu đầu, loại những số nguyên không thỏa câu thứ hai rồi đếm."
    ],
    "explain": "|x − 3| ≤ 6 ⇔ −3 ≤ x ≤ 9. x² > 4 ⇔ x > 2 hoặc x < −2. Giao hai điều kiện, các số nguyên là x = −3 và x = 3, 4, 5, 6, 7, 8, 9. Tổng cộng 1 + 7 = 8 số.",
    "why": null
  },
  {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "age-problem",
    "source": "hsg",
    "lang": "vi",
    "q": "Cha hơn con 28 tuổi. Cách đây 4 năm, tuổi cha gấp 5 lần tuổi con. Hỏi hiện nay cha bao nhiêu tuổi?",
    "svg": null,
    "choices": null,
    "answer": 39,
    "hints": [
      "Gọi tuổi con hiện nay là c. Tuổi cha hiện nay biểu diễn thế nào?",
      "Cách đây 4 năm, tuổi con và tuổi cha là bao nhiêu (theo c)?",
      "Viết phương trình «tuổi cha = 5 lần tuổi con» cho thời điểm đó và giải."
    ],
    "explain": "Gọi tuổi con hiện nay là c thì tuổi cha là c + 28. Cách đây 4 năm: con c − 4, cha c + 24. Ta có c + 24 = 5(c − 4) ⇔ c + 24 = 5c − 20 ⇔ 4c = 44 ⇔ c = 11. Vậy cha 11 + 28 = 39 tuổi. (Kiểm tra: 4 năm trước cha 35, con 7, 35 = 5 × 7.)",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "inequality-misconception",
    "source": "hsg",
    "lang": "vi",
    "q": "Với mọi số thực a, b, khẳng định nào sau đây đúng khi a > b?",
    "svg": null,
    "choices": [
      "a² > b²",
      "a³ > b³",
      "1 ÷ a < 1 ÷ b",
      "a × c > b × c với mọi số thực c"
    ],
    "answer": 1,
    "hints": [
      "Hãy thử a = 1, b = −2 với các phương án. Phương án nào bị bác bỏ?",
      "Thử a = 2, b = −3 và a = 2, b = 1 với phương án «1 ÷ a < 1 ÷ b». Nó có luôn đúng không?",
      "Nhân hai vế với số âm thì dấu bất đẳng thức thay đổi thế nào? Hàm lập phương giữ nguyên thứ tự hay đảo thứ tự?"
    ],
    "explain": "A sai: a = 1 > b = −2 nhưng 1 < 4. C sai: a = 2 > b = −3 nhưng 1/2 > −1/3. D sai khi c ≤ 0 (c = 0 cho dấu =, c < 0 đảo dấu). B đúng vì lập phương luôn bảo toàn thứ tự (a³ − b³ = (a − b)(a² + ab + b²) với a² + ab + b² > 0 khi a ≠ b). Lỗi hay gặp: nghĩ bình phương luôn bảo toàn thứ tự.",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "lost-solution",
    "source": "hsg",
    "lang": "vi",
    "q": "Giải phương trình x² − 4x = 5x − 20, bạn Mai viết: x(x − 4) = 5(x − 4), chia hai vế cho (x − 4) được x = 5. Kết luận của Mai sai ở chỗ nào?",
    "svg": null,
    "choices": [
      "Mai phân tích đa thức thành nhân tử sai.",
      "Phương trình không có nghiệm x = 5.",
      "Mai chia cho (x − 4) mà không xét trường hợp x − 4 = 0 nên bỏ sót nghiệm x = 4.",
      "Mai phải chia hai vế cho x chứ không phải cho (x − 4)."
    ],
    "answer": 2,
    "hints": [
      "Thử thay x = 4 vào phương trình ban đầu. Nó có thỏa không?",
      "Chia hai vế cho một biểu thức chỉ được khi biểu thức đó khác 0. Ở đây (x − 4) có thể bằng 0 khi nào?",
      "Cách nào giải đúng mà không bỏ nghiệm: chuyển hết sang một vế rồi phân tích thành tích bằng 0?"
    ],
    "explain": "x(x − 4) − 5(x − 4) = 0 ⇔ (x − 4)(x − 5) = 0 nên x = 4 hoặc x = 5. Mai đã chia hai vế cho x − 4 mà quên rằng x = 4 làm x − 4 = 0, nên mất nghiệm x = 4. Quy tắc: không chia hai vế cho biểu thức chứa ẩn; hãy chuyển vế và đặt nhân tử chung.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "parameter-equation",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm giá trị của m để phương trình (m² − 9)x = m + 3 vô nghiệm.",
    "svg": null,
    "choices": null,
    "answer": 3,
    "hints": [
      "Phương trình dạng ax = b vô nghiệm khi nào? Hãy xét a = 0 và b ≠ 0.",
      "Giải m² − 9 = 0 để tìm các giá trị m có thể làm hệ số của x bằng 0.",
      "Với mỗi giá trị đó, tính m + 3 xem vế phải có khác 0 không."
    ],
    "explain": "Phương trình ax = b vô nghiệm khi a = 0 và b ≠ 0. Ở đây a = m² − 9 = 0 ⇔ m = 3 hoặc m = −3. Với m = 3: vế phải là 6 ≠ 0, phương trình 0x = 6 vô nghiệm. Với m = −3: vế phải là 0, phương trình 0x = 0 nghiệm đúng với mọi x (vô số nghiệm). Vậy m = 3.",
    "why": {
      "q": "Vì sao m = −3 không làm phương trình vô nghiệm?",
      "choices": [
        "Vì khi đó phương trình trở thành 0x = 0, nghiệm đúng với mọi x.",
        "Vì khi đó hệ số của x khác 0.",
        "Vì khi đó phương trình có đúng một nghiệm x = 0.",
        "Vì m = −3 làm vế phải khác 0."
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-02.howto": "Find all the solutions of the equation, then enter only their sum.",
  "q.hsg-01.q": "Two numbers x and y satisfy x − y = 3 and x × y = 10. Find the value of x² + y².",
  "q.hsg-01.hints": [
    "Expand (x − y)². Which terms does it contain?",
    "In that expansion, which quantity do you already know the value of?",
    "How can you isolate x² + y² from (x − y)² by adding 2xy?"
  ],
  "q.hsg-01.explain": "(x − y)² = x² − 2xy + y², so x² + y² = (x − y)² + 2xy = 3² + 2 × 10 = 9 + 20 = 29. (Check: x = 5, y = 2 or x = −2, y = −5 both give 29.)",
  "q.hsg-02.q": "Find the sum of the solutions of the equation |2x − 3| = x + 3.",
  "q.hsg-02.hints": [
    "If an absolute value equals x + 3, what sign must x + 3 have?",
    "Split into two cases: 2x − 3 = x + 3 and 2x − 3 = −(x + 3). Solve each equation.",
    "Does each value satisfy x + 3 ≥ 0? Add them."
  ],
  "q.hsg-02.explain": "Condition: x + 3 ≥ 0. Case 1: 2x − 3 = x + 3 ⇒ x = 6. Case 2: 2x − 3 = −x − 3 ⇒ 3x = 0 ⇒ x = 0. Both satisfy the condition (check: |9| = 9, |−3| = 3). The sum of the solutions is 6 + 0 = 6.",
  "q.hsg-03.q": "Solve the equation (x + 1) ÷ 2021 + (x + 2) ÷ 2020 + (x + 3) ÷ 2019 = −3.",
  "q.hsg-03.hints": [
    "Is clearing denominators directly practical? Try adding 1 to each fraction on the left. What does the first fraction become?",
    "Adding 1 to three fractions means adding 3 to the left side. What does the right side become?",
    "If (x + 2022) multiplied by a positive number equals 0, what is x?"
  ],
  "q.hsg-03.explain": "Add 1 to each fraction: (x + 1) ÷ 2021 + 1 = (x + 2022) ÷ 2021; likewise (x + 2022) ÷ 2020 and (x + 2022) ÷ 2019. Adding 3 to both sides makes the right side 0: (x + 2022) × (1/2021 + 1/2020 + 1/2019) = 0. The bracket is positive, so x + 2022 = 0, i.e. x = −2022.",
  "q.hsg-04.q": "How many integers x satisfy both |x − 3| ≤ 6 and x² > 4?",
  "q.hsg-04.hints": [
    "What interval does |x − 3| ≤ 6 describe? Write it as a double inequality.",
    "What condition on x is equivalent to x² > 4 (remember negative x too)?",
    "Within the interval from the first part, remove the integers failing the second condition, then count."
  ],
  "q.hsg-04.explain": "|x − 3| ≤ 6 ⇔ −3 ≤ x ≤ 9. x² > 4 ⇔ x > 2 or x < −2. Combining, the integers are x = −3 and x = 3, 4, 5, 6, 7, 8, 9. In total 1 + 7 = 8 integers.",
  "q.hsg-05.q": "A father is 28 years older than his son. Four years ago the father was 5 times as old as the son. How old is the father now?",
  "q.hsg-05.hints": [
    "Let the son's age now be c. How do you write the father's age now?",
    "Four years ago, what were the son's and the father's ages (in terms of c)?",
    "Write the equation \"father = 5 times son\" for that time and solve it."
  ],
  "q.hsg-05.explain": "Let the son be c years old now; the father is c + 28. Four years ago: son c − 4, father c + 24. So c + 24 = 5(c − 4) ⇔ c + 24 = 5c − 20 ⇔ 4c = 44 ⇔ c = 11. The father is 11 + 28 = 39. (Check: 4 years ago father 35, son 7, 35 = 5 × 7.)",
  "q.hsg-06.q": "For all real numbers a and b, which statement is true when a > b?",
  "q.hsg-06.choices": [
    "a² > b²",
    "a³ > b³",
    "1 ÷ a < 1 ÷ b",
    "a × c > b × c for every real c"
  ],
  "q.hsg-06.hints": [
    "Try a = 1, b = −2 on the options. Which one is ruled out?",
    "Try a = 2, b = −3 and a = 2, b = 1 on \"1 ÷ a < 1 ÷ b\". Is it always true?",
    "What happens to an inequality when you multiply by a negative number? Does cubing keep or reverse the order?"
  ],
  "q.hsg-06.explain": "A is false: a = 1 > b = −2 but 1 < 4. C is false: a = 2 > b = −3 but 1/2 > −1/3. D is false when c ≤ 0 (c = 0 gives equality, c < 0 reverses the sign). B is true because cubing always preserves order (a³ − b³ = (a − b)(a² + ab + b²) and a² + ab + b² > 0 when a ≠ b). Common mistake: thinking squaring always preserves order.",
  "q.hsg-07.q": "Solving x² − 4x = 5x − 20, Mai writes x(x − 4) = 5(x − 4), divides both sides by (x − 4) and gets x = 5. What is wrong with her solution?",
  "q.hsg-07.choices": [
    "Mai factorised incorrectly.",
    "The equation has no solution x = 5.",
    "Mai divided by (x − 4) without considering x − 4 = 0, so she missed the solution x = 4.",
    "Mai should have divided both sides by x, not (x − 4)."
  ],
  "q.hsg-07.hints": [
    "Substitute x = 4 into the original equation. Does it work?",
    "You can only divide both sides by an expression that is not zero. When can (x − 4) be zero here?",
    "Which method avoids losing solutions: moving everything to one side and factorising to a product equal to 0?"
  ],
  "q.hsg-07.explain": "x(x − 4) − 5(x − 4) = 0 ⇔ (x − 4)(x − 5) = 0, so x = 4 or x = 5. Mai divided by x − 4 but forgot that x = 4 makes x − 4 = 0, so she lost the solution x = 4. Rule: do not divide both sides by an expression containing the unknown; move terms and factorise instead.",
  "q.hsg-08.q": "Find the value of m for which the equation (m² − 9)x = m + 3 has no solution.",
  "q.hsg-08.hints": [
    "When does an equation ax = b have no solution? Consider a = 0 and b ≠ 0.",
    "Solve m² − 9 = 0 to find the values of m that make the coefficient of x zero.",
    "For each such value, work out m + 3 to see if the right side is non-zero."
  ],
  "q.hsg-08.explain": "The equation ax = b has no solution when a = 0 and b ≠ 0. Here a = m² − 9 = 0 ⇔ m = 3 or m = −3. For m = 3: the right side is 6 ≠ 0, so 0x = 6 has no solution. For m = −3: the right side is 0, so 0x = 0 is true for every x (infinitely many solutions). So m = 3.",
  "q.hsg-08.why.q": "Why does m = −3 not make the equation have no solution?",
  "q.hsg-08.why.choices": [
    "Because it becomes 0x = 0, which is true for every x.",
    "Because the coefficient of x is then non-zero.",
    "Because it then has exactly one solution x = 0.",
    "Because m = −3 makes the right side non-zero."
  ]
}, vi: {} }
});
