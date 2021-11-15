


function iniciaCadastro() {
    
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
            console.log(`${dia}/${mes}/${ano}`);
        }
    }

}


class CadastroDePaciente {
    constructor(nomeStr, cpfStr, telStr, emailStr, enderecoStr, dataNascimentoStr, dataDiagnosticoStr, comorbidadesStr) {

        this.nome = nomeStr;
        this.cfp = cpfStr;
        this.tel = telStr;
        this.email = emailStr;
        this.endereco = enderecoStr;
        this.dataNascimento = dataNascimentoStr;
        this.dataDiagnostico = dataDiagnosticoStr;
        this.comorbidades = comorbidadesStr;

    }
}

const paciente1 = new CadastroDePaciente('Paulo', '345.787.899-22', '9 9899-2323', 'paulo@gmail.com', 'Rua 24 São Paulo', '1990/11/29', '2021/03/17', 'Gordão');

console.log(paciente1);







