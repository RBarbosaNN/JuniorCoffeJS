
let testeCpf = '12332d1233';

function verificaCpf(CPF) {
    
    let recebeCpf = CPF.toString(); //Converte o CPF que é tipo number para o tipo string

    if (typeof recebeCpf === 'string') {
        console.log('recebeCpf é string');
    } else {
        console.log('recebeCpf não é string');
    }

    //Procura por qualquer letra maiúscula entre A e Z, se não encontrar retorna -1. Se não, retorna o índice que deu match
    console.log(`Tem letra maiúscula dentro de recebeCpf? ${recebeCpf.search(/[A-Z]/g)}`); 

    //Procura por qualquer letra minúscula entre a e z, se não encontrar retorna -1. Se não, retorna o índice que deu match
    console.log(`Tem letra minúscula dentro de recebeCpf? ${recebeCpf.search(/[a-z]/g)}`);

    if((recebeCpf.search(/[A-Z]/g) == - 1) && (recebeCpf.search(/[a-z]/g) == -1)) {
        console.log('CPF Valido!');
    } else {
        console.log('CPF Invalido');
    }

}


verificaCpf(testeCpf);

// for (let digito of recebeCpf) {
//     console.log(digito);
//     if((digito.search(/[A - Z]/g) != - 1) && (digito.search(/[a - z]/g) != -1)) {
//         console.log('CPF Valido!');
//     } else {
//         console.log('CPF Invalido');
//     }
// }