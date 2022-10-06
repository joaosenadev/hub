function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    var resultado = document.getElementById("resultado").innerHTML;

    document.getElementById("resultado").innerHTML = numero + num;

    if(resultado.length > 12){
        document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.tamanho -1);
        alert("Limite de 12 caracteres!!")
    }
}

function limpar(){
    document.getElementById("resultado").innerHTML = "";
}
function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    }
}