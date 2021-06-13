var conn = require('./connection');

module.exports = {
    insertTodo: function (req, res) {
        const todo = req.body;
        conn.query('INSERT INTO TODO SET ?', [todo], function(err, results){
            if (err) return res.send(err);
            res.status(200).json(results.insertId);
        });
    },
    getAll: function (req, res) {
        conn.query('SELECT * FROM PRODUCT order by createDate desc', function (err, results){
            if (err) return res.send(err);
            res.status(200).json(results);
        });
    },
    deleteTodo: function (req, res) {
        const id = req.query.id;
        conn.query('DELETE FROM TODO WHERE ID = ?',[id], function (err, results){
            if (err) return res.send(err);
            res.status(200).json({message: 'Uspjesno obrisano'});
        });
},
updateTodo: function (req, res) {
    const todo = req.body;
    conn.query('UPDATE TODO SET ? where id = ?', [todo, todo.id], function (err, results){
        if (err) return res.send(err);
        res.status(200).json({message : 'Uspjesno azuriran'});
    });
       
},

searchProducts: function (req, res) {
        const searchProduct = req.body;
        let productCategoryIds = [];
        let query = "SELECT * FROM PRODUCT WHERE 1=1 ";
        if(searchProduct.device){
            query += `AND DEVICE = '${searchProduct.device}'`;
        }
        if(searchProduct.priceFrom){
            query += `AND PRICE >= '${searchProduct.priceFrom}'`;
        }
        if(searchProduct.priceTo){
            query += `AND PRICE <= '${searchProduct.priceTo}'`;
        }
        if(searchProduct.category1){
            productCategoryIds.push(3);
        }
        if(searchProduct.category2){
            productCategoryIds.push(2);
        }
        if(searchProduct.category3){
            productCategoryIds.push(1);
        }
        if(productCategoryIds.length > 0){
            console.log(productCategoryIds);
            query += `AND productCategoryId in (${productCategoryIds.toString()})`;
        }
        conn.query(query, function (err, results){
            if (err) return res.send(err);
            res.status(200).json(results);
        });
},

addProductToBasket: function(req, res){
    const product = req.body;
    conn.query('INSERT INTO BASKET SET ?', [product], function(err, results){
        if (err) return res.send(err);
        res.status(200).json(results.insertId);
    });



},
getBasketForUser: function (req, res) {
    const id = req.query.userId;
    conn.query('select b.id as mapId, p. * from basket b join product p on b .productId = p.id where b.userId = ? order by p.createDate desc',[id], function (err, results){
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
 }
  }
