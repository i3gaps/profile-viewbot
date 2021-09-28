const p = require('puppeteer')
const chalk = require('chalk')
const red = chalk.hex('#DC143C');

const banner = (`
${chalk.hex('#FFFFFF')("                               ┬  ┬┬┌─┐┬ ┬")}
${chalk.hex('#8D8C8C')("                               └┐┌┘│├┤ │││")}
${chalk.hex('#DC143C')("                                └┘ ┴└─┘└┴┘")}
`)

console.log(banner)

async function heyy() {
    console.log((`${red(`Sent a view.`)}`))
    const browser = await p.launch();
    const page = await browser.newPage(); //opens page
    await page.goto("Link")
    await browser.close();
}

setInterval(heyy, 100)
