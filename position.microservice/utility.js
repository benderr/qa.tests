var dict= require('../core/dictService');
var diction= require('../dict/position');

function generator() {
    dict.init('dictions',diction)
    return dict.getElement('dictions');
}

module.exports = {
    generate: generator
};