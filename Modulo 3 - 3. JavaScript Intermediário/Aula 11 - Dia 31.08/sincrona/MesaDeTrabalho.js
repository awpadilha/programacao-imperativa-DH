
// WHILE DO WHILE
// // 1. Programa em Javascript que mostra os números ímpares
// // Escreva um aplicativo em Javascript que mostre todos os números
// // ímpares de 1 até 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i + " é impar");
//     }
// }


// // 2. Programa em Javascript que mostra os números pares
// // Escreva um aplicativo em Javascript que mostre todos os números pares
// // de 1 até 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i + " é par ");
//     }
// }

// // 3. Programa em Javascript que mostra os números pares e ímpares
// // Escreva um aplicativo em Javascript que recebe um número inteiro e
// // mostra os números pares e ímpares (separados), de 1 até esse inteiro.

// let x = 50

// const pares = [];
// const impares = [];

// for (let i = 1; i <= x; i++) {
//     if (i % 2 == 0) {
//         pares.push(i);
//     }
//     else {
//         impares.push(i);
//     }
// }

// console.log("pares: " + pares);
// console.log("impares: " + impares);

// // 4. Programa em Javascript que calcula a média das notas de uma
// // turma
// // Escreva um programa que pergunte ao usuário quantos alunos tem na
// // sala dele.
// // Em seguida, através de um laço while, pede ao usuário para que entre
// // com as notas de todos os alunos da sala, um por vez.
// // Por fim, o programa mostra a média aritmética da turma.

// let quantidadeAluno = 5;
// let notas = [1, 7, 5, 4, 3];
// let i = 0;
// let soma = 0;

// while (i < notas.length) {
//     soma += notas[i];
//     i++
// } 
// let media = (soma / quantidadeAluno);

// console.log(media) 



// // FOR
// // 1. Repetir como um papagaio
// // Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição
// // se deve mostrar no console a mensagem “Olá mundo”.

// for (let i = 0; i <5; i++) {
//     console.log("Olá Mundo")
// }


// // 2. Contando números ímpares
// // Crie um loop for de 1 a 10, em que exiba no console apenas o valor das
// // repetições de números ímpares. Dica: A ideia é que nas repetições ímpares
// // de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no
// // console.

// for (let i = 1; i  <=10; i++) {
//         if (i % 2 !== 0){
//         console.log(i);

//         }
// }

// // 
// 3. Criando a tabuada
// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar
// utilizar dois loops (for).


for (let i = 1; i <= 9; i++) {
    console.log("---------- tabuada do " + i + ' ----------')
    for (let j = 1; j <= 9; j++) {
        console.log(i + ' x ' + j + ' = ' + (i*j));
    }
}