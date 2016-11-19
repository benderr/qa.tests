var dict= require('../core/dictService');
var educations= require('../dict/education');

function educationsGenerator() {
    dict.init('education',educations)
    return dict.getElement('education');
}

module.exports = {
    generate: educationsGenerator
};