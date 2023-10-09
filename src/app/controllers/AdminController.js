const Product = require('../models/Product')
const {mutipleMongooesToObject} = require('../../until/mongoose');
class AdminController{
    show(req,res,next){
        res.render('admin/admin')
    }
    storeProducts(req,res,next){
        Product.find({})
            .then(products=>{
                res.render('admin/store/products',{
                    products: mutipleMongooesToObject(products)
                })
            })
            .catch(next);
    }
}
module.exports = new AdminController;