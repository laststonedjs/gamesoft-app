var express = require('express');
var app = express();
var PORT = 3000;
var bodyParser = require('body-parser');
var productDao = require('./ProductDAO');
var userDAO = require('./UserDAO');

app.use(bodyParser.json()); // json 
app.use(bodyParser.urlencoded({extended:true})) // encoded
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods',
   'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers',
   'Content-Type');
    next();
   });

app.get("/", function(req,res){
    res.send("Gamesoft app")
});

app.get("/product/all", productDao.getAll);
app.post("/product/search", productDao.searchProducts);
app.post("/product/add-to-basket", productDao.addProductToBasket);

app.post("/user/register", userDAO.register);
app.post("/user/login", userDAO.login);

app.get("/basket/products", productDao.getBasketForUser);

app.listen(PORT,function(){
    console.log('Application is started on port  ' + PORT);
});
