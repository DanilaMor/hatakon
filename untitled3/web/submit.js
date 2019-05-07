var table = {
    "pole": []
};
var currentCell = null;
var timer = 0;
var numPairsFound = 0;

function startGame() {
    numPairsFound = 0;
    table.pole = new Array(4);
    for (var i = 0; i < 4; i++) {
        table.pole[i] = new Array(4);
        for (var j = 0; j < 4; j++) {
            table.pole[i][j] = "white";
        }
    }

    var color = ["green", "red", "black", "yellow", "blue", "sienna", "purple", "#b0e0e6"];

    var colorNull = 0;
    while (colorNull != 8) {
        var iter = randomInteger(0, color.length - 1);

        if (getColorNull(color) > 0 && getColorNull(color) < 8) {
            while (color[iter] == null) {
                iter = randomInteger(0, color.length - 1);
            }
        }

        var ii = randomInteger(0, 3);
        var jj = randomInteger(0, 3);

        if (!isColor(table.pole, color[iter])) {
            // alert(color[iter]);
            if (table.pole[ii][jj] == "white") {
                table.pole[ii][jj] = color[iter];
                var id = ii + ";" + jj;
                setColor(color[iter], id);
            }
        } else {
            color[iter] = null;
            colorNull = getColorNull(color);
        }
    }

    setTimeout("viewColor(null)", 10000);
    // run timer

    timer = new Date().getTime();

    var interval = setInterval(function () {
        if (timer == 0) return;
        document.getElementById('timer').innerHTML = (new Date().getTime() - timer) / 1000;
        if (numPairsFound == 8) {
            var message = "Вы выиграли:\n Затраченное время: " + timer;
            alert(message);
            timer = 0;
        }
    }, 100);
}
function getColorNull(color) {
    var colorNull = 0;
    for (var kk = 0; kk < color.length; kk++) {
        if (color[kk] == null) {
            colorNull++;
        }
    }
    return colorNull;
}

function viewColor(tableCalls) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var id = i + ";" + j;
            if (tableCalls == null) {
                setColor("white", id);
            } else {
                if (tableCalls[i][j] != null) {
                    setColor(tableCalls[i][j], id);
                }
            }
        }
    }
}
function setColor(color, id) {
    if (color != null) {
        var cell = document.getElementById(id);
        cell.setAttribute("style", "background: " + color);

        if (cell.getAttribute("onclick") == null) {
            cell.setAttribute("onclick", "activeCell(this)");
        }
    }
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function isColor(matr, color) {
    var count = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (matr[i][j] == color) {
                count = count + 1;
            }
        }
    }
    return count == 2;
}

function activeCell(r) {
    var id = r.getAttribute("id");
    var coord = id.split(";");
    var i = coord[0];
    var j = coord[1];
    if (currentCell == null) {
        setColor(table.pole[i][j], id);
        currentCell = r;
    } else {
        if (currentCell != null) {
            setColor(table.pole[i][j], id);

            if (currentCell.getAttribute("style") != r.getAttribute("style")) {
                setColor("white", id);
                setColor("white", currentCell.getAttribute("id"));
            } else {
                if (currentCell.getAttribute("id") != r.getAttribute("id")) {
                    numPairsFound++;
                }
            }

            currentCell = null;
        }

    }
}
