'use strict';

/* Module dependencies */
var express = require('express');
var config = require('./config/config');
var mongoose = require('mongoose');
var expressConfig = require('./expressConfig');
var errorHandler = require('errorhandler');
var routes = require('./routes');

/* Main application entry file - Please note that the order of loading is important. */

// Initializing system variables
var app = express();

// open global connection to MongoDB
mongoose.connect(config.db);

// setup express configuration
expressConfig.configure(app);

// configure all Express routes
routes.configureRoutes(app);
	
// Start the app by listening on <port>, optional hostname
app.listen(config.port, config.hostname);
console.log('App started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');

// Error handler - has to be last (intentionally excluded from expressConfig)
if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
    mongoose.set('debug', true);
}
		
// Expose app
exports = module.exports = app;