// Aula 10 - 30/08/2021
// Array - ex02.js
// Shift() método que adiciona um ou mais elementos de uma matriz.

let cores = ["Azul", "Branco", "Vermelho", "Verde"];
console.log(cores);
console.log("Array antes do Unshift....: "+cores.length);

cores.unshift("Violeta", "Amarelo");

console.log("=======================")
console.log(cores);
console.log("Array depois do Unshift....: "+cores.length);