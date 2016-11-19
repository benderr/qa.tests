var random = require('../core/radomizer');

function generate() {
    return random(9);
}

function validate(val) {
    return val && val.length == 9;
}

module.exports = {
    validate: validate,
    generate: generate
};