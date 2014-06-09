'use strict';

/* Module dependencies */
var path = require('path');
var models = require('./models');

function configureRoutes(app){
    // define express routes
    app.get('/api/mainRecords', function (req, res)
    {
        // use mongoose to get all the phones in the database
        models.Phones.find(function (err, phones)
        {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
            {
                res.send(err);
            }

            // return all records in JSON format
            res.json(phones);
        });
    });

    app.get('/api/details/:phoneId', function (req, res)
    {
        models.PhoneDetails.find({ phoneId: req.params.phoneId }, function (err, details)
        {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
            {
                res.send(err);
            }

            // return the first record in JSON format
            res.json(details[0]);
        });
    });

    app.get('*', function(req, res) {
	    // load the single view file (angular will handle the page changes on the front-end)
	    res.sendfile(path.resolve(__dirname + '../../public/index.html'));
    });
}

module.exports.configureRoutes = configureRoutes;