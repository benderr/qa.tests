'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../kadastr.microservice/kadastrUtility');
var _it = require('./muttableIt');

describe('Валидация кадастрового номера', function () {

    _it('генерация', function (done) {
        var val = utility.generate();
        expect(utility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('проверка валидатора', function (done) {
        var val = '57:02:0036003:54';
        expect(utility.validate(val)).to.equal(true);
        done();
        return val;
    });

    _it('проверка валидатора не верный формат', function (done) {
        var val = '57:012:10036003:54';
        expect(utility.validate(val)).to.equal(false);
        done();
        return val;
    });
});
