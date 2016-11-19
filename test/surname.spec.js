'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../surname.microservice/config');
var api = supertest('http://localhost:' + config.port);
var surnameUtility = require('../surname.microservice/surnameUtility');
var _it = require('./muttableIt')

describe('Проверка фамилии', function () {

    _it('Фамилия eng male', function (done) {
        var val = surnameUtility.generate('eng', 'male');
        expect(/^[A-Za-z]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('Фамилия rus male', function (done) {
        var val = surnameUtility.generate('rus', 'male');
        expect(/^[А-Яа-я]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('Фамилия eng female', function (done) {
        var val = surnameUtility.generate('eng', 'female');
        expect(/^[A-Za-z]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('Фамилия rus female', function (done) {
        var val = surnameUtility.generate('rus', 'female');
        expect(/^[А-Яа-я]*$/.test(val)).to.equal(true);
        done();
        return val;
    });
});
