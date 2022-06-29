const x = '10';

//Checar se x é um número
if(!Number.isInteger(x)) {
    throw new Error('O valor de x não é um número inteiro');
}

console.log('Conitnuando código....')//Enquanto x for uma string, esse trecho não será executado.