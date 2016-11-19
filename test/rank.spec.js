'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../rank.microservice/config');
var api = supertest('http://localhost:' + config.port);
var rankUtility = require('../rank.microservice/rankUtility');


describe('Проверка звания', function () {

    it('Звание', function (done) {
        expect(rankUtility.generate().length>0).to.equal(true);
        done();
    });
});
