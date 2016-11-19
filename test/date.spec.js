'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../inn.microservice/config');
var api = supertest('http://localhost:' + config.port);
var utility = require('../date.microservice/dateUtility');
var _it = require('./muttableIt');

describe('Валидация Даты', function () {

    _it('Формат ddMMyyyy', function (done) {
        var date = utility.generate('ddMMyyyy').toString();
        expect(date.length>0).to.equal(true);
        done();
        return date;
    });
    _it('Формат ddMMyy', function (done) {
        var date = utility.generate('ddMMyy').toString();
        expect(date.length>0).to.equal(true);
        done();
        return date;
    });
});
