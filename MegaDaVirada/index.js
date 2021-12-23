
/*
    Função para gerar números randomicos entre 1 e 60
 */

const nMinimo = 1;
const nMaximo = 60;
let contador = 0;

function randomico(nMinimo, nMaximo) {
    const rdm = Math.random() * (nMaximo - nMinimo) + nMinimo;
    return Math.floor(rdm);
}


function tornemeRico() {
    let jogo = [];
    let limiteDeDezena = 6;
    let limiteDeJogo = 3;

    for(let n = 0; n < limiteDeDezena; n++) {
        jogo.push(randomico(nMinimo, nMaximo));
    }
    contador += 1;
    if(contador <= limiteDeJogo) {
        console.log(`Jogo ${contador} = ${jogo}`);
        tornemeRico();
    } else {
        console.log('Fim dos jogos!');
    }

}

tornemeRico();