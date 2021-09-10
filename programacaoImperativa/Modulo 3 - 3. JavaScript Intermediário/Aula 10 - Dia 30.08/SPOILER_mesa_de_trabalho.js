

// A. Acessar elementos específicos de um array.

let Acessando = ['lucas', 'robert', 'jessica', 'cleyton'];

console.log('================ Acessando item =============');
 console.log(Acessando.indexOf('robert'))

// B. Modificar cada um dos elementos de um array e imprima-os.

Acessando = Acessando.map(mudando => {
    return 'Olá ' + mudando 
});
console.log('================ modificando itens =============');

console.log(Acessando)

// C. Adicionar elementos a um array.
console.log('================ colocando itens =============');
Acessando.push("Carla");
Acessando.unshift('Barbara');
console.log(Acessando);

// D. Extrair elementos de um array.

Acessando.pop();
Acessando.shift();
console.log('================ tirando itens =============');
console.log(Acessando);

// E. Comparar elementos de um array com os elementos de outro.



function comprandoArrays(){
    let novoArray = [1, 2, 3, 4, 5, 6];
    let outroArray = [2, 1, 3, 4, 5, 6];
    let res = []
    for(inicio = 0; inicio < novoArray.length; inicio++){
        compracao = novoArray[inicio] == outroArray[inicio]
        res.push(compracao)

    }
    return res;
}
console.log('================ comparando arrays =============');
console.log(comprandoArrays());



/*
Array Invertido
Neste exercício, você terá que criar uma função que retorne um array com seus
elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o
modifique e inverta a ordem de seus elementos.
1. Crie a função imprimirInverso que pega um Array como um argumento e imprime
cada elemento em ordem reversa no console (você não precisa inverter o Array).
2. Crie a função inverter que recebe um Array como argumento e retorna um novo
invertid
*/

let array = ['olá', 'tudo bem', 55, 11]


function imprimirInverso(array){
   return array.reverse();
};
console.log('================ arrays invertidos =============');
console.log(imprimirInverso(array));

/* Neste exercício, você criará uma função somarArray() que aceita um array de números
e retorna a soma de todos eles.8 */


let  numeros = [2, 5, 3, 4, 6];

function somarArray(numeros) {

    let suma = 0;
    for(inicio = 0; inicio < numeros.length; inicio++){
    suma += numeros[inicio];
    }
    return suma;

}
console.log('================ somando arrays =============');
console.log(somarArray(numeros));


/* Simulação Array.join()
Neste exercício, você criará uma função chamada join que recebe um array e simula o
comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original. */


let coisas = ['lapis', 'papel', 'caneta', 'borracha']

function join(recebendo){
    let armazendando = '';
    for(let inicio = 0; inicio < recebendo.length; inicio++){
       armazendando += recebendo[inicio] + ' ';
     }
    return armazendando;
};

console.log('================ simulando join =============');
console.log(join(coisas))

/* Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para
isso, devemos:
1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
"star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela".
Importante: verifique se tudo funciona corretamente acessando qualquer um
dos filmes uma vez que a estrutura correspondente tenha sido criada.*/

let filmesSeries = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

console.log('================ acessando array =============');
console.log(filmesSeries[0])

/*2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função
que recebe um array por parâmetro e converta o conteúdo de cada elemento
em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().*/

function maiusculas(filmesSeries){
    let armazendando = ''
    for( let inicio = 0; inicio < filmesSeries.length; inicio++){
        armazendando += filmesSeries[inicio] + ' ';
    }
    return armazendando.toUpperCase();
}
console.log('================ Convertendo em maiúsculas =============');
console.log(maiusculas(filmesSeries));


/*
3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de
animação: "toystory","finding Nemo","kung-fu panda", "wally","fortnite" 
Em seguida, crie uma função que receba dois arrays como parâmetros, para
poder adicionar os elementos contidos no segundo array, dentro do primeiro, a
fim de retornar um único array com todos os filmes como seus elementos.
*/
let filmesDeAnimacao = ["toystory","finding Nemo","kung-fu panda", "wally","fortnite" ]

function adiciandoFilmesSeries(recebendo, passando){
    for( let inicio = 0; inicio < passando.length; inicio++ ){
        recebendo.push(passando[inicio]);
    }
    return recebendo
};

console.log('================ Adicionando em outro array =============');
console.log(adiciandoFilmesSeries(filmesSeries, filmesDeAnimacao));


/* 4. Durante o processo, percebemos que o último elemento na série de filmes
animados é, na verdade, um game. Agora devemos editar nosso código e
modificá-lo para que possamos remover o último elemento antes de migrar o
conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável. */

let jogo = filmesDeAnimacao.pop();
console.log('================ armazendando elemento excluido =============');
console.log(jogo);


/*5. Finalmente, recebemos dois arrays com classificações feitas por diferentes
usuários do mundo nos filmes com o seguinte formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou
diferentes.*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparandoNotas(primeiro, segundo){
    for(let inicio = 0; inicio < primeiro.length; inicio++){
        if(primeiro[inicio] == segundo[inicio]){
            console.log('são iguais')
        }else {
           console.log('são diferentes')
        };
    }
}

comparandoNotas(asiaScores,euroScores);