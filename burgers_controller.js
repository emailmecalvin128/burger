// import express and burger.js
var express = require("express");
// create router object 
var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index (Main root Directory)
router.get("/", function(req, res) {
  burger.all (db_data) => {
      let burger = (
          burgers:db_data 
      )
  }
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    Response.json 
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});
// export router object for server.js
module.exports = router;