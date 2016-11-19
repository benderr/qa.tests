#!/usr/bin/env node

var bodyParser = require('body-parser');

var express = require('express');
var path = require('path');

function createApp(port, routes) {
    var app = express();
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use('/', routes);
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.set('port', port);
    return app;
}

module.exports = createApp;

