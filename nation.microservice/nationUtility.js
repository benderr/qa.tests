var dict= require('../core/dictService');
var nations= require('./nation');

function nationsGenerator() {
    dict.init('nation',nations)
    return dict.getElement('nation');
}

module.exports = {
    generate: nationsGenerator
};