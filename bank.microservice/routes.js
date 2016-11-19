'use strict';

var express = require('express');
var router = express.Router();
var bankUtility = require('./bankUtility');

router.get("/getdata", function (req, res) {
    res.send(bankUtility.generate().toString());
});
module.exports = router;
