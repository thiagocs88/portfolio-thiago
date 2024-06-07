alert("Escrevendo num arquivo externo!");

function botao(){
    alert("Você apertou um botão!");
}

function funcao2(){
    document.getElementById("demo").innerHTML = "Escrevendo no Parágrafo com duplo clique."
}

function funcao3(){
    document.getElementById("demo2").innerHTML = "Eu não falei pra NÃO clicar aqui, Mané?."
}

function mousedown(){
    document.getElementById("cores").style.color = "red";
}

function mouseup(){
    document.getElementById("cores").style.color = "green";
}

function css(){
    document.getElementById("demo3").style.fontSize = "10px";
    document.getElementById("demo3").style.color = "brown";
    document.getElementById("demo3").style.backgroundColor = "yellow";
}