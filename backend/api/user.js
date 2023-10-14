// contains all APIs related to User handling

// declare dependancies
const express = require("express");
const database = require("../mock_data");
const router = express.Router();

router.get("/get-all", (request,response) => {
    const users = database.get_all_users();
    response.send(users);
});

router.get("/get-user-by-id", (request,response) => {
    //const {id} = request.query;
    const user = database.get_user_by_user_id(request.query.id);
    response.send(`User found ${user.first_name} ${user.last_name}`);
});

router.post("/add-user", (request,response) =>{
    const {first_name, last_name, email, phone} = request.body;
    database.add_user({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
    });
    response.send(database.get_all_users()); 
})

module.exports={router};