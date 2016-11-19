'use strict';

var express = require('express');
var router = express.Router();
var martialUtility = require('./martialUtility');

router.get("/getdata", function (req, res) {
    res.send(martialUtility.generate().toString());
});
module.exports = router;
