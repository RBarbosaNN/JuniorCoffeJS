
const fs = require('fs');


function escreveNoTxt (dados) {
    
    fs.appendFile('arquivo.txt', dados + '\n', (err) => {
        if (err) throw err;
       console.log('O arquivo foi criado!');
    });

}

const dadosTwo = 'Teste número 2';
const dadosTree = 'Teste número 3';
const dadosFor = 'Teste número 4';

escreveNoTxt(dadosTwo);
escreveNoTxt(dadosTree);
escreveNoTxt(dadosFor);
