'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var _it = require('./muttableIt');
var config = require('../bank.microservice/config');
var api = supertest('http://localhost:' + config.port);
var bankUtility = require('../bank.microservice/bankUtility');


describe('Проверка наименования банка', function () {
    _it('Наименование банка', function (done) {
        var test = bankUtility.generate();
        expect(test.length > 0).to.equal(true);
        done();
        return test;
    });
});
