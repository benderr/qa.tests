/**
 * Created by RobertSabiryanov on 19.11.16.
 */

var random = require('../core/radomizer');

function generator() {
    return random(2) + ':' + random(2)+':'+random(6)+':'+random(3);
}

function isCorrect(value) {
    var	REGEXP=/^\d{2}:\d{2}:\d{6}:\d{3}$/g;
    return REGEXP.test(value);
}

module.exports = {
    validate: isCorrect,
    generate: generator
};