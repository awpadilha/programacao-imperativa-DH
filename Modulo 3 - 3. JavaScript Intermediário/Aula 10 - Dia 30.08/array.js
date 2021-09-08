// Arrays e Coleções

// Mesa 02 - Arnaldo Ramos, Juíle Hanada, Matheus Braga Dias, Rosana Sebould, Pedro Menezes

// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações neles. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

let vetor = [4, 5, 7, 2, 3]
console.log('Nosso vetor: '+ vetor)

// A.	Acessar elementos específicos de um array.
console.log('Acessando o elemento da posição 2:')
console.log(vetor[2]);

// B.	Modificar cada um dos elementos de um array e imprima-os.
console.log('Alterando o valor dos elementos para ser igual ao índice')
vetor[0] = 0;
vetor[1] = 1;
vetor[2] = 2;
vetor[3] = 3;
vetor[4] = 4;
console.log(vetor);

// C.	Adicionar elementos a um array.
console.log('Adicionando no final do array')
vetor.push(1);
console.log(vetor);
console.log('Adicionar no inicio do array')
vetor.unshift(6);
console.log(vetor);

// D.	Extrair elementos de um array.
console.log('Extraindo do final do array o elemento '+ vetor.pop());
console.log(vetor);
console.log('Extraindo do inicio do array o elemento '+ vetor.shift());
console.log(vetor);

// E.	Comparar elementos de um array com os elementos de outro. 
let outroVetor = [3, 1, 7, 2, 3];
console.log(outroVetor);

console.log('Na posição 0, o ' + (vetor[0] > outroVetor[0] ? 'primeiro' : 'segundo') + ' vetor é maior');
console.log('Na posição 1, o ' + (vetor[1] > outroVetor[1] ? 'primeiro' : 'segundo') + ' vetor é maior');
console.log('Na posição 2, o ' + (vetor[2] > outroVetor[2] ? 'primeiro' : 'segundo') + ' vetor é maior');
console.log('Na posição 3, o ' + (vetor[3] > outroVetor[3] ? 'primeiro' : 'segundo') + ' vetor é maior');
console.log('Na posição 4, o ' + (vetor[4] > outroVetor[4] ? 'primeiro' : 'segundo') + ' vetor é maior');


/* Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.
1.	let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
RESPOSTA = undefined

2.	let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
RESPOSTA = Spiderman

3.	let str = “una string qualquer”
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
RESPOSTA = str ("uma string qualquer")
 */

/* Array Invertido
Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
1.	Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
2.	Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
 */

function imprimirInverso(vetor) {
    console.log(vetor.reverse());
}

function imprimirInversoRecursivo(vetor) {
    console.log(vetor[vetor.length -1]);
    if (vetor.length-1 != 0)
        imprimirInversoRecursivo(vetor.slice(0,vetor.length-1));
}

function inverter(vetor) {
    return vetor.reverse();
}

vetor = [0,1,2,3,4];
console.log('Vetor invertido: '+inverter(vetor))
console.log('Função imprimir inverso: ')
imprimirInverso(vetor);

console.log('Nova função de imprimir inverso:')
imprimirInversoRecursivo(vetor);

/* somarArray()
Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
Exemplo:
●	somarArray([1,2,3])            // 6
●	somarArray([10, 3, 10, 4])     // 27
●	somarArray([-5,100])           // 95 */

const soma = (valor1, valor2) => valor1+ valor2;

function somarArray(vetor = []) {
    return vetor.reduce(soma);
}

function somarArrayRecursivo(vetor = []) {
    if (vetor.length == 1)
        return vetor[0]
    else
        return vetor[0] + somarArrayRecursivo(vetor.slice(1, vetor.length -1));
}

console.log('O vetor somado é: '+ somarArray(vetor));
console.log('O vetor somado recursivamente é: '+ somarArrayRecursivo(vetor));

/* Simulação Array.join()
Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.
Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau". */

function join(vetor = []) {
    if (vetor.length == 1)
        return Number(vetor[0]).toString()
    else
        return Number(vetor[0]).toString() + join(vetor.slice(1, vetor.length -1));
}

console.log('Unindo elementos: '+ join(vetor));

/* Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
1.	Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada. */

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
console.log('Nosso vetor de filmes:')
console.log(filmes[0]);
console.log(filmes[1]);
console.log(filmes[2]);
console.log(filmes[3]);
console.log(filmes[4]);

/* 2.	Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase(). */

function vetorMaiusculo(vetor = []) {
    for (let i = 0; i < vetor.length; i++)
        vetor[i] = vetor[i].toUpperCase(); 
}
console.log('Vetor Maiusculo:');
vetorMaiusculo(filmes);
console.log(filmes);

/* 3.	Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos. */

let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function unirArrays(vetor1, vetor2) {
    return vetor1.concat(vetor2);
}
let filmesUnidos = unirArrays(filmes, animacoes)
console.log(filmesUnidos);

/* 4.	Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável. */

let elementoDeletado = filmes.pop();
console.log('Agora só filmes: ' + filmesUnidos)
console.log('O elemento deletado foi: '+ elementoDeletado)

/* 5.	Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
*/
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaNotas(notas1 = [], notas2 = []){
    if (notas1.length != notas2.length){
        console.log('Erro: Vetores de tamanhos diferentes');
    }
    else {
        console.log((notas1[0] == notas2[0] ? 'iguais' : 'diferentes'))
        if (notas1.length > 1)
            comparaNotas(notas1.slice(1,notas1.length), notas2.slice(1, notas2.length))
    }
}

comparaNotas(asiaScores, euroScores);