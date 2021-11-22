
let emailStr = "exemplo@.gmail.com";

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
        } else {
            console.log("Favor digitar um email valido");
        }
    } else {
        console.log("Favor digitar um email valido");
    } 
}

verificaEmail(emailStr);


// let usuario = email.value.subString(0, email.value.indexOf("@"));
// let dominio = email.value.subString(email.value.indexOf("@") + 1, email.value.length);

// console.log(`usuario = ${usuario}`);
// console.log(`dominio = ${dominio}`);
// console.log(`usuario.search("@") = ${usuario.search("@")}`);
// console.log(`(dominio.search("@") = ${dominio.search("@")}`);
// console.log(`usuario.search(" ") = ${usuario.search(" ")}`);
// console.log(`dominio.search(" ") = ${dominio.search(" ")}`);
// console.log(`dominio.search(".") = ${dominio.search(".")}`);
// console.log(`dominio.indexOf(".") = ${dominio.indexOf(".")}`);
// console.log(`dominio.lastIndexOf(".") = ${dominio.lastIndexOf(".")}`);
// console.log(`dominio.legth -1 = ${dominio.length -1}`);