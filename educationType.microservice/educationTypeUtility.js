var dict= require('../core/dictService');
var educationType= require('../dict/educationType');

function educationTypeGenerator() {
    dict.init('educationType',educationType)
    return dict.getElement('educationType');
}

module.exports = {
    generate: educationTypeGenerator
};