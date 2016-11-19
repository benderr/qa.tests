'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../card.microservice/config');
var api = supertest('http://localhost:' + config.port);
var cardUtility = require('../card.microservice/cardUtility');
var _it = require('./muttableIt');

describe('Валидация номера карты', function () {
    _it('Тест генератора', function (done) {
        var test = cardUtility.generate();
        expect(test).to.have.length(16);
        expect(cardUtility.validate(test)).to.equal(true);
        done();
        return test;
    });

    _it('Валидация номера карты', function (done) {
        expect(cardUtility.validate('5213243848784888')).to.equal(true);
        done();
        return 'валидный 5213243848784888';
    });

    _it('Валидация не валидного номера карты', function (done) {
        expect(cardUtility.validate('5213243848784881')).to.equal(false);
        done();
        return 'не валидный 5213243848784881';
    });

    _it('Валидация не валидного номера карты', function (done) {
        expect(cardUtility.validate('5469060015481523')).to.equal(true);
        done();
        return 'не валидный 5469060015481523';
    });
});
