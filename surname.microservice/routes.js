'use strict';

var express = require('express');
var router = express.Router();
var surnameUtility = require('./surnameUtility');

router.get("/getdata/:lang/:sex", function (req, res, next) {
    if ((req.params.lang == 'eng' || req.params.lang == 'rus') && (req.params.sex == 'male'|| req.params.sex == 'female')) {
        res.send(surnameUtility.generate(req.params.lang, req.params.sex));
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
