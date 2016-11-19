'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../education.microservice/config');
var api = supertest('http://localhost:' + config.port);
var educationUtility = require('../education.microservice/educationUtility');
var _it = require('./muttableIt');

describe('Проверка образования', function () {
    _it('генерация', function (done) {
        var edu = educationUtility.generate();
        expect(edu.length > 0).to.equal(true);
        done();
        return edu;
    });
});
