'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../cvv.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../cvv.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка пин кода', function () {
    _it('Пин код', function (done) {
    	var test = utility.generate();
        expect(/^[0-9]{3}$/.test(test)).to.equal(true);
        done();
        return test;
    });
});
