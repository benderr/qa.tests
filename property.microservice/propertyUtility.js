var dict= require('../core/dictService');
var properties= require('../dict/property');

function propertiesGenerator() {
    dict.init('property',properties)
    return dict.getElement('property');
}

module.exports = {
    generate: propertiesGenerator
};