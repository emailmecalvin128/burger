//sql connection 
var mysql = require ( "mysql"); 
// setup for burgers_db
if (process.env.burgers_db) {
    connection = mysql.createConnection({

        host:"localhost",
        port: 8080,
        user:"root",
        passowrd: "yourRootPassword",
        datbase:"burgers_db"
    });

}

connection.connect(function(err) {
    if(err) {
        console.error ("error:" +err.message); 
        return; 
    }
    console.log ("connected as id" + connection.threadId); 
});

//export connection 
module.exports = connection; 

