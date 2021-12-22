/*
    Mostrando a diferença de tempo de execução entre o For tradicional, For in e For of
    Esse programa precisa ser executado no terminal com o comando:
    node 1.for-forin-forof.js
 */


const service = require('./service');//pegando o modulo que nos exportamos e que esta dentro da mesma pasta

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const names = [];
        console.time('for');
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoaFor = result.results[i];
            names.push(pessoaFor.name);
        }
        console.timeEnd('for');
        names.push('######## For tradicional ########');

        console.time('for in');
        for (let i in result.results) { 
            const pessoaIn = result.results[i];
            names.push(pessoaIn.name);
        }
        names.push('######## For in ########');
        console.timeEnd('for in');

        console.time('for of');
        for (pessoaOf of result.results) {
            names.push(pessoaOf.name);
        }
        console.timeEnd('for of');
        names.push('######## For of ########');

        console.log('names', names);
    } catch (error) {
        console.log('error interno', error);
    }
}

main();