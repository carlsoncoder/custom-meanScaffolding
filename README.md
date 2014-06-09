# MEAN Stack Scaffolding with AngularJS phone-cat sample code

This project is a scaffolding for a slimmed down MEAN [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based application.

This was made as a slimmed down version of the [MEAN.io](http://mean.io/#!/) boilerplate ([GitHub - MEAN.io](https://github.com/linnovate/mean)), but trimming down the server side and client side code to more closely mimic that of the angular-phonecat tutorial at [AngularJS.org](https://docs.angularjs.org/tutorial).

This was made as an easy way to understand how all components of the MEAN stack fit together, and to also server as a starting point for branching and creating a new MEAN stack web application.

## Prerequisites
####*(assuming you're starting from a clean machine)*
* **Node.js / NPM** - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* **MongoDB** - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).  Also, create a folder in the root directory (C:\ in windows), called \data\db (C:\data\db).
* **GIT** - Download, Install, and Configure [Git](https://help.github.com/articles/set-up-git)

### Tools Prerequisites (all easily installed via `npm`!)
* [Bower](http://bower.io/) - Web package manager. 

```
$ npm install -g bower
```

* [nodemon](http://nodemon.io/) - Code and file reloader. 

```
$ npm install -g nodemon
```

* [Grunt](http://gruntjs.com) - JavaScript Task Runner - [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

```
$ npm install -g grunt
$ npm install -g grunt-cli
```

## Additional Packages Utilized
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* AngularJS - Defined as bower module in the [bower.json](bower.json) file.
* Twitter Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* UI Bootstrap - Defined as bower module in the [bower.json](bower.json) file.

## Getting Started After Pre-requisites
  Clone this repository into your directory via git and download dependencies
    
    $ [sudo] git clone [url] <dirName>
$ cd <dirName>
    $ npm install
$ bower install

Now, you'll need to run a script to insert mock data into your MongoDB instance.   Open up a command line and go to the MongoDB directory (or have the directory in your PATH variable), and run the following command:

    $ mongo "fullPath\scripts\insertMockMongoData.js"
    
  You should now have all required packages installed in your directory.  Simply start the server with the [Grunt](https://github.com/gruntjs/grunt-cli) command:

    $ grunt

  If grunt aborts due to JSHINT or CSSHINT errors, these can be overridden with the `force` flag:

    $ grunt --force

  Once running, simply open a browser and go to:

    http://localhost:3000

## License
[The MIT License](http://opensource.org/licenses/MIT)
