'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../locality.microservice/config');
var api = supertest('http://localhost:' + config.port);
var localityUtility = require('../locality.microservice/localityUtility');
var _it = require('./muttableIt');

describe('Проверка населённого пункт', function () {
    _it('Генерация имени', function (done) {
        var val = localityUtility.generate();
        expect(val.length > 0).to.equal(true);
        done();
        return val;
    });
});
