/**
 * Created by RobertSabiryanov on 19.11.16.
 */

var random = require('../core/radomizer');

function generator(type) {
    if (type == 'legal') {
        //длина 10
        var innLegal = random(10);
        return innLegal.slice(0, 9) + getInn10Sum(innLegal);
    } else {
        //длина 12
        var innIp = random(10);
        innIp = innIp + '' + getInn12Sum1(innIp);
        var generatedInn = innIp + '' + getInn12Sum2(innIp);
        return generatedInn;
    }
}


function getInn10Sum(INN) {
    var d;
    var factor1 = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    var sum = 0;
    for (var i = 0; i <= 8; i++) {
        d = INN.slice(i, i + 1);
        sum += d * factor1[i];
    }
    sum = sum % 11;
    sum = sum % 10;
    return sum;
}

function getInn12Sum1(INN) {
    var factor2 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    var sum = 0;
    var d;
    for (var i = 0; i <= 9; i++) {
        d = INN.slice(i, i + 1);
        sum += d * factor2[i];
    }
    sum = sum % 11;
    sum = sum % 10;
    return sum;
}
function getInn12Sum2(INN) {
    var factor3 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    var sum2 = 0;
    var d;
    for (var i = 0; i <= 10; i++) {
        d = INN.slice(i, i + 1);
        sum2 += d * factor3[i];
    }
    sum2 = sum2 % 11;
    sum2 = sum2 % 10;
    return sum2;
}

var isCorrectInn = function (INN) {

    var Result = false;

    if (INN.length == 5) {
        Result = true;
    }
    if (INN.length == 0) {
        Result = false;
    }
    else if (INN.length == 10) { //юр лицо
        Result = INN.slice(9, 10) == getInn10Sum(INN);
    }
    else if (INN.length == 12) {//физ лицо и ИП
        Result = INN.slice(10, 11) == getInn12Sum1(INN) &&
            INN.slice(11, 12) == getInn12Sum2(INN);
    }
    return Result;
};

module.exports = {
    validate: isCorrectInn,
    generate: generator
};