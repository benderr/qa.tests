'use strict';
var routes = require('./routes');
var createApp = require('../core/appConfigurator');
var createServer = require('../core/serverConfigurator');
var normalizePort = require('../core/portNormalizer')
var config = require('./config');
var portNumber = normalizePort(config.port);
var app = createApp(portNumber, routes);

createServer(app, portNumber);
