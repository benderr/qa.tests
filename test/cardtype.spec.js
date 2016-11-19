'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../cardtype.microservice/config');
var api = supertest('http://localhost:' + config.port);
var cardtypeUtility = require('../cardtype.microservice/cardtypeUtility');


describe('Проверка типа карты', function () {
    it('Тип карты', function (done) {
        expect(cardtypeUtility.generate().length>0).to.equal(true);
        done();
    });
});
