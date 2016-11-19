var dict= require('../core/dictService');
var shortname = require('../dict/shortname');
var fullname = require('../dict/fullname');

function generator(city) {
    dict.init('shortname',shortname);
    dict.init('fullname',fullname);

    if (!city) {
    	throw 'Not valid params'
    }
    if (city == 'shortname') {
        return dict.getElement('shortname')
    }
 	else if (city == 'fullname') {
        return dict.getElement('fullname')
    }
}
module.exports = {
    generate: generator
};