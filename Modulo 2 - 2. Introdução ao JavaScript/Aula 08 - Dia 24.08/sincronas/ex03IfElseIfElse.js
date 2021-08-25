// Aula 08 - 24/08/2021
// Condicional If - Else If - Else If -Else If - Else
// Rotina - Calcular Média
// Média >= 7 - Aprovado | Média >= 4 e Média < 7 - Recuperação | Média <= 3.9 - Reprovado


var n1 = 7;
var n2 = 7;
var n3 = 6;
var n4 = 7;

var media = (n1+n2+n3+n4)/4
// console.log("A média é......: " + media);

if (media >= 7) {
    console.log("Sua média foi...: "+media +  " - Situação...: APROVADO")
} else if (media >= 4 && media <= 6.9) {       
    console.log("Sua média foi...: "+media +  " - Situação...: RECUPERAÇÃO")
} else {
    console.log("Sua média foi...: "+media +  " - Situação...: REPROVADO")
}
