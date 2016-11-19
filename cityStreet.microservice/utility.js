var dict= require('../core/dictService');
var moscow = require('../dict/moscow');
var ufa = require('../dict/ufa');
var kazan = require('../dict/kazan');

function generator(city) {
    dict.init('moscow',moscow);
    dict.init('ufa',ufa);
    dict.init('kazan',kazan);

    if (!city) {
    	throw 'Not valid params'
    }
    if (city == 'moscow') {
        return dict.getElement('moscow')
    }
 	else if (city == 'ufa') {
        return dict.getElement('ufa')
    }
    else if (city == 'kazan') {
        return dict.getElement('kazan')
        }
    }

module.exports = {
    generate: generator
};