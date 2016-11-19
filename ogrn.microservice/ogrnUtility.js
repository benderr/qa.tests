var random = require('../core/radomizer');

function ogrnGenerator(type) {
    if (type == 'legal') {
        //длина 13 
        var ogrnLegal = random(12);
        var lastCharLegal = getLastChar(ogrnLegal, 11);
        return ogrnLegal + lastCharLegal;
    } else if (type == 'ip') {
        //длина 15
        var ogrnIp = random(14);
        var lastCharIp = getLastChar(ogrnIp, 13);
        return ogrnIp + lastCharIp;
    }
}

function getLastChar(ogrn, delim) {
    var lastChar = ogrn % delim;
    if (lastChar >= 10)
        return lastChar.toString().slice(-1);
    return lastChar;
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