const request = require('request')
const cheerio = require('cheerio')
const source = "https://www.cermati.com/artikel"
const articles = []

request(source, (err, response, content) => {
    if (!err && response.statusCode == 200) {
        let $ = cheerio.load(content)
        $('div.article-list-item').each((i, el) => {
            const url = $(el).find('a').attr('href')
            console.log(url);
        })
    }
});
