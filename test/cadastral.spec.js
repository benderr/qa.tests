'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../cadastral.microservice/config');
var api = supertest('http://localhost:' + config.port);
var cadastralUtility = require('../cadastral.microservice/cadastralUtility');


describe('Валидация кадастрового номера', function () {

    it('Валидация кадастрового номера', function (done) {
            expect(cadastralUtility.validate('tbgtbhtdsad')).to.equal(true);
            done();
    });
});
