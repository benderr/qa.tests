var dict = require('../core/dictService');
var currency = require('../dict/currencies');

function generator(lang, symbol, sokr) {
    dict.init('currency', currency);
    if (lang && lang == 'en')
        return dict.getElement('currency')['en'];
    if (lang && lang == 'ru')
        return dict.getElement('currency')['name'];
    if(symbol)
        return dict.getElement('currency')['code'];
    if(sokr)
        return dict.getElement('currency')['en'];
}

module.exports = {
    generate: generator
};