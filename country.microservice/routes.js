'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get("/getdata/:form", function (req, res, next) {
    if (req.params.form == 'shortcountry' || req.params.form == 'fullcountry') {
        res.send(utility.generate(req.params.form));
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
