/**
 * Created by user on 27.11.2017.
 */
var  str ;

function summa(){
    var A = document.forms["form"].elements["A"].value;
    var B = document.forms["form"].elements["B"].value;

    A = parseFloat(A);
    B = parseFloat(B);

    var summaAB = A + B;
    alert("Результат: \n " + summaAB);
}
function submit1() {
    var A = document.forms["form"].elements["A"].value;
    var B = document.forms["form"].elements["B"].value;
    var C = document.forms["form"].elements["C"].value;
    var bool = true;

    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);

    if ((isNaN(A)) | (isNaN(B)) | (isNaN(C))){
        bool = false;
        alert("Ошибка ввода");
    }

    if(bool){
        var req1 = { "A" : A, "B" : B, "C" : C};

        str = "A="+A+"&"+"B="+B+"&"+"C="+C;

        ajaxReq = new XMLHttpRequest();
        ajaxReq.onreadystatechange =  processReq;

        var url = "/submit";

        ajaxReq.open("POST",url);
        ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajaxReq.send(str);
    }
}

function processReq() {
    if(ajaxReq.readyState == 4){
        if (ajaxReq.status == 200){
            var  str1 = ajaxReq.responseText;
            var otvet = JSON.parse(str1);

            if("x1" in otvet) {
                var x1 = otvet["x1"];
            }
            var data = new  Date();
            var sdata = data.getHours()+":"+data.getMinutes();
            if("x2" in otvet){
                var x2 = otvet["x2"];
                add(sdata,str,"x1="+x1+", x2= "+x2);
            }
            else {
            add(sdata,str,"x= "+x1);}
        }
    }
}