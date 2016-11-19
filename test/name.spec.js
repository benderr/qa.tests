'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../name.microservice/config');
var api = supertest('http://localhost:' + config.port);
var nameUtility = require('../name.microservice/nameUtility');


describe('Проверка имени', function () {

    it('Имя', function (done) {
            expect(nameUtility.('tbgtbhtdsad')).to.equal(true);
            done();
    });
});
