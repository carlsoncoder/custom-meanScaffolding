'use strict';

/* Module dependencies */
var express = require('express');
var config = require('./config/config');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var methodOverride = require('method-override');

function configure(app){

    // Should be placed before express.static to ensure that all assets and data are compressed (utilize bandwidth)
    app.use(compression({
	    // Levels - 0 is no compression, 9 is best compression (but slowest)
        level: 9
    }));

    // Only use logger for development environment
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
	
    // Request body parsing middleware should be above methodOverride
    app.use(expressValidator());
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(express.static(config.root + '/public'));
}

module.exports.configure = configure;
