/*
    1 - Obter um usuario
    2 - Obter o numero de telefone de um usuaio a partir de seu Id
    3 - Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1190002',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 0
        })
    })
}

function resolverUsuario(erro, usuario) {
    console.log('usuaio', usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
    //null || "" || 0 === false
    if(error) {
        console.log('DEU RUIM EM usuario', error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1) {
            console.log('DEU RUIM EM telefone', error);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2) {
                console.log('DEU RUIM EM endereco', error);
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})