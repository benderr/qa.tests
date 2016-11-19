'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var superagent = require('superagent');

var config = require('../transport.microservice/config');
var transportUtility = require('../transport.microservice/transportUtility');
var api = supertest('http://localhost:' + config.port);


describe('Валидация номера ТС', function () {
    it('Валидация сервиса для получения номера - гражд. авто', function (done) {
        var test = transportUtility.generate('auto');
        expect(transportUtility.validate(test, 'auto')).to.equal(true);
        done();
    });

    it('Валидация сервиса для получения номера - такси', function (done) {
        var test = transportUtility.generate('taxi');
        expect(transportUtility.validate(test, 'taxi')).to.equal(true);
        done();
    });

    it('Валидация сервиса для получения номера - транзит', function (done) {
        var test = transportUtility.generate('tranzit');
        expect(transportUtility.validate(test, 'tranzit')).to.equal(true);
        done();
    });

    it('Валидация сервиса для получения номера - МВД', function (done) {
        var test = transportUtility.generate('mvd');
        expect(transportUtility.validate(test, 'mvd')).to.equal(true);
        done();
    });

    it('Тест гражданские авто', function (done) {
        expect(transportUtility.validate('С227НА69', 'auto')).to.equal(true);
        expect(transportUtility.validate('Р344НА199', 'auto')).to.equal(true);
        done();
    });

    it('Тест такси', function (done) {
        expect(transportUtility.validate('АО36578', 'taxi')).to.equal(true);
        expect(transportUtility.validate('АО365102', 'taxi')).to.equal(true);
        done();
    });

    it('Тест прицепы', function (done) {
        expect(transportUtility.validate('АН733141', 'trailer')).to.equal(true);
        expect(transportUtility.validate('АН7331199', 'trailer')).to.equal(true);
        done();
    });

    it('Тест мотоциклы', function (done) {
        expect(transportUtility.validate('8776АЕ166', 'moto')).to.equal(true);
        expect(transportUtility.validate('3733ММ39', 'tractor')).to.equal(true);
        done();
    });

    it('Тест Транзитные номера', function (done) {
        expect(transportUtility.validate('СМ665К78', 'tranzit')).to.equal(true);
        done();
    });

    it('окончательно выезжающих за пределы Российской Федерации', function (done) {
        expect(transportUtility.validate('ТАО00269', 'exit')).to.equal(true);
        done();
    });

    it('Тест МВД', function (done) {
        expect(transportUtility.validate('А123478', 'mvd')).to.equal(true);
        expect(transportUtility.validate('А1234102', 'mvd')).to.equal(true);
        done();
    });

    it('Тест военные авто', function (done) {
        expect(transportUtility.validate('0245ОК43', 'military')).to.equal(true);
        done();
    });

});
