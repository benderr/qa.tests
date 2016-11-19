'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../transportType.microservice/config');
var api = supertest('http://localhost:' + config.port);
var transportTypeUtility = require('../transportType.microservice/transportTypeUtility');


describe('Проверка вида транспорта', function () {

    it('Вид транспорта', function (done) {
        expect(transportTypeUtility.generate().length>0).to.equal(true);
        done();
    });
});
