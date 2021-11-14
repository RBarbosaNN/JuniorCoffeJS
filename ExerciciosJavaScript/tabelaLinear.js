/*
  Definição de tabela linear (Linear Table): Sequência de elementos,
  é uma matriz unidimensional.
 */

  let scores = [90, 70, 50, 80, 60, 85];

  for (let i = 0; i < scores.length; i++) {
    console.log(scores[i] + ",");
  }

console.log('########################################');
console.log();
console.log('Algoritmo ordenar de bolhas');
console.log('Bubble Sorting Algorithm');
console.log('Organiza o array em ordem crescente');

/*

  Se arrays[j] > arrays[j + 1] forem trocados. Os elementos restantes
  repetem esse processo até a ordenar ser concluída.

  Situação 1: Ordenar os seguintes dados do menor para o maior:
  [90, 70, 50, 80, 60, 85]

  Explicação: permutar(swap), Valor máximo(max value)

*/

let array0 = [90, 70, 50, 80, 60, 85];

function sort1(arrays) {
  console.log(`Array original: ${arrays}`);
  for (let i = 0; i < arrays.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < arrays.length - i - 1; j++) {
      //troca
      if (arrays[j] > arrays[j + 1]) {
        let flag = arrays[j];
        arrays[j] = arrays[j + 1];
        arrays[j + 1] = flag;
        isSwap = true;
      }
    }
    //Sem troca, pare de classificar
    if (!isSwap) {
      break
    }
  }
  console.log(`Array ordenado do menor para o maior: ${arrays}`);
}

sort1(array0);

console.log('########################################');
console.log();

/*

  Valor Mínimo. Pesquisar o mínimo de sequências inteiras:
  [60, 80, 95, 50, 70]
  1. Ideias algorítmicas: Valor inicial minIndex = 0, j = 1.
  Compare arrays[minIndex] com arrays[j]

  if arrays[minIndex] > arrays[j] then minIndex=j, j++ else j++.
  continue até o último número, arrays[minIndex] é o valor mínimo.

*/

console.log('########################################');
console.log('Algoritmo. Encontrar valor mínimo dentro do array');

let array1 = [90, 70, 50, 80, 60, 85];

function min(arrays) {
  console.log(`Qual menor valor dentro do array1?: ${array1}`);
  let minIndex = 0;
  for (let j = 1; j < arrays.length; j++) {
    if (arrays[minIndex] > arrays[j]) {
      minIndex = j;
    }
  }
  console.log(`Menor valor encontrado dentro do array1 é: ${arrays[minIndex]}`); 
}

min(array1);

console.log('########################################');
console.log();

/*

  Se arrays[j] > arrays[j + 1] forem trocados. Os elementos restantes
  repetem esse processo até a ordenar ser concluída.

  Situação 1: Ordenar os seguintes dados do maior para o menor:
  [90, 60, 50, 80, 70, 85]

  Explicação: permutar(swap), Valor máximo(max value)

*/

let array2 = [90, 60, 50, 80, 70, 85];

function sort2(arrays) {
  console.log(`Array original: ${arrays}`);
  for (let i = 0; i < arrays.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < arrays.length - i - 1; j++) {
      //troca
      if (arrays[j] < arrays[j + 1]) {
        let flag = arrays[j];
        arrays[j] = arrays[j + 1];
        arrays[j + 1] = flag;
        isSwap = true;
      }
    }
    //Sem troca, pare de classificar
    if (!isSwap) {
      break
    }
  }
  console.log(`Array ordenado do maior para o menor: ${arrays}`);
}

sort2(array2);

console.log('########################################');
console.log();