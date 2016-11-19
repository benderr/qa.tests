'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../card.microservice/config');
var api = supertest('http://localhost:' + config.port);
var cardUtility = require('../card.microservice/cardUtility');


describe('Валидация номера карты', function () {

    it('Валидация номера карты', function (done) {
            expect(cardUtility.validate('tbgtbhtdsad')).to.equal(true);
            done();
    });
});
