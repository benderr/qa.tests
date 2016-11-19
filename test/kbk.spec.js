'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../kbk.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../kbk.microservice/utility');


describe('Валидация КБК', function () {
    it('Валидация сервиса для КБК', function (done) {
        api.get('/getdata')
            .end(function (err, res) {
                expect(utility.validate(res.text)).to.equal(true);
                done();
            });
    });

    it('Валидация КБК', function (done) {
        expect(utility.validate('02011402015010000410')).to.equal(true);
        done();
    });

    it('Генерация КБК', function (done) {
        expect(utility.generate()).to.have.length(20);
        done();
    });
});
