'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var utility = require('../property.microservice/propertyUtility');
var _it = require('./muttableIt');
var dict = require('../dict/property');


describe('Проверка права собственности', function () {

    _it('Генерация', function (done) {
        var val = utility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
