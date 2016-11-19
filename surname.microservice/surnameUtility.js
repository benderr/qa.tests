var dict= require('../core/dictService');
var engmale= require('../dict/engMale');
var engfemale= require('../dict/engFemaleName');
var rusmale= require('../dict/rusMaleName');
var rusfemale= require('../dict/rusFemaleName');

function nameGenerator(lang, sex) {
    dict.init('engMale',engmale);
    dict.init('engFemale',engfemalename);
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