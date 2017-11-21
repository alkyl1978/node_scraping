var needle = require('needle');
var tress = require('tress');
var cheerio = require('cheerio');
var resolve = require('url').resolve;

var URL = 'http://fasttorrent.ru/new-torrent/';

needle.get(URL, function(err, res){
    if (err) throw err;
    var $ = cheerio.load(res.body);
    var count = $('div').get().length
    console.log('количество div' ,count)

});
