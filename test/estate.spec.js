'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../estate.microservice/config');
var api = supertest('http://localhost:' + config.port);
var estateUtility = require('../estate.microservice/estateUtility');
var estates = require('../dict/estate');
var _it = require('./muttableIt');

describe('Проверка вида недвижимости', function () {

    _it('Вид недвижимсоти', function (done) {
        var est = estateUtility.generate();
        expect(estates.indexOf(est) >= 0).to.equal(true);
        done();
        return est;
    });
});
