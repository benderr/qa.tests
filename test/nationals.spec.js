'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');


var config = require('../nation.microservice/config');
var api = supertest('http://localhost:' + config.port);
var nationUtility = require('../nation.microservice/nationUtility');
var dict = require('../dict/nation');
var _it = require('./muttableIt');

describe('Проверка национальности', function () {

    _it('генерация', function (done) {
        var val = nationUtility.generate();
        expect(dict.indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
