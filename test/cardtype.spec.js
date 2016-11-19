'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../cardtype.microservice/config');
var api = supertest('http://localhost:' + config.port);
var cardtypeUtility = require('../cardtype.microservice/cardtypeUtility');
var _it = require('./muttableIt');

describe('Проверка типа карты', function () {
    _it('Тип карты', function (done) {
        var cardType = cardtypeUtility.generate();
        expect(["Дебетовая", "Кредитная"].indexOf(cardType) >= 0).to.equal(true);
        done();
        return cardType;
    });
});
