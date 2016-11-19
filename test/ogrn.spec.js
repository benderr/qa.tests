'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var superagent = require('superagent');

var config = require('../ogrn.microservice/config');
var ogrnUtility = require('../ogrn.microservice/ogrnUtility');
var api = supertest('http://localhost:' + config.port);


describe('Валидация огрн', function () {
    it('Валидация сервиса для юр.лиц', function (done) {
        var test = ogrnUtility.generate('legal');
        expect(test).to.have.length(13);
        expect(ogrnUtility.validate(test)).to.equal(true);
        done();
    });

    it('Валидация сервиса для ип', function (done) {
        var test = ogrnUtility.generate('ip');
        expect(test).to.have.length(15);
        expect(ogrnUtility.validate(test)).to.equal(true);
        done();
    });

    it('Валидация валидного ип', function (done) {
        expect(ogrnUtility.validate('309213035700032')).to.equal(true);
        done();
    });

    it('Валидация валидного юра', function (done) {
        expect(ogrnUtility.validate('1027700132195')).to.equal(true);
        done();
    });

    it('Валидация невалидного ип', function (done) {
        expect(ogrnUtility.validate('309213035700035')).to.equal(false);
        done();
    });

    it('Валидация невалидного юра', function (done) {
        expect(ogrnUtility.validate('1027700132197')).to.equal(false);
        done();
    });

});
