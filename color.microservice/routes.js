'use strict';

var express = require('express');
var router = express.Router();
var colorUtility = require('./colorUtility');

router.get("/getdata", function (req, res) {
    res.send(colorUtility.generate().toString());
});
module.exports = router;
