'use strict';

var express = require('express');
var router = express.Router();
var cityUtility = require('./cityUtility');

router.get("/getdata", function (req, res) {
    res.send(cityUtility.generate().toString());
});
module.exports = router;
