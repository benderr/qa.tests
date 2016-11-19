'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../metrs.microservice/config');
var api = supertest('http://localhost:' + config.port);
var metrUtility = require('../metrs.microservice/metrUtility');
var dict = require('../dict/metr');
var _it = require('./muttableIt');


describe('Проверка единиц измерения', function () {

    _it('генерация', function (done) {
        var val = metrUtility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
