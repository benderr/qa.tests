'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../color.microservice/config');
var api = supertest('http://localhost:' + config.port);
var colorUtility = require('../color.microservice/colorUtility');


describe('Проверка цвета', function () {

    it('Цвет', function (done) {
        expect(colorUtility.generate().length>0).to.equal(true);
        done();
    });
});
