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
    ##############################################################################################################
 */


let qtdRotacao = 1;
let vetorOriginal = ["A", "B", "C", "D", "E"];

function invertVetor(vetorOriginal, qtdRotacao) {
    let vetorProvisorio = [];
    let vetorResultante = [];

    for (let v of vetorOriginal) {
        vetorProvisorio.push(v);
    }

    console.log(`vetorOriginal = ${vetorOriginal}`);
    // console.log(`vetorProvisorio_1 = ${vetorProvisorio}`);

    if (qtdRotacao >= 1) {
        vetorResultante = vetorProvisorio.unshift(vetorProvisorio[vetorOriginal.length-qtdRotacao]);
        // console.log(`vetorProvisorio_2 = ${vetorProvisorio}`);
        // console.log(`vr_1 - ${vetorResultante}`);
        vetorResultante = vetorProvisorio.pop(vetorOriginal[vetorOriginal.length-qtdRotacao]);
        // console.log(`vr_2 - ${vetorResultante}`);
        vetorResultante = vetorProvisorio;
        console.log(`vetorResultante = ${vetorResultante}`);
    }


}

invertVetor(vetorOriginal, qtdRotacao);