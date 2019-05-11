function submit() {

    //map for position conversion
    var line = {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H"};
    var hight = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8"};

    // get position
    var text = document.forms["form"].elements["A"].value;


    if (text.match(/[A-H][1-8]/) == null || text.length != 2) {
        alert("Результат: \n Не верные данные");
    } else {
        // get the numeric coordinates
        var charLine = text.charCodeAt(0) - "A".charCodeAt(0) + 1;
        var charHigh = parseInt(text.charAt(1));

        //maximum number of results
        var number = 8;
        var index = 0;

        // array for results
        var result = new Array(number);

        var charA = charLine;
        var charB = charHigh;

        //enumeration of all possible cases
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
            if (line[charA + delta1] != null && hight[charB + delta2] != null) {
                result[index] = "" + line[charA + delta1] + hight[charB + delta2];
                index = index + 1;
            }

            if (line[charA + delta2] != null && hight[charB + delta1] != null) {
                result[index] = "" + line[charA + delta2] + hight[charB + delta1];
                index = index + 1;
            }
        }

        alert("Результат: \n " + result.join(" "));
    }
}