'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../email.microservice/emailUtility');


describe('Валидация email', function () {

    it('Валидация email', function (done) {
            expect(utility.validate(utility.generate('mail.ru'))).to.equal(true);
            done();
    });
    it('Валидация пустого', function (done) {
        expect(utility.validate('')).to.equal(false);
        done();
    });
});
