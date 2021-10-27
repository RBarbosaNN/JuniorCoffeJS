
/*
    A proposta desse exercício é pegar uma palavra e "soletrar" essa palavra com todas as letras maiúscula. 
    Por exemplo: Palavra: Programador.
    O resultado seria: P-R-O-G-R-A-M-A-D-O-R
 */

const palavra = 'JavaScript';

function soletrar(palavra) {
    let guardaPalavra = "";
    guardaPalavra = palavra;
    
    console.log(guardaPalavra.split('').join('-'));

}

soletrar(palavra);