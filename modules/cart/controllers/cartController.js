const CartModel = require('../models/cartModel');
const ProductModel = require('../../products/models/productModel');

exports.create = async (request, reply) => {

  try {
    const {token, item} = request.body;
    const model = item.model;

    let product = await ProductModel.findById(item.id);
    if(!product){
      return reply.status(400).send('El producto no existe');
    }

    const hasModels = product.models.length > 0 ? true : false;
    if(hasModels && model == ''){
      return reply.status(400).send('Debe seleccionar un modelo');
    }

    if(!hasModels && model != ''){
      return reply.status(400).send('Este producto no tiene modelos');
    }

    if(hasModels){
      const modelFound = product.models.find(element => element == model);
      if(!modelFound){
        return reply.status(400).send('Este modelo no está disponible');
      }
    }

    let carexists = await CartModel.findOne({token:token});
    if(!carexists) {
      //Crear un carrito
      const cart = new CartModel(request.body);
      cart.items.push({product: product.id, model: model, status: 'Reservado'});
      cart.total_mxn = product.price_mxn;
      cart.total_usd = product.price_usd;
      await cart.save();
    }else{
      //Actualizar el carrito
      const productFound =  carexists.items.find(element => element.product == item.id);
      if(productFound){
        return reply.status(400).send('Este produto ya se encuentra en el carrito');
      }

      const total_mxn = carexists.total_mxn + product.price_mxn;
      const total_usd = carexists.total_usd + product.price_usd;
      await carexists.updateOne({ total_mxn: total_mxn, total_usd: total_usd, $push: { items: {product: product.id, model: model,  status: 'Reservado'} } });
    }

    reply.status(201).send('ok'); 

  } catch (error) {
    reply.status(500).send('Hubo un error');
  }
};

exports.get = async (request, reply) => {
  try {
    const {token, currency} = request.params;
    let carexists = await CartModel.findOne({token:token});
    if(!carexists) {
      return reply.status(404).send('Este carrito no está disponible');
    }

    const car = await CartModel.findOne({token:token}).populate('items.product', 'name maker models price_mxn price_usd');

    reply.status(201).send(car);

  } catch (error) {
    reply.status(500).send('Hubo un error');
  }
}

exports.checkout = async (request, reply) => {
  try {
    const {token} = request.params;
    let carexists = await CartModel.findOne({token:token});
    if(!carexists) {
      return reply.status(404).send('Este carrito no está disponible');
    }

    await CartModel.updateMany({token:token},{ $set: { "items.$[].status" : 'Comprado'} })
    
    reply.status(201).send('ok');
  } catch (error) {
    reply.status(500).send('Hubo un error');
  }
}

exports.deleteItemCart = async (request, reply) => {
  try {
    const {token, item} = request.body;
    let carexists = await CartModel.findOne({token:token});

    if(!carexists) {
      return reply.status(404).send('Este carrito no está disponible');
    }

    const productFound =  carexists.items.find(element => element.product == item);
    if(!productFound){
      return reply.status(404).send('Este produto no se encuentra en el carrito');
    }

    await CartModel.updateMany({  token:token }, { $pull: { "items": { product: item } } })

    reply.status(200).send('ok');
  } catch (error) {
    reply.status(500).send('Hubo un error');
  }
}