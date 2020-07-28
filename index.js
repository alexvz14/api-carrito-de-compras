const config = require('./config/config');
// Require the framework and instantiate it
const server = require('fastify')({ logger: true });
const routes = require('fastify-routes');
const cors = require('fastify-cors');

server.register(cors);
server.register(routes);

//Routes
require('./modules/products/routes')(server);

server.listen(config.PORT, error => {
  if(error){
    server.log.error(error);
    process.exit(1);
  }
  server.log.info(`El carrito de compras está funcionando correctamente, en el puerto ${config.PORT}`);
})
