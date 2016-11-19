var dict= require('../core/dictService');
var engmale= require('../dict/engSurname');
var engfemale= require('../dict/engSurname');
var rusmale= require('../dict/rusMaleSurname');
var rusfemale= require('../dict/rusFemaleSurname');

function nameGenerator(lang, sex) {
    dict.init('engMale',engmale);
    dict.init('engFemale',engfemale);
    dict.init('rusMale',rusmale);
    dict.init('rusFemale',rusfemale);

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