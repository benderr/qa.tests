'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../streets.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../streets.microservice/streetsUtility');
var _it = require('./muttableIt');
var dict = require('../dict/streets');

describe('Проверка типа улицы', function () {
    _it('Генерация', function (done) {
        var val = utility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
