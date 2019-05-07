/**
 * Created by user on 27.11.2017.
 */
var str;

function summa() {
    var line = {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H"};
    var hight = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8"};

    var text = document.forms["form"].elements["A"].value;
    // text = text.toUpperCase();

    if (text.length != 2 && text.search(/[A-H][0-9]]/)) {
        alert("Результат: \n Не верные данные");
    } else {
        var charLine = text.charCodeAt(0) - "A".charCodeAt(0) + 1;
        var charHigh = parseInt(text.charAt(1));

        var number= 8;
        var index = 0;

        var result = new Array(number);

        var charA = charLine + 1;
        var charB = charHigh + 2;
        for (var i = 0; i < 4; i++) {
            var charAA;
            var charBB;
            switch (i) {
                case 0:
                    charAA = charA;
                    charBB = charB;
                    break;
                case 1:
                    charAA = -charA;
                    charBB = -charB;
                    break;
                case 2:
                    charAA = -charA;
                    charBB = charB;
                    break;
                case 3:
                    charAA = charA;
                    charBB = -charB;
                    break;
            }
            if (line[charAA] != null && hight[charBB] != null) {
                result[index] = "" + line[charAA] + hight[charBB];
                index++
            }
            if (line[charBB] != null && hight[charAA] != null) {
                result[index] = "" + line[charBB] + hight[charAA];
                index++
            }
        }

        alert("Результат: \n " + result.join(" "));
    }

    alert("Результат: \n " + text.length);
}
function submit1() {
    var A = document.forms["form"].elements["A"].value;
    var B = document.forms["form"].elements["B"].value;
    var C = document.forms["form"].elements["C"].value;
    var bool = true;

    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);

    if ((isNaN(A)) | (isNaN(B)) | (isNaN(C))) {
        bool = false;
        alert("Ошибка ввода");
    }

    if (bool) {
        var req1 = {"A": A, "B": B, "C": C};

        str = "A=" + A + "&" + "B=" + B + "&" + "C=" + C;

        ajaxReq = new XMLHttpRequest();
        ajaxReq.onreadystatechange = processReq;

        var url = "/submit";

        ajaxReq.open("POST", url);
        ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajaxReq.send(str);
    }
}

function processReq() {
    if (ajaxReq.readyState == 4) {
        if (ajaxReq.status == 200) {
            var str1 = ajaxReq.responseText;
            var otvet = JSON.parse(str1);

            if ("x1" in otvet) {
                var x1 = otvet["x1"];
            }
            var data = new Date();
            var sdata = data.getHours() + ":" + data.getMinutes();
            if ("x2" in otvet) {
                var x2 = otvet["x2"];
                add(sdata, str, "x1=" + x1 + ", x2= " + x2);
            }
            else {
                add(sdata, str, "x= " + x1);
            }
        }
    }
}