// *** Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var db = require("../models");

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}

// *** Exercise Routes
// =============================================================

// Request to find and display all exercise tasks (complete/incomplete).
router.get("/exercise", isLoggedIn, function (req, res) {
    db.Task.findAll({
        where: {
            category: "Exercise",
            userId: req.user.id
        }
    }).then(function (results) {
        var hbsObject = {
            tasks: results
        };
        // console.log(results);
        res.render("exercise", hbsObject);
    });
});

// Request to find sum of exercise points
router.get("/exercise/points", isLoggedIn, function (req, res) {
    db.Task.sum("value", {
        where: {
            category: "Exercise",
            completed: 1,
            userId: req.user.id
        }
    }).then(function (results) {
        // Send the data to be retrieved by model.js document.ready
        return res.json(results);
        console.log("Points: " + results);
    });
});

// Check to see if any tasks remain incomplete
router.get("/exercise/alltasks", isLoggedIn, function (req, res) {
    db.Task.findOne({
        where: {
            category: "Exercise",
            completed: false,
            userId: req.user.id
        }
    }).then(function (data) {
        return res.json(data);
    });
});

// Add new task to the db.
router.post("/exercise/create", isLoggedIn, function (req, res) {
    console.log("req.body: " + req.body);
    console.log("req.post: " + req.post);
    db.Task.create({
        task_name: req.body.task_name,
        category: req.body.category,
        value: req.body.value,
        // estimated_time: req.body.estimated_time,
        frequency: req.body.frequency,
        userId: req.user.id
    }).then(function (results) {
        return res.json(results);
    });
});

// Set task completed status to true.
router.put("/exercise/update/:id", isLoggedIn, function (req, res) {
    db.Task.update({
        completed: req.body.completed
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (dbTask) {
        if (dbTask.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.json(dbTask);
            res.status(200).end();
        }
    });
});

// Delete task from db.
router.delete("/exercise/delete", isLoggedIn, function (req, res) {
    db.Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (results) {
        if (results.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            return res.json(results);
            res.status(200).end();
        }
    });
});

// Check to see if any tasks remain incomplete
router.get("/userinfo", isLoggedIn, function (req, res) {
    db.user.findOne({})
    .then(function (data) {
        // console.log(data);
        console.log(data.dataValues.firstname);
        return res.json(data.dataValues.firstname);
    });
});

module.exports = router;