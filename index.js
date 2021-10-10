const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res)=>{
  res.send('Hello, express!')
});

app.get('/nueva_ruta', (req, res)=>{
  res.send('Hola, soy una ruta nueva!')
});

app.get('/productos', (req, res)=>{
  res.json(
    [
      {
        name: 'Producto 1',
        price: 13
      },
      {
        name: 'Producto 2',
        price: 31
      },
    ]
  )
});

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

app.get('/categories/:category_id/products/:product_id', (req, res)=>{
  const { category_id, product_id } = req.params;

  res.json(
    {
      category_id,
      product_id,
    }
  )
})

app.listen(port, ()=>{
  console.log(`Server run in the port ${port}`)
})
