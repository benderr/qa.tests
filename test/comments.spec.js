'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../name.microservice/config');
var api = supertest('http://localhost:' + config.port);
var nameUtility = require('../name.microservice/nameUtility');


describe('Проверка комментария', function () {

    it('Комментарий', function (done) {
        expect(nameUtility.generate().length>0).to.equal(true);
        done();
    });
});
