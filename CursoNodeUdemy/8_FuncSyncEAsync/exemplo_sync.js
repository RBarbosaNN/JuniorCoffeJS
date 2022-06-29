const fs = require('fs');

function escreveNoTxt() {
    console.log('Escrevendo no txt')
    fs.writeFileSync('exemplo_sync.txt', 'Aqui foi executado uma função syncrona');
    console.log('Arquivo .txt criado com sucesso!');
}
console.log('Início');

escreveNoTxt();

console.log('Fim!');