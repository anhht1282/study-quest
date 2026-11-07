window.GAME_TR = window.GAME_TR || [];
window.GAME_TR.push({
  unit: 10,
  en: {
    "q.ch-06.howto": "Enter only the difference in price between the two shops; you do not need to name the shop.",
    "u.realm": "Hoi An Sale Market",
    "u.story": "You arrive at a night market with dozens of signs saying \"20% off\" and \"15% more\". To work out which goods are really cheap and avoid being fooled by the numbers, you need to master percentage increase and decrease and multipliers.",
    "g.0.def": "The difference between the new value and the old value, measured in the original units (dong, kg...).",
    "g.1.def": "The amount added compared with the original value, written as a %.",
    "g.2.def": "The amount taken away compared with the original value, written as a %.",
    "g.3.def": "The number we multiply the old value by to get the new value (a 20% increase means multiplying by 1.2).",
    "g.4.def": "The starting value, always the denominator when working out a percentage change.",
    "g.5.def": "The change divided by the original value, then multiplied by 100%.",
    "s.10.1.learn": [
      "Absolute change = new value − old value. Percentage change = change ÷ OLD value × 100%.",
      "To increase a value by p%: work out p% of it and ADD it on. To decrease: work out p% and SUBTRACT it.",
      "The original value is always the denominator: from 75 up to 105 is an increase of 30 ÷ 75 = 40%, but from 105 down to 75 is a decrease of 30 ÷ 105 ≈ 28.6%.",
      "Increasing by p% then decreasing by p% does not get you back to the old price, because the two calculations are based on two different amounts.",
      "A percentage increase can be more than 100%, but a percentage decrease cannot be more than 100%."
    ],
    "ex.10.1.q": "A library has 2800 books. Find the number of books if (a) it increases by 84%, (b) it decreases by 37%.",
    "ex.10.1.steps": [
      "(a) 84% of 2800 = 0.84 × 2800 = 2352; new total = 2800 + 2352 = 5152.",
      "(b) 37% of 2800 = 0.37 × 2800 = 1036; remaining = 2800 − 1036 = 1764."
    ],
    "ex.10.1.prompts": [
      "What is 84% of 2800? Change the percentage to a decimal and then multiply. If the books 'increase', how do you work out the new total?",
      "Do the same with 37%. For a 'decrease', do you add or subtract the amount you just found?"
    ],
    "ex.10.1.twist": "If the number of books increases by 20% and then decreases by 20%, how many books are there at the end? Do you get back to 2800?",
    "s.10.2.learn": [
      "Increasing by p% is the same as multiplying by (1 + p/100). For example, a 65% increase means multiplying by 1.65.",
      "Decreasing by p% is the same as multiplying by (1 − p/100). For example, a 54% decrease means multiplying by 0.46.",
      "Old value × multiplier = new value, so multiplier = new value ÷ old value.",
      "If the multiplier is > 1 it is an increase (the part over 100%); if it is < 1 it is a decrease (100% minus the part that is left).",
      "For several changes in a row: multiply the multipliers together."
    ],
    "ex.10.2.q": "The price of a flight is $2300. Work out the percentage change if the price (a) rises to $2850, (b) falls to $1690.",
    "ex.10.2.steps": [
      "(a) Multiplier = 2850 ÷ 2300 ≈ 1.239 = 123.9% so an increase of 23.9%.",
      "(b) Multiplier = 1690 ÷ 2300 ≈ 0.735 = 73.5% so a decrease of 100% − 73.5% = 26.5%."
    ],
    "ex.10.2.prompts": [
      "To compare the new price with the old price, which ratio do you make? About what is 2850 ÷ 2300, and what percentage of the old price does it correspond to?",
      "When the price falls, the multiplier is less than 1. What percentage of the old price is the new price, and how do you find the decrease?"
    ],
    "ex.10.2.twist": "A ticket price doubles and then falls back to the original price. What is the percentage decrease in that fall?",
    "u.challenge.title": "Vietnam Challenge",
    "u.challenge.intro": "Discount, tax and interest problems in the style of Vietnamese Grade 7–8 tests are waiting for you at the end of the market!",
    "q.10.1-01.hints": [
      "First, what is 15% of 70 dollars?",
      "When a price increases, do you add the amount you found to the old price or subtract it?",
      "Add the increase you found to 70."
    ],
    "q.10.1-01.explain": "15% of 70 is 0.15 × 70 = 10.5. The price increases so add: 70 + 10.5 = 80.5.",
    "q.10.1-02.hints": [
      "How many people is 80% of 3200?",
      "When the population decreases, what do you do with the number of people lost?",
      "Subtract the number you found from 3200."
    ],
    "q.10.1-02.explain": "80% of 3200 = 2560 people leave. People left: 3200 − 2560 = 640.",
    "q.10.1-03.hints": [
      "The extra money is 70% of which amount?",
      "Work out 70% of 240 (0.7 × 240).",
      "Add the extra money to 240."
    ],
    "q.10.1-03.explain": "70% of 240 = 168. New total: 240 + 168 = 408.",
    "q.10.1-04.hints": [
      "Write 380 over 950 as a fraction.",
      "What decimal do you get when you divide 380 by 950?",
      "Multiply the result by 100% to change it to a percentage."
    ],
    "q.10.1-04.explain": "380 ÷ 950 = 0.4 and 0.4 × 100% = 40%.",
    "q.10.1-05.hints": [
      "Now which quantity goes on the bottom (denominator) of the fraction?",
      "What is 950 divided by 380? Is the result bigger or smaller than 1?",
      "Multiply by 100% — the answer can be bigger than 100%."
    ],
    "q.10.1-05.explain": "950 ÷ 380 = 2.5 so 950 is 250% of 380. A number bigger than the original is more than 100% of it.",
    "q.10.1-06.hints": [
      "By how many dollars has the price risen (the absolute change)?",
      "What fraction of the original price of 80 is that increase?",
      "Work out 12 ÷ 80 then multiply by 100%."
    ],
    "q.10.1-06.explain": "Increase 92 − 80 = 12 dollars. 12 ÷ 80 = 0.15 = 15%. Always divide by the original value.",
    "q.10.1-07.hints": [
      "By how many dollars does the price fall?",
      "When working out a percentage decrease, do you divide by the old price or the new price?",
      "Work out 20 ÷ 80."
    ],
    "q.10.1-07.explain": "It falls by 20 dollars, divided by the ORIGINAL price 80: 20 ÷ 80 = 25%. Choosing 33.3% is wrong because it divides by the new price (60); choosing 20% confuses the number of dollars with a percentage.",
    "q.10.1-08.choices": [
      "Exactly $80",
      "Lower than $80",
      "Higher than $80"
    ],
    "q.10.1-08.hints": [
      "Work out the price after the 10% increase first. What is the new price?",
      "Is the 10% decrease worked out on 80 or on the new price?",
      "Is the decrease bigger than the increase?"
    ],
    "q.10.1-08.explain": "Price after the increase: 88. A 10% decrease of 88 is 8.8, leaving 79.2 < 80. The two 10% changes are based on two different amounts so they do not cancel out (mistake: \"increase by 10% then decrease by 10% gets back to the old price\").",
    "q.10.1-09.hints": [
      "After the first 20% increase, what is the price?",
      "The second increase is worked out on which price?",
      "Work out 20% of the new price then add it on."
    ],
    "q.10.1-09.explain": "First: 400 + 80 = 480. Second: 20% of 480 is 96, so the price = 576. It is higher than 560 because the second increase is worked out on a larger price.",
    "q.10.1-10.choices": [
      "Correct, 250 g is left",
      "Impossible, the maximum decrease is 100%",
      "Correct, if he cooks more",
      "Only correct if there is less than 100 g of rice"
    ],
    "q.10.1-10.hints": [
      "A decrease of 100% means how much rice is left?",
      "Can you cook more rice than you have?",
      "So what is the largest possible percentage decrease?"
    ],
    "q.10.1-10.explain": "A decrease of 100% means nothing is left (0 g). You cannot remove more than you have, so a 150% decrease is impossible. (A percentage INCREASE can be over 100%.)",
    "q.10.2-01.hints": [
      "What percentage is the original value?",
      "After a 63% increase, what percentage of the original value is the total?",
      "Change that percentage to a decimal."
    ],
    "q.10.2-01.explain": "100% + 63% = 163% = 1.63. The multiplier for an increase is 1 + (the decimal form of the %).",
    "q.10.2-02.hints": [
      "At the start it is 100%. After a decrease of 88%, what percentage is left?",
      "The calculation is 100% − 88%.",
      "Change the result to a decimal."
    ],
    "q.10.2-02.explain": "100% − 88% = 12% = 0.12.",
    "q.10.2-03.hints": [
      "What percentage of the original value does 0.65 correspond to?",
      "Is a multiplier less than 1 an increase or a decrease?",
      "The part lost is 100% minus the part that is left."
    ],
    "q.10.2-03.explain": "0.65 = 65% left, so a decrease of 100% − 65% = 35%.",
    "q.10.2-04.hints": [
      "What is the multiplier for an 85% increase?",
      "Multiply 12 by that multiplier.",
      "Check: the result must be bigger than 12 and smaller than 24."
    ],
    "q.10.2-04.explain": "The multiplier is 1.85. 12 × 1.85 = 22.2.",
    "q.10.2-05.hints": [
      "After a 60% decrease, what percentage is left?",
      "Which decimal is the multiplier?",
      "Multiply 45 by that multiplier."
    ],
    "q.10.2-05.explain": "40% is left = 0.4. 45 × 0.4 = 18 kg.",
    "q.10.2-06.hints": [
      "What is the multiplier for a 65% increase?",
      "Multiply 964 by that multiplier.",
      "The result has decimals — just enter the number, do not round."
    ],
    "q.10.2-06.explain": "964 × 1.65 = 1590.6.",
    "q.10.2-07.hints": [
      "Find the multiplier: new price divided by old price.",
      "Work out 2850 ÷ 2300. What percentage is the result?",
      "The percentage increase is the part over 100%."
    ],
    "q.10.2-07.explain": "2850 ÷ 2300 ≈ 1.239 = 123.9%. The increase is 123.9% − 100% = 23.9%.",
    "q.10.2-08.choices": [
      "A decrease of 166.7%, the same as the increase",
      "A decrease of 62.5%",
      "A decrease of 100%",
      "A decrease of 37.5%"
    ],
    "q.10.2-08.hints": [
      "When working out a decrease, which number is now the original value (the denominator)?",
      "Work out 60 ÷ 160. That is the multiplier.",
      "Percentage decrease = 100% minus the part that is left."
    ],
    "q.10.2-08.explain": "60 ÷ 160 = 0.375 = 37.5% left, so a decrease of 62.5%. Choosing 37.5% confuses the multiplier with the percentage decrease. An increase and a decrease use the same two numbers but give different percentages.",
    "q.10.2-09.choices": [
      "Only sentence 1 is correct",
      "Both can be correct together",
      "Only sentence 2 is correct",
      "Both are wrong"
    ],
    "q.10.2-09.hints": [
      "What multiplier does \"407% of\" give you?",
      "For \"307% more than\", which amount do you add 307% to?",
      "The original is 100%. What is 100% + 307%?"
    ],
    "q.10.2-09.explain": "100% + 307% = 407%, the same multiplier 4.07. The two sentences give the same information.",
    "q.10.2-10.hints": [
      "Write the multiplier for each decrease.",
      "Multiply the two multipliers together (0.7 × 0.8).",
      "What % is left with the overall multiplier? The overall decrease is the part missing to make 100%."
    ],
    "q.10.2-10.explain": "0.7 × 0.8 = 0.56 = 56% left, an overall decrease of 44% (not 50%).",
    "q.ch-01.q": "A shirt costs 250,000 dong. The shop reduces it by 20%, then reduces the discounted price by a further 10%. What is the final selling price in dong?",
    "q.ch-01.hints": [
      "After the 20% decrease, what percentage of the original price is left?",
      "The second 10% decrease is worked out on which price?",
      "Multiply in turn: 250,000 × 0.8 × 0.9."
    ],
    "q.ch-01.explain": "250,000 × 0.8 = 200,000; × 0.9 = 180,000 dong.",
    "q.ch-02.q": "After a 15% discount, a pair of shoes costs 340,000 dong. Work out the original price of the shoes.",
    "q.ch-02.hints": [
      "What percentage of the original price is 340,000 dong?",
      "If 85% of the original price is 340,000, what is 1%?",
      "Multiply 1% by 100."
    ],
    "q.ch-02.explain": "85% of the original price = 340,000 so the original price = 340,000 ÷ 0.85 = 400,000 dong.",
    "q.ch-03.q": "The price of an item increases by 25% and then decreases by 25%. The final price is what percentage of the original price?",
    "q.ch-03.hints": [
      "Let the original price be 100. What is it after the 25% increase?",
      "Decrease the new price by 25%, not the old price.",
      "Compare the result with 100."
    ],
    "q.ch-03.explain": "100 → 125 → 125 × 0.75 = 93.75. The final price is only 93.75% of the original (1.25 × 0.75 = 0.9375).",
    "q.ch-04.q": "Aunt Lan saves 50 million dong at an interest rate of 6% per year, with the interest added to the principal at the end of each year (compound interest). How many million dong will she have after 2 years? (round to 0.01)",
    "q.ch-04.hints": [
      "After the first year, what do you multiply the amount by?",
      "In the second year, interest is worked out on which amount?",
      "Work out 50 × 1.06 × 1.06."
    ],
    "q.ch-04.explain": "50 × 1.06 = 53; 53 × 1.06 = 56.18 million dong. This is more than simple interest (56) because year 2's interest is also worked out on year 1's interest.",
    "q.ch-05.q": "A fridge has a selling price including 10% VAT of 2,420,000 dong. What is the price before tax in dong?",
    "q.ch-05.hints": [
      "The price before tax is what percentage of the price with tax?",
      "The price including VAT equals the price before tax times which multiplier?",
      "Divide 2,420,000 by that multiplier."
    ],
    "q.ch-05.explain": "Price with VAT = original price × 1.1 so the original price = 2,420,000 ÷ 1.1 = 2,200,000 dong. (It is not 10% of 2,420,000 taken off.)",
    "q.ch-06.q": "The same bicycle has a list price of 800,000 dong. Shop A gives a 30% discount. Shop B gives a 20% discount then a further 12% off the discounted price. Which shop is cheaper and by how many dong? (enter the difference in price)",
    "q.ch-06.hints": [
      "Work out the price at shop A: multiply 800,000 by which multiplier?",
      "Price at B: multiply in turn the two multipliers 0.8 and 0.88.",
      "Find the difference between the two prices."
    ],
    "q.ch-06.explain": "A: 800,000 × 0.7 = 560,000. B: 800,000 × 0.8 × 0.88 = 563,200. A is cheaper by 3,200 dong. Two discounts of 20% and 12% are not the same as a 32% discount.",
    "q.ch-07.q": "A shop's revenue in January rose by 20% compared with December. In February revenue fell by 10% compared with January. By what percentage did February's revenue increase compared with December?",
    "q.ch-07.hints": [
      "Let December's revenue be 100. What is January's?",
      "February is 90% of January.",
      "Compare the number you found with 100."
    ],
    "q.ch-07.explain": "100 → 120 → 108. February is an increase of 8% compared with December.",
    "q.ch-08.q": "A shop marks a shirt 40% above the cost price. During a promotion with 10% off the marked price, it sells for 2,520,000 dong. Work out the cost price of the shirt (in dong).",
    "q.ch-08.hints": [
      "The promotional selling price equals the cost price times which multipliers? (1.4 then 0.9)",
      "Multiply the two multipliers together: what is the overall multiplier?",
      "Divide 2,520,000 by the overall multiplier."
    ],
    "q.ch-08.explain": "1.4 × 0.9 = 1.26. Cost price = 2,520,000 ÷ 1.26 = 2,000,000 dong.",
    "q.ch-09.q": "A rectangle has its length increased by 20% and its width decreased by 20%. By what percentage does its area decrease?",
    "q.ch-09.hints": [
      "The new area equals the old area times which multipliers?",
      "Work out 1.2 × 0.8.",
      "A multiplier less than 1 means the area decreases by what %?"
    ],
    "q.ch-09.explain": "The area is multiplied by 1.2 × 0.8 = 0.96, which is a decrease of 4% (it does not stay the same).",
    "q.ch-10.q": "The price of an item is reduced twice in a row, each time by x% (the second time worked out on the reduced price). After two reductions, the price is only 64% of the original. Find x.",
    "q.ch-10.hints": [
      "If each decrease is x%, what is the multiplier (in terms of x)?",
      "Two decreases give an overall multiplier equal to the square of that multiplier, which is 0.64.",
      "What is the square root of 0.64? From that, work out x."
    ],
    "q.ch-10.explain": "The multiplier k for each time satisfies k² = 0.64 so k = 0.8, which means each decrease is 20%."
  },
  vi: {
    "q.10.1-01.q": "Tăng $70 thêm 15%. Giá mới là bao nhiêu?",
    "q.10.1-02.q": "Một thị trấn có 3200 người. Dân số giảm 80%. Còn lại bao nhiêu người?",
    "q.10.1-03.q": "Mai đã tiết kiệm được $240. Bạn ấy tăng khoản tiết kiệm thêm 70%. Bạn ấy sẽ có bao nhiêu tiền?",
    "q.10.1-04.q": "380 là bao nhiêu phần trăm của 950?",
    "q.10.1-05.q": "950 là bao nhiêu phần trăm của 380?",
    "q.10.1-06.q": "Giá vé tàu tăng từ $80 lên $92. Tính phần trăm tăng.",
    "q.10.1-07.q": "Giá giảm từ $80 xuống $60. Phần trăm giảm là bao nhiêu?",
    "q.10.1-08.q": "Một cửa hàng tăng giá điện thoại từ $80 lên thêm 10%. Hai tuần sau, cửa hàng giảm giá mới đi 10%. So sánh giá cuối cùng với $80.",
    "q.10.1-09.q": "Một chiếc ti vi giá $400. Cửa hàng tăng giá 20%, sau đó tăng giá mới thêm 20% nữa. Tìm giá cuối cùng.",
    "q.10.1-10.q": "Arun có 500 g gạo. Bạn ấy nấu một ít và nói: \"Lượng gạo tôi có đã giảm 150%.\" Điều nào là đúng?",
    "q.10.2-01.q": "Bạn dùng hệ số nhân nào để tăng một giá trị lên 63%?",
    "q.10.2-02.q": "Bạn dùng hệ số nhân nào để giảm một giá trị đi 88%?",
    "q.10.2-03.q": "Một giá trị được nhân với 0,65. Phần trăm giảm là bao nhiêu?",
    "q.10.2-04.q": "Tăng 12 thêm 85% bằng hệ số nhân.",
    "q.10.2-05.q": "Một người đàn ông nặng 45 kg. Sau khi ăn kiêng, cân nặng giảm 60%. Tìm cân nặng mới của ông.",
    "q.10.2-06.q": "Tăng 964 thêm 65%. Hãy dùng hệ số nhân.",
    "q.10.2-07.q": "Giá một chuyến bay tăng từ $2300 lên $2850. Tìm phần trăm tăng, làm tròn đến 1 chữ số thập phân.",
    "q.10.2-08.q": "Mạch của một vận động viên tăng từ 60 lên 160 nhịp mỗi phút, tức tăng khoảng 166,7%. Sau cuộc đua, mạch giảm từ 160 về lại 60. Phần trăm giảm là bao nhiêu?",
    "q.10.2-09.q": "Hai câu: (1) \"Dân số Ấn Độ bằng 407% dân số Mỹ.\" (2) \"Dân số Ấn Độ nhiều hơn dân số Mỹ 307%.\" Phát biểu nào đúng?",
    "q.10.2-10.q": "Một mức giá được giảm 30%, sau đó giá mới lại giảm 20%. Phần trăm giảm tổng cộng là bao nhiêu?"
  }
});
