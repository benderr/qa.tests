'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../phone.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../phone.microservice/utility');


describe('Валидация телефона', function () {
    it('Проверка сервиса', function (done) {
        api.get('/getdata')
            .end(function (err, res) {
                expect(utility.validate(res.text)).to.equal(true);
                done();
            });
    });

    it('Генерация с указанной страной', function (done) {
        api.get('/getdata?country=7')
            .end(function (err, res) {
                expect(res.text.slice(0, 1) == '7').to.equal(true);
                done();
            });
    });

    it('Генерация с указанным городом и страной', function (done) {
        api.get('/getdata?city=123&country=375')
            .end(function (err, res) {
                expect(res.text.slice(0, 6) == '375123').to.equal(true);
                done();
            });
    });

    it('Генерация с указанным городом и страной', function (done) {
        api.get('/getdata?country=+375')
            .end(function (err, res) {
                expect(res.text.slice(0, 3) == '375').to.equal(true);
                done();
            });
    });
});
