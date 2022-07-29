function soma(){
    num1 = document.getElementById("soma1").value;
    num2 = document.getElementById("soma2").value;
    somatoria = parseFloat(num1) + parseFloat(num2);
    document.getElementById('somatoria').innerHTML = somatoria;
}