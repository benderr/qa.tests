'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var innUtility = require('../inn.microservice/innUtility');


describe('Валидация инн для юр лица', function () {

    it('Валидация инн ИП', function (done) {
            expect(innUtility.validate(innUtility.generate('ip'))).to.equal(true);
            done();
    });
    it('Валидация инн Юрлица', function (done) {
        expect(innUtility.validate(innUtility.generate('legal'))).to.equal(true);
        done();
    });
    it('Валидация резидент', function (done) {
        expect(innUtility.validate('12345')).to.equal(true);
        done();
    });
    it('Валидация пустого', function (done) {
        expect(innUtility.validate('')).to.equal(false);
        done();
    });
});
