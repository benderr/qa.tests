'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../streets.microservice/config');
var api = supertest('http://localhost:' + config.port);
var streetsUtility = require('../streets.microservice/streetsUtility');


describe('Проверка типа улицы', function () {

    it('Тип улицы', function (done) {
        expect(streetsUtility.generate().length>0).to.equal(true);
        done();
    });
});
