/* demo with axios and cheerio */

const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
    const html = await axios.get('https://www.bolster.ai/');
    const $ = await cheerio.load(html.data);
    console.log($("title").text());
})();