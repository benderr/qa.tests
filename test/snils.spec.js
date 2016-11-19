'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../snils.microservice/config');
var api = supertest('http://localhost:' + config.port);
var snilsUtility = require('../snils.microservice/snilsUtility');


describe('Валидация снилс', function () {

    it('Валидация снилс', function (done) {
            expect(snilsUtility.validate('tbgtbhtdsad')).to.equal(true);
            done();
    });
});
