'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./currencyUtility');

router.get("/getdata", function (req, res, next) {
    res.send(utility.generate(req.query.type));
});

module.exports = router;
