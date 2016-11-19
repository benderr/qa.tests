var dict= require('../core/dictService');
var relation= require('../dict/relation');

function relationGenerator() {
    dict.init('relation',relation)
    return dict.getElement('relation');
}

module.exports = {
    generate: relationGenerator
};