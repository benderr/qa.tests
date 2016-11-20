'use strict';

var express = require('express');
var router = express.Router();
var ogrnUtility = require('./ogrnUtility');

router.get("/getdata", function (req, res) {
    res.send(ogrnUtility.generate(req.query.type));
});

module.exports = router;
