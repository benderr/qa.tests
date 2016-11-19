'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../apartments.microservice/config');
var api = supertest('http://localhost:' + config.port);
var apartmentsUtility = require('../apartments.microservice/utility');


describe('Проверка состояния квартиры', function () {

    it('Состояние квартиры', function (done) {
        expect(utility.generate().length>0).to.equal(true);
        done();
    });
});
