var dict = require('../core/dictService');
var currency = require('../dict/currencies');

function generator(lang, symbol, sokr) {
    dict.init('currency', currency);
    if (lang)
        return dict.getElement('currency')['lang'];
    if (symbol)
        return dict.getElement('currency')['symbol'];
    if (sokr)
        return dict.getElement('currency')['sokr'];
    return dict.getElement('currency')['lang'];
}

module.exports = {
    generate: generator
};