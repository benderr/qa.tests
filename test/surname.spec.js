'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../surname.microservice/config');
var api = supertest('http://localhost:' + config.port);
var surnameUtility = require('../surname.microservice/surnameUtility');


describe('Проверка имени', function () {

    it('Имя', function (done) {
        expect(surnameUtility.generate('eng', 'male').length>0).to.equal(true);
        expect(surnameUtility.generate('rus', 'male').length>0).to.equal(true);
        expect(surnameUtility.generate('eng', 'female').length>0).to.equal(true);
        expect(surnameUtility.generate('rus', 'female').length>0).to.equal(true);
        done();
    });
});
