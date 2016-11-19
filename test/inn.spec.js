'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var innUtility = require('../inn.microservice/innUtility')


describe('Валидация инн для юр лица', function () {

    it('Валидация инн', function (done) {
            expect(innUtility.validate('tbgtbhtdsad')).to.equal(true);
            done();
    });
});
