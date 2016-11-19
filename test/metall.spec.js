'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../metall.microservice/config');
var api = supertest('http://localhost:' + config.port);
var metallUtility = require('../metall.microservice/metallUtility');


describe('Проверка металла', function () {

    it('Металл', function (done) {
        expect(metallUtility.generate().length>0).to.equal(true);
        done();
    });
});
