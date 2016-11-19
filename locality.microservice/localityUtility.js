var dict= require('../core/dictService');
var localities= require('../dict/locality');

function localitiesGenerator() {
    dict.init('locality',localities)
    return dict.getElement('locality');
}

module.exports = {
    generate: localitiesGenerator
};