'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var _it = require('./muttableIt');
var utility = require('../birthcert.microservice/utility');


describe('Валидация Свидетельства о рождении', function () {
    _it('Генерация', function (done) {
        var test = utility.generate();
        console.log(test);
        expect(utility.validate(test)).to.equal(true);
        done();
        return test;
    });

    _it('Проверка валидатора (валидное значение)', function (done) {
        expect(utility.validate('I-СН 457184')).to.equal(true);
        done();
        return 'валидация I-СН 457184';
    });

    _it('Проверка валидатора (валидное значение)', function (done) {
        expect(utility.validate('III-ВВ 457111')).to.equal(true);
        done();
        return 'валидация III-ВВ 457111';
    });

    _it('Проверка валидатора (валидное значение)', function (done) {
        expect(utility.validate('IV-АВ 457184')).to.equal(true);
        done();
        return 'валидация IV-АВ 457184';
    });

    _it('Проверка валидатора (валидное значение)', function (done) {
        expect(utility.validate('IX-СС 564754')).to.equal(true);
        done();
        return 'валидация IX-СС 564754';
    });

    _it('Проверка валидатора (не валидное значение)', function (done) {
        expect(utility.validate('1-СН 457184')).to.equal(false);
        done();
        return 'валидация 1-СН 457184';
    });
});
