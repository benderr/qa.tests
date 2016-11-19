'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

//var PORT = process.env.PORT || '3000';
var config = require('../kpp.microservice/config');
var api = supertest('http://localhost:' + config.port);
var kppUtility = require('../kpp.microservice/kppUtility');


describe('Валидация кпп', function () {

    it('Валидация кпп', function (done) {
            expect(kppUtility.validate('tbgtbhtdsad')).to.equal(true);
            done();
    });
});
