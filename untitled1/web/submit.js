function summa(){
    var A = document.forms["form"].elements["A"].value;
    var B = document.forms["form"].elements["B"].value;

    A = parseFloat(A);
    B = parseFloat(B);

    var summaAB = A + B;
    alert("Результат: \n " + summaAB);
}