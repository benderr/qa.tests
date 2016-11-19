'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var superagent = require('superagent');

var config = require('../ogrn.microservice/config');
var ogrnUtility = require('../ogrn.microservice/ogrnUtility');
var api = supertest('http://localhost:' + config.port);
var _it = require('./muttableIt');

describe('Валидация огрн', function () {
    _it('Валидация сервиса для юр.лиц', function (done) {
        var test = ogrnUtility.generate('legal');
        expect(test).to.have.length(13);
        expect(ogrnUtility.validate(test)).to.equal(true);
        done();
        return test;
    });

    _it('Валидация сервиса для ип', function (done) {
        var test = ogrnUtility.generate('ip');
        expect(test).to.have.length(15);
        expect(ogrnUtility.validate(test)).to.equal(true);
        done();
        return test;
    });

    _it('Валидация валидного ип', function (done) {
        expect(ogrnUtility.validate('309213035700032')).to.equal(true);
        done();
        return '309213035700032';
    });

    _it('Валидация валидного юр.лиц', function (done) {
        expect(ogrnUtility.validate('1027700132195')).to.equal(true);
        done();
        return '1027700132195';
    });

    _it('Валидация невалидного ип', function (done) {
        expect(ogrnUtility.validate('309213035700035')).to.equal(false);
        done();
        return '309213035700035';
    });

    _it('Валидация невалидного юр.лиц', function (done) {
        expect(ogrnUtility.validate('1027700132197')).to.equal(false);
        done();
        return '1027700132197'
    });

});
