
// O código a seguir entre em um site da NHL e retorna um objeto com o nome da equipe de hóquei da NHL e vitórias naquele ano,


const puppeteer = require('puppeteer');
 
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://scrapethissite.com/pages/forms/');
 
    const textsArray = await page.evaluate(
        () => [...document.querySelectorAll(
            '#hockey > div > table > tbody > tr > td.name')]
            .map(elem => elem.innerText)
    );
    const WinArray = await page.evaluate(
        () => [...document.querySelectorAll(
            '#hockey > div > table > tbody > tr > td.wins')]
            .map(elem => elem.innerText)
    );
    var result = {};
    textsArray.forEach((textsArray, i) =>
        result[textsArray] = WinArray[i]);
    console.log(result);
    await browser.close();
})();