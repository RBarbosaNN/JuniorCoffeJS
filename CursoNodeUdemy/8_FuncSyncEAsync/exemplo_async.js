const fs = require('fs');


function escreveNoTxt() {
    fs.writeFile('exemplo_async.txt', 'Escrevendo atraves de uma função asyncrona', function(err){
        console.log('Criando arquivo .txt');
        setTimeout(function() {
            console.log('Arquivo .txt criado com sucesso!');
        }, 2000)
    })
}

console.log('Início');

escreveNoTxt();

console.log('Fim!');

