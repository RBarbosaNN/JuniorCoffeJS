//Rode esse programa via terminal com o seguinte comando: node index.js --nome=Rodrigo --profissao=Programador

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

console.log(`Olá ${nome}! Estou vendo que você é o novo ${profissao}. Sejá bem vindo.`);

