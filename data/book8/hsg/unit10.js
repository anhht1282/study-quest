window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
 "unit": 10,
 "source": "hsg",
 "sections": {
  "challenge": [
   {
    "id": "hsg-01",
    "type": "num",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Giá một món hàng tăng 20% rồi sau đó giảm 20% (tính trên giá sau khi tăng). Giá cuối cùng thấp hơn giá ban đầu bao nhiêu phần trăm?",
    "svg": null,
    "choices": null,
    "answer": 4,
    "hints": [
     "Giả sử giá ban đầu là 100. Sau khi tăng 20% giá là bao nhiêu?",
     "20% của giá mới đó là bao nhiêu? Giá cuối cùng là bao nhiêu?",
     "So với 100 ban đầu, giá cuối thấp hơn bao nhiêu phần trăm?"
    ],
    "explain": "Giá ban đầu 100 → sau tăng 120 → sau giảm 20%: 120 × 0,8 = 96. Giá thấp hơn 100 − 96 = 4, tức 4%. (Hệ số: 1,2 × 0,8 = 0,96.)",
    "tol": 0,
    "unitLabel": "%"
   },
   {
    "id": "hsg-02",
    "type": "num",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Lương của anh Nam năm đầu tăng 10%, năm thứ hai tăng thêm 20% (so với lương sau năm đầu). Sau hai năm, lương của anh Nam tăng tổng cộng bao nhiêu phần trăm so với ban đầu?",
    "svg": null,
    "choices": null,
    "answer": 32,
    "hints": [
     "Hệ số nhân tương ứng với mức tăng 10% là bao nhiêu? Với 20%?",
     "Nhân hai hệ số đó với nhau được hệ số tổng cộng là bao nhiêu?",
     "Hệ số tổng cộng đó ứng với mức tăng bao nhiêu phần trăm?"
    ],
    "explain": "Hệ số tổng cộng là 1,1 × 1,2 = 1,32, tức tăng 32% (chứ không phải 10% + 20% = 30%).",
    "tol": 0,
    "unitLabel": "%"
   },
   {
    "id": "hsg-03",
    "type": "num",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Trộn 30 lít dung dịch muối nồng độ 10% với x lít dung dịch muối nồng độ 40% thì được dung dịch nồng độ 25%. Tìm x.",
    "svg": null,
    "choices": null,
    "answer": 30,
    "hints": [
     "Lượng muối nguyên chất trong 30 lít dung dịch 10% là bao nhiêu lít?",
     "Lượng muối trong x lít dung dịch 40% biểu diễn theo x? Tổng thể tích hỗn hợp là bao nhiêu?",
     "Lập phương trình: muối trước khi trộn = 25% của tổng thể tích."
    ],
    "explain": "Muối: 0,1 × 30 + 0,4x = 3 + 0,4x. Tổng thể tích 30 + x nên 3 + 0,4x = 0,25(30 + x) = 7,5 + 0,25x. Suy ra 0,15x = 4,5 và x = 30.",
    "tol": 0,
    "unitLabel": "lít"
   },
   {
    "id": "hsg-04",
    "type": "num",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Năm ngoái một trường có tổng cộng 1000 học sinh. Năm nay số học sinh nam tăng 20%, số học sinh nữ giảm 10% và tổng số học sinh là 1020. Hỏi năm ngoái trường có bao nhiêu học sinh nam?",
    "svg": null,
    "choices": null,
    "answer": 400,
    "hints": [
     "Gọi số nam năm ngoái là b. Số nữ năm ngoái biểu diễn theo b thế nào?",
     "Số nam và số nữ năm nay lần lượt là bao nhiêu theo b?",
     "Cho tổng năm nay bằng 1020 và giải phương trình."
    ],
    "explain": "Nữ năm ngoái: 1000 − b. Năm nay: 1,2b + 0,9(1000 − b) = 1020 ⇒ 0,3b + 900 = 1020 ⇒ b = 400.",
    "tol": 0,
    "unitLabel": "học sinh"
   },
   {
    "id": "hsg-05",
    "type": "num",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Bác Hà gửi 200 triệu đồng với lãi suất 5% một năm theo hình thức lãi nhập vốn (lãi năm đầu được cộng vào gốc để tính lãi năm sau). Sau 2 năm, tiền lãi bác nhận được là bao nhiêu triệu đồng?",
    "svg": null,
    "choices": null,
    "answer": 20.5,
    "hints": [
     "Sau năm đầu tiên, số tiền trong tài khoản là bao nhiêu triệu?",
     "Tiền lãi của năm thứ hai tính trên số tiền nào?",
     "Tổng tiền lãi của hai năm = tổng số tiền sau 2 năm − gốc. Tính xem."
    ],
    "explain": "Sau năm 1: 200 × 1,05 = 210. Sau năm 2: 210 × 1,05 = 220,5. Tiền lãi = 220,5 − 200 = 20,5 triệu đồng.",
    "tol": 0.01,
    "unitLabel": "triệu đồng"
   },
   {
    "id": "hsg-06",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Lãi suất tiết kiệm tăng từ 5% lên 6%. Bạn Mai nói: \"Lãi suất tăng 1%\". Bạn Lan nói: \"Lãi suất tăng 20%\". Nhận xét nào đúng?",
    "svg": null,
    "choices": [
     "Chỉ Mai đúng",
     "Chỉ Lan đúng",
     "Cả hai đều đúng nhưng nói về hai điều khác nhau",
     "Cả hai đều sai"
    ],
    "answer": 2,
    "hints": [
     "Điểm phần trăm và phần trăm tương đối khác nhau thế nào?",
     "Mức tăng 1 so với giá trị ban đầu 5 là bao nhiêu phần trăm?",
     "Hai bạn đang dùng cách nói nào?"
    ],
    "explain": "Lãi suất tăng 1 điểm phần trăm; so với mức cũ, tăng 1/5 = 20%. Cả hai đều đúng nếu nói rõ: Mai nói về điểm phần trăm, Lan nói về tăng tương đối. Lỗi hay gặp là nhầm hai khái niệm."
   },
   {
    "id": "hsg-07",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Cửa hàng X giảm giá 10% rồi giảm tiếp 20% (trên giá đã giảm). Cửa hàng Y giảm giá thẳng 30% một lần. Cùng một món hàng có giá niêm yết như nhau, cửa hàng nào bán rẻ hơn?",
    "svg": null,
    "choices": [
     "Cửa hàng X",
     "Cửa hàng Y",
     "Hai cửa hàng như nhau",
     "Không xác định được vì thiếu giá niêm yết"
    ],
    "answer": 1,
    "hints": [
     "Hệ số nhân cho giảm 10% rồi 20% lần lượt là gì?",
     "Nhân hai hệ số đó. Hệ số của giảm 30% là bao nhiêu?",
     "Hệ số nào nhỏ hơn thì giá cuối thấp hơn."
    ],
    "explain": "Cửa hàng X: 0,9 × 0,8 = 0,72 (giảm tổng cộng 28%). Cửa hàng Y: 0,7. Vì 0,7 < 0,72 nên cửa hàng Y rẻ hơn. Sai lầm: cộng 10% + 20% = 30% rồi cho rằng hai cửa hàng bằng nhau."
   },
   {
    "id": "hsg-08",
    "type": "mc",
    "diff": 3,
    "skill": "hsg-percent",
    "source": "hsg",
    "lang": "vi",
    "q": "Giá một mặt hàng giảm 20%. Để doanh thu (giá × số lượng bán) không bị giảm, số lượng bán ra phải tăng ít nhất bao nhiêu phần trăm?",
    "svg": null,
    "choices": [
     "20%",
     "25%",
     "30%",
     "16%"
    ],
    "answer": 1,
    "hints": [
     "Hệ số của giá mới so với giá cũ là bao nhiêu?",
     "Gọi k là hệ số tăng của số lượng. Điều kiện doanh thu không giảm là gì?",
     "Giải 0,8 × k ≥ 1."
    ],
    "explain": "Giá mới = 0,8 × giá cũ. Cần 0,8 × k ≥ 1 ⇒ k ≥ 1,25, tức số lượng tăng ít nhất 25%. (Không phải 20% vì hai tỉ lệ phần trăm tính trên hai cơ sở khác nhau.)",
    "why": {
     "q": "Vì sao đáp án đó đúng?",
     "choices": [
      "Vì 100 − 20 = 80 và 20 nhân với 4 bằng 80",
      "Vì 0,8 × k ≥ 1 nên k ≥ 1/0,8 = 1,25",
      "Vì phần trăm tăng bằng phần trăm giảm",
      "Vì 20% của 80 là 16"
     ],
     "answer": 1
    }
   }
  ]
 },
 "tr": {
  "en": {
   "q.hsg-01.q": "The price of an item goes up by 20% and then goes down by 20% (of the increased price). By what percentage is the final price lower than the original price?",
   "q.hsg-01.hints": [
    "Suppose the original price is 100. What is the price after the 20% increase?",
    "What is 20% of that new price? What is the final price?",
    "Compared with the original 100, by what percentage is the final price lower?"
   ],
   "q.hsg-01.explain": "Original 100 → after the increase 120 → after the 20% decrease: 120 × 0.8 = 96. The price is 100 − 96 = 4 lower, i.e. 4%. (Multipliers: 1.2 × 0.8 = 0.96.)",
   "q.hsg-02.q": "Nam's salary rises by 10% in the first year and by a further 20% (of the new salary) in the second year. By what total percentage has his salary increased after two years?",
   "q.hsg-02.hints": [
    "What is the multiplier for a 10% increase? For a 20% increase?",
    "What is the overall multiplier when you multiply the two?",
    "What percentage increase does that overall multiplier represent?"
   ],
   "q.hsg-02.explain": "The overall multiplier is 1.1 × 1.2 = 1.32, an increase of 32% (not 10% + 20% = 30%).",
   "q.hsg-03.q": "30 litres of salt solution of concentration 10% are mixed with x litres of salt solution of concentration 40% to give a solution of concentration 25%. Find x.",
   "q.hsg-03.hints": [
    "How many litres of pure salt are in 30 litres of 10% solution?",
    "Write the amount of salt in x litres of 40% solution in terms of x. What is the total volume of the mixture?",
    "Form an equation: salt before mixing = 25% of the total volume."
   ],
   "q.hsg-03.explain": "Salt: 0.1 × 30 + 0.4x = 3 + 0.4x. The total volume is 30 + x so 3 + 0.4x = 0.25(30 + x) = 7.5 + 0.25x. Hence 0.15x = 4.5 and x = 30.",
   "q.hsg-04.q": "Last year a school had 1000 students in total. This year the number of boys rose by 20%, the number of girls fell by 10%, and the total is 1020. How many boys were there last year?",
   "q.hsg-04.hints": [
    "Let b be last year's number of boys. Write last year's number of girls in terms of b.",
    "What are this year's numbers of boys and girls in terms of b?",
    "Set this year's total equal to 1020 and solve."
   ],
   "q.hsg-04.explain": "Last year's girls: 1000 − b. This year: 1.2b + 0.9(1000 − b) = 1020 ⇒ 0.3b + 900 = 1020 ⇒ b = 400.",
   "q.hsg-05.q": "Ha deposits 200 million dong at 5% per year compound interest (the first year's interest is added to the principal before the second year's interest is worked out). How many million dong of interest does she earn after 2 years?",
   "q.hsg-05.hints": [
    "How much money is in the account after the first year, in millions?",
    "On which amount is the second year's interest calculated?",
    "Total interest = amount after 2 years − principal. Work it out."
   ],
   "q.hsg-05.explain": "After year 1: 200 × 1.05 = 210. After year 2: 210 × 1.05 = 220.5. Interest = 220.5 − 200 = 20.5 million dong.",
   "q.hsg-06.q": "A savings interest rate rises from 5% to 6%. Mai says: \"The rate has increased by 1%\". Lan says: \"The rate has increased by 20%\". Which comment is correct?",
   "q.hsg-06.choices": [
    "Only Mai is correct",
    "Only Lan is correct",
    "Both are correct but they describe different things",
    "Both are wrong"
   ],
   "q.hsg-06.hints": [
    "How do percentage points differ from a relative percentage change?",
    "What percentage of the original value 5 is the increase of 1?",
    "Which way of speaking is each friend using?"
   ],
   "q.hsg-06.explain": "The rate rises by 1 percentage point, and relative to the old rate it is an increase of 1/5 = 20%. Both are correct if made precise: Mai means percentage points, Lan means relative increase. The common mistake is to confuse the two.",
   "q.hsg-07.q": "Shop X reduces a price by 10% and then by a further 20% (of the reduced price). Shop Y reduces it by 30% in one go. The same item has the same list price in both shops. Which shop sells it more cheaply?",
   "q.hsg-07.choices": [
    "Shop X",
    "Shop Y",
    "They are the same",
    "Cannot tell without the list price"
   ],
   "q.hsg-07.hints": [
    "What are the multipliers for reductions of 10% and 20%?",
    "Multiply them. What is the multiplier for a 30% reduction?",
    "The smaller multiplier gives the lower final price."
   ],
   "q.hsg-07.explain": "Shop X: 0.9 × 0.8 = 0.72 (a total reduction of 28%). Shop Y: 0.7. Since 0.7 < 0.72, shop Y is cheaper. The mistake is to add 10% + 20% = 30% and say they are equal.",
   "q.hsg-08.why.q": "Why is that the right answer?",
   "q.hsg-08.why.choices": [
    "Because 100 − 20 = 80 and 20 times 4 is 80",
    "Because 0.8 × k ≥ 1 so k ≥ 1/0.8 = 1.25",
    "Because the percentage increase equals the percentage decrease",
    "Because 20% of 80 is 16"
   ],
   "q.hsg-08.q": "The price of a product is cut by 20%. By at least what percentage must the quantity sold increase so that revenue (price × quantity) does not fall?",
   "q.hsg-08.choices": [
    "20%",
    "25%",
    "30%",
    "16%"
   ],
   "q.hsg-08.hints": [
    "What is the multiplier of the new price compared with the old?",
    "Let k be the multiplier for the quantity. What is the condition for revenue not to fall?",
    "Solve 0.8 × k ≥ 1."
   ],
   "q.hsg-08.explain": "The new price = 0.8 × the old price. We need 0.8 × k ≥ 1, so k ≥ 1.25: the quantity must rise by at least 25%. (Not 20%, because the two percentages are of different bases.)"
  },
  "vi": {}
 }
});
