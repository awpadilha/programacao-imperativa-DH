// Aula 12 -  Aual convergente
// Slice -> é um metodo que retona os elementos

let frase = "Breaking Bad Rules!";
let a = frase.slice(0); //retorna "Breaking Bad Rules!"
let b = frase.slice(0, 8); // retorna "Breaking" / start, end /
let c = frase.slice(9, 12); // retorna "Bad"
let d = frase.slice(13); // retona Rules
let e = frase.slice(-10); // Lê da esquerda para direita

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);