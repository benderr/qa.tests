'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../locality.microservice/config');
var api = supertest('http://localhost:' + config.port);
var localityUtility = require('../locality.microservice/localityUtility');


describe('Проверка семейного положения', function () {
    it('Семейное положение', function (done) {
        expect(localityUtility.generate().length>0).to.equal(true);
        done();
    });
});
