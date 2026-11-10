let nota1tri;
let nota2tri;
let resultado;

nota1tri = Number(prompt("digite a nota do 1̣º trimestre"));
nota2tri = Number(prompt("digite a nota do 2º trimestre"));

resultado = 180-(nota1tri+nota2tri);

if(resultado <= 0){
    alert("Parabens! Voce ja foi aprovado por nota!!!");
} else {
    alert("Poxa, voce precisa de " + resultao + "para ser aprovao.");
}