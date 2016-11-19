'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./dateUtility');

router.get("/getdata/:type", function (req, res, next) {
        res.send(utility.generate(req.params.type).toString());
});

module.exports = router;
