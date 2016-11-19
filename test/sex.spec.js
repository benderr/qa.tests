'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../sex.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../sex.microservice/utility');
var dict = require('../core/dictService');
var _it = require('./muttableIt')

describe('Проверка пола', function () {
    _it('Пол на англ', function (done) {
        var arr = ['male', 'female']
        var test = utility.generate('eng');
        console.log(test)
        expect(arr.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
    _it('Пол на рус', function (done) {
        var arr = ['мужской','женский']
    	var test = utility.generate('rus');
        expect(arr.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
});
