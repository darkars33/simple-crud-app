const express = require('express');
const router = express.Router();
const Products = require('../models/product.model');
const {getProduct, getProductById, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller');

router.get('/' , getProduct)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;