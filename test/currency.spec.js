'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../currency.microservice/config');
var utility = require('../currency.microservice/currencyUtility');
var currencies = require('../dict/currencies');
var _it = require('./muttableIt');

describe('Проверка валюты', function () {

    _it('Язык', function (done) {
        var curLang = utility.generate(1);
        console.log(curLang);
        var existCur = currencies.filter(function (c) {
            return c.lang == curLang;
        });
        console.log(existCur);
        expect(existCur.length > 0).to.equal(true);
        done();
        return curLang;
    });
    _it('Символ', function (done) {
        var curLang = utility.generate(null, 1, null);
        console.log(curLang);
        var existCur = currencies.filter(function (c) {
            return c.symbol == curLang;
        });
        console.log(existCur);
        expect(existCur.length > 0).to.equal(true);
        done();
        return curLang;
    });
    _it('Сокращение', function (done) {
        var curLang = utility.generate(null, null, 1);
        console.log(curLang);
        var existCur = currencies.filter(function (c) {
            return c.sokr == curLang;
        });
        console.log(existCur);
        expect(existCur.length > 0).to.equal(true);
        done();
        return curLang;
    });
});
