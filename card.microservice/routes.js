'use strict';

var express = require('express');
var router = express.Router();
var cardUtility = require('./cardUtility');

router.get("/getdata", function (req, res) {
    res.send(cardUtility.generate());
});

module.exports = router;
