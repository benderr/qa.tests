var dict= require('../core/dictService');
var streets= require('../dict/streets');

function streetsGenerator() {
    dict.init('streets',streets)
    return dict.getElement('streets');
}

module.exports = {
    generate: streetsGenerator
};