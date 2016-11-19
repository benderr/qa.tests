'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../metall.microservice/config');
var api = supertest('http://localhost:' + config.port);
var metallUtility = require('../metall.microservice/metallUtility');
var dict = require('../dict/metall');
var _it = require('./muttableIt');


describe('Проверка металла', function () {

    _it('генерация', function (done) {
        var val = metallUtility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
