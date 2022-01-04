
/*  
    04/01/2021 - Função que mostra a tabuada do número passado como parâmetro da função.
    Ainda precisa melhorar. Vamos fazer com oque o usuário informe o número interagindo diretamente pelo terminal.
    Também precisamos construiu um algoritmo para tratar as falhas que podem ser causadas pelo usuário.

    
 */




function mostraTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

mostraTabuada(7);
