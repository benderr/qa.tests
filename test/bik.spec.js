'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../bik.microservice/config');
var api = supertest('http://localhost:' + config.port);
var bikUtility = require('../bik.microservice/bikUtility');


describe('Валидация кпп', function () {
    it('Валидация сервиса для бика', function (done) {
        var test = bikUtility.generate();
        expect(test).to.be.a('string');
        expect(bikUtility.validate(test)).to.equal(true);
        done();
    });

    it('Валидация бика', function (done) {
        expect(bikUtility.validate('040173604')).to.equal(true);
        done();
    });
});
