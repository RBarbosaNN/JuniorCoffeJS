const url = require('url');
const address = 'https://www.meusite.com.br/catalago?produtos=cadeira';
const separaUrl = new url.URL(address);

console.log(`Site: ${separaUrl.host}`);
console.log(`Diretorio: ${separaUrl.pathname}`);
console.log(`Buscando: ${separaUrl.search}`);
console.log(`Parametro de busca: ${separaUrl.searchParams}`);
console.log(`Pesquisando por ${separaUrl.searchParams.get('produtos')}`);

