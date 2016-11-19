'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../martial.microservice/config');
var api = supertest('http://localhost:' + config.port);
var nameUtility = require('../martial.microservice/nameUtility');


describe('Проверка региона', function () {

    it('регион', function (done) {
        expect(martialUtility.generate().length>0).to.equal(true);
        done();
    });
});
