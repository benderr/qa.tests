'use strict';

var express = require('express');
var router = express.Router();
var localityUtility = require('./localityUtility');

router.get("/getdata", function (req, res) {
    res.send(localityUtility.generate().toString());
});
module.exports = router;
