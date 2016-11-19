var random = require('../core/radomizer');

function generate() {
    return random(20);
}

function validate(val) {
    return val && val.length == 20;
}

module.exports = {
    validate: validate,
    generate: generate
};