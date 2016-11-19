'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../country.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../country.microservice/utility');
var shortcountry = require('../dict/shortcountry');
var fullcountry = require('../dict/fullcountry');
var _it = require('./muttableIt')

describe('Проверка страны', function () {

    _it('Сокращённое наименование страны', function (done) {
    	var test = utility.generate('shortcountry');
        expect(shortcountry.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
    _it('Полное наименование страны', function (done) {
    	var test = utility.generate('fullcountry');
        expect(fullcountry.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
});
