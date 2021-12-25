
/*
    Função para gerar números randomicos entre 1 e 60
 */

const nMinimo = 1;
const nMaximo = 60;
let contador = 0;
let todosResultados = [];
let listaDeRepetidos = [];

function randomico(nMinimo, nMaximo) {
    const rdm = Math.random() * (nMaximo - nMinimo) + nMinimo;
    return Math.floor(rdm);
}


function tornemeRico() {
    let jogo = [];
    let limiteDeDezena = 6;
    let limiteDeJogo = 3;

    for (let n = 0; n < limiteDeDezena; n++) {
        jogo.push(randomico(nMinimo, nMaximo));
    }
    contador += 1;
    if (contador <= limiteDeJogo) {
        console.log(`Jogo ${contador} = ${jogo}`);
        for (n of jogo) {
            todosResultados.push(n);
        }
        tornemeRico();
    } else {
        console.log('Fim dos jogos!');
        contador = 0;
        classificaRepetido();
    }
}


function classificaRepetido() {
    let contaRepetido = 0;
    let nParaComparar = 0;
    // console.log(`todosResultados = ${todosResultados}`);
    for (i of todosResultados) {
        nParaComparar = i;
        for (c of todosResultados) {
            if (nParaComparar == c) {
                contaRepetido += 1;
                registraListaDeRepetidos(nParaComparar, contaRepetido);
            }
        }
        contaRepetido = 0;
    }
}


function registraListaDeRepetidos(nPc, cont) {
    let recebeNpC = nPc;
    let recebeCont = cont; 
    if (recebeCont > 1) {
        console.log(`${recebeNpC} repetiu ${recebeCont} vezes`);
        recebeNpC = 0;
        recebeCont = 0;
    } else {
        recebeNpC = 0;
        recebeCont = 0;
    }
}


tornemeRico();


/*
    o algoritmo já traz os resultados, mas estou trabalhanho para criar uma função que mostra os numeros que 
    mais se repetem. Ainda estou estudando isso! 23/12/2021
    Hoje 25/12/2021, o algoritmo evoluiu mais um pouco. Já esta fazendo a contagem de números repetidos, mas ainda precisa
    refinar mais. Esta apresentando as informações duplicadas no console.log()
 */