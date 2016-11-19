'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var _it = require('./muttableIt');
var config = require('../bik.microservice/config');
var api = supertest('http://localhost:' + config.port);
var bikUtility = require('../bik.microservice/bikUtility');


describe('Валидация БИК', function () {
    _it('Валидация сервиса для бика', function (done) {
        var test = bikUtility.generate();
        expect(test).to.be.a('string');
        expect(bikUtility.validate(test)).to.equal(true);
        done();
        return test;
    });

    _it('Валидация бика', function (done) {
        expect(bikUtility.validate('040173604')).to.equal(true);
        done();
        return 'валидация 040173604';
    });
});
