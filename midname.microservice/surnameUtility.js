var dict= require('../core/dictService');
var engmale= require('../dict/engMaleMiddleName');
var engfemale= require('../dict/engFemaleMiddleName');
var rusmale= require('../dict/rusMaleMiddleName');
var rusfemale= require('../dict/rusFemaleMiddleName');

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