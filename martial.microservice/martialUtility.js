var dict= require('../core/dictService');
var martials= require('../dict/martial');

function martialsGenerator() {
    dict.init('martial',martials)
    return dict.getElement('martial');
}

module.exports = {
    generate: martialsGenerator
};