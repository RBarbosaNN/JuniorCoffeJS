/*
    Função que constrói uma tabuada interagindo com o usario via prompt
*/


const inputUserData = require('prompt-sync')({sigint:true});

function tabuadaComNodeJs() {
    pulaLinha();
    console.log('Bem vindo a construção da tabuada com Node.js!');
    console.log();
    let tabuadaDoNumero = inputUserData('Você gostaria de saber a tabuada de qual número? Digite o número aqui: ');
    let entradaConvertidaParaNumero = parseInt(tabuadaDoNumero);
    if(isNaN(entradaConvertidaParaNumero)) {
        console.log();
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log(`Você só pode inserir valores númericos e ${tabuadaDoNumero} não é um número!`);
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log();
    } else {
        pulaLinha();
        console.log(`Ok, a tabuada do ${entradaConvertidaParaNumero} é:`);
        console.log();
        for(let i = 0; i <= 10; i++) {
            console.log(`${entradaConvertidaParaNumero} x ${i} = ${entradaConvertidaParaNumero * i}`);
        }
        console.log();
        console.log('Fim da apresentação da tabuada. Até a proxima!');
        console.log();
    }
}

function pulaLinha(){
    let linha = 3;
    let contador = 0;
    while(contador <= linha) {
        console.log();
        contador++;
    }
}

tabuadaComNodeJs();
