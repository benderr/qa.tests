function generate(format) {
    const rnd = Math.floor(Math.random() * 999999999);
    const number = pad('' + rnd, 9, '0');

    var sum = number.split('')
        .map((val, i) => parseInt(val) * (9 - i))
        .reduce((prev, v) => prev + v);

    if (sum > 101) {
        sum = sum % 101
    }

    var checkSum = sum == 100 || sum == 101 ? '00' : pad('' + sum, 2, '0');
    var snilsValue = number + checkSum;


    return format ? addSeparator(snilsValue) : snilsValue;

    function pad(str, len, ch) {
        var length = len - str.length + 1;
        return length > 0 ? new Array(length).join(ch) + str : str
    }

    function addSeparator(val) {
        if (val.length === 0)
            return val;
        var number = val;
        if (val.length > 3)
            number = val.substring(0, 3) + '-' + val.substring(3, 6);
        if (val.length > 6)
            number = number + '-' + val.substring(6, 9);
        if (val.length > 9)
            number = number + ' ' + val.substring(9, 11);
        return number;
    }

}

function validate(snils) {
    snils = snils.replace(/[\s|-]/g, '').replace(/[^0-9]+/g, '');

    if (snils.length != 11 && !/^\d*$/.test(snils)) return false;

    if (snils < 1001998) return false;

    var part = snils.slice(0, 9),
        sum = 0;
    for (var i = 0; i < part.length; i++) {
        sum = sum + part[i] * (part.length - i);
    }
    if (sum < 100 && sum == snils.slice(-2)) {
        return true;
    }
    if (sum == 100 || sum == 101) {
        return '00' == snils.slice(-2);
    }
    if (sum > 101) {
        sum = sum % 101;
        if (sum < 100 && sum == snils.slice(-2)) {
            return true;
        }
        if (sum == 100 || sum == 101) {
            return '00' == snils.slice(-2);
        }
    }
    return false;
}

module.exports = {
    validate: validate,
    generate: generate
};