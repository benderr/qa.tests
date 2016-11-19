'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../metrs.microservice/config');
var api = supertest('http://localhost:' + config.port);
var metrUtility = require('../metrs.microservice/metrUtility');


describe('Проверка единиц измерения', function () {

    it('Единицы измерения', function (done) {
        expect(metrUtility.generate().length>0).to.equal(true);
        done();
    });
});
