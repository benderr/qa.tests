var dict= require('../core/dictService');
var randomize = require('../core/radomizer');

function generator() {
	return randomize(4);
}
module.exports = {
    generate: generator
};