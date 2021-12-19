/*
    Verifica CPF
*/


const cpfUser = '123456789';


function verificaCPF(cpf) {
    
    const recebCPF = cpf;

    if (typeof recebCPF === 'string') {
        if((recebCPF.search(/[A-Z]/g) ==- 1) && (recebCPF.search(/[a-z]/g) ==- 1)){
            verificaNumeroDoCPF(recebCPF);
        } else {
            console.log('CPF Inválido!');
        }
    } else {
        console.log(`${recebCPF} não é do String!`);
    }
}





verificaCPF(cpfUser);

function verificaNumeroDoCPF(CPF) {
    const pegaCPF = CPF;
    let multiplicador = 10;
    let soma = 0;
    let resultadoDoMultiplicador = 0;

    for(let numero of pegaCPF) {
        parseInt(numero);
        resultadoDoMultiplicador = numero * multiplicador;
        soma += resultadoDoMultiplicador;
        multiplicador--;
    }

    verificaResto(soma);
    
}

function verificaResto(soma) {
    let pegaParaVerificarResto = soma;
    let resto = 0;

    resto = (pegaParaVerificarResto * 10) % 11;
    console.log(`resto antes do if vale ${resto}`);

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    console.log(`resto depois do if vale ${resto}`);

}

//Algoritmo iniciado em 19/12/2021, falta entender melhor sobre o digito verificador. Continuaremos em breve