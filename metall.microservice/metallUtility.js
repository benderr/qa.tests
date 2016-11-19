var dict= require('../core/dictService');
var metalls= require('../dict/metall');

function metallsGenerator() {
    dict.init('metall',metalls)
    return dict.getElement('metall');
}

module.exports = {
    generate: metallsGenerator
};