var dict= require('../core/dictService');

var engnamemale= require('../dict/engMaleName');
var engsurnamemale= require('../dict/engSurname');
var engmidnamemale= require('../dict/engMaleMiddleName');

var engnamefemale= require('../dict/engFemaleName');
var engsurnamefemale= require('../dict/engSurname');
var engmidnamefemale= require('../dict/engFemaleMiddleName');

var rusnamemale= require('../dict/rusMaleName');
var russurnamemale= require('../dict/rusMaleSurname');
var rusmidnamemale= require('../dict/rusMaleMiddleName');

var rusnamefemale= require('../dict/rusFemaleName');
var russurnamefemale= require('../dict/rusFemaleSurname');
var rusmidnamefemale= require('../dict/rusFemaleMiddleName');

function nameGenerator(lang, sex) {
    dict.init('engnamemale',engnamemale);
    dict.init('engsurnamemale',engsurnamemale);
    dict.init('engmidnamemale',engmidnamemale);

    dict.init('engnamefemale',engnamefemale);
    dict.init('engsurnamefemale',engsurnamefemale);
    dict.init('engmidnamefemale',engmidnamefemale);

    dict.init('rusnamemale',rusnamemale);
    dict.init('russurnamemale',russurnamemale);
    dict.init('rusmidnamemale',rusmidnamemale);

    dict.init('rusnamefemale',rusnamefemale);
    dict.init('russurnamefemale',russurnamefemale);
    dict.init('rusmidnamefemale',rusmidnamefemale);

    if (!lang || !sex) {
    	throw 'Not valid params'
    }
    if (lang == 'eng') {
    	if (sex == 'male') {
            var text = dict.getElement('engsurnamemale');
            var text2 = dict.getElement('engnamemale');
            var text3 = dict.getElement('engmidnamemale');
            var result = text + ' ' + text2 + ' ' + text3;
            return result;
    	}
        else if (sex=='female') {
            var text = dict.getElement('engsurnamefemale');
            var text2 = dict.getElement('engnamefemale');
            var text3 = dict.getElement('engmidnamefemale');
            var result = text + ' ' + text2 + ' ' + text3;
            return result;
        }
    }
 	else if (lang == 'rus') {
        if (sex == 'male') {
            var text = dict.getElement('russurnamemale');
            var text2 = dict.getElement('rusnamemale');
            var text3 = dict.getElement('rusmidnamemale');
            var result = text + ' ' + text2 + ' ' + text3;
            return result;
        }
        else if (sex == 'female'){
            var text = dict.getElement('russurnamefemale');
            var text2 = dict.getElement('rusnamefemale');
            var text3 = dict.getElement('rusmidnamefemale');
            var result = text + ' ' + text2 + ' ' + text3;
            return result;
        }
    }
}

module.exports = {
    generate: nameGenerator
};