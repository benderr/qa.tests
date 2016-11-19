var random = require('../core/radomizer');

function ogrnGenerator(type) {
    if (type == 'юр') {
        //длина 13 
        random()
    } else if (type == 'ип') {
        //длина 15
        14
    }
}

function isCorrectOgrn(ogrn) {
    function isCorrectOgrn13(ogrn) {
        return ogrn.slice(-1) == (ogrn.slice(0, -1) % 11 + '').slice(-1);
    }

    function isCorrectOgrn15(ogrn) {
        return ogrn.slice(-1) == (ogrn.slice(0, -1) % 13 + '').slice(-1);
    }

    //проверяем длину
    if ((!ogrn) || (ogrn.length != 13 && ogrn.length != 15)) {
        return false;
    }

    //проверяем число ли
    if (!/^\d+$/.test(ogrn)) {
        return false;
    }

    //проверяем контрольную сумму
    if (ogrn.length == 15) {
        return isCorrectOgrn15(ogrn);
    } else {
        return isCorrectOgrn13(ogrn);
    }
}


module.exports = {
    validate: isCorrectOgrn,
    generate: ogrnGenerator
};