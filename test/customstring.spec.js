'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var utility = require('../customstring.microservice/utility');
var _it = require('./muttableIt');

describe('Проверка получения случайного значения из переданных', function () {

    _it('Получение случайной строки - вар. 1', function (done) {
        var optionsStr = '123456';
        var val = utility.getString(optionsStr, 3);
        expect(val).to.have.length(3);
        done();
        return val;
    });

    _it('Получение случайной строки - вар. 2', function (done) {
        var optionsStr = 'absdergtidsq';
        var val = utility.getString(optionsStr, 4);
        expect(val).to.have.length(4);
        done();
        return val;
    });

    _it('Получение случайной строки - вар. 3', function (done) {
        var optionsStr = 'яфйчыцсвумакипе';
        var val = utility.getString(optionsStr, '6');
        expect(val).to.have.length(6);
        done();
        return val;
    });
});
