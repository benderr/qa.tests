'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../kpp.microservice/config');
var api = supertest('http://localhost:' + config.port);
var kppUtility = require('../kpp.microservice/kppUtility');


describe('Валидация кпп', function () {
    it('Валидация сервиса для кпп', function (done) {
        var test = kppUtility.generate();
        expect(test).to.be.a('string');
        expect(kppUtility.validate(test)).to.equal(true);
        done();
    });

    it('Валидация кпп', function (done) {
        expect(kppUtility.validate('775001001')).to.equal(true);
        done();
    });
});
