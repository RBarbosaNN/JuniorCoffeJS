
let campo = "teste@gmail.com";

function verificaEmail(campo) {
    let usuario = campo.value.substring(0, campo.value.indexOf("@"));
    let dominio = campo.value.substring(campo.value.indexOf("@") + 1, campo.value.length);

    if((usuario.length >= 1) &&
       (dominio.length >= 3) &&
       (usuario.search("@") ==- 1) &&
       (dominio.search("@") ==- 1) &&
       (usuario.search(" ") ==- 1) &&
       (dominio.search(" ") ==- 1) &&
       (dominio.search(".") !=- 1) &&
       (dominio.indexOf(".") >= 1) &&
       (dominio.lastIndexOf(".") < dominio.length - 1)) {
           console.log('Email valido!');
       }

}
