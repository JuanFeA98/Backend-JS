const express = require('express');
const router = express.Router();

// Endpoint GET con parametros tipo query
router.get('/', (req, res)=>{
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

module.exports = router
