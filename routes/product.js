const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.getAllProduct)
router.post('/', productController.createProduct)
router.get('/:id', productController.getSingleProduct)
router.patch('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
