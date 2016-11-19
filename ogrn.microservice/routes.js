'use strict';

var express = require('express');
var router = express.Router();

router.get("/getdata/:type", function (req, res) {
    res.send('HELLO WORLD');
});

module.exports = router;
