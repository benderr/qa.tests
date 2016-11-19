'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var superagent = require('superagent');

//var PORT = process.env.PORT || '3000';
var config = require('../config');
var api = supertest('http://localhost:' + config.port);


describe('Валидация огрн', function () {
    it('', function (done) {
        api.get('/getdata/?p=юр').end(function (err, res) {
            expect(res.text).toBe('HELLO WORLD');
            done();
        });
    });
});
