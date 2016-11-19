'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../martial.microservice/config');
var api = supertest('http://localhost:' + config.port);
var martialUtility = require('../martial.microservice/martialUtility');


describe('Проверка права собственности', function () {

    it('Право собственности', function (done) {
        expect(martialUtility.generate().length>0).to.equal(true);
        done();
    });
});
