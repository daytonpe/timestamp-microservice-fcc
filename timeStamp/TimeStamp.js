var mongoose = require('mongoose');  
var TimeStampSchema = new mongoose.Schema({  
  unix: Number,
  natural: String
});
mongoose.model('TimeStamp', TimeStampSchema);

module.exports = mongoose.model('TimeStamp');