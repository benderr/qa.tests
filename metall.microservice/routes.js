'use strict';

var express = require('express');
var router = express.Router();
var metallUtility = require('./metallUtility');

router.get("/getdata", function (req, res) {
    res.send(metallUtility.generate().toString());
});
module.exports = router;
