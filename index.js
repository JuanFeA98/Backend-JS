const express = require('express');
const faker = require('faker');

const app = express();
const port = 5000;

// Endpoint base GET
app.get('/', (req, res)=>{
  res.send('Hello, express!')
});

app.get('/nueva_ruta', (req, res)=>{
  res.send('Hola, soy una ruta nueva!')
});

app.get('/productos', (req, res)=>{
  const products = [];

  const { size } = req.query;
  const limit = size || 10;

  for (let index=0; index<limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }

  res.json(products)
});

// Endpoint GET con un parametro
app.get('/productos/:id', (req, res)=>{
  const { id }= req.params;

  res.json(
    {
      id,
      name: 'Producto 2',
      price: 31
    }
  )
})

// Endpoint GET con varios parametros
app.get('/categories/:category_id/products/:product_id', (req, res)=>{
  const { category_id, product_id } = req.params;

  res.json(
    {
      category_id,
      product_id,
    }
  )
})

// Endpoint GET con parametros tipo query
app.get('/users', (req, res)=>{
  const { limit, offset } = req.query;

  if (limit && offset){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }

})


app.listen(port, ()=>{
  console.log(`Server run in the port ${port}`)
})
