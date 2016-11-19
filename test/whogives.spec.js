'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../whogives.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../whogives.microservice/utility');
var _it = require('./muttableIt')

describe('Проверка того, кто выдал паспорт', function () {

    _it('Кто выдал', function (done) {
        var test = utility.generate();
        expect(test.length > 0).to.equal(true);
        done();
        return test;
    });
});
