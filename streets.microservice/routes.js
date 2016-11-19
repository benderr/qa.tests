'use strict';

var express = require('express');
var router = express.Router();
var streetsUtility = require('./streetsUtility');

router.get("/getdata", function (req, res) {
    res.send(streetsUtility.generate().toString());
});
module.exports = router;
