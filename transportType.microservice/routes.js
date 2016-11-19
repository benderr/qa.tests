'use strict';

var express = require('express');
var router = express.Router();
var transportTypeUtility = require('./transportTypeUtility');

router.get("/getdata", function (req, res) {
    res.send(transportTypeUtility.generate().toString());
});
module.exports = router;
