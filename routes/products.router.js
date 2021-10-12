const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res)=>{
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
router.get('/:id', (req, res)=>{
  const { id }= req.params;

  res.json(
    {
      id,
      name: 'Producto 2',
      price: 31
    }
  )
})

router.post('/', (req, res)=>{
  const body = req.body;
  res.json({
    message: 'created',
    data:body
  })
})


router.patch('/:id', (req, res)=>{
  const { id } = req.params;

  const body = req.body;
  res.json({
    message: 'Updated',
    data:body,
    id
  })
})


module.exports = router
