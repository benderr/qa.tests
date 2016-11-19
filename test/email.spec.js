'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../email.microservice/emailUtility');
var _it = require('./muttableIt');

describe('Валидация email', function () {

    _it('получение случайного по домену', function (done) {
        var email = utility.generate('mail.ru');
        expect(utility.validate(email)).to.equal(true);
        expect(email.slice(-7) == 'mail.ru').to.equal(true);
        done();
        return email;
    });

    _it('получение случайного по домену, проверка сооветствия домена', function (done) {
        var email = utility.generate('gmail.com');
        expect(email.slice(-9) == 'gmail.com').to.equal(true);
        done();
        return email;
    });

    _it('Валидация пустого', function (done) {
        expect(utility.validate('')).to.equal(false);
        done();
    });
});
