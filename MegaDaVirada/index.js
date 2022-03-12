
/*
    Função para gerar números randomicos entre 1 e 60
 */

const nMinimo = 1;
const nMaximo = 60;
let contador = 0;
let todosResultados = [];
let listaDeRepetidos = [];
let nRepetido = 0;


function randomico(nMinimo, nMaximo) {
    // Garantir que a função random esteja funcionando corretamente
    /*
        Garantido! 01/01/2021
     */
    return Math.floor(Math.random() * (nMaximo - nMinimo + 1) + nMinimo);
}


function tornemeRico() {
    let jogo = [];
    let limiteDeDezena = 6;
    let limiteDeJogo = 2;

    for (let n = 0; n < limiteDeDezena; n++) {
        if (jogo.indexOf(n) == -1) {
            jogo.push(randomico(nMinimo, nMaximo)); //Só adiciona o número no jogo se ele não existir dentro do mesmo jogo
        } else {
            jogo.push(randomico(nMinimo, nMaximo)); //Se por acaso o número já existir dentro do jogo, chama a função randomico de novo.
        }
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
        console.log(`Todos resultados = ${todosResultados}`);
        contador = 0;
        classificaRepetido();
    }
}



function classificaRepetido() {
    let listaEmOrdemCrescente = [];
    let contaRepetido = 0;
    let nAtual = null;
    listaEmOrdemCrescente = todosResultados.sort(function(primeiro, segundo) {
        return primeiro - segundo;
    });
    console.log(`Os números sorteados em ordem crescente fica assim: ${listaEmOrdemCrescente}`);
    for (let nR = 0; nR < listaEmOrdemCrescente.length; nR++) {
        if (listaEmOrdemCrescente[nR] != nAtual) {
            if (contaRepetido > 1) {
                console.log(`O número ${nAtual} repetiu ${contaRepetido} vezes!`);
            }
            nAtual = listaEmOrdemCrescente[nR];
            contaRepetido = 1;
        } else {
            contaRepetido++;
        }
    }
}








tornemeRico();


/*
    o algoritmo já traz os resultados, mas estou trabalhanho para criar uma função que mostra os numeros que 
    mais se repetem. Ainda estou estudando isso! 23/12/2021
    Hoje 25/12/2021, o algoritmo evoluiu mais um pouco. Já esta fazendo a contagem de números repetidos, mas ainda precisa
    refinar mais. Esta apresentando as informações duplicadas no console.log()
    Agora, 28/12 não esta mais contando os repetidos. Precisa corrigir
    Agora, 01/01/2022 retirei todas as funções que tentava identificar números repetidos! O algoritmo não esta mais rodando. Vamos corrigir!
    Agora, 02/01 já estou conseguindo criar uma lista só de números repetidos! Ainda preciso criar uma função para contar quantas vezes cada
    número repetiu.
    Agora, 03/01 já esta tudo funcionando. Projeto concluido!;
 */