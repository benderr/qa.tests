var dict= require('../core/dictService');
var cities= require('../dict/city');

function citiesGenerator() {
    dict.init('city',cities)
    return dict.getElement('city');
}

module.exports = {
    generate: citiesGenerator
};