'use strict';

var express = require('express');
var router = express.Router();
var transportModelUtility = require('./transportModelUtility');

router.get("/getdata", function (req, res) {
    res.send(transportModelUtility.generate().toString());
});
module.exports = router;
