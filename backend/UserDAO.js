var conn = require('./connection');

module.exports = {
    register: function (req, res) {
        const user = req.body;
        conn.query('INSERT INTO USER SET ?', [user], function(err, results){
            if (err) return res.status(500).send(err);
            res.status(200).json(results.insertId);
        });
    },
    login: function (req, res) {
        const user = req.body;
        conn.query('SELECT * FROM USER WHERE username = ? and password = ?', [user.username, user.password], function(err, results){
            if (err) return res.status(500).send(err);
            res.status(200).json(results[0]);
        });
    }

};
