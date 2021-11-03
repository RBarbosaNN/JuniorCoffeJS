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

    //Observação_1: O algoritmo acima é meu e não funcionou!
    //Observação_2: O algoritmo abaixo é do professor e temos um problema. O vetor original para na letra b. Quando,
    //adicionamos mais elementos nessa lista, o algoritmo não faz o que deveria fazer, ou seja, do professor também não funcionou!



// let vetorOriginal = ["a", "b", "a", "a", "c", "b", "c", "k", "x", "k", "z", "z"];
// let vetorOrganizado = [];

// function encontraIsolado(vetor) {
//     let classifique = vetor.sort(); //Qual a necessidade do sort() aqui? R: 
//     /*
//      Explicação da função sort()
//      Posição 690 do livro: Princíopios de orientação a Objetos em JavaScript
//      */
//     let letraUnica = '';
//     classifique.forEach((element, index) => { //Para que serve o forEach? R: Pesquisando resposta...
//         let thisElement = classifique[index];
//         let nextElement = classifique[index + 1];
        
//         if (thisElement == nextElement) {
//             index++;
//         } else {
//             letraUnica = thisElement;
//         }
//     })
//     return `A única letra que não se repete dentro do vetorOriginal = ${vetor} é a letra: ${letraUnica}`;
// }

// console.log(encontraIsolado(vetorOriginal));


let vetorOriginal = ["a", "b", "a", "a", "c", "b", "c", "k", "x", "k", "z", "z"];
let vetorOrganizado = [];

function encontraLetraUnica(vetor) {
    let letraParaComparar = '';
    let letraUnicaEncontrada = [];
    let letrasRepedidasEncontradas = [];
    let contador = 0;
    for (let l of vetor) {
        letraParaComparar = l;
        //Continuar esse algoritima em outra hora
    }
    console.log(letraUnicaEncontrada);
}

encontraLetraUnica(vetorOriginal);
