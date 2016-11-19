'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../educationType.microservice/config');
var api = supertest('http://localhost:' + config.port);
var educationTypeUtility = require('../educationType.microservice/educationTypeUtility');
var _it = require('./muttableIt');

describe('Проверка квалификации по образованию', function () {

    _it('Квалификации', function (done) {
        var eduType = educationTypeUtility.generate();
        expect(eduType.length > 0).to.equal(true);
        done();
        return eduType;
    });
});
