'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../postindex.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../postindex.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка улиц', function () {

    _it('Улицы Москвы', function (done) {
    	var test = utility.generate();
        expect(test >= 150000 && test <= 700000).to.equal(true);
        done();
        return test;
    });
});
