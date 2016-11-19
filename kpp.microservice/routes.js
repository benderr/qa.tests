'use strict';

var express = require('express');
var router = express.Router();
var kppUility = require('./kppUtility');

router.get("/getdata", function (req, res) {
    res.send(kppUility.generate().toString());
});

module.exports = router;
