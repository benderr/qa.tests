'use strict';

var express = require('express');
var router = express.Router();
var regionsUtility = require('./regionsUtility');

router.get("/getdata", function (req, res) {
    res.send(regionsUtility.generate().toString());
});
module.exports = router;
