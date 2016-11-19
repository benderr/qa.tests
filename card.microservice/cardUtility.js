var visaPrefixList = [
    "4539",
    "4556",
    "4916",
    "4532",
    "4929",
    "40240071",
    "4485",
    "4716",
    "4"
];

var mastercardPrefixList = [
    "51",
    "52",
    "53",
    "54",
    "55"
];

var amexPrefixList = [
    "34",
    "37"
];

var discoverPrefixList = ["6011"];

var dinersPrefixList = [
    "300",
    "301",
    "302",
    "303",
    "36",
    "38"
];

var enRoutePrefixList = [
    "2014",
    "2149"
];

var jcbPrefixList16 = [
    "3088",
    "3096",
    "3112",
    "3158",
    "3337",
    "3528"
];

var jcbPrefixList15 = [
    "2100",
    "1800"
];

var voyagerPrefixList = ["8699"];


function strrev(str) {
    if (!str) return '';
    var revstr = '';
    for (i = str.length - 1; i >= 0; i--)
        revstr += str.charAt(i)
    return revstr;
}

/**
 'prefix' - префикс эмитента
 'length' - длина номера карты
 */
function completed_number(prefix, length) {
    var ccnumber = prefix;

    while (ccnumber.length < (length - 1)) {
        ccnumber += Math.floor(Math.random() * 10);
    }

    var reversedCCnumberString = strrev(ccnumber);

    var reversedCCnumber = [];
    for (var i = 0; i < reversedCCnumberString.length; i++) {
        reversedCCnumber[i] = parseInt(reversedCCnumberString.charAt(i));
    }

    var sum = 0;
    var pos = 0;

    while (pos < length - 1) {

        var odd = reversedCCnumber[pos] * 2;
        if (odd > 9) {
            odd -= 9;
        }

        sum += odd;

        if (pos != (length - 2)) {

            sum += reversedCCnumber[pos + 1];
        }
        pos += 2;
    }

    var checkdigit = (( Math.floor(sum / 10) + 1) * 10 - sum) % 10;
    ccnumber += checkdigit;

    return ccnumber;

}

var prefixList = visaPrefixList
    .concat(mastercardPrefixList)
    .concat(amexPrefixList)
    .concat(discoverPrefixList)
    .concat(dinersPrefixList)
    .concat(enRoutePrefixList)
    .concat(jcbPrefixList16)
    .concat(jcbPrefixList15)
    .concat(voyagerPrefixList);

function generate() {
    var randomArrayIndex = Math.floor(Math.random() * prefixList.length);
    var ccnumber = prefixList[randomArrayIndex];
    return completed_number(ccnumber, 16);
}
function validate(value) {
    //кэффциенты: четные номера карты 2, нечетные - 1
    var sum = value.split('').reduce(function (prev, cur, i) {
        var coef = i % 2 == 0 ? 2 : 1;
        sum = cur * coef;
        if (sum > 9)
            sum = sum - 9;
        return prev + sum;
    }, 0);
    return sum.toString().slice(-1) == '0';
}

module.exports = {
    validate: validate,
    generate: generate
};