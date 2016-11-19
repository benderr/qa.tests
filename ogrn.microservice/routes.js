'use strict';

var express = require('express');
var router = express.Router();
var ogrnUtility = require('./ogrnUtility');

router.get("/getdata/:type", function (req, res, next) {
    if (req.params.type == 'legal' || req.params.type == 'ip') {
        res.send(ogrnUtility.generate(req.params.type).toString());
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
