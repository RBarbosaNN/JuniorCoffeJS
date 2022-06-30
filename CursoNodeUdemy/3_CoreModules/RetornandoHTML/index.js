const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>Olá, este é o meu primeiro server retornando um HTML!</h1>');
})

server.listen(port, () => {
    console.log(`Servidor escutando a porta: ${port}`);
})