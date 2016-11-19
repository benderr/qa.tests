'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../cityStreet.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../cityStreet.microservice/utility');
var moscow = require('../dict/moscow');
var ufa = require('../dict/ufa');
var kazan = require('../dict/kazan');
var _it = require('./muttableIt')

describe('Проверка улиц', function () {

    _it('Улицы Москвы', function (done) {
    	var test = utility.generate('moscow');
        expect(moscow.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
    _it('Улицы Уфы', function (done) {
    	var test = utility.generate('ufa');
        expect(ufa.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
    
    _it('Улицы Казани', function (done) {
    	var test = utility.generate('kazan');
        expect(kazan.indexOf(test) >= 0).to.equal(true);
        done();
        return test;
    });
});
