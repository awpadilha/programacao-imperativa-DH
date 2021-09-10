//1 - Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function conversaoPolegadasParaCentimetros(polegada) {
    centimetro = (polegada * 2.54)
    return centimetro;
}
console.log(conversaoPolegadasParaCentimetros(5)+"cm")

//2 - Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function converterStringEmUrl(string) {
    url = ("http://www." + string + ".com.br")
    return url;
}
console.log(converterStringEmUrl("funcaojs"))

//3 - Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function converterEmExclamação(frase) {
    return frase + "!"
}
console.log(converterEmExclamação("Olá"))

//4 - Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function converterIdadeDeCachorro(idade) {
    return idade * 7;
}
// console.log("Um cachorro com idade de " + idade + converterIdadeDeCachorro(10) + "anos de humanos")

// 5 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. PS: considere que você trabalhe 160 horas no mês.
function converterHoraDeTrabalho(salario) {
    return salario / 160
}
console.log("A quantidade da sua hora aula é: " + converterHoraDeTrabalho(1300))

// 6 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.
function calculaIMC(peso,alturaCm) {
    let altura = alturaCm/100;
    return peso/(altura*altura);
} 
console.log("Seu indice de massa corporal é: " + calculaIMC(90,180))


// 7 - Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. Investigue o que o método de .toUpperCase() faz.
function converteMinusculasEmMaiusculas(frase) {
    
}