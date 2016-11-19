var dict= require('../core/dictService');
var transportTypes= require('../dict/transportType');

function transportTypesGenerator() {
    dict.init('transportType',transportTypes)
    return dict.getElement('transportType');
}

module.exports = {
    generate: transportTypesGenerator
};