'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var superagent = require('superagent');

//var PORT = process.env.PORT || '3000';
var config = require('../ogrn.microservice/config');
var api = supertest('http://localhost:' + config.port);


describe('Валидация огрн', function () {
    it('Валидация длины огрн для юр.лиц', function (done) {
        api.get('/getdata/юр').end(function (err, res) {
            expect(res.text).to.have.length(13);
            done();
        });
    });
});
