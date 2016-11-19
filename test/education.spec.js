'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../education.microservice/config');
var api = supertest('http://localhost:' + config.port);
var educationUtility = require('../education.microservice/educationUtility');


describe('Проверка региона', function () {

    it('регион', function (done) {
        expect(educationUtility.generate().length>0).to.equal(true);
        done();
    });
});
