'use strict';

var express = require('express');
var router = express.Router();
var educationTypeUtility = require('./educationTypeUtility');

router.get("/getdata", function (req, res) {
    res.send(educationTypeUtility.generate().toString());
});
module.exports = router;
