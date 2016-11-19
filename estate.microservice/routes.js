'use strict';

var express = require('express');
var router = express.Router();
var estateUtility = require('./estateUtility');

router.get("/getdata", function (req, res) {
    res.send(estateUtility.generate().toString());
});
module.exports = router;
