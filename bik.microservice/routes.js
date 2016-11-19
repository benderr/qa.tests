'use strict';

var express = require('express');
var router = express.Router();
var bikUility = require('./bikUtility');

router.get("/getdata", function (req, res) {
    res.send(bikUility.generate().toString());
});

module.exports = router;
