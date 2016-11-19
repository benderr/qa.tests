var dict = require('../core/dictService');

function generator(lang) {
    dict.init('sexEng',['male','female'])
    dict.init('sexRusMale',['мужской','женский'])

    if (!lang) {
    	throw 'Not valid params'
    }
    if (lang == 'eng') {
        return dict.getElement('sexEng')
    }
 	else if (lang == 'rus') {
        return dict.getElement('sexRusMale')
    }
}
module.exports = {
    generate: generator
};