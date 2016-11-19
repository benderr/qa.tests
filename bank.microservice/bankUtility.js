var dict= require('../core/dictService');
var banks= require('../dict/bank');

function banksGenerator() {
    dict.init('bank',banks)
    return dict.getElement('bank');
}

module.exports = {
    generate: banksGenerator
};