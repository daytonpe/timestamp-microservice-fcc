var mongoose = require('mongoose');

var uri = "mongodb://user:password@ds245347.mlab.com:45347/timestamp-microservice-db"

mongoose.connect(uri, { useMongoClient: true }, function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
});


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));