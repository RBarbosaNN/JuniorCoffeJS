/*
  Construção de uma calculadora
 */

const perguntaParaUsuario = require('prompt-sync')({ sigint: true });


function verificaOperacao(operacao, nn1, nn2) {
    switch(operacao) {
        case '/': divisao(operacao, nn1, nn2); break;
        case '*': multiplicacao(operacao, nn1, nn2); break;
        case '+': adicao(operacao, nn1, nn2); break;
        case '-': subtracao(operacao, nn1, nn2); break;
        default: console.log('Favor entrar apenas com um dos simbolos: /, *, + ou -');
    }
}


function divisao(operacao, num1, num2) {
    console.log(`${num1} ${operacao} ${num2} = ${num1 / num2}`);
}

function multiplicacao(operacao, num1, num2) {
    console.log(`${num1} ${operacao} ${num2} = ${num1 * num2}`);
}

function adicao(operacao, num1, num2) {
    console.log(`${num1} ${operacao} ${num2} = ${num1 + num2}`);
}

function subtracao(operacao, num1, num2) {
    console.log(`${num1} ${operacao} ${num2} = ${num1 - num2}`);
}

function calculadora() {
    const operacao = perguntaParaUsuario('Qual operação você quer fazer? Responda com (/,*,+,-) ');
    const n1 = perguntaParaUsuario('Entre com o primeiro número: ');
    const nn1 = parseInt(n1);
    const n2 = perguntaParaUsuario('Entre com o segundo número: ');
    const nn2 = parseInt(n2);
    if(isNaN(nn1) || isNaN(nn2)) {
        console.log(`Favor entrar com um número valido!`);
    } else {
        verificaOperacao(operacao, nn1, nn2);
    }
}


calculadora();