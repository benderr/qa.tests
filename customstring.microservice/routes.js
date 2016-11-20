'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get("/getdata", function (req, res, next) {
    if (req.query && req.query.symbols) {
        res.send(utility.getString(req.query.symbols, req.query.size));
    }
    else {
        var err = new Error('Invalid options parametr, example getdata/?symbols=123&size=3');
        err.status = 500;
        next(err);
    }
});
module.exports = router;
