var dict= require('../core/dictService');
var randomize = require('../core/radomizer');

function generator() {
	var time = dict.getRandomInt(0,86400);
	time = time*1000;
	return new Date(new Date().getTime()+time).toString().slice(16,24);
}
module.exports = {
    generate: generator
};