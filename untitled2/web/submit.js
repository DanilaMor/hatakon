
function submit() {
    var line = {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H"};
    var hight = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8"};

    var text = document.forms["form"].elements["A"].value;
    // text = text.toUpperCase();
    if (text.match(/[A-H][1-8]/) == null || text.length != 2) {
        alert("Результат: \n Не верные данные");
    } else {
        var charLine = text.charCodeAt(0) - "A".charCodeAt(0) + 1;
        var charHigh = parseInt(text.charAt(1));

        var number = 8;
        var index = 0;

        var result = new Array(number);

        var charA = charLine;
        var charB = charHigh;
        for (var i = 0; i < 4; i++) {
            var charAA;
            var charBB;
            switch (i) {
                case 0:
                    charAA = charA + 1;
                    charBB = charB + 2;
                    break;
                case 1:
                    charAA = charA - 1;
                    charBB = charB - 2;
                    break;
                case 2:
                    charAA = charA - 1;
                    charBB = charB + 2;
                    break;
                case 3:
                    charAA = charA + 1;
                    charBB = charB - 2;
                    break;
            }
            if (line[charAA] != null && hight[charBB] != null) {
                result[index] = "" + line[charAA] + hight[charBB];
                index = index + 1;
            }

            if (line[charBB] != null && hight[charAA] != null) {
                result[index] = "" + line[charBB] + hight[charAA];
                index = index + 1;
            }
        }

        alert("Результат: \n " + result.join(" "));
    }
}