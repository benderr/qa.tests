var random = require('../core/radomizer');
var countryCodes = require('../dict/countryCodes');

function getRandomCountryCode() {
    return countryCodes[Math.floor(Math.random() * countryCodes.length)];
}

function generate(countryCode, cityCode) {
    countryCode = cleanPhone(countryCode);
    cityCode = cleanPhone(cityCode);

    if (countryCode && !isValidCountryCode(countryCode)) {
        return 'Такого кода страны нет в справочнике сервиса';
    }
    var phone = countryCode ? countryCode : getRandomCountryCode();
    //генерируем свой код оператора если передали не валидный
    phone += cityCode && /^\d*$/.test(cityCode) ? cityCode : random(3);
    phone += random(7);
    return phone;
}

function cleanPhone(phone) {
    return phone ? phone.replace(/[^\d]/, '') : phone;
}

function isValidCountryCode(phone) {
    var state = false;
    if (/^\d*$/.test(phone)) {
        for (var i = 0; i < countryCodes.length; i++) {
            var code = countryCodes[i];
            var fromPhone = phone.slice(0, code.toString().length);
            if (fromPhone == code) {
                state = true;
                break;
            }
        }
    }
    return state;
}


module.exports = {
    generate: generate,
    isValidCountryCode: isValidCountryCode
};