var dict= require('../core/dictService');
var colors= require('../dict/color');

function colorsGenerator() {
    dict.init('color',colors)
    return dict.getElement('color');
}

module.exports = {
    generate: colorsGenerator
};