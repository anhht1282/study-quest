window.GAME_DATA = window.GAME_DATA || { units: [] };
window.GAME_DATA.units.push({
  id: 10,
  title: "Percentages",
  titleVi: "Phần trăm",
  strand: "Number",
  pages: [224,234],
  realm: "Chợ Giảm Giá Hội An",
  emoji: "🏷️",
  story: "Em đến khu chợ đêm đang có hàng chục biển \"Giảm 20%\", \"Tăng 15%\". Muốn biết hàng nào thật sự rẻ và đừng bị lừa bởi những con số, em cần thành thạo phần trăm tăng giảm và hệ số nhân.",
  glossary: [
    {
      en: "absolute change",
      vi: "thay đổi tuyệt đối",
      def: "Hiệu giữa giá trị mới và giá trị cũ, tính bằng đơn vị gốc (đồng, kg...)."
    },
    {
      en: "percentage increase",
      vi: "phần trăm tăng",
      def: "Phần tăng thêm so với giá trị ban đầu, viết dưới dạng %."
    },
    {
      en: "percentage decrease",
      vi: "phần trăm giảm",
      def: "Phần giảm đi so với giá trị ban đầu, viết dưới dạng %."
    },
    {
      en: "multiplier",
      vi: "hệ số nhân",
      def: "Số mà ta nhân với giá trị cũ để ra giá trị mới (tăng 20% thì nhân 1,2)."
    },
    {
      en: "original value",
      vi: "giá trị ban đầu",
      def: "Giá trị gốc, luôn là mẫu số khi tính phần trăm thay đổi."
    },
    {
      en: "percentage change",
      vi: "phần trăm thay đổi",
      def: "Mức thay đổi chia cho giá trị ban đầu rồi nhân 100%."
    }
  ],
  sections: [
    {
      id: "10.1",
      title: "Percentage increases and decreases",
      titleVi: "Phần trăm tăng và giảm",
      learn: ["Thay đổi tuyệt đối = giá trị mới − giá trị cũ. Phần trăm thay đổi = thay đổi ÷ giá trị CŨ × 100%.","Để tăng một giá trị lên p%: tính p% của nó rồi CỘNG vào. Để giảm: tính p% rồi TRỪ đi.","Giá trị gốc luôn là mẫu số: từ 75 lên 105 tăng 30 ÷ 75 = 40%, nhưng từ 105 xuống 75 giảm 30 ÷ 105 ≈ 28,6%.","Tăng p% rồi giảm p% không trở về giá cũ vì hai lần tính trên hai cơ sở khác nhau.","Phần trăm tăng có thể lớn hơn 100%, nhưng phần trăm giảm không thể vượt quá 100%."],
      example: {
        q: "Thư viện có 2800 cuốn sách. Tìm số sách nếu (a) tăng 84%, (b) giảm 37%.",
        steps: ["(a) 84% của 2800 = 0,84 × 2800 = 2352; tổng mới = 2800 + 2352 = 5152.","(b) 37% của 2800 = 0,37 × 2800 = 1036; còn lại = 2800 − 1036 = 1764."],
        prompts: ["84% của 2800 là bao nhiêu? Em đổi phần trăm sang số thập phân rồi nhân. Sách 'tăng' thì tổng mới tính thế nào?","Làm tương tự với 37%. 'Giảm' thì em cộng hay trừ phần vừa tính?"],
        answer: {"type":"text","value":"5152 và 1764","accept":["5152;1764","5152,1764","(5152,1764)","5152 and 1764","5152 va 1764"]},
        twist: {"q":"Nếu số sách tăng 20% rồi sau đó giảm 20% thì số sách cuối cùng là bao nhiêu? Có quay về 2800 không?","answer":{"type":"num","value":2688}}
      },
      questions: [
        {"id":"10.1-01","type":"num","diff":1,"skill":"pct-increase","source":"book","lang":"en","q":"Increase $70 by 15%. What is the new price?","svg":null,"choices":null,"answer":80.5,"accept":[],"tol":0.01,"unitLabel":"$","hints":["Trước hết, 15% của 70 đô là bao nhiêu?","Giá tăng nghĩa là em cộng hay trừ số vừa tìm vào giá cũ?","Cộng 70 với số tiền tăng em vừa tìm."],"explain":"15% của 70 là 0,15 × 70 = 10,5. Giá tăng nên cộng: 70 + 10,5 = 80,5.","why":null},
        {"id":"10.1-02","type":"num","diff":1,"skill":"pct-decrease","source":"book","lang":"en","q":"A town has 3200 people. The population decreases by 80%. How many people are left?","svg":null,"choices":null,"answer":640,"accept":[],"tol":0,"unitLabel":"người","hints":["80% của 3200 người là bao nhiêu người?","Dân số giảm thì số người mất đi được trừ vào đâu?","Lấy 3200 trừ số người vừa tìm."],"explain":"80% của 3200 = 2560 người rời đi. Còn lại 3200 − 2560 = 640 người.","why":null},
        {"id":"10.1-03","type":"num","diff":2,"skill":"pct-increase","source":"book","lang":"en","q":"Mai has saved $240. She increases her savings by 70%. How much will she have?","svg":null,"choices":null,"answer":408,"accept":[],"tol":0,"unitLabel":"$","hints":["Số tiền tăng thêm là 70% của khoản nào?","Tính 70% của 240 (0,7 × 240).","Cộng số tiền tăng thêm vào 240."],"explain":"70% của 240 = 168. Tổng mới: 240 + 168 = 408.","why":null},
        {"id":"10.1-04","type":"num","diff":2,"skill":"pct-of","source":"book","lang":"en","q":"What percentage of 950 is 380?","svg":null,"choices":null,"answer":40,"accept":[],"tol":0,"unitLabel":"%","hints":["Viết 380 trên 950 dưới dạng phân số.","Chia 380 cho 950 được số thập phân nào?","Nhân kết quả với 100% để đổi ra phần trăm."],"explain":"380 ÷ 950 = 0,4 và 0,4 × 100% = 40%.","why":null},
        {"id":"10.1-05","type":"num","diff":2,"skill":"pct-of","source":"book","lang":"en","q":"What percentage of 380 is 950?","svg":null,"choices":null,"answer":250,"accept":[],"tol":0,"unitLabel":"%","hints":["Bây giờ đại lượng nào đứng ở dưới (mẫu số) của phân số?","Chia 950 cho 380 được bao nhiêu? Kết quả lớn hơn hay nhỏ hơn 1?","Nhân với 100% — đáp án có thể lớn hơn 100%."],"explain":"950 ÷ 380 = 2,5 nên 950 là 250% của 380. Một số lớn hơn số gốc thì phần trăm lớn hơn 100%.","why":null},
        {"id":"10.1-06","type":"num","diff":2,"skill":"pct-change","source":"book","lang":"en","q":"A train ticket rises in price from $80 to $92. Work out the percentage increase.","svg":null,"choices":null,"answer":15,"accept":[],"tol":0,"unitLabel":"%","hints":["Giá tăng thêm bao nhiêu đô (số tuyệt đối)?","Phần tăng đó là bao nhiêu phần của giá gốc 80?","Lấy 12 ÷ 80 rồi nhân 100%."],"explain":"Tăng 92 − 80 = 12 đô. 12 ÷ 80 = 0,15 = 15%. Luôn chia cho giá trị ban đầu.","why":null},
        {"id":"10.1-07","type":"mc","diff":2,"skill":"pct-decrease","source":"book","lang":"en","q":"A price falls from $80 to $60. What is the percentage decrease?","svg":null,"choices":["20%","25%","33,3%","75%"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Giá giảm bao nhiêu đô?","Khi tính phần trăm giảm, em chia cho giá cũ hay giá mới?","Tính 20 ÷ 80."],"explain":"Giảm 20 đô, chia cho giá GỐC 80: 20 ÷ 80 = 25%. Chọn 33,3% là sai vì đã chia cho giá mới (60); chọn 20% là nhầm số đô với phần trăm.","why":null},
        {"id":"10.1-08","type":"mc","diff":3,"skill":"successive-change","source":"book","lang":"en","q":"A shop raises the price of a phone from $80 by 10%. Two weeks later it reduces the new price by 10%. Compare the final price with $80.","svg":null,"choices":["Đúng bằng $80","Thấp hơn $80","Cao hơn $80"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Tính giá sau khi tăng 10% trước. Giá mới là bao nhiêu?","10% lần giảm được tính trên giá 80 hay trên giá mới?","Phần giảm có lớn hơn phần tăng không?"],"explain":"Giá sau tăng: 88. Giảm 10% của 88 là 8,8 nên còn 79,2 < 80. Hai lần 10% tính trên hai cơ sở khác nhau nên không triệt tiêu nhau (sai lầm: \"tăng 10% rồi giảm 10% là về giá cũ\").","why":null},
        {"id":"10.1-09","type":"num","diff":3,"skill":"successive-change","source":"book","lang":"en","q":"A television costs $400. The shop increases the price by 20%, then increases the new price by a further 20%. Find the final price.","svg":null,"choices":null,"answer":576,"accept":[],"tol":0,"unitLabel":"$","hints":["Sau lần tăng 20% thứ nhất, giá là bao nhiêu?","Lần tăng thứ hai được tính trên giá nào?","Tính 20% của giá mới rồi cộng vào."],"explain":"Lần 1: 400 + 80 = 480. Lần 2: 20% của 480 là 96, giá = 576. Cao hơn 560 vì lần tăng thứ hai tính trên giá lớn hơn.","why":null},
        {"id":"10.1-10","type":"mc","diff":3,"skill":"pct-limits","source":"book","lang":"en","q":"Arun has 500 g of rice. He cooks some and says: \"The amount I have has decreased by 150%.\" What is correct?","svg":null,"choices":["Đúng, còn lại 250 g","Không thể, giảm tối đa là 100%","Đúng, nếu nấu nhiều hơn","Chỉ đúng nếu gạo ít hơn 100 g"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Giảm 100% nghĩa là lượng gạo còn lại là bao nhiêu?","Em có thể nấu nhiều gạo hơn số gạo mình đang có không?","Vậy phần trăm giảm lớn nhất có thể là bao nhiêu?"],"explain":"Giảm 100% là hết sạch (0 g). Không thể bỏ đi nhiều hơn mình có, nên giảm 150% là không thể xảy ra. (Phần trăm TĂNG thì có thể trên 100%.)","why":null}
      ]
    },
    {
      id: "10.2",
      title: "Using a multiplier",
      titleVi: "Dùng hệ số nhân",
      learn: ["Tăng p% tương đương nhân với (1 + p/100). Ví dụ tăng 65% nhân 1,65.","Giảm p% tương đương nhân với (1 − p/100). Ví dụ giảm 54% nhân 0,46.","Giá trị cũ × hệ số nhân = giá trị mới, nên hệ số nhân = giá trị mới ÷ giá trị cũ.","Nếu hệ số nhân > 1 thì là tăng (phần vượt 100%); nếu < 1 thì là giảm (100% trừ phần còn lại).","Nhiều lần thay đổi liên tiếp: nhân các hệ số lại với nhau."],
      example: {
        q: "Giá chuyến bay là $2300. Tính phần trăm thay đổi nếu giá (a) tăng lên $2850, (b) giảm xuống $1690.",
        steps: ["(a) Hệ số = 2850 ÷ 2300 ≈ 1,239 = 123,9% nên tăng 23,9%.","(b) Hệ số = 1690 ÷ 2300 ≈ 0,735 = 73,5% nên giảm 100% − 73,5% = 26,5%."],
        prompts: ["Muốn so sánh giá mới với giá cũ, em lập tỉ số nào? 2850 ÷ 2300 bằng khoảng bao nhiêu, ứng với bao nhiêu phần trăm giá cũ?","Giá giảm thì hệ số nhỏ hơn 1. Giá mới bằng bao nhiêu phần trăm giá cũ, và em tìm mức giảm bằng cách nào?"],
        answer: {"type":"text","value":"23,9% và 26,5%","accept":["23.9% và 26.5%","23,9%;26,5%","23.9%;26.5%","23,9%,26,5%","23.9%,26.5%","23,9 và 26,5","23.9 và 26.5","23,9;26,5","23.9;26.5","tăng 23,9% và giảm 26,5%"]},
        twist: {"q":"Giá vé tăng gấp đôi rồi sau đó giảm về lại giá ban đầu. Phần trăm giảm trong lần giảm đó là bao nhiêu?","answer":{"type":"num","value":50}}
      },
      questions: [
        {"id":"10.2-01","type":"num","diff":1,"skill":"multiplier","source":"book","lang":"en","q":"What multiplier would you use to increase a value by 63%?","svg":null,"choices":null,"answer":1.63,"accept":[],"tol":0,"unitLabel":"","hints":["Giá trị ban đầu chiếm bao nhiêu phần trăm?","Sau khi tăng 63% thì tổng là bao nhiêu phần trăm giá trị đầu?","Đổi phần trăm đó ra số thập phân."],"explain":"100% + 63% = 163% = 1,63. Hệ số nhân khi tăng là 1 + (số thập phân của %).","why":null},
        {"id":"10.2-02","type":"num","diff":1,"skill":"multiplier","source":"book","lang":"en","q":"What multiplier would you use to decrease a value by 88%?","svg":null,"choices":null,"answer":0.12,"accept":[],"tol":0,"unitLabel":"","hints":["Ban đầu là 100%. Giảm 88% thì còn lại bao nhiêu phần trăm?","Phép tính là 100% − 88%.","Đổi kết quả ra số thập phân."],"explain":"100% − 88% = 12% = 0,12.","why":null},
        {"id":"10.2-03","type":"num","diff":1,"skill":"multiplier","source":"book","lang":"en","q":"A value is multiplied by 0.65. What is the percentage decrease?","svg":null,"choices":null,"answer":35,"accept":[],"tol":0,"unitLabel":"%","hints":["0,65 tương ứng bao nhiêu phần trăm giá trị ban đầu?","Hệ số nhỏ hơn 1 là tăng hay giảm?","Phần bị mất đi là 100% trừ phần còn lại."],"explain":"0,65 = 65% còn lại, nên giảm 100% − 65% = 35%.","why":null},
        {"id":"10.2-04","type":"num","diff":2,"skill":"use-multiplier","source":"book","lang":"en","q":"Increase 12 by 85% using a multiplier.","svg":null,"choices":null,"answer":22.2,"accept":[],"tol":0,"unitLabel":"","hints":["Hệ số nhân khi tăng 85% là bao nhiêu?","Nhân 12 với hệ số đó.","Kiểm tra: kết quả phải lớn hơn 12 và nhỏ hơn 24."],"explain":"Hệ số 1,85. 12 × 1,85 = 22,2.","why":null},
        {"id":"10.2-05","type":"num","diff":2,"skill":"use-multiplier","source":"book","lang":"en","q":"A man has a mass of 45 kg. After a diet it decreases by 60%. Find his new mass.","svg":null,"choices":null,"answer":18,"accept":[],"tol":0,"unitLabel":"kg","hints":["Giảm 60% thì còn lại bao nhiêu phần trăm?","Hệ số nhân là số thập phân nào?","Nhân 45 với hệ số đó."],"explain":"Còn 40% = 0,4. 45 × 0,4 = 18 kg.","why":null},
        {"id":"10.2-06","type":"num","diff":2,"skill":"use-multiplier","source":"book","lang":"en","q":"Increase 964 by 65%. Use a multiplier.","svg":null,"choices":null,"answer":1590.6,"accept":[],"tol":0.01,"unitLabel":"","hints":["Hệ số nhân khi tăng 65% là bao nhiêu?","Nhân 964 với hệ số đó.","Kết quả có thập phân — em chỉ cần nhập số, không làm tròn."],"explain":"964 × 1,65 = 1590,6.","why":null},
        {"id":"10.2-07","type":"num","diff":2,"skill":"find-percentage-change","source":"book","lang":"en","q":"The cost of a flight rises from $2300 to $2850. Find the percentage increase to 1 d.p.","svg":null,"choices":null,"answer":23.9,"accept":[],"tol":0.1,"unitLabel":"%","hints":["Tìm hệ số nhân: giá mới chia giá cũ.","Tính 2850 ÷ 2300. Kết quả là bao nhiêu phần trăm?","Phần trăm tăng là phần vượt quá 100%."],"explain":"2850 ÷ 2300 ≈ 1,239 = 123,9%. Tăng 123,9% − 100% = 23,9%.","why":null},
        {"id":"10.2-08","type":"mc","diff":2,"skill":"find-percentage-change","source":"book","lang":"en","q":"An athlete's pulse rises from 60 to 160 beats per minute, an increase of about 166,7%. After the race it falls from 160 back to 60. What is the percentage decrease?","svg":null,"choices":["Giảm 166,7%, giống mức tăng","Giảm 62,5%","Giảm 100%","Giảm 37,5%"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Khi tính giảm, giá trị ban đầu (mẫu số) bây giờ là số nào?","Tính 60 ÷ 160. Đó là hệ số nhân.","Phần trăm giảm = 100% trừ phần còn lại."],"explain":"60 ÷ 160 = 0,375 = 37,5% còn lại, nên giảm 62,5%. Chọn 37,5% là nhầm hệ số nhân với phần trăm giảm. Tăng và giảm cho cùng hai số nhưng phần trăm khác nhau.","why":null},
        {"id":"10.2-09","type":"mc","diff":3,"skill":"pct-meaning","source":"book","lang":"en","q":"Two sentences: (1) \"The population of India is 407% of the population of the USA.\" (2) \"The population of India is 307% more than the population of the USA.\" Which statement is correct?","svg":null,"choices":["Chỉ câu 1 đúng","Cả hai có thể cùng đúng","Chỉ câu 2 đúng","Cả hai đều sai"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["\"407% của\" cho em hệ số nhân nào?","\"nhiều hơn 307%\" thì cộng 307% vào mức nào?","Gốc là 100%. 100% + 307% bằng bao nhiêu?"],"explain":"100% + 307% = 407%, cùng một hệ số nhân 4,07. Hai câu diễn đạt cùng một thông tin.","why":null},
        {"id":"10.2-10","type":"num","diff":3,"skill":"successive-change","source":"book","lang":"en","q":"A price is reduced by 30%, then the new price is reduced by 20%. What is the overall percentage decrease?","svg":null,"choices":null,"answer":44,"accept":[],"tol":0,"unitLabel":"%","hints":["Viết hệ số nhân cho mỗi lần giảm.","Nhân hai hệ số lại với nhau (0,7 × 0,8).","Hệ số tổng còn lại bao nhiêu %? Giảm tổng cộng là phần còn thiếu để đủ 100%."],"explain":"0,7 × 0,8 = 0,56 = 56% còn lại, giảm tổng 44% (không phải 50%).","why":null}
      ]
    }
  ],
  challenge: {
    title: "Thử thách Việt Nam",
    intro: "Những bài toán khuyến mãi, thuế và lãi suất kiểu kiểm tra lớp 7–8 đang chờ em ở cuối chợ!",
    questions: [
      {"id":"ch-01","type":"num","diff":2,"skill":"successive-change","source":"vn","lang":"vi","q":"Một chiếc áo giá 250 000 đồng. Cửa hàng giảm 20%, sau đó giảm thêm 10% trên giá đã giảm. Hỏi giá bán cuối cùng là bao nhiêu đồng?","svg":null,"choices":null,"answer":180000,"accept":[],"tol":0,"unitLabel":"đồng","hints":["Sau lần giảm 20%, giá còn bao nhiêu phần trăm giá gốc?","Lần giảm 10% sau tính trên giá nào?","Nhân liên tiếp: 250 000 × 0,8 × 0,9."],"explain":"250 000 × 0,8 = 200 000; × 0,9 = 180 000 đồng.","why":null},
      {"id":"ch-02","type":"num","diff":2,"skill":"find-original","source":"vn","lang":"vi","q":"Sau khi giảm giá 15%, một đôi giày có giá 340 000 đồng. Tính giá ban đầu của đôi giày.","svg":null,"choices":null,"answer":400000,"accept":[],"tol":0,"unitLabel":"đồng","hints":["340 000 đồng ứng với bao nhiêu phần trăm giá gốc?","Nếu 85% giá gốc là 340 000 thì 1% là bao nhiêu?","Nhân 1% với 100."],"explain":"85% giá gốc = 340 000 nên giá gốc = 340 000 ÷ 0,85 = 400 000 đồng.","why":null},
      {"id":"ch-03","type":"num","diff":3,"skill":"successive-change","source":"vn","lang":"vi","q":"Giá một món hàng tăng 25% rồi sau đó giảm 25%. Giá cuối cùng bằng bao nhiêu phần trăm giá ban đầu?","svg":null,"choices":null,"answer":93.75,"accept":[],"tol":0,"unitLabel":"%","hints":["Gọi giá ban đầu là 100. Sau khi tăng 25% là bao nhiêu?","Giảm 25% của giá mới, không phải của giá cũ.","So sánh kết quả với 100."],"explain":"100 → 125 → 125 × 0,75 = 93,75. Giá cuối chỉ bằng 93,75% giá đầu (1,25 × 0,75 = 0,9375).","why":null},
      {"id":"ch-04","type":"num","diff":3,"skill":"interest","source":"vn","lang":"vi","q":"Bác Lan gửi tiết kiệm 50 triệu đồng với lãi suất 6%/năm, lãi cuối năm được nhập vào gốc (lãi kép). Sau 2 năm bác có bao nhiêu triệu đồng? (làm tròn đến 0,01)","svg":null,"choices":null,"answer":56.18,"accept":[],"tol":0.01,"unitLabel":"triệu đồng","hints":["Sau năm thứ nhất, số tiền nhân với hệ số nào?","Năm thứ hai tính lãi trên số tiền nào?","Tính 50 × 1,06 × 1,06."],"explain":"50 × 1,06 = 53; 53 × 1,06 = 56,18 triệu đồng. Hơn lãi đơn (56) vì lãi năm 2 tính cả trên tiền lãi năm 1.","why":null},
      {"id":"ch-05","type":"num","diff":2,"skill":"vat","source":"vn","lang":"vi","q":"Một chiếc tủ lạnh có giá bán đã gồm thuế VAT 10% là 2 420 000 đồng. Hỏi giá chưa tính thuế là bao nhiêu đồng?","svg":null,"choices":null,"answer":2200000,"accept":[],"tol":0,"unitLabel":"đồng","hints":["Giá chưa thuế ứng với bao nhiêu phần trăm giá đã có thuế?","Giá đã gồm VAT bằng giá chưa thuế nhân với hệ số nào?","Chia 2 420 000 cho hệ số đó."],"explain":"Giá có VAT = giá gốc × 1,1 nên giá gốc = 2 420 000 ÷ 1,1 = 2 200 000 đồng. (Không phải trừ 10% của 2 420 000.)","why":null},
      {"id":"ch-06", "howto": "Chỉ cần nhập số tiền chênh lệch giữa giá ở hai cửa hàng, không cần ghi tên cửa hàng.","type":"num","diff":3,"skill":"compare-discounts","source":"vn","lang":"vi","q":"Cùng một chiếc xe đạp giá niêm yết 800 000 đồng. Cửa hàng A giảm 30%. Cửa hàng B giảm 20% rồi giảm tiếp 12% trên giá đã giảm. Mua ở cửa hàng nào rẻ hơn và rẻ hơn bao nhiêu đồng? (nhập số tiền chênh lệch)","svg":null,"choices":null,"answer":3200,"accept":[],"tol":0,"unitLabel":"đồng","hints":["Tính giá ở cửa hàng A: nhân 800 000 với hệ số nào?","Giá ở B: nhân liên tiếp hai hệ số 0,8 và 0,88.","Lấy hiệu hai giá."],"explain":"A: 800 000 × 0,7 = 560 000. B: 800 000 × 0,8 × 0,88 = 563 200. A rẻ hơn 3 200 đồng. Hai lần giảm 20% và 12% chưa bằng giảm 32%.","why":null},
      {"id":"ch-07","type":"num","diff":3,"skill":"successive-change","source":"vn","lang":"vi","q":"Doanh thu của một cửa hàng tháng 1 tăng 20% so với tháng 12. Tháng 2 doanh thu giảm 10% so với tháng 1. Hỏi doanh thu tháng 2 tăng bao nhiêu phần trăm so với tháng 12?","svg":null,"choices":null,"answer":8,"accept":[],"tol":0,"unitLabel":"%","hints":["Gọi doanh thu tháng 12 là 100. Tháng 1 là bao nhiêu?","Tháng 2 bằng 90% của tháng 1.","So sánh số tìm được với 100."],"explain":"100 → 120 → 108. Tháng 2 tăng 8% so với tháng 12.","why":null},
      {"id":"ch-08","type":"num","diff":3,"skill":"find-original","source":"vn","lang":"vi","q":"Một cửa hàng niêm yết áo cao hơn giá vốn 40%. Khi khuyến mãi giảm 10% giá niêm yết thì bán được 2 520 000 đồng. Tính giá vốn của chiếc áo (đồng).","svg":null,"choices":null,"answer":2000000,"accept":[],"tol":0,"unitLabel":"đồng","hints":["Giá bán sau khuyến mãi bằng giá vốn nhân với hệ số nào? (1,4 rồi 0,9)","Nhân hai hệ số lại được hệ số tổng là bao nhiêu?","Chia 2 520 000 cho hệ số tổng."],"explain":"1,4 × 0,9 = 1,26. Giá vốn = 2 520 000 ÷ 1,26 = 2 000 000 đồng.","why":null},
      {"id":"ch-09","type":"num","diff":3,"skill":"successive-change","source":"vn","lang":"vi","q":"Một hình chữ nhật có chiều dài tăng 20% và chiều rộng giảm 20%. Diện tích của nó giảm bao nhiêu phần trăm?","svg":null,"choices":null,"answer":4,"accept":[],"tol":0,"unitLabel":"%","hints":["Diện tích mới bằng diện tích cũ nhân với những hệ số nào?","Tính 1,2 × 0,8.","Hệ số nhỏ hơn 1 nghĩa là diện tích giảm bao nhiêu %?"],"explain":"Diện tích nhân 1,2 × 0,8 = 0,96, tức giảm 4% (không phải giữ nguyên).","why":null},
      {"id":"ch-10","type":"num","diff":3,"skill":"successive-change","source":"vn","lang":"vi","q":"Giá một món hàng được giảm hai lần liên tiếp, mỗi lần giảm x% (lần sau tính trên giá đã giảm). Sau hai lần, giá chỉ còn 64% giá ban đầu. Tìm x.","svg":null,"choices":null,"answer":20,"accept":[],"tol":0,"unitLabel":"%","hints":["Mỗi lần giảm x% thì hệ số nhân là bao nhiêu (viết theo x)?","Hai lần giảm cho hệ số nhân tổng bằng bình phương của hệ số đó, bằng 0,64.","Căn bậc hai của 0,64 là bao nhiêu? Từ đó suy ra x."],"explain":"Hệ số mỗi lần k thỏa k² = 0,64 nên k = 0,8, tức mỗi lần giảm 20%.","why":null}
    ]
  },
  project: null
});
