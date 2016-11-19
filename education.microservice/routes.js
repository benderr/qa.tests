'use strict';

var express = require('express');
var router = express.Router();
var educationUtility = require('./educationUtility');

router.get("/getdata", function (req, res) {
    res.send(educationUtility.generate().toString());
});
module.exports = router;
