const config = require('./config/config');
// Require the framework and instantiate it
const server = require('fastify')({ logger: true });
//const routes = require('fastify-routes');
const cors = require('fastify-cors');
const db = require('./integrations/mongodb');

//DB
db.connect();

server.register(cors);

//Routes
server.register(require('./modules/products/routes'), { prefix: '/api' })

server.listen(config.PORT, error => {
  if(error){
    server.log.error(error);
    process.exit(1);
  }
  server.log.info(`El carrito de compras está funcionando correctamente, en el puerto ${config.PORT}`);
})
