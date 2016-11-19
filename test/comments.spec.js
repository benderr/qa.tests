'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var _it = require('./muttableIt');
var config = require('../comments.microservice/config');
var api = supertest('http://localhost:' + config.port);
var commentsUtility = require('../comments.microservice/commentsUtility');


describe('Проверка комментария', function () {
    _it('генерация комментария', function (done) {
        var val = commentsUtility.generate();
        expect(val.length > 0).to.equal(true);
        done();
        return val;
    });
});
