/**
 * Created by RobertSabiryanov on 19.11.16.
 */


function isCorrectInn(inn) {

}
var isCorrectInn = function (INN) {
    var factor1 = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    var factor2 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    var factor3 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    var i = 0;
    var sum = 0;
    var sum2 = 0;
    var Result = false;
    var d;
    if (INN.length == 0) {
        Result = true;
    }
    else if (INN.length == 10) { //юр лицо
        sum = 0;
        for (i = 0; i <= 8; i++) {
            d = INN.slice(i, i + 1);
            sum += d * factor1[i];
        }
        sum = sum % 11;
        sum = sum % 10;
        Result = INN.slice(9, 10) == sum;

    }
    else if (INN.length == 12) {//физ лицо и ИП
        sum = 0;
        for (i = 0; i <= 9; i++) {
            d = INN.slice(i, i + 1);
            sum += d * factor2[i];
        }
        sum = sum % 11;
        sum = sum % 10;
        sum2 = 0;
        for (i = 0; i <= 10; i++) {
            d = INN.slice(i, i + 1);
            sum2 += d * factor3[i];
        }
        sum2 = sum2 % 11;
        sum2 = sum2 % 10;
        Result = INN.slice(10, 11) == sum &&
            INN.slice(11, 12) == sum2;
    }
    return Result;
};

var isCorrectInn10 = function (INN) {
    var factor1 = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    var i = 0;
    var sum = 0;
    var Result = false;
    var d;

    if (INN.length == 10) { //юр лицо
        sum = 0;
        for (i = 0; i <= 8; i++) {
            d = INN.slice(i, i + 1);
            sum += d * factor1[i];
        }
        sum = sum % 11;
        sum = sum % 10;
        Result = INN.slice(9, 10) == sum;
    }
    return Result;
};

var isCorrectInn12 = function (INN) {
    var factor2 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    var factor3 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    var i = 0;
    var sum = 0;
    var sum2 = 0;
    var Result = false;
    var d;
    if (INN.length == 12) {//физ лицо и ИП
        sum = 0;
        for (i = 0; i <= 9; i++) {
            d = INN.slice(i, i + 1);
            sum += d * factor2[i];
        }
        sum = sum % 11;
        sum = sum % 10;
        sum2 = 0;
        for (i = 0; i <= 10; i++) {
            d = INN.slice(i, i + 1);
            sum2 += d * factor3[i];
        }
        sum2 = sum2 % 11;
        sum2 = sum2 % 10;
        Result = INN.slice(10, 11) == sum &&
            INN.slice(11, 12) == sum2;
    }
    return Result;
};