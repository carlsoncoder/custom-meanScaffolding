'use strict';

/* Module dependencies */
var mongoose = require('mongoose');
var Phone = mongoose.model('phones');
var PhoneDetail = mongoose.model('phoneDetails');

//Globals
var phone1, phone2;
var phoneDetail1, phoneDetail2;

//The tests
describe('<Unit Test>', function ()
{

    describe('Model Phone:', function ()
    {
        before(function (done)
        {
            phone1 = new Phone({
                age: 99,
                phoneId: 'testingPhoneID1',
                carrier: 'Fake Phone Company',
                imageUrl: '\img\test.jpg',
                name: 'justin',
                snippet: 'Hey there good buddy!'
            });
            phone2 = new Phone(phone1);

            done();
        });

        describe('Method Save', function ()
        {
            it('should begin without the test phone record', function (done)
            {
                Phone.find({ phoneId: 'testingPhoneID1' }, function (err, phones)
                {
                    phones.should.have.length(0);
                    done();
                });
            });

            it('should be able to save without problems', function (done)
            {
                phone1.save(done);
            });

            it('should find the newly added record in a search', function (done)
            {
                Phone.find({ phoneId: 'testingPhoneID1' }, function (err, phones)
                {
                    console.log(phones);
                    phones.should.have.length(1);
                    //phones[1].snippet.should.equal('Hey there good buddy!');
                    done();
                });
            });
        });

        after(function (done)
        {
            phone1.remove();
            done();
        });
    });

    describe('Model PhoneDetail:', function ()
    {
        before(function (done)
        {
            phoneDetail1 = new PhoneDetail({
                phoneId: 'testingPhoneDetailID1',
                name: 'Test Detail',
                description: 'This is a test detail record',
                additionalFeatures: 'I do not have any other features',
                bluetooth: 'yes',
                cell: '3G',
                gps: true,
                infrared: false,
                wifi: '802.11g',
                screenResolution: '500x300',
                screenSize: '5in.',
                touchScreen: true,
                images: [
                    'img/phones/dell-streak-7.0.jpg',
                    'img/phones/dell-streak-7.1.jpg',
                    'img/phones/dell-streak-7.2.jpg'
                ]
            });
            phoneDetail2 = new Phone(phoneDetail1);

            done();
        });

        describe('Method Save', function ()
        {
            it('should begin without the test phone detail record', function (done)
            {
                PhoneDetail.find({ phoneId: 'testingPhoneDetailID1' }, function (err, phoneDetails)
                {
                    phoneDetails.should.have.length(0);
                    done();
                });
            });

            it('should be able to save without problems', function (done)
            {
                phoneDetail1.save(done);
            });

            it('should find the newly added record in a search', function (done)
            {
                PhoneDetail.find({ phoneId: 'testingPhoneDetailID1' }, function (err, phoneDetails)
                {
                    phoneDetails.should.have.length(1);
                    phoneDetails[0].images.length.should.equal(3);
                    done();
                });
            });
        });

        after(function (done)
        {
            phoneDetail1.remove();
            done();
        });
    });

});