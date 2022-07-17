/* demo with axios and jsdom */

const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

(async () => {
    const html = await axios.get('https://www.bolster.ai');
    const dom = new JSDOM(html.data);

    const title = dom.window.document.querySelector('title');

    if (title) {
        console.log(title.textContent);
    }
})();