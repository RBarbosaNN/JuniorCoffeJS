
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

    30/01/2022 - Algoritmo de pesquisa por dicotomia. A ideia é dividir a lista por 2, e procurar pelo número em apenas uma metado da lista. Observação,
    esta funcionando, mas ainda preciso entender melhor o algoritimo.

    07/02/2022 - Testes de stdin e stdout. Falhou, o comando exit não funcionou e a aplicação continuou rodando.
    Já deletei as linhas de código.

    10/02/2022 - Algoritmo de classificação de cascas (Shell Sort) - Organiza um array em ordem crescente de uma forma muito
    eficiente.

    11/02/2022 - Inicio do exercicio da Microsoft

    16/02/2022 - Algoritmo para determinar o número da sequencia de Fibonacci.

    19/02/2022 - Tratamento de erro.

    Descobrir como tratar erros de referencia passado como parâmetro da função

    20/02/2022 - Construir uma função para testar se a conversão de string para number deu certo
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
    console.log(`Lista Impar em ordem crescente: ${listaDeNumeroImpar.sort((a, b) => a - b)}`);
    console.log(`Lista de número Par: ${listaDeNumeroPar}. O sistema gerou ${contaPar} números Pares`);
    console.log(`Lista Par em ordem crescente: ${listaDeNumeroPar.sort((a, b) => a - b)}`);
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


// console.log(Bhaskara(2,7,5));

function BhaskaraV2(a, b, c) {
    let aa = a;
    let bb = b;
    let cc = c;
    let delta = (bb ** 2) - (4 * aa * cc);
    let raizDelta = Math.sqrt(delta);
    let x1 = (-bb + raizDelta) / (2 * aa);
    let x2 = (-bb - raizDelta) / (2 * aa);
    let ProvaRaizX1 = aa * (x1 ** 2) + (bb * x1) + c;
    let ProvaRaizX2 = aa * (x2 ** 2) + (bb * x2) + c;

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
    let indiceMaximo = lista.length - 1;
    let indiceMedio = 0;
    let valorAlvoEncontradoNoIndice = 0;
    let valorAlvoNaoEcontrado = 0;

    while (indiceMinimo <= indiceMaximo) {
        indiceMedio = (indiceMinimo + indiceMaximo) / 2;
        if (lista[indiceMedio] == alvo) {
            valorAlvoEncontradoNoIndice = indiceMedio;
            break;
        } else if (lista[indiceMedio] < alvo) {
            indiceMinimo = indiceMedio + 1;
        } else if (lista[indiceMedio] > alvo) {
            indiceMaximo = indiceMedio - 1;
            valorAlvoNaoEcontrado = -1;
        }
    }

    if (valorAlvoNaoEcontrado !== -1) {
        console.log(`Valor alvo: ${alvo}. Foi encontrado ${lista[indiceMedio]} no indice: ${valorAlvoEncontradoNoIndice}`);
    } else {
        console.log(`Valor alvo: ${alvo}. Não foi encontrado em nenhum indice`);
    }

}

// pPorDicotomia(listaParaPesquisa, alvo);

//ShellSort
let scoresDesordenado = [9, 6, 5, 8, 0, 7, 4, 3, 1, 2];
let scoresOrdenado = [];

function shellSort(array) {
    console.log(`Array original: ${array}`);
    console.time("Medindo tempo de execução da função ShellSort");
    let middle = parseInt(array.length / 2);
    for (let gap = middle; gap > 0; gap = parseInt(gap / 2)) {
        for (let i = gap; i < array.length; i++) {
            let j = i;
            while (j - gap >= 0 && array[j] < array[j - gap]) {
                swap(array, j, j - gap);
                j = j - gap;
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        scoresOrdenado.push(array[i]);
    }
    console.log(`Array ordenado: ${scoresOrdenado}`);
    console.timeEnd("Medindo tempo de execução da função ShellSort");
}

function swap(array, a, b) {
    array[a] = array[a] + array[b];
    array[b] = array[a] - array[b];
    array[a] = array[a] - array[b];
}


// shellSort(scoresDesordenado);

//ShellSort

//Fibonacci
function fibonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }

    return n === 0 ? n1 : n2;
}

// const result = fibonacci(8);
// console.log(result);
//Fibonacci

//Tabuada

function tratamentoDeErro() {
    try {
        let ntb = variavelNaoDeclarada;
    } catch(e) {
        console.log(e.name);
        console.log(e.message);
    }
}


tratamentoDeErro();



let entradaParaTestar = 555;

function testeConversao(parametro) {
    let tentaConverter = parseInt(parametro);
    if(isNaN(tentaConverter)) {
        console.log(`Entramos aqui porque não foi possível converter "${entradaParaTestar}" para número, pois ao tentar converter 
        ele virou um ${tentaConverter}`);
    } else {
        console.log(`Ok, foi possível converter. O typeof de ${tentaConverter} é realmente um ${typeof(tentaConverter)}`);
    }
}

testeConversao(entradaParaTestar);

