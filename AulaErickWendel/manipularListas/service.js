/* 
    A ideia é utilizar um site que já traz um monte de lista.
    Nesse nosso caso, as lista são todas voltadas para o filme
    Star Wars. 
    além do npm init -y, também utilizamos o npm install axios.
    O axios é responsavel por tratar a url.
*/

const axios = require('axios');
const URL = 'https://swapi.dev/api/people';

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);//axios é uma promises, para que eu consiga
                                        //pegar uma informação na mesma linha, eu preciso usar o await.
    return response.data;
}

module.exports = {
    obterPessoas: obterPessoas //forma para exportar um modulo
}


