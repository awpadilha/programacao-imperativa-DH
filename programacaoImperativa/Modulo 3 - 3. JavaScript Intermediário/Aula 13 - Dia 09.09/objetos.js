// let carro = {
//     nome: "Fox",
//     ano: 2012,
// }

// console.log(carro.nome + " e seu ano é: " + carro.ano)


// let carro = {
//     nome: "Fox",
//     ano: 2012,
//     ligar: function(){
//         console.log("O carro " + this.nome + " está ligado")
//     }
// }

// carro.ligar()

function Carro(nomeCarro, anoCarro) {
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro("Civic", "2019");
let Gol = new Carro("Gol", "2017");

console.log(Gol);