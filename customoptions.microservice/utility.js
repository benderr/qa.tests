var dict = require('../core/dictService');

function getItem(optionsString) {
    if (!optionsString)
        throw 'не валидный список параметров';

    var options = optionsString.split(',');
    dict.init('customoptions', options);
    return dict.getElement('customoptions');
}

module.exports = {
    getItem: getItem
};