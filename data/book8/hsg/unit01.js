window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 1,
  source: "hsg",
  sections: { challenge: [
  {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "cube-factorise",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm số nguyên dương n nhỏ nhất sao cho 360 × n là lập phương của một số nguyên.",
    "svg": null,
    "choices": null,
    "answer": 75,
    "hints": [
      "Hãy phân tích 360 ra thừa số nguyên tố. Mỗi số mũ cần có tính chất gì để tích là một lập phương?",
      "Với mỗi thừa số nguyên tố, số mũ hiện tại cần thêm bao nhiêu để chia hết cho 3?",
      "Nhân các thừa số bổ sung lại với nhau thì được n là bao nhiêu?"
    ],
    "explain": "360 = 2³ × 3² × 5. Để là lập phương, mỗi số mũ phải chia hết cho 3: số mũ của 2 đã là 3; số mũ của 3 là 2 nên cần thêm 3¹; số mũ của 5 là 1 nên cần thêm 5². Vậy n = 3 × 25 = 75 (khi đó 360 × 75 = 27 000 = 30³).",
    "why": null
  },
  {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "inclusion-exclusion",
    "source": "hsg",
    "lang": "vi",
    "q": "Trong các số nguyên dương từ 1 đến 200, có bao nhiêu số chia hết cho 4 hoặc chia hết cho 6 (kể cả số chia hết cho cả hai)?",
    "svg": null,
    "choices": null,
    "answer": 67,
    "hints": [
      "Có bao nhiêu số từ 1 đến 200 chia hết cho 4? Và chia hết cho 6?",
      "Một số chia hết cho cả 4 và 6 thì chia hết cho số nào (BCNN)?",
      "Khi cộng hai kết quả, những số nào đã bị đếm hai lần?"
    ],
    "explain": "Chia hết cho 4: 200 ÷ 4 = 50 số. Chia hết cho 6: 33 số (6 × 33 = 198). Chia hết cho cả 4 và 6 tức chia hết cho BCNN(4, 6) = 12: 16 số (12 × 16 = 192). Các số này bị đếm hai lần nên tổng là 50 + 33 − 16 = 67.",
    "why": null
  },
  {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "trailing-zeros",
    "source": "hsg",
    "lang": "vi",
    "q": "Tích 1 × 2 × 3 × … × 30 tận cùng bằng bao nhiêu chữ số 0?",
    "svg": null,
    "choices": null,
    "answer": 7,
    "hints": [
      "Mỗi chữ số 0 tận cùng được tạo ra từ cặp thừa số nguyên tố nào?",
      "Trong tích, thừa số 2 hay thừa số 5 xuất hiện ít hơn?",
      "Đếm các thừa số 5: có bao nhiêu bội của 5, và bao nhiêu bội của 25 trong khoảng 1…30?"
    ],
    "explain": "Mỗi chữ số 0 tận cùng ứng với một cặp 2 × 5. Thừa số 2 nhiều hơn thừa số 5 rất nhiều nên chỉ cần đếm thừa số 5. Các bội của 5 từ 1 đến 30: 5, 10, 15, 20, 25, 30 (6 số), riêng 25 = 5² có thêm một thừa số 5 nữa. Tổng số thừa số 5 là 6 + 1 = 7, vậy có 7 chữ số 0.",
    "why": null
  },
  {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "compare-powers",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm số nguyên dương n lớn nhất sao cho 2ⁿ < 5²⁰. (Gợi ý: 2¹⁰ = 1 024.)",
    "svg": null,
    "choices": null,
    "answer": 46,
    "hints": [
      "Hãy viết 5²⁰ × 2²⁰ dưới dạng một lũy thừa của 10. Điều đó cho biết gì về 5²⁰?",
      "So sánh 2ⁿ × 2²⁰ = 2ⁿ⁺²⁰ với 10²⁰. Cần 2ⁿ⁺²⁰ nhỏ hơn bao nhiêu?",
      "Dùng 2¹⁰ ≈ 10³ để ước lượng n + 20, rồi kiểm tra hai số nguyên kề nhau."
    ],
    "explain": "Vì 5²⁰ × 2²⁰ = 10²⁰ nên 2ⁿ < 5²⁰ ⇔ 2ⁿ⁺²⁰ < 10²⁰. Ta có 2⁶⁶ = 2⁶ × (2¹⁰)⁶ ≈ 64 × 1,15 × 10¹⁸ ≈ 7,4 × 10¹⁹ < 10²⁰, còn 2⁶⁷ ≈ 1,5 × 10²⁰ > 10²⁰. Vậy n + 20 = 66 là lớn nhất, tức n = 46.",
    "why": null
  },
  {
    "id": "hsg-05", "howto": "Tìm tất cả các số nguyên n thỏa mãn, rồi chỉ nhập tổng của chúng.",
    "type": "num",
    "diff": 3,
    "skill": "divisor-integer",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm tổng của tất cả các số nguyên n sao cho (2n + 7) ÷ (n + 1) cũng là một số nguyên.",
    "svg": null,
    "choices": null,
    "answer": -4,
    "hints": [
      "Hãy viết 2n + 7 = 2(n + 1) + một số nào đó. Phần dư là bao nhiêu?",
      "Khi đó n + 1 phải là ước của số nào?",
      "Liệt kê mọi ước (cả ước âm) rồi suy ra n, nhớ cộng lại tất cả."
    ],
    "explain": "(2n + 7) ÷ (n + 1) = 2 + 5 ÷ (n + 1), nên n + 1 phải là ước của 5: n + 1 ∈ {1, −1, 5, −5}. Suy ra n ∈ {0, −2, 4, −6}. Tổng = 0 − 2 + 4 − 6 = −4.",
    "why": null
  },
  {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "square-coprime",
    "source": "hsg",
    "lang": "vi",
    "q": "a và b là hai số nguyên dương nguyên tố cùng nhau và tích a × b là một số chính phương. Khẳng định nào chắc chắn đúng?",
    "svg": null,
    "choices": [
      "Cả a và b đều là số chính phương.",
      "Chỉ một trong hai số a, b là số chính phương.",
      "a + b là số chính phương.",
      "a = b."
    ],
    "answer": 0,
    "hints": [
      "Hãy phân tích a và b ra thừa số nguyên tố. Hai số nguyên tố cùng nhau có thừa số nguyên tố chung không?",
      "Trong tích a × b, mọi số mũ phải chẵn. Số mũ của một thừa số nguyên tố p đến từ a hay từ cả hai số?",
      "Thử a = 4, b = 9 và a = 1, b = 25 rồi bác bỏ từng phương án còn lại."
    ],
    "explain": "Vì ƯCLN(a, b) = 1 nên mỗi thừa số nguyên tố chỉ xuất hiện trong một trong hai số. Tích có mọi số mũ chẵn nên số mũ trong từng số cũng chẵn, suy ra a và b đều là số chính phương. Các phương án khác sai: a = 4, b = 9 có cả hai đều chính phương (loại B); 4 + 9 = 13 không chính phương (loại C); a = 1, b = 4 cho a ≠ b (loại D).",
    "why": null
  },
  {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "counterexample",
    "source": "hsg",
    "lang": "vi",
    "q": "Nam thử n = 0, 1, 2, …, 10 và thấy n² + n + 41 luôn là số nguyên tố, nên kết luận «n² + n + 41 là số nguyên tố với mọi số tự nhiên n». Giá trị n nào dưới đây bác bỏ kết luận của Nam?",
    "svg": null,
    "choices": [
      "n = 38",
      "n = 39",
      "n = 40",
      "n = 42"
    ],
    "answer": 2,
    "hints": [
      "Thử vài số nguyên tố không đủ để kết luận cho mọi n. Để bác bỏ, em cần tìm gì?",
      "Với n = 40, hãy tính n² + n + 41. Thấy điều gì đặc biệt (gợi ý: 40 + 1)?",
      "Số 1 681 có phải là bình phương của một số nguyên tố không?"
    ],
    "explain": "Để bác bỏ một khẳng định «với mọi n» chỉ cần một phản ví dụ. Với n = 40: 40² + 40 + 41 = 1 600 + 81 = 1 681 = 41², là hợp số. Các giá trị 38, 39, 42 đều cho số nguyên tố (1 523, 1 601, 1 847) nên không bác bỏ được. Sai lầm của Nam: kiểm tra vài trường hợp không phải là chứng minh.",
    "why": null
  },
  {
    "id": "hsg-08",
    "type": "num",
    "diff": 3,
    "skill": "consecutive-products",
    "source": "hsg",
    "lang": "vi",
    "q": "Tìm số nguyên dương lớn nhất là ước của tích của 4 số nguyên dương liên tiếp bất kì.",
    "svg": null,
    "choices": null,
    "answer": 24,
    "hints": [
      "Hãy tính thử các tích 1×2×3×4, 2×3×4×5, 3×4×5×6. Chúng có ước chung nào?",
      "Trong 4 số liên tiếp luôn có bao nhiêu số chẵn, và trong đó có số nào chia hết cho 4?",
      "Trong 4 số liên tiếp luôn có một số chia hết cho mấy? Từ đó suy ra tích chia hết cho số nào?"
    ],
    "explain": "Trong 4 số liên tiếp có đúng hai số chẵn, trong đó một số chia hết cho 4, nên tích chia hết cho 2 × 4 = 8. Luôn có một số chia hết cho 3. Vậy tích chia hết cho 8 × 3 = 24. Số lớn nhất không thể hơn 24 vì tích 1 × 2 × 3 × 4 = 24. Đáp số: 24.",
    "why": {
      "q": "Vì sao trong hai số chẵn liên tiếp luôn có một số chia hết cho 4?",
      "choices": [
        "Hai số chẵn liên tiếp hơn kém nhau 2 nên một số có dạng 4k, số kia có dạng 4k + 2.",
        "Vì mọi số chẵn đều chia hết cho 4.",
        "Vì tổng hai số chẵn liên tiếp chia hết cho 4.",
        "Vì tích hai số chẵn liên tiếp là số chính phương."
      ],
      "answer": 0
    }
  }
] },
  tr: { en: {
    "q.hsg-05.howto": "Find all the integers n that work, then enter only their sum.",
  "q.hsg-01.q": "Find the smallest positive integer n such that 360 × n is a perfect cube.",
  "q.hsg-01.hints": [
    "Write 360 as a product of prime factors. What must be true of each index for the product to be a cube?",
    "For each prime factor, how much must the index increase to become a multiple of 3?",
    "Multiply the extra factors together. What is n?"
  ],
  "q.hsg-01.explain": "360 = 2³ × 3² × 5. For a cube every index must be a multiple of 3: the index of 2 is already 3; 3 has index 2, so we need one more factor 3; 5 has index 1, so we need 5² more. So n = 3 × 25 = 75 (and 360 × 75 = 27 000 = 30³).",
  "q.hsg-02.q": "How many integers from 1 to 200 are divisible by 4 or by 6 (including those divisible by both)?",
  "q.hsg-02.hints": [
    "How many integers from 1 to 200 are multiples of 4? Of 6?",
    "A number divisible by both 4 and 6 is a multiple of which number (the lowest common multiple)?",
    "When you add the two counts, which numbers were counted twice?"
  ],
  "q.hsg-02.explain": "Multiples of 4: 200 ÷ 4 = 50. Multiples of 6: 33 (6 × 33 = 198). Divisible by both means a multiple of LCM(4, 6) = 12: 16 numbers (12 × 16 = 192). These were counted twice, so the total is 50 + 33 − 16 = 67.",
  "q.hsg-03.q": "The product 1 × 2 × 3 × … × 30 ends in how many zeros?",
  "q.hsg-03.hints": [
    "Each final zero comes from which pair of prime factors?",
    "In the product, which appears less often: the factor 2 or the factor 5?",
    "Count the factors of 5: how many multiples of 5, and how many multiples of 25, are there from 1 to 30?"
  ],
  "q.hsg-03.explain": "Each final zero comes from a pair 2 × 5. There are far more factors of 2 than 5, so we only count factors of 5. Multiples of 5 up to 30: 5, 10, 15, 20, 25, 30 (6 numbers), and 25 = 5² contributes one more 5. In total 6 + 1 = 7 factors of 5, so there are 7 zeros.",
  "q.hsg-04.q": "Find the largest positive integer n such that 2ⁿ < 5²⁰. (Hint: 2¹⁰ = 1 024.)",
  "q.hsg-04.hints": [
    "Write 5²⁰ × 2²⁰ as a power of 10. What does this tell you about 5²⁰?",
    "Compare 2ⁿ × 2²⁰ = 2ⁿ⁺²⁰ with 10²⁰. What must 2ⁿ⁺²⁰ be less than?",
    "Use 2¹⁰ ≈ 10³ to estimate n + 20, then check two neighbouring integers."
  ],
  "q.hsg-04.explain": "Since 5²⁰ × 2²⁰ = 10²⁰, we have 2ⁿ < 5²⁰ ⇔ 2ⁿ⁺²⁰ < 10²⁰. Now 2⁶⁶ = 2⁶ × (2¹⁰)⁶ ≈ 64 × 1.15 × 10¹⁸ ≈ 7.4 × 10¹⁹ < 10²⁰, while 2⁶⁷ ≈ 1.5 × 10²⁰ > 10²⁰. So the largest is n + 20 = 66, i.e. n = 46.",
  "q.hsg-05.q": "Find the sum of all integers n for which (2n + 7) ÷ (n + 1) is also an integer.",
  "q.hsg-05.hints": [
    "Write 2n + 7 = 2(n + 1) + something. What is the remainder?",
    "Then n + 1 must be a factor of which number?",
    "List every factor (negative ones too), find n, and remember to add them all."
  ],
  "q.hsg-05.explain": "(2n + 7) ÷ (n + 1) = 2 + 5 ÷ (n + 1), so n + 1 must be a factor of 5: n + 1 ∈ {1, −1, 5, −5}. So n ∈ {0, −2, 4, −6}. The sum is 0 − 2 + 4 − 6 = −4.",
  "q.hsg-06.q": "a and b are coprime positive integers and the product a × b is a perfect square. Which statement must be true?",
  "q.hsg-06.choices": [
    "Both a and b are perfect squares.",
    "Exactly one of a, b is a perfect square.",
    "a + b is a perfect square.",
    "a = b."
  ],
  "q.hsg-06.hints": [
    "Write a and b as products of primes. Can two coprime numbers share a prime factor?",
    "In a × b every index must be even. Does the index of a prime p come from a only, or from both numbers?",
    "Try a = 4, b = 9 and a = 1, b = 25, then rule out each remaining option."
  ],
  "q.hsg-06.explain": "Since HCF(a, b) = 1, each prime factor appears in only one of the two numbers. The product has all indices even, so the indices inside each number are even too, hence a and b are both perfect squares. The others fail: a = 4, b = 9 has both squares (rules out B); 4 + 9 = 13 is not a square (rules out C); a = 1, b = 4 has a ≠ b (rules out D).",
  "q.hsg-07.q": "Nam tries n = 0, 1, 2, …, 10 and finds n² + n + 41 is always prime, so he concludes \"n² + n + 41 is prime for every whole number n\". Which value of n disproves his conclusion?",
  "q.hsg-07.choices": [
    "n = 38",
    "n = 39",
    "n = 40",
    "n = 42"
  ],
  "q.hsg-07.hints": [
    "Checking a few cases is not enough for all n. To disprove, what do you need to find?",
    "For n = 40, calculate n² + n + 41. What do you notice (hint: 40 + 1)?",
    "Is 1 681 the square of a prime number?"
  ],
  "q.hsg-07.explain": "To disprove a statement about \"every n\" one counterexample is enough. For n = 40: 40² + 40 + 41 = 1 600 + 81 = 1 681 = 41², a composite number. The values 38, 39, 42 give primes (1 523, 1 601, 1 847) so they do not disprove it. Nam's mistake: checking a few cases is not a proof.",
  "q.hsg-08.q": "Find the largest positive integer that is a factor of the product of any 4 consecutive positive integers.",
  "q.hsg-08.hints": [
    "Calculate 1×2×3×4, 2×3×4×5, 3×4×5×6. What common factors do they have?",
    "Among 4 consecutive numbers, how many are even, and is one of them a multiple of 4?",
    "Among 4 consecutive numbers one is always a multiple of what? So the product is divisible by which number?"
  ],
  "q.hsg-08.explain": "Among 4 consecutive numbers there are exactly two even ones, and one of them is a multiple of 4, so the product is divisible by 2 × 4 = 8. One number is always a multiple of 3. So the product is divisible by 8 × 3 = 24. It cannot be more than 24 because 1 × 2 × 3 × 4 = 24. Answer: 24.",
  "q.hsg-08.why.q": "Why is one of two consecutive even numbers always a multiple of 4?",
  "q.hsg-08.why.choices": [
    "Consecutive even numbers differ by 2, so one has the form 4k and the other 4k + 2.",
    "Because every even number is a multiple of 4.",
    "Because the sum of two consecutive even numbers is a multiple of 4.",
    "Because the product of two consecutive even numbers is a perfect square."
  ]
}, vi: {} }
});
