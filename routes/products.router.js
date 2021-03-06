const express = require('express');

const ProductsService = require('../services/products.service');

const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/products.schema');
const { validatorHandler } = require('../middlewares/validator.handler');

const router = express.Router();
const service = new ProductsService();

// Llamar a todos los productos
router.get('/', async(req, res)=>{
  const products = await service.find();
  res.json(products)
});

// Endpoint GET con un parametro
// Llamar a un producto especifico
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async(req, res, next)=>{
    try {
      const { id }= req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
})

// Agregar un nuevo producto
router.post('/',
validatorHandler(createProductSchema, 'body'),
  async(req, res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
)

// Actualizar la información de algun producto
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async(req, res, next)=>{
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

// Eliminar algun producto
router.delete('/:id', async(req, res)=>{
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta)
})

module.exports = router
