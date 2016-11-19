'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../transportModel.microservice/config');
var api = supertest('http://localhost:' + config.port);
var transportModelUtility = require('../transportModel.microservice/transportModelUtility');


describe('Проверка марки транспорта', function () {

    it('Марка транспорта', function (done) {
        expect(transportModelUtility.generate().length>0).to.equal(true);
        done();
    });
});
