const CartController = require('./controllers/cartController');

module.exports = function (server, opts, done) {
  server.post('/cart', CartController.create);
  server.get('/cart/:token/:currency', CartController.get);
  server.post('/cart/:token/checkout', CartController.checkout);
  done();
}