'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../depart.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../depart.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка кода подразделения паспорта РФ', function () {
    _it('Код подразделения', function (done) {
    	var test = utility.generate();
        expect(/^[0-9]{3}-[0-9]{3}$/.test(test)).to.equal(true);
        done();
        return test;
    });
});
