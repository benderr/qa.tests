'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./currencyUtility');

router.get("/getdata/:lang/:symbol/:sokr", function (req, res, next) {
    res.send(utility.generate(req.params.type, req.params.symbol, req.params.sokr).toString());
});

module.exports = router;
