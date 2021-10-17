const express = require('express');

const ProductsService = require('../services/products.service')

const router = express.Router();
const service = new ProductsService();

// Llamar a todos los productos
router.get('/', (req, res)=>{
  const products = service.find();
  res.json(products)
});

// Endpoint GET con un parametro
// Llamar a un producto especifico
router.get('/:id', (req, res)=>{
  const { id }= req.params;
  const product = service.findOne(id);
  res.json(product);
})

// Agregar un nuevo producto
router.post('/', (req, res)=>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
})

// Actualizar la información de algun producto
router.patch('/:id', (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product)
})

// Eliminar algun producto
router.delete('/:id', (req, res)=>{
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta)
})

module.exports = router
