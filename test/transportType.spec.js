'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../transportType.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../transportType.microservice/transportTypeUtility');
var _it = require('./muttableIt');
var dict = require('../dict/transportType');


describe('Проверка вида транспорта', function () {

    _it('Генерация', function (done) {
        var val = utility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
