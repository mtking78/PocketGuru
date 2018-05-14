var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");


function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}

// Create all our routes and set up logic within those routes where required.
router.get("/book", isLoggedIn, function (req, res) {
    console.log('It fired!')
    db.Book.findAll({
        where: {
            userId: req.user.id
        }
    }).then(function (results) {
        var hbsObject = {
            books: results
        };
        // console.log(results);
        res.render("reading", hbsObject);
    });
});


// Add new task to the db.
router.post("/book/create", isLoggedIn, function (req, res) {
    console.log("req.body: " + req.body);
    console.log("req.post: " + req.post);
    db.Book.create({
        title: req.body.title,
        author: req.body.author,
        value: req.body.value,
        estimated_time: req.body.estimated_time,
        userId: req.user.id
    }).then(function (results) {
        return res.json(results);
    });
});

// Set book completed status to true.
router.put("/api/books/:id", isLoggedIn, function (req, res) {
    db.Book.update({
        completed: req.body.completed
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (dbBook) {
        res.json(dbBook);
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

// Export routes for server.js to use.
module.exports = router;