const homeRouter = require('./home');
const productsRouter = require('./products');
const adminRouter = require('./admin');
function route(app){
    app.use('/home',homeRouter);
    app.use('/products', productsRouter);
    app.use('/admin',adminRouter)
}
module.exports = route;