var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./timeStamp/TimeStampController');
app.use('/', UserController);

module.exports = app;