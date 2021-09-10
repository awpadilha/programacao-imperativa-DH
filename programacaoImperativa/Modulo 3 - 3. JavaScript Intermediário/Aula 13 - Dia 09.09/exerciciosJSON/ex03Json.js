// FS --> File System

const fs = require('fs');
let frutas = '{"Fruta":"Banana", "Preço":8.50, "Tipo":"Nanica", "Origem":"Brasil"}';

fs.writeFileSync('teste.txt', frutas);

// Ler arquivo
let lerJson = fs.readFileSync('teste.txt', 'utf-8'); //codificação de caracteres
console.log(lerJson);

// Converter JSON para JS
let converterJsonParaJS = JSON.parse(lerJson);
console.log(converterJsonParaJS);