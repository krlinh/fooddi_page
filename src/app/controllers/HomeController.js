const Product = require("../models/Product");

//converst to object
const {mutipleMongooesToObject} = require('../../until/mongoose');
const {mongooseToObject} = require('../../until/mongoose');

class homeController{
    //[GET]/home
    show(req,res,next){
        Product.find({prdTypes:{$in:["orderPrd"]}})
            .then(orderPrds=>{
                res.render('home',{
                    orderPrds: mutipleMongooesToObject(orderPrds)
                })
            })
            .catch(next)
    }
}

module.exports = new homeController; 