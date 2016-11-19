var dict = require('../core/dictService');
var currency = require('../dict/currencies');

function generator(type) {
    dict.init('currency', currency);
    if (type && ['lang', 'symbol', 'sokr'].indexOf(type) >= 0)
        return dict.getElement('currency')[type];
    return dict.getElement('currency')['lang'];
}

module.exports = {
    generate: generator
};