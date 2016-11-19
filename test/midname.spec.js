'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../midname.microservice/config');
var api = supertest('http://localhost:' + config.port);
var surnameUtility = require('../midname.microservice/surnameUtility');
var _it = require('./muttableIt')

describe('Проверка фамилии', function () {

    _it('Фамилия', function (done) {
        expect(surnameUtility.generate('eng', 'male').length>0).to.equal(true);
        expect(surnameUtility.generate('rus', 'male').length>0).to.equal(true);
        expect(surnameUtility.generate('eng', 'female').length>0).to.equal(true);
        expect(surnameUtility.generate('rus', 'female').length>0).to.equal(true);
        done();
    });
});
