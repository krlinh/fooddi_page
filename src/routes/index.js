const homeRouter = require('./home');
const productsRouter = require('./products')
function route(app){
    app.use('/home',homeRouter);
    app.use('/products', productsRouter);
}
module.exports = route;