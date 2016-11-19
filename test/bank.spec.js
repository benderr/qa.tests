'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../bank.microservice/config');
var api = supertest('http://localhost:' + config.port);
var bankUtility = require('../bank.microservice/bankUtility');


describe('Проверка наименования банка', function () {

    it('Наименование банка', function (done) {
        expect(bankUtility.generate().length>0).to.equal(true);
        done();
    });
});
