
const fs = require('fs');
const entradaDeDadosPeloUsuario = require('prompt-sync')({sigint: true});

function iniciaCadastro() {

    let nomeStr = entradaDeDadosPeloUsuario('Digite o nome completo do paciente: ');
    escreveNoTxt(`Nome: ${nomeStr}`);
    let cpfStr = entradaDeDadosPeloUsuario('CPF: ');
    escreveNoTxt(`CPF: ${cpfStr}`);
    let telStr = entradaDeDadosPeloUsuario('Telefone: ');
    escreveNoTxt(`Telefone: ${telStr}`);
    let emailStr = entradaDeDadosPeloUsuario('E-mail: ');
    escreveNoTxt(`E-Mail: ${emailStr}`);
    let enderecoStr = entradaDeDadosPeloUsuario('Endereço: ');
    escreveNoTxt(`Endereço: ${enderecoStr}`);
    let dataNascimentoStr = entradaDeDadosPeloUsuario('Data de Nascimento no formato AAAA/MM/DD: ');
    escreveNoTxt(`Data de Nascimento: ${formateParaTipoData(dataNascimentoStr)}`);
    let dataDiagnosticoStr = entradaDeDadosPeloUsuario('Data do Diagnostico no formato AAAA/MM/DD: ');
    escreveNoTxt(`Data do diagnostico positivo para SARS-COV-2: ${formateParaTipoData(dataDiagnosticoStr)}`);
    let comorbidadesStr = entradaDeDadosPeloUsuario('Paciente tem comorbidades? Qual?');
    escreveNoTxt(`Comorbidades: ${comorbidadesStr}`);
    escreveNoTxt('######################################################################');

    function formateParaTipoData(dataNascimentoStr) {
        const data = new Date(dataNascimentoStr);
    
        if (isNaN(data)) {
            console.log('O argmuento passado para a função não é uma instância de Date');
            console.log('Por favor, declare a data no formato: AAAA/MM/DD');
        } else {
            const dia = addZeroAEsquerda(data.getDate());
            const mes = addZeroAEsquerda(data.getMonth() + 1);
            const ano = addZeroAEsquerda(data.getFullYear());
            function addZeroAEsquerda(num) {
                return num >= 10 ? num : `0${num}`;
            }
            return (`${dia}/${mes}/${ano}`);
        }
    }

    function escreveNoTxt (dados) {
        
        fs.appendFileSync('arquivo.txt', dados + '\n', (err) => {
            if (err) {
                throw err;
            } else {
                console.log('O arquivo foi criado!');
            }
        });
    
    }

}
    



iniciaCadastro();









