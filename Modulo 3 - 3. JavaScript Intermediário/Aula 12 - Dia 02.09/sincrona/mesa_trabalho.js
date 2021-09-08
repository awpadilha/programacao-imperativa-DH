// Mesa de Trabalho
// Integrantes: Alexandre Pedro, Pedro Menezes, Juliana Rosa, André Padilha, Leonardo Fernandes, Felipe Arruda

// PARTE 1

/* Exercício 1 - Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), 
dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la 
(medido em litros). */
let distancia = 100; //em km
let combustivel = 5; //em litros
let consumoMedio = distancia/combustivel;
console.log(consumoMedio);

/* Exercício 2 - Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. 
Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e 
calcula o valor total arrecadado com as entradas. */
function valorArrecadado(festa) {
    let qtdHomem = 0;
    let qtdMulher = 0;
    for (let i = 0; i < festa.length; i++) {
        if (festa[i] == 'H') {
            qtdHomem = qtdHomem + 1;
        } else if (festa[i] == 'M') {
            qtdMulher = qtdMulher + 1;
        }
    }
    let valor = qtdHomem * 20 + qtdMulher * 17;
    console.log(valor);
}
valorArrecadado(['M', 'H', 'M', 'M', null, 'H', 'M', 'H', '']);

/* Exercício 3 - Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. 
O programa deve perguntar as notas da primeira e da segunda prova, calcular a média aritmética entre elas, 
e exibir na tela. */
function media(nota1, nota2) {
    let soma = nota1 + nota2;
    let mediaDisciplina = soma/2;
    console.log(mediaDisciplina);
}
media(4, 6);

/* Exercício 4 - Escreva um programa que solicita o nome de 3 alimentos e então exibe o nome dos 
3 separados por virgulas. Ex: maçã, pera, banana. */
function alimentos(array) {
    let alimentos = array.join(', ');
    console.log(alimentos);
}
alimentos(['maçã', 'pera', 'banana']);

// PARTE 2

/* Exercício 1 - Faça um algoritmo que receba um número e mostre uma mensagem caso este
número seja maior que 10. */
function maior10(numero) {
    if (numero > 10) {
        console.log(`O número ${numero} é maior que 10`);
    } else {
        console.log(`O número ${numero} é menor que 10`);
    }
}
maior10(5);

/* Exercício 2 - Escrever um algoritmo que leia dois valores inteiros e informe qual deles é o maior. */
function maiorNumero(number1, number2) {
    if (number1 > number2) {
        console.log(`O maior número é: ${number1}`);
    } else if (number1 < number2) {
        console.log(`O maior número é: ${number2}`);
    } else {
        console.log(`Os números são iguais a: ${number1}`);
    }
}
maiorNumero(2,5);

/* Exercício 3 - Escrever um algoritmo que leia dois valores inteiros e informe se os números são
iguais. */
function numerosIguais(number1, number2) {
    if (number1 == number2) {
        console.log(`Os números são iguais a ${number1}`);
    }
}
numerosIguais(6,6);
numerosIguais(7,9);

/* Exercício 4 - Solicite que o usuário digite um número. Informe então se este número é par ou
ímpar. */
function parImpar(number) {
    if (number % 2 == 0) {
        console.log(`O número ${number} é PAR`);
    } else {
        console.log(`O número ${number} é ÍMPAR`);
    }
}
parImpar(20);
parImpar(13);

/* Exercício 5 - Crie um programa que receba um número inteiro e informa se este número é
múltiplo de 10. */
function multiplo10(number) {
    if (number % 10 == 0) {
        console.log(`O número ${number} é múltiplo de 10`);
    } else {
        console.log(`O número ${number} não é múltiplo de 10`);
    }
}

// PARTE 3

/* Exercício 1 - Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro
se o número informado estiver entre 15 e 25 ou entre 45 e 50. */
function numProibido(number) {
    if ((number >= 15 && number <=25) || (number >= 45 && number <=50)) {
        console.log(`Erro!`);
    }
}
numProibido(23);
numProibido(49);
numProibido(13);

/* Exercício 2 - Faça um algoritmo que receba um número e mostre uma mensagem caso este
número seja maior que 80, menor que 25 ou igual a 40. */
function mostraNum(number) {
    if (number > 80 || number < 25 || number == 40) {
        console.log(number);
    }
}
mostraNum(100);
mostraNum(16);
mostraNum(40);
mostraNum(50);

/* Exercício 3 - Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as
medidas dos lados de um triângulo.
Exemplo:
let ladoA = 10
let ladoB = 10
let ladoC = 10
MENSAGEM:
"Os números digitados formam um TRIÂNGULO! (TRUE)"
"Os números digitados NÃO FORMAM um triângulo! (FALSE)" */
function triangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        console.log(`Os números digitados (${ladoA}, ${ladoB}, ${ladoC}) formam um TRIÂNGULO! (TRUE)`);
    } else {
        console.log(`Os números digitados (${ladoA}, ${ladoB}, ${ladoC}) não formam um TRIÂNGULO! (FALSE)`);
    }
}
triangulo(10,10,10);

/* Exercício 4 - Crie um programa que pergunte o nome do usuário.
Exiba uma mensagem diferenciada caso o nome digitado seja "William", "Roberta" ou "JavaScript". */
function nomeUsuario(nome) {
    if (nome == 'William' || nome == 'Roberta' || nome == 'JavaScript') {
        console.log(`Ola ${nome}!!!`);
    }
}
nomeUsuario('JavaScript');