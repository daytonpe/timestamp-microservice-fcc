var moment = require('moment');

var isUnix = function(str){
    var date = parseInt(str);
    var minDate = 1;
    var maxDate = 4133894401;
    return date > minDate && date < maxDate;    
}


module.exports = isUnix;