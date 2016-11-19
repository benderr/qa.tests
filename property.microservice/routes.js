'use strict';

var express = require('express');
var router = express.Router();
var propertyUtility = require('./propertyUtility');

router.get("/getdata", function (req, res) {
    res.send(propertyUtility.generate().toString());
});
module.exports = router;
