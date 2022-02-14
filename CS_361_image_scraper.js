var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

var image_query = [req](async () => {
    const results = await google.scrape(image_query, 1);
    console.log('results', results);
  })();
