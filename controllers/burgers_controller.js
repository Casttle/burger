const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((data) => {
  res.render("index",{ burger: data });
  });
});

router.post("/burger/create", (req, res) => {
  burger.insertOne(req.body.burger_name,(result) => {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burger/:id", (req, res) => {
  burger.updateOne(req.params.id, (result) => {
    console.log(result);
      res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
