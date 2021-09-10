// Aula 13 - Objetos Literais

let carro =  {
    placa: 'DRU2258',
    cor: 'preta',
    ano: 2021,
    flex: true,
    mostrarCaracteristicas: function(){
        return 'Características do seu carro: \nPlaca = ' + carro.placa + '\nCor = '+ carro.cor + '\nAno =' + carro.ano + '\nFlex = ' + carro.flex;
    }
}

// Acessando o objeto literal
console.log(carro.mostrarCaracteristicas());
