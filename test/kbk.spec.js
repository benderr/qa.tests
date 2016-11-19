'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../kbk.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../kbk.microservice/utility');
var _it = require('./muttableIt');

describe('Валидация КБК', function () {

    _it('Валидация КБК', function (done) {
        expect(utility.validate('02011402015010000410')).to.equal(true);
        done();
        return '02011402015010000410';
    });

    _it('Генерация КБК', function (done) {
        var val = utility.generate();
        expect(val).to.have.length(20);
        done();
        return val;
    });
});
