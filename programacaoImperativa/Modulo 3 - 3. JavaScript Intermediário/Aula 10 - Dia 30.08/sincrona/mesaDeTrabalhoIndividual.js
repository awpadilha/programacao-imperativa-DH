// Mesa de trabalho - Aula 10

// Arrays e Coleções
// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

let listaDeCompras = ["café", "arroz", "feijão", "açucar", "carne", "frutas", "legumes"]
console.log(listaDeCompras);

// A. Acessar elementos específicos de um array.
console.log(listaDeCompras[5])

//B. Modificar cada um dos elementos de um array e imprimi-los no console.
listaDeCompras[5] = "macarrão"
console.log(listaDeCompras)

//C. Adicionar elementos a um array.
listaDeCompras.push("presunto", "mussarela");
console.log(listaDeCompras);

//D. Extrair elementos de um array.
listaDeCompras.shift();
console.log(listaDeCompras); // extrai o primeiro elemento da matriz

//E. Comparar elementos de um array com os elementos de outro. 
console.log(listaDeCompras.indexOf("café"));

// O que esses códigos retornam?
// // 1 let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length]) // resultado -1

// // 2 - // let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0]) // resultado: Spiderman

// // 3 - let str = “una string qualquer”
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) // resultado: “una string qualquer”


// Array Invertido
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
let imprimirInverso = ["Andre", "Gabriel", "Vanessa", "Agenor", "Ráfaga"]
console.log(imprimirInverso.reverse());

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
function  inverter(direção) {
    return(direção.reverse());
}
console.log(inverter(["Frente", "Atrás"]));

// somarArray() // ainda persiste dúvida nesse código
let metros = [1, 2, 3, 4, 5];
let soma = 0;

    for (let i = 0; i < metros.length; i++){
        soma += metros[i]
    }
console.log(soma)

// Simulação Array.join()
let programacao = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
console.log(programacao);
let unir = programacao.join("");
console.log(unir); 

// Coleções de Filmes (e mais…)
// /Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
// "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
let filmesSeries = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
console.log(filmesSeries[3]);

// Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array 
// por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().
// let filmesSeries = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
// filmesSeries.toUpperCase()   

// Código apenas inserido a nova variável(filmesSeries) e alteração de nomes de funções (maiúsculas) e variável (novoArray) para melhor compreensão, pois é mesma solução 
// desenvolvida na mesa de trabalho. Estou com dúvidas na escrita e desenvolvimento da lógica desse código.
function maiusculas(filmesSeries2){
    let  novoArray = []
    for (let i=0; i< filmesSeries2.length; i++){
        novoArray.push(filmesSeries2[i].toUpperCase())
    }
    return novoArray
}
console.log(maiusculas(filmesSeries)) 

// >>>>>>>>> possivel solução usando .map mas ainda não visto em aula (realizado pesquisa de outros métodos) <<<<<<<<<<<
const uppercased = filmesSeries.map(function (name) {
    return name.toUpperCase();
});
console.log(uppercased); 

// Restante da atividade não finalizada