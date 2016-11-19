'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../material.microservice/config');
var api = supertest('http://localhost:' + config.port);
var materialUtility = require('../material.microservice/materialUtility');
var dict = require('../dict/material');
var _it = require('./muttableIt');

describe('Проверка материала дома', function () {

    _it('генерация', function (done) {
        var val = materialUtility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
