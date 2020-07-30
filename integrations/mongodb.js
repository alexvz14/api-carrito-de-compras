const config = require('../config/config');
const mongoose = require('mongoose');

module.exports = class DB {
  static connect() {
    return mongoose.connect(config.MONGO_URI, {
      promiseLibrary: global.Promise,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  }
}