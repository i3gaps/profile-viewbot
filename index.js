const yo = require('puppeteer')
const chalk = require('chalk')
const red = chalk.hex('#DC143C');

const ban = (`
${chalk.hex('#FFFFFF')("                               ┬  ┬┬┌─┐┬ ┬")}
${chalk.hex('#8D8C8C')("                               └┐┌┘│├┤ │││")}
${chalk.hex('#DC143C')("                                └┘ ┴└─┘└┴┘")}
`)

console.log(ban)

async function heyy() {
    console.log((`${red(`Sent a view.`)}`))
    const browser = await yo.launch();
    const page = await browser.newPage(); //opens page
    await page.goto("https://camo.githubusercontent.com/0611cf09a7206ca10457a2958e022e3bfe133ba2424edafdb068a30e20556bea/68747470733a2f2f677076632e6172747572696f2e6465762f693367617073")
    await browser.close();
}

setInterval(heyy, 100)