'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../fio.microservice/config');
var api = supertest('http://localhost:' + config.port);
var surnameUtility = require('../fio.microservice/surnameUtility');
var _it = require('./muttableIt')

describe('Проверка ФИО', function () {

    _it('ФИО eng male', function (done) {
        var val = surnameUtility.generate('eng', 'male');
        expect(/^[A-Za-z]* [A-Za-z]* [A-Za-z]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('ФИО rus male', function (done) {
        var val = surnameUtility.generate('rus', 'male');
        expect(/^[А-Яа-я]* [А-Яа-я]* [А-Яа-я]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('ФИО eng female', function (done) {
        var val = surnameUtility.generate('eng', 'female');
        expect(/^[A-Za-z]* [A-Za-z]* [A-Za-z]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('ФИО rus female', function (done) {
        var val = surnameUtility.generate('rus', 'female');
        expect(/^[А-Яа-я]* [А-Яа-я]* [А-Яа-я]*$/.test(val)).to.equal(true);
        done();
        return val;
    });
});
