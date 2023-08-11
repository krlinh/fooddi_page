class HomeController{
    //[GET]/home
    show(req,res,next){
        res.render('home')
    }
}

module.exports = new HomeController;