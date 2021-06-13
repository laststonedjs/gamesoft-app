var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    port: 3306,
    host: 'localhost',
    database: 'gamesoft'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = connection;
