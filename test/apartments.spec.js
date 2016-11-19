'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../apartments.microservice/config');
var api = supertest('http://localhost:' + config.port);
var apartmentsUtility = require('../apartments.microservice/apartmentsUtility');


describe('Проверка состояния квартиры', function () {

    it('Состояние квартиры', function (done) {
        expect(apartmentsUtility.generate().length>0).to.equal(true);
        done();
    });
});
