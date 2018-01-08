var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var moment = require('moment');
// var helper = require('../helper.js');


router.use(bodyParser.urlencoded({ extended: true }));
var TimeStamp = require('./TimeStamp');

// CREATES A NEW DATE SUCCESSFULLY
// router.post('/', function (req, res) {
//     console.log('Post Called')
//     Date.create({
//             unix : req.body.unix,
//             natural : req.body.natural
//         }, 
//         function (err, date) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(date);
//         });
//     console.log('Date Created')
// });


router.get('/:text', function (req, res) {

    //grab the text from the url
    var urlText = req.params.text; //string

    var output = {};


    //check if unix
    if(isUnix(urlText)){ //url text is a unix timestamp
        var unixTimestamp = parseInt(urlText);
        var natural = moment(unixTimestamp, 'X').utc().format('MMMM Do, YYYY');

        // USE THIS IF NOT SAVING TO DB
        output['unix'] = unixTimestamp;
        output['natural'] = natural;
        res.json(output);

        // USE THIS IF SAVING TO DB
        // TimeStamp.create({
        //     unix : unixTimestamp,
        //     natural : natural
        // }, 
        // function (err, timestamp) {
        //     if (err) return res.status(500).send("There was a problem adding the information to the database.");
        //     res.status(200).send(timestamp);
        // });
    }

    //assumes local time zone so this will have a slightly different value
    //than listed online in the basejump
    else if(moment(urlText).isValid()){
        var natural = moment(urlText).utc().format('MMMM Do, YYYY');
        var unixTimestamp = moment(urlText).format('X');
        
        // USE THIS IF NOT SAVING TO DB
        output['unix'] = unixTimestamp;
        output['natural'] = natural;
        res.json(output);

        // USE THIS IF SAVING TO DB
        // TimeStamp.create({
        //     unix : unixTimestamp,
        //     natural : natural
        // }, 
        // function (err, timestamp) {
        //     if (err) return res.status(500).send("There was a problem adding the information to the database.");
        //     res.status(200).send(timestamp);
        // });
    }
    else{
        return res.status(500).send("There was a problem with the format of the request.");
    }
});


var isUnix = function(str){
    var date = parseInt(str);
    var minDate = 1;
    var maxDate = 4133894401;
    return date > minDate && date < maxDate;    
}

module.exports = router;