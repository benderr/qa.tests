'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../citizen.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../citizen.microservice/utility');
var dict = require('../dict/citizen')
var _it = require('./muttableIt')

describe('Проверка Гражданства', function () {

    _it('Гражданство', function (done) {
    	var test = utility.generate()
		expect(dict.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
});
