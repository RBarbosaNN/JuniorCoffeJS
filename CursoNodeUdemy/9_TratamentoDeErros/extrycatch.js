const x = '10';

try {
    x = 2;
} catch (err) {
    console.log(`Erro: ${err}`);
}

console.log('Continuando o código...');// O código vai passar por aqui mesmo que explodir um erro

