const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    res.write('Ola HTTP');
    res.end();
});

server.listen(port, () => {
    console.log(`Servidor escutando na porta: ${port}`);
});

