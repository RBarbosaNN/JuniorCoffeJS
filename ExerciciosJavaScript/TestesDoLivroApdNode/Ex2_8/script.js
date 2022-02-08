
/*
    Exemplo 2.8 - Uma aplicação sequencial síncrona. Esse código pega o arquivo apples.txt que esta dentro da mesma pasta e procura
    pela palavra Apple ou apple. Depois ele cria um novo arquivo arquivo com o nome: orange.txt e substitui todos as palavras que
    ele encontrou por orange.
*/


let fs = require('fs');

try {
    let data = fs.readFileSync('./apples.txt', 'utf-8');
    console.log(data);
    let adjData = data.replace(/[A|a]pple/g, 'orange');
    fs.writeFileSync('./oranges.txt', adjData);
} catch(err) {
    console.error(err);
}

