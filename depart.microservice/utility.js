var dict= require('../core/dictService');

function generator() {
	var text = dict.getRandomInt(100,1000);
	var text2 = dict.getRandomInt(100,1000);
	var result = text + '-' + text2;
	return result
}
module.exports = {
    generate: generator
};