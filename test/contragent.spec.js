'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../contragent.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../contragent.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка типа контрагента', function () {

    _it('Тип контрагента', function (done) {
    	var test = utility.generate()
        expect(test.length>0).to.equal(true);
        done();
        return test;
    });
});
