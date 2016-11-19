'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var rankUtility = require('../rank.microservice/rankUtility');
var _it = require('./muttableIt');
var dict = require('../dict/rank');


describe('Проверка звания', function () {

    _it('Генерация', function (done) {
        var val = rankUtility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
