const ProductsController = require('./controllers/productsController');

module.exports = function (fastify, opts, done) {
  fastify.get('/products', ProductsController.index);
  done();
}