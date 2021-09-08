// Crie um array que contenha nomes de produtos para compra. 

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)


let listaDeCompras = ["café", "arroz", "feijão", "açucar", "carne", "frutas", "legumes"]
console.log(listaDeCompras);

let separadosPorVirgula = listaDeCompras.join(", ");
console.log(separadosPorVirgula); // separa os itens de acordo com a forma que eu queira separá-los

let ultimoItem = listaDeCompras.pop();
console.log(ultimoItem); // mostra sempre o ultimo item

listaDeCompras.push("macarrão");
console.log(listaDeCompras); // acrescenta ultimo item no array

let primeiroItem = listaDeCompras.shift()
console.log(listaDeCompras); // restira o primeiro item do array

listaDeCompras.unshift("azeitona", "molho de pimenta");
console.log(listaDeCompras);// adiciona os novos items no inicio do array

listaDeCompras.includes("café");
console.log(listaDeCompras); //???????????