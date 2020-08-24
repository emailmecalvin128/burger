//import orm object
var orm= require ('../config/orm.js');

const burger = {
    //the callback parameter renders the result to the index.handlebars template 
    all: (callback) => {
        orm.all ("burgers", (response) => {
            orm.create (burger_name, (response)=> {
                callback(response);
            })
        },
        create (burger_name, callback) => {
            orm.create(burger_name,(response) => {
                //forward the callback from burgers_controller.js
                //contain response.json(id:result: insertid)
                callback(response)
            })
        },
        update:(selectedID, callback) => {
            //forward the callback from burgers_controller.js
            //contain response.json (id:result:insertid)
            callback(response)
        })
    },
}
// export burger 
module.exports =burger; 