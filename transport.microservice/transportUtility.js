var random = require('../core/radomizer');

var validWords = ['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']
function getRandomWord() {
    return validWords[Math.floor(Math.random() * validWords.length)];
}

function getRandomRegion() {
    var regionSize = Math.floor(Math.random() * 2) + 1;
    var region = getRandomNumber(regionSize);
    if (region < 10)
        region = pad(region, 2);
    return region;
}

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function getRandomNumber(size) {
    var num;
    while (!num && /^.*[1-9].*$/.test(num) == false) { //чтобы не было 000
        num = random(size);
    }
    return num;
}

function generate(type) {
    switch (type) {
        case 'auto':
            return `${getRandomWord()}${getRandomNumber(3)}${getRandomWord()}${getRandomWord()}${getRandomRegion()}`;
        case 'taxi':
            return `${getRandomNumber(3)}${getRandomWord()}${getRandomWord()}${getRandomRegion()}`;
        case 'trailer':
            return `${getRandomWord()}${getRandomWord()}${getRandomNumber(4)}${getRandomRegion()}`;
        case 'moto':
            return `${getRandomNumber(4)}${getRandomWord()}${getRandomWord()}${getRandomRegion()}`;
        case 'tractor':
            return `${getRandomNumber(4)}${getRandomWord()}${getRandomWord()}${getRandomRegion()}`;
        case 'tranzit':
            return `${getRandomWord()}${getRandomWord()}${getRandomNumber(3)}${getRandomWord()}${getRandomRegion()}`;
        case 'exit':
            //Регистрационные знаки транспортных средств, окончательно выезжающих за пределы
            return `Т${getRandomWord()}${getRandomWord()}${getRandomNumber(3)}${getRandomRegion()}`;
        case 'mvd':
            return `${getRandomWord()}${getRandomNumber(4)}${getRandomRegion()}`;
        case 'military':
            return `${getRandomNumber(4)}${getRandomWord()}${getRandomWord()}${getRandomRegion()}`;
        default:
            throw 'Not valid transport type'
    }
}

function validate(val, type) {
    switch (type) {
        case 'auto':
            return /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}(\d{2}|\d{3})$/.test(val);
        case 'taxi':
            return /^[АВЕКМНОРСТУХ]{2}\d{3}(\d{2}|\d{3})$/.test(val);
        case 'trailer':
            return /^[АВЕКМНОРСТУХ]{2}\d{4}(\d{2}|\d{3})$/.test(val);
        case 'moto':
            return /^\d{4}[АВЕКМНОРСТУХ]{2}(\d{2}|\d{3})$/.test(val);
        case 'tractor':
            return /^\d{4}[АВЕКМНОРСТУХ]{2}(\d{2}|\d{3})$/.test(val);
        case 'tranzit':
            return /^[АВЕКМНОРСТУХ]{2}\d{3}[АВЕКМНОРСТУХ](\d{2}|\d{3})$/.test(val);
        case 'exit':
            //Регистрационные знаки транспортных средств, окончательно выезжающих за пределы
            return /^Т[АВЕКМНОРСТУХ]{2}\d{3}(\d{2}|\d{3})$/.test(val);
        case 'mvd':
            return /^[АВЕКМНОРСТУХ]\d{4}(\d{2}|\d{3})$/.test(val);
        case 'military':
            return /^\d{4}[АВЕКМНОРСТУХ]{2}(\d{2}|\d{3})$/.test(val);
        default:
            throw 'Not valid transport type'
    }
}


module.exports = {
    validate: validate,
    generate: generate
};