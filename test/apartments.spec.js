'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../apartments.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../apartments.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка состояния квартиры', function () {

    _it('Состояние квартиры', function (done) {
    	var test = utility.generate()
        expect(test.length>0).to.equal(true);
        done();
        return test;
    });
});
