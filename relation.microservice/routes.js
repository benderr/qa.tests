'use strict';

var express = require('express');
var router = express.Router();
var relationUtility = require('./relationUtility');

router.get("/getdata", function (req, res) {
    res.send(relationUtility.generate().toString());
});
module.exports = router;
