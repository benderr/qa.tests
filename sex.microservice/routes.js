'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get("/getdata/:lang", function (req, res, next) {
    if (req.params.lang == 'rus' || req.params.lang == 'eng') {
        res.send(utility.generate(req.params.lang));
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
