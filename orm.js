//ORM object// establish connection 
var connection = require ("./connection.js");

let orm = {
    //selectall// all the element that matches the specified string. parameters. 
    selectall: (getTable, callback) => {
        const queryStr = "SELECT * FROM ??"; 
        connection.query(queryStr, getTable,(err,result) => {
            if(err) {
                throw err; 
            }
            // run the classback function with result as argument// function passed into another argument, then invoked inside the outer function to complete a routine/action. 
            callback (result) 
        })
    },
    //insertOne Method (record)
    create: (newburger, callback) => {
        const queryStr = "INSERT INTO burgers (burgers_name) VALUES (?)";
        connection.query(queryStr, newburger, (err, result) => {
            if(err) {
                throw err; 
            }
            //run the callback function from burgers_controller.js 
            //with result as argument for response.json({id: result. insertID})
            callback(result)
        })
    },

    //updateone method (record)
    update:(selectedID, callback) => {
        const querystr = "UPDATE burgers SET devoured = NOT devoured WHERE id = ?";
        connection.query(querystr, selectedID, (err,result) => {
            if(err) {
                throw err; 
            }
            // run the callback function from burgers_controller.js
            // with result as argument for response.json({id: result.insertId})
            callback(result)
        })
    }

}
//export orm object
module.exports.orm;