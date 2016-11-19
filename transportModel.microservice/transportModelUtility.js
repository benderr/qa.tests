var dict= require('../core/dictService');
var transportModels= require('../dict/transportModel');

function transportModelsGenerator() {
    dict.init('transportModel',transportModels)
    return dict.getElement('transportModel');
}

module.exports = {
    generate: transportModelsGenerator
};