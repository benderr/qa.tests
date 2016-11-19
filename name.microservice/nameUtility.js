var dict= require('../core/dictService');
var engmale= require('../dict/engMale');

function nameGenerator(lang, sex) {
    dict.init('engMale',engmale);
    dict.init('engFemale',["Lucy", "Tifany", "Katty"]);
    dict.init('rusMale',["Петя", "Вася", "Ваня"]);
    dict.init('rusFemale',["Даша", "Маша", "Катя"]);

    if (!lang || !sex) {
    	throw 'Not valid params'
    }
    if (lang == 'eng') {
    	if (sex == 'male') {
            return dict.getElement('engMale');
    	}
        else if (sex=='female') {
            return dict.getElement('engFemale');
        }
    }
 	else if (lang == 'rus') {
        if (sex == 'male') {
            return dict.getElement('rusMale');
        }
        else if (sex == 'female'){
            return dict.getElement('rusFemale');
        }
    }
}

module.exports = {
    generate: nameGenerator
};