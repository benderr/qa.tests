'use strict';

var express = require('express');
var router = express.Router();
var commentsUtility = require('./commentsUtility');

router.get("/getdata", function (req, res) {
    res.send(commentsUtility.generate().toString());
});
module.exports = router;
