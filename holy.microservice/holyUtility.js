var dict= require('../core/dictService');
var holies= require('../dict/holy');

function holiesGenerator() {
    dict.init('holy',holies)
    return dict.getElement('holy');
}

module.exports = {
    generate: holiesGenerator
};