'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../regions.microservice/config');
var api = supertest('http://localhost:' + config.port);
var regionsUtility = require('../regions.microservice/nationUtility');


describe('Проверка региона', function () {

    it('регион', function (done) {
        expect(regionsUtility.generate().length>0).to.equal(true);
        done();
    });
});
