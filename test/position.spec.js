'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../position.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../position.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка должности', function () {

    _it('Должность', function (done) {
    	var test = utility.generate()
        expect(test.length>0).to.equal(true);
        done();
        return test;
    });
});
