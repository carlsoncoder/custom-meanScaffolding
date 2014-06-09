'use strict';

var mongoose = require('mongoose');

var Phones = mongoose.model('phones', {
    age: Number,
    carrier: String,
    phoneId: String,
    imageUrl: String,
    name: String,
    snippet: String
}, 
// last argument should be the ACTUAL case sensitive name of the collection in MongoDB
'phones');

var phoneDetailsSchema = new mongoose.Schema(
{
    phoneId: String,
    name: String,
    description: String,
    additionalFeatures: String,
    bluetooth: String,
    cell: String,
    gps: Boolean,
    infrared: Boolean,
    wifi: String,
    screenResolution: String,
    screenSize: String,
    touchScreen: Boolean,
    images: [String]
});

var PhoneDetails = mongoose.model('phoneDetails', phoneDetailsSchema, 'phoneDetails');

module.exports.Phones = Phones;
module.exports.PhoneDetails = PhoneDetails;