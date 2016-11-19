var dict= require('../core/dictService');

function generator() {
    return dict.getRandomInt(150000,700000);
}

module.exports = {
    generate: generator
};