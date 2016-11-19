var random = require('../core/radomizer');
var dict = require('../core/dictService');

function generate() {
    dict.init('latinwords', [
        'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'х'
    ]);

    dict.init('romannumbers', [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'IX'
    ]);

    var roman = dict.getElement('romannumbers');
    var word1 = dict.getElement('latinwords').toUpperCase();
    var word2 = dict.getElement('latinwords').toUpperCase();
    var number = random(6);
    return `${roman}-${word1}${word2} ${number}`;
}

function validate(val) {
    return val && /^([I,II,III,IV,V,VI,VII,IX]{1,3}-[А-Я]{2} [0-9]{6})$/g.test(val);
}

module.exports = {
    validate: validate,
    generate: generate
};