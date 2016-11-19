function getRandom(size) {
    var val = "";
    for (var i = 0; i < size; i++) {
        val = "" + val + getRandomVal(0, 9);
    }
    // //заполняем нулями недостающие цифры
    // if (size && size > 0) {
    //     return pad(num, size);
    // }
    return val;
}

function getRandomVal(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

module.exports = getRandom;