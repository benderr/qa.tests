var dict = require('../core/dictService');

function clean(val) {
    return val ? val.replace(/[^\d]/, '') : val;
}

function getString(charsString, size) {
    if (!charsString)
        throw 'не валидный список символов';
    size = Number.isInteger(size) ? size : parseInt(clean(size));
    if (!size)
        size = 5;

    var options = charsString.split('');
    dict.init('customstrings', options);

    var string = '';
    for (var i = 0; i < size; i++) {
        string += dict.getElement('customstrings');
    }
    return string;
}

module.exports = {
    getString: getString
};