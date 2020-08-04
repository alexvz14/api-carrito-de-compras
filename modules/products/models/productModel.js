const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: String, 
  maker : String, 
  car_type : String,
  price_mxn : Number,
  price_usd : Number,
  description_es : String,
  description_en : String,
  models : Array
}, {collection:'products'});

module.exports = mongoose.model('Product', Schema)