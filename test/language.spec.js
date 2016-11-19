'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../language.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../language.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка языка', function () {

    _it('Языка', function (done) {
    	var test = utility.generate()
        expect(test.length>0).to.equal(true);
        done();
        return test;
    });
});
