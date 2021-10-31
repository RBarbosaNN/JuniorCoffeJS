/*
    ##############################################################################################################
        Neste exercício, criaremos uma função que rotaciona o nosso vetor.
        Levaremos em consideração as letras do alfabeto, de A a E.
        let vetorAlfabeto = ["A", "B", "C", "D", "E"];
        O que queremos que aconteça é: rotacionar o vetor a quantidade de vezes indicada. 
        Essa quantidade será representada pela letra Q.
        Caso o valor apresentado por Q for 1, o array deverá rotacionar um elemento:
        ["E", "A", "B", "C", "D"]

        Obsevação_1: Ainda não consegui resolver, mas estou quase! 
        Observação_2: Consegui resolver hoje, 31/10/2021!
    ##############################################################################################################
 */


let qtdRotacao = 2;
let vetorOriginal = ["A", "B", "C", "D", "E"];


function invertVetor(vetorOriginal, qtdRotacao) {
    let vetorProvisorio = [];
    let vetorResultante = [];
    let indiceDeRotacao = 1;

    for (let i in vetorOriginal) {
        vetorProvisorio.push(vetorOriginal[i]);
    }
    while (indiceDeRotacao <= qtdRotacao) {
        vetorProvisorio.unshift(vetorProvisorio[vetorProvisorio.length - 1]);
        vetorProvisorio.pop(vetorProvisorio[vetorProvisorio.length - 1]);
        vetorResultante = vetorProvisorio;
        indiceDeRotacao++;
    }

    console.log(`A quantidade de rotação solicitada foi igual a: ${qtdRotacao}`);
    console.log(`Portanto, o vetor ficou assim:`);
    console.log(`vetorOriginal = ${vetorOriginal}`);
    console.log(`vetorResultante = ${vetorResultante}`);
    
}

invertVetor(vetorOriginal, qtdRotacao);


