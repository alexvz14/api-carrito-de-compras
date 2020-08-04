# carrito-de-compras
Api Carrito de compras de Vehículos

## Para ejecutar la aplicación Backend

Descargar paquetes y dependencias:

### `npm install`

Ejecutar la aplicación Backend en modo desarrollo .<br />
Open [http://localhost:5001](http://localhost:5001) 

### `npm run dev`


** Importante tener servidor Mongo DB corriendo.<br />
### MongoDB 4.2.3 Community

** HOST
### localhost:27017

## Configurando conexión a MongoDB
**Recomendado usar MongoDB Compass Community 

Primero cree una nueva conexión

Cree una nueva base de datos llamada  ### `app` y una colección ### `products`
Por favor agregue una nueva coleción a su base de datos app llada ### `cart`.

De click o acceda a la collección ###`products`, en la opción *ADD DATA* seleccione `Import file`
seguido seleccione el tipo de dato JSON o CSV, cual sea su preferencia.

Por ultimo selccione el archivo incluido en este repositorio `cart.json` o `cart.csv` y de click en import.

Gracias ✌!
