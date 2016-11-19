'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../city.microservice/config');
var cityUtility = require('../city.microservice/cityUtility');
var dict = require('../dict/city');
var _it = require('./muttableIt');

describe('Проверка города', function () {

    _it('Название города', function (done) {
        var cityName = cityUtility.generate();
        expect(dict.indexOf(cityName) >= 0).to.equal(true);
        done();
        return cityName;
    });
});
