var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var books = require("../models/books.js");

// Create all our routes and set up logic within those routes where required.
router.get("/books", function (req, res) {
    books.all(function (data) {
        var hbsObject = {
            books: data
        };
        console.log(hbsObject);
        res.render("books", hbsObject);
    });
});

router.post("/books", function (req, res) {
    books.create(["title", "author"], [req.body.title, req.body.author], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId,
            Book: req.body.title,
            Author: req.body.author
        });
    });
});

// Export routes for server.js to use.
module.exports = router;