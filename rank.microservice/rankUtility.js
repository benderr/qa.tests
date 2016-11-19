var dict= require('../core/dictService');
var rank= require('../dict/rank');

function rankGenerator() {
    dict.init('rank',rank)
    return dict.getElement('rank');
}

module.exports = {
    generate: rankGenerator
};