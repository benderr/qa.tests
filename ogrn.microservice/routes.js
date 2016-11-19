'use strict';

var express = require('express');
var router = express.Router();

router.get("/getdata/:type", function (req, res, next) {
    if (req.params.type == 'юр') {
        res.send('11');
    } else if (req.params.type == 'ип') {
        res.send('22');
    } else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
