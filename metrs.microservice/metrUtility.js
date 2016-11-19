var dict= require('../core/dictService');
var metrs= require('../dict/metr');

function metrsGenerator() {
    dict.init('metr',metrs)
    return dict.getElement('metr');
}

module.exports = {
    generate: metrsGenerator
};