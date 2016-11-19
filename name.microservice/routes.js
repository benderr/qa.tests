'use strict';

var express = require('express');
var router = express.Router();
var nameUtility = require('./nameUtility');

router.get("/getdata/:lang/:sex", function (req, res, next) {
    if ((req.params.lang == 'eng' || req.params.lang == 'rus') && (req.params.sex == 'male'|| req.params.sex == 'female')) {
        res.send(nameUtility.generate(req.params.lang, req.params.sex));
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
