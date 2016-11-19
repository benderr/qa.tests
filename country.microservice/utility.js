var dict= require('../core/dictService');
var shortcountry = require('../dict/shortcountry');
var fullcountry = require('../dict/fullcountry');

function generator(country) {
    dict.init('shortcountry',shortcountry);
    dict.init('fullcountry',fullcountry);

    if (!country) {
    	throw 'Not valid params'
    }
    if (country == 'shortcountry') {
        return dict.getElement('shortcountry')
    }
 	else if (country == 'fullcountry') {
        return dict.getElement('fullcountry')
    }
}
module.exports = {
    generate: generator
};