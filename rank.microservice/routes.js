'use strict';

var express = require('express');
var router = express.Router();
var rankUtility = require('./rankUtility');

router.get("/getdata", function (req, res) {
    res.send(rankUtility.generate().toString());
});
module.exports = router;
