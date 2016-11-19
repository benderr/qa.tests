'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../name.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../name.microservice/nameUtility');
var _it = require('./muttableIt')

describe('Проверка имени', function () {

    _it('Фамилия eng male', function (done) {
        var val = utility.generate('eng', 'male');
        expect(/^[A-Za-z]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('Фамилия rus male', function (done) {
        var val = utility.generate('rus', 'male');
        expect(/^[А-Яа-я]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('Фамилия eng female', function (done) {
        var val = utility.generate('eng', 'female');
        expect(/^[A-Za-z]*$/.test(val)).to.equal(true);
        done();
        return val;
    });

    _it('Фамилия rus female', function (done) {
        var val = utility.generate('rus', 'female');
        expect(/^[А-Яа-я]*$/.test(val)).to.equal(true);
        done();
        return val;
    });
});
