'use strict';

var express = require('express');
var router = express.Router();
var apartmentsUtility = require('./apartmentsUtility');

router.get("/getdata", function (req, res) {
    res.send(apartmentsUtility.generate().toString());
});
module.exports = router;
