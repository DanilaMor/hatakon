var currentCell = null;

function activeCell(r) {
    var id = r.getAttribute("id");
    var coord = id.split(";");
    var i = coord[0];
    var j = coord[1];
    if (currentCell == null) {
        currentCell = r;
        currentCell.setAttribute("class","BlueCell")
        var result = getCell(i,j);
        for (var k=0; k < result.length; k++){
            var cell = document.getElementById(result[k]);
            if (cell != null){
            cell.setAttribute("class", "GreenCell");
            }
        }
    } else {
            var cellId = currentCell.getAttribute("id")
            var coordCell = cellId.split(";");
            var iCell = coordCell[0];
            var jCell = coordCell[1];

            if ((parseInt(iCell) + parseInt(jCell)) % 2 == 0){
                currentCell.setAttribute("class", "WhileCell");
            }else{
                currentCell.setAttribute("class", "BlackCell");
            }

            var result = getCell(iCell,jCell);
            for (var k=0; k < result.length; k++){
                 var cell = document.getElementById(result[k]);
                 if (cell != null){
                 cellId = cell.getAttribute("id")
                 coordCell = cellId.split(";");
                   var iCell = coordCell[0];
                             var jCell = coordCell[1];
                             if ((parseInt(iCell) + parseInt(jCell)) % 2 == 0){
                                 cell.setAttribute("class", "WhileCell");
                             }else{
                                 cell.setAttribute("class", "BlackCell");
                             }

                 }
             }
             if (currentCell != r){
                currentCell = null;
                activeCell(r);
             }else{
                currentCell = null;
             }

        }
}

function getCell(ii,jj){
        var number = 8;
        var index = 0;
        var result = new Array(number);
        var charA = parseInt(ii);
        var charB = parseInt(jj);
            for (var i = 0; i < 4; i++) {
                var delta1;
                var delta2;
                switch (i) {
                    case 0:
                        delta1 =  1;
                        delta2 =  2;
                        break;
                    case 1:
                        delta1 = -1;
                        delta2 = -2;
                        break;
                    case 2:
                        delta1 = -1;
                        delta2 = 2;
                        break;
                    case 3:
                        delta1 = 1;
                        delta2 = -2;
                        break;
                }

                if ( ((0 < charA+delta1) && (charA+delta1 < 9)) && ((0 < charB+delta2) && (charB+delta2 < 9))) {
                    result[index] = (charA+delta1)+";"+(charB+delta2);
                    index = index + 1;
                }

                if ( ((0 < charA+delta2) && (charA+delta2 < 9)) && ((0 < charB+delta1) && (charB+delta1 < 9))) {
                    result[index] = (charA+delta2)+";"+(charB+delta1);
                    index = index + 1;
                 }
            }
         return result
}
