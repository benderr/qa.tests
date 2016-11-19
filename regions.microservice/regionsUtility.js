var dict= require('../core/dictService');
var regions= require('../dict/regions');

function regionsGenerator() {
    dict.init('region',regions)
    return dict.getElement('region');
}

module.exports = {
    generate: regionsGenerator
};