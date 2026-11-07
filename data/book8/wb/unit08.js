window.GAME_WB = window.GAME_WB || [];
window.GAME_WB.push({
  unit: 8,
  pages: [96,111],
  sections: {
    "8.1": [
      {"id":"wb-8.1-01","type":"mc","diff":1,"skill":"regular-polygon-names","source":"wb","lang":"en","q":"Which regular polygon has 10 sides?","svg":null,"choices":["Decagon","Octagon","Nonagon","Hexagon"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Tiền tố «deca» trong tiếng Hy Lạp nghĩa là mấy?","Bát giác có mấy cạnh, cửu giác có mấy cạnh, lục giác có mấy cạnh?","Tên nào ứng với 10 cạnh?"],"explain":"Decagon có 10 cạnh. Octagon có 8, nonagon có 9, hexagon có 6.","why":null},
      {"id":"wb-8.1-02","type":"multi","diff":2,"skill":"regular-polygon-symmetry","source":"wb","lang":"en","q":"Which statements about regular polygons are TRUE? (choose all)","svg":null,"choices":["An octagon has rotational symmetry of order 8","A pentagon has rotational symmetry of order 10","A decagon has 10 lines of symmetry","A polygon with rotational symmetry of order 20 has 19 sides","A hexagon has five lines of symmetry","A polygon with 15 lines of symmetry has 15 sides"],"answer":[0,2,5],"accept":[],"tol":0,"unitLabel":"","hints":["Với đa giác đều, số cạnh liên hệ thế nào với số trục đối xứng và với bậc đối xứng quay?","Nếu số trục đối xứng và bậc đối xứng quay đều bằng số cạnh, em kiểm tra từng nhận định với số cạnh của hình.","Ngũ giác có mấy cạnh nên bậc đối xứng quay là bao nhiêu? Lục giác có mấy trục?"],"explain":"Đa giác đều n cạnh có n trục đối xứng và đối xứng quay bậc n. Đúng: bát giác bậc 8; thập giác 10 trục; 15 trục thì 15 cạnh. Sai: ngũ giác bậc 5 (không phải 10); bậc 20 thì có 20 cạnh; lục giác có 6 trục.","why":null},
      {"id":"wb-8.1-03","type":"mc","diff":2,"skill":"quadrilateral-properties","source":"wb","lang":"en","q":"A quadrilateral has all sides the same length, two pairs of parallel sides and opposite angles equal, but its angles are not all 90°. What is it?","svg":null,"choices":["Square","Rectangle","Rhombus","Parallelogram"],"answer":2,"accept":[],"tol":0,"unitLabel":"","hints":["Hình có bốn góc vuông và bốn cạnh bằng nhau gọi là gì? Nó có phù hợp với «không đều 90°» không?","Hình chữ nhật có bốn cạnh bằng nhau không?","Hình bình hành có bốn cạnh bằng nhau không? Cần điều kiện nào thêm?"],"explain":"Bốn cạnh bằng nhau cùng hai cặp cạnh song song và góc đối bằng nhau là hình thoi. Hình vuông bị loại vì các góc đều 90°; hình chữ nhật và hình bình hành tổng quát không có bốn cạnh bằng nhau.","why":null},
      {"id":"wb-8.1-04","type":"mc","diff":3,"skill":"quadrilateral-misconception","source":"wb","lang":"en","q":"Sofia says: 'My quadrilateral has two pairs of parallel sides and two pairs of sides the same length.' Zara says it must be a rectangle. Is Zara right?","svg":null,"choices":["No: a parallelogram (or rhombus) also has these properties; Sofia must also say all angles are 90°","Yes: only a rectangle has two pairs of parallel sides","Yes: only a rectangle has two pairs of equal sides","No: it must be a kite"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Hình bình hành có hai cặp cạnh song song không? Các cạnh đối của nó có bằng nhau không?","Điều gì phân biệt hình chữ nhật với hình bình hành thường?","Sofia cần bổ sung thông tin nào về góc để Zara chắc chắn?"],"explain":"Hình bình hành có hai cặp cạnh song song và hai cặp cạnh đối bằng nhau, nhưng không có góc vuông. Muốn là hình chữ nhật còn phải có 4 góc vuông. Lỗi hay gặp: coi các tính chất về cạnh là đủ để xác định hình.","why":null},
      {"id":"wb-8.1-05","type":"mc","diff":2,"skill":"isosceles-trapezium","source":"wb","lang":"en","q":"Which description is enough to be sure a quadrilateral is an isosceles trapezium?","svg":null,"choices":["Exactly one pair of parallel sides, and the other two sides are equal in length","One pair of parallel sides only","Two pairs of adjacent sides the same length","Two pairs of parallel sides"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Hình thang thường chỉ cần một cặp cạnh song song. Điều gì làm nó «cân»?","Hai cạnh bên (không song song) của hình thang cân có quan hệ gì?","Phương án nào mô tả hình diều? Phương án nào mô tả hình bình hành?"],"explain":"Hình thang cân có đúng một cặp cạnh song song và hai cạnh bên bằng nhau. Chỉ một cặp song song là hình thang thường; hai cặp cạnh kề bằng nhau là hình diều; hai cặp song song là hình bình hành.","why":null},
      {"id":"wb-8.1-06","type":"mc","diff":2,"skill":"classification-flowchart","source":"wb","lang":"en","q":"A classification flow chart asks these questions about a quadrilateral. 'All angles 90°?' No. 'Opposite angles equal?' Yes. 'All sides the same length?' Yes. Which quadrilateral does it identify?","svg":null,"choices":["Rhombus","Parallelogram","Kite","Rectangle"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Câu trả lời «Không» ở câu hỏi đầu loại những hình nào?","Hình có các góc đối bằng nhau là nhóm hình nào? Thêm điều kiện «mọi cạnh bằng nhau» thì còn lại hình nào?","Hình bình hành thường có mọi cạnh bằng nhau không?"],"explain":"Không phải mọi góc vuông nên loại hình vuông và hình chữ nhật. Góc đối bằng nhau và bốn cạnh bằng nhau cho hình thoi (hình bình hành thường có cạnh không bằng nhau).","why":null},
      {"id":"wb-8.1-07","type":"mc","diff":3,"skill":"classification-flowchart","source":"wb","lang":"en","q":"The same flow chart is used for another quadrilateral: 'All angles 90°?' No. 'Opposite angles equal?' No. 'One pair of parallel sides?' Yes. 'Two pairs of equal angles?' Yes. Which quadrilateral does it identify?","svg":null,"choices":["Trapezium (not isosceles)","Isosceles trapezium","Kite","Parallelogram"],"answer":1,"accept":[],"tol":0,"unitLabel":"","hints":["Các góc đối không bằng nhau nên hình nào bị loại?","Hình có đúng một cặp cạnh song song là nhóm nào?","Trong nhóm đó, hình nào có hai cặp góc bằng nhau (hai góc ở mỗi đáy)?"],"explain":"Góc đối không bằng nhau nên không phải hình bình hành. Một cặp cạnh song song nên là hình thang; có hai cặp góc bằng nhau (hai góc kề mỗi đáy) nên là hình thang cân. Hình diều không có cạnh song song.","why":null},
      {"id":"wb-8.1-08","type":"mc","diff":2,"skill":"coordinates-quadrilateral","source":"wb","lang":"en","q":"Nine points are plotted: A(2, 2), B(6, 2), C(0, 4), D(4, 4), E(8, 4), F(2, 6), G(2, 8), H(6, 8), I(4, 9). Which four points can be joined to make a rectangle?","svg":"<svg viewBox=\"0 0 250 235\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"10\" font-family=\"sans-serif\"><line x1=\"30\" y1=\"205\" x2=\"30\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"205\" x2=\"230\" y2=\"205\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"30\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">0</text><text x=\"24\" y=\"208\" text-anchor=\"end\" fill=\"currentColor\">0</text><line x1=\"50\" y1=\"205\" x2=\"50\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"185\" x2=\"230\" y2=\"185\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"70\" y1=\"205\" x2=\"70\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"165\" x2=\"230\" y2=\"165\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"70\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">2</text><text x=\"24\" y=\"168\" text-anchor=\"end\" fill=\"currentColor\">2</text><line x1=\"90\" y1=\"205\" x2=\"90\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"145\" x2=\"230\" y2=\"145\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"110\" y1=\"205\" x2=\"110\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"125\" x2=\"230\" y2=\"125\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"110\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">4</text><text x=\"24\" y=\"128\" text-anchor=\"end\" fill=\"currentColor\">4</text><line x1=\"130\" y1=\"205\" x2=\"130\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"105\" x2=\"230\" y2=\"105\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"150\" y1=\"205\" x2=\"150\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"85\" x2=\"230\" y2=\"85\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"150\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">6</text><text x=\"24\" y=\"88\" text-anchor=\"end\" fill=\"currentColor\">6</text><line x1=\"170\" y1=\"205\" x2=\"170\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"65\" x2=\"230\" y2=\"65\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"190\" y1=\"205\" x2=\"190\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"45\" x2=\"230\" y2=\"45\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"190\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">8</text><text x=\"24\" y=\"48\" text-anchor=\"end\" fill=\"currentColor\">8</text><line x1=\"210\" y1=\"205\" x2=\"210\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"25\" x2=\"230\" y2=\"25\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"230\" y1=\"205\" x2=\"230\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"5\" x2=\"230\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"230\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">10</text><text x=\"24\" y=\"8\" text-anchor=\"end\" fill=\"currentColor\">10</text><line x1=\"30\" y1=\"205\" x2=\"232\" y2=\"205\" stroke=\"currentColor\"/><line x1=\"30\" y1=\"205\" x2=\"30\" y2=\"3\" stroke=\"currentColor\"/><circle cx=\"70\" cy=\"165\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"161\" fill=\"currentColor\" font-weight=\"bold\">A</text><circle cx=\"150\" cy=\"165\" r=\"3\" fill=\"currentColor\"/><text x=\"155\" y=\"161\" fill=\"currentColor\" font-weight=\"bold\">B</text><circle cx=\"30\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"35\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">C</text><circle cx=\"110\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"115\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">D</text><circle cx=\"190\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"195\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">E</text><circle cx=\"70\" cy=\"85\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"81\" fill=\"currentColor\" font-weight=\"bold\">F</text><circle cx=\"70\" cy=\"45\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"41\" fill=\"currentColor\" font-weight=\"bold\">G</text><circle cx=\"150\" cy=\"45\" r=\"3\" fill=\"currentColor\"/><text x=\"155\" y=\"41\" fill=\"currentColor\" font-weight=\"bold\">H</text><circle cx=\"110\" cy=\"25\" r=\"3\" fill=\"currentColor\"/><text x=\"115\" y=\"21\" fill=\"currentColor\" font-weight=\"bold\">I</text></svg>","choices":["A, B, H, G","A, B, E, D","A, B, E, C","F, I, H, D"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Hình chữ nhật có bốn góc vuông: các cạnh nằm ngang và thẳng đứng. Điểm nào cùng hoành độ, điểm nào cùng tung độ?","Hai điểm A(2, 2) và B(6, 2) cùng nằm trên đường ngang. Cần hai điểm nào nằm thẳng đứng phía trên chúng?","Kiểm tra bốn điểm vừa chọn có tạo bốn góc vuông không."],"explain":"A(2, 2), B(6, 2), H(6, 8), G(2, 8) tạo hình chữ nhật 4 × 6 với các cạnh nằm ngang và thẳng đứng. Các bộ còn lại tạo hình bình hành, hình thang cân hoặc tứ giác không có góc vuông.","why":null},
      {"id":"wb-8.1-09","type":"mc","diff":3,"skill":"coordinates-quadrilateral","source":"wb","lang":"en","q":"Using the plotted points A(2, 2), B(6, 2), C(0, 4), D(4, 4), E(8, 4), F(2, 6), G(2, 8), H(6, 8), I(4, 9), which four points can be joined to make a square?","svg":"<svg viewBox=\"0 0 250 235\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"10\" font-family=\"sans-serif\"><line x1=\"30\" y1=\"205\" x2=\"30\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"205\" x2=\"230\" y2=\"205\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"30\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">0</text><text x=\"24\" y=\"208\" text-anchor=\"end\" fill=\"currentColor\">0</text><line x1=\"50\" y1=\"205\" x2=\"50\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"185\" x2=\"230\" y2=\"185\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"70\" y1=\"205\" x2=\"70\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"165\" x2=\"230\" y2=\"165\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"70\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">2</text><text x=\"24\" y=\"168\" text-anchor=\"end\" fill=\"currentColor\">2</text><line x1=\"90\" y1=\"205\" x2=\"90\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"145\" x2=\"230\" y2=\"145\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"110\" y1=\"205\" x2=\"110\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"125\" x2=\"230\" y2=\"125\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"110\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">4</text><text x=\"24\" y=\"128\" text-anchor=\"end\" fill=\"currentColor\">4</text><line x1=\"130\" y1=\"205\" x2=\"130\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"105\" x2=\"230\" y2=\"105\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"150\" y1=\"205\" x2=\"150\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"85\" x2=\"230\" y2=\"85\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"150\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">6</text><text x=\"24\" y=\"88\" text-anchor=\"end\" fill=\"currentColor\">6</text><line x1=\"170\" y1=\"205\" x2=\"170\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"65\" x2=\"230\" y2=\"65\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"190\" y1=\"205\" x2=\"190\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"45\" x2=\"230\" y2=\"45\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"190\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">8</text><text x=\"24\" y=\"48\" text-anchor=\"end\" fill=\"currentColor\">8</text><line x1=\"210\" y1=\"205\" x2=\"210\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"25\" x2=\"230\" y2=\"25\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"230\" y1=\"205\" x2=\"230\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"5\" x2=\"230\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"230\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">10</text><text x=\"24\" y=\"8\" text-anchor=\"end\" fill=\"currentColor\">10</text><line x1=\"30\" y1=\"205\" x2=\"232\" y2=\"205\" stroke=\"currentColor\"/><line x1=\"30\" y1=\"205\" x2=\"30\" y2=\"3\" stroke=\"currentColor\"/><circle cx=\"70\" cy=\"165\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"161\" fill=\"currentColor\" font-weight=\"bold\">A</text><circle cx=\"150\" cy=\"165\" r=\"3\" fill=\"currentColor\"/><text x=\"155\" y=\"161\" fill=\"currentColor\" font-weight=\"bold\">B</text><circle cx=\"30\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"35\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">C</text><circle cx=\"110\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"115\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">D</text><circle cx=\"190\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"195\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">E</text><circle cx=\"70\" cy=\"85\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"81\" fill=\"currentColor\" font-weight=\"bold\">F</text><circle cx=\"70\" cy=\"45\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"41\" fill=\"currentColor\" font-weight=\"bold\">G</text><circle cx=\"150\" cy=\"45\" r=\"3\" fill=\"currentColor\"/><text x=\"155\" y=\"41\" fill=\"currentColor\" font-weight=\"bold\">H</text><circle cx=\"110\" cy=\"25\" r=\"3\" fill=\"currentColor\"/><text x=\"115\" y=\"21\" fill=\"currentColor\" font-weight=\"bold\">I</text></svg>","choices":["A, D, F, C","A, B, H, G","A, B, E, D","A, B, E, C"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Hình vuông có bốn cạnh bằng nhau và bốn góc vuông. Hình chữ nhật 4 × 6 có phải hình vuông không?","Một hình vuông có thể nằm «nghiêng». Hai đường chéo của nó bằng nhau, vuông góc và cắt nhau tại trung điểm.","Thử bốn điểm A, D, F, C: đường chéo AF thẳng đứng dài bao nhiêu, đường chéo CD nằm ngang dài bao nhiêu?"],"explain":"A(2, 2), D(4, 4), F(2, 6), C(0, 4): hai đường chéo AF (dọc) và CD (ngang) đều dài 4, vuông góc và cắt nhau tại (2, 4), nên là hình vuông nằm nghiêng (cạnh √8). Hình chữ nhật 4 × 6 không phải hình vuông.","why":null},
      {"id":"wb-8.1-10","type":"mc","diff":3,"skill":"coordinates-quadrilateral","source":"wb","lang":"en","q":"Using the plotted points A(2, 2), B(6, 2), C(0, 4), D(4, 4), E(8, 4), F(2, 6), G(2, 8), H(6, 8), I(4, 9), which four points can be joined to make a kite?","svg":"<svg viewBox=\"0 0 250 235\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"10\" font-family=\"sans-serif\"><line x1=\"30\" y1=\"205\" x2=\"30\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"205\" x2=\"230\" y2=\"205\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"30\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">0</text><text x=\"24\" y=\"208\" text-anchor=\"end\" fill=\"currentColor\">0</text><line x1=\"50\" y1=\"205\" x2=\"50\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"185\" x2=\"230\" y2=\"185\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"70\" y1=\"205\" x2=\"70\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"165\" x2=\"230\" y2=\"165\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"70\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">2</text><text x=\"24\" y=\"168\" text-anchor=\"end\" fill=\"currentColor\">2</text><line x1=\"90\" y1=\"205\" x2=\"90\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"145\" x2=\"230\" y2=\"145\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"110\" y1=\"205\" x2=\"110\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"125\" x2=\"230\" y2=\"125\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"110\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">4</text><text x=\"24\" y=\"128\" text-anchor=\"end\" fill=\"currentColor\">4</text><line x1=\"130\" y1=\"205\" x2=\"130\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"105\" x2=\"230\" y2=\"105\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"150\" y1=\"205\" x2=\"150\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"85\" x2=\"230\" y2=\"85\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"150\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">6</text><text x=\"24\" y=\"88\" text-anchor=\"end\" fill=\"currentColor\">6</text><line x1=\"170\" y1=\"205\" x2=\"170\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"65\" x2=\"230\" y2=\"65\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"190\" y1=\"205\" x2=\"190\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"45\" x2=\"230\" y2=\"45\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"190\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">8</text><text x=\"24\" y=\"48\" text-anchor=\"end\" fill=\"currentColor\">8</text><line x1=\"210\" y1=\"205\" x2=\"210\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"25\" x2=\"230\" y2=\"25\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"230\" y1=\"205\" x2=\"230\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><line x1=\"30\" y1=\"5\" x2=\"230\" y2=\"5\" stroke=\"currentColor\" stroke-opacity=\"0.15\"/><text x=\"230\" y=\"219\" text-anchor=\"middle\" fill=\"currentColor\">10</text><text x=\"24\" y=\"8\" text-anchor=\"end\" fill=\"currentColor\">10</text><line x1=\"30\" y1=\"205\" x2=\"232\" y2=\"205\" stroke=\"currentColor\"/><line x1=\"30\" y1=\"205\" x2=\"30\" y2=\"3\" stroke=\"currentColor\"/><circle cx=\"70\" cy=\"165\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"161\" fill=\"currentColor\" font-weight=\"bold\">A</text><circle cx=\"150\" cy=\"165\" r=\"3\" fill=\"currentColor\"/><text x=\"155\" y=\"161\" fill=\"currentColor\" font-weight=\"bold\">B</text><circle cx=\"30\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"35\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">C</text><circle cx=\"110\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"115\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">D</text><circle cx=\"190\" cy=\"125\" r=\"3\" fill=\"currentColor\"/><text x=\"195\" y=\"121\" fill=\"currentColor\" font-weight=\"bold\">E</text><circle cx=\"70\" cy=\"85\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"81\" fill=\"currentColor\" font-weight=\"bold\">F</text><circle cx=\"70\" cy=\"45\" r=\"3\" fill=\"currentColor\"/><text x=\"75\" y=\"41\" fill=\"currentColor\" font-weight=\"bold\">G</text><circle cx=\"150\" cy=\"45\" r=\"3\" fill=\"currentColor\"/><text x=\"155\" y=\"41\" fill=\"currentColor\" font-weight=\"bold\">H</text><circle cx=\"110\" cy=\"25\" r=\"3\" fill=\"currentColor\"/><text x=\"115\" y=\"21\" fill=\"currentColor\" font-weight=\"bold\">I</text></svg>","choices":["G, I, H, D","A, B, E, C","A, B, E, D","F, I, H, D"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Hình diều có hai cặp cạnh kề bằng nhau. Nó có trục đối xứng đi qua hai đỉnh. Điểm nào thẳng hàng theo phương thẳng đứng, ví dụ D(4, 4) và I(4, 9)?","Thử G(2, 8), I(4, 9), H(6, 8) và D(4, 4): tính độ dài GI và IH, rồi HD và DG.","Hai cặp độ dài đó có bằng nhau không, và hai cặp có khác nhau không?"],"explain":"GI = IH = √5 (đi 2 ngang, 1 lên) và HD = DG = √20 (đi 2 ngang, 4 xuống). Hai cặp cạnh kề bằng nhau nhưng khác nhau, nên G, I, H, D tạo hình diều đối xứng qua đường x = 4.","why":null}
    ],
    "8.2": [
      {"id":"wb-8.2-01","type":"num","diff":1,"skill":"circumference","source":"wb","lang":"en","q":"Work out the circumference of a circle with diameter 8 cm. Use π = 3.142 and give your answer correct to 2 decimal places.","svg":null,"choices":null,"answer":25.14,"accept":[],"tol":0.005,"unitLabel":"cm","hints":["Công thức chu vi theo đường kính là gì?","Thay π = 3,142 và d = 8 vào công thức rồi nhân.","Làm tròn kết quả đến 2 chữ số thập phân."],"explain":"C = πd = 3,142 × 8 = 25,136 ≈ 25,14 cm.","why":null},
      {"id":"wb-8.2-02","type":"num","diff":2,"skill":"circumference","source":"wb","lang":"en","q":"A circle has diameter 9.5 m. Use the π button on your calculator to work out its circumference, correct to 2 decimal places.","svg":null,"choices":null,"answer":29.85,"accept":[],"tol":0.005,"unitLabel":"m","hints":["Đề cho đường kính hay bán kính?","Dùng C = π × d với nút π của máy tính.","Làm tròn đến 2 chữ số thập phân: nhìn chữ số thập phân thứ ba."],"explain":"C = π × 9,5 ≈ 29,845 ≈ 29,85 m.","why":null},
      {"id":"wb-8.2-03","type":"num","diff":2,"skill":"circumference-radius","source":"wb","lang":"en","q":"A circle has radius 2.8 m. Use the π button to work out its circumference, correct to 2 decimal places.","svg":null,"choices":null,"answer":17.59,"accept":[],"tol":0.005,"unitLabel":"m","hints":["Đề cho bán kính. Đường kính bằng bao nhiêu lần bán kính?","Tính đường kính rồi dùng C = πd, hoặc dùng C = 2πr.","Làm tròn đến 2 chữ số thập phân."],"explain":"d = 2 × 2,8 = 5,6 m. C = π × 5,6 ≈ 17,593 ≈ 17,59 m.","why":null},
      {"id":"wb-8.2-04","type":"num","diff":2,"skill":"diameter-from-circumference","source":"wb","lang":"en","q":"The circumference of a circle is 35 cm. Use the π button to work out its diameter, correct to 1 decimal place.","svg":null,"choices":null,"answer":11.1,"accept":[],"tol":0.05,"unitLabel":"cm","hints":["Công thức C = πd. Làm thế nào để d đứng một mình ở một vế?","d = C ÷ π. Thay C = 35 vào.","Làm tròn đến 1 chữ số thập phân."],"explain":"d = C ÷ π = 35 ÷ π ≈ 11,14 ≈ 11,1 cm.","why":null},
      {"id":"wb-8.2-05","type":"num","diff":2,"skill":"radius-from-circumference","source":"wb","lang":"en","q":"The circumference of a circle is 17.8 m. Use the π button to work out its radius, correct to 2 decimal places.","svg":null,"choices":null,"answer":2.83,"accept":[],"tol":0.005,"unitLabel":"m","hints":["Công thức nào cho chu vi theo bán kính?","Biến đổi C = 2πr để được r = C ÷ (2π).","Thay C = 17,8 và làm tròn đến 2 chữ số thập phân."],"explain":"r = C ÷ 2π = 17,8 ÷ (2π) ≈ 2,833 ≈ 2,83 m. Lỗi hay gặp: quên chia thêm cho 2 nên ra đường kính.","why":null},
      {"id":"wb-8.2-06","type":"num","diff":3,"skill":"coin-diameter","source":"wb","lang":"en","q":"The circumference of a circular coin is 56 mm. Work out the diameter of the coin, to the nearest millimetre.","svg":null,"choices":null,"answer":18,"accept":[],"tol":0,"unitLabel":"mm","hints":["Đề cho chu vi và hỏi đường kính: em dùng d = C ÷ π.","Chia 56 cho π (dùng nút π của máy tính).","Làm tròn đến số nguyên milimét gần nhất."],"explain":"d = 56 ÷ π ≈ 17,83 mm ≈ 18 mm.","why":null},
      {"id":"wb-8.2-07","type":"num","diff":3,"skill":"semicircle-perimeter","source":"wb","lang":"en","q":"A semicircle has a straight edge (its diameter) of 24 cm. Work out its perimeter, correct to 2 decimal places. Use the π button.","svg":null,"choices":null,"answer":61.7,"accept":[],"tol":0.005,"unitLabel":"cm","hints":["Phần cong của hình bán nguyệt bằng bao nhiêu phần của chu vi cả đường tròn có đường kính 24 cm?","Tính nửa chu vi: π × 24 ÷ 2.","Chu vi còn gồm cả cạnh thẳng. Em cộng thêm gì?"],"explain":"Phần cong: π × 24 ÷ 2 ≈ 37,70 cm. Cộng cạnh thẳng 24 cm: 37,70 + 24 ≈ 61,70 cm.","why":null},
      {"id":"wb-8.2-08","type":"mc","diff":3,"skill":"perimeter-comparison","source":"wb","lang":"en","q":"A semicircle has diameter 8 cm. A three-quarter circle has radius 3 cm (its perimeter includes the two straight edges). Marcus says the semicircle has the smaller perimeter. Is Marcus correct?","svg":null,"choices":["No: the semicircle's perimeter is about 20.6 cm, greater than the other shape's about 20.1 cm","Yes: the curved part of the semicircle (about 12.6 cm) is shorter than the curved part of the three-quarter circle (about 14.1 cm)","Yes: 8 cm is shorter than 3 × 3 cm","No: both perimeters are exactly 20 cm"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Chu vi bán nguyệt gồm phần cong và cạnh thẳng nào? Tính nửa chu vi đường tròn đường kính 8 cm rồi cộng 8.","Chu vi hình ba phần tư gồm phần cung 3/4 đường tròn bán kính 3 cm và hai cạnh thẳng mỗi cạnh 3 cm. Tính từng phần.","So sánh hai chu vi đầy đủ, đừng chỉ so sánh phần cong."],"explain":"Bán nguyệt: π × 8 ÷ 2 + 8 ≈ 12,57 + 8 = 20,57 cm. Ba phần tư: 3/4 × 2π × 3 + 3 + 3 ≈ 14,14 + 6 = 20,14 cm. Chu vi bán nguyệt lớn hơn, Marcus sai. Lỗi: chỉ so sánh phần cong mà quên các cạnh thẳng.","why":null},
      {"id":"wb-8.2-09","type":"num","diff":3,"skill":"three-quarter-perimeter","source":"wb","lang":"en","q":"A shape is made of three-quarters of a circle of radius 6 cm, together with the two straight edges (each 6 cm long) that meet at the centre. Work out its perimeter, correct to 2 decimal places.","svg":null,"choices":null,"answer":40.27,"accept":[],"tol":0.005,"unitLabel":"cm","hints":["Chu vi cả đường tròn bán kính 6 cm là bao nhiêu (C = 2πr)?","Phần cong là ba phần tư chu vi đó. Tính giá trị.","Cộng thêm hai cạnh thẳng, mỗi cạnh 6 cm."],"explain":"Phần cong: 3/4 × 2π × 6 = 9π ≈ 28,27 cm. Cộng hai cạnh thẳng: 28,27 + 12 ≈ 40,27 cm.","why":null},
      {"id":"wb-8.2-10", "howto": "Find the distance once around the outside edge of the whole track (both straight sections and both curved ends). Enter it to the nearest metre.","type":"num","diff":3,"skill":"athletics-track","source":"wb","lang":"en","q":"An athletics track has two straight sections of 84.39 m and a semicircle at each end. The inner semicircles have radius 36.8 m. There are 8 lanes, each 1.22 m wide. Work out the length of the outer perimeter of the track (outer radius = inner radius + 8 lanes), to the nearest metre.","svg":null,"choices":null,"answer":461,"accept":[],"tol":0,"unitLabel":"m","hints":["Bán kính ngoài bằng bán kính trong cộng tổng bề rộng 8 làn. Tính nó.","Hai nửa hình tròn ở hai đầu ghép lại thành một đường tròn đủ. Tính chu vi đường tròn với bán kính ngoài.","Cộng thêm hai đoạn thẳng, mỗi đoạn 84,39 m, rồi làm tròn đến mét."],"explain":"Bán kính ngoài = 36,8 + 8 × 1,22 = 46,56 m. Hai nửa hình tròn: 2π × 46,56 ≈ 292,54 m. Hai đoạn thẳng: 2 × 84,39 = 168,78 m. Tổng ≈ 461,32 ≈ 461 m.","why":null}
    ],
    "8.3": [
      {"id":"wb-8.3-01","type":"num","diff":1,"skill":"euler-formula","source":"wb","lang":"en","q":"For a 3D shape with no curved surfaces, E = F + V − 2. A shape has 8 faces and 12 vertices. How many edges does it have?","svg":null,"choices":null,"answer":18,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy xác định F và V trong đề bài.","Thay F = 8 và V = 12 vào công thức E = F + V − 2.","Tính E."],"explain":"E = F + V − 2 = 8 + 12 − 2 = 18 cạnh.","why":null},
      {"id":"wb-8.3-02","type":"num","diff":2,"skill":"euler-formula","source":"wb","lang":"en","q":"A 3D shape with flat faces has 11 faces and 20 edges. Use E = F + V − 2 to work out how many vertices it has.","svg":null,"choices":null,"answer":11,"accept":[],"tol":0,"unitLabel":"","hints":["Hãy biến đổi công thức E = F + V − 2 để V đứng một mình.","V = E − F + 2. Thay E = 20 và F = 11.","Tính V."],"explain":"V = E − F + 2 = 20 − 11 + 2 = 11 đỉnh.","why":null},
      {"id":"wb-8.3-03", "howto": "Imagine the front view drawn on paper at the given scale. Enter the area of that drawn shape on the paper, not the real area.","type":"num","diff":2,"skill":"scale-views","source":"wb","lang":"en","q":"A cuboid is 30 cm long, 24 cm wide and 12 cm high. Its views are drawn at scale 1 : 6. What is the area of the front view on the drawing? (The front view shows length × height.)","svg":null,"choices":null,"answer":10,"accept":[],"tol":0,"unitLabel":"cm²","hints":["Tỉ lệ 1 : 6 nghĩa là mỗi kích thước trên bản vẽ bằng bao nhiêu phần kích thước thật?","Chia chiều dài 30 và chiều cao 12 cho 6.","Nhân hai kích thước mới để được diện tích."],"explain":"Dài: 30 ÷ 6 = 5 cm, cao: 12 ÷ 6 = 2 cm. Diện tích hình chiếu đứng: 5 × 2 = 10 cm².","why":null},
      {"id":"wb-8.3-04", "howto": "Imagine the top view drawn on paper at the given scale. Enter the radius of the circle as it is drawn on the paper, not the real radius.","type":"num","diff":2,"skill":"scale-views","source":"wb","lang":"en","q":"A cylinder has diameter 16 cm and height 11 cm. Its views are drawn at scale 1 : 2. What is the radius of the circle in the top view on the drawing?","svg":null,"choices":null,"answer":4,"accept":[],"tol":0,"unitLabel":"cm","hints":["Nhìn từ trên xuống, em thấy hình gì của hình trụ?","Đường kính trên bản vẽ bằng 16 chia cho mấy?","Từ đường kính trên bản vẽ, em suy ra bán kính thế nào?"],"explain":"Hình chiếu bằng là hình tròn. Đường kính trên bản vẽ: 16 ÷ 2 = 8 cm nên bán kính là 4 cm.","why":null},
      {"id":"wb-8.3-05", "howto": "The front elevation is the flat shape you see when you look at the solid straight from the front. Enter the area of that shape.","type":"num","diff":2,"skill":"views-area","source":"wb","lang":"en","q":"A staircase solid is 4 cm wide and 3 cm deep. From the left its front elevation is 2 cm high for the first 2 cm of width and 1 cm high for the next 2 cm of width. Drawn at scale 1 : 1, what is the area of the front elevation?","svg":null,"choices":null,"answer":6,"accept":[],"tol":0,"unitLabel":"cm²","hints":["Hình chiếu đứng gồm hai hình chữ nhật cạnh nhau. Kích thước của mỗi hình là bao nhiêu?","Hình thứ nhất rộng 2 và cao 2; hình thứ hai rộng 2 và cao 1. Tính diện tích từng hình.","Cộng hai diện tích. (Chiều sâu 3 cm không xuất hiện trong hình chiếu đứng.)"],"explain":"2 × 2 + 2 × 1 = 4 + 2 = 6 cm². Chiều sâu 3 cm chỉ xuất hiện ở hình chiếu bằng và hình chiếu cạnh.","why":null},
      {"id":"wb-8.3-06", "howto": "Imagine the front elevation drawn on paper at the given scale. Enter the area of that drawn shape on the paper, not the real area.","type":"num","diff":3,"skill":"views-triangular-prism","source":"wb","lang":"en","q":"A right-angled triangular prism has a triangular face with perpendicular sides 15 cm and 20 cm (hypotenuse 25 cm) at the front, and is 35 cm long. At scale 1 : 5, what is the area of the front elevation on the drawing?","svg":null,"choices":null,"answer":6,"accept":[],"tol":0,"unitLabel":"cm²","hints":["Hình chiếu đứng của lăng trụ này là hình gì?","Hai cạnh góc vuông trên bản vẽ là 15 ÷ 5 và 20 ÷ 5. Tính chúng.","Diện tích tam giác vuông bằng một nửa tích hai cạnh góc vuông."],"explain":"Hình chiếu đứng là tam giác vuông có hai cạnh góc vuông 15 ÷ 5 = 3 cm và 20 ÷ 5 = 4 cm. Diện tích: 1/2 × 3 × 4 = 6 cm².","why":null},
      {"id":"wb-8.3-07", "howto": "Imagine the side elevation drawn on paper at the given scale. Enter the area of that drawn rectangle on the paper, not the real area.","type":"num","diff":3,"skill":"views-triangular-prism","source":"wb","lang":"en","q":"An isosceles triangular prism has triangular ends of base 100 cm and height 120 cm, and is 80 cm long. At scale 1 : 20, what is the area of the side elevation on the drawing? (The side elevation shows a rectangle: height by length.)","svg":null,"choices":null,"answer":24,"accept":[],"tol":0,"unitLabel":"cm²","hints":["Hình chiếu cạnh thể hiện những kích thước nào của lăng trụ: cao 120 cm và kích thước nào nữa?","Chia 120 và 80 cho 20.","Nhân hai số vừa tìm để được diện tích hình chữ nhật."],"explain":"Chiều cao trên bản vẽ: 120 ÷ 20 = 6 cm. Chiều dài: 80 ÷ 20 = 4 cm. Hình chữ nhật 6 × 4 có diện tích 24 cm². (Đáy 100 cm chỉ xuất hiện ở hình chiếu đứng và hình chiếu bằng.)","why":null},
      {"id":"wb-8.3-08", "howto": "Imagine the plan view (the L shape seen from above) drawn on paper at the given scale. Enter the area of that drawn shape on the paper, not the real area.","type":"num","diff":3,"skill":"views-cubes","source":"wb","lang":"en","q":"An L-shaped solid is made from three 20 cm cubes. Seen from above (the plan view) it is an L of three squares. At scale 1 : 10, what is the area of the plan view on the drawing?","svg":null,"choices":null,"answer":12,"accept":[],"tol":0,"unitLabel":"cm²","hints":["Mỗi hình vuông trong hình chiếu bằng có cạnh 20 cm. Trên bản vẽ tỉ lệ 1 : 10, cạnh còn bao nhiêu?","Diện tích mỗi hình vuông nhỏ trên bản vẽ là bao nhiêu?","Hình chiếu bằng có 3 hình vuông. Tính tổng diện tích."],"explain":"Cạnh mỗi ô: 20 ÷ 10 = 2 cm nên diện tích mỗi ô là 4 cm². Ba ô: 3 × 4 = 12 cm². Lưu ý: nhân đôi tỉ lệ không làm diện tích gấp đôi mà gấp bốn.","why":null},
      {"id":"wb-8.3-09","type":"mc","diff":2,"skill":"scale-units","source":"wb","lang":"en","q":"Abbie draws the 6 m long side of a shipping container at scale 1 : 120 and works out 6 ÷ 120 = 0.05 cm. What is her mistake?","svg":null,"choices":["She did not change 6 m into centimetres first: 600 ÷ 120 = 5 cm","She should have multiplied 6 by 120","The scale 1 : 120 means divide by 12","She made no mistake"],"answer":0,"accept":[],"tol":0,"unitLabel":"","hints":["Đề đo chiều dài bằng mét nhưng kết quả bản vẽ lại ghi bằng cm. Hai đơn vị đó có khớp nhau không?","6 m bằng bao nhiêu centimét?","Chia số centimét đó cho 120."],"explain":"Phải đổi cùng đơn vị trước khi dùng tỉ lệ: 6 m = 600 cm, 600 ÷ 120 = 5 cm. Abbie chia 6 (mét) cho 120 rồi gán đơn vị cm nên được kết quả quá nhỏ.","why":null},
      {"id":"wb-8.3-10","type":"mc","diff":2,"skill":"identify-view","source":"wb","lang":"en","q":"A cuboid is 30 cm long, 24 cm wide and 12 cm high. At scale 1 : 6 one of its views is drawn as a rectangle 4 cm by 2 cm. Which view is it?","svg":null,"choices":["Top view (plan)","Front view","Side view"],"answer":2,"accept":[],"tol":0,"unitLabel":"","hints":["Chia ba kích thước 30, 24, 12 cho 6. Em được ba số nào?","Hình chiếu bằng thể hiện dài × rộng, hình chiếu đứng dài × cao, hình chiếu cạnh rộng × cao. Cặp nào cho 4 × 2?","Kiểm tra các cặp còn lại: 5 × 4 và 5 × 2."],"explain":"Kích thước bản vẽ: 5, 4, 2 cm. Hình chiếu bằng 5 × 4, hình chiếu đứng 5 × 2, hình chiếu cạnh (rộng × cao) 4 × 2. Vậy đó là hình chiếu cạnh.","why":null}
    ]
  },
  tr: {
    en: {
      "q.wb-8.1-01.hints": [
        "What does the Greek prefix 'deca' mean?",
        "How many sides do an octagon, a nonagon and a hexagon have?",
        "Which name matches 10 sides?"
      ],
      "q.wb-8.1-01.explain": "A decagon has 10 sides. An octagon has 8, a nonagon 9 and a hexagon 6.",
      "q.wb-8.1-02.hints": [
        "For a regular polygon, how are the number of sides, lines of symmetry and order of rotation related?",
        "If the lines of symmetry and the order both equal the number of sides, check each statement against the number of sides.",
        "How many sides does a pentagon have, so what is its order? How many lines does a hexagon have?"
      ],
      "q.wb-8.1-02.explain": "A regular n-gon has n lines of symmetry and rotational symmetry of order n. True: octagon order 8; decagon 10 lines; 15 lines means 15 sides. False: pentagon is order 5 (not 10); order 20 means 20 sides; a hexagon has 6 lines.",
      "q.wb-8.1-03.hints": [
        "What is a shape with four right angles and four equal sides called? Does it fit 'not all 90°'?",
        "Does a rectangle have four equal sides?",
        "Does a parallelogram have four equal sides? What extra condition is needed?"
      ],
      "q.wb-8.1-03.explain": "Four equal sides with two pairs of parallel sides and equal opposite angles is a rhombus. A square is ruled out because its angles are all 90°; a general rectangle or parallelogram does not have four equal sides.",
      "q.wb-8.1-04.hints": [
        "Does a parallelogram have two pairs of parallel sides? Are its opposite sides equal?",
        "What distinguishes a rectangle from an ordinary parallelogram?",
        "What extra information about the angles must Sofia give for Zara to be sure?"
      ],
      "q.wb-8.1-04.explain": "A parallelogram has two pairs of parallel sides and two pairs of equal opposite sides, but no right angles. To be a rectangle it also needs four right angles. A common mistake is thinking side properties alone identify the shape.",
      "q.wb-8.1-05.hints": [
        "An ordinary trapezium only needs one pair of parallel sides. What makes it 'isosceles'?",
        "What is true about the two non-parallel sides of an isosceles trapezium?",
        "Which option describes a kite? Which describes a parallelogram?"
      ],
      "q.wb-8.1-05.explain": "An isosceles trapezium has exactly one pair of parallel sides and equal non-parallel sides. One parallel pair only is an ordinary trapezium; two pairs of adjacent equal sides is a kite; two parallel pairs is a parallelogram.",
      "q.wb-8.1-06.hints": [
        "Which shapes does the answer 'No' to the first question rule out?",
        "Which group of shapes has equal opposite angles? Adding 'all sides equal' leaves which shape?",
        "Does an ordinary parallelogram have all sides equal?"
      ],
      "q.wb-8.1-06.explain": "Not all angles are 90°, so square and rectangle are out. Equal opposite angles and four equal sides give a rhombus (an ordinary parallelogram does not have all sides equal).",
      "q.wb-8.1-07.hints": [
        "Opposite angles are not equal, so which shape is ruled out?",
        "Which group of shapes has exactly one pair of parallel sides?",
        "Within that group, which shape has two pairs of equal angles (the two angles at each base)?"
      ],
      "q.wb-8.1-07.explain": "Opposite angles are not equal, so it is not a parallelogram. One pair of parallel sides makes it a trapezium; two pairs of equal angles (the angles at each base) make it an isosceles trapezium. A kite has no parallel sides.",
      "q.wb-8.1-08.hints": [
        "A rectangle has four right angles: sides are horizontal and vertical here. Which points share an x-coordinate, which share a y-coordinate?",
        "A(2, 2) and B(6, 2) are on a horizontal line. Which two points lie directly above them?",
        "Check that your four points make four right angles."
      ],
      "q.wb-8.1-08.explain": "A(2, 2), B(6, 2), H(6, 8), G(2, 8) form a 4 by 6 rectangle with horizontal and vertical sides. The other sets form a parallelogram, an isosceles trapezium or a quadrilateral with no right angles.",
      "q.wb-8.1-09.hints": [
        "A square has four equal sides and four right angles. Is the 4 by 6 rectangle a square?",
        "A square can be tilted. Its diagonals are equal, perpendicular and cross at their midpoints.",
        "Try A, D, F, C: how long is the vertical diagonal AF and the horizontal diagonal CD?"
      ],
      "q.wb-8.1-09.explain": "A(2, 2), D(4, 4), F(2, 6), C(0, 4): the diagonals AF (vertical) and CD (horizontal) are both length 4, perpendicular and cross at (2, 4), so it is a tilted square (side √8). The 4 by 6 rectangle is not a square.",
      "q.wb-8.1-10.hints": [
        "A kite has two pairs of equal adjacent sides and a line of symmetry through two vertices. Which points line up vertically, for example D(4, 4) and I(4, 9)?",
        "Try G(2, 8), I(4, 9), H(6, 8) and D(4, 4): work out GI and IH, then HD and DG.",
        "Are those two pairs of lengths equal, and are the two pairs different from each other?"
      ],
      "q.wb-8.1-10.explain": "GI = IH = √5 (2 across, 1 up) and HD = DG = √20 (2 across, 4 down). Two pairs of equal adjacent sides that differ from each other, so G, I, H, D form a kite symmetrical about x = 4.",
      "q.wb-8.2-01.hints": [
        "What is the formula for circumference using the diameter?",
        "Substitute π = 3.142 and d = 8, then multiply.",
        "Round the result to 2 decimal places."
      ],
      "q.wb-8.2-01.explain": "C = πd = 3.142 × 8 = 25.136 ≈ 25.14 cm.",
      "q.wb-8.2-02.hints": [
        "Does the question give the diameter or the radius?",
        "Use C = π × d with the π button on your calculator.",
        "Round to 2 decimal places: look at the third decimal digit."
      ],
      "q.wb-8.2-02.explain": "C = π × 9.5 ≈ 29.845 ≈ 29.85 m.",
      "q.wb-8.2-03.hints": [
        "The question gives the radius. How many times the radius is the diameter?",
        "Work out the diameter and use C = πd, or use C = 2πr.",
        "Round to 2 decimal places."
      ],
      "q.wb-8.2-03.explain": "d = 2 × 2.8 = 5.6 m. C = π × 5.6 ≈ 17.593 ≈ 17.59 m.",
      "q.wb-8.2-04.hints": [
        "The formula is C = πd. How do you get d on its own?",
        "d = C ÷ π. Substitute C = 35.",
        "Round to 1 decimal place."
      ],
      "q.wb-8.2-04.explain": "d = C ÷ π = 35 ÷ π ≈ 11.14 ≈ 11.1 cm.",
      "q.wb-8.2-05.hints": [
        "Which formula gives circumference using the radius?",
        "Rearrange C = 2πr to get r = C ÷ (2π).",
        "Substitute C = 17.8 and round to 2 decimal places."
      ],
      "q.wb-8.2-05.explain": "r = C ÷ 2π = 17.8 ÷ (2π) ≈ 2.833 ≈ 2.83 m. A common mistake is forgetting to divide by 2, which gives the diameter.",
      "q.wb-8.2-06.hints": [
        "You are given the circumference and want the diameter: use d = C ÷ π.",
        "Divide 56 by π (use the π button on your calculator).",
        "Round to the nearest whole millimetre."
      ],
      "q.wb-8.2-06.explain": "d = 56 ÷ π ≈ 17.83 mm ≈ 18 mm.",
      "q.wb-8.2-07.hints": [
        "The curved part of the semicircle is what fraction of the circumference of a full circle with diameter 24 cm?",
        "Work out half the circumference: π × 24 ÷ 2.",
        "The perimeter also includes the straight edge. What must you add?"
      ],
      "q.wb-8.2-07.explain": "Curved part: π × 24 ÷ 2 ≈ 37.70 cm. Add the straight edge of 24 cm: 37.70 + 24 ≈ 61.70 cm.",
      "q.wb-8.2-08.hints": [
        "Which curved and straight parts make the semicircle's perimeter? Work out half the circumference of a circle with diameter 8 cm, then add 8.",
        "The three-quarter circle's perimeter is a 3/4 arc of radius 3 cm plus two straight edges of 3 cm each. Work out each part.",
        "Compare the full perimeters, not just the curved parts."
      ],
      "q.wb-8.2-08.explain": "Semicircle: π × 8 ÷ 2 + 8 ≈ 12.57 + 8 = 20.57 cm. Three-quarter circle: 3/4 × 2π × 3 + 3 + 3 ≈ 14.14 + 6 = 20.14 cm. The semicircle's perimeter is larger, so Marcus is wrong. The mistake: comparing only the curved parts and forgetting the straight edges.",
      "q.wb-8.2-09.hints": [
        "What is the circumference of the whole circle of radius 6 cm (C = 2πr)?",
        "The curved part is three-quarters of that. Work it out.",
        "Add the two straight edges of 6 cm each."
      ],
      "q.wb-8.2-09.explain": "Curved part: 3/4 × 2π × 6 = 9π ≈ 28.27 cm. Add the two straight edges: 28.27 + 12 ≈ 40.27 cm.",
      "q.wb-8.2-10.hints": [
        "The outer radius is the inner radius plus the total width of 8 lanes. Work it out.",
        "The two end semicircles together make one full circle. Work out the circumference with the outer radius.",
        "Add the two straight sections of 84.39 m each, then round to the nearest metre."
      ],
      "q.wb-8.2-10.explain": "Outer radius = 36.8 + 8 × 1.22 = 46.56 m. Two semicircles: 2π × 46.56 ≈ 292.54 m. Two straights: 2 × 84.39 = 168.78 m. Total ≈ 461.32 ≈ 461 m.",
      "q.wb-8.3-01.hints": [
        "Identify F and V in the question.",
        "Substitute F = 8 and V = 12 into E = F + V − 2.",
        "Work out E."
      ],
      "q.wb-8.3-01.explain": "E = F + V − 2 = 8 + 12 − 2 = 18 edges.",
      "q.wb-8.3-02.hints": [
        "Rearrange E = F + V − 2 to get V on its own.",
        "V = E − F + 2. Substitute E = 20 and F = 11.",
        "Work out V."
      ],
      "q.wb-8.3-02.explain": "V = E − F + 2 = 20 − 11 + 2 = 11 vertices.",
      "q.wb-8.3-03.hints": [
        "Scale 1 : 6 means each length on the drawing is what fraction of the real length?",
        "Divide the length 30 and the height 12 by 6.",
        "Multiply the two new lengths to get the area."
      ],
      "q.wb-8.3-03.explain": "Length: 30 ÷ 6 = 5 cm, height: 12 ÷ 6 = 2 cm. Area of the front view: 5 × 2 = 10 cm².",
      "q.wb-8.3-04.hints": [
        "Looking from above, which shape of the cylinder do you see?",
        "The diameter on the drawing is 16 divided by what?",
        "From the diameter on the drawing, how do you get the radius?"
      ],
      "q.wb-8.3-04.explain": "The top view is a circle. Diameter on the drawing: 16 ÷ 2 = 8 cm, so the radius is 4 cm.",
      "q.wb-8.3-05.hints": [
        "The front elevation is made of two rectangles side by side. What are the dimensions of each?",
        "The first is 2 wide and 2 high; the second is 2 wide and 1 high. Work out each area.",
        "Add the two areas. (The depth of 3 cm does not appear in the front elevation.)"
      ],
      "q.wb-8.3-05.explain": "2 × 2 + 2 × 1 = 4 + 2 = 6 cm². The depth of 3 cm only shows in the plan view and the side elevation.",
      "q.wb-8.3-06.hints": [
        "What shape is the front elevation of this prism?",
        "The two perpendicular sides on the drawing are 15 ÷ 5 and 20 ÷ 5. Work them out.",
        "The area of a right-angled triangle is half the product of its perpendicular sides."
      ],
      "q.wb-8.3-06.explain": "The front elevation is a right-angled triangle with perpendicular sides 15 ÷ 5 = 3 cm and 20 ÷ 5 = 4 cm. Area: 1/2 × 3 × 4 = 6 cm².",
      "q.wb-8.3-07.hints": [
        "Which dimensions of the prism does the side elevation show: the height of 120 cm and which other?",
        "Divide 120 and 80 by 20.",
        "Multiply the two results to get the rectangle's area."
      ],
      "q.wb-8.3-07.explain": "Height on the drawing: 120 ÷ 20 = 6 cm. Length: 80 ÷ 20 = 4 cm. The 6 by 4 rectangle has area 24 cm². (The 100 cm base only shows in the front elevation and the plan view.)",
      "q.wb-8.3-08.hints": [
        "Each square in the plan view has side 20 cm. At scale 1 : 10, what is its side on the drawing?",
        "What is the area of each small square on the drawing?",
        "The plan view has 3 squares. Work out the total area."
      ],
      "q.wb-8.3-08.explain": "Side of each square: 20 ÷ 10 = 2 cm, so each has area 4 cm². Three squares: 3 × 4 = 12 cm². Note: scaling lengths by a factor changes areas by the square of that factor.",
      "q.wb-8.3-09.hints": [
        "The length is measured in metres but the drawing result is in cm. Do the units match?",
        "How many centimetres is 6 m?",
        "Divide that number of centimetres by 120."
      ],
      "q.wb-8.3-09.explain": "Change to the same unit before using the scale: 6 m = 600 cm, 600 ÷ 120 = 5 cm. Abbie divided 6 (metres) by 120 and then called it cm, giving a result that is far too small.",
      "q.wb-8.3-10.hints": [
        "Divide the three dimensions 30, 24, 12 by 6. Which three numbers do you get?",
        "The top view shows length × width, the front view length × height, the side view width × height. Which pair gives 4 × 2?",
        "Check the other pairs: 5 × 4 and 5 × 2."
      ],
      "q.wb-8.3-10.explain": "Drawing dimensions: 5, 4, 2 cm. Top view 5 × 4, front view 5 × 2, side view (width × height) 4 × 2. So it is the side view."
    },
    vi: {
    "q.wb-8.3-08.howto": "Hãy hình dung hình chiếu bằng (hình chữ L nhìn từ trên) được vẽ trên giấy theo tỉ lệ đã cho. Nhập diện tích của hình vẽ trên giấy, không phải diện tích thật.",
    "q.wb-8.3-07.howto": "Hãy hình dung hình chiếu cạnh được vẽ trên giấy theo tỉ lệ đã cho. Nhập diện tích của hình chữ nhật vẽ trên giấy, không phải diện tích thật.",
    "q.wb-8.3-06.howto": "Hãy hình dung hình chiếu đứng được vẽ trên giấy theo tỉ lệ đã cho. Nhập diện tích của hình vẽ trên giấy, không phải diện tích thật.",
    "q.wb-8.3-05.howto": "Hình chiếu đứng là hình phẳng em thấy khi nhìn thẳng vào vật từ phía trước. Nhập diện tích của hình đó.",
    "q.wb-8.3-04.howto": "Hãy hình dung hình nhìn từ trên được vẽ trên giấy theo tỉ lệ đã cho. Nhập bán kính của hình tròn trên giấy, không phải bán kính thật.",
    "q.wb-8.3-03.howto": "Hãy hình dung hình nhìn từ phía trước được vẽ trên giấy theo tỉ lệ đã cho. Nhập diện tích của hình vẽ trên giấy, không phải diện tích thật.",
    "q.wb-8.2-10.howto": "Tìm chiều dài một vòng theo mép ngoài của cả đường chạy (cả hai đoạn thẳng và hai đầu cong). Nhập kết quả làm tròn đến mét.",
      "q.wb-8.1-01.q": "Đa giác đều nào có 10 cạnh?",
      "q.wb-8.1-01.choices": [
        "Thập giác đều",
        "Bát giác đều",
        "Cửu giác đều",
        "Lục giác đều"
      ],
      "q.wb-8.1-02.q": "Những nhận định nào về đa giác đều là ĐÚNG? (chọn tất cả)",
      "q.wb-8.1-02.choices": [
        "Bát giác đều có đối xứng quay bậc 8",
        "Ngũ giác đều có đối xứng quay bậc 10",
        "Thập giác đều có 10 trục đối xứng",
        "Đa giác có đối xứng quay bậc 20 thì có 19 cạnh",
        "Lục giác đều có năm trục đối xứng",
        "Đa giác đều có 15 trục đối xứng thì có 15 cạnh"
      ],
      "q.wb-8.1-03.q": "Một tứ giác có bốn cạnh bằng nhau, hai cặp cạnh song song và các góc đối bằng nhau, nhưng các góc không đều bằng 90°. Đó là hình gì?",
      "q.wb-8.1-03.choices": [
        "Hình vuông",
        "Hình chữ nhật",
        "Hình thoi",
        "Hình bình hành"
      ],
      "q.wb-8.1-04.q": "Sofia nói: «Tứ giác của tớ có hai cặp cạnh song song và hai cặp cạnh bằng nhau.» Zara nói đó chắc chắn là hình chữ nhật. Zara nói đúng không?",
      "q.wb-8.1-04.choices": [
        "Không: hình bình hành (hoặc hình thoi) cũng có các tính chất đó; Sofia còn phải nói mọi góc đều 90°",
        "Đúng: chỉ hình chữ nhật mới có hai cặp cạnh song song",
        "Đúng: chỉ hình chữ nhật mới có hai cặp cạnh bằng nhau",
        "Không: đó chắc chắn là hình diều"
      ],
      "q.wb-8.1-05.q": "Mô tả nào đủ để chắc chắn một tứ giác là hình thang cân?",
      "q.wb-8.1-05.choices": [
        "Đúng một cặp cạnh song song, và hai cạnh còn lại bằng nhau",
        "Chỉ cần một cặp cạnh song song",
        "Hai cặp cạnh kề bằng nhau",
        "Hai cặp cạnh song song"
      ],
      "q.wb-8.1-06.q": "Một sơ đồ phân loại hỏi các câu sau về một tứ giác. «Mọi góc đều 90°?» Không. «Các góc đối bằng nhau?» Có. «Mọi cạnh bằng nhau?» Có. Nó xác định hình nào?",
      "q.wb-8.1-06.choices": [
        "Hình thoi",
        "Hình bình hành",
        "Hình diều",
        "Hình chữ nhật"
      ],
      "q.wb-8.1-07.q": "Sơ đồ đó được dùng cho một tứ giác khác: «Mọi góc đều 90°?» Không. «Các góc đối bằng nhau?» Không. «Có một cặp cạnh song song?» Có. «Có hai cặp góc bằng nhau?» Có. Nó xác định hình nào?",
      "q.wb-8.1-07.choices": [
        "Hình thang (không cân)",
        "Hình thang cân",
        "Hình diều",
        "Hình bình hành"
      ],
      "q.wb-8.1-08.q": "Chín điểm được vẽ: A(2, 2), B(6, 2), C(0, 4), D(4, 4), E(8, 4), F(2, 6), G(2, 8), H(6, 8), I(4, 9). Bốn điểm nào có thể nối thành một hình chữ nhật?",
      "q.wb-8.1-08.choices": [
        "A, B, H, G",
        "A, B, E, D",
        "A, B, E, C",
        "F, I, H, D"
      ],
      "q.wb-8.1-09.q": "Dùng các điểm đã vẽ A(2, 2), B(6, 2), C(0, 4), D(4, 4), E(8, 4), F(2, 6), G(2, 8), H(6, 8), I(4, 9), bốn điểm nào có thể nối thành một hình vuông?",
      "q.wb-8.1-09.choices": [
        "A, D, F, C",
        "A, B, H, G",
        "A, B, E, D",
        "A, B, E, C"
      ],
      "q.wb-8.1-10.q": "Dùng các điểm đã vẽ A(2, 2), B(6, 2), C(0, 4), D(4, 4), E(8, 4), F(2, 6), G(2, 8), H(6, 8), I(4, 9), bốn điểm nào có thể nối thành một hình diều?",
      "q.wb-8.1-10.choices": [
        "G, I, H, D",
        "A, B, E, C",
        "A, B, E, D",
        "F, I, H, D"
      ],
      "q.wb-8.2-01.q": "Tính chu vi đường tròn có đường kính 8 cm. Lấy π = 3,142 và làm tròn đến 2 chữ số thập phân.",
      "q.wb-8.2-02.q": "Một đường tròn có đường kính 9,5 m. Dùng nút π trên máy tính để tính chu vi, làm tròn đến 2 chữ số thập phân.",
      "q.wb-8.2-03.q": "Một đường tròn có bán kính 2,8 m. Dùng nút π tính chu vi, làm tròn đến 2 chữ số thập phân.",
      "q.wb-8.2-04.q": "Chu vi của một đường tròn là 35 cm. Dùng nút π tính đường kính, làm tròn đến 1 chữ số thập phân.",
      "q.wb-8.2-05.q": "Chu vi của một đường tròn là 17,8 m. Dùng nút π tính bán kính, làm tròn đến 2 chữ số thập phân.",
      "q.wb-8.2-06.q": "Chu vi của một đồng xu tròn là 56 mm. Tính đường kính của đồng xu, làm tròn đến milimét.",
      "q.wb-8.2-07.q": "Một hình bán nguyệt có cạnh thẳng (đường kính) dài 24 cm. Tính chu vi của nó, làm tròn đến 2 chữ số thập phân. Dùng nút π.",
      "q.wb-8.2-08.q": "Một hình bán nguyệt có đường kính 8 cm. Một hình ba phần tư hình tròn có bán kính 3 cm (chu vi gồm cả hai cạnh thẳng). Marcus nói hình bán nguyệt có chu vi nhỏ hơn. Marcus nói đúng không?",
      "q.wb-8.2-08.choices": [
        "Không: chu vi hình bán nguyệt khoảng 20,6 cm, lớn hơn khoảng 20,1 cm của hình kia",
        "Đúng: phần cong của hình bán nguyệt (khoảng 12,6 cm) ngắn hơn phần cong của hình ba phần tư (khoảng 14,1 cm)",
        "Đúng: 8 cm ngắn hơn 3 × 3 cm",
        "Không: cả hai chu vi đều đúng bằng 20 cm"
      ],
      "q.wb-8.2-09.q": "Một hình gồm ba phần tư hình tròn bán kính 6 cm, cùng hai cạnh thẳng (mỗi cạnh dài 6 cm) gặp nhau ở tâm. Tính chu vi của hình, làm tròn đến 2 chữ số thập phân.",
      "q.wb-8.2-10.q": "Một đường chạy điền kinh có hai đoạn thẳng dài 84,39 m và một nửa hình tròn ở mỗi đầu. Các nửa hình tròn trong có bán kính 36,8 m. Có 8 làn, mỗi làn rộng 1,22 m. Tính chu vi ngoài của đường chạy (bán kính ngoài = bán kính trong + 8 làn), làm tròn đến mét.",
      "q.wb-8.3-01.q": "Với hình khối không có mặt cong, E = F + V − 2. Một hình khối có 8 mặt và 12 đỉnh. Nó có bao nhiêu cạnh?",
      "q.wb-8.3-02.q": "Một hình khối có các mặt phẳng, có 11 mặt và 20 cạnh. Dùng E = F + V − 2 để tính số đỉnh của nó.",
      "q.wb-8.3-03.q": "Một hình hộp chữ nhật dài 30 cm, rộng 24 cm và cao 12 cm. Các hình chiếu được vẽ theo tỉ lệ 1 : 6. Diện tích hình chiếu đứng (nhìn từ phía trước) trên bản vẽ là bao nhiêu? (Hình chiếu đứng thể hiện dài × cao.)",
      "q.wb-8.3-04.q": "Một hình trụ có đường kính 16 cm và chiều cao 11 cm. Các hình chiếu được vẽ theo tỉ lệ 1 : 2. Bán kính của hình tròn trong hình chiếu bằng (nhìn từ trên xuống) trên bản vẽ là bao nhiêu?",
      "q.wb-8.3-05.q": "Một khối bậc thang rộng 4 cm và sâu 3 cm. Hình chiếu đứng cao 2 cm ở 2 cm chiều rộng đầu tiên và cao 1 cm ở 2 cm chiều rộng tiếp theo. Vẽ theo tỉ lệ 1 : 1, diện tích hình chiếu đứng là bao nhiêu?",
      "q.wb-8.3-06.q": "Một lăng trụ tam giác vuông có mặt tam giác với hai cạnh góc vuông 15 cm và 20 cm (cạnh huyền 25 cm) ở phía trước và dài 35 cm. Theo tỉ lệ 1 : 5, diện tích hình chiếu đứng trên bản vẽ là bao nhiêu?",
      "q.wb-8.3-07.q": "Một lăng trụ tam giác cân có hai đáy là tam giác cân có đáy 100 cm và chiều cao 120 cm, lăng trụ dài 80 cm. Theo tỉ lệ 1 : 20, diện tích hình chiếu cạnh trên bản vẽ là bao nhiêu? (Hình chiếu cạnh là hình chữ nhật: cao × dài.)",
      "q.wb-8.3-08.q": "Một khối hình chữ L ghép từ ba hình lập phương cạnh 20 cm. Nhìn từ trên xuống (hình chiếu bằng) nó là chữ L gồm ba hình vuông. Theo tỉ lệ 1 : 10, diện tích hình chiếu bằng trên bản vẽ là bao nhiêu?",
      "q.wb-8.3-09.q": "Abbie vẽ cạnh dài 6 m của một container theo tỉ lệ 1 : 120 và tính 6 ÷ 120 = 0,05 cm. Bạn đã sai ở đâu?",
      "q.wb-8.3-09.choices": [
        "Bạn chưa đổi 6 m sang centimét trước: 600 ÷ 120 = 5 cm",
        "Bạn phải nhân 6 với 120",
        "Tỉ lệ 1 : 120 nghĩa là chia cho 12",
        "Bạn không sai"
      ],
      "q.wb-8.3-10.q": "Một hình hộp chữ nhật dài 30 cm, rộng 24 cm và cao 12 cm. Theo tỉ lệ 1 : 6, một hình chiếu của nó được vẽ là hình chữ nhật 4 cm × 2 cm. Đó là hình chiếu nào?",
      "q.wb-8.3-10.choices": [
        "Hình chiếu bằng (nhìn từ trên xuống)",
        "Hình chiếu đứng (nhìn từ trước)",
        "Hình chiếu cạnh (nhìn từ bên)"
      ]
    }
  }
});
