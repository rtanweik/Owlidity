// declare dependancies
const express = require("express");
const user = require("./api/user");
const accounts = require("./api/accounts");
const transactions = require("./api/transactions");
const cors = require("cors"); // allow resource sharing within same machine

// start Node service
const service = express();
service.use(cors());
service.use(express.json());
service.use("/user", user.router);
service.use("/accounts", accounts.router);
service.use("/transactions", transactions.router);

service.listen (
    3000,
    (error)=>{
        if (error) {
            console.log("Error occured while starting the service");
        } else {
            console.log("Node service started on port 3000");
        }
    }
);

// File 1 - Mock Data
// File 2 - API 
// File 3 - Start Service (main.js)