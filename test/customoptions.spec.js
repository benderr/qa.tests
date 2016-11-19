'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');

var utility = require('../customoptions.microservice/utility');
var _it = require('./muttableIt');

describe('Проверка получения случайного значения из переданных', function () {

    _it('Получение случайного элемента - вар. 1', function (done) {
        var optionsStr = 'красный,синий,розовый,голубой,оранжевый,зеленый,желтый';
        var val = utility.getItem(optionsStr);
        expect(optionsStr.split(',').indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });

    _it('Получение случайного элемента - вар. 2', function (done) {
        var optionsStr = 'красный,синий,розовый,голубой,оранжевый,зеленый,желтый';
        var val = utility.getItem(optionsStr);
        expect(optionsStr.split(',').indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });

    _it('Получение случайного элемента - вар. 3', function (done) {
        var optionsStr = 'красный,синий,розовый,голубой,оранжевый,зеленый,желтый';
        var val = utility.getItem(optionsStr);
        expect(optionsStr.split(',').indexOf(val) >= 0).to.equal(true);
        done();
        return val;
    });
});
