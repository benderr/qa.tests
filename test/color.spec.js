'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../color.microservice/config');
var dict = require('../dict/color');
var colorUtility = require('../color.microservice/colorUtility');
var _it = require('./muttableIt');

describe('Проверка цвета', function () {

    _it('Цвет', function (done) {
        var val = colorUtility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
