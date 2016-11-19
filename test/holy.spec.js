'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../holy.microservice/config');
var api = supertest('http://localhost:' + config.port);
var holyUtility = require('../holy.microservice/holyUtility');
var holies = require('../dict/holy');
var _it = require('./muttableIt');

describe('Проверка вероисповедания', function () {
    _it('Вероисповедание', function (done) {
        var holy = holyUtility.generate();
        expect(holies.indexOf(holy) >= 0).to.equal(true);
        done();
        return holy;
    });
});
