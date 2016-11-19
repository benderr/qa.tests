'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../bik.microservice/config');
var api = supertest('http://localhost:' + config.port);
var bikUtility = require('../bik.microservice/bikUtility');


describe('Валидация кпп', function () {
    it('Валидация сервиса для бика', function (done) {
        api.get('/getdata')
            .end(function (err, res) {
                expect(bikUtility.validate(res.text)).to.equal(true);
                done();
            });
    });

    it('Валидация бика', function (done) {
        expect(bikUtility.validate('040173604')).to.equal(true);
        done();
    });
});
