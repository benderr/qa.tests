/**
 * Created by RobertSabiryanov on 19.11.16.
 */

function generator(domain) {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for (var ii = 0; ii < 15; ii++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return string + '@' + domain;
}

function isCorrect(value) {
    var	EMAIL_REGEXP=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9-])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)+$/;
    return EMAIL_REGEXP.test(value);
}

module.exports = {
    validate: isCorrect,
    generate: generator
};