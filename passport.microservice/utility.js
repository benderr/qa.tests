var random = require('../core/radomizer');
var dict = require('../core/dictService');

function generate() {
    var number = random(6);
    var serialOkato = random(2);
    var serialYear = dict.getRandomInt(1986, 2016).toString().slice(-2);
    return `${serialOkato} ${serialYear} ${number}`;
}

function validate(val) {
    return val && /^[0-9]{2} [0-9]{2} [0-9]{6}$/.test(val);
}

module.exports = {
    validate: validate,
    generate: generate
};