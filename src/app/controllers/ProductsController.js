const Product = require("../models/Product");
//converst to object
const {mutipleMongooesToObject} = require('../../until/mongoose');
const {mongooseToObject} = require('../../until/mongoose');

class ProductsController{
    //[GET]/products
    show(req,res,next){
        res.send('product-page')
    };
    //[GET]/products/create
    create(req,res,next){
        res.render('product/create')
    }
    //[POST] /products/store
    store(req,res,next){
        const product = new Product(req.body)
        product.save()
        res.redirect('back');
    }
    //[DELETE]/products/delete-soft/:id
    deleteSoft(req,res,next){
        Product.delete({_id:req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }
}

module.exports = new ProductsController; 
