// length - para saber o comprimetro
let texto = "Oi eu sou o vinicius";
console.log(texto.length);

//indexOf - para saber se algo existe
console.log(texto.indexOf("joao"));

//slice - para pegar uma parte do texto
let palavra =  texto.slice(0,3);
console.log(palavra);
console.log(texto);

//trim -  para remover os espaços em branco
console.log(texto.trim());

//split - para gerar um array
console.log(texto.split("v"));

//replace - para alterar uma parte do texto
console.log(texto.replace("vinicius","João")); 