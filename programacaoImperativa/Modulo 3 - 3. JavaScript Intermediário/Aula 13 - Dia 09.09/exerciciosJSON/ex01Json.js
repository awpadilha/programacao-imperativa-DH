/*Json: Para que serve?
TRoca de dados - formulário para o servidor
criação e consumo - utilizando API's
formatos de dados - padrão da web atualmente*/

let dadosJson = '{"nome": "William", "sobrenome":"Pantoja","idade":53}';
console.log(dadosJson);
//JSON é um objeto nativo
//Desserialização = parsing;
let dadosConvertidosJS = JSON.parse(dadosJson); // CONVERTENDO Json para JS (objeto literal)
console.log("Dado original em JS...: " +dadosConvertidosJS.sobrenome);

// Manipulando dados em JS
//
console.log("Manipulando JS (toUpperCase())...: " +dadosConvertidosJS.sobrenome.toUpperCase());

// Serialização cria um formato JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log("Objeto convertido para JSON...: " + objetoConvertidoJson)
