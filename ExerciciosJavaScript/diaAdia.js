
/*  
    04/01/2022 - Função que mostra a tabuada do número passado como parâmetro da função.
    Ainda precisa melhorar. Vamos fazer com oque o usuário informe o número interagindo diretamente pelo terminal.
    Também precisamos construiu um algoritmo para tratar as falhas que podem ser causadas pelo usuário.
    
    05/01/2022 - Criar uma função que adiciona números aleatório em uma lista. Depois, pega esse números e cria uma nova lista
    apenas com números impares. Por último, organiza essa lista em ordem crescente.

    25/01/2022 - Criar uma função que remove os três primeiros caracteres de uma string e printa o resto.

    25/01/2022 - Criar uma função e colocar um objeto dentro da função que vai calcular a area do retangulo.
 */




function mostraTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// mostraTabuada(7);


let listaGeral = [];
let listaDeNumeroImpar = [];
let listaDeNumeroPar = [];

function geraListaGeral() {
    let contador = 0;
    while (contador < 23) {
        listaGeral.push(Math.floor(Math.random() * (60 - 1 + 1) + 1));
        contador++;
    }
    console.log(`Lista geral: ${listaGeral}`);
    geraListas();
}

function geraListas() {
    let contaImpar = 0;
    let contaPar = 0;
    for (n of listaGeral) {
        if (n % 2 != 0) {
            listaDeNumeroImpar.push(n);
            contaImpar++;
        } else {
            listaDeNumeroPar.push(n);
            contaPar++
        }
    }
    console.log(`Lista de número Impar: ${listaDeNumeroImpar}. O sistema gerou ${contaImpar} números Impares`);
    console.log(`Lista Impar em ordem crescente: ${listaDeNumeroImpar.sort((a,b) => a - b)}`);
    console.log(`Lista de número Par: ${listaDeNumeroPar}. O sistema gerou ${contaPar} números Pares`);
    console.log(`Lista Par em ordem crescente: ${listaDeNumeroPar.sort((a,b) => a - b)}`);
}

// geraListaGeral();


//remove os três primeiros caracteres

let s = "abcdef";

function myFunction(s) {
    return s.slice(3);
}

// console.log(myFunction(s));

function Retangulo(c, l) {
    const retangulo = {
        Comprimento: c,
        Largura: l,
        Perimetro: 2 * (c + l),
        Area: c * l
    }

    return retangulo;
}

let c = 710;
let l = 110;

console.log(Retangulo(c, l));