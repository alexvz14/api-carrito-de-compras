const ProductsController = require('./controllers/productsController');

module.exports = server => {
    server.get('/productos', ProductsController.index)
}