var random = require('../core/radomizer');
var dict = require('../core/dictService');

function generate() {
    dict.init('workbookprefix', ['АТ', 'ТК']);
    dict.init('romannumbers_АТ', ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']);
    dict.init('romannumbers_ТК', ['I', 'II', 'III', 'IV']);

    var prefix = dict.getElement('workbookprefix');
    var roman = dict.getElement('romannumbers_' + prefix);
    var number = random(7);
    return `${prefix}-${roman} ${number}`;
}

function validate(val) {
    return val && /^((АТ-[I,II,III,IV,V,VI,VII,VIII,IX,X]{1,4}|ТК-(I|II|III|IV){1,3}) [0-9]{7})$/g.test(val);
}

module.exports = {
    validate: validate,
    generate: generate
};