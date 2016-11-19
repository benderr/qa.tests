'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../snils.microservice/config');
var api = supertest('http://localhost:' + config.port);
var snilsUtility = require('../snils.microservice/snilsUtility');
var _it = require('./muttableIt');

describe('Валидация снилс', function () {

    _it('Генерация снилс', function (done) {
        var val = snilsUtility.generate(false)
        expect(snilsUtility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('Проверка контрольной суммы для верного снилс', function (done) {
        expect(snilsUtility.validate('11223344595')).to.equal(true);
        done();
        return '11223344595';
    });

    _it('Проверка контрольной суммы для неверного снилс', function (done) {
        expect(snilsUtility.validate('11223344591')).to.equal(false);
        done();
        return '11223344591';
    });
});
