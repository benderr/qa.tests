'use strict';

var express = require('express');
var router = express.Router();
var holyUtility = require('./holyUtility');

router.get("/getdata", function (req, res) {
    res.send(holyUtility.generate().toString());
});
module.exports = router;
