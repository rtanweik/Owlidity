require('dotenv').config();
const mysql = require("mysql");

parameters = {
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT,
    database : process.env.DB_NAME,
    multipleStatements : true,
};

const mysqlConnection = mysql.createConnection(parameters);

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }
})

/*mysqlConnection.query(`SELECT * from customers`, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
});*/

module.exports = {mysqlConnection};