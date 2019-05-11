var currentCell = null;


function activeCell(r) {
    // get i,j coord current cell
    var id = r.getAttribute("id");
    var coord = id.split(";");
    var i = coord[0];
    var j = coord[1];

    var result;
    var cell;
    var k;

    if (currentCell == null) {
        currentCell = r;
        // set color Blue
        currentCell.setAttribute("class", "BlueCell");
        result = getCell(i, j);

        // set color green for result
        for (k = 0; k < result.length; k++) {
            cell = document.getElementById(result[k]);
            if (cell != null) {
                cell.setAttribute("class", "GreenCell");
            }
        }
    } else {
        // return cell previous color
        var cellId = currentCell.getAttribute("id");
        var coordCell = cellId.split(";");
        var iCell = coordCell[0];
        var jCell = coordCell[1];
        if ((parseInt(iCell) + parseInt(jCell)) % 2 == 0) {
            currentCell.setAttribute("class", "WhileCell");
        } else {
            currentCell.setAttribute("class", "BlackCell");
        }
        result = getCell(iCell, jCell);
        for (k = 0; k < result.length; k++) {
            cell = document.getElementById(result[k]);
            if (cell != null) {
                cellId = cell.getAttribute("id")
                coordCell = cellId.split(";");
                iCell = coordCell[0];
                jCell = coordCell[1];
                if ((parseInt(iCell) + parseInt(jCell)) % 2 == 0) {
                    cell.setAttribute("class", "WhileCell");
                } else {
                    cell.setAttribute("class", "BlackCell");
                }

            }
        }
        if (currentCell != r) {
            currentCell = null;
            activeCell(r);
        } else {
            currentCell = null;
        }

    }
}

// returns the id of all positions of the horse
// the principle is the same as in task 2
function getCell(ii, jj) {
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
                delta1 = 1;
                delta2 = 2;
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

        if (((0 < charA + delta1) && (charA + delta1 < 9)) && ((0 < charB + delta2) && (charB + delta2 < 9))) {
            result[index] = (charA + delta1) + ";" + (charB + delta2);
            index = index + 1;
        }

        if (((0 < charA + delta2) && (charA + delta2 < 9)) && ((0 < charB + delta1) && (charB + delta1 < 9))) {
            result[index] = (charA + delta2) + ";" + (charB + delta1);
            index = index + 1;
        }
    }
    return result
}
