'use strict';

var express = require('express');
var router = express.Router();
var transportUtility = require('./transportUtility');

router.get("/getdata/:type", function (req, res, next) {
    if (req.params.type) {
        res.send(transportUtility.generate(req.params.type).toString());
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
