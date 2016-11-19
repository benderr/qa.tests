'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../locality.microservice/config');
var api = supertest('http://localhost:' + config.port);
var localityUtility = require('../locality.microservice/localityUtility');


describe('Проверка населённого пункт', function () {
    it('Населённый пункт', function (done) {
        expect(localityUtility.generate().length>0).to.equal(true);
        done();
    });
});
