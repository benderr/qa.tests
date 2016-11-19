'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../doctype.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../doctype.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка типа документа', function () {

    _it('Тип документа', function (done) {
    	var test = utility.generate()
        expect(test.length>0).to.equal(true);
        done();
        return test;
    });
});
