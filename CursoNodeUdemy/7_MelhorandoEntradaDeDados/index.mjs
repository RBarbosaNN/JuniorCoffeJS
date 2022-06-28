import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual é a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual é a segunda nota?',
    }
]).then((respostas) => {
    console.log(respostas);
    const media = (parseInt(respostas.p1) + (parseInt(respostas.p2)) / 2);
    console.log(`A média da prova foi igual a: ${media}`);
}).catch((err) => console.log(err))
