
/*
    Função para gerar números randomicos entre 1 e 60
 */

const nMinimo = 1;
const nMaximo = 60;
let contador = 0;
let todosResultados = [];

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
        todosResultados.push(jogo.splice(0));
        tornemeRico();
    } else {
        console.log('Fim dos jogos!');
        classificaRepetido();
    }

}


function classificaRepetido() {
    let contaRepetido = 0;
    let nParaComparar = 0;
    console.log(`todosResultados = ${todosResultados}`);
    for (let i of todosResultados) {
        console.log(i);
        nParaComparar = todosResultados[i];

        for (let n = 0; n <= todosResultados.length - 1; n++) {

            if (nParaComparar == todosResultados[n]) {
                contaRepetido += 1;
                console.log(`${nParaComparar} apareceu ${contaRepetido} vezes!`);
            } else {
                console.log(`${nParaComparar} não repetiu nenhuma vez.`);
            }

        }

    }
}

tornemeRico();


/*
    o algoritmo já traz os resultados, mas estou trabalhanho para criar uma função que mostra os numeros que 
    mais se repetem. Ainda estou estudando isso!
 */