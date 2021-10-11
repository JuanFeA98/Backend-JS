const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Categorias')
})

// Endpoint GET con varios parametros
router.get('/:category_id/products/:product_id', (req, res)=>{
  const { category_id, product_id } = req.params;

  res.json(
    {
      category_id,
      product_id,
    }
  )
})

module.exports = router
