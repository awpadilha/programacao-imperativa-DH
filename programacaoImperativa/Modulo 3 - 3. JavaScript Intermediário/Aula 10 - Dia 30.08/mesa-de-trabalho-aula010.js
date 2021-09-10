// Mesa de trabalho - Aula 10
// Grupo: Agenor Junior, André Padilha, Gabriel Gomes, Ráfaga Alexandre, Vanessa Matos

//Array invertido - 1
let inverso = [123, 'olá tudo bem', 'computador']
console.log(inverso.reverse())

// Somar Array

let arraySoma = [10,30,40,50];
let soma = 0;

    for (let i = 0; i < arraySoma.length; i++){
        soma += arraySoma[i]
    }

console.log(soma)

// Método Join

let juntar = ['a','m','o','r']
console.log (juntar.join(''))

// Coleções de filmes - 1

let filmes = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela']

console.log(filmes[0])

// Coleções de filmes - 2

function transfMaius(filmes2){
    let  novo = []
    for (let i=0; i< filmes2.length; i++){
        novo.push(filmes2[i].toUpperCase())
    }
    return novo
}

console.log(transfMaius(filmes))

// Coleções de filmes - 3

