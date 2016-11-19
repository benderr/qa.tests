'use strict';

var express = require('express');
var router = express.Router();
var utility = require('./kadastrUtility');

router.get("/getdata", function (req, res, next) {
        res.send(utility.generate().toString());
});

module.exports = router;
