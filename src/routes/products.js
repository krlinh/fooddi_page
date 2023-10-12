const express = require('express');
const router = express.Router();
const productsController = require('../app/controllers/ProductsController');

router.get('/create',productsController.create);
router.post('/store',productsController.store);
router.get('/',productsController.show);
router.delete('/delete-soft/:id',productsController.deleteSoft)
module.exports = router 