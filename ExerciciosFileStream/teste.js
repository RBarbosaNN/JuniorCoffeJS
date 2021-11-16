const entrada = require('prompt-sync')({sigint: true});

let x;

x = entrada('Qual é o seu nome? ');
console.log(`Olá ${x}, seja muito bem vindo!`);



