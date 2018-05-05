// *** Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var db = require("../models");

// *** Routes
// =============================================================
// Index Page (render all burgers to html)
router.get("/", function (req, res) {
    // db.Task.findAll({}).then(function(results) {
    //     var hbsObject = {
    //         tasks: results
    //     };
        // console.log(hbsObject);
        // res.render("index", hbsObject);
        res.render("index");
    // });
});

// Add new burger to the db.
router.post("/api/tasks", function (req, res) {
    db.Task.create({
        burger_name: req.body.burger_name, 
        devoured: req.body.devoured
    }).then(function(results) {
        // Send back the ID of the new burger
        return res.json(results);
    });
});

// Set burger devoured status to true.
router.put("/api/tasks/:id", function(req, res) {
    db.Task.update({
        devoured: req.body.devoured
    }, {where: {
        id: req.params.id
    }}).then(function(dbTask) {
        if (dbTask.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.json(dbTask);
            res.status(200).end();
        }
    });
});

// Delete burger from db.
router.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({where: {
        id: req.params.id
    }}).then(function(results) {
        if (results.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            return res.json(results);
            res.status(200).end();
        }
    });
});

module.exports = router;