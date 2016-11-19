'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../holy.microservice/config');
var api = supertest('http://localhost:' + config.port);
var holyUtility = require('../holy.microservice/holyUtility');


describe('Проверка вероисповедания', function () {

    it('Вероисповедание', function (done) {
        expect(holyUtility.generate().length>0).to.equal(true);
        done();
    });
});
