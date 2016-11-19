var dict= require('../core/dictService');
var comments= require('./comments');

function commentsGenerator() {
    dict.init('comment',comments)
    return dict.getElement('comment');
}

module.exports = {
    generate: commentsGenerator
};