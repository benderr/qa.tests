'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var utility = require('../passportinter.microservice/utility');
var _it = require('./muttableIt');

describe('Проверка данных загран. паспорта', function () {

    _it('Генерация', function (done) {
        var val = utility.generate();
        console.log(val);
        expect(utility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('Проверка валидатора (валидный)', function (done) {
        var val = '20 1234567';
        expect(utility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('Проверка валидатора (валидный)', function (done) {
        var val = '51 1234561';
        expect(utility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('Проверка валидатора (не валидная серия)', function (done) {
        var val = '00 1234560';
        expect(utility.validate(val)).to.equal(false);
        done();
        return val;
    });

    _it('Проверка валидатора (не валидный номер)', function (done) {
        var val = '51 0000000';
        expect(utility.validate(val)).to.equal(false);
        done();
        return val;
    });

    _it('Проверка валидатора (не валидная длина)', function (done) {
        var val = '51 000000';
        expect(utility.validate(val)).to.equal(false);
        done();
        return val;
    });
});
