'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../organization.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../organization.microservice/utility');
var shortname = require('../dict/shortname');
var fullname = require('../dict/fullname');
var _it = require('./muttableIt')

describe('Проверка правовой организации', function () {

    _it('Сокращённая форма', function (done) {
    	var test = utility.generate('shortname');
        expect(shortname.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
    _it('Полная форма', function (done) {
    	var test = utility.generate('fullname');
        expect(fullname.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
});
