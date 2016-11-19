'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var innUtility = require('../inn.microservice/innUtility');
var _it = require('./muttableIt');

describe('Валидация инн', function () {

    _it('для ИП', function (done) {
        var inn = innUtility.generate('ip').toString();
        expect(innUtility.validate(inn)).to.equal(true);
        done();
        return inn;
    });

    _it('для Юрлица', function (done) {
        var inn = innUtility.generate('legal');
        expect(innUtility.validate(inn)).to.equal(true);
        done();
        return inn;
    });

    _it('для резидента', function (done) {
        expect(innUtility.validate('12345')).to.equal(true);
        done();
        return 'значение инн 12345';
    });

    _it('Валидация пустого', function (done) {
        expect(innUtility.validate('')).to.equal(false);
        done();
    });
});
