const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var itemSchema = new Schema({
    name : String,
    description : String,
    count : Number
  },
  {collection : 'item'}
  );

module.exports = mongoose.model('Item', itemSchema);