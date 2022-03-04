/*
    Esse programa pega a entrada do usuario e trata a string da seguinte forma:
    1 - Verifica se a string é composta por letra e número
    2 - Verficia se a string é composta por letras maiusculas e minuscula.
    3 - Separa os números e adiciona esses números em uma variavel
    4 - Separa as letras e adiciona em outra variavel
    5 - Apresenta as duas variaveis sendo uma composta só por número e outra só por letras
 */

const entradaDoUsuario = require('prompt-sync')({sigint:true});

function trataEntradaDoUsuario() {
    console.log('Vamos solicitar que você digite uma frase com letras e números.');
    console.log('Vamos tentar separar  as letras dos números');
    let userString = entradaDoUsuario('Digite a string com letras e números: ');
    let nTemp = '';
    let sTemp = '';
    if (userString.search(/[0-9]/g) == -1) {
        console.log('Não foi encontrado números nessa string!');
    } else {
        nTemp = userString.match(/\d/g).join('');
        console.log(`Números encontrados na string do usuario: ${nTemp}`);
        sTemp = userString.match(/[a-zA-Z]/g).join('');
        console.log(`Extração apenas das letras: ${sTemp}`);
    }
}


trataEntradaDoUsuario();