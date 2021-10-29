/*
    ####################################################################################################################
    A ideia desse exercício é identificar qual é a única letra que não esta repetida dentro do array e, após identificar
    essa letra, devemos retornar/printar o valor dela na tela.
    Observação_1: Ainda não consegui fazer esse desafio!
    ####################################################################################################################
 */



    // let vetor = ["a", "b", "a", "a", "c", "b"];

    // function identificaLetraRepedita(vetor) {
    //     let letraUnica = [''];
    //     let letrasRepetidas = [''];
    //     let indice = 0;
    //     let caracterTemporario = '';

    //     console.log(`vetor = ${vetor}`);
    //     console.log(`vetor.lenght-1 = ${vetor.length-1}`);

    //     for (let c of vetor) {
    //         caracterTemporario = c;
    //         for (let i = 0; i <= vetor.length-1; i++) {

    //             if (caracterTemporario !== vetor[i]) {
    //                 letraUnica = caracterTemporario;
    //             } else {
    //                 console.log('Não é unico!');
    //             }
    //         }
    //     }

    //     console.log('Fim do processo!');
    //     console.log(`A única letra que não se repete é: ${letraUnica}`);
    // }

    // identificaLetraRepedita(vetor);

    //O algoritmo acima não é meu e não funcionou! O que esta abaixo é do professor e funcionou.



let vetor = ["a", "b", "a", "a", "c", "b"];

function encontraIsolado(vetor) {
    let classifique = vetor.sort(); //Qual a necessidade de embaralhar o vetor aqui? R: Pesquisando resposta...
    let letraUnica = '';
    classifique.forEach((element, index) => {
        let thisElement = classifique[index];
        let nextEle = classifique[index + 1];

        if (thisElement == nextEle) {
            index++;
        } else {
            letraUnica = thisElement;
        }
    })
    return `A única letra que não se repete dentro do vetor = ${vetor} é a letra: ${letraUnica}`;

}
console.log(encontraIsolado(vetor));