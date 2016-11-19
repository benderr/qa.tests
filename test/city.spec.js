'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../city.microservice/config');
var api = supertest('http://localhost:' + config.port);
var cityUtility = require('../city.microservice/cityUtility');


describe('Проверка региона', function () {

    it('регион', function (done) {
        expect(cityUtility.generate().length>0).to.equal(true);
        done();
    });
});
