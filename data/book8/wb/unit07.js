window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 7,
  pages: [74,95],
  sections: {
    "7.1": [
      {"id":"wb-7.1-01","type":"mc","diff":2,"skill":"order-decimals","source":"wb","lang":"en","q":"Five fraction cards: A = 7/8, B = 4/5, C = 3/10, D = 3/20, E = 8/25. Convert each to a decimal, then choose the list in order of size, smallest first.","svg":null,"choices":["D, C, E, B, A","C, D, E, B, A","D, C, B, E, A","A, B, E, C, D"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Mỗi phân số là một phép chia: hãy chia tử cho mẫu cho từng thẻ.","Em được các số 0,875; 0,8; 0,3; 0,15; 0,32. Thẻ nào ứng với số nào?","Sắp xếp năm số thập phân từ bé đến lớn rồi đổi lại thành chữ cái."],"explain":"A = 0,875; B = 0,8; C = 0,3; D = 0,15; E = 0,32. Từ nhỏ đến lớn: 0,15 < 0,3 < 0,32 < 0,8 < 0,875, tức D, C, E, B, A.","why":null},
      {"id":"wb-7.1-02","type":"mc","diff":2,"skill":"recurring-misconception","source":"wb","lang":"en","q":"Marcus says: '1/6 and 2/6 are recurring decimals, so any fraction with denominator 6 is a recurring decimal.' Which fraction is a counter-example to his claim?","svg":null,"choices":["3/6","4/6","5/6","1/12"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Một phản ví dụ phải có mẫu số 6 nhưng lại là số thập phân hữu hạn. Hãy thử rút gọn từng phân số có mẫu 6.","3/6 rút gọn thành phân số nào? Phân số đó đổi ra thập phân thế nào?","4/6 và 5/6 sau khi rút gọn có mẫu số bao nhiêu? 1/12 có mẫu số 6 không?"],"explain":"3/6 = 1/2 = 0,5 là số thập phân hữu hạn. 4/6 = 2/3 = 0,(6) và 5/6 = 0,8(3) đều tuần hoàn; 1/12 không có mẫu số 6. Cần rút gọn trước rồi mới xét mẫu số.","why":null},
      {"id":"wb-7.1-03","type":"num","diff":1,"skill":"fraction-to-decimal","source":"wb","lang":"en","q":"Use a written method to convert 27/40 to a decimal.","svg":null,"choices":null,"answer":0.675,"accept":[],"tol":0,"unitLabel":"","hints":["Phân số 27/40 nghĩa là phép chia nào?","Hãy chia 27 cho 40; thêm các chữ số 0 sau dấu phẩy khi cần.","Phép chia có dừng lại không? Kết quả có dạng 0,6…?"],"explain":"27 ÷ 40 = 0,675. Phép chia dừng lại nên đây là số thập phân hữu hạn.","why":null},
      {"id":"wb-7.1-04","type":"num","diff":2,"skill":"fraction-to-decimal","source":"wb","lang":"en","q":"Use a calculator to write 4/15 as a decimal, correct to 3 decimal places.","svg":null,"choices":null,"answer":0.267,"accept":[],"tol":0.0005,"unitLabel":"","hints":["Chia 4 cho 15 trên máy tính. Em thấy chữ số nào lặp lại?","Viết ít nhất 4 chữ số thập phân của kết quả.","Nhìn chữ số thập phân thứ tư để quyết định làm tròn lên hay giữ nguyên chữ số thứ ba."],"explain":"4 ÷ 15 = 0,2666… = 0,2(6). Chữ số thứ tư là 6 nên làm tròn lên: 0,267.","why":null},
      {"id":"wb-7.1-05","type":"mc","diff":3,"skill":"recurring-notation","source":"wb","lang":"en","q":"Su is asked to write 8/11 as a decimal. She writes 0.7222… (only the 2 repeating). Her calculator shows 8 ÷ 11 = 0.72727272. What is her mistake?","svg":null,"choices":["Both digits repeat: 8/11 = 0.7272… = 0.(72)","Nothing; only the last digit ever repeats","8/11 is a terminating decimal","The 7 should repeat and the 2 should not"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy đọc kỹ các chữ số trên màn hình máy tính: 0,72727272. Mẫu lặp lại là gì?","Mẫu lặp có gồm một chữ số hay nhiều chữ số?","Cách viết đúng cần đặt phần nào trong ngoặc?"],"explain":"Dãy 7272… lặp lại theo cặp «72», nên 8/11 = 0,(72). Su nhầm khi chỉ cho rằng chữ số 2 lặp lại. Khi nhiều chữ số lặp, phải viết cả nhóm lặp trong ngoặc.","why":null},
      {"id":"wb-7.1-06","type":"num","diff":3,"skill":"repeat-length","source":"wb","lang":"en","q":"5/39 = 0.128205128205… How many digits are in the repeating block?","svg":null,"choices":null,"answer":6,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy viết các chữ số sau dấu phẩy: 1, 2, 8, 2, 0, 5, 1, 2, 8, …","Nhóm chữ số nào xuất hiện lại lần đầu?","Đếm số chữ số trong nhóm đó, từ chữ số đầu tiên cho đến ngay trước khi nhóm bắt đầu lặp."],"explain":"Các chữ số 1, 2, 8, 2, 0, 5 rồi lại 1, 2, 8, 2, 0, 5… Phần lặp là 128205 gồm 6 chữ số, nên 5/39 = 0,(128205).","why":null},
      {"id":"wb-7.1-07","type":"num","diff":2,"skill":"fraction-to-decimal-word","source":"wb","lang":"en","q":"There are 27 students in a class and 22 of them are right-handed. What fraction of the class is left-handed? Write it as a decimal correct to 3 decimal places.","svg":null,"choices":null,"answer":0.185,"accept":[],"tol":0.0005,"unitLabel":"","hints":["Có bao nhiêu học sinh thuận tay trái? Em lấy 27 trừ đi số nào?","Viết phân số học sinh thuận tay trái trên tổng số học sinh.","Chia tử cho mẫu rồi làm tròn đến 3 chữ số thập phân."],"explain":"Thuận tay trái: 27 − 22 = 5 em, chiếm 5/27 = 0,185185… = 0,(185) ≈ 0,185.","why":null},
      {"id":"wb-7.1-08","type":"mc","diff":3,"skill":"order-mixed-forms","source":"wb","lang":"en","q":"Write 0.56, 4/7, 0.6, 7/13, 58.2%, 55% and 0.5 in order of size, smallest first. Which one is fourth in the list?","svg":null,"choices":["4/7","0.56","7/13","58.2%"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy đổi mọi số về số thập phân: phân số bằng phép chia, phần trăm chia cho 100.","4/7 ≈ 0,571 và 7/13 ≈ 0,538. Còn 58,2% và 55% bằng bao nhiêu?","Xếp bảy số thập phân từ bé đến lớn rồi đếm đến vị trí thứ tư."],"explain":"0,5 < 7/13 (≈ 0,538) < 55% (0,55) < 0,56 < 4/7 (≈ 0,571) < 58,2% (0,582) < 0,6. Số thứ tư là 0,56.","why":null},
      {"id":"wb-7.1-09","type":"num","diff":2,"skill":"time-as-decimal","source":"wb","lang":"en","q":"A film lasts 11 hours 25 minutes in a marathon. Write this time in hours as a decimal, correct to 2 decimal places.","svg":null,"choices":null,"answer":11.42,"accept":[],"tol":0.005,"unitLabel":"h","hints":["25 phút là bao nhiêu phần của một giờ? Viết thành phân số.","Rút gọn phân số đó rồi đổi ra số thập phân.","Cộng với 11 và làm tròn đến 2 chữ số thập phân."],"explain":"25 phút = 25/60 = 5/12 giờ = 0,41666… Vậy 11 giờ 25 phút = 11,41666… ≈ 11,42 giờ.","why":null},
      {"id":"wb-7.1-10","type":"mc","diff":3,"skill":"recurring-arithmetic","source":"wb","lang":"en","q":"Arun says: 'My teacher writes 1/150 = 0.00666… and 2/150 = 0.01333…, but she must be wrong, because 2/150 is double 1/150 and double 0.006 is 0.012, not 0.013.' What is wrong with Arun's reasoning?","svg":null,"choices":["He doubled 0.006 instead of 0.00666…; doubling 0.00666… gives 0.01333…","He should have halved instead of doubled","Recurring decimals cannot be doubled","The teacher is wrong and Arun is right"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["0,006 và 0,00666… có phải cùng một số không? Số nào lớn hơn?","Hãy nhân đôi từng chữ số 6 lặp lại: 0,00666… × 2 bằng bao nhiêu?","Kết quả có khớp với 0,01333… của cô giáo không?"],"explain":"Arun bỏ qua phần lặp. 0,00666… × 2 = 0,01333… (mỗi 6 nhân đôi thành 12 nên có chuyển 1 sang hàng trước). Cô giáo đúng. Sai lầm: coi số thập phân vô hạn tuần hoàn như số đã cắt cụt.","why":null}
    ],
    "7.2": [
      {"id":"wb-7.2-01","type":"mc","diff":1,"skill":"compare-fractions","source":"wb","lang":"en","q":"Write the correct sign between 40/9 and 4 1/3.","svg":null,"choices":["<",">","="],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Đổi 40/9 thành hỗn số: 40 chia 9 được mấy, còn dư mấy?","Hai số cùng phần nguyên 4. Hãy quy đồng 1/3 về mẫu số 9.","So sánh hai phần phân số có cùng mẫu số."],"explain":"40/9 = 4 4/9 và 4 1/3 = 4 3/9. Vì 4/9 > 3/9 nên 40/9 > 4 1/3.","why":null},
      {"id":"wb-7.2-02","type":"mc","diff":2,"skill":"compare-negative","source":"wb","lang":"en","q":"Write the correct sign between −4 3/5 and −47/10.","svg":null,"choices":["<",">","="],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Đổi −47/10 thành hỗn số âm.","Quy đồng phần phân số của −4 3/5 về mẫu số 10.","Với số âm, số có phần phân số nhỏ hơn thì lớn hơn hay nhỏ hơn?"],"explain":"−47/10 = −4 7/10 và −4 3/5 = −4 6/10. 6/10 < 7/10 nên −4 6/10 gần 0 hơn, tức −4 3/5 > −47/10.","why":null},
      {"id":"wb-7.2-03","type":"mc","diff":2,"skill":"compare-fractions","source":"wb","lang":"en","q":"Write the correct sign between 22/3 and 7 2/5.","svg":null,"choices":["<",">","="],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Đổi 22/3 thành hỗn số.","Hai phần phân số 1/3 và 2/5 có mẫu số chung nhỏ nhất là bao nhiêu?","Quy đồng rồi so hai phân số."],"explain":"22/3 = 7 1/3 = 7 5/15 và 7 2/5 = 7 6/15. Vì 5/15 < 6/15 nên 22/3 < 7 2/5.","why":null},
      {"id":"wb-7.2-04","type":"mc","diff":2,"skill":"compare-negative","source":"wb","lang":"en","q":"Which is larger: −7 3/4 or −23/3?","svg":null,"choices":["−7 3/4","−23/3","They are equal"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Đổi −23/3 thành hỗn số âm.","So sánh 3/4 với 2/3 bằng cách quy đồng mẫu số 12.","Khi cả hai là số âm, phần phân số lớn hơn thì số đó lớn hơn hay nhỏ hơn?"],"explain":"−23/3 = −7 2/3 = −7 8/12 và −7 3/4 = −7 9/12. 8/12 < 9/12 nên −7 8/12 gần 0 hơn: −23/3 lớn hơn.","why":null},
      {"id":"wb-7.2-05","type":"num","diff":2,"skill":"fraction-to-decimal","source":"wb","lang":"en","q":"Write −22/9 as a decimal, correct to 4 decimal places.","svg":null,"choices":null,"answer":-2.4444,"accept":[],"tol":0.00005,"unitLabel":"","hints":["Viết 22/9 dưới dạng hỗn số: phần nguyên và phần phân số là gì?","Chia phần phân số cho mẫu số để được 4 chữ số thập phân.","Đừng quên dấu âm ở kết quả cuối cùng."],"explain":"22/9 = 2 4/9 và 4 ÷ 9 = 0,4444… nên 22/9 = 2,4444… Vậy −22/9 ≈ −2,4444.","why":null},
      {"id":"wb-7.2-06","type":"mc","diff":3,"skill":"midpoint-fractions","source":"wb","lang":"en","q":"Arun puts the cards −8/9, −29/36 and −13/18 in order. He says: 'On a number line, −29/36 is exactly halfway between −8/9 and −13/18.' Is he correct?","svg":null,"choices":["Yes: as 36ths the numbers are −32/36, −29/36 and −26/36, so −29/36 is exactly in the middle","No: it is closer to −8/9","No: it is closer to −13/18","No: fractions with different denominators have no midpoint"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Để so sánh khoảng cách, hãy đưa cả ba phân số về cùng mẫu số 36.","−8/9 và −13/18 bằng bao nhiêu phần ba mươi sáu?","Khoảng cách từ −29/36 đến mỗi số còn lại là bao nhiêu phần ba mươi sáu?"],"explain":"−8/9 = −32/36 và −13/18 = −26/36. Trung điểm = (−32 − 26)/2 = −29, tức −29/36. Khoảng cách tới mỗi số đều là 3/36, nên Arun nói đúng.","why":null},
      {"id":"wb-7.2-07","type":"num","diff":2,"skill":"percent-compare","source":"wb","lang":"en","q":"In the Dolphins swimming club, 42 out of 60 members are girls. In the Seals club, 68% of the members are girls. By how many percentage points is the Dolphins' percentage of girls higher than the Seals'?","svg":null,"choices":null,"answer":2,"accept":[],"tol":0,"unitLabel":"pp","hints":["Đổi 42/60 thành phân số có mẫu số 100 (hoặc chia 42 cho 60 rồi nhân 100).","Viết tỉ lệ nữ của Dolphins theo phần trăm.","Lấy hiệu giữa hai phần trăm."],"explain":"42/60 = 70/100 = 70%. Dolphins 70% và Seals 68%, nên Dolphins cao hơn 70 − 68 = 2 điểm phần trăm.","why":null},
      {"id":"wb-7.2-08","type":"mc","diff":2,"skill":"percent-compare","source":"wb","lang":"en","q":"Drug A helped 112 of 145 patients. Drug B helped 137 of 180 patients. Which drug helped the greater percentage of its patients?","svg":null,"choices":["Drug A: 112/145 ≈ 77.2% against 137/180 ≈ 76.1%","Drug B, because it helped more patients (137 > 112)","They are the same","They cannot be compared because the groups differ in size"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Số bệnh nhân được giúp và số bệnh nhân được dùng thuốc là hai đại lượng khác nhau. So sánh cái nào mới công bằng?","Chia 112 cho 145 và 137 cho 180 rồi nhân 100.","Hai phần trăm nào lớn hơn?"],"explain":"112 ÷ 145 ≈ 0,772 = 77,2% và 137 ÷ 180 ≈ 0,761 = 76,1%. Thuốc A giúp được tỉ lệ cao hơn. Lỗi hay gặp: chọn thuốc B vì số người được giúp lớn hơn, trong khi nhóm B cũng đông hơn.","why":null},
      {"id":"wb-7.2-09","type":"mc","diff":2,"skill":"compare-same-numerator","source":"wb","lang":"en","q":"Which is greater, 4/5 or 4/3?","svg":null,"choices":["4/5, because 5 is bigger than 3","4/3, because 4 shared into 3 parts gives bigger parts than 4 shared into 5 parts","They are equal because both numerators are 4","It cannot be decided without decimals"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Một chiếc bánh chia thành 5 phần bằng nhau và một chiếc bánh chia thành 3 phần bằng nhau: phần nào to hơn?","Cùng lấy 4 phần thì tổng số bánh lấy được lớn hơn khi mỗi phần to hơn hay nhỏ hơn?","Hãy kiểm tra bằng số thập phân: 4/5 và 4/3 bằng bao nhiêu?"],"explain":"Cùng tử số, mẫu số càng lớn thì phân số càng nhỏ. 4/5 = 0,8 còn 4/3 = 1,33…, nên 4/3 lớn hơn. Lỗi hay gặp: thấy 5 > 3 nên nghĩ 4/5 lớn hơn.","why":null},
      {"id":"wb-7.2-10","type":"mc","diff":3,"skill":"order-negative","source":"wb","lang":"en","q":"Four cards show −49/6, −61/7, −8 7/8 and −107/12. Which card is the smallest?","svg":null,"choices":["−49/6","−61/7","−8 7/8","−107/12"],"answer":3,"accept":[],"tol":0,"unitLabel":"","hints":["Đổi mọi phân số về hỗn số hoặc số thập phân để so sánh.","−49/6 ≈ −8,17; −61/7 ≈ −8,71; −8 7/8 = −8,875. Còn −107/12 bằng bao nhiêu?","Với số âm, số nào cách xa 0 nhất thì nhỏ nhất."],"explain":"−49/6 = −8 1/6 ≈ −8,17; −61/7 = −8 5/7 ≈ −8,71; −8 7/8 = −8,875; −107/12 = −8 11/12 ≈ −8,92. Số cách xa 0 nhất là −107/12 nên nó nhỏ nhất.","why":null}
    ],
    "7.3": [
      {"id":"wb-7.3-01","type":"num","diff":1,"skill":"sub-mixed","source":"wb","lang":"en","q":"Work out 4 2/3 − 3 1/3. Write your answer as a mixed number.","svg":null,"choices":null,"answer":"1 1/3","accept":[],"tol":0,"unitLabel":"","hints":["Hai hỗn số có cùng mẫu số. Em có thể trừ phần nguyên và trừ phần phân số riêng không?","Phần nguyên: 4 − 3 bằng bao nhiêu? Phần phân số: 2/3 − 1/3 bằng bao nhiêu?","Ghép hai kết quả thành một hỗn số."],"explain":"Đổi thành phân số: 14/3 − 10/3 = 4/3 = 1 1/3. Hoặc 4 − 3 = 1 và 2/3 − 1/3 = 1/3.","why":null},
      {"id":"wb-7.3-02","type":"num","diff":2,"skill":"sub-mixed","source":"wb","lang":"en","q":"Work out 5 5/6 − 11/12. Write your answer as a mixed number.","svg":null,"choices":null,"answer":"4 11/12","accept":[],"tol":0,"unitLabel":"","hints":["Hai phân số có mẫu 6 và 12. Mẫu số chung nhỏ nhất là bao nhiêu?","Viết 5 5/6 với mẫu số 12: phần phân số 5/6 bằng bao nhiêu phần mười hai?","10/12 nhỏ hơn 11/12, vậy em cần «mượn» 1 từ phần nguyên hay đổi cả thành phân số?"],"explain":"5 5/6 = 5 10/12. Vì 10/12 < 11/12 nên mượn 1: 4 22/12 − 11/12 = 4 11/12.","why":null},
      {"id":"wb-7.3-03","type":"num","diff":2,"skill":"sub-mixed","source":"wb","lang":"en","q":"Work out 10 3/10 − 8 4/5. Write your answer as a mixed number.","svg":null,"choices":null,"answer":"1 1/2","accept":[],"tol":0,"unitLabel":"","hints":["Mẫu số chung của 10 và 5 là bao nhiêu? Viết 4/5 với mẫu đó.","3/10 nhỏ hơn 8/10, vậy em xử lý phần phân số thế nào?","Đổi hai hỗn số thành phân số mẫu 10 rồi trừ, sau đó rút gọn."],"explain":"10 3/10 = 103/10 và 8 4/5 = 88/10. 103/10 − 88/10 = 15/10 = 3/2 = 1 1/2.","why":null},
      {"id":"wb-7.3-04","type":"mc","diff":3,"skill":"odd-one-out","source":"wb","lang":"en","q":"Three cards: A = 4 19/20 − 2 7/10, B = 5 14/15 − 3 3/5, C = 5 4/7 − 3 5/21. One card gives a different answer from the other two. Which one?","svg":null,"choices":["A","B","C"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Em cần tính cả ba hiệu. Với thẻ A, mẫu số chung của 20 và 10 là bao nhiêu?","A = 4 19/20 − 2 14/20. Kết quả là bao nhiêu? Hãy rút gọn.","Tính B và C tương tự rồi so sánh ba kết quả."],"explain":"A = 2 5/20 = 2 1/4. B = 5 14/15 − 3 9/15 = 2 5/15 = 2 1/3. Với C: 5 4/7 = 5 12/21 nên 5 12/21 − 3 5/21 = 2 7/21 = 2 1/3. B và C bằng nhau (2 1/3), còn A = 2 1/4, nên A khác.","why":null},
      {"id":"wb-7.3-05","type":"num","diff":2,"skill":"add-mixed-word","source":"wb","lang":"en","q":"Bim ran 8 5/8 km and Yolander ran 10 3/4 km. How far did they run in total? Write your answer as a mixed number.","svg":null,"choices":null,"answer":"19 3/8","accept":[],"tol":0,"unitLabel":"km","hints":["Bài toán hỏi tổng nên em dùng phép tính nào?","Quy đồng phần phân số: 3/4 bằng bao nhiêu phần tám?","Cộng phần nguyên và phần phân số; nếu phần phân số lớn hơn 1 thì đổi thành hỗn số."],"explain":"8 5/8 + 10 6/8 = 18 11/8 = 19 3/8 km.","why":null},
      {"id":"wb-7.3-06","type":"num","diff":2,"skill":"sub-mixed-word","source":"wb","lang":"en","q":"Silvie has a piece of wood 4 1/8 m long. She cuts two pieces, each 1 3/4 m long, from it. How much wood is left?","svg":null,"choices":null,"answer":"5/8","accept":[],"tol":0,"unitLabel":"m","hints":["Hai đoạn đã cắt có tổng chiều dài là bao nhiêu? Hãy cộng 1 3/4 + 1 3/4.","Đổi tổng đó sang hỗn số đơn giản nhất.","Lấy chiều dài ban đầu trừ đi tổng chiều dài đã cắt."],"explain":"Hai đoạn: 1 3/4 + 1 3/4 = 3 1/2. Còn lại: 4 1/8 − 3 4/8 = 5/8 m.","why":null},
      {"id":"wb-7.3-07","type":"num","diff":3,"skill":"range-mixed","source":"wb","lang":"en","q":"Nia drives these distances (km) from Monday to Friday: 126 1/2, 187 3/4, 105 3/8, 95 7/10, 157 1/4. Work out the range of the distances. Write it as a mixed number.","svg":null,"choices":null,"answer":"92 1/20","accept":[],"tol":0,"unitLabel":"km","hints":["Khoảng biến thiên được tính bằng phép tính nào giữa hai giá trị đặc biệt?","Hãy tìm giá trị lớn nhất và giá trị nhỏ nhất trong năm quãng đường (so sánh phần nguyên trước).","Lấy giá trị lớn nhất trừ giá trị nhỏ nhất; mẫu số chung của 4 và 10 là 20."],"explain":"Lớn nhất 187 3/4, nhỏ nhất 95 7/10. Khoảng biến thiên: 187 15/20 − 95 14/20 = 92 1/20 km.","why":null},
      {"id":"wb-7.3-08","type":"num","diff":3,"skill":"sub-mixed-error","source":"wb","lang":"en","q":"Beth works out 3 4/9 − 1 3/4 and writes: 3 4/9 = 3 16/36 and 1 3/4 = 1 27/36, so the answer is 2 11/36. She has made a mistake. Work out the correct answer as a mixed number.","svg":null,"choices":null,"answer":"1 25/36","accept":[],"tol":0,"unitLabel":"","hints":["Hai phân số 16/36 và 27/36: phân số nào lớn hơn? Có trừ được trực tiếp 16 − 27 không?","Vì 16/36 < 27/36 nên em phải làm gì với phần nguyên 3?","Đổi 3 16/36 thành 2 52/36 rồi trừ."],"explain":"Beth lấy 27 − 16 = 11 (đảo thứ tự) và vẫn trừ phần nguyên 3 − 1. Đúng: 3 16/36 = 2 52/36, 2 52/36 − 1 27/36 = 1 25/36.","why":null},
      {"id":"wb-7.3-09","type":"num","diff":3,"skill":"sub-mixed-word","source":"wb","lang":"en","q":"Statue A has three parts of heights 2/3 m, 4 1/2 m and 1 1/4 m. Statue B has three parts of heights 1 3/4 m, 3 1/3 m and 1 7/8 m. How much taller is statue B than statue A? Give the answer as a fraction in its simplest form.","svg":null,"choices":null,"answer":"13/24","accept":[],"tol":0,"unitLabel":"m","hints":["Trước hết, tìm chiều cao tổng cộng của mỗi tượng bằng phép cộng.","Dùng mẫu số chung 12 cho tượng A và 24 cho tượng B. Tổng của A và B là bao nhiêu?","Lấy chiều cao tượng B trừ chiều cao tượng A rồi rút gọn."],"explain":"A = 2/3 + 4 1/2 + 1 1/4 = 6 5/12. B = 1 3/4 + 3 1/3 + 1 7/8 = 6 23/24. B − A = 6 23/24 − 6 10/24 = 13/24 m.","why":null},
      {"id":"wb-7.3-10","type":"mc","diff":3,"skill":"counter-example","source":"wb","lang":"en","q":"Arun says: 'When I add two mixed numbers, the answer is always less than the sum of the whole-number parts plus 1.' Which pair is a counter-example to his claim?","svg":null,"choices":["1 1/4 + 2 1/4","2 3/4 + 3 3/4","1 1/2 + 1 1/4","4 1/5 + 2 1/10"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Một phản ví dụ là cặp số làm cho nhận định sai. Với mỗi cặp, hãy tìm «tổng hai phần nguyên + 1».","Tính tổng thật sự của từng cặp rồi so sánh với con số vừa tìm.","Cặp nào có tổng thật sự lớn hơn «tổng hai phần nguyên + 1»?"],"explain":"2 3/4 + 3 3/4 = 6 1/2, trong khi 2 + 3 + 1 = 6, và 6 1/2 > 6 nên nhận định sai. Ba cặp còn lại đều nhỏ hơn (3 1/2 < 4; 2 3/4 < 3; 6 3/10 < 7). Lỗi của Arun: hai phần phân số có thể cộng lại lớn hơn 1.","why":null}
    ],
    "7.4": [
      {"id":"wb-7.4-01","type":"num","diff":1,"skill":"partition-mixed","source":"wb","lang":"en","q":"Work out 2 1/2 × 6 by partitioning: 2 × 6 + 1/2 × 6.","svg":null,"choices":null,"answer":15,"accept":[],"tol":0,"unitLabel":"","hints":["2 × 6 bằng bao nhiêu?","1/2 của 6 bằng bao nhiêu?","Cộng hai kết quả lại."],"explain":"2 × 6 = 12 và 1/2 × 6 = 3. Tổng: 12 + 3 = 15.","why":null},
      {"id":"wb-7.4-02","type":"num","diff":2,"skill":"partition-mixed","source":"wb","lang":"en","q":"Work out 3 2/3 × 12.","svg":null,"choices":null,"answer":44,"accept":[],"tol":0,"unitLabel":"","hints":["Tách hỗn số: 3 2/3 × 12 = 3 × 12 + 2/3 × 12.","3 × 12 bằng bao nhiêu? 2/3 của 12 bằng bao nhiêu (chia 12 cho 3 rồi nhân 2)?","Cộng hai phần lại."],"explain":"3 × 12 = 36 và 2/3 × 12 = 8. 36 + 8 = 44.","why":null},
      {"id":"wb-7.4-03","type":"num","diff":2,"skill":"area-mixed","source":"wb","lang":"en","q":"A square of side 7 cm is joined to a rectangle 7 cm wide and 11 3/4 cm long. Work out the area of the rectangle. Write your answer as a mixed number.","svg":null,"choices":null,"answer":"82 1/4","accept":[],"tol":0,"unitLabel":"cm²","hints":["Diện tích hình chữ nhật tính bằng công thức nào?","Tách 11 3/4 × 7 = 11 × 7 + 3/4 × 7.","Cộng hai phần rồi đổi phân số lớn hơn 1 thành hỗn số."],"explain":"11 × 7 = 77 và 3/4 × 7 = 21/4 = 5 1/4. Tổng: 82 1/4 cm². (Cộng thêm hình vuông 49 cm² được 131 1/4 cm².)","why":null},
      {"id":"wb-7.4-04","type":"mc","diff":2,"skill":"mixed-multiply-error","source":"wb","lang":"en","q":"Archie uses F = m × a with m = 21 and a = 3 2/3. He says F = 77. Which statement is correct?","svg":null,"choices":["Archie is right: 21 × 3 = 63 and 2/3 × 21 = 14, so F = 77","Archie is wrong: the answer is 84, because 3 2/3 rounds to 4","Archie is wrong: the answer is 63 2/3","Archie is wrong: the answer is 74"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy ước lượng trước: 3 2/3 gần số nguyên nào? Nhân với 21 được khoảng bao nhiêu?","Tách 3 2/3 × 21 = 3 × 21 + 2/3 × 21 rồi tính từng phần.","Kết quả của em có gần với ước lượng nhưng nhỏ hơn không, và có trùng 77 không?"],"explain":"3 × 21 = 63 và 2/3 × 21 = 14, tổng 77. Ước lượng 4 × 21 = 84 chỉ là xấp xỉ (hơi lớn). Chỉ nhân 21 với phần nguyên rồi cộng 2/3 sẽ ra 63 2/3 là sai.","why":null},
      {"id":"wb-7.4-05","type":"num","diff":3,"skill":"mixed-money","source":"wb","lang":"en","q":"Rosa's bedroom floor is a rectangle 4 5/8 m long and 3 m wide. Carpet costs $15 per square metre and she can only buy a whole number of square metres. How much does the carpet cost?","svg":null,"choices":null,"answer":210,"accept":[],"tol":0,"unitLabel":"$","hints":["Trước hết tính diện tích sàn: 4 5/8 × 3 bằng bao nhiêu?","Rosa chỉ mua được số mét vuông nguyên: cô cần mua ít nhất bao nhiêu mét vuông?","Nhân số mét vuông cần mua với 15 đô la."],"explain":"Diện tích = 4 5/8 × 3 = 12 + 15/8 = 13 7/8 m². Phải mua 14 m² (làm tròn lên). Giá: 14 × 15 = 210 đô la.","why":null},
      {"id":"wb-7.4-06","type":"mc","diff":2,"skill":"compare-products","source":"wb","lang":"en","q":"Which is greater, 3 2/3 × 25 or 4 2/5 × 21?","svg":null,"choices":["3 2/3 × 25","4 2/5 × 21","They are equal"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy tính từng tích bằng cách tách hỗn số.","3 2/3 × 25 = 3 × 25 + 2/3 × 25. Còn 4 2/5 × 21 = 4 × 21 + 2/5 × 21.","So sánh hai kết quả (có thể là hỗn số) với nhau."],"explain":"3 2/3 × 25 = 75 + 16 2/3 = 91 2/3. 4 2/5 × 21 = 84 + 8 2/5 = 92 2/5. Vì 92 2/5 > 91 2/3 nên 4 2/5 × 21 lớn hơn.","why":null},
      {"id":"wb-7.4-07","type":"mc","diff":3,"skill":"order-products","source":"wb","lang":"en","q":"Cards: A = 8 × 4 5/6, B = 12 × 3 1/5, C = 5 × 7 5/7. Which list puts them in order of size, smallest first?","svg":null,"choices":["A, B, C","B, C, A","C, B, A","B, A, C"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Cả ba tích đều gần 38 – 39 nên ước lượng thô không đủ. Em cần tính chính xác từng tích.","A = 8 × 4 + 8 × 5/6, B = 12 × 3 + 12 × 1/5, C = 5 × 7 + 5 × 5/7.","So sánh ba hỗn số vừa tính: phần nguyên đều là 38, nên so sánh các phần phân số."],"explain":"A = 32 + 6 2/3 = 38 2/3; B = 36 + 2 2/5 = 38 2/5; C = 35 + 3 4/7 = 38 4/7. Các phần phân số: 2/5 = 0,4 < 4/7 ≈ 0,571 < 2/3 ≈ 0,667. Thứ tự: B, C, A.","why":null},
      {"id":"wb-7.4-08","type":"num","diff":3,"skill":"volume-mixed","source":"wb","lang":"en","q":"A cuboid is 12 cm long, 3 3/4 cm high and 4 2/3 cm wide. Work out its volume.","svg":null,"choices":null,"answer":210,"accept":[],"tol":0,"unitLabel":"cm³","hints":["Thể tích hình hộp chữ nhật bằng tích của ba kích thước nào?","Nhân 12 với 3 3/4 trước (tách hỗn số) để được một số đơn giản.","Nhân kết quả với 4 2/3 bằng cách tách 4 2/3."],"explain":"12 × 3 3/4 = 36 + 9 = 45. Rồi 45 × 4 2/3 = 180 + 30 = 210 cm³.","why":null},
      {"id":"wb-7.4-09","type":"num","diff":3,"skill":"find-integer","source":"wb","lang":"en","q":"x is an integer and x × 5 4/9 = 65 1/3. Find x by trying values, as in Helena's method (try, compare, adjust).","svg":null,"choices":null,"answer":12,"accept":[],"tol":0,"unitLabel":"","hints":["Ước lượng: 5 4/9 gần 5,5. 65 chia cho khoảng 5,5 là bao nhiêu?","Thử x = 12: tính 12 × 5 + 12 × 4/9.","Kết quả có đúng bằng 65 1/3 không? Nếu lớn hơn hay nhỏ hơn thì chỉnh x thế nào?"],"explain":"Thử x = 12: 12 × 5 = 60 và 12 × 4/9 = 48/9 = 5 1/3, tổng 65 1/3. Đúng nên x = 12.","why":null},
      {"id":"wb-7.4-10","type":"num","diff":3,"skill":"area-mixed","source":"wb","lang":"en","q":"A rectangle is 9 5/8 m long and 2 m wide. The left part is 6 2/5 m long and is white; the rest is grey. Work out the area of the grey part. Write your answer as a mixed number.","svg":null,"choices":null,"answer":"6 9/20","accept":[],"tol":0,"unitLabel":"m²","hints":["Muốn tìm diện tích phần xám, em cần biết chiều dài của phần xám. Tính bằng phép tính nào?","Trừ hai hỗn số: 9 5/8 − 6 2/5 (mẫu số chung là 40).","Nhân hiệu đó với chiều rộng 2 m."],"explain":"Chiều dài phần xám: 9 25/40 − 6 16/40 = 3 9/40 m. Diện tích: 3 9/40 × 2 = 6 18/40 = 6 9/20 m².","why":null}
    ],
    "7.5": [
      {"id":"wb-7.5-01","type":"num","diff":1,"skill":"int-div-unit-fraction","source":"wb","lang":"en","q":"Work out 2 ÷ 1/8.","svg":null,"choices":null,"answer":16,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy hỏi: có bao nhiêu phần tám trong 1?","Trong 2 thì có bao nhiêu phần tám?","Cách nhanh: nhân số nguyên với mẫu số của phân số đơn vị."],"explain":"Trong 1 có 8 phần tám nên trong 2 có 2 × 8 = 16 phần tám. Vậy 2 ÷ 1/8 = 16.","why":null},
      {"id":"wb-7.5-02","type":"num","diff":1,"skill":"int-div-unit-fraction","source":"wb","lang":"en","q":"Use the quick method for dividing by a unit fraction: work out 20 ÷ 1/5.","svg":null,"choices":null,"answer":100,"accept":[],"tol":0,"unitLabel":"","hints":["Có bao nhiêu phần năm trong 1?","Trong 20 đơn vị có bao nhiêu phần năm?","Nhân 20 với số em vừa tìm."],"explain":"Mỗi đơn vị có 5 phần năm nên 20 ÷ 1/5 = 20 × 5 = 100.","why":null},
      {"id":"wb-7.5-03","type":"num","diff":2,"skill":"int-div-fraction","source":"wb","lang":"en","q":"Work out 2 ÷ 2/5. (Think: how many 2/5 are in 2?)","svg":null,"choices":null,"answer":5,"accept":[],"tol":0,"unitLabel":"","hints":["2 bằng bao nhiêu phần năm?","Cứ 2 phần năm làm thành một nhóm. Có bao nhiêu nhóm trong số phần năm đó?","Kiểm tra bằng phương pháp số nghịch đảo: 2 × 5/2."],"explain":"2 = 10/5. Cứ 2/5 thành một nhóm nên có 10 ÷ 2 = 5 nhóm. Hoặc 2 × 5/2 = 5.","why":null},
      {"id":"wb-7.5-04","type":"num","diff":2,"skill":"reciprocal-method","source":"wb","lang":"en","q":"Use the reciprocal method to work out 8 ÷ 3/5. Write your answer as a mixed number.","svg":null,"choices":null,"answer":"13 1/3","accept":[],"tol":0,"unitLabel":"","hints":["Số nghịch đảo của 3/5 là gì?","Chia cho một phân số bằng nhân với số nghịch đảo của nó: 8 × …","Nhân rồi đổi phân số lớn hơn 1 thành hỗn số."],"explain":"8 ÷ 3/5 = 8 × 5/3 = 40/3 = 13 1/3.","why":null},
      {"id":"wb-7.5-05","type":"num","diff":2,"skill":"area-division","source":"wb","lang":"en","q":"The area of a rectangle is 18 m² and its width is 4/5 m. What is its length? Write your answer as a mixed number.","svg":null,"choices":null,"answer":"22 1/2","accept":[],"tol":0,"unitLabel":"m","hints":["Chiều dài tính từ diện tích và chiều rộng bằng phép tính nào?","Viết phép chia 18 ÷ 4/5, rồi đổi thành phép nhân với số nghịch đảo.","Rút gọn và đổi sang hỗn số."],"explain":"Dài = diện tích ÷ rộng = 18 ÷ 4/5 = 18 × 5/4 = 90/4 = 22 1/2 m.","why":null},
      {"id":"wb-7.5-06","type":"num","diff":2,"skill":"formula-fraction","source":"wb","lang":"en","q":"Jaq uses the formula s = u × t. Work out t when s = 22 and u = 4/9. Write your answer as a mixed number.","svg":null,"choices":null,"answer":"49 1/2","accept":[],"tol":0,"unitLabel":"","hints":["Hãy biến đổi công thức s = u × t để t đứng một mình.","t = s ÷ u. Thay s = 22 và u = 4/9.","Chia cho 4/9 nghĩa là nhân với số nào? Tính rồi đổi hỗn số."],"explain":"t = s ÷ u = 22 ÷ 4/9 = 22 × 9/4 = 198/4 = 49 1/2.","why":null},
      {"id":"wb-7.5-07","type":"mc","diff":3,"skill":"compare-division","source":"wb","lang":"en","q":"Which card gives the greater answer: A = 25 ÷ 6/7 or B = 25 ÷ 3/8?","svg":null,"choices":["A, because 6/7 is the larger fraction","B, because 3/8 is smaller, so more 3/8s fit into 25","They give the same answer","It cannot be decided without calculating both exactly"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy hỏi: có bao nhiêu lần 6/7 trong 25, và có bao nhiêu lần 3/8 trong 25?","Phân số nào nhỏ hơn: 6/7 hay 3/8? Số nhỏ hơn nằm được nhiều hơn hay ít hơn vào 25?","Kiểm tra bằng cách tính xấp xỉ: 25 ÷ 6/7 ≈ 29 và 25 ÷ 3/8 ≈ 67."],"explain":"A = 25 × 7/6 = 29 1/6; B = 25 × 8/3 = 66 2/3. Chia cho số nhỏ hơn thì kết quả lớn hơn. Lỗi hay gặp: nghĩ phân số lớn hơn cho kết quả lớn hơn.","why":null},
      {"id":"wb-7.5-08", "howto": "Work out the three divisions to get the first three terms, see how the sequence carries on, and enter its 10th term.","type":"num","diff":3,"skill":"sequence-fractions","source":"wb","lang":"en","q":"The answers to 2 ÷ 12/31, 3 ÷ 6/11 and 5 ÷ 6/7 are the first three terms of a sequence. Work out the 10th term of the sequence. Write it as a mixed number.","svg":null,"choices":null,"answer":"8 1/6","accept":[],"tol":0,"unitLabel":"","hints":["Tính ba số hạng đầu bằng cách nhân với số nghịch đảo rồi đổi hỗn số.","Hiệu giữa hai số hạng liên tiếp là bao nhiêu? Dãy có quy luật gì?","Từ số hạng đầu, cộng thêm quy luật bao nhiêu lần để tới số hạng thứ 10?"],"explain":"2 × 31/12 = 5 1/6; 3 × 11/6 = 5 1/2; 5 × 7/6 = 5 5/6. Mỗi số hạng cộng thêm 1/3. Số hạng thứ 10 = 5 1/6 + 9 × 1/3 = 5 1/6 + 3 = 8 1/6.","why":null},
      {"id":"wb-7.5-09","type":"num","diff":3,"skill":"angles-fractions","source":"wb","lang":"en","q":"A triangle has angles (x ÷ 5/6)°, (x ÷ 2/3 + 15)° and y°. Work out y when x = 30.","svg":null,"choices":null,"answer":84,"accept":[],"tol":0,"unitLabel":"°","hints":["Thay x = 30 vào góc thứ nhất: 30 ÷ 5/6 bằng bao nhiêu?","Thay x = 30 vào góc thứ hai: 30 ÷ 2/3 rồi cộng 15.","Tổng ba góc trong tam giác là bao nhiêu độ? Lấy số đó trừ đi hai góc vừa tìm."],"explain":"30 ÷ 5/6 = 30 × 6/5 = 36°. 30 ÷ 2/3 + 15 = 45 + 15 = 60°. y = 180 − 36 − 60 = 84°.","why":null},
      {"id":"wb-7.5-10","type":"mc","diff":3,"skill":"quick-method-limit","source":"wb","lang":"en","q":"Sofia's quick way to divide an integer by a unit fraction is to multiply the integer by the denominator. She uses it on 6 ÷ 2/3 and gets 6 × 3 = 18. Why is this wrong?","svg":null,"choices":["It only works for unit fractions; for 2/3 you must also divide by the numerator: 6 × 3 ÷ 2 = 9","She should have multiplied by the numerator instead: 6 × 2 = 12","Dividing by a fraction is not possible","18 is right because dividing always makes the number bigger"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Mỗi đơn vị có bao nhiêu phần ba? Vậy 6 đơn vị có bao nhiêu phần ba?","Cách nhanh đếm số phần 1/3. Nhưng 2/3 là một nhóm gồm mấy phần ba?","Với số phần ba em tìm được, chia thành các nhóm 2/3 thì có bao nhiêu nhóm?"],"explain":"6 = 18 phần ba, nhưng mỗi nhóm 2/3 gồm 2 phần ba, nên có 18 ÷ 2 = 9 nhóm. Cách nhân với mẫu số chỉ đúng cho phân số đơn vị (tử số bằng 1). Tổng quát: 6 ÷ 2/3 = 6 × 3/2 = 9.","why":null}
    ],
    "7.6": [
      {"id":"wb-7.6-01","type":"num","diff":1,"skill":"add-fractions-mentally","source":"wb","lang":"en","q":"Work out 1/4 + 1/12 mentally. Give your answer in its simplest form.","svg":null,"choices":null,"answer":"1/3","accept":[],"tol":0,"unitLabel":"","hints":["12 là bội của 4. Viết 1/4 thành phân số có mẫu số 12.","Cộng hai phân số cùng mẫu 12.","Rút gọn kết quả."],"explain":"1/4 = 3/12 nên 3/12 + 1/12 = 4/12 = 1/3.","why":null},
      {"id":"wb-7.6-02","type":"num","diff":2,"skill":"fraction-of-whole","source":"wb","lang":"en","q":"In a bag of fruit, 2/7 are lemons, 3/8 are strawberries and the rest are bananas. What fraction of the fruit are bananas?","svg":null,"choices":null,"answer":"19/56","accept":[],"tol":0,"unitLabel":"","hints":["Cộng phần chanh và phần dâu trước. Mẫu số chung của 7 và 8 là bao nhiêu?","Phần tổng cộng của cả túi trái cây là bao nhiêu (viết dạng phân số)?","Lấy cả túi trừ đi phần chanh và dâu."],"explain":"2/7 + 3/8 = 16/56 + 21/56 = 37/56. Chuối: 1 − 37/56 = 56/56 − 37/56 = 19/56.","why":null},
      {"id":"wb-7.6-03","type":"num","diff":2,"skill":"cross-method","source":"wb","lang":"en","q":"Use the cross method to work out 3/5 − 2/7.","svg":null,"choices":null,"answer":"11/35","accept":[],"tol":0,"unitLabel":"","hints":["Mẫu số chung có thể lấy là tích 5 × 7. Đó là bao nhiêu?","Tử số mới là 3 × 7 − 2 × 5. Hãy tính.","Viết tử số vừa tìm trên mẫu số chung và kiểm tra có rút gọn được không."],"explain":"(3 × 7 − 2 × 5)/(5 × 7) = (21 − 10)/35 = 11/35. Không rút gọn được nữa.","why":null},
      {"id":"wb-7.6-04","type":"num","diff":2,"skill":"cross-method","source":"wb","lang":"en","q":"Work out 1/6 + 3/5. Give your answer in its simplest form.","svg":null,"choices":null,"answer":"23/30","accept":[],"tol":0,"unitLabel":"","hints":["Mẫu số chung nhỏ nhất của 6 và 5 là bao nhiêu?","Viết 1/6 và 3/5 thành các phân số có mẫu số đó.","Cộng các tử số rồi kiểm tra có rút gọn được không."],"explain":"1/6 = 5/30 và 3/5 = 18/30. Tổng: 23/30, đã tối giản.","why":null},
      {"id":"wb-7.6-05","type":"num","diff":2,"skill":"int-div-fraction","source":"wb","lang":"en","q":"Work out 8 ÷ 2/7.","svg":null,"choices":null,"answer":28,"accept":[],"tol":0,"unitLabel":"","hints":["Trong 8 đơn vị có bao nhiêu phần bảy?","Cứ 2 phần bảy làm thành một nhóm. Có bao nhiêu nhóm?","Hoặc nhân 8 với số nghịch đảo của 2/7."],"explain":"8 ÷ 2/7 = 8 × 7/2 = 28.","why":null},
      {"id":"wb-7.6-06","type":"num","diff":2,"skill":"area-division","source":"wb","lang":"en","q":"The area of a rectangle is 15 m² and its width is 5/8 m. What is its length?","svg":null,"choices":null,"answer":24,"accept":[],"tol":0,"unitLabel":"m","hints":["Chiều dài = diện tích ÷ chiều rộng. Viết phép tính.","Chia cho 5/8 là nhân với số nào?","Em có thể giản ước 15 với 5 trước khi nhân."],"explain":"15 ÷ 5/8 = 15 × 8/5 = 3 × 8 = 24 m.","why":null},
      {"id":"wb-7.6-07","type":"mc","diff":3,"skill":"order-of-operations-fractions","source":"wb","lang":"en","q":"Arun works out 14 ÷ (7/10 − 1/2) like this: 'First 7/10 − 1/2 = 1/5. Then 14 ÷ 1/5 = 14/5 = 2 4/5.' What mistake has he made?","svg":null,"choices":["He divided 14 by 5; dividing by 1/5 means multiplying by 5, which gives 70","He should have worked out 14 ÷ 7/10 first","7/10 − 1/2 is really 1/10, not 1/5","He made no mistake"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Kiểm tra bước đầu: 7/10 − 5/10 bằng bao nhiêu? Bước đó có đúng không?","Có bao nhiêu phần năm trong 14 đơn vị? Kết quả nhỏ hơn 14 hay lớn hơn 14 thì hợp lý?","Chia cho một phân số nhỏ hơn 1 làm số lớn lên hay nhỏ đi?"],"explain":"7/10 − 1/2 = 2/10 = 1/5 là đúng. Nhưng 14 ÷ 1/5 = 14 × 5 = 70, không phải 14 ÷ 5. Arun chia cho mẫu số thay vì nhân; kết quả 2 4/5 nhỏ hơn 14 là vô lý vì chia cho phân số bé hơn 1 phải cho số lớn hơn.","why":null},
      {"id":"wb-7.6-08","type":"num","diff":3,"skill":"brackets-fractions","source":"wb","lang":"en","q":"Work out 14/15 − (3/5 − 1/3). Give your answer in its simplest form.","svg":null,"choices":null,"answer":"2/3","accept":[],"tol":0,"unitLabel":"","hints":["Thứ tự thực hiện phép tính: em làm phần nào trước?","Trong ngoặc: 3/5 − 1/3 với mẫu số chung 15 bằng bao nhiêu?","Lấy 14/15 trừ kết quả trong ngoặc rồi rút gọn."],"explain":"3/5 − 1/3 = 9/15 − 5/15 = 4/15. Rồi 14/15 − 4/15 = 10/15 = 2/3.","why":null},
      {"id":"wb-7.6-09","type":"num","diff":3,"skill":"brackets-fractions","source":"wb","lang":"en","q":"Card A = (1/3 + 1/6) × (5/8 − 3/8). Card B = (3 1/4 + 2 3/4) ÷ (2/7 + 3/14). Sofia says 'the answer to card B divided by the answer to card A is 96.' Work out B ÷ A to check.","svg":null,"choices":null,"answer":96,"accept":[],"tol":0,"unitLabel":"","hints":["Tính A trước: tính từng ngoặc rồi nhân. 1/3 + 1/6 và 5/8 − 3/8 bằng bao nhiêu?","Tính B: tử số 3 1/4 + 2 3/4 bằng bao nhiêu? Mẫu 2/7 + 3/14 = 4/14 + 3/14 bằng bao nhiêu?","Chia kết quả B cho kết quả A bằng cách nhân với số nghịch đảo."],"explain":"A = 1/2 × 1/4 = 1/8. B = 6 ÷ 1/2 = 12. B ÷ A = 12 ÷ 1/8 = 12 × 8 = 96. Sofia đúng.","why":null},
      {"id":"wb-7.6-10","type":"num","diff":3,"skill":"formula-chain","source":"wb","lang":"en","q":"Formula cards: b = 18/a, c = b × (2 1/3 − 1 5/6) and d = 3(c − 11 3/4). Work out d when a = 2/3. Write it as a mixed number.","svg":null,"choices":null,"answer":"5 1/4","accept":[],"tol":0,"unitLabel":"","hints":["Tính b trước: b = 18 ÷ 2/3 bằng bao nhiêu?","Tính phần trong ngoặc 2 1/3 − 1 5/6 rồi nhân với b để được c.","Thay c vào d = 3(c − 11 3/4), tính ngoặc rồi nhân với 3."],"explain":"b = 18 ÷ 2/3 = 27. 2 1/3 − 1 5/6 = 1/2 nên c = 27 × 1/2 = 13 1/2. d = 3(13 1/2 − 11 3/4) = 3 × 1 3/4 = 5 1/4.","why":null}
    ]
  },
  tr: {
    en: {
      "q.wb-7.1-01.hints": [
        "Each fraction is a division: divide the numerator by the denominator for every card.",
        "You get 0.875, 0.8, 0.3, 0.15 and 0.32. Which card gives which number?",
        "Order the five decimals from smallest to largest, then turn them back into letters."
      ],
      "q.wb-7.1-01.explain": "A = 0.875, B = 0.8, C = 0.3, D = 0.15, E = 0.32. Smallest to largest: 0.15 < 0.3 < 0.32 < 0.8 < 0.875, so D, C, E, B, A.",
      "q.wb-7.1-02.hints": [
        "A counter-example must have denominator 6 yet be a terminating decimal. Try simplifying each fraction with denominator 6.",
        "What does 3/6 simplify to? How does that convert to a decimal?",
        "What denominators do 4/6 and 5/6 have after simplifying? Does 1/12 have denominator 6?"
      ],
      "q.wb-7.1-02.explain": "3/6 = 1/2 = 0.5, a terminating decimal. 4/6 = 2/3 = 0.(6) and 5/6 = 0.8(3) are recurring; 1/12 does not have denominator 6. Simplify first, then look at the denominator.",
      "q.wb-7.1-03.hints": [
        "Which division does the fraction 27/40 mean?",
        "Divide 27 by 40; add zeros after the decimal point when needed.",
        "Does the division stop? Does the result start 0.6…?"
      ],
      "q.wb-7.1-03.explain": "27 ÷ 40 = 0.675. The division stops, so this is a terminating decimal.",
      "q.wb-7.1-04.hints": [
        "Divide 4 by 15 on your calculator. Which digit repeats?",
        "Write at least 4 decimal places of the result.",
        "Look at the 4th decimal place to decide whether to round the 3rd up or keep it."
      ],
      "q.wb-7.1-04.explain": "4 ÷ 15 = 0.2666… = 0.2(6). The 4th decimal digit is 6, so round up: 0.267.",
      "q.wb-7.1-05.hints": [
        "Read the digits on the calculator carefully: 0.72727272. What is the repeating pattern?",
        "Does the repeating block have one digit or more than one?",
        "Which part belongs inside the brackets in the correct notation?"
      ],
      "q.wb-7.1-05.explain": "The digits 7272… repeat in the pair '72', so 8/11 = 0.(72). Su wrongly thought only the 2 repeats. When several digits repeat, the whole block goes in brackets.",
      "q.wb-7.1-06.hints": [
        "Write the digits after the decimal point: 1, 2, 8, 2, 0, 5, 1, 2, 8, …",
        "Which group of digits appears again for the first time?",
        "Count the digits in that group, from the first digit until just before the block starts again."
      ],
      "q.wb-7.1-06.explain": "The digits 1, 2, 8, 2, 0, 5 then 1, 2, 8, 2, 0, 5 again. The repeating block is 128205, which has 6 digits, so 5/39 = 0.(128205).",
      "q.wb-7.1-07.hints": [
        "How many students are left-handed? What do you subtract from 27?",
        "Write the fraction of left-handed students over all students.",
        "Divide the numerator by the denominator, then round to 3 decimal places."
      ],
      "q.wb-7.1-07.explain": "Left-handed: 27 − 22 = 5 students, which is 5/27 = 0.185185… = 0.(185) ≈ 0.185.",
      "q.wb-7.1-08.hints": [
        "Convert everything to decimals: fractions by division, percentages by dividing by 100.",
        "4/7 ≈ 0.571 and 7/13 ≈ 0.538. What are 58.2% and 55%?",
        "Order the seven decimals from smallest to largest and count to the fourth."
      ],
      "q.wb-7.1-08.explain": "0.5 < 7/13 (≈ 0.538) < 55% (0.55) < 0.56 < 4/7 (≈ 0.571) < 58.2% (0.582) < 0.6. The fourth is 0.56.",
      "q.wb-7.1-09.hints": [
        "What fraction of an hour is 25 minutes? Write it as a fraction.",
        "Simplify that fraction, then convert it to a decimal.",
        "Add 11 and round to 2 decimal places."
      ],
      "q.wb-7.1-09.explain": "25 minutes = 25/60 = 5/12 hour = 0.41666… So 11 hours 25 minutes = 11.41666… ≈ 11.42 hours.",
      "q.wb-7.1-10.hints": [
        "Are 0.006 and 0.00666… the same number? Which is larger?",
        "Double each repeating 6: what is 0.00666… × 2?",
        "Does the result match the teacher's 0.01333…?"
      ],
      "q.wb-7.1-10.explain": "Arun ignored the repeating part. 0.00666… × 2 = 0.01333… (each 6 doubles to 12, carrying a 1 into the previous place). The teacher is right. The mistake: treating a recurring decimal as if it were truncated.",
      "q.wb-7.2-01.hints": [
        "Change 40/9 to a mixed number: how many 9s in 40, and what is the remainder?",
        "Both have whole part 4. Write 1/3 with denominator 9.",
        "Compare the two fraction parts with the same denominator."
      ],
      "q.wb-7.2-01.explain": "40/9 = 4 4/9 and 4 1/3 = 4 3/9. Since 4/9 > 3/9, 40/9 > 4 1/3.",
      "q.wb-7.2-02.hints": [
        "Change −47/10 to a negative mixed number.",
        "Write the fraction part of −4 3/5 with denominator 10.",
        "For negative numbers, is the one with the smaller fraction part larger or smaller?"
      ],
      "q.wb-7.2-02.explain": "−47/10 = −4 7/10 and −4 3/5 = −4 6/10. Since 6/10 < 7/10, −4 6/10 is closer to 0, so −4 3/5 > −47/10.",
      "q.wb-7.2-03.hints": [
        "Change 22/3 to a mixed number.",
        "What is the lowest common denominator of the fraction parts 1/3 and 2/5?",
        "Write them with that denominator and compare."
      ],
      "q.wb-7.2-03.explain": "22/3 = 7 1/3 = 7 5/15 and 7 2/5 = 7 6/15. Since 5/15 < 6/15, 22/3 < 7 2/5.",
      "q.wb-7.2-04.hints": [
        "Change −23/3 to a negative mixed number.",
        "Compare 3/4 with 2/3 using denominator 12.",
        "When both are negative, is the one with the larger fraction part larger or smaller?"
      ],
      "q.wb-7.2-04.explain": "−23/3 = −7 2/3 = −7 8/12 and −7 3/4 = −7 9/12. Since 8/12 < 9/12, −7 8/12 is closer to 0: −23/3 is larger.",
      "q.wb-7.2-05.hints": [
        "Write 22/9 as a mixed number: what are the whole part and the fraction part?",
        "Divide the fraction part to get 4 decimal places.",
        "Do not forget the negative sign in the final answer."
      ],
      "q.wb-7.2-05.explain": "22/9 = 2 4/9 and 4 ÷ 9 = 0.4444…, so 22/9 = 2.4444… Hence −22/9 ≈ −2.4444.",
      "q.wb-7.2-06.hints": [
        "To compare distances, write all three fractions with denominator 36.",
        "How many thirty-sixths are −8/9 and −13/18?",
        "What is the distance from −29/36 to each of the other two, in thirty-sixths?"
      ],
      "q.wb-7.2-06.explain": "−8/9 = −32/36 and −13/18 = −26/36. The midpoint is (−32 − 26)/2 = −29, that is −29/36. The distance to each is 3/36, so Arun is correct.",
      "q.wb-7.2-07.hints": [
        "Write 42/60 as a fraction with denominator 100 (or divide 42 by 60 and multiply by 100).",
        "Write the Dolphins' proportion of girls as a percentage.",
        "Subtract the two percentages."
      ],
      "q.wb-7.2-07.explain": "42/60 = 70/100 = 70%. Dolphins 70% and Seals 68%, so the Dolphins are higher by 70 − 68 = 2 percentage points.",
      "q.wb-7.2-08.hints": [
        "The number helped and the number given the drug are different quantities. Which should you compare for fairness?",
        "Divide 112 by 145 and 137 by 180, then multiply by 100.",
        "Which of the two percentages is larger?"
      ],
      "q.wb-7.2-08.explain": "112 ÷ 145 ≈ 0.772 = 77.2% and 137 ÷ 180 ≈ 0.761 = 76.1%. Drug A helped the higher percentage. A common mistake is choosing B because more were helped, when group B was also larger.",
      "q.wb-7.2-09.hints": [
        "A cake cut into 5 equal parts and one cut into 3 equal parts: which part is bigger?",
        "Taking 4 parts, is the total larger when each part is bigger or smaller?",
        "Check with decimals: what are 4/5 and 4/3?"
      ],
      "q.wb-7.2-09.explain": "With the same numerator, the larger the denominator the smaller the fraction. 4/5 = 0.8 while 4/3 = 1.33…, so 4/3 is greater. A common mistake is thinking 4/5 is bigger because 5 > 3.",
      "q.wb-7.2-10.hints": [
        "Change every fraction to a mixed number or decimal to compare.",
        "−49/6 ≈ −8.17, −61/7 ≈ −8.71, −8 7/8 = −8.875. What is −107/12?",
        "For negative numbers, the one furthest from 0 is the smallest."
      ],
      "q.wb-7.2-10.explain": "−49/6 = −8 1/6 ≈ −8.17, −61/7 = −8 5/7 ≈ −8.71, −8 7/8 = −8.875, −107/12 = −8 11/12 ≈ −8.92. The furthest from 0 is −107/12, so it is the smallest.",
      "q.wb-7.3-01.hints": [
        "Both mixed numbers have the same denominator. Can you subtract the whole parts and fraction parts separately?",
        "Whole parts: what is 4 − 3? Fraction parts: what is 2/3 − 1/3?",
        "Put the two results together as one mixed number."
      ],
      "q.wb-7.3-01.explain": "As fractions: 14/3 − 10/3 = 4/3 = 1 1/3. Or 4 − 3 = 1 and 2/3 − 1/3 = 1/3.",
      "q.wb-7.3-02.hints": [
        "The denominators are 6 and 12. What is the lowest common denominator?",
        "Write 5 5/6 with denominator 12: how many twelfths is 5/6?",
        "10/12 is less than 11/12, so do you need to 'borrow' 1 from the whole part or change everything to fractions?"
      ],
      "q.wb-7.3-02.explain": "5 5/6 = 5 10/12. Since 10/12 < 11/12, borrow 1: 4 22/12 − 11/12 = 4 11/12.",
      "q.wb-7.3-03.hints": [
        "What is the common denominator of 10 and 5? Write 4/5 with it.",
        "3/10 is less than 8/10, so how do you deal with the fraction part?",
        "Change both mixed numbers to fractions over 10, subtract, then simplify."
      ],
      "q.wb-7.3-03.explain": "10 3/10 = 103/10 and 8 4/5 = 88/10. 103/10 − 88/10 = 15/10 = 3/2 = 1 1/2.",
      "q.wb-7.3-04.hints": [
        "You need all three differences. For card A, what is the common denominator of 20 and 10?",
        "A = 4 19/20 − 2 14/20. What is the result? Simplify it.",
        "Work out B and C in the same way, then compare the three results."
      ],
      "q.wb-7.3-04.explain": "A = 2 5/20 = 2 1/4. B = 2 5/15 = 2 1/3. For C, 5 12/21 − 3 5/21 = 2 7/21 = 2 1/3. B and C are equal (2 1/3), while A = 2 1/4, so A is the odd one out.",
      "q.wb-7.3-05.hints": [
        "The question asks for a total, so which operation do you use?",
        "Make the fraction parts match: how many eighths is 3/4?",
        "Add the whole parts and the fraction parts; if the fraction part exceeds 1, change it to a mixed number."
      ],
      "q.wb-7.3-05.explain": "8 5/8 + 10 6/8 = 18 11/8 = 19 3/8 km.",
      "q.wb-7.3-06.hints": [
        "What is the total length of the two cut pieces? Add 1 3/4 + 1 3/4.",
        "Write that total as a simple mixed number.",
        "Subtract the total cut from the original length."
      ],
      "q.wb-7.3-06.explain": "Two pieces: 1 3/4 + 1 3/4 = 3 1/2. Left over: 4 1/8 − 3 4/8 = 5/8 m.",
      "q.wb-7.3-07.hints": [
        "Range is found by which operation between two special values?",
        "Find the largest and the smallest of the five distances (compare whole parts first).",
        "Subtract the smallest from the largest; the common denominator of 4 and 10 is 20."
      ],
      "q.wb-7.3-07.explain": "Largest 187 3/4, smallest 95 7/10. Range: 187 15/20 − 95 14/20 = 92 1/20 km.",
      "q.wb-7.3-08.hints": [
        "Of the fractions 16/36 and 27/36, which is larger? Can you simply do 16 − 27?",
        "Since 16/36 < 27/36, what must you do with the whole part 3?",
        "Change 3 16/36 into 2 52/36, then subtract."
      ],
      "q.wb-7.3-08.explain": "Beth did 27 − 16 = 11 (reversed the order) and still subtracted 3 − 1. Correct: 3 16/36 = 2 52/36, and 2 52/36 − 1 27/36 = 1 25/36.",
      "q.wb-7.3-09.hints": [
        "First find the total height of each statue by adding.",
        "Use common denominator 12 for statue A and 24 for statue B. What are the totals?",
        "Subtract the height of A from the height of B and simplify."
      ],
      "q.wb-7.3-09.explain": "A = 2/3 + 4 1/2 + 1 1/4 = 6 5/12. B = 1 3/4 + 3 1/3 + 1 7/8 = 6 23/24. B − A = 6 23/24 − 6 10/24 = 13/24 m.",
      "q.wb-7.3-10.hints": [
        "A counter-example is a pair that makes the claim false. For each pair, find 'sum of whole parts + 1'.",
        "Work out the real sum of each pair and compare it with that number.",
        "Which pair has a real sum larger than 'sum of whole parts + 1'?"
      ],
      "q.wb-7.3-10.explain": "2 3/4 + 3 3/4 = 6 1/2, while 2 + 3 + 1 = 6, and 6 1/2 > 6, so the claim fails. The other three pairs are all smaller (3 1/2 < 4; 2 3/4 < 3; 6 3/10 < 7). Arun's error: the two fraction parts can add up to more than 1.",
      "q.wb-7.4-01.hints": [
        "What is 2 × 6?",
        "What is half of 6?",
        "Add the two results."
      ],
      "q.wb-7.4-01.explain": "2 × 6 = 12 and 1/2 × 6 = 3. Total: 12 + 3 = 15.",
      "q.wb-7.4-02.hints": [
        "Partition the mixed number: 3 2/3 × 12 = 3 × 12 + 2/3 × 12.",
        "What is 3 × 12? What is 2/3 of 12 (divide 12 by 3, then multiply by 2)?",
        "Add the two parts."
      ],
      "q.wb-7.4-02.explain": "3 × 12 = 36 and 2/3 × 12 = 8. 36 + 8 = 44.",
      "q.wb-7.4-03.hints": [
        "Which formula gives the area of a rectangle?",
        "Partition: 11 3/4 × 7 = 11 × 7 + 3/4 × 7.",
        "Add the two parts and change any fraction larger than 1 to a mixed number."
      ],
      "q.wb-7.4-03.explain": "11 × 7 = 77 and 3/4 × 7 = 21/4 = 5 1/4. Total: 82 1/4 cm². (Adding the 49 cm² square gives 131 1/4 cm².)",
      "q.wb-7.4-04.hints": [
        "Estimate first: which whole number is 3 2/3 close to? About what is that times 21?",
        "Partition 3 2/3 × 21 = 3 × 21 + 2/3 × 21 and work out each part.",
        "Is your result close to the estimate but a little smaller, and does it equal 77?"
      ],
      "q.wb-7.4-04.explain": "3 × 21 = 63 and 2/3 × 21 = 14, total 77. The estimate 4 × 21 = 84 is only approximate (a little too big). Multiplying 21 only by the whole part and adding 2/3 gives 63 2/3, which is wrong.",
      "q.wb-7.4-05.hints": [
        "First work out the floor area: what is 4 5/8 × 3?",
        "Rosa can only buy whole square metres: at least how many square metres must she buy?",
        "Multiply the number of square metres by $15."
      ],
      "q.wb-7.4-05.explain": "Area = 4 5/8 × 3 = 12 + 15/8 = 13 7/8 m². She must buy 14 m² (round up). Cost: 14 × 15 = $210.",
      "q.wb-7.4-06.hints": [
        "Work out each product by partitioning the mixed number.",
        "3 2/3 × 25 = 3 × 25 + 2/3 × 25. And 4 2/5 × 21 = 4 × 21 + 2/5 × 21.",
        "Compare the two results (they may be mixed numbers)."
      ],
      "q.wb-7.4-06.explain": "3 2/3 × 25 = 75 + 16 2/3 = 91 2/3. 4 2/5 × 21 = 84 + 8 2/5 = 92 2/5. Since 92 2/5 > 91 2/3, 4 2/5 × 21 is greater.",
      "q.wb-7.4-07.hints": [
        "All three products are close to 38–39, so a rough estimate is not enough. Calculate each exactly.",
        "A = 8 × 4 + 8 × 5/6, B = 12 × 3 + 12 × 1/5, C = 5 × 7 + 5 × 5/7.",
        "Compare the three mixed numbers: all have whole part 38, so compare the fraction parts."
      ],
      "q.wb-7.4-07.explain": "A = 32 + 6 2/3 = 38 2/3; B = 36 + 2 2/5 = 38 2/5; C = 35 + 3 4/7 = 38 4/7. Fraction parts: 2/5 = 0.4 < 4/7 ≈ 0.571 < 2/3 ≈ 0.667. Order: B, C, A.",
      "q.wb-7.4-08.hints": [
        "Volume of a cuboid is the product of which three measurements?",
        "Multiply 12 by 3 3/4 first (partition the mixed number) to get a simple number.",
        "Multiply that result by 4 2/3 by partitioning 4 2/3."
      ],
      "q.wb-7.4-08.explain": "12 × 3 3/4 = 36 + 9 = 45. Then 45 × 4 2/3 = 180 + 30 = 210 cm³.",
      "q.wb-7.4-09.hints": [
        "Estimate: 5 4/9 is close to 5.5. About what is 65 divided by 5.5?",
        "Try x = 12: work out 12 × 5 + 12 × 4/9.",
        "Does it equal 65 1/3 exactly? If it is bigger or smaller, how do you adjust x?"
      ],
      "q.wb-7.4-09.explain": "Try x = 12: 12 × 5 = 60 and 12 × 4/9 = 48/9 = 5 1/3, total 65 1/3. It matches, so x = 12.",
      "q.wb-7.4-10.hints": [
        "To find the grey area you need the length of the grey part. Which operation gives it?",
        "Subtract the mixed numbers: 9 5/8 − 6 2/5 (common denominator 40).",
        "Multiply that difference by the width 2 m."
      ],
      "q.wb-7.4-10.explain": "Length of the grey part: 9 25/40 − 6 16/40 = 3 9/40 m. Area: 3 9/40 × 2 = 6 18/40 = 6 9/20 m².",
      "q.wb-7.5-01.hints": [
        "Ask: how many eighths are there in 1?",
        "How many eighths are there in 2?",
        "Quick way: multiply the integer by the denominator of the unit fraction."
      ],
      "q.wb-7.5-01.explain": "There are 8 eighths in 1, so 2 × 8 = 16 eighths in 2. So 2 ÷ 1/8 = 16.",
      "q.wb-7.5-02.hints": [
        "How many fifths are there in 1?",
        "How many fifths are there in 20 units?",
        "Multiply 20 by the number you found."
      ],
      "q.wb-7.5-02.explain": "Each unit has 5 fifths, so 20 ÷ 1/5 = 20 × 5 = 100.",
      "q.wb-7.5-03.hints": [
        "How many fifths is 2?",
        "Every 2 fifths make one group. How many groups are in that number of fifths?",
        "Check with the reciprocal method: 2 × 5/2."
      ],
      "q.wb-7.5-03.explain": "2 = 10/5. Every 2/5 makes a group, so there are 10 ÷ 2 = 5 groups. Or 2 × 5/2 = 5.",
      "q.wb-7.5-04.hints": [
        "What is the reciprocal of 3/5?",
        "Dividing by a fraction is the same as multiplying by its reciprocal: 8 × …",
        "Multiply, then change the improper fraction to a mixed number."
      ],
      "q.wb-7.5-04.explain": "8 ÷ 3/5 = 8 × 5/3 = 40/3 = 13 1/3.",
      "q.wb-7.5-05.hints": [
        "Which operation finds the length from the area and the width?",
        "Write the division 18 ÷ 4/5, then change it to multiplying by the reciprocal.",
        "Simplify and change to a mixed number."
      ],
      "q.wb-7.5-05.explain": "Length = area ÷ width = 18 ÷ 4/5 = 18 × 5/4 = 90/4 = 22 1/2 m.",
      "q.wb-7.5-06.hints": [
        "Rearrange s = u × t to get t on its own.",
        "t = s ÷ u. Substitute s = 22 and u = 4/9.",
        "Dividing by 4/9 means multiplying by what? Work it out and change to a mixed number."
      ],
      "q.wb-7.5-06.explain": "t = s ÷ u = 22 ÷ 4/9 = 22 × 9/4 = 198/4 = 49 1/2.",
      "q.wb-7.5-07.hints": [
        "Ask: how many 6/7s are in 25, and how many 3/8s are in 25?",
        "Which fraction is smaller, 6/7 or 3/8? Does the smaller one fit into 25 more or fewer times?",
        "Check by estimating: 25 ÷ 6/7 ≈ 29 and 25 ÷ 3/8 ≈ 67."
      ],
      "q.wb-7.5-07.explain": "A = 25 × 7/6 = 29 1/6; B = 25 × 8/3 = 66 2/3. Dividing by a smaller number gives a larger result. A common mistake is thinking the larger fraction gives the larger answer.",
      "q.wb-7.5-08.hints": [
        "Work out the first three terms by multiplying by the reciprocal and changing to mixed numbers.",
        "What is the difference between consecutive terms? What is the rule?",
        "From the first term, how many times must you add the rule to reach the 10th term?"
      ],
      "q.wb-7.5-08.explain": "2 × 31/12 = 5 1/6; 3 × 11/6 = 5 1/2; 5 × 7/6 = 5 5/6. Each term adds 1/3. The 10th term = 5 1/6 + 9 × 1/3 = 5 1/6 + 3 = 8 1/6.",
      "q.wb-7.5-09.hints": [
        "Substitute x = 30 into the first angle: what is 30 ÷ 5/6?",
        "Substitute x = 30 into the second angle: 30 ÷ 2/3, then add 15.",
        "How many degrees do the angles of a triangle add up to? Subtract the two angles you found."
      ],
      "q.wb-7.5-09.explain": "30 ÷ 5/6 = 30 × 6/5 = 36°. 30 ÷ 2/3 + 15 = 45 + 15 = 60°. y = 180 − 36 − 60 = 84°.",
      "q.wb-7.5-10.hints": [
        "How many thirds are in each unit? So how many thirds are in 6 units?",
        "The quick way counts 1/3s. But how many thirds make one group of 2/3?",
        "With the number of thirds you found, how many groups of 2/3 are there?"
      ],
      "q.wb-7.5-10.explain": "6 = 18 thirds, but each group of 2/3 contains 2 thirds, so there are 18 ÷ 2 = 9 groups. Multiplying by the denominator only works for unit fractions (numerator 1). In general 6 ÷ 2/3 = 6 × 3/2 = 9.",
      "q.wb-7.6-01.hints": [
        "12 is a multiple of 4. Write 1/4 as a fraction with denominator 12.",
        "Add the two fractions with denominator 12.",
        "Simplify the result."
      ],
      "q.wb-7.6-01.explain": "1/4 = 3/12, so 3/12 + 1/12 = 4/12 = 1/3.",
      "q.wb-7.6-02.hints": [
        "Add the lemons and strawberries first. What is the common denominator of 7 and 8?",
        "What fraction is the whole bag (written as a fraction)?",
        "Take the lemons and strawberries away from the whole bag."
      ],
      "q.wb-7.6-02.explain": "2/7 + 3/8 = 16/56 + 21/56 = 37/56. Bananas: 1 − 37/56 = 56/56 − 37/56 = 19/56.",
      "q.wb-7.6-03.hints": [
        "The common denominator can be the product 5 × 7. What is it?",
        "The new numerator is 3 × 7 − 2 × 5. Work it out.",
        "Write that numerator over the common denominator and check whether it simplifies."
      ],
      "q.wb-7.6-03.explain": "(3 × 7 − 2 × 5)/(5 × 7) = (21 − 10)/35 = 11/35. It does not simplify further.",
      "q.wb-7.6-04.hints": [
        "What is the lowest common denominator of 6 and 5?",
        "Write 1/6 and 3/5 as fractions with that denominator.",
        "Add the numerators, then check whether it simplifies."
      ],
      "q.wb-7.6-04.explain": "1/6 = 5/30 and 3/5 = 18/30. Sum: 23/30, already in simplest form.",
      "q.wb-7.6-05.hints": [
        "How many sevenths are in 8 units?",
        "Every 2 sevenths make one group. How many groups are there?",
        "Or multiply 8 by the reciprocal of 2/7."
      ],
      "q.wb-7.6-05.explain": "8 ÷ 2/7 = 8 × 7/2 = 28.",
      "q.wb-7.6-06.hints": [
        "Length = area ÷ width. Write the calculation.",
        "Dividing by 5/8 is multiplying by what?",
        "You can cancel 15 with 5 before multiplying."
      ],
      "q.wb-7.6-06.explain": "15 ÷ 5/8 = 15 × 8/5 = 3 × 8 = 24 m.",
      "q.wb-7.6-07.hints": [
        "Check the first step: what is 7/10 − 5/10? Is that step correct?",
        "How many fifths are in 14 units? Is a result smaller or larger than 14 sensible?",
        "Does dividing by a fraction less than 1 make a number bigger or smaller?"
      ],
      "q.wb-7.6-07.explain": "7/10 − 1/2 = 2/10 = 1/5 is correct. But 14 ÷ 1/5 = 14 × 5 = 70, not 14 ÷ 5. Arun divided by the denominator instead of multiplying; a result of 2 4/5 (smaller than 14) is unreasonable because dividing by a fraction less than 1 must give a larger number.",
      "q.wb-7.6-08.hints": [
        "Order of operations: which part do you do first?",
        "In the brackets: what is 3/5 − 1/3 with common denominator 15?",
        "Subtract that bracket result from 14/15, then simplify."
      ],
      "q.wb-7.6-08.explain": "3/5 − 1/3 = 9/15 − 5/15 = 4/15. Then 14/15 − 4/15 = 10/15 = 2/3.",
      "q.wb-7.6-09.hints": [
        "Work out A first: do each bracket, then multiply. What are 1/3 + 1/6 and 5/8 − 3/8?",
        "Work out B: what is 3 1/4 + 2 3/4? What is 2/7 + 3/14 = 4/14 + 3/14?",
        "Divide B by A by multiplying by the reciprocal."
      ],
      "q.wb-7.6-09.explain": "A = 1/2 × 1/4 = 1/8. B = 6 ÷ 1/2 = 12. B ÷ A = 12 ÷ 1/8 = 12 × 8 = 96. Sofia is correct.",
      "q.wb-7.6-10.hints": [
        "Find b first: what is b = 18 ÷ 2/3?",
        "Work out the bracket 2 1/3 − 1 5/6, then multiply by b to get c.",
        "Substitute c into d = 3(c − 11 3/4): do the bracket, then multiply by 3."
      ],
      "q.wb-7.6-10.explain": "b = 18 ÷ 2/3 = 27. 2 1/3 − 1 5/6 = 1/2, so c = 27 × 1/2 = 13 1/2. d = 3(13 1/2 − 11 3/4) = 3 × 1 3/4 = 5 1/4."
    },
    vi: {
    "q.wb-7.5-08.howto": "Tính ba phép chia để được ba số hạng đầu, xem dãy tiếp tục thế nào, rồi nhập số hạng thứ 10.",
      "q.wb-7.1-01.q": "Năm thẻ phân số: A = 7/8, B = 4/5, C = 3/10, D = 3/20, E = 8/25. Đổi mỗi phân số ra số thập phân rồi chọn dãy sắp xếp từ nhỏ đến lớn.",
      "q.wb-7.1-01.choices": [
        "D, C, E, B, A",
        "C, D, E, B, A",
        "D, C, B, E, A",
        "A, B, E, C, D"
      ],
      "q.wb-7.1-02.q": "Marcus nói: «1/6 và 2/6 là số thập phân vô hạn tuần hoàn nên mọi phân số có mẫu số 6 đều là số thập phân vô hạn tuần hoàn.» Phân số nào là phản ví dụ cho nhận định của bạn?",
      "q.wb-7.1-03.q": "Dùng phép chia viết để đổi 27/40 ra số thập phân.",
      "q.wb-7.1-04.q": "Dùng máy tính đổi 4/15 ra số thập phân, làm tròn đến 3 chữ số thập phân.",
      "q.wb-7.1-05.q": "Su được yêu cầu viết 8/11 dưới dạng số thập phân. Bạn viết 0,7222… (chỉ chữ số 2 lặp lại). Máy tính của bạn hiển thị 8 ÷ 11 = 0,72727272. Su sai ở đâu?",
      "q.wb-7.1-05.choices": [
        "Cả hai chữ số cùng lặp lại: 8/11 = 0,7272… = 0,(72)",
        "Không sai; chỉ chữ số cuối cùng mới lặp lại",
        "8/11 là số thập phân hữu hạn",
        "Chữ số 7 phải lặp lại còn 2 thì không"
      ],
      "q.wb-7.1-06.q": "5/39 = 0,128205128205… Phần lặp lại gồm bao nhiêu chữ số?",
      "q.wb-7.1-07.q": "Lớp có 27 học sinh, trong đó 22 em thuận tay phải. Phân số học sinh thuận tay trái là bao nhiêu? Viết dưới dạng số thập phân, làm tròn đến 3 chữ số thập phân.",
      "q.wb-7.1-08.q": "Sắp xếp 0,56; 4/7; 0,6; 7/13; 58,2%; 55% và 0,5 từ nhỏ đến lớn. Số nào đứng thứ tư trong dãy?",
      "q.wb-7.1-08.choices": [
        "4/7",
        "0,56",
        "7/13",
        "58,2%"
      ],
      "q.wb-7.1-09.q": "Một cuộc chiếu phim marathon kéo dài 11 giờ 25 phút. Viết thời gian này theo giờ dưới dạng số thập phân, làm tròn đến 2 chữ số thập phân.",
      "q.wb-7.1-10.q": "Arun nói: «Cô giáo viết 1/150 = 0,00666… và 2/150 = 0,01333…, nhưng cô chắc chắn sai vì 2/150 gấp đôi 1/150 mà gấp đôi 0,006 là 0,012 chứ không phải 0,013.» Lập luận của Arun sai ở đâu?",
      "q.wb-7.1-10.choices": [
        "Bạn nhân đôi 0,006 thay vì 0,00666…; nhân đôi 0,00666… cho 0,01333…",
        "Bạn phải chia đôi chứ không phải nhân đôi",
        "Không thể nhân đôi số thập phân vô hạn tuần hoàn",
        "Cô giáo sai còn Arun đúng"
      ],
      "q.wb-7.2-01.q": "Điền dấu thích hợp giữa 40/9 và 4 1/3.",
      "q.wb-7.2-02.q": "Điền dấu thích hợp giữa −4 3/5 và −47/10.",
      "q.wb-7.2-03.q": "Điền dấu thích hợp giữa 22/3 và 7 2/5.",
      "q.wb-7.2-04.q": "Số nào lớn hơn: −7 3/4 hay −23/3?",
      "q.wb-7.2-05.q": "Viết −22/9 dưới dạng số thập phân, làm tròn đến 4 chữ số thập phân.",
      "q.wb-7.2-06.q": "Arun xếp ba thẻ −8/9, −29/36 và −13/18 theo thứ tự. Bạn nói: «Trên trục số, −29/36 nằm đúng giữa −8/9 và −13/18.» Bạn nói đúng không?",
      "q.wb-7.2-06.choices": [
        "Đúng: viết theo mẫu 36 thì ba số là −32/36, −29/36 và −26/36, nên −29/36 đúng ở giữa",
        "Sai: nó gần −8/9 hơn",
        "Sai: nó gần −13/18 hơn",
        "Sai: các phân số khác mẫu thì không có trung điểm"
      ],
      "q.wb-7.2-07.q": "Ở câu lạc bộ bơi Dolphins, 42 trong 60 thành viên là nữ. Ở câu lạc bộ Seals, 68% thành viên là nữ. Tỉ lệ nữ của Dolphins cao hơn của Seals bao nhiêu điểm phần trăm?",
      "q.wb-7.2-08.q": "Thuốc A giúp được 112 trong 145 bệnh nhân. Thuốc B giúp được 137 trong 180 bệnh nhân. Thuốc nào giúp được tỉ lệ phần trăm bệnh nhân lớn hơn?",
      "q.wb-7.2-08.choices": [
        "Thuốc A: 112/145 ≈ 77,2% so với 137/180 ≈ 76,1%",
        "Thuốc B, vì giúp được nhiều bệnh nhân hơn (137 > 112)",
        "Hai thuốc như nhau",
        "Không so sánh được vì hai nhóm khác cỡ"
      ],
      "q.wb-7.2-09.q": "Phân số nào lớn hơn, 4/5 hay 4/3?",
      "q.wb-7.2-09.choices": [
        "4/5, vì 5 lớn hơn 3",
        "4/3, vì chia 4 thành 3 phần thì mỗi phần lớn hơn chia 4 thành 5 phần",
        "Bằng nhau vì cả hai tử số đều là 4",
        "Không thể quyết định nếu không đổi sang số thập phân"
      ],
      "q.wb-7.2-10.q": "Bốn thẻ ghi −49/6, −61/7, −8 7/8 và −107/12. Thẻ nào nhỏ nhất?",
      "q.wb-7.3-01.q": "Tính 4 2/3 − 3 1/3. Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.3-02.q": "Tính 5 5/6 − 11/12. Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.3-03.q": "Tính 10 3/10 − 8 4/5. Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.3-04.q": "Ba thẻ: A = 4 19/20 − 2 7/10, B = 5 14/15 − 3 3/5, C = 5 4/7 − 3 5/21. Có một thẻ cho kết quả khác hai thẻ còn lại. Đó là thẻ nào?",
      "q.wb-7.3-05.q": "Bim chạy 8 5/8 km và Yolander chạy 10 3/4 km. Cả hai chạy tổng cộng bao nhiêu km? Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.3-06.q": "Silvie có một thanh gỗ dài 4 1/8 m. Bạn cắt từ đó hai đoạn, mỗi đoạn dài 1 3/4 m. Thanh gỗ còn lại dài bao nhiêu mét?",
      "q.wb-7.3-07.q": "Nia lái xe các quãng đường (km) từ thứ Hai đến thứ Sáu: 126 1/2, 187 3/4, 105 3/8, 95 7/10, 157 1/4. Tính khoảng biến thiên của các quãng đường. Viết dưới dạng hỗn số.",
      "q.wb-7.3-08.q": "Beth tính 3 4/9 − 1 3/4 và viết: 3 4/9 = 3 16/36 và 1 3/4 = 1 27/36 nên kết quả là 2 11/36. Bạn đã mắc lỗi. Tính kết quả đúng dưới dạng hỗn số.",
      "q.wb-7.3-09.q": "Tượng A gồm ba phần cao 2/3 m, 4 1/2 m và 1 1/4 m. Tượng B gồm ba phần cao 1 3/4 m, 3 1/3 m và 1 7/8 m. Tượng B cao hơn tượng A bao nhiêu mét? Viết kết quả dưới dạng phân số tối giản.",
      "q.wb-7.3-10.q": "Arun nói: «Khi cộng hai hỗn số, kết quả luôn nhỏ hơn tổng hai phần nguyên cộng thêm 1.» Cặp hỗn số nào là phản ví dụ cho nhận định của bạn?",
      "q.wb-7.3-10.choices": [
        "1 1/4 + 2 1/4",
        "2 3/4 + 3 3/4",
        "1 1/2 + 1 1/4",
        "4 1/5 + 2 1/10"
      ],
      "q.wb-7.4-01.q": "Tính 2 1/2 × 6 bằng cách tách: 2 × 6 + 1/2 × 6.",
      "q.wb-7.4-02.q": "Tính 3 2/3 × 12.",
      "q.wb-7.4-03.q": "Một hình vuông cạnh 7 cm ghép với một hình chữ nhật rộng 7 cm và dài 11 3/4 cm. Tính diện tích hình chữ nhật. Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.4-04.q": "Archie dùng F = m × a với m = 21 và a = 3 2/3. Bạn nói F = 77. Nhận định nào đúng?",
      "q.wb-7.4-04.choices": [
        "Archie đúng: 21 × 3 = 63 và 2/3 × 21 = 14 nên F = 77",
        "Archie sai: kết quả là 84 vì 3 2/3 làm tròn thành 4",
        "Archie sai: kết quả là 63 2/3",
        "Archie sai: kết quả là 74"
      ],
      "q.wb-7.4-05.q": "Sàn phòng ngủ của Rosa là hình chữ nhật dài 4 5/8 m và rộng 3 m. Thảm giá 15 đô la mỗi mét vuông và Rosa chỉ mua được số mét vuông nguyên. Tiền mua thảm là bao nhiêu?",
      "q.wb-7.4-06.q": "Biểu thức nào lớn hơn, 3 2/3 × 25 hay 4 2/5 × 21?",
      "q.wb-7.4-07.q": "Các thẻ: A = 8 × 4 5/6, B = 12 × 3 1/5, C = 5 × 7 5/7. Dãy nào xếp chúng từ nhỏ đến lớn?",
      "q.wb-7.4-07.choices": [
        "A, B, C",
        "B, C, A",
        "C, B, A",
        "B, A, C"
      ],
      "q.wb-7.4-08.q": "Một hình hộp chữ nhật dài 12 cm, cao 3 3/4 cm và rộng 4 2/3 cm. Tính thể tích của nó.",
      "q.wb-7.4-09.q": "x là số nguyên và x × 5 4/9 = 65 1/3. Tìm x bằng cách thử giá trị như phương pháp của Helena (thử, so sánh, điều chỉnh).",
      "q.wb-7.4-10.q": "Một hình chữ nhật dài 9 5/8 m và rộng 2 m. Phần bên trái dài 6 2/5 m được tô trắng, phần còn lại tô xám. Tính diện tích phần xám. Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.5-01.q": "Tính 2 ÷ 1/8.",
      "q.wb-7.5-02.q": "Dùng cách nhanh khi chia cho phân số đơn vị: tính 20 ÷ 1/5.",
      "q.wb-7.5-03.q": "Tính 2 ÷ 2/5. (Hãy nghĩ: trong 2 có bao nhiêu lần 2/5?)",
      "q.wb-7.5-04.q": "Dùng phương pháp số nghịch đảo tính 8 ÷ 3/5. Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.5-05.q": "Diện tích một hình chữ nhật là 18 m² và chiều rộng là 4/5 m. Chiều dài là bao nhiêu? Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.5-06.q": "Jaq dùng công thức s = u × t. Tính t khi s = 22 và u = 4/9. Viết kết quả dưới dạng hỗn số.",
      "q.wb-7.5-07.q": "Thẻ nào cho kết quả lớn hơn: A = 25 ÷ 6/7 hay B = 25 ÷ 3/8?",
      "q.wb-7.5-07.choices": [
        "A, vì 6/7 là phân số lớn hơn",
        "B, vì 3/8 nhỏ hơn nên có nhiều lần 3/8 hơn trong 25",
        "Hai thẻ cho kết quả như nhau",
        "Không quyết định được nếu không tính chính xác cả hai"
      ],
      "q.wb-7.5-08.q": "Kết quả của 2 ÷ 12/31, 3 ÷ 6/11 và 5 ÷ 6/7 là ba số hạng đầu của một dãy số. Tính số hạng thứ 10 của dãy. Viết dưới dạng hỗn số.",
      "q.wb-7.5-09.q": "Một tam giác có các góc (x ÷ 5/6)°, (x ÷ 2/3 + 15)° và y°. Tính y khi x = 30.",
      "q.wb-7.5-10.q": "Cách nhanh của Sofia khi chia một số nguyên cho phân số đơn vị là nhân số nguyên với mẫu số. Bạn dùng cho 6 ÷ 2/3 và được 6 × 3 = 18. Vì sao sai?",
      "q.wb-7.5-10.choices": [
        "Chỉ đúng cho phân số đơn vị; với 2/3 còn phải chia cho tử số: 6 × 3 ÷ 2 = 9",
        "Bạn phải nhân với tử số: 6 × 2 = 12",
        "Không thể chia cho một phân số",
        "18 đúng vì phép chia luôn làm số lớn hơn"
      ],
      "q.wb-7.6-01.q": "Tính nhẩm 1/4 + 1/12. Viết kết quả ở dạng tối giản.",
      "q.wb-7.6-02.q": "Trong một túi trái cây, 2/7 là chanh, 3/8 là dâu và phần còn lại là chuối. Chuối chiếm bao nhiêu phần của số trái cây?",
      "q.wb-7.6-03.q": "Dùng phương pháp nhân chéo tính 3/5 − 2/7.",
      "q.wb-7.6-04.q": "Tính 1/6 + 3/5. Viết kết quả ở dạng tối giản.",
      "q.wb-7.6-05.q": "Tính 8 ÷ 2/7.",
      "q.wb-7.6-06.q": "Diện tích một hình chữ nhật là 15 m² và chiều rộng là 5/8 m. Chiều dài là bao nhiêu?",
      "q.wb-7.6-07.q": "Arun tính 14 ÷ (7/10 − 1/2) như sau: «Trước hết 7/10 − 1/2 = 1/5. Rồi 14 ÷ 1/5 = 14/5 = 2 4/5.» Bạn đã mắc lỗi nào?",
      "q.wb-7.6-07.choices": [
        "Bạn lấy 14 chia 5; chia cho 1/5 nghĩa là nhân với 5, được 70",
        "Bạn phải tính 14 ÷ 7/10 trước",
        "7/10 − 1/2 thật ra bằng 1/10 chứ không phải 1/5",
        "Bạn không mắc lỗi nào"
      ],
      "q.wb-7.6-08.q": "Tính 14/15 − (3/5 − 1/3). Viết kết quả ở dạng tối giản.",
      "q.wb-7.6-09.q": "Thẻ A = (1/3 + 1/6) × (5/8 − 3/8). Thẻ B = (3 1/4 + 2 3/4) ÷ (2/7 + 3/14). Sofia nói «kết quả thẻ B chia cho kết quả thẻ A là 96.» Hãy tính B ÷ A để kiểm tra.",
      "q.wb-7.6-10.q": "Các thẻ công thức: b = 18/a, c = b × (2 1/3 − 1 5/6) và d = 3(c − 11 3/4). Tính d khi a = 2/3. Viết dưới dạng hỗn số."
    }
  }
});
