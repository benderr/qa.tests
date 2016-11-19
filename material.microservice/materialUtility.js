var dict= require('../core/dictService');
var materials= require('../dict/material');

function materialsGenerator() {
    dict.init('material',materials)
    return dict.getElement('material');
}

module.exports = {
    generate: materialsGenerator
};