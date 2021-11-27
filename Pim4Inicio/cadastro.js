
const fs = require('fs');
const entradaDeDadosPeloUsuario = require('prompt-sync')({sigint: true});
const atendente = 'atendente';
const senha = 'atendente123';

function iniciaCadastro() {

    let validaDN = false;
    let validaDD = false;
    let anoParaCalcularIdade = new Date();

    let nomeStr = entradaDeDadosPeloUsuario('Digite o nome completo do paciente: ');
    escreveNoTxt(`Nome: ${nomeStr}`);
    let cpfStr = entradaDeDadosPeloUsuario('CPF: ');
    verificaCpf(cpfStr);
    let telStr = entradaDeDadosPeloUsuario('Telefone: ');
    verificaCel(telStr);
    let emailStr = entradaDeDadosPeloUsuario('E-mail: ');
    verificaEmail(emailStr);
    let enderecoStr = entradaDeDadosPeloUsuario('Endereço: ');
    escreveNoTxt(`Endereço: ${enderecoStr}`);
    let cepStr = entradaDeDadosPeloUsuario(`CEP: `);
    verificaCep(cepStr);
    verificaDataNascimento();
    verificaDataDiagnostico();
    let perguntaSeTemcomorbidadesStr = entradaDeDadosPeloUsuario('Paciente tem comorbidades? s/n ');
    verificaComorbidades(perguntaSeTemcomorbidadesStr);
    escreveNoTxt('######################################################################');

    function formateParaTipoDataN(pData) {
        const convertParaData = new Date(pData);
        if (isNaN(convertParaData)) {
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
            anoParaCalcularIdade = convertParaData;
            const dia = addZeroAEsquerda(convertParaData.getDate());
            const mes = addZeroAEsquerda(convertParaData.getMonth() + 1);
            const ano = addZeroAEsquerda(convertParaData.getFullYear());
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
                verificaDataDiagnostico();
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
        
        fs.appendFileSync('arquivoHosptal.txt', dados + '\n', (err) => {
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
            // console.log(`Entrei aqui e o validaDN = ${validaDN}`);
            if (typeof dataNascimentoStr === 'undefined') {
                // console.log(`dataNascimentoStr = ${dataNascimentoStr}, por isso não gravei no txt!`);
            } else {
                calculaIdade(anoParaCalcularIdade);
                escreveNoTxt(`Data de Nascimento: ${dataNascimentoStr}`);
            }
        } else {
            verificaDataNascimento();
        }
    }

    function verificaDataDiagnostico() {
        let dataDiagnosticoStr = formateParaTipoDataD(entradaDeDadosPeloUsuario('Data do Diagnostico no formato AAAA/MM/DD: '));
        if (validaDD == true) {
            // console.log(`Entrei aqui e o validaDD = ${validaDD}`);
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

    function calculaIdade(calcIdade) {

        let anoDeNascimento = calcIdade;
        let anoAtual = new Date();
        let idade = (anoAtual.getFullYear() - anoDeNascimento.getFullYear());

        if(idade >= 65) {
            // console.log(`Ano de nascimento informado foi: ${anoDeNascimento.getFullYear()}`);
            // console.log(`Portanto, sua idade é: ${idade} anos`);
            escreveNoTxtDaSecretaria(`CEP do Paciente que testou positivo: ${cepStr}`);
            escreveNoTxtDaSecretaria(`Idade do paciente que testou positivo: ${idade} anos`);
        }

    }

    function escreveNoTxtDaSecretaria (dados) {
        
        fs.appendFileSync('arquivoSecretaria.txt', dados + '\n', (err) => {
            if (err) {
                throw err;
            } else {
                console.log('O arquivo foi criado!');
            }
        });
    
    }

    function verificaEmail(email) {
        if ((typeof (email) === 'string') && (email.search("@") != -1)) {
            let emailSeparado = email.split("@");
            let usuario = emailSeparado[0];
            let dominio = emailSeparado[1];
    
            if ((usuario.length >= 1) &&
                (dominio.length >= 3) &&
                (usuario.search("@") == - 1) &&
                (dominio.search("@") == - 1) &&
                (usuario.search(" ") == - 1) &&
                (dominio.search(" ") == - 1) &&
                (dominio.search(".") != - 1) &&
                (dominio.indexOf(".") >= 1) &&
                (dominio.lastIndexOf(".") < dominio.length - 1)) {
                console.log("Email valido!");
                escreveNoTxt(`Email: ${email}`);
            } else {
                console.log("Favor digitar um email valido");
                emailStr = entradaDeDadosPeloUsuario('E-mail: ');
                verificaEmail(emailStr);
            }
        } else {
            console.log("Favor digitar um email valido");
            emailStr = entradaDeDadosPeloUsuario('E-mail: ');
            verificaEmail(emailStr);
        } 
    }

    function verificaComorbidades(resposta) {
        console.log(resposta);
        if (resposta === 's') {
            let comorbidadesStr = entradaDeDadosPeloUsuario('Qual comorbidades? ');
            escreveNoTxt(`Paciente tem as seguintes comorbidades: ${comorbidadesStr}`);
            escreveNoTxtDaSecretaria(`Paciente tem as seguintes comorbidades: ${comorbidadesStr}`);
            escreveNoTxtDaSecretaria(`CEP do Paciente que testou positivo: ${cepStr}`);
        } else if (resposta === 'n') {
            escreveNoTxt(`Paciente não possui comorbidades!`);
        } else {
            console.log("Por favor responda com uma única letra minúscula: s ou n");
            perguntaSeTemcomorbidadesStr = entradaDeDadosPeloUsuario('Paciente tem comorbidades? s/n ');
            verificaComorbidades(perguntaSeTemcomorbidadesStr);
        }

    }

    function verificaCpf(CPF) {
    
        let recebeCpf = CPF;
    
        //Procura por qualquer letra maiúscula e letra minúscula entre A e Z, se não encontrar retorna -1. Se não, retorna o índice que deu match
        if((recebeCpf.search(/[A-Z]/g) == - 1) && (recebeCpf.search(/[a-z]/g) == -1)) {
            console.log('CPF Valido!');
            escreveNoTxt(`CPF: ${recebeCpf}`);
        } else {
            console.log('CPF Invalido! Por favor digite um CPF valido!');
            cpfStr = entradaDeDadosPeloUsuario('CPF: ');
            verificaCpf(cpfStr);
        }
    
    }

    function verificaCep(CEP) {
    
        let recebeCep = CEP;
    
        //Procura por qualquer letra maiúscula e letra minúscula entre A e Z, se não encontrar retorna -1. Se não, retorna o índice que deu match
        if((recebeCep.search(/[A-Z]/g) == - 1) && (recebeCep.search(/[a-z]/g) == -1)) {
            console.log('CEP Valido!');
            escreveNoTxt(`CEP: ${recebeCep}`);
        } else {
            console.log('CEP Invalido! Por favor digite um CEP valido!');
            cepStr = entradaDeDadosPeloUsuario(`CEP: `);
            verificaCep(cepStr);
        }
    
    }

    function verificaCel(CEL) {
    
        let recebeCel = CEL;
    
        //Procura por qualquer letra maiúscula e letra minúscula entre A e Z, se não encontrar retorna -1. Se não, retorna o índice que deu match
        if((recebeCel.search(/[A-Z]/g) == - 1) && (recebeCel.search(/[a-z]/g) == -1)) {
            console.log('Telefone Valido!');
            escreveNoTxt(`Telefone: ${recebeCel}`);
        } else {
            console.log('Telefone Invalido! Por favor digite um telefone valido!');
            telStr = entradaDeDadosPeloUsuario('Telefone: ');
            verificaCel(telStr);
        }
    
    }

}
    


function pedeLogin() {

    console.log();
    console.log('****************************************************');
    console.log('Bem vindo ao PIM 4 - Sistema de cadastro SARS-COV-2');
    let pedeUser = entradaDeDadosPeloUsuario('Digite o nome de usuario(a): ');
    let pedeSenha = entradaDeDadosPeloUsuario('Digite a senha: ');
    console.log('****************************************************');
    console.log();
    
    if((pedeUser === atendente) && (pedeSenha === senha)) {
        console.log('Login realizado com sucesso!');
        console.log('<<<<<<PIM 4 - Sistema de cadastro SARS-COV-2>>>>>>>>');
        console.log('Inicie o cadastro do paciente.');
        iniciaCadastro();
    } else {
        console.log('#####################################################');
        console.log();
        console.log('Usuário ou senha invalida! Por favor tente novamente.');
        console.log();
        console.log('#####################################################');
        pedeLogin();
    }

}



pedeLogin();