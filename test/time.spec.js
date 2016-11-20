'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../time.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../time.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка времени', function () {

    _it('Время', function (done) {
    	var test = utility.generate();    	
        expect(/^[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/.test(test)).to.equal(true);
        done();
        return test;
    });
});
