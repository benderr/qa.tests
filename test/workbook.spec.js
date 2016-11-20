'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var _it = require('./muttableIt');
var utility = require('../workbook.microservice/utility');


describe('Валидация cерия номер трудовой книжки', function () {
    _it('Генерация', function (done) {
        var test = utility.generate();
        expect(utility.validate(test)).to.equal(true);
        done();
        return test;
    });

    _it('Проверка валидатора (валидное значение)', function (done) {
        expect(utility.validate('АТ-IV 4571841')).to.equal(true);
        done();
        return 'валидация АТ-IV 4571841';
    });

    _it('Проверка валидатора (валидное значение)', function (done) {
        expect(utility.validate('ТК-III 4571112')).to.equal(true);
        done();
        return 'валидация ТК-III 4571112';
    });


    _it('Проверка валидатора (не валидное значение)', function (done) {
        expect(utility.validate('ТК-III 457184')).to.equal(false);
        done();
        return 'валидация ТК-III 457184';
    });

    _it('Проверка валидатора (не валидное значение, ТК предусматривает римские от 1 до 4)', function (done) {
        expect(utility.validate('ТК-V 4344344')).to.equal(false);
        done();
        return 'валидация ТК-V 4344344';
    });
});
