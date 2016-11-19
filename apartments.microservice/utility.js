var dict= require('../core/dictService');
var diction= require('../dict/apartments');

function generator() {
    dict.init('dictions',diction)
    return dict.getElement('dictions');
}

module.exports = {
    generate: generator
};