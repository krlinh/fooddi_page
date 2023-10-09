const mongoose = require('mongoose');
const mongooseDelete =require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const Product = new Schema(
{   
    _id: {type: Number},
    name: {type: String},
    img: {type: String},
    description: {type: String},
    price: {type: Number},
    priceSale: {type: Number},
    status: {type: String},
    prdTypes:{type: String},
},
{  
    _id: false ,
    timestamps: true
});

Product.plugin(AutoIncrement);
Product.plugin(mongooseDelete, {overrideMethods: true});
module.exports = mongoose.model('Product', Product); 