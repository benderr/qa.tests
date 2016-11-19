'use strict';

var express = require('express');
var router = express.Router();

router.get("/getdata", function (req, res, next) {
        res.send('11');
});

module.exports = router;
