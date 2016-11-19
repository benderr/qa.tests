var dict= require('../core/dictService');
var cardtypes= require('../dict/cardtype');

function cardtypesGenerator() {
    dict.init('cardtype',cardtypes)
    return dict.getElement('cardtype');
}

module.exports = {
    generate: cardtypesGenerator
};