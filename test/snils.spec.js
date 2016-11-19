'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../snils.microservice/config');
var api = supertest('http://localhost:' + config.port);
var snilsUtility = require('../snils.microservice/snilsUtility');


describe('Валидация снилс', function () {

    it('Валидация сервиса', function (done) {
        api.get('/getdata')
            .end(function (err, res) {
                expect(res.text).to.have.length(11);
                expect(snilsUtility.validate(res.text)).to.equal(true);
                done();
            });
    });

    it('Генарация снилс', function (done) {
        expect(snilsUtility.generate(false)).to.have.length(11);
        done();
    });

    it('Валидация верного снилс', function (done) {
        expect(snilsUtility.validate('11223344595')).to.equal(true);
        done();
    });

    it('Валидация неверного снилс', function (done) {
        expect(snilsUtility.validate('11223344591')).to.equal(false);
        done();
    });
});
