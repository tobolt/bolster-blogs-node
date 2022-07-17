const playwright = require('playwright');

(async () => {
    const browser = await playwright.chromium.launch({
        headless: true
    })
    const page = await browser.newPage()
    await page.goto('https://bolster.ai')
    const title = await page.title()
    console.log(title)
    browser.close()
})();