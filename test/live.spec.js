'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../live.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../live.microservice/utility');
var dict = require('../dict/live')
var _it = require('./muttableIt')

describe('Проверка права на проживаение', function () {

    _it('Право на проживание', function (done) {
    	var test = utility.generate()
        expect(dict.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
});
