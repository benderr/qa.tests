'use strict';

var express = require('express');
var router = express.Router();
var cardtypeUtility = require('./cardtypeUtility');

router.get("/getdata", function (req, res) {
    res.send(cardtypeUtility.generate().toString());
});
module.exports = router;
