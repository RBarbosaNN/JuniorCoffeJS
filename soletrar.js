
/*
 * A proposta desse exercício é pegar uma palavra e "soletrar" essa palavra. Por exemplo: s-o-l-e-t-r-a-r 
 */

const palavra = 'JavaScript';

function soletrar(palavra) {
    let guardaPalavra = [];

    for(let letra of palavra) {
        guardaPalavra.push(letra)
    }
    
    console.log(guardaPalavra);

}

soletrar(palavra);