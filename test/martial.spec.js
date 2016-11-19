'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../martial.microservice/config');
var api = supertest('http://localhost:' + config.port);
var martialUtility = require('../martial.microservice/martialUtility');
var dict = require('../dict/martial');
var _it = require('./muttableIt');

describe('Проверка семейного положения', function () {

    _it('Семейное положение', function (done) {
        var val = martialUtility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
