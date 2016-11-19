'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var config = require('../estate.microservice/config');
var api = supertest('http://localhost:' + config.port);
var estateUtility = require('../estate.microservice/estateUtility');


describe('Проверка вида недвижимости', function () {

    it('Вид недвижимсоти', function (done) {
        expect(estateUtility.generate().length>0).to.equal(true);
        done();
    });
});
