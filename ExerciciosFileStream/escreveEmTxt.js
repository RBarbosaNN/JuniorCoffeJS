

const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'Teste.txt');

fs.writeFile(caminhoArquivo, 'Texto 1\n', {flag: 'a'});


