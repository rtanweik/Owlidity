const express = require("express");
database = require("../database/database");

const router = express.Router();

router.get("/get-all", (request,response) => {
    database.mysqlConnection.query(`SELECT * from customers`, (err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Internal Server Error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/get-by-id", (request,response) => {
    database.mysqlConnection.query(`SELECT * from customers where id=${request.query.id}`, (err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Internal Server Error");
        } else {
            response.status(200).send(results);
        }
    });
});



module.exports = {router};