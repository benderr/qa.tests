'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../educationType.microservice/config');
var api = supertest('http://localhost:' + config.port);
var educationTypeUtility = require('../educationType.microservice/educationTypeUtility');


describe('Проверка образования', function () {

    it('Образование', function (done) {
        expect(educationTypeUtility.generate().length>0).to.equal(true);
        done();
    });
});
