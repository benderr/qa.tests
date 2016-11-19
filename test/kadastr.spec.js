'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../kadastr.microservice/kadastrUtility');


describe('Валидация кадастрового номера', function () {

    it('Валидация кадастрового номера', function (done) {
            expect(utility.validate(utility.generate())).to.equal(true);
            done();
    });
    it('Валидация пустого', function (done) {
        expect(utility.validate('')).to.equal(false);
        done();
    });
});
