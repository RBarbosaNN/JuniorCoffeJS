/*
 * A ideia do exercidio é determinar quantos passos foram necessários para atravessar a rua 
 */

const distanciaTotal = 40;
const pontoDePartida = 5;
const tamanhoDoPasso = 1;

let qtdPassosDado = 0;

function atravessarRua(distanciaTotal, pontoDePartida, tamanhoDoPasso) {
    let passosRestantes = distanciaTotal - pontoDePartida;

    while (qtdPassosDado <= passosRestantes) {
        qtdPassosDado += tamanhoDoPasso;
    }

    console.log(`Para atravessar a rua foram necessários ${qtdPassosDado} passos!`);

}

atravessarRua(distanciaTotal, pontoDePartida, tamanhoDoPasso);