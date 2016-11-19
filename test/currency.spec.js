'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../name.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../currency.microservice/currencyUtility');


describe('Проверка имени', function () {

    it('Язык Английский', function (done) {
        expect(utility.generate('en').length>0).to.equal(true);
        done();
    });
    it('Язык Русский', function (done) {
        expect(utility.generate('ru').length>0).to.equal(true);
        done();
    });
    it('Символ', function (done) {
        expect(utility.generate(null, 1).length>0).to.equal(true);
        done();
    });
    it('Сокращение', function (done) {
        expect(utility.generate('en').length>0).to.equal(true);
        done();
    });
});
