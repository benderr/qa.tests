'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get("/getdata", function (req, res, next) {
    if (req.query && req.query.options) {
        res.send(utility.generate(req.query.options));
    }
    else {
        var err = new Error('Invalid options parametr, example getdata/?options=1,2,3');
        err.status = 500;
        next(err);
    }
});
module.exports = router;
