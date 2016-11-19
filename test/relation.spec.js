'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../relation.microservice/config');
var api = supertest('http://localhost:' + config.port);
var relationUtility = require('../relation.microservice/relationUtility');


describe('Проверка родственных связей', function () {

    it('Родственные связей', function (done) {
        expect(relationUtility.generate().length>0).to.equal(true);
        done();
    });
});
