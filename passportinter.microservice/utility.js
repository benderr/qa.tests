var random = require('../core/radomizer');
var dict = require('../core/dictService');

//допустимые серии номеров для загран. паспортов
//http://zagrandok.ru/pasport/obshhie-voprosy/seriya-i-nomer-zagranpasporta.html
var interpassportSerials = [10, 20, 50, 51, 53, 60, 61, 62, 63, 64, 70, 71, 72];

function generate() {
    dict.init('passportinter', interpassportSerials);
    var serial = dict.getElement('passportinter');
    var number;
    while (!number && number != '0000000') {
        number = random(7);
    }
    return `${serial} ${number}`;
}

function clean(val) {
    return val ? val.replace(/[^\d]/, '') : val;
}

function validate(val) {
    if (!val)
        return false;

    val = clean(val);

    if (val.length != 9)
        return false;

    var serial = val.slice(0, 2);
    var number = val.slice(-7);
    var validSerial = interpassportSerials
            .map(function (item) {
                return item.toString();
            })
            .indexOf(serial) >= 0;

    var validNumber = /^\d{7}$/.test(number) && number != '0000000';
    return validSerial && validNumber;
}

module.exports = {
    validate: validate,
    generate: generate
};