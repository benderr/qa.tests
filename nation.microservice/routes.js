'use strict';

var express = require('express');
var router = express.Router();
var nationUtility = require('./nationUtility');

router.get("/getdata", function (req, res) {
    res.send(nationUtility.generate().toString());
});
module.exports = router;
