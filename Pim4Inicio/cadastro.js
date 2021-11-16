
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
    let dataNascimentoStr = entradaDeDadosPeloUsuario('Data de Nascimento: ');
    escreveNoTxt(`Data de Nascimento: ${dataNascimentoStr}`);
    let dataDiagnosticoStr = entradaDeDadosPeloUsuario('Data do Diagnostico: ');
    escreveNoTxt(`Data do diagnostico positivo para SARS-COV-2: ${dataDiagnosticoStr}`);
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

    // class CadastroDePaciente {
    
    //     constructor(nomeStr, cpfStr, telStr, emailStr, enderecoStr, dataNascimentoStr, dataDiagnosticoStr, comorbidadesStr) {
    //         escreveNoTxt('################################');
    //         this.nome = nomeStr;
    //         escreveNoTxt(`Nome: ${nomeStr}`);
    //         this.cfp = cpfStr;
    //         escreveNoTxt(`CPF: ${cpfStr}`);
    //         this.tel = telStr;
    //         escreveNoTxt(`Telefone: ${telStr}`);
    //         this.email = emailStr;
    //         escreveNoTxt(`E-mail: ${emailStr}`);
    //         this.endereco = enderecoStr;
    //         escreveNoTxt(`Endereço: ${enderecoStr}`);
    //         this.dataNascimento = escreveNoTxt(`Data de Nascimento: ${formateParaTipoData(dataNascimentoStr)}`);
    //         this.dataDiagnostico = escreveNoTxt(`Data de Diagnostico: ${formateParaTipoData(dataDiagnosticoStr)}`);
    //         this.comorbidades = comorbidadesStr;
    //         escreveNoTxt(`Comorbidades: ${comorbidadesStr}`);
    //         escreveNoTxt('################################');
    //     }
    // }

    function escreveNoTxt (dados) {
        
        fs.appendFileSync('arquivo.txt', dados + '\n', (err) => {
            if (err) throw err;
           console.log('O arquivo foi criado!');
        });
    
    }

    // const paciente1 = new CadastroDePaciente('Paulo', '345.787.899-22', '9 9899-2323', 'paulo@gmail.com', 'Rua 24 São Paulo', '1990/11/29', '2021/03/17', 'Gordão');
}
    



iniciaCadastro();









