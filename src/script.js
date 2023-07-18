function calculate() {
    var height = document.getElementById("altura").value /100;
    var weight = document.getElementById("peso").value;

    var imc=weight/ height ** 2;
    var text=""
    if(imc < 18.5){
        text="Você está abaixo do ideal"
    }
    else if(imc < 24.9){
        text="Você está no ideal"
    }
    else if(imc < 29.8){
        text="Você está acima do ideal"
    }
    else if(imc > 29.9){
        text="Você está acima do ideal"
    }
    document.getElementById("textarea").innerText=text
}