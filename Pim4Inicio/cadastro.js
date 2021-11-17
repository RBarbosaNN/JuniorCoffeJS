
const fs = require('fs');
const entradaDeDadosPeloUsuario = require('prompt-sync')({sigint: true});

function iniciaCadastro() {
    let validaDN = false;
    let validaDD = false;

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
    verificaDataNascimento();
    verificaDataDiagnostico();
    let comorbidadesStr = entradaDeDadosPeloUsuario('Paciente tem comorbidades? Qual?');
    escreveNoTxt(`Comorbidades: ${comorbidadesStr}`);
    escreveNoTxt('######################################################################');

    function formateParaTipoDataN(pData) {
        const data = new Date(pData);
        if (isNaN(data)) {
            console.log('<*----------------------------------------------------------*>');
            console.log('O argmuento passado para a função não é uma instância de Date');
            console.log('Por favor, declare a data no formato: AAAA/MM/DD');
            console.log('<*----------------------------------------------------------*>');

            if(validaDN == false) {
                verificaDataNascimento();
            } else if (validaDN == true && validaDD == false) {
                verificaDataDiagnostico();
            }

        } else {
            const dia = addZeroAEsquerda(data.getDate());
            const mes = addZeroAEsquerda(data.getMonth() + 1);
            const ano = addZeroAEsquerda(data.getFullYear());
            validaDN = true;
            return (`${dia}/${mes}/${ano}`);
        }
    }

    function formateParaTipoDataD(pData) {
        const data = new Date(pData);
        if (isNaN(data)) {
            console.log('<*----------------------------------------------------------*>');
            console.log('O argmuento passado para a função não é uma instância de Date');
            console.log('Por favor, declare a data no formato: AAAA/MM/DD');
            console.log('<*----------------------------------------------------------*>');

            if(validaDD == false) {
                verificaDataDiagnostico()
            }

        } else {
            const dia = addZeroAEsquerda(data.getDate());
            const mes = addZeroAEsquerda(data.getMonth() + 1);
            const ano = addZeroAEsquerda(data.getFullYear());
            function addZeroAEsquerda(num) {
                return num >= 10 ? num : `0${num}`;
            }
            validaDD = true;
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

    function verificaDataNascimento() {
        let dataNascimentoStr = formateParaTipoDataN(entradaDeDadosPeloUsuario('Data de Nascimento no formato AAAA/MM/DD: '));
        if (validaDN == true) {
            console.log(`Entrei aqui e o validaDN = ${validaDN}`);
            if (typeof dataNascimentoStr === 'undefined') {
                // console.log(`dataNascimentoStr = ${dataNascimentoStr}, por isso não gravei no txt!`);
            } else {
                escreveNoTxt(`Data de Nascimento: ${dataNascimentoStr}`);
            }
        } else {
            verificaDataNascimento();
        }
    }

    function verificaDataDiagnostico() {
        let dataDiagnosticoStr = formateParaTipoDataD(entradaDeDadosPeloUsuario('Data do Diagnostico no formato AAAA/MM/DD: '));
        if (validaDD == true) {
            console.log(`Entrei aqui e o validaDD = ${validaDD}`);
            if (typeof dataDiagnosticoStr === 'undefined') {
                // console.log(`dataDiagnosticoStr = ${dataDiagnosticoStr}, por isso não gravei no txt!`);
            } else {
                escreveNoTxt(`Data do diagnostico positivo para SARS-COV-2: ${dataDiagnosticoStr}`);
            }
        } else {
            verificaDataDiagnostico();
        }
    }

    function addZeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

}
    



iniciaCadastro();








