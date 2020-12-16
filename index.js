const puppeteer = require('puppeteer');
const colors = {
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	cyan: "\x1b[36m",
	white: "\x1b[37m"
};

console.log(colors.yellow + "╔═╗┌─┐┌─┐┌─┐┌┐┌┌┬┐┌─┐  ╔╗ ┌─┐┌┬┐");
console.log("╠╣ ├─┤┌─┘├┤ │││ ││├─┤  ╠╩╗│ │ │ ");
console.log("╚  ┴ ┴└─┘└─┘┘└┘─┴┘┴ ┴  ╚═╝└─┘ ┴ " + colors.white);
console.log("Criado Por:" + colors.cyan + " codsec" + colors.white);
console.log("Versão:" + colors.cyan + " 1.0.0\n" + colors.white);

(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();  
  await page.goto('https://afazenda.r7.com/a-fazenda-12/votacao');

  let votos = 0

  setInterval(async () => {
    try {
      await page.click('[data-id="760"]');
      await page.click('.voting-button');
    
      await page.evaluate(() => {
        let teste = document.querySelector('.voting-modal__close')
        console.log( teste )
        $(teste).click()
      })

      votos++
      console.log(`Você votou:` + colors.green + ` ${votos}` + colors.white +` vezes`);
      
    } catch( err) {
      console.log( colors.red + 'ERROR => ', err);
    }
      
  },1500)
})();