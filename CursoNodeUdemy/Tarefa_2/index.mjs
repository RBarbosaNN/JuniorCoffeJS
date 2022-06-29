import inquirer from "inquirer";
import chalk from 'inquirer';


function talkToUser() {
    inquirer.prompt([
        {
            name: 'Nome',
            message: 'Qual é o seu nome?',
        },
        {
            name: 'Idade',
            message: 'Qual é a sua idade? ',
        }
    ]).then((answer) => {
        console.log(`Olá ${answer.Nome}! Então quer dizer que você tem ${answer.Idade}. Legal!`);
    }).catch((err) => console.log(err));
}

talkToUser();