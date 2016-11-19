var dict= require('../core/dictService');
var randomize = require('../core/radomizer');

function generator() {
	var text = randomize(3);
	var text2 = randomize(3);
	var result = text + '-' + text2;
	return result
}
module.exports = {
    generate: generator
};