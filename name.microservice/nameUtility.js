var random = require('../core/radomizer');


function nameGenerator(lang, sex) {
    var engMale = ["Michael","Nathen","Orson"];
    var engFemale = ["Lucy", "Tifany", "Katty"];
    var rusMale = ["Петя", "Вася", "Ваня"];
    var resFemale = ["Даша", "Маша", "Катя"];

    function getRandomName(typeName) {
    	var i = Math.floor(Math.random() * typeName.length);
    	return typeName[i];
	}

    if (!lang || !sex) {
    	throw 'Not valid params'
    }
    if (lang == 'eng') {
    	if (sex == 'male') {
    		getRandomName(engMale);
    	}
        else if (sex=='female') {
      		getRandomName(engFemale);
        }
    }
 	else if (lang == 'rus') {
        if (sex == 'male') {
        	getRandomName(rusMale);
        }
        else if (sex == 'female'){
        	getRandomName(rusFemale);
        }
    }
}

module.exports = {
    generate: nameGenerator
};