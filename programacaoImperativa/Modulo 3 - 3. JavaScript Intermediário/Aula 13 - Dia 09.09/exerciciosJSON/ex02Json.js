// Convertendo objeto JSON em JS (PARSE)
// Convertendo objeto JS em JSON (STRINGFY)

let frutas = '{"Fruta":"Banana", "Preço":8.50, "Tipo":"Nanica", "Origem":"Brasil"}';
console.log(frutas);

// Convertendo para JS
let frutasConvertidasJS = JSON.parse(frutas);
console.log(frutasConvertidasJS);

//Convertendo para JSON
let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJS);
console.log(frutasConvertidasJSON);