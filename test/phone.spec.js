'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../phone.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../phone.microservice/utility');

function validate(phone) {
    //проверка только на минимальную длину {страна(длина 1)}{код оператора/города(длина1)}{номер длина 7}
    //и наличия валидного кода страны
    phone = cleanPhone(phone);
    return phone && phone.length >= 9 && utility.isValidCountryCode(phone);
}

function cleanPhone(phone) {
    return phone ? phone.replace(/[^\d]/, '') : phone;
}

describe('Валидация телефона', function () {
    it('Проверка сервиса', function (done) {
        var test = utility.generate();
        expect(validate(test)).to.equal(true);
        done();
    });

    it('Генерация с указанной страной', function (done) {
        var test = utility.generate('7');
        expect(test.slice(0, 1) == '7').to.equal(true);
        expect(validate(test)).to.equal(true);
        done();
    });

    it('Генерация с указанным городом и страной', function (done) {
        var test = utility.generate('375', '123');
        expect(test.slice(0, 6) == '375123').to.equal(true);
        done();
    });

    it('Генерация с указанным городом и страной (со спец. символами)', function (done) {
        var test = utility.generate('+375');
        expect(test.slice(0, 3) == '375').to.equal(true);
        done();
    });
});
