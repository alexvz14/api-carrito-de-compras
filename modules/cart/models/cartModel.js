const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  token: String, 
  total_mxn : Number,
  total_usd: Number,
  items : [{
    model: String,
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    status: String
  }]
}, {collection:'cart'});

module.exports = mongoose.model('Cart', Schema)