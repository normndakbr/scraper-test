const request = require('request')
const cheerio = require('cheerio')
const source = "https://www.cermati.com/artikel"

request(source, function (err, res, body) {
    if (err && res.statusCode !== 200) throw err;
    //console.log(body);
    let content = cheerio.load(body)

    console.log(content('body').html());
});
