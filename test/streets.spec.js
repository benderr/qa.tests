'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../streets..microservice/config');
var api = supertest('http://localhost:' + config.port);
var streets.Utility = require('../streets..microservice/streets.Utility');


describe('Проверка семейного положения', function () {

    it('Семейное положение', function (done) {
        expect(streets.Utility.generate().length>0).to.equal(true);
        done();
    });
});
