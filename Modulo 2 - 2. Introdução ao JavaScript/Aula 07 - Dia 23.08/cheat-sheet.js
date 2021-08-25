/* ==================
Atribuição
===================*/

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ==================
Atribuição
===================*/

// Nos permitem fazer operações matemáticas

10 + 15 // ---> Soma
10 - 15 // ---> Subtração
10 * 15 // ---> Multiplicação
10 / 15 // ---> Divisão
15++    // ---> Incremeto de um em um: 15 + 1
15--    // ---> Decremento de um em um: 15 - 1
15 % 5  // ---> Módulo. O resto obtifo da divisão de 15 por 5: 0
15 % 2  // ---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==================
COMPARAÇÃO SIMPLES
===================*/

// Comparam dois valortes, devolvem verdadeiro ou falso

10 == 15  // ---> Igualdade --> false
10 !== 15 // ---> Desigualdade --> true

/* ==================
COMPARAÇÃO ESTRITA
===================*/

// Comparam o valor e o tipo de dado também

10 === "10" // ---> Igualdade estrita --> false
10 !== 15   // ---> Igualdade estrita --> true


/* ==================
OPERADORES RELACIONAIS
===================*/





/* ==================
LÓGICOS
===================*/

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano
// Existem três operadores e (and), ou (or), negação (not)


/* ==================T
Truthy e Falsy
===================*/

// Todos são verdadeiros

false == 0;
0 == '';
null == undefined;
[] =   false;
!![0] == true;

// Todos são falsos
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;
