var dict= require('../core/dictService');
var apartments= require('../dict/apartments');

function apartmentsGenerator() {
    dict.init('apartments',apartments)
    return dict.getElement('apartments');
}

module.exports = {
    generate: apartmentsGenerator
};