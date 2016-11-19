'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../nation.microservice/config');
var api = supertest('http://localhost:' + config.port);
var nameUtility = require('../nation.microservice/nameUtility');


describe('Проверка национальности', function () {

    it('национальность', function (done) {
        expect(nationUtility.generate().length>0).to.equal(true);
        done();
    });
});
