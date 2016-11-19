'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var utility = require('../passport.microservice/utility');
var _it = require('./muttableIt');

describe('Проверка данных паспорта', function () {

    _it('Генерация', function (done) {
        var val = utility.generate();
        expect(utility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('Проверка валидатора (валидный)', function (done) {
        var val = '05 10 123456';
        expect(utility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('Проверка валидатора (не валидный)', function (done) {
        var val = '05 АА 123456';
        expect(utility.validate(val)).to.equal(false);
        done();
        return val;
    });
});
