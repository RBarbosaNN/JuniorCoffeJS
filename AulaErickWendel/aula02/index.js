/*
    1 - Obter um usuario
    2 - Obter o numero de telefone de um usuaio a partir de seu Id
    3 - Obter o endereco do usuario pelo Id
*/
//Importamos um modulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    //Quando der algum problema -> reject(ERRO)
    //Quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)

    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1190002',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 0
        })
    })
}

async function main() {
    try {
        console.time('medindo-tempo-promise')
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medindo-tempo-promise')
    }
    catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()
