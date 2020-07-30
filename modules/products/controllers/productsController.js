const ProductsModel = require('../models/productModel');

exports.index = async (request, reply) => {
  try {
    const products = await ProductsModel.find();
    reply.status(200).send(products); 
  } catch (error) {
    reply.status(500).send('Hubo un error');
  }
}