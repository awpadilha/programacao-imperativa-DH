// Aula 11 - 31.08.2021
// Repetições - FOR
// Início do contador | Limite de repetições | Modificador do contador

exibirTipo(10);

function exibirTipo(limite){
    for(let i = 0; i <= limite; i++) {
        if(i % 2 != 0){
        console.log("ÍMPAR = "+i);
    } else {
        console.log("PAR = " +i);
    }

    }
}