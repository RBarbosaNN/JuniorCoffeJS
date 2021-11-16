
const fs = require('fs');

    
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



class CadastroDePaciente {

    constructor(nomeStr, cpfStr, telStr, emailStr, enderecoStr, dataNascimentoStr, dataDiagnosticoStr, comorbidadesStr) {
        escreveNoTxt('################################');
        this.nome = nomeStr;
        escreveNoTxt(`Nome: ${nomeStr}`);
        this.cfp = cpfStr;
        escreveNoTxt(`CPF: ${cpfStr}`);
        this.tel = telStr;
        escreveNoTxt(`Telefone: ${telStr}`);
        this.email = emailStr;
        escreveNoTxt(`E-mail: ${emailStr}`);
        this.endereco = enderecoStr;
        escreveNoTxt(`Endereço: ${enderecoStr}`);
        this.dataNascimento = escreveNoTxt(`Data de Nascimento: ${formateParaTipoData(dataNascimentoStr)}`);
        this.dataDiagnostico = escreveNoTxt(`Data de Diagnostico: ${formateParaTipoData(dataDiagnosticoStr)}`);
        this.comorbidades = comorbidadesStr;
        escreveNoTxt(`Comorbidades: ${comorbidadesStr}`);
        escreveNoTxt('################################');
    }
}

const paciente1 = new CadastroDePaciente('Paulo', '345.787.899-22', '9 9899-2323', 'paulo@gmail.com', 'Rua 24 São Paulo', '1990/11/29', '2021/03/17', 'Gordão');



function escreveNoTxt (dados) {
    
    fs.appendFileSync('arquivo.txt', dados + '\n', (err) => {
        if (err) throw err;
       console.log('O arquivo foi criado!');
    });

}






