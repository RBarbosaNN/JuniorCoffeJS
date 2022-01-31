
/*  
    04/01/2022 - Função que mostra a tabuada do número passado como parâmetro da função.
    Ainda precisa melhorar. Vamos fazer com oque o usuário informe o número interagindo diretamente pelo terminal.
    Também precisamos construiu um algoritmo para tratar as falhas que podem ser causadas pelo usuário.
    
    05/01/2022 - Criar uma função que adiciona números aleatório em uma lista. Depois, pega esse números e cria uma nova lista
    apenas com números impares. Por último, organiza essa lista em ordem crescente.

    25/01/2022 - Criar uma função que remove os três primeiros caracteres de uma string e printa o resto.

    25/01/2022 - Criar uma função e colocar um objeto dentro da função que vai calcular a area do retangulo.

    26/01/2022 - Criar uma função e colocar um objeto dentro que vai calcular Bhaskara. Feito, precisa verificar se esta certo.

    30/01/2022 - Criamos a função BhaskaraV2, foi corrigido a função do dia 26/01 e aplicamos algumas melhorias.

    30/01/2022 = Algoritmo de pesquisa por dicotomia. A ideia é dividir a lista por 2, e procurar pelo número em apenas uma metado da lista. (Funcionando,
        mas ainda preciso entender melhor o algoritimo).
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

// console.log(Retangulo(c, l));


// function Bhaskara(a, b, c) {
//     const formula = {
//         a: a,
//         b: b,
//         c: c,
//         Delta: (b**2) - (4*a*c),
//         raizDelta: Math.sqrt((b**2) - (4*a*c)),
//         x1: (-b + (Math.sqrt((b**2) - (4*a*c))))/(2*a),
//         x2: (-b - (Math.sqrt((b**2) - (4*a*c))))/(2*a),
//         ProvaRaizX1: a*(Math.pow(((-b + (Math.sqrt((b**2) - (4*a*c))))/(2*a)),2)) + (b*((-b + (Math.sqrt((b**2) - (4*a*c))))/(2*a))) + c,
//         ProvaRaizX2: a*(Math.pow(((-b - (Math.sqrt((b**2) - (4*a*c))))/(2*a)),2)) + (b*((-b - (Math.sqrt((b**2) - (4*a*c))))/(2*a))) + c
//     }

//     return formula;

// }

// console.log(Bhaskara(2,7,5));

function BhaskaraV2(a,b,c) {
    let aa = a;
    let bb = b;
    let cc = c;
    let delta = (bb**2) - (4*aa*cc);
    let raizDelta = Math.sqrt(delta);
    let x1 = (-bb + raizDelta)/(2*aa);
    let x2 = (-bb - raizDelta)/(2*aa);
    let ProvaRaizX1 = aa*(x1**2) + (bb*x1) + c;
    let ProvaRaizX2 = aa*(x2**2) + (bb*x2) + c;

    console.log(`ax² + bx + c = 0`);
    console.log(`${aa}x² + ${bb}x + ${cc} = 0`);
    console.log(`a: ${aa}`);
    console.log(`b: ${bb}`);
    console.log(`c: ${cc}`);
    console.log(`Delta: ${delta}`);
    console.log(`Raiz de Delta: ${raizDelta}`);
    console.log(`x1: ${x1}`);
    console.log(`x2: ${x2}`);
    console.log(`Prova Raiz de x1: ${ProvaRaizX1}`);
    console.log(`Prova Raiz de x2: ${ProvaRaizX2}`);
    console.log(`${aa}.${x1}² + ${bb}.${x1} + ${cc} = ${ProvaRaizX1}`);
    console.log(`${aa}.${x2}² + ${bb}.${x2} + ${cc} = ${ProvaRaizX2}`);
}

// BhaskaraV2(2,7,5);

let listaParaPesquisa = [30, 40, 50, 70, 85, 90, 100];
let alvo = 90;

function pPorDicotomia(lista, alvo) {
    
    let indiceMinimo = 0;
    let indiceMaximo = lista.length-1;
    let indiceMedio = 0;
    let valorAlvoEncontradoNoIndice = 0;
    let valorAlvoNaoEcontrado = 0;

    while (indiceMinimo <= indiceMaximo) {
        indiceMedio = (indiceMinimo+indiceMaximo)/2;
        if(lista[indiceMedio] == alvo) {
            valorAlvoEncontradoNoIndice = indiceMedio;
            break;
        } else if (lista[indiceMedio] < alvo) {
            indiceMinimo = indiceMedio+1;
        } else if (lista[indiceMedio] > alvo) {
            indiceMaximo = indiceMedio-1;
            valorAlvoNaoEcontrado = -1;
        }
    }
    
    if (valorAlvoNaoEcontrado !== -1) {
        console.log(`Valor alvo: ${alvo}. Foi encontrado ${lista[indiceMedio]} no indice: ${valorAlvoEncontradoNoIndice}`);
    } else {
        console.log(`Valor alvo: ${alvo}. Não foi encontrado em nenhum indice`);
    }

}

pPorDicotomia(listaParaPesquisa, alvo);