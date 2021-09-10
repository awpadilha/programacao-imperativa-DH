// Aula 13 - Objetos Literais
/* Desestruturar --> extração de valores de um objeto ou array
a desestruturação  NÃO MODIFICA o objeto ou array original */

//Objeto carro
let carro =  {
    placa: 'DRU2258',
    cor: 'preta',
    ano: 2021,
    flex: true,
    mostrarCaracteristicas: function(){
        return 'Características do seu carro: \nPlaca = ' + carro.placa + '\nCor = '+ carro.cor + '\nAno =' + carro.ano + '\nFlex = ' + carro.flex;
    }
}

// No caso de objeto as variáevis são envolvidas por CHAVES
let {placa, cor, ano, flex} = carro;
console.log(placa);

// // Acessando o objeto literal
// console.log(carro.mostrarCaracteristicas());
