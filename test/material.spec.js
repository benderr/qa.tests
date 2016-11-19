'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../material.microservice/config');
var api = supertest('http://localhost:' + config.port);
var materialUtility = require('../material.microservice/materialUtility');


describe('Проверка материала дома', function () {

    it('Материал', function (done) {
        expect(materialUtility.generate().length>0).to.equal(true);
        done();
    });
});
