'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get("/getdata", function (req, res) {
    res.send(utility.generate().toString());
});
module.exports = router;
