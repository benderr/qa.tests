/**
 * Created by RobertSabiryanov on 19.11.16.
 */
var dictService = require('../core/dictService');

function formatddMMyyyy(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yyyy = date.getFullYear();

    return dd + '.' + mm + '.' + yyyy;
}

function formatddMMyy(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

function generator(mask) {

    var date= new Date(dictService.getRandomInt(2000,2099),dictService.getRandomInt(0,11),dictService.getRandomInt(1,30));
    if (mask === 'ddMMyyyy')
        return formatddMMyyyy(date);
    if (mask === 'ddMMyy')
        return formatddMMyy(date);
    date= new Date();
    if (mask == 'today')
        return formatddMMyyyy(date);
    if (mask == 'tomorrow')
        return formatddMMyyyy(new Date(date.getTime() + 1000 * 60 * 60 * 24));
    if (mask == 'yesterday')
        return formatddMMyyyy(new Date(date.getTime() - 1000 * 60 * 60 * 24));
    if (Number.isInteger(mask)) {
        return formatddMMyyyy(new Date(date.getTime() + 1000 * 60 * 60 * 24 * mask));
    }
}

function isCorrect(value) {
    var EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9-])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)+$/;
    return EMAIL_REGEXP.test(value);
}

module.exports = {
    validate: isCorrect,
    generate: generator
};