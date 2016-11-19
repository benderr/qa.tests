'use strict';

var express = require('express');
var router = express.Router();
var metrUtility = require('./metrUtility');

router.get("/getdata", function (req, res) {
    res.send(metrUtility.generate().toString());
});
module.exports = router;
