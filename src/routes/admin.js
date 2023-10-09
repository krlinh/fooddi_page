const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');
 
router.get('/store-products',adminController.storeProducts)
router.get('/',adminController.show);
module.exports=router;