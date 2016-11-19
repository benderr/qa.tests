'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get("/getdata/:city", function (req, res, next) {
    if (req.params.city == 'moscow' || req.params.city == 'ufa' || req.params.city == 'kazan') {
        res.send(utility.generate(req.params.city));
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
