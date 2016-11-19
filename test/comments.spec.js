'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../comments.microservice/config');
var api = supertest('http://localhost:' + config.port);
var commentsUtility = require('../comments.microservice/commentsUtility');


describe('Проверка комментария', function () {

    it('комментарий', function (done) {
        expect(commentsUtility.generate().length>0).to.equal(true);
        done();
    });
});
