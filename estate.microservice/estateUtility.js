var dict= require('../core/dictService');
var estate= require('../dict/estate');

function estateGenerator() {
    dict.init('estate',estate)
    return dict.getElement('estate');
}

module.exports = {
    generate: estateGenerator
};