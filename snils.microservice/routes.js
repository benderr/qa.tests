'use strict';

var express = require('express');
var router = express.Router();
var snilsUtility = require('./snilsUtility');

router.get("/getdata", function (req, res) {
    res.send(snilsUtility.generate(true));
});

module.exports = router;
