'use strict';

var express = require('express');
var router = express.Router();
var materialUtility = require('./materialUtility');

router.get("/getdata", function (req, res) {
    res.send(materialUtility.generate().toString());
});
module.exports = router;
